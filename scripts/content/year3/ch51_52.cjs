const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------------- Chapter 51: sentence rearrangement within paragraphs ----------------
// Each paragraph: first sentence (1) and last sentence (6) are fixed; the middle four, in correct order, are scrambled into P, Q, R, S.
const paras = [
  { s1: 'The marathon takes its name from a Greek legend.', mid: ['According to the story, a messenger ran from the battlefield at Marathon to Athens to announce a victory.', 'He covered about forty kilometres without rest.', 'On arrival he delivered his message and then collapsed.', 'When the modern Olympic Games began in 1896, organisers recalled the story and added a long race to honour it.'], s6: 'The distance was later fixed at 42.195 kilometres, and it has not changed since 1921.', sc: [2, 0, 3, 1] },
  { s1: 'Tea was discovered, according to Chinese tradition, by accident.', mid: ['Emperor Shennong was boiling drinking water when a few leaves from a nearby bush drifted into the pot.', 'He tasted the infusion and found it refreshing.', 'Word of the new drink spread through the court, and cultivation of the bush began.', 'By the Tang dynasty tea had become a national drink, with its own etiquette and its own poets.'], s6: 'Traders later carried it along the Silk Road, and from there it reached the rest of the world.', sc: [1, 3, 0, 2] },
  { s1: 'Compound interest is often called the most powerful idea in personal finance.', mid: ['Under simple interest, you earn a fixed amount each year on the money you first deposited.', 'Under compound interest, the interest earned in one year is added to the balance and itself earns interest in later years.', 'In the early years the difference between the two is small.', 'Over several decades, however, the compounding balance pulls far ahead.'], s6: 'This is why starting to save early matters more than saving large amounts later.', sc: [3, 1, 2, 0] },
  { s1: 'Before the telephone, urgent news travelled only as fast as a person or a telegraph wire could carry it.', mid: ['In 1876 Alexander Graham Bell patented a device that could carry the human voice along a wire.', 'At first many people saw it as a curiosity rather than a tool.', 'Within a few decades, however, businesses had installed telephones, and exchanges connected whole cities.', 'The telephone changed the pace of commerce and of family life alike.'], s6: 'Its descendant, the mobile phone, now fits in a pocket and has made the wire unnecessary.', sc: [2, 3, 1, 0] }
];
const LB = ['P', 'Q', 'R', 'S'];
function rearr(pi, kind) {
  const { s1, mid, s6, sc } = paras[pi];
  const shown = sc.map((i) => mid[i]);
  const lab = (i) => LB[sc.indexOf(i)]; // label of correct middle sentence i
  const order = [0, 1, 2, 3].map(lab);
  const body = `The first and the last sentences of a paragraph are given as S1 and S6. The four middle sentences are jumbled.\nS1. ${s1}\n${shown.map((s, k) => `${LB[k]}. ${s}`).join('\n')}\nS6. ${s6}`;
  const S = `The correct order is ${order.join('')}.`;
  const swap = (a, i, j) => { const b = a.slice(); [b[i], b[j]] = [b[j], b[i]]; return b; };
  if (kind === 'seq') return { q: `${body}\n\nWhich of the following gives the correct order of P, Q, R and S?`, c: order.join(''), w: [swap(order, 0, 1), swap(order, 2, 3), swap(order, 1, 2)].map((a) => a.join('')), e: `${S} S1 introduces the subject; each middle sentence then picks up the one before it by time or reference, and S6 draws the conclusion.` };
  const letters = (excl) => LB.filter((l) => !excl.includes(l));
  if (kind === 'afterS1') return { q: `${body}\n\nWhich sentence follows S1 most logically?`, c: order[0], w: letters([order[0]]), e: `${S} So the sentence that follows S1 is ${order[0]}.` };
  if (kind === 'beforeS6') return { q: `${body}\n\nWhich sentence comes immediately before S6?`, c: order[3], w: letters([order[3]]), e: `${S} So the sentence immediately before S6 is ${order[3]}.` };
  if (kind === 'second') return { q: `${body}\n\nWhich sentence is second in the correct order of P, Q, R and S?`, c: order[1], w: letters([order[1]]), e: `${S} So the second sentence is ${order[1]}.` };
  return { q: `${body}\n\nWhich sentence is third in the correct order of P, Q, R and S?`, c: order[2], w: letters([order[2]]), e: `${S} So the third sentence is ${order[2]}.` };
}
const ch51 = C({
  n: 51, id: 'y3-verbal-sentence-rearrangement', cat: 'verbal', title: 'Sentence Rearrangement Within Paragraphs',
  tag: 'Four jumbled sentences between a fixed opening and a fixed closing sentence',
  over: 'In this format the first and last sentences of a paragraph are given (S1 and S6), and four sentences in between, labelled P, Q, R and S, are jumbled. The fixed ends make the task easier than a full jumble, because S1 tells you what the paragraph is about and S6 tells you where it must arrive. The job is to build the bridge between them.',
  place: 'Sentence-rearrangement items with S1 and S6 given are a classic of verbal sections in campus and bank tests.',
  real: 'Fitting new points into the middle of a drafted document uses the same cues.',
  obj: ['Use S1 to predict what must come first', 'Use S6 to predict what must come last', 'Link middle sentences by pronouns and time words', 'Check the order by reading S1 to S6 in one go', 'Eliminate options using one reliable link'],
  pre: ['Advanced Para Jumbles — 6 Sentences'],
  refresh: 'Look for sentences that begin with a reference (he, it, this, there) or a time word (at first, later, within a few decades).',
  defs: [
    'S1 and S6: the given first and last sentences.',
    'Bridge: the four middle sentences that connect S1 to S6.',
    'Link: a word or idea connecting two adjacent sentences.',
    'Anchor link: a link so strong that it settles the position of two sentences.',
    'Chronological order: events in the order they happened.'
  ],
  intu: 'S1 poses a topic and S6 gives a result. The middle tells how you got from one to the other, usually in time or cause order.',
  mental: 'Read S1 and S6 first. Predict the first middle sentence by asking what S1 leads to. Then link the others by time words and pronouns.',
  formulas: [
    ['Prediction', 'S1 leads to the first middle sentence', 'Start.', 'Step 1.', 'Legend → according to the story'],
    ['Reference link', '"He" follows the sentence that names him', 'Pronouns.', 'Anchor.', 'The messenger, then he covered'],
    ['Time words', 'At first → within a few decades → today', 'Histories.', 'Order.', 'Telephone'],
    ['Contrast words', '"However" follows what it contrasts with', 'Contrasts.', 'Anchor.', 'Early years then however'],
    ['Closing check', 'S6 follows naturally from the last middle sentence', 'End.', 'Verify.', 'Distance fixed']
  ],
  narr: [
    'S1: "The marathon takes its name from a Greek legend." The natural next sentence is the story ("According to the story, a messenger ran…"). Then "He covered about forty kilometres" needs the messenger; "On arrival he delivered his message" needs the journey; "When the modern Olympic Games began…" moves from the legend to the modern race; S6 gives the final distance.',
    'S1: "Tea was discovered… by accident." The accident comes first (the leaves drifting into the pot), then the emperor tasting it, then the news spreading, then the Tang dynasty, then the Silk Road in S6.',
    'S1: "Compound interest is often called the most powerful idea…" The simple-interest definition comes first so that "Under compound interest" can contrast with it. "In the early years the difference between the two is small" follows both definitions. "Over several decades, however…" contrasts with the early years and leads to S6.',
    'Use one anchor first. "He covered about forty kilometres" must follow the sentence naming the messenger; once that pair is fixed, the others fall into place.',
    'Finally, read S1, then the order, then S6. A jump in sense means a pair is wrongly placed.'
  ],
  deep: [['Contrast pairs', '"Under simple interest… Under compound interest…" is a contrast pair: define the baseline first.'], ['Time words', '"At first", "within a few decades" and "now" give a time ladder; place them in order.']],
  vars: [['History', 'Chronology.', 'Marathon, tea'], ['Explanation', 'Definition then contrast.', 'Compound interest'], ['Technology', 'Invention then spread.', 'Telephone'], ['Reference links', 'Pronouns.', 'He, it'], ['Closers', 'Result sentence.', 'Distance fixed']],
  ex: [
    { t: 'First middle sentence', q: 'S1: "The marathon takes its name from a Greek legend." Which sentence follows: "According to the story, a messenger ran from the battlefield at Marathon to Athens" or "He covered about forty kilometres without rest"?', g: ['S1 mentions a legend'], c: 'Predict from S1.', s: [['Prediction', 'S1 promises a story.'], ['Choice', 'The first sentence tells the story; "He" needs the messenger first.']], a: 'According to the story, a messenger ran from the battlefield at Marathon to Athens', w: 'The second sentence needs the first.', tr: 'Starting with "He".' },
    { t: 'Contrast link', q: 'In a paragraph on interest, which comes first: "Under simple interest, you earn a fixed amount each year" or "Under compound interest, interest earned is added to the balance"?', g: ['Contrast pair'], c: 'Baseline first.', s: [['Baseline', 'Simple interest is the base case.'], ['Contrast', 'Compound interest follows with "Under compound…".']], a: 'Under simple interest, you earn a fixed amount each year', w: 'The baseline is stated first.', tr: 'Reversing.' },
    { t: 'Closing check', q: 'After "The telephone changed the pace of commerce and of family life alike" which fits as S6: "Its descendant, the mobile phone, now fits in a pocket" or "In 1876 Bell patented a device"?', g: ['Final sentence'], c: 'Latest in time.', s: [['Time', 'The mobile phone is the latest stage.'], ['Fit', 'It follows "Its descendant".']], a: 'Its descendant, the mobile phone, now fits in a pocket', w: 'The patent belongs at the start.', tr: 'Choosing the patent.' }
  ],
  short: { title: 'Predict, link, check', trad: 'Try all 24 orders.', fast: 'Predict the first middle sentence from S1, link pairs by pronouns and time words, and check the result against S6.', rules: ['S1 predicts the start.', 'S6 predicts the end.', 'Pronouns need antecedents.', 'Read it through.'] },
  mist: [['Ignoring S6', 'Missing the endpoint.', 'Check that the order arrives at S6.'], ['Starting with a pronoun', 'No antecedent.', 'The first middle sentence names its subject.'], ['Breaking a contrast pair', 'Wrong order.', 'Baseline first, contrast second.']],
  tips: { sec: 75, elim: 'Use the first-sentence prediction to drop half of the options.', adv: 'Find one anchor pair and build around it.', ins: 'Time words are the most reliable links.' },
  rev: ['Predict from S1.', 'Link pronouns.', 'Time words.', 'Contrast pairs.', 'Check with S6.'],
  qf: ['S1 → bridge → S6'],
  take: ['Predict.', 'Anchor.', 'Chain.', 'Check.'],
  self: ['Can I predict the first middle sentence?', 'Can I find an anchor pair?', 'Can I check the order against S6?']
});
const kinds = ['seq', 'afterS1', 'beforeS6', 'second', 'third'];
const q51 = [];
let n = 0;
for (let pi = 0; pi < 4; pi++) for (const k of kinds) {
  const it = rearr(pi, k);
  q51.push(n < 6 ? E(it) : n < 14 ? M(it) : P(it));
  n++;
}
build(ch51, q51);

