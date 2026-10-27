const { easy, medium, placement, build } = require('../lib.cjs');
const { round, sum, pct, table } = require('../diLib.cjs');

// Dataset: marks of five students in four subjects. All answers are computed from it.
const students = ['A', 'B', 'C', 'D', 'E'];
const subjects = ['Maths', 'Physics', 'Chemistry', 'English'];
const M = { A: [78, 82, 74, 66], B: [85, 79, 88, 72], C: [64, 70, 68, 80], D: [90, 86, 84, 76], E: [72, 68, 78, 74] };
const mk = (s, sub) => M[s][subjects.indexOf(sub)];
const tot = s => sum(M[s]);
const avgS = s => tot(s) / 4;
const subTot = sub => sum(students.map(s => mk(s, sub)));
const avgSub = sub => subTot(sub) / 5;
const grand = sum(students.map(tot));
const T = table('Average DI: marks (out of 100) of five students in four subjects.', ['Student', 'Maths', 'Physics', 'Chemistry', 'English'], students.map(s => [s, ...M[s]]));
const bestStudent = students.reduce((b, s) => (tot(s) > tot(b) ? s : b));
const bestSubject = subjects.reduce((b, s) => (avgSub(s) > avgSub(b) ? s : b));
const worstSubject = subjects.reduce((b, s) => (avgSub(s) < avgSub(b) ? s : b));

