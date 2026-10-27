const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-analogy', year: 1, category: 'Logical Reasoning', num: 15,
  title: 'Analogy',
  tagline: 'Year 1 Foundation — Finding the relationship in one pair and applying it to another',
  minutes: 40,
  morePractice: 'https://www.indiabix.com/logical-reasoning/analogies/',
  overview: 'An analogy question gives a pair of related items and asks you to find another pair with the same relationship. The standard form is A : B :: C : ?, read as "A is to B as C is to ?". The skill is to state the relationship between A and B precisely in one sentence, and then apply that exact sentence to C. Analogies can be word-based, number-based or letter-based.',
  placement: 'Analogy questions are commonly asked in the reasoning and verbal sections of company aptitude rounds. They are short, but the answer options are often designed to tempt you with a loosely related word, so precision matters.',
  realWorld: 'Choosing the right tool for a job, matching a profession with its workplace and recognising that "kilometre is to distance as kilogram is to weight" are everyday uses of analogical thinking.',
  objectives: [
    'State the relationship in a pair in one clear sentence',
    'Recognise the common word-analogy types: worker-tool, worker-product, part-whole, place, young-one, sequence, degree and function',
    'Solve number analogies based on squares, cubes and products',
    'Solve letter analogies based on position shifts',
    'Avoid the trap of a loosely related but wrong option'
  ],
  prereq: ['Number Series', 'Letter Series', 'Squares and cubes'],
  refresher: 'Know the squares up to 20² and the cubes up to 10³. For letters, use A = 1, B = 2, … Z = 26 and look at the shift in position.',
  defs: [
    'Analogy: a similarity of relationship between two pairs of items.',
    'Relationship sentence: a short sentence that describes how the first item of a pair relates to the second, such as "a doctor works in a hospital".',
    'Worker and workplace: Doctor : Hospital, Teacher : School, Chef : Kitchen.',
    'Worker and tool or product: Carpenter : Furniture, Cobbler : Shoes, Pen : Write.',
    'Part and whole, young one and adult, and degree (hot : scalding) are other common types of relationship.'
  ],
  intuition: 'The pair in the question defines a rule. The right answer is the option that follows the same rule in the same direction. Reversing the direction (for example Teacher : School versus School : Teacher) breaks the analogy even if the two words are related.',
  mental: 'Fill in the blank sentence: "A is the ___ of B." Then check the sentence for the second pair, keeping the order. If it fits naturally, the option is correct; if you have to stretch the sentence, try another option.',
  formulas: [
    ['Relationship sentence', 'A : B  →  "A ___ B"', 'Write the exact sentence connecting A and B.', 'Every word analogy.', 'Bird : Nest → "a bird lives in a nest"; so Bee : Hive'],
    ['Worker – tool / product', 'Worker : product (or tool)', 'The first item makes or uses the second.', 'Cobbler : Shoes, Carpenter : Furniture.', 'Writer : Pen, Painter : Brush'],
    ['Number – square / cube', 'n : n² or n : n³', 'The second number is a power of the first.', 'Number analogies such as 8 : 64.', '9 : 81, 4 : 64 (cube)'],
    ['Number – product form', 'n : n(n + 1)', 'The second number is n multiplied by the next number.', 'Pairs like 5 : 30.', '7 : 56'],
    ['Letter shift', 'Each letter moves by a fixed number of positions', 'Compare each letter of the first word with the corresponding letter of the second.', 'CAT : DBU (each +1).', 'DOG : EPH']
  ],
  narrative: [
    'Step one is to find the relationship in the first pair. Doctor and Hospital: a doctor works in a hospital. Step two is to apply the same relationship to the third word: a teacher works in a school, so the answer is School and not Library or Market.',
    'Watch the order. In "Cow : Calf :: Dog : ?" the pair goes from the adult to its young one, so the answer is Puppy. An option such as "Wolf" is related to Dog but does not follow the adult-to-young relation.',
    'Number analogies use arithmetic rules. 8 : 64 follows the rule "square of the first", so 9 : 81. If the first pair is 3 : 27, the rule is "cube", so 4 : 64. When a number is not a perfect square or cube, test the n(n + 1) rule: 5 : 30 gives 7 : 56.',
    'Letter analogies work position by position. CAT → DBU: C→D, A→B, T→U, each letter moves one step forward. Apply the same shift to DOG to get EPH. For pair analogies like ACE : FHJ, compute the shift (A to F is +5) and apply it to LNP to get QSU.'
  ],
  deep: [
    ['Degree and intensity analogies', 'Some pairs show increasing intensity, such as Warm : Hot or Pleased : Delighted. The answer must carry the same increase in strength in the same direction.'],
    ['Function analogies', 'Pairs like Thermometer : Temperature or Barometer : Pressure link an instrument to what it measures. If you know the instrument, name its function in one word and test the options for that word.']
  ],
  variations: [
    ['Worker and workplace', 'Profession and where it works.', 'Doctor : Hospital :: Teacher : ?'],
    ['Worker and product', 'Profession and what it produces.', 'Cobbler : Shoes :: Carpenter : ?'],
    ['Tool and function', 'Instrument and what it does or measures.', 'Pen : Write :: Knife : ?'],
    ['Number analogy', 'Rule between numbers.', '8 : 64 :: 9 : ?'],
    ['Letter analogy', 'Rule between letters.', 'CAT : DBU :: DOG : ?']
  ],
  examples: [
    {
      title: 'Worker and workplace',
      q: 'Doctor : Hospital :: Teacher : ?  (Library, School, Market, Home)',
      given: ['First pair: Doctor : Hospital', 'Options: Library, School, Market, Home'],
      concept: 'State the relationship as a sentence and apply it to the third word.',
      steps: [
        ['State the relationship', 'A doctor works in a hospital: worker : workplace.'],
        ['Apply it', 'A teacher works in a ___.'],
        ['Choose the option', 'School is the workplace of a teacher.']
      ],
      ans: 'School',
      why: 'The same worker-to-workplace relation holds.',
      trap: 'Choosing Library, which a teacher may use, but is not their workplace.'
    },
    {
      title: 'Number analogy',
      q: '5 : 30 :: 7 : ?  (49, 54, 56, 63)',
      given: ['First pair: 5 : 30'],
      concept: 'Test squares, cubes and n(n + 1) in turn.',
      steps: [
        ['Test the square', '5² = 25, not 30.'],
        ['Test n(n + 1)', '5 × 6 = 30. This works.'],
        ['Apply to 7', '7 × 8 = 56.']
      ],
      ans: '56',
      why: 'The second number is the product of the first number and the next integer.',
      trap: 'Choosing 49 by assuming "square" after seeing a small number.'
    },
    {
      title: 'Letter analogy',
      q: 'ACE : FHJ :: LNP : ?',
      given: ['First pair: ACE : FHJ'],
      concept: 'Compare the corresponding letters of the two groups.',
      steps: [
        ['Find the shift', 'A (1) → F (6) is +5, C (3) → H (8) is +5, E (5) → J (10) is +5.'],
        ['Apply the shift to LNP', 'L (12) → Q (17), N (14) → S (19), P (16) → U (21).'],
        ['Write the group', 'The group is QSU.']
      ],
      ans: 'QSU',
      why: 'Each letter moves five positions forward in the alphabet.',
      trap: 'Applying the shift to the first letter only.'
    }
  ],
  shortcut: {
    title: 'Sentence test',
    trad: 'Look at each option and decide whether it "feels" right.',
    fast: 'Write the relationship sentence for the first pair and test it on each option in turn. Only one option makes a sentence that is as accurate as the first.',
    rules: [
      'Keep the order of the pair: A : B must match C : D, not D : C.',
      'The relationship must be as specific as in the first pair.',
      'For numbers, try square, cube and n(n + 1) before anything else.',
      'For letters, compare positions letter by letter.'
    ]
  },
  mistakes: [
    ['Reversing the order of the pair', 'Both words are related, so either order seems fine.', 'Write the sentence in order and check it against the option in the same order.'],
    ['Choosing a loosely related word', 'The word is associated but the relationship is different.', 'The relationship must match exactly, not just be "somehow connected".'],
    ['Over-reading a number pair', 'Looking for a complex rule when a square or cube fits.', 'Test squares, cubes and n(n + 1) first.'],
    ['Applying a letter shift to only one letter', 'Seeing the first letter move and assuming the rest do.', 'Check every letter of the first pair.']
  ],
  tips: {
    sec: 30,
    elim: 'Eliminate options that have no relationship with the third word at all; then apply the sentence to the rest.',
    advice: 'Analogy questions should take under 30 seconds. Skip if the relationship is not clear within 15 seconds and return later.',
    insight: 'Precision of the relationship sentence is what separates a correct answer from a tempting wrong one.'
  },
  revision: [
    'A : B :: C : ? means the same relationship, in the same order.',
    'State the relationship as a sentence.',
    'Number rules: square, cube, n(n + 1).',
    'Letter rules: position shifts, letter by letter.',
    'Do not choose a word that is only loosely related.'
  ],
  quickFormulas: ['n : n²', 'n : n³', 'n : n(n + 1)', 'Letter shift = difference in positions'],
  takeaways: [
    'Define the relationship before looking at the options.',
    'Order matters.',
    'Use arithmetic for number analogies and position shifts for letter analogies.',
    'Be specific, not loosely associative.'
  ],
  selfCheck: [
    'Can I solve Cobbler : Shoes :: Carpenter : ?',
    'Can I find the missing number in 3 : 27 :: 4 : ?',
    'Can I continue CAT : DBU :: DOG : ?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Analogy topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Doctor : Hospital :: Teacher : ?', 'School', ['Library', 'Market', 'Home'], 'A doctor works in a hospital. In the same way, a teacher works in a school.'),
  easy('Bird : Nest :: Bee : ?', 'Hive', ['Honey', 'Flower', 'Cage'], 'A bird lives in a nest, and a bee lives in a hive.'),
  easy('Pen : Write :: Knife : ?', 'Cut', ['Sharp', 'Kitchen', 'Steel'], 'A pen is used to write. A knife is used to cut.'),
  easy('Head : Cap :: Foot : ?', 'Shoe', ['Hat', 'Belt', 'Shirt'], 'A cap is worn on the head. A shoe is worn on the foot.'),
  easy('Day : Night :: Hot : ?', 'Cold', ['Warm', 'Sun', 'Summer'], 'Day and night are opposites. The opposite of hot is cold.'),
  easy('Cow : Calf :: Dog : ?', 'Puppy', ['Wolf', 'Cub', 'Kitten'], 'A calf is the young one of a cow. A puppy is the young one of a dog.'),

  medium('Cobbler : Shoes :: Carpenter : ?', 'Furniture', ['Wood', 'Hammer', 'Nails'], 'A cobbler makes or repairs shoes. A carpenter makes furniture.'),
  medium('Thermometer : Temperature :: Barometer : ?', 'Pressure', ['Rain', 'Height', 'Speed'], 'A thermometer measures temperature. A barometer measures atmospheric pressure.'),
  medium('Lion : Den :: Horse : ?', 'Stable', ['Field', 'Nest', 'Hole'], 'A lion lives in a den. A horse is kept in a stable.'),
  medium('8 : 64 :: 9 : ?', 81, [72, 90, 99], 'The second number is the square of the first: 8² = 64, so 9² = 81.'),
  medium('3 : 27 :: 4 : ?', 64, [48, 16, 81], 'The second number is the cube of the first: 3³ = 27, so 4³ = 64.'),
  medium('Ear : Hear :: Eye : ?', 'See', ['Look', 'Glasses', 'Vision'], 'The ear is used to hear. The eye is used to see.'),
  medium('CAT : DBU :: DOG : ?', 'EPH', ['EOH', 'DPH', 'EPG'], 'Each letter moves one step forward: C→D, A→B, T→U. So D→E, O→P, G→H, giving EPH.'),
  medium('Book : Library :: Painting : ?', 'Gallery', ['Brush', 'Canvas', 'Artist'], 'Books are kept in a library. Paintings are displayed in a gallery.'),

  placement('5 : 30 :: 7 : ?', 56, [49, 54, 63], 'The rule is n × (n + 1): 5 × 6 = 30. So 7 × 8 = 56.'),
  placement('ACE : FHJ :: LNP : ?', 'QSU', ['QRS', 'PRT', 'QSV'], 'Each letter moves forward by 5: A→F, C→H, E→J. So L→Q, N→S, P→U, giving QSU.'),
  placement('Chapter : Book :: Verse : ?', 'Poem', ['Story', 'Novel', 'Letter'], 'A chapter is a part of a book. A verse is a part of a poem.'),
  placement('Metre : Length :: Kilogram : ?', 'Mass', ['Volume', 'Time', 'Speed'], 'The metre is a unit of length, and the kilogram is a unit of mass.'),
  placement('Seed : Plant :: Egg : ?', 'Bird', ['Nest', 'Shell', 'Yolk'], 'A seed grows into a plant. An egg hatches into a bird.'),
  placement('16 : 4 :: 81 : ?', 9, [3, 18, 27], 'The second number is the square root of the first: √16 = 4, so √81 = 9.')
];

build(chapter, quiz);
