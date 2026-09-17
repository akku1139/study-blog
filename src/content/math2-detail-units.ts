import type { Unit } from './types';
import { math2AlgebraLessons } from './math2-algebra.ts';
import { math2ProofLessons } from './math2-proof.ts';
import { math2CoordinateLessons } from './math2-coordinate.ts';
import { math2DetailLessons } from './senior-math-ii-detail.ts';
import { math2ExpLogLessons } from './math2-exp-log.ts';
import { math2CalculusLessons } from './math2-calculus.ts';

/** 既存の概要記事から進む数学IIの各論。URLは既存記事と独立して保つ。 */
export const math2DetailUnits: Unit[] = [
  {
    id: 's2-algebra-detail', name: '数学II：いろいろな式と証明',
    gakushuShidoYoryo: '内容「いろいろな式」：整式の除法、複素数と方程式、式と証明',
    lessons: [...math2AlgebraLessons, ...math2ProofLessons],
  },
  {
    id: 's2-coordinate-detail', name: '数学II：図形と方程式',
    gakushuShidoYoryo: '内容「図形と方程式」：点と直線、円、軌跡と領域',
    lessons: math2CoordinateLessons,
  },
  {
    id: 's2-functions-detail', name: '数学II：三角・指数・対数関数の問題解法',
    gakushuShidoYoryo: '内容「三角関数」「指数関数・対数関数」：公式の活用と方程式・不等式',
    lessons: [...math2DetailLessons, ...math2ExpLogLessons],
  },
  {
    id: 's2-calculus-detail', name: '数学II：微分積分の応用演習',
    gakushuShidoYoryo: '内容「微分・積分の考え」：関数の増減、極値、面積',
    lessons: math2CalculusLessons,
  },
];
