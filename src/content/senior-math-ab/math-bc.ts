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
            'ベクトルの和と実数倍を保つ変換を1次変換といいます。原点は原点に移り、直線の像は直線または1点です。合成は**行列の積**、繰り返しは**行列の冪**で表されます。回転角の正の向きは反時計回りとします。',
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
          content: 'det A = 0 のとき、平面全体の像は1本の直線または原点だけになります（零行列なら原点だけ）。このとき A は正則でなく、逆変換は存在しません。',
        },
        { type: 'heading', level: 3, content: '2本の矢印の行き先だけで、すべての点が決まる理由' },
        { type: 'text', content: '方眼紙を一様に引き伸ばしたり、横にずらして平行四辺形の網目にしたりする場面を考えます。右へ1歩の矢印と上へ1歩の矢印の行き先が決まれば、「右へ2歩、上へ3歩」の行き先も、移った矢印を2本と3本つないで決まります。この「足し算と実数倍を保つ」という規則が1次変換の本体です。曲げたり、一部分だけ伸ばしたりする変形は、この規則を満たすとは限りません。' },
        {
          type: 'derivation', title: '行列の各列は単位の矢印の像', steps: [
            { label: '座標を2方向の矢印に分ける', tex: String.raw`\mathbf e_1=\begin{pmatrix}1\\0\end{pmatrix},\quad \mathbf e_2=\begin{pmatrix}0\\1\end{pmatrix},\quad \begin{pmatrix}x\\y\end{pmatrix}=x\mathbf e_1+y\mathbf e_2` },
            { label: '和と実数倍を保つ性質を使う', tex: String.raw`T(x\mathbf e_1+y\mathbf e_2)=xT(\mathbf e_1)+yT(\mathbf e_2)`, note: 'Tは1次変換、xとyは任意の実数。' },
            { label: '像を列として並べる', tex: String.raw`T(\mathbf e_1)=\begin{pmatrix}a\\c\end{pmatrix},\ T(\mathbf e_2)=\begin{pmatrix}b\\d\end{pmatrix}\ \Longrightarrow\ T\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}`, note: '1列目が右への単位矢印、2列目が上への単位矢印の像。行として並べない。' },
          ],
        },
        { type: 'note', variant: 'warn', content: '原点が固定されることは必要条件ですが、それだけで1次変換とはいえません。たとえば(x,y)→(x²,y)は原点を固定しても、(2,0)の像が(1,0)の像の2倍になりません。また原点を動かす平行移動は、ここで扱う2×2行列だけの1次変換ではありません。' },
        {
          type: 'example', title: '例題：2本の矢印から行列を復元する',
          body: '1次変換Tが(1,0)を(2,1)へ、(0,1)を(−1,3)へ移す。Tの表現行列と、点(3,−2)の像を求めよ。',
          answer: String.raw`像を列に並べて $A=\begin{pmatrix}2&-1\\1&3\end{pmatrix}$。点の像は $3(2,1)-2(-1,3)=(8,-3)$。行列で計算しても $x'=2\cdot3+(-1)(-2)=8$、$y'=1\cdot3+3(-2)=-3$ となる。`,
        },
        { type: 'heading', level: 3, content: 'せん断：面積が変わらなくても、形は変わる' },
        { type: 'text', content: '積み重ねたカードを、上のカードほど横に大きくずらす様子がせん断の直感です。変換(x,y)→(x+ky,y)は、高さyに比例して横にkyだけ動かします。実数kがせん断の強さを表し、x軸上の点は動きません。単位正方形の上辺は横にずれますが、底辺1、高さ1の平行四辺形になるので面積は1のままです。' },
        { type: 'formula', tex: String.raw`S_k=\begin{pmatrix}1&k\\0&1\end{pmatrix},\qquad \det S_k=1,\qquad S_k^{-1}=S_{-k}`, display: true },
        { type: 'text', content: '行列式の絶対値は面積の倍率であって、辺の長さの倍率ではありません。せん断でも角度や斜めの辺の長さは一般に変わります。また、行列式が負なら向きが反転しますが、面積自体が負になるわけではないので、面積には絶対値を使います。' },
        {
          type: 'example', title: '例題：せん断後の頂点と面積を確かめる',
          body: '三角形OABの頂点をO(0,0)、A(2,0)、B(0,3)とする。せん断(x,y)→(x+2y,y)の後の頂点と面積を求めよ。',
          answer: 'O′(0,0)、A′(2,0)、B′(6,3)。底辺O′A′は2、高さは3なので面積は2×3÷2＝3で、元の面積3と同じ。一方、OBは長さ3からO′B′の長さ√45へ変わるので、面積保存と長さ保存は別の性質である。',
        },
        { type: 'list', ordered: true, items: ['原点、(1,0)、(0,1)の像を調べ、列の意味をつかむ。', '点は列ベクトルとして右側に置き、各行と掛け合わせる。', 'せん断なら高さ、対称移動なら対称軸上の点など、変わらない量を検算に使う。', '面積を求めるなら行列式の絶対値を掛け、長さの変化と混同しない。'] },
        { type: 'practice', title: '像・行列・図形を行き来する練習', problems: [
          { body: '1次変換が(1,0)を(1,2)、(0,1)を(3,−1)へ移す。(−1,2)の像を求めよ。', answer: '和と実数倍を保つので−1×(1,2)＋2×(3,−1)＝(5,−4)。行列の列はそれぞれ(1,2)、(3,−1)となる。' },
          { body: 'せん断(x,y)→(x−3y,y)で(4,2)はどこへ移るか。元に戻す式も書け。', answer: '像は(4−6,2)＝(−2,2)。高さyは不変なので、逆変換は(x′,y′)→(x′＋3y′,y′)。実際に(−2＋6,2)＝(4,2)。' },
          { body: String.raw`行列 $A=\begin{pmatrix}2&0\\0&-3\end{pmatrix}$ によって、面積5の三角形は面積いくつになるか。`, answer: 'det A＝−6で絶対値は6。面積は6×5＝30。x方向2倍、y方向3倍と反転が起きるので、面積の倍率は正の6倍となる。' },
        ] },
        { type: 'quiz', title: '行列を図形として読む', questions: [
          { question: '2×2行列Aの第2列が表すのは？', choices: ['(1,0)の像', '(0,1)の像', '原点の像'], answerIndex: 1, explanation: 'Aに列ベクトル(0,1)を掛けると、第1列の0倍と第2列の1倍の和になる。' },
          { question: 'どの変換が1次変換か？', choices: ['(x,y)→(x+1,y)', '(x,y)→(x²,y)', '(x,y)→(x+2y,y)'], answerIndex: 2, explanation: '最後の式は各成分がxとyの1次結合で、和と実数倍を保つ。平行移動や2乗を含む変換は保たない。' },
          { question: '行列式が−2の1次変換で正しいのは？', choices: ['面積が2倍で、向きが反転する', '面積が−2になる', 'すべての長さが2倍になる'], answerIndex: 0, explanation: '面積の倍率は|det A|＝2。負号は向きの反転を表し、長さが一様に2倍という意味ではない。' },
        ] },
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
            ['双曲線', '2焦点までの距離の差の絶対値が一定', '$\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$'],
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
        { type: 'heading', level: 3, content: '距離の条件から、曲線の大きさを読む' },
        { type: 'text', content: '二次曲線の式は形を丸暗記するものではなく、点が守る距離の約束を座標で書いたものです。楕円なら2か所の目印までの距離の合計が一定で、片方に近づく分だけ他方から遠ざかります。たとえば2焦点が(−c,0)、(c,0)で距離の和が2aなら、横の端は(±a,0)。縦の端(0,b)では二つの距離が等しく、それぞれaなので、直角三角形からb²＋c²＝a²になります。ここではa>c>0とし、潰れた線分を除きます。' },
        { type: 'formula', tex: String.raw`\text{楕円：}\ b^2=a^2-c^2\quad(a>c>0),\qquad \text{双曲線：}\ c^2=a^2+b^2\quad(a,b>0)`, display: true },
        { type: 'text', content: '双曲線では距離の差の絶対値が2aです。焦点(±c,0)を結ぶ線分より差が小さい非退化な場合はc>aとなり、楕円と大小関係が逆です。標準形x²/a²−y²/b²＝1のx切片は±aですが、y切片はありません。放物線y²＝4pxではp≠0で、焦点(p,0)と準線x＝−pの間の中点が頂点(0,0)です。' },
        { type: 'note', variant: 'warn', content: '標準形の分母は半径そのものではなく、その2乗です。また楕円の長軸がy軸方向なら、焦点もy軸上になります。xの分母を必ず大きい方と決めつけず、軸との交点を先に調べましょう。双曲線では正の項に対応する軸の方向に開きます。' },
        {
          type: 'example', title: '例題：縦に長い楕円を焦点から確かめる',
          body: String.raw`楕円 $x^2/9+y^2/25=1$ の長軸の両端と焦点を求め、点(3,0)から2焦点までの距離の和を確かめよ。`,
          answer: 'x＝0とするとy＝±5、y＝0とするとx＝±3なので長軸はy軸方向、両端は(0,±5)。焦点までの距離cはc²＝25−9＝16よりc＝4で、焦点は(0,±4)。(3,0)からはどちらも√(3²＋4²)＝5なので和は10、すなわち長軸の長さ2×5と一致する。',
        },
        { type: 'heading', level: 3, content: '複素数の掛け算が回転になる理由' },
        { type: 'text', content: '複素数z＝x+iyを点(x,y)として見ると、絶対値は原点からの距離、偏角は正の実軸からの向きです。地図上の位置を「東に何歩、北に何歩」で言うか、「距離と方角」で言うかの違いだと考えられます。非零の複素数ならr>0として極形式に書け、偏角は360°の整数倍だけ変えても同じ点を表します。0の絶対値は0ですが、向きは決まらず偏角は定義しません。' },
        {
          type: 'derivation', title: '加法定理で積の偏角を読む', steps: [
            { label: '二つの極形式を掛ける', tex: String.raw`r(\cos\alpha+i\sin\alpha)\,s(\cos\beta+i\sin\beta)\quad(r,s>0)` },
            { label: '実部と虚部をまとめる', tex: String.raw`rs\{(\cos\alpha\cos\beta-\sin\alpha\sin\beta)+i(\sin\alpha\cos\beta+\cos\alpha\sin\beta)\}` },
            { label: '三角関数の加法定理を使う', tex: String.raw`rs\{\cos(\alpha+\beta)+i\sin(\alpha+\beta)\}`, note: '距離はrs、向きはα＋β。商なら割る数が0でないとき距離を割り、向きを引く。' },
          ],
        },
        { type: 'note', variant: 'warn', content: '累乗で偏角をn倍する規則は整数nについて使います。負の整数ならz≠0が必要です。逆にn乗根を求めるときは、元の偏角に360°kを足した全候補をnで割ります。一つの偏角をnで割るだけでは、非零の数の異なるn個の根を取り逃がします（nは正の整数）。' },
        {
          type: 'example', title: '例題：掛け算を座標と回転の両方で読む',
          body: '複素数z＝2−iに2iを掛けた数wを求め、原点からの距離と向きの変化を説明せよ。',
          answer: 'w＝2i(2−i)＝2＋4iなので点(2,−1)が(2,4)へ移る。2iの絶対値は2、偏角は90°なので、原点のまわりに反時計回りに90°回転して距離を2倍する変換。元の絶対値は√5、像は√20＝2√5で、座標からの計算も一致する。',
        },
        { type: 'heading', level: 3, content: '座標の曲線と複素数の軌跡をつなぐ' },
        { type: 'text', content: '複素数αに対応する点からzまでの距離は|z−α|です。したがって|z−α|＝R（R>0）は中心α、半径Rの円、|z−α|＋|z−β|＝L（α≠β、L>|α−β|）は焦点α、βの楕円です。複素数の式でも距離の約束は変わりません。式を見たら、引き算でどの点から測っているかを言葉にしてみましょう。' },
        { type: 'practice', title: '距離と角度で検算する練習', problems: [
          { body: String.raw`双曲線 $x^2/16-y^2/9=1$ の頂点と焦点を求めよ。`, answer: 'a＝4、b＝3、c²＝16＋9＝25よりc＝5。正の項はxの項なので頂点(±4,0)、焦点(±5,0)。焦点は頂点より原点から遠い。' },
          { body: 'iを掛ける変換で、点−1＋2iはどこへ移るか。', answer: 'i(−1＋2i)＝−2−i。座標で(−1,2)→(−2,−1)となり、原点まわり反時計回り90°回転に対応する。絶対値はどちらも√5。' },
          { body: 'z³＝8を満たすすべての複素数zを求めよ。', answer: '絶対値は2、偏角は0°、120°、240°。よって2、−1＋√3i、−1−√3iの3個。各偏角を3倍すると360°の整数倍となり、絶対値の3乗は8になる。' },
          { body: '複素数zが|z−1|＋|z＋1|＝4を満たすとき、対応する点(x,y)の軌跡の方程式を求めよ。', answer: '焦点(±1,0)、距離の和2a＝4の楕円。a＝2、c＝1なのでb²＝4−1＝3、方程式はx²/4＋y²/3＝1。距離の和4が焦点間距離2より大きく、非退化な楕円となる。' },
        ] },
        { type: 'quiz', title: '形と極形式の確認', questions: [
          { question: '楕円x²/4＋y²/16＝1の長軸の方向は？', choices: ['x軸方向', 'y軸方向', '直線y＝x方向'], answerIndex: 1, explanation: 'x切片は±2、y切片は±4なので、y軸方向の方が長い。' },
          { question: '偏角を定義できない複素数は？', choices: ['1', 'i', '0'], answerIndex: 2, explanation: '原点にある0には原点から見た方向がない。非零なら偏角は360°の整数倍の違いを除いて決まる。' },
          { question: '非零の複素数zに絶対値1、偏角30°の複素数を掛けると？', choices: ['距離は変えず30°回転する', '絶対値が30倍になる', '偏角が30倍になる'], answerIndex: 0, explanation: '積では絶対値を掛け、偏角を足す。したがって原点からの距離は不変で、反時計回り30°回転する。' },
        ] },
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
        { type: 'text', content: 'ここでは焦点が準線上にない非退化な曲線を扱います。楕円・双曲線は $a,b>0$ とし、焦点を $(\\pm c,0)$ に取ります。楕円では $a>c>0$、双曲線では $c>a>0$。放物線は $p\\ne0$ とします。円は楕円の極限 $e=0$ ですが、有限の準線を用いた距離比の定義にはそのまま含めません。' },
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
              label: '根号を残して整理し、もう一度2乗',
              tex: 'a\\sqrt{(x-c)^2+y^2}=a^2-cx \\implies a^2((x-c)^2+y^2)=(a^2-cx)^2',
              note: '右辺には x が残る。ここを定数に置き換えると正しい楕円の式にならない。',
            },
            {
              label: '展開して共通項を消す',
              tex: '(a^2-c^2)x^2+a^2y^2=a^2(a^2-c^2)',
            },
            {
              label: 'b^2 = a^2 - c^2 でおく',
              tex: '\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1',
              note: '非退化な楕円には距離の和 2a が焦点間距離 2c より大きいことが必要。a > c より b > 0 と置ける。標準形では |x| ≤ a なので a² − cx > 0 となり、2乗前の条件も満たす。',
            },
          ],
        },
        { type: 'heading', level: 3, content: '離心率と形の変化' },
        {
          type: 'derivation',
          title: '楕円の離心率と準線を求める',
          steps: [
            { label: '右の焦点までの距離を取り出す', tex: 'PF=\\sqrt{(x-c)^2+y^2}=a-\\frac{c}{a}x', note: '楕円の導出で得た式を a で割る。' },
            { label: '準線までの距離として書く', tex: 'PF=\\frac{c}{a}\\left(\\frac{a^2}{c}-x\\right)=e\\,d(P,\\ell),\\quad e=\\frac{c}{a},\\quad\\ell: x=\\frac{a^2}{c}', note: 'a²/c > a ≥ x なので括弧内は正。左の焦点には準線 x = −a²/c が対応する。' },
          ],
        },
        { type: 'text', content: '楕円では $e=c/a$、$b/a=\\sqrt{1-e^2}$。双曲線でも $e=c/a$ ですが、$b/a=\\sqrt{e^2-1}$ となり、準線は $x=\\pm a^2/c$ です。したがって離心率は単に名前を覚える量ではなく、縦横比や準線の位置を決める量です。' },
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
              tex: '\\dfrac{2x}{a^2} + \\dfrac{2y}{b^2} y^{\\prime} = 0 \\implies y^{\\prime} = -\\dfrac{b^2 x}{a^2 y}',
              note: 'ここでは y₀ ≠ 0 として、y を x の関数として微分する。',
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
        { type: 'note', variant: 'warn', content: '接線の公式を使う前に、接点が曲線上にあることを代入で確認しましょう。また $y_0=0$ の頂点 $(\\pm a,0)$ では傾きによる導出は使えませんが、接線は鉛直な直線 $x=\\pm a$ で、最終的な接線の公式にはそのまま代入できます。' },
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
            {
              body: '焦点が $(\\pm3,0)$、2焦点までの距離の和が10である楕円の方程式と、右の焦点に対応する準線を求めよ。',
              answer: '$a=5,c=3$ なので $b^2=25-9=16$。方程式は $x^2/25+y^2/16=1$。準線は $x=a^2/c=25/3$、離心率は $e=3/5$。',
            },
            {
              body: '楕円 $x^2/25+y^2/16=1$ の点 $(3,16/5)$ における接線を求めよ。頂点 $(5,0)$ の接線も求めよ。',
              answer: '$9/25+(256/25)/16=1$ より最初の点は楕円上。接線は $3x/25+y/5=1$、すなわち $3x+5y=25$。頂点 $(5,0)$ の接線は $x=5$ で、傾きは定義されない。',
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
              choices: ['$b^2 = a^2 - c^2$', '$b^2 = a^2 + c^2$', '$a^2 = b^2 - c^2$', '$c^2 = a^2 + b^2$'],
              answerIndex: 0,
              explanation: '楕円では長半径 a が最大で、$c^2 = a^2 - b^2$ すなわち $b^2 = a^2 - c^2$。',
            },
          ],
        },
      ],
    },
  ],
};
