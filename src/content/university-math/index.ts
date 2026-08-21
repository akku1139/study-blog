import type { Subject } from '../types';
import { linearAlgebraUnit, analysisUnit } from './units';

// ============================================================
// 大学数学（入門：線形代数と解析）
// ============================================================

export const universityMath: Subject = {
  id: 'university-math',
  stage: 'university',
  name: '大学数学（教養）',
  description:
    '線形代数と解析の入門。高校数学III・Cからの接続を意識した、理工系・経済学系で最初に学ぶ範囲。',
  icon: '🎓',
  color: '#7e22ce',
  units: [linearAlgebraUnit, analysisUnit],
};
