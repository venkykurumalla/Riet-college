const { easy, medium, placement, build } = require('../lib.cjs');
const r2 = x => Math.round(x * 100) / 100;

const chapter = {
  id: 'y2-quant-adv-averages', year: 2, category: 'Advanced Quantitative Aptitude', num: 7, difficulty: 'Intermediate',
  title: 'Advanced Averages',
  tagline: 'Year 2 — Weighted averages, overlapping groups, corrections and average speed',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/aptitude/average/',
  overview: 'Year 1 averages were direct: sum divided by count, joining and leaving. Year 2 extends to weighted averages of several groups, overlapping groups, wrongly read data corrected later, averages changing across innings, and average speed over unequal parts of a journey. The tool remains Sum = Average × Count, used with careful bookkeeping.',
  placement: 'Average questions are commonly asked in company aptitude rounds, and multi-step ones with overlapping or corrected data are a typical intermediate-level item.',
  realWorld: 'Batting averages, class marks, average fuel consumption and average temperature over several days all use these methods.',
  objectives: [
    'Compute weighted averages of groups of different sizes',
    'Solve overlapping groups where one item is counted twice',
    'Correct an average after a wrongly read value',
    'Find a missing value when the average changes',
    'Compute average speed for equal distances, equal times and unequal parts'
  ],
  prereq: ['Basic Averages', 'Advanced Ratio and Proportion'],
  refresher: 'Sum = Average × Count. Average speed = total distance ÷ total time.',
  defs: [
    'Weighted average: (Σ nᵢaᵢ) ÷ Σ nᵢ.',
    'Overlap: an item belonging to two groups so that adding the group totals counts it twice.',
    'Correction: when a wrong value x was used instead of y, the corrected sum is old sum − x + y.',
    'Average speed for equal distances: 2xy/(x + y). For equal times: (x + y)/2.',
    'Change in average × number of items = change in total.'
  ],
  intuition: 'An average is a balance point. Moving one item by d changes the total by d and the average by d ÷ n. So every average-change question reduces to a difference of totals.',
  mental: 'Always convert to totals first. Do the arithmetic on totals (add, remove, replace, correct), then divide again at the end.',
  formulas: [
    ['Weighted average', '(n₁a₁ + n₂a₂ + …) ÷ (n₁ + n₂ + …)', 'Weights are group sizes.', 'Combining classes.', '(15×40 + 25×48) ÷ 40 = 45'],
    ['Correction', 'Correct average = Old average + (y − x)/n', 'x was used instead of y.', 'Wrongly read data.', '25 read as 52: 40 − 27/25 = 38.92'],
    ['Change in average', 'New item = Old average + (change × new count)', 'Joining or replacing.', 'Innings and class problems.', '100 in 13th: avg 48 → 52'],
    ['Average speed (equal distances)', '2xy ÷ (x + y)', 'Harmonic mean.', 'Go and return.', '30 and 20 → 24'],
    ['Overlap', 'Overlapping item = (sum of group totals) − (total of all)', 'Counted twice.', 'First-five and last-five groups.', '5×20 + 5×24 − 9×22 = 22']
  ],
  narrative: [
    'For weighted averages, multiply each group average by its size, add the totals and divide by the total number. 15 boys averaging 40 and 25 girls averaging 48 have totals 600 and 1200; the combined average is 1800 ÷ 40 = 45.',
    'For overlapping groups, add the totals of the two groups and subtract the total of all items; the difference is the item counted twice. With 9 numbers averaging 22, first five averaging 20 and last five averaging 24, the fifth is 100 + 120 − 198 = 22.',
    'For corrections, find the change in total (new − wrong value) and divide by the count. If 25 numbers average 40 and one value 25 was misread as 52, the true total is 1000 − 27 = 973 and the average 38.92.',
    'For innings problems, the average after one more innings is (old total + new score) ÷ (n + 1). A batsman with average 48 after 12 innings scoring 100 in the 13th has (576 + 100) ÷ 13 = 52.',
    'For average speed over equal distances, use 2xy/(x + y). For unequal parts, find the time of each part: with 2/3 of the distance at 40 km/h and 1/3 at 60 km/h, the time per km is (2/3)/40 + (1/3)/60 = 1/45, so 45 km/h.'
  ],
  deep: [
    ['Average of an AP', 'For consecutive or equally spaced numbers, the average equals the middle value (or the mean of the first and last). Eight consecutive numbers with average 25.5 start at 22.'],
    ['Why average speed is harmonic', 'Equal distances at different speeds take different times, so the slower speed counts for more. Hence the average is less than the simple mean.']
  ],
  variations: [
    ['Weighted groups', 'Combine class averages.', '15 boys and 25 girls'],
    ['Overlapping groups', 'Find the repeated item.', 'First five and last five of nine'],
    ['Corrections', 'Fix a misread value.', '25 read as 52'],
    ['Innings and replacements', 'Change in average.', '100 in the 13th innings'],
    ['Average speed', 'Equal or unequal parts.', '30 km/h out, 20 km/h back']
  ],
  examples: [
    {
      title: 'Weighted average',
      q: 'A class has 15 boys with average mark 40 and 25 girls with average mark 48. Find the average of the whole class.',
      given: ['n₁ = 15, a₁ = 40', 'n₂ = 25, a₂ = 48'],
      concept: 'Weighted average.',
      steps: [['Totals', '15 × 40 = 600 and 25 × 48 = 1200.'], ['Combine', '(600 + 1200) ÷ 40 = 45.']],
      ans: '45', why: 'Girls are more numerous, so the average is closer to 48.', trap: 'Using (40 + 48)/2 = 44.'
    },
    {
      title: 'Overlapping groups',
      q: 'The average of 9 numbers is 22. The average of the first five is 20 and of the last five is 24. Find the fifth number.',
      given: ['9 numbers, avg 22', 'First five avg 20', 'Last five avg 24'],
      concept: 'The fifth number is in both groups.',
      steps: [['Total of all', '9 × 22 = 198.'], ['Group totals', '5 × 20 = 100 and 5 × 24 = 120, together 220.'], ['Overlap', '220 − 198 = 22.']],
      ans: '22', why: 'The two groups together count the fifth number twice.', trap: 'Forgetting the double count.'
    },
    {
      title: 'Correcting an average',
      q: 'The average of 25 numbers was found to be 40. Later it was discovered that 25 had been read as 52. Find the correct average.',
      given: ['n = 25, avg = 40', 'wrong 52, correct 25'],
      concept: 'Correct the total.',
      steps: [['Wrong total', '25 × 40 = 1000.'], ['Correct total', '1000 − 52 + 25 = 973.'], ['Correct average', '973 ÷ 25 = 38.92.']],
      ans: '38.92', why: 'The total falls by 27.', trap: 'Adding 27 instead of subtracting.'
    }
  ],
  shortcut: {
    title: 'Total-first method',
    trad: 'Reason with averages directly.',
    fast: 'Convert to totals, update the total once, divide. For corrections, change in average = change in sum ÷ n.',
    rules: ['Use totals, not averages.', 'Overlap = sum of group totals − total.', 'Equal distance average speed = 2xy/(x+y).', 'Check the answer is within the data range.']
  },
  mistakes: [
    ['Averaging averages', 'Ignoring group sizes.', 'Use weights.'],
    ['Wrong sign in corrections', 'Adding instead of subtracting.', 'New total = old − wrong + correct.'],
    ['Forgetting overlap', 'Counting a shared item once.', 'Add group totals, subtract the whole.'],
    ['Simple mean for speed', '(x + y)/2 for equal distances.', 'Use 2xy/(x + y).']
  ],
  tips: { sec: 75, elim: 'A combined average must lie between the group averages.', advice: 'Write totals in a small table; avoid mental juggling.', insight: 'Average-based DI questions use the same bookkeeping.' },
  revision: ['Sum = avg × n.', 'Weighted average.', 'Overlap formula.', 'Correction formula.', 'Average speed.'],
  quickFormulas: ['(Σnᵢaᵢ)/Σnᵢ', '2xy/(x+y)'],
  takeaways: ['Work with totals.', 'Account for overlap.', 'Correct by the difference.', 'Use harmonic mean for equal distances.'],
  selfCheck: ['Can I find a missing value from averages of overlapping groups?', 'Can I correct an average?', 'Can I compute average speed for unequal parts?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Average topic area; examples are original.']]
};

