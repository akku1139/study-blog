import { useMemo, useState } from 'react';
import { GraphCanvas } from './GraphCanvas';
import { renderMathInText } from '../../lib/math-render';

/** 二次関数 y = a(x-p)² + q エクスプローラ（頂点・軸を表示） */
export function QuadraticExplorer() {
  const [a, setA] = useState(1);
  const [p, setP] = useState(0);
  const [q, setQ] = useState(0);

  const f = (x: number) => a * (x - p) * (x - p) + q;

  const info = useMemo(() => {
    const vertex = `(${p}, ${q})`;
    const axis = `x = ${p}`;
    const d = b2(a, p, q);
    const x1 = (-b1(a, p) + Math.sqrt(d)) / (2 * a);
    const x2 = (-b1(a, p) - Math.sqrt(d)) / (2 * a);
    return { vertex, axis, roots: d >= 0 ? `x = ${fmt(x1)}, ${fmt(x2)}` : 'なし（x軸と交わらない）', d };
  }, [a, p, q]);

  return (
    <div className="widget">
      <div className="widget-controls">
        <Slider label="a" value={a} set={setA} min={-3} max={3} />
        <Slider label="p" value={p} set={setP} min={-5} max={5} />
        <Slider label="q" value={q} set={setQ} min={-5} max={5} />
      </div>
      <GraphCanvas
        width={520}
        height={400}
        viewport={{ xmin: -10, xmax: 10, ymin: -8, ymax: 12 }}
        functions={[{ f, color: '#2563eb' }]}
        points={info.d >= 0 ? [
          { x: -b1(a, p) / (2 * a) + Math.sqrt(info.d) / (2 * a), y: 0, color: '#16a34a', label: 'x切片' },
          { x: -b1(a, p) / (2 * a) - Math.sqrt(info.d) / (2 * a), y: 0, color: '#16a34a' },
        ] : []}
        overlay={(ctx, map) => {
          const [px, py] = map.toPx(p, q);
          ctx.setLineDash([4, 4]);
          ctx.strokeStyle = '#dc2626';
          ctx.beginPath();
          ctx.moveTo(px, 0);
          ctx.lineTo(px, 400);
          ctx.stroke();
          ctx.setLineDash([]);
        }}
      />
      <div className="widget-note">
        <p>{renderMathInText(`頂点 $${info.vertex}$、軸 $${info.axis}$`)}</p>
        <p>x軸との共有点：{info.roots}</p>
        <p className="text-sm text-slate-500">
          p を動かすと<strong>平行移動</strong>、q を動かすと<strong>上下移動</strong>、
          a を動かすと<strong>開く方向と放物線の開き具合</strong>が変わります。
        </p>
      </div>
    </div>
  );
}

function b1(a: number, p: number) {
  return -2 * a * p;
}
function b2(a: number, p: number, q: number) {
  const b = -2 * a * p;
  return b * b - 4 * a * q;
}
function fmt(n: number) {
  return parseFloat(n.toPrecision(4)).toString();
}

function Slider({ label, value, set, min = -5, max = 5 }: { label: string; value: number; set: (n: number) => void; min?: number; max?: number }) {
  return (
    <label className="slider">
      {label} = <code>{value.toFixed(1)}</code>
      <input type="range" min={min} max={max} step={0.1} value={value} onChange={(e) => set(+e.target.value)} />
    </label>
  );
}
