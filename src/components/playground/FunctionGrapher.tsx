import { useState } from 'react';
import { GraphCanvas } from './GraphCanvas';

/** 関数グラフ描画プレイグラウンド: y = a*x^2 + b*x + c と y = a*sin(b*x)+c を切替 */
export function FunctionGrapher({ initial }: { initial?: Record<string, unknown> }) {
  const [kind, setKind] = useState<'poly' | 'sin'>((initial?.kind as 'poly') ?? 'poly');
  const [a, setA] = useState((initial?.a as number) ?? 1);
  const [b, setB] = useState((initial?.b as number) ?? 0);
  const [c, setC] = useState((initial?.c as number) ?? 0);

  const f =
    kind === 'poly'
      ? (x: number) => a * x * x + b * x + c
      : (x: number) => a * Math.sin(b * x) + c;

  return (
    <div className="widget">
      <div className="widget-controls">
        <label>
          種類:
          <select value={kind} onChange={(e) => setKind(e.target.value as 'poly' | 'sin')}>
            <option value="poly">y = ax² + bx + c</option>
            <option value="sin">y = a·sin(bx) + c</option>
          </select>
        </label>
        <Slider label="a" value={a} set={setA} />
        <Slider label="b" value={b} set={setB} />
        <Slider label="c" value={c} set={setC} />
      </div>
      <GraphCanvas
        width={520}
        height={400}
        viewport={{ xmin: -8, xmax: 8, ymin: -6, ymax: 10 }}
        functions={[{ f, color: '#2563eb' }]}
      />
      <p className="widget-note">
        スライダーを動かすと、係数 <strong>a, b, c</strong> の効果がリアルタイムでわかります。
        特に <strong>a の符号</strong>（下に凸/上に凸・振幅の向き）と
        <strong> c の平行移動</strong>に注目しましょう。
      </p>
    </div>
  );
}

function Slider({ label, value, set }: { label: string; value: number; set: (n: number) => void }) {
  return (
    <label className="slider">
      {label} = <code>{value.toFixed(1)}</code>
      <input type="range" min={-5} max={5} step={0.1} value={value} onChange={(e) => set(+e.target.value)} />
    </label>
  );
}
