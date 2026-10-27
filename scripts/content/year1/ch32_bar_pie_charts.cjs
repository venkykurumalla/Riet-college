const { easy, medium, placement, build } = require('../lib.cjs');

// Datasets used by the quiz. Every answer below is computed from this data, not typed by hand.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const sales = [40, 55, 45, 60, 75, 55];
const S = m => sales[months.indexOf(m)];
const total = sales.reduce((a, b) => a + b, 0);
const income = 40000;
const pie = { Rent: 25, Food: 30, Education: 15, Transport: 10, Savings: 20 };
const amt = k => income * pie[k] / 100;
const ang = k => pie[k] * 3.6;
const round = (x, d = 1) => Math.round(x * 10 ** d) / 10 ** d;
const inr = n => '₹' + n.toLocaleString('en-IN');
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const BAR = 'Bar chart: units of a product sold by a shop in six months.\n\nMonth | Units sold\n' + months.map((m, i) => `${m} | ${sales[i]}`).join('\n') + '\n\n';
const PIE = 'Pie chart: how a family spends a monthly income of ₹40,000.\n\nItem | Share of income\n' + Object.entries(pie).map(([k, v]) => `${k} | ${v}%`).join('\n') + '\n\n';

const chapter = {
  id: 'y1-data-basic-charts', year: 1, category: 'Data Interpretation', num: 32,
  title: 'Basic Charts (Bar and Pie)',
  tagline: 'Year 1 Foundation — Reading bar charts and pie charts and converting between values, percentages and angles',
  minutes: 40,
  morePractice: 'https://www.indiabix.com/data-interpretation/bar-charts/',
  overview: 'A bar chart shows values as bars whose height or length is proportional to the value, so the bars can be compared at a glance. A pie chart is a circle divided into sectors, where each sector shows one item\'s share of the whole. Questions on charts ask you to read values, compare items, compute percentages, and convert between percentages, central angles and actual amounts. The arithmetic is simple, but the reading must be exact.',
  placement: 'Bar and pie chart sets are commonly asked in company aptitude rounds. In the exam the chart is a picture; this chapter shows how to turn the picture into a small table of numbers and answer from it.',
  realWorld: 'Business dashboards, budget summaries, exam result statistics and market-share reports are all drawn as bar and pie charts.',
  objectives: [
    'Read exact values from a bar chart using its scale',
    'Compare bars by difference, ratio and percentage',
    'Convert between percentage, central angle and actual amount in a pie chart',
    'Compute averages and totals from bar values',
    'Combine information from a pie chart with a given total'
  ],
  prereq: ['Reading Data Tables', 'Basic Percentages', 'Basic Ratio'],
  refresher: 'A full circle is 360°. A share of 1% corresponds to 3.6° of the circle. Amount = share ÷ 100 × total.',
  defs: [
    'Bar chart: a chart in which each category is shown as a bar whose length represents its value. The axis scale shows the unit of each gridline.',
    'Pie chart: a circle divided into sectors; the whole circle (360°) represents the total.',
    'Central angle: the angle at the centre of the circle for a sector. Central angle = share ÷ 100 × 360°.',
    'Scale: the value represented by each division of the axis (for example 1 gridline = 10 units).',
    'Share: the part of the total that a category represents, as a percentage.'
  ],
  intuition: 'The picture is only a way to show a small table. The first job is to read the chart into numbers. For a bar chart that means reading each bar against the scale; for a pie chart it means writing down each percentage or angle. After that the question is ordinary arithmetic.',
  mental: 'Always write the values next to the chart in your rough work. Check that the pie shares add to 100% (or the angles add to 360°) before you start. This catches reading errors immediately.',
  formulas: [
    ['Percentage to central angle', 'Angle = Share % × 3.6°', 'One per cent of a circle is 3.6°.', 'Pie chart angle questions.', 'Food 30% → 30 × 3.6 = 108°'],
    ['Angle to percentage', 'Share % = Angle ÷ 3.6', 'Reverse of the previous rule.', 'When angles are given.', '72° → 72 ÷ 3.6 = 20%'],
    ['Amount from share', 'Amount = Share % × Total ÷ 100', 'Needs the total for the whole chart.', 'Rupee or unit amounts from a pie chart.', '25% of ₹40,000 = ₹10,000'],
    ['Percentage increase between bars', '(Later − Earlier) ÷ Earlier × 100', 'The earlier bar is the base.', 'Comparing two bars.', 'Jan 40 → May 75: 35 ÷ 40 × 100 = 87.5%'],
    ['Average of bars', 'Sum of all bars ÷ number of bars', 'Use the exact number of bars.', 'Average questions.', '(40 + 55 + 45 + 60 + 75 + 55) ÷ 6 = 55']
  ],
  narrative: [
    'Read the title, the axes and the scale before anything else. If the scale says "1 division = 10 units", a bar that reaches the fourth division stands for 40 units. In tests, bars usually end on gridlines or halfway between them, so reading to the nearest half-division is enough.',
    'For bar charts, write the value of every bar in a small table in your rough work. Most questions then ask for the highest or lowest bar, the difference between two bars, the average, the ratio of two bars, or the percentage by which one bar exceeds another.',
    'For pie charts, the sectors may be labelled with percentages or with angles. Convert between them with the factor 3.6: 30% is 108°, and 72° is 20%. The shares must add to 100% and the angles to 360°.',
    'To find an actual amount from a pie chart you need the total that the whole circle stands for. The family\'s income is ₹40,000, so the 25% sector for rent is ₹10,000. If the total changes while the shares stay the same, each amount changes in the same proportion.',
    'When two items are compared, decide whether you need the difference (subtract), the ratio (divide and simplify), or the percentage (difference over the base). The base is the earlier or the reference item, and the question wording tells you which.'
  ],
  deep: [
    ['A shortcut for angles', 'Because 360 = 3.6 × 100, the sector angle for any percentage p is 3.6p. For 15%, 3.6 × 15 = 54°. Quick check: 10% is 36°, and 5% is half of that, 18°, so 15% = 36 + 18 = 54°.'],
    ['Why pie charts hide absolute values', 'A pie chart shows shares, not amounts. Two pies with the same shares can stand for very different totals. Always look for the total or the amount of a single sector before answering a question about amounts.']
  ],
  variations: [
    ['Reading a bar', 'Value, highest, lowest.', 'Which month had the highest sales?'],
    ['Comparing bars', 'Difference, ratio, percentage.', 'By what percentage is May above January?'],
    ['Pie angles', 'Percentage ↔ angle.', 'Central angle for 30%.'],
    ['Pie amounts', 'Share of a total.', 'Amount spent on rent.'],
    ['Combined questions', 'Changes in total or share.', 'Savings after a transport increase.']
  ],
  examples: [
    {
      title: 'Percentage and angle in a pie chart',
      q: 'In a pie chart, Food takes 30% of the family\'s monthly income of ₹40,000. Find (a) the central angle of the Food sector and (b) the amount spent on Food.',
      given: ['Share of Food = 30%', 'Total income = ₹40,000'],
      concept: 'Angle = share × 3.6°, Amount = share × total.',
      steps: [
        ['Find the angle', '30 × 3.6 = 108°.', '30 × 3.6 = 108'],
        ['Find the amount', '30% of 40,000 = 0.30 × 40,000 = ₹12,000.']
      ],
      ans: '(a) ' + ang('Food') + '°, (b) ' + inr(amt('Food')),
      why: 'The same 30% is used for both: as a fraction of 360° for the angle and as a fraction of the total for the amount.',
      trap: 'Using 30° as the angle by mixing up percent and degrees.'
    },
    {
      title: 'Percentage difference between two bars',
      q: 'The bar chart shows sales of 40 units in January and 75 units in May. By what percentage are the May sales above the January sales?',
      given: ['Jan = 40', 'May = 75'],
      concept: 'Percentage increase = (Later − Earlier) ÷ Earlier × 100.',
      steps: [
        ['Find the difference', '75 − 40 = 35.'],
        ['Divide by the earlier value', '35 ÷ 40 = 0.875.'],
        ['Convert to a percentage', '0.875 × 100 = 87.5%.']
      ],
      ans: '87.5%',
      why: 'January is the reference, so it is the base.',
      trap: 'Dividing by 75 to get 46.7%.'
    },
    {
      title: 'Average from a bar chart',
      q: 'The shop sold 40, 55, 45, 60, 75 and 55 units in six months. Find the average monthly sales and the number of months with sales above the average.',
      given: ['Values: 40, 55, 45, 60, 75, 55'],
      concept: 'Average = Total ÷ Number of bars.',
      steps: [
        ['Total', '40 + 55 + 45 + 60 + 75 + 55 = ' + total + '.'],
        ['Average', total + ' ÷ 6 = ' + total / 6 + '.'],
        ['Compare each bar', 'Above 55: April (60) and May (75). February and June equal the average, so they are not above it.']
      ],
      ans: 'Average = ' + total / 6 + ' units; 2 months above average',
      why: 'The average is the level to which all bars would be flattened.',
      trap: 'Counting the bars equal to the average as above it.'
    }
  ],
  shortcut: {
    title: '3.6 and 10% blocks',
    trad: 'Compute each sector angle by writing share ÷ 100 × 360 in full.',
    fast: 'Multiply the percentage by 3.6, or use 10% = 36° and build up (15% = 36 + 18 = 54°). For amounts, find 10% of the total and scale.',
    rules: [
      '1% = 3.6°; 10% = 36°; 25% = 90°; 50% = 180°.',
      'Shares add to 100% and angles to 360°; use this as a check.',
      'Percentage change uses the earlier value as the base.',
      'Write bar values in a small table before answering.'
    ]
  },
  mistakes: [
    ['Misreading the scale', 'Treating each gridline as 1 when it is 10.', 'Look at the axis labels before reading any bar.'],
    ['Using the wrong base for percentage', 'Dividing by the later bar.', 'The earlier or reference bar is the base.'],
    ['Confusing angle and percentage', 'Writing 30° for 30%.', 'Multiply by 3.6.'],
    ['Forgetting the total in a pie chart', 'Trying to find an amount from shares alone.', 'Find the total (or one amount) first.']
  ],
  tips: {
    sec: 60,
    elim: 'Use rough values: if you estimate a share as about 30% of 40,000, discard options far from 12,000.',
    advice: 'Do the direct questions first; percentage and ratio questions take slightly longer.',
    insight: 'The "write the data down" habit saves time on every later question in the set.'
  },
  revision: [
    'Read title, scale and units.',
    '1% = 3.6°; angle = share × 3.6.',
    'Amount = share × total ÷ 100.',
    'Percentage change: earlier bar is the base.',
    'Write bar values in a table.'
  ],
  quickFormulas: ['Angle = % × 3.6°', 'Amount = % × Total/100', 'Avg = Sum/n'],
  takeaways: [
    'Convert pictures into numbers.',
    'Use 3.6 for angles.',
    'Know the base for percentages.',
    'Check totals: 100% and 360°.'
  ],
  selfCheck: [
    'Can I find the angle for 15%?',
    'Can I find the amount for a sector from the total?',
    'Can I compute a percentage increase between two bars?'
  ],
  sources: [
    ['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Bar and pie chart data interpretation as a topic area; the data and examples here are original.']
  ]
};

