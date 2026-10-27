const { easy, medium, placement, build } = require('../lib.cjs');

// Dataset used by the quiz. Every answer below is computed from this data, not typed by hand.
const years = [2020, 2021, 2022, 2023, 2024];
const rev = [80, 100, 120, 150, 180];
const exp = [60, 70, 90, 110, 135];
const R = y => rev[years.indexOf(y)];
const E = y => exp[years.indexOf(y)];
const P = y => R(y) - E(y);
const sum = a => a.reduce((x, y) => x + y, 0);
const round = (x, d = 1) => Math.round(x * 10 ** d) / 10 ** d;
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const pct = x => x + '%';
const grow = (a, b) => (b - a) / a * 100;

const SET = 'Revenue and expenses of a company (₹ lakh):\n\nYear | Revenue | Expenses\n' + years.map(y => `${y} | ${R(y)} | ${E(y)}`).join('\n') + '\n\nProfit = Revenue − Expenses.\n\n';

const chapter = {
  id: 'y1-data-basic-di', year: 1, category: 'Data Interpretation', num: 33,
  title: 'Basic Data Interpretation Sets',
  tagline: 'Year 1 Foundation — Solving a full set of questions from one table, step by step',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/data-interpretation/table-charts/',
  overview: 'A data interpretation (DI) set gives one table or chart and then asks four to five questions about it. The questions in a basic set are of a few standard kinds: read a value, find a difference, compute a percentage change, work out an average, form a ratio, or derive a new quantity such as profit from two given columns. This chapter shows how to approach a whole set efficiently: read once, extract what is common, answer the easy questions first and keep a running record of derived values.',
  placement: 'DI sets are commonly asked in company aptitude rounds, and a single set can carry as many marks as four or five separate questions. A sound routine turns the set into a reliable source of marks.',
  realWorld: 'Company annual reports, project dashboards and performance reviews present data in exactly this form, and decisions are made from the derived figures such as profit and growth rate.',
  objectives: [
    'Read a data set once and note its title, units and derived quantities',
    'Derive new columns (profit, growth, share) once and reuse them',
    'Choose between absolute change, percentage change and ratio',
    'Solve the easiest questions first and use approximation when options allow',
    'Check that the answers fit the data (sign, size, units)'
  ],
  prereq: ['Reading Data Tables', 'Basic Charts (Bar and Pie)', 'Basic Percentages', 'Basic Ratio', 'Basic Averages'],
  refresher: 'Profit = Revenue − Expenses. Percentage profit on expenses = Profit ÷ Expenses × 100. Percentage growth = (New − Old) ÷ Old × 100. Average = Total ÷ Count.',
  defs: [
    'Data set: the table or chart together with its title, units and any notes.',
    'Derived quantity: a value computed from the given data, such as profit (revenue − expenses) or growth rate.',
    'Absolute change: the difference between two values. Relative (percentage) change: the difference divided by the earlier value.',
    'Share: a part as a percentage of a whole (for example expenses as a percentage of revenue).',
    'Base: the value that a percentage or ratio is measured against.'
  ],
  intuition: 'In a DI set, the questions are linked: the same few derived values (profit each year, total revenue, growth rate) keep reappearing. Work them out once, write them next to the table, and every later question becomes a single look-up or one-step calculation.',
  mental: 'Treat the table as a small spreadsheet. Add a new column in your rough work for each derived quantity that is likely to be needed (here, Profit). Fill it for all rows once.',
  formulas: [
    ['Derived column', 'Profit = Revenue − Expenses', 'Compute for each row once.', 'Questions about profit, profit growth, profit share.', '2021: 100 − 70 = 30'],
    ['Percentage change', '(New − Old) ÷ Old × 100', 'The earlier value is the base.', 'Growth of revenue, expenses or profit.', 'Revenue 2020 → 2022: 40 ÷ 80 × 100 = 50%'],
    ['Percentage on expenses or revenue', 'Profit ÷ Expenses × 100 or Profit ÷ Revenue × 100', 'Read which base the question uses.', 'Profit percentage questions.', '2021: 30 ÷ 100 = 30% of revenue; 30 ÷ 70 ≈ 42.9% of expenses'],
    ['Average over years', 'Sum of values ÷ number of years', 'Count the years in the table.', 'Average annual revenue or profit.', '(80 + 100 + 120 + 150 + 180) ÷ 5 = 126'],
    ['Average annual growth (absolute)', '(Last − First) ÷ number of intervals', 'Intervals = years − 1.', 'Average increase per year.', '(180 − 80) ÷ 4 = 25']
  ],
  narrative: [
    'Spend the first 20 to 30 seconds on the whole set. Read the title, the units (here ₹ lakh) and any note such as "Profit = Revenue − Expenses". Then scan the questions to see which derived quantities you will need. In this set, profit appears in many questions, so computing it for every year first is a good investment.',
    'Solve the questions in order of difficulty. Direct readings (revenue in 2022, expenses in 2023) take seconds. Differences and totals come next. Percentage and ratio questions take longer and may be left for the end if time is short.',
    'Percentage questions need the right base. "Percentage rise in revenue from 2020 to 2022" uses 2020 as the base: 40 ÷ 80 = 50%. "Profit as a percentage of revenue" uses revenue as the base; "profit as a percentage of expenses" uses expenses. Read the wording carefully.',
    'Averages and growth rates: the average annual revenue is the total divided by the number of years. The average yearly increase uses the number of intervals, one fewer than the number of years: (180 − 80) ÷ 4 = 25.',
    'Check the reasonableness of every answer. A percentage change should have the same sign as the movement of the data; an average must lie between the smallest and largest values; and a ratio of two numbers close to each other should be close to 1.'
  ],
  deep: [
    ['Compare growth rates carefully', 'A year with a large absolute increase need not have a large percentage increase. Revenue rose by 30 in both 2023 and 2024, but the percentage increase was 25% in 2023 and 20% in 2024, because the base was larger in 2024.'],
    ['Using approximation', 'If options are far apart, round values before computing. For example, 45 ÷ 135 is exactly one-third, so 33.3%. A quick fraction often gives the answer with no long division.']
  ],
  variations: [
    ['Direct and derived values', 'Read or compute profit.', 'Profit in 2021.'],
    ['Growth questions', 'Percentage change between two years.', 'Revenue 2020 → 2022.'],
    ['Average questions', 'Average annual revenue or profit.', 'Average revenue over five years.'],
    ['Ratio and share questions', 'Ratios and percentages of a total.', 'Revenue : expenses in 2024.'],
    ['Projection questions', 'Apply a growth rate to forecast.', 'Revenue grows 20% next year.']
  ],
  examples: [
    {
      title: 'Derived column and percentage on expenses',
      q: 'Using the revenue and expenses table, find the profit in 2021 and the profit as a percentage of expenses in that year (to one decimal place).',
      given: ['2021: Revenue = 100, Expenses = 70 (₹ lakh)'],
      concept: 'Profit = Revenue − Expenses; Profit % on expenses = Profit ÷ Expenses × 100.',
      steps: [
        ['Profit', '100 − 70 = 30.'],
        ['Divide by expenses', '30 ÷ 70 = 0.4286.'],
        ['Convert', '0.4286 × 100 = 42.9%.']
      ],
      ans: 'Profit = ₹30 lakh; ' + round(P(2021) / E(2021) * 100, 1) + '% of expenses',
      why: 'The question says "on expenses", so expenses is the base.',
      trap: 'Dividing by revenue to get 30%.'
    },
    {
      title: 'Percentage change in revenue',
      q: 'By what percentage did revenue rise between 2020 and 2022?',
      given: ['2020: 80', '2022: 120'],
      concept: 'Percentage change = (New − Old) ÷ Old × 100.',
      steps: [
        ['Increase', '120 − 80 = 40.'],
        ['Divide by the old value', '40 ÷ 80 = 0.5.'],
        ['Convert', '0.5 × 100 = 50%.']
      ],
      ans: '50%',
      why: 'The old value, 80, is the base.',
      trap: 'Dividing by 120 to get 33.3%.'
    },
    {
      title: 'Average and total',
      q: 'Find the average annual revenue and the total profit over the five years.',
      given: ['Revenue: 80, 100, 120, 150, 180', 'Profit: 20, 30, 30, 40, 45'],
      concept: 'Average = Total ÷ Count; Total = sum.',
      steps: [
        ['Total revenue', '80 + 100 + 120 + 150 + 180 = ' + sum(rev) + '.'],
        ['Average revenue', sum(rev) + ' ÷ 5 = ' + sum(rev) / 5 + '.'],
        ['Total profit', '20 + 30 + 30 + 40 + 45 = ' + sum(years.map(P)) + '.']
      ],
      ans: 'Average revenue = ₹' + sum(rev) / 5 + ' lakh; total profit = ₹' + sum(years.map(P)) + ' lakh',
      why: 'The profit column derived earlier makes the total a simple addition.',
      trap: 'Dividing the total revenue by 4 (the number of intervals).'
    }
  ],
  shortcut: {
    title: 'Build the derived column first',
    trad: 'Calculate profit afresh in each question.',
    fast: 'Write the derived column (profit) beside the table once. Every later question then needs only a look-up or one step. Use simple fractions (45/135 = 1/3) to avoid long division.',
    rules: [
      'Read title, units and notes first.',
      'Derive common quantities once and reuse them.',
      'Percentage change: earlier value is the base; shares: whole is the base.',
      'Average growth per year uses the number of intervals.'
    ]
  },
  mistakes: [
    ['Recalculating the same value repeatedly', 'Working out profit in every question.', 'Add a derived column once.'],
    ['Wrong base for a percentage', 'Using revenue when the question says "on expenses".', 'Underline the base words in the question.'],
    ['Counting years instead of intervals', 'Dividing by 5 when asked for the average annual increase.', 'Use years − 1 for growth over intervals.'],
    ['Skipping the sanity check', 'Accepting a percentage above 100 for a share.', 'Check that the answer lies in a sensible range.']
  ],
  tips: {
    sec: 90,
    elim: 'Round values and compare with the options before exact calculations; the options in DI are usually spread out.',
    advice: 'Attempt the entire set in one go, easy questions first. Switching sets costs time because you must re-read the data.',
    insight: 'A neat side table of derived values is the biggest time-saver in a DI set.'
  },
  revision: [
    'Read the data once: title, units, notes.',
    'Derive common quantities once.',
    'Know the base in every percentage.',
    'Growth per year uses intervals.',
    'Check the answer for sense.'
  ],
  quickFormulas: ['Profit = Revenue − Expenses', '% change = (new − old)/old × 100', 'Average growth = (last − first)/(years − 1)'],
  takeaways: [
    'Plan the set before answering.',
    'Derived columns save time.',
    'The base decides the percentage.',
    'Sanity-check each answer.'
  ],
  selfCheck: [
    'Can I compute profit for every year and total profit?',
    'Can I say which base the question uses for a percentage?',
    'Can I find the average annual increase over a period?'
  ],
  sources: [
    ['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Data interpretation sets as a topic area; the data and examples here are original.']
  ]
};

