const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { round, sum, ratio, pct, table, near } = require('../diLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const nq = (text, val, expl, d = 0) => ({ q: text, c: val, w: near(val, d), e: `${expl} The answer is ${val}.` });
const tq = (text, c, w, expl) => ({ q: text, c, w, e: expl });
const rq = (a, b, expl, text) => { const r = ratio(a, b); const w = [ratio(b, a), ratio(a + 1, b), ratio(a, b + 2), '1 : 1', '2 : 3', '3 : 5'].filter((x, i, arr) => x !== r && arr.indexOf(x) === i).slice(0, 3); return { q: text, c: r, w, e: `${expl} The ratio is ${r}.` }; };
const pcq = (text, val, expl, d = 1) => ({ q: text, c: pct(val, d), w: near(round(val, d), d).map((x) => pct(x, d)), e: `${expl} The answer is ${pct(val, d)}.` });

// ================= Chapter 61: mixed graph (bar + line) =================
const yrs = [2018, 2019, 2020, 2021, 2022, 2023];
const rev = [125, 150, 180, 160, 200, 240];
const pp = [8, 12, 15, 10, 16, 20];
const prof = rev.map((r, i) => round(r * pp[i] / 100, 2)); // 10,18,27,16,32,48
const exp = rev.map((r, i) => round(r - prof[i], 2)); // 115,132,153,144,168,192
const y = (a, yr) => a[yrs.indexOf(yr)];
const T61 = table('Mixed graph data. The bars show revenue (₹ crore) and the line shows profit as a percentage of revenue.', ['Year', 'Revenue (₹ crore)', 'Profit (% of revenue)'], yrs.map((v, i) => [v, rev[i], pp[i] + '%']));
const yoy = prof.slice(1).map((p, i) => (p - prof[i]) / prof[i] * 100);
const bestYoyYear = yrs[1 + yoy.indexOf(Math.max(...yoy))];
const yearsOther = (c) => yrs.filter((x) => x !== c).slice(0, 3).map(String);
const ch61 = C({
  n: 61, id: 'y3-di-mixed-graph-di', cat: 'di', title: 'Mixed Graph (Bar + Line) DI',
  tag: 'A bar chart and a line chart on one set of axes: reading both and combining them',
  over: 'A mixed graph shows two kinds of data together, usually bars for an absolute quantity (such as revenue) and a line for a rate (such as profit percentage). The two are linked: the rate applies to the quantity, so multiplying them gives a new quantity (profit). The skill is to read each series on its own scale and then combine them correctly.',
  place: 'Bar-plus-line graphs are the standard "hard" graph in DI sections of company tests.',
  real: 'Company dashboards plot revenue as bars and margins as a line, and managers read profit from both.',
  obj: ['Read the bar series and the line series on their own scales', 'Combine rate and amount to get new quantities', 'Compute expenses and growth rates', 'Find years of highest growth and highest margin', 'Avoid mixing percentage points and percentages'],
  pre: ['Bar Graph Interpretation', 'Line Graph Interpretation', 'Percentage-Based DI'],
  refresh: 'Profit = revenue × profit % ÷ 100. Expenses = revenue − profit. Percentage change = change ÷ old × 100.',
  defs: ['Primary axis: the scale that the bars use.', 'Secondary axis: the scale that the line uses (here percentage).', 'Derived series: a series you compute from two given series.', 'Margin: profit as a percentage of revenue.', 'Percentage point: the arithmetic difference between two percentages.'],
  intu: 'The bars say how big, the line says how profitable. Multiply them to learn how much profit.',
  mental: 'Write a six-row table from the graph: year, revenue, margin, then add profit and expenses columns. Every question is then a lookup.',
  formulas: [['Profit', 'Revenue × margin %', 'Two series.', 'Key step.', '2023: 240 × 20% = 48'], ['Expenses', 'Revenue − profit', 'After profit.', 'Costs.', '2023: 240 − 48 = 192'], ['Growth', '(New − old) ÷ old × 100', 'Old is the base.', 'Percent change.', 'Profit 32 → 48 is 50%'], ['Average', 'Sum ÷ number of years', 'Derived series.', 'Mean.', 'Average profit'], ['Margin comparison', 'Compare lines directly', 'Rates.', 'Highest margin.', '2023: 20%']],
  narr: ['Table: 2018 revenue 125 at 8% profit gives 10; 2019 150 at 12% gives 18; 2020 180 at 15% gives 27; 2021 160 at 10% gives 16; 2022 200 at 16% gives 32; 2023 240 at 20% gives 48 (₹ crore).', 'Expenses are revenue minus profit: 115, 132, 153, 144, 168, 192.', 'Growth: profit rose from 32 to 48 between 2022 and 2023, which is 16 ÷ 32 = 50%. Revenue rose from 125 to 240 between 2018 and 2023: 115 ÷ 125 = 92%.', 'Be careful with margins: a rise in margin from 16% to 20% is 4 percentage points but 25% in percentage terms.', 'A high margin does not mean high profit. The highest profit is in 2023 (48) because both revenue and margin are highest.'],
  deep: [['Percentage points', 'Margin change is best stated in percentage points; profit change in percent.'], ['Ratio of revenue to expenses', 'Revenue ÷ expenses is greater than 1 whenever there is a profit.']],
  vars: [['Read bar', 'Revenue.', '2020'], ['Read line', 'Margin.', '2023'], ['Derive profit', 'Multiply.', '2021'], ['Growth', 'Percentage change.', 'Profit 2022→2023'], ['Best year', 'Maximum.', 'Highest margin']],
  ex: [
    { t: 'Derive profit', q: 'Revenue in 2021 was ₹160 crore and the profit margin was 10%. What was the profit?', g: ['160', '10%'], c: 'Multiply.', s: [['Formula', 'Profit = revenue × margin.'], ['Compute', '160 × 10% = ₹16 crore.']], a: '₹16 crore', w: 'The margin is a rate on revenue.', tr: 'Subtracting 10 from 160.' },
    { t: 'Expenses', q: 'In 2023, revenue was ₹240 crore and profit was ₹48 crore. What were the expenses?', g: ['240', '48'], c: 'Subtract.', s: [['Formula', 'Expenses = revenue − profit.'], ['Compute', '240 − 48 = ₹192 crore.']], a: '₹192 crore', w: 'Check: profit is 20% of 240.', tr: 'Adding.' },
    { t: 'Growth', q: 'Profit rose from ₹32 crore (2022) to ₹48 crore (2023). By what percentage?', g: ['32', '48'], c: 'Change over old.', s: [['Change', '48 − 32 = 16.'], ['Percent', '16 ÷ 32 = 50%.']], a: '50%', w: 'The base is 2022.', tr: 'Dividing by 48.' }
  ],
  short: { title: 'Add the derived columns', trad: 'Recompute each time.', fast: 'Add profit and expense columns once; then every question is a single lookup or a simple ratio.', rules: ['Profit = revenue × margin.', 'Expenses = revenue − profit.', 'Old is the base.', 'Percentage points ≠ percent.'] },
  mist: [['Reading the line on the bar scale', 'Wrong scale.', 'Note which axis each series uses.'], ['Taking margin as profit', 'Rate vs amount.', 'Multiply by revenue.'], ['Wrong base for growth', 'Dividing by new.', 'Use old as the base.']],
  tips: { sec: 100, elim: 'Profit must be less than revenue.', adv: 'Write the six-row table with all derived columns.', ins: 'High margin does not mean high profit.' },
  rev: ['Two scales.', 'Profit.', 'Expenses.', 'Growth.', 'Percentage points.'],
  qf: ['Profit = revenue × margin'],
  take: ['Know each axis.', 'Derived columns.', 'Old base.', 'Rate vs amount.'],
  self: ['Can I compute profit from the graph?', 'Can I compute growth?', 'Can I separate margin from profit?']
});
const q61 = [
  E(nq(`${T61}What was the revenue in 2020 (₹ crore)?`, y(rev, 2020), `The bar for 2020 shows ₹180 crore.`)),
  E(pcq(`${T61}What was the profit percentage in 2023?`, y(pp, 2023), `The line for 2023 shows 20%.`, 0)),
  E(nq(`${T61}What was the profit in 2023 (₹ crore)?`, y(prof, 2023), `20% of 240 = 48.`)),
  E(nq(`${T61}What was the profit in 2018 (₹ crore)?`, y(prof, 2018), `8% of 125 = 10.`)),
  E(nq(`${T61}What were the expenses in 2019 (₹ crore)?`, y(exp, 2019), `Profit = 12% of 150 = 18, so expenses = 150 − 18 = 132.`)),
  E(tq(`${T61}In which year was the revenue highest?`, '2023', ['2022', '2020', '2021'], `The tallest bar is 2023 (₹240 crore). Answer: 2023.`)),
  M(nq(`${T61}What was the profit in 2021 (₹ crore)?`, y(prof, 2021), `10% of 160 = 16.`)),
  M(nq(`${T61}What was the total revenue over the six years (₹ crore)?`, sum(rev), `125 + 150 + 180 + 160 + 200 + 240 = 1,055.`)),
  M(pcq(`${T61}By what percentage did revenue increase from 2018 to 2023?`, (240 - 125) / 125 * 100, `(240 − 125) ÷ 125 = 115 ÷ 125 = 92%.`, 1)),
  M(pcq(`${T61}By what percentage did profit increase from 2022 to 2023?`, (48 - 32) / 32 * 100, `Profit rose from 32 to 48: 16 ÷ 32 = 50%.`, 1)),
  M(rq(y(prof, 2019), y(prof, 2021), `Profit in 2019 = 18 and in 2021 = 16; the HCF is 2.`, `${T61}What is the ratio of profit in 2019 to profit in 2021?`)),
  M(nq(`${T61}What was the average annual profit over the six years (₹ crore, to one decimal)?`, round(sum(prof) / 6, 1), `Total profit = 10 + 18 + 27 + 16 + 32 + 48 = 151; 151 ÷ 6 = ${round(sum(prof) / 6, 1)}.`, 1)),
  M(tq(`${T61}In which year was the profit lowest?`, '2018', ['2021', '2019', '2020'], `Profits are 10, 18, 27, 16, 32, 48; the lowest is 10 in 2018. Answer: 2018.`)),
  M(nq(`${T61}What were the expenses in 2022 (₹ crore)?`, y(exp, 2022), `Profit = 16% of 200 = 32; expenses = 200 − 32 = 168.`)),
  P(tq(`${T61}In which year was the percentage growth in profit over the previous year the highest?`, String(bestYoyYear), yearsOther(bestYoyYear), `Profit growth: 2019 +80%, 2020 +50%, 2021 −40.7%, 2022 +100%, 2023 +50%. The highest is ${bestYoyYear}. Answer: ${bestYoyYear}.`)),
  P(tq(`${T61}In which year was the ratio of expenses to revenue the lowest?`, '2023', ['2018', '2020', '2022'], `Expenses ÷ revenue = 100% − margin, which is lowest when the margin is highest (20% in 2023). Answer: 2023.`)),
  P(nq(`${T61}What was the total profit for 2020, 2021 and 2022 together (₹ crore)?`, y(prof, 2020) + y(prof, 2021) + y(prof, 2022), `27 + 16 + 32 = 75.`)),
  P(pcq(`${T61}By what percentage were the expenses in 2023 higher than those in 2018?`, (192 - 115) / 115 * 100, `Expenses: 192 and 115; 77 ÷ 115 × 100 = 67%.`, 1)),
  P(rq(240, 192, `Revenue in 2023 = 240 and expenses = 192; the HCF is 48.`, `${T61}What was the ratio of revenue to expenses in 2023?`)),
  P(nq(`${T61}If the profit margin in 2021 had been 15% instead of 10%, what would the profit have been (₹ crore)?`, 24, `15% of 160 = 24.`))
];
build(ch61, q61);

// ================= Chapter 62: radar chart =================
const skills = ['Communication', 'Logic', 'Technical', 'Teamwork', 'Leadership', 'Creativity'];
const R = { Rahul: [70, 85, 90, 60, 55, 65], Sneha: [80, 75, 70, 85, 80, 72], Tarun: [65, 70, 60, 75, 90, 80] };
const T62 = table('Radar chart data: scores (out of 100) of three candidates in six skills.', ['Skill', 'Rahul', 'Sneha', 'Tarun'], skills.map((s, i) => [s, R.Rahul[i], R.Sneha[i], R.Tarun[i]]));
const sk = (n, s) => R[n][skills.indexOf(s)];
const tot = (n) => sum(R[n]);
const avg = (n) => round(tot(n) / 6, 1);
const best = (n) => skills[R[n].indexOf(Math.max(...R[n]))];
const worst = (n) => skills[R[n].indexOf(Math.min(...R[n]))];
const lead = (a, b) => skills.filter((s) => sk(a, s) > sk(b, s));
const nameOpts = (c) => ['Rahul', 'Sneha', 'Tarun'].filter((n) => n !== c).concat(['All three are equal']);
const skillOpts = (c) => skills.filter((s) => s !== c).slice(0, 3);
const ch62 = C({
  n: 62, id: 'y3-di-radar-chart-di', cat: 'di', title: 'Radar/Spider Chart DI',
  tag: 'Several variables on spokes around a centre: reading values, profiles and comparisons',
  over: 'A radar (or spider) chart plots several variables on spokes that radiate from a centre, joining the points for each person or item into a polygon. Each spoke has its own scale starting at the centre. The chart is useful for comparing profiles: where one polygon sticks out beyond another, that item is stronger on that variable. In exams the polygon values are read from the rings; the questions are the same as for tables.',
  place: 'Radar charts appear in DI sets as the "unusual" chart type to test flexibility.',
  real: 'Skill profiles of candidates, product comparisons and performance reviews are often drawn as radar charts.',
  obj: ['Read values from spokes and rings', 'Compare two or more profiles variable by variable', 'Compute totals, averages and differences across spokes', 'Identify strongest and weakest variables', 'Count where one profile leads another'],
  pre: ['Table-Based DI', 'Bar Graph Interpretation'],
  refresh: 'Each spoke is a separate scale starting at the centre. The value is read where the polygon crosses the spoke.',
  defs: ['Spoke: one variable axis from the centre outwards.', 'Ring: a circle of equal value.', 'Profile: the polygon of one person or item.', 'Strength: a spoke where the profile reaches far out.', 'Lead: a variable on which one profile exceeds another.'],
  intu: 'A radar chart is a table wrapped in a circle. Unwrap it into a table and the questions are arithmetic.',
  mental: 'Write a table with one row per spoke and one column per profile. Then answer by looking up cells and doing simple arithmetic.',
  formulas: [['Total score', 'Sum of the spokes', 'One profile.', 'Totals.', 'Rahul: 425'], ['Average', 'Total ÷ number of spokes', 'Six spokes.', 'Mean.', 'Rahul: 70.8'], ['Difference', 'Value A − value B on one spoke', 'Same spoke.', 'Comparison.', 'Teamwork: Sneha − Rahul = 25'], ['Lead count', 'Number of spokes where A > B', 'Two profiles.', 'Counting.', 'Sneha leads Rahul on 4'], ['Percent more', '(A − B) ÷ B × 100', 'B is the base.', 'Comparison.', 'Leadership: 80 vs 55']],
  narr: ['Write the table first: Communication 70, 80, 65; Logic 85, 75, 70; Technical 90, 70, 60; Teamwork 60, 85, 75; Leadership 55, 80, 90; Creativity 65, 72, 80 (Rahul, Sneha, Tarun).', 'Totals: Rahul 425, Sneha 462, Tarun 440. Averages: Rahul 70.8, Sneha 77.0, Tarun 73.3.', 'Strongest and weakest spokes: Rahul is strongest in Technical (90) and weakest in Leadership (55). Tarun is strongest in Leadership (90) and weakest in Technical (60).', 'Sneha leads Rahul on Communication, Teamwork, Leadership and Creativity: four spokes. Rahul leads on Logic and Technical.', 'Percent comparisons use the second named profile as the base: Sneha\'s Leadership (80) is (80 − 55) ÷ 55 = 45.5% higher than Rahul\'s.'],
  deep: [['Area of the polygon', 'A larger polygon suggests a stronger overall profile only if all spokes are on the same scale and equally important.'], ['Spoke order', 'The order of spokes around the chart is arbitrary; do not read neighbours as related.']],
  vars: [['Single value', 'Read a spoke.', 'Rahul Technical'], ['Total/average', 'Across spokes.', 'Sneha total'], ['Extremes', 'Highest/lowest.', 'Weakest skill'], ['Lead counts', 'Compare two profiles.', 'Sneha vs Rahul'], ['Percent comparison', 'Base matters.', 'Leadership']],
  ex: [
    { t: 'Total', q: 'Rahul scores 70, 85, 90, 60, 55 and 65 on six spokes. What is his total score?', g: ['Six values'], c: 'Add.', s: [['Add', '70 + 85 + 90 = 245.'], ['Add the rest', '60 + 55 + 65 = 180; total 425.']], a: '425', w: 'Check: average is 70.8.', tr: 'Missing a spoke.' },
    { t: 'Lead count', q: 'Compare Sneha (80, 75, 70, 85, 80, 72) with Rahul (70, 85, 90, 60, 55, 65). On how many spokes does Sneha lead?', g: ['Six pairs'], c: 'Compare pairwise.', s: [['Pairs', '80>70, 75<85, 70<90, 85>60, 80>55, 72>65.'], ['Count', 'Sneha leads on 4.']], a: '4', w: 'Rahul leads on Logic and Technical.', tr: 'Counting ties.' },
    { t: 'Percent more', q: 'Sneha scores 80 in Leadership and Rahul 55. By what percentage is Sneha\'s score higher than Rahul\'s?', g: ['80 vs 55'], c: 'Base is Rahul.', s: [['Difference', '80 − 55 = 25.'], ['Percent', '25 ÷ 55 = 45.5%.']], a: '45.5%', w: 'Rahul is the base.', tr: 'Dividing by 80.' }
  ],
  short: { title: 'Unwrap the circle', trad: 'Read the chart for every question.', fast: 'Copy the values into a table once and answer all questions from the table.', rules: ['Table first.', 'Use the second named profile as the base.', 'Count leads pairwise.', 'Check each spoke.'] },
  mist: [['Reading a neighbouring spoke', 'Wrong value.', 'Follow the spoke to the ring.'], ['Wrong base for a percentage', 'Reverse comparison.', 'Base is the second name.'], ['Assuming bigger area is better', 'Spokes may differ in importance.', 'Answer only what is asked.']],
  tips: { sec: 90, elim: 'A score cannot exceed 100.', adv: 'Copy values into a table before answering.', ins: 'Radar questions are table questions in disguise.' },
  rev: ['Read spokes.', 'Totals and averages.', 'Extremes.', 'Lead counts.', 'Percent with base.'],
  qf: ['Percent more = (A − B) ÷ B'],
  take: ['Unwrap.', 'Add and average.', 'Pairwise compare.', 'Choose the base.'],
  self: ['Can I read a spoke?', 'Can I count leads?', 'Can I compute a percentage with the right base?']
});
const q62 = [
  E(nq(`${T62}What is Rahul's score in Technical?`, sk('Rahul', 'Technical'), `The Technical value of Rahul is 90.`)),
  E(nq(`${T62}What is Sneha's score in Teamwork?`, sk('Sneha', 'Teamwork'), `The Teamwork value of Sneha is 85.`)),
  E(tq(`${T62}In which skill is Tarun's score the highest?`, best('Tarun'), skillOpts(best('Tarun')), `Tarun's scores are 65, 70, 60, 75, 90, 80; the highest is 90 in Leadership. Answer: Leadership.`)),
  E(tq(`${T62}In which skill is Rahul's score the lowest?`, worst('Rahul'), skillOpts(worst('Rahul')), `Rahul's scores are 70, 85, 90, 60, 55, 65; the lowest is 55 in Leadership. Answer: Leadership.`)),
  E(nq(`${T62}What is Rahul's total score?`, tot('Rahul'), `70 + 85 + 90 + 60 + 55 + 65 = 425.`)),
  E(nq(`${T62}By how many points does Sneha's Communication score exceed Rahul's?`, sk('Sneha', 'Communication') - sk('Rahul', 'Communication'), `80 − 70 = 10.`)),
  M(nq(`${T62}What is Sneha's total score?`, tot('Sneha'), `80 + 75 + 70 + 85 + 80 + 72 = 462.`)),
  M(nq(`${T62}What is Tarun's average score (to one decimal)?`, avg('Tarun'), `Total = 65 + 70 + 60 + 75 + 90 + 80 = 440; 440 ÷ 6 = ${avg('Tarun')}.`, 1)),
  M(tq(`${T62}Who has the highest total score?`, 'Sneha', nameOpts('Sneha'), `Totals are Rahul 425, Sneha 462, Tarun 440, so Sneha is highest. Answer: Sneha.`)),
  M(nq(`${T62}On how many skills does Sneha score higher than Rahul?`, lead('Sneha', 'Rahul').length, `Sneha leads on ${lead('Sneha', 'Rahul').join(', ')}.`)),
  M(nq(`${T62}On how many skills does Tarun score higher than Rahul?`, lead('Tarun', 'Rahul').length, `Tarun leads on ${lead('Tarun', 'Rahul').join(', ')}.`)),
  M(nq(`${T62}What is the difference between the highest and lowest scores of Rahul?`, Math.max(...R.Rahul) - Math.min(...R.Rahul), `90 − 55 = 35.`)),
  M(nq(`${T62}What is the average score of the three candidates in Creativity (to one decimal)?`, round(sum(['Rahul', 'Sneha', 'Tarun'].map((n) => sk(n, 'Creativity'))) / 3, 1), `(65 + 72 + 80) ÷ 3 = ${round(217 / 3, 1)}.`, 1)),
  M(tq(`${T62}In which skill is the gap between the highest and lowest of the three candidates the largest?`, 'Leadership', ['Communication', 'Logic', 'Technical'], `Gaps (highest − lowest): Communication 15, Logic 15, Technical 30, Teamwork 25, Leadership 35, Creativity 15. The largest is 35 in Leadership. Answer: Leadership.`)),
  P(pcq(`${T62}By what percentage is Sneha's Leadership score higher than Rahul's?`, (80 - 55) / 55 * 100, `(80 − 55) ÷ 55 = 25 ÷ 55 = 45.5%.`, 1)),
  P(pcq(`${T62}Rahul's Technical score is what percentage of his total score (to one decimal)?`, 90 / tot('Rahul') * 100, `90 ÷ 425 × 100 = ${round(90 / 425 * 100, 1)}%.`, 1)),
  P(tq(`${T62}Which candidate has the smallest range (highest score minus lowest score)?`, 'Sneha', nameOpts('Sneha'), `Ranges: Rahul 90 − 55 = 35; Sneha 85 − 70 = 15; Tarun 90 − 60 = 30. The smallest is Sneha's 15. Answer: Sneha.`)),
  P(nq(`${T62}If Rahul improves Leadership by 20 points, what will his new total be?`, tot('Rahul') + 20, `425 + 20 = 445.`)),
  P(tq(`${T62}For how many skills is Sneha's score the highest of the three candidates?`, '2', ['1', '3', '4'], `The highest per skill is: Communication Sneha, Logic Rahul, Technical Rahul, Teamwork Sneha, Leadership Tarun, Creativity Tarun. Sneha is highest in 2 skills. Answer: 2.`)),
  P(tq(`${T62}Which skill has the highest average score over the three candidates?`, 'Logic', ['Communication', 'Technical', 'Creativity'], `Skill averages: Communication 71.7, Logic 76.7, Technical 73.3, Teamwork 73.3, Leadership 75.0, Creativity 72.3. The highest is Logic with 76.7. Answer: Logic.`))
];
build(ch62, q62);
