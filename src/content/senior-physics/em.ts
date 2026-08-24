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
          type: 'derivation',
          title: 'なぜコンデンサーのエネルギーが ½CV² になるのか',
          steps: [
            {
              label: 'Step 1: 充電に必要な仕事を考える',
              tex: 'dW = V(q)\\,dq',
              note: '電荷を少しずつ運ぶときの仕事＝その瞬間の電圧 × 運ぶ電荷。電圧は充電が進むほど上がる点がポイント。',
            },
            {
              label: 'Step 2: 電圧は電荷に比例（V = q/C）',
              tex: 'V(q) = \\frac{q}{C}',
              note: 'Q = CV を書き換えたもの。q = 0 で V = 0、満充電で最大。',
            },
            {
              label: 'Step 3: 0 から Q まで積分',
              tex: 'W = \\int_0^Q \\frac{q}{C}\\,dq = \\frac{Q^2}{2C}',
            },
            {
              label: 'Step 4: Q = CV を代入',
              tex: 'U = W = \\frac{(CV)^2}{2C} = \\frac{1}{2}CV^2',
              note: '「だんだん強くなる抵抗力に逆らって運ぶ」から平均が半分——比例関係の積分は必ず ½ を生む。重力の位置エネルギー mgh（h を徐々に上げる）と同じ構造です。',
            },
          ],
        },
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
    {
      id: 'ac-impedance',
      title: '交流回路とインピーダンス',
      summary: 'コイルとコンデンサーのリアクタンスから RLC 直列回路のインピーダンス・共振・位相を導く。',
      objectives: [
        'リアクタンスの周波数依存性（XL = ωL、XC = 1/ωC）を説明し計算できる',
        'RLC 直列回路のインピーダンスと電流を位相図から導ける',
        '共振の条件 f₀ = 1/(2π√LC) とその応用を説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '交流でコイルとコンデンサーがはたす役割' },
        {
          type: 'text',
          content:
            '直流では単なる巻線にすぎないコイルも、交流では**電流の変化を妨げる誘導起電力**をつくるので抵抗のように振る舞います。この「交流に対する妨げ」をリアクタンスと呼びます。逆にコンデンサーは直流を通しませんが、交流では充放電を繰り返すことで電流が「流れているように」なり、やはりリアクタンスをもちます。重要なのは、両者の大きさが**周波数で変わる**こと。コイルは高周波ほど通しにくく、コンデンサーは高周波ほど通りやすくなります。',
        },
        { type: 'formula', tex: 'X_L = \\omega L = 2\\pi f L, \\qquad X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}', display: true },
        {
          type: 'table',
          headers: ['素子', '周波数を上げると', '電流と電圧の位相'],
          rows: [
            ['抵抗 R', '変わらない', '同位相'],
            ['コイル L（X_L）', 'リアクタンスが増える（通しにくい）', '電流が電圧より 90° 遅れる'],
            ['コンデンサー C（X_C）', 'リアクタンスが減る（通りやすい）', '電流が電圧より 90° 進む'],
          ],
        },
        { type: 'heading', level: 3, content: 'RLC 直列回路のインピーダンス' },
        {
          type: 'text',
          content:
            'R、L、C を直列にして正弦波交流電圧 V（実効値）を加えます。各素子の電圧はそれぞれ V_R = RI、V_L = X_L I、V_C = X_C I ですが、**V_L と V_C の位相は互いに逆向き**なので、単純に大きさの和にはできません。そこで回転ベクトル（フェーザ）図を使います。横軸に V_R、縦軸に V_L − V_C をとると合成電圧 V は斜辺になり、三平方の定理でインピーダンス Z が出ます。',
        },
        {
          type: 'derivation',
          title: 'インピーダンス Z = √(R² + (X_L − X_C)²) の導出',
          steps: [
            {
              label: 'Step 1: 各素子の電圧の位相関係を確認する',
              tex: 'V_R = RI \\;\\text{（I と同相）}, \\qquad V_L = X_L I \\;(+90^\\circ), \\qquad V_C = X_C I \\;(-90^\\circ)',
              note: 'コイルの誘導起電力は電流の変化を妨げる向きなので電流は遅れ、コンデンサーでは先に充電電流が流れるため電流は進みます。',
            },
            {
              label: 'Step 2: 位相が同じものは足せる',
              tex: '\\text{縦方向の合計} = V_L - V_C = (X_L - X_C)\\,I',
              note: 'V_L と V_C は常に逆向きなので、差し引いたぶんだけが残ります。これが「直列でも電圧の大きさは足せない」理由です。',
            },
            {
              label: 'Step 3: 三平方の定理で合成する',
              tex: 'V^2 = {V_R}^2 + (V_L - V_C)^2 = \\left[ R^2 + (X_L - X_C)^2 \\right] I^2',
              note: 'V_R と (V_L − V_C) は 90° の角度をなすので、ベクトル合成はピタゴラスの定理になります。',
            },
            {
              label: 'Step 4: インピーダンスを定義する',
              tex: 'Z = \\frac{V}{I} = \\sqrt{R^2 + (X_L - X_C)^2}',
              note: 'Z は「交流版のオームの法則」V = ZI を与えます。直流なら Z = R に帰着します。電流と電圧の位相差は tanφ = (X_L − X_C)/R で決まります。',
            },
          ],
        },
        { type: 'heading', level: 3, content: '共振——回路が最も電流を通す瞬間' },
        {
          type: 'text',
          content:
            'X_L は周波数とともに増え、X_C は減るので、どこかで必ず **X_L = X_C** となる周波数があります。ここでは V_L と V_C がちょうど打ち消し合い、回路は抵抗だけがあるのと同じになります。この状態を**共振**といい、Z が最小（= R）、電流が最大、しかも電流と電圧の位相差が 0 になります。ラジオの同調回路は、受信したい局の周波数で共振させて電流を最大にする仕組みです。',
        },
        {
          type: 'derivation',
          title: '共振周波数 f₀ = 1/(2π√LC) の導出',
          steps: [
            {
              label: 'Step 1: 共振の条件を立てる',
              tex: 'X_L = X_C \\quad\\Rightarrow\\quad \\omega_0 L = \\frac{1}{\\omega_0 C}',
              note: '誘導性と容量性のリアクタンスが等しくなるとき、位相の遅れと進みが完全に相殺されます。',
            },
            {
              label: 'Step 2: ω₀² について解く',
              tex: '{\\omega_0}^2 = \\frac{1}{LC} \\quad\\Rightarrow\\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}',
            },
            {
              label: 'Step 3: 周波数に翻訳する',
              tex: 'f_0 = \\frac{\\omega_0}{2\\pi} = \\frac{1}{2\\pi\\sqrt{LC}}',
              note: 'この形はばね振り子の T = 2π√(m/k) とそっくりです。L が「質量」、1/C が「ばね定数」に対応する、電気系と力学系の美しい対応関係になっています。',
            },
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: 'R = 30 Ω、L = 0.10 H、C = 25 μF の直列回路に実効値 60 V・周波数 50 Hz の正弦波交流を加えた。インピーダンスと電流の実効値を求めよ（π = 3.14 として X_L ≈ 31 Ω、X_C ≈ 127 Ω とする）。また共振周波数を求めよ。',
          answer: '$X_L - X_C = -96$ Ω より $Z = \\sqrt{30^2 + 96^2} \\approx$ **100 Ω**、$I = 60/100 = $ **0.60 A**。共振周波数は $f_0 = 1/(2\\pi\\sqrt{0.10 \\times 25 \\times 10^{-6}}) \\approx$ **100 Hz**',
        },
        {
          type: 'practice',
          title: '練習問題',
          problems: [
            {
              body: '自己インダクタンス 0.20 H のコイルに周波数 50 Hz の交流を加えたときのリアクタンスを求めよ（π = 3.14）。',
              hint: '$X_L = 2\\pi f L$',
              answer: '$X_L = 2 \\times 3.14 \\times 50 \\times 0.20 \\approx $ **63 Ω**。周波数が 2 倍になれば X_L も 2 倍になります。',
            },
            {
              body: '容量 8 μF のコンデンサーに周波数 50 Hz の交流を加えたときのリアクタンスを求めよ（π = 3.14）。',
              hint: '$X_C = 1/(2\\pi f C)$',
              answer: '$X_C = 1/(2 \\times 3.14 \\times 50 \\times 8 \\times 10^{-6}) \\approx $ **400 Ω**。コンデンサーは低い周波数ほど通しにくい。',
            },
            {
              body: '上の RLC 回路が共振しているとき、電源電圧 60 V に対してコイルにかかる電圧 V_L は何 V になるか。オームの法則の常識と比べてどうか。',
              answer: '共振時 $I = V/R = 60/30 = 2.0$ A、$V_L = X_L I = 63 \\times 2.0 \\approx $ **126 V**。電源電圧 60 V より大きな電圧が素子に現れます（V_L と V_C が逆向きに打ち消し合っているため矛盾しない）。',
            },
          ],
        },
        {
          type: 'quiz',
          title: '確認クイズ（交流回路）',
          questions: [
            {
              question: '交流の周波数を上げたとき、コイルとコンデンサーのリアクタンスはどう変わるか。',
              choices: [
                'コイルもコンデンサーも増える',
                'コイルは増え、コンデンサーは減る',
                'コイルは減り、コンデンサーは増える',
              ],
              answerIndex: 1,
              explanation: '$X_L = 2\\pi fL$ は f に比例し、$X_C = 1/(2\\pi fC)$ は f に反比例します。コイルは高周波を遮り、コンデンサーは高周波を通します。',
            },
            {
              question: 'RLC 直列回路で V_R = 40 V、V_L = 90 V、V_C = 30 V のとき、電源電圧 V はいくらか。',
              choices: ['$160$ V', '$80$ V', '$100$ V'],
              answerIndex: 1,
              explanation: '位相がそろわないので大きさの和にはできません。$V = \\sqrt{{40}^2 + (90-30)^2} = \\sqrt{1600+3600} = 80$ V。',
            },
            {
              question: 'RLC 直列回路が共振しているとき、回路のようすとして正しいのはどれか。',
              choices: [
                'インピーダンスが最小で電流が最大、位相差は 0',
                'インピーダンスが最大で電流が 0 になる',
                'コンデンサーに電流が流れなくなる',
              ],
              answerIndex: 0,
              explanation: 'X_L = X_C で打ち消し合うため Z = R まで下がり、電流は最大。電流と電圧は同相になります。ラジオの同調がまさにこの現象の応用です。',
            },
          ],
        },
      ],
    },
  ],
};
