const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-lr-adv-blood-relations', year: 2, category: 'Advanced Logical Reasoning', num: 23, difficulty: 'Intermediate',
  title: 'Advanced Blood Relations',
  tagline: 'Year 2 — Multi-step family chains, in-law relations and coded relations',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/verbal-reasoning/blood-relation-test/',
  overview: 'Advanced blood relation problems chain three or more statements, add in-law relations (through marriage), and use coded symbols such as A + B or A × B to describe relations. The method is the same as in Year 1: draw a family tree with generation levels and gender marks, and read the answer from the tree. The difficulty comes from length and from the ambiguity of neutral words, so careful reading and a neat diagram are essential.',
  placement: 'Blood relation questions with three or more links and coded relations are commonly asked in company reasoning rounds.',
  realWorld: 'Kinship terms in forms, insurance nominee records and genealogy charts all follow these relations.',
  objectives: [
    'Build a family tree from three or more statements',
    'Use in-law relations correctly',
    'Decode relations given by symbols',
    'Handle statements with "only" and with neutral terms',
    'Choose a neutral answer when gender is not fixed'
  ],
  prereq: ['Basic Blood Relations'],
  refresher: 'Maternal = mother\'s side; paternal = father\'s side. Uncle/aunt are parents\' siblings (and their spouses). Cousin: child of uncle or aunt. Brother-in-law/sister-in-law: spouse\'s sibling or sibling\'s spouse.',
  defs: [
    'In-law relation: relation formed through marriage (father-in-law, mother-in-law, brother-in-law, son-in-law).',
    'Great-uncle / great-aunt: sibling of a grandparent.',
    'Coded relation: a symbol stands for a relation, e.g. + = mother of, − = brother of, × = father of.',
    'Generation level: parents above, siblings and cousins at the same level, children below.',
    'Neutral term: a word such as cousin, sibling, spouse, child, parent that does not fix gender.'
  ],
  intuition: 'Treat the relations as a path on a tree: go up to a parent, across to a sibling or spouse, down to a child. The answer is a name for the whole path. The challenge is to keep the gender and side (maternal or paternal) straight at every step.',
  mental: 'Draw squares for males, circles for females, a double line for marriage, and vertical lines for parent-child. Place the person asked about at the end of a path from the starting person.',
  formulas: [
    ['Path naming', 'Up a parent, across a sibling, down a child = uncle/aunt\'s child (cousin)', 'Name the path.', 'Tree questions.', 'Mother → her brother → his son = cousin'],
    ['In-law rules', 'Spouse\'s parent = parent-in-law; spouse\'s sibling = sibling-in-law; child\'s spouse = son/daughter-in-law', 'Through marriage.', 'In-law questions.', 'Wife\'s brother = brother-in-law'],
    ['Coded relations', 'Read left to right: each symbol links two adjacent letters', 'Write the chain, then name it.', 'Symbol questions.', 'A × B + C: A is father of B, B is mother of C → maternal grandfather'],
    ['Resolving "only"', 'Unique person: "my mother\'s only daughter" = I (if female) or my sister', 'Use gender if given.', 'Statements with "only".', '"Husband of my mother\'s only daughter-in-law" = my brother'],
    ['Neutral answers', 'If gender is not fixed, answer with a neutral term', 'Avoid guesses.', 'Cousin, sibling, child.', 'Use "cousin"']
  ],
  narrative: [
    'Start by marking genders from the statements (brother → male, sister → female, mother → female). Then place people on generation levels. In "A is the brother of B, B is the father of C", A is male at B\'s level, so A is C\'s paternal uncle.',
    'For in-law relations, remember that marriage links two families. The wife\'s brother is the husband\'s brother-in-law. A husband\'s father is the wife\'s father-in-law. A son\'s wife is the daughter-in-law.',
    'For coded relations, write the chain from left to right. A × B + C means A is the father of B and B is the mother of C, so A is the maternal grandfather of C. A − B × C means A is the brother of B and B is the father of C, so A is the paternal uncle of C.',
    'Statements with "only" identify a single person. "Pointing to a man, Anita says: He is the husband of my mother\'s only daughter-in-law." Anita\'s mother\'s daughter-in-law is Anita\'s brother\'s wife, so her husband is Anita\'s brother.',
    'When the gender of the answer is not determined, use a neutral term. The son or daughter of one\'s uncle is a cousin, and the person answers to "cousin" whichever gender.'
  ],
  deep: [
    ['Great-relations', 'The sibling of one\'s grandparent is a great-uncle or great-aunt. If D is sister of A, A is the father of B and B the mother of C, then D is the great-aunt of C.'],
    ['When two readings are possible', 'Some statements fit two trees. In an exam, the options usually contain only one that works in both; if none does, the answer is "cannot be determined".']
  ],
  variations: [
    ['Chains of three or more statements', 'Draw the tree.', 'A is B\'s sister; B is C\'s father'],
    ['Coded relations', 'Symbols.', 'A × B + C'],
    ['In-law relations', 'Marriage.', 'Wife\'s brother'],
    ['Pointing statements', 'With "only".', 'Husband of my mother\'s only daughter-in-law'],
    ['Neutral answers', 'Cousin, sibling.', 'Mother\'s brother\'s son\'s sister']
  ],
  examples: [
    {
      title: 'Coded relation',
      q: 'If A × B means A is the father of B, A + B means A is the mother of B and A − B means A is the brother of B, what does A × B + C mean for A and C?',
      given: ['× = father of', '+ = mother of'],
      concept: 'Read the chain left to right.',
      steps: [['A × B', 'A is the father of B.'], ['B + C', 'B is the mother of C.'], ['A and C', 'A is the father of C\'s mother.']],
      ans: 'A is the maternal grandfather of C', why: 'The father of one\'s mother is the maternal grandfather.', trap: 'Calling A the paternal grandfather.'
    },
    {
      title: 'Pointing statement with "only"',
      q: 'Pointing to a man, Anita says, "He is the husband of my mother\'s only daughter-in-law." How is the man related to Anita?',
      given: ['Anita\'s mother\'s only daughter-in-law'],
      concept: 'Resolve step by step.',
      steps: [['Mother\'s son\'s wife', 'The daughter-in-law of Anita\'s mother is the wife of Anita\'s brother.'], ['Her husband', 'Anita\'s brother.']],
      ans: 'Brother', why: 'The wife of the brother is the daughter-in-law of the mother.', trap: 'Saying brother-in-law.'
    },
    {
      title: 'A longer chain',
      q: 'A is the brother of B. B is the father of C. C is the sister of D. D is the son of E. How is A related to E?',
      given: ['Five links'],
      concept: 'Build the tree.',
      steps: [['B\'s children', 'C and D (siblings) are children of B.'], ['E', 'D is the son of E, so E is a parent of D and C; with B, E is the other parent.'], ['A', 'A is the brother of B, who is E\'s spouse.']],
      ans: 'Brother-in-law', why: 'A is the brother of E\'s husband.', trap: 'Choosing "uncle" (the relation to the children).'
    }
  ],
  shortcut: {
    title: 'Chain naming',
    trad: 'Try to hold the whole tree in memory.',
    fast: 'Draw after each statement. For coded relations, write the chain and name it as a path: parent of parent = grandparent; sibling of parent = uncle/aunt.',
    rules: ['Mark gender immediately.', 'Read the question from the right person.', 'Use neutral words if gender is open.', 'In-laws come through marriage.']
  },
  mistakes: [
    ['Mixing maternal and paternal sides', 'Losing track of which parent.', 'Label each link M or P.'],
    ['Assuming gender', 'Answering "uncle" for "sibling of parent".', 'Use neutral terms.'],
    ['Reading from the wrong end', 'Answering how C is related to A.', 'Write "A is the ___ of C".'],
    ['Skipping the diagram', 'Mental reasoning errors.', 'Always draw.']
  ],
  tips: { sec: 80, elim: 'Eliminate options whose gender or generation clearly disagrees with the tree.', advice: 'Draw a fresh tree for each question.', insight: 'Coded relation questions are solved fastest by writing the chain.' },
  revision: ['Draw the tree.', 'Gender first.', 'In-law rules.', 'Coded relations: chain.', 'Neutral terms.'],
  quickFormulas: ['A × B + C → maternal grandfather', 'A − B × C → paternal uncle'],
  takeaways: ['Tree first.', 'Name the path.', 'Know in-laws.', 'Use neutral terms.'],
  selfCheck: ['Can I decode a three-symbol chain?', 'Can I use in-law relations?', 'Can I solve a statement with "only"?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Blood Relations topic area; examples are original.']]
};

