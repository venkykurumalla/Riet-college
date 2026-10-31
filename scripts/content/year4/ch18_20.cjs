const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const base = { year: 4, cat: 'verbal', category: 'Advanced Verbal Ability' };
const tier = (i) => (i < 6 ? easy : i < 14 ? medium : placement);
const mk = (list) => list.map((x, i) => tier(i)(x[0], x[1], x[2], x[3]));

// ================= Chapter 18: contextual vocabulary =================
const v = (sentence, word, c, w, e) => [`${sentence}\n\nIn this sentence, "${word}" is closest in meaning to`, c, w, e];
const ch18 = C({ ...base, n: 18, id: 'y4-avm-contextual-vocab', title: 'High-Level Contextual Vocabulary',
  tag: 'Less common words (ephemeral, ostensible, perfunctory) understood from sentence clues and word parts',
  over: 'Advanced vocabulary questions use less common words in sentences that give enough clues to decide the meaning. The clues are contrast, restatement, example, cause and tone, and the word parts (prefixes and roots) often confirm the guess. This chapter practises 20 such words and the method of reading the sentence first and the options second.',
  place: 'Higher-level vocabulary appears in reading comprehension and in direct word-meaning questions of company and bank tests.',
  real: 'Professional reading includes unfamiliar words; context lets you follow without a dictionary.',
  obj: ['Use contrast, restatement and example clues', 'Use tone to rule out opposite meanings', 'Use roots and prefixes as confirmation', 'Test options by substitution', 'Handle words with positive or negative flavour'],
  pre: ['Advanced Vocabulary in Context (Year 3)'],
  refresh: 'Replace the word with each option; the right one keeps the sentence sensible and the tone consistent.',
  defs: ['Restatement clue: the sentence explains the word.', 'Contrast clue: but, however, unlike signal the opposite.', 'Tone: approval or disapproval carried by the sentence.', 'Root: a word part with a stable meaning.', 'Substitution test: putting an option in place of the word.'],
  intu: 'The sentence is the dictionary; the options are only a menu.',
  mental: 'Cover the word, guess a simple substitute, then find it among the options.',
  formulas: [['Restatement', 'Sentence explains the word', 'Common.', 'Clearest clue.', '"Only a few days" → ephemeral'], ['Contrast', 'But/however flips tone', 'Contrast sentences.', 'Opposite.', 'Despite setbacks → sanguine'], ['Example', 'Details show category', 'Lists.', 'Category.', 'Praised at every turn → obsequious'], ['Root', 'bene = good, mal = bad', 'Unknown word.', 'Support.', 'Pernicious: per + nex (death)'], ['Substitution', 'Test options in place', 'Always.', 'Confirm.', 'Read aloud']],
  narr: ['"The ephemeral beauty of the cherry blossom lasts only a few days." The sentence restates the word: ephemeral means short-lived.', '"Despite the setbacks, she remained sanguine" contrasts with setbacks, so sanguine is positive: optimistic.', '"His obsequious manner… he praised the manager at every turn" gives the example: excessively eager to please.', '"The ostensible reason for the visit was a courtesy call, but he wanted to negotiate": the "but" shows that the stated reason is not the real one, so ostensible means apparent.', '"A cursory inspection missed the crack" suggests a hasty, not thorough, inspection.'],
  deep: [['Positive versus negative', 'If the sentence praises, avoid negative options; the tone limits the choice.'], ['Roots', 'Equivocate: equi (equal) + voc (voice): to speak with two voices.']],
  vars: [['Restatement', 'Sentence explains.', 'Ephemeral'], ['Contrast', 'But/despite.', 'Sanguine'], ['Example', 'Details.', 'Obsequious'], ['Tone', 'Approval.', 'Venerate'], ['Roots', 'Word parts.', 'Equivocate']],
  ex: [
    { t: 'Restatement', q: 'The ephemeral beauty of the blossom lasts only a few days. What does "ephemeral" mean?', g: ['Only a few days'], c: 'Use the restatement.', s: [['Clue', '"Lasts only a few days".'], ['Meaning', 'Short-lived.']], a: 'Short-lived', w: 'The opposite is lasting.', tr: 'Choosing delicate.' },
    { t: 'Contrast', q: 'Despite the setbacks, she remained sanguine. What does "sanguine" mean?', g: ['Despite setbacks'], c: 'Contrast.', s: [['Contrast', '"Despite" signals the opposite of discouraged.'], ['Meaning', 'Optimistic.']], a: 'Optimistic', w: 'Positive tone.', tr: 'Choosing angry.' },
    { t: 'Example', q: 'His obsequious manner made colleagues uneasy; he praised the manager at every turn. What does it mean?', g: ['Praised at every turn'], c: 'Use the example.', s: [['Example', 'Constant praise.'], ['Meaning', 'Excessively eager to please.']], a: 'Excessively eager to please', w: 'Negative tone.', tr: 'Choosing polite.' }
  ],
  short: { title: 'Sentence first', trad: 'Guess from the word.', fast: 'Read the sentence for restatement, contrast or example, guess a substitute, then match it.', rules: ['Restatement first.', 'Contrast flips.', 'Tone limits.', 'Substitute.'] },
  mist: [['Choosing the best-known meaning', 'Wrong sense.', 'Test in the sentence.'], ['Ignoring tone', 'Wrong sign.', 'Check positive/negative.'], ['Trusting the sound', 'False friend.', 'Use the clues.']],
  tips: { sec: 30, elim: 'Drop options with the wrong tone.', adv: 'Learn roots.', ins: 'You can often answer without knowing the word.' },
  rev: ['Clues.', 'Tone.', 'Roots.', 'Substitution.', 'Practice words.'],
  qf: ['Sentence is the dictionary'],
  take: ['Clues.', 'Tone.', 'Roots.', 'Test.'],
  self: ['Can I find a restatement?', 'Can I use tone?', 'Can I test by substitution?']
});
build(ch18, mk([
  v('The ephemeral beauty of the cherry blossom lasts only a few days.', 'ephemeral', 'short-lived', ['fragile', 'colourful', 'eternal'], 'The sentence restates the meaning: it lasts only a few days.'),
  v('Smartphones have become ubiquitous in the city; almost everyone carries one.', 'ubiquitous', 'found everywhere', ['expensive', 'forbidden', 'rare'], 'The restatement "almost everyone carries one" shows the meaning.'),
  v('Despite the setbacks, she remained sanguine about the outcome.', 'sanguine', 'optimistic', ['furious', 'indifferent', 'anxious'], 'The word contrasts with setbacks, so it is positive.'),
  v('The truculent customer shouted at the staff and refused to wait.', 'truculent', 'aggressively defiant', ['polite', 'puzzled', 'tired'], 'Shouting and refusing to wait show aggressive defiance.'),
  v('His obsequious manner made colleagues uneasy; he praised the manager at every turn.', 'obsequious', 'excessively eager to please', ['quietly confident', 'openly rude', 'highly skilled'], 'Praising at every turn is excessive eagerness to please.'),
  v('A pragmatic leader chooses what works rather than what is elegant.', 'pragmatic', 'practical', ['idealistic', 'stubborn', 'careless'], 'The contrast with elegance shows a practical outlook.'),
  v('The ostensible reason for the visit was a courtesy call, but he wanted to negotiate.', 'ostensible', 'apparent', ['hidden', 'genuine', 'offensive'], '"But" shows the stated reason was not the real one.'),
  v('The recalcitrant mule refused to move however hard the farmer pulled.', 'recalcitrant', 'stubbornly resistant to control', ['weak', 'friendly', 'frightened'], 'Refusing to move despite pulling shows stubborn resistance.'),
  v('Asked whether he agreed, he gave a laconic reply: "Yes."', 'laconic', 'using very few words', ['rude', 'confused', 'lengthy'], 'The reply was a single word.'),
  v('Pressed for a decision, the minister began to equivocate, giving answers that could mean either yes or no.', 'equivocate', 'speak ambiguously to avoid commitment', ['refuse to speak', 'shout', 'agree eagerly'], 'The restatement describes ambiguous answers.'),
  v('He gave the report only a perfunctory glance before signing it.', 'perfunctory', 'done with little interest or care', ['careful', 'angry', 'lengthy'], 'Signing after a glance shows minimal effort.'),
  v('The new drainage should ameliorate the flooding in the lower streets.', 'ameliorate', 'make better', ['worsen', 'announce', 'ignore'], 'Drainage is meant to improve the flooding.'),
  v('The pernicious rumour slowly destroyed his reputation.', 'pernicious', 'harmful in a gradual, subtle way', ['harmless', 'amusing', 'sudden'], 'It destroyed his reputation slowly, so it was harmful.'),
  v('The evidence for the theory is tenuous, resting on a single observation.', 'tenuous', 'weak or slight', ['overwhelming', 'recent', 'public'], 'A single observation is a slight basis.'),
  v('The villagers venerate the old teacher and visit her every festival.', 'venerate', 'regard with deep respect', ['fear', 'ignore', 'envy'], 'Visiting her every festival shows deep respect.'),
  v('Her expression was inscrutable; no one could tell what she thought.', 'inscrutable', 'impossible to read or understand', ['cheerful', 'angry', 'obvious'], 'The restatement says no one could tell her thoughts.'),
  v('A cursory inspection of the bridge missed the crack that later grew.', 'cursory', 'hasty and not thorough', ['detailed', 'expert', 'frequent'], 'A hasty inspection missed the crack.'),
  v('His impetuous decision to resign surprised everyone, for he had not discussed it with anyone.', 'impetuous', 'acting suddenly without thought', ['carefully planned', 'cowardly', 'reluctant'], 'He decided without discussion, suddenly.'),
  v('The mercurial star was charming one day and sullen the next.', 'mercurial', 'changeable in mood', ['steady', 'famous', 'wealthy'], 'The two contrasting days show changeable moods.'),
  v('The abstemious monk ate little and drank only water.', 'abstemious', 'sparing in food and drink', ['greedy', 'ill', 'wealthy'], 'The restatement describes eating little and drinking only water.')
]));

