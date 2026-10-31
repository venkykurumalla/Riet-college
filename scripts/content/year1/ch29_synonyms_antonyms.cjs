const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-synonyms-antonyms', year: 1, category: 'Verbal Ability', num: 29,
  title: 'Synonyms and Antonyms',
  tagline: 'Year 1 Foundation — Words with the same and opposite meanings, and how to choose between them',
  minutes: 40,
  overview: 'A synonym is a word with the same or nearly the same meaning as another word (begin and start). An antonym is a word with the opposite meaning (strong and weak). Placement tests ask for the closest synonym or antonym of a given word, often with options that include a confusing near-miss. Success depends on knowing the core meaning of the word, whether it is positive or negative in tone, and which part of speech it is.',
  placement: 'Synonym and antonym questions are commonly asked in the verbal ability section of company aptitude rounds. They are quick, so accuracy and a steady vocabulary routine pay off directly.',
  realWorld: 'Writers use synonyms to avoid repeating the same word and to find a more precise one. Antonyms help to contrast ideas clearly in reports and emails.',
  objectives: [
    'Identify the closest synonym and the exact antonym of a word',
    'Recognise shades of meaning and tone (positive, negative, neutral)',
    'Use prefixes to form antonyms and to spot trap options',
    'Eliminate options that are related but not opposite',
    'Build a routine for pairing every new word with a synonym and an antonym'
  ],
  prereq: ['Basic Vocabulary'],
  refresher: 'The class of the word matters: a synonym of a verb is a verb, and a synonym of an adjective is an adjective. The tone matters too: stubborn (negative) is not the same as determined (positive), although both describe someone who does not change their mind.',
  defs: [
    'Synonym: a word that has the same or nearly the same meaning as another word in a given context.',
    'Antonym: a word that has the opposite meaning. Types include gradable (hot/cold), complementary (alive/dead) and relational (buy/sell).',
    'Connotation: the feeling a word carries beyond its dictionary meaning (positive, negative or neutral).',
    'Near-miss option: a distractor that is related in meaning but not a true synonym or antonym.',
    'Context: the sentence in which the word appears, which often decides the correct meaning of a word with more than one sense.'
  ],
  intuition: 'The correct option is the one you could substitute into the sentence without changing its meaning (synonym) or whose meaning reverses the original (antonym). Be careful with words that have several meanings: "fair" can mean just, light-coloured or fairly good, and the context tells you which one is meant.',
  mental: 'For a synonym, put the answer in place of the word in a short sentence and check that it reads naturally. For an antonym, check that the answer really is the opposite and not merely different. "Cold" is the antonym of "hot", but "wet" is not.',
  formulas: [
    ['Substitution test (synonym)', 'Replace the word with the option in a sentence', 'The meaning must stay the same.', 'Synonym questions.', 'The soldier was brave → courageous works'],
    ['Opposite test (antonym)', 'The option must reverse the meaning', 'Check that it is not merely different.', 'Antonym questions.', 'generous ↔ stingy'],
    ['Tone check', 'Positive ↔ positive in synonyms; positive ↔ negative in antonyms', 'Match or reverse the tone.', 'Choosing among near-miss options.', 'obstinate (negative) → stubborn (negative)'],
    ['Prefix antonyms', 'un-, in-, im-, dis-, non- build many antonyms', 'Not every antonym uses a prefix.', 'Quick elimination.', 'permanent ↔ temporary (no prefix)'],
    ['Common word pairs', 'conceal = hide; tranquil = calm; candid = frank; mitigate = lessen; expand ↔ contract; scarce ↔ plentiful; transparent ↔ opaque; zenith ↔ nadir', 'Revise a few new pairs every day.', 'Vocabulary building.', 'ephemeral = short-lived']
  ],
  narrative: [
    'For a synonym, find the option whose meaning matches the word most closely in the usual sense. The word courageous means brave. An option such as "foolish" is not a synonym even though foolish people may take risks. Always avoid options that are only loosely connected.',
    'For an antonym, find the true opposite. The antonym of generous is stingy (unwilling to give). The option "rich" is not an antonym; a rich person can be generous or stingy. Remember that antonyms are about meaning, not about spelling or prefixes.',
    'Many questions give one correct answer and one or two near-misses. "Candid" means frank and honest. "Polite" and "secretive" are traps: polite is different in meaning, and secretive is nearly opposite. Check the tone and the main sense before choosing.',
    'Words with several meanings change their synonyms with context. In "a fair judge", fair means just; in "a fair complexion", it means light. If the question gives no sentence, choose the most common meaning.',
    'To build vocabulary quickly, write each new word with one synonym, one antonym and a sentence. Revise the same words after one day, one week and one month. This spaced revision is more effective than reading a long list once.'
  ],
  deep: [
    ['Degrees of meaning', 'Synonyms are rarely identical. Small, tiny and minute all relate to size but at different degrees; huge, enormous and gigantic are all very large. In tests, choose the option closest in degree to the given word.'],
    ['Antonyms with prefixes versus without', 'Some antonyms are formed with prefixes (possible → impossible), while others are separate words (permanent ↔ temporary). Do not assume that every antonym takes a prefix. Check whether the prefixed word is meaningful and commonly used.']
  ],
  variations: [
    ['Direct synonym', 'Find the closest word.', 'Synonym of begin.'],
    ['Direct antonym', 'Find the opposite.', 'Antonym of strong.'],
    ['Near-miss traps', 'Related but wrong options.', 'Synonym of obstinate.'],
    ['Context-based', 'The sentence decides the meaning.', 'Antonym of "fair" in a fair complexion.'],
    ['Advanced pairs', 'Less common words.', 'Antonym of zenith.']
  ],
  examples: [
    {
      title: 'Synonym with a near-miss',
      q: 'Choose the synonym of "obstinate": (flexible / stubborn / gentle / wise)',
      given: ['Word: obstinate'],
      concept: 'Match the core meaning and the tone.',
      steps: [
        ['Find the core meaning', 'Obstinate means unwilling to change one\'s opinion or behaviour, despite good reasons.'],
        ['Check the tone', 'The tone is negative (unreasonably firm).'],
        ['Compare the options', 'Stubborn has the same meaning and tone. Flexible is the opposite; gentle and wise are unrelated.']
      ],
      ans: 'stubborn',
      why: 'The substitution test works: "an obstinate child" = "a stubborn child".',
      trap: 'Choosing "wise" because both are about personality.'
    },
    {
      title: 'Antonym that is not simply "different"',
      q: 'Choose the antonym of "generous": (rich / stingy / kind / poor)',
      given: ['Word: generous'],
      concept: 'An antonym reverses the meaning.',
      steps: [
        ['Find the meaning', 'Generous means willing to give freely.'],
        ['Reverse it', 'The opposite is unwilling to give, which is stingy.'],
        ['Reject the traps', 'Rich and poor describe wealth, not giving; kind is a synonym.']
      ],
      ans: 'stingy',
      why: 'A person who is poor can still be generous; the relationship is about giving, not money.',
      trap: 'Choosing "poor" because it looks opposite to "rich".'
    },
    {
      title: 'Antonym without a prefix',
      q: 'Choose the antonym of "permanent": (temporary / impermanent / fixed / lasting)',
      given: ['Word: permanent'],
      concept: 'Prefixes do not always create the opposite word used in tests.',
      steps: [
        ['Find the meaning', 'Permanent means lasting for a long time or forever.'],
        ['Find the opposite', 'Temporary means lasting only for a short time.'],
        ['Check the other options', 'Fixed and lasting are close to permanent.']
      ],
      ans: 'temporary',
      why: 'Temporary is the standard antonym of permanent.',
      trap: 'Hunting for a prefixed form.'
    }
  ],
  shortcut: {
    title: 'Substitute and reverse',
    trad: 'Compare every option with every meaning of the word.',
    fast: 'Say the word in a simple sentence. Test each option by replacing it (synonym) or by checking that it flips the meaning (antonym). Cross out options that are merely related.',
    rules: [
      'Match the part of speech and the tone.',
      'If two options are synonyms of each other, neither is likely to be the answer to an antonym question.',
      'Prefix-formed words are not always the intended antonym.',
      'If the word has several meanings, choose the one in the sentence or the commonest one.'
    ]
  },
  mistakes: [
    ['Choosing a related word instead of a synonym', 'Picking "wise" for "obstinate".', 'Use the substitution test.'],
    ['Choosing "different" instead of "opposite"', 'Picking "poor" as the antonym of "generous".', 'Check that the option reverses the same quality.'],
    ['Ignoring tone', 'Mixing positive and negative words.', 'Match or reverse the tone as required.'],
    ['Assuming a prefix always makes the antonym', 'Choosing "impermanent" over "temporary".', 'Consider the standard antonym first.']
  ],
  tips: {
    sec: 15,
    elim: 'Remove options that are synonyms of each other; one of the remaining may be the answer to an antonym question.',
    advice: 'Do these questions quickly. If you do not know the word, use the prefix, root and tone to eliminate options.',
    insight: 'A little daily reading and a notebook of new words gives better results than any last-minute list.'
  },
  revision: [
    'Synonym = same meaning; antonym = opposite meaning.',
    'Check the part of speech and the tone.',
    'Substitution test for synonyms; reversal test for antonyms.',
    'Beware of near-miss options.',
    'Learn new words in pairs with a sentence.'
  ],
  quickFormulas: ['Substitution test', 'Reversal test', 'Tone check'],
  takeaways: [
    'Meaning and tone decide.',
    'Opposite is not the same as different.',
    'Context settles words with many meanings.',
    'Daily revision builds vocabulary.'
  ],
  selfCheck: [
    'Can I give a synonym and an antonym of "generous"?',
    'Can I spot a near-miss option?',
    'Can I explain why "temporary" is the antonym of "permanent"?'
  ],
  sources: [
    ['Oxford Advanced Learner\'s Dictionary', 'Reference', 'Meanings of the words discussed.'],
    ['Roget\'s Thesaurus', 'Reference', 'Groups of synonyms and antonyms.']
  ]
};

