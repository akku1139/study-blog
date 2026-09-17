// コンテンツ全体の自己検証:
// 1) 全レッスンの全ブロック（text / heading / formula / derivation / example /
//    practice / quiz / note / table / list）に含まれる $...$・$$...$$ の KaTeX 文法。
//    見出し・レッスン title / summary / objectives / 各種ブロック title /
//    derivation の label や table headers などのインライン箇所も検査する。
// 2) 構造の健全性: 科目内 unit ID 重複・lesson ID 重複、空 ID、
//    空記事（blocks 0 件）、quiz の空選択肢。
import katex from 'katex';
import { subjects } from '../src/content/index.ts';

const re = /\$\$([^$]+)\$\$|\$([^$]+)\$/g;
function validateTex(text: string, where: string): string[] {
  const errors: string[] = [];
  const local = new RegExp(re.source, 'g');
  let m: RegExpExecArray | null;
  while ((m = local.exec(text)) !== null) {
    const tex = m[1] ?? m[2];
    try {
      katex.renderToString(tex, { displayMode: Boolean(m[1]), throwOnError: true });
    } catch (e) {
      errors.push(`${where}: ${(e as Error).message} in "${tex.slice(0, 80)}"`);
    }
  }
  for (const error of errors) console.error(error);
  return errors;
}

let fail = 0;
const subjectIds = new Set<string>();
for (const subject of subjects) {
  if (!subject.id?.trim()) {
    console.error(`Empty subject ID: ${subject.name}`);
    fail++;
  }
  if (subjectIds.has(subject.id)) {
    console.error(`Duplicate subject ID: ${subject.id}`);
    fail++;
  }
  subjectIds.add(subject.id);
  const unitIds = new Set<string>();
  const lessonIds = new Set<string>();
  for (const unit of subject.units) {
    if (!unit.id?.trim()) {
      console.error(`${subject.id}: empty unit ID (unit "${unit.name}")`);
      fail++;
    } else if (unitIds.has(unit.id)) {
      console.error(`Duplicate unit ID in ${subject.id}: ${unit.id}`);
      fail++;
    }
    unitIds.add(unit.id);
    for (const lesson of unit.lessons) {
      const where = `${subject.id}/${lesson.id}`;
      if (!lesson.id?.trim()) {
        console.error(`${subject.id}/unit ${unit.id}: empty lesson ID (title "${lesson.title}")`);
        fail++;
      } else if (lessonIds.has(lesson.id)) {
        console.error(`Duplicate lesson ID: ${where}`);
        fail++;
      }
      lessonIds.add(lesson.id);
      fail += validateTex(lesson.title, `${where}/title`).length;
      fail += validateTex(lesson.summary, `${where}/summary`).length;
      for (const [i, o] of (lesson.objectives ?? []).entries()) {
        fail += validateTex(o, `${where}/objective[${i}]`).length;
      }
      if (!lesson.blocks.length) {
        console.error(`${where}: lesson has no blocks (empty article)`);
        fail++;
      }
      for (const b of lesson.blocks) {
        switch (b.type) {
          case 'text':
            fail += validateTex(b.content, where).length;
            break;
          case 'heading':
            fail += validateTex(b.content, `${where}/heading`).length;
            break;
          case 'formula': {
            try {
              katex.renderToString(b.tex, { displayMode: b.display ?? false, throwOnError: true });
            } catch (e) {
              console.log(`${where}/formula: ${(e as Error).message}`);
              fail++;
            }
            break;
          }
          case 'derivation':
            fail += validateTex(b.title, `${where}/derivation "${b.title}"`).length;
            for (const [i, st] of b.steps.entries()) {
              if (st.label) fail += validateTex(st.label, `${where}/derivation "${b.title}" step[${i}].label`).length;
              try {
                if (st.tex) katex.renderToString(st.tex, { displayMode: true, throwOnError: true });
              } catch (e) {
                console.log(`${where}/derivation "${b.title}": ${(e as Error).message} in "${st.tex?.slice(0, 80)}"`);
                fail++;
              }
              if (st.note) fail += validateTex(st.note, `${where}/derivation-note`).length;
            }
            break;
          case 'list':
            for (const it of b.items) fail += validateTex(it, where).length;
            break;
          case 'example':
            fail += validateTex(b.title, `${where}/example "${b.title}"`).length;
            fail += validateTex(b.body, where).length;
            if (b.answer) fail += validateTex(b.answer, where).length;
            break;
          case 'note':
            fail += validateTex(b.content, where).length;
            break;
          case 'table':
            for (const [ci, h] of b.headers.entries()) {
              fail += validateTex(h, `${where}/table header[${ci}]`).length;
            }
            for (const row of b.rows) for (const cell of row) fail += validateTex(cell, where).length;
            break;
          case 'practice':
            if (b.title) fail += validateTex(b.title, `${where}/practice "${b.title}"`).length;
            for (const pr of b.problems) {
              fail += validateTex(pr.body, where).length;
              if (pr.answer) fail += validateTex(pr.answer, where).length;
              if (pr.hint) fail += validateTex(pr.hint, where).length;
            }
            break;
          case 'quiz':
            if (b.title) fail += validateTex(b.title, `${where}/quiz "${b.title}"`).length;
            for (const [qi, q] of b.questions.entries()) {
              if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= q.choices.length) {
                console.error(`${where}/quiz: answerIndex out of range: ${q.answerIndex}`);
                fail++;
              }
              if (!q.choices.length) {
                console.error(`${where}/quiz q[${qi}]: no choices`);
                fail++;
              } else if (q.choices.some((c) => !c.trim())) {
                console.error(`${where}/quiz q[${qi}]: empty choice`);
                fail++;
              }
              fail += validateTex(q.question, where).length;
              for (const c of q.choices) fail += validateTex(c, where).length;
              if (q.explanation) fail += validateTex(q.explanation, where).length;
            }
            break;
          default:
            break;
        }
      }
    }
  }
}
console.log(fail ? `CONTENT SELFTEST FAILURES: ${fail}` : 'ALL CONTENT SELFTEST PASS');
process.exit(fail ? 1 : 0);
