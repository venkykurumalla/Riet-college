const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------------- Chapter 38: statements and arguments ----------------
const aopt = { I: 'Only argument I is strong', II: 'Only argument II is strong', both: 'Both arguments I and II are strong', none: 'Neither argument I nor II is strong' };
const arg = (question, a1, a2, ans, expl) => {
  const w = Object.values(aopt).filter((o) => o !== aopt[ans]);
  return { q: `Statement: ${question}\n\nArguments:\nI. ${a1}\nII. ${a2}\n\nWhich of the following is correct?`, c: aopt[ans], w, e: `${expl} Answer: ${aopt[ans]}.` };
};
const ch38 = C({
  n: 38, id: 'y3-lr-statements-arguments', cat: 'lr', title: 'Statements and Arguments — Strong vs Weak',
  tag: 'Judging arguments for and against a proposal: relevance, importance, specificity and practicality',
  over: 'In a statement-and-argument question you are given a proposal (usually "Should X be done?") and two arguments. You do not decide whether the proposal is right; you decide whether each argument is strong or weak. A strong argument is important, directly related to the proposal and based on facts or sound reasoning. A weak argument is vague, trivial, based on personal likes, or only loosely related.',
  place: 'Argument-strength questions are a regular part of logical-reasoning sections in company tests.',
  real: 'Weighing the reasons offered in a meeting, a debate or a policy note uses the same judgement.',
  obj: ['Apply the four tests: relevant, important, specific, practical', 'Spot weak arguments based on imitation, taste or exaggeration', 'Accept arguments for and against that are both strong', 'Reject vague or circular reasons', 'Use the four standard answer options correctly'],
  pre: ['Statements and Conclusions — Critical Filtering'],
  refresh: 'A strong argument supports or opposes the statement with a real, relevant reason. A weak argument gives a trivial, personal or irrelevant reason.',
  defs: [
    'Strong argument: relevant to the statement, important in size, and based on facts or sound reasoning.',
    'Weak argument: vague, trivial, emotional, based on personal taste, or about a different issue.',
    'Imitation argument: "other countries do it" is weak unless it gives the reason it works.',
    'Exaggeration: words such as "only way", "never" or "everyone" usually make an argument weak.',
    'Opposite sides: an argument for and an argument against can both be strong.'
  ],
  intu: 'Ask: if this reason were true, would it seriously matter for a sensible decision on the proposal? If yes, it is strong.',
  mental: 'Test each argument on four questions: Is it about this proposal? Is it important? Is it specific? Does it avoid exaggeration? A "no" to the first two makes it weak.',
  formulas: [
    ['Relevance test', 'Does it concern this proposal?', 'Each argument.', 'First filter.', 'Passive smoke → smoking ban'],
    ['Importance test', 'Is the effect large or serious?', 'Health, safety, cost.', 'Second filter.', 'Cheapness is minor against harm'],
    ['Specificity test', 'Is the reason concrete?', 'No vague words.', 'Third filter.', 'It pollutes vs it is bad'],
    ['Exaggeration test', 'Look for only, never, all', 'Absolute words.', 'Fourth filter.', 'The only way ever'],
    ['Pair rule', 'For and against can both be strong', 'Opposite sides.', 'Both strong.', 'Digital payments']
  ],
  narr: [
    'Statement: Should plastic bags be banned? Argument I says yes because they pollute the environment and harm animals. This is relevant, important and specific, so it is strong. Argument II says no because they are cheap. Cheapness is a minor point compared with environmental harm, so it is weak.',
    'Imitation is a common weak argument. "The government should give free vaccines because other countries do" gives no reason. "Because it prevents serious diseases and protects the community" gives the reason and is strong.',
    'Both arguments can be strong when they take opposite sides on real grounds. Should cash be replaced entirely by digital payments? "Digital payments are faster and traceable" is strong; "many villages lack internet and smartphones" is also strong.',
    'Exaggeration weakens an argument. "Exams are the only way to ever know anything" overstates; "exams cause some students stress" is true but too small a reason to abolish them. Neither is strong.',
    'For decisions with extreme actions, such as banning all imports, check whether the argument addresses the extreme: a reason such as "key inputs are not produced domestically" directly shows why the extreme step is unwise.'
  ],
  deep: [['Personal taste', '"Students will not like it" or "people enjoy driving" describe preferences, not consequences.'], ['Possibility vs probability', '"Some employees may misuse it" is a bare possibility and is usually weak unless backed by evidence.']],
  vars: [['One strong one weak', 'Test each.', 'Plastic bags'], ['Both strong', 'Opposite sides.', 'Digital payments'], ['Neither strong', 'Vague or exaggerated.', 'Abolish exams'], ['Imitation arguments', 'Weak.', 'Other countries do it'], ['Extreme proposals', 'Check the reason fits.', 'Ban all imports']],
  ex: [
    { t: 'Strong versus weak', q: 'Should smoking be banned in public places? I. Yes, passive smoke harms the health of non-smokers. II. No, smokers will feel unhappy. Which is strong?', g: ['Two arguments'], c: 'Apply relevance and importance.', s: [['Argument I', 'Health harm to others is relevant and important: strong.'], ['Argument II', 'Unhappiness of smokers is minor next to health risk: weak.']], a: 'Only argument I is strong', w: 'Health outweighs a preference.', tr: 'Calling both strong.' },
    { t: 'Both strong', q: 'Should the retirement age be raised to 65? I. Yes, people live longer and stay productive. II. No, it will reduce job openings for young people. Which is strong?', g: ['Opposite sides'], c: 'Each has a real reason.', s: [['Argument I', 'Longevity and productivity are relevant facts: strong.'], ['Argument II', 'Fewer openings for the young is a real effect: strong.']], a: 'Both arguments are strong', w: 'Opposite arguments can both be strong.', tr: 'Assuming one must be weak.' },
    { t: 'Neither strong', q: 'Should students be given pocket money? I. Yes, because everyone should have some money. II. No, because it is bad. Which is strong?', g: ['Vague reasons'], c: 'Look for specifics.', s: [['Argument I', '"Everyone should" is a vague claim: weak.'], ['Argument II', '"It is bad" gives no reason: weak.']], a: 'Neither argument I nor II is strong', w: 'Neither names a concrete benefit or harm.', tr: 'Choosing the side you like.' }
  ],
  short: { title: 'Four-test filter', trad: 'Go by feeling.', fast: 'Check relevance, importance, specificity and exaggeration for each argument separately; ignore which side you favour.', rules: ['Judge each argument alone.', 'Both can be strong.', 'Imitation and taste are weak.', 'Absolute words are red flags.'] },
  mist: [['Judging by your own opinion', 'Bias.', 'Judge strength, not agreement.'], ['Assuming one must be strong', 'False pairing.', 'Test each separately.'], ['Accepting fact without relevance', 'True but off topic.', 'Check the link to the proposal.']],
  tips: { sec: 60, elim: 'If both arguments are vague, the answer is neither.', adv: 'Mark absolute words and personal-taste words.', ins: 'Strong arguments name a concrete benefit or harm.' },
  rev: ['Relevance.', 'Importance.', 'Specificity.', 'Exaggeration.', 'Both can be strong.'],
  qf: ['Strong = relevant + important + specific'],
  take: ['Judge each alone.', 'Look for concrete reasons.', 'Ignore taste.', 'Beware absolutes.'],
  self: ['Can I reject an imitation argument?', 'Can I accept two opposite strong arguments?', 'Can I spot exaggeration?']
});
const q38 = [
  E(arg('Should plastic bags be banned?', 'Yes, they pollute the environment and harm animals.', 'No, they are very cheap.', 'I', 'Environmental harm is relevant and serious (I strong); low price is a minor point against that harm (II weak).')),
  E(arg('Should voting be made compulsory?', 'No, because many people dislike politics.', 'Yes, it will raise voter turnout and make governments more representative.', 'II', 'Higher turnout and wider representation are direct, important effects (II strong); disliking politics is a personal attitude, not a consequence (I weak).')),
  E(arg('Should school students be given daily homework?', 'Yes, regular practice improves learning.', 'Yes, because teachers like to check notebooks.', 'I', 'Better learning is the central purpose of homework (I strong); teachers\' liking is irrelevant (II weak).')),
  E(arg('Should smoking be banned in public places?', 'No, smokers will feel unhappy.', 'Yes, passive smoke harms the health of non-smokers.', 'II', 'Harm to non-smokers\' health is relevant and serious (II strong); smokers\' unhappiness is minor (I weak).')),
  E(arg('Should the government provide free vaccination to all children?', 'Yes, it prevents serious diseases and protects the whole community.', 'Yes, because other countries do it.', 'I', 'Disease prevention is a strong, specific reason (I). Copying other countries gives no reason of its own (II weak).')),
  E(arg('Should mobile phones be allowed inside examination halls?', 'No, because phones are costly.', 'No, because they can be used for cheating.', 'II', 'Cheating directly damages the fairness of an exam (II strong); the cost of phones is irrelevant (I weak).')),
  M(arg('Should cash be completely replaced by digital payments?', 'Yes, digital payments are faster and leave a traceable record.', 'No, many villages do not have reliable internet or smartphones.', 'both', 'Speed and traceability are real advantages (I strong); lack of access in villages is a serious practical objection (II strong).')),
  M(arg('Should the retirement age be raised to 65?', 'Yes, people now live longer and remain productive for longer.', 'No, it will reduce job openings for young people.', 'both', 'Longer, productive lives are relevant (I strong) and reduced openings for the young are a real effect (II strong).')),
  M(arg('Should the examination system be abolished?', 'Yes, exams cause stress to some students.', 'No, exams are the only way to ever know anything about a student.', 'none', 'Stress for some students is too small a reason to abolish exams (I weak); "the only way to ever know anything" is an exaggeration (II weak).')),
  M(arg('Should advertisements of fast food aimed at children be banned?', 'Yes, children are easily influenced and such food harms their health.', 'No, advertisements are a source of revenue for television channels.', 'I', 'Child health is important and the link to advertising is direct (I strong); channel revenue is a narrow commercial interest set against that (II weak).')),
  M(arg('Should private vehicles be banned in the city centre?', 'No, some people enjoy driving.', 'Yes, it will reduce pollution and traffic jams.', 'II', 'Less pollution and congestion are major public benefits (II strong); enjoying driving is a personal preference (I weak).')),
  M(arg('Should students be given pocket money?', 'Yes, because everyone should have some money.', 'No, because it is bad.', 'none', '"Everyone should" is vague (I weak) and "it is bad" gives no reason (II weak).')),
  M(arg('Should the government increase the tax on tobacco products?', 'Yes, because tobacco companies are rich.', 'Yes, higher prices reduce consumption and raise revenue for health care.', 'II', 'Reducing consumption and funding health care are direct, important effects (II strong); the wealth of companies is not a reason for the tax (I weak).')),
  M(arg('Should junk food be sold in school canteens?', 'No, it harms children\'s health and concentration.', 'Yes, children like it.', 'I', 'Harm to health and concentration is specific and important (I strong); liking is a preference (II weak).')),
  P(arg('Should the government stop all imports of foreign goods?', 'Yes, it will protect domestic industries.', 'No, India does not produce many essential inputs and others may retaliate with trade barriers on its exports.', 'II', 'The proposal is extreme. Missing essential inputs and the risk of retaliation are concrete reasons against stopping all imports (II strong). Protecting industries does not justify a total ban (I weak).')),
  P(arg('Should all government jobs be given only on the basis of examination marks?', 'Yes, it ensures objective and transparent selection.', 'No, marks alone cannot measure every skill needed for a job.', 'both', 'Objectivity is a real benefit (I strong) and marks do not capture every skill (II strong).')),
  P(arg('Should examinations be held online?', 'Yes, since computers are used everywhere nowadays.', 'No, a computer may sometimes hang.', 'none', '"Computers are used everywhere" is vague and does not address exams (I weak); an occasional hang is a minor, fixable issue (II weak).')),
  P(arg('Should employees be allowed to work from home permanently?', 'Yes, it saves commuting time and costs for both the employees and the company.', 'No, some employees may misuse the freedom.', 'I', 'Time and cost savings are specific and important (I strong). "May misuse" is a bare possibility without evidence (II weak).')),
  P(arg('Should the government spend money on space research when many people are poor?', 'Yes, because it makes the country famous.', 'Yes, space technology provides weather forecasts, communication and navigation that also help the poor.', 'II', 'Weather forecasts, communication and navigation are concrete benefits (II strong); fame is not a practical benefit (I weak).')),
  P(arg('Should single-use plastic be banned?', 'Yes, it takes hundreds of years to decompose and clogs drains.', 'No, alternatives cost more and small shops may find the switch hard.', 'both', 'Long-lasting waste and blocked drains are serious harms (I strong). Higher cost for small shops is a real practical concern (II strong).'))
];
build(ch38, q38);

