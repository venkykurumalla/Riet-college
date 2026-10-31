const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-verbal-basic-vocabulary', year: 1, category: 'Verbal Ability', num: 28,
  title: 'Basic Vocabulary',
  tagline: 'Year 1 Foundation — Word meanings, word formation, confusable words and context clues',
  minutes: 40,
  overview: 'Vocabulary is the set of words you know and can use correctly. For placement tests, vocabulary questions ask you to give the meaning of a word, pick the right word for a blank, choose the word with the correct spelling or form, or substitute one word for a phrase. A strong vocabulary is built less by memorising long lists and more by learning word parts (prefixes, roots, suffixes), word families, and the context in which words appear.',
  placement: 'Vocabulary questions are commonly asked in the verbal ability section of company aptitude rounds, in the form of meanings, fill-in-the-blanks, one-word substitutions and confusable-word pairs.',
  realWorld: 'The right word makes an email clear and professional. Choosing "advice" instead of "advise", or "effect" instead of "affect", is the kind of detail a reader notices.',
  objectives: [
    'Learn word meanings from context, word parts and word families',
    'Use prefixes and suffixes to form opposites and other word classes',
    'Distinguish commonly confused words (advice/advise, affect/effect, principal/principle)',
    'Learn common one-word substitutions',
    'Build a daily routine for learning and revising new words'
  ],
  prereq: ['Parts of Speech'],
  refresher: 'A word family groups words from the same root in different parts of speech: decide (verb), decision (noun), decisive (adjective), decisively (adverb).',
  defs: [
    'Prefix: a group of letters added to the beginning of a word that changes its meaning (un-, in-, im-, il-, ir-, dis-, re-, mis-).',
    'Suffix: a group of letters added to the end of a word that changes its class or meaning (-tion, -ness, -ous, -ful, -ly).',
    'Root: the core part of a word that carries its basic meaning (bene = good, mal = bad, port = carry).',
    'Context clue: a hint in the sentence that suggests the meaning of an unknown word.',
    'One-word substitution: a single word that replaces a phrase (a person who writes books = author).'
  ],
  intuition: 'You rarely need to know a word perfectly to answer a vocabulary question. If you recognise a prefix, root or suffix, or you can tell from the sentence whether the word is positive or negative, you can often eliminate three of the four options.',
  mental: 'Break an unfamiliar word into parts. "Benevolent": bene = good, vol = wish. So "benevolent" has something to do with wishing good, which means kind and generous. This works for hundreds of words.',
  formulas: [
    ['Negative prefixes', 'un- (unhappy), in- (inactive), im- before m/p (impossible), il- before l (illegal), ir- before r (irregular), dis- (dislike), non- (nonsense)', 'Choose by the first letter of the base word.', 'Opposite and word-formation questions.', 'responsible → irresponsible'],
    ['Common suffixes', '-tion/-sion (noun: decision), -ness (noun: kindness), -ous/-ful (adjective: dangerous, careful), -ly (adverb: quickly)', 'Suffixes change the part of speech.', 'Word-form questions.', 'danger → dangerous (adjective)'],
    ['Useful roots', 'bene = good (benefit), mal = bad (malfunction), port = carry (transport), dict = say (predict), spect = look (inspect)', 'One root unlocks many words.', 'Meaning-from-parts questions.', 'benevolent = wishing good'],
    ['Confusable pairs', 'advice (noun) / advise (verb); affect (verb: to influence) / effect (noun: a result); principal (head or main) / principle (rule); stationary (still) / stationery (paper)', 'Learn each pair together.', 'Choose-the-correct-word blanks.', 'Rain can affect the harvest; the effect was bad.'],
    ['One-word substitution', 'a person who writes books = author; a person who loves mankind = philanthropist; a place where books are kept = library', 'Learn the common ones.', 'Phrase-to-word questions.', 'a person who loves mankind → philanthropist']
  ],
  narrative: [
    'Start with context. When you meet an unknown word, ask whether the sentence is positive or negative and what kind of word is needed. In "The soldiers were reluctant to fight", reluctant must be a negative word (unwilling), because the soldiers did not want to fight.',
    'Learn the common prefixes and suffixes. In- becomes im- before m and p (impossible, immature), il- before l (illegal) and ir- before r (irregular, irresponsible). Suffixes change the class: decide → decision (noun), danger → dangerous (adjective), quick → quickly (adverb).',
    'Group words in families. Learning decide, decision, decisive and decisively together gives you four forms for the price of one, and these forms are exactly what word-form questions test.',
    'Confusable words are a favourite in tests. Advice is a noun ("good advice") and advise is a verb ("I advise you to study"). Affect is usually a verb meaning to influence and effect is usually a noun meaning a result. Principal means chief or head (the principal of the college) and principle means a rule or belief.',
    'Learn one-word substitutions as small stories: an author writes books, a philanthropist loves mankind and gives to the needy, a librarian looks after books. Revise ten new words a day: write the word, its meaning, a short sentence and one related word.'
  ],
  deep: [
    ['Idioms and phrases', 'Idioms are fixed phrases whose meaning is different from the words alone. "A piece of cake" means something very easy; "to break the ice" means to start a conversation in an awkward situation. Learn idioms with an example sentence.'],
    ['Spelling patterns', 'Many tested words have a double letter: accommodation, committee, necessary, occurrence. Learn them as groups: "accommodation" has double c and double m.']
  ],
  variations: [
    ['Meaning of a word', 'Choose the meaning from four options.', '"Abundant" means plentiful.'],
    ['Prefix and suffix', 'Make an opposite or change the class.', 'responsible → irresponsible'],
    ['Confusable words', 'Choose the correct word for a blank.', 'He gave me good ___. (advice/advise)'],
    ['One-word substitutions', 'Replace a phrase with a word.', 'A person who writes books → author'],
    ['Spelling', 'Choose the correct spelling.', 'Accommodation']
  ],
  examples: [
    {
      title: 'Meaning from word parts',
      q: 'What does "benevolent" mean? (cruel / kind and generous / careless / lazy)',
      given: ['Word: benevolent'],
      concept: 'Use roots: bene = good, vol = wish.',
      steps: [
        ['Break the word', 'bene (good) + vol (wish) + -ent (adjective ending).'],
        ['Combine the meaning', '"Wishing good" suggests kindness and generosity.'],
        ['Choose the option', '"Kind and generous" matches.']
      ],
      ans: 'kind and generous',
      why: 'The root bene appears in benefit, beneficial and benefactor, all positive.',
      trap: 'Guessing "cruel" because the word looks like "violent".'
    },
    {
      title: 'Confusable words',
      q: 'Choose the correct word: "He gave me good ___ on how to prepare for the interview." (advice / advise)',
      given: ['Options: advice, advise'],
      concept: 'Advice is a noun; advise is a verb.',
      steps: [
        ['Find the class of the word needed', '"Good ___" needs a noun after the adjective good.'],
        ['Match the options', 'Advice is the noun; advise is the verb.']
      ],
      ans: 'advice',
      why: 'The adjective "good" is followed by a noun.',
      trap: 'Choosing "advise" because it looks more familiar.'
    },
    {
      title: 'Prefixes',
      q: 'Which prefix gives the opposite of "responsible"? (un- / im- / ir- / dis-)',
      given: ['Base word: responsible'],
      concept: 'Choose the prefix by the first letter of the base word.',
      steps: [
        ['Look at the first letter', 'Responsible begins with r.'],
        ['Apply the rule', 'Before r the negative prefix is ir-.']
      ],
      ans: 'ir- (irresponsible)',
      why: 'Negative prefixes follow patterns: im- before m/p, il- before l, ir- before r.',
      trap: 'Using un- for every opposite.'
    }
  ],
  shortcut: {
    title: 'Parts-and-context method',
    trad: 'Memorise long lists of words with meanings.',
    fast: 'For an unknown word, split it into prefix, root and suffix, decide if the sentence is positive or negative, and eliminate options that do not fit. Learn confusable words in pairs.',
    rules: [
      'Positive or negative? Decide this first from the sentence.',
      'in- becomes im-, il- or ir- before m/p, l and r.',
      'Learn word families rather than single words.',
      'Learn confusable pairs together: advice/advise, affect/effect, principal/principle.'
    ]
  },
  mistakes: [
    ['Confusing a noun and a verb form', 'Writing "advise" for the noun advice.', 'Check the class of the word needed in the blank.'],
    ['Using un- for every opposite', '"unregular", "unpossible".', 'Learn im-, il-, ir- patterns.'],
    ['Guessing meaning from looks', 'Thinking that benevolent is like violent.', 'Check the root before guessing.'],
    ['Mis-spelling double-letter words', '"accomodation", "recomend".', 'Learn commonly misspelled words in groups.']
  ],
  tips: {
    sec: 20,
    elim: 'If the sentence is positive in tone, drop options with negative meanings, and vice versa.',
    advice: 'Learn words in short daily sessions rather than long weekly lists.',
    insight: 'Word parts and context solve most vocabulary questions even when the word is new.'
  },
  revision: [
    'Prefixes: un-, in-/im-/il-/ir-, dis-, non-.',
    'Suffixes change the class: -tion, -ness, -ous, -ful, -ly.',
    'Roots: bene, mal, port, dict, spect.',
    'Confusable pairs: advice/advise, affect/effect, principal/principle.',
    'Learn ten new words a day with a sentence.'
  ],
  quickFormulas: ['in- → im- (m, p), il- (l), ir- (r)', 'advice (n) / advise (v)', 'affect (v) / effect (n)'],
  takeaways: [
    'Word parts unlock meaning.',
    'Context decides.',
    'Pairs of confusable words need to be learned together.',
    'Revise daily.'
  ],
  selfCheck: [
    'Can I form the opposite of "regular" and "legal"?',
    'Can I explain the difference between affect and effect?',
    'Can I give the one-word substitution for "a person who loves mankind"?'
  ],
  sources: [
    ['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'Word formation, prefixes and suffixes; examples in this chapter are original.'],
    ['Oxford Advanced Learner\'s Dictionary', 'Reference', 'Meanings and usage of the words discussed.']
  ]
};

