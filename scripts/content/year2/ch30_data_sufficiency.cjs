const { easy, medium, placement, build } = require('../lib.cjs');

const O = ['Statement I alone is sufficient', 'Statement II alone is sufficient', 'Both statements together are needed', 'Even both together are not sufficient'];
const mk = (d, q, s1, s2, i, expl) => d('Question: ' + q + '\nI. ' + s1 + '\nII. ' + s2 + '\nWhich of the following is correct?', O[i], O.filter((_, k) => k !== i), expl);

const chapter = {
  id: 'y2-lr-data-sufficiency-intro', year: 2, category: 'Advanced Logical Reasoning', num: 30, difficulty: 'Intermediate',
  title: 'Introduction to Data Sufficiency',
  tagline: 'Year 2 — Deciding whether the given statements are enough to answer a question',
  minutes: 50,
  overview: 'A data sufficiency question asks a question and gives two statements. You do not have to find the answer; you only decide whether the information in the statements is enough to find a single definite answer. The possible verdicts are: statement I alone is sufficient, statement II alone is sufficient, both together are needed, each alone is sufficient, or even both together are not sufficient.',
  placement: 'Data sufficiency questions are commonly asked in company reasoning rounds. They test judgment about information rather than calculation, so they are quick when approached systematically.',
  realWorld: 'Deciding whether you have enough information to make a decision, such as quoting a project or diagnosing a fault, uses the same judgment.',
  objectives: [
    'Decide whether a statement alone gives a unique answer',
    'Combine statements only when each alone is insufficient',
    'Recognise when the statements are consistent but still not enough',
    'Use the standard order of evaluation',
    'Avoid solving the problem fully when it is not needed'
  ],
  prereq: ['Linear Equations', 'Statements and Conclusions'],
  refresher: 'A unique answer is needed: if a statement gives two possible values (for example, x² = 9), it is insufficient unless extra information fixes the value.',
  defs: [
    'Sufficient: the information leads to exactly one definite answer.',
    'Insufficient: the information leaves two or more possible answers (or none).',
    'Together: using both statements at the same time.',
    'Yes/no questions: the data is sufficient if it always gives "yes" or always gives "no"; if it can give both, it is insufficient.',
    'Consistency: the statements never contradict each other in a well-posed question.'
  ],
  intuition: 'The question is not "What is the answer?" but "Can I find the answer from this?" A statement is sufficient if, once you know it, only one answer is possible. If a different situation consistent with the statement gives a different answer, it is not sufficient.',
  mental: 'Take each statement in turn. Try to imagine two different situations that both satisfy the statement but give different answers to the question. If you can, it is insufficient. Then combine and repeat.',
  formulas: [
    ['Standard order', 'Test I alone → test II alone → test both together', 'Stop when a statement is sufficient.', 'Every question.', 'Step by step'],
    ['Unique-answer rule', 'One definite value (or a definite yes/no)', 'Two values = insufficient.', 'Equations, comparisons.', 'x² = 9 gives ±3 (not unique)'],
    ['Counting unknowns', 'n unknowns need n independent equations', 'Rough check for linear problems.', 'Algebra questions.', 'x + y = 10 alone is not enough'],
    ['Combining statements', 'Use both if each alone fails', 'The pair may fix the value.', 'C verdict.', 'x + y = 10 and x − y = 2'],
    ['Other possibilities', 'If a missing category could exist, the data is insufficient', 'E.g. other colours of marbles.', 'Totals.', '12 red, red = 3 × blue → total unknown']
  ],
  narrative: [
    'Work in a fixed order. First decide whether statement I alone gives a unique answer. Then decide the same for statement II. Only if neither alone is enough, combine them. This order prevents the common error of using both statements when one suffices.',
    'A unique answer is required. "What is the value of x? I. 2x = 10" has the unique answer 5, so I alone is sufficient. If a statement leaves more than one value, such as x² = 9, it is insufficient alone.',
    'Many questions need two items of information. To find a car\'s speed you need both the distance and the time. Neither alone is enough, but both together are. Similarly, to find Ravi\'s age from "he is 5 years older than Sita" you also need Sita\'s age.',
    'Yes/no questions: "Is the number even? I. It is divisible by 4." Every multiple of 4 is even, so the answer is always yes, which is sufficient. If a statement leaves both yes and no possible, it is insufficient.',
    'Beware of hidden possibilities. "How many marbles are in the bag? I. 12 are red. II. Red marbles are three times the blue ones." Even together, there may be marbles of other colours, so the total cannot be found.'
  ],
  deep: [
    ['Do not solve fully', 'You only need to decide whether the answer can be found. Avoid long calculations when a quick check of "unique or not" is enough.'],
    ['Counter-example method', 'To show insufficiency, give two different cases that both satisfy the statement but give different answers.']
  ],
  variations: [
    ['One statement is enough', 'Direct.', 'Area of a square with side 6'],
    ['Both together needed', 'Two pieces.', 'Speed from distance and time'],
    ['Yes/no questions', 'Always yes or always no.', 'Is the number even?'],
    ['Even both not enough', 'Missing information.', 'Marbles of other colours'],
    ['Algebraic pairs', 'Two equations.', 'x + y = 10, x − y = 2']
  ],
  examples: [
    {
      title: 'Both needed',
      q: 'What is the speed of the car? I. The car travelled 120 km. II. The journey took 2 hours.',
      given: ['I: distance', 'II: time'],
      concept: 'Speed = distance ÷ time.',
      steps: [['I alone', 'Distance alone does not give speed.'], ['II alone', 'Time alone does not give speed.'], ['Together', 'Speed = 120 ÷ 2 = 60 km/h: sufficient.']],
      ans: 'Both statements together are needed', why: 'Two quantities are required.', trap: 'Choosing one alone.'
    },
    {
      title: 'One statement enough',
      q: 'What is the value of x? I. 2x = 10. II. x + y = 8.',
      given: ['I: 2x = 10', 'II: x + y = 8'],
      concept: 'Unique value.',
      steps: [['I alone', 'x = 5: unique.'], ['II alone', 'Two unknowns, one equation: not unique.']],
      ans: 'Statement I alone is sufficient', why: 'II alone leaves many pairs.', trap: 'Using both when one is enough.'
    },
    {
      title: 'Even both not sufficient',
      q: 'How many marbles are in the bag? I. 12 are red. II. Red marbles are three times the blue ones.',
      given: ['I: 12 red', 'II: red = 3 × blue'],
      concept: 'Hidden categories.',
      steps: [['Together', 'Red = 12 and blue = 4.'], ['Total', 'Other colours may exist, so the total is unknown.']],
      ans: 'Even both together are not sufficient', why: 'The statements do not mention other colours.', trap: 'Answering 16.'
    }
  ],
  shortcut: {
    title: 'Order and counter-example',
    trad: 'Solve every question fully.',
    fast: 'Test I, then II, then both. For each, look for two different cases that fit but give different answers.',
    rules: ['A unique answer is needed.', 'Do not combine unless needed.', 'Yes/no: always yes or always no.', 'Watch for hidden categories.']
  },
  mistakes: [
    ['Solving fully', 'Wasting time on calculations.', 'Only decide uniqueness.'],
    ['Using both when one is enough', 'Missing that I alone works.', 'Test separately first.'],
    ['Assuming missing facts', 'Adding information.', 'Use only what is given.'],
    ['Ignoring ±', 'Taking x² = 9 as x = 3.', 'Two values = insufficient.']
  ],
  tips: { sec: 60, elim: 'If the verdict is "I alone", options saying "II alone" can be removed only after checking II.', advice: 'Follow the I, II, both order.', insight: 'Counter-examples make decisions fast.' },
  revision: ['Unique answer.', 'Order: I, II, both.', 'Counter-examples.', 'Yes/no logic.', 'Hidden categories.'],
  quickFormulas: ['Unique ⇒ sufficient'],
  takeaways: ['Decide, do not solve.', 'Test separately.', 'Unique only.', 'Hidden cases.'],
  selfCheck: ['Can I test one statement at a time?', 'Can I give a counter-example?', 'Can I spot hidden categories?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Data Sufficiency topic area; examples are original.']]
};

