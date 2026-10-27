const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------------- Chapter 57: logical connectors ----------------
const lc = (sentence, correct, wrongs, expl) => ({ q: `Choose the connector (or pair of connectors) that best fills the blank(s).\n\n${sentence}\n\nWhich option is correct?`, c: correct, w: wrongs, e: expl });
const ch57 = C({
  n: 57, id: 'y3-verbal-logical-connectors', cat: 'verbal', title: 'Logical Connectors in Written Discourse',
  tag: 'Words that signal addition, contrast, cause, result, condition and sequence between ideas',
  url: 'https://www.indiabix.com/verbal-ability/',
  over: 'Connectors (however, therefore, although, unless, moreover) tell the reader how two ideas are related. The same two clauses can say different things depending on the connector: adding, contrasting, giving a reason, giving a result, or setting a condition. Questions ask you to supply the connector that makes the relationship logical. The method is to name the relationship first, then pick the word that expresses it.',
  place: 'Connector questions are common in the verbal sections of company tests and also guide para jumbles and completions.',
  real: 'Choosing the right connector decides whether an email reads as logical or confused.',
  obj: ['Classify relationships: addition, contrast, cause, result, condition, time', 'Distinguish conjunctions from sentence adverbs and prepositions', 'Handle paired connectors (not only… but also; neither… nor)', 'Use punctuation as a clue (semicolon + however)', 'Check grammar after the connector'],
  pre: ['Sentence Correction', 'Para Jumbles'],
  refresh: 'A relationship comes first, the word second. Ask: do these two ideas agree, oppose, explain or follow?',
  defs: [
    'Addition: moreover, furthermore, in addition.',
    'Contrast: however, nevertheless, although, whereas, on the other hand, in contrast.',
    'Cause: because, since, as, due to, because of.',
    'Result: therefore, consequently, as a result, hence.',
    'Condition: if, unless, provided that, otherwise.'
  ],
  intu: 'The connector is a road sign. It tells you whether the next idea continues in the same direction, turns against it, explains it or follows from it.',
  mental: 'Name the relationship between the two parts. Then choose the connector of that type, and check grammar: after "although" a clause, after "despite" a noun.',
  formulas: [
    ['Contrast', 'Although + clause; Despite + noun', 'Opposite ideas.', 'Grammar check.', 'Despite his illness'],
    ['Cause/result', 'Because + clause; because of + noun', 'Reasons.', 'Grammar check.', 'Because of a shortage'],
    ['Condition', 'Unless = if not; otherwise = or else', 'Warnings.', 'Logic check.', 'Unless you study'],
    ['Pairs', 'Not only… but also; neither… nor; hardly… when', 'Fixed.', 'Memorise.', 'Neither… nor'],
    ['Punctuation', '; however, / ; therefore, ', 'Sentence adverbs.', 'Clue.', 'Semicolon before however']
  ],
  narr: [
    '"The roads were flooded; ______, the schools remained closed." The second idea is the result of the first, so the connector is therefore (a result word).',
    '"She was tired; ______, she finished the report." The second idea goes against what tiredness would suggest, so the connector is nevertheless (contrast).',
    '"______ his illness, he attended the meeting." After a connector that introduces a noun phrase, use despite. "Because of" would give a reason, but the sentence shows contrast.',
    '"You will not pass ______ you study seriously." The meaning is "if you do not study seriously", so unless is correct.',
    'Pairs are fixed: not only… but also; neither… nor; hardly… when; no sooner… than. Choose the second part to match the first.'
  ],
  deep: [['Conjunction vs adverb', 'Although joins clauses in one sentence; however starts a new clause after a semicolon or full stop.'], ['Preposition vs conjunction', 'Despite and because of take nouns; although and because take clauses.']],
  vars: [['Result', 'Therefore, consequently.', 'Flood and closed schools'], ['Contrast', 'Nevertheless, whereas.', 'Tired but finished'], ['Condition', 'Unless, otherwise.', 'Study or fail'], ['Noun vs clause', 'Despite vs although.', 'Illness and meeting'], ['Fixed pairs', 'Neither… nor.', 'Manager and clerks']],
  ex: [
    { t: 'Result', q: 'The roads were flooded; ______, the schools remained closed. Which connector fits?', g: ['Cause then effect'], c: 'Name the relationship.', s: [['Relationship', 'The second idea is the result of the first.'], ['Connector', 'Therefore.']], a: 'therefore', w: 'However would suggest contrast.', tr: 'Choosing however.' },
    { t: 'Noun vs clause', q: '______ his illness, he attended the meeting. Despite or Although?', g: ['Noun phrase follows'], c: 'Check grammar.', s: [['Grammar', 'A noun phrase (his illness) follows.'], ['Connector', 'Despite takes a noun phrase.']], a: 'Despite', w: 'Although needs a clause.', tr: 'Choosing Although.' },
    { t: 'Condition', q: 'You will not pass ______ you study seriously. Which connector fits?', g: ['Warning'], c: 'Paraphrase.', s: [['Meaning', 'If you do not study seriously, you will not pass.'], ['Connector', 'Unless.']], a: 'unless', w: 'If would reverse the sense.', tr: 'Choosing if.' }
  ],
  short: { title: 'Name it, then pick it', trad: 'Pick what sounds natural.', fast: 'Name the relationship (add, contrast, cause, result, condition), then choose the connector of that type that fits the grammar.', rules: ['Result: therefore.', 'Contrast: however, nevertheless.', 'Condition: unless, otherwise.', 'Noun after despite.'] },
  mist: [['Using a result word for a contrast', 'Wrong direction.', 'Name the relationship first.'], ['Using although with a noun', 'Grammar error.', 'Use despite.'], ['Choosing if instead of unless', 'Reverses meaning.', 'Paraphrase with not.']],
  tips: { sec: 25, elim: 'Eliminate connectors of the wrong type first.', adv: 'Read the sentence without the blank to find the relationship.', ins: 'Punctuation hints: a semicolon often precedes however or therefore.' },
  rev: ['Addition.', 'Contrast.', 'Cause.', 'Result.', 'Condition.'],
  qf: ['Despite + noun; although + clause'],
  take: ['Name the relationship.', 'Check grammar.', 'Learn pairs.', 'Paraphrase with not.'],
  self: ['Can I tell cause from result?', 'Can I choose despite or although?', 'Can I use unless?']
});
const q57 = [
  E(lc('The roads were flooded; ______, the schools remained closed.', 'therefore', ['however', 'although', 'unless'], 'The closing of the schools is the result of the flooding, so a result connector fits.')),
  E(lc('She was tired; ______, she finished the report.', 'nevertheless', ['therefore', 'because', 'moreover'], 'Finishing the report goes against what tiredness would suggest, so a contrast connector fits.')),
  E(lc('______ it was raining, the match went ahead.', 'Although', ['Because', 'Unless', 'So'], 'The match going ahead contrasts with the rain, so a concession connector fits.')),
  E(lc('You will not pass ______ you study seriously.', 'unless', ['if', 'because', 'although'], 'The meaning is "if you do not study seriously you will not pass", which is expressed by unless.')),
  E(lc('He missed the bus ______ he woke up late.', 'because', ['although', 'unless', 'however'], 'Waking up late is the reason he missed the bus.')),
  E(lc('The shop sells books; ______, it offers stationery.', 'moreover', ['however', 'otherwise', 'despite'], 'The second idea adds to the first, so an addition connector fits.')),
  M(lc('Ravi is outgoing, ______ his brother is shy.', 'whereas', ['because', 'therefore', 'unless'], 'The two ideas are set against each other, so a contrast conjunction fits.')),
  M(lc('Take an umbrella; ______, you may get wet.', 'otherwise', ['moreover', 'hence', 'since'], '"Otherwise" means "if you do not", which explains the consequence of not taking an umbrella.')),
  M(lc('______ his illness, he attended the meeting.', 'Despite', ['Because of', 'Due to', 'Owing to'], 'Attending the meeting contrasts with being ill, and a noun phrase follows, so despite fits.')),
  M(lc('The company will hire more staff ______ sales continue to grow.', 'provided that', ['even though', 'unless', 'whereas'], 'Hiring depends on sales growing, which is a condition.')),
  M(lc('She works hard ______ she may achieve her goals.', 'so that', ['although', 'unless', 'whereas'], 'Working hard is the means to an end, which "so that" expresses.')),
  M(lc('The project was delayed ______ a shortage of materials.', 'because of', ['although', 'despite', 'unless'], 'A noun phrase (a shortage of materials) gives the reason for the delay.')),
  M(lc('The first plan was costly; the second, ______, was cheap and effective.', 'on the other hand', ['as a result', 'for instance', 'similarly'], 'The second plan is contrasted with the first.')),
  M(lc('He had not studied at all; ______, he failed the test.', 'as a result', ['however', 'in contrast', 'although'], 'Failing is the consequence of not studying.')),
  P(lc('______ the team played well, they lost the match; ______, they did not lose heart.', 'Although … nevertheless', ['Because … therefore', 'Unless … otherwise', 'Since … however'], 'Playing well and losing contrast (although); not losing heart despite the loss is another contrast (nevertheless).')),
  P(lc('The price was low; ______, the quality was poor. ______, customers bought it in large numbers.', 'However … Nevertheless', ['Therefore … Moreover', 'Moreover … Because', 'Since … Unless'], 'Low price against poor quality is a contrast (however); buying in large numbers despite poor quality is another contrast (nevertheless).')),
  P(lc('He is not only intelligent ______ also hardworking.', 'but', ['and', 'or', 'nor'], '"Not only… but also" is a fixed pair.')),
  P(lc('Neither the manager ______ the clerks knew about the change.', 'nor', ['or', 'and', 'but'], '"Neither… nor" is a fixed pair.')),
  P(lc('______ you apologise, she will not speak to you.', 'Unless', ['Although', 'Because', 'Whereas'], 'The meaning is "if you do not apologise, she will not speak to you".')),
  P(lc('Hardly had we reached home ______ it started to rain.', 'when', ['than', 'while', 'until'], '"Hardly… when" is the fixed correlative pair; "no sooner… than" is the other.'))
];
build(ch57, q57);

