const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const cr = (arg, stem, correct, wrongs, expl) => ({ q: `Argument: ${arg}\n\n${stem}`, c: correct, w: wrongs, e: expl });

// ---------------- Chapter 49: critical reasoning in verbal context ----------------
const FOLLOW = 'Which of the following must be true if the statements above are true?';
const CONC = 'Which of the following is the main conclusion of the argument?';
const ASSUME = 'Which of the following is an assumption on which the argument depends?';
const FLAW = 'The reasoning in the argument is flawed because it';
const PARA = 'Which of the following best resolves the apparent paradox above?';
const ch49 = C({
  n: 49, id: 'y3-verbal-critical-reasoning-verbal', cat: 'verbal', title: 'Critical Reasoning in Verbal Context',
  tag: 'Main conclusions, hidden assumptions, flaws, paradoxes and parallel reasoning in short arguments',
  url: 'https://www.indiabix.com/verbal-ability/',
  over: 'Verbal critical reasoning treats a short passage as an argument. You are asked to find the conclusion, name the assumption, spot a flaw, resolve an apparent contradiction, or pick an argument with the same pattern. All of these start with the same step: separate the conclusion from its supporting statements, then look at the gap between them. Every question type is a different question about that gap.',
  place: 'These items appear in the verbal sections of management and campus tests alongside reading comprehension.',
  real: 'Assessing a proposal, a news story or an advertisement uses the same questions.',
  obj: ['Separate premises from conclusions', 'Identify necessary assumptions with the negation test', 'Name common flaws (correlation, sample, converse, false cause)', 'Resolve paradoxes with a reconciling fact', 'Recognise parallel reasoning by structure'],
  pre: ['Critical Reasoning — Strengthen and Weaken Arguments', 'Statements and Arguments'],
  refresh: 'A conclusion is signalled by words like therefore, thus, so, should; premises by because, since, given that.',
  defs: [
    'Main conclusion: the claim the rest of the argument supports.',
    'Assumption: an unstated premise the argument needs.',
    'Flaw: an error in the way premises are used to reach the conclusion.',
    'Paradox: two facts that seem to conflict; a resolution gives a fact that makes both true.',
    'Parallel reasoning: another argument with the same logical form, valid or flawed.'
  ],
  intu: 'Every question is about the same skeleton: premises, a gap, a conclusion. Find the skeleton, then ask which question is being asked of it.',
  mental: 'Mark the conclusion. List the premises. State the gap in one line. Then answer the specific question: what fills the gap (assumption), what is wrong with it (flaw), what follows (inference), what explains it (paradox).',
  formulas: [
    ['Negation test', 'Deny the assumption; the argument fails', 'Assumption questions.', 'Primary.', 'Drivers will slow down'],
    ['Common flaws', 'Correlation as cause; unrepresentative sample; converse; part-whole', 'Flaw questions.', 'Checklist.', 'Blue tie, promotion'],
    ['Paradox resolver', 'A fact that explains both observations', 'Paradox questions.', 'Reconcile.', 'More patients came'],
    ['Parallel form', 'Copy the logical shape, not the topic', 'Parallel questions.', 'Structure.', 'No A is B; all C are B; no C is A'],
    ['Must be true', 'Only what the statements guarantee', 'Inference questions.', 'Strict.', 'Some books on the top shelf']
  ],
  narr: [
    'To find the main conclusion, look for the recommendation or claim the rest supports. In "Our town\'s bus service loses money, and passengers are falling. Raising fares will only drive away more passengers. The council should therefore improve the frequency of buses instead", the conclusion is the final sentence. The rest are premises.',
    'An assumption is a bridge. "The school banned phones so that students will pay more attention" assumes that students will pay more attention if phones are not available. Negate it and the ban has no point.',
    'Common flaws: "The last three managers who wore blue ties were promoted, so blue ties lead to promotion" confuses correlation with cause. "No one has proved the product is not the best, so it is the best" treats absence of disproof as proof.',
    'To resolve a paradox, find a fact that makes both observations true. A hospital introduced a scheduling system to cut waiting times, yet waits rose. If the easier booking system brought many more patients, both facts hold.',
    'For parallel reasoning, rewrite each argument in symbols. "No dog is a bird; all sparrows are birds; so no sparrow is a dog" has the form No A is B; all C are B; so no C is A. A hammer-tool-toy argument with the same form is parallel.'
  ],
  deep: [['Converse error', 'All A are B does not give All B are A; "Ravi is educated, so he is a professor" is invalid.'], ['Sampling flaw', 'Surveying only people leaving a gym tells you about gym-goers, not about people in general.']],
  vars: [['Main conclusion', 'Therefore sentence.', 'Bus service'], ['Assumption', 'Negation test.', 'School phones'], ['Flaw', 'Name the fallacy.', 'Blue tie'], ['Paradox', 'Reconcile.', 'Hospital waits'], ['Parallel reasoning', 'Match form.', 'Sparrows and dogs']],
  ex: [
    { t: 'Main conclusion', q: 'A town\'s bus service loses money and passengers are falling; raising fares would drive more away. "The council should therefore improve bus frequency instead." Which sentence is the conclusion?', g: ['Signal word "therefore"'], c: 'Find the recommendation.', s: [['Signal', '"Therefore" marks the conclusion.'], ['Content', 'Improve bus frequency instead of raising fares.']], a: 'The council should improve bus frequency instead of raising fares', w: 'The others are premises.', tr: 'Choosing a premise.' },
    { t: 'Flaw', q: 'The last three managers who wore blue ties were promoted, so wearing a blue tie leads to promotion. What is the flaw?', g: ['Three cases'], c: 'Name the fallacy.', s: [['Pattern', 'Two things occurred together.'], ['Flaw', 'It assumes the first caused the second.']], a: 'It assumes that a connection between two events shows that one causes the other', w: 'Correlation is not cause.', tr: 'Calling it a sample problem.' },
    { t: 'Paradox', q: 'A hospital introduced a scheduling system to cut waiting times, yet waiting times rose. What resolves this?', g: ['Two facts in tension'], c: 'Reconcile both.', s: [['Look for', 'A fact that makes both true.'], ['Fact', 'Easier booking brought many more patients.']], a: 'The new system made booking easier, so many more patients came', w: 'The system worked but demand grew.', tr: 'Choosing an unrelated fact.' }
  ],
  short: { title: 'Skeleton then question', trad: 'Read the options first.', fast: 'Mark the conclusion, list the premises, state the gap, and only then read the options with the question type in mind.', rules: ['Therefore marks the conclusion.', 'Negate to test assumptions.', 'Name the flaw type.', 'Reconcile both facts.'] },
  mist: [['Picking a premise as the conclusion', 'Misses the target.', 'Look for therefore/should.'], ['Choosing an assumption that is too strong', 'Not needed.', 'Choose the minimal bridge.'], ['Picking parallel by topic', 'Surface match.', 'Match logical form.']],
  tips: { sec: 90, elim: 'Eliminate options that are extreme, irrelevant or restate the premise.', adv: 'For parallel reasoning, replace nouns with letters.', ins: 'Same skeleton, different question.' },
  rev: ['Conclusion vs premise.', 'Negation test.', 'Flaw list.', 'Paradox resolver.', 'Parallel form.'],
  qf: ['Premise + gap = conclusion'],
  take: ['Find the skeleton.', 'Name the gap.', 'Test with negation.', 'Match form for parallels.'],
  self: ['Can I find a conclusion?', 'Can I name a flaw?', 'Can I resolve a paradox?']
});
const q49 = [
  E(cr('Every employee of the firm who works night shifts is paid an allowance. Rakesh works night shifts.', FOLLOW, 'Rakesh is paid an allowance.', ['All employees of the firm are paid an allowance.', 'Rakesh works more hours than the others.', 'Rakesh prefers night shifts.'], 'The first statement applies to every night-shift employee, so Rakesh is paid the allowance. The other options go beyond the statements.')),
  E(cr('The town\'s bus service loses money every year and the number of passengers is falling. Raising fares will only drive away more passengers. The council should therefore improve the frequency of buses instead.', CONC, 'The council should improve the frequency of buses instead of raising fares.', ['The town\'s bus service loses money every year.', 'The number of passengers is falling.', 'Raising fares will drive away more passengers.'], 'The word "therefore" marks the conclusion; the other statements are premises.')),
  E(cr('A school has banned mobile phones in classrooms so that students will pay more attention to lessons.', ASSUME, 'Students will pay more attention if phones are not available in class.', ['All students own mobile phones.', 'Teachers dislike phones.', 'Phones are expensive to replace.'], 'The ban is meant to improve attention, which works only if removing phones increases attention.')),
  E(cr('Our product must be the best on the market, because no one has ever proved that it is not.', FLAW, 'treats the absence of proof against a claim as proof of the claim', ['uses facts that are out of date', 'compares the product with too many competitors', 'relies on an expert whose opinion is biased'], 'Lack of disproof does not show something is true.')),
  E(cr('A shop cut its prices by 10 per cent and its revenue rose, but its profit fell.', PARA, 'The shop\'s costs of buying goods and paying staff rose by more than its extra revenue.', ['Customers prefer lower prices to higher ones.', 'Competing shops also cut their prices.', 'The shop opened on more days of the year.'], 'If costs rose by more than the extra revenue, revenue can rise while profit falls.')),
  E(cr('Some of the books in the library are in French. All the books in French are kept on the top shelf.', FOLLOW, 'Some books on the top shelf are in French.', ['All books on the top shelf are in French.', 'No books in the library are in English.', 'Most books in the library are on the top shelf.'], 'At least one French book exists and all French books are on the top shelf, so some top-shelf books are French.')),
  M(cr('The new software cut the time taken to process an invoice from ten minutes to four, so the finance team will be able to process more invoices each day.', ASSUME, 'The time saved will be used to process more invoices.', ['The software is cheaper than the old system.', 'Invoices will become simpler.', 'The finance team will be given a bonus.'], 'The conclusion that more invoices will be processed depends on the saved time actually being used for processing.')),
  M(cr('The last three managers who wore blue ties were promoted, so wearing a blue tie leads to promotion.', FLAW, 'assumes that two events occurring together means that one causes the other', ['relies on the opinion of an expert', 'uses a very large sample', 'contradicts one of its own premises'], 'Three cases where two things coincide do not show that a blue tie causes promotion.')),
  M(cr('Online courses are better than classroom courses, because students enrolled in them score higher in the final exams.', 'Which of the following, if true, most weakens the argument?', 'Students who choose online courses are generally those who already had higher marks before enrolling.', ['Online courses are cheaper than classroom courses.', 'Final exams are held in classrooms.', 'Many students enjoy online courses.'], 'If online students were stronger to begin with, their higher scores need not result from the courses.')),
  M(cr('A hospital introduced a new scheduling system to cut waiting times, yet patients now report longer waits.', PARA, 'The new system made appointments easier to book, so many more patients now come.', ['The hospital is the oldest in the city.', 'Waiting times were long before the new system.', 'The scheduling system was cheap to install.'], 'If easier booking brought many more patients, the system could work well and waits still rise.')),
  M(cr('No dog is a bird. All sparrows are birds. Therefore no sparrow is a dog.', 'Which of the following arguments is most similar in its reasoning?', 'No tool is a toy. All hammers are tools. Therefore no hammer is a toy.', ['All tools are useful. All hammers are tools. Therefore all hammers are useful.', 'Some tools are heavy. All hammers are tools. Therefore some hammers are heavy.', 'No tool is a toy. No hammer is a toy. Therefore all hammers are tools.'], 'Both have the form: No A is B; all C are B; therefore no C is A.')),
  M(cr('Most of the employees who attended the workshop are from the sales team. Ravi attended the workshop.', 'Which of the following conclusions is best supported?', 'Ravi is probably from the sales team.', ['Ravi is definitely from the sales team.', 'No employee outside the sales team attended.', 'Ravi organised the workshop.'], '"Most" makes it likely, but not certain, that an attendee is from the sales team.')),
  M(cr('The airline\'s decision to charge for checked baggage will increase its profits, because passengers will carry less baggage and the fuel costs of the flights will fall.', ASSUME, 'The fuel savings and baggage fees will outweigh any loss of passengers.', ['All passengers dislike checked baggage.', 'The airline\'s competitors do not charge for baggage.', 'Fuel prices will never rise.'], 'The profit claim depends on the gains (fees, fuel saved) exceeding any losses from customers who leave.')),
  P(cr('A survey of people leaving a gym found that 90 per cent exercised regularly. The researcher concluded that most people in the city exercise regularly.', FLAW, 'bases a general claim on a sample that is not representative', ['uses too many people in the survey', 'ignores that exercise is healthy', 'confuses a cause with its effect'], 'People leaving a gym are more likely than others to exercise, so the sample is not representative of the city.')),
  P(cr('A college argues that its teaching is superior, because 95 per cent of its graduates found jobs within six months.', 'Which of the following, if true, most weakens the argument?', 'The college admits only students with very high prior marks and strong family business connections.', ['The college has a large library.', 'Some graduates started their own businesses.', 'The college has been open for fifty years.'], 'High-scoring, well-connected students may find jobs regardless of teaching, giving another explanation for the placement record.')),
  P(cr('Since the state taxed sugary drinks, sales of these drinks have fallen by 20 per cent. The health minister concludes that the tax has improved public health.', ASSUME, 'Consumers who bought fewer sugary drinks did not switch to other equally unhealthy products.', ['All consumers know the dangers of sugary drinks.', 'The tax is the highest in the country.', 'Sales of other drinks have not changed.'], 'If people switched to equally unhealthy products, health would not improve, so the argument needs that they did not.')),
  P(cr('All professors are educated. Ravi is educated. Therefore Ravi is a professor.', 'Which of the following arguments contains the same flaw?', 'All footballers are fit. Sameer is fit. Therefore Sameer is a footballer.', ['All footballers are fit. Sameer is a footballer. Therefore Sameer is fit.', 'No footballer is lazy. Sameer is a footballer. Therefore Sameer is not lazy.', 'All footballers are fit. Sameer is not fit. Therefore Sameer is not a footballer.'], 'Both reason from "all A are B" and "x is B" to "x is A", which is the converse error. The other options are valid.')),
  P(cr('No member of the club who pays dues late is allowed to vote. Some members who are allowed to vote hold office.', FOLLOW, 'Some office-holders of the club do not pay dues late.', ['All office-holders are allowed to vote.', 'No office-holder pays dues late.', 'Some members who pay dues late hold office and vote.'], 'The voting members who hold office are allowed to vote, so they do not pay late; hence some office-holders do not pay late.')),
  P(cr('A city built a ring road to reduce congestion in its centre, yet congestion in the centre has increased since it opened.', PARA, 'The faster travel on the ring road encouraged many more people to drive into the city centre.', ['The ring road is longer than the old road.', 'Congestion was worse before the ring road.', 'The city centre has many shops.'], 'If easier travel increased the number of drivers entering the centre, congestion could rise despite the ring road.'))
];
build(ch49, q49);

