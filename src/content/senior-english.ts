import type { Subject } from './types';

// ============================================================
// 高校英語（学習指導要領 第2章 第7節「英語」: 英語コミュニケーション／論理・表現）
// ============================================================

export const seniorEnglish: Subject = {
  id: 'senior-english',
  stage: 'senior',
  name: '高等学校英語',
  description: '英語コミュニケーションI・II と論理・表現I。構文・長文読解・表現力。',
  icon: '🌐',
  color: '#0e7490',
  units: [
    {
      id: 'se-grammar',
      name: '構文と文法',
      gakushuShidoYoryo: '主な言語材料: 不定詞・分詞・動名詞、関係詞、仮定法、比較、倒置など',
      lessons: [
        {
          id: 'infinitive-participle',
          title: '不定詞・分詞・動名詞',
          summary: '準動詞の3種を用法別に整理する。',
          objectives: ['不定詞の3用法（名詞・形容詞・副詞）を判別できる', '分詞構文を訳せる', '動名詞と不定詞の使い分けができる'],
          blocks: [
            { type: 'heading', level: 3, content: '不定詞の3用法' },
            {
              type: 'table',
              headers: ['用法', '働き', '例文'],
              rows: [
                ['名詞的用法', '主語・目的語など', '**To know** yourself is difficult.'],
                ['形容詞的用法', '名詞を修飾', 'I have homework **to do**.'],
                ['副詞的用法', '目的・原因・結果・条件など', 'I got up early **to catch** the train.'],
              ],
            },
            { type: 'heading', level: 3, content: '分詞構文' },
            {
              type: 'text',
              content: '「**Walking** along the street, I met him.」のように、分詞で始まる句は副詞節相当（時・理由・条件・譲歩・付帯状況）を表します。訳し分けは文脈で決まります。',
            },
            { type: 'heading', level: 3, content: '独立不定詞' },
            {
              type: 'list',
              items: ['**to tell the truth** = 正直に言えば', '**to be frank (with you)** = 率直に言えば', '**to make matters worse** = さらに悪いことに'],
            },
            {
              type: 'example',
              title: '例題',
              body: '「Judging from his accent, he is from Australia.」の Judging が何を表すか説明せよ。',
              answer: '分詞構文（独立分詞構文）。「彼のアクセントから**判断すると**」＝付帯状況・条件に近い慣用的表現。',
            },
            {
              type: 'quiz',
              title: '確認クイズ（準動詞）',
              questions: [
                {
                  question: '「**To swim** in this river is dangerous.」の下線部 To swim の用法は？',
                  choices: ['名詞的用法', '形容詞的用法', '副詞的用法'],
                  answerIndex: 0,
                  explanation: '文の主語として働いているので名詞的用法です。「この川で泳ぐことは危険だ」。',
                },
                {
                  question: '「I have no friend **to help** me.」の to help の用法は？',
                  choices: ['形容詞的用法（friend を修飾）', '名詞的用法', '独立不定詞'],
                  answerIndex: 0,
                  explanation: '名詞 friend を後ろから修飾する形容詞的用法。「私を助けてくれる友人がいない」。',
                },
                {
                  question: '「**Written** in easy English, this book is suitable for beginners.」の意味は？',
                  choices: ['やさしい英語で書かれているので、この本は初心者に向いている', 'やさしい英語で書くと、この本は初心者に向くだろう', 'この本をやさしい英語で書いた人は初心者向けに適している'],
                  answerIndex: 0,
                  explanation: '書く (write) のは本ではなく人間 → 本の側から見ると受動的な関係。分詞構文の受動・原因「〜なので」。',
                },
              ],
            },
          ],
        },
        {
          id: 'subjunctive-comparison',
          title: '仮定法と比較',
          summary: '仮定法過去・過去完了と、比較構文のパターン。',
          blocks: [
            { type: 'heading', level: 3, content: '仮定法' },

            {
              type: 'derivation',
              title: 'なぜ「過去形」が現実と違うことを表すのか——距離の一貫性',
              steps: [
                {
                  label: 'Step 1: 時制の距離',
                  tex: '\\text{現在形 } \\to \\text{ 過去形} = \\text{時間的に遠ざかる}',
                  note: 'I live in Tokyo. → I lived in Tokyo. 過去形は「今ではない場所」へ話題を移す装置です。',
                },
                {
                  label: 'Step 2: 現実からの距離にも同じ装置を使う',
                  tex: '\\text{If I am rich (現実の可能性)} \\to \\text{If I were rich (非現実)}',
                  note: '時間だけでなく**現実との心理的な距離**も「一段引く」ことで表せる。これが仮定法過去の正体。',
                },
                {
                  label: 'Step 3: 二重の距離＝仮定法過去完了',
                  tex: '\\text{If I had been rich} = \\text{過去という時点からさらに引く}',
                  note: '「過去の時点ですでに〜ではなかった」という二重の反事実。距離が2段なので、取り返しのつかない過去の後悔を表現できます。',
                },
                {
                  label: 'Step 4: 主節も同じ距離だけ引く',
                  tex: '\\text{would have + 過去分詞}',
                  note: 'if 節と主節は必ずセットで同じ距離を使う。「If S had p.p., S would have p.p.」の形が対称になるのはこのためです。',
                },
              ],
            },
            {
              type: 'table',
              headers: ['種類', '形', '意味'],
              rows: [
                ['仮定法過去', 'If S + 過去形, S + would + 動詞原形', '今は実際に〜でないのに、もし〜なら'],
                ['仮定法過去完了', 'If S + had + 過去分詞, S + would have + 過去分詞', '過去に実際に〜しなかったのに、もし〜していたら'],
                ['仮定法未来', 'If S + should + 動詞原形, 〜', '万一〜なら'],
              ],
            },
            {
              type: 'text',
              content: 'If を使わない仮定法（**Without water, no life could exist.**）も重要。without / but for ＋名詞 が If 節の代わりをします。',
            },
            { type: 'heading', level: 3, content: '比較構文' },
            {
              type: 'list',
              items: [
                '**as A as B** = Bと同じくらいA（原級）',
                '**the 比較級, the 比較級** = 〜すればするほど',
                '**no more than / not more than** = せいぜい〜に過ぎない / 〜以下',
                '**A is three times as large as B** = AはBの3倍の大きさ',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '「もし昨日彼に会っていたら、このことを伝えていたでしょう。」を英訳せよ。',
              answer: '**If I had seen him yesterday, I would have told him about this.**（仮定法過去完了）',
            },
          ],
        },
        {
          id: 'academic-vocabulary',
          title: '英単語・熟語ドリル',
          summary: '入試頻出の単語・熟語を接頭辞パターンとあわせて暗記する。',
          objectives: [
            '大学入試頻出レベルの単語・熟語を両方向で使える',
            '接頭辞・接尾辞から未知の単語の意味を推測できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '接頭辞で語彙を増やす' },
            {
              type: 'table',
              headers: ['接頭辞', '意味', '例'],
              rows: [
                ['re-', '再び', 're + build → **rebuild** 再建する'],
                ['dis-', '否定・反対', 'dis + agree → **disagree** 同意しない'],
                ['un- / in-', '〜でない', '**unfair** 不公平な / **invisible** 見えない'],
                ['pre-', '前もって', 'pre + dict → **predict** 予測する'],
                ['sub-', '下に', 'sub + way → **subway** 地下鉄'],
                ['im- / ex-', '中へ／外へ', '**import** 輸入 / **export** 輸出'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: '接尾辞も便利です。-tion（動作）→ education、-able（〜できる）→ readable、-ly（副詞化）→ quickly。知らない単語に出会っても「語根＋接辞」で意味を推測する癖をつけましょう。',
            },
            { type: 'heading', level: 3, content: 'フラッシュカード' },
            {
              type: 'widget',
              widget: {
                id: 'vocab-flashcards',
                caption: 'フラッシュカード: 頻出単語24語。熟語もカードになっています',
                props: { deck: 'senior' },
              },
            },
            { type: 'heading', level: 3, content: '4択クイズ' },
            {
              type: 'widget',
              widget: {
                id: 'vocab-quiz',
                caption: '4択クイズ: 英→日・日→英ランダム出題。例文つき',
                props: { deck: 'senior', rounds: 10 },
              },
            },
          ],
        },
        {
          id: 'vocabulary-master',
          title: '英単語マスター5000',
          summary: '頻度順に並べた 5000 語のトレーナー。分冊（各500語）でコツコツ鍛える。',
          objectives: [
            '使用頻度の高い順に単語を効率よく暗習できる',
            '知らない語だけを範囲を絞って反復できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'なぜ「頻度順」が効率的か' },
            {
              type: 'text',
              content:
                '英語のテキストに出てくる語の大部分は、実は上位数千語の繰り返しで占められています。つまり<strong>よく使われる順</strong>に覚えるほど、1語あたりの出会い回数が多く投資対効果が高い。このトレーナーは一般英語コーパスの頻度順に 5000 語を並べています（語義データは CC0 ライセンスの EJDict-hand 由来）。',
            },
            {
              type: 'list',
              items: [
                '**第1章から順に**: 各章500語。まずは知っている語を素早く抜き、残りを暗記',
                '**全5000語ランダム**: 実力確認モード。間違えた語だけ復習する',
                '意味は代表的な第1語義に絞ってあります。詳細な語法は辞書で補完しましょう',
              ],
            },
            { type: 'heading', level: 3, content: 'フラッシュカード' },
            {
              type: 'widget',
              widget: {
                id: 'vocab-flashcards',
                caption: 'フラッシュカード: 出題範囲を選んでスタート。できなかった語だけを回すのが最短ルート',
                props: { deck: 'master' },
              },
            },
            { type: 'heading', level: 3, content: '4択クイズ' },
            {
              type: 'widget',
              widget: {
                id: 'vocab-quiz',
                caption: '4択クイズ: 5000語プールからの出題。紛らわしい選択肢に注意',
                props: { deck: 'master', rounds: 10 },
              },
            },
          ],
        },
      ],
    },
    {
      id: 'se-reading',
      name: '読解と表現',
      gakushuShidoYoryo: '「英語コミュニケーション」「論理・表現」: 長文読解、要約・英作文',
      lessons: [
        {
          id: 'reading-strategy',
          title: '長文読解の戦略',
          summary: 'パラグラフリーディングと設問別の解き方。',
          blocks: [
            { type: 'heading', level: 3, content: 'パラグラフリーディング' },
            {
              type: 'text',
              content: '英語の論説文は通常、各パラグラフに**トピックセンテンス**（多くは第1文）があり、それを具体例や根拠が支えます。第1文を先に全部読む「スキミング」で全体構造をつかんでから精読すると速く正確になります。',
            },
            {
              type: 'list',
              items: [
                '**内容一致問題**: 選択肢ごとに本文の根拠箇所を特定。「too general / not mentioned / 反対の内容」で消去',
                '**空所補充**: 空所の前後の論理関係（however / therefore など）に注目',
                '**要約問題**: 各パラグラフのトピックを1文ずつ拾い、指定語数でつなぐ',
              ],
            },
            { type: 'heading', level: 3, content: '自由英作文の型' },
            {
              type: 'text',
              content: '意見英作文は **主張（Topic sentence）→ 理由1 → 具体例 → 理由2 → 結論** の5文構成が基本。接続語（First, In addition, Therefore）で論理の骨組みを見せることで、読み手に伝わる構成になります。',
            },
            {
              type: 'note',
              variant: 'tip',
              content: '書けないときは「I think that S + V」の骨格に、学習した構文（分詞構文・関係代名詞）を1つずつ組み込むと、文法力をアピールできます。',
            },
          ],
        },
      ],
    },
  ],
};
