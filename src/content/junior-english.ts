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
              content: '形容詞・副詞には「同等」を表す原級、「優っている」を表す比較級、「いちばん」を表す最上級の3つの形があります。比較級は than、最上級は the とセットで使うのが鉄則です。変化のルールは語の長さ（音節数）で決まるので、まず短い語からパターンで覚えましょう。',
            },
            {
              type: 'table',
              headers: ['タイプ', '変化の例', 'ポイント'],
              rows: [
                ['er / est をつける', 'fast → faster → fastest', 'tall, old, young など1音節の短い語'],
                ['e をつけるだけ', 'nice → nicer → nicest', 'large, wide など e で終わる語'],
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
                ['little', 'less', 'least'],
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
            { type: 'heading', level: 3, content: '比較級を強める言葉' },
            {
              type: 'text',
              content: '比較級を強めるときは much, far, even, still, a lot, a little などを比較級の直前におきます。日本語の感覚で very を使いたくなりますが、**very は比較級を強められません**（×very better）。最上級を強めたいときは by far を使います。',
            },
            {
              type: 'table',
              headers: ['強める語', 'ニュアンス', '例'],
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
              answer: '**My brother is much taller than I (me).** 比較級 taller を much で強めます。very には置き換えられない点が答案での差になります。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'Tokyo is ___ (large) than Osaka. 空欄に適する形を入れよ。',
                  answer: '**larger**。1音節語なので er をつける。more large は誤り。',
                },
                {
                  body: '「彼女はクラスでいちばん上手に歌う。」を英語にせよ。',
                  answer: '**She sings (the) best in her class.** well の最上級は best。人を含む範囲を表すときは in を使う。',
                },
                {
                  body: 'Today is ___ hotter than yesterday. 空欄に入る語を1つ挙げ、very が不可の理由も述べよ。',
                  answer: '**much / far / even** など。very は原級（as ... as の中など）を強める語で、比較級とは組み合わないため。',
                },
                {
                  body: 'No other mountain in Japan is ___ than Mt. Fuji. 最上級と同じ意味になるよう空欄を埋めよ。',
                  answer: '**higher**。「No other A is 比較級 than B」で「Bほど高い山はない＝Bがいちばん高い」。',
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
                  explanation: 'much は比較級・最上級を強められる副詞です。very は比較級を強められない点とセットで覚えましょう。',
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
                ['副詞的用法', '動詞を修飾（目的・原因・結果など）', 'I got up early **to catch** the bus.', 'バスに間に合うように'],
              ],
            },
            { type: 'heading', level: 3, content: '判別の手順（4ステップ）' },
            {
              type: 'list',
              ordered: true,
              items: [
                '**ステップ1**: to do の直後に名詞があるか確認する → あれば形容詞的用法の可能性大',
                '**ステップ2**: to do を「すること」に置き換えて意味が通るか試す → 通れば名詞的用法',
                '**ステップ3**: 「〜するために」「〜してみたら」など訳語を足して自然か試す → 自然なら副詞的用法',
                '**ステップ4**: 迷ったら動詞の種類に注目する。want や hope の直後の to do は目的語（名詞的用法）と決まっている',
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
              content: '同じ動詞でも、後ろに to do が来るか doing が来るかで意味が変わることがあります。ポイントは時間の向きです。**to do はこれから先の動作**、**doing はすでに起こった（または進行中の）動作**を指します。次の表を対になって声に出して覚えましょう。',
            },
            {
              type: 'table',
              headers: ['動詞', '+ to do（未来向き）', '+ doing（過去向き）'],
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
              answer: '**I forgot to turn off the light.** やるはずだった動作だから to do。I forgot turning off the light. とすると「消したことを忘れていた」という奇妙な文になります。',
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
                  body: 'Did you remember ___ (lock) the door? 「鍵をかけたかどうか確認した？」の意味にするには？',
                  answer: '**to lock**。remember to do は「忘れずに〜する」。Did you remember locking ...? だと「したことを覚えているか」になる。',
                },
                {
                  body: 'She was surprised ___ (hear) the news. 「知らせを聞いて驚いた」の空欄を埋めよ。',
                  answer: '**to hear**。be surprised to do の形。感情の原因を表す副詞的用法。',
                },
                {
                  body: '「どうやってこのアプリを使えばいいか知っていますか」を how to を使って英語に。',
                  answer: '**Do you know how to use this app?** how to use が know の目的語（名詞的用法）。',
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
                  question: 'Remember buying stamps. の意味は？',
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
