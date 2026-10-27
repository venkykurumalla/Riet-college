const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'rev', category: 'Mock Test & Revision Preparation', url: 'https://www.indiabix.com/aptitude/' };
const spec = (o) => C({ ...base, ...o });
const NOTE = 'The figures in this chapter\'s examples are illustrative and not real test statistics.';

// ============ Chapter 50: common traps ============
const ch50 = spec({ n: 50, id: 'y4-rev-common-traps', title: 'Common Traps and How to Avoid Them',
  tag: 'Twenty classic aptitude traps: successive percentages, average speed, wrong bases, counting errors and unit slips',
  over: 'Most lost marks come from a small set of traps rather than from hard mathematics. In each trap there is a tempting answer reached by an intuitive but wrong step, and a correct answer reached by one extra check. Setters place the tempting answer among the options. This chapter lists the traps with the wrong step, the correct step and a quick test for each: successive percentages that add, averages of speeds, the wrong base for a percentage, inclusive counting, fence-post counting, unit slips, mixtures with replacement, and compounding periods.',
  place: 'Knowing the traps lets you spot a tempting option and pause for ten seconds.',
  real: 'Common-error awareness is the basis of quality checks in any field.',
  obj: ['Recognise the trap behind a tempting option', 'Apply the one extra check that avoids it', 'Use the correct base for percentages', 'Count inclusively and at boundaries correctly', 'Keep units consistent'],
  pre: ['Quantitative Formula Quick Reference', 'Calculation Shortcut Mastery'],
  refresh: 'A tempting option is usually the answer of the intuitive but wrong step.',
  defs: ['Trap: an error that many make for the same reason.', 'Tempting option: the wrong answer from the trap.', 'Base error: using the wrong quantity for a percentage.', 'Boundary error: miscounting at the ends.', 'Check: the extra step that catches the trap.'],
  intu: 'If an answer comes too easily, ask what trap might be hiding.',
  mental: 'Ask: is there a base, a boundary or a unit I could have mishandled?',
  formulas: [['Successive changes', 'Multiply factors', 'Percent chains.', 'Trap: add.', '0.8 × 0.9 = 0.72'], ['Average speed', '2ab/(a + b)', 'Equal distances.', 'Trap: mean.', '48 not 50'], ['Reverse percentage', 'Change ÷ new', 'Reverse.', 'Trap: same %.', '20% more → 16.7% less'], ['Fence posts', 'Intervals + 1', 'Counting.', 'Trap: intervals.', '10 m, 2 m → 6 posts'], ['Inclusive count', 'Last − first + 1', 'Ranges.', 'Trap: difference.', '15..30 → 16']],
  narr: ['Successive discounts of 20% and 10% on ₹1,000: 1,000 × 0.8 × 0.9 = ₹720, not ₹700.', 'Average speed for equal distances at 60 and 40 km/h is 48, not 50.', 'If B is 20% more than A, then A is 20 ÷ 120 = 16.7% less than B, not 20%.', 'Pages 15 to 30 inclusive are 30 − 15 + 1 = 16 pages.', 'Posts every 2 m along 10 m make 10 ÷ 2 + 1 = 6 posts.'],
  deep: [['Compounding periods', 'Half-yearly compounding at 10% per annum is 5% twice: 1.05² = 1.1025.'], ['Percentages that look symmetrical', '+20% then −20% is −4%, not 0.']],
  vars: [['Percent chains', 'Multiply.', '720'], ['Averages', 'Weighted.', '48'], ['Bases', 'Old vs new.', '16.7%'], ['Counting', 'Boundaries.', '16, 6'], ['Units', 'Convert.', '20 m/s']],
  ex: [
    { t: 'Successive', q: 'Discounts of 20% and 10% on ₹1,000. Final price?', g: ['20%, 10%'], c: 'Multiply.', s: [['Factors', '0.8 × 0.9 = 0.72.'], ['Price', '₹720.']], a: '₹720', w: 'Not ₹700.', tr: 'Adding the discounts.' },
    { t: 'Reverse percent', q: 'B is 20% more than A. A is what percent less than B?', g: ['B = 1.2A'], c: 'Base is B.', s: [['Difference', '0.2A.'], ['Percent', '0.2 ÷ 1.2 = 16.7%.']], a: '16.7%', w: 'Different base.', tr: 'Saying 20%.' },
    { t: 'Fence posts', q: 'Posts every 2 m along a 10 m fence, including both ends. How many posts?', g: ['10 m', '2 m'], c: 'Intervals + 1.', s: [['Intervals', '10 ÷ 2 = 5.'], ['Posts', '5 + 1 = 6.']], a: '6', w: 'Count ends.', tr: 'Answering 5.' }
  ],
  short: { title: 'Pause on easy answers', trad: 'Trust the first answer.', fast: 'When the answer comes too easily, check base, boundary and unit before choosing.', rules: ['Multiply changes.', 'Weighted averages.', 'Intervals + 1.', 'Convert units.'] },
  mist: [['Adding percentages', 'Wrong net.', 'Multiply.'], ['Averaging speeds', 'Wrong.', 'Harmonic mean.'], ['Boundary miscount', 'Off by one.', 'Add 1 for inclusive.']],
  tips: { sec: 10, elim: 'The tempting option is often adjacent to the right one.', adv: 'Keep a personal trap list from mocks.', ins: 'Ten seconds of checking saves a mark.' },
  rev: ['Chains.', 'Averages.', 'Bases.', 'Counting.', 'Units.'],
  qf: ['Intervals + 1', 'Multiply factors'],
  take: ['Pause.', 'Check base.', 'Check boundary.', 'Check units.'],
  self: ['Can I name five traps?', 'Can I check a base?', 'Can I count inclusively?']
});
const q50 = [
  N('e', 'Successive discounts of 20% and 10% on ₹1,000 give a price of (₹)', 720, '1,000 × 0.8 × 0.9 = 720, not 700.'),
  N('e', 'Equal distances at 60 and 40 km/h give an average speed of (km/h)', 48, '2 × 60 × 40 ÷ 100 = 48, not 50.'),
  N('e', 'A price rises 20% and then falls 20%. Starting at ₹1,000 it ends at (₹)', 960, '1,000 × 1.2 × 0.8 = 960, not 1,000.'),
  N('e', 'The number of pages from 15 to 30 inclusive is', 16, '30 − 15 + 1 = 16.'),
  N('e', 'Posts every 2 m along a 10 m fence, including both ends, number', 6, '10 ÷ 2 + 1 = 6.'),
  N('e', '72 km/h in m/s is', 20, '72 ÷ 3.6 = 20.'),
  N('m', 'B is 20% more than A. A is what percent less than B (one decimal)?', 20 / 120 * 100, '0.2 ÷ 1.2 = 16.7%.', 1, pc),
  N('m', 'The average of 5 numbers is 24; a sixth number 36 is added. The new average is', 26, '(120 + 36) ÷ 6 = 26.'),
  N('m', '100 L of milk has 10 L removed and replaced by water, three times. The milk left is (litres)', 72.9, '100 × 0.9³ = 72.9, not 70.', 1),
  N('m', 'Cost ₹80, selling price ₹100. The profit percentage on cost is', 25, '20 ÷ 80 = 25%, not 20%.', 0, pc),
  N('m', 'A takes 12 days and B takes 24 days. Together they take (days)', 8, '1/12 + 1/24 = 1/8, not 18.'),
  N('m', 'A father is 3 times his son\'s age. After 10 years he will be twice. The son\'s present age is', 10, '3x + 10 = 2(x + 10) gives x = 10.'),
  N('m', 'The compound interest on ₹10,000 at 10% for 2 years is (₹)', 2100, '10,000 × 1.21 − 10,000 = 2,100, not 2,000.'),
  N('m', 'A share rises from 30% to 35%. The percent change is (one decimal)', 5 / 30 * 100, '5 ÷ 30 = 16.7%, not 5%.', 1, pc),
  N('p', '₹10,000 at 10% per annum compounded half-yearly for 1 year gives an amount of (₹)', 11025, '1.05² = 1.1025; 10,000 × 1.1025 = 11,025.'),
  N('p', 'The number of ways 5 people can sit around a round table is', 24, '(5 − 1)! = 24, not 120.'),
  N('p', 'The remainder when 2¹⁰ is divided by 3 is', 1, '2² ≡ 1 (mod 3), so 2¹⁰ ≡ 1.'),
  N('p', 'The probability of at least one head in 3 tosses (as a decimal) is', 0.875, '1 − 1/8 = 0.875, not 3/8.', 3),
  N('p', 'An article is marked 25% above cost and sold at 10% discount. The profit percentage is', 12.5, '1.25 × 0.9 = 1.125, so 12.5%, not 15%.', 1, pc),
  N('p', 'A man travels 100 km at 50 km/h and returns at 100 km/h. The average speed (km/h, one decimal) is', 200 / 3, 'Total time 2 + 1 = 3 h for 200 km: 66.7, not 75.', 1)
];
build(ch50, q50);

