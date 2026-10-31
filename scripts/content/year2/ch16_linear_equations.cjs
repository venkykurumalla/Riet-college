const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-linear-equations', year: 2, category: 'Advanced Quantitative Aptitude', num: 16, difficulty: 'Intermediate',
  title: 'Linear Equations',
  tagline: 'Year 2 — One and two variables, word problems and consistency',
  minutes: 45,
  overview: 'A linear equation has variables only to the first power. One equation in one variable, like 3x + 5 = 20, is solved by isolating x. Two equations in two variables, like x + y = 10 and x − y = 2, are solved by substitution or elimination. Many word problems (ages, money, digits, shares) become linear equations once you name the unknowns.',
  placement: 'Linear equations are commonly asked in company aptitude rounds, directly and as the engine of age, digit and money problems.',
  realWorld: 'Budget splits, break-even calculations, mixture quantities and speed-time relations are solved with linear equations.',
  objectives: [
    'Solve linear equations in one variable',
    'Solve two equations in two variables by elimination and substitution',
    'Translate word problems into equations',
    'Solve digit, age, money and fraction problems',
    'Decide whether a pair of equations has one, no or infinitely many solutions'
  ],
  prereq: ['Algebraic Expressions', 'Problems on Ages'],
  refresher: 'Whatever you do to one side of an equation, do to the other. A pair of equations with two unknowns needs two independent equations.',
  defs: [
    'Linear equation: ax + b = 0 form, variables to the power 1.',
    'Solution: values that make the equation true.',
    'Elimination: add or subtract the equations to remove one variable.',
    'Substitution: express one variable in terms of the other and substitute.',
    'Consistency: a pair a₁x + b₁y = c₁, a₂x + b₂y = c₂ has a unique solution if a₁/a₂ ≠ b₁/b₂, no solution if a₁/a₂ = b₁/b₂ ≠ c₁/c₂, infinitely many if all three ratios are equal.'
  ],
  intuition: 'An equation is a balance. Operations that keep the balance (adding the same number, multiplying both sides) do not change the solution. Two unknowns need two balances, and combining them removes one unknown.',
  mental: 'In a word problem, define the unknown for exactly what is asked, write each sentence as an equation, and solve. Check by substituting back into the story.',
  formulas: [
    ['One variable', 'ax + b = c → x = (c − b)/a', 'Isolate x.', '3x + 5 = 20 → x = 5', '3x + 5 = 20'],
    ['Elimination', 'Multiply to match coefficients, then add or subtract', 'Removes one variable.', 'Two-variable systems.', 'x + y = 10, x − y = 2 → x = 6'],
    ['Cramer-type shortcut', 'x = (c₁b₂ − c₂b₁)/(a₁b₂ − a₂b₁), y = (a₁c₂ − a₂c₁)/(a₁b₂ − a₂b₁)', 'Direct formula.', 'When numbers are awkward.', '3x + 2y = 16, x + y = 6 → x = 4'],
    ['Two-digit numbers', 'Number = 10a + b; reversed = 10b + a', 'Digits a and b.', 'Digit problems.', 'a + b = 9, b − a = 3 → 36'],
    ['Consistency', 'a₁/a₂ vs b₁/b₂ vs c₁/c₂', 'Compare ratios.', 'Value of k for identical lines.', '2x+3y=5 and 4x+ky=10 → k = 6']
  ],
  narrative: [
    'For one variable, move terms so x is alone. 3x + 5 = 20 gives 3x = 15 and x = 5. For fractions, multiply by the LCM: (x + 1)/2 − (x − 1)/3 = 3 becomes 3(x + 1) − 2(x − 1) = 18, so x + 5 = 18 and x = 13.',
    'For two variables, use elimination. From 3x + 2y = 16 and x + y = 6, double the second to get 2x + 2y = 12, then subtract: x = 4 and y = 2. Substitution gives the same result: y = 6 − x, so 3x + 12 − 2x = 16.',
    'Word problems: name the unknowns. Three pens and two pencils cost ₹34; two pens and three pencils cost ₹31. With pen = p and pencil = q: 3p + 2q = 34 and 2p + 3q = 31. Eliminate q: 9p + 6q = 102 and 4p + 6q = 62, so 5p = 40 and p = 8, q = 5.',
    'Digit problems: let the digits be a and b. If the digits add to 9 and reversing them increases the number by 27, then (10b + a) − (10a + b) = 9(b − a) = 27, so b − a = 3. With a + b = 9 the digits are 3 and 6, and the number is 36.',
    'Consistency: the equations 2x + 3y = 5 and 4x + ky = 10 describe the same line when the ratios of all coefficients are equal: 2/4 = 3/k = 5/10, so k = 6.'
  ],
  deep: [
    ['Substitute to check', 'After solving, substitute the values back into both equations and, for word problems, into the story. This catches mistakes in translation.'],
    ['Number of unknowns and equations', 'With fewer equations than unknowns you get a family of solutions; the question will then give integer or range conditions that fix the answer.']
  ],
  variations: [
    ['One variable', 'Direct.', '3x + 5 = 20'],
    ['Two variables', 'Elimination.', 'x + y = 10, x − y = 2'],
    ['Word problems', 'Pens and pencils.', '3p + 2q = 34'],
    ['Digits', 'Two-digit numbers.', 'Sum 9; reversed adds 27'],
    ['Consistency', 'Find k.', 'Identical lines']
  ],
  examples: [
    {
      title: 'Elimination',
      q: 'Solve 3x + 2y = 16 and x + y = 6.',
      given: ['3x + 2y = 16', 'x + y = 6'],
      concept: 'Eliminate y.',
      steps: [['Double the second', '2x + 2y = 12.'], ['Subtract', '(3x + 2y) − (2x + 2y) = 16 − 12, so x = 4.'], ['Find y', 'y = 6 − 4 = 2.']],
      ans: 'x = 4, y = 2', why: 'Check: 12 + 4 = 16.', trap: 'Subtracting the wrong sides.'
    },
    {
      title: 'Pens and pencils',
      q: '3 pens and 2 pencils cost ₹34 and 2 pens and 3 pencils cost ₹31. Find the price of a pen.',
      given: ['3p + 2q = 34', '2p + 3q = 31'],
      concept: 'Eliminate q.',
      steps: [['Multiply', '×3: 9p + 6q = 102. ×2: 4p + 6q = 62.'], ['Subtract', '5p = 40, so p = 8.'], ['Pencil', '3(8) + 2q = 34, so q = 5.']],
      ans: '₹8', why: 'Check: 2(8) + 3(5) = 31.', trap: 'Dividing the totals equally.'
    },
    {
      title: 'Two-digit number',
      q: 'The sum of the digits of a two-digit number is 9. If the digits are reversed, the number increases by 27. Find the number.',
      given: ['a + b = 9', '(10b + a) − (10a + b) = 27'],
      concept: 'Number = 10a + b.',
      steps: [['Second equation', '9b − 9a = 27, so b − a = 3.'], ['Solve', 'a + b = 9 and b − a = 3 give b = 6, a = 3.'], ['Number', '36.']],
      ans: '36', why: 'Reversed number 63 = 36 + 27.', trap: 'Mixing the tens and units digits.'
    }
  ],
  shortcut: {
    title: 'Elimination first',
    trad: 'Substitute and expand every time.',
    fast: 'Multiply to match one coefficient, add or subtract, and solve; or use the Cramer formula for awkward numbers.',
    rules: ['Define unknowns for what is asked.', 'Check by substitution.', 'Digit problems: 10a + b.', 'Identical lines: equal ratios.']
  },
  mistakes: [
    ['Wrong translation', 'Writing "3 less than x" as 3 − x.', 'Say it aloud: x − 3.'],
    ['Sign slip in elimination', 'Subtracting a negative incorrectly.', 'Write each step.'],
    ['Not checking', 'Leaving the answer unverified.', 'Substitute in the story.'],
    ['Wrong digit forms', 'Using ab as a × b.', 'Use 10a + b.']
  ],
  tips: { sec: 70, elim: 'Test the options in the original equations; only one satisfies both.', advice: 'Practice translating sentences.', insight: 'Linear equations underlie ages, mixtures and speeds.' },
  revision: ['Isolate x.', 'Elimination and substitution.', '10a + b for digits.', 'Check by substitution.', 'Consistency ratios.'],
  quickFormulas: ['10a + b', 'a₁/a₂ = b₁/b₂ = c₁/c₂'],
  takeaways: ['Define unknowns clearly.', 'Eliminate or substitute.', 'Check.', 'Translate carefully.'],
  selfCheck: ['Can I solve two equations by elimination?', 'Can I model a digit problem?', 'Can I find k for identical lines?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Linear equations as used in word problems; examples are original.'], ['NCERT Mathematics, Class 9–10', 'Textbook', 'Linear equations in one and two variables.']]
};

