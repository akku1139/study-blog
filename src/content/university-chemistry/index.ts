import type { Subject } from '../types';
import { thermodynamicsUnit } from './thermodynamics';
import { kineticsUnit } from './kinetics';
import { quantumUnit } from './quantum';
import { organicUnit } from './organic-reactions';
import { solidUnit } from './solid-state';
import { electrochemistryUnit } from './electrochemistry-detail';
import { coordinationUnit } from './coordination-chemistry';

// ============================================================
// 大学化学（教養：物理化学入門）
// ============================================================

export const universityChemistry: Subject = {
  id: 'university-chemistry',
  stage: 'university',
  name: '大学化学（教養）',
  description:
    '熱力学・反応速度論・量子化学・有機反応論・固体化学の入門。「なぜ反応は進むのか、どう速く進むか、物質はなぜその構造をとるか」を物理の言葉で学ぶ。',
  icon: '🧬',
  color: '#0f766e',
  units: [thermodynamicsUnit, kineticsUnit, quantumUnit, organicUnit, solidUnit, electrochemistryUnit, coordinationUnit],
};
