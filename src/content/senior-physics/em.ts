import type { Unit } from '../types';

/** 物理 第3項目「電気と磁気」 */
export const emUnit: Unit = {
  id: 'sp-em',
  name: '電気と磁気',
  gakushuShidoYoryo:
    '内容「電気と磁気」(1) 電場と電位、コンデンサー、(2) 電流と回路、(3) 電流と磁場、電磁誘導',
  lessons: [
    {
      id: 'electric-field-potential',
      title: '電場・電位とコンデンサー',
      summary: 'クーロンの法則から電場・電位へ、平行板コンデンサーの性質を学ぶ。',
      objectives: [
        '電場と電位の関係を使える',
        'コンデンサーの容量と蓄えられるエネルギーを計算できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'クーロンの法則と電場' },
        { type: 'formula', tex: "F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}, \\qquad \\vec{E} = \\frac{\\vec{F}}{q}", display: true },
        {
          type: 'text',
          content: '**電場 ＝ 単位電荷が受ける力**。点電荷のつくる電場は $E = \\dfrac{kq}{r^2}$（k は比例定数）。電場の向きは正電荷にはたらく力の向きです。',
        },
        { type: 'heading', level: 3, content: '電位' },
        { type: 'formula', tex: 'V = \\frac{W}{q} \\text{（仕事との関係）}, \\qquad E = -\\frac{dV}{d} \\text{（一様電場）}', display: true },
        {
          type: 'text',
          content: '**高電位→低電位**へ正電荷は自然に動きます。電位差 V [V] を越えて電荷 q [C] が動くと $W = qV$ の仕事。電子ボルト eV はこの単位系から出てきます。',
        },
        { type: 'heading', level: 3, content: 'コンデンサー' },
        { type: 'formula', tex: 'Q = CV, \\qquad U = \\frac{1}{2}CV^2, \\qquad C = \\varepsilon\\frac{S}{d}', display: true },
        {
          type: 'list',
          items: [
            '**並列**: 容量の和 $C = C_1 + C_2$（電圧は共通）',
            '**直列**: $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$（電荷は共通）',
            '誘電体を挿入すると容量は増える（ε が大きくなる）',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '容量 2 μF のコンデンサーを 100 V で充電した。蓄えられる電荷とエネルギーを求めよ。',
          answer: '$Q = CV = 2 \\times 10^{-6} \\times 100 = 200$ μC、$U = \\tfrac{1}{2}CV^2 = 10^{-2}$ J',
        },
      ],
    },
    {
      id: 'circuits-magnetism',
      title: '直流回路・電流と磁場・電磁誘導',
      summary: 'オームの法則、ローレンツ力、電磁誘導と交流までの要点。',
      blocks: [
        { type: 'heading', level: 3, content: '直流回路' },
        { type: 'formula', tex: 'V = RI, \\qquad P = VI = I^2R', display: true },
        {
          type: 'list',
          items: [
            '**直列**: 抵抗の和、電流は共通　**並列**: 逆数の和、電圧は共通',
            'キルヒホッフの法則：①節点で電流入出の和が0、②閉回路で起電力の和＝抵抗による降下の和',
            '**テブナン等価**: 回路を「起電力＋内部抵抗」に置き換えて考える',
          ],
        },
        { type: 'heading', level: 3, content: '電流と磁場' },
        { type: 'formula', tex: '\\text{フレミング左手}: \\vec{F} = q\\vec{v} \\times \\vec{B}, \\qquad H = nI, B = \\mu_0 nI \\text{（ソレノイド）}', display: true },
        {
          type: 'text',
          content: '磁場中を動く電荷は**速度に垂直な力**を受けるため、速さを変えずに進路だけ曲げられます（円運動）。これがサイクロトロンの原理です。',
        },
        { type: 'heading', level: 3, content: '電磁誘導と交流' },
        { type: 'formula', tex: 'V_N = -n\\frac{d\\Phi}{dt} \\text{（レンツの法則）}, \\qquad V_L = \\omega L I \\text{（コイル）}, V_C = \\frac{I}{\\omega C} \\text{（コンデンサー）}', display: true },
        {
          type: 'list',
          items: [
            '実効値 ＝ 最大値 ÷ √2（正弦波交流）',
            '共振周波数：$f = \\dfrac{1}{2\\pi\\sqrt{LC}}$ — LC共振でラジオの同調ができる',
            '**変圧器**: 匝数比で電圧を変え、送電では高電圧化により損失 $I^2R$ を抑える',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '最大値 141 V の正弦波交流の実効値を求めよ。',
          answer: '$141/\\sqrt{2} \\approx 100$ V',
        },
      ],
    },
  ],
};
