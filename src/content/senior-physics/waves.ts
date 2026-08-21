import type { Unit } from '../types';

/** 物理 第2項目「波」 */
export const wavesUnit: Unit = {
  id: 'sp-waves',
  name: '波',
  gakushuShidoYoryo: '内容「波」(1) 波の伝わり方と重ね合わせ、(2) 音、(3) 光',
  lessons: [
    {
      id: 'wave-basics',
      title: '波の伝わり方と重ね合わせ',
      summary: '波長・周期・速さの関係、重ね合わせの原理と定在波を学ぶ。',
      objectives: [
        'v = fλ の関係を使いこなせる',
        '重ね合わせの原理で定在波・干渉を説明できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '波の基本式' },
        { type: 'formula', tex: 'v = f\\lambda = \\frac{\\lambda}{T}', display: true },
        {
          type: 'text',
          content: '媒質中を**位相**が伝わるのが波。媒質自身は移動しない点が重要です。横波（変位⊥進行方向：弦・光）と縦波（変位∥進行方向：音）があります。',
        },
        { type: 'heading', level: 3, content: '重ね合わせの原理' },
        {
          type: 'text',
          content:
            '複数の波が重なる点の変位は、**各波の変位の和**になります。同方向に進む2つの波の重ね合わせで干渉・定在波・うなりが生じます。',
        },
        {
          type: 'widget',
          widget: { id: 'wave-simulator', caption: 'プレイグラウンド: 波長を変えて干渉・うなりのような合成波形を観察しよう' },
        },
        { type: 'heading', level: 3, content: '定在波' },
        {
          type: 'list',
          items: [
            '同振幅・同波長で逆向きに進む波の合成で生じる',
            '**腹**: 振幅が最大の点／**節**: いつも変位 0 の点',
            '隣り合う節間の距離は **λ/2**',
            '両端固定の弦：$L = n\\dfrac{\\lambda}{2}$（n = 1, 2, …）',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: '長さ 0.6 m の両端固定の弦に、基本振動が生じた。波の速さが 240 m/s のとき基本振動数を求めよ。',
          answer: '$\\lambda = 2L = 1.2$ m、$f = v/\\lambda = 240/1.2 = 200$ Hz',
        },
      ],
    },
    {
      id: 'sound-light',
      title: '音と光',
      summary: 'ドップラー効果、音の共鳴、光の干渉・回折・分散を学ぶ。',
      objectives: [
        'ドップラー効果の公式を使える',
        'ヤングの実験による光の干渉を計算できる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: 'ドップラー効果' },
        { type: 'formula', tex: "f' = \\frac{v - v_O}{v - v_S} f \\quad (v: \\text{音速})", display: true },
        {
          type: 'text',
          content: '**発音体が近づく・観測者が近づく**と振動数は上がります。符号の向き（近づき→分子分母とも減）を図で確認して代入するのが安全です。',
        },
        { type: 'heading', level: 3, content: '音の共鳴' },
        {
          type: 'text',
          content:
            '閉管（一端閉）は $L = (2n-1)\\dfrac{\\lambda}{4}$、開管（両端開）は $L = n\\dfrac{\\lambda}{2}$ で共鳴します。共鳴法では音速も測定できます。',
        },
        { type: 'heading', level: 3, content: '光の干渉（ヤングの実験）' },
        { type: 'formula', tex: '\\Delta x = \\frac{\\lambda L}{d} \\quad (d: \\text{スリット間}, L: \\text{スクリーン距離})', display: true },
        {
          type: 'text',
          content:
            '光は波であることの決定的な証拠。明線の位置は**光路差 = mλ**、暗線は **光路差 = (m + 1/2)λ** で決まります。',
        },
        {
          type: 'example',
          title: '例題',
          body: '波長 600 nm の光を用い、d = 0.2 mm、L = 1.0 m で明線の間隔を求めよ。',
          answer: '$\\Delta x = 600 \\times 10^{-9} \\times 1.0 / 0.2 \\times 10^{-3} = 3.0 \\times 10^{-3}$ m ＝ **3.0 mm**',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '光の単位は nm（10⁻⁹ m）で与えられることが多い。計算前にすべて m へ換算する癖をつけましょう。',
        },
      ],
    },
  ],
};
