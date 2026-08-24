import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/LessonPage';
import { LessonPage } from './pages/LessonPage';
import { SubjectPage } from './pages/SubjectPage';
import { TocPage } from './pages/TocPage';
import { DrillPage } from './pages/DrillPage';
import { ExamPrepPage } from './pages/ExamPrepPage';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="site-header">
        <Link to="/" className="site-title">📚 学習ノート</Link>
        <span className="site-tagline">中学・高校・大学の学習内容に沿った自学習サイト</span>
        <nav className="site-nav">
          <Link to="/exam-prep">🎯 直前対策</Link>
          <Link to="/drills">⚡ 無限ドリル</Link>
          <Link to="/toc">🗂️ 目次</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>
          学習ノート — 学校の授業内容に沿って学べる自学習サイト（解説＋プレイグラウンド）
          {' · '}
          <a href="https://github.com/akku1139/study-blog" target="_blank" rel="noopener noreferrer">
            GitHub（AGPL-3.0）
          </a>
        </p>
      </footer>
    </div>
  );
}

/** ルーターの外側で使える本体。クライアントは BrowserRouter、サーバーは MemoryRouter で包む */
export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toc" element={<TocPage />} />
        <Route path="/drills" element={<DrillPage />} />
        <Route path="/exam-prep" element={<ExamPrepPage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/subject/:subjectId/:lessonId" element={<LessonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h1>404 — ページが見つかりません</h1>
      <p>
        お探しのページは存在しないか、移動しました。<Link to="/">トップページ</Link>から探してください。
      </p>
    </div>
  );
}
