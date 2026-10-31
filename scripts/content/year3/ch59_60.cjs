const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { round, sum, ratio, pct, table, near, gcd } = require('../diLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e, x.s);
const M = (x) => medium(x.q, x.c, x.w, x.e, x.s);
const P = (x) => placement(x.q, x.c, x.w, x.e, x.s);
// numeric and text question builders (answers always computed)
const nq = (text, val, expl, d = 0) => ({ q: text, c: val, w: near(val, d), e: `${expl} The answer is ${val}.` });
const tq = (text, c, w, expl) => ({ q: text, c, w, e: `${expl}` });
const rq = (a, b, expl, text) => { const r = ratio(a, b); return { q: text, c: r, w: [ratio(b, a), ratio(a + 1, b), ratio(a, b + 2)].filter((x, i, arr) => x !== r && arr.indexOf(x) === i).concat(['1 : 1', '2 : 3', '3 : 5']).filter((x) => x !== r).slice(0, 3), e: `${expl} The ratio is ${r}.` }; };
const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

// ============ Chapter 59: caselet DI ============
const cas1 = 'A college has 800 students in four streams. Arts has 25% of the students, Science 35%, Commerce 30% and Law the rest. The percentages of girls in Arts, Science, Commerce and Law are 60%, 40%, 50% and 30% respectively.';
const sh = [0.25, 0.35, 0.30, 0.10], gp = [0.60, 0.40, 0.50, 0.30];
const cnt = sh.map((s) => Math.round(800 * s)); // [200, 280, 240, 80]
const girls = cnt.map((c, i) => Math.round(c * gp[i])); // [120, 112, 120, 24]
const girlsT = sum(girls), boysT = 800 - girlsT;
const cas2 = 'A shop sells three items P, Q and R in a month. It sells 120 units of P at ₹50 each with a profit of 25% on cost, 80 units of Q at ₹120 each with a profit of 20% on cost, and 150 units of R at ₹44 each with a profit of 10% on cost.';
const units = [120, 80, 150], spr = [50, 120, 44], pp = [25, 20, 10];
const cost = spr.map((s, i) => round(s / (1 + pp[i] / 100), 2)); // 40,100,40
const rev = units.map((u, i) => u * spr[i]); // 6000, 9600, 6600
const prof = units.map((u, i) => round(u * (spr[i] - cost[i]), 2)); // 1200,1600,600
const revT = sum(rev), profT = sum(prof), costT = revT - profT;
const cas3 = 'In a survey of 600 people, 45% travel to work by bus and 25% by metro. The rest either use their own vehicle or walk, in the ratio 3 : 2.';
const bus = 270, metro = 150, restN = 180, own = 108, walk = 72;

const ch59 = C({
  n: 59, id: 'y3-di-caselet-di', cat: 'di', title: 'Caselet Data Interpretation',
  tag: 'Data hidden in a paragraph: building the table yourself and then answering from it',
  over: 'A caselet gives data in sentences instead of a table or chart. The first job is to convert the paragraph into a small table of numbers, filling in everything that can be calculated directly (percentages of a total, remaining parts, ratios). After that, every question is arithmetic on the table. The common errors are applying a percentage to the wrong base and missing a part of the total.',
  place: 'Caselets are used in DI sections of company and bank tests because they test careful reading as well as calculation.',
  real: 'Summarising a business situation described in a report or email into numbers is the same skill.',
  obj: ['Extract numbers and relationships from a paragraph', 'Build a table before answering', 'Apply percentages to the correct base', 'Handle "remaining" and ratio statements', 'Check that parts add up to the total'],
  pre: ['Percentage-Based DI', 'Ratio-Based DI'],
  refresh: 'Part = percentage × base ÷ 100. Remaining = total − known parts. A ratio a : b splits a total into a/(a + b) and b/(a + b).',
  defs: ['Caselet: a paragraph that contains data.', 'Base: the quantity a percentage is taken of.', 'Remaining part: total minus the parts already given.', 'Derived value: a number you calculate from the given data.', 'Consistency check: the parts must add up to the total.'],
  intu: 'A caselet is a table in disguise. Draw the table, fill every cell you can, and the questions become lookups.',
  mental: 'Underline every number and what it refers to. Write a table with one row per category. Fill totals first, then derived columns, then answer.',
  formulas: [['Percentage of base', 'Part = % × base ÷ 100', 'Base is the total or a subgroup.', 'Streams, shares.', '35% of 800 = 280'], ['Remaining', 'Rest = total − sum of parts', 'After subtracting.', 'Rest categories.', '100 − 25 − 35 − 30 = 10%'], ['Ratio split', 'Part = total × a/(a + b)', 'Two-way split.', 'Own vehicle : walk.', '180 × 3/5 = 108'], ['Profit', 'Profit per unit = SP − cost; cost = SP ÷ (1 + p%)', 'Profit on cost.', 'Shops.', '50 ÷ 1.25 = 40'], ['Consistency', 'Parts add to the total', 'Check.', 'Catch errors.', '200 + 280 + 240 + 80 = 800']],
  narr: [cas1 + ' The Law share is 100 − 25 − 35 − 30 = 10%, so the streams have 200, 280, 240 and 80 students. Girls are 60% of 200 = 120, 40% of 280 = 112, 50% of 240 = 120 and 30% of 80 = 24. Total girls = 376 and boys = 800 − 376 = 424.', 'A percentage must be applied to the right base. The percentage of girls in Science applies to the Science students (280), not to the whole college.', cas2 + ' The cost per unit is ₹40 for P (50 ÷ 1.25), ₹100 for Q (120 ÷ 1.2) and ₹40 for R (44 ÷ 1.1). Profits per unit are ₹10, ₹20 and ₹4, so the total profit is 1200 + 1600 + 600 = ₹3,400.', cas3 + ' Bus = 270, metro = 150, remaining 180. Split 3 : 2 gives own vehicle 108 and walking 72.', 'Always verify: 270 + 150 + 108 + 72 = 600.'],
  deep: [['Percentage of a percentage', '"40% of the 35% in Science" is 0.40 × 0.35 = 14% of the college, not 75%.'], ['Profit on cost versus on selling price', 'Profit on cost uses cost as the base: SP = cost × (1 + p%).']],
  vars: [['Population split', 'Shares and subgroups.', 'College streams'], ['Business case', 'Revenue and profit.', 'Shop items'], ['Survey', 'Percent and ratio split.', 'Travel modes'], ['Ratio rests', 'Split the remainder.', '3 : 2'], ['Consistency', 'Add to total.', '600']],
  ex: [
    { t: 'Percentage of base', q: 'Of 800 students, 35% are in Science and 40% of them are girls. How many girls are in Science?', g: ['800', '35%', '40%'], c: 'Apply the percentage to the right base.', s: [['Science students', '35% of 800 = 280.'], ['Girls', '40% of 280 = 112.']], a: '112', w: 'The base for 40% is the Science group.', tr: 'Taking 40% of 800.' },
    { t: 'Ratio split', q: 'Out of 600 people, 45% travel by bus and 25% by metro. The rest use own vehicle or walk in the ratio 3 : 2. How many walk?', g: ['600 people'], c: 'Find the remainder, then split.', s: [['Remainder', '100 − 45 − 25 = 30%, which is 180 people.'], ['Walk', '180 × 2/5 = 72.']], a: '72', w: '108 use their own vehicle.', tr: 'Taking 2/5 of 600.' },
    { t: 'Profit', q: 'A shop sells 120 units of P at ₹50 with a profit of 25% on cost. What is its total profit on P?', g: ['SP 50', '25% on cost'], c: 'Find the cost first.', s: [['Cost', '50 ÷ 1.25 = ₹40.'], ['Profit per unit', '50 − 40 = ₹10; total = 120 × 10 = ₹1,200.']], a: '₹1,200', w: 'Profit on cost uses cost as the base.', tr: 'Taking 25% of 50.' }
  ],
  short: { title: 'Table first', trad: 'Compute from the paragraph each time.', fast: 'Convert the paragraph into a small table, fill the totals and derived columns once, then answer by lookups.', rules: ['Table before arithmetic.', 'Check the base.', 'Add to the total.', 'Rest = total − parts.'] },
  mist: [['Wrong base for a percentage', 'Applying 40% to everyone.', 'Use the subgroup.'], ['Missing the "rest"', 'Losing a category.', 'Compute rest = total − parts.'], ['Profit on cost vs on SP', 'Wrong cost.', 'Divide by (1 + p%).']],
  tips: { sec: 120, elim: 'A part cannot exceed its total.', adv: 'Write the table with total row and column.', ins: 'One caselet carries six or seven questions, so build the table once.' },
  rev: ['Build the table.', 'Right base.', 'Rest and ratio.', 'Profit on cost.', 'Check totals.'],
  qf: ['Part = % × base ÷ 100'],
  take: ['Table first.', 'Correct base.', 'Check totals.', 'Compute rest.'],
  self: ['Can I turn a caselet into a table?', 'Can I choose the right base?', 'Can I split a remainder in a ratio?']
});
const q59 = [
  E(nq(`${cas1}\n\nHow many students are in the Science stream?`, cnt[1], `35% of 800 = 280.`)),
  E(nq(`${cas1}\n\nHow many girls are in the Arts stream?`, girls[0], `Arts has 25% of 800 = 200 students, and 60% of 200 = 120.`)),
  E(nq(`${cas1}\n\nHow many students are in the Law stream?`, cnt[3], `Law has 100 − 25 − 35 − 30 = 10% of the students: 10% of 800 = 80.`)),
  E(nq(`${cas1}\n\nWhat is the total number of girls in the college?`, girlsT, `Girls: 120 + 112 + 120 + 24 = 376.`)),
  E(nq(`${cas1}\n\nWhat is the total number of boys in the college?`, boysT, `Boys = 800 − 376 = 424.`)),
  E(tq(`${cas1}\n\nWhat percentage of Commerce students are boys?`, '50%', ['40%', '60%', '30%'], `Girls in Commerce are 50%, so boys are 100 − 50 = 50%. Answer: 50%.`)),
  M(rq(girls[1], girls[3], `Girls in Science = 112 and in Law = 24; 112 : 24 simplifies by 8.`, `${cas1}\n\nWhat is the ratio of girls in Science to girls in Law?`)),
  M(tq(`${cas1}\n\nGirls are what percentage of all students?`, pct(girlsT / 8, 1), ['42%', '52%', '50%'].map((x, i) => x), `Girls = 376 out of 800: 376 ÷ 800 × 100 = 47%.`)),
  M(nq(`${cas2}\n\nWhat is the total revenue from the sale of Q?`, rev[1], `80 × ₹120 = ₹9,600.`)),
  M(nq(`${cas2}\n\nWhat is the total revenue from all three items (in ₹)?`, revT, `6,000 + 9,600 + 6,600 = ₹22,200.`)),
  M(nq(`${cas2}\n\nWhat is the cost price of one unit of Q (in ₹)?`, cost[1], `Cost = 120 ÷ 1.20 = ₹100.`)),
  M(nq(`${cas2}\n\nWhat is the total profit from the three items (in ₹)?`, profT, `Profits: P 120 × 10 = 1,200; Q 80 × 20 = 1,600; R 150 × 4 = 600. Total ₹3,400.`)),
  M(rq(rev[0], rev[1], `Revenue from P = 6,000 and from Q = 9,600; the HCF is 1,200.`, `${cas2}\n\nWhat is the ratio of revenue from P to revenue from Q?`)),
  M(tq(`${cas2}\n\nWhich item gives the highest total profit?`, 'Q', ['P', 'R', 'P and R equally'], `Total profits are P ₹1,200, Q ₹1,600 and R ₹600, so Q gives the highest profit. Answer: Q.`)),
  P(nq(`${cas3}\n\nHow many people travel by metro?`, metro, `25% of 600 = 150.`)),
  P(nq(`${cas3}\n\nHow many people use their own vehicle?`, own, `The rest is 30% of 600 = 180; 3/5 of 180 = 108.`)),
  P(nq(`${cas3}\n\nHow many people walk to work?`, walk, `The rest is 180; 2/5 of 180 = 72.`)),
  P(rq(bus, walk, `Bus users = 270 and walkers = 72; the HCF is 18.`, `${cas3}\n\nWhat is the ratio of bus users to walkers?`)),
  P(nq(`${cas3}\n\nHow many more people travel by metro than walk?`, metro - walk, `150 − 72 = 78.`)),
  P(tq(`${cas3}\n\nWhat percentage of the people use their own vehicle?`, '18%', ['15%', '20%', '12%'], `108 out of 600 = 18%. Answer: 18%.`))
];
build(ch59, q59);

// ============ Chapter 60: multi-table DI ============
const sch = ['S1', 'S2', 'S3', 'S4', 'S5'];
const stu = [200, 250, 300, 150, 400];
const pass = [80, 72, 60, 76, 55];
const fee = [1200, 1500, 1000, 1800, 900];
const pn = stu.map((s, i) => Math.round(s * pass[i] / 100)); // 160,180,180,114,220
const fl = stu.map((s, i) => s - pn[i]);
const frev = stu.map((s, i) => s * fee[i]);
const T1 = table('Table 1: Number of students who appeared in the annual examination', ['School', ...sch], [['Students', ...stu]]);
const T2 = table('Table 2: Pass percentage', ['School', ...sch], [['Pass %', ...pass.map((p) => p + '%')]]);
const T3 = table('Table 3: Annual fee per student (₹)', ['School', ...sch], [['Fee (₹)', ...fee]]);
const TT = T1 + T2 + T3;
const ch60 = C({
  n: 60, id: 'y3-di-multi-table-di', cat: 'di', title: 'Multi-Table DI Sets',
  tag: 'Two or three linked tables: combining rows and columns across tables to answer questions',
  over: 'A multi-table set gives two or three tables that describe the same entities (schools, branches, products) from different angles. Each question usually needs a number from one table and a number from another, combined by multiplication, division or addition. The main task is to identify which tables and which cells a question needs and to combine them with the correct operation.',
  place: 'Multi-table sets are a staple of DI sections in company tests.',
  real: 'Combining a staffing table with a salary table, or enrolment with pass rates, is routine in reports.',
  obj: ['Match entities across tables', 'Combine counts and percentages to get new counts', 'Compute totals, averages and ratios from derived values', 'Compare derived quantities across entities', 'Avoid mixing units between tables'],
  pre: ['Table-Based DI', 'Percentage-Based DI'],
  refresh: 'Count = percentage × base ÷ 100; revenue = number × rate. Always check the unit of each table.',
  defs: ['Linked tables: tables that share rows or columns.', 'Derived value: number computed from cells in different tables.', 'Aggregate: a total or average over entities.', 'Unit: what a number measures (students, ₹, %).', 'Base: the quantity a percentage refers to.'],
  intu: 'The tables are columns of a single big table split for printing. Rebuild the big table mentally by matching on the common row labels.',
  mental: 'For each question, say which quantities are needed (for example students and pass %), find them in the tables, and combine them with the right operation.',
  formulas: [['Count from %', 'Passed = students × pass % ÷ 100', 'Tables 1 and 2.', 'Derived count.', 'S3: 300 × 60% = 180'], ['Failed', 'Failed = students − passed', 'After passed.', 'Complement.', 'S2: 250 − 180 = 70'], ['Revenue', 'Students × fee', 'Tables 1 and 3.', 'Money.', 'S1: 200 × 1,200'], ['Overall rate', 'Total passed ÷ total students × 100', 'Aggregate.', 'Weighted.', '793 ÷ 1,300'], ['Average of rates', 'Not the plain average of percentages', 'Different bases.', 'Trap.', 'Weighted average needed']],
  narr: ['Table 1 gives students (200, 250, 300, 150, 400), Table 2 gives pass percentages (80, 72, 60, 76, 55) and Table 3 gives the annual fee (₹1,200, ₹1,500, ₹1,000, ₹1,800, ₹900). The number who passed in S3 is 300 × 60% = 180; in S4 it is 150 × 76% = 114.', 'To find the overall pass percentage, add the passes (160 + 180 + 180 + 114 + 220 = 854) and divide by the total number of students (1,300): about 65.7%. The plain average of the five percentages (68.6%) is wrong because the schools have different sizes.', 'Fee revenue for a school is students × fee: S2 gives 250 × 1,500 = ₹3,75,000. The total over all schools is the sum of these products.', 'Comparisons across schools need derived values. The school with the highest number of failures is found by computing students − passed for each.', 'Always check that a quantity from one table is paired with the right school in another.'],
  deep: [['Weighted vs simple average', 'The overall pass percentage weights each school\'s percentage by its number of students.'], ['Units', 'Never add a count and a percentage; convert first.']],
  vars: [['Count from percent', 'Two tables.', 'Passed students'], ['Money', 'Count × rate.', 'Fee revenue'], ['Aggregate', 'Total and overall %.', 'Overall pass %'], ['Rankings', 'Highest or lowest.', 'Most failures'], ['Ratios', 'Between schools.', 'S1 passes : S5 passes']],
  ex: [
    { t: 'Combining two tables', q: 'Table 1: S3 has 300 students. Table 2: S3 pass percentage is 60%. How many students of S3 passed?', g: ['300', '60%'], c: 'Percent of base.', s: [['Base', 'S3 appeared: 300.'], ['Passed', '60% of 300 = 180.']], a: '180', w: 'Failed = 120.', tr: 'Adding 300 and 60.' },
    { t: 'Revenue', q: 'S2 has 250 students and charges ₹1,500 a year per student. What is the annual fee revenue?', g: ['250', '₹1,500'], c: 'Count × rate.', s: [['Pick the cells', 'Students 250 from Table 1 and fee ₹1,500 from Table 3.'], ['Multiply', '250 × 1,500 = ₹3,75,000.']], a: '₹3,75,000', w: 'Both tables are needed.', tr: 'Adding the numbers.' },
    { t: 'Overall rate', q: 'Five schools together had 854 passes among 1,300 students. What is the overall pass percentage?', g: ['854', '1,300'], c: 'Weighted rate.', s: [['Divide', '854 ÷ 1,300 = 0.657.'], ['Percent', 'About 65.7%.']], a: '65.7%', w: 'Do not average the five percentages.', tr: 'Averaging the percentages.' }
  ],
  short: { title: 'Rebuild the big table', trad: 'Hunt for numbers on each question.', fast: 'Add derived columns (passed, failed, revenue) once, then answer every question from that extended table.', rules: ['Count = % × base.', 'Overall rate is weighted.', 'Match rows.', 'Check units.'] },
  mist: [['Averaging percentages directly', 'Different bases.', 'Use totals.'], ['Mismatched rows', 'Wrong school.', 'Match labels.'], ['Mixing units', 'Counts and percentages.', 'Convert first.']],
  tips: { sec: 100, elim: 'A derived count cannot exceed its base.', adv: 'Add derived columns before reading questions.', ins: 'Derived values serve many questions in the set.' },
  rev: ['Match rows.', 'Percent of base.', 'Weighted overall.', 'Revenue.', 'Units.'],
  qf: ['Overall % = total part ÷ total base'],
  take: ['Derived columns.', 'Weighted rates.', 'Match labels.', 'Units.'],
  self: ['Can I combine two tables?', 'Can I compute an overall rate?', 'Can I rank derived values?']
});
const qs60 = [];
const A = (x) => x;
const hi = (arr) => sch[arr.indexOf(Math.max(...arr))];
const lo = (arr) => sch[arr.indexOf(Math.min(...arr))];
qs60.push(E(nq(`${TT}How many students passed in S1?`, pn[0], `S1 passed 80% of 200 = 160.`)));
qs60.push(E(nq(`${TT}How many students passed in S3?`, pn[2], `S3 passed 60% of 300 = 180.`)));
qs60.push(E(nq(`${TT}How many students failed in S2?`, fl[1], `S2 passed 72% of 250 = 180, so 250 − 180 = 70 failed.`)));
qs60.push(E(nq(`${TT}How many students passed in S4?`, pn[3], `S4 passed 76% of 150 = 114.`)));
qs60.push(E(nq(`${TT}What is the total number of students who appeared in all five schools?`, sum(stu), `200 + 250 + 300 + 150 + 400 = 1,300.`)));
qs60.push(E(nq(`${TT}What is the annual fee revenue of S2 (in ₹)?`, frev[1], `250 × 1,500 = ₹3,75,000.`)));
qs60.push(M(nq(`${TT}What is the total number of students who passed in all five schools?`, sum(pn), `160 + 180 + 180 + 114 + 220 = 854.`)));
qs60.push(M(tq(`${TT}What is the overall pass percentage of all five schools together (to one decimal place)?`, pct(sum(pn) / sum(stu) * 100, 1), ['68.6%', '64.2%', '66.8%'], `Total passes 854 out of 1,300: 854 ÷ 1,300 × 100 = ${round(sum(pn) / sum(stu) * 100, 1)}%.`)));
qs60.push(M(tq(`${TT}Which school has the highest number of students who failed?`, hi(fl), sch.filter((s) => s !== hi(fl)).slice(0, 3), `Failures are ${fl.map((f, i) => sch[i] + ' ' + f).join(', ')}; the highest is ${hi(fl)} with ${Math.max(...fl)}.`)));
qs60.push(M(nq(`${TT}What is the annual fee revenue of S5 (in ₹)?`, frev[4], `400 × 900 = ₹3,60,000.`)));
qs60.push(M(nq(`${TT}What is the total annual fee revenue of S1 and S4 together (in ₹)?`, frev[0] + frev[3], `S1: 200 × 1,200 = 2,40,000; S4: 150 × 1,800 = 2,70,000; total ₹5,10,000.`)));
qs60.push(M(rq(pn[0], pn[4], `S1 passed 160 and S5 passed 220; the HCF is 20.`, `${TT}What is the ratio of passed students in S1 to passed students in S5?`)));
qs60.push(M(tq(`${TT}Which school has the lowest number of students who passed?`, lo(pn), sch.filter((s) => s !== lo(pn)).slice(0, 3), `Passed students are ${pn.map((f, i) => sch[i] + ' ' + f).join(', ')}; the lowest is ${lo(pn)} with ${Math.min(...pn)}.`)));
qs60.push(M(nq(`${TT}By how many students does the number of passes in S5 exceed that in S2?`, pn[4] - pn[1], `S5 passed 220 and S2 passed 180; 220 − 180 = 40.`)));
qs60.push(P(nq(`${TT}What is the total annual fee revenue of all five schools (in ₹)?`, sum(frev), `2,40,000 + 3,75,000 + 3,00,000 + 2,70,000 + 3,60,000 = ₹15,45,000.`)));
qs60.push(P(tq(`${TT}Which school has the highest annual fee revenue?`, hi(frev), sch.filter((s) => s !== hi(frev)).slice(0, 3), `Revenues are ${frev.map((f, i) => sch[i] + ' ₹' + f.toLocaleString('en-IN')).join(', ')}; the highest is ${hi(frev)}.`)));
qs60.push(P(tq(`${TT}What is the average fee revenue per student across all five schools (to the nearest rupee)?`, inr(Math.round(sum(frev) / sum(stu))), [inr(1000), inr(1300), inr(1400)].filter((x) => x !== inr(Math.round(sum(frev) / sum(stu)))).slice(0, 3), `Total revenue ₹15,45,000 ÷ 1,300 students = ₹${Math.round(sum(frev) / sum(stu))}.`)));
qs60.push(P(tq(`${TT}The plain average of the five pass percentages is 68.6%. Why is it different from the overall pass percentage?`, 'Because the schools have different numbers of students', ['Because the pass percentages are rounded', 'Because the tables are in different units', 'Because the plain average is always higher'], `The overall rate weights each school by its size (854 ÷ 1,300), so it differs from the plain average of percentages.`)));
qs60.push(P(nq(`${TT}If 20 more students had passed in S3, what would its pass percentage be (nearest whole number)?`, Math.round((pn[2] + 20) / stu[2] * 100), `Passed would be 200 out of 300: 200 ÷ 300 × 100 ≈ 67.`)));
qs60.push(P(tq(`${TT}Among the schools whose pass percentage is above 70%, which has the lowest annual fee per student?`, 'S1', ['S2', 'S4', 'S5'], `Schools above 70% are S1 (80%, fee ₹1,200), S2 (72%, fee ₹1,500) and S4 (76%, fee ₹1,800). The lowest fee among them is ₹1,200, which is S1. Answer: S1.`)));
build(ch60, qs60);
