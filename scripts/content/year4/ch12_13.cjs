const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T } = require('./q.cjs');
const { permutations } = require('../year3/puzzleLib.cjs');
const base = { year: 4, cat: 'lr', category: 'Advanced Logical Reasoning', url: 'https://www.indiabix.com/logical-reasoning/' };

// ===== knights and knaves (computed by trying all 32 assignments) =====
const names = ['A', 'B', 'C', 'D', 'E'];
const stm = {
  A: [(w) => w.B && w.C, 'B and C are both knights.'],
  B: [(w) => !w.A, 'A is a knave.'],
  C: [(w) => w.D, 'D is a knight.'],
  D: [(w) => !w.E, 'E is a knave.'],
  E: [(w) => names.slice(0, 4).filter((n) => !w[n]).length >= 2, 'At least two of A, B, C and D are knaves.']
};
const ksols = [];
for (let m = 0; m < 32; m++) { const w = {}; names.forEach((n, i) => { w[n] = !!((m >> i) & 1); }); if (names.every((n) => stm[n][0](w) === w[n])) ksols.push(w); }
if (ksols.length !== 1) throw new Error('knights not unique ' + ksols.length);
const K = ksols[0];
const kn = names.filter((n) => K[n]);
const KI = 'On an island each person is either a knight (always tells the truth) or a knave (always lies). Five islanders make these statements:\n' + names.map((n) => `${n}: "${stm[n][1]}"`).join('\n');
const kT = (s) => `${KI}\n\n${s}`;
const kS = `Testing all possible assignments, only one is consistent: ${names.map((n) => `${n} is a ${K[n] ? 'knight' : 'knave'}`).join(', ')}`;
// ===== queue puzzle (solved by trying all 720 orders) =====
const people = ['P', 'Q', 'R', 'S', 'T', 'U'];
const qc = [
  ['P stands somewhere before Q.', (p) => p.P < p.Q],
  ['S stands immediately after P.', (p) => p.S === p.P + 1],
  ['T does not stand next to Q.', (p) => Math.abs(p.T - p.Q) !== 1],
  ['U stands immediately after Q.', (p) => p.U === p.Q + 1],
  ['T stands somewhere before S.', (p) => p.T < p.S],
  ['Exactly one person stands between P and Q.', (p) => Math.abs(p.P - p.Q) === 2],
  ['R stands last in the queue.', (p) => p.R === 6]
];
const qs = [];
for (const q of permutations(people)) { const p = {}; q.forEach((x, i) => { p[x] = i + 1; }); if (qc.every((c) => c[1](p))) qs.push(q); }
if (qs.length !== 1) throw new Error('queue not unique ' + qs.length);
const Q = qs[0], qp = {};
Q.forEach((x, i) => { qp[x] = i + 1; });
const QI = 'Six people P, Q, R, S, T and U stand in a queue (position 1 is the front). The following facts are known:\n' + qc.map((c, i) => `${i + 1}. ${c[0]}`).join('\n');
const qT = (s) => `${QI}\n\n${s}`;
const qS = `The queue from the front is ${Q.join(', ')}`;
const near = (v) => [v + 1, v - 1, v + 2].map((x) => (x < 0 ? v + 3 : x));

