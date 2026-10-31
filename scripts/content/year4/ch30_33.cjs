const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, inr, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'strat', category: 'Placement Strategy & Shortcuts' };
const spec = (o) => C({ ...base, ...o });

// ============ Chapter 30: option elimination ============
const ch30 = spec({ n: 30, id: 'y4-strat-option-elimination', title: 'Option Elimination Strategies',
  tag: 'Killing options with the last digit, parity, divisibility, size bounds and sign before doing the full calculation',
  over: 'In a multiple-choice test you do not always have to compute the answer; you have to identify which option it is. Elimination uses properties that every correct answer must have: the right last digit, parity, divisibility, size between bounds, or sign. Each property can be checked in seconds and often leaves a single option. Elimination is also a safe fallback when time runs out, since each removed option raises the chance of a correct guess.',
  place: 'Online tests are multiple-choice and timed; elimination saves time on arithmetic-heavy items.',
  real: 'Plausibility checks catch errors in any calculation.',
  obj: ['Use the last digit and parity to eliminate', 'Use divisibility tests and digital roots', 'Use size bounds from estimation', 'Use sign and direction of change', 'Decide when elimination is enough'],
  pre: ['Calculation Shortcut Mastery', 'Approximation and Estimation'],
  refresh: 'The last digit of a product depends only on the last digits of the factors. A square cannot end in 2, 3, 7 or 8.',
  defs: ['Elimination: removing options that cannot be correct.', 'Bound: a lower or upper limit for the answer.', 'Parity: whether a number is odd or even.', 'Digital root: a check on the digits.', 'Plausibility: whether the answer has the right size.'],
  intu: 'The right answer has to satisfy simple tests that wrong options often fail.',
  mental: 'Before computing, ask: what must the last digit be? the parity? the rough size? Then remove options.',
  formulas: [['Last digit', 'Product of last digits', 'Products, powers.', 'Fast.', '47 × 53 ends in 1'], ['Parity', 'odd + even = odd', 'Sums.', 'Fast.', '156 + 289 is odd'], ['Bounds', 'Estimate with round numbers', 'Any.', 'Medium.', '2,310 ÷ 15 ≈ 154'], ['Divisibility', 'Digit sums, last digits', 'Divisibility.', 'Fast.', '3,429 by 9'], ['Between min and max', 'An average lies between', 'Averages.', 'Fast.', '12, 18, 30']],
  narr: ['47 × 53: the last digit is 7 × 3 = 21, so 1. Options ending in 2 or 6 are out; the size is near 50² = 2,500, so 2,591 is also out.', '156 + 289: even + odd is odd, so even options are out.', 'The average of 12, 18 and 30 must lie between 12 and 30; options 10 and 60 are out.', 'x² = 1,369: x lies between 35 and 40 (since 35² = 1,225 and 40² = 1,600) and ends in 3 or 7, giving 37.', 'For a remainder on division by 3, the answer must be 0, 1 or 2, so an option "3" is out.'],
  deep: [['Elimination is not guessing', 'Each removed option raises the probability of a correct choice from 25% to 33%, 50% and so on.'], ['Order of tests', 'Do the fastest test first: last digit, then parity, then size.']],
  vars: [['Last digit', 'Products.', '47 × 53'], ['Parity', 'Sums.', '156 + 289'], ['Size', 'Bounds.', '2,310 ÷ 15'], ['Divisibility', 'Digit sums.', '3,429'], ['Range', 'Averages.', '12, 18, 30']],
  ex: [
    { t: 'Last digit', q: '47 × 53 has options 2,481; 2,492; 2,501; 2,591. Which can you reject at once?', g: ['Last digits 7 and 3'], c: 'Multiply the last digits.', s: [['Last digit', '7 × 3 = 21 → 1.'], ['Reject', '2,492 (ends 2).']], a: '2,492', w: 'The answer must end in 1.', tr: 'Computing fully.' },
    { t: 'Parity', q: '156 + 289: options 444, 446, 445, 455. Which are impossible?', g: ['even + odd'], c: 'Parity.', s: [['Rule', 'even + odd = odd.'], ['Reject', '444 and 446.']], a: '444 and 446', w: 'The sum is odd.', tr: 'Checking size only.' },
    { t: 'Range', q: 'The average of 12, 18 and 30 can be 10, 20 or 60. Which is possible?', g: ['Between min and max'], c: 'Bounds.', s: [['Range', 'Between 12 and 30.'], ['Option', '20.']], a: '20', w: 'An average lies between extremes.', tr: 'Choosing 60.' }
  ],
  short: { title: 'Last digit, parity, size', trad: 'Compute every answer.', fast: 'Test last digit, parity and rough size; compute only if two options survive.', rules: ['Last digit first.', 'Parity next.', 'Size bounds.', 'Compute last.'] },
  mist: [['Eliminating without a valid rule', 'Wrong removal.', 'Use rules that must hold.'], ['Forgetting several options can pass', 'False certainty.', 'Compute if two remain.'], ['Wrong last-digit rule', 'Error.', 'Multiply last digits only.']],
  tips: { sec: 25, elim: 'Use the cheapest test first.', adv: 'Build a habit: last digit, parity, size.', ins: 'Question setters design traps that pass a single test.' },
  rev: ['Last digit.', 'Parity.', 'Size.', 'Divisibility.', 'Range.'],
  qf: ['Last digit of product'],
  take: ['Cheapest test.', 'Valid rules.', 'Compute last.', 'Guess with elimination.'],
  self: ['Can I eliminate by last digit?', 'Can I eliminate by size?', 'Can I decide when to compute?']
});
const q30 = [
  T('e', '47 × 53 equals', '2,491', ['2,492', '2,481', '2,591'], 'The last digit must be 7 × 3 → 1 and the size near 2,500; 50² − 3² = 2,491.'),
  T('e', '156 + 289 equals', '445', ['444', '446', '455'], 'Even + odd is odd, so 444 and 446 are out; 156 + 289 = 445.'),
  T('e', 'The average of 12, 18 and 30 is', '20', ['10', '30', '60'], 'The average lies between 12 and 30; (12 + 18 + 30) ÷ 3 = 20.'),
  T('e', '25% of 480 equals', '120', ['96', '144', '240'], 'A quarter of 480: 480 ÷ 4 = 120.'),
  T('e', 'The units digit of 7⁵ is', '7', ['1', '3', '9'], 'Units digits cycle 7, 9, 3, 1; the 5th power returns to 7.'),
  T('e', 'Which of these numbers is divisible by 9?', '3,429', ['3,426', '3,427', '3,428'], 'Digit sum of 3,429 is 18, a multiple of 9.'),
  T('m', '2,310 ÷ 15 equals', '154', ['145', '164', '175'], '15 × 150 = 2,250, so the quotient is a little above 150; 154 × 15 = 2,310.'),
  T('m', '18% of 650 equals', '117', ['107', '127', '137'], '10% = 65, 20% = 130; 18% is 130 − 13 = 117.'),
  T('m', 'If x² = 1,369, then x equals', '37', ['33', '36', '39'], 'x lies between 35 and 40 (35² = 1,225, 40² = 1,600) and must end in 3 or 7, so 37.'),
  T('m', '72 km/h in m/s is', '20', ['25', '30', '259.2'], '72 ÷ 3.6 = 20.'),
  T('m', '15% of 15% of 2,000 equals', '45', ['30', '300', '450'], '15% of 2,000 = 300; 15% of 300 = 45.'),
  T('m', '999 × 7 equals', '6,993', ['6,997', '7,007', '6,983'], '7 × 1,000 − 7 = 6,993, and the last digit must be 9 × 7 = 63 → 3.'),
  T('m', 'The amount on ₹1,000 at 10% compound interest for 2 years is', '₹1,210', ['₹1,200', '₹1,220', '₹1,100'], '1,000 × 1.21 = 1,210; simple interest would be 1,200.'),
  T('m', 'The sum of the first 10 odd numbers is', '100', ['55', '110', '90'], 'The sum of the first n odd numbers is n² = 100.'),
  T('p', 'The remainder when 2¹⁰ is divided by 3 is', '1', ['0', '2', '3'], 'A remainder on division by 3 is 0, 1 or 2, so 3 is out; 2¹⁰ is not divisible by 3; 2² ≡ 1, so 2¹⁰ ≡ 1.'),
  T('p', 'Two numbers are in the ratio 3 : 5 and their sum is 64. The smaller is', '24', ['20', '32', '40'], 'The smaller is 3/8 of 64 = 24; it is below 32, the half.'),
  T('p', 'x + y = 20 and xy = 96, with x > y. Then x equals', '12', ['8', '10', '16'], 'x is more than 10 (their mean) and 12 × 8 = 96.'),
  T('p', 'The units digit of 3¹⁰⁰ is', '1', ['3', '7', '9'], 'Units digits cycle 3, 9, 7, 1 with period 4; 100 is a multiple of 4, so 1.'),
  T('p', 'A man goes half the distance at 60 km/h and half at 40 km/h. His average speed is', '48 km/h', ['50 km/h', '45 km/h', '52 km/h'], 'The average must be below the arithmetic mean 50 (harmonic mean): 2 × 60 × 40 ÷ 100 = 48.'),
  T('p', 'A price of ₹1,000 rises 25% and then falls 20%. The final price is', '₹1,000', ['₹1,050', '₹950', '₹1,100'], '1,000 × 1.25 × 0.8 = 1,000.')
];
build(ch30, q30);

