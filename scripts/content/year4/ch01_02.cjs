const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, inr, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'mqm', category: 'Advanced Aptitude / Mixed Problems', url: 'https://www.indiabix.com/aptitude/' };

// ---------- Chapter 1 ----------
const ch1 = C({ ...base, n: 1, id: 'y4-mqm-problem-solving', title: 'Mixed Quantitative — Integrated Problem Solving',
  tag: 'Problems that draw on several topics at once: choosing the method before computing',
  over: 'A real placement paper does not label questions by topic. One question is a percentage problem, the next is about trains, the next about work, and a tough one combines two of them. Integrated problem solving is the skill of recognising what a question is really asking, picking the shortest method and avoiding the topic-specific traps. This chapter practises that recognition with mixed sets in which every answer is computed.',
  place: 'Mixed quantitative sections are how most company tests present aptitude; speed comes from recognising the type in seconds.',
  real: 'Everyday decisions (discounts, interest, travel time, shared work) mix these same ideas.',
  obj: ['Classify a question by its structure, not its story', 'Choose between algebra, ratio and arithmetic methods', 'Combine two topics in one calculation', 'Check answers against the size expected', 'Keep units consistent across steps'],
  pre: ['Percentages', 'Ratio and Proportion', 'Time, Speed and Distance', 'Time and Work', 'Interest'],
  refresh: 'Successive changes multiply; ratios share totals; speed × time = distance; work rates add; interest is on principal (simple) or on the growing balance (compound).',
  defs: ['Structure: the mathematical shape of a problem (a ratio, a rate, a repeated change).', 'Successive change: changes applied one after the other, which multiply.', 'Rate: a quantity per unit of time or per unit of another quantity.', 'Consistency check: confirming units and the size of the answer.', 'Method choice: deciding between algebra, ratio or shortcut before computing.'],
  intu: 'Strip the story away and ask what the numbers do: split, grow, repeat, or race. That tells you the method.',
  mental: 'Read the question once to name the structure, then write only the numbers needed. Estimate the size of the answer before computing.',
  formulas: [['Successive change', 'Final = start × (1 ± a%)(1 ± b%)', 'Two or more changes.', 'Discounts, growth.', '800 × 0.8 × 0.9 = 576'], ['Ratio split', 'Part = total × a/(a + b)', 'Two-way split.', 'Sharing.', '160 × 5/8 = 100'], ['Simple interest', 'SI = P × r × t / 100', 'Interest on principal.', 'Loans.', '5,000 × 8 × 3/100 = 1,200'], ['Compound interest', 'A = P(1 + r/100)ⁿ', 'Annual compounding.', 'Growth.', '10,000 at 10% for 2 years = 12,100'], ['Combined work', '1/T = 1/a + 1/b', 'Two workers.', 'Work.', '1/12 + 1/24 = 1/8']],
  narr: ['A shopkeeper allows 20% and then 10% off ₹800. The two discounts multiply: 800 × 0.8 × 0.9 = ₹576. A single 30% discount would give ₹560, which is wrong.', 'If A does a job in 12 days and B in 24, together they take 1/(1/12 + 1/24) = 8 days.', 'A train 240 m long crosses a pole in 12 s, so its speed is 240/12 = 20 m/s = 72 km/h.', 'A town of 20,000 grows 10% and then shrinks 10%: 20,000 × 1.1 × 0.9 = 19,800, a net 1% fall.', 'For a mixture of 40 L in the ratio 3 : 1 (milk : water), milk is 30 L. Adding 10 L of water makes the total 50 L and milk 60%.'],
  deep: [['Estimate first', 'If the answer must lie between two numbers you can compute, estimate before the full calculation to catch slips.'], ['Same story, different method', 'A "% of a %" question is multiplication; a "how many days" question is rates; do not use the same tool for both.']],
  vars: [['Percentage and ratio', 'Share then percentage.', 'Mixtures'], ['Interest and growth', 'Repeated multiplication.', 'Population'], ['Speed and time', 'Distance relations.', 'Trains'], ['Work and rates', 'Add rates.', 'Pipes'], ['Counting', 'Arrangements.', 'Books together']],
  ex: [
    { t: 'Successive discounts', q: 'A ₹800 article is sold after discounts of 20% and 10%. Find the price.', g: ['800', '20%, 10%'], c: 'Multiply the factors.', s: [['Factors', '0.8 × 0.9 = 0.72.'], ['Price', '800 × 0.72 = ₹576.']], a: '₹576', w: 'Not a 30% discount.', tr: 'Adding 20% and 10%.' },
    { t: 'Combined work', q: 'A does a job in 12 days and B in 24 days. How long together?', g: ['12 and 24 days'], c: 'Add rates.', s: [['Rates', '1/12 + 1/24 = 3/24.'], ['Time', '24/3 = 8 days.']], a: '8 days', w: 'Rates add, times do not.', tr: 'Averaging the times.' },
    { t: 'Percent up then down', q: 'A population of 20,000 grows 10% and then falls 10%. What is it now?', g: ['20,000'], c: 'Multiply.', s: [['Factor', '1.1 × 0.9 = 0.99.'], ['Value', '20,000 × 0.99 = 19,800.']], a: '19,800', w: 'Net change is −1%.', tr: 'Saying no change.' }
  ],
  short: { title: 'Name the structure', trad: 'Start calculating at once.', fast: 'Name the structure (split, grow, repeat, race), pick that method, and estimate the size of the answer first.', rules: ['Successive changes multiply.', 'Rates add.', 'Estimate first.', 'Keep units aligned.'] },
  mist: [['Adding successive percentages', 'Wrong base.', 'Multiply the factors.'], ['Mixing km/h and m/s', 'Unit slip.', 'Convert once at the start.'], ['Using the wrong topic tool', 'Method mismatch.', 'Name the structure first.']],
  tips: { sec: 75, elim: 'Reject options that are far from your estimate.', adv: 'Skip a problem whose structure you cannot name in 20 seconds.', ins: 'Mixed sets reward recognition over calculation.' },
  rev: ['Name the structure.', 'Successive change.', 'Rates add.', 'Interest.', 'Estimate.'],
  qf: ['Final = start × factors'],
  take: ['Recognise first.', 'Multiply changes.', 'Add rates.', 'Check size.'],
  self: ['Can I name a problem\'s structure?', 'Can I choose the shortest method?', 'Can I estimate before computing?']
});
const q1 = [
  N('e', 'A ₹800 article is sold after successive discounts of 20% and 10%. The selling price is (₹)', 800 * 0.8 * 0.9, 'Multiply the factors: 800 × 0.8 × 0.9 = 576.'),
  N('e', 'Two numbers are in the ratio 3 : 5 and their sum is 160. The larger number is', 160 * 5 / 8, '160 × 5/8 = 100.'),
  N('e', 'The simple interest on ₹5,000 at 8% per annum for 3 years is (₹)', 5000 * 8 * 3 / 100, '5,000 × 8 × 3 ÷ 100 = 1,200.'),
  N('e', 'The average of five numbers is 24. A sixth number, 36, is added. The new average is', (24 * 5 + 36) / 6, 'Total = 120 + 36 = 156; 156 ÷ 6 = 26.'),
  N('e', 'A car travels at 60 km/h for 2.5 hours. The distance is (km)', 60 * 2.5, '60 × 2.5 = 150.'),
  N('e', 'A can do a job in 12 days and B in 24 days. Together they finish in (days)', 1 / (1 / 12 + 1 / 24), '1/12 + 1/24 = 3/24, so 24/3 = 8 days.'),
  N('m', 'The compound interest on ₹10,000 at 10% per annum for 2 years is (₹)', 10000 * 1.1 * 1.1 - 10000, 'Amount = 10,000 × 1.21 = 12,100; interest = 2,100.'),
  N('m', 'A train 240 m long crosses a pole in 12 seconds. Its speed is (km/h)', 240 / 12 * 3.6, '240 ÷ 12 = 20 m/s = 20 × 3.6 = 72 km/h.'),
  N('m', 'An article is sold for ₹600 at a profit of 25% on cost. The cost price is (₹)', 600 / 1.25, 'Cost = 600 ÷ 1.25 = 480.'),
  N('m', 'A 40-litre mixture has milk and water in the ratio 3 : 1. After adding 10 litres of water, the percentage of milk is', 30 / 50 * 100, 'Milk = 30 L; total = 50 L; 30 ÷ 50 = 60%.', 0, pc),
  N('m', 'A town of 20,000 people grows by 10% and then falls by 10%. Its population is now', 20000 * 1.1 * 0.9, '20,000 × 1.1 × 0.9 = 19,800.'),
  N('m', 'Two pipes fill a tank in 12 and 20 hours, and a leak empties it in 30 hours. With all three open it fills in (hours)', 1 / (1 / 12 + 1 / 20 - 1 / 30), '1/12 + 1/20 − 1/30 = 6/60 = 1/10, so 10 hours.'),
  N('m', 'A boat goes at 9 km/h in still water and the stream is 3 km/h. The time to go 36 km downstream is (hours)', 36 / 12, 'Downstream speed = 12 km/h; 36 ÷ 12 = 3 hours.'),
  N('m', 'In how many ways can 5 different books be arranged on a shelf so that two particular books are together?', 24 * 2, 'Treat the two as one: 4! × 2! = 24 × 2 = 48.'),
  N('p', 'A sum amounts to ₹6,500 in 2 years and ₹7,250 in 3 years at simple interest. The rate per annum is', 750 / 5000 * 100, 'Interest per year = 750; principal = 6,500 − 1,500 = 5,000; rate = 750 ÷ 5,000 = 15%.', 0, pc),
  N('p', 'Incomes of A and B are in the ratio 5 : 4 and expenditures in the ratio 3 : 2. Each saves ₹2,000. A\'s income is (₹)', 5000, '5x − 3y = 2,000 and 4x − 2y = 2,000 give x = 1,000, so A earns 5 × 1,000 = 5,000.'),
  N('p', 'A man travels half the distance at 60 km/h and the other half at 40 km/h. His average speed is (km/h)', 2 * 60 * 40 / 100, 'Equal distances: 2ab/(a + b) = 4,800/100 = 48.'),
  T('p', 'Two dice are thrown. The probability that the sum is 9 is', '1/9', ['1/6', '1/12', '5/36'], 'Sum 9 occurs in 4 ways (3+6, 4+5, 5+4, 6+3): 4/36 = 1/9.'),
  N('p', 'Two runners at 8 m/s and 6 m/s start together from the same point of a 400 m track in opposite directions. They first meet after (seconds, to one decimal)', 400 / 14, 'Relative speed 14 m/s; 400 ÷ 14 = 28.6.', 1),
  N('p', 'A town of 50,000 grows by 20% in the first year and by 10% in the second. Its population after two years is', 50000 * 1.2 * 1.1, '50,000 × 1.2 × 1.1 = 66,000.')
];
build(ch1, q1);

