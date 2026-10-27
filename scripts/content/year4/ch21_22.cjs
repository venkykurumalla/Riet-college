const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { nq, pcq, tq, rq, best, others, round, sum, table } = require('./diq.cjs');
const base = { year: 4, cat: 'di', category: 'Data Interpretation', url: 'https://www.indiabix.com/data-interpretation/' };

// ================= Chapter 21: integrated DI sets (3 tables) =================
const R = ['North', 'South', 'East', 'West'];
const s22 = [200, 300, 150, 250], s23 = [230, 330, 180, 260];
const cp = [60, 55, 65, 50];            // cost as % of 2023 sales
const emp = [400, 550, 300, 500];       // employees 2023
const cost = s23.map((s, i) => s * cp[i] / 100), prof = s23.map((s, i) => s - cost[i]);
const T1 = table('Table 1: Sales (₹ crore)', ['Region', '2022', '2023'], R.map((r, i) => [r, s22[i], s23[i]]));
const T2 = table('Table 2: Cost as a percentage of 2023 sales', ['Region', 'Cost %'], R.map((r, i) => [r, cp[i] + '%']));
const T3 = table('Table 3: Employees in 2023', ['Region', 'Employees'], R.map((r, i) => [r, emp[i]]));
const TT = T1 + T2 + T3;
const gr = s23.map((s, i) => (s - s22[i]) / s22[i] * 100);
const rpe = s23.map((s, i) => s * 10 / emp[i]);   // ₹ lakh per employee (1 crore = 100 lakh; s*100/emp)
const rpeL = s23.map((s, i) => s * 100 / emp[i]);
const ch21 = C({ ...base, n: 21, id: 'y4-ada-integrated-di-sets', title: 'Integrated DI Sets (3+ Charts)',
  tag: 'Three or more tables or charts about the same entities: combining sales, costs and staffing to answer each question',
  over: 'An integrated set gives three or more data sources (here sales, cost percentages and staffing) about the same regions or products. Each question needs a few cells from different sources combined by a product, a ratio or a sum. The method is to build one working table of derived values (cost, profit, growth, revenue per employee) for each entity and answer every question from it.',
  place: 'Integrated sets are the longest DI items in company tests; building the working table once saves time on all questions.',
  real: 'Management reports combine finance, headcount and sales tables in exactly this way.',
  obj: ['Match entities across several sources', 'Build a working table of derived values', 'Compute growth, profit and productivity', 'Rank entities on derived measures', 'Check consistency between sources'],
  pre: ['Multi-Table DI Sets', 'Mixed Graph DI', 'Percentage-Based DI'],
  refresh: 'Cost = sales × cost %. Profit = sales − cost. Productivity = sales ÷ employees. Growth = change ÷ old.',
  defs: ['Working table: your own table of derived values.', 'Productivity: output per employee.', 'Growth: percentage change over a period.', 'Margin: profit as a percentage of sales.', 'Entity: the item compared (region, product).'],
  intu: 'Several sources are one table split into pieces. Rejoin them and the questions become lookups.',
  mental: 'For each entity compute cost, profit and revenue per employee once; then answer from your table.',
  formulas: [['Cost and profit', 'Cost = sales × %; profit = sales − cost', 'Each region.', 'Derived.', 'North: 230 × 60% = 138'], ['Growth', '(2023 − 2022) ÷ 2022', 'Each region.', 'Growth.', 'North 15%'], ['Productivity', 'Sales ÷ employees', 'Each region.', 'Per head.', 'North ₹57.5 lakh'], ['Share', 'Region ÷ total', 'Each region.', 'Share.', 'South 330/1000'], ['Total margin', 'Total profit ÷ total sales', 'All regions.', 'Weighted.', '(1000 − cost)/1000']],
  narr: ['North: sales rose from 200 to 230 (15% growth), cost 60% of 230 = 138, profit 92; revenue per employee 230 × 100 ÷ 400 = ₹57.5 lakh.', 'South: sales 330, cost 55% = 181.5, profit 148.5, growth 10%, revenue per employee ₹60 lakh.', 'East: sales 180, cost 65% = 117, profit 63, growth 20%, revenue per employee ₹60 lakh.', 'West: sales 260, cost 50% = 130, profit 130, growth 4%, revenue per employee ₹52 lakh.', 'Total 2023 sales are ₹1,000 crore; total profit is 92 + 148.5 + 63 + 130 = 433.5, a margin of 43.35%.'],
  deep: [['Different bases', 'Cost % applies to 2023 sales only; do not apply it to 2022.'], ['Productivity versus profit', 'A region can have high revenue per employee and low profit.']],
  vars: [['Derived columns', 'Cost, profit.', 'Each region'], ['Growth', 'Percent change.', 'North'], ['Productivity', 'Per employee.', 'Revenue'], ['Rankings', 'Highest.', 'Profit'], ['Totals', 'Sum.', 'Total profit']],
  ex: [
    { t: 'Cost and profit', q: 'North: 2023 sales ₹230 crore, cost 60% of sales. What is the profit?', g: ['230', '60%'], c: 'Sales − cost.', s: [['Cost', '60% of 230 = 138.'], ['Profit', '230 − 138 = ₹92 crore.']], a: '₹92 crore', w: 'Cost is on sales.', tr: 'Taking 60% as profit.' },
    { t: 'Productivity', q: 'North: sales ₹230 crore with 400 employees. Revenue per employee in ₹ lakh?', g: ['230 crore', '400'], c: 'Convert units.', s: [['Convert', '230 crore = 23,000 lakh.'], ['Divide', '23,000 ÷ 400 = 57.5.']], a: '₹57.5 lakh', w: '1 crore = 100 lakh.', tr: 'Forgetting units.' },
    { t: 'Growth', q: 'West sales rose from ₹250 crore to ₹260 crore. Growth?', g: ['250', '260'], c: 'Change over old.', s: [['Change', '10.'], ['Percent', '10 ÷ 250 = 4%.']], a: '4%', w: 'Old is the base.', tr: 'Dividing by 260.' }
  ],
  short: { title: 'Build the working table', trad: 'Hunt per question.', fast: 'Compute cost, profit, growth and revenue per employee for each entity once.', rules: ['Right base.', 'Convert units.', 'Weighted totals.', 'One table, many answers.'] },
  mist: [['Applying a % to the wrong year', 'Wrong base.', 'Read which year the % refers to.'], ['Unit slips (crore vs lakh)', 'Large error.', 'Convert first.'], ['Averaging percentages', 'Weighted needed.', 'Use totals.']],
  tips: { sec: 150, elim: 'Profit must be less than sales.', adv: 'Write derived columns beside the tables.', ins: 'An integrated set is one table in disguise.' },
  rev: ['Match entities.', 'Derived columns.', 'Units.', 'Weighted totals.', 'Rank.'],
  qf: ['Profit = sales × (1 − cost%)'],
  take: ['Working table.', 'Bases.', 'Units.', 'Totals.'],
  self: ['Can I build the working table?', 'Can I convert units?', 'Can I rank on derived values?']
});
const q21 = [
  nq('e', `${TT}What is the profit of the North region in 2023 (₹ crore)?`, prof[0], '230 − 60% of 230 = 92.'),
  nq('e', `${TT}What is the cost of the South region in 2023 (₹ crore)?`, cost[1], '55% of 330 = 181.5.', 1),
  pcq('e', `${TT}What is the growth in sales of the North region from 2022 to 2023?`, gr[0], '(230 − 200) ÷ 200 = 15%.', 1),
  nq('e', `${TT}What was the total sales of all regions in 2023 (₹ crore)?`, sum(s23), '230 + 330 + 180 + 260 = 1,000.'),
  nq('e', `${TT}How many employees are there in all regions together?`, sum(emp), '400 + 550 + 300 + 500 = 1,750.'),
  nq('e', `${TT}What is the profit of the West region in 2023 (₹ crore)?`, prof[3], '260 − 50% of 260 = 130.'),
  nq('m', `${TT}What is the profit of the East region in 2023 (₹ crore)?`, prof[2], '180 − 65% of 180 = 63.'),
  pcq('m', `${TT}What is the growth in sales of the East region?`, gr[2], '(180 − 150) ÷ 150 = 20%.', 1),
  tq('m', `${TT}Which region had the highest sales growth?`, best(R, gr), others(R, best(R, gr)), `Growth rates: ${R.map((r, i) => r + ' ' + round(gr[i], 1) + '%').join(', ')}; the highest is ${best(R, gr)}.`),
  nq('m', `${TT}What is the revenue per employee of the South region (₹ lakh)?`, rpeL[1], '330 crore = 33,000 lakh; ÷ 550 = 60.'),
  tq('m', `${TT}Which region has the highest profit in 2023?`, best(R, prof), others(R, best(R, prof)), `Profits: ${R.map((r, i) => r + ' ' + prof[i]).join(', ')}; the highest is ${best(R, prof)}.`),
  nq('m', `${TT}What is the total profit of all regions in 2023 (₹ crore)?`, sum(prof), '92 + 148.5 + 63 + 130 = 433.5.', 1),
  pcq('m', `${TT}South\'s share of total 2023 sales is`, 330 / 1000 * 100, '330 ÷ 1,000 = 33%.', 1),
  nq('m', `${TT}What is the revenue per employee of the West region (₹ lakh)?`, rpeL[3], '26,000 ÷ 500 = 52.'),
  pcq('p', `${TT}What is the overall profit margin of the four regions in 2023 (to one decimal)?`, sum(prof) / 1000 * 100, '433.5 ÷ 1,000 = 43.35%, about 43.4%.', 1),
  tq('p', `${TT}Which region has the lowest profit per employee?`, best(R, prof.map((p, i) => p / emp[i]), Math.min), others(R, best(R, prof.map((p, i) => p / emp[i]), Math.min)), `Profit per employee (₹ lakh): ${R.map((r, i) => r + ' ' + round(prof[i] * 100 / emp[i], 1)).join(', ')}; the lowest is ${best(R, prof.map((p, i) => p / emp[i]), Math.min)}.`),
  pcq('p', `${TT}By what percentage did total sales rise from 2022 to 2023?`, (sum(s23) - sum(s22)) / sum(s22) * 100, 'Total 2022 = 900; total 2023 = 1,000; 100 ÷ 900 = 11.1%.', 1),
  nq('p', `${TT}If West's cost fell by 10 percentage points (to 40%), its new profit would be (₹ crore)`, 260 * 0.6, '60% of 260 = 156.'),
  rq('p', `${TT}What is the ratio of the 2023 profit of South to that of North?`, 148.5, 92, 'Profits 148.5 and 92; multiply by 2: 297 : 184.'),
  nq('p', `${TT}By how many ₹ crore did the total 2023 cost exceed 500?`, sum(cost) - 500, 'Total cost = 1,000 − 433.5 = 566.5; 566.5 − 500 = 66.5.', 1)
];
build(ch21, q21);

