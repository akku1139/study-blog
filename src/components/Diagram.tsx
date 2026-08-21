import type { ReactNode } from 'react';

/**
 * 静的図解ライブラリ。
 * 各図は自己完結した SVG で、教科書本文の説明を視覚的に補助する。
 */
const diagrams: Record<string, () => ReactNode> = {
  // ---------- 数直線と絶対値 ----------
  'number-line': () => (
    <svg viewBox="0 0 560 120" width={560} style={{ maxWidth: '100%' }}>
      <line x1={30} y1={70} x2={530} y2={70} stroke="#334155" strokeWidth={2} />
      <polygon points="530,70 520,65 520,75" fill="#334155" />
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n, i) => {
        const x = 280 + n * 60;
        return (
          <g key={n}>
            <line x1={x} y1={63} x2={x} y2={77} stroke="#334155" strokeWidth={2} />
            <text x={x} y={98} fontSize={14} textAnchor="middle" fill="#475569">{n}</text>
          </g>
        );
      })}
      {/* 絶対値の距離表現 */}
      <path d={`M ${280 - 180} 40 Q 280 15 ${280 + 120} 40`} fill="none" stroke="#dc2626" strokeWidth={2} markerEnd="" />
      <text x={250} y={28} fontSize={13} fill="#dc2626" textAnchor="middle">|-3| = 3</text>
      <text x={340} y={28} fontSize={13} fill="#16a34a" textAnchor="middle">|2| = 2</text>
      {/* 大小関係 */}
      <rect x={100} y={108} width={0} height={0} />
      <text x={280} y={116} fontSize={12} fill="#64748b" textAnchor="middle">← 小さい　｜　数直線：右ほど大きい　｜　大きい →</text>
    </svg>
  ),

  // ---------- 放物線の平行移動 ----------
  'parabola-translate': () => (
    <svg viewBox="0 0 480 360" width={480} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      {/* 軸 */}
      {(() => {
        const ox = 160; const oy = 300; const u = 36;
        const parab = (a: number, shiftX: number, shiftY: number, color: string) => {
          const pts: string[] = [];
          for (let t = -2.6; t <= 2.6; t += 0.05) {
            pts.push(`${ox + (shiftX + t) * u},${oy - (shiftY + a * t * t) * u}`);
          }
          return <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth={2.5} />;
        };
        return (
          <>
            <line x1={20} y1={oy} x2={460} y2={oy} stroke="#94a3b8" />
            <line x1={ox} y1={340} x2={ox} y2={20} stroke="#94a3b8" />
            {parab(1, 0, 0, '#2563eb')}
            {parab(1, 2, -1.5, '#dc2626')}
            <circle cx={ox} cy={oy} r={4} fill="#0f172a" />
            <circle cx={ox + 2 * u} cy={oy + 1.5 * u} r={4} fill="#dc2626" />
            <text x={ox - 46} y={40} fontSize={14} fill="#2563eb">y = ax²</text>
            <text x={ox + 90} y={oy + 78} fontSize={14} fill="#dc2626">y = a(x−p)²+q</text>
            <path d={`M ${ox + 6} ${oy - 6} Q ${ox + 50} ${oy - 40} ${ox + 2 * u - 10} ${oy + 1.5 * u - 12}`} fill="none" stroke="#64748b" strokeDasharray="4 3" />
            <text x={ox + 44} y={oy - 52} fontSize={12} fill="#64748b">x方向にp、y方向にq</text>
            <text x={ox + 2 * u + 8} y={oy + 1.5 * u + 18} fontSize={13} fill="#dc2626">頂点 (p, q)</text>
          </>
        );
      })()}
    </svg>
  ),

  // ---------- 三平方の定理 ----------
  'pythagorean-squares': () => (
    <svg viewBox="0 0 420 380" width={420} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      {/* 直角三角形 a=3, b=4（縮尺 30px）と、各辺上の正方形 */}
      {(() => {
        const A: [number, number] = [80, 320]; // 直角
        const B: [number, number] = [200, 320]; // b=4 → 120px
        const C: [number, number] = [80, 230]; // a=3 → 90px 上
        return (
          <>
            {/* b² の正方形（下） */}
            <rect x={B[0]} y={B[1]} width={120} height={120} fill="#dcfce7" opacity={0.85} />
            <text x={260} y={385 - 20} fontSize={15} fill="#15803d" textAnchor="middle">b² = 16</text>
            {/* a² の正方形（左） */}
            <rect x={C[0] - 90} y={C[1]} width={90} height={90} fill="#fee2e2" opacity={0.9} />
            <text x={C[0] - 45} y={C[1] + 50} fontSize={15} fill="#b91c1c" textAnchor="middle">a² = 9</text>
            {/* c² の正方形（斜辺上・回転）: 斜辺ベクトル (120,-90)、外側法線 */}
            <polygon
              points={`${A[0]},${A[1]} ${A[0] + 54},${A[1] + 72} ${A[0] + 174},${A[1] - 18} ${A[0] + 120},${A[1] - 90}`}
              fill="#dbeafe"
              opacity={0.95}
            />
            <text x={A[0] + 130} y={A[1] + 25} fontSize={15} fill="#1d4ed8" transform={`rotate(-37 ${A[0] + 130} ${A[1] + 25})`}>c² = 25</text>
            {/* 三角形 */}
            <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill="#fef9c3" stroke="#0f172a" strokeWidth={2} />
            <rect x={A[0]} y={A[1] - 12} width={12} height={12} fill="none" stroke="#0f172a" strokeWidth={1.5} />
            <text x={140} y={310} fontSize={14} fill="#0f172a" textAnchor="middle">b</text>
            <text x={66} y={280} fontSize={14} fill="#0f172a" textAnchor="middle">a</text>
            <text x={150} y={262} fontSize={14} fill="#0f172a" textAnchor="middle">c</text>
            <text x={210} y={45} fontSize={16} fill="#334155" textAnchor="middle">a² + b² = c²</text>
            <text x={210} y={68} fontSize={13} fill="#64748b" textAnchor="middle">赤＋緑の面積 ＝ 青の面積</text>
          </>
        );
      })()}
    </svg>
  ),

  // ---------- 単位円と三角比（静的版） ----------
  'unit-circle-static': () => (
    <svg viewBox="-1.7 -1.7 3.4 3.4" width={360} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      <line x1={-1.55} y1={0} x2={1.55} y2={0} stroke="#94a3b8" strokeWidth={0.02} />
      <line x1={0} y1={-1.55} x2={0} y2={1.55} stroke="#94a3b8" strokeWidth={0.02} />
      <circle cx={0} cy={0} r={1} fill="none" stroke="#cbd5e1" strokeWidth={0.02} />
      {/* θ = 60° */}
      {(() => {
        const rad = Math.PI / 3;
        const c = Math.cos(rad), s = Math.sin(rad);
        return (
          <>
            <path d={`M 0.35 0 A 0.35 0.35 0 0 0 ${0.35 * c} ${-0.35 * s}`} fill="none" stroke="#f59e0b" strokeWidth={0.03} />
            <text x={0.48} y={-0.12} fontSize={0.14} fill="#d97706">θ</text>
            <line x1={0} y1={0} x2={c} y2={-s} stroke="#2563eb" strokeWidth={0.035} />
            <line x1={0} y1={0} x2={c} y2={0} stroke="#16a34a" strokeWidth={0.055} />
            <line x1={c} y1={0} x2={c} y2={-s} stroke="#dc2626" strokeWidth={0.055} />
            <circle cx={c} cy={-s} r={0.045} fill="#2563eb" />
            <text x={c / 2} y={0.11} fontSize={0.14} fill="#16a34a" textAnchor="middle">cos θ = x座標</text>
            <text x={c + 0.08} y={-s / 2} fontSize={0.14} fill="#dc2626">sin θ = y座標</text>
            <text x={c + 0.09} y={-s - 0.07} fontSize={0.12} fill="#0f172a">P</text>
            {/* 象限の符号 */}
            <text x={0.85} y={-1.35} fontSize={0.13} fill="#475569">第1象限: すべて+</text>
            <text x={-1.5} y={-1.35} fontSize={0.13} fill="#475569">第2象限: sinのみ+</text>
            <text x={-1.5} y={1.45} fontSize={0.13} fill="#475569">第3象限: tanのみ+</text>
            <text x={0.62} y={1.45} fontSize={0.13} fill="#475569">第4象限: cosのみ+</text>
          </>
        );
      })()}
    </svg>
  ),

  // ---------- 平均変化率→微分係数 ----------
  'derivative-concept': () => (
    <svg viewBox="0 0 500 340" width={500} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      {(() => {
        const f = (x: number) => 0.12 * x * x;
        const X0 = 110, H = 240, OY = 290;
        const px = (x: number) => 60 + x;
        const py = (x: number) => OY - f(x);
        const P: [number, number] = [px(X0), py(f(X0))];
        const Q: [number, number] = [px(X0 + H), py(f(X0 + H))];
        // 接線（傾き = 導関数）
        const m = 2 * 0.12 * X0;
        const tanY = (t: number) => P[1] - m * (t - P[0]);
        return (
          <>
            <line x1={30} y1={OY} x2={470} y2={OY} stroke="#94a3b8" />
            <line x1={60} y1={320} x2={60} y2={20} stroke="#94a3b8" />
            <polyline points={Array.from({ length: 120 }, (_, i) => `${px(i * 3.4)},${py(i * 3.4)}`).join(' ')} fill="none" stroke="#2563eb" strokeWidth={2.5} />
            {/* 割線 PQ */}
            <line x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke="#f59e0b" strokeWidth={2} />
            <text x={(P[0] + Q[0]) / 2} y={(P[1] + Q[1]) / 2 - 10} fontSize={13} fill="#d97706" textAnchor="middle">割線（平均変化率）</text>
            <circle cx={Q[0]} cy={Q[1]} r={5} fill="#f59e0b" />
            <text x={Q[0] + 8} y={Q[1]} fontSize={14} fill="#b45309">Q(a+h)</text>
            {/* 接線 */}
            <line x1={P[0] - 60} y1={tanY(P[0] - 60)} x2={P[0] + 80} y2={tanY(P[0] + 80)} stroke="#dc2626" strokeWidth={2} strokeDasharray="6 4" />
            <circle cx={P[0]} cy={P[1]} r={5} fill="#dc2626" />
            <text x={P[0] - 14} y={P[1] + 22} fontSize={14} fill="#b91c1c">P(a)</text>
            {/* h と f(a+h)-f(a) */}
            <line x1={P[0]} y1={OY + 14} x2={Q[0]} y2={OY + 14} stroke="#475569" markerEnd="" />
            <text x={(P[0] + Q[0]) / 2} y={OY + 30} fontSize={13} fill="#475569" textAnchor="middle">h</text>
            <text x={330} y={60} fontSize={13} fill="#64748b">h → 0 で割線が接線に一致</text>
            <text x={330} y={82} fontSize={13} fill="#dc2626">極限が微分係数 f′(a)</text>
          </>
        );
      })()}
    </svg>
  ),

  // ---------- 定積分と面積 ----------
  'integral-area': () => (
    <svg viewBox="0 0 500 320" width={500} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      {(() => {
        const f = (x: number) => 0.004 * x * (400 - x) * 0.8;
        const OY = 280;
        const bars: ReactNode[] = [];
        for (let i = 0; i < 16; i++) {
          const bx = 70 + i * 23;
          const h = f(bx - 58.5 + 11.5);
          bars.push(<rect key={i} x={bx} y={OY - h} width={21} height={h} fill="#bfdbfe" stroke="#93c5fd" strokeWidth={1} />);
        }
        const curve = Array.from({ length: 100 }, (_, i) => {
          const x = 70 + i * 3.6;
          return `${x},${OY - f(x - 58.5 + 11.5)}`;
        }).join(' ');
        return (
          <>
            {bars}
            <polyline points={curve} fill="none" stroke="#2563eb" strokeWidth={2.5} />
            <line x1={40} y1={OY} x2={470} y2={OY} stroke="#94a3b8" />
            <line x1={70} y1={OY} x2={70} y2={40} stroke="#94a3b8" strokeDasharray="4 3" />
            <line x1={440} y1={OY} x2={440} y2={40} stroke="#94a3b8" strokeDasharray="4 3" />
            <text x={70} y={OY + 20} fontSize={13} fill="#475569" textAnchor="middle">a</text>
            <text x={440} y={OY + 20} fontSize={13} fill="#475569" textAnchor="middle">b</text>
            <text x={255} y={70} fontSize={14} fill="#1e40af" textAnchor="middle">細い長方形の面積を足し合わせる</text>
            <text x={255} y={92} fontSize={14} fill="#dc2626" textAnchor="middle">分割を細かくすると ∫ᵃᵇ f(x)dx になる</text>
          </>
        );
      })()}
    </svg>
  ),

  // ---------- 正弦定理・余弦定理 ----------
  'sine-rule-triangle': () => (
    <svg viewBox="0 0 440 280" width={440} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      <polygon points="220,40 90,230 370,230" fill="#ede9fe" stroke="#7c3aed" strokeWidth={2} />
      <text x={220} y={30} fontSize={16} fill="#5b21b6" textAnchor="middle">A</text>
      <text x={76} y={246} fontSize={16} fill="#5b21b6">B</text>
      <text x={376} y={246} fontSize={16} fill="#5b21b6">C</text>
      <text x={148} y={125} fontSize={14} fill="#334155" textAnchor="middle">c</text>
      <text x={300} y={125} fontSize={14} fill="#334155" textAnchor="middle">b</text>
      <text x={230} y={248} fontSize={14} fill="#334155" textAnchor="middle">a</text>
      <text x={298} y={218} fontSize={13} fill="#7c3aed" textAnchor="middle">C</text>
      <text x={112} y={216} fontSize={13} fill="#7c3aed" textAnchor="middle">B</text>
      <text x={220} y={272} fontSize={13} fill="#475569" textAnchor="middle">正弦定理: 「角」とその「対辺」の組 — 辺 a の対は角 A</text>
      <text x={220} y={292} fontSize={13} fill="#475569" textAnchor="middle">余弦定理: 2辺とはさむ角から残りの辺・角を求める</text>
    </svg>
  ),

  // ---------- 放物運動の分解 ----------
  'projectile-forces': () => (
    <svg viewBox="0 0 440 300" width={440} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      {(() => {
        const ox = 40, oy = 250, u = 9;
        const traj: string[] = [];
        for (let t = 0; t <= 4.08; t += 0.1) {
          traj.push(`${ox + 20 * t * u * 0.55},${oy - (20 * t - 4.9 * t * t) * u * 0.55}`);
        }
        return (
          <>
            <line x1={20} y1={oy} x2={420} y2={oy} stroke="#94a3b8" />
            <polyline points={traj.join(' ')} fill="none" stroke="#2563eb" strokeWidth={2.5} />
            {/* 頂点での速度 */}
            <line x1={ox + 20 * 2.04 * u * 0.55} y1={oy - (20 * 2.04 - 4.9 * 2.04 * 2.04) * u * 0.55} x2={ox + 20 * 2.04 * u * 0.55 + 70} y2={oy - (20 * 2.04 - 4.9 * 2.04 * 2.04) * u * 0.55} stroke="#16a34a" strokeWidth={2} markerEnd="url(#pv)" />
            <circle cx={ox + 20 * 2.04 * u * 0.55} cy={oy - (20 * 2.04 - 4.9 * 2.04 * 2.04) * u * 0.55} r={6} fill="#2563eb" />
            <defs>
              <marker id="pv" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#16a34a" /></marker>
            </defs>
            <text x={190} y={70} fontSize={13} fill="#15803d">頂点では水平速度のみ（v_y = 0）</text>
            {/* 分解イメージ */}
            <line x1={60} y1={oy - 60} x2={140} y2={oy - 60} stroke="#16a34a" strokeWidth={2.5} markerEnd="url(#pv)" />
            <line x1={60} y1={oy - 60} x2={60} y2={oy - 130} stroke="#f59e0b" strokeWidth={2.5} />
            <line x1={60} y1={oy - 60} x2={132} y2={oy - 129} stroke="#2563eb" strokeWidth={3} markerEnd="url(#pv)" />
            <text x={145} y={oy - 57} fontSize={12} fill="#15803d">v·cosθ（一定）</text>
            <text x={40} y={oy - 138} fontSize={12} fill="#b45309">v·sinθ（毎秒 g ずつ減る）</text>
            <text x={100} y={oy - 148} fontSize={12} fill="#1e40af">合成速度 v₀</text>
            <text x={230} y={285} fontSize={13} fill="#475569">運動を「水平」と「鉛直」の2つの独立な運動に分解する</text>
          </>
        );
      })()}
    </svg>
  ),
};

export function Diagram({ id }: { id: string }) {
  const D = diagrams[id];
  if (!D) return null;
  return (
    <figure className="diagram-figure">
      {D()}
    </figure>
  );
}
