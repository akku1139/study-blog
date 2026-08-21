import type { Subject } from '../types';
import { countingUnit, geometryUnit } from './math-a';
import { linearTransformUnit, complexPlaneUnit } from './math-bc';

// ============================================================
// 高校数学A・B（学習指導要領 第2章 第4節「数学」: 数学A／数学B）
// 単元ごとに src/content/senior-math-ab/ 以下へ分割
// ============================================================

export const seniorMathAB: Subject = {
  id: 'senior-math-ab',
  stage: 'senior',
  name: '高校数学（数学A・B）',
  description:
    '数学A：場合の数と確率、図形の性質。数学B：1次変換。数学C：二次曲線と複素数平面。',
  icon: '🎲',
  color: '#6d28d9',
  units: [
    countingUnit,
    geometryUnit,
    linearTransformUnit,
    complexPlaneUnit,
  ],
};
