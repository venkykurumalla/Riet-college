const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------------- Chapter 55: vocabulary in context ----------------
const vc = (sentence, word, correct, wrongs, expl) => ({ q: `${sentence}\n\nIn this sentence, the word "${word}" is closest in meaning to`, c: correct, w: wrongs, e: expl });
const ch55 = C({
  n: 55, id: 'y3-verbal-vocab-in-context', cat: 'verbal', title: 'Advanced Vocabulary in Context',
  tag: 'Working out the meaning of an unfamiliar word from the sentence around it',
  url: 'https://www.indiabix.com/verbal-ability/synonyms/',
  over: 'Vocabulary-in-context questions give a sentence with a hard word and ask for its meaning in that sentence. You rarely need to know the word: the sentence supplies clues through contrast, restatement, example, tone and cause-effect. Learning to read those clues gives you the meaning of words you have never seen, and helps you choose the right sense of words with several meanings.',
  place: 'Context-based vocabulary items are a standard part of verbal sections in company and bank tests.',
  real: 'Reading unfamiliar professional vocabulary in a report or manual and still following the sense uses the same clues.',
  obj: ['Use context clues: contrast, restatement, example, cause', 'Use tone (positive or negative) to narrow meanings', 'Pick the right sense of a multi-meaning word', 'Use word roots for confirmation', 'Eliminate meanings that fit the word but not the sentence'],
  pre: ['Vocabulary Building', 'Synonyms and Antonyms'],
  refresh: 'A word\'s meaning depends on its sentence. The same word can be positive or negative in different contexts.',
  defs: [
    'Context clue: a part of the sentence that hints at a word\'s meaning.',
    'Restatement clue: the sentence explains the word in simpler terms.',
    'Contrast clue: words like but, however, unlike signal an opposite meaning.',
    'Tone: positive, negative or neutral feeling carried by the sentence.',
    'Root: a word part with a stable meaning (e.g., bene = good).'
  ],
  intu: 'Cover the hard word and ask what kind of word would fit the blank. Then look for the option that fits the blank.',
  mental: 'Replace the word with each option and read the sentence. The option that keeps the sentence sensible and keeps its tone is the answer.',
  formulas: [
    ['Substitution test', 'Put each option in the gap', 'Every question.', 'Primary.', 'Candid → frank'],
    ['Contrast clue', 'But/however flips the tone', 'Contrast sentences.', 'Opposite.', 'Frugal vs spendthrift'],
    ['Tone clue', 'Positive context → positive word', 'Praise or blame.', 'Narrowing.', 'Lauded'],
    ['Example clue', 'Examples reveal the category', 'Lists.', 'Category.', 'Forgiving the debt'],
    ['Root check', 'Latin/Greek roots confirm', 'Unknown words.', 'Support.', 'Mal = bad']
  ],
  narr: [
    '"The manager\'s candid feedback surprised the team." If the feedback surprised them, it was probably not the usual polite praise, so candid means frank.',
    '"Her magnanimous gesture, forgiving the debt, impressed everyone." The example clue (forgiving the debt) and the tone (impressed everyone) point to generous, noble-minded.',
    '"The company\'s meteoric rise surprised analysts." A meteor streaks quickly across the sky. The rise surprised analysts, so meteoric means very rapid.',
    '"The lawyer tried to mitigate the harshness of the sentence." Mitigate goes with a negative thing (harshness) and a goal (the lawyer wants it to be less), so it means lessen.',
    'Multi-meaning words need the sentence: "serve to exacerbate the problem" calls for a verb that makes a problem worse, not one that solves it.'
  ],
  deep: [['Positive/negative tone', 'If a word describes a person approvingly, a negative synonym cannot be correct.'], ['Eliminate by substitution', 'Wrong options often fit the word in general but break the sentence.']],
  vars: [['Restatement', 'Sentence explains the word.', 'Lucid explanation'], ['Contrast', 'But/unlike.', 'Frugal, wastes nothing'], ['Example', 'Illustrating detail.', 'Forgiving the debt'], ['Tone', 'Praise or blame.', 'Lauded'], ['Cause-effect', 'Result clue.', 'Meteoric rise']],
  ex: [
    { t: 'Restatement', q: 'He is a frugal man who never wastes money. What does "frugal" mean?', g: ['Never wastes money'], c: 'Use the restatement.', s: [['Clue', '"Never wastes money" restates the word.'], ['Meaning', 'Thrifty.']], a: 'Thrifty', w: 'Generous would contradict the clue.', tr: 'Choosing generous.' },
    { t: 'Example clue', q: 'Her magnanimous gesture, forgiving the debt, impressed everyone. What does "magnanimous" mean?', g: ['Forgiving the debt'], c: 'Use the example.', s: [['Example', 'Forgiving a debt is generous.'], ['Meaning', 'Generous, noble in spirit.']], a: 'Generous and noble-minded', w: 'The tone is positive.', tr: 'Choosing proud.' },
    { t: 'Tone', q: 'The critics lauded the director\'s latest film. What does "lauded" mean?', g: ['Critics, positive'], c: 'Use the tone.', s: [['Tone', 'A director\'s film being "lauded" implies approval.'], ['Meaning', 'Praised.']], a: 'Praised', w: 'Ignored or banned would not suit "lauded".', tr: 'Choosing ignored.' }
  ],
  short: { title: 'Cover and replace', trad: 'Go by the word alone.', fast: 'Cover the word, guess the gap, then test each option by substitution; use tone and examples to decide.', rules: ['Restatement is the clearest clue.', 'Contrast flips the tone.', 'Test by substitution.', 'Match positive/negative tone.'] },
  mist: [['Choosing the most common meaning', 'The sentence may use another sense.', 'Test in context.'], ['Ignoring tone', 'Wrong sign.', 'Check positive/negative.'], ['Picking a similar-sounding word', 'False friend.', 'Use the sentence, not the sound.']],
  tips: { sec: 30, elim: 'Drop options with the wrong tone.', adv: 'Look at the words around the target for examples.', ins: 'You need not know the word if you know the sentence.' },
  rev: ['Substitution.', 'Restatement.', 'Contrast.', 'Tone.', 'Examples.'],
  qf: ['Cover, guess, test'],
  take: ['Use context.', 'Match tone.', 'Substitute.', 'Check roots.'],
  self: ['Can I find a restatement clue?', 'Can I use tone?', 'Can I test by substitution?']
});
const q55 = [
  E(vc('The manager\'s candid feedback surprised the team.', 'candid', 'frank', ['secret', 'polite', 'angry'], 'Feedback that surprises is likely to be direct and honest rather than the usual polite praise.')),
  E(vc('The soldiers showed remarkable fortitude during the long siege.', 'fortitude', 'courage in hardship', ['fear of danger', 'lack of discipline', 'cleverness in planning'], 'Showing fortitude during a long siege suggests strength under difficulty.')),
  E(vc('The detective could find no evidence to corroborate the witness\'s story.', 'corroborate', 'confirm', ['deny', 'copy', 'conceal'], 'Evidence is needed to support or confirm a story.')),
  E(vc('She gave a lucid explanation of the theory, and everyone understood.', 'lucid', 'clear', ['confusing', 'lengthy', 'secret'], 'Everyone understood, so the explanation was clear.')),
  E(vc('The scheme was abandoned because it was fraught with risk.', 'fraught', 'filled', ['free', 'tired', 'unaware'], '"Fraught with risk" means full of risk, which explains why it was abandoned.')),
  E(vc('He is a frugal man who never wastes money.', 'frugal', 'thrifty', ['generous', 'greedy', 'careless'], 'The clause "never wastes money" restates the meaning: thrifty.')),
  M(vc('The politician\'s evasive reply failed to satisfy the reporters.', 'evasive', 'avoiding a direct answer', ['truthful and complete', 'loud and angry', 'very long'], 'A reply that fails to satisfy reporters is one that does not answer the question directly.')),
  M(vc('Her magnanimous gesture, forgiving the debt, impressed everyone.', 'magnanimous', 'generous and noble-minded', ['proud and boastful', 'cunning', 'hasty'], 'Forgiving a debt is generous, and the tone (impressed everyone) is positive.')),
  M(vc('The ambiguous wording of the contract led to a dispute.', 'ambiguous', 'open to more than one meaning', ['very harsh', 'out of date', 'extremely long'], 'A dispute about wording arises when it can be read in different ways.')),
  M(vc('The company\'s meteoric rise surprised analysts.', 'meteoric', 'extremely rapid', ['slow and steady', 'accidental', 'temporary'], 'A meteor streaks quickly across the sky; a meteoric rise is very fast.')),
  M(vc('The speaker\'s tirade left the audience uncomfortable.', 'tirade', 'a long angry speech', ['a witty joke', 'a short summary', 'a moment of silence'], 'A speech that makes an audience uncomfortable is likely to be an angry, prolonged outburst.')),
  M(vc('The old sailor was reticent about his past and rarely spoke of it.', 'reticent', 'reluctant to speak', ['eager to boast', 'dishonest', 'forgetful'], 'The clause "rarely spoke of it" restates the meaning.')),
  M(vc('A mood of lethargy settled over the office after lunch.', 'lethargy', 'a sluggish lack of energy', ['sudden excitement', 'rising anger', 'growing curiosity'], 'After lunch, a mood settling over an office suggests tiredness rather than excitement.')),
  M(vc('The critics lauded the director\'s latest film.', 'lauded', 'praised', ['ignored', 'banned', 'copied'], 'Critics who laud a film praise it.')),
  P(vc('The lawyer tried to mitigate the harshness of the sentence.', 'mitigate', 'lessen', ['increase', 'announce', 'delay'], 'A lawyer would try to make a harsh sentence less severe.')),
  P(vc('Her demeanour at the funeral was dignified and calm.', 'demeanour', 'way of behaving', ['style of dress', 'choice of words', 'political opinion'], '"Dignified and calm" describes how she behaved.')),
  P(vc('The report contained several spurious claims that could not be verified.', 'spurious', 'false or not genuine', ['important', 'controversial', 'brief'], 'Claims that cannot be verified and are criticised are false or not genuine.')),
  P(vc('The new law will only serve to exacerbate the problem.', 'exacerbate', 'make worse', ['solve', 'hide', 'explain'], '"Only serve to" signals a negative effect on the problem: to make it worse.')),
  P(vc('His arguments were so cogent that the opposition had no reply.', 'cogent', 'clear and convincing', ['long and loud', 'rude and insulting', 'vague'], 'Arguments that leave the opposition without a reply are convincing and well-reasoned.')),
  P(vc('A pervasive sense of unease hung over the village.', 'pervasive', 'spreading through everything', ['slight and fading', 'sudden', 'imaginary'], 'A sense that "hung over the village" is felt everywhere in it.'))
];
build(ch55, q55);

