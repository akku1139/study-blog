# 学習ノート（study-blog）

日本の中学校・高等学校の**学習指導要領に対応したオンライン教材**。教科書として読める詳細な解説に加え、数学・理科の**プレイグラウンド（グラフ描画・シミュレーション）**と**図解**を本文中に組み込んでいます。

## 起動方法

```bash
pnpm install
pnpm dev      # 開発サーバー
pnpm build    # 本番ビルド (tsc + vite) + 全ページのプリレンダリング
pnpm preview  # ビルド結果の確認
```

## SSG（静的サイト生成）

`pnpm build` の最終ステップで `scripts/prerender.mjs` が走り、**全ルート（トップ + 科目一覧 + 各レッスン + 404）を事前描画した HTML** を `dist/` に出力します。

- クライアントは生成済み HTML に対して**ハイドレーション**するだけなので初回表示が速く、SEO / OGP クロールにも強い構成です
- 各ページに `<title>` と `<meta name="description">`（レッスン名・概要）が注入されます
- KaTeX CSS・フォントも CDN なしでバンドルされるため完全オフライン動作します
- **Cloudflare Pages 向け設定済み**：
  - 出力ディレクトリ直下の `404.html` を未一致リクエストに 404 ステータスで返却（実在ルートはすべて個別プリレンダリング済みのため `_redirects` の SPA フォールバックは不要）
  - `public/_headers` でハッシュ付き `/assets/*` を immutable キャッシュ

### Cloudflare Pages でのデプロイ

| 項目 | 値 |
| --- | --- |
| フレームワークプリセット | Vite |
| ビルドコマンド | `pnpm build` |
| ビルド出力ディレクトリ | `dist` |


## 技術スタック

- Vite + React 19 + TypeScript
- react-router-dom（ルーティング）
- KaTeX（数式レンダリング）
- ビルド時プリレンダリング（自作 SSG スクリプト、Cloudflare Pages 想定）
- pnpm

## 構成

```
src/
├── content/            # 教科書コンテンツ（データ駆動）
│   ├── types.ts        # ブロック型の型定義（text / formula / diagram / widget / ...）
│   ├── index.ts        # 科目レジストリ ← 新しい科目はここに追加
│   ├── junior-math.ts  # 中学数学（数直線・連立方程式・二次関数・三平方…）
│   ├── junior-science.ts / junior-social.ts / junior-japanese.ts / junior-english.ts
│   ├── senior-math.ts  # 数学I・II（判別式・三角比・微分積分）
│   └── senior-physics.ts / senior-science.ts / senior-social.ts / senior-japanese.ts / senior-english.ts
├── components/
│   ├── Diagram.tsx     # 手書きSVGの静的図解ライブラリ
│   └── playground/     # インタラクティブ部品
│       ├── GraphCanvas.tsx       # 座標平面キャンバス（共通）
│       ├── FunctionGrapher.tsx   # y=ax²+bx+c / sin グラフ
│       ├── QuadraticExplorer.tsx # 二次関数の頂点・軸・x切片
│       ├── TrigCircle.tsx        # 単位円と三角関数
│       ├── DerivativeTangent.tsx # 接線と微分係数
│       ├── TriangleSolver.tsx    # 三平方の定理
│       ├── LinearSystem.tsx      # 連立方程式＝2直線の交点
│       ├── ProbabilitySimulator.tsx # 確率シミュレータ（大数の法則）
│       └── PhysicsProjectile.tsx # 放物運動シミュレータ
├── lib/math-render.tsx # $...$ 数式・**太字** のインライン描画
└── pages/              # ホーム・科目一覧・レッスンページ
```

## コンテンツの追加方法

1. `src/content/` に新しい `Subject` を定義（単元 → レッスン → ブロック列）
2. ブロックには解説文・KaTeX数式・表・例題（折りたたみ解答付き）・注意書きに加え、
   `{ type: 'diagram', diagram: '...' }` で静的図解、`{ type: 'widget', widget: {...} }` でプレイグラウンドを差し込める
3. `src/content/index.ts` の `subjects` 配列に追加するとサイトに自動反映される

各単元には学習指導要領の対応内容（内容欄）を `gakushuShidoYoryo` として記載しています。
