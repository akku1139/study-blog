import { useEffect, useRef, useState } from 'react';

// ---------- 単振り子: 長さを変えると周期がどう変わるか ----------
export function Pendulum() {
  const [L, setL] = useState(1.0); // ひも長 [m]
  const g = 9.8;
  const T = 2 * Math.PI * Math.sqrt(L / g);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const LRef = useRef(L);
  useEffect(() => {
    LRef.current = L;
    document.title = document.title; // no-op（L 変更は再描画のみ）
  }, [L]);

  useEffect(() => {
    const W = 260;
    const Hh = 280;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = Hh * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const SLOWMO = 3; // ゆっくりめに見せる
    const t0 = performance.now();
    let raf = 0;
    function draw() {
      if (!ctx) return;
      const t = ((performance.now() - t0) / 1000) * SLOWMO;
      const len = LRef.current;
      const theta = 0.55 * Math.cos(Math.sqrt(g / len) * t);
      const cx = W / 2;
      const pivotY = 26;
      const rodPx = 60 + len * 80;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, W, Hh);
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(cx - 30, pivotY - 6, 60, 5);
      const bx = cx + Math.sin(theta) * rodPx;
      const by = pivotY + Math.cos(theta) * rodPx;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, pivotY);
      ctx.lineTo(bx, by);
      ctx.stroke();
      ctx.fillStyle = '#2563eb';
      ctx.beginPath();
      ctx.arc(bx, by, 14, 0, Math.PI * 2);
      ctx.fill();
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ width: 260, height: 280, border: '1px solid #e2e8f0', borderRadius: 8 }} />
      <div style={{ minWidth: 220 }}>
        <label className="slider">
          ひもの長さ L = {L.toFixed(1)} m
          <input type="range" min={0.3} max={2} step={0.1} value={L} onChange={(e) => setL(Number(e.target.value))} />
        </label>
        <p className="mc-estimate">
          理論上の周期 <strong>T = 2π√(L/g) ≈ {T.toFixed(2)} 秒</strong>（再生は約 1/3 速度のスローモーション）
        </p>
        <p className="widget-note">
          振り子の周期は<strong>長さだけ</strong>で決まり、おもりの重さや振れの大きさ（小さいうち）によらない——ガリレオが見つけた等時性です。
        </p>
      </div>
    </div>
  );
}

// ---------- ドップラー効果 ----------
export function Doppler() {
  const C = 120; // 音速 [px/s]
  const [vs, setVs] = useState(60); // 音源速度 [px/s]（C が音速相当）
  const stateRef = useRef({ x: 60, fronts: [] as Array<{ x: number; y: number; r: number }>, lastEmit: 0 });
  const vsRef = useRef(vs);
  useEffect(() => {
    vsRef.current = vs;
  }, [vs]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = 420;
    const Hh = 180;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = Hh * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let prev = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const s = stateRef.current;
      s.x += vsRef.current * dt;
      if (s.x > W + 40) {
        s.x = -40;
        s.fronts = [];
      }
      s.lastEmit += dt;
      if (s.lastEmit >= 0.12) {
        s.lastEmit = 0;
        s.fronts.push({ x: s.x, y: Hh / 2, r: 2 });
      }
      for (const f of s.fronts) f.r += C * dt;
      s.fronts = s.fronts.filter((f) => f.r < W);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, W, Hh);
      ctx.strokeStyle = 'rgba(37, 99, 235, .45)';
      for (const f of s.fronts) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(s.x, Hh / 2, 7, 0, Math.PI * 2);
      ctx.fill();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ratioLabel =
    vs === 0 ? '' : vs < 120 ? `進行方向の波長は ${((120 - vs) / 120).toFixed(2)} 倍、後方は ${((120 + vs) / 120).toFixed(2)} 倍` : '音速ちょうど! 円波が一点に重なり衝撃波（ソニックブーム）になります';

  return (
    <div>
      <label className="slider">
        音源の速さ v = {vs} （右へ移動。120 が音速相当）
        <input type="range" min={0} max={119} value={vs} onChange={(e) => setVs(Number(e.target.value))} />
      </label>
      <canvas ref={canvasRef} style={{ width: 420, height: 180, maxWidth: '100%', border: '1px solid #e2e8f0', borderRadius: 8 }} />
      <p className="widget-note">
        音源が近づく側では波が押し縮まって波長が短くなり（音が高く）、遠ざかる側では引き伸ばされます（音が低く）。{ratioLabel}
      </p>
    </div>
  );
}

