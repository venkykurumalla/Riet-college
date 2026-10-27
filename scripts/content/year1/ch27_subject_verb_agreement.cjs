const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-subject-verb-agreement', year: 1, category: 'Verbal Ability', num: 27,
  title: 'Subject-Verb Agreement',
  tagline: 'Year 1 Foundation — Making the verb match its subject in number and person',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-ability/questions-and-answers/',
  overview: 'A verb must agree with its subject in number: a singular subject takes a singular verb (The dog barks) and a plural subject takes a plural verb (The dogs bark). The idea is simple, but English has many tricky cases: subjects joined by and, or and nor; collective nouns; words like each, either and neither; nouns that look plural but are singular (news, mathematics); and phrases that come between the subject and the verb. Agreement questions are among the most common in grammar sections of placement tests.',
  placement: 'Subject-verb agreement is commonly asked in the verbal ability section of company aptitude rounds, both as fill-in-the-blank items and as error-spotting items.',
  realWorld: 'Professional emails, reports and presentations are judged on this basic accuracy. "The results of the test is attached" is a mistake that readers notice immediately.',
  objectives: [
    'Identify the true subject of a sentence, ignoring phrases between the subject and the verb',
    'Apply the rules for and, or, nor, either-or and neither-nor',
    'Treat each, every, either, neither and one as singular',
    'Handle collective nouns, uncountable nouns and plural-only nouns',
    'Use the correct verb after expressions of quantity and after relative pronouns'
  ],
  prereq: ['Parts of Speech', 'Basic Tenses'],
  refresher: 'Present tense singular forms: is, has, does, goes (third person singular ends in -s). Plural forms: are, have, do, go. In the past tense, was agrees with singular and were with plural.',
  defs: [
    'Subject: the person or thing that performs the action or is described in the sentence.',
    'Singular subject: one item (The boy plays). Plural subject: more than one item (The boys play).',
    'Collective noun: a noun naming a group (team, committee, family, jury). It takes a singular verb when the group acts as one unit and a plural verb when members act individually.',
    'Proximity rule (nearest-subject rule): when subjects are joined by or, nor, either-or, neither-nor or not only-but also, the verb agrees with the subject nearest to it.',
    'Notional agreement: agreement by meaning, such as "bread and butter is my breakfast" (one idea).'
  ],
  intuition: 'The verb agrees with the head word of the subject, not with whatever noun sits closest to it. In "The quality of the products has improved", the subject is quality (singular), not products. Strip out the phrase between subject and verb to see the real subject.',
  mental: 'Cross out any "of" phrase or other phrase between the subject and the verb, then read the sentence again. "The quality [of the products] has improved" → "The quality has improved".',
  formulas: [
    ['Subjects joined by and', 'A and B → plural verb', 'Exception: one idea or one person (Bread and butter is my breakfast).', 'Compound subjects.', 'Ravi and Raju are friends.'],
    ['Each, every, either, neither, one', 'Take a singular verb', 'These words refer to one at a time.', 'Indefinite pronouns.', 'Each of the students is present. One of my friends is a pilot.'],
    ['Or, nor, either-or, neither-nor', 'The verb agrees with the nearer subject', 'The proximity rule.', 'Alternative subjects.', 'Neither the teacher nor the students were present.'],
    ['Looks plural, is singular', 'news, mathematics, physics, politics, economics, measles, ten kilometres (a distance), five years (a period) take singular verbs', 'Treat them as one thing.', 'Singular nouns ending in -s.', 'Mathematics is my favourite subject.'],
    ['Plural only', 'scissors, trousers, spectacles, jeans, cattle, people take plural verbs', 'Always plural.', 'Plural-only nouns.', 'The scissors are on the table.']
  ],
  narrative: [
    'First find the subject. The verb agrees with it, and nothing else. In "The list of items is long" the subject is list; in "The boys in the class are noisy" the subject is boys. Phrases beginning with of, with, along with, as well as and together with do not change the number of the subject.',
    'For compound subjects joined by and, use a plural verb: Ravi and Raju are friends. When the two nouns name one idea or one person, use a singular verb: Bread and butter is my breakfast. When each or every comes before each of the nouns joined by and, use singular: Each boy and each girl has a prize.',
    'With or and nor, the verb agrees with the nearest subject: Either Ravi or his brothers are responsible (plural nearest). Neither the teacher nor the students were present. Not only the players but also the coach was injured. The same proximity rule holds for neither-nor and not only-but also.',
    'Indefinite words such as each, every, either, neither, one and anybody are singular: Each of the students is present; Neither of the two answers is correct. Be careful: the plural noun after of is not the subject.',
    'Collective nouns take a singular verb when the group acts as one unit (The team is planning its strategy) and a plural verb when members act individually (The committee are divided in their opinions). "A number of" is plural (A number of students are absent), while "the number of" is singular (The number of students is increasing).',
    'Some nouns end in -s but are singular: news, mathematics, physics, politics, economics. Some plural-only nouns have no singular: scissors, trousers, spectacles, cattle, people. Distances, periods of time and sums of money considered as a whole take a singular verb: Ten kilometres is a long distance.'
  ],
  deep: [
    ['Relative pronouns who, which and that', 'The verb after a relative pronoun agrees with the noun the pronoun refers to. "He is one of those boys who are always late" (who refers to boys, so are). "He is the only one of the boys who is late" (who refers to one, so is).'],
    ['Expressions of quantity', '"A lot of", "most of", "some of" and "half of" take a verb that agrees with the noun after of: Most of the water is clean; Most of the students are present.']
  ],
  variations: [
    ['Simple subject', 'Singular versus plural.', 'The boys ___ playing.'],
    ['Phrase between subject and verb', 'Ignore the phrase.', 'The quality of the products ___ improved.'],
    ['Joined by and / or / nor', 'Compound and alternative subjects.', 'Neither the teacher nor the students ___ present.'],
    ['Indefinite pronouns and collective nouns', 'Each, neither, team, committee.', 'Each of the students ___ present.'],
    ['Looks plural, is singular', 'News, mathematics, distances.', 'Mathematics ___ my favourite subject.']
  ],
  examples: [
    {
      title: 'Ignoring the phrase in between',
      q: 'Choose the correct verb: "The quality of the products ___ improved." (has / have)',
      given: ['Subject: The quality of the products'],
      concept: 'The verb agrees with the head noun, not the noun in the phrase.',
      steps: [
        ['Find the head noun', 'The head noun is quality (singular); "of the products" is a phrase.'],
        ['Choose the verb', 'A singular subject takes has.']
      ],
      ans: 'has',
      why: 'Striking out "of the products" leaves "The quality has improved".',
      trap: 'Choosing "have" because "products" is plural and sits next to the verb.'
    },
    {
      title: 'Proximity rule with neither-nor',
      q: 'Choose the correct verb: "Neither the teacher nor the students ___ present." (was / were)',
      given: ['Subjects: the teacher (singular), the students (plural)'],
      concept: 'With neither-nor, the verb agrees with the nearer subject.',
      steps: [
        ['Find the nearer subject', 'The subject nearest the verb is "the students" (plural).'],
        ['Choose the verb', 'A plural subject takes were.']
      ],
      ans: 'were',
      why: 'The verb follows the subject that is closest to it.',
      trap: 'Choosing "was" because the first subject is singular.'
    },
    {
      title: 'Looks plural, is singular',
      q: 'Choose the correct verb: "Mathematics ___ my favourite subject." (is / are)',
      given: ['Subject: Mathematics'],
      concept: 'Names of subjects ending in -s are singular.',
      steps: [
        ['Identify the noun', 'Mathematics is a single subject of study.'],
        ['Choose the verb', 'It takes a singular verb: is.']
      ],
      ans: 'is',
      why: 'The -s ending does not make the noun plural here.',
      trap: 'Choosing "are" because of the final -s.'
    }
  ],
  shortcut: {
    title: 'Strike-out method',
    trad: 'Memorise every rule and exception.',
    fast: 'Strike out any phrase between the subject and the verb, find the head noun, and test singular versus plural. For or/nor, look at the nearer subject.',
    rules: [
      'Each, every, either, neither and one are singular.',
      'A and B → plural; A or B → verb agrees with B.',
      '"A number of" → plural; "the number of" → singular.',
      'News, mathematics, physics, distances and periods of time → singular.'
    ]
  },
  mistakes: [
    ['Matching the verb to the nearest noun', 'Choosing "have" in "The quality of the products have improved".', 'Find the head noun and ignore the phrase.'],
    ['Treating each/neither as plural', '"Each of the boys are present."', 'Each, either and neither are singular.'],
    ['Wrong verb with or/nor', 'Using the verb that agrees with the first subject.', 'Use the nearest subject.'],
    ['Thinking -s means plural', '"Mathematics are difficult".', 'Learn the list of singular nouns ending in -s.']
  ],
  tips: {
    sec: 20,
    elim: 'After striking out the in-between phrase, read the sentence aloud with each option; the wrong one sounds off.',
    advice: 'These are among the quickest grammar items; solve them immediately.',
    insight: 'Placement papers often hide the subject behind long phrases, so practise the strike-out habit.'
  },
  revision: [
    'The verb agrees with the head noun of the subject.',
    'A and B → plural (unless one idea); A or B → nearer subject.',
    'Each, every, either, neither, one → singular.',
    'Collective nouns: unit → singular, individuals → plural.',
    'News, mathematics, distances → singular; scissors, trousers, cattle → plural.'
  ],
  quickFormulas: ['A and B → plural', 'A or B → nearer', 'Each / neither → singular'],
  takeaways: [
    'Find the real subject.',
    'Ignore phrases in between.',
    'Know the singular and plural lists.',
    'Use the nearest-subject rule.'
  ],
  selfCheck: [
    'Can I fix "The quality of the products have improved"?',
    'Can I decide between "A number of students is/are absent"?',
    'Can I explain why "scissors" takes a plural verb?'
  ],
  sources: [
    ['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'The Concord (agreement) topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Choose the correct verb: "The boys ___ playing in the ground."', 'are', ['is', 'was', 'has'], 'The subject "boys" is plural, so the verb is "are".'),
  easy('Choose the correct verb: "She ___ a doctor."', 'is', ['are', 'were', 'have'], 'A singular subject takes "is".'),
  easy('Choose the correct verb: "Ravi and Raju ___ friends."', 'are', ['is', 'was', 'has been'], 'Two subjects joined by "and" take a plural verb.'),
  easy('Choose the correct verb: "The news ___ true."', 'is', ['are', 'were', 'have been'], '"News" is an uncountable noun that takes a singular verb.'),
  easy('Choose the correct verb: "Each of the students ___ present."', 'is', ['are', 'were', 'have been'], '"Each" is singular, so it takes "is".'),
  easy('Choose the correct verb: "My friends ___ coming to the party."', 'are', ['is', 'was', 'has'], 'The plural subject "friends" takes "are".'),

  medium('Choose the correct verb: "Neither of the two answers ___ correct."', 'is', ['are', 'were', 'have been'], '"Neither" is singular, so the verb is "is".'),
  medium('Choose the correct verb: "Either Ravi or his brothers ___ responsible."', 'are', ['is', 'was', 'has been'], 'With "either-or", the verb agrees with the nearer subject. "His brothers" is plural, so "are".'),
  medium('Choose the correct verb: "The team ___ planning its strategy."', 'is', ['are', 'were', 'have been'], 'The team acts as one unit, so the singular verb "is" is used.'),
  medium('Choose the correct verb: "Mathematics ___ my favourite subject."', 'is', ['are', 'were', 'have been'], '"Mathematics" ends in -s but names one subject, so it takes a singular verb.'),
  medium('Choose the correct verb: "The number of students ___ increasing."', 'is', ['are', 'were', 'have been'], '"The number of" is singular, so it takes "is".'),
  medium('Choose the correct verb: "One of my friends ___ a pilot."', 'is', ['are', 'were', 'have been'], 'The subject is "one", which is singular.'),
  medium('Choose the correct verb: "Bread and butter ___ my usual breakfast."', 'is', ['are', 'were', 'have been'], '"Bread and butter" is thought of as one dish, so the verb is singular.'),
  medium('Choose the correct verb: "Neither the teacher nor the students ___ present."', 'were', ['was', 'is', 'has been'], 'With "neither-nor", the verb agrees with the nearer subject. "The students" is plural, so "were".'),

  placement('Choose the correct verb: "He is one of those boys who ___ always late."', 'are', ['is', 'was', 'has been'], 'The relative pronoun "who" refers to "boys" (plural), so the verb is "are".'),
  placement('Choose the correct verb: "The quality of the products ___ improved."', 'has', ['have', 'are', 'were'], 'The head noun is "quality" (singular), so "has" is used.'),
  placement('Choose the correct verb: "Ten kilometres ___ a long distance to walk."', 'is', ['are', 'were', 'have been'], 'A distance considered as a whole takes a singular verb.'),
  placement('Choose the correct verb: "Not only the players but also the coach ___ injured."', 'was', ['were', 'are', 'have been'], 'With "not only-but also", the verb agrees with the nearer subject, "the coach" (singular), so "was".'),
  placement('Choose the correct verb: "The scissors ___ on the table."', 'are', ['is', 'was', 'has been'], '"Scissors" is a plural-only noun, so it takes a plural verb.'),
  placement('Choose the correct verb: "Each boy and each girl ___ a prize."', 'has', ['have', 'are having', 'were having'], 'With "each" before each noun, the subject is treated as singular, so "has".')
];

build(chapter, quiz);
