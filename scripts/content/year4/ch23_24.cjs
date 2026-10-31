const { build, easy, medium, placement } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { nq, pcq, tq, rq, round, sum, pct } = require('./diq.cjs');
const base = { year: 4, cat: 'di', category: 'Data Interpretation' };
const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;

// ================= Chapter 23: caselet business analytics =================
const CA = 'A subscription app has 80,000 registered users. 5% of them are paying subscribers, each paying ₹300 per month. Fixed monthly costs (servers and support) are ₹4,00,000. Each month 8% of the existing subscribers cancel and marketing adds 400 new subscribers.';
const subs0 = 80000 * 0.05, rev0 = subs0 * 300, prof0 = rev0 - 400000;
const subs1 = subs0 * 0.92 + 400, rev1 = subs1 * 300;
const subs2 = subs1 * 0.92 + 400;
const CB = 'A delivery firm handles 1,200 orders a day. The firm earns an average of ₹40 per delivery and its cost is ₹30 per delivery. It employs 60 riders and each rider handles the same number of orders. The firm operates 30 days a month and has fixed monthly overheads of ₹1,50,000.';
const profDay = 1200 * (40 - 30), profMonth = profDay * 30 - 150000;
const ch23 = C({ ...base, n: 23, id: 'y4-ada-caselet-business-analytics', title: 'Caselet Business Analytics DI',
  tag: 'Business situations written as paragraphs: subscribers, churn, revenue, costs and break-even from the text alone',
  over: 'A business-analytics caselet describes a company in a paragraph and asks about revenue, profit, retention and break-even. The first step is to extract every number and what it refers to (users, a percentage of users, a price, a fixed cost, a churn rate). Then build a small model: subscribers × price = revenue; revenue − costs = profit; subscribers × (1 − churn) + additions = next month. Care with bases is essential, since each percentage refers to a particular group.',
  place: 'Analytics caselets are common in management-oriented and IT-services aptitude tests.',
  real: 'Product and finance teams build exactly such small models.',
  obj: ['Extract numbers and their bases from a paragraph', 'Build a one-month model', 'Project a second month with churn and additions', 'Compute profit, margin and break-even', 'Avoid mixing registered users with subscribers'],
  pre: ['Caselet Data Interpretation', 'Integrated DI Sets (3+ Charts)'],
  refresh: 'Revenue = subscribers × price. Next month = this month × (1 − churn) + additions. Break-even = fixed cost ÷ contribution per unit.',
  defs: ['Churn: share of customers lost in a period.', 'Contribution: price minus variable cost per unit.', 'Break-even: volume at which profit is zero.', 'Fixed cost: cost that does not change with volume.', 'Base: the group a percentage refers to.'],
  intu: 'A caselet is a tiny business. Write its equations and the questions answer themselves.',
  mental: 'List givens with their bases; compute subscribers, revenue, profit; then project the next month.',
  formulas: [['Subscribers', 'Registered × %', 'First step.', 'Base.', '80,000 × 5% = 4,000'], ['Revenue', 'Subscribers × price', 'Second step.', 'Income.', '4,000 × 300 = 12,00,000'], ['Profit', 'Revenue − fixed cost', 'Third step.', 'Result.', '12,00,000 − 4,00,000'], ['Next month', 'S × (1 − churn) + new', 'Projection.', 'Model.', '4,000 × 0.92 + 400'], ['Break-even', 'Fixed ÷ contribution', 'Per unit.', 'Volume.', '4,00,000 ÷ 300']],
  narr: [CA + ' Subscribers = 4,000; revenue ₹12,00,000; profit ₹8,00,000.', 'After one month: 4,000 × 0.92 + 400 = 4,080 subscribers, revenue ₹12,24,000.', 'After two months: 4,080 × 0.92 + 400 = 4,153.6 subscribers (about 4,154).', 'Break-even subscribers = 4,00,000 ÷ 300 ≈ 1,333.', 'For the delivery firm: profit per delivery ₹10, daily ₹12,000, monthly ₹3,60,000 − ₹1,50,000 = ₹2,10,000; each rider handles 1,200 ÷ 60 = 20 orders a day.'],
  deep: [['Steady state', 'Subscribers stop changing when additions equal churn: S = 400 ÷ 0.08 = 5,000.'], ['Percent of which base', 'Churn applies to subscribers, not registered users.']],
  vars: [['Subscribers', 'Percent of base.', '5% of 80,000'], ['Revenue and profit', 'Price and fixed cost.', 'Monthly'], ['Projection', 'Churn plus adds.', 'Next month'], ['Break-even', 'Fixed over contribution.', '1,333 subs'], ['Per-unit economics', 'Margin per delivery.', '₹10']],
  ex: [
    { t: 'Subscribers and revenue', q: '80,000 registered users, 5% paying ₹300 a month. Monthly revenue?', g: ['80,000', '5%', '₹300'], c: 'Base then rate.', s: [['Subscribers', '80,000 × 5% = 4,000.'], ['Revenue', '4,000 × 300 = ₹12,00,000.']], a: '₹12,00,000', w: 'Only subscribers pay.', tr: 'Using all 80,000.' },
    { t: 'Projection', q: '4,000 subscribers, 8% cancel and 400 join. Next month?', g: ['4,000', '8%', '400'], c: 'Churn then add.', s: [['Retained', '4,000 × 0.92 = 3,680.'], ['Add', '3,680 + 400 = 4,080.']], a: '4,080', w: 'Churn is on subscribers.', tr: 'Subtracting 8% of 80,000.' },
    { t: 'Break-even', q: 'Fixed cost ₹4,00,000, price ₹300 per subscriber. Break-even subscribers?', g: ['4,00,000', '300'], c: 'Fixed over unit contribution.', s: [['Divide', '4,00,000 ÷ 300 = 1,333.3.'], ['Round up', '1,334 subscribers.']], a: '1,334 subscribers', w: 'Round up for a profit.', tr: 'Rounding down.' }
  ],
  short: { title: 'Model the business', trad: 'Compute per question.', fast: 'Write subscribers, revenue and profit once; project with churn and additions; use break-even for thresholds.', rules: ['Right base.', 'Churn then add.', 'Fixed ÷ contribution.', 'Round up for break-even.'] },
  mist: [['Using registered users as subscribers', 'Wrong base.', 'Apply the 5% first.'], ['Churn on the wrong group', 'Wrong number.', 'Churn is on subscribers.'], ['Forgetting fixed costs', 'Profit too high.', 'Subtract fixed costs.']],
  tips: { sec: 120, elim: 'Profit cannot exceed revenue.', adv: 'List givens with bases.', ins: 'Every caselet has a base trap.' },
  rev: ['Extract.', 'Revenue.', 'Profit.', 'Projection.', 'Break-even.'],
  qf: ['Next = S(1 − churn) + new'],
  take: ['Bases.', 'Model.', 'Project.', 'Break-even.'],
  self: ['Can I extract bases?', 'Can I project a month?', 'Can I find break-even?']
});
const q23 = [
  easy(`${CA}\n\nHow many subscribers does the app have initially?`, subs0, [80000, 400, 3200], '5% of 80,000 = 4,000.'),
  nq('e', `${CA}\n\nWhat is the initial monthly revenue (₹)?`, rev0, '4,000 × 300 = 12,00,000.'),
  nq('e', `${CA}\n\nWhat is the initial monthly profit (₹)?`, prof0, '12,00,000 − 4,00,000 = 8,00,000.'),
  nq('e', `${CA}\n\nHow many subscribers cancel in the first month (before additions)?`, subs0 * 0.08, '8% of 4,000 = 320.'),
  nq('e', `${CA}\n\nHow many subscribers are there after one month?`, subs1, '4,000 × 0.92 + 400 = 4,080.'),
  nq('e', `${CB}\n\nHow many orders does each rider handle per day?`, 1200 / 60, '1,200 ÷ 60 = 20.'),
  nq('m', `${CA}\n\nWhat is the revenue after one month (₹)?`, rev1, '4,080 × 300 = 12,24,000.'),
  nq('m', `${CA}\n\nHow many subscribers are there after two months (to the nearest whole number)?`, Math.round(subs2), '4,080 × 0.92 + 400 = 4,153.6, about 4,154.'),
  nq('m', `${CA}\n\nThe break-even number of subscribers (nearest whole number, rounded up) is`, Math.ceil(400000 / 300), '4,00,000 ÷ 300 = 1,333.3, so 1,334.'),
  pcq('m', `${CA}\n\nThe profit margin in the first month (profit as a percentage of revenue, to one decimal) is`, prof0 / rev0 * 100, '8,00,000 ÷ 12,00,000 = 66.7%.', 1),
  nq('m', `${CB}\n\nWhat is the daily profit before overheads (₹)?`, profDay, '1,200 × (40 − 30) = 12,000.'),
  nq('m', `${CB}\n\nWhat is the monthly profit after overheads (₹)?`, profMonth, '12,000 × 30 − 1,50,000 = 2,10,000.'),
  nq('m', `${CB}\n\nWhat is the monthly revenue (₹)?`, 1200 * 40 * 30, '1,200 × 40 × 30 = 14,40,000.'),
  nq('m', `${CB}\n\nHow many orders per month does the break-even point require (₹10 profit per order, overhead ₹1,50,000)?`, 150000 / 10, '1,50,000 ÷ 10 = 15,000 orders.'),
  nq('p', `${CA}\n\nThe steady-state number of subscribers (where additions equal cancellations) is`, 400 / 0.08, 'Steady state: 8% of S = 400, so S = 5,000.'),
  nq('p', `${CA}\n\nIf marketing added 600 instead of 400 subscribers a month, the subscribers after one month would be`, subs0 * 0.92 + 600, '4,000 × 0.92 + 600 = 4,280.'),
  nq('p', `${CA}\n\nIf the price rose to ₹330 with the same 4,000 subscribers, the monthly profit would be (₹)`, 4000 * 330 - 400000, '4,000 × 330 = 13,20,000; minus 4,00,000 = 9,20,000.'),
  nq('p', `${CB}\n\nIf the per-delivery cost rose to ₹34, the monthly profit after overheads would be (₹)`, 1200 * 6 * 30 - 150000, '1,200 × 6 × 30 = 2,16,000; minus 1,50,000 = 66,000.'),
  pcq('p', `${CB}\n\nThe monthly profit after overheads is what percentage of monthly revenue (to one decimal)?`, profMonth / (1200 * 40 * 30) * 100, '2,10,000 ÷ 14,40,000 = 14.6%.', 1),
  nq('p', `${CB}\n\nHow many riders would be needed to handle 1,500 orders a day at the same 20 orders per rider?`, 1500 / 20, '1,500 ÷ 20 = 75.')
];
build(ch23, q23);

