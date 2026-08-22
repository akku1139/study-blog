import type { Unit } from '../types';

/** 化学 第2項目「無機物質」 */
export const inorganicUnit: Unit = {
  id: 'sch-inorganic',
  name: '無機物質',
  gakushuShidoYoryo:
    '内容「無機物質の性質と利用」典型元素とその化合物、遷移元素とその化合物',
  lessons: [
    {
      id: 'typical-elements',
      title: '典型元素の性質',
      summary: '周期表の族ごとの代表物質と、イオン反応による識別を学ぶ。',
      objectives: [
        '各族元素の性質の類似性・周期性を説明できる',
        '陽イオン・陰イオンの確認反応を使い分けられる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'おもな族の特徴' },
        {
          type: 'table',
          headers: ['族', '代表元素・化合物', '特徴'],
          rows: [
            ['1族（アルカリ金属）', 'Na, K', '軟らかい金属、水と激しく反応して水素を発生'],
            ['2族', 'Ca, Ba', '炎色：Ca 橙／Ba 黄緑。Ba²⁺ + SO₄²⁻ → 白沈'],
            ['13〜14族', 'Al, C, Si', 'Al は両性元素。SiO₂ はガラスの主成分'],
            ['15族', 'N, P, NH₃', '窒素固定。アンモニアは弱塩基'],
            ['16族', 'O, S', 'H₂S は悪臭有毒気体、SO₂ は亜硫酸の酸化物'],
            ['17族（ハロゲン）', 'Cl₂, Br₂, I₂', '酸化力：Cl₂ > Br₂ > I₂ の順に弱くなる'],
            ['18族（希ガス）', 'He, Ne, Ar', '単原子分子、反応しにくい'],
          ],
        },
        { type: 'heading', level: 3, content: '陽イオンの確認反応' },
        {
          type: 'table',
          headers: ['イオン', '試薬', '沈殿の色'],
          rows: [
            ['Cu²⁺', '少量の NH₃ 水', '淡青 → 過剰で深青色溶液'],
            ['Fe³⁺', 'KSCN 水溶液', '血赤色溶液'],
            ['Ag⁺', '塩酸', '白色沈殿（アンモニア水に溶ける）'],
            ['Zn²⁺', '過剰の NaOH / NH₃', '両性：過剰でも溶ける'],
            ['Pb²⁺', 'H₂S / 塩酸', '黒色（PbS）/ 白色（PbCl₂）'],
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: 'ある水溶液に少量のアンモニア水で青白い沈殿、過剰で溶けて深青色になった。含まれるイオンは？',
          answer: '**Cu²⁺**。$\\mathrm{Cu(OH)_2}$ の沈殿が過剰のアンモニアで $[\\mathrm{Cu(NH_3)_4}]^{2+}$ として溶解する。',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '陽イオン分離では「両性（Zn²⁺, Al³⁺）」「アンミン錯体を作る（Cu²⁺, Ag⁺, Zn²⁺）」の2つの性質を軸に系統的に整理するのが定石です。',
        },
        { type: 'heading', level: 3, content: '小ネタ: 元素記号クイズ' },
        {
          type: 'widget',
          widget: {
            id: 'element-quiz',
            caption: '28 元素の記号をランダム出題。周期表の暗記の最初の一歩として',
          },
        },
      ],
    },
    {
      id: 'transition-metals-complex',
      title: '遷移元素と錯体',
      summary: '遷移元素の特徴、配位化合物の構造と色。',
      blocks: [
        {
          type: 'list',
          items: [
            '遷移元素は**複数の酸化数**をもつ（Mn: +2, +4, +7 など）',
            '有色の化合物・イオンが多い（水溶液の色は d 電子による）',
            '触媒として働くことが多い（Fe: ハーバー法、V₂O₅: 接触硫酸法）',
          ],
        },
        { type: 'heading', level: 3, content: '錯イオン' },
        { type: 'formula', tex: '[\\mathrm{Cu(NH_3)_4}]^{2+}, \\quad [\\mathrm{Ag(NH_3)_2}]^{+}, \\quad [\\mathrm{Fe(CN)_6}]^{4-}', display: true },
        {
          type: 'text',
          content:
            '中心金属に**配位子**（NH₃, CN⁻, H₂O など非共有電子対をもつ分子・イオン）が結合したもの。配位数・電荷・幾何構造（八面体・四面体・平面四配位）を読み取れるようにします。',
        },
        {
          type: 'note',
          variant: 'warn',
          content: '錯形成は沈殿の溶解によく使われます。「沈んだら錯体で溶かす」パターン：AgCl → [Ag(NH₃)₂]⁺、Cu(OH)₂ → [Cu(NH₃)₄]²⁺。',
        },
      ],
    },
  ],
};
