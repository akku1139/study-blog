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

/** ルートごとの <title> と meta description。route === null は 404 ページ */
function pageMeta(route) {
  if (route === '/') {
    return {
      title: `${SITE_NAME} — 中学・高校・大学 教科書＆プレイグラウンド`,
      description:
        '中学・高校の学習指導要領と大学教養課程に対応したオンライン教材。数式・図解・グラフやシミュレーションで学べる教科書。',
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
      description: '数学・情報I・化学の計算問題をランダム生成して無限に解けるトレーナー。14トピック収録。',
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
async function writePage(file, html, meta) {
  let page = template.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  // $ を含む HTML（KaTeX 出力）を壊さないよう関数置換を使う
  page = page
    .replace(/<title>.*?<\/title>/s, () => `<title>${meta.title}</title>`)
    .replace('</title>', () => `</title>\n    <meta name="description" content="${meta.description}" />`);
  const out = join(dist, file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, page);
}

/** 全ルート（トップ + 目次 + 科目一覧 + 各レッスン）を列挙 */
function enumerateRoutes() {
  const routes = ['/', '/toc', '/drills'];
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
  await writePage(file, html, pageMeta(route));
  count++;
}

// Cloudflare Pages は出力ディレクトリ直下の 404.html を未一致リクエストに 404 ステータスで返す。
// 全実在ルートは個別にプリレンダリング済みなので _redirects の SPA フォールバックは使わない。
await writePage('404.html', render('/__not_found__'), pageMeta(null));
count++;

console.log(`prerendered ${count} pages → dist/`);
