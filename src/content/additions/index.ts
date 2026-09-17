import type { Subject, Unit } from '../types.ts';
import { lesson as lesson0 } from './jm-ratio-units.ts';
import { lesson as lesson1 } from './jm-solid-geometry.ts';
import { lesson as lesson2 } from './jm-constructions.ts';
import { lesson as lesson3 } from './js-light-lenses.ts';
import { lesson as lesson4 } from './js-astronomy.ts';
import { lesson as lesson5 } from './js-density-solubility.ts';
import { lesson as lesson6 } from './jso-map-scale.ts';
import { lesson as lesson7 } from './jso-local-government.ts';
import { lesson as lesson8 } from './jj-poetry.ts';
import { lesson as lesson9 } from './jj-discussion.ts';
import { lesson as lesson10 } from './je-questions.ts';
import { lesson as lesson11 } from './je-countability.ts';
import { lesson as lesson12 } from './sm-logic-sets.ts';
import { lesson as lesson13 } from './sm-binomial-theorem.ts';
import { lesson as lesson14 } from './sm-integer-euclid.ts';
import { lesson as lesson15 } from './sp-fluid-pressure.ts';
import { lesson as lesson16 } from './sp-heat-calorimetry.ts';
import { lesson as lesson17 } from './sc-buffer-titration.ts';
import { lesson as lesson18 } from './sc-crystal-lattices.ts';
import { lesson as lesson19 } from './sc-polymer-properties.ts';
import { lesson as lesson20 } from './sb-homeostasis.ts';
import { lesson as lesson21 } from './sb-evolution-drift.ts';
import { lesson as lesson22 } from './ss-rock-dating.ts';
import { lesson as lesson23 } from './ss-weather-fronts.ts';
import { lesson as lesson24 } from './sso-trade-comparative.ts';
import { lesson as lesson25 } from './sso-public-finance.ts';
import { lesson as lesson26 } from './sj-classical-auxiliaries.ts';
import { lesson as lesson27 } from './sj-source-comparison.ts';
import { lesson as lesson28 } from './se-modal-nuance.ts';
import { lesson as lesson29 } from './se-paragraph-writing.ts';
import { lesson as lesson30 } from './info-binary-encoding.ts';
import { lesson as lesson31 } from './info-image-audio.ts';
import { lesson as lesson32 } from './info-accessible-design.ts';
import { lesson as lesson33 } from './um-graph-theory.ts';
import { lesson as lesson34 } from './um-numerical-roots.ts';
import { lesson as lesson35 } from './um-bayesian-inference.ts';
import { lesson as lesson36 } from './up-damped-oscillation.ts';
import { lesson as lesson37 } from './up-quantum-spin.ts';
import { lesson as lesson38 } from './uc-phase-equilibrium.ts';
import { lesson as lesson39 } from './uc-spectroscopy.ts';
import { lesson as lesson40 } from './ucs-data-structures.ts';
import { lesson as lesson41 } from './ucs-transactions.ts';
import { lesson as lesson42 } from './ucs-testing.ts';
import { lesson as lesson43 } from './tv-voting-paradoxes.ts';
import { lesson as lesson44 } from './tv-calendar-arithmetic.ts';
import { lesson as lesson45 } from './tv-music-tuning.ts';
import { lesson as lesson46 } from './qa-bicycle.ts';
import { lesson as lesson47 } from './qa-packaging.ts';
import { lesson as lesson48 } from './qa-perception-images.ts';
import { lesson as lesson49 } from './qa-measurement-error.ts';
import { lesson as lesson50 } from './sch-carbohydrates.ts';
import { lesson as lesson51 } from './sch-amino-acids-proteins.ts';
import { lesson as lesson52 } from './sch-polymer-chemistry.ts';
import { lesson as lesson53 } from './sch-hydrocarbons.ts';
import { lesson as lesson54 } from './sch-lipids.ts';
import { lesson as lesson55 } from './sch-organic-calculations.ts';
import { lesson as lesson56 } from './js-waves-in-everyday.ts';
import { lesson as lesson57 } from './jj-kanji-strategy.ts';
import { lesson as lesson58 } from './jj-essay-writing.ts';
import { lesson as lesson59 } from './jso-primary-sources.ts';
import { lesson as lesson60 } from './sch-synthetic-polymers.ts';

// 既存記事を変更せず、科目末尾に新しい学習単元を追加する。
const extraUnits: Record<string, Unit> = {
  'junior-math': {
    id: 'junior-math-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson0, lesson1, lesson2],
  },
  'junior-science': {
    id: 'junior-science-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson3, lesson4, lesson5, lesson56],
  },
  'junior-social': {
    id: 'junior-social-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson6, lesson7, lesson59],
  },
  'junior-japanese': {
    id: 'junior-japanese-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson8, lesson9, lesson57, lesson58],
  },
  'junior-english': {
    id: 'junior-english-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson10, lesson11],
  },
  'senior-math': {
    id: 'senior-math-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson12, lesson13],
  },
  'senior-math-ab': {
    id: 'senior-math-ab-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson14],
  },
  'senior-physics': {
    id: 'senior-physics-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson15, lesson16],
  },
  'senior-chemistry': {
    id: 'senior-chemistry-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson17, lesson18, lesson19, lesson50, lesson51, lesson52, lesson53, lesson54, lesson55, lesson60],
  },
  'senior-biology': {
    id: 'senior-biology-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson20, lesson21],
  },
  'senior-science': {
    id: 'senior-science-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson22, lesson23],
  },
  'senior-social': {
    id: 'senior-social-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson24, lesson25],
  },
  'senior-japanese': {
    id: 'senior-japanese-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson26, lesson27],
  },
  'senior-english': {
    id: 'senior-english-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson28, lesson29],
  },
  'info-1': {
    id: 'info-1-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson30, lesson31, lesson32],
  },
  'university-math': {
    id: 'university-math-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson33, lesson34, lesson35],
  },
  'university-physics': {
    id: 'university-physics-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson36, lesson37],
  },
  'university-chemistry': {
    id: 'university-chemistry-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson38, lesson39],
  },
  'university-cs': {
    id: 'university-cs-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson40, lesson41, lesson42],
  },
  'trivia': {
    id: 'trivia-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson43, lesson44, lesson45],
  },
  'why-qa': {
    id: 'why-qa-additional-studies',
    name: 'テーマ別学習・演習',
    gakushuShidoYoryo: '関連分野の補充・発展学習。各記事に前提と適用範囲を明記。',
    lessons: [lesson46, lesson47, lesson48, lesson49],
  },
};

export function withAdditionalLessons(subject: Subject): Subject {
  const unit = extraUnits[subject.id];
  return unit ? { ...subject, units: [...subject.units, unit] } : subject;
}
