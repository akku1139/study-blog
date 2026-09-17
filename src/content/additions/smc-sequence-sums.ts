import type { Lesson } from '../types.ts';

export const lesson: Lesson = {
  id: 'smc-sequence-sums',
  title: '数列の和の工夫：差に直して端の項を残す',
  summary: '階差と部分分数を「差を足す」という一つの見方で結び、開始番号・ずれ幅・端項を追って望遠鏡和を計算する。',
  objectives: [
    '隣り合う差を足すと途中の項が消える理由を説明できる',
    '部分分数分解を通分で確かめ、有限和の計算に使える',
    '和の開始番号とずれ幅に応じて、残る端項を正しく書ける',
    '小さい項数での直接計算と差分によって和の式を検算できる',
  ],
  blocks: [
    { type: 'heading', level: 3, content: '1　合計なのに、途中を計算しなくてよいのはなぜ？' },
    {
      type: 'text',
      content: '歩数計が朝120歩、昼450歩、夕方730歩を示したとします。朝から昼は330歩、昼から夕方は280歩なので、朝から夕方は610歩です。同じ結果は730−120でも求められます。昼の450は一度足され、一度引かれるからです。「変化の合計は最後と最初の差」という仕組みを、数列の和にも使います。',
    },
    { type: 'formula', tex: String.raw`(450-120)+(730-450)=730-120=610`, display: true },
    {
      type: 'text',
      content: String.raw`以下では実数の数列と有限和を扱います。$n,m$ は正の整数で $m\le n$ とし、$\sum_{k=m}^{n}$ は $k=m,m+1,\ldots,n$ を代入した項を足す記号です。項数は $n-m+1$ 個。以後の抽象的な数値には単位はなく、すべて近似でない等式です。`,
    },
    { type: 'heading', level: 3, content: '2　階差を足す向き、和を差に直す向き' },
    {
      type: 'text',
      content: String.raw`数列 $a_k$ の隣り合う差 $a_{k+1}-a_k$ が階差です。差を足すときには、まず3項を書いてみましょう。真ん中の $a_{m+1},a_{m+2}$ は正負の組になりますが、最初の負の項 $-a_m$ と最後の正の項は組を持ちません。`,
    },
    {
      type: 'derivation',
      title: '途中が消える様子を省略せずに見る',
      steps: [
        { tex: String.raw`(a_{m+1}-a_m)+(a_{m+2}-a_{m+1})+(a_{m+3}-a_{m+2})=a_{m+3}-a_m`, note: '同じ番号の項どうしだけが消える。' },
        { tex: String.raw`\sum_{k=m}^{n}(a_{k+1}-a_k)=a_{n+1}-a_m`, note: '最終の k は n。そこで現れる正の項は a_n ではなく a_{n+1}。' },
        { tex: String.raw`\sum_{k=m}^{n}(b_k-b_{k+1})=b_m-b_{n+1}`, note: '引き算の向きを逆にした形も使う。右辺の符号も逆になる。' },
      ],
    },
    {
      type: 'text',
      content: 'このように中間の項が相殺されて短くなる和を、伸縮する望遠鏡になぞらえて「望遠鏡和」と呼びます。既知の階差から数列を復元するだけでなく、足したい式を「何かの差」に作り替えるのがこのレッスンの中心です。',
    },
    {
      type: 'note', variant: 'warn',
      content: String.raw`「全部消える」のではありません。$\sum_{k=1}^{n-1}(a_{k+1}-a_k)=a_n-a_1$ ですが、上限が $n$ なら $a_{n+1}-a_1$ です。上限を見て最後の括弧を実際に書く習慣をつけましょう。空の和を0とする約束を使えば、前者は $n=1$ にも対応します。`,
    },
    { type: 'heading', level: 3, content: '3　例題1：多項式も「前後の差」になる' },
    {
      type: 'text',
      content: String.raw`立方数の差を展開すると二次式になります。次数が一つ下がるので、二次式の和に立方数の差が隠れていないか探せます。まず $(k+1)^3-k^3$ を手元で展開し、次の式と比べてください。`,
    },
    { type: 'formula', tex: String.raw`(k+1)^3-k^3=3k^2+3k+1`, display: true },
    {
      type: 'example', title: '例題1　開始番号が1とは限らない',
      body: String.raw`$S=\sum_{k=2}^{5}(3k^2+3k+1)$ を、平方数の和の公式を使わずに求めよう。`,
      answer: String.raw`各項は $(k+1)^3-k^3$。したがって $S=(3^3-2^3)+(4^3-3^3)+(5^3-4^3)+(6^3-5^3)=6^3-2^3=208$。最初の負の端項は $-1^3$ ではなく $-2^3$。独立に元の式へ代入すると $19+37+61+91=208$ で一致します。`,
    },
    { type: 'heading', level: 3, content: '4　分数の積を、引き算にほどく' },
    {
      type: 'text',
      content: String.raw`分母が $k(k+1)$ だと、そのまま多数の分数を通分するのは大変です。ところが $1/k$ と $1/(k+1)$ を引くと、分子に残るのは $(k+1)-k=1$。この逆向きの見方が部分分数分解です。分数を小さな分数の和や差に分け、隣の項と消せる形にします。`,
    },
    {
      type: 'derivation', title: '差の間隔が係数を決める',
      steps: [
        { tex: String.raw`\frac1k-\frac1{k+1}=\frac{k+1-k}{k(k+1)}=\frac1{k(k+1)}`, note: 'ここでは k は正の整数なので、どちらの分母も0ではない。' },
        { tex: String.raw`\frac1k-\frac1{k+d}=\frac{d}{k(k+d)}`, note: '一般に d が0でなく、k と k+d が0でない範囲で成り立つ。' },
        { tex: String.raw`\frac1{k(k+d)}=\frac1d\left(\frac1k-\frac1{k+d}\right)`, note: '以下の和では d も正の整数とする。前に掛ける 1/d を忘れない。' },
      ],
    },
    {
      type: 'example', title: '例題2　1項ずつずらして、両端を拾う',
      body: String.raw`$T_n=\sum_{k=2}^{n}\frac1{k(k+1)}$ を求めよう。ただし $n\ge2$ とする。`,
      answer: String.raw`分解すると $T_n=\sum_{k=2}^{n}(\frac1k-\frac1{k+1})=\frac12-\frac1{n+1}=\frac{n-1}{2(n+1)}$。正の分数の分母は2からn、負の分数の分母は3からn+1。共通の3からnが消え、正の1/2と負の1/(n+1)が残ります。最小の $n=2$ では共通部分は空で、$T_2=1/6=1/2-1/3$。$n=4$ なら直接計算で $1/6+1/12+1/20=3/10$、式でも $1/2-1/5=3/10$ です。`,
    },
    { type: 'heading', level: 3, content: '5　2つ先と消えるなら、端にも2項残る' },
    {
      type: 'text',
      content: String.raw`$1/k-1/(k+2)$ では隣の括弧とはすぐ消えません。正の分母の列と負の分母の列を上下に並べると、2つずれているとわかります。小さい側で二つ、大きい側で二つが共通部分からはみ出すのです。`,
    },
    {
      type: 'table', headers: ['和の部分', '分母の範囲（k=1からn、n≥2）', '相殺後に残るもの'],
      rows: [
        ['正の部分', '1, 2, …, n', '1 と 1/2'],
        ['負の部分', '3, 4, …, n+2', '−1/(n+1) と −1/(n+2)'],
        ['共通部分', '3からn（n=2なら空）', '正負で相殺される'],
      ],
    },
    {
      type: 'example', title: '例題3　ずれ幅2の望遠鏡和',
      body: String.raw`$U_n=\sum_{k=1}^{n}\frac1{k(k+2)}$ を求め、$n=3$ で確かめよう。$n$ は正の整数とする。`,
      answer: String.raw`分解には係数1/2が必要です。$n\ge2$ では $U_n=\frac12\sum_{k=1}^{n}(\frac1k-\frac1{k+2})=\frac12(1+\frac12-\frac1{n+1}-\frac1{n+2})$。$n=3$ の括弧は $(1-\frac13)+(\frac12-\frac14)+(\frac13-\frac15)$ で、消えるのは $-1/3$ と $+1/3$。結果は $\frac12(\frac32-\frac14-\frac15)=\frac{21}{40}$。元の和も $1/3+1/8+1/15=21/40$ です。$n=1$ は別に確認すると、公式の括弧の $+1/2$ と $-1/2$ が消えて $\frac12(1-1/3)=1/3$ となり、同じ式が使えます。`,
    },
    {
      type: 'note', variant: 'warn',
      content: String.raw`例題3を $\frac12(1-\frac1{n+2})$ とすると、$+1/2$ と $-1/(n+1)$ を落としています。分解の係数と、相殺されない端項の数は別々に確認します。また分解は分母が0の項を救済しません。たとえば $1/\{k(k-1)\}$ の和に $k=1$ を含めることはできません。`,
    },
    { type: 'heading', level: 3, content: '6　答えを疑うための二つの検算' },
    {
      type: 'text',
      content: String.raw`長い式をもう一度同じ方法で計算するより、別の角度で調べましょう。初めの和 $S_m$ が元の1項と合うか、次に増えた量 $S_n-S_{n-1}$ が元の第n項と合うかを確認します。この二つが全範囲で成り立てば、1項ずつ積み上げた和と一致します。`,
    },
    {
      type: 'derivation', title: '例題3の答えを差分で検証',
      steps: [
        { tex: String.raw`U_1=\frac12\left(1+\frac12-\frac12-\frac13\right)=\frac13`, note: '初めの和は元の第1項に一致。' },
        { tex: String.raw`U_n-U_{n-1}=\frac12\left(\frac1n-\frac1{n+2}\right)=\frac1{n(n+2)}\quad(n\ge2)`, note: '共通の定数と 1/(n+1) が消え、増えた分が元の第n項になる。' },
      ],
    },
    {
      type: 'note', variant: 'tip',
      content: '作業の順番は「通分して分解を確認→最初と最後の括弧を書く→正負で共通する番号を探す→端項を残す→小さい項数と差分で検算」。ここで扱ったのは有限和です。項数を無限に増やす話には、別に極限の検討が必要です。',
    },
    { type: 'heading', level: 3, content: '練習：まず端項だけを予想しよう' },
    {
      type: 'practice', problems: [
        {
          body: String.raw`$\sum_{k=3}^{7}\{(k+1)^2-k^2\}$ を求めよう。`,
          hint: '最初の括弧と最後の括弧を書く。',
          answer: String.raw`$8^2-3^2=55$。最初は $4^2-3^2$、最後は $8^2-7^2$ なのでこの二つの端が残ります。展開した各項を足しても $7+9+11+13+15=55$ です。`,
        },
        {
          body: String.raw`$\sum_{k=3}^{n}\frac{2}{k(k+1)}$ を求めよう。$n\ge3$ とする。`,
          answer: String.raw`$2\sum_{k=3}^{n}(\frac1k-\frac1{k+1})=2(\frac13-\frac1{n+1})=\frac{2(n-2)}{3(n+1)}$。始点が3なので正の端項は $2/3$。$n=3$ で元の1項と同じ $1/6$ になります。`,
        },
        {
          body: String.raw`$\sum_{k=2}^{4}\frac1{k(k+2)}$ を求めよう。`,
          answer: String.raw`$\frac12\{(\frac12-\frac14)+(\frac13-\frac15)+(\frac14-\frac16)\}=\frac12(\frac12+\frac13-\frac15-\frac16)=\frac7{30}$。正負の $1/4$ だけが相殺されます。直接計算も $1/8+1/15+1/24=7/30$ です。`,
        },
        {
          body: String.raw`$a_1=2$、$a_{k+1}-a_k=1/\{k(k+1)\}$（$k\ge1$）のとき、$a_n$ を求めよう。`,
          answer: String.raw`$n\ge2$ で $a_n=2+\sum_{k=1}^{n-1}(\frac1k-\frac1{k+1})=3-\frac1n$。第n項に到着するには階差をn−1個足します。$n=1$ でも $3-1=2$ で初項と一致するので、すべての正の整数nで使えます。`,
        },
      ],
    },
    {
      type: 'quiz', title: '確認クイズ：何が残る？', questions: [
        {
          question: String.raw`$\sum_{k=4}^{n}(b_k-b_{k+1})$（$n\ge4$）の値は？`,
          choices: [String.raw`$b_4-b_n$`, String.raw`$b_4-b_{n+1}$`, String.raw`$b_1-b_{n+1}$`, '0'],
          answerIndex: 1,
          explanation: '最初の正の項は b₄、最後の負の項は −bₙ₊₁。n=4の1項だけでも区別できます。',
        },
        {
          question: String.raw`正の整数kについて、$1/\{k(k+3)\}$ の正しい分解は？`,
          choices: [String.raw`$\frac1k-\frac1{k+3}$`, String.raw`$3(\frac1k-\frac1{k+3})$`, String.raw`$\frac13(\frac1k-\frac1{k+3})$`, String.raw`$\frac13(\frac1{k+3}-\frac1k)$`],
          answerIndex: 2,
          explanation: String.raw`差を通分すると分子は3。元の分子1に戻すため、1/3を掛けます。`,
        },
        {
          question: String.raw`$\sum_{k=1}^{n}(\frac1k-\frac1{k+2})$（$n\ge2$）で相殺後に残るものは？`,
          choices: [String.raw`$1-\frac1{n+2}$`, String.raw`$1+\frac12-\frac1{n+1}-\frac1{n+2}$`, String.raw`$1+\frac12-\frac1n-\frac1{n+1}$`, String.raw`$\frac12(1-\frac1{n+2})$`],
          answerIndex: 1,
          explanation: '正の分母の範囲は1〜n、負は3〜n+2。両端に二つずつ残ります。問題の式はすでに差なので、係数1/2を追加してはいけません。',
        },
        {
          question: 'ある有限和の候補式を、最初の項から順に正しいと確認する方法は？',
          choices: ['最初の値だけを調べる', 'nが大きい1点だけを調べる', '答えが正であることだけを調べる', '最初の値と、隣り合う和の差が元の項になることを調べる'],
          answerIndex: 3,
          explanation: '初めの値が一致し、すべての次の段階で同じ項を加えて進むなら、以後も一致します。いくつかの数値の一致だけでは一般のnでの根拠にはなりません。',
        },
      ],
    },
  ],
};
