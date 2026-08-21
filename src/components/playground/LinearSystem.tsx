import { useState } from 'react';
import { GraphCanvas } from './GraphCanvas';
import { renderMathInText } from '../../lib/math-render';

/** 連立方程式＝2直線の交点。傾き・切片を動かして交点を観察 */
export function LinearSystem() {
  const [a1, setA1] = useState(1);
  const [b1, setB1] = useState(1);
  const [c1, setC1] = useState(2);
  const [a2, setA2] = useState(1);
  const [b2, setB2] = useState(-1);
  const [c2, setC2] = useState(0);

  // a1 x + b1 y = c1 / a2 x + b2 y = c2 → y = (c1 - a1 x)/b1
  const f1 = (x: number) => (b1 !== 0 ? (c1 - a1 * x) / b1 : NaN);
  const f2 = (x: number) => (b2 !== 0 ? (c2 - a2 * x) / b2 : NaN);

  const det = a1 * b2 - a2 * b1;
  let intersection: { x: number; y: number } | null = null;
  if (Math.abs(det) > 1e-9) {
    const x = (c1 * b2 - c2 * b1) / det;
    const y = (a1 * c2 - a2 * c1) / det;
    intersection = { x, y };
  }

  return (
    <div className="widget">
      <div className="widget-controls widget-grid3">
        <span>① {a1}x + {b1}y = {c1}</span>
        <Slider label="a₁" value={a1} set={setA1} />
        <Slider label="b₁" value={b1} set={setB1} />
        <Slider label="c₁" value={c1} set={setC1} />
        <span style={{ marginTop: 8 }}>② {a2}x + {b2}y = {c2}</span>
        <Slider label="a₂" value={a2} set={setA2} />
        <Slider label="b₂" value={b2} set={setB2} />
        <Slider label="c₂" value={c2} set={setC2} />
      </div>
      <GraphCanvas
        width={520}
        height={400}
        viewport={{ xmin: -8, xmax: 8, ymin: -6, ymax: 6 }}
        functions={[
          { f: f1, color: '#2563eb' },
          { f: f2, color: '#16a34a' },
        ]}
        points={intersection ? [{ ...intersection, color: '#dc2626', label: `(${intersection.x.toFixed(2)}, ${intersection.y.toFixed(2)})` }] : []}
      />
      <div className="widget-note">
        {intersection ? (
          <p>{renderMathInText(`交点は $(${fmt(intersection.x)},\\ ${fmt(intersection.y)})$。これが連立方程式の<strong class="katex">解</strong>です。`)}</p>
        ) : (
          <p><strong>解なし</strong> — 2直線が平行になっています（係数に比例関係があるとき）。式を変形すると同じ直線になる場合は「解が無数にある」状態になります。</p>
        )}
      </div>
    </div>
  );
}

function Slider({ label, value, set }: { label: string; value: number; set: (n: number) => void }) {
  return (
    <label className="slider">
      {label} = <code>{value.toFixed(0)}</code>
      <input type="range" min={-3} max={3} step={1} value={value} onChange={(e) => set(+e.target.value)} />
    </label>
  );
}
function fmt(n: number) {
  return parseFloat(n.toPrecision(3)).toString();
}