const quiz = [
  easy('The word "abundant" means', 'plentiful', ['scarce', 'rare', 'tiny'], 'Abundant means existing in large quantities, i.e. plentiful.'),
  easy('The word "brief" means', 'short', ['long', 'heavy', 'loud'], 'Brief means lasting a short time or using few words.'),
  easy('The word "rapid" means', 'fast', ['slow', 'quiet', 'weak'], 'Rapid means happening at great speed.'),
  easy('The word "ancient" means', 'very old', ['very new', 'very big', 'very cheap'], 'Ancient means belonging to a very distant past.'),
  easy('The word "reluctant" means', 'unwilling', ['eager', 'careful', 'sleepy'], 'Reluctant means not willing to do something.'),
  easy('The word "delicious" means', 'very tasty', ['very bitter', 'very hot', 'very cold'], 'Delicious describes food that tastes very good.'),

  medium('Which prefix gives the opposite of "responsible"?', 'ir-', ['un-', 'im-', 'dis-'], 'Before the letter r the negative prefix is ir-, giving irresponsible.'),
  medium('Which prefix gives the opposite of "possible"?', 'im-', ['un-', 'ir-', 'dis-'], 'Before the letter p the negative prefix is im-, giving impossible.'),
  medium('The noun form of the verb "decide" is', 'decision', ['decisive', 'decidingly', 'decided'], 'Decide → decision (noun). Decisive is an adjective.'),
  medium('The adjective form of the noun "danger" is', 'dangerous', ['dangerly', 'endanger', 'dangering'], 'The suffix -ous forms the adjective: dangerous.'),
  medium('Choose the correct word: "He gave me good ___ on how to prepare for the interview."', 'advice', ['advise', 'advices', 'advised'], 'Advice is the noun; advise is the verb. The adjective "good" needs a noun.'),
  medium('Choose the correct word: "Heavy rain can ___ the harvest."', 'affect', ['effect', 'effects', 'affection'], 'Affect is a verb meaning to influence; effect is usually a noun.'),
  medium('One word for "a person who writes books" is', 'author', ['actor', 'editor', 'reader'], 'An author writes books.'),
  medium('The word "frugal" means', 'careful with money', ['careless', 'greedy', 'jealous'], 'A frugal person spends money carefully and avoids waste.'),

  placement('One word for "a person who loves mankind and gives help to others" is', 'philanthropist', ['pessimist', 'optimist', 'patriot'], 'A philanthropist works to improve the lives of others, often by giving money or time.'),
  placement('Choose the correctly spelt word.', 'Accommodation', ['Accomodation', 'Acommodation', 'Accomodasion'], 'The word has a double c and a double m.'),
  placement('The word "benevolent" means', 'kind and generous', ['cruel', 'careless', 'lazy'], 'The root bene means good, so benevolent means well-meaning and kind.'),
  placement('The idiom "a piece of cake" means', 'something very easy', ['something very sweet', 'something very costly', 'something very rare'], 'The phrase is used for a task that is very easy to do.'),
  placement('Choose the correct word: "The school ___ announced the results."', 'principal', ['principle', 'principals', 'principally'], 'Principal means the head of a school; principle means a rule. Here the head announces the results.'),
  placement('The word "meticulous" means', 'very careful about details', ['very careless', 'very fast', 'very loud'], 'A meticulous person pays close attention to every detail.')
];

build(chapter, quiz);
