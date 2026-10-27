const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------------- Chapter 53: advanced sentence correction ----------------
// orig has two errors; one1/one2 fix only one error each; both fixes both.
const sc = (orig, one1, one2, both, e1, e2) => ({
  q: `The following sentence has two errors. Choose the option that corrects both of them.\n\n${orig}\n\nWhich option is correct?`,
  c: both, w: [one1, one2, orig],
  e: `Error 1: ${e1} Error 2: ${e2} Only "${both}" corrects both errors; the other options leave at least one error.`
});
const ch53 = C({
  n: 53, id: 'y3-verbal-adv-sentence-correction', cat: 'verbal', title: 'Advanced Sentence Correction — Multiple Errors',
  tag: 'Finding and fixing two errors at once: agreement, tense, parallelism, modifiers, prepositions and comparatives',
  url: 'https://www.indiabix.com/verbal-ability/sentence-improvement/',
  over: 'In advanced sentence correction a sentence contains more than one error, and the right answer must fix all of them. Wrong options usually fix one error and leave another, or fix one and add a new one. The method is to scan the sentence for the common error families (agreement, tense, parallelism, modifiers, comparatives, prepositions), list the errors, and then choose the option that clears the list.',
  place: 'Sentence-correction items with more than one error are used in verbal sections of company tests to separate strong candidates.',
  real: 'Proofreading emails and reports for several errors at a time is the same skill.',
  obj: ['Scan a sentence for all error families', 'Fix subject-verb agreement and tense together', 'Repair parallel structure and modifiers', 'Check prepositions and idioms', 'Use elimination by checking each option for leftover errors'],
  pre: ['Sentence Correction (basic)', 'Error Detection'],
  refresh: 'Singular subjects take singular verbs; tenses must agree within the sentence; items in a list must have the same form.',
  defs: [
    'Subject-verb agreement: the verb matches the subject in number.',
    'Tense consistency: past events use past tenses in sequence.',
    'Parallelism: items in a list have the same grammatical form.',
    'Dangling modifier: a modifier whose subject is not the sentence subject.',
    'Idiomatic preposition: the preposition that always goes with a word (good at, fond of).'
  ],
  intu: 'Treat the sentence as a checklist of possible errors. Each wrong option misses one item on the checklist.',
  mental: 'Scan for the verb and its subject, then tenses, then the list items, then prepositions. Write each error in the margin. Reject any option that leaves one of them.',
  formulas: [
    ['Agreement', 'Singular subject → singular verb', 'Collective and "each/every" subjects.', 'Check first.', 'The team is working'],
    ['Tense sequence', 'Past perfect before past simple', 'Two past events.', 'Check second.', 'The train had left'],
    ['Parallelism', 'Same form in a list', 'A, B and C.', 'Check third.', 'Swimming, cycling and walking'],
    ['Idioms', 'Fixed preposition pairs', 'Adjectives and verbs.', 'Check fourth.', 'Good at, fond of'],
    ['Conditionals', 'If + past perfect, would have + past participle', 'Unreal past.', 'Check fifth.', 'If I had known, I would have come']
  ],
  narr: [
    'Take: "The team of engineers are working on the project, and it have almost finished." The subject is "team" (singular), so "is working". The pronoun "it" takes "has". Fixing only the first leaves "it have"; fixing only the second leaves "team… are".',
    'Look for list items. "She like swimming, to cycle and going for long walks" has an agreement error (likes) and a parallelism error (swimming, cycling, going). Both must be fixed.',
    'Tense sequence: "By the time we reached the station, the train already left" needs "had already left" because the leaving happened before reaching. "We have to wait" becomes "we had to wait".',
    'Conditionals: "If I would have known… I will have attended" is wrong in both halves. The correct pattern is "If I had known… I would have attended".',
    'Check each option for leftovers. An option that fixes the first error but introduces or keeps another is a trap.'
  ],
  deep: [['Collective nouns', 'A team, committee or family takes a singular verb when acting as one unit.'], ['Comparatives', 'Use -er for two things (the taller of two) and -est for three or more.']],
  vars: [['Agreement + pronoun', 'Two verbs to fix.', 'Team of engineers'], ['Parallel lists', 'Verb and list form.', 'Swimming, cycling'], ['Tense sequence', 'Past perfect and past.', 'Train had left'], ['Conditionals', 'Both halves.', 'If I had known'], ['Prepositions', 'Fixed pairs.', 'Good at, fond of']],
  ex: [
    { t: 'Two verbs', q: '"The team of engineers are working on the project, and it have almost finished." What are the two errors?', g: ['Collective subject'], c: 'List the errors.', s: [['Error 1', '"Team" is singular, so "are working" should be "is working".'], ['Error 2', '"It" takes "has", not "have".']], a: 'are → is; have → has', w: 'Both must be fixed.', tr: 'Fixing one only.' },
    { t: 'Parallel list', q: '"She like swimming, to cycle and going for long walks." What are the errors?', g: ['List of activities'], c: 'Agreement and parallelism.', s: [['Error 1', '"She like" should be "She likes".'], ['Error 2', 'The list should be swimming, cycling and going.']], a: 'like → likes; to cycle → cycling', w: 'Items in a list need the same form.', tr: 'Fixing only the verb.' },
    { t: 'Tense sequence', q: '"By the time we reached the station, the train already left." What is the error?', g: ['Two past events'], c: 'Earlier event uses the past perfect.', s: [['Order', 'The train left before we reached.'], ['Form', 'It should be "had already left".']], a: 'left → had left', w: 'The earlier past needs the past perfect.', tr: 'Leaving it as simple past.' }
  ],
  short: { title: 'Error checklist', trad: 'Read it and pick what sounds right.', fast: 'Scan for agreement, tense, parallelism, modifier and preposition errors; list them; choose the option that clears the whole list.', rules: ['List before choosing.', 'Check every option for leftovers.', 'Two errors, one option fixes both.', 'Read the winner aloud.'] },
  mist: [['Fixing only one error', 'The answer still wrong.', 'Count errors before looking at options.'], ['Introducing a new error', 'Trap option.', 'Read each option fully.'], ['Trusting the ear alone', 'Familiar-sounding mistakes.', 'Use the checklist.']],
  tips: { sec: 60, elim: 'Drop options that keep an error you have already spotted.', adv: 'Start with the verbs.', ins: 'The correct option usually looks plain and unremarkable.' },
  rev: ['Agreement.', 'Tense.', 'Parallelism.', 'Idioms.', 'Conditionals.'],
  qf: ['If + had, would have'],
  take: ['List errors.', 'Check all options.', 'Mind collective nouns.', 'Keep tenses in order.'],
  self: ['Can I list two errors?', 'Can I repair parallel structure?', 'Can I fix a conditional?']
});
const q53 = [
  E(sc('The team of engineers are working on the project, and it have almost finished.', 'The team of engineers is working on the project, and it have almost finished.', 'The team of engineers are working on the project, and it has almost finished.', 'The team of engineers is working on the project, and it has almost finished.', '"Team" is singular, so "are working" must be "is working".', '"It" takes "has", not "have".')),
  E(sc('She don\'t like coffee, neither does her brother.', 'She doesn\'t like coffee, neither does her brother.', 'She don\'t like coffee, and neither does her brother.', 'She doesn\'t like coffee, and neither does her brother.', '"She" takes "doesn\'t", not "don\'t".', 'Two clauses need a joining word such as "and"; a comma alone splices them.')),
  E(sc('He has been living in Delhi since five years and he enjoy it.', 'He has been living in Delhi for five years and he enjoy it.', 'He has been living in Delhi since five years and he enjoys it.', 'He has been living in Delhi for five years and he enjoys it.', 'A period of time takes "for", not "since".', '"He" takes "enjoys".')),
  E(sc('The news about the floods were shocking, and many people was left homeless.', 'The news about the floods was shocking, and many people was left homeless.', 'The news about the floods were shocking, and many people were left homeless.', 'The news about the floods was shocking, and many people were left homeless.', '"News" is singular, so "was shocking".', '"People" is plural, so "were left".')),
  E(sc('Between you and I, the plan is more better than the old one.', 'Between you and me, the plan is more better than the old one.', 'Between you and I, the plan is better than the old one.', 'Between you and me, the plan is better than the old one.', 'After a preposition use the object form: "between you and me".', '"Better" is already a comparative; "more better" is a double comparative.')),
  E(sc('Having finished the work, the lights were switched off by him, and he return home.', 'Having finished the work, he switched off the lights, and he return home.', 'Having finished the work, the lights were switched off by him, and he returned home.', 'Having finished the work, he switched off the lights and returned home.', 'The opening phrase "Having finished the work" must be followed by the person who finished it ("he").', '"He return" should be "he returned".')),
  M(sc('She like swimming, to cycle and going for long walks.', 'She likes swimming, to cycle and going for long walks.', 'She like swimming, cycling and going for long walks.', 'She likes swimming, cycling and going for long walks.', '"She" takes "likes".', 'The list must be parallel: swimming, cycling and going.')),
  M(sc('Of the two roads, this one is the shortest and more safer.', 'Of the two roads, this one is the shorter and more safer.', 'Of the two roads, this one is the shortest and safer.', 'Of the two roads, this one is the shorter and safer.', 'For two things use the comparative "shorter", not the superlative "shortest".', '"More safer" is a double comparative; use "safer".')),
  M(sc('He is good in mathematics and fond for reading.', 'He is good at mathematics and fond for reading.', 'He is good in mathematics and fond of reading.', 'He is good at mathematics and fond of reading.', 'The idiom is "good at".', 'The idiom is "fond of".')),
  M(sc('If I would have known about the meeting, I will have attended it.', 'If I had known about the meeting, I will have attended it.', 'If I would have known about the meeting, I would have attended it.', 'If I had known about the meeting, I would have attended it.', 'The "if" clause of an unreal past needs the past perfect: "had known".', 'The main clause needs "would have attended".')),
  M(sc('By the time we reached the station, the train already left and we have to wait for two hours.', 'By the time we reached the station, the train had already left and we have to wait for two hours.', 'By the time we reached the station, the train already left and we had to wait for two hours.', 'By the time we reached the station, the train had already left and we had to wait for two hours.', 'The train\'s leaving came earlier, so it needs the past perfect: "had already left".', 'The waiting is also in the past: "we had to wait".')),
  M(sc('The reason why he was late is because the bus have broken down.', 'The reason he was late is that the bus have broken down.', 'The reason why he was late is because the bus broke down.', 'The reason he was late is that the bus broke down.', '"The reason… is because" is redundant; use "the reason… is that".', '"The bus have broken" has a wrong auxiliary; the bus broke down.')),
  M(sc('Walking down the street, a dog barked at me and frightened.', 'Walking down the street, I was frightened when a dog barked at me and frightened.', 'Walking down the street, a dog barked at me and I was frightened.', 'Walking down the street, I was frightened when a dog barked at me.', 'The opening phrase must be followed by the person walking ("I"), not the dog.', '"Frightened" alone is incomplete; the sentence needs "I was frightened".')),
  M(sc('He didn\'t give me no help, and the books was missing too.', 'He didn\'t give me any help, and the books was missing too.', 'He didn\'t give me no help, and the books were missing too.', 'He didn\'t give me any help, and the books were missing too.', 'A double negative must be corrected: "didn\'t give me any help".', '"Books" is plural, so "were missing".')),
  P(sc('The manager insisted that every employee submits their report and was present on Monday.', 'The manager insisted that every employee submit his or her report and was present on Monday.', 'The manager insisted that every employee submits his or her report and be present on Monday.', 'The manager insisted that every employee submit his or her report and be present on Monday.', 'After "insisted that" the subjunctive uses the base form: "submit".', 'The second verb must match: "be present"; "every employee" takes "his or her".')),
  P(sc('The candidate whom the panel believed was the best withdrew his name, and later regret it.', 'The candidate who the panel believed was the best withdrew his name, and later regret it.', 'The candidate whom the panel believed was the best withdrew his name, and later regretted it.', 'The candidate who the panel believed was the best withdrew his name and later regretted it.', '"Who" is the subject of "was the best", so "whom" is wrong.', '"Regret" should be "regretted" to match "withdrew".')),
  P(sc('The new phone is more cheaper than, but not as durable, the old one.', 'The new phone is cheaper than, but not as durable, the old one.', 'The new phone is more cheaper than, but not as durable as, the old one.', 'The new phone is cheaper than, but not as durable as, the old one.', '"More cheaper" is a double comparative; use "cheaper".', 'The comparison "not as durable" needs "as" before "the old one".')),
  P(sc('The report was handed to the director that contained errors, and he return it.', 'The report that contained errors was handed to the director, and he return it.', 'The report was handed to the director that contained errors, and he returned it.', 'The report that contained errors was handed to the director, and he returned it.', '"That contained errors" must sit next to "the report", not "the director".', '"He return" should be "he returned".')),
  P(sc('Fewer people than expected has attended, and there is less chairs in the hall.', 'Fewer people than expected have attended, and there is less chairs in the hall.', 'Fewer people than expected has attended, and there are fewer chairs in the hall.', 'Fewer people than expected have attended, and there are fewer chairs in the hall.', '"People" is plural, so "have attended".', 'Countable "chairs" takes "fewer" and "are".')),
  P(sc('On receiving the letter, the committee were meeting again and decides to postpone it.', 'On receiving the letter, the committee met again and decides to postpone it.', 'On receiving the letter, the committee were meeting again and decided to postpone it.', 'On receiving the letter, the committee met again and decided to postpone the meeting.', 'The committee acted in the past: "met", not "were meeting".', '"Decides" should be "decided", and "it" is unclear; "the meeting" removes the ambiguity.'))
];
build(ch53, q53);

