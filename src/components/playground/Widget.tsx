import type { ComponentType } from 'react';
import type { WidgetRef } from '../../content/types';
import { FunctionGrapher } from './FunctionGrapher';
import { QuadraticExplorer } from './QuadraticExplorer';
import { TrigCircle } from './TrigCircle';
import { DerivativeTangent } from './DerivativeTangent';
import { TriangleSolver } from './TriangleSolver';
import { LinearSystem } from './LinearSystem';
import { ProbabilitySimulator } from './ProbabilitySimulator';
import { PhysicsProjectile } from './PhysicsProjectile';
import { VectorExplorer } from './VectorExplorer';
import { WaveSimulator } from './WaveSimulator';
import { MathDrill } from './MathDrill';
import { FlashAnzan, StroopTest } from './FlashAnzan';
import { MonteCarloPi, ReactionTest } from './MiniGames';
import { Collatz, CompoundE, GaltonBoard, GoldenSunflower } from './FunMath';
import { Doppler, ElementQuiz, HalfLife, Pendulum, PhScale, TimeDilation } from './ScienceFun';

const registry: Record<string, ComponentType<{ initial?: Record<string, unknown> }>> = {
  'function-grapher': FunctionGrapher,
  'quadratic-explorer': QuadraticExplorer,
  'trig-circle': TrigCircle,
  'derivative-tangent': DerivativeTangent,
  'triangle-solver': TriangleSolver,
  'linear-system': LinearSystem,
  'probability-simulator': ProbabilitySimulator,
  'physics-projectile': PhysicsProjectile,
  'vector-explorer': VectorExplorer,
  'wave-simulator': WaveSimulator,
  'math-drill': MathDrill,
  'flash-anzan': FlashAnzan,
  'stroop-test': StroopTest,
  'reaction-test': ReactionTest,
  'monte-carlo-pi': MonteCarloPi,
  'galton-board': GaltonBoard,
  'golden-sunflower': GoldenSunflower,
  'collatz': Collatz,
  'compound-e': CompoundE,
  'pendulum': Pendulum,
  'doppler': Doppler,
  'half-life': HalfLife,
  'time-dilation': TimeDilation,
  'ph-scale': PhScale,
  'element-quiz': ElementQuiz,
};

export function Widget({ spec: w }: { spec: WidgetRef }) {
  const C = registry[w.id];
  if (!C) return null;
  return (
    <figure className="widget-figure">
      <C initial={w.props} />
      <figcaption>{w.caption}</figcaption>
    </figure>
  );
}
