const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { round, sum, ratio, pct, table, near } = require('../diLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const pad = (val, d) => { const w = near(val, d); for (const k of [1, 2, 3, 4, -1, -2, 5]) { if (w.length >= 3) break; const x = round(val + k * (d ? 10 ** -d : 1), d); if (x !== val && x > 0 && !w.includes(x)) w.push(x); } return w; };
const nq = (text, val, expl, d = 0) => ({ q: text, c: val, w: pad(val, d), e: `${expl} The answer is ${val}.` });
const tq = (text, c, w, expl) => ({ q: text, c, w, e: expl });
const rq = (a, b, expl, text) => { const r = ratio(a, b); const w = [ratio(b, a), ratio(a + 1, b), ratio(a, b + 2), '1 : 1', '2 : 3', '3 : 5'].filter((x, i, arr) => x !== r && arr.indexOf(x) === i).slice(0, 3); return { q: text, c: r, w, e: `${expl} The ratio is ${r}.` }; };
const pcq = (text, val, expl, d = 1) => ({ q: text, c: pct(val, d), w: pad(round(val, d), d).map((x) => pct(x, d)), e: `${expl} The answer is ${pct(val, d)}.` });

// ================= Chapter 67: approximation techniques in DI =================
const cm = ['A', 'B', 'C', 'D', 'E'];
const r22 = [4180, 3620, 5240, 2880, 1970];
const r23 = [4970, 3890, 6010, 3540, 2430];
const emp = [410, 380, 520, 290, 240];
const T67 = table('Revenue (₹ crore) of five companies in 2022 and 2023, and number of employees in 2023', ['Company', 'Revenue 2022', 'Revenue 2023', 'Employees 2023'], cm.map((c, i) => [c, r22[i], r23[i], emp[i]]));
const tot22 = sum(r22), tot23 = sum(r23);
const gr = r23.map((v, i) => (v - r22[i]) / r22[i] * 100);
// approximate-answer builder: the correct option is the rounded value; the others are clearly separated (about 12-30% off)
const ap = (text, val, fmt, expl) => {
  const c = Math.round(val);
  let w = [Math.round(val * 1.15), Math.round(val * 0.85), Math.round(val * 1.3)];
  if (val < 20) w = [c + 3, Math.max(1, c - 3), c + 6];
  w = w.filter((x, i, a) => x !== c && a.indexOf(x) === i);
  for (const k of [9, 12, 15]) if (w.length < 3 && !w.includes(c + k)) w.push(c + k);
  return { q: text, c: fmt(c), w: w.slice(0, 3).map(fmt), e: `${expl} Rounded, the answer is ${fmt(c)}.` };
};
const aprox = (n) => `about ${n}`;
const aprox_pct = (n) => `about ${n}%`;
const ch67 = C({
  n: 67, id: 'y3-di-approximation-di', cat: 'di', title: 'Approximation Techniques in DI',
  tag: 'Rounding before calculating: estimating growth, shares and ratios when the options are far apart',
  over: 'In many DI questions the options are far apart and the question says "approximately". You do not need an exact answer; you need one that is close enough to choose the right option. Approximation saves time by rounding the data (4,180 to 4,200), simplifying ratios, using benchmarks (10% of a number is one tenth) and checking the size of the answer before doing the full arithmetic.',
  place: 'Speed matters in DI sections of company tests, and approximation is the main way to gain time.',
  real: 'Mental estimates of growth, shares and ratios are what managers do in meetings.',
  obj: ['Round data sensibly before calculating', 'Use benchmark percentages (10%, 5%, 1%)', 'Estimate growth, share and ratio quickly', 'Judge when approximation is safe from the option spacing', 'Check estimates against exact values'],
  pre: ['Percentage-Based DI', 'Data Analysis and Trend Identification'],
  refresh: '10% of a number is the number divided by 10. 1% is divided by 100. A percentage change is change ÷ old.',
  defs: ['Approximation: replacing a number by a nearby simpler one.', 'Benchmark: an easy fraction like 10%, 25% or 50%.', 'Option spacing: the gaps between answer options.', 'Rounding error: the difference between exact and rounded value.', 'Sanity check: a rough comparison to confirm the size of an answer.'],
  intu: 'If the options are 10% apart, an estimate within 3% is enough. Choose the precision from the option spacing.',
  mental: 'Round to two significant figures, use benchmark fractions, compute roughly, and then compare with the options.',
  formulas: [['Growth', '(new − old) ÷ old with rounded numbers', 'Percentage change.', 'Estimating.', '4,970 vs 4,180 ≈ 800/4,200'], ['Share', 'Part ÷ total with rounded numbers', 'Share questions.', 'Estimating.', '6,010 ÷ 20,800'], ['Ratio', 'Divide and round to a simple ratio', 'Ratio questions.', 'Estimating.', '4,970 : 2,430 ≈ 2 : 1'], ['Average', 'Round, sum, divide', 'Mean.', 'Estimating.', '20,800 ÷ 5'], ['Benchmark', '10% = ÷10; 5% = half of 10%', 'Percent of a number.', 'Shortcut.', '15% = 10% + 5%']],
  narr: ['Company A grew from 4,180 to 4,970. Round to 4,200 and 5,000: growth is 800 ÷ 4,200 ≈ 19%. The exact value is 18.9%.', 'For a share, round the total: the 2023 total is 4,970 + 3,890 + 6,010 + 3,540 + 2,430 ≈ 20,840. Company C is 6,010 ÷ 20,840 ≈ 29%. If the options are 25%, 29%, 33% and 38%, an estimate of "about 30%" picks 29%.', 'For a ratio, A : E in 2023 is 4,970 : 2,430, which is just over 2 : 1.', 'Use benchmarks: 15% of 2,430 is 10% (243) plus 5% (121.5) = 364.5, so a 15% rise gives about 2,795.', 'Check the answer against the data: a growth percentage cannot exceed the largest ratio of the new to old numbers minus one.'],
  deep: [['Error budget', 'Rounding each number to 2 significant figures typically gives an error under 3%; this is safe when options differ by 10% or more.'], ['When not to approximate', 'If two options are within 2% of each other, calculate exactly.']],
  vars: [['Growth', 'Rounded change.', 'Company A'], ['Share', 'Rounded total.', 'Company C'], ['Ratio', 'Simple ratio.', 'A : E'], ['Benchmarks', '10%, 5%.', '15% rise'], ['Averages', 'Round and divide.', 'Mean revenue']],
  ex: [
    { t: 'Rounding for growth', q: 'Revenue rose from 4,180 to 4,970. Approximately what is the percentage growth?', g: ['4,180 → 4,970'], c: 'Round and divide.', s: [['Round', '4,200 and 5,000, so the change ≈ 800.'], ['Divide', '800 ÷ 4,200 ≈ 19%.']], a: 'About 19%', w: 'Exact: 790 ÷ 4,180 = 18.9%.', tr: 'Dividing by the new value.' },
    { t: 'Benchmark', q: 'Estimate 15% of 2,430.', g: ['2,430'], c: '10% + 5%.', s: [['10%', '243.'], ['5%', '121.5; total ≈ 364.5.']], a: 'About 365', w: 'Use benchmarks.', tr: 'Multiplying by 0.015.' },
    { t: 'Ratio', q: 'Revenue of A is 4,970 and of E is 2,430. Approximately what is the ratio A : E?', g: ['4,970 : 2,430'], c: 'Divide and round.', s: [['Divide', '4,970 ÷ 2,430 ≈ 2.05.'], ['Ratio', 'About 2 : 1.']], a: 'About 2 : 1', w: 'It is just over 2.', tr: 'Rounding to 3 : 1.' }
  ],
  short: { title: 'Round, benchmark, compare', trad: 'Calculate exactly every time.', fast: 'Round to two figures, use 10% and 5% benchmarks, estimate, and pick the option that is nearest.', rules: ['Round to two figures.', 'Use 10%/5% benchmarks.', 'Check option spacing.', 'Exact only if options are close.'] },
  mist: [['Rounding too early on close options', 'Wrong choice.', 'Check option spacing first.'], ['Rounding in different directions', 'Cancelling errors fail.', 'Round both up or both down for ratios.'], ['Dividing by the wrong base', 'Large errors.', 'Old is the base.']],
  tips: { sec: 45, elim: 'Discard options that are obviously too large or too small.', adv: 'Estimate first, calculate only if needed.', ins: 'Approximation is a skill: practise it daily.' },
  rev: ['Round.', 'Benchmarks.', 'Growth.', 'Share.', 'Ratio.'],
  qf: ['10% = ÷ 10'],
  take: ['Round sensibly.', 'Use benchmarks.', 'Check spacing.', 'Sanity check.'],
  self: ['Can I estimate a growth rate?', 'Can I use benchmark percentages?', 'Can I judge when to be exact?']
});
const top = (arr) => cm[arr.indexOf(Math.max(...arr))];
const q67 = [
  E(ap(`${T67}Approximately what was the percentage growth in the revenue of Company A from 2022 to 2023?`, gr[0], aprox_pct, `(4,970 − 4,180) ÷ 4,180 = ${round(gr[0], 1)}%.`)),
  E(ap(`${T67}Approximately what was the percentage growth in the revenue of Company B from 2022 to 2023?`, gr[1], aprox_pct, `(3,890 − 3,620) ÷ 3,620 = ${round(gr[1], 1)}%.`)),
  E(tq(`${T67}What was the total revenue of the five companies in 2023, to the nearest hundred (₹ crore)?`, '20,800', ['20,000', '21,500', '19,500'], `4,970 + 3,890 + 6,010 + 3,540 + 2,430 = 20,840, which is 20,800 to the nearest hundred. Answer: 20,800.`)),
  E(ap(`${T67}Approximately what percentage of the total 2023 revenue was contributed by Company C?`, 6010 / tot23 * 100, aprox_pct, `6,010 ÷ 20,840 = ${round(6010 / tot23 * 100, 1)}%.`)),
  E(ap(`${T67}Approximately what was the revenue per employee of Company A in 2023 (₹ crore)?`, 4970 / 410, aprox, `4,970 ÷ 410 = ${round(4970 / 410, 2)}.`)),
  E(nq(`${T67}By how many crore did the revenue of Company D increase from 2022 to 2023?`, r23[3] - r22[3], `3,540 − 2,880 = 660.`)),
  M(ap(`${T67}Approximately what was the percentage growth of Company D?`, gr[3], aprox_pct, `660 ÷ 2,880 = ${round(gr[3], 1)}%.`)),
  M(tq(`${T67}Approximately what was the average revenue per company in 2023, to the nearest ten (₹ crore)?`, '4,170', ['3,900', '4,500', '4,800'], `20,840 ÷ 5 = 4,168, which is 4,170 to the nearest ten. Answer: 4,170.`)),
  M(tq(`${T67}The revenue of Company A in 2023 is approximately how many times that of Company E?`, 'About 2 times', ['About 1.5 times', 'About 3 times', 'About 2.5 times'], `4,970 ÷ 2,430 = 2.05, so about 2 times.`)),
  M(ap(`${T67}Approximately what percentage of the total 2022 revenue was contributed by Company E?`, 1970 / tot22 * 100, aprox_pct, `1,970 ÷ ${tot22} = ${round(1970 / tot22 * 100, 1)}%.`)),
  M(ap(`${T67}Approximately what was the overall percentage growth of total revenue from 2022 to 2023?`, (tot23 - tot22) / tot22 * 100, aprox_pct, `Total 2022 = ${tot22}; total 2023 = ${tot23}; growth = ${tot23 - tot22} ÷ ${tot22} = ${round((tot23 - tot22) / tot22 * 100, 1)}%.`)),
  M(ap(`${T67}Approximately what was the revenue per employee of Company C in 2023 (₹ crore)?`, 6010 / 520, aprox, `6,010 ÷ 520 = ${round(6010 / 520, 2)}.`)),
  M(tq(`${T67}Which company recorded the highest percentage growth from 2022 to 2023?`, top(gr), cm.filter((c) => c !== top(gr)).slice(0, 3), `Growth rates: A ${round(gr[0], 1)}%, B ${round(gr[1], 1)}%, C ${round(gr[2], 1)}%, D ${round(gr[3], 1)}%, E ${round(gr[4], 1)}%. The highest is Company ${top(gr)}. Answer: ${top(gr)}.`)),
  M(ap(`${T67}Approximately by what percentage was the 2023 revenue of Company C higher than that of Company B?`, (6010 - 3890) / 3890 * 100, aprox_pct, `(6,010 − 3,890) ÷ 3,890 = ${round((6010 - 3890) / 3890 * 100, 1)}%.`)),
  P(ap(`${T67}Approximately what was the overall revenue per employee in 2023 (₹ crore)?`, tot23 / sum(emp), aprox, `Total revenue 20,840 ÷ total employees ${sum(emp)} = ${round(tot23 / sum(emp), 2)}.`)),
  P(ap(`${T67}Companies A and B together contributed approximately what percentage of the total 2023 revenue?`, (4970 + 3890) / tot23 * 100, aprox_pct, `(4,970 + 3,890) ÷ 20,840 = 8,860 ÷ 20,840 = ${round(8860 / tot23 * 100, 1)}%.`)),
  P(ap(`${T67}If the revenue of Company E grows by 15% in 2024, what will it be approximately (₹ crore)?`, 2430 * 1.15, aprox, `2,430 × 1.15 = ${round(2430 * 1.15, 1)}.`)),
  P(tq(`${T67}The 2023 revenue of Company D is approximately how many times its 2022 revenue?`, 'About 1.2 times', ['About 1.5 times', 'About 1.05 times', 'About 2 times'], `3,540 ÷ 2,880 = 1.23, so about 1.2 times.`)),
  P(ap(`${T67}Approximately what percentage of the total 2023 revenue came from the company with the second-highest revenue?`, 4970 / tot23 * 100, aprox_pct, `The second-highest revenue in 2023 is Company A (4,970): 4,970 ÷ 20,840 = ${round(4970 / tot23 * 100, 1)}%.`)),
  P(ap(`${T67}Companies C and D together contributed approximately what percentage of the total 2022 revenue?`, (5240 + 2880) / tot22 * 100, aprox_pct, `(5,240 + 2,880) ÷ ${tot22} = 8,120 ÷ ${tot22} = ${round(8120 / tot22 * 100, 1)}%.`))
];
build(ch67, q67);

// ================= Chapter 68: cross-category data comparison =================
const st = ['S1', 'S2', 'S3', 'S4', 'S5'];
const pop = [80, 60, 120, 40, 100];         // million
const lit = [75, 82, 68, 90, 78];           // %
const inc = [60, 90, 45, 110, 70];          // per capita, ₹ thousand
const area = [200, 100, 320, 80, 125];      // thousand sq km
const T68 = table('Data for five states', ['State', 'Population (million)', 'Literacy (%)', 'Per-capita income (₹ thousand)', 'Area (thousand sq km)'], st.map((s, i) => [s, pop[i], lit[i] + '%', inc[i], area[i]]));
const lp = pop.map((p, i) => p * lit[i] / 100);               // literate population (million)
const dens = pop.map((p, i) => p * 1000 / area[i]);           // persons per sq km
const ti = pop.map((p, i) => p * inc[i]);                      // total income (₹ billion)
const argmax = (a) => st[a.indexOf(Math.max(...a))];
const argmin = (a) => st[a.indexOf(Math.min(...a))];
const stO = (c) => st.filter((x) => x !== c).slice(0, 3);
const ch68 = C({
  n: 68, id: 'y3-di-data-comparison', cat: 'di', title: 'Cross-Category Data Comparison',
  tag: 'Combining different kinds of data about the same items: populations, rates, incomes and areas',
  over: 'A cross-category table lists several kinds of data about the same items, such as population, literacy rate, income per head and area for several states. Questions combine categories: literate people = population × literacy rate; density = population ÷ area; total income = population × income per head. The key is to know what each combination means and to keep units straight, so that million × thousand is billion.',
  place: 'Cross-category comparison sets are standard in DI sections of company and bank tests.',
  real: 'Comparing regions on several indicators for planning and investment uses these combinations.',
  obj: ['Combine counts and rates to get new counts', 'Compute densities and totals', 'Keep track of units', 'Rank items on derived measures', 'Compute weighted averages for the group'],
  pre: ['Table-Based DI', 'Multi-Table DI Sets'],
  refresh: 'Rate × base = count. Total ÷ count = average. Units multiply: million × thousand = billion.',
  defs: ['Category: one kind of data (population, income).', 'Derived measure: a new number built from two categories.', 'Density: people per unit area.', 'Weighted average: total of values ÷ total of weights.', 'Unit consistency: using compatible units before combining.'],
  intu: 'Each state is a record. A cross-category question builds a new field from two old ones.',
  mental: 'Name the new quantity, write its formula in terms of the categories, check the units, and compute it for each state if needed.',
  formulas: [['Literate population', 'Population × literacy %', 'Rate on population.', 'Counts.', 'S2: 60 × 82% = 49.2 million'], ['Density', 'Population ÷ area', 'Units: million ÷ thousand sq km = thousand per sq km.', 'Density.', 'S5: 100 ÷ 125 = 0.8 thousand = 800'], ['Total income', 'Population × income per head', 'million × thousand = billion.', 'Totals.', 'S4: 40 × 110 = 4,400 billion'], ['Group literacy', 'Total literate ÷ total population', 'Weighted.', 'Group rate.', '304.8 ÷ 400'], ['Group income per head', 'Total income ÷ total population', 'Weighted.', 'Group average.', '27,000 ÷ 400']],
  narr: ['Literate populations (million): S1 60, S2 49.2, S3 81.6, S4 36, S5 78. S3 has the most literate people even though its literacy rate is among the lowest, because its population is largest.', 'Density in persons per sq km: population (million) × 1,000 ÷ area (thousand sq km). S1 400, S2 600, S3 375, S4 500, S5 800. S5 is the most densely populated.', 'Total income (₹ billion) = population × per-capita income: S1 4,800, S2 5,400, S3 5,400, S4 4,400, S5 7,000. S5 has the highest total income although S4 has the highest income per head.', 'The group literacy rate is total literate ÷ total population = 304.8 ÷ 400 = 76.2%, not the average of the five rates (78.6%).', 'The weighted average income per head is 27,000 ÷ 400 = ₹67.5 thousand.'],
  deep: [['Rate vs count', 'A high rate with a small base can give a smaller count than a lower rate with a large base.'], ['Weighted averages', 'To combine rates, weight by the base: literacy by population, income per head by population.']],
  vars: [['Counts from rates', 'Literate people.', 'S2'], ['Densities', 'Population ÷ area.', 'S5'], ['Totals', 'Population × income.', 'S4'], ['Group rates', 'Weighted.', 'Literacy of all five'], ['Rankings', 'Highest/lowest.', 'Total income']],
  ex: [
    { t: 'Count from a rate', q: 'State S2 has a population of 60 million with 82% literacy. How many literate people does it have?', g: ['60 million', '82%'], c: 'Rate × base.', s: [['Multiply', '60 × 82% = 49.2.'], ['Unit', '49.2 million.']], a: '49.2 million', w: 'Literacy applies to the population.', tr: 'Adding 60 and 82.' },
    { t: 'Density', q: 'State S5 has 100 million people in 125 thousand sq km. What is its density (persons per sq km)?', g: ['100 million', '125 thousand sq km'], c: 'Population ÷ area.', s: [['Convert', '100,000,000 ÷ 125,000.'], ['Compute', '800 persons per sq km.']], a: '800', w: 'Million ÷ thousand = thousand.', tr: 'Dividing 100 by 125 only.' },
    { t: 'Group rate', q: 'Five states have 304.8 million literate people among 400 million. What is the group literacy rate?', g: ['304.8', '400'], c: 'Weighted.', s: [['Divide', '304.8 ÷ 400 = 0.762.'], ['Percent', '76.2%.']], a: '76.2%', w: 'Not the average of the five rates.', tr: 'Averaging the rates.' }
  ],
  short: { title: 'Name the new field', trad: 'Hunt for the formula.', fast: 'Decide which two categories combine and how (rate × base, total ÷ area, population × income) and keep the units straight.', rules: ['Rate × base = count.', 'Population ÷ area = density.', 'Population × income = total.', 'Weighted for groups.'] },
  mist: [['Averaging rates', 'Ignores population.', 'Use totals.'], ['Unit slips', 'million vs thousand.', 'Write units beside numbers.'], ['Mixing a rate with a count', 'Wrong operation.', 'Name the quantity first.']],
  tips: { sec: 100, elim: 'A literate count must be below the population.', adv: 'Add derived columns to the table once.', ins: 'Many questions need only one derived column.' },
  rev: ['Counts from rates.', 'Densities.', 'Totals.', 'Weighted group rate.', 'Rank.'],
  qf: ['Population × rate = count'],
  take: ['New field from two.', 'Units.', 'Weighted rates.', 'Rank on derived values.'],
  self: ['Can I compute a density?', 'Can I compute total income?', 'Can I compute a group rate?']
});
const q68 = [
  E(nq(`${T68}How many literate people does S2 have (million)?`, lp[1], `60 × 82% = 49.2.`, 1)),
  E(nq(`${T68}How many literate people does S4 have (million)?`, lp[3], `40 × 90% = 36.`)),
  E(nq(`${T68}What is the density of S5 (persons per sq km)?`, dens[4], `100 million ÷ 125 thousand sq km = 800.`)),
  E(nq(`${T68}What is the total income of S4 (₹ billion)?`, ti[3], `40 million × ₹110 thousand = 4,400 billion.`)),
  E(tq(`${T68}Which state has the highest literacy rate?`, 'S4', stO('S4'), `Literacy rates are 75, 82, 68, 90 and 78%; the highest is 90% in S4. Answer: S4.`)),
  E(nq(`${T68}What is the difference in per-capita income between S4 and S3 (₹ thousand)?`, inc[3] - inc[2], `110 − 45 = 65.`)),
  M(tq(`${T68}Which state has the largest number of literate people?`, argmax(lp), stO(argmax(lp)), `Literate populations (million): ${lp.map((v, i) => st[i] + ' ' + round(v, 1)).join(', ')}; the largest is ${argmax(lp)}. Answer: ${argmax(lp)}.`)),
  M(nq(`${T68}What is the density of S1 (persons per sq km)?`, dens[0], `80 million ÷ 200 thousand sq km = 400.`)),
  M(tq(`${T68}Which state has the highest population density?`, argmax(dens), stO(argmax(dens)), `Densities: ${dens.map((v, i) => st[i] + ' ' + round(v, 0)).join(', ')}; the highest is ${argmax(dens)}. Answer: ${argmax(dens)}.`)),
  M(nq(`${T68}What is the total income of S5 (₹ billion)?`, ti[4], `100 × 70 = 7,000.`)),
  M(tq(`${T68}Which state has the highest total income?`, argmax(ti), stO(argmax(ti)), `Total incomes (₹ billion): ${ti.map((v, i) => st[i] + ' ' + v).join(', ')}; the highest is ${argmax(ti)}. Answer: ${argmax(ti)}.`)),
  M(nq(`${T68}What is the total illiterate population of S1 and S3 together (million, to one decimal)?`, round(pop[0] - lp[0] + pop[2] - lp[2], 1), `S1: 80 − 60 = 20; S3: 120 − 81.6 = 38.4; total 58.4.`, 1)),
  M(rq(pop[0], pop[3], `S1 has 80 million and S4 has 40 million.`, `${T68}What is the ratio of the population of S1 to that of S4?`)),
  M(nq(`${T68}What is the total population of the five states (million)?`, sum(pop), `80 + 60 + 120 + 40 + 100 = 400.`)),
  P(nq(`${T68}What is the total number of literate people in the five states (million, to one decimal)?`, round(sum(lp), 1), `60 + 49.2 + 81.6 + 36 + 78 = 304.8.`, 1)),
  P(pcq(`${T68}What is the literacy rate of the five states taken together?`, sum(lp) / sum(pop) * 100, `304.8 ÷ 400 = 76.2%.`, 1)),
  P(nq(`${T68}What is the average per-capita income of the five states taken together (₹ thousand)?`, sum(ti) / sum(pop), `Total income = 4,800 + 5,400 + 5,400 + 4,400 + 7,000 = 27,000 billion; 27,000 ÷ 400 = 67.5.`, 1)),
  P(tq(`${T68}Which state has the lowest total income?`, argmin(ti), stO(argmin(ti)), `Total incomes: ${ti.map((v, i) => st[i] + ' ' + v).join(', ')}; the lowest is ${argmin(ti)}. Answer: ${argmin(ti)}.`)),
  P(nq(`${T68}By how many persons per sq km is the density of S2 higher than that of S3?`, round(dens[1] - dens[2], 0), `S2 = 600 and S3 = 375; 600 − 375 = 225.`)),
  P(pcq(`${T68}The total income of S5 is what percentage more than that of S1 (to one decimal place)?`, (ti[4] - ti[0]) / ti[0] * 100, `(7,000 − 4,800) ÷ 4,800 = ${round((7000 - 4800) / 4800 * 100, 1)}%.`, 1))
];
build(ch68, q68);
