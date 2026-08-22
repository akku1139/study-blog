import type { Unit } from '../types';

/** 物理 第1項目「様々な運動」 */
export const motionUnit: Unit = {
  id: 'sp-motion2',
  name: '様々な運動',
  gakushuShidoYoryo:
    '内容「様々な運動」(1) 平面内の運動（放物運動・円運動・単振動）、(2) 運動量と力積',
  lessons: [
    {
      id: 'circular-motion',
      title: '円運動と単振動',
      summary: '等速円運動の向心力、単振動の復元力と周期を学ぶ。',
      objectives: [
        '円運動に必要な向心力を計算できる',
        '単振動の周期公式を使い、ばね振り子・単振り子を扱える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '等速円運動' },
        {
          type: 'text',
          content:
            '速さ一定の円運動でも**方向が変わり続ける＝加速度がある**。加速度は中心向きで、大きさは次の通り。これを実現する力が**向心力**です。',
        },
        { type: 'formula', tex: 'a = \\frac{v^2}{r} = r\\omega^2, \\qquad F = m\\frac{v^2}{r}', display: true },
        {
          type: 'example',
          title: '例題',
          body: '質量 0.5 kg の物体が、長さ 0.8 m のひもにつながれ水平面内で等速円運動している。速さ 4 m/s のときひもの張力を求めよ。',
          answer: '$F = mv^2/r = 0.5 \\times 16 / 0.8 = 10$ N',
        },
        { type: 'heading', level: 3, content: '単振動' },
        {
          type: 'text',
          content:
            '平衡位置からの変位 x に比例した復元力 $F = -kx$ を受ける運動が**単振動**です。変位は正弦関数で表され、周期は振幅によらず一定。',
        },
        { type: 'formula', tex: 'x = A\\sin\\omega t, \\qquad T = 2\\pi\\sqrt{\\frac{m}{k}}', display: true },
        {
          type: 'list',
          items: [
            '**速度**: 変位が 0（中心）で最大、端（振幅）で 0',
            '**加速度**: 端で最大（$\\omega^2 A$）、中心で 0 —— 速度と逆の位相',
            '**単振り子**: $T = 2\\pi\\sqrt{l/g}$（振角が小さいとき）',
          ],
        },
        {
          type: 'note',
          variant: 'warn',
          content: '円運動の「遠心力」は慣性力です。慣性系から見れば「向心力が不足して外へ飛び出す」ではなく「向心力がなければ直進する」。答案では慣性系の記述を使いましょう。',
        },
      ],
    },
    {
      id: 'momentum-impulse',
      title: '運動量と力積',
      summary: '力積＝運動量変化、衝突における運動量保存則を学ぶ。',
      objectives: ['力積と運動量の関係を使える', '衝突問題を運動量保存則で解ける'],
      blocks: [
        { type: 'heading', level: 3, content: '力積と運動量' },
        { type: 'formula', tex: "\\vec{F}' = m\\vec{a} \\Rightarrow \\vec{I} = \\vec{F}t = m\\vec{v} - m\\vec{v_0}", display: true },
        {
          type: 'text',
          content: '**力積 ＝ 運動量の変化**。グラフ問題では F–t グラフの**面積**が力積になります。',
        },
        { type: 'heading', level: 3, content: '運動量保存則' },
        { type: 'formula', tex: 'm_1 v_1 + m_2 v_2 = m_1 v_1\' + m_2 v_2\'', display: true },
        {
          type: 'text',
          content:
            '内部力（衝突の力）だけがはたらく系では、全運動量は保存します。衝突前後で**力学的エネルギーまで保存**する弾性衝突では式が2本立つので解が確定します。',
        },
        {
          type: 'example',
          title: '例題',
          body: '質量 m の球Aが速さ v で静止した質量 m の球Bに正面衝突し、完全弾性衝突した。衝突後の両者の速さを求めよ。',
          answer: '運動量保存：$v = v_A\' + v_B\'$、弾性条件：$v^2 = {v_A\'}^2 + {v_B\'}^2$。解いて **$v_A\' = 0$, $v_B\' = v$**（同質量なら速度がそっくり入れ替わる）',
        },
      ],
    },
    {
      id: 'energy-work',
      title: '仕事と力学的エネルギー',
      summary: '仕事・位置エネルギー・力学的エネルギー保存則を学ぶ。',
      blocks: [
        { type: 'formula', tex: 'W = Fs\\cos\\theta, \\qquad K = \\frac{1}{2}mv^2, \\qquad U = mgh \\text{（重力）}, \\frac{1}{2}kx^2 \\text{（ばね）}', display: true },
        {
          type: 'text',
          content: '保存力だけがはたらく間、**K + U = 一定**（力学的エネルギー保存）。摩擦など非保存力があるときは、その仕事ぶんだけ減ります。',
        },
        {
          type: 'widget',
          widget: { id: 'physics-projectile', caption: 'プレイグラウンド: 放物運動でも K+U は常に一定（頂点で K→U へ入れ替わる）' },
        },
        {
          type: 'example',
          title: '例題',
          body: '高さ h の滑らかな斜面をすべり落ちた物体の、斜面下端での速さを求めよ。',
          answer: '$mgh = \\dfrac{1}{2}mv^2$ より **$v = \\sqrt{2gh}$**（斜面の傾きによらない）',
        },
        {
          type: 'quiz',
          title: '確認クイズ（力学的エネルギー）',
          questions: [
            {
              question: '水平面を等速で引っ張られている荷物の力学的エネルギーはどうなるか。',
              choices: [
                '運動エネルギーも位置エネルギーも変わらない',
                '運動エネルギーが増え続ける',
                '仕事がされたぶんだけ必ず増える',
              ],
              answerIndex: 0,
              explanation: '等速＝運動エネルギー一定、水平面＝重力による位置エネルギー一定。引く力の仕事は摩擦熱などへ逃げる（保存されない）。',
            },
            {
              question: '真上に投げたボールが最高点に達する瞬間、速度と加速度は？',
              choices: [
                '速度 0、加速度は重力加速度 g 下向き',
                '速度 0、加速度も 0',
                '速度は g、加速度 0',
              ],
              answerIndex: 0,
              explanation: '最高点では向きが変わるので速度は一瞬 0。しかし重力は常にはたらいているため加速度はずっと g 下向き——「速度 0 ＝ 力 0」ではないのが重要ポイント。',
            },
            {
              question: '初速 v₀ で打ち上げた物体の最高到達高度（空気抵抗なし）は？',
              choices: ['$\\dfrac{v_0^2}{2g}$', '$\\dfrac{1}{2}gv_0^2$', '$\\dfrac{v_0}{2g}$'],
              answerIndex: 0,
              explanation: '$\\frac{1}{2}mv_0^2 = mgh$ を h について解く。初速を 2 倍にすると高度は 4 倍になることに注意。',
            },
          ],
        },
      ],
    },
  ],
};
