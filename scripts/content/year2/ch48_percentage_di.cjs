const { easy, medium, placement, build } = require('../lib.cjs');
const { round, sum, ratio, pct, table } = require('../diLib.cjs');

// Dataset: five colleges. All answers are computed from it.
const names = ['P', 'Q', 'R', 'S', 'T'];
const total = [1200, 1500, 800, 2000, 1000];
const girlsPct = [40, 45, 50, 35, 55];
const passPct = [80, 70, 90, 60, 75];
const k = c => names.indexOf(c);
const girls = c => total[k(c)] * girlsPct[k(c)] / 100;
const boys = c => total[k(c)] - girls(c);
const passed = c => total[k(c)] * passPct[k(c)] / 100;
const T = table('Percentage DI: students of five colleges.', ['College', 'Total students', '% girls', '% passed'], names.map((c, i) => [c, total[i], girlsPct[i] + '%', passPct[i] + '%']));
const allPassed = sum(names.map(passed));
const allGirls = sum(names.map(girls));

const chapter = {
  id: 'y2-di-percentage-di', year: 2, category: 'Data Interpretation', num: 48, difficulty: 'Intermediate',
  title: 'Percentage-Based DI',
  tagline: 'Year 2 — Tables where values are given as percentages of totals',
  minutes: 50,
  overview: 'In a percentage-based DI set, the table gives totals and also percentages of those totals, for example the percentage of girls or the percentage who passed. To answer questions you must convert percentages into actual numbers by multiplying by the right total, and sometimes to convert back to a percentage of a different total. The key is to know which total each percentage refers to.',
  placement: 'Percentage-based DI sets are commonly asked in company aptitude rounds, and they test accuracy with percentages more than speed of reading.',
  realWorld: 'Survey results, pass percentages and market shares are reported as percentages of different totals.',
  objectives: [
    'Convert a percentage of a total into a number',
    'Use complements (boys = 100% − girls)',
    'Compute overall percentages from group data',
    'Compare groups by numbers rather than by percentages',
    'Compute ratios and differences from derived numbers'
  ],
  prereq: ['Basic Percentages', 'Bar Graph Interpretation', 'Reading Data Tables'],
  refresher: 'Number = percentage ÷ 100 × total. The complement of x% is (100 − x)%. Overall percentage = total of parts ÷ total of wholes × 100.',
  defs: [
    'Base (or total): the quantity that the percentage is a part of.',
    'Complement: the rest, (100 − x)%.',
    'Derived column: a new column of numbers computed from percentages and totals.',
    'Overall percentage: sum of parts ÷ sum of totals, not the average of percentages.',
    'Percentage point difference: difference between two percentages.'
  ],
  intuition: 'A percentage is meaningless without its total. Once you convert every percentage to an actual number (a derived column), the rest of the problem is simple arithmetic on numbers. Averaging percentages directly gives wrong answers because the groups have different sizes.',
  mental: 'Add derived columns to the table: girls, boys, passed. Do this once, then use the new columns to answer all questions.',
  formulas: [
    ['Number from percentage', 'Number = % ÷ 100 × total', 'Use the correct total.', 'Any percentage cell.', '40% of 1200 = 480'],
    ['Complement', 'Boys % = 100 − girls %', 'The rest of the total.', 'Complementary groups.', 'Girls 40% → boys 60%'],
    ['Overall percentage', 'Σ parts ÷ Σ totals × 100', 'Not the mean of percentages.', 'Combined groups.', '4680 ÷ 6500 = 72%'],
    ['Comparing groups', 'Compare numbers, not percentages', 'Totals differ.', 'Which college has more?', 'S: 60% of 2000 = 1200 passed'],
    ['Ratio of two derived numbers', 'Simplify by the HCF', 'Same college or different.', 'Ratio questions.', 'Girls : boys in T = 550 : 450 = 11 : 9']
  ],
  narrative: [
    'First, derive the numbers. College P has 1200 students of whom 40% are girls: 480 girls and 720 boys. 80% passed: 960 students. Do this for each college and write the numbers in new columns.',
    'Compare using numbers, not percentages. College R has the highest pass percentage (90%) but only 800 students, so 720 passed. College S has only 60% pass rate but 2000 students, so 1200 passed, the most of any college.',
    'For overall percentages, add the numbers: the total number of students is 6500 and the total number who passed is 960 + 1050 + 720 + 1200 + 750 = 4680, so the overall pass percentage is 4680 ÷ 6500 × 100 = 72%. The simple average of the five percentages would give 75%, which is wrong.',
    'For ratios, use derived numbers: girls : boys in college T is 550 : 450 = 11 : 9.',
    'Always check that the numbers are whole and sensible; a percentage of a total that gives a fraction of a person suggests a misread.'
  ],
  deep: [
    ['Average of percentages is not overall', 'Because groups differ in size, the overall percentage is a weighted average. Always go through the totals.'],
    ['Percentage points vs percent', 'If the pass rate rises from 70% to 80%, it rises by 10 percentage points and by 14.3% in relative terms.']
  ],
  variations: [
    ['Number from a percentage', 'Direct.', 'Girls in P'],
    ['Complements', 'Boys.', 'Boys in R'],
    ['Overall percentage', 'Σ/Σ.', 'Overall pass percentage'],
    ['Comparing groups', 'By number.', 'Most passed'],
    ['Ratios', 'Girls to boys.', 'College T']
  ],
  examples: [
    {
      title: 'Derived numbers',
      q: 'How many girls are there in college P, and how many boys?',
      given: ['Total 1200', '40% girls'],
      concept: 'Number = % × total.',
      steps: [['Girls', '40% of 1200 = 480.'], ['Boys', '1200 − 480 = 720.']],
      ans: '480 girls and 720 boys', why: 'The rest are boys.', trap: 'Using 40 and 60.'
    },
    {
      title: 'Overall percentage',
      q: 'What is the overall pass percentage of the five colleges together?',
      given: ['Totals and pass percentages'],
      concept: 'Σ parts ÷ Σ totals.',
      steps: [['Passed', '960 + 1050 + 720 + 1200 + 750 = 4680.'], ['Total', '6500.'], ['Overall', '4680 ÷ 6500 × 100 = 72%.']],
      ans: pct(allPassed / sum(total) * 100, 0), why: 'Larger colleges count for more.', trap: 'Averaging the five percentages (75%).'
    },
    {
      title: 'Compare by number',
      q: 'Which college had the highest number of students who passed?',
      given: ['Pass numbers'],
      concept: 'Compare numbers.',
      steps: [['Numbers', 'P 960, Q 1050, R 720, S 1200, T 750.'], ['Highest', 'S.']],
      ans: 'S', why: 'A large college can lead even with a lower pass rate.', trap: 'Choosing R, which has the highest pass percentage.'
    }
  ],
  shortcut: {
    title: 'Derived columns',
    trad: 'Recompute percentages in every question.',
    fast: 'Add columns for girls, boys and passed once. Use them for every later question.',
    rules: ['Know the base.', 'Overall = Σ parts / Σ totals.', 'Compare numbers.', 'Use complements.']
  },
  mistakes: [
    ['Using the wrong total', 'Mixing colleges.', 'Use the row total.'],
    ['Averaging percentages', 'Ignoring sizes.', 'Weight by totals.'],
    ['Comparing percentages across groups', 'Ignoring totals.', 'Compare numbers.'],
    ['Forgetting complements', 'Missing boys.', '100 − girls %.']
  ],
  tips: { sec: 80, elim: 'Reject answers that treat a percentage as a number or vice versa.', advice: 'Derive columns first.', insight: 'Overall percentages are the usual trap.' },
  revision: ['Number = % × total.', 'Complement.', 'Overall percentage.', 'Compare numbers.', 'Ratios from numbers.'],
  quickFormulas: ['% × total / 100', 'Σparts/Σtotal × 100'],
  takeaways: ['Derived columns.', 'Right base.', 'Weighted overall.', 'Numbers for comparison.'],
  selfCheck: ['Can I find girls from a percentage?', 'Can I compute an overall percentage?', 'Can I compare colleges by number?'],
  sources: [['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Tabular data interpretation; data and examples are original.']]
};

