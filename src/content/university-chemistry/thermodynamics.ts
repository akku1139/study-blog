import type { Unit } from '../types';

/** 大学化学：熱力学 */
export const thermodynamicsUnit: Unit = {
  id: 'uch-thermo',
  name: '化学熱力学',
  gakushuShidoYoryo: '熱力学第一法則・第二法則、エントロピー、ギブズエネルギーと自発変化',
  lessons: [
    {
      id: 'entropy-gibbs',
      title: 'エントロピーとギブズエネルギー',
      summary: '「なぜ反応は進むのか」をエネルギーと乱雑さで説明する。',
      objectives: [
        '第一法則・第二法則を区別して説明できる',
        'ΔG の符号から自発性を判定できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '二つの法則' },
        {
          type: 'list',
          items: [
            '**第一法則（エネルギー保存）**: ΔU = q + w。宇宙のエネルギー総量は不変',
            '**第二法則**: 孤立系のエントロピーは決して減らない。エネルギーの「質」は劣化する',
          ],
        },
        {
          type: 'text',
          content:
            '高校までの化学は「発熱なら進む」印象を与えがちですが、実は氷の融解のような**吸熱でも自然に起こる**変化があります。鍵は**エントロピー S**——乱雑さ・分散度です。',
        },
        { type: 'formula', tex: '\\Delta G = \\Delta H - T\\Delta S', display: true },
        {
          type: 'table',
          headers: ['ΔH', 'ΔS', 'ΔG = ΔH − TΔS', '自発性'],
          rows: [
            ['−（発熱）', '+（増加）', '常に −', '全温度で自発'],
            ['−', '−', '低温で −', '低温でのみ自発'],
            ['+（吸熱）', '+', '高温で −', '高温でのみ自発'],
            ['+', '−', '常に +', '非自発'],
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '水の蒸発は ΔH > 0, ΔS > 0。なぜ常温でも湿った布が乾くのか。',
          answer: '蒸発した水蒸気は大気中に広がるため系外も含めた**全体のエントロピーは大きく増加**する。TΔS 項が ΔH を上回れば ΔG < 0 となり自発。温度が高いほど有利——濡れ物は晴れた日に乾く、という日常経験と一致します。',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '標準生成ギブズエネルギーの表を使えば任意の反応の ΔG° を計算できます。平衡定数との関係 K = e^(−ΔG°/RT) は熱力学と平衡をつなぐ最重要公式。',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: '氷の融解（$\\text{H}_2\\text{O}(s) \\rightarrow \\text{H}_2\\text{O}(l)$）は ΔH > 0（吸熱）。それでも 0℃ 以上で進む理由を ΔG の式で説明せよ。',
              hint: '液体の方が分子の配置の自由度が大きい。',
              answer: '融解では ΔS > 0（固体より液体の方が乱雑）。$\\Delta G = \\Delta H - T\\Delta S$ で温度が十分高いと $T\\Delta S$ が $\\Delta H$ を上回り $\\Delta G < 0$ になるため。',
            },
            {
              body: 'ある反応で ΔH = −100 kJ/mol, ΔS = −200 J/(mol·K) とする。この反応が自発になる温度の条件を求めよ。',
              hint: '単位を揃えて（−200 J = −0.2 kJ）$\\Delta G < 0 \\iff T < \\Delta H / \\Delta S$。',
              answer: '$-100 + 0.2T < 0 \\iff T < $ **500 K**（低温でのみ自発。ΔH < 0, ΔS < 0 の典型パターン）',
            },
          ],
        },
      ],
    },
  ],
};
