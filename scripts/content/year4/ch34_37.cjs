const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, inr, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'strat', category: 'Placement Strategy & Shortcuts' };
const spec = (o) => C({ ...base, ...o });
const ev = (p, m, n) => p * m - (1 - p) * n;

// ============ Chapter 34: accuracy management ============
const ch34 = spec({ n: 34, id: 'y4-strat-accuracy-mgmt', title: 'Accuracy Management Under Pressure',
  tag: 'Keeping accuracy high at speed: error types, quick checks, and the trade-off between attempts and accuracy',
  over: 'Score equals correct answers, and correct answers equal attempts times accuracy. Raising attempts by 10% while accuracy falls by 10% lowers your score. Accuracy under pressure is protected by recognising your typical error types (misreading, arithmetic slip, wrong formula, wrong option marked) and by cheap checks: re-reading the question stem, checking units, and a last-digit test. The aim is the point where an extra check costs less than the errors it prevents.',
  place: 'Negative marking and sectional cutoffs make accuracy as important as speed.',
  real: 'Error-checking habits matter in any accuracy-critical work.',
  obj: ['Compute accuracy and score from attempts', 'Classify your own error types', 'Use cheap checks (units, stem, last digit)', 'Evaluate the attempts–accuracy trade-off', 'Set a checking budget'],
  pre: ['Strategic Question Selection', 'Time Triage and Question Selection'],
  refresh: 'Accuracy = correct ÷ attempted. Score = correct (− penalty × wrong).',
  defs: ['Accuracy: correct as a share of attempted.', 'Misreading error: answering a different question.', 'Slip: arithmetic mistake.', 'Marking error: the right answer, wrong option.', 'Check budget: seconds per question for verification.'],
  intu: 'A wrong answer costs the marks plus the time it took; prevention is cheaper.',
  mental: 'Read the stem twice, write only what you need, check units and last digit, mark the option carefully.',
  formulas: [['Accuracy', 'Correct ÷ attempted', 'Review.', 'Quality.', '24 ÷ 28 = 85.7%'], ['Score', 'Attempted × accuracy', 'Planning.', 'Marks.', '28 × 0.857'], ['Trade-off', 'More attempts vs lower accuracy', 'Planning.', 'Decision.', '30 × 0.75 vs 26 × 0.9'], ['Check value', 'Errors prevented × marks − check time', 'Planning.', 'Decision.', 'Worth if positive'], ['Error rate', 'Wrong ÷ attempted', 'Review.', 'Diagnose.', '4 ÷ 28']],
  narr: ['A candidate attempts 28 and gets 24 right: accuracy 85.7%. Another attempts 32 with 75% accuracy and gets 24 right: the same score, but more risk with negative marking.', 'If the penalty is 0.25 per wrong, the first scores 24 − 1 = 23 and the second 24 − 2 = 22.', 'A 10-second check on each question that prevents 1 error in 20 saves 0.05 × (1 + 0.25) marks, about 0.06 per question; whether it is worth it depends on the time value.', 'Classify errors after each mock: misreads, slips, formula errors and marking errors need different fixes.', 'A quick last-digit check catches many slips for a few seconds.'],
  deep: [['Accuracy targets', 'Many aspirants aim for 85–90% accuracy on attempted questions; set your own from your mocks.'], ['Pressure effect', 'Errors cluster late in a section; double-check marking near the end.']],
  vars: [['Accuracy', 'Percent.', '85.7%'], ['Score with penalty', 'Marks.', '23'], ['Trade-off', 'Attempts vs accuracy.', '30 × 0.75'], ['Check value', 'Cost-benefit.', '0.06 marks'], ['Error types', 'Diagnose.', 'Misread, slip']],
  ex: [
    { t: 'Accuracy', q: '28 attempted, 24 correct. Accuracy?', g: ['28', '24'], c: 'Correct over attempted.', s: [['Divide', '24 ÷ 28 = 0.857.'], ['Percent', '85.7%.']], a: '85.7%', w: 'Base is attempted.', tr: 'Dividing by 30.' },
    { t: 'Trade-off', q: 'A: 26 attempts at 90% accuracy. B: 32 attempts at 75%. Which has more correct answers?', g: ['26, 90%', '32, 75%'], c: 'Attempts × accuracy.', s: [['A', '26 × 0.9 = 23.4.'], ['B', '32 × 0.75 = 24.']], a: 'B has slightly more correct answers', w: 'With penalties A may win.', tr: 'Comparing attempts only.' },
    { t: 'Penalty', q: 'B (32 attempts, 24 correct, 8 wrong) with penalty 0.25. Score?', g: ['24', '8'], c: 'Marks minus penalty.', s: [['Penalty', '8 × 0.25 = 2.'], ['Score', '24 − 2 = 22.']], a: '22', w: 'Accuracy matters with penalties.', tr: 'Ignoring the penalty.' }
  ],
  short: { title: 'Cheap checks', trad: 'Rush and hope.', fast: 'Read the stem twice, check units and last digit, and mark options carefully; track error types after each mock.', rules: ['Stem twice.', 'Units.', 'Last digit.', 'Log errors.'] },
  mist: [['Chasing attempts only', 'Accuracy falls.', 'Balance both.'], ['Not logging errors', 'Same errors repeat.', 'Classify after each mock.'], ['Marking too fast', 'Right answer lost.', 'Check the option letter.']],
  tips: { sec: 10, elim: 'Eliminate to protect accuracy.', adv: 'Review marking near the end.', ins: 'A habit of two quick checks beats a habit of re-solving.' },
  rev: ['Accuracy.', 'Score.', 'Trade-off.', 'Checks.', 'Error log.'],
  qf: ['Score = attempts × accuracy'],
  take: ['Balance.', 'Checks.', 'Log.', 'Mark carefully.'],
  self: ['Can I compute accuracy?', 'Can I compare strategies?', 'Can I classify errors?']
});
const q34 = [
  N('e', '28 questions attempted with 24 correct give an accuracy of', 24 / 28 * 100, '24 ÷ 28 = 85.7%.', 1, pc),
  N('e', '30 attempted with 27 correct give an accuracy of', 27 / 30 * 100, '27 ÷ 30 = 90%.', 0, pc),
  N('e', '24 correct and 8 wrong give an error rate on attempted questions of', 8 / 32 * 100, '8 ÷ 32 = 25%.', 0, pc),
  N('e', '26 attempted at 90% accuracy gives correct answers (to one decimal)', 26 * 0.9, '26 × 0.9 = 23.4.', 1),
  N('e', '32 attempted at 75% accuracy gives correct answers', 32 * 0.75, '32 × 0.75 = 24.'),
  N('e', '24 correct and 8 wrong with a 0.25 penalty give a score of', 24 - 8 * 0.25, '24 − 2 = 22.'),
  N('m', '26 attempts at 90% accuracy with penalty 0.25 per wrong: the score (to two decimals) is', 23.4 - 2.6 * 0.25, 'Correct 23.4, wrong 2.6: 23.4 − 0.65 = 22.75.', 2),
  N('m', 'With 32 attempts at 75% accuracy and penalty 0.25, the score is', 24 - 8 * 0.25, '24 − 2 = 22.'),
  N('m', 'An extra check prevents 1 error in 20 questions. The marks saved per question with penalty 0.25 (two decimals) are', (1 / 20) * (1 + 0.25), '0.05 × 1.25 = 0.06 (0.0625).', 2),
  N('m', 'A candidate makes 4 misread errors, 3 slips and 1 marking error. The share of errors that are slips (%) is', 3 / 8 * 100, '3 ÷ 8 = 37.5%.', 1, pc),
  N('m', 'To raise accuracy from 80% to 90% on 30 attempts, the additional correct answers needed are', 30 * 0.1, '30 × 0.1 = 3.'),
  N('m', '35 attempted with 28 correct: accuracy is', 28 / 35 * 100, '28 ÷ 35 = 80%.', 0, pc),
  N('m', 'With 35 attempted, 28 correct and penalty 0.25, the score is', 28 - 7 * 0.25, '28 − 1.75 = 26.25.', 2),
  N('m', 'A 5-second check on each of 30 questions costs how many seconds?', 150, '5 × 30 = 150 seconds.'),
  N('p', 'If the check in the previous question prevents 2 errors (penalty 0.25), the marks saved are', 2 * 1.25, '2 × 1.25 = 2.5.', 2),
  N('p', 'The 150 seconds spent on checking could instead attempt about how many 75-second questions?', 150 / 75, '150 ÷ 75 = 2.'),
  T('p', 'Which is better with penalty 0.25: 34 attempts at 70% or 28 attempts at 90%?', '28 attempts at 90%', ['34 attempts at 70%', 'They are equal', 'Cannot be compared'], 'First: 23.8 correct, 10.2 wrong → 23.8 − 2.55 = 21.25. Second: 25.2 correct, 2.8 wrong → 25.2 − 0.7 = 24.5.'),
  N('p', 'With 100 attempts at a constant accuracy of 85% and penalty 0.25 the score is', 85 - 15 * 0.25, '85 − 3.75 = 81.25.', 2),
  N('p', 'Raising accuracy from 85% to 90% on 100 attempts (penalty 0.25) raises the score by', (90 - 10 * 0.25) - (85 - 15 * 0.25), 'Scores 87.5 and 81.25; difference 6.25.', 2),
  T('p', 'The best first step after a mock test to improve accuracy is to', 'classify each wrong answer by error type', ['attempt more questions', 'ignore the wrong answers', 'memorise the options'], 'Different error types need different fixes.')
];
build(ch34, q34);