// ================= Chapter 19: integrated verbal ability sets =================
const g = (q, c, w, e) => [q, c, w, e];
const ch19 = C({ ...base, n: 19, id: 'y4-avm-integrated-verbal-sets', title: 'Integrated Verbal Ability Sets',
  tag: 'A full verbal mix: synonyms, antonyms, fill-blanks, idioms, sentence correction, error spotting, jumbles and short comprehension',
  over: 'A verbal section mixes small vocabulary and grammar items with jumbles and short passages. Integrated sets train the switch between them. Each type has its own quick method: vocabulary by context, grammar by rule, jumbles by links, comprehension by structure. The most valuable habit is to do the quickest types first and to leave long passages for last.',
  place: 'Mixed verbal sets are how most company tests present the English section.',
  real: 'Switching between proofreading, reading and word choice is typical of office writing.',
  obj: ['Switch quickly between verbal types', 'Apply the standard method to each type', 'Order work by speed', 'Avoid over-investing in one passage', 'Check answers against grammar and context'],
  pre: ['Time-Bound Verbal Drills', 'Advanced Para Jumbles (Year 3)'],
  refresh: 'Vocabulary: context. Grammar: rule. Jumbles: opener and links. Comprehension: structure.',
  defs: ['Fill-blank: a sentence with a gap to complete.', 'Sentence correction: choose the grammatical version.', 'Error spotting: find the wrong part.', 'Jumble: restore the order of sentences.', 'Mini-passage: a short paragraph with one question.'],
  intu: 'Every verbal item is a small puzzle with one rule. Know the rule and the puzzle takes seconds.',
  mental: 'Classify by looking at the format; apply the matching quick method; move on.',
  formulas: [['Agreement', 'Neither… nor → verb agrees with the nearer subject', 'Grammar.', 'Rule.', 'Neither the teacher nor the students were'], ['Than', 'Compared with a pronoun that could take a verb: than I am', 'Grammar.', 'Rule.', 'taller than I am'], ['Jumble', 'Opener, then links', 'Order.', 'Method.', 'Stormy night, knock, door, wind'], ['Connectors', 'Contrast: nevertheless', 'Logic.', 'Method.', 'Exhausted; nevertheless'], ['Idiom', 'Turn over a new leaf = start afresh', 'Meaning.', 'Memory.', 'Reform']],
  narr: ['"Neither of the boys has finished his work": "neither" is singular, so has and his.', '"Neither the teacher nor the students were aware": the verb agrees with the nearer subject (students), so were.', 'For a jumble such as "It was a stormy night / Suddenly there was a knock / He opened the door / A cold wind rushed in", the order is stormy night, knock, door, wind.', 'A short passage question is answered from the passage: bees\' dance carries enough information to guide others, as shown by the robotic bee.', '"He was exhausted; nevertheless, he continued working" uses a contrast connector.'],
  deep: [['Pronoun after than', '"Taller than I" is understood as "taller than I am".'], ['Single clue elimination', 'One clear rule often removes three options at once.']],
  vars: [['Vocabulary', 'Context.', 'Frank'], ['Grammar', 'Rule.', 'Agreement'], ['Jumbles', 'Order.', 'Story'], ['Idioms', 'Meaning.', 'New leaf'], ['Mini-passages', 'Structure.', 'Robotic bee']],
  ex: [
    { t: 'Agreement', q: 'Neither the teacher nor the students ____ aware of the change.', g: ['Neither … nor'], c: 'Nearest subject.', s: [['Nearest subject', '"Students" is plural.'], ['Verb', 'were.']], a: 'were', w: 'Agrees with students.', tr: 'Choosing was.' },
    { t: 'Jumble', q: 'Order: R It was a stormy night; S Suddenly there was a knock; P He opened the door; Q A cold wind rushed in.', g: ['Four sentences'], c: 'Opener then links.', s: [['Opener', 'R sets the scene.'], ['Then', 'S, P, Q in sequence.']], a: 'RSPQ', w: 'Chronological.', tr: 'Starting with P.' },
    { t: 'Connector', q: 'He was exhausted; ____, he continued working.', g: ['Contrast'], c: 'Name the relation.', s: [['Relation', 'Working despite exhaustion.'], ['Word', 'Nevertheless.']], a: 'nevertheless', w: 'Contrast.', tr: 'Choosing therefore.' }
  ],
  short: { title: 'Type then rule', trad: 'Read every item fully.', fast: 'Identify the type from the format, apply its quick rule, and defer long passages to the end.', rules: ['Context for words.', 'Rules for grammar.', 'Links for jumbles.', 'Structure for passages.'] },
  mist: [['Starting with the longest passage', 'Time sink.', 'Quick items first.'], ['Guessing grammar by ear', 'Familiar errors.', 'Apply the rule.'], ['Ignoring the connector logic', 'Wrong direction.', 'Name the relation.']],
  tips: { sec: 45, elim: 'Apply one rule to eliminate options quickly.', adv: 'Do vocabulary and grammar items first.', ins: 'Time saved on quick items pays for passages.' },
  rev: ['Vocabulary.', 'Grammar.', 'Jumbles.', 'Idioms.', 'Passages.'],
  qf: ['Type, rule, move on'],
  take: ['Classify.', 'Apply.', 'Quick first.', 'Check.'],
  self: ['Can I classify a verbal item?', 'Can I apply its rule?', 'Can I order my work?']
});
build(ch19, mk([
  g('Choose the word closest in meaning to "candid".', 'frank', ['secretive', 'polite', 'cheerful'], '"Candid" means open and honest, which is frank.'),
  g('Choose the word opposite in meaning to "scarce".', 'plentiful', ['rare', 'costly', 'tiny'], 'Scarce means in short supply; plentiful is the opposite.'),
  g('She was so ____ in her book that she forgot lunch.', 'engrossed', ['enraged', 'entitled', 'embarrassed'], '"Engrossed" means completely absorbed, which explains forgetting lunch.'),
  g('Choose the correct sentence.', 'Neither of the boys has finished his work.', ['Neither of the boys have finished his work.', 'Neither of the boys has finished their works.', 'Neither of the boy has finished his work.'], '"Neither" is singular, so "has" and "his" agree with it.'),
  g('The idiom "to turn over a new leaf" means', 'to begin behaving better', ['to read a book', 'to leave a job', 'to waste time'], 'It means to start afresh with improved behaviour.'),
  g('Order the sentences: P He opened the door. Q A cold wind rushed in. R It was a stormy night. S Suddenly there was a knock.', 'RSPQ', ['RPSQ', 'SRPQ', 'RSQP'], 'The scene (R), the knock (S), opening the door (P), the wind (Q).'),
  g('Passage: Bees communicate the location of flowers by dancing. The angle of the dance shows direction and its length shows distance. Researchers whose robotic bee performed the dance successfully sent real bees to chosen locations. The experiment shows that', 'the dance carries enough information to guide other bees', ['robots are better than bees', 'bees cannot find flowers alone', 'the dance is only decoration'], 'Real bees followed the robot\'s dance, so the dance carries the guiding information.'),
  g('Find the part with the error: Each of the players / were given / a medal / by the captain.', 'were given', ['Each of the players', 'a medal', 'by the captain'], '"Each" is singular, so "was given".'),
  g('Choose the word closest in meaning to "frugal".', 'thrifty', ['careless', 'generous', 'greedy'], 'Frugal means careful with money.'),
  g('Although the plan looked ____, it failed in practice.', 'promising', ['hopeless', 'unsafe', 'unfinished'], 'The contrast "although … failed" needs a positive word: promising.'),
  g('Complete the sentence: The more you practise,', 'the better you become', ['you become better', 'better become you', 'the becoming is better'], 'The pattern "the more …, the better …" is a fixed structure.'),
  g('Choose the grammatically correct comparison.', 'He is taller than I am.', ['He is taller than me am.', 'He is taller as I am.', 'He is more taller than I am.'], '"Than I am" completes the comparison grammatically.'),
  g('Choose the word opposite in meaning to "generous".', 'stingy', ['kind', 'rich', 'wise'], 'A generous person gives freely; a stingy one does not.'),
  g('The idiom "a storm in a teacup" means', 'a big fuss over a small matter', ['a tea party', 'a sudden weather change', 'a serious disaster'], 'It describes great excitement about something unimportant.'),
  g('Order the sentences: P She studied hard for months. Q Her result was outstanding. R Priya wanted a place in the medical college. S Last week the list was published.', 'RPSQ', ['PRSQ', 'RSPQ', 'RPQS'], 'Her aim (R), her work (P), the list (S), her result (Q).'),
  g('Passage: Paper is made from wood pulp, but recycled paper needs less energy and water. However, recycling cannot continue for ever, because the fibres shorten each time and eventually become too short to bind. Which conclusion is supported?', 'Recycling reduces but cannot remove the need for fresh fibre', ['Recycling is useless', 'Fresh fibre is never needed', 'Recycled paper is stronger than new paper'], 'Fibres shorten with each cycle, so fresh fibre is still needed.'),
  g('Choose the correct indirect question.', 'He did not know where the station was.', ['He did not know where was the station.', 'He did not knew where the station was.', 'He did not know where the station is was.'], 'In an indirect question the verb follows the subject: "where the station was".'),
  g('Choose the word closest in meaning to "adjourned" in "The meeting was adjourned".', 'suspended until a later time', ['cancelled for ever', 'started', 'made public'], 'To adjourn is to break off until a later time.'),
  g('Neither the teacher nor the students ____ aware of the change.', 'were', ['was', 'is', 'has been'], 'The verb agrees with the nearer subject, "students", so "were".'),
  g('He was exhausted; ____, he continued working.', 'nevertheless', ['therefore', 'because', 'moreover'], 'Working despite exhaustion is a contrast.')
]));

