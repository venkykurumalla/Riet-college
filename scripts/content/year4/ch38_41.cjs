const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'rec', category: 'Recruiter / Assessment Preparation', url: 'https://www.indiabix.com/aptitude/' };
const spec = (o) => C({ ...base, ...o });
const ev = (p, m, n) => p * m - (1 - p) * n;
const NOTE = 'All figures and rules in this chapter\'s examples are hypothetical teaching examples and are not the rules of any real company or platform; always read the official instructions.';

// ============ Chapter 38: online assessment platforms ============
const ch38 = spec({ n: 38, id: 'y4-rec-online-assessments', title: 'Online Assessment Platforms (TCS iON, AMCAT)',
  tag: 'How timed online tests behave: timers, navigation, review marks, auto-submit and what to check in the official demo',
  over: 'Employers commonly use third-party online platforms (TCS iON and AMCAT are two well-known names) to run aptitude tests. Each platform has its own interface and each employer configures its own rules, so this chapter does not describe any platform\'s specific pattern. It teaches what features to look for in an official demo or instruction page: whether the timer is sectional or overall, whether you can go back, whether answers can be marked for review, what happens at time-out, and how the calculator or rough work is handled. ' + NOTE,
  place: 'Familiarity with the interface removes avoidable errors and saves seconds on every question.',
  real: 'Any new software is easier if you read its documentation and try a demo first.',
  obj: ['List the features to verify in an official demo', 'Plan around sectional versus overall timers', 'Use mark-for-review and navigation sensibly', 'Understand auto-submit at time-out', 'Prepare the device and connection in advance'],
  pre: ['Recruiter and Assessment Patterns'],
  refresh: 'The pattern and interface are set by the employer and platform; the official instructions override anything you have heard.',
  defs: ['Sectional timer: each section has its own clock.', 'Overall timer: one clock for the whole test.', 'Mark for review: a flag to revisit a question.', 'Auto-submit: the test ends when time runs out.', 'Demo: an official practice interface.'],
  intu: 'An interface is a set of rules about time and navigation; know them and you stop fighting the tool.',
  mental: 'Before the test: take the official demo, note timer type, navigation and what the review flag does.',
  formulas: [['Time plan', 'Minutes × 60 ÷ questions', 'Each section.', 'Pace.', '25 min, 20 questions'], ['Review budget', 'Reserve ~5–10% of time for review', 'Overall timer.', 'Plan.', '4.5 of 45 min'], ['Connection check', 'Test device and network early', 'Prep.', 'Safety.', 'The day before'], ['Auto-submit', 'Answers present at time-out count', 'If rules say so.', 'Read rules.', 'Check instruction'], ['Demo checklist', 'Timer, navigation, review flag, calculator', 'Always.', 'Preparation.', 'Four items']],
  narr: ['Suppose the (hypothetical) rules say: overall timer of 45 minutes, free navigation, review flag allowed, auto-submit at time-out. With free navigation you can follow a two-pass plan and use the last 5 minutes for flagged questions.', 'If the timer is sectional with no return, plan each section as a closed block and do not leave time for review in other sections.', 'If an on-screen calculator is provided, practise with it; if not, practise rough work on paper.', 'Check your device, power and network the day before and keep the instructions page open to read the official rules.', 'Whatever the platform, follow the exact instructions on the day.'],
  deep: [['Review flag', 'A flag only helps you find a question again; it does not change the answer.'], ['Time-out behaviour', 'Check whether unanswered questions are scored zero or penalised.']],
  vars: [['Overall timer', 'One clock.', '45 min'], ['Sectional timers', 'Per section.', '25, 20, 20'], ['Navigation', 'Back allowed or not.', 'Free'], ['Review flag', 'Revisit.', 'Mark'], ['Demo', 'Practice interface.', 'Official']],
  ex: [
    { t: 'Pace', q: '(Hypothetical) A section has 20 questions in 25 minutes. Time per question?', g: ['20', '25 min'], c: 'Seconds ÷ questions.', s: [['Seconds', '25 × 60 = 1,500.'], ['Per question', '75 s.']], a: '75 seconds', w: 'Plan from the rules.', tr: 'Ignoring conversion.' },
    { t: 'Review budget', q: 'With a 45-minute overall timer you keep 10% for review. Minutes for review?', g: ['45', '10%'], c: 'Percent of total.', s: [['Convert', '10% = 0.1.'], ['Compute', '0.1 × 45 = 4.5 minutes.']], a: '4.5 minutes', w: 'Plan before the test.', tr: 'Forgetting review.' },
    { t: 'Sectional timer', q: 'If the timer is sectional with no return, can unused time in Section 1 be used in Section 2?', g: ['Sectional timer'], c: 'Read the rule.', s: [['Rule', 'Each section has its own clock.'], ['Result', 'No, it cannot.']], a: 'No', w: 'Plan per section.', tr: 'Assuming it carries over.' }
  ],
  short: { title: 'Demo first', trad: 'Learn on the day.', fast: 'Take the official demo, note timer, navigation and review rules, and plan around them.', rules: ['Official source.', 'Timer type.', 'Navigation.', 'Check the device.'] },
  mist: [['Not reading the instructions', 'Rule surprises.', 'Read them fully.'], ['Assuming time carries over', 'Wasted time.', 'Check the timer type.'], ['Late device check', 'Technical trouble.', 'Test the day before.']],
  tips: { sec: 30, elim: 'Use the review flag for doubtful questions.', adv: 'Practise on the official demo.', ins: 'Rules differ by employer and platform.' },
  rev: ['Timers.', 'Navigation.', 'Review.', 'Auto-submit.', 'Demo.'],
  qf: ['Pace = minutes × 60 ÷ questions'],
  take: ['Demo.', 'Timer type.', 'Review plan.', 'Device ready.'],
  self: ['Can I list what to verify?', 'Can I plan around a timer?', 'Can I prepare my device?']
});
const q38 = [
  N('e', '(Hypothetical) A section has 20 questions in 25 minutes. The time per question is (seconds)', 75, '1,500 ÷ 20 = 75.'),
  N('e', 'A section has 30 questions in 45 minutes. The time per question is (seconds)', 90, '2,700 ÷ 30 = 90.'),
  T('e', 'Which is the most reliable source for the rules of a particular test?', 'The official instructions or demo from the employer or platform', ['A friend\'s memory', 'A social-media post', 'The rules of a different company'], 'Rules differ and change; only the official source is reliable.'),
  T('e', 'If the timer is sectional with no return, unused time in one section', 'cannot be used in another section', ['carries over automatically', 'is added to the final section', 'is refunded as marks'], 'A sectional timer gives each section its own clock.'),
  N('e', 'A 45-minute test with 10% kept for review leaves how many minutes for the first pass?', 45 * 0.9, '45 × 0.9 = 40.5.', 1),
  T('e', 'A "mark for review" flag is mainly used to', 'find the question again later', ['change the answer automatically', 'delete the question', 'add marks'], 'The flag only helps you navigate back.'),
  N('m', 'The minutes kept for review in a 45-minute test (10%) are', 4.5, '0.1 × 45 = 4.5.', 1),
  N('m', 'A test has sections of 25, 20 and 20 minutes. The total time (minutes) is', 65, '25 + 20 + 20 = 65.'),
  N('m', 'A section has 25 questions in 20 minutes. The time per question is (seconds)', 48, '1,200 ÷ 25 = 48.'),
  T('m', 'With an overall timer and free navigation, a sensible plan is to', 'do easy questions first and return to flagged ones', ['answer strictly in order', 'leave the first section blank', 'spend equal time on every question'], 'Free navigation allows a two-pass plan.'),
  N('m', 'With 30 questions and an overall timer of 45 minutes, the question number you should have reached after 15 minutes at the planned pace is', 10, '900 ÷ 90 = 10.'),
  T('m', 'When should you test your device and network?', 'Well before the test day', ['During the test', 'After the first section', 'Only if a problem appears'], 'Advance testing avoids avoidable technical trouble.'),
  N('m', '3 flagged questions at 60 seconds each take how many minutes to revisit?', 3, '3 × 60 = 180 s = 3 minutes.'),
  T('m', 'If the instructions say there is no on-screen calculator, you should', 'practise calculations by hand and with rough work', ['expect one to appear', 'ask a neighbour', 'ignore the rule'], 'Plan for the rules given.'),
  N('p', 'A candidate keeps 5 minutes of a 45-minute overall timer for review. The pace for 30 questions in the remaining time is (seconds)', 40 * 60 / 30, '2,400 ÷ 30 = 80.'),
  N('p', 'If the candidate instead uses the full 45 minutes, the pace is (seconds)', 90, '2,700 ÷ 30 = 90.'),
  T('p', 'Auto-submit at time-out means', 'the test ends and your answers at that moment are submitted, as the rules describe', ['you may continue after time', 'all questions are cancelled', 'only flagged questions count'], 'Read the exact rule in the instructions.'),
  T('p', 'Which is NOT something to verify in an official demo?', 'The names of other candidates', ['Timer type', 'Navigation rules', 'How review flags work'], 'Candidate names are irrelevant.'),
  N('p', 'Each of three sections has 20 questions and 25 minutes. The time per question in each section is (seconds)', 75, 'Each section: 1,500 ÷ 20 = 75 seconds per question.'),
  T('p', 'If you are told the test uses a particular platform, the pattern is', 'still set by the employer and may differ from other tests on the same platform', ['always identical', 'published by a rival', 'fixed for all years'], 'Employers configure tests; check the official notice.')
];
build(ch38, q38);

