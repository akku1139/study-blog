import { Link } from 'react-router-dom';
import type { Subject } from '../content/types';

// ============================================================
// 共通テスト直前対策ページ
// 各教科の「ここだけは確実に得点源になる」要点を、
// 実リンク・頻出度・当日の解き方まで含めて一覧できる。
// ============================================================

interface FocusItem {
  /** 単元名（見出し用） */
  unit: string;
  /** 頻出度 */
  weight: '★★★' | '★★' | '★';
  items: Array<{
    point: string;
    detail: string;
    link?: { subject: string; lesson: string; label: string };
  }>;
}

interface Section {
  subjectId?: string;
  title: string;
  icon: string;
  color: string;
  intro: string;
  focus: FocusItem[];
  examTips: string[];
}

const SECTIONS: Section[] = [
  {
    subjectId: 'senior-math',
    title: '数学（数学I・II・A・B・C）',
    icon: '∫',
    color: '#7c3aed',
    intro:
      '共通テストの数学は「誘導に乗れるか」がすべて。第1問〜第4問の定番パターンを確実に取れる状態にします。',
    focus: [
      {
        unit: '二次関数',
        weight: '★★★',
        items: [
          {
            point: '平方完成と頂点・軸',
            detail:
              '$y = ax^2+bx+c = a(x-p)^2 + q$ の形を機械的に出せるか。最大最小は**変域の端と頂点の y 値を比較**するだけ。',
            link: { subject: 'senior-math', lesson: 'quadratic-graph-senior', label: '二次関数のグラフと最大・最小' },
          },
          {
            point: '判別式 D = b² − 4ac の使いどころ',
            detail:
              '「共有点の個数」「実数解をもつ条件」「放物線と直線」——$a x^2 + bx + c > 0$ が常に成り立つ ⇔ $a>0$ かつ $D<0$。',
            link: { subject: 'senior-math', lesson: 'quadratic-inequality', label: '二次不等式と判別式' },
          },
          {
            point: '放置すると失点：場合分け',
            detail: '「x の範囲で最大値を求めよ」では頂点が変域に入るかで答えが変わる。図を描いてから式を書く。',
          },
        ],
      },
      {
        unit: '三角比・三角関数',
        weight: '★★★',
        items: [
          {
            point: '特別な角の値',
            detail:
              '$\\sin 30°=1/2, \\cos 60°=1/2, \\tan 45°=1$ など、30°/45°/60° の表は即答レベル。加法定理で 15°/75° も出せるように。',
            link: { subject: 'senior-math', lesson: 'trig-functions', label: '弧度法と三角関数' },
          },
          {
            point: '正弦定理・余弦定理の使い分け',
            detail:
              '角2つ以上 → 正弦定理／2辺とはさむ角 or 3辺 → 余弦定理。面積 $S=\\tfrac12 bc\\sin A$ をセットで覚える。',
            link: { subject: 'senior-math', lesson: 'trig-ratio', label: '三角比と正弦定理・余弦定理' },
          },
        ],
      },
      {
        unit: '微分・積分',
        weight: '★★★',
        items: [
          {
            point: '導関数と増減表',
            detail:
              "$f'(x) = 0 の解で符号を確認 → 極大・極小。「極値を求めよ」と「極値をとる x を求めよ」は違う問題。",
            link: { subject: 'senior-math', lesson: 'derivative', label: '微分係数と導関数' },
          },
          {
            point: '定積分と面積',
            detail: '面積 = 上側の曲線 − 下側の曲線。交点を求めてから区間ごとに積分するのが鉄則。',
            link: { subject: 'senior-math', lesson: 'integral', label: '不定積分と定積分' },
          },
        ],
      },
      {
        unit: '数列・確率（数学A/C）',
        weight: '★★',
        items: [
          {
            point: '等差・等比の一般項と和',
            detail: '$a_n = a_1+(n-1)d$、$S_n = \\tfrac{n(a_1+a_n)}{2}$、等比 $a_n=a_1r^{n-1}$、$S_n = \\tfrac{a_1(1-r^n)}{1-r}$。',
            link: { subject: 'senior-math-3c', lesson: 'sequences', label: '数列' },
          },
          {
            point: '確率は樹形図＋場合の数',
            detail: '「少なくとも〜」は余事象。同時抽出＝非復元抽出。',
            link: { subject: 'junior-math', lesson: 'probability-basics', label: '確率（中学からの橋渡し）' },
          },
        ],
      },
    ],
    examTips: [
      'マークミスを恐れて空欄のまま出すのが最悪。必ずマークする',
      '誘導問題は前の小問の結果を次で使う設計。「なぜこの値を求めたのか」を逆算するとヒントになる',
      '時間配分は第1問 20 分を目安に。手が止まったら印をつけて先へ進む',
    ],
  },
  {
    subjectId: 'senior-physics-full',
    title: '理科（物理）',
    icon: '⚛️',
    color: '#2563eb',
    intro:
      '物理は公式の暗記ではなく「どの法則が使える状況か」の判定。運動・波・電磁気・原子の4分野で出題パターンはほぼ固定です。',
    focus: [
      {
        unit: '力と運動',
        weight: '★★★',
        items: [
          {
            point: '運動方程式 ma = F の立て方',
            detail: '**物体を切り出して**、はたらく力を全部矢印で書いてから成分分解。斜面なら摩擦と重力の斜面成分 $mg\\sin\\theta$。',
            link: { subject: 'senior-physics', lesson: 'projectile-motion', label: '物体の運動' },
          },
          {
            point: '力学的エネルギー保存と運動量保存',
            detail: '衝突は運動量保存（エネルギーは損失しうる）、ばねや自由落下はエネルギー保存。',
            link: { subject: 'senior-physics-full', lesson: 'momentum-impulse', label: '運動量と力積' },
          },
        ],
      },
      {
        unit: '波',
        weight: '★★★',
        items: [
          {
            point: '$v = f\\lambda$ と定在波',
            detail: '弦の固定端は節、自由端は腹。n 番の固有振動の波長を図から読み取る練習が最短。',
            link: { subject: 'senior-physics-full', lesson: 'wave-basics', label: '波の基礎' },
          },
          {
            point: 'ドップラー効果の公式',
            detail: '$f\' = \\frac{v \\pm v_O}{v \\mp v_S}f$ — 近づくとき分子プラス・分母マイナス。',
            link: { subject: 'senior-science', lesson: 'earth-history', label: '' },
          },
        ],
      },
      {
        unit: '電気と磁気',
        weight: '★★',
        items: [
          {
            point: 'オームの法則と合成抵抗',
            detail: '直列は足す、並列は逆数の和。コンデンサーの蓄積電荷 Q=CV、エネルギー U=½CV²。',
            link: { subject: 'senior-physics-full', lesson: 'circuits-magnetism', label: '直流回路と電磁誘導' },
          },
          {
            point: 'ローレンツ力と円運動',
            detail: '$qvB = mv^2/r$ → 半径 $r = mv/qB$。速さは変わらず向きだけ変わる。',
          },
        ],
      },
    ],
    examTips: [
      'グラフ問題は軸の意味（縦横何が何）を最初に確認。単位の読み間違いが最多の失点原因',
      '有効数字より「桁」を間違えないこと。10⁻⁶ などの指数処理を落ち着いて',
      '原子・波の分野は暗記で稼げる。最後に回さず前半で処理する',
    ],
  },
  {
    subjectId: 'senior-chemistry',
    title: '理科（化学）',
    icon: '🧪',
    color: '#16a34a',
    intro: '化学は「mol の計算」と「覚える系統表」で得点の8割が決まります。',
    focus: [
      {
        unit: '物質の量と化学反応式',
        weight: '★★★',
        items: [
          {
            point: 'mol ＝ 質量 ÷ 式量（気体は 22.4 L/mol）',
            detail: '化学反応式の係数比＝mol 比。濃度計算も mol に直せばすべて同じ型。',
            link: { subject: 'senior-science', lesson: 'mole', label: '物質の量（モル）' },
          },
          {
            point: '酸化還元の電子の移動',
            detail: '**酸化＝電子を奪う（失う）**。半反応式を作って電子数を揃えるのが確実。',
            link: { subject: 'senior-chemistry', lesson: 'redox-thermo-electrochem', label: '酸化還元と電池' },
          },
        ],
      },
      {
        unit: '無機物質の性質',
        weight: '★★',
        items: [
          {
            point: '典型元素の周期表での位置と代表化合物',
            detail: '両性元素（Al, Zn）、遷移元素の色（Cu²⁺ 青、Fe³⁺ 黄褐、Co²⁺ 桃）など沈殿色は頻出。',
            link: { subject: 'senior-chemistry', lesson: 'typical-elements', label: '典型元素' },
          },
        ],
      },
      {
        unit: '有機化学',
        weight: '★★',
        items: [
          {
            point: '官能基の反応',
            detail:
              'アルコール→アルデヒド→カルボン酸の酸化系列、エステル化（濃硫酸触媒）、ベンゼンの置換基の配向。',
            link: { subject: 'senior-chemistry', lesson: 'hydrocarbons-alcohols', label: '炭化水素とアルコール' },
          },
        ],
      },
      {
        unit: '平衡と酸塩基',
        weight: '★',
        items: [
          {
            point: 'pH = −log[H⁺]、中和の mol 計算',
            detail: 'pH が 1 違うと [H⁺] は 10 倍違う。弱酸・弱塩基の電離平衡は Ka を使って近似計算。',
            link: { subject: 'senior-chemistry', lesson: 'equilibrium-acid-base', label: '化学平衡と酸塩基' },
          },
        ],
      },
    ],
    examTips: [
      '計算問題は途中式を丁寧に。マーク式は桁のズレが致命的なので、最後にもう一度式量を検算',
      '無機の色・沈殿は表にして最終日に見返すだけで効果が大きい',
      '有機の構造式問題は炭素の価数（4本）を数えて不整合を見つける',
    ],
  },
  {
    subjectId: 'senior-biology',
    title: '理科（生物）',
    icon: '🌿',
    color: '#059669',
    intro: '生物は用語の階層構造（細胞→組織→器官→個体→集団）を意識すれば、暗記量は思ったより少ない。',
    focus: [
      {
        unit: '細胞と代謝',
        weight: '★★★',
        items: [
          {
            point: '光合成と呼吸の化学式',
            detail: '光合成 $6CO_2+6H_2O \\to C_6H_{12}O_6+6O_2$（酸素は水由来）。呼吸は逆向きで ATP を得る。',
            link: { subject: 'junior-science', lesson: 'photosynthesis-energy-flow', label: '光合成と呼吸' },
          },
          {
            point: '酵素反応の特徴',
            detail: '基質特異性、温度・pH による活性変化。タンパク質なので高温では不可逆的に失活。',
            link: { subject: 'senior-biology', lesson: 'enzyme-respiration', label: '酵素と呼吸' },
          },
        ],
      },
      {
        unit: '遺伝情報',
        weight: '★★★',
        items: [
          {
            point: 'DNA→mRNA→タンパク質の中心ドグマ',
            detail: '相補的塩基対合 A-T, A-U, G-C。三重項コード。転写・翻訳の場所（核／リボソーム）。',
            link: { subject: 'senior-science', lesson: 'cell-dna', label: '細胞とDNA' },
          },
          {
            point: 'メンデルの分離律・独立の法則',
            detail: 'ヘテロの交雑 Aa×Aa → 3:1。二対交雑は (3:1)² = 9:3:3:1。',
            link: { subject: 'senior-biology', lesson: 'mendelian-genetics', label: 'メンデルの遺伝の法則' },
          },
        ],
      },
      {
        unit: '生態系',
        weight: '★',
        items: [
          {
            point: 'エネルギー流と物質循環',
            detail: '食物連鎖の各段階で約 10% しかエネルギーが伝わらない。炭素は循環、エネルギーは一方向。',
            link: { subject: 'senior-biology', lesson: 'ecosystem', label: '生態系と物質循環' },
          },
        ],
      },
    ],
    examTips: [
      '実験設定の問題は「比較しているものは何か」を一文で言い換えると正解が見える',
      '遺伝の交雑問題は表（パネット正方形）を必ず書く。暗算で 9:3:3:1 を出そうとして間違える',
      '資料読み取りは軸・単位・凡例を最初にチェック',
    ],
  },
  {
    subjectId: 'senior-social',
    title: '地理歴史・公民',
    icon: '🌍',
    color: '#65a30d',
    intro: '地歴公民は資料読解が過半。年号の丸暗記より「因果と時代の流れ」を掴むことが得点につながります。',
    focus: [
      {
        unit: '世界史の流れ',
        weight: '★★★',
        items: [
          {
            point: '産業革命 → 帝国主義 → 世界大戦の因果',
            detail: '市場と原料の獲得が列強の世界分割を生み、その不均衡が二度の大戦につながる一本の線。',
            link: { subject: 'senior-social', lesson: 'industrial-revolution', label: '産業革命と世界システム' },
          },
          {
            point: '日本の近代化',
            detail: '開国 → 富国強兵・殖産興業 → 大正デモクラシー → 戦時体制。条約改正と憲政の発展が主題。',
            link: { subject: 'senior-social', lesson: 'japan-modernization', label: '日本の近代化' },
          },
        ],
      },
      {
        unit: '地理',
        weight: '★★',
        items: [
          {
            point: '気候区分と雨温グラフ',
            detail: '最寒月 18℃ 以上＝熱帯、降水の峰が夏か冬かで半球判断。農業との対応まで押さえる。',
            link: { subject: 'junior-social', lesson: 'world-climate', label: '世界の気候' },
          },
          {
            point: '人口統計の指標',
            detail: '自然増減＝出生 − 死亡。人口転換モデル、都市化率の読み取り。',
            link: { subject: 'senior-social', lesson: 'population-urbanization', label: '人口と都市化' },
          },
        ],
      },
      {
        unit: '公民（政治・経済）',
        weight: '★★',
        items: [
          {
            point: '日本国憲法の三大原理と三権分立',
            detail: '国民主権・基本的人権・平和主義。国会＝立法、内閣＝行政、裁判所＝司法。',
            link: { subject: 'junior-social', lesson: 'economy-basics', label: '市場経済と日本国憲法' },
          },
          {
            point: '需給と価格、景気変動',
            detail: '需要増 → 価格上昇。GDP の三面等価、財政政策・金融政策の方向性。',
            link: { subject: 'senior-social', lesson: 'democracy-market', label: '民主政治と市場経済' },
          },
        ],
      },
    ],
    examTips: [
      '資料のタイトルと注を必ず読む。単位・年代の取り違えが最大の失点源',
      '歴史は「世紀」でざっくり位置づけて選択肢を消去するのが速い',
      '長文の資料問題は設問を先に読んでから本文へ',
    ],
  },
  {
    subjectId: 'senior-english',
    title: '英語（英語コミュニケーション）',
    icon: '🌐',
    color: '#0e7490',
    intro: '共通テスト英語は「語彙力 × 文構造把握」。長文は設問を先に読むことで速度が一段上がります。',
    focus: [
      {
        unit: '文法・語彙',
        weight: '★★★',
        items: [
          {
            point: '準動詞と関係詞',
            detail: '不定詞の3用法、分詞構文（受動・原因）、関係代名詞の格（who/whom/whose）。',
            link: { subject: 'senior-english', lesson: 'infinitive-participle', label: '不定詞・分詞・動名詞' },
          },
          {
            point: '仮定法と比較',
            detail: '仮定法過去完了は「実際には〜しなかった」。as A as B、倍数表現 three times as large as。',
            link: { subject: 'senior-english', lesson: 'subjunctive-comparison', label: '仮定法と比較' },
          },
          {
            point: '語彙トレーナー',
            detail: '頻度順5000語。試験前日は知らない語だけを絞り込んで復習。',
            link: { subject: 'senior-english', lesson: 'vocabulary-master', label: '英単語マスター5000' },
          },
        ],
      },
      {
        unit: '読解',
        weight: '★★★',
        items: [
          {
            point: '設問ファースト',
            detail: '本文前に設問を読む → 探す情報が決まる → スキミングで位置特定 → 精読。これだけで時間効率が激変する。',
            link: { subject: 'senior-english', lesson: 'reading-strategy', label: '長文読解の戦略' },
          },
          {
            point: '接続語で論理構造を掴む',
            detail: 'however / therefore / in contrast など論理関係語は筆者の主張の位置の手がかり。',
            link: { subject: 'junior-japanese', lesson: 'critical-reading-practice', label: '読解ドリル（国語と共通の技法）' },
          },
        ],
      },
    ],
    examTips: [
      '会話文問題は直前の発話への応答になっている。疑問文には答え、提案には賛否を',
      '整序英作文はまず動詞を決める。残りは修飾関係でつなぐ',
      '空欄補充は空欄の前後の品詞を見る。名詞が必要なのか副詞なのかで候補が絞れる',
    ],
  },
  {
    subjectId: undefined,
    title: '情報I・国語',
    icon: '💾',
    color: '#0f172a',
    intro: '情報I と現代文は「解き方の型」を知っているかどうかで差がつきます。',
    focus: [
      {
        unit: '情報I',
        weight: '★★',
        items: [
          {
            point: '2進数とビット演算',
            detail: '10進⇄2進変換、負数は2の補数。データ量の単位（8bit = 1byte）。',
            link: { subject: 'info-1', lesson: 'computer-basics-algorithm', label: 'コンピュータの基礎' },
          },
          {
            point: 'ネットワークとセキュリティ',
            detail: '公開鍵・共通鍵の違い、フィッシング対策、著作権・肖像権。',
            link: { subject: 'info-1', lesson: 'network-security', label: 'ネットワークとセキュリティ' },
          },
        ],
      },
      {
        unit: '現代文',
        weight: '★★',
        items: [
          {
            point: '評論文は「定義文」を探す',
            detail: '〜とは…である、という形の文が設問の根拠になりやすい。傍線部直前の論証が答えの材料。',
            link: { subject: 'senior-japanese', lesson: 'criticism-reading', label: '評論文の精読' },
          },
          {
            point: '小説は視点と心情',
            detail: '誰の思考か常に意識。心情を表す語は本文中から流用して根拠とセットで書く。',
            link: { subject: 'senior-japanese', lesson: 'novel-reading', label: '小説の精読' },
          },
        ],
      },
      {
        unit: '古文・漢文',
        weight: '★',
        items: [
          {
            point: '助動詞の識別と係り結び',
            detail: 'ぞ・なむ・や・か → 連体形、こそ → 已然形。まずは頻出5つの助動詞の意味を固める。',
            link: { subject: 'senior-japanese', lesson: 'classical-grammar', label: '古典文法の要点' },
          },
          {
            point: '漢文の基本句法',
            detail: '再読文字・受身（為〜所〜）・使役（使令教）・反語（豈…乎）。',
            link: { subject: 'senior-japanese', lesson: 'kanbun', label: '漢文の基本句法' },
          },
        ],
      },
    ],
    examTips: [
      '情報I の擬似コード問題は変数の値を表に追跡する（トレース表）のが確実',
      '現代文の記述は指定字数の 8割以上を使う。短すぎると根拠欠落とみなされる',
      '古文は敬語の主語特定が全て。誰の動作が高められているかから始める',
    ],
  },
];

