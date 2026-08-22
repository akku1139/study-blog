import { useState } from 'react';

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 共通: 10問の4択ミニクイズを回す骨組み */
interface QuizItem {
  prompt: string; // 問題文に表示するもの
  answer: string;
}
function MiniChoiceQuiz({
  items,
  title,
  note,
  rounds = 10,
}: {
  items: QuizItem[];
  title: string;
  note: string;
  rounds?: number;
}) {
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const [itemIdx, setItemIdx] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [roundNo, setRoundNo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState<string | null>(null);

  function ask() {
    const t = items[Math.floor(Math.random() * items.length)];
    setItemIdx(items.indexOf(t));
    const wrongs = shuffled(items.filter((it) => it.answer !== t.answer)).slice(0, 3).map((it) => it.answer);
    setChoices(shuffled([t.answer, ...wrongs]));
    setAnswered(null);
  }
  function start() {
    setCorrect(0);
    setRoundNo(1);
    setAnswered(null);
    setPhase('playing');
    ask();
  }
  function pick(c: string) {
    if (answered !== null) return;
    setAnswered(c);
    if (c === items[itemIdx].answer) setCorrect((n) => n + 1);
    setTimeout(() => {
      if (roundNo >= rounds) setPhase('done');
      else {
        setRoundNo((r) => r + 1);
        ask();
      }
    }, 800);
  }

  return (
    <div>
      {phase === 'idle' && <button onClick={start}>スタート! ({rounds} 問)</button>}
      {phase === 'playing' && items[itemIdx] && (
        <>
          <p className="widget-note"><strong>{roundNo} / {rounds} 問:</strong> {title}</p>
          <div className="vocab-card">
            <span className="vocab-word">{items[itemIdx].prompt}</span>
          </div>
          <div className="quiz-choices">
            {choices.map((c) => {
              let cls = 'quiz-choice';
              if (answered !== null) {
                if (c === items[itemIdx].answer) cls += ' correct';
                else if (c === answered) cls += ' wrong';
                else cls += ' dim';
              }
              return (
                <button key={c} className={cls} disabled={answered !== null} onClick={() => pick(c)}>
                  {c}
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
      <p className="widget-note">{note}</p>
    </div>
  );
}

const KANJI_WORDS: Array<[string, string]> = [
  ['暫定', 'ざんてい'], ['緻密', 'ちみつ'], ['憂鬱', 'ゆううつ'], ['相殺', 'そうさい'],
  ['破綻', 'はたん'], ['混沌', 'こんとん'], ['揶揄', 'やゆ'], ['顕著', 'けんちょ'],
  ['杜撰', 'ずさん'], ['忖度', 'そんたく'], ['行方', 'ゆくえ'], ['未遂', 'みすい'],
  ['抑制', 'よくせい'], ['緩和', 'かんわ'], ['過剰', 'かじょう'], ['敏捷', 'びんしょう'],
  ['呆然', 'ほうぜん'], ['莫大', 'ばくだい'], ['潜在', 'せんざい'], ['明瞭', 'めいりょう'],
  ['躊躇', 'ちゅうちょ'], ['図星', 'ずぼし'], ['説得', 'せっとく'], ['補償', 'ほしょう'],
  ['迅速', 'じんそく'], ['膨張', 'ぼうちょう'], ['希薄', 'きはく'], ['脆弱', 'ぜいじゃく'],
];

/** 漢字の読み方クイズ */
export function KanjiQuiz({ initial }: { initial?: Record<string, unknown> }) {
  const items: QuizItem[] = KANJI_WORDS.map(([k, r]) => ({ prompt: k, answer: r }));
  return (
    <MiniChoiceQuiz
      items={items}
      title="この漢字の読み方をひらがなで選んでください"
      rounds={typeof initial?.rounds === 'number' ? initial.rounds : 10}
      note="音読み・訓読みどちらの出題も想定した頻出語。間違えた読みはノートに書いて定着させましょう。"
    />
  );
}

const FLAGS: Array<[string, string]> = [
  ['🇯🇵', '日本'], ['🇺🇸', 'アメリカ'], ['🇬🇧', 'イギリス'], ['🇫🇷', 'フランス'],
  ['🇩🇪', 'ドイツ'], ['🇮🇹', 'イタリア'], ['🇪🇸', 'スペイン'], ['🇰🇷', '韓国'],
  ['🇨🇳', '中国'], ['🇮🇳', 'インド'], ['🇧🇷', 'ブラジル'], ['🇦🇷', 'アルゼンチン'],
  ['🇨🇦', 'カナダ'], ['🇦🇺', 'オーストラリア'], ['🇷🇺', 'ロシア'], ['🇲🇽', 'メキシコ'],
  ['🇪🇬', 'エジプト'], ['🇿🇦', '南アフリカ'], ['🇹🇷', 'トルコ'], ['🇬🇷', 'ギリシャ'],
  ['🇳🇱', 'オランダ'], ['🇸🇪', 'スウェーデン'], ['🇳🇴', 'ノルウェー'], ['🇫🇮', 'フィンランド'],
  ['🇵🇱', 'ポーランド'], ['🇹🇭', 'タイ'], ['🇻🇳', 'ベトナム'], ['🇸🇬', 'シンガポール'],
  ['🇮🇩', 'インドネシア'], ['🇵🇭', 'フィリピン'],
];

/** 国旗クイズ */
export function FlagQuiz({ initial }: { initial?: Record<string, unknown> }) {
  const items: QuizItem[] = FLAGS.map(([f, c]) => ({ prompt: f, answer: c }));
  return (
    <MiniChoiceQuiz
      items={items}
      title="この国旗が何国のものか選んでください"
      rounds={typeof initial?.rounds === 'number' ? initial.rounds : 10}
      note="国旗の色や模様には歴史と地理の背景があります。隣国同士は似た色を使うことも多いので、地図とセットで覚えると効率的です。"
    />
  );
}
