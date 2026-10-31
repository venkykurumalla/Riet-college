const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const f = n => (n <= 1 ? 1 : n * f(n - 1));
const P = (n, r) => f(n) / f(n - r);
const Cb = (n, r) => f(n) / (f(r) * f(n - r));

// ---------------- Chapter 13 ----------------
const ch13 = C({
  n: 13, id: 'y3-quant-permutations', cat: 'quant', title: 'Permutations (nPr)',
  tag: 'Arrangements with and without repetition, restrictions, circular arrangements and digit problems',
  over: 'A permutation is an arrangement in which order matters. The fundamental principle of counting says that if one task can be done in m ways and a second in n ways, the two together can be done in m × n ways. From it come the formulas for arranging r of n different objects (nPr), arranging objects when some are alike, arranging in a circle, and counting numbers formed from given digits under restrictions.',
  place: 'Permutation questions are commonly asked in company aptitude rounds, typically as word arrangements, digit problems and seating with restrictions.',
  real: 'Passwords, seat plans, schedules and license plates are counted with permutations.',
  obj: ['Use the multiplication principle and factorials', 'Use nPr and arrangements with identical objects', 'Handle restrictions (together, never together, fixed positions)', 'Count circular arrangements', 'Count numbers formed from digits'],
  pre: ['Number System Fundamentals', 'Probability Fundamentals'],
  refresh: 'n! = n × (n − 1) × … × 1, with 0! = 1. Counting is by "choices in sequence": multiply the number of choices at each step.',
  defs: [
    'Permutation of n distinct objects taken r at a time: nPr = n!/(n − r)!.',
    'Arrangements of n objects with p alike of one kind, q alike of another: n!/(p! q!).',
    'Circular arrangements of n distinct objects: (n − 1)!; if clockwise and anticlockwise are the same: (n − 1)!/2.',
    'Treating items "together": glue them into one block, arrange the blocks, and arrange inside the block.',
    '"Never together" = total arrangements − arrangements with them together.'
  ],
  intu: 'Counting arrangements is filling positions one at a time: the first position has n choices, the next n − 1, and so on. Restrictions are handled by filling the restricted positions first.',
  mental: 'Fill the most restricted position first, then the others. For "together" make a block; for "not together" subtract; for repeated letters divide by the factorials of the repeats.',
  formulas: [
    ['Permutations', 'nPr = n!/(n − r)!', 'Distinct objects, order matters.', 'Arrangements.', '5P3 = 60'],
    ['With identical objects', 'n!/(p! q! …)', 'Divide by repeats.', 'Word arrangements.', 'MISSISSIPPI: 11!/(4! 4! 2!)'],
    ['Together / not together', 'Together: (n − k + 1)! × k!;  Not together = total − together', 'Block method.', 'Restrictions.', 'ARRANGE with the two vowels together'],
    ['Circular', '(n − 1)!', 'Fix one object.', 'Round tables.', '6 people: 5! = 120'],
    ['Digits', 'Choices for each position, restricted first', 'No leading zero.', 'Number counting.', '3-digit numbers from 1-5 without repetition: 5P3 = 60']
  ],
  narr: [
    'Count by positions. The number of ways to arrange 3 of 5 different letters is 5 × 4 × 3 = 60 = 5P3. If repetition is allowed, each position has 5 choices: 5³ = 125.',
    'For words with repeated letters divide by the factorials of the repeats. The word LEVEL has 5 letters with L twice and E twice: 5!/(2! 2!) = 30 arrangements.',
    'For restrictions, fix the restricted items first. To arrange the letters of RAINBOW so that the vowels (A, I, O) are together, treat AIO as one block: 5 objects arranged in 5! = 120 ways, times 3! = 6 arrangements inside the block: 720.',
    'For "never together", subtract. The total arrangements of 7 letters is 5040. With the three vowels together it is 720, so with the vowels not all together it is 5040 − 720 = 4320.',
    'Circular arrangements fix one person to remove rotations: 6 people around a table can be seated in 5! = 120 ways; if two particular persons must sit together, treat them as a block: 4! × 2 = 48 ways.'
  ],
  deep: [['Digit problems', 'For numbers, handle the leading digit first. 4-digit numbers from 0 to 9 without repetition: 9 × 9 × 8 × 7 = 4536.'], ['Rank of a word', 'The position of a word in the dictionary order is found by counting the words that start with smaller letters at each stage.']],
  vars: [['Distinct arrangements', 'nPr.', '5P3'], ['Repeated letters', 'Divide.', 'LEVEL'], ['Together / not together', 'Block.', 'RAINBOW vowels'], ['Circular', '(n − 1)!.', '6 around a table'], ['Digit counting', 'Position by position.', '4-digit numbers']],
  ex: [
    { t: 'Arrangements with repeats', q: 'How many different arrangements can be made from the letters of the word LEVEL?', g: ['5 letters: L twice, E twice'], c: 'Divide by the repeats.', s: [['Total', '5! = 120.'], ['Repeats', '2! for L and 2! for E.'], ['Result', '120/4 = 30.']], a: '30', w: 'Swapping identical letters does not give a new word.', tr: 'Using 5!.' },
    { t: 'Together', q: 'In how many ways can the letters of RAINBOW be arranged so that the vowels are together?', g: ['7 letters, vowels A, I, O'], c: 'Block method.', s: [['Block', 'AIO as one: 5 objects, 5! = 120.'], ['Inside', '3! = 6.'], ['Total', '120 × 6 = 720.']], a: '720', w: 'Arrange the blocks then the contents.', tr: 'Forgetting the inside arrangements.' },
    { t: 'Circular', q: 'In how many ways can 6 people sit around a circular table if two particular people must sit together?', g: ['6 people', '2 together'], c: 'Fix a block and divide rotations.', s: [['Block', 'The pair is one unit: 5 units around a table: 4! = 24.'], ['Inside', '2! = 2.'], ['Total', '24 × 2 = 48.']], a: '48', w: 'Rotations are identical.', tr: 'Using 5! × 2.' }
  ],
  short: { title: 'Fill the restricted position first', trad: 'List all arrangements.', fast: 'Pick the most restricted position, choose, then multiply the choices; use blocks and complements.', rules: ['Divide by factorials of repeats.', 'Together: block.', 'Not together: total − together.', 'Circular: (n − 1)!.'] },
  mist: [['Forgetting inside arrangements', 'Ignoring the block order.', 'Multiply by k!.'], ['Using n! for circles', 'Counting rotations separately.', '(n − 1)!.'], ['Ignoring identical letters', 'Counting repeated letters as distinct.', 'Divide.']],
  tips: { sec: 70, elim: 'Counts must be divisible by obvious symmetry factors; reject non-integers.', adv: 'Always ask which choice is most restricted.', ins: 'Permutations connect to probability and seating puzzles.' },
  rev: ['nPr.', 'Repeats divide.', 'Block method.', 'Circular (n − 1)!.', 'Digits: restricted first.'],
  qf: ['nPr = n!/(n − r)!'],
  take: ['Choices multiply.', 'Restrictions first.', 'Subtract for not together.', 'Divide for repeats.'],
  self: ['Can I count LEVEL?', 'Can I do a block problem?', 'Can I count a circular arrangement?']
});
const q13 = [
  easy('The value of 5P3 is', P(5, 3), [20, 30, 125], '5 × 4 × 3 = 60.'),
  easy('The number of 3-digit numbers that can be formed from the digits 1 to 5 without repetition is', P(5, 3), [30, 120, 125], '5 × 4 × 3 = 60.'),
  easy('The number of ways to arrange 4 different books on a shelf is', f(4), [12, 16, 48], '4! = 24.'),
  easy('The number of arrangements of the letters of the word LEVEL is', f(5) / (2 * 2), [20, 60, 120], '5!/(2! × 2!) = 30.'),
  easy('The number of 2-letter codes from A, B, C, D with repetition allowed is', 16, [12, 8, 24], '4 × 4 = 16.'),
  easy('The number of ways 6 people can sit around a circular table is', f(5), [24, 360, 720], '(6 − 1)! = 120.'),

  medium('In how many ways can the letters of RAINBOW be arranged so that the three vowels are together?', f(5) * f(3), [120, 720 * 2, 5040], 'Block AIO with 4 other letters: 5! × 3! = 720.'),
  medium('The number of arrangements of the letters of MISSISSIPPI is', f(11) / (f(4) * f(4) * f(2)), [34650 * 2, 39916800, 3326400], '11!/(4! 4! 2!) = 34650.'),
  medium('The number of 4-digit numbers that can be formed from the digits 0 to 9 without repetition is', 9 * 9 * 8 * 7, [5040, 4536 + 5040, 9000], '9 × 9 × 8 × 7 = 4536.'),
  medium('The number of ways 6 people can sit around a table if two particular persons must sit together is', f(4) * 2, [24, 96, 120], 'Treat the pair as a block: 4! × 2 = 48.'),
  medium('The number of 3-digit even numbers formed from the digits 1, 2, 3, 4, 5 without repetition is', 2 * P(4, 2), [12, 24, 36], 'The units digit is 2 or 4 (2 ways); the other two positions have 4P2 = 12 ways. 24 in total.'),
  medium('The number of arrangements of the letters of ARRANGE is', f(7) / (2 * 2), [1260 * 2, 5040, 630], '7!/(2! 2!) = 1260.'),
  medium('In how many ways can 5 boys and 3 girls be seated in a row so that no two girls are together?', P(6, 3) * f(5), [14400, 7200, 36000], 'Seat the boys in 5! = 120 ways; the 6 gaps take the girls in 6P3 = 120 ways. 14400.'),
  medium('The number of words (meaningful or not) that can be formed from the letters of the word BANANA is', f(6) / (f(3) * f(2)), [30, 60, 120], '6!/(3! × 2!) = 60.'),

  placement('In how many ways can the letters of the word ORANGE be arranged so that the three vowels occupy the odd positions (1st, 3rd and 5th)?', f(3) * f(3), [12, 72, 120], 'The vowels O, A, E take the 3 odd places in 3! = 6 ways and the 3 consonants take the even places in 3! = 6 ways: 36.'),
  placement('The number of ways to arrange 7 persons in a row so that two particular persons are not adjacent is', f(7) - 2 * f(6), [3600, 2880, 3000], 'Total 5040 minus together 2 × 720 = 1440 gives 3600.'),
  placement('The number of 5-digit numbers divisible by 5 that can be formed from the digits 0 to 9 without repetition is', 9 * 8 * 7 * 6 + 8 * 8 * 7 * 6, [3024, 6048, 5040], 'Units digit 0: 9 × 8 × 7 × 6 = 3024. Units digit 5: the leading digit cannot be 0 or 5, so 8 × 8 × 7 × 6 = 2688. Total 5712.'),
  placement('The number of arrangements of the letters of the word EXAMINATION is', f(11) / (2 * 2 * 2), [4989600 * 2, 39916800 / 2, 19958400], 'There are 11 letters with A, I and N each repeated twice: 11!/(2! 2! 2!) = 4989600.'),
  placement('The rank of the word CAT among the arrangements of its letters in dictionary order is', 3, [1, 2, 4], 'The words in order: ACT, ATC, CAT, CTA, TAC, TCA. CAT is third (rank 3).'),
  placement('How many 4-digit numbers greater than 5000 can be formed from 2, 3, 5, 6, 7 without repetition?', 3 * P(4, 3), [60, 72, 96], 'The first digit is 5, 6 or 7 (3 ways); the other three digits arrange from the remaining 4 in 4P3 = 24 ways: 72.')
];
build(ch13, q13);