// ============ Chapter 31: approximation strategy for timed tests ============
const ch31 = spec({ n: 31, id: 'y4-strat-approx-strategy', title: 'Approximation Strategy for Timed Tests',
  tag: 'Deciding in seconds whether to estimate or calculate, and choosing the precision from the option spacing',
  over: 'Approximation is a strategic decision as much as an arithmetic skill. For every question you must decide in a few seconds whether an estimate will separate the options, how precise it must be, and whether to fall back to exact calculation. The decision rule is simple: compute the gap between the nearest options as a percentage; if your estimate\'s possible error is smaller than half that gap, estimate; otherwise calculate.',
  place: 'Timed tests reward candidates who estimate when they can and calculate only when they must.',
  real: 'Estimating before committing resources is standard practice in planning.',
  obj: ['Compute the relative gap between options', 'Estimate the error of a rounding', 'Apply the half-gap rule', 'Choose the rounding that keeps error small', 'Fall back to exact calculation when needed'],
  pre: ['Approximation and Estimation', 'High-Speed DI with Approximation'],
  refresh: 'Relative error = |estimate − exact| ÷ exact. Relative gap = difference between options ÷ the smaller option.',
  defs: ['Relative gap: the size of the difference between two options in percent.', 'Half-gap rule: estimate only if the error is less than half the gap.', 'Rounding error: difference caused by rounding.', 'Precision: how close an estimate must be.', 'Fallback: exact calculation.'],
  intu: 'The question is not how accurate you can be, but how accurate you must be.',
  mental: 'Look at the options first. Find the smallest gap. Choose a rounding whose error is clearly smaller than half of it.',
  formulas: [['Relative gap', '(larger − smaller) ÷ smaller', 'Two options.', 'Gap.', '(450 − 420)/420 = 7.1%'], ['Half-gap rule', 'Error < gap/2', 'Decision.', 'Rule.', '3.5% budget'], ['Rounding error', '|est − exact| ÷ exact', 'Estimates.', 'Error.', '4,200 vs 4,180: 0.5%'], ['Percent error of squares', 'Rounding 3.9 to 4: ≈ 5%', 'Squares.', 'Effect.', 'Errors double'], ['Product error', 'Errors add', 'Products.', 'Effect.', '1% + 2% ≈ 3%']],
  narr: ['Options 420 and 450 differ by 30, a gap of 7.1%. The half-gap is 3.6%: an estimate with error under 2% is enough.', 'Rounding 4,180 to 4,200 gives an error of 20 ÷ 4,180 = 0.48%.', 'For a product, the relative errors of the factors add: rounding 52 to 50 (3.8%) and 4,180 to 4,200 (0.5%) gives about 4.3%.', 'If the options are 24%, 25%, 26%, the gap is 4%; half is 2%; rough rounding (error over 4%) is not enough, so calculate.', 'When estimate and options disagree by a large margin, recheck: you may have mis-set the problem.'],
  deep: [['Errors in squares', 'Squaring doubles the relative error.'], ['Round in opposite directions', 'In a product, rounding one up and one down partially cancels.']],
  vars: [['Gap', 'Option spacing.', '420 vs 450'], ['Error', 'Rounding.', '4,180 → 4,200'], ['Product', 'Errors add.', '52 × 4,180'], ['Squares', 'Errors double.', '3.9²'], ['Fallback', 'Exact.', '24, 25, 26']],
  ex: [
    { t: 'Relative gap', q: 'Two options are 420 and 450. What is the relative gap?', g: ['420, 450'], c: 'Difference over smaller.', s: [['Difference', '30.'], ['Percent', '30 ÷ 420 = 7.1%.']], a: '7.1%', w: 'Half-gap about 3.6%.', tr: 'Dividing by 450.' },
    { t: 'Rounding error', q: 'Rounding 4,180 to 4,200: relative error?', g: ['4,180, 4,200'], c: 'Error over exact.', s: [['Error', '20.'], ['Percent', '20 ÷ 4,180 = 0.48%.']], a: '0.48%', w: 'Under the budget.', tr: 'Dividing by 4,200.' },
    { t: 'Decision', q: 'Options 24%, 25%, 26% and a rough estimate with 4% error. Estimate or calculate?', g: ['Gap 4%'], c: 'Half-gap rule.', s: [['Half-gap', '2%.'], ['Compare', 'Error 4% > 2%.']], a: 'Calculate', w: 'The estimate is too rough.', tr: 'Estimating anyway.' }
  ],
  short: { title: 'Gap, half, decide', trad: 'Always compute exactly.', fast: 'Find the smallest option gap, halve it, and estimate if your error is smaller than that.', rules: ['Gap first.', 'Half-gap rule.', 'Errors add in products.', 'Recheck outliers.'] },
  mist: [['Estimating when options are close', 'Wrong option.', 'Use the half-gap rule.'], ['Rounding both up in a quotient', 'Error adds.', 'Round the same way.'], ['Ignoring squared errors', 'Underestimate.', 'Errors double in squares.']],
  tips: { sec: 20, elim: 'Eliminate options far from the estimate.', adv: 'Always look at the options first.', ins: 'The skill is deciding, not estimating.' },
  rev: ['Gap.', 'Half-gap.', 'Error.', 'Products.', 'Fallback.'],
  qf: ['Estimate if error < gap/2'],
  take: ['Options first.', 'Half-gap.', 'Combine errors.', 'Calculate if close.'],
  self: ['Can I compute a gap?', 'Can I apply the half-gap rule?', 'Can I estimate error?']
});
const gap = (a, b) => (Math.max(a, b) - Math.min(a, b)) / Math.min(a, b) * 100;
const q31 = [
  N('e', 'Two options are 420 and 450. The relative gap between them (to one decimal) is', gap(420, 450), '30 ÷ 420 = 7.1%.', 1, pc),
  N('e', 'The relative error in rounding 4,180 to 4,200 (to two decimals) is', 20 / 4180 * 100, '20 ÷ 4,180 = 0.48%.', 2, pc),
  N('e', 'Options 24%, 25% and 26%: the relative gap between 24 and 26 (to one decimal) is', gap(24, 26), '2 ÷ 24 = 8.3%.', 1, pc),
  N('e', 'The half-gap for options with a gap of 7.1% is (to one decimal)', 7.1 / 2, '7.1 ÷ 2 = 3.6 (3.55).', 1, pc),
  N('e', 'Rounding 52 to 50 gives a relative error of (to one decimal)', 2 / 52 * 100, '2 ÷ 52 = 3.8%.', 1, pc),
  T('e', 'Options differ by 15%. A rough estimate has up to 3% error. What should you do?', 'Estimate', ['Calculate exactly', 'Skip the question', 'Guess'], 'The error 3% is below half the gap, 7.5%, so estimating is safe.'),
  N('m', 'The relative gap between options 1,180 and 1,210 (to one decimal) is', gap(1180, 1210), '30 ÷ 1,180 = 2.5%.', 1, pc),
  T('m', 'Options 1,180 and 1,210 with a rough estimate having 4% error: what should you do?', 'Calculate exactly', ['Estimate', 'Choose either', 'Take the average'], 'The gap is 2.5%, half is 1.3%, and the estimate error 4% exceeds it.'),
  N('m', 'Rounding 3.9 to 4 and squaring gives a relative error in the square of about (to the nearest whole number)', (16 - 3.9 ** 2) / 3.9 ** 2 * 100, '(16 − 15.21) ÷ 15.21 = 5.2%, about 5%.', 0, pc),
  N('m', 'In a product, rounding 52 to 50 and 4,180 to 4,200 changes the product by about (percent, to one decimal)', (1 - 50 * 4200 / (52 * 4180)) * 100, '50 × 4,200 = 210,000 versus 217,360: an error of 3.4%.', 1, pc),
  N('m', 'The relative gap between 8,500 and 8,900 (to one decimal) is', gap(8500, 8900), '400 ÷ 8,500 = 4.7%.', 1, pc),
  T('m', 'A question has options 8,500 and 8,900. An estimate has 2% error. What should you do?', 'Estimate', ['Calculate exactly', 'Skip', 'Choose the smaller'], 'The half-gap is 2.4%, so 2% is within the budget.'),
  N('m', 'The exact value of 4,180 × 52 is', 4180 * 52, '4,180 × 52 = 217,360.'),
  N('m', 'The percentage error when 4,180 × 52 is estimated as 210,000 (one decimal) is', (217360 - 210000) / 217360 * 100, '7,360 ÷ 217,360 = 3.4%.', 1, pc),
  N('p', 'Options are 96, 100 and 104. The relative gap between 96 and 100 (to one decimal) is', gap(96, 100), '4 ÷ 96 = 4.2%.', 1, pc),
  T('p', 'For options 96, 100 and 104, an estimate within ±1% is', 'enough', ['not enough', 'useless', 'only enough for the largest'], 'The half-gap is about 2.1%, so ±1% separates them.'),
  N('p', 'If you round both numerator and denominator of 4,180 ÷ 52 up to 4,200 ÷ 52, the relative error in the quotient (to one decimal) is', (4200 - 4180) / 4180 * 100, 'Only the numerator changed: 20 ÷ 4,180 = 0.5%.', 1, pc),
  N('p', 'The exact value of 4,180 ÷ 52 (to one decimal) is', 4180 / 52, '4,180 ÷ 52 = 80.4.', 1),
  N('p', 'Two estimates of a quantity are 80 and 82. The relative gap (to one decimal) is', gap(80, 82), '2 ÷ 80 = 2.5%.', 1, pc),
  T('p', 'A result from your estimate is 30% away from every option. What should you do?', 'Recheck the problem set-up', ['Pick the nearest option', 'Round more', 'Ignore it'], 'A large mismatch usually means an error in the set-up, not in rounding.')
];
build(ch31, q31);

