import type { Unit } from '../types';

/** 化学 第3項目「有機化合物」 */
export const organicUnit: Unit = {
  id: 'sch-organic',
  name: '有機化合物',
  gakushuShidoYoryo:
    '内容「有機化合物の性質と利用」炭化水素、官能基をもつ化合物、芳香族化合物',
  lessons: [
    {
      id: 'hydrocarbons-alcohols',
      title: '炭化水素と含酸素化合物',
      summary: 'アルカン・アルケンからアルコール・カルボン酸まで、命名と反応を学ぶ。',
      objectives: [
        'IUPAC名（慣用名）で物質を特定できる',
        '官能基の反応性を説明し、合成経路を組み立てられる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '飽和・不飽和炭化水素' },
        {
          type: 'table',
          headers: ['系列', '一般式', '反応の特徴'],
          rows: [
            ['アルカン CₙH₂ₙ₊₂', '$\\mathrm{C_nH_{2n+2}}$', '置換反応（光・塩素）'],
            ['アルケン CₙH₂ₙ', '$\\mathrm{C_nH_{2n}}$', '付加反応。臭素水を脱色'],
            ['アルキン CₙH₂ₙ₋₂', '$\\mathrm{C_nH_{2n-2}}$', '三重結合、末端は銀アセチレド沈殿'],
            ['シクロアルカン', '$\\mathrm{C_nH_{2n}}$', '環状。アルケンと同一般式だが付加しない'],
          ],
        },
        { type: 'heading', level: 3, content: '官能基ごとの変換マップ' },
        {
          type: 'list',
          items: [
            '**アルカン → ハロゲン化アルキル**: Cl₂ + 光で置換',
            '**ハロゲン化アルキル → アルコール**: NaOH 水溶液と加熱（加水分解）',
            '**アルコール → アルデヒド/ケトン**: 酸化（CuO）。さらに酸化するとカルボン酸',
            '**アルコール → オレフィン**: 濃硫酸と加熱で脱水',
            '**カルボン酸 + アルコール → エステル**: 濃硫酸触媒でエステル化',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: 'エタノールから酢酸エチルを作る経路を示せ。',
          answer:
            '**①** $\\mathrm{CH_3CH_2OH \\xrightarrow{CuO,\\Delta} CH_3CHO \\xrightarrow{[O]} CH_3COOH}$（酸酢で酸化）　**②** $\\mathrm{CH_3COOH + C_2H_5OH \\xrightarrow{濃H_2SO_4} CH_3COOC_2H_5}$（エステル化）',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '有機化学の問題は「官能基＝反応の場所」という視点で整理すると一気に楽になります。まず変換マップを暗記し、あとは出発物質と目的物質をつなぐ最短ルートを探しましょう。',
        },
        { type: 'heading', level: 3, content: '小ネタ: 炭化水素の命名ドリル' },
        {
          type: 'widget',
          widget: {
            id: 'math-drill',
            caption: '無限ドリル: 直鎖アルカン・アルケン・アルキンの命名と分子式がランダムに出題されます',
            props: { topic: 'hydrocarbon' },
          },
        },
        { type: 'heading', level: 3, content: '小ネタ: 架空炭化水素シミュレーター' },
        {
          type: 'widget',
          widget: {
            id: 'hydrocarbon-lab',
            caption: '炭素数と結合を選ぶと構造式・分子式・名称を即時計算。ルールから外れると「架空」判定——炭素の4本手ルールを体感しよう',
          },
        },
      ],
    },
    {
      id: 'aromatic-polymers',
      title: '芳香族化合物と高分子',
      summary: 'ベンゼンの性質、置換基の配向性、付加重合・縮合重合。',
      blocks: [
        { type: 'heading', level: 3, content: 'ベンゼンの特徴' },
        {
          type: 'list',
          items: [
            '**安定な六員環**（共鳴による）。付加よりも置換が起きやすい',
            '**ニトロ化**（HNO₃ + H₂SO₄）→ ニトロベンゼン → 還元 → アニリン',
            '**スルホン化**（発煙硫酸）→ ベンゼンスルホン酸',
          ],
        },
        { type: 'heading', level: 3, content: '高分子' },
        {
          type: 'table',
          headers: ['種類', '例', 'モノマー'],
          rows: [
            ['付加重合', 'ポリエチレン / ポリ塩化ビニル', 'エチレン / 塩化ビニル'],
            ['縮合重合', 'ナイロン6,6', 'アジピン酸 + ヘキサメチレンジアミン'],
            ['縮合重合', 'PET（ポリエステル）', 'テレフタル酸 + エチレングリコール'],
            ['天然高分子', 'でんぷん・セルロース', 'グルコース（加水分解）'],
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: 'ナイロン6,6が縮合重合であることを、生成する副産物から説明せよ。',
          answer: 'ジカルボン酸とジアミンの間で **H₂O が1分子ずつ離れて** アミド結合（−CONH−）ができるため縮合重合。付加重合（二重結合が開いてつながる）との違いがポイント。',
        },
        {
          type: 'note',
          variant: 'warn',
          content: '「還元」などの漢字ミスに注意：ニトロベンゼンのアミノ基への変換は**還元**（Sn+HCl や Fe+HCl）です。酸性条件での還元後は塩（アニリン塩酸塩）になっている点もよく問われます。',
        },
      ],
    },
  ],
};
