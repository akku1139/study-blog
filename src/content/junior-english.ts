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
      ],
    },
  ],
};
