import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { subjects } from '../src/content/index.ts';
const baseline = JSON.parse(readFileSync(new URL('../docs/classics-baseline.json', import.meta.url), 'utf8')) as { subject: string; id: string; title: string }[];
const routes = new Map(subjects.flatMap(s => s.units.flatMap(u => u.lessons.map(l => [`${s.id}/${l.id}`, l] as const))));
assert.equal(baseline.length, 379);
for (const old of baseline) assert.equal(routes.get(`${old.subject}/${old.id}`)?.title, old.title, `Lost/renamed ${old.id}`);
const unit = subjects.find(s => s.id === 'senior-japanese')!.units.find(u => u.id === 'sj-classic')!;
const ids = ['sj-classical-subject-context', 'sj-classical-emotion-evidence', 'sj-kanbun-structure-logic', 'sj-kanbun-dialogue-reading'];
for (const id of ids) {
  const l = unit.lessons.find(l => l.id === id);
  assert.ok(l, `Not in classics unit: ${id}`);
  const { lesson } = await import(`../src/content/additions/${id}.ts`);
  assert.strictEqual(l, lesson);
  assert.ok(l.blocks.length >= 20);
  assert.ok(l.blocks.filter(b => b.type === 'example').length >= 2);
  assert.ok(l.blocks.flatMap(b => b.type === 'practice' ? b.problems : []).length >= 4);
  assert.ok(l.blocks.flatMap(b => b.type === 'quiz' ? b.questions : []).length >= 3);
}
for (const [id, minBlocks, minPractice] of [['classical-grammar', 20, 7], ['kanbun-dokushuho', 19, 5]] as const) {
  const l = unit.lessons.find(l => l.id === id)!;
  assert.ok(l.blocks.length >= minBlocks, id);
  assert.ok(l.blocks.flatMap(b => b.type === 'practice' ? b.problems : []).length >= minPractice, id);
}
console.log('CLASSICS PASS: 379 IDs/titles retained; 4 reading lessons in sj-classic; 2 existing lessons enhanced');
