// Small helpers for 4th Year quizzes: numeric answers are computed in code and distractors are generated near them.
const { easy, medium, placement } = require('../lib.cjs');
const { round, near } = require('../diLib.cjs');
const K = { e: easy, m: medium, p: placement };
const pad = (val, d) => {
  const w = near(val, d);
  for (const k of [1, 2, 3, 4, -1, -2, 5, 6]) { if (w.length >= 3) break; const x = round(val + k * (d ? 10 ** -d : 1), d); if (x !== val && !w.includes(x)) w.push(x); }
  return w.slice(0, 3);
};
// N('m', question, value, explanation, decimals, unit-formatter)
const N = (k, text, val, expl, d = 0, f = (x) => x, shortcut) => K[k](text, f(round(val, d)), pad(round(val, d), d).map(f), `${expl}`, shortcut);
// T('m', question, correct, [3 wrongs], explanation)
const T = (k, text, c, w, expl, shortcut) => K[k](text, c, w, expl, shortcut);
const inr = (x) => `₹${x.toLocaleString('en-IN')}`;
const pc = (x) => `${x}%`;
module.exports = { N, T, inr, pc, round, pad };