const chapter = {
  id: 'y2-di-average-di', year: 2, category: 'Data Interpretation', num: 50, difficulty: 'Intermediate',
  title: 'Average-Based DI',
  tagline: 'Year 2 — Averages across rows and columns, comparisons and effects of changes',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/data-interpretation/table-charts/',
  overview: 'Average-based DI sets give a table of marks, sales or other quantities, and ask for averages across rows (per student) and across columns (per subject), for the whole table, and for the effect of changes such as adding a mark. Because an average is a total divided by a count, the easiest approach is to compute row totals and column totals first and then divide when needed.',
  placement: 'Average-based DI sets are commonly asked in company aptitude rounds and test accuracy in addition and division more than any new concept.',
  realWorld: 'Class results, performance reports and monthly summaries are all averaged across rows and columns.',
  objectives: [
    'Compute row and column totals once and reuse them',
    'Compute averages across a row, a column or the whole table',
    'Compare averages and find the highest and lowest',
    'Find the marks needed to reach a target average',
    'Compute percentages and differences from averages'
  ],
  prereq: ['Advanced Averages', 'Reading Data Tables'],
  refresher: 'Average = total ÷ count. Total = average × count. The grand total equals the sum of row totals and also the sum of column totals.',
  defs: [
    'Row total: sum of values across a row (one student).',
    'Column total: sum of values down a column (one subject).',
    'Row average: row total ÷ number of columns. Column average: column total ÷ number of rows.',
    'Grand total: sum of all values; overall average = grand total ÷ number of values.',
    'Target average: the average you want to reach; needed total = target × count.'
  ],
  intuition: 'Averages are totals in disguise. If you hold the row totals and column totals, you can answer almost any average question with a single division. The grand total gives a useful check: row totals and column totals must add to the same number.',
  mental: 'Add a total column and a total row to the table. Use these totals for all later questions, and check the grand total from both directions.',
  formulas: [
    ['Row and column averages', 'Row avg = row total ÷ 4;  Column avg = column total ÷ 5', 'Count the cells.', 'Per student, per subject.', 'A: 300 ÷ 4 = 75'],
    ['Overall average', 'Grand total ÷ number of values', 'Same from rows or columns.', 'Whole-table average.', '1516 ÷ 20 = 75.8'],
    ['Target average', 'Needed total = target × count', 'Subtract what you have.', 'Marks needed.', 'For 80 average in 4 subjects: 320'],
    ['Difference of averages', 'Avg₁ − Avg₂', 'Compute each first.', 'Comparisons.', 'Maths avg − English avg'],
    ['Percentage above average', '(value − average) ÷ average × 100', 'Average is the base.', 'Relative performance.', '(90 − 75.8) ÷ 75.8']
  ],
  narrative: [
    'Add a total column and a total row. Student A has 78 + 82 + 74 + 66 = 300, so average 75. Maths has 78 + 85 + 64 + 90 + 72 = 389 over five students, an average of 77.8.',
    'The grand total is the sum of all row totals: 300 + 324 + 282 + 336 + 292 = 1534. Check by summing the column totals: 389 + 385 + 392 + 368 = 1534. The overall average is 1534 ÷ 20 = 76.7.',
    'To find the best student, compare row totals; to find the best subject, compare column totals or averages. Student D has the highest total (336), and Chemistry has the highest average (392 ÷ 5 = 78.4).',
    'For a target average, work with totals. To average 80 in four subjects, a student needs 320. Student A has 300, so would need 20 more marks, which is a rise of 5 in each subject on average.',
    'For relative comparisons, use the average as the base: if the class average in Maths is 77.8, then D\'s 90 is (90 − 77.8) ÷ 77.8 × 100 = 15.7% above the average.'
  ],
  deep: [
    ['Average of averages', 'Because every row has the same number of cells, the average of the row averages equals the overall average. With unequal counts this fails.'],
    ['Effect of a change', 'If one mark changes by d, the row total changes by d and the row average by d ÷ 4, the column average by d ÷ 5 and the overall average by d ÷ 20.']
  ],
  variations: [
    ['Row averages', 'Per student.', 'A'],
    ['Column averages', 'Per subject.', 'Maths'],
    ['Overall average', 'Whole table.', 'Grand ÷ 20'],
    ['Target average', 'Marks needed.', '80 average'],
    ['Comparisons', 'Highest and lowest.', 'Best subject']
  ],
  examples: [
    {
      title: 'Row average',
      q: 'Find the average marks of student A.',
      given: ['78, 82, 74, 66'],
      concept: 'Total ÷ 4.',
      steps: [['Total', '78 + 82 + 74 + 66 = 300.'], ['Average', '300 ÷ 4 = 75.']],
      ans: '75', why: 'Four subjects.', trap: 'Dividing by 5.'
    },
    {
      title: 'Column average',
      q: 'Find the average marks in Maths for the five students.',
      given: ['78, 85, 64, 90, 72'],
      concept: 'Total ÷ 5.',
      steps: [['Total', '78 + 85 + 64 + 90 + 72 = 389.'], ['Average', '389 ÷ 5 = 77.8.']],
      ans: String(round(avgSub('Maths'), 1)), why: 'Five students.', trap: 'Dividing by 4.'
    },
    {
      title: 'Target average',
      q: 'How many more marks in total does student A need to reach an average of 80 in the four subjects?',
      given: ['A total 300', 'Target 80'],
      concept: 'Needed total = target × count.',
      steps: [['Needed', '80 × 4 = 320.'], ['Extra', '320 − 300 = 20.']],
      ans: '20', why: 'Averages are totals divided by the count.', trap: 'Comparing averages directly.'
    }
  ],
  shortcut: {
    title: 'Totals first',
    trad: 'Compute each average from scratch.',
    fast: 'Add a total row and a total column. Use them for every question and check the grand total from both directions.',
    rules: ['Row ÷ columns; column ÷ rows.', 'Grand total check.', 'Target = average × count.', 'Average is the base for percentages.']
  },
  mistakes: [
    ['Dividing by the wrong count', 'Using 5 for a row.', 'Count cells.'],
    ['Skipping the grand total check', 'Arithmetic slips.', 'Add both ways.'],
    ['Averaging averages with unequal counts', 'Wrong weights.', 'Use totals.'],
    ['Wrong base', 'Using the value as the base.', 'Use the average.']
  ],
  tips: { sec: 80, elim: 'An average must lie between the smallest and largest values in its row or column.', advice: 'Compute all totals first.', insight: 'The grand total check catches most errors.' },
  revision: ['Totals first.', 'Row ÷ columns.', 'Column ÷ rows.', 'Target average.', 'Average as the base.'],
  quickFormulas: ['Total = avg × count'],
  takeaways: ['Totals.', 'Right count.', 'Check both ways.', 'Target = average × count.'],
  selfCheck: ['Can I compute a row average?', 'Can I compute a column average?', 'Can I find marks needed for a target?'],
  sources: [['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Tabular data interpretation; data and examples are original.']]
};

