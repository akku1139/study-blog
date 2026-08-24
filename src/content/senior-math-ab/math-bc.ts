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
    {
      id: 'matrix-applications',
      title: '行列の応用',
      summary: '逆行列で連立一次方程式を解き、点の移動の合成を行列積で処理し、正則性を判定する。',
      objectives: [
        '逆行列を公式と掃き出し法で求め、連立一次方程式の解を行列形式で書ける',
        '点の移動の合成を表現行列の積で計算できる',
        '行列式による正則性の判定と、解が一意に定まる条件を説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '連立一次方程式の行列形式' },
        {
          type: 'text',
          content:
            '2 元連立一次方程式は、係数行列 A・未知数ベクトル x・定数ベクトル b を使って $A\\mathbf{x} = \\mathbf{b}$ という一つの行列方程式にまとめられます。この形にすると、解く操作が「両辺に A の逆行列を掛ける」という統一的な手続きになり、3 元以上やコンピュータでの計算にもそのまま拡張できます。逆行列が存在しないときは、解なしまたは解が無数にあるケースに分かれていくのが流れです。',
        },
        {
          type: 'table',
          headers: ['対象', '行列形式'],
          rows: [
            ['2 元連立方程式', '$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\mathbf{x} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, $\\mathbf{b} = \\begin{pmatrix} p \\\\ q \\end{pmatrix}$'],
            ['解（A が正則）', '$\\mathbf{x} = A^{-1}\\mathbf{b}$'],
            ['逆行列', '$A^{-1} = \\dfrac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$'],
          ],
        },
        { type: 'heading', level: 3, content: '逆行列で解く仕組み' },
        {
          type: 'derivation',
          title: 'x = A^(-1)b の導出',
          steps: [
            {
              label: '左から A の逆行列を掛ける',
              tex: 'A^{-1}(A\\mathbf{x}) = A^{-1}\\mathbf{b}',
            },
            {
              label: '結合法則でまとめる',
              tex: '(A^{-1}A)\\mathbf{x} = A^{-1}\\mathbf{b}',
              note: '行列の積には結合法則が成り立つ。掛ける順序（左右）を守るのが要点',
            },
            {
              label: '単位行列に潰す',
              tex: '\\mathbf{x} = A^{-1}\\mathbf{b}',
              note: '$A^{-1}A = E$ より左辺は x だけが残る。det A = 0 なら $A^{-1}$ が存在しないのでこの手続きは使えない',
            },
          ],
        },
        {
          type: 'note',
          variant: 'warn',
          content: 'AB = E となる B は A が正則のときに限り $B = A^{-1}$ に一致します。数値を入れる前に対称性や det の値を確認しておくと、逆行列の計算ミスを早めに発見できます。',
        },
        { type: 'heading', level: 3, content: '点の移動の合成' },
        {
          type: 'text',
          content:
            '1 次変換 f の表現行列を F、続く g の表現行列を G とすると、合成 g∘f の表現行列は積 GF になります。順序が「後から適用するものが左」なのは、列ベクトルが右側から作用されるためです。回転・対称移動・せん断などの基本移動を組み合わせれば、複雑な図形の変形も行列の積一発で記述でき、逆の移動は逆行列で表せます。',
        },
        { type: 'formula', tex: "\\text{g after f}: \\quad \\mathbf{p}' = G(F\\mathbf{p}) = (GF)\\mathbf{p}, \\qquad \\text{undo f}: \\quad \\mathbf{p} = F^{-1}\\mathbf{p}'", display: true },
        {
          type: 'example',
          title: '例題: 回転の合成と逆変換',
          body: '点 P を原点まわり 90° 回転したあと、y 軸に関する対称移動で点 Q に移した。P(3, 1) に対応する Q の座標を求めよ。',
          answer:
            '$GF = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ なので $Q = (1, 3)$',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: '$A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$ の逆行列を求めよ。',
              hint: '$ad - bc$ を先に計算してから公式に当てはめる。',
              answer: '$\\det A = 1$ より $A^{-1} = $ **$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$**',
            },
            {
              body: '連立方程式 $2x + y = 4$, $5x + 3y = 11$ を逆行列を使って解け。',
              hint: '$A^{-1}\\mathbf{b} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ 11 \\end{pmatrix}$。',
              answer: '**$(x, y) = (1, 2)$**',
            },
            {
              body: '点 (2, 0) を原点まわり 90° 回転し、さらに原点まわり 90° 回転した点を求めよ。結果を $F^2$ で確かめよ。（発展）',
              hint: '$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}^2 = -E$。',
              answer: '90° × 2 = 180° 回転なので **(-2, 0)**。$F^2 = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ とも一致する',
            },
            {
              body: '$A = \\begin{pmatrix} k & 2 \\\\ 3 & k - 1 \\end{pmatrix}$ が正則でないような k の値を求めよ。（発展）',
              hint: '正則でない ⟺ 行列式が 0。',
              answer: '$k(k-1) - 6 = 0$ より **k = 3, -2**',
            },
          ],
        },
        { type: 'heading', level: 3, content: '確認クイズ' },
        {
          type: 'quiz',
          questions: [
            {
              question: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ について正しいのはどれか。',
              choices: ['$\\det A = -2$ なので正則である', '$\\det A = 0$ なので正則でない', '$\\det A = 10$ なので正則である', '逆行列は一意に定まらない'],
              answerIndex: 0,
              explanation: '$1 \\times 4 - 2 \\times 3 = -2 \\neq 0$ なので正則で、逆行列がただ1つ存在する。',
            },
            {
              question: '1 次変換 f のあとに g を施す合成変換の表現行列は？（f, g の表現行列を F, G とする）',
              choices: ['$GF$', '$FG$', '$G + F$', '$G^{-1}F$'],
              answerIndex: 0,
              explanation: '後から適用される g の行列が左に来る。',
            },
            {
              question: '$A\\mathbf{x} = \\mathbf{b}$ で $\\det A = 0$ のとき、解の状況として考えられるものはどれか。',
              choices: ['解がないか、解が無数にある', '必ず解がちょうど1つある', '必ず解が無数にある', '必ず解がない'],
              answerIndex: 0,
              explanation: '正則でない場合は解の一意性が崩れ、両方の可能性があり得る。',
            },
          ],
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
    {
      id: 'conic-sections-detail',
      title: '二次曲線の詳細',
      summary: '放物線・楕円・双曲線を焦点と準線で統一的に定義し、離心率・接線の方程式まで扱う。',
      objectives: [
        '焦点と準線による定義から二次曲線の方程式を導出できる',
        '離心率で3種類の二次曲線を分類し、楕円や双曲線の基本的性質を述べられる',
        '接線の方程式を導出し、接線と焦点の性質を結び付けられる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '焦点と準線による統一定義' },
        {
          type: 'text',
          content:
            '二次曲線は「定点（焦点）F からの距離と、定直線（準線）ℓ との距離の比が一定」な点の集合として統一的に定義できます。この比が離心率 e で、e の値だけで曲線の種類が決まるのが美しい点です。放物線は境界ケース e = 1 にあたり、e < 1 の範囲で楕円、e > 1 の範囲で双曲線が出てきます。',
        },
        { type: 'formula', tex: '\\frac{|PF|}{d(P, \\ell)} = e', display: true },
        {
          type: 'table',
          headers: ['曲線', '離心率', '標準形', '焦点'],
          rows: [
            ['放物線', '$e = 1$', '$y^2 = 4px$', '$(p, 0)$'],
            ['楕円', '$0 < e < 1$', '$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ （b^2 = a^2 - c^2）', '$(\\pm c, 0)$'],
            ['双曲線', '$e > 1$', '$\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$ （b^2 = c^2 - a^2）', '$(\\pm c, 0)$'],
          ],
        },
        { type: 'heading', level: 3, content: '導出' },
        {
          type: 'derivation',
          title: '放物線 y^2 = 4px の導出',
          steps: [
            {
              label: '条件を式に書く',
              tex: '|PF| = d(P, \\ell)',
              note: '焦点 F(p, 0)、準線 x = -p を設定する',
            },
            {
              label: '距離を座標で表す',
              tex: '\\sqrt{(x - p)^2 + y^2} = |x + p|',
            },
            {
              label: '2乗して整理',
              tex: '(x - p)^2 + y^2 = (x + p)^2 \\implies y^2 = 4px',
              note: 'x^2 が消えるので放物線は二次曲線の中で特別な形になる',
            },
          ],
        },
        {
          type: 'derivation',
          title: '楕円の方程式の導出',
          steps: [
            {
              label: '距離の和が一定という条件',
              tex: '\\sqrt{(x+c)^2 + y^2} + \\sqrt{(x-c)^2 + y^2} = 2a',
              note: '焦点 F(-c, 0), F(c, 0) までの距離の和を 2a とする',
            },
            {
              label: '一方を移項して2乗',
              tex: '(x+c)^2 + y^2 = 4a^2 - 4a\\sqrt{(x-c)^2+y^2} + (x-c)^2 + y^2',
            },
            {
              label: '根号についてもう一度2乗',
              tex: 'a^2(x-c)^2 + a^2 y^2 = (a^2 - c^2)^2',
            },
            {
              label: 'b^2 = a^2 - c^2 でおく',
              tex: '\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1',
              note: '三角形の不等式より a > c なので b は実数。長半径 a・短半径 b・焦点距離 c の関係が確定する',
            },
          ],
        },
        { type: 'heading', level: 3, content: '離心率と形の変化' },
        {
          type: 'text',
          content:
            '楕円では e を 0 に近づけると円に、1 に近づけると細長い楕円になります。双曲線では e が大きいほど開きが急になります。また双曲線には漸近線 $y = \\pm \\tfrac{b}{a} x$ があり、点が遠ざかるにつれこの直線に限りなく近づきます。共役直径や接線の作図など、図形的な性質も離心率を介して理解すると見通しがよくなります。',
        },
        {
          type: 'list',
          items: [
            '**楕円の光学的性質**: 一方の焦点から出た光は他方の焦点へ集まる',
            '**双曲線の光学的性質**: 一方の焦点から出た光は他方の焦点から出たように反射される',
            '**放物線の光学的性質**: 焦点から出た光は軸に平行になって進む',
          ],
        },
        { type: 'heading', level: 3, content: '接線の方程式' },
        {
          type: 'derivation',
          title: '楕円上の点 (x_0, y_0) における接線',
          steps: [
            {
              label: '陰関数を微分する',
              tex: '\\dfrac{2x}{a^2} + \\dfrac{2y}{b^2} y_t = 0 \\implies y_t = -\\dfrac{b^2 x}{a^2 y}',
            },
            {
              label: '点 (x_0, y_0) の傾きを入れる',
              tex: 'y - y_0 = -\\dfrac{b^2 x_0}{a^2 y_0}(x - x_0)',
            },
            {
              label: '曲線の方程式で整理',
              tex: '\\dfrac{x_0 x}{a^2} + \\dfrac{y_0 y}{b^2} = 1',
              note: '双曲線なら右辺が 1 のまま符号だけ変わり $\\tfrac{x_0 x}{a^2} - \\tfrac{y_0 y}{b^2} = 1$、放物線 $y^2 = 4px$ では $y_0 y = 2p(x + x_0)$',
            },
          ],
        },
        {
          type: 'example',
          title: '例題: 楕円の接線',
          body: '楕円 $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$ 上の点 (1, $\\tfrac{4\\sqrt{2}}{3}$) における接線の方程式を求めよ。',
          answer:
            '$\\dfrac{x_0 x}{9} + \\dfrac{y_0 y}{4} = 1$ に代入して $\\dfrac{x}{9} + \\dfrac{\\sqrt{2}}{3} y = 1$。整理して **$x + 3\\sqrt{2} y = 9$**',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: '放物線 $y^2 = 12x$ の焦点の座標と準線の方程式を求めよ。',
              hint: '4p = 12。',
              answer: '焦点 **(3, 0)**、準線 **x = -3**',
            },
            {
              body: '楕円 $\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$ の焦点の座標と離心率を求めよ。',
              hint: '$c^2 = a^2 - b^2$。',
              answer: '$c = 3$ より焦点 **$(\\pm 3, 0)$**、離心率 **$\\tfrac{3}{5}$**',
            },
            {
              body: '双曲線 $\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1$ の漸近線の方程式と離心率を求めよ。（発展）',
              hint: '$c^2 = a^2 + b^2$。',
              answer: '漸近線 **$y = \\pm \\tfrac{4}{3} x$**、離心率 $\\tfrac{5}{3}$',
            },
            {
              body: '放物線 $y^2 = 4x$ 上の点 (1, 2) における接線の方程式を求めよ。（発展）',
              hint: '$y_0 y = 2p(x + x_0)$。',
              answer: '$2y = 2(x + 1)$ より **$y = x + 1$**',
            },
          ],
        },
        { type: 'heading', level: 3, content: '確認クイズ' },
        {
          type: 'quiz',
          questions: [
            {
              question: '離心率 e = 0.8 の二次曲線はどれか。',
              choices: ['楕円', '放物線', '双曲線', '直線'],
              answerIndex: 0,
              explanation: '0 < e < 1 が楕円、e = 1 が放物線、e > 1 が双曲線。',
            },
            {
              question: '放物線 $y^2 = 8x$ の焦点の座標は？',
              choices: ['$(2, 0)$', '$(4, 0)$', '$(0, 2)$', '$(8, 0)$'],
              answerIndex: 0,
              explanation: '4p = 8 より p = 2 で焦点は $(p, 0)$。',
            },
            {
              question: '楕円 $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ （a > b > 0）で正しい関係はどれか。',
              choices: ['$b^2 = a^2 - c^2$', '$b^2 = a^2 + c^2$', '$a^2 = b^2 + c^2$', '$c^2 = a^2 + b^2$'],
              answerIndex: 0,
              explanation: '楕円では長半径 a が最大で、$c^2 = a^2 - b^2$ すなわち $b^2 = a^2 - c^2$。',
            },
          ],
        },
      ],
    },
  ],
};