const ch12 = C({ ...base, n: 12, id: 'y4-mrm-high-diff-logic', title: 'High-Difficulty Logic Sets',
  tag: 'Truth-teller puzzles, queue orderings with conditionals and other puzzles that need systematic case testing',
  over: 'High-difficulty logic sets are solved by systematic case testing rather than inspiration. Knights-and-knaves puzzles, orderings with conditional rules and constraint puzzles with several negative clues all have small search spaces: five speakers have only 32 truth assignments and six people only 720 orders. The skill is to prune the search with the strongest clues and to test the surviving cases completely.',
  place: 'These are the hardest logic items in company reasoning sections; solving one correctly can decide a cutoff.',
  real: 'Debugging a system with several contradictory reports uses the same case-by-case reasoning.',
  obj: ['Model statements as true or false for each speaker', 'Test cases systematically and prune early', 'Handle conditional clues (if… then…)', 'Combine ordering clues with gap and adjacency clues', 'Verify the final answer against every statement'],
  pre: ['Multi-Constraint Logic Puzzles', 'Statements and Conclusions'],
  refresh: 'A knight\'s statement is true; a knave\'s statement is false. A conditional "if p then q" is false only when p is true and q is false.',
  defs: ['Knight: always tells the truth.', 'Knave: always lies.', 'Consistent assignment: every statement has the truth value its speaker requires.', 'Conditional clue: if p then q.', 'Pruning: discarding cases that break a clue early.'],
  intu: 'A puzzle with a small number of possible worlds can be solved by checking worlds, just more cleverly than checking all.',
  mental: 'Pick the speaker whose statement refers to the fewest others, assume knight, follow the consequences, and then test the other case.',
  formulas: [['Assignments', '2ⁿ for n speakers', 'Truth cases.', 'Search size.', '5 speakers: 32'], ['Knight rule', 'Statement true ⇔ speaker is a knight', 'Each statement.', 'Consistency.', 'A says "B and C are knights"'], ['Conditional', 'p → q false only if p true, q false', 'If-then clues.', 'Logic.', 'If P before Q …'], ['Gap clue', 'Positions differ by k + 1', 'Orderings.', 'Count.', 'One between: 2'], ['Verify', 'All clues true', 'End.', 'Safety.', 'No clue broken']],
  narr: ['Five islanders speak. A says B and C are both knights; B says A is a knave; C says D is a knight; D says E is a knave; E says at least two of A, B, C, D are knaves. Suppose A is a knight: then B is a knight, so A is a knave, a contradiction. So A is a knave. B says A is a knave, which is true, so B is a knight. A\'s statement is false, so B and C are not both knights; B is a knight, so C is a knave. C\'s statement is false, so D is a knave. D\'s statement is false, so E is a knight. Check E: A, C and D are knaves, so at least two knaves: true.', 'For the queue: R is last. P is before Q with exactly one person between them, S immediately after P and U immediately after Q. So the pattern P S Q U (positions k to k + 3) fits. T must be before S and not next to Q: T is first.', 'The order is T, P, S, Q, U, R. Check: T not next to Q ✓, T before S ✓, one person (S) between P and Q ✓.', 'Whenever a case leads to a contradiction, discard it completely rather than patch it.', 'Finish by reading every statement against the final answer.'],
  deep: [['Start from the most constrained speaker', 'A statement about one other person gives the quickest consequences.'], ['Contradiction as information', 'Showing that "A is a knight" is impossible proves A is a knave.']],
  vars: [['Knights and knaves', 'Test cases.', 'Five islanders'], ['Queue with gaps', 'Chains and gaps.', 'Six people'], ['Conditional clues', 'If-then.', 'P before Q'], ['Negative clues', 'Not adjacent.', 'T and Q'], ['Verification', 'All statements.', 'Final order']],
  ex: [
    { t: 'Contradiction', q: 'A says "B and C are both knights" and B says "A is a knave". Can A be a knight?', g: ['A, B'], c: 'Assume knight.', s: [['If A is a knight', 'B is a knight, so B\'s statement "A is a knave" is true: A is a knave.'], ['Result', 'Contradiction, so A is a knave.']], a: 'No, A is a knave', w: 'The assumption leads to a contradiction.', tr: 'Stopping at the first assumption.' },
    { t: 'Gap and chain', q: 'P is before Q with exactly one person between, S is immediately after P, U immediately after Q. What is the pattern?', g: ['Gap of one'], c: 'Chain the clues.', s: [['P and S', 'P S adjacent.'], ['Then Q', 'Q is two after P, so P S Q, then U: P S Q U.']], a: 'P S Q U', w: 'S fills the gap.', tr: 'Placing S elsewhere.' },
    { t: 'Verify', q: 'The queue is T, P, S, Q, U, R. Is T next to Q?', g: ['Positions 1 and 4'], c: 'Compare positions.', s: [['Positions', 'T is 1st and Q is 4th.'], ['Gap', 'They are three apart.']], a: 'No', w: 'The clue says T is not next to Q.', tr: 'Not checking.' }
  ],
  short: { title: 'Assume and test', trad: 'Guess the answer.', fast: 'Assume the most constrained speaker is a knight, follow consequences, and test the other case if a contradiction appears.', rules: ['Test cases fully.', 'Contradiction rules out a case.', 'Chain gaps and adjacency.', 'Verify all clues.'] },
  mist: [['Stopping before a contradiction appears', 'False solution.', 'Follow consequences to the end.'], ['Patching a failing case', 'Wrong logic.', 'Discard it.'], ['Forgetting a clue', 'Wrong order.', 'Tick every clue.']],
  tips: { sec: 240, elim: 'Options that break one clue are out.', adv: 'Write the cases in a small table.', ins: 'A puzzle with a unique answer always yields to case testing.' },
  rev: ['Assignments.', 'Contradiction.', 'Conditionals.', 'Gaps.', 'Verify.'],
  qf: ['2ⁿ cases'],
  take: ['Assume.', 'Follow.', 'Discard.', 'Verify.'],
  self: ['Can I test a case?', 'Can I use contradiction?', 'Can I verify?']
});
const person = (v) => `Person ${v}`;
const q12 = [
  T('e', kT('How many of the five islanders are knights?'), String(kn.length), ['1', '3', '4'], `${kS}; ${kn.length} knights.`),
  T('e', kT('Who is a knight among A, C and E?'), kn.filter((n) => ['A', 'C', 'E'].includes(n)).join('') || 'None', ['A', 'C', 'AC'], `${kS}.`),
  T('e', kT('Is A a knight or a knave?'), 'Knave', ['Knight', 'Cannot be determined', 'Both'], `${kS}.`),
  T('e', qT('Who stands first in the queue?'), Q[0], people.filter((x) => x !== Q[0]).slice(0, 3), `${qS}.`),
  T('e', qT('Who stands last in the queue?'), Q[5], people.filter((x) => x !== Q[5]).slice(0, 3), `${qS}.`),
  T('e', qT('Who stands in the third position?'), Q[2], people.filter((x) => x !== Q[2]).slice(1, 4), `${qS}.`),
  T('m', kT('Which of the following is a knave?'), 'D', ['B', 'E', 'No one'], `${kS}; D is a knave.`),
  T('m', kT('Which pair are both knights?'), 'B and E', ['A and B', 'C and D', 'A and E'], `${kS}; the knights are B and E.`),
  T('m', kT('E says at least two of A, B, C, D are knaves. How many of them are knaves?'), '3', ['2', '4', '1'], `${kS}; A, C and D are knaves: 3.`),
  T('m', qT('Who stands between P and Q?'), Q[qp.P], people.filter((x) => x !== Q[qp.P]).slice(0, 3), `${qS}; ${Q[qp.P]} is between them.`.replace('S is between', 'S is between')),
  N('m', qT('How many people stand behind Q?'), 6 - qp.Q, `${qS}; ${6 - qp.Q} people stand behind Q.`),
  T('m', qT('Who stands immediately before Q?'), Q[qp.Q - 2], people.filter((x) => x !== Q[qp.Q - 2]).slice(0, 3), `${qS}.`),
  T('m', qT('Who stands immediately after U?'), Q[qp.U], people.filter((x) => x !== Q[qp.U]).slice(0, 3), `${qS}.`),
  N('m', qT('What is the position of S from the front?'), qp.S, `${qS}; S is ${qp.S}rd.`.replace('3rd', '3rd')),
  T('p', kT('How many of the following statements are true: A\'s, C\'s and D\'s?'), '0', ['1', '2', '3'], `A, C and D are knaves, so all three statements are false: 0 true.`),
  T('p', kT('If B were actually a knave and spoke the same words, which would be wrong?'), 'A would be a knight', ['A would be a knave', 'C would be a knight', 'Nothing changes'], 'B\'s statement "A is a knave" would then be false, so A would be a knight, which changes the puzzle.'),
  N('p', qT('How many people stand between T and R?'), qp.R - qp.T - 1, `${qS}; T is at 1 and R at 6: ${qp.R - qp.T - 1} between.`),
  T('p', qT('Who stands exactly in the middle two positions (third and fourth)?'), `${Q[2]} and ${Q[3]}`, [`${Q[1]} and ${Q[2]}`, `${Q[3]} and ${Q[4]}`, `${Q[0]} and ${Q[5]}`], `${qS}.`),
  N('p', qT('If P and U exchange places, what is U\'s new position from the front?'), qp.P, `${qS}; P is at ${qp.P}, so U moves to position ${qp.P}.`),
  N('p', qT('How many people stand between S and U?'), qp.U - qp.S - 1, `${qS}; S is ${qp.S}rd and U ${qp.U}th: ${qp.U - qp.S - 1} between.`)
];
build(ch12, q12);

