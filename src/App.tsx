import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/LessonPage';
import { LessonPage } from './pages/LessonPage';
import { SubjectPage } from './pages/SubjectPage';
import { TocPage } from './pages/TocPage';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="site-header">
        <Link to="/" className="site-title">📚 学習ノート</Link>
        <span className="site-tagline">中学・高校・大学 学習指導要領対応</span>
        <nav className="site-nav">
          <Link to="/toc">🗂️ 目次</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>
          学習ノート — 学習指導要領対応のオンライン教材（教科書 + プレイグラウンド）
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
