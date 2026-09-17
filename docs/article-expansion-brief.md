# 新記事執筆の共通指示

各担当は指定された src/content/additions/<slug>.ts の1ファイルのみ新規作成する。共有index・既存記事・package・この文書は編集しない。コミット・push・全体ビルド不要。全員完了後に親が登録・検証する。

- src/content/types.ts と担当科目の既存記事を確認し、既存の単なる言い換えでない独立したレッスンを書く。
- `import type { Lesson } from '../types.ts';` と `export const lesson: Lesson = {...}` を使用。
- idは指定ファイル名の拡張子を除いたslugと完全一致。日本語のtitle・summary・objectives（3項目以上）を設定。
- 丁寧な説明を見出しで構成し、具体的な計算や根拠のある例題を2題以上、答えと理由付きpracticeを3問以上、正答が一意で解説付きquizを3問以上。少なくとも12ブロック。量を埋める定型文を避ける。
- 数式の成立条件・単位・近似・例外を明示。数字は独立に検算する。国語英語の例文は自作と明記。統計・制度・史実は出典と対象時点、読み取れる限界を記載。確認できないURLや引用を捏造しない。
- TeXはString.raw文字列または適切な二重バックスラッシュ。cases等の行区切りを壊さない。可能なら数式以外の文は通常Unicodeを使う。
- 安全配慮：生物は概念・観察データの読解だけ。病原体・遺伝子操作の実用手順を入れない。サイバーは概念・防御・架空データで、攻撃や脆弱性再現手順を入れない。危険な化学実験・人体への実験は提案しない。
- Node v24のTypeScript直接importを使える。tsxや依存追加は不要。TypeScriptパッケージはv7で旧transpileModule APIを使わない。
- 単体検証：`pnpm exec tsc --ignoreConfig --noEmit --strict --skipLibCheck --target ES2022 --module ESNext --moduleResolution bundler --allowImportingTsExtensions <担当ファイル>`。Node直接importで構造と数値を検査し、KaTeXも検証。git diff --check（担当範囲）確認。
- 最終報告：ファイル・記事ID・主な説明と例題・問題数・根拠・実行した検証。終了前に記事ファイルが保存されていることを確認する。