// ============ Chapter 35: negative marking strategy ============
const ch35 = spec({ n: 35, id: 'y4-strat-negative-marking', title: 'Negative Marking Strategy',
  tag: 'When a guess pays: expected value with penalties of 1/4, 1/3 and 1/2, and the effect of eliminating options',
  over: 'Negative marking changes guessing from free to costly. With four options and a penalty of one quarter mark, a blind guess has an expected value of zero; with a penalty of one third it is worse, and with a penalty of one half it is clearly bad. Eliminating options changes this: after removing two options a guess has a 50% chance and a positive expected value. The strategy follows directly: guess only if you can eliminate options or your chance of being right is above the break-even chance.',
  place: 'Many tests deduct marks for wrong answers; correct handling of this rule affects the score significantly.',
  real: 'Weighing a risky bet against its penalty is the same logic.',
  obj: ['Compute the expected value of a guess', 'Find the break-even chance for any penalty', 'Use elimination to raise the chance', 'Decide to attempt or leave', 'Handle unequal marks and penalties'],
  pre: ['Strategic Question Selection', 'Accuracy Management Under Pressure'],
  refresh: 'Break-even chance = penalty ÷ (marks + penalty).',
  defs: ['Penalty: marks deducted for a wrong answer.', 'Blind guess: a guess without elimination.', 'Break-even chance: where expected marks are zero.', 'Expected value: average marks from a choice.', 'Elimination: removing options you know are wrong.'],
  intu: 'Guess only when the odds are better than the penalty demands.',
  mental: 'Count remaining options k. Chance = 1/k. Compare with the break-even chance n/(m + n).',
  formulas: [['Expected value', 'p·m − (1 − p)·n', 'Guess.', 'Value.', '¼ − ¾ × ¼'], ['Break-even', 'n ÷ (m + n)', 'Threshold.', 'Rule.', '0.25/1.25 = 20%'], ['Options left', 'p = 1/k', 'After elimination.', 'Chance.', 'k = 2 → 50%'], ['Fair penalty', 'n = m ÷ (k − 1)', 'k options.', 'Zero value.', '4 options: 1/3'], ['Unequal marks', 'Use actual m and n', 'Differential scoring.', 'General.', 'Marks 4, penalty 1']],
  narr: ['Four options, 1 mark, penalty 0.25: blind guess E = 0.25 × 1 − 0.75 × 0.25 = 0.0625, almost zero. With penalty 1/3 the blind guess has E = 0.25 − 0.25 = 0.', 'With penalty 0.5 a blind guess has E = 0.25 − 0.375 = −0.125.', 'Remove two options: chance 0.5; with penalty 0.25, E = 0.5 − 0.125 = 0.375, clearly positive.', 'Break-even chance with penalty 0.25 is 0.25 ÷ 1.25 = 20%; with penalty 1/3 it is 25%; with penalty 0.5 it is 33.3%.', 'If a section has no negative marking, always answer every question.'],
  deep: [['Fair penalty', 'With k options, a penalty of 1/(k − 1) makes blind guessing exactly fair.'], ['Information beats luck', 'A single eliminated option raises the chance from 25% to 33%.']],
  vars: [['Blind guess', 'EV.', '0.0625'], ['Break-even', 'Threshold.', '20%'], ['Elimination', 'Raise p.', '50%'], ['Penalty change', '1/3, 1/2.', 'Negative'], ['Unequal marks', 'General.', '4, 1']],
  ex: [
    { t: 'Blind guess', q: 'Four options, 1 mark, penalty 0.25. EV of a blind guess?', g: ['p = 0.25'], c: 'pm − (1 − p)n.', s: [['Gain', '0.25 × 1 = 0.25.'], ['Loss', '0.75 × 0.25 = 0.1875; EV = 0.0625.']], a: '0.0625', w: 'Almost zero.', tr: 'Calling it large.' },
    { t: 'Elimination', q: 'Two options eliminated, penalty 0.25, 1 mark. EV of guessing?', g: ['p = 0.5'], c: 'Recompute.', s: [['Gain', '0.5.'], ['Loss', '0.5 × 0.25 = 0.125; EV = 0.375.']], a: '0.375', w: 'Worth guessing.', tr: 'Skipping.' },
    { t: 'Break-even', q: 'Marks 1, penalty 1/3. Break-even chance?', g: ['n = 1/3'], c: 'n ÷ (m + n).', s: [['Formula', '(1/3) ÷ (4/3).'], ['Result', '25%.']], a: '25%', w: 'Blind guess among four is exactly break-even.', tr: 'Taking 33%.' }
  ],
  short: { title: 'Odds vs penalty', trad: 'Guess when unsure.', fast: 'Count options left, compare 1/k with n/(m + n), and guess only if the odds are better.', rules: ['Break-even n/(m + n).', 'Eliminate first.', 'No penalty: answer all.', '1/(k − 1) is fair.'] },
  mist: [['Guessing blindly with a high penalty', 'Negative EV.', 'Eliminate first.'], ['Never guessing', 'Missed positive EV.', 'Guess after eliminating.'], ['Ignoring unequal marks', 'Wrong threshold.', 'Use actual m and n.']],
  tips: { sec: 10, elim: 'Eliminate first.', adv: 'Read the penalty rule in the instructions.', ins: 'Penalty rules differ between tests; always check.' },
  rev: ['EV.', 'Break-even.', 'Elimination.', 'Fair penalty.', 'No penalty.'],
  qf: ['Break-even = n/(m + n)'],
  take: ['Odds.', 'Eliminate.', 'Read rules.', 'Compute.'],
  self: ['Can I compute EV?', 'Can I find break-even?', 'Can I decide to guess?']
});
const q35 = [
  N('e', 'Four options, 1 mark, penalty ¼. The expected value of a blind guess is', ev(0.25, 1, 0.25), '0.25 − 0.1875 = 0.0625.', 4),
  N('e', 'Four options, 1 mark, penalty ⅓. The expected value of a blind guess (two decimals) is', ev(0.25, 1, 1 / 3), '0.25 − 0.75 × 0.333 = 0.', 2),
  N('e', 'Four options, 1 mark, penalty ½. The expected value of a blind guess is', ev(0.25, 1, 0.5), '0.25 − 0.375 = −0.125.', 3),
  N('e', 'With 2 options eliminated, penalty ¼, 1 mark, the expected value of guessing is', ev(0.5, 1, 0.25), '0.5 − 0.125 = 0.375.', 3),
  N('e', 'With 1 option eliminated, the chance of a correct guess (%) is', 100 / 3, '1 ÷ 3 = 33.3%.', 1, pc),
  N('e', 'The break-even chance for marks 1 and penalty ¼ (%) is', 20, '0.25 ÷ 1.25 = 20%.', 0, pc),
  N('m', 'With 1 option eliminated, penalty ¼, 1 mark, the expected value of guessing (three decimals) is', ev(1 / 3, 1, 0.25), '0.333 − 0.667 × 0.25 = 0.167.', 3),
  N('m', 'The break-even chance for marks 1 and penalty ⅓ (%) is', 25, '(1/3) ÷ (4/3) = 25%.', 0, pc),
  N('m', 'The break-even chance for marks 1 and penalty ½ (%, one decimal) is', 100 / 3, '0.5 ÷ 1.5 = 33.3%.', 1, pc),
  N('m', 'Marks 4 and penalty 1: the break-even chance (%) is', 20, '1 ÷ 5 = 20%.', 0, pc),
  N('m', 'Marks 4, penalty 1, four options: the expected value of a blind guess is', ev(0.25, 4, 1), '1 − 0.75 = 0.25.', 2),
  N('m', 'With four options, the penalty that makes blind guessing exactly fair (as a fraction value, two decimals) for 1 mark is', 1 / 3, '1 ÷ (4 − 1) = 0.33.', 2),
  N('m', 'With five options, the fair penalty for 1 mark is', 0.25, '1 ÷ (5 − 1) = 0.25.', 2),
  N('m', 'A section has 10 questions you cannot solve. Blindly guessing all (four options, penalty ¼) gives an expected score of', 10 * ev(0.25, 1, 0.25), '10 × 0.0625 = 0.625.', 3),
  N('p', 'If you eliminate 2 options in each of those 10 questions, the expected score is', 10 * ev(0.5, 1, 0.25), '10 × 0.375 = 3.75.', 2),
  N('p', 'With penalty ½ and 2 options eliminated, the expected value of a guess is', ev(0.5, 1, 0.5), '0.5 − 0.25 = 0.25.', 2),
  N('p', 'With penalty ½ and 1 option eliminated (p = ⅓), the expected value is (two decimals)', ev(1 / 3, 1, 0.5), '0.333 − 0.333 = 0.', 2),
  T('p', 'With penalty ⅓, one option eliminated and four options originally, should you guess?', 'Yes, a small positive expected value', ['No, it is negative', 'It is exactly zero', 'Cannot be determined'], 'p = ⅓, E = ⅓ − ⅔ × ⅓ = 0.111 > 0.'),
  N('p', 'If there is no negative marking, the expected value of a blind guess among four options is', 0.25, '0.25 × 1 = 0.25.', 2),
  N('p', 'With marks 2 and penalty 0.5, the break-even chance (%) is', 20, '0.5 ÷ 2.5 = 20%.', 0, pc)
];
build(ch35, q35);