// ---------------- Chapter 54: advanced error detection (idiomatic) ----------------
const ed = (segs, errIdx, fix, expl) => {
  const body = segs.map((s, i) => `(${'abcd'[i]}) ${s}`).join(' ');
  const w = segs.filter((_, i) => i !== errIdx);
  return { q: `Read the sentence in four parts and find the part that contains an error.\n\n${body}\n\nWhich part contains the error?`, c: segs[errIdx], w, e: `The error is in "${segs[errIdx]}": ${fix}. ${expl}` };
};
const ch54 = C({
  n: 54, id: 'y3-verbal-adv-error-detection', cat: 'verbal', title: 'Advanced Error Detection — Idiomatic Errors',
  tag: 'Spotting the wrong preposition, idiom, collocation or agreement in a sentence divided into parts',
  url: 'https://www.indiabix.com/verbal-ability/spotting-errors/',
  over: 'In error detection the sentence is split into four parts and exactly one part contains an error. Advanced items test idiom rather than simple grammar: the preposition that goes with a verb or adjective (senior to, prefer to, fond of), set pairs such as hardly… when and no sooner… than, and verb patterns that follow certain words (insist on, accustomed to). These cannot be reasoned out; they must be learned and recognised.',
  place: 'Idiom-based error spotting is common in bank, SSC and company tests because it separates careful readers from guessers.',
  real: 'Proofreading professional writing for natural phrasing uses the same sense.',
  obj: ['Recall idiomatic prepositions of common words', 'Recognise correlative pairs (hardly… when, no sooner… than)', 'Spot wrong verb patterns after fixed words', 'Check agreement with intervening phrases', 'Scan systematically part by part'],
  pre: ['Error Detection (basic)', 'Idiomatic Expressions and Phrases'],
  refresh: 'Some words fix their following word: prefer + to, senior + to, accustomed + to + -ing, fond + of, congratulate + on.',
  defs: [
    'Idiomatic preposition: the preposition that natural usage attaches to a word.',
    'Correlative pair: two words that always occur together (hardly… when).',
    'Collocation: words that naturally occur together.',
    'Gerund after "to": accustomed to waking, used to waking.',
    'Intervening phrase: a phrase between subject and verb that does not change agreement.'
  ],
  intu: 'Read each part with the word before it. Error parts often sound slightly foreign, because the preposition or pair is wrong.',
  mental: 'Check part by part: first the verb and its subject, then each preposition against the word it follows, then correlative pairs. The part that fails is the answer.',
  formulas: [
    ['Prefer', 'prefer A to B', 'Preferences.', 'Not "than".', 'Tea to coffee'],
    ['Senior/junior', 'senior to, junior to', 'Rank.', 'Not "than".', 'Senior to me'],
    ['Congratulate', 'congratulate on', 'Success.', 'Not "to".', 'On her success'],
    ['Pairs', 'hardly… when; no sooner… than', 'Immediate sequence.', 'Fixed.', 'No sooner… than'],
    ['Accustomed', 'accustomed to + -ing', 'Habit.', 'Gerund.', 'Accustomed to waking']
  ],
  narr: [
    '"He is senior / than me / by two years / in the office." The word "senior" takes "to", so the part "than me" is wrong; the correct phrase is "senior to me".',
    '"I prefer tea / than coffee / in the morning / because it is lighter." "Prefer" takes "to", so "than coffee" should be "to coffee".',
    '"Hardly had he / reached the station / than the train / left." The correlative of "hardly" is "when", so "than the train" is wrong. In contrast, "no sooner" takes "than".',
    '"The professor, along with / his two assistants, / are conducting / the experiment." The subject is "professor" (singular); "along with his assistants" does not change that, so "are conducting" should be "is conducting".',
    'Always read parts with the word that governs them. Many errors are visible only when the preposition is attached to its word.'
  ],
  deep: [['Governing words', 'The error is often in a preposition that belongs to a word in the previous part.'], ['Grammar vs idiom', 'Agreement and tense errors can be reasoned; idiom errors must be recognised.']],
  vars: [['Comparatives with to', 'Senior, prefer.', 'Senior to'], ['Pairs', 'Hardly… when.', 'No sooner… than'], ['Verb patterns', 'Insist on, accustomed to -ing.', 'Insisted on paying'], ['Agreement', 'Intervening phrases.', 'Along with'], ['Collocations', 'Fond of, congratulate on.', 'Fond of music']],
  ex: [
    { t: 'Comparative idiom', q: '"He is senior / than me / by two years." Which part has the error?', g: ['Senior'], c: 'Check the governing word.', s: [['Rule', '"Senior" takes "to".'], ['Error', '"than me" should be "to me".']], a: 'than me', w: 'Senior to me.', tr: 'Choosing "by two years".' },
    { t: 'Correlative pair', q: '"Hardly had he / reached the station / than the train / left." Which part has the error?', g: ['Hardly'], c: 'Correlative pair.', s: [['Rule', '"Hardly" is followed by "when".'], ['Error', '"than the train" should be "when the train".']], a: 'than the train', w: 'No sooner takes than.', tr: 'Choosing the first part.' },
    { t: 'Agreement', q: '"The professor, along with / his two assistants, / are conducting / the experiment." Which part has the error?', g: ['Intervening phrase'], c: 'Find the subject.', s: [['Subject', '"The professor" is singular.'], ['Error', '"are conducting" should be "is conducting".']], a: 'are conducting', w: '"Along with" does not add to the subject.', tr: 'Choosing "his two assistants".' }
  ],
  short: { title: 'Part by part', trad: 'Hunt for something odd.', fast: 'Check each part with its governing word: preposition, correlative pair, verb pattern, then agreement.', rules: ['Prefer/senior take to.', 'Hardly… when; no sooner… than.', 'Insist on + -ing.', 'Along with does not change number.'] },
  mist: [['Choosing the part that sounds unusual but is correct', 'Rare is not wrong.', 'Test against a rule.'], ['Ignoring the governing word', 'Preposition missed.', 'Read the word and its follower together.'], ['Counting "along with" as plural', 'Agreement error.', 'Use the main subject.']],
  tips: { sec: 40, elim: 'Parts that match a known rule are safe; drop them.', adv: 'Learn the top 40 idiomatic prepositions.', ins: 'Exactly one part is wrong; if you find two, re-check.' },
  rev: ['Prefer, senior to.', 'Hardly… when.', 'Insist on.', 'Along with.', 'Fond of.'],
  qf: ['Prefer to; senior to; hardly… when'],
  take: ['Learn idioms.', 'Check pairs.', 'Mind subjects.', 'Part by part.'],
  self: ['Can I recall the idiomatic prepositions?', 'Can I spot a wrong correlative?', 'Can I find agreement errors?']
});
const q54 = [
  E(ed(['She is married', 'with a doctor', 'and lives', 'in Chennai.'], 1, 'one is married "to" someone', 'The other parts are correct.')),
  E(ed(['He is senior', 'than me', 'by two years', 'in the office.'], 1, '"senior" takes "to": "senior to me"', 'The other parts are correct.')),
  E(ed(['I prefer tea', 'than coffee', 'in the morning', 'because it is lighter.'], 1, '"prefer" takes "to": "to coffee"', 'The other parts are correct.')),
  E(ed(['The committee', 'consists from', 'five members', 'from different departments.'], 1, 'the idiom is "consists of"', 'The other parts are correct.')),
  E(ed(['He insisted', 'to pay', 'the bill', 'himself.'], 1, 'the idiom is "insisted on paying"', 'The other parts are correct.')),
  E(ed(['The thief was', 'caught red-handed', 'while he was trying', 'to break in the house.'], 3, 'the verb is "break into the house"', 'The other parts are correct.')),
  M(ed(['Despite of', 'the heavy rain,', 'the match', 'went on as planned.'], 0, '"despite" is not followed by "of"; use "despite" or "in spite of"', 'The other parts are correct.')),
  M(ed(['She has been', 'working in this company', 'since ten years', 'and loves it.'], 2, 'a period of time takes "for": "for ten years"', 'The other parts are correct.')),
  M(ed(['The manager gave', 'a stern warning', 'to the employees', 'about to arrive late.'], 3, 'the idiom is "warn against arriving late"', 'The other parts are correct.')),
  M(ed(['He is not accustomed', 'to wake up', 'early in the morning', 'so he is often late.'], 1, '"accustomed to" is followed by a gerund: "to waking up"', 'The other parts are correct.')),
  M(ed(['Neither of', 'the two proposals', 'were accepted', 'by the board.'], 2, '"neither" takes a singular verb: "was accepted"', 'The other parts are correct.')),
  M(ed(['My brother is', 'very fond for', 'classical music', 'and old films.'], 1, 'the idiom is "fond of"', 'The other parts are correct.')),
  M(ed(['The prices of vegetables', 'have gone up', 'in the recent weeks', 'because of the floods.'], 2, 'the natural phrase is "in recent weeks"', 'The other parts are correct.')),
  M(ed(['I was surprised', 'at his sudden', 'decision of resign', 'from the post.'], 2, 'the pattern is "decision to resign"', 'The other parts are correct.')),
  P(ed(['Hardly had he', 'reached the station', 'than the train', 'left.'], 2, '"hardly" is followed by "when"', 'The other parts are correct.')),
  P(ed(['He congratulated her', 'to her success', 'and wished her', 'a bright future.'], 1, 'one congratulates someone "on" success', 'The other parts are correct.')),
  P(ed(['The professor, along with', 'his two assistants,', 'are conducting', 'the experiment.'], 2, 'the subject is singular: "is conducting"', 'The other parts are correct.')),
  P(ed(['It is high time', 'that we will take', 'a decision on', 'this matter.'], 1, 'after "it is high time" use the past: "that we took"', 'The other parts are correct.')),
  P(ed(['She was so tired', 'that she could hardly', 'keep her eyes', 'to open.'], 3, '"keep her eyes open" has no "to"', 'The other parts are correct.')),
  P(ed(['No sooner had', 'the teacher entered', 'when the students', 'stood up.'], 2, '"no sooner" is followed by "than"', 'The other parts are correct.'))
];
build(ch54, q54);
