import { useState } from 'react';

/** 確率シミュレータ：サイコロを大量に振って大数の法則を体感する */
export function ProbabilitySimulator() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const total = counts.reduce((s, n) => s + n, 0);

  function roll(n: number) {
    setCounts((prev) => {
      const next = [...prev];
      for (let i = 0; i < n; i++) next[Math.floor(Math.random() * 6)]++;
      return next;
    });
  }
  function reset() {
    setCounts([0, 0, 0, 0, 0, 0]);
  }

  const maxCount = Math.max(...counts, 1);

  return (
    <div className="widget">
      <div className="widget-controls">
        <button onClick={() => roll(1)}>1回ふる</button>
        <button onClick={() => roll(10)}>10回</button>
        <button onClick={() => roll(1000)}>1000回</button>
        <button onClick={reset}>リセット</button>
        <span className="text-sm text-slate-500">合計 {total.toLocaleString()} 回</span>
      </div>
      <div className="dice-chart" role="img" aria-label="出た目の出現回数グラフ">
        {counts.map((n, i) => (
          <div key={i} className="dice-bar-col">
            <div className="dice-count">{n.toLocaleString()}</div>
            <div className="dice-bar-wrap">
              <div
                className="dice-bar"
                style={{
                  height: `${(n / maxCount) * 140}px`,
                  background: '#2563eb',
                }}
              />
            </div>
            <div className="text-sm">{i + 1}</div>
            <div className="text-xs text-slate-500">{total ? ((n / total) * 100).toFixed(1) : '0.0'}%</div>
          </div>
        ))}
      </div>
      <p className="widget-note">
        理論値はどの目も <strong>1/6 ≒ 16.7%</strong>。回数を増やすほど理論値に近づく様子が見えます。
        これが<strong>大数の法則</strong>で、「確率」を実験的に定義する根拠になります。
      </p>
    </div>
  );
}