const quiz = [
  easy(T + 'How many girls are there in college P?', girls('P'), [400, 600, 720], '40% of 1200 = 480.'),
  easy(T + 'How many students passed in college Q?', passed('Q'), [900, 1000, 1200], '70% of 1500 = 1050.'),
  easy(T + 'How many boys are there in college R?', boys('R'), [300, 480, 600], '50% of 800 are girls, so boys = 400.'),
  easy(T + 'What is the total number of students in the five colleges?', sum(total), [6000, 6200, 7000], '1200 + 1500 + 800 + 2000 + 1000 = 6500.'),
  easy(T + 'Which college has the highest percentage of passed students?', 'R', ['P', 'Q', 'S'], 'The pass percentages are 80, 70, 90, 60, 75. The highest is R (90%).'),
  easy(T + 'How many students passed in college T?', passed('T'), [650, 800, 900], '75% of 1000 = 750.'),

  medium(T + 'How many students passed in all five colleges together?', allPassed, [4500, 4800, 4900], '960 + 1050 + 720 + 1200 + 750 = 4680.'),
  medium(T + 'Which college had the highest number of students who passed?', 'S', ['P', 'Q', 'R'], 'The numbers who passed are 960, 1050, 720, 1200 and 750. The highest is S.'),
  medium(T + 'What is the overall pass percentage of the five colleges (students passed ÷ total students)?', pct(allPassed / sum(total) * 100, 0), ['70%', '73%', '75%'], '4680 ÷ 6500 × 100 = 72%.'),
  medium(T + 'How many boys are there in college S?', boys('S'), [700, 1200, 1400], '35% of 2000 = 700 girls, so boys = 1300.'),
  medium(T + 'What is the ratio of girls to boys in college T (simplest form)?', ratio(girls('T'), boys('T')), ['5 : 4', '12 : 11', '55 : 45'], '550 : 450 = 11 : 9.'),
  medium(T + 'How many girls are there in all five colleges together?', allGirls, [2700, 2850, 3000], '480 + 675 + 400 + 700 + 550 = 2805.'),
  medium(T + 'By how many students does the number who passed in S exceed the number who passed in R?', passed('S') - passed('R'), [380, 400, 600], '1200 − 720 = 480.'),
  medium(T + 'How many girls are there in college Q?', girls('Q'), [600, 700, 750], '45% of 1500 = 675.'),

  placement(T + 'The number of boys in college Q is what percentage of the number of students who passed in college Q (to one decimal place)?', pct(boys('Q') / passed('Q') * 100), ['70.0%', '75.0%', '85.0%'], 'Boys = 825. 825 ÷ 1050 × 100 = 78.6%.'),
  placement(T + 'The total number of boys in colleges P and S together is', boys('P') + boys('S'), [1800, 2000, 2100], '720 + 1300 = 2020.'),
  placement(T + 'The number of students who passed in college P is what percentage of the total number of students in the five colleges (to one decimal place)?', pct(passed('P') / sum(total) * 100), ['12.5%', '16.0%', '20.0%'], '960 ÷ 6500 × 100 = 14.8%.'),
  placement(T + 'If the number who passed in college S had been 20% higher, how many would have passed?', passed('S') * 1.2, [1320, 1400, 1500], '1200 × 1.2 = 1440.'),
  placement(T + 'The average number of students per college is', sum(total) / 5, [1200, 1350, 1400], '6500 ÷ 5 = 1300.'),
  placement(T + 'The ratio of the number of students who passed in R to the number who passed in S (simplest form) is', ratio(passed('R'), passed('S')), ['2 : 3', '5 : 6', '4 : 5'], '720 : 1200 = 3 : 5.')
];
build(chapter, quiz);
