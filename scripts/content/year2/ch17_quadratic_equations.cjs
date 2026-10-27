const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-quadratic-equations', year: 2, category: 'Advanced Quantitative Aptitude', num: 17, difficulty: 'Intermediate',
  title: 'Quadratic Equations',
  tagline: 'Year 2 — Factorisation, the formula, roots and their relations',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/problems-on-ages/',
  overview: 'A quadratic equation has the form ax² + bx + c = 0 with a ≠ 0. It can have two, one or no real solutions (roots). The methods are factorisation, completing the square and the quadratic formula. Three relations about the roots (sum, product, and the discriminant) answer many aptitude questions without solving the equation at all.',
  placement: 'Quadratic equations are commonly asked in company aptitude rounds, both as a direct "find the roots" item and as a word problem (rectangle area, consecutive integers, price and quantity).',
  realWorld: 'Projectile motion, areas and breakeven calculations often lead to quadratic equations.',
  objectives: [
    'Solve quadratics by factorisation and the formula',
    'Use the sum and product of roots',
    'Use the discriminant to decide the nature of roots',
    'Form a quadratic from given roots',
    'Solve word problems that lead to quadratics'
  ],
  prereq: ['Algebraic Expressions', 'Linear Equations'],
  refresher: 'x² + px + q = (x + m)(x + n) when m + n = p and mn = q. The square of a real number is never negative.',
  defs: [
    'Quadratic equation: ax² + bx + c = 0, a ≠ 0. Roots: values of x that satisfy it.',
    'Quadratic formula: x = [−b ± √(b² − 4ac)] / 2a.',
    'Discriminant: D = b² − 4ac. D > 0: two real roots; D = 0: equal roots; D < 0: no real roots.',
    'Sum of roots = −b/a. Product of roots = c/a.',
    'Equation with roots α and β: x² − (α + β)x + αβ = 0.'
  ],
  intuition: 'The graph of a quadratic is a parabola. The roots are where it crosses the x-axis. The discriminant tells whether it crosses twice, touches once, or misses the axis.',
  mental: 'First try factorisation: look for two numbers with the right sum and product. If that fails, use the formula or the discriminant.',
  formulas: [
    ['Factorisation', 'x² + px + q = (x + m)(x + n), m + n = p, mn = q', 'Search for the pair.', 'Simple quadratics.', 'x² − 5x + 6 = (x − 2)(x − 3)'],
    ['Quadratic formula', 'x = [−b ± √(b² − 4ac)] / 2a', 'Works for every quadratic.', 'When factorisation is hard.', 'x² − 6x + 4 = 0 → 3 ± √5'],
    ['Sum and product', 'α + β = −b/a;  αβ = c/a', 'Without solving.', 'Relations among roots.', 'x² − 7x + 10 → sum 7, product 10'],
    ['Discriminant', 'D = b² − 4ac', 'Sign gives the nature.', 'Number of real roots.', '2x² − 4x + 3 → D = −8 (no real roots)'],
    ['Symmetric expressions', 'α² + β² = (α + β)² − 2αβ', 'Use the sum and product.', 'Values of expressions in the roots.', 'α + β = 5, αβ = 6 → 13']
  ],
  narrative: [
    'Factorise when you can. x² − 5x + 6 needs two numbers with sum −5 and product 6: −2 and −3, so (x − 2)(x − 3) = 0 and x = 2 or x = 3. For x² − 9, use the difference of squares: x = ±3.',
    'The quadratic formula handles every case. For x² − 6x + 4 = 0, D = 36 − 16 = 20, so x = (6 ± √20)/2 = 3 ± √5. The discriminant tells you before solving: D = b² − 4ac.',
    'For 2x² − 4x + 3 = 0, D = 16 − 24 = −8 < 0, so there are no real roots. When D = 0, the two roots are equal, as in x² − 4x + 4 = (x − 2)².',
    'Use the sum and product of roots to avoid solving. If α and β are the roots of x² − 5x + 6 = 0, then α + β = 5 and αβ = 6, so α² + β² = 25 − 12 = 13. To form an equation with roots 2 and 5, write x² − 7x + 10 = 0.',
    'Word problems: let the unknown be x and form the equation. The product of two consecutive positive integers is 132: x(x + 1) = 132, so x² + x − 132 = 0 and x = 11. For a rectangle of area 48 whose length is 2 more than its breadth: b(b + 2) = 48, so b = 6.'
  ],
  deep: [
    ['Rejecting roots', 'In word problems, a negative root may not make sense (negative length or age). Check each root against the context.'],
    ['Biquadratic type', 'An equation like x⁴ − 5x² + 4 = 0 is quadratic in x². Put y = x²: y² − 5y + 4 = 0 gives y = 1 or 4, so x = ±1, ±2: four real roots.']
  ],
  variations: [
    ['Find the roots', 'Factorise or use the formula.', 'x² − 5x + 6 = 0'],
    ['Sum and product', 'Relations of roots.', 'x² − 7x + 10 = 0'],
    ['Nature of roots', 'Discriminant.', '2x² − 4x + 3 = 0'],
    ['Form the equation', 'From roots.', 'Roots 2 and 5'],
    ['Word problems', 'Area, integers, prices.', 'Consecutive integers with product 132']
  ],
  examples: [
    {
      title: 'Factorisation',
      q: 'Solve x² − 5x + 6 = 0.',
      given: ['x² − 5x + 6 = 0'],
      concept: 'Find numbers with sum −5 and product 6.',
      steps: [['Pair', 'The numbers are −2 and −3.'], ['Factorise', '(x − 2)(x − 3) = 0.'], ['Roots', 'x = 2 or x = 3.']],
      ans: 'x = 2 or 3', why: 'Check: sum 5 and product 6.', trap: 'Using +2 and +3.'
    },
    {
      title: 'Symmetric expression',
      q: 'If α and β are the roots of x² − 5x + 6 = 0, find α² + β².',
      given: ['α + β = 5', 'αβ = 6'],
      concept: 'α² + β² = (α + β)² − 2αβ.',
      steps: [['Sum and product', '5 and 6.'], ['Expression', '25 − 12 = 13.']],
      ans: '13', why: 'Check: 2² + 3² = 13.', trap: 'Forgetting 2αβ.'
    },
    {
      title: 'Word problem',
      q: 'The product of two consecutive positive integers is 132. Find the smaller integer.',
      given: ['x(x + 1) = 132'],
      concept: 'Form and factorise the equation.',
      steps: [['Equation', 'x² + x − 132 = 0.'], ['Factorise', '(x + 12)(x − 11) = 0.'], ['Choose the positive root', 'x = 11.']],
      ans: '11', why: 'Check: 11 × 12 = 132.', trap: 'Accepting −12.'
    }
  ],
  shortcut: {
    title: 'Sum-product shortcuts',
    trad: 'Solve and substitute.',
    fast: 'Read sum and product from the coefficients; use D to decide the nature of roots; form the equation from roots directly.',
    rules: ['Sum = −b/a; product = c/a.', 'D < 0 → no real roots.', 'α² + β² = (α+β)² − 2αβ.', 'Reject roots that do not fit the story.']
  },
  mistakes: [
    ['Wrong signs in factorisation', 'Using +2, +3 for x² − 5x + 6.', 'Sum is −5, product is +6.'],
    ['Forgetting ± in the formula', 'Taking only one root.', 'Two roots from ±.'],
    ['Wrong sum formula', 'Using b/a for the sum.', 'Sum = −b/a.'],
    ['Not rejecting invalid roots', 'Negative lengths.', 'Check the context.']
  ],
  tips: { sec: 70, elim: 'Test options by substituting into the equation.', advice: 'Try factorisation first.', insight: 'Often the answer is an integer, so factorisation works.' },
  revision: ['Formula.', 'Sum = −b/a, product = c/a.', 'D sign.', 'Form equation from roots.', 'Reject invalid roots.'],
  quickFormulas: ['x = [−b ± √D]/2a', 'D = b² − 4ac'],
  takeaways: ['Factorise first.', 'Use sum and product.', 'Check D.', 'Fit roots to context.'],
  selfCheck: ['Can I solve x² − 5x + 6 = 0?', 'Can I find the nature of roots?', 'Can I form an equation with roots 2 and 5?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Quadratic equations topic area; examples are original.'], ['NCERT Mathematics, Class 10', 'Textbook', 'Quadratic equations.']]
};

