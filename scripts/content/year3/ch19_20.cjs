const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

// ---------------- Chapter 19 ----------------
const ch19 = C({
  n: 19, id: 'y3-quant-sequences-series', cat: 'quant', title: 'Sequences and Series',
  tag: 'Pattern finding, nth term, sum of special series and difference-of-differences methods',
  over: 'A sequence is an ordered list of numbers following a rule; a series is the sum of its terms. This chapter teaches how to find the rule (first differences, second differences, ratios), how to write the nth term, and how to sum the standard series: natural numbers, squares, cubes, odd and even numbers. These tools feed the next chapters on AP, GP and mixed progressions.',
  place: 'Missing-term and nth-term questions are common in aptitude papers and in number-series rounds.',
  real: 'Repayment schedules, population patterns and pattern recognition in data all use sequences.',
  obj: ['Find the rule of a sequence using differences and ratios', 'Write the nth term of a pattern', 'Sum 1 + 2 + … + n, squares, cubes, odd and even numbers', 'Use the second-difference method for quadratic patterns', 'Spot mixed and alternating patterns'],
  pre: ['Number System', 'Advanced Polynomial Equations'],
  refresh: 'Terms are written T₁, T₂, …, Tₙ. The sum of the first n terms is Sₙ.',
  defs: [
    'Sequence: an ordered list with a rule for each term.',
    'Series: the sum of the terms of a sequence.',
    'First difference: Tₖ₊₁ − Tₖ. Second difference: the difference of first differences.',
    'Constant first difference means an arithmetic pattern; constant ratio means a geometric pattern.',
    'Constant second difference means the nth term is a quadratic in n.'
  ],
  intu: 'Look at how the terms change. If the change is constant, it is linear. If the change itself changes by a constant, it is quadratic. If the terms multiply by a constant, it is geometric.',
  mental: 'Write the first differences, then the second differences, then the ratios. The first level that becomes constant reveals the rule.',
  formulas: [
    ['Sum of naturals', '1 + 2 + … + n = n(n + 1)/2', 'First n integers.', 'Counting sums.', 'n = 10: 55'],
    ['Sum of squares', '1² + … + n² = n(n + 1)(2n + 1)/6', 'First n squares.', 'Squares.', 'n = 5: 55'],
    ['Sum of cubes', '1³ + … + n³ = [n(n + 1)/2]²', 'First n cubes.', 'Cubes.', 'n = 4: 100'],
    ['Odd numbers', '1 + 3 + … + (2n − 1) = n²', 'First n odd numbers.', 'Odd sums.', 'n = 7: 49'],
    ['Even numbers', '2 + 4 + … + 2n = n(n + 1)', 'First n even numbers.', 'Even sums.', 'n = 10: 110']
  ],
  narr: [
    'To find a rule, write the differences. For 3, 7, 11, 15 the first difference is always 4, so the nth term is 4n − 1.',
    'If the first differences are not constant, take second differences. For 2, 6, 12, 20, 30 the first differences are 4, 6, 8, 10 and the second differences are all 2, so the nth term is n² + n.',
    'If the ratio of consecutive terms is constant, the sequence is geometric. 3, 6, 12, 24 has ratio 2 and nth term 3 × 2ⁿ⁻¹.',
    'Standard sums should be memorised. 1 + 2 + … + 20 = 20 × 21/2 = 210. 1² + 2² + … + 10² = 10 × 11 × 21/6 = 385. 1³ + … + 6³ = (6 × 7/2)² = 441.',
    'Mixed patterns alternate two rules. In 2, 3, 4, 6, 8, 12 the terms at odd places go 2, 4, 8 (doubling) and those at even places go 3, 6, 12 (doubling). Split the sequence into its interleaved parts.'
  ],
  deep: [['Differences of squares', 'The sequence n² has first differences 2n + 1, which are the odd numbers, and second difference 2.'], ['Sum from the nth term', 'The sum of terms from the m-th to the n-th is Sₙ − Sₘ₋₁.']],
  vars: [['Missing term', 'Differences.', '3, 7, 11, ?'], ['nth term', 'Linear or quadratic.', '2, 6, 12, 20'], ['Sum of special series', 'Standard formulas.', '1² + … + 10²'], ['Alternating pattern', 'Split the sequence.', '2, 3, 4, 6, 8, 12'], ['Sum from m to n', 'Sₙ − Sₘ₋₁.', 'Terms 11 to 20']],
  ex: [
    { t: 'nth term', q: 'Find the 10th term of 2, 6, 12, 20, 30, …', g: ['2, 6, 12, 20, 30'], c: 'Second differences.', s: [['First differences', '4, 6, 8, 10.'], ['Second differences', 'All 2, so Tₙ = n² + n.'], ['10th term', '100 + 10 = 110.']], a: '110', w: 'The terms are n(n + 1).', tr: 'Treating it as linear.' },
    { t: 'Sum of squares', q: 'Find 1² + 2² + … + 12².', g: ['n = 12'], c: 'Sum of squares formula.', s: [['Formula', 'n(n + 1)(2n + 1)/6.'], ['Substitute', '12 × 13 × 25/6 = 650.']], a: '650', w: '12 × 13 = 156; 156 × 25 = 3900; 3900/6 = 650.', tr: 'Using n(n + 1)/2.' },
    { t: 'Sum of cubes', q: 'Find 1³ + 2³ + … + 9³.', g: ['n = 9'], c: 'Square of the sum of naturals.', s: [['Sum of naturals', '9 × 10/2 = 45.'], ['Square', '45² = 2025.']], a: '2025', w: 'Sum of cubes equals the square of the sum.', tr: 'Using 9 × 10/2 = 45 only.' }
  ],
  short: { title: 'Differences ladder', trad: 'Guess the rule.', fast: 'Constant first difference ⇒ linear; constant second difference ⇒ quadratic; constant ratio ⇒ geometric.', rules: ['Check differences.', 'Check ratios.', 'Split alternating patterns.', 'Memorise standard sums.'] },
  mist: [['Stopping at one level of differences', 'Missing a quadratic pattern.', 'Take second differences.'], ['Wrong index in nth term', 'Using n instead of n − 1.', 'Test with n = 1.'], ['Mixing sum of cubes and sum of squares', 'Similar formulas.', 'Cubes give a perfect square.']],
  tips: { sec: 60, elim: 'Test the formula for n = 1 and n = 2.', adv: 'Check three terms before trusting a rule.', ins: 'Series questions are pattern recognition plus a standard formula.' },
  rev: ['Differences.', 'Ratios.', 'Quadratic nth term.', 'Standard sums.', 'Alternating patterns.'],
  qf: ['n(n+1)/2', 'n(n+1)(2n+1)/6', '[n(n+1)/2]²'],
  take: ['Find the level.', 'Test n = 1.', 'Memorise sums.', 'Split mixed patterns.'],
  self: ['Can I find the nth term of a quadratic pattern?', 'Can I recall the three standard sums?', 'Can I spot interleaved sequences?']
});
const sumSq = n => n * (n + 1) * (2 * n + 1) / 6;
const sumN = n => n * (n + 1) / 2;
const q19 = [
  easy('The next term in 3, 7, 11, 15, … is', 19, [18, 20, 23], 'The common difference is 4, so the next term is 15 + 4 = 19.'),
  easy('The nth term of 3, 7, 11, 15, … is', '4n − 1', ['4n + 1', 'n + 4', '3n + 4'], 'First term 3 and difference 4 give 3 + 4(n − 1) = 4n − 1.'),
  easy('The next term in 2, 4, 8, 16, … is', 32, [24, 30, 20], 'Each term doubles: 16 × 2 = 32.'),
  easy('The sum 1 + 2 + 3 + … + 20 equals', sumN(20), [200, 220, 190], 'n(n + 1)/2 = 20 × 21/2 = 210.'),
  easy('The sum of the first 7 odd numbers is', 49, [42, 56, 14], 'The sum of the first n odd numbers is n² = 49.'),
  easy('The sum of the first 10 even numbers is', 110, [100, 55, 120], 'n(n + 1) = 10 × 11 = 110.'),

  medium('The next term in 2, 6, 12, 20, 30, … is', 42, [40, 44, 36], 'The terms are n(n + 1), so the 6th term is 6 × 7 = 42.'),
  medium('The 10th term of 2, 6, 12, 20, 30, … is', 110, [100, 120, 90], 'Tₙ = n² + n gives 100 + 10 = 110.'),
  medium('The sum 1² + 2² + … + 12² equals', sumSq(12), [650 + 12, 78, 600], 'n(n + 1)(2n + 1)/6 = 12 × 13 × 25/6 = 650.'),
  medium('The sum 1³ + 2³ + … + 9³ equals', 2025, [2000, 405, 2250], 'The sum of cubes is (9 × 10/2)² = 45² = 2025.'),
  medium('The sum of the terms from the 11th to the 20th natural number (11 + 12 + … + 20) is', 155, [150, 165, 210], 'S₂₀ − S₁₀ = 210 − 55 = 155.'),
  medium('The sequence 1, 4, 9, 16, 25, … has second difference', 2, [1, 3, 5], 'First differences 3, 5, 7, 9; second differences all 2.'),
  medium('The next term in 2, 3, 5, 8, 12, … is', 17, [16, 18, 20], 'Differences 1, 2, 3, 4, so the next difference is 5: 12 + 5 = 17.'),
  medium('The 8th term of 5, 10, 20, 40, … is', 640, [320, 1280, 160], 'Tₙ = 5 × 2ⁿ⁻¹, so T₈ = 5 × 128 = 640.'),

  placement('The next term in 2, 3, 4, 6, 8, 12, … is', 16, [14, 18, 24], 'Even places 3, 6, 12 and odd places 2, 4, 8, 16 each double, so the next term is 16.'),
  placement('The sum 1 + 3 + 5 + … + 99 equals', 2500, [2450, 5000, 2550], 'There are 50 odd numbers, so the sum is 50² = 2500.'),
  placement('The sum 2 + 4 + 6 + … + 100 equals', 2550, [2500, 5050, 5000], 'n(n + 1) with n = 50 gives 50 × 51 = 2550.'),
  placement('If 1² + 2² + … + n² = 385, then n equals', 10, [9, 11, 8], 'n(n + 1)(2n + 1)/6 = 385 holds for n = 10: 10 × 11 × 21/6 = 385.'),
  placement('The nth term of 3, 8, 15, 24, 35, … is', 'n² + 2n', ['n² + 3n', '2n² + 1', 'n² + n + 1'], 'The terms are (n + 1)² − 1 = n² + 2n; check n = 1 gives 3.'),
  placement('The sum 1 × 2 + 2 × 3 + 3 × 4 + … + 10 × 11 equals', 440, [385, 330, 495], 'Σ(k² + k) = 385 + 55 = 440.')
];
build(ch19, q19);

