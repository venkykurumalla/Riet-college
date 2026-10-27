const { easy, medium, placement, build } = require('../lib.cjs');
const { round, sum, ratio, pct, table } = require('../diLib.cjs');

// Dataset: five cities. Population in thousands with male:female and literate:illiterate ratios. Answers are computed.
const names = ['A', 'B', 'C', 'D', 'E'];
const pop = [600, 480, 720, 540, 450];
const mf = [[7, 5], [5, 3], [4, 5], [1, 1], [3, 2]];
const li = [[3, 2], [5, 1], [7, 5], [4, 5], [2, 1]];
const k = c => names.indexOf(c);
const part = (c, r, i) => pop[k(c)] * r[k(c)][i] / (r[k(c)][0] + r[k(c)][1]);
const male = c => part(c, mf, 0), female = c => part(c, mf, 1), lit = c => part(c, li, 0), ill = c => part(c, li, 1);
const T = table('Ratio DI: population (in thousands) of five cities with the ratios of males to females and of literate to illiterate persons.', ['City', 'Population', 'Male : Female', 'Literate : Illiterate'], names.map((c, i) => [c, pop[i], mf[i].join(' : '), li[i].join(' : ')]));
const allMale = sum(names.map(male)), allFemale = sum(names.map(female));
const illAll = names.map(ill);

