import type { Subject } from './types';
import { juniorMath } from './junior-math';
import { juniorScience } from './junior-science';
import { juniorSocial } from './junior-social';
import { juniorJapanese } from './junior-japanese';
import { juniorEnglish } from './junior-english';
import { seniorMath } from './senior-math';
import { seniorMath3C } from './senior-math-3c';
import { seniorMathAB } from './senior-math-ab/index';
import { seniorBiology } from './senior-biology/index';
import { seniorPhysics } from './senior-physics-basic';
import { seniorPhysicsFull } from './senior-physics/index';
import { seniorScience } from './senior-science';
import { seniorChemistry } from './senior-chemistry/index';
import { seniorSocialStudies } from './senior-social';
import { seniorJapanese } from './senior-japanese';
import { seniorEnglish } from './senior-english';
import { info1 } from './info-1/index';
import { universityMath } from './university-math/index';
import { universityChemistry } from './university-chemistry/index';
import { triviaSubject } from './trivia';

/** 全教科・科目のレジストリ。ここに追加するだけでサイトに反映される。 */
export const subjects: Subject[] = [
  juniorMath,
  juniorScience,
  juniorSocial,
  juniorJapanese,
  juniorEnglish,
  seniorMath,
  seniorMathAB,
  seniorMath3C,
  seniorPhysics,
  seniorPhysicsFull,
  seniorScience,
  seniorChemistry,
  seniorBiology,
  seniorSocialStudies,
  seniorJapanese,
  seniorEnglish,
  info1,
  universityMath,
  universityChemistry,
  triviaSubject,
];


export const stageNames = {
  junior: '中学校',
  senior: '高等学校',
  university: '大学',
  misc: '雑学・お楽しみ',
} as const;
