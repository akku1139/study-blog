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
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '距離 $r$ を 2 倍に離したとき、2 点電荷間にはたらくクーロン力は何倍になるか。',
              answer: '$F \\propto \\dfrac{1}{r^2}$ より **1/4 倍**。逆二乗則なので距離の2乗に反比例します。',
            },
            {
              body: '平行板コンデンサーの極板間距離を半分にしたとき、容量はどうなるか。',
              answer: '$C = \\varepsilon S/d$ の $d$ が 1/2 になるので **2 倍**。',
            },
            {
              body: '電位差 500 V の 2 点間で +2 C の電荷を動かすのに必要な仕事を求めよ。',
              hint: '$W = qV$',
              answer: '$W = qV = 2 \\times 500 = 1000$ J',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（電場とコンデンサー）',
          questions: [
            {
              question: '一様な電場の中で電子が受ける力の向きは？',
              choices: ['電場の向きと同じ', '電場の向きと逆向き', '電場に垂直'],
              answerIndex: 1,
              explanation: '電子は負の電荷なので、力 $\\vec{F} = q\\vec{E}$ の向きは電場と逆になります。',
            },
            {
              question: 'コンデンサーを充電したまま極板間に誘電体を挿入した。電荷 Q はどうなるか。',
              choices: ['増える', '減る', '変わらない'],
              answerIndex: 2,
              explanation: '電池につないだまま（V 固定）なら Q = CV で Q は増えますが、**充電後に切り離して**挿入すると電荷は保存され不変。容量が増えて電圧が下がります。',
            },
            {
              question: 'コンデンサー2個を直列にしたときの合成容量は？',
              choices: ['和', '逆数の和の逆', '変わらない'],
              answerIndex: 1,
              explanation: '直列では $1/C = 1/C_1 + 1/C_2$。合成容量はどちらの単独容量よりも小さくなります。',
            },
          ],
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
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '6 Ω と 3 Ω の抵抗を並列にしたときの合成抵抗を求めよ。',
              hint: '$\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$',
              answer: '$\\dfrac{1}{R} = \\dfrac{1}{6} + \\dfrac{1}{3} = \\dfrac{1}{2}$ より **2 Ω**。',
            },
            {
              body: '上の合成回路に 12 V の電池をつないだときの全電流と、各抵抗にかかる電圧を求めよ。',
              answer: '$I = V/R = 12/2 = $ **6 A**。並列なので両抵抗とも **12 V**。',
            },
            {
              body: '抵抗 R に電流 i を t 秒間流したときのジュール熱を表せ。',
              hint: '電力 P = i²R',
              answer: '$Q = i^2Rt$',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（回路・磁場・誘導）',
          questions: [
            {
              question: 'コイル（誘導素子）に直流を流し始めた瞬間、電流はどう振る舞うか。',
              choices: ['すぐに最大値になる', 'しばらく流れにくい', '逆向きに流れる'],
              answerIndex: 1,
              explanation: 'コイルは電流の変化を妨げる誘導起電力（レンツの法則）を生じます。交流ではこれがリアクタンスとして働きます。',
            },
            {
              question: '変圧器で電圧を 10 倍に上げて送電すると、送電線の損失はどうなるか。',
              choices: ['10 倍になる', '1/10 になる', '1/100 になる'],
              answerIndex: 2,
              explanation: '同一電力なら電圧を10倍 → 電流は1/10。損失は $i^2R$ なので $(1/10)^2 = $ **1/100**。',
            },
            {
              question: '磁石をコイルに近づけると誘導電流が流れる。その向きを決める法則は？',
              choices: ['レンツの法則', 'オームの法則', 'フーリエの法則'],
              answerIndex: 0,
              explanation: 'レンツの法則「誘導電流は磁束の変化を妨げる向きに流れる」。磁石を近づけると反発する向き、遠ざけると引き合う向きに流れます。',
            },
          ],
        },
      ],
    },
  ],
};
