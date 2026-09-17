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
            { type: 'heading', level: 3, content: '動名詞と不定詞——動詞との組合せで選ぶ' },
            { type: 'text', content: '動名詞は -ing 形で「〜すること」を表し、主語・目的語・補語になります。不定詞の名詞的用法と似ていますが、いつも交換できるわけではありません。enjoy / avoid / finish は目的語に動名詞、want / decide / hope は to 不定詞を取ります。前置詞の後ろで動詞の内容を述べる場合は動名詞にします。look forward to の to は前置詞なので、look forward to meeting you が正しい形です。' },
            { type: 'table', headers: ['動詞', '動名詞', 'to 不定詞'], rows: [
              ['remember', 'remember locking the door：鍵をかけたことを覚えている', 'remember to lock the door：忘れずに鍵をかける'],
              ['stop', 'stop talking：話すのをやめる', 'stop to talk：話すために立ち止まる（目的の副詞的用法）'],
              ['try', 'try restarting the tablet：試しにタブレットを再起動する', 'try to restart the tablet：再起動しようとする'],
            ] },
            { type: 'example', title: '自作例文：形だけでなく役割を読む', body: 'Mina enjoys drawing maps. Yesterday, she stopped drawing to answer the phone. を訳し、drawing と to answer の働きを説明しよう。', answer: '「ミナは地図を描くのを楽しんでいる。昨日、電話に出るために描くのをやめた」。最初の drawing maps は enjoys の目的語、次の drawing は stopped の目的語で、ともに動名詞。to answer は「何のためにやめたか」を示す目的の不定詞です。' },
            { type: 'practice', title: '動名詞・不定詞の使い分け', problems: [
              { body: 'Ken finished (write / writing / to write) his report before dinner. 正しい形と理由を答えよ。', answer: 'writing。finish は「〜し終える」の意味で動名詞を目的語に取ります。「ケンは夕食前にレポートを書き終えた」。' },
              { body: '「私たちは来週その博物館を訪れることに決めた」を decide を使って英訳せよ。', answer: '例：We decided to visit the museum next week. decide は to 不定詞を取ります。decided visiting とはしません。' },
              { body: 'Please remember ___ the lights before you leave. 「出る前に忘れずに明かりを消してください」となるよう、turn off を適切な形にせよ。', answer: 'to turn off。まだ実行していない行為を忘れずにするよう頼むので remember to do。remember turning off なら、消したという過去の行為を覚えている意味です。' },
              { body: 'I am looking forward to see you again. の誤りを直して理由を述べよ。', answer: 'I am looking forward to seeing you again. look forward to の to は前置詞で、動詞を続ける場合は seeing という動名詞にします。' },
            ] },
            {
              type: 'example',
              title: '例題',
              body: '「Judging from his accent, he is from Australia.」の Judging が何を表すか説明せよ。',
              answer: '「彼のアクセントから**判断すると**」という慣用的な分詞構文。判断するのは話し手であり、主節の主語 he ではありません。Weather permitting のように固有の意味上の主語を明示する独立分詞構文とは区別して覚えます。',
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
            '関係代名詞 what が導く名詞節を「〜すること・もの」と正確に訳せる',
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
                ['whose ＋ 名詞', "This is the author whose book I read.", '所有の関係。前置詞＋whose＋名詞も可能（in whose house など）'],
                ['名詞 ＋ of which', "a mountain the top of which is covered with snow", "whose top の代わりに使える堅い表現"],
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
                  note: 'この文では which が in の目的語です。前置詞を関係代名詞の直前に置くこともでき、「in which」をひとつのまとまりとして読みます。',
                },
              ],
            },
            { type: 'heading', level: 3, content: '複合関係詞' },
            {
              type: 'text',
              content: '**複合関係詞**は whoever / whatever などの複合関係代名詞と、whenever / wherever / however などの複合関係副詞に分けます。複合関係代名詞は「〜する人なら誰でも」などの名詞節を作るほか、譲歩の副詞節も作れます。複合関係副詞は「〜するときはいつでも」など時・場所・方法を表したり、「いつ〜しても」など譲歩を表したりします。すべてを名詞の働きと考えないことが大切です。',
            },
            {
              type: 'list',
              items: [
                '**whoever** = 誰が〜しても／〜する人なら誰でも',
                '**whatever** = 何が〜しても／〜することなら何でも（= anything that）',
                '**whichever** = （限られた選択肢の中から）どれを選んでも',
                '**whenever** = いつ〜しても',
                '**wherever** = どこへ（に）〜しても',
                '**however** = どんなに〜でも（程度を表すときは形容詞・副詞の直前に置く）',
              ],
            },
            {
              type: 'example',
              title: '例題（3用法の見分け）',
              body: '(1) Give it to whoever wants it. (2) Whatever happens, do not give up. (3) I will give you whatever you need. の whoever / whatever の働きをそれぞれ言え。',
              answer:
                '(1) whoever は節内で wants の主語。whoever wants it 全体が前置詞 to の目的語となる名詞節です。(2) whatever は happens の主語となる複合関係代名詞で、Whatever happens 全体は譲歩の副詞節です。(3) whatever は need の目的語で、whatever you need 全体も give の目的語となる名詞節です。関係詞の品詞と節全体の働きを区別し、直後に名詞があるかだけで判定しないこと。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '程度の譲歩は **however ＋ 形容詞/副詞 ＋ S V**。However hard it is は「どんなに難しくても」。ただし方法を表す However you do it（どんな方法でそれをしても）もあり、常に形容詞・副詞が必要なわけではありません。文をつなぐ However,（しかし）とも区別します。',
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
                  question: '標準的な書き言葉で、関係節の「場所なら in ___、人なら to ___」の空欄に単独で置く関係代名詞の組は？',
                  choices: ['which / whom', 'that / who', 'whose / whose'],
                  answerIndex: 0,
                  explanation: 'that は前置詞の直後に置けません。in that ...（〜という点では）は熟語的な別表現です。',
                },
                {
                  question: 'However hard I tried, I could not open it. の however の働きは？',
                  choices: ['疑問副詞', '譲歩の複合関係副詞', '程度を表す通常の副詞'],
                  answerIndex: 1,
                  explanation: '「どんなに頑張っても開けられなかった」という譲歩です。hard はここでは tried を修飾する副詞で、however の直後に置きます。',
                },
              ],
            },
          ],
        },
        {
          id: 'subjunctive-comparison',
          title: '仮定法と比較',
          summary: '仮定法過去・過去完了と、比較構文のパターン。',
          objectives: ['条件と結果が指す時点から仮定法の形を選べる', '混合仮定法を現在・過去の事実と対照して説明できる', '比較構文で比較対象と数量の意味を正確に読める'],
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
                  note: '過去の状況について現実と異なる仮定を示します。過去完了形が時間と現実からの距離を担いますが、「二重の反事実」ではなく、必ずしも後悔を表すわけでもありません。',
                },
                {
                  label: 'Step 4: 主節が指す時点も確認する',
                  tex: '\\text{would have + 過去分詞}',
                  note: '主節も過去の結果なら would have＋過去分詞。過去の条件から現在の結果を述べる場合は would＋原形となる混合仮定法もあり、両節の形が必ずそろうわけではありません。',
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
                '**no more than / not more than** = 数量表現では「たった〜に過ぎない（少なさを強調）」／「多くとも〜（上限）」が基本。文脈によって no more than も上限を表す',
                '**A is three times as large as B** = AはBの3倍の大きさ',
              ],
            },
            {
              type: 'example',
              title: '例題',
              body: '「もし昨日彼に会っていたら、このことを伝えていたでしょう。」を英訳せよ。',
              answer: '**If I had seen him yesterday, I would have told him about this.**（仮定法過去完了）',
            },
            { type: 'heading', level: 3, content: '条件の時点と結果の時点を別々に決める' },
            { type: 'text', content: '仮定法過去は現在の反事実だけでなく、実現を考えにくい未来の仮定にも使います。形の「過去」と意味の「過去」を混同しないこと。主節の助動詞は結果の見込みなら would、能力・可能性なら could、控えめな可能性なら might などを選びます。条件と結果が違う時点を指す場合もあるので、まず now / yesterday などを手がかりに時点を整理します。' },
            { type: 'example', title: '自作例文：過去の選択が今に影響する', body: '実際には昨夜十分に眠らなかったので、今は疲れている。この状況を If で始めて表そう。', answer: 'If I had slept enough last night, I would not be tired now. 「もし昨夜十分に眠っていたら、今疲れていないだろう」。眠る条件は過去なので had slept、疲れている結果は現在なので would not be。would not have been tired なら過去の結果になります。' },
            { type: 'heading', level: 3, content: '比較では同じ種類のものを比べる' },
            { type: 'text', content: '比較級は単に than を付ければよいのではなく、比較対象をそろえます。例えば The population of City A is larger than that of City B. では that が the population を受け、「A市の人口」と「B市の人口」を比較します。Aの人口とB市そのものを比べないようにしましょう。また twice as long as は「長さが2倍」であり「2倍分だけ長い」と訳さないこと。' },
            { type: 'example', title: '自作例文：上限と実数を区別する', body: 'The room can hold not more than twenty people. / Only five people came to the meeting. この2文がそれぞれ述べている数について説明しよう。', answer: '第1文は「その部屋は多くとも20人収容できる」で、20人が今いるとは述べていません。第2文は「会議にはたった5人しか来なかった」で、参加者の実数と少なさを述べています。no more than five people came も文脈により後者の少なさを強調できます。' },
            { type: 'practice', title: '時点と比較対象を確かめる問題', problems: [
              { body: '今はお金が足りない。「もっとお金があれば、その辞書を買えるのに」を If で始めて英訳せよ。', answer: '例：If I had more money, I could buy the dictionary. 現在の反事実を had で表し、「買うことができる」には could buy を使います。' },
              { body: 'If we (leave) earlier yesterday, we would have caught the bus. leave を適切な形にし、訳せ。', answer: 'had left。「昨日もっと早く出発していたら、そのバスに間に合っただろう」。条件・結果とも過去の反事実です。' },
              { body: 'If I had saved the file, I ___ it now. 「保存しておいたら、今それを使えるのに」となるよう can / could use / could have used から選べ。', answer: 'could use。保存は過去、使えるかどうかは現在なので混合仮定法。could have used は過去に使えたはずだという結果になります。' },
              { body: 'This bridge is twice as long as that one. を訳せ。that one の長さが30mなら this bridge は何mか。', answer: '「この橋はあの橋の2倍の長さだ」。30×2＝60mです。差が60mという意味ではありません。' },
              { body: 'The population of this town is smaller than the neighboring town. 比較対象をそろえて訂正せよ。', answer: 'The population of this town is smaller than that of the neighboring town. that は the population の代わりで、人口どうしを比較します。' },
            ] },
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
              content: '分詞構文は分詞を中心とする句で、時・理由などの副詞節に相当する情報を添えます。書き換えでは、通常は主節と意味上の主語が同じことを確認し、接続詞と主語を省き、動詞を分詞の形にします。一般動詞でも作れるので、単に「接続詞＋主語＋be動詞を削除」とは考えません。接続詞を残す場合もあり、時・理由などの関係は文脈から判断します。',
            },
            {
              type: 'derivation',
              title: '2文から分詞構文への書き換え手順',
              steps: [
                {
                  label: 'Step 1: 接続詞つきの副詞節をもつ文を用意する',
                  tex: '\\text{As I was tired, I went to bed early.}',
                  note: '副詞節と主節の主語はどちらも I。この一致をまず確認します。',
                },
                {
                  label: 'Step 2: 接続詞・主語を省き、was を being にする',
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
              content: '訳し分けは「理由」や「時」を候補にしつつ、前後の文脈まで確認します。「〜なので」で一応読めても、条件や譲歩の対比を失うことがあります。接続詞が残っていればそれを優先し、なければ主節との論理関係を根拠に選びましょう。',
            },
            { type: 'heading', level: 3, content: 'being と having been' },
            {
              type: 'text',
              content: 'being は be の現在分詞で、Being tired のように状態を表す形容詞や、Being invited のように受動を表す過去分詞が続きます。being 自体が常に進行を示すわけではありません。主節より前の出来事を明示するには having + 過去分詞、受動なら having been + 過去分詞を使います。Having been invited は「招待されていたので／招待された後で」など、文脈に応じて解釈します。否定の not は Not knowing / Not having finished のように全体の前に置きます。',
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
                  answer: '**He came into the classroom with a cap on.** on はここでは着用状態を表す副詞。with a cap on his head とすれば on his head が前置詞句です。',
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
            'that 節・wh 語が導く名詞節の働き（主語・目的語・補語）を判定できる',
            '否定副詞を文頭に出した倒置の形を再現できる',
            'So/Such 倒置と仮定法の If 省略倒置を書き換えられる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '名詞節の主な導入語' },
            {
              type: 'text',
              content: '節全体が名詞相当として働くとき、その節を名詞節と呼びます。主語・目的語・補語などの役目を果たし、「〜ということ」「〜かどうか」「〜するもの」などと訳されます。導入語ごとの意味と語順を押さえましょう。',
            },
            {
              type: 'table',
              headers: ['導入語', '意味・注意点', '例文'],
              rows: [
                ['that', '「〜ということ」。動詞の目的語となる節では省略できることが多い', 'I believe **that he is honest.**'],
                ['whether / if', '「〜かどうか」。whether or not / whether ... or not / if ... or not は可能だが、if or not ... とはしない', 'I wonder **whether it will rain.**'],
                ['wh 語（who, where, when など）', '疑問詞本来の意味が残る。節内は平叙文の語順', 'Tell me **where he lives.**'],
                ['what（先行詞を含む関係代名詞）', '= the thing(s) that「〜すること・もの」。先行詞不要', '**What he said** is true.'],
              ],
            },
            {
              type: 'text',
              content: '疑問詞で導く名詞節は平叙文の語順です。Where does he live? を埋め込むと Tell me where he lives. となります。疑問詞自体が主語なら Tell me who lives here. のように主語を足しません。また「〜すること・もの」の what も関係代名詞の一種ですが、which や that と異なり先行詞を内部に含みます。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '第5文型で that 節を目的語にするときは、**We found it strange that ...** のような形式目的語 it を使う形が重要です。that 節をそのまま置かず、it を先に出すのが普通です。',
            },
            { type: 'heading', level: 3, content: '名詞節と倒置を混同しない' },
            { type: 'example', title: '自作例文：whether と if の範囲', body: '「実験を続けるかどうかは費用による」を Whether で始めて英訳し、If で置き換えられるか説明しよう。', answer: 'Whether we continue the experiment depends on the cost. 文頭の主語となる「〜かどうか」の節には whether を使い、この If への置き換えはできません。前置詞の直後（about whether ...）や to 不定詞の前（whether to continue）でも whether を使います。' },
            { type: 'practice', title: '名詞節と倒置の境界', problems: [
              { body: 'I am not sure if or not the library is open. を、if を残して訂正せよ。', answer: 'I am not sure if the library is open or not. or not は if の直後には置けません。whether を使えば I am not sure whether or not the library is open. とも書けます。' },
              { body: '「彼が説明して初めて、私はその規則を理解した」を Not until he explained it で始めて英訳せよ。', answer: 'Not until he explained it did I understand the rule. 倒置するのは主節の did I understand であり、until 節内は he explained it のままです。' },
              { body: 'No student knew the answer. は否定語で始まるが、did no student know に直す必要があるか。', answer: '必要ありません。No student 全体が主語であり、否定の副詞句を前置した文ではないからです。「どの生徒も答えを知らなかった」。' },
            ] },
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
              content: '結果を表す so ... that 構文で **So + 形容詞・副詞**を前に出すと、So difficult was the exam that few students passed. のような倒置ができます。普通の語順は The exam was so difficult that ... です。また **Such was his kindness that ...** は His kindness was such that ... の倒置で、such が程度の大きさを表します。文頭に such を含む名詞句があるだけで必ず倒置するわけではなく、Such a mistake can happen to anyone. の Such a mistake は普通の主語です。',
            },
            {
              type: 'list',
              items: [
                '**So loud was the music that** I could not sleep.（音楽がうるさすぎて眠れなかった）',
                '**Such was his kindness that** everyone respected him.（彼はとても親切だったので皆に敬愛された）',
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
                ['im- / ex-（この語での意味）', '中へ／外へ', '**import** 輸入する / **export** 輸出する。impossible の im- は否定で別の働き'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: '接尾辞は品詞を推測する手がかりです。-tion は動作・状態・結果などの名詞（education）、-able は「〜できる」などの形容詞（readable）、-ly は多くの場合副詞（quickly）を作ります。ただし friendly は形容詞です。接辞だけで断定せず、文中の働きと辞書で確かめましょう。',
            },
            { type: 'heading', level: 3, content: '意味だけでなく語の組合せで覚える' },
            { type: 'text', content: '単語カードで意味を思い出せたら、品詞・可算性・後ろに続く形を例文で確認します。「提案する」という日本語だけで suggest 人 to do と組み立てると誤りになります。suggest doing / suggest that S (should) do をまとまりで覚えましょう。information や advice は通常不可算名詞で、複数の情報でも informations とはしません。' },
            { type: 'table', headers: ['語', '覚える形', '自作例文'], rows: [
              ['discuss（他動詞）', 'discuss + 話題（about を置かない）', 'We discussed the new schedule.（新しい日程について話し合った）'],
              ['depend（自動詞）', 'depend on + 対象', 'The price depends on the size.（価格は大きさによって決まる）'],
              ['advice（不可算名詞）', 'some advice / a piece of advice', 'My teacher gave me some useful advice.（先生は役立つ助言をくれた）'],
            ] },
            { type: 'example', title: '自作例文：語形から仮説を立てる', body: 'The old sign was unreadable, so we replaced it. の unreadable の意味を、接辞と文脈を根拠に説明しよう。', answer: '「読めない」。read に「〜できる」の -able が付き readable、否定の un- が付いて unreadable になります。後半の「それを取り替えた」も解釈を支えます。ただし、古い看板が読めなかった原因が汚れか破損かは、この文だけでは分かりません。' },
            { type: 'practice', title: '語法を使って確かめる', problems: [
              { body: 'We discussed about the problem yesterday. の不要な語を除き、訳せ。', answer: 'We discussed the problem yesterday. about が不要です。「私たちは昨日その問題について話し合った」。名詞 discussion では a discussion about the problem と言えます。' },
              { body: 'She gave me two useful advices. を a piece of を使う形に直せ。', answer: 'She gave me two useful pieces of advice. 数えるのは piece なので pieces とし、advice に -s を付けません。' },
              { body: '「ケンは早く出発することを提案した」を suggest と動名詞で英訳せよ。', answer: 'Ken suggested leaving early. suggest の目的語には動名詞を置けます。Ken suggested to leave early. とはしません。' },
              { body: 'The staff were friendly and answered quickly. の friendly と quickly の品詞と働きを答えよ。', answer: 'friendly は形容詞で staff の性質を述べる補語、quickly は副詞で answered を修飾します。-ly という語尾だけで副詞と決めつけないこと。' },
            ] },
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
            '使用頻度の高い順に単語を効率よく学習できる',
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
          objectives: ['主張・根拠・具体例を区別して読む', '指示語の内容と選択肢の根拠を本文から示せる', '本文にない断定を加えずに要約できる'],
          blocks: [
            { type: 'heading', level: 3, content: 'パラグラフリーディング' },
            {
              type: 'text',
              content: '英語の論説文では、段落の中心内容を述べる**トピックセンテンス**を具体例や根拠が支える構成がよく見られます。ただし中心文は冒頭とは限らず、末尾に置かれたり明示されなかったりすることもあります。スキミングは大意をつかむ読み方です。見出し・段落の冒頭や末尾・論理標識を手がかりに見通しを立て、設問の根拠は該当箇所の前後を精読して確認します。',
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
              content: '意見英作文では **主張 → 理由 → 具体例 → 結論** を基本の流れとして、指定語数や設問に応じて理由の数と文数を調整します。必ず5文にする必要はありません。First, In addition, Therefore などは実際の論理関係に合わせて使い、接続語だけで根拠を示したつもりにならないようにします。',
            },
            {
              type: 'note',
              variant: 'tip',
              content: 'まず「何を主張し、なぜそう考えるか」を短く明確な文で書きましょう。複雑な構文を無理に足すより、主語と動詞の対応、時制、具体例が理由を支えているかを確認する方が大切です。',
            },
            { type: 'heading', level: 3, content: '自作読解文：事実と提案を分ける' },
            { type: 'text', content: 'A school library used to close at four. Some students could not visit it after club activities. Last month, the school kept it open until six on Tuesdays and Thursdays. During this trial, more students borrowed books, and several said they finally had a quiet place to study.\n\nThe change was useful, but it also required extra staff time. The school has not yet decided whether to continue it. Before making a decision, it should compare the benefits with the cost. A longer opening schedule may help students, but it should also be practical for the staff.' },
            { type: 'example', title: '読み取り例：指示語の中身', body: '第2段落第1文の The change が指す内容を、日本語で具体的に答えよう。', answer: '学校図書館の閉館時刻を、火曜と木曜には4時から6時へ延ばしたこと。直前の名詞 books ではなく、第1段落で説明された運用変更全体を受けています。「毎日6時まで開けた」とは書かれていません。' },
            { type: 'practice', title: '根拠を示す読解問題', problems: [
              { body: '本文で述べられている事実を選び、根拠を示せ。A 全生徒の成績が上がった。B 試行中、本を借りる生徒が増えた。C 延長の継続が決定した。', answer: 'B。more students borrowed books が直接の根拠です。A は本文に言及がなく、C は has not yet decided と反対です。役立ったという評価から成績向上まで推測してはいけません。' },
              { body: '第2段落の but it also required extra staff time は、前段落の利点を否定しているか。', answer: '否定していません。便利だったことを認めつつ、職員の追加勤務時間という負担も示しています。利点と費用の両方を比べるべきだという後の提案につながります。' },
              { body: '筆者が決定前に行うべきだと提案していることは何か。学校がすでに行った事実と区別して答えよ。', answer: '延長の利点と費用を比較すること。it should compare the benefits with the cost の should が提案を示します。すでに行ったのは特定の曜日に閉館時刻を延ばす試行であり、比較が完了したとは述べていません。' },
              { body: '本文全体を英語35〜45語で要約せよ。解答例では句読点を除き、空白で区切った語を1語と数える。', answer: '例（39語）：A school tried longer library hours on two days a week. More students borrowed books, but the change required extra staff time. The writer recommends comparing benefits and costs before deciding whether to continue, considering both students and staff. 試行・利点・負担・筆者の提案を残し、本文にない成績や継続決定を足していません。' },
            ] },
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
                ['逆接', "however / but / yet / nevertheless / still", '前の内容からの予想と違う展開。前の事実そのものを否定するとは限らない'],
                ['原因・根拠', "because / since / as / for", 'because などの理由節は主節の前後に置ける。理由の for は通常、先に述べた内容に説明を加える'],
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
                ['逆接', "but / yet", "however / nevertheless"],
                ['添加', "also", "moreover / furthermore"],
                ['例示', "for example / such as ＋ 名詞", "for example / for instance（どちらも論説文で使用可）"],
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
                  body: 'Because it was cold, we stayed inside. の Because を、理由を表す接続詞 for にそのまま置き換えてよいか。適切な for の文も作れ。',
                  hint: '理由の for は、通常は先の発言に理由・説明を添えます。',
                  answer: 'そのまま置き換えるのは不適切。We stayed inside, for it was cold. とします。for は先行する内容を説明するので、because のように理由節を前置しません。ただし文芸的な文章などでは前の文を受けて For で新しい文を始める例もあり、「等位接続詞は文頭不可」という規則ではありません。' },
                {
                  body: 'In other words の直前に難しい抽象表現があった場合、直後には何が来ると予測できるか。',
                  answer: '同じ内容の**平易な言い換え**。未知語があっても直後の平易な文で意味を拾える。逆に直後が具体例なら、for instance 系が来ているはず。',
                },
                {
                  body: '筆者の主張を探すとき、however の後ろを必ず最優先してよいか。理由を添えて答えよ。',
                  answer: '必ずとはいえません。「通説→however→自説」なら有力な手がかりですが、単なる例の対比の場合もあります。therefore などによる結論や段落全体の内容を合わせて読み、筆者自身の立場を特定します。',
                },
              ],
            },
            {
              type: 'quiz',
              title: '確認クイズ',
              questions: [
                {
                  question: '「一般的な見方を紹介し、それに対して筆者が自説を述べる」構成で、自説の直前に来るマーカーとして最も適切なのは？',
                  choices: ['however の後ろ', 'for example の後ろ', 'namely の後ろ'],
                  answerIndex: 0,
                  explanation: 'この構成なら however が対立する自説への転換を示します。ただし however の後ろが常に主張とは限りません。for example は例示、namely は具体的な特定・言い換えを示します。',
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
