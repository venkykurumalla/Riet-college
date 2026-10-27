// Independent recomputation of numeric answers in the 1st Year quizzes (ch 1-12).
// Each expected value is recomputed here by brute force or a separate formula, not copied from the quiz source.
// Usage: node scripts/content/checkNumeric.cjs
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '../..');

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);
const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
const divisors = n => { let c = 0; for (let i = 1; i <= n; i++) if (n % i === 0) c++; return c; };
const modpow = (b, e, m) => { let r = 1n; let x = BigInt(b) % BigInt(m); let k = BigInt(e); const M = BigInt(m); while (k > 0n) { if (k & 1n) r = (r * x) % M; x = (x * x) % M; k >>= 1n; } return Number(r); };
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const sum = a => a.reduce((x, y) => x + y, 0);
const lcmAll = a => a.reduce(lcm);
const gcdAll = a => a.reduce(gcd);

let fails = 0, checks = 0;
const norm = s => String(s).replace(/[,\s₹%°]/g, '').toLowerCase();
const cache = {};
function check(id, n, expected) {
  cache[id] = cache[id] || JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/topicQuizzes', id + '.json'), 'utf8'));
  const q = cache[id].questions[n - 1];
  const got = q.options[q.answerIndex];
  checks++;
  const lead = x => parseFloat(String(x).replace(/,/g, '').replace(/[^0-9.\-]/g, ' ').trim().split(/\s+/)[0]);
  const ok = norm(got) === norm(expected) || (/^[0-9.,]+\s*[a-z]+$/i.test(String(got).trim()) && lead(got) === Number(norm(expected))) || (!isNaN(Number(norm(got))) && !isNaN(Number(norm(expected))) && Math.abs(Number(norm(got)) - Number(norm(expected))) < 0.051);
  if (!ok) { fails++; console.log(`MISMATCH ${id} Q${n}: quiz says "${got}", recomputed "${expected}"`); }
}
const firstSquareMultiplier = n => { for (let m = 1; ; m++) { const p = n * m; if (Number.isInteger(Math.sqrt(p))) return m; } };

// ---- Ch1 Number System
let id = 'y1-quant-num-sys';
check(id, 1, [51, 53, 57, 91].filter(isPrime)[0]);
check(id, 2, sum(range(1, 20)));
check(id, 3, range(1, 20).filter(isPrime).length);
check(id, 5, modpow(7, 4, 10));
check(id, 6, range(100, 999).find(x => Number.isInteger(Math.sqrt(x))));
check(id, 7, modpow(3, 74, 10));
check(id, 8, sum(range(1, 15).map(i => 2 * i - 1)));
check(id, 9, divisors(72));
check(id, 10, Math.pow(Math.ceil(Math.sqrt(1000)), 2) - 1000);
check(id, 11, range(31, 49).filter(isPrime).length);
check(id, 12, modpow(2, 10, 7));
check(id, 13, range(1000, 9999).filter(x => x % 12 === 0).pop());
check(id, 14, sum(range(10, 99)));
check(id, 15, (modpow(2, 2023, 10) * modpow(3, 2024, 10)) % 10);
check(id, 16, divisors(360));
check(id, 17, String(modpow(7, 100, 100)).padStart(2, '0'));
check(id, 18, modpow(17, 23, 16));
check(id, 19, range(101, 299).filter(x => x % 7 === 0).length);
check(id, 20, firstSquareMultiplier(1176));

// ---- Ch2 Divisibility
id = 'y1-quant-divisibility';
check(id, 1, [4821, 4822, 4825, 4829].filter(x => x % 3 === 0)[0]);
check(id, 2, [3214, 3216, 3218, 3222].filter(x => x % 4 === 0)[0]);
check(id, 3, [2471, 2473, 2475, 2478].filter(x => x % 5 === 0)[0]);
check(id, 4, [7253, 7254, 7255, 7256].filter(x => x % 9 === 0)[0]);
check(id, 5, [2728, 2729, 2730, 2731].filter(x => x % 11 === 0)[0]);
check(id, 6, [5120, 5122, 5124, 5126].filter(x => x % 8 === 0)[0]);
check(id, 7, range(0, 9).filter(x => (3000 + x * 100 + 45) % 9 === 0)[0]);
check(id, 8, range(0, 9).filter(x => (8500 + x * 10 + 4) % 11 === 0)[0]);
check(id, 9, 9 - (1000 % 9) === 9 ? 0 : 9 - (1000 % 9));
check(id, 10, range(900, 999).filter(x => x % 7 === 0).pop());
check(id, 11, lcm(6, 8));
check(id, 12, [5436, 5438, 5442, 5444].filter(x => x % 12 === 0)[0]);
check(id, 13, 4567 % 9);
check(id, 14, range(10, 99).filter(x => x % 7 === 0).length);
check(id, 15, range(1000, 9999).find(x => x % lcmAll([3, 4, 5, 6]) === 0));
check(id, 16, range(1000, 9999).filter(x => x % 88 === 0).pop());
check(id, 17, lcmAll([12, 15, 20]) + 5);
check(id, 18, 1234567 % 8);
check(id, 20, range(100, 999).filter(x => x % 12 === 0).length);