const quiz = [
  mk(easy, 'What is the age of Ravi?', 'Ravi is 5 years older than Sita.', 'Sita is 20 years old.', 2, 'Neither alone fixes Ravi\'s age. Together: 20 + 5 = 25.'),
  mk(easy, 'What is the area of the square?', 'The side of the square is 6 cm.', 'The square is in the first row of a chart.', 0, 'I gives 6² = 36 cm². II is irrelevant.'),
  mk(easy, 'What is the speed of the car?', 'The car travelled 120 km.', 'The journey took 2 hours.', 2, 'Speed needs distance and time together: 120 ÷ 2 = 60 km/h.'),
  mk(easy, 'How many students are in the class?', 'There are 30 girls in the class.', 'There are 20 boys in the class.', 2, 'Both together: 30 + 20 = 50. Neither alone gives the total.'),
  mk(easy, 'What is the price of a pen?', 'A pen and a pencil together cost ₹12.', 'A pencil costs ₹5.', 2, 'Together: 12 − 5 = ₹7.'),
  mk(easy, 'Is Ravi taller than Mohan?', 'Ravi is taller than Sita.', 'Sita is taller than Mohan.', 2, 'Together: Ravi > Sita > Mohan, so yes.'),

  mk(medium, 'What is the value of x?', '2x = 10.', 'x + y = 8.', 0, 'I gives x = 5. II alone has two unknowns.'),
  mk(medium, 'What is the perimeter of the rectangle?', 'The length is 8 cm.', 'The area is 48 cm².', 2, 'Together: breadth = 6, perimeter = 28. Neither alone is enough.'),
  mk(medium, 'What is the profit percentage?', 'The cost price is ₹200.', 'The selling price is ₹250.', 2, 'Both are needed: (250 − 200)/200 = 25%.'),
  mk(medium, 'Is the number even?', 'The number is divisible by 4.', 'The number is greater than 10.', 0, 'Every multiple of 4 is even: always yes. II alone does not decide.'),
  mk(medium, 'On what day of the week is 5 January?', '1 January is a Monday.', 'The year is 2024.', 0, '5 January is 4 days after Monday: Friday. The year does not matter.'),
  mk(medium, 'What is the ratio of A\'s age to B\'s age?', 'A is twice as old as B.', 'The sum of their ages is 45.', 0, 'I gives the ratio 2 : 1. II alone does not give the ratio.'),
  mk(medium, 'What is the value of y?', 'x + y = 10.', 'x − y = 2.', 2, 'Neither alone fixes y. Together: x = 6, y = 4.'),
  mk(medium, 'How many sides does the polygon have?', 'The sum of its interior angles is 720°.', 'It has equal sides.', 0, '(n − 2) × 180 = 720 gives n = 6. II is not needed.'),

  mk(placement, 'What is the area of the circle?', 'The circumference is 44 cm.', 'The radius is greater than 5 cm.', 0, 'I gives r = 7 and the area 154 cm². II alone does not fix r.'),
  mk(placement, 'Is a greater than b?', 'a² is greater than b².', 'a and b are positive.', 2, 'I alone allows negative values; II alone says nothing. Together a > b.'),
  mk(placement, 'What is the two-digit number?', 'The sum of its digits is 9.', 'It is an odd multiple of 5.', 2, 'Together: 45 is the only two-digit odd multiple of 5 with digit sum 9.'),
  mk(placement, 'What is the speed of the boat in still water?', 'The downstream speed is 12 km/h.', 'The stream speed is 2 km/h.', 2, 'Together: 12 − 2 = 10 km/h.'),
  mk(placement, 'How many marbles are in the bag?', '12 marbles are red.', 'Red marbles are three times the blue marbles.', 3, 'Other colours may exist, so the total cannot be found even with both.'),
  mk(placement, 'Is the triangle right-angled?', 'Its sides are 5 cm, 12 cm and 13 cm.', 'It has one angle of 60°.', 0, 'I: 5² + 12² = 13², so the answer is yes. II alone does not decide.')
];
build(chapter, quiz);
