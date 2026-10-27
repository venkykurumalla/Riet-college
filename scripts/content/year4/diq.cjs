// Question builders for 4th Year DI chapters: every numeric answer is computed from the dataset.
const { easy, medium, placement } = require('../lib.cjs');
const { round, sum, ratio, pct, table, near } = require('../diLib.cjs');
const K = { e: easy, m: medium, p: placement };
const pad = (val, d) => { const w = near(val, d); for (const k of [1, 2, 3, 4, -1, -2, 5, 6]) { if (w.length >= 3) break; const x = round(val + k * (d ? 10 ** -d : 1), d); if (x !== val && !w.includes(x)) w.push(x); } return w.slice(0, 3); };
const nq = (k, text, val, expl, d = 0) => K[k](text, round(val, d), pad(round(val, d), d), `${expl}`);
const pcq = (k, text, val, expl, d = 1) => K[k](text, pct(val, d), pad(round(val, d), d).map((x) => pct(x, d)), `${expl}`);
const tq = (k, text, c, w, expl) => K[k](text, c, w, expl);
const rq = (k, text, a, b, expl) => { const r = ratio(a, b); const w = [ratio(b, a), ratio(a + 1, b), ratio(a, b + 2), '1 : 1', '2 : 3', '3 : 5'].filter((x, i, arr) => x !== r && arr.indexOf(x) === i).slice(0, 3); return K[k](text, r, w, `${expl}`); };
const best = (names, arr, f = Math.max) => names[arr.indexOf(f(...arr))];
const others = (names, c) => names.filter((n) => n !== c).slice(0, 3);
module.exports = { nq, pcq, tq, rq, best, others, round, sum, ratio, pct, table, pad };
