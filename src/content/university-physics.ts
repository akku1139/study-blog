import type { Subject } from './types';

// ============================================================
// 大学物理（教養：古典力学から量子・統計まで）
// 高校物理の公式の背後にある「原理」と、それを数理で扱う視点を学ぶ。
// ============================================================

export const universityPhysics: Subject = {
  id: 'university-physics',
  stage: 'university',
  name: '大学物理（教養）',
  description:
    '解析力学・電磁気学・量子力学・統計力学の入門。高校物理の公式を「最小作用」「場の方程式」「確率振幅」「ミクロ状態」という4つの原理から読み直す。',
  icon: '⚛️',
  color: '#1d4ed8',
  units: [
    {
      id: 'uni-phys-lagrangian',
      name: '解析力学',
      gakushuShidoYoryo: '一般化座標、オイラー＝ラグランジュ方程式、保存量と対称性',
      lessons: [
        {
          id: 'lagrange-equations',
          title: 'ラグランジュ形式の力学',
          summary: '力のつり合いではなく「エネルギーの差」から運動方程式を導く。',
          objectives: [
            'ラグランジアンを書き下せる',
            'オイラー＝ラグランジュ方程式で運動方程式を導出できる',
            'ニュートン力学との違い（スカラーだけで済む利点）を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'なぜもう一つの形式が必要か' },
            {
              type: 'text',
              content:
                'ニュートンの方程式 $F = ma$ は**ベクトル**を扱います。拘束があると「力の成分」をいちいち分解するのが面倒になる。ラグランジュ形式では、系の状態を**一般化座標** $q_i$（角度や長さなど、自由度そのもの）で表し、スカラー量だけで運動方程式が出ます。',
            },
            { type: 'heading', level: 3, content: 'ラグランジアン' },
            { type: 'formula', tex: 'L(q, \\dot{q}, t) = T - V \\quad (\\text{運動エネルギー} - \\text{位置エネルギー})', display: true },
            { type: 'formula', tex: '\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} = 0 \\qquad (i = 1, \\dots, n)', display: true },
            {
              type: 'text',
              content:
                'この**オイラー＝ラグランジュ方程式**が、$q_i$ ごとの運動方程式そのものです。「実際の運動は、作用積分 $S = \\int L \\, dt$ を停留（極小とは限らない）にする」——この**最小作用の原理**から変分法で導かれます。',
            },
            {
              type: 'example',
              title: '例題（単振り子）',
              body: '長さ $l$ の単振り子の運動方程式をラグランジュ形式で求めよ。ただし一般化座標は振れ角 $\\theta$。',
              answer: '$T = \\tfrac{1}{2} m l^2 \\dot{\\theta}^2$、$V = mgl(1 - \\cos\\theta)$ より $L = T - V$。\n$$\\frac{d}{dt}(m l^2 \\dot{\\theta}) + mgl\\sin\\theta = 0 \\;\\Rightarrow\\; \\ddot{\\theta} = -\\frac{g}{l}\\sin\\theta$$\n微小振動 $\\sin\\theta \\approx \\theta$ で高校でおなじみの単振動に戻る。',
            },
            { type: 'heading', level: 3, content: '対称性と保存則（ネーターの定理）' },
            {
              type: 'list',
              items: [
                'ラグランジアンが**時間を含まない** → エネルギー保存',
                '**空間並進に対して不変** → 運動量保存',
                '**回転に対して不変** → 角運動量保存',
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: '「保存則 ＝ 対称性」という対応は現代物理の設計原理です。素粒子論で「どの対称性をもつか」から相互作用が決まるのは、この定理の延長線上にあります。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '自由粒子（力を受けない）の $L$ を書き、運動方程式をオイラー＝ラグランジュ方程式から求めよ。',
                  hint: '$V = 0$、$T = \\tfrac{1}{2}m\\dot{x}^2$。',
                  answer: '$L = \\tfrac12 m \\dot x^2$。$\\partial L/\\partial \\dot x = m\\dot x$、$\\partial L/\\partial x = 0$ なので $m\\ddot x = 0$ ——等速直線運動が自動的に出る。',
                },
                {
                  body: '重力中の放物運動で保存する量を挙げ、ラグランジアンのどの性質から従うか説明せよ。',
                  answer: '水平方向の**運動量 $p_x = m\\dot x$** が保存。$L$ が座標 $x$ を含まない（$x$ 方向の並進対称性）ため。鉛直方向は $V$ が $y$ に依存するので非保存。',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'uni-phys-maxwell',
      name: '電磁気学',
      gakushuShidoYoryo: 'マクスウェルの方程式、電磁波、ローレンツ力',
      lessons: [
        {
          id: 'maxwell-equations',
          title: 'マクスウェルの方程式と電磁波',
          summary: '電場・磁場を支配する4本の方程式から「光」が導かれる。',
          objectives: [
            '4本の方程式それぞれの物理的意味を説明できる',
            '真空中的な電磁波の速さが定数だけで決まることを説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '4本の方程式（真空・微積形）' },
            { type: 'formula', tex: '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}', display: true },
            { type: 'formula', tex: '\\nabla \\cdot \\vec{B} = 0', display: true },
            { type: 'formula', tex: '\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}', display: true },
            { type: 'formula', tex: '\\nabla \\times \\vec{B} = \\mu_0 \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}', display: true },
            {
              type: 'table',
              headers: ['方程式', '名前', '意味'],
              rows: [
                ['(1)', 'ガウスの法則', '電荷が電場の湧き出し源'],
                ['(2)', '磁荷なし', '磁場には源がない（N極単独は存在しない）'],
                ['(3)', 'ファラデーの電磁誘導', '変化する磁場が渦の電場をつくる'],
                ['(4)', 'アンペール＝マクスウェル', '電流と変化する電場が渦の磁場をつくる'],
              ],
            },
            { type: 'heading', level: 3, content: '電磁波の導出' },
            {
              type: 'text',
              content:
                '電荷も電流もない真空では、(3)(4) を組み合わせて各場の**波動方程式**が得られます:\n$$\\nabla^2 \\vec{E} = \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}$$\n波の速さは $c = 1/\\sqrt{\\varepsilon_0 \\mu_0}$。測定値は約 $3 \\times 10^8$ m/s ——**光速そのもの**です。',
            },
            {
              type: 'example',
              title: '例題',
              body: 'マクスウェルが第4式に「変位電流」を加えた理由を、電荷保存の観点から述べよ。',
              answer: 'コンデンサーのように**電流が途切れても**電場は時間変化する。(4) に $\\partial \\vec E / \\partial t$ の項がないと、回路の途中での発散が電荷保存則（連続の式）と矛盾する。この項によって電磁場自身が「波」として伝わることが許された。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '(2) $\\nabla \\cdot \\vec B = 0$ の帰結として正しい言明を選べ。（a）磁場は閉じた曲線を持てない（b）磁場の力線は閉じており源がない（c）静的な磁場は存在しない。',
                  answer: '**(b)**。発散がゼロ＝湧き出し・吸い込みがないので、磁力線は必ず閉曲線になる。',
                },
                {
                  body: '$\\varepsilon_0 \\approx 8.85 \\times 10^{-12}$、$\\mu_0 = 4\\pi \\times 10^{-7}$ から $c$ を概算せよ。',
                  hint: '$1/\\sqrt{\\varepsilon_0 \\mu_0}$ を計算する。',
                  answer: '$\\varepsilon_0 \\mu_0 \\approx 1.11 \\times 10^{-17}$ → $c \\approx 3.0 \\times 10^8$ m/s',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'uni-phys-quantum',
      name: '量子力学入門',
      gakushuShidoYoryo: 'シュレーディンガー方程式、確率振幅、不確定性関係',
      lessons: [
        {
          id: 'schrodinger-basics',
          title: 'シュレーディンガー方程式と確率解釈',
          summary: '状態は波動関数 ψ で表され、|ψ|² が確率になる。',
          objectives: [
            '波動関数の確率解釈（ボルンの規則）を説明できる',
            '一次元箱の中の粒子のエネルギー準位を求められる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '状態は複素数の波' },
            { type: 'formula', tex: 'i\\hbar \\frac{\\partial \\Psi}{\\partial t} = \\left[ -\\frac{\\hbar^2}{2m}\\nabla^2 + V \\right] \\Psi', display: true },
            {
              type: 'text',
              content:
                '$\\Psi(x,t)$ 自体は観測できない複素数。**$|\\Psi|^2$ が粒子を位置 $x$ で見つける確率密度**になります（ボルンの規則）。全空間で積分すると 1（どこかにいる）という規格化条件を課します。',
            },
            { type: 'heading', level: 3, content: '一次元の無限深い井戸（箱の中の粒子）' },
            {
              type: 'text',
              content:
                '幅 $L$ の箱の壁で $\\Psi = 0$（外に出られない）。この境界条件を満たす解は定在波だけになり、**エネルギーが飛び飛び（量子化）**になります:',
            },
            { type: 'formula', tex: '\\Psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\frac{n\\pi x}{L}, \\qquad E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2} \\quad (n = 1, 2, 3, \\dots)', display: true },
            {
              type: 'example',
              title: '例題',
              body: '箱を狭くすると（$L$ を半分に）基底状態のエネルギーはどうなるか。',
              answer: '$E_1 \\propto 1/L^2$ なので **4 倍**。閉じ込めるほど運動量のゆらぎが大きくなるため（不確定性関係の帰結）。',
            },
            { type: 'heading', level: 3, content: '不確定性関係' },
            { type: 'formula', tex: '\\Delta x \\, \\Delta p \\ge \\frac{\\hbar}{2}', display: true },
            {
              type: 'list',
              items: [
                'これは測定技術の問題ではなく、**波としての状態の性質**（フーリエ解析の帰結）',
                '位置を局在させるほど運動量の広がりが増える ——水素原子が潰れない理由の説明になる',
              ],
            },
            {
              type: 'widget',
              widget: { id: 'wave-simulator', caption: 'プレイグラウンド: 波を重ね合わせると局在したパケットができる——位置と波数のトレードオフの直感' },
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '状態 $\\Psi_n$ の箱の中で、粒子を見つける確率が最大になる場所は？（$n=2$ で考える）',
                  answer: '$|\\Psi_2|^2 \\propto \\sin^2(2\\pi x/L)$ は $x = L/4, 3L/4$ で最大。中央 ($x=L/2$) では**ゼロ**（節）。',
                },
                {
                  body: '$n=1 \\to 2$ の遷移で吸収される光子のエネルギーを表せ。',
                  hint: '$E_n = n^2 E_1$',
                  answer: '$\\Delta E = E_2 - E_1 = 3E_1 = \\dfrac{3\\pi^2\\hbar^2}{2mL^2}$',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'uni-phys-statmech',
      name: '統計力学入門',
      gakushuShidoYoryo: 'ミクロ状態とエントロピー、ボルツマン因子、温度の分子論的意味',
      lessons: [
        {
          id: 'boltzmann-distribution',
          title: 'ミクロ状態とボルツマン分布',
          summary: '「数え上げ」からエントロピーと温度を定義し、平衡を理解する。',
          objectives: [
            'エントロピーのミクロ状態との関係 $S = k \\ln W$ を説明できる',
            'ボルツマン因子を使って状態間の人口比を計算できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '数え上げがすべての始まり' },
            { type: 'formula', tex: 'S = k_B \\ln W \\qquad (W = \\text{ミクロ状態の数},\\; k_B = 1.38 \\times 10^{-23}\\,\\mathrm{J/K})', display: true },
            {
              type: 'text',
              content:
                '同じ巨視的状態（エネルギー・粒子数など）を実現する**微視的な割当て方の総数** $W$ が大きいほど、その状態は自然に実現しやすい。エントロピーとは「乱雑さ」ではなく**取り得る選択肢の多さ（対数）**です。',
            },
            {
              type: 'example',
              title: '例題（コインの数え上げ）',
              body: 'コイン 10 枚の表裏で「表 5 枚」となる割り当て方は何通りか。最も起こりやすい配置は？',
              answer: '$\\binom{10}{5} = 252$ 通りで最大。二項分布の中心＝**等分配に近い配置**が最も多い——これが熱平衡像の原型。',
            },
            { type: 'heading', level: 3, content: 'ボルツマン因子' },
            { type: 'formula', tex: 'P(E) \\propto e^{-E/k_B T}', display: true },
            {
              type: 'table',
              headers: ['$T$', '$e^{-\\Delta E/k_BT}$（$\\Delta E = k_B T$）', '意味'],
              rows: [
                ['高温', '大きい（≈ 0.37）', '励起状態にも十分な人口'],
                ['低温', 'ほぼ 0', 'ほぼすべてが基底状態'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '室温（$k_B T \\approx 25$ meV）でエネルギー差 50 meV の2状態の人口比を求めよ。',
              answer: '$P_2/P_1 = e^{-50/25} = e^{-2} \\approx $ **0.14**。上位状態は約 7 分の 1 しか住んでいない。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '化学の「平衡定数はギブズエネルギーで決まる」も、この指数則の表現です。統計力学は熱力学にミクロな絵を与える理論といえます。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '体積を自由に膨張させると理想気体のエントロピーは増える。ミクロ状態の観点から理由を述べよ。',
                  answer: '使える体積が増えると、分子の**配置の仕方が増える**（$W$ が増加）。$S = k_B \\ln W$ よりエントロピーも増える。',
                },
                {
                  body: '$T \\to 0$ でボルツマン分布はどうなるか。何が起きていると言えるか。',
                  answer: '$e^{-E/k_BT} \\to 0$（$E>0$）なので、すべての粒子が**基底状態に落ちる**。秩序だけが残る（熱力学第三法則の描像）。',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
