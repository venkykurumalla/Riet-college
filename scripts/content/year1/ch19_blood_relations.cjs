const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-basic-blood-relations', year: 1, category: 'Logical Reasoning', num: 19,
  title: 'Basic Blood Relations',
  tagline: 'Year 1 Foundation — Reading family relationships and drawing the family tree',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-reasoning/blood-relation-test/',
  overview: 'Blood relation problems describe how people in a family are connected through statements such as "A is the brother of B" or "Pointing to a man, a woman said, he is the son of my mother\'s only son". You must work out the relationship between two named people. The reliable method is to draw a small family tree, mark each person as male or female where it is known, and then read the answer from the tree.',
  placement: 'Blood relation questions are commonly asked in the reasoning section of company aptitude rounds. They need no calculation; the challenge is reading the statements precisely and not mixing up the sides of the family.',
  realWorld: 'Forms that ask for "next of kin", family-tree charts, inheritance documents and insurance nominee records all rely on correctly reading relationships.',
  objectives: [
    'Know the standard relationship terms and their meanings',
    'Distinguish maternal and paternal relations',
    'Draw a family tree with generation levels and gender marks',
    'Solve "pointing to" statements by working from the speaker',
    'Decode relationships given through symbols such as +, − and ×'
  ],
  prereq: ['Basic English vocabulary for family relations', 'Classification / Odd One Out'],
  refresher: 'Generations: grandparents (top), parents, the person and their siblings and cousins, children (bottom). Siblings and cousins sit on the same level.',
  defs: [
    'Maternal relations are on the mother\'s side; paternal relations are on the father\'s side.',
    'Uncle: the brother of one\'s father or mother (also the husband of one\'s aunt). Aunt: the sister of one\'s father or mother (also the wife of one\'s uncle).',
    'Cousin: the child of one\'s uncle or aunt.',
    'Brother-in-law: the brother of one\'s spouse, or the husband of one\'s sister. Sister-in-law is defined in the same way.',
    'Nephew and niece: the son and daughter of one\'s brother or sister.',
    'Grandfather and grandmother: the parents of one\'s father or mother.'
  ],
  intuition: 'A blood relation puzzle is a small graph. Each statement adds one edge ("parent of", "sibling of", "spouse of"). Once the graph is on paper, the answer is a matter of reading the path between two nodes. The main danger is trying to hold the entire tree in your head instead of drawing it.',
  mental: 'Draw a horizontal line for each generation. Put a square for a male, a circle for a female and a short line between spouses. Use a vertical line from the parents to their children. Siblings share the same parent line.',
  formulas: [
    ['Father\'s or mother\'s sibling', 'Father\'s brother = paternal uncle; Father\'s sister = paternal aunt; Mother\'s brother = maternal uncle; Mother\'s sister = maternal aunt', 'Name the side and the gender.', 'Uncle and aunt questions.', 'My mother\'s brother → maternal uncle'],
    ['Uncle\'s or aunt\'s child', 'Uncle\'s or aunt\'s child = cousin', 'Same level as the person.', 'Cousin questions.', 'My mother\'s brother\'s son → cousin'],
    ['Spouse\'s relatives', 'Spouse\'s father = father-in-law; spouse\'s mother = mother-in-law; spouse\'s brother or sister\'s husband = brother-in-law', 'Marriage adds in-law relations.', 'Questions mentioning wife or husband.', 'Sister\'s husband → brother-in-law'],
    ['Pointing statements', 'Start from the speaker, work outwards one link at a time', 'Replace "my" with the speaker and trace the path.', '"She is my mother\'s only daughter" → speaker\'s sister (or the speaker).', '"My father\'s only son" → the speaker himself'],
    ['Coded relations', 'Assign each symbol a relation (for example + = mother, − = brother, × = father) and read left to right', 'Write the chain, then name the final relation.', 'Questions using +, −, ×, ÷.', 'P − R + Q: P is the brother of R, R is the mother of Q']
  ],
  narrative: [
    'Read each statement slowly and underline the relation word and its direction. "A is the brother of B" does not say who is older or what B\'s gender is. Mark A as male and put A on the same level as B. Do not invent information that is not in the statement.',
    'For a chain such as "A is the brother of B, B is the mother of C", draw B and C first (a mother and her child), place A beside B, and note that A is the brother of C\'s mother, which makes A the maternal uncle of C.',
    'Pointing statements usually contain "only" to give you certainty. "My father\'s only son" can only be the speaker (if the speaker is male) or the speaker\'s brother. In "she is my mother\'s mother\'s only daughter\'s daughter", the only daughter of the speaker\'s maternal grandmother is the speaker\'s mother, and her daughter is the speaker\'s sister.',
    'Coded relation questions use symbols for relationships. If + means mother, − means brother and × means father, then "P − R + Q" says P is the brother of R and R is the mother of Q, so P is Q\'s maternal uncle.',
    'If the answer is ambiguous (a "cousin" could be male or female), the question will give an option such as "cannot be determined" or will ask only for the relation, which is cousin.'
  ],
  deep: [
    ['Why "only" matters', 'The word "only" removes ambiguity. "Her mother\'s only son" is a unique person, her brother. Without "only", you could not tell which son is meant. Whenever you see "only", use it to merge two descriptions into one person.'],
    ['Gender clues', 'Unless the statement gives gender, do not guess. "Parent", "sibling", "child", "cousin" and "spouse" are neutral. The final answer should use a neutral term whenever the gender cannot be fixed from the statements.']
  ],
  variations: [
    ['Direct relation', 'Find the relation from a short chain.', 'A is B\'s brother. B is C\'s mother. A is C\'s ___?'],
    ['Pointing statements', 'A person points to another and describes the link.', 'She is my mother\'s only daughter\'s daughter.'],
    ['Family tree', 'Several people and relations are given.', 'A and B are a married couple; C is their son; D is C\'s wife.'],
    ['Coded relations', 'Symbols stand for relations.', 'P − R + Q'],
    ['Counting relations', 'Count the number of people of a type.', 'How many brothers does A have?']
  ],
  examples: [
    {
      title: 'A chain of relations',
      q: 'A is the brother of B. B is the mother of C. How is A related to C?',
      given: ['A is the brother of B', 'B is the mother of C'],
      concept: 'Draw B and C, then place A beside B.',
      steps: [
        ['Mark the first relation', 'A is male (brother) and is at the same level as B.'],
        ['Mark the second relation', 'B is the mother of C, so C is one level below B.'],
        ['Read the path', 'A is the brother of C\'s mother.']
      ],
      ans: 'Maternal uncle',
      why: 'The brother of one\'s mother is the maternal uncle.',
      trap: 'Answering "father", which would require A to be the husband of B.'
    },
    {
      title: 'A pointing statement',
      q: 'Pointing to a girl, Anil says, "She is the daughter of my mother\'s mother\'s only daughter." How is the girl related to Anil?',
      given: ['The girl = daughter of (Anil\'s mother\'s mother\'s only daughter)'],
      concept: 'Work from Anil outwards, one link at a time.',
      steps: [
        ['Anil\'s mother\'s mother', 'This is Anil\'s maternal grandmother.'],
        ['Her only daughter', 'The only daughter of Anil\'s maternal grandmother is Anil\'s mother.'],
        ['The daughter of that person', 'The daughter of Anil\'s mother is Anil\'s sister.']
      ],
      ans: 'Sister',
      why: 'The word "only" makes the daughter of the grandmother unique: it must be Anil\'s mother.',
      trap: 'Answering "cousin" by thinking the "mother\'s mother\'s daughter" is an aunt.'
    },
    {
      title: 'Coded relation',
      q: 'If A + B means A is the mother of B, A − B means A is the brother of B and A × B means A is the father of B, which expression shows that P is the maternal uncle of Q?',
      given: ['+ = mother, − = brother, × = father'],
      concept: 'A maternal uncle is the brother of the mother.',
      steps: [
        ['State what is needed', 'P must be the brother of Q\'s mother. Let R be Q\'s mother.'],
        ['Write the two relations', 'P is the brother of R (P − R) and R is the mother of Q (R + Q).'],
        ['Join them', 'The chain is P − R + Q.']
      ],
      ans: 'P − R + Q',
      why: 'Reading left to right: P is the brother of R and R is the mother of Q.',
      trap: 'Writing R − P + Q, which makes R the maternal uncle.'
    }
  ],
  shortcut: {
    title: 'Draw first, read second',
    trad: 'Try to keep all relations in memory and reason mentally.',
    fast: 'Draw squares for males and circles for females, join spouses with a short horizontal line and children below. Write every new person as soon as the statement mentions them.',
    rules: [
      '"My mother\'s brother" is the maternal uncle; "my father\'s sister" is the paternal aunt.',
      'The child of an uncle or aunt is a cousin.',
      'Resolve "only son/daughter" as a single unique person.',
      'If the question asks "how is A related to B", read from A\'s perspective, not B\'s.'
    ]
  },
  mistakes: [
    ['Reading the relation from the wrong side', 'Answering how B is related to A instead of A to B.', 'Re-read the final question; write "A is the ___ of B" and check.'],
    ['Assuming gender', 'Treating "cousin" or "sibling" as male or female.', 'Use neutral terms unless the gender is stated.'],
    ['Mixing maternal and paternal', 'Answering "uncle" for a mother\'s side but "paternal uncle" for the father\'s side.', 'Ask: did the link pass through the mother or the father?'],
    ['Ignoring the word "only"', 'Adding extra siblings that the statement rules out.', 'Use "only" to identify a single person.']
  ],
  tips: {
    sec: 60,
    elim: 'Eliminate options that disagree in gender or in generation level with your tree; usually two options go at once.',
    advice: 'Blood relation questions are easy to get right if you draw. Take 10 seconds to draw rather than 40 seconds to think.',
    insight: 'Care with the wording of the question matters more than speed.'
  },
  revision: [
    'Draw squares for males, circles for females; generations as rows.',
    'Maternal = mother\'s side; paternal = father\'s side.',
    'The child of an uncle or aunt is a cousin.',
    'Use "only" to identify a unique person.',
    'In coded relations, read the chain left to right.'
  ],
  quickFormulas: ['Mother\'s brother = maternal uncle', 'Father\'s sister = paternal aunt', 'Sibling\'s child = nephew/niece'],
  takeaways: [
    'Draw the tree.',
    'Read the question from the correct person\'s perspective.',
    'Do not invent genders.',
    'Chains of two or three links are enough for most questions.'
  ],
  selfCheck: [
    'Can I identify the relation of A to C if A is the sister of B and B is the father of C?',
    'Can I resolve "my father\'s only son"?',
    'Can I write the expression for "P is the maternal uncle of Q" using + − × symbols?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Blood Relations topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('A is the brother of B and B is the mother of C. How is A related to C?', 'Maternal uncle', ['Father', 'Paternal uncle', 'Cousin'], 'A is the brother of C\'s mother B, which makes A the maternal uncle of C.'),
  easy('My mother\'s brother\'s son is my', 'Cousin', ['Brother', 'Nephew', 'Uncle'], 'The child of one\'s uncle or aunt is a cousin.'),
  easy('The father of my father is my', 'Grandfather', ['Uncle', 'Father-in-law', 'Brother'], 'The father of one\'s father is the grandfather.'),
  easy('Pointing to a photograph, Ravi says, "She is the daughter of my father\'s only son." The woman in the photograph is Ravi\'s', 'Daughter', ['Sister', 'Niece', 'Mother'], 'Ravi\'s father\'s only son is Ravi himself, so the woman is Ravi\'s daughter.'),
  easy('My mother\'s sister is my', 'Maternal aunt', ['Paternal aunt', 'Grandmother', 'Cousin'], 'The sister of one\'s mother is the maternal aunt.'),
  easy('The husband of my sister is my', 'Brother-in-law', ['Uncle', 'Brother', 'Nephew'], 'The husband of one\'s sister is a brother-in-law.'),

  medium('A is the father of B. C is the sister of B. D is the mother of A. How is D related to C?', 'Grandmother', ['Mother', 'Aunt', 'Sister'], 'D is A\'s mother and A is the father of B and C. So D is the paternal grandmother of C.'),
  medium('Introducing a man, a woman says, "His mother is the only daughter of my mother." How is the woman related to the man?', 'Mother', ['Sister', 'Aunt', 'Grandmother'], 'The only daughter of the woman\'s mother is the woman herself. So she is the man\'s mother.'),
  medium('P is the brother of Q. Q is the sister of R. R is the father of S. How is P related to S?', 'Paternal uncle', ['Father', 'Maternal uncle', 'Brother'], 'P is also the brother of R, because Q is the sister of R and P is the brother of Q. R is S\'s father, so P is S\'s paternal uncle.'),
  medium('The wife of my father\'s only brother is my', 'Aunt', ['Mother', 'Sister', 'Grandmother'], 'My father\'s brother is my paternal uncle, and his wife is my aunt.'),
  medium('Q\'s mother is the sister of P. P\'s son is R. How is R related to Q?', 'Cousin', ['Brother', 'Nephew', 'Uncle'], 'Q\'s mother and P are siblings, so Q and P\'s son R are children of siblings: cousins.'),
  medium('Rani is the mother of Seema. Seema is the sister of Raju. Raju is the father of Mohan. How is Rani related to Mohan?', 'Grandmother', ['Mother', 'Aunt', 'Sister'], 'Rani is Raju\'s mother (as Seema\'s brother is Raju), and Raju is Mohan\'s father. So Rani is Mohan\'s paternal grandmother.'),
  medium('Pointing to a girl, Anil says, "She is the daughter of my mother\'s mother\'s only daughter." The girl is Anil\'s', 'Sister', ['Cousin', 'Niece', 'Aunt'], 'The only daughter of Anil\'s maternal grandmother is Anil\'s mother. Her daughter is Anil\'s sister.'),
  medium('The father of A is the brother of B. B\'s sister is C. How is C related to A?', 'Paternal aunt', ['Mother', 'Maternal aunt', 'Cousin'], 'C is the sister of A\'s father\'s brother B, hence C is also a sister of A\'s father. She is A\'s paternal aunt.'),

  placement('If A + B means A is the mother of B, A − B means A is the brother of B and A × B means A is the father of B, which expression shows that P is the maternal uncle of Q?', 'P − R + Q', ['P + R − Q', 'P × R − Q', 'R − P + Q'], 'P must be the brother of Q\'s mother. P − R says P is the brother of R, and R + Q says R is the mother of Q. So P − R + Q.'),
  placement('A and B are a married couple. C is their only son and D is the wife of C. E is the daughter of C and D. How is B related to E?', 'Paternal grandmother', ['Maternal grandmother', 'Mother', 'Aunt'], 'B is C\'s mother (and A\'s wife). E is C\'s daughter, so B is E\'s father\'s mother, the paternal grandmother.'),
  placement('P is the brother of Q, Q is the brother of R, and R is the father of S. How is P related to S?', 'Paternal uncle', ['Father', 'Maternal uncle', 'Cousin'], 'P and Q are brothers and Q and R are brothers, so P is a brother of R. R is S\'s father, so P is S\'s paternal uncle.'),
  placement('A is the sister of B. C is the mother of B. D is the father of C. How is A related to D?', 'Granddaughter', ['Daughter', 'Niece', 'Sister'], 'A is B\'s sister, so A is also C\'s daughter. C is D\'s child. So A is D\'s granddaughter.'),
  placement('Pointing to a lady, a man says, "The son of her only brother is the brother of my wife." How is the lady related to the man?', 'Wife\'s paternal aunt', ['Mother of wife', 'Sister of wife', 'Sister'], 'The lady\'s only brother\'s son is the man\'s wife\'s brother. So the lady\'s brother is the wife\'s father. The lady is the sister of the wife\'s father, i.e. the wife\'s paternal aunt.'),
  placement('A is the brother of B, B is the sister of C, and C is the father of D. How is D\'s father related to A?', 'Brother', ['Uncle', 'Father', 'Nephew'], 'A, B and C are siblings. D\'s father is C, who is the brother of A.')
];

build(chapter, quiz);
