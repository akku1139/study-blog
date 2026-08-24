import type { Subject } from './types';

// ============================================================
// 高校数学III・C（学習指導要領 第2章 第4節「数学」: 数学III／数学C）
// ============================================================

export const seniorMath3C: Subject = {
  id: 'senior-math-3c',
  stage: 'senior',
  name: '高校数学（数学III・C）',
  description:
    '数学III：関数・極限、微分法・積分法の発展。数学C：ベクトル、数列、統計的な推測。大学入試・理工系への架け橋。',
  icon: '∑',
  color: '#4338ca',
  units: [
    // ---------- 数学C: ベクトル ----------
    {
      id: 's3c-vector',
      name: '数学C：ベクトル',
      gakushuShidoYoryo: '内容「ベクトル」(1) 平面ベクトルと空間ベクトル、(2) ベクトルの応用（内積、図形への応用）',
      lessons: [
        {
          id: 'vector-basics',
          title: 'ベクトルと内積',
          summary: 'ベクトルの和・差・実数倍と、大きさ・なす角を結びつける内積。',
          objectives: [
            'ベクトルの演算を成分表示で行うことができる',
            '内積を使ってなす角・垂直条件を求めることができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'ベクトルの基本' },
            {
              type: 'text',
              content: '**大きさと向き**をもつ量がベクトルです。成分表示では $\\vec{a} = (a_1, a_2)$ のように書き、加減算は成分ごとに行います。',
            },
            { type: 'formula', tex: '\\vec{a} + \\vec{b} = (a_1 + b_1,\\ a_2 + b_2), \\qquad k\\vec{a} = (ka_1,\\ ka_2)', display: true },
            {
              type: 'widget',
              widget: { id: 'vector-explorer', caption: 'プレイグラウンド: ベクトルの和（平行四辺形則）と内積を動かして確認しよう' },
            },
            { type: 'heading', level: 3, content: '内積' },
            { type: 'formula', tex: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}|\\,|\\vec{b}| \\cos\\theta = a_1b_1 + a_2b_2', display: true },
            {
              type: 'list',
              items: [
                '$\\vec{a} \\perp \\vec{b}$（垂直）$\\iff \\vec{a} \\cdot \\vec{b} = 0$',
                '$|\\vec{a}|^2 = \\vec{a} \\cdot \\vec{a}$（大きさは自分自身との内積から出る）',
                '内積の計算法則：分配法則 $(\\vec{a} + \\vec{b}) \\cdot \\vec{c} = \\vec{a}\\cdot\\vec{c} + \\vec{b}\\cdot\\vec{c}$ が成り立つ',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$\\vec{a} = (2, 1)$, $\\vec{b} = (-1, x)$ が垂直になるとき、$x$ の値を求めよ。',
              answer: '$\\vec{a} \\cdot \\vec{b} = -2 + x = 0$ より **$x = 2$**',
            },
          ],
        },
        {
          id: 'vector-applications',
          title: 'ベクトルの図形への応用',
          summary: '内分点・重心のベクトル表示、直線の方向・法線ベクトル、点と直線の距離の導出。',
          objectives: [
            '内分点・外分点・重心をベクトル式で表すことができる',
            '直線の方向ベクトル・法線ベクトルを扱い、直線の方程式をベクトルで書くことができる',
            '点と直線の距離の公式を導出し、計算に使うことができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '内分点・外分点・重心' },
            {
              type: 'text',
              content: '線分 AB を $m : n$ に内分する点 P は、「AP と PB が同方向で長さの比が $m : n$」という条件をベクトル方程式に書き直すと求まります。位置ベクトルで表しておけば、座標が変わっても同じ式が使い回せるのが大きな利点です。中点はその特別な場合で、三角形の重心は中点の式を重ねて導けるので、セットで覚えてしまいましょう。',
            },
            {
              type: 'formula',
              tex: '\\vec{p} = \\dfrac{n\\vec{a} + m\\vec{b}}{m + n} \\quad (m : n \\text{ 内分}), \\qquad \\vec{g} = \\dfrac{\\vec{a} + \\vec{b} + \\vec{c}}{3} \\quad (\\text{重心})',
              display: true,
            },
            {
              type: 'list',
              items: [
                '中点 M: $\\vec{m} = \\dfrac{\\vec{a} + \\vec{b}}{2}$',
                '外分点（$m : n$ 外分、$m \\ne n$）: $\\vec{p} = \\dfrac{-n\\vec{a} + m\\vec{b}}{m - n}$',
                '重心は各中線を $2 : 1$ に内分する点。$\\triangle\\mathrm{ABC}$ の重心 G は $\\overrightarrow{\\mathrm{GA}} + \\overrightarrow{\\mathrm{GB}} + \\overrightarrow{\\mathrm{GC}} = \\vec{0}$ を満たす',
              ],
            },
            { type: 'heading', level: 3, content: '直線の方向ベクトルと法線ベクトル' },
            {
              type: 'text',
              content: '直線に平行なベクトルを**方向ベクトル**、直線に垂直なベクトルを**法線ベクトル**と呼びます。方程式 $ax + by + c = 0$ の係数 $(a, b)$ はそのまま法線ベクトルになり、方向ベクトルは成分を入れ替えた $(b, -a)$ で作れます。この対応により、「通過点と方向」「通過点と法線」のどちらの情報からでも直線の方程式が立ちます。',
            },
            {
              type: 'table',
              headers: ['与えられたもの', 'ベクトルの関係式', '方程式の形'],
              rows: [
                ['通過点 $\\mathrm{A}(x_1, y_1)$ と方向ベクトル $\\vec{d} = (l, m)$', '$\\overrightarrow{\\mathrm{AX}} \\parallel \\vec{d}$', '$m(x - x_1) - l(y - y_1) = 0$'],
                ['通過点 $\\mathrm{A}(x_1, y_1)$ と法線ベクトル $\\vec{n} = (a, b)$', '$\\overrightarrow{\\mathrm{AX}} \\perp \\vec{n}$', '$a(x - x_1) + b(y - y_1) = 0$'],
                ['一般形 $ax + by + c = 0$', '法線ベクトルは $(a, b)$', '方向ベクトルは $(b, -a)$'],
              ],
            },
            { type: 'heading', level: 3, content: '点と直線の距離——公式の導出' },
            {
              type: 'derivation',
              title: '点と直線の距離の公式',
              steps: [
                {
                  label: 'Step 1: 図の設定',
                  tex: '\\text{直線 } ax + by + c = 0, \\quad \\text{点 } \\mathrm{P}(x_0, y_0), \\quad d = |\\overrightarrow{\\mathrm{HP}}|',
                  note: 'H は P から直線におろした垂線の足。直線上には都合のよい任意の点 Q をとり、法線ベクトルを $\\vec{n} = (a, b)$ とします。',
                },
                {
                  label: 'Step 2: 法線方向への射影',
                  tex: 'd = |\\overrightarrow{\\mathrm{QP}}| \\cos\\theta = \\dfrac{|\\vec{n} \\cdot \\overrightarrow{\\mathrm{QP}}|}{|\\vec{n}|}',
                  note: '内積の定義 $\\vec{n} \\cdot \\overrightarrow{\\mathrm{QP}} = |\\vec{n}|\\,|\\overrightarrow{\\mathrm{QP}}|\\cos\\theta$ を変形しました。垂線の長さは、QP を法線の向きに射影した長さそのものです。',
                },
                {
                  label: 'Step 3: 内積を成分で展開',
                  tex: '\\vec{n} \\cdot \\overrightarrow{\\mathrm{QP}} = (a, b) \\cdot (x_0 - x_1,\\ y_0 - y_1) = ax_0 + by_0 - (ax_1 + by_1)',
                },
                {
                  label: 'Step 4: Q が直線上にある事実を使う',
                  tex: 'ax_1 + by_1 + c = 0 \\quad \\Longrightarrow \\quad ax_0 + by_0 - (ax_1 + by_1) = ax_0 + by_0 + c',
                  note: 'ここが最大のポイント。Q は直線上のどんな点でもよいので、Q の座標が消えて P だけの式になります。',
                },
                {
                  label: '結論',
                  tex: 'd = \\dfrac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}',
                },
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '点 $(3, 4)$ と直線 $3x + 4y - 5 = 0$ の距離を求めよ。',
              answer: '$d = \\dfrac{|3 \\cdot 3 + 4 \\cdot 4 - 5|}{\\sqrt{3^2 + 4^2}} = \\dfrac{|9 + 16 - 5|}{5} = $ **4**',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: 'A(1, 2), B(6, 7) に対し、線分 AB を 2 : 3 に内分する点 P の座標を求めよ。',
                  hint: '$\\vec{p} = \\dfrac{3\\vec{a} + 2\\vec{b}}{5}$ を成分で計算する。',
                  answer: '$\\vec{p} = \\dfrac{3(1, 2) + 2(6, 7)}{5} = \\dfrac{(15, 20)}{5} = $ **(4, 5)**',
                },
                {
                  body: '原点 O と直線 $2x - y + 6 = 0$ の距離を求めよ。',
                  hint: '距離の公式に $(x_0, y_0) = (0, 0)$ を代入する。',
                  answer: '$d = \\dfrac{|6|}{\\sqrt{2^2 + (-1)^2}} = \\dfrac{6}{\\sqrt{5}} = $ **$\\dfrac{6\\sqrt{5}}{5}$**',
                },
                {
                  body: 'A(-1, 3), B(2, -2), C(4, 5) を頂点とする三角形の重心 G の座標を求めよ。',
                  hint: '$\\vec{g} = \\dfrac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$。',
                  answer: '$G = \\left( \\dfrac{-1 + 2 + 4}{3},\\ \\dfrac{3 - 2 + 5}{3} \\right) = $ **$\\left( \\dfrac{5}{3},\\ 2 \\right)$**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '線分 AB を $m : n$ に内分する点 P の位置ベクトルは？（A, B の位置ベクトルを $\\vec{a}, \\vec{b}$ とする）',
                  choices: ['$\\dfrac{n\\vec{a} + m\\vec{b}}{m + n}$', '$\\dfrac{m\\vec{a} + n\\vec{b}}{m + n}$', '$\\dfrac{\\vec{a} + \\vec{b}}{m + n}$'],
                  answerIndex: 0,
                  explanation: 'AP : PB = m : n から $\\vec{p} = \\dfrac{n\\vec{a} + m\\vec{b}}{m + n}$。係数が比と「逆向き」につくのが覚えどころです。',
                },
                {
                  question: '直線 $3x + 2y - 6 = 0$ の法線ベクトルは？',
                  choices: ['(3, 2)', '(2, -3)', '(-6, 6)'],
                  answerIndex: 0,
                  explanation: '一般形 $ax + by + c = 0$ の法線ベクトルは係数 $(a, b)$。(2, -3) は方向ベクトルです。',
                },
                {
                  question: '点と直線の距離の公式の分母 $\\sqrt{a^2 + b^2}$ は、何の大きさ？',
                  choices: ['法線ベクトル (a, b)', '方向ベクトル (b, -a)', 'OP ベクトル'],
                  answerIndex: 0,
                  explanation: '導出の射影の式 $d = |\\vec{n} \\cdot \\overrightarrow{\\mathrm{QP}}| / |\\vec{n}|$ の $|\\vec{n}|$ の部分です。',
                },
              ],
            },
          ],
        },
        {
          id: 'space-vectors',
          title: '空間ベクトルと平面の方程式',
          summary: '空間ベクトルの成分・内積から、平面の方程式、2直線のなす角、球の方程式まで。',
          objectives: [
            '空間ベクトルを成分表示で演算し、内積・大きさ・なす角を計算できる',
            '法線ベクトルから平面の方程式 ax + by + cz = d を立てられる',
            '球の方程式を立て、平方完成で中心と半径を求められる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '空間ベクトルの成分と内積' },
            {
              type: 'text',
              content: '空間のベクトルは 3 つの実数の組 $(a_1, a_2, a_3)$ で表します。演算のルールは平面ベクトルとまったく同じで、成分ごとに足し引きするだけです。内積も同様に定義されるので、「なす角を求める」「垂直条件を調べる」という平面の技がそのまま空間で使えます。',
            },
            { type: 'formula', tex: '|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}, \\qquad \\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3', display: true },
            { type: 'formula', tex: '\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0, \\qquad \\cos\\theta = \\dfrac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|\\,|\\vec{b}|}', display: true },
            { type: 'heading', level: 3, content: '平面の方程式——成分で立てる' },
            {
              type: 'text',
              content: '空間では「直線の代わりに平面」が一次方程式で表されます。平面に垂直なベクトルを**法線ベクトル**と呼び、平面上の任意の点 X について「X と平面上の定点 A を結ぶベクトルが法線に垂直」という条件を式に書けば平面の方程式になります。外積を使わなくても、成分での内積計算だけで一次方程式 $ax + by + cz = d$ が得られるのです。',
            },
            {
              type: 'derivation',
              title: '法線ベクトルから平面の方程式を導く',
              steps: [
                {
                  label: 'Step 1: 垂直条件を書き下す',
                  tex: '\\vec{n} \\cdot \\overrightarrow{\\mathrm{AX}} = 0',
                  note: '法線 n は平面内のすべてのベクトルに垂直。A(a_0, b_0, c_0) は平面上の定点、X(x, y, z) は動点です。',
                },
                {
                  label: 'Step 2: 成分で書く',
                  tex: '(a, b, c) \\cdot (x - a_0,\\ y - b_0,\\ z - c_0) = 0',
                },
                {
                  label: 'Step 3: 展開して整理',
                  tex: 'a(x - a_0) + b(y - b_0) + c(z - c_0) = 0 \\quad \\Longleftrightarrow \\quad ax + by + cz = aa_0 + bb_0 + cc_0',
                  note: '右辺は定点 A だけで決まる定数。これを d とおけば平面の方程式 ax + by + cz = d が完成します。',
                },
                {
                  label: '具体例',
                  tex: '\\text{点 } (1, 2, 1) \\text{、法線 } (2, -1, 3): \\quad 2(x - 1) - (y - 2) + 3(z - 1) = 0 \\quad \\Longleftrightarrow \\quad 2x - y + 3z = 3',
                  note: '係数は法線ベクトルそのもので、点を代入して右辺の定数を決めるだけです。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '2直線のなす角' },
            {
              type: 'text',
              content: '空間の 2 直線のなす角は、それぞれの方向ベクトルのなす角から求めます。直線の向きはどちら向きでもよい（逆向きも同じ直線）なので、内積が負になっても絶対値をとって鋭角側に合わせます。この「絶対値をとる」処理は試験での落とし穴なので注意しましょう。',
            },
            { type: 'formula', tex: '\\cos\\theta = \\dfrac{|\\vec{a} \\cdot \\vec{b}|}{|\\vec{a}|\\,|\\vec{b}|} \\qquad (0 \\le \\theta \\le \\dfrac{\\pi}{2})', display: true },
            {
              type: 'example',
              title: '例題',
              body: '方向ベクトルがそれぞれ $(1, 1, 0)$ と $(0, 1, 1)$ である 2 直線のなす角を求めよ。',
              answer: '$\\cos\\theta = \\dfrac{|1 \\cdot 0 + 1 \\cdot 1 + 0 \\cdot 1|}{\\sqrt{2} \\sqrt{2}} = \\dfrac{1}{2}$ より **$\\theta = 60°$**',
            },
            { type: 'heading', level: 3, content: '球の方程式' },
            {
              type: 'text',
              content: '球は「中心からの距離が一定値 r に等しい点の集合」なので、距離の条件を成分で書き下せば方程式になります。逆に、与えられた二次式を平方完成すれば、それが球かどうか、中心と半径は何かが読み取れます。平面と球の交わりが円になることも、距離の計算で確かめられる重要な事実です。',
            },
            { type: 'formula', tex: '(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2 \\quad (\\text{中心 } (a, b, c), \\text{ 半径 } r)', display: true },
            {
              type: 'example',
              title: '例題',
              body: '原点を中心とし、点 $(1, 2, 2)$ を通る球の方程式を求めよ。',
              answer: '半径は $r = \\sqrt{1^2 + 2^2 + 2^2} = 3$。よって **$x^2 + y^2 + z^2 = 9$**',
            },
            {
              type: 'table',
              headers: ['図形', 'ベクトルでの条件', '方程式'],
              rows: [
                ['平面', '法線 $\\vec{n} = (a, b, c)$ に垂直', '$ax + by + cz = d$'],
                ['球（中心 C, 半径 r）', '$|\\overrightarrow{\\mathrm{CX}}| = r$', '$(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$'],
                ['直線（方向 $\\vec{d} = (l, m, n)$）', '$\\overrightarrow{\\mathrm{AX}} = t\\vec{d}$', '$x = a_0 + lt,\\ y = b_0 + mt,\\ z = c_0 + nt$'],
              ],
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: 'A(1, 0, 2), B(3, 4, 0) 間の距離を求めよ。',
                  hint: '$\\overrightarrow{\\mathrm{AB}} = (2, 4, -2)$ の大きさ。',
                  answer: '$|\\overrightarrow{\\mathrm{AB}}| = \\sqrt{2^2 + 4^2 + (-2)^2} = \\sqrt{24} = $ **$2\\sqrt{6}$**',
                },
                {
                  body: '点 (1, 2, 0) を通り、法線ベクトル $(3, -1, 2)$ をもつ平面の方程式を求めよ。',
                  hint: '$3(x - 1) - (y - 2) + 2z = 0$ を整理する。',
                  answer: '**$3x - y + 2z - 1 = 0$**',
                },
                {
                  body: '球 $x^2 + y^2 + z^2 - 2x + 4z = 4$ の中心と半径を求めよ。',
                  hint: 'x と z について平方完成する。',
                  answer: '$(x - 1)^2 + y^2 + (z + 2)^2 = 4 + 1 + 4 = 9$ より中心 **(1, 0, -2)**、半径 **3**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '平面 $ax + by + cz = d$ の法線ベクトルは？',
                  choices: ['(a, b, c)', '(b, -a, 0)', '(d, d, d)'],
                  answerIndex: 0,
                  explanation: '平面の方程式の係数がそのまま法線ベクトルになります。直線の場合と同じ構造です。',
                },
                {
                  question: '方向ベクトル $\\vec{u}, \\vec{v}$ をもつ 2 直線のなす角 θ の余弦は？',
                  choices: ['$\\dfrac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$', '$\\dfrac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| + |\\vec{v}|}$', '$\\dfrac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}|\\,|\\vec{v}|}$（絶対値なし）'],
                  answerIndex: 0,
                  explanation: 'なす角は鋭角側（0°〜90°）にそろえるので、内積に絶対値をつけます。',
                },
                {
                  question: '空間の 2 点 A, B に対し $|\\overrightarrow{\\mathrm{AB}}|$ の成分計算は？',
                  choices: ['各成分の差の 2 乗和の平方根', '各成分の和の絶対値', '各成分の積の平方根'],
                  answerIndex: 0,
                  explanation: '$|\\overrightarrow{\\mathrm{AB}}| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$ は三平方の定理の空間版です。',
                },
              ],
            },
          ],
        },
      ],
    },
    // ---------- 数学C: 数列 ----------
    {
      id: 's3c-sequence',
      name: '数学C：数列',
      gakushuShidoYoryo: '内容「数列」等差数列・等比数列、階差数列、漸化式、数学的帰納法',
      lessons: [
        {
          id: 'sequences',
          title: '数列と漸化式',
          summary: '一般項・和の求め方と、漸化式を解く代表的な手法。',
          objectives: ['等差・等比数列の一般項と和を求められる', '数学的帰納法で予想を証明できる'],
          blocks: [
            { type: 'heading', level: 3, content: '基本の数列' },
            {
              type: 'table',
              headers: ['', '一般項', '初項 n 項の和 $S_n$'],
              rows: [
                ['等差数列（公差 d）', '$a_n = a_1 + (n-1)d$', '$S_n = \\dfrac{n(a_1 + a_n)}{2}$'],
                ['等比数列（公比 r）', '$a_n = a_1 r^{n-1}$', '$S_n = \\dfrac{a_1(r^n - 1)}{r - 1}$（r ≠ 1）'],
              ],
            },
            { type: 'heading', level: 3, content: '階差数列' },
            {
              type: 'text',
              content: '隣り合う項の差 $b_n = a_{n+1} - a_n$ が等比数列になるなら、$a_n = a_1 + \\displaystyle\\sum_{k=1}^{n-1} b_k$ として一般項が求まります。「差をとったらきれいになる」パターンを見抜くのがコツです。',
            },
            { type: 'heading', level: 3, content: '数学的帰納法' },
            {
              type: 'list',
              items: [
                '**① 基礎**: n = 1 のとき成り立つことを確かめる',
                '**② 帰納**: n = k のとき成り立つと仮定し、n = k + 1 でも成り立つことを示す',
                '①②よりすべての自然数 n で成立',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$1^2 + 2^2 + \\cdots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}$ を数学的帰納法で証明せよ。',
              answer: '① n=1: 左辺 1、右辺 $\\tfrac{1 \\cdot 2 \\cdot 3}{6} = 1$ ✓　② n=k で成立とすると、n=k+1 の左辺は $\\tfrac{k(k+1)(2k+1)}{6} + (k+1)^2 = \\tfrac{(k+1)(k+2)(2k+3)}{6}$ となり右辺に一致 ✓',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '②の仮定（n = k の成立）を**実際に使わずに** n = k+1 を変形してしまうのが典型的な減点パターン。「仮定の式」を出発点に変形しましょう。',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '初項 3、公差 4 の等差数列の第 20 項を求めよ。',
                  answer: '$a_{20} = 3 + 19 \\times 4 = $ **79**',
                },
                {
                  body: '初項 1、公比 2 の等比数列の初項から第 10 項までの和を求めよ。',
                  hint: '$S_n = \\dfrac{a_1(r^n - 1)}{r - 1}$。',
                  answer: '$S_{10} = \\dfrac{2^{10} - 1}{2 - 1} = $ **1023**',
                },
                {
                  body: '数列 $3, 7, 13, 21, 31, \\ldots$ の一般項を求めよ。（階差数列を作ると等差になる）',
                  hint: '階差 $4, 6, 8, 10, \\ldots$ は公差 2 の等差数列。',
                  answer: '$b_k = 2k + 2$ なので $a_n = 3 + \\sum_{k=1}^{n-1}(2k+2) = 3 + (n-1)(n+2) = $ **$n^2 + n + 1$**',
                },
              ],
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 等差・等比数列の一般項がランダムに出題されます',
                props: { topic: 'sequence-terms' },
              },
            },
            { type: 'heading', level: 3, content: '小ネタ: 数列は自然界にも現れる' },
            {
              type: 'widget',
              widget: {
                id: 'golden-sunflower',
                caption: 'ひまわりの種の並びは黄金角（フィボナッチ数列の隣項の比の極限）。角度をずらすと縞模様が現れる',
              },
            },
            {
              type: 'widget',
              widget: {
                id: 'collatz',
                caption: 'コラーツ予想: 「偶数なら割る2、奇数なら3n+1」を繰り返すと必ず 1 になる——はずだが、まだ誰も証明できていない',
              },
            },
          ],
        },
        // ---------- 数学C: 統計的な推測 ----------
        {
          id: 'statistical-inference',
          title: '統計的な推測',
          summary: '二項分布・正規分布から母集団の平均を推定する。',
          blocks: [
            { type: 'heading', level: 3, content: '確率分布と期待値' },
            {
              type: 'text',
              content: '成功確率 p の試行を n 回行うときの成功回数 X は**二項分布 B(n, p)** にしたがい、期待値と分散は次の通りです。',
            },
            { type: 'formula', tex: 'E(X) = np, \\qquad V(X) = np(1-p)', display: true },
            { type: 'heading', level: 3, content: '正規分布と標本' },
            {
              type: 'list',
              items: [
                'n が大きいとき二項分布は**正規分布 N(np, np(1−p))** で近似できる（中心極限定理の芽生え）',
                '標本平均 $\\bar{x}$ は $N(m, \\sigma^2/n)$ に近づく → 標本を増やすほど推定は精密になる',
                '95% 信頼区間: $m$ の推定は $\\bar{x} \\pm 1.96 \\times \\dfrac{\\sigma}{\\sqrt{n}}$',
              ],
            },
            {
              type: 'widget',
              widget: { id: 'probability-simulator', caption: 'プレイグラウンド: サイコロの目の分布が回数を増やすと理論値に収束する様子＝大数の法則' },
            },
            {
              type: 'example',
              title: '例題',
              body: '表が出る確率が不明のコインを400回投げて224回表が出た。表の出る確率 p の95%信頼区間を求めよ（ただし $\\sigma = \\sqrt{p(1-p)} \\approx 0.5$ と近似）。',
              answer: '$\\hat{p} = 224/400 = 0.56$、誤差幅 $1.96 \\times 0.5/\\sqrt{400} = 0.049$。よって **0.51 ≤ p ≤ 0.61** 程度。',
            },
            { type: 'heading', level: 3, content: '小ネタ: ガルトン板——二項分布が正規分布に化ける' },
            {
              type: 'widget',
              widget: {
                id: 'galton-board',
                caption: '釘のたびに左右 1/2 の運命の分かれ道。ボール 300 個落として正規分布の鐘型を描かせよう',
              },
            },
          ],
        },
        {
          id: 'sequence-recurrence',
          title: '漸化式と帰納的定義',
          summary: '隣接2項間・特性方程式・階差数列——漸化式を一般項まで解き切る手法。',
          objectives: [
            '特性方程式を使って $x_{n+1} = ax_n + b$ 型の漸化式を解ける',
            '階差数列から一般項を復元できる',
            '隣接2項間の漸化式を変形して等差・等比型に帰着できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '漸化式とは' },
            {
              type: 'text',
              content: '「初項と、隣り合う項の関係式」で数列を定めるとき、この関係式を**漸化式**、定義の仕方を**帰納的定義**と呼びます。すべての項をいちいち書かずに済むコンパクトな表現であり、プログラミングの再帰処理や複利計算とも相通じる考え方です。ただし漸化式のままでは第 n 項がすぐ取り出せないので、**一般項 $a_n$ を求める（漸化式を解く）**ことが目標になります。',
            },
            {
              type: 'table',
              headers: ['漸化式の型', '手がける方法', '帰着先'],
              rows: [
                ['$a_{n+1} = a_n + d$', '等差数列そのもの', '$a_n = a_1 + (n - 1)d$'],
                ['$a_{n+1} = r a_n$', '等比数列そのもの', '$a_n = a_1 r^{n-1}$'],
                ['$x_{n+1} = a x_n + b$（$b \\ne 0$）', '特性方程式 $\\alpha = a\\alpha + b$', '等比数列 $\\{ x_n - \\alpha \\}$'],
                ['$a_{n+1} = p a_n + q r^n$', '特徴的方程式 $\\alpha = p\\alpha + qr$', '両辺割りの等比数列'],
                ['階差 $b_n = a_{n+1} - a_n$ がきれい', '階差数列を足し合わせる', '$a_n = a_1 + \\sum b_k$'],
              ],
            },
            { type: 'heading', level: 3, content: '特性方程式による解法' },
            {
              type: 'derivation',
              title: '$x_{n+1} = ax_n + b$ 型の一般項',
              steps: [
                {
                  label: 'Step 1: 特性方程式を立てる',
                  tex: '\\alpha = a\\alpha + b \\quad \\Longleftrightarrow \\quad (1 - a)\\alpha = b \\quad \\Longleftrightarrow \\quad \\alpha = \\dfrac{b}{1 - a}',
                  note: '漸化式で n → ∞ として極限値 α になりそうな値を探すのが直観的な動機。定数 α なら移項したときに打ち消しあうはず、という発想です。',
                },
                {
                  label: 'Step 2: 漸化式の辺々から引く',
                  tex: 'x_{n+1} - \\alpha = ax_n + b - \\alpha = a x_n + (b - \\alpha) = a x_n - a\\alpha = a(x_n - \\alpha)',
                  note: 'α の定義 $b = (1 - a)\\alpha$, つまり $b - \\alpha = -a\\alpha$ を使いました。ここで数列 $\\{ y_n \\}$, $y_n = x_n - \\alpha$ を考えると……。',
                },
                {
                  label: 'Step 3: 等比数列に帰着',
                  tex: 'y_{n+1} = a y_n, \\qquad y_1 = x_1 - \\alpha \\quad \\Longrightarrow \\quad y_n = (x_1 - \\alpha) a^{n-1}',
                  note: '公比 a、初項 $x_1 - \\alpha$ の等比数列です。元の数列は「不動点からのずれ」が毎回 a 倍される構造だったことになります。',
                },
                {
                  label: '結論',
                  tex: 'x_n = \\dfrac{b}{1 - a} + \\left( x_1 - \\dfrac{b}{1 - a} \\right) a^{n-1}',
                },
                {
                  label: '実行例',
                  tex: 'x_{n+1} = 2x_n + 1,\\ x_1 = 4 \\quad \\Longrightarrow \\quad \\alpha = 1,\\ x_n - 1 = 3 \\cdot 2^{n-1},\\ \\therefore\\ x_n = 3 \\cdot 2^{n-1} + 1',
                  note: '検算: n=1 で 4 ✓、n=2 で $6+1=7 = 2 \\cdot 4 + 1$ ✓。答えを出したら小さい n での一致を必ず確かめましょう。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '階差数列の活用' },
            {
              type: 'text',
              content: '一般項が見えても、隣り合う項の差 $b_n = a_{n+1} - a_n$ が等差・等比など「解ける数列」になっていることがあります。これが**階差数列**の発想で、和の記号を使って元の数列に戻すのが基本操作です。「差をとると簡単になる」形には多項式型（$a_n = n^2 + n$ など）、指数が混ざった交互型などがあり、入試でも頻出です。',
            },
            { type: 'formula', tex: 'a_n = a_1 + \\sum_{k=1}^{n-1} b_k \\qquad (b_k = a_{k+1} - a_k)', display: true },
            {
              type: 'example',
              title: '例題',
              body: '隣接2項間の漸化式 $a_{n+1} - a_n = 2n + 1$, $a_1 = 1$ で定まる数列の一般項を求めよ。',
              answer: '$a_n = a_1 + \\displaystyle\\sum_{k=1}^{n-1}(2k+1) = 1 + n(n-1) + (n-1) = 1 + n^2 - 1 = $ **$n^2$**（実際 $1, 4, 9, \\ldots$ ✓）',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '漸化式 $x_{n+1} = 3x_n - 4$, $x_1 = 5$ で定まる数列の一般項を求めよ。',
                  hint: '特性方程式 $\\alpha = 3\\alpha - 4$ を解いて $\\alpha = 2$。$\\{ x_n - 2 \\}$ は公比 3 の等比数列。',
                  answer: '$x_n - 2 = 3 \\cdot 3^{n-1}$ より **$x_n = 3^n + 2$**',
                },
                {
                  body: '漸化式 $x_{n+1} = \\dfrac{1}{2} x_n + 3$, $x_1 = 2$ で定まる数列の一般項を求めよ。',
                  hint: '$\\alpha = 6$。$x_n - 6$ は公比 $\\tfrac{1}{2}$ の等比数列。',
                  answer: '$x_n - 6 = (-4)\\left( \\dfrac{1}{2} \\right)^{n-1}$ より **$x_n = 6 - \\dfrac{8}{2^n}$**',
                },
                {
                  body: '階差数列が $1, 2, 4, 8, \\ldots$（公比 2 の等比）で、$a_1 = 3$ である数列 $\\{ a_n \\}$ の一般項を求めよ。',
                  hint: '$a_n = 3 + \\displaystyle\\sum_{k=1}^{n-1} 2^{k-1}$。等比数列の和の公式を使う。',
                  answer: '$a_n = 3 + (2^{n-1} - 1) = $ **$2^{n-1} + 2$**',
                },
                {
                  body: '漸化式 $a_{n+1} = a_n + 2n$, $a_1 = 1$ で表される数列について、$a_{10}$ を求めよ。',
                  hint: '$a_{10} = 1 + \\sum_{k=1}^{9} 2k$。',
                  answer: '$1 + 2 \\cdot \\dfrac{9 \\cdot 10}{2} = $ **91**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '漸化式 $x_{n+1} = ax_n + b$ の特性方程式は？',
                  choices: ['$\\alpha = a\\alpha + b$', '$\\alpha^2 = a\\alpha + b$', '$\\alpha = ab$'],
                  answerIndex: 0,
                  explanation: '添字を消して定数同士の関係にした $\\alpha = a\\alpha + b$ が特性方程式。解 α が「不動点」です。',
                },
                {
                  question: '特性方程式の解を α としたとき、$\\{ x_n - \\alpha \\}$ はどんな数列？',
                  choices: ['公比 a の等比数列', '公差 a の等差数列', '階差数列'],
                  answerIndex: 0,
                  explanation: '$x_{n+1} - \\alpha = a(x_n - \\alpha)$ が成り立つので、不動点からのズレが公比 a で増減する等比数列になります。',
                },
                {
                  question: '階差数列 $\\{ b_n \\}$ から元の数列へ戻す式は？',
                  choices: ['$a_n = a_1 + \\sum_{k=1}^{n-1} b_k$', '$a_n = a_1 \\cdot b_{n-1}$', '$a_n = b_n - b_{n-1}$'],
                  answerIndex: 0,
                  explanation: '差を積み重ねれば元の項になる（望遠鏡和）。$a_n = a_1 + (a_2 - a_1) + \\cdots + (a_n - a_{n-1})$ です。',
                },
              ],
            },
          ],
        },
        {
          id: 'sequence-limit',
          title: '無限等比級数と極限',
          summary: '|r| < 1 で収束する無限等比級数、循環小数の分数化、面積問題への応用。',
          objectives: [
            '無限等比級数の収束条件 |r| < 1 と和の公式を使える',
            '循環小数を無限等比級数として分数に直せる',
            '図形の無限分割の面積・長さを級数の和として求められる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '無限級数の収束' },
            {
              type: 'text',
              content: '無限個の数の和は、普通の意味では足せません。そこで「初項から第 n 項までの部分和 $S_n$ をまず計算し、n を限りなく大きくしたときの極限」として和を定義します。極限が存在するとき級数は**収束**するといい、その極限値を級数の和と呼びます。極限が存在しなければ**発散**です。',
            },
            { type: 'formula', tex: '\\sum_{n=1}^{\\infty} a_n = \\lim_{n \\to \\infty} S_n \\quad (S_n = a_1 + a_2 + \\cdots + a_n)', display: true },
            { type: 'heading', level: 3, content: '無限等比級数——なぜ |r| < 1 が必要か' },
            {
              type: 'derivation',
              title: '収束条件と和の公式',
              steps: [
                {
                  label: 'Step 1: 部分和の公式',
                  tex: 'S_n = \\dfrac{a_1(1 - r^n)}{1 - r} \\qquad (r \\ne 1)',
                  note: '有限項の等比数列の和。ここまでは数学Cの既習内容です。',
                },
                {
                  label: 'Step 2: r の場合分けで極限を見る',
                  tex: '\\lim_{n \\to \\infty} r^n = \\begin{cases} 0 & (|r| < 1) \\\\ 1 & (r = 1) \\\\ \\text{収束しない} & (|r| \\ge 1,\\ r \\ne 1) \\end{cases}',
                  note: 'r = 1 なら各項は一定値 a₁ の繰り返しなので明らかに発散。|r| ≥ 1 では項自体が 0 に向かわないため部分和も集まりません。',
                },
                {
                  label: 'Step 3: 収束の場合だけ極限をとる',
                  tex: '|r| < 1 \\ \\Rightarrow\\ \\lim_{n \\to \\infty} S_n = \\dfrac{a_1(1 - 0)}{1 - r} = \\dfrac{a_1}{1 - r}',
                  note: '公式が成り立つのは |r| < 1 のときだけ。「無限に足しても有限になる」のは、各項が急速に小さくなるからです。',
                },
              ],
            },
            {
              type: 'note',
              variant: 'warn',
              content: '和の公式 $\\dfrac{a_1}{1 - r}$ を書く前に、必ず「$|r| < 1$ だから収束」と一言添えるのが採点上のマナー。条件の確認なしに公式を当てはめるのは典型減点です。',
            },
            { type: 'heading', level: 3, content: '循環小数は分数だった' },
            {
              type: 'example',
              title: '例題: 0.777… を分数で表せ',
              body: '$0.777\\ldots = \\dfrac{7}{10} + \\dfrac{7}{100} + \\dfrac{7}{1000} + \\cdots$ を無限等比級数とみて分数化せよ。',
              answer: '初項 $\\tfrac{7}{10}$、公比 $\\tfrac{1}{10}$ で $|r| = \\tfrac{1}{10} < 1$ より収束。和は $\\dfrac{\\tfrac{7}{10}}{1 - \\tfrac{1}{10}} = $ **$\\dfrac{7}{9}$**',
            },
            {
              type: 'list',
              items: [
                '$0.333\\ldots = \\dfrac{3}{9} = \\dfrac{1}{3}$',
                '$0.121212\\ldots = \\dfrac{12}{99} = \\dfrac{4}{33}$（循環節 2 桁なら分母 99）',
                '一般に循環節 k 桁の循環小数は、分子＝循環節の数字、分母＝k 個の 9 という分数になる',
              ],
            },
            { type: 'heading', level: 3, content: '面積問題への応用' },
            {
              type: 'text',
              content: '正方形や線分を「残りの一辺を同じ比率で切り分ける」操作を無限に繰り返す図形問題は、無限等比級数の登竜門です。コツは、第 n 回の操作で付け加わる面積（または長さ）を $a_n$ とおき、それが公比 r の等比数列になることを示してから和をとること。残りの面積が毎回同じ割合で縮むことを使うと、直接級数を組まなくても答えが出ることもあります。',
            },
            {
              type: 'example',
              title: '例題',
              body: '一辺 1 の正方形を、左半分（幅 $\\tfrac{1}{2}$ の縦長長方形）を残して次々に「右側の残りをまた半分」に塗り分けていく。塗った部分の総面積を求めよ。',
              answer: '塗る面積は $\\dfrac{1}{2}, \\dfrac{1}{4}, \\dfrac{1}{8}, \\ldots$ で初項 $\\tfrac{1}{2}$、公比 $\\tfrac{1}{2}$。よって総面積 $= \\dfrac{\\tfrac{1}{2}}{1 - \\tfrac{1}{2}} = $ **1（正方形全体）**',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '無限等比級数 $\\displaystyle\\sum_{n=1}^{\\infty} 2\\left( \\dfrac{3}{4} \\right)^{n-1}$ の和を求めよ。',
                  hint: '初項 2、公比 $\\tfrac{3}{4}$。$|r| < 1$ を確認してから公式。',
                  answer: '$\\dfrac{2}{1 - \\tfrac{3}{4}} = $ **8**',
                },
                {
                  body: '無限等比級数 $1 + x + x^2 + \\cdots$ が収束するとき、x の範囲と和を求めよ。',
                  hint: '収束条件は $|x| < 1$。',
                  answer: '**$-1 < x < 1$** のとき収束し、和は **$\\dfrac{1}{1 - x}$**',
                },
                {
                  body: '循環小数 $0.282828\\ldots$ を分数で表せ。',
                  hint: '初項 $\\tfrac{28}{100}$、公比 $\\tfrac{1}{100}$ の無限等比級数。',
                  answer: '$\\dfrac{\\tfrac{28}{100}}{1 - \\tfrac{1}{100}} = \\dfrac{28}{99}$',
                },
                {
                  body: '一辺 1 の正三角形に対し、「残りの図形から相似比 $\\tfrac{1}{2}$ の正三角形を順に取り除く」操作を続けるとき、取り除いた面積の合計を求めよ（元の面積を S とする）。',
                  hint: '取り除く面積は $\\tfrac{S}{4}, \\tfrac{S}{16}, \\tfrac{S}{64}, \\ldots$（相似な図形の面積比は相似比の 2 乗）。',
                  answer: '$\\dfrac{\\tfrac{S}{4}}{1 - \\tfrac{1}{4}} = $ **$\\dfrac{S}{3}$**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '無限等比級数が収束する条件は？',
                  choices: ['公比 r が |r| < 1', '公比 r > 0', '初項が正'],
                  answerIndex: 0,
                  explanation: '|r| < 1 のときのみ $r^n \\to 0$ となり部分和が収束します。r = 1 や |r| > 1 では発散です。',
                },
                {
                  question: '$0.999\\ldots$ の値は？',
                  choices: ['1', '1 未満の未知の数', '0.9'],
                  answerIndex: 0,
                  explanation: '初項 $\\tfrac{9}{10}$、公比 $\\tfrac{1}{10}$ の級数の和は $\\tfrac{9/10}{1/10} = 1$。$0.999\\ldots = 1$ は厳密に正しい等式です。',
                },
                {
                  question: '級数の和を「部分和の極限」として定義する理由は？',
                  choices: ['無限個の和は直接は定義できないから', '計算が速くなるから', '正の項しか扱えないから'],
                  answerIndex: 0,
                  explanation: '有限和 $S_n$ なら定義済みなので、その極限として無限和を「作り出す」のが解析の基本戦略です。',
                },
              ],
            },
          ],
        },
        {
          id: 'statistical-regression',
          title: '統計的な推測の詳細',
          summary: '二項分布の正規近似、95%信頼区間の導出、仮説検定の考え方。',
          objectives: [
            '二項分布の正規近似が使える条件と標準化の手順を説明できる',
            '母比率の95%信頼区間を導出し、計算できる',
            '仮説検定の流れ（帰無仮説・有意確率・棄却）を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '二項分布と正規近似' },
            {
              type: 'text',
              content: '成功確率 p の試行を n 回行ったときの成功回数 X は二項分布 B(n, p) に従い、平均 np、分散 np(1 − p) です。n が大きくなるとこの分布の形は、平均と分散を揃えた正規分布にどんどん近づきます。これが**正規近似**で、離散的な二項分布の和（確率の足し算）を、連続的な正規分布の面積計算で置き換えられることを意味します。',
            },
            { type: 'formula', tex: 'X \\sim B(n, p), \\quad E(X) = np, \\quad V(X) = np(1-p) \\quad \\xrightarrow{n \\text{ 大}} \\quad X \\approx N(np,\\ np(1-p))', display: true },
            {
              type: 'list',
              items: [
                '標準化: $Z = \\dfrac{X - np}{\\sqrt{np(1-p)}}$ は近似的に標準正規分布 N(0, 1) に従う',
                '標準正規分布では P(Z ≤ 1.96) ≈ 0.975、つまり P(|Z| ≤ 1.96) ≈ 0.95',
                '95% に入る範囲が ±1.96 標準偏差、98% なら ±2.33、99% なら ±2.58',
              ],
            },
            { type: 'heading', level: 3, content: '母比率の95%信頼区間——導出' },
            {
              type: 'derivation',
              title: '$p \\pm 1.96\\sqrt{\\dfrac{p(1-p)}{n}}$ の導出',
              steps: [
                {
                  label: 'Step 1: 標本比率の分布',
                  tex: '\\bar{p} = \\dfrac{X}{n} \\sim B\\left(n,\\ \\text{分散 } \\dfrac{p(1-p)}{n}\\right) \\text{ 的に振る舞い、平均 } p \\text{ を中心にばらつく}',
                  note: '成功回数 X を n で割った標本比率は、真の値 p を中心に標準偏差 $\\sqrt{p(1-p)/n}$ でばらつきます。n が大きいほど縮む量です。',
                },
                {
                  label: 'Step 2: 標準化して 95% 区間を作る',
                  tex: 'P\\left( -1.96 \\le \\dfrac{\\bar{p} - p}{\\sqrt{p(1-p)/n}} \\le 1.96 \\right) \\approx 0.95',
                  note: '正規近似と P(|Z| ≤ 1.96) ≈ 0.95 を使いました。「標本比率は約95%の確率で真の p の近く ±1.96SD にある」ことを意味します。',
                },
                {
                  label: 'Step 3: 不等式を p について解く',
                  tex: '|\\bar{p} - p| \\le 1.96\\sqrt{\\dfrac{p(1-p)}{n}} \\quad \\Longleftrightarrow \\quad p - 1.96\\sqrt{\\dfrac{p(1-p)}{n}} \\le \\bar{p} \\le p + 1.96\\sqrt{\\dfrac{p(1-p)}{n}}',
                  note: 'これは「真の p から見た標本比率の動き方」。しかし現実には標本比率 $\\bar{p}$ は観測できても、知りたい p は不明です。',
                },
                {
                  label: 'Step 4: 視点を反転させる',
                  tex: '\\bar{p} - 1.96\\sqrt{\\dfrac{p(1-p)}{n}} \\lesssim p \\lesssim \\bar{p} + 1.96\\sqrt{\\dfrac{p(1-p)}{n}}',
                  note: '不等式を p の周りに読み替えます。誤差幅の p(1−p) は未知なので、標本比率で置き換える（$p(1-p) \\approx \\bar{p}(1-\\bar{p})$、最大値 1/4 を使う近似も一般的）のが実用上の工夫です。',
                },
                {
                  label: '結論',
                  tex: 'p \\pm 1.96\\sqrt{\\dfrac{p(1-p)}{n}}',
                  note: 'この区間が真の p を含む確率が約95%。「95%信頼度」の意味は、こうして作った区間を何度も作れば95%の割合で正しい p を含む、という頻度的な解釈です。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['信頼度', '係数 z', '区間の幅の傾向'],
              rows: [
                ['90%', '±1.64', '狭い——推定は精密だが外れやすい'],
                ['95%', '±1.96', '標準的な妥協点（最もよく使う）'],
                ['99%', '±2.58', '広い——ほぼ確実だが情報はあいまい'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '無作為抽出した 400 人のうち 224 人が賛成だった。母比率 p の 95% 信頼区間を求めよ。',
              answer: '$\\bar{p} = 224/400 = 0.56$、誤差幅 $1.96\\sqrt{0.56 \\cdot 0.44 / 400} = 1.96 \\times 0.0248 \\approx 0.049$。よって **0.511 ≤ p ≤ 0.609**',
            },
            { type: 'heading', level: 3, content: '仮説検定の考え方' },
            {
              type: 'text',
              content: '検定は「帰無仮説 $H_0$: 差はない」を一時的に採用し、そのもとで観測データがどれくらい起きにくいかを測る手続きです。起きにくさの指標が**有意確率（p 値）**で、あらかじめ決めた水準（有意水準、ふつう 5%）より小さければ「こんなデータは偶然では説明しづらい」として $H_0$ を**棄却**します。棄却された対立仮説（差がある）を採ぶ判断をしますが、これは確率的な推論であり、絶対的な証明ではない点に注意しましょう。',
            },
            {
              type: 'list',
              ordered: true,
              items: [
                '帰無仮説 $H_0$ と対立仮説 $H_1$ を立てる',
                '検定統計量を選び（例: $z = \\dfrac{\\bar{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$）、$H_0$ のもとでの分布を考える',
                '有意水準 α の棄却域を決める（両側 5% なら |z| ≥ 1.96）',
                '実データから z を計算し、棄却域に入れば $H_0$ を棄却、入らなければ「棄却できない」',
              ],
            },
            {
              type: 'note',
              variant: 'info',
              content: '信頼区間と検定は裏側がつながっています。95%信頼区間に帰無仮説の値 p₀ が入っていれば、両側 5% 検定で $H_0$ は棄却されません。逆に入っていなければ棄却されます。',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: 'サイコロを 600 回投げて 1 の目が出た回数 X は二項分布に従う。E(X) と V(X) を求めよ。',
                  hint: 'p = 1/6, n = 600。',
                  answer: 'E(X) = 600 × 1/6 = **100**、V(X) = 600 × 1/6 × 5/6 = **$\\dfrac{250}{3} \\approx 83.3$**',
                },
                {
                  body: '500 人を調査して 300 人が Yes と答えた。母比率の 95% 信頼区間を求めよ（小数第3位まで）。',
                  hint: '$\\bar{p} = 0.6$、誤差幅 $1.96\\sqrt{0.6 \\times 0.4 / 500}$。',
                  answer: '誤差幅 ≈ 0.043 より **0.557 ≤ p ≤ 0.643**',
                },
                {
                  body: '標本数 n を 4 倍にすると、信頼区間の誤差幅は何倍になるか。',
                  hint: '誤差幅は $\\sqrt{n}$ に反比例する。',
                  answer: '$\\sqrt{1/4} = $ **0.5 倍（半分）**。精度を2倍するには標本を4倍必要とする「平方根の壁」',
                },
                {
                  body: '「コインは公平」という帰無仮説のもとで、200 回中 120 回表が出た。標準化した統計量 z を求め、両側 5% 検定（|z| ≥ 1.96）で判定せよ。',
                  hint: '$p_0 = 0.5$, SD $= \\sqrt{200 \\times 0.25}/200$ に注意（比率の z なら $\\sqrt{0.25/200}$）。',
                  answer: '$z = \\dfrac{0.60 - 0.50}{\\sqrt{0.25/200}} = \\dfrac{0.10}{0.0354} \\approx $ **2.83 > 1.96 で帰無仮説を棄却**——公平でないと判定',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '二項分布 B(n, p) を正規分布で近似するときの平均と分散は？',
                  choices: ['np と np(1 − p)', 'p と pq', 'n と p²'],
                  answerIndex: 0,
                  explanation: '近似先は N(np, np(1 − p))。分散に (1 − p) が残るのがポイントです。',
                },
                {
                  question: '95%信頼区間の「95%」の正しい解釈は？',
                  choices: ['区間の作り方を繰り返せば約95%の割合で真の値を含む', '真の値が95%の確率でその区間内にある', 'データの95%が区間に入る'],
                  answerIndex: 0,
                  explanation: '真の値 p は固定値なので確率はつけません。ランダムなのは区間のほう、という頻度論的な解釈が正確です。',
                },
                {
                  question: 'p 値が有意水準 5% より小さかったときの結論は？',
                  choices: ['帰無仮説を棄却する', '帰無仮説が証明された', 'サンプル数を減らす'],
                  answerIndex: 0,
                  explanation: '帰無仮説のもとで観測が珍しすぎるので棄却します。とはいえ 5% 程度の誤判定（第一種の過誤）の可能性は常に残ります。',
                },
              ],
            },
          ],
        },
      ],
    },
    // ---------- 数学III ----------
    {
      id: 's3-limit-differential',
      name: '数学III：微分法・積分法',
      gakushuShidoYoryo: '内容「微分法」「積分法」: 合成関数・逆関数の微分、増減と極値、面積・体積',
      lessons: [
        {
          id: 'calculus3',
          title: '微分法の拡張と応用',
          summary: '積・商の微分、合成関数の微分、接線と増減の応用。',
          objectives: [
            '積・商・合成関数の微分公式を使える',
            '関数の増減・極値・グラフの概形を描ける',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '微分の公式' },
            { type: 'formula', tex: "\\left( \\frac{f}{g} \\right)' = \\frac{f'g - fg'}{g^2}, \\qquad \\left\\{ f(g(x)) \\right\\}' = f'(g(x)) g'(x)", display: true },
            {
              type: 'text',
              content: '合成関数の公式（連鎖律）は「外側を先に微分 × 内側の微分」。たとえば $y = \\sin 2x$ なら $y\' = \\cos 2x \\times 2 = 2\\cos 2x$ です。',
            },
            { type: 'heading', level: 3, content: '三角関数・指数対数の微分' },
            {
              type: 'table',
              headers: ['f(x)', "f'(x)"],
              rows: [
                ['$\\sin x$', '$\\cos x$'],
                ['$\\cos x$', '$-\\sin x$'],
                ['$e^x$', '$e^x$（微分しても変わらない！）'],
                ['$\\log x$', '$\\dfrac{1}{x}$'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$f(x) = x e^{-x}$ ($x \\ge 0$) の最大値を求めよ。',
              answer: "$f'(x) = e^{-x}(1 - x)$ より x = 1 で極大かつ最大。最大値 $f(1) = e^{-1}$",
            },
            {
              type: 'widget',
              widget: { id: 'derivative-tangent', caption: 'プレイグラウンド: 接線の傾きと極値の関係（数学IIからの発展）' },
            },
            { type: 'heading', level: 3, content: '積分と体積' },
            { type: 'formula', tex: '\\int_a^b f(x)\\,dx, \\qquad V = \\pi \\int_a^b \\left\\{ f(x) \\right\\}^2 dx \\; (\\text{x軸まわり})', display: true },
            {
              type: 'text',
              content: '回転体の体積は、細い円板（半径 f(x)、厚さ dx）の体積 $\\pi f(x)^2 dx$ を積み上げるものとして導けます。区分求積の考え方そのものです。',
            },
            {
              type: 'example',
              title: '例題',
              body: '$y = \\sqrt{x}$ ($0 \\le x \\le 1$) を x 軸のまわりに1回転させてできる体積を求めよ。',
              answer: '$V = \\pi \\displaystyle\\int_0^1 x\\,dx = \\dfrac{\\pi}{2}$',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '数学IIIの積分は部分積分・置換積分が武器になります。$(fg)\' = f\'g + fg\'$ を移項した $\\displaystyle\\int f\'g = [fg] - \\int fg\'$ が部分積分の本体です。',
            },
            { type: 'heading', level: 3, content: '練習（極限ドリル）' },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '激ムズ無限ドリル: 因数分解・有名極限・∞/∞ 型の極限がランダムに出題されます',
                props: { topic: 'limits' },
              },
            },
            { type: 'heading', level: 3, content: '小ネタ: 複利の極限としての e' },
            {
              type: 'widget',
              widget: {
                id: 'compound-e',
                caption: '複利を細かく回すと元金は e 倍で頭打ち——lim(1+1/n)ⁿ = e を体感する',
              },
            },
          ],
        },
      ],
    },
  ],
};
