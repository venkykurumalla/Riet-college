const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const rc = (passage) => (stem, correct, wrongs, expl) => ({ q: `Read the passage and answer the question.\n\n${passage}\n\n${stem}`, c: correct, w: wrongs, e: expl });

// ---------------- Chapter 47: author tone ----------------
const T1 = rc('The company\'s annual report describes the year as "transformative". Revenue did rise by two per cent, but the report neglects to mention that costs rose by six, that three senior managers resigned, and that the new product on which the strategy depends has yet to find a single paying customer. A transformation, one might think, requires something to have changed. What the report really records is a skilful rearrangement of adjectives.');
const T2 = rc('Her last novel is not flawless; the middle chapters drag and a few of the minor characters are barely sketched. But these are small blemishes in a work of rare generosity. Every character, even the villain, is allowed to be right about something, and the final scene, in which two old rivals share a quiet meal, is as moving as anything written in the past decade.');
const T3 = rc('The river that supplied this valley for ten thousand years now fails in the dry season. The wells are going deeper, the fields are going brown and the young are leaving. We are told to wait for studies. But the studies were done long ago and they say the same thing: the water is being taken faster than it returns. Further delay is not caution; it is a decision to let the valley die.');
const ch47 = C({
  n: 47, id: 'y3-verbal-author-tone', cat: 'verbal', title: 'Author Tone and Attitude in RC',
  tag: 'Reading word choice, qualifiers and irony to name the author\'s attitude',
  over: 'Tone is the author\'s attitude towards the subject, shown not by what is said but by how it is said. Adjectives, adverbs, qualifiers, rhetorical questions and irony all carry attitude. Tone questions ask you to name that attitude (sceptical, appreciative, urgent, neutral) or to say what a phrase is meant to convey. The skill is to read the choice of words, not just the facts.',
  place: 'Tone and attitude questions appear in nearly every advanced reading-comprehension set.',
  real: 'Telling whether an email is polite, irritated or sarcastic depends on the same cues.',
  obj: ['Identify positive, negative and neutral tone', 'Read qualifiers and concessions ("but", "though")', 'Recognise irony and sarcasm', 'Match tone words to evidence', 'Avoid extreme tone labels for balanced passages'],
  pre: ['Advanced Reading Comprehension — Long Passages', 'Inference-Based RC Questions'],
  refresh: 'A tone word should fit most of the passage, not just one sentence. Balanced passages call for balanced tone words.',
  defs: [
    'Tone: the author\'s attitude to the subject.',
    'Irony: saying one thing and meaning another, often the opposite.',
    'Concession: admitting a weakness before making the main point ("not flawless, but…").',
    'Loaded word: a word that carries approval or disapproval (transformative, blemishes).',
    'Neutral tone: informative and unemotional, with few evaluative words.'
  ],
  intu: 'Ask what the author wants you to feel about the subject, and which words push you that way.',
  mental: 'Underline evaluative words. Decide positive, negative or mixed. Choose the tone word that fits the strongest evidence and the amount of emotion shown.',
  formulas: [
    ['Concession pattern', '"X is not perfect, but…" ⇒ approval', 'Positive overall.', 'Appreciative.', 'Her novel'],
    ['Irony pattern', 'Praise word in doubtful context ⇒ sarcasm', 'Mismatch of word and facts.', 'Sceptical.', '"Transformative" year'],
    ['Urgency pattern', 'Short sentences, strong verbs', 'Calls to act.', 'Impassioned.', 'Let the valley die'],
    ['Intensity check', 'Match strength of tone word to strength of text', 'Close options.', 'Calibration.', 'Critical, not furious'],
    ['Whole-passage check', 'Tone must fit most sentences', 'All.', 'Final test.', 'One sentence is not the tone']
  ],
  narr: [
    'In the annual-report passage, the report calls the year "transformative", but the author lists the facts it leaves out: costs rose faster than revenue, managers resigned and a key product has no customers. The final sentence says the report records "a skilful rearrangement of adjectives". The tone is sceptical and ironic.',
    'The novel passage opens with a concession: the middle drags and minor characters are thin. Then "but" turns to "rare generosity" and a final scene "as moving as anything written in the past decade". The tone is appreciative, with minor reservations.',
    'The river passage uses short, strong sentences and a blunt closing line. The author is urgent and critical of delay, calling it "a decision to let the valley die".',
    'To choose between close tone words, calibrate intensity. "Critical" fits mild disapproval; "scornful" fits contempt. Choose the word that matches how strong the text feels.',
    'A balanced passage deserves a balanced tone word, such as "measured" or "appreciative but not uncritical", not an extreme one.'
  ],
  deep: [['Irony with quotation marks', 'Scare quotes around a word such as "transformative" signal that the author does not accept it.'], ['Concession before conclusion', 'The strongest clause in a "not X, but Y" sentence is Y.']],
  vars: [['Sceptical', 'Doubting claims.', 'Annual report'], ['Appreciative', 'Concession then praise.', 'Novel review'], ['Urgent', 'Call to act.', 'River valley'], ['Neutral', 'Informative.', 'Reference text'], ['Ironic', 'Praise as criticism.', 'Rearrangement of adjectives']],
  ex: [
    { t: 'Irony', q: 'A report calls the year "transformative", yet costs rose faster than revenue. The author calls it "a skilful rearrangement of adjectives". What is the tone?', g: ['Quotation marks', 'Contrast of word and facts'], c: 'Spot the mismatch.', s: [['Mismatch', 'The word "transformative" is not supported by the facts.'], ['Tone', 'The author doubts the report: sceptical and ironic.']], a: 'Sceptical and ironic', w: 'The author does not accept the claim.', tr: 'Choosing admiring.' },
    { t: 'Concession', q: 'A reviewer says a novel is "not flawless" but "a work of rare generosity". What is the reviewer\'s attitude?', g: ['Not X but Y'], c: 'The stronger clause wins.', s: [['Concession', 'Minor faults are admitted.'], ['Main point', 'The praise outweighs them.']], a: 'Appreciative with minor reservations', w: 'The verdict is positive.', tr: 'Choosing neutral.' },
    { t: 'Urgency', q: 'An author says that waiting for more studies is "a decision to let the valley die". What is the tone?', g: ['Strong verbs', 'Blunt closing'], c: 'Intensity check.', s: [['Words', '"Die" and "delay" are strong.'], ['Tone', 'Urgent and critical.']], a: 'Urgent and critical', w: 'It is impassioned rather than calm.', tr: 'Choosing cautious.' }
  ],
  short: { title: 'Underline the loaded words', trad: 'Guess from the topic.', fast: 'Underline evaluative words, check for irony and concessions, then choose the tone word that matches the strength of the evidence.', rules: ['Concession then praise: appreciative.', 'Scare quotes: sceptical.', 'Short strong sentences: urgent.', 'Calibrate intensity.'] },
  mist: [['Picking an extreme tone word', 'Overstates.', 'Match intensity.'], ['Judging from one sentence', 'Misses the pattern.', 'Check the whole passage.'], ['Missing the irony', 'Takes praise literally.', 'Compare words with facts.']],
  tips: { sec: 60, elim: 'Eliminate tone words that do not fit the majority of the passage.', adv: 'Look at the last sentence; it often states the tone openly.', ins: 'Neutral options are right only when the text has no evaluative words.' },
  rev: ['Loaded words.', 'Irony.', 'Concession.', 'Urgency.', 'Intensity.'],
  qf: ['Not X, but Y ⇒ Y matters'],
  take: ['Read the words.', 'Spot irony.', 'Calibrate.', 'Check the whole passage.'],
  self: ['Can I spot irony?', 'Can I read a concession?', 'Can I match intensity?']
});
const q47 = [
  E(T1('The author\'s attitude towards the company\'s report is', 'sceptical', ['admiring', 'neutral', 'confused'], 'The author lists facts the report leaves out and ends with an ironic remark, which shows doubt about the report.')),
  E(T2('The author\'s attitude towards the novel is', 'appreciative', ['hostile', 'indifferent', 'baffled'], 'The review admits small flaws but calls the work "rare generosity" and the last scene deeply moving.')),
  E(T3('The author\'s tone is best described as', 'urgent and critical', ['playful', 'detached', 'nostalgic'], 'Short, strong statements and the description of delay as a decision to let the valley die show urgency and criticism.')),
  E(T1('The word "transformative" is placed in quotation marks to suggest that', 'the author does not accept the description', ['the word is hard to spell', 'it is a technical term', 'the report was written by experts'], 'The quotation marks distance the author from the word, which the facts do not support.')),
  E(T2('The word "blemishes" in the passage suggests that the flaws are', 'minor', ['fatal', 'deliberate', 'numerous'], '"Small blemishes" tells us the faults are small and do not spoil the work.')),
  E(T3('In the phrase "the young are leaving", the author wants to show', 'the human cost of the water shortage', ['the attractions of city life', 'a lack of schools', 'the cost of living'], 'The sentence lists consequences of the failing river; the young leaving is part of the damage.')),
  M(T1('The final sentence of the passage is an example of', 'irony', ['praise', 'a definition', 'a statistic'], 'Calling the report a "skilful rearrangement of adjectives" appears to praise skill but actually mocks the report.')),
  M(T1('Which of the following best describes the author\'s purpose?', 'to show that the report\'s claim is not supported by the facts', ['to explain how revenue is calculated', 'to praise the company\'s managers', 'to advise investors to buy shares'], 'The author sets the report\'s claim against the omitted facts to expose the mismatch.')),
  M(T2('The word "but" in the second sentence signals', 'a shift from reservations to praise', ['a shift from praise to reservations', 'a contradiction of the first sentence', 'an apology'], 'The first sentence lists faults; "but" turns to the novel\'s strengths.')),
  M(T2('Which of the following words best describes the reviewer\'s overall judgement?', 'favourable', ['scornful', 'neutral', 'ambivalent about quality'], 'Small faults are admitted, but the work is called generous and moving, so the verdict is favourable.')),
  M(T3('The author calls further delay "not caution" in order to', 'reject the idea that waiting is a safe option', ['praise the studies', 'suggest more research is needed', 'blame the young'], 'The author argues that delay is itself a harmful decision, not a careful one.')),
  M(T3('The author\'s attitude towards people who ask for more studies is', 'impatient', ['respectful', 'amused', 'envious'], 'The author says the studies were done long ago and says the same thing, so more waiting is wasteful.')),
  M(T1('Which of the following would the author most likely agree with?', 'A report should be judged by the facts it contains, not by the adjectives it uses', ['A company should avoid publishing annual reports', 'Adjectives make a report more truthful', 'Revenue is the only measure of success'], 'The author contrasts adjectives with facts and prefers the facts.')),
  M(T2('The phrase "as moving as anything written in the past decade" is an example of', 'high praise', ['mild criticism', 'neutral description', 'irony'], 'Comparing the scene favourably with a decade of writing is high praise.')),
  P(T3('Which of the following best describes how the tone changes in the passage?', 'It moves from describing a problem to blunt criticism of inaction', ['It moves from anger to calm acceptance', 'It moves from humour to sadness', 'It stays neutral throughout'], 'The passage first describes the failing river and its effects, then criticises waiting for further studies.')),
  P(T1('The author\'s remark "one might think" is used to', 'raise a mildly sarcastic point', ['introduce a statistic', 'express uncertainty about the facts', 'praise the report'], '"One might think" introduces an obvious point in a gently sarcastic way: a transformation needs a change.')),
  P(T2('The reviewer\'s approach can best be described as', 'balanced but ultimately admiring', ['purely critical', 'purely descriptive', 'dismissive of the author'], 'Faults are acknowledged, yet the review ends in admiration.')),
  P(T3('Which of the following words would LEAST describe the author\'s tone?', 'humorous', ['urgent', 'critical', 'impassioned'], 'The passage is serious and forceful; there is no humour.')),
  P(T1('If the report had listed costs and resignations honestly, the author\'s tone would probably have been', 'less sceptical', ['more sarcastic', 'angrier', 'more ironic'], 'The scepticism comes from what the report left out; a fuller report would give less cause for doubt.')),
  P(T2('A reader who wanted an uncritical rave review of the novel would find the passage', 'too reserved', ['too hostile', 'too technical', 'too short to read'], 'The reviewer admits flaws, so it is not an uncritical rave.'))
];
build(ch47, q47);

