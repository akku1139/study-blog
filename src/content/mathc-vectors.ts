import type { Lesson } from './types';

export const mathCVectorsLessons: Lesson[] = [
  {
    id: 'mc-vector-intersections',
    title: '位置ベクトルで解く内外分と交点',
    summary: '点を係数で表し、二通りの表示を連立する。係数の和が1になる理由と、係数比較が使える条件まで理解する。',
    objectives: [
      '内分・外分を直線のパラメータ表示と結び付け、点の位置を判定できる',
      '一次独立な二つのベクトルを用いて、交点と線分比を求められる',
      '係数和1の意味と、一次独立性が係数比較に必要な理由を説明できる',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '点の位置を「始点＋移動量」で表す' },
      {
        type: 'text',
        content: '基礎的なベクトル演算を、図形の交点を求める道具に発展させます。原点 $O$ を固定し、点 $A,B,P$ の位置ベクトルをそれぞれ $\\vec a,\\vec b,\\vec p$ とします。$A\\ne B$ のとき、直線 $AB$ 上の点は、$A$ から $\\overrightarrow{AB}$ の実数倍だけ移動した点として表せます。',
      },
      { type: 'formula', tex: '\\vec p=\\vec a+t(\\vec b-\\vec a)=(1-t)\\vec a+t\\vec b\\qquad(t\\in\\mathbb R)', display: true },
      {
        type: 'table',
        headers: ['パラメータ', '点の位置', '距離の比'],
        rows: [
          ['$0<t<1$', '線分ABの内部', '$AP:PB=t:(1-t)$'],
          ['$t=0,1$', 'それぞれ端点A、B', '一方の距離が0'],
          ['$t>1$', 'Bを越えた延長上', '$AP:PB=t:(t-1)$'],
          ['$t<0$', 'Aを越えた延長上', '$AP:PB=(-t):(1-t)$'],
        ],
      },
      { type: 'heading', level: 3, content: '内分と外分を同じ式から導く' },
      {
        type: 'derivation',
        title: 'AP:PB = m:n を満たす位置ベクトル（m,nは正）',
        steps: [
          { label: '内分では距離の和がAB', tex: 't=\\frac{AP}{AB}=\\frac{m}{m+n}', note: 'Aから進む割合は、A側の距離APに対応する。' },
          { label: '直線の表示に代入', tex: '\\vec p=\\frac{n}{m+n}\\vec a+\\frac{m}{m+n}\\vec b', note: 'Aの係数がn、Bの係数がmになる。比の順序と係数の順序に注意。' },
          { label: '外分では有向の移動量を使う', tex: '\\frac{t}{t-1}=\\frac{m}{n}\\quad\\Longrightarrow\\quad t=\\frac{m}{m-n}\\quad(m\\ne n)', note: '外分点ではtとt−1が同符号なので、この商は距離比になる。' },
          { label: '外分の表示', tex: '\\vec p=\\frac{m\\vec b-n\\vec a}{m-n}', note: 'm>nならBの外側、m<nならAの外側。m=nの有限な外分点はない。' },
        ],
      },
      { type: 'heading', level: 3, content: '係数の和が1とは何を保証するか' },
      {
        type: 'text',
        content: '$\\vec p=\\alpha\\vec a+\\beta\\vec b+\\gamma\\vec c$ の係数和が1なら、原点を変えても同じ点を表します。新原点の旧位置ベクトルを $\\vec q$ とすると、各位置ベクトルから $\\vec q$ を引けばよいからです。この性質をもつ表示をアフィン結合といいます。',
      },
      { type: 'formula', tex: '\\alpha(\\vec a-\\vec q)+\\beta(\\vec b-\\vec q)+\\gamma(\\vec c-\\vec q)=\\vec p-(\\alpha+\\beta+\\gamma)\\vec q=\\vec p-\\vec q', display: true },
      {
        type: 'text',
        content: '二点の係数和1の表示は直線を表し、非共線な三点の係数和1の表示はその三点を含む平面を表します。三係数がすべて0以上なら三角形の内部または周上です。ただし、係数和1だけで線分や三角形の内部とは限りません。負の係数も許すと延長方向まで表せます。',
      },
      { type: 'heading', level: 3, content: '交点では一次独立な二方向の係数を比較する' },
      {
        type: 'text',
        content: '非共線な三点 $A,B,C$ を使うときは、原点を $A$ に置き、$\\vec u=\\overrightarrow{AB},\\vec v=\\overrightarrow{AC}$ とすると見通しがよくなります。$r\\vec u+s\\vec v=\\vec0$ から $r=s=0$ が従うことを一次独立といいます。これにより、同じベクトルの二つの表示の係数が一致します。',
      },
      { type: 'formula', tex: 'x\\vec u+y\\vec v=x^{\\prime}\\vec u+y^{\\prime}\\vec v\\quad\\Longrightarrow\\quad x=x^{\\prime},\\ y=y^{\\prime}', display: true },
      {
        type: 'example',
        title: '例題1：内分・外分の符号を座標で確認する',
        body: '$A(1,2),B(7,5)$ とする。$AP:PB=2:1$ に内分する点 $P$ と、$AQ:QB=2:1$ に外分する点 $Q$ を求めよ。',
        answer: '内分は $t=2/3$ より $P=A+\\frac23(B-A)=(5,4)$。外分は $t=2$ より $Q=A+2(B-A)=(13,8)$。$\\overrightarrow{AP}=(4,2)$ と $\\overrightarrow{PB}=(2,1)$ は同方向で長さ比2:1。$\\overrightarrow{AQ}=(12,6)$ と $\\overrightarrow{BQ}=(6,3)$ も長さ比2:1です。QはBを越えた位置にあり、内分と外分を取り違えていないと検算できます。',
      },
      {
        type: 'example',
        title: '例題2：二本の線分を別々のパラメータで表す',
        body: '三角形 $ABC$ で、$D$ は $BD:DC=1:2$ の内分点、$E$ は $CA$ の中点とする。$AD$ と $BE$ の交点 $P$ の位置を $\\vec u=\\overrightarrow{AB},\\vec v=\\overrightarrow{AC}$ で表し、$AP:PD$ と $BP:PE$ を求めよ。',
        answer: '$\\overrightarrow{AD}=\\frac23\\vec u+\\frac13\\vec v$、$\\overrightarrow{AE}=\\frac12\\vec v$。AD上では $\\overrightarrow{AP}=t(\\frac23\\vec u+\\frac13\\vec v)$、BE上では $\\overrightarrow{AP}=(1-s)\\vec u+\\frac{s}{2}\\vec v$。一次独立性から $2t/3=1-s,\\ t/3=s/2$。解くと $t=3/4,s=1/2$ なので $\\overrightarrow{AP}=\\frac12\\vec u+\\frac14\\vec v$、$AP:PD=3:1$、$BP:PE=1:1$ です。両パラメータが0と1の間なので交点は両線分の内部。任意の原点からは $\\vec p=\\frac14\\vec a+\\frac12\\vec b+\\frac14\\vec c$ となり、係数和も1です。',
      },
      {
        type: 'note',
        variant: 'warn',
        content: '位置ベクトル $\\vec a,\\vec b,\\vec c$ の係数を無条件に三つとも比較してはいけません。平面内の三ベクトルは一次独立ではありません。非共線な三点の係数和1の表示なら、Aを基準に二つの差ベクトルへ直して比較します。また $\\vec v=2\\vec u$ のような平行な二ベクトルでも係数比較はできません。',
      },
      {
        type: 'practice',
        title: '練習：位置・比・交点を往復する',
        problems: [
          {
            body: '$A(2,-1),B(8,5)$ に対し、$AP:PB=1:2$ に外分する点Pを求め、その位置を説明せよ。',
            hint: '外分のパラメータは $t=m/(m-n)$。負になる場合もそのまま使う。',
            answer: '$t=1/(1-2)=-1$ より $P=A-(B-A)=(-4,-7)$。Aを越えた延長上です。$AP=6\\sqrt2,PB=12\\sqrt2$ なので比は1:2。外分だから常にBの先にある、という判断は誤りです。',
          },
          {
            body: '非共線な三点A,B,Cについて、$\\vec p=\\frac12\\vec a+\\frac32\\vec b-\\vec c$ とする。PをAからの二方向で表し、三角形の内部にあるか判定せよ。',
            hint: '係数和を確認してから $\\vec p-\\vec a$ を整理する。非共線なら係数和1の表示は一意。',
            answer: '係数和は1。$\\overrightarrow{AP}=\\frac32\\overrightarrow{AB}-\\overrightarrow{AC}$ です。Cの係数が負なので三角形の外部にあります。係数和1は同じ平面上の点という条件であり、内部を保証しません。',
          },
          {
            body: '三角形ABCでDはBCの中点、Eは $CE:EA=2:1$ の内分点。$P=AD\\cap BE$ に対し、$\\overrightarrow{AP}$ を $\\vec u=\\overrightarrow{AB},\\vec v=\\overrightarrow{AC}$ で表し、$AP:PD$ を求めよ。',
            hint: '$\\overrightarrow{AE}=\\vec v/3$。AD上の表示とBE上の表示を作る。',
            answer: '$\\overrightarrow{AP}=\\frac t2\\vec u+\\frac t2\\vec v=(1-s)\\vec u+\\frac s3\\vec v$。$t/2=1-s=s/3$ より $s=3/4,t=1/2$。したがって $\\overrightarrow{AP}=(\\vec u+\\vec v)/4$、$AP:PD=1:1$。Eの位置を $2\\vec v/3$ としないことが大切です。',
          },
        ],
      },
      {
        type: 'quiz',
        title: '理解を確かめる',
        questions: [
          {
            question: '$A\\ne B$ とする。$\\vec p=-\\frac12\\vec a+\\frac32\\vec b$ はどの点か。',
            choices: ['ABを1:3に内分する点', 'ABを3:1に外分し、Bを越えた点', 'ABを1:3に外分し、Aを越えた点', '直線AB上にはない点'],
            answerIndex: 1,
            explanation: '係数和1なので直線AB上。t=3/2>1なのでBの先にあり、AP:PB=(3/2):(1/2)=3:1です。',
          },
          {
            question: '$x\\vec u+y\\vec v=2\\vec u-\\vec v$ から必ず $x=2,y=-1$ と結論できる条件はどれか。',
            choices: ['二ベクトルの長さが等しい', '二ベクトルが平行である', '二ベクトルが一次独立である', 'xとyの和が1である'],
            answerIndex: 2,
            explanation: '差を取ると $(x-2)\\vec u+(y+1)\\vec v=\\vec0$。一次独立なら両係数が0です。例えば $\\vec u=\\vec v\\ne\\vec0$ なら式はx+y=1だけとなり、解は一意でありません。',
          },
        ],
      },
    ],
  },
  {
    id: 'mc-space-metric',
    title: '空間ベクトルで測る垂線・距離・球',
    summary: '所属条件をパラメータで、垂直条件を内積で表す。垂線の足を求め、点と直線・平面の距離や球の切り口へ応用する。',
    objectives: [
      '空間内の点から直線または平面に下ろした垂線の足と距離を求められる',
      '内積で球や平面を表し、球と平面の位置関係を判定できる',
      '求めた点の所属条件と垂直条件を代入して検算できる',
    ],
    blocks: [
      { type: 'heading', level: 3, content: '垂線の足には二つの条件がある' },
      {
        type: 'text',
        content: '空間図形では見た目の角度や交わり方は当てになりません。点Pから直線へ下ろした垂線の足Hは、①Hがその直線上にある、②PHが直線の方向に垂直、の両方を満たす点です。直線上の基準点Aの位置ベクトルを $\\vec a$、0でない方向ベクトルを $\\vec d$ として、①を $\\vec h=\\vec a+t\\vec d$ と書き、②を内積0で表します。',
      },
      {
        type: 'derivation',
        title: '点から直線への正射影と最短距離',
        steps: [
          { label: '所属条件を垂直条件に代入', tex: '(\\vec p-\\vec a-t\\vec d)\\cdot\\vec d=0' },
          { label: 'パラメータを決める', tex: 't_0=\\frac{(\\vec p-\\vec a)\\cdot\\vec d}{|\\vec d|^2},\\qquad\\vec h=\\vec a+t_0\\vec d', note: '方向ベクトルは0でないので分母は正。単位ベクトルに直す必要はない。' },
          { label: '距離の平方を整理', tex: 'PH^2=|\\vec p-\\vec a|^2-\\frac{\\{(\\vec p-\\vec a)\\cdot\\vec d\\}^2}{|\\vec d|^2}', note: '平行成分と垂直成分の直角三角形に三平方の定理を使った式。' },
          { label: '最短である理由', tex: '|\\vec p-(\\vec a+s\\vec d)|^2=|\\vec p-\\vec h|^2+(s-t_0)^2|\\vec d|^2\\ge PH^2', note: '交差項は内積0で消える。等号はs=t₀のとき。' },
        ],
      },
      { type: 'heading', level: 3, content: '平面への垂線は法線方向に進む' },
      {
        type: 'text',
        content: '平面 $\\vec n\\cdot\\vec x=k$ の0でないベクトル $\\vec n$ を法線ベクトルといいます。平面内の任意の移動ベクトルと垂直です。Pから平面への垂線の足を $\\vec h=\\vec p-\\lambda\\vec n$ とおけば、Hが平面上という条件から $\\lambda$ が決まります。',
      },
      { type: 'formula', tex: '\\lambda=\\frac{\\vec n\\cdot\\vec p-k}{|\\vec n|^2},\\quad\\vec h=\\vec p-\\frac{\\vec n\\cdot\\vec p-k}{|\\vec n|^2}\\vec n,\\quad PH=\\frac{|\\vec n\\cdot\\vec p-k|}{|\\vec n|}', display: true },
      {
        type: 'text',
        content: '距離公式の分母が $|\\vec n|$ なのは、移動量の大きさが $|\\lambda|\\,|\\vec n|$ だからです。一方、足のベクトルを求める係数の分母は $|\\vec n|^2$。この二つを区別しましょう。平面の式全体を0でない定数倍しても、同じ足と距離が得られます。',
      },
      { type: 'heading', level: 3, content: '球を内積で表すと距離条件が見える' },
      {
        type: 'text',
        content: '中心C、半径 $r>0$ の球面は $|\\vec x-\\vec c|^2=r^2$ です。また、異なる二点A,Bを直径の両端とする球面は、直径を見込む角が直角という条件から次のように表せます。両端点も方程式には含まれますが、その点では角は定義しません。',
      },
      { type: 'formula', tex: '(\\vec x-\\vec a)\\cdot(\\vec x-\\vec b)=0\\quad\\Longleftrightarrow\\quad\\left|\\vec x-\\frac{\\vec a+\\vec b}{2}\\right|^2=\\frac{|\\vec a-\\vec b|^2}{4}', display: true },
      {
        type: 'text',
        content: '中心から平面までの距離を $\\delta$ とすると、$\\delta>r$ なら共有点なし、$\\delta=r$ なら接し、$\\delta<r$ なら交わりは円です。切り口の中心はCから平面への垂線の足Hで、切り口の半径は $\\sqrt{r^2-\\delta^2}$。球面上の点Xについて三角形CHXが直角になることから分かります。',
      },
      {
        type: 'example',
        title: '例題1：空間の直線へ下ろした垂線の足',
        body: '点 $P(3,1,2)$ から、点 $A(1,0,1)$ を通り方向ベクトル $\\vec d=(1,2,2)$ をもつ直線に下ろした垂線の足Hと距離を求めよ。',
        answer: '$\\vec p-\\vec a=(2,1,1)$、内積は $2+2+2=6$、$|\\vec d|^2=9$ より $t_0=2/3$。$H=(1,0,1)+\\frac23(1,2,2)=(5/3,4/3,7/3)$ です。$\\overrightarrow{HP}=(4/3,-1/3,-1/3)$ より $PH=\\sqrt{18/9}=\\sqrt2$。検算すると $\\overrightarrow{HP}\\cdot\\vec d=(4-2-2)/3=0$。HはAに方向ベクトルの実数倍を足した点なので、直線への所属条件も満たします。',
      },
      {
        type: 'example',
        title: '例題2：球と平面の切り口の中心・半径',
        body: '球面 $(x-1)^2+(y+2)^2+(z-2)^2=9$ と平面 $x+2y+2z=7$ の交わりが円であることを示し、その中心と半径を求めよ。',
        answer: '球の中心は $C(1,-2,2)$、半径は3。法線 $\\vec n=(1,2,2)$ の長さは3で、$\\vec n\\cdot\\vec c=1$。中心と平面の距離は $|1-7|/3=2<3$ なので交わりは円です。$H=C-\\frac{1-7}{9}\\vec n=(5/3,-2/3,10/3)$。平面への代入で $5/3-4/3+20/3=7$、また $CH=2$ と確認できます。切り口の半径は $\\sqrt{9-4}=\\sqrt5$。中心Hは球の内部の点であり、球面上の点ではありません。',
      },
      {
        type: 'note',
        variant: 'warn',
        content: '空間で「ある一方向に垂直」だけでは、特定の平面に垂直とはいえません。平面に垂直なベクトルを内積で確認するなら、平面内の一次独立な二方向の両方と内積0であることが必要です。また点と線分の距離では、直線への射影パラメータが線分の範囲外なら近い端点までの距離を採用します。',
      },
      {
        type: 'note',
        variant: 'tip',
        content: '計算後は「点を直線・平面の式に代入」「差ベクトルの内積0」「距離の平方が非負」の三点を確認します。球面との交点問題では、中心からの距離が半径に等しいかも調べましょう。平方で計算し、最後にだけ平方根を取ると分数計算を減らせます。',
      },
      {
        type: 'practice',
        title: '練習：内積を条件へ翻訳する',
        problems: [
          {
            body: '$P(1,2,3)$ から平面 $x+y+z=0$ への垂線の足と距離を求めよ。',
            hint: '法線は $(1,1,1)$。足を $P-\\lambda(1,1,1)$ とおく。',
            answer: '$\\lambda=(1+2+3)/3=2$ なので $H=(-1,0,1)$。距離は $6/\\sqrt3=2\\sqrt3$。Hの座標和は0、$\\overrightarrow{HP}=(2,2,2)$ は法線に平行であり両条件を満たします。',
          },
          {
            body: '$A(0,0,0),B(1,0,0),P(3,4,0)$ とする。Pと直線ABの距離、Pと線分ABの距離をそれぞれ求めよ。',
            hint: '方向ベクトルを $(1,0,0)$ とすれば、線分に対応する範囲は $0\\le t\\le1$。',
            answer: '直線への足は $H(3,0,0)$ で距離4。ただし $t_0=3$ は線分の範囲外。線分上の点 $(t,0,0)$ までの距離の平方は $(3-t)^2+16$ で、範囲内では $t=1$ が最小です。したがって線分までの距離は $PB=\\sqrt{20}=2\\sqrt5$。',
          },
          {
            body: '$A(0,0,0),B(2,4,4)$ を直径の両端とする球面の方程式を求め、平面 $x+2y+2z=18$ との位置関係を判定せよ。',
            hint: '中心は中点、半径はABの半分。中心から平面までの距離と半径を比較する。',
            answer: '中心 $C(1,2,2)$、$AB=6$ より半径3。球面は $(x-1)^2+(y-2)^2+(z-2)^2=9$。平面への距離は $|9-18|/3=3$ なので接します。接点は $C-\\frac{9-18}{9}(1,2,2)=(2,4,4)=B$。Bを平面に代入しても $2+8+8=18$ です。',
          },
        ],
      },
      {
        type: 'quiz',
        title: '条件の使い分けを確認',
        questions: [
          {
            question: '直線 $\\vec x=\\vec a+t\\vec d$ にPから下ろした垂線の足について、正しいパラメータはどれか。',
            choices: ['$t=(\\vec p-\\vec a)\\cdot\\vec d/|\\vec d|$', '$t=(\\vec p-\\vec a)\\cdot\\vec d/|\\vec d|^2$', '$t=|\\vec p-\\vec a|/|\\vec d|$', '$t=\\vec p\\cdot\\vec a$'],
            answerIndex: 1,
            explanation: '$(\\vec p-\\vec a-t\\vec d)\\cdot\\vec d=0$ を解くと分母は $\\vec d\\cdot\\vec d=|\\vec d|^2$。方向ベクトルを単位化していない場合に長さだけで割るのは誤りです。',
          },
          {
            question: '半径5の球の中心から距離3の平面で切ったとき、切り口の円の半径はいくつか。',
            choices: ['2', '3', '4', '5'],
            answerIndex: 2,
            explanation: '中心から平面への足をH、切り口上の点をXとすると、CH=3、CX=5、CHとHXが垂直です。よって $HX=\\sqrt{25-9}=4$。球の半径から距離を単純に引くのではありません。',
          },
        ],
      },
    ],
  },
];
