import type { Lesson } from '../types.ts';

// ============================================================
// 中学英語 補足レッスン: 疑問文の作り方を深く
// ============================================================

export const lesson: Lesson = {
  id: 'je-questions',
  title: '疑問文の設計図——疑問詞・主語疑問文・話題を尋ねる表現',
  summary:
    'What / When / Why などの疑問詞の選び方、主語を尋ねる特別な語順、How about / What about などの会話表現、そして do と be のどちらで疑問文を作るかの判断基準を整理する。',
  objectives: [
    '尋ねたい情報に応じて適切な疑問詞を選び、正しい語順の疑問文を作れる',
    '主語を尋ねる疑問文は疑問詞＋動詞の語順になることを説明し、作れる',
    'What about / How about など付加情報を尋ねる対話表現を使い分けられる',
    '動詞が一般動詞か be 動詞かを見て、Do と Be のどちらで疑問文を作るか決められる',
  ],
  blocks: [
    { type: 'heading', level: 3, content: '疑問文の全体像' },
    {
      type: 'text',
      content:
        '疑問文は大きく2種類に分けられます。**Yes/No で答えられる疑問文**（Are you a student? / Do you like sushi?）と、**Who・What・When などの疑問詞で情報を尋ねる疑問文**（What do you want?）です。作り方の判断は常に同じ順番で行います。',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**ステップ1**: 尋ねたい情報が「はい／いいえ」なのか、具体的な情報（人・物・時・場所・理由・方法・程度）なのかを決める。',
        '**ステップ2**: 具体的な情報なら、それに合う疑問詞を選ぶ。',
        '**ステップ3**: 尋ねる情報が**主語そのもの**か、**主語以外**かを見る。主語なら語順を入れ替えず疑問詞＋動詞、主語以外なら疑問詞＋助動詞（do / be）＋主語＋動詞の語順にする。',
        '**ステップ4**: 動詞が一般動詞なら Do、be 動詞なら Be（am / is / are）で疑問文を作る。',
      ],
    },
    { type: 'heading', level: 3, content: '疑問詞の一覧と選び方' },
    {
      type: 'table',
      headers: ['疑問詞', '尋ねる情報', '例'],
      rows: [
        ['what', '物・事柄', 'What is this?（これは何ですか）'],
        ['who', '人（主語・目的語）', 'Who broke the window?（誰が割ったの）'],
        ['whose', '所有者', 'Whose bag is this?（誰のかばん）'],
        ['which', '限られた選択肢から選ぶ', 'Which do you like, tea or coffee?'],
        ['when', '時', 'When does the store open?'],
        ['where', '場所', 'Where do you live?'],
        ['why', '理由', 'Why are you late?'],
        ['how', '方法・状態・程度', 'How do you go to school?'],
        ['how + 形容詞', '程度（how long / how old / how many / how much）', 'How long did you stay?'],
      ],
    },
    {
      type: 'note',
      variant: 'tip',
      content:
        'which と what の違いは「選択肢が限定されているか」です。There are two cakes. **Which** cake do you want?（目の前に2つある）／**What** kind of music do you like?（種類が無数にある）。会話で相手に選択肢を示すときは which が自然です。',
    },
    { type: 'heading', level: 3, content: '主語を尋ねる疑問文——語順を入れ替えない' },
    {
      type: 'text',
      content:
        '通常の疑問詞の疑問文は「疑問詞＋助動詞＋主語＋動詞」の語順です（What **do you** eat?）。しかし、尋ねる情報が**主語そのもの**の場合は語順を入れ替えず、「疑問詞＋動詞」だけで疑問文になります。これは中学英語の大きな例外として扱われます。',
    },
    {
      type: 'table',
      headers: ['', '主語を尋ねる（語順そのまま）', '主語以外を尋ねる（語順を入れ替える）'],
      rows: [
        ['be 動詞', 'Who **is** your teacher?（先生は誰）', 'Who **is he**?（彼は誰ですか）'],
        ['一般動詞（過去・三人称単数）', 'Who **broke** the window?（誰が割った）', 'Who **did you** meet?（誰に会った）'],
        ['一般動詞（現在・複数主語）', 'Who **wants** ice cream?（誰が欲しい）', 'Who **do you** want to help?（誰を手伝いたい）'],
      ],
    },
    {
      type: 'text',
      content:
        '見分け方は「疑問詞の直後に**動詞が来るか、主語が来るか**」です。Who broke the window? では who が broke の主語を兼ねます。一方 Who did you meet? では meet の主語は you で、who は meet の**目的語**です。目的語を尋ねているので、いつもどおり did を入れて語順を入れ替えます。',
    },
    {
      type: 'note',
      variant: 'warn',
      content:
        '主語を尋ねる現在形の疑問文では、三人称単数の **-s を忘れない**こと。Who wants ice cream? は who が単数の主語として働くからです（×Who want ice cream?）。また What happens next? も同様に -s が必要です。',
    },
    {
      type: 'example',
      title: '例題1：主語疑問文かどうかの判定',
      body:
        '次の2文の語順が異なる理由を、それぞれ説明せよ。\n(1) Who called you last night?\n(2) Who did you call last night?',
      answer:
        '**(1) は主語を尋ねている**からです。called の主語が who そのものなので、疑問詞＋動詞（called）の語順のまま疑問文になる（昨夜電話をかけたのは誰？）。**(2) は目的語を尋ねている**からです。called の主語は you で、who は call の目的語。主語 you を助動詞 did の後ろに移す通常の語順にする（昨夜あなたは誰に電話した？）。同じ who でも、文中の働き（主語か目的語か）で語順が決まります。',
    },
    {
      type: 'example',
      title: '例題2：疑問詞の選択',
      body:
        '次の日本語に合うよう、空欄に適切な疑問詞を入れよ。\n(1)「このかばんは誰のですか」→ ___ bag is this?\n(2)「赤と青のどちらが好きですか」→ ___ do you like, red or blue?\n(3)「駅までどうやって行きますか」→ ___ do you get to the station?',
      answer:
        '**(1) Whose bag is this?**（所有者を尋ねる whose。who は人そのものを、whose は「誰のもの」を尋ねる）。**(2) Which do you like, red or blue?**（2つの選択肢を示しているので which）。**(3) How do you get to the station?**（方法を尋ねる how。「どうやって〜する」は how を使う）。',
    },
    { type: 'heading', level: 3, content: 'do と be の使い分け——判断基準' },
    {
      type: 'text',
      content:
        '疑問文を作るときに Do と Be のどちらを使うかは、**動詞そのものが be 動詞か一般動詞か**で決まります。形容詞や名詞を見て判断してはいけません。She is happy. の happy は形容詞ですが、文の動詞は is なので疑問文は Is she happy? です。',
    },
    {
      type: 'table',
      headers: ['元の文', '動詞', '疑問文', '否定文'],
      rows: [
        ['She is a nurse.', 'be（is）', 'Is she a nurse?', 'She is not a nurse.'],
        ['They are busy.', 'be（are）', 'Are they busy?', 'They are not busy.'],
        ['He plays tennis.', '一般動詞', 'Does he play tennis?', 'He does not play tennis.'],
        ['You like music.', '一般動詞', 'Do you like music?', 'You do not like music.'],
        ['She went home.', '一般動詞（過去）', 'Did she go home?', 'She did not go home.'],
      ],
    },
    {
      type: 'list',
      items: [
        '**be 動詞の文**: be 動詞を主語の前へ出すだけ。新しい助動詞は要らない（Are you a student?）。',
        '**一般動詞の文**: 主語に合わせて do / does / did を文頭に置き、**動詞は必ず原形に戻す**（Does he play ...? / Did she go ...?）。does や did を付けたまま play**s** や went にすると二重になるので不可。',
        '**助動詞（can / will など）のある文**: 助動詞を主語の前に出すだけ。do は使わない（Can you swim? / Will you come?）。',
      ],
    },
    {
      type: 'note',
      variant: 'warn',
      content:
        '最も多い間違いは **Did you went** のような形です。did を入れたら went（過去形）の仕事は did が引き受けたので、動詞は原形 go に戻します。判断の近道は「文頭に出したもの（be・助動詞・do）以外に時制を示す語を残さない」です。',
    },
    { type: 'heading', level: 3, content: '付加情報を尋ねる対話表現' },
    {
      type: 'text',
      content:
        '会話では、相手の話に情報を足したり、話題を切り替えたりする短い表現がよく使われます。中学校学習指導要領のコミュニケーション表現に対応する主なものを整理します（例文はすべてこの記事のための自作）。',
    },
    {
      type: 'table',
      headers: ['表現', '意味・働き', '自作の使用例'],
      rows: [
        ['What about ...? / How about ...?', '提案・話題の転換・確認（ほぼ同じ意味で置き換え可能）', "How about going to the park?（公園に行くのはどう？）／I am fine. What about you?（私は元気。あなたは？）"],
        ['... , too', '「〜もまた」を添える', 'I play soccer. How about you? — I play soccer, too.'],
        ['... , either', '否定文で「〜もまた（〜ない）」', 'I do not like natto. How about you? — I do not like it, either.'],
        ['What else ...?', 'さらに追加の情報を尋ねる', 'What else did you buy?（他に何を買ったの）'],
        ['Anything else?', 'ほかに何かありますか（店員などが使う決まり文句）', '—That is all, thank you.'],
      ],
    },
    {
      type: 'note',
      variant: 'tip',
      content:
        '「〜もまた」は**肯定文では too**、**否定文では either** と形が変わります（I like it, too. / I do not like it, either.）。また How about の後ろに動詞を置くときは**動名詞 -ing** にします（How about watching a movie?）。to watch にはしません。How about + 名詞（How about a movie?）も自然です。',
    },
    {
      type: 'example',
      title: '例題3：対話の完成',
      body:
        '次の対話の空欄に入る最も自然な表現を、理由とともに答えよ。\nA: I am going to the library tomorrow.\nB: Really? ___ (「僕も行くよ」と続ける文を1文で)',
      answer:
        '**I am going there, too.**（または How about me coming with you? のような提案も可能だが、「僕も行く」という付加情報の追加なら too を使う）。前の文が肯定文なので、肯定の「〜も」は too。否定文（I am not going）なら either に変わります。',
    },
    {
      type: 'practice',
      title: '練習問題',
      problems: [
        {
          body: '「誰がそのニュースを教えてくれたの？」を英語にせよ（主語を尋ねる形）。',
          answer:
            '**Who told you the news?**「教えた人」＝主語を尋ねているので語順を入れ替えず、疑問詞＋動詞の過去形 told。Who did tell you ...? とはしない（did は目的語を尋ねるときだけ使う）。',
          hint: 'told の主語そのものを尋ねている。',
        },
        {
          body: 'Which of the two books ___ (be) more interesting? の空欄を埋めよ。',
          answer:
            '**is**。which of + 複数名詞の形でも、疑問詞 which は単数として扱い、be 動詞は is になるのが標準です（話し言葉では複数扱いの are も見られますが、学校文法では is を選ぶのが無難）。',
        },
        {
          body: 'Why ___ you late for school this morning? — Because I missed the bus. の空欄を埋め、なぜ do ではないのか説明せよ。',
          answer:
            '**were**。主語 you の過去の be 動詞は were。「遅刻した理由」を聞いており、元の文は You were late.（be 動詞の文）だから、be 動詞を前に出すだけ。一般動詞でないので do / did は使いません。',
        },
        {
          body: 'A: I do not have a bicycle. B: I do not have one, ___. 空欄に入る語と理由を答えよ。',
          answer:
            '**either**。「私も自転車を持っていない」＝否定文での「〜もまた」なので either。肯定文なら too を使う。',
        },
        {
          body: '「明日テニスをするのはどう？」を How about を使って英語にせよ。',
          answer:
            '**How about playing tennis tomorrow?** How about の後ろに動詞を置くときは動名詞 -ing（playing）。How about tennis tomorrow? のように名詞だけでも可。',
          hint: 'How about の直後の動詞の形に注意。',
        },
        {
          body: 'Who ___ (want) to join the club? の空欄を埋め、-s が必要な理由を説明せよ。',
          answer:
            '**wants**。主語を尋ねる疑問文で、疑問詞 who がそのまま三人称単数の主語として働くから。現在形の一般動詞に -s（does not を含む三人称単数の形）を付けます。',
        },
      ],
    },
    {
      type: 'quiz',
      title: '確認クイズ',
      questions: [
        {
          question: '「誰がこの手紙を書いたの？」に最も適した英文は？',
          choices: ['Who wrote this letter?', 'Who did write this letter?', 'Whom wrote this letter?'],
          answerIndex: 0,
          explanation:
            'wrote の主語を尋ねているので、語順を入れ替えず Who + 過去形 wrote。Who did you write to?（誰に書いたの）のような目的語を尋ねる場合と違い、did は不要です。',
        },
        {
          question: '次のうち、主語を尋ねる疑問文はどれ？',
          choices: ['What did you buy?', 'Who is in the room?', 'What is your name?'],
          answerIndex: 1,
          explanation:
            'Who is in the room? は is の主語が who そのもの（部屋にいるのは誰？）。What did you buy? は buy の目的語、What is your name? は補語（name の正体）を尋ねています。',
        },
        {
          question: 'Does your sister like coffee? が誤りになる箇所は？（正: 妹はコーヒーが好きですか）',
          choices: [
            'Does ではなく Do にすべき',
            'like を likes にすべき',
            'sister を sisters にすべき',
          ],
          answerIndex: 1,
          explanation:
            'does が三人称単数の -s の仕事を引き受けるので、動詞は原形 like のまま。Does your sister likes ... は二重に -s を付けてしまう典型的な誤りです。',
        },
        {
          question: 'I am tired. How about you? の How about you? の働きは？',
          choices: [
            '理由を尋ねている',
            '同じ質問を相手に投げかけ、付加情報を尋ねている',
            '提案を断っている',
          ],
          answerIndex: 1,
          explanation:
            'What about you? / How about you? は「あなたはどう？」と同じ質問を相手に向け、会話に相手の情報を加える表現です。',
        },
        {
          question: '「私も（それを）見たことがない」の空欄: I have not seen it, ___。',
          choices: ['too', 'either', 'also'],
          answerIndex: 1,
          explanation: '否定文で「〜もまた（〜ない）」は either。too / also は肯定文で使います。',
        },
      ],
    },
    {
      type: 'note',
      variant: 'info',
      content:
        'まとめ: ①情報の種類で疑問詞を選ぶ → ②尋ねるのが主語なら語順そのまま（Who + 動詞）、主語以外なら助動詞を入れる → ③動詞が be か一般動詞かで Do と Be を決める → ④会話では How about / What about と too・either で付加情報を尋ねる。この4段階を機械的に確認すれば、疑問文の書き換えミスはほぼ防げます。',
    },
  ],
};
