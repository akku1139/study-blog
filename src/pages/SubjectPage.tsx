import { Link, useParams } from 'react-router-dom';
import { subjects } from '../content';

export function SubjectPage() {
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);
  if (!subject) return <p>見つかりません。</p>;

  return (
    <div>
      <header className="subject-header" style={{ borderLeftColor: subject.color }}>
        <span className="subject-icon large">{subject.icon}</span>
        <div>
          <h1>{subject.name}</h1>
          <p>{subject.description}</p>
        </div>
      </header>
      {subject.units.map((unit) => (
        <section key={unit.id} className="unit-section">
          <h2>{unit.name}</h2>
          <p className="shido-note">学習指導要領: {unit.gakushuShidoYoryo}</p>
          <ul className="lesson-list">
            {unit.lessons.map((l) => (
              <li key={l.id}>
                <Link to={`/subject/${subject.id}/${l.id}`}>
                  <strong>{l.title}</strong>
                  <span>{l.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
