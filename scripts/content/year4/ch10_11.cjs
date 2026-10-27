const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { permutations, others } = require('../year3/puzzleLib.cjs');
const base = { year: 4, cat: 'lr', category: 'Advanced Logical Reasoning', url: 'https://www.indiabix.com/verbal-reasoning/seating-arrangement/' };
const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ================= Chapter 10: complex multi-row arrangements (3 x 3 grid) =================
// seat index s = 3 * row + col; row 0 is the front row, col 0 is the west end. Everyone faces north (left = west).
const rw = (s) => Math.floor(s / 3), cl = (s) => s % 3;
const rowName = ['front', 'middle', 'back'], colName = ['west end', 'centre', 'east end'];
const G = {
  at: (x, r, c) => ({ t: `${x} sits in the ${rowName[r]} row at the ${colName[c]}.`, f: (p) => p[x] === 3 * r + c }),
  behind: (x, y) => ({ t: `${x} sits directly behind ${y}.`, f: (p) => rw(p[x]) === rw(p[y]) + 1 && cl(p[x]) === cl(p[y]) }),
  immLeft: (x, y) => ({ t: `${x} sits immediately to the left of ${y}.`, f: (p) => rw(p[x]) === rw(p[y]) && cl(p[x]) === cl(p[y]) - 1 }),
  diag: (x, y) => ({ t: `${x} sits diagonally behind and to the right of ${y}.`, f: (p) => rw(p[x]) === rw(p[y]) + 1 && cl(p[x]) === cl(p[y]) + 1 }),
  sameRow: (x, y) => ({ t: `${x} and ${y} sit in the same row.`, f: (p) => rw(p[x]) === rw(p[y]) }),
  sameCol: (x, y) => ({ t: `${x} and ${y} sit in the same column.`, f: (p) => cl(p[x]) === cl(p[y]) })
};
function grid(people, cons) {
  const sols = [];
  for (const q of permutations(people)) {
    const p = {};
    q.forEach((x, i) => { p[x] = i; });
    if (cons.every((c) => c.f(p))) sols.push(q);
  }
  if (sols.length !== 1) throw new Error('grid not unique: ' + sols.length);
  const seat = sols[0], pos = {};
  seat.forEach((x, i) => { pos[x] = i; });
  return { people, seat, pos, text: cons.map((c, i) => `${i + 1}. ${c.t}`).join('\n') };
}
const ppl = 'ABCDEFGHI'.split('');
const g1 = grid(ppl, [G.at('A', 0, 2), G.immLeft('F', 'A'), G.at('B', 1, 1), G.behind('D', 'A'), G.immLeft('H', 'B'), G.behind('G', 'D'), G.behind('I', 'B'), G.at('E', 2, 0)]);
const g2 = grid(ppl, [G.at('A', 1, 1), G.behind('C', 'A'), G.immLeft('A', 'H'), G.behind('H', 'B'), G.immLeft('E', 'B'), G.at('F', 2, 2), G.at('D', 2, 0), G.diag('F', 'A'), G.sameRow('G', 'A')]);
const gI = 'Nine friends A to I sit in three rows of three seats, all facing north. The front row is the northernmost row. Left means west. The following facts are known:';
const gtxt = (g) => g.seat.map((x, i) => (i % 3 === 0 ? '\n' : '') + x).join(' ').trim();
const layout = (g) => [0, 1, 2].map((r) => g.seat.slice(3 * r, 3 * r + 3).join(' ')).join(' / ');
function gq(g) {
  const T = (s) => `${gI}\n${g.text}\n\n${s}`;
  const S = `The rows (front to back) are ${layout(g)}`;
  return {
    at: (r, c, sk) => { const a = g.seat[3 * r + c]; return { q: T(`Who sits in the ${rowName[r]} row at the ${colName[c]}?`), c: a, w: others(ppl, a, sk), e: `${S}, so ${a} sits there.` }; },
    behind: (x, sk) => { const a = g.seat[g.pos[x] + 3]; return { q: T(`Who sits directly behind ${x}?`), c: a, w: others(ppl, a, sk), e: `${S}, so ${a} sits directly behind ${x}.` }; },
    infront: (x, sk) => { const a = g.seat[g.pos[x] - 3]; return { q: T(`Who sits directly in front of ${x}?`), c: a, w: others(ppl, a, sk), e: `${S}, so ${a} sits directly in front of ${x}.` }; },
    left: (x, sk) => { const a = g.seat[g.pos[x] - 1]; return { q: T(`Who sits immediately to the left of ${x}?`), c: a, w: others(ppl, a, sk), e: `${S}, so ${a} sits immediately to the left of ${x}.` }; },
    right: (x, sk) => { const a = g.seat[g.pos[x] + 1]; return { q: T(`Who sits immediately to the right of ${x}?`), c: a, w: others(ppl, a, sk), e: `${S}, so ${a} sits immediately to the right of ${x}.` }; },
    rowOf: (x) => { const r = rowName[rw(g.pos[x])]; return { q: T(`In which row does ${x} sit?`), c: `The ${r} row`, w: rowName.filter((n) => n !== r).map((n) => `The ${n} row`).concat(['Cannot be determined']), e: `${S}, so ${x} sits in the ${r} row.` }; },
    colmates: (x, sk) => { const col = cl(g.pos[x]); const a = g.seat.filter((_, i) => cl(i) === col && i !== g.pos[x]); return { q: T(`Who sits in the same column as ${x} and in the back row?`), c: g.seat[6 + col] === x ? g.seat[col] : g.seat[6 + col], w: others(ppl, g.seat[6 + col] === x ? g.seat[col] : g.seat[6 + col], sk), e: `${S}.` }; },
    centreCol: (sk) => { const a = g.seat[4]; return { q: T('Who sits exactly in the centre of the whole arrangement?'), c: a, w: others(ppl, a, sk), e: `${S}, so ${a} is in the centre.` }; }
  };
}
const ch10 = C({ ...base, n: 10, id: 'y4-mrm-complex-arrangements', title: 'Complex Multi-Row Arrangements',
  tag: 'Three rows of three: front, behind, left, right and diagonal clues on a grid',
  over: 'A multi-row arrangement places people in a grid of rows and columns instead of a single line. Each person has two coordinates, so clues are of four kinds: row clues (same row, front row), column clues (same column, directly behind), neighbour clues in a row (immediate left or right) and diagonal clues. The method is to draw the grid, write coordinates for each placed person, and let each clue fix one coordinate.',
  place: 'Grid arrangements appear as the harder variant of seating puzzles in company tests.',
  real: 'Seat plans, warehouse shelves and classroom layouts are grids.',
  obj: ['Draw and label a grid with coordinates', 'Interpret front, behind, left, right and diagonal clues', 'Use corner and centre clues as anchors', 'Combine row and column information', 'Verify against every clue'],
  pre: ['Multiple-Row Seating Arrangements', 'Multi-Constraint Logic Puzzles'],
  refresh: 'Facing north, left is west. "Behind" means the next row back in the same column.',
  defs: ['Grid: rows and columns of seats.', 'Coordinates: (row, column) of a person.', 'Directly behind: next row, same column.', 'Diagonal: next row, adjacent column.', 'Anchor: a corner or centre clue that fixes a seat exactly.'],
  intu: 'A grid puzzle is two line puzzles at once; every clue fixes a row, a column, or both.',
  mental: 'Draw a 3 × 3 box, mark anchors first, then use behind and left clues to extend, and finally use same-row or same-column clues.',
  formulas: [['Seat index', '3 × row + column', 'Rows 0–2, columns 0–2.', 'Bookkeeping.', 'Centre = 4'], ['Behind', 'Row + 1, same column', 'Behind clue.', 'Vertical.', 'Behind A'], ['Left', 'Same row, column − 1', 'Left clue.', 'Horizontal.', 'Left of B'], ['Diagonal', 'Row + 1, column + 1', 'Diagonal clue.', 'Corner moves.', 'Behind-right'], ['Same row/column', 'Share one coordinate', 'Group clue.', 'Weak.', 'Use last']],
  narr: ['Nine friends sit in 3 rows. A is in the front row at the east end; F is immediately left of A, so F is front row centre. D is directly behind A (middle row east end) and G is directly behind D (back row east end).', 'B is in the centre. H is immediately left of B, so H is middle row west. I is directly behind B (back row centre). E is back row west.', 'The front row west is left for C. The grid is C F A / H B D / E I G.', 'Same-row and same-column clues are weaker; use them to choose between two remaining seats.', 'Always read the finished grid against each clue.'],
  deep: [['Anchors', 'Corner and centre clues give exact coordinates; start there.'], ['Direction conventions', 'Check the facing direction: left and right swap if the group faces south.']],
  vars: [['Anchors', 'Corners and centre.', 'A, B'], ['Vertical clues', 'Behind.', 'D behind A'], ['Horizontal clues', 'Left/right.', 'F left of A'], ['Diagonal clues', 'Corner moves.', 'F behind-right of A'], ['Group clues', 'Same row/column.', 'G and A']],
  ex: [
    { t: 'Anchor and chain', q: 'A is front row east end; D is directly behind A; G is directly behind D. Where is G?', g: ['A (0,2)'], c: 'Move one row back each time.', s: [['D', 'Middle row, east end.'], ['G', 'Back row, east end.']], a: 'Back row, east end', w: 'Same column as A.', tr: 'Putting G beside D.' },
    { t: 'Left clue', q: 'B is at the centre and H is immediately left of B. Where is H?', g: ['B centre'], c: 'Same row, column − 1.', s: [['Row', 'Middle row.'], ['Column', 'West end.']], a: 'Middle row, west end', w: 'Left means west.', tr: 'Putting H behind B.' },
    { t: 'Grid', q: 'The grid is C F A / H B D / E I G (front to back). Who sits directly behind B?', g: ['Middle row centre B'], c: 'Next row, same column.', s: [['Column', 'Centre.'], ['Back row centre', 'I.']], a: 'I', w: 'I is in the back row.', tr: 'Choosing D.' }
  ],
  short: { title: 'Draw the box', trad: 'Hold it in your head.', fast: 'Draw a 3 × 3 box, mark anchors, extend with behind and left clues, use group clues last.', rules: ['Anchors first.', 'Behind = row + 1.', 'Left = west.', 'Verify.'] },
  mist: [['Confusing front and back', 'Row reversed.', 'Define the front row first.'], ['Mixing left and right', 'Facing direction.', 'Left = west.'], ['Skipping verification', 'Missed clue.', 'Test each clue.']],
  tips: { sec: 200, elim: 'A person cannot occupy two seats.', adv: 'Label coordinates as you place.', ins: 'Weak clues decide only at the end.' },
  rev: ['Draw grid.', 'Anchors.', 'Behind/left.', 'Diagonals.', 'Verify.'],
  qf: ['Seat = 3 × row + column'],
  take: ['Draw.', 'Anchor.', 'Extend.', 'Verify.'],
  self: ['Can I read a behind clue?', 'Can I use diagonals?', 'Can I verify a grid?']
});
const a1 = gq(g1), a2 = gq(g2);
const q10 = [
  E(a1.at(0, 2, 2)), E(a1.at(0, 0, 2)), E(a1.behind('A', 1)), E(a1.left('B', 2)), E(a1.at(2, 0, 1)), E(a1.centreCol(3)),
  M(a1.behind('B', 2)), M(a1.right('H', 1)), M(a1.infront('G', 3)), M(a1.rowOf('D')),
  M(a2.centreCol(1)), M(a2.behind('A', 2)), M(a2.at(0, 0, 1)), M(a2.left('A', 3)),
  P(a2.at(0, 2, 2)), P(a2.infront('F', 1)), P(a2.behind('E', 3)), P(a2.right('G', 2)), P(a2.rowOf('B')), P(a2.at(1, 0, 3))
];
build(ch10, q10);

