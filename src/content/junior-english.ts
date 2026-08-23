import type { Subject } from './types';

// ============================================================
// 中学英語（学習指導要領 第2章 第5節「英語」）
// ============================================================

export const juniorEnglish: Subject = {
  id: 'junior-english',
  stage: 'junior',
  name: '中学校英語',
  description: '聞く・話す・読む・書くの四技能と中学英文法の全体像。',
  icon: '🔤',
  color: '#0891b2',
  units: [
    {
      id: 'je-grammar',
      name: '英文法',
      gakushuShidoYoryo: '主な言語材料: 文型、動詞の時制、助動詞、受動態、不定詞・動名詞、関係代名詞など',
      lessons: [
        {
          id: 'verb-tenses',
          title: '動詞の時制と文型',
          summary: '基本5文型と、現在・過去・進行・完了の時制を整理する。',
          objectives: ['第1〜第5文型を判別できる', '完了形の意味（経験・継続・完了・結果）を使い分けられる'],
          blocks: [
            { type: 'heading', level: 3, content: '基本5文型' },
            {
              type: 'table',
              headers: ['文型', '形', '例文'],
              rows: [
                ['第1文型 SV', '主語＋動詞', 'Birds sing.'],
                ['第2文型 SVC', '主語＋動詞＋補語', 'She is a doctor.'],
                ['第3文型 SVO', '主語＋動詞＋目的語', 'I play tennis.'],
                ['第4文型 SVOO', '＋間接目的語', 'He gave me a book.'],
                ['第5文型 SVOC', '＋補語', 'We call him Ken.'],
              ],
            },
            { type: 'heading', level: 3, content: '時制' },
            {
              type: 'table',
              headers: ['時制', '形', '意味'],
              rows: [
                ['現在進行形', 'be + -ing', '今〜している'],
                ['過去形', '動詞の過去形', '〜した'],
                ['未来形', 'will / be going to', '〜するだろう'],
                ['現在完了形', 'have + 過去分詞', '経験・継続・完了・結果'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '「私は3年間ピアノを習っています。」を英訳せよ。',
              answer: "**I have learned (have been learning) the piano for three years.** 「for + 期間」＝継続の現在完了。",
            },
            {
              type: 'note',
              variant: 'warn',
              content: '現在完了形に「昨日」「last week」のような**特定の過去の時点を表す副詞は使えません**（×I have seen him yesterday）。過去形にしましょう。',
            },
          ],
        },
        {
          id: 'passive-gerund',
          title: '受動態・不定詞・動名詞',
          summary: '準動詞の使い分けと受動態への書き換え。',
          blocks: [
            { type: 'heading', level: 3, content: '受動態' },
            { type: 'formula', tex: '\\text{be} + \\text{過去分詞} (+ \\text{by})', display: true },
            { type: 'text', content: '「English is spoken in many countries.」のように、動作を受ける側を主語にします。by の後ろには動作主を置きます。' },
            { type: 'heading', level: 3, content: '不定詞 vs 動名詞' },
            {
              type: 'table',
              headers: ['', '不定詞 to do', '動名詞 doing'],
              rows: [
                ['主な用法', '名詞的（〜すること）・形容詞的・副詞的', '名詞的のみ'],
                ['注意', 'stop / remember 等で意味が変わる', 'enjoy, finish, practice などの後では必ず doing'],
              ],
            },
            {
              type: 'list',
              items: [
                '**stop to do** = するために立ち止まる ／ **stop doing** = するのをやめる',
                '**remember to do** = 忘れずにする ／ **remember doing** = したことを覚えている',
                '**enjoy / finish / give up** の後は必ず **-ing**',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '次の空欄に入る語を答えよ。「I finished ___ (clean) my room.」',
              answer: '**cleaning**（finish の後は動名詞）',
            },
          ],
        },
      ],
    },
    {
      id: 'je-communication',
      name: 'コミュニケーション表現',
      gakushuShidoYoryo: '言語活動: 挨拶、意見を述べる、依頼・提案など場面に応じた表現',
      lessons: [
        {
          id: 'daily-expressions',
          title: '場面別の表現集',
          summary: '会話でよく使う定型表現を場面ごとに整理する。',
          blocks: [
            {
              type: 'table',
              headers: ['場面', '英語', 'ニュアンス'],
              rows: [
                ['提案', "Why don't we ~? / Shall we ~?", '一緒に〜しよう'],
                ['依頼', 'Could you ~ ? / Would you mind ~ing?', '〜していただけますか（丁寧）'],
                ['許可', 'May I ~ ? / Is it OK if I ~ ?', '〜してもいいですか'],
                ['意見', 'I think (that) ~ / In my opinion, ~', '〜だと思う'],
                ['賛成・反対', 'That sounds good. / I disagree because ~', '根拠を添えるのがポイント'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: 'Would you mind ~ing? の答えは日本語と逆で、「いいですよ」は **Not at all. / Of course not.**（ちっとも気にしません）となります。',
            },
          ],
        },
        {
          id: 'core-vocabulary',
          title: '英単語コアドリル',
          summary: '中学で覚えるべき頻出単語をフラッシュカードと4択クイズで暗記する。',
          objectives: [
            '中学校学習指導要領の語彙のうち頻出コア単語を英→日・日→英両方向で使える',
            '例文の中で単語を記憶する習慣をつける',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '覚え方のコツ' },
            {
              type: 'list',
              items: [
                '**例文ごと覚える**: 単語だけより思い出しやすい（文脈がヒントになる）',
                '**両方向で確認**: 英→日だけでなく日→英もできると書ける語彙になる',
                '**できなかった分だけ繰り返す**: 全部一括より、間隔をあけてピンポイント復習が効率的',
              ],
            },
            { type: 'heading', level: 3, content: 'フラッシュカード' },
            {
              type: 'widget',
              widget: {
                id: 'vocab-flashcards',
                caption: 'フラッシュカード: 意味を思い出してから答え合わせ。自分で採点して「できなかった分」を復習',
                props: { deck: 'junior' },
              },
            },
            { type: 'heading', level: 3, content: '4択クイズ' },
            {
              type: 'widget',
              widget: {
                id: 'vocab-quiz',
                caption: '4択クイズ: 英→日・日→英ランダム出題。例文つき',
                props: { deck: 'junior', rounds: 10 },
              },
            },
          ],
        },
      ],
    },
    // ---------- 中学3年: 関係代名詞と完了形 ----------
    {
      id: 'je-grammar3',
      name: '関係代名詞・現在完了の詳細',
      gakushuShidoYoryo: '主な言語材料: 関係代名詞（who, which, that）、現在完了（経験・継続・完了・結果）',
      lessons: [
        {
          id: 'relative-pronoun',
          title: '関係代名詞 who / which / that',
          summary: '2つの文を1つにつなぎ、名詞に情報を付け加える。',
          objectives: [
            '2つの文を関係代名詞でつなげられる',
            '関係代名詞の後ろの動詞の形（単数扱いかどうか）を決められる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '関係代名詞の基本' },
            {
              type: 'text',
              content: '**I have a friend. + He lives in London.** → **I have a friend who lives in London.**（ロンドンに住んでいる友達がいる）。関係代名詞は「接続詞＋代名詞」の働きを一度にします。',
            },
            {
              type: 'table',
              headers: ['関係代名詞', '先行詞', '例'],
              rows: [
                ['who', '人', 'a boy **who** plays tennis'],
                ['which', '物・動物', 'a book **which** is interesting'],
                ['that', '人・物どちらも', 'the best movie **that** I have ever seen'],
              ],
            },
            { type: 'heading', level: 3, content: '目的格' },
            {
              type: 'text',
              content: '**the book (which) I bought yesterday** のように、目的格は省略できます。省略されていても、後ろに「主語＋動詞」が続いたら関係代名詞の省略と考えます。',
            },
            {
              type: 'example',
              title: '例題',
              body: 'Look at the mountain. + Its top is covered with snow. を1文にせよ。',
              answer: '**Look at the mountain whose top is covered with snow.**（頂が雪でおおわれた山）所有格 whose の使用。中学では that/which で書き換える別解もあります。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'This is the photo. + I took it last summer. を1文に。',
                  answer: '**This is the photo (which/that) I took last summer.** 目的格なので省略可。',
                },
                {
                  body: 'She has two sons who live in Kyoto. を日本語に。',
                  answer: '**彼女には京都に住んでいる2人の息子がいます。**（who 以降が sons を修飾）',
                },
                {
                  body: 'I know a girl ___ can speak five languages. 空欄に入る語は？',
                  answer: '**who**（主格。girl を修飾する節の中の主語として働く）',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（関係代名詞）',
              questions: [
                {
                  question: '「私が昨日会った人は先生です」の英文で適切なのは？',
                  choices: ['The man who I met yesterday is a teacher.', 'The man which I met yesterday is a teacher.', 'The man what I met yesterday is a teacher.'],
                  answerIndex: 0,
                  explanation: '人を先行詞にするときは who（または that）。which は物・動物に使います。',
                },
                {
                  question: 'I have a friend who lives in Osaka. の who の働きは？',
                  choices: ['friend を修飾する節の主語', 'lives の目的語', '接続詞だけ'],
                  answerIndex: 0,
                  explanation: 'who が節内の主語（lives の主語）を兼ねる主格です。このとき動詞は先行詞に合わせて lives になります。',
                },
              ],
            },
          ],
        },
        {
          id: 'present-perfect-detail',
          title: '現在完了の4つの意味',
          summary: '経験・継続・完了・結果を見分け、過去形と使い分ける。',
          objectives: [
            'have + 過去分詞が表す4つの意味を判別できる',
            '完了形と一緒に使えない語（yesterday など）を説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '4つの意味' },
            {
              type: 'table',
              headers: ['意味', 'キーワード', '例'],
              rows: [
                ['経験', 'ever, never, before, 〜times', 'Have you **ever** been to Kyoto?'],
                ['継続', 'for, since, how long', 'I have lived here **since** 2020.'],
                ['完了', 'just, already, yet', 'I have **just** finished my homework.'],
                ['結果', '(今はもう〜してしまっている)', 'He has gone to America.（＝今はここにいない）'],
              ],
            },
            {
              type: 'note',
              variant: 'warn',
              content: '**He has gone to Kyoto.**（行ってしまった＝今も向こう）と **He has been to Kyoto.**（行ったことがある＝経験）は意味が違います。been は「行って戻ってきた」ニュアンス。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '「私は彼を昨日見ました」を英語にせよ（ヒント：完了形は使えない）。',
                  answer: '**I saw him yesterday.** yesterday など特定の過去時点の副詞があるときは必ず過去形。',
                },
                {
                  body: 'How long ___ you known her? に入る語と、答え方の例を示せ。',
                  answer: '**have**。答えは for/since を使った継続の文（例: I have known her **for** ten years.）',
                },
                {
                  body: 'She has just left home. の just が表す意味は？',
                  answer: '**完了**（たった今出発したところだ）。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（現在完了）',
              questions: [
                {
                  question: '「3年間ずっとピアノを弾いています」の正しい英訳は？',
                  choices: ['I have played the piano for three years.', 'I play the piano for three years.', 'I played the piano three years ago.'],
                  answerIndex: 0,
                  explanation: 'for ＋ 期間 ＝ 継続の現在完了。現在も続いていることを表します。',
                },
                {
                  question: '×I have met him last Sunday. が誤りな理由は？',
                  choices: [
                    'last Sunday という特定の過去の時点があるから',
                    'met の形が間違っているから',
                    'him が不要だから',
                  ],
                  answerIndex: 0,
                  explanation: '現在完了は現在とのつながりを言うので、特定の過去時点の副詞とは相容れません。→ I met him last Sunday.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
