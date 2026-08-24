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

    ],
};
