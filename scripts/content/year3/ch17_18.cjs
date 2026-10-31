const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

// ---------------- Chapter 17 ----------------
const ch17 = C({
  n: 17, id: 'y3-quant-algebraic-inequalities', cat: 'quant', title: 'Algebraic Inequalities',
  tag: 'Linear and quadratic inequalities, modulus, sign analysis and maximum-minimum reasoning',
  over: 'An inequality asks for a range of values instead of a single value. The solving methods mirror those for equations, with one critical difference: multiplying or dividing by a negative number reverses the sign. This chapter covers linear inequalities, quadratic inequalities solved by sign analysis on the number line, modulus inequalities, and the quick AM-GM style bounds used in maximum and minimum questions.',
  place: 'Range and "how many integers satisfy" questions are common in company aptitude rounds and in quant sections that test number sense.',
  real: 'Budget limits, tolerance ranges in engineering and eligibility rules are all inequalities.',
  obj: ['Solve linear inequalities and flip the sign correctly', 'Solve quadratic inequalities with the number line', 'Handle |x − a| < b and |x − a| > b', 'Count integer solutions', 'Use AM ≥ GM for maximum and minimum questions'],
  pre: ['Linear Equations', 'Quadratic Equations'],
  refresh: 'a < b means b − a is positive. Adding the same number to both sides keeps the sign. Multiplying by a positive keeps it; multiplying by a negative reverses it.',
  defs: [
    'Linear inequality: ax + b < c with solution a ray such as x < k.',
    'Quadratic inequality: (x − p)(x − q) < 0 holds between the roots; > 0 holds outside the roots (for p < q).',
    '|x − a| < b means a − b < x < a + b (b > 0).',
    '|x − a| > b means x < a − b or x > a + b.',
    'AM-GM: for positive numbers, (a + b)/2 ≥ √(ab), with equality when a = b.'
  ],
  intu: 'A quadratic with positive leading coefficient is a U-shaped curve. It is negative between its roots and positive outside them. Drawing the curve (or the sign line) answers every such question.',
  mental: 'Move everything to one side, factorise, mark the roots on a number line, and read the sign of each region.',
  formulas: [
    ['Sign flip', 'Multiply or divide by a negative ⇒ reverse', 'Linear.', 'Always.', '−2x < 6 ⇒ x > −3'],
    ['Quadratic, between', '(x − p)(x − q) < 0 ⇒ p < x < q', 'p < q.', 'Product negative.', 'x² − 5x + 6 < 0 ⇒ 2 < x < 3'],
    ['Quadratic, outside', '(x − p)(x − q) > 0 ⇒ x < p or x > q', 'p < q.', 'Product positive.', 'x² − 5x + 6 > 0'],
    ['Modulus', '|x − a| < b ⇔ a − b < x < a + b', 'b > 0.', 'Distance form.', '|x − 3| < 2 ⇒ 1 < x < 5'],
    ['AM-GM', 'a + b ≥ 2√(ab); product max when a = b for fixed sum', 'Positive numbers.', 'Max/min.', 'x + 1/x ≥ 2']
  ],
  narr: [
    'For a linear inequality, solve as an equation but flip the sign when multiplying or dividing by a negative. From −2x < 6, dividing by −2 gives x > −3.',
    'For a quadratic, factorise and use the number line. x² − 5x + 6 < 0 becomes (x − 2)(x − 3) < 0, so 2 < x < 3 and no integer satisfies it. The inequality x² − 5x + 6 > 0 holds for x < 2 or x > 3.',
    'Modulus is distance. |x − 3| < 2 means x lies within 2 of 3, so 1 < x < 5, giving the integers 2, 3, 4. |x − 3| > 2 means x < 1 or x > 5.',
    'To count integers, list the integers inside the interval and mind the open or closed ends. For −3 < x ≤ 4 the integers are −2 to 4, which is 7 integers.',
    'For a fixed sum, the product is largest when the numbers are equal. If x + y = 10 with positive x and y, the maximum of xy is 25 at x = y = 5. For a fixed product, the sum is smallest when the numbers are equal.'
  ],
  deep: [['Never multiply by an unknown sign', 'In x/(x − 2) > 1 do not cross-multiply blindly; move 1 across and combine to (2)/(x − 2) > 0, which gives x > 2.'], ['Endpoint check', 'Strict inequality excludes the endpoint; ≤ or ≥ includes it. Roots of a denominator are always excluded.']],
  vars: [['Linear', 'Solve and flip.', '−2x < 6'], ['Quadratic', 'Number line.', 'x² − 5x + 6 < 0'], ['Modulus', 'Distance form.', '|x − 3| < 2'], ['Integer count', 'List integers.', '−3 < x ≤ 4'], ['Max/min', 'AM-GM.', 'x + y = 10']],
  ex: [
    { t: 'Quadratic', q: 'Solve x² − 7x + 10 < 0 and list the integer solutions.', g: ['x² − 7x + 10 < 0'], c: 'Factorise and read the interval.', s: [['Factorise', '(x − 2)(x − 5) < 0.'], ['Interval', 'The product is negative between the roots: 2 < x < 5.'], ['Integers', '3 and 4.']], a: '2 < x < 5; integers 3 and 4', w: 'Strict inequality excludes 2 and 5.', tr: 'Writing x < 2 or x > 5.' },
    { t: 'Modulus', q: 'How many integers satisfy |x − 4| ≤ 3?', g: ['|x − 4| ≤ 3'], c: 'Distance form.', s: [['Interval', '1 ≤ x ≤ 7.'], ['Count', 'Integers 1 to 7: 7.']], a: '7', w: 'Closed ends include 1 and 7.', tr: 'Counting 6.' },
    { t: 'Maximum product', q: 'If x + y = 20 for positive x and y, what is the maximum value of xy?', g: ['x + y = 20'], c: 'AM-GM.', s: [['Equal split', 'x = y = 10.'], ['Maximum', '10 × 10 = 100.']], a: '100', w: 'AM-GM equality occurs at x = y.', tr: 'Taking 19 × 1.' }
  ],
  short: { title: 'Number line', trad: 'Test values in every region.', fast: 'Factorise, mark the roots, then alternate signs starting from + on the right (positive leading coefficient).', rules: ['Flip the sign for negatives.', 'Between roots for < 0.', 'Outside roots for > 0.', 'Equal split for the maximum product.'] },
  mist: [['Not flipping the sign', 'Dividing by a negative.', 'Reverse the inequality.'], ['Treating x² < 9 as x < 3', 'Missing the lower bound.', 'It is −3 < x < 3.'], ['Including excluded endpoints', 'Strict versus non-strict.', 'Check each end.']],
  tips: { sec: 70, elim: 'Test a value from each region of the number line.', adv: 'Count integers carefully at the ends.', ins: 'Many puzzle-style questions reduce to an interval and a count.' },
  rev: ['Flip for negatives.', 'Quadratic regions.', 'Modulus distance.', 'Integer counting.', 'AM-GM.'],
  qf: ['|x − a| < b ⇔ a − b < x < a + b', 'xy ≤ ((x + y)/2)²'],
  take: ['Number line.', 'Flip sign.', 'Count ends.', 'AM-GM.'],
  self: ['Can I solve a quadratic inequality?', 'Can I count integers in a range?', 'Can I use AM-GM?']
});
const q17 = [
  easy('The solution of 3x − 5 < 10 is', 'x < 5', ['x > 5', 'x < 15', 'x > 15/3 + 1'], '3x < 15, so x < 5.'),
  easy('The solution of −2x < 6 is', 'x > −3', ['x < −3', 'x > 3', 'x < 3'], 'Dividing by −2 reverses the sign: x > −3.'),
  easy('The number of positive integers satisfying 2x + 3 < 12 is', 4, [3, 5, 6], '2x < 9, so x < 4.5 and x = 1, 2, 3, 4: 4 integers.'),
  easy('The solution of |x| < 4 is', '−4 < x < 4', ['x < 4', 'x < −4 or x > 4', 'x > −4'], '|x| < 4 means −4 < x < 4.'),
  easy('The solution of |x − 3| < 2 is', '1 < x < 5', ['x < 1 or x > 5', '−1 < x < 5', '1 < x < 3'], 'a − b < x < a + b gives 1 < x < 5.'),
  easy('If x > 2 and y > 3, then which of the following must be true?', 'x + y > 5', ['x + y < 5', 'xy < 6', 'x − y > −1'], 'Adding the inequalities gives x + y > 5.'),

  medium('The solution of x² − 5x + 6 < 0 is', '2 < x < 3', ['x < 2 or x > 3', 'x > 3', 'x < 2'], '(x − 2)(x − 3) < 0 holds between the roots: 2 < x < 3.'),
  medium('The solution of x² − 5x + 6 > 0 is', 'x < 2 or x > 3', ['2 < x < 3', 'x > 2', 'x < 3'], 'The product is positive outside the roots: x < 2 or x > 3.'),
  medium('The number of integers satisfying x² − 7x + 10 < 0 is', 2, [1, 3, 4], '(x − 2)(x − 5) < 0 gives 2 < x < 5, so x = 3, 4: 2 integers.'),
  medium('The number of integers satisfying |x − 4| ≤ 3 is', 7, [6, 5, 8], '1 ≤ x ≤ 7, which has 7 integers.'),
  medium('The solution of x² < 16 is', '−4 < x < 4', ['x < 4', 'x > −4', 'x < −4 or x > 4'], 'x² < 16 gives |x| < 4, so −4 < x < 4.'),
  medium('The number of integers x with −3 < x ≤ 4 is', 7, [6, 8, 5], 'The integers are −2, −1, 0, 1, 2, 3, 4: 7 integers.'),
  medium('If x + y = 20 and x, y > 0, the maximum value of xy is', 100, [99, 120, 400], 'The maximum is at x = y = 10, so xy = 100.'),
  medium('If xy = 36 and x, y > 0, the minimum value of x + y is', 12, [13, 10, 37], 'AM-GM: x + y ≥ 2√36 = 12.'),

  placement('The solution of (x − 1)(x − 4) ≤ 0 is', '1 ≤ x ≤ 4', ['x ≤ 1 or x ≥ 4', '1 < x < 4', 'x ≥ 1'], 'The product is zero or negative between the roots, endpoints included: 1 ≤ x ≤ 4.'),
  placement('The solution of x/(x − 2) > 1 is', 'x > 2', ['x < 2', 'x > 0', 'x < 0'], 'x/(x − 2) − 1 = 2/(x − 2) > 0, so x − 2 > 0, giving x > 2.'),
  placement('The number of integer solutions of |2x − 3| < 7 is', 6, [5, 7, 4], '−7 < 2x − 3 < 7 gives −2 < x < 5, so x = −1, 0, 1, 2, 3, 4: 6 integers.'),
  placement('The minimum value of x + 4/x for x > 0 is', 4, [2, 5, 8], 'AM-GM: x + 4/x ≥ 2√4 = 4, at x = 2.'),
  placement('The solution of |x − 2| > 3 is', 'x < −1 or x > 5', ['−1 < x < 5', 'x > 5', 'x < −1'], 'x − 2 < −3 or x − 2 > 3, so x < −1 or x > 5.'),
  placement('For how many integers x does x² − 2x − 8 ≤ 0 hold?', 7, [6, 5, 8], '(x − 4)(x + 2) ≤ 0 gives −2 ≤ x ≤ 4, which has 7 integers.')
];
build(ch17, q17);