// ============ Chapter 39: company-wise assessment profiles ============
const ch39 = spec({ n: 39, id: 'y4-rec-company-profiles', title: 'Company-Wise Assessment Profiles',
  tag: 'Building your own one-page profile for each employer from official sources, and comparing profiles quantitatively',
  over: 'Different employers use different assessments, and they change them. Rather than memorising claims about companies, build your own one-page profile for each employer you are applying to: stages, sections, questions, time, penalty, cutoff stated in official material, and the skills each stage tests. A profile lets you compare employers, plan your preparation time and track what you still need to confirm. This chapter uses hypothetical profiles to teach the comparison; ' + NOTE,
  place: 'Targeted preparation is more efficient than generic preparation once you know what each employer tests.',
  real: 'Preparing for an interview by researching the organisation is the same habit.',
  obj: ['List the fields of an assessment profile', 'Compare two profiles by pace and marks per minute', 'Allocate preparation time by weight', 'Identify what remains unconfirmed', 'Update profiles when official information changes'],
  pre: ['Recruiter and Assessment Patterns', 'Online Assessment Platforms'],
  refresh: 'A profile records facts from official sources; unverified items are marked "to confirm".',
  defs: ['Profile: a one-page summary of an assessment.', 'Stage: one step (aptitude test, technical test, interview).', 'Weight: the share of total marks of a section.', 'Unconfirmed: a detail you have not verified.', 'Source: where a fact comes from.'],
  intu: 'A profile turns hearsay into a checklist.',
  mental: 'Write fields, fill from official sources, mark gaps, and compute pace and weight.',
  formulas: [['Pace', 'Time ÷ questions', 'Each section.', 'Compare.', '75 vs 60 s'], ['Weight', 'Section marks ÷ total', 'Allocation.', 'Plan.', '20/60'], ['Marks per minute', 'Total ÷ time', 'Compare employers.', 'Rate.', '0.92'], ['Prep share', 'Weight × prep hours', 'Planning.', 'Allocation.', '33% of 90 h'], ['Gap list', 'Unconfirmed fields', 'Verification.', 'To-do.', 'Penalty?']],
  narr: ['Hypothetical profile X: Aptitude 20 questions, 25 minutes; Reasoning 15, 20 minutes; Verbal 25, 20 minutes; 1 mark each. Profile Y: Aptitude 30, 40 minutes; Reasoning 20, 25 minutes; Verbal 20, 15 minutes.', 'Profile X has 60 questions in 65 minutes (65 ÷ 60 ≈ 1.08 minutes per question); profile Y has 70 in 80 minutes (about 1.14).', 'Weights in X: Aptitude 20/60 = 33%, Reasoning 25%, Verbal 42%.', 'If you have 90 hours of preparation and want to follow weights, give Verbal about 37 hours in X.', 'Mark any field you cannot verify as "to confirm" and ask the recruiter or check the official notice.'],
  deep: [['Profiles go stale', 'Date every profile and re-check before the test.'], ['Preparing for the skill, not the company', 'Core skills transfer between employers; use profiles to prioritise, not to narrow.']],
  vars: [['Pace', 'Per section.', 'X vs Y'], ['Weight', 'Share of marks.', 'Verbal 42%'], ['Prep allocation', 'Hours.', '90 h'], ['Unconfirmed', 'To check.', 'Penalty'], ['Updating', 'Dates.', 'Before the test']],
  ex: [
    { t: 'Weight', q: 'Profile X has 60 marks in total and Verbal has 25 marks. Verbal weight?', g: ['25', '60'], c: 'Part over total.', s: [['Divide', '25 ÷ 60 = 0.417.'], ['Percent', '41.7%.']], a: '41.7%', w: 'Base is total marks.', tr: 'Dividing by 25.' },
    { t: 'Allocation', q: 'You have 90 hours and Verbal is 41.7% of marks. Hours for Verbal?', g: ['90', '41.7%'], c: 'Weight × hours.', s: [['Convert the weight', '41.7% = 0.417.'], ['Multiply', '0.417 × 90 = 37.5 hours.']], a: '37.5 hours', w: 'Weights guide, not fix.', tr: 'Equal split.' },
    { t: 'Gap list', q: 'You do not know whether the test has a penalty. What do you record?', g: ['Unverified field'], c: 'Mark it.', s: [['Record', '"Penalty: to confirm".'], ['Action', 'Check the official notice.']], a: '"To confirm" and check the official notice', w: 'Never assume.', tr: 'Guessing.' }
  ],
  short: { title: 'Profile it', trad: 'Collect rumours.', fast: 'Fill one page per employer from official sources, compute pace and weights, and list unconfirmed fields.', rules: ['Official sources.', 'Date it.', 'Mark unknowns.', 'Allocate by weight.'] },
  mist: [['Relying on old profiles', 'Outdated.', 'Re-check.'], ['Over-narrowing preparation', 'Skills gap.', 'Keep core skills.'], ['Leaving gaps unmarked', 'False confidence.', 'Mark to confirm.']],
  tips: { sec: 20, elim: 'Eliminate unlikely sections after confirmation only.', adv: 'Keep a folder of profiles.', ins: 'The profile is your checklist, not your prediction.' },
  rev: ['Fields.', 'Pace.', 'Weights.', 'Allocation.', 'Gaps.'],
  qf: ['Weight = section marks ÷ total'],
  take: ['Official sources.', 'Weights.', 'Gaps.', 'Update.'],
  self: ['Can I build a profile?', 'Can I compute weights?', 'Can I list gaps?']
});
const q39 = [
  N('e', '(Hypothetical) Profile X has 20, 15 and 25 questions in three sections. The total number of questions is', 60, '20 + 15 + 25 = 60.'),
  N('e', 'Profile X sections take 25, 20 and 20 minutes. The total time is (minutes)', 65, '25 + 20 + 20 = 65.'),
  N('e', 'Verbal has 25 of the 60 marks in X. Its weight is (%, one decimal)', 25 / 60 * 100, '25 ÷ 60 = 41.7%.', 1, pc),
  N('e', 'Aptitude has 20 of 60 marks. Its weight is (%, one decimal)', 20 / 60 * 100, '20 ÷ 60 = 33.3%.', 1, pc),
  N('e', 'Reasoning has 15 of 60 marks. Its weight is (%)', 25, '15 ÷ 60 = 25%.', 0, pc),
  T('e', 'What should you do with a profile field you cannot verify?', 'Mark it as "to confirm" and check the official notice', ['Assume it is the same as another company', 'Delete it', 'Trust a rumour'], 'Never present unverified facts as certain.'),
  N('m', 'Profile Y has 30, 20 and 20 questions. The total questions are', 70, '30 + 20 + 20 = 70.'),
  N('m', 'Profile Y sections take 40, 25 and 15 minutes. The total time (minutes) is', 80, '40 + 25 + 15 = 80.'),
  N('m', 'The minutes per question in X (to two decimals) are', 65 / 60, '65 ÷ 60 = 1.08.', 2),
  N('m', 'The minutes per question in Y (to two decimals) are', 80 / 70, '80 ÷ 70 = 1.14.', 2),
  N('m', 'With 90 hours of preparation, the hours for Verbal at the X weight (41.7%) are (one decimal)', 90 * 25 / 60, '0.417 × 90 = 37.5.', 1),
  N('m', 'The Verbal pace in X (20 minutes, 25 questions, seconds) is', 48, '1,200 ÷ 25 = 48.'),
  N('m', 'The Aptitude pace in Y (40 minutes, 30 questions, seconds, one decimal) is', 2400 / 30, '2,400 ÷ 30 = 80.', 0),
  N('m', 'The Verbal pace in Y (15 minutes, 20 questions, seconds, one decimal) is', 900 / 20, '900 ÷ 20 = 45.', 0),
  T('p', 'Which section of X has the fastest required pace per question?', 'Verbal', ['Aptitude', 'Reasoning', 'All equal'], 'Verbal needs 48 s per question against 75 and 80.'),
  N('p', 'Marks per minute over the whole of X (1 mark per question, two decimals) is', 60 / 65, '60 ÷ 65 = 0.92.', 2),
  N('p', 'Marks per minute over the whole of Y (two decimals) is', 70 / 80, '70 ÷ 80 = 0.88.', 2),
  T('p', 'Which statement is correct about X and Y?', 'X asks for a slightly faster pace overall than Y', ['Y asks for a faster pace', 'They are identical', 'Neither has a pace'], 'X: 0.92 marks per minute; Y: 0.88.'),
  N('p', 'If you split 120 preparation hours in the ratio of weights in X (20 : 15 : 25), the Reasoning hours are', 120 * 15 / 60, '120 × 15 ÷ 60 = 30.'),
  T('p', 'Why should each profile have a date?', 'Patterns change, so you know when to re-check', ['Dates make it official', 'To compare with others', 'There is no reason'], 'Profiles go stale.')
];
build(ch39, q39);

