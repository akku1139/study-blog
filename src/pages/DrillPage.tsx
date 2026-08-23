import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MathDrill, drillTopics } from '../components/playground/MathDrill';

const TOPIC_NOTES: Record<string, string> = {
  'quadratic-equation': '中学数学（二次関数）',
  'simultaneous-linear': '中学数学（連立方程式）',
  'fraction-arithmetic': '中学数学（分数の計算）',
  'exponent-laws': '中学数学（文字と式）',
  'percent-calc': '中学数学（割合・百分率）',
  'unit-si': '中学理科（単位の換算）',
  'mol-mass': '高校化学（物質量と式量）',
  'irregular-verbs': '中学英語（不規則動詞の活用）',
  'era-history': '中学社会（歴史事件の年代）',
  'polynomial-differentiate': '高校数学II（微分）',
  'definite-integral': '高校数学II（積分）',
  'special-angles': '高校数学I（三角比）',
  'sequence-terms': '高校数学C（数列）',
  'log-evaluate': '高校数学II（対数）',
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

  // カテゴリ別の表示順（未分類は末尾に回す）
  const ORDER: Array<[string, string[]]> = [
    ['中学数学', ['fraction-arithmetic', 'percent-calc', 'simultaneous-linear', 'exponent-laws', 'quadratic-equation']],
    ['中学英語・理科・社会', ['irregular-verbs', 'unit-si', 'era-history']],
    ['高校数学', ['special-angles', 'log-evaluate', 'polynomial-differentiate', 'definite-integral', 'sequence-terms']],
    ['理科（高校）・情報', ['mol-mass', 'hydrocarbon', 'binary-convert']],
  ];
  const shown = new Set(ORDER.flatMap(([, ks]) => ks));
  const rest = normal.filter(([k]) => !shown.has(k));

  const renderCard = ([key, t]: [string, { label: string }]) => (
    <button
      key={key}
      className={`drill-card ${selected === key ? 'active' : ''}`}
      onClick={() => setSelected(key)}
    >
      <strong>{t.label}</strong>
      <span>{TOPIC_NOTES[key] ?? ''}</span>
    </button>
  );

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

      {ORDER.map(([name, keys]) => (
        <section key={name}>
          <h2>{name}</h2>
          <section className="drill-grid">{keys.map((k) => renderCard([k, drillTopics[k]]))}</section>
        </section>
      ))}
      {rest.length > 0 && (
        <section>
          <h2>その他</h2>
          <section className="drill-grid">{rest.map(renderCard)}</section>
        </section>
      )}

      <h2>🔥 激ムズ</h2>
      <section className="drill-grid">{hard.map(renderCard)}</section>

      <div className="widget">
        <MathDrill key={selected} initial={{ topic: selected }} />
      </div>
    </div>
  );
}
