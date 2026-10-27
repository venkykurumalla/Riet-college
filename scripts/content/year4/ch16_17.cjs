const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const base = { year: 4, cat: 'verbal', category: 'Advanced Verbal Ability', url: 'https://www.indiabix.com/verbal-ability/' };
const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const cr = (arg, stem, c, w, e) => ({ q: `Argument: ${arg}\n\n${stem}`, c, w, e });
const CONC = 'Which of the following is the main conclusion of the argument?';
const ASSUME = 'Which of the following is an assumption on which the argument depends?';
const STR = 'Which of the following, if true, most strengthens the argument?';
const WEAK = 'Which of the following, if true, most weakens the argument?';
const FLAW = 'The reasoning in the argument is flawed because it';
const PARA = 'Which of the following best resolves the apparent paradox?';
const MUST = 'Which of the following must be true if the statements above are true?';

const ch16 = C({ ...base, n: 16, id: 'y4-avm-adv-critical-reasoning', title: 'Advanced Critical Reasoning',
  tag: 'Hidden assumptions, causal flaws, sampling errors, paradoxes, evaluation of evidence and parallel reasoning in short arguments',
  over: 'Advanced critical reasoning goes beyond naming the conclusion. It asks you to rank evidence, find the weakest link, tell correlation from cause, notice an unrepresentative sample, resolve an apparent contradiction and evaluate what extra information would settle a dispute. Each type is a question about the gap between premises and conclusion, so the first move is always to state that gap in one line.',
  place: 'Advanced critical-reasoning items are the discriminating questions in management and campus verbal sections.',
  real: 'Judging proposals, studies and claims in reports uses these same questions.',
  obj: ['State the gap in one line', 'Spot correlation-versus-cause and reverse-cause arguments', 'Identify unrepresentative samples and part-whole errors', 'Choose the most useful evidence to evaluate a claim', 'Resolve paradoxes with a reconciling fact'],
  pre: ['Critical Reasoning in Verbal Context', 'Argument Evaluation in Verbal Problems'],
  refresh: 'Strengthen: close the gap or rule out alternatives. Weaken: open the gap or supply an alternative. Assumption: negate it and the argument fails.',
  defs: ['Gap: the unstated link between premise and conclusion.', 'Alternative explanation: another cause for the same evidence.', 'Unrepresentative sample: a group that differs from the population.', 'Composition error: assuming the whole has a property because each part does.', 'Evaluation: choosing information that would best test the claim.'],
  intu: 'Every flawed argument skips a step. Naming the skipped step answers the question.',
  mental: 'Write "Premise → Conclusion; gap: assumes…". Then test each option against the gap.',
  formulas: [['Correlation trap', 'A with B ⇏ A causes B', 'Causal claims.', 'Alternative cause.', 'Working late and promotion'], ['Reverse cause', 'B may cause A', 'Causal claims.', 'Direction.', 'Police and crime'], ['Sample test', 'Is the sample like the population?', 'Surveys.', 'Representativeness.', 'Gym visitors'], ['Evaluate', 'Ask for the control group', 'Evidence questions.', 'Comparison.', 'Similar schools'], ['Paradox', 'Find a fact true for both observations', 'Paradox questions.', 'Reconcile.', 'More customers']],
  narr: ['"Everyone promoted this year works late, so working late leads to promotion." The gap: perhaps people who are ambitious both work late and get promoted, or promoted people are given more work. The flaw is mistaking correlation for cause.', '"Cities with more police have more crime, so police cause crime." Weaken it by reversing the direction: cities add police when crime is already rising.', '"A poll of gym visitors found 85% support a ban on junk-food advertising, so most residents support it." The sample is not representative of the residents.', 'To evaluate "the reading programme works because scores rose 10%", ask how scores changed in similar schools without the programme.', 'To resolve a paradox such as lower prices with higher profit, find a fact that makes both true: so many more customers came that the total margin rose.'],
  deep: [['Necessary versus sufficient', 'An assumption need only make the argument possible, not prove it.'], ['Composition and division', 'A property of the parts need not hold for the whole, and vice versa.']],
  vars: [['Cause', 'Alternative or reverse.', 'Police and crime'], ['Sampling', 'Representativeness.', 'Gym poll'], ['Evaluation', 'Control group.', 'Reading programme'], ['Paradox', 'Reconcile.', 'Lower price, higher profit'], ['Composition', 'Parts to whole.', 'Cheap parts']],
  ex: [
    { t: 'Reverse cause', q: 'Cities with more police have more crime, so more police cause more crime. Which fact weakens this most?', g: ['Correlation'], c: 'Reverse the direction.', s: [['Gap', 'Maybe crime brings police.'], ['Fact', 'Cities add police when crime is already rising.']], a: 'Cities add police when crime is already rising', w: 'It reverses the direction.', tr: 'Choosing the cost of police.' },
    { t: 'Sampling', q: 'A poll of gym visitors shows 85% support a junk-food advertising ban. The council concludes most residents support it. What is wrong?', g: ['Gym visitors'], c: 'Check the sample.', s: [['Sample', 'Gym visitors are health-conscious.'], ['Flaw', 'Not representative of all residents.']], a: 'The sample is not representative of residents', w: 'Different population.', tr: 'Calling the sample too large.' },
    { t: 'Evaluate', q: 'A school says its reading programme works because scores rose 10%. What information is most useful?', g: ['10% rise'], c: 'Control group.', s: [['Question', 'Did similar schools also rise?'], ['Info', 'Scores in similar schools without the programme.']], a: 'How scores changed in similar schools without the programme', w: 'A comparison isolates the effect.', tr: 'Asking the cost.' }
  ],
  short: { title: 'Say the gap', trad: 'Read options first.', fast: 'State the gap in one line, then choose the option that widens, closes or crosses it.', rules: ['Correlation is not cause.', 'Check the sample.', 'Evaluate with a control.', 'Paradox: find the reconciler.'] },
  mist: [['Picking an option that repeats the premise', 'No new information.', 'Choose one that changes likelihood.'], ['Choosing too strong an assumption', 'Not needed.', 'Choose the minimal bridge.'], ['Ignoring direction of cause', 'Reverse cause missed.', 'Ask which way.']],
  tips: { sec: 100, elim: 'Eliminate options that do not touch the gap.', adv: 'Rephrase the argument in "because" form.', ins: 'Wrong options are often true but irrelevant.' },
  rev: ['Gap.', 'Cause.', 'Sample.', 'Evaluate.', 'Paradox.'],
  qf: ['Premise → gap → conclusion'],
  take: ['Name the gap.', 'Alternatives.', 'Sample.', 'Control.'],
  self: ['Can I state the gap?', 'Can I spot reverse cause?', 'Can I resolve a paradox?']
});
const q16 = [
  E(cr('Many of our competitors have moved to remote work and reported lower office costs. Our office lease is expensive. We should therefore consider moving to remote work.', CONC, 'We should consider moving to remote work.', ['Many competitors have moved to remote work.', 'Competitors reported lower office costs.', 'Our office lease is expensive.'], 'The word "therefore" marks the conclusion; the rest are premises.')),
  E(cr('The city should install more streetlights, because well-lit streets deter crime.', ASSUME, 'The streets targeted by the plan are currently poorly lit.', ['Streetlights are cheap to run.', 'Crime is highest at night in every city.', 'Residents have asked for streetlights.'], 'If the targeted streets were already well lit, more lights would add nothing, so the plan assumes they are poorly lit.')),
  E(cr('A coffee chain says its new loyalty app increases visits, because average weekly visits per member rose after the app launched.', STR, 'Weekly visits of non-members stayed unchanged over the same period.', ['The app was downloaded a million times.', 'The coffee is cheaper than in other chains.', 'Members receive a free drink each month.'], 'It rules out a general rise in visits, so the app is more likely the cause.')),
  E(cr('A coffee chain says its new loyalty app increases visits, because average weekly visits per member rose after the app launched.', WEAK, 'A new office block opened next door in the same month, adding thousands of potential customers.', ['The app was easy to use.', 'Members receive a free drink each month.', 'The chain has opened fifty shops.'], 'The office block gives another reason for more visits.')),
  E(cr('Everyone in our department who was promoted this year works late, so working late leads to promotion.', FLAW, 'mistakes a correlation for a cause', ['relies on a very large sample', 'attacks those who do not work late', 'assumes that promotion is rare'], 'Promoted people working late does not show that late work caused the promotion.')),
  E(cr('All the candidates shortlisted have degrees in engineering. Some shortlisted candidates also have MBAs.', MUST, 'Some people with MBAs have degrees in engineering.', ['All people with MBAs are shortlisted.', 'No shortlisted candidate lacks an MBA.', 'Engineering graduates are the best candidates.'], 'The shortlisted candidates with MBAs also have engineering degrees, so some MBA holders are engineers.')),
  M(cr('A restaurant lowered the price of its set meal, yet its profit rose.', PARA, 'The lower price attracted so many more customers that total profit increased.', ['Competitors also lowered their prices.', 'The set meal is made of cheaper ingredients.', 'The restaurant has a large dining room.'], 'If many more customers came, total profit can rise even with a lower profit per meal.')),
  M(cr('Students who attended the revision sessions scored higher than those who did not, so the sessions improved scores.', ASSUME, 'The students who attended were not already the higher-scoring students.', ['All students were invited to the sessions.', 'The sessions were held in the afternoon.', 'Teachers prepared the sessions carefully.'], 'If better students were the ones who attended, their higher scores would not show the effect of the sessions.')),
  M(cr('A poll of 200 visitors to a gym found that 85 per cent support a ban on junk-food advertising. The council concludes that most residents support the ban.', FLAW, 'bases a claim about all residents on a group that is not representative', ['uses a sample that is too large', 'attacks opponents of the ban', 'assumes a ban is easy to enforce'], 'Gym visitors may be more health-conscious than the average resident.')),
  M(cr('A company says electric delivery vans will cut its costs, because electricity is cheaper than diesel per kilometre.', WEAK, 'The vans cost much more to buy and their batteries must be replaced often, so the total cost per kilometre is higher.', ['Electric vans are quieter.', 'Electricity prices vary by region.', 'Drivers like the vans.'], 'Fuel is only part of the cost; higher purchase and battery costs could outweigh the saving.')),
  M(cr('A school claims its new reading programme works, because reading scores rose by 10 per cent.', 'Which of the following would be most useful in evaluating the claim?', 'How scores changed in similar schools that did not use the programme', ['How much the programme cost', 'How many teachers liked the programme', 'How long the programme has been used'], 'A comparison with similar schools shows whether the rise is due to the programme.')),
  M(cr('Every successful manager I know reads a lot, so reading a lot makes managers successful.', 'Which of the following arguments is most similar in its reasoning?', 'Every happy person I know drinks tea, so drinking tea makes people happy.', ['Every manager reads, and Rahul is a manager, so Rahul reads.', 'Reading is good, so managers should read.', 'Some managers read, so all managers read.'], 'Both infer a cause from an association among the people observed.')),
  M(cr('Allowing flexible working hours will raise productivity, because employees will work when they are most alert.', STR, 'Employees report that their alertness differs greatly across the day.', ['Flexible hours are popular.', 'Some offices already have flexible hours.', 'Employees like their managers.'], 'It supports the claim that when employees work matters to productivity.')),
  M(cr('Since the new bridge cuts travel time by 20 minutes, commuters will switch to using it.', ASSUME, 'The bridge is not so costly to use that it offsets the time saved.', ['All commuters travel by car.', 'The bridge has four lanes.', 'Commuters dislike the old road.'], 'If the toll outweighs the time saved, commuters would not switch.')),
  P(cr('The company\'s hiring freeze will save money. However, a freeze overloads existing staff and raises turnover, and replacing staff costs more than the salary saved. So the freeze is likely to cost more than it saves.', CONC, 'The hiring freeze is likely to cost more than it saves.', ['A hiring freeze saves salary.', 'A freeze overloads existing staff.', 'Replacing staff is costly.'], 'The last sentence, introduced by "So", is the conclusion.')),
  P(cr('Each part of the machine is cheap, so the machine is cheap.', FLAW, 'assumes that the whole has a property because each part has it', ['attacks the sellers of the machine', 'relies on an expert', 'uses a sample that is too small'], 'The sum of many cheap parts may still be expensive: a composition error.')),
  P(cr('Cities with more police officers have more crime, so more police cause more crime.', WEAK, 'Cities add police officers when crime is already rising.', ['Police officers are well trained.', 'Crime is reported more in cities.', 'Most crimes are minor.'], 'It reverses the direction of cause: crime leads to more police.')),
  P(cr('Hospitals have added beds, yet waiting times for admission have increased.', PARA, 'The number of patients seeking admission has grown faster than the number of beds.', ['Beds are cleaned more often.', 'Hospitals have more doctors.', 'The new beds are more comfortable.'], 'If demand grew faster than supply, waiting times can rise even as beds increase.')),
  P(cr('A ban on single-use cups will reduce litter, because people will bring their own cups.', ASSUME, 'Customers will actually bring reusable cups rather than switching to other disposable items.', ['Cafés will lose customers.', 'Reusable cups are cheap.', 'Litter is a serious problem.'], 'If people switch to other disposables, litter would not fall.')),
  P(cr('No employee who has been late more than three times is eligible for the bonus. Some eligible employees are in the sales team.', MUST, 'Some members of the sales team have been late no more than three times.', ['All sales team members are eligible.', 'No sales team member has been late.', 'Some sales team members are late more than three times.'], 'Eligible employees have not been late more than three times; some of them are in sales.'))
];
build(ch16, q16);

