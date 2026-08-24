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
      ],
    },

    ],
};
