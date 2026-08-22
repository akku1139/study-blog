// ============================================================
// 英単語データ生成スクリプト
// 出典:
//  - 語義: EJDict-hand (CC0 1.0) https://github.com/kujirahand/EJDict
//  - 頻度順序: google-10000-english (first20hours, Peter Norvig の語頻度データ由来)
//
// 使い方: node scripts/build-vocab.mjs
// 出力: src/data/vocab-5000.ts （頻度順 5000 語の [英, 意味] タプル）
// ============================================================
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const TARGET = Number(process.argv[2] ?? 5000);
const SKIP_HEAD = 120; // 頻度上位の純粋な機能語（the, of…）はスキップ

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

console.log('fetching EJDict (a-z)...');
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const dict = new Map();
for (const ch of letters) {
  const text = await fetchText(`https://raw.githubusercontent.com/kujirahand/EJDict/master/src/${ch}.txt`);
  for (const line of text.split('\n')) {
    const tab = line.indexOf('\t');
    if (tab <= 0) continue;
    const w = line.slice(0, tab).trim().toLowerCase();
    let mean = line.slice(tab + 1).trim();
    // 品詞変化の表記 [s] [ing] などを除去し、意味部分だけ残す
    mean = mean.replace(/\[[a-z]+\]/g, '').trim();
    if (!w || !mean || !/^[a-z][a-z'-]*$/.test(w)) continue;
    if (!dict.has(w)) dict.set(w, cleanMean(mean));
  }
}
console.log(`dict entries: ${dict.size}`);

function cleanMean(m) {
  // 辞書の記法を整える:
  // - 複数語義は「 / 」区切りなので第1語義のみ採用
  // - 〈U〉〈C〉(可算・不可算), 《+to+名》(語法パターン) を除去
  // - 『』は中身だけ残す
  const firstSense = m.split(' / ')[0];
  let s = firstSense
    .replace(/〈[^〉]*〉/g, '')
    .replace(/《[^》]*》/g, '')
    .replace(/『([^』]*)』/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  if (s.length > 60) {
    const cut = s.slice(0, 60);
    const stop = Math.max(cut.lastIndexOf('、'), cut.lastIndexOf(','));
    s = (stop > 20 ? cut.slice(0, stop) : cut).trim() + '…';
  }
  return s.replace(/^[,、・\s]+/, '').replace(/[,、・\s]+$/, '');
}

console.log('fetching frequency list...');
const freq = (await fetchText('https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-no-swears.txt'))
  .split('\n')
  .map((w) => w.trim())
  .filter(Boolean);

const picked = [];
const seen = new Set();
for (let i = SKIP_HEAD; i < freq.length && picked.length < TARGET; i++) {
  const w = freq[i];
  if (seen.has(w)) continue;
  const mean = dict.get(w);
  if (!mean) continue;
  seen.add(w);
  picked.push([w, mean]);
}
console.log(`picked: ${picked.length}`);

if (picked.length < TARGET) throw new Error('not enough words');

const header = `// ============================================================
// 自動生成ファイル (scripts/build-vocab.mjs)。直接編集しないこと。
// 英単語 ${TARGET} 語・頻度順。
// 出典: 語義 = EJDict-hand (CC0 1.0) / 頻度順 = google-10000-english
// ============================================================
/** [英単語, 意味] のタプル。頻度順に並んでいます */
export const VOCAB_MASTER: Array<[string, string]> = [
`;
const body = picked.map(([w, m]) => `  [${JSON.stringify(w)}, ${JSON.stringify(m)}],`).join('\n');
const out = join(root, 'src', 'data', 'vocab-master.ts');
await mkdir(dirname(out), { recursive: true });
await writeFile(out, header + body + '\n];\n');
console.log(`written: ${out}`);
