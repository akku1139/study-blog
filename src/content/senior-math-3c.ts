import type { Subject } from './types';

// ============================================================
// 高校数学III・C（学習指導要領 第2章 第4節「数学」: 数学III／数学C）
// ============================================================

export const seniorMath3C: Subject = {
  id: 'senior-math-3c',
  stage: 'senior',
  name: '高校数学（数学III・C）',
  description:
    '数学III：関数・極限、微分法・積分法の発展。数学C：ベクトル、数列、統計的な推測。大学入試・理工系への架け橋。',
  icon: '∑',
  color: '#4338ca',
  units: [
    // ---------- 数学C: ベクトル ----------
    {
      id: 's3c-vector',
      name: '数学C：ベクトル',
      gakushuShidoYoryo: '内容「ベクトル」(1) 平面ベクトルと空間ベクトル、(2) ベクトルの応用（内積、図形への応用）',
      lessons: [
        {
          id: 'vector-basics',
          title: 'ベクトルと内積',
          summary: 'ベクトルの和・差・実数倍と、大きさ・なす角を結びつける内積。',
          objectives: [
            'ベクトルの演算を成分表示で行うことができる',
            '内積を使ってなす角・垂直条件を求めることができる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'ベクトルの基本' },
            {
              type: 'text',
              content: '**大きさと向き**をもつ量がベクトルです。成分表示では $\\vec{a} = (a_1, a_2)$ のように書き、加減算は成分ごとに行います。',
            },
            { type: 'formula', tex: '\\vec{a} + \\vec{b} = (a_1 + b_1,\\ a_2 + b_2), \\qquad k\\vec{a} = (ka_1,\\ ka_2)', display: true },
            {
              type: 'widget',
              widget: { id: 'vector-explorer', caption: 'プレイグラウンド: ベクトルの和（平行四辺形則）と内積を動かして確認しよう' },
            },
            { type: 'heading', level: 3, content: '内積' },
            { type: 'formula', tex: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}|\\,|\\vec{b}| \\cos\\theta = a_1b_1 + a_2b_2', display: true },
            {
              type: 'list',
              items: [
                '$\\vec{a} \\perp \\vec{b}$（垂直）$\\iff \\vec{a} \\cdot \\vec{b} = 0$',
                '$|\\vec{a}|^2 = \\vec{a} \\cdot \\vec{a}$（大きさは自分自身との内積から出る）',
                '内積の計算法則：分配法則 $(\\vec{a} + \\vec{b}) \\cdot \\vec{c} = \\vec{a}\\cdot\\vec{c} + \\vec{b}\\cdot\\vec{c}$ が成り立つ',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$\\vec{a} = (2, 1)$, $\\vec{b} = (-1, x)$ が垂直になるとき、$x$ の値を求めよ。',
              answer: '$\\vec{a} \\cdot \\vec{b} = -2 + x = 0$ より **$x = 2$**',
            },
          ],
        },
      ],
    },
    // ---------- 数学C: 数列 ----------
    {
      id: 's3c-sequence',
      name: '数学C：数列',
      gakushuShidoYoryo: '内容「数列」等差数列・等比数列、階差数列、漸化式、数学的帰納法',
      lessons: [
        {
          id: 'sequences',
          title: '数列と漸化式',
          summary: '一般項・和の求め方と、漸化式を解く代表的な手法。',
          objectives: ['等差・等比数列の一般項と和を求められる', '数学的帰納法で予想を証明できる'],
          blocks: [
            { type: 'heading', level: 3, content: '基本の数列' },
            {
              type: 'table',
              headers: ['', '一般項', '初項 n 項の和 $S_n$'],
              rows: [
                ['等差数列（公差 d）', '$a_n = a_1 + (n-1)d$', '$S_n = \\dfrac{n(a_1 + a_n)}{2}$'],
                ['等比数列（公比 r）', '$a_n = a_1 r^{n-1}$', '$S_n = \\dfrac{a_1(r^n - 1)}{r - 1}$（r ≠ 1）'],
              ],
            },
            { type: 'heading', level: 3, content: '階差数列' },
            {
              type: 'text',
              content: '隣り合う項の差 $b_n = a_{n+1} - a_n$ が等比数列になるなら、$a_n = a_1 + \\displaystyle\\sum_{k=1}^{n-1} b_k$ として一般項が求まります。「差をとったらきれいになる」パターンを見抜くのがコツです。',
            },
            { type: 'heading', level: 3, content: '数学的帰納法' },
            {
              type: 'list',
              items: [
                '**① 基礎**: n = 1 のとき成り立つことを確かめる',
                '**② 帰納**: n = k のとき成り立つと仮定し、n = k + 1 でも成り立つことを示す',
                '①②よりすべての自然数 n で成立',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$1^2 + 2^2 + \\cdots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}$ を数学的帰納法で証明せよ。',
              answer: '① n=1: 左辺 1、右辺 $\\tfrac{1 \\cdot 2 \\cdot 3}{6} = 1$ ✓　② n=k で成立とすると、n=k+1 の左辺は $\\tfrac{k(k+1)(2k+1)}{6} + (k+1)^2 = \\tfrac{(k+1)(k+2)(2k+3)}{6}$ となり右辺に一致 ✓',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '②の仮定（n = k の成立）を**実際に使わずに** n = k+1 を変形してしまうのが典型的な減点パターン。「仮定の式」を出発点に変形しましょう。',
            },
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '初項 3、公差 4 の等差数列の第 20 項を求めよ。',
                  answer: '$a_{20} = 3 + 19 \\times 4 = $ **79**',
                },
                {
                  body: '初項 1、公比 2 の等比数列の初項から第 10 項までの和を求めよ。',
                  hint: '$S_n = \\dfrac{a_1(r^n - 1)}{r - 1}$。',
                  answer: '$S_{10} = \\dfrac{2^{10} - 1}{2 - 1} = $ **1023**',
                },
                {
                  body: '数列 $3, 7, 13, 21, 31, \\ldots$ の一般項を求めよ。（階差数列を作ると等差になる）',
                  hint: '階差 $4, 6, 8, 10, \\ldots$ は公差 2 の等差数列。',
                  answer: '$b_k = 2k + 2$ なので $a_n = 3 + \\sum_{k=1}^{n-1}(2k+2) = 3 + (n-1)(n+2) = $ **$n^2 + n + 1$**',
                },
              ],
            },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '無限ドリル: 等差・等比数列の一般項がランダムに出題されます',
                props: { topic: 'sequence-terms' },
              },
            },
          ],
        },
        // ---------- 数学C: 統計的な推測 ----------
        {
          id: 'statistical-inference',
          title: '統計的な推測',
          summary: '二項分布・正規分布から母集団の平均を推定する。',
          blocks: [
            { type: 'heading', level: 3, content: '確率分布と期待値' },
            {
              type: 'text',
              content: '成功確率 p の試行を n 回行うときの成功回数 X は**二項分布 B(n, p)** にしたがい、期待値と分散は次の通りです。',
            },
            { type: 'formula', tex: 'E(X) = np, \\qquad V(X) = np(1-p)', display: true },
            { type: 'heading', level: 3, content: '正規分布と標本' },
            {
              type: 'list',
              items: [
                'n が大きいとき二項分布は**正規分布 N(np, np(1−p))** で近似できる（中心極限定理の芽生え）',
                '標本平均 $\\bar{x}$ は $N(m, \\sigma^2/n)$ に近づく → 標本を増やすほど推定は精密になる',
                '95% 信頼区間: $m$ の推定は $\\bar{x} \\pm 1.96 \\times \\dfrac{\\sigma}{\\sqrt{n}}$',
              ],
            },
            {
              type: 'widget',
              widget: { id: 'probability-simulator', caption: 'プレイグラウンド: サイコロの目の分布が回数を増やすと理論値に収束する様子＝大数の法則' },
            },
            {
              type: 'example',
              title: '例題',
              body: '表が出る確率が不明のコインを400回投げて224回表が出た。表の出る確率 p の95%信頼区間を求めよ（ただし $\\sigma = \\sqrt{p(1-p)} \\approx 0.5$ と近似）。',
              answer: '$\\hat{p} = 224/400 = 0.56$、誤差幅 $1.96 \\times 0.5/\\sqrt{400} = 0.049$。よって **0.51 ≤ p ≤ 0.61** 程度。',
            },
          ],
        },
      ],
    },
    // ---------- 数学III ----------
    {
      id: 's3-limit-differential',
      name: '数学III：微分法・積分法',
      gakushuShidoYoryo: '内容「微分法」「積分法」: 合成関数・逆関数の微分、増減と極値、面積・体積',
      lessons: [
        {
          id: 'calculus3',
          title: '微分法の拡張と応用',
          summary: '積・商の微分、合成関数の微分、接線と増減の応用。',
          objectives: [
            '積・商・合成関数の微分公式を使える',
            '関数の増減・極値・グラフの概形を描ける',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '微分の公式' },
            { type: 'formula', tex: "\\left( \\frac{f}{g} \\right)' = \\frac{f'g - fg'}{g^2}, \\qquad \\left\\{ f(g(x)) \\right\\}' = f'(g(x)) g'(x)", display: true },
            {
              type: 'text',
              content: '合成関数の公式（連鎖律）は「外側を先に微分 × 内側の微分」。たとえば $y = \\sin 2x$ なら $y\' = \\cos 2x \\times 2 = 2\\cos 2x$ です。',
            },
            { type: 'heading', level: 3, content: '三角関数・指数対数の微分' },
            {
              type: 'table',
              headers: ['f(x)', "f'(x)"],
              rows: [
                ['$\\sin x$', '$\\cos x$'],
                ['$\\cos x$', '$-\\sin x$'],
                ['$e^x$', '$e^x$（微分しても変わらない！）'],
                ['$\\log x$', '$\\dfrac{1}{x}$'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '$f(x) = x e^{-x}$ ($x \\ge 0$) の最大値を求めよ。',
              answer: "$f'(x) = e^{-x}(1 - x)$ より x = 1 で極大かつ最大。最大値 $f(1) = e^{-1}$",
            },
            {
              type: 'widget',
              widget: { id: 'derivative-tangent', caption: 'プレイグラウンド: 接線の傾きと極値の関係（数学IIからの発展）' },
            },
            { type: 'heading', level: 3, content: '積分と体積' },
            { type: 'formula', tex: '\\int_a^b f(x)\\,dx, \\qquad V = \\pi \\int_a^b \\left\\{ f(x) \\right\\}^2 dx \\; (\\text{x軸まわり})', display: true },
            {
              type: 'text',
              content: '回転体の体積は、細い円板（半径 f(x)、厚さ dx）の体積 $\\pi f(x)^2 dx$ を積み上げるものとして導けます。区分求積の考え方そのものです。',
            },
            {
              type: 'example',
              title: '例題',
              body: '$y = \\sqrt{x}$ ($0 \\le x \\le 1$) を x 軸のまわりに1回転させてできる体積を求めよ。',
              answer: '$V = \\pi \\displaystyle\\int_0^1 x\\,dx = \\dfrac{\\pi}{2}$',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '数学IIIの積分は部分積分・置換積分が武器になります。$(fg)\' = f\'g + fg\'$ を移項した $\\displaystyle\\int f\'g = [fg] - \\int fg\'$ が部分積分の本体です。',
            },
            { type: 'heading', level: 3, content: '練習（極限ドリル）' },
            {
              type: 'widget',
              widget: {
                id: 'math-drill',
                caption: '激ムズ無限ドリル: 因数分解・有名極限・∞/∞ 型の極限がランダムに出題されます',
                props: { topic: 'limits' },
              },
            },
          ],
        },
      ],
    },
  ],
};
