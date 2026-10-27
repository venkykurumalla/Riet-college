const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-quant-basic-ages', year: 1, category: 'Quantitative Foundation', num: 12,
  title: 'Problems on Ages',
  tagline: 'Year 1 Foundation — Turning age statements into equations',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/aptitude/problems-on-ages/',
  overview: 'Age problems describe how the ages of two or more people are related now, in the past or in the future, and ask you to find an unknown age. They look like word puzzles, but they all reduce to one or two linear equations. Two facts drive every problem: everybody ages at the same rate, so the difference between two ages never changes, and after n years every person\'s age increases by n.',
  placement: 'Problems on ages are commonly asked in company aptitude rounds as short word problems. The skill tested is translating the sentence into an equation quickly and without a sign error.',
  realWorld: 'Working out when a child will be half a parent\'s age, planning insurance terms or checking eligibility rules based on age uses the same reasoning.',
  objectives: [
    'Represent present, past and future ages using a variable',
    'Use the constant-difference property of ages',
    'Convert ratio statements into equations with a multiplier',
    'Solve problems with two unknowns using substitution',
    'Check answers by returning to the original wording'
  ],
  prereq: ['Basic Ratio', 'Linear equations in one variable'],
  refresher: 'To solve ax + b = c, subtract b from both sides and divide by a. A ratio p : q for two ages means they are px and qx for some x.',
  defs: [
    'Present age: the age now. If the present age is x, then n years ago it was x − n and n years later it will be x + n.',
    'Age difference: the gap between two people\'s ages. It stays the same at every point of time.',
    'Ratio of ages p : q: the ages are px and qx, where x is a common multiplier.',
    'Sum of ages: if the sum of two ages is S now, it will be S + 2n after n years, since both ages increase by n.',
    'Average age of a group: total of ages ÷ number of people, so total age = average × number of people.'
  ],
  intuition: 'Time moves for everyone together. If a father is 30 years older than his son today, he will be exactly 30 years older in any year. The ratio of their ages, however, changes every year. The best strategy is to anchor the equation on the unchanged difference whenever it is given, and to use ratios only at one fixed point in time.',
  mental: 'Draw a small timeline with three columns: Past, Present, Now+Future. Write the unknown in the Present column, then add or subtract the given years in the other columns. The sentence in the question will say which column the equation belongs to.',
  formulas: [
    ['Age after or before n years', 'Age after n years = x + n,  Age n years ago = x − n', 'Ages shift by the same number for every person.', 'Any past or future statement.', 'Present age 25 → in 10 years 35, 5 years ago 20'],
    ['Constant difference', 'Difference = (Elder − Younger), the same at all times', 'The gap never changes.', 'When two ages are linked by a difference.', 'A is 9 years older than B always'],
    ['Ratio statement', 'Ages in ratio p : q  →  px and qx', 'A single multiplier represents both ages.', 'Questions that give the ratio of ages.', 'Ratio 3 : 4 → ages 3x and 4x'],
    ['Ratio after n years', '(px + n)/(qx + n) = r/s', 'Add n to each age, then cross-multiply.', 'Questions that give two ratios at two times.', '(4x + 5)/(5x + 5) = 5/6 → x = 5'],
    ['Group average', 'Total age = Average × Number of people', 'Total ages can be added or removed.', 'Family or class average age problems.', 'Average 24 for 5 people → total 120']
  ],
  narrative: [
    'The approach never changes: choose the variable for the age you are asked about (or for the smaller age), express everyone else\'s present age in terms of it, translate the key sentence into an equation, solve, and then verify against the wording.',
    'If the problem gives a ratio now and another ratio after some years, use the ratio multiplier for the first ratio and substitute into the second. For example, if the ratio is 4 : 5 now and 5 : 6 after 5 years, write (4x + 5)/(5x + 5) = 5/6, cross-multiply to get 24x + 30 = 25x + 25, so x = 5, and the ages are 20 and 25.',
    'When a past or future condition involves "times as old", the equation is written for that moment. "10 years ago A was twice B" means A − 10 = 2(B − 10), where A and B are present ages. Be careful to subtract the same years from both sides of the comparison.',
    'Two-unknown problems are best solved by substitution. For instance, if a father is 7 times as old as his son and 4 years hence he will be 4 times as old, then F = 7S and F + 4 = 4(S + 4). Substituting gives 7S + 4 = 4S + 16, so S = 4 and F = 28.'
  ],
  deep: [
    ['Why you cannot add the same number to a ratio', 'If two ages are in the ratio 3 : 4 now, they are 3x and 4x. After 5 years they are 3x + 5 and 4x + 5, which is not 8 : 9. The ratio changes because the same amount is added to each age, not to each ratio term.'],
    ['Using the constant difference to skip a variable', 'If the difference is known to be d, write the elder as the younger plus d. A single variable then describes both ages, and the second statement gives one equation.']
  ],
  variations: [
    ['Sum and difference', 'The sum and difference of ages are given.', 'The sum is 35 and A is 5 years older than B.'],
    ['Past and future conditions', 'A "times as old" statement in the past or the future.', '5 years ago the father was 4 times the son.'],
    ['Ratio now and later', 'Ratios at two points of time.', '4 : 5 now, 5 : 6 after 5 years.'],
    ['Average age', 'The average age of a group changes with time.', 'The average of a family of 5 is 24.'],
    ['Multiple people', 'Three or more ages in a ratio or sum.', 'A : B : C = 2 : 3 : 5.']
  ],
  examples: [
    {
      title: 'Sum and difference of ages',
      q: 'A is 5 years older than B and the sum of their ages is 35. Find A\'s age.',
      given: ['A = B + 5', 'A + B = 35'],
      concept: 'Express both ages with one variable.',
      steps: [
        ['Let B\'s age be x', 'Then A\'s age is x + 5.'],
        ['Form the equation', 'x + (x + 5) = 35, so 2x + 5 = 35.'],
        ['Solve', '2x = 30, x = 15. So A = 15 + 5 = 20.']
      ],
      ans: '20 years',
      why: 'Check: 20 + 15 = 35 and 20 − 15 = 5.',
      trap: 'Taking x as the age of A and then still adding 5.'
    },
    {
      title: 'Ratio now and ratio later',
      q: 'The present ages of two persons are in the ratio 4 : 5. After 5 years the ratio becomes 5 : 6. Find the present ages.',
      given: ['Ratio now = 4 : 5', 'Ratio after 5 years = 5 : 6'],
      concept: 'Ages are 4x and 5x now; add 5 to each for the later condition.',
      steps: [
        ['Write the future ratio', '(4x + 5)/(5x + 5) = 5/6.'],
        ['Cross-multiply', '6(4x + 5) = 5(5x + 5), so 24x + 30 = 25x + 25.'],
        ['Solve', 'x = 5. The ages are 4 × 5 = 20 and 5 × 5 = 25.']
      ],
      ans: '20 and 25 years',
      why: 'Check: after 5 years the ages are 25 and 30, whose ratio is 5 : 6.',
      trap: 'Adding 5 to the ratio terms, as 9 : 10.'
    },
    {
      title: 'Two conditions, two unknowns',
      q: 'Three years ago a father was 7 times as old as his son. Three years from now he will be 4 times as old as his son. Find their present ages.',
      given: ['F − 3 = 7(S − 3)', 'F + 3 = 4(S + 3)'],
      concept: 'Write one equation for each moment and solve by substitution.',
      steps: [
        ['Equation for the past', 'F − 3 = 7S − 21, so F = 7S − 18.'],
        ['Equation for the future', 'F + 3 = 4S + 12, so F = 4S + 9.'],
        ['Equate the two expressions for F', '7S − 18 = 4S + 9, so 3S = 27 and S = 9.'],
        ['Find the father', 'F = 4 × 9 + 9 = 45.']
      ],
      ans: 'Father 45 years, son 9 years',
      why: 'Check: 3 years ago they were 42 and 6 (42 = 7 × 6); in 3 years they will be 48 and 12 (48 = 4 × 12).',
      trap: 'Forgetting to subtract (or add) the years from the son\'s age on the right-hand side.'
    }
  ],
  shortcut: {
    title: 'Use the constant difference',
    trad: 'Create separate unknowns for each person and solve a pair of simultaneous equations.',
    fast: 'If the difference d is given, write the elder as the younger + d. If a ratio is given, use the multiplier and form just one equation. Most problems then need only one variable.',
    rules: [
      'The difference of any two ages never changes.',
      'Ages after n years: add n to every person. The sum of k people\'s ages increases by kn.',
      'For a ratio now, use px and qx; for a ratio later, add the years to px and qx.',
      'Always check the final ages against every statement in the question.'
    ]
  },
  mistakes: [
    ['Adding the years to the ratio terms', 'Treating the ratio as an age.', 'Convert to actual ages px and qx first, then add the years.'],
    ['Forgetting that both sides shift', 'Writing "A − 10 = 2B" instead of "A − 10 = 2(B − 10)".', 'Mark each person\'s age on the timeline for that moment.'],
    ['Defining the variable for the wrong person', 'Solving correctly but answering for the other person.', 'Underline who the question asks about before writing the final answer.'],
    ['Misusing "older" and "younger"', 'Subtracting the difference instead of adding it.', 'Write the relation as a short equation: A = B + 9 when A is 9 years older.']
  ],
  tips: {
    sec: 75,
    elim: 'Substitute option values into the key sentence. Because age problems have integer answers, only one option usually satisfies every condition.',
    advice: 'Age problems are quick once practised. Skip any problem that needs three variables on the first pass.',
    insight: 'Age problems test whether you can read a sentence precisely, a skill valued across the verbal and reasoning sections too.'
  },
  revision: [
    'Ages shift by the same amount for everyone.',
    'The difference between ages is constant.',
    'Ratio p : q → px and qx.',
    'Write an equation for each time-point mentioned in the question.',
    'Verify the answer against all conditions.'
  ],
  quickFormulas: ['Age after n years = x + n', 'Ratio p : q → px, qx', 'Total age = Average × number'],
  takeaways: [
    'One variable is usually enough.',
    'Handle past and future conditions by adding or subtracting for every person.',
    'Verify the answer in words, not just in algebra.',
    'The age difference is your most reliable fact.'
  ],
  selfCheck: [
    'Can I translate "5 years ago the father was 4 times as old as the son" into an equation?',
    'Can I solve a problem that gives the ratio of two ages now and again after some years?',
    'Can I compute the average age of a family after a baby is born?'
  ],
  sources: [
    ['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'The Problems on Ages topic area; examples in this chapter are original.'],
    ['NCERT Mathematics, Class 7–8 (Linear Equations in One Variable)', 'Textbook', 'Word problems that lead to linear equations.']
  ]
};

