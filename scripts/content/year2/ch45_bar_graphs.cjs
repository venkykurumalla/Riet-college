const { easy, medium, placement, build } = require('../lib.cjs');
const { round, sum, ratio, pct, table, near } = require('../diLib.cjs');

// Dataset: cars produced (in thousands) by three companies. All answers are computed from it.
const years = [2019, 2020, 2021, 2022, 2023];
const D = { A: [40, 48, 45, 60, 66], B: [35, 42, 50, 52, 58], C: [30, 36, 40, 38, 45] };
const v = (c, y) => D[c][years.indexOf(y)];
const yt = y => v('A', y) + v('B', y) + v('C', y);
const T = table('Bar chart data: cars produced (in thousands) by three companies.', ['Year', 'A', 'B', 'C'], years.map(y => [y, v('A', y), v('B', y), v('C', y)]));
const idx = a => a.indexOf(Math.max(...a));

const chapter = {
  id: 'y2-di-bar-graphs', year: 2, category: 'Data Interpretation', num: 45, difficulty: 'Intermediate',
  title: 'Bar Graph Interpretation',
  tagline: 'Year 2 — Multi-series bar charts: reading, comparing, percentage change and ratios',
  minutes: 50,
  overview: 'A bar graph shows values as bars whose heights are proportional to the quantities. In Year 2 you meet multi-series bar graphs, where several bars sit side by side for each year or category. Questions combine reading values with totals, differences, averages, percentage changes and ratios. The data is the same as in a table; the picture only makes comparison easier.',
  placement: 'Bar graph sets are commonly asked in company aptitude rounds. In an exam you read the heights from the picture; here the values are given as a table so that you can practise the calculations.',
  realWorld: 'Production reports, sales comparisons and annual dashboards use multi-series bar charts.',
  objectives: [
    'Read exact values from multi-series bars using the scale',
    'Compute totals, differences and averages across series and years',
    'Compute percentage change and share of total',
    'Compare growth across series and years',
    'Use approximation when options are far apart'
  ],
  prereq: ['Basic Charts (Bar and Pie)', 'Percentage-Based DI basics', 'Advanced Averages'],
  refresher: 'Percentage change = (new − old) ÷ old × 100. Share = part ÷ total × 100. Ratio a : b is simplified by dividing both terms by their HCF.',
  defs: [
    'Series: one set of bars of the same colour (one company or category).',
    'Scale: the value of one unit of the axis.',
    'Year-on-year (YoY) change: change from one year to the next.',
    'Share of total: a value as a percentage of the sum of all series in that year.',
    'Base: the quantity a percentage is measured against.'
  ],
  intuition: 'A multi-series bar chart is a table drawn with bars. Write the numbers into a small table, then every question is arithmetic on a few cells. The most common errors are reading a wrong bar and using the wrong base for a percentage.',
  mental: 'Write down the values for each series and year. Underline what the question asks (which series, which year, total or difference) and use only those cells.',
  formulas: [
    ['Total and difference', 'Total = sum of series in a year;  Difference = one series − another', 'Use the right year.', 'Direct questions.', 'A − C in 2022 = 60 − 38 = 22'],
    ['Average', 'Average = Sum ÷ number of years (or series)', 'Count the terms.', 'Mean questions.', 'A over 5 years = 259 ÷ 5 = 51.8'],
    ['Percentage change', '(New − Old) ÷ Old × 100', 'Old is the base.', 'Growth.', 'A 2019→2023: 26/40 = 65%'],
    ['Share of total', 'Value ÷ total of all series × 100', 'Total of that year.', 'Share.', 'B in 2022 = 52/150 = 34.7%'],
    ['Ratio', 'Simplify by the HCF', 'Same year, two series.', 'Ratios.', 'B : C in 2021 = 50 : 40 = 5 : 4']
  ],
  narrative: [
    'First convert the graph to numbers. With three series (A, B, C) and five years, write a 5 × 3 table of the values. After that every question refers to specific cells.',
    'For totals and differences, choose the year. The total production in 2023 is 66 + 58 + 45 = 169 thousand. The difference between A and C in 2022 is 60 − 38 = 22 thousand.',
    'For averages, divide by the number of terms: the average of A over five years is (40 + 48 + 45 + 60 + 66) ÷ 5 = 51.8 thousand.',
    'For percentage change, use the earlier value as the base: A rose from 40 to 66, an increase of 26 ÷ 40 = 65%. For a share, divide by that year\'s total: B in 2022 is 52 ÷ 150 = 34.7% of the total.',
    'To find the year with the largest change, compute the year-on-year changes of the series. A changed by +8, −3, +15 and +6, so the greatest rise was in 2022.'
  ],
  deep: [
    ['Reading from the picture', 'In an exam the heights fall on gridlines or midway between them. Read to the nearest half-division and note the scale before reading values.'],
    ['Percentage points vs percentages', 'If a share rises from 30% to 35%, it rises by 5 percentage points but by about 16.7% in percentage terms. Read the question to see which is asked.']
  ],
  variations: [
    ['Direct reading', 'Single cell.', 'A in 2021'],
    ['Totals and differences', 'Across series.', 'Total in 2023'],
    ['Averages', 'Across years.', 'A over five years'],
    ['Percentage questions', 'Change and share.', 'A 2019 → 2023'],
    ['Comparisons', 'Which year or series.', 'Year of greatest rise']
  ],
  examples: [
    {
      title: 'Total of a year',
      q: 'Using the bar data, find the total production of the three companies in 2023.',
      given: ['A 66, B 58, C 45'],
      concept: 'Sum the series.',
      steps: [['Pick the year', '2023: 66, 58 and 45.'], ['Add', '66 + 58 + 45 = 169.']],
      ans: String(yt(2023)) + ' thousand', why: 'Add only the chosen year.', trap: 'Adding across years.'
    },
    {
      title: 'Percentage change',
      q: 'By what percentage did company A\'s production increase from 2019 to 2023?',
      given: ['A: 40 → 66'],
      concept: 'Earlier year is the base.',
      steps: [['Increase', '66 − 40 = 26.'], ['Divide', '26 ÷ 40 = 0.65.'], ['Percent', '65%.']],
      ans: '65%', why: '2019 is the base.', trap: 'Dividing by 66.'
    },
    {
      title: 'Share of total',
      q: 'What percentage of the total production in 2022 was produced by B (to one decimal place)?',
      given: ['B = 52', 'Total 2022 = 150'],
      concept: 'Share = part ÷ total.',
      steps: [['Total 2022', '60 + 52 + 38 = 150.'], ['Share', '52 ÷ 150 × 100 = 34.7%.']],
      ans: pct(52 / 150 * 100), why: 'The total for that year is the base.', trap: 'Using the total of all years.'
    }
  ],
  shortcut: {
    title: 'Table first, then choose cells',
    trad: 'Read the graph for every question.',
    fast: 'Convert the graph to a small table, underline what is asked and pick only those cells. Use approximation when options are spread.',
    rules: ['Check the scale and units.', 'Percentage change: old is the base.', 'Share: total of that year.', 'Count the terms for averages.']
  },
  mistakes: [
    ['Reading the wrong bar', 'Mixing colours or years.', 'Write the table.'],
    ['Wrong base', 'Using the new value.', 'Use the earlier one.'],
    ['Counting terms wrong', 'Dividing by the wrong number.', 'Count the years.'],
    ['Ignoring units', 'Forgetting thousands.', 'State the unit.']
  ],
  tips: { sec: 70, elim: 'Use rough values to reject options far from the estimate.', advice: 'Do direct and total questions first.', insight: 'The same table can be reused for all questions in the set.' },
  revision: ['Table first.', 'Totals, differences, averages.', 'Percentage change base.', 'Share of total.', 'Ratio simplification.'],
  quickFormulas: ['(new − old)/old × 100', 'part/total × 100'],
  takeaways: ['Convert to numbers.', 'Choose cells.', 'Know the base.', 'Check units.'],
  selfCheck: ['Can I find YoY changes?', 'Can I find a share of total?', 'Can I simplify a ratio?'],
  sources: [['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Bar chart data interpretation; data and examples are original.']]
};

