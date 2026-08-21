import type { Subject } from './types';

// ============================================================
// 中学数学（学習指導要領 第2章 第2節「数学」に対応）
// 内容: 数と式 / 図形 / 関数 / データの活用（学年別に発展）
// ============================================================

export const juniorMath: Subject = {
  id: 'junior-math',
  stage: 'junior',
  name: '中学数学',
  description: '数と式・関数・図形・データの活用。中学3年間の数学を体系的に学びます。',
  icon: '📐',
  color: '#2563eb',
  units: [
    // ---------- 第1学年: 数と式 ----------
    {
      id: 'j1-num',
      name: '数と式（中学1年）',
      gakushuShidoYoryo: '内容「数と式」(1) 正負の数、(2) 文字の使用、(3) 式の表現',
      lessons: [
        {
          id: 'positive-negative',
          title: '正負の数',
          summary: '0より大きい数・小さい数の意味と、四則計算の規則を学ぶ。',
          objectives: [
            '正負の数の意味を理解し、数直線上に表すことができる',
            '正負の数の四則計算ができる',
            '絶対値の意味を理解する',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '正負の数とは' },
            {
              type: 'text',
              content: '温度や水位のように、**基準となる量より大きいか小さいか**で向きをもつ量を表すのが正負の数です。0を基準にして、+（プラス）と−（マイナス）で反対の向きを表します。',
            },
            { type: 'diagram', diagram: 'number-line', caption: '数直線と絶対値（原点からの距離）' },
            {
              type: 'text',
              content: '数直線の上では、**右がプラス、左がマイナス**。数の大小は「数直線で右にあるほうが大きい」という規則で決まります。',
            },
            {
              type: 'formula',
              tex: '-5 < -3 < 0 < 2 < 7',
              display: true,
            },
            { type: 'heading', level: 3, content: '絶対値' },
            {
              type: 'text',
              content: '数直線上で、その数が**原点 0 からどれだけ離れているか**を表すのが絶対値です。$|a|$ のように書きます。',
            },
            { type: 'formula', tex: '|3| = 3,\\quad |-3| = 3,\\quad |0| = 0', display: true },
            {
              type: 'note',
              variant: 'tip',
              content: '絶対値は「マイナスを外すとプラスになる」と覚えがちですが、正しくは**距離**の意味です。距離にマイナスはありません。',
            },
            { type: 'heading', level: 3, content: '加法と減法（たし算・ひき算）' },
            {
              type: 'text',
              content: '異符号の数のたし算は、**絶対値の差**をとり、絶対値の大きいほうの符号をつけます。減法は「ひく数の符号を変えてたす」ことで加法に帰着させます。',
            },
            { type: 'formula', tex: '(-3) + 8 = +(|8| - |-3|) = 5', display: true },
            { type: 'formula', tex: '4 - (-6) = 4 + (+6) = 10', display: true },
            { type: 'heading', level: 3, content: '乗法と除法（かけ算・わり算）' },
            {
              type: 'list',
              items: [
                '**同符号**どうしの積・商は **正**',
                '**異符号**どうしの積・商は **負**',
                '絶対値同士の積・商を計算する',
              ],
            },
            { type: 'formula', tex: '(-4) \\times (-5) = +20, \\qquad 12 \\div (-3) = -4', display: true },
            {
              type: 'example',
              title: '例題 1',
              body: '次を計算せよ。(1) $(-7) + 12$　(2) $-3 \\times (-2) - 10$',
              answer: '(1) $5$　(2) $6 - 10 = -4$',
            },
            {
              type: 'example',
              title: '例題 2（応用）',
              body: 'ある日の気温は、午前6時には $-4\\,^\\circ\\mathrm{C}$、正午には $3\\,^\\circ\\mathrm{C}$ でした。午前6時から正午までに気温は何 ℃ 上がりましたか。',
              answer: '$3 - (-4) = 7$ より **7 ℃ 上がった**。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '$-3^2$ と $(-3)^2$ は別の値です。$-3^2 = -9$、$(-3)^2 = 9$。累乗は符号より先に計算されます。',
            },
            { type: 'heading', level: 3, content: '四則混合の計算' },
            {
              type: 'text',
              content: '計算の順序は小学校と同じで、①かっこ内 → ②累乗 → ③乗除 → ④加除 の順です。分配法則 $a(b+c) = ab + ac$ も使えます。',
            },
            { type: 'formula', tex: '-2 \\times (5 - 8)^2 = -2 \\times (-3)^2 = -2 \\times 9 = -18', display: true },
          ],
        },
        {
          id: 'letters-expressions',
          title: '文字と式',
          summary: '数量を文字で表し、式で処理することの便利さを学ぶ。',
          objectives: [
            '数量の関係を文字を使った式に表すことができる',
            '文字式の計算規則（乗法の記号省略など）を理解する',
            '代入して式の値を求めることができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'なぜ文字を使うのか' },
            {
              type: 'text',
              content: '「りんご 1 個 80 円のものを x 個買うと 80x 円」のように、**数量の関係を一般化**して表せるのが文字式の利点です。1つの式が無数の場合にあてはまります。',
            },
            { type: 'heading', level: 3, content: '文字式の書き方の約束' },
            {
              type: 'list',
              items: [
                'かけ算の × は省略する: $a \\times b \\rightarrow ab$',
                '数と文字では**数を先**に: $x \\times 5 \\rightarrow 5x$',
                '1 や −1 の係数は省略: $1x \\rightarrow x$',
                '同じ文字の積は累乗で: $a \\times a \\rightarrow a^2$',
                'わり算は分数の形で: $x \\div 3 \\rightarrow \\dfrac{x}{3}$',
              ],
            },
            { type: 'heading', level: 3, content: '式への代入と式の値' },
            {
              type: 'text',
              content: '文字に数を代入して計算した結果を**式の値**といいます。代入するときは、負の数を代入する場合に**かっこをつける**のが安全です。',
            },
            {
              type: 'example',
              title: '例題',
              body: '$x = -2$ のとき、$3x^2 - 4x + 1$ の値を求めよ。',
              answer: '$3(-2)^2 - 4(-2) + 1 = 12 + 8 + 1 = 21$',
            },
            { type: 'heading', level: 3, content: '数量の関係を式に表す' },
            {
              type: 'table',
              headers: ['ことばの表現', '式'],
              rows: [
                ['a より 5 大きい数', '$a + 5$'],
                ['b の 3 倍から 2 引いた数', '$3b - 2$'],
                ['c を d でわったときの商と余り（商 q, 余り r）', '$c = dq + r$（$0 \\le r < |d|$）'],
                ['x 円のものと y 円のものをそれぞれ 2 個ずつ', '$2(x + y)$ 円'],
              ],
            },
          ],
        },
      ],
    },
    // ---------- 第1学年: 関数 ----------
    {
      id: 'j1-func',
      name: '関数（中学1年）',
      gakushuShidoYoryo: '内容「関数」(1) 変化と対応、(2) 比例・反比例',
      lessons: [
        {
          id: 'proportional',
          title: '比例・反比例',
          summary: '2つの量の変化の対応に着目し、比例・反比例を式とグラフで表す。',
          objectives: [
            '変化し合う2つの量の中に、比例・反比例の関係があることを見いだす',
            '比例・反比例を表・式・グラフで表現し相互に読み取る',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '変化し合う2つの量' },
            {
              type: 'text',
              content: 'x が変わると y も変わるとき、y は x の**関数**であるといいます。中学1年では、その中で特に大切な2つの関係を学びます。',
            },
            { type: 'heading', level: 3, content: '比例 $y = ax$' },
            {
              type: 'list',
              items: [
                'x が 2 倍、3 倍になると y も 2 倍、3 倍になる',
                'x と y の**比（商）が一定**: $y \\div x = a$',
                'グラフは**原点を通る直線**',
              ],
            },
            { type: 'formula', tex: 'y = ax \\quad (a \\text{ は比例定数})', display: true },
            { type: 'heading', level: 3, content: '反比例 $y = \\dfrac{a}{x}$' },
            {
              type: 'list',
              items: [
                'x が 2 倍になると y は 1/2 倍になる',
                'x と y の**積が一定**: $xy = a$',
                'グラフは**双曲線**（原点を通らない）',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'x と y が反比例し、$x = 3$ のとき $y = 8$ である。(1) y を x の式で表せ。(2) $x = 4$ のときの y の値を求めよ。',
              answer: '(1) $xy = 24$ より $y = \\dfrac{24}{x}$　(2) $y = 6$',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '「商が一定か積が一定か」を見分けるのが最初の一歩。速さと時間（積一定）は反比例、単価と個数（積一定＝総額一定）も反比例です。',
            },
            {
              type: 'widget',
              widget: {
                id: 'function-grapher',
                caption: 'プレイグラウンド: a を動かすと直線 y = ax の傾きが変わります（種類を sin に切り替えると高校内容の予習にもなります）',
                props: { kind: 'poly', a: 1, b: 0, c: 0 },
              },
            },
          ],
        },
      ],
    },
    // ---------- 中学2年: 式と連立方程式 ----------
    {
      id: 'j2-algebra',
      name: '式の計算と連立方程式（中学2年）',
      gakushuShidoYoryo: '内容「数と式」式の計算、「方程式」連立方程式',
      lessons: [
        {
          id: 'linear-equations',
          title: '連立方程式',
          summary: '2つの文字を含む方程式を2つ組み合わせて解く。',
          objectives: [
            '連立方程式の意味を理解し、代入法・加減法で解ける',
            '連立方程式を数量の問題に活用できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '連立方程式とは' },
            {
              type: 'text',
              content: '2つの文字 x, y を含む2つの方程式を組み合わせたものを**連立方程式**といい、すべての式を同時に満たす x, y の値の組を**解**といいます。',
            },
            { type: 'formula', tex: '\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}', display: true },
            { type: 'heading', level: 3, content: '加減法と代入法' },
            {
              type: 'text',
              content: '**加減法**：式どうしをたしたりひいたりして文字を1つ消す。**代入法**：一方の式を y = … の形にして他方に代入する。係数がそろう（またはそろえられる）ときは加減法が速い。',
            },
            {
              type: 'example',
              title: '例題（加減法）',
              body: '上の連立方程式を解け。',
              answer: 'たすと $3x = 9$、$x = 3$。①に代入して $y = 1$。**解は $(x, y) = (3, 1)$**',
            },
            { type: 'heading', level: 3, content: '幾何的な意味：2直線の交点' },
            {
              type: 'text',
              content: '連立方程式の解は、2つの直線のグラフの**交点の座標**に対応します。解がない＝2直線が平行、解が無数にある＝2直線が一致、です。',
            },
            {
              type: 'widget',
              widget: {
                id: 'linear-system',
                caption: 'プレイグラウンド: 係数を動かすと2直線の交点（＝解）がどう動くか観察できます',
              },
            },
            {
              type: 'example',
              title: '例題（応用：割合の問題）',
              body: '濃度 10% の食塩水と濃度 30% の食塩水を混ぜて、濃度 15% の食塩水 200 g を作りたい。それぞれ何 g ずつ混ぜればよいか。',
              answer: '10% を x g、30% を y g とすると $\\begin{cases} x + y = 200 \\\\ 0.1x + 0.3y = 0.15 \\times 200 \\end{cases}$。解いて **x = 150, y = 50**',
            },
          ],
        },
      ],
    },
    // ---------- 中学3年: 二次関数・図形 ----------
    {
      id: 'j3-quadratic',
      name: '二次関数（中学3年）',
      gakushuShidoYoryo: '内容「関数」(1) 二次関数とそのグラフ、(2) 変化の割合',
      lessons: [
        {
          id: 'quadratic-function',
          title: '二次関数とグラフ',
          summary: 'y = ax²、y = a(x−p)² + q のグラフの性質を学ぶ。',
          objectives: [
            '二次関数の意味を理解し、グラフをかける',
            '頂点・軸・変域を読み取り、グラフの平行移動を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '二次関数' },
            {
              type: 'text',
              content: '$y$ が $x$ の二次式で表される関数を**二次関数**といいます。グラフは**放物線**と呼ばれる曲線になります。',
            },
            { type: 'formula', tex: 'y = ax^2, \\qquad y = a(x - p)^2 + q', display: true },
            {
              type: 'table',
              headers: ['式', '頂点', '軸'],
              rows: [
                ['$y = ax^2$', '$(0, 0)$', '$x = 0$（y軸）'],
                ['$y = a(x - p)^2 + q$', '$(p,\\ q)$', '$x = p$'],
              ],
            },
            {
              type: 'text',
              content: '次の図のように、放物線を平行移動するだけで新しい式が得られます。'},
            { type: 'diagram', diagram: 'parabola-translate', caption: '放物線の平行移動: y = ax² → y = a(x−p)² + q' },
            {
              type: 'text',
              content: '$y = ax^2$ のグラフを **x 軸方向に p、y 軸方向に q** だけ平行移動すると $y = a(x-p)^2 + q$ になります。これが「頂点の形」が便利な理由です。',
            },
            {
              type: 'widget',
              widget: {
                id: 'quadratic-explorer',
                caption: 'プレイグラウンド: a, p, q を動かして頂点・軸・x切片の変化を確かめよう',
              },
            },
            { type: 'heading', level: 3, content: '例題' },
            {
              type: 'example',
              title: '例題 1',
              body: '二次関数 $y = 2(x - 3)^2 - 5$ のグラフの頂点の座標と軸の方程式を求めよ。',
              answer: '頂点 $(3, -5)$、軸 $x = 3$',
            },
            {
              type: 'example',
              title: '例題 2',
              body: '頂点が $(-1, 4)$ で、点 $(1, -4)$ を通る放物線の式を求めよ。',
              answer: '$y = a(x+1)^2 + 4$ に $(1, -4)$ を代入: $-4 = 4a + 4$、$a = -2$。よって $y = -2(x+1)^2 + 4$',
            },
            {
              type: 'note',
              variant: 'warn',
              content: 'x軸との共有点の個数は a の符号と判別式で決まります（高校で学ぶ判別式 $D = b^2 - 4ac$ の芽生え）。',
            },
          ],
        },
      ],
    },
    // ---------- 中学3年: 図形 ----------
    {
      id: 'j3-geometry',
      name: '図形の性質と計量（中学3年）',
      gakushuShidoYoryo: '内容「図形」(1) 円周角の定理、(2) 三平方の定理',
      lessons: [
        {
          id: 'pythagorean',
          title: '三平方の定理',
          summary: '直角三角形の辺の長さの関係を学び、長さの計算に活用する。',
          objectives: [
            '三平方の定理を理解し証明できる',
            '直角三角形の辺の長さを求める計算に使える',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '定理' },
            { type: 'formula', tex: 'a^2 + b^2 = c^2 \\quad (c \\text{ は斜辺})', display: true },
            {
              type: 'text',
              content: '直角をはさむ2辺の**正方形の面積の和**が、斜辺の正方形の面積と等しい、というのが幾何的な意味です。次の図で「赤＋緑＝青」が成り立つことを確認しましょう。',
            },
            { type: 'diagram', diagram: 'pythagorean-squares', caption: '三平方の定理: 各辺上の正方形の面積の関係（a=3, b=4, c=5）' },
            {
              type: 'widget',
              widget: { id: 'triangle-solver', caption: 'プレイグラウンド: a, b を動かすと c² = a² + b² が成り立つ様子が見られます' },
            },
            {
              type: 'text',
              content: '有名な**整数解（ピタゴラス数）**：(3, 4, 5), (5, 12, 13), (8, 15, 17)。テストの計算ではこれらが頻出です。',
            },
            {
              type: 'example',
              title: '例題',
              body: '底辺 8 cm、高さ 3 cm の二等辺三角形の、等しい辺の長さを求めよ。',
              answer: '頂点から底辺へ垂線を下ろすと半分に分かれる。$4^2 + 3^2 = 25$ より **5 cm**',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '空間図形でも使えます。直方体の対角線の長さは $\\sqrt{a^2 + b^2 + c^2}$（定理の空間への拡張）。',
            },
          ],
        },
      ],
    },
  ],
};