// ================= Chapter 13: time-bound reasoning drills =================
const ch13 = C({ ...base, n: 13, id: 'y4-mrm-time-bound-drills', title: 'Time-Bound Reasoning Drills',
  tag: 'Short reasoning items to be done in 30–45 seconds, and a method for pacing a reasoning section',
  over: 'In a timed reasoning section, quick items (series, odd-one-out, ranks, directions, coding, simple relations) should take 30–45 seconds each, leaving the saved time for puzzles. This chapter is a drill of such items, together with a simple pacing method: classify each question on a first glance, do the quick ones first, and mark puzzles for a second pass.',
  place: 'Online reasoning sections give about a minute per question on average; quick items bank time for the long puzzles.',
  real: 'Triage under time pressure is a general workplace skill.',
  obj: ['Solve quick items in under 45 seconds', 'Classify a question at first glance', 'Use two passes through a section', 'Estimate time left per remaining question', 'Avoid over-investing in one puzzle'],
  pre: ['Mixed Reasoning Assessment Sets'],
  refresh: 'Time per remaining question = time left ÷ questions left.',
  defs: ['Quick item: solvable in under 45 seconds.', 'Pass: one run through the section.', 'Triage: deciding which questions to do now.', 'Checkpoint: a planned time for progress review.', 'Time budget: total seconds divided by questions.'],
  intu: 'The score comes from marks per minute. Quick items have the highest marks per minute.',
  mental: 'On the first glance classify: quick, medium, puzzle. Do quick ones, then medium, then puzzles with the time left.',
  formulas: [['Time per question', 'Total ÷ questions', 'Plan.', 'Pace.', '2,700 s ÷ 30'], ['Time left per question', 'Remaining time ÷ remaining questions', 'Mid-section.', 'Adjust.', '600 ÷ 8'], ['Series', 'Differences, ratios', 'Series.', 'Quick.', '3, 7, 11, 15'], ['Rank', 'Left + right − 1', 'Rank.', 'Quick.', '12 and 29'], ['Direction', 'Net north/east', 'Walks.', 'Quick.', '6 N, 8 E']],
  narr: ['A section of 30 questions in 45 minutes gives 90 seconds each. Quick items should take 30–45 seconds, which saves 45–60 seconds on each.', 'Do a first pass: quick items and medium items. Mark puzzles with more than five clues for the second pass.', 'At the 30-minute mark, suppose 8 questions remain and 15 minutes are left: 900 ÷ 8 = 112 seconds each.', 'If a puzzle has gone past about 3 minutes with no progress, leave it and return.', 'Practise quick items daily until they take under 40 seconds.'],
  deep: [['Marks per minute', 'Quick items earn the same marks as hard ones in a fraction of the time.'], ['Second pass', 'Puzzles returned to later often look simpler after a break.']],
  vars: [['Series', 'Differences.', '3, 7, 11'], ['Ranks', 'Totals.', 'Left + right − 1'], ['Directions', 'Net distance.', '6 N, 8 E'], ['Pacing', 'Time per question.', '90 s'], ['Triage', 'Classify.', 'Quick, medium, puzzle']],
  ex: [
    { t: 'Pace', q: 'A section has 30 questions in 45 minutes. Average time per question?', g: ['30', '45 min'], c: 'Seconds ÷ questions.', s: [['Seconds', '45 × 60 = 2,700.'], ['Pace', '2,700 ÷ 30 = 90 s.']], a: '90 seconds', w: 'Quick items need less.', tr: 'Dividing minutes by questions.' },
    { t: 'Mid-section', q: '15 minutes remain for 8 questions. Time per question?', g: ['900 s', '8'], c: 'Time left ÷ questions left.', s: [['Convert', '15 minutes = 900 seconds.'], ['Divide', '900 ÷ 8 = 112.5 s.']], a: '112.5 seconds', w: 'More than the plan, so do not rush.', tr: 'Ignoring the saved time.' },
    { t: 'Series', q: 'Find the next term: 3, 7, 11, 15, ?', g: ['Differences 4'], c: 'Common difference.', s: [['Difference', '7 − 3 = 4.'], ['Next', '15 + 4 = 19.']], a: '19', w: 'Constant difference.', tr: 'Taking 20.' }
  ],
  short: { title: 'Quick first', trad: 'Go in order.', fast: 'Classify at first glance; do quick items first; return to puzzles with the time saved.', rules: ['Quick under 45 s.', 'Two passes.', 'Leave puzzles after 3 minutes.', 'Recompute pace mid-section.'] },
  mist: [['Starting with the hardest puzzle', 'Time sink.', 'Quick first.'], ['Never checking the clock', 'Late panic.', 'Checkpoints.'], ['Polishing a quick item', 'Wasted seconds.', 'Move on.']],
  tips: { sec: 40, elim: 'Eliminate two options fast, then decide.', adv: 'Practise timed drills daily.', ins: 'Speed on quick items funds the puzzles.' },
  rev: ['Pace.', 'Triage.', 'Quick types.', 'Two passes.', 'Checkpoints.'],
  qf: ['Time left ÷ questions left'],
  take: ['Quick first.', 'Two passes.', 'Check the clock.', 'Leave stuck items.'],
  self: ['Can I compute my pace?', 'Can I triage at a glance?', 'Can I leave a stuck puzzle?']
});
const q13 = [
  N('e', 'What comes next: 3, 7, 11, 15, ?', 19, 'The common difference is 4, so the next term is 15 + 4 = 19.'),
  N('e', 'What comes next: 2, 4, 8, 16, ?', 32, 'Each term doubles, so 16 × 2 = 32.'),
  N('e', 'In a row of 30, a boy is 9th from the left. His rank from the right is', 30 - 9 + 1, '30 − 9 + 1 = 22.'),
  N('e', 'A section has 30 questions in 45 minutes. The time per question is (seconds)', 90, '2,700 ÷ 30 = 90.'),
  N('e', 'A man walks 3 km north and 4 km east. His distance from the start is (km)', 5, '√(9 + 16) = 5.'),
  T('e', 'Odd one out: Mango, Apple, Potato, Banana', 'Potato', ['Mango', 'Apple', 'Banana'], 'Potato is a vegetable; the others are fruits.'),
  N('m', 'What comes next: 1, 4, 9, 16, 25, ?', 36, 'Squares: 6² = 36.'),
  N('m', '15 minutes remain for 8 questions. The time per question is (seconds)', 900 / 8, '900 ÷ 8 = 112.5.', 1),
  T('m', 'If CAT = 24 (3 + 1 + 20) in a code where letters equal positions, then DOG equals', '26', ['24', '27', '30'], 'D = 4, O = 15, G = 7: 4 + 15 + 7 = 26.'),
  N('m', 'A is 5th from the top and 10th from the bottom. The number of students is', 14, '5 + 10 − 1 = 14.'),
  T('m', 'If the day before yesterday was Friday, today is', 'Sunday', ['Saturday', 'Monday', 'Thursday'], 'Day before yesterday Friday → yesterday Saturday → today Sunday.'),
  N('m', 'What comes next: 5, 10, 20, 40, ?', 80, 'Each term doubles, so 40 × 2 = 80.'),
  T('m', 'Mirror image of the time 3:15 on a clock is', '8:45', ['9:15', '8:15', '9:45'], '12:00 − 3:15 = 8:45.'),
  N('m', 'A man faces north, turns 90° right and then 90° right again. He now faces which direction? (answer: 1 = N, 2 = E, 3 = S, 4 = W)', 3, 'North → East → South, so South (3).'),
  N('p', 'What comes next: 2, 6, 12, 20, 30, ?', 42, 'Terms are n(n + 1): 6 × 7 = 42.'),
  N('p', '20 minutes remain, and the remaining 10 questions include 4 puzzles. If quick items take 60 seconds each, the seconds left per puzzle are', (1200 - 6 * 60) / 4, '1,200 − 360 = 840; 840 ÷ 4 = 210.'),
  T('p', 'Pointing to a man, a woman says, "He is the son of my mother\'s only child." The man is her', 'Son', ['Brother', 'Nephew', 'Cousin'], 'Her mother\'s only child is herself, so the man is her son.'),
  N('p', 'How many triangles are there in a figure formed by joining the three vertices of a triangle to a point inside it? (count all)', 4, 'Three small triangles plus the outer triangle: 4.'),
  N('p', 'A clock shows 6:00. The angle between the hands is (degrees)', 180, 'At 6:00 the hands are opposite, so the angle is 180°.'),
  N('p', 'What comes next: 1, 3, 6, 10, 15, ?', 21, 'Triangular numbers: the differences are 2, 3, 4, 5, so add 6 to get 21.')
];
build(ch13, q13);
