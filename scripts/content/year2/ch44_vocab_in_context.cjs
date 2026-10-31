const { easy, medium, placement, build } = require('../lib.cjs');

const vc = (d, sentence, word, best, wrongs, expl) => d(`Use the clues in the sentence to decide the meaning of the word "${word}".\n"${sentence}"`, best, wrongs, expl);

const chapter = {
  id: 'y2-verbal-vocab-in-context', year: 2, category: 'Advanced Verbal Ability', num: 44, difficulty: 'Intermediate',
  title: 'Vocabulary in Context',
  tagline: 'Year 2 — Working out the meaning of an unfamiliar word from the clues around it',
  minutes: 45,
  overview: 'You will often meet a word you do not know. The sentence around it usually gives clues to its meaning: a definition, a synonym or antonym, an example, a contrast, or the general sense of the passage. Vocabulary-in-context questions train you to use these clues and to choose the meaning that fits. This builds the habit of learning new words from reading.',
  placement: 'Vocabulary-in-context questions are commonly asked in the verbal ability section of company aptitude rounds, especially inside reading comprehension passages.',
  realWorld: 'When you read reports, articles or documents with new words, context clues let you keep reading and understand without a dictionary.',
  objectives: [
    'Recognise the main types of context clues',
    'Use contrast and comparison words to infer meaning',
    'Use examples and explanations given in the sentence',
    'Check that the chosen meaning fits the whole sentence',
    'Use word parts and tone when clues are weak'
  ],
  prereq: ['Contextual Vocabulary', 'Synonyms and Antonyms'],
  refresher: 'Look for contrast words (but, unlike), explanation words (that is, because), examples (such as) and the positive or negative tone of the sentence.',
  defs: [
    'Context clue: information in the surrounding text that points to a word\'s meaning.',
    'Definition clue: the sentence defines the word directly.',
    'Contrast clue: the sentence contrasts the word with its opposite (unlike, but, however).',
    'Example clue: examples illustrate the word.',
    'Inference clue: the general situation suggests the meaning.'
  ],
  intuition: 'The author wants to be understood, so the sentence usually helps. Ask: what idea does the rest of the sentence express? The unknown word is probably part of the same idea or its opposite.',
  mental: 'Cover the word and guess a simple word that would fit. Then match your guess to an option. Finally, substitute the option back and check that the sentence still makes sense.',
  formulas: [
    ['Definition clue', 'The sentence explains the word', 'Look for that is, means, called.', 'Direct definitions.', 'a tentative explanation yet to be tested = hypothesis'],
    ['Contrast clue', 'But, unlike, however signal an opposite', 'Flip the meaning.', 'Contrast sentences.', 'Unlike his gregarious brother, who loved parties, he stayed alone'],
    ['Example clue', 'Examples show the kind of thing', 'Generalise from them.', 'Example sentences.', 'saved every rupee → frugal'],
    ['Cause clue', 'Because / so signals a result', 'Match cause and effect.', 'Cause-effect.', 'He was frail, so he could hardly lift a cup'],
    ['Tone clue', 'Positive or negative sense', 'Choose a word with the same tone.', 'Weak clues.', 'jubilant: cheering and dancing']
  ],
  narrative: [
    'Start with the nearest clues. In "The weather was so inclement that the match was cancelled; heavy rain and strong winds lashed the ground", the second part describes the weather, so inclement means stormy or harsh.',
    'Use contrast words. "Unlike his gregarious brother, who loved parties, Anil preferred to stay alone" tells you gregarious is the opposite of preferring to stay alone: sociable.',
    'Use examples and actions. A man who saved every rupee and never wasted money is frugal. A person who forgave late arrivals and did not punish anyone is lenient.',
    'Use the situation. "Because the instructions were ambiguous, each student interpreted them differently" means the instructions could be understood in more than one way.',
    'Finally substitute the meaning into the sentence. If it reads naturally and fits the tone, the choice is right.'
  ],
  deep: [
    ['Prefix and root help', 'Unprecedented = un (not) + precedent (something earlier). Nothing like it had happened before. Word parts support the context.'],
    ['Avoid sound-alikes', 'Do not choose a word because it sounds like the target. Meaning in context is what counts.']
  ],
  variations: [
    ['Definition clues', 'Direct explanation.', 'Hypothesis'],
    ['Contrast clues', 'Unlike, but.', 'Gregarious'],
    ['Example clues', 'Actions as examples.', 'Frugal'],
    ['Cause clues', 'So, because.', 'Frail'],
    ['Tone clues', 'Positive or negative.', 'Jubilant']
  ],
  examples: [
    {
      title: 'Contrast clue',
      q: 'Unlike his gregarious brother, who loved parties, Anil preferred to stay alone. What does "gregarious" mean?',
      given: ['Unlike … preferred to stay alone'],
      concept: 'Contrast.',
      steps: [['Clue', 'Anil prefers to be alone; the brother is unlike him.'], ['Meaning', 'Gregarious: fond of company, sociable.']],
      ans: 'sociable', why: 'The brother loved parties.', trap: 'Choosing an option similar to Anil.'
    },
    {
      title: 'Example clue',
      q: 'He was frugal; he saved every rupee and never wasted money. What does "frugal" mean?',
      given: ['saved every rupee'],
      concept: 'Examples.',
      steps: [['Examples', 'Saved every rupee, never wasted money.'], ['Meaning', 'careful with money.']],
      ans: 'careful with money', why: 'The actions define the word.', trap: 'Choosing greedy.'
    },
    {
      title: 'Cause clue',
      q: 'The old man was so frail that he could hardly lift a cup. What does "frail" mean?',
      given: ['so … that'],
      concept: 'Result.',
      steps: [['Result', 'He could hardly lift a cup.'], ['Meaning', 'weak.']],
      ans: 'weak', why: 'The result suggests weakness.', trap: 'Choosing old.'
    }
  ],
  shortcut: {
    title: 'Guess, match, substitute',
    trad: 'Recall dictionary meanings.',
    fast: 'Find the clue, guess the meaning, match it to an option, and substitute to check.',
    rules: ['Use contrast words.', 'Use examples.', 'Match the tone.', 'Check by substitution.']
  },
  mistakes: [
    ['Choosing a sound-alike', 'Picking a similar-sounding word.', 'Use the clue.'],
    ['Ignoring contrast words', 'Missing unlike/but.', 'Flip the meaning.'],
    ['Wrong tone', 'Positive for negative.', 'Match tone.'],
    ['No substitution check', 'Leaving it untested.', 'Reread.']
  ],
  tips: { sec: 25, elim: 'Eliminate options with the wrong tone first.', advice: 'Read the whole sentence.', insight: 'Most sentences contain a direct clue.' },
  revision: ['Definition, contrast, example, cause, tone.', 'Guess and match.', 'Substitute.', 'Word parts.', 'Not sound-alikes.'],
  quickFormulas: ['Clue → guess → match → check'],
  takeaways: ['Use clues.', 'Contrast.', 'Examples.', 'Substitute.'],
  selfCheck: ['Can I use an example clue?', 'Can I use a contrast clue?', 'Can I check by substitution?'],
  sources: [['Oxford Advanced Learner\'s Dictionary', 'Reference', 'Meanings of the words discussed.']]
};