// ---------------- Chapter 39: cause and effect ----------------
const copt = { A: 'I is the cause and II is its effect', B: 'II is the cause and I is its effect', C: 'Both are effects of a common cause', D: 'The two statements are independent of each other' };
const ce = (s1, s2, ans, expl) => {
  const w = Object.values(copt).filter((o) => o !== copt[ans]);
  return { q: `Statements:\nI. ${s1}\nII. ${s2}\n\nWhich of the following is correct?`, c: copt[ans], w, e: `${expl} Answer: ${copt[ans]}.` };
};
const ch39 = C({
  n: 39, id: 'y3-lr-cause-and-effect', cat: 'lr', title: 'Cause and Effect Relationships',
  tag: 'Deciding whether one event causes the other, both share a cause, or they are unrelated',
  over: 'A cause-and-effect question gives two statements about events and asks how they are related. One may be the cause and the other the effect, both may be effects of a common cause, or they may be independent. The test is the time order and the direct link: a cause produces its effect, usually later; a common cause explains why two things happened together; and two statements with no link are independent.',
  place: 'Cause-and-effect pairs are common in logical-reasoning sections and are quick to solve with a clear method.',
  real: 'Tracing the root cause of a fault, a delay or a price change uses the same reasoning.',
  obj: ['Identify immediate and principal causes', 'Use time order and direct links', 'Recognise a common cause behind two effects', 'Recognise independent events', 'Avoid reversing cause and effect'],
  pre: ['Statements and Arguments'],
  refresh: 'A cause explains why the effect happened and usually comes before it in time.',
  defs: [
    'Cause: an event that produces another event.',
    'Effect: the event produced.',
    'Common cause: one event that produces two separate effects.',
    'Independent events: neither causes the other and there is no shared cause.',
    'Immediate cause: the event just before the effect; principal cause: the root reason.'
  ],
  intu: 'Try the sentence "I happened because II" and then "II happened because I". If neither sounds right but both sound like results of something else, look for a shared cause.',
  mental: 'Say "because" both ways. If one direction fits and the other does not, you have cause and effect. If both are consequences of one hidden event, it is a common cause. If neither works, they are independent.',
  formulas: [
    ['Because test', '"A because B" fits one way only', 'Cause–effect.', 'First test.', 'Waterlogging because of rain'],
    ['Time order', 'Cause precedes effect', 'Events in time.', 'Second test.', 'Strike then stranded commuters'],
    ['Common cause', 'One event, two effects', 'Both statements are results.', 'Third test.', 'Pollution → allergies and fish deaths'],
    ['Independence', 'No link in either direction', 'Unrelated.', 'Fourth test.', 'Gold price and a film hit'],
    ['Reversal trap', 'Do not confuse the result with the reason', 'Common error.', 'Check.', 'Holiday is the effect of the warning']
  ],
  narr: [
    'Heavy rain lashed the city for three days (I); many low-lying areas were waterlogged (II). "Waterlogged because of the rain" fits; "rain because of waterlogging" does not. I is the cause and II its effect.',
    'A school holiday and a cyclone warning: the school declared a holiday because the warning was issued, so II is the cause and I its effect.',
    'Many people in an area suffering from skin allergies and fish dying in the nearby river: neither causes the other, but one hidden cause such as factory discharge explains both. They are effects of a common cause.',
    'A rise in the price of gold and a film becoming a box-office hit have no link in either direction and no shared cause. They are independent.',
    'Beware of reversing the order. A bank cutting its lending rates after the central bank cuts its policy rate: the policy-rate cut is the cause (II), the lending-rate cut is the effect (I).'
  ],
  deep: [['Chains of causes', 'When there is a chain A → B → C, the closer link is the immediate cause; the question usually asks only about the two given statements.'], ['Correlation is not causation', 'Two events that occur together are not necessarily linked; the independent option exists for this reason.']],
  vars: [['Direct cause', 'I → II.', 'Rain, waterlogging'], ['Reverse cause', 'II → I.', 'Warning, holiday'], ['Common cause', 'One source.', 'Pollution'], ['Independent', 'No link.', 'Gold and a film'], ['Policy chain', 'Upstream decision.', 'Policy rate, lending rate']],
  ex: [
    { t: 'Direct cause', q: 'I. Heavy rain lashed the city for three days. II. Many low-lying areas were waterlogged. How are they related?', g: ['Rain, waterlogging'], c: 'Because test.', s: [['Test', '"Waterlogged because of heavy rain" fits.'], ['Reverse', '"Rain because of waterlogging" does not.']], a: 'I is the cause and II is its effect', w: 'The rain came first.', tr: 'Reversing them.' },
    { t: 'Common cause', q: 'I. Many people in an area suffered from skin allergies. II. Fish died in large numbers in the nearby river. How are they related?', g: ['Two effects'], c: 'Look for a shared source.', s: [['Neither causes the other', 'Allergies do not kill fish; dead fish do not cause allergies directly.'], ['Shared source', 'Polluted water or discharge explains both.']], a: 'Both are effects of a common cause', w: 'Environmental pollution is the likely common cause.', tr: 'Calling them independent.' },
    { t: 'Independent', q: 'I. The price of gold rose sharply. II. A new film became a box-office hit. How are they related?', g: ['Unrelated news'], c: 'Try both directions.', s: [['Forward', 'A rise in gold price does not produce a hit film.'], ['Backward', 'A hit film does not raise gold prices, and no common cause is apparent.']], a: 'The two statements are independent of each other', w: 'No link exists.', tr: 'Inventing a link.' }
  ],
  short: { title: 'Because, both ways', trad: 'Guess from the topic.', fast: 'Say "because" both ways; one-way fit means cause and effect, both being results of a hidden event means common cause, no fit means independent.', rules: ['Cause comes first.', 'Check the reverse.', 'Hidden shared source: common cause.', 'No link: independent.'] },
  mist: [['Reversing cause and effect', 'Time order ignored.', 'Check which came first.'], ['Calling a correlation a cause', 'Linked only by coincidence.', 'Use independence.'], ['Missing a shared cause', 'Both are results.', 'Look for one hidden source.']],
  tips: { sec: 45, elim: 'Eliminate the reverse direction first.', adv: 'Look for words such as announced, decided, imposed (usually causes).', ins: 'Policy decisions usually come before their consequences.' },
  rev: ['Because test.', 'Time order.', 'Common cause.', 'Independent.', 'Reversal trap.'],
  qf: ['Cause precedes effect'],
  take: ['Because, both ways.', 'Time order.', 'Shared source.', 'No link: independent.'],
  self: ['Can I spot a reversal?', 'Can I find a common cause?', 'Can I call two events independent?']
});
const q39 = [
  E(ce('Heavy rain lashed the city for three days.', 'Many low-lying areas of the city were waterlogged.', 'A', 'Waterlogging is the result of the rain, and the rain came first.')),
  E(ce('The school declared a holiday for Monday.', 'A cyclone warning was issued for the district.', 'B', 'The holiday was declared because of the cyclone warning, so II is the cause.')),
  E(ce('The price of onions has doubled in the market.', 'Heavy rain destroyed a large part of the onion crop.', 'B', 'The crop loss reduced supply and raised prices, so II is the cause.')),
  E(ce('Ravi did not study for the test.', 'Ravi failed the test.', 'A', 'Not studying led to failing, so I is the cause.')),
  E(ce('The price of petrol rose sharply.', 'Bus fares in the city were increased.', 'A', 'Higher fuel costs led operators to raise fares, so I is the cause.')),
  E(ce('The river overflowed and flooded nearby villages.', 'The dam released a large quantity of water.', 'B', 'The dam release caused the river to overflow, so II is the cause.')),
  M(ce('Many people in the city fell ill with fever.', 'The municipal water supply was found to be contaminated.', 'B', 'Contaminated water caused the illnesses, so II is the cause.')),
  M(ce('Demand for air conditioners rose sharply in the city.', 'Summer temperatures reached a record high.', 'B', 'The record heat caused the rise in demand, so II is the cause.')),
  M(ce('Many people in an area suffered from skin allergies.', 'Fish died in large numbers in a nearby river.', 'C', 'Neither causes the other; industrial discharge into the river and surroundings could explain both.')),
  M(ce('The price of gold rose sharply last week.', 'A new film became a box-office hit.', 'D', 'There is no link in either direction and no common cause.')),
  M(ce('The company introduced a new, cheaper model of its phone.', 'The company\'s market share in that segment increased.', 'A', 'The cheaper model attracted buyers, so I is the cause.')),
  M(ce('Hospitals reported a rise in patients with breathing problems.', 'Visibility on city roads dropped sharply in the mornings.', 'C', 'Dense smog or air pollution would explain both, so they are effects of a common cause.')),
  M(ce('The local football team won the district cup.', 'The municipal corporation raised property tax.', 'D', 'The two events have no connection.')),
  M(ce('The bank reduced its lending rates.', 'The central bank cut its policy rate.', 'B', 'The bank cut its lending rates following the policy-rate cut, so II is the cause.')),
  P(ce('The government cut the import duty on edible oil.', 'The retail price of edible oil fell in the market.', 'A', 'Lower import duty reduced the cost of importing oil, which brought down retail prices.')),
  P(ce('Many students reported stomach pain after lunch on Tuesday.', 'Several teachers who ate in the school canteen the same day also fell ill.', 'C', 'Neither group\'s illness caused the other\'s; contaminated food in the canteen is a likely common cause.')),
  P(ce('Thousands of commuters were stranded at the railway station.', 'The railway employees went on a strike.', 'B', 'The strike stopped trains and stranded commuters, so II is the cause.')),
  P(ce('A new highway was inaugurated in the district.', 'A famous poet was awarded a national prize.', 'D', 'The events are unrelated.')),
  P(ce('A large number of people migrated from the village to the city.', 'Many village schools had to be closed because of low enrolment.', 'A', 'Migration reduced the number of children in the village, leading to closures of schools.')),
  P(ce('Farmers in the region lost standing crops.', 'Cattle in the region died in large numbers.', 'C', 'Neither caused the other; a severe drought or flood in the region would explain both.'))
];
build(ch39, q39);
