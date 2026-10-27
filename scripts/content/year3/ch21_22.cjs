const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

// ---------------- Chapter 21 ----------------
const ch21 = C({
  n: 21, id: 'y3-quant-geometric-progressions', cat: 'quant', title: 'Geometric Progressions',
  tag: 'nth term, finite and infinite sums, geometric mean and growth word problems',
  url: 'https://www.indiabix.com/aptitude/numbers/',
  over: 'A geometric progression (GP) multiplies each term by a fixed common ratio r. This chapter covers the nth term, the sum of n terms, the sum to infinity when |r| < 1, the geometric mean, and word problems such as bouncing balls, doubling populations and repeating decimals.',
  place: 'GP questions appear in aptitude tests as number series, compound growth and recurring-decimal problems.',
  real: 'Compound interest, population growth and the decay of a bouncing ball follow geometric patterns.',
  obj: ['Use Tₙ = a rⁿ⁻¹', 'Sum n terms for r ≠ 1', 'Sum to infinity for |r| < 1', 'Use three-term GP tricks', 'Convert recurring decimals into fractions'],
  pre: ['Sequences and Series', 'Arithmetic Progressions'],
  refresh: 'In a GP the ratio of consecutive terms is constant. Terms equally spaced from the ends have the same product.',
  defs: [
    'First term a and common ratio r.',
    'nth term: Tₙ = a rⁿ⁻¹.',
    'Sum of n terms: Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1.',
    'Sum to infinity: S∞ = a/(1 − r), valid only when |r| < 1.',
    'Geometric mean of x and y: √(xy).'
  ],
  intu: 'Each step multiplies, so growth or decay is exponential. When |r| < 1 the terms shrink so fast that the infinite sum is finite.',
  mental: 'Find r by dividing consecutive terms. Use the sum formula with the ratio greater than 1 on top (rⁿ − 1)/(r − 1) when r > 1.',
  formulas: [
    ['nth term', 'Tₙ = a rⁿ⁻¹', 'Any GP.', 'Find a term.', 'a = 3, r = 2: T₆ = 96'],
    ['Finite sum', 'Sₙ = a(rⁿ − 1)/(r − 1)', 'r ≠ 1.', 'Sum of n terms.', '3 + 6 + 12 + 24 = 45'],
    ['Infinite sum', 'S∞ = a/(1 − r)', '|r| < 1.', 'Shrinking GP.', '8 + 4 + 2 + … = 16'],
    ['Three in GP', 'a/r, a, ar', 'Product known.', 'Middle term = cube root of product.', 'Product 216: middle 6'],
    ['Geometric mean', 'GM = √(xy)', 'Two numbers.', 'Insert a middle term.', 'GM of 4 and 9 is 6']
  ],
  narr: [
    'In 3, 6, 12, 24 the ratio is 2. The 6th term is 3 × 2⁵ = 96, and the sum of 4 terms is 3(2⁴ − 1)/(2 − 1) = 45.',
    'For a shrinking GP, 8 + 4 + 2 + 1 + … has r = 1/2, so S∞ = 8/(1 − 1/2) = 16.',
    'A recurring decimal is an infinite GP. 0.363636… = 0.36 + 0.0036 + … has a = 0.36 and r = 0.01, so the sum is 0.36/0.99 = 4/11.',
    'For three numbers in GP use a/r, a, ar. Their product is a³, so a is the cube root of the product. If the product is 216 then a = 6.',
    'A ball dropped from 100 m that rebounds to 3/5 of its previous height travels 100 + 2 × (60 + 36 + …) = 100 + 2 × 60/(1 − 3/5) = 100 + 300 = 400 m in total.'
  ],
  deep: [['Sum of n terms for r < 1', 'Use a(1 − rⁿ)/(1 − r) to avoid negative signs.'], ['Terms and product', 'The product of the terms equidistant from the ends is constant, which gives the product of all terms as (a·l)ⁿ⁄².']],
  vars: [['Find a term', 'Tₙ = a rⁿ⁻¹.', '3, 6, 12'], ['Finite sum', 'Sum formula.', '3(2⁴ − 1)'], ['Infinite sum', 'a/(1 − r).', '8 + 4 + 2 + …'], ['Recurring decimal', 'Infinite GP.', '0.3636…'], ['Bouncing ball', 'Doubling the rebound sum.', '100 m, 3/5']],
  ex: [
    { t: 'nth term and sum', q: 'Find the 6th term and the sum of the first 6 terms of 3, 6, 12, …', g: ['a = 3', 'r = 2'], c: 'GP formulas.', s: [['6th term', '3 × 2⁵ = 96.'], ['Sum', '3(2⁶ − 1)/(2 − 1) = 3 × 63 = 189.']], a: '96 and 189', w: 'Check: 3 + 6 + 12 + 24 + 48 + 96 = 189.', tr: 'Using r⁶ for the 6th term.' },
    { t: 'Infinite sum', q: 'Find the sum to infinity of 18 + 6 + 2 + …', g: ['a = 18', 'r = 1/3'], c: 'a/(1 − r).', s: [['Ratio', '6/18 = 1/3.'], ['Sum', '18/(1 − 1/3) = 18 × 3/2 = 27.']], a: '27', w: 'Since |r| < 1 the sum exists.', tr: 'Taking r = 3.' },
    { t: 'Recurring decimal', q: 'Express 0.454545… as a fraction.', g: ['0.45 + 0.0045 + …'], c: 'Infinite GP.', s: [['a and r', 'a = 0.45, r = 0.01.'], ['Sum', '0.45/0.99 = 45/99 = 5/11.']], a: '5/11', w: 'Check: 5/11 = 0.4545…', tr: 'Using 45/100.' }
  ],
  short: { title: 'Ratio first', trad: 'Add the terms.', fast: 'Get r, then apply a rⁿ⁻¹, a(rⁿ − 1)/(r − 1) or a/(1 − r) directly.', rules: ['Find r by division.', '|r| < 1 for infinite sums.', 'Three terms: a/r, a, ar.', 'Recurring decimals: a/(1 − r).'] },
  mist: [['Using n instead of n − 1 in the exponent', 'Index error.', 'T₁ = a, so the exponent is n − 1.'], ['Infinite sum with |r| ≥ 1', 'The sum does not exist.', 'Check |r| < 1.'], ['Mixing AP and GP formulas', 'Add versus multiply.', 'Identify by differences or ratios.']],
  tips: { sec: 70, elim: 'Large-r sums are close to the last term times r/(r − 1).', adv: 'Test the formula on 2 terms.', ins: 'Recurring decimals and bouncing balls are GP in disguise.' },
  rev: ['Tₙ = a rⁿ⁻¹.', 'Finite sum.', 'Infinite sum.', 'Three-term GP.', 'Recurring decimals.'],
  qf: ['a rⁿ⁻¹', 'a(rⁿ − 1)/(r − 1)', 'a/(1 − r)'],
  take: ['Find r.', 'Pick the right formula.', 'Check |r| < 1.', 'Use a/r, a, ar.'],
  self: ['Can I sum a GP?', 'Can I sum to infinity?', 'Can I convert a recurring decimal?']
});
const q21 = [
  easy('The common ratio of 5, 15, 45, … is', 3, [10, 5, 9], '15/5 = 3.'),
  easy('The 5th term of 2, 6, 18, … is', 162, [54, 486, 90], 'T₅ = 2 × 3⁴ = 162.'),
  easy('The next term in 81, 27, 9, … is', 3, [1, 6, 0], 'The ratio is 1/3, so the next term is 9/3 = 3.'),
  easy('The geometric mean of 4 and 9 is', 6, [6.5, 5, 13], '√(4 × 9) = 6.'),
  easy('The sum to infinity of 8 + 4 + 2 + 1 + … is', 16, [15, 12, 32], 'a/(1 − r) = 8/(1/2) = 16.'),
  easy('The sum of 3 + 6 + 12 + 24 is', 45, [48, 42, 36], '3(2⁴ − 1)/(2 − 1) = 45.'),

  medium('The sum of the first 6 terms of 3, 6, 12, … is', 189, [192, 96, 186], '3(2⁶ − 1) = 189.'),
  medium('The sum to infinity of 18 + 6 + 2 + … is', 27, [24, 36, 18], '18/(1 − 1/3) = 27.'),
  medium('The fraction equal to 0.454545… is', '5/11', ['45/100', '9/20', '4/9'], '0.45/0.99 = 45/99 = 5/11.'),
  medium('Three numbers in GP have product 216 and sum 21. The largest number is', 12, [18, 9, 6], 'The middle term is 6; a/r + ar = 15 gives r = 2 or 1/2, so the numbers are 3, 6, 12.'),
  medium('The 8th term of 1, 2, 4, … is', 128, [256, 64, 127], 'T₈ = 2⁷ = 128.'),
  medium('A ball is dropped from 100 m and rebounds to 3/5 of its previous height each time. The total distance it travels before coming to rest is (in m)', 400, [250, 300, 500], '100 + 2 × 60/(1 − 3/5) = 100 + 300 = 400 m.'),
  medium('The sum of the series 1 + 1/2 + 1/4 + … to 5 terms is', '31/16', ['15/8', '2', '63/32'], '(1 − (1/2)⁵)/(1 − 1/2) = (31/32)/(1/2) = 31/16.'),
  medium('If the first term of a GP is 4 and the third term is 36, the common ratio (taking r > 0) is', 3, [9, 2, 6], 'a r² = 36 gives r² = 9, so r = 3.'),

  placement('A population of 10,000 doubles every 10 years. After 40 years it is', 160000, [80000, 40000, 320000], '10,000 × 2⁴ = 160,000.'),
  placement('The sum 2 + 6 + 18 + … to 7 terms is', 2186, [2187, 729, 1093], '2(3⁷ − 1)/(3 − 1) = 2186.'),
  placement('The smallest n for which 1 + 2 + 4 + … + 2ⁿ⁻¹ exceeds 1000 is', 10, [9, 11, 8], '2ⁿ − 1 > 1000 needs 2ⁿ > 1001, so n = 10.'),
  placement('Express 0.1666… as a fraction', '1/6', ['1/5', '1/7', '1/60'], '0.1 + 0.0666… = 1/10 + 1/15 = 1/6.'),
  placement('The sum to infinity of a GP is 12 and its first term is 4. The common ratio is', '2/3', ['1/3', '1/2', '3/4'], '4/(1 − r) = 12 gives 1 − r = 1/3, so r = 2/3.'),
  placement('If a, b, c are in GP and a = 2, c = 18, the possible value(s) of b with b > 0 is', 6, [9, 10, 36], 'b² = ac = 36, so b = 6.')
];
build(ch21, q21);