const quiz = [
  vc(easy, 'The weather was so inclement that the match was cancelled; heavy rain and strong winds lashed the ground.', 'inclement', 'stormy', ['pleasant', 'mild', 'sunny'], 'Heavy rain and strong winds describe harsh, stormy weather.'),
  vc(easy, 'He was frugal; he saved every rupee and never wasted money.', 'frugal', 'careful with money', ['generous', 'wasteful', 'rich'], 'Saving every rupee shows care with money.'),
  vc(easy, 'The teacher\'s lucid explanation made the topic easy to understand.', 'lucid', 'clear', ['confusing', 'long', 'loud'], 'An explanation that makes things easy to understand is clear.'),
  vc(easy, 'She was reluctant to speak; she looked at the floor and said nothing.', 'reluctant', 'unwilling', ['eager', 'angry', 'tired'], 'Saying nothing shows unwillingness.'),
  vc(easy, 'The old man was so frail that he could hardly lift a cup.', 'frail', 'weak', ['strong', 'rich', 'tall'], 'Hardly being able to lift a cup shows weakness.'),
  vc(easy, 'The audience was jubilant when their team won, cheering and dancing.', 'jubilant', 'joyful', ['sad', 'puzzled', 'sleepy'], 'Cheering and dancing show joy.'),

  vc(medium, 'Unlike his gregarious brother, who loved parties, Anil preferred to stay alone.', 'gregarious', 'sociable', ['shy', 'angry', 'careless'], 'Loving parties contrasts with staying alone: sociable.'),
  vc(medium, 'The politician\'s speech was full of rhetoric, but it contained no concrete plans.', 'rhetoric', 'impressive language without substance', ['detailed facts', 'silence', 'plain statistics'], 'But signals that the speech lacked concrete plans, so it was fine words without substance.'),
  vc(medium, 'The detective\'s keen observation, noticing even the smallest detail, solved the case.', 'keen', 'sharp', ['dull', 'slow', 'careless'], 'Noticing the smallest detail shows sharpness.'),
  vc(medium, 'After the long drought, the farmers were desperate; their crops had withered.', 'withered', 'dried up', ['grown tall', 'ripened', 'doubled'], 'A drought dries up crops.'),
  vc(medium, 'She was an ardent supporter of the team and attended every match.', 'ardent', 'passionate', ['indifferent', 'occasional', 'reluctant'], 'Attending every match shows passion.'),
  vc(medium, 'His prudent decision to save money protected him during the crisis.', 'prudent', 'wise and careful', ['reckless', 'hasty', 'foolish'], 'A decision that protected him was wise.'),
  vc(medium, 'The manager was lenient; he forgave the late arrivals and did not punish anyone.', 'lenient', 'not strict', ['harsh', 'cruel', 'angry'], 'Forgiving and not punishing suggests leniency.'),
  vc(medium, 'The mountain was so formidable that few dared to climb it.', 'formidable', 'intimidating', ['tiny', 'friendly', 'ordinary'], 'Few dared to climb it, so it was frightening to face.'),

  vc(placement, 'The scientist\'s hypothesis, a tentative explanation yet to be tested, was published.', 'hypothesis', 'a proposed explanation to be tested', ['a proven law', 'a final result', 'a mistake'], 'The sentence itself defines it as a tentative explanation yet to be tested.'),
  vc(placement, 'Because the instructions were ambiguous, each student interpreted them differently.', 'ambiguous', 'open to more than one meaning', ['very clear', 'very short', 'very strict'], 'Different interpretations suggest the instructions could be understood in more than one way.'),
  vc(placement, 'The company\'s meagre profits barely covered the salaries.', 'meagre', 'very small', ['huge', 'steady', 'surprising'], 'Barely covering salaries shows the profits were very small.'),
  vc(placement, 'Her eloquent speech, fluent and persuasive, won the audience.', 'eloquent', 'fluent and persuasive', ['hesitant', 'silent', 'angry'], 'The sentence describes it as fluent and persuasive.'),
  vc(placement, 'The rivals\' animosity was clear; they refused even to shake hands.', 'animosity', 'strong hostility', ['friendship', 'respect', 'curiosity'], 'Refusing to shake hands shows hostility.'),
  vc(placement, 'The sudden collapse of the market was unprecedented; nothing like it had happened before.', 'unprecedented', 'never having happened before', ['expected', 'common', 'planned'], 'The sentence explains it: nothing like it had happened before.')
];
build(chapter, quiz);
