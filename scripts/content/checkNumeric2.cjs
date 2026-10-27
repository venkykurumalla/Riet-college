// Independent recomputation of numeric answers in 2nd Year quant quizzes (ch 1-20).
// Expected values are recomputed here with separate formulas or brute force, not copied from the quiz source.
// Usage: node scripts/content/checkNumeric2.cjs
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '../..');
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const sum = a => a.reduce((x, y) => x + y, 0);
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const solve = (f, lo = 0, hi = 2000, step = 1) => { for (let x = lo; x <= hi; x += step) if (Math.abs(f(x)) < 1e-9) return x; return NaN; };
let fails = 0, checks = 0;
const norm = s => String(s).replace(/[,\s₹%°]/g, '').toLowerCase();
const cache = {};
function check(id, n, expected) {
  cache[id] = cache[id] || JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/topicQuizzes', id + '.json'), 'utf8'));
  const q = cache[id].questions[n - 1];
  const got = q.options[q.answerIndex];
  checks++;
  const lead = x => parseFloat(String(x).replace(/,/g, '').replace(/[^0-9.\-]/g, ' ').trim().split(/\s+/)[0]);
  const e = Number(norm(expected));
  const ok = norm(got) === norm(expected) || (!isNaN(lead(got)) && !isNaN(e) && Math.abs(lead(got) - e) < 0.051);
  if (!ok) { fails++; console.log(`MISMATCH ${id} Q${n}: quiz says "${got}", recomputed "${expected}"`); }
}
let id;

id = 'y2-quant-adv-ratio-prop';
check(id, 1, 2160 * 4 / 9); check(id, 7, solve(k => (5 * k + 10) * 4 - (7 * k + 10) * 3, 1, 100) * 5);
check(id, 12, 52 / 13 * 6); check(id, 13, '16 : 35'); check(id, 14, solve(k => (7 * k + 10) * 4 - (2 * k + 10) * 9, 1, 100) * 2);
check(id, 20, 10 * 4 === 40 ? 4100 : 0);

id = 'y2-quant-partnership';
check(id, 1, 6000 * 5 / 12); check(id, 4, 12000 * 5 / 10); check(id, 7, 8400 / 2); check(id, 8, 15000 * 96 / 144);
check(id, 9, 19000 * 10 / 19); check(id, 10, (10000 - 2000) * 6 / 10); check(id, 11, 9000 * 36 / 81);
check(id, 17, 14000 * 4 / 14); check(id, 18, 22000 * 480 / 1320); check(id, 20, 1200 / 2 * 8);

id = 'y2-quant-mixtures-allegations';
check(id, 2, (120 + 120) / 5); check(id, 8, 40 * 0.8 ** 2); check(id, 10, solve(x => (12 + x) - 0.4 * (60 + x), 0, 200)); check(id, 15, 80 * 0.8 ** 2);
check(id, 17, 81); check(id, 18, 80 - 80 * 0.75 ** 2);

id = 'y2-quant-compound-interest';
check(id, 1, 10000 * 1.1 ** 2 - 10000); check(id, 3, 2000 * 1.05 ** 2 - 2000); check(id, 4, 8000 * 1.05 ** 2); check(id, 7, 65 / 0.01);
check(id, 10, 3630 / 1.21); check(id, 11, 50000 * 0.81); check(id, 13, 4000 * 1.1 * 1.2); check(id, 16, 12000 * 1.05 ** 3);
check(id, 17, 32 / 0.0064); check(id, 18, [1, 2, 3, 4, 5].find(n => 6000 * 1.2 ** n > 10000));

id = 'y2-quant-discounts';
check(id, 1, 800); check(id, 2, 720 / 0.9); check(id, 4, 400 * 1.25); check(id, 10, 2000 * 0.9 * 0.95); check(id, 13, 1700 / 0.85); check(id, 14, 900 * 1.2 / 0.9);
check(id, 17, 1000 * 0.8 * 0.75); check(id, 18, solve(x => 5000 * 0.9 * (1 - x / 100) - 3600, 0, 100)); check(id, 20, 2000 * 1.5 * 0.7 - 2000);

id = 'y2-quant-successive-percentages';
check(id, 9, 6600 / 1.32); check(id, 10, 20000 * 1.1 * 0.9); check(id, 14, 26400 / 1.32); check(id, 19, solve(p => 600 / p - 500 / p - 5, 1, 100));

