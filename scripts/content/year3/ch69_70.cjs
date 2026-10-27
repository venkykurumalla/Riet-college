const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { round, sum, ratio, pct, table, near } = require('../diLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const pad = (val, d) => { const w = near(val, d); for (const k of [1, 2, 3, 4, -1, -2, 5]) { if (w.length >= 3) break; const x = round(val + k * (d ? 10 ** -d : 1), d); if (x !== val && !w.includes(x)) w.push(x); } return w; };
const nq = (text, val, expl, d = 0) => ({ q: text, c: val, w: pad(val, d), e: `${expl} The answer is ${val}.` });
const tq = (text, c, w, expl) => ({ q: text, c, w, e: expl });
const pcq = (text, val, expl, d = 1) => ({ q: text, c: pct(val, d), w: pad(round(val, d), d).map((x) => pct(x, d)), e: `${expl} The answer is ${pct(val, d)}.` });

// ================= Chapter 69: growth rate and CAGR =================
const items = ['A', 'B', 'C', 'D', 'E', 'F'];
const v20 = [1000, 500, 8000, 64, 729, 1000];
const v23 = [1331, 864, 9261, 125, 1000, 729];
const T69 = table('Value of six investments (₹ thousand) at the start of 2020 and at the end of 2023 (3 years)', ['Investment', 'Start of 2020', 'End of 2023'], items.map((c, i) => [c, v20[i], v23[i]]));
const tot = v23.map((v, i) => (v / v20[i] - 1) * 100);
const cagr = v23.map((v, i) => (Math.pow(v / v20[i], 1 / 3) - 1) * 100);
const ix = (c) => items.indexOf(c);
const itO = (c) => items.filter((x) => x !== c).slice(0, 3);
// annual series for average growth versus CAGR
const ser = [100, 110, 132, 138.6, 173.25];
const syrs = [2019, 2020, 2021, 2022, 2023];
const TS = table('Annual revenue (₹ crore)', ['Year', ...syrs], [['Revenue', ...ser]]);
const yoy = ser.slice(1).map((v, i) => (v / ser[i] - 1) * 100);
const serCagr = (Math.pow(ser[4] / ser[0], 1 / 4) - 1) * 100;
const ch69 = C({
  n: 69, id: 'y3-di-growth-rate', cat: 'di', title: 'Growth Rate and CAGR Computation from DI',
  tag: 'Total growth, average annual growth and compound annual growth rate from start and end values',
  url: 'https://www.indiabix.com/data-interpretation/',
  over: 'Growth can be measured in three ways. Total growth is the change over the whole period as a percentage of the start. The simple average annual growth divides total growth by the number of years. The compound annual growth rate (CAGR) is the single yearly rate that, applied every year, takes the start value to the end value: CAGR = (end ÷ start)^(1/n) − 1. They differ when the yearly rates vary, and a good analyst knows which one a question asks for.',
  place: 'CAGR and growth-rate questions appear in management-oriented DI sets and in finance sections.',
  real: 'Investment returns, company revenue and population growth are reported as CAGR.',
  obj: ['Compute total growth as a percentage', 'Compute CAGR for 2–4 year periods', 'Distinguish simple average growth from CAGR', 'Project a value forward at a given CAGR', 'Use the rule of 72 for doubling time'],
  pre: ['Compound Interest', 'Percentage-Based DI', 'Approximation Techniques in DI'],
  refresh: 'Value after n years at rate r: start × (1 + r)ⁿ. Total growth = (end − start) ÷ start.',
  defs: ['Total growth: (end − start) ÷ start × 100.', 'Simple average growth: total growth ÷ number of years.', 'CAGR: the constant yearly rate that gives the same end value.', 'Year-on-year (YoY) growth: change from one year to the next.', 'Rule of 72: doubling time ≈ 72 ÷ rate (in %).'],
  intu: 'Compounding means each year\'s growth is on the previous year\'s larger base. CAGR is the one steady rate that does the same job.',
  mental: 'For short periods try common rates: 10% for 3 years gives 1.331, 20% gives 1.728, 5% gives 1.1576, 25% gives 1.953. Match the ratio end ÷ start with a known power.',
  formulas: [['Total growth', '(end − start) ÷ start × 100', 'Whole period.', 'Simple.', '1,000 → 1,331 is 33.1%'], ['CAGR', '(end ÷ start)^(1/n) − 1', 'n years.', 'Compound.', '1.331^(1/3) = 1.10'], ['Forward value', 'value × (1 + CAGR)^k', 'k more years.', 'Projection.', '864 × 1.2² = 1,244.2'], ['Simple average', 'Total growth ÷ n', 'Not CAGR.', 'Comparison.', '33.1% ÷ 3 = 11.0%'], ['Rule of 72', 'Years ≈ 72 ÷ rate', 'Doubling.', 'Estimate.', '9% → 8 years']],
  narr: ['Investment A grew from 1,000 to 1,331 in three years. Total growth is 331 ÷ 1,000 = 33.1%. Since 1.1³ = 1.331, the CAGR is exactly 10%. The simple average annual growth is 33.1% ÷ 3 = 11.0%, which overstates the true yearly rate.', 'Investment D grew from 64 to 125. The ratio is 1.953, and (5/4)³ = 125/64, so the CAGR is 25%. Its total growth is 95.3%.', 'Investment F fell from 1,000 to 729. The ratio is 0.729 = 0.9³, so the CAGR is −10%, and the total decline is 27.1%.', 'For a series with varying yearly rates, the average of the YoY rates is not the CAGR. With revenue 100, 110, 132, 138.6 and 173.25 the yearly rates are 10%, 20%, 5% and 25% (mean 15%), but CAGR = (1.7325)^(1/4) − 1 ≈ 14.7%.', 'A rise of 10% followed by a fall of 10% does not return to the start: 100 × 1.1 × 0.9 = 99.'],
  deep: [['CAGR below the mean of YoY rates', 'By compounding, CAGR is less than the arithmetic mean of the yearly rates when the rates vary.'], ['Percent up then down', 'Percentage changes do not cancel because each applies to a different base.']],
  vars: [['Total growth', 'Simple change.', 'A: 33.1%'], ['CAGR', 'Root of the ratio.', 'D: 25%'], ['Decline', 'Negative CAGR.', 'F: −10%'], ['Projection', 'Compound forward.', 'B for two years'], ['Doubling', 'Rule of 72.', '9%: 8 years']],
  ex: [
    { t: 'Total growth', q: 'An investment grows from ₹1,000 thousand to ₹1,331 thousand in 3 years. What is the total growth?', g: ['1,000 → 1,331'], c: 'Change over start.', s: [['Change', '1,331 − 1,000 = 331.'], ['Percent', '331 ÷ 1,000 = 33.1%.']], a: '33.1%', w: 'The base is the start value.', tr: 'Dividing by the end value.' },
    { t: 'CAGR', q: 'An investment grows from ₹1,000 thousand to ₹1,331 thousand in 3 years. What is the CAGR?', g: ['Ratio 1.331'], c: 'Match a known power.', s: [['Ratio', '1,331 ÷ 1,000 = 1.331 = 1.1³.'], ['CAGR', '10% per year.']], a: '10%', w: 'Compounded for three years it gives 1.331.', tr: 'Dividing 33.1% by 3.' },
    { t: 'Projection', q: 'Investment B (₹864 thousand) keeps growing at its CAGR of 20%. What will it be after 2 more years?', g: ['864', '20%'], c: 'Compound forward.', s: [['Factor', '1.2² = 1.44.'], ['Value', '864 × 1.44 = ₹1,244.2 thousand.']], a: '₹1,244.2 thousand', w: 'Use the compound factor.', tr: 'Adding 40%.' }
  ],
  short: { title: 'Match the power', trad: 'Use a calculator for the root.', fast: 'Compare end ÷ start with 1.1³, 1.2³, 1.05³, 1.25³ and so on to read off CAGR for short periods.', rules: ['CAGR uses a root, not a division.', 'Simple average overstates CAGR.', 'Up 10% then down 10% is not zero.', 'Rule of 72 for doubling.'] },
  mist: [['Dividing total growth by n', 'That is simple average.', 'Use the root.'], ['Using the wrong base', 'End instead of start.', 'Start is the base.'], ['Cancelling up and down percentages', 'Different bases.', 'Multiply the factors.']],
  tips: { sec: 75, elim: 'CAGR must be below the simple average when growth is positive.', adv: 'Memorise 1.1³ = 1.331 and 1.2³ = 1.728.', ins: 'Test a candidate CAGR by raising it to the power n.' },
  rev: ['Total growth.', 'CAGR.', 'Simple average.', 'Projection.', 'Rule of 72.'],
  qf: ['CAGR = (end/start)^(1/n) − 1'],
  take: ['Know the three measures.', 'Match powers.', 'Start is the base.', 'Compound forward.'],
  self: ['Can I compute CAGR for 3 years?', 'Can I tell it from the simple average?', 'Can I project forward?']
});
const q69 = [
  E(pcq(`${T69}What is the total growth of investment A from the start of 2020 to the end of 2023?`, tot[ix('A')], `(1,331 − 1,000) ÷ 1,000 = ${round(tot[0], 1)}%.`, 1)),
  E(pcq(`${T69}What is the CAGR of investment A over the 3 years?`, cagr[ix('A')], `1,331 ÷ 1,000 = 1.331 = 1.1³, so the CAGR is 10%.`, 1)),
  E(pcq(`${T69}What is the CAGR of investment B over the 3 years?`, cagr[ix('B')], `864 ÷ 500 = 1.728 = 1.2³, so the CAGR is 20%.`, 1)),
  E(pcq(`${T69}What is the CAGR of investment D over the 3 years?`, cagr[ix('D')], `125 ÷ 64 = (5/4)³, so the CAGR is 25%.`, 1)),
  E(pcq(`${T69}What is the CAGR of investment C over the 3 years?`, cagr[ix('C')], `9,261 ÷ 8,000 = 1.157625 = 1.05³, so the CAGR is 5%.`, 1)),
  E(pcq(`${T69}What is the CAGR of investment F over the 3 years?`, cagr[ix('F')], `729 ÷ 1,000 = 0.729 = 0.9³, so the CAGR is −10%.`, 1)),
  M(pcq(`${T69}What is the total growth of investment D?`, tot[ix('D')], `(125 − 64) ÷ 64 = ${round(tot[3], 1)}%.`, 1)),
  M(tq(`${T69}Which investment has the highest CAGR?`, 'Investment D', itO('D').map((x) => 'Investment ' + x), `CAGRs: A 10%, B 20%, C 5%, D 25%, E 11.1%, F −10%. The highest is D. Answer: D.`)),
  M(tq(`${T69}Which investment has the lowest CAGR?`, 'Investment F', itO('F').map((x) => 'Investment ' + x), `F has a CAGR of −10%, the lowest. Answer: F.`)),
  M(pcq(`${T69}What is the CAGR of investment E over the 3 years (to one decimal place)?`, cagr[ix('E')], `1,000 ÷ 729 = (10/9)³, so the CAGR is ${round(cagr[4], 1)}%.`, 1)),
  M(nq(`${T69}If investment B keeps growing at its CAGR, what will its value be two years after 2023 (₹ thousand, to one decimal)?`, round(864 * 1.44, 1), `864 × 1.2² = 864 × 1.44 = ${round(864 * 1.44, 1)}.`, 1)),
  M(pcq(`${T69}What is the simple average annual growth of investment A (total growth ÷ 3)?`, tot[0] / 3, `33.1% ÷ 3 = ${round(tot[0] / 3, 1)}%.`, 1)),
  M(nq(`${T69}If investment C keeps growing at its CAGR for one more year, what will its value be (₹ thousand, to one decimal)?`, round(9261 * 1.05, 1), `9,261 × 1.05 = ${round(9261 * 1.05, 2)}.`, 1)),
  M(nq(`${T69}For how many of the six investments is the CAGR greater than 10%?`, cagr.filter((c) => c > 10.0001).length, `CAGRs greater than 10%: B 20%, D 25%, E 11.1%. A is exactly 10% and does not count.`)),
  P(pcq(`${TS}What is the total growth of revenue from 2019 to 2023?`, (ser[4] / ser[0] - 1) * 100, `(173.25 − 100) ÷ 100 = 73.25%.`, 2)),
  P(pcq(`${TS}What is the arithmetic mean of the four year-on-year growth rates?`, sum(yoy) / 4, `YoY rates: 10%, 20%, 5% and 25%; mean = 60 ÷ 4 = 15%.`, 1)),
  P(pcq(`${TS}The CAGR of revenue from 2019 to 2023 (4 years) is closest to which value?`, serCagr, `(173.25 ÷ 100)^(1/4) − 1 = ${round(serCagr, 1)}%.`, 1)),
  P(tq(`${TS}Which is correct about the mean of the yearly growth rates (15%) and the CAGR?`, 'The CAGR is slightly lower than the mean of the yearly rates', ['The CAGR is higher than the mean', 'They are always equal', 'The CAGR cannot be computed'], `The mean of YoY rates is 15% and the CAGR is about 14.7%. Compounding makes the CAGR lower when yearly rates vary. Answer: the CAGR is slightly lower.`)),
  P(tq(`${TS}By the rule of 72, roughly how many years does it take for a value to double at a CAGR of 9%?`, '8 years', ['6 years', '10 years', '12 years'], `72 ÷ 9 = 8 years. Answer: 8 years.`)),
  P(nq(`A value of 100 rises 10% in year 1, rises 10% in year 2 and falls 10% in year 3. What is the value at the end of year 3?`, round(100 * 1.1 * 1.1 * 0.9, 1), `100 × 1.1 × 1.1 × 0.9 = ${round(100 * 1.1 * 1.1 * 0.9, 1)}.`, 1))
];
build(ch69, q69);

// ================= Chapter 70: data sufficiency in DI contexts =================
function* assigns(vars) {
  const keys = Object.keys(vars);
  const rec = function* (i, cur) {
    if (i === keys.length) { yield { ...cur }; return; }
    for (const v of vars[keys[i]]) { cur[keys[i]] = v; yield* rec(i + 1, cur); }
  };
  yield* rec(0, {});
}
const range = (a, b, st = 1) => { const o = []; for (let i = a; i <= b; i += st) o.push(i); return o; };
const dsOpt = { I: 'Statement I alone is sufficient, but statement II alone is not', II: 'Statement II alone is sufficient, but statement I alone is not', both: 'Both statements together are needed; neither alone is sufficient', none: 'Even both statements together are not sufficient' };
function ds(p) {
  const worlds = [...assigns(p.vars)];
  const show = (v) => (v === true ? 'Yes' : v === false ? 'No' : String(v));
  const vals = (f) => [...new Set(worlds.filter(f).map((w) => show(p.q(w))))];
  const v1 = vals(p.s1), v2 = vals(p.s2), v12 = vals((w) => p.s1(w) && p.s2(w));
  const one = (v) => v.length === 1;
  let key;
  if (one(v1) && one(v2)) throw new Error('either alone suffices: ' + p.question);
  else if (one(v1)) key = 'I'; else if (one(v2)) key = 'II'; else if (one(v12)) key = 'both'; else key = 'none';
  const d = (v) => (v.length === 1 ? `fixes the answer as ${v[0]}` : `leaves several answers possible (for example ${v[0]} and ${v[1]})`);
  const dd = v12.length === 0 ? 'cannot hold together' : v12.length === 1 ? `fix the answer as ${v12[0]}` : `still leave several answers possible (for example ${v12[0]} and ${v12[1]})`;
  return { q: `${p.setup}\n\nQuestion: ${p.question}\nI. ${p.t1}\nII. ${p.t2}\n\nWhich of the following is correct?`, c: dsOpt[key], w: Object.values(dsOpt).filter((o) => o !== dsOpt[key]), e: `Statement I alone ${d(v1)}. Statement II alone ${d(v2)}. Taken together they ${dd}. Answer: ${dsOpt[key]}.`, key };
}
const S = (setup, question, t1, t2, o) => ({ setup, question, t1, t2, ...o });
const D = [
  ds(S('A bar graph shows that Company X produced 40 thousand cars in 2023. The production y of Company Y (in whole thousands) is at most 100.', 'What was the total production of X and Y?', 'Y produced 25% more than X.', 'Y produced more than 45 thousand cars.', { vars: { y: range(1, 100) }, q: (a) => 40 + a.y, s1: (a) => a.y === 50, s2: (a) => a.y > 45 })),
  ds(S('A table shows Ravi\'s marks in Maths (m) and English (e); both are multiples of 10 from 0 to 100.', 'What is Ravi\'s total mark?', 'Ravi scored more in Maths than in English.', 'The average of his two marks is 70.', { vars: { m: range(0, 100, 10), e: range(0, 100, 10) }, q: (a) => a.m + a.e, s1: (a) => a.m > a.e, s2: (a) => (a.m + a.e) / 2 === 70 })),
  ds(S('A class has b boys and g girls, each at most 50.', 'How many girls are in the class?', 'There are 20 more boys than girls.', 'The class has 60 students in all.', { vars: { b: range(1, 50), g: range(1, 50) }, q: (a) => a.g, s1: (a) => a.b === a.g + 20, s2: (a) => a.b + a.g === 60 })),
  ds(S('An article was bought for ₹100, ₹200, ₹300, ₹400 or ₹500 and sold at a price that is a multiple of ₹10 between ₹120 and ₹700.', 'What was the profit percentage?', 'The selling price was ₹300.', 'The cost price was more than ₹150.', { vars: { c: range(100, 500, 100), s: range(120, 700, 10) }, q: (a) => round((a.s - a.c) / a.c * 100, 1), s1: (a) => a.s === 300, s2: (a) => a.c > 150 })),
  ds(S('The growth rates of companies A and B in a table are multiples of 5 from 5% to 30%.', 'Is the growth of A higher than that of B?', 'A grew by 25% and B grew by less than 20%.', 'A grew by more than 10%.', { vars: { a: range(5, 30, 5), b: range(5, 30, 5) }, q: (a) => a.a > a.b, s1: (a) => a.a === 25 && a.b < 20, s2: (a) => a.a > 10 })),
  ds(S('The revenue of a company in 2022 was ₹400, 450, 500, 550 or 600 crore, and it grew in 2023 by 5%, 10% or 20%.', 'Is the revenue in 2023 more than ₹500 crore?', 'The revenue grew in 2023.', 'The revenue in 2022 was ₹600 crore and the growth was at least 5%.', { vars: { r: [400, 450, 500, 550, 600], g: [5, 10, 20] }, q: (a) => a.r * (1 + a.g / 100) > 500, s1: (a) => true, s2: (a) => a.r === 600 && a.g >= 5 })),
  ds(S('Three numbers a, b and c are whole numbers from 1 to 9.', 'What is the average of a, b and c?', 'a + b = 10.', 'c = 4.', { vars: { a: range(1, 9), b: range(1, 9), c: range(1, 9) }, q: (x) => round((x.a + x.b + x.c) / 3, 2), s1: (x) => x.a + x.b === 10, s2: (x) => x.c === 4 })),
  ds(S('A school has 100 students. The number of girls g is a whole number from 1 to 99.', 'What percentage of the students are girls?', 'The girls are fewer than the boys.', 'The number of girls is a multiple of 5.', { vars: { g: range(1, 99) }, q: (a) => a.g, s1: (a) => a.g < 50, s2: (a) => a.g % 5 === 0 })),
  ds(S('A school has boys b and girls g, each at most 40.', 'What is the ratio of boys to girls?', 'The number of boys is 3 times the number of girls.', 'The total number of students is 40.', { vars: { b: range(1, 40), g: range(1, 40) }, q: (a) => round(a.b / a.g, 3), s1: (a) => a.b === 3 * a.g, s2: (a) => a.b + a.g === 40 })),
  ds(S('The sales in 2022 and 2023 (in ₹ lakh) are whole numbers s1 and s2 from 1 to 9.', 'Were the sales higher in 2023 than in 2022?', 'The sales in the two years add up to 10.', 'The sales in 2023 were 2 more than in 2022.', { vars: { p: range(1, 9), n: range(1, 9) }, q: (a) => a.n > a.p, s1: (a) => a.p + a.n === 10, s2: (a) => a.n === a.p + 2 })),
  ds(S('A table shows the income of a person (₹3, 4, 5, 6, 7 or 8 lakh) and the tax rate (5%, 10% or 20%).', 'How much tax does the person pay (₹ thousand)?', 'The income is ₹5 lakh.', 'The tax rate is 10%.', { vars: { i: [3, 4, 5, 6, 7, 8], t: [5, 10, 20] }, q: (a) => a.i * 100 * a.t / 100 * 10, s1: (a) => a.i === 5, s2: (a) => a.t === 10 })),
  ds(S('A pen costs a whole number of rupees (1 to 20) and a pencil costs a whole number of rupees (1 to 20).', 'What is the cost of a pen?', 'The pen costs less than a pencil.', 'The pen costs more than ₹5.', { vars: { pen: range(1, 20), pencil: range(1, 20) }, q: (a) => a.pen, s1: (a) => a.pen < a.pencil, s2: (a) => a.pen > 5 })),
  ds(S('Two departments have x and y employees, each a whole number from 1 to 50.', 'What is the total number of employees?', 'The first department has twice as many as the second, and the second has 15.', 'The total is more than 40.', { vars: { x: range(1, 50), y: range(1, 50) }, q: (a) => a.x + a.y, s1: (a) => a.x === 2 * a.y && a.y === 15, s2: (a) => a.x + a.y > 40 })),
  ds(S('A school has n students (80, 100 or 120) and the pass percentage p is 40, 50, 60, 70 or 80.', 'Did more than 60 students pass?', 'The school has 100 students.', 'The school has at least 100 students and the pass percentage is at least 70.', { vars: { n: [80, 100, 120], p: [40, 50, 60, 70, 80] }, q: (a) => a.n * a.p / 100 > 60, s1: (a) => a.n === 100, s2: (a) => a.n >= 100 && a.p >= 70 })),
  ds(S('Towns A and B have populations a and b (in thousands), each a multiple of 10 from 10 to 90.', 'What is the population of town B?', 'The population of A is 40 thousand.', 'The total population of A and B is 100 thousand.', { vars: { a: range(10, 90, 10), b: range(10, 90, 10) }, q: (x) => x.b, s1: (x) => x.a === 40, s2: (x) => x.a + x.b === 100 })),
  ds(S('x is a whole number from 1 to 40.', 'What is x?', 'x is a prime number less than 20.', 'x is odd and greater than 10.', { vars: { x: range(1, 40) }, q: (a) => a.x, s1: (a) => [2, 3, 5, 7, 11, 13, 17, 19].includes(a.x), s2: (a) => a.x % 2 === 1 && a.x > 10 })),
  ds(S('The monthly incomes of Anita (a) and Beena (b), in thousands of rupees, are multiples of 10 from 10 to 60.', 'Does Anita earn more than Beena?', 'Anita earns ₹10 thousand more than Beena.', 'Anita earns ₹40 thousand.', { vars: { a: range(10, 60, 10), b: range(10, 60, 10) }, q: (x) => x.a > x.b, s1: (x) => x.a === x.b + 10, s2: (x) => x.a === 40 })),
  ds(S('Sales rose from an old value to a new value, each one of 100, 200, 300, 400 or 500.', 'What was the percentage increase in sales?', 'The new sales were more than the old sales.', 'The new sales were double the old sales.', { vars: { o: [100, 200, 300, 400, 500], n: [100, 200, 300, 400, 500] }, q: (a) => (a.n - a.o) / a.o * 100, s1: (a) => a.n > a.o, s2: (a) => a.n === 2 * a.o })),
  ds(S('A shop\'s marked price m is ₹200, 300, 400 or 500 and its selling price s is ₹150, 200, 250 or 300 (s is below m).', 'What was the discount percentage?', 'The marked price was ₹400.', 'The selling price was ₹300.', { vars: { m: [200, 300, 400, 500], s: [150, 200, 250, 300] }, q: (a) => (a.m - a.s) / a.m * 100, s1: (a) => a.m === 400 && a.s < a.m, s2: (a) => a.s === 300 && a.s < a.m })),
  ds(S('A class has 40 students. The number scoring above 40 marks is u and the number scoring above 50 marks is v (v ≤ u ≤ 40).', 'How many students scored above 50?', '25 students scored above 40.', '10 students scored below 30.', { vars: { u: range(0, 40), v: range(0, 40) }, base: [(a) => a.v <= a.u], q: (a) => a.v, s1: (a) => a.u === 25 && a.v <= a.u, s2: (a) => a.v <= a.u && 40 - a.u <= 10 }))
];
const ch70 = C({
  n: 70, id: 'y3-di-data-sufficiency-di', cat: 'di', title: 'Data Sufficiency in DI Contexts',
  tag: 'Deciding whether partial data from a table or graph is enough to answer a question',
  url: 'https://www.indiabix.com/data-interpretation/',
  over: 'Data sufficiency in DI gives a data setting (a table, a graph or a business situation) with some values missing, and two statements that each supply extra information. You decide whether I alone, II alone, both together or neither suffices to answer the question. As in basic data sufficiency, the test is whether all worlds consistent with the statements give the same answer; for yes/no questions the answer must always be yes or always be no.',
  place: 'These items appear in management-oriented DI and reasoning sections.',
  real: 'Deciding whether you have enough figures to make a decision, before collecting more, is a real skill.',
  obj: ['Treat missing table values as unknowns', 'Test each statement alone first', 'Combine statements only when needed', 'Handle yes/no questions with consistency', 'Spot statements that repeat or add nothing'],
  pre: ['Advanced Data Sufficiency', 'Percentage-Based DI'],
  refresh: 'A statement is sufficient only if it leads to a single answer. A range is not enough.',
  defs: ['Unknown: a table value that is not given.', 'Sufficient: leads to one definite answer.', 'Together: both statements used at once.', 'Consistent: no contradiction between the statements.', 'Equation count: the number of independent equations should match the number of unknowns.'],
  intu: 'Picture all the tables that fit the statement. If every one of them gives the same answer, the statement is enough.',
  mental: 'List the unknowns. For each statement count the independent equations or conditions. If there is one condition for two unknowns, it is insufficient. Combine only if each alone fails.',
  formulas: [['Alone test', 'Two worlds with different answers?', 'Each statement.', 'Primary.', 'Several totals possible'], ['Equation count', 'Unknowns = independent equations', 'Arithmetic.', 'Quick.', '2 unknowns, 2 equations'], ['Yes/no consistency', 'Always yes or always no', 'Yes/no questions.', 'Rule.', 'Even + even is always even'], ['Range statements', 'Narrow but not unique', 'Inequalities.', 'Trap.', 'More than 45'], ['Redundant statements', 'II repeats I', 'Both.', 'Adds nothing.', 'a + b = 10 twice']],
  narr: ['Company X produced 40 thousand cars. Statement I says Y produced 25% more: Y = 50 and the total is 90. Statement I alone is sufficient. Statement II says Y produced more than 45 thousand, which allows 46, 47, … so it is not sufficient.', 'Ravi\'s total mark is asked. "He scored more in Maths than in English" leaves many totals. "The average of his two marks is 70" gives a total of 140. Statement II alone suffices.', 'Boys and girls: "boys are 20 more than girls" and "the class has 60 students" are two independent equations for two unknowns; together they give 20 girls and 40 boys. Neither alone suffices.', 'For yes/no questions, "Does Anita earn more than Beena?" with "Anita earns ₹10 thousand more than Beena" is always yes, so sufficient. "Anita earns ₹40 thousand" leaves Beena unknown and is not.', 'A pair of statements may still be insufficient. "x is prime and below 20" and "x is odd and above 10" leave 11, 13, 17 and 19.'],
  deep: [['Table context', 'The setting (a table or graph) supplies values common to both statements; only the missing values need statements.'], ['Implied constraints', 'Check the ranges given in the setting: they can make a statement sufficient (for example "a profit at most ₹10").']],
  vars: [['Equations', 'Unknowns and statements.', 'Boys and girls'], ['Yes/no', 'Always the same.', 'Anita and Beena'], ['Ranges', 'Not enough.', 'More than 45'], ['Both needed', 'Combine.', 'Sum and difference'], ['Neither', 'Still several.', 'Prime and odd']],
  ex: [
    { t: 'I alone', q: 'X produced 40 thousand cars. I. Y produced 25% more than X. II. Y produced more than 45 thousand. What is the total of X and Y?', g: ['X = 40'], c: 'Test each alone.', s: [['I', 'Y = 50, so total 90.'], ['II', 'Y could be 46, 47, … so not unique.']], a: 'Statement I alone is sufficient, but statement II alone is not', w: 'I fixes Y exactly.', tr: 'Combining unnecessarily.' },
    { t: 'Both needed', q: 'How many girls? I. There are 20 more boys than girls. II. The class has 60 students. Which is correct?', g: ['Two unknowns'], c: 'Equation count.', s: [['Alone', 'Each is one equation for two unknowns.'], ['Together', 'b = g + 20 and b + g = 60 give g = 20.']], a: 'Both statements together are needed; neither alone is sufficient', w: 'Two independent equations, two unknowns.', tr: 'Calling I sufficient.' },
    { t: 'Not even together', q: 'What is x? I. x is a prime number less than 20. II. x is odd and greater than 10. Which is correct?', g: ['Whole number x'], c: 'Intersect.', s: [['I', 'x is 2, 3, 5, 7, 11, 13, 17 or 19.'], ['Together', 'x is 11, 13, 17 or 19: four values.']], a: 'Even both statements together are not sufficient', w: 'The answer is not unique.', tr: 'Picking 11.' }
  ],
  short: { title: 'Count unknowns', trad: 'Solve fully.', fast: 'Count unknowns and independent conditions; test each statement for two different worlds before combining.', rules: ['Alone first.', 'Equations match unknowns.', 'Yes/no needs consistency.', 'A range is not enough.'] },
  mist: [['Combining too early', 'Misses single-statement cases.', 'Test alone first.'], ['Treating a range as an answer', 'Not unique.', 'Need one value.'], ['Using outside data', 'Not allowed.', 'Use the setting and statements only.']],
  tips: { sec: 90, elim: 'If statements repeat each other, together adds nothing.', adv: 'Write unknowns and conditions as a short list.', ins: 'Decide quickly; you need not solve.' },
  rev: ['Alone first.', 'Equation count.', 'Yes/no rule.', 'Ranges.', 'Together.'],
  qf: ['Unknowns vs equations'],
  take: ['Test alone.', 'Count equations.', 'Consistency.', 'No outside data.'],
  self: ['Can I test each statement alone?', 'Can I count unknowns?', 'Can I handle yes/no?']
});
const order = [4, 3, 1, 2, 0, 5, 7, 6, 8, 10, 9, 11, 13, 12, 15, 14, 16, 18, 17, 19];
build(ch70, order.map((k, i) => (i < 6 ? easy : i < 14 ? medium : placement)(D[k].q, D[k].c, D[k].w, D[k].e)));
