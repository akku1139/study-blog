import type { Subject } from './types';

// ============================================================
// 高校数学I・II（学習指導要領 第2章 第4節「数学」に対応）
// ============================================================

export const seniorMath: Subject = {
  id: 'senior-math',
  stage: 'senior',
  name: '高校数学（数学I・II）',
  description: '数学I：二次関数・図形と計量・データの分析。数学II：三角関数・微分積分。',
  icon: '∫',
  color: '#7c3aed',
  units: [
    // ---------- 数学I: 二次関数 ----------
    {
      id: 's1-quadratic',
      name: '数学I：二次関数',
      gakushuShidoYoryo: '内容「二次関数」(1) 二次関数とそのグラフ、(2) 二次方程式・二次不等式',
      lessons: [
        {
          id: 'quadratic-graph-senior',
          title: '二次関数のグラフと最大・最小',
          summary: '平方完成により頂点を求め、変域における最大・最小を考える。',
          objectives: [
            '平方完成によって y = a(x−p)² + q の形に変形できる',
            '変域のある二次関数の最大・最小を求めることができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '平方完成' },
            {
              type: 'text',
              content: '$y = ax^2 + bx + c$ を**頂点の形**に変形する手続きが平方完成です。中学校ではグラフの平行移動で見ましたが、高校では式変形で機械的に求めます。',
            },
            { type: 'formula', tex: 'y = ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\frac{4ac - b^2}{4a}', display: true },
            {
              type: 'example',
              title: '例題（平方完成）',
              body: '$y = x^2 - 4x + 1$ を平方完成せよ。',
              answer: '$y = (x - 2)^2 - 3$。頂点 $(2, -3)$、軸 $x = 2$',
            },
            { type: 'heading', level: 3, content: '変域と最大・最小' },
            {
              type: 'text',
              content: '定義域（x の変域）が制限されると、放物線の一部だけを考えます。**頂点が変域に含まれるか**が最大最小の分かれ目です。',
            },
            {
              type: 'example',
              title: '例題',
              body: '$y = x^2 - 2x - 1$ ($-1 \\le x \\le 3$) の最大値・最小値を求めよ。',
              answer: '平方完成すると $y = (x-1)^2 - 2$。頂点 $x=1$ は変域内なので**最小値 −2 ($x=1$)**。両端の値は $x=-1$: $2$、$x=3$: $2$ より**最大値 2**',
            },
            {
              type: 'widget',
              widget: { id: 'quadratic-explorer', caption: 'プレイグラウンド: 頂点と軸の位置関係を動かして確認' },
            },
          ],
        },
        {
          id: 'quadratic-inequality',
          title: '二次不等式',
          summary: 'グラフと x 軸の位置関係から二次不等式を解く。',
          blocks: [
            {
              type: 'text',
              content: '$ax^2 + bx + c > 0$ を解くとは、「グラフが x 軸より上になる x の範囲」を求めることです。まず二次方程式の解を求めます。',
            },
            { type: 'heading', level: 3, content: '判別式' },
            { type: 'formula', tex: 'D = b^2 - 4ac', display: true },
            {
              type: 'list',
              items: [
                '$D > 0$: 異なる2つの実数解（グラフは x 軸と2点で交わる）',
                '$D = 0$: 重解（1点で接する）',
                '$D < 0$: 実数解なし（交わらない）',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$x^2 - 5x + 6 > 0$ を解け。',
              answer: '$(x-2)(x-3) > 0$ より解は **$x < 2$, $3 < x$**（境界を含めないことに注意）',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '$>$ なら境界を含まず、$\\ge$ なら含みます。答えを書き終えたら必ず境界の扱いを確認しましょう。',
            },
          ],
        },
      ],
    },
    // ---------- 数学I: 図形と計量 ----------
    {
      id: 's1-trig',
      name: '数学I：図形と計量',
      gakushuShidoYoryo: '内容「図形と計量」(1) 正弦・余弦、(2) 三角比の相互関係、正弦定理・余弦定理',
      lessons: [
        {
          id: 'trig-ratio',
          title: '三角比と正弦定理・余弦定理',
          summary: 'sin・cos・tan を鈍角まで拡張し、三角形の辺と角の計算に使う。',
          objectives: [
            '三角比の相互関係を理解し利用できる',
            '正弦定理・余弦定理を使い分けて三角形の計量ができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '単位円による三角比の拡張' },
            {
              type: 'text',
              content: '直角三角形だけでは扱えなかった 90° をこえる角も、**単位円上の点の座標**として自然に定義できます。単位円上の点 P の x座標が cos θ、y座標が sin θ です。',
            },
            { type: 'diagram', diagram: 'unit-circle-static', caption: '単位円と三角比（θ = 60° の例）と各象限での符号' },
            {
              type: 'widget',
              widget: { id: 'trig-circle', caption: 'プレイグラウンド: θ を動かして sin・cos の符号の変化を確かめよう' },
            },
            { type: 'formula', tex: '\\sin^2\\theta + \\cos^2\\theta = 1', display: true },
            { type: 'formula', tex: '\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}', display: true },
            { type: 'heading', level: 3, content: '正弦定理' },
            { type: 'formula', tex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R', display: true },
            {
              type: 'text',
              content: '**2組の「角とその対辺」**がわかっているときに有効です（R は外接円の半径）。三角形の「角」と「対辺」の対応は下の図を参考にしてください。',
            },
            { type: 'diagram', diagram: 'sine-rule-triangle', caption: '三角形の角と対辺の対応、2つの定理の使い分け' },
            { type: 'heading', level: 3, content: '余弦定理' },
            { type: 'formula', tex: 'a^2 = b^2 + c^2 - 2bc\\cos A', display: true },
            {
              type: 'text',
              content: '**2辺とそのはさむ角**から第3辺を求めるとき、あるいは**3辺から角度**を求めるときに有効。A = 90° とすると三平方の定理に一致します。',
            },
            {
              type: 'example',
              title: '例題',
              body: 'b = 5, c = 8, A = 60° のとき a を求めよ。',
              answer: '$a^2 = 25 + 64 - 2 \\cdot 5 \\cdot 8 \\cdot \\tfrac{1}{2} = 89 - 40 = 49$。よって $a = 7$',
            },
            { type: 'heading', level: 3, content: '発展：2つの定理の使い分けと面積公式' },
            {
              type: 'list',
              items: [
                'わかっている情報が「**角 2 個以上**」→ 正弦定理（対辺の組をつくれるか確認）',
                'わかっている情報が「**2辺とはさむ角**」「**3辺**」→ 余弦定理',
                '面積 $S = \\dfrac{1}{2}bc\\sin A$（はさむ角版の $\\dfrac{1}{2}\\times$辺$\\times$辺$\\times$sin）',
                '外接円の半径が必要なときは正弦定理の $= 2R$ を逆に使う: $R = \\dfrac{a}{2\\sin A}$',
              ],
            },
            {
              type: 'example',
              title: '発展例題（面積＋余弦定理）',
              body: 'AB = 6, AC = 5, A = 60° の三角形 ABC について、辺 BC の長さと面積を求めよ。',
              answer:
                '$BC^2 = 6^2 + 5^2 - 2 \\cdot 6 \\cdot 5 \\cos 60° = 61 - 30 = 31$ より $BC = \\sqrt{31}$。面積 $S = \\frac{1}{2} \\cdot 6 \\cdot 5 \\sin 60° = \\frac{15\\sqrt{3}}{2}$',
            },
            {
              type: 'note',
              variant: 'info',
              content: '三角比を「回転角 θ で定義する関数（三角関数）」に拡張すると数学IIの内容に、さらに弧度法（ラジアン）を導入すると微積分で本領を発揮します。',
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 特別な角の三角比が出題されます。単位円を思い出して答えよう',
                props: { topic: 'special-angles' },
              },
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '$\\sin \\theta = \\dfrac{3}{5}$（$90° < \\theta < 180°$）のとき $\\cos \\theta$, $\\tan \\theta$ を求めよ。',
                  hint: '$\\sin^2\\theta + \\cos^2\\theta = 1$。第2象限では cos は負。',
                  answer: '$\\cos\\theta = -\\frac{4}{5}$、$\\tan\\theta = -\\frac{3}{4}$',
                },
                {
                  body: '三角形 ABC で A = 30°, B = 105°, b = 6 のとき a を求めよ。（$\\sin 105° = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$ を使ってよい）',
                  hint: '正弦定理 $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$。角と対辺の対応（A↔a, B↔b）に注意。',
                  answer: '$a = 6 \\cdot \\dfrac{1/2}{(\\sqrt{6}+\\sqrt{2})/4} = \\dfrac{12}{\\sqrt{6}+\\sqrt{2}} = 3(\\sqrt{6}-\\sqrt{2})$',
                },
                {
                  body: '3 辺が 4, 5, 6 の三角形の最大の角の大きさを cos を使って求めよ。',
                  hint: '最大の角は最長辺 6 の対角。余弦定理を cos について解く。',
                  answer: '$\\cos C = \\frac{4^2 + 5^2 - 6^2}{2 \\cdot 4 \\cdot 5} = \\frac{5}{40} = \\frac{1}{8}$',
                },
                {
                  body: 'AB = 3, BC = 5, CA = 7 の三角形の面積を求めよ。（発展）',
                  hint: 'まず余弦定理で cos B（辺 AB・BC にはさまれる角）を求める。',
                  answer: '$\\cos B = \\frac{3^2 + 5^2 - 7^2}{2 \\cdot 3 \\cdot 5} = -\\frac{1}{2}$ より $B = 120°$。$S = \\frac{1}{2} \\cdot AB \\cdot BC \\sin B = \\frac{1}{2} \\cdot 3 \\cdot 5 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{15\\sqrt{3}}{4}$',
                },
              ],
            },
          ],
        },
      ],
    },
    // ---------- 数学II: 微分 ----------
    {
      id: 's2-calculus',
      name: '数学II：微分法と積分法',
      gakushuShidoYoryo: '内容「微分法・積分法」(1) 微分係数と導関数、(2) 接線、極大・極小',
      lessons: [
        {
          id: 'derivative',
          title: '微分係数と導関数',
          summary: '平均変化率の極限として微分係数を定義し、導関数を求める。',
          objectives: [
            '微分係数の意味（接線の傾き・瞬間の変化率）を理解する',
            '多項式関数の導関数を求め、増減表をかける',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '微分係数の定義' },
            { type: 'formula', tex: "f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}", display: true },
            {
              type: 'text',
              content: 'これは x = a における**接線の傾き**であり、**瞬間の変化の割合**でもあります。曲線上の2点 P(a), Q(a+h) を結ぶ割線の傾き（平均変化率）を考え、h を 0 に近づけた極限が微分係数です。',
            },
            { type: 'diagram', diagram: 'derivative-concept', caption: '平均変化率から微分係数へ: 割線が接線に一致する様子' },
            {
              type: 'widget',
              widget: { id: 'derivative-tangent', caption: 'プレイグラウンド: f(x) = x³ − 3x の接線。x₀ を動かして f′(x₀) = 0 となる点（極値）を見つけよう' },
            },
            { type: 'heading', level: 3, content: '導関数の計算規則' },
            { type: 'formula', tex: "(x^n)' = n x^{n-1}, \\qquad (fg)' = f'g + fg'", display: true },
            {
              type: 'example',
              title: '例題',
              body: "$f(x) = x^3 - 3x^2 + 2$ の増減表をかいて極値を求めよ。",
              answer: "$f'(x) = 3x(x - 2)$。増減表より **x = 0 で極大値 2、x = 2 で極小値 −2**",
            },
            { type: 'heading', level: 3, content: '接線の方程式' },
            { type: 'formula', tex: 'y = f\'(a)(x - a) + f(a)', display: true },
            {
              type: 'note',
              variant: 'tip',
              content: '増減表は必ず「f′ の符号 → f の増減」の順に書く。符号表を省略すると符号ミスが起きやすくなります。',
            },
            { type: 'heading', level: 3, content: '発展：接線が通る点と極値・最大最小' },
            {
              type: 'text',
              content:
                '「**曲線上でない点** P を通る接線」では、接点を $Q(t, f(t))$ とおくのが定石です。P を通る条件 $f\'(t) = \\dfrac{f(t) - y_P}{t - x_P}$ から t を解きます。',
            },
            {
              type: 'example',
              title: '発展例題（曲線外の点からの接線）',
              body: '放物線 $y = x^2$ に、点 $(0, -4)$ から引いた接線の方程式を求めよ。',
              answer:
                '接点を $(t, t^2)$ とおくと傾きは $2t$ なので、$2t = \\frac{t^2 - (-4)}{t - 0}$。両辺に $t$ をかけて $2t^2 = t^2 + 4$、$t = \\pm 2$。傾きは $\\pm 4$ なので接線は **$y = 4x - 4$ と $y = -4x - 4$**',
            },
            {
              type: 'text',
              content:
                'また、閉区間での**最大・最小**は「極値 ＋ 区間の端点」の値をすべて比べれば求まります。これは物理（位置と速度の関係）や経済（限界費用）でも同じ形で現れる、微分の最もよく使う応用です。',
            },
            {
              type: 'example',
              title: '発展例題（区間の最大最小）',
              body: '$f(x) = x^3 - 3x$, $-2 \\le x \\le 3$ の最大値・最小値を求めよ。',
              answer:
                "$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$ より極大 $f(-1) = 2$、極小 $f(1) = -2$。端点値は $f(-2) = -2$, $f(3) = 18$。比較して**最大値 18、最小値 −2**",
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 多項式の導関数計算が出題されます。冪の微分規則を体で覚えよう',
                props: { topic: 'polynomial-differentiate' },
              },
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: "$f(x) = x^3 - 12x$ の増減表をかき、極値を求めよ。",
                  hint: "$f'(x) = 3x^2 - 12 = 3(x+2)(x-2)$。",
                  answer: '**x = −2 で極大値 16、x = 2 で極小値 −16**',
                },
                {
                  body: '放物線 $y = \\frac{1}{3}x^3$ の $x = 1$ における接線の方程式を求めよ。',
                  hint: "$y' = x^2$、接点 $(1, \\frac{1}{3})$。",
                  answer: '傾きは $f\'(1) = 1$。$y = (x - 1) + \\frac{1}{3}$、すなわち **$y = x - \\frac{2}{3}$**',
                },
                {
                  body: '$f(x) = x^3 + ax^2 + bx$ が $x = 1$ で極小、$x = -1$ で極大をもつとき、定数 a, b を求めよ。（発展）',
                  hint: "極値条件は $f'(x) = 3x^2 + 2ax + b$ の解として現れる。",
                  answer: "解の組は $(1, -1)$ なので $f'(x) = 3(x-1)(x+1) = 3x^2 - 3$。係数比較で **a = 0, b = −3**",
                },
                {
                  body: '$f(x) = x^3 - 6x^2 + 9x$, $0 \\le x \\le 4$ の最大値と最小値を求めよ。',
                  hint: "$f'(x) = 3(x-1)(x-3)$。極値に加えて端点 $f(0), f(4)$ を比べる。",
                  answer: '極大 $f(1) = 4$、極小 $f(3) = 0$、端点 $f(0) = 0$, $f(4) = 4$。よって**最大値 4、最小値 0**',
                },
              ],
            },
          ],
        },
        {
          id: 'integral',
          title: '不定積分と定積分',
          summary: '微分の逆演算としての不定積分と、面積を与える定積分を学ぶ。',
          blocks: [
            { type: 'heading', level: 3, content: '不定積分' },
            { type: 'formula', tex: "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)", display: true },
            {
              type: 'text',
              content: 'C は**積分定数**。微分したら元に戻るという条件しかないので、C は任意の定数になります。',
            },
            { type: 'heading', level: 3, content: '定積分と面積' },
            { type: 'formula', tex: '\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)', display: true },
            {
              type: 'text',
              content: 'x 軸の上側にある部分では面積を、下側では面積にマイナスをつけた値を足し合わせます。次の図のように、細い長方形の面積の和を無限に細かくする（区分求積法）イメージが元になっています。',
            },
            { type: 'diagram', diagram: 'integral-area', caption: '区分求積法から定積分へ: 分割を細かくすると長方形の和が曲線下面積に一致' },
            {
              type: 'example',
              title: '例題',
              body: '放物線 $y = x^2$ と直線 $y = x$ で囲まれた図形の面積を求めよ。',
              answer: '交点は $(0,0), (1,1)$。面積 $= \\displaystyle\\int_0^1 (x - x^2)\\,dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$',
            },
            {
              type: 'note',
              variant: 'info',
              content: '微分と積分は互いに逆の操作——この事実を**微積分学の基本定理**といい、ニュートンとライプニッツが独立に発見しました。',
            },
            { type: 'heading', level: 3, content: '練習（定積分ドリル）' },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 二次式の定積分がランダムに出題されます。積分してから上端・下端を代入',
                props: { topic: 'definite-integral' },
              },
            },
          ],
        },
      ],
    },
  ],
};
