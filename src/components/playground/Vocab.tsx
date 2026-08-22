import { useState } from 'react';

export interface VocabEntry {
  w: string; // 見出し語
  pos: string; // 品詞
  mean: string;
  ex: string; // 例文
}

/** 単語帳データ（deck キーで選択） */
export const VOCAB_DECKS: Record<string, { label: string; words: VocabEntry[] }> = {
  junior: {
    label: '中学コア単語',
    words: [
      { w: 'important', pos: '形', mean: '重要な', ex: 'It is important to sleep well.' },
      { w: 'decide', pos: '動', mean: '決める', ex: 'I decided to join the club.' },
      { w: 'enjoy', pos: '動', mean: '楽しむ', ex: 'We enjoyed watching the game.' },
      { w: 'begin', pos: '動', mean: '始まる／始める', ex: 'Class begins at eight thirty.' },
      { w: 'bring', pos: '動', mean: '持ってくる', ex: 'Please bring your own lunch.' },
      { w: 'borrow', pos: '動', mean: '借りる', ex: 'Can I borrow your pen?' },
      { w: 'lend', pos: '動', mean: '貸す', ex: 'She lent me a book last week.', },
      { w: 'practice', pos: '名・動', mean: '練習', ex: 'Practice makes perfect.' },
      { w: 'weather', pos: '名', mean: '天気', ex: 'The weather was fine yesterday.' },
      { w: 'health', pos: '名', mean: '健康', ex: 'Walking is good for your health.' },
      { w: 'language', pos: '名', mean: '言語', ex: 'English is a world language.' },
      { w: 'history', pos: '名', mean: '歴史', ex: 'I like Japanese history.' },
      { w: 'dangerous', pos: '形', mean: '危険な', ex: 'It is dangerous to swim here.' },
      { w: 'delicious', pos: '形', mean: 'おいしい', ex: 'This soup tastes delicious.' },
      { w: 'expensive', pos: '形', mean: '値段が高い', ex: 'That camera is too expensive for me.' },
      { w: 'difficult', pos: '形', mean: '難しい', ex: 'Math is difficult but interesting.' },
      { w: 'receive', pos: '動', mean: '受け取る', ex: 'I received a letter from my friend.' },
      { w: 'answer', pos: '名・動', mean: '答え／答える', ex: 'Answer the questions in English.' },
      { w: 'question', pos: '名', mean: '質問、問題', ex: 'May I ask you a question?' },
      { w: 'travel', pos: '動・名', mean: '旅行する', ex: 'They traveled around the world.' },
      { w: 'understand', pos: '動', mean: '理解する', ex: 'Do you understand this word?' },
      { w: 'surprise', pos: '名・動', mean: '驚き／驚かせる', ex: 'What a surprise!' },
      { w: 'future', pos: '名', mean: '未来', ex: 'I want to be a doctor in the future.' },
      { w: 'experience', pos: '名・動', mean: '経験', ex: 'It was a good experience for me.' },
      { w: 'improve', pos: '動', mean: '向上させる、よくなる', ex: 'My English is improving slowly.' },
    ],
  },
  senior: {
    label: '高校頻出単語・熟語',
    words: [
      { w: 'acquire', pos: '動', mean: '獲得する、身につける', ex: 'She acquired basic programming skills quickly.' },
      { w: 'significant', pos: '形', mean: '重要な、顕著な', ex: 'There was a significant change in the data.' },
      { w: 'contribute', pos: '動', mean: '貢献する (to)', ex: 'Many people contributed to the project.' },
      { w: 'considerable', pos: '形', mean: 'かなりの、相当な', ex: 'It took considerable time and effort.' },
      { w: 'efficient', pos: '形', mean: '効率的な', ex: 'This engine is more efficient than that one.' },
      { w: 'obtain', pos: '動', mean: '入手する、得る', ex: 'You can obtain the form online.' },
      { w: 'occur', pos: '動', mean: '起こる', ex: 'Earthquakes occur frequently in Japan.' },
      { w: 'increase', pos: '動・名', mean: '増える／増加', ex: 'Sales increased by twenty percent.' },
      { w: 'reduce', pos: '動', mean: '減らす、削減する', ex: 'We must reduce plastic waste.' },
      { w: 'affect', pos: '動', mean: '影響を与える', ex: 'Climate change affects all of us.' },
      { w: 'take part in', pos: '熟語', mean: '〜に参加する', ex: 'He took part in the marathon.' },
      { w: 'look forward to -ing', pos: '熟語', mean: '〜を楽しみに待つ', ex: "I'm looking forward to seeing you again." },
      { w: 'be responsible for', pos: '熟語', mean: '〜に責任がある', ex: 'Who is responsible for this mistake?' },
      { w: 'as far as', pos: '熟語', mean: '〜の範囲で', ex: 'As far as I know, it is true.' },
      { w: 'in terms of', pos: '熟語', mean: '〜の点では', ex: 'In terms of cost, plan B wins.' },
      { w: 'deal with', pos: '熟語', mean: '〜を扱う、対処する', ex: 'How should we deal with this problem?' },
      { w: 'carry out', pos: '熟語', mean: '実行する', ex: 'The team carried out the experiment.' },
      { w: 'due to', pos: '熟語', mean: '〜のために（原因）', ex: 'The flight was canceled due to heavy snow.' },
      { w: 'apparent', pos: '形', mean: '明らかな', ex: 'It became apparent that he was right.' },
      { w: 'assume', pos: '動', mean: '仮定する、想定する', ex: "Let's assume the speed is constant." },
      { w: 'evidence', pos: '名', mean: '証拠', ex: 'There is little evidence for that claim.' },
      { w: 'issue', pos: '名・動', mean: '問題、発行する', ex: 'Pollution is a serious issue today.' },
      { w: 'benefit', pos: '名・動', mean: '利益、恩恵', ex: 'Exercise has many health benefits.' },
      { w: 'estimate', pos: '動・名', mean: '推定する／見積もり', ex: 'Scientists estimate the age at 3000 years.' },
    ],
  },
};

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * 英単語フラッシュカード: 見て覚えて自己採点。
 * 「できなかった」単語は最後にまとめて復習できる。
 */