// ============ Chapter 51: most frequently tested topics ============
const ch51 = spec({ n: 51, id: 'y4-rev-frequently-tested', title: 'Most Frequently Tested Topics',
  tag: 'Building a priority list of topics from your own mock data and the standard syllabus, with no invented frequency claims',
  over: 'Which topics are tested most often depends on the employer and changes every year, and there is no reliable public count of question frequency. Rather than repeat claims about "top topics", this chapter teaches you to build your own priority list: take the standard syllabus areas, record how often each appears in the mocks and practice papers you take, record your accuracy in each, and rank them by expected marks gained per hour of study. The result is a personal priority list that updates as you practise. ' + NOTE,
  place: 'A data-driven priority list focuses limited study hours where they earn the most marks.',
  real: 'Prioritising work by expected return is a basic planning skill.',
  obj: ['Record topic frequency from your own mocks', 'Compute your accuracy by topic', 'Estimate marks gained per hour of study', 'Rank topics for study time', 'Re-rank after each mock'],
  pre: ['Mock Test Analysis Methodology', 'Common Traps and How to Avoid Them'],
  refresh: 'Expected gain = frequency × (target accuracy − current accuracy). Priority = gain ÷ hours needed.',
  defs: ['Frequency: how many times a topic appears in your mocks.', 'Accuracy: correct ÷ attempted in the topic.', 'Gap: target accuracy minus current accuracy.', 'Expected gain: marks you can add by closing the gap.', 'Priority: gain per hour.'],
  intu: 'Study where there is both frequent testing and a big gap.',
  mental: 'Tabulate frequency and accuracy, compute gain, divide by hours, rank.',
  formulas: [['Accuracy', 'Correct ÷ attempted', 'Each topic.', 'Current.', '6 of 10'], ['Gap', 'Target − current', 'Each topic.', 'Room.', '90% − 60%'], ['Expected gain', 'Frequency × gap', 'Each topic.', 'Marks.', '10 × 0.3'], ['Priority', 'Gain ÷ hours', 'Ranking.', 'Rate.', '3 ÷ 6'], ['Share of study time', 'Priority share', 'Allocation.', 'Plan.', 'Weights']],
  narr: ['Over 5 mocks suppose percentage questions appeared 40 times and you got 28 right: accuracy 70%. With a 90% target the gap is 20 points, so expected gain over the same number of questions is 40 × 0.2 = 8 marks.', 'Seating puzzles appeared 20 times with 8 right: accuracy 40%, gap 50 points, expected gain 10 marks.', 'If closing the percentage gap takes 8 hours and the seating gap 20 hours, priorities are 1.0 and 0.5 marks per hour: do percentages first.', 'Re-rank after each mock because the accuracy changes.', 'Mark any claim about "most tested topics" that you cannot verify as hearsay.'],
  deep: [['Sample size', 'With few questions in a topic the accuracy estimate is noisy; combine with practice sets.'], ['Core topics', 'Foundational topics (percentages, ratios, averages) support many others and are worth studying regardless.']],
  vars: [['Accuracy', 'By topic.', '70%'], ['Gap', 'To target.', '20 points'], ['Gain', 'Frequency × gap.', '8 marks'], ['Priority', 'Per hour.', '1.0'], ['Re-rank', 'After mocks.', 'Weekly']],
  ex: [
    { t: 'Accuracy', q: '28 of 40 percentage questions correct. Accuracy?', g: ['28', '40'], c: 'Correct over attempted.', s: [['Divide', '28 ÷ 40 = 0.7.'], ['Percent', '70%.']], a: '70%', w: 'Current accuracy.', tr: 'Using 28.' },
    { t: 'Expected gain', q: '40 questions, accuracy 70%, target 90%. Expected marks gained?', g: ['40', '70%', '90%'], c: 'Frequency × gap.', s: [['Gap', '20% = 0.2.'], ['Gain', '40 × 0.2 = 8.']], a: '8 marks', w: 'Per 40 questions.', tr: 'Ignoring frequency.' },
    { t: 'Priority', q: 'Gain 8 marks needs 8 hours; gain 10 marks needs 20 hours. Which has the higher priority?', g: ['8/8, 10/20'], c: 'Gain per hour.', s: [['First', '8 ÷ 8 = 1.'], ['Second', '10 ÷ 20 = 0.5.']], a: 'The first (1 mark per hour)', w: 'Rate decides.', tr: 'Choosing the larger gain.' }
  ],
  short: { title: 'Your own list', trad: 'Follow a rumour list.', fast: 'Tabulate frequency and accuracy from your mocks, compute gain per hour, and study in that order.', rules: ['Own data.', 'Gap × frequency.', 'Per hour.', 'Re-rank often.'] },
  mist: [['Trusting hearsay about top topics', 'Misdirected effort.', 'Use your data.'], ['Ignoring foundations', 'Weak base.', 'Keep core topics.'], ['Never re-ranking', 'Stale list.', 'Update after each mock.']],
  tips: { sec: 0, elim: 'N/A.', adv: 'Keep a simple spreadsheet.', ins: 'The list is yours; it changes as you improve.' },
  rev: ['Frequency.', 'Accuracy.', 'Gap.', 'Gain.', 'Priority.'],
  qf: ['Gain = frequency × gap'],
  take: ['Own data.', 'Gap.', 'Per hour.', 'Update.'],
  self: ['Can I compute accuracy by topic?', 'Can I compute gain?', 'Can I rank topics?']
});
const q51 = [
  N('e', '28 of 40 percentage questions correct give an accuracy of', 70, '28 ÷ 40 = 70%.', 0, pc),
  N('e', '8 of 20 seating puzzles correct give an accuracy of', 40, '8 ÷ 20 = 40%.', 0, pc),
  N('e', 'With a 90% target and 70% accuracy, the gap in percentage points is', 20, '90 − 70 = 20.'),
  N('e', 'With a 90% target and 40% accuracy, the gap is', 50, '90 − 40 = 50.'),
  N('e', 'The expected gain over 40 questions with a 20-point gap is (marks)', 8, '40 × 0.2 = 8.'),
  N('e', 'The expected gain over 20 questions with a 50-point gap is (marks)', 10, '20 × 0.5 = 10.'),
  N('m', 'Closing a gap worth 8 marks takes 8 hours. The priority (marks per hour) is', 1, '8 ÷ 8 = 1.'),
  N('m', 'Closing a gap worth 10 marks takes 20 hours. The priority (marks per hour) is', 0.5, '10 ÷ 20 = 0.5.', 1),
  T('m', 'Which topic should be studied first?', 'The one worth 8 marks in 8 hours', ['The one worth 10 marks in 20 hours', 'Either, at random', 'Neither'], '1 mark per hour beats 0.5.'),
  N('m', 'A topic appeared 30 times with 21 correct. The accuracy is', 70, '21 ÷ 30 = 70%.', 0, pc),
  N('m', 'With a 85% target, the gap for that topic is', 15, '85 − 70 = 15.'),
  N('m', 'Its expected gain over 30 questions is (marks, one decimal)', 30 * 0.15, '30 × 0.15 = 4.5.', 1),
  N('m', 'If 6 hours are needed to close it, the priority (marks per hour) is', 4.5 / 6, '4.5 ÷ 6 = 0.75.', 2),
  N('m', 'Three topics have gains of 8, 10 and 4.5 marks. The total expected gain is', 22.5, '8 + 10 + 4.5 = 22.5.', 1),
  T('p', 'Which statement about "most frequently tested topics" is the most reliable?', 'Build your own list from your mocks and the official syllabus', ['Trust a forum\'s top-five list', 'Copy last year\'s rumour', 'Assume all employers test the same topics'], 'Frequencies depend on employer and year, and public counts are not reliable.'),
  N('p', 'Studying hours split in proportion to gains 8, 10 and 4.5 over 45 hours gives the second topic about (hours, one decimal)', 45 * 10 / 22.5, '45 × 10 ÷ 22.5 = 20.', 1),
  T('p', 'After a new mock your accuracy in a topic rises from 70% to 85%. You should', 'recompute the gap and re-rank', ['ignore it', 'drop the topic forever', 'keep the old ranking'], 'Priorities change as accuracy changes.'),
  N('p', 'A topic with only 5 questions in your mocks and 4 correct shows accuracy of', 80, '4 ÷ 5 = 80%, but with so few questions the estimate is noisy.', 0, pc),
  T('p', 'To make that estimate reliable you should', 'add practice-set questions in that topic', ['trust it', 'ignore the topic', 'wait for the real test'], 'More questions reduce noise.'),
  T('p', 'Foundational topics such as percentages and ratios are best treated as', 'worth studying regardless, because they support many other topics', ['optional', 'low priority always', 'tested only once'], 'Core topics underpin many questions.')
];
build(ch51, q51);

