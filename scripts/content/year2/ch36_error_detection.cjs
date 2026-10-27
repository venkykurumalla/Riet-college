const { easy, medium, placement, build } = require('../lib.cjs');

const L = ['A', 'B', 'C'];
// parts: sentence split into three parts; err: index of the faulty part, or -1 for "No error".
const ed = (d, parts, err, expl) => {
  const text = 'Find the part of the sentence that has an error.\n' + parts.map((p, i) => `(${L[i]}) ${p}`).join('  ') + '  (D) No error';
  const opts = ['Part A', 'Part B', 'Part C', 'No error'];
  const correct = err < 0 ? 'No error' : 'Part ' + L[err];
  return d(text, correct, opts.filter(o => o !== correct), expl);
};

const chapter = {
  id: 'y2-verbal-error-detection', year: 2, category: 'Advanced Verbal Ability', num: 36, difficulty: 'Intermediate',
  title: 'Error Detection',
  tagline: 'Year 2 — Locating the grammatical error in a sentence divided into parts',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/verbal-ability/spotting-errors/',
  overview: 'In an error-detection (spotting errors) question, a sentence is divided into three or four parts and you must find the part that contains a grammatical error, or say that there is no error. Because the answer is just the part and not a correction, the skill is rapid recognition of the common error types: agreement, tense, preposition, article, pronoun, adjective/adverb, comparison and word choice. A fixed checklist makes this reliable.',
  placement: 'Error-detection questions are commonly asked in the verbal ability section of company aptitude rounds, usually in sets of five.',
  realWorld: 'Proofreading emails, reports and presentations before sending uses the same checklist.',
  objectives: [
    'Apply an error checklist in a fixed order',
    'Spot subject-verb disagreement, including with phrases between subject and verb',
    'Spot wrong prepositions, double comparatives and incorrect conjunctions',
    'Recognise correct sentences ("no error")',
    'Spot errors in conditionals and reported speech'
  ],
  prereq: ['Subject-Verb Agreement', 'Basic Sentence Correction', 'Advanced Tenses'],
  refresher: 'Agreement, tense, preposition, article, pronoun case, adjective/adverb, comparison, conjunction, word order, redundancy.',
  defs: [
    'Error detection: identifying the faulty part of a sentence without correcting it.',
    'Part: a segment of the sentence marked A, B or C; option D usually reads "No error".',
    'Common errors: agreement, tense, preposition, article, pronoun, comparison, conjunction.',
    'Redundancy: needless repetition (return back, repeat again).',
    'No error: the sentence is grammatically correct as written.'
  ],
  intuition: 'The error is usually small and sits in one word. Reading the sentence aloud in your head and then testing each part against the checklist is faster than rereading for "feel". About a fifth of such questions have no error, so do not assume every sentence is wrong.',
  mental: 'Check in this order: subject and verb agreement, tense and verb form, prepositions and articles, pronouns, adjectives and adverbs, comparatives, conjunctions. Stop when you find the fault.',
  formulas: [
    ['Agreement check', 'Find the real subject; match singular/plural', 'Ignore phrases between subject and verb.', 'Agreement errors.', 'The quality of the products has improved'],
    ['Form after helpers', 'do/does/did + V1; has/have/had + V3; to + V1 (but look forward to + -ing)', 'Base form and participle.', 'Verb-form errors.', 'He did not come'],
    ['Fixed pairs', 'prefer X to Y; senior to; look forward to + -ing; despite (no of)', 'Memorised pairs.', 'Preposition errors.', 'prefers tea to coffee'],
    ['Comparison', 'No more + -er; than not then', 'One marker only.', 'Comparison errors.', 'smarter than'],
    ['Conjunction pairs', 'Although … (no but);  Hardly … when;  No sooner … than', 'Do not double the conjunction.', 'Conjunction errors.', 'Although it rained, we went out']
  ],
  narrative: [
    'Work through the checklist. Read each part and ask: does the verb agree with its subject? In "The children is playing", the plural subject children needs are. In "Each of the boys have a bicycle", the subject is each (singular), so has.',
    'Check verb forms and fixed phrases. "He go to school" needs goes. "I look forward to meet you" needs meeting, because to is a preposition here. "She prefers tea than coffee" needs to coffee.',
    'Check conjunctions and comparisons. "Although it rained, but we went out" has a double conjunction: remove but. "He is more smarter" has a double comparative.',
    'Check reported speech and conditionals. "He asked me that where I lived" must be "He asked me where I lived". "If I would have known" must be "If I had known".',
    'Finally, if every part passes the checklist, choose "No error". A sentence such as "Hardly had he arrived when the train left" is correct.'
  ],
  deep: [
    ['Relative pronoun agreement', '"She is one of those who always arrives early": who refers to those (plural), so the verb should be arrive.'],
    ['As well as', 'In "The teacher as well as the students was present", the verb agrees with the first subject, teacher, not with students.']
  ],
  variations: [
    ['Agreement errors', 'Subject and verb.', 'The children is playing'],
    ['Preposition and fixed pair errors', 'Prefer, look forward.', 'Prefers tea than coffee'],
    ['Conjunction and comparison errors', 'Although … but.', 'More smarter'],
    ['Conditional and reported speech errors', 'Tense patterns.', 'If I would have known'],
    ['No error sentences', 'Correct sentences.', 'Hardly had he arrived']
  ],
  examples: [
    {
      title: 'Agreement error',
      q: 'Find the error: (A) The children (B) is playing (C) in the garden. (D) No error',
      given: ['Parts A, B, C'],
      concept: 'Check subject-verb agreement.',
      steps: [['Subject', 'Children is plural.'], ['Verb', '"Is" is singular, so Part B is wrong: are playing.']],
      ans: 'Part B', why: 'Plural subjects take are.', trap: 'Marking "No error".'
    },
    {
      title: 'Fixed pair',
      q: 'Find the error: (A) She prefers (B) tea than (C) coffee. (D) No error',
      given: ['Parts A, B, C'],
      concept: 'Prefer X to Y.',
      steps: [['Pair', 'The correct construction is prefer … to.'], ['Faulty part', 'Part B (than should be to).']],
      ans: 'Part B', why: 'Prefer is followed by to, not than.', trap: 'Choosing Part A.'
    },
    {
      title: 'No error',
      q: 'Find the error: (A) Hardly had he arrived (B) when the (C) train left. (D) No error',
      given: ['Parts A, B, C'],
      concept: 'Hardly had … when.',
      steps: [['Check', 'Hardly had + S + V3 + when is correct.'], ['Conclusion', 'Every part passes the checklist.']],
      ans: 'No error', why: 'The sentence is grammatical.', trap: 'Forcing an error.'
    }
  ],
  shortcut: {
    title: 'Checklist in order',
    trad: 'Reread until something feels wrong.',
    fast: 'Agreement → verb form → preposition/article → pronoun → comparison → conjunction. Stop at the first fault; if none, choose No error.',
    rules: ['Strike out phrases between subject and verb.', 'Learn fixed pairs.', 'No double conjunctions or comparatives.', 'Allow for "No error".']
  },
  mistakes: [
    ['Assuming every sentence has an error', 'Ignoring option D.', 'Check the whole checklist first.'],
    ['Marking the wrong part', 'Choosing the word near the error.', 'Identify the exact faulty word.'],
    ['Missing agreement errors', 'Reading the phrase near the verb.', 'Find the real subject.'],
    ['Ignoring fixed pairs', 'Overlooking prefer to.', 'Revise the lists.']
  ],
  tips: { sec: 30, elim: 'Mark parts that pass the checklist and eliminate them.', advice: 'Practice with the checklist daily.', insight: 'Five common errors cover most questions.' },
  revision: ['Checklist order.', 'Fixed pairs.', 'Double markers.', 'No error possible.', 'Real subject.'],
  quickFormulas: ['prefer to', 'look forward to + -ing'],
  takeaways: ['Use a checklist.', 'Find the real subject.', 'Learn pairs.', 'Allow No error.'],
  selfCheck: ['Can I spot a double conjunction?', 'Can I spot a wrong fixed pair?', 'Can I recognise a correct sentence?'],
  sources: [['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'Common errors; examples are original.']]
};

const quiz = [
  ed(easy, ['He go', 'to school', 'every day.'], 0, '"He" is third person singular, so the verb should be goes.'),
  ed(easy, ['The children', 'is playing', 'in the garden.'], 1, 'Children is plural, so are playing.'),
  ed(easy, ['She has', 'a good', 'knowledges.'], 2, 'Knowledge is uncountable and has no plural form.'),
  ed(easy, ['I am', 'agree with', 'your opinion.'], 1, 'Agree is a verb; "am agree" should be "agree".'),
  ed(easy, ['Each of the boys', 'have', 'a bicycle.'], 1, 'Each is singular, so has.'),
  ed(easy, ['He is', 'senior than', 'me.'], 1, 'Senior is followed by to: senior to me.'),

  ed(medium, ['Neither of the two', 'answers are', 'correct.'], 1, 'Neither is singular, so the verb should be is.'),
  ed(medium, ['Hardly had he arrived', 'when the', 'train left.'], -1, 'The sentence is correct: Hardly had … when.'),
  ed(medium, ['I look forward', 'to meet', 'you soon.'], 1, 'After look forward to, use -ing: meeting.'),
  ed(medium, ['She prefers', 'tea than', 'coffee.'], 1, 'Prefer takes to, not than.'),
  ed(medium, ['The news', 'were', 'shocking.'], 1, 'News is uncountable and singular: was.'),
  ed(medium, ['Although it rained,', 'but we', 'went out.'], 1, 'Although and but should not be used together; remove but.'),
  ed(medium, ['He asked me', 'that where', 'I lived.'], 1, 'A reported question takes no "that": where I lived.'),
  ed(medium, ['Despite of', 'the rain,', 'we went out.'], 0, 'Despite is not followed by of: despite the rain, or in spite of the rain.'),

  ed(placement, ['If I', 'would have known,', 'I would have told you.'], 1, 'Type 3 conditional: if I had known.'),
  ed(placement, ['The quality of', 'the products', 'have improved.'], 2, 'The subject quality is singular, so has improved.'),
  ed(placement, ['She has been', 'living here', 'since 2010.'], -1, 'The present perfect continuous with since is correct.'),
  ed(placement, ['Between you', 'and I,', 'the plan is risky.'], 1, 'After a preposition use me: between you and me.'),
  ed(placement, ['He is more', 'smarter', 'than his brother.'], 1, 'Double comparative: smarter than, or more intelligent than.'),
  ed(placement, ['The teacher', 'as well as', 'the students were present.'], 2, 'The verb agrees with the first subject (the teacher): was present.')
];
build(chapter, quiz);