/** 共通テスト直前対策ページ: 得点源の要点と当日の戦略 */
export function ExamPrepPage() {
  return (
    <div className="toc-page">
      <header className="subject-header" style={{ borderLeftColor: '#dc2626' }}>
        <span className="subject-icon large">🎯</span>
        <div>
          <h1>共通テスト直前チェック</h1>
          <p>
            「ここだけ押さえれば得点になる」要点を科目別に整理しました。
            ★の数は出題頻度。各要点から詳しいレッスンへジャンプできます。
          </p>
        </div>
      </header>

      <section className="widget" style={{ marginBottom: '1.5rem' }}>
        <p style={{ margin: 0 }}>
          <strong>使い方</strong>: 直前期は新しいことを学ぶより<strong>既知情報の引き出し速度</strong>を上げるのが有利です。
          ①各科目の★★★を読み直す → ②無限ドリルで計算を手を動かして復習 → ③前日に exam tips を通読。
        </p>
        <p style={{ margin: '0.5rem 0 0' }}>
          計算の勘を戻すなら <Link to="/drills">⚡ 無限ドリル</Link> へ。全体の目次は <Link to="/toc">🗂️ 目次</Link> へ。
        </p>
      </section>

      {SECTIONS.map((sec) => (
        <section key={sec.title} className="toc-subject">
          <h3 style={{ borderColor: sec.color }}>
            {sec.icon} {sec.title}
          </h3>

          <p>{sec.intro}</p>

          {sec.focus.map((group) => (
            <div key={group.unit} className="toc-unit">
              <p className="toc-unit-name">
                {group.unit} <span aria-hidden>（頻出度 {group.weight}）</span>
              </p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.point}>
                    <strong>{item.point}</strong>
                    <br />
                    {item.detail}
                    {item.link && item.link.label && item.link.subject && (
                      <>
                        {' '}
                        <Link to={`/subject/${item.link.subject}/${item.link.lesson}`}>
                          → {item.link.label}
                        </Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="note note-tip">
            <strong>当日の作戦</strong>
            <ul style={{ marginTop: '0.25rem' }}>
              {sec.examTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
