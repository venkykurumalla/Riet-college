const { easy, medium, placement, build } = require('../lib.cjs');

// Letter helpers: answers for letter-shift questions are computed here, not typed by hand.
const A = 'A'.charCodeAt(0);
const shiftLetter = (c, k) => String.fromCharCode(A + (((c.charCodeAt(0) - A + k) % 26) + 26) % 26);
const shift = (w, k) => [...w].map(c => shiftLetter(c, k)).join('');
const alt = (w, k1, k2) => [...w].map((c, i) => shiftLetter(c, i % 2 === 0 ? k1 : k2)).join('');
const progressive = (w) => [...w].map((c, i) => shiftLetter(c, i + 1)).join('');
const rev = w => [...w].reverse().join('');
const opp = w => [...w].map(c => String.fromCharCode(A + 25 - (c.charCodeAt(0) - A))).join('');
const pos = w => [...w].map(c => c.charCodeAt(0) - A + 1);

const chapter = {
  id: 'y1-lr-basic-coding', year: 1, category: 'Logical Reasoning', num: 18,
  title: 'Basic Coding-Decoding',
  tagline: 'Year 1 Foundation — Letter shifts, reversals, number codes and word-based codes',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/logical-reasoning/letter-and-symbol-series/',
  overview: 'In coding-decoding, a word or number is converted into a code by a hidden rule, and you must apply the same rule to another word, or decode a code back to a word. The rules in basic questions fall into a few families: shifting each letter forward or backward, reversing the word, replacing letters by their opposite letters, writing the position numbers, replacing letters by digits or symbols, and comparing sentences to find the code for each word.',
  placement: 'Coding-decoding questions are commonly asked in company reasoning rounds. They reward a methodical approach: write the positions, find the rule from the given pair, and apply it to the new word.',
  realWorld: 'Simple ciphers, product-code schemes, password rules such as "replace every a with @", and file-naming conventions all use rule-based substitutions like these.',
  objectives: [
    'Recognise constant and varying letter shifts',
    'Apply and undo reversal and opposite-letter codes',
    'Convert between letters and position numbers',
    'Decode word-based codes by comparing sentences',
    'Verify a rule on all letters of the example before applying it'
  ],
  prereq: ['Letter Series', 'Alphabet positions A to Z', 'Analogy'],
  refresher: 'A = 1, B = 2, …, Z = 26. Opposite letters add up to 27 (A–Z, B–Y, C–X, …). Moving past Z wraps around to A.',
  defs: [
    'Code: a word, number or symbol sequence obtained from the original by a fixed rule.',
    'Encoding: converting the original to the code. Decoding: converting a code back to the original.',
    'Letter shift: replacing each letter by the one k places after it (+k) or before it (−k) in the alphabet.',
    'Opposite-letter code: replacing each letter by its mirror letter in the alphabet (A↔Z, B↔Y, …).',
    'Substitution code: assigning a digit or symbol to each letter or word, usually deduced by comparing several examples.'
  ],
  intuition: 'Every coding question gives you the rule indirectly. Once you write the original and its code side by side and compare position by position, the rule shows up immediately. The key discipline is to test the rule on every letter, not just the first one.',
  mental: 'Write the original word on one line and its code on the line below. Under each pair write the number of steps between the letters (with a sign). If every step is the same, it is a constant shift; if the steps are 1, 2, 3, …, it is a progressive shift; if the code is the original read backwards, it is a reversal.',
  formulas: [
    ['Constant shift', 'Code letter = original letter + k  (positions mod 26)', 'All letters move the same number of places.', 'MONKEY → NPOLFZ (+1).', 'CAT with +1 → DBU'],
    ['Alternating or progressive shift', 'Shifts +1, −1, +1, −1 …  or  +1, +2, +3, …', 'The shift changes from letter to letter in a pattern.', 'PAPER → QCSIW (+1, +2, +3, +4, +5).', 'BOARD with +1, +2, +3, +4, +5 → CQDVI'],
    ['Reversal', 'Code = original written backwards', 'Sometimes combined with a shift.', 'SCHOOL → LOOHCS.', 'BOOK → KOOB'],
    ['Opposite letter', 'Code position = 27 − original position', 'A↔Z, B↔Y, …', 'TEAM → GVZN.', 'SOLVE → HLOEV'],
    ['Position numbers', 'Letter → its alphabet position', 'Use A = 1 to Z = 26.', 'Number codes and sums of positions.', 'HAT → 8, 1, 20']
  ],
  narrative: [
    'Start by writing the original word and its code directly below. Count the steps between each letter and its code letter, with a sign for direction. In MONKEY and NPOLFZ every step is +1, so the rule is "next letter". The code for TIGER is therefore UJHFS.',
    'Some rules alternate or grow. If FRIEND becomes GQJDOC, the shifts are +1, −1, +1, −1, +1, −1. For BOARD, apply the same alternating shifts: C, N, B, Q, E. A progressive code such as PAPER → QCSIW uses +1, +2, +3, +4, +5.',
    'A reversal can be pure (SCHOOL → LOOHCS) or combined with a shift. When a reversal and a constant shift are combined, the result is the same in either order. If the shift changes with position, the order matters and must be taken from the example.',
    'Word-based codes are solved by comparison. If "pen pencil" is "ab cd", "pencil box" is "cd ef" and "pen bag" is "ab gh", then the common word pencil matches the common code cd, pen matches ab, and the new word box matches ef.'
  ],
  deep: [
    ['Number codes using position values', 'Writing a word as positions (SMART = 19, 13, 1, 18, 20) and summing them (71) are standard tasks. Remember EJOTY (5, 10, 15, 20, 25) to get positions quickly.'],
    ['Why the rule must fit every letter', 'Many examples fit a shift for the first letter by coincidence. For safety, compute the step for the first, middle and last letters. A rule that survives all three is almost certainly correct.']
  ],
  variations: [
    ['Constant letter shift', 'Add or subtract a fixed number.', 'MONKEY → NPOLFZ'],
    ['Alternating or progressive shift', 'The shift changes in a pattern.', 'PAPER → QCSIW'],
    ['Reversal and opposite letters', 'Read backwards or take mirror letters.', 'SCHOOL → LOOHCS'],
    ['Numbers and positions', 'Convert to numbers or sum positions.', 'HAT → 8, 1, 20'],
    ['Word-based code', 'Decode from sentences.', '"red apple" = "ka lo"']
  ],
  examples: [
    {
      title: 'Constant shift',
      q: 'In a code language MONKEY is written as NPOLFZ. How is TIGER written in that code?',
      given: ['MONKEY → NPOLFZ'],
      concept: 'Find the step between each letter and its code letter.',
      steps: [
        ['Compare letter by letter', 'M → N, O → P, N → O, K → L, E → F, Y → Z. Each step is +1.'],
        ['Apply to TIGER', 'T → U, I → J, G → H, E → F, R → S.'],
        ['Write the code', 'The code is ' + shift('TIGER', 1) + '.']
      ],
      ans: shift('TIGER', 1),
      why: 'Every letter moves one place forward in the alphabet.',
      trap: 'Checking only the first letter and assuming the rest follow.'
    },
    {
      title: 'Alternating shift',
      q: 'If FRIEND is coded as GQJDOC, how is BOARD coded?',
      given: ['FRIEND → GQJDOC'],
      concept: 'The shifts alternate between +1 and −1.',
      steps: [
        ['Find the shifts', 'F → G is +1, R → Q is −1, I → J is +1, E → D is −1, N → O is +1, D → C is −1.'],
        ['Apply to BOARD', 'B + 1 = C, O − 1 = N, A + 1 = B, R − 1 = Q, D + 1 = E.'],
        ['Write the code', 'The code is ' + alt('BOARD', 1, -1) + '.']
      ],
      ans: alt('BOARD', 1, -1),
      why: 'The rule alternates, so it must be applied position by position.',
      trap: 'Applying +1 to every letter.'
    },
    {
      title: 'Word-based code',
      q: 'In a code language "pen pencil" is written "ab cd", "pencil box" is "cd ef" and "pen bag" is "ab gh". What is the code for "box"?',
      given: ['pen pencil = ab cd', 'pencil box = cd ef', 'pen bag = ab gh'],
      concept: 'A word that is common to two sentences matches the code that is common to them.',
      steps: [
        ['Find the common word in the first two sentences', 'Pencil appears in both; the common code is cd. So pencil = cd.'],
        ['Find pen', 'Pen appears in the first and third sentences; the common code is ab. So pen = ab.'],
        ['Find box', 'In "pencil box" = "cd ef", pencil is cd, so box = ef.']
      ],
      ans: 'ef',
      why: 'Each common word isolates one code word.',
      trap: 'Assigning codes by position in the sentence rather than by the common word.'
    }
  ],
  shortcut: {
    title: 'Pair-and-count method',
    trad: 'Try different rules one by one on the example until one fits.',
    fast: 'Write the original and the code in two rows, count the signed step under each pair, and read the rule from the row of steps.',
    rules: [
      'A row of equal steps is a constant shift.',
      'Steps +1, +2, +3, … is a progressive shift.',
      'If the code is the same letters in reverse, it is a reversal.',
      'If the steps add up to 27 for each pair of positions, it is an opposite-letter code.'
    ]
  },
  mistakes: [
    ['Checking the first letter only', 'The first letter fits many rules.', 'Test the rule on every letter of the example.'],
    ['Forgetting the wrap-around', 'Y + 3 or Z + 1 goes past Z.', 'Subtract 26 when the position exceeds 26.'],
    ['Wrong direction of a shift', 'Mixing +k with −k when decoding.', 'When decoding, apply the opposite operation.'],
    ['Mismatching word order in sentence codes', 'Assuming the code follows the same word order.', 'Use common words to match, not position in the sentence.']
  ],
  tips: {
    sec: 60,
    elim: 'Apply the discovered rule to one letter of the target word and eliminate options that do not match that letter.',
    advice: 'Basic coding questions are among the fastest; do not skip them. Write positions down rather than computing in your head.',
    insight: 'Coding-decoding rewards neat working: a row of numbers under the letters prevents most mistakes.'
  },
  revision: [
    'Compare the original and its code letter by letter.',
    'Constant, alternating and progressive shifts; reversal; opposite letters.',
    'Opposite positions add up to 27.',
    'Wrap past Z by subtracting 26.',
    'Common words identify common codes.'
  ],
  quickFormulas: ['Shift: new = old ± k', 'Opposite: 27 − position', 'Position numbers: A = 1 … Z = 26'],
  takeaways: [
    'Always find the rule from every letter.',
    'Write positions down.',
    'Decode by applying the reverse of the rule.',
    'Use common words in word-based codes.'
  ],
  selfCheck: [
    'Can I apply a +2 shift to the word COME?',
    'Can I find the opposite-letter code of SOLVE?',
    'Can I decode a word-based code from three sentences?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Coding-Decoding topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('In a code, every letter is replaced by the next letter of the alphabet. Then BOY is written as', shift('BOY', 1), [shift('BOY', -1), shift('BOY', 2), rev(shift('BOY', 1))], 'Each letter moves one place forward: B→C, O→P, Y→Z. So BOY becomes ' + shift('BOY', 1) + '.'),
  easy('In a code, every letter is replaced by the letter two places before it. Then FUN is written as', shift('FUN', -2), [shift('FUN', 2), shift('FUN', -1), shift('FUN', 1)], 'F→D, U→S, N→L, so FUN becomes ' + shift('FUN', -2) + '.'),
  easy('If SCHOOL is written as LOOHCS, then BOOK is written as', rev('BOOK'), ['BOKO', 'OOKB', 'KBOO'], 'The code is the word written backwards. So BOOK becomes KOOB.'),
  easy('If A = 1, B = 2, C = 3, …, what is the sum of the values of the letters of BAD?', pos('BAD').reduce((a, b) => a + b, 0), [6, 8, 9], 'B = 2, A = 1, D = 4. Sum = 7.'),
  easy('If MONKEY is written as NPOLFZ, then TIGER is written as', shift('TIGER', 1), [shift('TIGER', -1), shift('TIGER', 2), rev('TIGER')], 'Each letter moves one place forward, so TIGER becomes UJHFS.'),
  easy('In a code, A is replaced by Z, B by Y, C by X and so on. Then CAT is written as', opp('CAT'), [shift('CAT', 1), rev('CAT'), 'XAG'], 'Each letter is replaced by its opposite (positions add to 27): C→X, A→Z, T→G. So CAT becomes XZG.'),

  medium('In a code, M = 1, A = 2, T = 3, E = 4, R = 5, I = 6. The code for TERM is', '3451', ['3415', '3541', '3145'], 'T = 3, E = 4, R = 5, M = 1, so TERM = 3451.'),
  medium('In a code, every letter is replaced by the letter three places ahead. Then COME is written as', shift('COME', 3), [shift('COME', 2), shift('COME', -3), shift('COME', 4)], 'C→F, O→R, M→P, E→H. So COME becomes ' + shift('COME', 3) + '.'),
  medium('Written in the form of position numbers, the word HAT is', '8-1-20', ['8-1-19', '7-1-20', '8-2-20'], 'H = 8, A = 1, T = 20.'),
  medium('In a code, "red apple" = "ka lo", "green apple" = "ma lo" and "red rose" = "ka ti". What is the code for "green"?', 'ma', ['ka', 'lo', 'ti'], '"apple" is common to the first two sentences, so apple = lo. "red" is common to the first and third, so red = ka. Then in "green apple" = "ma lo", green = ma.'),
  medium('In a code, vowels in a word are replaced by the next letter of the alphabet and consonants are unchanged. Then WATER is written as', 'WBTFR', ['XBUFS', 'WATER', 'WBTER'], 'A→B and E→F. W, T and R are unchanged. So WATER becomes WBTFR.'),
  medium('If FRIEND is coded as GQJDOC (alternate shifts +1 and −1), then BOARD is coded as', alt('BOARD', 1, -1), [shift('BOARD', 1), alt('BOARD', -1, 1), shift('BOARD', -1)], 'The shifts alternate +1, −1, +1, −1, +1: B→C, O→N, A→B, R→Q, D→E. The code is CNBQE.'),
  medium('In a code, each letter is replaced by twice its position number. The code for DAD is', '8-2-8', ['4-1-4', '8-1-8', '16-2-16'], 'D = 4 → 8, A = 1 → 2, D = 4 → 8. The code is 8-2-8.'),
  medium('If MANGO is coded as OCPIQ, then APPLE is coded as', shift('APPLE', 2), [shift('APPLE', 1), shift('APPLE', 3), shift('APPLE', -2)], 'M→O, A→C, N→P, G→I, O→Q: each letter moves two places forward. So APPLE becomes ' + shift('APPLE', 2) + '.'),

  placement('In a code, each word is first reversed and then every letter is moved one place forward. Then DOG is coded as', shift(rev('DOG'), 1), [shift('DOG', 1), 'HOE', shift(rev('DOG'), -1)], 'Reversing DOG gives GOD. Moving each letter one place forward gives HPE.'),
  placement('If PAPER is coded as QCSIW (shifts +1, +2, +3, +4, +5), then BOARD is coded as', progressive('BOARD'), [shift('BOARD', 1), alt('BOARD', 1, 2), progressive('BOAR') + 'E'], 'B+1 = C, O+2 = Q, A+3 = D, R+4 = V, D+5 = I. The code is CQDVI.'),
  placement('If SMART is written as 19-13-1-18-20 (position numbers), then 20-8-9-14-11 stands for', 'THINK', ['THANK', 'TRICK', 'THICK'], '20 = T, 8 = H, 9 = I, 14 = N, 11 = K. The word is THINK.'),
  placement('In a code, "pen pencil" = "ab cd", "pencil box" = "cd ef" and "pen bag" = "ab gh". The code for "box" is', 'ef', ['ab', 'cd', 'gh'], 'pencil is common to the first two sentences (cd) and pen to the first and third (ab). In "pencil box" = "cd ef", pencil is cd, so box = ef.'),
  placement('In a code, every letter is replaced by its opposite letter in the alphabet (A↔Z, B↔Y, …). Then SOLVE is written as', opp('SOLVE'), [rev(opp('SOLVE')), shift('SOLVE', 1), opp('SOLVE').replace('H', 'G')], 'S→H, O→L, L→O, V→E, E→V. The code is HLOEV.', 'Opposite position = 27 − position.'),
  placement('If A = 1, B = 2, …, Z = 26, the sum of the position values of the letters of the word RIET is', pos('RIET').reduce((a, b) => a + b, 0), [47, 53, 58], 'R = 18, I = 9, E = 5, T = 20. Sum = 18 + 9 + 5 + 20 = 52.')
];

build(chapter, quiz);