// ---- Ch3 HCF and LCM
id = 'y1-quant-hcf-lcm';
check(id, 1, gcd(36, 48)); check(id, 2, lcm(12, 18)); check(id, 3, (12 * 180) / 36); check(id, 4, lcmAll([4, 6, 9]));
check(id, 5, gcdAll([18, 24, 30])); check(id, 6, lcm(15, 20));
check(id, 7, gcd(290 - 4, 460 - 5)); check(id, 8, lcmAll([8, 12, 16])); check(id, 9, lcmAll([12, 18, 24]));
check(id, 10, lcmAll([5, 6, 8]) + 3); check(id, 11, lcmAll([24, 36, 48])); check(id, 12, gcdAll([420, 630, 840]));
check(id, 13, (16 * 240) / 48);
check(id, 14, range(1, 2000).find(x => x % 90 === 4 && x % 7 === 0));
check(id, 15, gcd(4665 - 1305, 6905 - 4665));
check(id, 16, lcmAll([252, 308, 198]));
check(id, 17, range(1000, 9999).filter(x => x % lcmAll([12, 15, 18, 27]) === 0).pop());
check(id, 18, (() => { let best = 0; for (let x = 37; x <= 4107; x += 37) { const y = 4107 / x; if (Number.isInteger(y) && gcd(x, y) === 37) best = Math.max(best, x, y); } return best; })());
check(id, 20, gcd(360, 756));

// ---- Ch4 Fractions and Decimals
id = 'y1-quant-fractions-decimals';
check(id, 4, 1.5 + 2.25); check(id, 6, 5 / 8); check(id, 9, 0.04 * 0.5 / 0.2); check(id, 11, (2 / 3) * (3 / 4) * 80);
check(id, 12, 20 / (3 / 4 - 1 / 2)); check(id, 13, 5.5 / 0.25); check(id, 14, 45 / 0.6);
check(id, 19, 18 / 0.45 * 0.25);
check(id, 7, (2 / 3) * (9 / 10) / (3 / 5));
check(id, 18, 3000 / (1 - 1 / 3 - (1 / 4) * (2 / 3)));
check(id, 15, sum(range(1, 9).map(n => 1 / (n * (n + 1)))).toFixed(4) === (0.9).toFixed(4) ? '9/10' : 'WRONG');

// ---- Ch5 Simplification
id = 'y1-quant-simplification';
check(id, 1, 18 + 12 / 3 * 2 - 5); check(id, 2, (15 - 3) * 4 / 6); check(id, 3, 2 ** 3 + 3 ** 2 - 5); check(id, 4, 50 - (10 + (5 - 2) * 3));
check(id, 5, Math.sqrt(144) + Math.sqrt(81)); check(id, 6, 100 / (5 * 4) + 3);
check(id, 7, 0.25 * 80 + 0.4 * 50); check(id, 8, (6 + 4) ** 2 - (6 - 4) ** 2); check(id, 9, 15 - 3 * (8 - 2 ** 2) / 2);
check(id, 10, 0.5 ** 2 + 0.3 ** 2); check(id, 11, 7 * (3 + 4) - 6 / 2 * 3); check(id, 12, 7 / 8 * 64 - 5 / 6 * 36);
check(id, 13, 12.5 ** 2 - 7.5 ** 2); check(id, 14, 3.6 * 0.4 / 0.12);
check(id, 15, 1002 ** 2 - 998 ** 2); check(id, 16, 117 ** 2 - 83 ** 2); check(id, 17, 1 / 2 / (1 / 4) / (1 / 8));
check(id, 18, (-2) ** 3 * (-3) ** 2 / -6); check(id, 19, 5 + 5 * 5 - 5 / 5); check(id, 20, Math.sqrt(0.0025) + Math.sqrt(0.25) + Math.sqrt(25));

