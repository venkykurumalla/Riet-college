const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-algebraic-expressions', year: 2, category: 'Advanced Quantitative Aptitude', num: 15, difficulty: 'Intermediate',
  title: 'Algebraic Expressions',
  tagline: 'Year 2 — Identities, factorisation and evaluating expressions quickly',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/aptitude/simplification/',
  overview: 'An algebraic expression combines numbers and letters with operations. The most useful tools in aptitude tests are the standard identities, such as (a + b)² and a² − b², which let you simplify, factorise and evaluate expressions without long arithmetic. A little algebra often turns a heavy calculation into a one-line answer.',
  placement: 'Algebraic identities are commonly used in company aptitude rounds for simplification questions and for finding values like a² + b² when a + b and ab are known.',
  realWorld: 'Simplifying formulas in engineering, checking expressions in code and reducing calculation effort by factoring all use the same identities.',
  objectives: [
    'Use the identities (a ± b)², a² − b², (a ± b)³ and a³ ± b³',
    'Evaluate expressions such as a² + b² from a + b and ab',
    'Factorise quadratic expressions and simple polynomials',
    'Use identities to compute squares and products quickly',
    'Simplify rational expressions'
  ],
  prereq: ['Simplification & BODMAS', 'Basic Percentages'],
  refresher: 'Like terms can be added; (a + b)(c + d) = ac + ad + bc + bd. A negative sign outside a bracket changes all signs inside.',
  defs: [
    'Expression: a combination of constants, variables and operations, with no equals sign.',
    'Term: each part separated by + or −. Factor: a quantity that divides an expression exactly.',
    'Identity: an equation true for all values of the variables.',
    'Factorisation: writing an expression as a product of simpler expressions.',
    'Coefficient: the number multiplying a variable.'
  ],
  intuition: 'Identities are shortcuts that hold for every number. Instead of computing 102² by long multiplication, write (100 + 2)² = 10000 + 400 + 4. Algebra is just organised arithmetic.',
  mental: 'Look for patterns: two squares with a minus (difference of squares), a perfect square trinomial, or a sum/difference that equals something known. Then apply the matching identity.',
  formulas: [
    ['Square identities', '(a + b)² = a² + 2ab + b²;  (a − b)² = a² − 2ab + b²', 'Expand or collapse.', 'Squares, a² + b².', '102² = 10000 + 400 + 4 = 10404'],
    ['Difference of squares', 'a² − b² = (a − b)(a + b)', 'Factor a difference of two squares.', 'Simplification.', '1002² − 998² = 4 × 2000 = 8000'],
    ['a² + b² from a + b', 'a² + b² = (a + b)² − 2ab = (a − b)² + 2ab', 'Use ab or a − b.', 'Value questions.', 'a + b = 7, ab = 10 → 49 − 20 = 29'],
    ['Cube identities', '(a + b)³ = a³ + 3a²b + 3ab² + b³;  a³ + b³ = (a + b)(a² − ab + b²);  a³ − b³ = (a − b)(a² + ab + b²)', 'Cubes and sums of cubes.', 'Cubic expressions.', '5³ + 3³ = 8 × 19 = 152'],
    ['Reciprocal pairs', 'x + 1/x = k → x² + 1/x² = k² − 2', 'Then x³ + 1/x³ = k³ − 3k.', 'x + 1/x type.', 'k = 3 → 7 and 18']
  ],
  narrative: [
    'The two identities to memorise first are (a + b)² = a² + 2ab + b² and a² − b² = (a − b)(a + b). With them, 102² = (100 + 2)² = 10,404, and 1002² − 998² = (1002 − 998)(1002 + 998) = 4 × 2000 = 8,000.',
    'To find a² + b² from a + b = 7 and ab = 10, use (a + b)² = a² + 2ab + b², so a² + b² = 49 − 20 = 29. Similarly a² + b² = (a − b)² + 2ab.',
    'For reciprocal pairs: if x + 1/x = 3, then x² + 1/x² = 3² − 2 = 7 and x³ + 1/x³ = 3³ − 3 × 3 = 18.',
    'To factorise a quadratic x² + px + q, find two numbers whose sum is p and product is q. x² + 7x + 10 = (x + 2)(x + 5).',
    'For sums and differences of cubes, a³ + b³ = (a + b)(a² − ab + b²). For 5³ + 3³ = 125 + 27 = 152, and (5 + 3)(25 − 15 + 9) = 8 × 19 = 152.'
  ],
  deep: [
    ['Why identities speed up arithmetic', 'Large squares become sums of small numbers. 99² = (100 − 1)² = 10,000 − 200 + 1 = 9,801.'],
    ['Checking by substitution', 'To verify a factorisation, put a simple value for x. If x = 1 gives different values on both sides, the factorisation is wrong.']
  ],
  variations: [
    ['Squares of numbers', 'Use (a ± b)².', '102²'],
    ['Difference of squares', 'a² − b².', '1002² − 998²'],
    ['Given a + b and ab', 'Find a² + b².', 'a + b = 7, ab = 10'],
    ['Reciprocal pairs', 'x + 1/x.', 'x + 1/x = 3'],
    ['Factorisation', 'Quadratic factors.', 'x² + 7x + 10']
  ],
  examples: [
    {
      title: 'Square by identity',
      q: 'Find 102² using an identity.',
      given: ['102 = 100 + 2'],
      concept: '(a + b)² = a² + 2ab + b².',
      steps: [['Split', '102 = 100 + 2.'], ['Expand', '100² + 2 × 100 × 2 + 2² = 10,000 + 400 + 4.'], ['Add', '10,404.']],
      ans: '10,404', why: 'No long multiplication is needed.', trap: 'Forgetting the middle term.'
    },
    {
      title: 'a² + b² from a + b and ab',
      q: 'If a + b = 7 and ab = 10, find a² + b².',
      given: ['a + b = 7', 'ab = 10'],
      concept: '(a + b)² = a² + b² + 2ab.',
      steps: [['Square the sum', '(a + b)² = 49.'], ['Subtract 2ab', 'a² + b² = 49 − 2 × 10 = 29.']],
      ans: '29', why: 'The two unknowns need not be found individually.', trap: 'Computing 7² − 10 = 39.'
    },
    {
      title: 'Reciprocal pair',
      q: 'If x + 1/x = 3, find x² + 1/x² and x³ + 1/x³.',
      given: ['x + 1/x = 3'],
      concept: 'Square and cube the given sum.',
      steps: [['Square', '(x + 1/x)² = x² + 2 + 1/x², so x² + 1/x² = 9 − 2 = 7.'], ['Cube', '(x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x), so x³ + 1/x³ = 27 − 9 = 18.']],
      ans: '7 and 18', why: 'The cross terms are known from the given sum.', trap: 'Forgetting the 3(x + 1/x) term.'
    }
  ],
  shortcut: {
    title: 'Pattern spotting',
    trad: 'Expand and multiply out in full.',
    fast: 'Spot (a ± b)², a² − b² or a known sum and product, then substitute into the identity.',
    rules: ['Know (a+b)², (a−b)², a²−b².', 'a² + b² = (a+b)² − 2ab.', 'x² + 1/x² = k² − 2.', 'Check by substituting a small number.']
  },
  mistakes: [
    ['Dropping 2ab', 'Writing (a + b)² = a² + b².', 'Always include the middle term.'],
    ['Sign errors', 'Confusing (a − b)² and a² − b².', 'They are different identities.'],
    ['Wrong cube expansion', 'Missing 3a²b or 3ab².', 'Memorise the pattern.'],
    ['Not checking', 'Leaving factorisation unverified.', 'Substitute a value.']
  ],
  tips: { sec: 45, elim: 'Test options with a quick substitution; wrong options usually fail at a small value.', advice: 'Memorise the six identities.', insight: 'Identities also appear inside quadratic equation questions.' },
  revision: ['(a±b)² identities.', 'a² − b² = (a−b)(a+b).', 'a² + b² from sum and product.', 'Cube identities.', 'x + 1/x trick.'],
  quickFormulas: ['a² + b² = (a+b)² − 2ab', 'x² + 1/x² = k² − 2'],
  takeaways: ['Identities save time.', 'Do not forget 2ab.', 'Verify with a small value.', 'Look for patterns.'],
  selfCheck: ['Can I compute 99² with an identity?', 'Can I find a² + b² from a + b and ab?', 'Can I factorise x² + 7x + 10?']
  ,
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Simplification and algebra topic area; examples are original.'], ['NCERT Mathematics, Class 8–9 (Algebraic Expressions and Polynomials)', 'Textbook', 'Identities and factorisation.']]
};

