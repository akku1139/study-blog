import type { Subject } from './types';

// ============================================================
// 高校物理基礎（学習指導要領 第2章 第6節「物理基礎」）
// ============================================================

export const seniorPhysics: Subject = {
  id: 'senior-physics',
  stage: 'senior',
  name: '物理基礎',
  description: '運動とエネルギー、波。放物運動や力学的エネルギー保存を可視化して学びます。',
  icon: '⚛️',
  color: '#d97706',
  units: [
    {
      id: 'sp-motion',
      name: '様々な運動',
      gakushuShidoYoryo: '内容「様々な運動」(1) 物体の落下運動と放物運動',
      lessons: [
        {
          id: 'projectile-motion',
          title: '放物運動',
          summary: '水平投射・斜方投射を「水平方向の等速直線運動」と「鉛直方向の加速度運動」に分解して扱う。',
          objectives: [
            '放物運動を2つの独立な運動に分解できる',
            '射程・到達高さ・飛行時間を計算できる',
          ],
          blocks: [
            { type: 'heading', level: 3, content: '運動の分解' },
            {
              type: 'text',
              content: '放物運動の鍵は、**水平方向と鉛直方向を独立に考える**こと。水平方向は力を受けないので等速直線運動、鉛直方向は重力だけ受けるので初速 v₀sinθ の等加速度運動になります。',
            },
            { type: 'formula', tex: 'x = v_0\\cos\\theta \\cdot t, \\qquad y = v_0\\sin\\theta \\cdot t - \\frac{1}{2}gt^2', display: true },
            {
              type: 'widget',
              widget: { id: 'physics-projectile', caption: 'プレイグラウンド: 初速と角度を変えて射程・最高高さの変化を見よう' },
            },
            { type: 'heading', level: 3, content: '重要な結果' },
            {
              type: 'table',
              headers: ['量', '式'],
              rows: [
                ['飛行時間', '$t = \\dfrac{2v_0\\sin\\theta}{g}$'],
                ['射程', '$R = \\dfrac{{v_0}^2 \\sin 2\\theta}{g}$'],
                ['最高高さ', '$H = \\dfrac{{v_0}^2 \\sin^2\\theta}{2g}$'],
              ],
            },
            {
              type: 'note',
              variant: 'tip',
              content: '射程 $R$ に $\\sin 2\\theta$ が出てくるのがポイント。$\\sin 2\\theta$ は θ = 45° で最大になるので、45° の発射角が最も遠くへ飛びます。プレイグラウンドで確かめてみましょう。',
            },
          ],
        },
      ],
    },
  ],
};
