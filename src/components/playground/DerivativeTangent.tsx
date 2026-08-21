import { useState } from 'react';
import { GraphCanvas } from './GraphCanvas';
import { renderMathInText } from '../../lib/math-render';

/** 接線と微分係数。点 x₀ を動かすと接線の傾き（微分係数）が変わる */
export function DerivativeTangent() {
  const [x0, setX0] = useState(1);
  const f = (x: number) => x * x * x - 3 * x;
  const fp = (x: number) => 3 * x * x - 3;
  const y0 = f(x0);
  const m = fp(x0);
  const tangent = (x: number) => y0 + m * (x - x0);

  return (
    <div className="widget">
      <div className="widget-controls">
        <label className="slider">
          x₀ = <code>{x0.toFixed(2)}</code>
          <input type="range" min={-2.5} max={2.5} step={0.05} value={x0} onChange={(e) => setX0(+e.target.value)} />
        </label>
      </div>
      <GraphCanvas
        width={520}
        height={400}
        viewport={{ xmin: -3, xmax: 3, ymin: -4, ymax: 4 }}
        functions={[{ f, color: '#2563eb' }, { f: tangent, color: '#dc2626', dashed: true }]}
        points={[{ x: x0, y: y0, label: `P(${x0.toFixed(2)}, ${y0.toFixed(2)})` }]}
      />
      <div className="widget-note">
        <p>{renderMathInText(`$f'(x_0) = ${m.toFixed(3)}$（接線の傾き）`)}</p>
        <p>
          赤い破線が接線。<strong>x₀ = ±1 の付近で傾きが 0</strong> になる＝
          <strong>極値</strong>（極大・極小）になっていることを確かめましょう。
        </p>
      </div>
    </div>
  );
}