const quiz = [
  easy('The value of 102² is', 10404, [10004, 10204, 10416], '(100 + 2)² = 10000 + 400 + 4 = 10,404.'),
  easy('The value of 99² is', 9801, [9801 - 100, 9901, 9700], '(100 − 1)² = 10000 − 200 + 1 = 9,801.'),
  easy('(a + b)² − (a − b)² equals', '4ab', ['2ab', '2a² + 2b²', '0'], '(a² + 2ab + b²) − (a² − 2ab + b²) = 4ab.'),
  easy('The value of 52 × 48 is', 2496, [2500, 2486, 2504], '(50 + 2)(50 − 2) = 2500 − 4 = 2,496.'),
  easy('If a + b = 5 and ab = 6, then a² + b² is', 13, [11, 19, 25], '25 − 2 × 6 = 13.'),
  easy('The factors of x² − 9 are', '(x − 3)(x + 3)', ['(x − 9)(x + 1)', '(x − 3)²', '(x + 3)²'], 'It is a difference of squares: x² − 3² = (x − 3)(x + 3).'),

  medium('1002² − 998² equals', 8000, [4000, 4004, 80000], '(1002 − 998)(1002 + 998) = 4 × 2000 = 8,000.'),
  medium('If a + b = 7 and ab = 10, then a² + b² is', 29, [39, 49, 19], '49 − 2 × 10 = 29.'),
  medium('If a − b = 3 and ab = 10, then a² + b² is', 29, [19, 39, 9], 'a² + b² = (a − b)² + 2ab = 9 + 20 = 29.'),
  medium('If x + 1/x = 3, then x² + 1/x² is', 7, [9, 11, 5], '3² − 2 = 7.'),
  medium('If x + 1/x = 3, then x³ + 1/x³ is', 18, [27, 24, 12], '3³ − 3 × 3 = 27 − 9 = 18.'),
  medium('x² + 7x + 10 factorises as', '(x + 2)(x + 5)', ['(x + 1)(x + 10)', '(x − 2)(x − 5)', '(x + 3)(x + 4)'], 'Two numbers with sum 7 and product 10 are 2 and 5.'),
  medium('The value of 5³ + 3³ is', 152, [128, 160, 98], '125 + 27 = 152. Also (5 + 3)(25 − 15 + 9) = 8 × 19 = 152.'),
  medium('The value of 117² − 83² is', 6800, [3400, 7200, 34000], '(117 − 83)(117 + 83) = 34 × 200 = 6,800.'),

  placement('If a² + b² = 29 and a + b = 7, then ab equals', 10, [8, 12, 15], '2ab = (a + b)² − (a² + b²) = 49 − 29 = 20, so ab = 10.'),
  placement('If x − 1/x = 4, then x² + 1/x² equals', 18, [16, 14, 20], '(x − 1/x)² = x² − 2 + 1/x², so x² + 1/x² = 16 + 2 = 18.'),
  placement('The value of (0.8)² + 2 × 0.8 × 0.2 + (0.2)² is', 1, [0.64, 0.68, 1.2], 'This is (0.8 + 0.2)² = 1.'),
  placement('The value of (2.5)³ − (1.5)³ is', 12.25, [1, 11.5, 13], '(2.5 − 1.5)(2.5² + 2.5 × 1.5 + 1.5²) = 1 × (6.25 + 3.75 + 2.25) = 12.25.'),
  placement('If a + b + c = 0, then a³ + b³ + c³ equals', '3abc', ['0', 'abc', '(a + b + c)³'], 'When a + b + c = 0, a³ + b³ + c³ = 3abc.'),
  placement('The value of 25² − 2 × 25 × 15 + 15² is', 100, [225, 400, 40], '(25 − 15)² = 100.')
];
build(chapter, quiz);
