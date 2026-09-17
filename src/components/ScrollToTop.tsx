import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/** SPA遷移のスクロール制御。再読み込み時のブラウザーによる復元は妨げない。 */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const previousUrl = useRef<string | null>(null);

  useLayoutEffect(() => {
    const url = pathname + search + hash;
    // StrictModeのeffect再実行でも初回のスクロール位置を消さない。
    if (previousUrl.current === url) return;
    const initial = previousUrl.current === null;
    previousUrl.current = url;

    if (hash) {
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* 不正な%表記はそのまま検索 */ }
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }
    if (!initial) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, search, hash]);

  return null;
}
