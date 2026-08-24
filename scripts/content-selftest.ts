// コンテンツ全体の KaTeX 文法検証: 全レッスンのブロック（text / formula / derivation /
// example / practice / quiz / note / table / list）に含まれる $...$・$$...$$ をチェックする。
import katex from 'katex';
import { subjects } from '../src/content/index';

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
  return errors;
}

let fail = 0;
for (const subject of subjects) {
  for (const unit of subject.units) {
    for (const lesson of unit.lessons) {
      const where = `${subject.id}/${lesson.id}`;
      for (const b of lesson.blocks) {
        switch (b.type) {
          case 'text':
            fail += validateTex(b.content, where);
            break;
          case 'heading':
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
            for (const st of b.steps) {
              try {
                if (st.tex) katex.renderToString(st.tex, { displayMode: true, throwOnError: true });
              } catch (e) {
                console.log(`${where}/derivation "${b.title}": ${(e as Error).message} in "${st.tex?.slice(0, 80)}"`);
                fail++;
              }
              if (st.note) fail += validateTex(st.note, `${where}/derivation-note`);
            }
            break;
          case 'list':
            for (const it of b.items) fail += validateTex(it, where);
            break;
          case 'example':
            fail += validateTex(b.body, where);
            if (b.answer) fail += validateTex(b.answer, where);
            break;
          case 'note':
            fail += validateTex(b.content, where);
            break;
          case 'table':
            for (const row of b.rows) for (const cell of row) fail += validateTex(cell, where);
            break;
          case 'practice':
            for (const pr of b.problems) {
              fail += validateTex(pr.body, where);
              if (pr.answer) fail += validateTex(pr.answer, where);
              if (pr.hint) fail += validateTex(pr.hint, where);
            }
            break;
          case 'quiz':
            for (const q of b.questions) {
              fail += validateTex(q.question, where);
              for (const c of q.choices) fail += validateTex(c, where);
              if (q.explanation) fail += validateTex(q.explanation, where);
            }
            break;
          default:
            break;
        }
      }
    }
  }
}
console.log(fail ? `CONTENT KATEX FAILURES: ${fail}` : 'ALL CONTENT KATEX PASS');
process.exit(fail ? 1 : 0);