// ============ Chapter 52: mock test analysis methodology ============
const ch52 = spec({ n: 52, id: 'y4-rev-mock-analysis', title: 'Mock Test Analysis Methodology',
  tag: 'Turning a mock test into a diagnosis: sectional accuracy, time per question, error types and an improvement plan',
  over: 'A mock test is useful only if you analyse it. The analysis has four parts: scores and accuracy by section, time per question by section, a classification of every wrong or skipped question (could not do, careless, ran out of time, misread, guessed), and a specific plan for the next week. This chapter works through the arithmetic of the analysis on an illustrative mock. ' + NOTE,
  place: 'Candidates who analyse every mock improve faster than those who take more mocks without analysis.',
  real: 'Post-mortems and retrospectives are the standard way teams learn.',
  obj: ['Compute sectional accuracy and attempts', 'Compute time per question', 'Classify errors', 'Identify the biggest loss of marks', 'Write a specific plan for the next mock'],
  pre: ['Accuracy Management Under Pressure', 'Most Frequently Tested Topics'],
  refresh: 'Accuracy = correct ÷ attempted. Time per question = time ÷ attempted. Marks lost = wrong × penalty + missed.',
  defs: ['Attempts: questions answered.', 'Accuracy: correct ÷ attempted.', 'Careless error: an error you could have avoided.', 'Skipped-but-solvable: a skip you could have solved in time.', 'Plan: a specific action for the next week.'],
  intu: 'Analysis turns a score into causes, and causes into actions.',
  mental: 'Fill a table: attempts, correct, time per section; tag each wrong answer; pick the biggest cause.',
  formulas: [['Accuracy', 'Correct ÷ attempted', 'Each section.', 'Quality.', '18 ÷ 22'], ['Time per question', 'Time ÷ attempted', 'Each section.', 'Pace.', '1,500 ÷ 22'], ['Net marks', 'Correct − penalty × wrong', 'Each section.', 'Score.', '18 − 4 × 0.25'], ['Error share', 'Type ÷ total errors', 'Classification.', 'Priority.', '5 ÷ 12'], ['Marks lost to cause', 'Count × marks', 'Plan.', 'Priority.', '5 × 1.25']],
  narr: ['Illustrative mock: Aptitude 20 questions in 25 minutes: attempted 18, correct 14, wrong 4. Accuracy 14 ÷ 18 = 77.8%; time per attempted question 1,500 ÷ 18 = 83 s; net marks (penalty 0.25) = 14 − 1 = 13.', 'Reasoning 15 in 20 minutes: attempted 12, correct 9: accuracy 75%.', 'Verbal 25 in 20 minutes: attempted 25, correct 15: accuracy 60%, time per question 48 s.', 'Classify the 12 wrong answers: 5 careless, 3 misread, 2 guessed, 2 could not do: careless errors are the largest cause.', 'Plan: add a 10-second check for units and last digit; practise reading stems twice; take one timed verbal drill daily.'],
  deep: [['Marks lost vs marks missed', 'A wrong answer loses marks plus the penalty; a skipped question loses only the opportunity.'], ['Trend over mocks', 'One mock is noisy; compare the last three.']],
  vars: [['Sectional accuracy', 'Per section.', '77.8%'], ['Time per question', 'Pace.', '83 s'], ['Error types', 'Classify.', 'Careless 5'], ['Net marks', 'After penalty.', '13'], ['Plan', 'Specific actions.', 'Checks']],
  ex: [
    { t: 'Accuracy', q: 'Aptitude: 18 attempted, 14 correct. Accuracy?', g: ['18', '14'], c: 'Correct over attempted.', s: [['Divide', '14 ÷ 18 = 0.778.'], ['Percent', '77.8%.']], a: '77.8%', w: 'Base is attempted.', tr: 'Dividing by 20.' },
    { t: 'Time per question', q: 'Aptitude 25 minutes, 18 attempted. Time per attempted question?', g: ['25 min', '18'], c: 'Seconds ÷ attempts.', s: [['Seconds', '25 × 60 = 1,500.'], ['Divide', '1,500 ÷ 18 = 83 s.']], a: '83 seconds', w: 'Compare with plan.', tr: 'Using 20 questions.' },
    { t: 'Error share', q: '5 of 12 errors were careless. Share?', g: ['5', '12'], c: 'Part over total.', s: [['Divide', '5 ÷ 12 = 0.417.'], ['Percent', '41.7%.']], a: '41.7%', w: 'Largest cause.', tr: 'Dividing by 5.' }
  ],
  short: { title: 'Numbers, causes, plan', trad: 'Look at the total score.', fast: 'Compute sectional accuracy and pace, classify every wrong answer, and write one specific plan.', rules: ['Section by section.', 'Classify errors.', 'Biggest cause first.', 'Specific plan.'] },
  mist: [['Looking only at the total', 'No diagnosis.', 'Analyse by section.'], ['Not classifying errors', 'No fix.', 'Tag each wrong answer.'], ['Vague plans', 'No change.', 'Write specific actions.']],
  tips: { sec: 0, elim: 'N/A.', adv: 'Analyse within 24 hours of the mock.', ins: 'The same error type repeating is the plan.' },
  rev: ['Accuracy.', 'Pace.', 'Classify.', 'Biggest cause.', 'Plan.'],
  qf: ['Accuracy = correct/attempted'],
  take: ['Sections.', 'Classify.', 'Prioritise.', 'Plan.'],
  self: ['Can I compute sectional accuracy?', 'Can I classify errors?', 'Can I write a plan?']
});
const q52 = [
  N('e', 'Aptitude: 18 attempted and 14 correct. The accuracy is (%, one decimal)', 14 / 18 * 100, '14 ÷ 18 = 77.8%.', 1, pc),
  N('e', 'Reasoning: 12 attempted and 9 correct. The accuracy is (%)', 75, '9 ÷ 12 = 75%.', 0, pc),
  N('e', 'Verbal: 25 attempted and 15 correct. The accuracy is (%)', 60, '15 ÷ 25 = 60%.', 0, pc),
  N('e', 'Aptitude: 25 minutes for 18 attempted questions gives a time per question of (seconds, nearest whole)', 1500 / 18, '1,500 ÷ 18 = 83.3.'),
  N('e', 'Verbal: 20 minutes for 25 attempted questions gives (seconds)', 48, '1,200 ÷ 25 = 48.'),
  N('e', 'Aptitude: 18 attempted and 14 correct means wrong answers of', 4, '18 − 14 = 4.'),
  N('m', 'With penalty 0.25, Aptitude net marks are', 14 - 4 * 0.25, '14 − 1 = 13.'),
  N('m', 'Reasoning: 12 attempted, 9 correct, penalty 0.25. Net marks are', 9 - 3 * 0.25, '9 − 0.75 = 8.25.', 2),
  N('m', 'Verbal: 25 attempted, 15 correct, penalty 0.25. Net marks are', 15 - 10 * 0.25, '15 − 2.5 = 12.5.', 1),
  N('m', 'The total net marks over the three sections are', 13 + 8.25 + 12.5, '13 + 8.25 + 12.5 = 33.75.', 2),
  N('m', 'The total wrong answers over the three sections are', 4 + 3 + 10, '4 + 3 + 10 = 17.'),
  N('m', 'Of 12 classified errors, 5 were careless. The share of careless errors (%, one decimal) is', 5 / 12 * 100, '5 ÷ 12 = 41.7%.', 1, pc),
  N('m', 'Reasoning: 15 questions, 12 attempted. The skipped questions are', 3, '15 − 12 = 3.'),
  N('m', 'The attempt rate in Reasoning (%) is', 12 / 15 * 100, '12 ÷ 15 = 80%.', 0, pc),
  T('p', 'Which section shows the weakest accuracy?', 'Verbal', ['Aptitude', 'Reasoning', 'All equal'], 'Verbal 60% is below 75% and 77.8%.'),
  T('p', 'Which error type is the largest in the illustrative classification (5 careless, 3 misread, 2 guessed, 2 could not do)?', 'Careless', ['Misread', 'Guessed', 'Could not do'], 'Careless errors: 5 of 12.'),
  N('p', 'Marks lost to careless errors at 1.25 per wrong answer (1 mark lost plus 0.25 penalty) are', 5 * 1.25, '5 × 1.25 = 6.25.', 2),
  T('p', 'The most useful next step after the analysis is to', 'write a specific plan targeting the biggest cause', ['take another mock at once', 'ignore the wrong answers', 'memorise answers'], 'Analysis is useful only if it changes your practice.'),
  N('p', 'If a 10-second check removed half the careless errors, the marks gained (at 1.25 each) would be', 2.5 * 1.25, '2.5 × 1.25 = 3.125, about 3.1.', 1),
  T('p', 'When should you analyse a mock?', 'Soon after taking it, while details are fresh', ['After a month', 'Never', 'Only after the real test'], 'Prompt analysis works best.')
];
build(ch52, q52);

