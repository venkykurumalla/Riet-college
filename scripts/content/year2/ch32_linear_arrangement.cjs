const { easy, medium, placement, build } = require('../lib.cjs');

// Positions are computed from the stated orders, not typed by hand.
// Persons facing north have their left on the west side. Orders below are listed from left to right.
const ord = n => ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'][n - 1] || n + 'th';
const R7 = ['P', 'Q', 'R', 'S', 'T', 'U', 'V'];
const R8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const L5 = ['C', 'E', 'A', 'D', 'B'];
const ROW7 = 'Seven persons P, Q, R, S, T, U and V sit in a row facing north. From left to right the order is P, Q, R, S, T, U, V.\n\n';
const ROW8 = 'Eight persons A, B, C, D, E, F, G and H sit in a row facing north. From left to right the order is A, B, C, D, E, F, G, H.\n\n';
const TWO = 'Six persons sit in two rows facing each other. Row 1 (facing south) from its own left to right: A, B, C. Row 2 (facing north) from its own left to right: D, E, F. A faces F, B faces E and C faces D.\n\n';
const ROW5 = 'Five persons A, B, C, D and E sit in a row facing north. A sits in the middle. D sits at the immediate right of A. B sits at the extreme right. E sits at the immediate right of C.\n\n';

const chapter = {
  id: 'y2-lr-linear-arrangement', year: 2, category: 'Advanced Logical Reasoning', num: 32, difficulty: 'Intermediate',
  title: 'Linear Arrangement',
  tagline: 'Year 2 — Seating in one or two rows, left and right, position counts',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/verbal-reasoning/seating-arrangement/',
  overview: 'In a linear arrangement people sit or stand in one row (all facing the same way) or in two rows facing each other. You are given clues such as "A sits third to the right of B" or "C faces D" and must work out the order. The key skills are knowing left and right for people facing north or south, counting positions from either end, and placing definite clues before indefinite ones.',
  placement: 'Linear arrangement questions are commonly asked in company reasoning rounds, usually as a puzzle with a set of questions.',
  realWorld: 'Queues, classroom benches, stage photographs and parking rows are linear arrangements.',
  objectives: [
    'Decide left and right for persons facing north or south',
    'Place persons using definite and relative clues',
    'Count positions from either end and between persons',
    'Handle two rows facing each other',
    'Handle interchange of positions'
  ],
  prereq: ['Basic Seating Arrangement', 'Ranking and Position Basics'],
  refresher: 'For people facing north, left is west and right is east. For people facing south, left is east and right is west. Position from left + position from right = total + 1.',
  defs: [
    'Row: a straight line of people; the ends are the extreme left and extreme right.',
    'Facing north/south: the direction people look; this decides what "left" and "right" mean.',
    'Two-row arrangement: two parallel rows facing each other; each person faces exactly one person of the other row.',
    'Immediate right/left: the adjacent person on that side.',
    'Interchange: two persons swap their seats.'
  ],
  intuition: 'The row is a numbered line of seats. "Third to the right of Q" means three seats in the right direction from Q. With a number line, every clue becomes arithmetic on seat numbers, and the left/right orientation is the only place where mistakes happen.',
  mental: 'Draw n boxes in a row, mark "L → R" for the viewpoint of the sitters, and write each person into a box as soon as the clue fixes them.',
  formulas: [
    ['Positions from the two ends', 'Position from right = Total − position from left + 1', 'Counts include the person.', 'Position questions.', '8 persons: 4th from the left = 5th from the right'],
    ['Third to the right of X', 'Seat of X + 3 (for people facing north, in the left-to-right order)', 'Add for right, subtract for left.', 'Relative clues.', 'Q + 3 → T'],
    ['Persons between', '|seat difference| − 1', 'Excludes both persons.', 'Between questions.', 'P and T: 4 − 1 = 3'],
    ['Two rows facing', 'The person at seat i from the left of row 1 faces the person at seat i from the right of row 2', 'Opposite ends.', 'Facing pairs.', 'A faces F'],
    ['Interchange', 'After swapping, each takes the other\'s old seat', 'Compute the new positions.', 'Swap questions.', 'B and G interchange']
  ],
  narrative: [
    'Number the seats 1 to n from the left. For people facing north, "to the right of" means a higher seat number. In the row P, Q, R, S, T, U, V, the third to the right of Q is T, the middle person is S, and three persons (Q, R and S) sit between P and T.',
    'Position from the other end: in a row of 8, the person fourth from the left is fifth from the right (8 − 4 + 1). The persons third from the left and second from the right (seats 3 and 7) have three persons between them (seats 4, 5, 6).',
    'To solve a puzzle, place definite clues first. "A sits in the middle" fixes seat 3 of 5. "D sits at the immediate right of A" fixes seat 4. "B sits at the extreme right" fixes seat 5. The clue "E sits at the immediate right of C" must then put C in seat 1 and E in seat 2, giving C, E, A, D, B.',
    'For two rows facing each other, the persons at opposite ends face each other when each row is listed from its own left to right: A faces F, B faces E and C faces D. To find the person to the immediate right of the one who faces B, locate E and move one seat right in row 2: F.',
    'For an interchange, compute the new seat of each person, then answer the question. If B (seat 2) and G (seat 7) swap, B is in seat 7 and the immediate right of that seat is H.'
  ],
  deep: [
    ['Facing south', 'If people in a row face south, their left is east. Redraw the row from their viewpoint or flip left and right.'],
    ['Direct clues first', 'Extreme positions, "middle" and "opposite" clues fix a seat immediately. Use "not adjacent" clues last.']
  ],
  variations: [
    ['One row, full order given', 'Direct questions.', 'P, Q, R, S, T, U, V'],
    ['Interchange', 'Swap.', 'B and G swap'],
    ['Puzzle', 'Place from clues.', 'A in the middle'],
    ['Two rows', 'Faces.', 'A faces F'],
    ['Counting', 'From the ends.', '12th from the left in 40']
  ],
  examples: [
    {
      title: 'Relative position',
      q: 'Seven persons P, Q, R, S, T, U, V sit in a row facing north in that order from left to right. Who sits third to the right of Q?',
      given: ['P, Q, R, S, T, U, V'],
      concept: 'Add seats for right.',
      steps: [['Seat of Q', '2.'], ['Add 3', 'Seat 5.'], ['Person', 'T.']],
      ans: 'T', why: 'Right means a higher number.', trap: 'Counting from the wrong direction.'
    },
    {
      title: 'Puzzle',
      q: 'Five persons A–E sit in a row facing north. A sits in the middle. D sits at the immediate right of A. B sits at the extreme right. E sits at the immediate right of C. Find the order from left to right.',
      given: ['Four clues'],
      concept: 'Place definite clues first.',
      steps: [['Definite clues', 'A in seat 3; D in seat 4; B in seat 5.'], ['Remaining', 'C and E for seats 1 and 2.'], ['E right of C', 'C in 1, E in 2.']],
      ans: 'C, E, A, D, B', why: 'Check all four clues.', trap: 'Placing E before C.'
    },
    {
      title: 'Two rows',
      q: 'Row 1 (facing south) from its own left to right: A, B, C. Row 2 (facing north) from its own left to right: D, E, F. A faces F, B faces E, C faces D. Who sits at the immediate right of the person who faces B?',
      given: ['A faces F, B faces E, C faces D'],
      concept: 'Find the facing partner, then move right.',
      steps: [['Facing B', 'E.'], ['Right of E in row 2', 'F.']],
      ans: 'F', why: 'Row 2 is read from its own left to right.', trap: 'Using row 1\'s orientation.'
    }
  ],
  shortcut: {
    title: 'Number the seats',
    trad: 'Reason in words each time.',
    fast: 'Number seats 1 to n, place definite clues, convert relative clues to arithmetic, and check every clue at the end.',
    rules: ['Right = higher number (facing north).', 'Position from right = total − position from left + 1.', 'Definite clues first.', 'For two rows, use own left to right.']
  },
  mistakes: [
    ['Mixing left and right', 'Ignoring the facing direction.', 'Decide north or south.'],
    ['Off-by-one counts', 'Counting the starting person.', 'Start from the next seat.'],
    ['Wrong facing pairs', 'Pairing the wrong ends.', 'Use opposite ends.'],
    ['Not verifying', 'Leaving a clue unchecked.', 'Re-read the clues.']
  ],
  tips: { sec: 90, elim: 'Use the first definite clues to eliminate options.', advice: 'Draw boxes.', insight: 'A clean diagram answers all questions.' },
  revision: ['Number the seats.', 'Right = higher number.', 'Position from the other end.', 'Two rows facing.', 'Verify.'],
  quickFormulas: ['p_right = N − p_left + 1'],
  takeaways: ['Seat numbers.', 'Facing direction.', 'Definite first.', 'Verify.'],
  selfCheck: ['Can I find the 3rd to the right?', 'Can I solve a five-person puzzle?', 'Can I handle two rows?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Seating Arrangement topic area; examples are original.']]
};

