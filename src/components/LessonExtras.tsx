import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// ---------- localStorage ヘルパ ----------
const BOOKMARK_KEY = 'studyblog:bookmarks';
const memoKey = (subjectId: string, lessonId: string) => `studyblog:memo:${subjectId}:${lessonId}`;

export interface BookmarkEntry {
  subjectId: string;
  lessonId: string;
  lessonTitle: string;
  subjectName: string;
  savedAt: number;
}

function loadBookmarks(): BookmarkEntry[] {
  try {
    const raw = localStorage.getItem(BOOKMARK_KEY);
    return raw ? (JSON.parse(raw) as BookmarkEntry[]) : [];
  } catch {
    return [];
  }
}

// ---------- しおりボタン（レッスンページのヘッダーに置く） ----------
export function BookmarkButton(props: {
  subjectId: string;
  lessonId: string;
  lessonTitle: string;
  subjectName: string;
}) {
  const [saved, setSaved] = useState(false);
  // SSR では何もしない。マウント後に localStorage を見て状態を合わせる
  useEffect(() => {
    setSaved(loadBookmarks().some((b) => b.subjectId === props.subjectId && b.lessonId === props.lessonId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.subjectId, props.lessonId]);

  function toggle() {
    const list = loadBookmarks();
    const exists = list.some((b) => b.subjectId === props.subjectId && b.lessonId === props.lessonId);
    const next = exists
      ? list.filter((b) => !(b.subjectId === props.subjectId && b.lessonId === props.lessonId))
      : [{ ...props, savedAt: Date.now() }, ...list].slice(0, 20);
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
    setSaved(!exists);
  }

  return (
    <button className={`bookmark-btn ${saved ? 'active' : ''}`} onClick={toggle}>
      {saved ? '🔖 しおりをはさむ中' : '🔖 しおりをはさむ'}
    </button>
  );
}

// ---------- ホームの「続きから学ぶ」（しおり一覧） ----------
export function BookmarksSection() {
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>([]);
  useEffect(() => setBookmarks(loadBookmarks()), []);

  if (!bookmarks.length) return null;
  return (
    <section className="bookmarks-section">
      <h2>🔖 しおり</h2>
      <div className="bookmark-list">
        {bookmarks.slice(0, 8).map((b) => (
          <Link
            key={`${b.subjectId}/${b.lessonId}`}
            to={`/subject/${b.subjectId}/${b.lessonId}`}
            className="bookmark-card"
          >
            <strong>{b.lessonTitle}</strong>
            <span>{b.subjectName}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ---------- レッスンメモ ----------
export function LessonMemo({ subjectId, lessonId }: { subjectId: string; lessonId: string }) {
  const key = memoKey(subjectId, lessonId);
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [mounted, setMounted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 非制御コンポーネントとして使い、保存済みメモはマウント後に反映する。
  // textarea はハイドレーション不一致の原因になるためマウント後に描画する（SSG 対応）
  useEffect(() => {
    setMounted(true);
    if (areaRef.current) areaRef.current.value = localStorage.getItem(key) ?? '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setStatus('saving');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      try {
        localStorage.setItem(key, e.target.value);
        setStatus('saved');
      } catch {
        setStatus('idle');
      }
    }, 600);
  }

  return (
    <div className="memo-box">
      <div className="memo-header">
        <strong>📝 メモ</strong>
        <span className={`memo-status status-${status}`}>
          {status === 'saved' ? '保存しました' : status === 'saving' ? '保存中…' : 'この端末のみに保存'}
        </span>
      </div>
      {mounted ? (
        <textarea
          ref={areaRef}
          onChange={onChange}
          rows={5}
          placeholder="このレッスンの要点、わからなかったこと、復習予定などを書いておきましょう（自動保存）"
        />
      ) : (
        <div className="memo-placeholder">メモ欄はページ読み込み後に使えるようになります。</div>
      )}
    </div>
  );
}
