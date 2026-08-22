import type { Unit } from '../types';

/** 物理 第4項目「原子」 */
export const atomicUnit: Unit = {
  id: 'sp-atomic',
  name: '原子',
  gakushuShidoYoryo:
    '内容「原子」(1) 粒子性と波動性（光電効果・X線回折・電子の干渉）、(2) 原子の構造と光スペクトル、(3) 原子核',
  lessons: [
    {
      id: 'wave-particle-duality',
      title: '粒子性と波動性',
      summary: '光も電子も「粒子」と「波」の両面をもつことを、実験事実から学ぶ。',
      objectives: [
        '光電効果を光子説で説明し仕事関数の計算ができる',
        'ドブロイ波長を求めることができる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '光電効果と光子' },
        {
          type: 'text',
          content:
            '金属に光を当てると電子が飛び出す**光電効果**。古典波動論では説明できない実験結果（振動数がしきい値以下なら強度によらず電子が出ない）を、アインシュタインは「光はエネルギー $h\\nu$ の粒（光子）である」として説明しました。',
        },
        { type: 'formula', tex: '\\frac{1}{2}mv^2_{max} = h\\nu - W \\quad (W: \\text{仕事関数})', display: true },
        { type: 'formula', tex: 'E = h\\nu = \\frac{hc}{\\lambda}, \\qquad p = \\frac{h}{\\lambda}', display: true },
        { type: 'heading', level: 3, content: '物質波' },
        {
          type: 'text',
          content:
            '逆に、電子線が結晶で回折・干渉する（デビッション–ガーマーの実験）ことから、**粒子にも波動性がある**ことが示されました。ドブロイの式：',
        },
        { type: 'formula', tex: '\\lambda = \\frac{h}{mv}', display: true },
        {
          type: 'example',
          title: '例題',
          body: '仕事関数 2.0 eV の金属に、エネルギー 4.0 eV の光子を当てた。飛び出す電子の最大運動エネルギーを求めよ。',
          answer: '$4.0 - 2.0 = $ **2.0 eV**',
        },
        {
          type: 'note',
          variant: 'info',
          content: 'プランク定数 h ≈ 6.6 × 10⁻³⁴ J·s。ミクロの世界では h が小さすぎて量子性が身近に感じられませんが、スケールを変えると現れる——それがこの単元の主役です。',
        },
        { type: 'heading', level: 3, content: '小ネタ: 光速度不変がもたらす「時間の遅れ」' },
        {
          type: 'widget',
          widget: {
            id: 'time-dilation',
            caption: '速く動く時計はゆっくり進む。v を光速に近づけるとローレンツ因子 γ が発散する',
          },
        },
      ],
    },
    {
      id: 'atom-nucleus',
      title: '原子の構造と原子核',
      summary: 'ボーアの水素原子模型、スペクトル、放射性崩壊と質量欠損。',
      blocks: [
        { type: 'heading', level: 3, content: 'ボーアの水素原子' },
        {
          type: 'list',
          items: [
            '電子は特定の軌道（定常状態）のみ存在できる。軌道半径は $r_n = n^2 a_0$',
            '**エネルギー準位**: $E_n = -\\dfrac{13.6}{n^2}$ eV（基底状態 n=1 で −13.6 eV）',
            '遷移の際に差にあたる光子を出す・吸収する → **輝線スペクトル**（元素の指紋）',
          ],
        },
        {
          type: 'text',
          content: '放出される光子の振動数は $h\\nu = E_m - E_n$。可視光のバルマー系列は高準位 → n=2 への遷移です。',
        },
        { type: 'heading', level: 3, content: '原子核と放射能' },
        {
          type: 'table',
          headers: ['崩壊', '放出', 'Z（陽子数）', 'A（質量数）'],
          rows: [
            ['α崩壊', 'ヘリウム核 ⁴₂He', '−2', '−4'],
            ['β⁻崩壊', '電子 e⁻', '+1', '不変'],
            ['γ崩壊', '光子', '不変', '不変'],
          ],
        },
        { type: 'formula', tex: 'N = N_0 \\left(\\frac{1}{2}\\right)^{t/T}, \\qquad \\Delta m c^2 = E \\text{（質量欠損）}', display: true },
        {
          type: 'example',
          title: '例題',
          body: '半減期 5 日の放射性同位体が 80 g ある。20 日後には何 g 残っているか。',
          answer: '20日 = 4半減期。$80 \\times (1/2)^4 = $ **5 g**',
        },
        {
          type: 'note',
          variant: 'warn',
          content: '核反応では**電荷と質量数の保存**を必ず確認。β⁻崩壊で中性子が陽子になるため Z が増えます（A は不変）。',
        },
        { type: 'heading', level: 3, content: '小ネタ: 半減期を自分の手で体験する' },
        {
          type: 'widget',
          widget: {
            id: 'half-life',
            caption: '原子 400 個が毎年半分ずつ壊変するシミュレーション。減衰曲線 N = N₀(1/2)^(t/T) が描かれる',
          },
        },
      ],
    },
  ],
};
