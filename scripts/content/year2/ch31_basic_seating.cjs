const { easy, medium, placement, build } = require('../lib.cjs');

// Seat positions are computed from the stated clockwise orders, not typed by hand.
// Persons face the centre, so the immediate LEFT is the next person clockwise and the immediate RIGHT is the next anticlockwise.
const at = (arr, i) => arr[((i % arr.length) + arr.length) % arr.length];
const left = (arr, p, k = 1) => at(arr, arr.indexOf(p) + k);
const right = (arr, p, k = 1) => at(arr, arr.indexOf(p) - k);
const opp = (arr, p) => at(arr, arr.indexOf(p) + arr.length / 2);
const between = (arr, a, b) => { let n = 0; for (let i = (arr.indexOf(a) + 1) % arr.length; arr[i] !== b; i = (i + 1) % arr.length) n++; return n; };
const names = a => ['Persons ' + a.join(', ') + ' sit around a circular table facing the centre, in this order clockwise: ' + a.join(', ') + '.'];
const opts = (c, pool) => pool.filter(x => x !== c).slice(0, 3);

const S6 = ['A', 'B', 'C', 'D', 'E', 'F'];
const S8 = ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];
const P6 = 'Persons A, B, C, D, E and F sit around a circular table facing the centre, in this order clockwise: A, B, C, D, E, F.\n\n';
const P8 = 'Persons K, L, M, N, O, P, Q and R sit around a circular table facing the centre, in this order clockwise: K, L, M, N, O, P, Q, R.\n\n';
const PX = 'Five persons A, B, C, D and E sit around a circular table facing the centre. A is second to the right of B. C is the immediate left of B. D is not adjacent to C.\n\n';
const PY = 'Six persons A to F sit around a circular table facing the centre. A sits opposite D. B is the immediate right of A. E sits opposite B. F is not adjacent to A.\n\n';
const ARR_Y = ['A', 'C', 'E', 'D', 'F', 'B'];
const ARR_X = ['A', 'D', 'B', 'C', 'E'];

