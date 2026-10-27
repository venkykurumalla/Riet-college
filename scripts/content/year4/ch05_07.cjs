const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, inr, pc, round } = require('./q.cjs');
const { table, sum, ratio } = require('../diLib.cjs');
const base = { year: 4, cat: 'mqm', category: 'Advanced Aptitude / Mixed Problems', url: 'https://www.indiabix.com/aptitude/' };
const ex3 = (a, b, c) => [a, b, c];

// ---------- Chapter 5: data-based quantitative reasoning ----------
const prods = ['P', 'Q', 'R', 'S'];
const units = [120, 200, 150, 80];
const price = [250, 180, 300, 500];     // ₹ per unit
const cost = [200, 150, 240, 400];      // ₹ per unit
const T5 = table('Sales data of four products in a month', ['Product', 'Units sold', 'Selling price (₹/unit)', 'Cost price (₹/unit)'], prods.map((p, i) => [p, units[i], price[i], cost[i]]));
const rev = units.map((u, i) => u * price[i]);
const pr = units.map((u, i) => u * (price[i] - cost[i]));
const ch5 = C({ ...base, n: 5, id: 'y4-mqm-data-based-quant', title: 'Data-Based Quantitative Reasoning',
  tag: 'Quantitative questions set on a small table: derived columns, weighted averages, profit and share calculations',
  over: 'Many quantitative questions arrive with a table: units and prices, hours and wages, marks and weights. The method is to add the derived columns once (revenue, profit, total cost), and then every question is a lookup or a ratio. Averages across rows must be weighted by the right quantity, and percentages must use the correct base.',
  place: 'Table-based quantitative sets are common in placement papers because they test accuracy and organisation together.',
  real: 'Business reports, invoices and sales summaries are tables of exactly this form.',
  obj: ['Build derived columns once and reuse them', 'Compute weighted averages correctly', 'Compute profit, margin and share from a table', 'Compare rows on a derived measure', 'Avoid averaging percentages directly'],
  pre: ['Mixed Quantitative — Integrated Problem Solving', 'Percentages', 'Averages'],
  refresh: 'Revenue = units × price. Profit = units × (price − cost). Weighted average = total ÷ total weight.',
  defs: ['Derived column: a column computed from others.', 'Weighted average: total of values ÷ total of weights.', 'Margin: profit as a percentage of revenue.', 'Share: part as a percentage of the whole.', 'Base: what a percentage is measured against.'],
  intu: 'A table is a set of numbers waiting to be multiplied. Do the multiplication once for every row.',
  mental: 'Add revenue, cost and profit columns first. Then read each question as a lookup, a total, or a ratio of totals.',
  formulas: [['Revenue', 'Units × selling price', 'Each row.', 'First column.', 'P: 120 × 250 = 30,000'], ['Profit', 'Units × (SP − CP)', 'Each row.', 'Second column.', 'P: 120 × 50 = 6,000'], ['Overall margin', 'Total profit ÷ total revenue × 100', 'All rows.', 'Weighted.', '29,000 ÷ 151,000'], ['Average price', 'Total revenue ÷ total units', 'Weighted.', 'Per unit.', '151,000 ÷ 550'], ['Share', 'Row ÷ total × 100', 'One row.', 'Percent.', 'Q: 36,000/151,000']],
  narr: ['Revenue by product: P 30,000, Q 36,000, R 45,000, S 40,000; total 151,000. Profit: P 6,000, Q 6,000, R 9,000, S 8,000; total 29,000.', 'Overall margin = 29,000 ÷ 151,000 = 19.2%. This is not the average of the four product margins (20%, 16.7%, 20%, 20%).', 'Average selling price per unit = total revenue ÷ total units = 151,000 ÷ 550 = ₹274.5.', 'The product with the highest profit is R (9,000), even though S has the highest margin per unit.', 'Always check which total (units, revenue or profit) is the base of a percentage.'],
  deep: [['Per-unit versus total', 'A high profit per unit does not give high total profit if few units are sold.'], ['Weighted vs simple averages', 'A simple average of prices ignores how many units each price sold.']],
  vars: [['Derived columns', 'Revenue, profit.', 'Each product'], ['Totals', 'Sum rows.', 'Total profit'], ['Weighted averages', 'Total ÷ total.', 'Average price'], ['Shares', 'Percent of total.', 'Revenue share'], ['What-ifs', 'Change a number.', 'Price rise']],
  ex: [
    { t: 'Profit', q: 'Product P: 120 units sold at ₹250 each, cost ₹200 each. What is the total profit?', g: ['120', '250', '200'], c: 'Units × margin.', s: [['Margin', '250 − 200 = 50.'], ['Total', '120 × 50 = ₹6,000.']], a: '₹6,000', w: 'Profit per unit × units.', tr: 'Using revenue.' },
    { t: 'Weighted average', q: 'Total revenue is ₹1,51,000 from 550 units. What is the average selling price per unit?', g: ['151,000', '550'], c: 'Total ÷ total.', s: [['Totals', 'Revenue 151,000 and units 550.'], ['Divide', '151,000 ÷ 550 = 274.5.']], a: '₹274.5', w: 'Weighted by units.', tr: 'Averaging four prices.' },
    { t: 'Margin', q: 'Total profit ₹29,000 on revenue ₹1,51,000. What is the overall margin?', g: ['29,000', '151,000'], c: 'Profit ÷ revenue.', s: [['Divide', '29,000 ÷ 151,000 = 0.192.'], ['Percent', '19.2%.']], a: '19.2%', w: 'Base is revenue.', tr: 'Averaging the margins.' }
  ],
  short: { title: 'Add the columns', trad: 'Compute per question.', fast: 'Add revenue and profit columns once; answer every question from totals and ratios of totals.', rules: ['Weight the averages.', 'Use the right base.', 'Total before percent.', 'Check units.'] },
  mist: [['Averaging percentages', 'Different bases.', 'Divide total by total.'], ['Using cost as the base for margin on revenue', 'Wrong base.', 'Read the question.'], ['Missing a row', 'Wrong total.', 'Tick each row.']],
  tips: { sec: 100, elim: 'A total cannot be less than any single row.', adv: 'Write derived columns beside the table.', ins: 'One table serves several questions.' },
  rev: ['Derived columns.', 'Totals.', 'Weighted averages.', 'Shares.', 'Bases.'],
  qf: ['Weighted average = total ÷ total'],
  take: ['Columns first.', 'Weight.', 'Right base.', 'Check rows.'],
  self: ['Can I add derived columns?', 'Can I weight an average?', 'Can I choose the base?']
});
const mx = (a) => prods[a.indexOf(Math.max(...a))];
const q5 = [
  N('e', `${T5}What is the total revenue from product P (₹)?`, rev[0], '120 × 250 = 30,000.'),
  N('e', `${T5}What is the total revenue from product Q (₹)?`, rev[1], '200 × 180 = 36,000.'),
  N('e', `${T5}What is the profit per unit of product R (₹)?`, price[2] - cost[2], '300 − 240 = 60.'),
  N('e', `${T5}What is the total profit on product S (₹)?`, pr[3], '80 × (500 − 400) = 8,000.'),
  N('e', `${T5}How many units were sold in all?`, sum(units), '120 + 200 + 150 + 80 = 550.'),
  N('e', `${T5}What is the total revenue from R (₹)?`, rev[2], '150 × 300 = 45,000.'),
  N('m', `${T5}What is the total revenue of all four products (₹)?`, sum(rev), '30,000 + 36,000 + 45,000 + 40,000 = 151,000.'),
  N('m', `${T5}What is the total profit of all four products (₹)?`, sum(pr), '6,000 + 6,000 + 9,000 + 8,000 = 29,000.'),
  T('m', `${T5}Which product gives the highest total profit?`, `Product ${mx(pr)}`, prods.filter((p) => p !== mx(pr)).map((p) => `Product ${p}`), `Profits are P 6,000, Q 6,000, R 9,000, S 8,000; the highest is R.`),
  N('m', `${T5}The overall profit as a percentage of total revenue (to one decimal) is`, sum(pr) / sum(rev) * 100, '29,000 ÷ 151,000 = 19.2%.', 1, pc),
  N('m', `${T5}The average selling price per unit over all units (₹, to one decimal) is`, sum(rev) / sum(units), '151,000 ÷ 550 = 274.5.', 1),
  N('m', `${T5}Product Q's profit is what percentage of its cost (to one decimal)?`, (180 - 150) / 150 * 100, 'Profit per unit 30 on cost 150 = 20%.', 0, pc),
  N('m', `${T5}Product S contributes what percentage of total revenue (to one decimal)?`, rev[3] / sum(rev) * 100, '40,000 ÷ 151,000 = 26.5%.', 1, pc),
  T('m', `${T5}The ratio of revenue from P to revenue from R is`, ratio(rev[0], rev[2]), ['3 : 5', '3 : 4', '4 : 5'], '30,000 : 45,000 = 2 : 3.'),
  N('p', `${T5}If every selling price rises by 10% and the units sold stay the same, the new total revenue is (₹)`, sum(rev) * 1.1, '151,000 × 1.1 = 166,100.'),
  N('p', `${T5}If every selling price rises by 10% and costs stay the same, the new total profit is (₹)`, sum(pr) + 0.1 * sum(rev), 'Extra revenue 15,100 adds fully to profit: 29,000 + 15,100 = 44,100.'),
  T('p', `${T5}Which product has the highest profit margin as a percentage of its selling price?`, 'Product P, Product R and Product S tie at 20%', ['Product Q only', 'Product P only', 'Product S only'], 'Margins on selling price: P 50/250 = 20%, Q 30/180 = 16.7%, R 60/300 = 20%, S 100/500 = 20%.'),
  N('p', `${T5}How many extra units of Q must be sold, at the same prices, to raise the total profit by ₹3,000?`, 3000 / 30, 'Each unit of Q gives ₹30 profit; 3,000 ÷ 30 = 100.'),
  N('p', `${T5}The simple average of the four selling prices (₹) is`, sum(price) / 4, '(250 + 180 + 300 + 500) ÷ 4 = 307.5, which differs from the weighted average because units differ.', 1),
  N('p', `${T5}What percentage of the total units sold is product Q?`, 200 / 550 * 100, '200 ÷ 550 = 36.4%.', 1, pc)
];
build(ch5, q5);

