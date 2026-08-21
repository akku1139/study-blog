import type { Unit } from '../types';

/** 情報I 第2項目「コンピュータとプログラミング」 */
export const programmingUnit: Unit = {
  id: 'si-programming',
  name: 'コンピュータとプログラミング',
  gakushuShidoYoryo:
    '内容「コンピュータとプログラミング」コンピュータの仕組み、プログラムの基本構造（順次・分岐・繰り返し）、アルゴリズム',
  lessons: [
    {
      id: 'computer-basics-algorithm',
      title: 'コンピュータの仕組みとアルゴリズム',
      summary: 'ハードウェアの構成、2進数、アルゴリズムの考え方。',
      objectives: [
        'コンピュータの5大装置を説明できる',
        '2進数・16進数の変換ができる',
        '基本3構造でアルゴリズムを表現できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'コンピュータの構成' },
        {
          type: 'list',
          items: [
            '**入力装置**（キーボード等）→ **記憶装置**（メモリ・ストレージ）→ **演算制御装置**（CPU）→ **出力装置**（ディスプレイ等）',
            'CPUは「フェッチ → デコード → 実行」を高速に繰り返す',
            '**メモリ階層**: レジスタ ≫ キャッシュ ≫ メモリ ≫ ストレージ（速いほど小さい・高い）',
          ],
        },
        { type: 'heading', level: 3, content: '基数変換' },
        { type: 'formula', tex: '(1011)_2 = 8 + 0 + 2 + 1 = (11)_{10}, \\qquad (255)_{10} = (FF)_{16}', display: true },
        {
          type: 'text',
          content:
            '10進 → 2進は **2で割り続けて余りを下から読む**。16進は2進4桁と対応するので、2進 ↔ 16進は桁区切りだけで変換できます。',
        },
        { type: 'heading', level: 3, content: 'アルゴリズムの基本3構造' },
        {
          type: 'table',
          headers: ['構造', '意味', '擬似コード例'],
          rows: [
            ['順次', '上から順に実行', '`s ← s + i`'],
            ['分岐', '条件で処理を変える', '`if 条件 then ... else ...`'],
            ['繰り返し', '条件が満たされる間ループ', '`while 条件 do ... `'],
          ],
        },
        {
          type: 'example',
          title: '例題（線形探索 vs 二分探索）',
          body: '整列済みデータ1000件から1件を探すとき、二分探索は最大何回の比較で見つかるか。線形探索との差も述べよ。',
          answer: '二分探索：$\\lceil \\log_2 1000 \\rceil = 10$ 回。線形探索：最大 1000 回。データ量が増えるほど効率の差が指数的に開く。',
        },
      ],
    },
    {
      id: 'programming-practice',
      title: 'プログラミングの実践',
      summary: '変数・配列・関数を使い、簡単なアルゴリズムを書く。',
      blocks: [
        { type: 'heading', level: 3, content: 'よく出るアルゴリズム' },
        {
          type: 'list',
          items: [
            '**合計・平均**: ループで累積する',
            '**最大値探索**: 先頭を仮の最大値にし、より大きい値が出たら更新',
            '**カウント**: 条件を満たしたらカウンタを +1',
            '**ソート**: 隣接交換（バブルソート）など。計算量 O(n²)',
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          content: '疑似コード問題では「**変数の値の変化を表で追跡**」するのが最短ルート。特に while 文では終了条件がいつ成り立つかを先に確認しましょう。',
        },
        {
          type: 'example',
          title: '例題',
          body: '配列 data = [5, 3, 8, 1] の最大値を求める擬似コードを示せ。',
          answer:
            '`max ← data[1]`　`for i = 2 to 4`　`　if max < data[i] then max ← data[i]`　→ **max = 8**',
        },
      ],
    },
  ],
};