const chapter = {
  id: 'y2-lr-basic-seating', year: 2, category: 'Advanced Logical Reasoning', num: 31, difficulty: 'Intermediate',
  title: 'Basic Seating Arrangement',
  tagline: 'Year 2 — Circular arrangements: left and right, opposite and neighbours',
  minutes: 55,
  overview: 'In a circular seating arrangement, a group of people sit around a table. You are given clues such as "A sits opposite D", "B is second to the right of C" or "E is not adjacent to F" and must place everyone and answer questions. The key to accuracy is knowing which way is left and right for a person who faces the centre or faces outward, and drawing a circle with numbered seats.',
  placement: 'Seating arrangement questions are commonly asked in company reasoning rounds, usually as a set of five questions based on one arrangement.',
  realWorld: 'Planning seats at a round table, scheduling duties in a rotation and setting up round-table meetings use the same reasoning.',
  objectives: [
    'Determine left and right for people facing the centre or outward',
    'Place people from direct and indirect clues',
    'Use "opposite", "adjacent" and "between" correctly',
    'Count persons between two seats',
    'Work through a puzzle systematically'
  ],
  prereq: ['Ordering and Sequencing', 'Direction Sense Basics'],
  refresher: 'In a circle of n seats, the person opposite a given seat is n/2 seats away (when n is even). Clockwise and anticlockwise are opposite directions.',
  defs: [
    'Facing the centre: the immediate left of a person is the next person clockwise; the immediate right is the next anticlockwise.',
    'Facing outward: left and right are swapped (left = anticlockwise).',
    'Opposite: the person n/2 seats away; exists only when the number of seats is even.',
    'Adjacent: sitting next to each other.',
    'Second to the right/left: two seats away in that direction.'
  ],
  intuition: 'The same circle looks different to people facing the centre and those facing outward. First decide the facing, then fix one person at a starting seat and place the others using the clues. With direct clues first (opposite, adjacent) and negative clues last.',
  mental: 'Draw a circle with n numbered seats. Mark clockwise with an arrow. Write each placed person in the seat; use "left = clockwise" for people facing the centre.',
  formulas: [
    ['Left and right (facing centre)', 'Left = next clockwise;  Right = next anticlockwise', 'Check by imagining yourself at the table.', 'Every direction clue.', 'Order A, B, C: left of B is C; right of B is A'],
    ['Opposite', 'Opposite of seat i = seat i + n/2', 'n even.', 'Opposite clues.', 'A opposite D in six seats'],
    ['Persons between', 'Count the seats strictly between two persons in the stated direction', 'Specify clockwise or the shorter way.', '"How many persons between?"', 'A and D: 2 between (B, C)'],
    ['Facing outward', 'Swap left and right', 'Left = anticlockwise.', 'Outward-facing tables.', 'Outward: left of K is R'],
    ['Placing order', 'Fix definite clues first; use negatives to eliminate', 'Direct → indirect → negative.', 'Puzzles.', 'Opposite and adjacent first']
  ],
  narrative: [
    'For people facing the centre, the person on your left is the next one clockwise. In the order A, B, C, D, E, F clockwise, the immediate left of B is C and the immediate right of B is A. The second to the left of E is A (E → F → A).',
    'In a circle of six, the person opposite A is three seats away, so D. The persons between A and D along the shorter way are B and C: two persons. Sitting between C and E is D.',
    'For a puzzle, place the definite clues first. "A sits opposite D" fixes two seats. "B is the immediate right of A" fixes B next to A on the anticlockwise side. "E sits opposite B" fixes E. The remaining people (C and F) are placed using the negative clue "F is not adjacent to A", giving the clockwise order A, C, E, D, F, B.',
    'For indirect clues such as "A is second to the right of B", place B first and count two seats anticlockwise to find A. Then add "C is the immediate left of B" (next clockwise from B). The negative clue "D is not adjacent to C" decides between the two remaining seats, giving A, D, B, C, E clockwise.',
    'If the persons face outward, swap left and right. In the order K, L, M, … clockwise, facing outward, the immediate left of M is L (anticlockwise), not N.'
  ],
  deep: [
    ['Odd numbers of seats', 'With an odd number of persons there is no exact opposite. Questions then use "second to the right of" and "between" instead.'],
    ['Checking the solution', 'After placing everyone, re-read every clue and verify it against the final arrangement. This catches left/right mistakes.']
  ],
  variations: [
    ['Complete order given', 'Direct questions.', 'A, B, C, D, E, F clockwise'],
    ['Opposite and adjacent', 'Place persons.', 'A opposite D'],
    ['Indirect clues', 'Second to the right.', 'A second to the right of B'],
    ['Negative clues', 'Not adjacent.', 'F not adjacent to A'],
    ['Outward-facing', 'Swap sides.', 'Facing outward']
  ],
  examples: [
    {
      title: 'Direct questions',
      q: 'Six persons A to F sit around a circular table facing the centre in this order clockwise: A, B, C, D, E, F. Who is opposite A, and who is the immediate left of B?',
      given: ['Clockwise: A, B, C, D, E, F'],
      concept: 'Opposite = 3 seats away; left = next clockwise.',
      steps: [['Opposite', '3 seats from A: D.'], ['Immediate left of B', 'Next clockwise is C.']],
      ans: 'D is opposite A; C is the immediate left of B', why: 'Facing the centre, left is clockwise.', trap: 'Swapping left and right.'
    },
    {
      title: 'Building the arrangement',
      q: 'Five persons A–E sit around a circular table facing the centre. A is second to the right of B. C is the immediate left of B. D is not adjacent to C. Find the clockwise order starting from A.',
      given: ['A is 2nd to the right of B', 'C is immediate left of B', 'D is not adjacent to C'],
      concept: 'Right = anticlockwise, left = clockwise.',
      steps: [['Place B and A', 'Going anticlockwise from B: one seat, then A. So clockwise: A, ?, B.'], ['Place C', 'Immediate left of B is the next clockwise: A, ?, B, C.'], ['Fill the rest', 'The seat after C and the seat between A and B remain for D and E. D is not adjacent to C, so D takes the seat between A and B and E sits next to C.']],
      ans: 'A, D, B, C, E', why: 'Check all clues against the final order.', trap: 'Mixing right and left.'
    },
    {
      title: 'Facing outward',
      q: 'Eight persons K to R sit around a circular table facing outward in this order clockwise: K, L, M, N, O, P, Q, R. Who is the immediate left of M?',
      given: ['Facing outward'],
      concept: 'Left and right swap.',
      steps: [['Facing outward', 'Left is the next anticlockwise person.'], ['M\'s anticlockwise neighbour', 'L.']],
      ans: 'L', why: 'Facing the centre the answer would be N.', trap: 'Using the facing-centre rule.'
    }
  ],
  shortcut: {
    title: 'Clockwise = left',
    trad: 'Re-imagine each person\'s view every time.',
    fast: 'Facing centre: left = clockwise, right = anticlockwise. Facing outward: swap. Place direct clues first and use negatives to resolve ties.',
    rules: ['Check the facing direction.', 'Opposite = n/2 away.', 'Direct, indirect, negative order.', 'Verify every clue at the end.']
  },
  mistakes: [
    ['Swapping left and right', 'Ignoring facing direction.', 'Left = clockwise for centre-facing.'],
    ['Counting from the wrong person', 'Starting at the wrong seat.', 'Start from the stated person.'],
    ['Mixing the direction of "between"', 'Counting the longer way.', 'Specify the way.'],
    ['Not verifying', 'Leaving a clue unchecked.', 'Re-read every clue.']
  ],
  tips: { sec: 120, elim: 'Use the first two questions of a set to confirm the arrangement.', advice: 'Always draw a circle.', insight: 'Complete the arrangement before answering.' },
  revision: ['Left = clockwise (facing centre).', 'Opposite n/2.', 'Direct clues first.', 'Swap for outward.', 'Verify.'],
  quickFormulas: ['Opposite = i + n/2'],
  takeaways: ['Facing matters.', 'Draw the circle.', 'Order of clues.', 'Verify.'],
  selfCheck: ['Can I identify left and right for centre-facing?', 'Can I find opposite in six seats?', 'Can I solve a five-clue puzzle?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Seating Arrangement topic area; examples are original.']]
};

