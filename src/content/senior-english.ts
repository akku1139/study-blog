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
          id: 'relative-advanced',
          title: '関係詞の応用——複合関係詞と前置詞＋関係代名詞',
          summary: 'whoever・whatever の複合関係詞と、前置詞＋関係代名詞というフォーマルな構文を使いこなす。',
          objectives: [
            '複合関係詞（whoever / whatever / whichever など）の用法を区別できる',
            '前置詞＋関係代名詞の形を選んで文をつなげられる',
            'what を含む文を「〜すること」という含む節として正確に訳せる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '前置詞＋関係代名詞' },
            {
              type: 'text',
              content: "「〜する（その）家」のような修飾を丁寧に言うとき、**前置詞＋関係代名詞**の形を使います。日常会話なら This is the house which I live in. で十分ですが、学術的な文章では前置詞が前へ出ます。試験では「前置詞を先に出す形」と「後ろに残す形」の両方を読めることが要求されます。",
            },
            {
              type: 'table',
              headers: ['表現', '例文', 'ニュアンス'],
              rows: [
                ['前置詞＋which', "This is the house in which I live.", 'もっとも格式ばった形。学術論文や入試長文で頻出'],
                ['前置詞＋whom', "She has three children, three of whom are doctors.", '非制限用法。数を含めた情報追加に便利'],
                ['whose', "This is the author whose book I read.", '所有の関係詞。前置詞を前に出せない'],
                ['of which ＋ 名詞', "a mountain the top of which is covered with snow", "whose の代わりに使える堅い表現"],
              ],
            },
            {
              type: 'derivation',
              title: '前置詞はなぜ前へ移るのか——2段階変換の導出',
              steps: [
                {
                  label: 'Step 1: 2つの文を用意する',
                  tex: '\\text{This is the house.} \\quad \\text{I live in it.}',
                  note: 'it = the house。2文を1文につなぐのが関係詞の仕事です。',
                },
                {
                  label: 'Step 2: 重なる語を関係代名詞に置き換える',
                  tex: '\\text{This is the house } \\underline{\\text{which}} \\text{ I live in.}',
                  note: '目的格 which が置き換わり、前置詞 in は元の位置に残ります。',
                },
                {
                  label: 'Step 3: 前置詞を関係代名詞の直前へ繰り上げる',
                  tex: '\\text{This is the house } \\underline{\\text{in which}} \\text{ I live.}',
                  note: '前置詞の目的語になるのは関係代名詞だけなので、in の直後へ which を整列させます。「前置詞＋which」をひとつの塊として読むのがコツです。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '複合関係詞' },
            {
              type: 'text',
              content: '**複合関係詞**は「先行詞を含んだ関係詞」です。先行詞を持たず名詞の働きも兼ねるため、「〜する人なら誰でも」「〜することなら何でも」という訳になります。さらに譲歩の副詞節を作る用法があるのが最大の特徴で、読解では「譲歩＝筆者の主張の手前の下準備」というサインになります。',
            },
            {
              type: 'list',
              items: [
                '**whoever** = 誰が〜しても／〜する人なら誰でも',
                '**whatever** = 何が〜しても／〜することなら何でも（= anything that）',
                '**whichever** = （限られた選択肢の中から）どれを選んでも',
                '**whenever** = いつ〜しても',
                '**wherever** = どこへ（に）〜しても',
                '**however** = どんなに〜でも（形容詞・副詞の直後に置く）',
              ],
            },
            {
              type: 'example',
              title: '例題（3用法の見分け）',
              body: '(1) Give it to whoever wants it. (2) Whatever happens, do not give up. (3) I will give you whatever you need. の whoever / whatever の働きをそれぞれ言え。',
              answer:
                '(1) **to の目的語であり節内では主語**——複合関係代名詞（〜する人なら誰でも）。(2) **譲歩の複合関係副詞**（何が起こっても）。(3) **need の目的語を内包する複合関係代名詞**（あなたに必要なことは何でも）。直後に名詞があれば副詞節、なければ代名詞と判断する。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '**however** だけは特別で、必ず however ＋ 形容詞/副詞 ＋ S V の語順になります。However hard it is（どんなに難しくても）のように、修飾する語をすぐ後ろに置きます。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: "This is the office in ___ my father works. の空欄に入る語を答えよ。",
                  answer: '**which**。前置詞 in の目的語だが中身は物・場所なので whom は不可。「父が勤めている事務所」',
                },
                {
                  body: "___ you may go, I will follow you. の空欄に入る語は？",
                  hint: '「どこへ行こうとも」の意味にする。',
                  answer: '**Wherever**。「君がどこへ行こうとも、私は君についていく」',
                },
                {
                  body: "She has two sons, both of ___ are doctors. の空欄を埋め、全体を訳せ。（発展）",
                  hint: '人を指す前置詞＋関係代名詞。',
                  answer: '**whom**。「彼女には息子が2人いて、そのどちらも医者である」。both of whom で非制限用法の情報追加。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '「〜することは何でも（= all that）」を表す語は？',
                  choices: ['whatever', 'whichever', 'whoever'],
                  answerIndex: 0,
                  explanation: 'whatever は the thing(s) which に相当します。選択肢が限定されている場合は whichever を使います。',
                },
                {
                  question: '前置詞の直後に置ける関係代名詞は？',
                  choices: ['which / whom のみ', 'that / who も可', 'whose のみ'],
                  answerIndex: 0,
                  explanation: 'that は前置詞の直後に置けません。in that ...（〜という点では）は熟語的な別表現です。',
                },
                {
                  question: 'However hard I tried, I could not open it. の however の働きは？',
                  choices: ['疑問副詞', '譲歩の複合関係副詞', '程度を表す通常の副詞'],
                  answerIndex: 1,
                  explanation: '「どんなに頑張っても開かなかった」という譲歩です。however の直後に形容詞 hard が来ている点に注目。',
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
          id: 'participle-clauses-detail',
          title: '分詞構文と独立分詞',
          summary: '接続詞つきの文からの書き換えで分詞構文の正体をつかみ、訳し分け・完了形・with 構文まで拡張する。',
          objectives: [
            '2文1組の文を分詞構文に書き換えられる',
            '時・理由・条件・譲歩の訳し分けを文脈から判断できる',
            'being / having been の形と with + O + C 構文を使いこなせる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '分詞構文の正体' },
            {
              type: 'text',
              content: '分詞構文は「接続詞＋主語＋be動詞」を丸ごと取り去ってできた副詞節のかたちをしています。取り除かれた部分は文脈から復元できるので、意味は元の副詞節と同じです。だからこそ分詞構文を見たら「接続詞が隠れている」と意識し、訳し分けを行うのが読解の基本になります。',
            },
            {
              type: 'derivation',
              title: '2文から分詞構文への書き換え手順',
              steps: [
                {
                  label: 'Step 1: 接続詞つきの副詞節をもつ文を用意する',
                  tex: '\\text{As I was tired, I went to bed early.}',
                  note: '接続詞 as・主語 I・be動詞 was の3点セットが分詞構文のもとになります。',
                },
                {
                  label: 'Step 2: 接続詞・主語・be動詞を取り除く',
                  tex: '\\text{Being tired, I went to bed early.}',
                  note: '形容詞 tired の前の being は省略可能なので、Tired, I went to bed early. とも言えます。',
                },
                {
                  label: 'Step 3: 受動の場合',
                  tex: '\\text{As it was written in easy English} \\to \\text{(Being) Written in easy English}',
                  note: 'was written が being written になり、being はしばしば省略されます。',
                },
                {
                  label: 'Step 4: 完了の場合',
                  tex: '\\text{After he had finished lunch} \\to \\text{Having finished lunch}',
                  note: 'had + 過去分詞が having + 過去分詞に対応。「〜した後で」と時間の前後関係が明示されます。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '訳し分けの4類型＋付帯状況' },
            {
              type: 'table',
              headers: ['意味', '隠れている接続詞', '例文と訳し方'],
              rows: [
                ['時', 'when / while', '**Walking** along the street, I met her.（歩いている**とき**彼女に会った）'],
                ['理由', 'because / as / since', '**Feeling** sick, she left early.（気分が悪かった**ので**早退した）'],
                ['条件', 'if', '**Turning** right, you will see the station.（曲がっ**たら**駅が見える）'],
                ['譲歩', 'although / though', '**Living** alone, he is never lonely.（一人暮らし**だが**決して寂しくない）'],
                ['付帯状況', 'and でつながる同時進行', 'He sat there, **reading** a magazine.（座って、雑誌を読んでいた）'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: '訳し分けに迷ったら「理由」か「時」から試すのが実戦的です。特に文頭の分詞構文は理由の用法が頻出で、「〜なので」と入れて意味が通ればそれで十分です。',
            },
            { type: 'heading', level: 3, content: 'being と having been' },
            {
              type: 'text',
              content: '進行や受動のニュアンスを明示したいときは being を残します。完了を表すには having + 過去分詞、完了の受動なら having been + 過去分詞です。having been は硬い文章でよく使われますが、意味は「すでに〜されていたので」で、多くの場合 原因・時間を表します。否定の not は分詞の直前に置く点も重要です。',
            },
            {
              type: 'list',
              items: [
                '**Having lived** in Kyoto, she knows the city well.（京都に住んでいたことがあるので）＝完了・理由',
                '**Having been** invited, I could not refuse.（招待されていたので断れなかった）＝完了受動',
                '**Not knowing** what to say, I stayed silent.（何と言えばいいか分からず黙っていた）＝否定の not は直前',
              ],
            },
            { type: 'heading', level: 3, content: '独立分詞構文' },
            {
              type: 'text',
              content: '分詞構文の主語が主節の主語と違うときは、分詞の主語をそのまま残します。これを独立分詞構文と呼びます。また Judging from（〜から判断すると）や Speaking of（〜といえば）のように、主語を持たない慣用表現として固定したものも多数あります。試験では慣用表現の暗記と、主語不一致への気づきの両方が問われます。',
            },
            {
              type: 'list',
              items: [
                '**Weather permitting,** we will play tennis.（天気が許せば）permitting の主語は weather',
                '**Judging from** his accent, he is from Osaka.（アクセントから判断すると）',
                '**Speaking of** trips, have you ever been to Okinawa?（旅行といえば）',
              ],
            },
            { type: 'heading', level: 3, content: 'with + O + C 構文' },
            {
              type: 'text',
              content: '「OがCの状態で」という付帯状況を表すのに、with + 目的語 + 補語の形がよく使われます。補語には分詞・形容詞・前置詞句が入ります。with を取ると独立分詞構文に近い意味になり、場面の臨場感が増すので小説やエッセイで好んで使われます。補語にどの形が入るかは、OとCの意味上の関係で決まります。',
            },
            {
              type: 'table',
              headers: ['型', '例文', '意味'],
              rows: [
                ['with + O + 過去分詞（受動）', 'He stood there **with his eyes closed.**', '目を閉じたまま立っていた'],
                ['with + O + 現在分詞（能動・進行）', 'The night deepened **with stars shining.**', '星が輝いて夜が更けた'],
                ['with + O + 形容詞', 'She slept **with the window open.**', '窓を開けたまま眠った'],
                ['with + O + 前置詞句', 'He came in **with a bag on his back.**', '鞄を背負って入ってきた'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'As I did not know her address, I could not visit her. を分詞構文に書き換えよ。',
              answer: '**Not knowing her address, I could not visit her.** 否定の not は分詞の直前に置きます。did not know の否定を受け継いで Not knowing となります。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'When it is seen from the top of the hill, the town looks beautiful. を分詞構文に。',
                  answer: '**Seen from the top of the hill, the town looks beautiful.** 受動なので being を省略して Seen から始めるのが普通。',
                },
                {
                  body: 'Having finished all my homework, I played video games. の Having finished の意味は？',
                  answer: '「宿題をすべて**済ませた後で（済ませたので）**」。完了分詞は時間の前後関係を明示する。After I had finished に相当。',
                },
                {
                  body: '「彼は帽子をかぶったまま教室に入ってきた。」を with 構文で英語に。',
                  answer: '**He came into the classroom with a cap on.**（with a cap on his head も可）with + O + 前置詞句の型。',
                },
                {
                  body: '**Living** in a small town, I rarely go to concerts. の Living の訳し分けを2通り示せ。',
                  answer: '「小さな町に住んでいる**ので**（理由）」が自然。時の「住んでいる**とき**」とも読めるが、rarely go との論理関係では理由が妥当。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（分詞構文）',
              questions: [
                {
                  question: 'Written in simple words, the manual is easy to read. の Written はどう解釈すべき？',
                  choices: ['受動の分詞構文（やさしい言葉で書かれているので）', '進行を表す分詞構文', 'manual を修飾する形容詞にすぎない'],
                  answerIndex: 0,
                  explanation: '書くのは人・書かれるのはマニュアルという受動の関係。理由「〜なので」と訳すのが自然です。',
                },
                {
                  question: '完了を表す分詞構文の形は？',
                  choices: ['have + 過去分詞', 'having + 過去分詞', 'been + 過去分詞'],
                  answerIndex: 1,
                  explanation: 'had + 過去分詞に対応して having + 過去分詞を使います。完了受動なら having been + 過去分詞。',
                },
                {
                  question: 'He sat with his legs crossed. の crossed が過去分詞なのはなぜ？',
                  choices: ['legs が交差「される」関係（受動）だから', '動作が進行中だから', '命令の意味が含まれるから'],
                  answerIndex: 0,
                  explanation: '脚と交差するの関係は受動なので過去分詞。with + O + 過去分詞の典型例です。',
                },
              ],
            },
          ],
        },
        {
          id: 'noun-clauses-and-inversion',
          title: '名詞節と倒置',
          summary: 'that 節・wh 語の名詞節を読み分け、否定副詞・So/Such・仮定法で起こる倒置を書き換えられるようにする。',
          objectives: [
            'that 節・wh 語導出名詞節の働き（主語・目的語・補語）を判定できる',
            '否定副詞を文頭に出した倒置の形を再現できる',
            'So/Such 倒置と仮定法の If 省略倒置を書き換えられる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '名詞節の3系統' },
            {
              type: 'text',
              content: '節全体が1つの名詞として働くとき、その節を名詞節と呼びます。主語・目的語・補語のどれかの役目を果たし、「〜ということ」「〜かどうか」「〜のこと」と訳されます。導入語によって意味と語順が変わるので、まず3系統に分けて押さえましょう。',
            },
            {
              type: 'table',
              headers: ['導入語', '意味・注意点', '例文'],
              rows: [
                ['that', '「〜ということ」。目的語位置では省略可', 'I believe **that he is honest.**'],
                ['whether / if', '「〜かどうか」。whether は or not と一緒に使える', 'I wonder **whether it will rain.**'],
                ['wh 語（who, where, when など）', '疑問詞本来の意味が残る。節内は平叙文の語順', 'Tell me **where he lives.**'],
                ['what（複合関係代名詞）', '= the thing which「〜すること」。先行詞不要', '**What he said** is true.'],
              ],
            },
            {
              type: 'text',
              content: 'wh 語導出名詞節の語順は落とし穴です。Where does he live?（疑問文）が Tell me の後ろでは Where he lives と平叙文の語順になり、does は消えます。また what が「〜すること」の意味で使われるとき、関係代名詞と違って先行詞を必要としない点も大事です。試験では語順の誤りを狙った設問が定番です。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '第5文型で that 節を目的語にするときは、**We found it strange that ...** のような形式目的語 it を使う形が重要です。that 節をそのまま置かず、it を先に出すのが普通です。',
            },
            { type: 'heading', level: 3, content: '否定副詞の倒置' },
            {
              type: 'text',
              content: 'never, seldom, hardly, little などの否定・準否定の副詞を文頭に置くと、主語と助動詞の語順が逆になります（倒置）。強調したい語を前に出すことで、筆者の感情や主張が際立ちます。読解では「文頭の否定語＋疑問文型の語順」を見たら倒置だと即座に認識しましょう。',
            },
            {
              type: 'table',
              headers: ['導入語', '倒置の例文', '平叙文に戻すと'],
              rows: [
                ['Never', '**Never have I seen** such a sunset.', 'I have never seen such a sunset.'],
                ['Little', '**Little did he know** the truth.', 'He little knew the truth.'],
                ['Hardly ... when', '**Hardly had I sat down when** the phone rang.', 'I had hardly sat down when the phone rang.'],
                ['Not until', '**Not until yesterday did I notice** the change.', 'I did not notice the change until yesterday.'],
                ['No sooner ... than', '**No sooner had we left than** it started to rain.', 'We had no sooner left than it started to rain.'],
              ],
            },
            {
              type: 'derivation',
              title: '倒置の仕組み——疑問文と同じ語順',
              steps: [
                {
                  label: 'Step 1: 平叙文',
                  tex: '\\text{I have never seen such a beautiful sunset.}',
                  note: '普通の語順です。',
                },
                {
                  label: 'Step 2: 強調したい否定語を文頭へ',
                  tex: '\\text{Never I have seen ...} \\quad (\\times)',
                  note: '否定語を文頭に置いただけでは強調になりません。これでは誤りです。',
                },
                {
                  label: 'Step 3: 助動詞を主語の前に出して完成',
                  tex: '\\text{Never have I seen such a beautiful sunset.}',
                  note: '疑問文 Have you ...? と同じ語順にすることで「強調」のサインになります。',
                },
              ],
            },
            { type: 'heading', level: 3, content: 'So / Such の倒置' },
            {
              type: 'text',
              content: '**So + 形容詞（副詞）**や **Such + 名詞句**を文頭に持ってくると倒置が起きます。もとは so ... that（とても〜なので…）という結果構文です。So difficult was the exam that few students passed. は The exam was so difficult that ... の強調形で、「あまりに難しかったので合格者はほとんどいなかった」という訳になります。',
            },
            {
              type: 'list',
              items: [
                '**So loud was the music that** I could not sleep.（音楽がうるさすぎて眠れなかった）',
                '**Such was his kindness that** everyone respected him.（彼はなんと親切だったので皆に敬愛された）',
                '**Not only did he apologize, but he also paid** for the damage.（謝っただけでなく弁償もした）',
              ],
            },
            { type: 'heading', level: 3, content: '仮定法での倒置——If の省略' },
            {
              type: 'text',
              content: '仮定法の if は、were・had・should が主語の前に出ると省略できます。Had I known the truth, I would have acted differently. は If I had known ... の倒置で、「本当のことを知っていたら違う行動を取っていただろう」の意味です。Were I you（もしあなたの立場なら）や Should you need help（万一助けが必要なら）もセットで覚えましょう。',
            },
            {
              type: 'table',
              headers: ['倒置形', 'If を使った形', '意味'],
              rows: [
                ['**Were I** you, ...', 'If I were you, ...', 'もしあなたの立場なら'],
                ['**Had I known**, ...', 'If I had known, ...', 'もし知っていたら（仮定法過去完了）'],
                ['**Should it rain**, ...', 'If it should rain, ...', '万一雨が降ったら（仮定法未来）'],
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: 'I did not realize the value of health until I got sick. を Not until で始まる文に書き換えよ。',
              answer: '**Not until I got sick did I realize the value of health.** Not until 以下が文頭に出ると、主節は疑問文と同じ語順 did I realize になります。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: 'He had hardly arrived when the meeting started. を Hardly で始まる文に。',
                  answer: '**Hardly had he arrived when the meeting started.** had が主語 He の前に出る。',
                },
                {
                  body: 'The problem was so hard that nobody could solve it. を So で始めて書き換えよ。',
                  answer: '**So hard was the problem that nobody could solve it.** was が主語 the problem の前に出る。',
                },
                {
                  body: 'If I had taken the earlier train, I would have been in time. の if を省略せよ。',
                  answer: '**Had I taken the earlier train, I would have been in time.** had + 主語 の倒置で if が消える。',
                },
                {
                  body: 'I do not know what I should do next. を 疑問詞＋不定詞 に書き換えよ。（総合）',
                  answer: '**I do not know what to do next.** should do が to do に縮約される。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ（名詞節・倒置）',
              questions: [
                {
                  question: 'Tell me where does he live. を直すと？',
                  choices: ['Tell me where he lives.', 'Tell me where lives he.', 'Tell me where he live.'],
                  answerIndex: 0,
                  explanation: '名詞節の中は疑問文ではなく平叙文の語順。where he lives となり does は消えます。',
                },
                {
                  question: 'Never ___ such a delicious cake. 空欄に入る組み合わせは？',
                  choices: ['I have eaten', 'have I eaten', 'I ate have'],
                  answerIndex: 1,
                  explanation: '否定語 Never が文頭にあるので倒置して have I eaten とします。',
                },
                {
                  question: 'Had I been there, I could have helped you. の意味は？',
                  choices: ['そこにいたので助けられた', 'もしそこにいたら、あなたを助けられたのに', 'そこにいなければあなたを助けられなかっただろう'],
                  answerIndex: 1,
                  explanation: 'Had I been there = If I had been there の If 省略倒置。仮定法過去完了の反事実です。',
                },
              ],
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
        {
          id: 'discourse-markers',
          title: '長文頻出のディスコースマーカーと読み取り方',
          summary: 'However・Therefore などの論理標識を機能別に整理し、設問解法に直結させる。',
          objectives: [
            'ディスコースマーカーを6つの機能に分類できる',
            'マーカーから筆者の主張や空所補充の答えを予測できる',
            '同義のマーカーのフォーマル度の違いを説明できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: 'なぜマーカーが最優先なのか' },
            {
              type: 'text',
              content: 'ディスコースマーカー（論理標識）は**文と文の関係を宣言する看板**です。単語を全部知らなくても、この看板さえ読めれば「ここから話が逆転する」「ここで結論が来る」が分かります。長文読解では未知語への対処より先に、まずマーカーに印をつけるのが効率的です。',
            },
            {
              type: 'table',
              headers: ['機能', '代表的な語', '読み取りのポイント'],
              rows: [
                ['逆接', "however / but / yet / nevertheless / still", '直前の内容が打ち消される。**筆者の主張は however の後ろ**'],
                ['原因・根拠', "because / since / as / for", '理由節が主節の前後どちらでも使える。for は文頭に置けない'],
                ['結論・結果', "therefore / thus / hence / consequently / as a result", '**結論＝設問の狙いどころ**。後ろに強調の印をつける'],
                ['添加', "moreover / furthermore / in addition / besides", '前の内容に重ねる。同じ方向の理由が2つ並ぶサイン'],
                ['対比', "on the other hand / in contrast / whereas", '2つの対象を差をつけて提示。比較問題の出元'],
                ['言い換え・例示', "in other words / namely / that is (i.e.) / for instance", '難語の後に来たら**同義表現のヒント**。抽象→具体の変換点'],
              ],
            },
            {
              type: 'table',
              headers: ['カテゴリ', 'カジュアル寄り', 'アカデミック寄り'],
              rows: [
                ['逆接', "but / so", "however / nevertheless"],
                ['添加', "also", "moreover / furthermore"],
                ['例示', "for example", "for instance / namely / such as"],
                ['結論', "so", "therefore / thus / consequently"],
              ],
            },
            { type: 'heading', level: 3, content: '設問別の使い方' },
            {
              type: 'list',
              items: [
                '**空所補充**: 空所の前後を読み、逆接なら however 系・結果なら therefore 系の語群から選ぶ',
                '**内容一致**: however や therefore の直後の文は選択肢の根拠になりやすい——優先的に確認する',
                '**下線部和訳**: For one thing... For another... のような対のマーカーを見つけたら、答案にもその構造を反映する',
                '**要約**: 各パラグラフ冒頭のマーカーを拾うだけで、パラグラフ間の論理の流れ図ができる',
              ],
            },
            {
              type: 'example',
              title: '例題（空所補充）',
              body: '空所に入る語として最も適切なものは？　Many people believe exercise is only for the young. ( ), recent studies show it benefits older adults even more.',
              answer:
                '**However**。前文「若者だけのもの」と後文「高齢者により効果的」は矛盾しない補足ではなく、常識の否定を伴う反対方向の内容。逆接のマーカーが必要です。',
            },
            {
              type: 'practice',
              title: '練習問題',
              problems: [
                {
                  body: '次の語のうち、文頭に置けないものをすべて挙げよ。because / so / for / but。',
                  hint: '等位接続詞か従属接続詞かを考える。',
                  answer: '**for**（等位接続詞なので文頭に来ない）。but は非形式的ながら会話では文頭可、so は口語で文頭によく使われます。',
                },
                {
                  body: 'In other words の直前に難しい抽象表現があった場合、直後には何が来ると予測できるか。',
                  answer: '同じ内容の**平易な言い換え**。未知語があっても直後の平易な文で意味を拾える。逆に直後が具体例なら、for instance 系が来ているはず。',
                },
                {
                  body: '筆者の主張を見つけたいとき、最初に探すべきマーカーは逆接系と結論系のどちらか。理由も添えて答えよ。（発展）',
                  answer: '**逆接系が先**。「通説→しかし→自説」の型では however の後ろに主張が現れる。結論系（therefore）はその主張から導かれる帰結を示すので第二の手がかり。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '筆者の主張が書かれている可能性が最も高い位置は？',
                  choices: ['however の後ろ', 'for example の後ろ', 'namely の後ろ'],
                  answerIndex: 0,
                  explanation: '逆接のマーカーは直前の内容を打ち消して自説へ転換する合図です。例示・言い換えは主張を支える補足です。',
                },
                {
                  question: 'moreover と同じ機能グループはどれ？',
                  choices: ['添加', '対比', '結論'],
                  answerIndex: 0,
                  explanation: 'moreover・furthermore・in addition はすべて「さらに」の添加です。',
                },
                {
                  question: '学術的な文章で結論を導くときに好まれる表現は？',
                  choices: ['so', 'thus / therefore', 'anyway'],
                  answerIndex: 1,
                  explanation: 'thus・therefore・consequently がフォーマルな結論の定番。so は会話向きです。',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