const quiz = [
  easy('A is the sister of B, and B is the father of C. How is A related to C?', 'Paternal aunt', ['Maternal aunt', 'Mother', 'Cousin'], 'A is the sister of C\'s father, so A is C\'s paternal aunt.'),
  easy('A\'s mother\'s only brother has a son B. B is A\'s', 'Cousin', ['Brother', 'Uncle', 'Nephew'], 'The child of one\'s uncle is a cousin.'),
  easy('P is the father of Q, Q is the sister of R, and R is the son of S. How is P related to S?', 'Husband', ['Brother', 'Father', 'Son'], 'P is the father of R and S is the mother of R, so P is S\'s husband.'),
  easy('The husband of my mother\'s mother is my', 'Maternal grandfather', ['Paternal grandfather', 'Uncle', 'Father-in-law'], 'My mother\'s mother\'s husband is my maternal grandfather.'),
  easy('A is the father of B, B is the mother of C, and D is the sister of A. How is D related to C?', 'Great-aunt', ['Aunt', 'Mother', 'Sister'], 'D is the sister of C\'s mother\'s father (the grandfather), so D is a great-aunt.'),
  easy('The brother of one\'s wife is one\'s', 'Brother-in-law', ['Uncle', 'Cousin', 'Nephew'], 'The wife\'s brother is the husband\'s brother-in-law.'),

  medium('Pointing to a boy, Ravi says, "He is the son of the only son of my grandfather." The boy is Ravi\'s', 'Brother', ['Cousin', 'Uncle', 'Father'], 'The only son of Ravi\'s grandfather is Ravi\'s father, so the boy is Ravi\'s brother.'),
  medium('If A × B means A is the father of B, A + B means A is the mother of B and A − B means A is the brother of B, then P × Q − R means P is the ___ of R.', 'father', ['mother', 'brother', 'uncle'], 'P is the father of Q, and Q is the brother of R, so P is also the father of R.'),
  medium('With the same symbols (× father, + mother, − brother), A × B + C means A is the ___ of C.', 'maternal grandfather', ['paternal grandfather', 'father', 'uncle'], 'A is the father of B and B is the mother of C, so A is C\'s maternal grandfather.'),
  medium('With the same symbols, A − B × C means A is the ___ of C.', 'paternal uncle', ['maternal uncle', 'father', 'brother'], 'A is the brother of B, and B is the father of C, so A is C\'s paternal uncle.'),
  medium('With the same symbols, A + B − C means A is the ___ of C.', 'mother', ['aunt', 'sister', 'grandmother'], 'A is the mother of B, and B is the brother of C, so A is also the mother of C.'),
  medium('A and B are a married couple. C is their only son and D is C\'s wife. How is A (the husband) related to D?', 'Father-in-law', ['Uncle', 'Brother-in-law', 'Grandfather'], 'A is the father of C, D\'s husband, so A is D\'s father-in-law.'),
  medium('A\'s mother\'s only brother has a son B and B has a sister C. How is C related to A?', 'Cousin', ['Sister', 'Aunt', 'Niece'], 'B and C are the children of A\'s maternal uncle, so C is A\'s cousin.'),
  medium('P is the brother of Q, Q is the sister of R, and R is the mother of S. P is S\'s', 'maternal uncle', ['paternal uncle', 'father', 'cousin'], 'P is the brother of R, S\'s mother. So P is the maternal uncle.'),

  placement('A is the brother of B. B is the father of C. C is the sister of D. D is the son of E. How is A related to E?', 'Brother-in-law', ['Uncle', 'Father', 'Brother'], 'B is D\'s father and E is D\'s mother (B\'s wife). A is B\'s brother, so A is E\'s brother-in-law.'),
  placement('P is a man. Q is the daughter of P\'s mother\'s only son. P is Q\'s', 'father', ['uncle', 'brother', 'grandfather'], 'P\'s mother\'s only son is P himself, so Q is P\'s daughter.'),
  placement('A is a boy. A\'s mother is the sister of B, and C is B\'s husband. C is A\'s', 'uncle', ['father', 'cousin', 'brother'], 'B is A\'s maternal aunt, and her husband C is A\'s uncle.'),
  placement('The father of my mother\'s only brother\'s son is my', 'maternal uncle', ['paternal uncle', 'cousin', 'father'], 'My mother\'s only brother\'s son\'s father is my mother\'s only brother, my maternal uncle.'),
  placement('Pointing to a man, Anita says, "He is the husband of my mother\'s only daughter-in-law." The man is Anita\'s', 'brother', ['father', 'uncle', 'brother-in-law'], 'Anita\'s mother\'s daughter-in-law is Anita\'s brother\'s wife, and her husband is Anita\'s brother.'),
  placement('A has two sons B and C. B\'s wife is D and C\'s daughter is E. How is D related to E?', 'Aunt', ['Mother', 'Sister', 'Grandmother'], 'D is the wife of E\'s father\'s brother, so D is E\'s aunt.')
];
build(chapter, quiz);
