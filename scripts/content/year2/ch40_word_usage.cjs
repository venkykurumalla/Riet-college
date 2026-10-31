const { easy, medium, placement, build } = require('../lib.cjs');

const wu = (d, sentence, best, wrongs, expl) => d('Choose the word that fits naturally in the blank.\n' + sentence, best, wrongs, expl);

const chapter = {
  id: 'y2-verbal-word-usage', year: 2, category: 'Advanced Verbal Ability', num: 40, difficulty: 'Intermediate',
  title: 'Word Usage and Collocations',
  tagline: 'Year 2 — Which words go together: make/do, heavy/strong and fixed phrases',
  minutes: 45,
  overview: 'A collocation is a pair or group of words that naturally go together. English speakers say "make a decision", not "do a decision", and "heavy rain", not "strong rain". These combinations are fixed by usage, not by logic, so they have to be learned. Word-usage questions test whether you know which word naturally accompanies another, and they also cover correct choices among similar words and prepositions.',
  placement: 'Word usage and collocation questions are commonly asked in the verbal ability section of company aptitude rounds, often in fill-in-the-blank form.',
  realWorld: 'Natural collocations make emails and reports sound fluent and professional; unnatural ones read as non-native.',
  objectives: [
    'Use common verb collocations (make, do, take, have, give, pay)',
    'Use adjective + noun collocations (heavy rain, strong tea)',
    'Use adverb + adjective collocations (bitterly cold, fully aware)',
    'Use group nouns (flock of sheep, herd of cattle)',
    'Use fixed phrases and phrasal verbs'
  ],
  prereq: ['Basic Vocabulary', 'Prepositions'],
  refresher: 'Learn words in chunks, not alone. When you meet a new noun, note which verb and adjective go with it.',
  defs: [
    'Collocation: a combination of words that frequently occur together and sound natural.',
    'Verb + noun collocation: make a decision, do homework, take a break, pay attention, commit a crime.',
    'Adjective + noun collocation: heavy rain, strong tea, a bitter disappointment.',
    'Adverb + adjective collocation: bitterly cold, fully aware, deeply grateful.',
    'Group noun: a word naming a group of animals or things (a flock of sheep, a herd of cattle).'
  ],
  intuition: 'Collocations are habits of the language. If you have often heard "heavy rain", then "strong rain" sounds wrong even though "strong" and "heavy" can both mean powerful. The only way to master them is repeated exposure, so learn them in phrases.',
  mental: 'When you see a blank next to a noun, ask "what verb or adjective do I usually say with this noun?" If you recall the phrase in a familiar sentence, you have the answer.',
  formulas: [
    ['Make vs do', 'make: a decision, a mistake, a promise, progress;  do: homework, a favour, the dishes, business', 'Make = create; do = perform tasks.', 'Verb choice.', 'make a decision; do homework'],
    ['Take vs have', 'take: a break, a chance, a look, a decision (UK);  have: a break, a meal, a look', 'Both are common; pick the standard one.', 'Verb choice.', 'take a break'],
    ['Adjective + noun', 'heavy rain, strong tea, heavy smoker, deep sleep, high price', 'Fixed pairs.', 'Adjective choice.', 'heavy rain'],
    ['Adverb + adjective', 'bitterly cold, fully aware, deeply grateful, highly successful', 'Fixed pairs.', 'Adverb choice.', 'fully aware'],
    ['Group nouns', 'a flock of sheep/birds, a herd of cattle, a pack of wolves, a swarm of bees', 'Learn the standard ones.', 'Group questions.', 'a flock of sheep']
  ],
  narrative: [
    'Start with the verb collocations. We make a decision, a mistake, a promise and progress, but we do homework, a favour and business. We pay attention, commit a crime, keep a promise, take a break and reach an agreement.',
    'Adjective collocations: rain is heavy, tea is strong, a smoker is heavy, and sleep is deep. Adverb collocations: it is bitterly cold, we are fully aware, he is deeply grateful.',
    'Group nouns are learned as pairs: a flock of sheep, a herd of cattle, a pack of wolves, a swarm of bees. A "piece of advice" and "a piece of information" use piece with uncountable nouns.',
    'Phrasal and fixed expressions: a meeting is called off (cancelled); a stroke of luck is a sudden piece of good fortune; we find a solution and reach an agreement.',
    'When two options seem acceptable, choose the one that is most common in everyday use. Revise collocations in lists and in sentences rather than as single words.'
  ],
  deep: [
    ['Prepositions are collocations too', 'Fond of, good at, interested in, afraid of are fixed pairs. A different preposition sounds wrong even though the meaning is clear.'],
    ['British and American usage', 'Some collocations differ: take a decision (British) vs make a decision (American). In exams, the standard form is "make a decision".']
  ],
  variations: [
    ['Verb collocations', 'Make, do, take, pay.', 'make a decision'],
    ['Adjective collocations', 'Heavy, strong.', 'heavy rain'],
    ['Adverb collocations', 'Bitterly, fully.', 'bitterly cold'],
    ['Group nouns', 'Flock, herd.', 'a flock of sheep'],
    ['Fixed phrases', 'Piece, stroke.', 'a piece of advice']
  ],
  examples: [
    {
      title: 'Verb collocation',
      q: 'He ___ a decision after long thought. (made / did / gave / held)',
      given: ['Options: made, did, gave, held'],
      concept: 'Make a decision.',
      steps: [['Recall', 'We make decisions.'], ['Choose', 'made.']],
      ans: 'made', why: 'Do is for tasks and duties.', trap: 'Choosing did.'
    },
    {
      title: 'Adjective collocation',
      q: 'There was ___ rain last night. (heavy / strong / big / tall)',
      given: ['Options: heavy, strong, big, tall'],
      concept: 'Heavy rain.',
      steps: [['Recall', 'Rain is described as heavy.'], ['Choose', 'heavy.']],
      ans: 'heavy', why: 'Strong goes with tea.', trap: 'Choosing strong.'
    },
    {
      title: 'Group noun',
      q: 'A ___ of sheep was grazing on the hill. (flock / herd / pack / swarm)',
      given: ['Options: flock, herd, pack, swarm'],
      concept: 'Group nouns.',
      steps: [['Recall', 'Sheep form a flock.'], ['Choose', 'flock.']],
      ans: 'flock', why: 'Herd is for cattle.', trap: 'Choosing herd.'
    }
  ],
  shortcut: {
    title: 'Chunk recall',
    trad: 'Reason from meaning.',
    fast: 'Say the phrase in a familiar sentence. If it sounds right, choose it.',
    rules: ['Learn collocations in phrases.', 'Make creates; do performs.', 'Heavy rain, strong tea.', 'Group nouns: flock, herd.']
  },
  mistakes: [
    ['Translating word for word', 'Using logical but unnatural words.', 'Use the standard collocation.'],
    ['Confusing make and do', 'Choosing by meaning only.', 'Learn the lists.'],
    ['Wrong group noun', 'Mixing flock and herd.', 'Learn pairs.'],
    ['Wrong preposition', 'Changing a fixed pair.', 'Learn pairs.']
  ],
  tips: { sec: 20, elim: 'Eliminate options that sound unfamiliar with the noun.', advice: 'Read English regularly.', insight: 'Collocation questions are very fast if you know the phrase.' },
  revision: ['Make vs do.', 'Heavy rain, strong tea.', 'Bitterly cold.', 'Flock, herd.', 'Fixed phrases.'],
  quickFormulas: ['make a decision', 'do homework'],
  takeaways: ['Learn chunks.', 'Say the phrase.', 'Standard usage.', 'Revise lists.'],
  selfCheck: ['Can I use make and do correctly?', 'Can I choose heavy or strong?', 'Can I choose flock or herd?'],
  sources: [['Oxford Collocations Dictionary', 'Reference', 'Common collocations discussed here.']]
};

