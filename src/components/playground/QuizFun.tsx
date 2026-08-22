import { useRef, useState } from 'react';

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 共通: 4択ミニクイズを回す骨組み。セッション内で同じ問題は重複しない */
interface QuizItem {
  prompt: string; // 問題文に表示するもの
  answer: string;
  explain?: string;
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
  const used = useRef<Set<number>>(new Set());

  function ask() {
    // セッション内で未出の問題から選ぶ（全問使い切ったらリセット）
    if (used.current.size >= items.length) used.current.clear();
    let t = items[Math.floor(Math.random() * items.length)];
    while (used.current.has(items.indexOf(t))) t = items[Math.floor(Math.random() * items.length)];
    used.current.add(items.indexOf(t));
    setItemIdx(items.indexOf(t));
    const wrongs = shuffled(items.filter((it) => it.answer !== t.answer)).slice(0, 3).map((it) => it.answer);
    setChoices(shuffled([t.answer, ...wrongs]));
    setAnswered(null);
  }
  function start() {
    used.current.clear();
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
            <span className={items[itemIdx].prompt.length <= 3 ? 'vocab-word' : 'vocab-word vocab-word-sm'}>{items[itemIdx].prompt}</span>
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
          {answered !== null && items[itemIdx].explain && (
            <p className="widget-note"><strong>解説:</strong> {items[itemIdx].explain}</p>
          )}
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

// ---------- 雑学クイズ ----------
interface TriviaEntry {
  cat: string;
  q: string;
  choices: [string, string, string];
  answer: 0 | 1 | 2;
  explain: string;
}

export const TRIVIA_POOL: TriviaEntry[] = [
  // 科学
  { cat: 'science', q: '金魚の記憶はどのくらい続く?', choices: ['約3秒で消える', '数か月は続く', '生まれたときから一度もない'], answer: 1, explain: '餌場の場所や給餌の時間を数か月記憶しているという実験結果があります。「金魚の記憶3秒」は俗説です。' },
  { cat: 'science', q: '富士山頂付近の気圧では、水はおよそ何℃で沸騰する?', choices: ['約87℃', '約95℃', '正確に100℃'], answer: 0, explain: '標高が高いと気圧が低くなり、沸点が下がります。富士山頂では約87〜88℃で沸騰します。' },
  { cat: 'science', q: '植物学的に「漿果（ベリー）」に分類されるのは?', choices: ['イチゴ', 'バナナ', 'ラズベリー'], answer: 1, explain: 'バナナは果皮が肉質の漿果。イチゴは花托が肥大した偽果、ラズベリーは小果実の集まった集合果です。' },
  { cat: 'science', q: '太陽の光が地球に届くまでにかかる時間は?', choices: ['約8分', '約1時間', '約1日'], answer: 0, explain: '光速は秒速約30万km。距離約1億5000万km ÷ 30万km/s ≒ 8分20秒です。' },
  { cat: 'science', q: '体細胞1個に入っているDNAを一本の糸に伸ばすと全長はおよそ?', choices: ['約2cm', '約2m', '約2km'], answer: 1, explain: '1個の細胞の DNA は直径2nm・長さ約2m。全身の細胞分をつなぐと太陽系を往復できる長さともいわれます。' },
  { cat: 'science', q: '氷が水に浮くのはなぜ?', choices: ['氷の密度は水より低いから', '氷の中に空気がたくさん閉じ込められているから', '水に表面張力があるから'], answer: 0, explain: '水は凍ると水素結合による六角形の構造になり、かさばって密度が約8%低くなります。だから氷は浮きます。' },
  { cat: 'science', q: 'キリンの首にある首の骨（頸椎）の数は?', choices: ['7個（ヒトと同じ）', '14個', '24個'], answer: 0, explain: 'ほ乳類の頸椎は基本的に7個。キリンの首は骨の数ではなく、1個1個が極端に長くなっています。' },
  { cat: 'science', q: 'ダイヤモンドと鉛筆の芯（黒鉛）に共通する元素は?', choices: ['炭素', 'ケイ素', 'カルシウム'], answer: 0, explain: 'どちらも炭素だけからできる物質。原子の並び方（結晶構造）の違いで硬さが全く変わります。' },
  { cat: 'science', q: '虹を見るとき、太陽はどちらを向いていればいい?', choices: ['虹の方を向く', '太陽を背にする', 'どちらでもよい'], answer: 1, explain: '虹の中心は常に「太陽の真反対」の方向に現れます。太陽が高すぎる夏の昼下がりには虹は見えません。' },
  // 数学
  { cat: 'math', q: '0.99999…（9 が無限に続く数）と 1 の大小関係は?', choices: ['等しい', '0.999… の方がわずかに小さい', '比較できない'], answer: 0, explain: '1/3 = 0.333… の両辺を3倍すると 1 = 0.999…。極限の考え方ではこの2つは同じ実数です。' },
  { cat: 'math', q: '「0!（ゼロの階乗）」の値は?', choices: ['0', '1', '定義されない'], answer: 1, explain: '空の並び順は1通り、という約束で 0! = 1 と定義します。組合せの公式がきれいにつじつまが合うためです。' },
  { cat: 'math', q: '「x³ + y³ = z³ を満たす自然数は存在しない」という予想（フェルマーの最終定理）が証明されたのは?', choices: ['古代ギリシャ時代', '17世紀', '1990年代'], answer: 2, explain: 'フェルマーが言い残してから約350年、1994年にワイルズが証明しました。' },
  { cat: 'math', q: '「6以上の偶数は二つの素数の和で書ける」（ゴールドバッハ予想）の現在の状態は?', choices: ['19世紀に証明済み', 'コンピュータ検証により証明済み', 'いまも誰も証明できていない'], answer: 2, explain: '巨大な範囲までコンピュータで確かめられていますが、数学的な証明はまだありません。' },
  { cat: 'math', q: '地球のような球面上に描いた三角形の内角の和は?', choices: ['必ずちょうど180°', '180°より大きくなることがある', 'つねに180°未満'], answer: 1, explain: '球面の曲がりを含む三角形（測地三角形）は内角の和が180°を超えます。巨大な三角形ほど差が顕著です。' },
  { cat: 'math', q: '4桁の数字を大きい順・小さい順に並べて引く操作を繰り返すと、（0以外の4桁なら）必ず到達する数は?', choices: ['6174', '495', '1111'], answer: 0, explain: 'カプレカ定数 6174。ちなみに3桁版の定数は 495 です。' },
  { cat: 'math', q: '自分を除く約数の和が自分自身と等しい「完全数」は?', choices: ['6 と 28', '7 と 13', '12 と 18'], answer: 0, explain: '6 = 1+2+3、28 = 1+2+4+7+14。完全数は今のところ偶数しか見つかっておらず、奇数の完全数の存在は未解決です。' },
  // 日本語・日本
  { cat: 'japan', q: '英語の "tsunami" の語源は?', choices: ['日本語の「津波」', 'ハワイ語', 'ラテン語'], answer: 0, explain: '国際的な学術用語として日本語がそのまま使われています。ほかに "sushi" "karaoke" なども英語化しました。' },
  { cat: 'japan', q: '「羊頭狗肉」の意味は?', choices: ['看板と中身が違うこと', '弱いものが強いものに食べられること', '見栄を張って威勢よくふるまうこと'], answer: 0, explain: '羊の頭を掲げて狗（犬）の肉を売ることから、看板と実物が違うことを指す四字熟語です。' },
  { cat: 'japan', q: '「珈琲」「煙草」のような漢字の使い方を何と呼ぶ?', choices: ['当て字', '万葉仮名', '借用語'], answer: 0, explain: '音だけを借りて漢字を当てはめた表記を当て字（当て漢字）と呼びます。' },
  { cat: 'japan', q: '今では普通に遊ばれている「百人一首」の正式な呼び名は?', choices: ['小倉百人一首', '平安百人一首', '百首歌'], answer: 0, explain: '藤原定家が小倉山荘で選んだとされる「小倉山百人一首」が現在の百人一首の原型です。' },
  { cat: 'japan', q: '宮沢賢治の「雨ニモマケズ」が世に出たきっかけは?', choices: ['生前に新聞連載された', '死後、手帳から発見された', '教科書のために書き下ろされた'], answer: 1, explain: '賢治の死後、弟が手帳の中からこの詩を見つけました。賢治が生前に発表した作品ではありません。' },
  { cat: 'japan', q: '日本語の鉤括弧「 」は、どこの言語圏で独自に使われている記号?', choices: ['日本語圏', '中国語圏と共通', '欧米でも同じ形を使う'], answer: 0, explain: '鉤括弧は日本語の約物として発達した記号で、欧米では引用に " " や ‘ ’ を使います。' },
  // 宇宙・地球
  { cat: 'earth', q: '月は現在、地球に対してどうなっている?', choices: ['毎年約3.8cm遠ざかっている', '毎年約3.8cm近づいている', '距離はほぼ変化しない'], answer: 0, explain: '月面に置かれた反射板へのレーザー測距で、年間約3.8cmずつ遠ざかっていることが測定されています。' },
  { cat: 'earth', q: '太陽系で最も重い惑星は?', choices: ['土星', '木星', '地球'], answer: 1, explain: '木星の質量はそれ以外の惑星を全部合わせたより重いという「大物」です。' },
  { cat: 'earth', q: '金星について正しい説明は?', choices: ['自転の向きが地球と逆で、自転周期は公転より長い', '自転速度は地球とほぼ同じ', '衛星を2個もっている'], answer: 0, explain: '金星はゆっくり逆自転（約243日）で、公転（約225日）より自転が長い珍しい惑星です。' },
  { cat: 'earth', q: 'エベレスト（標高8849m）をマリアナ海溝の最深部に沈めると?', choices: ['山頂が少し海面に出る', 'ぴったり隠れる', '山頂でも水深約2kmの下になる'], answer: 2, explain: '最深部は水深約10900m。エベレストを沈めても、なお約2kmの余裕があります。' },
  { cat: 'earth', q: '地球が自転軸のまわりを1回転する正確な時間（恒星日）は?', choices: ['ちょうど24時間', '約23時間56分', '約24時間4分'], answer: 1, explain: '太陽の位置基準の24時間は、公転しながらの回転を含んだ値。純粋な自転1回転は約23時間56分4秒です。' },
  { cat: 'earth', q: '宇宙ステーションに長期滞在する飛行士の身長は?', choices: ['数cm伸びる', '数cm縮む', '変わらない'], answer: 0, explain: '無重力では脊椎が伸びて数cm背が高くなります。地球に帰ると元に戻ります。' },
  // 食べ物
  { cat: 'food', q: '適切に保存したハチミツの寿命は?', choices: ['数か月', '1〜2年', 'ほぼ腐らない'], answer: 2, explain: '水分が少なく糖濃度が高く酸性のため微生物が繁殖できません。古代遺跡から食べられる状態で見つかった例もあります。' },
  { cat: 'food', q: 'キャベツ、ブロッコリー、ケールの関係は?', choices: ['全部別の科の野菜', 'すべて同じ野生種（アブラナ）から改良された', 'ブロッコリーだけ別種'], answer: 1, explain: '葉・つぼみ・茎など「どの部分を肥大させるか」の違いで品種改良された、同じアブラナの仲間です。' },
  { cat: 'food', q: 'ワサビの「辛さ」と唐辛子の「辛さ」は?', choices: ['同じ成分によるもの', 'まったく別の刺激', 'ワサビは辛くない'], answer: 1, explain: '唐辛子はカプサイシン（舌が痛覚を感じる）、ワサビは揮発性の硫化物（鼻に抜ける刺激）と別物です。' },
  { cat: 'food', q: '緑茶・烏龍茶・紅茶の原料は?', choices: ['それぞれ別の木', '同じ茶の木（発酵の度合いが違う）', '紅茶だけ別の植物'], answer: 1, explain: 'すべてチャの葉。酸化（発酵）を止めたのが緑茶、半分進めたのが烏龍茶、完全に進めたのが紅茶です。' },
  { cat: 'food', q: '乾燥したスパゲティ1本を両端を持って折ると?', choices: ['必ずきれいに2本になる', 'たいてい3本以上に割れる', '力を入れても折れない'], answer: 1, explain: '折れた直後に曲がり返す波が残りを折るため、3本以上になることがほとんど。この現象を説明した研究はIGノーベル賞を受賞しています。' },
];

/** 雑学クイズ: カテゴリを絞ってランダム出題 */
export function TriviaQuiz({ initial }: { initial?: Record<string, unknown> }) {
  const cat = typeof initial?.category === 'string' ? initial.category : '';
  const pool = cat ? TRIVIA_POOL.filter((t) => t.cat === cat) : TRIVIA_POOL;
  const items: QuizItem[] = pool.map((t) => ({
    prompt: t.q,
    answer: t.choices[t.answer],
    explain: t.explain,
  }));
  return (
    <MiniChoiceQuiz
      items={items}
      title="雑学クイズ。正解だと思うものを選んでください"
      rounds={typeof initial?.rounds === 'number' ? initial.rounds : 10}
      note="間違えても解説が表示されます。知識は「へぇ」の積み重ねです。"
    />
  );
}
