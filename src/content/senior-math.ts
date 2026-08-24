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
              type: 'derivation',
              title: '平方完成はなぜ「頂点の形」になるのか——導出',
              steps: [
                {
                  label: 'Step 1: x² の項にまとめる',
                  tex: 'ax^2 + bx = a\\left(x^2 + \\frac{b}{a}x\\right)',
                  note: 'まず $x^2$ の係数 a を括り出す。中身は「$x^2$ ＋ (一次の係数/a)」という形になる。',
                },
                {
                  label: 'Step 2: 完全平方をつくる',
                  tex: 'x^2 + \\frac{b}{a}x = \\left(x + \\frac{b}{2a}\\right)^2 - \\left(\\frac{b}{2a}\\right)^2',
                  note: '「一次の係数の半分」を足して2乗し、余分に加えた分を引いて帳消しにする。これが完全平方の核心。',
                },
                {
                  label: 'Step 3: 元に戻す',
                  tex: 'y = a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a} + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\frac{4ac - b^2}{4a}',
                  note: '$-\\frac{b^2}{4a}$ を a 倍すると $-\\frac{b^2}{4a}$、c と通分して定数項が揃う。頂点は $(x, y) = (-\\frac{b}{2a}, \\frac{4ac-b^2}{4a})$。',
                },
              ],
            },
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
            {
              type: 'derivation',
              title: 'なぜ sin²θ + cos²θ = 1 が成り立つのか——単位円からの導出',
              steps: [
                {
                  label: 'Step 1: 単位円上の点',
                  tex: 'P(\\cos\\theta, \\sin\\theta) \\quad (\\text{半径 } 1)',
                  note: '原点 O、点 P、そして x 軸上の P の足元 Q で直角三角形 OPQ ができる。',
                },
                {
                  label: 'Step 2: 三平方の定理を適用',
                  tex: 'OP^2 = OQ^2 + PQ^2',
                  note: 'OP は半径なので 1。OQ は P の x 座標＝cos θ、PQ は y 座標＝sin θ。',
                },
                {
                  label: 'Step 3: 代入',
                  tex: '1^2 = \\cos^2\\theta + \\sin^2\\theta',
                  note: 'つまりこの等式は「半径 1 の円に内接する直角三角形の三平方」そのもの。θ がどんな値でも幾何学的に必ず成立します。',
                },
              ],
            },
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
              type: 'derivation',
              title: '余弦定理の導出——座標平面に置いて三平方を使うだけ',
              steps: [
                {
                  label: 'Step 1: 配置を決める',
                  tex: 'A(0,0), \\quad B(c, 0), \\quad C(b\\cos A, b\\sin A)',
                  note: 'A を原点に、AB を x 軸に沿って置く。AC = b が角 A の方向に伸びるので C の座標はこう書ける（三角比の定義そのもの）。',
                },
                {
                  label: 'Step 2: BC の距離を二乗差で計算',
                  tex: 'a^2 = BC^2 = (b\\cos A - c)^2 + (b\\sin A - 0)^2',
                  note: '2点間の距離の公式（実質は三平方の定理）。',
                },
                {
                  label: 'Step 3: 展開と整理',
                  tex: '= b^2\\cos^2 A - 2bc\\cos A + c^2 + b^2\\sin^2 A',
                },
                {
                  label: 'Step 4: sin²+cos² = 1 でまとめる',
                  tex: 'a^2 = b^2(\\cos^2 A + \\sin^2 A) + c^2 - 2bc\\cos A = b^2 + c^2 - 2bc\\cos A',
                  note: 'A = 90° なら cos A = 0 となり、三平方の定理 $a^2 = b^2+c^2$ に戻る——余弦定理は三平方の「鈍角・鋭角への一般化」です。',
                },
              ],
            },
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
        {
          id: 'circle-inscribed',
          title: '円に内接する四角形と三角形の五心',
          summary: '内接四角形の「対角の和 = 180°」を円周角の定理から導き、三角形の五心を比較して使い分ける。',
          objectives: [
            '円に内接する四角形の対角の和が 180° になる理由を自分の言葉で説明できる',
            '対角の補関係・外角と内対角の関係を使って角度や面積を求められる',
            '三角形の五心（重心・外心・内心・垂心・傍心）の定義と性質を比較して使い分けられる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '円に内接する四角形' },
            {
              type: 'text',
              content: '4つの頂点がすべて1つの円周上にある四角形を**円に内接する四角形**（円内接四角形）といいます。この四角形には「向かい合う角の和が 180°」という強い制約があり、これひとつで角度の問題がほぼ解けてしまいます。さらに逆も成り立つので、「4点が同一円周上にある」ことの証明道具としても使えます。',
            },
            {
              type: 'table',
              headers: ['性質', '内容', '使いどころ'],
              rows: [
                ['対角の補関係', '∠A + ∠C = 180°、∠B + ∠D = 180°', '残りの角を即座に求める。4点共円の証明'],
                ['外角と内対角', '1つの内角の外角は、その隣の内角の内対角（向かいの角）に等しい', '図の中で角の言い換えをする'],
                ['面積（ブラーマグプタの公式）', '$S = \\sqrt{(s-a)(s-b)(s-c)(s-d)}$、$s = \\frac{a+b+c+d}{2}$', '4辺の長さだけが分かっているときの面積（発展）'],
              ],
            },
            {
              type: 'derivation',
              title: 'なぜ対角の和が 180° になるのか——円周角の定理からの導出',
              steps: [
                {
                  label: 'Step 1: 弧を中心角の大きさで測る',
                  tex: '\\overset{\\frown}{AB} + \\overset{\\frown}{BC} + \\overset{\\frown}{CD} + \\overset{\\frown}{DA} = 360°',
                  note: '各弧に対応する中心角の和は一周 360° です。以下、弧の名前でその弧の中心角の大きさを表します。',
                },
                {
                  label: 'Step 2: 円周角は「見込む弧」の半分',
                  tex: '\\angle A = \\frac{1}{2}\\left( \\overset{\\frown}{BC} + \\overset{\\frown}{CD} \\right), \\quad \\angle C = \\frac{1}{2}\\left( \\overset{\\frown}{DA} + \\overset{\\frown}{AB} \\right)',
                  note: '頂点 A から見込まれるのは A を含まない弧 BCD です。円周角の定理より、円周角はその弧の中心角の半分になります。',
                },
                {
                  label: 'Step 3: たし合わせると円周全体が現れる',
                  tex: '\\angle A + \\angle C = \\frac{1}{2} \\times 360° = 180°',
                  note: '弧 BCD と弧 DAB を合わせると円周全体になります。同様に ∠B + ∠D = 180° も成り立ちます。',
                },
                {
                  label: 'Step 4: 逆も使える',
                  tex: '\\angle A + \\angle C = 180° \\Longrightarrow \\text{四角形 ABCD は円に内接する}',
                  note: '対角の和が 180° なら4点は同一円周上にあります。「この4点は共円」という証明で最強の一手です。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '円に内接する四角形 ABCD で ∠B = 75°、∠C = 95° です。∠A と ∠D を求めよ。',
              answer: '対角の補関係より ∠A = 180° − 95° = **85°**、∠D = 180° − 75° = **105°**',
            },
            { type: 'heading', level: 3, content: '三角形の五心' },
            {
              type: 'text',
              content: '三角形には代表的な「中心」が5つあります。どの直線（線分）の交点として定義されるかがすべてを決め、そこから性質が自動的に導けます。試験では「これはどの心か」を見抜くことが第一歩になるため、定義の言葉遣いを正確に覚えることが最重要です。',
            },
            {
              type: 'table',
              headers: ['心', '定義（交点）', 'キーとなる性質', '位置の特徴'],
              rows: [
                ['重心 G', '3本の中線', '$AG : GD = 2 : 1$、3つの小三角形 $\\triangle ABG, \\triangle BCG, \\triangle CAG$ は等積', '常に内部'],
                ['外心 O', '3本の垂直二等分線', '$OA = OB = OC$（外接円の中心）', '鋭角なら内部、直角なら斜辺の中点、鈍角なら外部'],
                ['内心 I', '3本の内角の二等分線', '内接円の中心。$S = rs$', '常に内部'],
                ['垂心 H', '3本の垂線（高さの直線）', '∠A = 90° のとき A と一致', '鋭角なら内部、鈍角なら外部'],
                ['傍心', '内角の二等分線1本と外角の二等分線2本', '傍接円の中心。$S = r_a(s - a)$', '常に外部（3か所ある）'],
              ],
            },
            {
              type: 'list',
              items: [
                '**「等距離」が出たら**: 角の二等分線（内心）か垂直二等分線（外心）。「角の二等分線は2辺に等距離、垂直二等分線は2端点に等距離」',
                '**中点・面積の均等分割が出たら**: 重心。中線の $2 : 1$ の比は頻出事実',
                '**内接円・接線の長さが出たら**: 内心。$S = rs$ は面積と内接円の半径をつなぐ橋渡し',
                '**円に内接する四角形の証明**: 対角の和が 180°（または外角＝内対角）を示す',
              ],
            },
            {
              type: 'example',
              title: '例題（五心の見分け）',
              body: '△ABC で OA = OB = OC となる点 O があるとき、O は何と呼ばれるか。また ∠A = 40° のとき ∠BOC を求めよ。',
              answer: 'O は**外心**（外接円の中心）。中心角は同じ弧に対する円周角の2倍なので ∠BOC = 2∠A = **80°**',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '円に内接する四角形 ABCD で ∠A = 68° のとき、∠C を求めよ。',
                  answer: '対角の補関係より **∠C = 180° − 68° = 112°**',
                },
                {
                  body: '重心・外心・内心・垂心のうち、「どんな三角形でも必ず内部にある」ものをすべて挙げよ。',
                  hint: '鈍角三角形でそれぞれの位置がどうなるかを考える。',
                  answer: '**重心と内心**。外心・垂心は鈍角三角形では外部に、直角三角形では辺上に出ます。',
                },
                {
                  body: '辺が 3, 4, 5 の直角三角形について、$S = rs$ を使って内接円の半径 r を求めよ。',
                  hint: '$s = \\frac{3+4+5}{2}$。',
                  answer: '$S = \\frac{3 \\times 4}{2} = 6$、$s = 6$ より $r = \\frac{S}{s} = \\frac{6}{6} = 1$',
                },
                {
                  body: '円に内接する四角形の4辺が 3, 4, 5, 6 のとき、面積を求めよ。（発展・ブラーマグプタの公式）',
                  hint: '$s = 9$。',
                  answer: '$S = \\sqrt{(9-3)(9-4)(9-5)(9-6)} = \\sqrt{6 \\cdot 5 \\cdot 4 \\cdot 3} = \\sqrt{360} = 6\\sqrt{10}$',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '円に内接する四角形の向かい合う角の和は？',
                  choices: ['90°', '180°', '360°'],
                  answerIndex: 1,
                  explanation: '対角の和は 180°。「円周角は見込む弧の中心角の半分」から導けます。',
                },
                {
                  question: '鋭角三角形の外心はどこにある？',
                  choices: ['三角形の内部', '三角形の外部', '必ず辺上'],
                  answerIndex: 0,
                  explanation: '外心は鋭角なら内部、直角なら斜辺の中点、鈍角なら外部にあります。',
                },
                {
                  question: '重心 G が中線 AD を分ける比 AG : GD は？',
                  choices: ['1 : 2', '2 : 1', '1 : 1'],
                  answerIndex: 1,
                  explanation: '重心は頂点から $2 : 1$ の内分点。「中線を 2:1 に分ける」は頻出事実です。',
                },
              ],
            },
          ],
        },
      ],
    },
    // ---------- 数学I: 数と式 ----------
    {
      id: 's1-numbers',
      name: '数学I：数と式',
      gakushuShidoYoryo: '内容「数と式」: 実数、絶対値、複素数の基礎、多項式の展開と因数分解',
      lessons: [
        {
          id: 'numbers-expressions',
          title: '実数・絶対値と式の変形',
          summary: '実数の分類、絶対値を含む式、有理化、二重根号の処理。',
          objectives: [
            '実数の分類（有理数・無理数）を説明できる',
            '絶対値を含む式を場合分けで処理できる',
            '分母の有理化や二重根号を計算できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '実数の世界' },
            {
              type: 'table',
              headers: ['分類', '定義', '例'],
              rows: [
                ['有理数', '分数 a/b（b≠0）で書ける', '整数、0.5、1/3、0.333…'],
                ['無理数', '分数で書けない実数', '$\\sqrt{2}$, $\\pi$'],
                ['実数', '有理数＋無理数', '数直線上のすべての点'],
              ],
            },
            { type: 'heading', level: 3, content: '絶対値' },
            { type: 'formula', tex: '|a| = \\begin{cases} a & (a \\ge 0) \\\\ -a & (a < 0) \\end{cases}', display: true },
            {
              type: 'text',
              content: '絶対値は「**数直線上での原点からの距離**」なので必ず 0 以上。式では**中身の符号で場合分け**します。$|a - 2|$ は「a と 2 の距離」とも読めます。',
            },
            {
              type: 'example',
              title: '例題',
              body: '$a = -3$ のとき $|a - 1|$ を求めよ。',
              answer: '$a - 1 = -4 < 0$ なので $|a-1| = -(a-1) = $ **4**',
            },
            { type: 'heading', level: 3, content: '根号の処理' },
            {
              type: 'list',
              items: [
                '**有理化**: $\\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$（分母の根号を外す）',
                '**二重根号**: $\\sqrt{4 + 2\\sqrt{3}} = \\sqrt{(\\sqrt{3}+1)^2} = \\sqrt{3}+1$（$x+y$ と $xy$ を見つける）',
                '**同類項の根号**はたし算できる: $\\sqrt{12} - \\sqrt{3} = 2\\sqrt{3} - \\sqrt{3} = \\sqrt{3}$',
              ],
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '$\\sqrt{50} + \\sqrt{8} - \\sqrt{18}$ を簡単にせよ。',
                  answer: '$5\\sqrt{2} + 2\\sqrt{2} - 3\\sqrt{2} = $ **$2\\sqrt{2}$**',
                },
                {
                  body: '$\\dfrac{3}{\\sqrt{5}}$ を分母に根号を含まない形にせよ。',
                  hint: '分子分母に $\\sqrt{5}$ を掛ける。',
                  answer: '$\\dfrac{3\\sqrt{5}}{5}$',
                },
                {
                  body: '$\\sqrt{7 - 4\\sqrt{3}}$ を簡単にせよ。',
                  hint: '$7 - 4\\sqrt{3} = 4 - 4\\sqrt{3} + 3 = (2 - \\sqrt{3})^2$',
                  answer: '$\\sqrt{(2-\\sqrt{3})^2} = $ **$2 - \\sqrt{3}$**（$2 > \\sqrt{3}$ に注意）',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（数と式）',
              questions: [
                {
                  question: '次のうち無理数はどれか。',
                  choices: ['$\\sqrt{9}$', '$0.121212…$', '$\\sqrt{10}$'],
                  answerIndex: 2,
                  explanation: '$\\sqrt{9} = 3$ は整数、0.121212… は循環小数なので有理数。$\\sqrt{10}$ は整数の平方にならない無理数です。',
                },
                {
                  question: '$|x - 3| = 2$ を解くと？',
                  choices: ['$x = 5, 1$', '$x = 5$', '$x = -5, -1$'],
                  answerIndex: 0,
                  explanation: '「3 からの距離が 2」なので $x = 5$ または $x = 1$。',
                },
              ],
            },
          ],
        },
      ],
    },
    // ---------- 数学I: データの分析 ----------
    {
      id: 's1-data',
      name: '数学I：データの分析',
      gakushuShidoYoryo: '内容「データの分析」: 平均値・中央値・分散・標準偏差、四分位範囲、相関',
      lessons: [
        {
          id: 'data-analysis',
          title: '分散・標準偏差と相関',
          summary: 'データのばらつきを数値化し、2つのデータの関係を読む。',
          objectives: [
            '分散・標準偏差を計算し、ばらつきを比較できる',
            '散布図と相関係数から関係の強さを読み取れる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'ばらつきの指標' },
            { type: 'formula', tex: '\\text{分散 } s^2 = \\frac{1}{n}\\sum_{i=1}^{n} (x_i - \\bar{x})^2, \\qquad \\text{標準偏差 } s = \\sqrt{s^2}', display: true },
            {
              type: 'list',
              items: [
                '**範囲**: 最大値 − 最小値（粗い指標）',
                '**四分位範囲**: 上位25%と下位25%を除いた中央50%の幅（外れ値に強い）',
                '**分散**: 偏差の2乗の平均。**標準偏差**はその平方根（データと同じ単位になる）',
                '分散・標準偏差が小さいほどデータは平均の近くに集まっている',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'データ 1, 3, 5 の平均と分散を求めよ。',
              answer: '平均 $\\bar{x} = 3$。偏差は $-2, 0, 2$ なので分散 $= \\frac{4+0+4}{3} = \\frac{8}{3}$',
            },
            { type: 'heading', level: 3, content: '相関' },
            {
              type: 'text',
              content: '2 つの量の関係を散布図で見るとき、点が右上がりに並べば**正の相関**、右下がりなら**負の相関**。相関係数 $r$（$-1 \\le r \\le 1$）はその強さを数値化します。',
            },
            {
              type: 'list',
              items: [
                '$|r|$ が 1 に近いほど強い直線的関係',
                '**相関 ≠ 因果**: 第3の変数（交絡因子）が隠れていることがある',
                '外れ値が相関係数を大きく動かすことがある（データの吟味が重要）',
              ],
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'データ 2, 4, 6, 8 の平均と分散を求めよ。',
                  answer: '平均 5。偏差 $-3, -1, 1, 3$ → 分散 $\\frac{9+1+1+9}{4} = $ **5**',
                },
                {
                  body: '「アイスの売上と水難事故の件数に正の相関がある」ことの正しい解釈は？',
                  answer: '気温という**交絡因子**が両方を増やしている可能性が高い。因果関係とは言えない。',
                },
                {
                  body: '各データに 3 を足すと、平均と標準偏差はどう変わるか。',
                  hint: '足し算はばらつきを変えない。',
                  answer: '平均は **3 増える**が、標準偏差は**不変**（ばらつきは平行移動で変わらない）。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（データ分析）',
              questions: [
                {
                  question: '標準偏差の単位は何か。',
                  choices: ['データと同じ単位', 'データの単位の2乗', '単位をもたない'],
                  answerIndex: 0,
                  explanation: '分散は2乗の単位になるため、平方根をとった標準偏差を使うと元データと同じ単位で比較できます。',
                },
                {
                  question: '外れ値の影響を受けにくい指標はどれか。',
                  choices: ['中央値', '平均値', '分散'],
                  answerIndex: 0,
                  explanation: '中央値は並び順の真ん中なので、極端な値が1つあってもほとんど動きません。',
                },
              ],
            },
          ],
        },
      ],
    },
    // ---------- 数学II: 三角関数・指数対数 ----------
    {
      id: 's2-functions',
      name: '数学II：三角関数・指数関数・対数関数',
      gakushuShidoYoryo: '内容「三角関数」「指数関数・対数関数」: 弧度法、加法定理、指数・対数の計算とグラフ',
      lessons: [
        {
          id: 'trig-functions',
          title: '弧度法と三角関数',
          summary: 'ラジアン、一般角、三角関数のグラフと加法定理。',
          objectives: [
            '弧度法と度数法を相互に換算できる',
            'sin・cos のグラフの性質（周期・最大最小）を説明できる',
            '加法定理を使って計算できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '弧度法' },
            { type: 'formula', tex: '\\theta [\\text{rad}] = \\frac{\\text{弧の長さ}}{\\text{半径}}, \\qquad 180^\\circ = \\pi \\text{ rad}', display: true },
            {
              type: 'list',
              items: [
                '$90^\\circ = \\dfrac{\\pi}{2}$、$60^\\circ = \\dfrac{\\pi}{3}$、$45^\\circ = \\dfrac{\\pi}{4}$、$30^\\circ = \\dfrac{\\pi}{6}$',
                '弧度法なら微積分の公式がきれいになる（数学III で本格使用）',
              ],
            },
            { type: 'heading', level: 3, content: 'グラフの性質' },
            {
              type: 'table',
              headers: ['関数', '周期', '最大・最小', '奇偶'],
              rows: [
                ['$y = \\sin x$', '$2\\pi$', '$1 / -1$', '奇関数（原点対称）'],
                ['$y = \\cos x$', '$2\\pi$', '$1 / -1$', '偶関数（y軸対称）'],
                ['$y = \\tan x$', '$\\pi$', 'なし（漸近線）', '奇関数'],
              ],
            },
            { type: 'heading', level: 3, content: '加法定理' },
            { type: 'formula', tex: '\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta', display: true },
            {
              type: 'derivation',
              title: '加法定理の導出——正弦定理からの距離計算',
              steps: [
                {
                  label: 'Step 1: 単位円上に2点をとる',
                  tex: 'P(\\cos\\alpha, \\sin\\alpha), \\quad Q(\\cos(\\alpha+\\beta), \\sin(\\alpha+\\beta))',
                  note: 'OP と OQ のなす角は β。',
                },
                {
                  label: 'Step 2: 余弦定理で PQ² を表す（その1）',
                  tex: 'PQ^2 = OP^2 + OQ^2 - 2 \\cdot OP \\cdot OQ \\cdot \\cos\\beta = 1 + 1 - 2\\cos\\beta = 2 - 2\\cos\\beta',
                  note: '三角形 OPQ に余弦定理。OP=OQ=1 なので極めて簡単になる。',
                },
                {
                  label: 'Step 3: 座標の差からも PQ² を書く（その2）',
                  tex: 'PQ^2 = (\\cos(\\alpha+\\beta) - \\cos\\alpha)^2 + (\\sin(\\alpha+\\beta) - \\sin\\alpha)^2',
                  note: '展開して $\\cos^2+\\sin^2$ の項をまとめると、$2 - 2\\{\\cos(\\alpha+\\beta)\\cos\\alpha + \\sin(\\alpha+\\beta)\\sin\\alpha\\}$。',
                },
                {
                  label: 'Step 4: (その1)=(その2) から cos の加法定理が得られる',
                  tex: '\\cos(\\alpha+\\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta',
                  note: '両辺の 2 を消して整理。α を −β で置き換えると sin の加法定理も同時に出ます（sin は奇関数であることを使う）。',
                },
              ],
            },
            { type: 'formula', tex: '\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta', display: true },
            {
              type: 'example',
              title: '例題',
              body: '$\\sin 75^\\circ$ を求めよ。',
              answer: '$75 = 45 + 30$ なので加法定理より $\\sin 45\\cos 30 + \\cos 45 \\sin 30 = \\frac{1}{\\sqrt{2}} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{1}{\\sqrt{2}} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '$\\dfrac{2\\pi}{3}$ rad を度数法で表せ。',
                  answer: '$\\dfrac{2\\pi}{3} \\times \\dfrac{180}{\\pi} = $ **120°**',
                },
                {
                  body: '$y = 2\\sin x + 1$ の最大値と最小値を求めよ。',
                  hint: '$\\sin x$ の範囲は $-1 \\le \\sin x \\le 1$',
                  answer: '最大 **3**（$\\sin x = 1$）、最小 **$-1$**（$\\sin x = -1$）',
                },
                {
                  body: '$\\cos 15^\\circ$ を求めよ。',
                  hint: '$15 = 45 - 30$',
                  answer: '$\\cos 45\\cos 30 + \\sin 45 \\sin 30 = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（三角関数）',
              questions: [
                {
                  question: '$\\pi$ rad は何度か。',
                  choices: ['180°', '360°', '90°'],
                  answerIndex: 0,
                  explanation: '半回転（180°）が π ラジアン。弧度法は半径と同じ長さの弧に対する中心角を 1 rad とします。',
                },
                {
                  question: '$y = \\cos x$ はどの対称性をもつか。',
                  choices: ['y 軸について対称（偶関数）', '原点について対称（奇関数）', 'どちらでもない'],
                  answerIndex: 0,
                  explanation: '$\\cos(-x) = \\cos x$ なので偶関数です。$\\sin(-x) = -\\sin x$ の sin は奇関数。',
                },
              ],
            },
          ],
        },
        {
          id: 'exp-log-functions',
          title: '指数関数と対数関数',
          summary: '指数法則の拡張、対数の性質、2つの関数のグラフと関係。',
          objectives: [
            '実数の指数計算と対数計算ができる',
            '指数関数・対数関数が互いに逆関数であることを説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '指数の拡張' },
            {
              type: 'list',
              items: [
                '$a^0 = 1$、$a^{-n} = \\dfrac{1}{a^n}$（負の指数）',
                '$a^{1/2} = \\sqrt{a}$（分数の指数は根号）',
                '$a^x a^y = a^{x+y}$、$(a^x)^y = a^{xy}$ は実数の指数でも成り立つ',
              ],
            },
            { type: 'heading', level: 3, content: '対数' },
            { type: 'formula', tex: 'a^x = N \\iff x = \\log_a N \\quad (a > 0, a \\ne 1, N > 0)', display: true },
            {
              type: 'list',
              items: [
                '$\\log_a xy = \\log_a x + \\log_a y$（積→和）',
                '$\\log_a \\dfrac{x}{y} = \\log_a x - \\log_a y$（商→差）',
                '$\\log_a x^n = n \\log_a x$（累乗→係数）',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$\\log_2 8 + \\log_2 4$ を求めよ。',
              answer: '$3 + 2 = $ **5**（$\\log_2 32 = 5$ とも言える）',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '$\\log_3 81$ を求めよ。',
                  hint: '$81 = 3^4$',
                  answer: '**4**',
                },
                {
                  body: '$\\log_2 3 = a$ のとき $\\log_2 12$ を $a$ で表せ。',
                  hint: '$12 = 4 \\times 3$',
                  answer: '$\\log_2 4 + \\log_2 3 = 2 + a$',
                },
                {
                  body: '$2^x = 10$ を解くとき、$x$ を対数で表せ。',
                  answer: '$x = \\log_2 10 = \\dfrac{\\log 10}{\\log 2} \\approx 3.32$（底の変換公式）',
                },
              ],
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 対数の計算が出題されます',
                props: { topic: 'log-evaluate' },
              },
            },
            {
              type: 'quiz',
              title: '確認クイズ（指数・対数）',
              questions: [
                {
                  question: '$\\log_a 1$ の値は？（$a>0, a\\neq1$）',
                  choices: ['0', '1', '$a$'],
                  answerIndex: 0,
                  explanation: '$a^0 = 1$ なので答えは 0。「1 の対数は常に 0」。',
                },
                {
                  question: '$y = 2^x$ と $y = \\log_2 x$ のグラフの関係は？',
                  choices: ['y = x について対称（逆関数）', 'x 軸について対称', '一致する'],
                  answerIndex: 0,
                  explanation: '指数関数と対数関数は互いに逆関数なので、直線 y = x について線対称になります。',
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
              type: 'derivation',
              title: "$(x^n)' = nx^{n-1}$ の導出——定義から二項定理まで",
              steps: [
                {
                  label: 'Step 1: 微分係数の定義を適用',
                  tex: "f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^n - x^n}{h}",
                },
                {
                  label: 'Step 2: 二項定理で展開',
                  tex: '(x+h)^n = x^n + nx^{n-1}h + \\binom{n}{2}x^{n-2}h^2 + \\cdots + h^n',
                  note: '$h$ を括り出せる項だけ注目する。',
                },
                {
                  label: 'Step 3: 分子を整理',
                  tex: '\\frac{(x+h)^n - x^n}{h} = nx^{n-1} + \\binom{n}{2}x^{n-2}h + \\cdots + h^{n-1}',
                  note: '最初の項以外はすべて h を因子にもつ。',
                },
                {
                  label: 'Step 4: h → 0 の極限',
                  tex: "\\lim_{h \\to 0}\\left[ nx^{n-1} + (\\text{h を含む項}) \\right] = nx^{n-1}",
                  note: '残るのは最初の項だけ。これが「次数が1つ落ちて係数がかかる」理由の正体です。',
                },
              ],
            },
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
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '激ムズ無限ドリル（発展）: 積・合成関数の微分。連鎖律を使いこなせるか挑戦しよう',
                props: { topic: 'hard-differentiate' },
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
              type: 'derivation',
              title: '$\\int x^n dx = \\frac{x^{n+1}}{n+1}$ の導出——微分の逆をたどる',
              steps: [
                {
                  label: 'Step 1: 「微分したら xⁿ」になる関数を探す',
                  tex: '\\frac{d}{dx} x^{m} = m x^{m-1}',
                  note: "$(x^m)' = mx^{m-1}$ の公式を逆向きに使う。",
                },
                {
                  label: 'Step 2: 次数の条件を合わせる',
                  tex: 'm - 1 = n \\;\\Rightarrow\\; m = n+1',
                },
                {
                  label: 'Step 3: 係数を調整',
                  tex: '\\frac{d}{dx}\\left[ \\frac{x^{n+1}}{n+1} \\right] = \\frac{(n+1)x^n}{n+1} = x^n',
                  note: '掛けた定数は微分しても残るので、1/(n+1) を掛けておけば打ち消し合う。',
                },
                {
                  label: 'Step 4: 積分定数',
                  tex: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C',
                  note: '定数 C を加えても微分すれば消えるため、原始関数は無数にある。これが「+C」が必要な理由。',
                },
              ],
            },
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
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '激ムズ無限ドリル（発展）: 三次式の不定積分と置換積分。積分定数 C を忘れずに',
                props: { topic: 'indefinite-integrate' },
              },
            },
          ],
        },
        {
          id: 'derivative-applications',
          title: '微分の応用——接線・法線と速度・加速度',
          summary: '接線・法線の方程式の公式とその由来、位置の関数を微分して速度・加速度を読み取る方法。',
          objectives: [
            '曲線上の指定した点での接線・法線の方程式を求められる',
            '接線の傾きが導関数である理由を平均変化率の極限で説明できる',
            '位置 s(t) から速度・加速度を求め、運動のようすを符号で判定できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '接線と法線の方程式' },
            {
              type: 'text',
              content: "曲線 $y = f(x)$ 上の点 $(x_1, f(x_1))$ における接線の傾きは、微分係数 $f'(x_1)$ です。接線に直交する直線を**法線**といい、2直線が垂直のとき傾きの積が $-1$ になることを使います。「接線を求めよ」は微分単元の最頻出アプリケーションなので、公式を即座に書けるレベルにしておきましょう。",
            },
            { type: 'formula', tex: "y = f'(x_1)(x - x_1) + f(x_1)", display: true },
            { type: 'formula', tex: "y = -\\frac{1}{f'(x_1)}(x - x_1) + f(x_1)", display: true },
            {
              type: 'derivation',
              title: '接線の公式はどこから来るのか——割線の極限',
              steps: [
                {
                  label: 'Step 1: 曲線上の2点を通る直線（割線）',
                  tex: 'm_{PQ} = \\frac{f(x_1 + h) - f(x_1)}{(x_1 + h) - x_1} = \\frac{f(x_1+h) - f(x_1)}{h}',
                  note: 'P$(x_1, f(x_1))$、Q$(x_1+h,\\ f(x_1+h))$ を結ぶ直線の傾き＝平均変化率です。',
                },
                {
                  label: 'Step 2: Q を限りなく P に近づける',
                  tex: "\\lim_{h \\to 0} \\frac{f(x_1+h)-f(x_1)}{h} = f'(x_1)",
                  note: 'h → 0 のとき Q は P に重なり、割線は接線に一致します。これが微分係数の定義そのものです。',
                },
                {
                  label: 'Step 3: 点と傾きから直線の方程式へ',
                  tex: "y - f(x_1) = f'(x_1)(x - x_1)",
                  note: '「点 $(x_1, y_1)$ を通り傾き m の直線は $y - y_1 = m(x - x_1)$」に代入しただけです。',
                },
                {
                  label: 'Step 4: 法線の傾き',
                  tex: "f'(x_1) \\cdot m_{\\text{法}} = -1 \\Longrightarrow m_{\\text{法}} = -\\frac{1}{f'(x_1)}",
                  note: "垂直な2直線の傾きの積は −1。ただし $f'(x_1) = 0$ のとき接線は水平で、法線は鉛直 $x = x_1$ になります。",
                },
              ],
            },
            {
              type: 'table',
              headers: ['直線', '傾き', '方程式', 'チェックポイント'],
              rows: [
                ['接線', "$f'(x_1)$", "$y = f'(x_1)(x - x_1) + f(x_1)$", '接点の y 座標は $f(x_1)$。代入忘れに注意'],
                ['法線', "-\\dfrac{1}{f'(x_1)}$", "$y = -\\dfrac{1}{f'(x_1)}(x - x_1) + f(x_1)$", "$f'(x_1) = 0$ なら法線は $x = x_1$"],
              ],
            },
            { type: 'heading', level: 3, content: '速度と加速度' },
            {
              type: 'text',
              content: '直線上を動く点の時刻 t における位置を $s(t)$ とおくと、**速度は位置の微分係数**、**加速度は速度の微分係数**です。微分は「変化の割合」を取り出す操作なので、位置 → 速度 → 加速度と微分を重ねるたびに一段「変化の変化」へ進みます。符号の読み取り（正方向・負方向・折り返し）までセットで押さえましょう。',
            },
            { type: 'formula', tex: 'v = \\frac{ds}{dt}, \\qquad a = \\frac{dv}{dt} = \\frac{d^2 s}{dt^2}', display: true },
            {
              type: 'table',
              headers: ['量', '意味', '求め方', '単位の例'],
              rows: [
                ['位置 $s(t)$', '基準点からの符号つき距離', '―（問題で与えられる）', 'm'],
                ['速度 $v(t)$', '位置の変化の割合', '$s(t)$ を微分', 'm/s'],
                ['加速度 $a(t)$', '速度の変化の割合', '$v(t)$ を微分（$s$ を2回微分）', 'm/s²'],
              ],
            },
            {
              type: 'list',
              items: [
                '$v > 0$: 正の向きに進む／$v < 0$: 負の向きに進む',
                '$v = 0$: 一瞬止まっている。**折り返し点の候補**（前後で v の符号が変われば本当に折り返す）',
                '$v$ と $a$ が同符号 → 速くなる。異符号 → 遅くなる',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '点 P は直線上を $s = t^3 - 6t^2 + 9t$ ($t \\ge 0$) で表される位置を動く。(1) 速度 $v(t)$ を求めよ。(2) P が最初に折り返す時刻と、そのときの位置を求めよ。',
              answer:
                "(1) $v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$。(2) $v = 0$ となるのは $t = 1, 3$。$0 < t < 1$ で $v > 0$、$1 < t < 3$ で $v < 0$ なので最初の折り返しは **$t = 1$**、そのときの位置は **$s(1) = 1 - 6 + 9 = 4$**",
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '放物線 $y = x^2$ 上の点 $(1, 1)$ における接線と法線の方程式を求めよ。',
                  answer: "傾きは $y' = 2x$ より $2$。接線は **$y = 2x - 1$**、法線は傾き $-\\frac{1}{2}$ で **$y = -\\frac{1}{2}x + \\frac{3}{2}$**",
                },
                {
                  body: '曲線 $y = x^3 - 3x$ の傾きが 9 である接線をすべて求めよ。（発展）',
                  hint: "$3x^2 - 3 = 9$ となる接点の x 座標を探す。",
                  answer: "$3x^2 - 3 = 9$ より $x = \\pm 2$。接点は $(2, 2)$ と $(-2, 2)$ なので **$y = 9x - 16$** と **$y = 9x + 16$**",
                },
                {
                  body: '位置 $s = t^3 - 6t^2 + 9t$ ($t \\ge 0$) で動く点について、加速度 $a(t)$ を求め、$t = 1$ で速くなっているか遅くなっているか答えよ。',
                  hint: '加速度は $v(t)$ をさらに微分する。',
                  answer: "$a(t) = 6t - 12$。$t = 1$ では $v > 0$、$a = -6 < 0$ と符号が逆なので**遅くなっている**",
                },
                {
                  body: '速度が $v(t) = t^2 - 4t + 3$ ($0 \\le t \\le 3$) のとき、点が負の向きに動いている時間帯を求めよ。',
                  hint: '$v < 0$ となる $t$ の範囲。',
                  answer: '$v = (t-1)(t-3)$ より **$1 < t < 3$** で負の向きに動く',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: "曲線上の点での法線の傾きは（$f'(x_1) \\ne 0$ のとき）？",
                  choices: ["$f'(x_1)$", "$-\\dfrac{1}{f'(x_1)}$", "$-f'(x_1)$"],
                  answerIndex: 1,
                  explanation: '接線と法線は垂直なので、傾きの積が −1 になるように取ります。',
                },
                {
                  question: '位置 $s(t)$ を2回微分すると何が得られる？',
                  choices: ['速度', '加速度', '距離'],
                  answerIndex: 1,
                  explanation: '1回微分で速度、2回微分で加速度です。',
                },
                {
                  question: '速度 $v(t) > 0$ が意味することは？',
                  choices: ['加速している', '正の向きに進んでいる', '静止している'],
                  answerIndex: 1,
                  explanation: '速度の符号は進行方向を表します。加速か減速かは $a(t)$ との符号関係で決まります。',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