// ============ Chapter 40: platform-specific strategies ============
const ch40 = spec({ n: 40, id: 'y4-rec-platform-strategies', title: 'Platform-Specific Strategies',
  tag: 'Adapting your plan to timer type, navigation rules, review flags and calculator access',
  over: 'A strategy that works on a test with free navigation and an overall timer fails on a test with sectional timers and no return. Platform-specific strategy means choosing your plan after reading the rules: free navigation permits a two-pass plan; no return forces a plan that treats every question as final; a sectional timer needs a separate budget for each section; a calculator changes which questions are quick. This chapter works through these combinations with hypothetical rules; ' + NOTE,
  place: 'Matching strategy to rules is the difference between a prepared and an unprepared candidate.',
  real: 'Choosing a method to fit the constraints of a task is a general skill.',
  obj: ['Choose a plan for each timer and navigation combination', 'Budget each section under sectional timers', 'Decide question order under no-return rules', 'Use calculators wisely', 'Adjust the skipping rule to the platform'],
  pre: ['Online Assessment Platforms', 'Time Triage and Question Selection'],
  refresh: 'Rules decide strategy: free navigation = two passes; no return = decide now; sectional = budget per section.',
  defs: ['Free navigation: you may move back and forth.', 'No return: once you submit or move on, you cannot go back.', 'Sectional timer: a clock per section.', 'Overall timer: one clock.', 'Final answer: an answer you cannot revise.'],
  intu: 'The same questions ask for different tactics under different rules.',
  mental: 'List the rules, then pick: pass structure, skip rule, review budget.',
  formulas: [['Free navigation', 'Two passes', 'Back allowed.', 'Plan.', 'Easy then hard'], ['No return', 'Decide in one pass', 'No back.', 'Plan.', 'Skip = lose'], ['Sectional timer', 'Budget per section', 'Own clocks.', 'Plan.', '25, 20, 20'], ['Calculator', 'Heavy arithmetic becomes quick', 'On-screen calculator.', 'Re-classify.', 'Division quick'], ['Skip rule', 'Twice the pace (free) vs one pace (no return)', 'Platform.', 'Adjust.', '160 s vs 80 s']],
  narr: ['With an overall timer and free navigation, do the quick questions first and return to the hard ones; the skip threshold is about twice your average pace.', 'With no return, skipping a question loses it permanently. The right rule is: attempt every question using elimination, spend more than the average only on questions with a good chance, and never leave a question blank if there is no penalty.', 'With sectional timers, a section left early gains nothing; use the full section time before moving on.', 'With an on-screen calculator, long divisions are quick; without it, prefer questions with simple numbers.', 'In each case read the rule in the official instructions, not in a forum.'],
  deep: [['No return with penalty', 'If skipping is allowed but returning is not, the decision to attempt is made once, using break-even chance.'], ['Time at the end of a section', 'With sectional timers, leftover minutes are best spent re-checking flagged answers within the section.']],
  vars: [['Free + overall', 'Two passes.', 'Skip at 2 × pace'], ['No return', 'One pass.', 'Elimination'], ['Sectional', 'Per-section budget.', '25, 20, 20'], ['Calculator', 'Re-classify.', 'Divisions'], ['Penalty', 'Break-even.', '20%']],
  ex: [
    { t: 'No return', q: 'The (hypothetical) test has no return and no penalty. A question stumps you. What should you do?', g: ['No return', 'No penalty'], c: 'Answer with elimination.', s: [['No penalty', 'A wrong answer costs nothing.'], ['Action', 'Eliminate and choose; do not leave it blank.']], a: 'Answer it using elimination', w: 'Blank earns nothing.', tr: 'Leaving it blank.' },
    { t: 'Sectional budget', q: 'Sections of 25, 20 and 20 minutes with 20, 15 and 25 questions. Which section has the fastest pace?', g: ['Three sections'], c: 'Compute each pace.', s: [['Paces', '75 s, 80 s, 48 s.'], ['Fastest', 'Third section, 48 s.']], a: 'The third section (48 s per question)', w: 'Plan the third as a quick section.', tr: 'Taking the first.' },
    { t: 'Skip threshold', q: 'Average pace 80 s. Skip threshold with free navigation (twice pace)?', g: ['80 s'], c: 'Double.', s: [['Double', '2 × 80.'], ['Threshold', '160 s.']], a: '160 seconds', w: 'You can return later.', tr: 'Using 80 s.' }
  ],
  short: { title: 'Rules first', trad: 'One plan for all.', fast: 'Read the rules, then choose passes, skip rule and review budget to match.', rules: ['Free: two passes.', 'No return: one pass.', 'Sectional: per section.', 'Calculator: re-classify.'] },
  mist: [['Same plan for all rules', 'Mismatch.', 'Re-plan per rule.'], ['Skipping under no return without thought', 'Lost marks.', 'Use elimination.'], ['Leaving time unused in a sectional test', 'Wasted.', 'Use the full clock.']],
  tips: { sec: 20, elim: 'Eliminate before leaving blank when allowed.', adv: 'Practise each rule set.', ins: 'The rules are the strategy.' },
  rev: ['Free.', 'No return.', 'Sectional.', 'Calculator.', 'Skip rule.'],
  qf: ['Skip threshold = 2 × pace (free)'],
  take: ['Rules.', 'Plan.', 'Budget.', 'Practise.'],
  self: ['Can I plan for no return?', 'Can I budget sections?', 'Can I set a skip rule?']
});
const q40 = [
  N('e', 'The (hypothetical) average pace is 80 seconds. The skip threshold with free navigation (twice the pace) is (seconds)', 160, '2 × 80 = 160.'),
  N('e', 'The paces for sections of 25 min/20 q, 20 min/15 q and 20 min/25 q (first, in seconds) is', 75, '1,500 ÷ 20 = 75.'),
  N('e', 'The second section pace (seconds) is', 80, '1,200 ÷ 15 = 80.'),
  N('e', 'The third section pace (seconds) is', 48, '1,200 ÷ 25 = 48.'),
  T('e', 'With free navigation and an overall timer, a good plan is', 'two passes: easy first, then hard', ['strictly in order', 'only hard questions', 'no review'], 'Free navigation allows revisiting.'),
  T('e', 'With no return and no penalty, a question you cannot solve should be', 'answered using elimination', ['left blank', 'skipped permanently', 'solved for ten minutes'], 'A blank earns nothing, a guess might.'),
  T('m', 'With sectional timers, finishing a section early', 'does not give extra time to another section', ['adds time to the next section', 'adds marks', 'ends the test'], 'Each section has its own clock.'),
  N('m', 'With an overall 45-minute timer and 30 questions, the pace is (seconds)', 90, '2,700 ÷ 30 = 90.'),
  N('m', 'With no return, the skip threshold is about one pace (80 s) rather than two; the difference from the free rule (seconds) is', 80, '160 − 80 = 80.'),
  T('m', 'With an on-screen calculator, which question type becomes quicker?', 'Long multi-digit division', ['Reading passages', 'Seating puzzles', 'Idioms'], 'A calculator speeds up arithmetic.'),
  T('m', 'With no calculator provided, you should prefer', 'questions with simple numbers first', ['the longest calculations first', 'guessing all', 'skipping arithmetic entirely'], 'Simple numbers save time without a calculator.'),
  N('m', 'With a penalty of 0.25 and 1 mark, the break-even chance at which to attempt (%) is', 20, '0.25 ÷ 1.25 = 20%.', 0, pc),
  N('m', 'A candidate has 3 minutes left in a sectional test and 5 flagged answers. The time per flagged answer (seconds) is', 36, '180 ÷ 5 = 36.'),
  T('m', 'A flagged question in a no-return test', 'cannot be revisited after the rule takes effect', ['can always be revisited', 'is automatically correct', 'adds time'], 'No return means no revisiting.'),
  N('p', 'With a penalty of 0.25 and 1 mark, a question with chance 0.4 has expected marks of', ev(0.4, 1, 0.25), '0.4 − 0.6 × 0.25 = 0.25.', 2),
  T('p', 'With no return and a penalty of 0.25, you should attempt a question whose chance of success is', 'above 20%', ['above 80%', 'exactly 100%', 'never'], 'The break-even chance is 20%.'),
  N('p', 'A sectional test has 15 minutes for 25 questions. The pace (seconds) is', 900 / 25, '900 ÷ 25 = 36.'),
  T('p', 'With such a fast pace, the best strategy is to', 'answer quick questions and use elimination on the rest', ['solve every question fully', 'leave half blank', 'spend the first five minutes reading'], 'A fast pace demands speed techniques.'),
  N('p', 'With free navigation, a 45-minute test and 5 minutes kept for review, the first-pass time per question for 30 questions (seconds) is', 80, '2,400 ÷ 30 = 80.'),
  T('p', 'Where should you check whether a test has free navigation?', 'The official instructions', ['A forum', 'A friend', 'You can assume it does'], 'Rules vary by test.')
];
build(ch40, q40);

