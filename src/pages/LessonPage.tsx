import { Link, useParams } from 'react-router-dom';
import { subjects, stageNames } from '../content';
import type { Block, Lesson, Unit } from '../content/types';
import { renderInline, renderMathInText } from '../lib/math-render';
import { Widget } from '../components/playground/Widget';
import { Diagram } from '../components/Diagram';

export function LessonPage() {
  const { subjectId, lessonId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);
  if (!subject) return <p>見つかりません。</p>;

  let unit: Unit | null = null;
  let lesson: Lesson | null = null;
  for (const u of subject.units) {
    const l = u.lessons.find((x) => x.id === lessonId);
    if (l) {
      unit = u;
      lesson = l;
      break;
    }
  }
  if (!unit || !lesson) return <p>レッスンが見つかりません。</p>;

  // 前後のレッスン
  const flatLessons = subject.units.flatMap((u) => u.lessons.map((l) => ({ ...l, unitId: u.id })));
  const idx = flatLessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? flatLessons[idx - 1] : null;
  const next = idx < flatLessons.length - 1 ? flatLessons[idx + 1] : null;

  return (
    <article>
      <nav className="breadcrumb">
        <Link to="/">ホーム</Link> › <Link to={`/subject/${subject.id}`}>{subject.name}</Link> ›{' '}
        <span>{lesson.title}</span>
      </nav>
      <header className="lesson-header" style={{ borderLeftColor: subject.color }}>
        <h1>{lesson.title}</h1>
        <p className="lesson-summary">{lesson.summary}</p>
      </header>

      {lesson.objectives && (
        <div className="objectives">
          <strong>この単元の目標</strong>
          <ul>
            {lesson.objectives.map((o, i) => (
              <li key={i}>{renderMathInText(o)}</li>
            ))}
          </ul>
        </div>
      )}

      {lesson.blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}

      <nav className="lesson-nav">
        {prev ? (
          <Link to={`/subject/${subject.id}/${prev.id}`} className="nav-prev">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/subject/${subject.id}/${next.id}`} className="nav-next">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':
      return <p className="prose">{renderInline(block.content)}</p>;
    case 'heading':
      return block.level === 3 ? <h3>{block.content}</h3> : <h4>{block.content}</h4>;
    case 'formula':
      return block.display ? (
        <div className="formula-display">{renderMathInText(`$$${block.tex}$$`)}</div>
      ) : (
        <p>{renderMathInText(`$${block.tex}$`)}</p>
      );
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </Tag>
      );
    }
    case 'example':
      return (
        <div className="example-box">
          <div className="example-title">{block.title}</div>
          <p>{renderMathInText(block.body)}</p>
          {block.answer && (
            <details>
              <summary>解答・解説</summary>
              <p>{renderMathInText(block.answer)}</p>
            </details>
          )}
        </div>
      );
    case 'note':
      return <div className={`note note-${block.variant}`}>{renderInline(block.content)}</div>;
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>{block.headers.map((h, i) => <th key={i}>{renderMathInText(h)}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((c, j) => <td key={j}>{renderMathInText(c)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'diagram':
      return (
        <figure>
          <Diagram id={block.diagram} />
          {block.caption && <figcaption className="diagram-caption">{block.caption}</figcaption>}
        </figure>
      );
    case 'widget':
      return <Widget spec={block.widget} />;
  }
}

export function HomePage() {
  const stages: Array<keyof typeof stageNames> = ['junior', 'senior', 'university'];
  return (
    <div>
      <section className="hero">
        <h1>学習ノート</h1>
        <p>
          中学校・高等学校の学習指導要領、大学教養課程に対応した、教科書としても使えるオンライン教材。
          数式はきれいに表示され、グラフやシミュレーションを<strong>その場で動かして</strong>学べます。
        </p>
      </section>
      {stages.map((stage) => {
        const list = subjects.filter((s) => s.stage === stage);
        if (!list.length) return null;
        return (
          <section key={stage}>
            <h2>{stageNames[stage]}</h2>
            <div className="subject-grid">
              {list.map((s) => (
                <Link key={s.id} to={`/subject/${s.id}`} className="subject-card" style={{ borderTopColor: s.color }}>
                  <div className="subject-icon">{s.icon}</div>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <p className="text-sm text-slate-500">
                    {s.units.length} 単元 / {s.units.reduce((n, u) => n + u.lessons.length, 0)} レッスン
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
