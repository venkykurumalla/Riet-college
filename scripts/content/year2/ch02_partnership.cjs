const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-partnership', year: 2, category: 'Advanced Quantitative Aptitude', num: 2, difficulty: 'Intermediate',
  title: 'Partnership Arithmetic',
  tagline: 'Year 2 — Sharing profit and loss by capital and time',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/aptitude/partnership/',
  overview: 'In a partnership two or more people invest money in a business and share the profit or loss. The fair share of each partner is proportional to the amount of money they put in and the time for which it stays invested. The key quantity is therefore capital × time, and the profit is divided in the ratio of these products.',
  placement: 'Partnership questions are commonly asked in company aptitude rounds. They are ratio problems in a business setting, usually with two or three partners and one twist such as a late entry, a withdrawal or a salary for a working partner.',
  realWorld: 'Joint ventures, startup co-founders and shared investments all divide returns using capital and time.',
  objectives: [
    'Divide profit and loss in the ratio of capital × time',
    'Handle partners who join or leave during the year',
    'Handle working partners who receive a salary or a commission',
    'Work with fractions and percentages of capital',
    'Find the total profit from a known share'
  ],
  prereq: ['Basic Ratio', 'Advanced Ratio and Proportion', 'Basic Percentages'],
  refresher: 'To divide N in the ratio a : b : c, one part = N ÷ (a + b + c). Compare capital × time products by simplifying their ratio.',
  defs: [
    'Partnership: an arrangement in which two or more persons invest in a business and share the result.',
    'Capital: the money invested. Period: the time for which the capital stays in the business.',
    'Sleeping (silent) partner: invests money but does not work. Working partner: manages the business and may receive a salary or commission.',
    'Profit-sharing ratio: ratio of (capital × time) of the partners.',
    'Loss is shared in the same ratio as profit.'
  ],
  intuition: 'A rupee kept for 12 months earns twice as much as a rupee kept for 6 months. So the natural unit is the "rupee-month". Each partner\'s share equals their rupee-months divided by everyone\'s total rupee-months.',
  mental: 'Write each partner\'s investment as a row of "capital × months". Multiply, simplify the products as a ratio, and share the profit in that ratio.',
  formulas: [
    ['Profit-sharing ratio', 'Ratio = C₁T₁ : C₂T₂ : C₃T₃', 'Capital × time for each partner.', 'Any partnership question.', '4000 × 12 : 6000 × 8 = 48000 : 48000 = 1 : 1'],
    ['Equal time', 'Ratio = C₁ : C₂ : C₃', 'If all capital stays the same time, time cancels.', 'Same period for all.', '2000 : 3000 : 5000 = 2 : 3 : 5'],
    ['Equal capital', 'Ratio = T₁ : T₂ : T₃', 'If capitals are equal, the ratio of times.', 'Different joining times.', '12 months : 8 months = 3 : 2'],
    ['Share of profit', 'Share = Profit × (own part ÷ total parts)', 'Use the simplified ratio.', 'Final step.', 'Profit 12000 in 2:3:5 → C = 12000 × 5/10 = 6000'],
    ['Salary or commission', 'Deduct the salary or commission first, then share the remaining profit by the ratio', 'The working partner receives it in addition to the share.', 'Working partner problems.', 'Profit 11000, manager 10% → 1100 first']
  ],
  narrative: [
    'Start by writing, for each partner, the capital and the number of months. Convert partners who join later to the number of months they actually invest. If B joins after 3 months in a 12-month year, B\'s time is 9 months.',
    'Multiply capital by time for each partner and write the products as a ratio. Simplify by common factors. In the example where A invests ₹4,500 for 12 months, B ₹6,000 for 9 months and C ₹9,000 for 6 months, the products are 54,000, 54,000 and 54,000, so profit is shared equally.',
    'If a partner changes the capital during the year, split the year into periods. A starts with ₹5,000, adds ₹1,000 after 6 months: 5000 × 6 + 6000 × 6 = 66,000.',
    'Working partners: subtract the salary or commission from the profit first. If the manager gets 10% of profit and profit is ₹11,000, ₹1,100 goes to the manager. Share the remaining ₹9,900 in the capital ratio and add the salary to the manager\'s share.',
    'If only one partner\'s share is known, the total profit is found by proportion: if A\'s share is 5 parts of 8 and equals ₹3,000, one part is ₹600 and the total is ₹4,800.'
  ],
  deep: [
    ['Why capital × time', 'Profit is the return on use of money. Doubling the capital or doubling the time doubles the return, so both multiply.'],
    ['Losses', 'Loss is shared in the same ratio as profit. The salary of a working partner does not apply if there is a loss unless stated.']
  ],
  variations: [
    ['Equal time', 'Ratio of capitals.', 'Invest 2000, 3000 and 5000'],
    ['Different times', 'Capital × time.', '4000 for 12 months, 6000 for 8 months'],
    ['Late entry or withdrawal', 'Split into periods.', 'B joins after 5 months'],
    ['Working partner', 'Salary or commission first.', 'Manager gets 10%'],
    ['Find total from a share', 'Proportion.', 'A\'s share is ₹3,000 of 5 parts']
  ],
  examples: [
    {
      title: 'Different capitals and times',
      q: 'A invests ₹4,000 for 12 months and B invests ₹6,000 for 8 months. The profit is ₹9,600. Find each share.',
      given: ['A: 4000 × 12', 'B: 6000 × 8', 'Profit = 9600'],
      concept: 'Ratio of capital × time.',
      steps: [['Products', 'A: 48,000. B: 48,000.'], ['Ratio', '48000 : 48000 = 1 : 1.'], ['Shares', 'Each gets 9600 ÷ 2 = ₹4,800.']],
      ans: '₹4,800 each', why: 'Larger capital for a shorter time gives the same rupee-months.', trap: 'Using only capital: 2 : 3.'
    },
    {
      title: 'Partner joins late',
      q: 'A starts a business with ₹3,500. After 5 months B joins with ₹6,000. At the end of the year the profit is ₹8,400. Find B\'s share.',
      given: ['A: 3500 for 12 months', 'B: 6000 for 7 months', 'Profit = 8400'],
      concept: 'B invests for 12 − 5 = 7 months.',
      steps: [['A\'s rupee-months', '3500 × 12 = 42,000.'], ['B\'s rupee-months', '6000 × 7 = 42,000.'], ['Share', 'Ratio 1 : 1, so B gets 8400 ÷ 2 = ₹4,200.']],
      ans: '₹4,200', why: 'Both partners contribute equal rupee-months.', trap: 'Using 5 months for B.'
    },
    {
      title: 'Working partner with commission',
      q: 'A and B invest ₹6,000 and ₹9,000. A is the manager and gets 10% of the profit for managing, and the rest is shared in the ratio of capitals. The profit is ₹11,000. Find B\'s share.',
      given: ['Capital ratio 2 : 3', 'Manager gets 10% of 11,000'],
      concept: 'Deduct the commission first.',
      steps: [['Commission', '10% of 11,000 = ₹1,100.'], ['Remaining', '11,000 − 1,100 = ₹9,900, shared 2 : 3.'], ['B\'s share', '9900 × 3/5 = ₹5,940.']],
      ans: '₹5,940', why: 'B receives only the capital share; the commission goes to A.', trap: 'Sharing the whole ₹11,000 by capital.'
    }
  ],
  shortcut: {
    title: 'Rupee-month table',
    trad: 'Work out each partner\'s return separately.',
    fast: 'Fill a one-line table of capital × months, simplify the ratio and divide the profit once.',
    rules: ['Capital × time is the key.', 'Equal time → capital ratio; equal capital → time ratio.', 'Deduct salary or commission before sharing.', 'Check that the shares add up to the profit.']
  },
  mistakes: [
    ['Ignoring time', 'Dividing by capital only.', 'Multiply by months.'],
    ['Wrong months for late entry', 'Using the joining month as the period.', 'Subtract from the total period.'],
    ['Sharing salary in the ratio', 'Splitting the salary among partners.', 'Pay the salary first to the working partner.'],
    ['Forgetting a capital change', 'Using only the starting capital.', 'Split the year at the change.']
  ],
  tips: { sec: 75, elim: 'Shares must add to the profit and follow the ratio order; discard options that do not.', advice: 'Do capital × time on paper; do not compute mentally for three partners.', insight: 'Partnership questions often reuse ratio tricks like matching common terms.' },
  revision: ['Ratio = capital × time.', 'Equal time → capitals; equal capital → times.', 'Deduct salary first.', 'Loss shares follow the same ratio.'],
  quickFormulas: ['Ratio = C₁T₁ : C₂T₂', 'Share = Profit × part/total'],
  takeaways: ['Use rupee-months.', 'Late entry → fewer months.', 'Salary first.', 'Verify the sum.'],
  selfCheck: ['Can I compute capital × time for each partner?', 'Can I handle a partner who joins late?', 'Can I deduct a manager\'s commission?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Partnership topic area; examples are original.']]
};