// ---------------- Chapter 58: argument evaluation ----------------
const ae = (arg, stem, correct, wrongs, expl) => ({ q: `${arg}\n\n${stem}`, c: correct, w: wrongs, e: expl });
const ch58 = C({
  n: 58, id: 'y3-verbal-argument-evaluation', cat: 'verbal', title: 'Argument Evaluation in Verbal Problems',
  tag: 'Judging the quality of arguments: fallacies, relevance, evidence, points at issue and principles',
  url: 'https://www.indiabix.com/verbal-ability/',
  over: 'Argument evaluation asks you to judge reasoning as a whole: whether a reply answers the point, which statement is irrelevant, what two speakers actually disagree about, which argument is most convincing, and which common fallacy a piece of reasoning commits. It extends the strengthen-weaken skills by naming the errors, so that you can recognise them quickly in new contexts.',
  place: 'These items appear in the verbal sections of management and campus tests.',
  real: 'Weighing a proposal in a meeting or a claim in an advertisement uses the same skills.',
  obj: ['Name common fallacies (ad hominem, straw man, false dilemma, circularity, slippery slope)', 'Find the point at issue between two speakers', 'Spot irrelevant statements', 'Choose the argument with the best evidence', 'Identify the role of a statement in an argument'],
  pre: ['Critical Reasoning in Verbal Context', 'Statements and Arguments'],
  refresh: 'A good argument has relevant, true premises and a conclusion that follows from them.',
  defs: [
    'Ad hominem: attacking the person instead of the argument.',
    'Straw man: misrepresenting a position so that it is easy to attack.',
    'False dilemma: presenting only two options when more exist.',
    'Circular reasoning: using the conclusion as a premise.',
    'Slippery slope: claiming a chain of consequences without evidence.'
  ],
  intu: 'Ask what the argument proves, what it assumes, and what it leaves out. A fallacy is a systematic way of failing at one of these.',
  mental: 'Identify the conclusion, the premises, and the move from one to the other. Then ask which fallacy label, if any, describes the move.',
  formulas: [
    ['Ad hominem', 'Person attacked, not the claim', 'Personal criticism.', 'Label.', 'He once failed an exam'],
    ['Straw man', 'Distorted version attacked', 'Rebuttals.', 'Label.', 'Stop packaging altogether'],
    ['False dilemma', 'Only A or B offered', 'Either/or.', 'Label.', 'Ban cars or accept jams'],
    ['Circularity', 'Conclusion used as premise', 'Self-support.', 'Label.', 'Reliable because reliable'],
    ['Point at issue', 'Where the speakers disagree', 'Dialogue.', 'Compare claims.', 'Best season']
  ],
  narr: [
    '"Dr Rao\'s report on pollution cannot be trusted because he once failed an examination." The argument attacks the person rather than the report, which is an ad hominem fallacy.',
    '"We must either ban all cars from the city or accept constant traffic jams." There are other options such as better public transport or congestion charges, so this is a false dilemma.',
    '"The critic wants us to stop packaging our products altogether, which is absurd." The critic only asked to reduce plastic packaging, so this misrepresents the position: a straw man.',
    'When two speakers disagree, the point at issue is the claim about which they give opposite answers. In "move the festival to summer because the weather is better" versus "keep it in winter because tourists are on holiday", the issue is which season is best.',
    'The best evidence compares like with like: a trial with a control group beats popularity, authority or "other places do it".'
  ],
  deep: [['Irrelevance', 'A statement can be true and still irrelevant; check the link to the conclusion.'], ['Principle questions', 'To find the principle behind an argument, generalise its reasoning in one sentence.']],
  vars: [['Fallacy naming', 'Match the label.', 'Straw man'], ['Point at issue', 'Opposite answers.', 'Best season'], ['Irrelevant statement', 'No link to conclusion.', 'Roof repaired'], ['Evidence strength', 'Trials over popularity.', 'Control group'], ['Role of a statement', 'Premise or conclusion.', 'Stadium cost']],
  ex: [
    { t: 'Ad hominem', q: '"Dr Rao\'s report on pollution cannot be trusted because he once failed an examination." What is the fallacy?', g: ['Personal attack'], c: 'Name the move.', s: [['Move', 'Attacks the author, not the report.'], ['Label', 'Ad hominem.']], a: 'It attacks the person instead of the argument', w: 'The report\'s evidence is not discussed.', tr: 'Calling it a straw man.' },
    { t: 'False dilemma', q: '"We must either ban all cars or accept constant traffic jams." What is wrong?', g: ['Two options only'], c: 'Look for others.', s: [['Other options', 'Public transport, congestion charges.'], ['Label', 'False dilemma.']], a: 'It presents only two options when others exist', w: 'The choices are not exhaustive.', tr: 'Accepting the dilemma.' },
    { t: 'Evidence', q: 'Which is stronger evidence for a fitness app: "a million downloads" or "a controlled trial where users lost 4 kg more than a control group"?', g: ['Popularity vs trial'], c: 'Compare like with like.', s: [['Downloads', 'Show popularity, not effect.'], ['Trial', 'Shows effect compared with a control.']], a: 'The controlled trial', w: 'Popularity is not proof.', tr: 'Choosing the downloads.' }
  ],
  short: { title: 'Name the move', trad: 'Argue back.', fast: 'Find the conclusion, find the move, name the fallacy; for evidence questions prefer controlled comparisons.', rules: ['Person ≠ argument.', 'Check for other options.', 'Check if a rebuttal distorts.', 'Prefer trials to popularity.'] },
  mist: [['Judging by agreement', 'Bias.', 'Judge reasoning, not conclusion.'], ['Calling every weak argument a fallacy', 'Over-labelling.', 'Name only the actual move.'], ['Ignoring irrelevance', 'True but off-topic.', 'Check the link.']],
  tips: { sec: 75, elim: 'Eliminate options that restate the argument.', adv: 'Learn the five fallacy labels well.', ins: 'The best evidence is specific, comparative and relevant.' },
  rev: ['Fallacy labels.', 'Point at issue.', 'Irrelevance.', 'Evidence strength.', 'Statement roles.'],
  qf: ['Name the move'],
  take: ['Find the move.', 'Name the label.', 'Compare evidence.', 'Check relevance.'],
  self: ['Can I name five fallacies?', 'Can I find the point at issue?', 'Can I rank evidence?']
});
const q58 = [
  E(ae('Anil: The city should plant more trees because they reduce heat. Bina: That is a poor idea, because trees are expensive.', 'Bina\'s reply is weak because it', 'does not show that the cost outweighs the benefit Anil mentions', ['is based on an unreliable survey', 'attacks Anil personally', 'agrees with Anil\'s main point'], 'A cost is raised, but without showing it exceeds the benefit of cooler streets.')),
  E(ae('A speaker argues that the library should extend its opening hours.', 'Which of the following would be irrelevant to the argument?', 'The library\'s roof was repaired last year.', ['Many students need a quiet place to study in the evening.', 'Office workers can only visit after 5 p.m.', 'Membership has risen by 20% this year.'], 'The roof repair has no bearing on opening hours; the other statements concern demand for evening use.')),
  E(ae('Meera: The festival should move to the summer, because the weather is better then. Naveen: It should stay in winter, because that is when tourists are on holiday.', 'The point at issue between Meera and Naveen is', 'which season is best for the festival', ['whether the weather is better in summer', 'whether tourists like festivals', 'whether the festival should be cancelled'], 'They give opposite answers about the best season; the weather and tourist claims are their reasons, not the disagreement itself.')),
  E(ae('Four arguments are offered for giving senior citizens a free bus pass.', 'Which of the following is the most convincing?', 'In a similar city a trial raised senior citizens\' bus trips by 40% and reduced their car journeys.', ['Senior citizens deserve it because they are old.', 'Everyone likes free things.', 'Other cities have done it.'], 'The trial gives specific, relevant evidence of the intended effect. The others are vague or appeal to popularity.')),
  E(ae('Sales of sunscreen rose by 30% in June, while hours of sunshine rose by 25%.', 'Which conclusion is best supported?', 'Increased sunshine may be one reason for the rise in sunscreen sales.', ['Sunscreen causes more sunshine.', 'Sunshine hours are the only reason for sales.', 'Sunscreen sales will fall in July.'], 'The two figures rise together, so a link is plausible; the other options claim too much or go beyond the data.')),
  E(ae('Millions of people use the Zing app, so it must be safe.', 'The reasoning is flawed because it', 'assumes that popularity proves safety', ['uses an expert who is biased', 'attacks the app\'s critics', 'relies on a very small sample'], 'The number of users does not show that the app is safe.')),
  M(ae('Dr Rao\'s report on pollution cannot be trusted because he once failed an examination.', 'This argument commits the error of', 'attacking the person instead of the evidence', ['assuming what it sets out to prove', 'offering only two options', 'misrepresenting the report'], 'It dismisses the report because of the author\'s past, not because of its contents: ad hominem.')),
  M(ae('We must either ban all cars from the city or accept constant traffic jams.', 'The argument is flawed because it', 'ignores other options such as better public transport', ['uses a biased sample', 'attacks the opponent', 'relies on popularity'], 'It offers only two options when others exist: a false dilemma.')),
  M(ae('Critic: The company should reduce its plastic packaging. Manager: The critic wants us to stop packaging our products altogether, which is absurd.', 'The manager\'s reply is flawed because it', 'misrepresents the critic\'s position', ['attacks the critic personally', 'offers only two options', 'depends on the popularity of the product'], 'The critic asked for a reduction, not an end to packaging: a straw man.')),
  M(ae('Two of my neighbours were rude to me, so people in this town are rude.', 'The flaw in this reasoning is that it', 'generalises from too few cases', ['attacks the neighbours', 'assumes what it proves', 'offers a false dilemma'], 'Two cases do not justify a statement about a whole town: hasty generalisation.')),
  M(ae('The report is reliable because it was written by a reliable analyst, and we know the analyst is reliable because his reports are reliable.', 'The reasoning is flawed because it', 'uses its conclusion as support for itself', ['attacks the analyst', 'offers only two options', 'misreads the report'], 'Reliability of the report and of the analyst are used to prove each other: circular reasoning.')),
  M(ae('If we allow calculators in this test, soon they will be used in every exam and students will forget arithmetic altogether.', 'The argument is flawed because it', 'assumes a chain of extreme consequences without evidence', ['relies on a single example', 'attacks the examiner', 'offers a false dilemma'], 'It leaps from one permission to extreme results with no evidence for the steps: slippery slope.')),
  M(ae('Hospitals have more sick people than anywhere else, so hospitals make people sick.', 'The flaw is that the argument', 'reverses cause and effect', ['uses too large a sample', 'attacks the hospitals', 'appeals to authority'], 'Sick people go to hospitals; hospitals do not make them sick.')),
  M(ae('A school wants to know whether a new teaching method works.', 'Which piece of evidence would help most?', 'A comparison of test scores of similar students taught by the old and new methods', ['The number of teachers who like the new method', 'The cost of the new textbooks', 'Praise from the principal'], 'A comparison of similar groups isolates the effect of the method.')),
  P(ae('Speaker 1: Our city\'s air quality improved after the odd-even car rule began, so the rule works. Speaker 2: In the same period the winds were stronger than in earlier years, and wind clears pollution.', 'Which of the following would best help decide who is right?', 'The air quality of a similar city that had the same winds but no odd-even rule', ['The number of cars owned in the first city', 'The opinions of motorists in the first city', 'The number of days the rule was in force'], 'A comparison city with the same winds but no rule separates the effect of the rule from the effect of the wind.')),
  P(ae('"Every time I wash my car, it rains, so washing my car causes rain."', 'Which of the following arguments is most similar in its reasoning?', 'Every time Meena brings her umbrella, it rains, so Meena\'s umbrella causes rain.', ['All umbrellas keep people dry, so Meena\'s umbrella keeps her dry.', 'It rains in monsoon, and this is the monsoon, so it will rain.', 'Meena brings an umbrella only when rain is forecast.'], 'Both infer a cause from a repeated coincidence; the other arguments are valid or use different reasoning.')),
  P(ae('The company should not hire Sam, because he was dismissed from his last job.', 'Which principle underlies the argument?', 'A past dismissal is a good reason not to hire someone.', ['Everyone deserves a second chance.', 'Dismissal is always unfair.', 'Companies should hire only experienced people.'], 'The argument treats a past dismissal as a sufficient reason against hiring.')),
  P(ae('An advertisement says: "Our batteries last 20% longer."', 'Which question would best test this claim?', 'Longer than what?', ['Who designed the packaging?', 'How many shops sell the batteries?', 'What colour are the batteries?'], 'The claim is meaningless without a comparison, so the first question is "longer than what?".')),
  P(ae('Two reasons are given for recommending a fitness app. I. It has a million downloads. II. In a 12-week trial, users who followed its plan lost an average of 4 kg more than a control group.', 'Which of the following is correct?', 'Only reason II is strong evidence of effectiveness', ['Only reason I is strong evidence', 'Both reasons are equally strong evidence', 'Neither reason is relevant to effectiveness'], 'Downloads show popularity; the trial compares users with a control group and so measures the effect.')),
  P(ae('"The city should not build a new stadium. The stadium would cost 500 crore. The city\'s roads are in poor condition. So the money should be spent on repairing them."', 'The statement "The stadium would cost 500 crore" plays the role of', 'a premise supporting the conclusion that the money should go to roads', ['the main conclusion', 'a counter-argument', 'an irrelevant detail'], 'It is a supporting premise for the final recommendation.'))
];
build(ch58, q58);
