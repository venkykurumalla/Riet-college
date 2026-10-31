const { easy, medium, placement, build } = require('../lib.cjs');

const cv = (d, sentence, word, best, wrongs, expl) => d(`In the sentence "${sentence}", the word "${word}" means`, best, wrongs, expl);

const chapter = {
  id: 'y2-verbal-contextual-vocab', year: 2, category: 'Advanced Verbal Ability', num: 39, difficulty: 'Intermediate',
  title: 'Contextual Vocabulary',
  tagline: 'Year 2 — Words with several meanings and how the sentence decides which one is meant',
  minutes: 45,
  overview: 'Many English words have more than one meaning. "Bank" can be the side of a river or a financial institution; "fair" can mean just, light-coloured or fairly good. Contextual vocabulary questions give a sentence and ask what a word means in that sentence. The surrounding words decide the meaning, so the skill is to read the sentence carefully and test each meaning against it.',
  placement: 'Contextual vocabulary questions are commonly asked in the verbal ability section of company aptitude rounds and in reading comprehension passages.',
  realWorld: 'Understanding contracts, instructions and news reports depends on choosing the right sense of familiar words.',
  objectives: [
    'Recognise words with multiple meanings',
    'Use the surrounding words to decide the intended meaning',
    'Distinguish the part of speech a word is used as',
    'Test each possible meaning in the sentence',
    'Avoid choosing the most familiar meaning by default'
  ],
  prereq: ['Basic Vocabulary', 'Synonyms and Antonyms'],
  refresher: 'A word may change meaning when it changes part of speech (a run / to run; a fine / fine weather).',
  defs: [
    'Polysemy: a word having several related or unrelated meanings.',
    'Context: the words and ideas around a word that fix its meaning.',
    'Homonym: words with the same spelling and sound but different meanings (bank, bat).',
    'Part-of-speech shift: the same word used as a noun, verb or adjective with different meanings.',
    'Collocation: words that usually go together; the neighbouring word often decides the sense.'
  ],
  intuition: 'The most common meaning of a word is not always the right one. Treat each sentence as a puzzle: try the likely meanings in place of the word and see which keeps the sentence sensible. The wrong meanings usually produce an odd or nonsensical sentence.',
  mental: 'Substitute each meaning for the word and read the sentence. The one that sounds natural and fits the rest of the sentence is correct.',
  formulas: [
    ['Substitution test', 'Replace the word by the meaning and reread', 'The sentence must stay sensible.', 'Every question.', '"edge of the river" for bank in "sat on the bank"'],
    ['Neighbour clues', 'Words next to the target word narrow the meaning', 'Look at verbs and nouns around it.', 'Collocations.', 'pay a fine → penalty'],
    ['Part of speech', 'Decide noun, verb or adjective', 'The meaning depends on it.', 'Words like run, fine, plain.', 'She runs a shop → manages'],
    ['Avoid the default', 'Do not pick the most familiar meaning automatically', 'Test the others.', 'Trap options.', 'light = not heavy, not lamp'],
    ['Eliminate by fit', 'Cross out meanings that make nonsense', 'Narrow to one.', 'Choice among options.', 'Remove tolerate in "bank of the river"']
  ],
  narrative: [
    'Start from the sentence, not the word. "We sat on the bank of the river" cannot mean a financial bank; the river decides: the side of the river. "He deposited money in the bank" has the opposite sense.',
    'Notice the part of speech. In "She runs a small shop", runs is a verb meaning manages, not moves quickly. In "He paid a fine for parking", fine is a noun meaning a penalty, not "of good quality".',
    'Use neighbouring words. "I cannot bear this noise" uses bear as a verb meaning tolerate; "bear" the animal would not fit with noise. "The board approved the budget" uses board as a group of directors, since a plank cannot approve anything.',
    'Test each possible meaning. For "figure" in "Can you figure out the answer?", the phrasal verb figure out means work out or understand, not a number or a shape.',
    'Be careful with words that look easy. In "He gave me sound advice", sound means reliable and sensible; in "I heard a loud sound", it is a noun for something heard.'
  ],
  deep: [
    ['Phrasal verbs', 'A verb with a preposition (figure out, give up, put off) has its own meaning. Treat the whole phrase as one unit.'],
    ['Formal and informal senses', 'Words like address, content and yield have formal meanings that differ from everyday ones. Read for the register of the sentence.']
  ],
  variations: [
    ['Noun and verb forms', 'Same spelling.', 'run, fine'],
    ['Homonyms', 'Same sound and spelling.', 'bank, bat'],
    ['Phrasal verbs', 'Verb + particle.', 'figure out'],
    ['Formal senses', 'Less common meaning.', 'address, yield'],
    ['Adjective senses', 'Meaning by noun.', 'sound advice']
  ],
  examples: [
    {
      title: 'Homonym',
      q: 'In "We sat on the bank of the river", what does "bank" mean?',
      given: ['bank'],
      concept: 'Neighbouring words decide.',
      steps: [['Clue', 'The sentence mentions a river.'], ['Meaning', 'The side of the river.']],
      ans: 'the side of a river', why: 'A financial institution would not suit "sat on".', trap: 'Choosing the familiar money sense.'
    },
    {
      title: 'Part of speech',
      q: 'In "She runs a small shop", what does "runs" mean?',
      given: ['runs'],
      concept: 'Verb sense.',
      steps: [['Object', 'A shop is run (managed).'], ['Meaning', 'manages.']],
      ans: 'manages', why: 'Moving quickly does not take a shop as its object.', trap: 'Choosing moves quickly.'
    },
    {
      title: 'Phrasal verb',
      q: 'In "Can you figure out the answer?", what does "figure out" mean?',
      given: ['figure out'],
      concept: 'Treat the phrase as one unit.',
      steps: [['Phrase', 'Figure out = understand or work out.'], ['Meaning', 'work out.']],
      ans: 'work out', why: 'The phrase is idiomatic.', trap: 'Reading figure as a number.'
    }
  ],
  shortcut: {
    title: 'Substitute and reread',
    trad: 'Recall dictionary senses.',
    fast: 'Substitute each option for the word and reread; choose the one that keeps the sentence natural.',
    rules: ['Check part of speech.', 'Use neighbouring words.', 'Treat phrasal verbs as units.', 'Do not default to the common meaning.']
  },
  mistakes: [
    ['Choosing the commonest meaning', 'Ignoring context.', 'Test the sentence.'],
    ['Ignoring the part of speech', 'Choosing a noun sense for a verb.', 'Decide noun or verb first.'],
    ['Splitting a phrasal verb', 'Reading each word alone.', 'Treat as a unit.'],
    ['Not rereading', 'Not testing the substitution.', 'Substitute and read.']
  ],
  tips: { sec: 25, elim: 'Remove meanings that clash with a neighbouring word.', advice: 'Always substitute.', insight: 'Contextual questions reward careful reading.' },
  revision: ['Substitute and reread.', 'Part of speech.', 'Neighbour clues.', 'Phrasal verbs.', 'Do not default.'],
  quickFormulas: ['Context decides meaning'],
  takeaways: ['Context first.', 'Test meanings.', 'Part of speech.', 'Phrases as units.'],
  selfCheck: ['Can I give two meanings of bank?', 'Can I decide the sense of fine?', 'Can I interpret figure out?'],
  sources: [['Oxford Advanced Learner\'s Dictionary', 'Reference', 'Multiple meanings of the words discussed.']]
};

