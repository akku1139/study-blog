import type { Unit } from '../types';

/** 数学A 第1項目「場合の数と確率」 */
export const countingUnit: Unit = {
  id: 'sa-counting',
  name: '数学A：場合の数と確率',
  gakushuShidoYoryo: '内容「場合の数と確率」順列・組合せ、確率の計算、条件付き確率',
  lessons: [
    {
      id: 'permutations-combinations',
      title: '順列・組合せ',
      summary: '和の法則・積の法則から、円順列・重複組合せまで数え上げる技術。',
      objectives: [
        '順列・組合せを使い分けて場合の数を求められる',
        '同じものを含む順列・重複組合せを扱える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '基本原則' },
        {
          type: 'list',
          items: [
            '**和の法則**: 場合が排他的なら「たす」',
            '**積の法則**: 段階的に選ぶなら「かける」',
            '**余事象**: 「少なくとも1つ」は全体 − 0個の場合で計算するのが速い',
          ],
        },
        { type: 'formula', tex: '{}_n\\mathrm{P}_r = \\frac{n!}{(n-r)!}, \\qquad {}_n\\mathrm{C}_r = \\frac{n!}{r!(n-r)!}, \\qquad {}_n\\mathrm{H}_r = {}_{n+r-1}\\mathrm{C}_r', display: true },
        {
          type: 'table',
          headers: ['パターン', '式'],
          rows: [
            ['円順列', '$(n-1)!$'],
            ['珠順列（裏返し区別なし）', '$n!/2$'],
            ['同じものを含む順列', '$\\dfrac{n!}{p!\\,q!}$'],
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: 'りんご5個とみかん4個から6個を選ぶ方法は何通り？（同種は区別しない）',
          answer: '重複組合せ ${}_{9}\\mathrm{H}_6 = {}_9\\mathrm{C}_4 = 126$ 通り',
        },
        {
          type: 'note',
          variant: 'warn',
          content: '「区別する／しない」を見極めるのが最重要。人・物・席のどれに区別があるか、問題文で必ず確認しましょう。',
        },
      ],
    },
    {
      id: 'probability',
      title: '確率',
      summary: '確率の基本的性質から独立試行・条件付き確率へ。',
      blocks: [
        { type: 'heading', level: 3, content: '確率の計算' },
        { type: 'formula', tex: "P(A) = \\frac{n(A)}{n(U)}, \\qquad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", display: true },
        { type: 'heading', level: 3, content: '条件付き確率と独立' },
        { type: 'formula', tex: 'P(B|A) = \\frac{P(A \\cap B)}{P(A)}, \\qquad A, B \\text{ 独立} \\iff P(A \\cap B) = P(A)P(B)', display: true },
        {
          type: 'text',
          content:
            '**反復試行**（独立な試行の繰り返し）で成功 r 回の確率は二項分布：$_n\\mathrm{C}_r p^r (1-p)^{n-r}$。',
        },
        {
          type: 'example',
          title: '例題',
          body: '表が出る確率 1/3 のコインを3回投げるとき、表がちょうど2回出る確率を求めよ。',
          answer: '${}_3\\mathrm{C}_2 (\\tfrac{1}{3})^2 (\\tfrac{2}{3}) = 3 \\times \\tfrac{1}{9} \\times \\tfrac{2}{3} = $ **2/9**',
        },
        { type: 'heading', level: 3, content: '練習問題' },
        {
          type: 'practice',
          problems: [
            {
              body: 'サイコロを2個投げるとき、目の和が 7 になる確率を求めよ。',
              hint: '和が 7 になる組は (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)。',
              answer: '$\\dfrac{6}{36} = $ **$\\dfrac{1}{6}$**',
            },
            {
              body: '白玉 3 個と黒玉 2 個が入った袋から同時に 2 個取り出す。両方とも白玉である確率を求めよ。',
              hint: '${}_5\\mathrm{C}_2 = 10$ 通りから白だけの ${}_3\\mathrm{C}_2$ 通り。',
              answer: '$\\dfrac{{}_3\\mathrm{C}_2}{{}_5\\mathrm{C}_2} = \\dfrac{3}{10}$',
            },
            {
              body: '表が出る確率 $\\dfrac{2}{3}$ のコインを 4 回投げるとき、表がちょうど 2 回出る確率を求めよ。（発展）',
              hint: '反復試行 ${}_n\\mathrm{C}_r p^r (1-p)^{n-r}$。',
              answer: '${}_4\\mathrm{C}_2 \\left(\\tfrac{2}{3}\\right)^2 \\left(\\tfrac{1}{3}\\right)^2 = 6 \\cdot \\tfrac{4}{9} \\cdot \\tfrac{1}{9} = $ **$\\dfrac{8}{27}$**',
            },
          ],
        },
      ],
    },
  ],
};

/** 数学A 第2項目「図形の性質」 */
export const geometryUnit: Unit = {
  id: 'sa-geometry',
  name: '数学A：図形の性質',
  gakushuShidoYoryo: '内容「図形の性質」三角形の性質、円と直線、二等辺三角形・円周角の証明',
  lessons: [
    {
      id: 'triangle-circle-properties',
      title: '三角形と円の性質',
      summary: 'メネラウス・チェバの定理、方べきの定理など図形の計量を学ぶ。',
      objectives: [
        'メネラウス・チェバの定理を使える',
        '方べきの定理を長さの計算に使える',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'メネラウスの定理（直線による切断）' },
        { type: 'formula', tex: '\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1', display: true },
        { type: 'heading', level: 3, content: 'チェバの定理（点を通る3直線）' },
        { type: 'formula', tex: '\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1 \\quad (\\text{符号の扱いが異なる})', display: true },
        {
          type: 'text',
          content:
            '見分け方：「比の値が**1つの直線**上でつながるならメネラウス、**交わる3直線**ならチェバ」。比を置く場所（頂点→頂点）を統一して書くのがミス防止のコツです。',
        },
        { type: 'heading', level: 3, content: '方べきの定理' },
        { type: 'formula', tex: 'PA \\cdot PB = PC \\cdot PD \\quad (\\text{円外の点 P から引いた2本の直線})', display: true },
        {
          type: 'example',
          title: '例題',
          body: '円外の点 P から円に2本の直線を引き、一方は A, B で他方は C, D で交わる。PA = 3, PB = 12, PC = 4 のとき PD を求めよ。',
          answer: '$3 \\times 12 = 4 \\times PD$ より **PD = 9**',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '証明問題では「相似形をつくる」ことがほぼすべて。円周角の定理で等角を見つけ、△の対応を丁寧に書きましょう。',
        },
      ],
    },
  ],
};