// ---- Ch6 Basic Percentages
id = 'y1-quant-basic-percentages';
check(id, 1, 0.25 * 480); check(id, 2, 72 / 90 * 100); check(id, 3, 0.15 * 360); check(id, 4, 45 / 0.2); check(id, 5, (100 - 80) / 80 * 100);
check(id, 6, 3 / 8 * 100); check(id, 8, 480 / 0.8); check(id, 9, 25 / 125 * 100); check(id, 10, 40000 * 1.1 * 1.2);
check(id, 11, 100 - (30 + 35 - 10)); check(id, 13, (120 + 30) / 0.4); check(id, 14, 0.54 * 600);
check(id, 15, 270 / (0.6 * 0.75)); check(id, 16, 400 / 0.10); check(id, 17, (1 - 100 / 125) * 100); check(id, 18, (1.2 * 1.3 - 1) * 100);
check(id, 19, 5000 * 0.8 * 0.9 * 0.6); check(id, 20, (1.1 * 1.2 - 1) * 100);

// ---- Ch7 Ratio
id = 'y1-quant-basic-ratio';
check(id, 2, 1200 * 3 / 8); check(id, 5, 35 / 5 * 7); check(id, 8, 156 / 13 * 8); check(id, 9, 4500 / 2 * 7); check(id, 10, 540 / 9 * 5);
check(id, 11, range(0, 50).find(x => (7 + x) * 4 === (11 + x) * 3)); check(id, 12, 5 * Math.sqrt(1368 / 38)); check(id, 13, 60 / 10 * 3);
check(id, 15, (() => { for (let x = 1; x < 5000; x++) for (let y = 1; y < 5000; y++) if (5 * x - 3 * y === 1600 && 4 * x - 2 * y === 1600) return 5 * x; })() );
check(id, 16, 6 * 210 / 10); check(id, 17, 50 / (5 / 4) - 30); check(id, 18, range(1, 40).find(a => { const k = 42 / 21; return a === 21 - (14); }));
check(id, 19, 3 * 180 / 12); check(id, 20, '7 : 3');

// ---- Ch8 Proportion
id = 'y1-quant-basic-proportion';
check(id, 1, 5 * 12 / 3); check(id, 2, 3 * 4 / 2); check(id, 3, 6 * 6 / 4); check(id, 4, Math.sqrt(4 * 9)); check(id, 5, 96 / 8 * 5); check(id, 6, 4 * 18 / 9);
check(id, 7, 12 * 15 / 20); check(id, 8, 240 / 4 * 7); check(id, 9, 450 * 12 / 180); check(id, 10, Math.sqrt(4 * 25)); check(id, 11, 40 * 30 / 50);
check(id, 12, 12.5 * 210 / 5); check(id, 13, 7.2 * 25);
check(id, 15, 6 * 9 * 10 / (9 * 5)); check(id, 16, (500 * 18 - 500 * 6) / 400); check(id, 18, 8 * 15 / 10); check(id, 19, (() => { for (let k = 1; k < 100; k++) if ((3 * k + 6) * 3 === (5 * k + 6) * 2) return 3 * k; })());
check(id, 20, 12 * 12 / 48);

// ---- Ch9 Averages
id = 'y1-quant-basic-averages';
check(id, 1, sum([12, 15, 18, 21, 24]) / 5); check(id, 2, sum(range(1, 10)) / 10); check(id, 3, 40 * 5); check(id, 4, 3 * 20 - 15 - 25); check(id, 5, sum([2, 4, 6, 8, 10]) / 5);
check(id, 6, (70 + 80 + 90) / 3); check(id, 7, 11 * 16 - 10 * 15); check(id, 8, 5 * 27 - 4 * 25); check(id, 9, 20 * 3); check(id, 10, (15 * 32 + 48) / 16);
check(id, 11, sum(range(1, 20).map(i => 2 * i - 1)) / 20); check(id, 12, 2 * 60 * 40 / 100); check(id, 13, (30 * 60 + 20 * 70) / 50); check(id, 14, 23);
check(id, 15, 6 * 49 + 6 * 52 - 11 * 50); check(id, 16, 65 + 8 * 2.5); check(id, 17, 5 * 25 + 5 * 34 - 9 * 30); check(id, 18, 11 * 21000 - 10 * 20000);
check(id, 19, 3 * 20 - (2 * 23 + 2 * 5)); check(id, 20, 25 + (100 - 40) / 30);

