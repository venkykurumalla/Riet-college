const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'rec', category: 'Recruiter / Assessment Preparation' };
const spec = (o) => C({ ...base, ...o });
const ev = (p, m, n) => p * m - (1 - p) * n;
const NOTE = 'The rules and figures used in examples are hypothetical teaching rules, not the policy of any real company or platform.';

// ============ Chapter 42: difficulty recognition ============
const score = (steps, topics, large) => steps + 2 * (topics - 1) + (large ? 1 : 0);
const band = (s) => (s <= 3 ? 'Easy' : s <= 6 ? 'Medium' : 'Hard');
const ch42 = spec({ n: 42, id: 'y4-rec-difficulty-recognition', title: 'Difficulty Level Recognition',
  tag: 'Judging at first glance how hard a question is, using steps, topics combined and size of numbers',
  over: 'Good test-takers can tell in a few seconds how hard a question will be. This chapter gives a simple scoring rule you can apply at first glance: count the steps, add 2 for each extra topic combined, add 1 if the numbers are large or awkward. A score of 3 or less is Easy, 4 to 6 Medium and 7 or more Hard. The rule is a training device, not a law: it helps you decide order and time. ' + NOTE,
  place: 'Recognising difficulty quickly is the basis of triage and of the skip decision.',
  real: 'Estimating effort before starting a task is a standard professional skill.',
  obj: ['Count steps and topics at first glance', 'Apply the scoring rule', 'Map the score to a band and a time budget', 'Spot trap features that hide difficulty', 'Calibrate the rule against your own timings'],
  pre: ['Time Triage and Question Selection', 'Strategic Question Selection'],
  refresh: 'Difficulty score = steps + 2 × (topics − 1) + 1 if large numbers. Bands: ≤3 Easy, 4–6 Medium, ≥7 Hard.',
  defs: ['Step: one distinct calculation or deduction.', 'Topic: a different area combined in the question.', 'Large numbers: numbers that make arithmetic slow.', 'Band: Easy, Medium or Hard.', 'Calibration: adjusting the rule to your timings.'],
  intu: 'Difficulty is mostly about the number of things you must hold in your head.',
  mental: 'Count steps, count topics, check numbers, add, and read the band.',
  formulas: [['Score', 'steps + 2(topics − 1) + large', 'Any question.', 'Rule.', '3 + 2 + 1 = 6'], ['Time budget', '≈ 20 s × score', 'Planning.', 'Estimate.', 'Score 6 → 120 s'], ['Band', '≤3 E, 4–6 M, ≥7 H', 'Score.', 'Class.', '6 = Medium'], ['Trap check', 'Hidden second topic?', 'Wording.', 'Add 2.', 'Percent + ratio'], ['Calibrate', 'Compare with real time', 'After mocks.', 'Adjust.', '20 s per point']],
  narr: ['"Find 20% of 450": one step, one topic, ordinary numbers: score 1, Easy, about 20 seconds.', '"A shop gives successive discounts of 20% and 10% on ₹750 and then adds 5% tax": three steps, one topic: score 3, Easy-to-Medium boundary, about 60 seconds.', '"Two pipes and a leak fill a tank; the leak starts after 2 hours": four steps, one topic with a phase change: score 4 or 5, Medium.', '"Mixture of alloys sold at a profit with a discount": three or four steps and two topics (mixtures, profit): 4 + 2 = 6, Medium to Hard.', 'A word problem with large awkward numbers adds 1 and often 20 seconds.'],
  deep: [['Hidden topics', 'A "percent" question that needs a ratio is two topics; count both.'], ['Wording length', 'Long wording does not make a question hard unless it adds steps.']],
  vars: [['Steps', 'Count.', '3'], ['Topics', 'Combined areas.', '2'], ['Large numbers', 'Add 1.', 'Yes'], ['Band', 'Class.', 'Medium'], ['Time', '20 s × score.', '120 s']],
  ex: [
    { t: 'Score', q: 'A question needs 3 steps, combines 2 topics and has ordinary numbers. Score and band?', g: ['3 steps', '2 topics'], c: 'Apply the rule.', s: [['Compute', '3 + 2 × (2 − 1) = 5.'], ['Band', 'Medium.']], a: '5, Medium', w: 'Score 4–6 is Medium.', tr: 'Forgetting the topic term.' },
    { t: 'Time', q: 'Score 6. Estimated time at 20 seconds per point?', g: ['6'], c: 'Multiply.', s: [['Rule', 'About 20 seconds per point.'], ['Multiply', '6 × 20 = 120 seconds.']], a: '120 seconds', w: 'Plan the time.', tr: 'Using 60.' },
    { t: 'Hidden topic', q: 'A percent question also needs a ratio to finish. How many topics?', g: ['Percent, ratio'], c: 'Count.', s: [['List', 'The question uses percent and also a ratio.'], ['Count', 'Two topics, so add 2 to the score.']], a: '2', w: 'Add 2 to the score.', tr: 'Counting 1.' }
  ],
  short: { title: 'Steps, topics, size', trad: 'Judge by wording length.', fast: 'Score = steps + 2 per extra topic + 1 for large numbers; ≤3 Easy, 4–6 Medium, ≥7 Hard.', rules: ['Count steps.', 'Count topics.', 'Check numbers.', 'Read the band.'] },
  mist: [['Judging by length of wording', 'Misjudged.', 'Count steps.'], ['Missing a hidden topic', 'Underestimated.', 'Re-read for second topic.'], ['Never calibrating', 'Rule drifts.', 'Compare with timings.']],
  tips: { sec: 10, elim: 'Hard questions are the first to skip.', adv: 'Tag difficulty on every mock question.', ins: 'The rule is a training aid.' },
  rev: ['Steps.', 'Topics.', 'Numbers.', 'Band.', 'Calibrate.'],
  qf: ['Score = steps + 2(topics − 1) + large'],
  take: ['Count.', 'Add.', 'Band.', 'Calibrate.'],
  self: ['Can I score a question?', 'Can I map to a time?', 'Can I spot a hidden topic?']
});
const items = [[1, 1, 0], [2, 1, 0], [1, 1, 1], [3, 1, 0], [2, 2, 0], [3, 1, 1], [3, 2, 0], [4, 1, 1], [4, 2, 0], [5, 1, 0], [3, 3, 0], [2, 2, 1], [5, 2, 0], [4, 2, 1], [6, 2, 0], [5, 3, 1], [7, 1, 0], [3, 3, 1], [4, 3, 0], [6, 3, 1]];
const q42 = items.map(([s, t, l], i) => {
  const sc = score(s, t, l);
  const txt = `A question needs ${s} step${s > 1 ? 's' : ''}, combines ${t} topic${t > 1 ? 's' : ''} and ${l ? 'has large or awkward numbers' : 'has ordinary numbers'}. By the scoring rule, its difficulty band is`;
  const bands = ['Easy', 'Medium', 'Hard'];
  const c = band(sc);
  const kind = i < 6 ? 'e' : i < 14 ? 'm' : 'p';
  if (i % 3 === 2) return T(kind, `${txt.replace('its difficulty band is', 'its difficulty score is')}`, String(sc), [String(sc + 1), String(sc - 1 < 0 ? sc + 2 : sc - 1), String(sc + 2)], `Score = ${s} + 2 × (${t} − 1) + ${l} = ${sc}.`);
  return T(kind, txt, c, bands.filter((b) => b !== c).concat(['Cannot be decided']), `Score = ${s} + 2 × (${t} − 1) + ${l} = ${sc}, which is ${c}.`);
});
build(ch42, q42.map((x, i) => (i < 6 ? require('../lib.cjs').easy : i < 14 ? require('../lib.cjs').medium : require('../lib.cjs').placement)(x.question, x.correct, x.wrongs, x.explanation)));

