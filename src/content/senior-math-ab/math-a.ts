import type { Unit } from '../types';

/** 数学A 第1項目「場合の数と確率」 */
export const countingUnit: Unit = {
  id: 'sa-counting',
  name: '数学A：場合の数と確率',
  gakushuShidoYoryo: '内容「場合の数と確率」順列・組合せ、確率の計算、条件付き確率',
  lessons: [
    {
      id: 'permutations-combinations',
      title: '順列・組合せ',
      summary: '和の法則・積の法則から、円順列・重複組合せまで数え上げる技術。',
      objectives: [
        '順列・組合せを使い分けて場合の数を求められる',
        '同じものを含む順列・重複組合せを扱える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '基本原則' },
        {
          type: 'list',
          items: [
            '**和の法則**: 場合が排他的なら「たす」',
            '**積の法則**: 段階的に選ぶなら「かける」',
            '**余事象**: 「少なくとも1つ」は全体 − 0個の場合で計算するのが速い',
          ],
        },
        { type: 'formula', tex: '{}_n\\mathrm{P}_r = \\frac{n!}{(n-r)!}, \\qquad {}_n\\mathrm{C}_r = \\frac{n!}{r!(n-r)!}, \\qquad {}_n\\mathrm{H}_r = {}_{n+r-1}\\mathrm{C}_r', display: true },
        {
          type: 'table',
          headers: ['パターン', '式'],
          rows: [
            ['円順列', '$(n-1)!$'],
            ['珠順列（裏返し区別なし）', '$n!/2$'],
            ['同じものを含む順列', '$\\dfrac{n!}{p!\\,q!}$'],
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: 'りんご5個とみかん4個から6個を選ぶ方法は何通り？（同種は区別しない）',
          answer: '重複組合せ ${}_{9}\\mathrm{H}_6 = {}_9\\mathrm{C}_4 = 126$ 通り',
        },
        {
          type: 'note',
          variant: 'warn',
          content: '「区別する／しない」を見極めるのが最重要。人・物・席のどれに区別があるか、問題文で必ず確認しましょう。',
        },
      ],
    },
    {
      id: 'probability',
      title: '確率',
      summary: '確率の基本的性質から独立試行・条件付き確率へ。',
      blocks: [
        { type: 'heading', level: 3, content: '確率の計算' },
        { type: 'formula', tex: "P(A) = \\frac{n(A)}{n(U)}, \\qquad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", display: true },
        { type: 'heading', level: 3, content: '条件付き確率と独立' },
        { type: 'formula', tex: 'P(B|A) = \\frac{P(A \\cap B)}{P(A)}, \\qquad A, B \\text{ 独立} \\iff P(A \\cap B) = P(A)P(B)', display: true },
        {
          type: 'text',
          content:
            '**反復試行**（独立な試行の繰り返し）で成功 r 回の確率は二項分布：$_n\\mathrm{C}_r p^r (1-p)^{n-r}$。',
        },
        {
          type: 'example',
          title: '例題',
          body: '表が出る確率 1/3 のコインを3回投げるとき、表がちょうど2回出る確率を求めよ。',
          answer: '${}_3\\mathrm{C}_2 (\\tfrac{1}{3})^2 (\\tfrac{2}{3}) = 3 \\times \\tfrac{1}{9} \\times \\tfrac{2}{3} = $ **2/9**',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: 'サイコロを2個投げるとき、目の和が 7 になる確率を求めよ。',
              hint: '和が 7 になる組は (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)。',
              answer: '$\\dfrac{6}{36} = $ **$\\dfrac{1}{6}$**',
            },
            {
              body: '白玉 3 個と黒玉 2 個が入った袋から同時に 2 個取り出す。両方とも白玉である確率を求めよ。',
              hint: '${}_5\\mathrm{C}_2 = 10$ 通りから白だけの ${}_3\\mathrm{C}_2$ 通り。',
              answer: '$\\dfrac{{}_3\\mathrm{C}_2}{{}_5\\mathrm{C}_2} = \\dfrac{3}{10}$',
            },
            {
              body: '表が出る確率 $\\dfrac{2}{3}$ のコインを 4 回投げるとき、表がちょうど 2 回出る確率を求めよ。（発展）',
              hint: '反復試行 ${}_n\\mathrm{C}_r p^r (1-p)^{n-r}$。',
              answer: '${}_4\\mathrm{C}_2 \\left(\\tfrac{2}{3}\\right)^2 \\left(\\tfrac{1}{3}\\right)^2 = 6 \\cdot \\tfrac{4}{9} \\cdot \\tfrac{1}{9} = $ **$\\dfrac{8}{27}$**',
            },
          ],
        },
        { type: 'heading', level: 3, content: '小ネタ: モンテカルロ法で円周率を推定' },
        {
          type: 'widget',
          widget: {
            id: 'monte-carlo-pi',
            caption: 'ランダムな点の「入り方の割合」から π を推定——確率が数値計算の道具になる例',
          },
        },
      ],
    },
    {
      id: 'counting-advanced',
      title: '場合の数の応用',
      summary: '重複組合せ・円順列・同じものを含む順列を導出から理解し、辞書式順序で何番目かを数える。',
      objectives: [
        '重複組合せ・円順列・同じものを含む順列の公式を導出を踏まえて使い分けられる',
        '制約つきの場合の数を場合分け・余事象・ブロック分けで処理できる',
        '辞書式順序で特定の並びが何番目かを系統的に数えられる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '応用パターンの全体像' },
        {
          type: 'text',
          content:
            '基本の順列・組合せに慣れたら、「区別のないもの」「丸い配置」「同一要素の混在」という拡張パターンに進みます。どの公式を使うべきかは、対象が区別できるか、配置に端がないか、同じ要素を含むかという3点で判定します。公式を丸暗記するより、それぞれがどう導けるかを一度自分で追いかけておくと、初見の問題でも慌てません。',
        },
        {
          type: 'table',
          headers: ['パターン', '状況', '公式'],
          rows: [
            ['重複組合せ', 'n 種類から重複を許して r 個選ぶ', '${}_n\\mathrm{H}_r = {}_{n+r-1}\\mathrm{C}_r$'],
            ['円順列', 'n 人を円形に並べる（回転を同一視）', '$(n-1)!$'],
            ['数珠順列', '円順列で裏返しも同一視', '$\\dfrac{(n-1)!}{2}$ （n は 3 以上）'],
            ['同じものを含む順列', 'n 個中に同一のものが p 個と q 個', '$\\dfrac{n!}{p!\\,q!}$'],
          ],
        },
        { type: 'heading', level: 3, content: '導出: 公式はこうしてできる' },
        {
          type: 'derivation',
          title: '重複組合せの公式の導出',
          steps: [
            {
              label: '整数解の問題に言い換える',
              tex: 'x_1 + x_2 + \\cdots + x_n = r',
              note: '種類 i を選ぶ個数を非負の整数 $x_i$ とすれば、選び方と整数解が1対1に対応する',
            },
            {
              label: '丸と仕切りで表す',
              tex: '\\underbrace{\\circ\\;\\circ\\;\\cdots\\;\\circ}_{r}\\;\\underbrace{\\mid\\;\\cdots\\;\\mid}_{n-1}',
              note: 'r 個の丸と n-1 本の仕切りを一列に並べた図が1つの選び方を表す',
            },
            {
              label: '並べ方を数える',
              tex: '{}_{n+r-1}\\mathrm{C}_{n-1} = {}_{n+r-1}\\mathrm{C}_r',
              note: '全体 n+r-1 個の位置から仕切りの置き場所を選べばよい',
            },
          ],
        },
        {
          type: 'derivation',
          title: '同じものを含む順列の導出',
          steps: [
            {
              label: '一旦すべて区別する',
              tex: 'n!',
              note: '同一の p 個と q 個に仮のラベルを付ければ、異なる n 文字の順列 n! 通り',
            },
            {
              label: 'ラベルの重複分を割り引く',
              tex: '\\dfrac{n!}{p!\\,q!}',
              note: 'ラベルの付け替え p! 通り（および q! 通り）はどれも同じ並びに見えるため割る',
            },
          ],
        },
        {
          type: 'note',
          variant: 'warn',
          content: '円順列は「誰か1人を基準に席を固定する」と通常の並びに帰着します。基準を決めないまま数えると、同じ配置を何度も数えてしまうのが典型的なミスです。',
        },
        { type: 'heading', level: 3, content: '辞書式順序で何番目か' },
        {
          type: 'text',
          content:
            '辞書式順序とは、辞書が単語を並べるのと同じ規則で並べた順序のことです。何番目かを求めるときは、注目する並びより前に現れる並びの総数を、上位の桁から順に確定させながら数えます。各段階では「残りの要素のうち、確定済みの数字より小さいもの」の個数に残りの階乗を掛ければよく、単純な積算で処理できます。',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '1番目の要素が注目値より小さいケースを数え、残りは自由なので $(n-1)!$ を掛ける',
            '1番目の要素を注目値に確定し、2番目以降でも同じ操作を繰り返す',
            '並びが完全に一致したら最後に自分自身の **1** を足して答えにする',
          ],
        },
        {
          type: 'example',
          title: '例題: 辞書式順序での順位',
          body: '1, 2, 3, 4, 5 の順列を辞書式順に小さいほうから並べるとき、31425 は何番目か。',
          answer:
            '先頭が 1 か 2 の並びは $2 \\times 4! = 48$ 個。3, 1 を確定したあと3番目が 2 の場合は $2! = 2$ 個（31245, 31254）。31425 の直前までに他の該当はないので、$48 + 2 + 1 = $ **51番目**',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: '6 種類のお菓子から、重複を許して合計 10 個買うときの買い方を求めよ。',
              hint: '各種類の個数を $x_i$ とすると $x_1 + \\cdots + x_6 = 10$ の非負整数解。',
              answer: '${}_6\\mathrm{H}_{10} = {}_{15}\\mathrm{C}_5 = $ **3003通り**',
            },
            {
              body: '8 人を円形のテーブルに座らせるとき、特定の 2 人が隣り合う座り方は何通りか。',
              hint: '隣り合う 2 人を 1 つのブロックとみなす。',
              answer: 'ブロックと他の 6 人の計 7 体の円順列 $(7-1)! = 720$ 通りに、ブロック内の並び 2 通りを掛けた **1440通り**',
            },
            {
              body: '1, 2, 3, 4 の順列を辞書式順にすべて並べるとき、2341 は先頭から何番目か。（発展）',
              hint: '先頭が 1 の並び、次に 21xx、231x の順で数える。',
              answer: '$3! + 2! + 1! = 9$ 個が前にあるので **10番目**',
            },
            {
              body: 'a, a, a, b, c の 5 文字を一列に並べるとき、aaa が連続する並び方は何通りか。（発展）',
              hint: 'aaa を 1 つのブロックとみなす。',
              answer: 'ブロック, b, c の 3 つの並び $3! = $ **6通り**',
            },
          ],
        },
        { type: 'heading', level: 3, content: '確認クイズ' },
        {
          type: 'quiz',
          questions: [
            {
              question: '5 人を円形に並べる円順列の総数はどれか。',
              choices: ['$5!$', '$(5-1)!$', '$\\dfrac{5!}{2}$', '$5^5$'],
              answerIndex: 1,
              explanation: '回転して重なる並びを同一視するので $5!/5 = 4!$。',
            },
            {
              question: 'x + y + z = 6 を満たす非負の整数解の個数はどれか。',
              choices: ['${}_8\\mathrm{C}_2 = 28$', '${}_6\\mathrm{C}_3 = 20$', '${}_6\\mathrm{P}_3 = 120$', '${}_6\\mathrm{C}_2 = 15$'],
              answerIndex: 0,
              explanation: '重複組合せ ${}_3\\mathrm{H}_6 = {}_8\\mathrm{C}_2$ に帰着する。',
            },
            {
              question: 'a を 2 個、b を 2 個、c を 1 個含む 5 文字の並び方は何通りか。',
              choices: ['$\\dfrac{5!}{2!\\,2!} = 30$', '$5! = 120$', '$\\dfrac{5!}{2!} = 60$', '$2^5 = 32$'],
              answerIndex: 0,
              explanation: '同じものを含む順列の公式で、同一文字数の階乗で割る。',
            },
          ],
        },
      ],
    },
    {
      id: 'conditional-probability',
      title: '条件付き確率とベイズの定理',
      summary: '情報で確率を更新する条件付き確率から、乗法定理・独立・ベイズの定理と偽陽性問題へ。',
      objectives: [
        '条件付き確率の定義に従って確率を計算できる',
        '乗法定理と独立の定義を正しく区別して使える',
        'ベイズの定理を導出し、検査の偽陽性などの実問題に適用できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '条件付き確率の定義' },
        {
          type: 'text',
          content:
            '「B が起こった」という情報を得たあとで A の確率を考え直すのが条件付き確率です。情報によって全事象が U から B へ縮むため、分母を $P(B)$ に取り替えた形が定義になります。確率の見直しという視点は、このあとのベイズ更新の土台になります。',
        },
        { type: 'formula', tex: 'P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)} \\qquad (P(B) > 0)', display: true },
        {
          type: 'table',
          headers: ['記号', '意味'],
          rows: [
            ['$P(A \\mid B)$', 'B が起こったとわかった条件下での A の確率'],
            ['$P(A \\cap B)$', 'A と B がともに起こる確率'],
            ['$P(A^c)$', 'A が起こらない確率（余事象）'],
          ],
        },
        { type: 'heading', level: 3, content: '乗法定理と独立' },
        {
          type: 'text',
          content:
            '条件付き確率の定義を変形すると、共通部分を「一方の確率 × 条件付き確率」で書く乗法定理が得られます。独立とは、片方の結果を知ってももう片方の確率が変わらないことを式にした概念です。独立と排反（同時に起こらない）は全く別の概念なので、混同しないよう注意しましょう。',
        },
        { type: 'formula', tex: 'P(A \\cap B) = P(B)\\,P(A \\mid B) = P(A)\\,P(B \\mid A), \\qquad A, B \\text{ 独立} \\iff P(A \\cap B) = P(A)\\,P(B)', display: true },
        { type: 'heading', level: 3, content: 'ベイズの定理' },
        {
          type: 'derivation',
          title: 'ベイズの定理の導出',
          steps: [
            {
              label: '乗法定理を2つの順序で書く',
              tex: 'P(A \\cap B) = P(B)\\,P(A \\mid B) = P(A)\\,P(B \\mid A)',
              note: '同じ共通部分の確率を、条件の向きを変えて2通りで表した等式',
            },
            {
              label: 'P(A|B) について整理',
              tex: 'P(A \\mid B) = \\dfrac{P(A)\\,P(B \\mid A)}{P(B)}',
              note: '右辺の $P(A)$ は事前確率、左辺は情報 B を得たあとの事後確率と呼ぶ',
            },
            {
              label: '分母を全確率の公式で展開',
              tex: 'P(B) = P(B \\mid A)\\,P(A) + P(B \\mid A^c)\\,P(A^c)',
              note: '原因が A と余事象に完全分割されるとき、直接測れない $P(B)$ を組み立てられる',
            },
          ],
        },
        {
          type: 'text',
          content:
            'ベイズの定理が威力を発揮するのが「珍しい事象を検出する問題」です。検査の精度が高くても、対象の病気の保有率（事前確率）が低いと、陽性判定の多くは誤判定になります。これを偽陽性のパラドックスと呼び、数式で確認しないと直感と大きく食い違うことで知られています。',
        },
        {
          type: 'example',
          title: '例題: 検査の偽陽性問題',
          body: 'ある病気の保有率は 1%。検査は病気の人を 99% の確率で陽性と判定し、健康な人を 5% の確率で誤って陽性とする。陽性判定を受けた人が実際に病気を持っている確率を求めよ。',
          answer:
            'D を保有、T を陽性判定とする。全確率の公式より $P(T) = 0.99 \\times 0.01 + 0.05 \\times 0.99 = 0.0594$。ベイズより $P(D \\mid T) = \\dfrac{0.0099}{0.0594} = $ **$\\dfrac{1}{6}$** （約 16.7%）',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: 'サイコロを 1 個投げて、出た目が偶数だとわかった。このとき目が 4 以上である確率を求めよ。',
              hint: '条件によって全事象が {2, 4, 6} に縮む。',
              answer: '**$\\dfrac{2}{3}$**',
            },
            {
              body: '白玉 3 個と黒玉 2 個が入った袋から 1 個ずつ取り出す。1 個目が白だったとき、2 個目も白である確率を求めよ。',
              hint: '1 個目を白とした時点で、袋には白 2 黒 2 が残る。',
              answer: '$\\dfrac{2}{4} = $ **$\\dfrac{1}{2}$**',
            },
            {
              body: 'ある地域で雨の日の割合は 20%。電車の遅延は雨の日に 30%、晴れの日に 10% 起こる。遅延が発生した日が雨の日だった確率を求めよ。（発展）',
              hint: '全確率の公式で、遅延が起こる確率を先に組み立てる。',
              answer: '$P(T) = 0.3 \\times 0.2 + 0.1 \\times 0.8 = 0.14$、$P(R \\mid T) = \\dfrac{0.06}{0.14} = $ **$\\dfrac{3}{7}$**',
            },
          ],
        },
        { type: 'heading', level: 3, content: '確認クイズ' },
        {
          type: 'quiz',
          questions: [
            {
              question: '$P(A \\cap B) = 0.2$、$P(B) = 0.5$ のとき $P(A \\mid B)$ の値は？',
              choices: ['$0.4$', '$0.1$', '$0.35$', '$0.25$'],
              answerIndex: 0,
              explanation: '定義どおり $0.2 \\div 0.5 = 0.4$。',
            },
            {
              question: 'A と B が独立であることの正しい定義はどれか。',
              choices: ['$P(A \\cap B) = P(A)P(B)$', '$P(A \\cap B) = 0$', '$P(A \\cup B) = P(A) + P(B)$', '$P(A \\mid B) = P(B)$'],
              answerIndex: 0,
              explanation: '排反（$P(A \\cap B) = 0$）は独立とは別物で、むしろ強い従属関係にある。',
            },
            {
              question: '有病率がさらに低い集団で同じ精度の検査を行うと、陽性的中率はどうなるか。',
              choices: ['下がる', '上がる', '変わらない', '0 になる'],
              answerIndex: 0,
              explanation: '偽陽性が相対的に増えるため、検査精度が一定でも的中率は下がる。',
            },
          ],
        },
      ],
    },
    {
      id: 'expected-value',
      title: '期待値と分散',
      summary: '期待値・分散の定義から線形性の証明へ進み、くじやゲームの公平性を数値で判断する。',
      objectives: [
        '離散型確率変数の期待値・分散・標準偏差を定義に従って計算できる',
        '期待値の線形性を証明し、複雑なゲームを分解して期待値を求められる',
        '期待値を根拠にくじやゲームの公平性を判断できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '期待値の定義' },
        {
          type: 'text',
          content:
            '確率変数 X の各値に「値 × 確率」を掛けて総和をとったものが期待値で、試行を大量に繰り返したときの平均の理論値です。賭けの損得、投資のリターン、品質管理の不良率など、意思決定の基準として幅広く使われます。サイコロの期待値が 3.5 のように、実現しない値になることも珍しくありません。',
        },
        { type: 'formula', tex: 'E(X) = \\sum_i x_i p_i, \\qquad V(X) = \\sum_i (x_i - m)^2 p_i \\quad (m = E(X))', display: true },
        {
          type: 'table',
          headers: ['くじの結果', 'もらえる金額', '確率'],
          rows: [
            ['当たり（1 本）', '500 円', '$\\tfrac{1}{10}$'],
            ['準当たり（2 本）', '100 円', '$\\tfrac{2}{10}$'],
            ['はずれ（7 本）', '0 円', '$\\tfrac{7}{10}$'],
          ],
        },
        { type: 'heading', level: 3, content: '分散の計算式' },
        {
          type: 'derivation',
          title: 'V(X) = E(X^2) - m^2 の導出',
          steps: [
            {
              label: '定義を展開する',
              tex: 'V(X) = \\sum_i (x_i - m)^2 p_i = \\sum_i \\left(x_i^2 - 2 m x_i + m^2\\right) p_i',
            },
            {
              label: '3 つの和に分ける',
              tex: '= E(X^2) - 2m E(X) + m^2',
              note: '$\\sum_i p_i = 1$ と $m$ が定数であることを使った',
            },
            {
              label: 'm = E(X) を代入',
              tex: '= E(X^2) - 2m^2 + m^2 = E(X^2) - m^2',
              note: '分散は「2乗の平均 − 平均の2乗」と覚えると計算が速い',
            },
          ],
        },
        { type: 'heading', level: 3, content: '期待値の線形性' },
        {
          type: 'text',
          content:
            '期待値の最大の武器は、和や定数倍に対して素直に働く線形性です。線形性を使うと、複雑なゲームの期待値を簡単な部品の和に分解でき、分布を具体的に書かなくても計算が閉じます。独立でない場合でも成り立つのがポイントで、それは次の証明で確認できます。',
        },
        {
          type: 'derivation',
          title: 'E(aX + Y) = aE(X) + E(Y) の証明',
          steps: [
            {
              label: '同時確率で定義を書く',
              tex: 'E(aX + Y) = \\sum_i \\sum_j (a x_i + y_j)\\, p_{ij}',
              note: '$p_{ij}$ は $X = x_i$ かつ $Y = y_j$ となる同時確率',
            },
            {
              label: 'aX の項と Y の項に分離',
              tex: '= a \\sum_i x_i \\left( \\sum_j p_{ij} \\right) + \\sum_j y_j \\left( \\sum_i p_{ij} \\right)',
            },
            {
              label: '周辺確率にまとめる',
              tex: '= a \\sum_i x_i p_i + \\sum_j y_j q_j = aE(X) + E(Y)',
              note: '括弧内の和は周辺確率 $p_i$, $q_j$ に等しい。独立性はどこにも使っていない',
            },
          ],
        },
        {
          type: 'example',
          title: '例題: くじの期待値と公平性',
          body: '1 本 100 円のくじが 10 本あり、当たり 1 本は 500 円、準当たり 2 本は 100 円の商品券がもらえる。1 本引いたときのもらえる金額 X の期待値と、引く側の損得を求めよ。',
          answer:
            '$E(X) = 500 \\times \\tfrac{1}{10} + 100 \\times \\tfrac{2}{10} = 70$ 円。支払い 100 円と比べて $70 - 100 = $ **-30円** なので、引く側は平均 30 円の損となる',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: 'サイコロ 1 個の出る目 X の期待値と分散を求めよ。',
              hint: '$E(X^2) = \\tfrac{1}{6}(1 + 4 + 9 + 16 + 25 + 36) = \\tfrac{91}{6}$。',
              answer: '$E(X) = 3.5$、$V(X) = \\tfrac{91}{6} - \\tfrac{49}{4} = $ **$\\dfrac{35}{12}$**',
            },
            {
              body: 'サイコロ 2 個の目の和の期待値を、線形性を用いて求めよ。',
              hint: '和を X + Y とすると、$E(X + Y) = E(X) + E(Y)$。',
              answer: '$3.5 + 3.5 = $ **7**',
            },
            {
              body: '300 円を払うとサイコロを 1 回振れて、出た目 × 100 円をもらえるゲームがある。参加する側は得か損か。',
              hint: 'もらえる金額の期待値は $100 E(X)$。',
              answer: '$100 \\times 3.5 = 350$ 円 > 300 円なので、1 回あたり平均 **50円得** する',
            },
            {
              body: '表が出る確率 1/2 のコインを 3 回投げるとき、表の枚数 X の期待値と分散を求めよ。（発展）',
              hint: '各回の表の枚数は期待値 0.5・分散 0.25。線形性と独立性で合計できる。',
              answer: '$E(X) = 1.5$、$V(X) = 3 \\times 0.25 = $ **0.75**',
            },
          ],
        },
        { type: 'heading', level: 3, content: '確認クイズ' },
        {
          type: 'quiz',
          questions: [
            {
              question: '$E(X) = 4$ のとき $E(2X + 3)$ の値は？',
              choices: ['$11$', '$8$', '$14$', '$24$'],
              answerIndex: 0,
              explanation: '線形性より $2 \\times 4 + 3 = 11$。',
            },
            {
              question: '$E(X) = 2$、$E(X^2) = 10$ のとき $V(X)$ の値は？',
              choices: ['$6$', '$8$', '$12$', '$\\sqrt{6}$'],
              answerIndex: 0,
              explanation: '$V(X) = E(X^2) - (E(X))^2 = 10 - 4$。',
            },
            {
              question: '期待値の観点で「公平なゲーム」を最も正しく説明しているものはどれか。',
              choices: ['参加者の損得の期待値が 0 になるゲーム', '毎回必ず勝てるゲーム', '期待値が最大の選択肢しか存在しないゲーム', '運営者の収入が 0 になるゲーム'],
              answerIndex: 0,
              explanation: '支払額と戻り額の期待値が一致することが公平の条件。',
            },
          ],
        },
      ],
    },
  ],
};

