const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------------- Chapter 40: assumptions, inferences, courses of action ----------------
const opts = { I: 'Only I follows', II: 'Only II follows', both: 'Both I and II follow', none: 'Neither I nor II follows' };
// kind: 'assumption' | 'inference' | 'action'. swap=true puts the correct statement second.
const item = (kind, stmt, a, b, ans, expl, swap) => {
  let c1 = a, c2 = b, key = ans;
  if (swap && (ans === 'I' || ans === 'II')) { c1 = b; c2 = a; key = ans === 'I' ? 'II' : 'I'; }
  const label = { assumption: 'Assumptions', inference: 'Inferences', action: 'Courses of action' }[kind];
  const stem = { assumption: 'Which assumption is implicit in the statement?', inference: 'Which inference can be drawn from the statement?', action: 'Which course of action should follow?' }[kind];
  const w = Object.values(opts).filter((o) => o !== opts[key]);
  return { q: `Statement: ${stmt}\n\n${label}:\nI. ${c1}\nII. ${c2}\n\n${stem}`, c: opts[key], w, e: `${expl} Answer: ${opts[key]}.` };
};
const ch40 = C({
  n: 40, id: 'y3-lr-assumptions-inferences', cat: 'lr', title: 'Assumptions, Inferences, and Courses of Action',
  tag: 'What a statement takes for granted, what it lets you conclude, and what should be done about it',
  url: 'https://www.indiabix.com/logical-reasoning/statement-and-assumption/',
  over: 'Three related question types start from a short statement. An assumption is something the speaker takes for granted for the statement to make sense. An inference is something you can safely conclude from it. A course of action is a step that should be taken in response to a problem. The key is to keep them apart: assumptions sit behind the statement, inferences come out of it, and courses of action are about what to do next.',
  place: 'These three types appear together in most logical-reasoning papers.',
  real: 'Reading between the lines of a notice, a report or a plan, and deciding what to do about it, uses all three skills.',
  obj: ['Spot the assumption that must be true for a statement to make sense', 'Draw only safe inferences', 'Choose practical, relevant courses of action', 'Reject extreme and unrelated options', 'Use the four standard options'],
  pre: ['Statements and Conclusions — Critical Filtering', 'Statements and Arguments'],
  refresh: 'Assumption: unstated support. Inference: stated consequence. Course of action: proposed step.',
  defs: [
    'Implicit assumption: a belief the speaker must hold, otherwise the statement would make no sense.',
    'Inference: a conclusion that follows from the statement, possibly with common sense but without new facts.',
    'Course of action: a practical step that deals with the problem in the statement.',
    'Negation test: if denying the assumption makes the statement pointless, it is implicit.',
    'Extreme options (ban all, close everything) are rarely correct.'
  ],
  intu: 'An assumption is the hidden bridge between what is said and why it was said. To test one, ask: if this were false, would the statement still make sense?',
  mental: 'For assumptions use the negation test. For inferences stick to what the facts guarantee. For courses of action choose steps that are practical, targeted and proportionate.',
  formulas: [
    ['Negation test', 'Deny the assumption; does the statement collapse?', 'Assumptions.', 'Primary test.', '"Phones may disturb others" denied: the notice is pointless'],
    ['Safe inference', 'Only facts or arithmetic from the statement', 'Inferences.', 'Primary test.', '500 then 600 units: production rose'],
    ['Proportion', 'Fit the action to the problem', 'Courses of action.', 'Primary test.', 'Clean the premises for dengue'],
    ['No extremes', 'Reject ban-all or ignore-all', 'Courses of action.', 'Filter.', 'Wait for the monsoon'],
    ['No new facts', 'Do not add facts', 'All three.', 'Filter.', 'Everyone owns a phone']
  ],
  narr: [
    'Statement: "Please keep your mobile phones switched off during the film." The implicit assumption is that phones may disturb other viewers. The claim that everyone owns a phone is not needed: the request makes sense whether or not everyone has one.',
    'A negation test confirms it. If phones could not disturb anyone, the request would be pointless. If not everyone has a phone, the request is still sensible.',
    'Inferences must follow from the facts. "The factory produced 500 units in January and 600 in February" allows "production increased from January to February"; it does not allow "production will rise again in March".',
    'For courses of action, first read the problem. "A large number of students were found suffering from dengue" calls for closing the college for a while and cleaning the premises. Telling students to stay at home and not worry does not deal with the cause.',
    'Reject extremes and delay. "The water level in the main reservoir has fallen to a critical level" calls for rationing now, not for waiting for the monsoon.'
  ],
  deep: [['Assumption vs inference', 'An assumption supports the statement from behind; an inference grows from it in front. The same sentence can be neither.'], ['Courses of action', 'The best actions are specific, immediate and within the authority named in the statement.']],
  vars: [['Implicit assumption', 'Negation test.', 'Phones may disturb others'], ['Invalid assumption', 'Not needed.', 'Everyone owns a phone'], ['Safe inference', 'Facts only.', '500 → 600 units'], ['Extreme inference', 'Adds a prediction.', 'It will rise again'], ['Course of action', 'Proportionate step.', 'Clean the premises']],
  ex: [
    { t: 'Assumption', q: 'Statement: Buy a ticket in advance to avoid long queues at the museum. Assumption: Advance tickets are available. Is it implicit?', g: ['Advice to buy in advance'], c: 'Negation test.', s: [['Deny it', 'If advance tickets were not available, the advice would be pointless.'], ['Result', 'So it is implicit.']], a: 'Yes, it is implicit', w: 'The advice depends on it.', tr: 'Calling it an inference.' },
    { t: 'Inference', q: 'Statement: A school has 600 students and 40% are girls. Which follows: there are 240 girls, or there are 400 boys?', g: ['600 students', '40% girls'], c: 'Compute.', s: [['Girls', '40% of 600 = 240.'], ['Boys', '600 − 240 = 360, not 400.']], a: 'There are 240 girls', w: 'The boys number 360.', tr: 'Taking 60% as 400.' },
    { t: 'Course of action', q: 'Statement: The water level in the city\'s main reservoir has fallen to a critically low level. Which is better: start rationing water now, or wait for the monsoon?', g: ['Critical shortage'], c: 'Proportion and urgency.', s: [['Urgency', 'The problem is current and serious.'], ['Choice', 'Start rationing now; waiting is passive.']], a: 'Start rationing water now', w: 'It deals directly with the shortage.', tr: 'Waiting.' }
  ],
  short: { title: 'Negate, compute, fit', trad: 'Pick what sounds good.', fast: 'Assumption: negate it. Inference: compute or restate only. Course of action: pick the specific, proportionate step.', rules: ['Negation test.', 'No new facts.', 'Reject extremes.', 'Match the action to the cause.'] },
  mist: [['Treating a prediction as an inference', 'Extra step.', 'Stay with the facts.'], ['Picking a vague action', 'Does not address the problem.', 'Choose the specific step.'], ['Choosing a hidden fact as an assumption', 'Not needed.', 'Use the negation test.']],
  tips: { sec: 60, elim: 'Eliminate options with words like all, never, ban, immediately close everything.', adv: 'Underline the problem word in the statement.', ins: 'Courses of action respond to the problem; assumptions support the statement.' },
  rev: ['Negation test.', 'Safe inference.', 'Specific actions.', 'No extremes.', 'No new facts.'],
  qf: ['Negate the assumption'],
  take: ['Negate.', 'Compute.', 'Fit the action.', 'Avoid extremes.'],
  self: ['Can I apply the negation test?', 'Can I avoid predictions?', 'Can I choose a proportionate action?']
});
const q40 = [
  E(item('assumption', 'Please keep your mobile phones switched off during the film.', 'Mobile phones may disturb other viewers.', 'Everyone watching the film owns a mobile phone.', 'I', 'The request makes sense only if phones can disturb others (I implicit). It does not need everyone to own one (II is not needed).')),
  E(item('assumption', 'Buy one litre of milk from the store near the station.', 'No other shop sells milk.', 'The store sells milk.', 'II', 'The instruction is pointless unless the store sells milk (II implicit). Other shops may sell milk too (I is not needed).')),
  E(item('assumption', 'The manager asked all employees to submit their reports by Friday.', 'The employees can complete the reports by Friday.', 'All employees dislike writing reports.', 'I', 'A deadline presumes it can be met (I implicit). Dislike of reports is not needed (II).')),
  E(item('assumption', 'Use soap to wash your hands before meals.', 'Everyone has dirty hands before meals.', 'Soap helps to remove germs from the hands.', 'II', 'The advice rests on soap removing germs (II implicit). It does not claim that everyone\'s hands are dirty (I is not needed).')),
  E(item('assumption', 'The company advertised the job in newspapers.', 'People read newspapers and may see the advertisement.', 'Only newspaper readers will be able to apply.', 'I', 'Advertising in a newspaper assumes that people read it (I implicit). Others may hear of the job in other ways (II is not needed).')),
  E(item('assumption', 'Drive slowly in the school zone.', 'Children never cross the road in the school zone.', 'Driving slowly reduces the chance of accidents.', 'II', 'The instruction assumes slow driving reduces accidents (II implicit). Children may well cross, which is why the instruction exists (I is false).')),
  M(item('assumption', 'Avoid travelling by road at night in the hills; take the morning bus.', 'Roads in the hills are risky at night.', 'Morning buses are available.', 'both', 'The advice rests on night travel being risky (I) and on morning buses existing (II). Both are implicit.')),
  M(item('assumption', 'The government should introduce free school meals to improve attendance.', 'Free meals will attract children to school.', 'School attendance is currently low.', 'both', 'The proposal assumes that free meals attract children (I) and that attendance needs improving (II). Both are implicit.')),
  M(item('assumption', 'Mr Rao has asked the bank to waive the late fee because he paid his dues within two days of the due date.', 'The bank has the power to waive late fees.', 'Banks never charge late fees.', 'I', 'The request presumes the bank can waive the fee (I implicit). If banks never charged late fees there would be nothing to waive (II is false).')),
  M(item('assumption', 'Smartphones should be given to students to improve their learning.', 'Students will use smartphones only for learning.', 'Smartphones can help students learn.', 'II', 'The proposal assumes smartphones can aid learning (II implicit). It does not assume exclusive use for learning (I is too strong).')),
  M(item('inference', 'The factory produced 500 units in January and 600 units in February.', 'Production increased from January to February.', 'Production will increase again in March.', 'I', '600 is greater than 500, so production increased (I). The statement gives no basis for a prediction about March (II).')),
  M(item('inference', 'All the candidates who scored above 80% were given scholarships. Rita was given a scholarship.', 'Rita scored above 80%.', 'Only candidates who scored above 80% were given scholarships.', 'none', 'The statement does not say that scholarships were given only for scores above 80%, so Rita may have qualified another way. Neither inference is forced.')),
  M(item('inference', 'A school has 600 students, and 40% of them are girls.', 'There are 240 girls in the school.', 'There are 400 boys in the school.', 'I', '40% of 600 = 240 girls, so there are 360 boys, not 400 (II is false).')),
  M(item('inference', 'The museum is open from 10 a.m. to 5 p.m. on all days except Mondays.', 'A visitor arriving at 6 p.m. on a Tuesday cannot enter.', 'The museum is open from 10 a.m. to 5 p.m. on Mondays.', 'I', 'At 6 p.m. the museum is closed on Tuesday (I). It is closed on Mondays (II is false).')),
  P(item('action', 'A large number of students of a college were found suffering from dengue.', 'The college should be closed for a few days and the premises cleaned.', 'The students should be told to stay at home and not worry.', 'I', 'Closing and cleaning deals with the cause of the outbreak (I). Asking students to stay at home without worry does nothing about the cause (II is weak).')),
  P(item('action', 'Prices of vegetables have risen sharply due to heavy rain.', 'The government should ban the sale of vegetables.', 'The government should release stocks or arrange imports to bring prices down.', 'II', 'Increasing supply addresses the price rise (II). Banning sales would worsen the problem (I is extreme).')),
  P(item('assumption', 'Buy a ticket in advance to avoid long queues at the museum.', 'Advance tickets are available.', 'There are long queues at the museum without an advance ticket.', 'both', 'The advice presumes that advance tickets exist (I) and that queues are otherwise long (II). Both are implicit.')),
  P(item('inference', 'Between 2015 and 2020 the number of vehicles in a city doubled while the length of its roads increased by only 10%.', 'The number of vehicles per kilometre of road increased.', 'The number of vehicles per kilometre of road more than doubled.', 'I', 'Vehicles rose 2 times and roads 1.1 times, so the density rose by 2 ÷ 1.1 ≈ 1.82 times: it increased (I) but did not more than double (II).')),
  P(item('action', 'The water level in the city\'s main reservoir has fallen to a critically low level.', 'The authorities should wait for the monsoon before taking any step.', 'The authorities should start rationing the water supply immediately.', 'II', 'Rationing now conserves the remaining water (II). Waiting leaves the shortage unmanaged (I is weak).')),
  P(item('assumption', 'The company has decided to give a bonus to employees who complete the project before the deadline.', 'The bonus will motivate the employees.', 'All employees can complete the project before the deadline.', 'I', 'The bonus is meant to motivate (I implicit). The offer does not assume every employee will complete the project early (II is not needed).'))
];
build(ch40, q40);

