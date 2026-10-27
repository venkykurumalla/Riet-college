const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-quant-basic-averages', year: 1, category: 'Quantitative Foundation', num: 9,
  title: 'Basic Averages',
  tagline: 'Year 1 Foundation — Mean, sums, changing groups and weighted averages',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/aptitude/average/',
  overview: 'The average (arithmetic mean) of a set of numbers is their sum divided by how many there are. It answers the question: "if every item were equal, what value would each one have?" The most useful way to work with averages is to turn them back into totals using Sum = Average × Number of items, because totals can be added, removed and replaced, while averages cannot.',
  placement: 'Average questions are commonly asked in company aptitude rounds, either directly (find the mean) or in changing-group form (a person joins, leaves or is replaced). They also appear inside data interpretation sets.',
  realWorld: 'Marks in an exam, a batsman\'s batting average, mileage of a car over a trip and the average temperature of a week are all averages.',
  objectives: [
    'Compute the average of a list and of standard sequences such as the first n natural numbers',
    'Convert between average and total using Sum = Average × Count',
    'Solve problems where a member joins, leaves or is replaced',
    'Combine group averages with weights',
    'Find average speed when equal distances are covered at different speeds'
  ],
  prereq: ['Fractions and decimals', 'Basic Ratio'],
  refresher: 'The sum of the first n natural numbers is n(n+1)/2. The sum of the first n odd numbers is n² and the sum of the first n even numbers is n(n+1).',
  defs: [
    'Average (arithmetic mean) = (sum of all observations) ÷ (number of observations).',
    'Total or sum = Average × Number of observations. This is the same formula rearranged and is the engine of most average problems.',
    'Weighted average: when groups of different sizes are combined, the combined average = (sum of group totals) ÷ (total number of items).',
    'Average speed = Total distance ÷ Total time. It is not the simple average of two speeds unless the times are equal.',
    'Deviation from the average: the sum of the differences of all observations from their average is always zero.'
  ],
  intuition: 'The average sits "in the middle" of the data in the sense of balance: values above it exactly cancel the values below it. This is why adding a number above the current average raises the average, and why the change in average multiplied by the group size gives the total effect of the change.',
  mental: 'Imagine each value as a stack of coins. Averaging means levelling the stacks so all are equal. The total number of coins never changes while you level them, which is why Sum = Average × Count.',
  formulas: [
    ['Average', 'Average = Sum ÷ Number of items', 'Basic definition.', 'Any direct average question.', '(12 + 15 + 18 + 21 + 24) ÷ 5 = 18'],
    ['Sum from average', 'Sum = Average × Number of items', 'Recovers the total, which can then be adjusted.', 'Problems where an item joins, leaves or is changed.', 'Average 15 for 10 students → sum = 150'],
    ['Standard sequences', 'First n natural numbers: (n+1)/2.  First n odd numbers: n.  First n even numbers: n+1.', 'Closed forms for common series.', 'Average of 1 to n and similar.', 'Average of first 20 odd numbers = 20'],
    ['Combined average', 'Combined = (n₁a₁ + n₂a₂) ÷ (n₁ + n₂)', 'Weight each group average by its size.', 'Merging two classes or two batches.', '(30×60 + 20×70) ÷ 50 = 64'],
    ['Average speed (equal distances)', 'Average speed = 2xy ÷ (x + y)', 'The harmonic mean of the two speeds.', 'Going and returning over the same distance.', '60 km/h and 40 km/h → 2×60×40 ÷ 100 = 48 km/h']
  ],
  narrative: [
    'Always translate an average into a total as the first move. If the average age of 10 students is 15, the total age is 150. When a teacher joins and the average becomes 16, the total becomes 11 × 16 = 176, so the teacher is 176 − 150 = 26.',
    'When a new member joins, the change in the average multiplied by the new group size tells you how far the newcomer is from the old average. When one member is replaced, the change in average multiplied by the group size is exactly the difference between the new and the old member.',
    'To find the average of consecutive numbers, take the middle value. Seven consecutive numbers with average 20 are 17 to 23, so the largest is 23. The same idea works for any arithmetic progression.',
    'Average speed is total distance over total time. If the outward and return distances are equal, the harder-looking formula 2xy/(x+y) is just this ratio simplified. If times are equal, the average speed is the simple mean of the speeds.'
  ],
  deep: [
    ['Effect of operations on the average', 'If every number is increased by k, the average increases by k. If every number is multiplied by k, the average is multiplied by k. These facts let you answer many questions without recomputing the total.'],
    ['Why the average speed is not the mean of speeds', 'More time is spent at the slower speed than at the faster one for equal distances, so the slower speed carries more weight. That is why 48 km/h, not 50 km/h, is the average of 60 and 40 over equal distances.']
  ],
  variations: [
    ['Direct average', 'Compute the mean of a list or a standard series.', 'Average of the first 10 natural numbers.'],
    ['Joining or leaving', 'A person is added to or removed from a group.', 'A teacher joins 10 students and the average rises by 1.'],
    ['Replacement', 'One member is swapped for another.', 'A person weighing 65 kg is replaced and the average rises by 2.5 kg.'],
    ['Combined groups', 'Merge averages of different-sized groups.', 'Two classes with averages 60 and 70.'],
    ['Average speed', 'Equal distances at two speeds.', 'Going at 60 km/h, returning at 40 km/h.']
  ],
  examples: [
    {
      title: 'A teacher joins a class',
      q: 'The average age of 10 students is 15 years. When the teacher\'s age is included, the average becomes 16 years. Find the teacher\'s age.',
      given: ['10 students, average 15', 'With teacher: 11 people, average 16'],
      concept: 'Sum = Average × Number of people.',
      steps: [
        ['Total age of students', '10 × 15 = 150.'],
        ['Total age with the teacher', '11 × 16 = 176.'],
        ['Subtract', 'Teacher\'s age = 176 − 150 = 26.', '176 − 150 = 26']
      ],
      ans: '26 years',
      why: 'The only change in the total is the teacher\'s age, so the difference of totals is that age.',
      trap: 'Using 10 instead of 11 for the new group size.'
    },
    {
      title: 'Combining two classes',
      q: 'Class A has 30 students with an average mark of 60 and Class B has 20 students with an average of 70. Find the average mark of all 50 students.',
      given: ['n₁ = 30, a₁ = 60', 'n₂ = 20, a₂ = 70'],
      concept: 'Combined average = total marks ÷ total students.',
      steps: [
        ['Total marks of A', '30 × 60 = 1800.'],
        ['Total marks of B', '20 × 70 = 1400.'],
        ['Combine', '(1800 + 1400) ÷ 50 = 3200 ÷ 50 = 64.', '3200 ÷ 50 = 64']
      ],
      ans: '64',
      why: 'Each class contributes in proportion to its size, so the combined average lies closer to the larger class\'s 60 than the simple mean 65 does.',
      trap: 'Averaging 60 and 70 to get 65, ignoring the class sizes.'
    },
    {
      title: 'Overlapping groups',
      q: 'The average of 11 results is 50. The average of the first six is 49 and the average of the last six is 52. Find the sixth result.',
      given: ['11 results, average 50', 'First six average 49', 'Last six average 52'],
      concept: 'The sixth result is counted in both groups.',
      steps: [
        ['Total of all 11', '11 × 50 = 550.'],
        ['Total of first six and last six', '6 × 49 = 294 and 6 × 52 = 312. Together 294 + 312 = 606.'],
        ['Find the overlap', 'The sixth result is counted twice in 606 but once in 550, so it equals 606 − 550 = 56.', '606 − 550 = 56']
      ],
      ans: '56',
      why: 'The two groups together cover all 11 results plus the sixth one again.',
      trap: 'Forgetting that the sixth result belongs to both groups.'
    }
  ],
  shortcut: {
    title: 'Change in average × group size',
    trad: 'Compute both totals separately, then subtract them.',
    fast: 'Multiply the change in the average by the group size. If a person joins and the average rises by 1 for 11 people, the newcomer is 11 above the old average of 15, which is 26.',
    rules: [
      'Replacement: new member − old member = change in average × group size.',
      'Joining: newcomer = old average + (change in average × new group size).',
      'For consecutive numbers the average is the middle value.',
      'Adding or multiplying all items by k does the same to the average.'
    ]
  },
  mistakes: [
    ['Averaging the averages', 'Ignoring that groups have different sizes.', 'Always multiply each average by its group size to get totals before combining.'],
    ['Wrong count after a change', 'Forgetting that the group size changes when a person joins or leaves.', 'Write the new count explicitly before computing the new total.'],
    ['Using the simple mean for average speed', 'The mean of 60 and 40 looks like 50.', 'Use total distance ÷ total time, or 2xy/(x+y) for equal distances.'],
    ['Miscounting terms in a series', 'Counting the number of terms between two values incorrectly.', 'Use the count = (last − first) ÷ difference + 1.']
  ],
  tips: {
    sec: 60,
    elim: 'The combined average must lie between the two group averages and closer to the larger group. This eliminates wrong options quickly.',
    advice: 'Convert to totals at once. Most average questions then become one-line addition or subtraction.',
    insight: 'Average questions often hide inside data interpretation sets, so speed on this topic helps in that section as well.'
  },
  revision: [
    'Average = Sum ÷ Count, and Sum = Average × Count.',
    'Average of 1 to n is (n+1)/2; first n odd numbers average n.',
    'Combined average needs group sizes as weights.',
    'Replacement difference = change in average × group size.',
    'Equal-distance average speed = 2xy/(x+y).'
  ],
  quickFormulas: ['Sum = Avg × n', 'Combined = (n₁a₁ + n₂a₂)/(n₁ + n₂)', '2xy/(x + y)'],
  takeaways: [
    'Turn averages into totals as the first step.',
    'The size of the group matters whenever averages are combined.',
    'Check that the answer lies in a sensible range.',
    'Average speed is total distance over total time.'
  ],
  selfCheck: [
    'Can I find the average of the first 15 even numbers without adding them?',
    'Can I find the weight of a person who replaces another and shifts the average?',
    'Can I explain why the average of 60 km/h and 40 km/h over equal distances is not 50?'
  ],
  sources: [
    ['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'The Average topic area; examples in this chapter are original.'],
    ['NCERT Mathematics, Class 7–9 (Statistics)', 'Textbook', 'Arithmetic mean as introduced in school mathematics.']
  ]
};

