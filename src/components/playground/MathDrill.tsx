import { useState } from 'react';
import { renderMathInText } from '../../lib/math-render';
import { gcd, hashSeed, mulberry32, pick, randInt, type Rng } from '../../lib/rng';

interface GeneratedProblem {
  question: string;
  answer: string;
  hint?: string;
}

type TopicGenerator = (rng: Rng) => GeneratedProblem;

/** 各トピック: rng は呼び出しごとに新しく渡される。数式は $...$ / $$...$$ 記法 */
const topics: Record<string, { label: string; generate: TopicGenerator }> = {
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
      if (a1 * b2 - a2 * b1 === 0) return topics['simultaneous-linear'].generate(rng);
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
};

/**
 * 無限ドリル: ランダムに問題を生成し続ける自己採点ドリル。
 * 初期問題はトピック名から決まる固定シードで生成するため SSR 出力は決定的。
 */
export function MathDrill({ initial }: { initial?: Record<string, unknown> }) {
  const initialTopic =
    typeof initial?.topic === 'string' && topics[initial.topic] ? initial.topic : 'quadratic-equation';
  const [topicKey, setTopicKey] = useState(initialTopic);
  const [seed, setSeed] = useState(() => hashSeed(initialTopic));
  const [count, setCount] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const topic = topics[topicKey];
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
            {Object.entries(topics).map(([k, t]) => (
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