// ---------------- Chapter 52: paragraph completion, tone matching ----------------
const pc = (para, correct, wrongs, expl) => ({ q: `Choose the sentence that best completes the paragraph.\n\n${para}\n\nWhich sentence best completes the paragraph?`, c: correct, w: wrongs, e: expl });
const ch52 = C({
  n: 52, id: 'y3-verbal-para-completion', cat: 'verbal', title: 'Paragraph Completion — Tone-Matching',
  tag: 'Choosing the closing sentence that fits the logic, direction and tone of the paragraph',
  over: 'A paragraph-completion question gives a paragraph without its final sentence and asks you to choose the sentence that finishes it best. The right sentence continues the direction of the argument (support, contrast or result), keeps the tone (formal, ironic, sad, cautious), stays in scope, and neither repeats nor leaps ahead. Wrong options typically fail on one of these four.',
  place: 'Paragraph-completion items appear in verbal sections along with para jumbles and sentence completion.',
  real: 'Ending an email, a report or a paragraph in the right voice uses the same judgement.',
  obj: ['Identify the direction: support, contrast or result', 'Match tone and register', 'Reject repetition and irrelevance', 'Choose balanced endings for balanced paragraphs', 'Prefer the option that closes the thought'],
  pre: ['Advanced Para Jumbles — 6 Sentences', 'Logical Connectors in Written Discourse'],
  refresh: 'The last sentence of a paragraph usually gives the result, the conclusion or the next step.',
  defs: [
    'Direction: whether the paragraph is supporting, contrasting or concluding.',
    'Tone: the attitude of the paragraph (formal, ironic, regretful, cautious, persuasive).',
    'Scope: the topic limits of the paragraph.',
    'Repetition: restating an earlier sentence without adding anything.',
    'Leap: jumping to a new topic or an extreme claim.'
  ],
  intu: 'Read the paragraph as a sentence that has not finished yet. The ending should feel like the only natural way to stop.',
  mental: 'Name the direction and tone in two words ("sad, result"; "balanced, conclusion"). Keep only options that match both, then discard repeats and leaps.',
  formulas: [
    ['Direction check', 'Support, contrast or result?', 'First.', 'Step 1.', 'Praise → expect a result'],
    ['Tone check', 'Same register as the paragraph', 'Second.', 'Step 2.', 'Formal letter → polite close'],
    ['Scope check', 'Same topic only', 'Third.', 'Step 3.', 'No new subject'],
    ['Balance check', 'Two sides → balanced close', 'Debates.', 'Step 4.', 'Depends on design'],
    ['Repeat check', 'Adds something new', 'Final.', 'Step 5.', 'Not a restatement']
  ],
  narr: [
    'Take a paragraph that praises a restaurant: "The restaurant had received glowing reviews for its food. Critics praised the fresh ingredients, the generous portions and the friendly staff." The direction is a result of the praise: "It is no surprise that the tables are booked weeks in advance." An option about the building being constructed in 1950 leaves the topic.',
    'For a balanced paragraph ("Critics say the policy will raise prices. Supporters say it will protect local jobs."), a balanced ending fits: "Both claims may be partly true, so the answer depends on how the policy is designed." An option that declares the policy harmful picks a side that the paragraph has not taken.',
    'A formal letter needs a formal close: "We thank you for your interest and wish you every success in the future." A casual or boastful ending would clash with the register.',
    'In an ironic paragraph, the ending should extend the irony: after a slogan promising "service with a smile" and forty minutes on hold, the line about the recorded voice thanking him for his patience carries the joke further.',
    'A suspense paragraph needs a suspenseful ending: "Somewhere below, a door creaked slowly open." A calm summary would break the mood.'
  ],
  deep: [['Hedged endings', 'In scientific paragraphs, an ending that asks for more evidence matches a paragraph that reports early results.'], ['The restatement trap', 'An option that merely repeats the previous sentence is wrong even if it matches the tone.']],
  vars: [['Result endings', 'Follow from praise or blame.', 'Restaurant review'], ['Balanced endings', 'Two sides.', 'Policy debate'], ['Formal endings', 'Letters.', 'Rejection letter'], ['Ironic endings', 'Extend the joke.', 'Hold music'], ['Suspense endings', 'Add tension.', 'Lights out']],
  ex: [
    { t: 'Result', q: 'A paragraph says critics praised a restaurant\'s fresh food and friendly staff. Which ending fits: "It is no surprise that its tables are booked weeks ahead" or "The building was constructed in 1950"?', g: ['Praise'], c: 'Direction check.', s: [['Direction', 'Praise leads to a result.'], ['Choice', 'Advance booking follows from praise; the building is off-topic.']], a: 'It is no surprise that its tables are booked weeks ahead', w: 'The other leaves the topic.', tr: 'Choosing the building.' },
    { t: 'Balance', q: 'Critics say a policy raises prices; supporters say it protects jobs. Which ending fits best?', g: ['Two sides'], c: 'Balance check.', s: [['Balance', 'The paragraph has not taken a side.'], ['Choice', 'A balanced ending fits.']], a: 'Both claims may be partly true, so the answer depends on how the policy is designed', w: 'Picking a side jumps ahead.', tr: 'Declaring the policy harmful.' },
    { t: 'Tone', q: 'A letter says "I regret to inform you that your application has not been successful." Which ending fits?', g: ['Formal letter'], c: 'Tone check.', s: [['Register', 'Polite and formal.'], ['Choice', 'A courteous close fits.']], a: 'We thank you for your interest and wish you every success in the future', w: 'A casual or boastful ending clashes.', tr: 'Choosing a joke.' }
  ],
  short: { title: 'Direction, tone, scope', trad: 'Pick the sentence that sounds good.', fast: 'Decide direction and tone first, then discard options that leave the topic, repeat, or leap to extremes.', rules: ['Praise → result.', 'Two sides → balanced close.', 'Formal letter → formal close.', 'No restatement.'] },
  mist: [['Choosing a repeat', 'Adds nothing.', 'Look for new content that closes.'], ['Choosing an extreme ending', 'Leaps ahead.', 'Stay with the evidence.'], ['Ignoring tone', 'Clashing register.', 'Match tone first.']],
  tips: { sec: 45, elim: 'Eliminate off-topic options first.', adv: 'Read the paragraph in your head with each option in turn.', ins: 'The best ending sounds inevitable.' },
  rev: ['Direction.', 'Tone.', 'Scope.', 'Balance.', 'No repetition.'],
  qf: ['Direction + tone + scope'],
  take: ['Name the direction.', 'Match the tone.', 'Stay in scope.', 'Avoid repetition.'],
  self: ['Can I name direction and tone?', 'Can I reject a repeat?', 'Can I balance a two-sided paragraph?']
});
const q52 = [
  E(pc('The restaurant had received glowing reviews for its food. Critics praised the fresh ingredients, the generous portions and the friendly staff.', 'It is no surprise that its tables are booked weeks in advance.', ['The building where it stands was constructed in 1950.', 'Many people prefer cooking at home.', 'The owner has decided to retire next year.'], 'The paragraph praises the restaurant, so a result of that praise fits. The other options leave the topic.')),
  E(pc('Anita had prepared for the interview for weeks. She practised her answers, researched the company and arrived early.', 'When her name was called, she walked in feeling calm and ready.', ['The company had been founded in 1990.', 'She often forgot her umbrella.', 'Interviews are held in many cities.'], 'Her preparation leads naturally to a calm, ready entrance. The other options are irrelevant.')),
  E(pc('The new bridge was meant to ease traffic. Instead, it has made things worse.', 'Drivers now spend longer in queues than they did before it opened.', ['The bridge was designed by a famous architect.', 'Bridges have been built for thousands of years.', 'The river below is clean.'], 'The paragraph says things got worse, so the ending should show how.')),
  E(pc('Mangroves protect coastlines from storms. They also shelter young fish.', 'Clearing them therefore harms both coastal communities and fisheries.', ['Mangroves are found only in cold climates.', 'Fish are a popular food in many countries.', 'Storms have become more common this decade.'], 'The two benefits lead to the consequence of losing them.')),
  E(pc('I regret to inform you that your application has not been successful. The panel received a large number of strong applications.', 'We thank you for your interest and wish you every success in the future.', ['Please try to be more careful next time.', 'You should not have applied in the first place.', 'The panel enjoyed its lunch.'], 'A formal rejection letter closes with courtesy.')),
  E(pc('Dogs have been companions to people for thousands of years. They guard homes, herd animals and comfort their owners.', 'Few other animals have worked alongside humans in so many ways.', ['Cats prefer to be alone.', 'Dogs cannot be trained at all.', 'Pet food is sold in supermarkets.'], 'The ending draws a conclusion from the list of roles.')),
  M(pc('Some argue that cities should ban cars from their centres. They point to cleaner air and quieter streets. Others reply that shops and residents depend on deliveries and access.', 'A workable policy will probably have to balance both concerns.', ['Cars should therefore be banned immediately.', 'Shops should move out of city centres.', 'Quiet streets are not worth having.'], 'The paragraph presents two sides and takes neither, so a balanced close fits.')),
  M(pc('The first draft of the report was clear but long. The editor cut it by a third, removing repeated points and long examples.', 'The shorter version lost none of its clarity and was easier to read.', ['The editor was paid for the work.', 'The report was printed in colour.', 'Long reports are common in business.'], 'The paragraph is about the effect of editing; the ending reports the result.')),
  M(pc('The old village school closed last year. Its bell no longer rings at nine, and the playground is overgrown with weeds.', 'The village feels quieter and emptier without the sound of children.', ['The new school has a computer laboratory.', 'Bells are made of brass.', 'Weeds grow quickly in the rainy season.'], 'The paragraph has a quiet, regretful tone; the ending extends it.')),
  M(pc('Medicines should be taken exactly as prescribed. Stopping early or doubling a dose can be dangerous.', 'If you are unsure, ask your doctor or pharmacist before changing anything.', ['Medicines are always expensive.', 'Many people enjoy taking medicines.', 'Doubling a dose is sometimes fun.'], 'The paragraph is a caution; the ending gives safe advice.')),
  M(pc('Learning a second language is hard at first. Yet it trains memory, sharpens attention and opens doors to new cultures.', 'The early effort is therefore a small price for lasting rewards.', ['Most people give up within a week.', 'Languages have existed for a long time.', 'Learning is hard for everyone, so it should be avoided.'], 'The paragraph moves from difficulty to benefit; the ending weighs them.')),
  M(pc('The film has a famous cast and a huge budget. Unfortunately, its plot is thin and its dialogue is stiff.', 'In the end, expensive spectacle cannot make up for a weak script.', ['The film will be loved by every viewer.', 'Famous actors are always disappointing.', 'The budget was spent on advertising.'], 'The paragraph criticises the film; the ending sums up the criticism.')),
  M(pc('When I left my hometown at eighteen, I was sure I would never miss it.', 'Years later, I find myself recalling its streets and smells with surprising affection.', ['Hometowns are always small.', 'I have never travelled since.', 'I was eighteen years old at the time.'], 'The opening sets up a contrast with later feelings; the ending delivers it.')),
  M(pc('Early results from the trial look promising. Most patients who received the treatment showed improvement.', 'However, larger studies will be needed before firm conclusions can be drawn.', ['The treatment is therefore ready for every patient.', 'Trials are always successful.', 'Doctors should stop other treatments immediately.'], 'Early results call for caution, so a hedged ending fits.')),
  P(pc('Critics of the policy say it will raise prices. Supporters say it will protect local jobs.', 'Both claims may be partly true, so the answer depends on how the policy is designed.', ['The policy is certainly harmful.', 'The supporters are clearly mistaken.', 'Prices never change when policies change.'], 'The paragraph presents two sides; the balanced ending avoids picking one.')),
  P(pc('The experiment failed for the third time. Instead of giving up, the team went back through every step of the procedure.', 'Eventually they found a small error in the way the samples were stored.', ['The experiment was cancelled by the director.', 'Scientists never make mistakes.', 'Laboratories are expensive to build.'], 'The paragraph shows persistence; the ending rewards it with a finding.')),
  P(pc('The company\'s slogan promised "service with a smile". After forty minutes on hold, however, one customer was beginning to doubt it.', 'The only thing smiling at that moment was the recorded voice that kept thanking him for his patience.', ['Customers are generally happy with the company.', 'The slogan was written by a famous poet.', 'Forty minutes is a short wait.'], 'The paragraph is ironic; the ending extends the irony.')),
  P(pc('The study found a strong link between sleep and memory. It does not, however, prove that poor sleep causes poor memory.', 'Other factors, such as stress, may affect both at once.', ['Poor sleep has no effect on anything.', 'Memory is stored in the stomach.', 'Everyone should sleep for twelve hours.'], 'The paragraph warns against assuming cause; the ending offers an alternative explanation.')),
  P(pc('Every year thousands of trees are cut down to make way for new roads. Replanting is possible, but young saplings take decades to provide the shade and habitat that old trees do.', 'We should therefore think carefully before felling a mature tree and protect those we already have.', ['Roads should never be built anywhere.', 'Saplings grow into old trees overnight.', 'Shade is not needed in cities.'], 'The paragraph argues that replacement is slow; the ending draws the sensible conclusion.')),
  P(pc('The lights went out just as she reached the top of the stairs. She stood still, listening.', 'Somewhere below, a door creaked slowly open.', ['The electricity company sends bills every month.', 'She decided to cook dinner.', 'Staircases are usually made of wood.'], 'The paragraph builds suspense; the ending adds to it.'))
];
build(ch52, q52);
