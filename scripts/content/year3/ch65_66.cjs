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
const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

// ================= Chapter 65: high-difficulty multi-step DI =================
const co = ['Alfa', 'Beta', 'Gamma', 'Delta'];
const sales = [800, 600, 1000, 500];            // ₹ lakh
const cogs = [50, 60, 40, 70];                  // cost of goods sold as % of sales
const opx = [10, 5, 15, 10];                    // operating expenses as % of sales
const taxp = [30, 25, 20, 30];                  // tax as % of profit before tax
const gross = sales.map((s, i) => s * (100 - cogs[i]) / 100);
const pbt = sales.map((s, i) => s * (100 - cogs[i] - opx[i]) / 100);
const net = pbt.map((p, i) => p * (100 - taxp[i]) / 100);
const T65 = table('Financial data of four companies (sales in ₹ lakh)', ['Company', 'Sales', 'COGS (% of sales)', 'Operating expenses (% of sales)', 'Tax (% of profit before tax)'], co.map((c, i) => [c, sales[i], cogs[i] + '%', opx[i] + '%', taxp[i] + '%']));
const hiNet = co[net.indexOf(Math.max(...net))];
const coO = (c) => co.filter((x) => x !== c).slice(0, 3);
const ch65 = C({
  n: 65, id: 'y3-di-high-diff-di', cat: 'di', title: 'High-Difficulty DI — Multi-Step Computation',
  tag: 'Chains of percentages of percentages: gross profit, operating profit, tax and net profit across companies',
  url: 'https://www.indiabix.com/data-interpretation/',
  over: 'High-difficulty DI sets give data in stages: sales, then costs as a percentage of sales, then expenses as a percentage of sales, then tax as a percentage of profit. A question may need four or five steps in the right order, and each percentage has its own base. The skill is to set up a calculation pipeline once for each row and then reuse it, and to avoid the classic errors of adding percentages with different bases.',
  place: 'These multi-step sets are the "hard" end of the DI section in company and management tests.',
  real: 'Income statements run exactly this way: revenue, cost of goods, operating costs, tax and net profit.',
  obj: ['Convert each stage to a value before combining', 'Track the base of every percentage', 'Compute gross, operating and net profit for each row', 'Compare derived values across rows', 'Check results with quick estimates'],
  pre: ['Percentage-Based DI', 'Mixed Graph DI', 'Profit and Loss'],
  refresh: 'Value = percentage × base ÷ 100. A percentage of a percentage multiplies the fractions.',
  defs: ['COGS: cost of goods sold.', 'Gross profit: sales minus COGS.', 'Profit before tax (PBT): gross profit minus operating expenses.', 'Net profit: PBT minus tax.', 'Margin: a profit as a percentage of sales.'],
  intu: 'Treat each row as a pipeline. Sales flow in, each stage removes a slice, and what remains after the last stage is net profit.',
  mental: 'For each company compute PBT = sales × (100 − COGS% − OPEX%) ÷ 100, then net = PBT × (100 − tax%) ÷ 100. Build a table of these results and answer from it.',
  formulas: [['Gross profit', 'Sales × (100 − COGS%) ÷ 100', 'Stage 1.', 'First step.', 'Alfa: 800 × 50% = 400'], ['PBT', 'Sales × (100 − COGS% − OPEX%) ÷ 100', 'Both on sales.', 'Second step.', 'Alfa: 800 × 40% = 320'], ['Net profit', 'PBT × (100 − tax%) ÷ 100', 'Tax on PBT.', 'Last step.', 'Alfa: 320 × 70% = 224'], ['Net margin', 'Net ÷ sales × 100', 'Per company.', 'Comparison.', 'Alfa: 28%'], ['Combined', 'Sum of nets ÷ sum of sales', 'Group.', 'Weighted.', 'Total net ÷ total sales']],
  narr: ['Alfa: sales 800; COGS 50% leaves gross profit 400; operating expenses 10% of sales (80) leave PBT 320; tax 30% of 320 is 96, leaving net profit 224. Net margin = 224 ÷ 800 = 28%.', 'Beta: sales 600; COGS 60% leaves 240; opex 5% of 600 is 30, so PBT is 210; tax 25% gives net 157.5. Gamma: sales 1,000; COGS 40% leaves 600; opex 150; PBT 450; tax 20% gives net 360. Delta: sales 500; COGS 70% leaves 150; opex 50; PBT 100; tax 30% gives net 70.', 'Note that COGS and opex are both percentages of sales, but tax is a percentage of PBT. Adding 50% + 10% + 30% is wrong.', 'Gamma has both the highest net profit (360) and the highest net margin (36%). The margins are Alfa 28%, Beta 26.25%, Gamma 36% and Delta 14%.', 'For the group, add nets (224 + 157.5 + 360 + 70 = 811.5) and sales (2,900) and divide: 28.0%.'],
  deep: [['Different bases', 'Never add percentages that refer to different bases; convert each to a value first.'], ['Sanity check', 'Net profit must be less than PBT, which must be less than gross profit, which must be less than sales.']],
  vars: [['Stage by stage', 'Pipeline.', 'Sales to net'], ['Comparisons', 'Across companies.', 'Highest net'], ['Group totals', 'Weighted margin.', 'All four'], ['What-if', 'Change one input.', 'Tax cut'], ['Ratios', 'Derived values.', 'Net : PBT']],
  ex: [
    { t: 'Pipeline', q: 'Alfa has sales ₹800 lakh, COGS 50% and operating expenses 10% of sales, tax 30% of PBT. What is its net profit?', g: ['800', '50%', '10%', '30%'], c: 'Stage by stage.', s: [['PBT', '800 × (100 − 50 − 10)% = 320.'], ['Tax', '30% of 320 = 96.'], ['Net', '320 − 96 = ₹224 lakh.']], a: '₹224 lakh', w: 'Tax is on PBT, not on sales.', tr: 'Subtracting 90% of sales.' },
    { t: 'Net margin', q: 'Alfa earns net profit ₹224 lakh on sales ₹800 lakh. What is its net margin?', g: ['224', '800'], c: 'Net ÷ sales.', s: [['Divide', '224 ÷ 800 = 0.28.'], ['Percent', '28%.']], a: '28%', w: 'The base is sales.', tr: 'Dividing by PBT.' },
    { t: 'Group margin', q: 'The four companies have total net profit ₹811.5 lakh and total sales ₹2,900 lakh. What is the group net margin?', g: ['811.5', '2,900'], c: 'Weighted.', s: [['Divide', '811.5 ÷ 2,900 = 0.2798.'], ['Percent', 'About 28.0%.']], a: '28.0%', w: 'It is not the average of four margins.', tr: 'Averaging the four margins.' }
  ],
  short: { title: 'Row pipeline', trad: 'Do each question from scratch.', fast: 'Build gross, PBT and net columns for every row once, then answer by reading or by simple ratios.', rules: ['COGS and opex are on sales.', 'Tax is on PBT.', 'Add values, not percentages.', 'Group margin is weighted.'] },
  mist: [['Adding percentages with different bases', 'Wrong base.', 'Convert to values first.'], ['Taxing sales instead of PBT', 'Wrong stage.', 'Tax applies to PBT.'], ['Averaging margins', 'Different sizes.', 'Use totals.']],
  tips: { sec: 150, elim: 'Net profit must be below PBT.', adv: 'Compute the three derived columns for all rows first.', ins: 'Estimate with round numbers to catch slips.' },
  rev: ['Gross profit.', 'PBT.', 'Net profit.', 'Margins.', 'Group totals.'],
  qf: ['Net = PBT × (100 − tax%) ÷ 100'],
  take: ['Pipeline per row.', 'Right base.', 'Values not percentages.', 'Weighted totals.'],
  self: ['Can I build the pipeline?', 'Can I avoid base errors?', 'Can I compute a group margin?']
});
const q65 = [
  E(nq(`${T65}What is the gross profit of Alfa (₹ lakh)?`, gross[0], `Alfa's COGS is 50% of 800, so gross profit = 800 − 400 = 400.`)),
  E(nq(`${T65}What is the gross profit of Beta (₹ lakh)?`, gross[1], `Beta's COGS is 60% of 600 = 360, so gross profit = 240.`)),
  E(nq(`${T65}What are the operating expenses of Gamma (₹ lakh)?`, sales[2] * opx[2] / 100, `15% of 1,000 = 150.`)),
  E(nq(`${T65}What is the profit before tax (PBT) of Alfa (₹ lakh)?`, pbt[0], `Gross profit 400 minus operating expenses 80 = 320.`)),
  E(nq(`${T65}What is the profit before tax (PBT) of Delta (₹ lakh)?`, pbt[3], `Gross profit 150 minus operating expenses 50 = 100.`)),
  E(nq(`${T65}What is the tax paid by Alfa (₹ lakh)?`, pbt[0] * taxp[0] / 100, `30% of 320 = 96.`)),
  M(nq(`${T65}What is the net profit of Alfa (₹ lakh)?`, net[0], `PBT 320 minus tax 96 = 224.`)),
  M(nq(`${T65}What is the net profit of Beta (₹ lakh)?`, net[1], `PBT = 240 − 30 = 210; tax 25% = 52.5; net = 157.5.`, 1)),
  M(nq(`${T65}What is the net profit of Gamma (₹ lakh)?`, net[2], `PBT = 600 − 150 = 450; tax 20% = 90; net = 360.`)),
  M(nq(`${T65}What is the net profit of Delta (₹ lakh)?`, net[3], `PBT = 150 − 50 = 100; tax 30% = 30; net = 70.`)),
  M(tq(`${T65}Which company has the highest net profit?`, hiNet, coO(hiNet), `Net profits are Alfa 224, Beta 157.5, Gamma 360 and Delta 70, so ${hiNet} is highest. Answer: ${hiNet}.`)),
  M(pcq(`${T65}What is the net profit margin of Alfa (net profit as a percentage of sales)?`, net[0] / sales[0] * 100, `224 ÷ 800 = 28%.`, 1)),
  M(pcq(`${T65}What is the net profit margin of Delta?`, net[3] / sales[3] * 100, `70 ÷ 500 = 14%.`, 1)),
  M(nq(`${T65}What is the total sales of the four companies (₹ lakh)?`, sum(sales), `800 + 600 + 1,000 + 500 = 2,900.`)),
  P(nq(`${T65}What is the total net profit of the four companies (₹ lakh)?`, sum(net), `224 + 157.5 + 360 + 70 = 811.5.`, 1)),
  P(pcq(`${T65}What is the combined net profit margin of the four companies (to one decimal)?`, sum(net) / sum(sales) * 100, `811.5 ÷ 2,900 = ${round(sum(net) / sum(sales) * 100, 1)}%.`, 1)),
  P(tq(`${T65}Which company has the highest net profit margin?`, 'Gamma', ['Alfa', 'Beta', 'Delta'], `Net margins: Alfa 28%, Beta 26.25%, Gamma 36%, Delta 14%. The highest is Gamma. Answer: Gamma.`)),
  P(rq(224, 70, `Net profits of Alfa and Delta are 224 and 70; the HCF is 14.`, `${T65}What is the ratio of the net profit of Alfa to that of Delta?`)),
  P(nq(`${T65}If Beta's tax rate were 20% instead of 25%, what would be its net profit (₹ lakh)?`, 210 * 0.8, `Net = PBT × 80% = 210 × 0.8 = 168.`)),
  P(pcq(`${T65}Total tax paid by all four companies is what percentage of their total PBT (to one decimal)?`, (sum(pbt) - sum(net)) / sum(pbt) * 100, `Total PBT = 320 + 210 + 450 + 100 = 1,080; total tax = 1,080 − 811.5 = 268.5; 268.5 ÷ 1,080 = ${round((sum(pbt) - sum(net)) / sum(pbt) * 100, 1)}%.`, 1))
];
build(ch65, q65);

