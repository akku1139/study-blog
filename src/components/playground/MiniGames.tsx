import { useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'ready' | 'go' | 'result' | 'flying';
const BEST_KEY = 'studyblog:reaction-best';

/** 反応速度テスト: 画面が緑に変わった瞬間をクリック。人間の反応時間（約200ms）を体感する */
export function ReactionTest() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [ms, setMs] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const startedAt = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(BEST_KEY);
      if (v) setBest(Number(v));
    } catch { /* ignore */ }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);

  function arm() {
    setPhase('ready');
    timer.current = setTimeout(() => {
      startedAt.current = performance.now();
      setPhase('go');
    }, 900 + Math.random() * 2600);
  }

  function hit() {
    if (phase === 'ready') {
      if (timer.current) clearTimeout(timer.current);
      setPhase('flying');
      return;
    }
    if (phase === 'go') {
      const t = Math.round(performance.now() - startedAt.current);
      setMs(t);
      setPhase('result');
      if (best === null || t < best) {
        setBest(t);
        try { localStorage.setItem(BEST_KEY, String(t)); } catch { /* ignore */ }
      }
    }
  }

  const label =
    phase === 'idle' ? 'クリックして開始' :
    phase === 'ready' ? '……緑を待て……' :
    phase === 'go' ? '今だ!' :
    phase === 'flying' ? 'フライング!' :
    `${ms} ms`;

  return (
    <div className="reaction">
      <button
        className={`reaction-btn ${phase === 'go' ? 'go' : ''} ${phase === 'ready' ? 'ready' : ''} ${phase === 'flying' ? 'flying' : ''}`}
        onClick={() => (phase === 'idle' || phase === 'flying' || phase === 'result' ? arm() : hit())}
      >
        <span className="reaction-ms">{label}</span>
        {(phase === 'idle' || phase === 'result') && best !== null && (
          <span className="reaction-best">自己ベスト {best} ms</span>
        )}
      </button>
      <p className="widget-note">
        赤い間は我慢して、緑に変わった瞬間をクリック。人間の反応時間はおよそ 200〜250 ms——CPU のクロック周期（ナノ秒）と比べると、いかにコンピュータが速いかを実感できます。
      </p>
    </div>
  );
}

/**
 * モンテカルロ法で円周率を推定。
 * 単位正方形にランダムな点を打ち、1/4 円に入った割合から π/4 を推定する。
 */
export function MonteCarloPi({ initial }: { initial?: Record<string, unknown> }) {
  const size = typeof initial?.size === 'number' ? initial.size : 280;
  const [points, setPoints] = useState<Array<{ x: number; y: number; inside: boolean }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function addPoints(n: number) {
    const batch: Array<{ x: number; y: number; inside: boolean }> = [];
    for (let i = 0; i < n; i++) {
      const x = Math.random();
      const y = Math.random();
      batch.push({ x, y, inside: x * x + y * y <= 1 });
    }
    setPoints((prev) => [...prev.slice(-40000), ...batch]);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    // 1/4 円のガイド
    ctx.strokeStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.arc(0, size, size, 0, Math.PI / 2);
    ctx.stroke();
    for (const p of points) {
      ctx.fillStyle = p.inside ? '#2563eb' : '#f59e0b';
      ctx.fillRect(p.x * size - 1, (1 - p.y) * size - 1, 2, 2);
    }
  }, [points, size]);

  const inside = points.filter((p) => p.inside).length;
  const estimate = points.length ? (4 * inside) / points.length : 0;

  return (
    <div className="widget-controls" style={{ alignItems: 'flex-start', flexWrap: 'wrap', display: 'flex', gap: 16 }}>
      <canvas ref={canvasRef} style={{ width: size, height: size, maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8 }} />
      <div>
        <p className="widget-note">
          単位正方形の中にランダムな点を打つと、1/4 円に入る確率は π/4。点の数が増えるほど推定値が <strong>π ≈ 3.14159…</strong> に近づきます（大数の法則）。
        </p>
        <div className="widget-controls">
          {[100, 1000, 5000].map((n) => (
            <button key={n} onClick={() => addPoints(n)}>+{n} 点</button>
          ))}
          <button onClick={() => setPoints([])}>リセット</button>
        </div>
        <p className="mc-estimate">
          打点数: {points.length.toLocaleString()}　推定値:
          <strong> {points.length ? estimate.toFixed(5) : '—'}</strong>（誤差 {points.length ? Math.abs(Math.PI - estimate).toFixed(5) : '—'}）
        </p>
      </div>
    </div>
  );
}
