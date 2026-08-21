import { useEffect, useState } from 'react';

const G = 9.8;

/** 放物運動の分解を示す静的図解 */
function ProjectileDiagram() {
  return (
    <svg viewBox="0 0 440 300" width={440} style={{ maxWidth: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8 }}>
      <line x1={20} y1={260} x2={420} y2={260} stroke="#94a3b8" />
      {/* 軌道 */}
      {(() => {
        const pts: string[] = [];
        for (let t = 0; t <= 4.08; t += 0.1) {
          pts.push(`${40 + 20 * t * 5},${260 - (20 * t - 4.9 * t * t) * 4}`);
        }
        return <polyline points={pts.join(' ')} fill="none" stroke="#2563eb" strokeWidth={2.5} />;
      })()}
      {/* 頂点での水平速度 */}
      <line x1={236} y1={80} x2={306} y2={80} stroke="#16a34a" strokeWidth={2.5} markerEnd="url(#pv-g)" />
      <circle cx={236} cy={80} r={6} fill="#2563eb" />
      <text x={240} y={62} fontSize={12} fill="#15803d">頂点では水平速度のみ（v_y = 0）</text>
      {/* 分解イメージ */}
      <defs>
        <marker id="pv-g" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#16a34a" /></marker>
        <marker id="pv-b" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#1e3a8a" /></marker>
      </defs>
      <line x1={70} y1={200} x2={150} y2={200} stroke="#16a34a" strokeWidth={2.5} markerEnd="url(#pv-g)" />
      <line x1={70} y1={200} x2={70} y2={130} stroke="#f59e0b" strokeWidth={2.5} />
      <line x1={70} y1={200} x2={142} y2={131} stroke="#1e3a8a" strokeWidth={3} markerEnd="url(#pv-b)" />
      <text x={155} y={203} fontSize={12} fill="#15803d">v·cosθ（一定）</text>
      <text x={50} y={122} fontSize={12} fill="#b45309">v·sinθ（毎秒 g ずつ減る）</text>
      <text x={110} y={114} fontSize={12} fill="#1e3a8a">合成速度 v₀</text>
      <text x={230} y={288} fontSize={13} fill="#475569">運動を「水平」と「鉛直」の独立な運動に分解する</text>
    </svg>
  );
}

/** 物体の放物運動シミュレータ（物理基礎：物体の運動） */
export function PhysicsProjectile() {
  const [v0, setV0] = useState(20); // 初速 m/s
  const [angle, setAngle] = useState(45); // 発射角
  const [t, setT] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const rad = (angle * Math.PI) / 180;
  const vx = v0 * Math.cos(rad);
  const vy0 = v0 * Math.sin(rad);
  const flightTime = (2 * vy0) / G;
  const range = vx * flightTime;
  const maxH = (vy0 * vy0) / (2 * G);

  // アニメーションループ
  useEffect(() => {
    if (!isRunning) return;
    const id = window.setInterval(() => {
      setT((cur) => {
        const next = cur + 0.05;
        return next > flightTime ? 0 : next;
      });
    }, 50);
    return () => window.clearInterval(id);
  }, [isRunning, flightTime]);

  const pos = { x: vx * t, y: Math.max(0, vy0 * t - 0.5 * G * t * t) };

  const W = 520;
  const H = 300;
  const worldW = Math.max(range * 1.15, 10);
  const worldH = Math.max(maxH * 1.3, 5);
  const s = Math.min((W - 50) / worldW, (H - 60) / worldH);
  const px = 30 + pos.x * s;
  const py = H - 25 - pos.y * s;

  // 軌道の点列
  const traj: string[] = [];
  for (let tt = 0; tt <= flightTime; tt += flightTime / 60) {
    traj.push(`${30 + vx * tt * s},${H - 25 - (vy0 * tt - 0.5 * G * tt * tt) * s}`);
  }
  const vyNow = vy0 - G * t;

  return (
    <div className="widget">
      <div className="widget-controls">
        <label className="slider">
          初速 v₀ = <code>{v0} m/s</code>
          <input type="range" min={5} max={40} step={1} value={v0} onChange={(e) => { setV0(+e.target.value); setT(0); }} />
        </label>
        <label className="slider">
          角度 θ = <code>{angle}°</code>
          <input type="range" min={5} max={85} step={1} value={angle} onChange={(e) => { setAngle(+e.target.value); setT(0); }} />
        </label>
        <button onClick={() => setIsRunning((r) => !r)}>{isRunning ? '⏸ 停止' : '▶ 再生'}</button>
        <button onClick={() => setT(0)}>↺ リセット</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width={520} height={300} style={{ maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8, background: '#f8fafc' }}>
        <line x1={20} y1={H - 25} x2={W - 10} y2={H - 25} stroke="#94a3b8" strokeWidth={1.5} />
        <polyline points={traj.join(' ')} fill="none" stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="4 4" />
        {/* 速度ベクトル */}
        <line x1={px} y1={py} x2={px + vx * s * 0.35} y2={py} stroke="#16a34a" strokeWidth={2} markerEnd="url(#arr-g)" />
        <line x1={px} y1={py} x2={px} y2={py - vyNow * s * 0.35} stroke="#f59e0b" strokeWidth={2} markerEnd="url(#arr-o)" />
        <circle cx={px} cy={py} r={7} fill="#2563eb" />
        <defs>
          <marker id="arr-g" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#16a34a" />
          </marker>
          <marker id="arr-o" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#f59e0b" />
          </marker>
        </defs>
        <text x={30} y={18} fontSize={11} fill="#475569">t = {t.toFixed(2)} s</text>
        <text x={30} y={34} fontSize={11} fill="#475569">射程 R = {range.toFixed(1)} m ／ 最高高さ H = {maxH.toFixed(1)} m</text>
      </svg>
      <div className="diagram-figure" style={{ marginTop: 12 }}>
        <ProjectileDiagram />
      </div>
      <p className="widget-note">
        緑が<strong>水平方向の速度</strong>（一定）、オレンジが<strong>鉛直方向の速度</strong>（重力 g = 9.8 m/s² で減少）。
        水平方向は等速直線運動、鉛直方向は自由落下——この2つを独立に扱うのが放物運動のコツです。
      </p>
    </div>
  );
}
