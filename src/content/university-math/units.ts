import type { Unit } from '../types';

/** 大学数学：線形代数 */
export const linearAlgebraUnit: Unit = {
  id: 'uni-linalg',
  name: '線形代数',
  gakushuShidoYoryo: '行列と連立一次方程式、行列式、ベクトル空間、固有値・固有ベクトル',
  lessons: [
    {
      id: 'matrices-eigenvalues',
      title: '行列と固有値問題',
      summary: '連立一次方程式の解法から固有値・対角化まで。',
      objectives: [
        '掃き出し法で連立一次方程式を解ける',
        '固有値・固有ベクトルを求め、対角化できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '連立一次方程式と掃き出し法' },
        {
          type: 'text',
          content:
            '拡大係数行列に**行基本変形**（行の定数倍・入れ替え・加法）を繰り返して階段形にするのがガウスの消去法。解は「一意／不定（自由変数あり）／不能」に分かれます。',
        },
        { type: 'heading', level: 3, content: '行列式' },
        { type: 'formula', tex: '\\det A \\neq 0 \\iff A \\text{ は正則（逆行列をもつ）} \\iff Ax = 0 \\text{ は自明解のみ}', display: true },
        { type: 'heading', level: 3, content: '固有値・固有ベクトルと対角化' },
        { type: 'formula', tex: 'Av = \\lambda v \\iff \\det(A - \\lambda I) = 0', display: true },
        {
          type: 'text',
          content:
            'n 個の独立な固有ベクトルがとれると $A = PDP^{-1}$（対角化）。冪の計算 $A^k = PD^kP^{-1}$ や、連立微分方程式・マルコフ連鎖の定常状態に応用されます。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ の固有値を求めよ。',
          answer: '$\\det(A - \\lambda I) = (2-\\lambda)^2 - 1 = 0$ より **$\\lambda = 1, 3$**',
        },
      ],
    },
    {
      id: 'inner-product-spaces',
      title: '内積空間と直交性',
      summary: '内積・ノルムから直交化（グラム・シュミット）へ。対称行列の固有値問題と最小二乗法。',
      objectives: [
        '内積からノルム・距離・角度を定義できる',
        'グラム・シュミットの直交化を実行できる',
        '実対称行列が直交行列で対角化できることを説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '内積とノルム' },
        {
          type: 'formula',
          tex: '\\langle u, v \\rangle = u^T v = \\sum_i u_i v_i, \\qquad \\|u\\| = \\sqrt{\\langle u, u \\rangle}, \\qquad \\cos\\theta = \\frac{\\langle u, v \\rangle}{\\|u\\| \\, \\|v\\|}',
          display: true,
        },
        {
          type: 'text',
          content:
            '内積は「ベクトル空間に長さと角度を入れる装置」です。$\\langle u, v \\rangle = 0$ のとき**直交**といい、幾何的な直感が代数計算に翻訳されます。機械学習のコサイン類似度もこの式そのものです。',
        },
        {
          type: 'widget',
          widget: {
            id: 'vector-explorer',
            caption: 'プレイグラウンド: ベクトルの和と内積——内積の符号で鋭角・直角・鈍角が判定できることを確かめよう',
          },
        },
        { type: 'heading', level: 3, content: '正規直交基底とグラム・シュミット' },
        {
          type: 'text',
          content:
            '互いに直交する単位ベクトルの組（**正規直交系**）$q_1, \\dots, q_n$ を基底にすると座標が $\\langle v, q_i \\rangle$ だけで読み取れて計算が劇的に楽になります。任意の独立なベクトル列は**グラム・シュミットの直交化**で正規直交系に変換できます。',
        },
        { type: 'formula', tex: 'u_k = v_k - \\sum_{i < k} \\langle v_k, q_i \\rangle q_i, \\qquad q_k = \\frac{u_k}{\\|u_k\\|}', display: true },
        { type: 'heading', level: 3, content: '直交行列と対称行列' },
        {
          type: 'list',
          items: [
            '**直交行列** $Q$：$Q^TQ = I$（列ベクトルが正規直交系）。ノルムと内積を保存する回転・鏡映',
            '**実対称行列** ($A^T = A$) の固有値は必ず**実数**で、異なる固有値に属する固有ベクトルは直交',
            '**スペクトル定理**：実対称行列は直交行列で対角化できる $A = QDQ^T$',
          ],
        },
        {
          type: 'text',
          content:
            '応用の代表が**最小二乗法**です。解けない連立方程式 $Ax = b$ の代わりに、誤差の二乗和 $\\|Ax - b\\|^2$ を最小にする $x = (A^TA)^{-1}A^Tb$ を求めます——これは「$b$ を $A$ の列空間へ正射影している」ことの表現です。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$v_1 = (1, 0)^T$, $v_2 = (1, 1)^T$ をグラム・シュミットで正規直交化せよ。',
          answer:
            '$q_1 = v_1 / \\|v_1\\| = (1, 0)^T$。$u_2 = v_2 - \\langle v_2, q_1 \\rangle q_1 = (1,1)^T - 1 \\cdot (1,0)^T = (0,1)^T$ より **$q_2 = (0, 1)^T$**',
        },
      ],
    },
    {
      id: 'matrix-decompositions',
      title: '行列の分解——LU・QR・特異値分解',
      summary: '数値計算を支える三大分解。特異値分解はデータ解析（PCA）の心臓部。',
      objectives: [
        'LU 分解による連立一次方程式の効率的な解法を説明できる',
        'QR 分解と最小二乗法の関係を理解している',
        '特異値分解 $A = U\\Sigma V^T$ の構造と意味を説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'LU 分解' },
        {
          type: 'text',
          content:
            'ガウスの消去法を「行列の分解」として読み替えると $A = LU$（下三角 × 上三角）。右辺を一度求めてしまえば、異なる右辺 $b$ に対する $Ax = b$ を前進代入・後退代入の 2 回の三角行列計算だけで解けます。係数行列が同じで右辺が多数ある問題（構造解析など）で威力を発揮します。',
        },
        { type: 'heading', level: 3, content: 'QR 分解' },
        { type: 'formula', tex: 'A = QR \\quad (Q \\text{ は直交行列， } R \\text{ は上三角})', display: true },
        {
          type: 'text',
          content:
            'グラム・シュミット（数値計算ではより安定なハウスホルダー変換）で得られる分解。最小二乗問題 $\\min \\|Ax-b\\|$ は $Rx = Q^Tb$ と三角行列の後退代入に帰着し、固有値問題にも冪反復の安定化（QR 法＝世界で最も使われる固有値アルゴリズム）として現れます。',
        },
        { type: 'heading', level: 3, content: '特異値分解（SVD）' },
        {
          type: 'formula',
          tex: 'A = U \\Sigma V^T, \\qquad \\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge 0',
          display: true,
        },
        {
          type: 'text',
          content:
            'どのような長方形行列にも必ず存在する分解で、「$A$ は直交変換 → 座標軸方向の伸縮（特異値 $\\sigma_i$）→ 直交変換」を表します。最大特異値 $\\sigma_1$ は $A$ がベクトルを最も引き延ばす割合です。',
        },
        {
          type: 'list',
            items: [
            '**低ランク近似**：大きい方から $k$ 個の特異値だけ残した $A_k$ が、ランク $k$ の中で誤差 $\\|A - A_k\\|_F$ 最小（エッカート・ヤングの定理）',
            '**主成分分析（PCA）**：データ行列を SVD すると分散最大の方向が特異ベクトルとして得られる',
            '画像圧縮・ノイズ除去・推薦システムなどへの応用',
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          content: '固有値分解は正方形行列（さらに対角化可能なもの）限定ですが、SVD は任意の行列に存在します。両者は $AA^T$, $A^TA$ の固有値問題を通じてつながっています（特異値² ＝ 固有値）。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$ の特異値を求めよ。また、$\\det A$ と特異値の積の関係は？',
          answer: '対角行列なので特異値は成分そのもの **$\\sigma_1 = 3, \\sigma_2 = 2$**。一般に $|\\det A| = \\sigma_1 \\sigma_2 \\cdots \\sigma_n$（ここでは 6）。特異値の積は「単位立方体が写される平行体の体積」',
        },
      ],
    },
  ],
};

/** 大学数学：解析 */
export const analysisUnit: Unit = {
  id: 'uni-analysis',
  name: '解析（微積分）',
  gakushuShidoYoryo: '極限と連続性、微分法の応用（テイラー展開）、積分法の応用、偏微分',
  lessons: [
    {
      id: 'taylor-multivariable',
      title: 'テイラー展開と偏微分',
      summary: '関数の多項式近似、多変数関数の微分と極値問題。',
      objectives: [
        '主要関数のテイラー展開を書ける',
        '偏微分と極値判定（ヘッセ行列）を使える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'テイラー展開' },
        { type: 'formula', tex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}, \\qquad \\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots', display: true },
        {
          type: 'text',
          content:
            'テイラー展開は「関数の多項式近似」。極限計算（ロピタルの定理の拡張）、数値計算、物理学の摂動論の基礎になります。',
        },
        { type: 'heading', level: 3, content: '多変数関数の微分' },
        { type: 'formula', tex: '\\nabla f = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right), \\qquad D = f_{xx} f_{yy} - f_{xy}^2', display: true },
        {
          type: 'list',
          items: [
            '極値候補は $\\nabla f = 0$（停留点）',
            '$D > 0$ かつ $f_{xx} > 0$：極小／$D > 0$ かつ $f_{xx} < 0$：極大／$D < 0$：鞍点',
            '**勾配ベクトル** $\\nabla f$ は「最も急峻に増加する方向」——機械学習の勾配降下法の核心',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '$f(x, y) = x^2 + y^2 - xy$ の極値を求めよ。',
          answer: '$f_x = 2x - y = 0$, $f_y = 2y - x = 0$ より停留点 $(0,0)$。$D = 2 \\cdot 2 - 1 = 3 > 0$, $f_{xx} = 2 > 0$ より**極小値 0**',
        },
      ],
    },
    {
      id: 'limits-continuity',
      title: '極限と連続性',
      summary: 'ε-δ に立入らない実用的な極限計算から、連続性・平均値の定理・ロピタルの定理まで。',
      objectives: [
        '不定形の極限を因式分解・有理化・有名極限で計算できる',
        '連続性の定義と閉区間での連続関数の性質を述べられる',
        'ロピタルの定理を正しい条件のもとで使える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '極限の計算技術' },
        {
          type: 'list',
          items: [
            '因式分解・有理化：$\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x} = \\frac{1}{2}$（分子の有理化）',
            '**有名極限**：$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$、$\\lim_{x \\to \\infty} \\left( 1 + \\frac{1}{x} \\right)^x = e$',
            'はさみうちの原理：挟める値がわかれば極限が決まる（$\\sin x / x \\to 1$ の証明もこれ）',
          ],
        },
        {
          type: 'note',
          variant: 'warn',
          content: 'ロピタルの定理は $\\frac{0}{0}$ や $\\frac{\\infty}{\\infty}$ の**不定形のときだけ**使えます。$\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = 1$ のように、微分した比の極限が存在しなくても元の極限が存在する例もあることに注意。',
        },
        { type: 'heading', level: 3, content: '連続性とその帰結' },
        {
          type: 'formula',
          tex: '\\lim_{x \\to a} f(x) = f(a) \\quad \\Longleftrightarrow \\quad f \\text{ は } a \\text{ で連続}',
          display: true,
        },
        {
          type: 'text',
          content:
            '「グラフがペンを離さずに描ける」を厳密にしたもの。連続性だけで強力な定理が従います。',
        },
        {
          type: 'list',
          items: [
            '**中間値の定理**：連続関数が $f(a) < c < f(b)$ を満たせば、$f(x) = c$ の解が $(a, b)$ 内に存在（方程式の数値解法・二分法の根拠）',
            '**最大値最小値の定理**：閉区間 $[a, b]$ 上の連続関数は必ず最大値・最小値をもつ',
            '**平均値の定理**：滑らかな曲線には接線の傾きが平均変化率に等しい点がある——微積分の橋渡し',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin 3x}{\\tan 5x}$ を求めよ。',
          answer:
            '$\\frac{\\sin 3x}{\\tan 5x} = \\frac{\\sin 3x}{3x} \\cdot \\frac{5x}{\\tan 5x} \\cdot \\frac{3}{5}$。第 1 因子 → 1、第 2 因子 → 1 なので **$3/5$**',
        },
      ],
    },
    {
      id: 'series-convergence',
      title: '級数と収束判定',
      summary: '無限級数の収束・発散。比較・比・根・積分判定からテイラー級数の応用まで。',
      objectives: [
        '等比級数・p 級数の収束条件を記憶している',
        '各種収束判定法を選んで適用できる',
        '交代級数・絶対収束・条件付き収束を区別できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '基本の級数' },
        {
          type: 'table',
          headers: ['級数', '収束条件'],
          rows: [
            ['等比級数 $\\sum r^n$', '$|r| < 1$（和は $\\frac{1}{1-r}$）'],
            ['$p$ 級数 $\\sum \\frac{1}{n^p}$', '$p > 1$（$p \\le 1$ では発散）'],
            ['調和級数 $\\sum \\frac{1}{n}$', '発散（$p = 1$ の臨界例）'],
            ['交代調和級数 $\\sum \\frac{(-1)^{n+1}}{n}$', '収束（$\\ln 2$）＝条件付き収束'],
          ],
        },
        { type: 'heading', level: 3, content: '収束判定法' },
        {
          type: 'list',
          items: [
            '**必要条件**：項自身が 0 に向かわなければ発散（$\\sum \\frac{n}{n+1}$ は即発散）',
            '**比較判定**：小さい方が発散なら大きい方も発散／大きい方が収束なら小さい方も収束',
            '**比判定（ダランベール）**：$\\lim \\left| \\frac{a_{n+1}}{a_n} \\right| = L$ なら $L < 1$ 収束、$L > 1$ 発散（冪級数的な項に有効）',
            '**積分判定**：$f$ 単調減少なら $\\sum f(n)$ と $\\int_1^\\infty f(x)\\,dx$ は運命を共にする',
            '**交代級数（ライプニッツ）**：単調減少かつ 0 に収束すれば収束',
          ],
        },
        {
          type: 'text',
          content:
            '**絶対収束**（$\\sum |a_n|$ が収束）ならもとの級数も収束し、項の並べ替えで和が変わることもありません。一方**条件付き収束**（もとの級数のみ収束）では並べ替えると別の和になり得ます——リーマンの再配列定理は級数の「有限和」の直感が破綻する代表例です。',
        },
        {
          type: 'widget',
          widget: {
            id: 'function-grapher',
            caption: 'プレイグラウンド: テイラー部分和 $y = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$ を描画すると $e^x$ の近似がどこまで届くか観察できます',
            props: { expression: 'exp', showTaylor: true },
          },
        },
        {
          type: 'example',
          title: '例題',
          body: '$\\displaystyle \\sum_{n=1}^{\\infty} \\frac{n}{2^n}$ は収束するか。収束するなら和を求めよ。',
          answer:
            '比判定：$\\frac{a_{n+1}}{a_n} = \\frac{n+1}{2n} \\to \\frac{1}{2} < 1$ で**収束**。和は $\\sum n x^n = \\frac{x}{(1-x)^2}$ に $x = 1/2$ を代入して **2**',
        },
      ],
    },
  ],
};

/** 大学数学：確率・統計 */
export const probabilityStatisticsUnit: Unit = {
  id: 'uni-probstat',
  name: '確率・統計の基礎',
  gakushuShidoYoryo: '確率変数と分布、期待値・分散、正規分布と中心極限定理、データのモデル化',
  lessons: [
    {
      id: 'random-variables',
      title: '確率変数と期待値・分散',
      summary: '確率変数・確率分布を導入し、期待値・分散・共分散をデータ分析の言語として身につける。',
      objectives: [
        '離散・連続確率変数を区別して扱える',
        '期待値・分散の線形性を使って計算できる',
        '共分散と相関の意味を説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '確率変数と分布' },
        {
          type: 'text',
          content:
            '**確率変数**は「値が偶然で決まる量」を表す関数です。離散型は確率質量 $P(X = x_i)$、連続型は確率密度 $f(x)$（全領域での積分が 1）で分布を指定します。',
        },
        { type: 'heading', level: 3, content: '期待値・分散' },
        {
          type: 'formula',
          tex: 'E[X] = \\sum_i x_i P(X = x_i), \\qquad V[X] = E[(X - E[X])^2] = E[X^2] - (E[X])^2',
          display: true,
        },
        {
          type: 'list',
          items: [
            '**線形性**：$E[aX + bY] = aE[X] + bE[Y]$（独立でなくても成立）',
            '**独立なら** $V[aX + bY] = a^2V[X] + b^2V[Y]$（共分散項が消える）',
            '**標準偏差** $\\sigma = \\sqrt{V[X]}$: 平均からのばらつきの尺度',
          ],
        },
        {
          type: 'widget',
          widget: {
            id: 'probability-simulator',
            caption: 'プレイグラウンド: サイコロ投げの試行回数を増やすと、平均値が理論値 $E[X] = 3.5$ に収束していく様子が見られます（大数の法則）',
          },
        },
        { type: 'heading', level: 3, content: '共分散と相関' },
        {
          type: 'formula',
          tex: '\\mathrm{Cov}(X, Y) = E[XY] - E[X]E[Y], \\qquad \\rho = \\frac{\\mathrm{Cov}(X, Y)}{\\sigma_X \\sigma_Y}, \\quad -1 \\le \\rho \\le 1',
          display: true,
        },
        {
          type: 'note',
          variant: 'warn',
          content: '相関は「直線的な関係の強さ」であり因果関係を保証しません。また $\\rho = 0$ でも非線形な関係（$Y = X^2$ など）はあり得ます。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$X$, $Y$ を独立で $E[X] = 1$, $V[X] = 4$, $E[Y] = -2$, $V[Y] = 9$ とする。$Z = 2X + Y$ の期待値と分散を求めよ。',
          answer: '$E[Z] = 2(1) + (-2) = $ **0**。独立性より $V[Z] = 2^2 \\cdot 4 + 1^2 \\cdot 9 = $ **25**',
        },
      ],
    },
    {
      id: 'normal-distribution-clt',
      title: '正規分布と中心極限定理',
      summary: 'なぜ世の中に正規分布が多いのか。中心極限定理と大数の法則、区間推定への入口。',
      objectives: [
        '正規分布の密度関数と標準化を扱える',
        '中心極限定理を述べて応用を説明できる',
        '大数の法則と中心極限定理の違いを区別できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '正規分布' },
        {
          type: 'formula',
          tex: 'f(x) = \\frac{1}{\\sqrt{2\\pi}\\,\\sigma} \\exp\\!\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right)',
          display: true,
        },
        {
          type: 'text',
          content:
            '平均 $\\mu$、標準偏差 $\\sigma$ をパラメータにもつ釣り鐘型の分布。$\\mu = 0, \\sigma = 1$ に変換することを**標準化**といい、$Z = (X - \\mu)/\\sigma$ は標準正規分布に従います。「68–95–99.7 則」（±1σ に約 68%、±2σ に約 95%）は実務上の目安として重要です。',
        },
        { type: 'heading', level: 3, content: '中心極限定理（CLT）' },
        {
          type: 'formula',
          tex: '\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i \\; \\xrightarrow[n \\to \\infty]{} \\; N\\!\\left( \\mu, \\frac{\\sigma^2}{n} \\right)',
          display: true,
        },
        {
          type: 'text',
          content:
            'もとの分布がどんな形でも（平均・分散が finite な限り）、**標本平均は十分大きな n で近似的に正規分布に従う**——これが統計的推測の土台です。母集団の分布を知らなくても「平均 ± 誤差」の区間推定や検定ができるのは CLT のおかげです。',
        },
        {
          type: 'list',
          items: [
            '**大数の法則**：$n \\to \\infty$ で標本平均が $\\mu$ に「ほぼ一致していく」（収束の話）',
            '**中心極限定理**：その揺らぎの大きさ $\\sigma/\\sqrt{n}$ が正規分布に従う（分布の形の話）',
            '誤差は $1/\\sqrt{n}$ でしか減らない——精度を 10 倍にするにはデータを 100 倍に',
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          content: '二項分布 $B(n, p)$ は $np(1-p) \\ge 10$ 程度なら正規分布 $N(np, np(1-p))$ で近似できます（ド・モアブル＝ラプラスの定理）。試験問題でも頻出の近似です。',
        },
        {
          type: 'example',
          title: '例題',
          body: 'サイコロを 900 回投げたとき、出目の合計が 3000 を超える確率は概ねどの程度か。（$E[X] = 3.5$, $V[X] = 35/12$）',
          answer:
            '合計 $S$ は $N(900 \\times 3.5,\\; 900 \\times 35/12) = N(3150, 2625)$ に従う。$z = (3000 - 3150) / \\sqrt{2625} \\approx -2.93$ より **約 99.8%** で 3000 を超える',
        },
      ],
    },
  ],
};