// ---------- Chapter 6: high-difficulty quantitative sets ----------
const ch6 = C({ ...base, n: 6, id: 'y4-mqm-high-diff-sets', title: 'High-Difficulty Quantitative Sets',
  tag: 'Multi-step problems on repeated replacement, partnerships, alternating work, races and combined interest',
  over: 'High-difficulty questions are not more advanced mathematics; they are longer chains in which a small slip early on ruins the result. Typical forms are repeated replacement in a mixture, partnerships with changing capital, alternating work, relative motion with turn-arounds, and compound interest with changing rates. The method is to define variables clearly, build the chain step by step and verify with a rough estimate.',
  place: 'These are the questions that separate top scores in company aptitude papers; attempt them after the easier ones.',
  real: 'Project planning with phased resources and investments with changing capital have the same structure.',
  obj: ['Handle repeated replacement with a geometric factor', 'Split partnership profit by capital × time', 'Handle alternating and phased work', 'Solve relative motion with turn-arounds', 'Verify multi-step answers by estimation'],
  pre: ['Mixed Quantitative — Integrated Problem Solving', 'Multi-Concept Quantitative Problems'],
  refresh: 'Replacement: milk left = initial × (1 − x/V)ⁿ. Partnership: profit ∝ capital × time. Work in phases: add the fractions completed.',
  defs: ['Replacement: removing part of a mixture and refilling with another liquid.', 'Capital-time product: capital multiplied by months invested.', 'Phase: a stretch of time with a fixed set of workers or speeds.', 'Turn-around: reversing direction during a journey.', 'Verification: a rough independent estimate.'],
  intu: 'A long problem is a short problem repeated or stitched together. Find the repeating unit.',
  mental: 'Define the unknown, write the first phase, then the second, and so on; add or multiply as the structure demands.',
  formulas: [['Replacement', 'Left = V(1 − x/V)ⁿ', 'n replacements of x from volume V.', 'Mixtures.', '100(0.9)³ = 72.9'], ['Partnership', 'Share ∝ capital × months', 'Varying investment.', 'Business.', '6 : 6 : 5'], ['Phased work', 'Sum of fractions = 1', 'Changing teams.', 'Work.', '1/3 done in 2 h'], ['Meeting with return', 'Relative speed reasoning', 'Turn-arounds.', 'Motion.', 'Two cyclists'], ['Rate change', 'Multiply yearly factors', 'Variable rates.', 'Interest.', '1.1 × 1.2']],
  narr: ['A vessel with 100 L of milk has 10 L removed and replaced by water three times. Milk left = 100 × 0.9³ = 72.9 L.', 'Three partners invest ₹6,000, ₹8,000 and ₹10,000 for 12, 9 and 6 months. Capital × time: 72,000 : 72,000 : 60,000 = 6 : 6 : 5.', 'A tank is filled by pipe A in 6 hours; after 2 hours pipe B (12 hours alone) joins. In 2 hours A fills 1/3. Together they fill 1/4 per hour, so the remaining 2/3 takes 8/3 h; total 4⅔ h.', 'A sum at 10% in year 1 and 20% in year 2 grows by a factor of 1.1 × 1.2 = 1.32, a total of 32%.', 'Check each result against a rough estimate (for example the tank must take more than 2 hours and less than 6).'],
  deep: [['Alternate work', 'Compute the work per cycle, count full cycles, then handle the leftover units.'], ['Rate changes', 'When the rate changes in the middle, split the time and compute each part separately.']],
  vars: [['Replacement', 'Geometric factor.', '3 replacements'], ['Partnership', 'Capital × time.', 'Three partners'], ['Phased work', 'Add fractions.', 'Pipe B joins'], ['Variable interest', 'Multiply factors.', '10% then 20%'], ['Motion', 'Relative speed.', 'Turn-arounds']],
  ex: [
    { t: 'Replacement', q: '100 L of milk: 10 L removed and replaced by water, three times. How much milk is left?', g: ['100 L', '10 L', '3 times'], c: 'Geometric factor.', s: [['Factor', '1 − 10/100 = 0.9.'], ['Result', '100 × 0.9³ = 72.9 L.']], a: '72.9 L', w: 'Each step removes 10% of the current milk.', tr: 'Subtracting 30 L.' },
    { t: 'Partnership', q: 'Investments ₹6,000, ₹8,000, ₹10,000 for 12, 9, 6 months. Find the ratio of profit shares.', g: ['Capital and time'], c: 'Capital × time.', s: [['Products', '72,000, 72,000, 60,000.'], ['Ratio', '6 : 6 : 5.']], a: '6 : 6 : 5', w: 'Time matters as much as capital.', tr: 'Using capital alone.' },
    { t: 'Phased work', q: 'Pipe A fills a tank in 6 h. After 2 h, pipe B (12 h alone) opens too. Total time?', g: ['A 6 h', 'B 12 h'], c: 'Add fractions.', s: [['First 2 h', 'A fills 2/6 = 1/3.'], ['Rest', '2/3 ÷ (1/6 + 1/12) = 8/3 h; total 4.67 h.']], a: '4.67 hours', w: 'Together 1/4 per hour.', tr: 'Ignoring the first phase.' }
  ],
  short: { title: 'Repeat or stitch', trad: 'One big equation.', fast: 'Find the repeating unit (a factor) or split into phases and add the results.', rules: ['Define variables first.', 'Phases add.', 'Factors multiply.', 'Estimate to verify.'] },
  mist: [['Treating replacements as subtraction', 'Wrong geometric.', 'Use (1 − x/V)ⁿ.'], ['Ignoring time in partnerships', 'Wrong ratio.', 'Capital × time.'], ['Skipping the first phase', 'Under-counting.', 'Write phases in order.']],
  tips: { sec: 150, elim: 'Reject answers outside simple bounds.', adv: 'Attempt after easier questions.', ins: 'Neat intermediate numbers show you are on the right track.' },
  rev: ['Replacement.', 'Partnership.', 'Phased work.', 'Variable rates.', 'Verify.'],
  qf: ['Left = V(1 − x/V)ⁿ'],
  take: ['Define.', 'Phase.', 'Factor.', 'Verify.'],
  self: ['Can I do repeated replacement?', 'Can I split partnership profit?', 'Can I phase a work problem?']
});
const q6 = [
  N('e', '100 L of milk has 10 L removed and replaced by water, three times. The milk left is (litres)', 100 * 0.9 ** 3, '100 × 0.9³ = 72.9.', 1),
  N('e', 'In a partnership C invests ₹10,000 for 6 months. The capital × time of C is', 60000, '10,000 × 6 = 60,000.'),
  N('e', 'A pipe fills a tank in 6 hours. In 2 hours it fills what percentage?', 2 / 6 * 100, '2/6 = 33.3%.', 1, pc),
  N('e', 'A sum grows 10% in year 1 and 20% in year 2. The total growth is', (1.1 * 1.2 - 1) * 100, '1.1 × 1.2 = 1.32, a 32% rise.', 0, pc),
  N('e', 'Two cars start 300 km apart and run towards each other at 40 and 60 km/h. They meet after (hours)', 300 / 100, 'Relative speed 100; 300 ÷ 100 = 3.'),
  N('e', 'A job needs 120 man-days. 15 men finish it in (days)', 120 / 15, '120 ÷ 15 = 8.'),
  N('m', 'A vessel has 50 L of milk. 5 L are removed and replaced with water, twice. The water in the vessel is (litres)', 50 - 50 * 0.9 ** 2, 'Milk = 50 × 0.81 = 40.5; water = 9.5.', 1),
  N('m', 'A tank is filled by pipe A in 6 hours. After 2 hours pipe B (12 hours alone) also opens. The total time is (hours)', 2 + (2 / 3) / (1 / 4), '2/3 remains; rate 1/4 per hour: 8/3 h; total 4.67.', 2),
  N('m', 'A, B and C invest ₹6,000, ₹8,000 and ₹10,000 for 12, 9 and 6 months. The profit is ₹17,000. C\'s share is (₹)', 17000 * 5 / 17, 'Ratio 6 : 6 : 5 (total 17): C gets 5/17 × 17,000 = 5,000.'),
  N('m', 'Two cyclists start from the same point in opposite directions at 12 and 18 km/h. After how many minutes are they 45 km apart?', 45 / 30 * 60, 'Separation speed 30 km/h; 45 ÷ 30 = 1.5 h = 90 minutes.'),
  N('m', '₹10,000 is invested at 10% compound interest for the first year and 20% for the second. The amount after two years is (₹)', 10000 * 1.1 * 1.2, '10,000 × 1.32 = 13,200.'),
  N('m', 'A can finish a job in 20 days and B in 30. They work together for 6 days and then A leaves. B finishes the rest in (days)', (1 - 6 * (1 / 20 + 1 / 30)) / (1 / 30), 'Together 6 days: 6 × 1/12 = 1/2 done; B needs 1/2 ÷ 1/30 = 15 days.'),
  N('m', 'A train 150 m long passes a 250 m platform in 20 s. Its speed is (km/h)', 400 / 20 * 3.6, '400 m in 20 s = 20 m/s = 72 km/h.'),
  N('m', 'The ratio of the ages of A and B is 3 : 4. After 6 years it is 4 : 5. A\'s present age is (years)', 18, '3k + 6 : 4k + 6 = 4 : 5 gives 15k + 30 = 16k + 24, so k = 6 and A = 18.'),
  N('p', 'A container holds 80 L of milk. 8 L are replaced by water, then 16 L of the mixture are replaced by water. The milk left is (litres)', 80 * (72 / 80) * (64 / 80), 'After first step milk = 72; after the second, 72 × (64/80) = 57.6.', 1),
  N('p', 'A and B can do a job in 12 and 18 days. They work on alternate days, A first. The number of days needed is', 15, 'LCM 36: A 3, B 2 per day. 5 per 2 days; 14 days give 35; on day 15 A completes the last unit.'),
  N('p', 'A man can row 8 km/h in still water. In a river flowing at 2 km/h it takes him 3 hours to go to a place and return. The distance is (km)', 3 / (1 / 10 + 1 / 6), 'D/10 + D/6 = 3 gives D × 16/60 = 3, so D = 11.25.', 2),
  N('p', 'Three taps fill a tank in 6, 8 and 12 hours. All are opened but the second is closed after 2 hours. The total time is (hours, 2 decimals)', 2 + (1 - 2 * (1 / 6 + 1 / 8 + 1 / 12)) / (1 / 6 + 1 / 12), 'In 2 h: 2 × 9/24 = 3/4 done; remaining 1/4 at 1/4 per hour: 1 h; total 3 h.', 2),
  N('p', 'A sum of money doubles in 5 years at compound interest. In how many years will it become 8 times (assuming the same rate)?', 15, 'Doubling every 5 years: 8 = 2³, so 15 years.')
];
build(ch6, q6);

