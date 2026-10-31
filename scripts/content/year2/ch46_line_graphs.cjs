const { easy, medium, placement, build } = require('../lib.cjs');
const { round, sum, ratio, pct, table } = require('../diLib.cjs');

// Dataset: monthly sales (in ₹ lakh) of two stores. All answers are computed from it.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const X = [20, 25, 22, 30, 36, 40];
const Y = [28, 24, 30, 28, 32, 38];
const x = m => X[months.indexOf(m)];
const y = m => Y[months.indexOf(m)];
const T = table('Line graph data: monthly sales (₹ lakh) of two stores X and Y.', ['Month', 'Store X', 'Store Y'], months.map((m, i) => [m, X[i], Y[i]]));
const dx = X.slice(1).map((v, i) => v - X[i]);
const bestRise = months[1 + dx.indexOf(Math.max(...dx))];
const gap = months.map((m, i) => Math.abs(X[i] - Y[i]));
const tot = months.map((m, i) => X[i] + Y[i]);

const chapter = {
  id: 'y2-di-line-graphs', year: 2, category: 'Data Interpretation', num: 46, difficulty: 'Intermediate',
  title: 'Line Graph Interpretation',
  tagline: 'Year 2 — Trends, turning points, rates of change and comparing two lines',
  minutes: 50,
  overview: 'A line graph joins data points with line segments to show how a quantity changes over time. Rising segments show increases, falling segments show decreases, and the steepness shows the size of the change. With two or more lines you can compare trends, find where one line is above the other and where they cross. Questions ask for values, differences, percentage change, averages and trends.',
  placement: 'Line graph sets are commonly asked in company aptitude rounds, and they test whether you can read trends as well as values.',
  realWorld: 'Share prices, monthly sales, temperature records and website traffic are all drawn as line graphs.',
  objectives: [
    'Read values at each point of a line',
    'Identify rising, falling and flat segments',
    'Compute change between months and the greatest rise or fall',
    'Compare two lines month by month',
    'Compute averages, ratios and percentage changes from the data'
  ],
  prereq: ['Bar Graph Interpretation', 'Advanced Averages'],
  refresher: 'Change = later value − earlier value. Percentage change = change ÷ earlier value × 100. Average rate of change = total change ÷ number of intervals.',
  defs: [
    'Data point: a plotted value for one time period.',
    'Trend: the overall direction of the line (rising, falling, steady).',
    'Rate of change: change per time interval; the steeper the segment, the larger the rate.',
    'Intersection: a point where two lines meet (equal values).',
    'Interval: the gap between two consecutive data points.'
  ],
  intuition: 'The picture hides a table. A steep segment is just a large difference between two consecutive points. Reading a line graph is reading the table of its corners and then comparing differences.',
  mental: 'Write each line\'s values in a row. Compute the differences between neighbouring values to find rises and falls. For two lines, compare month by month.',
  formulas: [
    ['Change', 'Change = later − earlier', 'Positive is a rise.', 'Differences.', 'X Mar → Apr: 30 − 22 = +8'],
    ['Percentage change', '(later − earlier) ÷ earlier × 100', 'Earlier is the base.', 'Growth.', 'X Jan → Jun: 20 → 40 = 100%'],
    ['Average rate', '(last − first) ÷ number of intervals', 'Intervals = points − 1.', 'Average increase per month.', '(40 − 20) ÷ 5 = 4'],
    ['Comparing lines', 'Compare values in the same month', 'Which line is above?', 'Two-line questions.', 'X > Y in 4 months'],
    ['Projection', 'Next value = last value + assumed change', 'Use the stated change.', 'Forecast questions.', 'Y: 38 + 6 = 44']
  ],
  narrative: [
    'First convert the lines to a table. Store X sold 20, 25, 22, 30, 36 and 40 lakh in the six months; store Y sold 28, 24, 30, 28, 32 and 38 lakh.',
    'To find the biggest rise, compute the month-to-month changes. For X they are +5, −3, +8, +6 and +4, so the greatest rise is from March to April (+8). Y fell in February (−4) and April (−2).',
    'For a percentage change, use the earlier value as base: X rose from 20 to 40 between January and June, a 100% increase. The average monthly increase is (40 − 20) ÷ 5 = 4 lakh.',
    'To compare lines, check month by month. X was higher than Y in February, April, May and June, which is 4 months. The two lines were closest in February (a gap of 1 lakh).',
    'For a projection, add the stated change to the last value. If Y rises in July by the same amount as from May to June (6 lakh), July sales would be 38 + 6 = 44 lakh.'
  ],
  deep: [
    ['Slope and steepness', 'Equal horizontal spacing means the steepest segment is the largest vertical change. Compare segments by their differences.'],
    ['Trend vs fluctuation', 'A series can rise overall while falling in some months. Quote both the trend (overall) and the fluctuations when asked.']
  ],
  variations: [
    ['Reading values', 'Direct.', 'X in March'],
    ['Biggest rise or fall', 'Differences.', 'X Mar → Apr'],
    ['Percentage change', 'Earlier base.', 'X Jan → Jun'],
    ['Two-line comparison', 'Month by month.', 'Months with X > Y'],
    ['Projection', 'Add change.', 'Y in July']
  ],
  examples: [
    {
      title: 'Greatest rise',
      q: 'In which month did store X show the greatest increase in sales compared with the previous month?',
      given: ['X: 20, 25, 22, 30, 36, 40'],
      concept: 'Month-to-month differences.',
      steps: [['Differences', '+5, −3, +8, +6, +4.'], ['Largest', '+8, from March to April.']],
      ans: 'April', why: 'April minus March is the biggest rise.', trap: 'Choosing the month of the highest sale.'
    },
    {
      title: 'Average rate of change',
      q: 'What was the average monthly increase in sales of store X from January to June?',
      given: ['20 → 40 over 5 intervals'],
      concept: 'Total change ÷ intervals.',
      steps: [['Total change', '40 − 20 = 20.'], ['Intervals', '5.'], ['Average', '20 ÷ 5 = 4 lakh.']],
      ans: '₹4 lakh', why: 'Six points make five intervals.', trap: 'Dividing by 6.'
    },
    {
      title: 'Two-line comparison',
      q: 'In how many months was the sales of X more than the sales of Y?',
      given: ['Compare each month'],
      concept: 'Month-by-month test.',
      steps: [['Compare', 'Jan 20 < 28; Feb 25 > 24; Mar 22 < 30; Apr 30 > 28; May 36 > 32; Jun 40 > 38.'], ['Count', 'February, April, May, June: 4 months.']],
      ans: '4', why: 'Each month is tested separately.', trap: 'Comparing totals.'
    }
  ],
  shortcut: {
    title: 'Row of differences',
    trad: 'Judge by eye from the graph.',
    fast: 'Write the values in a row, compute the differences, and use the row to answer rise, fall, steepest and trend questions.',
    rules: ['Average rate uses intervals.', 'Percentage change: earlier base.', 'Compare lines month by month.', 'Projection: add the stated change.']
  },
  mistakes: [
    ['Dividing by points not intervals', 'Using 6 instead of 5.', 'Intervals = points − 1.'],
    ['Wrong base', 'Using the later value.', 'Use the earlier.'],
    ['Reading peak as biggest rise', 'Confusing high with steep.', 'Use differences.'],
    ['Ignoring the other line', 'Comparing within one line only.', 'Check the question.']
  ],
  tips: { sec: 70, elim: 'The biggest rise cannot be in a month where the line fell.', advice: 'Compute the difference row first.', insight: 'Trend questions test reading, not heavy arithmetic.' },
  revision: ['Table of points.', 'Differences.', 'Percentage change base.', 'Intervals.', 'Compare lines.'],
  quickFormulas: ['(last − first)/intervals'],
  takeaways: ['Corners are the data.', 'Differences show trends.', 'Earlier base.', 'Intervals, not points.'],
  selfCheck: ['Can I find the steepest rise?', 'Can I compute an average rate?', 'Can I compare two lines?'],
  sources: [['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Line graph data interpretation; data and examples are original.']]
};