// ============ Chapter 36: performance under time pressure ============
const ch36 = spec({ n: 36, id: 'y4-strat-time-pressure', title: 'Performance Under Time Pressure',
  tag: 'Pacing tables, checkpoints, recovery from a bad stretch and the effect of rushing on accuracy',
  over: 'Time pressure changes behaviour: people rush, skip checks and make more errors. The best defence is a plan made before the test: a pacing table with checkpoints, a rule for leaving stuck questions, and a short reset routine for when you notice panic. With these in place, a bad five minutes does not become a bad section. This chapter works through the arithmetic of pacing and the logic of recovery.',
  place: 'Timed sectional tests make pacing and composure decisive.',
  real: 'Working to deadlines uses the same plans and recovery habits.',
  obj: ['Build a pacing table with checkpoints', 'Compute time per question after a slow start', 'Use a leave-and-return rule', 'Use a short reset routine', 'Estimate the score impact of rushing'],
  pre: ['Time Triage and Question Selection', 'Accuracy Management Under Pressure'],
  refresh: 'Required pace = time left ÷ questions left.',
  defs: ['Pacing table: planned progress at set times.', 'Checkpoint: a time at which you compare progress with the table.', 'Reset: a deliberate pause to regain focus.', 'Recovery: returning to plan after a slow stretch.', 'Rush penalty: accuracy lost by hurrying.'],
  intu: 'Pressure is felt when you do not know where you stand; a table tells you.',
  mental: 'At each checkpoint compute required pace; if behind, skip harder questions rather than rushing all.',
  formulas: [['Required pace', 'Time left ÷ questions left', 'Any time.', 'Control.', '900 ÷ 8'], ['Checkpoint', 'Done by t = t ÷ planned pace', 'Plan.', 'Table.', '10 min ÷ 80 s'], ['Catch-up', 'Skip q questions to regain pace', 'Behind plan.', 'Recovery.', 'Skip 2'], ['Rush cost', 'Accuracy drop × attempts', 'Planning.', 'Cost.', '10% × 30'], ['Reset', '10–20 seconds', 'Panic.', 'Routine.', 'Pause and breathe']],
  narr: ['Plan: 30 questions in 45 minutes (90 s each). Checkpoints: after 15 minutes, 10 questions; after 30 minutes, 20 questions.', 'If after 15 minutes only 8 are done, 30 minutes remain for 22 questions: 82 seconds each, below plan. Skip two of the hardest to return to a 90-second pace.', 'If you rush all remaining questions and lose 10% accuracy, you give up about 2 correct answers out of 20.', 'A reset routine: stop, take one slow breath, re-read the stem, then go on; it takes ten seconds.', 'Leave stuck questions at about twice the average time.'],
  deep: [['Front-loading', 'It is better to be slightly ahead of plan early; late catch-up is harder.'], ['Do not re-plan every minute', 'Check at checkpoints only.']],
  vars: [['Pacing table', 'Checkpoints.', '15 and 30 min'], ['Required pace', 'Time left per question.', '82 s'], ['Catch-up', 'Skip.', '2 questions'], ['Rush cost', 'Accuracy.', '2 answers'], ['Reset', 'Routine.', '10 seconds']],
  ex: [
    { t: 'Required pace', q: '30 minutes left for 22 questions. Required pace?', g: ['1,800 s', '22'], c: 'Time ÷ questions.', s: [['Convert', '30 minutes = 1,800 seconds.'], ['Divide', '1,800 ÷ 22 = 81.8 s.']], a: '82 seconds', w: 'Below the 90-second plan.', tr: 'Dividing minutes.' },
    { t: 'Catch-up', q: 'To return to a 90-second pace with 1,800 seconds left, how many questions can you attempt?', g: ['1,800 s'], c: 'Time ÷ pace.', s: [['Divide', '1,800 ÷ 90 = 20.'], ['Skip', '22 − 20 = 2.']], a: '20 questions, skipping 2', w: 'Skip the hardest.', tr: 'Rushing all.' },
    { t: 'Rush cost', q: 'Rushing 20 questions lowers accuracy by 10 points. Correct answers lost?', g: ['20', '10%'], c: 'Product.', s: [['Convert', '10 points = 0.1.'], ['Compute', '20 × 0.1 = 2.']], a: '2 correct answers', w: 'The cost of panic.', tr: 'Ignoring accuracy.' }
  ],
  short: { title: 'Table, checkpoint, skip', trad: 'Hurry when behind.', fast: 'Compute required pace at checkpoints and skip the hardest questions instead of rushing all.', rules: ['Pacing table.', 'Checkpoints only.', 'Skip the hardest.', 'Reset in ten seconds.'] },
  mist: [['Rushing everything', 'Accuracy falls.', 'Skip selectively.'], ['Checking the clock constantly', 'Distracting.', 'Use checkpoints.'], ['No plan', 'Panic.', 'Make the table first.']],
  tips: { sec: 5, elim: 'Eliminate quickly when behind.', adv: 'Practise with a visible timer.', ins: 'A plan is a calm in advance.' },
  rev: ['Table.', 'Pace.', 'Skip.', 'Reset.', 'Rush cost.'],
  qf: ['Pace = time left ÷ questions left'],
  take: ['Plan.', 'Checkpoints.', 'Skip.', 'Reset.'],
  self: ['Can I compute required pace?', 'Can I decide what to skip?', 'Can I reset quickly?']
});
const q36 = [
  N('e', 'A section of 30 questions in 45 minutes has a planned pace of (seconds per question)', 90, '2,700 ÷ 30 = 90.'),
  N('e', 'At the planned pace, the number of questions done in 15 minutes is', 10, '900 ÷ 90 = 10.'),
  N('e', 'At the planned pace, the number of questions done in 30 minutes is', 20, '1,800 ÷ 90 = 20.'),
  N('e', 'After 15 minutes only 8 questions are done. The questions left are', 22, '30 − 8 = 22.'),
  N('e', 'The minutes left at that point are', 30, '45 − 15 = 30.'),
  N('e', '30 minutes left for 22 questions give a required pace of (seconds, nearest whole number)', 1800 / 22, '1,800 ÷ 22 = 81.8, about 82.'),
  N('m', 'To return to a 90-second pace with 1,800 seconds left, the number of questions to attempt is', 20, '1,800 ÷ 90 = 20.'),
  N('m', 'The number of questions to skip from the 22 left is', 2, '22 − 20 = 2.'),
  N('m', 'Rushing 20 questions lowers accuracy by 10 percentage points. The correct answers lost are', 2, '20 × 0.1 = 2.'),
  N('m', 'A reset routine takes 10 seconds. Using it 3 times costs (seconds)', 30, '3 × 10 = 30.'),
  N('m', 'If a question exceeds twice the average of 80 seconds, the limit in seconds is', 160, '2 × 80 = 160.'),
  N('m', 'A section of 40 questions in 50 minutes has a pace of (seconds)', 3000 / 40, '3,000 ÷ 40 = 75.'),
  N('m', 'After 25 minutes of that section, the questions that should be done are about', 1500 / 75, '1,500 ÷ 75 = 20.'),
  N('m', 'If 14 are done at that point, the questions behind plan are', 20 - 14, '20 − 14 = 6.'),
  N('p', 'With 25 minutes left and 26 questions left, the required pace (seconds, one decimal) is', 1500 / 26, '1,500 ÷ 26 = 57.7.', 1),
  N('p', 'At a realistic 75-second pace, the questions attempted in 25 minutes are', 1500 / 75, '1,500 ÷ 75 = 20.'),
  N('p', 'So the number of questions to leave in that case is', 26 - 20, '26 − 20 = 6.'),
  N('p', 'If each of those 20 questions has 85% accuracy, the expected correct answers are', 20 * 0.85, '20 × 0.85 = 17.'),
  N('p', 'If rushing all 26 questions drops accuracy to 60%, the expected correct answers (one decimal) are', 26 * 0.6, '26 × 0.6 = 15.6.', 1),
  T('p', 'In the case above, which approach gives more expected correct answers?', 'Attempting 20 carefully', ['Rushing all 26', 'They are equal', 'Cannot be compared'], '17 correct against 15.6.')
];
build(ch36, q36);

