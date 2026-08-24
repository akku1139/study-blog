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
              type: 'derivation',
              title: 'オイラー＝ラグランジュ方程式の導出——作用を停留させる条件',
              steps: [
                {
                  label: 'Step 1: 作用積分を定義',
                  tex: 'S[q] = \\int_{t_1}^{t_2} L(q, \\dot{q})\\, dt',
                  note: '実際の運動 q(t) はこの積分 S を停留（微小な変化に対して1次の変化なし）にする。',
                },
                {
                  label: 'Step 2: 経路を少しだけ変える',
                  tex: 'q(t) \\to q(t) + \\varepsilon\\eta(t), \\quad \\eta(t_1) = \\eta(t_2) = 0',
                  note: '両端は固定（始点・終点は同じ）なので、変化 η は両端でゼロという関数。',
                },
                {
                  label: 'Step 3: 停留条件 dS/dε = 0 を書く',
                  tex: '\\delta S = \\int \\left( \\frac{\\partial L}{\\partial q}\\eta + \\frac{\\partial L}{\\partial \\dot{q}}\\dot{\\eta} \\right) dt = 0',
                  note: '部分積分で第二項を変形すると、η の係数だけが残る形になる。',
                },
                {
                  label: 'Step 4: 部分積分と任意性',
                  tex: '\\int \\frac{\\partial L}{\\partial \\dot{q}}\\dot{\\eta}\\,dt = \\left[ \\frac{\\partial L}{\\partial \\dot{q}}\\eta \\right]_{t_1}^{t_2} - \\int \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}}\\right)\\eta\\,dt',
                  note: '境界項は η が端点で 0 なので消える。η を任意にとれるため、残った積分が常に0なら係数そのものが0でなければならない。',
                },
                {
                  label: 'Step 5: 結論',
                  tex: '\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}} - \\frac{\\partial L}{\\partial q} = 0',
                  note: 'これが運動方程式。「ニュートンの力のつり合い」と同じ内容を、スカラー量 L だけで表現したものです。',
                },
              ],
            },
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

    {
      id: 'uni-phys-modern',
      name: '現代物理入門',
      gakushuShidoYoryo: '特殊相対性理論と熱力学の基礎概念。既存単元（解析力学・統計力学）への橋渡しとなる発展レッスン。',
      lessons: [
        {
          id: 'special-relativity',
          title: '特殊相対性理論入門——時間の遅れ・ローレンツ収縮・E=mc²',
          summary: '光速不変の原理から、運動する時計が遅れ、物が縮み、質量がエネルギーに変わることを導く。',
          objectives: [
            '光速度不変の原理と相対性原理を説明できる',
            'ローレンツ因子 γ をピタゴラスの定理的に導き、時間の遅れとローレンツ収縮を計算できる',
            'E = mc² の意味を述べ、静止エネルギーを計算できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '2つの出発点——光速は誰にでも同じ速さ' },
            {
              type: 'text',
              content: 'アインシュタインの出発点はシンプルな**光速度不変の原理**です。「真空中の光の速さ $c$ は、光源や観測者がどう動いていても常に同じ値になる」というものです。これは日常の直感（電車の中で投げたボールは地面から見ると速くなる）と矛盾しますが、マイケルソン＝モーリーの実験などがこの原理を支持しました。もう1つの柱は「すべての慣性系で物理法則は同じ形」という**相対性原理**です。この2つを受け入れると、時間と空間そのものの常識を作り替えざるを得なくなります。',
            },
            {
              type: 'list',
              items: [
                '**光速度不変の原理**: 真空中の光速 $c \\approx 3 \\times 10^8\\ \\mathrm{m/s}$ は慣性系によらない',
                '**相対性原理**: 物理法則の形はすべての慣性系で同じ',
                '**同時性の相対性**: 同時に起きた出来事という判断は観測者ごとに異なる',
              ],
            },
            { type: 'heading', level: 3, content: 'ローレンツ因子 γ とは' },
            {
              type: 'text',
              content: '相対論の効果はすべて **γ（ガンマ）** という係数でまとめられます。速度 $v$ が光速に比べて小さいときは $\\gamma \\approx 1$ なので日常では効果が見えませんが、$v$ が $c$ に近づくと $\\gamma$ は急激に大きくなります。',
            },
            { type: 'formula', tex: '\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}', display: true },
            {
              type: 'derivation',
              title: 'ローレンツ因子 γ = 1/√(1 − v²/c²) の導出——光の時計の思考実験',
              steps: [
                {
                  label: 'Step 1: 光の時計をつくる',
                  tex: '\\Delta t_0 = \\dfrac{2L}{c}',
                  note: '距離 $L$ を往復する光を使った時計を考えます。時計と一緒に動いている人にとっての往復時間（固有時）$\u0394t_0$ はこれです。',
                },
                {
                  label: 'Step 2: 横方向に動かして見る',
                  tex: 'c^2 \\left(\\dfrac{\\Delta t}{2}\\right)^2 = L^2 + v^2 \\left(\\dfrac{\\Delta t}{2}\\right)^2',
                  note: '速度 $v$ で動く時計を地上から見ると、光は斜めに進みます。三平方の定理より「斜めの距離² ＝ 高さ² ＋ 横のずれ²」です。',
                },
                {
                  label: 'Step 3: 整理する',
                  tex: '\\left(c^2 - v^2\\right)\\left(\\dfrac{\\Delta t}{2}\\right)^2 = L^2',
                  note: '右辺の項を左へ移項してまとめます。',
                },
                {
                  label: 'Step 4: 往復時間 Δt を解く',
                  tex: '\\Delta t = \\dfrac{2L/c}{\\sqrt{1 - v^2/c^2}} = \\gamma\\, \\Delta t_0',
                  note: '分母に現れたのがまさにローレンツ因子 γ です。',
                },
                {
                  label: 'Step 5: 結論——動く時計は遅れる',
                  tex: '\\therefore \\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}} \\geq 1',
                  note: '$v > 0$ なら $\\gamma > 1$ なので $\u0394t > \u0394t_0$。動いている時計の進みは、それを見る人の間で遅れて進みます（時間の遅れ）。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['現象', '公式', '意味'],
              rows: [
                ['時間の遅れ', '$\\Delta t = \\gamma \\Delta t_0$', '動く時計は遅れて進む'],
                ['ローレンツ収縮', '$L = \\dfrac{L_0}{\\gamma}$', '進行方向の長さが縮んで見える'],
                ['質量とエネルギー', '$E = \\gamma m c^2$', '静止質量 $m$ もエネルギーをもつ'],
                ['ニュートン極限', '$v \\ll c \\Rightarrow \\gamma \\approx 1$', '低速では古典力学に戻る'],
              ],
            },
            { type: 'heading', level: 3, content: 'E = mc² ——質量は凝り固まったエネルギー' },
            {
              type: 'text',
              content: '相対論では、静止した物体も $mc^2$ という膨大な**静止エネルギー**を持つことが帰結します。太陽が輝くのは水素の核融合で質量の一部がエネルギーに変換されるためで、原子力発電も同じ式に従います。逆に言えば、エネルギーを持つ系はわずかに重くなります（バネ圧縮すると重くなる）。',
            },
            { type: 'formula', tex: 'E_0 = mc^2, \\qquad E = \\gamma mc^2', display: true },
            {
              type: 'example',
              title: '例題',
              body: '$v = 0.6c$ で飛ぶ宇宙船がある。(1) ローレンツ因子 γ を求めよ。(2) 地上の人から見て宇宙船内の 1 秒（固有時）は何秒に見えるか。(3) 静止長 100 m の宇宙船の長さは何 m に見えるか。',
              answer: '(1) $\\gamma = 1/\\sqrt{1 - 0.36} = 1/\\sqrt{0.64} =$ **$1.25$**　(2) $\u0394t = 1.25 \\times 1 =$ **$1.25$ 秒**　(3) $100/1.25 =$ **$80$ m**',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '収縮するのは**進行方向だけ**です。横方向の長さは変わりません。また「見える」には光の伝播遅延（テレル回転）が加わるため、実際の写真では回転したように写ります。ここで扱うのは測定値としてのローレンツ収縮です。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '$v = 0.8c$ のときのローレンツ因子 γ を求めよ。',
                  hint: '$1 - 0.8^2 = 0.36$。',
                  answer: '$\\gamma = 1/\\sqrt{0.36} = $ **$5/3 \\approx 1.67$**',
                },
                {
                  body: '$\\gamma = 2$ で飛ぶミューオンの固有寿命は $2.2\\ \\mathrm{\\mu s}$。地上から見た寿命を求めよ。',
                  answer: '$\u0394t = 2 \\times 2.2 = $ **$4.4\\ \\mathrm{\\mu s}$**',
                },
                {
                  body: '静止質量 $1\\ \\mathrm{kg}$ の物体の静止エネルギーを求めよ。$c = 3 \\times 10^8\\ \\mathrm{m/s}$。',
                  hint: '$E_0 = mc^2$。',
                  answer: '$E_0 = 1 \\times (3 \\times 10^8)^2 = $ **$9 \\times 10^{16}\\ \\mathrm{J}$**（約 25 TWh 分のエネルギー）',
                },
                {
                  body: '$v \\to c$ に近づけるとき、γ と必要なエネルギーはどうなるか述べよ。',
                  answer: '$\\gamma \\to \\infty$ となり、加速に必要なエネルギーも無限大になるため、**質量をもつ物体は光速に到達できない**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（相対論）',
              questions: [
                {
                  question: '光速度不変の原理が主張することはどれか。',
                  choices: ['真空中の光速は観測者の運動によらず一定', '光速は光源の速度に比例する', '光速は媒質によって決まり観測者にも依存する'],
                  answerIndex: 0,
                  explanation: 'どの慣性系から測っても真空中的光速は同じ c になります。これが相対論の出発点です。',
                },
                {
                  question: '速度 v で動く物体の進行方向の長さはどう見えるか。',
                  choices: ['$1/\\gamma$ 倍に縮む', '$\\gamma$ 倍に伸びる', '変わらない'],
                  answerIndex: 0,
                  explanation: 'ローレンツ収縮により $L = L_0/\\gamma$。進行方向のみ縮みます。',
                },
                {
                  question: '$v = 0.6c$ のとき γ の値はいくらか。',
                  choices: ['$1.25$', '$1.67$', '$2.0$'],
                  answerIndex: 0,
                  explanation: '$1 - 0.36 = 0.64$、その平方根は $0.8$ なので $\\gamma = 1/0.8 = 1.25$ です。',
                },
              ],
            },
          ],
        },
        {
          id: 'thermodynamics-zeroth-law',
          title: '熱力学の第0法則と温度の定義',
          summary: '「温度」とは何かを問い直す。熱平衡・第0法則から温度計の原理、理想気体温度計による目盛りの定義までを導く。',
          objectives: [
            '熱平衡と热力学第0法則を述べ、温度計が使える理由を説明できる',
            '理想気体の状態方程式から絶対温度の定義を導ける',
            'セルシウス度とケルビンの換算、絶対零度の意味を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '温度とは——熱平衡という概念から始める' },
            {
              type: 'text',
              content: '「熱い」「冷たい」は触覚の感覚ですが、物理学的な温度は**熱平衡**という概念で定義されます。2つの物体を接触させて放置したとき、状態がそれ以上変化しなくなれば2つの物体は同じ温度にある、つまり**熱平衡**にあると言います。',
            },
            {
              type: 'derivation',
              title: '第0法則——なぜ温度計が使えるのか',
              steps: [
                {
                  label: 'Step 1: 3つの系 A, B, C を用意する',
                  tex: 'A \\leftrightarrow C, \\quad B \\leftrightarrow C \\quad \\text{(thermal equilibrium)}',
                  note: 'C を温度計だと思ってください。C は A とも B とも熱平衡にあるとします。',
                },
                {
                  label: 'Step 2: A と B を接触させる',
                  tex: 'A \\leftrightarrow B \\quad \\text{no change}',
                  note: '経験上、A と B の間には何も起こりません。これが実験事実です。',
                },
                {
                  label: 'Step 3: 法則として宣言する',
                  tex: 'A \\sim C \\wedge B \\sim C \\implies A \\sim B',
                  note: '「それぞれ第3の系と熱平衡にある2つの系は互いに熱平衡にある」——これが熱力学第0法則です。',
                },
                {
                  label: 'Step 4: 温度という状態量の存在',
                  tex: '\\theta(A) = \\theta(C) = \\theta(B)',
                  note: '熱平衡は推移的なので、「いくつ」かを表す状態量 θ（温度）を各系に割り当てられることになります。温度計 C を介して他の物体の温度を比較・測定できるのはこの法則のおかげです。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '理想気体温度計と絶対温度の定義' },
            {
              type: 'text',
              content: 'ボイルの法則とシャルルの法則を組み合わせると、希薄な気体の圧力 $P$、体積 $V$、温度 $T$ の間に美しい関係が成り立ちます。この $T$ を**絶対温度**（ケルビン）といい、セルシウス度との関係は $T = t + 273.15$ です。',
            },
            { type: 'formula', tex: 'PV = nRT', display: true },
            { type: 'heading', level: 3, content: '状態方程式の導出' },
            {
              type: 'derivation',
              title: 'ボイル＋シャルル → PV = nRT',
              steps: [
                {
                  label: 'Step 1: ボイルの法則',
                  tex: 'PV = \\text{const} \\quad (T, n \\text{ fixed})',
                  note: '温度とモル数を固定すると圧力と体積の積は一定です。',
                },
                {
                  label: 'Step 2: シャルルの法則',
                  tex: '\\dfrac{V}{T} = \\text{const} \\quad (P, n \\text{ fixed})',
                  note: '圧力固定で体積は絶対温度に比例します。0 °C = 273.15 K の目盛りを使うのがポイントです。',
                },
                {
                  label: 'Step 3: 2つの法則を合わせる',
                  tex: 'PV = f(T, n)',
                  note: '温度とモル数だけで決まる関数が存在します。気体の種類に依存しない共通の関数であることが実験でわかります。',
                },
                {
                  label: 'Step 4: 比例定数 R を導入',
                  tex: 'PV = nRT',
                  note: '普遍気体定数 $R = 8.31\\ \\mathrm{J/(mol \\cdot K)}$。この式が任意の希薄気体で成立することが、絶対温度の客観的な定義（理想気体温度計）になっています。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['法則／概念', '内容', '役割'],
              rows: [
                ['第0法則', '熱平衡の推移性', '温度という状態量の存在根拠'],
                ['ボイルの法則', '$PV$ 一定（$T$, $n$ 固定）', '状態方程式の部品'],
                ['シャルルの法則', '$V/T$ 一定（$P$, $n$ 固定）', '絶対温度目盛りの導入'],
                ['理想気体の状態方程式', '$PV = nRT$', '温度の操作的定義'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '27 °C、$1.0 \\times 10^5\\ \\mathrm{Pa}$ で体積 $2.0\\ \\mathrm{m^3}$ の理想気体がある。温度を 127 °C に上げ、圧力を $2.0 \\times 10^5\\ \\mathrm{Pa}$ にしたときの体積を求めよ。',
              answer: '$PV/T$ 保存より $V_2 = V_1 \\cdot \\dfrac{T_2}{T_1} \\cdot \\dfrac{P_1}{P_2} = 2.0 \\times \\dfrac{400}{300} \\times \\dfrac{1}{2} = $ **$\\dfrac{4}{3}\\ \\mathrm{m^3} \\approx 1.33\\ \\mathrm{m^3}$**',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '状態方程式に入れる温度は**必ず絶対温度**です。°C のまま代入するのが典型ミス。換算は $T = t + 273.15$（概算で +273）。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '25 °C は何 K か。また 300 K は何 °C か。',
                  answer: '$25 + 273.15 = $ **$298.15$ K**、$300 - 273.15 = $ **$26.85$ °C**',
                },
                {
                  body: '体積一定のもとで温度を 0 °C から 273 °C に上げると、圧力は何倍になるか。',
                  hint: '$P/T$ 一定。$273$ °C $= 546$ K。',
                  answer: '$546 / 273 = $ **$2$ 倍**',
                },
                {
                  body: '第0法則がないと温度計が使えない理由を説明せよ。',
                  hint: '熱平衡の推移性が崩れると何が起きるか。',
                  answer: '温度計 C が A と B の双方と熱平衡でも A と B が同温である保証がなくなり、**温度を比較する操作自体が成立しない**ため',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（熱力学）',
              questions: [
                {
                  question: '熱力学第0法則が保証していることはどれか。',
                  choices: ['温度という状態量の存在と測定可能性', 'エネルギー保存則', 'エントロピー増大の法則'],
                  answerIndex: 0,
                  explanation: '熱平衡の推移性から温度の概念が定義でき、温度計による測定が正当化されます。',
                },
                {
                  question: '理想気体の状態方程式における R の単位はどれか。',
                  choices: ['$\\mathrm{J/(mol \\cdot K)}$', '$\\mathrm{Pa \\cdot m^3}$', '$\\mathrm{K/mol}$'],
                  answerIndex: 0,
                  explanation: '$R = 8.31\\ \\mathrm{J/(mol \\cdot K)}$ で、気体の種類によらない普遍定数です。',
                },
                {
                  question: '絶対温度 400 K は何 °C か。',
                  choices: ['約 127 °C', '約 173 °C', '約 673 °C'],
                  answerIndex: 0,
                  explanation: '$400 - 273.15 \\approx 126.85$ °C です。概算では −273 すれば十分です。',
                },
              ],
            },
          ],
        },
      ],
    },
        {
          id: 'uni-phys-dynamics',
          name: '相対性理論・波動・熱力学',
          gakushuShidoYoryo: '相対論的力学、定在波とうなり・分散関係、熱力学第0〜3法則。既存単元（現代物理入門）の発展内容。',
          lessons: [
        {
          id: 'special-relativity-dynamics',
          title: '相対論的力学——運動量・エネルギー・速度の加法定理',
          summary:
            '運動量の保存則を守り抜くために p = γmv と E = γmc² を導き、速度の加法定理と E² = (pc)² + (mc²)² を手に入れる。陽電子消滅で質量とエネルギーの等価性を定量的に確認する。',
          objectives: [
            '相対論的運動量 p = γmv と全エネルギー E = γmc² を使って高速粒子の運動を計算できる',
            'ローレンツ変換から速度の加法定理を導出し、いかなる慣性系でも速さが c を超えないことを説明できる',
            'E² = (pc)² + (mc²)² を用いて、光子を含むエネルギーと運動量の換算ができる',
            '陽電子消滅を例に、質量とエネルギーの等価性を数値で扱える',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'ニュートン力学はどこで破綻するか' },
            {
              type: 'text',
              content:
                'ニュートン力学では運動量 $p = mv$ があらゆる衝突で保存すると信じてきました。ところが加速器で電子を $v = 0.9999999c$ 付近まで加速しても、その速さは光速 $c$ を一切超えません。$F = ma$ が文字通り成立するなら、力をかけ続けるだけで $c$ を突破できるはずであり、これは実験事実と明確に矛盾します。相対論の選択は「保存則として運動量の保存を守り、式のほうを作り直す」ことでした。すべての慣性系で運動量保存が成立し続けるように $mv$ の係数を作り直すと、そのとき現れる補正係数こそ、時間の遅れでも登場したローレンツ因子 $\\gamma$ です。',
            },
            { type: 'heading', level: 3, content: '相対論的運動量とエネルギー' },
            {
              type: 'text',
              content:
                '相対論では運動量とエネルギーは次のように再定義されます。ここで $m$ は静止質量（その粒子が持つ固有の質量）、$v$ は観測者から見た速さです。速い粒子ほど $\\gamma$ が大きくなり、エネルギーは際限なく増やせますが、速度だけは $c$ に漸近して止まります。',
            },
            { type: 'formula', tex: 'p = \\gamma m v, \\qquad E = \\gamma m c^2 = \\sqrt{p^2 c^2 + m^2 c^4}', display: true },
            {
              type: 'derivation',
              title: 'なぜ p = γmv なのか——保存則が式を決める',
              steps: [
                {
                  label: 'Step 1: 要求は「運動量保存が全慣性系で成立すること」',
                  tex: '\\sum p_{\\text{before}} = \\sum p_{\\text{after}} \\quad \\text{in every inertial frame}',
                  note: '衝突の前後で運動量の総和が変わらない、という構図はニュートン力学からそのまま引き継ぎます。変わるのは「何を運動量と呼ぶか」です。',
                },
                {
                  label: 'Step 2: 古典式 $p = mv$ では保存則が破れる',
                  tex: 'p = mv \\quad \\text{(classical)} \\; \\Rightarrow \\; \\text{contradiction in collisions at high speed}',
                  note: 'ローレンツ変換で別の慣性系に移ると、$mv$ の総和はもはや前後で一致しません。速度の加法定理（後述）で足し算の仕方自体が変わるためです。',
                },
                {
                  label: 'Step 3: 補正係数を $\\gamma$ と置いてみる',
                  tex: 'p = \\gamma m v, \\qquad \\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}',
                  note: 'ローレンツ変換の構造を計算すると、ちょうど $\\gamma$ という補正を入れたときだけ、すべての慣性系で保存が成立することがわかります。',
                },
                {
                  label: 'Step 4: 低速極限でニュートン力学に戻ることを確認',
                  tex: 'v \\ll c \\; \\Rightarrow \\; \\gamma \\approx 1 + \\frac{v^2}{2c^2} \\approx 1 \\; \\Rightarrow \\; p \\approx mv',
                  note: '日常の速度では $\\gamma \\approx 1$ なので古典式に一致します。良い理論は旧理論を含んでいなければなりません。',
                },
                {
                  label: 'Step 5: 運動量保存が破れない限り、速度は c で頭打ち',
                  tex: 'v = \\dfrac{pc}{\\sqrt{p^2 + m^2 c^2}} < c',
                  note: '$p$ をどれだけ大きく（＝エネルギーを注ぎ込み）ても $v$ は $c$ に漸近するだけで超えられません。加速器の実験事実と完全に合致します。',
                },
              ],
            },
            { type: 'heading', level: 3, content: 'E² = (pc)² + (mc²)² ——エネルギーと運動量の「三平方」' },
            {
              type: 'text',
              content:
                '運動量とエネルギーの間には、ピタゴラスの定理のような関係が成り立ちます。この式の最大の魅力は**光子**の扱いです。光子は静止質量 $m = 0$ ながらエネルギーと運動量を持ち、$m = 0$ を代入すると $E = pc$ が直ちに出ます。質量のある粒子が静止している場合（$p = 0$）は $E = mc^2$ というおなじみの式になります。',
            },
            {
              type: 'derivation',
              title: 'E² = (pc)² + (mc²)² の導出——γ の定義から3行で',
              steps: [
                {
                  label: 'Step 1: γ² に現れる共通分母を用意する',
                  tex: '\\gamma^2 = \\dfrac{1}{1 - v^2/c^2}, \\qquad \\gamma^2 v^2 = \\dfrac{v^2}{1 - v^2/c^2}',
                  note: 'まず $\\gamma$ の2乗の式をそのまま書き、両辺に $v^2$ を掛けた形も作っておきます。',
                },
                {
                  label: 'Step 2: 恒等式 γ²(1 − v²/c²) = 1 を変形する',
                  tex: '\\gamma^2 - \\gamma^2 \\dfrac{v^2}{c^2} = 1 \\; \\Longrightarrow \\; \\gamma^2 m^2 c^4 - \\gamma^2 m^2 v^2 c^2 = m^2 c^4',
                  note: '両辺に $m^2 c^4$ を掛けました。左辺第1項は $(\\gamma mc^2)^2 = E^2$ です。',
                },
                {
                  label: 'Step 3: 左辺第2項を読み替える',
                  tex: '\\gamma^2 m^2 v^2 c^2 = p^2 c^2',
                  note: '$p = \\gamma mv$ の定義を代入するだけです。',
                },
                {
                  label: 'Step 4: 結論',
                  tex: 'E^2 = p^2 c^2 + m^2 c^4',
                  note: 'エネルギーの「直角部分」が運動量成分、もう一方が質量成分というきれいな構造。静止（$p=0$）なら $E = mc^2$、光子（$m=0$）なら $E = pc$ が即座に出ます。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '速度の加法定理——c は誰にとっても超えられない壁ではない' },
            {
              type: 'text',
              content:
                'ニュートン力学では、時速 100 km の電車から時速 100 km のボールを投げれば地面からは 200 km/h に見えます。ところが光速不変の原理では同じ操作が許されません。相対論では速度の足し算が次の式に置き換わり、どんなに速い速度同士を「足しても」決して $c$ を超えません。',
            },
            { type: 'formula', tex: "u' = \\dfrac{u - v}{1 - uv/c^2}", display: true },
            {
              type: 'derivation',
              title: '加法定理の導出——ローレンツ変換の微分比',
              steps: [
                {
                  label: 'Step 1: ローレンツ変換を書く',
                  tex: "x' = \\gamma (x - vt), \\qquad t' = \\gamma\\left(t - \\dfrac{vx}{c^2}\\right)",
                  note: '速度 $v$ で動く慣性系への変換式。時間も座標と一緒に混ざるのが相対論の肝です。',
                },
                {
                  label: 'Step 2: 微分して速度の定義に持ち込む',
                  tex: "dx' = \\gamma(dx - v\\,dt), \\qquad dt' = \\gamma\\left(dt - \\dfrac{v\\,dx}{c^2}\\right)",
                  note: '微小変化に対しては γ は定数扱いできます（系の相対速度は変わらないため）。',
                },
                {
                  label: 'Step 3: 割り算して速度にする',
                  tex: "u' = \\dfrac{dx'}{dt'} = \\dfrac{dx - v\\,dt}{dt - \\dfrac{v\\,dx}{c^2}} = \\dfrac{\\dfrac{dx}{dt} - v}{1 - \\dfrac{v}{c^2}\\dfrac{dx}{dt}}",
                  note: '分子・分母を $dt$ で割ると $dx/dt = u$ が現れ、目的の形が出ます。',
                },
                {
                  label: 'Step 4: 光速を代入してみる',
                  tex: "u = c \\; \\Longrightarrow \\; u' = \\dfrac{c - v}{1 - vc/c^2} = \\dfrac{c-v}{1 - v/c} = c",
                  note: '光に対してはどの慣性系でも同じ $c$——光速度不変の原理が自動的に成立します。',
                },
                {
                  label: 'Step 5: c を超えられないことの確認',
                  tex: 'u < c, \\; v < c \\; \\Longrightarrow \\; 1 - \\dfrac{uv}{c^2} > 0, \\quad |u^{\\prime}| < c',
                  note: '分母が正になるため符号が反転せず、計算結果は常に $|u^{\\prime}| < c$ に収まります。光速は「壁」ではなく、すべての慣性系で共有される上限速度なのです。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['量', '古典', '相対論', '備考'],
              rows: [
                ['運動量', '$p = mv$', '$p = \\gamma m v$', '低速で一致'],
                ['全エネルギー', 'なし（運動エネルギーのみ）', '$E = \\gamma m c^2$', '静止していても $mc^2$ を持つ'],
                ['運動エネルギー', '$K = \\frac{1}{2}mv^2$', '$K = (\\gamma - 1)mc^2$', '展開すると $\\frac{1}{2}mv^2$ が復活'],
                ['エネルギー・運動量関係', 'なし', '$E^2 = p^2c^2 + m^2c^4$', '光子では $E = pc$'],
                ['速度の合成', '$u + v$', "$u' = \\dfrac{u-v}{1 - uv/c^2}$", 'どんなに足しても $c$ 未満'],
              ],
            },
            { type: 'heading', level: 3, content: '質量とエネルギーの等価性——陽電子消滅' },
            {
              type: 'text',
              content:
                '$E = mc^2$ を最もクリアに実感できる現象の一つが**電子と陽電子の対消滅**です。電子の静止質量は $m_e = 9.109 \\times 10^{-31}\\ \\mathrm{kg}$ で、静止していた電子・陽電子ペアが消滅すると、その静止エネルギー $2m_ec^2$ はすべて2個の γ 線（高エネルギー光子）に変わります。逆に十分なエネルギーを持つ光子から電子・陽電子ペアが生まれる**対生成**も起こり、「粒子の質量」がエネルギーで買えることを示しています。PET 検査（ポジトロン断層法）はこの消滅γ線を体の外で検出する医療技術です。',
            },
            { type: 'formula', tex: '\\mathrm{e}^- + \\mathrm{e}^+ \\rightarrow 2\\gamma, \\qquad E_\\gamma = m_e c^2 = 8.187 \\times 10^{-14}\\ \\mathrm{J} \\approx 0.511\\ \\mathrm{MeV}', display: true },
            {
              type: 'derivation',
              title: '消滅エネルギーと光子の波長を計算する',
              steps: [
                {
                  label: 'Step 1: 静止エネルギー1個分',
                  tex: 'E_0 = m_e c^2 = 9.109 \\times 10^{-31} \\times (2.998 \\times 10^8)^2 = 8.19 \\times 10^{-14}\\ \\mathrm{J}',
                  note: '電子1個分の「値段」です。単位を eV に換算すると約 0.511 MeV になります。',
                },
                {
                  label: 'Step 2: 運動量保存で光子は2個',
                  tex: 'P_{\\text{initial}} = 0 \\; \\Rightarrow \\; p_{\\gamma 1} + p_{\\gamma 2} = 0',
                  note: '重心系で初め静止しているので、放たれる光子は同じエネルギーで逆向きの2本になります（1本だと運動量が保存しません）。',
                },
                {
                  label: 'Step 3: エネルギー分配',
                  tex: '2 E_\\gamma = 2 m_e c^2 \\; \\Rightarrow \\; E_\\gamma = m_e c^2 = 0.511\\ \\mathrm{MeV}',
                  note: '各光子がちょうど電子1個分の静止エネルギーを受け取ります。',
                },
                {
                  label: 'Step 4: 波長に換算',
                  tex: '\\lambda = \\dfrac{hc}{E_\\gamma} = \\dfrac{6.626 \\times 10^{-34} \\times 2.998 \\times 10^8}{8.19 \\times 10^{-14}} = 2.43 \\times 10^{-12}\\ \\mathrm{m}',
                  note: '約 2.4 pm のガンマ線。PET 検出器はこの2本のγ線を同時に捉えて消滅地点を特定します。',
                },
              ],
            },
            {
              type: 'example',
              title: '例題——太陽は毎秒どれだけの質量を失っているか',
              body:
                '太陽の放射パワーは約 $3.85 \\times 10^{26}\\ \\mathrm{W}$ である。(1) 1秒あたりに失われる質量を求めよ。(2) 年間では何 kg か概算せよ。',
              answer:
                '(1) $E = mc^2$ より $m = E/c^2 = 3.85 \\times 10^{26} / (3 \\times 10^8)^2 \\approx$ **$4.3 \\times 10^9\\ \\mathrm{kg}$**（毎秒約430万トン）　(2) これに1年 ≈ $3.15 \\times 10^7$ s を掛けて約 **$1.35 \\times 10^{17}$ kg**。それでも太陽の総質量 $2 \\times 10^{30}$ kg に対しては無視できるほど小さい',
            },
            {
              type: 'note',
              variant: 'warn',
              content:
                '相対論的エネルギー $E = \\gamma mc^2$ には静止エネルギーが含まれます。運動エネルギーは差し引き分 $K = (\\gamma - 1)mc^2$ とするのが正しく、$K = \\tfrac{1}{2}mv^2$ と書くのが典型的な誤りです。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '電子を $v = 0.8c$ で加速したときの運動エネルギー $K = (\\gamma - 1)m_ec^2$ を MeV 単位で求めよ。ただし $m_ec^2 = 0.511\\ \\mathrm{MeV}$。',
                  hint: '$v = 0.8c$ なら $\\gamma = 5/3$。',
                  answer: '$\\gamma - 1 = 5/3 - 1 = 2/3$ なので $K = \\dfrac{2}{3} \\times 0.511 \\approx$ **$0.34\\ \\mathrm{MeV}$**',
                },
                {
                  body: '$v = 0.6c$ で飛ぶ宇宙船が、前方向に $0.6c$ の速さでミサイルを発射した。地上から見たミサイルの速さを求めよ。',
                  hint: '同じ向きの速度の合成は $\\dfrac{u+v}{1 + uv/c^2}$ を使う。',
                  answer: '$\\dfrac{0.6c + 0.6c}{1 + 0.6 \\times 0.6} = \\dfrac{1.2c}{1.36} \\approx$ **$0.88c$**（単純和の 1.2c にならず、必ず $c$ 未満に収まる）',
                },
                {
                  body: '対消滅で生まれた2個の光子の運動量の向きと大きさについて、保存則を使って説明せよ。',
                  hint: '初期の全運動量は 0。',
                  answer: '消滅前の全運動量が 0 なので、2個の光子は**同じ大きさ・逆向き**で飛ぶ。各光子の運動量は $p = E/c = m_ec$',
                },
                {
                  body: '静止質量 $m$ の粒子を $c$ まで加速するにはどれだけのエネルギーが必要か述べよ。',
                  answer: '$\\gamma \\to \\infty$ なので $K = (\\gamma - 1)mc^2 \\to \\infty$。**有限のエネルギーでは到達不能**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（相対論的力学）',
              questions: [
                {
                  question: '相対論における運動量の正しい表式はどれか。',
                  choices: ['$p = \\gamma m v$', '$p = mv$', '$p = \\frac{1}{2}mv^2$'],
                  answerIndex: 0,
                  explanation: 'ローレンツ因子 $\\gamma$ を掛けた $p = \\gamma mv$ だけが、すべての慣性系で運動量保存を成立させます。',
                },
                {
                  question: '静止質量をもたない光子のエネルギー E と運動量 p の関係はどれか。',
                  choices: ['$E = pc$', '$E = pc^2$', '$E = p^2/2m$'],
                  answerIndex: 0,
                  explanation: '$E^2 = p^2c^2 + m^2c^4$ に $m = 0$ を代入すると $E = pc$ が得られます。',
                },
                {
                  question: '電子と陽電子が対消滅して光子が2個生まれる理由はどれか。',
                  choices: ['運動量保存のため', 'エネルギー保存のため', '電荷保存のため'],
                  answerIndex: 0,
                  explanation:
                    '重心系で初期運動量が 0 のため、光子1本では運動量が保存しません。等しいエネルギーで逆向きの2本が必要です（電荷保存も同時に成立します）。',
                },
                {
                  question: '$v = 0.6c$ と $v = 0.6c$ を同じ向きに合成した速さはいくらか。',
                  choices: ['約 $0.88c$', '$1.2c$', '$c$'],
                  answerIndex: 0,
                  explanation: '$\\dfrac{1.2}{1 + 0.36}c = 0.88c$。相対論的な合成は決して $c$ を超えません。',
                },
              ],
            },
          ],
        },

        {
          id: 'waves-superposition-detail',
          title: '波の重ね合わせの詳細——定在波・うなり・分散',
          summary:
            '重ね合わせの原理から定在波の節と腹の条件式、うなりの周波数 $f_{beat} = |f_1 - f_2|$ を段階的に導き、分散関係がパルスの形を保つ仕組みを学ぶ。',
          objectives: [
            '重ね合わせの原理を用いて、定在波の節・腹の位置条件を自力で導出できる',
            '三角関数の積和公式からうなりの式を導き、$f_{beat} = |f_1 - f_2|$ を使った計算ができる',
            '弦の固定端・自由端での反射（位相の変化）と定在波のモードの関係を説明できる',
            '分散関係 $\\omega(k)$ の形から波束の広がりを予測できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '重ね合わせの原理——足し算が許される世界' },
            {
              type: 'text',
              content:
                '波の世界では、複数の波が同時に到達しても互いに影響を受けず、その**変位の代数和**として現れます。これが**重ね合わせの原理**です。線形微分方程式に従う限り、解の和もまた解であるという数学的事実がこの物理的直感を支えています。音の響き合いも光の干渉縞も量子力学の確率振幅の干渉も、すべて同じ足し算の帰結です。',
            },
            {
              type: 'derivation',
              title: '定在波の生成——進行波と逆行波を足す',
              steps: [
                {
                  label: 'Step 1: 同じ振動数・振幅で逆向きに走る2つの波',
                  tex: 'y_1 = A \\sin(kx - \\omega t), \\qquad y_2 = A \\sin(kx + \\omega t)',
                  note: '固定端での反射がこの状況をつくります（反射波が $y_2$ に相当）。',
                },
                {
                  label: 'Step 2: 和をとって積和公式を適用',
                  tex: 'y = y_1 + y_2 = 2A \\sin(kx)\\cos(\\omega t)',
                  note: '$\\sin\\alpha + \\sin\\beta = 2\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$ を使いました。空間項 $\\sin(kx)$ と時間項 $\\cos(\\omega t)$ に**分離**します。',
                },
                {
                  label: 'Step 3: 「場所ごとに決まった大きさで振動する」',
                  tex: 'y(x, t) = [2A \\sin(kx)] \\cdot \\cos(\\omega t)',
                  note: '各点は自分の位置だけが決める振幅 $|2A\\,\\sin(kx)|$ で単振動します。波形が移動しないので**定在波**です。',
                },
                {
                  label: 'Step 4: 節と腹の位置',
                  tex: '\\text{節}: \\sin(kx) = 0, \\quad \\text{腹}: |\\sin(kx)| = 1',
                  note: '$\\sin$ がゼロになる場所では、いつ、どの時刻でも変位が完全に0。これが定在波の最も強い予言です。',
                },
              ],
            },
            {
              type: 'text',
              content:
                '弦の固定端では反射のときに**位相が π ずれる**（固定端反射）ため、入射波と反射波がちょうど打ち消し合う場所に節が生まれます。両端を固定した長さ $L$ の弦では、両端が必ず節になるように定在波が立ち、波の数（モード）は整数しか許されません。',
            },
            { type: 'formula', tex: '\\text{節}: x = \\dfrac{m\\lambda}{2} \\; (m = 0, 1, 2, \\dots), \\qquad \\text{腹}: x = \\dfrac{(2m+1)\\lambda}{4}', display: true },
            {
              type: 'table',
              headers: ['モード', '波長', '振動数', '呼び名'],
              rows: [
                ['$n = 1$', '$\\lambda_1 = 2L$', '$f_1 = \\dfrac{v}{2L}$', '基本振動（基準モード）'],
                ['$n = 2$', '$\\lambda_2 = L$', '$f_2 = 2f_1$', '2倍振動'],
                ['$n = n$', '$\\lambda_n = \\dfrac{2L}{n}$', '$f_n = nf_1$', '第 $n$ 調和'],
              ],
            },
            {
              type: 'derivation',
              title: 'うなりの周波数 f_beat = |f₁ − f₂| の導出',
              steps: [
                {
                  label: 'Step 1: 振動数の近い2つの波を重ねる',
                  tex: 'y = A\\sin(2\\pi f_1 t) + A\\sin(2\\pi f_2 t)',
                  note: '同じ場所での時刻変化を考えます（位置依存性は省略）。',
                },
                {
                  label: 'Step 2: 積和公式で変形',
                  tex: 'y = 2A\\cos\\left(2\\pi\\dfrac{f_1 - f_2}{2}t\\right)\\sin\\left(2\\pi\\dfrac{f_1 + f_2}{2}t\\right)',
                  note: '平均の振動数で振り、差の半分でゆっくり揺れる係数がついた形になります。',
                },
                {
                  label: 'Step 3: ゆっくり変わる部分が「うなり」',
                  tex: '\\text{envelope amplitude} \\propto \\left|\\cos\\left(2\\pi\\dfrac{f_1 - f_2}{2}t\\right)\\right|',
                  note: '絶対値は周期が半分になるので、音の強弱の繰り返し回数（うなり周波数）は $|f_1 - f_2|$ です。',
                },
                {
                  label: 'Step 4: 強弱が1回起こる条件',
                  tex: '|f_1 - f_2| \\text{ Hz} = \\text{1秒あたりの極大の個数}',
                  note: 'ピアノ調律師はこのうなりが消えるまで弦を張り直します。2音の周波数が一致すればうなりは消失します。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '分散関係——周波数が波長で決まるとき' },
            {
              type: 'text',
              content:
                '媒質中の波の角振動数 $\\omega$ と波数 $k = 2\\pi/\\lambda$ の関係を**分散関係**と呼びます。理想弦のように $\\omega = vk$ と比例する場合を**非分散**、光が水中で色ごとに曲がり方が違うように比例しない場合を**分散がある**といいます。',
            },
            { type: 'formula', tex: '\\omega(k) = vk \\quad \\text{(非分散)}, \\qquad \\omega(k) \\neq vk \\quad \\text{(分散)}', display: true },
            {
              type: 'derivation',
              title: '分散があると波束はなぜ広がるのか——群速度と位相速度',
              steps: [
                {
                  label: 'Step 1: 角振動数の異なる2つの波を重ねる',
                  tex: 'y = \\sin(kx - \\omega t) + \\sin((k + \\Delta k)x - (\\omega + \\Delta\\omega)t)',
                  note: '波数と角振動数がわずかに違う2つの波の合成を考えます。これがうなりの波数版です。',
                },
                {
                  label: 'Step 2: 積和公式で変形する',
                  tex: 'y = 2\\cos(\\Delta k\\,x - \\Delta\\omega\\,t)\\sin(kx - \\omega t)',
                  note: '細かい波（$\\omega, k$）の上に、ゆっくり動く大きな包絡線（$\\Delta k, \\Delta\\omega$）が乗った形になります。',
                },
                {
                  label: 'Step 3: 包絡線の移動速度＝群速度',
                  tex: 'v_g = \\dfrac{\\Delta\\omega}{\\Delta k} \\; \\to \\; v_g = \\dfrac{d\\omega}{dk}',
                  note: '包絡線（信号やエネルギー）の速さ。微分に極限操作したものが群速度です。',
                },
                {
                  label: 'Step 4: 個々の山の移動速度＝位相速度',
                  tex: 'v_p = \\dfrac{\\omega}{k}',
                  note: '$\\omega = vk$ のとき $v_p = v_g = v$ で包絡線も山も同じ速さ——形が崩れません。',
                },
                {
                  label: 'Step 5: 分散があると2つの速度が食い違う',
                  tex: '\\omega(k) \\text{ non-linear} \\; \\Rightarrow \\; v_p \\neq v_g \\; \\Rightarrow \\; \\text{pulse broadening}',
                  note: '深水波では $\\omega = \\sqrt{gk}$ なので $v_g = v_p / 2$。波束の中で個々の波が前へ抜けていき、パルスは次第に広がります。これが分散の正体です。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['概念', '式', 'ポイント'],
              rows: [
                ['定在波（節）', '$\\sin(kx) = 0$', '時刻によらず変位が 0'],
                ['定在波（腹）', '$|\\sin(kx)| = 1$', '振幅が最大の $2A$'],
                ['両端固定弦の固有振動', '$f_n = \\dfrac{n}{2L}\\sqrt{\\dfrac{T}{\\mu}}$', '$n$ が整数のモードのみ許される'],
                ['うなり', '$f_{beat} = |f_1 - f_2|$', '音の強弱が1秒あたり $|f_1-f_2|$ 回'],
                ['群速度', '$v_g = \\dfrac{d\\omega}{dk}$', '波束・エネルギーの移動速度'],
              ],
            },
            {
              type: 'example',
              title: '例題——弦の固有振動数とハーモニクス',
              body:
                '長さ 60 cm、線密度 $4.0 \\times 10^{-3}\\ \\mathrm{kg/m}$ の弦を張力 90 N で張った。(1) 波の速さ $v$ を求めよ。(2) 基本振動数 $f_1$ を求めよ。(3) 基本振動数が 440 Hz の直前まで上げたい。どうすればよいか。',
              answer:
                '(1) $v = \\sqrt{T/\\mu} = \\sqrt{90 / (4.0 \\times 10^{-3})} =$ **$150\\ \\mathrm{m/s}$**　(2) $f_1 = v/2L = 150/(2 \\times 0.60) =$ **$125\\ \\mathrm{Hz}$**　(3) $v$ を上げるには**張力を強く**する。必要な張力は $T = \\mu(2Lf_1)^2 = 4.0 \\times 10^{-3} \\times (2 \\times 0.6 \\times 440)^2 \\approx$ **$1.1 \\times 10^3\\ \\mathrm{N}$**',
            },
            {
              type: 'note',
              variant: 'tip',
              content: 'うなりは「振動数の**差**」で決まり、共鳴は「振動数の**一致**」で起こります。混同しやすいので、うなりの式 $f_{beat} = |f_1 - f_2|$ と固有振動の条件 $f_n = nf_1$ をセットで覚えると混乱しにくいです。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '長さ 1.0 m の弦の基本振動数が 100 Hz のとき、3倍振動の波長と振動数を求めよ。',
                  hint: '$\\lambda_n = 2L/n$。',
                  answer: '$\\lambda_3 = 2 \\times 1.0 / 3 \\approx$ **$0.67\\ \\mathrm{m}$**、$f_3 = 3f_1 =$ **$300\\ \\mathrm{Hz}$**',
                },
                {
                  body: '音叉 A（440 Hz）と音叉 B を同時に鳴らすと 1 秒間に 4 回のうなりが聞こえた。B の振動数の候補をすべて挙げよ。さらに B に少し粘土を付けると、うなりが遅くなった。B の振動数を特定せよ。',
                  hint: 'うなりは差の絶対値。粘土を付けると振動数は下がる。',
                  answer: '候補は **$444$ Hz または $436$ Hz**。粘土で B の振動数が下がるとき、うなりが減るのは B が 436 Hz の場合だけなので、答えは **$436$ Hz**',
                },
                {
                  body: '固定端での反射と自由端での反射の違いを、位相の観点から説明せよ。',
                  answer: '固定端では**位相が π 反転**して戻るため、定在波の節が固定端にできる。自由端では位相が反転せず、自由端は腹になる',
                },
                {
                  body: '深水波では $\\omega = \\sqrt{gk}$ が成り立つ。群速度 $v_g$ が位相速度 $v_p$ の半分になることを示せ。',
                  hint: '$v_p = \\omega/k$, $v_g = d\\omega/dk$。',
                  answer: '$v_p = \\omega/k = \\sqrt{g/k}$、一方 $v_g = \\dfrac{1}{2}(gk)^{-1/2} \\cdot g = \\dfrac{1}{2}\\sqrt{g/k} = $ **$\\dfrac{v_p}{2}$**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（波の重ね合わせ）',
              questions: [
                {
                  question: '両端固定の弦に定在波が立つとき、両端は必ずどうなるか。',
                  choices: ['節になる', '腹になる', '節にも腹にもなり得る'],
                  answerIndex: 0,
                  explanation: '固定端では位相が π 反転する反射のため入射波と打ち消し合い、必ず節になります。よって $\\lambda_n = 2L/n$ の条件が課されます。',
                },
                {
                  question: '振動数 340 Hz と 344 Hz の音叉を同時に鳴らしたときのうなり回数は（1秒あたり）いくらか。',
                  choices: ['$4$ 回', '$2$ 回', '$684$ 回'],
                  answerIndex: 0,
                  explanation: '$f_{beat} = |f_1 - f_2| = 4$ Hz なので1秒に4回の強弱です。',
                },
                {
                  question: '分散がある媒質では光のパルス（波束）はどうなるか。',
                  choices: ['次第に広がりながら進む', '形を保ったまま進む', '逆時間に戻る'],
                  answerIndex: 0,
                  explanation: '位相速度と群速度が異なるため、波束を構成する周波数成分がばらけてパルスは広がります。',
                },
              ],
            },
          ],
        },

        {
          id: 'thermodynamics-laws',
          title: '熱力学の法則——第0法則から第3法則まで',
          summary:
            '4つの法則を「温度の定義 → エネルギー保存 → エントロピー増大 → 絶対零度への漸近」という一つの物語として整理し、カルノーサイクルから効率 η = 1 − T_C/T_H を導く。',
          objectives: [
            '熱力学第0〜3法則をそれぞれ一言で述べ、相互の役割分担を説明できる',
            'カルノーサイクルの各過程の Q と W を追跡し、効率 $\\eta = 1 - T_C/T_H$ を導出できる',
            'クラウジウス不等式とエントロピー増大則の関係を説明し、可逆・不可逆を見分けられる',
            'ギブズエネルギーとの接続から、化学反応の自発性判定に応用できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '4つの法則の全体像' },
            {
              type: 'text',
              content:
                '熱力学の法則は、番号の順に発見されたわけではありません。まず「温度とは何か」を第0法則が与え、第1法則が**エネルギーの総量**を保存で縛り、第2法則がその**流れる方向**（エントロピー増大）を決め、第3法則が絶対零度という到達できない極限の性質を定めます。エネルギーの「量」と「質」——この2つを同時に扱えるのが熱力学の強みです。',
            },
            {
              type: 'table',
              headers: ['法則', '主張', '役割'],
              rows: [
                ['第0法則', '熱平衡の推移性', '温度という状態量の存在根拠'],
                ['第1法則', '$\\Delta U = Q - W$', 'エネルギー保存（量の保存）'],
                ['第2法則', '孤立系では $\\Delta S \\geq 0$', '変化の方向（質の劣化）'],
                ['第3法則', '$T \\rightarrow 0$ で $S \\rightarrow$ 一定', '絶対零度は有限操作では到達不能'],
              ],
            },
            { type: 'heading', level: 3, content: '第1法則——エネルギー保存の熱力学版' },
            {
              type: 'text',
              content:
                '系に流入した熱 $Q$ と、系が外界にした仕事 $W$ の差だけ内部エネルギー $U$ が増えます。符号規約は「Q は入ってきたら正」「W は系が外にしたら正」です。内部エネルギーは**状態量**（経路によらない）である一方、Q と W は**経路依存**。この非対称性が、後のカルノーサイクル解析の鍵になります。',
            },
            { type: 'formula', tex: '\\Delta U = Q - W, \\qquad \\Delta U = Q_V \\;\\; \\text{(定積)}, \\quad \\Delta H = Q_P \\;\\; \\text{(定圧)}', display: true },
            { type: 'heading', level: 3, content: 'カルノーサイクルと最大効率' },
            {
              type: 'text',
              content:
                '高温熱源（$T_H$）と低温熱源（$T_C$）の間で動く熱機関のうち、**可逆サイクル**の効率には理論上の上限があります。カルノーサイクルは「等温膨張 → 断熱膨張 → 等温圧縮 → 断熱圧縮」の4過程で構成され、この上限 $\\eta = 1 - T_C/T_H$ を導く最短の構成です。',
            },
            {
              type: 'derivation',
              title: 'カルノー効率 η = 1 − T_C/T_H の導出——4過程を追跡する',
              steps: [
                {
                  label: 'Step 1: 等温膨張（高温熱源 T_H に接触）',
                  tex: 'Q_H = W_1 = nRT_H \\ln\\dfrac{V_B}{V_A} > 0',
                  note: '理想気体の内部エネルギーは温度だけで決まるので、等温では $\\Delta U = 0$。入った熱がそのまま仕事になります。',
                },
                {
                  label: 'Step 2: 断熱膨張（熱源から切り離す）',
                  tex: 'Q = 0, \\qquad W_2 = -\\Delta U = nC_V(T_H - T_C)',
                  note: '熱のやりとりなしで膨張し、気体は自身の内部エネルギーを消費して冷えます。',
                },
                {
                  label: 'Step 3: 等温圧縮（低温熱源 T_C に接触）',
                  tex: 'Q_C = W_3 = nRT_C \\ln\\dfrac{V_D}{V_C} < 0',
                  note: '外から仕事されて熱 $|Q_C|$ を低温熱源へ捨てます。',
                },
                {
                  label: 'Step 4: 断熱圧縮で元の状態へ',
                  tex: 'Q = 0, \\qquad T_C \\to T_H',
                  note: '断熱過程で $TV^{\\gamma-1} =$ 一定という関係を使うと、体積比に $\\dfrac{V_B}{V_A} = \\dfrac{V_C}{V_D}$ が成り立ちます。',
                },
                {
                  label: 'Step 5: 効率を計算する',
                  tex: '\\eta = \\dfrac{W}{Q_H} = \\dfrac{Q_H - |Q_C|}{Q_H} = 1 - \\dfrac{|Q_C|}{Q_H}',
                  note: 'サイクル全体では $\\Delta U = 0$ なので、した仕事は $W = Q_H - |Q_C|$（1周期で内部エネルギーは元に戻る）。',
                },
                {
                  label: 'Step 6: 対数比を消去する',
                  tex: '\\dfrac{|Q_C|}{Q_H} = \\dfrac{nRT_C \\ln(V_C/V_D)}{nRT_H \\ln(V_B/V_A)} = \\dfrac{T_C}{T_H}',
                  note: 'Step 4 の体積比の等式により対数が打ち消し合い、温度比だけが残ります。これがカルノーサイクルの奇跡的な簡潔さです。',
                },
                {
                  label: 'Step 7: 結論',
                  tex: '\\eta_{\\max} = 1 - \\dfrac{T_C}{T_H}',
                  note: '効率は熱源の**温度だけで**決まり、作業物質やサイクルの詳細に依存しません。T_C → 0 でない限り η = 1 は到達不能です。',
                },
              ],
            },
            {
              type: 'text',
              content:
                'この導出の副産物が**絶対温度の熱力学的定義**です。可逆機関では $|Q_C|/Q_H = T_C/T_H$ が成り立つので、熱量の比から温度の比が定まります。気体の性質に依存しない普遍的な温度目盛りであり、ケルビンはこれに基づいています。',
            },
            { type: 'heading', level: 3, content: '第2法則とエントロピー増大則' },
            {
              type: 'text',
              content:
                '第2法則には2つの言い方があります。クラウジウス表現「低温から高温へ、他に変化を残さず熱を移せない」とケルビン表現「1つの熱源から熱を受けてすべて仕事に変えるサイクル機関はつくれない」です。一見無関係に見えますが、どちらかを仮定すると他方が矛盾なく導け、さらに**エントロピー増大則**という定量表現にまとめられます。',
            },
            { type: 'formula', tex: 'dS = \\dfrac{Q_{rev}}{T} \\geq 0 \\qquad (\\text{孤立系})', display: true },
            {
              type: 'derivation',
              title: 'カルノーサイクルからクラウジウス不等式へ',
              steps: [
                {
                  label: 'Step 1: 可逆カルノーサイクルの熱量比',
                  tex: '\\dfrac{Q_H}{T_H} + \\dfrac{Q_C}{T_C} = 0 \\qquad (Q_C < 0)',
                  note: 'η 導出で得た $|Q_C|/Q_H = T_C/T_H$ を移項したものです。符号を込めて書くと美しくゼロになります。',
                },
                {
                  label: 'Step 2: 任意の可逆サイクルへ拡張',
                  tex: '\\oint \\dfrac{Q_{rev}}{T} = 0',
                  note: '任意のサイクルは無数の細い断熱線と等温線で近似でき、それぞれが微小カルノーサイクルだと考えられるため。',
                },
                {
                  label: 'Step 3: エントロピーという状態量の定義',
                  tex: '\\Delta S = \\displaystyle\\int_{A}^{B} \\dfrac{Q_{rev}}{T}',
                  note: '積分が経路によらないこと（閉じたらゼロ）が、S が状態量であることの証明になっています。',
                },
                {
                  label: 'Step 4: 不可逆過程では不等号に変わる',
                  tex: '\\oint \\dfrac{Q}{T} < 0 \\qquad (\\text{irreversible})',
                  note: '現実の過程は必ず摩擦や有限温度差を含み、可逆機関より性能が落ちます。そのぶん積分は負になります。',
                },
                {
                  label: 'Step 5: 孤立系でのエントロピー増大則',
                  tex: '\\Delta S_{\\text{universe}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{env}} \\geq 0',
                  note: '系と外界を合わせれば、不可逆過程のぶんだけエントロピーが増えます。これが「時間の矢」の数学的表現です。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['過程', 'ΔS_universe', '例'],
              rows: [
                ['可逆過程', '$= 0$', 'ゆっくりした理想気体の等温膨張'],
                ['熱伝導', '$> 0$', '高温体から低温体への熱流'],
                ['自由膨張', '$> 0$', '真空の中への気体の噴出（W = 0, Q = 0 でも増える）'],
                ['摩擦', '$> 0$', '仕事が全て熱に変わる'],
              ],
            },
            { type: 'heading', level: 3, content: '第3法則——絶対零度は到達できない' },
            {
              type: 'text',
              content:
                '第3法則は「有限回の操作で系を絶対零度にまで冷却することはできない」と主張します。ネルンストの定理によれば、$T \\rightarrow 0$ で完全結晶のエントロピーは一定値（ゼロとおける）に漸近します。すると $T \\to 0$ 付近では熱容量がゼロに近づくため、同じ温度差を稼ぐのに必要な操作回数が無限に増えます。冷凍機の効率 $\\beta = T_C/(T_H - T_C)$ は低温ほどゼロに落ちるため、物理的にも冷却はどんどん非効率になります。',
            },
            {
              type: 'example',
              title: '例題——発電所の理論上限効率',
              body:
                '原子炉で蒸気を 600 K に加熱し、排熱は 300 K の海水へ捨てている。(1) 理論最大効率を求めよ。(2) 実際の効率が 35 % である理由を2つ挙げよ。',
              answer:
                '(1) $\\eta = 1 - T_C/T_H = 1 - 300/600 = $ **$50\\%$**　(2) タービンや軸受の**摩擦**（不可逆過程）、蒸気発生器や凝縮器での**有限温度差での熱伝導**。いずれもエントロピーを余分に生み、可逆カルノー効率から離れる原因になる',
            },
            {
              type: 'note',
              variant: 'info',
              content:
                '効率の式に入れるのは**絶対温度**です。摂氏で $1 - 20/1000$ のように計算するのは典型ミスです。また第2法則は「熱は全部仕事にできない」ことを意味しますが、逆に仕事は全部熱にできます（摩擦）。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '高温熱源 800 K、低温熱源 400 K のカルノーサイクルの効率を求めよ。さらに 400 kJ の熱を高温熱源から受け取ったときの最大仕事を求めよ。',
                  hint: '$\\eta = 1 - T_C/T_H$, $W = \\eta Q_H$。',
                  answer: '$\\eta = 1 - 400/800 =$ **$0.5$**、$W_{max} = 0.5 \\times 400 = $ **$200$ kJ**',
                },
                {
                  body: '氷が室温の水槽の中で融けて全体が 0 °C に均一化するとき、宇宙のエントロピーは増えるか減るか。理由も述べよ。',
                  answer: '**増える**。氷は低い温度で融解熱を受け取り（$\\Delta S_{ice} = L/T_{melt}$）、水槽は高い温度で同じ量の熱を失うため、$\\Delta S_{total} > 0$ となる',
                },
                {
                  body: '第2法則のクラウジウス表現が成り立たない世界（低温から高温へ熱が自然に移れる世界）で起こることを、冷凍機の観点から説明せよ。',
                  answer: '外部仕事なしで熱をくみ上げられるため**冷凍機は無料で動く**。さらに高温側に捨てた熱をもう一度使えば仕事が無限に取り出せることになり、**第二種永久機関**が成立してしまう',
                },
                {
                  body: '1 mol の理想気体が 300 K で等温可逆膨張し体積が2倍になった。エントロピー変化を求めよ。$R = 8.31\\ \\mathrm{J/(mol \\cdot K)}$。',
                  hint: '$\\Delta S = nR \\ln(V_2/V_1)$。',
                  answer: '$\\Delta S = 1 \\times 8.31 \\times \\ln 2 = 8.31 \\times 0.693 \\approx$ **$5.76\\ \\mathrm{J/K}$**',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（熱力学の法則）',
              questions: [
                {
                  question: 'カルノーサイクルの効率 η = 1 − T_C/T_H について正しいのはどれか。',
                  choices: ['熱源の温度だけで決まる', '作業物質の種類にもよる', '常に 1 を超え得る'],
                  answerIndex: 0,
                  explanation: '導出からわかる通り、効率は温度比だけで決まります。T_C > 0 の限り η < 1 です。',
                },
                {
                  question: '孤立系で起きる不可逆過程について正しいのはどれか。',
                  choices: ['系全体のエントロピーは必ず増える', '内部エネルギーが必ず減る', '温度は必ず下がる'],
                  answerIndex: 0,
                  explanation: '第2法則（エントロピー増大則）により、孤立系のエントロピーは決して減りません。',
                },
                {
                  question: '熱力学第3法則が主張することはどれか。',
                  choices: ['絶対零度は有限回の操作では到達できない', 'エネルギーは保存する', '熱平衡は推移的である'],
                  answerIndex: 0,
                  explanation: '第0法則が温度の定義、第1法則がエネルギー保存、第3法則が絶対零度への到達不可能性を扱います。',
                },
              ],
            },
          ],
        },
          ],
        },
    ],
};
