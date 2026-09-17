import type { Subject } from './types';
import { juniorMath } from './junior-math.ts';
import { juniorScience } from './junior-science.ts';
import { juniorSocial } from './junior-social.ts';
import { juniorJapanese } from './junior-japanese.ts';
import { juniorEnglish } from './junior-english.ts';
import { seniorMath } from './senior-math.ts';
import { seniorMath3C } from './senior-math-3c.ts';
import { seniorMathAB } from './senior-math-ab/index.ts';
import { seniorBiology } from './senior-biology/index.ts';
import { seniorPhysics } from './senior-physics-basic.ts';
import { seniorPhysicsFull } from './senior-physics/index.ts';
import { seniorScience } from './senior-science.ts';
import { seniorChemistry } from './senior-chemistry/index.ts';
import { seniorSocialStudies } from './senior-social.ts';
import { seniorJapanese } from './senior-japanese.ts';
import { seniorEnglish } from './senior-english.ts';
import { info1 } from './info-1/index.ts';
import { universityMath } from './university-math/index.ts';
import { universityChemistry } from './university-chemistry/index.ts';
import { universityPhysics } from './university-physics.ts';
import { universityCS } from './university-cs.ts';
import { triviaSubject } from './trivia.ts';
import { whySubject } from './trivia-qa/index.ts';

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
  universityPhysics,
  universityCS,
  triviaSubject,
  whySubject,
];


export const stageNames = {
  junior: '中学校',
  senior: '高等学校',
  university: '大学',
  misc: '雑学・お楽しみ',
} as const;