// ---------------- Chapter 56: idiomatic expressions ----------------
const idm = (sentence, idiom, correct, wrongs, expl) => ({ q: `${sentence}\n\nThe idiom "${idiom}" in this sentence means`, c: correct, w: wrongs, e: expl });
const ch56 = C({
  n: 56, id: 'y3-verbal-idiomatic-expressions', cat: 'verbal', title: 'Idiomatic Expressions and Phrases',
  tag: 'Common English idioms: meaning, usage in a sentence and how to guess an unfamiliar one',
  url: 'https://www.indiabix.com/verbal-ability/',
  over: 'An idiom is a phrase whose meaning is not the sum of its words. "Spill the beans" has nothing to do with beans. Idioms are common in questions because they test whether you know natural English. Some can be guessed from the picture they paint; many must be learned. This chapter organises common idioms by theme and shows how to use the sentence to confirm the meaning.',
  place: 'Idiom questions appear in the verbal sections of bank, SSC and campus tests.',
  real: 'Business English is full of idioms ("the ball is in your court", "cut corners"); understanding them avoids miscommunication.',
  obj: ['Recall 40+ common idioms by theme', 'Use sentence context to confirm a meaning', 'Guess the meaning from the picture the idiom paints', 'Avoid literal readings', 'Use idioms correctly in your own writing'],
  pre: ['Vocabulary Building'],
  refresh: 'An idiom is fixed: changing its words usually destroys the meaning.',
  defs: [
    'Idiom: a phrase with a figurative meaning.',
    'Literal meaning: the plain meaning of the words.',
    'Figurative meaning: the intended, non-literal meaning.',
    'Context: the sentence that supplies clues.',
    'Fixed phrase: a group of words that cannot be varied.'
  ],
  intu: 'Picture the idiom and ask what situation it describes. The picture usually points to the meaning.',
  mental: 'Read the sentence, ignore the literal meaning, ask what situation the idiom stands for, and match that with the options.',
  formulas: [
    ['Start/stop', 'break the ice; throw in the towel', 'Beginning, giving up.', 'Theme.', 'Start a conversation; give up'],
    ['Secrets', 'spill the beans; let the cat out of the bag', 'Revealing.', 'Theme.', 'Reveal a secret'],
    ['Effort', 'burn the midnight oil; bite the bullet', 'Hard work, courage.', 'Theme.', 'Work late; face it bravely'],
    ['Cost', 'cost an arm and a leg', 'Expensive.', 'Theme.', 'Very costly'],
    ['Decision', 'on the fence; the ball is in your court', 'Choices.', 'Theme.', 'Undecided; your turn to act']
  ],
  narr: [
    '"The speaker told a joke to break the ice at the start of the meeting." Breaking the ice means starting a conversation in an awkward or formal situation.',
    '"He will bite the bullet and tell his manager about the mistake." To bite the bullet is to do something unpleasant that cannot be avoided, with courage.',
    '"She has been burning the midnight oil to finish her thesis." To burn the midnight oil is to work late at night.',
    '"The elephant in the room" is an obvious, important problem that everyone avoids discussing.',
    'If you do not know an idiom, use the sentence: "Stop beating around the bush and tell me what happened" calls for a direct answer, so beating around the bush means avoiding the main point.'
  ],
  deep: [['Idioms by theme', 'Grouping idioms by theme (secrets, effort, cost, decision) makes them easier to recall.'], ['Avoid literal traps', 'Wrong options often give the literal meaning of the words.']],
  vars: [['Beginning', 'Break the ice.', 'Start a talk'], ['Giving up', 'Throw in the towel.', 'Quit'], ['Hard work', 'Burn the midnight oil.', 'Work late'], ['Cost', 'Cost an arm and a leg.', 'Very expensive'], ['Decision', 'On the fence.', 'Undecided']],
  ex: [
    { t: 'Theme', q: 'The speaker told a joke to break the ice. What does "break the ice" mean?', g: ['Joke at the start'], c: 'Picture the situation.', s: [['Situation', 'A cold, awkward start.'], ['Meaning', 'Ease the tension and begin talking.']], a: 'ease the tension at the start', w: 'It has nothing to do with ice.', tr: 'Reading it literally.' },
    { t: 'Context', q: '"Stop beating around the bush and tell me what happened." What does "beating around the bush" mean?', g: ['Demand for directness'], c: 'Use the sentence.', s: [['Context', 'The speaker wants a direct answer.'], ['Meaning', 'Avoiding the main point.']], a: 'avoiding the main point', w: 'The sentence asks for directness.', tr: 'Choosing hunting.' },
    { t: 'Cost', q: 'The ring cost an arm and a leg. What does the idiom mean?', g: ['Cost'], c: 'Exaggeration.', s: [['Image', 'Paying with limbs is an extreme price.'], ['Meaning', 'Very expensive.']], a: 'was very expensive', w: 'Not about injuries.', tr: 'Reading literally.' }
  ],
  short: { title: 'Picture it', trad: 'Memorise lists.', fast: 'Group idioms by theme, picture the scene, and confirm with the sentence.', rules: ['Never read literally.', 'Use context.', 'Learn by theme.', 'Avoid changing the words.'] },
  mist: [['Literal reading', 'Wrong option.', 'Think figuratively.'], ['Confusing similar idioms', 'Mix-ups.', 'Learn by theme.'], ['Changing the wording', 'Idiom breaks.', 'Use as fixed phrases.']],
  tips: { sec: 25, elim: 'Eliminate the literal option first.', adv: 'Make a deck of 40 idioms by theme.', ins: 'Context confirms the meaning when memory fails.' },
  rev: ['Start/stop.', 'Secrets.', 'Effort.', 'Cost.', 'Decision.'],
  qf: ['Idioms are fixed'],
  take: ['Picture it.', 'Learn by theme.', 'Use context.', 'Skip the literal.'],
  self: ['Can I guess an idiom from context?', 'Can I avoid literal readings?', 'Can I recall ten idioms by theme?']
});
const q56 = [
  E(idm('The speaker told a joke to break the ice at the start of the meeting.', 'break the ice', 'ease the tension and begin the conversation', ['stop the conversation', 'make the room cold', 'end the meeting'], 'A joke at the start eases the awkwardness so that people can talk.')),
  E(idm('Passing the quiz was a piece of cake for her.', 'a piece of cake', 'very easy', ['very sweet', 'a small prize', 'surprisingly difficult'], 'The idiom means something that is extremely easy to do.')),
  E(idm('We go to that restaurant once in a blue moon.', 'once in a blue moon', 'very rarely', ['every month', 'at night', 'on holidays'], 'It means very rarely, not literally on the occasion of a blue moon.')),
  E(idm('Please don\'t spill the beans about the surprise party.', 'spill the beans', 'reveal a secret', ['drop some food', 'cook for the party', 'plan the party'], 'To spill the beans is to reveal a secret.')),
  E(idm('I am feeling a bit under the weather today.', 'under the weather', 'slightly unwell', ['outside in the rain', 'very happy', 'late for work'], 'It means feeling slightly ill.')),
  E(idm('You hit the nail on the head when you said the problem was poor planning.', 'hit the nail on the head', 'said exactly the right thing', ['made a mistake', 'did a carpentry job', 'got angry'], 'It means to be exactly right about something.')),
  M(idm('She has been burning the midnight oil to finish her thesis.', 'burning the midnight oil', 'working late into the night', ['wasting money on lamps', 'sleeping early', 'working in a factory'], 'It means working late at night.')),
  M(idm('He decided to bite the bullet and tell his manager about the mistake.', 'bite the bullet', 'face something unpleasant with courage', ['refuse to speak', 'take a risk for fun', 'quit the job'], 'It means to do something difficult or unpleasant that cannot be avoided.')),
  M(idm('The designer jewellery cost an arm and a leg.', 'cost an arm and a leg', 'be extremely expensive', ['cause an injury', 'be cheap', 'be made of gold'], 'It means to cost a very large amount.')),
  M(idm('I have sent you the offer; now the ball is in your court.', 'the ball is in your court', 'it is your turn to act or decide', ['you must play a sport', 'you have lost', 'the matter is closed'], 'It means the next move belongs to you.')),
  M(idm('The builder was accused of cutting corners on the project.', 'cutting corners', 'doing something cheaply or carelessly to save time or money', ['driving fast', 'making sharper designs', 'working very carefully'], 'It means skipping steps or standards to save effort or cost.')),
  M(idm('Stop beating around the bush and tell me what happened.', 'beating around the bush', 'avoiding the main point', ['hunting animals', 'speaking loudly', 'telling the truth'], 'The speaker wants a direct answer, so the idiom means avoiding the point.')),
  M(idm('On the question of moving to a new city, she is still on the fence.', 'on the fence', 'undecided', ['angry', 'tired', 'careless'], 'It means not having made up one\'s mind.')),
  M(idm('The workers decided to call it a day when the rain started.', 'call it a day', 'stop working for the day', ['start a new day', 'cancel the job forever', 'celebrate'], 'It means to stop working for the day.')),
  P(idm('After three failed attempts, he threw in the towel.', 'threw in the towel', 'gave up', ['started again', 'cleaned up', 'won the contest'], 'To throw in the towel is to give up.')),
  P(idm('Nobody mentioned the budget crisis, though it was the elephant in the room.', 'the elephant in the room', 'an obvious problem that no one wants to discuss', ['a large animal', 'a funny incident', 'a minor detail'], 'It refers to a major issue that everyone knows about but avoids.')),
  P(idm('Losing that job turned out to be a blessing in disguise.', 'a blessing in disguise', 'something that seems bad but turns out good', ['a hidden gift box', 'an unlucky event', 'a religious festival'], 'It describes a misfortune that brings an unexpected benefit.')),
  P(idm('By quarrelling with every client, he burned his bridges in the industry.', 'burned his bridges', 'destroyed the chance of returning or getting help', ['built new connections', 'travelled widely', 'saved money'], 'It means ruining relationships so that return is impossible.')),
  P(idm('I don\'t believe it, but let me play devil\'s advocate and argue the other side.', 'play devil\'s advocate', 'argue the opposite view for the sake of argument', ['support the devil', 'tell a lie', 'become a lawyer'], 'It means arguing against a view, often to test it, without necessarily believing the argument.')),
  P(idm('If you think I took your pen, you are barking up the wrong tree.', 'barking up the wrong tree', 'making a mistake in what you are pursuing', ['talking to a dog', 'telling a joke', 'planting a tree'], 'It means choosing the wrong course or blaming the wrong person.'))
];
build(ch56, q56);