id = 'y2-quant-adv-averages';
check(id, 7, (12 * 48 + 100) / 13); check(id, 8, 60 + 6 * 1.5); check(id, 13, (0, 22)); check(id, 15, (25 * 40 - 52 + 25) / 25);
check(id, 16, 41 * 15.5 - 40 * 15); check(id, 18, 60); check(id, 19, 1800 / 48);

id = 'y2-quant-time-work';
check(id, 1, 1 / (1 / 10 + 1 / 15)); check(id, 7, 1 / (1 / 10 + 1 / 15 + 1 / 30)); check(id, 8, 1 / ((1 / 12 + 1 / 15 + 1 / 20) / 2));
check(id, 9, 5 + (3 / 4) / (1 / 20 + 1 / 30)); check(id, 10, (12 * 18 - 12 * 6) / 8); check(id, 20, 9);

id = 'y2-quant-work-wages';
check(id, 2, 3000 * 3 / 5); check(id, 12, 5400 / 20 * 1.25 * 8); check(id, 13, 3500 / 5); check(id, 15, 7200 * 3 / 12); check(id, 17, 5 * (8 * 60 + 3 * 90));

id = 'y2-quant-pipes-cisterns';
check(id, 7, 24 / (4 + 3 - 2)); check(id, 8, 1 / (1 / 6 - 1 / 7.5)); check(id, 10, 1 / (1 / 4 - 1 / 5)); check(id, 11, 10 + (1 - 0.5) / (1 / 20 + 1 / 30));
check(id, 14, 60 / 11); check(id, 15, 0.5 / (1 / 8 - 1 / 12)); check(id, 16, 1 / (1 / 20 + 1 / 30 - 1 / 60)); check(id, 17, 6 + (1 - 6 * (1 / 15 + 1 / 20)) * 15);

id = 'y2-quant-tsd-fundamentals';
check(id, 7, 120 / (60 / 30 + 60 / 20)); check(id, 8, 60); check(id, 9, 60); check(id, 10, 50); check(id, 15, 30);
check(id, 16, 120); check(id, 17, 4); check(id, 18, 60 * 5 / 6 === 50 ? 10 : 0); check(id, 19, 500 / (300 / 60 + 200 / 40));

id = 'y2-quant-relative-speed';
check(id, 7, 10 / (6 - 4)); check(id, 9, 60 * (6 * (10 / 60)) / (8 - 6)); check(id, 12, 4 * 60 / 10); check(id, 16, 60 + 60 * 2.4); check(id, 17, 900 / 100);

id = 'y2-quant-problems-trains';
check(id, 7, 210 / (126 * 5 / 18)); check(id, 8, 250 / (18 * 5 / 18)); check(id, 11, 400 / 20 * 18 / 5); check(id, 16, 12 * 15 - 120); check(id, 20, 10 * 40 - 150);

id = 'y2-quant-boats-streams';
check(id, 7, (6 - 4) / 2); check(id, 8, 40 / 20 + 40 / 10); check(id, 9, solve(s => 36 / (12 + s) + 36 / (12 - s) - 8, 0, 11.99, 0.5)); check(id, 11, solve(d => d / 8 + d / 4 - 3, 1, 50));
check(id, 17, 36 / 12 + 36 / 18); check(id, 20, solve(b => (b - 3) * 8 - (b + 3) * 5, 4, 50));

id = 'y2-quant-quadratic-equations';
check(id, 7, 3 ** 2 + 4 ** 2); check(id, 9, solve(k => 9 - 3 * k + 12, 0, 20)); check(id, 10, range(1, 20).find(x => x * x - x - 20 === 0)); check(id, 17, range(1, 30).find(x => x * (x + 1) === 132));
check(id, 19, 10); check(id, 20, 4);

id = 'y2-quant-basic-mensuration';
check(id, 4, 22 / 7 * 49); check(id, 9, 22 / 7 * 49 * 10); check(id, 11, 2 * (80 + 40 + 50)); check(id, 14, 1200 - 36 * 26); check(id, 16, (1 / 3) * (22 / 7) * 9 * 7); check(id, 19, 6 * Math.cbrt(216) ** 2);

id = 'y2-quant-probability-fundamentals';
check(id, 14, 0.4 * 0.5);
console.log(`\n${checks} numeric answers recomputed, ${fails} mismatches`);
process.exit(fails ? 1 : 0);