// ---------------- Chapter 48: main idea ----------------
const M1 = rc('Public libraries are often described as places to borrow books, but that description is increasingly out of date. In many towns the most heavily used part of the library is no longer the lending desk but the reading room, the computer terminals and the meeting rooms. People come to fill in job applications, to study in a quiet place, to take free classes in languages and to use the internet when they do not have it at home. Lending figures have fallen, and some councils have used this as a reason to cut library budgets. They have missed the point. A library is judged less by how many books leave it than by how many people come through its doors and what they do once inside.');
const M2 = rc('Teenagers are often accused of laziness because they sleep late at weekends, but research suggests that their body clocks shift during adolescence, so that they naturally feel sleepy later at night and wake later in the morning. Schools that start at eight o\'clock therefore ask many teenagers to wake when their bodies are still set for sleep. Several districts that moved the start of the school day by an hour reported better attendance and fewer late arrivals, and some noted better test results as well. The change is not free: bus timetables and sports practice must be rearranged. But the evidence suggests that the cost of a later start may be smaller than the cost of tired students.');
const M3 = rc('A translator does not carry words from one language to another as a porter carries sacks of grain. Words do not weigh the same in different languages, and a sentence rarely has an exact twin. A joke that depends on a pun, a proverb that depends on a local custom, or a polite phrase that has no equivalent must be rebuilt, not copied. For this reason good translators are not those who know the most words but those who understand both cultures well enough to decide what must be kept and what may be changed. Translation is closer to rewriting with discipline than to copying with care.');
const ch48 = C({
  n: 48, id: 'y3-verbal-main-idea', cat: 'verbal', title: 'Main Idea and Central Theme Identification',
  tag: 'Finding the point of a whole passage: titles, purposes, summaries and what is not the main idea',
  over: 'The main idea is the single point to which every paragraph contributes. Questions on it ask for the central theme, the best title, the primary purpose or the best summary. The right option always covers the whole passage but goes no further. This chapter shows how to find the controlling idea, how to tell it from details and examples, and how to reject options that are too narrow, too broad or simply true but irrelevant.',
  place: 'Main-idea questions open almost every comprehension set and are among the easiest marks if you read for the point.',
  real: 'Summing up a long email or report in one sentence is the same skill.',
  obj: ['Find the controlling idea of a passage', 'Distinguish main idea from supporting details', 'Choose the best title', 'Identify the author\'s primary purpose', 'Reject options that are too narrow or too broad'],
  pre: ['Advanced Reading Comprehension — Long Passages'],
  refresh: 'The first and last sentences of paragraphs often carry the main idea, but a "but" or "however" often marks the real point.',
  defs: [
    'Main idea: the point the whole passage supports.',
    'Supporting detail: a fact or example that supports the main idea.',
    'Title: a short form of the main idea that covers the whole passage.',
    'Primary purpose: why the author wrote the passage (explain, argue, compare, criticise).',
    'Too narrow / too broad: an option that covers only a part, or goes beyond, the passage.'
  ],
  intu: 'Imagine telling a friend in one sentence what the passage is about. If your sentence fits every paragraph, it is the main idea.',
  mental: 'After reading, state the point in one sentence. Compare each option with it. Reject options that match only a detail, or that claim more than the passage does.',
  formulas: [
    ['Scope test', 'Covers the whole passage, no more', 'Main idea options.', 'Primary test.', 'Libraries as community spaces'],
    ['Contrast marker', '"but", "however", "yet" ⇒ main point follows', 'Passages with a shift.', 'Pointer.', 'Out of date, but…'],
    ['Purpose verb', 'Explain, argue, compare, criticise', 'Purpose questions.', 'Verb match.', 'To argue that libraries should be judged by visitors'],
    ['Title test', 'Short, specific, covers all', 'Title questions.', 'Check.', 'More than Books'],
    ['Example vs point', 'Examples support; they are not the point', 'Detail-heavy passages.', 'Filter.', 'Job applications are an example']
  ],
  narr: [
    'In the library passage, the opening says libraries are described as places to borrow books, but that is out of date. The examples (job applications, study, classes, internet) show what people actually do. The last sentence gives the point: a library should be judged by how many people come and what they do inside. The main idea is that libraries serve as community spaces beyond lending books.',
    'In the teenage-sleep passage, the author reports that teenagers\' body clocks shift, early starts mismatch their sleep, later starts help, and the cost is smaller than the cost of tired students. The main idea is that later school start times suit teenagers\' biology and may be worth the cost.',
    'In the translation passage, the porter analogy introduces the point: translation is not a word-by-word transfer. The examples (puns, proverbs, polite phrases) support it, and the last sentence summarises it: translation is rewriting with discipline, which needs cultural understanding.',
    'A detail option, such as "job applications are filled in at libraries", is true but covers only one example. An option such as "libraries should be closed" goes beyond the passage.',
    'For purpose questions, pick the verb first. This author is arguing, not merely describing, so options beginning with "to describe" are weaker than "to argue".'
  ],
  deep: [['The last sentence', 'In argumentative passages, the last sentence often restates the main point in its sharpest form.'], ['Analogy openers', 'A comparison at the start (the porter and the grain) is a device for introducing the main idea, not the main idea itself.']],
  vars: [['Best title', 'Short and complete.', 'More than Books'], ['Primary purpose', 'Choose the verb.', 'To argue'], ['Central theme', 'Whole passage.', 'Cultural understanding'], ['Not the main idea', 'Details and examples.', 'Job applications'], ['Summary', 'One sentence.', 'Later start times']],
  ex: [
    { t: 'Main idea', q: 'A passage says libraries are mostly used for study, internet access and classes rather than lending, and argues they should be judged by visitors and activity. What is the main idea?', g: ['Contrast with the old view'], c: 'Scope test.', s: [['Point', 'Libraries serve many purposes beyond lending.'], ['Option', 'Choose the one that says so.']], a: 'Libraries function as community spaces beyond lending books', w: 'It covers the whole passage.', tr: 'Choosing a detail about job applications.' },
    { t: 'Purpose', q: 'An author uses the example of the porter to argue that translation is not word-for-word transfer. What is the primary purpose?', g: ['Argument with analogy'], c: 'Choose the verb.', s: [['Verb', 'The author argues a point.'], ['Point', 'Translation needs cultural understanding and rewriting.']], a: 'To argue that translation requires cultural judgement rather than word-for-word transfer', w: 'It is argument, not description.', tr: 'Choosing "to list words".' },
    { t: 'Too narrow', q: 'In a passage on teenage sleep, an option says "Bus timetables must be rearranged when school starts later". Is this the main idea?', g: ['A cost mentioned in the passage'], c: 'Detail or point?', s: [['Role', 'It is a cost, a supporting detail.'], ['Scope', 'It does not cover the whole passage.']], a: 'No, it is only a detail', w: 'The main idea is about the benefits outweighing the costs.', tr: 'Choosing the first option read.' }
  ],
  short: { title: 'One sentence', trad: 'Pick the most familiar option.', fast: 'State the point in one sentence, check it against every paragraph, and reject options that are narrower or broader.', rules: ['Watch the shift word.', 'Last sentence often states the point.', 'Examples are not the point.', 'Match the purpose verb.'] },
  mist: [['Choosing a detail', 'Too narrow.', 'Check whole-passage fit.'], ['Choosing an opinion not in the passage', 'Too broad.', 'Stay within what the author says.'], ['Picking the first idea', 'Order is not importance.', 'Find what all paragraphs support.']],
  tips: { sec: 60, elim: 'Eliminate options that begin with extremes or add new claims.', adv: 'Titles should be short; reject long or vague ones.', ins: 'A true statement can still be the wrong answer.' },
  rev: ['One-sentence summary.', 'Scope.', 'Contrast words.', 'Purpose verbs.', 'Detail versus point.'],
  qf: ['Main idea = point of every paragraph'],
  take: ['State the point.', 'Check scope.', 'Pick the verb.', 'Ignore examples.'],
  self: ['Can I summarise in one sentence?', 'Can I reject narrow options?', 'Can I match the purpose verb?']
});
const q48 = [
  E(M1('The central idea of the passage is that', 'libraries serve many purposes beyond lending books', ['lending books should be stopped', 'councils should build more libraries', 'the internet has replaced libraries'], 'The examples of study, internet and classes support the point that libraries do much more than lend books.')),
  E(M1('The best title for the passage is', 'More Than Just Books', ['The Decline of Reading', 'Council Budgets in Trouble', 'The History of the Library'], 'The title covers the whole passage: libraries are used for far more than books.')),
  E(M1('The author\'s primary purpose is to', 'argue that libraries should be judged by use, not only by lending', ['describe the history of lending', 'criticise people who use the internet', 'recommend new books'], 'The author argues that libraries are judged by visitors and activity, not by books lent.')),
  E(M2('The passage is mainly concerned with', 'whether schools should start later for teenagers', ['why teenagers dislike school', 'how to make buses run on time', 'the best age for sports practice'], 'The passage discusses the evidence for later school start times.')),
  E(M2('According to the passage, teenagers sleep late at weekends because', 'their body clocks shift during adolescence', ['they are lazy', 'they study late', 'their schools start late'], 'The passage says research suggests teenage body clocks shift, making them sleepy later and awake later.')),
  E(M3('The passage is mainly about', 'the difficulty and skill involved in translation', ['the history of language', 'the best dictionaries', 'how porters work'], 'The porter analogy and examples are used to show that translation is a skilled, cultural act.')),
  M(M1('Which of the following is NOT the main idea but a supporting detail?', 'People use library computers to fill in job applications', ['Libraries are judged by visitors and activity', 'Libraries do more than lend books', 'Lending figures alone give a misleading picture'], 'The job application is one example; the other options express the central argument.')),
  M(M1('The author says the councils "have missed the point" because they', 'judge libraries by lending figures alone', ['build too many libraries', 'ignore the internet', 'dislike reading'], 'Councils used falling lending figures as a reason to cut budgets, while the author says use should be judged more broadly.')),
  M(M2('Which of the following best states the main idea of the passage?', 'Later school start times suit teenagers\' biology, and the benefits may outweigh the costs', ['Teenagers should sleep more at weekends', 'Schools should change their timetables every year', 'Sports practice is more important than lessons'], 'The passage presents the body-clock evidence, the benefits and the claim that cost is smaller than the cost of tired students.')),
  M(M2('The sentence "The change is not free" mainly serves to', 'admit a cost before concluding that it may be worth paying', ['argue against the change', 'introduce a new topic', 'blame schools'], 'It concedes a cost, after which the passage argues the cost may be smaller than the benefit.')),
  M(M2('The best title for the passage is', 'Why School Should Start Later for Teenagers', ['How to Keep Teenagers Awake', 'The Problem of Weekend Lateness', 'A History of School Timetables'], 'The title covers biology, evidence from districts and the cost-benefit conclusion.')),
  M(M3('The comparison with a porter is used to show that', 'translation is not a simple transfer of words', ['translators carry heavy loads', 'translation is easy', 'porters know many languages'], 'A porter carries sacks unchanged; the author says translation cannot move words unchanged.')),
  M(M3('According to the passage, a good translator is someone who', 'understands both cultures well', ['knows the most words', 'copies sentences exactly', 'avoids jokes'], 'The author says good translators understand both cultures well enough to decide what to keep and change.')),
  M(M3('The examples of puns, proverbs and polite phrases are given to show that', 'some expressions must be rebuilt rather than copied', ['languages have no humour', 'jokes are untranslatable in any form', 'polite phrases are rare'], 'The author says such expressions "must be rebuilt, not copied".')),
  P(M3('The last sentence of the passage can best be understood as', 'a summary of the author\'s central claim', ['an unrelated aside', 'a criticism of translators', 'a question for the reader'], 'It restates the main point: translation is disciplined rewriting.')),
  P(M1('Which of the following statements would the author most likely agree with?', 'A quiet library with many visitors is succeeding even if few books are lent', ['A library with few lent books should be closed', 'Only lending matters for judging libraries', 'People should not use library computers'], 'The author says a library is judged by visitors and activity, not by books that leave it.')),
  P(M2('Which of the following, if true, would most weaken the author\'s main conclusion?', 'Districts that started later reported no change in attendance or test scores and had to cut sports programmes', ['Teenagers go to bed later than adults', 'Buses run on a fixed timetable', 'Some teenagers wake early'], 'It removes the claimed benefits while adding costs, which weakens the conclusion that the benefits may outweigh the costs.')),
  P(M3('Which of the following would be the weakest title for the passage?', 'Porters and Grain', ['Rebuilding Meaning Across Languages', 'Translation Is More Than Words', 'The Skill of Moving Between Cultures'], 'The porter image is only an analogy used to open the argument; it does not name the subject or point.')),
  P(M1('The word "heavily" in "the most heavily used part" suggests that', 'the area has more visitors than any other', ['the area is expensive to run', 'the area is old', 'the area has heavy books'], 'It means the area is used a great deal, more than any other part.')),
  P(M2('The passage implies that tired students', 'impose a cost that is less visible than timetable changes', ['perform best in the morning', 'cause late bus arrivals', 'prefer sports to lessons'], 'The author sets the visible cost of rearranging timetables against the cost of tired students, which is real but less direct.'))
];
build(ch48, q48);