// ---------------- Chapter 20 ----------------
const ch20 = C({
  n: 20, id: 'y3-quant-arithmetic-progressions', cat: 'quant', title: 'Arithmetic Progressions',
  tag: 'nth term, sum of n terms, arithmetic mean, and AP word problems',
  over: 'An arithmetic progression (AP) is a sequence in which every term is obtained by adding a fixed number, the common difference d, to the previous term. This chapter develops the nth-term and sum formulas, the properties of terms equidistant from the ends, three-term AP tricks, and standard word problems on instalments, seating rows and counting multiples.',
  place: 'AP questions are among the most frequent number-series questions in company aptitude tests, often as "find the sum" or "how many terms" problems.',
  real: 'Salary increments of a fixed amount, equal instalment increases and stacked seating all form arithmetic progressions.',
  obj: ['Use Tₙ = a + (n − 1)d', 'Use Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l)', 'Count terms of an AP', 'Find the sum of multiples in a range', 'Use middle-term and three-number AP tricks'],
  pre: ['Sequences and Series'],
  refresh: 'In an AP, consecutive differences are equal. The mean of two terms equals the term midway between them.',
  defs: [
    'First term a and common difference d.',
    'nth term: Tₙ = a + (n − 1)d.',
    'Sum of n terms: Sₙ = n/2 [2a + (n − 1)d] = n(a + l)/2 where l is the last term.',
    'Arithmetic mean of x and y: (x + y)/2.',
    'Number of terms between a and l: (l − a)/d + 1.'
  ],
  intu: 'The sum of an AP is the number of terms times the average of the first and last terms, because equidistant terms from the two ends have the same sum.',
  mental: 'Write a, d, and the last term, count the terms with (l − a)/d + 1, then multiply by the average of the first and last term.',
  formulas: [
    ['nth term', 'Tₙ = a + (n − 1)d', 'Any AP.', 'Find a term.', 'a = 5, d = 3, T₁₀ = 32'],
    ['Sum', 'Sₙ = n/2 [2a + (n − 1)d]', 'a, d, n known.', 'Sum of n terms.', 'S₁₀ = 185'],
    ['Sum with last term', 'Sₙ = n(a + l)/2', 'a and l known.', 'Sum between limits.', '(5 + 32) × 10/2 = 185'],
    ['Number of terms', 'n = (l − a)/d + 1', 'a, l, d known.', 'Counting multiples.', 'Multiples of 7 up to 100: 14'],
    ['Middle term', 'Tₘ = Sₙ/n (n odd, m = middle)', 'Odd count.', 'Quick average.', 'Average is the middle term']
  ],
  narr: [
    'Find the 20th term of 7, 11, 15, …. Here a = 7 and d = 4, so T₂₀ = 7 + 19 × 4 = 83.',
    'Sum of the first 20 terms: S₂₀ = 20/2 × (7 + 83) = 900.',
    'Counting terms: how many numbers between 1 and 100 are divisible by 7? The AP is 7, 14, …, 98, so n = (98 − 7)/7 + 1 = 14. Their sum is 14 × (7 + 98)/2 = 735.',
    'For three numbers in AP use a − d, a, a + d; their sum is 3a, which fixes the middle term immediately. For five numbers use a − 2d, a − d, a, a + d, a + 2d.',
    'If Sₙ is given as a quadratic in n, the first term is S₁ and the common difference is the coefficient of n² times 2. For Sₙ = 3n² + 2n, a = 5 and d = 6.'
  ],
  deep: [['Equidistant terms', 'In an AP, Tₖ + Tₙ₋ₖ₊₁ = a + l for every k, which gives the sum formula.'], ['Tₙ from Sₙ', 'Tₙ = Sₙ − Sₙ₋₁ for n ≥ 2.']],
  vars: [['Find a term', 'Tₙ formula.', 'T₂₀'], ['Sum', 'Sₙ formula.', 'S₂₀'], ['Count multiples', 'Number of terms.', 'Multiples of 7'], ['Three numbers', 'a − d, a, a + d.', 'Sum 27'], ['Sₙ given', 'Tₙ = Sₙ − Sₙ₋₁.', 'Sₙ = 3n² + 2n']],
  ex: [
    { t: 'nth term and sum', q: 'For the AP 7, 11, 15, …, find the 20th term and the sum of 20 terms.', g: ['a = 7', 'd = 4'], c: 'Standard formulas.', s: [['20th term', '7 + 19 × 4 = 83.'], ['Sum', '20/2 × (7 + 83) = 900.']], a: '83 and 900', w: 'The average of 7 and 83 is 45; 20 × 45 = 900.', tr: 'Using 20d.' },
    { t: 'Count multiples', q: 'Find the sum of all multiples of 7 between 1 and 100.', g: ['7, 14, …, 98'], c: 'Count and sum.', s: [['Last term', '98 (7 × 14).'], ['Count', '(98 − 7)/7 + 1 = 14.'], ['Sum', '14 × (7 + 98)/2 = 735.']], a: '735', w: '7 × (1 + 2 + … + 14) = 7 × 105 = 735.', tr: 'Counting 15 terms.' },
    { t: 'Three numbers in AP', q: 'Three numbers in AP have sum 27 and product 693. Find them.', g: ['Sum 27', 'Product 693'], c: 'Use a − d, a, a + d.', s: [['Middle', '3a = 27, so a = 9.'], ['Product', '9(81 − d²) = 693, so 81 − d² = 77, d² = 4, d = 2.'], ['Numbers', '7, 9, 11.']], a: '7, 9, 11', w: '7 + 9 + 11 = 27 and 7 × 9 × 11 = 693.', tr: 'Taking a = 27/3 and d = 3 without the product.' }
  ],
  short: { title: 'Average × count', trad: 'Apply the long sum formula.', fast: 'Sum = number of terms × average of the first and last terms; the middle term of an odd-length AP equals the average.', rules: ['Count with (l − a)/d + 1.', 'Three numbers: a − d, a, a + d.', 'Sum = n × mean.', 'Tₙ = Sₙ − Sₙ₋₁.'] },
  mist: [['Off-by-one in the count', 'Forgetting +1.', 'n = (l − a)/d + 1.'], ['Using n d instead of (n − 1)d', 'Wrong term index.', 'Test with n = 1.'], ['Using the wrong last term', 'Not the largest multiple within the range.', 'Divide the limit first.']],
  tips: { sec: 60, elim: 'The sum must be n times a value between the first and last terms.', adv: 'Compute the last term before the sum.', ins: 'Counting multiples is an AP in disguise.' },
  rev: ['Tₙ formula.', 'Sₙ formula.', 'Count terms.', 'Three numbers.', 'Tₙ = Sₙ − Sₙ₋₁.'],
  qf: ['Tₙ = a + (n−1)d', 'Sₙ = n(a+l)/2'],
  take: ['Find a, d, l.', 'Count then sum.', 'Use the middle term.', 'Check n = 1.'],
  self: ['Can I count multiples in a range?', 'Can I find the sum fast?', 'Can I set up three numbers in AP?']
});
const apT = (a, d, n) => a + (n - 1) * d;
const apS = (a, d, n) => n * (2 * a + (n - 1) * d) / 2;
const q20 = [
  easy('The 10th term of the AP 5, 8, 11, … is', apT(5, 3, 10), [30, 35, 32 + 1], 'a = 5, d = 3, so T₁₀ = 5 + 9 × 3 = 32.'),
  easy('The common difference of the AP 20, 17, 14, … is', -3, [3, -2, 17], 'Each term is 3 less than the previous, so d = −3.'),
  easy('The sum of the first 10 terms of 5, 8, 11, … is', apS(5, 3, 10), [170, 190, 320], 'S = 10/2 × (5 + 32) = 185.'),
  easy('The arithmetic mean of 12 and 30 is', 21, [18, 42, 24], '(12 + 30)/2 = 21.'),
  easy('The number of terms in the AP 4, 9, 14, …, 99 is', 20, [19, 21, 18], '(99 − 4)/5 + 1 = 20.'),
  easy('The middle term of the AP 3, 7, 11, 15, 19 is', 11, [9, 13, 15], 'With 5 terms the middle one is the third: 11.'),

  medium('The 20th term of 7, 11, 15, … is', apT(7, 4, 20), [80, 87, 79], '7 + 19 × 4 = 83.'),
  medium('The sum of the first 20 terms of 7, 11, 15, … is', apS(7, 4, 20), [830, 1800, 880], '20/2 × (7 + 83) = 900.'),
  medium('The number of multiples of 7 between 1 and 100 is', 14, [13, 15, 12], 'The largest is 98 = 7 × 14, so there are 14 multiples.'),
  medium('The sum of all multiples of 7 between 1 and 100 is', 735, [700, 770, 665], '7 × (1 + 2 + … + 14) = 7 × 105 = 735.'),
  medium('Three numbers in AP have sum 27 and product 693. The largest number is', 11, [13, 9, 7], 'The numbers are 7, 9, 11.'),
  medium('If the sum of n terms of an AP is Sₙ = 3n² + 2n, the first term is', 5, [3, 2, 6], 'S₁ = 3 + 2 = 5.'),
  medium('If Sₙ = 3n² + 2n, the common difference is', 6, [3, 5, 2], 'T₂ = S₂ − S₁ = 16 − 5 = 11, so d = 11 − 5 = 6.'),
  medium('The sum of all two-digit numbers is', 4905, [4950, 4995, 5000], 'There are 90 terms from 10 to 99: 90 × 109/2 = 4905.'),

  placement('The sum of all natural numbers from 1 to 100 that are divisible by 3 or 5 is', 2418, [1683, 2500, 2000], 'Multiples of 3: 1683, of 5: 1050, of 15: 315. Total 1683 + 1050 − 315 = 2418.'),
  placement('The 5th term of an AP is 23 and the 12th term is 58. The first term is', 3, [5, 8, 13], '7d = 35, so d = 5 and a = 23 − 4 × 5 = 3.'),
  placement('The sum of the first n terms of an AP is 240 with a = 6 and d = 4. The value of n is', 10, [8, 12, 14], 'n/2 (12 + 4n − 4) = n(2n + 4) = 240 gives n = 10.'),
  placement('The sum of the first 15 terms of an AP whose 8th term is 20 is', 300, [150, 280, 320], 'S₁₅ = 15 × T₈ = 15 × 20 = 300.'),
  placement('How many three-digit numbers are divisible by 7?', 128, [127, 129, 130], 'The multiples of 7 from 105 to 994: (994 − 105)/7 + 1 = 128.'),
  placement('A man saves ₹100 in the first month and ₹20 more each month than the previous month. His total savings in 12 months are (in ₹)', 2520, [3720, 2640, 2400], 'S₁₂ = 12/2 × (200 + 11 × 20) = 6 × 420 = 2520.')
];
build(ch20, q20);
