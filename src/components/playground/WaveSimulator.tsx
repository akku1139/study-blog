import { useEffect, useRef, useState } from 'react';

/** 波の重ね合わせシミュレータ（物理：波） */
export function WaveSimulator() {
  const [a1, setA1] = useState(1);
  const [lambda1, setLambda1] = useState(120);
  const [a2, setA2] = useState(1);
  const [lambda2, setLambda2] = useState(120);
  const [running, setRunning] = useState(true);
  const tRef = useRef(0);
  const [, force] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      tRef.current += 0.06;
      force((n) => n + 1);
    }, 40);
    return () => window.clearInterval(id);
  }, [running]);

  const t = tRef.current;
  const W = 520, H = 300, mid = H * 0.55;
  const y1 = (x: number) => a1 * 30 * Math.sin((2 * Math.PI * x) / lambda1 - t);
  const y2 = (x: number) => a2 * 30 * Math.sin((2 * Math.PI * x) / lambda2 - t * 1.0);

  const path = (f: (x: number) => number) =>
    Array.from({ length: W }, (_, i) => `${i},${mid - f(i)}`).join(' ');

  return (
    <div className="widget">
      <div className="widget-controls">
        <label className="slider">波1 振幅 <code>{a1.toFixed(1)}</code>
          <input type="range" min={0} max={2} step={0.1} value={a1} onChange={(e) => setA1(+e.target.value)} />
        </label>
        <label className="slider">波1 波長 λ₁ <code>{lambda1}</code>
          <input type="range" min={60} max={240} step={5} value={lambda1} onChange={(e) => setLambda1(+e.target.value)} />
        </label>
        <label className="slider">波2 振幅 <code>{a2.toFixed(1)}</code>
          <input type="range" min={0} max={2} step={0.1} value={a2} onChange={(e) => setA2(+e.target.value)} />
        </label>
        <label className="slider">波2 波長 λ₂ <code>{lambda2}</code>
          <input type="range" min={60} max={240} step={5} value={lambda2} onChange={(e) => setLambda2(+e.target.value)} />
        </label>
        <button onClick={() => setRunning((r) => !r)}>{running ? '⏸ 停止' : '▶ 再生'}</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width={520} height={300} style={{ maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8, background: '#fff' }}>
        <line x1={0} y1={mid} x2={W} y2={mid} stroke="#e2e8f0" />
        {/* 合成波（塗り） */}
        <polyline points={path((x) => y1(x) + y2(x))} fill="none" stroke="#dc2626" strokeWidth={3} />
        {/* 各波 */}
        <polyline points={path(y1)} fill="none" stroke="#2563eb" strokeWidth={1.5} strokeDasharray="5 4" opacity={0.8} />
        <polyline points={path(y2)} fill="none" stroke="#16a34a" strokeWidth={1.5} strokeDasharray="5 4" opacity={0.8} />
        <text x={12} y={22} fontSize={12} fill="#dc2626">合成波（赤）＝ 波1（青）＋ 波2（緑）</text>
      </svg>
      <p className="widget-note">
        波長を揃えると<strong>定在波</strong>が、λ₁ ≠ λ₂ だと<strong>うなり</strong>のようなうねりが見えます。
        媒質の各点の変位は各波の変位の和になる——これが<strong>重ね合わせの原理</strong>です。
      </p>
    </div>
  );
}