const ratio = (a, b) => (a / gcd(a, b)) + ' : ' + (b / gcd(a, b));
const exGrowth = y => grow(E(y - 1), E(y));
const bestExpYear = years.slice(1).reduce((b, y) => (exGrowth(y) > exGrowth(b) ? y : b));
const bestProfitOnExp = years.reduce((b, y) => (P(y) / E(y) > P(b) / E(b) ? y : b));

const quiz = [
  easy(SET + 'What was the revenue in 2022 (₹ lakh)?', R(2022), [100, 110, 150], 'Read the 2022 row: revenue = 120.'),
  easy(SET + 'What were the expenses in 2023 (₹ lakh)?', E(2023), [90, 100, 135], 'Read the 2023 row: expenses = 110.'),
  easy(SET + 'What was the profit in 2021 (₹ lakh)?', P(2021), [20, 25, 40], 'Profit = 100 − 70 = 30.'),
  easy(SET + 'In which year was the revenue the highest?', 2024, [2022, 2023, 2020], 'The revenue values rise every year, so the highest is in 2024 (180).'),
  easy(SET + 'In which year was the profit the lowest?', 2020, [2021, 2022, 2023], 'Profits are 20, 30, 30, 40 and 45. The lowest is in 2020.'),
  easy(SET + 'By how much did the revenue increase from 2023 to 2024 (₹ lakh)?', R(2024) - R(2023), [20, 25, 35], 'Increase = 180 − 150 = 30.'),

  medium(SET + 'By what percentage did the revenue increase from 2020 to 2022?', pct(round(grow(R(2020), R(2022)), 1)), ['33.3%', '40%', '60%'], 'Increase = 40. Percentage = 40 ÷ 80 × 100 = 50%.'),
  medium(SET + 'What is the average annual revenue over the five years (₹ lakh)?', sum(rev) / 5, [120, 124, 130], 'Total revenue = ' + sum(rev) + '. Average = ' + sum(rev) + ' ÷ 5 = ' + sum(rev) / 5 + '.'),
  medium(SET + 'What is the total profit over the five years (₹ lakh)?', sum(years.map(P)), [150, 160, 175], 'Profits: 20, 30, 30, 40, 45. Total = ' + sum(years.map(P)) + '.'),
  medium(SET + 'In 2021, the profit was what percentage of the revenue?', pct(round(P(2021) / R(2021) * 100, 1)), ['25%', '35%', '42.9%'], 'Profit % of revenue = 30 ÷ 100 × 100 = 30%.'),
  medium(SET + 'What is the ratio of revenue to expenses in 2024 in the simplest form?', ratio(R(2024), E(2024)), ['3 : 2', '5 : 4', '7 : 5'], '180 : 135. Dividing both by 45 gives 4 : 3.'),
  medium(SET + 'In which year was the profit the same as in the previous year?', 2022, [2021, 2023, 2024], 'Profits: 2021 = 30 and 2022 = 30. They are equal, so the year is 2022.'),
  medium(SET + 'By what percentage did the expenses increase from 2022 to 2024?', pct(round(grow(E(2022), E(2024)), 1)), ['45%', '40%', '55%'], 'Increase = 135 − 90 = 45. Percentage = 45 ÷ 90 × 100 = 50%.'),
  medium(SET + 'By how much did the profit increase from 2020 to 2024 (₹ lakh)?', P(2024) - P(2020), [20, 30, 35], 'Profit 2024 = 45 and profit 2020 = 20. Increase = 25.'),

  placement(SET + 'In 2021, the profit was what percentage of the expenses (to one decimal place)?', pct(round(P(2021) / E(2021) * 100, 1)), ['30.0%', '40.0%', '45.5%'], 'Profit % of expenses = 30 ÷ 70 × 100 = 42.9%.'),
  placement(SET + 'If revenue grows by 20% and expenses by 10% in 2025 over 2024, the profit in 2025 will be (₹ lakh)', round(R(2024) * 1.2 - E(2024) * 1.1, 1), [60, 65, 72], 'Revenue 2025 = 180 × 1.2 = 216. Expenses = 135 × 1.1 = 148.5. Profit = 216 − 148.5 = 67.5.'),
  placement(SET + 'By what percentage did the profit increase from 2020 to 2024?', pct(round(grow(P(2020), P(2024)), 1)), ['100%', '112.5%', '150%'], 'Profit 2020 = 20, 2024 = 45. Percentage = 25 ÷ 20 × 100 = 125%.'),
  placement(SET + 'What is the average yearly increase in revenue from 2020 to 2024 (₹ lakh per year)?', (R(2024) - R(2020)) / 4, [20, 30, 33.3], 'Total increase = 180 − 80 = 100 over 4 intervals. Average = 25.'),
  placement(SET + 'In which year was the percentage increase in expenses over the previous year the highest?', bestExpYear, [2021, 2023, 2024], 'Expense growth: 2021 = 16.7%, 2022 = 28.6%, 2023 = 22.2%, 2024 = 22.7%. The highest is in 2022.'),
  placement(SET + 'The total expenses of the five years are what percentage of the total revenue (to one decimal place)?', pct(round(sum(exp) / sum(rev) * 100, 1)), ['65.0%', '70.5%', '80.0%'], 'Total expenses = ' + sum(exp) + ' and total revenue = ' + sum(rev) + '. Percentage = ' + sum(exp) + ' ÷ ' + sum(rev) + ' × 100 = ' + round(sum(exp) / sum(rev) * 100, 1) + '%.')
];

build(chapter, quiz);
void bestProfitOnExp;