const quiz = [
  easy('Solve 3x + 5 = 20. x equals', 5, [4, 6, 15], '3x = 15, so x = 5.'),
  easy('Solve 2x − 7 = 9. x equals', 8, [1, 7, 16], '2x = 16, so x = 8.'),
  easy('Solve x/4 + 3 = 8. x equals', 20, [5, 12, 44], 'x/4 = 5, so x = 20.'),
  easy('Solve 5(x − 2) = 25. x equals', 7, [3, 5, 9], 'x − 2 = 5, so x = 7.'),
  easy('The sum of two numbers is 40 and their difference is 10. The larger number is', 25, [15, 20, 30], 'Larger = (40 + 10)/2 = 25.'),
  easy('If x + y = 10 and x − y = 2, then x equals', 6, [4, 8, 12], 'Adding: 2x = 12, so x = 6.'),

  medium('If 3x + 2y = 16 and x + y = 6, then y equals', 2, [1, 3, 4], 'x = 4 (from 3x + 2(6 − x) = 16), so y = 2.'),
  medium('3 pens and 2 pencils cost ₹34 and 2 pens and 3 pencils cost ₹31. The price of one pen is (in ₹)', 8, [6, 7, 9], '9p + 6q = 102 and 4p + 6q = 62 give 5p = 40, so p = 8.'),
  medium('A is 3 times as old as B. After 10 years A will be twice as old as B. A\'s present age is', 30, [20, 25, 36], 'A = 3B. 3B + 10 = 2(B + 10) gives B = 10, so A = 30.'),
  medium('The sum of the digits of a two-digit number is 9. If the digits are reversed, the number increases by 27. The number is', 36, [27, 45, 54], 'b − a = 3 and a + b = 9 give a = 3, b = 6. The number is 36.'),
  medium('A number divided by 2 plus the same number divided by 3 gives 25. The number is', 30, [25, 35, 150], 'x/2 + x/3 = 5x/6 = 25, so x = 30.'),
  medium('The perimeter of a rectangle is 52 cm and its length is 6 cm more than its breadth. The length is (cm)', 16, [10, 14, 20], '2(2b + 6) = 52 gives b = 10. Length = 16.'),
  medium('₹500 is paid in 7 notes of ₹50 and ₹100. The number of ₹100 notes is', 3, [2, 4, 5], '50a + 100b = 500 with a + b = 7 gives a = 4 and b = 3.'),
  medium('For what value of k do 2x + 3y = 5 and 4x + ky = 10 represent the same line?', 6, [4, 5, 8], '2/4 = 3/k = 5/10, so k = 6.'),

  placement('The sum of the digits of a two-digit number is 11. The number is 9 more than the number formed by reversing its digits. The number is', 65, [56, 74, 83], 'a − b = 1 and a + b = 11 give a = 6, b = 5. The number is 65.'),
  placement('₹3,600 is shared among A, B and C. A gets one-third of what B and C get together, and B gets one-half of what A and C get together. C\'s share is (in ₹)', 1500, [1200, 1000, 1800], 'A = total/4 = 900 and B = total/3 = 1200. C = 3600 − 2100 = 1500.'),
  placement('Four years ago A was 3 times as old as B. Six years from now A will be twice as old as B. A\'s present age is', 34, [30, 32, 36], 'a − 4 = 3(b − 4) gives a = 3b − 8. a + 6 = 2(b + 6) gives 3b − 2 = 2b + 12, so b = 14 and a = 34.'),
  placement('Solve (x + 1)/2 − (x − 1)/3 = 3. x equals', 13, [11, 12, 15], '3(x + 1) − 2(x − 1) = 18 gives x + 5 = 18, so x = 13.'),
  placement('If 3x + 4y = 24 and 5x − 4y = 8, then x + y equals', 7, [6, 8, 9], 'Adding: 8x = 32, so x = 4. Then 12 + 4y = 24, so y = 3. x + y = 7.'),
  placement('3 times a number plus 2 times another number is 19, and the first number plus 4 times the second is 13. The larger number is', 5, [2, 3, 4], 'a = 13 − 4b. 3(13 − 4b) + 2b = 19 gives 39 − 10b = 19, so b = 2 and a = 5.')
];
build(chapter, quiz);
