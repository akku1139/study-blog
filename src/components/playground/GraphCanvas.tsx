import { useEffect, useRef } from 'react';

export interface Viewport {
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
}

interface Props {
  width?: number;
  height?: number;
  viewport: Viewport;
  /** y = f(x) のグラフを描く。color 指定可 */
  functions?: { f: (x: number) => number; color?: string; width?: number; dashed?: boolean }[];
  points?: { x: number; y: number; color?: string; label?: string }[];
  /** 追加のカスタム描画 */
  overlay?: (ctx: CanvasRenderingContext2D, map: Mapper) => void;
}

export interface Mapper {
  toPx: (x: number, y: number) => [number, number];
  fromPx: (px: number, py: number) => [number, number];
  scale: { x: number; y: number };
}

const AXIS = '#94a3b8';
const GRID = '#e2e8f0';

/** 座標平面キャンバス。軸・目盛り・関数グラフ・点を描画する共通部品。 */
export function GraphCanvas({ width = 480, height = 400, viewport, functions = [], points = [], overlay }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);

    const sx = width / (viewport.xmax - viewport.xmin);
    const sy = height / (viewport.ymax - viewport.ymin);
    const toPx = (x: number, y: number): [number, number] => [
      (x - viewport.xmin) * sx,
      height - (y - viewport.ymin) * sy,
    ];
    const mapper: Mapper = {
      toPx,
      fromPx: (px, py) => [viewport.xmin + px / sx, viewport.ymin + (height - py) / sy],
      scale: { x: sx, y: sy },
    };

    // グリッド
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 1;
    const stepX = niceStep(viewport.xmax - viewport.xmin);
    const stepY = niceStep(viewport.ymax - viewport.ymin);
    for (let x = Math.ceil(viewport.xmin / stepX) * stepX; x <= viewport.xmax; x += stepX) {
      const [px] = toPx(x, 0);
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, height);
      ctx.stroke();
    }
    for (let y = Math.ceil(viewport.ymin / stepY) * stepY; y <= viewport.ymax; y += stepY) {
      const [, py] = toPx(0, y);
      ctx.beginPath();
      ctx.moveTo(0, py);
      ctx.lineTo(width, py);
      ctx.stroke();
    }

    // 軸
    const [ox] = toPx(0, 0).slice(0, 1);
    const [, oy] = toPx(0, 0);
    ctx.strokeStyle = AXIS;
    ctx.lineWidth = 1.5;
    if (viewport.xmin <= 0 && viewport.xmax >= 0) {
      ctx.beginPath();
      ctx.moveTo(ox, 0);
      ctx.lineTo(ox, height);
      ctx.stroke();
    }
    if (viewport.ymin <= 0 && viewport.ymax >= 0) {
      ctx.beginPath();
      ctx.moveTo(0, oy);
      ctx.lineTo(width, oy);
      ctx.stroke();
    }
    // 目盛り数字
    ctx.fillStyle = '#64748b';
    ctx.font = '10px system-ui, sans-serif';
    ctx.textAlign = 'center';
    for (let x = Math.ceil(viewport.xmin / stepX) * stepX; x <= viewport.xmax; x += stepX) {
      if (Math.abs(x) < 1e-9) continue;
      const [px, py] = toPx(x, 0);
      ctx.fillText(formatTick(x), px, Math.min(Math.max(py + 12, 10), height - 2));
    }
    ctx.textAlign = 'right';
    for (let y = Math.ceil(viewport.ymin / stepY) * stepY; y <= viewport.ymax; y += stepY) {
      if (Math.abs(y) < 1e-9) continue;
      const [px, py] = toPx(0, y);
      ctx.fillText(formatTick(y), Math.min(Math.max(px - 4, 22), width - 2), py + 3);
    }

    // 関数
    for (const fn of functions) {
      ctx.strokeStyle = fn.color ?? '#2563eb';
      ctx.lineWidth = fn.width ?? 2;
      ctx.setLineDash(fn.dashed ? [6, 4] : []);
      ctx.beginPath();
      let pen = false;
      const N = width * 2;
      for (let i = 0; i <= N; i++) {
        const x = viewport.xmin + ((viewport.xmax - viewport.xmin) * i) / N;
        const y = fn.f(x);
        if (!isFinite(y)) {
          pen = false;
          continue;
        }
        const [px, py] = toPx(x, y);
        if (py < -50 || py > height + 50) {
          pen = false;
          continue;
        }
        if (!pen) {
          ctx.moveTo(px, py);
          pen = true;
        } else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 点
    for (const p of points) {
      const [px, py] = toPx(p.x, p.y);
      ctx.fillStyle = p.color ?? '#dc2626';
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fill();
      if (p.label) {
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(p.label, px + 8, py - 8);
      }
    }

    overlay?.(ctx, mapper);
  }, [width, height, viewport, functions, points, overlay, dpr]);

  return (
    <canvas
      ref={ref}
      style={{ width, height, maxWidth: '100%', borderRadius: 8, border: '1px solid #e2e8f0' }}
    />
  );
}

function niceStep(range: number): number {
  const raw = range / 10;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / mag;
  return (n >= 5 ? 5 : n >= 2 ? 2 : 1) * mag;
}
function formatTick(v: number): string {
  return Math.abs(v) >= 1000 || (Math.abs(v) < 0.01 && v !== 0)
    ? v.toExponential(0)
    : String(parseFloat(v.toPrecision(3)));
}
