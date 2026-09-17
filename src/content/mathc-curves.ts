import type { Lesson } from './types';

export const mathCCurvesLessons: Lesson[] = [
  {
    id: 'mc-parametric-curves',
    title: '媒介変数表示 — 点の動きから曲線を表す',
    summary: '直線・円・楕円を共通の変数で表し、変数を消去した方程式と実際に描く範囲を区別する。',
    objectives: [
      '媒介変数の意味を説明し、直線・円・楕円を媒介変数表示できる。',
      '媒介変数を消去して直交座標の方程式を導ける。',
      '変数の範囲から軌跡の端点・向き・描く部分を判断できる。',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '1．一つの変数で二つの座標を動かす' },
      {
        type: 'text',
        content: '点の位置を $x=f(t),\\ y=g(t)$ の組で表すとき、$t$ を**媒介変数**といいます。同じ $t$ の値を両方の式に代入して一つの点を決めます。$t$ は時刻と考えると直感的ですが、時間である必要はありません。',
      },
      {
        type: 'text',
        content: '$y=f(x)$ では同じ $x$ に対して $y$ は一つですが、円の上下には同じ $x$ をもつ二つの点があります。媒介変数表示なら、上半分と下半分を一続きの動きとして扱えます。式だけでなく、$t$ をどの範囲で動かすかも表示の一部です。',
      },
      { type: 'heading', level: 3, content: '2．直線・円・楕円の基本形' },
      {
        type: 'formula', display: true,
        tex: '\\text{直線：}\\quad x=x_0+at,\\quad y=y_0+bt\\quad ((a,b)\\ne(0,0),\\ t\\in\\mathbb{R})',
      },
      {
        type: 'text',
        content: 'これは点 $(x_0,y_0)$ を通り、方向ベクトル $(a,b)$ をもつ直線です。異なる2点 A・B を結ぶ線分は $P=A+t(B-A)$、$0\\le t\\le1$ と表せます。$t=0$ が A、$t=1$ が B なので、制限を外すと線分ではなく直線全体になります。',
      },
      {
        type: 'formula', display: true,
        tex: '\\text{円：}\\quad x=h+R\\cos t,\\quad y=k+R\\sin t\\quad (R>0,\\ 0\\le t<2\\pi)',
      },
      {
        type: 'text',
        content: '中心 $(h,k)$、半径 $R$ の円です。$t=0$ で右端 $(h+R,k)$ にあり、$t$ が増えると反時計回りに進みます。$0\\le t<2\\pi$ で円全体を一度描き、$t=2\\pi$ まで含めると始点に戻ります。',
      },
      {
        type: 'formula', display: true,
        tex: '\\text{楕円：}\\quad x=h+a\\cos t,\\quad y=k+b\\sin t\\quad (a,b>0,\\ 0\\le t<2\\pi)',
      },
      {
        type: 'text',
        content: '単位円を横に $a$ 倍、縦に $b$ 倍して平行移動した楕円です。中心から左右端までの距離は $a$、上下端までの距離は $b$。$a=b$ のときは円になります。ここで $a$ が必ず長半径とは限りません。',
      },
      {
        type: 'derivation',
        title: '楕円の媒介変数を消去する — 必要条件と逆の確認',
        steps: [
          { label: '中心を引き、各方向の倍率で割る', tex: '\\frac{x-h}{a}=\\cos t,\\qquad \\frac{y-k}{b}=\\sin t', note: 'a、b は正なので割れます。' },
          { label: '三角関数の恒等式を使う', tex: '\\left(\\frac{x-h}{a}\\right)^2+\\left(\\frac{y-k}{b}\\right)^2=\\cos^2t+\\sin^2t=1', note: '媒介変数表示から得た点は必ずこの方程式を満たします。' },
          { label: '逆にすべての点が表せるか調べる', tex: 'u=\\frac{x-h}{a},\\ v=\\frac{y-k}{b},\\quad u^2+v^2=1', note: '単位円上の点 (u,v) には 0≦t<2π の角が対応するので、全周を動かす場合は楕円全体です。t の範囲を狭めた場合、この逆の確認が必要です。' },
        ],
      },
      { type: 'heading', level: 3, content: '3．消去しても、範囲と向きを忘れない' },
      {
        type: 'example',
        title: '例題1：線分の式と進む向き',
        body: '$x=1+2t,\\ y=3-t$、$-1\\le t\\le2$ が描く図形を、$t$ を消去して説明しよう。',
        answer: '$t=(x-1)/2$ を代入すると $y=(7-x)/2$、つまり $x+2y=7$。ただし $x$ は $t$ とともに増え、$-1\\le x\\le5$ です。端点は $t=-1$ の $(-1,4)$ と $t=2$ の $(5,1)$。両端を含む線分を前者から後者へ進み、直線全体は描きません。',
      },
      {
        type: 'example',
        title: '例題2：同じ楕円でも半分だけ',
        body: '$x=2+3\\cos t,\\ y=-1+2\\sin t$、$0\\le t\\le\\pi$ が描く図形と進む向きを求めよう。',
        answer: '消去すると $(x-2)^2/9+(y+1)^2/4=1$。この範囲で $\\sin t\\ge0$ だから $y\\ge-1$ となり、中心 $(2,-1)$ の楕円の上半分です。$(5,-1)$ → $(2,1)$ → $(-1,-1)$ と進みます。逆に上半分の各点には $0\\le t\\le\\pi$ の角が対応するため、この半楕円をすべて描きます。両端も含みます。',
      },
      {
        type: 'note', variant: 'warn',
        content: '**消去した方程式だけで軌跡を断定しない。** 例えば $x=t^2,\\ y=t$、$0\\le t\\le2$ は $x=y^2$ を満たしますが、実際には $0\\le y\\le2$ の部分だけです。式の二乗や消去で失われた符号・範囲を、元の表示から戻しましょう。',
      },
      {
        type: 'list', ordered: true,
        items: [
          '基本値や端点の t を代入し、いくつかの点を表にする。',
          '消去して曲線の候補を出し、座標の符号や範囲を付け加える。',
          '候補の各点を元の t で表せるか確かめ、向きや重複も確認する。',
        ],
      },
      {
        type: 'note', variant: 'info',
        content: '**発展：数学IIIへの接続。** 媒介変数表示を微分でき、$dx/dt\\ne0$ の点では $dy/dx=(dy/dt)/(dx/dt)$ で接線の傾きを調べられます。$dx/dt=0$ の点ではこの商は使えず、別の検討が必要です。ここでの主題は、微分計算ではなく表示・消去・範囲の理解です。',
      },
      {
        type: 'practice', title: '練習問題：表示と軌跡を往復する',
        problems: [
          {
            body: 'A$(-2,1)$、B$(4,4)$ を結ぶ線分を媒介変数表示せよ。',
            hint: 'A に $t$ 倍したベクトル $B-A$ を加える。線分なので t の範囲も書く。',
            answer: '$B-A=(6,3)$ より $x=-2+6t,\\ y=1+3t$、$0\\le t\\le1$。$t=0,1$ でそれぞれ A、B となり、中間の t は線分内の点を表します。',
          },
          {
            body: '$x=4\\cos t,\\ y=4\\sin t$、$\\pi/2\\le t\\le\\pi$ の軌跡と向きを求めよ。',
            hint: '円の方程式を出したあと、この角の範囲で cos と sin の符号を調べる。',
            answer: '$x^2+y^2=16$ のうち $x\\le0,\\ y\\ge0$ の四分円弧です。$(0,4)$ から $(-4,0)$ へ反時計回りに進み、両端を含みます。角の範囲が第2象限全体なので、この円弧をすべて描きます。',
          },
          {
            body: '$x=t^2,\\ y=t+1$、$-1\\le t\\le2$ の媒介変数を消去し、正確な軌跡を求めよ。',
            hint: 'y から t を表す。x の範囲だけでは上下どちらの枝か区別できない。',
            answer: '$t=y-1$ なので $x=(y-1)^2$、$0\\le y\\le3$。$(1,0)$ から頂点 $(0,1)$ を通って $(4,3)$ までの放物線の一部です。逆にこの範囲の y なら $t=y-1$ が指定範囲に入り、各点を表せます。',
          },
        ],
      },
      {
        type: 'quiz', title: '確認クイズ',
        questions: [
          {
            question: '$x=3\\cos t,\\ y=2\\sin t$、$0\\le t<2\\pi$ の軌跡は？',
            choices: ['$x^2/9+y^2/4=1$ の楕円全体', '$x^2/3+y^2/2=1$ の楕円全体', '$x^2+y^2=5$ の円全体'],
            answerIndex: 0,
            explanation: 'x/3=cos t、y/2=sin t を二乗して足します。分母は倍率そのものではなく二乗で、t が一周分なので楕円全体です。',
          },
          {
            question: '$x=\\cos t,\\ y=\\sin t$、$0\\le t\\le\\pi$ から消去した $x^2+y^2=1$ に加える条件は？',
            choices: ['$x\\ge0$', '$y\\ge0$', '条件は不要'],
            answerIndex: 1,
            explanation: 'この角の範囲で sin t は非負です。上半円を右端から左端へ描きます。cos t は正にも負にもなるため x≧0 ではありません。',
          },
        ],
      },
    ],
  },
  {
    id: 'mc-polar-curves',
    title: '極座標と極方程式 — 距離と角で図形を表す',
    summary: '極座標と直交座標を変換し、直線・円の極方程式を導く。角の範囲や負の動径の約束も確認する。',
    objectives: [
      '極座標と直交座標を、象限と角の範囲に注意して相互に変換できる。',
      '直線や円の方程式を極方程式に変換し、図形を読み取れる。',
      '原点・負の動径・角の範囲に関する約束を説明できる。',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '1．原点からの距離と向きで位置を決める' },
      {
        type: 'text',
        content: '平面上に**極** O と、右向きの半直線である**始線**を決めます。O から点 P までの距離を $r$、始線から OP まで反時計回りに測る角を $\\theta$ とすると、$(r,\\theta)$ が P の極座標です。角は弧度法で表し、まず $r\\ge0$、$0\\le\\theta<2\\pi$ を基本とします。',
      },
      {
        type: 'formula', display: true,
        tex: 'x=r\\cos\\theta,\\qquad y=r\\sin\\theta,\\qquad r^2=x^2+y^2',
      },
      {
        type: 'text',
        content: '極から見た長さ $r$ を横と縦に分解した式です。直交座標から戻すときは $r=\\sqrt{x^2+y^2}$。$r>0$ なら $\\cos\\theta=x/r$ と $\\sin\\theta=y/r$ を同時に満たす角を選びます。$\\tan\\theta=y/x$ だけでは、反対向きの角との区別ができません。',
      },
      {
        type: 'note', variant: 'info',
        content: '角に $2\\pi$ の整数倍を加えても同じ点です。原点は $r=0$ で、角がどの値でも同じ位置になります。したがって「原点の角」は一意には決まりません。極座標の組と平面上の点は、常に一対一とは限りません。',
      },
      {
        type: 'example',
        title: '例題1：座標変換と象限の確認',
        body: '極座標 $(2,2\\pi/3)$ を直交座標に直せ。また、直交座標 $(1,-\\sqrt{3})$ を $r\\ge0$、$0\\le\\theta<2\\pi$ の極座標に直せ。',
        answer: '前半は $x=2(-1/2)=-1$、$y=2(\\sqrt{3}/2)=\\sqrt{3}$ より $(-1,\\sqrt{3})$。後半は $r=\\sqrt{1+3}=2$。cos は $1/2$、sin は $-\\sqrt{3}/2$ なので第4象限の $\\theta=5\\pi/3$ を選び、$(2,5\\pi/3)$ です。$\\pi/3$ では y の符号が逆になります。',
      },
      { type: 'heading', level: 3, content: '2．直線の極方程式' },
      {
        type: 'formula', display: true,
        tex: 'ax+by=c\\quad\\Longleftrightarrow\\quad r(a\\cos\\theta+b\\sin\\theta)=c\\quad ((a,b)\\ne(0,0))',
      },
      {
        type: 'text',
        content: '直交座標の式に $x=r\\cos\\theta$、$y=r\\sin\\theta$ を代入するだけです。例えば縦の直線 $x=2$ は $r\\cos\\theta=2$。$r\\ge0$ なら cos は正でなければならず、$-\\pi/2<\\theta<\\pi/2$ とすれば直線全体を表せます。この段落では角の代表範囲を基本の範囲から変えています。',
      },
      {
        type: 'text',
        content: '$r=2/\\cos\\theta$ と割る形では $\\cos\\theta=0$ を除きます。基本の $0\\le\\theta<2\\pi$ なら許される角は $[0,\\pi/2)$ と $(3\\pi/2,2\\pi)$。また $r\\ge0$ で $\\theta=\\alpha$ だけを固定すると、原点を始点とする半直線です。原点を通る直線全体には反対方向の角も必要です。',
      },
      { type: 'heading', level: 3, content: '3．円の極方程式を導く' },
      {
        type: 'derivation',
        title: '中心 (a,0)、半径 a の円から r=2a cos θ へ（a>0）',
        steps: [
          { label: '直交座標の方程式を展開', tex: '(x-a)^2+y^2=a^2\\quad\\Longleftrightarrow\\quad x^2+y^2=2ax', note: '原点を通り、右端が (2a,0) の円です。' },
          { label: '極座標を代入', tex: 'r^2=2ar\\cos\\theta\\quad\\Longleftrightarrow\\quad r(r-2a\\cos\\theta)=0', note: 'r=0 は原点に対応するので、無条件に r で割らないようにします。' },
          { label: '原点以外を表し、原点も確認', tex: 'r=2a\\cos\\theta,\\qquad -\\frac{\\pi}{2}\\le\\theta\\le\\frac{\\pi}{2}', note: 'この範囲では r≧0。両端で r=0 となるため、除きかけた原点も含み、図形として円全体を表せます。ただし原点の極座標表現すべてを残すという意味ではありません。' },
        ],
      },
      {
        type: 'formula', display: true,
        tex: '\\begin{aligned}x^2+y^2=R^2&:\\ r=R\\quad(R>0),\\\\ x^2+(y-a)^2=a^2&:\\ r=2a\\sin\\theta\\quad(a>0).\\end{aligned}',
      },
      {
        type: 'text',
        content: '原点中心の円 $r=R$ は $0\\le\\theta<2\\pi$ で一周します。中心 $(0,a)$、半径 $a$ の円 $r=2a\\sin\\theta$ は $0\\le\\theta\\le\\pi$ で全体を描きます。一定の r の円と、角によって r が変わる円を区別しましょう。',
      },
      {
        type: 'example',
        title: '例題2：極方程式から円と範囲を読む',
        body: '$r=4\\cos\\theta$、$-\\pi/2\\le\\theta\\le\\pi/2$ が表す図形を求めよ。$r\\ge0$ とする。',
        answer: '両辺に r を掛けて $r^2=4r\\cos\\theta$、したがって $x^2+y^2=4x$。平方完成すると $(x-2)^2+y^2=4$ で、中心 $(2,0)$、半径 2 の円です。$\\theta=-\\pi/2,-\\pi/4,0,\\pi/4,\\pi/2$ の順に、原点 → $(2,-2)$ → $(4,0)$ → $(2,2)$ → 原点と進みます。円上の原点以外の点は $x>0$ でこの角の範囲に入り、元の式も満たすので、余分な点はなく全円です。',
      },
      { type: 'heading', level: 3, content: '4．負の r を使うときの約束' },
      {
        type: 'text',
        content: '拡張として負の $r$ を認める場合は、角 $\\theta$ の方向と**反対向き**に距離 $|r|$ だけ進んだ点と約束します。変換式 $x=r\\cos\\theta,\\ y=r\\sin\\theta$ はそのまま使えます。このとき r は距離そのものではなく、符号付きの動径です。問題ごとに負の r を認めるか確認しましょう。',
      },
      {
        type: 'formula', display: true,
        tex: '(r,\\theta)\\sim(-r,\\theta+\\pi)\\qquad\\text{（同じ点を表す）}',
      },
      {
        type: 'note', variant: 'warn',
        content: '**範囲と約束を混ぜない。** 負の r を認めれば $(-2,0)$ と $(2,\\pi)$ は同じ点です。$r=4\\cos\\theta$ を $0\\le\\theta<2\\pi$ で動かすと円を二度たどります。一方、$r\\ge0$ の約束では cos が負の角は許されません。極方程式を描く前に r と角の条件を書きましょう。',
      },
      {
        type: 'practice', title: '練習問題（断りがなければ r≧0）',
        problems: [
          {
            body: '直交座標 $(-\\sqrt{3},-1)$ を $0\\le\\theta<2\\pi$ の極座標に直せ。',
            hint: 'r を求め、cos と sin が両方負になる象限で角を選ぶ。',
            answer: '$r=2$、$\\cos\\theta=-\\sqrt{3}/2$、$\\sin\\theta=-1/2$。第3象限なので $\\theta=7\\pi/6$、極座標は $(2,7\\pi/6)$ です。',
          },
          {
            body: '直線 $y=3$ の極方程式を求め、全体を表す角の範囲を $0\\le\\theta<2\\pi$ 内で答えよ。',
            hint: 'y に r sin θ を代入する。r≧0 のもとで sin θ の符号は？',
            answer: '$r\\sin\\theta=3$、すなわち $r=3/\\sin\\theta$。$0<\\theta<\\pi$ が必要です。このとき $x=3\\cos\\theta/\\sin\\theta$ は正の大きな値から負の大きな値まで連続して動き、直線全体を表します。端の角は分母が 0 なので含みません。',
          },
          {
            body: '$r=6\\sin\\theta$、$0\\le\\theta\\le\\pi$ の図形を求めよ。また、負の r を認める約束で極座標 $(-2,\\pi/2)$ を直交座標に直せ。',
            hint: '前半は r を掛けて平方完成する。後半は変換式に負の r をそのまま入れる。',
            answer: '$x^2+y^2=6y$ より $x^2+(y-3)^2=9$。中心 $(0,3)$、半径 3 の円全体で、角の両端は原点に対応します。後半は $x=-2\\cos(\\pi/2)=0$、$y=-2\\sin(\\pi/2)=-2$ で $(0,-2)$。正の動径なら極座標 $(2,3\\pi/2)$ と同じです。',
          },
        ],
      },
      {
        type: 'quiz', title: '確認クイズ',
        questions: [
          {
            question: '$r\\ge0$ で $\\theta=\\pi/4$ を固定したときの図形は？',
            choices: ['直線 y=x 全体', 'y=x のうち x≧0 の半直線', '原点中心の半径1の円'],
            answerIndex: 1,
            explanation: 'x=y=r/√2 で両座標が非負となり、原点から第1象限へ延びる半直線です。直線全体には反対の角 5π/4 も必要です。',
          },
          {
            question: '$r=2\\cos\\theta$、$-\\pi/2\\le\\theta\\le\\pi/2$ が表す円の中心と半径は？',
            choices: ['中心 (0,0)、半径2', '中心 (2,0)、半径2', '中心 (1,0)、半径1'],
            answerIndex: 2,
            explanation: 'r を掛けると x²+y²=2x、平方完成で (x−1)²+y²=1。原点と (2,0) を直径の両端にもつ円です。θ の両端で r=0 となるので原点も含みます。',
          },
        ],
      },
    ],
  },
];
