import { useState } from 'react';
import { renderMathInText } from '../../lib/math-render';
import { hashSeed, mulberry32 } from '../../lib/rng';
import { drillTopics } from '../../lib/drill-topics';

export { drillTopics } from '../../lib/drill-topics';

/**
 * 無限ドリル: ランダムに問題を生成し続ける自己採点ドリル。
 * 初期問題はトピック名から決まる固定シードで生成するため SSR 出力は決定的。
 */
export function MathDrill({ initial }: { initial?: Record<string, unknown> }) {
  const initialTopic =
    typeof initial?.topic === 'string' && drillTopics[initial.topic] ? initial.topic : 'quadratic-equation';
  const [topicKey, setTopicKey] = useState(initialTopic);
  const [seed, setSeed] = useState(() => hashSeed(initialTopic));
  const [count, setCount] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const topic = drillTopics[topicKey];
  // 同じ seed → 同じ問題。SSR も同じ seed を使うので出力が一致する
  const problem = topic.generate(mulberry32(seed));

  function next() {
    setShowAnswer(false);
    setSeed((Math.random() * 0xffffffff) >>> 0);
    setCount((n) => n + 1);
  }
  function changeTopic(e: React.ChangeEvent<HTMLSelectElement>) {
    const k = e.target.value;
    setShowAnswer(false);
    setTopicKey(k);
    setSeed(hashSeed(k));
    setCount(1);
  }

  return (
    <div className="drill">
      <div className="widget-controls">
        <label className="slider">
          トピック
          <select value={topicKey} onChange={changeTopic}>
            {Object.entries(drillTopics).map(([k, t]) => (
              <option key={k} value={k}>{t.label}</option>
            ))}
          </select>
        </label>
        <span className="drill-count">第 {count} 問</span>
        <button onClick={() => setShowAnswer((s) => !s)}>{showAnswer ? '答えを隠す' : '答えを見る'}</button>
        <button onClick={next}>次の問題 →</button>
      </div>
      <div className="drill-question">{renderMathInText(problem.question)}</div>
      {showAnswer && problem.hint && (
        <p className="widget-note"><strong>ヒント:</strong> {renderInlineSafe(problem.hint)}</p>
      )}
      {showAnswer && (
        <div className="drill-answer">{renderInlineSafe(`**解答:** ${problem.answer}`)}</div>
      )}
      <p className="widget-note">紙に解いてから「答えを見る」で採点しよう。問題は無限に生成できます。</p>
    </div>
  );
}

function renderInlineSafe(text: string): React.ReactNode[] {
  return renderMathInText(text.replace(/\*\*/g, ''));
}
