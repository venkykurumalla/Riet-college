const { easy, medium, placement, build } = require('../lib.cjs');

// Helpers: counts for word-position questions are computed here, not typed by hand.
const pos = c => c.charCodeAt(0) - 64;
const letter = n => String.fromCharCode(64 + n);
const pairsSame = w => {
  let n = 0;
  for (let i = 0; i < w.length; i++) for (let j = i + 1; j < w.length; j++) if (j - i === Math.abs(pos(w[i]) - pos(w[j]))) n++;
  return n;
};
const fixedAfterSort = w => {
  const s = [...w].sort().join('');
  return [...w].filter((c, i) => c === s[i]).length;
};

const chapter = {
  id: 'y1-lr-alphabetical-reasoning', year: 1, category: 'Logical Reasoning', num: 22,
  title: 'Alphabetical Reasoning',
  tagline: 'Year 1 Foundation — Positions, gaps and rearrangements in the English alphabet',
  minutes: 40,
  morePractice: 'https://www.indiabix.com/verbal-reasoning/questions-and-answers/',
  overview: 'Alphabetical reasoning questions use the order of the 26 letters of the English alphabet. You may be asked for the letter that is a certain number of places to the left or right of another letter, the number of letters between two letters, the letter at a given position from the other end, or what happens when the letters of a word are rearranged in alphabetical order. The foundation is knowing that A = 1 to Z = 26 and that the position from the left and the position from the right add up to 27.',
  placement: 'Alphabet-based questions are commonly asked in the reasoning section of company aptitude rounds. They reward students who have the positions memorised and who use simple arithmetic on positions.',
  realWorld: 'Sorting names alphabetically, indexing documents, spreadsheet column labels and dictionary look-ups all rely on the order of the alphabet.',
  objectives: [
    'Convert quickly between letters and positions from either end',
    'Find the letter a given number of places to the left or right of another',
    'Count the letters between two letters',
    'Find the midpoint letter between two letters',
    'Analyse words after rearranging their letters alphabetically'
  ],
  prereq: ['Letter Series', 'Basic Coding-Decoding'],
  refresher: 'A = 1, B = 2, … Z = 26. Anchors: E = 5, J = 10, O = 15, T = 20, Y = 25. Left position + right position = 27.',
  defs: [
    'Position from the left: the number of the letter counting from A as 1.',
    'Position from the right: the number counting from Z as 1; equal to 27 − position from the left.',
    'Letters between two letters: the count of letters strictly between them, equal to (larger position − smaller position − 1).',
    'To the right of: a later letter in the alphabet. To the left of: an earlier letter.',
    'Alphabetical order of a word: its letters rearranged from A to Z, with repeated letters kept.'
  ],
  intuition: 'Everything here is arithmetic on positions. Replace letters by numbers, apply addition or subtraction, and convert back. The only places where errors creep in are the off-by-one count when counting letters between two letters, and confusing the position from the right with the position from the left.',
  mental: 'Picture the alphabet as a number line from 1 to 26. A letter k places to the right of the letter at position p sits at p + k. Between two positions p and q there are |p − q| − 1 letters. The midpoint of p and q is at (p + q)/2.',
  formulas: [
    ['Position from the other end', 'Right position = 27 − Left position', 'Switches the end of counting.', '"The 8th letter from the right end".', '8th from the right = 27 − 8 = 19 = S'],
    ['Letter k places away', 'New position = p ± k', '+ for right, − for left.', '"Which letter is 5th to the right of D?"', 'D = 4, 4 + 5 = 9 = I'],
    ['Letters between', 'Between = |p − q| − 1', 'Excludes both letters.', '"How many letters between C and J?"', '|3 − 10| − 1 = 6'],
    ['Midpoint letter', 'Midpoint position = (p + q)/2', 'Works when p + q is even.', '"Letter midway between D and N."', '(4 + 14)/2 = 9 = I'],
    ['Same gap as in the alphabet', 'For letters at word positions i and j: j − i = |p − q|', 'Counts pairs whose distance in the word equals their distance in the alphabet.', 'Word-and-alphabet pair questions.', 'In TEACHER, the letters E (2nd) and C (4th) are 2 apart in the word and E = 5, C = 3 are 2 apart in the alphabet']
  ],
  narrative: [
    'Begin by writing the position next to each letter you are given. The 5th letter to the right of D is at position 4 + 5 = 9, which is I. The 3rd letter to the left of H is at 8 − 3 = 5, which is E. Always check that the final position lies between 1 and 26.',
    'To count letters between two letters, subtract the positions and then subtract 1. Between C (3) and J (10) the letters D, E, F, G, H, I are 6 in number, matching 10 − 3 − 1 = 6.',
    'Positions from the right use the rule 27 − p. The 8th letter from the right end is at position 27 − 8 = 19, which is S. This also tells you that the letter 8th from the right and the letter 8th from the left are mirror images (H and S).',
    'To find a midpoint, add the positions and halve. Midway between D (4) and N (14) is position 9, which is I. If the sum is odd there is no single midpoint letter, so such questions give an even sum.',
    'For rearrangement questions, write the letters in alphabetical order and keep repeated letters. The letters of CALM become A, C, L, M. Then answer what is asked (third letter, middle letter, number of letters that stay in place) by looking at the sorted list.'
  ],
  deep: [
    ['Counting pairs with equal gaps', 'To count how many pairs of letters in a word have as many letters between them in the word as in the alphabet, check every pair (i, j) in the word and see if the difference of word positions equals the difference of alphabet positions. In practice, list the positions of each letter and test the plausible pairs only.'],
    ['Symmetry of the alphabet', 'The letter at position p from the left is a mirror of the letter at position p from the right. So H (8th from the left) is the mirror of S (8th from the right). Use this to jump across the alphabet quickly.']
  ],
  variations: [
    ['Left and right of a letter', 'A letter k places away.', '5th to the right of D'],
    ['Counting letters between', 'Between two letters.', 'C and J'],
    ['Position from the other end', 'Use 27 − p.', '8th letter from the right end'],
    ['Midpoint of two letters', 'Average of the positions.', 'D and N'],
    ['Rearranged words', 'Alphabetical order of a word.', 'DEPARTMENT in alphabetical order']
  ],
  examples: [
    {
      title: 'A letter k places away',
      q: 'Which letter is the 11th to the right of the letter that is the 8th to the left of S?',
      given: ['S is the 19th letter', 'First move 8 places left, then 11 places right'],
      concept: 'Position arithmetic: subtract for left, add for right.',
      steps: [
        ['Position of S', 'S = 19.'],
        ['8th to the left', '19 − 8 = 11, the letter K.'],
        ['11th to the right of K', '11 + 11 = 22, the letter V.']
      ],
      ans: 'V',
      why: 'The two moves together are +3 from S: 19 + 3 = 22.',
      trap: 'Moving the second 11 places from S rather than from K.'
    },
    {
      title: 'Midpoint and further move',
      q: 'Which letter is the 4th to the right of the letter midway between D and N?',
      given: ['D = 4', 'N = 14'],
      concept: 'Midpoint = (p + q)/2.',
      steps: [
        ['Midpoint', '(4 + 14)/2 = 9, the letter I.'],
        ['4th to the right of I', '9 + 4 = 13, the letter M.']
      ],
      ans: 'M',
      why: 'The midpoint lies exactly between D and N, with 4 letters on each side.',
      trap: 'Taking the 4th letter to the right of D instead of the midpoint.'
    },
    {
      title: 'Alphabetical rearrangement',
      q: 'If the letters of the word DEPARTMENT are arranged in alphabetical order, how many letters remain in the same position as in the original word?',
      given: ['Word: D E P A R T M E N T'],
      concept: 'Write the sorted word and compare position by position.',
      steps: [
        ['Sort the letters', 'A, D, E, E, M, N, P, R, T, T.'],
        ['Compare position by position', 'Original: D E P A R T M E N T. Sorted: A D E E M N P R T T.'],
        ['Count the matches', 'Only the 10th position matches (T and T). The count is 1.']
      ],
      ans: '1',
      why: 'The last letter is already the largest letter in the word, so it stays in place; all other positions differ.',
      trap: 'Comparing the letters as a set instead of by position.'
    }
  ],
  shortcut: {
    title: 'Positions-first method',
    trad: 'Count along the alphabet on your fingers for each question.',
    fast: 'Write the position numbers, do the addition or subtraction, and convert back using the anchors E, J, O, T, Y. For "from the right" use 27 − p.',
    rules: [
      'Left + right = 27 for every letter.',
      'Between = difference − 1.',
      'Midpoint = average of positions.',
      'For rearrangements, list the sorted letters and compare directly.'
    ]
  },
  mistakes: [
    ['Off-by-one in "between"', 'Forgetting to exclude the two named letters.', 'Always subtract 1 from the difference.'],
    ['Confusing right and left', 'Moving the wrong way along the alphabet.', 'To the right means a later letter; use + for right and − for left.'],
    ['Wrong 27 − p calculation', 'Using 26 − p instead of 27 − p.', 'Check with Z: its right position is 1 = 27 − 26.'],
    ['Losing repeated letters when sorting', 'Writing each letter only once.', 'Keep every occurrence when rearranging a word.']
  ],
  tips: {
    sec: 45,
    elim: 'Check that the final position is between 1 and 26 and that options match the parity or range you expect.',
    advice: 'Alphabet questions are fast marks; memorise the anchor letters before the test.',
    insight: 'Precision with "between", "right of" and "from the right end" matters more than speed here.'
  },
  revision: [
    'A = 1 … Z = 26; left + right = 27.',
    'Right of = plus, left of = minus.',
    'Between = |p − q| − 1.',
    'Midpoint = (p + q)/2.',
    'Sort words keeping repeated letters.'
  ],
  quickFormulas: ['Right position = 27 − left position', 'Between = |p − q| − 1', 'Midpoint = (p + q)/2'],
  takeaways: [
    'Replace letters by positions.',
    'Mind the off-by-one in counts.',
    'Use the mirror property.',
    'Compare sorted words position by position.'
  ],
  selfCheck: [
    'Can I find the 8th letter from the right end?',
    'Can I count the letters between C and J?',
    'Can I find the letter midway between D and N?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Alphabet Test topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Which letter is the 5th to the right of D?', 'I', ['H', 'J', 'K'], 'D is the 4th letter. 4 + 5 = 9, which is I.'),
  easy('Which letter is the 3rd to the left of H?', 'E', ['D', 'F', 'K'], 'H is the 8th letter. 8 − 3 = 5, which is E.'),
  easy('How many letters are there between C and J in the English alphabet?', 6, [5, 7, 8], 'C = 3 and J = 10. Letters between them: 10 − 3 − 1 = 6 (D, E, F, G, H, I).'),
  easy('Which letter is the 8th from the right end of the alphabet?', 'S', ['R', 'T', 'H'], 'Position from the left = 27 − 8 = 19, which is S.'),
  easy('Which letter is midway between B and H?', 'E', ['D', 'F', 'C'], 'B = 2 and H = 8. The midpoint is (2 + 8)/2 = 5, which is E.'),
  easy('Which letter is the 4th to the right of M?', 'Q', ['P', 'R', 'N'], 'M = 13. 13 + 4 = 17, which is Q.'),

  medium('In the word TEACHER, how many pairs of letters have as many letters between them in the word as in the English alphabet?', pairsSame('TEACHER'), [pairsSame('TEACHER') + 1, pairsSame('TEACHER') + 2, pairsSame('TEACHER') + 3], 'Check every pair of positions and compare the gap in the word with the gap in the alphabet. The pairs that match number ' + pairsSame('TEACHER') + '.'),
  medium('If the letters of the word CALM are arranged in alphabetical order, the third letter from the left is', 'L', ['A', 'C', 'M'], 'The sorted word is A, C, L, M. The third letter is L.'),
  medium('If the letters of the word BRAIN are arranged in alphabetical order, the middle letter is', 'I', ['A', 'B', 'N'], 'The sorted word is A, B, I, N, R. The middle (third) letter is I.'),
  medium('Which letter is the 6th to the left of the 10th letter from the right end of the alphabet?', 'K', ['J', 'L', 'Q'], 'The 10th from the right is at position 27 − 10 = 17 (Q). 6 places to its left is position 11, which is K.'),
  medium('Which letter is the 9th to the right of the 12th letter from the left?', 'U', ['T', 'V', 'S'], 'The 12th letter is L. 12 + 9 = 21, which is U.'),
  medium('How many letters are there between the 4th letter from the left and the 4th letter from the right in the alphabet?', 18, [17, 19, 20], 'The 4th from the left is D (4). The 4th from the right is W (23). Letters between them: 23 − 4 − 1 = 18.'),
  medium('The letter that is the mirror image of J in the alphabet (same distance from the other end) is', 'Q', ['P', 'R', 'S'], 'J is the 10th letter. Its mirror is at position 27 − 10 = 17, which is Q.'),
  medium('Which letter is the immediate predecessor of the 16th letter from the left?', 'O', ['N', 'P', 'Q'], 'The 16th letter is P. The letter immediately before it is O.'),

  placement('If the letters of the word DEPARTMENT are arranged in alphabetical order, how many letters remain in the same position as in the original word?', fixedAfterSort('DEPARTMENT'), [fixedAfterSort('DEPARTMENT') + 1, fixedAfterSort('DEPARTMENT') + 2, fixedAfterSort('DEPARTMENT') + 3], 'Sorted: A, D, E, E, M, N, P, R, T, T against D, E, P, A, R, T, M, E, N, T. Only 1 position matches: the last one (T).'),
  placement('Which letter is the 11th to the right of the letter that is the 8th to the left of S?', 'V', ['U', 'W', 'T'], 'S = 19. 8 to the left: 19 − 8 = 11 (K). 11 to the right of K: 11 + 11 = 22, which is V.'),
  placement('In the word DISCOVERY, how many pairs of letters have as many letters between them in the word as in the English alphabet?', pairsSame('DISCOVERY'), [pairsSame('DISCOVERY') + 1, pairsSame('DISCOVERY') + 2, pairsSame('DISCOVERY') - 1], 'Compare the gap of every pair of letters in the word with the gap in the alphabet. The number of pairs that match is ' + pairsSame('DISCOVERY') + '.'),
  placement('Write the letters of the alphabet in reverse order (Z first). Which letter is the 10th from the left in this arrangement?', 'Q', ['P', 'R', 'J'], 'In the reversed alphabet the 10th letter is the 10th from the right of the normal alphabet: 27 − 10 = 17, which is Q.'),
  placement('If the letters of the word STAR are arranged in alphabetical order, the letter that is second from the right is', 'S', ['A', 'R', 'T'], 'The sorted word is A, R, S, T. The second letter from the right is S.'),
  placement('Which letter is the 4th to the right of the letter midway between D and N?', 'M', ['L', 'N', 'I'], 'D = 4, N = 14, so the midpoint is (4 + 14)/2 = 9 (I). The 4th to its right is 9 + 4 = 13, which is M.')
];

build(chapter, quiz);