export function VocabFlashcards({ initial }: { initial?: Record<string, unknown> }) {
  const deckKey = typeof initial?.deck === 'string' && VOCAB_DECKS[initial.deck] ? initial.deck : 'junior';
  const deck = VOCAB_DECKS[deckKey];
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const [queue, setQueue] = useState<number[]>([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const [unknown, setUnknown] = useState<number[]>([]);
  const [reviewMode, setReviewMode] = useState(false);

  function start(q?: number[], review = false) {
    setQueue(q ?? shuffled(deck.words.map((_, i) => i)));
    setIdx(0);
    setRevealed(false);
    setKnown([]);
    setUnknown([]);
    setReviewMode(review);
    setPhase('playing');
  }

  function mark(ok: boolean) {
    const card = queue[idx];
    if (ok) setKnown((k) => [...k, card]);
    else setUnknown((u) => [...u, card]);
    if (idx + 1 >= queue.length) setPhase('done');
    else {
      setIdx(idx + 1);
      setRevealed(false);
    }
  }

  const entry = deck.words[queue[idx] ?? 0];

  return (
    <div className="vocab-cards">
      {phase === 'idle' && (
        <div className="widget-controls">
          <button onClick={() => start()}>スタート! ({deck.words.length} 枚)</button>
        </div>
      )}
      {phase === 'playing' && entry && (
        <>
          <p className="widget-note">{reviewMode ? '復習モード: ' : ''}{idx + 1} / {queue.length} 枚目</p>
          <div className="vocab-card">
            <span className="vocab-word">{entry.w}</span>
            <span className="vocab-pos">[{entry.pos}]</span>
            {revealed ? (
              <div className="vocab-mean">
                <strong>{entry.mean}</strong>
                <p className="vocab-ex">{entry.ex}</p>
              </div>
            ) : (
              <button onClick={() => setRevealed(true)}>意味を見る</button>
            )}
          </div>
          {revealed && (
            <div className="widget-controls">
              <button onClick={() => mark(true)}>✓ できた</button>
              <button className="btn-warn" onClick={() => mark(false)}>✗ できなかった</button>
            </div>
          )}
        </>
      )}
      {phase === 'done' && (
        <div className={`quiz-feedback ${unknown.length === 0 ? 'ok' : ''}`}>
          {reviewMode ? '復習完了! ' : ''}
          {known.length} / {queue.length} 枚「できた」。
          {unknown.length > 0 ? `わからなかった ${unknown.length} 枚だけ復習できます。` : '全部クリア!'}
          <button onClick={() => start(unknown.length ? unknown : undefined, unknown.length > 0)} style={{ marginLeft: 8 }}>
            {unknown.length > 0 ? 'できなかった分だけ復習' : 'もう一度'}
          </button>
        </div>
      )}
      <p className="widget-note">カードを見て意味を思い浮かべてから「意味を見る」。自分で採点して、できなかった分だけ繰り返しましょう。</p>
    </div>
  );
}

/**
 * 英単語4択クイズ: 英→日 / 日→英が混ざる自動採点クイズ。
 */
export function VocabQuiz({ initial }: { initial?: Record<string, unknown> }) {
  const deckKey = typeof initial?.deck === 'string' && VOCAB_DECKS[initial.deck] ? initial.deck : 'junior';
  const deck = VOCAB_DECKS[deckKey];
  const rounds = typeof initial?.rounds === 'number' ? initial.rounds : 10;
  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const [qIdx, setQIdx] = useState(0); // 出題中カード番号
  const [roundNo, setRoundNo] = useState(0);
  const [toJa, setToJa] = useState(true);
  const [choices, setChoices] = useState<string[]>([]);
  const [answered, setAnswered] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);

  function ask() {
    const t = Math.floor(Math.random() * deck.words.length);
    setQIdx(t);
    const dirJa = Math.random() < 0.5;
    setToJa(dirJa);
    const answerText = dirJa ? deck.words[t].mean : deck.words[t].w;
    const pool = shuffled(deck.words.filter((_, i) => i !== t)).slice(0, 3).map((w) => (dirJa ? w.mean : w.w));
    setChoices(shuffled([answerText, ...pool]));
    setAnswered(null);
  }

  function start() {
    setCorrect(0);
    setRoundNo(1);
    setPhase('playing');
    ask();
  }

  function pick(text: string) {
    if (answered !== null) return;
    setAnswered(text);
    if (text === choices.find((c) => c === (toJa ? deck.words[qIdx].mean : deck.words[qIdx].w))) {
      setCorrect((c) => c + 1);
    }
    setTimeout(() => {
      if (roundNo >= rounds) setPhase('done');
      else {
        setRoundNo((r) => r + 1);
        ask();
      }
    }, 1100);
  }

  const answerText = toJa ? deck.words[qIdx]?.mean : deck.words[qIdx]?.w;

  return (
    <div>
      {phase === 'idle' && <button onClick={start}>スタート! ({rounds} 問)</button>}
      {phase === 'playing' && deck.words[qIdx] && (
        <>
          <p className="widget-note"><strong>{roundNo} / {rounds} 問:</strong> {toJa ? '意味は?' : '英語は?'}</p>
          <div className="vocab-card">
            <span className="vocab-word">{toJa ? deck.words[qIdx].w : deck.words[qIdx].mean}</span>
            {!toJa && <span className="vocab-pos">[{deck.words[qIdx].pos} の意味に対応する英単語]</span>}
          </div>
          <div className="quiz-choices" style={{ flexDirection: 'column', display: 'flex' }}>
            {choices.map((c) => {
              let cls = 'quiz-choice';
              if (answered !== null) {
                if (c === answerText) cls += ' correct';
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
          {answered !== null && (
            <p className="widget-note">
              例文: <em>{deck.words[qIdx].ex}</em>
            </p>
          )}
        </>
      )}
      {phase === 'done' && (
        <div className={`quiz-feedback ${correct === rounds ? 'ok' : ''}`}>
          結果: {correct} / {rounds} 正解
          <button onClick={start} style={{ marginLeft: 8 }}>もう一度</button>
        </div>
      )}
      <p className="widget-note">英→日と日→英がランダムに出題されます。両方向できると本物です。</p>
    </div>
  );
}
