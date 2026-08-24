import type { Unit } from '../types';

/** 化学 第1項目「物質の状態と反応」 */
export const statesUnit: Unit = {
  id: 'sch-states',
  name: '物質の状態と反応',
  gakushuShidoYoryo:
    '内容「物質の量」発展、「物質の状態と平衡」気体の状態変化・溶液・化学反応と熱・化学平衡・酸塩基・酸化還元',
  lessons: [
    {
      id: 'gas-solutions',
      title: '気体の性質と溶液',
      summary: '理想気体の状態方程式、蒸気圧・沸点上昇・浸透圧など希薄溶液の性質。',
      objectives: [
        '気体の状態方程式を各場面で使い分けられる',
        '凝固点降下・沸点上昇・浸透圧の計算ができる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '理想気体の状態方程式' },
        { type: 'formula', tex: 'pV = nRT, \\qquad \\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}', display: true },
        {
          type: 'derivation',
          title: '理想気体の状態方程式 pV = nRT の組み立て方',
          steps: [
            {
              label: 'Step 1: ボイルの法則（温度一定）',
              tex: 'pV = \text{一定}',
              note: '圧力を2倍にすると体積は半分。分子が同じ頻度でより狭い壁にぶつかるため。',
            },
            {
              label: 'Step 2: シャルルの法則（圧力一定）',
              tex: '\frac{V}{T} = \text{一定}',
              note: '温度上昇 → 分子の運動が激しくなり、同じ圧力を保つには体積が膨らむ必要がある。',
            },
            {
              label: 'Step 3: 両者を1本に統合',
              tex: '\frac{pV}{T} = \text{一定}',
              note: '「pV は T に比例」という形で2つの法則を同時に満たす式。比例定数が残る。',
            },
            {
              label: 'Step 4: 物質量 n まで拡張',
              tex: 'pV = nRT',
              note: '比例定数は気体 1 mol あたりの値 R（=8.31 J/(mol·K)）に n を掛けたもの。アボガドロの法則「同温同圧では同数の分子が同体積」から R がすべての気体で共通だとわかる。',
            },
          ],
        },
        {
          type: 'text',
          content:
            '**モル分率**を使うと混合気体の分圧は $p_i = x_i P$（ドルトンの分圧の法則）。気体反応の計算はすべて「mol に直す」のが基本戦略です。',
        },
        { type: 'heading', level: 3, content: '希薄溶液の性質（依数性）' },
        {
          type: 'table',
          headers: ['性質', '式', 'キーワード'],
          rows: [
            ['蒸気圧降下', '$\\Delta p = p_A x_B$', 'ラウールの法則'],
            ['沸点上昇・凝固点降下', '$\\Delta T = k m$（m は質量モル濃度）', '分子量測定に利用'],
            ['浸透圧', '$\\pi = cRT$', '半透膜、植物の細胞'],
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '水 100 g に非電解質 18.0 g を溶かしたら凝固点が 1.86 ℃ 下がった。溶質の分子量を求めよ（k = 1.86 K·kg/mol）。',
          answer: '$\\Delta T = km$ より $m = 1.00$ mol/kg。水 0.100 kg 中に 18.0/0.100 = 180 g/kg 溶けているので $M = 180 / 1.00 =$ **180**',
        },
        {
          type: 'note',
          variant: 'warn',
          content: '電解質（NaCl など）は水中でイオンに解離するため、粒子数が増えて効果が倍増します。係数 i（解離度を含む）を忘れずに。',
        },
      ],
    },
    {
      id: 'equilibrium-acid-base',
      title: '化学平衡・酸塩基',
      summary: '平衡定数とルシャトリエの原理、pH・中和滴定を学ぶ。',
      objectives: [
        '平衡移動の方向を予測できる',
        'pH・中和計算ができる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '化学平衡' },
        { type: 'formula', tex: 'aA + bB \\rightleftarrows cC + dD, \\qquad K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}', display: true },
        {
          type: 'list',
          items: [
            '**ルシャトリエの原理**: 平衡系に外からの変化を加えると、その変化を打ち消す向きへ平衡がずれる',
            '温度を上げると**吸熱方向**へ（K 自体が変わる）／濃度・圧力の変化では K は不変',
            'ヘンリーの法則：気体の溶解度は圧力に比例',
          ],
        },
        { type: 'heading', level: 3, content: '酸と塩基' },
        { type: 'formula', tex: '\\mathrm{pH} = -\\log[H^+], \\qquad [H^+][OH^-] = K_w = 10^{-14}', display: true },
        {
          type: 'derivation',
          title: 'pH はなぜ「−log」なのか',
          steps: [
            {
              label: 'Step 1: 水素イオン濃度の範囲は広い',
              tex: '[H^+] = 1 \\sim 10^{-14} \\text{ mol/L}',
              note: '酸性〜アルカリ性まで、濃度は14桁にも及ぶ。このままでは比較しにくい。',
            },
            {
              label: 'Step 2: 桁を「数」にするために対数をとる',
              tex: '\\log[H^+] \\in [-14, 0]',
              note: 'log をとると桁数そのものが値になる。10^{-7} → −7 のように扱いやすい小さな数になる。',
            },
            {
              label: 'Step 3: 符号を反転して正の数に',
              tex: '\\mathrm{pH} = -\\log[H^+]',
              note: '「−」を付けたのは単に見やすさのため。酸性ほど [H⁺] が大きく pH が小さくなる——直感的に「強い酸＝小さい数字」として覚えられる。',
            },
            {
              label: 'Step 4: pH が1違うと濃度は10倍',
              tex: '\\mathrm{pH} = 3 \\text{ と } 5 \\Rightarrow \\frac{[H^+]_{pH3}}{[H^+]_{pH5}} = \\frac{10^{-3}}{10^{-5}} = 100',
              note: '対数スケールなので、pH 差2は実質100倍の差。試験での換算ミスが起きやすい点です。',
            },
          ],
        },
        {
          type: 'text',
          content:
            '中和点では **酸の mol ＝ 塩基の mol**（価数に注意：H₂SO₄ は2価）。滴定曲線で当量点付近で pH が急変する様子が指示薬選択の根拠です。',
        },
        {
          type: 'example',
          title: '例題',
          body: '0.10 mol/L の塩酸 20 mL を中和するには、0.05 mol/L の水酸化ナトリウム水溶液何 mL を要するか。',
          answer: '$0.10 \\times 20 = 0.05 \\times V$ より **40 mL**',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '弱酸・弱塩基の pH 計算では電離度 α と共通イオンの影響（緩衝液）まで出題範囲。まず強酸強塩基の計算を確実に。',
        },
        { type: 'heading', level: 3, content: '小ネタ: pH スケールを体感する' },
        {
          type: 'widget',
          widget: {
            id: 'ph-scale',
            caption: 'pH は対数スケール——1 違えば水素イオン濃度が 10 倍。身近な液体の pH もあわせて確認',
          },
        },
      ],
    },
    {
      id: 'redox-thermo-electrochem',
      title: '熱化学・酸化還元と電池',
      summary: '反応熱とヘスの法則、酸化数、標準電極電位と電気分解。',
      blocks: [
        { type: 'heading', level: 3, content: '反応熱' },
        { type: 'formula', tex: '\\Delta H < 0 \\text{ 発熱}, \\quad \\Delta H > 0 \\text{ 吸熱}, \\qquad Q = mc\\Delta t', display: true },
        {
          type: 'text',
          content:
            '**ヘスの法則**: 反応熱は経路によらない。生成熱・燃焼熱を組み合わせて未知の反応熱を組み立てます。',
        },
        { type: 'heading', level: 3, content: '酸化還元' },
        {
          type: 'table',
          headers: ['', '意味'],
          rows: [
            ['酸化', '電子を失う（酸化数が上がる）'],
            ['還元', '電子を受け取る（酸化数が下がる）'],
            ['酸化剤', '他を酸化する＝自分は還元される'],
          ],
        },
        {
          type: 'text',
          content:
            '半反応式を書き、**電子の収支を合わせて**から足し合わせるのがイオン反応式のコツ。たとえば過マンガン酸カリウムの酸性下での還元は MnO₄⁻ → Mn²⁺（5電子受容）。',
        },
        { type: 'heading', level: 3, content: '電池と電気分解' },
        { type: 'formula', tex: 'E = E_{正極} - E_{負極}, \\qquad W = \\frac{It}{F} \\times \\frac{1}{n} \\; \\text{mol}', display: true },
        {
          type: 'list',
          items: [
            'ダニエル電池：Zn | Zn²⁺ ‖ Cu²⁺ | Cu、起電力約 1.1 V',
            '標準電極電位が**大きいほど酸化されにくい**（イオンになりにくい）金属',
            '電気分解：ファラデーの電気分解の法則。析出量は電気量（クーロン）に比例',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '硫酸銅(II)水溶液に 0.50 A の電流を 193 秒通じたとき析出する銅の質量を求めよ（Cu = 63.5，F = 96500 C/mol）。',
          answer: '電気量 $Q = 96.5$ C ＝ 0.001 F。Cu²⁺ + 2e⁻ → Cu なので Cu は 0.0005 mol、質量 $= 0.0318$ g ≒ **31.8 mg**',
        },
      ],
    },
  ],
};