const quiz = [
  easy('The roots of x² − 5x + 6 = 0 are', '2 and 3', ['−2 and −3', '1 and 6', '−2 and 3'], '(x − 2)(x − 3) = 0 gives x = 2 or 3.'),
  easy('The roots of x² − 9 = 0 are', '3 and −3', ['3 only', '9 and −9', '0 and 3'], 'x² = 9, so x = ±3.'),
  easy('The sum of the roots of x² − 7x + 10 = 0 is', 7, [10, -7, 3], 'Sum = −b/a = 7.'),
  easy('The product of the roots of x² − 7x + 10 = 0 is', 10, [7, -10, 3], 'Product = c/a = 10.'),
  easy('The discriminant of x² − 4x + 4 = 0 is', 0, [4, 8, -8], 'D = 16 − 16 = 0.'),
  easy('The roots of x² + x − 6 = 0 are', '2 and −3', ['2 and 3', '−2 and 3', '−2 and −3'], '(x + 3)(x − 2) = 0 gives x = −3 or 2.'),

  medium('If α and β are the roots of x² − 7x + 12 = 0, then α² + β² is', 25, [13, 49, 37], 'Roots are 3 and 4: 9 + 16 = 25.'),
  medium('The nature of the roots of 2x² − 4x + 3 = 0 is', 'no real roots', ['two equal roots', 'two distinct real roots', 'one real root'], 'D = 16 − 24 = −8 < 0.'),
  medium('If 3 is a root of x² − kx + 12 = 0, then k is', 7, [4, 5, 9], '9 − 3k + 12 = 0, so k = 7.'),
  medium('The positive root of x² − x − 20 = 0 is', 5, [4, 10, 20], '(x − 5)(x + 4) = 0 gives x = 5 or −4.'),
  medium('The product of the roots of 2x² − 5x + 3 = 0 is', '3/2', ['5/2', '−3/2', '2/3'], 'Product = c/a = 3/2.'),
  medium('The quadratic equation whose roots are 2 and 5 is', 'x² − 7x + 10 = 0', ['x² + 7x + 10 = 0', 'x² − 10x + 7 = 0', 'x² − 3x + 10 = 0'], 'x² − (sum)x + product = x² − 7x + 10.'),
  medium('The positive number whose square plus four times itself is 21 is', 3, [2, 4, 7], 'x² + 4x − 21 = 0 gives (x + 7)(x − 3) = 0, so x = 3.'),
  medium('The area of a rectangle is 48 sq. cm and its length is 2 cm more than its breadth. The breadth is (cm)', 6, [4, 8, 7], 'b(b + 2) = 48 gives b² + 2b − 48 = 0, so b = 6.'),

  placement('If α and β are the roots of x² − 5x + 6 = 0, then α² + β² is', 13, [11, 25, 19], '25 − 12 = 13.'),
  placement('The roots of x² − 6x + k = 0 differ by 2. The value of k is', 8, [6, 9, 12], 'The roots are 2 and 4 (sum 6, difference 2), so k = 8.'),
  placement('The product of two consecutive positive integers is 132. The smaller integer is', 11, [10, 12, 13], 'x(x + 1) = 132 gives x = 11.'),
  placement('A number plus its reciprocal is 10/3. The larger such number is', 3, ['1/3', 2, 10], 'x + 1/x = 10/3 gives 3x² − 10x + 3 = 0, so x = 3 or 1/3. The larger is 3.'),
  placement('A man buys some books for ₹80. If each book had cost ₹2 less, he would have got 2 more books for the same money. The price of one book is (in ₹)', 10, [8, 12, 16], 'n p = 80 and (n + 2)(p − 2) = 80 give p = n + 2, so n(n + 2) = 80, n = 8 and p = 10.'),
  placement('The number of real solutions of x⁴ − 5x² + 4 = 0 is', 4, [2, 3, 0], 'Let y = x²: y² − 5y + 4 = 0 gives y = 1 or 4, so x = ±1 and ±2.')
];
build(chapter, quiz);
