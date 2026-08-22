import { useEffect, useRef, useState } from 'react';

// ---------- ガルトン板: 二項分布が正規分布に向かう様子を見る ----------
interface Ball {
  x: number;
  y: number;
  step: number; // 次に当たる段
  progress: number;
  bin: number; // 落ちるビン（右回数）
}

export function GaltonBoard({ initial }: { initial?: Record<string, unknown> }) {
  const rows = typeof initial?.rows === 'number' ? initial.rows : 9;
  const W = 340;
  const rowH = 26;
  const topY = 24;
  const binTop = topY + rows * rowH + 10;
  const H = binTop + 110;
  const spacing = W / (rows + 2);
  const cx = W / 2;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const balls = useRef<Ball[]>([]);
  const pending = useRef(0);
  const binsRef = useRef<number[]>(new Array(rows + 1).fill(0));
  const raf = useRef(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function draw() {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, W, H);
      // 釘
      for (let r = 0; r < rows; r++) {
        const count = r + 1;
        const y = topY + r * rowH;
        for (let i = 0; i < count; i++) {
          const x = cx + (i - (count - 1) / 2) * spacing;
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // ビン（ヒストグラム）
      const bins = binsRef.current;
      const max = Math.max(1, ...bins);
      const bw = spacing * 0.8;
      for (let b = 0; b <= rows; b++) {
        const x = cx + (b - rows / 2) * spacing;
        const h = (bins[b] / max) * 96;
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(x - bw / 2, H - h, bw, h);
        ctx.strokeStyle = '#e2e8f0';
        ctx.strokeRect(x - bw / 2, H - 96, bw, 96);
      }
      // ボール
      for (const ball of balls.current) {
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      // 新規投入
      if (pending.current > 0 && Math.random() < 0.35) {
        pending.current--;
        balls.current.push({ x: cx, y: topY - 14, step: 0, progress: 0, bin: 0 });
      }
      const finished: number[] = [];
      for (let i = 0; i < balls.current.length; i++) {
        const ball = balls.current[i];
        ball.progress += 0.12;
        if (ball.step < rows) {
          if (ball.progress >= 1) {
            // 釘に当たって左右どちらかに
            const right = Math.random() < 0.5 ? 1 : 0;
            ball.bin += right;
            ball.x += (right === 1 ? 0.5 : -0.5) * spacing;
            ball.y += rowH;
            ball.step++;
            ball.progress = 0;
          }
        } else {
          // ビンへ落ちる
          ball.y += 6;
          if (ball.y >= H - 8) {
            binsRef.current[ball.bin]++;
            finished.push(i);
          }
        }
      }
      for (const i of finished.reverse()) balls.current.splice(i, 1);
      draw();
      raf.current = requestAnimationFrame(loop);
    }
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [rows, W, H, cx, spacing, topY, rowH]);

  function drop(n: number) {
    pending.current += n;
    setTotal((t) => t + n);
  }
  function reset() {
    pending.current = 0;
    balls.current = [];
    binsRef.current = new Array(rows + 1).fill(0);
    setTotal(0);
  }

  return (
    <div>
      <div className="widget-controls" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        {[1, 50, 300].map((n) => (
          <button key={n} onClick={() => drop(n)}>{n} 個落とす</button>
        ))}
        <button onClick={reset}>リセット</button>
        <span className="drill-count">合計 {total.toLocaleString()} 個</span>
      </div>
      <canvas ref={canvasRef} style={{ width: W, height: H, maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8 }} />
      <p className="widget-note">
        釘のたびに左右 1/2 ずつに分かれるので、左端から b 番目のビンに入る確率は二項分布 B({rows}, ½)。ボールを増やすと中央が高く両裾が低い**正規分布の形**が現れます。
      </p>
    </div>
  );
}

// ---------- ひまわりの種と黄金角 ----------
const GOLDEN_ANGLE_DEG = 360 * (1 - 1 / ((1 + Math.sqrt(5)) / 2)); // ≈137.5077°

export function GoldenSunflower() {
  const [count, setCount] = useState(500);
  const [angleDeg, setAngleDeg] = useState(Number(GOLDEN_ANGLE_DEG.toFixed(3)));
  const size = 320;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#fffbeb';
    ctx.fillRect(0, 0, size, size);
    const maxR = size / 2 - 8;
    ctx.fillStyle = '#b45309';
    for (let k = 1; k <= count; k++) {
      const r = maxR * Math.sqrt(k / count);
      const theta = (k * angleDeg * Math.PI) / 180;
      const x = size / 2 + r * Math.cos(theta);
      const y = size / 2 + r * Math.sin(theta);
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [count, angleDeg]);

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <canvas ref={canvasRef} style={{ width: size, height: size, maxWidth: '100%', border: '1px solid #fde68a', borderRadius: '50%' }} />
      <div style={{ minWidth: 220 }}>
        <label className="slider">種の数
          <input type="range" min={100} max={2000} step={100} value={count} onChange={(e) => setCount(Number(e.target.value))} />
        </label>
        <label className="slider">
          回転角 θ = {angleDeg.toFixed(3)}°（黄金角 ≈ {GOLDEN_ANGLE_DEG.toFixed(3)}°）
          <input type="range" min={134} max={141} step={0.01} value={angleDeg} onChange={(e) => setAngleDeg(Number(e.target.value))} />
        </label>
        <button onClick={() => setAngleDeg(Number(GOLDEN_ANGLE_DEG.toFixed(3)))}>黄金角に戻す</button>
        <p className="widget-note">
          新しい種は古い種から約 137.5° ずつ回った場所にできる。この<strong>黄金角</strong>はフィボナッチ数列の隣項の比の極限から決まり、重なりも隙間もない詰め方を実現します。角度を少し変えると縞模様が現れます——本物のひまわりはこの数学を使っています。
        </p>
      </div>
    </div>
  );
}

// ---------- コラーツ予想（3n+1 問題） ----------
function collatzSteps(n: number): { seq: number[]; max: number } {
  const seq = [n];
  let v = n;
  let max = n;
  while (v !== 1 && seq.length < 1000) {
    v = v % 2 === 0 ? v / 2 : 3 * v + 1;
    max = Math.max(max, v);
    seq.push(v);
  }
  return { seq, max };
}

export function Collatz() {
  const [input, setInput] = useState('27');
  const [result, setResult] = useState<ReturnType<typeof collatzSteps> | null>(null);
  const [longest, setLongest] = useState<{ n: number; steps: number } | null>(null);

  function run() {
    const n = Number(input);
    if (!Number.isInteger(n) || n < 1 || n > 99999) return;
    setResult(collatzSteps(n));
  }
  function searchLongest() {
    let bestN = 1;
    let bestSteps = 0;
    for (let i = 1; i <= 1000; i++) {
      const s = collatzSteps(i).seq.length;
      if (s > bestSteps) {
        bestSteps = s;
        bestN = i;
      }
    }
    setLongest({ n: bestN, steps: bestSteps });
  }

  return (
    <div>
      <div className="widget-controls" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          className="anzan-input"
          inputMode="numeric"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && run()}
          aria-label="初期値"
        />
        <button onClick={run}>数列を作る</button>
        <button onClick={searchLongest}>1〜1000で一番長いのは?</button>
      </div>
      {result && (
        <p className="mc-estimate">
          {input} → <strong>{result.seq.length - 1} ステップ</strong>で 1 に到達。最大値は{' '}
          <strong>{result.max.toLocaleString()}</strong>。道のり:
          {' '}
          {result.seq.slice(0, 15).join(' → ')}
          {result.seq.length > 15 ? ' → …' : ''}
        </p>
      )}
      {longest && (
        <p className="mc-estimate">
          1〜1000 で最長は <strong>{longest.n}</strong>（{longest.steps - 1} ステップ）
        </p>
      )}
      <p className="widget-note">
        偶数なら 2 で割り、奇数なら 3n+1——これを繰り返すと<strong>必ず 1 に到着する</strong>……はずですが、実はこれ、誰も証明できていない「コラーツ予想」です。気になる数で試してみてください。
      </p>
    </div>
  );
}