const quiz = [
  easy('Choose the synonym of "begin".', 'start', ['finish', 'stop', 'rest'], 'Begin and start both mean to commence an action.'),
  easy('Choose the antonym of "strong".', 'weak', ['heavy', 'large', 'tall'], 'Strong means having great power; its opposite is weak.'),
  easy('Choose the synonym of "smart".', 'clever', ['slow', 'quiet', 'lazy'], 'Smart (in the sense of intelligent) means clever.'),
  easy('Choose the antonym of "ancient".', 'modern', ['old', 'historic', 'classic'], 'Ancient means very old; modern means of the present time.'),
  easy('Choose the synonym of "huge".', 'enormous', ['tiny', 'average', 'narrow'], 'Huge and enormous both mean extremely large.'),
  easy('Choose the antonym of "victory".', 'defeat', ['triumph', 'success', 'prize'], 'Victory means winning; defeat means losing.'),

  medium('Choose the synonym of "courageous".', 'brave', ['careful', 'curious', 'foolish'], 'Courageous means having courage, i.e. brave.'),
  medium('Choose the antonym of "generous".', 'stingy', ['kind', 'rich', 'poor'], 'Generous means willing to give freely; stingy means unwilling to give.'),
  medium('Choose the synonym of "conceal".', 'hide', ['reveal', 'show', 'discover'], 'To conceal is to keep something from being seen, i.e. to hide.'),
  medium('Choose the antonym of "expand".', 'contract', ['grow', 'stretch', 'spread'], 'To expand is to become larger; to contract is to become smaller.'),
  medium('Choose the synonym of "tranquil".', 'calm', ['noisy', 'busy', 'angry'], 'Tranquil means peaceful and quiet, i.e. calm.'),
  medium('Choose the antonym of "scarce".', 'plentiful', ['rare', 'limited', 'short'], 'Scarce means not enough; plentiful means more than enough.'),
  medium('Choose the synonym of "obstinate".', 'stubborn', ['flexible', 'gentle', 'wise'], 'Obstinate means refusing to change one\'s mind, i.e. stubborn.'),
  medium('Choose the antonym of "permanent".', 'temporary', ['fixed', 'lasting', 'steady'], 'Permanent means lasting forever; temporary means lasting for a short time.'),

  placement('Choose the synonym of "candid".', 'frank', ['polite', 'secretive', 'shy'], 'Candid means open and honest in speech, i.e. frank.'),
  placement('Choose the antonym of "diligent".', 'lazy', ['careful', 'quick', 'strict'], 'Diligent means hard-working; lazy means unwilling to work.'),
  placement('Choose the synonym of "mitigate".', 'lessen', ['worsen', 'ignore', 'invite'], 'To mitigate is to make something less severe, i.e. to lessen it.'),
  placement('Choose the antonym of "transparent".', 'opaque', ['clear', 'thin', 'glassy'], 'Transparent means allowing light to pass through so that things can be seen; opaque means not allowing this.'),
  placement('Choose the synonym of "ephemeral".', 'short-lived', ['eternal', 'valuable', 'heavy'], 'Ephemeral means lasting for a very short time.'),
  placement('Choose the antonym of "zenith".', 'nadir', ['peak', 'summit', 'crown'], 'Zenith is the highest point; nadir is the lowest point.')
];

build(chapter, quiz);
