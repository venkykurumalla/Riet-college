// Small typo-tolerant scorer for the search palette (no dependency).
// ~230 documents, so scoring runs in well under a millisecond per keystroke on the main thread.

export interface SearchField {
  text: string;
  weight: number;
  fuzzy: boolean;
}

export interface SearchDoc<T = unknown> {
  id: string;
  title: string;
  fields: SearchField[]; // other searchable text (module, tagline, key terms, ...)
  payload: T;
}

export interface SearchHit<T = unknown> {
  doc: SearchDoc<T>;
  score: number;
  ranges: [number, number][]; // matched character ranges inside doc.title
}

export const normalise = (s: string) =>
  s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9À-ɏ]+/g, ' ').trim();

const words = (s: string) => normalise(s).split(' ').filter(Boolean);

// Optimal-string-alignment distance (insert, delete, substitute, adjacent swap).
const distance = (a: string, b: string): number => {
  const m = a.length;
  const n = b.length;
  if (Math.abs(m - n) > 2) return 3;
  const d: number[][] = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[m][n];
};

const allowedTypos = (len: number) => (len <= 3 ? 0 : len <= 6 ? 1 : 2);

// How well one query token matches one block of text (0 = no match).
const scoreToken = (token: string, text: string, fuzzy: boolean): number => {
  const ws = words(text);
  let best = 0;
  for (const w of ws) {
    if (w === token) return 1;
    if (w.startsWith(token)) best = Math.max(best, 0.85);
    else if (token.length >= 3 && w.includes(token)) best = Math.max(best, 0.55);
    else if (fuzzy) {
      const t = allowedTypos(token.length);
      if (t > 0) {
        const d = Math.min(distance(token, w), distance(token, w.slice(0, token.length)));
        if (d <= t) best = Math.max(best, 0.5 - 0.12 * d);
      }
    }
  }
  return best;
};

// Character ranges in `title` that explain the match (exact substrings, else the closest word).
const titleRanges = (title: string, tokens: string[]): [number, number][] => {
  const lower = title.toLowerCase();
  const ranges: [number, number][] = [];
  const wordRe = /[a-z0-9À-ɏ]+/gi;
  tokens.forEach(tok => {
    const at = lower.indexOf(tok);
    if (at >= 0) {
      ranges.push([at, at + tok.length]);
      return;
    }
    const t = allowedTypos(tok.length);
    if (t === 0) return;
    let m: RegExpExecArray | null;
    wordRe.lastIndex = 0;
    while ((m = wordRe.exec(title))) {
      const w = m[0].toLowerCase();
      const d = Math.min(distance(tok, w), distance(tok, w.slice(0, tok.length)));
      if (d <= t) {
        ranges.push([m.index, m.index + m[0].length]);
        break;
      }
    }
  });
  ranges.sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [];
  ranges.forEach(r => {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else merged.push([r[0], r[1]]);
  });
  return merged;
};

export function search<T>(docs: SearchDoc<T>[], query: string, limit = 40): SearchHit<T>[] {
  const tokens = words(query);
  if (tokens.length === 0) return [];
  const phrase = tokens.join(' ');
  const hits: SearchHit<T>[] = [];
  for (const doc of docs) {
    let total = 0;
    let ok = true;
    for (const tok of tokens) {
      let best = scoreToken(tok, doc.title, true) * 3;
      for (const f of doc.fields) best = Math.max(best, scoreToken(tok, f.text, f.fuzzy) * f.weight);
      if (best === 0) { ok = false; break; }
      total += best;
    }
    if (!ok) continue;
    if (normalise(doc.title).startsWith(phrase)) total += 1.5; // title starts with the whole query
    hits.push({ doc, score: total, ranges: titleRanges(doc.title, tokens) });
  }
  return hits.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title)).slice(0, limit);
}
