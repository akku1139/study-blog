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
    {
      id: 'eigenvalue-applications',
      title: '固有値の応用——冪計算・フィボナッチ・マルコフ連鎖',
      summary: '対角化を実戦で使う。行列の冪、フィボナッチ数列の閉形式、マルコフ連鎖の定常分布。',
      objectives: [
        '対角化により行列の冪 A^k を効率よく計算できる',
        '固有値からフィボナッチ数列の一般項（ビネーの公式）を導ける',
        'マルコフ連鎖の定常分布が固有ベクトル問題として求まることを説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '対角化による冪計算' },
        {
          type: 'text',
          content:
            '対角化 $A = PDP^{-1}$ ができれば、行列の冪は**対角成分の冪**に分解されます。$D^k$ の計算は対角成分をそれぞれ k 乗するだけで済み、k 回の行列積を手で計算する必要がありません。この仕組みは漸化式・離散時間システム・差分方程式における「n ステップ後の状態」を求める標準技術です。',
        },
        { type: 'formula', tex: 'A = PDP^{-1} \\;\\Longrightarrow\\; A^k = P D^k P^{-1}', display: true },
        {
          type: 'derivation',
          title: 'フィボナッチ数列の一般項（ビネーの公式）を固有値で導く',
          steps: [
            {
              label: 'Step 1: 漸化式を 2 元の線形系に書き換える',
              tex: '\\begin{pmatrix} F_{n+1} \\\\ F_n \\end{pmatrix} = A \\begin{pmatrix} F_n \\\\ F_{n-1} \\end{pmatrix}, \\qquad A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}',
              note: '隣接 2 項を状態ベクトルとみなせば、n ステップ後の状態は $A^n$ の適用で決まる。',
            },
            {
              label: 'Step 2: 固有方程式を解く',
              tex: '\\det(A - \\lambda I) = \\lambda^2 - \\lambda - 1 = 0 \\quad\\Longrightarrow\\quad \\lambda = \\frac{1 \\pm \\sqrt{5}}{2}',
              note: '黄金比 $\\varphi = (1 + \\sqrt{5})/2 \\approx 1.618$ と $\\psi = (1 - \\sqrt{5})/2$ が姿を現す。',
            },
            {
              label: 'Step 3: 対角化して n 乗を明示する',
              tex: 'A^n = P \\begin{pmatrix} \\varphi^n & 0 \\\\ 0 & \\psi^n \\end{pmatrix} P^{-1} \\;\\Longrightarrow\\; F_n = c_1 \\varphi^n + c_2 \\psi^n',
              note: '解は固有モード $\\varphi^n$ と $\\psi^n$ の線形結合として書ける（重ね合わせの原理）。',
            },
            {
              label: 'Step 4: 初期条件 F_0 = 0, F_1 = 1 で係数を決める',
              tex: 'F_n = \\frac{\\varphi^n - \\psi^n}{\\varphi - \\psi} = \\frac{1}{\\sqrt{5}} \\left\\{ \\left( \\frac{1 + \\sqrt{5}}{2} \\right)^n - \\left( \\frac{1 - \\sqrt{5}}{2} \\right)^n \\right\\}',
              note: '整数の数列が無理数の冪の差で厳密に表われる——線形漸化式の美しい帰結。',
            },
          ],
        },
        { type: 'heading', level: 3, content: 'マルコフ連鎖の定常分布' },
        {
          type: 'text',
          content:
            '各時刻で状態が確率的に遷移する過程は、列和が 1 の**遷移行列** $M$ と状態分布ベクトル $p_n$ により $p_{n+1} = Mp_n$ と書けます。それ以上変化しない分布（**定常分布** $\\pi$）は $M\\pi = \\pi$ を満たす、すなわち**固有値 1 の固有ベクトル**です。天気の推移・市場シェア・検索エンジンのページランクなど、「長期的にどこに落ち着くか」という問いがすべてこの形に落ちます。',
        },
        {
          type: 'derivation',
          title: 'なぜ遷移行列は必ず固有値 1 をもつのか',
          steps: [
            {
              label: 'Step 1: 遷移行列の構造',
              tex: 'p_{n+1} = M p_n, \\qquad m_{ij} \\ge 0, \\quad \\text{各列の和は } 1',
              note: '列 j は「状態 j にいるなら次の瞬間どこかに必ず移る」確率の配分を表す。',
            },
            {
              label: 'Step 2: 左から 1 ベクトルを掛ける',
              tex: '\\mathbf{1}^T M = \\mathbf{1}^T, \\qquad \\mathbf{1} = (1, 1, \\dots, 1)^T',
              note: '列和がすべて 1 という条件を、行ベクトルとの積で書いたもの。',
            },
            {
              label: 'Step 3: 転置して右固有ベクトルの関係へ',
              tex: '(M - I)^T \\mathbf{1} = 0 \\;\\Longrightarrow\\; \\det(M - I) = \\det\\left( (M - I)^T \\right) = 0',
              note: '転置しても行列式は不変なので、M 自身も固有値 1 をもつことが従う。',
            },
            {
              label: 'Step 4: 定常分布の正体',
              tex: 'M \\pi = \\pi, \\qquad \\text{成分の和が } 1 \\text{ になるよう規格化}',
              note: '固有値 1 の固有ベクトルを総和 1 に正規化したものが定常分布。他の固有値が $|\\lambda| < 1$ ならその成分は $M^n$ の反復で消え、どんな初期分布も $\\pi$ に近づく。',
            },
          ],
        },
        {
          type: 'example',
          title: '例題（通勤手段の移り変わり）',
          body: 'ある会社の通勤者は電車組と車組に分かれている。毎月、電車組の 20% が車組へ、車組の 10% が電車組へ移動する。十分長い期間のあとの定常分布を求めよ。',
          answer:
            '遷移行列は $M = \\begin{pmatrix} 0.8 & 0.1 \\\\ 0.2 & 0.9 \\end{pmatrix}$（列が現在の状態）。$M\\pi = \\pi$ より $0.1\\pi_2 = 0.2\\pi_1$、つまり $\\pi_2 = 2\\pi_1$。$\\pi_1 + \\pi_2 = 1$ と合わせて **$\\pi = (1/3, \\, 2/3)$**：最終的に電車組 3 分の 1、車組 3 分の 2 に落ち着く。',
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '$A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 2 \\end{pmatrix}$ の固有値を求め、$A^4$ を対角化で計算せよ。',
              hint: '三角行列の固有値は対角成分。$A^4 = PD^4P^{-1}$。',
              answer:
                '固有値は **3, 2**。$P = \\begin{pmatrix} 1 & 1 \\\\ 0 & -1 \\end{pmatrix}$ として $A^4 = P \\begin{pmatrix} 81 & 0 \\\\ 0 & 16 \\end{pmatrix} P^{-1} = \\begin{pmatrix} 81 & 65 \\\\ 0 & 16 \\end{pmatrix}$',
            },
            {
              body: 'ビネーの公式で $F_{10}$ を計算し、漸化式で得られる 55 と一致することを確かめよ。',
              hint: '$\\varphi^{10} \\approx 122.99$, $\\psi^{10} \\approx 0.008$。',
              answer:
                '$F_{10} = (\\varphi^{10} - \\psi^{10})/\\sqrt{5} \\approx 122.98/2.236 \\approx$ **55**。$|\\psi| < 1$ なので $\\psi^n$ の項はすぐ消え、実質 $\\varphi^n/\\sqrt{5}$ を四捨五入したものがフィボナッチ数になる。',
            },
            {
              body: '今日雨なら明日も雨の確率が 0.6、今日晴なら明日は雨の確率が 0.3 である。定常的な雨の確率を求めよ。',
              hint: '$0.6\\pi_R + 0.3\\pi_S = \\pi_R$ と $\\pi_R + \\pi_S = 1$ を連立する。',
              answer:
                '$0.6\\pi_R + 0.3(1 - \\pi_R) = \\pi_R \\Rightarrow 0.3 = 0.7\\pi_R \\Rightarrow$ **$\\pi_R = 3/7 \\approx 0.43$**',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（固有値の応用）',
          questions: [
            {
              question: '対角化可能な行列 A に対する A^k の計算式はどれか。',
              choices: ['$A^k = PD^kP^{-1}$', '$A^k = D^kP$', '$A^k = kA$'],
              answerIndex: 0,
              explanation: '対角化の利点は冪が対角行列の冪に分解されること。$D^k$ は成分ごとの冪だけで済みます。',
            },
            {
              question: 'マルコフ連鎖の定常分布を求める問題は、線形代数では何に相当するか。',
              choices: ['遷移行列の固有値 1 に属する固有ベクトルを求める問題', '行列式を最大化する問題', '固有値をすべて足し合わせる問題'],
              answerIndex: 0,
              explanation: '分布が動かない状態 Mπ = π は、そのまま固有値 1 の固有ベクトル方程式です。',
            },
            {
              question: 'フィボナッチ数列の一般項に登場する特殊な数は？',
              choices: ['黄金比（1 + √5）/2', '円周率 π', 'ネイピア数 e'],
              answerIndex: 0,
              explanation: '漸化式の係数行列の固有値として黄金比 φ と ψ が現れ、一般項はその冪の差で書けます。',
            },
          ],
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
    {
      id: 'multivariable-extrema',
      title: '多変数関数の極値とラグランジュの未定乗数法',
      summary: 'ヘッセ行列による極値の判別、制約付き最適化を未定乗数法で解く。',
      objectives: [
        '二次偏導関数からヘッセ行列をつくり、極大・極小・鞍点を判別できる',
        '制約つき最大化・最小化をラグランジュの未定乗数法で解ける',
        '未定乗数法の幾何学的意味（勾配の平行条件）を説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '極値問題の準備——テイラー近似とヘッセ行列' },
        {
          type: 'text',
          content:
            '多変数関数 $f(x, y)$ の極値候補は、一次の微分がすべて消える**停留点** $\\nabla f = \\mathbf{0}$ に限ります。その点が本当に山の頂上か谷底か、それとも馬の鞍のような**鞍点**かを見分けるのが二次微分の情報、すなわち**ヘッセ行列**です。1 変数のとき「$f^{\prime} = 0$ かつ $f^{\prime\prime} > 0$ なら極小」だったのと同じ役割を、行列が引き継いでいます。',
        },
        { type: 'formula', tex: 'H = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix}, \\qquad D = \\det H = f_{xx} f_{yy} - (f_{xy})^2', display: true },
        {
          type: 'list',
          items: [
            '$D > 0$ かつ $f_{xx} > 0$：**極小**（ヘッセ行列が正定値＝どの方向に歩いても増える）',
            '$D > 0$ かつ $f_{xx} < 0$：**極大**（負定値＝どの方向に歩いても減る）',
            '$D < 0$：**鞍点**（ある方向では増え、別の方向では減る）',
            '$D = 0$：この判定では決められない（高次の項を調べる必要がある）',
          ],
        },
        {
          type: 'derivation',
          title: 'なぜ判別式 D で極値がわかるのか——2 次のテイラー展開',
          steps: [
            {
              label: 'Step 1: 停留点のまわりで 2 次まで展開する',
              tex: '\\Delta f = f(a + h, b + k) - f(a, b) \\approx \\frac{1}{2}\\left( f_{xx} h^2 + 2 f_{xy} hk + f_{yy} k^2 \\right)',
              note: '停留点では一次の項（勾配）が消えるので、増減は 2 次の項だけで決まる。',
            },
            {
              label: 'Step 2: 平方完成する',
              tex: '2\\Delta f \\approx f_{xx} \\left( h + \\frac{f_{xy}}{f_{xx}} k \\right)^2 + \\frac{f_{xx} f_{yy} - (f_{xy})^2}{f_{xx}} k^2',
              note: '1 変数の 2 次関数の平方完成と同じ発想。第 1 項は常に $f_{xx}$ と同じ符号。',
            },
            {
              label: 'Step 3: 符号を読み取る',
              tex: 'D = f_{xx} f_{yy} - (f_{xy})^2 > 0, \\; f_{xx} > 0 \\quad\\Longrightarrow\\quad \\Delta f > 0 \\text{ （任意の方向で増える＝極小）}',
              note: '両項が正なのでどの $(h, k) \\neq (0,0)$ でも増える。$D < 0$ なら第 2 項が逆符号になり方向によって増減が変わる＝鞍点。',
            },
          ],
        },
        { type: 'heading', level: 3, content: 'ラグランジュの未定乗数法' },
        { type: 'formula', tex: '\\nabla f = \\lambda \\nabla g, \\qquad g(x, y) = 0', display: true },
        {
          type: 'derivation',
          title: 'なぜ「勾配が平行」でよいのか——等高線の幾何学',
          steps: [
            {
              label: 'Step 1: 制約は曲線、目的関数は等高線',
              tex: '\\text{制約 } g(x, y) = 0 \\text{ は曲線、} f(x, y) = c \\text{ は等高線族}',
              note: '曲線上を動きながら f の値をできるだけ大きくしたい状況を考える。',
            },
            {
              label: 'Step 2: 勾配は等高線に垂直',
              tex: '\\nabla f \\perp f(x,y)=c, \\qquad \\nabla g \\perp g(x,y)=0',
              note: '勾配ベクトルの定義から、関数が最も急増加する方向は等高線の法線方向。',
            },
            {
              label: 'Step 3: 制約曲線に沿った方向微分が消える',
              tex: '\\frac{d}{dt} f(\\mathbf{r}(t)) = \\nabla f \\cdot \\mathbf{r}^{\prime}(t) = 0, \\qquad \\mathbf{r}^{\prime}(t) \\parallel \\text{接線}',
              note: '制約曲線に沿って動いている間、極值では f の値が一時的に変化しなくなる。つまり ∇f は曲線の接線と直交。',
            },
            {
              label: 'Step 4: 接線に垂直なベクトルは ∇g しかない',
              tex: '\\nabla f \\parallel \\nabla g \\quad\\Longleftrightarrow\\quad \\nabla f = \\lambda \\nabla g',
              note: '∇g も制約曲線の法線だから、∇f はそのスカラー倍。比例定数 λ が「未定乗数」。これと制約式を連立すれば未知数 3 本・方程式 3 本となり解ける。',
            },
          ],
        },
        {
          type: 'example',
          title: '例題（制約つき最大値）',
          body: '周囲の長さが 20 m の長方形のうち、面積を最大にするものを未定乗数法で求めよ。',
          answer:
            '$f(x,y) = xy$, 制約 $g = x + y - 10 = 0$。$\\nabla f = \\lambda \\nabla g$ より $y = \\lambda$, $x = \\lambda$、ゆえに $x = y = 5$。面積は **25 平方メートル**（正方形が最適）。',
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '$f(x, y) = x^3 + y^3 - 3xy$ の極値を求めよ。',
              hint: '$f_x = 3x^2 - 3y = 0$, $f_y = 3y^2 - 3x = 0$。実数解は $(0,0)$ と $(1,1)$。',
              answer:
                '$D = f_{xx} f_{yy} - f_{xy}^2 = 6x \\cdot 6y - (-3)^2$。$(0,0)$ では $D = -9 < 0$ で**鞍点**。$(1,1)$ では $D = 36 - 9 = 27 > 0$, $f_{xx} = 6 > 0$ で**極小値 $-1$**',
            },
            {
              body: '$f(x, y) = x + y$ を円周 $x^2 + y^2 = 4$ 上で最大・最小にせよ。',
              hint: '$1 = \\lambda 2x$, $1 = \\lambda 2y$ より $x = y$。',
              answer:
                '$x = y = \\sqrt{2}$ で**最大 $2\\sqrt{2}$**、$x = y = -\\sqrt{2}$ で**最小 $-2\\sqrt{2}$**。（コーシー・シュワルツの等号条件と一致）',
            },
            {
              body: '体積 V が一定の直方体のうち表面積を最小にするものの形状を述べよ。',
              hint: '$xyz = V$ の下で $2(xy + yz + zx)$ を最小化。',
              answer:
                '**立方体（すべての辺が等しい）**。対称性から $x = y = z$ が解となり、これは不等式 $(xy + yz + zx)/3 \\ge (x^2y^2z^2)^{1/3}$ の等号ケースにも対応する。',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（極値と未定乗数法）',
          questions: [
            {
              question: '停留点で D < 0 のとき、その点は何と呼ばれるか。',
              choices: ['鞍点', '極大点', '変曲点'],
              answerIndex: 0,
              explanation: '方向によって増えたり減ったりする点で、極値ではありません。曲面を鞍に見立てた呼び名です。',
            },
            {
              question: 'ラグランジュの未定乗数法の条件 ∇f = λ∇g は何を表すか。',
              choices: ['f の勾配が制約面の勾配と平行', 'f と g が等しい', 'g の値を λ 倍する'],
              answerIndex: 0,
              explanation: '極値では制約曲線に沿った f の変化が止まり、∇f が制約曲線の法線 ∇g と同方向になります。',
            },
            {
              question: 'ヘッセ行列が正定値であることと極小の関係は？',
              choices: ['正定値なら極小である', '正定値なら極大である', '無関係である'],
              answerIndex: 0,
              explanation: 'どの方向へ離れても 2 次の項が正になる＝必ず増えるので、その点は谷底（極小）です。',
            },
          ],
        },
      ],
    },
    {
      id: 'multiple-integrals',
      title: '重積分——累次積分・領域の読み替え・座標変換',
      summary: '2 重積分の計算技術。積分順序の交換、極座標への変換とヤコビアン r、面積・体積への応用。',
      objectives: [
        '矩形領域・非矩形領域上の 2 重積分を累次積分として実行できる',
        '積分順序の交換が必要になる場面を判断し、実際に書き換えられる',
        '極座標変換（dxdy = r dr dθ）を使って円に関する積分を処理できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '重積分の意味と累次積分' },
        {
          type: 'text',
          content:
            '2 重積分 $\\iint_D f(x, y)\\, dA$ は、平面上の領域 D の上に立つ柱の**体積**（$f \\ge 0$ のとき）、あるいは密度分布 $f$ から D の総質量を求める操作です。計算は**累次積分**に落とします。内側の積分で片方の変数を固定して切り出し、その結果を外側の変数で積算する——「薄く切って、切れ目ごとに足し上げる」2 段構えです。',
        },
        { type: 'formula', tex: '\\iint_D f(x, y)\\, dx\\, dy = \\int_a^b \\left[ \\int_{p(x)}^{q(x)} f(x, y)\\, dy \\right] dx', display: true },
        { type: 'heading', level: 3, content: '積分順序の交換' },
        {
          type: 'text',
          content:
            '内側の原始関数が初等関数で書けないことがあります。たとえば $e^{-y^2}$ は $y$ について積分できませんが、先に $x$ で積分すると話が変わります。領域を「縦割り」から「横割り」に読み替えて積分の順序を入れ替えるのが**区画法（フビニの定理）**の力で、これができるには被積分関数が連続であれば十分です。',
        },
        {
          type: 'derivation',
          title: '極座標での面積要素 dxdy = r dr dθ の由来',
          steps: [
            {
              label: 'Step 1: 極座標での位置',
              tex: 'x = r \\cos\\theta, \\qquad y = r \\sin\\theta',
              note: '平面の点を「原点からの距離 r」と「角度 θ」で指定し直す。',
            },
            {
              label: 'Step 2: 微小変化の接ベクトル',
              tex: '\\frac{\\partial (x, y)}{\\partial r} = (\\cos\\theta, \\sin\\theta), \\qquad \\frac{\\partial (x, y)}{\\partial \\theta} = (-r \\sin\\theta, r \\cos\\theta)',
              note: 'r 方向に動けば単位ベクトルだけ進むが、θ 方向に動くと半径 r の円弧に沿って動く。',
            },
            {
              label: 'Step 3: 小さな平行四辺形の面積＝外積の絶対値',
              tex: 'dA = \\left| \\det \\begin{pmatrix} \\cos\\theta & -r \\sin\\theta \\\\ \\sin\\theta & r \\cos\\theta \\end{pmatrix} \\right| dr\\, d\\theta = r\\, dr\\, d\\theta',
              note: 'この行列がヤコビアン。角度方向の辺の長さが半径 r に比例して伸びるため、因子 r が現れる——扇形の面積 πr² × (θ/π) という中学レベルの事実と一致します。',
            },
          ],
        },
        {
          type: 'example',
          title: '例題（ガウス積分）',
          body: 'ガウス積分 $\\displaystyle \\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx$ を求めよ。',
          answer:
            '2 乗して極座標変換：$I^2 = \\iint e^{-(x^2+y^2)}\\, dxdy = \\int_0^{2\\pi}\\!\\!\\int_0^{\\infty} e^{-r^2} r\\, dr\\, d\\theta = 2\\pi \\cdot \\frac{1}{2} = \\pi$。よって $I = \\sqrt{\\pi}$。1 変数では不可能だった計算が、次元を上げて座標変換することで解ける好例。',
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '$\\displaystyle \\int_0^1 \\!\\! \\int_0^1 (x^2 + y)\\, dy\\, dx$ を計算せよ。',
              hint: '内側から。x を固定して y で積分。',
              answer:
                '内側：$\\int_0^1 (x^2 + y)\\, dy = x^2 + \\frac{1}{2}$。外側：$\\int_0^1 \\left( x^2 + \\frac{1}{2} \\right) dx = \\frac{1}{3} + \\frac{1}{2} =$ **$\\frac{5}{6}$**',
            },
            {
              body: '$\\displaystyle \\int_0^2 \\!\\! \\int_x^2 \\sin(y^2)\\, dy\\, dx$ の積分順序を交換して計算せよ。',
              hint: '領域は 0 ≤ x ≤ y ≤ 2。横割りに読み替える。',
              answer:
                '順序を入れ替えると $\\int_0^2 \\!\\! \\int_0^y \\sin(y^2)\\, dx\\, dy = \\int_0^2 y \\sin(y^2)\\, dy = \\left[ -\\frac{\\cos(y^2)}{2} \\right]_0^2 = \\frac{1 - \\cos 4}{2}$',
            },
            {
              body: '半径 R の円板の面積を極座標の重積分で求めよ。',
              hint: '$\\iint_D r\\, dr\\, d\\theta$、$0 \\le r \\le R$, $0 \\le \\theta \\le 2\\pi$。',
              answer:
                '$\\int_0^{2\\pi} \\!\\! \\int_0^R r\\, dr\\, d\\theta = 2\\pi \\cdot \\frac{R^2}{2} =$ **$\\pi R^2$**。円周率の公式が重積分から自然に出てくる。',
            },
            {
              body: 'z = x² + y² と z = 4 で囲まれた放物面の皿の体積を求めよ。',
              hint: '高さは 4 − (x² + y²)。円板 x² + y² ≤ 4 上で積分し極座標へ。',
              answer:
                '$V = \\iint (4 - x^2 - y^2)\\, dxdy = \\int_0^{2\\pi}\\!\\!\\int_0^2 (4 - r^2) r\\, dr\\, d\\theta = 2\\pi \\left[ 2r^2 - \\frac{r^4}{4} \\right]_0^2 = 2\\pi(8 - 4) =$ **$8\\pi$**',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（重積分）',
          questions: [
            {
              question: '極座標に変換したときの面積要素はどれか。',
              choices: ['$r\\, dr\\, d\\theta$', '$dr\\, d\\theta$', '$r^2\\, dr\\, d\\theta$'],
              answerIndex: 0,
              explanation: '角度方向の微小長さが半径 r に比例するため、ヤコビアンから因子 r が現れます。',
            },
            {
              question: '積分順序を交換したくなる典型的な理由は？',
              choices: ['内側の積分が初等関数で書けないから', '計算時間を減らすため', '領域が円だから'],
              answerIndex: 0,
              explanation: 'e^{-y²} や sin(y²)/y のように原始関数をもたない被積分関数は、順序の交換で突破します。',
            },
            {
              question: 'f ≥ 0 のとき ∬_D f dA は何を表すか。',
              choices: ['曲面 z = f(x, y) と領域 D で挟まれた柱の体積', '領域 D の周囲の長さ', 'f の最大値'],
              answerIndex: 0,
              explanation: '各点 (x, y) の高さ f(x, y) の柱を領域全体で足し合わせたもの＝体積です。',
            },
          ],
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
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: 'サイコロ 1 個の出目を $X$ とする。$E[X]$ と $V[X]$ を求めよ。',
              hint: '$E[X] = \\frac{1}{6}(1 + 2 + \\cdots + 6)$、$E[X^2] = \\frac{1}{6}(1^2 + \\cdots + 6^2)$。',
              answer: '$E[X] = 3.5$。$E[X^2] = \\frac{91}{6}$ より $V[X] = \\frac{91}{6} - \\left(\\frac{7}{2}\\right)^2 = $ **$\\frac{35}{12}$**',
            },
            {
              body: 'コインを 5 回投げるとき、表が出た回数 $X$ の期待値と分散を求めよ。（二項分布 $B(n, p)$ の結果を使ってよい）',
              answer: '$E[X] = np = 2.5$、$V[X] = np(1-p) = $ **1.25**',
            },
            {
              body: '$X$, $Y$ が独立で平均 0、分散 1 に従うとき、$W = X - Y$ の期待値・分散を求めよ。',
              hint: '共分散項は独立なら消える。符号に注意（$(-Y)^2 = Y^2$）。',
              answer: '$E[W] = 0$、$V[W] = V[X] + V[Y] = $ **2**（引き算でも分散は足し合わさる）',
            },
          ],
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

/** 大学数学：微分方程式とフーリエ解析 */
export const differentialEquationsUnit: Unit = {
  id: 'uni-difffourier',
  name: '微分方程式とフーリエ解析',
  gakushuShidoYoryo: '常微分方程式の解法、フーリエ級数・フーリエ変換、信号処理への応用',
  lessons: [
    {
      id: 'ode-basics',
      title: '常微分方程式——変化の法則を解く',
      summary: '分離変数・線形方程式から、現象を記述する微分方程式を読む。',
      objectives: [
        '変数分離形と一次線形微分方程式を解ける',
        '減衰振動や人口増加など、モデルとの対応を説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '微分方程式とは' },
        {
          type: 'text',
          content:
            '未知関数の**導関数を含む方程式**。「今の状態が、この先どう変化するか」を直接書いたものです。物理・化学・経済・疫学のほぼすべてがここに落ちます。',
        },
        { type: 'heading', level: 3, content: '変数分離形' },
        { type: 'formula', tex: '\\frac{dy}{dx} = f(x)g(y) \\;\\Rightarrow\\; \\int \\frac{dy}{g(y)} = \\int f(x)\\,dx', display: true },
        {
          type: 'derivation',
          title: 'なぜ「どんな分布でも」正規分布に収束するのか（CLT の骨子）',
          steps: [
            {
              label: 'Step 1: 現実の量は無数のゆらぎの合計',
              tex: 'X = X_1 + X_2 + \\cdots + X_n',
              note: '測定誤差・身長・売上などは、小さな要因が積み重なった結果として現れる。',
            },
            {
              label: 'Step 2: 各要因の分布は何でもよい',
              tex: '\\text{平均 } \\mu \\text{ と分散 } \\sigma^2 \\text{ が有限であることだけが必要}',
              note: '元の形が一様分布だろうが二項分布だろうが構わない点が強力。',
            },
            {
              label: 'Step 3: 規格化して n → ∞',
              tex: '\\frac{X - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0, 1)',
              note: '特性関数（フーリエ変換）で書くと、log の展開で二次まで残り、高次が消える——釣鐘型だけが生き残る。',
            },
            {
              label: 'Step 4: ガルトン板で直感する',
              tex: '\\text{二項分布 } B(n, p) \\to N(np, np(1-p))',
              note: '左右に等確率で分岐する過程の重ね合わせ。組み合わせの数 $\\binom{n}{k}$ がスターリング近似でガウス型になるため、「ゆらぎの総和＝正規分布」は数学的な必然です。',
            },
          ],
        },
        {
          type: 'derivation',
          title: '変数分離はなぜ「dy と dx を分ける」ことで解けるのか',
          steps: [
            {
              label: 'Step 1: 元の方程式',
              tex: '\\frac{dy}{dx} = f(x)g(y)',
            },
            {
              label: 'Step 2: g(y) で割る',
              tex: '\\frac{1}{g(y)}\\frac{dy}{dx} = f(x)',
              note: '左辺は合成関数の微分の形になっていることに注目する。',
            },
            {
              label: 'Step 3: 合成関数の微分として認識',
              tex: '\\frac{d}{dx}\\left[ G(y(x)) \\right] = f(x) \\quad (G\'(y) = 1/g(y))',
              note: 'G を 1/g の原始関数とすると、左辺はまさに連鎖律による微分。ここが核心です。',
            },
            {
              label: 'Step 4: 両辺を x で積分',
              tex: 'G(y) = \\int f(x)\\,dx + C \\quad\\Longleftrightarrow\\quad \\int \\frac{dy}{g(y)} = \\int f(x)\\,dx',
              note: '形式的に「dy と dx を分けてそれぞれ積分」した形と一致する。だから分離変数は正当な手続きです。',
            },
          ],
        },
        {
          type: 'example',
          title: '例題（放射壊変）',
          body: '$\\dfrac{dN}{dt} = -\\lambda N$ を解け。',
          answer: '$\\dfrac{dN}{N} = -\\lambda dt$ を積分して $\\ln N = -\\lambda t + C$、$N(t) = N_0 e^{-\\lambda t}$ ——指数関数的減衰。半減期は $t_{1/2} = \\ln 2 / \\lambda$。',
        },
        { type: 'heading', level: 3, content: '一次線形（積分因子）' },
        { type: 'formula', tex: "\\frac{dy}{dx} + P(x)y = Q(x) \\;\\Rightarrow\\; y = e^{-\\int P}\\left( \\int Q e^{\\int P} dx + C \\right)", display: true },
        {
          type: 'list',
          items: [
            '**RC回路**: $R\\dfrac{dq}{dt} + \\dfrac{q}{C} = V$ → 時定数 $\\tau = RC$ で充電曲線が決まる',
            '**ロジスティック方程式**: $\\dot N = rN(1 - N/K)$ → 環境収容力 K へ飽和する増加',
            '**減衰振動**: $m\\ddot x + c\\dot x + kx = 0$ → 摩擦のあるバネ。過減衰・臨界・不足減衰に分類',
          ],
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '$\\dfrac{dy}{dx} = xy$ を解け。',
              hint: '変数分離。',
              answer: '$\\dfrac{dy}{y} = x\\,dx$ → $\\ln|y| = \\dfrac{x^2}{2} + C$ → $y = Ae^{x^2/2}$',
            },
            {
              body: '半減期 8 日の物質の壊変定数 λ を求めよ。',
              answer: '$\\lambda = \\dfrac{\\ln 2}{8} \\approx$ **0.0866 /日**',
            },
            {
              body: 'ロジスティック方程式で N ≪ K のときの増殖のようすを述べよ。',
              hint: '$(1-N/K) \\approx 1$。',
              answer: '$\\dot N \\approx rN$ となり、**初期は指数関数的増加**。K に近づくと速度が 0 に向かい飽和する。',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（微分方程式）',
          questions: [
            {
              question: '放射性物質の量は時間とともにどう減るか。',
              choices: ['指数関数的（e^{-λt}）', '直線的に', '2乗に反比例して'],
              answerIndex: 0,
              explanation: '壊変速度が現存量に比例するため dN/dt = −λN となり、解は指数関数になります。',
            },
            {
              question: 'RC回路の時定数 τ = RC は何を表すか。',
              choices: ['充電が約63%進むまでの時間', '完全に満充電になる時間', '抵抗の発熱量'],
              answerIndex: 0,
              explanation: 'τ 後に電圧は最終値の約 63%（=1−1/e）に達します。',
            },
          ],
        },
      ],
    },
    {
      id: 'fourier-analysis',
      title: 'フーリエ解析——任意の波は sin の合成',
      summary: '周期関数を周波数成分に分解し、音声・画像処理への道を開く。',
      objectives: [
        'フーリエ級数の構造（係数＝内積）を説明できる',
        '時間領域と周波数領域の関係を述べられる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'フーリエ級数' },
        { type: 'formula', tex: 'f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}\\left( a_n \\cos nx + b_n \\sin nx \\right)', display: true },
        { type: 'formula', tex: 'a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos nx \\,dx, \\qquad b_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin nx\\, dx', display: true },
        {
          type: 'text',
          content:
            '係数は「$f$ と各 cos/sin の**内積**」。三角関数が直交系をなすため、欲しい成分だけを選び出せます。これは線形代数の「正規直交基底への射影」と同じ操作です。',
        },
        { type: 'heading', level: 3, content: 'なぜ便利か' },
        {
          type: 'list',
          items: [
            '**微分が掛け算に変わる**: フーリエ変換すると $\\partial/\\partial t \\to i\\omega$。微分方程式が代数方程式になり解きやすい',
            '**フィルタリング**: 音声のノイズ除去、画像の圧縮（JPEG は離散コサイン変換）は「高周波成分を削る」こと',
            '**スペクトル分析**: 光のスペクトル、音楽の音色、地震波の解析すべてがここに基づく',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '矩形波（パルス列）のフーリエ級数にはどんな周波数成分が含まれるか。',
          answer: '奇数次の **sin 項のみ**（$b_n = 4/(n\\pi)$ for odd n）。角ばった波形を作るには無限の高調波が必要——急峻な変化ほど高周波を含みます。',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '**不確定性原理**「時間的に局在した信号ほど広い周波数帯を持つ」は、量子力学の ΔxΔp ≥ ℏ/2 と同じ数学（フーリエ対）です。',
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '周期 T の信号で、基本周波数はいくらか。',
              answer: '$f_1 = \\dfrac{1}{T}$。第 n 高調波は $nf_1$。',
            },
            {
              body: 'ノイズが高い周波数に集中しているとき、取り除くにはどんな処理をするか。',
              hint: '低域通過フィルタ',
              answer: '**フーリエ変換 → 高周波成分を減衰（ローパス）→ 逆変換**。',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（フーリエ）',
          questions: [
            {
              question: 'フーリエ変換は信号をどの観点から見るか。',
              choices: ['周波数成分', '時間幅', '振幅の最大値'],
              answerIndex: 0,
              explanation: '時間領域の関数を、どの周波数がどれだけ含まれるか（周波数領域）へ写し替えます。',
            },
            {
              question: 'JPEG 圧縮で使われるのはどれか。',
              choices: ['離散コサイン変換（DCT）', 'ラプラス変換', 'ガンマ関数'],
              answerIndex: 0,
              explanation: '画像ブロックを周波数成分に分解し、目立たない高周波を粗く量子化することで圧縮します。',
            },
          ],
        },
      ],
    },
    {
      id: 'laplace-transform',
      title: 'ラプラス変換——微分方程式を代数方程式に変える',
      summary: '時間領域の微分方程式を s 領域の代数計算に落とす積分変換。部分分数展開で元に戻す。',
      objectives: [
        'ラプラス変換の定義と基本公式（線形性・指数・冪・三角関数）を使いこなせる',
        '微分の性質により初期値問題が代数方程式に帰着することを説明できる',
        '部分分数展開で逆ラプラス変換を実行して微分方程式を解ける',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'ラプラス変換とは' },
        {
          type: 'text',
          content:
            'ラプラス変換は、時間の関数 $f(t)$ を複素数 $s$ の関数 $F(s)$ へ写しかえる**積分変換**です。目的は微分方程式の攻略。変換の世界では**微分が「$s$ を掛ける操作」に置き換わり**、面倒な微分方程式が一次方程式（代数方程式）に変わります。さらに初期値が変換の時点で式の中に組み込まれるため、「一般解を出してから定数を決める」という手順が丸ごと不要になります。',
        },
        { type: 'formula', tex: '\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty} e^{-st} f(t)\\, dt \\qquad (\\text{Re}\\, s \\text{ が十分大きいとき収束})', display: true },
        { type: 'heading', level: 3, content: '基本公式表' },
        {
          type: 'table',
          headers: ['f(t)', 'F(s) = L{f}'],
          rows: [
            ['$1$', '$\\dfrac{1}{s}$'],
            ['$e^{at}$', '$\\dfrac{1}{s-a}$'],
            ['$t^n$（n は非負整数）', '$\\dfrac{n!}{s^{n+1}}$'],
            ['$\\sin \\omega t$', '$\\dfrac{\\omega}{s^2 + \\omega^2}$'],
            ['$\\cos \\omega t$', '$\\dfrac{s}{s^2 + \\omega^2}$'],
          ],
        },
        { type: 'formula', tex: "\\mathcal{L}\\{af + bg\\} = aF + bG, \\qquad \\mathcal{L}\\{f'\\} = sF(s) - f(0)", display: true },
        {
          type: 'derivation',
          title: '微分の性質 L{f-prime} = sF − f(0) を部分積分で導く',
          steps: [
            {
              label: 'Step 1: 定義に f の代わりに f-prime を入れる',
              tex: "\\mathcal{L}\\{f'\\} = \\int_0^{\\infty} e^{-st} f^{\\prime}(t)\\, dt",
              note: '右辺を部分積分にかけるのが方針。u = e^{-st}, dv = f-prime dt と置く。',
            },
            {
              label: 'Step 2: 部分積分を実行する',
              tex: '\\int_0^{\\infty} e^{-st} f^{\\prime}(t)\\, dt = \\Bigl[ e^{-st} f(t) \\Bigr]_0^{\\infty} + s \\int_0^{\\infty} e^{-st} f(t)\\, dt',
              note: '∫u dv = uv − ∫ v du で、du = −s e^{-st} dt だから第 2 項に +s が現れる。',
            },
            {
              label: 'Step 3: 境界項を評価して結論',
              tex: '\\Bigl[ e^{-st} f(t) \\Bigr]_0^{\\infty} = 0 - f(0) \\quad\\Longrightarrow\\quad \\mathcal{L}\\{f^{\\prime}\\} = sF(s) - f(0)',
              note: 'f が指数オーダーで増えるにとどまり Re s > 0 なら t → ∞ で e^{-st} f(t) → 0。二階の導関数にも繰り返せば L{f-double-prime} = s²F − s f(0) − f-prime(0)。微分が掛け算に変わる正体はこの部分積分です。',
            },
          ],
        },
        {
          type: 'derivation',
          title: 'sin の変換公式——複素指数を許すだけで出てくる',
          steps: [
            {
              label: 'Step 1: 指数関数の変換を複素数 a に拡張',
              tex: '\\int_0^{\\infty} e^{-st} e^{at}\\, dt = \\left[ \\frac{e^{-(s-a)t}}{-(s-a)} \\right]_0^{\\infty} = \\frac{1}{s - a}',
              note: 'a を虚数 iω まで認めても収束の議論は同じ（Re s > Re a）。',
            },
            {
              label: 'Step 2: オイラーの公式で sin を分解',
              tex: '\\sin \\omega t = \\frac{e^{i\\omega t} - e^{-i\\omega t}}{2i}',
              note: '三角関数を複素指数の組に読み替える。線形性ですぐ変換できる。',
            },
            {
              label: 'Step 3: 代入して通分',
              tex: '\\mathcal{L}\\{\\sin \\omega t\\} = \\frac{1}{2i} \\left( \\frac{1}{s - i\\omega} - \\frac{1}{s + i\\omega} \\right) = \\frac{\\omega}{s^2 + \\omega^2}',
              note: '分母の差が 2iω になり 2i と打ち消し合う。cos も同様に s/(s² + ω²)。公式表を丸暗記しなくても導出は 3 行で終わります。',
            },
          ],
        },
        { type: 'heading', level: 3, content: '微分方程式への応用——解く流れ' },
        {
          type: 'list',
          items: [
            '両辺をラプラス変換する → 微分方程式が $Y(s)$ の**代数方程式**になる',
            '$Y(s)$ について解く → 有理関数（多項式の比）になる',
            '**部分分数展開**で基本公式表の形に分解する',
            '逆変換して $y(t)$ を得る——初期値は最初から反映済み',
          ],
        },
        {
          type: 'example',
          title: '例題（一階線形の初期値問題）',
          body: "$y' + 2y = e^{3t}$, $y(0) = 0$ をラプラス変換で解け。",
          answer:
            '変換すると $(s + 2)Y = \\dfrac{1}{s - 3}$ より $Y = \\dfrac{1}{(s - 3)(s + 2)}$。部分分数展開 $Y = \\dfrac{1}{5}\\left( \\dfrac{1}{s - 3} - \\dfrac{1}{s + 2} \\right)$ から **$y = \\dfrac{1}{5}\\left( e^{3t} - e^{-2t} \\right)$**。強制項のモード $e^{3t}$ と固有モード（過渡応答）$e^{-2t}$ が分解されて現れる。',
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '$\\mathcal{L}\\{3t^2 + 2e^{-t}\\}$ を求めよ。',
              hint: '線形性。$\\mathcal{L}\\{t^2\\} = 2!/s^3$。',
              answer: '$\\dfrac{6}{s^3} + \\dfrac{2}{s + 1}$（Re s > 0）',
            },
            {
              body: '$F(s) = \\dfrac{1}{(s + 1)(s + 3)}$ の逆ラプラス変換を求めよ。',
              hint: '$\\dfrac{1}{(s+1)(s+3)} = \\dfrac{A}{s+1} + \\dfrac{B}{s+3}$ とおいて分子を比較。',
              answer:
                '$A = B = \\dfrac{1}{2}$ となるので **$f(t) = \\dfrac{1}{2}\\left( e^{-t} - e^{-3t} \\right)$**。ヘビサイドの公式 $A = \\lim_{s \\to -1}(s+1)F(s)$ でもすぐ出る。',
            },
            {
              body: "$y'' + 4y = 0$, $y(0) = 1$, $y'(0) = 0$ を解け。",
              hint: "$\\mathcal{L}\\{y''\\} = s^2 Y - s\\,y(0) - y'(0)$。",
              answer:
                '$(s^2 + 4)Y = s$ より $Y = \\dfrac{s}{s^2 + 4}$。公式表に戻して **$y = \\cos 2t$**。微分方程式を一度も積分せずに解けたことに注意。',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（ラプラス変換）',
          questions: [
            {
              question: 'ラプラス変換が微分方程式を解きやすくする理由は？',
              choices: ['微分が s を掛ける操作に変わり、代数方程式になるから', '解が常に多項式になるから', '無限遠の境界条件が消えるから'],
              answerIndex: 0,
              explanation: "L{f'} = sF − f(0) のように微分が積み上がり、未知関数 Y(s) についての一次方程式に落ちます。",
            },
            {
              question: '$\\mathcal{L}\\{1\\}$ はいくつか。',
              choices: ['$1/s$', '$s$', '$1/(s-1)$'],
              answerIndex: 0,
              explanation: '∫₀^∞ e^{-st} dt = 1/s（Re s > 0）。等比級数の和と同じ極限です。',
            },
            {
              question: '初期値 f(0) はいつ登場するか。',
              choices: ['変換した時点で式の中に組み込まれる', '最後に数値を代入するとき', 'ラプラス変換では扱えない'],
              answerIndex: 0,
              explanation: '微分の性質に −f(0) という項として最初から現れるので、一般解→定数決定の手順が省略できます。',
            },
          ],
        },
      ],
    },
  ],
};

/** 大学数学：複素関数とベクトル解析 */
export const complexVectorUnit: Unit = {
  id: 'uni-complex-vector',
  name: '複素関数とベクトル解析',
  gakushuShidoYoryo: '複素数の極形式、正則関数、勾配・発散・回転、ガウスの発散定理',
  lessons: [
    {
      id: 'complex-functions',
      title: '複素関数——正則性とコーシー＝リーマン',
      summary: '複素変数の微分可能性が強力な構造をもつことを学ぶ。',
      objectives: [
        '極形式で複素数を扱える',
        'コーシー＝リーマンの関係式を確認できる',
        '正則関数が無限回微分可能であることを説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '複素数の極形式' },
        { type: 'formula', tex: 'z = x + iy = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}', display: true },
        {
          type: 'list',
          items: [
            '**掛け算**＝絶対値の積・偏角の和（$z_1 z_2 = r_1 r_2 e^{i(\\theta_1+\\theta_2)}$）',
            '**ド・モアブル**: $(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i \\sin n\\theta$',
            '$e^{i\\theta}$ の幾何：単位円上の点。オイラーの公式 $e^{i\\pi} + 1 = 0$',
          ],
        },
        { type: 'heading', level: 3, content: '正則性' },
        {
          type: 'text',
          content:
            '複素関数 $f(z)$ の導関数は「どの方向からでも同じ極限」を要求します。これは実2変数関数よりずっと厳しい条件で、**コーシー＝リーマン方程式** $u_x = v_y, \\; u_y = -v_x$ と同値です。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$f(z) = z^2 = (x^2-y^2) + 2xyi$ が正則であることを確かめよ。',
          answer: '$u = x^2-y^2$, $v = 2xy$。$u_x = 2x = v_y$、$u_y = -2y = -v_x$ ——CR 方程式を満たすので全域で正則。',
        },
        { type: 'heading', level: 3, content: 'なぜ強力か' },
        {
          type: 'list',
          items: [
            '**一度微分可能なら無限回微分可能**（実関数では成り立たない奇跡的な構造）',
            '**コーシーの積分定理**: 閉曲線に沿った積分が内部の特異点だけで決まる → 留数計算',
            '実積分や級数和（$\\int e^{-x^2}\\cos ax\\, dx$ 型）が複素平面上で一瞬で計算できることがある',
          ],
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '$1+i$ を極形式で表せ。',
              answer: '$r = \\sqrt{2}$、$\\theta = \\pi/4$ より **$\\sqrt{2}\\,e^{i\\pi/4}$**。',
            },
            {
              body: '$f(z) = \\bar{z} = x - iy$ が正則でない理由を CR 方程式で示せ。',
              answer: '$u=x$, $v=-y$。$u_x=1 \\neq v_y=-1$ ——CR を満たさないため正則でない。',
            },
            {
              body: '$(1+i)^8$ を計算せよ。',
              hint: '極形式とド・モアブル。',
              answer: '$(\\sqrt{2})^8 e^{i 8\\pi/4} = 16e^{i2\\pi} = $ **16**',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（複素関数）',
          questions: [
            {
              question: 'オイラーの公式 $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ の θ=π での帰結は？',
              choices: ['$e^{i\\pi} + 1 = 0$', '$e^{i\\pi} = 0$', '$e^{i\\pi} = i$'],
              answerIndex: 0,
              explanation: 'cos π = −1, sin π = 0 なので e^{iπ} = −1。数学で最も有名な等式の一つです。',
            },
            {
              question: '正則関数の特徴はどれか。',
              choices: ['一度微分可能なら無限回微分可能', '必ずいたるところ発散する', '実部だけでは決まらない'],
              answerIndex: 0,
              explanation: '複素微分可能性（正則性）は極めて強い条件で、滑らかさを自動的に無限階まで保証します。',
            },
          ],
        },
      ],
    },
    {
      id: 'vector-calculus',
      title: 'ベクトル解析——流れを読む演算子',
      summary: 'grad・div・rot で場の空間構造を捉え、積分定理で体積計算を面積計算へ落とす。',
      objectives: [
        '勾配・発散・回転の物理的意味を説明できる',
        'ガウスの発散定理を使って体積積分を面積分に変換できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '3つの演算子' },
        {
          type: 'table',
          headers: ['演算子', '定義', '意味'],
          rows: [
            ['勾配 grad f', '$\\nabla f = (f_x, f_y, f_z)$', '最も急な増加方向のベクトル'],
            ['発散 div F', '$\\nabla \\cdot \\vec{F} = \\partial_x F_x + \\partial_y F_y + \\partial_z F_z$', '湧き出しの強さ（源か吸込みか）'],
            ['回転 rot F', '$\\nabla \\times \\vec{F}$', '渦の強さ（回転成分）'],
          ],
        },
        {
          type: 'text',
          content:
            'マクスウェル方程式や流体力学はすべてこの言語で書かれます。たとえば「電荷がない場所では $\\nabla \\cdot \\vec E = 0$」＝電場の湧き出しがない、という文です。',
        },
        { type: 'heading', level: 3, content: '積分定理' },
        { type: 'formula', tex: '\\iiint_V (\\nabla \\cdot \\vec{F})\\,dV = \\oint_{\\partial V} \\vec{F} \\cdot d\\vec{S} \\quad (\\text{ガウスの発散定理})', display: true },
        {
          type: 'text',
          content:
            '「内部の湧き出しの総量＝境界から出ていく流量」。3次元の体積計算を表面の計算に置き換えられます。ストークスの定理はその回転版です。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$\\vec{F} = (x, y, z)$ に対し $\\nabla \\cdot \\vec{F}$ を求めよ。',
          answer: '$1 + 1 + 1 = $ **3**。原点から放射状に広がる場で、どこでも一定の湧き出しがある。',
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '$f(x,y,z) = x^2 y$ の勾配を求めよ。',
              answer: '$\\nabla f = (2xy, x^2, 0)$',
            },
            {
              body: '任意のスカラー場について $\\nabla \\times (\\nabla f) = \\vec{0}$ を示せ。',
              hint: '偏微分の順序交換（混合二次微分は等しい）。',
              answer: '各成分が $\\partial_y \\partial_z f - \\partial_z \\partial_y f = 0$ などとなりゼロ。**渦なし場はポテンシャルの勾配**で書ける根拠。',
            },
            {
              body: '$\\vec{F} = (-y, x, 0)$ の rot を求めよ。',
              answer: '$(0, 0, \\partial_x x - \\partial_y(-y)) = (0,0,2)$ ——原点周りの剛体回転に対応。',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（ベクトル解析）',
          questions: [
            {
              question: 'div F > 0 となる点には何があるか。',
              choices: ['湧き出し（源）', '吸い込み', '渦'],
              answerIndex: 0,
              explanation: '発散が正＝そこから流れが生まれている。負なら吸い込みです。',
            },
            {
              question: 'ガウスの発散定理の利点は？',
              choices: ['体積積分を面積分に変換できる', '任意の関数を級数展開できる', '微分方程式を解ける'],
              answerIndex: 0,
              explanation: '内部の総湧き出し（体積積分）を境界での流出入（面積分）に写し替えます。',
            },
          ],
        },
      ],
    },
  ],
};
