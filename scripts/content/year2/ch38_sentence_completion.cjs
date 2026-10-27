const { easy, medium, placement, build } = require('../lib.cjs');

const sc = (d, sentence, best, wrongs, expl) => d('Choose the word or pair of words that best completes the sentence.\n' + sentence, best, wrongs, expl);

const chapter = {
  id: 'y2-verbal-sentence-completion', year: 2, category: 'Advanced Verbal Ability', num: 38, difficulty: 'Intermediate',
  title: 'Sentence Completion',
  tagline: 'Year 2 — Using clue words, tone and logic to choose the right word for a blank',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/verbal-ability/questions-and-answers/',
  overview: 'A sentence-completion question has one or two blanks and four choices. The right choice makes the sentence logical, grammatical and consistent in tone. The sentence itself supplies clues: contrast words (but, although, despite, unlike), cause words (because, so, therefore), comparison words (like, as), and the general sense of the sentence. Finding the clue and the relationship it signals is the key skill.',
  placement: 'Sentence completion questions are commonly asked in the verbal ability section of company aptitude rounds, with single and double blanks.',
  realWorld: 'Choosing the right word in an email or report, so that a sentence says exactly what you intend, uses the same skill.',
  objectives: [
    'Identify the clue word that signals contrast, cause or addition',
    'Predict the missing word before looking at the options',
    'Choose between words of similar form using sense and grammar',
    'Solve double-blank sentences by testing pairs',
    'Check tone (positive/negative) and grammar'
  ],
  prereq: ['Basic Vocabulary', 'Synonyms and Antonyms', 'Advanced Tenses'],
  refresher: 'Contrast clues (but, although, despite, unlike, however) tell you the blank is opposite to a nearby idea. Cause clues (because, so, since) tell you the blank follows logically from another idea.',
  defs: [
    'Clue: a word or phrase in the sentence that signals the meaning of the blank.',
    'Contrast signal: although, but, despite, unlike, however, far from.',
    'Cause/result signal: because, so … that, therefore, thus.',
    'Double blank: two missing words that must work together.',
    'Tone: the positive or negative feeling of a word.'
  ],
  intuition: 'The sentence almost writes the answer for you. If it says "Although the exam was difficult…", the next idea must run against "difficult", so a positive outcome (passed) fits. Predicting the word first protects you from attractive but wrong options.',
  mental: 'Cover the options, read the sentence, and guess the missing word in your own words. Then look for the option closest to your guess and test it for grammar and tone.',
  formulas: [
    ['Contrast', 'Although / despite / but / unlike signals the opposite idea', 'Flip the tone.', 'Contrast sentences.', 'Although difficult, most passed'],
    ['Cause', 'Because / so … that / since signals a logical reason or result', 'Match cause and effect.', 'Cause-effect sentences.', 'So heavy that the match was postponed'],
    ['Comparison', 'Like / as / than signals similarity or difference', 'Look at both sides.', 'Comparison sentences.', 'Unlike his talkative brother, Arun is quiet'],
    ['Paired words', 'Not only … but also;  neither … nor;  either … or', 'Learn the pairs.', 'Conjunction blanks.', 'He neither smokes nor drinks'],
    ['Double blanks', 'Test each option pair in the sentence', 'Both must make sense together.', 'Two-blank questions.', 'Despite the heavy weather, the match continued']
  ],
  narrative: [
    'Look for the clue. In "The rain was so heavy that the match had to be ___", the cause (heavy rain) points to the result: postponed. In "Although the exam was difficult, most students ___ it", although signals a contrast, so most students passed it.',
    'In a double-blank sentence, test each pair. "Despite the ___ weather, the match ___ as scheduled" needs a contrast: heavy weather and continued. The pair pleasant … continued would not need "despite", and heavy … stopped would not contrast.',
    'Comparison words help. "Unlike his ___ brother, Arun is quiet and reserved" needs the opposite of quiet: talkative.',
    'Check grammatical fit. "Not only intelligent ___ hardworking" needs but also. "He neither smokes ___ drinks" needs nor. "The more he practised, ___ he became" needs the better.',
    'Always reread the full sentence with your choice to check tone and sense. If the sentence sounds odd, try the next best option.'
  ],
  deep: [
    ['Tone matching', 'Positive and negative words must agree with the sentence. A sentence describing an angry response needs words like harsh or hostile, not gentle.'],
    ['Idiomatic pairs', 'Some answers are decided by fixed pairs (not only … but also, neither … nor, hardly … when) rather than meaning alone.']
  ],
  variations: [
    ['Cause and effect', 'So … that.', 'Heavy rain, match ___'],
    ['Contrast', 'Although, despite.', 'Although difficult, ___'],
    ['Comparison', 'Unlike, like.', 'Unlike his ___ brother'],
    ['Paired conjunctions', 'Not only … but also.', 'Neither … nor'],
    ['Double blanks', 'Pairs.', 'Despite the ___ weather, ___']
  ],
  examples: [
    {
      title: 'Contrast clue',
      q: 'Although the exam was difficult, most students ___ it. (passed / feared / failed / skipped)',
      given: ['Clue: although'],
      concept: 'Contrast.',
      steps: [['Signal', 'Although introduces a contrast with "difficult".'], ['Predict', 'Most students did well: passed.']],
      ans: 'passed', why: 'The result goes against the difficulty.', trap: 'Choosing failed.'
    },
    {
      title: 'Double blank',
      q: 'Despite the ___ weather, the match ___ as scheduled.',
      given: ['Clue: despite'],
      concept: 'Test pairs.',
      steps: [['Signal', 'Despite means the match went on although the weather was bad.'], ['Pair', 'heavy … continued.']],
      ans: 'heavy … continued', why: 'The pair shows the contrast.', trap: 'Choosing pleasant … continued.'
    },
    {
      title: 'Paired conjunction',
      q: 'She is not only intelligent ___ hardworking.',
      given: ['not only …'],
      concept: 'Fixed pair.',
      steps: [['Pattern', 'Not only … but also.'], ['Choose', 'but also.']],
      ans: 'but also', why: 'The pair is fixed.', trap: 'Using and.'
    }
  ],
  shortcut: {
    title: 'Predict, then match',
    trad: 'Try every option.',
    fast: 'Find the clue, predict the word, match the closest option, and check grammar and tone.',
    rules: ['Contrast words flip the tone.', 'Cause words link logic.', 'Test double-blank pairs.', 'Reread the full sentence.']
  },
  mistakes: [
    ['Ignoring the clue word', 'Choosing by sound.', 'Find although/because/unlike.'],
    ['Wrong tone', 'Positive for a negative context.', 'Check tone.'],
    ['Choosing one word of a pair', 'Testing only one blank.', 'Test the pair.'],
    ['Skipping grammar', 'Wrong form.', 'Reread.']
  ],
  tips: { sec: 30, elim: 'Eliminate options with the wrong tone first.', advice: 'Always predict first.', insight: 'Clue words appear in most sentences.' },
  revision: ['Clue words.', 'Predict.', 'Tone.', 'Paired words.', 'Reread.'],
  quickFormulas: ['not only … but also', 'neither … nor'],
  takeaways: ['Find the clue.', 'Predict.', 'Check tone.', 'Test pairs.'],
  selfCheck: ['Can I use although as a clue?', 'Can I test a double blank?', 'Can I choose the right paired word?'],
  sources: [['High School English Grammar and Composition — Wren & Martin', 'Textbook', 'Conjunctions and sentence structure; examples are original.']]
};