const w = (c, pool) => opts(c, pool);
const quiz = [
  easy(P6 + 'Who sits opposite A?', opp(S6, 'A'), w(opp(S6, 'A'), S6.filter(x => x !== 'A')), 'In six seats, the opposite is three seats away: A → B → C → D. So D.'),
  easy(P6 + 'Who sits at the immediate left of B?', left(S6, 'B'), w(left(S6, 'B'), ['A', 'D', 'E', 'F']), 'Facing the centre, left is the next person clockwise: C.'),
  easy(P6 + 'Who sits at the immediate right of B?', right(S6, 'B'), w(right(S6, 'B'), ['C', 'D', 'E', 'F']), 'Right is the next person anticlockwise: A.'),
  easy(P6 + 'Who sits second to the left of E?', left(S6, 'E', 2), w(left(S6, 'E', 2), ['F', 'C', 'D', 'B']), 'Going clockwise from E: F (1st), A (2nd).'),
  easy(P6 + 'How many persons sit between A and D (clockwise from A)?', between(S6, 'A', 'D'), [1, 3, 4], 'Between A and D going clockwise are B and C: 2 persons.'),
  easy(P6 + 'Who sits between C and E?', 'D', ['B', 'F', 'A'], 'D sits between C and E.'),

  medium(P8 + 'Who sits opposite K?', opp(S8, 'K'), opts(opp(S8, 'K'), ['L', 'M', 'N', 'P', 'Q']), 'In eight seats, the opposite is four seats away: K → L → M → N → O. So O.'),
  medium(P8 + 'Who is third to the right of N?', right(S8, 'N', 3), opts(right(S8, 'N', 3), ['L', 'M', 'O', 'P']), 'Right is anticlockwise: N → M → L → K. So K.'),
  medium(P8 + 'Who is second to the left of Q?', left(S8, 'Q', 2), opts(left(S8, 'Q', 2), ['L', 'M', 'R', 'P']), 'Left is clockwise: Q → R → K. So K.'),
  medium(P8 + 'Who sits at the immediate right of the person opposite L?', right(S8, opp(S8, 'L')), opts(right(S8, opp(S8, 'L')), ['K', 'M', 'N', 'Q']), 'Opposite L is P. The immediate right of P (anticlockwise) is O.'),
  medium(P8 + 'How many persons sit between M and Q (clockwise from M)?', between(S8, 'M', 'Q'), [2, 4, 5], 'Between M and Q clockwise: N, O, P = 3 persons.'),
  medium(P8.replace('facing the centre', 'facing outward') + 'Who sits at the immediate left of M?', 'L', ['N', 'K', 'O'], 'Facing outward, left is anticlockwise. M\'s anticlockwise neighbour is L.'),
  medium(P8 + 'Who sits at the immediate left of R?', left(S8, 'R'), opts(left(S8, 'R'), ['L', 'M', 'Q', 'P']), 'Left is clockwise. After R comes K.'),
  medium(P8 + 'Who sits between P and R?', 'Q', ['O', 'K', 'N'], 'Q sits between P and R.'),

  placement(PX + 'Who sits at the immediate right of A?', right(ARR_X, 'A'), opts(right(ARR_X, 'A'), ['B', 'C', 'D']), 'The clockwise order is A, D, B, C, E. The immediate right of A (anticlockwise) is E.'),
  placement(PX + 'Who sits between A and B?', 'D', ['C', 'E', 'Nobody'], 'In the order A, D, B, C, E, D sits between A and B.'),
  placement(PY + 'Who sits at the immediate left of E?', left(ARR_Y, 'E'), opts(left(ARR_Y, 'E'), ['A', 'B', 'F', 'C']), 'The clockwise order is A, C, E, D, F, B. The immediate left of E (clockwise) is D.'),
  placement(PY + 'Between which two persons does F sit?', 'D and B', ['A and C', 'E and D', 'C and B'], 'In the order A, C, E, D, F, B, F is between D and B.'),
  placement(PY + 'Who sits opposite C?', opp(ARR_Y, 'C'), opts(opp(ARR_Y, 'C'), ['A', 'B', 'D', 'E']), 'Opposite C (three seats away) is F.'),
  placement(PY + 'Who sits at the immediate right of A?', right(ARR_Y, 'A'), opts(right(ARR_Y, 'A'), ['C', 'D', 'E', 'F']), 'B was stated to sit at the immediate right of A.')
];
build(chapter, quiz);