// ============ Chapter 43: skip or attempt decision framework ============
const ch43 = spec({ n: 43, id: 'y4-rec-skipping-vs-attempting', title: 'Skip or Attempt Decision Framework',
  tag: 'A five-question checklist for deciding in ten seconds whether to attempt, eliminate-and-guess, or skip',
  over: 'The decision to attempt or skip should be quick and rule-based. A five-question checklist works: (1) Do I recognise the type? (2) Is the estimated time within twice my pace? (3) Is my chance of being right above the break-even chance? (4) Can I eliminate options? (5) Is there a quicker question waiting? Each "no" pushes towards skipping; two or more "no" answers mean skip or guess by elimination. ' + NOTE,
  place: 'Disciplined skipping is the main difference between candidates of similar ability.',
  real: 'Saying no to low-value tasks is a time-management skill.',
  obj: ['Apply the five-question checklist', 'Compute break-even and compare with your chance', 'Decide between attempt, eliminate-and-guess and skip', 'Handle sectional and no-return rules', 'Review decisions after a mock'],
  pre: ['Difficulty Level Recognition', 'Negative Marking Strategy'],
  refresh: 'Break-even chance = penalty ÷ (marks + penalty). Skip threshold = twice your average pace.',
  defs: ['Checklist: a fixed list of questions asked of each question.', 'Attempt: solve fully.', 'Eliminate-and-guess: remove options and pick.', 'Skip: leave it (and return if allowed).', 'Break-even chance: the minimum worthwhile chance.'],
  intu: 'A fixed checklist removes emotion from the decision.',
  mental: 'Ask the five questions in ten seconds; count the "no" answers.',
  formulas: [['Break-even', 'n ÷ (m + n)', 'Penalty.', 'Threshold.', '20%'], ['Time test', 'Estimate ≤ 2 × pace', 'Time.', 'Check.', '≤ 160 s'], ['Expected value', 'pm − (1 − p)n', 'Guess.', 'Value.', '0.25'], ['Decision rule', '0–1 no: attempt; 2+ no: skip/guess', 'Checklist.', 'Rule.', '2 no'], ['After-mock review', 'Count wrong skips', 'Review.', 'Tune.', 'Weekly']],
  narr: ['A question you recognise, estimated at 100 seconds with a 75-second pace (threshold 150 s), with a 70% chance and penalty 0.25: attempt.', 'A question you do not recognise, estimated at 200 seconds, with chance 25% and elimination possible for two options: two or more "no" answers, so eliminate and guess or skip.', 'With break-even 20% and chance 15%, skip unless you can eliminate options to lift the chance.', 'Under no return, convert "skip" into "eliminate and answer" if there is no penalty.', 'After each mock, count questions you skipped that you could have solved, and tune.'],
  deep: [['Overconfidence', 'Check your actual accuracy on similar questions to calibrate p.'], ['Anxiety skips', 'Skipping because a question looks long, not because it is, loses easy marks; apply the checklist.']],
  vars: [['Recognise', 'Type known?', 'Yes'], ['Time', 'Within threshold?', '100 vs 150'], ['Chance', 'Above break-even?', '70% vs 20%'], ['Eliminate', 'Possible?', 'Two options'], ['Alternative', 'Quicker question?', 'Next one']],
  ex: [
    { t: 'Time test', q: 'Pace 75 s, estimate 100 s. Within the twice-pace threshold?', g: ['75', '100'], c: 'Compare.', s: [['Threshold', '2 × 75 = 150.'], ['Compare', '100 ≤ 150: yes.']], a: 'Yes', w: 'Attempt.', tr: 'Using pace.' },
    { t: 'Break-even', q: 'Marks 1, penalty 0.25. Your chance is 15%. Attempt blindly?', g: ['15%'], c: 'Compare.', s: [['Break-even', '20%.'], ['Compare', '15% < 20%.']], a: 'No, below break-even', w: 'Eliminate to raise it.', tr: 'Guessing anyway.' },
    { t: 'Decision', q: 'Two "no" answers in the checklist. What do you do?', g: ['2 no'], c: 'Rule.', s: [['Count', 'Two answers are no.'], ['Rule', '2+ no means skip or eliminate-and-guess.']], a: 'Skip or eliminate and guess', w: 'Do not solve fully.', tr: 'Attempting fully.' }
  ],
  short: { title: 'Five questions', trad: 'Gut feeling.', fast: 'Ask: recognise? time? chance? eliminate? quicker one waiting? Two or more "no" means skip or guess.', rules: ['Break-even first.', 'Time threshold.', 'Eliminate.', 'Review skips.'] },
  mist: [['Gut-feel skips', 'Missed marks.', 'Use the checklist.'], ['Attempting everything', 'Time lost.', 'Skip low-chance items.'], ['Not reviewing skips', 'No learning.', 'Review after mocks.']],
  tips: { sec: 10, elim: 'Eliminate before skipping.', adv: 'Practise the checklist on mock questions.', ins: 'A rule beats a mood.' },
  rev: ['Five questions.', 'Break-even.', 'Time.', 'Eliminate.', 'Review.'],
  qf: ['Break-even = n/(m + n)'],
  take: ['Checklist.', 'Thresholds.', 'Eliminate.', 'Review.'],
  self: ['Can I run the checklist?', 'Can I compute break-even?', 'Can I decide fast?']
});
const q43 = [
  N('e', 'The twice-pace skip threshold for a pace of 75 seconds is (seconds)', 150, '2 × 75 = 150.'),
  N('e', 'For marks 1 and penalty 0.25 the break-even chance (%) is', 20, '0.25 ÷ 1.25 = 20%.', 0, pc),
  T('e', 'Pace 75 s, estimated time 100 s: is the time test passed?', 'Yes', ['No', 'Only if the question is easy', 'Cannot be decided'], '100 ≤ 150.'),
  T('e', 'Pace 75 s, estimated time 200 s: is the time test passed?', 'No', ['Yes', 'Only with elimination', 'Cannot be decided'], '200 > 150.'),
  T('e', 'Chance 15% and break-even 20%: attempt blindly?', 'No', ['Yes', 'Only at night', 'Always'], '15% is below break-even.'),
  T('e', 'Chance 70% and break-even 20%: attempt?', 'Yes', ['No', 'Only if long', 'Skip'], '70% is above break-even.'),
  N('m', 'Expected marks with chance 0.7, marks 1, penalty 0.25 are', ev(0.7, 1, 0.25), '0.7 − 0.075 = 0.625.', 3),
  N('m', 'Expected marks with chance 0.15, marks 1, penalty 0.25 are (three decimals)', ev(0.15, 1, 0.25), '0.15 − 0.2125 = −0.0625.', 4),
  T('m', 'A checklist gives two "no" answers. The rule says', 'skip or eliminate and guess', ['attempt fully', 'abandon the test', 'ask the invigilator'], '2+ "no" answers mean do not solve fully.'),
  T('m', 'A checklist gives zero "no" answers. The rule says', 'attempt', ['skip', 'guess', 'flag only'], 'All five yes: attempt.'),
  N('m', 'With 2 options eliminated (chance 50%), marks 1, penalty 0.25, the expected marks are', ev(0.5, 1, 0.25), '0.5 − 0.125 = 0.375.', 3),
  T('m', 'Under no return and no penalty, a "skip" should become', 'eliminate and answer', ['leave blank', 'solve for 5 minutes', 'ignore'], 'A blank earns nothing and a guess costs nothing.'),
  N('m', 'A question needing 100 s with expected marks 0.625 has a rate per minute of (two decimals)', 0.625 / (100 / 60), '0.625 ÷ 1.667 = 0.375.', 3),
  N('m', 'A quicker question needing 45 s with expected marks 0.5 has a rate per minute of', 0.5 / 0.75, '0.5 ÷ 0.75 = 0.667.', 3),
  T('p', 'Between those two questions, which should be attempted first?', 'The 45-second question', ['The 100-second question', 'They are equal', 'Neither'], '0.667 beats 0.375 per minute.'),
  N('p', 'A candidate skipped 6 questions in a mock; 4 of them could have been solved in under 90 seconds. The percentage of skips that were wrong is', 4 / 6 * 100, '4 ÷ 6 = 66.7%.', 1, pc),
  T('p', 'A candidate who skips only because a question looks long should', 'estimate the steps before skipping', ['skip all long questions', 'attempt all long questions', 'guess at once'], 'Length is not difficulty; count the steps.'),
  N('p', 'Marks 4 and penalty 1: the break-even chance (%) is', 20, '1 ÷ 5 = 20%.', 0, pc),
  N('p', 'With chance 0.3, marks 4, penalty 1, the expected marks are', ev(0.3, 4, 1), '1.2 − 0.7 = 0.5.', 2),
  T('p', 'After a mock, the most useful review of skipped questions is to', 'check which could have been solved within the threshold', ['count how many you skipped only', 'forget them', 'redo only the hardest'], 'Review tunes your decision rule.')
];
build(ch43, q43);

