// ドリル生成器の自己検証: 全トピック×多シードで KaTeX 文法チェックと出力目視を行う
import katex from 'katex';
import { mulberry32 } from '../src/lib/rng';
import { drillTopics } from '../src/components/playground/MathDrill';

const re = /\$\$([^$]+)\$\$|\$([^$]+)\$/g;
function validateTex(text: string): string | null {
  let m: RegExpExecArray | null;
  const local = new RegExp(re.source, 'g');
  while ((m = local.exec(text)) !== null) {
    const tex = m[1] ?? m[2];
    try {
      katex.renderToString(tex, { displayMode: Boolean(m[1]), throwOnError: true });
    } catch (e) {
      return `${(e as Error).message} in "${tex}"`;
    }
  }
  return null;
}

let fail = 0;
for (const [key, t] of Object.entries(drillTopics)) {
  const questions = new Set<string>();
  for (let s = 0; s < 800; s++) {
    const p = t.generate(mulberry32(s));
    if (!p.question.trim() || !p.answer.trim()) {
      console.log(`FORMAT FAIL ${key}:`, p.question);
      fail++;
      break;
    }
    const errQ = validateTex(p.question);
    const errA = validateTex(p.answer);
    if (errQ || errA) {
      console.log(`KATEX FAIL ${key}: ${errQ ?? errA}\n  Q: ${p.question}\n  A: ${p.answer}`);
      fail++;
      break;
    }
    questions.add(p.question.replace(/\s+/g, ''));
  }
  // 多様性チェック: 800 シードから最低 20 通りの問題文が出ること（special-angles は最大 24）
  if (questions.size < 20) {
    console.log(`VARIETY FAIL ${key}: only ${questions.size} distinct`);
    fail++;
  }
  console.log(`${key}: ok (${questions.size} distinct / 800 seeds)`);
}
console.log(fail ? `FAILURES: ${fail}` : 'ALL TOPICS PASS');
process.exit(fail ? 1 : 0);
