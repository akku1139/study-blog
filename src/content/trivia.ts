import type { Subject } from './types';

// ============================================================
// 雑学コレクション（学習指導要領外のお楽しみコンテンツ）
// 各テーマ: 読み物としての雑学ノート + カテゴリ別雑学クイズ
// ============================================================

export const triviaSubject: Subject = {
  id: 'trivia',
  stage: 'misc',
  name: '雑学コレクション',
  description: '「へぇ!」が詰まったテーマ別雑学。読み物ノートとランダム出題クイズで楽しみながら知識を増やします。',
  icon: '💡',
  color: '#d97706',
  units: [
    {
      id: 'tv-science',
      name: '科学の雑学',
      gakushuShidoYoryo: '学習指導要領外の自由研究コンテンツ',
      lessons: [
        {
          id: 'trivia-science',
          title: '身近な科学の雑学',
          summary: '金魚の記憶、氷が浮く理由——常識を見直す科学ネタ集。',
          blocks: [
            {
              type: 'note',
              variant: 'info',
              content: '**金魚の記憶は3秒?** 実験では金魚は給餌の場所や時間を数か月覚えています。「記憶3秒」は俗説です。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**氷はなぜ浮く?** 水は凍ると水素結合で六角形のかご構造になり、液体より密度が約8%下がります。だから氷だけじゃなく、凍った水道管も破裂するわけです。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**バナナはベリー類。** 植物学的に漿果（ベリー）は果皮がすべて肉質の果実。バナナはそうですが、イチゴは花托が膨らんだ偽果なのでベリーではありません。',
            },
            {
              type: 'widget',
              widget: { id: 'trivia-quiz', caption: '科学雑学クイズ: 10問ランダム出題', props: { category: 'science' } },
            },
          ],
        },
      ],
    },
    {
      id: 'tv-math',
      name: '数学の雑学',
      gakushuShidoYoryo: '学習指導要領外の自由研究コンテンツ',
      lessons: [
        {
          id: 'trivia-math',
          title: '数学の雑学',
          summary: '0.999…=1 の証明から未解決問題まで。数学の「へぇ」集。',
          blocks: [
            {
              type: 'note',
              variant: 'info',
              content: '**0.99999… は 1 と等しい。** 1/3 = 0.333… の両辺を3倍すれば納得。無限小数は「限りなく近い別の数」ではなく、そのものを表します。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**カプレカ定数 6174。** 4桁の数字を大きい順・小さい順に並べて引く操作を繰り返すと、たとえば 3524 → 5432−2345=3087 → … と計算して必ず 6174 に到達します（最大7回）。3桁版は 495。',
            },
            {
              type: 'note',
              variant: 'warn',
              content: '**まだ解けていない問題たち**: ゴールドバッハ予想（偶数=素数+素数）や奇数の完全数の存在は、コンピュータで巨大な範囲まで確かめられていても、証明はされていません。「全パターン試した」は数学的証明ではないのが面白いところ。',
            },
            {
              type: 'widget',
              widget: { id: 'trivia-quiz', caption: '数学雑学クイズ: 10問ランダム出題', props: { category: 'math' } },
            },
          ],
        },
      ],
    },
    {
      id: 'tv-japan',
      name: '日本語・日本文化の雑学',
      gakushuShidoYoryo: '学習指導要領外の自由研究コンテンツ',
      lessons: [
        {
          id: 'trivia-japan',
          title: '日本語と日本文化の雑学',
          summary: '当て字、鉤括弧、tsunami——日本語と文化の意外な話。',
          blocks: [
            {
              type: 'note',
              variant: 'info',
              content: '**珈琲・煙草・麦酒**は「当て字」。意味ではなく音を借りて漢字を当てた表記です。薔薇(ばら)も当て字の仲間。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**鉤括弧「 」は日本独自の約物。** 英語圏では " " を使います。縦書き文化から生まれた記号です。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**"tsunami" は日本語。** 国際的な学術用語として日本語が定着した例です。sushi, karaoke, emoji など、日本語由来の英単語は増え続けています。',
            },
            {
              type: 'widget',
              widget: { id: 'trivia-quiz', caption: '日本語・文化雑学クイズ: 10問ランダム出題', props: { category: 'japan' } },
            },
          ],
        },
      ],
    },
    {
      id: 'tv-earth',
      name: '宇宙と地球の雑学',
      gakushuShidoYoryo: '学習指導要領外の自由研究コンテンツ',
      lessons: [
        {
          id: 'trivia-earth',
          title: '宇宙と地球の雑学',
          summary: '遠ざかる月、逆回転の金星、伸びる飛行士——スケール感の話。',
          blocks: [
            {
              type: 'note',
              variant: 'info',
              content: '**月は毎年約3.8cmずつ遠ざかっています。** 月面の反射板へのレーザー測距という直接測定による結果。数億年前の「日食が完全に隠せなかった時代」がある理由でもあります。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**金星の1日は1年より長い。** 自転が約243日・公転が約225日で、しかも自転の向きが地球と逆。金星では太陽が西から昇ります。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**エベレストを海溝に沈めても余裕。** 最深部チャレンジャー海淵は水深約10900m。標高8849mのエベレストでも山頂は水面から約2000m沈んだままです。',
            },
            {
              type: 'widget',
              widget: { id: 'trivia-quiz', caption: '宇宙・地球雑学クイズ: 10問ランダム出題', props: { category: 'earth' } },
            },
          ],
        },
      ],
    },
    {
      id: 'tv-food',
      name: '食べ物の雑学',
      gakushuShidoYoryo: '学習指導要領外の自由研究コンテンツ',
      lessons: [
        {
          id: 'trivia-food',
          title: '食べ物の雑学',
          summary: '腐らないハチミツ、同じ仲間のキャベツとブロッコリー——食卓の化学。',
          blocks: [
            {
              type: 'note',
              variant: 'info',
              content: '**ハチミツはほぼ腐りません。** 水分が少なく糖濃度が高いため微生物が繁殖できないのです。数千年前の古代遺跡から食用可能な状態で見つかった例もあります。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**緑茶・烏龍茶・紅茶は全部同じ木の葉。** 葉の酸化（発酵）をどれだけ進めるかの違いだけです。ワインのぶどう品種のような話ではありません。',
            },
            {
              type: 'note',
              variant: 'info',
              content: '**ワサビの辛さは鼻へ抜け、唐辛子の辛さは舌を焼く。** 成分が違うので、感じ方も「匂いの刺激」と「痛み」に分かれます。',
            },
            {
              type: 'widget',
              widget: { id: 'trivia-quiz', caption: '食べ物雑学クイズ: 10問ランダム出題', props: { category: 'food' } },
            },
          ],
        },
      ],
    },
  ],
};
