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
                ['第4文型 SVOO', '主語＋動詞＋間接目的語＋直接目的語', 'He gave me a book.'],
                ['第5文型 SVOC', '主語＋動詞＋目的語＋補語', 'We call him Ken.'],
              ],
            },
            { type: 'heading', level: 3, content: '時制' },
            {
              type: 'table',
              headers: ['時制', '形', '意味'],
              rows: [
                ['現在形', '一般動詞は原形（三人称単数では -s など）／be動詞は am・is・are', '習慣・一般的な事実・現在の状態'],
                ['現在進行形', 'am / is / are + -ing', '今〜している'],
                ['過去形', '動詞の過去形', '〜した'],
                ['未来の表現', 'will + 原形 / be going to + 原形', '〜するつもりだ・〜するだろう'],
                ['現在完了形', 'have / has + 過去分詞', '経験・継続・完了・結果'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '「私は3年間ピアノを習っています。」を英訳せよ。',
              answer: '**I have been learning to play the piano for three years.** 過去に始めた動作が今も続いているので現在完了進行形（have / has been + -ing）が自然です。for + 期間で「3年間」を表します。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '現在完了形に「昨日」「last week」のような**特定の過去の時点を表す副詞は使えません**（×I have seen him yesterday）。過去形にしましょう。',
            },
            { type: 'heading', level: 3, content: '文型の見分け方' },
            {
              type: 'list',
              items: [
                '**第2文型か第5文型か**: 第2文型では C が S の正体や状態を説明します（She is a doctor. → She＝a doctor）。第5文型では C が O を説明します（We call him Ken. → him＝Ken）。語順を入れ替えるのではなく、何を説明する語かを確かめます。',
                '**第3文型か第4文型か**: He gave me a book. では前置詞なしで目的語 me と a book が2つ並ぶので第4文型。He gave a book to me. は目的語が a book の1つで、to me は修飾語なので第3文型です。',
                '**修飾語を除いて骨組みを見る**: Birds sing in the park. の in the park は場所を足す修飾語なので第1文型。look at the picture や listen to music の at / to の後ろの名詞も、動詞の直接の目的語ではありません。',
              ],
            },
            { type: 'heading', level: 3, content: '時制ごとの形のまとめ' },
            {
              type: 'table',
              headers: ['時制', 'be動詞の文', '一般動詞の文'],
              rows: [
                ['現在', 'I am ~.', 'I play tennis.（3人称単数は plays）'],
                ['過去', 'I was ~.', 'I played tennis.'],
                ['未来', 'I will be ~.', 'I will play tennis.'],
                ['現在進行', '—', 'I am playing tennis.（be + -ing）'],
                ['現在完了', 'I have been ~.', 'I have played tennis.'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: 'be going to は「〜するつもり（予定）」、will は「その場で決めた意志・推量」というニュアンスの違いもあります。',
            },
            {
              type: 'example',
              title: '例題2',
              body: '「私は昨日その映画を見ました」を英語にせよ。',
              answer: '**I saw the movie yesterday.** yesterday があるので過去形。現在完了（×have seen）は不可。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '「私は2年前からこの学校に通っています」を英語にせよ。',
                  answer: '**I have attended this school for two years.** 過去から今までの継続を現在完了で表します。for two years は「2年間」。I have been attending this school for two years. も可能です。',
                  hint: '「from + 期間」ではなく for を使う。',
                },
                {
                  body: 'Look at the baby. She ___ (sleep) now. 空欄に入る形は？',
                  answer: '**is sleeping**。now ＝ 今まさに → 現在進行形。',
                },
                {
                  body: '「彼は私たちに音楽を聞かせてくれました」の文型は？（He played us music.）',
                  answer: '**第4文型（SVOO）**。us（間接目的語）＋ music（直接目的語）= He played music for us. とも書ける。',
                },
                {
                  body: 'How long ___ you lived in Tokyo? — ___ 2015. 空欄を埋めよ。',
                  answer: '**have / Since**。「How long + 現在完了」で期間を尋ね、since + 出発点で答える。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（時制と文型）',
              questions: [
                {
                  question: '「私はちょうど宿題を終えたところです」に合うのは？',
                  choices: ['I have just finished my homework.', 'I just finish my homework.', 'I am just finishing my homework now.'],
                  answerIndex: 0,
                  explanation: 'just ＋ 現在完了で「ちょうど〜したところ」。完了を表します。',
                },
                {
                  question: 'We call the dog Pochi. の文型は？',
                  choices: ['第3文型 SVO', '第4文型 SVOO', '第5文型 SVOC'],
                  answerIndex: 2,
                  explanation: 'the dog（O）を Pochi（C）と呼ぶ、という O=C の関係があるので第5文型です。',
                },
                {
                  question: '×I have visited Kyoto last year. を「昨年京都を訪れた」という意味を保って直すと？',
                  choices: ['I visited Kyoto last year.', 'I visit Kyoto last year.', 'I have visited Kyoto every year.'],
                  answerIndex: 0,
                  explanation: 'last year は特定の過去時点なので、現在完了ではなく過去形にします。',
                },
              ],
            },
          ],
        },
        {
          id: 'passive-gerund',
          title: '受動態・不定詞・動名詞',
          summary: '準動詞の使い分けと受動態への書き換え。',
          objectives: ['能動態の目的語を主語にし、時制を保って受動態を作れる', '不定詞と動名詞の形・働きを例文で説明できる', '動詞や前置詞に応じて to do と doing を選べる'],
          blocks: [
            { type: 'heading', level: 3, content: '受動態' },
            { type: 'formula', tex: '\\text{be} + \\text{過去分詞} (+ \\text{by})', display: true },
            { type: 'text', content: '「English is spoken in many countries.」のように、動作を受ける側を主語にします。by の後ろには動作主を置きます。' },
            {
              type: 'list',
              ordered: true,
              items: [
                '**目的語を新しい主語にする**: Ken uses this room. の this room を文頭へ移します。',
                '**be動詞を主語と時制に合わせる**: this room は単数で元の文は現在形なので is。uses は過去分詞 used にします。',
                '**必要なら動作主を加える**: This room is used by Ken.（この部屋はケンに使われています）。誰がしたか不明・重要でない場合は by 以下を省きます。',
              ],
            },
            {
              type: 'table',
              headers: ['時制・形', '受動態の形', '例文'],
              rows: [
                ['現在', 'am / is / are + 過去分詞', 'These rooms are cleaned every day.（これらの部屋は毎日掃除されます）'],
                ['過去', 'was / were + 過去分詞', 'This bridge was built in 1990.（この橋は1990年に造られました）'],
                ['助動詞あり', 'can / will など + be + 過去分詞', 'This book can be read online.（この本はオンラインで読めます）'],
                ['否定・疑問', 'be動詞の後ろに not / be動詞を主語の前へ', 'This room is not used. / Is this room used?'],
              ],
            },
            {
              type: 'example',
              title: '例題：過去の受動態',
              body: 'My sister made these cookies. を these cookies を主語にして書き換えよ。',
              answer: '**These cookies were made by my sister.** 主語が複数で元の文が過去形なので were。make の過去形・過去分詞はともに made です。',
            },
            { type: 'note', variant: 'warn', content: 'be動詞だけでなく**過去分詞も必要**です（×This bridge was build）。また、happen（起こる）のように目的語を取らない自動詞は、この方法で受動態にできません。An accident happened. と言います。' },
            { type: 'heading', level: 3, content: '不定詞 vs 動名詞' },
            {
              type: 'table',
              headers: ['', '不定詞 to do', '動名詞 doing'],
              rows: [
                ['主な用法', '名詞的（〜すること）・形容詞的・副詞的', '名詞的のみ'],
                ['注意', 'want to do / hope to do など', 'enjoy, finish, practice の目的語に動作を置くときは doing'],
              ],
            },
            {
              type: 'list',
              items: [
                '**stop to do** = するために立ち止まる ／ **stop doing** = するのをやめる',
                '**remember to do** = 忘れずにする ／ **remember doing** = したことを覚えている',
                '**enjoy / finish / give up** の目的語に動作を置くときは **-ing**。普通の名詞も置けます（enjoy music）。',
              ],
            },
            {
              type: 'table',
              headers: ['働き', '例文', '確認する点'],
              rows: [
                ['不定詞・名詞的用法', 'I want to read this book.（この本を読みたい）', 'to read this book が want の目的語'],
                ['不定詞・形容詞的用法', 'I have a book to read.（読む本がある）', 'to read が前の名詞 a book を説明'],
                ['不定詞・副詞的用法', 'I went to the library to read.（読むために図書館へ行った）', 'to read が行った目的を説明'],
                ['動名詞', 'Reading books is fun.（本を読むことは楽しい）', 'Reading books が文の主語'],
              ],
            },
            { type: 'text', content: '前置詞の後ろに「〜すること」を置くときも動名詞です。She is good at swimming.（彼女は泳ぐのが得意です）の at の後ろは swimming。I am swimming. の swimming は現在進行形の一部なので、同じ -ing でも文の働きを見て区別します。' },
            {
              type: 'example',
              title: '例題',
              body: '次の空欄に入る語を答えよ。「I finished ___ (clean) my room.」',
              answer: '**cleaning**（finish の後は動名詞）',
            },
            {
              type: 'practice',
              title: '練習問題：形と理由を確認',
              problems: [
                { body: 'They clean this classroom every day. を This classroom で始まる受動態にせよ。', answer: '**This classroom is cleaned every day.** 単数・現在なので is cleaned。動作主を示すなら by them を加えられますが、ここでは省略できます。' },
                { body: 'These pictures ___ (take) by Emi yesterday. を完成させよ。', answer: '**were taken**。主語が複数、yesterday があるので過去の受動態。take の過去分詞は taken です。' },
                { body: 'This computer can ___ (use) by students. を完成させよ。', answer: '**be used**。助動詞の直後は原形なので、can is used ではなく can be used にします。' },
                { body: 'I enjoy ___ (cook), but I want ___ (learn) more recipes. の空欄を埋めよ。', answer: '**cooking / to learn**。enjoy の目的語となる動作は動名詞、want の後ろで「〜したい」は不定詞を使います。' },
                { body: 'He is interested in ___ (play) the guitar. の空欄を埋めよ。', answer: '**playing**。前置詞 in の後ろなので動名詞。「彼はギターを弾くことに興味がある」。' },
                { body: 'I stopped to drink some water. と I stopped drinking water. の意味の違いは？', answer: '**前者は「水を飲むために（していたことを）やめた・立ち止まった」、後者は「水を飲むのをやめた」**。to drink は目的を表す副詞的用法、drinking は stop の目的語です。' },
              ],
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
              content: 'Would you mind ~ing? は「〜するのを嫌だと思いますか」という尋ね方です。依頼を受けるなら **Not at all. / Of course not.**（構いません）。Yes だけでは「嫌です」と受け取られ得るので注意。断るなら I am sorry, but ... と理由を添えると明確です。',
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
              content: '**the book (which) I bought yesterday** のように、ここで扱う名詞を限定する節では目的格を省略できます。I bought の目的語が欠け、その内容が the book と一致することを確かめます。「主語＋動詞」が続くだけで省略と決めつけないこと。主格の who / which / that はこの形では省略できません。',
            },
            {
              type: 'example',
              title: '例題',
              body: 'Look at the mountain. + Its top is covered with snow. を1文にせよ。',
              answer: '**Look at the mountain whose top is covered with snow.**（頂が雪でおおわれている山を見なさい）。発展：whose は所有関係を表し、物にも使えます。whose を単純に that / which に置き換えることはできません。中学の基本表現なら Look at the mountain with a snow-covered top. とも表せます。',
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
                  answer: '**who または that**（主格。girl を修飾する節の中の主語として働く）。この主格は省略できません。',
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
              content: '**He has gone to Kyoto.** は「京都へ行ってしまって、今ここにいない」。移動中の場合もあり、到着済みとは限りません。**He has been to Kyoto.** は「京都に行ったことがある」という経験を表し、通常は訪問して戻った経験を指します。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '「私は彼を昨日見ました」を英語にせよ（ヒント：完了形は使えない）。',
                  answer: '**I saw him yesterday.** 昨日の出来事として述べるこの文は過去形。現在完了にはしません（別の文脈では yesterday と過去進行形などを組み合わせることもあります）。',
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
        {
          id: 'comparative-superlative',
          title: '比較のすべて——原級・比較級・最上級',
          summary: '規則変化と不規則変化を整理し、as ... as の否定形や比較級を強める言葉まで使いこなす。',
          objectives: [
            '形容詞・副詞の原級・比較級・最上級を規則どおり作れる',
            'good / bad / many などの不規則変化を正確に書ける',
            'as ... as の否定形や much / far などによる強調を使い分けられる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '3つの形の基本' },
            {
              type: 'text',
              content: '原級は形容詞・副詞の基本形です。「同じくらい」は as ... as、「より〜」は比較級、「いちばん〜」は最上級で表します。比較の相手を示すときは than を使いますが、It is getting colder. のように相手を明示しない文もあります。形容詞の最上級には通常 the を付け、副詞の最上級では省くこともあります。語の長さ（音節数）と語尾を目安に変化を覚えましょう。',
            },
            {
              type: 'table',
              headers: ['タイプ', '変化の例', 'ポイント'],
              rows: [
                ['er / est をつける', 'fast → faster → fastest', 'tall, old, young など1音節の短い語'],
                ['e で終わる語に r / st をつける', 'nice → nicer → nicest', 'large, wide など'],
                ['y を i に変える', 'easy → easier → easiest', 'happy, early など「子音字 + y」の語'],
                ['子音字を重ねる', 'big → bigger → biggest', 'hot, thin など「短母音 + 子音字」で終わる語'],
                ['more / most を前におく', 'careful → more careful → most careful', 'careful, famous, useful など長い語'],
              ],
            },
            { type: 'heading', level: 3, content: '不規則変化' },
            {
              type: 'table',
              headers: ['原級', '比較級', '最上級'],
              rows: [
                ['good / well', 'better', 'best'],
                ['bad / badly / ill', 'worse', 'worst'],
                ['many / much', 'more', 'most'],
                ['little（量が少ない）', 'less', 'least'],
                ['far', 'farther / further', 'farthest / furthest'],
              ],
            },
            {
              type: 'note',
              variant: 'warn',
              content: 'farther は物理的な距離、further は「さらに（追加の）」という抽象的な意味で使われることが多いです。further information（追加情報）のような使い方とセットで覚えましょう。',
            },
            { type: 'heading', level: 3, content: '原級を使う構文' },
            {
              type: 'text',
              content: '「AはBと同じくらい〜だ」は **A is as 形容詞 as B.** の形です。否定するときは **not as ... as**（または not so ... as）で「Bほどではない」の意味になります。さらに「AはBの3倍だ」のような倍数表現は、as の直前に three times を置いて表します。',
            },
            {
              type: 'list',
              items: [
                '**Ken is as tall as Jack.**（ケンはジャックと同じくらい背が高い）',
                '**This book is not as interesting as that one.**（この本はあの本ほど面白くない）',
                '**This room is three times as large as that room.**（この部屋はあの部屋の3倍広い）',
              ],
            },
            { type: 'heading', level: 3, content: '比較級の差の程度を表す言葉' },
            {
              type: 'text',
              content: 'much, far, a lot は比較の差が大きいこと、a little, a bit は差が小さいことを表します。even, still は「さらに・いっそう」という強調です。いずれも比較級の直前に置きます。**very は比較級を直接強められません**（×very better）。最上級の強調には by far the best のような形を使います。',
            },
            {
              type: 'table',
              headers: ['程度・強調の語', 'ニュアンス', '例'],
              rows: [
                ['much / far', 'ずっと', 'much faster（ずっと速い）'],
                ['even / still', 'さらに・いっそう', 'even better（さらに良い）'],
                ['a little / a bit', '少し', 'a little taller（少し背が高い）'],
                ['by far', '圧倒的に（最上級向け）', 'by far the best player'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '「私の兄は私よりずっと背が高い。」を英語にせよ。',
              answer: '**My brother is much taller than I am.** または **My brother is much taller than me.** 比較級 taller を much で強めます。very には置き換えられません。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'Tokyo is ___ (large) than Osaka. 空欄に適する形を入れよ。',
                  answer: '**larger**。large は e で終わる短い語なので r を付けます。この文では more large ではなく larger を使います。',
                },
                {
                  body: '「彼女はクラスでいちばん上手に歌う。」を英語にせよ。',
                  answer: '**She sings (the) best in her class.** well の最上級は best。in her class は1つの集団を範囲として示します。of all the students（全生徒のうちで）のように、複数の比較対象を並べる場合は of を使います。',
                },
                {
                  body: 'Today is ___ hotter than yesterday. 空欄に入る語を1つ挙げ、very が不可の理由も述べよ。',
                  answer: '**much / far / even** など。very は very hot のように通常の形容詞・副詞を強めますが、比較級 hotter を直接修飾できません。',
                },
                {
                  body: 'No other mountain in Japan is as ___ as Mt. Fuji. 「富士山は日本で最も高い山だ」と同じ意味になるよう空欄を埋めよ。',
                  answer: '**high**。as と as の間は原級。「日本のほかのどの山も富士山ほど高くない」と表せます。No other mountain ... is higher than ... なら厳密には「富士山より高い山はない」で、同じ高さの山がある可能性までは否定しません。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（比較）',
              questions: [
                {
                  question: '「私は思っていたほど疲れていなかった」に合う形は？',
                  choices: ['I was not as tired as I thought.', 'I was not more tired as I thought.', 'I was not tireder than I thought.'],
                  answerIndex: 0,
                  explanation: '「ほど〜でない」は not as ... as で表します。tired の比較級は more tired ですが、ここでは原級の否定が自然です。',
                },
                {
                  question: 'badly の最上級は？',
                  choices: ['baddest', 'worst', 'most badly'],
                  answerIndex: 1,
                  explanation: 'bad / badly / ill の比較級は worse、最上級は worst という不規則変化です。',
                },
                {
                  question: 'much happier の much の働きは？',
                  choices: ['very と同じで原級を強めている', '比較級を強めている', '名詞 happier を修飾している'],
                  answerIndex: 1,
                  explanation: 'much はここでは比較級 happier を強め、「ずっと幸せな」を表します。最上級の強調は by far the happiest などの形で覚えましょう。',
                },
              ],
            },
          ],
        },
        {
          id: 'infinitive-usages-detail',
          title: '不定詞の3用法を深く',
          summary: '名詞的・形容詞的・副詞的の判別手順を身につけ、疑問詞＋不定詞と動名詞との使い分けまで整理する。',
          objectives: [
            '判別の手順に沿って文中の不定詞の用法を判定できる',
            '疑問詞＋不定詞の形を名詞的に使える',
            'stop / remember / forget の後の to do と doing の意味の違いを説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '3用法のおさらい' },
            {
              type: 'table',
              headers: ['用法', '働き', '例文', '訳'],
              rows: [
                ['名詞的用法', '主語・目的語・補語になる', '**To swim** here is fun.', 'ここで泳ぐことは楽しい'],
                ['形容詞的用法', '名詞を後ろから修飾', 'I have homework **to do**.', 'やるべき宿題'],
                ['副詞的用法', '動詞・形容詞などを修飾（目的・感情の原因など）', 'I got up early **to catch** the bus.', 'バスに間に合うように'],
              ],
            },
            { type: 'heading', level: 3, content: '判別の手順（4ステップ）' },
            {
              type: 'list',
              ordered: true,
              items: [
                '**ステップ1**: to + 動詞の原形から始まるかたまり全体を見つける。to read a book の a book は read の目的語であり、直後に名詞があることだけでは用法は決まらない。',
                '**ステップ2**: かたまり全体が文の主語・目的語・補語として「〜すること」を表すなら名詞的用法（I want to read a book.）。',
                '**ステップ3**: 前にある名詞を「どんな名詞か」と説明していれば形容詞的用法（I have a book to read. の to read は a book を説明）。名詞の直後にあるだけでなく、意味のつながりを確認する。',
                '**ステップ4**: 動作の目的や感情の原因などを足していれば副詞的用法（I went there to read. / I am happy to see you.）。訳だけでなく、文中で何を説明するかを根拠にする。',
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: 'to tell the truth（正直に言えば）のような独立不定詞は、慣用的な塊として丸ごと覚えるのが近道です。高校編の「不定詞・分詞・動名詞」レッスンにも発展内容があります。',
            },
            { type: 'heading', level: 3, content: '疑問詞＋不定詞' },
            {
              type: 'text',
              content: 'what to do, where to go, how to cook のような「疑問詞＋不定詞」は、まとめて「〜すること／〜のやり方」という名詞のかたまりになります。know, tell, ask, decide などの動詞とセットで使われるのが典型です。特に how to は「〜の方法」という日常頻出の形なので、口語でも必ず押さえておきましょう。',
            },
            {
              type: 'list',
              items: [
                '**I did not know what to say.**（何と言えばいいか分からなかった）',
                '**Please tell me where to get off.**（どこで降りればいいか教えてください）',
                '**She learned how to ride a bike.**（自転車の乗り方を覚えた）',
              ],
            },
            { type: 'heading', level: 3, content: 'stop / remember / forget は要注意' },
            {
              type: 'text',
              content: '同じ動詞でも、後ろに to do が来るか doing が来るかで意味が変わります。remember / forget では「これからする予定のこと」と「すでにしたこと」の対比が手がかりです。ただし、不定詞が常に未来、動名詞が常に過去を表すわけではありません。try doing は「試しにしてみる」なので、動詞ごとの組み合わせで覚えます。',
            },
            {
              type: 'table',
              headers: ['動詞', '+ to do', '+ doing'],
              rows: [
                ['stop', 'stop to do = するために立ち止まる', 'stop doing = するのをやめる'],
                ['remember', 'remember to do = 忘れずにする', 'remember doing = したことを覚えている'],
                ['forget', 'forget to do = 忘れて（結局）しない', 'forget doing = したことを忘れる'],
                ['try（発展）', 'try to do = しようと努力する', 'try doing = 試しにしてみる'],
              ],
            },
            {
              type: 'note',
              variant: 'warn',
              content: '**He stopped smoking.**（タバコをやめた）と **He stopped to smoke.**（タバコを吸うために立ち止まった）は全く別の場面です。stop to do の to do は目的語ではなく「目的を表す副詞的用法」なので、構造から理解しておくと混ぜません。',
            },
            {
              type: 'example',
              title: '例題',
              body: '「私は電気を消し忘れた。」を英語にせよ。',
              answer: '**I forgot to turn off the light.** 消すはずだったのに忘れてしなかったので to do。「消したことを忘れていた」なら I forgot that I had turned off the light. などとなり、実際に消したかどうかが違います。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'He stopped ___ (drink) coffee at night. 「夜のコーヒーをやめた」の意味になる形は？',
                  answer: '**drinking**。stop の目的語は動名詞。to drink にすると「飲むために立ち止まった」になり文意が変わる。',
                },
                {
                  body: 'Did you remember ___ (lock) the door? 「忘れずにドアの鍵をかけた？」の意味にするには？',
                  answer: '**to lock**。remember to do は「忘れずに〜する」。Did you remember locking ...? だと「したことを覚えているか」になる。',
                },
                {
                  body: 'She was surprised ___ (hear) the news. 「知らせを聞いて驚いた」の空欄を埋めよ。',
                  answer: '**to hear**。be surprised to do の形。感情の原因を表す副詞的用法。',
                },
                {
                  body: '「どうやってこのアプリを使えばいいか知っていますか」を how to を使って英語に。',
                  answer: '**Do you know how to use this app?** how to use this app 全体が know の目的語となる名詞のかたまりです。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（不定詞）',
              questions: [
                {
                  question: '「My dream is to become a pilot.」の to become の用法は？',
                  choices: ['名詞的用法（補語）', '形容詞的用法', '副詞的用法'],
                  answerIndex: 0,
                  explanation: 'is の補語として「パイロットになること」を表すので名詞的用法です。',
                },
                {
                  question: 'I have no time to watch TV. の to watch の用法は？',
                  choices: ['名詞的用法', '形容詞的用法（time を修飾）', '副詞的用法'],
                  answerIndex: 1,
                  explanation: 'time を後ろから修飾する形容詞的用法。「テレビを見る時間がない」。',
                },
                {
                  question: 'I remember buying stamps. の意味は？',
                  choices: ['切手を買うのを忘れないで', '切手を買ったことを覚えている', '切手を買いに行こう'],
                  answerIndex: 1,
                  explanation: 'remember + doing は「〜したことを覚えている」。doing はすでに起こった動作を指します。',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