const quiz = [
  easy(T + 'What is the total marks of student A?', tot('A'), [290, 310, 320], '78 + 82 + 74 + 66 = 300.'),
  easy(T + 'What is the average marks of student A?', avgS('A'), [72, 76, 80], '300 ÷ 4 = 75.'),
  easy(T + 'Which student scored the highest marks in Maths?', 'D', ['B', 'A', 'E'], 'Maths marks: A 78, B 85, C 64, D 90, E 72. The highest is D (90).'),
  easy(T + 'What is the total marks of student C?', tot('C'), [272, 290, 300], '64 + 70 + 68 + 80 = 282.'),
  easy(T + 'In which subject did student B score the highest?', 'Chemistry', ['Maths', 'Physics', 'English'], 'B scored 85, 79, 88, 72. The highest is Chemistry (88).'),
  easy(T + 'What is the total marks of student D?', tot('D'), [326, 340, 346], '90 + 86 + 84 + 76 = 336.'),

  medium(T + 'Which student has the highest total marks?', bestStudent, ['B', 'A', 'E'], 'Totals: A 300, B 324, C 282, D 336, E 292. The highest is D.'),
  medium(T + 'What is the average marks in Maths of the five students?', round(avgSub('Maths'), 1), [76.8, 78.6, 80], '(78 + 85 + 64 + 90 + 72) ÷ 5 = 389 ÷ 5 = 77.8.'),
  medium(T + 'In which subject is the average marks of the five students the highest?', bestSubject, ['Maths', 'Physics', 'English'], 'Averages: Maths 77.8, Physics 77.0, Chemistry 78.4, English 73.6. The highest is Chemistry.'),
  medium(T + 'In which subject is the average marks of the five students the lowest?', worstSubject, ['Maths', 'Physics', 'Chemistry'], 'English has the lowest average, 73.6.'),
  medium(T + 'What is the average marks of student B?', avgS('B'), [78, 80, 84], '(85 + 79 + 88 + 72) ÷ 4 = 324 ÷ 4 = 81.'),
  medium(T + 'What is the total of all the marks in the table?', grand, [1500, 1550, 1580], '300 + 324 + 282 + 336 + 292 = 1534.'),
  medium(T + 'What is the overall average of all the marks in the table?', round(grand / 20, 1), [75.0, 77.5, 78.2], '1534 ÷ 20 = 76.7.'),
  medium(T + 'By how many marks is the average in Chemistry higher than the average in English?', round(avgSub('Chemistry') - avgSub('English'), 1), [3.4, 5.0, 6.2], '78.4 − 73.6 = 4.8.'),

  placement(T + 'How many more marks in total must student A obtain to have an average of 80 in the four subjects?', 80 * 4 - tot('A'), [10, 15, 25], 'Needed total = 320. A has 300, so 20 more.'),
  placement(T + 'Student D\'s Maths marks are what percentage above the class average in Maths (to one decimal place)?', pct((mk('D', 'Maths') - avgSub('Maths')) / avgSub('Maths') * 100), ['12.5%', '18.0%', '20.0%'], '(90 − 77.8) ÷ 77.8 × 100 = 15.7%.'),
  placement(T + 'The average marks of student E is', avgS('E'), [70, 74, 75], '(72 + 68 + 78 + 74) ÷ 4 = 292 ÷ 4 = 73.'),
  placement(T + 'If student C\'s Maths marks are increased by 10, the new average marks of C in the four subjects is', (tot('C') + 10) / 4, [70.5, 72, 75], 'New total = 292. Average = 292 ÷ 4 = 73.'),
  placement(T + 'The difference between the highest and the lowest total marks among the five students is', tot(bestStudent) - Math.min(...students.map(tot)), [44, 52, 60], 'Highest 336 (D) and lowest 282 (C). Difference = 54.'),
  placement(T + 'The average of the five students\' average marks (overall) is', round(sum(students.map(avgS)) / 5, 1), [75.5, 77.0, 78.4], 'Row averages: 75, 81, 70.5, 84, 73. Their mean is 383.5 ÷ 5 = 76.7.')
];
build(chapter, quiz);
