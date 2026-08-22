import { useState } from 'react';
import { renderMathInText } from '../../lib/math-render';
import { gcd, hashSeed, mulberry32, pick, randInt, type Rng } from '../../lib/rng';

interface GeneratedProblem {
  question: string;
  answer: string;
  hint?: string;
}

type TopicGenerator = (rng: Rng) => GeneratedProblem;

/** 項を整形する（coef=0 なら空文字）。first=true で先頭項（符号なし or −のみ） */
function term(coef: number, sym: string, first = false): string {
  if (coef === 0) return '';
  const mag = Math.abs(coef) === 1 && sym !== '' ? sym : `${Math.abs(coef)}${sym}`;
  const sign = first ? (coef < 0 ? '-' : '') : coef < 0 ? ' - ' : ' + ';
  return sign + mag;
}

/** 係数が分数になる項（num/den を既約化） */
function fracTerm(num: number, den: number, sym: string, first = false): string {
  const g = gcd(num, den);
  const n = num / g;
  const d = den / g;
  if (d === 1) return term(n, sym, first);
  const mag = `\\frac{${Math.abs(n)}}{${d}}${sym}`;
  const sign = first ? (n < 0 ? '-' : '') : n < 0 ? ' - ' : ' + ';
  return sign + mag;
}

/** 既約分数 a/b */
function fmtFrac(a: number, b: number): string {
  const g = gcd(a, b);
  const n = a / g;
  const d = b / g;
  if (d === 1) return String(n);
  return `${n < 0 ? '-' : ''}\\frac{${Math.abs(n)}}{${d}}`;
}

function xMinus(a: number, sym = 'x'): string {
  return `${sym} ${a >= 0 ? '-' : '+'} ${Math.abs(a)}`;
}