// ============ Chapter 37: recruiter and assessment patterns ============
const ch37 = spec({ n: 37, id: 'y4-strat-recruiter-patterns', title: 'Recruiter and Assessment Patterns',
  tag: 'Reading an official assessment notice and turning it into a plan: sections, time, marks, penalties and cutoffs',
  over: 'Every assessment has a pattern: the sections, the number of questions, the time allowed, whether time is per section or overall, the marks and the penalty. These details change from company to company and from year to year, so this chapter gives no company-specific figures. It teaches how to read an official notice, extract the pattern into a one-page plan, and compute what it implies: time per question, marks per minute, the attempts needed to meet a stated cutoff, and the effect of the penalty rule.',
  place: 'Knowing the exact pattern lets you plan pacing and selection instead of guessing.',
  real: 'Reading terms, rules and specifications before starting work is a professional habit.',
  obj: ['Extract a pattern from an official notice', 'Compute time per question for each section', 'Compute marks needed for a stated cutoff', 'Reflect the penalty rule in strategy', 'Identify what to confirm with the recruiter'],
  pre: ['Negative Marking Strategy', 'Time Triage and Question Selection'],
  refresh: 'Time per question = section time ÷ questions. Marks needed = cutoff percentage × total marks.',
  defs: ['Pattern: the structure of an assessment.', 'Sectional timer: time is fixed per section.', 'Overall timer: one clock for the whole test.', 'Cutoff: the minimum score to pass a stage.', 'Official notice: the instructions from the employer or test provider.'],
  intu: 'The pattern is the rulebook of the game. Read it before playing.',
  mental: 'Write one line per section: questions, minutes, marks, penalty. Then compute pace and cutoffs.',
  formulas: [['Pace', 'Minutes × 60 ÷ questions', 'Each section.', 'Plan.', '20 min, 15 questions'], ['Marks per minute', 'Total marks ÷ total minutes', 'Whole test.', 'Rate.', '60 ÷ 60'], ['Cutoff marks', 'Percent × total', 'Pass mark.', 'Target.', '60% of 60'], ['Attempts needed', 'Cutoff ÷ accuracy', 'Planning.', 'Target.', '36 ÷ 0.9'], ['Penalty effect', 'Net = correct − penalty × wrong', 'Scoring.', 'Net.', '40 − 5 × 0.25']],
  narr: ['Suppose a (hypothetical) notice says: Aptitude 20 questions in 25 minutes, Reasoning 15 questions in 20 minutes, Verbal 25 questions in 20 minutes, each question 1 mark, 0.25 penalty. The paces are 75 s, 80 s and 48 s per question.', 'Total marks 60; a 60% cutoff needs 36 net marks.', 'With 90% accuracy and a 0.25 penalty, each attempt nets 0.9 − 0.025 = 0.875 marks, so 36 net marks need about 36 ÷ 0.875 = 41 attempts.', 'Confirm with the recruiter: whether sectional timers apply, whether you can go back, and the exact penalty.', 'Never rely on an unofficial claim about a pattern; patterns change.'],
  deep: [['Sectional timers', 'With sectional timers you cannot move time between sections, so plan each section separately.'], ['Cutoff stages', 'Some tests have sectional cutoffs as well as an overall cutoff; check both.']],
  vars: [['Sections', 'Questions and time.', '20 in 25 min'], ['Pace', 'Seconds per question.', '75 s'], ['Cutoff', 'Marks needed.', '36'], ['Penalty', 'Net marks.', '0.875 per attempt'], ['Confirmations', 'Ask the recruiter.', 'Sectional timers']],
  ex: [
    { t: 'Pace', q: 'A section has 20 questions in 25 minutes. Time per question?', g: ['20', '25 min'], c: 'Seconds ÷ questions.', s: [['Seconds', '25 × 60 = 1,500.'], ['Per question', '75 s.']], a: '75 seconds', w: 'Plan from the pattern.', tr: 'Taking 1.25 s.' },
    { t: 'Cutoff', q: 'Total 60 marks and a 60% cutoff. Marks needed?', g: ['60', '60%'], c: 'Percent of total.', s: [['Convert', '60% = 0.6.'], ['Multiply', '0.6 × 60 = 36.']], a: '36 marks', w: 'Net marks after penalty.', tr: 'Taking 60.' },
    { t: 'Penalty', q: '40 correct, 8 wrong, penalty 0.25. Net marks?', g: ['40', '8', '0.25'], c: 'Correct − penalty.', s: [['Penalty', '8 × 0.25 = 2.'], ['Net', '40 − 2 = 38.']], a: '38', w: 'Read the rule.', tr: 'Ignoring the penalty.' }
  ],
  short: { title: 'Pattern to plan', trad: 'Rely on hearsay.', fast: 'Write the official pattern in one line per section, compute paces and cutoffs, and confirm unclear points with the recruiter.', rules: ['Official source only.', 'Pace per section.', 'Cutoff from total.', 'Confirm the rules.'] },
  mist: [['Trusting hearsay about a pattern', 'Outdated.', 'Use the official notice.'], ['Ignoring sectional timers', 'Wrong pacing.', 'Plan per section.'], ['Forgetting the penalty', 'Wrong strategy.', 'Include it.']],
  tips: { sec: 15, elim: 'Use the pattern to decide guessing.', adv: 'Keep a one-page pattern sheet per company.', ins: 'The figures in this chapter are examples, not real company data.' },
  rev: ['Read notice.', 'Pace.', 'Cutoff.', 'Penalty.', 'Confirm.'],
  qf: ['Pace = minutes × 60 ÷ questions'],
  take: ['Official only.', 'Compute.', 'Plan per section.', 'Confirm.'],
  self: ['Can I extract a pattern?', 'Can I compute a cutoff?', 'Can I include the penalty?']
});
const q37 = [
  N('e', 'A (hypothetical) section has 20 questions in 25 minutes. The time per question is (seconds)', 75, '1,500 ÷ 20 = 75.'),
  N('e', 'A section has 15 questions in 20 minutes. The time per question is (seconds)', 80, '1,200 ÷ 15 = 80.'),
  N('e', 'A section has 25 questions in 20 minutes. The time per question is (seconds)', 48, '1,200 ÷ 25 = 48.'),
  N('e', 'The total number of questions in the three sections is', 60, '20 + 15 + 25 = 60.'),
  N('e', 'The total time for the three sections (minutes) is', 65, '25 + 20 + 20 = 65.'),
  N('e', 'With 1 mark per question, the total marks are', 60, '60 questions × 1 mark.'),
  N('m', 'A 60% cutoff on 60 marks needs (marks)', 36, '0.6 × 60 = 36.'),
  N('m', 'A 50% cutoff on 60 marks needs (marks)', 30, '0.5 × 60 = 30.'),
  N('m', 'Each attempted question at 90% accuracy with penalty 0.25 nets (marks)', 0.9 - 0.1 * 0.25, '0.9 − 0.025 = 0.875.', 3),
  N('m', 'The attempts needed for 36 net marks at that rate (to the nearest whole number) are', Math.round(36 / 0.875), '36 ÷ 0.875 = 41.1, about 41.'),
  N('m', '40 correct and 8 wrong with a 0.25 penalty give net marks of', 40 - 2, '40 − 2 = 38.'),
  N('m', 'The average marks per minute over the whole test (to two decimals) is', 60 / 65, '60 ÷ 65 = 0.92.', 2),
  N('m', 'With a section time of 20 minutes and 25 questions, the planned time for 10 quick questions at 30 seconds each is (minutes)', 5, '300 s = 5 minutes.'),
  N('m', 'The time left in that section for the other 15 questions (minutes) is', 15, '20 − 5 = 15.'),
  N('p', 'The pace for those 15 questions (seconds, to the nearest whole number) is', 900 / 15, '900 ÷ 15 = 60.'),
  N('p', 'A candidate wants 36 net marks and expects 90% accuracy. If total questions are 60, the percentage of questions to attempt is (nearest whole number)', Math.round(41 / 60 * 100), '41 ÷ 60 = 68%.', 0, pc),
  N('p', 'With sectional cutoffs of 40% in each section (Aptitude 20 marks), the minimum marks in Aptitude are', 8, '0.4 × 20 = 8.'),
  T('p', 'Where should you check the exact sectional timer rule for a company\'s test?', 'The official instructions from the employer or test provider', ['A friend\'s memory of last year', 'An unverified online forum post', 'You may assume it is the same for all companies'], 'Patterns change; only the official notice is reliable.'),
  T('p', 'Which of these is NOT part of a pattern you should extract from an official notice?', 'The names of the other candidates', ['Number of sections', 'Time per section', 'Penalty rule'], 'Candidates\' identities are not part of the pattern.'),
  N('p', 'If the penalty were 0.5 instead of 0.25, the net marks per attempt at 90% accuracy would be', 0.9 - 0.1 * 0.5, '0.9 − 0.05 = 0.85.', 2)
];
build(ch37, q37);
