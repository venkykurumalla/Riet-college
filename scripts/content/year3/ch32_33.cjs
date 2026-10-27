const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { ord, puzzle, others } = require('./puzzleLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// Generic question factory for one-to-one orderings. cfg: intro, order summary prefix, labelOf(i), nextWord/prevWord.
function ordQs(Pz, cfg) {
  const T = (s) => `${cfg.intro}\n${Pz.text}\n\n${s}`;
  const S = `${cfg.summary} ${Pz.seat.join(', ')}`;
  const n = Pz.n;
  const L = (x) => cfg.labelOf(Pz.pos[x]);
  const numNear = (k, lo, hi) => { const o = []; for (const d of [1, -1, 2, -2, 3]) { const v = k + d; if (v >= lo && v <= hi && !o.includes(v) && o.length < 3) o.push(v); } return o; };
  return {
    who: (i, label, sk) => ({ q: T(`${cfg.whoAt(label)}`), c: Pz.seat[i], w: others(Pz.people, Pz.seat[i], sk), e: `${S}, so ${Pz.seat[i]} is the answer.` }),
    when: (x, sk) => { const l = L(x); const wr = cfg.numeric ? numNear(l, 1, n) : others(cfg.labels, l, sk); return { q: T(cfg.whichLabel(x)), c: l, w: wr, e: `${S}, so ${x} is ${cfg.labelPhrase(l)}.` }; },
    next: (x, sk) => { const a = Pz.seat[Pz.pos[x] + 1]; return { q: T(cfg.nextQ(x)), c: a, w: others(Pz.people, a, sk), e: `${S}, so ${a} comes right after ${x}.` }; },
    prev: (x, sk) => { const a = Pz.seat[Pz.pos[x] - 1]; return { q: T(cfg.prevQ(x)), c: a, w: others(Pz.people, a, sk), e: `${S}, so ${a} comes right before ${x}.` }; },
    between: (x, y) => { const k = Math.abs(Pz.pos[x] - Pz.pos[y]) - 1; return { q: T(cfg.betweenQ(x, y)), c: k, w: [k + 1, k + 2, k + 3], e: `${S}; ${x} and ${y} are ${k + 1} places apart, so ${k} ${cfg.unit(k)} between them, which is ${k}.` }; },
    after: (x) => { const k = n - 1 - Pz.pos[x]; return { q: T(cfg.afterQ(x)), c: k, w: [k + 1, k + 2, Math.max(k - 1, 0) === k ? k + 3 : Math.max(k - 1, 0)], e: `${S}, so ${k} ${k === 1 ? 'comes' : 'come'} after ${x}, which is ${k}.` }; },
    swap: (x, y, z, sk) => { const seat = Pz.seat.slice(); const i = seat.indexOf(x), j = seat.indexOf(y); [seat[i], seat[j]] = [seat[j], seat[i]]; const a = seat[seat.indexOf(z) + 1]; return { q: T(cfg.swapQ(x, y, z)), c: a, w: others(Pz.people, a, sk), e: `${S}. After ${x} and ${y} exchange places the order is ${seat.join(', ')}, so ${a} comes right after ${z}.` }; }
  };
}

// ---------------- Chapter 32: box stacks ----------------
const colours = ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black', 'Pink'];
const B = ord([1, 2, 3, 4, 5, 6, 7], {
  at: (x, l) => `The ${x} box is placed ${l}${['', 'st', 'nd', 'rd'][l] || 'th'} from the top.`, notAt: (x, l) => `The ${x} box is not placed ${l}${['', 'st', 'nd', 'rd'][l] || 'th'} from the top.`,
  first: (x) => `The ${x} box is at the top of the stack.`, last: (x) => `The ${x} box is at the bottom of the stack.`,
  before: (x, y) => `The ${x} box is placed somewhere above the ${y} box.`, immBefore: (x, y) => `The ${x} box is placed immediately above the ${y} box.`,
  gap: (x, y, k) => `Exactly ${k} ${k === 1 ? 'box is' : 'boxes are'} placed between the ${x} box and the ${y} box.`,
  adj: (x, y) => `The ${x} box is placed next to the ${y} box.`, notAdj: (x, y) => `The ${x} box is not placed next to the ${y} box.`
});
const bp1 = puzzle(colours, [B.last('Blue'), B.immBefore('White', 'Blue'), B.at('Yellow', 3), B.immBefore('Black', 'Yellow'), B.gap('Green', 'Yellow', 2), B.immBefore('Red', 'Black')]);
const bp2 = puzzle(colours, [B.first('Pink'), B.gap('Pink', 'Red', 2), B.immBefore('Red', 'Green'), B.last('Yellow'), B.adj('Blue', 'Yellow'), B.before('Black', 'White')]);
const bp3 = puzzle(colours, [B.at('Black', 3), B.gap('Blue', 'Black', 2), B.last('White'), B.immBefore('Yellow', 'Red'), B.immBefore('Black', 'Pink'), B.before('Green', 'White')]);
const ord1 = (k) => `${k}${['', 'st', 'nd', 'rd'][k] || 'th'}`;
const boxCfg = (Pz) => ({
  intro: 'Seven boxes coloured Red, Blue, Green, Yellow, White, Black and Pink are stacked one above the other in a single stack. The following facts are known:',
  summary: 'From the top of the stack to the bottom the boxes are',
  labelOf: (i) => i + 1, numeric: true, labels: [1, 2, 3, 4, 5, 6, 7],
  whoAt: (l) => `Which box is placed ${ord1(l)} from the top?`,
  whichLabel: (x) => `The ${x} box is placed at which position from the top?`,
  labelPhrase: (l) => `${ord1(l)} from the top`,
  nextQ: (x) => `Which box is placed immediately below the ${x} box?`, prevQ: (x) => `Which box is placed immediately above the ${x} box?`,
  betweenQ: (x, y) => `How many boxes are placed between the ${x} box and the ${y} box?`, unit: (k) => (k === 1 ? 'box lies' : 'boxes lie'),
  afterQ: (x) => `How many boxes are placed below the ${x} box?`,
  swapQ: (x, y, z) => `If the ${x} box and the ${y} box exchange places, which box is placed immediately below the ${z} box?`
});
const b1 = ordQs(bp1, boxCfg()), b2 = ordQs(bp2, boxCfg()), b3 = ordQs(bp3, boxCfg());
const ch32 = C({
  n: 32, id: 'y3-lr-box-puzzles', cat: 'lr', title: 'Box-Stack Arrangement Puzzles',
  tag: 'Stacks of boxes: above and below, gaps, top and bottom anchors and counting questions',
  url: 'https://www.indiabix.com/logical-reasoning/seating-arrangement/',
  over: 'A box-stack puzzle describes a vertical pile of boxes and asks for the order from top to bottom. It is a one-dimensional ordering like a row or a building, with vocabulary changed: above, below, immediately above, top, bottom, and "exactly k boxes between". The same rules solve it: fix top and bottom anchors, chain immediate neighbours, convert gap clues to a difference of k + 1, and use negative clues last.',
  place: 'Box and stack puzzles appear regularly in logical-reasoning sets, often with six to eight boxes and several colours.',
  real: 'Warehouse stacking, pallet loading and layered packing follow an order of this kind.',
  obj: ['Translate above/below into position numbers', 'Chain immediate neighbours', 'Use top and bottom anchors', 'Convert gap clues to a difference of k + 1', 'Answer counting and exchange questions'],
  pre: ['Floor-Based Arrangement Puzzles'],
  refresh: 'Position 1 is the top and position 7 the bottom. "Above" means a smaller position number.',
  defs: [
    'Top of the stack: position 1. Bottom: position n.',
    'Immediately above X: the position number one less than X\'s.',
    'Exactly k boxes between X and Y: their positions differ by k + 1.',
    'Next to X: immediately above or immediately below.',
    'Boxes below X: n minus X\'s position.'
  ],
  intu: 'Treat the stack as a numbered list from the top. Every clue is a statement about two position numbers.',
  mental: 'Write positions 1 to 7. Place top and bottom, join immediate neighbours into blocks, fit blocks using the gap clues, and verify.',
  formulas: [
    ['Gap clue', '|p(X) − p(Y)| = k + 1', 'k boxes between.', 'Gaps.', '2 between: differ by 3'],
    ['Immediately above', 'p(X) = p(Y) − 1', 'Adjacent.', 'Chains.', 'White above Blue'],
    ['Boxes below', 'n − p(X)', 'Counting.', 'Counts.', 'Position 3 of 7: 4 below'],
    ['Boxes between', '|p(X) − p(Y)| − 1', 'Counting.', 'Counts.', 'Positions 1 and 4: 2'],
    ['Next to', 'Differ by 1', 'Adjacent.', 'Neighbour clues.', 'Blue next to Yellow']
  ],
  narr: [
    'Seven boxes are stacked. The Blue box is at the bottom; the White box is immediately above Blue; the Yellow box is fourth from the top; the Black box is immediately above Yellow; exactly two boxes lie between the Green box and the Yellow box; the Red box is immediately above Black. From the bottom: Blue 7, White 6, Yellow 4, Black 3, Red 2. Green is two boxes away from Yellow, so Green is at position 1 (the position below, 7, is taken). Pink takes the last place, 5. The stack from the top is Green, Red, Black, Yellow, Pink, White, Blue.',
    'An "above" clue says only that one box has a smaller number than the other. An "immediately above" clue fixes the exact neighbour. Use the exact clues to build blocks first, then place blocks by the weaker clues.',
    'The gap clue is arithmetic. Two boxes with exactly two boxes between them have positions that differ by 3, such as 1 and 4 or 2 and 5.',
    'Counting questions use the finished stack: boxes below X = 7 minus X\'s position; boxes between X and Y = difference of positions minus 1.',
    'For exchange questions, write the stack again, swap the two named boxes, and read the neighbour asked about.'
  ],
  deep: [['Blocks', 'A chain such as Red–Black–Yellow behaves like one long box; slide it along the list until all clues fit.'], ['Top vs bottom language', 'Check whether the question counts from the top or the bottom; mixing them gives an off-by-one answer.']],
  vars: [['Top/bottom anchors', 'Fix the ends.', 'Blue at the bottom'], ['Chains', 'Immediate neighbours.', 'White above Blue'], ['Gap clues', 'Difference k + 1.', 'Green and Yellow'], ['Counting below', 'n − p.', 'Boxes below Red'], ['Exchange', 'Swap then read.', 'If Pink and Red swap']],
  ex: [
    { t: 'Gap clue', q: 'Exactly two boxes lie between the Green box and the Yellow box. If Yellow is fourth from the top, which positions can Green take?', g: ['Yellow at 4', '2 between'], c: 'Difference 3.', s: [['Difference', '2 between means the positions differ by 3.'], ['Positions', '4 − 3 = 1 or 4 + 3 = 7.']], a: '1st or 7th', w: 'Other clues decide which one.', tr: 'Using a difference of 2.' },
    { t: 'Counting below', q: 'In the stack Green, Red, Black, Yellow, Pink, White, Blue (top to bottom), how many boxes are below the Black box?', g: ['Black is 3rd'], c: 'n − p.', s: [['Position', 'Black is 3rd from the top.'], ['Below', '7 − 3 = 4 boxes.']], a: '4', w: 'Yellow, Pink, White, Blue.', tr: 'Answering 3.' },
    { t: 'Neighbour', q: 'In the same stack, which box is immediately below the Yellow box?', g: ['Yellow is 4th'], c: 'Read the next position.', s: [['Position', 'Yellow is 4th from the top.'], ['Next', 'The 5th box is Pink.']], a: 'Pink', w: 'Immediately above is Black.', tr: 'Answering Black.' }
  ],
  short: { title: 'Numbered list', trad: 'Try arrangements.', fast: 'Number the stack, place anchors, make blocks, convert gaps to differences of k + 1.', rules: ['Top = 1.', 'Gap = k + 1.', 'Blocks first.', 'Verify.'] },
  mist: [['Treating above as immediately above', 'Too strict.', 'Check the word immediately.'], ['Counting from the wrong end', 'Off-by-one.', 'Top = 1.'], ['Using k instead of k + 1', 'Gap error.', 'Differ by k + 1.']],
  tips: { sec: 150, elim: 'Cross out used positions.', adv: 'Build blocks before using weaker clues.', ins: 'Always verify the final stack against each clue.' },
  rev: ['Number positions.', 'Anchors.', 'Blocks.', 'Gap clues.', 'Counting.'],
  qf: ['Gap = k + 1', 'Below = n − p'],
  take: ['Number the stack.', 'Blocks.', 'Gap arithmetic.', 'Verify.'],
  self: ['Can I convert gaps?', 'Can I build blocks?', 'Can I count boxes below?']
});
const q32 = [E(b1.who(0, 1, 1)), E(b1.who(6, 7, 2)), E(b1.when('Yellow')), E(b1.next('Red', 1)), E(b1.prev('White', 2)), E(b1.after('Black')),
  M(b2.who(0, 1, 1)), M(b2.who(4, 5, 2)), M(b2.when('Green')), M(b2.next('Black', 3)), M(b2.between('Pink', 'Red')), M(b2.after('Red')), M(b2.prev('Yellow', 1)), M(b2.swap('Pink', 'Red', 'Black', 2)),
  P(b3.who(0, 1, 1)), P(b3.who(5, 6, 2)), P(b3.when('Pink')), P(b3.between('Blue', 'Black')), P(b3.swap('Blue', 'White', 'Yellow', 2)), P(b3.after('Red'))];
build(ch32, q32);

// ---------------- Chapter 33: scheduling ----------------
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const people = ['Anita', 'Bharat', 'Chitra', 'Deepak', 'Eshan', 'Fatima', 'Girish'];
const D = ord(days, {
  at: (x, l) => `${x} has the meeting on ${l}.`, notAt: (x, l) => `${x} does not have the meeting on ${l}.`,
  first: (x) => `${x} has the meeting on Monday.`, last: (x) => `${x} has the meeting on Sunday.`,
  before: (x, y) => `${x}'s meeting is earlier in the week than ${y}'s.`, immBefore: (x, y) => `${x}'s meeting is on the day immediately before ${y}'s.`,
  gap: (x, y, k) => `Exactly ${k} ${k === 1 ? 'day lies' : 'days lie'} between the meetings of ${x} and ${y}.`,
  adj: (x, y) => `The meetings of ${x} and ${y} are on consecutive days.`, notAdj: (x, y) => `The meetings of ${x} and ${y} are not on consecutive days.`
});
const sp1 = puzzle(people, [D.first('Chitra'), D.last('Fatima'), D.at('Eshan', 3), D.immBefore('Girish', 'Eshan'), D.before('Anita', 'Girish'), D.before('Bharat', 'Deepak')]);
const sp2 = puzzle(people, [D.at('Girish', 3), D.gap('Deepak', 'Girish', 2), D.immBefore('Fatima', 'Bharat'), D.last('Chitra'), D.immBefore('Eshan', 'Chitra'), D.immBefore('Anita', 'Eshan')]);
const sp3 = puzzle(people, [D.at('Chitra', 3), D.gap('Eshan', 'Chitra', 2), D.last('Deepak'), D.immBefore('Fatima', 'Bharat'), D.before('Anita', 'Chitra'), D.before('Girish', 'Anita')]);
const schedCfg = {
  intro: 'Seven employees Anita, Bharat, Chitra, Deepak, Eshan, Fatima and Girish each have exactly one meeting with the manager, on different days from Monday to Sunday (one meeting per day, in that order). The following facts are known:',
  summary: 'From Monday to Sunday the meetings are held by', labels: days,
  labelOf: (i) => days[i],
  whoAt: (l) => `Whose meeting is on ${l}?`, whichLabel: (x) => `On which day is ${x}'s meeting?`, labelPhrase: (l) => `on ${l}`,
  nextQ: (x) => `Whose meeting is on the day immediately after ${x}'s?`, prevQ: (x) => `Whose meeting is on the day immediately before ${x}'s?`,
  betweenQ: (x, y) => `How many days lie between the meetings of ${x} and ${y}?`, unit: (k) => (k === 1 ? 'day lies' : 'days lie'),
  afterQ: (x) => `How many meetings are held after ${x}'s?`,
  swapQ: (x, y, z) => `If ${x} and ${y} exchange their days, whose meeting is on the day immediately after ${z}'s?`
};
const s1 = ordQs(sp1, schedCfg), s2 = ordQs(sp2, schedCfg), s3 = ordQs(sp3, schedCfg);
const ch33 = C({
  n: 33, id: 'y3-lr-scheduling-puzzles', cat: 'lr', title: 'Scheduling and Day-Assignment Puzzles',
  tag: 'Assigning people or tasks to days: before/after, consecutive days, gaps and exclusions',
  url: 'https://www.indiabix.com/logical-reasoning/seating-arrangement/',
  over: 'A scheduling puzzle assigns events to the days of a week. Each day gets one event and each event one day, so it is again a one-to-one ordering with the days as fixed positions. New features are the named anchors (Monday is the first, Sunday the last), the phrase "consecutive days", and exclusion clues such as "not on Friday". The method is the usual one: anchors, chains, gap arithmetic, exclusions last.',
  place: 'Scheduling sets with seven days are among the commonest arrangement puzzles in written tests.',
  real: 'Timetables, shift rosters and appointment calendars use the same one-per-slot logic.',
  obj: ['Treat days as numbered positions', 'Chain consecutive-day clues', 'Convert "k days between" into a difference of k + 1', 'Apply exclusion clues', 'Answer count and exchange questions'],
  pre: ['Box-Stack Arrangement Puzzles'],
  refresh: 'Monday is day 1 and Sunday day 7 in this chapter. "Earlier in the week" means a smaller day number.',
  defs: [
    'Consecutive days: day numbers that differ by 1.',
    'Immediately before: the day with the number one less.',
    'k days between: day numbers differ by k + 1.',
    'Exclusion clue: "not on Friday" removes one option for one person.',
    'One-to-one: every day has exactly one event.'
  ],
  intu: 'The week is a row of seven slots. Each clue ties two people to slot numbers, so you are solving the same ordering problem as before.',
  mental: 'Write Monday to Sunday as 1 to 7. Place the day-named anchors, build chains, fit the gaps, apply exclusions, and verify.',
  formulas: [
    ['Gap clue', '|d(X) − d(Y)| = k + 1', 'k days between.', 'Gaps.', '2 days between: differ by 3'],
    ['Immediately before', 'd(X) = d(Y) − 1', 'Consecutive.', 'Chains.', 'Girish the day before Eshan'],
    ['Meetings after X', '7 − d(X)', 'Counting.', 'Counts.', 'Thursday: 3 after'],
    ['Days between', '|d(X) − d(Y)| − 1', 'Counting.', 'Counts.', 'Monday and Thursday: 2'],
    ['Exclusion', 'Cross one day off', 'Elimination.', 'Last.', 'Not on Friday']
  ],
  narr: [
    'Take seven employees and the clues: Chitra on Monday, Fatima on Sunday, Eshan on Thursday, Girish the day before Eshan, Anita earlier in the week than Girish, Bharat earlier than Deepak. Start with the day anchors: Chitra 1, Fatima 7, Eshan 4. Girish is immediately before Eshan, so Girish is day 3. Anita is earlier than Girish and the only free earlier day is 2, so Anita is Tuesday. Bharat and Deepak take days 5 and 6 with Bharat earlier: Friday and Saturday.',
    'A "not on" clue is a tie-breaker. Use it only after the main structure leaves two options.',
    '"Consecutive days" does not say which comes first, so it gives two possibilities. Test both against the other clues.',
    'For gap clues, "exactly two days between" means a difference of 3 days. If one is on Thursday (day 4), the other is on Monday or Sunday.',
    'For exchange questions, write the week again, swap the two named people and read the answer from the new week.'
  ],
  deep: [['Consecutive vs immediately before', '"Consecutive" is symmetric; "immediately before" fixes the order.'], ['Week boundaries', 'Do not wrap from Sunday to Monday unless the problem says the schedule is cyclic.']],
  vars: [['Day anchors', 'Named days.', 'Chitra on Monday'], ['Chains', 'Immediate neighbours.', 'Girish–Eshan'], ['Gap clues', 'Difference k + 1.', 'Deepak and Girish'], ['Exclusions', 'Eliminate.', 'Not on Friday'], ['Counting after', '7 − day.', 'Meetings after Eshan']],
  ex: [
    { t: 'Chain', q: 'Eshan has the meeting on Thursday and Girish\'s meeting is on the day immediately before Eshan\'s. On which day is Girish\'s meeting?', g: ['Eshan on Thursday'], c: 'Immediately before.', s: [['Read the clue', 'Girish\'s day is exactly one day earlier than Eshan\'s Thursday.'], ['Day before', 'The day before Thursday is Wednesday.']], a: 'Wednesday', w: 'Immediately before fixes the order.', tr: 'Answering Friday.' },
    { t: 'Gap clue', q: 'Exactly two days lie between the meetings of Deepak and Girish. If Girish\'s meeting is on Thursday, on which days can Deepak\'s be?', g: ['Girish on Thursday'], c: 'Difference 3.', s: [['Difference', '2 between means 3 days apart.'], ['Days', 'Thursday − 3 = Monday and Thursday + 3 = Sunday.']], a: 'Monday or Sunday', w: 'Other clues pick one.', tr: 'Using 2 days apart.' },
    { t: 'Counting after', q: 'In the week Chitra, Anita, Girish, Eshan, Bharat, Deepak, Fatima (Monday to Sunday), how many meetings are held after Eshan\'s?', g: ['Eshan on Thursday'], c: '7 − day.', s: [['Day number', 'Eshan is day 4.'], ['After', '7 − 4 = 3 meetings.']], a: '3', w: 'Bharat, Deepak, Fatima.', tr: 'Answering 4.' }
  ],
  short: { title: 'Week as numbers', trad: 'Try assignments.', fast: 'Number the days 1 to 7, place the named anchors, then chains, then gaps, then exclusions.', rules: ['Gap = k + 1.', 'Anchors first.', 'Exclusions last.', 'Verify.'] },
  mist: [['Treating consecutive as ordered', 'Missing the other order.', 'Test both orders.'], ['Wrapping around the week', 'Sunday does not meet Monday.', 'Use 1–7 only.'], ['Using k instead of k + 1', 'Gap error.', 'Differ by k + 1.']],
  tips: { sec: 150, elim: 'Strike out each day as you assign it.', adv: 'Use exclusion clues only at the end.', ins: 'Day-named clues are free anchors.' },
  rev: ['Number the days.', 'Anchors.', 'Chains.', 'Gap arithmetic.', 'Exclusions.'],
  qf: ['Gap = k + 1', 'After = 7 − d'],
  take: ['Days as numbers.', 'Anchors.', 'Gap arithmetic.', 'Verify.'],
  self: ['Can I place named-day anchors?', 'Can I convert gaps?', 'Can I count meetings after a day?']
});
const q33 = [E(s1.who(0, 'Monday')), E(s1.who(6, 'Sunday', 2)), E(s1.when('Anita', 1)), E(s1.next('Eshan', 1)), E(s1.prev('Eshan', 2)), E(s1.after('Girish')),
  M(s2.who(0, 'Monday', 1)), M(s2.who(3, 'Thursday', 2)), M(s2.when('Fatima', 1)), M(s2.next('Fatima', 2)), M(s2.between('Deepak', 'Girish')), M(s2.after('Anita')), M(s2.prev('Chitra', 1)), M(s2.swap('Deepak', 'Bharat', 'Fatima', 2)),
  P(s3.who(0, 'Monday', 1)), P(s3.who(5, 'Saturday', 2)), P(s3.when('Anita', 2)), P(s3.between('Girish', 'Chitra')), P(s3.swap('Eshan', 'Girish', 'Anita', 2)), P(s3.after('Fatima'))];
build(ch33, q33);