// ================= Chapter 22: multi-chart dashboards =================
const mo = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const vis = [12000, 15000, 14000, 18000, 20000, 22000];
const conv = [2.5, 3.0, 3.2, 2.8, 3.0, 3.5];       // % of visitors who order
const aov = [800, 820, 810, 850, 900, 880];          // average order value (₹)
const ord = vis.map((v, i) => round(v * conv[i] / 100, 1));
const revn = ord.map((o, i) => o * aov[i]);
const TD = table('Dashboard data for an online shop', ['Month', 'Visitors', 'Conversion (% of visitors who order)', 'Average order value (₹)'], mo.map((m, i) => [m, vis[i], conv[i] + '%', aov[i]]));
const mi = (m) => mo.indexOf(m);
const ch22 = C({ ...base, n: 22, id: 'y4-ada-multi-chart-dashboards', title: 'Multi-Chart Dashboard Analysis',
  tag: 'Reading several metrics together (visitors, conversion, order value): orders, revenue and growth chains',
  over: 'A dashboard shows several charts about one business: traffic, a conversion rate and an average order value. The three metrics multiply: orders = visitors × conversion, and revenue = orders × average order value. A question about revenue growth therefore needs all three charts, and a change in one metric must be separated from changes in the others. The skill is to compute the chain for each period and then compare.',
  place: 'Dashboard-style sets are increasingly common in analytics-oriented company tests.',
  real: 'Marketing and e-commerce teams read exactly such dashboards every week.',
  obj: ['Chain metrics (visitors → orders → revenue)', 'Compute growth of each link', 'Separate effects of traffic, conversion and value', 'Find the period of best performance', 'Avoid mixing rates and counts'],
  pre: ['Integrated DI Sets (3+ Charts)', 'Growth Rate and CAGR from DI'],
  refresh: 'Orders = visitors × conversion ÷ 100. Revenue = orders × order value. Growth = change ÷ old.',
  defs: ['Conversion rate: share of visitors who order.', 'Average order value: revenue per order.', 'Funnel: visitors → orders → revenue.', 'Driver: a metric that changes the result.', 'Chain: successive derived quantities.'],
  intu: 'Revenue is a product of three numbers; changing any one changes the result.',
  mental: 'Fill a table: orders and revenue for each month. Then compare months.',
  formulas: [['Orders', 'Visitors × conversion ÷ 100', 'Each month.', 'Step 1.', '12,000 × 2.5% = 300'], ['Revenue', 'Orders × AOV', 'Each month.', 'Step 2.', '300 × 800 = 2,40,000'], ['Growth', 'Change ÷ old', 'Between months.', 'Percent.', 'Jan→Feb'], ['Decomposition', 'Growth ≈ visitors + conversion + AOV effects', 'Multiplicative.', 'Insight.', 'Which driver moved'], ['Average', 'Total ÷ months', 'Averages.', 'Mean.', 'Average revenue']],
  narr: ['January: 12,000 visitors × 2.5% = 300 orders; at ₹800 each, revenue ₹2,40,000.', 'February: 15,000 × 3.0% = 450 orders; at ₹820, revenue ₹3,69,000. Revenue rose 53.75% because visitors rose 25%, conversion rose 20% and order value 2.5%.', 'April: 18,000 × 2.8% = 504 orders at ₹850: ₹4,28,400. June: 22,000 × 3.5% = 770 orders at ₹880: ₹6,77,600.', 'A fall in conversion can hide behind rising traffic: May has more visitors than April but a higher conversion and order value, so revenue is higher.', 'Always compute the chain; do not guess from one chart.'],
  deep: [['Multiplicative effects', 'Percentage changes in the three metrics multiply, not add.'], ['Rate versus count', 'Conversion is a rate; orders are counts; do not confuse the two.']],
  vars: [['Orders', 'Visitors × rate.', 'March'], ['Revenue', 'Orders × AOV.', 'June'], ['Growth', 'Between months.', 'Jan to Jun'], ['Best month', 'Maximum.', 'Revenue'], ['What-if', 'Change one driver.', 'Conversion +0.5']],
  ex: [
    { t: 'Orders', q: 'January: 12,000 visitors and 2.5% conversion. How many orders?', g: ['12,000', '2.5%'], c: 'Rate × base.', s: [['Convert', '2.5% = 0.025.'], ['Orders', '12,000 × 0.025 = 300.']], a: '300', w: 'Conversion is on visitors.', tr: 'Using 2.5 as a count.' },
    { t: 'Revenue', q: '300 orders at an average of ₹800. Revenue?', g: ['300', '₹800'], c: 'Orders × AOV.', s: [['Pick the numbers', '300 orders and ₹800 per order.'], ['Multiply', '300 × 800 = ₹2,40,000.']], a: '₹2,40,000', w: 'Order value is per order.', tr: 'Adding.' },
    { t: 'Decomposition', q: 'Visitors rise 25% and conversion rises 20%. By what factor do orders change?', g: ['×1.25, ×1.2'], c: 'Multiply.', s: [['Factors', '1.25 × 1.2 = 1.5.'], ['Change', 'Orders up 50%.']], a: '50% more orders', w: 'Not 45%.', tr: 'Adding 25% and 20%.' }
  ],
  short: { title: 'Chain the metrics', trad: 'Read one chart.', fast: 'Compute orders and revenue for each period once; compare drivers by their percentage changes.', rules: ['Orders = visitors × rate.', 'Revenue = orders × AOV.', 'Factors multiply.', 'Check the units.'] },
  mist: [['Adding percentage changes', 'Wrong.', 'Multiply the factors.'], ['Treating conversion as a count', 'Wrong.', 'It is a rate.'], ['Reading only one chart', 'Missed driver.', 'Use all three.']],
  tips: { sec: 120, elim: 'Orders cannot exceed visitors.', adv: 'Add orders and revenue columns.', ins: 'Revenue growth is usually the product of three smaller growths.' },
  rev: ['Funnel.', 'Orders.', 'Revenue.', 'Growth.', 'Drivers.'],
  qf: ['Revenue = V × c × AOV'],
  take: ['Chain.', 'Multiply.', 'Rates.', 'All charts.'],
  self: ['Can I chain the metrics?', 'Can I separate drivers?', 'Can I compute growth?']
});
const q22 = [
  nq('e', `${TD}How many orders were placed in January?`, ord[0], '12,000 × 2.5% = 300.'),
  nq('e', `${TD}How many orders were placed in February?`, ord[1], '15,000 × 3% = 450.'),
  nq('e', `${TD}What was the revenue in January (₹)?`, revn[0], '300 × 800 = 2,40,000.'),
  nq('e', `${TD}How many orders were placed in June?`, ord[5], '22,000 × 3.5% = 770.'),
  nq('e', `${TD}What was the total number of visitors in the six months?`, sum(vis), '12,000 + 15,000 + 14,000 + 18,000 + 20,000 + 22,000 = 101,000.'),
  nq('e', `${TD}What was the revenue in February (₹)?`, revn[1], '450 × 820 = 3,69,000.'),
  nq('m', `${TD}How many orders were placed in March (to the nearest whole number)?`, ord[2], '14,000 × 3.2% = 448.'),
  nq('m', `${TD}What was the revenue in June (₹)?`, revn[5], '770 × 880 = 6,77,600.'),
  tq('m', `${TD}In which month was the revenue the highest?`, best(mo, revn), others(mo, best(mo, revn)), `Revenues: ${mo.map((m, i) => m + ' ' + revn[i]).join(', ')}; the highest is ${best(mo, revn)}.`),
  pcq('m', `${TD}By what percentage did revenue rise from January to February?`, (revn[1] - revn[0]) / revn[0] * 100, '(3,69,000 − 2,40,000) ÷ 2,40,000 = 53.75%.', 1),
  nq('m', `${TD}What were the total orders in the six months?`, sum(ord), '300 + 450 + 448 + 504 + 600 + 770 = 3,072.'),
  nq('m', `${TD}What was the revenue in April (₹)?`, revn[3], '504 × 850 = 4,28,400.'),
  tq('m', `${TD}In which month was the conversion rate the highest?`, 'Jun', ['Mar', 'May', 'Feb'], 'The conversion rates are 2.5, 3.0, 3.2, 2.8, 3.0, 3.5; the highest is 3.5% in June.'),
  nq('m', `${TD}What was the revenue in May (₹)?`, revn[4], '600 × 900 = 5,40,000.'),
  pcq('p', `${TD}By what percentage did revenue rise from January to June?`, (revn[5] - revn[0]) / revn[0] * 100, '(6,77,600 − 2,40,000) ÷ 2,40,000 = 182.3%.', 1),
  nq('p', `${TD}If the conversion in April had been 3.5% (visitors and order value unchanged), the revenue would have been (₹)`, 18000 * 0.035 * 850, '18,000 × 0.035 = 630 orders × 850 = 5,35,500.'),
  nq('p', `${TD}What was the average monthly revenue over the six months (₹, nearest thousand)?`, Math.round(sum(revn) / 6 / 1000) * 1000, `Total revenue = ${sum(revn)}; ÷ 6 ≈ ${round(sum(revn) / 6, 0)}, about ${Math.round(sum(revn) / 6 / 1000) * 1000}.`),
  tq('p', `${TD}Between April and May, which driver explains most of the rise in revenue?`, 'Visitors', ['Conversion rate', 'Order value', 'All equally'], 'Visitors rose 11.1%, conversion 7.1% and order value 5.9%; visitors contributed most.'),
  pcq('p', `${TD}The orders in June are what percentage more than the orders in January?`, (ord[5] - ord[0]) / ord[0] * 100, '(770 − 300) ÷ 300 = 156.7%.', 1),
  nq('p', `${TD}Revenue per visitor in June (₹, to one decimal) is`, round(revn[5] / vis[5], 1), '6,77,600 ÷ 22,000 = 30.8.', 1)
];
build(ch22, q22);