// ================= Chapter 11: integrated quantitative-logical reasoning =================
// Build a puzzle from a true assignment: clues are true statements chosen greedily until the solution is unique.
function auto(names, domain, truth, pool) {
  const perms = [];
  const rec = (i, cur, used) => {
    if (i === names.length) { perms.push(cur.slice()); return; }
    for (const v of domain) if (!used.has(v)) { used.add(v); cur.push(v); rec(i + 1, cur, used); cur.pop(); used.delete(v); }
  };
  rec(0, [], new Set());
  const mk = (arr) => { const o = {}; names.forEach((n, i) => { o[n] = arr[i]; }); return o; };
  const worlds = perms.map(mk);
  let alive = worlds, chosen = [];
  for (const c of pool(truth)) {
    if (alive.length === 1) break;
    const next = alive.filter(c.f);
    if (next.length < alive.length && next.length >= 1) { alive = next; chosen.push(c); }
  }
  if (alive.length !== 1) throw new Error('auto puzzle not unique: ' + alive.length);
  return { sol: alive[0], text: chosen.map((c, i) => `${i + 1}. ${c.t}`).join('\n') };
}
const ageNames = ['Priya', 'Ravi', 'Sunil', 'Tara', 'Uma'];
const ageTruth = { Priya: 28, Ravi: 24, Sunil: 31, Tara: 22, Uma: 26 };
const agePuz = auto(ageNames, [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], ageTruth, (t) => [
  { t: 'Sunil is the oldest of the five.', f: (w) => ageNames.every((n) => n === 'Sunil' || w.Sunil > w[n]) },
  { t: 'Tara is the youngest of the five.', f: (w) => ageNames.every((n) => n === 'Tara' || w.Tara < w[n]) },
  { t: 'Priya is 6 years older than Tara.', f: (w) => w.Priya - w.Tara === 6 },
  { t: 'The sum of the ages of Ravi and Uma is 50.', f: (w) => w.Ravi + w.Uma === 50 },
  { t: 'Uma is older than Ravi.', f: (w) => w.Uma > w.Ravi },
  { t: 'Sunil is 3 years older than Priya.', f: (w) => w.Sunil - w.Priya === 3 },
  { t: 'Ravi\'s age is a multiple of 4.', f: (w) => w.Ravi % 4 === 0 },
  { t: 'Tara\'s age is an even number.', f: (w) => w.Tara % 2 === 0 }
]);
const iI = 'Five friends Priya, Ravi, Sunil, Tara and Uma have different ages, each a whole number of years from 20 to 32. The following facts are known:';
const aT = (s) => `${iI}\n${agePuz.text}\n\n${s}`;
const aS = `The ages are ${ageNames.map((n) => `${n} ${agePuz.sol[n]}`).join(', ')}`;
const aw = agePuz.sol;
const num = (v) => [v + 1, v - 1, v + 2];
const ch11 = C({ ...base, n: 11, id: 'y4-mrm-integrated-reasoning', title: 'Integrated Quantitative-Logical Reasoning',
  tag: 'Puzzles that mix logic and arithmetic: ages, sums, differences, multiples and ranking',
  over: 'Integrated puzzles combine logical clues (oldest, younger than) with arithmetic clues (sums, differences, multiples). Every clue is a restriction on a small set of integers, so the strategy is to reduce the possibilities for each unknown, starting from the clue that is most specific, and to use the arithmetic clues to fix exact values once the ordering is known.',
  place: 'These puzzles are typical of the top-end reasoning sets and of integrated reasoning sections.',
  real: 'Allocating budgets under rules about totals and ordering uses the same reasoning.',
  obj: ['Translate each clue into a numeric restriction', 'Combine ordering with arithmetic clues', 'Use parity and multiples to eliminate values', 'Fix values from sums and differences', 'Verify the final values'],
  pre: ['Multi-Constraint Logic Puzzles', 'Ages (quantitative)'],
  refresh: 'A difference clue links two unknowns; a sum clue links two unknowns; both together fix them.',
  defs: ['Restriction: a condition an unknown must satisfy.', 'Ordering clue: says which is larger.', 'Difference clue: gives the gap between two values.', 'Parity: whether a number is odd or even.', 'Multiple clue: the value is divisible by a given number.'],
  intu: 'Treat each person as an unknown with a short list of possible values. Each clue shortens a list.',
  mental: 'Write the allowed range, apply the extremes (oldest, youngest), then the difference and sum clues, then parity and multiples.',
  formulas: [['Difference', 'x − y = d', 'Two unknowns.', 'Link.', 'Priya = Tara + 6'], ['Sum', 'x + y = s', 'Two unknowns.', 'Link.', 'Ravi + Uma = 50'], ['Ordering', 'x > y', 'Inequality.', 'Bound.', 'Uma > Ravi'], ['Multiple', 'x mod m = 0', 'Restrict.', 'Filter.', 'Ravi multiple of 4'], ['Verify', 'All clues true', 'End.', 'Check.', 'Final ages']],
  narr: ['Five ages are in 20–32. Sunil is oldest, Tara youngest. Priya = Tara + 6 and Sunil = Priya + 3, so Sunil = Tara + 9. Tara is even, so Tara could be 20, 22, … and Sunil at most 32 gives Tara ≤ 23.', 'Ravi + Uma = 50 with Uma > Ravi and Ravi a multiple of 4. Ravi = 24, Uma = 26 (24 + 26 = 50) fits; Ravi = 20 would give Uma = 30 which would exceed Priya or break the order.', 'With Tara = 22: Priya = 28, Sunil = 31. Ravi = 24 and Uma = 26 lie between Tara and Priya as required (Tara youngest).', 'Check each clue on the final ages: Sunil 31 is oldest, Tara 22 youngest, 28 − 22 = 6, 24 + 26 = 50, 31 − 28 = 3, 24 is a multiple of 4, 22 is even.', 'If the puzzle seems to have two solutions, a clue has been misread.'],
  deep: [['Extremes first', 'Oldest and youngest clues bound everyone else.'], ['Parity and multiples', 'These filter candidate values quickly after sums fix pairs.']],
  vars: [['Ages', 'Differences and sums.', 'Five friends'], ['Ranks', 'Ordering.', 'Oldest, youngest'], ['Multiples', 'Divisibility.', 'Multiple of 4'], ['Totals', 'Sum clues.', 'Ravi + Uma'], ['Checks', 'All clues.', 'Final ages']],
  ex: [
    { t: 'Linking differences', q: 'Priya is 6 years older than Tara and Sunil is 3 years older than Priya. By how much is Sunil older than Tara?', g: ['6 and 3'], c: 'Add the gaps.', s: [['Write the links', 'Priya = Tara + 6 and Sunil = Priya + 3.'], ['Combine', 'Sunil = Tara + 9.']], a: '9 years', w: 'Gaps add along a chain.', tr: 'Taking 3.' },
    { t: 'Sum and order', q: 'Ravi + Uma = 50, Uma is older than Ravi, and Ravi is a multiple of 4. If Ravi is between 22 and 26, find Ravi.', g: ['Sum 50'], c: 'Filter candidates.', s: [['Multiples of 4', '24 only between 22 and 26.'], ['Check', 'Uma = 26 > 24.']], a: '24', w: 'Uma is 26.', tr: 'Picking 25.' },
    { t: 'Verify', q: 'Ages are Priya 28, Ravi 24, Sunil 31, Tara 22, Uma 26. Is Tara the youngest?', g: ['Final ages'], c: 'Compare.', s: [['List the ages', '28, 24, 31, 22, 26.'], ['Smallest', '22 is smallest, and it is Tara\'s.']], a: 'Yes', w: 'The check confirms it.', tr: 'Skipping verification.' }
  ],
  short: { title: 'Extremes then links', trad: 'Try values.', fast: 'Use the oldest/youngest clues to bound, then difference and sum clues to link, then multiples and parity to finish.', rules: ['Bounds first.', 'Differences chain.', 'Sums pair.', 'Verify.'] },
  mist: [['Ignoring the range', 'Too many cases.', 'State the range first.'], ['Using a clue twice for different people', 'Mix-ups.', 'Label each unknown.'], ['Not verifying', 'Silent error.', 'Check each clue.']],
  tips: { sec: 180, elim: 'A value outside the range is impossible.', adv: 'List allowed values per person.', ins: 'Arithmetic clues usually fix pairs.' },
  rev: ['Ranges.', 'Extremes.', 'Differences.', 'Sums.', 'Multiples.'],
  qf: ['x − y = d; x + y = s'],
  take: ['Bound.', 'Link.', 'Filter.', 'Verify.'],
  self: ['Can I chain differences?', 'Can I use sums?', 'Can I filter by multiples?']
});
const q11 = [
  E({ q: aT('What is Tara\'s age?'), c: aw.Tara, w: num(aw.Tara), e: `${aS}, so Tara is ${aw.Tara}.` }),
  E({ q: aT('What is Sunil\'s age?'), c: aw.Sunil, w: num(aw.Sunil), e: `${aS}, so Sunil is ${aw.Sunil}.` }),
  E({ q: aT('What is Priya\'s age?'), c: aw.Priya, w: num(aw.Priya), e: `${aS}, so Priya is ${aw.Priya}.` }),
  E({ q: aT('What is Ravi\'s age?'), c: aw.Ravi, w: num(aw.Ravi), e: `${aS}, so Ravi is ${aw.Ravi}.` }),
  E({ q: aT('What is Uma\'s age?'), c: aw.Uma, w: num(aw.Uma), e: `${aS}, so Uma is ${aw.Uma}.` }),
  E({ q: aT('Who is the second oldest?'), c: 'Priya', w: ['Ravi', 'Uma', 'Tara'], e: `${aS}; in order: Sunil 31, Priya 28, Uma 26, Ravi 24, Tara 22, so Priya is second oldest.` }),
  M({ q: aT('What is the sum of the ages of all five friends?'), c: ageNames.reduce((s, n) => s + aw[n], 0), w: num(ageNames.reduce((s, n) => s + aw[n], 0)), e: `${aS}; 28 + 24 + 31 + 22 + 26 = 131.` }),
  M({ q: aT('What is the average age of the five friends?'), c: 26.2, w: [26, 25.8, 27.2], e: `Total 131 ÷ 5 = 26.2.` }),
  M({ q: aT('By how many years is Sunil older than Tara?'), c: aw.Sunil - aw.Tara, w: num(aw.Sunil - aw.Tara), e: `${aS}; 31 − 22 = 9.` }),
  M({ q: aT('Who is the third oldest?'), c: 'Uma', w: ['Priya', 'Ravi', 'Tara'], e: `In order Sunil 31, Priya 28, Uma 26, Ravi 24, Tara 22, so Uma is third.` }),
  M({ q: aT('What is the difference between the ages of Uma and Ravi?'), c: 2, w: [1, 3, 4], e: `${aS}; 26 − 24 = 2.` }),
  M({ q: aT('What is the sum of the ages of Priya and Tara?'), c: aw.Priya + aw.Tara, w: num(aw.Priya + aw.Tara), e: `${aS}; 28 + 22 = 50.` }),
  M({ q: aT('How old will Ravi be when Tara is 30?'), c: 32, w: [30, 31, 33], e: `Tara is 22; 8 years later Ravi is 24 + 8 = 32.` }),
  M({ q: aT('How many of the five friends are older than 25?'), c: 3, w: [2, 4, 5], e: `${aS}; 31, 28 and 26 are above 25: 3.` }),
  P({ q: aT('The ratio of Tara\'s age to Sunil\'s age in its simplest form is'), c: '22 : 31', w: ['2 : 3', '11 : 14', '21 : 31'], e: `${aS}; 22 : 31 has no common factor.` }),
  P({ q: aT('In how many years will Priya be twice as old as Tara is now?'), c: 16, w: [14, 15, 18], e: `Twice Tara\'s present age is 44; 44 − 28 = 16.` }),
  P({ q: aT('What is the average age of the three youngest friends (to one decimal)?'), c: 24, w: [23.5, 24.5, 25], e: `Three youngest: Tara 22, Ravi 24, Uma 26; average 72 ÷ 3 = 24.` }),
  P({ q: aT('How many years ago was Sunil exactly twice as old as Tara was then? (Tara 22, Sunil 31)'), c: 'Never; the ratio is already below 2', w: ['9', '13', '4'], e: `Sunil − Tara = 9 always, so twice-as-old would need Tara to be 9 years old, 13 years ago Tara was 9 and Sunil 18, ratio 2: so 13 years ago.`.replace('Never; the ratio is already below 2', 'x') }),
  P({ q: aT('The sum of the ages of the oldest and youngest friends is'), c: 53, w: [52, 54, 55], e: `${aS}; 31 + 22 = 53.` }),
  P({ q: aT('Which pair of friends has ages that sum to exactly 50?'), c: 'Ravi and Uma', w: ['Priya and Tara', 'Sunil and Tara', 'Priya and Uma'], e: `${aS}; Ravi 24 + Uma 26 = 50 and Priya 28 + Tara 22 = 50 also, so check: both pairs sum to 50.` })
];
// two of the last answers need correction (self-checked below)
q11[16] = placement(aT('What is the average age of the three youngest friends?'), 24, [23, 25, 26], `Three youngest: Tara 22, Ravi 24, Uma 26; average 72 ÷ 3 = 24.`);
q11[17] = placement(aT('How many years ago was Sunil exactly twice as old as Tara was then?'), 13, [9, 11, 15], `Sunil − Tara = 9 always; Sunil is twice Tara when Tara is 9, which was 22 − 9 = 13 years ago (Tara 9, Sunil 18).`);
q11[19] = placement(aT('Which of the following pairs of friends has ages that add up to exactly 50?'), 'Priya and Tara', ['Ravi and Sunil', 'Sunil and Tara', 'Priya and Uma'], `Priya 28 + Tara 22 = 50. The other pairs give 55, 53 and 54.`);
build(ch11, q11);
