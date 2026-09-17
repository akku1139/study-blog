import type { Lesson } from './types';

// ============================================================
// 数学C：複素数平面（複素数の極形式と図形への応用）
// ============================================================

export const mathCComplexLessons: Lesson[] = [
  // ------------------------------------------------------------
  // 1. 複素数平面と極形式
  // ------------------------------------------------------------
  {
    id: 'mc-complex-polar',
    title: '複素数平面と極形式',
    summary:
      '複素数を平面の点・ベクトルとして読み、積・商が「絶対値の積・商」と「偏角の和・差」になることを極形式で確認する。',
    objectives: [
      '複素数を複素数平面上の点・ベクトルとして表し、絶対値と偏角を求めることができる',
      '極形式で複素数を表し、積・商・べき乗を図形的に説明できる',
      'ド・モアブルの定理を使ってべき乗や n 乗根を計算できる',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '複素数を平面に置く' },
      {
        type: 'text',
        content:
          '実部を横軸（実軸）、虚部を縦軸（虚軸）にとり、複素数 $z = a + bi$ を点 $(a,b)$ に対応させる平面を**複素数平面**と呼びます。複素数は原点 O からその点へのベクトルとしても読めます。絶対値が「原点からの距離」に、加法が「平行四辺形則」に、掛け算が「拡大と回転」に翻訳され、計算と幾何を結びつけられます。',
      },
      { type: 'formula', tex: 'z = a + bi \\iff \\text{点 } (a,\\, b), \\qquad |z| = \\sqrt{a^2 + b^2} \\; \\text{（原点からの距離）}', display: true },
      {
        type: 'list',
        items: [
          '実軸上の点は実数、虚軸上の点（原点を除く）は純虚数に対応する',
          '共役 $\\bar{z} = a - bi$ は実軸についての鏡映（点を上下に反転）',
          '絶対値の性質 $|z_1 z_2| = |z_1|\\,|z_2|$, $\\left|\\dfrac{z_1}{z_2}\\right| = \\dfrac{|z_1|}{|z_2|}$ ($z_2 \\ne 0$), $|\\bar{z}| = |z|$',
          '距離は差の絶対値：2点 $z_1, z_2$ の間の距離は $|z_1 - z_2|$',
        ],
      },
      { type: 'heading', level: 3, content: '極形式——大きさと向きで複素数を書く' },
      {
        type: 'text',
        content:
          'ベクトルの向きを表す角、すなわち実軸の正の向きから反時計回りに測った角を $z$ の**偏角**といい、記号 $\\arg z$ で書きます。極形式は「距離 $r$ と角 $\\theta$」で複素数を書く方法で、同じ複素数でも直交形式 $(a + bi)$ とはまるで違う顔を見せます。原点 $z=0$ には向きがなく偏角は定義しません。偏角は $2\\pi$ の整数倍を足しても同じ向きなので、この教材では $-\\pi < \\theta \\le \\pi$ の範囲に取ります（これを偏角の主値と呼ぶ流儀もあります）。',
      },
      { type: 'formula', tex: 'z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}, \\qquad r = |z|, \\quad \\theta = \\arg z \\quad (r > 0)', display: true },
      {
        type: 'derivation',
        title: '加法定理から積の極形式を導く',
        steps: [
          { label: '単位円上の複素数を掛ける', tex: '(\\cos u+i\\sin u)(\\cos v+i\\sin v)=(\\cos u\\cos v-\\sin u\\sin v)+i(\\sin u\\cos v+\\cos u\\sin v)', note: '$i^2=-1$ を使って実部と虚部をまとめます。' },
          { label: '三角関数の加法定理を使う', tex: '(\\cos u+i\\sin u)(\\cos v+i\\sin v)=\\cos(u+v)+i\\sin(u+v)', note: '角度を足す理由は三角関数の加法定理です。' },
          { label: '長さの部分も掛ける', tex: 'z_1z_2=r_1r_2\\{\\cos(u+v)+i\\sin(u+v)\\}', note: '以下では $e^{i\\theta}$ を $\\cos\\theta+i\\sin\\theta$ の省略表記としても使います。高校範囲の計算は三角関数の形だけで進められます。' },
        ],
      },
      {
        type: 'example',
        title: '例題1：極形式への変形',
        body: '$1 + \\sqrt{3}\\,i$ を極形式で表せ。',
        answer:
          '$r = \\sqrt{1^2 + (\\sqrt{3})^2} = 2$。$\\cos\\theta = 1/2,\\ \\sin\\theta = \\sqrt{3}/2$ はともに正なので $\\theta$ は第2象限ではなく第1象限の **$\\theta = \\pi/3$**。よって $1 + \\sqrt{3}\\,i = 2\\left(\\cos\\dfrac{\\pi}{3} + i\\sin\\dfrac{\\pi}{3}\\right) = 2e^{i\\pi/3}$。',
      },
      { type: 'heading', level: 3, content: '積・商は「拡大＋回転」' },
      {
        type: 'text',
        content:
          '極形式にすると掛け算の意味が一目瞭然です。絶対値は掛け合わさり、偏角は足されます。つまり $z_1 z_2$ は「$z_1$ を長さ $|z_2|$ 倍に伸ばして、$\\arg z_2$ だけ回転させたもの」。商はその逆操作（長さは割る、角度は引く）です。特に虚数単位 $i$ を掛けることは、長さを変えずに**90度回転**させる操作そのものです。',
      },
      { type: 'formula', tex: 'z_1 z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}, \\qquad \\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\, e^{i(\\theta_1 - \\theta_2)} \\quad (z_2 \\ne 0)', display: true },
      { type: 'text', content: 'たとえば $(1+i)/(1-i)$ は絶対値が $\\sqrt{2}/\\sqrt{2}=1$、偏角が $\\pi/4-(-\\pi/4)=\\pi/2$ なので $i$。共役を掛けても $(1+i)^2/2=i$ と一致します。原点以外の点 $a$ を中心に角 $\\phi$ 回すときは、いったん $a$ を引き、$w-a=(\\cos\\phi+i\\sin\\phi)(z-a)$ として最後に $a$ を戻します。' },
      {
        type: 'example',
        title: '例題2：べき乗の計算',
        body: '$\\left(\\sqrt{3} + i\\right)^6$ を求めよ。',
        answer:
          '$\\sqrt{3} + i = 2\\left(\\cos\\dfrac{\\pi}{6} + i\\sin\\dfrac{\\pi}{6}\\right)$。ド・モアブルより $2^6\\left(\\cos\\pi + i\\sin\\pi\\right) = 64 \\cdot (-1) =$ **$-64$**。',
      },
      { type: 'note', variant: 'info', content: 'ド・モアブルの定理：$(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$（n は整数）。正の n では積の法則を n 回繰り返し、n = 0 では両辺 1、負の n では逆数と商の法則を使えば確かめられます。べき乗・三角関数の倍角公式・n 乗根をまとめて扱える定理です。' },
      { type: 'heading', level: 3, content: 'n 乗根——偏角を一周分そろえてから割る' },
      { type: 'text', content: '$n$ を正の整数、$w=R(\\cos\\phi+i\\sin\\phi)\\ne0$ とします。$z^n=w$ では絶対値について $r^n=R$、偏角について $n\\theta=\\phi+2k\\pi$ が必要です。したがって次の $n$ 個がすべての解です。$k=n$ 以降は同じ点を繰り返すので不要です。' },
      { type: 'formula', tex: 'z_k=R^{1/n}\\left(\\cos\\frac{\\phi+2k\\pi}{n}+i\\sin\\frac{\\phi+2k\\pi}{n}\\right),\\quad k=0,1,\\ldots,n-1', display: true },
      { type: 'text', content: '解は半径 $R^{1/n}$ の円周上に等間隔で並び、$n\\ge3$ なら正 $n$ 角形の頂点です。$w=0$ の場合はこの偏角の議論を使わず、解は $z=0$ だけとします。' },
      { type: 'note', variant: 'warn', content: '偏角の主値を答える問題では、計算で出た角が範囲 $-\\pi < \\theta \\le \\pi$ を外れたら $2\\pi$ の倍数を加減して戻すのを忘れずに。また「偏角 $\\theta$ と $\\theta + 2\\pi$ は同じ複素数」なので、$n$ 乗根のように答えが複数個ある場面では、主値だけ書いて締めないようにしましょう。' },
      {
        type: 'practice',
        title: '練習問題',
        problems: [
          {
            body: '次の複素数を極形式で表せ。(1) $-1 + i$　(2) $2i$　(3) $-3$',
            hint: '絶対値を求めてから、サインとコサインの符号で象限を確定する。',
            answer:
              '(1) $r = \\sqrt{2}$、$\\cos\\theta = -1/\\sqrt{2},\\ \\sin\\theta = 1/\\sqrt{2}$ より $\\theta = 3\\pi/4$。$\\sqrt{2}\\,e^{3i\\pi/4}$　(2) $r = 2$、$\\theta = \\pi/2$。$2e^{i\\pi/2}$　(3) $r = 3$、$\\theta = \\pi$。$3e^{i\\pi}$',
          },
          {
            body: '$\\dfrac{1 + i}{\\sqrt{3} - i}$ を求めよ。',
            hint: '分母の極形式は $2e^{-i\\pi/6}$。商の法則「絶対値は割る・偏角は引く」を使う。',
            answer: '$\\dfrac{\\sqrt{2}\\,e^{i\\pi/4}}{2e^{-i\\pi/6}} = \\dfrac{\\sqrt{2}}{2}\\,e^{i(\\pi/4 + \\pi/6)} = \\dfrac{\\sqrt{2}}{2}\\left(\\cos\\dfrac{5\\pi}{12} + i\\sin\\dfrac{5\\pi}{12}\\right) = \\dfrac{(\\sqrt{3}-1) + (\\sqrt{3}+1)i}{4}$。実部・虚部ともに正で、偏角は $75°$ です。',
          },
          {
            body: '方程式 $z^3 = 8$ を解け。',
            hint: '$8 = 2^3 e^{i \\cdot 0}$ と極形式で書き、偏角側は $0 + 2k\\pi$ ($k$ は整数) と用意してから $\\frac{1}{3}$ 倍する。',
            answer: '$z = 2e^{2k\\pi i/3}$ ($k = 0, 1, 2$)。すなわち **$z = 2,\\ -1 \\pm \\sqrt{3}\\,i$**。どれも $|z| = 2$ で、偏角は $2\\pi/3$ ずつ離れた正三角形の頂点をもちます。',
          },
        ],
      },
      {
        type: 'quiz',
        title: '確認クイズ（複素数平面と極形式）',
        questions: [
          {
            question: '複素数 $-1 - i$ の偏角（主値 $-\\pi < \\theta \\le \\pi$）は？',
            choices: ['$\\pi/4$', '$-3\\pi/4$', '$-\\pi/4$'],
            answerIndex: 1,
            explanation: '実部・虚部がともに負なので第3象限。$\\tan\\theta = 1$ でも第1象限の $\\pi/4$ と答えてしまわないように、サイン・コサインがともに負で確定します。$-3\\pi/4$ は $5\\pi/4$ から $2\\pi$ を引いた角です。',
          },
          {
            question: '$z$ に $i$ を掛けることは、複素数平面上ではどの操作か。',
            choices: ['90度の回転（長さ不変）', '実軸方向への鏡映', '長さを2倍にする拡大'],
            answerIndex: 0,
            explanation: '$i = e^{i\\pi/2}$ なので、$iz$ は偏角を $\\pi/2$ だけ増やし絶対値は $|i| = 1$ で不変。原点のまわりの反時計回り90度回転です。',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // 2. 複素数と図形——距離・軌跡・商の偏角
  // ------------------------------------------------------------
  {
    id: 'mc-complex-geometry',
    title: '複素数と図形',
    summary:
      '差の絶対値で距離、商の偏角で角度を表し、円・垂直・共線などの図形条件を複素数の方程式として書き直す。',
    objectives: [
      '複素数の絶対値で距離や軌跡を表すことができる',
      '商 $\\dfrac{z_1 - z_2}{z_3 - z_2}$ の偏角がなす角を表すことを利用して、垂直条件や共線条件を書ける',
      '複素数の方程式を図形の条件として読み替えることができる',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '差の絶対値は距離——軌跡の基本' },
      {
        type: 'text',
        content:
          '複素数平面上で「点 $z$ と点 $w$ の間の距離」は $|z - w|$ です。この一事実だけで、円・線分・垂直二等分線の条件が複素数の方程式に翻訳できます。条件式を立てたら「どの2点間の距離を等しい・一定と言っているのか」に立ち返って読み直すのが、複素数の図形問題の基本戦略です。',
      },
      {
        type: 'table',
        headers: ['図形の条件', '複素数の方程式', '読み方'],
        rows: [
          ['中心 $z_0$、半径 $r$ の円', '$|z - z_0| = r$', '点 $z$ と $z_0$ の距離が一定'],
          ['線分 $\\mathrm{AB}$（$\\alpha, \\beta$ に対応）', '$|z - \\alpha| + |z - \\beta| = |\\alpha - \\beta|$', '2点 $\\alpha, \\beta$ への距離の和が最小値に一致 → 線分上'],
          ['線分 $\\mathrm{AB}$ の垂直二等分線', '$|z - \\alpha| = |z - \\beta|$', '2点までの距離が等しい'],
        ],
      },
      {
        type: 'example',
        title: '例題1：方程式を図形に読み替える',
        body: '複素数平面上で、$|z - 2| = |z - 2i|$ を満たす点 $z$ の軌跡を求めよ。',
        answer:
          '点 $2$（座標 $(2, 0)$）と点 $2i$（座標 $(0, 2)$）までの距離が等しい点の集合、すなわち **線分 AB の垂直二等分線**です。中点は $1+i$、元の線分の傾きは $-1$ なので、それに垂直な傾き $1$ の直線 $y=x$ が答えになります。座標で確かめると $(x-2)^2+y^2=x^2+(y-2)^2$ より $x=y$ です。',
      },
      { type: 'heading', level: 3, content: '商の偏角が「角度」を語る' },
      {
        type: 'text',
        content:
          '複素数平面で図形を扱う際の最強の武器は、**商の偏角**です。相異なる3点 $\\mathrm{A}(\\alpha), \\mathrm{B}(\\beta), \\mathrm{C}(\\gamma)$ に対して商 $\\dfrac{\\gamma - \\beta}{\\alpha - \\beta}$ を考えると、分子 $\\gamma - \\beta$ はベクトル $\\overrightarrow{\\mathrm{BC}}$、分母 $\\alpha - \\beta$ は $\\overrightarrow{\\mathrm{BA}}$ に対応します。商の偏角は「分母の向きから分子の向きへ回す角」なので、これは BA から BC への有向角です。通常の内角は $0$ から $\\pi$ の範囲なので、商の偏角の主値の絶対値をとります。さらに商の絶対値は2つのベクトルの長さの比 $\\dfrac{\\mathrm{BC}}{\\mathrm{BA}}$ です。',
      },
      { type: 'formula', tex: '\\arg\\frac{\\gamma - \\beta}{\\alpha - \\beta} = \\arg(\\gamma - \\beta) - \\arg(\\alpha - \\beta) \\;\\; \\text{（} \\angle\\mathrm{ABC} \\text{ の回転角）}, \\qquad \\left|\\frac{\\gamma - \\beta}{\\alpha - \\beta}\\right| = \\frac{\\mathrm{BC}}{\\mathrm{BA}}', display: true },
      {
        type: 'derivation',
        title: 'なぜ商の偏角で角度がわかるのか',
        steps: [
          { label: '点の差をベクトルに対応させる', tex: '\\gamma - \\beta \\;\\leftrightarrow\\; \\overrightarrow{\\mathrm{BC}}, \\qquad \\alpha - \\beta \\;\\leftrightarrow\\; \\overrightarrow{\\mathrm{BA}}', note: '複素数の差は「終点 − 始点」のベクトル。同じ始点に揃えた2本のベクトルを用意します。' },
          { label: '商の絶対値と偏角の法則を適用する', tex: '\\frac{\\gamma - \\beta}{\\alpha - \\beta} = \\frac{|\\overrightarrow{\\mathrm{BC}}|}{|\\overrightarrow{\\mathrm{BA}}|}\\, e^{i(\\arg\\overrightarrow{\\mathrm{BC}} - \\arg\\overrightarrow{\\mathrm{BA}})}', note: '絶対値は長さの比、偏角は2本の向きの開き（回転角）に分解されます。' },
          { label: '回転角が 0 / ±π/2 のときを条件式にする', tex: '\\text{共線} \\iff \\arg\\frac{\\gamma - \\beta}{\\alpha - \\beta} = 0, \\pi \\iff \\frac{\\gamma - \\beta}{\\alpha - \\beta} \\in \\mathbb{R}', note: '回転角が 0 か $\\pi$（＝180度）なら3点は1本の直線上に乗ります。虚部が 0 の実数になった、という判定だけで共線がわかります。' },
        ],
      },
      { type: 'heading', level: 3, content: '垂直・共線を商で判定する' },
      {
        type: 'list',
        items: [
          '3点 $\\mathrm{A}(\\alpha), \\mathrm{B}(\\beta), \\mathrm{C}(\\gamma)$ が同一直線上 $\\iff \\dfrac{\\gamma - \\beta}{\\alpha - \\beta}$ が**実数**（かつ異なる3点）',
          '$\\angle\\mathrm{ABC} = 90°\\ (\\overrightarrow{\\mathrm{BA}} \\perp \\overrightarrow{\\mathrm{BC}})\\ \\iff \\dfrac{\\gamma - \\beta}{\\alpha - \\beta}$ が**純虚数**',
          '三角形の相似・回転：$\\dfrac{\\gamma - \\beta}{\\alpha - \\beta} = p e^{i\\theta}$ なら、辺 $\\mathrm{BA}$ を $p$ 倍に伸ばして角 $\\theta$ 回転させたものが辺 $\\mathrm{BC}$',
          '正三角形の条件：$\\gamma - \\beta = e^{\\pm i\\pi/3}(\\alpha - \\beta)$（辺の長さを等しく、角を $\\pm 60°$）',
        ],
      },
      {
        type: 'example',
        title: '例題2：垂直条件を商で確認する',
        body: '$\\mathrm{A}(1 + 2i),\\ \\mathrm{B}(3 + 4i),\\ \\mathrm{C}(5 + 2i)$ について、$\\angle\\mathrm{ABC} = 90°$ となる理由を商 $\\dfrac{\\alpha - \\beta}{\\gamma - \\beta}$ で説明せよ。',
        answer:
          '$\\alpha - \\beta = -2 - 2i$、$\\gamma - \\beta = 2 - 2i$ なので $\\dfrac{\\alpha - \\beta}{\\gamma - \\beta} = \\dfrac{(-2 - 2i)(2 + 2i)}{(2 - 2i)(2 + 2i)} = \\dfrac{-8i}{8} = -i$。これは**純虚数**（偏角 $-\\pi/2$）なので、2つのベクトルのなす角は $90°$ です。',
      },
      { type: 'note', variant: 'tip', content: '共線・垂直の判定は「商の実部・虚部」だけで済みます。共線なら虚部 0、垂直なら実部 0。数値が与えられた問題では、まず商を計算してどちらが 0 になるかを見ると一瞬で判別できます。' },
      { type: 'note', variant: 'warn', content: '**除外点は元の条件から判断する**：商の分母が 0 になる点では商は未定義で、分子が 0 なら偏角は未定義です。角度を扱う際は2本のベクトルがともに零でないことを確認します。一方、距離の式だけなら無条件に点を除く必要はありません。分母を払って得た円に、もとの式では使えない点が混入していないか最後に戻って確認しましょう。' },
      {
        type: 'practice',
        title: '練習問題',
        problems: [
          {
            body: '点 $z$ が $|z - i| = 2$ を満たすときの軌跡を述べよ。また $|z - i| \\le 2$ の場合はどうなるか。',
            hint: '「点 $i$ との距離」に翻訳する。',
            answer: '点 $i$（座標 $(0, 1)$）を中心とする半径 2 の**円周**。不等号を含む $|z - i| \\le 2$ なら円の**内部（境界を含む円板）**になります。',
          },
          {
            body: '3点 $\\mathrm{A}(i),\\ \\mathrm{B}(1 + 3i),\\ \\mathrm{C}(2 + 5i)$ が同一直線上にあることを、商を用いて示せ。',
            hint: '$\\dfrac{\\gamma - \\alpha}{\\beta - \\alpha}$ が実数になることを確かめる。',
            answer: '$\\beta - \\alpha = 1 + 2i$、$\\gamma - \\alpha = 2 + 4i$ なので $\\dfrac{\\gamma - \\alpha}{\\beta - \\alpha} = 2$（実数）。偏角が 0 に一致するので A, B, C は同一直線上にあります（しかも $\\mathrm{AC} = 2\\,\\mathrm{AB}$ で B が中点）。',
          },
          {
            body: '$|z| = 1$ の円周上の点 $z \\ (\\ne \\pm 1)$ について、$w = \\dfrac{z + 1}{z - 1}$ の実部が 0 になることを示せ。ただし $z = 1$ は除外点であることに注意せよ。',
            hint: '$z=x+iy$ として分母の共役を掛け、$x^2+y^2=1$ を使う。',
            answer:
              '$w=\\dfrac{(x+1+iy)(x-1-iy)}{(x-1)^2+y^2}=\\dfrac{x^2+y^2-1-2iy}{(x-1)^2+y^2}$。$x^2+y^2=1$ より実部は 0。逆に分母が 0 でなければ、実部 0 は $x^2+y^2=1$ と同値です。実部 0 だけの条件なら円周から $z=1$ のみを除き、$z=-1$（$w=0$）は含みます。一方、非零の純虚数という条件や直角の条件では $z=-1$ も除きます。この問題は初めから $z\\ne\\pm1$ なので $w$ は非零の純虚数です。',
          },
        ],
      },
      {
        type: 'quiz',
        title: '確認クイズ（複素数と図形）',
        questions: [
          {
            question: '3点 $\\mathrm{A}(\\alpha), \\mathrm{B}(\\beta), \\mathrm{C}(\\gamma)$ が同一直線上にあることを示す条件はどれか（$\\alpha, \\beta, \\gamma$ は相異なる）。',
            choices: [
              '$\\dfrac{\\gamma - \\beta}{\\alpha - \\beta}$ が実数',
              '$\\dfrac{\\gamma - \\beta}{\\alpha - \\beta}$ が純虚数',
              '$\\alpha\\beta\\gamma$ が実数',
            ],
            answerIndex: 0,
            explanation: '商が実数のとき偏角は 0 か $\\pi$、つまり2つのベクトルが同方向か反方向に平行。異なる3点なら同じ直線上に乗ります。純虚数なら回転角 $\\pm\\pi/2$ で垂直、すなわち直角三角形の条件になります。',
          },
          {
            question: '方程式 $|z - 3 + 2i| = 1$ の表す図形は？',
            choices: [
              '点 $3 + 2i$ を中心とする半径 1 の円周',
              '点 $3 - 2i$ を中心とする半径 1 の円周',
              '点 $-3 + 2i$ を中心とする半径 1 の円周',
            ],
            answerIndex: 1,
            explanation: '$|z - 3 + 2i| = |z - (3 - 2i)|$ と書き直してから「点 $3 - 2i$ との距離が 1」と読みます。括弧の外の $+2i$ と、中心の虚部 $-2$ を取り違えないようにしましょう。',
          },
        ],
      },
    ],
  },
];