// ============ Chapter 53: full-length practice test strategy ============
const ch53 = spec({ n: 53, id: 'y4-rev-full-length-practice', title: 'Full-Length Practice Test Strategy',
  tag: 'Planning a series of full-length mocks: spacing, timing, conditions, review time and a taper before the real test',
  over: 'Full-length practice tests build stamina and test your plan under real conditions. How you use them matters: take them under real timing and conditions, review each one for as long as it took to attempt (or longer), space them so that review and specific practice fit in between, and taper in the last days. This chapter works through the arithmetic of a schedule and gives a checklist for each mock. ' + NOTE,
  place: 'A planned series of mocks beats an ad-hoc pile of mocks.',
  real: 'Rehearsals before an important event follow the same pattern.',
  obj: ['Plan the number and spacing of mocks', 'Set real conditions', 'Allocate review time', 'Compare mocks over time', 'Taper before the real test'],
  pre: ['Mock Test Analysis Methodology', 'Time Triage and Question Selection'],
  refresh: 'Review time should be at least equal to attempt time.',
  defs: ['Full-length mock: a complete test under timed conditions.', 'Real conditions: same timing, device and rules.', 'Review ratio: review time ÷ test time.', 'Taper: lighter practice just before the real test.', 'Trend: pattern across several mocks.'],
  intu: 'A mock tests the plan; the review improves it.',
  mental: 'Schedule mocks, protect review time, compare trends, taper at the end.',
  formulas: [['Review time', 'At least test time', 'Each mock.', 'Rule of thumb.', '65 min test, 65+ review'], ['Mocks in n weeks', 'weeks × per week', 'Plan.', 'Count.', '4 weeks × 2'], ['Spacing', 'Days ÷ mocks', 'Plan.', 'Gap.', '28 ÷ 8'], ['Trend', 'Last − first', 'Compare.', 'Progress.', '58 → 70'], ['Taper', 'Lighter final days', 'Pre-test.', 'Rest.', 'Last 2 days']],
  narr: ['Suppose you have 4 weeks and take 2 full mocks a week: 8 mocks, one every 3.5 days.', 'A 65-minute mock plus an equal review is 130 minutes; 8 such mocks take 17.3 hours.', 'Keep real conditions: same time of day, device and rules as the real test.', 'Compare accuracy across mocks: 58%, 62%, 66%, 70%: a rise of 4 points per mock.', 'In the last two days do light revision and sleep rather than a new mock.'],
  deep: [['Quality over quantity', 'Two analysed mocks are worth more than four unanalysed.'], ['Simulate pressure', 'Practise with a visible timer and no pauses.']],
  vars: [['Count', 'Weeks × per week.', '8'], ['Spacing', 'Days apart.', '3.5'], ['Review', 'Equal to test.', '65 min'], ['Trend', 'Accuracy by mock.', '58% → 70%'], ['Taper', 'Light days.', '2']],
  ex: [
    { t: 'Count', q: 'You plan 2 mocks a week for 4 weeks. How many mocks?', g: ['2', '4'], c: 'Multiply.', s: [['Set up', 'Mocks = per week × weeks.'], ['Multiply', '2 × 4 = 8.']], a: '8 mocks', w: 'Quality over quantity.', tr: 'Counting weeks.' },
    { t: 'Review time', q: 'A 65-minute mock with an equal review. Total time per mock?', g: ['65', '65'], c: 'Add.', s: [['Test', '65 min.'], ['Total', '65 + 65 = 130 min.']], a: '130 minutes', w: 'Review is part of the plan.', tr: 'Counting only 65.' },
    { t: 'Trend', q: 'Accuracy goes 58%, 62%, 66%, 70% over four mocks. Average rise per mock?', g: ['58 → 70'], c: 'Total over steps.', s: [['Total rise', '70 − 58 = 12.'], ['Per step', '12 ÷ 3 = 4 points.']], a: '4 points', w: 'Three intervals.', tr: 'Dividing by 4.' }
  ],
  short: { title: 'Plan, rehearse, review', trad: 'Take mocks randomly.', fast: 'Schedule mocks with spacing, keep real conditions, review for at least as long as the test, track the trend and taper.', rules: ['Real conditions.', 'Review ≥ test time.', 'Track trends.', 'Taper.'] },
  mist: [['Mocks without review', 'No improvement.', 'Review each.'], ['Different conditions', 'Misleading.', 'Match the real test.'], ['A mock the day before', 'Fatigue.', 'Taper.']],
  tips: { sec: 0, elim: 'N/A.', adv: 'Put mocks in the calendar.', ins: 'The final mock is for confidence, not discovery.' },
  rev: ['Count.', 'Conditions.', 'Review.', 'Trend.', 'Taper.'],
  qf: ['Review ≥ test time'],
  take: ['Plan.', 'Real conditions.', 'Review.', 'Taper.'],
  self: ['Can I plan the mock series?', 'Can I protect review time?', 'Can I taper?']
});
const q53 = [
  N('e', '2 mocks a week for 4 weeks give a number of mocks of', 8, '2 × 4 = 8.'),
  N('e', 'A 65-minute mock with an equal review takes (minutes)', 130, '65 + 65 = 130.'),
  N('e', '8 mocks of 130 minutes each take (minutes)', 1040, '8 × 130 = 1,040.'),
  N('e', '1,040 minutes in hours (one decimal) is', 1040 / 60, '1,040 ÷ 60 = 17.3.', 1),
  N('e', '28 days with 8 mocks give a spacing of (days)', 3.5, '28 ÷ 8 = 3.5.', 1),
  N('e', 'Accuracy rising from 58% to 70% is a rise of (points)', 12, '70 − 58 = 12.'),
  N('m', 'Accuracy of 58%, 62%, 66% and 70% over four mocks rises by how many points per mock?', 4, '12 ÷ 3 = 4.'),
  N('m', 'If the trend continues, the accuracy in the fifth mock is (%)', 74, '70 + 4 = 74.', 0, pc),
  N('m', 'A mock of 65 minutes and a review of 1.5 times its length take (minutes)', 65 + 97.5, '65 + 97.5 = 162.5.', 1),
  N('m', '6 mocks with that 162.5 minutes each take (hours, one decimal)', 6 * 162.5 / 60, '975 ÷ 60 = 16.3 (16.25).', 1),
  T('m', 'The review of a mock should take', 'at least as long as the test itself', ['a minute', 'no time', 'less than a tenth of the test'], 'Review is where improvement happens.'),
  T('m', 'Real conditions for a mock mean', 'the same timing, device and rules as the real test', ['any convenient setting', 'no timer', 'open notes'], 'The mock must represent the real test.'),
  N('m', 'With 3 weeks left and 2 mocks a week, the mocks left are', 6, '3 × 2 = 6.'),
  N('m', 'If you skip the 2 days before the test for tapering from a 21-day plan, the days of mock work are', 19, '21 − 2 = 19.'),
  T('p', 'What is the best use of the last two days?', 'Light revision, rest and sleep', ['two full mocks', 'learning new topics', 'no preparation or rest'], 'A taper protects freshness.'),
  N('p', 'Two analysed mocks improve your accuracy by 4 points each; four unanalysed mocks improve it by 1 point each. The improvement from the analysed approach is more by (points)', 2 * 4 - 4 * 1, '8 − 4 = 4.'),
  T('p', 'Which is the better approach?', 'Fewer mocks with careful review', ['More mocks with no review', 'Only reading answers', 'Never taking mocks'], 'Analysis drives improvement.'),
  N('p', 'A section has 30 questions in 40 minutes. In a mock you take 44 minutes. The overrun in seconds is', 4 * 60, '4 × 60 = 240.'),
  T('p', 'Taking all mocks in a quiet room but sitting the real test in a noisy hall is', 'a condition mismatch to avoid where possible', ['perfect', 'irrelevant', 'an advantage'], 'Practise under conditions close to the real test.'),
  T('p', 'The purpose of the final mock before the test is mainly', 'to build confidence and rehearse the plan', ['to discover new topics', 'to replace revision', 'to increase stress'], 'Late discovery causes anxiety; late rehearsal builds confidence.')
];
build(ch53, q53);
