import { useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'running' | 'input' | 'result';

/**
 * フラッシュ暗算: 数字を一瞬ずつ表示して和を答えるゲーム。
 * SSR では設定 UI とスタートボタンのみを出す（決定的）。
 */
export function FlashAnzan({ initial }: { initial?: Record<string, unknown> }) {
  const [digits, setDigits] = useState(2);
  const [count, setCount] = useState(5);
  const [intervalMs, setIntervalMs] = useState(700);
  const [negatives, setNegatives] = useState(initial?.negatives === true);
  const [phase, setPhase] = useState<Phase>('idle');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [shown, setShown] = useState(0);
  const [answer, setAnswer] = useState('');
  const [streak, setStreak] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function start() {
    const n: number[] = [];
    for (let i = 0; i < count; i++) {
      const mag = Math.floor(Math.random() * Math.pow(10, digits));
      if (negatives && Math.random() < 0.4 && i > 0) n.push(-mag);
      else n.push(mag);
    }
    setNumbers(n);
    setShown(0);
    setAnswer('');
    setPhase('running');
    let idx = 0;
    const tick = () => {
      idx++;
      if (idx >= n.length) {
        setShown(n.length);
        setPhase('input');
        return;
      }
      setShown(idx);
      timer.current = setTimeout(tick, intervalMs);
    };
    timer.current = setTimeout(tick, intervalMs);
  }

  function check() {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const ok = Number(answer) === sum;
    setStreak((s) => (ok ? s + 1 : 0));
    setPhase('result');
  }

  return (
    <div className="flash-anzan">
      <div className="widget-controls">
        <label className="slider">桁数
          <select value={digits} onChange={(e) => setDigits(Number(e.target.value))} disabled={phase === 'running'}>
            {[1, 2, 3, 4].map((d) => <option key={d} value={d}>{d} 桁</option>)}
          </select>
        </label>
        <label className="slider">項数
          <select value={count} onChange={(e) => setCount(Number(e.target.value))} disabled={phase === 'running'}>
            {[3, 5, 8, 10].map((c) => <option key={c} value={c}>{c} 項</option>)}
          </select>
        </label>
        <label className="slider">スピード
          <select value={intervalMs} onChange={(e) => setIntervalMs(Number(e.target.value))} disabled={phase === 'running'}>
            {[1500, 1000, 700, 450, 300].map((ms) => <option key={ms} value={ms}>{(ms / 1000).toFixed(2)} 秒/枚</option>)}
          </select>
        </label>
        <label className="check-label">
          <input type="checkbox" checked={negatives} disabled={phase === 'running'} onChange={(e) => setNegatives(e.target.checked)} />
          マイナスもまぜる
        </label>
      </div>
      {phase === 'idle' && (
        <div className="widget-controls">
          <button onClick={start}>スタート!</button>
          {streak > 0 && <span className="anzan-streak">🔥 連続正解 {streak}</span>}
        </div>
      )}
      {phase === 'running' && (
        <div className="flash-stage">
          <span className="flash-num">{numbers[shown]}</span>
          <span className="flash-progress">{shown + 1} / {numbers.length}</span>
        </div>
      )}
      {phase === 'input' && (
        <div className="widget-controls">
          <input
            className="anzan-input"
            autoFocus
            inputMode="numeric"
            value={answer}
            placeholder="合計は?"
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
          />
          <button onClick={check}>答える</button>
        </div>
      )}
      {phase === 'result' && (() => {
        const sum = numbers.reduce((a, b) => a + b, 0);
        const ok = Number(answer) === sum;
        return (
          <div className={`quiz-feedback ${ok ? 'ok' : 'ng'}`}>
            {ok ? `⭕ 正解! 答えは ${sum}` : `❌ 答えは ${sum}（あなたの回答: ${answer || '無入力'}）`}
            {' '}
            <button onClick={start} style={{ marginLeft: 8 }}>もう一度</button>
          </div>
        );
      })()}
      <p className="widget-note">数字がフラッシュ表示されている間に足し算。暗算の練習にどうぞ。</p>
    </div>
  );
}

/** ストループ課題: 色言葉を「文字どおりではなくインクの色」で素早く判定する */
const STROOP_COLORS = [
  { name: 'あか', css: '#dc2626' },
  { name: 'あお', css: '#2563eb' },
  { name: 'きいろ', css: '#eab308' },
  { name: 'みどり', css: '#16a34a' },
] as const;

export function StroopTest({ initial }: { initial?: Record<string, unknown> }) {
  const rounds = typeof initial?.rounds === 'number' ? initial.rounds : 10;
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const [wordIdx, setWordIdx] = useState(0);
  const [inkIdx, setInkIdx] = useState(0);
  const [roundNo, setRoundNo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const shownAt = useRef(0);

  function nextQuestion() {
    let w = Math.floor(Math.random() * 4);
    let ink = w;
    while (ink === w) ink = Math.floor(Math.random() * 4); // 色と文字は必ず不一致
    setWordIdx(w);
    setInkIdx(ink);
    shownAt.current = performance.now();
  }

  function start() {
    setCorrect(0);
    setTimes([]);
    setRoundNo(1);
    setPhase('playing');
    nextQuestion();
  }

  function pick(i: number) {
    const t = performance.now() - shownAt.current;
    setTimes((ts) => [...ts, t]);
    if (i === inkIdx) setCorrect((c) => c + 1);
    if (roundNo >= rounds) {
      setPhase('done');
    } else {
      setRoundNo((r) => r + 1);
      nextQuestion();
    }
  }

  const avg = times.length ? times.reduce((a, b) => a + b, 0) / times.length : 0;

  return (
    <div className="stroop">
      {phase === 'idle' && (
        <div className="widget-controls">
          <button onClick={start}>スタート! ({rounds} 問)</button>
        </div>
      )}
      {phase === 'playing' && (
        <>
          <p className="widget-note"><strong>{roundNo} / {rounds} 問:</strong> 「ひらがなの意味」ではなく、<strong>文字の色</strong>を押してください。</p>
          <div className="stroop-word" style={{ color: STROOP_COLORS[inkIdx].css }}>{STROOP_COLORS[wordIdx].name}</div>
          <div className="stroop-chips">
            {STROOP_COLORS.map((c, i) => (
              <button key={c.name} className="stroop-chip" style={{ background: c.css }} onClick={() => pick(i)} aria-label={c.name} />
            ))}
          </div>
        </>
      )}
      {phase === 'done' && (
        <div className={`quiz-feedback ${correct === rounds ? 'ok' : ''}`}>
          結果: {correct} / {rounds} 正解、平均 {(avg / 1000).toFixed(2)} 秒
          <button onClick={start} style={{ marginLeft: 8 }}>もう一度</button>
        </div>
      )}
      <p className="widget-note">色の名前を読む力と、色を見分ける力が干渉する「ストループ効果」の体験ゲームです。</p>
    </div>
  );
}
