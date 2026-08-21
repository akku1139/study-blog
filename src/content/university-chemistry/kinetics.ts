import type { Unit } from '../types';

/** 大学化学：反応速度論 */
export const kineticsUnit: Unit = {
  id: 'uch-kinetics',
  name: '反応速度論',
  gakushuShidoYoryo: '反応速度式、速度定数とアレニウスの式、反応機構',
  lessons: [
    {
      id: 'rate-laws-arrhenius',
      title: '速度式とアレニウスの式',
      summary: '熱力学は「進むかどうか」、速度論は「どれだけ速いか」を扱う。',
      objectives: [
        '反応次数の読み取りと積分速度式を使える',
        'アレニウスの式で活性化エネルギーを求められる',
      ],
      blocks: [
        { type: 'heading', level: 3, content: '平衡と速度は別物' },
        {
          type: 'text',
          content:
            'ダイヤモンド→黒鉛への変換は ΔG < 0 で自発ですが、室温では永遠に起こりません。**熱力学は行き先、速度論は速さ**——この区別が化学反応論の出発点です。',
        },
        { type: 'formula', tex: 'v = k[A]^m[B]^n, \\qquad \\ln k = -\\frac{E_a}{RT} + \\ln A', display: true },
        {
          type: 'list',
          items: [
            '**反応次数 m, n**: 実験で決める（化学量論係数とは無関係！）',
            '**一次反応**: t½ = ln2/k ——半減期が濃度によらないのが特徴',
            '**アレニウスプロット**: ln k vs 1/T の傾きから活性化エネルギー Eₐ を得る',
            '**触媒**: 別の経路（低い Eₐ の山）を用意する。ΔG は変わらない',
          ],
        },
        {
          type: 'example',
          title: '例題',
          body: 'ある反応の速度が 300 K から 310 K へ温度が上がると2倍になった。Eₐ を概算せよ。',
          answer: 'ln2 = (Eₐ/R)(1/300 − 1/310) より Eₐ ≈ **54 kJ/mol**。10 ℃ 上がるだけで速度が倍になる「Q10 則」はこの式から出てきます。',
        },
        {
          type: 'note',
          variant: 'tip',
          content: '速度式の決定には「初期速度法」（一方の濃度を固定して他方を変える）と「積分速度式の直線性チェック」の2本柱。問題文のデータ形式を見て使い分けましょう。',
        },
      ],
    },
  ],
};
