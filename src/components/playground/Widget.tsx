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
