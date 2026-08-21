import katex from 'katex';
import type { ReactNode } from 'react';

/** インライン数式 ($...$) とディスプレイ数式 ($$...$$) を含むテキストを KaTeX で描画 */
export function renderMathInText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\$\$([^$]+)\$\$|\$([^$]+)\$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tex = m[1] ?? m[2];
    const display = m[1] !== undefined;
    try {
      parts.push(
        <span
          key={key++}
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(tex, { displayMode: display, throwOnError: false }),
          }}
        />,
      );
    } catch {
      parts.push(tex);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** **太字** を含むテキストを描画 */
export function renderInline(text: string): ReactNode {
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  return segments.map((s, i) =>
    s.startsWith('**') && s.endsWith('**') ? (
      <strong key={i}>{s.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{renderMathInText(s)}</span>
    ),
  );
}