const quiz = [
  easy('The average of 4 numbers is 15. A fifth number 20 is added. The new average is', 16, [15, 17, 17.5], 'Total = 60 + 20 = 80. Average = 80 ÷ 5 = 16.'),
  easy('The average of three consecutive odd numbers is 15. The largest is', 17, [15, 16, 19], 'The numbers are 13, 15, 17. The largest is 17.'),
  easy('The average of the first 50 natural numbers is', 25.5, [25, 26, 24.5], '(1 + 50)/2 = 25.5.'),
  easy('A car travels for equal times at 40 km/h and 60 km/h. The average speed is', 50, [48, 52, 45], 'For equal times, average = (40 + 60)/2 = 50.'),
  easy('The average of 5 numbers is 30. If each number is increased by 4, the new average is', 34, [30, 32, 36], 'Each number rises by 4, so the average rises by 4, from 30 to 34.'),
  easy('15 boys have an average mark of 40 and 25 girls have an average mark of 48. The average of all 40 students is', 45, [44, 46, 44.5], 'Total = 600 + 1200 = 1800. Average = 1800 ÷ 40 = 45.'),

  medium('A batsman\'s average after 12 innings is 48. He scores 100 in the 13th innings. His new average is', 52, [50, 51, 53], 'Total = 576 + 100 = 676. Average = 676 ÷ 13 = 52.'),
  medium('The average weight of 6 men increases by 1.5 kg when a man weighing 60 kg is replaced by a new man. The weight of the new man is', 69, [66, 72, 75], 'Total rises by 6 × 1.5 = 9. New man = 60 + 9 = 69.'),
  medium('The average age of 10 men is 30. When one man is replaced by a 40-year-old, the average becomes 31. The age of the man replaced was', 30, [28, 32, 35], 'Total rises by 10. So the replaced man = 40 − 10 = 30.'),
  medium('A man travels 2/3 of a distance at 40 km/h and the rest at 60 km/h. His average speed is', 45, [48, 50, 46.67], 'Time per km = (2/3)/40 + (1/3)/60 = 1/60 + 1/180 = 4/180 = 1/45. Speed = 45 km/h.'),
  medium('The average of 7 numbers is 15. The average of the first four is 14 and of the last four is 16. The fourth number is', 15, [14, 16, 12], '4 × 14 + 4 × 16 = 120. Total of 7 = 105. The fourth is counted twice: 120 − 105 = 15.'),
  medium('The average mark of 30 students is 45. If the 5 lowest scores (average 40) are removed, the average of the remaining 25 is', 46, [45, 47, 48], 'Total = 1350. Remove 200: 1150. Average = 1150 ÷ 25 = 46.'),
  medium('The average of 8 consecutive numbers is 25.5. The smallest number is', 22, [21, 23, 24], 'Average = (first + last)/2 = 25.5, so first + last = 51, with last = first + 7. First = 22.'),
  medium('A man spends ₹1,500 per month for 3 months, ₹1,800 for 4 months and ₹2,100 for 5 months. His average monthly expense for the 12 months is', 1850, [1800, 1900, 1750], 'Total = 4500 + 7200 + 10500 = 22,200. Average = 22,200 ÷ 12 = 1,850.'),

  placement('The average of 25 numbers is 40. A number 25 was read as 52. The correct average is', 38.92, [39, 40.54, 38.5], 'Correct total = 1000 − 52 + 25 = 973. Average = 973 ÷ 25 = 38.92.'),
  placement('The average age of 40 students is 15 years. When the teacher\'s age is included, the average rises by 0.5 year. The teacher\'s age is', 35.5, [30, 35, 36], 'New total = 41 × 15.5 = 635.5. Old total = 600. Teacher = 35.5.'),
  placement('The average of 9 numbers is 22. The average of the first five is 20 and of the last five is 24. The fifth number is', 22, [20, 24, 26], '5 × 20 + 5 × 24 = 220. Total = 198. The fifth number is 220 − 198 = 22.'),
  placement('A man goes from A to B at 30 km/h and returns at 20 km/h. If the total travelling time is 5 hours, the distance AB is', 60, [50, 72, 120], 'Average speed = 2 × 30 × 20 ÷ 50 = 24 km/h. Total distance = 24 × 5 = 120, so AB = 60 km.'),
  placement('The average of 50 numbers is 38. If two numbers 45 and 55 are removed, the average of the remaining 48 numbers is', 37.5, [38, 37, 36.5], 'Total = 1900. After removing 100: 1800. Average = 1800 ÷ 48 = 37.5.'),
  placement('A batsman\'s average rises by 3 after his 17th innings, in which he scored 87. His average after 17 innings is', 39, [36, 38, 42], 'Let the old average be a. 16a + 87 = 17(a + 3), so a = 36. New average = 39.')
];
build(chapter, quiz);
