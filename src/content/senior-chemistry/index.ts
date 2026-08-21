import type { Subject } from '../types';
import { statesUnit } from './states';
import { inorganicUnit } from './inorganic';
import { organicUnit } from './organic';

// ============================================================
// 高校化学（学習指導要領 第2章 第6節「化学」）
// 大項目ごとに src/content/senior-chemistry/ 以下へ分割
// ============================================================

export const seniorChemistry: Subject = {
  id: 'senior-chemistry',
  stage: 'senior',
  name: '化学',
  description:
    '物質の状態と反応・無機物質・有機化合物。平衡・酸塩基・電池から有機合成まで高校化学の全範囲。',
  icon: '⚗️',
  color: '#0d9488',
  units: [statesUnit, inorganicUnit, organicUnit],
};