// ---------------- Chapter 50: advanced para jumbles ----------------
const paras = [
  ['Coffee began as a wild plant in the highlands of Ethiopia.', 'According to legend, a goatherd noticed that his goats became unusually lively after eating its red berries.', 'From Ethiopia the plant crossed the Red Sea and was first cultivated in Yemen.', 'There, in the fifteenth century, people began roasting the beans and brewing a drink from them.', 'The drink soon spread through the Arab world and then to Europe, where coffee houses became centres of conversation and trade.', 'Today it is grown in dozens of countries and is among the most widely traded commodities in the world.'],
  ['The monsoon is not a single storm but a seasonal reversal of winds.', 'In summer, the land heats up faster than the surrounding ocean.', 'The warm air above the land rises, drawing in moist air from the sea to take its place.', 'As this moist air climbs over mountains and cools, it releases its water as heavy rain.', 'In winter the pattern reverses, and dry winds blow from the land towards the sea.', 'This yearly cycle decides when farmers sow their crops across much of South Asia.'],
  ['A habit begins as a deliberate choice.', 'At first, every step requires attention and effort.', 'With repetition, the brain begins to treat the sequence as a single unit.', 'The action then needs less thought and eventually happens almost automatically.', 'This efficiency is useful, because it frees attention for other tasks.', 'It also explains why bad habits are so hard to break: they run without being noticed.'],
  ['The idea of zero is so familiar today that it is easy to forget it had to be invented.', 'Early number systems used a blank space to mark an empty place, which often caused confusion.', 'Indian mathematicians gave the empty place a symbol and, more importantly, treated it as a number in its own right.', 'They also worked out rules for adding, subtracting and multiplying with it.', 'Through Arab scholars this system reached Europe, where it slowly replaced Roman numerals.', 'Modern arithmetic and computing both rest on that single step.'],
  ['Many cities are turning unused rooftops into gardens.', 'The plants cool the buildings beneath them by shading the roof and releasing moisture.', 'That lowers the need for air conditioning and cuts electricity bills.', 'Rooftop gardens also soak up rainwater, which reduces the strain on drains during storms.', 'Some gardens go a step further and grow vegetables, giving residents fresh food close to home.', 'The main obstacle is cost, since a roof must be strengthened and waterproofed first.']
];
// Deterministic scramble of display order so that the correct order is not A-B-C-D-E-F.
const scrambles = [[3, 0, 5, 1, 4, 2], [2, 5, 0, 4, 1, 3], [4, 1, 3, 0, 5, 2], [1, 4, 0, 5, 2, 3], [5, 2, 4, 1, 0, 3]];
const L6 = ['A', 'B', 'C', 'D', 'E', 'F'];
function jumble(pi, kind, arg) {
  const order = paras[pi];
  const sc = scrambles[pi]; // sc[k] = index in 'order' shown at display position k
  const shown = sc.map((idx) => order[idx]);
  const labelOf = (idx) => L6[sc.indexOf(idx)]; // label of correct sentence number idx
  const seq = order.map((_, idx) => labelOf(idx)); // labels in correct order
  const body = `The sentences of a paragraph are given in a jumbled order.\n${shown.map((s, k) => `${L6[k]}. ${s}`).join('\n')}`;
  const swap = (a, i, j) => { const b = a.slice(); [b[i], b[j]] = [b[j], b[i]]; return b; };
  const S = `The correct order is ${seq.join('')}.`;
  if (kind === 'seq') {
    const wrong = [swap(seq, 1, 2), swap(seq, 3, 4), swap(seq, 2, 3)].map((a) => a.join(''));
    return { q: `${body}\n\nWhich of the following is the most logical order of the sentences?`, c: seq.join(''), w: wrong, e: `${S} The first sentence introduces the topic (${seq[0]}), and each later sentence picks up the one before it through a link of time, reference or cause; ${seq[5]} closes the paragraph.` };
  }
  if (kind === 'first') {
    const w = L6.filter((l) => l !== seq[0]).slice(arg || 0).concat(L6.filter((l) => l !== seq[0])).slice(0, 3);
    return { q: `${body}\n\nWhich sentence should come first?`, c: `Sentence ${seq[0]}`, w: w.map((x) => `Sentence ${x}`), e: `${S} Sentence ${seq[0]} introduces the topic without referring back to anything, so it must come first.` };
  }
  if (kind === 'last') {
    const w = L6.filter((l) => l !== seq[5]).slice(arg || 0).concat(L6.filter((l) => l !== seq[5])).slice(0, 3);
    return { q: `${body}\n\nWhich sentence should come last?`, c: `Sentence ${seq[5]}`, w: w.map((x) => `Sentence ${x}`), e: `${S} Sentence ${seq[5]} draws a conclusion or closing point, so it comes last.` };
  }
  const k = arg; // follows sentence at correct position k
  const x = seq[k], c = seq[k + 1];
  const w = L6.filter((l) => l !== c && l !== x).slice(k % 3).concat(L6.filter((l) => l !== c && l !== x)).slice(0, 3);
  return { q: `${body}\n\nWhich sentence should come immediately after sentence ${x}?`, c: `Sentence ${c}`, w: w.map((l) => `Sentence ${l}`), e: `${S} So the sentence that follows ${x} is ${c}.` };
}
const ch50 = C({
  n: 50, id: 'y3-verbal-adv-para-jumbles', cat: 'verbal', title: 'Advanced Para Jumbles — 6 Sentences',
  tag: 'Ordering six jumbled sentences using openers, links, chronology, pronouns and closers',
  url: 'https://www.indiabix.com/verbal-ability/ordering-of-sentences/',
  over: 'In a para-jumble question, six sentences from one paragraph are shuffled and you must restore the order. The method is to look for one opener (a sentence that does not depend on any other), one closer (a sentence that sums up or concludes), and then chains of links between the rest: pronouns that need antecedents, time words, "also" and "however" connectors, and cause-effect pairs.',
  place: 'Six-sentence jumbles are the harder form of the standard ordering item and appear in verbal sections of company tests.',
  real: 'Putting a set of notes or an email thread into a logical sequence uses the same cues.',
  obj: ['Find the opener and the closer', 'Use pronoun and article cues (a/the, it/they)', 'Use time and cause links', 'Build mini-chains and then join them', 'Eliminate options by the first two sentences'],
  pre: ['Para Jumbles (basic)', 'Logical Connectors in Written Discourse'],
  refresh: 'A new idea is introduced with "a/an" and refers back with "the"; pronouns need something to refer to.',
  defs: [
    'Opener: a sentence that introduces the topic without referring back.',
    'Closer: a sentence that concludes, summarises or looks ahead.',
    'Link: a word or idea that connects two sentences (pronoun, time word, repeated noun).',
    'Mini-chain: two or three sentences that must stay together.',
    'Connector: words such as also, however, therefore that show how sentences relate.'
  ],
  intu: 'A paragraph is a chain. Each sentence leaves a hook that the next one picks up. Find the hooks and the chain assembles itself.',
  mental: 'Find the opener first. Then find sentences that begin with a reference (it, they, there, this) and attach them to the sentence they refer to. Chains first, then order the chains.',
  formulas: [
    ['Opener test', 'No back-reference; introduces topic', 'First sentence.', 'Step 1.', 'Coffee began as a wild plant'],
    ['Pronoun test', 'Pronoun needs an earlier noun', 'It, they, this, there.', 'Linking.', '"There" follows a place'],
    ['Time order', 'Earlier before later', 'Narratives and histories.', 'Chronology.', 'Fifteenth century, then Europe'],
    ['Cause-effect', 'Cause before effect', 'Explanations.', 'Logic.', 'Warm air rises, then moist air flows in'],
    ['Closer test', 'Today, thus, this explains', 'Last sentence.', 'Final step.', 'Today it is grown in dozens of countries']
  ],
  narr: [
    'Look at the sentences: A "From Ethiopia the plant crossed the Red Sea…", B "Today it is grown in dozens of countries…", C "Coffee began as a wild plant in the highlands of Ethiopia", D "There, in the fifteenth century, people began roasting the beans…". Sentence C introduces coffee and has no back-reference, so it is the opener. "Today" in B marks the closer. "There" in D needs a place (Yemen) so D follows the sentence ending in Yemen.',
    'Pronoun cues work in both directions. "its red berries" needs an earlier mention of the plant. "Through Arab scholars this system reached Europe" needs an earlier mention of a system. "This yearly cycle" in the monsoon paragraph needs the cycle to have been described, so it must come after the winter reversal.',
    'Chronology orders histories: early number systems, then Indian mathematicians, then Arab scholars, then Europe. Cause-effect orders explanations: land heats, warm air rises, moist air flows in, rain falls.',
    'Process of elimination helps when two sentences compete. If options differ only in the order of sentences 3 and 4, test which one the sentence 5 depends on.',
    'Finally, read the chosen order from start to end. If you hear a jump, you have a pair out of order.'
  ],
  deep: [['A/The test', 'A noun first mentioned takes "a"; later mentions take "the". The sentence with "the" comes after the one with "a".'], ['Connector words', '"Also", "further" and "a step further" show a sentence adds to an earlier point; they cannot be first.']],
  vars: [['History paragraph', 'Chronology.', 'Coffee'], ['Process paragraph', 'Cause-effect.', 'Monsoon'], ['Concept paragraph', 'General to specific.', 'Habits'], ['Invention paragraph', 'Problem, solution, spread.', 'Zero'], ['Listing paragraph', 'Benefits then obstacle.', 'Rooftop gardens']],
  ex: [
    { t: 'Opener', q: 'Which is the opener: (A) "From Ethiopia the plant crossed the Red Sea and was first cultivated in Yemen", (B) "Coffee began as a wild plant in the highlands of Ethiopia"?', g: ['Back-reference'], c: 'Check the references.', s: [['A', 'Refers back to "Ethiopia" and "the plant".'], ['B', 'Introduces coffee freshly.']], a: 'B', w: 'A depends on B.', tr: 'Choosing A.' },
    { t: 'Pronoun link', q: 'Which sentence must come right after "There, in the fifteenth century, people began roasting the beans": "From Ethiopia the plant crossed to Yemen" or "The drink soon spread through the Arab world"?', g: ['"There" and "the drink"'], c: 'Follow the chain.', s: [['Chain', 'The roasting produced a drink.'], ['Next', '"The drink soon spread…" follows.']], a: 'The drink soon spread through the Arab world', w: 'The Yemen sentence comes before "There".', tr: 'Reversing the two.' },
    { t: 'Closer', q: 'Which is the closer: "Today it is grown in dozens of countries" or "According to legend, a goatherd noticed…"?', g: ['Time word'], c: 'Closer test.', s: [['Today', 'Brings the story to the present.'], ['Legend', 'Belongs to the beginning.']], a: 'Today it is grown in dozens of countries', w: '"Today" marks the end of a history.', tr: 'Choosing the legend.' }
  ],
  short: { title: 'Opener, closer, chains', trad: 'Try every order.', fast: 'Find the opener and closer, link pronouns to their nouns, join cause-effect and time pairs, then order the chains.', rules: ['Opener has no back-reference.', 'Pronouns need antecedents.', 'Today/thus signal the end.', 'Read the final order aloud.'] },
  mist: [['Starting with a sentence that has "the" or a pronoun', 'It needs an antecedent.', 'Check for the first mention.'], ['Ignoring connectors', 'Wrong order.', 'Also and however need something before them.'], ['Splitting a mini-chain', 'Breaks pairs.', 'Keep linked sentences together.']],
  tips: { sec: 120, elim: 'Use the first two sentences to eliminate options.', adv: 'Find the closer next; it removes more options.', ins: 'Each paragraph has one natural chain; the right option is the one that preserves it.' },
  rev: ['Opener.', 'Closer.', 'Pronouns.', 'Time and cause.', 'Check the whole.'],
  qf: ['Opener → chains → closer'],
  take: ['Start with the opener.', 'Chain by pronouns.', 'End with the closer.', 'Read through.'],
  self: ['Can I pick the opener?', 'Can I link pronouns?', 'Can I identify the closer?']
});
const q50 = [];
const kinds = [['seq'], ['first', 0], ['last', 1], ['after', 1]];
for (let pi = 0; pi < 5; pi++) {
  const items = [jumble(pi, 'seq'), jumble(pi, 'first', pi), jumble(pi, 'last', pi + 1), jumble(pi, 'after', pi % 4 + 1)];
  // difficulty mix: 6 easy, 8 medium, 6 placement
  items.forEach((it, j) => {
    const n = pi * 4 + j;
    if (n < 6) q50.push(E(it)); else if (n < 14) q50.push(M(it)); else q50.push(P(it));
  });
}
build(ch50, q50);
