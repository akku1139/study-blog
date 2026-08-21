import type { Unit } from '../types';

/** 数学B 第1項目「1次変換」 */
export const linearTransformUnit: Unit = {
  id: 'sb-linear-transform',
  name: '数学B：1次変換',
  gakushuShidoYoryo: '内容「1次変換」1次変換と行列、図形の移動',
  lessons: [
    {
      id: 'linear-transforms',
      title: '1次変換と行列',
      summary: '行列で表される平面の1次変換（回転・対称移動・せん断）を学ぶ。',
      objectives: [
        '1次変換を行列で表し計算できる',
        '回転・対称移動の表現行列を使いこなせる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '1次変換の定義' },
        { type: 'formula', tex: "\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}", display: true },
        {
          type: 'text',
          content:
            '原点を動かさず、直線を直線に移す変換。合成は**行列の積**、繰り返しは**行列の冪**で表されます。',
        },
        { type: 'heading', level: 3, content: '重要な変換の表現行列' },
        {
          type: 'table',
          headers: ['変換', '行列'],
          rows: [
            ['原点まわり θ 回転', '$\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$'],
            ['x軸に関する対称移動', '$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$'],
            ['直線 y = x に関する対称移動', '$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$'],
            ['原点に関して対称移動', '$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$'],
          ],
        },
        { type: 'heading', level: 3, content: '行列式と面積' },
        { type: 'formula', tex: "\\det A = ad - bc, \\qquad S' = |\\det A| \\, S", display: true },
        {
          type: 'example',
          title: '例題',
          body: '点 (1, 0) を原点まわり 90° 回転した点を求めよ。',
          answer: '$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = (0, 1)$',
        },
        {
          type: 'note',
          variant: 'tip',
          content: 'det A = 0 のとき、変換により平面全体が1本の直線につぶれます（正則でない）。逆変換が存在しない条件でもあります。',
        },
      ],
    },
  ],
};

/** 数学C 第2項目「平面上の曲線と複素数平面」 */
export const complexPlaneUnit: Unit = {
  id: 'sc-complex',
  name: '数学C：平面上の曲線と複素数平面',
  gakushuShidoYoryo: '内容「平面上の曲線と複素数平面」楕円・双曲線・放物線、複素数平面、ド・モアブルの定理',
  lessons: [
    {
      id: 'conics-complex',
      title: '二次曲線と複素数平面',
      summary: '焦点を用いた二次曲線の定義、極形式とド・モアブルの定理。',
      objectives: [
        '楕円・双曲線の定義と方程式を扱える',
        '極形式で複素数の積・商・累乗を計算できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '二次曲線' },
        {
          type: 'table',
          headers: ['曲線', '定義', '標準形'],
          rows: [
            ['楕円', '2焦点までの距離の和が一定', '$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$'],
            ['双曲線', '2焦点までの距離の差が一定', '$\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$'],
            ['放物線', '焦点と準線への距離が等しい', '$y^2 = 4px$'],
          ],
        },
        { type: 'heading', level: 3, content: '複素数平面' },
        { type: 'formula', tex: 'z = r(\\cos\\theta + i\\sin\\theta), \\qquad z^n = r^n(\\cos n\\theta + i\\sin n\\theta)', display: true },
        {
          type: 'text',
          content:
            '**極形式**では積は「絶対値を掛けて偏角を足す」。ド・モアブルの定理により累乗・累乗根が機械的に計算できます。1 の n 乗根は単位円上に等間隔に並びます。',
        },
        {
          type: 'example',
          title: '例題',
          body: '$z = 1 + i$ のとき $z^8$ を求めよ。',
          answer: '$z = \\sqrt{2}(\\cos 45° + i\\sin 45°)$ より $z^8 = 16(\\cos 360° + i\\sin 360°) = $ **16**',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '回転＝「絶対値1の複素数を掛ける」。図形の回転問題は複素数平面で書くと一気に簡単になることがあります。',
        },
      ],
    },
  ],
};
