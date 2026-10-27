const { build, easy, medium, placement } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { nq, pcq, tq, rq, best, others, round, sum, pct, table } = require('./diq.cjs');
const base = { year: 4, cat: 'di', category: 'Data Interpretation', url: 'https://www.indiabix.com/data-interpretation/' };
const K = { e: easy, m: medium, p: placement };

// ================= Chapter 25: high-speed DI with approximation =================
const cm = ['A', 'B', 'C', 'D', 'E'];
const r21 = [3420, 5180, 2760, 4090, 1860];
const r23 = [4260, 5870, 3540, 4380, 2610];
const em = [610, 940, 480, 720, 350];
const T25 = table('Revenue (₹ crore) of five companies, and employees in 2023', ['Company', 'Revenue 2021', 'Revenue 2023', 'Employees 2023'], cm.map((c, i) => [c, r21[i], r23[i], em[i]]));
const t21 = sum(r21), t23 = sum(r23);
const ap = (k, text, val, expl, fmt = (x) => `about ${x}`) => {
  const c = Math.round(val);
  let w = val < 20 ? [c + 3, Math.max(1, c - 3), c + 6] : [Math.round(val * 1.15), Math.round(val * 0.85), Math.round(val * 1.3)];
  w = w.filter((x, i, a) => x !== c && a.indexOf(x) === i);
  for (const d of [9, 12, 15]) if (w.length < 3 && !w.includes(c + d)) w.push(c + d);
  return K[k](text, fmt(c), w.slice(0, 3).map(fmt), `${expl} Rounded, the answer is ${fmt(c)}.`);
};
const apP = (x) => `about ${x}%`;
const gr = r23.map((v, i) => (v - r21[i]) / r21[i] * 100);
const ch25 = C({ ...base, n: 25, id: 'y4-ada-high-speed-di-approx', title: 'High-Speed DI with Approximation',
  tag: 'Estimating growth, shares and ratios from large tables in seconds by rounding to two figures',
  over: 'In a timed DI section you cannot afford exact division on every question. When the options are well separated, rounding the data to two significant figures gives an answer accurate enough to pick the right one. The method is to round, compute with easy numbers, and compare with the options; when two options lie within 2–3% of each other, switch to exact calculation for that question only.',
  place: 'Speed in DI decides how many sets you finish; approximation is the main speed tool.',
  real: 'Managers estimate growth and shares in meetings without a calculator.',
  obj: ['Round to two significant figures', 'Estimate percentage growth and shares', 'Use benchmark fractions', 'Judge the precision from the option spacing', 'Switch to exact calculation when options are close'],
  pre: ['Approximation Techniques in DI (Year 3)', 'Approximation and Estimation'],
  refresh: 'Growth ≈ change ÷ old. Round numerator and denominator in a way that keeps the ratio close.',
  defs: ['Two significant figures: round 4,260 to 4,300.', 'Benchmark: 10%, 25%, 1/3 and so on.', 'Option spacing: gaps between choices.', 'Error budget: how much error you can afford.', 'Exact switch: calculating precisely when needed.'],
  intu: 'If the options are 8% apart, a 2% error cannot change your answer.',
  mental: 'Round, estimate, compare with the options; refine only if two options are close.',
  formulas: [['Growth', 'Round change and old', 'Percent change.', 'Estimate.', '840/3,400 ≈ 24.7%'], ['Share', 'Round part and total', 'Percent share.', 'Estimate.', '5,870/19,260'], ['Per head', 'Round both', 'Productivity.', 'Estimate.', '4,260/610'], ['Total', 'Round each then add', 'Sum.', 'Estimate.', 'Sum of five'], ['Exact switch', 'Close options', 'Safety.', 'Calculate.', 'Within 3%']],
  narr: ['Company A grew from 3,420 to 4,260: the change is 840, about 24.6% of 3,420; estimate 840 ÷ 3,400 ≈ 25%.', 'Company C grew from 2,760 to 3,540: change 780; 780 ÷ 2,760 = 28.3%; estimate 780 ÷ 2,800 ≈ 28%.', 'Total revenue in 2023 is 4,260 + 5,870 + 3,540 + 4,380 + 2,610 = 20,660; a rounded sum gives about 20,700.', 'Revenue per employee of company B is 5,870 ÷ 940 ≈ 6.2 crore.', 'If the options were 24%, 25% and 26%, you would calculate exactly.'],
  deep: [['Round in the same direction for a ratio', 'Rounding numerator and denominator both up cancels part of the error.'], ['Benchmarks', '1/3 = 33.3%, 1/6 = 16.7%, 1/8 = 12.5%.']],
  vars: [['Growth', 'Rounded change.', 'A and C'], ['Share', 'Rounded total.', 'Company B'], ['Per employee', 'Rounded ratio.', 'Revenue'], ['Totals', 'Rounded sums.', '2023 total'], ['Close options', 'Exact.', '24, 25, 26']],
  ex: [
    { t: 'Growth', q: 'Company A rose from 3,420 to 4,260. Estimate the growth.', g: ['3,420', '4,260'], c: 'Round and divide.', s: [['Change', '4,260 − 3,420 ≈ 840.'], ['Divide', '840 ÷ 3,400 ≈ 25%.']], a: 'About 25%', w: 'Exact 24.6%.', tr: 'Dividing by the new value.' },
    { t: 'Per head', q: 'B has revenue 5,870 and 940 employees. Estimate revenue per employee.', g: ['5,870', '940'], c: 'Round both.', s: [['Round', '5,900 ÷ 940.'], ['Divide', '≈ 6.3.']], a: 'About 6.2 crore', w: 'Exact 6.24.', tr: 'Dividing by 100.' },
    { t: 'Exact switch', q: 'Options are 24%, 25% and 26%. What should you do?', g: ['Close options'], c: 'Check spacing.', s: [['Spacing', 'Only 1% apart.'], ['Decision', 'Calculate exactly.']], a: 'Calculate exactly', w: 'Estimate cannot separate them.', tr: 'Estimating anyway.' }
  ],
  short: { title: 'Round, estimate, compare', trad: 'Exact division each time.', fast: 'Round to two figures, estimate, compare; switch to exact only if options are within 2–3%.', rules: ['Two figures.', 'Benchmarks.', 'Check spacing.', 'Exact if close.'] },
  mist: [['Over-rounding', 'Wrong option.', 'Check spacing.'], ['Wrong base', 'Large error.', 'Old is the base.'], ['Rounding oppositely in a ratio', 'Error adds.', 'Round the same direction.']],
  tips: { sec: 40, elim: 'Reject options far from the estimate.', adv: 'Estimate first.', ins: 'Approximation is a trained skill.' },
  rev: ['Round.', 'Growth.', 'Share.', 'Per head.', 'Exact switch.'],
  qf: ['Estimate before calculating'],
  take: ['Two figures.', 'Benchmarks.', 'Spacing.', 'Exact when close.'],
  self: ['Can I estimate growth?', 'Can I judge spacing?', 'Can I switch to exact?']
});
const q25 = [
  ap('e', `${T25}Company A's growth from 2021 to 2023 is approximately`, gr[0], `(4,260 − 3,420) ÷ 3,420 = ${round(gr[0], 1)}%.`, apP),
  ap('e', `${T25}Company C's growth from 2021 to 2023 is approximately`, gr[2], `(3,540 − 2,760) ÷ 2,760 = ${round(gr[2], 1)}%.`, apP),
  ap('e', `${T25}Company E's growth from 2021 to 2023 is approximately`, gr[4], `(2,610 − 1,860) ÷ 1,860 = ${round(gr[4], 1)}%.`, apP),
  ap('e', `${T25}The total revenue of all five companies in 2023 (₹ crore) is approximately`, t23, `4,260 + 5,870 + 3,540 + 4,380 + 2,610 = ${t23}.`),
  ap('e', `${T25}Company D's growth is approximately`, gr[3], `(4,380 − 4,090) ÷ 4,090 = ${round(gr[3], 1)}%.`, apP),
  ap('e', `${T25}The total revenue of all companies in 2021 (₹ crore) is approximately`, t21, `3,420 + 5,180 + 2,760 + 4,090 + 1,860 = ${t21}.`),
  ap('m', `${T25}Company B contributes approximately what percentage of the 2023 total?`, r23[1] / t23 * 100, `5,870 ÷ ${t23} = ${round(r23[1] / t23 * 100, 1)}%.`, apP),
  ap('m', `${T25}Revenue per employee of Company A in 2023 (₹ crore) is approximately`, r23[0] / em[0], `4,260 ÷ 610 = ${round(r23[0] / em[0], 2)}.`),
  ap('m', `${T25}The overall growth of total revenue from 2021 to 2023 is approximately`, (t23 - t21) / t21 * 100, `(${t23} − ${t21}) ÷ ${t21} = ${round((t23 - t21) / t21 * 100, 1)}%.`, apP),
  tq('m', `${T25}Which company recorded the highest growth?`, best(cm, gr), others(cm, best(cm, gr)), `Growth rates: ${cm.map((c, i) => c + ' ' + round(gr[i], 1) + '%').join(', ')}; the highest is ${best(cm, gr)}.`),
  ap('m', `${T25}Company C contributes approximately what percentage of the 2021 total?`, r21[2] / t21 * 100, `2,760 ÷ ${t21} = ${round(r21[2] / t21 * 100, 1)}%.`, apP),
  ap('m', `${T25}Revenue per employee of Company E in 2023 (₹ crore) is approximately`, r23[4] / em[4], `2,610 ÷ 350 = ${round(r23[4] / em[4], 2)}.`),
  ap('m', `${T25}Companies A and D together contributed approximately what percentage of the 2023 total?`, (r23[0] + r23[3]) / t23 * 100, `(4,260 + 4,380) ÷ ${t23} = ${round((r23[0] + r23[3]) / t23 * 100, 1)}%.`, apP),
  tq('m', `${T25}The 2023 revenue of Company B is approximately how many times that of Company E?`, 'About 2.2 times', ['About 1.5 times', 'About 3 times', 'About 2.8 times'], '5,870 ÷ 2,610 = 2.25, so about 2.2 times.'),
  ap('p', `${T25}Overall revenue per employee of the five companies in 2023 (₹ crore) is approximately`, t23 / sum(em), `${t23} ÷ ${sum(em)} = ${round(t23 / sum(em), 2)}.`),
  ap('p', `${T25}The increase in total revenue from 2021 to 2023 (₹ crore) is approximately`, t23 - t21, `${t23} − ${t21} = ${t23 - t21}.`),
  ap('p', `${T25}The 2023 revenue of Company D exceeds that of Company C by approximately what percentage?`, (r23[3] - r23[2]) / r23[2] * 100, `(4,380 − 3,540) ÷ 3,540 = ${round((r23[3] - r23[2]) / r23[2] * 100, 1)}%.`, apP),
  ap('p', `${T25}If Company E grows by 25% in 2024, its revenue will be approximately (₹ crore)`, r23[4] * 1.25, `2,610 × 1.25 = ${round(r23[4] * 1.25, 1)}.`),
  ap('p', `${T25}The share of Companies B and C together in the 2021 total is approximately`, (r21[1] + r21[2]) / t21 * 100, `(5,180 + 2,760) ÷ ${t21} = ${round((r21[1] + r21[2]) / t21 * 100, 1)}%.`, apP),
  ap('p', `${T25}The average revenue per company in 2023 (₹ crore) is approximately`, t23 / 5, `${t23} ÷ 5 = ${round(t23 / 5, 1)}.`)
];
build(ch25, q25);

