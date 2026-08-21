import { useState } from 'react';
import { renderMathInText } from '../../lib/math-render';

/** 単位円と三角関数。θ を動かすと sin/cos/tan がどう決まるかを見える化 */
export function TrigCircle() {
  const [deg, setDeg] = useState(30);
  const rad = (deg * Math.PI) / 180;
  const s = Math.sin(rad);
  const c = Math.cos(rad);
  const t = Math.abs(Math.cos(rad)) < 1e-9 ? undefined : Math.tan(rad);

  return (
    <div className="widget">
      <div className="widget-controls">
        <label className="slider">
          θ = <code>{deg}°</code>
          <input type="range" min={-180} max={360} step={1} value={deg} onChange={(e) => setDeg(+e.target.value)} />
        </label>
      </div>
      <svg viewBox="-1.6 -1.6 3.2 3.2" width={380} height={380} style={{ maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8, background: '#fff' }}>
        {/* グリッド */}
        <line x1={-1.5} y1={0} x2={1.5} y2={0} stroke="#94a3b8" />
        <line x1={0} y1={-1.5} x2={0} y2={1.5} stroke="#94a3b8" />
        {/* 単位円 */}
        <circle cx={0} cy={0} r={1} fill="none" stroke="#cbd5e1" strokeWidth={0.02} />
        {/* 動径 */}
        <line x1={0} y1={0} x2={c} y2={-s} stroke="#2563eb" strokeWidth={0.03} />
        {/* cos（x成分） */}
        <line x1={0} y1={0} x2={c} y2={0} stroke="#16a34a" strokeWidth={0.05} />
        {/* sin（y成分） */}
        <line x1={c} y1={0} x2={c} y2={-s} stroke="#dc2626" strokeWidth={0.05} />
        <circle cx={c} cy={-s} r={0.04} fill="#2563eb" />
        <text x={c / 2} y={0.09} fontSize={0.12} fill="#16a34a" textAnchor="middle">cos θ</text>
        <text x={c + 0.12} y={-s / 2} fontSize={0.12} fill="#dc2626">sin θ</text>
        <text x={c + 0.08} y={-s - 0.06} fontSize={0.1} fill="#0f172a">P(cos θ, sin θ)</text>
      </svg>
      <div className="widget-note">
        <p>
          {renderMathInText(
            `$\\sin\\theta = ${fmt(s)}$、$\\cos\\theta = ${fmt(c)}$` +
              (t !== undefined ? `、$\\tan\\theta = ${fmt(t)}$` : '、tan θ は定義されない（cos θ = 0）'),
          )}
        </p>
        <p>
          単位円上の点 P の<strong> x座標が cos θ、y座標が sin θ</strong>。
          θ が 90° をこえても sin・cos の値は自然に続くのがわかります（三角関数の拡張）。
        </p>
      </div>
    </div>
  );
}
function fmt(n: number) {
  return parseFloat(n.toPrecision(3)).toString();
}
