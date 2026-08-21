import { useState } from 'react';
import { renderMathInText } from '../../lib/math-render';

interface Vec {
  x: number;
  y: number;
}

/** ベクトルの和・差・内積を可視化（数学C：ベクトル） */
export function VectorExplorer() {
  const [a, setA] = useState<Vec>({ x: 3, y: 1 });
  const [b, setB] = useState<Vec>({ x: 1, y: 2 });

  const sum = { x: a.x + b.x, y: a.y + b.y };
  const dot = a.x * b.x + a.y * b.y;
  const cos = dot / (Math.hypot(a.x, a.y) * Math.hypot(b.x, b.y) || 1);

  const W = 480, H = 400, cx = 240, cy = 200, u = 30;

  const arrow = (v: Vec, color: string, dash = false) => (
    <g key={color}>
      <line
        x1={cx} y1={cy}
        x2={cx + v.x * u} y2={cy - v.y * u}
        stroke={color} strokeWidth={2.5}
        strokeDasharray={dash ? '5 4' : undefined}
        markerEnd={`url(#vec-${color.replace('#', '')})`}
      />
      <defs>
        <marker id={`vec-${color.replace('#', '')}`} markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill={color} />
        </marker>
      </defs>
    </g>
  );

  return (
    <div className="widget">
      <div className="widget-controls">
        <VecSlider label="a = (x, y)" x={a.x} y={a.y} set={(x, y) => setA({ x, y })} color="#2563eb" />
        <VecSlider label="b = (x, y)" x={b.x} y={b.y} set={(x, y) => setB({ x, y })} color="#16a34a" />
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width={480} height={400} style={{ maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8, background: '#fff' }}>
        {/* グリッド */}
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`v${i}`} x1={i * u + (cx % u)} y1={0} x2={i * u + (cx % u)} y2={H} stroke="#eef2f7" />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={i * u + (cy % u)} x2={W} y2={i * u + (cy % u)} stroke="#eef2f7" />
        ))}
        <line x1={0} y1={cy} x2={W} y2={cy} stroke="#94a3b8" />
        <line x1={cx} y1={0} x2={cx} y2={H} stroke="#94a3b8" />
        {/* 平行四辺形 */}
        <polygon
          points={`${cx},${cy} ${cx + a.x * u},${cy - a.y * u} ${cx + sum.x * u},${cy - sum.y * u} ${cx + b.x * u},${cy - b.y * u}`}
          fill="#dbeafe"
          opacity={0.5}
        />
        {arrow(a, '#2563eb')}
        {arrow(b, '#16a34a')}
        {arrow(sum, '#dc2626')}
        <text x={cx + a.x * u / 2} y={cy - a.y * u / 2 - 6} fontSize={14} fill="#2563eb" textAnchor="middle">a</text>
        <text x={cx + b.x * u / 2} y={cy - b.y * u / 2 - 6} fontSize={14} fill="#16a34a" textAnchor="middle">b</text>
        <text x={cx + sum.x * u / 2 + 12} y={cy - sum.y * u / 2 - 6} fontSize={14} fill="#dc2626">a+b</text>
      </svg>
      <div className="widget-note">
        <p>
          {renderMathInText(
            `$\\vec{a} + \\vec{b} = (${sum.x},\\ ${sum.y})$、内積 $\\vec{a} \\cdot \\vec{b} = ${dot.toFixed(1)}$、$\\cos\\theta = ${cos.toFixed(3)}$`,
          )}
        </p>
        <p>
          青い平行四辺形は<strong>ベクトルの和の平行四辺形則</strong>。
          内積が <strong>0 になるように動かすと垂直</strong>（θ = 90°）になることを確かめましょう。
        </p>
      </div>
    </div>
  );
}

function VecSlider({ label, x, y, set, color }: { label: string; x: number; y: number; set: (x: number, y: number) => void; color: string }) {
  return (
    <span className="slider" style={{ color }}>
      <span>{label} = ({x}, {y})</span>
      <input type="range" min={-5} max={5} step={1} value={x} onChange={(e) => set(+e.target.value, y)} />
      <input type="range" min={-5} max={5} step={1} value={y} onChange={(e) => set(x, +e.target.value)} />
    </span>
  );
}