const quiz = [
  sc(easy, 'The rain was so heavy that the match had to be ___.', 'postponed', ['started', 'won', 'enjoyed'], 'Heavy rain led to the match being postponed.'),
  sc(easy, 'She was ___ by the news and could not speak.', 'stunned', ['bored', 'delighted', 'ignored'], 'Being unable to speak suggests shock: stunned.'),
  sc(easy, 'He is a ___ student; he never misses a class.', 'diligent', ['careless', 'lazy', 'rude'], 'Never missing a class suggests hard work: diligent.'),
  sc(easy, 'The shop was closed ___ it was a holiday.', 'because', ['although', 'unless', 'but'], 'The holiday is the reason for the closure: because.'),
  sc(easy, 'Ravi ___ his work before leaving.', 'finished', ['finishing', 'finish', 'finishes'], 'The past tense fits "before leaving": finished.'),
  sc(easy, 'The medicine was ___ and cured his fever quickly.', 'effective', ['useless', 'harmful', 'tasteless'], 'It cured the fever, so it was effective.'),

  sc(medium, 'Although the exam was difficult, most students ___ it.', 'passed', ['feared', 'failed', 'skipped'], 'Although signals contrast with "difficult": passed.'),
  sc(medium, 'The new policy was ___ by everyone, so it was cancelled.', 'opposed', ['welcomed', 'praised', 'supported'], 'Cancellation follows opposition.'),
  sc(medium, 'His ___ speech moved the audience to tears.', 'emotional', ['boring', 'short', 'noisy'], 'Moving the audience to tears suggests an emotional speech.'),
  sc(medium, 'Despite the ___ weather, the match ___ as scheduled.', 'heavy … continued', ['pleasant … continued', 'heavy … stopped', 'pleasant … stopped'], 'Despite shows contrast: bad weather but the match went on.'),
  sc(medium, 'She spoke so ___ that no one could hear her.', 'softly', ['loudly', 'clearly', 'angrily'], 'No one could hear, so she spoke softly.'),
  sc(medium, 'He was ___ for his honesty and was often trusted.', 'respected', ['punished', 'ignored', 'feared'], 'Being trusted for honesty suggests being respected.'),
  sc(medium, 'The thief ran away ___ the police arrived.', 'before', ['unless', 'so', 'if'], 'The escape happened earlier than the arrival: before.'),
  sc(medium, 'The company\'s profits have ___ steadily over the last five years, and the shareholders are happy.', 'increased', ['declined', 'vanished', 'frozen'], 'Happy shareholders suggest rising profits.'),

  sc(placement, 'Far from being ___, the proposal was met with ___.', 'rejected … enthusiasm', ['accepted … enthusiasm', 'rejected … hostility', 'accepted … hostility'], '"Far from" signals the opposite of expectation: not rejected, but greeted with enthusiasm.'),
  sc(placement, 'The scientist\'s claims were so ___ that even his colleagues ___ them.', 'outrageous … doubted', ['reasonable … doubted', 'outrageous … accepted', 'reasonable … rejected'], 'Outrageous claims lead even colleagues to doubt them.'),
  sc(placement, 'Unlike his ___ brother, Arun is quiet and reserved.', 'talkative', ['shy', 'quiet', 'silent'], 'Unlike signals contrast with quiet: talkative.'),
  sc(placement, 'The more he practised, ___ he became.', 'the better', ['the worse', 'the slower', 'the lazier'], 'The more … the better is the standard pattern.'),
  sc(placement, 'She is not only intelligent ___ hardworking.', 'but also', ['and also', 'also but', 'or'], 'The fixed pair is not only … but also.'),
  sc(placement, 'He neither smokes ___ drinks.', 'nor', ['or', 'and', 'but'], 'The fixed pair is neither … nor.')
];
build(chapter, quiz);
