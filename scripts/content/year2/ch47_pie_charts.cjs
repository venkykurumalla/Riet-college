const { easy, medium, placement, build } = require('../lib.cjs');
const { round, ratio, pct, table } = require('../diLib.cjs');

// Dataset: a company's expenditure shown in two pie charts. All answers are computed from it.
const items = ['Salary', 'Raw material', 'Rent', 'Marketing', 'Miscellaneous'];
const P22 = { total: 500000, share: [30, 25, 12, 18, 15] };
const P23 = { total: 600000, share: [28, 27, 10, 20, 15] };
const amt = (p, it) => p.total * p.share[items.indexOf(it)] / 100;
const ang = (p, it) => p.share[items.indexOf(it)] * 3.6;
const inr = n => '₹' + n.toLocaleString('en-IN');
const T = table('Pie chart data: share of each item in the company\'s total expenditure.', ['Item', '2022 (total ₹5,00,000)', '2023 (total ₹6,00,000)'], items.map((it, i) => [it, P22.share[i] + '%', P23.share[i] + '%']));
const incr = items.map(it => (amt(P23, it) - amt(P22, it)) / amt(P22, it) * 100);

const chapter = {
  id: 'y2-di-pie-charts', year: 2, category: 'Data Interpretation', num: 47, difficulty: 'Intermediate',
  title: 'Pie Chart Interpretation',
  tagline: 'Year 2 — Sectors, percentages, angles and comparing two pie charts',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/data-interpretation/pie-charts/',
  overview: 'A pie chart shows how a total is divided into parts. Each sector\'s angle at the centre (out of 360°) corresponds to its share of the total. In Year 2 you meet two pie charts side by side, for two years, with different totals. A common trap is comparing percentages across the two charts without taking the totals into account: a smaller percentage of a larger total can be a larger amount.',
  placement: 'Pie chart sets are commonly asked in company aptitude rounds, often with two pies and a request to compare amounts across them.',
  realWorld: 'Budget breakdowns, market shares and expense reports are shown as pie charts.',
  objectives: [
    'Convert percentages to angles (× 3.6) and back (÷ 3.6)',
    'Find amounts from share and total',
    'Compare amounts across two pie charts with different totals',
    'Compute percentage change in amounts, not in shares',
    'Compute ratios of amounts'
  ],
  prereq: ['Basic Charts (Bar and Pie)', 'Percentage-Based DI basics'],
  refresher: 'Amount = share ÷ 100 × total. Angle = share × 3.6°. Percentage change = (new − old) ÷ old × 100.',
  defs: [
    'Sector: one slice of the pie, representing one category.',
    'Central angle: the angle at the centre; 360° is the whole.',
    'Share: the sector as a percentage of the total.',
    'Percentage points: the difference between two shares (28% to 30% is 2 points).',
    'Absolute amount: share × total; it can rise even when the share falls.'
  ],
  intuition: 'The pie tells you shares, not amounts. To compare years you must convert each share to an amount using its own total. A share that falls from 30% to 28% can still mean more money if the total has grown.',
  mental: 'Make a table of amounts for each year: share × total. Then every comparison is between two cells of this table.',
  formulas: [
    ['Angle and share', 'Angle = share × 3.6°;  Share = angle ÷ 3.6', 'Whole pie = 100% = 360°.', 'Angle questions.', '30% → 108°'],
    ['Amount', 'Amount = share ÷ 100 × total', 'Use that year\'s total.', 'Amounts.', '30% of ₹5,00,000 = ₹1,50,000'],
    ['Change in amount', '(Amount₂₀₂₃ − Amount₂₀₂₂) ÷ Amount₂₀₂₂ × 100', 'Convert shares to amounts first.', 'Growth questions.', 'Marketing: 90,000 → 1,20,000 = 33.3%'],
    ['Ratio of amounts', 'Simplify amount₁ : amount₂', 'Different totals allowed.', 'Ratio questions.', 'Salary 2022 : 2023 = 25 : 28'],
    ['Percentage points', 'Difference of shares', 'Not the same as percentage change.', 'Share comparisons.', '30% → 28% is 2 points']
  ],
  narrative: [
    'Start with the shares and the total. In 2022 the total expenditure is ₹5,00,000 and salary is 30%, so the salary amount is ₹1,50,000 and its sector angle is 30 × 3.6 = 108°.',
    'To compare years, build a table of amounts. In 2023 (total ₹6,00,000), salary is 28%, which is ₹1,68,000. So salary rose in amount even though its share fell from 30% to 28%.',
    'Percentage change is computed on amounts. Marketing was 18% of ₹5,00,000 = ₹90,000 and 20% of ₹6,00,000 = ₹1,20,000. The increase is 30,000 ÷ 90,000 = 33.3%, which is larger than that of any other item.',
    'For rent, the shares are 12% and 10%. The amounts are ₹60,000 in both years, so the rent did not change in rupees although its share fell.',
    'For ratios of amounts across the two pies, use the amounts: Salary in 2022 to salary in 2023 is 1,50,000 : 1,68,000 = 25 : 28.'
  ],
  deep: [
    ['Share falls, amount rises', 'If the total grows faster than the share falls, the amount rises. Always compute the amounts before commenting on growth.'],
    ['Angles across pies', 'Angles depend on shares only. The same angle in two pies with different totals stands for different amounts.']
  ],
  variations: [
    ['Angles and shares', 'Convert.', 'Salary 30% → 108°'],
    ['Amounts', 'Share × total.', 'Rent in 2022'],
    ['Comparing years', 'Amount table.', 'Marketing 2022 vs 2023'],
    ['Percentage change in amount', 'Not in shares.', 'Marketing'],
    ['Ratios', 'Amounts.', 'Salary 2022 : 2023']
  ],
  examples: [
    {
      title: 'Angle and amount',
      q: 'In 2022, salary was 30% of the total expenditure of ₹5,00,000. Find the central angle and the amount.',
      given: ['30%', 'Total ₹5,00,000'],
      concept: '3.6 per cent and share × total.',
      steps: [['Angle', '30 × 3.6 = 108°.'], ['Amount', '30% of 5,00,000 = ₹1,50,000.']],
      ans: '108° and ' + inr(amt(P22, 'Salary')), why: 'Angle uses the share; amount uses the total.', trap: 'Using 30° or ₹30,000.'
    },
    {
      title: 'Compare amounts across years',
      q: 'By what percentage did the expenditure on marketing increase from 2022 to 2023 (to one decimal place)?',
      given: ['2022: 18% of 5,00,000', '2023: 20% of 6,00,000'],
      concept: 'Convert to amounts first.',
      steps: [['2022 amount', '₹90,000.'], ['2023 amount', '₹1,20,000.'], ['Percentage change', '30,000 ÷ 90,000 × 100 = 33.3%.']],
      ans: pct((amt(P23, 'Marketing') - amt(P22, 'Marketing')) / amt(P22, 'Marketing') * 100), why: 'Percentage change is on amounts.', trap: 'Using shares: (20 − 18)/18 = 11.1%.'
    },
    {
      title: 'Share falls, amount same',
      q: 'The share of rent fell from 12% to 10%. What happened to the amount spent on rent?',
      given: ['2022: 12% of 5,00,000', '2023: 10% of 6,00,000'],
      concept: 'Compute both amounts.',
      steps: [['2022', '₹60,000.'], ['2023', '₹60,000.']],
      ans: 'It stayed the same at ' + inr(amt(P22, 'Rent')), why: 'The total grew in the same proportion as the share fell.', trap: 'Concluding that rent fell.'
    }
  ],
  shortcut: {
    title: 'Amount table first',
    trad: 'Compare percentages directly.',
    fast: 'Convert each share to an amount using its own total, then compare, take ratios and compute percentage changes on the amounts.',
    rules: ['Angle = share × 3.6.', 'Amount = share × total.', 'Percentage change on amounts.', 'Percentage points for share differences.']
  },
  mistakes: [
    ['Comparing shares across different totals', 'Concluding amounts from shares.', 'Compute amounts.'],
    ['Confusing percentage points and percentage change', 'Treating 2 points as 2%.', 'Use amounts for change.'],
    ['Using the wrong total', 'Using the other year\'s total.', 'Use the year of the pie.'],
    ['Forgetting 3.6', 'Using 1° per 1%.', 'Multiply by 3.6.']
  ],
  tips: { sec: 75, elim: 'If the totals differ, reject options that compare shares as if they were amounts.', advice: 'Build the amount table first.', insight: 'Two-pie sets are mostly about not mixing shares and amounts.' },
  revision: ['Angle = share × 3.6.', 'Amount = share × total.', 'Compare amounts.', 'Points vs change.', 'Ratio of amounts.'],
  quickFormulas: ['Angle = % × 3.6', 'Amount = % × total/100'],
  takeaways: ['Amount table.', 'Use each total.', 'Percentage change on amounts.', 'Angles from shares.'],
  selfCheck: ['Can I find an angle from a share?', 'Can I compare amounts across pies?', 'Can I compute a percentage change in an amount?'],
  sources: [['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Pie chart data interpretation; data and examples are original.']]
};