// ============ Chapter 41: sectional cutoff strategies ============
const ch41 = spec({ n: 41, id: 'y4-rec-sectional-cutoffs', title: 'Sectional Cutoff Strategies',
  tag: 'Meeting both sectional and overall cutoffs: allocating effort, computing minimum marks and avoiding a failing section',
  over: 'Some assessments require a minimum score in each section as well as overall. A strong total can then still fail you if one section falls below its cutoff. The strategy is to compute the minimum marks you need in each section, secure them first, and use the remaining effort where your marks per minute are highest. This chapter practises the arithmetic of cutoffs and the logic of balance; ' + NOTE,
  place: 'Sectional cutoffs are common and filter candidates who neglect a weak section.',
  real: 'Meeting minimum requirements in every component is how many qualifications work.',
  obj: ['Compute sectional and overall cutoffs in marks', 'Find the minimum marks needed in the last section', 'Balance effort across sections', 'Avoid failing a section by neglect', 'Check the feasibility of a target'],
  pre: ['Recruiter and Assessment Patterns', 'Strategic Question Selection'],
  refresh: 'Cutoff marks = percentage × section marks. Marks needed in the last section = overall target − marks already earned.',
  defs: ['Sectional cutoff: minimum marks in a section.', 'Overall cutoff: minimum total.', 'Feasibility: whether the target can be met.', 'Balance: avoiding a weak section.', 'Margin: marks above the cutoff.'],
  intu: 'A chain is as strong as its weakest link; a sectional cutoff makes the weakest section decisive.',
  mental: 'Compute each cutoff in marks, secure the weakest section first, and top up elsewhere.',
  formulas: [['Cutoff marks', '% × section marks', 'Each section.', 'Target.', '40% of 20'], ['Needed last', 'Target − earned', 'Final section.', 'Planning.', '36 − 25'], ['Feasible', 'Needed ≤ section marks', 'Check.', 'Reality.', '11 ≤ 25'], ['Margin', 'Earned − cutoff', 'Review.', 'Safety.', '12 − 8'], ['Balance', 'Min over sections', 'Strategy.', 'Weakest.', 'Weakest section']],
  narr: ['Suppose (hypothetically) sections of 20, 15 and 25 marks with a 40% sectional cutoff and a 60% overall cutoff. Sectional cutoffs in marks: 8, 6 and 10; the overall cutoff is 36 of 60.', 'If you earn 14 in Aptitude and 7 in Reasoning, you have 21; you need at least 15 in Verbal to reach 36 (more than the 10 sectional minimum), which is feasible since Verbal has 25 marks.', 'If Reasoning is your weak section, secure its 6 marks first; losing a whole section to a cutoff is worse than losing a few marks elsewhere.', 'Margins help: aim a few marks above each cutoff to absorb mistakes.', 'Recompute after each section.'],
  deep: [['Strategic neglect', 'Skipping a weak section entirely risks failing the sectional cutoff even if the total is high.'], ['Overall target depends on penalties', 'If wrong answers cost marks, count net marks.']],
  vars: [['Sectional marks', 'Percent of section.', '8, 6, 10'], ['Overall', 'Percent of total.', '36'], ['Needed last', 'Subtract.', '15'], ['Margin', 'Above cutoff.', 'A few marks'], ['Feasibility', 'Check.', '15 ≤ 25']],
  ex: [
    { t: 'Cutoff marks', q: 'A 40% sectional cutoff on a 20-mark section is how many marks?', g: ['20', '40%'], c: 'Percent of marks.', s: [['Convert', '40% = 0.4.'], ['Compute', '0.4 × 20 = 8.']], a: '8 marks', w: 'Secure it first.', tr: 'Taking 40.' },
    { t: 'Needed last', q: 'Overall cutoff 36. You have 14 + 7 = 21. Marks needed in the last section?', g: ['36', '21'], c: 'Subtract.', s: [['Difference', '36 − 21.'], ['Result', '15.']], a: '15 marks', w: 'Above the sectional minimum.', tr: 'Taking 36.' },
    { t: 'Feasibility', q: 'The last section has 25 marks and you need 15. Is it feasible?', g: ['15 ≤ 25'], c: 'Compare.', s: [['Needed', '15.'], ['Available', '25; yes, feasible.']], a: 'Yes, it requires 60% of that section', w: '15 ÷ 25 = 60%.', tr: 'Saying impossible.' }
  ],
  short: { title: 'Secure then top up', trad: 'Maximise the total.', fast: 'Compute each cutoff in marks, secure the weakest section first, then top up where your rate is highest.', rules: ['Cutoffs in marks.', 'Weakest first.', 'Keep a margin.', 'Recompute.'] },
  mist: [['Ignoring the sectional cutoff', 'Fail despite total.', 'Compute each.'], ['Neglecting a weak section', 'Fails.', 'Secure its minimum.'], ['No margin', 'Slip fails.', 'Aim a few marks above.']],
  tips: { sec: 20, elim: 'Use elimination to protect minimums.', adv: 'Compute cutoffs before the test.', ins: 'Plan the weakest section first.' },
  rev: ['Cutoffs.', 'Needed.', 'Feasibility.', 'Margin.', 'Balance.'],
  qf: ['Needed = target − earned'],
  take: ['Marks not percents.', 'Weakest first.', 'Margin.', 'Recompute.'],
  self: ['Can I convert cutoffs to marks?', 'Can I compute marks needed?', 'Can I plan a margin?']
});
const q41 = [
  N('e', '(Hypothetical) A 40% sectional cutoff on a 20-mark section is (marks)', 8, '0.4 × 20 = 8.'),
  N('e', 'A 40% cutoff on a 15-mark section is (marks)', 6, '0.4 × 15 = 6.'),
  N('e', 'A 40% cutoff on a 25-mark section is (marks)', 10, '0.4 × 25 = 10.'),
  N('e', 'A 60% overall cutoff on 60 marks is (marks)', 36, '0.6 × 60 = 36.'),
  N('e', 'The total of the sectional cutoffs 8, 6 and 10 is (marks)', 24, '8 + 6 + 10 = 24.'),
  N('e', 'The overall cutoff 36 exceeds the total of the sectional cutoffs by (marks)', 12, '36 − 24 = 12.'),
  N('m', 'You have 14 in Aptitude and 7 in Reasoning. The marks earned so far are', 21, '14 + 7 = 21.'),
  N('m', 'The marks needed in Verbal for an overall 36 are', 15, '36 − 21 = 15.'),
  N('m', 'The percentage of the 25 Verbal marks that 15 represents is', 15 / 25 * 100, '15 ÷ 25 = 60%.', 0, pc),
  N('m', 'The margin in Aptitude above its 8-mark cutoff, with 14 earned, is', 6, '14 − 8 = 6.'),
  N('m', 'The margin in Reasoning above its 6-mark cutoff, with 7 earned, is', 1, '7 − 6 = 1.'),
  T('m', 'Which section is most at risk of failing its sectional cutoff?', 'Reasoning', ['Aptitude', 'Verbal', 'None'], 'Reasoning has the smallest margin: 1 mark.'),
  N('m', 'To build a 3-mark margin in Reasoning, the marks needed there are', 9, '6 + 3 = 9.'),
  N('m', 'If Reasoning rises to 9, the total from the first two sections is', 14 + 9, '14 + 9 = 23.'),
  N('p', 'Then the marks needed in Verbal for 36 are', 36 - 23, '36 − 23 = 13.'),
  T('p', 'If a candidate scores 5 in Reasoning (below the 6 cutoff) and 40 elsewhere, the total is 45; does the candidate meet both the overall (36) and the sectional cutoffs?', 'No, the Reasoning cutoff is missed', ['Yes', 'Only the overall cutoff matters', 'Cannot be decided'], 'A sectional cutoff must be met in each section.'),
  N('p', 'With a penalty of 0.25, 14 correct and 4 wrong in a section give net marks of', 14 - 1, '14 − 1 = 13.'),
  N('p', 'If the cutoff is 13 net marks, the margin is', 0, '13 − 13 = 0.'),
  T('p', 'The best use of an extra 5 minutes is', 'to secure a section close to its cutoff', ['to re-do your strongest section', 'to skip the weak section', 'to ignore cutoffs'], 'Securing a near-failure section protects the result.'),
  N('p', 'If you can add 1 mark per 3 minutes in the weak section, 5 minutes adds about (marks, to one decimal)', 5 / 3, '5 ÷ 3 = 1.7.', 1)
];
build(ch41, q41);
