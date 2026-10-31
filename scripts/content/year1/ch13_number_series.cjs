const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-number-series', year: 1, category: 'Logical Reasoning', num: 13,
  title: 'Number Series',
  tagline: 'Year 1 Foundation — Finding the rule behind a sequence of numbers',
  minutes: 45,
  overview: 'A number series is a list of numbers that follows a hidden rule. You are shown the first few terms and asked for the next term or for a missing or wrong term. The rule may add a fixed number, multiply by a fixed number, use squares and cubes, or combine two operations. Finding the rule quickly is a pure pattern-recognition skill that improves a lot with practice.',
  placement: 'Number series questions are commonly asked in the reasoning sections of company aptitude rounds. They are short, so they reward students who have a quick checklist of patterns to try.',
  realWorld: 'Predicting the next instalment in a savings plan, spotting a wrong entry in a table of values and reading growth patterns in data all use the same idea of finding a rule from the first few terms.',
  objectives: [
    'Recognise arithmetic, geometric, square, cube and prime-based series',
    'Use first and second differences to uncover a rule',
    'Detect series that combine two operations such as ×2 + 1',
    'Separate alternating (interleaved) series into two sub-series',
    'Find a wrong term in a series'
  ],
  prereq: ['Squares and cubes of numbers up to 15', 'Prime numbers', 'Simplification'],
  refresher: 'Know the squares up to 15², the cubes up to 10³, and the primes below 50. These appear in a large share of series questions.',
  defs: [
    'Arithmetic progression (AP): a series with a constant difference between consecutive terms, e.g. 3, 7, 11, 15 (difference 4).',
    'Geometric progression (GP): a series with a constant ratio between consecutive terms, e.g. 3, 6, 12, 24 (ratio 2).',
    'Difference series: the differences between consecutive terms form a pattern of their own (for example 1, 2, 3, 4, …).',
    'Mixed-operation series: each term is obtained from the previous one by two operations, e.g. multiply by 2 and add 1.',
    'Interleaved (alternating) series: the odd-position terms follow one rule and the even-position terms follow another.'
  ],
  intuition: 'Every series has a rule that a student can state in one sentence. If you cannot state it in a sentence, you have not found it yet. Always test the simplest ideas first (constant difference, constant ratio), then look at the differences of the differences, and only then try squares, cubes and mixed operations.',
  mental: 'Write the differences between consecutive terms in a row underneath the series. If that row is constant it is an AP. If it is itself a pattern, repeat the process once more. If the terms grow very fast, check ratios.',
  formulas: [
    ['AP: nth term', 'Tₙ = a + (n − 1)d', 'a is the first term and d is the common difference.', 'Series with constant difference.', '3, 7, 11, 15 → T₅ = 3 + 4 × 4 = 19'],
    ['GP: nth term', 'Tₙ = a·rⁿ⁻¹', 'r is the common ratio.', 'Series with a constant ratio.', '3, 6, 12, 24 → T₅ = 3 × 2⁴ = 48'],
    ['Special number families', 'Squares: 1, 4, 9, 16, 25, …  Cubes: 1, 8, 27, 64, 125, …  Triangular: 1, 3, 6, 10, 15, 21, …', 'Recognise these at a glance.', 'Series that grow irregularly at the beginning.', 'Triangular numbers: n(n + 1)/2'],
    ['Common forms', 'n² ± n, n² ± 1, n³ ± n, n(n + 1)', 'Many "strange" series are one of these.', 'Series such as 2, 6, 12, 20, 30 (n(n+1)).', '0, 6, 24, 60, 120 → n³ − n'],
    ['Difference-of-differences method', 'If first differences are not constant, compute second differences', 'A constant second difference signals a quadratic pattern.', '5, 6, 8, 11, 15 (differences 1, 2, 3, 4).', '1, 2, 3, 4 are the first differences, so the next difference is 5']
  ],
  narrative: [
    'A reliable order of attack is: (1) look at the differences, (2) look at the ratios, (3) look at the differences of the differences, (4) compare with squares, cubes and primes, (5) try "× a + b" style mixed rules, and (6) check for two interleaved series. Most series fall at steps one to four.',
    'When the differences themselves form a pattern, such as 2, 4, 8, 16, the series is built by adding growing numbers. For 3, 5, 9, 17, 33 the differences are 2, 4, 8, 16, so the next difference is 32 and the next term is 65.',
    'Mixed-operation series use two operations in each step. For 4, 9, 19, 39, 79 each term is twice the previous one plus 1. A quick check: 4 × 2 + 1 = 9, 9 × 2 + 1 = 19, and so on.',
    'In an interleaved series like 1, 10, 2, 20, 3, 30, split the terms into the odd positions (1, 2, 3, …) and the even positions (10, 20, 30, …). The next term is in the odd position, so it is 4.',
    'To find a wrong term, discover the rule from the terms that fit, then check each term against it. The odd one out is the wrong term.'
  ],
  deep: [
    ['Prime-based and Fibonacci-type series', 'In 2, 3, 5, 7, 11, 13 the terms are consecutive primes. In 1, 1, 2, 3, 5, 8 each term is the sum of the previous two (Fibonacci). If a series grows steadily but not by a constant amount, check whether terms are sums of earlier terms.'],
    ['Why checking two terms is not enough', 'Two terms always fit infinitely many rules. A genuine rule must explain at least four terms. When two rules compete, choose the one that explains more terms and uses simpler operations.']
  ],
  variations: [
    ['Next term', 'Find the term that follows.', '2, 5, 8, 11, 14, ?'],
    ['Missing term', 'A term inside the series is hidden.', '4, 9, 19, ?, 79'],
    ['Wrong term', 'One term does not fit the rule.', '2, 5, 10, 17, 26, 37, 50, 64'],
    ['Interleaved series', 'Two series are woven together.', '1, 10, 2, 20, 3, 30, ?'],
    ['Mixed operations', 'Two operations per step.', '6, 13, 28, 59, ?']
  ],
  examples: [
    {
      title: 'Constant difference or constant ratio?',
      q: 'Find the next term of each series: (a) 2, 5, 8, 11, 14, ?  (b) 3, 6, 12, 24, 48, ?',
      given: ['Series (a): 2, 5, 8, 11, 14', 'Series (b): 3, 6, 12, 24, 48'],
      concept: 'Test the difference first, then the ratio.',
      steps: [
        ['Series (a): differences', '5 − 2 = 3, 8 − 5 = 3, 11 − 8 = 3, 14 − 11 = 3. The difference is constant.'],
        ['Next term of (a)', '14 + 3 = 17.'],
        ['Series (b): differences are not constant', '3, 6, 12, 24 → differences 3, 6, 12, 24, which are not equal. Ratios: 6/3 = 2, 12/6 = 2, 24/12 = 2.'],
        ['Next term of (b)', '48 × 2 = 96.']
      ],
      ans: '(a) 17 and (b) 96',
      why: 'An AP adds the same number each time and a GP multiplies by the same number each time.',
      trap: 'Adding 3 to every series without testing the ratio.'
    },
    {
      title: 'Second differences',
      q: 'Find the next term of 5, 6, 8, 11, 15, ?',
      given: ['Series: 5, 6, 8, 11, 15'],
      concept: 'When the first differences are not constant, examine the differences of the differences.',
      steps: [
        ['First differences', '6 − 5 = 1, 8 − 6 = 2, 11 − 8 = 3, 15 − 11 = 4.'],
        ['Spot the pattern', 'The differences are 1, 2, 3, 4, so the next difference is 5.'],
        ['Add it', '15 + 5 = 20.']
      ],
      ans: '20',
      why: 'Each step adds one more than the previous step, so the series grows quadratically.',
      trap: 'Stopping at the first differences and assuming the series is an AP.'
    },
    {
      title: 'Mixed operations',
      q: 'Find the next term of 6, 13, 28, 59, ?',
      given: ['Series: 6, 13, 28, 59'],
      concept: 'Look for "× a + b" where b may itself change.',
      steps: [
        ['Try doubling', '6 × 2 = 12, 13 × 2 = 26, 28 × 2 = 56, 59 × 2 = 118.'],
        ['Compare with the actual next term', '13 − 12 = 1, 28 − 26 = 2, 59 − 56 = 3. The extra amounts are 1, 2, 3.'],
        ['Continue the pattern', 'The next extra amount is 4, so the next term is 59 × 2 + 4 = 122.']
      ],
      ans: '122',
      why: 'The rule is "double the term and add the step number (1, 2, 3, 4, …)".',
      trap: 'Taking the rule as × 2 + 1 and giving 119, which fails for the earlier terms.'
    }
  ],
  shortcut: {
    title: 'Difference ladder',
    trad: 'Guess a rule and test it on each term, repeating several times.',
    fast: 'Write the differences under the series, then the differences of those. Within 20 seconds you will see a constant row (AP, quadratic) or a recognisable pattern (2, 4, 8 or 1, 2, 3).',
    rules: [
      'If the terms double or more than double, test ratios first.',
      'If the terms are close to squares or cubes, compare them with n² and n³ and look at the small gap.',
      'If the series is long and "jumpy", split it into odd and even positions.',
      'Verify the rule on every given term before answering.'
    ]
  },
  mistakes: [
    ['Stopping after finding a pattern for two terms', 'A first pattern that fits two terms feels right.', 'Test the rule on all given terms before accepting it.'],
    ['Missing the second level of differences', 'Only the first differences are checked.', 'Always compute differences twice when the first row is not constant.'],
    ['Ignoring squares and cubes', 'The series looks irregular so it is abandoned.', 'Compare each term with the nearest square and cube and look at the gap.'],
    ['Wrong parity in interleaved series', 'The next term is assigned to the wrong sub-series.', 'Count the positions: odd positions continue the first sub-series, even positions the second.']
  ],
  tips: {
    sec: 45,
    elim: 'If the options include numbers that do not fit the growth trend (for example a smaller number in an increasing series), remove them first.',
    advice: 'If no rule appears in 40 seconds, skip and come back. Series that need an exotic rule are rarely worth the time.',
    insight: 'Practising the standard families (primes, squares, cubes, triangular numbers, Fibonacci) covers most series seen in company tests.'
  },
  revision: [
    'Check differences, then ratios, then differences of differences.',
    'Know squares to 15, cubes to 10, primes to 50.',
    'Mixed rule: term × a + b, where b may be constant or growing.',
    'Interleaved series: split into odd and even positions.',
    'A rule must fit all the given terms.'
  ],
  quickFormulas: ['AP: a + (n − 1)d', 'GP: a·rⁿ⁻¹', 'n² + n, n³ − n, n(n + 1)/2'],
  takeaways: [
    'Follow a fixed checklist rather than guessing.',
    'Use differences twice before giving up.',
    'Squares, cubes and primes cover many series.',
    'Verify the rule against every term.'
  ],
  selfCheck: [
    'Can I find the next term of 1, 3, 6, 10, 15?',
    'Can I split an interleaved series into its two parts?',
    'Can I find the wrong term in 2, 5, 10, 17, 26, 37, 50, 64?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Number Series topic area; examples in this chapter are original.'],
    ['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Sequences and progressions as background.']
  ]
};