// ---------- 複利とネイピア数 e ----------
export function CompoundE() {
  const [n, setN] = useState(12);
  const v = Math.pow(1 + 1 / n, n);
  const e = Math.E;
  const pct = Math.max(0, Math.min(100, ((v - 2) / (e - 2)) * 100));

  return (
    <div>
      <label className="slider">
        1 年に複利を回す回数 n = {n}
        <input type="range" min={1} max={365} value={n} onChange={(ev) => setN(Number(ev.target.value))} />
      </label>
      <p className="mc-estimate">
        年利 100% を年 {n} 回の複利で運用すると、1 年後の元金は <strong>({`1 + 1/${n}`})<sup>{n}</sup> = {(1 + 1 / n).toFixed(n >= 100 ? 4 : 2)}<sup>{n}</sup> ≈ {v.toFixed(6)}</strong> 倍。
        n → ∞ の極限は <strong>e = {e.toFixed(6)}…</strong>（あと {(e - v).toFixed(6)}）
      </p>
      <div style={{ background: '#e2e8f0', borderRadius: 999, height: 12, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, background: '#2563eb', height: '100%', transition: 'width .15s ease' }} />
      </div>
      <p className="widget-note">
        複利の回数を増やしても儲けは e 倍で頭打ちになります。銀行・確率・微分方程式に現れる自然な定数 e の誕生場面です（n → ∞ で (1 + 1/n)ⁿ → e）。
      </p>
    </div>
  );
}
