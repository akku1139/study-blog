import type { Subject } from './types';

// ============================================================
// 大学情報科学（教養：計算論・機械学習・アルゴリズム）
// 情報I の延長線上にある「計算とは何か」「データから学ぶとは何か」を扱う。
// ============================================================

export const universityCS: Subject = {
  id: 'university-cs',
  stage: 'university',
  name: '大学情報科学（教養）',
  description:
    'アルゴリズムと計算量、計算可能性、データベース、機械学習の入門。「コンピュータにできること・できないこと」と「データから学ぶとはどういうことか」を学ぶ。',
  icon: '💾',
  color: '#0f172a',
  units: [
    {
      id: 'uni-cs-algorithms',
      name: 'アルゴリズムと計算量',
      gakushuShidoYoryo: '計算量オーダー、ソート・探索、動的計画法',
      lessons: [
        {
          id: 'complexity-basics',
          title: '計算量オーダー——速さの言い方',
          summary: '実時間ではなく「入力サイズへの増加率」でアルゴリズムを比較する。',
          objectives: [
            'O記法でアルゴリズムの増加率を表せる',
            '代表的なソートの計算量を比較できる',
            '多項式時間と指数時間の違いが「現実的に解けるか」の分水嶺であることを説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'なぜオーダーで語るのか' },
            {
              type: 'text',
              content:
                '同じコードでもマシンや言語で絶対時間は変わります。そこで**入力サイズ n を大きくしたとき、処理回数がどのくらいの割合で増えるか**だけを見るのがオーダー（ビッグオー）記法です。',
            },
            {
              type: 'table',
              headers: ['オーダー', '名前', 'n = 1000 での目安'],
              rows: [
                ['$O(1)$', '定数', '一瞬'],
                ['$O(\\log n)$', '対数', '約 10 ステップ（二分探索）'],
                ['$O(n)$', '線形', '1000 ステップ（全走査）'],
                ['$O(n \\log n)$', '線形対数', '約 10⁴（高速ソート）'],
                ['$O(n^2)$', '二乗', '10⁶（単純ソート）'],
                ['$O(2^n)$', '指数', '**宇宙規模**（部分全列挙）'],
              ],
            },
            { type: 'heading', level: 3, content: '代表例' },
            {
              type: 'list',
              items: [
                '**二分探索**: ソート済み配列なら $O(\\log n)$。1 回の比較で候補が半分になる',
                '**マージソート / クイックソート**: $O(n \\log n)$。比較ソートの理論的下限',
                '**バブルソート**: $O(n^2)$。遅いが理解しやすい',
                '**動的計画法**: 部分問題の答えを表に保存して重複計算を消す（フィボナッチで $O(2^n) \\to O(n)$）',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'n = 1024 のとき、$O(n^2)$ と $O(n \\log_2 n)$ の処理回数比はおよそ何倍か。',
              answer: '$1024^2 = 1048576$、$1024 \\times 10 = 10240$。比は **約 102 倍**。n が 10 倍になるごとに差はさらに開く。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '次のコードのオーダーを答えよ。\n```\nfor (let i = 0; i < n; i++) {\n  for (let j = 0; j < n; j++) sum++;\n}\n```',
                  answer: '$O(n^2)$。内側のループが n 回 × 外側が n 回。',
                },
                {
                  body: '辞書で単語を探すとき、ページを端からめくる方法と中央を開いて絞り込む方法のオーダーは？',
                  hint: '後者は二分探索そのもの。',
                  answer: '端からは $O(n)$、中央から絞り込む方式は $O(\\log n)$。1000 ページでも後者は 10 回程度の手間。',
                },
                {
                  body: '$O(2^n)$ のアルゴリズムで n を 10 増やすと処理時間は何倍になるか。',
                  answer: '$2^{10} = $ **1024 倍**。指数時間は入力サイズに対して爆発する。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（計算量）',
              questions: [
                {
                  question: 'ソート済みの配列から特定の値を探す最速の方法とその計算量は？',
                  choices: ['二分探索 O(log n)', '先頭からの全走査 O(n)', 'クイックソート O(n log n)'],
                  answerIndex: 0,
                  explanation: 'ソート済みという前提があるため二分探索が使え、対数時間で終わります。',
                },
                {
                  question: 'フィボナッチ数列を素朴な再帰で計算するときのオーダーは？',
                  choices: ['O(2^n)', 'O(n)', 'O(n²)'],
                  answerIndex: 0,
                  explanation: '同じ値を何度も再計算するため指数時間。メモ化（DP）で O(n) に落とせます。',
                },
                {
                  question: '「多項式時間で解ける」ことが意味するのは？',
                  choices: ['入力の増加に対して現実的な速度で解ける見込みが高い', '常に1秒以内に終わる', 'メモリを一切使わない'],
                  answerIndex: 0,
                  explanation: '多項式時間＝増加率が抑えられている状態。指数時間は n が少し増えるだけで手に負えなくなります。',
                },
              ],
            },
          ],
        },
        {
          id: 'computability-p-np',
          title: '計算可能性と P vs NP',
          summary: '「原理的に解けない問題」「解けても速くない問題」の違い。',
          objectives: [
            '停止性問題が決定不能であることを説明できる',
            'P 問題と NP 問題の違い、NP 完全の意義を述べられる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '解けないことが証明されている' },
            {
              type: 'text',
              content:
                'チューリングの**停止性問題**: 「任意のプログラム P と入力 x に対し、P は止まるか？」を判定する汎用プログラムは存在しないことが証明されています。**万能判定器をつくることは原理的に不可能**。',
            },
            {
              type: 'list',
              items: [
                '**決定可能**: 解くアルゴリズムが存在（大半の実務問題）',
                '**決定不能**: 原理的にアルゴリズムが存在しない（停止性問題、ヒルベルトの第10問題など）',
                '**計算可能性**は「いつか終わるか」の理論、**計算量**は「どれだけ早いか」の理論',
              ],
            },
            { type: 'heading', level: 3, content: 'P と NP' },
            {
              type: 'table',
              headers: ['クラス', '定義', '例'],
              rows: [
                ['P', '多項式時間で**解ける**', 'ソート、最短経路'],
                ['NP', '答えの候補は**多項式時間で検証できる**', '巡回セールスマン、SAT、ナップザック'],
                ['NP完全', 'NP の中でも特に難しく、どれか1つが多项式時間で解ければ全部解ける', '3-SAT、グラフ彩色'],
              ],
            },
            {
              type: 'note',
              variant: 'info',
              content: '**P ≠ NP 予想**は未解決のミレニアム問題。「答え合わせが楽な問題は本当に解くのも楽か？」という問いで、解決すれば暗号・創薬・物流まで一変します。',
            },
            {
              type: 'example',
              title: '例題',
              body: '数独の答え合わせと、白紙からの解答作成ではどちらが難しいか。この非対称性は NP のどの性質に対応するか。',
              answer: '**答え合わせは簡単、作成は困難**。候補解を多項式時間で検証できる（NPに属する）が、解く効率的な手法は知られていない状況そのもの。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '「このグラフは色 3 つで塗り分けられるか」は NP 完全である。これが多項式時間で解けた場合、何が起きるか。',
                  hint: 'NP完全の連鎖。',
                  answer: 'すべての NP 問題（SAT、ナップザック、TSP など）が多項式時間で解けるようになり **P = NP** が成立する。現代暗号の多くは「P ≠ NP（少なくとも一方向関数が存在する）」を前提としているため影響は甚大。',
                },
                {
                  body: 'ハノイの塔（n 枚）の最小手数は $2^n - 1$。これは何時間クラスか。',
                  answer: '**指数時間**。n が 30〜40 を超えると現実的な時間で終わらない。',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'uni-cs-ml',
      name: '機械学習とデータ',
      gakushuShidoYoryo: '教師あり学習、損失最小化、過学習と正則化、ニューラルネットワーク',
      lessons: [
        {
          id: 'supervised-learning',
          title: '機械学習の骨格——損失を最小にする',
          summary: '学習とは「予測誤差を数値化して、パラメータをずらす」作業。',
          objectives: [
            'モデル・損失・最適化の三層構造を説明できる',
            '訓練/テスト分割と過学習の関係を述べられる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '学習の三層構造' },
            {
              type: 'list',
              ordered: true,
              items: [
                '**モデル**: 入力から出力への写像の型（直線、木構造、ニューラルネットなど）。パラメータ θ を持つ',
                '**損失関数**: 「今の予測がどれだけ悪いか」を数値化（二乗誤差、交差エントロピーなど）',
                '**最適化**: 損失を小さくする θ を探す。基本は**勾配降下法** $\\theta \\leftarrow \\theta - \\eta \\frac{\\partial L}{\\partial \\theta}$',
              ],
            },
            { type: 'formula', tex: '\\theta_{t+1} = \\theta_t - \\eta \\, \\nabla L(\\theta_t)', display: true },
            {
              type: 'text',
              content:
                '$\\eta$ は学習率。大きすぎると発散、小さすぎると収束が遅い。ディープラーニングの進歩は、この単純な更新則を巨大なモデルで安定させる技術（Adam など）の積み重ねです。',
            },
            { type: 'heading', level: 3, content: '過学習と汎化' },
            {
              type: 'table',
              headers: ['状態', '症状', '対策'],
              rows: [
                ['未学習 (underfitting)', '訓練データでも精度が出ない', 'モデルを複雑にする・特徴を増やす'],
                ['過学習 (overfitting)', '訓練は満点だが新しいデータに弱い', 'データ増加、正則化、早期打ち切り、ドロップアウト'],
              ],
            },
            {
              type: 'text',
              content:
                '評価は必ず**学習に使っていないデータ**（テストセット）で行います。訓練データの成績は「暗記力」であり、実力ではない。',
            },
            {
              type: 'widget',
              widget: { id: 'monte-carlo-pi', caption: 'プレイグラウンド: ランダムサンプルを増やすほど推定が安定する——データ量と精度の関係' },
            },
            {
              type: 'example',
              title: '例題',
              body: 'テストで 95 点のモデル A と、訓練 100 点／テスト 70 点のモデル B、どちらを採用すべきか。',
              answer: '**A**。B は過学習の典型で、未知データへの汎化性能が低い。機械学習の目的は訓練成績ではなく汎化。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '学習率 η を極端に大きくすると何が起きやすいか。',
                  answer: '最適点を飛び越えて**発散・振動**する。逆に極端に小さいと収束までの時間が膨張する。',
                },
                {
                  body: '回帰で二乗誤差の代わりに「絶対誤差」を使うと、外れ値への反応はどう変わるか。',
                  hint: '2乗は大きなズレを強調する。',
                  answer: '**外れ値の影響が減る**。二乗は大きな誤差を強調するため、絶対誤差の方がロバスト。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（機械学習）',
              questions: [
                {
                  question: '過学習を抑える手段はどれか。',
                  choices: ['訓練データを増やす', 'テストデータで学習させる', '学習率をゼロにする'],
                  answerIndex: 0,
                  explanation: 'データ増加・正則化・モデル簡略化などが有効。テストデータでの学習は評価を無効化する禁じ手です。',
                },
                {
                  question: '勾配降下法で毎ステップ更新されるものは？',
                  choices: ['モデルのパラメータ', '入力データ', '損失関数の形'],
                  answerIndex: 0,
                  explanation: 'θ（重みやバイアスなどのパラメータ）が更新対象です。',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'uni-cs-systems',
      name: 'システム基礎',
      gakushuShidoYoryo: 'リレーショナルデータベース、SQL、TCP/IP 階層モデルと DNS。既存単元（アルゴリズム・機械学習）と並ぶ実システム入門。',
      lessons: [
        {
          id: 'database-sql-basics',
          title: 'データベースと SQL 基礎',
          summary: '表形式でデータを管理する考え方を学び、SELECT・WHERE・JOIN・集計という SQL の基本操作を実際に読み書きできるようになる。',
          objectives: [
            'リレーショナルモデルにおけるテーブル・行・列・主キーの役割を説明できる',
            'SELECT / WHERE / ORDER BY / GROUP BY を組み合わせた問い合わせを書ける',
            '正規化の目的と、JOIN による複数テーブルの結合を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'リレーショナルモデル——表で世界を表す' },
            {
              type: 'text',
              content: 'リレーショナルデータベース（RDB）は、データを**行（レコード）と列（カラム）からなるテーブル**で管理します。「学生テーブル」と「受講テーブル」を分けて持ち、必要なときに結合して使うのが基本設計です。各行を一意に指し示す列が**主キー（primary key）**、他テーブルの主キーを参照する列が**外部キー（foreign key）**です。',
            },
            {
              type: 'table',
              headers: ['用語', '意味', '例'],
              rows: [
                ['テーブル（関係）', '同じ種類のデータの集合', 'students'],
                ['行（タプル）', '1件分のデータ', '「1番, 田中, 2年」'],
                ['列（属性）', 'データの項目', 'id, name, grade'],
                ['主キー', '行を一意に決める列（重複・NULL 禁止）', 'id'],
                ['外部キー', '他テーブルの主キーを参照する列', 'student_id'],
              ],
            },
            { type: 'heading', level: 3, content: 'SQL——データに語りかける言葉' },
            {
              type: 'text',
              content: 'SQL（Structured Query Language）はデータベースへの命令文です。読み取りは **SELECT … FROM … WHERE** が基本形で、並べ替えは ORDER BY、集計は GROUP BY と COUNT・AVG などの**集約関数**を使います。宣言型言語であることが特徴で、「どう取得するか」ではなく「何がほしいか」を書くと、実行計画はデータベース側が最適化します。',
            },
            { type: 'formula', tex: '\\text{SELECT} \\to \\text{FROM} \\to \\text{WHERE} \\to \\text{GROUP BY} \\to \\text{HAVING} \\to \\text{ORDER BY}', display: true },
            {
              type: 'example',
              title: '例題',
              body: 'students(id, name, grade) と scores(student_id, subject, point) から「2 年生の科目別平均点」を求める SQL を書け。',
              answer: '**SELECT s.subject, AVG(s.point) FROM scores s JOIN students st ON st.id = s.student_id WHERE st.grade = 2 GROUP BY s.subject;**（WHERE で行を絞り、GROUP BY で科目ごとにまとめて平均を取る）',
            },
            {
              type: 'derivation',
              title: 'JOIN の結果の行数——なぜ結合キーで行数が決まるのか',
              steps: [
                {
                  label: 'Step 1: 素朴な組み合わせ（クロス結合）',
                  tex: '|A \\times B| = |A| \\cdot |B|',
                  note: '$m$ 行と $n$ 行のテーブルを無条件に組み合わせると全ペア $m n$ 行になります。',
                },
                {
                  label: 'Step 2: 条件で絞り込む（内部結合）',
                  tex: '|A \\bowtie B| = \\sum_{a \\in A} \\deg_B(a.key)',
                  note: '内部結合は「キーが一致するペアだけ」を残します。各行ごとの一致数（度数）の総和が結果の行数です。',
                },
                {
                  label: 'Step 3: 主キー結合なら高々 m 行',
                  tex: 'B.key \\text{ is PK} \\implies |A \\bowtie B| \\leq |A|',
                  note: '主キーは重複しないので、A の各行に対する一致は最大 1 個。行数が爆発しないのが主キー設計の効能です。',
                },
                {
                  label: 'Step 4: 実務上の教訓',
                  tex: '\\text{no index} \\Rightarrow O(mn), \\quad \\text{index on key} \\Rightarrow O(m \\log n)',
                  note: '結合キーにインデックス（B木など）があると探索が高速化します。「JOIN が遅い」問題の大半はインデックス不足です。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '正規化——重複を排除する設計' },
            {
              type: 'text',
              content: '1枚の巨大な表にすべてを書き込むと、同じ情報が何度も繰り返され、更新時の**矛盾（更新異常）**が起きます。そこでテーブルを分割して重複をなくすのが**正規化**です。第1正規形は「繰り返し項目をなくす」、第2正規形は「主キーの一部だけに依存する列を分離する」、第3正規形は「主キー以外への依存（推移依存）を分離する」ものです。',
            },
            {
              type: 'list',
              items: [
                '**第1正規形（1NF）**: 1つのセルに1つの値。繰り返し列を禁止',
                '**第2正規形（2NF）**: 複合主キーの一部にのみ依存する列を別テーブルへ',
                '**第3正規形（3NF）**: 主キー以外の列に依存する列（推移従属）を別テーブルへ',
              ],
            },
            {
              type: 'table',
              headers: ['操作系 SQL', '役割', '例'],
              rows: [
                ['SELECT', '読み取り', 'SELECT * FROM t WHERE id = 1'],
                ['INSERT', '追加', 'INSERT INTO t VALUES (...);'],
                ['UPDATE', '更新', 'UPDATE t SET name = \'Suzuki\' WHERE id = 2'],
                ['DELETE', '削除', 'DELETE FROM t WHERE id = 2'],
              ],
            },
            {
              type: 'note',
              variant: 'warn',
              content: 'WHERE 句を忘れた UPDATE や DELETE は**テーブル全体**が対象になります。本番環境での事故の定番なので、まず BEGIN（トランザクション開始）を打つ習慣を付けましょう。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'scores(subject, point) から point が 80 以上の行だけを取り出す SQL を書け。',
                  hint: 'SELECT … FROM … WHERE。',
                  answer: '**SELECT * FROM scores WHERE point >= 80;**',
                },
                {
                  body: 'students テーブルの行数を数える SQL を書け。',
                  answer: '**SELECT COUNT(*) FROM students;**',
                },
                {
                  body: '「受講履歴」を students に埋め込むと更新異常が起きる理由を述べよ。',
                  hint: '同じ学生名が何行も繰り返される状況を想像する。',
                  answer: '氏名などの属性が受講件数だけ繰り返し保存され、変更時に全行を直さず矛盾が残る（更新異常）。学生情報と受講記録を**テーブル分割（正規化）+ 外部キー**で分離すれば防げる',
                },
                {
                  body: '1000 行 × 1000 行のテーブルをインデックスなしで JOIN すると、最悪の場合どれくらいの比較が必要か。',
                  answer: '最悪 $10^6$ 回の比較（$O(mn)$）。インデックスがあれば各行あたり対数時間で一致行を見つけられる',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（DB・SQL）',
              questions: [
                {
                  question: 'テーブルの行を一意に特定する列はどれか。',
                  choices: ['主キー', '外部キー', 'ビュー'],
                  answerIndex: 0,
                  explanation: '主キーは重複と NULL が許されず、行を一意に識別します。外部キーは他テーブルの主キーへの参照です。',
                },
                {
                  question: '集約関数とセットで使う句はどれか。',
                  choices: ['GROUP BY', 'ORDER BY', 'LIMIT'],
                  answerIndex: 0,
                  explanation: 'COUNT や AVG の対象グループを作るのが GROUP BY です。HAVING はそのグループへの条件付けに使います。',
                },
                {
                  question: '第3正規形が排除する依存はどれか。',
                  choices: ['主キー以外の列への推移依存', 'NULL の存在', '外部キーの参照'],
                  answerIndex: 0,
                  explanation: '「A → B → C」のような推移従属を切り離し、更新異常を防ぎます。',
                },
              ],
            },
          ],
        },
        {
          id: 'network-tcpip-dns',
          title: 'ネットワークの階層モデル——TCP/IP と DNS の仕組み',
          summary: '通信を層に分けて考えると複雑なインターネットが整理できる。IP・TCP・DNS それぞれの役割分担と、ページ表示までの流れを追う。',
          objectives: [
            'TCP/IP 4層モデルの各層の役割と、カプセリングを説明できる',
            'TCP のコネクション確立（3-way ハンドシェイク）と信頼性確保の仕組みを述べられる',
            'DNS による名前解決の流れ（再帰・反復照会）を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'なぜ階層に分けるのか' },
            {
              type: 'text',
              content: 'インターネットの通信は「ケーブルに電気信号を流す」「経路を選ぶ」「データの抜けや順番を保証する」「アプリケーションの形式を扱う」というまったく違う関心事の積み重ねです。これを**層（レイヤ）**に分割すると、各層は上下の層が提供する機能だけを仮定して作れるので、独立に改良できます。TCP/IP モデルは4層、教科書的には OSI 参照モデルの7層で語られます。',
            },
            {
              type: 'table',
              headers: ['TCP/IP 層', '役割', '代表プロトコル', '住所の単位'],
              rows: [
                ['アプリケーション層', 'サービスの中身', 'HTTP, DNS, SMTP', 'URL／ドメイン名'],
                ['トランスポート層', '端末内のプロセス間の伝送・信頼性', 'TCP, UDP', 'ポート番号'],
                ['インターネット層', 'ネットワーク間の経路選択', 'IP, ICMP', 'IP アドレス'],
                ['ネットワークインターフェース層', '同一セグメント内の伝送', 'Ethernet, Wi-Fi', 'MAC アドレス'],
              ],
            },
            {
              type: 'note',
              variant: 'info',
              content: '送信側では上の層のデータに下の層のヘッダを付けて包む**カプセリング**、受信側では逆向きに剥がす**非カプセリング**が行われます。手紙を封筒に入れてさらに袋に入れる郵便処理に似ています。',
            },
            { type: 'heading', level: 3, content: 'IP と TCP——届ける層と正しく渡す層' },
            {
              type: 'text',
              content: '**IP** は宛先 IP アドレスを目印にパケットを相手ホストまで運びますが、到達保証も順序保証もありません（ベストエフォート）。その穴を埋めるのが **TCP** です。TCP はシーケンス番号で順序を管理し、確認応答（ACK）と再送で欠落を補い、ウィンドウ制御で流量を調整します。接続開始時には **3-way ハンドシェイク**（SYN → SYN-ACK → ACK）で双方の送受信能力を確認してからデータを流します。リアルタイム性を優先する音声通話などは、保証のない軽量な **UDP** を使います。',
            },
            {
              type: 'list',
              items: [
                '**SYN**: 接続したい（初期シーケンス番号を通知）',
                '**SYN-ACK**: 受けた側の承諾＋自分の初期シーケンス番号',
                '**ACK**: 承諾への応答 —— ここでコネクション確立',
              ],
            },
            { type: 'heading', level: 3, content: 'DNS——インターネットの電話帳' },
            {
              type: 'text',
              content: '人間が覚えるドメイン名（例：example.com）を機械が使う IP アドレスに変換するのが **DNS**（Domain Name System）です。鍵となるのは**階層的な名前空間**と、それに対応する委譲の仕組みです。ルート（.）→ TLD（com）→ ドメイン（example）→ ホスト（www）と、責任範囲（ゾーン）が木構造に分かれています。',
            },
            {
              type: 'derivation',
              title: '名前解決の所要ステップ——キャッシュと再帰照会',
              steps: [
                {
                  label: 'Step 1: スタブリゾルバが再帰照会を出す',
                  tex: '\\text{PC} \\to \\text{full resolver (ISP etc.)}',
                  note: 'OS のリゾルバはまず自分のキャッシュを見て、なければフルリゾルバに「答えを最後まで取ってきて」と依頼します（再帰照会）。',
                },
                {
                  label: 'Step 2: フルリゾルバがルートへ反復照会',
                  tex: '. \\to \\text{com} \\to \\text{example.com}',
                  note: 'フルリゾルバはルートサーバに聞き、「com の担当はここ」という参照（ referral ）を受け取り、次の権威サーバへ……とたどります（反復照会）。',
                },
                {
                  label: 'Step 3: 権威サーバが最終回答',
                  tex: '\\text{www.example.com} \\mapsto 203.0.113.10',
                  note: 'ドメインの権威サーバが A レコード（IPv4 アドレス）を返します。',
                },
                {
                  label: 'Step 4: TTL 付きでキャッシュする',
                  tex: 'TTL > 0 \\Rightarrow \\text{cache hit}, \\quad \\text{cost} = O(1)',
                  note: '得た答えは TTL の期間キャッシュされます。次回以降は上位サーバへ問い合わせずに済み、世界中の DNS トラフィックが現実的な規模に収まっています。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'ブラウザで https://www.example.com/ を開くとき、DNS・TCP・HTTP が関与する処理を順に述べよ。',
              answer: '**①** DNS で www.example.com の IP アドレスを解決（キャッシュ→ルート→TLD→権威） **②** その IP のポート 443 へ TCP 3-way ハンドシェイクで接続（TLS なら暗号化ネゴシエーションも） **③** HTTP リクエスト GET / を送り、レスポンスの HTML を受信して描画',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'TCP と UDP、どちらを使うべきか。ライブ配信（多少の欠落より遅延が問題）の場合を考えよ。',
                  hint: '再送で待つと遅延が増えることを考える。',
                  answer: '**UDP**。欠落したフレームは捨てて最新の映像を送るほうが体感品質が高い。信頼性より低遅延を優先する用途に向く',
                },
                {
                  body: 'ポート番号は何を識別するためのものか。',
                  answer: '同一ホスト内の**プロセス（アプリケーション）**。IP アドレスが「どのコンピュータか」を決めるのに対し、ポートは「その中のどのプログラムか」を決める',
                },
                {
                  body: 'フルリゾルバがキャッシュを持たない状態で www.example.com を引くとき、問い合わせる順序として正しいものは？',
                  hint: 'DNS の名前空間は「ルート → TLD → ドメイン」の木構造。',
                  answer: '**ルート → com（TLD）→ example.com の権威サーバ** の順に参照をたどる（反復照会）',
                },
                {
                  body: 'TCP の 3-way ハンドシェイクで、最初にクライアントから送られるセグメントの名前を答えよ。',
                  hint: '接続要求の合図。',
                  answer: '**SYN**。クライアントが SYN、サーバが SYN-ACK、クライアントが ACK を返す 3 往復でコネクションを確立する',
                },
                {
                  body: 'DNS キャッシュの TTL（Time To Live）が切れた後に名前解決をすると何が起こるか。',
                  answer: 'キャッシュを破棄して、もう一度**ルート → TLD → 権威サーバ**へ問い合わせ直す。TTL はレコードの鮮度を保つ仕組み',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（ネットワーク）',
              questions: [
                {
                  question: 'TCP のもっとも重要な役割はどれか。',
                  choices: ['データの順序保証・再送による信頼性の確保', 'IP アドレスから MAC アドレスへの変換', 'ドメイン名の登録管理'],
                  answerIndex: 0,
                  explanation: 'シーケンス番号・ACK・再送制御により、IP の「届くとは限らない」性質（ベストエフォート）を補完するのが TCP です。',
                },
                {
                  question: '3-way ハンドシェイクで最初にクライアントが送るセグメントはどれか。',
                  choices: ['SYN', 'ACK', 'FIN'],
                  answerIndex: 0,
                  explanation: 'SYN → SYN-ACK → ACK の 3 往復で双方の送受信能力を確認してからデータを流します。',
                },
                {
                  question: 'DNS のフルリゾルバが権威サーバへ行う照会方式はどれか。',
                  choices: ['反復照会', '再帰照会', 'ブロードキャスト'],
                  answerIndex: 0,
                  explanation: '「担当サーバを教えて」とたどるのが反復照会。PC からフルリゾルバへの依頼が再帰照会です。',
                },
              ],
            },
          ],
        },
      ],
    },

    ],
};
