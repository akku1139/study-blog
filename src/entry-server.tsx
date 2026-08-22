import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { subjects } from './content';

export { subjects };

/** URL を受け取り、静的 HTML 文字列を返す（ビルド時のプリレンダリング用） */
export function render(url: string): string {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  );
}