// ============ Chapter 44: speed vs accuracy trade-off ============
const curve = [[60, 0.7], [75, 0.8], [90, 0.88], [120, 0.92]];
const total = 3600;
const res = curve.map(([p, a]) => ({ p, a, att: Math.floor(total / p), cor: Math.floor(total / p) * a }));
const net = (r, pen) => r.cor - (r.att - r.cor) * pen;
const ch44 = spec({ n: 44, id: 'y4-rec-speed-accuracy-tradeoff', title: 'Speed vs Accuracy Trade-off Mastery',
  tag: 'Finding the pace that maximises score when faster means less accurate, with and without negative marking',
  over: 'Going faster lets you attempt more questions but usually lowers accuracy; going slower raises accuracy but reduces attempts. The best pace is the one that maximises correct answers (minus penalties). If you measure your accuracy at several paces in mocks, you can compute the score for each and choose. This chapter uses a hypothetical accuracy table to teach the method: score = attempts × accuracy for no penalty, and attempts × (accuracy − penalty × (1 − accuracy)) with a penalty. ' + NOTE,
  place: 'Finding your own optimal pace is the most personal and most valuable strategic exercise.',
  real: 'Balancing speed and quality is a standard trade-off in professional work.',
  obj: ['Compute attempts at a given pace', 'Compute expected correct answers and net marks', 'Compare paces and choose the best', 'See how penalties shift the best pace', 'Measure your own accuracy at different paces'],
  pre: ['Accuracy Management Under Pressure', 'Performance Under Time Pressure'],
  refresh: 'Attempts = time ÷ pace. Correct = attempts × accuracy. Net = correct − penalty × wrong.',
  defs: ['Pace: seconds per question.', 'Accuracy curve: accuracy at each pace.', 'Net marks: marks after penalties.', 'Optimal pace: pace with the highest net marks.', 'Sensitivity: how much the result changes with pace.'],
  intu: 'The best pace balances two curves: more attempts and falling accuracy.',
  mental: 'For each pace compute attempts, correct and net; pick the highest.',
  formulas: [['Attempts', 'Time ÷ pace', 'Each pace.', 'Count.', '3,600 ÷ 75 = 48'], ['Correct', 'Attempts × accuracy', 'Each pace.', 'Marks.', '48 × 0.8'], ['Net', 'Correct − penalty × wrong', 'Penalty.', 'Score.', '38.4 − 2.4'], ['Compare', 'Highest net wins', 'Choice.', 'Decision.', '75 s'], ['Penalty effect', 'Higher penalty favours slower', 'Planning.', 'Shift.', '0.5 penalty']],
  narr: ['Hypothetical accuracy table (3,600 seconds available): 60 s gives 70% accuracy, 75 s gives 80%, 90 s gives 88%, 120 s gives 92%.', 'Attempts: 60, 48, 40, 30. Correct: 42, 38.4, 35.2, 27.6. With no penalty, 60 s is best (42).', 'With penalty 0.25: net = correct − 0.25 × wrong: 60 s: 42 − 4.5 = 37.5; 75 s: 38.4 − 2.4 = 36; 90 s: 35.2 − 1.2 = 34; 120 s: 27.6 − 0.6 = 27. Still 60 s is best.', 'With penalty 1 (very high): 60 s: 42 − 18 = 24; 75 s: 38.4 − 9.6 = 28.8; 90 s: 35.2 − 4.8 = 30.4; 120 s: 27.6 − 2.4 = 25.2: 90 s is best.', 'Measure your own accuracy curve on mocks before choosing a pace.'],
  deep: [['Plateau', 'Beyond a certain pace extra time barely raises accuracy.'], ['Question mix', 'Easy questions have a flatter curve; hard questions a steeper one.']],
  vars: [['Attempts', 'Time ÷ pace.', '60 at 60 s'], ['Correct', 'Attempts × accuracy.', '42'], ['Net', 'With penalty.', '37.5'], ['Best pace', 'Highest net.', '60 s'], ['High penalty', 'Shift.', '90 s']],
  ex: [
    { t: 'Attempts', q: '3,600 seconds at a pace of 75 s. Attempts?', g: ['3,600', '75'], c: 'Time ÷ pace.', s: [['Set up', 'Attempts = time ÷ pace.'], ['Divide', '3,600 ÷ 75 = 48.']], a: '48', w: 'Whole questions only.', tr: 'Using minutes.' },
    { t: 'Correct', q: '48 attempts at 80% accuracy. Correct answers?', g: ['48', '80%'], c: 'Multiply.', s: [['Convert', '80% = 0.8.'], ['Multiply', '48 × 0.8 = 38.4.']], a: '38.4', w: 'Expected value.', tr: 'Using 80.' },
    { t: 'Net', q: 'Correct 42 of 60 attempts, penalty 0.25. Net marks?', g: ['42', '18 wrong'], c: 'Subtract penalty.', s: [['Penalty', '18 × 0.25 = 4.5.'], ['Net', '42 − 4.5 = 37.5.']], a: '37.5', w: 'Penalty reduces the score.', tr: 'Ignoring it.' }
  ],
  short: { title: 'Table and compare', trad: 'Go as fast as possible.', fast: 'Tabulate attempts, correct and net for each pace; pick the best; recompute if the penalty changes.', rules: ['Attempts = time/pace.', 'Correct = attempts × accuracy.', 'Net with penalty.', 'Measure your curve.'] },
  mist: [['Assuming faster is better', 'Accuracy drops.', 'Compare net.'], ['Ignoring penalties', 'Wrong best.', 'Include them.'], ['Using someone else\'s curve', 'Wrong pace.', 'Measure your own.']],
  tips: { sec: 15, elim: 'Eliminate to raise accuracy at a fast pace.', adv: 'Run mocks at two paces and compare.', ins: 'The best pace is personal.' },
  rev: ['Attempts.', 'Correct.', 'Net.', 'Compare.', 'Penalty shift.'],
  qf: ['Net = correct − penalty × wrong'],
  take: ['Tabulate.', 'Compare net.', 'Include penalty.', 'Personalise.'],
  self: ['Can I compute attempts?', 'Can I compute net marks?', 'Can I choose a pace?']
});
const bestP = (pen) => res.reduce((b, r) => (net(r, pen) > net(b, pen) ? r : b)).p;
const q44 = [
  N('e', '3,600 seconds at 60 s per question give attempts of', res[0].att, '3,600 ÷ 60 = 60.'),
  N('e', '3,600 seconds at 75 s per question give attempts of', res[1].att, '3,600 ÷ 75 = 48.'),
  N('e', '3,600 seconds at 90 s per question give attempts of', res[2].att, '3,600 ÷ 90 = 40.'),
  N('e', '3,600 seconds at 120 s per question give attempts of', res[3].att, '3,600 ÷ 120 = 30.'),
  N('e', '60 attempts at 70% accuracy give correct answers of', res[0].cor, '60 × 0.7 = 42.'),
  N('e', '48 attempts at 80% accuracy give correct answers of', res[1].cor, '48 × 0.8 = 38.4.', 1),
  N('m', '40 attempts at 88% accuracy give correct answers of (one decimal)', res[2].cor, '40 × 0.88 = 35.2.', 1),
  N('m', '30 attempts at 92% accuracy give correct answers of (one decimal)', res[3].cor, '30 × 0.92 = 27.6.', 1),
  T('m', 'With no penalty, which pace gives the most correct answers?', '60 s', ['75 s', '90 s', '120 s'], 'Correct answers: 42, 38.4, 35.2, 27.6; the highest is 42 at 60 s.'),
  N('m', 'At 60 s with penalty 0.25, the net marks are (one decimal)', net(res[0], 0.25), '42 − 18 × 0.25 = 37.5.', 1),
  N('m', 'At 75 s with penalty 0.25, the net marks are (one decimal)', net(res[1], 0.25), '38.4 − 9.6 × 0.25 = 36.', 1),
  N('m', 'At 90 s with penalty 0.25, the net marks are (one decimal)', net(res[2], 0.25), '35.2 − 4.8 × 0.25 = 34.', 1),
  N('m', 'At 120 s with penalty 0.25, the net marks are (one decimal)', net(res[3], 0.25), '27.6 − 2.4 × 0.25 = 27.', 1),
  T('m', 'With penalty 0.25, the best pace is', `${bestP(0.25)} s`, ['75 s', '90 s', '120 s'].filter((x) => x !== `${bestP(0.25)} s`).concat(['40 s']).slice(0, 3), 'Net marks: 37.5, 36, 34, 27; the highest is at 60 s.'),
  N('p', 'At 60 s with penalty 1, the net marks are (one decimal)', net(res[0], 1), '42 − 18 = 24.', 1),
  N('p', 'At 90 s with penalty 1, the net marks are (one decimal)', net(res[2], 1), '35.2 − 4.8 = 30.4.', 1),
  N('p', 'At 75 s with penalty 1, the net marks are (one decimal)', net(res[1], 1), '38.4 − 9.6 = 28.8.', 1),
  T('p', 'With penalty 1, the best pace is', `${bestP(1)} s`, ['60 s', '75 s', '120 s'], 'Net marks at 60, 75, 90, 120 s: 24, 28.8, 30.4, 25.2; the highest is at 90 s.'),
  T('p', 'As the penalty grows, the best pace tends to become', 'slower', ['faster', 'unchanged', 'random'], 'Higher penalties reward accuracy over attempts.'),
  T('p', 'The most reliable way to find your own best pace is to', 'measure your accuracy at several paces on mocks', ['copy a friend\'s pace', 'always go fastest', 'always go slowest'], 'The curve is personal.')
];
build(ch44, q44);