/** 数学A 第2項目「図形の性質」 */
export const geometryUnit: Unit = {
  id: 'sa-geometry',
  name: '数学A：図形の性質',
  gakushuShidoYoryo: '内容「図形の性質」三角形の性質、円と直線、二等辺三角形・円周角の証明',
  lessons: [
    {
      id: 'triangle-circle-properties',
      title: '三角形と円の性質',
      summary: 'メネラウス・チェバの定理、方べきの定理など図形の計量を学ぶ。',
      objectives: [
        'メネラウス・チェバの定理を使える',
        '方べきの定理を長さの計算に使える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'メネラウスの定理（直線による切断）' },
        { type: 'formula', tex: '\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1', display: true },
        { type: 'heading', level: 3, content: 'チェバの定理（点を通る3直線）' },
        { type: 'formula', tex: '\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1 \\quad (\\text{符号の扱いが異なる})', display: true },
        {
          type: 'text',
          content:
            '見分け方：「比の値が**1つの直線**上でつながるならメネラウス、**交わる3直線**ならチェバ」。比を置く場所（頂点→頂点）を統一して書くのがミス防止のコツです。',
        },
        { type: 'heading', level: 3, content: '方べきの定理' },
        { type: 'formula', tex: 'PA \\cdot PB = PC \\cdot PD \\quad (\\text{円外の点 P から引いた2本の直線})', display: true },
        {
          type: 'example',
          title: '例題',
          body: '円外の点 P から円に2本の直線を引き、一方は A, B で他方は C, D で交わる。PA = 3, PB = 12, PC = 4 のとき PD を求めよ。',
          answer: '$3 \\times 12 = 4 \\times PD$ より **PD = 9**',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '証明問題では「相似形をつくる」ことがほぼすべて。円周角の定理で等角を見つけ、△の対応を丁寧に書きましょう。',
        },
      ],
    },
  ],
};
