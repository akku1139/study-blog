// Run directly with Node 24. --partial checks completed work without claiming the wave is done.
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { subjects } from '../src/content/index.ts';
import type { Lesson } from '../src/content/types.ts';
import katex from 'katex';
const partial = process.argv.includes('--partial');
const json = (file: string) => JSON.parse(readFileSync(new URL(`../docs/${file}`, import.meta.url), 'utf8'));
const baseline = json('wave4-baseline.json') as { lessons: { subject: string; id: string; title: string; blocks: number; examples: number; practice: number }[] };
const plan = json('wave4-tasks.json') as { expectedNew: number; tasks: { task: string; mode: string; subject: string; id?: string; file?: string; targets?: string[]; status: string }[] };
const routes = new Map(subjects.flatMap(s => s.units.flatMap(u => u.lessons.map(l => [`${s.id}/${l.id}`, l] as const))));
const counts = (l: Lesson) => ({ blocks: l.blocks.length, examples: l.blocks.filter(b => b.type === 'example').length, practice: l.blocks.reduce((n, b) => n + (b.type === 'practice' ? b.problems.length : 0), 0) });
for (const b of baseline.lessons) {
  const l = routes.get(`${b.subject}/${b.id}`);
  assert.ok(l, `Lost lesson ${b.subject}/${b.id}`);
  assert.equal(l.title, b.title, `Changed title ${b.id}`);
}
let enhanced = 0, added = 0, formulas = 0;
function check(l: Lesson) {
  const tex = (t: string) => { katex.renderToString(t, { throwOnError: true, strict: 'ignore' }); formulas++; };
  function strings(v: unknown): void {
    if (typeof v === 'string') {
      assert.ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u.test(v), `Broken text ${l.id}`);
      for (const m of v.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g)) tex(m[1] ?? m[2]);
    } else if (Array.isArray(v)) v.forEach(strings);
    else if (v && typeof v === 'object') {
      // Raw TeX is checked separately; escaped dollar signs there are not inline delimiters.
      for (const [key, value] of Object.entries(v)) if (key !== 'tex') strings(value);
    }
  }
  strings(l);
  for (const b of l.blocks) {
    if (b.type === 'formula') tex(b.tex);
    if (b.type === 'derivation') for (const step of b.steps) if (step.tex) tex(step.tex);
    if (b.type === 'example') assert.ok(b.answer?.trim(), l.id);
    if (b.type === 'table') for (const row of b.rows) assert.equal(row.length, b.headers.length, l.id);
    if (b.type === 'practice') for (const p of b.problems) assert.ok(p.answer?.trim(), l.id);
    if (b.type === 'quiz') for (const q of b.questions) {
      assert.ok(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < q.choices.length, l.id);
      assert.ok(q.explanation?.trim(), l.id);
      assert.equal(new Set(q.choices).size, q.choices.length, l.id);
    }
  }
}
assert.equal(plan.tasks.length, 50);
assert.equal(plan.tasks.filter(t => t.mode === 'new').length, plan.expectedNew);
const seen = new Set<string>();
for (const task of plan.tasks) {
  if (task.mode === 'enhance') {
    assert.ok(task.targets?.length, `No enhancement targets ${task.task}`);
    for (const id of task.targets) {
      const key = `${task.subject}/${id}`;
      assert.ok(!seen.has(key), `Duplicate target ${key}`); seen.add(key);
      const old = baseline.lessons.find(l => `${l.subject}/${l.id}` === key)!;
      const l = routes.get(key)!;
      assert.ok(old && l, key);
      const c = counts(l);
      assert.ok(c.blocks - old.blocks >= 8 && c.examples - old.examples >= 2 && c.practice - old.practice >= 3, `Insufficient enhancement ${key}`);
      check(l); enhanced++;
    }
  } else {
    const path = new URL(`../${task.file}`, import.meta.url);
    if (partial && !existsSync(path)) continue;
    assert.ok(existsSync(path), `Missing ${task.file}`);
    const { lesson: l } = await import(path.href) as { lesson: Lesson };
    assert.equal(l.id, task.id);
    assert.ok(!baseline.lessons.some(b => b.subject === task.subject && b.id === l.id));
    assert.ok(l.title.trim() && l.summary.trim() && (l.objectives?.length ?? 0) >= 3, l.id);
    check(l);
    const c = counts(l), q = l.blocks.reduce((n, b) => n + (b.type === 'quiz' ? b.questions.length : 0), 0);
    assert.ok(c.blocks >= 12 && c.examples >= 2 && c.practice >= 3 && q >= 3, l.id);
    if (!partial) assert.strictEqual(routes.get(`${task.subject}/${l.id}`), l, `Not registered ${l.id}`);
    added++;
  }
  if (!partial) assert.equal(task.status, 'parent-verified', `Review incomplete ${task.task}`);
}
if (!partial) {
  assert.equal(added, plan.expectedNew);
  assert.ok(routes.size >= baseline.lessons.length + added);
}
console.log(`${partial ? 'PARTIAL (not completion)' : 'WAVE4 PASS'}: ${baseline.lessons.length} baseline retained; ${enhanced} enhanced; ${added}/${plan.expectedNew} new validated; ${formulas} TeX expressions`);
