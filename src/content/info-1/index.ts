import type { Subject } from '../types';
import { societyUnit } from './society';
import { programmingUnit } from './programming';
import { networkDataUnit } from './network-data';

// ============================================================
// 情報I（学習指導要領 第2章 第9節「情報」）
// 項目ごとに src/content/info-1/ 以下へ分割
// ============================================================

export const info1: Subject = {
  id: 'info-1',
  stage: 'senior',
  name: '情報I',
  description:
    '情報社会の問題解決、情報デザイン、プログラミングとアルゴリズム、ネットワークとデータ活用。共通必履修科目。',
  icon: '💻',
  color: '#0369a1',
  units: [societyUnit, programmingUnit, networkDataUnit],
};
