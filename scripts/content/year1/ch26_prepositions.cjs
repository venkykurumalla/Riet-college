const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-prepositions', year: 1, category: 'Verbal Ability', num: 26,
  title: 'Prepositions',
  tagline: 'Year 1 Foundation — Prepositions of time, place and direction, and fixed word-preposition pairs',
  minutes: 40,
  overview: 'A preposition is a word that shows the relationship between a noun or pronoun and another word in the sentence, such as time (at 6 a.m., on Monday, in 1999), place (on the table, in the room), direction (to the market, from Delhi) and many other connections. Many prepositions are fixed with particular words: good at, afraid of, married to, prefer to. These fixed pairs, rather than rules, are the main focus of prepositions questions in placement tests.',
  placement: 'Preposition fill-in-the-blank items are commonly asked in the verbal ability section of company aptitude rounds and in error-spotting passages.',
  realWorld: 'Using the wrong preposition in an email ("discuss about", "married with") is a common error that makes writing look careless.',
  objectives: [
    'Use at, on and in correctly with time and place',
    'Use since and for correctly with perfect tenses',
    'Distinguish between and among',
    'Memorise common adjective + preposition and verb + preposition pairs',
    'Avoid unnecessary prepositions (discuss about, enter into a room)'
  ],
  prereq: ['Parts of Speech', 'Basic Tenses'],
  refresher: 'A preposition is always followed by a noun, pronoun or an -ing form (the object of the preposition). If a pronoun follows, it takes the object form (with him, for them).',
  defs: [
    'Preposition of time: shows when (at 6 a.m., on Monday, in 1999, since 2018, for five years, by Friday, before and after).',
    'Preposition of place: shows where (in the room, on the table, at the door, under the bridge, near the park).',
    'Preposition of direction: shows movement (to the market, from Delhi, into the room, across the road).',
    'Dependent preposition: a preposition that goes with a particular adjective, noun or verb (afraid of, good at, depend on).',
    'Object of a preposition: the noun, pronoun or -ing word that follows the preposition.'
  ],
  intuition: 'Prepositions are small but they behave like glue: the right one is decided by habit and convention rather than logic. The best approach is to learn them in pairs, as chunks (fond of, interested in, married to), and to apply a few simple rules for time and place.',
  mental: 'For time, think of a funnel: at for exact points (at 6 a.m.), on for days and dates (on Monday), in for longer periods (in July, in 1999). For place the same pattern holds: at for a point (at the door), on for a surface (on the table), in for an enclosed space (in the room).',
  formulas: [
    ['At / on / in (time)', 'at + clock time or point;  on + day or date;  in + month, year, season, part of day', 'From specific to general.', 'Time blanks.', 'at 6 a.m., on Monday, in 1999, in the morning'],
    ['At / on / in (place)', 'at + point;  on + surface;  in + enclosed area, city, country', 'Same funnel for place.', 'Place blanks.', 'at the door, on the table, in Delhi'],
    ['Since and for', 'since + point of time;  for + length of time', 'Used with perfect tenses.', 'Time blanks.', 'since 2018, for five years'],
    ['Between and among', 'between = two items (or a few clearly separate items);  among = more than two, in a group', 'Count the items.', 'Choose between/among.', 'between the two children; among the five children'],
    ['Common pairs', 'good at, afraid of, fond of, interested in, married to, senior/junior to, prefer ... to, insist on, angry with (a person) / at (a thing), die of / die in', 'Learn as chunks.', 'Fixed-pair blanks.', 'He is good at Mathematics. I prefer tea to coffee.']
  ],
  narrative: [
    'Start with the three common prepositions of time. Use at for exact times (at 6 a.m., at noon, at night), on for days and dates (on Monday, on 15 August) and in for months, years, seasons and parts of the day (in July, in 1999, in summer, in the morning).',
    'The same funnel works for place. At marks a point (at the door, at the bus stop), on marks a surface (on the table, on the wall) and in marks an enclosed space or area (in the room, in Delhi, in India). Direction words show movement: to (towards a place), from (the starting point), into (entering).',
    'Since and for are often confused. Use since with a point of time (since 2018, since morning) and for with a length of time (for five years, for two hours). Both usually go with perfect tenses: She has been working here since 2018 / for five years.',
    'Between is used for two items; among for more than two items considered as a group. "The teacher divided the sweets between the two children"; "The sweets were distributed among the five children".',
    'Many adjectives and verbs take fixed prepositions: good at, fond of, afraid of, interested in, married to, senior to, prefer X to Y, insist on, accuse of, die of. Do not use extra prepositions: say "discuss the matter" (not "discuss about"), "enter the room" (not "enter into the room").'
  ],
  deep: [
    ['Angry with or at', 'We are angry with a person and angry at something a person did: She is angry with me for being late; She is angry at the delay.'],
    ['Prefer to, not than', 'The verb prefer is followed by to, not than: I prefer tea to coffee. Similarly, senior and junior take to: He is senior to me.']
  ],
  variations: [
    ['Time and place', 'At, on, in.', 'She was born ___ 1999.'],
    ['Since and for', 'Point versus length of time.', 'She has worked here ___ five years.'],
    ['Between and among', 'Two versus more.', 'The sweets were divided ___ the five children.'],
    ['Adjective + preposition', 'Fixed pairs.', 'He is good ___ Mathematics.'],
    ['Verb + preposition', 'Fixed pairs.', 'He insisted ___ paying the bill.']
  ],
  examples: [
    {
      title: 'At, on, in for time',
      q: 'Fill in the blanks: (a) She was born ___ 1999. (b) The meeting is ___ Monday. (c) I wake up ___ 6 a.m.',
      given: ['(a) a year, (b) a day, (c) a clock time'],
      concept: 'in for years, on for days, at for clock times.',
      steps: [
        ['(a) 1999', 'A year takes in.'],
        ['(b) Monday', 'A day takes on.'],
        ['(c) 6 a.m.', 'A clock time takes at.']
      ],
      ans: '(a) in, (b) on, (c) at',
      why: 'The funnel runs from the most specific (clock time) to the most general (year).',
      trap: 'Using "in" for every time expression.'
    },
    {
      title: 'Since or for',
      q: 'Fill in the blanks with since or for: (a) She has worked here ___ 2018. (b) She has worked here ___ five years.',
      given: ['(a) a point of time, (b) a length of time'],
      concept: 'since + point; for + length.',
      steps: [
        ['(a) 2018', 'A point of time takes since.'],
        ['(b) five years', 'A length of time takes for.']
      ],
      ans: '(a) since, (b) for',
      why: 'Both sentences say the same thing in different ways.',
      trap: 'Writing "since five years".'
    },
    {
      title: 'Between or among',
      q: 'Fill in the blanks: (a) The teacher divided the sweets ___ the two children. (b) The sweets were distributed ___ the five children.',
      given: ['(a) two children, (b) five children'],
      concept: 'between for two; among for more than two.',
      steps: [
        ['(a) two children', 'Two items take between.'],
        ['(b) five children', 'A group of more than two takes among.']
      ],
      ans: '(a) between, (b) among',
      why: 'Between points to a relationship of two items; among is used for a group.',
      trap: 'Using "between" for every group.'
    }
  ],
  shortcut: {
    title: 'Chunk learning',
    trad: 'Memorise isolated prepositions.',
    fast: 'Learn word + preposition as one chunk (fond of, good at, prefer to, married to) and say the chunk in your head to test the blank. For time and place apply the at-on-in funnel.',
    rules: [
      'at → exact point; on → day, date, surface; in → period, enclosed space.',
      'since → point of time; for → length of time.',
      'between → two; among → more than two.',
      'Never add extra prepositions after discuss, enter, reach, attend.'
    ]
  },
  mistakes: [
    ['Using "since" with a length of time', '"since five years".', 'Use for with a period and since with a starting point.'],
    ['Adding extra prepositions', '"discuss about", "enter into".', 'The verbs discuss, enter, reach and attend take the object directly.'],
    ['Using than after prefer', '"prefer tea than coffee".', 'Use "prefer X to Y".'],
    ['Wrong preposition after an adjective', '"good in Maths", "afraid from".', 'Learn good at, afraid of, fond of, interested in.']
  ],
  tips: {
    sec: 20,
    elim: 'Say each option with the adjacent word as a chunk; the wrong ones usually sound unnatural at once.',
    advice: 'Use the idiom lists to revise; prepositions reward repeated reading rather than rules.',
    insight: 'Error-spotting items often hide an extra or wrong preposition in a long sentence.'
  },
  revision: [
    'at/on/in for time and place.',
    'since + point, for + period.',
    'between two, among many.',
    'Common chunks: good at, afraid of, fond of, married to, prefer to.',
    'No extra preposition after discuss, enter, reach.'
  ],
  quickFormulas: ['at 6 a.m. / on Monday / in July', 'since 2018 / for 5 years', 'prefer A to B'],
  takeaways: [
    'Learn pairs as chunks.',
    'Use the funnel for time and place.',
    'Count the items for between/among.',
    'Do not add extra prepositions.'
  ],
  selfCheck: [
    'Can I complete "He is fond ___ music"?',
    'Can I choose between since and for?',
    'Can I fix "He prefers tea than coffee"?'
  ],
  sources: [
    ['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'The Prepositions topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('Fill in the blank: "She was born ___ 1999."', 'in', ['on', 'at', 'by'], 'A year takes the preposition "in".'),
  easy('Fill in the blank: "The meeting is ___ Monday."', 'on', ['in', 'at', 'by'], 'A day of the week takes "on".'),
  easy('Fill in the blank: "I wake up ___ 6 a.m."', 'at', ['on', 'in', 'by'], 'A clock time takes "at".'),
  easy('Fill in the blank: "He is good ___ Mathematics."', 'at', ['in', 'on', 'with'], 'The adjective "good" is followed by "at" when we speak of a skill.'),
  easy('Fill in the blank: "She is afraid ___ dogs."', 'of', ['from', 'at', 'with'], '"Afraid" takes the preposition "of".'),
  easy('Fill in the blank: "He sat ___ the chair."', 'on', ['at', 'by', 'to'], 'A surface such as a chair takes "on".'),

  medium('Fill in the blank: "India is rich ___ natural resources."', 'in', ['of', 'with', 'by'], '"Rich in" is the fixed pair used for resources.'),
  medium('Fill in the blank: "He is fond ___ music."', 'of', ['for', 'in', 'to'], '"Fond" is followed by "of".'),
  medium('Fill in the blank: "She is married ___ a doctor."', 'to', ['with', 'by', 'for'], '"Married to" is the standard pair.'),
  medium('Fill in the blank: "He was accused ___ theft."', 'of', ['for', 'with', 'about'], '"Accused of" is the standard pair.'),
  medium('Fill in the blank: "We arrived ___ Delhi yesterday."', 'in', ['at', 'to', 'on'], 'For cities and countries, "arrive in" is used.'),
  medium('Fill in the blank: "He died ___ a road accident."', 'in', ['of', 'by', 'at'], '"Died in an accident" is the standard expression (died of a disease).'),
  medium('Fill in the blank: "She has been working here ___ 2018."', 'since', ['for', 'from', 'by'], '"Since" is used with a starting point of time.'),
  medium('Fill in the blank: "She has been working here ___ five years."', 'for', ['since', 'from', 'by'], '"For" is used with a length of time.'),

  placement('Fill in the blank: "The teacher divided the sweets ___ the two children."', 'between', ['among', 'in', 'to'], 'For two persons, "between" is used.'),
  placement('Fill in the blank: "The sweets were distributed ___ the five children."', 'among', ['between', 'to', 'with'], 'For more than two, "among" is used.'),
  placement('Fill in the blank: "He is senior ___ me."', 'to', ['than', 'from', 'over'], '"Senior" and "junior" are followed by "to", not "than".'),
  placement('Fill in the blank: "I prefer tea ___ coffee."', 'to', ['than', 'from', 'over'], '"Prefer X to Y" is the correct construction.'),
  placement('Fill in the blank: "He insisted ___ paying the bill."', 'on', ['at', 'for', 'to'], '"Insist on" is the fixed pair.'),
  placement('Fill in the blank: "She is angry ___ me for being late."', 'with', ['at', 'on', 'to'], 'We are angry "with" a person and "at" a thing or event.')
];

build(chapter, quiz);