// ============ Chapter 32: time triage and question selection ============
const ch32 = spec({ n: 32, id: 'y4-strat-time-triage', title: 'Time Triage and Question Selection',
  tag: 'Classifying questions at first glance and spending time where marks per minute are highest',
  over: 'Triage means sorting questions by how quickly they will pay marks. At a first glance, a question is quick (under 45 seconds), medium (about 90 seconds) or long (over two minutes). Marks per minute decide the order: all quick questions first, then medium, then long ones with whatever time remains. Triage turns a section from a sequence of questions into a time budget.',
  place: 'Sectional timers in online tests make triage the biggest strategic lever.',
  real: 'Prioritising tasks by value per unit time is the same skill.',
  obj: ['Classify a question at first glance', 'Compute marks per minute', 'Plan a section as a time budget', 'Choose the order of attempt', 'Leave questions that fail the time test'],
  pre: ['Time-Bound Quantitative Drills', 'Option Elimination Strategies'],
  refresh: 'Marks per minute = marks ÷ minutes. A question is worth attempting while its marks per minute exceeds your average.',
  defs: ['Triage: sorting by priority.', 'Quick question: under 45 seconds.', 'Marks per minute: marks ÷ time.', 'Budget: total time split across questions.', 'First pass: the quick and medium questions.'],
  intu: 'Every question costs time and pays marks; spend time where the rate is highest.',
  mental: 'At first glance tag Q, M or L. Do Q, then M, then L if time remains.',
  formulas: [['Marks per minute', 'Marks ÷ minutes', 'Each question.', 'Priority.', '1 mark in 0.75 min = 1.33'], ['Budget', 'Time = Σ questions × time each', 'Plan.', 'Check.', '12 × 45 s'], ['Time left', 'Total − used', 'Mid-section.', 'Adjust.', '40 − 20'], ['Average time', 'Time ÷ questions', 'Plan.', 'Pace.', '2,400 ÷ 30'], ['Skip rule', 'Time > 2 × average', 'Any.', 'Discipline.', '> 160 s']],
  narr: ['Take a 40-minute section with 30 questions: 12 quick (45 s), 10 medium (90 s) and 8 long (150 s). Quick items take 9 minutes, medium 15 minutes, long 20 minutes: a total of 44 minutes, which is 4 over. Skip about two long questions.', 'Marks per minute: a quick question gives 1 ÷ 0.75 = 1.33 marks per minute; a medium one 0.67; a long one 0.4.', 'If a long question has already used 4 minutes, its marks per minute has dropped to 0.25; leave it.', 'Plan checkpoints: after 10 minutes, the quick questions should be done.', 'If you finish the first pass early, spend time on the long questions you marked.'],
  deep: [['Equal marks assumption', 'If questions carry different marks, use marks per minute with the actual marks.'], ['Sectional timers', 'You cannot carry time from one section to another; plan each section separately.']],
  vars: [['First glance', 'Tag the type.', 'Q, M, L'], ['Rate', 'Marks per minute.', '1.33'], ['Budget', 'Sum of times.', '44 minutes'], ['Skip', 'Over twice average.', '> 160 s'], ['Second pass', 'Return.', 'Long questions']],
  ex: [
    { t: 'Marks per minute', q: 'A question gives 1 mark and takes 45 seconds. Marks per minute?', g: ['1 mark', '45 s'], c: 'Marks over minutes.', s: [['Minutes', '45 s = 0.75 min.'], ['Rate', '1 ÷ 0.75 = 1.33.']], a: '1.33', w: 'Higher is better.', tr: 'Using seconds.' },
    { t: 'Budget', q: '12 quick questions at 45 seconds each take how long?', g: ['12 × 45 s'], c: 'Multiply.', s: [['Seconds', '540.'], ['Minutes', '9.']], a: '9 minutes', w: 'Plan before starting.', tr: 'Forgetting conversion.' },
    { t: 'Skip', q: 'The average time per question is 80 seconds. When should you consider skipping?', g: ['Average 80 s'], c: 'Twice the average.', s: [['Threshold', '2 × 80 = 160 s.'], ['Action', 'Skip after about 160 s.']], a: 'After about 160 seconds', w: 'Time is a budget.', tr: 'Never skipping.' }
  ],
  short: { title: 'Q, M, L', trad: 'Go in order.', fast: 'Tag at first glance, do quick questions first, then medium, then long if time remains.', rules: ['Tag first.', 'Marks per minute.', 'Budget the section.', 'Skip at 2 × average.'] },
  mist: [['Going in order', 'Easy marks left at the end.', 'Triage first.'], ['Over-investing in a long question', 'Time lost.', 'Skip at 2 × average.'], ['Not planning a budget', 'Late panic.', 'Add up the plan.']],
  tips: { sec: 10, elim: 'Mark long questions and return.', adv: 'Practise tagging on mock tests.', ins: 'Good triage is invisible: the section just feels calm.' },
  rev: ['Tagging.', 'Rate.', 'Budget.', 'Skip.', 'Second pass.'],
  qf: ['Rate = marks ÷ minutes'],
  take: ['Tag.', 'Rate.', 'Budget.', 'Return.'],
  self: ['Can I tag at a glance?', 'Can I compute marks per minute?', 'Can I plan a budget?']
});
const q32 = [
  N('e', 'A question worth 1 mark takes 45 seconds. Its marks per minute (to two decimals) is', 1 / 0.75, '1 ÷ 0.75 = 1.33.', 2),
  N('e', '12 quick questions at 45 seconds each take (minutes)', 12 * 45 / 60, '540 s = 9 minutes.'),
  N('e', '10 medium questions at 90 seconds each take (minutes)', 10 * 90 / 60, '900 s = 15 minutes.'),
  N('e', '8 long questions at 150 seconds each take (minutes)', 8 * 150 / 60, '1,200 s = 20 minutes.'),
  N('e', 'A 40-minute section has 30 questions. The average time per question (seconds) is', 2400 / 30, '2,400 ÷ 30 = 80.'),
  N('e', 'A question worth 1 mark takes 90 seconds. Its marks per minute (two decimals) is', 1 / 1.5, '1 ÷ 1.5 = 0.67.', 2),
  N('m', 'The plan of 12 quick, 10 medium and 8 long questions takes how many minutes in all?', 9 + 15 + 20, '9 + 15 + 20 = 44.'),
  N('m', 'The plan takes 44 minutes but only 40 are available. The minutes to cut are', 4, '44 − 40 = 4.'),
  N('m', 'Skipping long questions (150 s each) to save 4 minutes needs skipping at least how many?', Math.ceil(240 / 150), '240 ÷ 150 = 1.6, so 2 questions.'),
  N('m', 'A long question worth 1 mark takes 150 seconds. Its marks per minute (two decimals) is', 1 / 2.5, '1 ÷ 2.5 = 0.4.', 1),
  N('m', 'A question has used 4 minutes with no result. If it were solved now, 1 mark per 4 minutes gives marks per minute of', 0.25, '1 ÷ 4 = 0.25.', 2),
  N('m', 'After 20 minutes of a 40-minute section, 12 questions are done. The time left per remaining question (18 left, seconds, one decimal) is', 1200 / 18, '1,200 ÷ 18 = 66.7.', 1),
  N('m', 'A section has 25 questions in 30 minutes. The average time per question (seconds) is', 1800 / 25, '1,800 ÷ 25 = 72.'),
  N('m', 'The threshold to consider skipping a question, if the average is 80 seconds and the rule is twice the average (seconds), is', 160, '2 × 80 = 160.'),
  N('p', 'A section has 30 questions in 45 minutes. If 12 quick questions take 9 minutes, the minutes left for the other 18 questions are', 45 - 9, '45 − 9 = 36.'),
  N('p', 'With 36 minutes for 18 questions, the average time per question (seconds) is', 36 * 60 / 18, '2,160 ÷ 18 = 120.'),
  N('p', 'Questions carry 1 mark (45 s), 2 marks (150 s) and 3 marks (300 s). Marks per minute for the 3-mark question is', 3 / 5, '3 ÷ 5 min = 0.6.', 1),
  N('p', 'For the 2-mark question in the previous item, marks per minute (to one decimal) is', 2 / 2.5, '2 ÷ 2.5 = 0.8.', 1),
  N('p', 'With the rates 1.33, 0.8 and 0.6, the question to attempt first has marks per minute of', 1.33, 'The 1-mark, 45-second question has the highest rate, 1.33.', 2),
  T('p', 'A 1-mark question is taking 3 minutes. The best action is', 'Skip and return later if time remains', ['Continue until solved', 'Guess at random without reading', 'Restart the section'], 'Its marks per minute has fallen to 0.33, below the average of the section.')
];
build(ch32, q32);