const quiz = [
  easy(T + 'What were the sales (₹ lakh) of store X in March?', x('Mar'), [20, 25, 30], 'Row Mar, column X: 22.'),
  easy(T + 'What were the sales (₹ lakh) of store Y in June?', y('Jun'), [32, 40, 36], 'Row Jun, column Y: 38.'),
  easy(T + 'In which month were the sales of store X the highest?', 'Jun', ['May', 'Apr', 'Mar'], 'X\'s values rise to 40 in June, the highest.'),
  easy(T + 'In which month were the sales of store Y the lowest?', 'Feb', ['Jan', 'Mar', 'Apr'], 'Y\'s values are 28, 24, 30, 28, 32, 38. The lowest is 24 in February.'),
  easy(T + 'By how much (₹ lakh) did the sales of store X increase from January to June?', x('Jun') - x('Jan'), [15, 18, 25], '40 − 20 = 20.'),
  easy(T + 'What were the combined sales (₹ lakh) of the two stores in May?', x('May') + y('May'), [64, 66, 72], '36 + 32 = 68.'),

  medium(T + 'In which month did store X show the greatest increase over the previous month?', bestRise, ['Feb', 'May', 'Jun'], 'X\'s changes are +5, −3, +8, +6, +4. The greatest is +8 in April.'),
  medium(T + 'By what percentage did the sales of store X increase from January to June?', pct((x('Jun') - x('Jan')) / x('Jan') * 100, 0), ['50%', '80%', '120%'], '(40 − 20) ÷ 20 × 100 = 100%.'),
  medium(T + 'What was the average monthly sales (₹ lakh) of store Y over the six months?', round(sum(Y) / 6, 1), [28, 32, 34], '(28 + 24 + 30 + 28 + 32 + 38) ÷ 6 = 180 ÷ 6 = 30.'),
  medium(T + 'In how many months were the sales of X more than those of Y?', months.filter((m, i) => X[i] > Y[i]).length, [2, 3, 5], 'X > Y in February, April, May and June: 4 months.'),
  medium(T + 'In which month was the difference between the sales of the two stores the smallest?', months[gap.indexOf(Math.min(...gap))], ['Jan', 'Apr', 'Jun'], 'The gaps are 8, 1, 8, 2, 4, 2. The smallest is 1 in February.'),
  medium(T + 'What was the average monthly increase (₹ lakh) in the sales of X from January to June?', (x('Jun') - x('Jan')) / 5, [3, 5, 6], '(40 − 20) ÷ 5 = 4.'),
  medium(T + 'In how many months did the sales of store Y decrease compared with the previous month?', Y.slice(1).filter((v, i) => v < Y[i]).length, [1, 3, 4], 'Y fell in February (28 → 24) and April (30 → 28): 2 months.'),
  medium(T + 'The total sales (₹ lakh) of store X over the six months are', sum(X), [160, 170, 180], '20 + 25 + 22 + 30 + 36 + 40 = 173.'),

  placement(T + 'In March, the sales of Y were what percentage more than those of X (to one decimal place)?', pct((y('Mar') - x('Mar')) / x('Mar') * 100), ['26.7%', '30.0%', '40.0%'], '(30 − 22) ÷ 22 × 100 = 36.4%.'),
  placement(T + 'The ratio of the sales of X to those of Y in June (simplest form) is', ratio(x('Jun'), y('Jun')), ['10 : 9', '21 : 20', '7 : 6'], '40 : 38 = 20 : 19.'),
  placement(T + 'In April, the sales of X were what percentage of the sales of Y (to one decimal place)?', pct(x('Apr') / y('Apr') * 100), ['100.0%', '95.0%', '110.5%'], '30 ÷ 28 × 100 = 107.1%.'),
  placement(T + 'In which month was the combined sales of the two stores the lowest?', months[tot.indexOf(Math.min(...tot))], ['Feb', 'Mar', 'Apr'], 'The combined sales are 48, 49, 52, 58, 68 and 78. The lowest is in January.'),
  placement(T + 'If the sales of Y rise in July by the same amount as from May to June, the July sales (₹ lakh) will be', y('Jun') + (y('Jun') - y('May')), [40, 42, 46], 'The May to June rise is 6. July = 38 + 6 = 44.'),
  placement(T + 'The total sales of Y exceed the total sales of X over the six months by (₹ lakh)', sum(Y) - sum(X), [5, 9, 10], 'Y total = 180 and X total = 173. The difference is 7.')
];
build(chapter, quiz);