const quiz = [
  easy('Find the next term: 2, 5, 8, 11, 14, ?', 17, [16, 18, 20], 'The common difference is 3, so the next term is 14 + 3 = 17.'),
  easy('Find the next term: 3, 6, 12, 24, 48, ?', 96, [72, 84, 100], 'Each term is double the previous one, so the next term is 48 × 2 = 96.'),
  easy('Find the next term: 1, 4, 9, 16, 25, ?', 36, [30, 35, 49], 'These are the squares of 1, 2, 3, 4, 5. The next is 6² = 36.'),
  easy('Find the next term: 100, 90, 80, 70, ?', 60, [50, 65, 75], 'The series decreases by 10 each time, so the next term is 60.'),
  easy('Find the next term: 7, 14, 21, 28, ?', 35, [32, 36, 42], 'The terms are multiples of 7. The next is 7 × 5 = 35.'),
  easy('Find the next term: 1, 3, 6, 10, 15, ?', 21, [20, 22, 25], 'The differences are 2, 3, 4, 5, so the next difference is 6 and the next term is 15 + 6 = 21.'),

  medium('Find the next term: 2, 6, 12, 20, 30, ?', 42, [36, 40, 44], 'The terms are n(n + 1): 1×2, 2×3, 3×4, 4×5, 5×6. The next is 6 × 7 = 42.'),
  medium('Find the next term: 3, 5, 9, 17, 33, ?', 65, [49, 57, 66], 'The differences are 2, 4, 8, 16, so the next difference is 32. The next term is 33 + 32 = 65. (Also each term = 2 × previous − 1.)'),
  medium('Find the next term: 1, 2, 6, 24, 120, ?', 720, [240, 600, 840], 'The multipliers are 2, 3, 4, 5, so the next multiplier is 6: 120 × 6 = 720 (these are factorials).'),
  medium('Find the next term: 5, 6, 8, 11, 15, ?', 20, [18, 19, 21], 'The differences are 1, 2, 3, 4, so the next difference is 5 and the term is 15 + 5 = 20.'),
  medium('Find the next term: 2, 3, 5, 7, 11, 13, ?', 17, [15, 19, 21], 'The terms are consecutive prime numbers. The prime after 13 is 17.'),
  medium('Find the next term: 1, 8, 27, 64, 125, ?', 216, [196, 225, 343], 'These are cubes: 1³, 2³, 3³, 4³, 5³. The next is 6³ = 216.'),
  medium('Find the next term: 1, 10, 2, 20, 3, 30, ?', 4, [40, 5, 31], 'The odd positions give 1, 2, 3, … and the even positions give 10, 20, 30, …. The next position is odd, so the term is 4.'),
  medium('Find the missing term: 4, 9, 19, ?, 79', 39, [29, 34, 59], 'Each term is double the previous one plus 1: 4 × 2 + 1 = 9, 9 × 2 + 1 = 19, 19 × 2 + 1 = 39, 39 × 2 + 1 = 79.'),

  placement('One term in this series is wrong. Which one? 2, 5, 10, 17, 26, 37, 50, 64', 64, [37, 50, 26], 'The terms follow n² + 1: 2, 5, 10, 17, 26, 37, 50, 65. The last term should be 65, so 64 is wrong.'),
  placement('Find the next term: 7, 10, 16, 28, 52, ?', 100, [76, 96, 104], 'The differences are 3, 6, 12, 24, so the next difference is 48. The next term is 52 + 48 = 100.'),
  placement('Find the next term: 2, 3, 5, 8, 12, 17, 23, ?', 30, [28, 29, 31], 'The differences are 1, 2, 3, 4, 5, 6, so the next difference is 7. The next term is 23 + 7 = 30.'),
  placement('Find the next term: 2, 12, 36, 80, 150, ?', 252, [210, 240, 300], 'The terms are n²(n + 1): 1×2, 4×3, 9×4, 16×5, 25×6. The next is 36 × 7 = 252.'),
  placement('Find the next term: 6, 13, 28, 59, ?', 122, [118, 119, 120], 'The rule is "double and add the step number": 6×2+1 = 13, 13×2+2 = 28, 28×2+3 = 59, so the next is 59×2+4 = 122.'),
  placement('Find the next term: 0, 6, 24, 60, 120, ?', 210, [180, 200, 240], 'The terms are n³ − n: 0, 6, 24, 60, 120 for n = 1 to 5. For n = 6 it is 216 − 6 = 210.')
];

build(chapter, quiz);