// ============ Chapter 33: strategic question selection ============
const ch33 = spec({ n: 33, id: 'y4-strat-question-selection', title: 'Strategic Question Selection',
  tag: 'Choosing which questions to attempt using chance of success, time cost and marks, including negative marking',
  over: 'Question selection refines triage with probability. Each question has marks, a time cost and a chance that you solve it correctly. Its expected value is chance × marks minus (1 − chance) × penalty, and its value per minute divides that by the time. Attempting questions in descending order of expected value per minute maximises the expected score. The estimates are rough, but the habit of asking "what is my chance?" prevents poor choices.',
  place: 'Sectional-cutoff tests with negative marking reward selective attempts.',
  real: 'Choosing projects by expected payoff per unit effort is the same idea.',
  obj: ['Compute expected marks of a question', 'Include negative marking', 'Compute expected marks per minute', 'Rank questions for attempt', 'Set a minimum confidence for attempting'],
  pre: ['Time Triage and Question Selection'],
  refresh: 'Expected marks = p × m − (1 − p) × n, where p is the chance of being correct, m the marks and n the penalty.',
  defs: ['Chance of success: your estimated probability of being correct.', 'Expected marks: average marks if repeated many times.', 'Penalty: marks lost for a wrong answer.', 'Break-even chance: p where expected marks are zero.', 'Value per minute: expected marks ÷ time.'],
  intu: 'A question is worth attempting when its expected value is positive and its rate is higher than your alternatives.',
  mental: 'Estimate p, compute p × m − (1 − p) × n, divide by minutes, and rank.',
  formulas: [['Expected marks', 'p·m − (1 − p)·n', 'Each question.', 'Value.', '0.6 × 1 − 0.4 × 0.25'], ['Break-even chance', 'n ÷ (m + n)', 'Penalty n.', 'Threshold.', '0.25/1.25 = 20%'], ['Value per minute', 'E ÷ minutes', 'Ranking.', 'Rate.', '0.5 ÷ 0.75'], ['Total expected', 'Σ values', 'Attempt set.', 'Score.', 'Sum'], ['Guess with elimination', 'p = 1/(options left)', 'Guessing.', 'Chance.', '1/2 after 2 removed']],
  narr: ['A question you will get right with probability 0.6, worth 1 mark with a 0.25 penalty: expected marks = 0.6 − 0.4 × 0.25 = 0.5.', 'Break-even chance = 0.25 ÷ 1.25 = 20%. Attempt whenever your chance exceeds 20%.', 'A question with p = 0.9 taking 45 seconds has expected value 0.9 − 0.025 = 0.875, a rate of 1.17 per minute.', 'A question with p = 0.5 taking 150 seconds: expected 0.5 − 0.125 = 0.375, rate 0.15 per minute.', 'Rank by rate: attempt the first before the second.'],
  deep: [['Calibration', 'Your estimated p is often too high; track your actual accuracy on mocks.'], ['Penalty-free sections', 'If there is no penalty, attempt every question; the break-even chance is 0.']],
  vars: [['Expected marks', 'p, m, n.', '0.5'], ['Break-even', 'Threshold.', '20%'], ['Rate', 'Per minute.', '1.17'], ['Ranking', 'Order.', 'Highest first'], ['Guessing', 'Elimination.', '50%']],
  ex: [
    { t: 'Expected marks', q: 'p = 0.6, marks 1, penalty 0.25. Expected marks?', g: ['0.6', '1', '0.25'], c: 'p·m − (1 − p)·n.', s: [['Gain', '0.6 × 1 = 0.6.'], ['Loss', '0.4 × 0.25 = 0.1; E = 0.5.']], a: '0.5', w: 'Positive, so attempt.', tr: 'Ignoring the penalty.' },
    { t: 'Break-even', q: 'Marks 1, penalty 0.25. Break-even chance?', g: ['1', '0.25'], c: 'n ÷ (m + n).', s: [['Formula', '0.25 ÷ 1.25.'], ['Result', '20%.']], a: '20%', w: 'Attempt above 20%.', tr: 'Taking 25%.' },
    { t: 'Rate', q: 'Expected marks 0.875 in 45 seconds. Rate per minute?', g: ['0.875', '0.75 min'], c: 'Divide.', s: [['Convert', '45 s = 0.75 min.'], ['Rate', '0.875 ÷ 0.75 = 1.17.']], a: '1.17', w: 'Higher rate first.', tr: 'Using seconds.' }
  ],
  short: { title: 'Chance, marks, minutes', trad: 'Try every question.', fast: 'Estimate p, compute expected marks and rate, and attempt in descending order of rate.', rules: ['E = pm − (1 − p)n.', 'Break-even n/(m + n).', 'Rank by rate.', 'No penalty: attempt all.'] },
  mist: [['Overestimating p', 'Too many risky attempts.', 'Calibrate on mocks.'], ['Ignoring the penalty', 'Wrong E.', 'Include n.'], ['Forgetting time', 'Rate ignored.', 'Divide by minutes.']],
  tips: { sec: 15, elim: 'Eliminate to raise p.', adv: 'Track your accuracy per topic.', ins: 'Your honest p is the key input.' },
  rev: ['Expected marks.', 'Break-even.', 'Rate.', 'Rank.', 'Calibrate.'],
  qf: ['E = pm − (1 − p)n'],
  take: ['Estimate p.', 'Include penalty.', 'Rate.', 'Rank.'],
  self: ['Can I compute E?', 'Can I find break-even?', 'Can I rank by rate?']
});
const ev = (p, m, n) => p * m - (1 - p) * n;
const q33 = [
  N('e', 'p = 0.6, marks 1, penalty 0.25. The expected marks are', ev(0.6, 1, 0.25), '0.6 × 1 − 0.4 × 0.25 = 0.5.', 2),
  N('e', 'p = 0.8, marks 1, penalty 0.25. The expected marks are', ev(0.8, 1, 0.25), '0.8 − 0.05 = 0.75.', 2),
  N('e', 'With marks 1 and penalty 0.25, the break-even chance (as a percentage) is', 0.25 / 1.25 * 100, '0.25 ÷ 1.25 = 20%.', 0, pc),
  N('e', 'p = 0.5, marks 2, penalty 0.5. The expected marks are', ev(0.5, 2, 0.5), '1 − 0.25 = 0.75.', 2),
  N('e', 'p = 0.25, marks 1, penalty 0.25. The expected marks are', ev(0.25, 1, 0.25), '0.25 − 0.1875 = 0.0625.', 4),
  N('e', 'With no penalty, p = 0.3 and marks 1, the expected marks are', 0.3, '0.3 × 1 = 0.3.', 1),
  N('m', 'p = 0.9, marks 1, penalty 0.25. The expected marks (three decimals) are', ev(0.9, 1, 0.25), '0.9 − 0.025 = 0.875.', 3),
  N('m', 'Expected marks 0.875 in 45 seconds give a rate per minute of (two decimals)', 0.875 / 0.75, '0.875 ÷ 0.75 = 1.17.', 2),
  N('m', 'p = 0.5, marks 1, penalty 0.25, time 150 seconds. The expected marks are', ev(0.5, 1, 0.25), '0.5 − 0.125 = 0.375.', 3),
  N('m', 'The rate for the previous question (expected marks per minute, two decimals) is', 0.375 / 2.5, '0.375 ÷ 2.5 = 0.15.', 2),
  N('m', 'With marks 4 and penalty 1, the break-even chance (%) is', 1 / 5 * 100, '1 ÷ 5 = 20%.', 0, pc),
  N('m', 'Guessing among 4 options with 2 eliminated, the chance of being right (%) is', 50, '1 ÷ 2 = 50%.', 0, pc),
  N('m', 'With 2 options eliminated, marks 1 and penalty 0.25, the expected marks of guessing are', ev(0.5, 1, 0.25), '0.5 − 0.125 = 0.375.', 3),
  N('m', 'Guessing among 4 options with none eliminated, marks 1, penalty 0.25: the expected marks are', ev(0.25, 1, 0.25), '0.25 − 0.1875 = 0.0625.', 4),
  N('p', 'Questions A (p 0.9, 45 s) and B (p 0.5, 150 s), marks 1, penalty 0.25. The rate of A (per minute, two decimals) is', ev(0.9, 1, 0.25) / 0.75, '0.875 ÷ 0.75 = 1.17.', 2),
  N('p', 'The rate of question B (per minute, two decimals) is', ev(0.5, 1, 0.25) / 2.5, '0.375 ÷ 2.5 = 0.15.', 2),
  T('p', 'Which question should be attempted first, A (rate 1.17) or B (rate 0.15)?', 'A', ['B', 'Both together', 'Neither'], 'A has the higher expected marks per minute.'),
  N('p', 'A section has five questions each with p = 0.6, marks 1 and penalty 0.25. The total expected marks are', 5 * ev(0.6, 1, 0.25), '5 × 0.5 = 2.5.', 1),
  N('p', 'If your real accuracy is 0.5 instead of 0.6 on those five questions, the total expected marks are', 5 * ev(0.5, 1, 0.25), '5 × 0.375 = 1.875.', 3),
  N('p', 'With marks 3 and penalty 1, a question with p = 0.5 has expected marks of', ev(0.5, 3, 1), '1.5 − 0.5 = 1.', 1)
];
build(ch33, q33);