const quiz = [
  easy('Find the average of 12, 15, 18, 21 and 24.', 18, [16, 19, 20], 'Sum = 12 + 15 + 18 + 21 + 24 = 90. Average = 90 ÷ 5 = 18.', 'The numbers are evenly spaced, so the average is the middle number, 18.'),
  easy('The average of the first 10 natural numbers is', 5.5, [5, 6, 10], 'Sum = 10 × 11 ÷ 2 = 55. Average = 55 ÷ 10 = 5.5.', 'Average of 1 to n = (n + 1) ÷ 2.'),
  easy('The average of 5 numbers is 40. Their sum is', 200, [45, 160, 400], 'Sum = Average × Count = 40 × 5 = 200.'),
  easy('The average of three numbers is 20. If two of them are 15 and 25, the third number is', 20, [10, 15, 25], 'Total = 3 × 20 = 60. Third = 60 − (15 + 25) = 20.'),
  easy('The average of the first five even numbers is', 6, [5, 6.5, 10], 'The numbers are 2, 4, 6, 8, 10 with sum 30. Average = 30 ÷ 5 = 6.', 'First n even numbers have average n + 1 = 6.'),
  easy('A student scored 70, 80 and 90 in three tests. The average score is', 80, [75, 85, 240], 'Sum = 240. Average = 240 ÷ 3 = 80.'),

  medium('The average age of 10 students is 15 years. When the teacher\'s age is included the average becomes 16. The teacher\'s age is', 26, [25, 27, 31], 'Students\' total = 150. Total with teacher = 11 × 16 = 176. Teacher = 176 − 150 = 26.'),
  medium('The average of 5 numbers is 27. If one number is removed, the average of the remaining numbers becomes 25. The removed number is', 35, [30, 32, 37], 'Total of 5 = 135. Total of 4 = 100. Removed number = 135 − 100 = 35.'),
  medium('The average of 6 numbers is 20. If every number is multiplied by 3, the new average is', 60, [23, 26, 120], 'Multiplying every number by 3 multiplies the average by 3. New average = 20 × 3 = 60.'),
  medium('A batsman\'s average after 15 innings is 32. He scores 48 in the 16th innings. His new average is', 33, [32.5, 34, 35], 'Total after 15 = 480. Total after 16 = 528. New average = 528 ÷ 16 = 33.'),
  medium('The average of the first 20 odd numbers is', 20, [19, 21, 40], 'The sum of the first n odd numbers is n² = 400. Average = 400 ÷ 20 = 20.'),
  medium('A car goes from A to B at 60 km/h and returns at 40 km/h along the same road. The average speed for the round trip is', 48, [50, 52, 45], 'For equal distances, average speed = 2 × 60 × 40 ÷ (60 + 40) = 4800 ÷ 100 = 48 km/h.', '2xy ÷ (x + y).'),
  medium('Class A has 30 students with average mark 60 and Class B has 20 students with average mark 70. The average of all 50 students is', 64, [65, 63, 66], 'Total marks = 30 × 60 + 20 × 70 = 1800 + 1400 = 3200. Average = 3200 ÷ 50 = 64.'),
  medium('The average of 7 consecutive numbers is 20. The largest of them is', 23, [20, 24, 26], 'For consecutive numbers the average is the middle one, so the numbers are 17 to 23. The largest is 23.'),

  placement('The average of 11 results is 50. The average of the first six is 49 and of the last six is 52. The sixth result is', 56, [52, 54, 58], 'Total of 11 = 550. First six total = 294, last six total = 312. The sixth is counted twice in 294 + 312 = 606, so it is 606 − 550 = 56.'),
  placement('The average weight of 8 persons increases by 2.5 kg when a new person replaces one of them weighing 65 kg. The weight of the new person is', 85, [80, 82.5, 90], 'Total weight rises by 8 × 2.5 = 20 kg. New person = 65 + 20 = 85 kg.', 'Difference = change in average × group size.'),
  placement('The average of 9 numbers is 30. The average of the first five is 25 and of the last five is 34. The fifth number is', 25, [26, 28, 30], 'Total of 9 = 270. First five = 125, last five = 170, together 295. The fifth is counted twice, so it is 295 − 270 = 25.'),
  placement('The average salary of 10 employees is ₹20,000. When the manager\'s salary is added, the average rises by ₹1,000. The manager\'s salary is', 31000, [30000, 21000, 32000], 'Total of 10 = 200000. Total of 11 = 11 × 21000 = 231000. Manager = 231000 − 200000 = ₹31,000.'),
  placement('Five years ago the average age of a husband and wife was 23. Now, with a child, the average age of the family of three is 20. The child\'s present age is', 4, [3, 5, 6], 'Present total age of the couple = 2 × 23 + 2 × 5 = 56. Family total = 3 × 20 = 60. Child = 60 − 56 = 4 years.'),
  placement('The average of 30 numbers is 25. If two numbers 18 and 22 are replaced by 52 and 48, the new average is', 27, [26, 28, 29], 'The sum of the replaced numbers rises from 40 to 100, an increase of 60. The average rises by 60 ÷ 30 = 2, so it becomes 27.')
];

build(chapter, quiz);
