import type { Subject } from './types';

// ============================================================
// 高校理科基礎（学習指導要領 第2章 第6節: 科学と人間生活／物理基礎／化学基礎／生物基礎／地学基礎）
// 物理基礎は seniorPhysics で扱うため、ここでは化学・生物・地学を扱う。
// ============================================================

export const seniorScience: Subject = {
  id: 'senior-science',
  stage: 'senior',
  name: '高校理科（化学・生物・地学基礎）',
  description: '化学基礎・生物基礎・地学基礎の要点。物質の量、細胞と遺伝、地球の歴史。',
  icon: '🧪',
  color: '#16a34a',
  units: [
    {
      id: 'ss-chem',
      name: '化学基礎',
      gakushuShidoYoryo: '内容「物質の構成」物質の量（モル）、原子の構成',
      lessons: [
        {
          id: 'mole',
          title: '物質の量（モル）',
          summary: 'モルという「数の単位」を使って化学変化を量的に扱う。',
          objectives: ['モルの概念を使い質量と粒子数を換算できる', '化学量論係数から反応の量的関係を計算できる'],
          blocks: [
            { type: 'heading', level: 3, content: 'モルとは' },
            { type: 'formula', tex: '\\text{物質の量 } n \\,[\\mathrm{mol}] = \\frac{\\text{質量 } m \\,[\\mathrm{g}]}{\\text{モル質量 } M \\,[\\mathrm{g/mol}]}', display: true },
            {
              type: 'text',
              content: '1 mol は **6.02 × 10²³ 個**（アボガドロ定数）の粒子の集まり。モル質量 [g/mol] は原子量や分子量と同じ数値になります。',
            },
            {
              type: 'example',
              title: '例題',
              body: '水 H₂O（分子量 18）36 g は何 mol ですか。また分子は何個ですか。',
              answer: '$n = 36 \\div 18 = 2$ mol。分子数は $2 \\times 6.02 \\times 10^{23} = 1.2 \\times 10^{24}$ 個。',
            },
            { type: 'heading', level: 3, content: '化学変化の量的計算' },
            {
              type: 'text',
              content: '係数の比＝モル数の比。たとえば $2H_2 + O_2 \\rightarrow 2H_2O$ では、H₂ : O₂ : H₂O = 2 : 1 : 2 [mol] で反応します。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '気体の体積を扱うときは、**標準状態（0℃, 1気圧）で 1 mol = 22.4 L** という関係も使えます。条件（温度・圧力）の確認を忘れずに。',
            },
          ],
        },
      ],
    },
    {
      id: 'ss-bio',
      name: '生物基礎',
      gakushuShidoYoryo: '内容「生物の特徴を共有する性質」細胞と物質代謝、遺伝情報とその発現',
      lessons: [
        {
          id: 'cell-dna',
          title: '細胞とDNA（遺伝情報）',
          summary: '細胞分裂、DNAの構造とタンパク質合成、減数分裂と遺伝の基本。',
          blocks: [
            { type: 'heading', level: 3, content: '細胞と細胞分裂' },
            {
              type: 'list',
              items: [
                '**体細胞分裂**: 染色体を複製して2個の同じ細胞に分裂（成長・修復）',
                '**減数分裂**: 染色体が半分になり生殖細胞（配偶子）ができる',
                'ヒトの体細胞は 2n = 46 本（23対）、生殖細胞は n = 23 本',
              ],
            },
            { type: 'heading', level: 3, content: 'DNAからタンパク質へ' },
            { type: 'formula', tex: '\\text{DNA} \\xrightarrow{\\text{転写}} \\text{mRNA} \\xrightarrow{\\text{翻訳}} \\text{タンパク質}', display: true },
            {
              type: 'text',
              content: 'DNAの塩基配列（A, T, G, C）が遺伝情報。3塩基で1つのアミノ酸を指定する**三重項コード**にしたがって、mRNAがリボソームで翻訳されタンパク質ができます。',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '塩基の対応は **A–T（DNA内）、A–U（RNA内）、G–C**。相補鎖の問題はこのペアリングを機械的に当てはめれば解けます。',
            },
            {
              type: 'example',
              title: '例題',
              body: 'DNAの一部が「ATG CCT」のとき、転写される mRNA の配列を答えよ。',
              answer: 'A→U, T→A, G→C, C→G より **「UAC GGA」**',
            },
          ],
        },
      ],
    },
    {
      id: 'ss-earth',
      name: '地学基礎',
      gakushuShidoYoryo: '内容「地球の姿」地球の歴史、大気と海洋、プレートテクトニクス',
      lessons: [
        {
          id: 'earth-history',
          title: '地球の歴史とプレート運動',
          summary: '地質年代の区分と、プレートテクトニクスによる大地の変動を学ぶ。',
          blocks: [
            { type: 'heading', level: 3, content: '地質年代' },
            {
              type: 'table',
              headers: ['年代', '始まり', '生物の指標'],
              rows: [
                ['先カンブリア時代', '約46億年前', '生命の誕生、シアノバクテリア'],
                ['古生代', '約5.4億年前', 'カンブリア大爆発、三葉虫'],
                ['中生代', '約2.5億年前', '恐竜、アンモナイト'],
                ['新生代', '約6600万年前', '哺乳類の繁栄、人類の出現'],
              ],
            },
            { type: 'heading', level: 3, content: 'プレートテクトニクス' },
            {
              type: 'text',
              content: '地球表面は十数枚のプレートに分かれ、年間数 cm ずつ移動しています。**海洋プレートは大陸プレートの下に沈み込む**（沈み込み帯＝海溝）ため、海洋プレートの地層は古くても約2億年程度しか残っていません。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '「地球最古の岩石は約40億年前、最古の海洋地殻は約2億年前」——この差は沈み込みで海洋地殻が絶えず更新されるためです。試験でよく問われる対比です。',
            },
          ],
        },
      ],
    },
  ],
};
