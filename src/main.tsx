import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HomePage, LessonPage } from './pages/LessonPage';
import { SubjectPage } from './pages/SubjectPage';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="site-header">
        <Link to="/" className="site-title">📚 学習ノート</Link>
        <span className="site-tagline">中学・高校 学習指導要領対応</span>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>学習ノート — 学習指導要領対応のオンライン教材（教科書 + プレイグラウンド）</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/subject/:subjectId/:lessonId" element={<LessonPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