// ================= Chapter 66: ratio and percentage DI =================
const classes = ['I', 'II', 'III', 'IV', 'V'];
const totalS = [300, 400, 350, 480, 500];
const rb = [3, 5, 4, 7, 1];  // boys part of the ratio boys : girls
const rg = [2, 3, 3, 5, 1];  // girls part
const boys = totalS.map((t, i) => t * rb[i] / (rb[i] + rg[i]));
const girlsC = totalS.map((t, i) => t - boys[i]);
const T66 = table('School data: total students in each class and the ratio of boys to girls', ['Class', 'Total students', 'Boys : Girls'], classes.map((c, i) => [c, totalS[i], rb[i] + ' : ' + rg[i]]));
const clsO = (c) => classes.filter((x) => x !== c).slice(0, 3);
const hiB = classes[boys.indexOf(Math.max(...boys))];
const ch66 = C({
  n: 66, id: 'y3-di-ratio-percentage-di', cat: 'di', title: 'Combined Ratio and Percentage DI',
  tag: 'Totals given with ratios: converting ratios to numbers and then to percentages, differences and combined ratios',
  url: 'https://www.indiabix.com/data-interpretation/',
  over: 'In many DI sets the data are given as totals and ratios rather than as direct numbers. The first step is to turn each ratio into actual values by splitting the total in the given ratio. After that you can compute percentages, differences and combined ratios. A particular trap is to add ratios directly (3 : 2 and 5 : 3 do not add to 8 : 5); you must convert to numbers first.',
  place: 'Ratio-based DI sets are common in company and bank tests.',
  real: 'Gender ratios, budget splits and market shares are often published as ratios.',
  obj: ['Split a total in a given ratio', 'Convert ratios to percentages', 'Combine ratios from different groups correctly', 'Compute differences and changes', 'Check results against totals'],
  pre: ['Ratio-Based DI', 'Percentage-Based DI', 'Ratio and Proportion'],
  refresh: 'In a ratio a : b with total T, the first part is T × a ÷ (a + b) and the second is T × b ÷ (a + b).',
  defs: ['Ratio: a comparison of two quantities by division.', 'Part: the share of the total for one term.', 'Combined ratio: ratio of totals, found from the actual numbers.', 'Percentage share: part ÷ total × 100.', 'Common mistake: adding terms of ratios directly.'],
  intu: 'A ratio only tells you proportions. The total tells you the size. Together they fix the numbers.',
  mental: 'For each row compute the first and second parts. Then build a table of actual numbers and work from it.',
  formulas: [['Split', 'Part = total × a/(a + b)', 'Ratio a : b.', 'Primary.', 'Class I boys: 300 × 3/5 = 180'], ['Percentage', 'Part ÷ total × 100', 'After split.', 'Share.', 'Boys in I = 60%'], ['Combined', 'Sum of parts ÷ sum of parts', 'Several rows.', 'Group ratio.', 'Boys : girls overall'], ['Difference', 'Larger − smaller part', 'One row.', 'Gap.', 'Boys − girls in IV'], ['Change', 'Change ÷ old × 100', 'Two values.', 'Percent.', 'Class III to IV']],
  narr: ['Class I has 300 students in the ratio 3 : 2, so boys = 300 × 3/5 = 180 and girls = 120. Class II: 400 in 5 : 3 gives boys 250 and girls 150. Class III: 350 in 4 : 3 gives boys 200 and girls 150. Class IV: 480 in 7 : 5 gives boys 280 and girls 200. Class V: 500 in 1 : 1 gives 250 each.', 'To avoid fractions, check divisibility before using a ratio on a total.', 'The combined ratio is found from the sums of the actual numbers, not from the given ratios.', 'Percentages come from the parts: boys in class I are 180 ÷ 300 = 60%.', 'Always verify that the parts add to the total.'],
  deep: [['Adding ratios', '3 : 2 and 5 : 3 combine into (3x + 5y) : (2x + 3y) depending on the totals; there is no fixed answer without numbers.'], ['Consistency of data', 'Check that every part is whole before relying on a ratio.']],
  vars: [['Split a total', 'Ratio parts.', 'Class I'], ['Combine rows', 'Sum then ratio.', 'Boys : girls overall'], ['Percent share', 'Part ÷ total.', 'Boys in I'], ['Largest part', 'Compare rows.', 'Most boys'], ['What-if', 'Add students.', '10 more girls']],
  ex: [
    { t: 'Split', q: 'Class I has 300 students in the ratio boys : girls = 3 : 2. How many boys are there?', g: ['300', '3 : 2'], c: 'Split the total.', s: [['Parts', '3 + 2 = 5.'], ['Boys', '300 × 3/5 = 180.']], a: '180', w: 'Girls are 120.', tr: 'Taking 3/2 of 300.' },
    { t: 'Percent share', q: 'In Class I there are 180 boys among 300 students. What percentage are boys?', g: ['180', '300'], c: 'Part ÷ total.', s: [['Divide', '180 ÷ 300 = 0.6.'], ['Percent', '60%.']], a: '60%', w: 'Boys are 3 of 5 parts.', tr: 'Dividing by girls.' },
    { t: 'Combined ratio', q: 'Class I has 180 boys and 120 girls; Class II has 250 boys and 150 girls. What is the ratio of boys to girls in the two classes together?', g: ['Two classes'], c: 'Add the numbers.', s: [['Boys', '180 + 250 = 430.'], ['Girls', '120 + 150 = 270; ratio 43 : 27.']], a: '43 : 27', w: 'Add numbers, not ratio terms.', tr: 'Adding 3 : 2 and 5 : 3 directly.' }
  ],
  short: { title: 'Numbers first', trad: 'Work with ratios throughout.', fast: 'Convert every ratio into numbers once, then use a plain table.', rules: ['Part = total × a/(a + b).', 'Never add ratios.', 'Check divisibility.', 'Verify the parts add up.'] },
  mist: [['Adding ratio terms across rows', 'Meaningless.', 'Add actual numbers.'], ['Using the ratio as a percentage', '3 : 2 is 60% : 40%.', 'Convert via the total.'], ['Using a non-whole result', 'Data error or misreading.', 'Recheck the ratio.']],
  tips: { sec: 90, elim: 'Parts cannot exceed the total.', adv: 'Add boys and girls columns to the table.', ins: 'Check the denominators before computing.' },
  rev: ['Split a total.', 'Percent from parts.', 'Combined ratio.', 'Compare rows.', 'Verify.'],
  qf: ['a/(a + b) × total'],
  take: ['Numbers first.', 'Never add ratios.', 'Verify totals.', 'Percent from parts.'],
  self: ['Can I split a total in a ratio?', 'Can I combine groups?', 'Can I convert to percentages?']
});
const clsHi = (arr) => classes[arr.indexOf(Math.max(...arr))];
const B = (c) => boys[classes.indexOf(c)], G = (c) => girlsC[classes.indexOf(c)];
const tb = sum(boys), tg = sum(girlsC);
const pctG = girlsC.map((g, i) => g / totalS[i] * 100);
const q66 = [
  E(nq(`${T66}How many boys are in Class I?`, B('I'), `300 × 3/5 = 180.`)),
  E(nq(`${T66}How many girls are in Class II?`, G('II'), `400 × 3/8 = 150.`)),
  E(nq(`${T66}How many girls are in Class III?`, G('III'), `350 × 3/7 = 150.`)),
  E(nq(`${T66}How many boys are in Class IV?`, B('IV'), `480 × 7/12 = 280.`)),
  E(nq(`${T66}How many boys are in Class V?`, B('V'), `500 × 1/2 = 250.`)),
  E(nq(`${T66}What is the total number of students in all five classes?`, sum(totalS), `300 + 400 + 350 + 480 + 500 = 2,030.`)),
  M(nq(`${T66}What is the total number of boys in the school?`, tb, `180 + 250 + 200 + 280 + 250 = 1,160.`)),
  M(nq(`${T66}What is the total number of girls in the school?`, tg, `120 + 150 + 150 + 200 + 250 = 870.`)),
  M(rq(tb, tg, `Boys = 1,160 and girls = 870; the HCF is 290.`, `${T66}What is the ratio of boys to girls in the whole school?`)),
  M(pcq(`${T66}What percentage of Class III students are girls (to one decimal place)?`, pctG[2], `Girls in III = 150 out of 350: 150 ÷ 350 = ${round(pctG[2], 1)}%.`, 1)),
  M(tq(`${T66}Which class has the largest number of boys?`, clsHi(boys), clsO(clsHi(boys)), `Boys per class: I 180, II 250, III 200, IV 280, V 250. The largest is Class ${clsHi(boys)}. Answer: ${clsHi(boys)}.`)),
  M(nq(`${T66}By how many does the number of boys exceed the number of girls in Class IV?`, B('IV') - G('IV'), `280 − 200 = 80.`)),
  M(rq(G('II'), G('IV'), `Girls in II = 150 and in IV = 200; the HCF is 50.`, `${T66}What is the ratio of girls in Class II to girls in Class IV?`)),
  M(pcq(`${T66}What percentage of all students in the school are boys (to one decimal place)?`, tb / sum(totalS) * 100, `1,160 out of 2,030: 1,160 ÷ 2,030 = ${round(tb / sum(totalS) * 100, 1)}%.`, 1)),
  P(pcq(`${T66}By what percentage is the number of boys in Class IV more than the number of boys in Class I (to one decimal place)?`, (B('IV') - B('I')) / B('I') * 100, `(280 − 180) ÷ 180 = ${round((280 - 180) / 180 * 100, 1)}%.`, 1)),
  P(tq(`${T66}In which class is the percentage of girls the highest?`, clsHi(pctG), clsO(clsHi(pctG)), `Percentage of girls: I 40%, II 37.5%, III 42.9%, IV 41.7%, V 50%. The highest is Class ${clsHi(pctG)}. Answer: ${clsHi(pctG)}.`)),
  P(rq(180, 140, `If 20 girls join Class I there are 180 boys and 140 girls; the HCF is 20.`, `${T66}If 20 more girls join Class I, what is the new ratio of boys to girls in Class I?`)),
  P(nq(`${T66}What is the average number of boys per class?`, tb / 5, `Total boys 1,160 ÷ 5 = 232.`)),
  P(rq(B('I') + B('II'), G('III') + G('IV'), `Boys in I and II = 180 + 250 = 430; girls in III and IV = 150 + 200 = 350; the HCF is 10.`, `${T66}What is the ratio of the total boys in Classes I and II to the total girls in Classes III and IV?`)),
  P(pcq(`${T66}The number of students in Class V is what percentage more than in Class I (to one decimal place)?`, (500 - 300) / 300 * 100, `(500 − 300) ÷ 300 = ${round(200 / 300 * 100, 1)}%.`, 1))
];
build(ch66, q66);