const quiz = [
  cv(easy, 'We sat on the bank of the river.', 'bank', 'the side of a river', ['a place for money', 'a row of seats', 'a heap of snow'], 'The river clue fixes the meaning: the edge of the river.'),
  cv(easy, 'The spring in the mattress broke.', 'spring', 'a coiled piece of metal', ['a season', 'a stream of water', 'a sudden jump'], 'A mattress contains a coiled metal spring.'),
  cv(easy, 'It was a fair decision.', 'fair', 'just', ['light in colour', 'fairly good', 'a gathering for sale'], 'A decision is described as just.'),
  cv(easy, 'The bag is light.', 'light', 'not heavy', ['bright', 'to ignite', 'pale'], 'A bag is described by its weight.'),
  cv(easy, 'He lit a match.', 'match', 'a small stick for making fire', ['a game', 'a pair', 'an equal'], 'He lit it, so it is a matchstick.'),
  cv(easy, 'You have the right to vote.', 'right', 'a legal entitlement', ['correct', 'the opposite of left', 'immediately'], 'The right to vote is an entitlement.'),

  cv(medium, 'I cannot bear this noise.', 'bear', 'tolerate', ['carry', 'give birth to', 'an animal'], 'The verb bear here means to put up with.'),
  cv(medium, 'The board approved the budget.', 'board', 'a group of directors', ['a flat piece of wood', 'to get on a ship', 'meals provided'], 'Only a group can approve a budget.'),
  cv(medium, 'Prices will drop next month.', 'drop', 'fall', ['a small amount of liquid', 'let go', 'a delivery'], 'Prices fall; a drop of liquid does not fit.'),
  cv(medium, 'She runs a small shop.', 'runs', 'manages', ['moves quickly', 'flows', 'competes in a race'], 'A shop is managed or operated.'),
  cv(medium, 'He paid a fine for parking in a restricted zone.', 'fine', 'a penalty', ['of high quality', 'thin', 'healthy'], 'Paying a fine means paying a penalty.'),
  cv(medium, 'The case was closed by the court.', 'case', 'a legal matter', ['a box', 'a container for glasses', 'an instance'], 'A court closes a legal case.'),
  cv(medium, 'She wore a plain white dress.', 'plain', 'simple', ['an open flat area', 'obvious', 'ugly'], 'A plain dress is one without decoration.'),
  cv(medium, 'Can you figure out the answer?', 'figure out', 'work out', ['draw a picture of', 'count the numbers in', 'give out'], 'Figure out means to understand or solve.'),

  cv(placement, 'She will address the audience at 10 a.m.', 'address', 'speak to', ['write the location on', 'a home location', 'deal with a problem'], 'She will speak formally to the audience.'),
  cv(placement, 'The horse made a bolt for the gate.', 'bolt', 'a sudden dash', ['a metal pin', 'a flash of lightning', 'to eat quickly'], 'A horse running suddenly: a dash.'),
  cv(placement, 'The farm yields good crops.', 'yields', 'produces', ['gives way', 'surrenders', 'stops'], 'A farm produces crops.'),
  cv(placement, 'He is content with his salary.', 'content', 'satisfied', ['the things inside', 'subject matter', 'to satisfy'], 'The adjective content means happy with what one has.'),
  cv(placement, 'The company of friends cheered her up.', 'company', 'the presence of others', ['a business', 'a military unit', 'guests'], 'Friends\' company means their companionship.'),
  cv(placement, 'He gave me sound advice.', 'sound', 'reliable and sensible', ['a noise', 'healthy', 'a narrow channel of water'], 'Sound advice is advice one can rely on.')
];
build(chapter, quiz);