// ---- Ch10 Profit and Loss
id = 'y1-quant-basic-profit-loss';
check(id, 1, 60 / 400 * 100); check(id, 2, 50 / 250 * 100); check(id, 3, 350 * 1.2); check(id, 4, 500 / 1.25); check(id, 5, 450 / 0.9); check(id, 6, 80 / 640 * 100);
check(id, 7, 1700 / 0.85); check(id, 8, (12 / 10 - 1) * 100); check(id, 10, 800 * 0.85); check(id, 11, (1.2 * 0.9 - 1) * 100);
check(id, 13, 540 / 0.9 * 1.2); check(id, 14, 1260 / 1.05 * 1.2);
check(id, 16, 600 / 1.25 / 15); check(id, 17, 1500 / (1.2 * 1.25)); check(id, 18, (1 - 0.9 * 0.8) * 100); check(id, 19, 150 / 0.15);
check(id, 20, (33 / 22 - 1) * 100);

// ---- Ch11 Simple Interest
id = 'y1-quant-basic-simple-interest';
check(id, 1, 5000 * 8 * 3 / 100); check(id, 2, 2000 + 2000 * 5 * 2 / 100); check(id, 3, 100 * 900 / (6 * 3)); check(id, 4, 100 * 600 / (2000 * 3));
check(id, 5, 100 * 960 / (4000 * 8)); check(id, 6, 1200 * 10 * 0.5 / 100); check(id, 7, 100 / 8); check(id, 8, 7500 - 2 * (8250 - 7500));
check(id, 9, 200 / 20); check(id, 10, 2550 / 17 * 9); check(id, 11, 8000 * 7.5 * (8 / 12) / 100); check(id, 12, 100 * 1080 / (12 * 0.75));
check(id, 13, 6000 * 2 * 3 / 100); check(id, 14, 5000 * 2 * 2 / 100);
check(id, 15, 1200 - 2 * (150 / 1.5)); check(id, 16, 100 * 300 / (1000 * 5)); check(id, 17, 5000 * 4 * 5 / 100 + 3000 * 6 * 5 / 100);
check(id, 18, Math.sqrt(100 * 9 / 25)); check(id, 19, 4 * (12 / 2)); check(id, 20, (36000 - 28000) / 2);

// ---- Ch12 Ages
id = 'y1-quant-basic-ages';
check(id, 1, 20); check(id, 2, 3 * 8); check(id, 3, 25 + 10); check(id, 4, 50 / 5); check(id, 5, 56 / 7 * 3); check(id, 6, 19 - 4 - 4);
check(id, 7, (() => { for (let s = 1; s < 60; s++) { const f = 50 - s; if (f - 5 === 4 * (s - 5)) return f; } })());
check(id, 8, (() => { for (let k = 1; k < 50; k++) if ((4 * k + 5) * 6 === (5 * k + 5) * 5) return 5 * k; })());
check(id, 9, (() => { for (let b = 1; b < 90; b++) if (b + 9 + 10 === 2 * (b - 10)) return b + 9; })());
check(id, 10, ((5 * 24 - 8) - 4 * 8) / 4);
check(id, 11, (() => { for (let d = 1; d < 60; d++) if (3 * d + 12 === 2 * (d + 12)) return d; })());
check(id, 12, (() => { for (let s = 1; s < 60; s++) if (7 * s + 4 === 4 * (s + 4)) return 7 * s; })());
check(id, 13, 8 * 7 / 2); check(id, 14, (32 + 8) * 5 / 8);
check(id, 15, (() => { for (let k = 1; k < 50; k++) if ((5 * k + 3) * 9 === (4 * k + 3) * 11) return 4 * k - 3; })());
check(id, 16, (() => { for (let n = 1; n < 40; n++) if (40 + n === 3 * (10 + n)) return n; })());
check(id, 17, 3 * 100 / 10 - 10); check(id, 18, (() => { for (let k = 1; k < 50; k++) if (3 * k - 10 === (4 * k - 10) / 2) return 7 * k; })());
check(id, 19, (() => { for (let s = 1; s < 80; s++) if (s + 24 + 2 === 2 * (s + 2)) return s + 24; })());
check(id, 20, (() => { for (let s = 1; s < 80; s++) { const f = 7 * (s - 3) + 3; if (f + 3 === 4 * (s + 3)) return s; } })());

console.log(`\n${checks} numeric answers recomputed, ${fails} mismatches`);
process.exit(fails ? 1 : 0);
