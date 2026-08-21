import type { Subject } from './types';
import { juniorMath } from './junior-math';
import { juniorScience } from './junior-science';
import { seniorMath } from './senior-math';
import { seniorMath3C } from './senior-math-3c';
import { seniorPhysics } from './senior-physics';
import { juniorJapanese } from './junior-japanese';
import { juniorSocial } from './junior-social';
import { juniorEnglish } from './junior-english';
import { seniorJapanese } from './senior-japanese';
import { seniorEnglish } from './senior-english';
import { seniorSocialStudies } from './senior-social';
import { seniorScience } from './senior-science';

/** 全教科・科目のレジストリ。ここに追加するだけでサイトに反映される。 */
export const subjects: Subject[] = [
  juniorMath,
  juniorScience,
  juniorSocial,
  juniorJapanese,
  juniorEnglish,
  seniorMath,
  seniorMath3C,
  seniorPhysics,
  seniorScience,
  seniorSocialStudies,
  seniorJapanese,
  seniorEnglish,
];

export const stageNames = {
  junior: '中学校',
  senior: '高等学校',
} as const;