const quiz = [
  easy('A and B invest ₹5,000 and ₹7,000 for the same period. Out of a profit of ₹6,000, A\'s share is', 6000 * 5 / 12, [2000, 3000, 3500], 'Ratio 5 : 7. One part = 6000 ÷ 12 = 500. A = 5 × 500 = 2500.'),
  easy('A and B invest in the ratio 3 : 5 for the same time. Out of a profit of ₹1,600, B\'s share is', 1600 * 5 / 8, [600, 800, 1200], 'Parts = 8, one part = 200. B = 5 × 200 = 1000.'),
  easy('A invests ₹4,000 for 12 months and B invests ₹6,000 for 8 months. The ratio of their profits is', '1 : 1', ['2 : 3', '3 : 2', '4 : 3'], 'A = 4000 × 12 = 48,000 and B = 6000 × 8 = 48,000. The ratio is 1 : 1.'),
  easy('Three partners invest ₹2,000, ₹3,000 and ₹5,000 for one year. Out of a profit of ₹12,000, the third partner gets', 6000, [2400, 3600, 5000], 'Ratio 2 : 3 : 5, total 10 parts. Third = 12000 × 5/10 = 6000.'),
  easy('Two partners invest in the ratio 2 : 3 for equal time. If the business has a loss of ₹2,500, the first partner bears', 1000, [500, 1500, 1250], 'Loss shared 2 : 3. First = 2500 × 2/5 = 1000.'),
  easy('A profit of ₹9,000 is shared by two partners in the ratio 4 : 5. The difference between their shares is', 1000, [500, 1500, 2000], 'One part = 9000 ÷ 9 = 1000. Difference = (5 − 4) × 1000 = 1000.'),

  medium('A starts a business with ₹3,500. After 5 months B joins with ₹6,000. If the profit at the end of the year is ₹8,400, B\'s share is', 4200, [3500, 4900, 5600], 'A: 3500 × 12 = 42,000. B: 6000 × 7 = 42,000. Ratio 1 : 1, so B = 4200.'),
  medium('A invests ₹8,000 for 12 months and B invests ₹6,000 for 8 months. Out of a profit of ₹15,000, A gets', 10000, [8000, 9000, 6000], 'A : B = 96,000 : 48,000 = 2 : 1. A = 15000 × 2/3 = 10,000.'),
  medium('A, B and C invest in the ratio 3 : 4 : 5 for 4, 6 and 8 months respectively. Out of a profit of ₹19,000, C gets', 10000, [8000, 9500, 6000], 'Ratio = 12 : 24 : 40 = 3 : 6 : 10. C = 19000 × 10/19 = 10,000.'),
  medium('A is a sleeping partner investing ₹6,000 and B invests ₹4,000 and also manages the business for 20% of the profit. The profit is ₹10,000. A\'s share is', 4800, [6000, 4000, 5000], 'B gets 20% = 2000 first. Remaining 8000 shared 6 : 4. A = 8000 × 6/10 = 4800.'),
  medium('A invests ₹3,000 and B ₹4,500 for a year, but B withdraws ₹1,500 after 6 months. Out of a profit of ₹9,000, A gets', 4000, [3000, 3600, 4500], 'A: 3000 × 12 = 36,000. B: 4500 × 6 + 3000 × 6 = 45,000. Ratio 4 : 5. A = 9000 × 4/9 = 4000.'),
  medium('Three partners share a profit of ₹12,600 in the ratio 2 : 3 : 4. The second partner gets', 4200, [2800, 5600, 3600], 'Parts = 9, one part = 1400. Second = 3 × 1400 = 4200.'),
  medium('A and B invest ₹6,000 and ₹9,000. A manages the business for 10% of the profit and the rest is shared by capitals. If the profit is ₹11,000, B\'s share is', 5940, [6600, 5500, 4400], 'A gets 1100. Remaining 9900 shared 2 : 3. B = 9900 × 3/5 = 5940.'),
  medium('Two partners invest in the ratio 4 : 5 for equal time. If the loss is ₹4,500, the second partner bears', 2500, [2000, 2250, 3000], 'Loss shared 4 : 5. Second = 4500 × 5/9 = 2500.'),

  placement('A invests ₹4,500 for 12 months, B invests ₹6,000 for 9 months and C invests ₹9,000 for 6 months. Out of a profit of ₹21,000, C\'s share is', 7000, [6000, 8000, 9000], 'A = 54,000, B = 54,000, C = 54,000. Equal thirds, so C = 7000.'),
  placement('A, B and C invest in the ratio 1/2 : 1/3 : 1/4 for the same time. Out of a profit of ₹7,800, A gets', 3600, [3000, 2400, 1800], 'Multiply by 12: 6 : 4 : 3. A = 7800 × 6/13 = 3600.'),
  placement('A invests 25% more than B, and B invests 20% less than C. If the total profit is ₹14,000 (same time), B\'s share is', 4000, [3500, 5000, 5600], 'Let C = 100, B = 80, A = 100. Ratio A : B : C = 5 : 4 : 5. B = 14000 × 4/14 = 4000.'),
  placement('A starts a business with ₹70,000. B joins after 4 months with ₹60,000. If the annual profit is ₹22,000, B\'s share is', 8000, [7000, 9000, 10000], 'A = 70000 × 12, B = 60000 × 8. Ratio = 840 : 480 = 7 : 4. B = 22000 × 4/11 = 8000.'),
  placement('A starts with ₹5,000 and B with ₹7,000. After 6 months A adds ₹1,000 and B withdraws ₹2,000. Out of a profit of ₹23,000 at the end of the year, A gets', 11000, [10000, 12000, 9000], 'A = 5000 × 6 + 6000 × 6 = 66,000. B = 7000 × 6 + 5000 × 6 = 72,000. Ratio 11 : 12. A = 23000 × 11/23 = 11,000.'),
  placement('Two partners share a profit in the ratio 5 : 3. If the difference between their shares is ₹1,200, the total profit is', 4800, [3600, 6000, 9600], 'Difference = 2 parts = 1200, so one part = 600. Total = 8 × 600 = 4800.')
];
build(chapter, quiz);