/** 各トピック: rng は呼び出しごとに新しく渡される。数式は $...$ / $$...$$ 記法 */
export const drillTopics: Record<string, { label: string; generate: TopicGenerator }> = {
  'quadratic-equation': {
    label: '二次方程式（中学3年）',
    generate: (rng) => {
      const p = pick(rng, [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
      let q = pick(rng, [-4, -3, -2, -1, 1, 2, 3, 4, 5, 6]);
      if (q === p) q = q >= 5 ? q - 2 : q + 1;
      const a = randInt(rng, 1, 3);
      const b = -a * (p + q);
      const c = a * p * q;
      return {
        question:
          '次の二次方程式を解け。\n$$' +
          `${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)} = 0` +
          '$$',
        answer: `$x = ${p}, \\; ${q}$`,
        hint: 'たし算・かけ算で $x^2$ の係数と定数項をつくれる 2 数を見つけて因数分解する。',
      };
    },
  },
  'simultaneous-linear': {
    label: '連立方程式（中学2年）',
    generate: (rng) => {
      const x = randInt(rng, -5, 5);
      const y = randInt(rng, -5, 5);
      const a1 = randInt(rng, 1, 3);
      const b1 = randInt(rng, -3, 3);
      const a2 = randInt(rng, -3, 3);
      const b2 = randInt(rng, 1, 3);
      if (a1 * b2 - a2 * b1 === 0) return drillTopics["simultaneous-linear"].generate(rng);
      const c1 = a1 * x + b1 * y;
      const c2 = a2 * x + b2 * y;
      const term = (a: number, v: string) => (a === 1 ? v : a === -1 ? `-${v}` : `${a}${v}`);
      const eq = (a: number, b: number, c: number) =>
        `$${term(a, 'x')}${b >= 0 ? '+' : '-'}${term(Math.abs(b), 'y')} = ${c}$`;
      return {
        question: `次の連立方程式を解け。\n$$${eq(a1, b1, c1).slice(1, -1)} \\qquad ${eq(a2, b2, c2).slice(1, -1)}$$`,
        answer: `$x = ${x}, \\; y = ${y}$`,
        hint: '加減法で片方の文字を消去する。',
      };
    },
  },
  'fraction-arithmetic': {
    label: '分数の計算（中学1年）',
    generate: (rng) => {
      const n1 = randInt(rng, 1, 9);
      const d1 = pick(rng, [2, 3, 4, 5, 6, 8]);
      const n2 = randInt(rng, 1, 9);
      const d2 = pick(rng, [2, 3, 4, 5, 6, 8]);
      const op = pick(rng, ['+', '-'] as const);
      const num = op === '+' ? n1 * d2 + n2 * d1 : n1 * d2 - n2 * d1;
      const den = d1 * d2;
      const g = gcd(num, den);
      const rn = num / g;
      const rd = den / g;
      const ans =
        rn === 0 || rd === 1 ? `$${rn}$` : rn < 0 ? `$-\\frac{${-rn}}{${rd}}$` : `$\\frac{${rn}}{${rd}}$`;
      return {
        question: `次の計算をせよ。\n$$\\frac{${n1}}{${d1}} ${op} \\frac{${n2}}{${d2}}$$`,
        answer: ans,
        hint: '通分して分母をそろえてから分子を計算し、約分する。',
      };
    },
  },
  'polynomial-differentiate': {
    label: '導関数の計算（高校2年）',
    generate: (rng) => {
      const c3 = pick(rng, [-3, -2, -1, 1, 2]);
      const c2 = randInt(rng, -5, 5);
      const c1 = randInt(rng, -6, 6);
      const c0 = randInt(rng, -6, 6);
      const poly =
        `${c3 === 1 ? '' : c3 === -1 ? '-' : c3}x^3` +
        `${c2 === 0 ? '' : c2 > 0 ? `+${c2}x^2` : `${c2}x^2`}` +
        `${c1 === 0 ? '' : c1 > 0 ? `+${c1}x` : `${c1}x`}` +
        `${c0 === 0 ? '' : c0 > 0 ? `+${c0}` : `${c0}`}`;
      const d3 = c3 * 3;
      const d2 = c2 * 2;
      const deriv =
        `${d3 === 1 ? '' : d3}x^2` +
        `${d2 === 0 ? '' : d2 > 0 ? `+${d2}x` : `${d2}x`}` +
        `${c1 === 0 ? '' : c1 > 0 ? `+${c1}` : `${c1}`}`;
      return {
        question: `次の関数を微分せよ。\n$$f(x) = ${poly}$$`,
        answer: `$f'(x) = ${deriv}$`,
        hint: '$(x^n)\' = nx^{n-1}$。定数項の微分は 0。',
      };
    },
  },
  'special-angles': {
    label: '特別な角の三角比（高校1年）',
    generate: (rng) => {
      const deg = pick(rng, [30, 45, 60, 90, 120, 135, 150, 180]);
      const fn = pick(rng, ['sin', 'cos', 'tan'] as const);
      const table: Record<number, Record<string, string>> = {
        30: { sin: '\\frac{1}{2}', cos: '\\frac{\\sqrt{3}}{2}', tan: '\\frac{1}{\\sqrt{3}}' },
        45: { sin: '\\frac{1}{\\sqrt{2}}', cos: '\\frac{1}{\\sqrt{2}}', tan: '1' },
        60: { sin: '\\frac{\\sqrt{3}}{2}', cos: '\\frac{1}{2}', tan: '\\sqrt{3}' },
        90: { sin: '1', cos: '0', tan: '\\text{定義されない}' },
        120: { sin: '\\frac{\\sqrt{3}}{2}', cos: '-\\frac{1}{2}', tan: '-\\sqrt{3}' },
        135: { sin: '\\frac{1}{\\sqrt{2}}', cos: '-\\frac{1}{\\sqrt{2}}', tan: '-1' },
        150: { sin: '\\frac{1}{2}', cos: '-\\frac{\\sqrt{3}}{2}', tan: '-\\frac{1}{\\sqrt{3}}' },
        180: { sin: '0', cos: '-1', tan: '0' },
      };
      return {
        question: `三角比を求めよ。\n$$\\${fn} ${deg}^\\circ$$`,
        answer: `$\\${fn} ${deg}^\\circ = ${table[deg][fn]}$`,
        hint: '単位円で考える。90° を超えると cos・tan は負になる。',
      };
    },
  },
  'exponent-laws': {
    label: '指数法則（中学3年）',
    generate: (rng) => {
      const a = randInt(rng, 2, 6);
      const b = randInt(rng, 2, 6);
      const kind = randInt(rng, 0, 2);
      if (kind === 0) {
        return {
          question: `次の式を簡単にせよ。\n$$x^{${a}} \\times x^{${b}}$$`,
          answer: `$x^{${a + b}}$`,
          hint: '底が同じ積は指数をたす。',
        };
      }
      if (kind === 1) {
        return {
          question: `次の式を簡単にせよ。\n$$\\left( x^{${a}} \\right)^{${b}}$$`,
          answer: `$x^{${a * b}}$`,
          hint: '累乗の累乗は指数をかける。',
        };
      }
      return {
        question: `次の式を簡単にせよ。\n$$x^{${a + b}} \\div x^{${b}}$$`,
        answer: `$x^{${a}}$`,
        hint: '底が同じ商は指数をひく。',
      };
    },
  },
  'binary-convert': {
    label: '2進数⇔10進数（情報I）',
    generate: (rng) => {
      const n = randInt(rng, 5, 255);
      const bin = n.toString(2);
      if (rng() < 0.5) {
        return {
          question: `次の10進数を2進数に変換せよ。\n$$(${n})_{10}$$`,
          answer: `$(${bin})_{2}$`,
          hint: '2で割り続けて余りを下から読む。または 128, 64, 32, … の重みで考える。',
        };
      }
      return {
        question: `次の2進数を10進数に変換せよ。\n$$(${bin})_{2}$$`,
        answer: `$(${n})_{10}$`,
        hint: '各桁に $2^0, 2^1, 2^2, \\ldots$ の重みを掛けてたし合わせる。',
      };
    },
  },
  'hydrocarbon': {
    label: '炭化水素の命名（化学）',
    generate: (rng) => {
      // 直鎖炭化水素の命名と分子式（IUPAC名・学校用語法）
      const ALKANE = ['メタン', 'エタン', 'プロパン', 'ブタン', 'ペンタン', 'ヘキサン', 'ヘプタン', 'オクタン', 'ノナン', 'デカン'];
      const ALKENE = ['エテン', 'プロペン', 'ブテン', 'ペンテン', 'ヘキセン', 'ヘプテン', 'オクテン', 'ノネン', 'デセン'];
      const ALKYNE = ['エチン', 'プロピン', 'ブチン', 'ペンチン', 'ヘキシン', 'ヘプチン', 'オクチン', 'ノニン', 'デシン'];
      const formula = (n: number, h: number) => `$\\mathrm{C}_{${n}}\\mathrm{H}_{${h}}$`;
      const kind = randInt(rng, 0, 2);

      if (kind === 0) {
        // アルカン CnH2n+2
        const n = randInt(rng, 1, 10);
        if (rng() < 0.55) {
          return {
            question: `炭素を ${n} 個もつ直鎖のアルカン（単結合のみ）の名称を答えよ。`,
            answer: ALKANE[n - 1],
            hint: 'アルカンの語尾は「〜ン」。炭素数 1〜4 は慣用名、5 以上はギリシャ語由来。',
          };
        }
        return {
          question: `アルカン「${ALKANE[n - 1]}」の分子式を答えよ。`,
          answer: formula(n, 2 * n + 2),
          hint: 'アルカンは飽和炭化水素。一般式 $\\mathrm{C}_n\\mathrm{H}_{2n+2}$。',
        };
      }

      // アルケン / アルキン
      const alkene = kind === 1;
      const table = alkene ? ALKENE : ALKYNE;
      const type = alkene ? 'アルケン' : 'アルキン';
      const bond = alkene ? '二重結合' : '三重結合';
      const n = randInt(rng, 2, 10);
      const maxPos = Math.max(Math.floor(n / 2), 1); // 番号は小さい方から付けるのでこれ以上は不要
      const pos = randInt(rng, 1, maxPos);
      const stem = table[n - 2];
      const locant = n <= 3 ? '' : `${pos}-`;
      if (rng() < 0.6) {
        return {
          question: `炭素 ${n} 個の直鎖で、${bond}が ${pos} 番目の炭素間にある${type}の名称は?`,
          answer: `${locant}${stem}`,
          hint: `${bond}の位置をハイフンで名前の手前に付けます（炭素 2〜3 個では省略）。`,
        };
      }
      return {
        question: `${locant}${stem} の分子式を答えよ。`,
        answer: formula(n, alkene ? 2 * n : 2 * n - 2),
        hint: alkene ? '不飽結合 1 か所ぶん水素が少なく $\\mathrm{C}_n\\mathrm{H}_{2n}$。' : '$\\mathrm{C}_n\\mathrm{H}_{2n-2}$。',
      };
    },
  },
  'sequence-terms': {
    label: '数列の一般項（高校）',
    generate: (rng) => {
      const n = randInt(rng, 5, 12);
      if (rng() < 0.5) {
        const a1 = randInt(rng, -9, 9);
        const d = randInt(rng, 2, 6);
        const an = a1 + (n - 1) * d;
        return {
          question: `初項 $${a1}$、公差 $${d}$ の等差数列の第 $${n}$ 項を求めよ。`,
          answer: `$a_{${n}} = ${a1} + (${n} - 1) \\cdot ${d} = ${an}$`,
          hint: '$a_n = a_1 + (n-1)d$',
        };
      }
      const a1 = randInt(rng, 1, 4);
      const r = pick(rng, [2, 3]);
      const an = a1 * Math.pow(r, n - 1);
      return {
        question: `初項 $${a1}$、公比 $${r}$ の等比数列の第 $${n}$ 項を求めよ。`,
        answer: `$a_{${n}} = ${a1} \\cdot ${r}^{${n - 1}} = ${an}$`,
        hint: '$a_n = a_1 r^{n-1}$',
      };
    },
  },
  'definite-integral': {
    label: '定積分の計算（高校2年）',
    generate: (rng) => {
      // f(x) = 3a x² + 2b x + c とすると原始関数 F(x) = a x³ + b x² + c x で
      // ∫₀ᵏ f dx = a k³ + b k² + c k となり必ず整数になる
      const a = pick(rng, [-3, -2, -1, 1, 2]);
      const b = randInt(rng, -4, 4);
      const c = randInt(rng, -6, 6);
      const k = pick(rng, [1, 2, 3]);
      const fmtPoly = (terms: Array<[number, string]>): string => {
        const parts = terms
          .filter(([coef]) => coef !== 0)
          .map(([coef, sym], i) => {
            const mag = Math.abs(coef) === 1 && sym !== '' ? sym : `${Math.abs(coef)}${sym}`;
            return (i === 0 ? (coef < 0 ? '-' : '') : coef < 0 ? ' - ' : ' + ') + mag;
          });
        return parts.join('') || '0';
      };
      const val = a * k ** 3 + b * k ** 2 + c * k;
      return {
        question: `次の定積分を求めよ。\n$$\\int_0^{${k}} \\left( ${fmtPoly([
          [3 * a, 'x^2'],
          [2 * b, 'x'],
          [c, ''],
        ])} \\right) dx$$`,
        answer: `$\\left[ ${fmtPoly([
          [a, 'x^3'],
          [b, 'x^2'],
          [c, 'x'],
        ])} \\right]_0^{${k}} = ${val}$`,
        hint: '各項を積分してから上端・下端を代入する。',
      };
    },
  },
  'hard-differentiate': {
    label: '激ムズ微分（積・合成）',
    generate: (rng) => {
      const kind = randInt(rng, 0, 2);
      if (kind === 0) {
        // (x² + px + q)(rx + s) → f' = 3r x² + 2(rp+s) x + (rq+sp)
        const p = randInt(rng, -5, 5);
        const q = randInt(rng, -6, 6);
        const r = randInt(rng, 1, 3);
        const s = randInt(rng, -6, 6);
        const f = `x^2${term(p, 'x')}${term(q, '')}`;
        const g = `${r}x${term(s, '')}`;
        return {
          question: `次の関数を微分せよ。\n$$f(x) = \\left( ${f} \\right)\\left( ${g} \\right)$$`,
          answer: `$f'(x) = ${term(3 * r, 'x^2', true)}${term(2 * (r * p + s), 'x')}${term(r * q + s * p, '')}$`,
          hint: '積の微分公式 $(fg)\' = f\'g + fg\'$。展開してから微分してもよい。',
        };
      }
      if (kind === 1) {
        // (ax + b)^n → n a (ax+b)^{n-1}
        const a = randInt(rng, 1, 3);
        const b = randInt(rng, -5, 5);
        const n = randInt(rng, 3, 5);
        const inner = `${a}x${term(b, '')}`;
        return {
          question: `次の関数を微分せよ。\n$$f(x) = \\left( ${inner} \\right)^{${n}}$$`,
          answer: `$f'(x) = ${n * a}\\left( ${inner} \\right)^{${n - 1}}$`,
          hint: '連鎖律: 外側を微分したものに内側の微分 $a$ を掛ける。',
        };
      }
      // (ax² + b)³ → 6a x (ax²+b)²
      const a = randInt(rng, 1, 2);
      const b = randInt(rng, -5, 5);
      const inner = `${a}x^2${term(b, '')}`;
      return {
        question: `次の関数を微分せよ。\n$$f(x) = \\left( ${inner} \\right)^{3}$$`,
        answer: `$f'(x) = ${6 * a}x\\left( ${inner} \\right)^{2}$`,
        hint: '連鎖律: $3(ax^2+b)^2 \\times 2ax$。',
      };
    },
  },
  'indefinite-integrate': {
    label: '激ムズ不定積分',
    generate: (rng) => {
      if (rng() < 0.55) {
        // ∫(ax³+bx²+cx+d)dx — 係数を選んで原始関数が整数係数になるようにする
        const a = pick(rng, [-4, -3, -2, -1, 1, 2, 3, 4]);
        const b = pick(rng, [-6, -3, 3, 6]);
        const c = pick(rng, [-6, -4, -2, 2, 4, 6]);
        const d = randInt(rng, -6, 6);
        const f = `${term(a, 'x^3', true)}${term(b, 'x^2')}${term(c, 'x')}${term(d, '')}`;
        const F = `${fracTerm(a, 4, 'x^4', true)}${fracTerm(b, 3, 'x^3')}${fracTerm(c, 2, 'x^2')}${term(d, 'x')}`;
        return {
          question: `次の不定積分を求めよ。\n$$\\int \\left( ${f} \\right) dx$$`,
          answer: `$${F} + C$`,
          hint: '$\\int x^n dx = \\dfrac{x^{n+1}}{n+1}$。各項の係数 ÷ (次数+1)。',
        };
      }
      // ∫(ax+b)^n dx = (ax+b)^{n+1} / (a(n+1)) + C
      const a = randInt(rng, 1, 3);
      const b = randInt(rng, -5, 5);
      const n = pick(rng, [2, 3]);
      const inner = `${a}x${term(b, '')}`;
      return {
        question: `次の不定積分を求めよ。\n$$\\int \\left( ${inner} \\right)^{${n}} dx$$`,
        answer: `$\\frac{\\left( ${inner} \\right)^{${n + 1}}}{${a * (n + 1)}} + C$`,
        hint: '$u = ax + b$ の置換積分。$u^{n+1}/(n+1)$ をさらに $a$ で割る。',
      };
    },
  },
  'factorize': {
    label: '激ムズ因数分解',
    generate: (rng) => {
      const kind = randInt(rng, 0, 2);
      if (kind === 0) {
        // x² + (p+q)x + pq → (x+p)(x+q)
        const p = pick(rng, [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]);
        let q = pick(rng, [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]);
        if (q === p) q = q >= 6 ? q - 2 : q + 1;
        return {
          question: `次の式を因数分解せよ。\n$$x^2${term(p + q, 'x')}${term(p * q, '')}$$`,
          answer: `$(x ${p >= 0 ? '+' : '-'} ${Math.abs(p)})(x ${q >= 0 ? '+' : '-'} ${Math.abs(q)})$`,
          hint: 'たして $' + (p + q) + '$、かけて $' + p * q + '$ になる 2 数を探す。',
        };
      }
      if (kind === 1) {
        // たすきがけ: (mx+n)(px+q) → mpx² + (mq+np)x + nq
        // 全係数の共通因数が出ないよう（= 完全因数分解になるよう）再抽選する
        const m = randInt(rng, 1, 3);
        const pp = randInt(rng, 1, 3);
        const n = pick(rng, [-4, -3, -2, -1, 1, 2, 3, 4]);
        const q = pick(rng, [-4, -3, -2, -1, 1, 2, 3, 4]);
        const a = m * pp;
        const b = m * q + n * pp;
        const c = n * q;
        if (gcd(gcd(a, Math.abs(b)), Math.abs(c)) > 1) {
          return drillTopics['factorize'].generate(rng);
        }
        const fac = (k: number, l: number) => `${k}x ${l >= 0 ? '+' : '-'} ${Math.abs(l)}`;
        return {
          question: `次の式を因数分解せよ。\n$$${a}x^2${term(b, 'x')}${term(c, '')}$$`,
          answer: `$(${fac(m, n)})(${fac(pp, q)})$`,
          hint: 'たすきがけ。積が $' + a + 'x^2$ と $' + c + '$、たしが $' + b + 'x$ になる組合せ。',
        };
      }
      // x³ + px² + qx + pq = (x+p)(x²+q)
      const p = pick(rng, [-3, -2, -1, 1, 2, 3]);
      const q = randInt(rng, 1, 4);
      return {
        question: `次の式を因数分解せよ。\n$$x^3${term(p, 'x^2')}${term(q, 'x')}${term(p * q, '')}$$`,
        answer: `$(x ${p >= 0 ? '+' : '-'} ${Math.abs(p)})(x^2 + ${q})$`,
        hint: '組み合わせで因数分解。$x^3 + px^2$ と $qx + pq$ に分けて共通因数 $(x + p)$。',
      };
    },
  },
  'limits': {
    label: '激ムズ極限',
    generate: (rng) => {
      const kind = randInt(rng, 0, 3);
      if (kind === 0) {
        // lim_{x→a} (x² − a²)/(x − a) = 2a
        const a = pick(rng, [-4, -3, -2, 2, 3, 4, 5]);
        const facMinus = `(x ${a >= 0 ? '-' : '+'} ${Math.abs(a)})`;
        const facPlus = `(x ${a >= 0 ? '+' : '-'} ${Math.abs(a)})`;
        return {
          question: `次の極限を求めよ。\n$$\\lim_{x \\to ${a}} \\frac{x^2 - ${a * a}}{${xMinus(a)}}$$`,
          answer: `$\\frac{${facMinus}${facPlus}}{${facMinus}} = 2 \\cdot (${a}) = ${2 * a}$`,
          hint: '分子を因数分解して $(x - a)$ を約分する（極限では $x \\neq a$）。',
        };
      }
      if (kind === 1) {
        // lim_{x→∞} (ax²+bx+c)/(dx²+e) = a/d
        const a = randInt(rng, 1, 4);
        const d = randInt(rng, 1, 4);
        const b = randInt(rng, -6, 6);
        const c = randInt(rng, -6, 6);
        const e = randInt(rng, -6, 6);
        return {
          question: `次の極限を求めよ。\n$$\\lim_{x \\to \\infty} \\frac{${a}x^2${term(b, 'x')}${term(c, '')}}{${d}x^2${term(e, '')}}$$`,
          answer: `$${fmtFrac(a, d)}$`,
          hint: '分子・分母を $x^2$ で割ると、低次の項は消える。',
        };
      }
      if (kind === 2) {
        // lim_{x→0} sin(ax)/(bx) = a/b
        const a = randInt(rng, 1, 4);
        const b = randInt(rng, 1, 4);
        const den = `${b === 1 ? '' : b}x`;
        return {
          question: `次の極限を求めよ。\n$$\\lim_{x \\to 0} \\frac{\\sin ${a}x}{${den}}$$`,
          answer: `$${fmtFrac(a, b)}$`,
          hint: `有名極限 $\\lim_{t \\to 0} \\frac{\\sin t}{t} = 1$。$\\frac{\\sin ${a}x}{${den}} = \\frac{1}{${b}} \\cdot ${a} \\cdot \\frac{\\sin ${a}x}{${a}x}$ の形に整理。`,
        };
      }
      // lim_{x→a} (x³ − a³)/(x − a) = 3a²
      const a = pick(rng, [-3, -2, 2, 3, 4]);
      return {
        question: `次の極限を求めよ。\n$$\\lim_{x \\to ${a}} \\frac{x^3 - ${a ** 3}}{${xMinus(a)}}$$`,
        answer: `$\\lim_{x \\to ${a}} \\left( x^2${term(a, 'x')}${term(a * a, '')} \\right) = 3 \\cdot (${a})^2 = ${3 * a * a}$`,
        hint: '$x^3 - a^3 = (x - a)(x^2 + ax + a^2)$ と因数分解。',
      };
    },
  },
};

/**
 * 無限ドリル: ランダムに問題を生成し続ける自己採点ドリル。
 * 初期問題はトピック名から決まる固定シードで生成するため SSR 出力は決定的。
 */
export function MathDrill({ initial }: { initial?: Record<string, unknown> }) {
  const initialTopic =
    typeof initial?.topic === 'string' && drillTopics[initial.topic] ? initial.topic : 'quadratic-equation';
  const [topicKey, setTopicKey] = useState(initialTopic);
  const [seed, setSeed] = useState(() => hashSeed(initialTopic));
  const [count, setCount] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const topic = drillTopics[topicKey];
  // 同じ seed → 同じ問題。SSR も同じ seed を使うので出力が一致する
  const problem = topic.generate(mulberry32(seed));

  function next() {
    setShowAnswer(false);
    setSeed((Math.random() * 0xffffffff) >>> 0);
    setCount((n) => n + 1);
  }
  function changeTopic(e: React.ChangeEvent<HTMLSelectElement>) {
    const k = e.target.value;
    setShowAnswer(false);
    setTopicKey(k);
    setSeed(hashSeed(k));
    setCount(1);
  }

  return (
    <div className="drill">
      <div className="widget-controls">
        <label className="slider">
          トピック
          <select value={topicKey} onChange={changeTopic}>
            {Object.entries(drillTopics).map(([k, t]) => (
              <option key={k} value={k}>{t.label}</option>
            ))}
          </select>
        </label>
        <span className="drill-count">第 {count} 問</span>
        <button onClick={() => setShowAnswer((s) => !s)}>{showAnswer ? '答えを隠す' : '答えを見る'}</button>
        <button onClick={next}>次の問題 →</button>
      </div>
      <div className="drill-question">{renderMathInText(problem.question)}</div>
      {showAnswer && problem.hint && (
        <p className="widget-note"><strong>ヒント:</strong> {renderInlineSafe(problem.hint)}</p>
      )}
      {showAnswer && (
        <div className="drill-answer">{renderMathInText(`**解答:** ${problem.answer}`)}</div>
      )}
      <p className="widget-note">紙に解いてから「答えを見る」で採点しよう。問題は無限に生成できます。</p>
    </div>
  );
}

function renderInlineSafe(text: string): React.ReactNode[] {
  return renderMathInText(text.replace(/\*\*/g, ''));
}
