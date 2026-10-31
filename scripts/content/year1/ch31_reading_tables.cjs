const { easy, medium, placement, build } = require('../lib.cjs');

// Dataset used by the quiz. Every answer below is computed from this data, not typed by hand.
const years = [2021, 2022, 2023, 2024];
const branches = ['CSE', 'ECE', 'MECH', 'CIVIL'];
const data = { CSE: [120, 135, 150, 165], ECE: [90, 100, 95, 110], MECH: [60, 55, 70, 75], CIVIL: [45, 50, 48, 52] };
const val = (b, y) => data[b][years.indexOf(y)];
const yearTotal = y => branches.reduce((s, b) => s + val(b, y), 0);
const branchTotal = b => data[b].reduce((x, y) => x + y, 0);
const round = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const TABLE = 'Number of students placed, by branch and year:\n\nYear | CSE | ECE | MECH | CIVIL\n' +
  years.map(y => `${y} | ${branches.map(b => val(b, y)).join(' | ')}`).join('\n') + '\n\n';

const chapter = {
  id: 'y1-data-reading-tables', year: 1, category: 'Data Interpretation', num: 31,
  title: 'Reading Data Tables',
  tagline: 'Year 1 Foundation — Locating values, comparing rows and columns, and doing the arithmetic a table question needs',
  minutes: 40,
  overview: 'A data table arranges numbers in rows and columns under headings. Table-based data interpretation (DI) questions ask you to read a value, compare values, and then use simple arithmetic such as totals, differences, averages, ratios and percentages. The skill is not hard mathematics but careful reading: finding the right row and the right column, noticing the units, and choosing the shortest calculation.',
  placement: 'Table-based DI sets are commonly asked in company aptitude rounds, usually as a table followed by four or five questions. They reward accuracy and a calm, methodical approach.',
  realWorld: 'Placement reports, sales sheets, exam results and bank statements are all tables. Reading them correctly is a daily skill for engineers and analysts.',
  objectives: [
    'Locate a value at the intersection of a row and a column',
    'Find totals, differences and averages across rows and columns',
    'Compute percentage change, percentage of total and ratios from table values',
    'Read units and headings carefully',
    'Use approximation to save time where options allow it'
  ],
  prereq: ['Basic Percentages', 'Basic Averages', 'Basic Ratio'],
  refresher: 'Percentage change = (new − old) ÷ old × 100. Percentage of total = part ÷ total × 100. Average = sum ÷ count. Ratio a : b is simplified by dividing both terms by their HCF.',
  defs: [
    'Row: a horizontal line of values (all values for one year, say). Column: a vertical line of values (all values for one branch, say).',
    'Cell: the single value where a row and a column meet.',
    'Heading and unit: the label of a row or column and the unit of its values (students, ₹ lakh, tonnes).',
    'Total: the sum of the values in a row or column. Difference: one value minus another.',
    'Percentage increase or decrease: the change between two values expressed as a percentage of the earlier value.'
  ],
  intuition: 'A table question is a three-step process: (1) read the question and decide which cells are needed, (2) pick up only those numbers, (3) do the shortest calculation. Skimming the whole table first for a "feel" for its size is useful, but computing everything in advance is a waste of time.',
  mental: 'Put one finger on the row heading and another on the column heading and slide them together until they meet. Say the value aloud, with its unit, before doing any arithmetic.',
  formulas: [
    ['Reading a cell', 'Value = cell at (row, column)', 'Match the heading and the year or category exactly.', 'Direct reading questions.', 'CSE in 2023 = 150'],
    ['Totals and averages', 'Total = sum of values;  Average = Total ÷ number of values', 'Check that you use the right number of values.', 'Sum and mean questions.', 'ECE average over 4 years = (90 + 100 + 95 + 110) ÷ 4 = 98.75'],
    ['Percentage change', '(New − Old) ÷ Old × 100', 'The base is the earlier value.', 'Growth questions.', 'CSE 2021 → 2024: (165 − 120) ÷ 120 × 100 = 37.5%'],
    ['Percentage of total', 'Part ÷ Total × 100', 'The base is the total.', 'Share questions.', 'Civil in 2022 = 50 ÷ 340 × 100 ≈ 14.7%'],
    ['Ratio', 'a : b simplified by their HCF', 'Reduce to the simplest form.', 'Comparison questions.', '120 : 60 = 2 : 1']
  ],
  narrative: [
    'Always read the title and the units first. A table of "students placed" and a table of "salary in ₹ lakh" can look alike, but the arithmetic and the interpretation differ. If a column says "in thousands", then every value must be multiplied by 1000 when a question asks for the actual number.',
    'To answer a question, find only the cells that matter. "Total students placed in 2022" needs one row; "Highest value for CSE" needs one column; "Increase in ECE between 2021 and 2024" needs two cells of the same column. Reading the question twice often saves more time than any shortcut.',
    'Percentages from tables follow two patterns. Percentage change uses the earlier value as the base: the CSE count rose from 120 to 165, so the increase is 45 ÷ 120 × 100 = 37.5%. Percentage of total uses the total as the base: in 2022 the civil branch placed 50 out of 340 students, which is about 14.7%.',
    'Many options are close together, which allows approximation. If the options for 150 ÷ 363 × 100 are 38.1, 41.3, 43.5 and 45.0, a rough calculation (150 ÷ 360 ≈ 0.42) is enough to choose 41.3.',
    'Common traps are mixing rows and columns, using the wrong base in a percentage, and forgetting the unit. When your answer looks unusual (for example more than 100% for a share), recheck the cells you used.'
  ],
  deep: [
    ['Comparing growth across rows', 'Absolute increase and percentage increase can rank the rows differently. CSE grew by 45 students and CIVIL by 7, so CSE has the larger absolute growth; the percentage growth is 37.5% versus 15.6%. Read the question to know which one is asked for.'],
    ['Checking totals as a safety step', 'If a table includes a total row or column, use it to verify your reading of individual cells. If the numbers do not add up, you may have misread a value.']
  ],
  variations: [
    ['Direct reading', 'Find a single value.', 'CSE in 2023.'],
    ['Totals and differences', 'Add or subtract values.', 'Total placed in 2022.'],
    ['Averages', 'Mean of a row or column.', 'Average of ECE over 4 years.'],
    ['Percentage questions', 'Change or share.', 'Percentage increase of CSE 2021–2024.'],
    ['Ratio and comparison', 'Compare two cells.', 'CSE : MECH in 2021.']
  ],
  examples: [
    {
      title: 'Total of a row',
      q: 'Using the table of students placed, find the total number of students placed in 2022.',
      given: ['Row 2022: CSE 135, ECE 100, MECH 55, CIVIL 50'],
      concept: 'A total is the sum of all values in the row.',
      steps: [
        ['Pick the row', 'Row 2022 has the values 135, 100, 55 and 50.'],
        ['Add', '135 + 100 = 235. Then 235 + 55 = 290. Then 290 + 50 = 340.']
      ],
      ans: String(yearTotal(2022)),
      why: 'Adding in pairs makes the sum easy to check.',
      trap: 'Using the 2023 row by mistake.'
    },
    {
      title: 'Percentage change',
      q: 'By what percentage did CSE placements increase from 2021 to 2024?',
      given: ['CSE 2021 = 120', 'CSE 2024 = 165'],
      concept: 'Percentage change = (New − Old) ÷ Old × 100.',
      steps: [
        ['Find the increase', '165 − 120 = 45.'],
        ['Divide by the old value', '45 ÷ 120 = 0.375.'],
        ['Convert to a percentage', '0.375 × 100 = 37.5%.']
      ],
      ans: '37.5%',
      why: 'The base is the earlier value, 120.',
      trap: 'Dividing 45 by 165 to get 27.3%.'
    },
    {
      title: 'Percentage of a total',
      q: 'What percentage of the students placed in 2022 belonged to CIVIL (to one decimal place)?',
      given: ['CIVIL 2022 = 50', 'Total 2022 = 340'],
      concept: 'Share = Part ÷ Total × 100.',
      steps: [
        ['Write the fraction', '50 ÷ 340.'],
        ['Compute', '50 ÷ 340 = 0.14706.'],
        ['Convert and round', '0.14706 × 100 = 14.7%.']
      ],
      ans: String(round(50 / 340 * 100, 1)) + '%',
      why: 'The total of the row is the base.',
      trap: 'Using a column total instead of the row total.'
    }
  ],
  shortcut: {
    title: 'Pick-only-what-you-need',
    trad: 'Compute the total of every row and column before reading the questions.',
    fast: 'Read the question first, pick up only the cells it needs, and use approximation when the options are far apart. Keep a small side note for any total you compute, because later questions often reuse it.',
    rules: [
      'Read the title, units and headings before the questions.',
      'Percentage change uses the old value as the base; percentage of total uses the total.',
      'Round numbers to make a rough check against the options.',
      'Reuse totals you have already worked out.'
    ]
  },
  mistakes: [
    ['Reading the wrong row or column', 'Moving the finger a line too far.', 'Say the row and column headings aloud before reading the value.'],
    ['Using the wrong base for a percentage', 'Dividing by the new value or by the wrong total.', 'Decide whether the question asks for change (old base) or share (total base).'],
    ['Ignoring the unit', 'Treating "in thousands" as plain numbers.', 'Note the unit at the top of the table before calculating.'],
    ['Careless addition', 'Adding a long column mentally.', 'Add in pairs and cross-check with the totals if given.']
  ],
  tips: {
    sec: 60,
    elim: 'Use approximation: round the values and compare with the options before doing exact arithmetic.',
    advice: 'Do the direct-reading questions first, then the percentage and ratio ones.',
    insight: 'The data is always right in front of you; accuracy of reading is the main skill being tested.'
  },
  revision: [
    'Read title, units and headings first.',
    'Pick only the needed cells.',
    'Percentage change: old base. Percentage of total: total base.',
    'Ratio: simplify using the HCF.',
    'Approximate when options are far apart.'
  ],
  quickFormulas: ['% change = (new − old)/old × 100', '% share = part/total × 100', 'Average = total/count'],
  takeaways: [
    'Careful reading beats fast calculation.',
    'Know which base to use.',
    'Units matter.',
    'Approximate when you can.'
  ],
  selfCheck: [
    'Can I compute the percentage increase between two cells?',
    'Can I find the share of one cell in its row total?',
    'Can I simplify the ratio of two cells?'
  ],
  sources: [
    ['How to Prepare for Data Interpretation for CAT — Arun Sharma', 'Textbook', 'Table-based data interpretation as a topic area; the data and examples here are original.']
  ]
};