const chapter = {
  id: 'y2-di-ratio-di', year: 2, category: 'Data Interpretation', num: 49, difficulty: 'Intermediate',
  title: 'Ratio-Based DI',
  tagline: 'Year 2 — Tables where the data is given as ratios of totals',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/data-interpretation/table-charts/',
  overview: 'In a ratio-based DI set the table gives a total and one or more ratios that split it, such as the ratio of males to females or of literate to illiterate persons. To work with it, convert each ratio into actual numbers: if the total is 600 thousand and the ratio is 7 : 5, one part is 50 thousand, so there are 350 thousand males and 250 thousand females. After that, every question is arithmetic on numbers.',
  placement: 'Ratio-based DI sets are commonly asked in company aptitude rounds and combine ratio skills with table reading.',
  realWorld: 'Demographic reports, gender ratios in companies and quality-control splits are presented as ratios.',
  objectives: [
    'Convert a ratio and a total into actual numbers',
    'Handle two ratios on the same total',
    'Compare groups using derived numbers',
    'Compute ratios of derived numbers across rows',
    'Compute totals and percentages from ratios'
  ],
  prereq: ['Advanced Ratio and Proportion', 'Percentage-Based DI'],
  refresher: 'To split T in the ratio a : b, one part = T ÷ (a + b); the shares are a × part and b × part.',
  defs: [
    'Ratio a : b: the two quantities are in proportion a to b.',
    'Part value: total divided by the sum of the ratio terms.',
    'Derived number: a count obtained from a total and a ratio.',
    'Two ratios on one total: each ratio splits the same total in a different way.',
    'Simplified ratio: both terms divided by their HCF.'
  ],
  intuition: 'A ratio is a recipe for splitting a total. Add the terms to get the number of parts, divide the total by that to get one part, and then multiply. Different ratios on the same row split the same total in different ways, so each must be converted separately.',
  mental: 'Make a table of derived numbers: males, females, literate, illiterate for each city. Do it once and use it for every question.',
  formulas: [
    ['Splitting a total', 'First share = T × a/(a + b);  second = T × b/(a + b)', 'Add the ratio terms.', 'Any ratio cell.', '600 in 7 : 5 → 350 and 250'],
    ['Two ratios', 'Split the same total twice, independently', 'Do not combine them.', 'Males and literate.', 'A: males 350; literate 360'],
    ['Ratio of derived numbers', 'Simplify by the HCF', 'Across rows or columns.', 'Ratio questions.', 'Literate in A : B = 360 : 400 = 9 : 10'],
    ['Totals across rows', 'Σ derived numbers', 'Add the column.', 'Total males.', '1510 males, 1280 females'],
    ['Percentage from a ratio', 'a/(a + b) × 100', 'Convert the ratio to a share.', 'Share questions.', '7 : 5 → 58.3% male']
  ],
  narrative: [
    'Start with one row. City A has a population of 600 (thousand) with males to females 7 : 5. The ratio has 12 parts, so one part is 50 thousand: males 350, females 250. The literate to illiterate ratio is 3 : 2 with 5 parts, so one part is 120: literate 360, illiterate 240.',
    'Do the same for every row to make a table of numbers. For C: males 320, females 400, literate 420, illiterate 300. For D: males 270, females 270, literate 240, illiterate 300.',
    'Then answer the questions from the numbers. The city with the least illiterate population is B (480 × 1/6 = 80 thousand). The total number of females in all five cities is 250 + 180 + 400 + 270 + 180 = 1280 thousand.',
    'For ratio questions across rows, simplify the derived numbers: literate in A to literate in B is 360 : 400 = 9 : 10.',
    'Check that the derived numbers add up. Males plus females should equal the city total, and literate plus illiterate should equal the same total.'
  ],
  deep: [
    ['Two ratios do not combine', 'You cannot find the number of literate males from the two given ratios alone, because they split the total in different ways. Questions are designed so that you do not need it.'],
    ['Whole-number check', 'In a well-posed table, derived numbers are usually whole. A fraction signals a misread ratio.']
  ],
  variations: [
    ['Split a total', 'Males and females.', 'City A'],
    ['Second ratio', 'Literate and illiterate.', 'City B'],
    ['Totals across cities', 'Σ.', 'All females'],
    ['Ratios of derived numbers', 'Across rows.', 'Literate A : B'],
    ['Percentages', 'Share of total.', 'Literate in C as a percentage']
  ],
  examples: [
    {
      title: 'Split by a ratio',
      q: 'City A has a population of 600 thousand with males to females in the ratio 7 : 5. How many males and females are there?',
      given: ['600 thousand', '7 : 5'],
      concept: 'One part = total ÷ sum of terms.',
      steps: [['Parts', '7 + 5 = 12.'], ['One part', '600 ÷ 12 = 50.'], ['Numbers', 'Males 350, females 250.']],
      ans: '350 thousand males and 250 thousand females', why: 'The ratio has 12 parts.', trap: 'Using 7 and 5 directly.'
    },
    {
      title: 'Two ratios',
      q: 'In city B (480 thousand), literate to illiterate is 5 : 1. How many illiterate persons are there?',
      given: ['480', '5 : 1'],
      concept: 'One part = 480 ÷ 6.',
      steps: [['Parts', '5 + 1 = 6.'], ['One part', '80.'], ['Illiterate', '1 × 80 = 80 thousand.']],
      ans: '80 thousand', why: 'Illiterate is one part.', trap: 'Using 480/5.'
    },
    {
      title: 'Ratio of derived numbers',
      q: 'What is the ratio of the number of literate persons in A to that in B?',
      given: ['A: 360', 'B: 400'],
      concept: 'Simplify.',
      steps: [['Derived', 'Literate A = 600 × 3/5 = 360; literate B = 400.'], ['Ratio', '360 : 400 = 9 : 10.']],
      ans: ratio(lit('A'), lit('B')), why: 'Divide both by 40.', trap: 'Comparing the ratios 3 : 2 and 5 : 1.'
    }
  ],
  shortcut: {
    title: 'Part value',
    trad: 'Set up equations each time.',
    fast: 'Divide the total by the sum of the ratio terms to get one part, then multiply. Make a table of numbers once.',
    rules: ['Parts = sum of terms.', 'Separate splits for separate ratios.', 'Check males + females = total.', 'Simplify ratios of numbers.']
  },
  mistakes: [
    ['Using ratio terms as numbers', 'Treating 7 and 5 as counts.', 'Multiply by the part value.'],
    ['Dividing by the wrong sum', 'Dividing by one term.', 'Divide by the sum.'],
    ['Combining two ratios', 'Multiplying them.', 'Split separately.'],
    ['Units', 'Forgetting thousands.', 'State units.']
  ],
  tips: { sec: 80, elim: 'Males + females must equal the total; use it to reject options.', advice: 'Derive the table first.', insight: 'The part value method is the whole technique.' },
  revision: ['Part value.', 'Separate splits.', 'Totals across rows.', 'Simplify ratios.', 'Sum check.'],
  quickFormulas: ['One part = T/(a + b)'],
  takeaways: ['Parts.', 'Table of numbers.', 'Separate ratios.', 'Check sums.'],
  selfCheck: ['Can I split 600 in 7 : 5?', 'Can I handle two ratios?', 'Can I simplify a ratio of derived numbers?'],
  sources: [['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Ratio-based tabular data; data and examples are original.']]
};