const pct = x => x + '%';

const quiz = [
  easy(BAR + 'In which month were the sales the highest?', 'May', ['Apr', 'Jun', 'Feb'], 'The bars are 40, 55, 45, 60, 75 and 55. The tallest is May (75).'),
  easy(BAR + 'How many units were sold in April?', S('Apr'), [55, 45, 75], 'Read the April bar: 60 units.'),
  easy(BAR + 'In which month were the sales the lowest?', 'Jan', ['Mar', 'Feb', 'Jun'], 'The lowest bar is January (40).'),
  easy(BAR + 'By how many units were the May sales higher than the January sales?', S('May') - S('Jan'), [25, 30, 40], 'May − Jan = 75 − 40 = 35.'),
  easy(PIE + 'What is the central angle of the sector for Food?', ang('Food') + '°', ['90°', '120°', '30°'], 'Angle = 30 × 3.6 = 108°.'),
  easy(PIE + 'How much does the family spend on Rent?', inr(amt('Rent')), ['₹8,000', '₹12,000', '₹6,000'], '25% of ₹40,000 = ₹10,000.'),

  medium(BAR + 'What are the total sales over the six months?', total, [315, 325, 345], 'Total = 40 + 55 + 45 + 60 + 75 + 55 = ' + total + '.'),
  medium(BAR + 'What is the average monthly sales?', total / 6, [50, 52.5, 57.5], 'Average = ' + total + ' ÷ 6 = ' + total / 6 + '.'),
  medium(BAR + 'By what percentage are the May sales above the January sales?', pct(round((S('May') - S('Jan')) / S('Jan') * 100, 1)), ['46.7%', '75%', '35%'], 'Increase = 35. Percentage = 35 ÷ 40 × 100 = 87.5%.'),
  medium(BAR + 'In how many months were the sales strictly above the average?', sales.filter(v => v > total / 6).length, [1, 3, 4], 'The average is ' + total / 6 + '. Only April (60) and May (75) are above it, so the answer is 2.'),
  medium(PIE + 'What is the central angle of the sector for Education?', ang('Education') + '°', ['45°', '60°', '72°'], 'Angle = 15 × 3.6 = 54°.'),
  medium(PIE + 'How much does the family save each month?', inr(amt('Savings')), ['₹6,000', '₹10,000', '₹12,000'], '20% of ₹40,000 = ₹8,000.'),
  medium(PIE + 'What is the ratio of the amount spent on Food to the amount spent on Transport?', (pie.Food / gcd(pie.Food, pie.Transport)) + ' : ' + (pie.Transport / gcd(pie.Food, pie.Transport)), ['2 : 1', '5 : 2', '4 : 1'], 'Food : Transport = 30 : 10 = 3 : 1.'),
  medium(PIE + 'How much is spent on Rent and Education together?', inr(amt('Rent') + amt('Education')), ['₹14,000', '₹18,000', '₹20,000'], '(25% + 15%) of ₹40,000 = 40% of ₹40,000 = ₹16,000.'),

  placement(PIE + 'If the family\'s income rises by 20% and the shares stay the same, the new amount spent on Food will be', inr(income * 1.2 * pie.Food / 100), ['₹12,000', '₹13,200', '₹15,000'], 'New income = ₹48,000. Food = 30% of ₹48,000 = ₹14,400.'),
  placement(PIE + 'If ₹2,000 more is spent on Transport and the same ₹2,000 is taken out of Savings, the new share of Savings is', pct((amt('Savings') - 2000) / income * 100), ['12%', '16%', '18%'], 'New savings = ₹8,000 − ₹2,000 = ₹6,000. Share = 6,000 ÷ 40,000 × 100 = 15%.'),
  placement(BAR + 'The May sales exceed the March sales by what percentage (to one decimal place)?', pct(round((S('May') - S('Mar')) / S('Mar') * 100, 1)), ['40.0%', '60.0%', '75.0%'], 'Difference = 75 − 45 = 30. Percentage = 30 ÷ 45 × 100 = 66.7%.'),
  placement(BAR + 'The ratio of the January sales to the May sales in the simplest form is', (S('Jan') / gcd(S('Jan'), S('May'))) + ' : ' + (S('May') / gcd(S('Jan'), S('May'))), ['4 : 7', '2 : 3', '5 : 8'], 'Jan : May = 40 : 75. Dividing both by 5 gives 8 : 15.'),
  placement(PIE + 'The difference between the central angles of the Food and Savings sectors is', (ang('Food') - ang('Savings')) + '°', ['18°', '30°', '54°'], 'Food = 108° and Savings = 72°. The difference is 36°.'),
  placement(BAR + 'If each unit is sold for ₹500, the revenue from the April sales is', inr(S('Apr') * 500), ['₹27,500', '₹33,000', '₹37,500'], 'Revenue = 60 × ₹500 = ₹30,000.')
];

build(chapter, quiz);
