import type { Subject } from '../types';
import { thermodynamicsUnit } from './thermodynamics';
import { kineticsUnit } from './kinetics';
import { quantumUnit } from './quantum';

// ============================================================
// 大学化学（教養：物理化学入門）
// ============================================================

export const universityChemistry: Subject = {
  id: 'university-chemistry',
  stage: 'university',
  name: '大学化学（教養）',
  description:
    '熱力学・反応速度論・量子化学の入門。「なぜ反応は進むのか、どれだけ速いのか、なぜ結合するのか」を物理の言葉で学ぶ。',
  icon: '🧬',
  color: '#0f766e',
  units: [thermodynamicsUnit, kineticsUnit, quantumUnit],
};
