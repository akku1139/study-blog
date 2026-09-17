import type { Subject } from '../types';
import { cellUnit } from './cell-metabolism.ts';
import { geneticsUnit } from './genetics.ts';
import { ecologyUnit } from './ecology.ts';

// ============================================================
// 高校生物（学習指導要領 第2章 第6節「生物」）
// 大項目ごとに src/content/senior-biology/ 以下へ分割
// ============================================================

export const seniorBiology: Subject = {
  id: 'senior-biology',
  stage: 'senior',
  name: '生物',
  description:
    '細胞と代謝、生殖・発生・遺伝、環境応答と生態系。分子レベルから生態系まで高校生物の全範囲。',
  icon: '🌿',
  color: '#15803d',
  units: [cellUnit, geneticsUnit, ecologyUnit],
};
