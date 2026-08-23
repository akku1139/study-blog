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
            { type: 'heading', level: 3, content: '練習問題' },
            {
              type: 'practice',
              problems: [
                {
                  body: '二酸化炭素 CO₂（分子量 44）88 g は何 mol か。',
                  answer: '$n = 88 \\div 44 = $ **2 mol**',
                },
                {
                  body: '水素原子 H の原子量を 1 とするとき、水素分子 H₂ 0.5 mol の質量は何 g か。',
                  hint: 'H₂ の分子量は 2。',
                  answer: '$m = nM = 0.5 \\times 2 = $ **1.0 g**',
                },
                {
                  body: 'メタン CH₄（分子量 16）16 g を完全燃焼させるとき（$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$）、必要な酸素は何 mol か。また発生する二酸化炭素の質量は何 g か。',
                  hint: '係数比＝モル比。CH₄ : O₂ : CO₂ = 1 : 2 : 1。',
                  answer: 'CH₄ は $16/16 = 1$ mol なので酸素は **2 mol**、CO₂ も 1 mol → 質量 $1 \\times 44 = $ **44 g**',
                },
              ],
            },
          ],
        },
        {
          id: 'atmosphere-ocean',
          title: '大気と海——地球の熱のエンジン',
          summary: '温室効果、大循環、海洋の役割から気候システムを理解する。',
          objectives: [
            '温室効果ガスの働きを説明できる',
            '大気と海洋が熱を運ぶ仕組み（大循環）を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '温室効果' },
            {
              type: 'text',
              content: '太陽からの短波長の光は地表を暖め、地表から出る長波長の放射は二酸化炭素や水蒸気に吸収されて再び地表へ戻ります。この**温室効果**がなければ地球の平均気温は約 −18 ℃ となり、生命は液体の水の中で進化できませんでした。',
            },
            {
              type: 'list',
              items: [
                '**主な温室効果ガス**: 水蒸気・CO₂・メタン',
                '産業革命以降、CO₂ 濃度は 280 ppm → 420 ppm 以上へ（化石燃料の燃焼・森林減少）',
                '温暖化は**平均気温だけでなく極端現象（猛暑・豪雨）の頻度**を変える',
              ],
            },
            { type: 'heading', level: 3, content: '大気と海洋の大循環' },
            {
              type: 'list',
              items: [
                '低緯度で受ける太陽エネルギー > 高緯度 → 熱は**大気と海流によって極へ運ばれる**',
                '**ハドレー循環**: 赤道で上昇・緯度30°で下降する大気の大きな渦。砂漠はここにできる',
                '**海洋深層循環**: 北大西洋で沈む冷水が千年スケールで世界の海を巡り、熱と CO₂ を運ぶ',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '砂漠が緯度 15〜35° に多い理由を、大気の循環と結びつけて説明せよ。',
              answer: 'ハドレー循環の**下降流域**では空気が乾燥し雲ができないため雨が少ない。緯度 20〜30° に亘って広がる砂漠帯の成因。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '温室効果ガスが増えると、地表の平均気温はどうなるか。その理由も述べよ。',
                  answer: '**上昇する**。地表面から出る赤外線を吸収して再び下向きに放出する量が増え、地表付近の熱収支が正になるため。',
                },
                {
                  body: '海洋深層循環が止まると、ヨーロッパ西部の気温はどうなると考えられるか。',
                  hint: '北大西洋海流が運んでいるものは何か。',
                  answer: '**低下すると考えられる**。暖流が高緯度へ運んでいる熱が途絶えるため（同緯度の他地域より暖かい欧州の成因）。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（大気と海）',
              questions: [
                {
                  question: '地球の平均気温を約15℃に保っているしくみはどれか。',
                  choices: ['温室効果', 'オゾン層による紫外線吸収', '海水の蒸発'],
                  answerIndex: 0,
                  explanation: '温室効果がないと −18℃ になる計算です。オゾン層は紫外線防御の役割で、気温とは別の話。',
                },
                {
                  question: '赤道上空で上昇した空気はどこで下降するか（ハドレー循環）。',
                  choices: ['緯度 30° 付近', '緯度 60° 付近', '極上空'],
                  answerIndex: 0,
                  explanation: '緯度30°付近で下降し、その乾燥した空気が砂漠帯をつくります。',
                },
              ],
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