// ================= Chapter 26: mixed DI sets (bar, line, pie, table) =================
const yrs = [2020, 2021, 2022, 2023];
const sal = [800, 900, 1000, 1200];
const mg = [10, 12, 15, 14];
const catN = ['Electronics', 'Apparel', 'Grocery', 'Home'];
const shr = [32, 24, 28, 16];
const cmg = [8, 15, 6, 12];    // 2023 margin % by category (table)
const TB = table('Bar chart: total sales (₹ crore)', ['Year', ...yrs], [['Sales', ...sal]]);
const TL = table('Line chart: overall profit margin (% of sales)', ['Year', ...yrs], [['Margin %', ...mg.map((m) => m + '%')]]);
const TP = table('Pie chart: share of 2023 sales by category, and table: profit margin of each category in 2023', ['Category', 'Share of sales', 'Margin %'], catN.map((c, i) => [c, shr[i] + '%', cmg[i] + '%']));
const MX = TB + TL + TP;
const cs = shr.map((s) => s * 1200 / 100);
const cpf = cs.map((s, i) => s * cmg[i] / 100);
const pf = sal.map((s, i) => s * mg[i] / 100);
const ch26 = C({ ...base, n: 26, id: 'y4-ada-mixed-di-sets', title: 'Mixed DI Sets — All Chart Types',
  tag: 'Bar, line, pie and table in one set: converting each view to numbers and chaining them',
  over: 'A mixed DI set gives several kinds of chart in one set: a bar chart for totals, a line chart for a rate, a pie chart for shares and a table for category rates. The way through is to convert every chart into numbers first, and then to chain them: total × share = category amount, amount × rate = profit. Check that percentages in a pie add to 100 and that you apply each rate to the right base.',
  place: 'Mixed sets are the capstone DI items in company tests.',
  real: 'Board packs combine all four views in exactly this way.',
  obj: ['Convert bar, line, pie and table to numbers', 'Chain total, share and rate', 'Check that shares sum to 100%', 'Compare growth and margins across views', 'Verify with a second route'],
  pre: ['Multi-Chart Dashboard Analysis', 'Integrated DI Sets (3+ Charts)'],
  refresh: 'Category sales = total × share. Category profit = category sales × margin. Overall profit = total × overall margin.',
  defs: ['Bar chart: totals by period.', 'Line chart: a rate across periods.', 'Pie chart: shares of a whole.', 'Table: rates by category.', 'Chain: successive derived quantities.'],
  intu: 'All four views describe the same business; each gives one factor of the answer.',
  mental: 'Write numbers beside each chart, compute the category table, then answer.',
  formulas: [['Category sales', 'Total × share', 'Pie and bar.', 'First.', '1,200 × 32% = 384'], ['Category profit', 'Sales × margin', 'Pie, table.', 'Second.', '384 × 8% = 30.72'], ['Overall profit', 'Sales × margin', 'Bar, line.', 'Check.', '1,200 × 14% = 168'], ['Reconcile', 'Sum of category profits vs overall', 'Check.', 'Consistency.', '≈ 25.6% of sales'], ['Growth', 'Change ÷ old', 'Bar.', 'Percent.', '1,000 → 1,200']],
  narr: ['2023 sales are ₹1,200 crore; by category: Electronics 384, Apparel 288, Grocery 336, Home 192 (sum 1,200).', 'Category profits: Electronics 8% = 30.72; Apparel 15% = 43.2; Grocery 6% = 20.16; Home 12% = 23.04; total 117.12 crore.', 'The overall margin on the line chart for 2023 is 14%, giving 168 crore. The two figures differ (117.12 versus 168), so the data are not reconciled; questions will state which to use.', 'Sales growth 2022 to 2023 is (1,200 − 1,000) ÷ 1,000 = 20%.', 'Overall profit by year: 80, 108, 150, 168.'],
  deep: [['Inconsistent views', 'In real data two views may not reconcile; use the one the question names.'], ['Pie checks', 'Shares must add to 100%.']],
  vars: [['Bar totals', 'Read values.', 'Sales by year'], ['Line rates', 'Margins.', 'By year'], ['Pie shares', 'Percent of total.', 'Categories'], ['Chains', 'Total × share × rate.', 'Category profit'], ['Growth', 'Percent change.', '2022 to 2023']],
  ex: [
    { t: 'Category sales', q: '2023 sales are ₹1,200 crore and Electronics is 32%. Electronics sales?', g: ['1,200', '32%'], c: 'Total × share.', s: [['Convert the share', '32% = 0.32.'], ['Multiply', '1,200 × 0.32 = ₹384 crore.']], a: '₹384 crore', w: 'Pie share of total.', tr: 'Using 2022 sales.' },
    { t: 'Category profit', q: 'Electronics sales ₹384 crore, margin 8%. Profit?', g: ['384', '8%'], c: 'Sales × margin.', s: [['Rate', '8% = 0.08.'], ['Profit', '384 × 0.08 = ₹30.72 crore.']], a: '₹30.72 crore', w: 'Margin on its own sales.', tr: 'Using total sales.' },
    { t: 'Overall profit', q: '2023 sales ₹1,200 crore with an overall margin of 14%. Profit?', g: ['1,200', '14%'], c: 'Sales × margin.', s: [['Convert the margin', '14% = 0.14.'], ['Multiply', '1,200 × 0.14 = ₹168 crore.']], a: '₹168 crore', w: 'Line-chart margin.', tr: 'Using category margins.' }
  ],
  short: { title: 'Numbers beside each chart', trad: 'Read charts one by one.', fast: 'Write numbers beside each chart, build the category table once, then answer.', rules: ['Shares sum to 100%.', 'Total × share × rate.', 'Use the view named.', 'Verify.'] },
  mist: [['Applying a margin to the wrong base', 'Wrong value.', 'Margin on the same sales.'], ['Using the wrong year', 'Wrong value.', 'Read the year.'], ['Assuming views reconcile', 'Surprise.', 'Use the named view.']],
  tips: { sec: 150, elim: 'Category sales cannot exceed total sales.', adv: 'Build the category table first.', ins: 'Each chart supplies one factor.' },
  rev: ['Convert.', 'Chain.', 'Check shares.', 'Growth.', 'Verify.'],
  qf: ['Category profit = total × share × margin'],
  take: ['Numbers first.', 'Chain.', 'Shares.', 'Named view.'],
  self: ['Can I chain total, share and rate?', 'Can I check a pie?', 'Can I compute growth?']
});
const cat = (c) => catN.indexOf(c);
const q26 = [
  nq('e', `${MX}What were the 2022 sales (₹ crore)?`, 1000, 'The bar for 2022 shows 1,000.'),
  nq('e', `${MX}What was the overall margin in 2022 (%)?`, 15, 'The line for 2022 shows 15%.'),
  nq('e', `${MX}What were the Electronics sales in 2023 (₹ crore)?`, cs[0], '32% of 1,200 = 384.'),
  nq('e', `${MX}What were the Apparel sales in 2023 (₹ crore)?`, cs[1], '24% of 1,200 = 288.'),
  nq('e', `${MX}What were the Grocery sales in 2023 (₹ crore)?`, cs[2], '28% of 1,200 = 336.'),
  nq('e', `${MX}What were the Home sales in 2023 (₹ crore)?`, cs[3], '16% of 1,200 = 192.'),
  nq('m', `${MX}What was the overall profit in 2022 (₹ crore)?`, pf[2], '15% of 1,000 = 150.'),
  pcq('m', `${MX}By what percentage did sales grow from 2022 to 2023?`, (1200 - 1000) / 1000 * 100, '(1,200 − 1,000) ÷ 1,000 = 20%.', 1),
  nq('m', `${MX}What was the profit from Apparel in 2023 (₹ crore)?`, cpf[1], '288 × 15% = 43.2.', 1),
  nq('m', `${MX}What was the profit from Electronics in 2023 (₹ crore)?`, cpf[0], '384 × 8% = 30.72.', 2),
  tq('m', `${MX}Which category had the highest profit in 2023?`, best(catN, cpf), others(catN, best(catN, cpf)), `Category profits: ${catN.map((c, i) => c + ' ' + round(cpf[i], 2)).join(', ')}; the highest is ${best(catN, cpf)}.`),
  nq('m', `${MX}What were the total sales over the four years (₹ crore)?`, sum(sal), '800 + 900 + 1,000 + 1,200 = 3,900.'),
  nq('m', `${MX}What was the overall profit in 2023 (₹ crore) using the line-chart margin?`, pf[3], '14% of 1,200 = 168.'),
  nq('m', `${MX}What was the total of the category profits in 2023 (₹ crore, using the table margins)?`, sum(cpf), '30.72 + 43.2 + 20.16 + 23.04 = 117.12.', 2),
  nq('p', `${MX}By how much do the line-chart profit and the sum of category profits differ for 2023 (₹ crore)?`, pf[3] - sum(cpf), '168 − 117.12 = 50.88.', 2),
  pcq('p', `${MX}The profit of Apparel is what percentage of the sum of category profits in 2023 (to one decimal)?`, cpf[1] / sum(cpf) * 100, '43.2 ÷ 117.12 = 36.9%.', 1),
  rq('p', `${MX}What is the ratio of Grocery sales to Home sales in 2023?`, cs[2], cs[3], '336 : 192; divide by 48 to get 7 : 4.'),
  nq('p', `${MX}Overall profit rose from 2020 to 2023 by (₹ crore)`, pf[3] - pf[0], 'Profit 2020 = 80; 2023 = 168; difference 88.'),
  pcq('p', `${MX}The overall profit of 2023 is what percentage more than that of 2022 (to one decimal)?`, (pf[3] - pf[2]) / pf[2] * 100, '(168 − 150) ÷ 150 = 12%.', 1),
  tq('p', `${MX}Which year had the highest overall margin?`, '2022', ['2020', '2021', '2023'], 'Margins are 10, 12, 15 and 14%; the highest is 15% in 2022.')
];
build(ch26, q26);