const yoyA = years.slice(1).map((y, i) => v('A', y) - v('A', years[i]));
const bestYoY = years[1 + yoyA.indexOf(Math.max(...yoyA))];
const spread = years.map(y => Math.max(v('A', y), v('B', y), v('C', y)) - Math.min(v('A', y), v('B', y), v('C', y)));
const quiz = [
  easy(T + 'How many thousand cars did company A produce in 2021?', v('A', 2021), [48, 50, 60], 'Read the row 2021, column A: 45.'),
  easy(T + 'What was the total production (in thousands) of the three companies in 2023?', yt(2023), [159, 175, 180], 'Add the 2023 row: 66 + 58 + 45 = ' + yt(2023) + '.'),
  easy(T + 'Which company produced the most cars in 2020?', 'A', ['B', 'C', 'A and B equally'], 'In 2020 the values are 48, 42 and 36, so A was the highest.'),
  easy(T + 'How many thousand cars did company B produce in 2019?', v('B', 2019), [30, 40, 42], 'Row 2019, column B: 35.'),
  easy(T + 'In which year was the production of company C the lowest?', years[D.C.indexOf(Math.min(...D.C))], [2020, 2021, 2023], 'C\'s values are 30, 36, 40, 38 and 45. The lowest is in 2019.'),
  easy(T + 'By how many thousand did the production of A exceed that of C in 2022?', v('A', 2022) - v('C', 2022), [18, 20, 24], '60 − 38 = 22.'),

  medium(T + 'What was the average annual production (in thousands) of company A over the five years?', round(sum(D.A) / 5, 1), [50, 52.5, 54], 'Total = 40 + 48 + 45 + 60 + 66 = 259. Average = 259 ÷ 5 = 51.8.'),
  medium(T + 'By what percentage did the production of A increase from 2019 to 2023?', pct((v('A', 2023) - v('A', 2019)) / v('A', 2019) * 100), ['39.4%', '52.0%', '75.0%'], 'Increase = 26. 26 ÷ 40 × 100 = 65%.'),
  medium(T + 'What is the ratio of the production of B to that of C in 2021 (simplest form)?', ratio(v('B', 2021), v('C', 2021)), ['3 : 2', '4 : 3', '6 : 5'], '50 : 40 = 5 : 4.'),
  medium(T + 'What is the total production (in thousands) of company C over the five years?', sum(D.C), [180, 195, 200], '30 + 36 + 40 + 38 + 45 = 189.'),
  medium(T + 'In which year was the total production of the three companies the highest?', years[years.map(yt).indexOf(Math.max(...years.map(yt)))], [2021, 2022, 2020], 'The yearly totals are ' + years.map(yt).join(', ') + '. The highest is in 2023.'),
  medium(T + 'In how many of the five years did A produce more than B?', years.filter(y => v('A', y) > v('B', y)).length, [2, 3, 5], 'A > B in 2019, 2020, 2022 and 2023, but not in 2021: 4 years.'),
  medium(T + 'What percentage of the total production in 2022 was produced by B (to one decimal place)?', pct(v('B', 2022) / yt(2022) * 100), ['30.0%', '36.7%', '40.0%'], '52 ÷ 150 × 100 = 34.7%.'),
  medium(T + 'In which year did the production of A rise the most compared with the previous year?', bestYoY, [2020, 2021, 2023], 'A\'s changes are +8, −3, +15 and +6. The largest rise is in 2022.'),

  placement(T + 'The production of A in 2023 was what percentage of the total production of all three in 2023 (to one decimal place)?', pct(v('A', 2023) / yt(2023) * 100), ['35.0%', '42.5%', '45.0%'], '66 ÷ 169 × 100 = 39.1%.'),
  placement(T + 'If the production of B rises by 10% in 2024 over 2023, it will be (in thousands)', round(v('B', 2023) * 1.1, 1), [60.5, 63, 64.5], '58 × 1.1 = 63.8.'),
  placement(T + 'The ratio of the total production of A to that of B over the five years is', ratio(sum(D.A), sum(D.B)), ['7 : 6', '37 : 33', '8 : 7'], 'A total = 259 and B total = 237. The ratio in simplest form is 259 : 237.'),
  placement(T + 'The average production (in thousands) of the three companies in 2020 is', round((v('A', 2020) + v('B', 2020) + v('C', 2020)) / 3, 1), [40, 44, 48], '(48 + 42 + 36) ÷ 3 = 42.'),
  placement(T + 'In which year was the difference between the highest and the lowest producer the largest?', years[spread.indexOf(Math.max(...spread))], [2019, 2020, 2023], 'The spreads are ' + spread.join(', ') + '. The largest (22) is in 2022.'),
  placement(T + 'The combined production of A and C in 2021 is what percentage of the production of B in 2021?', pct((v('A', 2021) + v('C', 2021)) / v('B', 2021) * 100, 0), ['85%', '150%', '200%'], '(45 + 40) ÷ 50 × 100 = 170%.')
];
build(chapter, quiz);
