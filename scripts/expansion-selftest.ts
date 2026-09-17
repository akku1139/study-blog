// Node.js 24 の直接実行。新記事の登録漏れと既存記事の消失を検出する。
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { subjects } from '../src/content/index.ts';
import type { Lesson } from '../src/content/types.ts';

const readJson = (name: string) => JSON.parse(readFileSync(new URL(`../docs/${name}`, import.meta.url), 'utf8'));
const baseline: { subject: string; unit: string; id: string; title: string }[] = readJson('article-expansion-baseline.json');
const manifest: { subject: string; id: string }[] = readJson('article-expansion-manifest.json');
const routes = new Map<string, Lesson>();
let examples = 0, problems = 0, quizzes = 0;
function inspectStrings(value: unknown, where: string): void {
  if (typeof value === 'string') {
    assert.ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u.test(value), `${where}: broken control/replacement character`);
  } else if (Array.isArray(value)) value.forEach(v => inspectStrings(v, where));
  else if (value && typeof value === 'object') Object.values(value).forEach(v => inspectStrings(v, where));
}
for (const subject of subjects) {
  const unitIds = new Set<string>();
  for (const unit of subject.units) {
    assert.ok(!unitIds.has(unit.id), `Duplicate unit ${subject.id}/${unit.id}`);
    unitIds.add(unit.id);
    for (const lesson of unit.lessons) {
      const route = `${subject.id}/${lesson.id}`;
      assert.ok(!routes.has(route), `Duplicate route ${route}`);
      routes.set(route, lesson);
      inspectStrings(lesson, route);
      for (const block of lesson.blocks) {
        if (block.type === 'table') for (const row of block.rows) assert.equal(row.length, block.headers.length, `${route}: table width`);
        if (block.type === 'practice') for (const p of block.problems) assert.ok(p.answer?.trim(), `${route}: missing practice answer`);
        if (block.type === 'quiz') for (const q of block.questions) {
          assert.ok(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < q.choices.length, `${route}: invalid quiz answer`);
        }
      }
    }
  }
}
for (const item of baseline) assert.ok(routes.has(`${item.subject}/${item.id}`), `Lost existing lesson ${item.id}`);
assert.ok(manifest.length >= 50, 'Manifest must contain at least 50 new lessons');
assert.equal(new Set(manifest.map(m => m.id)).size, manifest.length, 'Manifest IDs must be unique');
for (const item of manifest) {
  const route = `${item.subject}/${item.id}`;
  const lesson = routes.get(route);
  assert.ok(lesson, `Unregistered new lesson ${route}`);
  const { lesson: source } = await import(`../src/content/additions/${item.id}.ts`);
  assert.strictEqual(lesson, source, `Registered lesson differs from source ${route}`);
  assert.ok(!baseline.some(b => b.id === item.id && b.subject === item.subject), `Not a new route ${route}`);
  assert.ok(lesson.title.trim() && lesson.summary.trim(), `${route}: title/summary missing`);
  assert.ok((lesson.objectives?.length ?? 0) >= 3, `${route}: objectives < 3`);
  assert.ok(lesson.blocks.length >= 12, `${route}: blocks < 12`);
  let e = 0, p = 0, q = 0;
  for (const block of lesson.blocks) {
    if (block.type === 'example') { e++; assert.ok(block.answer?.trim(), `${route}: example answer missing`); }
    if (block.type === 'practice') p += block.problems.length;
    if (block.type === 'quiz') for (const quiz of block.questions) {
      q++;
      assert.ok(quiz.explanation?.trim(), `${route}: quiz explanation missing`);
      assert.equal(new Set(quiz.choices).size, quiz.choices.length, `${route}: duplicate choices`);
    }
  }
  assert.ok(e >= 2 && p >= 3 && q >= 3, `${route}: insufficient examples/practice/quiz (${e}/${p}/${q})`);
  examples += e; problems += p; quizzes += q;
}
assert.ok(routes.size >= baseline.length + manifest.length, 'Total lesson count did not increase enough');
console.log(`EXPANSION PASS: ${baseline.length} existing + ${manifest.length} new; ${routes.size} total lessons`);
console.log(`New content: ${examples} answered examples, ${problems} answered practice problems, ${quizzes} explained quiz questions`);