// ---------------- Chapter 22 ----------------
const ch22 = C({
  n: 22, id: 'y3-quant-agp-hp', cat: 'quant', title: 'Arithmetico-Geometric and Harmonic Progressions',
  tag: 'AGP series, harmonic progressions, and the relation between AM, GM and HM',
  url: 'https://www.indiabix.com/aptitude/numbers/',
  over: 'Besides AP and GP there are two more progression types that appear in aptitude tests. A harmonic progression (HP) is a sequence whose reciprocals form an AP. An arithmetico-geometric progression (AGP) multiplies the terms of an AP by the terms of a GP. This chapter also covers the relation AM ≥ GM ≥ HM and its use in maximum and minimum questions.',
  place: 'HP and the AM-GM-HM relation are asked directly in company aptitude and logic papers; AGP appears in advanced sections.',
  real: 'Average speed over equal distances is a harmonic mean, which links this chapter to time-and-distance problems.',
  obj: ['Recognise an HP and find its terms', 'Use AM, GM and HM for two numbers', 'Remember AM × HM = GM² for two numbers', 'Sum a simple AGP', 'Apply the inequality AM ≥ GM ≥ HM'],
  pre: ['Arithmetic Progressions', 'Geometric Progressions'],
  refresh: 'AP: constant difference. GP: constant ratio. HP: reciprocals form an AP.',
  defs: [
    'Harmonic progression: 1/a, 1/(a + d), 1/(a + 2d), … (reciprocals in AP).',
    'Harmonic mean of x and y: HM = 2xy/(x + y).',
    'Arithmetic mean AM = (x + y)/2 and geometric mean GM = √(xy).',
    'For positive unequal numbers, AM > GM > HM, and GM² = AM × HM.',
    'AGP: terms of the form (a + (n − 1)d) rⁿ⁻¹.'
  ],
  intu: 'HM gives more weight to smaller numbers because it averages reciprocals. That is why the average speed for equal distances at 40 and 60 km/h is the harmonic mean, 48 km/h, not 50.',
  mental: 'For any HP question, flip every term to get an AP, do the AP work, then flip back.',
  formulas: [
    ['HP term', 'Tₙ = 1/(a + (n − 1)d) where a, d belong to the reciprocal AP', 'HP.', 'Find a term.', '1/2, 1/4, 1/6: T₅ = 1/10'],
    ['HM of two numbers', 'HM = 2xy/(x + y)', 'Two positive numbers.', 'Equal-distance averages.', 'HM(40, 60) = 48'],
    ['Relation', 'GM² = AM × HM', 'Two numbers.', 'Find the missing mean.', 'AM 50, HM 48: GM² = 2400'],
    ['Order', 'AM ≥ GM ≥ HM', 'Positive numbers.', 'Inequalities.', '50 ≥ 48.99 ≥ 48'],
    ['AGP sum to infinity', 'S = a/(1 − r) + dr/(1 − r)²', '|r| < 1.', 'AGP.', '1 + 2/2 + 3/4 + … = 4']
  ],
  narr: [
    'If 1/2, 1/4, 1/6, … is an HP then 2, 4, 6, … is its AP of reciprocals. The 5th term is the reciprocal of the 5th term of 2, 4, 6, …, which is 10, so T₅ = 1/10.',
    'To insert a harmonic mean between 40 and 60, compute 2 × 40 × 60/(40 + 60) = 48. That is also the average speed of a trip with equal distances at 40 and 60 km/h.',
    'For two numbers AM × HM = GM². With 40 and 60: 50 × 48 = 2400 = 40 × 60.',
    'A simple AGP: 1 + 2x + 3x² + …, for |x| < 1, sums to 1/(1 − x)². At x = 1/2 the sum is 4.',
    'The relation AM ≥ GM ≥ HM holds for any positive numbers, with equality only when all the numbers are equal.'
  ],
  deep: [['Three terms in HP', 'If a, b, c are in HP then b = 2ac/(a + c) and 1/b is the mean of 1/a and 1/c.'], ['Average speed', 'For equal distances the average speed is the harmonic mean; for equal times it is the arithmetic mean.']],
  vars: [['Term of an HP', 'Reciprocals.', '1/2, 1/4, 1/6'], ['HM of two numbers', '2xy/(x + y).', '40 and 60'], ['Find the third mean', 'GM² = AM × HM.', 'AM 50, HM 48'], ['AGP sum', 'Formula.', '1 + 2x + 3x²'], ['Average speed', 'Harmonic mean.', 'Equal distances']],
  ex: [
    { t: 'Term of an HP', q: 'The 3rd term of an HP is 1/9 and its 7th term is 1/21. Find the 10th term.', g: ['T₃ = 1/9', 'T₇ = 1/21'], c: 'Take reciprocals.', s: [['Reciprocals', 'T₃ = 9 and T₇ = 21 in the AP.'], ['Difference', '4d = 12, so d = 3.'], ['10th term of AP', '9 + 7 × 3 = 30, so T₁₀ = 1/30.']], a: '1/30', w: 'The AP is 3, 6, 9, 12, …', tr: 'Subtracting the HP terms.' },
    { t: 'Harmonic mean', q: 'A car goes from A to B at 40 km/h and returns at 60 km/h. Find its average speed.', g: ['Equal distances'], c: 'Harmonic mean.', s: [['Formula', '2 × 40 × 60/(40 + 60).'], ['Compute', '4800/100 = 48.']], a: '48 km/h', w: 'Total time is longer at the lower speed, so the average is below 50.', tr: 'Taking (40 + 60)/2 = 50.' },
    { t: 'AM, GM, HM', q: 'The AM of two numbers is 25 and their GM is 15. Find their HM.', g: ['AM 25', 'GM 15'], c: 'GM² = AM × HM.', s: [['Relation', '225 = 25 × HM.'], ['Solve', 'HM = 9.']], a: '9', w: 'Check the order AM > GM > HM: 25 > 15 > 9.', tr: 'Using HM = GM.' }
  ],
  short: { title: 'Flip and solve', trad: 'Work with the fractions.', fast: 'Reciprocate an HP to an AP; use GM² = AM × HM for two numbers.', rules: ['HP: flip to AP.', 'HM = 2xy/(x + y).', 'Equal distance: harmonic mean.', 'AM ≥ GM ≥ HM.'] },
  mist: [['Using AP formulas on an HP', 'Forgetting to flip.', 'Take reciprocals first.'], ['Using 50 for average speed', 'Averaging the speeds.', 'Use the harmonic mean for equal distances.'], ['Assuming GM = AM', 'Only equal numbers have that.', 'AM > GM for unequal numbers.']],
  tips: { sec: 60, elim: 'AM > GM > HM, so the answer must fit between the means.', adv: 'GM² = AM × HM is a quick check.', ins: 'HP ties to speed and work problems.' },
  rev: ['HP reciprocals.', 'HM formula.', 'GM² = AM × HM.', 'Order of means.', 'AGP sum.'],
  qf: ['HM = 2xy/(x + y)', 'GM² = AM·HM'],
  take: ['Flip HP.', 'Know the means.', 'Average speed is HM.', 'Check ordering.'],
  self: ['Can I find a term of an HP?', 'Can I compute average speed?', 'Can I use GM² = AM × HM?']
});
const q22 = [
  easy('The HM of 40 and 60 is', 48, [50, 49, 24], '2 × 40 × 60/100 = 48.'),
  easy('The 5th term of the HP 1/2, 1/4, 1/6, … is', '1/10', ['1/8', '1/12', '1/5'], 'The reciprocals 2, 4, 6, 8, 10 give T₅ = 1/10.'),
  easy('The harmonic mean of 3 and 6 is', 4, [4.5, 3.5, 5], '2 × 3 × 6/9 = 4.'),
  easy('A car travels at 40 km/h one way and 60 km/h back. The average speed is (km/h)', 48, [50, 52, 45], 'The harmonic mean is 48 km/h.'),
  easy('If a, b, c are in HP, then 1/a, 1/b, 1/c are in', 'AP', ['GP', 'HP', 'None of these'], 'By definition the reciprocals of an HP form an AP.'),
  easy('For two unequal positive numbers, the largest of AM, GM and HM is', 'AM', ['GM', 'HM', 'All are equal'], 'AM > GM > HM.'),

  medium('The AM of two numbers is 25 and GM is 15. Their HM is', 9, [10, 20, 5], 'GM² = AM × HM gives 225 = 25 × HM, so HM = 9.'),
  medium('The 3rd term of an HP is 1/9 and the 7th is 1/21. The 10th term is', '1/30', ['1/27', '1/33', '1/24'], 'The AP has d = 3 and T₁₀ = 9 + 21 = 30.'),
  medium('The HM of two numbers is 4 and the AM is 4.5. Their GM is', '3√2', ['4.25', '3', '2√3'], 'GM² = 4.5 × 4 = 18, so GM = 3√2.'),
  medium('The sum of the AGP 1 + 2(1/2) + 3(1/4) + … to infinity is', 4, [2, 3, 8], 'S = 1/(1 − 1/2)² = 4.'),
  medium('If 2, x, 8 are in GP and 2, y, 8 are in AP, then x + y (x > 0) is', 9, [10, 13, 8], 'x = 4 and y = 5, so x + y = 9.'),
  medium('Three numbers are in HP. If the first two are 1/3 and 1/5, the third is', '1/7', ['1/9', '1/15', '1/8'], 'The reciprocals 3, 5, 7 are in AP.'),
  medium('A man walks to a place at 3 km/h and returns at 6 km/h. His average speed is (km/h)', 4, [4.5, 3.5, 5], '2 × 3 × 6/(3 + 6) = 4 km/h.'),
  medium('The HM between 12 and 36 is', 18, [24, 20, 16], '2 × 12 × 36/48 = 18.'),

  placement('A car covers three equal distances at 20, 30 and 60 km/h. The average speed is (km/h)', 30, [36.7, 35, 33], '3/(1/20 + 1/30 + 1/60) = 3/(6/60) = 30 km/h.'),
  placement('If the AM and HM of two positive numbers are 10 and 3.6, their GM is', 6, [6.8, 5, 36], 'GM² = 10 × 3.6 = 36, so GM = 6.'),
  placement('The sum to infinity of 1 + 2x + 3x² + 4x³ + … when x = 1/3 is', '9/4', ['3/2', '9/2', '2'], '1/(1 − 1/3)² = 9/4.'),
  placement('If the 4th term of an HP is 1/12 and the 8th is 1/20, the 6th term is', '1/16', ['1/15', '1/14', '1/18'], 'The AP has 4th term 12 and 8th term 20, so d = 2 and T₆ = 16.'),
  placement('For two positive numbers x and y, if AM × HM = 144, then GM equals', 12, [24, 72, 6], 'GM² = AM × HM = 144, so GM = 12.'),
  placement('Which statement is true for two equal positive numbers?', 'AM = GM = HM', ['AM > GM > HM', 'AM < GM < HM', 'GM > AM'], 'Equality holds only when the numbers are equal.')
];
build(ch22, q22);