const quiz = [
  easy(T + 'What is the central angle of the sector for Salary in 2022?', ang(P22, 'Salary') + '°', ['90°', '120°', '30°'], '30 × 3.6 = 108°.'),
  easy(T + 'How much was spent on Rent in 2022?', inr(amt(P22, 'Rent')), ['₹50,000', '₹72,000', '₹40,000'], '12% of ₹5,00,000 = ₹60,000.'),
  easy(T + 'Which item had the largest share of expenditure in 2022?', 'Salary', ['Raw material', 'Marketing', 'Miscellaneous'], 'Salary has 30%, the largest share.'),
  easy(T + 'How much was spent on Raw material in 2023?', inr(amt(P23, 'Raw material')), ['₹1,50,000', '₹1,80,000', '₹1,25,000'], '27% of ₹6,00,000 = ₹1,62,000.'),
  easy(T + 'Rent and Miscellaneous together made up what percentage of the 2022 expenditure?', (P22.share[2] + P22.share[4]) + '%', ['25%', '30%', '35%'], '12% + 15% = 27%.'),
  easy(T + 'What is the central angle of the sector for Marketing in 2023?', ang(P23, 'Marketing') + '°', ['60°', '75°', '90°'], '20 × 3.6 = 72°.'),

  medium(T + 'By how much (in ₹) did the expenditure on Marketing increase from 2022 to 2023?', inr(amt(P23, 'Marketing') - amt(P22, 'Marketing')), ['₹20,000', '₹40,000', '₹45,000'], '₹1,20,000 − ₹90,000 = ₹30,000.'),
  medium(T + 'By what percentage did the expenditure on Marketing increase from 2022 to 2023 (to one decimal place)?', pct(incr[3]), ['11.1%', '25.0%', '30.0%'], '30,000 ÷ 90,000 × 100 = 33.3%.'),
  medium(T + 'The share of Rent fell from 12% to 10%. The amount spent on Rent', 'stayed the same', ['rose', 'fell', 'doubled'], 'Both amounts are ₹60,000 (12% of ₹5,00,000 and 10% of ₹6,00,000).'),
  medium(T + 'The ratio of the amount spent on Salary in 2022 to that in 2023 (simplest form) is', ratio(amt(P22, 'Salary'), amt(P23, 'Salary')), ['5 : 6', '15 : 17', '10 : 11'], '₹1,50,000 : ₹1,68,000 = 25 : 28.'),
  medium(T + 'By how much (in ₹) did the total expenditure increase from 2022 to 2023?', inr(P23.total - P22.total), ['₹50,000', '₹1,20,000', '₹80,000'], '₹6,00,000 − ₹5,00,000 = ₹1,00,000.'),
  medium(T + 'Which item showed the highest percentage increase in amount from 2022 to 2023?', items[incr.indexOf(Math.max(...incr))], ['Salary', 'Raw material', 'Miscellaneous'], 'The percentage increases are ' + incr.map(v => round(v, 1) + '%').join(', ') + '. Marketing has the highest.'),
  medium(T + 'The amount spent on Salary in 2023 was', inr(amt(P23, 'Salary')), ['₹1,50,000', '₹1,80,000', '₹1,40,000'], '28% of ₹6,00,000 = ₹1,68,000.'),
  medium(T + 'The amount spent on Miscellaneous in 2023 exceeded that in 2022 by', inr(amt(P23, 'Miscellaneous') - amt(P22, 'Miscellaneous')), ['₹10,000', '₹20,000', '₹25,000'], '₹90,000 − ₹75,000 = ₹15,000.'),

  placement(T + 'In 2023, the expenditure on Raw material was what percentage of that on Salary (to one decimal place)?', pct(amt(P23, 'Raw material') / amt(P23, 'Salary') * 100), ['90.0%', '100.0%', '104.0%'], '1,62,000 ÷ 1,68,000 × 100 = 96.4%.'),
  placement(T + 'In 2022, the combined amount spent on Salary and Raw material was', inr(amt(P22, 'Salary') + amt(P22, 'Raw material')), ['₹2,50,000', '₹3,00,000', '₹2,00,000'], '₹1,50,000 + ₹1,25,000 = ₹2,75,000.'),
  placement(T + 'If the expenditure on Marketing in 2024 is 25% more than in 2023, it will be', inr(amt(P23, 'Marketing') * 1.25), ['₹1,35,000', '₹1,44,000', '₹1,60,000'], '₹1,20,000 × 1.25 = ₹1,50,000.'),
  placement(T + 'The difference between the central angles of Salary in 2022 and Salary in 2023 is', round(ang(P22, 'Salary') - ang(P23, 'Salary'), 1) + '°', ['3.6°', '10.8°', '2°'], '108° − 100.8° = 7.2°.'),
  placement(T + 'The ratio of the amount on Marketing in 2023 to that on Miscellaneous in 2022 (simplest form) is', ratio(amt(P23, 'Marketing'), amt(P22, 'Miscellaneous')), ['4 : 3', '3 : 2', '16 : 9'], '₹1,20,000 : ₹75,000 = 8 : 5.'),
  placement(T + 'In 2023, Salary and Marketing together made up what percentage of the total expenditure?', (P23.share[0] + P23.share[3]) + '%', ['45%', '50%', '55%'], '28% + 20% = 48%.')
];
build(chapter, quiz);
