import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MathDrill, drillTopics } from '../components/playground/MathDrill';

const TOPIC_NOTES: Record<string, string> = {
  'quadratic-equation': '中学数学（二次関数）',
  'simultaneous-linear': '中学数学（連立方程式）',
  'fraction-arithmetic': '中学数学（分数の計算）',
  'exponent-laws': '中学数学（文字と式）',
  'polynomial-differentiate': '高校数学II（微分）',
  'definite-integral': '高校数学II（積分）',
  'special-angles': '高校数学I（三角比）',
  'sequence-terms': '高校数学C（数列）',
  'factorize': '因数分解（中学〜高校）',
  'hard-differentiate': '激ムズ: 積・合成関数の微分',
  'indefinite-integrate': '激ムズ: 不定積分・置換積分',
  'limits': '激ムズ: 極限（数学III）',
  'binary-convert': '情報I（2進数変換）',
  'hydrocarbon': '化学（炭化水素の命名）',
};

/** 無限ドリルポータル: 全トピックを選んでその場で解ける */
export function DrillPage() {
  const [params] = useSearchParams();
  const initial = params.get('topic') ?? '';
  const [selected, setSelected] = useState(
    initial && drillTopics[initial] ? initial : 'quadratic-equation',
  );

  const entries = Object.entries(drillTopics);
  const HARD = new Set(['hard-differentiate', 'indefinite-integrate', 'limits']);
  const hard = entries.filter(([k]) => HARD.has(k));
  const normal = entries.filter(([k]) => !HARD.has(k));

  return (
    <div className="drill-page">
      <header className="subject-header" style={{ borderLeftColor: '#2563eb' }}>
        <span className="subject-icon large">⚡</span>
        <div>
          <h1>無限ドリル</h1>
          <p>
            ランダム生成の計算問題を無限に解けるトレーナー。全 {entries.length} トピック。
            問題はシード付き乱数で生成されるため、同じ問題に何度でも戻れます。
          </p>
        </div>
      </header>

      <section className="drill-grid">
        {normal.map(([key, t]) => (
          <button
            key={key}
            className={`drill-card ${selected === key ? 'active' : ''}`}
            onClick={() => setSelected(key)}
          >
            <strong>{t.label}</strong>
            <span>{TOPIC_NOTES[key] ?? ''}</span>
          </button>
        ))}
      </section>

      <h2>🔥 激ムズ</h2>
      <section className="drill-grid">
        {hard.map(([key, t]) => (
          <button
            key={key}
            className={`drill-card ${selected === key ? 'active' : ''}`}
            onClick={() => setSelected(key)}
          >
            <strong>{t.label}</strong>
            <span>{TOPIC_NOTES[key] ?? ''}</span>
          </button>
        ))}
      </section>

      <div className="widget">
        <MathDrill key={selected} initial={{ topic: selected }} />
      </div>
    </div>
  );
}
