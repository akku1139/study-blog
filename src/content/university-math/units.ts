import type { Unit } from '../types';

/** 大学数学：線形代数 */
export const linearAlgebraUnit: Unit = {
  id: 'uni-linalg',
  name: '線形代数',
  gakushuShidoYoryo: '行列と連立一次方程式、行列式、ベクトル空間、固有値・固有ベクトル',
  lessons: [
    {
      id: 'matrices-eigenvalues',
      title: '行列と固有値問題',
      summary: '連立一次方程式の解法から固有値・対角化まで。',
      objectives: [
        '掃き出し法で連立一次方程式を解ける',
        '固有値・固有ベクトルを求め、対角化できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '連立一次方程式と掃き出し法' },
        {
          type: 'text',
          content:
            '拡大係数行列に**行基本変形**（行の定数倍・入れ替え・加法）を繰り返して階段形にするのがガウスの消去法。解は「一意／不定（自由変数あり）／不能」に分かれます。',
        },
        { type: 'heading', level: 3, content: '行列式' },
        { type: 'formula', tex: '\\det A \\neq 0 \\iff A \\text{ は正則（逆行列をもつ）} \\iff Ax = 0 \\text{ は自明解のみ}', display: true },
        { type: 'heading', level: 3, content: '固有値・固有ベクトルと対角化' },
        { type: 'formula', tex: 'Av = \\lambda v \\iff \\det(A - \\lambda I) = 0', display: true },
        {
          type: 'text',
          content:
            'n 個の独立な固有ベクトルがとれると $A = PDP^{-1}$（対角化）。冪の計算 $A^k = PD^kP^{-1}$ や、連立微分方程式・マルコフ連鎖の定常状態に応用されます。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ の固有値を求めよ。',
          answer: '$\\det(A - \\lambda I) = (2-\\lambda)^2 - 1 = 0$ より **$\\lambda = 1, 3$**',
        },
      ],
    },
  ],
};

/** 大学数学：解析 */
export const analysisUnit: Unit = {
  id: 'uni-analysis',
  name: '解析（微積分）',
  gakushuShidoYoryo: '極限と連続性、微分法の応用（テイラー展開）、積分法の応用、偏微分',
  lessons: [
    {
      id: 'taylor-multivariable',
      title: 'テイラー展開と偏微分',
      summary: '関数の多項式近似、多変数関数の微分と極値問題。',
      objectives: [
        '主要関数のテイラー展開を書ける',
        '偏微分と極値判定（ヘッセ行列）を使える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'テイラー展開' },
        { type: 'formula', tex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}, \\qquad \\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots', display: true },
        {
          type: 'text',
          content:
            'テイラー展開は「関数の多項式近似」。極限計算（ロピタルの定理の拡張）、数値計算、物理学の摂動論の基礎になります。',
        },
        { type: 'heading', level: 3, content: '多変数関数の微分' },
        { type: 'formula', tex: '\\nabla f = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right), \\qquad D = f_{xx} f_{yy} - f_{xy}^2', display: true },
        {
          type: 'list',
          items: [
            '極値候補は $\\nabla f = 0$（停留点）',
            '$D > 0$ かつ $f_{xx} > 0$：極小／$D > 0$ かつ $f_{xx} < 0$：極大／$D < 0$：鞍点',
            '**勾配ベクトル** $\\nabla f$ は「最も急峻に増加する方向」——機械学習の勾配降下法の核心',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '$f(x, y) = x^2 + y^2 - xy$ の極値を求めよ。',
          answer: '$f_x = 2x - y = 0$, $f_y = 2y - x = 0$ より停留点 $(0,0)$。$D = 2 \\cdot 2 - 1 = 3 > 0$, $f_{xx} = 2 > 0$ より**極小値 0**',
        },
      ],
    },
  ],
};
