import { useState } from 'react';
import { renderMathInText } from '../../lib/math-render';

/** 直角三角形と三平方の定理。a, b を動かすと斜辺 c が自動計算される */
export function TriangleSolver() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const c2 = a * a + b * b;
  const c = Math.sqrt(c2);
  const scale = 40;

  return (
    <div className="widget">
      <div className="widget-controls">
        <label className="slider">
          a = <code>{a}</code>
          <input type="range" min={1} max={10} step={1} value={a} onChange={(e) => setA(+e.target.value)} />
        </label>
        <label className="slider">
          b = <code>{b}</code>
          <input type="range" min={1} max={10} step={1} value={b} onChange={(e) => setB(+e.target.value)} />
        </label>
      </div>
      <svg width={420} height={(Math.max(a, b) + 2) * scale} style={{ maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8, background: '#fff' }}>
        {/* 辺 a（左縦）・b（下横）の直角三角形 */}
        <polygon
          points={`20,${20} 20,${20 + a * scale} ${20 + b * scale},${20 + a * scale}`}
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth={2}
        />
        {/* 直角マーク */}
        <rect x={20} y={20 + a * scale - 12} width={12} height={12} fill="none" stroke="#475569" strokeWidth={1.5} />
        {/* 正方形 a² の目安ラベル */}
        <text x={10} y={20 + (a * scale) / 2} fontSize={14} fill="#dc2626" textAnchor="middle" transform={`rotate(-90 10 ${20 + (a * scale) / 2})`}>
          a² = {a * a}
        </text>
        <text x={20 + (b * scale) / 2} y={20 + a * scale + 18} fontSize={14} fill="#16a34a" textAnchor="middle">
          b² = {b * b}
        </text>
        <text x={(20 + 20 + b * scale) / 2 + 6} y={20 + (a * scale) / 2} fontSize={14} fill="#2563eb" textAnchor="middle" transform={`rotate(${(-Math.atan2(a, b) * 180) / Math.PI} ${(20 + 20 + b * scale) / 2 + 6} ${20 + (a * scale) / 2})`}>
          c² = {c2}
        </text>
      </svg>
      <div className="widget-note">
        <p>{renderMathInText(`$a^2 + b^2 = ${a * a} + ${b * b} = ${c2} = c^2$、よって $c = ${fmt(c)}$`)}</p>
        <p>2つの正方形の面積の合計が、斜辺上の正方形の面積とぴったり一致します。</p>
      </div>
    </div>
  );
}
function fmt(n: number) {
  return parseFloat(n.toPrecision(5)).toString();
}