// ---------- Chapter 2 ----------
const ch2 = C({ ...base, n: 2, id: 'y4-mqm-multi-concept', title: 'Multi-Concept Quantitative Problems',
  tag: 'Single problems that need two or three topics in sequence: profit with ratios, mixtures with percentages, work with wages',
  over: 'A multi-concept problem cannot be solved with one formula; the answer of one step feeds the next. The usual pairs are profit with discount, ratio with percentage, work with wages, interest with ratio, and speed with ratio. The key is to write the chain of quantities (cost, marked price, selling price, profit) and compute each link in order.',
  place: 'The harder questions in company papers are almost always of this type.',
  real: 'Budgeting, pricing and project costing chain several calculations in the same way.',
  obj: ['Break a problem into a chain of single-topic steps', 'Handle profit, discount and marked price together', 'Combine ratios with percentages', 'Split wages in proportion to work', 'Verify the final answer against an earlier step'],
  pre: ['Mixed Quantitative — Integrated Problem Solving', 'Profit and Loss', 'Ratio and Proportion'],
  refresh: 'Marked price = cost × (1 + mark-up). Selling price = marked price × (1 − discount). Profit % = (SP − CP) ÷ CP × 100.',
  defs: ['Chain: ordered quantities where each is computed from the previous one.', 'Mark-up: percentage added to cost to get the marked price.', 'Discount: percentage taken off the marked price.', 'Proportional wages: wages split in the ratio of work done.', 'Cross-check: recomputing from a different route.'],
  intu: 'List the quantities in the order they depend on each other, and compute them as a chain.',
  mental: 'Write "cost → marked → selling → profit" (or the chain for the problem), fill known numbers, and compute one link at a time.',
  formulas: [['Marked and selling', 'SP = CP × (1 + m%)(1 − d%)', 'Mark-up then discount.', 'Retail.', '800 × 1.25 × 0.9 = 900'], ['Profit %', '(SP − CP) ÷ CP × 100', 'After SP.', 'Profit.', '(900 − 800)/800 = 12.5%'], ['Wages', 'Share = total × work ÷ total work', 'Shared job.', 'Labour.', 'Work 3 : 2 on ₹5,000'], ['Mixture value', 'Mean = total cost ÷ total quantity', 'Mixing.', 'Alligation.', '(3×40 + 5×60)/8'], ['Ratio then percent', 'Part = total × a/(a+b); % = part/total', 'Splits.', 'Shares.', '5/8 = 62.5%']],
  narr: ['A shopkeeper marks goods 25% above cost of ₹800, so the marked price is ₹1,000. After a 10% discount the selling price is ₹900 and the profit is ₹100, which is 12.5% of the cost.', 'Two workers A and B do 3 : 2 of a job; the wages of ₹5,000 are split in the same ratio: ₹3,000 and ₹2,000.', 'To mix 3 kg of tea at ₹40 with 5 kg at ₹60, the total cost is 120 + 300 = ₹420 for 8 kg, so ₹52.5 per kg.', 'If a salary is split in the ratio 3 : 2 : 1 and the smallest share is ₹4,000, the total is ₹24,000 and the largest share ₹12,000.', 'Always check: the final selling price must exceed the cost if there is a profit.'],
  deep: [['Chains hide base changes', 'A discount applies to the marked price, not the cost; a profit is on the cost, not the selling price.'], ['Combine, then simplify', 'Multiply the factors first (1.25 × 0.9 = 1.125) and apply once.']],
  vars: [['Mark-up and discount', 'Two bases.', 'Retail pricing'], ['Wages by work', 'Ratios.', 'Shared job'], ['Mixtures by cost', 'Weighted mean.', 'Tea blend'], ['Ratio and money', 'Shares.', 'Salary split'], ['Interest and ratio', 'Split principal.', 'Two investments']],
  ex: [
    { t: 'Chain', q: 'Goods cost ₹800, are marked 25% above cost and sold at 10% discount. Find the profit percentage.', g: ['800', '25%', '10%'], c: 'Cost → marked → selling.', s: [['Marked', '800 × 1.25 = 1,000.'], ['Selling', '1,000 × 0.9 = 900.'], ['Profit %', '100 ÷ 800 = 12.5%.']], a: '12.5%', w: 'Profit is on cost.', tr: 'Saying 15%.' },
    { t: 'Wages', q: 'A and B do 3 : 2 of a job and earn ₹5,000 together. What does A get?', g: ['3 : 2', '₹5,000'], c: 'Split by work.', s: [['Share', '3/5 of 5,000.'], ['Value', '₹3,000.']], a: '₹3,000', w: 'In the ratio of work.', tr: 'Splitting equally.' },
    { t: 'Mixture price', q: '3 kg tea at ₹40 and 5 kg at ₹60 are mixed. Find the price per kg.', g: ['3 kg, 5 kg'], c: 'Total cost over total weight.', s: [['Cost', '120 + 300 = 420.'], ['Per kg', '420 ÷ 8 = ₹52.5.']], a: '₹52.5', w: 'Weighted, not (40 + 60)/2.', tr: 'Taking 50.' }
  ],
  short: { title: 'Write the chain', trad: 'Do it all in the head.', fast: 'Write the chain of quantities and compute one link at a time; combine factors only at the end.', rules: ['Discount on marked price.', 'Profit on cost.', 'Weighted means for mixtures.', 'Check the last link.'] },
  mist: [['Profit on the selling price', 'Wrong base.', 'Divide by cost.'], ['Discount on the cost', 'Wrong base.', 'Apply to marked price.'], ['Plain average in a mixture', 'Ignores quantities.', 'Use total ÷ total.']],
  tips: { sec: 100, elim: 'The selling price must be between cost and marked price when there is a discount.', adv: 'Write the chain on paper.', ins: 'Longer chains are just repeated single steps.' },
  rev: ['Chain.', 'Mark-up/discount.', 'Wages.', 'Mixtures.', 'Check.'],
  qf: ['SP = CP(1 + m)(1 − d)'],
  take: ['Chain first.', 'Right base.', 'Weighted mean.', 'Verify.'],
  self: ['Can I write the chain?', 'Can I choose the right base?', 'Can I split in a ratio?']
});
const q2 = [
  N('e', 'Goods costing ₹800 are marked 25% above cost and sold at a 10% discount. The selling price is (₹)', 800 * 1.25 * 0.9, 'Marked = 1,000; selling = 900.'),
  N('e', 'Goods costing ₹800 are marked 25% above cost and sold at a 10% discount. The profit percentage is', (900 - 800) / 800 * 100, 'Profit 100 on cost 800 = 12.5%.', 1, pc),
  N('e', 'A and B do work in the ratio 3 : 2 and earn ₹5,000. A\'s share is (₹)', 5000 * 3 / 5, '3/5 of 5,000 = 3,000.'),
  N('e', '3 kg of tea at ₹40 and 5 kg at ₹60 are mixed. The price per kg is (₹)', (120 + 300) / 8, 'Total cost 420 ÷ 8 kg = 52.5.', 1),
  N('e', 'A salary is split in the ratio 3 : 2 : 1 and the smallest share is ₹4,000. The total is (₹)', 24000, 'The shares are 12,000, 8,000 and 4,000; total 24,000.'),
  N('e', 'A shirt marked ₹1,200 is sold at 15% discount. The selling price is (₹)', 1200 * 0.85, '1,200 × 0.85 = 1,020.'),
  N('m', 'A trader marks goods 40% above cost and gives 20% discount. His profit percentage is', (1.4 * 0.8 - 1) * 100, '1.4 × 0.8 = 1.12, a 12% profit.', 0, pc),
  N('m', 'A and B can do a job in 10 and 15 days. They earn ₹6,000. B\'s share if both work together to the end is (₹)', 6000 * (1 / 15) / (1 / 10 + 1 / 15), 'Work ratio = 1/10 : 1/15 = 3 : 2; B gets 2/5 of 6,000 = 2,400.'),
  N('m', 'Milk at ₹40 per litre is mixed with water in the ratio 4 : 1 and sold at ₹40 per litre. The profit percentage is', 25, 'Cost of 5 litres of mixture = 4 × 40 = 160; selling 5 × 40 = 200; profit 40/160 = 25%.', 0, pc),
  N('m', '₹12,000 is split between two investments at 10% and 15% simple interest in the ratio 1 : 3. The total interest for 1 year is (₹)', 3000 * 0.1 + 9000 * 0.15, 'Principals 3,000 and 9,000: 300 + 1,350 = 1,650.'),
  N('m', 'A man travels 120 km at 40 km/h and returns at 60 km/h. The total time is (hours)', 120 / 40 + 120 / 60, '3 + 2 = 5 hours.'),
  N('m', 'The cost price of 12 articles equals the selling price of 10 articles. The profit percentage is', (12 - 10) / 10 * 100, 'Let cost per article be 1: SP of 10 = 12, so SP each 1.2; profit 20%.', 0, pc),
  N('m', 'A discount of 20% on a marked price of ₹750 is followed by a further 10% off. The final price is (₹)', 750 * 0.8 * 0.9, '750 × 0.72 = 540.'),
  N('m', 'A sum of ₹8,000 amounts to ₹9,261 at compound interest in 3 years. The rate is', 5, '1.05³ = 1.157625; 8,000 × 1.157625 = 9,261, so the rate is 5%.', 0, pc),
  N('p', 'A shopkeeper sells an article at a 10% discount and still gains 8%. His mark-up over cost (percent) is', (1.08 / 0.9 - 1) * 100, 'Marked = cost × 1.08/0.9 = 1.2 × cost, so the mark-up is 20%.', 0, pc),
  N('p', 'Two alloys contain copper and zinc in 2 : 3 and 3 : 2. Equal weights are mixed. The percentage of copper is', 50, 'Copper fraction = (2/5 + 3/5)/2 = 1/2 = 50%.', 0, pc),
  N('p', 'A, B and C invest ₹6,000, ₹8,000 and ₹10,000 for 12, 9 and 6 months. The profit is ₹4,800. B\'s share is (₹)', 4800 * (8000 * 9) / (6000 * 12 + 8000 * 9 + 10000 * 6), 'Investment × time: 72,000 : 72,000 : 60,000 = 6 : 6 : 5; B gets 6/17 of 4,800 ≈ 1,694.', 0),
  N('p', 'A tank is filled by a pipe in 6 hours. After 2 hours a second pipe that fills it in 12 hours is also opened. The total time to fill is (hours)', 2 + (1 - 2 / 6) / (1 / 6 + 1 / 12), 'In 2 h: 1/3 filled. Remaining 2/3 at 1/4 per hour: 8/3 h; total 2 + 8/3 = 4.67.', 2),
  N('p', 'The average of 10 numbers is 40. When one number is replaced by 90 the average becomes 42. The replaced number was', 90 - 20, 'Total rises by 20, so the old number was 90 − 20 = 70.'),
  N('p', 'A car covers the first 100 km at 50 km/h and the next 100 km at 100 km/h. Its average speed is (km/h, to one decimal)', 200 / (2 + 1), 'Total time 2 + 1 = 3 h for 200 km: 66.7 km/h.', 1)
];
build(ch2, q2);
