import type { Subject } from '../types';
import { bodyQaUnit } from './body';
import { everydayQaUnit } from './everyday';
import { languageQaUnit } from './language';
import { societyQaUnit } from './society';
import { techQaUnit } from './tech';

// ============================================================
// 「なぜ？」コレクション（些細な疑問から湧く Q&A 型コンテンツ）
// 各テーマの Unit を束ねる Subject。
// ============================================================

export const whySubject: Subject = {
  id: 'why-qa',
  stage: 'misc',
  name: 'なぜ？コレクション',
  description:
    'ふとした疑問を Q&A 形式で解決。「なぜ空は青い？」「なぜ指紋がある？」など、検索したくなる疑問と正確な答えを集めました。',
  icon: '❓',
  color: '#dc2626',
  units: [bodyQaUnit, everydayQaUnit, languageQaUnit, societyQaUnit, techQaUnit],
};
