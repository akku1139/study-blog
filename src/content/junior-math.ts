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
            { type: 'heading', level: 3, content: '小ネタ: フラッシュ暗算' },
            {
              type: 'widget',
              widget: {
                id: 'flash-anzan',
                caption: 'フラッシュ暗算: 数字を一瞬ずつ見て合計を答える。マイナスまぜモードで正負の数の練習にも',
                props: { negatives: true },
              },
            },
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
            { type: 'heading', level: 3, content: '練習（指数法則）' },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 指数法則の計算がランダムに出題されます。積・累乗・商の規則を区別して答えよう',
                props: { topic: 'exponent-laws' },
              },
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
            { type: 'heading', level: 3, content: '発展：解の個数とグラフの位置関係' },
            {
              type: 'text',
              content:
                '$\\begin{cases} ax + by = c \\\\ a\'x + b\'y = c\'. \\end{cases}$ の解の個数は、2 直線 $ax+by=c$, $a\'x+b\'y=c\'$ の位置関係そのものです。傾き $-a/b$ を比べると次のように読み取れます。',
            },
            {
              type: 'list',
              items: [
                '$a b\' - a\' b \\neq 0$: 傾きが異なる → **交点 1 つ**（解はただ 1 つ）',
                '$a b\' - a\' b = 0$ かつ切片が異なる → **平行**（解なし）',
                '係数がすべて比例 → **一致**（解は無数にある）',
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: 'この見方は高校数学の「連立不等式と領域」「ベクトルの一次独立性」にも直接つながります。「式 2 本が直線 2 本」という対応を意識しておくと後で楽です。',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '$\\begin{cases} x + 2y = 7 \\\\ 3x - y = 7 \\end{cases}$ を解け。',
                  hint: '②を $y = 3x - 7$ として①に代入（代入法）か、②×2 ＋ ①（加減法）。',
                  answer: '②×2 ＋① より $7x = 21$、**x = 3, y = 2**',
                },
                {
                  body: '$\\begin{cases} \\dfrac{1}{2}x - \\dfrac{1}{3}y = \\dfrac{2}{3} \\\\ 2x + 3y = 20 \\end{cases}$ を解け。（まず分数を整数に）',
                  hint: '①×6 で $3x - 2y = 4$。加減法へ。',
                  answer: '①×3 ＋ ②×2 より $13x = 52$、**x = 4, y = 4**',
                },
                {
                  body: 'ある 2 桁の整数は、十の位と一の位の数字の和が 11 で、位を入れ替えるともとの数より 27 小さくなる。もとの数を求めよ。',
                  hint: '十の位を x、一の位を y として $x + y = 11$, $(10x + y) - (10y + x) = 27$',
                  answer: '$x - y = 3$ と $x + y = 11$ より **74**',
                },
                {
                  body: 'A さんは時速 4 km、B さんは時速 6 km で、距離 5 km 離れた 2 地点から向かい合って同時に出発した。2 人が出会うまで何分か。',
                  hint: '向かい合う場合は「速さの和」で近づく。$(4 + 6) \\times t = 5$',
                  answer: '$t = 0.5$ 時間＝ **30 分**',
                },
              ],
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 連立方程式がランダムに生成されます。解き終わったら「答えを見る」で採点しよう',
                props: { topic: 'simultaneous-linear' },
              },
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
            { type: 'heading', level: 3, content: '発展：平方完成——一般形を頂点の形へ' },
            {
              type: 'text',
              content:
                '$y = ax^2 + bx + c$ の形でも、**たすきがけ的に変形（平方完成）**すれば頂点が読み取れます。高校では式変形でやりますが、中学でも「$x = -\\dfrac{b}{2a}$ で頂点」という結果を使えます。実際に確認してみましょう。',
            },
            { type: 'formula', tex: 'y = ax^2 + bx + c \\quad \\text{の頂点} \\quad \\left( -\\frac{b}{2a},\\; \\frac{4ac - b^2}{4a} \\right)', display: true },
            {
              type: 'example',
              title: '発展例題',
              body: '$y = x^2 - 6x + 1$ のグラフの頂点を求めよ。（$x^2 - 6x$ を $(x - 3)^2 - 9$ と見立てる）',
              answer: '$y = (x - 3)^2 - 9 + 1 = (x-3)^2 - 8$ より頂点 **$(3, -8)$**。公式 $(-b/2a, \\cdot) = (3, \\cdot)$ とも一致',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '放物線 $y = -2(x + 4)^2 + 3$ の頂点の座標と軸の方程式を求めよ。',
                  hint: '$(x + 4)^2 = (x - (-4))^2$ と読み替える。',
                  answer: '頂点 **$(-4, 3)$**、軸 **$x = -4$**',
                },
                {
                  body: '放物線 $y = 3x^2$ を x 軸方向に $-2$、y 軸方向に $5$ だけ平行移動したグラフの式を求めよ。',
                  answer: '$y = 3(x + 2)^2 + 5$',
                },
                {
                  body: '頂点が $(2, -1)$ で点 $(0, 3)$ を通る放物線の式を求めよ。',
                  hint: '$y = a(x - 2)^2 - 1$ とおいて点を代入する。',
                  answer: '$3 = a(0 - 2)^2 - 1 \\Rightarrow a = 1$。よって **$y = (x - 2)^2 - 1$**',
                },
                {
                  body: '$y = x^2 + 4x + 7$ を平方完成し、最小値を求めよ。（発展）',
                  hint: '$x^2 + 4x = (x + 2)^2 - 4$。',
                  answer: '$y = (x + 2)^2 + 3$ より **最小値 3（x = −2 のとき）**',
                },
              ],
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 二次方程式がランダムに出題されます。因数分解で解いてみよう',
                props: { topic: 'quadratic-equation' },
              },
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '激ムズ無限ドリル（発展）: たすきがけの因数分解。二次方程式の解法の土台です',
                props: { topic: 'factorize' },
              },
            },
          ],
        },
      ],
    },
    // ---------- 中学2年〜3年: 図形の証明と相似 ----------
    {
      id: 'j23-similarity',
      name: '図形の証明と相似（中学2〜3年）',
      gakushuShidoYoryo: '内容「図形」: 証明の意義と方法、相似な図形、相似比と面積比・体積比',
      lessons: [
        {
          id: 'proof-triangles',
          title: '三角形の合同条件と証明の書き方',
          summary: '仮定・結論を区別し、根拠（定理）を挙げて証明文を書く。',
          objectives: [
            '三角形の合同条件を使って合同を証明できる',
            '仮定・結論・根拠を明示した証明文を書ける',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '証明のかたち' },
            {
              type: 'text',
              content: '証明は **① 仮定で何が与えられているか → ② 何を導きたいか（結論）→ ③ 使う定理（根拠）** をそろえて書きます。「〜だから、…である」という一歩ごとの論理に、必ず**根拠となる定理の名前**を添えるのがルールです。',
            },
            { type: 'heading', level: 3, content: '三角形の合同条件' },
            {
              type: 'table',
              headers: ['条件', '内容'],
              rows: [
                ['2組の辺とそのはさむ角', 'ASA / SAS に相当'],
                ['2組の角とはさむ辺', 'AAS に相当'],
                ['3組の辺', 'SSS'],
              ],
            },
            {
              type: 'note',
              variant: 'warn',
              content: '「2組の角と1組の辺」でも対応する位置関係が正しければ合同ですが、「3組の角」では合同とはいえません（大きさが違うだけで相似になってしまう）。',
            },
            { type: 'heading', level: 3, content: '証明の手順' },
            {
              type: 'list',
              ordered: true,
              items: [
                '図の中で**等しいものに印をつける**（等角には弧、等辺には目盛）',
                '**使える条件を列挙**する（対頂角・平行線の同位角など）',
                'どの合同条件で結ぶか決めて、**記号 ⊿≡△ を使って**書く',
                '最後に「よって、…である」で結論を言い切る',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'AB = AC の二等辺三角形 ABC で、BC 上に BD = CE となる点 D, E をとると、△ABD ≡ △ACE を証明せよ。',
              answer: '① AB = AC（仮定）、② ∠B = ∠C（二等辺三角形の2つの底角）、③ BD = CE（仮定）。よって **1組の辺と両端の角で △ABD ≡ △ACE**。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '平行線の錯角・同位角は、どちらも「どこが等しい」ことを主張しているか。',
                  answer: '**角の大きさ**。平行線がつくる同位角・錯角は等しくなるので、証明の中で角度の等式を導く基本ツールになる。',
                },
                {
                  body: '「3組の角がそれぞれ等しい」だけでは合同といえない理由を、具体例で説明せよ。',
                  hint: '同じ形でも大きさが違う図形を考える。',
                  answer: 'たとえば**拡大縮小した2つの正三角形**は角はすべて60°で等しいが、辺の長さが違うため合同ではない。このような「形は同じ・大きさが違う」関係を**相似**という。',
                },
              ],
            },
          ],
        },
        {
          id: 'similarity-ratio',
          title: '相似な図形と面積比・体積比',
          summary: '相似比から対応する長さ・面積・体積を求める。',
          objectives: [
            '相似条件で2つの図形の相似を確認できる',
            '相似比から面積比・体積比を計算できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '相似比' },
            {
              type: 'text',
              content: '相似な2つの図形では、**対応する辺の比＝対応する高さの比＝相似比**。そして次の重要な関係が成り立ちます。',
            },
            { type: 'formula', tex: '\\text{面積比} = (\\text{相似比})^2, \\qquad \\text{体積比} = (\\text{相似比})^3', display: true },
            {
              type: 'derivation',
              title: 'なぜ面積は2乗、体積は3乗になるのか',
              steps: [
                {
                  label: 'Step 1: 長さが k 倍の長方形',
                  tex: '\\text{たて } a \\to ka, \\quad \\text{よこ } b \\to kb',
                  note: '相似比 k の拡大では、すべての「長さ」が等倍率で伸びる。',
                },
                {
                  label: 'Step 2: 面積を計算',
                  tex: '(ka)(kb) = k^2 ab',
                  note: '縦と横、**2つの長さの積**なので k² 倍。三角形でも同じ（底辺×高さ÷2 の両方が k 倍）。',
                },
                {
                  label: 'Step 3: 体積は「3つの長さの積」',
                  tex: '(ka)(kb)(kc) = k^3 abc',
                  note: '直方体ならたて×よこ×高さ。だから体積比は相似比の3乗になる。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '相似な2つの立体の体積比が $8 : 27$ のとき、相似比と表面積比を求めよ。',
              answer: '$\\sqrt[3]{8} : \\sqrt[3]{27} = $ **$2 : 3$**（相似比）。表面積比は $2^2 : 3^2 =$ **$4 : 9$**。',
            },
            { type: 'heading', level: 3, content: 'パップスの定理（相似な三角形をつくる）' },
            {
              type: 'text',
              content: '三角形 ABC の辺 BC 上に点 P をとり、P から AB, AC へ垂線 PM, PN を下ろすとき、**△PMB と △PNC が相似**になる性質は、長さの計算によく使われます。また、三角形の内部に線分を引いてできる小三角形が元の三角形と相似になる状況は頻出です。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '相似比 $3 : 5$ の2つの三角形の面積比を求めよ。',
                  answer: '$3^2 : 5^2 = $ **$9 : 25$**',
                },
                {
                  body: '相似な2つの円錐の母線の長さの比が $2 : 3$ のとき、側面積の比と体積比を求めよ。',
                  hint: '面積は相似比の2乗、体積は3乗。',
                  answer: '側面積比 $=$ **$4 : 9$**、体積比 $=$ **$8 : 27$**',
                },
                {
                  body: '地図上の縮尺 1/25000 で、地図上の距離 4 cm の実際の距離を求めよ。',
                  answer: '$4 \\times 25000 = 100000$ cm $=$ **1 km**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（相似）',
              questions: [
                {
                  question: '相似な2つの図形で、相似比が 1 : 3 のとき面積比は？',
                  choices: ['1 : 3', '1 : 6', '1 : 9'],
                  answerIndex: 2,
                  explanation: '面積は相似比の**2乗**なので 1 : 9。',
                },
                {
                  question: '相似な2つの球の体積比が 64 : 125 のとき、半径の比は？',
                  choices: ['4 : 5', '8 : 25', '16 : 25'],
                  answerIndex: 0,
                  explanation: '体積比の立方根が相似比。$\\sqrt[3]{64} : \\sqrt[3]{125}$ より **4 : 5**。',
                },
                {
                  question: '三角形の中に底辺と平行な線分を引いたとき、できる小三角形と元の三角形の関係は？',
                  choices: ['相似', '合同', 'どちらでもない'],
                  answerIndex: 0,
                  explanation: '平行線と同位角が等しいことから3組の角が等しくなり**相似**になります（一般に大きさは異なる）。',
                },
              ],
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
              type: 'derivation',
              title: '三平方の定理の証明——正方形の組み替えで見る',
              steps: [
                {
                  label: 'Step 1: 大きな正方形を用意する',
                  tex: '\\text{一辺 } (a+b) \\text{ の正方形}',
                  note: 'この中に、直角三角形（a, b, c）を4つ、隙間なく c をはさむように置く。',
                },
                {
                  label: 'Step 2: 配置その1 — 内側に c² の正方形',
                  tex: '\\text{全体} = 4 \\times \\frac{ab}{2} + c^2',
                  note: '内側にできるのは一辺 c の正方形（直角三角形4枚＋それ）。',
                },
                {
                  label: 'Step 3: 配置その2 — 同じ正方形を別の切り方で',
                  tex: '\\text{全体} = 4 \\times \\frac{ab}{2} + a^2 + b^2',
                  note: '今度は三角形を2つずつペアにして長方形に見ると、残りが a² と b² の2つの正方形になる。',
                },
                {
                  label: 'Step 4: 等置して整理',
                  tex: '4 \\cdot \\frac{ab}{2} + c^2 = 4 \\cdot \\frac{ab}{2} + a^2 + b^2 \\;\\Rightarrow\\; c^2 = a^2 + b^2',
                  note: '同じ大きさの正方形を2通りに分けたにすぎないので等しい。「図を動かしただけで定理が従う」有名な証明です。',
                },
              ],
            },
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
    // ---------- 中学3年〜高校接続: 確率と標本調査 ----------
    {
      id: 'j3-probability',
      name: '確率と標本調査（中学3年→数学Aへの橋渡し）',
      gakushuShidoYoryo: '内容「資料の活用」: 事象の場合の数、確率、標本調査の考え方',
      lessons: [
        {
          id: 'probability-basics',
          title: '確率',
          summary: '場合の数を数えて、起こりやすさを数値で表す。',
          objectives: [
            '樹形図・表を使って場合の数を正確に数えられる',
            '確率を求め、全事象との関係で説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '確率の定義' },
            { type: 'formula', tex: 'P = \\frac{\\text{ある事象が起こる場合の数}}{\\text{すべての場合の数}} \\quad (0 \\le P \\le 1)', display: true },
            {
              type: 'text',
              content: '**すべての場合が同じくらい起こりやすい**ことが条件です。サイコロの出目などが代表例。「少なくとも1つ」は**余事象（1から引く）**で考えるのが定石です。',
            },
            { type: 'heading', level: 3, content: '同時に/続けて取り出す' },
            {
              type: 'list',
              items: [
                '**同時**に2個取り出す ＝ **続けて**2個取り出して戻さない（組み合わせ）',
                '戻してから引く場合は、1回ごとに全数が復元される',
                '**樹形図**で全部書き出し、どの枝も等確率か確認する',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '白玉4個・赤玉2個が入った袋から同時に2個取り出す。2個とも白である確率を求めよ。',
              answer: '全体は $\\binom{6}{2} = 15$ 通り。白2個は $\\binom{4}{2} = 6$ 通り。よって $P = \\dfrac{6}{15} = \\dfrac{2}{5}$',
            },
            {
              type: 'example',
              title: '例題（余事象）',
              body: 'サイコロを2回投げるとき、少なくとも1回 4 以上の目が出る確率を求めよ。',
              answer: '余事象は「両方とも 3 以下」＝ $3^2 = 9$ 通り / 全体 $36$。$P = 1 - \\dfrac{9}{36} = \\dfrac{27}{36} = \\dfrac{3}{4}$',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '1, 2, 3 の数字カードが1枚ずつ入った袋から、続けて2回引いて戻すとき、2枚とも偶数になる確率を求めよ。ただし偶数は 2 のみ。',
                  hint: '1回ごとに全数は 3 枚に戻る。',
                  answer: '$\\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{1}{9}$',
                },
                {
                  body: '上の問題で、**戻さずに**2枚引くとき、2枚とも偶数になる確率は？（偶数は 2 のみ）',
                  answer: '偶数が1枚しかないため2枚とも偶数は不可能。**0**',
                },
                {
                  body: '10 本のくじのうち当たりが 3 本。これを A, B の順に引くとき、B が当たる確率を求めよ。',
                  hint: 'A の結果で場合分けする。',
                  answer: '$\\dfrac{3}{10} \\times \\dfrac{2}{9} + \\dfrac{7}{10} \\times \\dfrac{3}{9} = \\dfrac{6+21}{90} = $ **$\\dfrac{3}{10}$**。くじは引く順番によらず公平。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '小ネタ: ガルトン板' },
            {
              type: 'widget',
              widget: {
                id: 'galton-board',
                caption: 'ガルトン板: 釘に当たって落ちる玉の分布が二項分布→正規分布に近づく様子を見よう',
              },
            },
          ],
        },
        {
          id: 'sampling-survey',
          title: '標本調査と統計的な見方',
          summary: '母集団から標本を取り出し、傾向を推測する統計の基本。',
          objectives: [
            '標本調査の意味と、偏りのない標本の選び方を説明できる',
            '標本での割合から母集団の量を推測できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '標本調査のしくみ' },
            {
              type: 'text',
              content: '調べたい対象全体を**母集団**、実際に調べる一部を**標本**といいます。全部は調べられないとき（魚の総数、製品の不良率など）、標本から母集団の性質を**推測**します。',
            },
            { type: 'formula', tex: '\\text{標本での割合} \\approx \\text{母集団での割合}', display: true },
            {
              type: 'list',
              items: [
                '**無作為（ランダム）に選ぶ**: 偏りがあると推測も歪む',
                '**標本が大きいほど**推測の精度は上がる',
                '推測は「約〜」という**概算**であり、断言ではない',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '池の魚 60 匹に印をつけて放した。数日後にもう一度 50 匹捕まえたところ印付きが 10 匹いた。池の魚の総数を推測せよ（標識再捕法）。',
              answer: '印付きの割合 $\\dfrac{60}{x} \\approx \\dfrac{10}{50}$ を解いて $x = $ **300 匹**',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '工場の製品 500 個の中から無作為に 40 個調べたら不良品が 2 個だった。全製品に含まれる不良品の数を推測せよ。',
                  hint: '不良率 $\\dfrac{2}{40}$ を全体に掛ける。',
                  answer: '$500 \\times \\dfrac{2}{40} = $ **約 25 個**',
                },
                {
                  body: '「自分の学校の生徒」を母集団とするとき、「近くのクラスだけ」を調べる方法の弱点は？',
                  answer: '**偏り（バイアス）**。クラスごとに特徴が出るため、母集団を代表できない。無作為抽出が必要。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（統計）',
              questions: [
                {
                  question: '標本調査で最も大切なことは何か。',
                  choices: ['無作為に抽出すること', '一番多い意見を選ぶこと', '数が多いところだけ調べること'],
                  answerIndex: 0,
                  explanation: '無作為抽出でないと標本に偏りが出て、母集団の推測が不正確になります。',
                },
                {
                  question: 'ヒストグラムから読み取れることはどれか。',
                  choices: ['データの分布のようす', 'データの並び方（順序）', '各データの誤差'],
                  answerIndex: 0,
                  explanation: '度数分布表を柱状グラフにしたものがヒストグラムで、データのばらつきや山の位置がわかります。',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'jm-extension',
      name: '発展（グラフの読み方・確率の応用・図形の移動）',
      gakushuShidoYoryo: '内容「関数」「データの活用」「図形」の発展的内容。既存単元の理解を深める詳細レッスン。',
      lessons: [
        {
          id: 'proportional-graphs-detail',
          title: '比例・反比例のグラフと式の読み方（詳細版）',
          summary: '式とグラフを行き来して読み替える。係数 a の読み取り、双曲線の性質、直線と双曲線の判定法を習得する。',
          objectives: [
            'グラフ上の1点の座標から比例・反比例の式を求めることができる',
            '反比例のグラフで「点と両軸で囲まれる長方形の面積が一定」であることを説明できる',
            '点の座標の組から、それが比例・反比例のどちらのグラフ上にあるかを判定できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '式とグラフを行き来する' },
            {
              type: 'text',
              content: '比例 $y = ax$ のグラフは**原点を通る直線**、反比例 $y = \\dfrac{a}{x}$ のグラフは**原点に対称な双曲線**です。このレッスンでは「式からグラフの形を予想する」と「グラフから式を読み取る」という双方向の読み替えを徹底的に練習します。グラフ上の点の座標が1つわかれば、係数 $a$ はただ1つに決まることが鍵になります。',
            },
            {
              type: 'table',
              headers: ['項目', '比例 $y = ax$', '反比例 $y = \\dfrac{a}{x}$'],
              rows: [
                ['グラフの形', '原点を通る直線', '原点対象の双曲線'],
                ['$a > 0$ のときの位置', '第1・第3象限', '第1・第3象限'],
                ['$a < 0$ のときの位置', '第2・第4象限', '第2・第4象限'],
                ['変化のようす', '$y \\div x$ が一定（等比的に増減）', '$x \\times y$ が一定（片方が増えると片方は減る）'],
                ['$x$ の範囲', '0 を含むすべての値', '$x \\neq 0$（原点は通らない）'],
              ],
            },
            { type: 'formula', tex: 'y = ax, \\qquad y = \\dfrac{a}{x}', display: true },
            { type: 'heading', level: 3, content: 'グラフから式を読み取る' },
            {
              type: 'text',
              content: 'グラフ上の点 $P(p, q)$ がわかれば、比例なら $a = q \\div p$、反比例なら $a = p \\times q$ と計算するだけで式が確定します。点が2つ以上与えられた場合でも、どちらの点を使って計算しても同じ $a$ になります。これは「2つの点が同じグラフ上にある」ことの裏返しであり、グラフの一致性の判定にも使えます。',
            },
            { type: 'formula', tex: 'P(p,\\ q) \\text{ on the graph} \\implies a = \\dfrac{q}{p} \\ \\text{(proportional)}, \\quad a = pq \\ \\text{(inverse)}', display: true },
            {
              type: 'derivation',
              title: '反比例のグラフと長方形の面積——なぜ「かけると一定」なのか',
              steps: [
                {
                  label: 'Step 1: グラフ上の点を式に代入する',
                  tex: 'P(p,\\ q) \\in y = \\dfrac{a}{x} \\implies q = \\dfrac{a}{p}',
                  note: 'グラフ上の点は必ず式を満たします。これがすべての出発点です。',
                },
                {
                  label: 'Step 2: 両辺に p を掛ける',
                  tex: 'p q = a',
                  note: '点 $P$ と $x$ 軸・$y$ 軸で囲まれる長方形の面積は縦横 $p \\times q$ なので、その面積は常に $a$ と一致します。',
                },
                {
                  label: 'Step 3: 別の点でも同じ',
                  tex: 'P_2(p_2,\\ q_2) \\text{ on the curve} \\implies p_2 q_2 = a',
                  note: 'どこで切り取っても面積 $a$ の長方形が作れます。',
                },
                {
                  label: 'Step 4: 結論',
                  tex: '\\text{area} = |a| \\quad (a < 0 \\text{ のときは第2・第4象限})',
                  note: '双曲線とは「面積 $|a|$ の長方形の頂点を滑らかにつないだ軌跡」なのです。この性質は入試でも頻出です。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題 1',
              body: '反比例のグラフが点 $(3, -6)$ を通るとき、このグラフの式を求めよ。また、点 $(-2, k)$ がこのグラフ上にあるとき、$k$ の値を求めよ。',
              answer: '$a = 3 \\times (-6) = -18$ なので $y = -\\dfrac{18}{x}$。$k = -18 \\div (-2) =$ **$9$**',
            },
            { type: 'heading', level: 3, content: '直線か双曲線かを見分ける判定法' },
            {
              type: 'text',
              content: '与えられた点たちが「比例のグラフ」か「反比例のグラフ」か迷ったら、座標の組ごとに2つの値を計算して比べます。$y \\div x$ がどの点でも等しければ比例、$x \\times y$ がどの点でも等しければ反比例です。どちらも一定にならなければ、その点たちは同じ直線・双曲線の上にはありません。この判定は表形式で出題されると特に有効です。',
            },
            {
              type: 'table',
              headers: ['点の与えられ方', '計算方法', '結論'],
              rows: [
                ['$y \\div x$ を各点で比較', '商がすべて等しい', '比例 $y = ax$ のグラフ上'],
                ['$x \\times y$ を各点で比較', '積がすべて等しい', '反比例 $y = \\dfrac{a}{x}$ のグラフ上'],
                ['商も積も一定でない', '両方を確認して不一致', 'どちらのグラフにも載らない'],
              ],
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '比例のグラフが点 $(-4, 10)$ を通るとき、このグラフの式を求めよ。',
                  hint: '$a = y \\div x$ を計算する。',
                  answer: '$a = 10 \\div (-4) = -\\dfrac{5}{2}$、よって $y = -\\dfrac{5}{2}x$',
                },
                {
                  body: '反比例 $y = \\dfrac{a}{x}$ のグラフが点 $(6, -2)$ を通る。(1) $a$ の値 (2) 点 $(-3, k)$ における $k$ の値を求めよ。',
                  answer: '(1) $a = -12$　(2) $k = -12 \\div (-3) = $ **$4$**',
                },
                {
                  body: '双曲線 $y = \\dfrac{16}{x}$ 上の点 $P(2, 8)$ と、$x$ 軸・$y$ 軸で囲まれる長方形の面積を求めよ。',
                  hint: '長方形の面積は $x \\times y$。',
                  answer: '$2 \\times 8 = $ **$16$**（係数 $a$ と一致する）',
                },
                {
                  body: '点 $(2, 6)$ を通る比例の直線と、同じ点を通る反比例の双曲線のもう1つの共有点を求めよ。',
                  hint: '連立すると $3x^2 = 12$。',
                  answer: '$y = 3x$ と $xy = 12$ から $3x^2 = 12$、$x = \\pm 2$。もう1点は **$(-2, -6)$**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '反比例 $y = \\dfrac{12}{x}$ のグラフがある象限はどれか。',
                  choices: ['第1・第3象限', '第2・第4象限', 'すべての象限を通る'],
                  answerIndex: 0,
                  explanation: '$a = 12 > 0$ なので $x > 0$ で $y > 0$（第1象限）、$x < 0$ で $y < 0$（第3象限）です。',
                },
                {
                  question: '点 $(4, 3)$ は次のどのグラフ上にあるか。',
                  choices: ['$y = \\dfrac{12}{x}$', '$y = 12x$', 'どちらでもない'],
                  answerIndex: 0,
                  explanation: '$4 \\times 3 = 12$ なので反比例 $y = 12/x$ の上にあります。$3 \\div 4 \\neq 12$ なので直線ではありません。',
                },
                {
                  question: '比例 $y = ax$ のグラフ上の点 $P(p, q)$ について、常に成り立つ关系はどれか。',
                  choices: ['$pq$ が一定', '$\\dfrac{q}{p}$ が一定', '$p + q$ が一定'],
                  answerIndex: 1,
                  explanation: '比例では商 $q \\div p = a$ が一定（変化の割合）です。積が一定なのは反比例です。',
                },
              ],
            },
          ],
        },
        {
          id: 'probability-applications',
          title: '確率の応用——サイコロ2個と余事象',
          summary: 'サイコロ2個の和・積の確率を場合の数の表で整理し、「少なくとも」の問題は余事象で解き分ける技法を学ぶ。',
          objectives: [
            'サイコロ2個の結果を順序付きの組として数え、全事象が36通りであることを説明できる',
            '和・積に関する事象の確率を表を使って正しく求めることができる',
            '余事象の公式を使い、「少なくとも1つ」の問題を効率的に解くことができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'サイコロ2個——場合の数は36通り' },
            {
              type: 'text',
              content: 'サイコロ2個を投げるとき、結果は「1個目の出目 $a$、2個目の出目 $b$」の順序付きの組 $(a, b)$ で表します。$(1, 2)$ と $(2, 1)$ は違う結果として数えるのがポイントで、こうすると全事象は $6 \\times 6 = 36$ 通りになり、どの組も同様に確からしい（各 $\\dfrac{1}{36}$）と言えます。和や積のような「まとまった量」に注目した確率は、表を作って場合の数を数えるのが確実です。',
            },
            { type: 'formula', tex: '|S| = 6 \\times 6 = 36, \\qquad P((a, b)) = \\dfrac{1}{36}', display: true },
            {
              type: 'table',
              headers: ['和', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              rows: [
                ['場合の数', '1', '2', '3', '4', '5', '6', '5', '4', '3', '2', '1'],
                ['確率', '$\\tfrac{1}{36}$', '$\\tfrac{2}{36}$', '$\\tfrac{3}{36}$', '$\\tfrac{4}{36}$', '$\\tfrac{5}{36}$', '$\\tfrac{6}{36}$', '$\\tfrac{5}{36}$', '$\\tfrac{4}{36}$', '$\\tfrac{3}{36}$', '$\\tfrac{2}{36}$', '$\\tfrac{1}{36}$'],
              ],
            },
            {
              type: 'derivation',
              title: '和が7になる確率——重複なく漏れなく数える',
              steps: [
                {
                  label: 'Step 1: 全事象を順序付きの組で書く',
                  tex: '(a, b), \\quad a, b \\in \\{1, 2, 3, 4, 5, 6\\} \\implies |S| = 36',
                  note: '$(1, 2)$ と $(2, 1)$ は別の結果。順序を区別することが「同様に確からしい」を正しく使う条件です。',
                },
                {
                  label: 'Step 2: 和が7の組を列挙する',
                  tex: 'a + b = 7 \\implies (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)',
                  note: '$a$ を1から順に固定すれば $b$ は自動的に決まるので、数え落としや重複が起きません。',
                },
                {
                  label: 'Step 3: 確率を計算する',
                  tex: 'P(a + b = 7) = \\dfrac{6}{36} = \\dfrac{1}{6}',
                  note: '場合の数の比がそのまま確率になります。',
                },
                {
                  label: 'Step 4: 表の山の頂点',
                  tex: '\\max_{k} P(a + b = k) = P(a + b = 7) = \\dfrac{1}{6}',
                  note: '表が山型になり、真ん中の和7が最も起こりやすい。この非対称さが「7の法則」として知られています。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '余事象——「少なくとも1つ」は引いて求める' },
            {
              type: 'text',
              content: '「少なくとも1つは〜」という事象を直接数えると、1個だけ該当、2個とも該当、…と場合分けが増えて面倒です。そこで**余事象**「1つも〜でない」を数えて、1 から引きます。余事象は事象 $A$ と全事象 $S$ をちょうど分け合うので、確率の計算が一段楽になります。',
            },
            { type: 'formula', tex: 'P(A) = 1 - P(\\overline{A})', display: true },
            {
              type: 'derivation',
              title: '余事象の公式の導出',
              steps: [
                {
                  label: 'Step 1: 場合の数で全事象を分割する',
                  tex: 'n(A) + n(\\overline{A}) = n(S)',
                  note: '事象 $A$ に入る場合と入らない場合で、全場合を重複なくちょうど分け合います。',
                },
                {
                  label: 'Step 2: 全体の数で割る',
                  tex: '\\dfrac{n(A)}{n(S)} + \\dfrac{n(\\overline{A})}{n(S)} = 1',
                  note: '同様に確からしい場合の確率は「いい場合の数 ÷ 全体」なので、確率どうしの和は 1 になります。',
                },
                {
                  label: 'Step 3: 移項して完成',
                  tex: '\\therefore P(A) = 1 - P(\\overline{A})',
                  note: '「少なくとも1つ」⇔ 余事象「0個」の変換が即座にできるようになると、難問も一気に解けるようになります。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'サイコロ2個を同時に投げるとき、出た目の**積が偶数**になる確率を余事象を使って求めよ。',
              answer: '余事象は「積が奇数」＝両方とも奇数。奇数の目は 3 個なので $3 \\times 3 = 9$ 通り。$P = 1 - \\dfrac{9}{36} = $ **$\\dfrac{3}{4}$**',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '「少なくとも1つ偶数」を直接数えると 27 通りを数えることになりますが、余事象なら $36 - 9 = 27$ が一行で出ます。数える方向を賢く選ぶのが確率のコツです。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'サイコロ2個の出た目の和が 4 になる確率を求めよ。',
                  hint: '和が4の組は $(1,3), (2,2), (3,1)$ の3つ。',
                  answer: '$\\dfrac{3}{36} = $ **$\\dfrac{1}{12}$**',
                },
                {
                  body: '和が 7 にならない確率を余事象を使って求めよ。',
                  hint: '$P(\\overline{A}) = 1 - P(A)$。',
                  answer: '$1 - \\dfrac{6}{36} = $ **$\\dfrac{5}{6}$**',
                },
                {
                  body: '出た目の積が 12 になる確率を求めよ。',
                  answer: '$(2,6), (3,4), (4,3), (6,2)$ の4通り。$\\dfrac{4}{36} = $ **$\\dfrac{1}{9}$**',
                },
                {
                  body: '少なくとも一方が 6 の目である確率を余事象を使って求めよ。',
                  hint: '余事象は「両方とも 6 以外」＝各サイコロ 5 通り。',
                  answer: '$1 - \\dfrac{5 \\times 5}{36} = 1 - \\dfrac{25}{36} = $ **$\\dfrac{11}{36}$**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: 'サイコロ2個の和のうち、最も確率が高い値はどれか。',
                  choices: ['7', '6', '8'],
                  answerIndex: 0,
                  explanation: '場合の数の表が山型になり、中央の 7 が 6 通りで最多です。',
                },
                {
                  question: '出た目を $(1, 2)$ と $(2, 1)$ のように順序を区別して数える理由はどれか。',
                  choices: ['それぞれの結果が同様に確からしいから', '計算が楽になるから', '和が大きくなるから'],
                  answerIndex: 0,
                  explanation: '順序を区別すると全 36 通りが等確率になり、「いい場合の数 ÷ 36」の計算が正当化されます。',
                },
                {
                  question: '少なくとも1つが 4 以上の目である確率は？（余事象：両方とも 3 以下）',
                  choices: ['$\\dfrac{3}{4}$', '$\\dfrac{1}{4}$', '$\\dfrac{11}{36}$'],
                  answerIndex: 0,
                  explanation: '余事象は $3 \\times 3 = 9$ 通りなので $1 - \\dfrac{9}{36} = \\dfrac{27}{36} = \\dfrac{3}{4}$。',
                },
              ],
            },
          ],
        },
        {
          id: 'figure-transformations',
          title: '図形の移動——平行移動・対称移動・回転移動',
          summary: '移動しても図形の形と大きさは変わらない（合同）。点の座標の変化の規則を表で整理し、回転 90° の規則を自力で導出できるようにする。',
          objectives: [
            '平行移動・対称移動・回転移動における点の座標の変化の規則を即座に言える',
            '移動によって図形の形状・大きさ・向きのどこが変わるかを説明できる',
            '原点のまわり 90° の回転 $(x, y) \\to (-y, x)$ を三平方の定理を使って導出できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '移動と座標の規則' },
            {
              type: 'text',
              content: '図形を動かしても**形と大きさは変わらない**（移動の前後で図形は合同）というのが大前提です。変わるのは位置（と、対称移動・回転移動では向き）だけです。座標平面上では、移動は「点の座標の変換規則」として書き表せます。規則を丸暗記するだけでなく、なぜそうなるのかを導出できるようになりましょう。',
            },
            {
              type: 'table',
              headers: ['移動の種類', '座標の変化', '覚え方'],
              rows: [
                ['$x$ 軸方向に $a$、$y$ 軸方向に $b$ の平行移動', '$(x, y) \\to (x + a,\\ y + b)$', 'ただの足し算'],
                ['$x$ 軸について対称（折り返し）', '$(x, y) \\to (x, -y)$', '$y$ の符号だけ変わる'],
                ['$y$ 軸について対称', '$(x, y) \\to (-x, y)$', '$x$ の符号だけ変わる'],
                ['原点について対称', '$(x, y) \\to (-x, -y)$', '180° の回転と同じ結果'],
                ['直線 $y = x$ について対称', '$(x, y) \\to (y, x)$', '$x$ と $y$ を入れ替える'],
                ['原点のまわり 90° の回転', '$(x, y) \\to (-y, x)$', '符号反転＋成分入れ替え'],
              ],
            },
            { type: 'formula', tex: '(x, y) \\to (-y, x) \\quad (90^\\circ \\text{ rotation about the origin})', display: true },
            { type: 'heading', level: 3, content: 'なぜ 90° 回転で符号が入れ替わるのか' },
            {
              type: 'text',
              content: '回転移動の規則は一見魔法のように見えますが、三平方の定理と「回転は原点からの距離を変えない」という性質から導けます。第一象限の点を例にとって、じっくり追いかけてみましょう。',
            },
            {
              type: 'derivation',
              title: '原点のまわり 90° 回転 $(x, y) \\to (-y, x)$ の導出',
              steps: [
                {
                  label: 'Step 1: 第一象限の点 P を用意する',
                  tex: 'P(x, y), \\quad x > 0, \\ y > 0',
                  note: '原点 O からの距離は三平方の定理で $r = \\sqrt{x^2 + y^2}$ と書けます。',
                },
                {
                  label: 'Step 2: 距離の式',
                  tex: 'r^2 = x^2 + y^2',
                  note: '回転しても長さは変わらないので、回転後の点 $Q(u, v)$ についても $u^2 + v^2 = r^2$ が成り立ちます。',
                },
                {
                  label: 'Step 3: 90° 回すと第二象限へ',
                  tex: 'Q(u, v), \\quad u < 0, \\ v > 0',
                  note: '回転後の点は必ず第二象限に来ます。つまり新しい $x$ 座標 $u$ は負、新しい $y$ 座標 $v$ は正です。',
                },
                {
                  label: 'Step 4: 直角三角形の写し替え',
                  tex: 'u = -y, \\qquad v = x',
                  note: '∠POQ が 90° なので、もとの直角三角形を 90° 回転させた形がそのまま新座標に写ります。新しい横の長さはもとの縦（符号を変えて負）、新しい縦の長さはもとの横です。',
                },
                {
                  label: 'Step 5: 結論と拡張',
                  tex: '\\therefore (x, y) \\to (-y, x) \\quad (90^\\circ)',
                  note: '逆向きの 90°（270°）なら $(y, -x)$、180° は 90° を 2 回なので $(-x, -y)$（原点対称と一致）になります。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '△ABC の頂点が $A(1, 2)$、$B(3, 2)$、$C(3, 5)$ である。まず $x$ 軸方向に $-2$、$y$ 軸方向に $3$ の平行移動をしてから、$y$ 軸について対称移動したときの 3 頂点の座標を求めよ。',
              answer: '平行移動後は $A_1(-1, 5)$、$B_1(1, 5)$、$C_1(1, 8)$。$y$ 軸対称で $x$ の符号を反転すると **$(1, 5)$、$(-1, 5)$、$(-1, 8)$**',
            },
            {
              type: 'note',
              variant: 'info',
              content: '平行移動を2回続けると足し算の順番は関係ありませんが、対称移動や回転移動を混ぜると**順番が重要**になります。$(x, y) \\to (y, x) \\to (y, -x)$ と、$(x, y) \\to (x, -y) \\to (-y, -x)$ は違う結果になります。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '点 $(3, -2)$ を $x$ 軸について対称移動した点の座標を求めよ。',
                  answer: '$y$ の符号が変わるので **$(3, 2)$**',
                },
                {
                  body: '点 $(-4, 1)$ を原点のまわり 180° 回転した点の座標を求めよ。',
                  hint: '180° 回転は原点対称と同じ。',
                  answer: '両方の符号が変わるので **$(4, -1)$**',
                },
                {
                  body: '点 $(2, 5)$ を原点のまわり 90° 回転した点の座標を求めよ。',
                  hint: '$(x, y) \\to (-y, x)$。',
                  answer: '**$(-5, 2)$**',
                },
                {
                  body: '点 $(a, b)$ を直線 $y = x$ について対称移動し、さらに $x$ 軸について対称移動した。最終的な点は原点のまわり何度の回転と同じか。',
                  hint: '$(a, b) \\to (b, a) \\to (b, -a)$。$(b, -a)$ は $(x, y) \\to (y, -x)$ の形。',
                  answer: '**270°（逆向き 90°）の回転**と同じ',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '点 $(x, y)$ を $x$ 軸について対称移動するとどの点に移るか。',
                  choices: ['$(x, -y)$', '$(-x, y)$', '$(y, x)$'],
                  answerIndex: 0,
                  explanation: '$x$ 軸を折り返しの軸にするので、上下方向（$y$ 座標）の符号だけが変わります。',
                },
                {
                  question: '平行移動の前後で変わらないものはどれか。',
                  choices: ['図形の形と大きさ', '点の座標', '図形の位置'],
                  answerIndex: 0,
                  explanation: '平行移動は合同移動なので形状・大きさ・向きのすべてが保たれ、位置だけが変わります。',
                },
                {
                  question: '原点のまわり 90° 回転で点 $(2, -3)$ はどの点に移るか。',
                  choices: ['$(3, 2)$', '$(-3, -2)$', '$(-2, 3)$'],
                  answerIndex: 0,
                  explanation: '$(x, y) \\to (-y, x)$ に当てはめると $(-(-3), 2) = (3, 2)$ です。',
                },
              ],
            },
          ],
        },
        // ---------- 発展: 式の操作 ----------
        {
          id: 'factorization-methods',
          title: '因数分解のすべて——たすきがけ・grouping・置換',
          summary: '共通因数、公式、たすきがけ、grouping（組み替え）、置換を体系化。なぜたすきがけで因数分解できるのかという原理から、複雑な式の処理までを学ぶ。',
          objectives: [
            '共通因数でくくり、展開の公式を逆向きに使って因数分解することができる',
            'たすきがけで $x^2 + (a + b)x + ab$ 型や $px^2 + qx + r$ 型を因数分解し、その原理を説明できる',
            '式の一部を文字におきかえる置換を使い、複雑な式を段階的に完全因数分解できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '因数分解は「展開の逆向き」' },
            {
              type: 'text',
              content: '$(x + 2)(x + 3)$ を展開すると $x^2 + 5x + 6$ ですが、この操作を逆向きに行って **多項式をいくつかの式の積の形にすること** が因数分解です。まず必ず確認するのは **共通因数** の有無、次に **展開の公式を逆向きに使えないか**、それでもだめなら **たすきがけ**、4項あったら **grouping（組み替え）** という順番で考えるのが定石です。因数分解は答えが1通りとは限らず、最後は **これ以上分割できない形（完全な因数分解）まで行う** のがルールです。',
            },
            { type: 'heading', level: 3, content: '公式の使い分け表' },
            {
              type: 'table',
              headers: ['式の形', '公式（逆向き）', '見分けるポイント'],
              rows: [
                ['$ka + kb + kc$', '$k(a + b + c)$', 'すべての項に共通する文字・数を探す'],
                ['$a^2 + 2ab + b^2$', '$(a + b)^2$', '首尾が $a^2,\\\\ b^2$、真ん中が $2ab$'],
                ['$a^2 - 2ab + b^2$', '$(a - b)^2$', '真ん中の項がマイナスの $2ab$'],
                ['$a^2 - b^2$', '$(a + b)(a - b)$', '2つの平方の差（和と差の積）'],
                ['$x^2 + (a + b)x + ab$', '$(x + a)(x + b)$', '積が定数項・和が中間項になる2数を探す'],
                ['$acx + adx + bcx + bdx$', '$(a + b)(c + d)x$ 形', '4項あれば grouping（組み替え）を試す'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: '最初の一手は **共通因数** です。$2x^2 + 4x = 2x(x + 2)$ のようにくくり出してから公式を当てはめると、扱う数字が小さくなって楽になります。因数分解の前に、次数の高い項から順に並べる（降冪の順）整理も済ませておきましょう。',
            },
            { type: 'heading', level: 3, content: 'たすきがけの原理——なぜ斜めの線を引くのか' },
            { type: 'formula', tex: '(px + q)(rx + s) = pr\\\\,x^2 + (ps + qr)x + qs', display: true },
            {
              type: 'derivation',
              title: 'たすきがけがなぜうまくいくか——展開の構造を分解する',
              steps: [
                {
                  label: 'Step 1: 展開をばらして観察する',
                  tex: '(px + q)(rx + s) = pr\\\\,x^2 + ps\\\\,x + qr\\\\,x + qs = pr\\\\,x^2 + (ps + qr)x + qs',
                  note: '中間項は **斜め（たすき）の積の和** $ps + qr$ だけで作られています。ここがたすきがけの核心です。',
                },
                {
                  label: 'Step 2: $2x^2 + 7x + 3$ に当てはめる',
                  tex: 'pr = 2, \\\\qquad qs = 3, \\\\qquad ps + qr = 7',
                  note: '$x^2$ の係数になる積 $pr$、定数項になる積 $qs$、中間項になるたすきの和 $ps + qr$ の3つの条件を満たす組を探します。',
                },
                {
                  label: 'Step 3: 候補を総当たりで試す',
                  tex: '(p, r) = (2, 1), \\\\quad (q, s) = (1, 3) \\\\implies ps + qr = 2 \\\\times 3 + 1 \\\\times 1 = 7',
                  note: 'たすきがけの表とは、この候補出しを効率よく行うための道具なのです。',
                },
                {
                  label: 'Step 4: 結論（検算つき）',
                  tex: '2x^2 + 7x + 3 = (2x + 1)(x + 3)',
                  note: '展開して戻すと元の式になり、因数分解が正しいことが確かめられます。検算は1回必ずやりましょう。',
                },
              ],
            },
            { type: 'heading', level: 3, content: 'たすきがけの符号の決め方' },
            {
              type: 'list',
              items: [
                '**第3項がプラス**: 2数は同符号。中間項がプラスなら両方プラス、マイナスなら両方マイナス',
                '**第3項がマイナス**: 2数は異符号。絶対値の大きいほうに中間項の符号を合わせる',
                '候補が複数あるときは **中間項の和** が一致する組を選び、最後に展開して検算する',
              ],
            },
            {
              type: 'example',
              title: '例題 1',
              body: '$x^2 + 5x + 6$ と $3x^2 - 10x + 8$ を因数分解せよ。',
              answer: '$x^2 + 5x + 6$: 和 $5$・積 $6$ となる2数は $2$ と $3$ なので $(x + 2)(x + 3)$。$3x^2 - 10x + 8$: たすきがけより $ps + qr = (-4) \\\\times 1 + (-2) \\\\times 3 = -10$ なので $(3x - 4)(x - 2)$',
            },
            { type: 'heading', level: 3, content: 'grouping（組み合わせてくくる）' },
            {
              type: 'text',
              content: '4つの項に公式が直接使えないときは、**項を2つずつグループに分けてそれぞれ共通因数でくくり、あらためて共通因数をくくる** 方法（grouping）が有力です。グループの分け方は1通りとは限らず、うまくいかないときは組み合わせを変えてみます。成功の目安は、各グループをくかったあとに **同じ中身のかっこ** が現れることです。',
            },
            { type: 'formula', tex: 'ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)', display: true },
            {
              type: 'example',
              title: '例題 2',
              body: '$x^2 - 3x + ax - 3a$ を因数分解せよ。',
              answer: '前半と後半をそれぞれくると $x(x - 3) + a(x - 3)$、共通因数 $(x - 3)$ でくって $(x - 3)(x + a)$',
            },
            { type: 'heading', level: 3, content: '置換（式の一部を文字におきかえる）' },
            {
              type: 'text',
              content: '$(x^2 + x)^2 - 8(x^2 + x) + 12$ のように **同じまとまりが繰り返し現れる式** は、そのまとまりを $A$ などの1文字におきかえると見通しがよくなります。$A$ で因数分解したあとは、**必ず元の式に戻して** さらに因数分解できるかを確認します。ここを省略すると「因数分解したつもり」で終わってしまうので注意しましょう。',
            },
            { type: 'formula', tex: 'A = x^2 + x \\\\implies A^2 - 8A + 12 = (A - 2)(A - 6)', display: true },
            {
              type: 'example',
              title: '例題 3',
              body: '$(x^2 + x)^2 - 8(x^2 + x) + 12$ を因数分解せよ。',
              answer: '$A = x^2 + x$ とおくと $(A - 2)(A - 6)$。元に戻すと $(x^2 + x - 2)(x^2 + x - 6)$、さらにたすきがけで $(x + 2)(x - 1)(x + 3)(x - 2)$',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '$x^4 - 16 = (x^2 + 4)(x^2 - 4)$ で終わってはいけません。$x^2 - 4$ はまだ平方の差なので、最終的な答えは $(x^2 + 4)(x + 2)(x - 2)$ です。因数分解の最後には **すべての因数がこれ以上分割できないか** を必ずチェックしましょう。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '$2x^2 + 5x + 2$ をたすきがけで因数分解せよ。',
                  hint: '積が $2$・積が $2$、たすきの和が $5$ になる組を探す。',
                  answer: '$pr = 2,\\\\ qs = 2,\\\\ ps + qr = 4 + 1 = 5$ なので $(2x + 1)(x + 2)$',
                },
                {
                  body: '$x^2 - xy - 2y^2$ を因数分解せよ。',
                  hint: '$y$ を定数だと思ってたすきがけする。',
                  answer: '積 $-2y^2$、和 $-y$ となるのは $-2y$ と $y$ なので $(x - 2y)(x + y)$',
                },
                {
                  body: '$x^2 - 4x - xy + 4y$ を因数分解せよ。',
                  hint: '前半2項・後半2項に分けて grouping。',
                  answer: '$x(x - 4) - y(x - 4) = (x - 4)(x - y)$',
                },
                {
                  body: '$x^4 - 5x^2 + 4$ を因数分解せよ。',
                  hint: '$A = x^2$ とおいたあと、戻してもう一度分解する。',
                  answer: '$(x^2 - 1)(x^2 - 4)$ となり、さらに分解して $(x + 1)(x - 1)(x + 2)(x - 2)$',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '$x^2 - 9$ を因数分解するとどれか。',
                  choices: ['$(x + 3)(x - 3)$', '$(x + 9)(x - 1)$', '$(x - 3)^2$'],
                  answerIndex: 0,
                  explanation: '平方の差の公式 $(a + b)(a - b) = a^2 - b^2$ を逆向きに使いました。',
                },
                {
                  question: '$2x^2 + 11x + 12$ をたすきがけで因数分解するとどれか。',
                  choices: ['$(2x + 3)(x + 4)$', '$(2x + 4)(x + 3)$', '$(2x + 1)(x + 12)$'],
                  answerIndex: 0,
                  explanation: 'たすきの和は $2 \\\\times 4 + 3 \\\\times 1 = 11$ で一致します。他の選択肢の中間項はそれぞれ 10 と 25 になり、不一致です。',
                },
                {
                  question: '$ax + ay + bx + by$ の因数分解として正しいものはどれか。',
                  choices: ['$(a + b)(x + y)$', '$(a + x)(b + y)$', '$(a + b)(a + y)$'],
                  answerIndex: 0,
                  explanation: 'grouping で $a(x + y) + b(x + y)$ となり、共通の中身 $(x + y)$ でくくれます。',
                },
              ],
            },
          ],
        },
        // ---------- 発展: 根号を含む式の計算 ----------
        {
          id: 'square-roots',
          title: '根号を含む式の計算——有理化と二重根号',
          summary: '平方根の性質を整理し、分母の有理化・二重根号の処理・根号を含む式の値の計算までを体系的に学ぶ。',
          objectives: [
            '平方根の性質（積・商・累乗）を使い、$\\\\sqrt{12}$ のような根号を整理できる',
            '分母の有理化ができ、その理由（分母に根号を残さない）を説明できる',
            '$x = \\\\sqrt{2}$ を含む式の値を、$x^2 = 2$ を利用して工夫して求めることができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '平方根とは' },
            {
              type: 'text',
              content: '$x^2 = a$ となる $x$ を **$a$ の平方根** といい、正の数 $a$ に対しては正と負の2つあります。正のほうを根号 $\\\\sqrt{\\\\ }$ を使って表し、負のほうは $-\\\\sqrt{a}$ と書きます。$16$ や $\\\\dfrac{1}{4}$ のように平方数なら根号はきれいにはずれますが、$2$ や $3$ のような数は小数で書き表せないので、**根号のまま扱う** のが数学の作法です。根号の中身が最小になるまで整理しておくと、以後の計算がすべて楽になります。',
            },
            { type: 'formula', tex: '\\\\sqrt{16} = \\\\pm 4 \\\\text{ (both roots)}, \\\\qquad (\\\\sqrt{2})^2 = 2, \\\\qquad -\\\\sqrt{9} = -3', display: true },
            { type: 'heading', level: 3, content: '平方根の性質（積・商・累乗）' },
            {
              type: 'list',
              items: [
                '積: $\\\\sqrt{ab} = \\\\sqrt{a}\\\\,\\\\sqrt{b}$（$a > 0,\\\\ b > 0$。負の数は中学では扱わない）',
                '商: $\\\\sqrt{\\\\dfrac{a}{b}} = \\\\dfrac{\\\\sqrt{a}}{\\\\sqrt{b}}$',
                '累乗と逆算: $(\\\\sqrt{a})^2 = a$、$a > 0$ で $a^2 = b$ なら $a = \\\\sqrt{b}$',
                '**根号の中は因数分解** して平方数を外へ追い出す: $\\\\sqrt{72} = \\\\sqrt{36 \\\\times 2} = 6\\\\sqrt{2}$',
              ],
            },
            {
              type: 'note',
              variant: 'warn',
              content: '$\\\\sqrt{a + b} \\\\neq \\\\sqrt{a} + \\\\sqrt{b}$ です。$\\\\sqrt{9 + 16} = \\\\sqrt{25} = 5$ なのに $\\\\sqrt{9} + \\\\sqrt{16} = 7$ となり一致しません。和・差には分配のような規則がありません。また $\\\\sqrt{a^2} = |a|$ が必要になる点は高校内容ですが、根号は **非負** であることと合わせて覚えておきましょう。',
            },
            {
              type: 'example',
              title: '例題 1',
              body: '$\\\\sqrt{48}$、$\\\\sqrt{18} - \\\\sqrt{8}$ をそれぞれ計算せよ。',
              answer: '$\\\\sqrt{48} = \\\\sqrt{16 \\\\times 3} = 4\\\\sqrt{3}$。$\\\\sqrt{18} - \\\\sqrt{8} = 3\\\\sqrt{2} - 2\\\\sqrt{2} = \\\\sqrt{2}$（中身を揃えると同類項のように足せる）',
            },
            { type: 'heading', level: 3, content: '分母の有理化' },
            {
              type: 'text',
              content: '分数の分母に根号があるとき、**分母と分子に同じ値を掛けて分母の根号を外す** 操作を有理化といいます。分母が無理数のままだと大小比較や加減算がしづらく、誤差の議論にも不便です。分母を整数にそろえておくのが計算上も表記上も有利で、答案でも有理化までが正式な答えとされます。',
            },
            {
              type: 'derivation',
              title: '二重根号 $\\\\sqrt{5 + 2\\\\sqrt{6}}$ の処理手順',
              steps: [
                {
                  label: 'Step 1: 中身を「平方の形」に組み立てる目標を設定する',
                  tex: '(p + q)^2 = p^2 + q^2 + 2pq',
                  note: '$p, q$ が根号を含むとき、有理部分 $p^2 + q^2$ と根号部分 $2\\\\sqrt{pq}$ に分けて読み取ります。',
                },
                {
                  label: 'Step 2: 条件を読み取る',
                  tex: 'p^2 + q^2 = 5, \\\\qquad 2\\\\sqrt{pq} = 2\\\\sqrt{6} \\\\implies pq = 6',
                  note: '積が $6$ で和が $5$ となる正の数の組を探します。これはたすきがけと同じ探索です。',
                },
                {
                  label: 'Step 3: 組を見つけて平方完成',
                  tex: 'p = 2,\\\\ q = 3 \\\\implies 5 + 2\\\\sqrt{6} = 2 + 3 + 2\\\\sqrt{2 \\\\times 3} = (\\\\sqrt{2} + \\\\sqrt{3})^2',
                  note: '$(\\\\sqrt{2} + \\\\sqrt{3})^2 = 5 + 2\\\\sqrt{6}$ と確かに展開できます。',
                },
                {
                  label: 'Step 4: 根号を外す',
                  tex: '\\\\sqrt{5 + 2\\\\sqrt{6}} = \\\\sqrt{(\\\\sqrt{2} + \\\\sqrt{3})^2} = \\\\sqrt{2} + \\\\sqrt{3}',
                  note: '$\\\\sqrt{2} + \\\\sqrt{3} > 0$ なので正の平方根を選びます。符号チェックを忘れないこと。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['形', '処理', '例'],
              rows: [
                ['単純な分母の根号', '分子・分母に同じ根号を掛ける', '$\\\\dfrac{1}{\\\\sqrt{3}} = \\\\dfrac{\\\\sqrt{3}}{3}$'],
                ['二項の分母（共役）', 'たし引きの組で掛ける（和と差の積）', '$\\\\dfrac{1}{\\\\sqrt{2} + 1} = \\\\sqrt{2} - 1$'],
                ['二重根号', '$(\\\\sqrt{p} + \\\\sqrt{q})^2$ の形に組み立てる', '$\\\\sqrt{6 + 2\\\\sqrt{5}} = \\\\sqrt{5} + 1$'],
                ['同類の整理', '中身を揃えて係数を足し引き', '$5\\\\sqrt{2} - 3\\\\sqrt{2} = 2\\\\sqrt{2}$'],
              ],
            },
            {
              type: 'example',
              title: '例題 2',
              body: '$\\\\dfrac{3}{\\\\sqrt{5} - 2}$ を分母に根号が残らない形にせよ。',
              answer: '分母・分子に $\\\\sqrt{5} + 2$ を掛けると $\\\\dfrac{3(\\\\sqrt{5} + 2)}{(\\\\sqrt{5})^2 - 2^2} = \\\\dfrac{3(\\\\sqrt{5} + 2)}{1} = 3\\\\sqrt{5} + 6$',
            },
            { type: 'heading', level: 3, content: '$x = \\\\sqrt{2}$ を含む式の値' },
            {
              type: 'text',
              content: '$x = \\\\sqrt{2}$ のとき $x^2 = 2$ という関係が使えます。$x^2$ が現れたら即座に $2$ に置き換え、$x^3 = x \\\\cdot x^2 = 2x$ のように **次数を下げて整理** するのが基本戦略です。逆に $\\\\dfrac{1}{x} = \\\\dfrac{\\\\sqrt{2}}{2}$ のように分数が絡むときは有理化を組み合わせると見通しがよくなります。代入は最後の手段と考え、まず式の変形で次数を下げるのが上級者の解き方です。',
            },
            { type: 'formula', tex: 'x = \\\\sqrt{2} \\\\implies x^2 = 2, \\\\quad x^3 = 2x, \\\\quad x^4 = 4', display: true },
            {
              type: 'example',
              title: '例題 3',
              body: '$x = \\\\sqrt{2}$ のとき、$x^3 - 2x^2 + 3x - 4$ の値を求めよ。',
              answer: '$x^2 = 2,\\\\ x^3 = 2x$ を代入すると $2x - 4 + 3x - 4 = 5x - 8 = 5\\\\sqrt{2} - 8$',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '$\\\\sqrt{75}$、$\\\\sqrt{27} + \\\\sqrt{12}$ を計算せよ。',
                  hint: '中身を平方数との積に分解する。',
                  answer: '$\\\\sqrt{75} = 5\\\\sqrt{3}$、$\\\\sqrt{27} + \\\\sqrt{12} = 3\\\\sqrt{3} + 2\\\\sqrt{3} = 4\\\\sqrt{3}$',
                },
                {
                  body: '$\\\\dfrac{5}{\\\\sqrt{7}}$ を有理化せよ。',
                  hint: '分子・分母に $\\\\sqrt{7}$ を掛ける。',
                  answer: '$\\\\dfrac{5\\\\sqrt{7}}{7}$',
                },
                {
                  body: '$\\\\sqrt{7 - 2\\\\sqrt{10}}$ を計算せよ。',
                  hint: '$7 = 5 + 2$ と分けて $(\\\\sqrt{5} - \\\\sqrt{2})^2$ の形を作る。',
                  answer: '$(\\\\sqrt{5} - \\\\sqrt{2})^2 = 5 + 2 - 2\\\\sqrt{10} = 7 - 2\\\\sqrt{10}$ なので $\\\\sqrt{5} - \\\\sqrt{2}$',
                },
                {
                  body: '$x = \\\\sqrt{3}$ のとき、$x^3 + x^2 - 4x$ の値を求めよ。',
                  hint: '$x^2 = 3$、$x^3 = 3x$ を代入して次数を下げる。',
                  answer: '$3x + 3 - 4x = 4 - x = 4 - \\\\sqrt{3}$',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '$\\\\sqrt{50}$ を最も簡単に表したものはどれか。',
                  choices: ['$5\\\\sqrt{2}$', '$2\\\\sqrt{5}$', '$25\\\\sqrt{2}$'],
                  answerIndex: 0,
                  explanation: '$\\\\sqrt{50} = \\\\sqrt{25 \\\\times 2} = 5\\\\sqrt{2}$。中身を最大の平方数で割るのがコツです。',
                },
                {
                  question: '$\\\\dfrac{1}{\\\\sqrt{2} - 1}$ を有理化するとどれか。',
                  choices: ['$\\\\sqrt{2} + 1$', '$\\\\sqrt{2} - 1$', '$\\\\dfrac{\\\\sqrt{2} + 1}{2}$'],
                  answerIndex: 0,
                  explanation: '分子・分母に $\\\\sqrt{2} + 1$ を掛けると分母は $(\\\\sqrt{2})^2 - 1^2 = 1$ となり、答えは $\\\\sqrt{2} + 1$ です。',
                },
                {
                  question: '$x = \\\\sqrt{5}$ のとき $x^2 - 5$ の値はどれか。',
                  choices: ['$0$', '$2\\\\sqrt{5} - 5$', '$5$'],
                  answerIndex: 0,
                  explanation: '$x^2 = (\\\\sqrt{5})^2 = 5$ なので $x^2 - 5 = 0$ となります。',
                },
              ],
            },
          ],
        },
        // ---------- 発展: 一次関数と二次関数の比較 ----------
        {
          id: 'functions-comparison',
          title: '一次関数と二次関数の比較——変化率・共有点・面積最大',
          summary: '直線と放物線を「変化の割合」で対比し、共有点の個数の判定法から和一定の面積最大問題への入口までを学ぶ。',
          objectives: [
            '一次関数と二次関数のグラフの違いを、変化の割合に着目して説明できる',
            '放物線と直線の共有点の個数を、連立して得られる二次方程式の解の個数から判定できる',
            '和が一定の条件下で積（面積）が最大になることを、二次関数のグラフの頂点で説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '二つの関数の姿かたち' },
            {
              type: 'text',
              content: '一次関数 $y = kx + l$（$k \\\\neq 0$）のグラフは直線で、$x$ が 1 増えるたびに $y$ が常に $k$ ずつ増減します。一方、二次関数 $y = ax^2$（$a \\\\neq 0$）のグラフは放物線で、同じ幅だけ $x$ を動かしても $y$ の増え方は場所によって違います。この「増え方が一定かどうか」こそが、二つの関数を分ける最大の特徴です。式の次数が上がると、グラフは直線から曲線へと姿を変えます。',
            },
            {
              type: 'table',
              headers: ['項目', '一次関数 $y = kx + l$', '二次関数 $y = ax^2$'],
              rows: [
                ['グラフの形', '直線', '放物線'],
                ['変化の割合', '常に一定（$k$）', '場所によって変わる'],
                ['対称性', '対称の軸はない', '$y$ 軸について対称'],
                ['増減', 'ずっと増加かずっと減少', '頂点で増減が入れ替わる'],
              ],
            },
            {
              type: 'widget',
              widget: {
                id: 'quadratic-explorer',
                caption: 'プレイグラウンド: a を動かすと放物線の開き方と頂点がどう変わるか観察しよう',
              },
            },
            { type: 'heading', level: 3, content: '変化の割合で二つの関数を見分ける' },
            { type: 'formula', tex: '\\\\text{rate} = \\\\dfrac{y_2 - y_1}{x_2 - x_1}', display: true },
            {
              type: 'text',
              content: '直線では、どこで増加量を測っても変化の割合が $k$ に一致します。ところが放物線 $y = ax^2$ で $x = p$ から $p + h$ までの変化の割合を計算すると $a(2p + h)$ となり、始点 $p$ が変われば値も変わります。つまり放物線とは「変化の割合が刻々と変わるグラフ」であり、これが曲線として描かれる理由です。高校の数学ではこの考えを微分へと発展させます。',
            },
            {
              type: 'derivation',
              title: '放物線の変化の割合——なぜ場所ごとに違うのか',
              steps: [
                {
                  label: 'Step 1: 区間の y の増加量を計算する',
                  tex: 'y(p + h) - y(p) = a(p + h)^2 - ap^2 = a(2ph + h^2)',
                  note: '$(p + h)^2 = p^2 + 2ph + h^2$ を展開すると、$p^2$ の項が打ち消し合います。',
                },
                {
                  label: 'Step 2: x の増加量でわる',
                  tex: '\\\\dfrac{a(2ph + h^2)}{h} = a(2p + h)',
                  note: '$h \\\\neq 0$ でわりました。結果に $p$ が残っている、つまり始点に依存することがポイントです。',
                },
                {
                  label: 'Step 3: 直線と比べる',
                  tex: '(k(p + h) + l) - (kp + l) = kh \\\\implies \\\\dfrac{kh}{h} = k',
                  note: '直線では始点 $p$ に関係なく常に $k$ になります。ここが決定的な違いです。',
                },
                {
                  label: 'Step 4: 具体例で確認する',
                  tex: 'y = x^2 : \\\\ p = 0 \\\\to 1 \\\\text{ rate } 1, \\\\qquad p = 1 \\\\to 2 \\\\text{ rate } 3',
                  note: '同じ幅 1 でも 0 → 1 では 1、1 → 2 では 3。放物線がだんだん急になる様子が数で表れました。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題 1',
              body: '放物線 $y = x^2$ の上を $x = 2$ から $x = 5$ まで動くときの変化の割合を求めよ。',
              answer: '$a(2p + h) = 1 \\\\times (2 \\\\times 2 + 3) = 7$。実際 $(25 - 4) \\\\div 3 = 7$ とも計算できて一致します。',
            },
            { type: 'heading', level: 3, content: '放物線と直線の共有点' },
            {
              type: 'text',
              content: '放物線と直線の共有点は、二つの式を連立して求めます。$y = ax^2$ と $y = mx + n$ で $y$ を消去すると二次方程式が得られ、その解の個数が共有点の個数に対応します。解が 2 つなら 2 点で交わり、解が 1 つ（重複した解）なら **接している**、解がなければ共有点はありません。直線を平行移動させると「2 点で交わる → 接する → 共有点なし」と順番に状態が移り変わる様子は、グラフと式の両方で確認しましょう。',
            },
            {
              type: 'derivation',
              title: '共有点の個数の判定——$y = x^2$ と $y = mx + k$',
              steps: [
                {
                  label: 'Step 1: y を消去する',
                  tex: 'x^2 = mx + k \\\\implies x^2 - mx - k = 0',
                  note: '直線の式を放物線の $y$ に代入して、$x$ だけの二次方程式にします。',
                },
                {
                  label: 'Step 2: 左辺を平方完成する',
                  tex: '\\\\left(x - \\\\dfrac{m}{2}\\\\right)^2 = k + \\\\dfrac{m^2}{4}',
                  note: '左辺は 0 以上なので、右辺の符号で実数解の個数（＝共有点の個数）が決まります。',
                },
                {
                  label: 'Step 3: 右辺の符号で場合分け',
                  tex: 'k + \\\\dfrac{m^2}{4} > 0 \\\\text{ two points}, \\\\quad = 0 \\\\text{ tangent}, \\\\quad < 0 \\\\text{ none}',
                  note: '右辺がプラスなら解は 2 つ、ゼロなら 1 つ（接する）、マイナスなら解なしです。',
                },
                {
                  label: 'Step 4: 幾何的な意味',
                  tex: 'y = mx + k \\\\text{ touches } y = x^2 \\\\iff k = -\\\\dfrac{m^2}{4}',
                  note: '傾き $m$ の直線が放物線に接するのは、切片 $k$ がちょうど $-\\\\dfrac{m^2}{4}$ のとき。境界線の位置が式で書き表せました。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['右辺 $k + \\\\tfrac{m^2}{4}$ の符号', '二次方程式の解', '共有点'],
              rows: [
                ['プラス', '異なる 2 つの実数解', '2 点で交わる'],
                ['ゼロ', '重複した 1 つの解', '1 点で接する'],
                ['マイナス', '実数解なし', '共有点なし'],
              ],
            },
            {
              type: 'example',
              title: '例題 2',
              body: '放物線 $y = x^2 - 4$ と直線 $y = x - 2$ の共有点をすべて求めよ。',
              answer: '$x^2 - 4 = x - 2 \\\\implies x^2 - x - 2 = 0 \\\\implies (x - 2)(x + 1) = 0$。$x = 2, -1$ なので共有点は **$(2, 0)$ と $(-1, -3)$**',
            },
            { type: 'heading', level: 3, content: '和が一定のとき面積は最大になる' },
            {
              type: 'text',
              content: '2 数の和が一定のとき、2 数の積は 2 数が等しいときに最大になります。これは「タテとヨコの長さの和が決まった長方形の面積を最大化したい」という問題にそのまま応用できます。タテを $x$、ヨコを $10 - x$ とおくと面積 $S = x(10 - x)$ は二次関数なので、グラフの頂点から最大値が読み取れます。入試の大問で頻出の「面積最大問題」は、ほぼすべてこの構造です。',
            },
            {
              type: 'derivation',
              title: '面積最大問題——$S = x(10 - x)$ の最大値',
              steps: [
                {
                  label: 'Step 1: 式を展開する',
                  tex: 'S = x(10 - x) = -x^2 + 10x',
                  note: '$x^2$ の係数がマイナスなので、放物線は下に開き、顶点で最大値をもちます。',
                },
                {
                  label: 'Step 2: 平方完成する',
                  tex: 'S = -\\\\left(x^2 - 10x\\\\right) = -\\\\left\\\\{(x - 5)^2 - 25\\\\right\\\\} = -(x - 5)^2 + 25',
                  note: '平方完成で「ずれ」を定数項に追い出します。',
                },
                {
                  label: 'Step 3: 最大値を読み取る',
                  tex: '(x - 5)^2 \\\\ge 0 \\\\implies S \\\\le 25, \\\\qquad S = 25 \\\\text{ at } x = 5',
                  note: '$x = 5$ のとき、つまりタテとヨコが等しい正方形のときに面積が最大です。',
                },
              ],
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '一次関数 $y = -2x + 3$ と放物線 $y = x^2$ の共有点をすべて求めよ。',
                  hint: '連立して $x^2 + 2x - 3 = 0$ を解く。',
                  answer: '$(x + 3)(x - 1) = 0$ より $x = -3, 1$。共有点は **$(-3, 9)$ と $(1, 1)$**',
                },
                {
                  body: '放物線 $y = x^2$ と直線 $y = 2x - 6$ の共有点の個数を求めよ。',
                  hint: '$x^2 - 2x + 6 = 0$ を平方完成すると。',
                  answer: '$(x - 1)^2 + 5 = 0$ となり実数解なし。**共有点は 0 個**',
                },
                {
                  body: '$x + y = 12$ のとき、積 $xy$ の最大値と、そのときの $x, y$ の値を求めよ。',
                  hint: '$y = 12 - x$ を代入して二次関数にする。',
                  answer: '$xy = x(12 - x) = -(x - 6)^2 + 36$。最大値 **36**（$x = 6, y = 6$ のとき）',
                },
                {
                  body: '放物線 $y = x^2$ の上を $x = 1$ から $x = 4$ まで動くときの変化の割合を求めよ。',
                  hint: '公式 $a(2p + h)$ に $a = 1, p = 1, h = 3$ を代入。',
                  answer: '$1 \\\\times (2 \\\\times 1 + 3) = 5$（$(16 - 1) \\\\div 3 = 5$ でも確認できる）',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '一次関数 $y = 4x - 7$ のグラフの変化の割合はどれか。',
                  choices: ['$4$', '$-7$', '$4x$'],
                  answerIndex: 0,
                  explanation: '$x$ の係数がそのまま変化の割合で、直線ではどこで測っても一定です。',
                },
                {
                  question: '放物線と直線がちょうど 1 点で接するとき、連立して得られる二次方程式の解はどうなっているか。',
                  choices: ['重複した 1 つの解をもつ', '異なる 2 つの解をもつ', '解を 1 つももたない'],
                  answerIndex: 0,
                  explanation: '接する ＝ 解が 1 つ（重解）。共有点が 2 個なら解は 2 つ、0 個なら解なしに対応します。',
                },
                {
                  question: '周りの長さが決まった長方形の面積が最大になるとき、その形はどれか。',
                  choices: ['正方形', 'タテがヨコの 2 倍', 'ヨコが非常に細い長方形'],
                  answerIndex: 0,
                  explanation: '和一定の 2 数の積は 2 数が等しいとき最大。タテ ＝ ヨコ、つまり正方形のときです。',
                },
              ],
            },
          ],
        },
        // ---------- 発展: 資料の整理 ----------
        {
          id: 'statistics-junior',
          title: '資料の整理——ヒストグラム・箱ひげ図・代表値の使い分け',
          summary: '度数分布表とヒストグラムで分布を読み、五数要約と箱ひげ図・四分位範囲によるばらつきの評価、代表値の使い分けまでを学ぶ。',
          objectives: [
            '度数分布表とヒストグラムを作り、分布の山やすそから特徴を読み取ることができる',
            '中央値・四分位数・四分位範囲を求め、五数要約を箱ひげ図に表すことができる',
            '平均値・中央値・最頻値（モード）をデータの性質に応じて使い分けることができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'ばらつくデータをまとめて見る' },
            {
              type: 'text',
              content: 'アンケートや実験の結果のように大量の数字を並べただけでは、全体のようすはつかめません。そこで **階級に分けて度数を数えた度数分布表** を作り、それを柱状グラフにしたものがヒストグラムです。ヒストグラムを見ると、山の位置・左右のゆがみ・ばらつきの大きさといった分布の特徴がひと目でわかります。分布の中心を 1 つの数で表したものが代表値（平均値・中央値・最頻値）、ばらつきの大きさを表すのが範囲や四分位範囲です。',
            },
            { type: 'formula', tex: '\\\\bar{x} = \\\\dfrac{x_1 + x_2 + \\\\cdots + x_n}{n}, \\\\qquad \\\\text{IQR} = Q_3 - Q_1', display: true },
            { type: 'heading', level: 3, content: '代表値の使い分け' },
            {
              type: 'table',
              headers: ['代表値', '求め方', '向いている場面'],
              rows: [
                ['平均値', '全部たして個数でわる', '外れ値がなく、全データを公平に反映したいとき'],
                ['中央値', '小さい順に並べた中央の値（偶数個なら中央 2 つの平均）', '外れ値の影響を避けたいとき（所得・住宅価格など）'],
                ['最頻値（モード）', '最も多く現れる値（階級なら度数最大の階級）', '一番人気など、件数の多さが知りたいとき'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: '外れ値が 1 つあるだけで平均値は大きく動いてしまいます。年収のデータでは一部の高額所得者が平均を押し上げるため、実感に近いのは中央値だと言われるのはこのためです。代表値を選ぶときは「外れ値がありそうか」「何を知りたいのか」の 2 点を必ず確認しましょう。',
            },
            { type: 'heading', level: 3, content: '度数分布表とヒストグラム' },
            {
              type: 'example',
              title: '例題 1',
              body: '10 人のテスト点数 65, 72, 58, 90, 74, 68, 81, 77, 70, 85 を、階級幅 10 点（50 点からはじめる）の度数分布表に整理せよ。',
              answer: '**50〜60 未満 1 人、60〜70 未満 2 人、70〜80 未満 4 人、80〜90 未満 2 人、90〜100 未満 1 人**。山は 70 点台にあり、低い側にすそが少し引いた分布です。',
            },
            {
              type: 'table',
              headers: ['階級（点）', '度数（人）'],
              rows: [
                ['50 以上 60 未満', '1'],
                ['60 以上 70 未満', '2'],
                ['70 以上 80 未満', '4'],
                ['80 以上 90 未満', '2'],
                ['90 以上 100 未満', '1'],
              ],
            },
            { type: 'heading', level: 3, content: '中央値・四分位数・四分位範囲' },
            {
              type: 'text',
              content: 'データを小さい順に並べ替えて真ん中にくる値が中央値です。個数が偶数のときは中央の 2 つの値の平均をとります。さらに中央値で分割した下半分・上半分の中央値をそれぞれ第 1 四分位数 $Q_1$、第 3 四分位数 $Q_3$ とよび、$Q_3 - Q_1$ を **四分位範囲** といいます。四分位範囲は中央半分のデータだけを使うため、最小値・最大値のような端の極端な値に引きずられにくい、堅実なばらつきの指標です。',
            },
            {
              type: 'derivation',
              title: '四分位範囲の計算手順——8 人のテスト点数で確認する',
              steps: [
                {
                  label: 'Step 1: 小さい順に並べる',
                  tex: '42,\\\\ 48,\\\\ 55,\\\\ 58,\\\\ 62,\\\\ 66,\\\\ 71,\\\\ 90',
                  note: '8 個（偶数）なので中央値は 4 番目と 5 番目の平均になります。',
                },
                {
                  label: 'Step 2: 中央値を求める',
                  tex: '\\\\text{median} = \\\\dfrac{58 + 62}{2} = 60',
                  note: 'データは下半分 42, 48, 55, 58 と上半分 62, 66, 71, 90 に分かれます。中央値自体はどちらのグループにも入れません。',
                },
                {
                  label: 'Step 3: 第 1・第 3 四分位数を求める',
                  tex: 'Q_1 = \\\\dfrac{48 + 55}{2} = 51.5, \\\\qquad Q_3 = \\\\dfrac{66 + 71}{2} = 68.5',
                  note: 'それぞれ下半分・上半分の中央値です。',
                },
                {
                  label: 'Step 4: 四分位範囲を計算する',
                  tex: 'Q_3 - Q_1 = 68.5 - 51.5 = 17',
                  note: '最大値 90 は外れ値気味ですが、四分位範囲 17 はその影響を受けません。これが四分位範囲の強みです。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '箱ひげ図（五数要約のグラフ化）' },
            {
              type: 'text',
              content: '箱ひげ図は、**最小値・$Q_1$・中央値・$Q_3$・最大値** の 5 つの数（五数要約）を一本の図にまとめたものです。箱の中にデータの中央半分が入り、ひげの先まで含めた全体の広がりがわかります。2 つのクラスのテスト結果を比べるとき、箱の長さ（四分位範囲）が短いほうが成績が中央付近に集中しており、箱の位置の高低から代表値の差も読み取れます。',
            },
            {
              type: 'list',
              items: [
                '最小値: データのうち最も小さい値（左のひげの先）',
                '$Q_1$: 下半分の中央値（箱の左端）',
                '中央値: 箱の中の縦の線',
                '$Q_3$: 上半分の中央値（箱の右端）',
                '最大値: データのうち最も大きい値（右のひげの先）',
              ],
            },
            {
              type: 'example',
              title: '例題 2',
              body: '次の 10 個のデータの五数要約と四分位範囲を求めよ。　12, 15, 18, 20, 22, 25, 28, 31, 35, 40',
              answer: '最小値 **12**、$Q_1 =$ **18**、中央値 **23.5**、$Q_3 =$ **31**、最大値 **40**。四分位範囲は $31 - 18 = 13$',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'データ 3, 7, 8, 10, 12 の平均値と中央値を求めよ。',
                  hint: '平均は総和を個数でわる。',
                  answer: '平均値 $(3 + 7 + 8 + 10 + 12) \\\\div 5 = 8$、中央値 **8**（このデータでは両者が一致）',
                },
                {
                  body: 'データ 12, 15, 18, 20, 22, 25, 28, 31, 35, 40 の四分位範囲を求めよ。',
                  hint: '下半分 5 個・上半分 5 個に分けてそれぞれの中央値をとる。',
                  answer: '$Q_1 = 18, Q_3 = 31$、四分位範囲 **13**',
                },
                {
                  body: 'ある店の 1 日の来客者は 10 代 5 人、20 代 14 人、30 代 9 人、40 代 11 人、50 代 6 人だった。最頻値（モード）となる階級を答えよ。',
                  hint: '度数が最大の階級を探す。',
                  answer: '最頻値は **20 代**（14 人で最多）',
                },
                {
                  body: '外れ値を含む可能性が高い資料で、平均値よりも中央値が好まれる理由を一言で述べよ。',
                  hint: '極端な値が代表値に及ぼす影響を考える。',
                  answer: '中央値は **外れ値の影響を受けにくい**（値の大きさではなく並びの位置だけで決まる）から。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '箱ひげ図から直接読み取ることができない値はどれか。',
                  choices: ['平均値', '中央値', '第 3 四分位数'],
                  answerIndex: 0,
                  explanation: '箱ひげ図は最小値・$Q_1$・中央値・$Q_3$・最大値の 5 つを表し、平均値は含まれません。',
                },
                {
                  question: '四分位範囲が小さいことが意味することはどれか。',
                  choices: ['中央付近にデータが集中している', '外れ値が多い', '平均値が大きい'],
                  answerIndex: 0,
                  explanation: '$Q_3 - Q_1$ は中央半分のばらつきなので、小さいほどデータが中央付近に集中しています。',
                },
                {
                  question: '年収のように一部に極端に大きな値が含まれるデータの代表値として適切なのはどれか。',
                  choices: ['中央値', '平均値', '最大値'],
                  answerIndex: 0,
                  explanation: '外れ値に引きずられない中央値が実態を表しやすいです。最大値は代表値ではありません。',
                },
              ],
            },
          ],
        },
      ],
    },

    ],
};
