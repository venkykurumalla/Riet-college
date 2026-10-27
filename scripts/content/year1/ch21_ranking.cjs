const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-ranking-basics', year: 1, category: 'Logical Reasoning', num: 21,
  title: 'Ranking and Position Basics',
  tagline: 'Year 1 Foundation — Positions from the left, right, top and bottom of a row',
  minutes: 40,
  morePractice: 'https://www.indiabix.com/verbal-reasoning/questions-and-answers/',
  overview: 'Ranking and position questions tell you where someone stands in a row, queue or class list and ask for another position or the total number of people. The main idea is that a position from one end and a position from the other end together count everyone once, plus the person themself counted twice. This gives the key formula: Total = (position from one end) + (position from the other end) − 1.',
  placement: 'Ranking questions are commonly asked in the reasoning section of company aptitude rounds. They are quick once you know the single formula and the handling of "between" and "exchange" problems.',
  realWorld: 'Class ranks, queues at a counter, race finishes and sports leaderboards all use positions from the top and from the bottom.',
  objectives: [
    'Convert a position from one end into a position from the other end',
    'Find the total number of people from two positions of the same person',
    'Count the people between two positions',
    'Handle position-exchange questions',
    'Order people by comparisons such as taller, older or heavier'
  ],
  prereq: ['Basic arithmetic', 'Number Series'],
  refresher: 'A person who is 5th from the left has 4 people to their left. In a row of n people, someone 3rd from the left has n − 3 people to their right.',
  defs: [
    'Position from the left (or top): the number obtained by counting from the left end (or top), including the person.',
    'Position from the right (or bottom): the number obtained by counting from the other end, including the person.',
    'Total number of people: the length of the row.',
    'Between: the number of people strictly between two named people, not counting either of them.',
    'Exchange of positions: two people swap places; the new position of each is the old position of the other.'
  ],
  intuition: 'If you count someone from the left and then from the right, everyone except that person is counted exactly once and the person is counted twice. So the two counts add up to one more than the total. That is why the total is (left + right − 1).',
  mental: 'Imagine a row of boxes. Mark A in the box that is 5th from the left and 8th from the right. There are 4 boxes before A and 7 boxes after A, plus A itself: 4 + 1 + 7 = 12 boxes in total, which equals 5 + 8 − 1.',
  formulas: [
    ['Total from two positions', 'Total = L + R − 1', 'L and R are the positions of the same person from the two ends.', 'When the total is unknown.', '15th from front and 20th from back → 15 + 20 − 1 = 34'],
    ['Position from the other end', 'Position from right = Total − Position from left + 1', 'Rearranged form of the total formula.', 'When the total is given.', '7th from top in 40 → 40 − 7 + 1 = 34th from bottom'],
    ['People between', 'Between = (larger position − smaller position) − 1, using positions from the same end', 'Both positions must be from the same end.', '"How many are there between A and B?"', 'Between 6th and 15th → 15 − 6 − 1 = 8'],
    ['Exchange problems', 'New position of A = old position of B (from the same end)', 'Use this to find the total.', '"After they exchange, A is 15th from left."', 'A takes B\'s old place, which is 7th from right → total = 15 + 7 − 1 = 21'],
    ['Total from two different people', 'Total = (position of first from front) + (people between) + (position of second from back)', 'Count the people in three blocks.', 'Problems that give two people and the gap.', '9 + 11 + 6 = 26']
  ],
  narrative: [
    'The first skill is switching ends. If the total is 40 and someone is 7th from the top, the number of people below them is 33, so their position from the bottom is 34. Written as a formula: from the bottom = total − from the top + 1.',
    'When the same person is described from both ends, add the two positions and subtract one. A person who is 15th from the front and 20th from the back stands in a queue of 15 + 20 − 1 = 34.',
    'For "between" problems, convert both positions to the same end first. In a row of 40, A is 14th from the left and B is 19th from the right, so B is 40 − 19 + 1 = 22nd from the left. The people between them are 22 − 14 − 1 = 7.',
    'In exchange problems, the new position of the first person equals the old position of the second. If A, initially 10th from the left, becomes 15th from the left after exchanging with B who is 7th from the right, then 15th from the left is B\'s old place, so total = 15 + 7 − 1 = 21.',
    'For comparison-based ordering (A is taller than B, B is taller than C), write the people in a line from tallest to shortest and place new facts into the line one by one.'
  ],
  deep: [
    ['Rank "above" and "below"', 'If someone is 10th from the top, there are 9 people above them. "Ranks below" means position numbers get larger: 5 ranks below the 7th person is the 12th person.'],
    ['Why the "−1" appears', 'Counting from both ends counts the target person twice. Subtracting 1 removes the double count. If you forget the −1 your answer is always one too large.']
  ],
  variations: [
    ['Find the other position', 'Total and one position given.', 'Total 40, 7th from the top.'],
    ['Find the total', 'Both positions of the same person given.', '15th from front, 20th from back.'],
    ['Between two people', 'Count people strictly between.', '14th from left and 19th from right in a row of 40.'],
    ['Exchange of places', 'Positions after swapping.', 'A becomes 15th from the left after exchanging with B.'],
    ['Order by comparison', 'Taller, older, heavier.', 'A is taller than B; B is taller than C.']
  ],
  examples: [
    {
      title: 'Finding the total number of people',
      q: 'Ravi is 15th from the front and 20th from the back in a queue. How many people are in the queue?',
      given: ['Position from front = 15', 'Position from back = 20'],
      concept: 'Total = L + R − 1.',
      steps: [
        ['Add the two positions', '15 + 20 = 35.'],
        ['Subtract the double count', '35 − 1 = 34.']
      ],
      ans: '34',
      why: 'Ravi is counted in both numbers, so we subtract one.',
      trap: 'Adding the two positions and giving 35.'
    },
    {
      title: 'Counting people between',
      q: 'In a row of 40 students, A is 14th from the left and B is 19th from the right. How many students are between A and B?',
      given: ['Total = 40', 'A = 14th from left', 'B = 19th from right'],
      concept: 'Convert B to a position from the left, then subtract.',
      steps: [
        ['B from the left', '40 − 19 + 1 = 22nd from the left.'],
        ['People between', '22 − 14 − 1 = 7.']
      ],
      ans: '7',
      why: 'The students in positions 15 to 21 from the left are between A and B.',
      trap: 'Not converting B\'s position to the same end as A, which leads to the wrong subtraction.'
    },
    {
      title: 'Exchange of places',
      q: 'A is 10th from the left and B is 7th from the right in a row. When they exchange places, A becomes 15th from the left. How many people are in the row?',
      given: ['A: 10th from left, B: 7th from right', 'After exchange, A is 15th from left'],
      concept: 'A takes B\'s old place.',
      steps: [
        ['Locate B\'s old position', 'B\'s old place is where A now stands: 15th from the left.'],
        ['Use the total formula', 'The same place is 7th from the right, so total = 15 + 7 − 1 = 21.']
      ],
      ans: '21',
      why: 'The new position of A equals the old position of B.',
      trap: 'Using A\'s old position (10th from left) to calculate the total.'
    }
  ],
  shortcut: {
    title: 'The "L + R − 1" rule',
    trad: 'Draw the whole row and count boxes.',
    fast: 'Use the formula L + R − 1 for total, Total − P + 1 to flip ends, and (difference of positions) − 1 for between. Never draw more than a short strip with only the key people marked.',
    rules: [
      'Total = L + R − 1.',
      'Switching ends: new position = total − old position + 1.',
      'Between = difference of positions − 1 (both from the same end).',
      'In exchange problems, the new position of one is the old position of the other.'
    ]
  },
  mistakes: [
    ['Forgetting the −1', 'Adding positions to get the total.', 'Say aloud "the person is counted twice" and subtract one.'],
    ['Mixing ends in a "between" count', 'Subtracting a left position from a right position.', 'Convert both to the same end first.'],
    ['Counting the end people in "between"', 'Using difference without subtracting 1.', 'Between excludes both named people.'],
    ['Wrong direction in "ranks below"', 'Subtracting ranks instead of adding.', 'Lower rank means a larger number.']
  ],
  tips: {
    sec: 45,
    elim: 'Check each option against the formula; the total must be consistent with both positions.',
    advice: 'These are quick questions; do them early and carefully, because the traps are small.',
    insight: 'A short sketch of the row with positions marked prevents almost all errors.'
  },
  revision: [
    'Total = L + R − 1.',
    'Position from the other end = total − position + 1.',
    'Between = difference − 1.',
    'Exchange: new position of A = old position of B.',
    'Lower rank means a larger number.'
  ],
  quickFormulas: ['Total = L + R − 1', 'R = Total − L + 1', 'Between = (p₂ − p₁) − 1'],
  takeaways: [
    'Both positions count the person, so subtract one.',
    'Convert to a common end before counting between.',
    'Use the exchange idea for total problems.',
    'Draw a short strip when confused.'
  ],
  selfCheck: [
    'Can I find the position from the bottom when the position from the top is 7 in a class of 40?',
    'Can I find the total if someone is 9th from the left and 12th from the right?',
    'Can I count the people between the 6th and the 15th person?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Ranking and Order of Position topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('In a class of 40 students, Meena is 7th from the top. Her rank from the bottom is', 34, [33, 35, 32], 'Position from the bottom = 40 − 7 + 1 = 34.'),
  easy('Aman is 12th from the top and 18th from the bottom in a class. The number of students in the class is', 29, [30, 31, 28], 'Total = 12 + 18 − 1 = 29.'),
  easy('In a row of 25 boys, Rohan is 10th from the left. His position from the right is', 16, [15, 14, 17], 'Position from the right = 25 − 10 + 1 = 16.'),
  easy('A person is 11th from the front and 14th from the back in a queue. The number of people in the queue is', 24, [25, 26, 23], 'Total = 11 + 14 − 1 = 24.'),
  easy('How many people are there between the 6th and the 15th person in a row (both counted from the left)?', 8, [9, 10, 7], 'Between = 15 − 6 − 1 = 8.'),
  easy('In a row of 56 children, Gita is 25th from the left. Her position from the right is', 32, [31, 30, 33], 'Position from the right = 56 − 25 + 1 = 32.'),

  medium('In a row of 40 students, A is 14th from the left and B is 19th from the right. How many students are between them?', 7, [6, 8, 5], 'B is 40 − 19 + 1 = 22nd from the left. Between = 22 − 14 − 1 = 7.'),
  medium('A is 10th from the left and B is 7th from the right in a row. When they exchange places, A becomes 15th from the left. The number of people in the row is', 21, [22, 23, 20], 'A now stands in B\'s old place, which is 15th from the left and 7th from the right. Total = 15 + 7 − 1 = 21.'),
  medium('In a class of 45, Rahul ranks 12th from the top. His rank from the bottom is', 34, [33, 35, 32], 'Rank from the bottom = 45 − 12 + 1 = 34.'),
  medium('In a row of 30 boys, A is 8th from the left and B is 8th from the right. How many boys are between A and B?', 14, [13, 15, 16], 'B is 30 − 8 + 1 = 23rd from the left. Between = 23 − 8 − 1 = 14.'),
  medium('In a class of 35, Kiran is 7th from the top and Manoj is 5 ranks below Kiran. Manoj\'s rank from the bottom is', 24, [23, 25, 22], 'Manoj\'s rank from the top = 7 + 5 = 12. From the bottom: 35 − 12 + 1 = 24.'),
  medium('Arun is taller than Bala, Bala is taller than Chitra and Chitra is taller than Deepak. Who is the second tallest?', 'Bala', ['Arun', 'Chitra', 'Deepak'], 'The order from tallest is Arun, Bala, Chitra, Deepak, so Bala is the second tallest.'),
  medium('In a row of 31 trees, the position of the middle tree from the left is', 16, [15, 17, 14], 'There are 15 trees on each side of the middle tree, so its position is 15 + 1 = 16.'),
  medium('In a queue, X is 9th from the front and Y is 6th from the back. There are 11 people between them. The number of people in the queue is', 26, [25, 27, 28], 'Total = 9 + 11 + 6 = 26 (X and Y are counted within their own positions).'),

  placement('In a class, Anu is 10th from the top and 31st from the bottom. Priya is 8 ranks below Anu. Priya\'s rank from the bottom is', 23, [22, 24, 21], 'Class size = 10 + 31 − 1 = 40. Priya\'s rank from the top = 10 + 8 = 18. From the bottom: 40 − 18 + 1 = 23.'),
  placement('A is 11th from the left and B is 16th from the right in a row. When they exchange places, A becomes 23rd from the left. The number of children in the row is', 38, [37, 39, 40], 'A now stands in B\'s old place, 23rd from the left and 16th from the right. Total = 23 + 16 − 1 = 38.'),
  placement('In a row of 25 persons, A is 6th from the left and B is 9th from the right. The number of persons between them is', 10, [9, 11, 12], 'B is 25 − 9 + 1 = 17th from the left. Between = 17 − 6 − 1 = 10.'),
  placement('A student ranks 15th in a class of 50. After a retest he moves up 7 places. His new rank from the bottom is', 43, [42, 44, 41], 'New rank from the top = 15 − 7 = 8. From the bottom = 50 − 8 + 1 = 43.'),
  placement('In a queue of 40 people, Tom is 9th from the front and Jerry is 12th from the back (Jerry stands behind Tom). The number of people between them is', 19, [18, 20, 21], 'Jerry\'s position from the front = 40 − 12 + 1 = 29. Between = 29 − 9 − 1 = 19.'),
  placement('Among five friends P, Q, R, S, T: P is older than Q, R is older than P, S is younger than Q, and T is older than R. Who is the youngest?', 'S', ['Q', 'P', 'T'], 'The order from oldest is T, R, P, Q, S. So S is the youngest.')
];

build(chapter, quiz);