// ---------------- Chapter 41: critical reasoning ----------------
const cr = (arg, stem, correct, wrongs, expl) => ({ q: `Argument: ${arg}\n\n${stem}`, c: correct, w: wrongs, e: expl });
const S = 'Which of the following, if true, most strengthens the argument?';
const W = 'Which of the following, if true, most weakens the argument?';
const A = 'Which of the following is an assumption on which the argument depends?';
const ch41 = C({
  n: 41, id: 'y3-lr-critical-reasoning', cat: 'lr', title: 'Critical Reasoning — Strengthen and Weaken Arguments',
  tag: 'Premises, conclusions, hidden assumptions and the evidence that supports or undermines them',
  url: 'https://www.indiabix.com/logical-reasoning/',
  over: 'A critical-reasoning question gives a short argument: some evidence (premises) leading to a conclusion. You are asked which new fact would make the conclusion more likely (strengthen), less likely (weaken), or which unstated belief the argument needs (assumption). The skill is to find the gap between premise and conclusion, because strengthening fills the gap and weakening opens it wider.',
  place: 'Critical-reasoning items are a standard element of the reasoning sections in company and management tests.',
  real: 'Evaluating a business case, a policy proposal or a news claim requires the same moves.',
  obj: ['Separate premise from conclusion', 'Find the gap between them', 'Strengthen by closing the gap or ruling out alternatives', 'Weaken by offering another explanation or breaking the link', 'Identify necessary assumptions with the negation test'],
  pre: ['Assumptions, Inferences, and Courses of Action', 'Statements and Arguments'],
  refresh: 'An argument is a conclusion supported by premises. Strong arguments have premises that make the conclusion likely.',
  defs: [
    'Premise: a stated reason or evidence.',
    'Conclusion: the claim the premises are meant to support.',
    'Assumption: an unstated link that must hold for the premises to support the conclusion.',
    'Strengthener: new information that makes the conclusion more likely, often by ruling out an alternative cause.',
    'Weakener: new information that makes the conclusion less likely, often by offering an alternative cause.'
  ],
  intu: 'Every argument has a gap. Strengtheners cover the gap; weakeners dig it deeper. Ask: what else could explain the evidence?',
  mental: 'Mark the conclusion, mark the evidence, and state the gap in one line ("assumes that…"). Then test each option against the gap.',
  formulas: [
    ['Causal pattern', 'A then B ⇒ A caused B', 'Frequent form.', 'Common gap.', 'Programme then productivity rise'],
    ['Strengthen', 'Rule out alternatives or add direct evidence', 'Causal gaps.', 'Comparison group.', 'Control group unchanged'],
    ['Weaken', 'Give an alternative cause or break the link', 'Causal gaps.', 'Common cause.', 'Festival season sales rise'],
    ['Assumption test', 'Negate it; the argument should collapse', 'Assumption items.', 'Primary test.', 'Drivers will slow down'],
    ['Scope', 'Extreme options are rarely right', 'All options.', 'Filter.', 'All accidents are caused by speed']
  ],
  narr: [
    'Take the argument: a company says its training programme raised productivity because output per employee in the trained department rose by 15%. The gap is that the rise may have happened anyway. A strengthener closes it: "Output in a similar department that did not take the programme stayed unchanged." That rules out the alternative that output rose for general reasons.',
    'A weakener opens the gap: "A festival season started the same week and sales rose in all shops in the area" gives another explanation for a shop\'s rising sales.',
    'For an assumption question, state what the argument needs. "The government plans to raise the speeding fine to reduce accidents" needs "Drivers will slow down to avoid the higher fine." Negate it and the plan fails. "All accidents are caused by speeding" is too strong: the plan needs only that some accidents are.',
    'Correlation arguments are open to reverse causation. People who own pets report being happier. The columnist concludes that pets make people happier. A weakener: "People who are already happy are more likely to adopt and keep pets."',
    'The best strengthener for a causal claim is usually a controlled comparison: an experiment where randomly assigned groups differ only in the factor claimed to matter.'
  ],
  deep: [['Alternative explanations', 'When the premise is an observed change, the usual weakeners are another cause, a coincidence, or a change in how things were measured.'], ['Necessary vs sufficient', 'An assumption is necessary for the argument; it need not be sufficient to prove it.']],
  vars: [['Strengthen', 'Close the gap.', 'Control group'], ['Weaken', 'Alternative cause.', 'Festival season'], ['Assumption', 'Negation test.', 'Drivers will slow'], ['Reverse causation', 'Order of cause reversed.', 'Happy people adopt pets'], ['Measurement change', 'Different yardstick.', 'Shorter route']],
  ex: [
    { t: 'Strengthen', q: 'A company says its training programme improved productivity because output rose 15% in the trained department. Which fact strengthens this most?', g: ['15% rise'], c: 'Rule out alternatives.', s: [['Gap', 'Output might have risen anyway.'], ['Strengthener', 'A similar untrained department stayed unchanged.']], a: 'A similar department without the programme showed no rise in output', w: 'It rules out a general cause.', tr: 'Choosing the company\'s spending.' },
    { t: 'Weaken', q: 'A shop says its loyalty scheme raised sales because sales rose after it began. Which fact weakens this most?', g: ['Sales rose after the scheme'], c: 'Alternative cause.', s: [['Gap', 'Something else may have raised sales.'], ['Weakener', 'A festival season started that week and all shops saw sales rise.']], a: 'A festival season began the same week and sales rose at all shops in the area', w: 'It offers another cause.', tr: 'Choosing the advertising detail.' },
    { t: 'Assumption', q: 'To reduce accidents the government raises the fine for speeding. Which assumption does the plan depend on?', g: ['Higher fine'], c: 'Negation test.', s: [['Needed', 'Drivers must slow down because of the higher fine.'], ['Negate', 'If drivers do not slow down, the plan fails.']], a: 'Drivers will slow down to avoid the higher fine', w: 'The plan needs this link.', tr: 'Choosing "all accidents are caused by speeding".' }
  ],
  short: { title: 'Find the gap', trad: 'Pick the option that sounds related.', fast: 'State the gap, then pick the option that closes it (strengthen), widens it (weaken), or is needed to cross it (assumption).', rules: ['Mark conclusion and premise.', 'Look for alternatives.', 'Negate assumptions.', 'Reject extreme options.'] },
  mist: [['Choosing an option that only repeats the premise', 'Adds nothing.', 'The option must change the likelihood of the conclusion.'], ['Treating "may" as proof', 'Too weak.', 'Prefer concrete evidence.'], ['Confusing weaken with disprove', 'Weaken only lowers likelihood.', 'Pick the most damaging option.']],
  tips: { sec: 90, elim: 'Discard options that are irrelevant to the link from premise to conclusion.', adv: 'Always state the gap before reading the options.', ins: 'Wrong options often mention the topic but not the link.' },
  rev: ['Premise and conclusion.', 'The gap.', 'Strengthen.', 'Weaken.', 'Assumption.'],
  qf: ['Negate the assumption'],
  take: ['Find the gap.', 'Rule out alternatives.', 'Negate to test.', 'Avoid extremes.'],
  self: ['Can I state the gap?', 'Can I weaken a causal claim?', 'Can I find a necessary assumption?']
});
const q41 = [
  E(cr('A company argues that its new training programme improves employee productivity, because output per employee in the department that took it rose by 15% in the following quarter.', S, 'Output in a similar department that did not take the programme stayed unchanged in the same quarter.', ['The company spent a large sum on the programme.', 'Employees found the programme interesting.', 'Some employees left the company after the programme.'], 'A similar department without the programme showed no rise, which rules out a general cause and supports the programme.')),
  E(cr('A shop owner claims that the shop\'s loyalty card scheme increased sales, because sales rose after the scheme was introduced.', W, 'A major festival season began the same week and sales rose at all shops in the area.', ['The scheme was advertised widely.', 'Customers often hold several loyalty cards.', 'The shop is located in a busy market.'], 'The festival season gives another explanation for the rise in sales, so it weakens the claim about the scheme.')),
  E(cr('A city should build more cycling tracks, since they will cut air pollution by encouraging people to cycle instead of driving.', S, 'In cities that built cycling tracks, the share of people commuting by cycle rose and the number of car trips fell.', ['Cycling is a popular sport in many countries.', 'Cycling tracks cost less than roads.', 'Some cities have no cycling tracks.'], 'It shows that tracks lead to more cycling and fewer car trips, which is the mechanism the argument relies on.')),
  E(cr('A city should build more cycling tracks, since they will cut air pollution by encouraging people to cycle instead of driving.', W, 'Surveys show that most people who use the new tracks used to walk or take the bus, not drive.', ['Cycling tracks need regular maintenance.', 'Many cyclists wear helmets.', 'Cycling tracks are popular on weekends.'], 'If the track users were not drivers, car use and pollution will not fall, which undermines the argument.')),
  E(cr('Students who eat breakfast score higher on tests, so schools should provide free breakfast to raise test scores.', S, 'In schools that began free breakfast, average test scores rose, while scores stayed flat in comparable schools that did not.', ['Many students enjoy breakfast.', 'Breakfast is the most important meal of the day.', 'Some schools already provide lunch.'], 'A comparison between schools with and without free breakfast directly supports the claim that breakfast raises scores.')),
  E(cr('Students who eat breakfast score higher on tests, so schools should provide free breakfast to raise test scores.', W, 'Students who eat breakfast also sleep longer and study more, and these habits account for their higher scores.', ['Free breakfast is expensive for schools to run.', 'Some students dislike school meals.', 'Breakfast is eaten at home in most cases.'], 'If sleep and study explain the higher scores, providing breakfast alone may not raise scores, so the argument is weakened.')),
  M(cr('To reduce road accidents, the government plans to raise the fine for speeding.', A, 'Drivers will slow down to avoid the higher fine.', ['All road accidents are caused by speeding.', 'Fines are the government\'s main source of income.', 'Speeding fines have never been raised before.'], 'The plan works only if drivers respond to the fine by slowing down. The other options are too strong or irrelevant.')),
  M(cr('The new highway will boost the economy of the towns along it, because more vehicles will pass through them.', W, 'The highway bypasses the towns, so vehicles can reach their destinations without entering any town.', ['The highway has four lanes.', 'Highway construction created some jobs.', 'Several towns along the highway are small.'], 'If vehicles bypass the towns, the extra traffic will not pass through them, which breaks the link in the argument.')),
  M(cr('A drug is effective, because 80% of the patients who took it recovered within a week.', W, 'About 85% of patients with this illness recover within a week without any medicine.', ['The drug is expensive.', 'Most patients took the drug with water.', 'The drug was tested in many hospitals.'], 'If more patients recover without the drug, the 80% figure does not show the drug works, so it weakens the argument.')),
  M(cr('A school will start classes at 9 a.m. instead of 8 a.m., since better-rested students learn more and students will be better rested.', A, 'Students will actually sleep longer if classes begin later.', ['All students walk to school.', 'Teachers prefer a later start.', 'The school day will become shorter.'], 'The conclusion that students will be better rested depends on their actually sleeping more. Negate it and the plan loses its point.')),
  M(cr('Hotels in a hill town raised their room rates in summer, so the demand for rooms must be high in summer.', S, 'Hotels in the town report that most rooms are fully booked weeks in advance in summer.', ['Hotels in the town are old.', 'Room rates are lower in winter.', 'Many tourists carry their own food.'], 'Full advance bookings are direct evidence of high demand, which supports the conclusion.')),
  M(cr('The crime rate in a locality fell after extra police patrols began, so the patrols reduce crime.', W, 'The crime rate fell by the same amount in neighbouring localities where no extra patrols began.', ['The patrols began in January.', 'The police increased patrols in the evening.', 'Residents welcomed the patrols.'], 'A similar fall elsewhere without patrols suggests another cause for the fall, which weakens the claim.')),
  M(cr('A company should switch to solar power because it will lower its electricity bills.', S, 'The company\'s electricity bills are high, and the cost of installing solar panels would be recovered within three years from the savings.', ['Solar panels are made of silicon.', 'Some companies already use solar power.', 'The company\'s offices are on the third floor.'], 'It shows that bills are high and that savings repay the cost quickly, which supports the claim of lower bills.')),
  P(cr('A survey found that people who own pets report being happier than those who do not. A columnist concludes that owning a pet makes people happier.', W, 'People who are already happy are more likely to adopt and keep pets.', ['Many pet owners spend time outdoors.', 'Pet food can be costly.', 'The survey included thousands of people.'], 'This reverses the direction of cause: happiness may lead to pet ownership, so the survey does not show that pets cause happiness.')),
  P(cr('The city council argues that the new parking charges will reduce traffic in the city centre, because people will choose public transport instead of paying to park.', A, 'Public transport is a practical alternative for those who now drive to the centre.', ['The parking charges will raise a large amount of money.', 'Public transport is cheaper than driving for all trips.', 'Everyone who drives to the centre parks on the street.'], 'The argument requires that people have a workable alternative; otherwise they would keep driving and paying.')),
  P(cr('Studies show that students who learn a musical instrument do better in mathematics. A teacher argues that music lessons improve mathematical ability.', S, 'In an experiment, students randomly assigned to music lessons improved in mathematics more than students randomly assigned to art lessons.', ['Many students enjoy music lessons.', 'Mathematics teachers often play instruments.', 'Music lessons cost more than art lessons.'], 'Random assignment removes the possibility that better students simply choose music, so it directly supports the causal claim.')),
  P(cr('The mayor claims the new flyover has cut travel time in the city, because the average time taken by buses on the route fell from 40 to 30 minutes.', W, 'At the same time, the bus route was shortened by about 25% when two stops were dropped.', ['The flyover was built in two years.', 'The flyover has a speed limit of 60 km/h.', 'Bus fares on the route are unchanged.'], 'A route shortened by 25% would take about 30 minutes without any help from the flyover, so the fall in time may not be due to it.')),
  P(cr('The editor argues that the newspaper should stop its print edition, because most readers now read it online.', A, 'The newspaper will not lose a significant share of its readers or revenue by ending the print edition.', ['Online readers are younger than print readers.', 'The print edition was started 50 years ago.', 'All print readers will switch to the online edition.'], 'The case for stopping print depends on not losing important readers or revenue. The last option is too strong; the argument needs only that losses are not significant.')),
  P(cr('A shop owner argues that offering discounts attracts customers who then buy full-priced items too, so discounts raise total profit.', W, 'Customers who come for discounted items buy almost nothing else.', ['Discounts are advertised in newspapers.', 'The shop offers discounts every festival.', 'Some customers prefer shopping online.'], 'If discount shoppers buy only discounted items, there are no extra full-price sales, which weakens the claim.'))
];
build(ch41, q41);
