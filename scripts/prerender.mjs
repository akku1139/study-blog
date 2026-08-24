// ============================================================
// ビルド時プリレンダリング（SSG）
// dist/index.html をテンプレートに、全ルートの静的 HTML を生成する。
// - 各ページに <title> / meta description を注入
// - Cloudflare Pages 用にルート直下へ 404.html を出力
// 使い方: node scripts/prerender.mjs   （vite build 後に実行）
// ============================================================
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { subjects, render } from '../dist/server/entry-server.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
const template = await readFile(join(dist, 'index.html'), 'utf8');

const SITE_NAME = '学習ノート';

// 本番 URL（Cloudflare Pages）。sitemap.xml / robots.txt の正規 URL に使う。
const SITE_URL = (process.env.SITE_URL ?? 'https://another-textbook.pages.dev').replace(/\/$/, '');

/** ルートごとの <title> と meta description。route === null は 404 ページ */
function pageMeta(route) {
  if (route === '/') {
    return {
      title: `${SITE_NAME} — 中学・高校・大学の学習内容に沿った 自学習サイト＆プレイグラウンド`,
      description:
        '学校の学習内容に沿って自学習できるオンライン教材。数式・図解・グラフやシミュレーションで学べる詳細な解説を収録。',
    };
  }
  if (route === '/toc') {
    return {
      title: `目次 | ${SITE_NAME}`,
      description: '全科目・全レッスンの索引。読みたい単元へ直接ジャンプできます。',
    };
  }
  if (route === '/drills') {
    return {
      title: `無限ドリル | ${SITE_NAME}`,
      description: '数学・情報I・化学・英語・歴史の計算問題をランダム生成して無限に解けるトレーナー。全20トピック収録。',
    };
  }
  if (route === '/exam-prep') {
    return {
      title: `共通テスト直前チェック | ${SITE_NAME}`,
      description: '大学入学共通テストの科目別得点源チェックリスト。頻出要点と直前の復習戦略、当日の作戦を整理。',
    };
  }
  if (route === null) {
    return {
      title: `ページが見つかりません | ${SITE_NAME}`,
      description: 'お探しのページは存在しないか、移動しました。',
    };
  }
  for (const s of subjects) {
    if (route === `/subject/${s.id}`) {
      return { title: `${s.name} | ${SITE_NAME}`, description: s.description };
    }
    for (const u of s.units) {
      for (const l of u.lessons) {
        if (route === `/subject/${s.id}/${l.id}`) {
          return { title: `${l.title} | ${s.name} | ${SITE_NAME}`, description: l.summary };
        }
      }
    }
  }
}

/** SSR HTML とメタ情報から静的ページを組み立てて書き込む */
async function writePage(file, html, meta, route) {
  let page = template.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  // $ を含む HTML（KaTeX 出力）を壊さないよう関数置換を使う
  const canonicalTag =
    route == null
      ? ''
      : `\n    <link rel="canonical" href="${SITE_URL}${route === '/' ? '/' : route}" />`;
  page = page
    .replace(/<title>.*?<\/title>/s, () => `<title>${meta.title}</title>`)
    .replace(
      '</title>',
      () => `</title>\n    <meta name="description" content="${meta.description}" />${canonicalTag}`,
    );
  const out = join(dist, file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, page);
}

/** 全ルート（トップ + 目次 + 科目一覧 + 各レッスン）を列挙 */
function enumerateRoutes() {
  const routes = ['/', '/toc', '/drills', '/exam-prep'];
  for (const s of subjects) {
    routes.push(`/subject/${s.id}`);
    for (const u of s.units) {
      for (const l of u.lessons) {
        routes.push(`/subject/${s.id}/${l.id}`);
      }
    }
  }
  return routes;
}

let count = 0;
for (const route of enumerateRoutes()) {
  // 決定性確認：同じ URL から常に同じ HTML が得られること（ハイドレーション整合の前提）
  const html = render(route);
  if (!html || html !== render(route)) throw new Error(`非決定または空の出力: ${route}`);
  const file = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`;
  await writePage(file, html, pageMeta(route), route);
  count++;
}

// Cloudflare Pages は出力ディレクトリ直下の 404.html を未一致リクエストに 404 ステータスで返す。
// 全実在ルートは個別にプリレンダリング済みなので _redirects の SPA フォールバックは使わない。
await writePage('404.html', render('/__not_found__'), pageMeta(null), null);
count++;

// ---------- sitemap.xml ----------
// 全実在ルートを検索エンジンに伝える。トップは優先度最高、レッスンページは科目一覧より低め。
const today = new Date().toISOString().slice(0, 10);
function priorityOf(route) {
  if (route === '/') return '1.0';
  if (route === '/toc' || route === '/drills' || route === '/exam-prep') return '0.9';
  if (/^\/subject\/[^/]+$/.test(route)) return '0.8';
  return '0.7';
}
function changefreqOf(route) {
  // 教材は更新頻度が低い。トップとポータルだけ weekly、他は monthly
  if (route === '/' || route === '/drills' || route === '/exam-prep') return 'weekly';
  return 'monthly';
}
const urls = enumerateRoutes()
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqOf(route)}</changefreq>
    <priority>${priorityOf(route)}</priority>
  </url>`,
  )
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap, 'utf8');
count++;

// ---------- robots.txt ----------
// 全クローラー許可＋サイトマップの場所を明示
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
await writeFile(join(dist, 'robots.txt'), robots, 'utf8');
count++;

console.log(`prerendered ${count} pages → dist/`);