// ============ Chapter 45: online proctoring compliance ============
const ch45 = spec({ n: 45, id: 'y4-rec-proctoring-compliance', title: 'Online Proctoring Compliance',
  tag: 'Following proctoring instructions: identity checks, camera and microphone, environment, devices and what to do when something goes wrong',
  over: 'Many online assessments are proctored: the test provider checks identity, may watch through the camera and screen, and records the session. The rules differ between employers and providers, so the only reliable guide is the official instructions. In general, compliance means: verify your identity as instructed, set up a quiet and tidy space, keep to the permitted devices and materials, stay in the camera frame if required, do not share or capture questions, and report technical problems through the official channel. Honesty and compliance protect you; violations can disqualify you. ' + NOTE,
  place: 'A technical or rule violation can end an attempt regardless of the score.',
  real: 'Following procedure in a regulated process is a professional expectation.',
  obj: ['Prepare identity documents and environment', 'Follow device and material rules', 'Behave in line with camera and screen rules', 'Handle technical problems correctly', 'Understand why integrity rules exist'],
  pre: ['Online Assessment Platforms', 'Platform-Specific Strategies'],
  refresh: 'When in doubt, follow the official instructions or ask the designated support channel before the test starts.',
  defs: ['Proctoring: supervision of a test, live or recorded.', 'Identity verification: showing that you are the candidate.', 'Permitted materials: items the instructions allow.', 'Violation: breaking a stated rule.', 'Support channel: the official way to report problems.'],
  intu: 'Proctoring is about trust; clear compliance protects your result.',
  mental: 'Before: read the rules, prepare ID and space. During: stay within rules. After a problem: stop and use the support channel.',
  formulas: [['Before', 'Rules, ID, space, device, power', 'Preparation.', 'Checklist.', 'Day before'], ['During', 'Stay in frame, no other tools', 'Test.', 'Behaviour.', 'As instructed'], ['Problem', 'Stop, note, report', 'Technical.', 'Procedure.', 'Support channel'], ['Integrity', 'Do not share questions', 'Always.', 'Principle.', 'Never'], ['Doubt', 'Ask before starting', 'Unclear rule.', 'Action.', 'Support']],
  narr: ['The day before: read the instructions, charge the device, check the network, prepare identity documents, and choose a quiet room.', 'On the day: log in early, complete identity checks as instructed, clear the desk of unauthorised items, and keep your face in the frame if the instructions require it.', 'If the connection drops: do not try to improvise. Reconnect if possible and report through the official support channel immediately, noting the time and the problem.', 'Do not photograph, copy or share questions: it is a violation and unfair to others.', 'If an instruction is unclear, ask the support channel before the test starts.'],
  deep: [['Why integrity rules exist', 'They make results fair for all candidates and keep tests usable for employers.'], ['Privacy', 'Read what the provider records and why; it is stated in the instructions.']],
  vars: [['Preparation', 'Checklist.', 'ID, device, room'], ['Behaviour', 'During the test.', 'In frame'], ['Technical problem', 'Report.', 'Support channel'], ['Integrity', 'No sharing.', 'Never'], ['Doubt', 'Ask first.', 'Before the test']],
  ex: [
    { t: 'Preparation', q: 'What should you do the day before a proctored test?', g: ['Proctored'], c: 'Checklist.', s: [['Read', 'The official instructions.'], ['Prepare', 'ID, charged device, network, quiet room.']], a: 'Read the rules and prepare ID, device, network and room', w: 'Avoid surprises.', tr: 'Leaving it to the day.' },
    { t: 'Problem', q: 'The connection drops mid-test. What is the right action?', g: ['Technical issue'], c: 'Procedure.', s: [['Step 1', 'Try to reconnect.'], ['Step 2', 'Report through the official support channel with the time.']], a: 'Reconnect if possible and report through the official support channel', w: 'Do not improvise.', tr: 'Ignoring it.' },
    { t: 'Integrity', q: 'May you photograph a question to discuss later?', g: ['Question capture'], c: 'Rule.', s: [['Check the rule', 'Capturing questions is not permitted.'], ['Result', 'It is a violation, so the answer is no.']], a: 'No', w: 'It is unfair and can disqualify.', tr: 'Assuming it is harmless.' }
  ],
  short: { title: 'Prepare, comply, report', trad: 'Improvise on the day.', fast: 'Read the rules, prepare ID and space, follow them during the test, and report problems through the official channel.', rules: ['Official rules.', 'Stay in frame.', 'No sharing.', 'Report problems.'] },
  mist: [['Not reading the rules', 'Violation.', 'Read them fully.'], ['Using an unpermitted item', 'Disqualification risk.', 'Keep the desk clear.'], ['Improvising on a technical issue', 'Worse outcome.', 'Use the support channel.']],
  tips: { sec: 5, elim: 'N/A: integrity beats speed.', adv: 'Do a trial run with the official demo.', ins: 'Honest compliance protects your result.' },
  rev: ['Prepare.', 'Rules.', 'Frame.', 'Report.', 'Integrity.'],
  qf: ['Rules first'],
  take: ['Read rules.', 'Prepare.', 'Comply.', 'Report.'],
  self: ['Can I prepare for a proctored test?', 'Can I handle a technical problem?', 'Can I explain why rules exist?']
});
const q45 = [
  T('e', 'The most reliable source for the proctoring rules of a test is', 'the official instructions from the employer or provider', ['a friend\'s account', 'a forum post', 'last year\'s rules'], 'Rules differ and change.'),
  T('e', 'Before a proctored test you should', 'read the rules and prepare ID, device, network and room', ['wait until the test starts', 'borrow an unfamiliar device', 'skip the identity check'], 'Preparation avoids avoidable problems.'),
  T('e', 'If the instructions say to keep your face in the camera frame, you should', 'stay in frame throughout', ['move away when thinking', 'cover the camera', 'switch the camera off'], 'Follow the stated rule.'),
  T('e', 'May you photograph test questions to share later?', 'No, it is a violation', ['Yes, if no one sees', 'Yes, after the test', 'Only the easy ones'], 'Capturing or sharing questions is not allowed.'),
  T('e', 'If your internet connection drops during the test, you should', 'try to reconnect and report through the official support channel', ['ignore it', 'ask a friend to log in', 'restart the whole device without telling anyone'], 'Use the official procedure.'),
  T('e', 'Items on your desk during the test should be', 'only those the instructions permit', ['anything useful', 'a phone for backup', 'notes you wrote'], 'Unpermitted items risk violations.'),
  T('m', 'If an instruction is unclear, you should', 'ask the support channel before the test starts', ['guess what it means', 'ignore it', 'ask another candidate during the test'], 'Clarify before starting.'),
  T('m', 'Why do integrity rules exist?', 'To keep results fair for all candidates', ['To make tests harder', 'To save time', 'To confuse candidates'], 'Fairness protects every candidate.'),
  T('m', 'Identity verification is done to confirm that', 'the person taking the test is the registered candidate', ['the device is expensive', 'the room is large', 'the questions are easy'], 'It confirms who is taking the test.'),
  T('m', 'A noisy environment during a proctored test is best handled by', 'choosing a quiet room beforehand', ['ignoring the noise', 'asking others to be loud', 'leaving the frame'], 'Prepare the space in advance.'),
  T('m', 'If someone enters the room during the test, you should', 'follow the instructions and report if required, without leaving the frame improperly', ['talk with them at length', 'pass them the questions', 'switch off the camera'], 'Keep within the rules and use the official channel.'),
  T('m', 'Logging in early on the test day helps because it', 'leaves time for identity and system checks', ['gives extra test time', 'shows the questions', 'raises your score'], 'Early login absorbs setup delays.'),
  T('m', 'Which action is a rule violation?', 'Using unpermitted notes during the test', ['Reading the instructions', 'Using the permitted rough sheet', 'Asking support about a rule'], 'Unpermitted materials break the rules.'),
  T('m', 'Rough work on paper is allowed only if', 'the instructions permit it', ['you decide it is fine', 'a friend says so', 'it is dark'], 'Follow the stated rules.'),
  T('p', 'A technical problem occurs. What should you note for the support request?', 'The time and what happened', ['Nothing', 'The answers to questions', 'Other candidates\' names'], 'Time and symptom help support resolve the issue.'),
  T('p', 'A candidate sees a question and posts it online to ask for help during the test. This is', 'a serious integrity violation', ['good teamwork', 'allowed if anonymous', 'harmless'], 'Sharing questions during a test is a violation.'),
  T('p', 'The best practice for a trial run is to', 'use the official demo with the same device and network', ['use a different device', 'skip it', 'practise only on paper'], 'A trial run reveals problems early.'),
  T('p', 'If the test requires the microphone, you should', 'allow it as instructed and keep the room quiet', ['mute and hide it', 'cover it', 'ignore the rule'], 'Comply with stated requirements.'),
  T('p', 'After a rule violation is alleged, the best response is to', 'be honest and follow the official process', ['hide evidence', 'argue with other candidates', 'delete messages'], 'Honest cooperation is the right course.'),
  T('p', 'Honest compliance with proctoring rules mainly protects', 'your own result and the fairness of the test', ['only the provider', 'only the employer', 'nobody'], 'It protects you and every other candidate.')
];
build(ch45, q45);
