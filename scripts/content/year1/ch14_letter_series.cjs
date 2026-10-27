const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-letter-series', year: 1, category: 'Logical Reasoning', num: 14,
  title: 'Letter Series',
  tagline: 'Year 1 Foundation — Patterns built from alphabet positions',
  minutes: 40,
  morePractice: 'https://www.indiabix.com/logical-reasoning/letter-and-symbol-series/',
  overview: 'A letter series is a list of letters or letter groups that follows a rule based on their positions in the English alphabet. The rule can move forward or backward by a fixed gap, use a gap that grows, alternate between two patterns, or work on each letter of a group separately. The key skill is to convert letters into position numbers so that the problem becomes a number series.',
  placement: 'Letter series questions are commonly asked in company reasoning rounds. They are quick to solve for a student who knows the alphabet positions well, so they are a good source of fast marks.',
  realWorld: 'Spreadsheet column names (A, B, … Z, AA, AB), seat numbering in a theatre and codes used in inventory labels all use alphabetical order and gaps in the same way.',
  objectives: [
    'Recall the position of any letter quickly, from both ends of the alphabet',
    'Convert letter patterns into number patterns',
    'Solve series with constant, increasing and alternating gaps',
    'Handle two-letter and three-letter groups by treating each position separately',
    'Use the opposite-letter rule (positions add up to 27)'
  ],
  prereq: ['Number Series', 'Alphabet positions A to Z'],
  refresher: 'A = 1, B = 2, …, Z = 26. A useful anchor is the word EJOTY: E = 5, J = 10, O = 15, T = 20, Y = 25. Each letter and its opposite (A–Z, B–Y, …) add up to 27.',
  defs: [
    'Position value: the number of a letter in the alphabet counted from A. A = 1, M = 13, Z = 26.',
    'Opposite letter: the letter at the same distance from the other end. Position from the left + position from the right = 27.',
    'Gap (step): the number of positions between two consecutive letters in a series.',
    'Letter group: a block of two or more letters treated as one term, such as ACE or AZ.',
    'Wrap-around: after Z, counting continues from A (so Z + 1 = A, Z + 2 = B). Many series do not need this, but check when a gap carries you past Z.'
  ],
  intuition: 'A letter series is a number series in disguise. Replace each letter with its number, find the rule in the numbers, then convert the answer back to a letter. For letter groups the same rule usually works separately in each position of the group, left letter against left letter and so on.',
  mental: 'Imagine a ruler marked A to Z. Each term in the series is a point on the ruler. A constant gap means equal jumps; an increasing gap means jumps of 1, 2, 3, …; a series moving to the left means decreasing positions.',
  formulas: [
    ['Position and opposite', 'Position from left + position from right = 27', 'Both counts include the letter itself.', 'Questions about the nth letter from the end.', '7th from the end = 27 − 7 = 20 → T'],
    ['Constant gap', 'Next = current position + d', 'Add (or subtract) the same number each time.', 'A, C, E, G, ? (d = 2)', 'G = 7, next = 9 → I'],
    ['Increasing gap', 'Gaps 1, 2, 3, 4, …', 'The gap itself grows by 1.', 'A, B, D, G, K, ?', 'K = 11, gap 5 → 16 = P'],
    ['Group series', 'Treat each position of a group separately', 'First letters form one series, second letters another.', 'AZ, BY, CX, DW, ?', 'Left letters A, B, C, D, E and right letters Z, Y, X, W, V → EV'],
    ['Wrap-around', 'If position > 26, subtract 26', 'Alphabet is circular in some questions.', 'Series passing beyond Z.', '28 − 26 = 2 → B']
  ],
  narrative: [
    'Begin by writing the position number under each letter. For A, C, E, G the numbers are 1, 3, 5, 7. The rule is a constant gap of 2, so the next is 9 = I. This conversion step makes every later check an arithmetic one.',
    'Letters can move backwards: Z, X, V, T has positions 26, 24, 22, 20 and the next is 18 = R. Look at the first two letters and decide whether the series is moving towards A or Z.',
    'Increasing gaps give series such as A, B, D, G, K, whose positions are 1, 2, 4, 7, 11. The gaps are 1, 2, 3, 4, so the next gap is 5 and the next letter is 16 = P.',
    'For groups such as AZ, BY, CX, DW, handle the left letters and right letters as two separate series: A, B, C, D (moving forward) and Z, Y, X, W (moving backward). The next group is EV.',
    'In groups with three letters like ACE, FHJ, KMO, check whether each position moves by the same gap from group to group. Here every letter shifts by 5 from one group to the next (A→F→K), so the next group is PRT.'
  ],
  deep: [
    ['Alternating letter series', 'In a series like A, Z, B, Y, C, X the odd terms go forward (A, B, C) and the even terms go backward (Z, Y, X). Separate them, find each rule, and continue the series with the correct sub-series for the next position.'],
    ['Why EJOTY helps', 'Remembering E = 5, J = 10, O = 15, T = 20, Y = 25 lets you reach any letter within two or three counts, which saves precious seconds in a timed test.']
  ],
  variations: [
    ['Single letters, constant gap', 'A, C, E, G, ?', 'B, D, F, H, ?'],
    ['Single letters, changing gap', 'The gap grows or alternates.', 'A, B, D, G, K, ?'],
    ['Two-letter groups', 'Left and right letters move separately.', 'AZ, BY, CX, DW, ?'],
    ['Three-letter groups', 'Each position follows a rule.', 'ACE, FHJ, KMO, ?'],
    ['Alternating series', 'Odd and even positions follow different rules.', 'A, Z, B, Y, C, X, ?']
  ],
  examples: [
    {
      title: 'Increasing gaps',
      q: 'Find the next letter: A, B, D, G, K, ?',
      given: ['Series: A, B, D, G, K'],
      concept: 'Convert to positions and study the gaps.',
      steps: [
        ['Convert to numbers', 'A = 1, B = 2, D = 4, G = 7, K = 11.'],
        ['Find the gaps', '2 − 1 = 1, 4 − 2 = 2, 7 − 4 = 3, 11 − 7 = 4.'],
        ['Continue the gaps', 'The next gap is 5, so the next position is 11 + 5 = 16.'],
        ['Convert back', 'Position 16 is P.']
      ],
      ans: 'P',
      why: 'The gaps 1, 2, 3, 4 grow by one each time, a standard pattern of increasing gaps.',
      trap: 'Assuming a constant gap after seeing the first two letters, which gives C instead of D.'
    },
    {
      title: 'Letter groups that move in opposite directions',
      q: 'Find the next group: AZ, BY, CX, DW, ?',
      given: ['Series: AZ, BY, CX, DW'],
      concept: 'Treat the left letters and right letters as two separate series.',
      steps: [
        ['Left letters', 'A, B, C, D go forward by 1. The next is E.'],
        ['Right letters', 'Z, Y, X, W go backward by 1. The next is V.'],
        ['Join', 'The next group is EV.']
      ],
      ans: 'EV',
      why: 'Each group pairs a letter with its opposite, and the pairing shifts by one in each step.',
      trap: 'Treating AZ as one unit and looking for a pattern in the whole group.'
    },
    {
      title: 'Backward series with a growing gap',
      q: 'Find the next letter: Z, W, S, N, H, ?',
      given: ['Series: Z, W, S, N, H'],
      concept: 'Positions and the changing gap.',
      steps: [
        ['Positions', 'Z = 26, W = 23, S = 19, N = 14, H = 8.'],
        ['Gaps', '26 → 23 is −3, 23 → 19 is −4, 19 → 14 is −5, 14 → 8 is −6.'],
        ['Next gap', 'The next gap is −7, so the position is 8 − 7 = 1.'],
        ['Convert back', 'Position 1 is A.']
      ],
      ans: 'A',
      why: 'The gaps are 3, 4, 5, 6, 7 going down the alphabet.',
      trap: 'Forgetting that the series moves backwards and adding the gaps.'
    }
  ],
  shortcut: {
    title: 'Convert to numbers, then use the number-series toolbox',
    trad: 'Count letters on your fingers from A each time you need a position.',
    fast: 'Memorise EJOTY (5, 10, 15, 20, 25) and count only 1–2 steps from the nearest anchor. Use the opposite-letter rule for positions from the right: 27 minus the left position.',
    rules: [
      'Always write the positions under the letters on the first pass.',
      'For groups, track each position separately.',
      'Use a "27" rule for opposite letters.',
      'When a series moves past Z, wrap around by subtracting 26.'
    ]
  },
  mistakes: [
    ['Wrong alphabet positions', 'Counting from memory and slipping by one.', 'Use the EJOTY anchors and double-check by counting from the nearest anchor.'],
    ['Treating a letter group as a single item', 'Overlooking that each letter follows its own rule.', 'Split the group into columns and examine each column.'],
    ['Ignoring direction', 'Assuming every series moves forward.', 'Check the first two letters: smaller to larger is forward, larger to smaller is backward.'],
    ['Skipping the wrap-around', 'Position exceeds 26 and the answer is not a letter.', 'Subtract 26 from any position above 26.']
  ],
  tips: {
    sec: 40,
    elim: 'Write the positions of each option and see which one fits the number pattern; wrong options usually break the gap.',
    advice: 'Do letter series early in the reasoning section; they are among the fastest to finish.',
    insight: 'Speed comes from remembering the anchor letters and the opposite-letter rule, not from any complex theory.'
  },
  revision: [
    'A = 1 … Z = 26; anchors E, J, O, T, Y = 5, 10, 15, 20, 25.',
    'Left position + right position = 27.',
    'Convert letters to numbers, find the gap pattern, convert back.',
    'For groups, solve each position separately.',
    'Wrap past Z by subtracting 26.'
  ],
  quickFormulas: ['Position from the right = 27 − position from the left', 'Next position = current + gap', 'Wrap: position − 26 if > 26'],
  takeaways: [
    'A letter series is a number series in disguise.',
    'Know the anchor letters.',
    'Look at each position of a group separately.',
    'Direction matters.'
  ],
  selfCheck: [
    'Can I give the 9th letter from the end of the alphabet?',
    'Can I continue QPO, NML, KJI, HGF?',
    'Can I spot the gap pattern in A, B, D, G, K, ?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Series Completion topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Find the next letter: A, C, E, G, ?', 'I', ['H', 'J', 'K'], 'The positions are 1, 3, 5, 7 with a gap of 2. The next position is 9, which is I.'),
  easy('Find the next letter: B, D, F, H, ?', 'J', ['I', 'K', 'L'], 'The positions are 2, 4, 6, 8. The next position is 10, which is J.'),
  easy('Find the next letter: Z, X, V, T, ?', 'R', ['Q', 'S', 'P'], 'The positions are 26, 24, 22, 20 going down by 2. The next is 18, which is R.'),
  easy('Find the next letter: A, B, D, G, K, ?', 'P', ['N', 'O', 'Q'], 'The positions are 1, 2, 4, 7, 11 with gaps 1, 2, 3, 4. The next gap is 5, so 11 + 5 = 16, which is P.'),
  easy('What is the position of the letter P from the start of the alphabet?', 16, [15, 17, 11], 'A = 1, …, O = 15, P = 16.'),
  easy('Which letter is the 7th from the end of the alphabet?', 'T', ['S', 'U', 'V'], 'Position from the left = 27 − 7 = 20, which is T.', 'Position from the right + position from the left = 27.'),

  medium('Find the next group: AZ, BY, CX, DW, ?', 'EV', ['EW', 'DV', 'FV'], 'The left letters move forward (A, B, C, D, E) and the right letters move backward (Z, Y, X, W, V). The next group is EV.'),
  medium('Find the next group: ACE, FHJ, KMO, ?', 'PRT', ['PQR', 'OQS', 'PRS'], 'Each letter moves forward by 5 from one group to the next: A→F→K→P, C→H→M→R, E→J→O→T. The next group is PRT.'),
  medium('Find the next letter: B, E, H, K, N, ?', 'Q', ['P', 'R', 'S'], 'The positions are 2, 5, 8, 11, 14 with a gap of 3. The next is 17, which is Q.'),
  medium('Find the next letter: A, Z, B, Y, C, X, ?', 'D', ['W', 'E', 'V'], 'The odd positions go A, B, C, … and the even positions go Z, Y, X, …. The next term is in an odd position, so it is D.'),
  medium('Find the next group: ZYX, WVU, TSR, ?', 'QPO', ['QOP', 'PQR', 'RQP'], 'Each group is three letters in reverse order, and the starting letters go Z, W, T, Q (down by 3). The next group is QPO.'),
  medium('Find the next group: CF, FI, IL, LO, ?', 'OR', ['PQ', 'NQ', 'OS'], 'Each letter moves forward by 3 in every step: C→F→I→L→O and F→I→L→O→R. The next group is OR.'),
  medium('Find the next group: ABD, EFH, IJL, ?', 'MNP', ['MNO', 'LMN', 'MOP'], 'The groups are three letters with the last one two ahead of the middle. The first letters are A, E, I, M (gap 4), so the next group is MNP.'),
  medium('Find the next letter: C, F, I, L, ?', 'O', ['N', 'P', 'M'], 'The positions are 3, 6, 9, 12 with a gap of 3. The next is 15, which is O.'),

  placement('Find the next group: AB, DE, HI, MN, ?', 'ST', ['RS', 'TU', 'SU'], 'The first letters are A, D, H, M, which are positions 1, 4, 8, 13 with gaps 3, 4, 5. The next gap is 6, giving position 19 = S. Each group has consecutive letters, so the next group is ST.'),
  placement('Find the next letter: B, D, G, K, P, ?', 'V', ['T', 'U', 'W'], 'The positions are 2, 4, 7, 11, 16 with gaps 2, 3, 4, 5. The next gap is 6, giving 22, which is V.'),
  placement('Find the next group: AZBY, CXDW, EVFU, ?', 'GTHS', ['GSHT', 'GTHU', 'HTIS'], 'Within each group the letters are A–Z–B–Y style. The first letters go A, C, E, G; so the next group starts with G, followed by its opposite T, then H and its opposite S: GTHS.'),
  placement('Find the next letter: Z, W, S, N, H, ?', 'A', ['Z', 'B', 'E'], 'The positions are 26, 23, 19, 14, 8 with gaps −3, −4, −5, −6. The next gap is −7, so the position is 1, which is A.'),
  placement('Find the next letter: A, E, I, M, Q, U, ?', 'Y', ['X', 'Z', 'W'], 'The positions are 1, 5, 9, 13, 17, 21 with a gap of 4. The next position is 25, which is Y.'),
  placement('Find the next group: QPO, NML, KJI, HGF, ?', 'EDC', ['EFG', 'DCB', 'FED'], 'Each group is three letters in reverse order. The starting letters Q, N, K, H are positions 17, 14, 11, 8 (down by 3). The next starts at position 5 (E): EDC.')
];

build(chapter, quiz);
