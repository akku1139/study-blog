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
          type: 'derivation',
          title: 'アレニウスの式はなぜ指数関数の形をしているのか——ボルツマン因子から',
          steps: [
            {
              label: 'Step 1: 反応には「壁」がある',
              tex: '\\text{反応するには } E_a \\text{（活性化エネルギー）以上の運動エネルギーが必要}',
              note: '分子がただぶつかるだけでは反応しない。結合を切って組替えるための「登るべき坂」が存在する。',
            },
            {
              label: 'Step 2: エネルギー分布はボルツマン因子',
              tex: '\\frac{N(E > E_a)}{N_{total}} = e^{-E_a/k_B T}',
              note: '統計力学の結果、温度 T で「$E_a$ 以上のエネルギーをもつ分子の割合」はこの指数で与えられる。',
            },
            {
              label: 'Step 3: 速度定数はその割合に比例',
              tex: 'k \\propto e^{-E_a/k_BT}',
              note: '反応するかどうかは「十分なエネルギーを持つ分子がどれだけいるか」で決まるため。',
            },
            {
              label: 'Step 4: mol 単位に書き直す（R = N_A k_B）',
              tex: '\\ln k = -\\frac{E_a}{RT} + \\text{定数} = -\\frac{E_a}{RT} + \\ln A',
              note: '対数をとると直線関係になるので、実験データの $\\ln k$ vs $1/T$ の傾きから $E_a$ を求められる——これがアレニウスプロットです。',
            },
          ],
        },
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