const quiz = [
  easy(T + 'How many thousand males are there in city A?', male('A'), [250, 300, 420], '600 × 7/12 = 350.'),
  easy(T + 'How many thousand females are there in city C?', female('C'), [320, 360, 450], '720 × 5/9 = 400.'),
  easy(T + 'How many thousand literate persons are there in city B?', lit('B'), [300, 360, 450], '480 × 5/6 = 400.'),
  easy(T + 'How many thousand illiterate persons are there in city D?', ill('D'), [240, 270, 360], '540 × 5/9 = 300.'),
  easy(T + 'How many thousand females are there in city A?', female('A'), [300, 350, 420], '600 × 5/12 = 250.'),
  easy(T + 'How many thousand males are there in city E?', male('E'), [180, 250, 300], '450 × 3/5 = 270.'),

  medium(T + 'What is the total number of males (in thousands) in the five cities?', allMale, [1400, 1480, 1560], '350 + 300 + 320 + 270 + 270 = 1510.'),
  medium(T + 'What is the total number of females (in thousands) in the five cities?', allFemale, [1200, 1250, 1300], '250 + 180 + 400 + 270 + 180 = 1280.'),
  medium(T + 'In which city is the number of illiterate persons the smallest?', 'B', ['A', 'D', 'E'], 'Illiterate persons (thousands): A 240, B 80, C 300, D 300, E 150. The smallest is B.'),
  medium(T + 'The ratio of the number of literate persons in A to that in B (simplest form) is', ratio(lit('A'), lit('B')), ['3 : 5', '8 : 9', '6 : 7'], '360 : 400 = 9 : 10.'),
  medium(T + 'How many thousand literate persons are there in city C?', lit('C'), [360, 400, 480], '720 × 7/12 = 420.'),
  medium(T + 'In city B, the number of males exceeds the number of females by (thousands)', male('B') - female('B'), [100, 110, 150], 'Males 300, females 180. Difference = 120.'),
  medium(T + 'How many thousand literate persons are there in city E?', lit('E'), [250, 280, 320], '450 × 2/3 = 300.'),
  medium(T + 'In city D, the number of males is what percentage of the population?', pct(male('D') / pop[k('D')] * 100, 0), ['40%', '45%', '55%'], 'Males : females = 1 : 1, so males are 50%.'),

  placement(T + 'The number of illiterate persons in city A is what percentage of the population of city A?', pct(ill('A') / pop[0] * 100, 0), ['30%', '35%', '45%'], '240 ÷ 600 × 100 = 40%.'),
  placement(T + 'The total number of literate persons (in thousands) in the five cities is', sum(names.map(lit)), [1700, 1800, 1900], '360 + 400 + 420 + 240 + 300 = 1720.'),
  placement(T + 'The number of females in C is what percentage of the number of females in A (to one decimal place)?', pct(female('C') / female('A') * 100), ['140.0%', '160.0%', '180.0%'], '400 ÷ 250 × 100 = 160%.'),
  placement(T + 'The ratio of the total number of males to the total number of females in the five cities (simplest form) is', ratio(allMale, allFemale), ['6 : 5', '11 : 9', '17 : 15'], '1510 : 1280 = 151 : 128.'),
  placement(T + 'The difference between the number of literate and illiterate persons in city E (in thousands) is', lit('E') - ill('E'), [100, 120, 180], '300 − 150 = 150.'),
  placement(T + 'The average number of illiterate persons (in thousands) per city is', round(sum(illAll) / 5, 1), [150, 160, 180], '(240 + 80 + 300 + 300 + 150) ÷ 5 = 1070 ÷ 5 = 214.')
];
build(chapter, quiz);