// ---------------- Chapter 14 ----------------
const ch14 = C({
  n: 14, id: 'y3-quant-combinations', cat: 'quant', title: 'Combinations (nCr)',
  tag: 'Selections, committees, geometry counts, distribution of objects and restrictions',
  over: 'A combination is a selection in which order does not matter. Choosing r objects from n different objects can be done in nCr = n!/(r!(n − r)!) ways. Combinations count committees, teams, hands of cards, diagonals and triangles in geometry, and distributions of objects into groups. They connect directly to permutations: nPr = nCr × r!.',
  place: 'Combination questions are commonly asked in company aptitude rounds, usually with committees under conditions, geometry counts and distributions.',
  real: 'Choosing project teams, lottery tickets and test subsets are combinations.',
  obj: ['Use nCr and its symmetry nCr = nC(n − r)', 'Form committees with conditions (at least, at most, specific members)', 'Count diagonals, triangles and lines', 'Distribute objects into groups', 'Combine selection with arrangement'],
  pre: ['Permutations', 'Probability Fundamentals'],
  refresh: 'nCr = nPr / r!. nC0 = nCn = 1. nCr = nC(n − r).',
  defs: [
    'nCr: the number of ways to choose r objects from n distinct objects, order ignored.',
    'Identity: nCr + nC(r − 1) = (n + 1)Cr.',
    'Selections with conditions: use "at least" as complement or by cases.',
    'Distribution into labelled groups: choose for the first, then the second, and so on; divide by repeats for identical groups.',
    'Geometry counts: choose points and apply conditions (no three collinear etc.).'
  ],
  intu: 'A selection ignores order, so each selection is counted r! times if you count arrangements. Dividing by r! corrects the overcounting. For conditions, count by cases or subtract the unwanted selections from the total.',
  mental: 'Decide whether order matters. If not, use nCr. For "at least one", subtract "none" from the total. For specific people, include or exclude them first.',
  formulas: [
    ['Combinations', 'nCr = n!/(r!(n − r)!)', 'Order ignored.', 'Selections.', '8C3 = 56'],
    ['Symmetry', 'nCr = nC(n − r)', 'Choose the smaller.', 'Simplify.', '10C8 = 10C2 = 45'],
    ['At least one', 'Total − none', 'Complement.', 'At-least conditions.', '5C... total − selections with none'],
    ['Geometry', 'Lines = nC2;  Triangles = nC3 (no three collinear);  Diagonals = nC2 − n', 'n points or vertices.', 'Geometry counts.', 'Hexagon: 6C2 − 6 = 9'],
    ['Groups', 'Divide by k! for k identical groups of equal size', 'Avoid overcounting.', 'Distribution.', '6 into 3 pairs: 6!/(2!³ 3!) = 15']
  ],
  narr: [
    'Use nCr when order does not matter. From 8 students choose a team of 3: 8C3 = 8 × 7 × 6 / 6 = 56. By symmetry 10C8 = 10C2 = 45.',
    'For committees with conditions, work by cases or complements. A committee of 3 is chosen from 4 men and 3 women with at least one woman: total 7C3 = 35 minus all-men 4C3 = 4 gives 31.',
    'For specific members, include or exclude them first. A committee of 4 from 8 people that includes two particular people: choose the other 2 from the remaining 6: 6C2 = 15; that excludes both: 6C4 = 15.',
    'Geometry counts are combinations of points. Lines from 6 points, no three collinear, number 6C2 = 15. Triangles: 6C3 = 20. Diagonals of an n-gon: nC2 − n; for a hexagon 15 − 6 = 9.',
    'For distributions, divide by the factorial of the number of identical groups. Dividing 6 different people into 3 pairs gives 6!/(2!³ × 3!) = 15 (the 3! removes the order of the groups).'
  ],
  deep: [['Combine selection and arrangement', 'Select first, then arrange: choosing 3 from 8 and arranging them gives 8C3 × 3! = 336 = 8P3.'], ['Pascal\'s identity', 'nCr + nC(r − 1) = (n + 1)Cr is a quick way to check or simplify sums of combinations.']],
  vars: [['Simple selections', 'nCr.', '8C3'], ['Committees with conditions', 'Cases or complement.', 'At least one woman'], ['Geometry', 'Lines, triangles.', '6 points'], ['Distribution', 'Divide by repeats.', '6 people into 3 pairs'], ['Selection then arrangement', 'nCr × r!.', '8C3 × 3!']],
  ex: [
    { t: 'At least one', q: 'A committee of 3 is chosen from 4 men and 3 women. In how many ways can it contain at least one woman?', g: ['4 men', '3 women'], c: 'Total − none.', s: [['Total', '7C3 = 35.'], ['No woman', '4C3 = 4.'], ['At least one woman', '35 − 4 = 31.']], a: '31', w: 'The complement is easier to count.', tr: 'Counting 3C1 × 6C2 which overcounts.' },
    { t: 'Geometry', q: 'How many diagonals does a hexagon have?', g: ['n = 6'], c: 'nC2 − n.', s: [['Line segments between vertices', '6C2 = 15.'], ['Remove the sides', '15 − 6 = 9.']], a: '9', w: 'The sides are not diagonals.', tr: 'Answering 15.' },
    { t: 'Groups', q: 'In how many ways can 6 different people be divided into 3 pairs?', g: ['6 people', '3 identical pairs'], c: 'Divide by the order of the pairs.', s: [['Ordered pairs', '6!/(2! 2! 2!) = 90.'], ['Remove group order', '90/3! = 15.']], a: '15', w: 'The pairs are not labelled.', tr: 'Answering 90.' }
  ],
  short: { title: 'Cases or complement', trad: 'List every selection.', fast: 'Use nCr; for "at least" subtract the complement; for specific people include or exclude them first; for identical groups divide by k!.', rules: ['Order ignored → nCr.', 'At least = total − none.', 'Specific members first.', 'Divide by k! for equal groups.'] },
  mist: [['Using permutations for a selection', 'Counting orders.', 'Divide by r!.'], ['Overcounting "at least one"', 'Choosing one woman then the rest freely.', 'Use the complement.'], ['Forgetting identical groups', 'Counting group order.', 'Divide by k!.']],
  tips: { sec: 80, elim: 'nCr is always an integer and at most (n choose n/2); reject options outside.', adv: 'Use symmetry to reduce the arithmetic.', ins: 'Combinations reappear in probability.' },
  rev: ['nCr formula.', 'Symmetry.', 'At least = complement.', 'Geometry counts.', 'Group division.'],
  qf: ['nCr = n!/(r!(n − r)!)'],
  take: ['Order ignored.', 'Complement.', 'Specific first.', 'Divide equal groups.'],
  self: ['Can I compute 8C3?', 'Can I handle at least one?', 'Can I count diagonals?']
});
const q14 = [
  easy('The value of 8C3 is', Cb(8, 3), [24, 48, 336], '8 × 7 × 6 / (3 × 2 × 1) = 56.'),
  easy('The value of 10C8 is', Cb(10, 8), [10, 80, 90], '10C8 = 10C2 = 45.'),
  easy('The number of ways to choose a team of 2 from 5 players is', Cb(5, 2), [5, 20, 25], '5C2 = 10.'),
  easy('The number of lines that can be drawn through 6 points, no three collinear, is', Cb(6, 2), [12, 30, 36], '6C2 = 15.'),
  easy('The number of triangles formed from 6 points, no three collinear, is', Cb(6, 3), [15, 30, 120], '6C3 = 20.'),
  easy('The value of 7C0 + 7C7 is', 2, [1, 7, 14], 'Each equals 1, so the sum is 2.'),

  medium('A committee of 3 is chosen from 4 men and 3 women. The number of committees with at least one woman is', Cb(7, 3) - Cb(4, 3), [30, 33, 35], 'Total 35 minus all men 4 = 31.'),
  medium('The number of diagonals of a hexagon is', Cb(6, 2) - 6, [6, 12, 15], '6C2 − 6 = 9.'),
  medium('In how many ways can 6 different people be divided into 3 pairs?', f(6) / (8 * 6), [30, 45, 90], '6!/(2!³ × 3!) = 15.'),
  medium('A committee of 4 is chosen from 8 people. The number of committees including two particular people is', Cb(6, 2), [6, 20, 28], 'Choose the other 2 from the remaining 6: 15.'),
  medium('From 5 boys and 4 girls, a team of 4 with exactly 2 girls is chosen in how many ways?', Cb(5, 2) * Cb(4, 2), [30, 40, 120], '5C2 × 4C2 = 10 × 6 = 60.'),
  medium('The number of ways to select 3 numbers from 1 to 10 whose sum is even is', 60, [50, 55, 120], 'Even sum: all three even (5C3 = 10) or one even and two odd (5 × 5C2 = 50): 60.'),
  medium('The number of ways to choose 4 cards from a deck of 52 that are all aces is', 1, [4, 52, 24], 'There are exactly four aces: 4C4 = 1.'),
  medium('From 10 points, 4 of which are collinear (no other three collinear), the number of triangles is', Cb(10, 3) - Cb(4, 3), [100, 116, 120], '10C3 − 4C3 = 120 − 4 = 116.'),

  placement('The number of ways of selecting 3 books out of 8 and arranging them on a shelf is', Cb(8, 3) * f(3), [56, 168, 512], '8C3 × 3! = 336 = 8P3.'),
  placement('The number of ways to distribute 10 identical sweets among 3 children so that each gets at least one is', Cb(9, 2), [36, 45, 120], 'Stars and bars with each at least one: 9C2 = 36.'),
  placement('The number of ways to select 5 cards from a deck of 52 containing exactly 3 kings is', Cb(4, 3) * Cb(48, 2), [4512, 4512 * 2, 54], '4C3 × 48C2 = 4 × 1128 = 4512.'),
  placement('From 6 men and 4 women, a committee of 5 is formed so that it has at least 2 women. The number of ways is', Cb(10, 5) - Cb(6, 5) - Cb(4, 1) * Cb(6, 4), [186, 246, 252], 'Total 252 − no woman 6 − one woman 4 × 15 = 60: 186.'),
  placement('The number of ways to arrange the letters of ARRANGE with the two R\'s never together is', f(7) / 4 - f(6) / 2, [900, 1080, 1260], 'Total 7!/(2! 2!) = 1260; R\'s together: 6!/2! = 360. 1260 − 360 = 900.'),
  placement('The number of rectangles formed on a chessboard (8 × 8 squares) is', Cb(9, 2) * Cb(9, 2), [204, 1296, 1568], 'Choose 2 of 9 horizontal lines and 2 of 9 vertical lines: 36 × 36 = 1296.')
];
build(ch14, q14);
