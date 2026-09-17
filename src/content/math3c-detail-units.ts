import type { Unit } from './types';
import { math3FunctionsLimitsLessons } from './math3-functions-limits.ts';
import { math3DifferentiationLessons } from './math3-differentiation.ts';
import { math3IntegrationLessons } from './math3-integration.ts';
import { math3IntegralApplicationsLessons } from './math3-integral-applications.ts';
import { mathCComplexLessons } from './mathc-complex.ts';
import { mathCCurvesLessons } from './mathc-curves.ts';
import { mathCVectorsLessons } from './mathc-vectors.ts';
import { mathCConicsLessons } from './mathc-conics.ts';

export const math3CDetailUnits: Unit[] = [
  {
    id: 's3-functions-limits-detail', name: '数学III：関数と極限の詳解',
    gakushuShidoYoryo: '内容「極限」：分数関数・無理関数、合成関数・逆関数、関数の極限と連続性',
    lessons: math3FunctionsLimitsLessons,
  },
  {
    id: 's3-differentiation-detail', name: '数学III：微分法と曲線の分析',
    gakushuShidoYoryo: '内容「微分法」：いろいろな関数の導関数、導関数の応用',
    lessons: math3DifferentiationLessons,
  },
  {
    id: 's3-integration-detail', name: '数学III：積分法とその応用',
    gakushuShidoYoryo: '内容「積分法」：置換積分・部分積分、面積・体積、積分の応用',
    lessons: [...math3IntegrationLessons, ...math3IntegralApplicationsLessons],
  },
  {
    id: 'sc-vectors-detail', name: '数学C：ベクトルの実践問題',
    gakushuShidoYoryo: '内容「ベクトル」：平面及び空間におけるベクトルの図形への応用',
    lessons: mathCVectorsLessons,
  },
  {
    id: 'sc-curves-detail', name: '数学C：平面上の曲線の詳解',
    gakushuShidoYoryo: '内容「平面上の曲線と複素数平面」：二次曲線、媒介変数表示、極座標',
    lessons: [...mathCConicsLessons, ...mathCCurvesLessons],
  },
  {
    id: 'sc-complex-detail', name: '数学C：複素数平面の詳解',
    gakushuShidoYoryo: '内容「平面上の曲線と複素数平面」：複素数の図表示、ド・モアブルの定理、図形への応用',
    lessons: mathCComplexLessons,
  },
];