// ================= Chapter 24: data sufficiency mastery =================
function* assigns(vars) {
  const keys = Object.keys(vars);
  const rec = function* (i, cur) { if (i === keys.length) { yield { ...cur }; return; } for (const v of vars[keys[i]]) { cur[keys[i]] = v; yield* rec(i + 1, cur); } };
  yield* rec(0, {});
}
const range = (a, b, st = 1) => { const o = []; for (let i = a; i <= b; i += st) o.push(i); return o; };
const O = { I: 'Statement I alone is sufficient, but statement II alone is not', II: 'Statement II alone is sufficient, but statement I alone is not', both: 'Both statements together are needed; neither alone is sufficient', none: 'Even both statements together are not sufficient' };
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
  return { key, q: `${p.setup}\n\nQuestion: ${p.question}\nI. ${p.t1}\nII. ${p.t2}\n\nWhich of the following is correct?`, c: O[key], w: Object.values(O).filter((o) => o !== O[key]), e: `Statement I alone ${d(v1)}. Statement II alone ${d(v2)}. Taken together they ${dd}. Answer: ${O[key]}.` };
}
const P = (setup, question, t1, t2, o) => ds({ setup, question, t1, t2, ...o });
const DS = [
  P('Company A had sales of ₹40 lakh in 2023. Company B\'s sales b are a whole number of lakh, at most 100.', 'What were the combined sales of A and B?', 'B\'s sales were 25% more than A\'s.', 'B\'s sales were more than ₹45 lakh.', { vars: { b: range(1, 100) }, q: (a) => 40 + a.b, s1: (a) => a.b === 50, s2: (a) => a.b > 45 }),
  P('An article was bought for ₹100, ₹200, ₹300 or ₹400 and sold for a multiple of ₹10 from ₹100 to ₹700.', 'Is the profit percentage more than 20%?', 'The selling price was ₹300.', 'The cost price was ₹200 and the selling price was more than ₹250.', { vars: { c: [100, 200, 300, 400], s: range(100, 700, 10) }, q: (a) => (a.s - a.c) / a.c > 0.2, s1: (a) => a.s === 300, s2: (a) => a.c === 200 && a.s > 250 }),
  P('Three numbers a, b and c are whole numbers from 1 to 9.', 'What is the average of a, b and c?', 'a + b = 10.', 'c = 4.', { vars: { a: range(1, 9), b: range(1, 9), c: range(1, 9) }, q: (a) => Math.round((a.a + a.b + a.c) / 3 * 100) / 100, s1: (a) => a.a + a.b === 10, s2: (a) => a.c === 4 }),
  P('x and y are whole numbers from 1 to 9.', 'Is x greater than y?', 'x² is greater than y².', 'x + y = 10.', { vars: { x: range(1, 9), y: range(1, 9) }, q: (a) => a.x > a.y, s1: (a) => a.x * a.x > a.y * a.y, s2: (a) => a.x + a.y === 10 }),
  P('Department A has a employees and department B has b employees; each is a multiple of 10 from 10 to 60.', 'How many employees does department B have?', 'Department A has 30 employees.', 'Department B has more than 20 employees.', { vars: { a: range(10, 60, 10), b: range(10, 60, 10) }, q: (x) => x.b, s1: (x) => x.a === 30, s2: (x) => x.b > 20 }),
  P('Old sales and new sales are each one of 100, 200, 300, 400 or 500.', 'What was the percentage increase in sales?', 'The new sales were 300.', 'The new sales were 50% more than the old sales.', { vars: { o: [100, 200, 300, 400, 500], n: [100, 200, 300, 400, 500] }, q: (a) => (a.n - a.o) / a.o * 100, s1: (a) => a.n === 300, s2: (a) => 2 * a.n === 3 * a.o }),
  P('x and y are whole numbers from 1 to 30.', 'What is the HCF of x and y?', 'x = 12 and y = 18.', 'x + y = 30.', { vars: { x: range(1, 30), y: range(1, 30) }, q: (a) => { let p = a.x, r = a.y; while (r) [p, r] = [r, p % r]; return p; }, s1: (a) => a.x === 12 && a.y === 18, s2: (a) => a.x + a.y === 30 }),
  P('A school has n students (50, 100 or 150) and p of them passed, where p is a multiple of 10 not exceeding n.', 'Did more than 60% of the students pass?', '90 students passed.', 'The school has 150 students.', { vars: { n: [50, 100, 150], p: range(10, 150, 10) }, base: (a) => a.p <= a.n, q: (a) => a.p / a.n > 0.6, s1: (a) => a.p === 90 && a.p <= a.n, s2: (a) => a.n === 150 && a.p <= a.n }),
  P('The monthly incomes of X and Y (in thousands) are multiples of 10 from 10 to 60.', 'Does X earn more than Y?', 'X earns ₹20 thousand more than Y.', 'X earns ₹40 thousand.', { vars: { x: range(10, 60, 10), y: range(10, 60, 10) }, q: (a) => a.x > a.y, s1: (a) => a.x === a.y + 20, s2: (a) => a.x === 40 }),
  P('The cost price is ₹100, 200, 300, 400 or 500 and the profit percentage is 10, 20, 25 or 50.', 'What was the selling price?', 'The cost price was ₹200.', 'The profit percentage was 25.', { vars: { c: [100, 200, 300, 400, 500], p: [10, 20, 25, 50] }, q: (a) => a.c * (1 + a.p / 100), s1: (a) => a.c === 200, s2: (a) => a.p === 25 }),
  P('n is a whole number from 1 to 50.', 'What is n?', 'n is divisible by 12.', 'n is divisible by 18.', { vars: { n: range(1, 50) }, q: (a) => a.n, s1: (a) => a.n % 12 === 0, s2: (a) => a.n % 18 === 0 }),
  P('A rectangle has whole-number sides l and w from 1 to 10 (in cm).', 'Is the rectangle a square?', 'Its perimeter is 24 cm.', 'Its area is 36 square cm.', { vars: { l: range(1, 10), w: range(1, 10) }, q: (a) => a.l === a.w, s1: (a) => 2 * (a.l + a.w) === 24, s2: (a) => a.l * a.w === 36 }),
  P('Ravi\'s marks in two tests are each a multiple of 10 from 0 to 100.', 'What is Ravi\'s total mark in the two tests?', 'He scored 70 in the first test.', 'The average of his two marks is 80.', { vars: { a: range(0, 100, 10), b: range(0, 100, 10) }, q: (x) => x.a + x.b, s1: (x) => x.a === 70, s2: (x) => (x.a + x.b) / 2 === 80 }),
  P('b and c are whole numbers from 1 to 9.', 'Is b greater than c?', 'b is 3 times c.', 'c = 2.', { vars: { b: range(1, 9), c: range(1, 9) }, q: (a) => a.b > a.c, s1: (a) => a.b === 3 * a.c, s2: (a) => a.c === 2 }),
  P('A vehicle travels at a steady speed of 20, 40 or 60 km/h for 1, 2 or 3 hours.', 'What is the distance travelled?', 'The speed was 40 km/h.', 'The time was 2 hours.', { vars: { s: [20, 40, 60], t: [1, 2, 3] }, q: (a) => a.s * a.t, s1: (a) => a.s === 40, s2: (a) => a.t === 2 }),
  P('A class has 50 students; the number of boys b is a whole number from 1 to 49.', 'Are there more boys than girls?', 'Girls are 20% of the class.', 'There are more than 20 boys.', { vars: { b: range(1, 49) }, q: (a) => a.b > 50 - a.b, s1: (a) => 50 - a.b === 10, s2: (a) => a.b > 20 }),
  P('A pen costs p rupees and a pencil costs q rupees; both are whole numbers from 1 to 20.', 'What is the price of a pen?', '2 pens and 1 pencil cost ₹25.', '1 pen and 2 pencils cost more than ₹18.', { vars: { p: range(1, 20), q: range(1, 20) }, q: (a) => a.p, s1: (a) => 2 * a.p + a.q === 25, s2: (a) => a.p + 2 * a.q > 18 }),
  P('x is a whole number from 1 to 40.', 'Is x even?', 'x² is divisible by 4.', 'x is a multiple of 3.', { vars: { x: range(1, 40) }, q: (a) => a.x % 2 === 0, s1: (a) => (a.x * a.x) % 4 === 0, s2: (a) => a.x % 3 === 0 }),
  P('Anil\'s marks in three subjects are each a multiple of 10 from 30 to 100.', 'Is the average of the three marks above 50?', 'The total of the three marks is 160.', 'The highest of the three marks is 60.', { vars: { a: range(30, 100, 10), b: range(30, 100, 10), c: range(30, 100, 10) }, q: (x) => (x.a + x.b + x.c) / 3 > 50, s1: (x) => x.a + x.b + x.c === 160, s2: (x) => Math.max(x.a, x.b, x.c) === 60 }),
  P('a and b are whole numbers from 1 to 20.', 'What is a + b?', 'a − b = 4.', 'a × b = 96.', { vars: { a: range(1, 20), b: range(1, 20) }, q: (x) => x.a + x.b, s1: (x) => x.a - x.b === 4, s2: (x) => x.a * x.b === 96 })
];
const order = [0, 3, 8, 13, 15, 17, 1, 5, 2, 10, 14, 9, 19, 16, 11, 7, 12, 4, 6, 18];
const ch24 = C({ ...base, n: 24, id: 'y4-ada-data-sufficiency-mastery', title: 'Data Sufficiency Mastery',
  tag: 'All four outcomes with numbers, percentages, ratios and yes/no questions; a quick decision procedure',
  over: 'Data sufficiency asks whether given statements are enough to answer a question. Mastery means deciding quickly and correctly in all four outcomes: I alone, II alone, both together, neither. The procedure is the same each time: list the unknowns, test statement I alone by trying to find two different answers, test II the same way, and combine only if both fail. For yes/no questions the answer must be always yes or always no.',
  place: 'Data sufficiency is common in management-oriented tests and in the advanced DI and reasoning sections.',
  real: 'Deciding whether you have enough information before committing to a decision is the real-world skill.',
  obj: ['Apply the four-outcome procedure', 'Count unknowns and independent conditions', 'Handle yes/no questions with consistency', 'Handle percentage and ratio setups', 'Recognise redundant and insufficient statements'],
  pre: ['Data Sufficiency in DI Contexts (Year 3)', 'Advanced Data Sufficiency (Year 3)'],
  refresh: 'A statement is sufficient only if it leads to a single answer in every situation it allows.',
  defs: ['Sufficient: one definite answer.', 'Insufficient: more than one answer possible.', 'Together: both statements applied.', 'Consistent yes/no: always yes or always no.', 'Redundant: adds nothing to the other.'],
  intu: 'Picture every situation the statement permits. If they all agree, it suffices.',
  mental: 'Try to build two worlds with different answers for I; then for II; then for I and II together.',
  formulas: [['Alone test', 'Two worlds with different answers?', 'Each statement.', 'Primary.', 'Several sums possible'], ['Equation count', 'Unknowns = independent equations', 'Arithmetic.', 'Quick.', '2 and 2'], ['Yes/no', 'Always the same', 'Questions of type is/does.', 'Rule.', 'Even or odd'], ['Range', 'Ranges rarely suffice', 'Inequalities.', 'Trap.', 'More than 45'], ['Intersect', 'Combine conditions', 'Together.', 'Last.', 'Divisible by 12 and 18']],
  narr: ['Company A sold ₹40 lakh and B sold 25% more: B sold 50, total 90. "B sold more than 45" leaves 46, 47, …; only I is sufficient.', '"x² > y²" for positive whole numbers means x > y, so it settles "is x greater than y?"; "x + y = 10" does not.', '"n is divisible by 12" leaves 12, 24, 36, 48; "n is divisible by 18" leaves 18, 36; together n = 36.', 'A rectangle with perimeter 24 has l + w = 12; area 36 gives l = w = 6 only when both hold: together they show a square.', 'Where a yes/no answer varies across the permitted worlds, the statement is insufficient.'],
  deep: [['Hidden constraints', 'Check the ranges in the setup: they can make a statement sufficient.'], ['Both together but not enough', 'Two statements can overlap so much that they still leave several possibilities.']],
  vars: [['Equations', 'Unknown counts.', 'Sums'], ['Yes/no', 'Consistency.', 'Is x > y'], ['Ranges', 'Not enough.', 'More than 45'], ['Divisibility', 'Intersections.', '12 and 18'], ['Geometry', 'Perimeter and area.', 'Square']],
  ex: [
    { t: 'I alone', q: 'A sold ₹40 lakh. I. B sold 25% more than A. II. B sold more than ₹45 lakh. Total of A and B?', g: ['A = 40'], c: 'Test each.', s: [['I', 'B = 50; total 90.'], ['II', 'B could be 46, 47, …']], a: 'Statement I alone is sufficient, but statement II alone is not', w: 'Only I fixes B.', tr: 'Combining.' },
    { t: 'Both needed', q: 'n ≤ 50. I. n is divisible by 12. II. n is divisible by 18. What is n?', g: ['n ≤ 50'], c: 'Intersect.', s: [['I', '12, 24, 36, 48.'], ['II', '18, 36; together 36.']], a: 'Both statements together are needed; neither alone is sufficient', w: 'Only 36 is in both lists.', tr: 'Choosing 12.' },
    { t: 'Yes/no', q: 'x, y positive whole numbers. I. x² > y². Is x > y?', g: ['Positive numbers'], c: 'Always the same?', s: [['Squares', 'For positive numbers x² > y² means x > y.'], ['Answer', 'Always yes.']], a: 'Statement I alone is sufficient', w: 'A consistent yes.', tr: 'Calling it insufficient.' }
  ],
  short: { title: 'Two worlds, three tests', trad: 'Solve fully.', fast: 'Try to find two different answers under I, then under II, then under both.', rules: ['Alone first.', 'Unknowns vs equations.', 'Yes/no consistency.', 'Ranges rarely suffice.'] },
  mist: [['Combining too early', 'Misses single-statement cases.', 'Test alone first.'], ['Accepting a range', 'Not unique.', 'Need one value.'], ['Using outside data', 'Not allowed.', 'Use only given data.']],
  tips: { sec: 80, elim: 'If statements repeat, together adds nothing.', adv: 'List unknowns first.', ins: 'You never need the exact answer.' },
  rev: ['Alone first.', 'Counting.', 'Yes/no.', 'Ranges.', 'Together.'],
  qf: ['Unknowns = equations'],
  take: ['Test alone.', 'Count.', 'Consistency.', 'No outside data.'],
  self: ['Can I test each statement?', 'Can I count unknowns?', 'Can I handle yes/no?']
});
const mxs = {};
DS.forEach((d) => { mxs[d.key] = (mxs[d.key] || 0) + 1; });
build(ch24, order.map((k, i) => (i < 6 ? easy : i < 14 ? medium : placement)(DS[k].q, DS[k].c, DS[k].w, DS[k].e)));