const quiz = [
  easy('A is 5 years older than B and the sum of their ages is 35. A\'s age is', 20, [15, 25, 30], 'Let B = x, so A = x + 5. Then 2x + 5 = 35, giving x = 15 and A = 20.'),
  easy('A is three times as old as B. If B is 8 years old, A\'s age is', 24, [11, 16, 32], 'A = 3 × 8 = 24 years.'),
  easy('If a person is 25 years old now, his age 10 years from now will be', 35, [15, 30, 45], '25 + 10 = 35.'),
  easy('The sum of the ages of a father and son is 50. If the father is 4 times as old as the son, the son\'s age is', 10, [8, 12, 15], 'Father + son = 4x + x = 5x = 50, so the son\'s age x = 10.'),
  easy('The ages of two persons are in the ratio 3 : 4 and their sum is 56. The younger person\'s age is', 24, [21, 28, 32], 'The sum has 7 parts, so one part = 8. The younger is 3 × 8 = 24.'),
  easy('Two brothers differ in age by 4 years. If the elder is 19 years old, the younger one\'s age 4 years ago was', 11, [13, 15, 19], 'Younger now = 19 − 4 = 15. Four years ago he was 15 − 4 = 11.'),

  medium('Five years ago a father was 4 times as old as his son. The sum of their present ages is 50. The father\'s present age is', 37, [35, 40, 42], 'Let the son be s and the father f. f − 5 = 4(s − 5) and f + s = 50. Then f = 4s − 15, so 5s − 15 = 50, giving s = 13 and f = 37.'),
  medium('The ages of two persons are in the ratio 4 : 5. After 5 years the ratio will be 5 : 6. The age of the elder person now is', 25, [20, 30, 35], 'Ages are 4x and 5x. (4x + 5)/(5x + 5) = 5/6 gives 24x + 30 = 25x + 25, so x = 5. The elder is 25.'),
  medium('A is 9 years older than B. In 10 years A will be twice as old as B was 10 years ago. A\'s present age is', 48, [39, 45, 52], 'Let B = b, so A = b + 9. A + 10 = 2(b − 10) gives b + 19 = 2b − 20, so b = 39 and A = 48.'),
  medium('The average age of a family of 5 members is 24 years and the youngest member is 8 years old. The average age of the family (the other 4 members) at the time of the youngest\'s birth was', 20, [24, 22, 28], 'Total age now = 120, so the other four total 112. Eight years ago each was 8 years younger: 112 − 4 × 8 = 80. Average = 80 ÷ 4 = 20 years.'),
  medium('A mother is 3 times as old as her daughter. After 12 years she will be twice as old as her daughter. The daughter\'s present age is', 12, [10, 15, 18], 'Let the daughter be d. 3d + 12 = 2(d + 12) gives d = 12 and the mother is 36.'),
  medium('A father is 7 times as old as his son. After 4 years he will be 4 times as old. The father\'s present age is', 28, [21, 35, 42], 'Let the son be s. 7s + 4 = 4(s + 4) gives 3s = 12, so s = 4 and the father is 28.'),
  medium('The ages of two persons are in the ratio 5 : 7 and the difference of their ages is 8 years. The elder\'s age is', 28, [20, 35, 40], 'The difference is 2 parts = 8, so one part = 4. The elder is 7 × 4 = 28.'),
  medium('The ages of A and B are in the ratio 5 : 3. Four years ago the sum of their ages was 32. A\'s present age is', 25, [15, 20, 30], 'Present sum = 32 + 8 = 40. A = 40 × 5/8 = 25.'),

  placement('The present ages of Sameer and Anita are in the ratio 5 : 4. Three years from now the ratio will be 11 : 9. Anita\'s age 3 years ago was', 21, [18, 24, 27], 'Ages are 5x and 4x. (5x + 3)/(4x + 3) = 11/9 gives 45x + 27 = 44x + 33, so x = 6. Anita is 24 now and was 21 three years ago.'),
  placement('A father is 30 years older than his son, who is now 10 years old. In how many years will the father be 3 times as old as the son?', 5, [3, 4, 8], 'Father is 40. After n years: 40 + n = 3(10 + n), so 40 + n = 30 + 3n, giving n = 5.'),
  placement('The ages of A, B and C are in the ratio 2 : 3 : 5 and their sum is 100. B\'s age 10 years ago was', 20, [10, 25, 30], 'Total parts = 10, so one part = 10. B = 30 now and 20 ten years ago.'),
  placement('The present ages of A and B are in the ratio 3 : 4. Ten years ago A was half as old as B. The sum of their present ages is', 35, [28, 42, 49], 'Ages are 3k and 4k. 3k − 10 = (4k − 10)/2 gives 6k − 20 = 4k − 10, so k = 5. Ages are 15 and 20, sum 35.'),
  placement('A man is 24 years older than his son. In two years his age will be twice the age of his son. The man\'s present age is', 46, [36, 44, 48], 'Let the son be s, the man s + 24. s + 26 = 2(s + 2) gives s = 22 and the man is 46.'),
  placement('Three years ago a father was 7 times as old as his son. Three years from now he will be 4 times as old. The son\'s present age is', 9, [6, 10, 12], 'F − 3 = 7(S − 3) gives F = 7S − 18. F + 3 = 4(S + 3) gives F = 4S + 9. Equating: 3S = 27, so S = 9 and F = 45.')
];

build(chapter, quiz);
