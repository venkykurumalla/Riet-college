const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-odd-one-out', year: 1, category: 'Logical Reasoning', num: 17,
  title: 'Odd One Out (Mixed)',
  tagline: 'Year 1 Foundation — Spotting the odd number, letter or group in a mixed list',
  minutes: 40,
  morePractice: 'https://www.indiabix.com/logical-reasoning/odd-man-out/',
  overview: 'In a mixed odd-one-out question the items are numbers, letters or letter groups instead of words. Three or four of them follow the same mathematical or alphabetical rule, and one breaks it. Typical rules are "all are perfect squares", "all are prime", "all are multiples of 7", "all are vowels" or "each letter moves two steps from the previous one". The method is to find the rule from the majority and test every item against it.',
  placement: 'Odd-one-out questions with numbers and letters are commonly asked in the reasoning section of company aptitude rounds. They test number sense and quick pattern checks.',
  realWorld: 'Spotting an invalid entry in a list of part numbers, finding a corrupted value in a column of data and checking a pattern in coded identifiers are practical versions of this skill.',
  objectives: [
    'Identify number properties: prime, square, cube, multiple, odd or even',
    'Recognise vowel/consonant and position-gap rules in letters',
    'Detect the item that breaks a letter-group pattern',
    'Use divisibility and perfect-power knowledge to test items quickly',
    'Choose the most specific rule when several seem to fit'
  ],
  prereq: ['Number Series', 'Letter Series', 'Divisibility rules', 'Classification / Odd One Out'],
  refresher: 'Squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225. Cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. Primes below 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.',
  defs: [
    'Perfect square: a number that is the square of an integer (36 = 6²). Perfect cube: a number that is the cube of an integer (125 = 5³).',
    'Prime number: a number greater than 1 with exactly two factors, 1 and itself.',
    'Multiple: a number that is divisible by a given number (35 is a multiple of 7).',
    'Vowel: A, E, I, O, U. All other letters are consonants.',
    'Pattern break: the one item that does not fit the rule followed by all the others.'
  ],
  intuition: 'The odd item is almost always "almost right": it looks like the others but fails one precise test. 40 among squares, 21 among primes and 35 among multiples of 6 are all of this kind. The better you know number properties, the faster you see the exception.',
  mental: 'Run three quick tests on each number: (1) is it a prime or does it have an obvious factor, (2) is it a square or cube, (3) is it divisible by a common number like 3, 4, 7, 11. Whichever test splits the list into four-versus-one gives the rule.',
  formulas: [
    ['Test for squares and cubes', 'Compare with n² and n³', 'Know the lists to 15² and 10³.', 'Lists such as 16, 25, 36, 40, 49.', '40 is not a square'],
    ['Test for primes', 'No divisor other than 1 and itself; check 2, 3, 5, 7', 'For numbers below 100, test divisibility by 2, 3, 5, 7.', 'Lists such as 11, 13, 17, 21, 23.', '21 = 3 × 7'],
    ['Test for multiples', 'Use divisibility rules for 3, 4, 6, 7, 9, 11', 'All but one number divisible by the same number.', 'Lists such as 12, 18, 24, 30, 35.', '35 is not a multiple of 6'],
    ['Letter gap rule', 'Positions of letters in a group differ by a constant gap', 'Check gaps within the group and between groups.', 'BDF, HJL, NPR, TVW.', 'TVW breaks the gap of 2 (TVX would fit)'],
    ['Group start rule', 'The first letters of consecutive groups follow a series', 'Compare group to group as well as within a group.', 'ACE, GIK, MOQ, SUX.', 'Starts A, G, M, S fit (gap 6); SUX should be SUW']
  ],
  narrative: [
    'For numbers, begin by scanning for properties that all but one share. In 16, 25, 36, 40, 49 the numbers 16, 25, 36 and 49 are squares of 4, 5, 6, 7, so 40 is the odd one. In 11, 13, 17, 21, 23 all are primes except 21 = 3 × 7.',
    'Multiples are another frequent rule. In 12, 18, 24, 30, 35 four numbers are multiples of 6. In 14, 21, 28, 36, 42 four numbers are multiples of 7, so 36 is the odd one.',
    'For letters, convert to positions. In A, E, I, O, K the first four are vowels while K is a consonant. For letter groups such as BDF, HJL, NPR and TVW, check the gap inside each group (2 and 2 in BDF) and the movement from group to group (B → H → N → T, steps of 6). TVW has gaps 2 and 1, so it breaks the rule.',
    'When two rules fit, choose the one with the clearest four-versus-one split. For 4, 9, 25, 49, 81 (all squares) another rule might be "squares of primes", but 81 = 9² is the square of a non-prime. Do not over-complicate: if one rule fits every item but one, take it.'
  ],
  deep: [
    ['Pair and triple items', 'Some questions give number triples (3-4-5, 5-12-13, 8-15-17, 6-8-11). Here the rule is "Pythagorean triple" (a² + b² = c²). 6² + 8² = 100, so 6-8-10 would fit; 6-8-11 is the odd one.'],
    ['Combining checks quickly', 'For lists of two-digit numbers, test the digit sum or the product of digits. Sometimes the rule is a digit relationship, such as "the digits differ by 1" or "the sum of digits is 9". If divisibility fails, try digits.']
  ],
  variations: [
    ['Odd number', 'Square, cube, prime, multiple.', '16, 25, 36, 40, 49'],
    ['Odd letter', 'Vowel/consonant or position.', 'A, E, I, O, K'],
    ['Odd letter group', 'Gap pattern inside groups.', 'BDF, HJL, NPR, TVW'],
    ['Odd pair', 'Letter-pair patterns.', 'AZ, BY, CX, DV'],
    ['Odd triple', 'Number triples and relationships.', '3-4-5, 5-12-13, 8-15-17, 6-8-11']
  ],
  examples: [
    {
      title: 'Odd number: squares',
      q: 'Find the odd one out: 16, 25, 36, 40, 49',
      given: ['Numbers: 16, 25, 36, 40, 49'],
      concept: 'Test each number against the list of perfect squares.',
      steps: [
        ['Test 16, 25, 36, 49', '16 = 4², 25 = 5², 36 = 6², 49 = 7².'],
        ['Test 40', 'The squares near 40 are 36 (6²) and 49 (7²), so 40 is not a perfect square.']
      ],
      ans: '40',
      why: 'Four numbers are perfect squares and 40 is not.',
      trap: 'Choosing 16 because it is the smallest.'
    },
    {
      title: 'Odd number: multiples',
      q: 'Find the odd one out: 14, 21, 28, 36, 42',
      given: ['Numbers: 14, 21, 28, 36, 42'],
      concept: 'Check divisibility by a common factor.',
      steps: [
        ['Try 7', '14 = 7 × 2, 21 = 7 × 3, 28 = 7 × 4, 42 = 7 × 6.'],
        ['Test 36', '36 ÷ 7 leaves remainder 1, so it is not a multiple of 7.']
      ],
      ans: '36',
      why: 'The rule is "multiples of 7" and 36 breaks it.',
      trap: 'Choosing 21 because it is odd while the others are even.'
    },
    {
      title: 'Odd letter group',
      q: 'Find the odd one out: BDF, HJL, NPR, TVW',
      given: ['Groups: BDF, HJL, NPR, TVW'],
      concept: 'Convert to positions and check the gaps.',
      steps: [
        ['Positions', 'BDF = 2, 4, 6. HJL = 8, 10, 12. NPR = 14, 16, 18. TVW = 20, 22, 23.'],
        ['Gaps inside each group', 'BDF: 2, 2. HJL: 2, 2. NPR: 2, 2. TVW: 2, 1.'],
        ['Find the break', 'TVW has a second gap of 1 instead of 2 (TVX would fit).']
      ],
      ans: 'TVW',
      why: 'Three groups have a constant internal gap of 2 and one does not.',
      trap: 'Comparing only the first letters and finding nothing wrong.'
    }
  ],
  shortcut: {
    title: 'Three-test scan',
    trad: 'Test every number against every possible property.',
    fast: 'Test each item for square/cube, prime and divisibility by 3, 4, 7 and 11 in that order. The first property that splits the list four-versus-one is the answer.',
    rules: [
      'Memorise squares to 15², cubes to 10³ and primes below 50.',
      'For letters, convert to positions first.',
      'For groups, check inside the group and between groups.',
      'If two items look odd, choose the rule that is stated in a simpler way.'
    ]
  },
  mistakes: [
    ['Choosing based on size or parity only', 'Selecting the smallest, largest or the odd number.', 'Check for a mathematical property before size or parity.'],
    ['Missing the second rule', 'Using the first pattern found without checking all items.', 'Verify that the pattern holds for every item except one.'],
    ['Wrong prime checks', 'Treating numbers such as 21, 27 or 51 as prime.', 'Test divisibility by 3 and 7 for numbers below 100.'],
    ['Looking only inside letter groups', 'Missing the pattern from group to group.', 'Look at both the internal gaps and the movement between groups.']
  ],
  tips: {
    sec: 30,
    elim: 'Cross out items that obviously fit the property; the remaining one is your answer.',
    advice: 'Quick to solve once you know the standard lists. Attempt these early.',
    insight: 'Familiarity with squares, cubes and primes is worth more than any trick.'
  },
  revision: [
    'Find the rule from the majority; the exception is the answer.',
    'Test number properties: square, cube, prime, multiple.',
    'Test letter properties: vowel, consonant, positions and gaps.',
    'Check inside and between letter groups.',
    'Prefer simple rules.'
  ],
  quickFormulas: ['Squares to 15², cubes to 10³', 'Primes below 50', 'Divisibility by 3, 4, 7, 11'],
  takeaways: [
    'The odd one fails a precise test.',
    'Know the standard number lists.',
    'Convert letters to positions.',
    'Check every item against the rule.'
  ],
  selfCheck: [
    'Can I find the odd one in 11, 13, 17, 21, 23 and say why?',
    'Can I find the odd one in QPO, NML, KJI, HGF, ECB?',
    'Can I spot the odd triple in 3-4-5, 5-12-13, 8-15-17, 6-8-11?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Odd Man Out topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Find the odd one out: 2, 4, 6, 9, 10', 9, [2, 6, 10], 'All numbers except 9 are even. 9 is odd.'),
  easy('Find the odd one out: 16, 25, 36, 40, 49', 40, [16, 36, 49], '16, 25, 36 and 49 are perfect squares. 40 is not.'),
  easy('Find the odd one out: 11, 13, 17, 21, 23', 21, [11, 17, 23], '11, 13, 17 and 23 are prime. 21 = 3 × 7 is composite.'),
  easy('Find the odd one out: 8, 27, 64, 100, 125', 100, [8, 64, 125], '8 = 2³, 27 = 3³, 64 = 4³ and 125 = 5³ are cubes. 100 is not a perfect cube.'),
  easy('Find the odd one out: A, E, I, O, K', 'K', ['A', 'E', 'O'], 'A, E, I and O are vowels. K is a consonant.'),
  easy('Find the odd one out: 12, 18, 24, 30, 35', 35, [12, 24, 30], '12, 18, 24 and 30 are multiples of 6. 35 is not.'),

  medium('Find the odd one out: ABC, DEF, GHI, JKM', 'JKM', ['ABC', 'DEF', 'GHI'], 'The groups are consecutive letters in order. JKL would fit, but JKM skips L.'),
  medium('Find the odd one out: BDF, HJL, NPR, TVW', 'TVW', ['BDF', 'HJL', 'NPR'], 'Inside each group the letters are two places apart. TVW has gaps 2 and 1, so it breaks the pattern.'),
  medium('Find the odd one out: 121, 144, 169, 200', 200, [121, 144, 169], '121 = 11², 144 = 12² and 169 = 13² are squares. 200 is not.'),
  medium('Find the odd one out: 3-4-5, 5-12-13, 8-15-17, 6-8-11', '6-8-11', ['3-4-5', '5-12-13', '8-15-17'], 'The first three satisfy a² + b² = c² (9 + 16 = 25, 25 + 144 = 169, 64 + 225 = 289). For 6-8-11, 36 + 64 = 100, which is not 121.'),
  medium('Find the odd one out: 2, 3, 5, 7, 9', 9, [2, 3, 7], '2, 3, 5 and 7 are prime. 9 = 3 × 3 is not.'),
  medium('Find the odd one out: AZ, BY, CX, DV', 'DV', ['AZ', 'BY', 'CX'], 'The pairs are letters and their opposites (positions add to 27). D pairs with W, so DV is wrong.'),
  medium('Find the odd one out: 14, 21, 28, 36, 42', 36, [14, 28, 42], '14, 21, 28 and 42 are multiples of 7. 36 is not.'),
  medium('Find the odd one out: CF, FI, IL, LO, OS', 'OS', ['CF', 'FI', 'LO'], 'Each letter moves forward by 3 and the next group starts where the previous ended: CF, FI, IL, LO, OR. OS breaks the pattern.'),

  placement('Find the odd one out: 1, 4, 9, 16, 24, 36', 24, [16, 36, 9], '1, 4, 9, 16 and 36 are squares of 1, 2, 3, 4 and 6. 24 is not a perfect square.'),
  placement('Find the odd one out: 17, 19, 23, 27, 29', 27, [17, 19, 29], '17, 19, 23 and 29 are primes. 27 = 3³ is not.'),
  placement('Find the odd one out: AC, EG, IK, MO, PR', 'PR', ['AC', 'IK', 'MO'], 'Each pair is two letters apart, and each pair starts four letters after the previous one: A, E, I, M, Q. So QS would fit, not PR.'),
  placement('Find the odd one out: ACE, GIK, MOQ, SUX', 'SUX', ['ACE', 'GIK', 'MOQ'], 'Each group has a gap of 2 between its letters and the first letters move by 6 (A, G, M, S). SUW would fit; SUX has gaps 2 and 3.'),
  placement('Find the odd one out: 22, 33, 44, 55, 66, 78', 78, [22, 55, 66], 'All numbers except 78 are multiples of 11. 78 = 6 × 13.'),
  placement('Find the odd one out: 1331, 1728, 2197, 2744, 3000', 3000, [1331, 2197, 2744], '1331 = 11³, 1728 = 12³, 2197 = 13³ and 2744 = 14³. 3000 is not a perfect cube (14³ = 2744 and 15³ = 3375).')
];

build(chapter, quiz);