const pct = (n) => String(n) + '%';

const quiz = [
  easy(TABLE + 'How many CSE students were placed in 2023?', val('CSE', 2023), [135, 165, 95], 'Read the row 2023 and the column CSE: 150.'),
  easy(TABLE + 'What is the total number of students placed in 2022?', yearTotal(2022), [yearTotal(2021), yearTotal(2023), 325], 'Add the 2022 row: 135 + 100 + 55 + 50 = ' + yearTotal(2022) + '.'),
  easy(TABLE + 'Which branch had the lowest placements in 2021?', 'CIVIL', ['MECH', 'ECE', 'CSE'], 'In 2021 the values are 120, 90, 60 and 45. The lowest is CIVIL (45).'),
  easy(TABLE + 'By how many students did ECE placements in 2024 exceed those in 2021?', val('ECE', 2024) - val('ECE', 2021), [10, 15, 25], 'ECE 2024 − ECE 2021 = 110 − 90 = 20.'),
  easy(TABLE + 'What is the total number of MECH students placed over the four years?', branchTotal('MECH'), [250, 265, 270], 'Add the MECH column: 60 + 55 + 70 + 75 = 260.'),
  easy(TABLE + 'In which year did CSE have its highest placements?', 2024, [2021, 2022, 2023], 'The CSE values are 120, 135, 150 and 165. The highest is in 2024.'),

  medium(TABLE + 'By what percentage did CSE placements increase from 2021 to 2024?', pct(round((val('CSE', 2024) - val('CSE', 2021)) / val('CSE', 2021) * 100, 1)), ['27.3%', '45%', '33.3%'], 'Increase = 165 − 120 = 45. Percentage = 45 ÷ 120 × 100 = 37.5%.'),
  medium(TABLE + 'What is the average number of ECE students placed per year?', round(data.ECE.reduce((a, b) => a + b, 0) / 4, 2), [95, 100, 98], 'Total = 90 + 100 + 95 + 110 = 395. Average = 395 ÷ 4 = 98.75.'),
  medium(TABLE + 'What is the ratio of CSE to MECH placements in 2021?', (val('CSE', 2021) / gcd(val('CSE', 2021), val('MECH', 2021))) + ' : ' + (val('MECH', 2021) / gcd(val('CSE', 2021), val('MECH', 2021))), ['3 : 2', '1 : 2', '4 : 3'], '120 : 60 simplifies (divide by 60) to 2 : 1.'),
  medium(TABLE + 'In which year was the total number of placements the highest?', 2024, [2021, 2022, 2023], 'The yearly totals are ' + years.map(yearTotal).join(', ') + '. The highest is in 2024.'),
  medium(TABLE + 'In which year did ECE placements fall compared with the previous year?', 2023, [2022, 2024, 2021], 'ECE values are 90, 100, 95, 110. The only fall is from 100 (2022) to 95 (2023).'),
  medium(TABLE + 'What percentage of the students placed in 2022 belonged to CIVIL (to one decimal place)?', pct(round(val('CIVIL', 2022) / yearTotal(2022) * 100, 1)), ['12.5%', '16.7%', '20.0%'], 'Share = 50 ÷ 340 × 100 = 14.7%.'),
  medium(TABLE + 'By how many students does the 2024 total exceed the 2021 total?', yearTotal(2024) - yearTotal(2021), [77, 90, 102], 'Totals: 2021 = ' + yearTotal(2021) + ', 2024 = ' + yearTotal(2024) + '. Difference = ' + (yearTotal(2024) - yearTotal(2021)) + '.'),
  medium(TABLE + 'What is the average number of students placed per branch in 2023?', round(yearTotal(2023) / 4, 2), [85.5, 92, 95.25], 'Total for 2023 = ' + yearTotal(2023) + '. Average = ' + yearTotal(2023) + ' ÷ 4 = ' + round(yearTotal(2023) / 4, 2) + '.'),

  placement(TABLE + 'The CSE and ECE branches together accounted for what percentage of the total placements in 2024 (to one decimal place)?', pct(round((val('CSE', 2024) + val('ECE', 2024)) / yearTotal(2024) * 100, 1)), ['62.4%', '72.5%', '75.0%'], 'CSE + ECE = 165 + 110 = 275. Total = ' + yearTotal(2024) + '. Share = 275 ÷ ' + yearTotal(2024) + ' × 100 = ' + round(275 / yearTotal(2024) * 100, 1) + '%.'),
  placement(TABLE + 'Which branch showed the greatest absolute increase in placements from 2021 to 2024?', 'CSE', ['ECE', 'MECH', 'CIVIL'], 'Increases: CSE 45, ECE 20, MECH 15, CIVIL 7. CSE has the greatest increase.'),
  placement(TABLE + 'If CSE placements in 2025 grow by the same number as the 2023–2024 increase, how many CSE students will be placed in 2025?', val('CSE', 2024) + (val('CSE', 2024) - val('CSE', 2023)), [170, 175, 185], 'Increase in 2024 = 165 − 150 = 15. So 2025 = 165 + 15 = 180.'),
  placement(TABLE + 'CSE placements in 2023 were what percentage of the 2023 total (to one decimal place)?', pct(round(val('CSE', 2023) / yearTotal(2023) * 100, 1)), ['38.1%', '43.5%', '45.0%'], 'Total 2023 = ' + yearTotal(2023) + '. Share = 150 ÷ ' + yearTotal(2023) + ' × 100 = ' + round(150 / yearTotal(2023) * 100, 1) + '%.'),
  placement(TABLE + 'The ratio of the total CSE placements to the total CIVIL placements over the four years, in the simplest form, is', (branchTotal('CSE') / gcd(branchTotal('CSE'), branchTotal('CIVIL'))) + ' : ' + (branchTotal('CIVIL') / gcd(branchTotal('CSE'), branchTotal('CIVIL'))), ['3 : 1', '57 : 20', '19 : 6'], 'CSE total = ' + branchTotal('CSE') + ' and CIVIL total = ' + branchTotal('CIVIL') + '. Dividing both by their HCF (' + gcd(branchTotal('CSE'), branchTotal('CIVIL')) + ') gives the ratio.'),
  placement(TABLE + 'The combined 2021 placements of ECE and CIVIL equal the CSE placements of which year?', 2022, [2021, 2023, 2024], 'ECE + CIVIL in 2021 = 90 + 45 = 135, which is the CSE value in 2022.')
];

build(chapter, quiz);
