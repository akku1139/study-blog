// ============================================================
// コンテンツモデル
// 学習指導要領（中学校・高等学校）に対応するカリキュラムデータの型定義。
// 教科書本文（セクション列）＋インタラクティブ要素（widget）を
// 同一のブロック列として表現する。
// ============================================================

export type Stage = 'junior' | 'senior' | 'university';

/** 学習指導要領上の教科・科目 */
export interface Subject {
  id: string;              // 例: "junior-math"
  stage: Stage;
  name: string;            // 例: "中学数学"
  description: string;
  icon: string;            // 絵文字アイコン
  color: string;           // テーマカラー (CSS color)
  /** 学習指導要領の「内容」欄に対応する大単元 */
  units: Unit[];
}

export interface Unit {
  id: string;              // 例: "j1-num"
  name: string;            // 例: "数と式"
  /** 学習指導要領での位置づけ（第学年別など）の注記 */
  gakushuShidoYoryo: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;              // URL で使う一意な ID
  title: string;
  summary: string;
  /** 目標（学習指導要領の「知識及び技能」等に対応） */
  objectives?: string[];
  blocks: Block[];
}

// ---------- ブロック（教科書本文の構成要素） ----------

export type Block =
  | { type: 'text'; content: string }                       // 段落。**太字** 対応
  | { type: 'heading'; level: 3 | 4; content: string }
  | { type: 'formula'; tex: string; display?: boolean }      // KaTeX 数式
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'example'; title: string; body: string; answer?: string }
  | { type: 'note'; variant: 'tip' | 'warn' | 'info'; content: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'diagram'; diagram: DiagramId; caption?: string } // 静的図解
  | { type: 'widget'; widget: WidgetRef };                   // プレイグラウンド

/** 教科書内の静的図解の ID */
export type DiagramId =
  | 'number-line'          // 数直線と絶対値
  | 'parabola-translate'   // 放物線の平行移動
  | 'pythagorean-squares'  // 三平方の定理（正方形の面積）
  | 'unit-circle-static'   // 単位円と三角比
  | 'derivative-concept'   // 平均変化率→微分係数
  | 'integral-area'        // 定積分と面積（区分求積）
  | 'sine-rule-triangle'   // 正弦定理・余弦定理の三角形
  | 'projectile-forces';   // 放物運動の分解

/** プレイグラウンド参照 */
export interface WidgetRef {
  id: WidgetId;
  caption: string;
  /** ウィジェットごとの初期パラメータ */
  props?: Record<string, unknown>;
}

export type WidgetId =
  | 'function-grapher'      // 関数グラフ描画
  | 'quadratic-explorer'    // 二次関数 a(x-p)^2+q エクスプローラ
  | 'trig-circle'           // 単位円と三角関数
  | 'derivative-tangent'    // 接線と微分係数
  | 'triangle-solver'       // 三平方の定理 / 直角三角形
  | 'linear-system'         // 連立方程式（2直線の交点）
  | 'probability-simulator' // 確率シミュレータ（サイコロ）
  | 'physics-projectile'    // 物体の放物運動
  | 'vector-explorer'       // ベクトルの和と内積
  | 'wave-simulator';       // 波の重ね合わせ