const quiz = [
  wu(easy, 'He ___ a decision after long thought.', 'made', ['did', 'gave', 'held'], 'We make a decision.'),
  wu(easy, 'She ___ her homework before dinner.', 'did', ['made', 'took', 'had'], 'We do homework.'),
  wu(easy, 'There was ___ rain last night.', 'heavy', ['strong', 'big', 'tall'], 'We say heavy rain.'),
  wu(easy, 'I would like a cup of ___ tea.', 'strong', ['heavy', 'powerful', 'hard'], 'We say strong tea.'),
  wu(easy, 'Please ___ attention in class.', 'pay', ['make', 'do', 'take'], 'We pay attention.'),
  wu(easy, 'He ___ a serious mistake in the report.', 'made', ['did', 'took', 'gave'], 'We make a mistake.'),

  wu(medium, 'The police ___ a thorough investigation.', 'conducted', ['did', 'made', 'took'], 'Investigations are conducted or carried out.'),
  wu(medium, 'We decided to ___ a break after two hours.', 'take', ['make', 'do', 'give'], 'We take a break.'),
  wu(medium, 'He ___ a crime and was arrested.', 'committed', ['did', 'made', 'done'], 'We commit a crime.'),
  wu(medium, 'She gave me a ___ of advice.', 'piece', ['bit of', 'part', 'item'], 'The standard collocation is a piece of advice.'),
  wu(medium, 'A ___ of sheep was grazing on the hill.', 'flock', ['herd', 'pack', 'swarm'], 'Sheep form a flock.'),
  wu(medium, 'He always ___ his promise.', 'keeps', ['holds', 'takes', 'does'], 'We keep a promise.'),
  wu(medium, 'The meeting was ___ off because of the strike.', 'called', ['put', 'took', 'made'], 'Called off means cancelled.'),
  wu(medium, 'She is very fond ___ classical music.', 'of', ['for', 'at', 'in'], 'Fond is followed by of.'),

  wu(placement, 'It was ___ cold last night.', 'bitterly', ['heavily', 'deeply', 'highly'], 'We say bitterly cold.'),
  wu(placement, 'He was ___ aware of the risks involved.', 'fully', ['highly', 'much', 'strongly'], 'We say fully aware.'),
  wu(placement, 'Winning the lottery was a ___ of luck.', 'stroke', ['hit', 'shot', 'blow'], 'A stroke of luck is a sudden piece of good fortune.'),
  wu(placement, 'We need to ___ a solution to this problem.', 'find', ['make', 'do', 'take'], 'We find a solution.'),
  wu(placement, 'The two sides finally ___ an agreement.', 'reached', ['did', 'took', 'held'], 'We reach an agreement.'),
  wu(placement, 'He is a ___ smoker.', 'heavy', ['strong', 'big', 'tall'], 'We say a heavy smoker.')
];
build(chapter, quiz);
