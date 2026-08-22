import { Link } from 'react-router-dom';
import { subjects, stageNames } from '../content';
import type { Stage } from '../content/types';

/** サイト全体の目次ページ: すべての科目・単元・レッスンへのリンク */
export function TocPage() {
  const stages: Stage[] = ['junior', 'senior', 'university', 'misc'];
  let lessonCount = 0;
  for (const s of subjects) for (const u of s.units) lessonCount += u.lessons.length;

  return (
    <div className="toc-page">
      <header className="subject-header" style={{ borderLeftColor: '#0f172a' }}>
        <span className="subject-icon large">🗂️</span>
        <div>
          <h1>目次</h1>
          <p>
            全 {subjects.length} 科目・{lessonCount} レッスンの索引。読みたいレッスンへ直接ジャンプできます。
          </p>
        </div>
      </header>

      {stages.map((stage) => {
        const list = subjects.filter((s) => s.stage === stage);
        if (!list.length) return null;
        return (
          <section key={stage} className="toc-stage">
            <h2>{stageNames[stage]}</h2>
            {list.map((s) => (
              <div key={s.id} className="toc-subject">
                <h3 style={{ borderColor: s.color }}>
                  <Link to={`/subject/${s.id}`}>
                    {s.icon} {s.name}
                    <span className="text-sm text-slate-500">
                      {' '}
                      （{s.units.length} 単元 / {s.units.reduce((n, u) => n + u.lessons.length, 0)} レッスン）
                    </span>
                  </Link>
                </h3>
                {s.units.map((u) => (
                  <div key={u.id} className="toc-unit">
                    <p className="toc-unit-name">{u.name}</p>
                    <ul>
                      {u.lessons.map((l) => (
                        <li key={l.id}>
                          <Link to={`/subject/${s.id}/${l.id}`}>{l.title}</Link>
                          <span className="toc-summary">{l.summary}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}
