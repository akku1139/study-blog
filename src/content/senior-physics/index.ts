import type { Subject } from '../types';
import { motionUnit } from './motion';
import { wavesUnit } from './waves';
import { emUnit } from './em';
import { atomicUnit } from './atomic';

// ============================================================
// 高校物理（学習指導要領 第2章 第6節「物理」）
// 大項目ごとに src/content/senior-physics/ 以下へ分割
// ============================================================

export const seniorPhysicsFull: Subject = {
  id: 'senior-physics-full',
  stage: 'senior',
  name: '物理',
  description:
    '様々な運動・波・電気と磁気・原子の4大項目。力学から量子論まで高校物理の全範囲。',
  icon: '🌀',
  color: '#ea580c',
  units: [motionUnit, wavesUnit, emUnit, atomicUnit],
};