// ---------- 半減期シミュレータ ----------
export function HalfLife() {
  const TOTAL = 400;
  const [atoms, setAtoms] = useState<boolean[]>(() => Array(TOTAL).fill(true)); // true = 未壊変
  const [year, setYear] = useState(0);
  const [history, setHistory] = useState<number[]>([TOTAL]);
  const gridRef = useRef<HTMLCanvasElement>(null);
  const curveRef = useRef<HTMLCanvasElement>(null);

  function advance() {
    setAtoms((prev) => {
      const next = prev.map((a) => (a ? Math.random() >= 0.5 : false));
      setHistory((h) => [...h, next.filter(Boolean).length]);
      return next;
    });
    setYear((y) => y + 1);
  }
  function reset() {
    setAtoms(Array(TOTAL).fill(true));
    setHistory([TOTAL]);
    setYear(0);
  }

  useEffect(() => {
    // 原子の格子
    const c = gridRef.current;
    if (c) {
      const dpr = window.devicePixelRatio || 1;
      const S = 240;
      c.width = S * dpr;
      c.height = S * dpr;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, S, S);
        const cell = S / 20;
        atoms.forEach((alive, i) => {
          ctx.fillStyle = alive ? '#eab308' : '#d4d4d8';
          ctx.beginPath();
          ctx.arc(cell * (i % 20) + cell / 2, cell * Math.floor(i / 20) + cell / 2, cell * 0.32, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    // 減衰曲線
    const cc = curveRef.current;
    if (cc) {
      const dpr = window.devicePixelRatio || 1;
      const S = 240;
      cc.width = S * dpr;
      cc.height = S * dpr;
      const ctx = cc.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, S, S);
        ctx.strokeStyle = '#e2e8f0';
        ctx.strokeRect(24, 10, S - 34, S - 40);
        ctx.strokeStyle = '#dc2626';
        ctx.beginPath();
        history.forEach((n, i) => {
          const x = 24 + ((S - 44) * i) / Math.max(history.length - 1, 1);
          const y = 10 + (S - 40) * (1 - n / TOTAL);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();
        // 半減期の理論線
        ctx.strokeStyle = 'rgba(148, 163, 184, .7)';
        ctx.setLineDash([4, 4]);
        for (const half of [1, 2, 3]) {
          const x = 24 + ((S - 44) * half) / 4; // 4年分の幅を想定した目盛り
          if (x <= S - 10) {
            ctx.beginPath();
            ctx.moveTo(x, 10);
            ctx.lineTo(x, S - 30);
            ctx.stroke();
          }
        }
        ctx.setLineDash([]);
      }
    }
  }, [atoms, history]);

  const remaining = atoms.filter(Boolean).length;

  return (
    <div>
      <div className="widget-controls" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <button onClick={advance}>1 年経過させる</button>
        <button onClick={reset}>リセット</button>
        <span className="drill-count">{year} 年経過・残り {remaining} 個</span>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <canvas ref={gridRef} style={{ width: 240, height: 240, border: '1px solid #e2e8f0', borderRadius: 8 }} />
        <canvas ref={curveRef} style={{ width: 240, height: 240, border: '1px solid #e2e8f0', borderRadius: 8 }} />
      </div>
      <p className="widget-note">
        黄色い原子 400 個のうち、毎年半分ずつがランダムに壊変します。点線が半減期ごとの目安。個々の原子の壊変は予測できなくても、大量に集めると N = N₀(1/2)^(t/T) に従う——確率がつくる法則です。
      </p>
    </div>
  );
}

// ---------- 特殊相対論: 時間の遅れ ----------
const TD_PRESETS: Array<{ label: string; beta: number }> = [
  { label: '新幹線 300 km/h', beta: 300 / (3e5) },
  { label: 'ISS 7.7 km/s', beta: 7.7 / 3e4 },
  { label: '0.1c', beta: 0.1 },
  { label: '0.9c', beta: 0.9 },
  { label: '0.99c', beta: 0.99 },
];

export function TimeDilation() {
  const [beta, setBeta] = useState(0.9);
  const gamma = 1 / Math.sqrt(1 - beta * beta);
  const fmtGamma = gamma > 1.001 ? gamma.toFixed(6) : gamma.toExponential(3);

  return (
    <div>
      <label className="slider">
        宇宙船の速度 v = {(beta * 100).toFixed(1)}% c（光速 c を 100 とする）
        <input type="range" min={0} max={999} value={Math.round(beta * 999)} onChange={(e) => setBeta(Number(e.target.value) / 999)} />
      </label>
      <div className="widget-controls" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {TD_PRESETS.map((p) => (
          <button key={p.label} onClick={() => setBeta(p.beta)}>{p.label}</button>
        ))}
      </div>
      <p className="mc-estimate">
        ローレンツ因子 γ = 1/√(1 − v²/c²) ≈ <strong>{fmtGamma}</strong>
        <br />
        宇宙船の中で 1 年過ごすあいだ、地球では <strong>{gamma.toFixed(4)} 年</strong>が経過する（β = {beta.toFixed(4)}）
      </p>
      <p className="widget-note">
        光速度不変を受け入れると「同時」は観測者ごとに変わります。運動する時計はゆっくり進む——GPS 衛星の時計補正にも実際に使われている効果です。
      </p>
    </div>
  );
}

// ---------- pH スケール ----------
function phColor(ph: number): string {
  // 万能指示薬風: 酸性=赤 → 中性=緑 → 塩基性=紫
  const stops: Array<[number, [number, number, number]]> = [
    [0, [220, 38, 38]],
    [4, [249, 115, 22]],
    [7, [22, 163, 74]],
    [11, [59, 130, 246]],
    [14, [147, 51, 234]],
  ];
  for (let i = 0; i < stops.length - 1; i++) {
    const [a, ca] = stops[i];
    const [b, cb] = stops[i + 1];
    if (ph >= a && ph <= b) {
      const t = (ph - a) / (b - a);
      const mix = ca.map((v, j) => Math.round(v + (cb[j] - v) * t));
      return `rgb(${mix[0]},${mix[1]},${mix[2]})`;
    }
  }
  return '#16a34a';
}

export function PhScale() {
  const [ph, setPh] = useState(7);
  const hConc = Math.pow(10, -ph);
  const kind = ph < 7 ? '酸性' : ph === 7 ? '中性' : '塩基性';
  const examples: Array<[number, string]> = [
    [1, '胃酸'], [3, 'レモン汁'], [5, 'コーヒー'], [7, '純水'], [9, '重曹水'], [11, 'アンモニア水'], [13, '漂白剤'],
  ];
  const near = examples.reduce((a, b) => (Math.abs(b[0] - ph) < Math.abs(a[0] - ph) ? b : a));

  return (
    <div>
      <label className="slider">
        pH = {ph}
        <input type="range" min={0} max={14} step={1} value={ph} onChange={(e) => setPh(Number(e.target.value))} />
      </label>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0' }}>
        <div style={{ width: 64, height: 64, borderRadius: 12, background: phColor(ph), border: '1px solid #cbd5e1' }} />
        <div>
          <p className="mc-estimate">
            <strong>{kind}</strong>（例: {near[1]} が pH {near[0]}）
            <br />
            水素イオン濃度 [H⁺] = 10<sup>−{ph}</sup> mol/L
          </p>
        </div>
      </div>
      <p className="widget-note">
        pH が 1 違うと水素イオン濃度は<strong> 10 倍</strong>違う——pH スケールは対数スケールです。pH 3 のレモン汁は pH 4 のオレンジ果汁の 10 倍すっぱい（イオンとしては）。
      </p>
    </div>
  );
}

// ---------- 元素記号クイズ ----------
const ELEMENTS: Array<[string, string]> = [
  ['H', '水素'], ['He', 'ヘリウム'], ['Li', 'リチウム'], ['Be', 'ベリリウム'], ['B', 'ホウ素'],
  ['C', '炭素'], ['N', '窒素'], ['O', '酸素'], ['F', 'フッ素'], ['Ne', 'ネオン'],
  ['Na', 'ナトリウム'], ['Mg', 'マグネシウム'], ['Al', 'アルミニウム'], ['Si', 'ケイ素'], ['P', 'リン'],
  ['S', '硫黄'], ['Cl', '塩素'], ['Ar', 'アルゴン'], ['K', 'カリウム'], ['Ca', 'カルシウム'],
  ['Fe', '鉄'], ['Cu', '銅'], ['Zn', '亜鉛'], ['Ag', '銀'], ['Sn', 'スズ'],
  ['Au', '金'], ['Hg', '水銀'], ['Pb', '鉛'],
];

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ElementQuiz({ initial }: { initial?: Record<string, unknown> }) {
  const rounds = typeof initial?.rounds === 'number' ? initial.rounds : 10;
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const [target, setTarget] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [roundNo, setRoundNo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);

  function ask() {
    const t = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
    const wrongs = shuffled(ELEMENTS.filter((e) => e[0] !== t[0])).slice(0, 3);
    setTarget(ELEMENTS.indexOf(t));
    setChoices(shuffled([t[0], ...wrongs.map((w) => w[0])]));
    setAnswered(null);
  }

  function start() {
    setCorrect(0);
    setRoundNo(1);
    setPhase('playing');
    ask();
  }

  function pick(sym: string) {
    if (answered !== null) return;
    setAnswered(choices.indexOf(sym));
    if (sym === ELEMENTS[target][0]) setCorrect((c) => c + 1);
    setTimeout(() => {
      if (roundNo >= rounds) setPhase('done');
      else {
        setRoundNo((r) => r + 1);
        ask();
      }
    }, 900);
  }

  return (
    <div>
      {phase === 'idle' && <button onClick={start}>スタート! ({rounds} 問)</button>}
      {phase === 'playing' && (
        <>
          <p className="widget-note"><strong>{roundNo} / {rounds} 問:</strong>「{ELEMENTS[target][1]}」の元素記号は?</p>
          <div className="quiz-choices">
            {choices.map((sym) => {
              let cls = 'quiz-choice';
              if (answered !== null) {
                if (sym === ELEMENTS[target][0]) cls += ' correct';
                else if (sym === answered?.toString() || sym === choices[answered]) cls += ' wrong';
                else cls += ' dim';
              }
              return (
                <button key={sym} className={cls} disabled={answered !== null} onClick={() => pick(sym)}>
                  <span className="quiz-choice-label">{sym}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
      {phase === 'done' && (
        <div className={`quiz-feedback ${correct === rounds ? 'ok' : ''}`}>
          結果: {correct} / {rounds} 正解
          <button onClick={start} style={{ marginLeft: 8 }}>もう一度</button>
        </div>
      )}
      <p className="widget-note">元素記号は覚えるしかないものの代表選手。まずはこの 28 元素から。</p>
    </div>
  );
}
