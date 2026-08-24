import { useState } from 'react';
import type { QuizQuestion } from '../content/types';
import { renderInline, renderMathInText } from '../lib/math-render';

/**
 * 確認クイズ: 選択式の問題をクライアント側で自動判定する。
 * SSR では未選択状態を静的出力するので SSG の決定性は保たれる。
 */
export function QuizBlock({ title, questions }: { title?: string; questions: QuizQuestion[] }) {
  const [chosen, setChosen] = useState<Record<number, number>>({});

  return (
    <div className="quiz-box">
      <div className="quiz-title">{title ?? '確認クイズ'}</div>
      {questions.map((q, qi) => {
        const selected = chosen[qi];
        const answered = selected !== undefined;
        const correct = q.answerIndex;
        return (
          <div key={qi} className="quiz-question">
            <p className="quiz-q-text">{renderInline(`**問${qi + 1}.** ${q.question}`)}</p>
            <div className="quiz-choices">
              {q.choices.map((c, ci) => {
                let cls = 'quiz-choice';
                if (answered) {
                  if (ci === correct) cls += ' correct';
                  else if (ci === selected) cls += ' wrong';
                  else cls += ' dim';
                }
                return (
                  <button key={ci} className={cls} disabled={answered} onClick={() => setChosen((s) => ({ ...s, [qi]: ci }))}>
                    <span className="quiz-choice-label">{String.fromCharCode(65 + ci)}</span>
                    {renderInline(c)}
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className={`quiz-feedback ${selected === correct ? 'ok' : 'ng'}`}>
                {selected === correct ? '⭕ 正解！' : `❌ 不正解。正解は ${String.fromCharCode(65 + correct)} です。`}
                {q.explanation && <span className="quiz-explanation">{renderInline(q.explanation)}</span>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