// ================= Chapter 20: time-bound verbal drills =================
const ch20 = C({ ...base, n: 20, id: 'y4-avm-time-bound-drills', title: 'Time-Bound Verbal Drills',
  tag: 'Quick verbal items under 30 seconds: synonyms, antonyms, one-word substitutes, fill-blanks and error spotting',
  over: 'Quick verbal items (a synonym, an antonym, a one-word substitute, a fill-blank, a simple error) should take 20–30 seconds each. They reward vocabulary and grammar knowledge and cost little time, so they should be answered first in any timed section. This chapter is a drill of such items, with a pacing method: answer what you know at once, mark doubtful items, and leave long passages for last.',
  place: 'Online verbal sections often open with such quick items; speed here buys time for passages.',
  real: 'Quick, accurate language checks are part of everyday writing.',
  obj: ['Answer quick items in under 30 seconds', 'Use elimination of two options', 'Mark and skip doubtful words', 'Use grammar rules for instant fixes', 'Budget time between quick items and passages'],
  pre: ['Integrated Verbal Ability Sets', 'High-Level Contextual Vocabulary'],
  refresh: 'If you do not know a word, use its root or the sentence; if still unsure, eliminate and guess.',
  defs: ['Quick item: answered in under 30 seconds.', 'Elimination: removing options you know are wrong.', 'Mark and skip: leaving a doubtful item for later.', 'One-word substitute: a single word for a phrase.', 'Pace: time per question.'],
  intu: 'Know-it-or-not decisions should take seconds; spend the saved time on passages.',
  mental: 'Read, decide, mark, move. Do not agonise over words you do not know.',
  formulas: [['Time plan', 'Quick items 20–30 s; passages 3–4 min', 'Section plan.', 'Budget.', '10 quick items = 5 min'], ['Elimination', 'Remove two options', 'Doubt.', 'Guess.', '50% chance'], ['Suffix clue', '-less = without; -ful = full of', 'Words.', 'Roots.', 'Fearless'], ['Prefix clue', 'un-, dis-, in- = not', 'Antonyms.', 'Roots.', 'Dishonest'], ['Rule check', 'Agreement, tense', 'Grammar.', 'Rules.', 'Each … is']],
  narr: ['A section with 10 quick items should take about 5 minutes. If you spend two minutes on one word, you lose three quick items.', 'Use roots: "fearless" is without fear; "dishonest" is not honest.', 'One-word substitutes: a person who walks in sleep is a somnambulist; a fear of heights is acrophobia.', 'For grammar, use the rule: each is singular, so "each of the students was".', 'Mark doubtful items and return only if time remains.'],
  deep: [['Elimination odds', 'Removing two options doubles the chance of a correct guess.'], ['Do not over-think', 'Easy items answered fast leave time for harder ones.']],
  vars: [['Synonyms', 'Quick.', 'Frank'], ['Antonyms', 'Prefix clue.', 'Honest'], ['One-word', 'Definition.', 'Somnambulist'], ['Fill-blanks', 'Context.', 'Rarely'], ['Error spotting', 'Rule.', 'Each … was']],
  ex: [
    { t: 'Time budget', q: 'You plan 10 quick items at 30 seconds each. How long is that?', g: ['10 × 30 s'], c: 'Multiply.', s: [['Product', '10 × 30 = 300 s.'], ['Minutes', '5 minutes.']], a: '5 minutes', w: 'Keep to plan.', tr: 'Taking 30 seconds total.' },
    { t: 'Root clue', q: 'What does "fearless" mean?', g: ['-less'], c: 'Suffix.', s: [['Suffix', '-less means without.'], ['Meaning', 'Without fear.']], a: 'Without fear', w: 'Suffix clue.', tr: 'Choosing full of fear.' },
    { t: 'Elimination', q: 'You can remove two of four options. What is the chance of guessing correctly?', g: ['4 options'], c: 'Two remain.', s: [['Left', '2 options.'], ['Chance', '1 in 2 = 50%.']], a: '50%', w: 'Doubles from 25%.', tr: 'Saying 25%.' }
  ],
  short: { title: 'Decide fast', trad: 'Think until sure.', fast: 'Answer at once, eliminate if unsure, mark and move on; spend the saved time on passages.', rules: ['20–30 seconds.', 'Use roots.', 'Eliminate.', 'Mark and skip.'] },
  mist: [['Dwelling on one word', 'Time lost.', 'Mark and skip.'], ['Not using roots', 'Missed clue.', 'Check prefixes.'], ['Rechecking easy items', 'Waste.', 'Move on.']],
  tips: { sec: 25, elim: 'Eliminate the two most obviously wrong options first.', adv: 'Practise 10 items every day.', ins: 'Accuracy on quick items is mostly vocabulary built over time.' },
  rev: ['Pace.', 'Roots.', 'Elimination.', 'One-word substitutes.', 'Rules.'],
  qf: ['Quick = 20–30 s'],
  take: ['Decide fast.', 'Use roots.', 'Eliminate.', 'Mark.'],
  self: ['Can I answer in 30 seconds?', 'Can I use roots?', 'Can I eliminate fast?']
});
build(ch20, mk([
  g('Choose the word closest in meaning to "brief".', 'short', ['bright', 'broad', 'brittle'], 'Brief means lasting a short time.'),
  g('Choose the word opposite in meaning to "honest".', 'dishonest', ['truthful', 'faithful', 'careful'], 'The prefix dis- reverses the meaning.'),
  g('One word for "a person who walks in his sleep":', 'somnambulist', ['insomniac', 'optimist', 'pedestrian'], 'A somnambulist is a sleepwalker.'),
  g('One word for "fear of heights":', 'acrophobia', ['claustrophobia', 'agoraphobia', 'hydrophobia'], 'Acrophobia is fear of heights.'),
  g('Choose the correct word: He lives ____ the river.', 'near', ['nearly', 'nearby of', 'nearer to of'], '"Near the river" is the natural phrase.'),
  g('Choose the word closest in meaning to "ancient".', 'very old', ['very new', 'very big', 'very rare'], 'Ancient means belonging to the distant past.'),
  g('Choose the correct word: She rarely ____ late.', 'comes', ['come', 'coming', 'came to'], 'The third-person singular present takes "comes".'),
  g('Choose the word opposite in meaning to "expand".', 'shrink', ['grow', 'stretch', 'build'], 'To expand is to become larger; to shrink is the opposite.'),
  g('Find the error: Each of the students / were given / a book / by the teacher.', 'were given', ['Each of the students', 'a book', 'by the teacher'], '"Each" is singular, so "was given".'),
  g('Choose the word closest in meaning to "vacant".', 'empty', ['busy', 'noisy', 'dirty'], 'A vacant seat is an empty one.'),
  g('One word for "a person who loves books":', 'bibliophile', ['bibliographer', 'librarian', 'novelist'], 'A bibliophile loves books.'),
  g('Choose the correct form: The news ____ good.', 'is', ['are', 'were', 'have been'], '"News" is uncountable and singular.'),
  g('Choose the word opposite in meaning to "victory".', 'defeat', ['battle', 'success', 'peace'], 'Defeat is the opposite of victory.'),
  g('Choose the word closest in meaning to "hasten".', 'hurry', ['delay', 'rest', 'prevent'], 'To hasten is to hurry.'),
  g('One word for "a government by the people":', 'democracy', ['autocracy', 'monarchy', 'bureaucracy'], 'Democracy means government by the people.'),
  g('Choose the word opposite in meaning to "optimistic".', 'pessimistic', ['hopeful', 'cheerful', 'confident'], 'Pessimistic is the opposite.'),
  g('Find the error: He is / more taller / than his brother / by two inches.', 'more taller', ['He is', 'than his brother', 'by two inches'], '"Taller" is already comparative; "more" is redundant.'),
  g('Choose the correct preposition: She is good ____ mathematics.', 'at', ['in', 'on', 'with'], 'The idiom is "good at".'),
  g('Choose the word closest in meaning to "abundant".', 'plentiful', ['scarce', 'tiny', 'costly'], 'Abundant means existing in large quantities.'),
  g('One word for "a speech delivered without preparation":', 'extempore', ['monologue', 'oration', 'sermon'], 'An extempore speech is delivered without preparation.')
]));
