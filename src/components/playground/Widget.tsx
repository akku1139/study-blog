import { Suspense, lazy, type ComponentType } from 'react';
import type { WidgetRef } from '../../content/types';

// 各ウィジェットを個別チャンクに分割し、記事内で使われたときだけ読み込む（React.lazy + Suspense）。
// これにより初期バンドルに全ウィジェットのコードが含まれなくなる。
const registry: Record<string, ComponentType<{ initial?: Record<string, unknown> }>> = {
  'function-grapher': lazy(() => import('./FunctionGrapher').then(m => ({ default: m.FunctionGrapher }))),
  'quadratic-explorer': lazy(() => import('./QuadraticExplorer').then(m => ({ default: m.QuadraticExplorer }))),
  'trig-circle': lazy(() => import('./TrigCircle').then(m => ({ default: m.TrigCircle }))),
  'derivative-tangent': lazy(() => import('./DerivativeTangent').then(m => ({ default: m.DerivativeTangent }))),
  'triangle-solver': lazy(() => import('./TriangleSolver').then(m => ({ default: m.TriangleSolver }))),
  'linear-system': lazy(() => import('./LinearSystem').then(m => ({ default: m.LinearSystem }))),
  'probability-simulator': lazy(() => import('./ProbabilitySimulator').then(m => ({ default: m.ProbabilitySimulator }))),
  'physics-projectile': lazy(() => import('./PhysicsProjectile').then(m => ({ default: m.PhysicsProjectile }))),
  'vector-explorer': lazy(() => import('./VectorExplorer').then(m => ({ default: m.VectorExplorer }))),
  'wave-simulator': lazy(() => import('./WaveSimulator').then(m => ({ default: m.WaveSimulator }))),
  'math-drill': lazy(() => import('./MathDrill').then(m => ({ default: m.MathDrill }))),
  'flash-anzan': lazy(() => import('./FlashAnzan').then(m => ({ default: m.FlashAnzan }))),
  'stroop-test': lazy(() => import('./FlashAnzan').then(m => ({ default: m.StroopTest }))),
  'reaction-test': lazy(() => import('./MiniGames').then(m => ({ default: m.ReactionTest }))),
  'monte-carlo-pi': lazy(() => import('./MiniGames').then(m => ({ default: m.MonteCarloPi }))),
  'galton-board': lazy(() => import('./FunMath').then(m => ({ default: m.GaltonBoard }))),
  'golden-sunflower': lazy(() => import('./FunMath').then(m => ({ default: m.GoldenSunflower }))),
  'collatz': lazy(() => import('./FunMath').then(m => ({ default: m.Collatz }))),
  'compound-e': lazy(() => import('./FunMath').then(m => ({ default: m.CompoundE }))),
  'pendulum': lazy(() => import('./ScienceFun').then(m => ({ default: m.Pendulum }))),
  'doppler': lazy(() => import('./ScienceFun').then(m => ({ default: m.Doppler }))),
  'half-life': lazy(() => import('./ScienceFun').then(m => ({ default: m.HalfLife }))),
  'time-dilation': lazy(() => import('./ScienceFun').then(m => ({ default: m.TimeDilation }))),
  'ph-scale': lazy(() => import('./ScienceFun').then(m => ({ default: m.PhScale }))),
  'element-quiz': lazy(() => import('./ScienceFun').then(m => ({ default: m.ElementQuiz }))),
  'hydrocarbon-lab': lazy(() => import('./ScienceFun').then(m => ({ default: m.HydrocarbonLab }))),
  'vocab-flashcards': lazy(() => import('./Vocab').then(m => ({ default: m.VocabFlashcards }))),
  'vocab-quiz': lazy(() => import('./Vocab').then(m => ({ default: m.VocabQuiz }))),
  'kanji-quiz': lazy(() => import('./QuizFun').then(m => ({ default: m.KanjiQuiz }))),
  'flag-quiz': lazy(() => import('./QuizFun').then(m => ({ default: m.FlagQuiz }))),
  'trivia-quiz': lazy(() => import('./QuizFun').then(m => ({ default: m.TriviaQuiz }))),
};

const Loading = () => <div className="widget-loading">読み込み中…</div>;

export function Widget({ spec: w }: { spec: WidgetRef }) {
  const C = registry[w.id];
  if (!C) return null;
  return (
    <figure className="widget-figure">
      <Suspense fallback={<Loading />}>
        <C initial={w.props} />
      </Suspense>
      <figcaption>{w.caption}</figcaption>
    </figure>
  );
}