const swapped = (() => { const a = [...R8]; const i = a.indexOf('B'), j = a.indexOf('G'); [a[i], a[j]] = [a[j], a[i]]; return a; })();
const quiz = [
  easy(ROW7 + 'Who sits at the extreme right?', R7[6], ['P', 'U', 'S'], 'The last person from the left is V.'),
  easy(ROW7 + 'Who is third from the left?', R7[2], ['Q', 'S', 'P'], 'The 3rd from the left is R.'),
  easy(ROW7 + 'Who sits third to the right of Q?', R7[1 + 3], ['S', 'U', 'R'], 'Q is in seat 2. Three seats to the right is seat 5: T.'),
  easy(ROW7 + 'How many persons sit between P and T?', 3, [2, 4, 5], 'Between P (seat 1) and T (seat 5) are Q, R, S: 3 persons.'),
  easy(ROW7 + 'Who sits exactly in the middle?', R7[3], ['R', 'T', 'Q'], 'The middle of 7 is the 4th seat: S.'),
  easy(ROW7 + 'What is the position of U from the right end?', '2nd', ['1st', '3rd', '4th'], 'V is 1st from the right, U is 2nd.'),

  medium(ROW8 + 'Who sits fourth to the left of H?', R8[7 - 4], ['E', 'C', 'B'], 'H is in seat 8. Four seats to the left is seat 4: D.'),
  medium(ROW8 + 'Who sits exactly in the middle of C and G?', R8[4], ['D', 'F', 'B'], 'C is seat 3 and G is seat 7. The middle is seat 5: E.'),
  medium(ROW8 + 'If B and G interchange their positions, who sits at the immediate right of B (in its new position)?', swapped[swapped.indexOf('B') + 1], ['A', 'F', 'G'], 'After the swap B is in seat 7. The immediate right (seat 8) is H.'),
  medium(ROW8 + 'How many persons sit between the person third from the left and the person second from the right?', 3, [2, 4, 5], 'Third from the left is C (seat 3); second from the right is G (seat 7). Between them: D, E, F = 3.'),
  medium(ROW8 + 'What is the position of F from the right end?', '3rd', ['2nd', '4th', '5th'], 'F is in seat 6. 8 − 6 + 1 = 3rd from the right.'),
  medium(TWO + 'Who sits at the immediate right of the person who faces B?', 'F', ['D', 'E', 'A'], 'B faces E. In row 2, the immediate right of E is F.'),
  medium(TWO + 'Who sits opposite C?', 'D', ['E', 'F', 'B'], 'C faces D (given).'),
  medium(TWO + 'Who sits at the immediate left of the person who faces A?', 'E', ['D', 'C', 'F'], 'A faces F. The immediate left of F in row 2 is E.'),

  placement(ROW5 + 'Who sits at the extreme left?', L5[0], ['E', 'A', 'D'], 'The order is C, E, A, D, B. The extreme left is C.'),
  placement(ROW5 + 'Who sits between E and D?', L5[2], ['C', 'B', 'Nobody'], 'In the order C, E, A, D, B, A sits between E and D.'),
  placement(ROW5 + 'How many persons sit to the left of D?', 3, [2, 4, 1], 'C, E and A sit to the left of D: 3 persons.'),
  placement('Forty students stand in a row facing north. Rahul is 12th from the left and Suresh is 15th from the right. The number of students between them is', 13, [12, 14, 15], 'Suresh is 40 − 15 + 1 = 26th from the left. Between them: 26 − 12 − 1 = 13.'),
  placement('In a row of 25 persons, A is 7th from the left and B is 9th from the right. If they interchange, A becomes 17th from the left. A\'s new position from the right end is', '9th', ['8th', '10th', '17th'], 'B was 25 − 9 + 1 = 17th from the left. After the swap A takes that seat: 25 − 17 + 1 = 9th from the right.'),
  placement('In a row of 30 children, Anil is 9th from the left. Bina is 12th from the right. The number of children between Anil and Bina is', 9, [8, 10, 11], 'Bina is 30 − 12 + 1 = 19th from the left. Between them: 19 − 9 − 1 = 9.')
];
build(chapter, quiz);