// ================= Chapter 17: complex inference chains (propositional logic checked over all worlds) =================
const sets = [
  { vars: ['A', 'B', 'C'], intro: 'Statements: If the project is approved, the budget is released. If the budget is released, hiring begins. Hiring has not begun.',
    prem: [(w) => !w.A || w.B, (w) => !w.B || w.C, (w) => !w.C],
    cands: [['The project was not approved.', (w) => !w.A], ['The budget was released.', (w) => w.B], ['The project was approved.', (w) => w.A], ['Hiring will begin soon.', (w) => w.C], ['Either the project was approved or the budget was released.', (w) => w.A || w.B], ['The budget was not released.', (w) => !w.B]] },
  { vars: ['R', 'S', 'T'], intro: 'Statements: If it rains, the match is cancelled. If the match is cancelled, tickets are refunded. It rains.',
    prem: [(w) => !w.R || w.S, (w) => !w.S || w.T, (w) => w.R],
    cands: [['Tickets are refunded.', (w) => w.T], ['The match is not cancelled.', (w) => !w.S], ['Tickets are not refunded.', (w) => !w.T], ['It does not rain.', (w) => !w.R], ['Either the match is not cancelled or tickets are refunded.', (w) => !w.S || w.T], ['The match is cancelled.', (w) => w.S]] },
  { vars: ['X', 'Y', 'Z'], intro: 'Statements: A candidate gets an interview only if the candidate passes the aptitude test. A candidate gets an offer only if the candidate gets an interview. Meena did not pass the aptitude test.',
    prem: [(w) => !w.Y || w.X, (w) => !w.Z || w.Y, (w) => !w.X],
    cands: [['Meena did not get an offer.', (w) => !w.Z], ['Meena did not get an interview.', (w) => !w.Y], ['Meena got an interview.', (w) => w.Y], ['Meena got an offer.', (w) => w.Z], ['Meena either got an interview or an offer.', (w) => w.Y || w.Z], ['If Meena got an offer, she passed the test.', (w) => !w.Z || w.X]] },
  { vars: ['A', 'B', 'C'], intro: 'Statements: Exactly one of the two plans, Plan A and Plan B, will be adopted. If Plan A is adopted, the road will be widened. The road will not be widened.',
    prem: [(w) => w.A !== w.B, (w) => !w.A || w.C, (w) => !w.C],
    cands: [['Plan B will be adopted.', (w) => w.B], ['Plan A will be adopted.', (w) => w.A], ['Neither plan will be adopted.', (w) => !w.A && !w.B], ['Both plans will be adopted.', (w) => w.A && w.B], ['Plan A will not be adopted.', (w) => !w.A], ['The road will be widened if Plan B is adopted.', (w) => !w.B || w.C]] },
  { vars: ['M', 'N', 'O'], intro: 'Statements: The shop is open if and only if the manager is present. If the manager is present, the alarm is off. The alarm is on.',
    prem: [(w) => w.M === w.N, (w) => !w.N || !w.O, (w) => w.O],
    cands: [['The shop is not open.', (w) => !w.M], ['The manager is not present.', (w) => !w.N], ['The shop is open.', (w) => w.M], ['The manager is present.', (w) => w.N], ['The shop is open or the manager is present.', (w) => w.M || w.N], ['The shop is open only if the alarm is on.', (w) => !w.M || w.O]] },
  { vars: ['P', 'Q', 'R'], intro: 'Statements: Either the printer is faulty or the cable is loose (or both). If the cable is loose, the signal drops. The signal does not drop.',
    prem: [(w) => w.P || w.Q, (w) => !w.Q || w.R, (w) => !w.R],
    cands: [['The printer is faulty.', (w) => w.P], ['The cable is not loose.', (w) => !w.Q], ['The cable is loose.', (w) => w.Q], ['The printer is not faulty.', (w) => !w.P], ['The printer is faulty and the cable is not loose.', (w) => w.P && !w.Q], ['The signal will drop.', (w) => w.R]] }
];
const stems = ['Which of the following must be true?', 'Which of the following conclusions is valid?', 'Which of the following can be deduced from the statements?', 'Which of the following cannot be false?'];
function chainQ(si, pickFollow, nth, stemIdx) {
  const s = sets[si];
  const worlds = [];
  for (let m = 0; m < 8; m++) { const w = {}; s.vars.forEach((v, i) => { w[v] = !!((m >> i) & 1); }); if (s.prem.every((p) => p(w))) worlds.push(w); }
  if (!worlds.length) throw new Error('inconsistent set ' + si);
  const follows = s.cands.filter((c) => worlds.every(c[1]));
  const not = s.cands.filter((c) => !worlds.every(c[1]));
  if (follows.length < 1 || not.length < 3) throw new Error('set ' + si + ' needs variety: ' + follows.length + '/' + not.length);
  const f = follows[pickFollow % follows.length];
  const wr = [0, 1, 2].map((k) => not[(nth + k) % not.length]);
  return { q: `${s.intro}\n\n${stems[stemIdx]}`, c: f[0], w: wr.map((x) => x[0]), e: `Checking every possible situation that fits the statements, "${f[0]}" is true in all of them. Each of the other options is false in at least one situation that fits the statements.` };
}
const ch17 = C({ ...base, n: 17, id: 'y4-avm-complex-inferences', title: 'Complex Inference Chains',
  tag: 'Chaining if-then statements, contrapositives, only-if and either-or to find what must be true',
  over: 'A complex inference question gives several linked conditional statements and one or two facts, and asks what must follow. The tools are chaining (if p then q, if q then r gives if p then r), the contrapositive (not q gives not p), the reading of "only if" and "if and only if", and elimination in either-or statements. Because each combination of true and false values is a possible world, a conclusion must be true in every world consistent with the statements.',
  place: 'Chained inference items appear in the advanced logical and verbal sections of company tests.',
  real: 'Reading policies and contracts ("if X then Y") and deciding what follows is the same reasoning.',
  obj: ['Chain conditional statements', 'Use the contrapositive correctly', 'Translate "only if" and "if and only if"', 'Eliminate in either-or statements', 'Reject invalid reversals (denying the antecedent)'],
  pre: ['Assumptions, Inferences, and Courses of Action', 'Advanced Critical Reasoning'],
  refresh: '"If p then q" is equivalent to "if not q then not p", but not to "if q then p". "p only if q" means "if p then q".',
  defs: ['Chain: if p then q and if q then r give if p then r.', 'Contrapositive: if not q then not p.', 'Converse: if q then p (not equivalent).', 'Only if: p only if q means if p then q.', 'If and only if: p and q are both true or both false.'],
  intu: 'A conditional is a one-way street. You may travel forward from cause to effect, and you may reason backwards only by denying the effect.',
  mental: 'Write each statement as an arrow. Follow arrows forward from known true facts and backwards from known false facts.',
  formulas: [['Chain', 'p → q, q → r ⇒ p → r', 'Two conditionals.', 'Forward.', 'Approved → budget → hiring'], ['Contrapositive', 'p → q ⇒ ¬q → ¬p', 'Negated result.', 'Backward.', 'No hiring ⇒ not approved'], ['Only if', 'p only if q ⇒ p → q', 'Reading.', 'Translate.', 'Interview only if test'], ['Either-or', 'p ∨ q, ¬p ⇒ q', 'Elimination.', 'Forward.', 'Printer or cable'], ['Invalid reversal', 'p → q, ¬p ⇏ ¬q', 'Denying the antecedent.', 'Trap.', 'Not approved ⇏ no budget']],
  narr: ['If the project is approved the budget is released; if the budget is released hiring begins; hiring has not begun. Going backwards: no hiring means the budget was not released (contrapositive of the second statement), which means the project was not approved (contrapositive of the first).', 'Meena did not pass the aptitude test. An interview needs a pass, so she did not get an interview; an offer needs an interview, so no offer. We cannot conclude anything about whether someone who passed gets an offer.', 'Exactly one plan is adopted; if Plan A then the road is widened; the road is not widened. So Plan A is not adopted, and therefore Plan B is.', 'The shop is open if and only if the manager is present; if the manager is present the alarm is off; the alarm is on. So the manager is not present, hence the shop is not open.', 'Either the printer is faulty or the cable is loose; if the cable is loose the signal drops; the signal does not drop. So the cable is not loose, and the printer is faulty.'],
  deep: [['Denying the antecedent', 'From "if p then q" and "not p" you cannot conclude "not q"; q may be true for other reasons.'], ['Checking by worlds', 'With three yes-no facts there are only eight worlds; if you are unsure, list those that fit the statements.']],
  vars: [['Chains', 'Forward.', 'Approval chain'], ['Contrapositives', 'Backward.', 'No hiring'], ['Only if', 'Translate.', 'Interview'], ['Either-or', 'Eliminate.', 'Printer'], ['If and only if', 'Both ways.', 'Shop and manager']],
  ex: [
    { t: 'Contrapositive', q: 'If the project is approved the budget is released; the budget was not released. What follows?', g: ['A → B', '¬B'], c: 'Deny the result.', s: [['Contrapositive', 'Not B gives not A.'], ['Conclusion', 'The project was not approved.']], a: 'The project was not approved', w: 'Backward through the arrow.', tr: 'Concluding approved.' },
    { t: 'Invalid reversal', q: 'If it rains the match is cancelled. The match was cancelled. Did it rain?', g: ['R → S', 'S'], c: 'Check the converse.', s: [['Arrow', 'Rain leads to cancellation.'], ['Reverse', 'Cancellation could have other causes.']], a: 'It cannot be concluded', w: 'Affirming the consequent.', tr: 'Saying it rained.' },
    { t: 'Either-or', q: 'Either the printer is faulty or the cable is loose. The cable is not loose. What follows?', g: ['P or Q', 'not Q'], c: 'Eliminate.', s: [['Remove', 'Q is false.'], ['Left', 'P must be true.']], a: 'The printer is faulty', w: 'One side is eliminated.', tr: 'Calling it undetermined.' }
  ],
  short: { title: 'Arrows and worlds', trad: 'Guess from wording.', fast: 'Write arrows, go forward from truths and backward from falsehoods; if unsure, list the worlds that fit.', rules: ['Contrapositive is valid.', 'Converse is not.', 'Only if = arrow.', 'Eliminate in either-or.'] },
  mist: [['Reversing the arrow', 'Converse error.', 'Use the contrapositive instead.'], ['Treating "only if" as "if"', 'Wrong arrow.', 'Translate p only if q to p → q.'], ['Concluding from a negated antecedent', 'Invalid.', 'Nothing follows.']],
  tips: { sec: 75, elim: 'Eliminate options that reverse an arrow.', adv: 'Write letters for each statement.', ins: 'Valid conclusions follow in every possible world.' },
  rev: ['Chains.', 'Contrapositive.', 'Only if.', 'Either-or.', 'Invalid reversals.'],
  qf: ['p → q ≡ ¬q → ¬p'],
  take: ['Arrows.', 'Backwards by denial.', 'No converse.', 'List worlds.'],
  self: ['Can I use a contrapositive?', 'Can I translate only if?', 'Can I spot a converse error?']
});
const order = [[0, 0, 0, 0], [0, 1, 1, 1], [0, 0, 2, 2], [1, 0, 0, 3], [1, 1, 1, 0], [1, 0, 2, 1], [2, 0, 0, 2], [2, 1, 1, 3], [2, 0, 2, 0], [3, 0, 0, 1], [3, 0, 1, 2], [3, 0, 2, 3], [4, 0, 0, 0], [4, 0, 1, 1], [4, 1, 2, 2], [5, 0, 0, 3], [5, 0, 1, 0], [5, 1, 2, 1], [0, 2, 3, 3], [1, 2, 3, 2]];
const q17 = order.map(([si, pf, nth, st], i) => (i < 6 ? easy : i < 14 ? medium : placement)(...(() => { const x = chainQ(si, pf, nth, st); return [x.q, x.c, x.w, x.e]; })()));
build(ch17, q17);
