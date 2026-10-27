const { easy, medium, placement, build } = require('../lib.cjs');

const si = (d, sentence, best, wrongs, expl) => d('Choose the best replacement for the part in [brackets]. If the sentence is already correct, choose "No improvement".\n' + sentence, best, wrongs, expl);

const chapter = {
  id: 'y2-verbal-sentence-improvement', year: 2, category: 'Advanced Verbal Ability', num: 37, difficulty: 'Intermediate',
  title: 'Sentence Improvement',
  tagline: 'Year 2 — Replacing a faulty part of a sentence with the best alternative',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/verbal-ability/sentence-improvement/',
  overview: 'In a sentence-improvement question, part of the sentence is marked and four alternatives are offered: usually one of them repeats the original ("No improvement") and the others are possible replacements. You choose the version that makes the sentence grammatically correct, clear and natural. The skill is similar to error detection, but you must also choose the right correction among close alternatives.',
  placement: 'Sentence improvement questions are commonly asked in the verbal ability section of company aptitude rounds, along with error detection and sentence completion.',
  realWorld: 'Editing a draft, rewriting a clumsy sentence and polishing an email use the same judgement.',
  objectives: [
    'Identify the error type in the marked part',
    'Choose the correction that fits the rest of the sentence',
    'Recognise when the sentence is already correct',
    'Keep the meaning unchanged while correcting the grammar',
    'Avoid introducing new errors'
  ],
  prereq: ['Error Detection', 'Advanced Tenses', 'Subject-Verb Agreement'],
  refresher: 'Use the same checklist as in error detection: agreement, tense and verb form, preposition, article, pronoun, comparison, conjunction.',
  defs: [
    'Underlined (bracketed) part: the portion that may be replaced.',
    'No improvement: the option that repeats the original part; correct if the sentence is already right.',
    'Meaning-preserving correction: the replacement must keep the original meaning.',
    'Parallel structure: items in a list or comparison should have the same grammatical form.',
    'Redundancy: needless words that repeat an idea.'
  ],
  intuition: 'Read the whole sentence first, then read it again with each alternative in place of the bracketed part. The best alternative gives a correct sentence with the same meaning. If the original reads correctly, "No improvement" is the answer.',
  mental: 'Identify the error type from the bracketed part, think of the correct form, and then look for it among the options. Eliminate options that introduce a new error.',
  formulas: [
    ['Agreement', 'Subject and verb must match in number', 'Check the real subject.', 'Agreement corrections.', 'The cost of the repairs has increased'],
    ['Verb form', 'did + V1; had + V3; to + V1 / -ing after a preposition', 'Base form or participle.', 'Verb corrections.', 'He did not come'],
    ['Fixed pairs', 'prefer to; good at; senior to; look forward to + -ing', 'Learn them.', 'Preposition corrections.', 'good at maths'],
    ['Comparison', 'Comparative for two, superlative for three or more', 'Better of two, best of three.', 'Comparison corrections.', 'the better of the two'],
    ['Conjunction patterns', 'No sooner … than; hardly … when; the reason is that', 'Fixed pairs.', 'Conjunction corrections.', 'No sooner had she left than it rained']
  ],
  narrative: [
    'Work out what is wrong with the bracketed part. In "She [don\'t like] tea", the subject she needs doesn\'t. In "They [was playing] football", the plural subject needs were playing.',
    'Check fixed expressions. "I look forward [to meet] you" needs to meeting you. "She is good [in] maths" needs at. "The reason is [because] he was late" needs that.',
    'Check comparisons. "He is the best of the two" should be "the better of the two", since a comparison of two takes the comparative. Double comparatives such as more taller are wrong.',
    'Check conjunction patterns. "No sooner had she left [when] it rained" needs than; "Hardly had he reached [than] the train left" needs when.',
    'If the part is already correct, select "No improvement". When two options look correct, choose the one that keeps the original meaning and the simplest grammar.'
  ],
  deep: [
    ['Do not over-correct', 'Some alternatives change the meaning or are stylistically heavier. Choose the minimal correction that fixes the error.'],
    ['Check the full sentence', 'A replacement may fix the marked part but clash with another word. Always read the full sentence with your choice.']
  ],
  variations: [
    ['Agreement fixes', 'Subject and verb.', 'The cost … have increased'],
    ['Verb-form fixes', 'After auxiliaries.', 'did not came'],
    ['Preposition fixes', 'Fixed pairs.', 'good in maths'],
    ['Comparison fixes', 'Better/best.', 'the best of the two'],
    ['Conjunction fixes', 'than/when/that.', 'No sooner … when']
  ],
  examples: [
    {
      title: 'Verb form',
      q: 'He [did not came] yesterday.',
      given: ['Bracketed: did not came'],
      concept: 'After did not, use the base form.',
      steps: [['Spot', '"Did not" already carries the past tense.'], ['Correct', 'did not come.']],
      ans: 'did not come', why: 'The base form follows did.', trap: 'Choosing "did not comes".'
    },
    {
      title: 'Comparison',
      q: 'He is [the best of the two] brothers.',
      given: ['Bracketed: the best of the two'],
      concept: 'Two items: comparative.',
      steps: [['Count', 'Two brothers are compared.'], ['Correct', 'the better of the two.']],
      ans: 'the better of the two', why: 'The superlative is for three or more.', trap: 'Keeping best.'
    },
    {
      title: 'Conjunction pair',
      q: 'No sooner had she left [when] it rained.',
      given: ['Bracketed: when'],
      concept: 'No sooner … than.',
      steps: [['Pattern', 'No sooner takes than.'], ['Correct', 'than.']],
      ans: 'than', why: 'Hardly takes when, no sooner takes than.', trap: 'Swapping the two.'
    }
  ],
  shortcut: {
    title: 'Name the error, then match',
    trad: 'Try each option in the sentence.',
    fast: 'Name the error type, form the correct word yourself, and then find it among the options.',
    rules: ['Minimal correction.', 'Check the whole sentence.', 'Allow No improvement.', 'Same meaning.']
  },
  mistakes: [
    ['Over-correcting', 'Changing correct parts.', 'Choose No improvement when right.'],
    ['Introducing a new error', 'Fixing agreement but breaking tense.', 'Read the whole sentence.'],
    ['Changing the meaning', 'Choosing a different idea.', 'Preserve meaning.'],
    ['Ignoring fixed pairs', 'Missing than/when/that.', 'Learn them.']
  ],
  tips: { sec: 30, elim: 'Eliminate options that repeat the error.', advice: 'Name the error before looking at options.', insight: 'Close options usually differ in one word.' },
  revision: ['Name the error.', 'Fixed pairs.', 'Comparatives.', 'No improvement.', 'Whole-sentence check.'],
  quickFormulas: ['better of two, best of three'],
  takeaways: ['Correct the error.', 'Keep the meaning.', 'Check the sentence.', 'Allow No improvement.'],
  selfCheck: ['Can I correct "did not came"?', 'Can I choose better/best?', 'Can I choose than/when?'],
  sources: [['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'Corrections of common errors; examples are original.']]
};

const quiz = [
  si(easy, 'She [don\'t like] tea.', 'doesn\'t like', ['do not likes', 'don\'t likes', 'No improvement'], 'The subject she is third person singular, so doesn\'t like.'),
  si(easy, 'They [was playing] football.', 'were playing', ['are play', 'is playing', 'No improvement'], 'The plural subject they needs were.'),
  si(easy, 'He is [more taller] than me.', 'taller', ['most taller', 'tallest', 'No improvement'], 'A double comparative is wrong; taller than.'),
  si(easy, 'I [has] a car.', 'have', ['having', 'had have', 'No improvement'], 'The subject I takes have.'),
  si(easy, 'The sun [rise] in the east.', 'rises', ['rising', 'rose', 'No improvement'], 'A universal truth takes the simple present, third person singular: rises.'),
  si(easy, 'She is good [in] maths.', 'at', ['on', 'with', 'No improvement'], 'Good at is the fixed pair for a skill.'),

  si(medium, 'I look forward [to meet] you soon.', 'to meeting', ['for meeting', 'to meets', 'No improvement'], 'In look forward to, to is a preposition followed by -ing.'),
  si(medium, 'If he [would have] time, he would come.', 'had', ['has', 'will have', 'No improvement'], 'Type 2 conditional: if + past.'),
  si(medium, 'She [said me] that she was late.', 'told me', ['told to me', 'said to', 'No improvement'], 'Tell takes a direct object: told me.'),
  si(medium, 'Neither of them [are] ready.', 'is', ['were', 'have been', 'No improvement'], 'Neither is singular.'),
  si(medium, 'I have been living here [since five years].', 'for five years', ['from five years', 'five years ago', 'No improvement'], 'For is used with a length of time.'),
  si(medium, 'He is [the best of the two] brothers.', 'the better of the two', ['best of two', 'better than two', 'No improvement'], 'Two items take the comparative.'),
  si(medium, 'The cost of the repairs [have] increased.', 'has', ['are', 'were', 'No improvement'], 'The subject cost is singular.'),
  si(medium, 'The reason is [because] he was late.', 'that', ['for', 'since', 'No improvement'], '"The reason is because" is redundant; use that.'),

  si(placement, 'He [did not came] yesterday.', 'did not come', ['did not comes', 'has not come', 'No improvement'], 'After did not, the base form is used.'),
  si(placement, 'No sooner had she left [when] it rained.', 'than', ['that', 'then', 'No improvement'], 'No sooner takes than.'),
  si(placement, 'One of my friends [are] a doctor.', 'is', ['were', 'have been', 'No improvement'], 'The subject is one, which is singular.'),
  si(placement, 'I wish I [was] taller.', 'were', ['am', 'will be', 'No improvement'], 'An unreal wish takes were.'),
  si(placement, 'The teacher, along with his students, [were] present.', 'was', ['are', 'have been', 'No improvement'], 'The verb agrees with the teacher, so was.'),
  si(placement, 'Hardly had he reached [than] the train left.', 'when', ['then', 'that', 'No improvement'], 'Hardly takes when.')
];
build(chapter, quiz);