// ---------------- Chapter 18 ----------------
const ch18 = C({
  n: 18, id: 'y3-quant-adv-polynomial-equations', cat: 'quant', title: 'Advanced Polynomial Equations',
  tag: 'Sum and product of roots, factor and remainder theorems, higher-degree equations and root relations',
  over: 'Year 2 solved quadratics by factorising and by the formula. Year 3 looks at the relations between roots and coefficients (Vieta), the remainder and factor theorems for higher-degree polynomials, and equations whose roots are linked by a condition. The relations let you answer questions about the roots without finding them.',
  place: 'Questions such as "if α and β are the roots of …, find α² + β²" and "find k so that x − 1 is a factor" are standard in written aptitude tests.',
  real: 'Polynomial models in engineering, signal processing and curve fitting rely on root relations.',
  obj: ['Use sum and product of roots', 'Find α² + β², α³ + β³ and |α − β|', 'Form an equation from given roots', 'Apply the remainder and factor theorems', 'Handle cubic roots relations'],
  pre: ['Quadratic Equations', 'Algebraic Inequalities'],
  refresh: 'For ax² + bx + c = 0 with roots α and β: α + β = −b/a and αβ = c/a.',
  defs: [
    'Sum of roots of a quadratic: −b/a. Product: c/a.',
    'Cubic ax³ + bx² + cx + d: Σα = −b/a, Σαβ = c/a, αβγ = −d/a.',
    'Remainder theorem: the remainder of P(x) divided by (x − a) is P(a).',
    'Factor theorem: (x − a) is a factor of P(x) exactly when P(a) = 0.',
    'Discriminant D = b² − 4ac decides the nature of the roots.'
  ],
  intu: 'The coefficients are symmetric combinations of the roots, so any symmetric expression in the roots can be rewritten using only the sum and the product.',
  mental: 'Write the sum S and product P first. Then rewrite the target: α² + β² = S² − 2P, α³ + β³ = S³ − 3SP, (α − β)² = S² − 4P.',
  formulas: [
    ['Quadratic roots', 'S = −b/a, P = c/a', 'ax² + bx + c = 0.', 'Always.', 'x² − 5x + 6: S = 5, P = 6'],
    ['Square sum', 'α² + β² = S² − 2P', 'From (α + β)².', 'Target is symmetric.', '25 − 12 = 13'],
    ['Cube sum', 'α³ + β³ = S³ − 3SP', 'Identity.', 'Cubes of roots.', '125 − 90 = 35'],
    ['New equation', 'x² − Sx + P = 0', 'Given S and P.', 'Forming an equation.', 'Roots 2 and 3: x² − 5x + 6'],
    ['Remainder theorem', 'Remainder = P(a)', 'Divisor (x − a).', 'Remainders.', 'P(x) = x³ − 2x + 1 by (x − 2): 5']
  ],
  narr: [
    'Take x² − 5x + 6 = 0. The sum of roots is 5 and the product is 6 without solving. Then α² + β² = 25 − 12 = 13 and α³ + β³ = 125 − 90 = 35.',
    'To form an equation from roots, use x² − (sum)x + product = 0. Roots 2 and −3 give sum −1 and product −6, so x² + x − 6 = 0.',
    'The remainder theorem says the remainder of P(x) on division by (x − a) is P(a). For P(x) = x³ − 2x + 1 divided by (x − 2), P(2) = 8 − 4 + 1 = 5.',
    'The factor theorem is the special case P(a) = 0. If (x − 1) is a factor of x³ + kx² − 4x + 2 then 1 + k − 4 + 2 = 0, so k = 1.',
    'For a cubic, the three relations are Σα = −b/a, Σαβ = c/a and αβγ = −d/a. For x³ − 6x² + 11x − 6 = 0 the roots sum to 6, pairs sum to 11 and the product is 6, giving roots 1, 2, 3.'
  ],
  deep: [['Nature of roots', 'D > 0 gives two real distinct roots, D = 0 equal roots, D < 0 no real roots.'], ['Reciprocal roots', 'If roots are the reciprocals of α and β, the new equation is obtained by replacing x with 1/x.']],
  vars: [['Symmetric expression', 'Use S and P.', 'α² + β²'], ['Form equation', 'x² − Sx + P.', 'Roots 2, −3'], ['Remainder', 'Evaluate P(a).', 'x³ − 2x + 1'], ['Factor condition', 'P(a) = 0.', 'Find k'], ['Cubic', 'Three relations.', 'x³ − 6x² + 11x − 6']],
  ex: [
    { t: 'Symmetric expression', q: 'If α and β are the roots of x² − 7x + 10 = 0, find α² + β².', g: ['x² − 7x + 10 = 0'], c: 'S² − 2P.', s: [['S and P', 'S = 7, P = 10.'], ['Square sum', '49 − 20 = 29.']], a: '29', w: 'No need to find the roots 2 and 5, though 4 + 25 = 29 checks it.', tr: 'Using S² only.' },
    { t: 'Factor theorem', q: 'Find k so that (x − 2) is a factor of x³ − 3x² + kx + 2.', g: ['P(2) = 0'], c: 'Factor theorem.', s: [['Substitute', '8 − 12 + 2k + 2 = 0.'], ['Solve', '2k − 2 = 0, so k = 1.']], a: '1', w: 'P(2) must be 0.', tr: 'Setting P(−2) = 0.' },
    { t: 'Form equation', q: 'Form a quadratic whose roots are the squares of the roots of x² − 3x + 2 = 0.', g: ['Roots 1 and 2'], c: 'New sum and product.', s: [['Roots', 'The roots are 1 and 2, so the new roots are 1 and 4.'], ['Equation', 'x² − 5x + 4 = 0.']], a: 'x² − 5x + 4 = 0', w: 'Check: S = 5, P = 4.', tr: 'Using the old S and P.' }
  ],
  short: { title: 'S and P', trad: 'Find the roots first.', fast: 'Write S and P, then express the target as S² − 2P, S³ − 3SP or S² − 4P.', rules: ['Never solve if S and P suffice.', 'x² − Sx + P forms equations.', 'P(a) is the remainder.', 'P(a) = 0 is the factor test.'] },
  mist: [['Sign error in S = −b/a', 'Forgetting the minus.', 'S = −b/a, P = c/a.'], ['Forgetting to divide by a', 'When a ≠ 1.', 'Use −b/a and c/a.'], ['Using P(−a) for (x − a)', 'Wrong substitution.', 'Substitute x = a.']],
  tips: { sec: 80, elim: 'Test small integer roots by substitution.', adv: 'Write S and P before anything else.', ins: 'A symmetric target always reduces to S and P.' },
  rev: ['S = −b/a, P = c/a.', 'S² − 2P.', 'Remainder theorem.', 'Factor theorem.', 'Cubic relations.'],
  qf: ['α² + β² = S² − 2P', 'α³ + β³ = S³ − 3SP'],
  take: ['Use S and P.', 'Evaluate P(a).', 'Check by roots.', 'Mind signs.'],
  self: ['Can I find α² + β² quickly?', 'Can I apply the factor theorem?', 'Can I form an equation from roots?']
});
const q18 = [
  easy('The sum of the roots of x² − 9x + 20 = 0 is', 9, [20, -9, 11], 'S = −b/a = 9.'),
  easy('The product of the roots of x² − 9x + 20 = 0 is', 20, [9, -20, 29], 'P = c/a = 20.'),
  easy('The sum of the roots of 2x² + 6x − 8 = 0 is', -3, [3, 6, -4], 'S = −b/a = −6/2 = −3.'),
  easy('A quadratic with roots 2 and 3 is', 'x² − 5x + 6 = 0', ['x² + 5x + 6 = 0', 'x² − 6x + 5 = 0', 'x² − x + 6 = 0'], 'S = 5 and P = 6, so x² − 5x + 6 = 0.'),
  easy('The remainder when x² + 3x + 1 is divided by (x − 1) is', 5, [1, 3, 4], 'P(1) = 1 + 3 + 1 = 5.'),
  easy('The quadratic x² + 4x + 4 = 0 has', 'equal real roots', ['two distinct real roots', 'no real roots', 'two complex roots'], 'D = 16 − 16 = 0, so the roots are equal.'),

  medium('If α and β are the roots of x² − 7x + 10 = 0, then α² + β² equals', 29, [49, 39, 19], 'S² − 2P = 49 − 20 = 29.'),
  medium('If α and β are the roots of x² − 5x + 6 = 0, then α³ + β³ equals', 35, [125, 25, 65], 'S³ − 3SP = 125 − 90 = 35.'),
  medium('If α and β are the roots of x² − 6x + 5 = 0, then |α − β| equals', 4, [2, 6, 16], '√(S² − 4P) = √(36 − 20) = 4.'),
  medium('The value of k for which (x − 2) is a factor of x³ − 3x² + kx + 2 is', 1, [2, -1, 3], 'P(2) = 8 − 12 + 2k + 2 = 0 gives k = 1.'),
  medium('The remainder when x³ − 2x + 1 is divided by (x − 2) is', 5, [1, 8, 3], 'P(2) = 8 − 4 + 1 = 5.'),
  medium('If one root of x² − 8x + k = 0 is 3, then k is', 15, [5, 24, 11], 'The other root is 5 (sum 8), so k = 3 × 5 = 15.'),
  medium('If the roots of x² − 6x + k = 0 are equal, k equals', 9, [6, 36, 12], 'D = 36 − 4k = 0 gives k = 9.'),
  medium('The sum of the roots of x³ − 6x² + 11x − 6 = 0 is', 6, [11, -6, 1], 'Σα = −b/a = 6 (the roots are 1, 2, 3).'),

  placement('If α, β are the roots of x² − 3x + 1 = 0, then 1/α + 1/β equals', 3, [1, 4, -3], '(α + β)/(αβ) = 3/1 = 3.'),
  placement('If α, β are the roots of x² − 4x + 2 = 0, then α² + β² equals', 12, [16, 8, 10], 'S² − 2P = 16 − 4 = 12.'),
  placement('A quadratic whose roots are the squares of the roots of x² − 3x + 2 = 0 is', 'x² − 5x + 4 = 0', ['x² − 9x + 4 = 0', 'x² − 3x + 4 = 0', 'x² − 5x + 2 = 0'], 'The roots are 1, 2, so the new roots are 1, 4: S = 5, P = 4.'),
  placement('If x − 3 divides x³ − 2x² − 5x + k exactly, k equals', 6, [-6, 3, 12], 'P(3) = 27 − 18 − 15 + k = 0 gives k = 6.'),
  placement('The product of the roots of x³ − 2x² − 5x + 6 = 0 is', -6, [6, 5, 2], 'αβγ = −d/a = −6.'),
  placement('For which value of k does x² + kx + 16 = 0 have equal roots (k > 0)?', 8, [4, 16, 32], 'D = k² − 64 = 0 gives k = 8.')
];
build(ch18, q18);