// ---------- Chapter 7: time-bound drills ----------
const ch7 = C({ ...base, n: 7, id: 'y4-mqm-time-bound-drills', title: 'Time-Bound Quantitative Drills',
  tag: 'Short, fast questions with a target time per question, and a method for pacing a timed section',
  over: 'A timed section is a budget of seconds. If you have 30 questions in 40 minutes, you have 80 seconds per question on average, but they are not equal: easy ones should take 30–45 seconds, hard ones may deserve 2 minutes or a skip. This chapter practises fast, simple questions and a pacing method: set a target time per question type, check progress at fixed points and decide quickly when to skip.',
  place: 'Online assessments are timed and sectional; speed with accuracy decides the score.',
  real: 'Working to deadlines and splitting time across tasks is the same discipline.',
  obj: ['Compute the average time per question', 'Set checkpoints during a timed section', 'Answer easy questions in under 45 seconds', 'Recognise when to skip', 'Estimate scores from attempts and accuracy'],
  pre: ['Advanced Calculation Techniques', 'Approximation and Estimation'],
  refresh: 'Time per question = total time ÷ questions. Accuracy = correct ÷ attempted.',
  defs: ['Pace: the average time you spend per question.', 'Checkpoint: a planned moment to compare progress with plan.', 'Skip: leaving a question to return later.', 'Attempt rate: questions attempted ÷ total.', 'Drill: a short timed practice set.'],
  intu: 'You are paid in marks, and each second spent on a hard question is a second not spent on an easy one.',
  mental: 'Fix your average, set checkpoints at quarter marks, and move on after about twice the average time.',
  formulas: [['Average time', 'Total time ÷ questions', 'Plan.', 'Pace.', '2,400 s ÷ 30 = 80 s'], ['Checkpoint', 'Questions done by time t = t ÷ pace', 'Quarter marks.', 'Control.', 'After 10 min: 7–8'], ['Accuracy', 'Correct ÷ attempted × 100', 'After section.', 'Quality.', '24 ÷ 28'], ['Marks', 'Correct × mark − wrong × penalty', 'Scoring.', 'Score.', '24 − 4 × 0.25'], ['Skip rule', 'Time spent > 2 × pace', 'Any question.', 'Discipline.', '> 160 s']],
  narr: ['A section of 30 questions in 40 minutes gives 2,400 seconds, so 80 seconds on average. Plan 40 s for easy, 80 s for medium and skip anything that passes about 160 s.', 'Use checkpoints: after 10 minutes you should have worked through about 7–8 questions.', 'If you attempt 28 questions and 24 are right, accuracy is 24 ÷ 28 = 85.7%.', 'With 1 mark for each right answer and a quarter-mark penalty for each wrong one, 24 right and 4 wrong score 24 − 1 = 23.', 'Easy questions (percentage of a number, simple ratios) should take under 40 seconds; practise until they do.'],
  deep: [['Sunk-cost trap', 'Do not keep working a question only because you have already spent time on it.'], ['Two passes', 'Pass 1: all questions solvable in under a minute. Pass 2: the rest, easiest first.']],
  vars: [['Pace', 'Seconds per question.', '80 s'], ['Checkpoints', 'Progress targets.', '10 minutes'], ['Accuracy', 'Quality.', '85.7%'], ['Scoring', 'Marks with penalty.', '23'], ['Skipping', 'When to leave.', '160 s']],
  ex: [
    { t: 'Pace', q: 'A section has 30 questions in 40 minutes. What is the average time per question?', g: ['30', '40 min'], c: 'Total ÷ count.', s: [['Seconds', '40 × 60 = 2,400.'], ['Pace', '2,400 ÷ 30 = 80 s.']], a: '80 seconds', w: 'Easy ones should take less.', tr: 'Taking 40 s.' },
    { t: 'Accuracy', q: 'You attempt 28 questions and 24 are correct. Accuracy?', g: ['28', '24'], c: 'Correct ÷ attempted.', s: [['Divide', '24 ÷ 28 = 0.857.'], ['Percent', '85.7%.']], a: '85.7%', w: 'Base is attempted.', tr: 'Dividing by 30.' },
    { t: 'Score', q: '24 correct, 4 wrong, 1 mark each right and ¼ mark penalty each wrong. Score?', g: ['24', '4'], c: 'Marks minus penalty.', s: [['Penalty', '4 × 0.25 = 1.'], ['Score', '24 − 1 = 23.']], a: '23', w: 'Unattempted score zero.', tr: 'Ignoring the penalty.' }
  ],
  short: { title: 'Pace and checkpoints', trad: 'Work until time runs out.', fast: 'Know your pace, check progress at quarter marks, and skip once a question passes about twice the pace.', rules: ['Pace = time ÷ questions.', 'Checkpoints at quarters.', 'Skip at ~2 × pace.', 'Two passes.'] },
  mist: [['Spending equal time on all questions', 'Easy marks lost.', 'Plan by difficulty.'], ['No checkpoints', 'Late panic.', 'Check at quarters.'], ['Sunk-cost persistence', 'Time wasted.', 'Skip and return.']],
  tips: { sec: 40, elim: 'Eliminate two options quickly rather than solving fully.', adv: 'Do a timed drill every day.', ins: 'Speed is built by easy questions done fast.' },
  rev: ['Pace.', 'Checkpoints.', 'Accuracy.', 'Scoring.', 'Skip rule.'],
  qf: ['Pace = total time ÷ questions'],
  take: ['Know the pace.', 'Check at quarters.', 'Skip early.', 'Two passes.'],
  self: ['Can I compute my pace?', 'Can I set checkpoints?', 'Can I decide to skip?']
});
const q7 = [
  N('e', '30 questions in 40 minutes give an average time per question of (seconds)', 40 * 60 / 30, '2,400 ÷ 30 = 80.'),
  N('e', '25% of 480 equals', 120, '480 ÷ 4 = 120.'),
  N('e', '15 × 16 equals', 240, '15 × 16 = 240.'),
  N('e', 'The average of 12, 18 and 24 is', 18, '(12 + 18 + 24) ÷ 3 = 18.'),
  N('e', 'A section of 20 questions has 25 minutes. The average time per question is (seconds)', 25 * 60 / 20, '1,500 ÷ 20 = 75.'),
  N('e', 'The simple interest on ₹2,000 at 5% for 2 years is (₹)', 200, '2,000 × 5 × 2 ÷ 100 = 200.'),
  N('m', 'A candidate attempts 28 questions and gets 24 right. The accuracy is', 24 / 28 * 100, '24 ÷ 28 = 85.7%.', 1, pc),
  N('m', '24 right and 4 wrong with ¼ mark penalty and 1 mark per right answer give a score of', 24 - 4 * 0.25, '24 − 1 = 23.'),
  N('m', 'A 40-minute section: after 10 minutes at an 80-second pace, the number of questions done is about', 600 / 80, '600 ÷ 80 = 7.5.', 1),
  N('m', '35% of 640 equals', 640 * 0.35, '10% = 64; 30% = 192; 5% = 32; 224.'),
  N('m', 'A train travels 180 km in 2.5 hours. The speed is (km/h)', 180 / 2.5, '180 ÷ 2.5 = 72.'),
  N('m', '3,600 seconds ÷ 45 seconds per question gives the number of questions', 80, '3,600 ÷ 45 = 80.'),
  N('m', 'If 3 workers finish a job in 12 days, 6 workers finish it in (days)', 6, 'Man-days = 36; 36 ÷ 6 = 6.'),
  N('m', 'The cost price of an article is ₹400 and it is sold at 15% profit. The selling price is (₹)', 460, '400 × 1.15 = 460.'),
  N('p', 'In a section of 36 questions in 45 minutes, a candidate finishes the first half in 20 minutes. The average time per question left to finish on time is (seconds)', (25 * 60) / 18, 'Time left 25 min = 1,500 s for 18 questions: 83.3 s.', 1),
  N('p', 'A section gives +1 for each right and −0.25 for each wrong answer. A candidate attempts 25 questions with 20 right and 5 wrong. The score is', 20 - 5 * 0.25, '20 − 1.25 = 18.75.', 2),
  N('p', 'The compound interest on ₹5,000 at 20% for 2 years is (₹)', 5000 * 1.44 - 5000, '5,000 × 1.44 = 7,200; interest 2,200.'),
  N('p', 'A man spends 20 minutes on a hard question while his average pace is 80 seconds. The time spent is how many times his pace?', 1200 / 80, '1,200 ÷ 80 = 15 times.'),
  N('p', 'Two numbers are in the ratio 7 : 9 and differ by 14. The larger is', 63, 'Difference 2 parts = 14, so part = 7; larger = 9 × 7 = 63.'),
  N('p', '65 × 15 equals', 975, '65 × 15 = 65 × 10 + 65 × 5 = 650 + 325 = 975.')
];
build(ch7, q7);
