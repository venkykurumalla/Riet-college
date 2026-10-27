// Shared helpers for data-interpretation quizzes (answers are computed from the data, not typed by hand).
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const round = (x, d = 1) => Math.round(x * 10 ** d) / 10 ** d;
const sum = a => a.reduce((x, y) => x + y, 0);
const ratio = (...v) => { const g = v.reduce(gcd); return v.map(x => x / g).join(' : '); };
const pct = (x, d = 1) => round(x, d) + '%';
// Build a text table from rows: header array + list of row arrays.
const table = (title, header, rows) => title + '\n\n' + [header, ...rows].map(r => r.join(' | ')).join('\n') + '\n\n';
// Distractors: numbers near v that differ from it.
const near = (v, d = 1) => { const out = []; for (const k of [1.1, 0.9, 1.25, 0.8, 1.5]) { const x = round(v * k, d); if (x !== v && !out.includes(x)) out.push(x); } return out.slice(0, 3); };
module.exports = { gcd, round, sum, ratio, pct, table, near };
