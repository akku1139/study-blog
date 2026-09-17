import type { Lesson } from './types';

export const math2DetailLessons: Lesson[] = [
  {
    id: 'trig-harmonic-addition',
    title: '加法定理から倍角・半角・和積・合成へ',
    summary: '加法定理を出発点に式を変形し、係数の長さと位相から三角関数の合成を理解する。',
    objectives: [
      '倍角・半角および和積・積和の公式を加法定理と結び付けて使える',
      '合成の振幅と位相を係数比較で決め、係数のノルムとの関係を説明できる',
      '半角の符号や合成後の区間を確認して計算できる',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '既習の加法定理を変形の道具にする' },
      { type: 'text', content: '「弧度法と三角関数」で学んだ加法定理を使います。ここではその証明を繰り返すのでなく、2つの角を等しくする、和と差を足し引きする、係数をそろえる、という3つの操作に注目します。角は特に断らない限りラジアンです。' },
      { type: 'heading', level: 3, content: '倍角と半角：角を変えても符号は自動では決まらない' },
      { type: 'text', content: '加法定理で2つの角をともに $x$ とすれば倍角の公式です。余弦には $\\sin^2x+\\cos^2x=1$ を使った3通りの形があり、残したい関数に合わせて選びます。' },
      { type: 'formula', tex: '\\sin 2x=2\\sin x\\cos x,\\qquad \\cos 2x=\\cos^2x-\\sin^2x=1-2\\sin^2x=2\\cos^2x-1', display: true },
      { type: 'text', content: '余弦の倍角公式で $x$ を $\\theta/2$ に置き換えて移項すると半角の公式です。以下の平方の形はすべての実数 $\\theta$ で成立します。平方根を取る段階では、$\\theta/2$ がどの象限にあるかを調べて符号を選びます。' },
      { type: 'formula', tex: '\\sin^2\\frac{\\theta}{2}=\\frac{1-\\cos\\theta}{2},\\qquad \\cos^2\\frac{\\theta}{2}=\\frac{1+\\cos\\theta}{2}', display: true },
      { type: 'note', variant: 'warn', content: '$\\sin(\\theta/2)=\\sqrt{(1-\\cos\\theta)/2}$ と常に正の平方根を取るのは誤りです。たとえば $2\\pi<\\theta<3\\pi$ なら $\\pi<\\theta/2<3\\pi/2$ なので正弦も余弦も負です。' },
      { type: 'heading', level: 3, content: '積和・和積：加法定理を足す、引く' },
      { type: 'text', content: '$\\sin(u+v)$ と $\\sin(u-v)$ を足せば余弦と正弦の一方の項が消えます。余弦でも同様に足し引きします。これが積を和へ直す積和公式の仕組みで、以下は実数 $u,v$ に対して使えます。' },
      { type: 'formula', tex: '\\sin u\\cos v=\\frac{\\sin(u+v)+\\sin(u-v)}{2},\\quad \\cos u\\sin v=\\frac{\\sin(u+v)-\\sin(u-v)}{2}', display: true },
      { type: 'formula', tex: '\\cos u\\cos v=\\frac{\\cos(u+v)+\\cos(u-v)}{2},\\quad \\sin u\\sin v=\\frac{\\cos(u-v)-\\cos(u+v)}{2}', display: true },
      { type: 'text', content: '逆に $p=u+v,\\ q=u-v$ と置けば $u=(p+q)/2,\\ v=(p-q)/2$ です。和積公式の「平均の角」と「差の半分」は、この連立方程式から現れます。次の公式も実数 $p,q$ で成立します。' },
      { type: 'formula', tex: '\\sin p+\\sin q=2\\sin\\frac{p+q}{2}\\cos\\frac{p-q}{2},\\quad \\sin p-\\sin q=2\\cos\\frac{p+q}{2}\\sin\\frac{p-q}{2}', display: true },
      { type: 'formula', tex: '\\cos p+\\cos q=2\\cos\\frac{p+q}{2}\\cos\\frac{p-q}{2},\\quad \\cos p-\\cos q=-2\\sin\\frac{p+q}{2}\\sin\\frac{p-q}{2}', display: true },
      { type: 'note', variant: 'tip', content: '和を積にすると「積が0ならどちらかが0」という方程式の解法に使えます。積を和にすると異なる角の積を分離できます。余弦の差の公式に付くマイナスは特に確認しましょう。' },
      { type: 'heading', level: 3, content: '合成の導出：なぜ振幅は係数の長さなのか' },
      { type: 'text', content: '実数係数 $a,b$ が同時に0でないとします。$a\\sin x+b\\cos x$ を1つの正弦にまとめるには、右辺を加法定理で展開し、$\\sin x$ と $\\cos x$ の係数をそれぞれ一致させます。' },
      {
        type: 'derivation',
        title: '係数比較と単位円から合成公式を作る',
        steps: [
          {
            label: '1：展開して係数を比較する',
            tex: 'r\\sin(x+\\alpha)=r\\cos\\alpha\\sin x+r\\sin\\alpha\\cos x,\\quad r\\cos\\alpha=a,\\ r\\sin\\alpha=b',
            note: 'すべての x で等しい式にするので、2つの係数を同時に合わせる。',
          },
          {
            label: '2：2乗して足す',
            tex: 'a^2+b^2=r^2(\\cos^2\\alpha+\\sin^2\\alpha)=r^2',
            note: '振幅を正とする約束なら r=√(a²+b²)。これは係数ベクトル (a,b) の長さ（ノルム）であり、a²+b² はその長さの2乗である。',
          },
          {
            label: '3：単位円上の点として位相を決める',
            tex: 'r=\\sqrt{a^2+b^2}>0,\\quad \\cos\\alpha=\\frac{a}{r},\\quad \\sin\\alpha=\\frac{b}{r}',
            note: '右辺の2乗和は1なので、その座標を持つ角 α が存在する。α は 2π の整数倍の違いを除いて決まる。',
          },
        ],
      },
      { type: 'text', content: '係数の順序が変われば対応も変わります。$a\\cos\\theta+b\\sin\\theta$ を正弦へ合成するときの条件は次の通りです。$\\alpha$ は例えば $0\\le\\alpha<2\\pi$ に1つ選びます。' },
      { type: 'formula', tex: 'a\\cos\\theta+b\\sin\\theta=r\\sin(\\theta+\\alpha),\\quad r=\\sqrt{a^2+b^2}>0,\\quad \\sin\\alpha=\\frac{a}{r},\\quad \\cos\\alpha=\\frac{b}{r}', display: true },
      { type: 'note', variant: 'warn', content: '$\\tan\\alpha$ だけでは象限が決まりません。正弦・余弦の符号を両方確認します。また $a=b=0$ なら式は恒等的に0で、$r=0$ とできても $a/r,b/r$ は使えません。この場合は別扱いです。' },
      { type: 'text', content: '合成はすべての実数の角で成り立つ恒等式ですが、最大・最小や方程式には元の区間が影響します。$L\\le\\theta<U$ で $t=\\theta+\\alpha$ と置けば $L+\\alpha\\le t<U+\\alpha$。この区間で $\\sin t=\\pm1$ を実際に取るときだけ、最大・最小が $\\pm r$ になります。' },
      {
        type: 'example',
        title: '例題1：半角の符号まで求める',
        body: '$\\cos\\theta=3/5,\\ 3\\pi/2<\\theta<2\\pi$ のとき、$\\sin(\\theta/2)$ と $\\cos(\\theta/2)$ を求めよ。',
        answer: '$3\\pi/4<\\theta/2<\\pi$ より半角は第2象限。正弦は正、余弦は負です。したがって $\\sin(\\theta/2)=\\sqrt{(1-3/5)/2}=1/\\sqrt5$、$\\cos(\\theta/2)=-\\sqrt{(1+3/5)/2}=-2/\\sqrt5$。確認すると $2(1/\\sqrt5)(-2/\\sqrt5)=-4/5=\\sin\\theta$ です。',
      },
      {
        type: 'example',
        title: '例題2：合成してから区間を移す',
        body: '$0\\le x\\le\\pi/2$ における $\\sqrt3\\sin x+\\cos x$ の最大値・最小値を求めよ。',
        answer: '$r=2,\\ \\cos\\alpha=\\sqrt3/2,\\ \\sin\\alpha=1/2$ より $2\\sin(x+\\pi/6)$。$t=x+\\pi/6$ の範囲は $\\pi/6\\le t\\le2\\pi/3$ です。最大は $t=\\pi/2$、すなわち $x=\\pi/3$ で **2**。最小は両端を比較し、$x=0$ で **1**（もう一端は $\\sqrt3$）。$-2$ はこの区間では取りません。',
      },
      {
        type: 'practice',
        title: '練習問題：公式の選択と条件',
        problems: [
          {
            body: '$\\sin x=3/5,\\ 0<x<\\pi/2$ のとき $\\sin2x,\\ \\cos2x$ を求めよ。',
            hint: '第1象限なので $\\cos x$ は正。余弦の倍角には $1-2\\sin^2x$ が使えます。',
            answer: '$\\cos x=4/5$ より $\\sin2x=2(3/5)(4/5)=24/25$、$\\cos2x=1-18/25=7/25$。2乗和も1になります。',
          },
          {
            body: '$\\sin(5\\pi/12)+\\sin(\\pi/12)$ を和積公式で求めよ。',
            hint: '2つの角の平均は $\\pi/4$、差の半分は $\\pi/6$ です。',
            answer: '$2\\sin(\\pi/4)\\cos(\\pi/6)=2(\\sqrt2/2)(\\sqrt3/2)=\\sqrt6/2$。',
          },
          {
            body: '$\\cos x-\\sqrt3\\sin x$ を $r\\sin(x+\\alpha)$（$r>0,\\ 0\\le\\alpha<2\\pi$）に合成せよ。',
            hint: '正弦の係数は $r\\cos\\alpha$、余弦の係数は $r\\sin\\alpha$ です。',
            answer: '$r=2,\\ \\cos\\alpha=-\\sqrt3/2,\\ \\sin\\alpha=1/2$ より $\\alpha=5\\pi/6$。答えは $2\\sin(x+5\\pi/6)$。第2象限を選ぶのがポイントです。',
          },
        ],
      },
      {
        type: 'quiz',
        title: '確認クイズ：符号とノルム',
        questions: [
          {
            question: '$\\pi<\\theta<2\\pi$ のとき $\\cos(\\theta/2)$ はどれか。',
            choices: ['$\\sqrt{(1+\\cos\\theta)/2}$', '$-\\sqrt{(1+\\cos\\theta)/2}$', '常に0'],
            answerIndex: 1,
            explanation: '$\\pi/2<\\theta/2<\\pi$ は第2象限なので余弦は負です。平方の公式だけでは符号は決まりません。',
          },
          {
            question: '実数全体で考える $3\\sin x+4\\cos x$ の振幅はどれか。',
            choices: ['7', '25', '5'],
            answerIndex: 2,
            explanation: '振幅は $r=\\sqrt{3^2+4^2}=5$。25 はノルムの2乗であり、振幅そのものではありません。実数全体なら最大5、最小−5を取ります。',
          },
        ],
      },
    ],
  },
  {
    id: 'trig-equation-inequality',
    title: '三角方程式・不等式と角の区間管理',
    summary: '単位円の対称性と角の置き換えを使い、端点や周期による解の抜けを防ぐ。',
    objectives: [
      '角を半分にする操作や位相の移動に合わせて定義域を変換できる',
      '単位円の対称性から三角方程式の解をもれなく整理できる',
      '三角不等式で等号と元の区間を照合し、境界を正しく含められる',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '角の名前を変えると、動く範囲も変わる' },
      { type: 'text', content: '「弧度法と三角関数」で学んだ単位円と周期を、解集合を調べる道具として使います。$\\theta$、$\\theta/2$、$\\theta+\\alpha$ は別々に自由に動く変数ではありません。置き換えたら、元の範囲の両端にも同じ操作をします。角はラジアンです。' },
      {
        type: 'table',
        headers: ['元の条件', '置き換え', '新しい範囲と戻し方'],
        rows: [
          ['$0\\le\\theta<2\\pi$', '$t=\\theta/2$', '$0\\le t<\\pi$、最後に $\\theta=2t$'],
          ['$0\\le\\theta<2\\pi$', '$t=\\theta+\\alpha$', '$\\alpha\\le t<2\\pi+\\alpha$、最後に $\\theta=t-\\alpha$'],
          ['$0\\le\\theta<2\\pi$', '$t=2\\theta$', '$0\\le t<4\\pi$、最後に $\\theta=t/2$'],
        ],
      },
      { type: 'text', content: '$\\theta$ が1周しても半角は半周しか進みません。逆に倍角は2周します。$\\sin(\\theta/2)$ の $\\theta$ に関する周期は $4\\pi$ なので、$\\theta$ の値を無条件に $2\\pi$ で折り返してはいけません。' },
      { type: 'heading', level: 3, content: '単位円の座標と対称性から解を読む' },
      { type: 'text', content: '単位円上の点を $(\\cos t,\\sin t)$ と見ると、正弦の条件は高さ、余弦の条件は横座標です。$\\sin t=c$ は水平線との交点を求める問題です。$|c|>1$ なら交点がなく、解もありません。' },
      { type: 'diagram', diagram: 'unit-circle-static', caption: '高さが同じ2点は縦軸に関して対称、横座標が同じ2点は横軸に関して対称。' },
      {
        type: 'derivation',
        title: '同じ高さを持つ角の一般解を作る',
        steps: [
          {
            label: '1：基準になる角を1つ取る',
            tex: '\\sin\\beta=c,\\qquad -\\frac{\\pi}{2}\\le\\beta\\le\\frac{\\pi}{2}\\quad (|c|\\le1)',
            note: 'この範囲に正弦が c になる角 β を1つ選ぶ。特殊角なら単位円から読める。',
          },
          {
            label: '2：縦軸で反射した点を調べる',
            tex: '\\sin(\\pi-\\beta)=\\sin\\beta,\\qquad \\cos(\\pi-\\beta)=-\\cos\\beta',
            note: '横座標だけ反転するので同じ高さになる。水平線と円の交点は高々2つである。',
          },
          {
            label: '3：周回分を足す',
            tex: 't=\\beta+2k\\pi\\quad\\text{または}\\quad t=\\pi-\\beta+2k\\pi,\\qquad k\\in\\mathbb Z',
            note: '各候補を指定区間と交わらせる。c=±1 では2系列が同じ解を表すため重複を除く。',
          },
        ],
      },
      { type: 'text', content: '余弦は横軸対称なので $\\cos t=\\cos\\beta$ の解は $t=\\pm\\beta+2k\\pi$（$k$ は整数）です。一般解を作ってから指定区間で絞ると、位相移動で $2\\pi$ を超えた角も拾えます。正接なら周期は $\\pi$ で、$\\cos t=0$ の角は定義されません。' },
      { type: 'heading', level: 3, content: '不等式は点ではなく円周の弧を選ぶ' },
      { type: 'text', content: '$\\sin t\\ge1/2$ なら高さ $1/2$ 以上の弧を選び、1周では $\\pi/6\\le t\\le5\\pi/6$ です。$\\sin t>1/2$ なら両端を除きます。等号を含むかという条件と、元の定義域が端点を含むかという条件を、両方満たす必要があります。' },
      { type: 'formula', tex: '\\sin t\\ge\\frac12\\iff t\\in\\bigcup_{k\\in\\mathbb Z}\\left[\\frac{\\pi}{6}+2k\\pi,\\frac{5\\pi}{6}+2k\\pi\\right]', display: true },
      { type: 'text', content: '合成を使うときは実数 $a,b$ が同時に0でないことを確認し、$r=\\sqrt{a^2+b^2}>0$ とします。$a\\cos\\theta+b\\sin\\theta=r\\sin(\\theta+\\alpha)$ なら $\\sin\\alpha=a/r,\\ \\cos\\alpha=b/r$ を同時に満たす角を選びます。$r$ で割っても不等号の向きは変わりません。両係数が0なら元の定数の不等式として判定します。' },
      { type: 'note', variant: 'warn', content: '合成で $t=\\theta+\\alpha$ とした後に、勝手に $0\\le t<2\\pi$ としてはいけません。元が $L\\le\\theta<U$ なら $L+\\alpha\\le t<U+\\alpha$ です。位相を別の $2\\pi$ 周期の代表に変えても、区間も同じだけ動かせば最終的な解は一致します。' },
      {
        type: 'example',
        title: '例題1：半角の方程式',
        body: '$0\\le\\theta<2\\pi$ で $\\sin(\\theta/2)=\\sqrt3/2$ を解け。',
        answer: '$t=\\theta/2$ と置くと $0\\le t<\\pi$。単位円で高さ $\\sqrt3/2$ となるのは $t=\\pi/3,\\ 2\\pi/3$ です。$\\theta=2t$ に戻して **$\\theta=2\\pi/3,\\ 4\\pi/3$**。どちらも元の範囲内で、半角を代入すると高さが一致します。',
      },
      {
        type: 'example',
        title: '例題2：合成した不等式と周期をまたぐ区間',
        body: '$0\\le\\theta<2\\pi$ で $\\cos\\theta+\\sin\\theta\\ge1$ を解け。',
        answer: '$\\sqrt2\\sin(\\theta+\\pi/4)\\ge1$。$t=\\theta+\\pi/4$ と置けば $\\pi/4\\le t<9\\pi/4$。この範囲で $\\sin t\\ge\\sqrt2/2$ となるのは $\\pi/4\\le t\\le3\\pi/4$ のみです。次の弧の始点 $9\\pi/4$ は範囲外。$\\pi/4$ を引いて **$0\\le\\theta\\le\\pi/2$**。境界では元の左辺がどちらも1になります。',
      },
      { type: 'heading', level: 3, content: '解集合を整理する最後の確認' },
      {
        type: 'list',
        ordered: true,
        items: [
          '元の定義域を書き、置き換えた角の区間も書く。必要なら複数周分の候補を作る。',
          '単位円の対称性で相方の角を取り、方程式は点、不等式は弧として解く。',
          '元の角に戻し、定義域との共通部分を取る。重複を除き、区間は小さい方から並べる。',
          '境界を元の式に代入する。厳密な不等号なら等号の点は外し、定義域の開いた端も除く。',
        ],
      },
      { type: 'note', variant: 'warn', content: '両辺を $\\sin\\theta$ や $\\cos\\theta$ で割ると、それが0の解を失うことがあります。不等式では割る量の符号も必要です。先に因数分解するか、0の場合と正負の場合を分けてください。' },
      {
        type: 'practice',
        title: '練習問題：対称性・周回・境界',
        problems: [
          {
            body: '$0\\le\\theta<2\\pi$ で $\\cos2\\theta=1/2$ を解け。',
            hint: '$t=2\\theta$ の範囲は $0\\le t<4\\pi$。横座標 $1/2$ の点を2周分調べます。',
            answer: '$t=\\pi/3,\\ 5\\pi/3,\\ 7\\pi/3,\\ 11\\pi/3$。2で割り、$\\theta=\\pi/6,\\ 5\\pi/6,\\ 7\\pi/6,\\ 11\\pi/6$。4つとも元の範囲内です。',
          },
          {
            body: '$0\\le\\theta<2\\pi$ で $\\sin(\\theta/2)\\ge1/2$ を解け。',
            hint: '$0\\le t=\\theta/2<\\pi$ において、高さ $1/2$ 以上の弧を取ります。',
            answer: '$\\pi/6\\le t\\le5\\pi/6$ より $\\pi/3\\le\\theta\\le5\\pi/3$。両端は等号を満たし、元の範囲にも含まれます。',
          },
          {
            body: '$0\\le\\theta<2\\pi$ で $\\cos\\theta\\ge1/2$ を解け。',
            hint: '単位円で横座標が $1/2$ 以上の弧は、指定区間の両端付近に分かれます。',
            answer: '$0\\le\\theta\\le\\pi/3$ または $5\\pi/3\\le\\theta<2\\pi$。$0$ は含みますが、$2\\pi$ は元の定義域で除外されています。',
          },
        ],
      },
      {
        type: 'quiz',
        title: '確認クイズ：角の範囲と等号',
        questions: [
          {
            question: '$0\\le\\theta<2\\pi$、$t=\\theta-\\pi/3$ のとき正しい範囲はどれか。',
            choices: ['$0\\le t<2\\pi$', '$-\\pi/3\\le t<5\\pi/3$', '$\\pi/3\\le t<7\\pi/3$'],
            answerIndex: 1,
            explanation: '両端から $\\pi/3$ を引きます。端点を含むかどうかは平行移動では変わりません。負の角もそのまま管理できます。',
          },
          {
            question: '$0\\le\\theta<2\\pi$ で $\\sin\\theta>0$ の解はどれか。',
            choices: ['$0\\le\\theta\\le\\pi$', '$0<\\theta<\\pi$', '$\\pi<\\theta<2\\pi$'],
            answerIndex: 1,
            explanation: '正弦が正なのは単位円の上半分。$\\theta=0,\\ \\pi$ では正弦が0なので、厳密な不等号では両端を含みません。',
          },
        ],
      },
    ],
  },
];
