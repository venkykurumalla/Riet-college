const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { ord, puzzle, permutations, others } = require('./puzzleLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------------- Chapter 30: two facing rows ----------------
// Seats 0-3 are Row 1 (facing south), seats 4-7 are Row 2 (facing north), each numbered west to east.
const row1 = (s) => s < 4;
const col = (s) => s % 4;
const cons2 = {
  opp: (x, y) => ({ t: `${x} sits exactly opposite ${y}.`, f: (p) => col(p[x]) === col(p[y]) && row1(p[x]) !== row1(p[y]) }),
  west: (x, r) => ({ t: `${x} sits at the western end of Row ${r}.`, f: (p) => p[x] === (r === 1 ? 0 : 4) }),
  east: (x, r) => ({ t: `${x} sits at the eastern end of Row ${r}.`, f: (p) => p[x] === (r === 1 ? 3 : 7) }),
  immLeft: (x, y) => ({ t: `${x} sits immediately to the left of ${y}.`, f: (p) => row1(p[x]) === row1(p[y]) && (row1(p[y]) ? col(p[x]) === col(p[y]) + 1 : col(p[x]) === col(p[y]) - 1) }),
  immRight: (x, y) => ({ t: `${x} sits immediately to the right of ${y}.`, f: (p) => row1(p[x]) === row1(p[y]) && (row1(p[y]) ? col(p[x]) === col(p[y]) - 1 : col(p[x]) === col(p[y]) + 1) })
};
function twoRows(people, cons) {
  const sols = [];
  for (const q of permutations(people)) {
    const p = {};
    q.forEach((x, i) => { p[x] = i; });
    if (cons.every((c) => c.f(p))) sols.push(q);
  }
  if (sols.length !== 1) throw new Error(`two-row puzzle not unique: ${sols.length}`);
  const seat = sols[0];
  const pos = {};
  seat.forEach((x, i) => { pos[x] = i; });
  return { people, seat, pos, text: cons.map((c, i) => `${i + 1}. ${c.t}`).join('\n') };
}
const intro2 = (names) => `Eight friends ${names} sit in two parallel rows of four seats. Row 1 faces south and Row 2 faces north, so each person in Row 1 faces a person in Row 2. Seats in each row are numbered from west to east. The following facts are known:`;
function rowsQs(Pz, names) {
  const T = (s) => `${intro2(names)}\n${Pz.text}\n\n${s}`;
  const S = `Row 1 (west to east): ${Pz.seat.slice(0, 4).join(', ')}. Row 2 (west to east): ${Pz.seat.slice(4).join(', ')}`;
  const oppOf = (x) => Pz.seat[(Pz.pos[x] + 4) % 8];
  return {
    opp: (x, sk) => ({ q: T(`Who sits exactly opposite ${x}?`), c: oppOf(x), w: others(Pz.people, oppOf(x), sk), e: `${S}. The person opposite ${x} is ${oppOf(x)}.` }),
    end: (r, side, sk) => { const a = Pz.seat[(r - 1) * 4 + (side === 'west' ? 0 : 3)]; return { q: T(`Who sits at the ${side}ern end of Row ${r}?`), c: a, w: others(Pz.people, a, sk), e: `${S}. The ${side}ern end of Row ${r} is ${a}.` }; },
    left: (x, sk) => { const s = Pz.pos[x]; const a = Pz.seat[row1(s) ? s + 1 : s - 1]; return { q: T(`Who sits immediately to the left of ${x}?`), c: a, w: others(Pz.people, a, sk), e: `${S}. ${x} faces ${row1(s) ? 'south, so the left is east' : 'north, so the left is west'}; the person there is ${a}.` }; },
    right: (x, sk) => { const s = Pz.pos[x]; const a = Pz.seat[row1(s) ? s - 1 : s + 1]; return { q: T(`Who sits immediately to the right of ${x}?`), c: a, w: others(Pz.people, a, sk), e: `${S}. ${x} faces ${row1(s) ? 'south, so the right is west' : 'north, so the right is east'}; the person there is ${a}.` }; },
    eastCount: (x) => { const k = 3 - col(Pz.pos[x]); return { q: T(`How many people sit to the east of ${x} in the same row?`), c: k, w: [k + 1, k + 2, k + 3], e: `${S}. ${x} is in seat ${col(Pz.pos[x]) + 1} of 4 counted from the west, so ${k} ${k === 1 ? 'person sits' : 'people sit'} to the east, which is ${k}.` }; },
    swapOpp: (x, y, z, sk) => { const seat = Pz.seat.slice(); const i = seat.indexOf(x), j = seat.indexOf(y); [seat[i], seat[j]] = [seat[j], seat[i]]; const zi = seat.indexOf(z); const a = seat[(zi + 4) % 8]; return { q: T(`If ${x} and ${y} exchange their seats, who sits exactly opposite ${z}?`), c: a, w: others(Pz.people, a, sk), e: `${S}. After ${x} and ${y} exchange seats the rows are ${seat.slice(0, 4).join(', ')} and ${seat.slice(4).join(', ')}, so ${a} sits opposite ${z}.` }; }
  };
}
const n1 = 'A, B, C, D, E, F, G and H';
const z1 = twoRows('ABCDEFGH'.split(''), [cons2.opp('A', 'B'), cons2.west('C', 1), cons2.west('F', 2), cons2.immLeft('H', 'A'), cons2.east('E', 1), cons2.opp('D', 'H'), cons2.immRight('G', 'D')]);
const z2 = twoRows('ABCDEFGH'.split(''), [cons2.east('D', 1), cons2.opp('D', 'G'), cons2.immLeft('C', 'G'), cons2.west('F', 1), cons2.opp('F', 'H'), cons2.immLeft('B', 'F'), cons2.opp('B', 'A'), cons2.immLeft('E', 'B')]);
const z3 = twoRows('ABCDEFGH'.split(''), [cons2.east('D', 1), cons2.west('G', 2), cons2.opp('E', 'A'), cons2.immLeft('H', 'E'), cons2.immLeft('A', 'F'), cons2.opp('C', 'D'), cons2.opp('F', 'H'), cons2.immRight('B', 'E')]);
const w1 = rowsQs(z1, n1), w2 = rowsQs(z2, n1), w3 = rowsQs(z3, n1);

const ch30 = C({
  n: 30, id: 'y3-lr-multiple-row-seating', cat: 'lr', title: 'Multiple-Row Seating Arrangements',
  tag: 'Two or more parallel rows facing each other: facing directions, opposite pairs and mixed left-right clues',
  url: 'https://www.indiabix.com/verbal-reasoning/seating-arrangement/',
  over: 'In a multiple-row puzzle people sit in two parallel rows that face each other. The two rows face opposite directions, so the same word "left" points east for one row and west for the other. The key moves are to fix the directions at the start, translate every clue into compass terms, and use "opposite" clues to link the rows seat by seat.',
  place: 'Two-row seating sets with eight people and five or six questions are common in written aptitude tests.',
  real: 'Facing benches in a train compartment, desks in two-sided lab tables and theatre rows are arranged this way.',
  obj: ['Assign facing directions to each row', 'Convert left and right into east and west', 'Use opposite pairs to link the rows', 'Use end-of-row clues as anchors', 'Answer exchange-of-seats questions'],
  pre: ['Complex Seating Arrangements', 'Circular Seating Arrangements'],
  refresh: 'Facing north, left is west and right is east. Facing south, left is east and right is west.',
  defs: [
    'Row 1 faces south: left = east, right = west.',
    'Row 2 faces north: left = west, right = east.',
    'Opposite: the person in the same column of the other row.',
    'Extreme end: the first or last seat of a row.',
    'Column: seat number counted from the west in either row.'
  ],
  intu: 'Two facing rows are a grid with two lines and four columns. Compass directions never change, so translate every left or right into east or west first and then forget about facing.',
  mental: 'Draw two rows, mark west and east, note the facing direction of each row, and convert all clues. Place end-of-row and opposite clues first.',
  formulas: [
    ['Row 1 (south)', 'Left = east, right = west', 'Facing south.', 'Translate.', 'Left of seat 2 is seat 3'],
    ['Row 2 (north)', 'Left = west, right = east', 'Facing north.', 'Translate.', 'Left of seat 2 is seat 1'],
    ['Opposite', 'Same column, other row', 'Always.', 'Linking rows.', 'Seat 3 faces seat 3'],
    ['Counting', 'East of seat c: 4 − c people', 'Row of 4.', 'Counting.', 'Seat 1: 3 to the east'],
    ['Check', 'Test each clue on the final grid', 'End of the puzzle.', 'Verification.', 'All clues hold']
  ],
  narr: [
    'Eight friends A to H sit in two rows of four. Row 1 faces south and Row 2 faces north. Take the clues: A is opposite B; C is at the west end of Row 1; F is at the west end of Row 2; H is immediately left of A; E is at the east end of Row 1; D is opposite H; G is immediately right of D. Start with the anchors: C is seat 1 of Row 1 and E is seat 4 of Row 1. F is seat 1 of Row 2, so C and F are opposite.',
    'Row 1 faces south, so the left of A is east. H is immediately east of A. The only free seats in Row 1 are 2 and 3, so A is seat 2 and H is seat 3. B is opposite A, so B is seat 2 of Row 2; D is opposite H, so D is seat 3 of Row 2. Row 2 faces north, so the right of D is east, which is seat 4 of Row 2: G. The row is: Row 1 C, A, H, E and Row 2 F, B, D, G.',
    'The facing directions trap people. In Row 1 "immediately left" means one seat east, and in Row 2 it means one seat west. Writing "east" or "west" beside each clue before placing anyone removes the confusion.',
    'Opposite clues transfer information between rows. If you know someone\'s column in one row, their opposite has the same column in the other row.',
    'Exchange questions need a fresh copy of the grid. Swap the two names and read the opposite of the person asked about.'
  ],
  deep: [['Diagonal clues', 'A person diagonally opposite to X is in the other row and one column away; check both options if the clue does not say which side.'], ['Mixed facing', 'If a puzzle makes both rows face north, the left of everyone is west; read the facing statement carefully.']],
  vars: [['Opposite pairs', 'Same column.', 'A–B'], ['End anchors', 'West or east end.', 'C and F'], ['Left/right in two rows', 'Different directions.', 'H left of A'], ['Counting east of a person', '4 − column.', 'East of A'], ['Exchange', 'Swap then read.', 'If A and E swap']],
  ex: [
    { t: 'Direction conversion', q: 'Row 1 faces south, with C, A, H, E from west to east. Who is immediately to the left of A?', g: ['Row 1 faces south'], c: 'Convert left to east.', s: [['Direction', 'Facing south, the left hand points east.'], ['Seat', 'The seat east of A is occupied by H.']], a: 'H', w: 'Facing north the answer would be C.', tr: 'Taking left as west.' },
    { t: 'Opposite link', q: 'Row 1 is C, A, H, E (west to east) and Row 2 is F, B, D, G. Who sits opposite H?', g: ['Seat 3'], c: 'Same column.', s: [['Column', 'H is seat 3 of Row 1.'], ['Opposite', 'Seat 3 of Row 2 is D.']], a: 'D', w: 'Opposite means the same column.', tr: 'Taking the mirror column.' },
    { t: 'Counting', q: 'In the same arrangement, how many people sit to the east of B in Row 2?', g: ['B is seat 2 of Row 2'], c: '4 − column.', s: [['Column', 'B is seat 2 from the west.'], ['East', 'Seats 3 and 4 are east of B: 2 people.']], a: '2', w: 'D and G.', tr: 'Counting seat 1.' }
  ],
  short: { title: 'Compass first', trad: 'Reason with left and right.', fast: 'Rewrite every left/right as east/west using the row\'s facing direction, then place anchors.', rules: ['South: left is east.', 'North: left is west.', 'Opposite means same column.', 'Verify at the end.'] },
  mist: [['Using one direction for both rows', 'Left/right swap between rows.', 'Convert per row.'], ['Mirror-column opposite', 'Seat 1 does not face seat 4.', 'Opposite is the same column.'], ['Missing the facing statement', 'Row facing might change.', 'Read the first sentence closely.']],
  tips: { sec: 180, elim: 'An option that puts two people in one seat is wrong.', adv: 'Place the end-of-row anchors first.', ins: 'Eight-person sets give five or six questions, so build the grid once.' },
  rev: ['Convert directions.', 'Place anchors.', 'Link rows by opposite.', 'Count by column.', 'Verify.'],
  qf: ['East of column c: 4 − c'],
  take: ['Compass first.', 'Anchors.', 'Opposite = same column.', 'Verify.'],
  self: ['Can I convert left to east or west?', 'Can I link rows by opposite?', 'Can I answer a swap question?']
});
const q30 = [E(w1.opp('A', 3)), E(w1.end(1, 'west', 1)), E(w1.end(2, 'east', 2)), E(w1.left('A', 1)), E(w1.eastCount('C')), E(w1.opp('E', 2)),
  M(w2.opp('G', 1)), M(w2.end(2, 'west', 2)), M(w2.left('F', 2)), M(w2.right('C', 1)), M(w2.eastCount('B')), M(w2.left('H', 3)), M(w2.opp('E', 1)), M(w2.swapOpp('C', 'E', 'D', 2)),
  P(w3.opp('F', 1)), P(w3.end(2, 'east', 2)), P(w3.left('G', 2)), P(w3.right('E', 3)), P(w3.swapOpp('A', 'B', 'C', 2)), P(w3.eastCount('G'))];
build(ch30, q30);

// ---------------- Chapter 31: floor puzzles ----------------
const flr = (labels) => ord(labels, {
  at: (x, l) => `${x} lives on floor ${l}.`, notAt: (x, l) => `${x} does not live on floor ${l}.`,
  first: (x) => `${x} lives on the lowest floor (floor 1).`, last: (x) => `${x} lives on the top floor (floor 7).`,
  before: (x, y) => `${x} lives on a lower floor than ${y}.`, immBefore: (x, y) => `${x} lives on the floor immediately below ${y}.`,
  gap: (x, y, k) => `Exactly ${k} ${k === 1 ? 'floor lies' : 'floors lie'} between the floors of ${x} and ${y}.`,
  adj: (x, y) => `${x} and ${y} live on adjacent floors.`, notAdj: (x, y) => `${x} and ${y} do not live on adjacent floors.`
});
const F = flr([1, 2, 3, 4, 5, 6, 7]);
const names = ['Amit', 'Bina', 'Charan', 'Divya', 'Esha', 'Farhan', 'Gita'];
const fp1 = puzzle(names, [F.last('Charan'), F.immBefore('Farhan', 'Charan'), F.at('Esha', 3), F.immBefore('Amit', 'Esha'), F.gap('Bina', 'Divya', 3), F.before('Gita', 'Amit'), F.notAt('Bina', 0)]);
const fp2 = puzzle(names, [F.last('Bina'), F.immBefore('Esha', 'Bina'), F.at('Gita', 3), F.gap('Amit', 'Gita', 1), F.immBefore('Divya', 'Gita'), F.before('Farhan', 'Amit')]);
const fp3 = puzzle(names, [F.at('Farhan', 3), F.gap('Gita', 'Farhan', 2), F.adj('Esha', 'Gita'), F.immBefore('Amit', 'Farhan'), F.before('Farhan', 'Charan'), F.last('Bina'), F.immBefore('Divya', 'Bina')]);
const fintro = 'Seven people Amit, Bina, Charan, Divya, Esha, Farhan and Gita live on different floors of a seven-storey building. Floor 1 is the lowest and floor 7 is the top floor. The following facts are known:';
function floorQs(Pz) {
  const T = (s) => `${fintro}\n${Pz.text}\n\n${s}`;
  const S = `From floor 1 to floor 7 the residents are ${Pz.seat.join(', ')}`;
  const fl = (x) => Pz.pos[x] + 1;
  return {
    who: (k, sk) => ({ q: T(`Who lives on floor ${k}?`), c: Pz.seat[k - 1], w: others(Pz.people, Pz.seat[k - 1], sk), e: `${S}, so ${Pz.seat[k - 1]} lives on floor ${k}.` }),
    which: (x) => { const k = fl(x); return { q: T(`On which floor does ${x} live?`), c: k, w: [k + 1, k - 1 < 1 ? k + 2 : k - 1, k + 2 > 7 ? k - 2 : k + 2], e: `${S}, so ${x} lives on floor ${k}, which is ${k}.` }; },
    above: (x, sk) => { const a = Pz.seat[Pz.pos[x] + 1]; return { q: T(`Who lives on the floor immediately above ${x}?`), c: a, w: others(Pz.people, a, sk), e: `${S}, so ${a} lives immediately above ${x}.` }; },
    below: (x, sk) => { const a = Pz.seat[Pz.pos[x] - 1]; return { q: T(`Who lives on the floor immediately below ${x}?`), c: a, w: others(Pz.people, a, sk), e: `${S}, so ${a} lives immediately below ${x}.` }; },
    between: (x, y) => { const k = Math.abs(Pz.pos[x] - Pz.pos[y]) - 1; return { q: T(`How many floors lie between the floors of ${x} and ${y}?`), c: k, w: [k + 1, k + 2, k + 3], e: `${S}; ${x} is on floor ${fl(x)} and ${y} on floor ${fl(y)}, so ${k} ${k === 1 ? 'floor lies' : 'floors lie'} between them, which is ${k}.` }; },
    aboveCount: (x) => { const k = 7 - fl(x); return { q: T(`How many people live above ${x}?`), c: k, w: [k + 1, k + 2, k + 3], e: `${S}; ${x} is on floor ${fl(x)}, so ${k} ${k === 1 ? 'person lives' : 'people live'} above, which is ${k}.` }; },
    swap: (x, y, z, sk) => { const seat = Pz.seat.slice(); const i = seat.indexOf(x), j = seat.indexOf(y); [seat[i], seat[j]] = [seat[j], seat[i]]; const a = seat[seat.indexOf(z) + 1]; return { q: T(`If ${x} and ${y} exchange their floors, who lives on the floor immediately above ${z}?`), c: a, w: others(Pz.people, a, sk), e: `${S}. After ${x} and ${y} exchange floors the order is ${seat.join(', ')}, so ${a} lives immediately above ${z}.` }; }
  };
}
const f1 = floorQs(fp1), f2 = floorQs(fp2), f3 = floorQs(fp3);
const ch31 = C({
  n: 31, id: 'y3-lr-floor-puzzles', cat: 'lr', title: 'Floor-Based Arrangement Puzzles',
  tag: 'One person per floor: ordering clues, gaps, adjacency and negative constraints',
  url: 'https://www.indiabix.com/verbal-reasoning/seating-arrangement/',
  over: 'A floor puzzle places people on the floors of a building, one per floor. It is a vertical row, so the same methods apply: pin down the extremes (top and bottom floors), join neighbours into chains, convert "exactly k floors between" into a floor-number gap of k + 1, and use "not on" clues last. The numbers on the floors make counting questions easy once the order is fixed.',
  place: 'Floor and building puzzles are a standard set type in logical-reasoning rounds, usually with seven or eight people.',
  real: 'Allocating offices, flats or storage levels under adjacency rules works the same way.',
  obj: ['Turn gap clues into floor-number differences', 'Chain "immediately above/below" clues', 'Use top and bottom floors as anchors', 'Apply negative clues to eliminate', 'Answer count and swap questions'],
  pre: ['Complex Seating Arrangements'],
  refresh: 'Floor 1 is the lowest. "Immediately above" means floor number + 1. "Exactly k floors between" means a floor-number gap of k + 1.',
  defs: [
    'Top floor: floor 7 in a seven-storey building. Ground or lowest floor: floor 1.',
    'Immediately above X: the floor numbered one more than X\'s.',
    'Gap clue: exactly k floors between X and Y means |floor(X) − floor(Y)| = k + 1.',
    'Adjacent floors: floor numbers that differ by exactly 1.',
    'Negative clue: says a floor is not X\'s; use it to eliminate options.'
  ],
  intu: 'A building is a column of numbered boxes. Each clue is a rule about the numbers of two people, so treat it as arithmetic on floor numbers.',
  mental: 'Write floor numbers 1 to 7 down the page. Fix extremes, place chains, convert gap clues to differences of k + 1, and finish with the remaining free floors.',
  formulas: [
    ['Gap clue', '|f(X) − f(Y)| = k + 1', 'k floors between.', 'Gaps.', '3 between: difference 4'],
    ['Immediately above', 'f(Y) = f(X) + 1', 'Adjacent.', 'Chains.', 'Charan above Farhan'],
    ['People above', '7 − f(X)', 'Counting.', 'Counts.', 'Floor 3: 4 above'],
    ['Floors between', '|f(X) − f(Y)| − 1', 'Counting.', 'Counts.', 'Floors 1 and 5: 3'],
    ['Negative clue', 'Cross out one floor', 'Elimination.', 'Last step.', 'Bina is not on floor 1']
  ],
  narr: [
    'Seven people live on floors 1 to 7. Charan lives on the top floor; Farhan lives immediately below Charan; Esha lives on floor 4; Amit lives immediately below Esha; exactly three floors lie between Bina and Divya; Gita lives lower than Amit; Bina does not live on floor 1. Start with the fixed ones: Charan 7, Farhan 6, Esha 4, Amit 3. The free floors are 1, 2 and 5.',
    'Exactly three floors between Bina and Divya means their floor numbers differ by 4. Among the free floors 1, 2, 5 the only pair with a difference of 4 is 1 and 5. Bina does not live on floor 1, so Bina lives on floor 5 and Divya on floor 1.',
    'Gita takes the last free floor, 2. Check the remaining clue: Gita (floor 2) lives lower than Amit (floor 3). The final order from floor 1 to 7 is Divya, Gita, Amit, Esha, Bina, Farhan, Charan. Always verify the final order against every clue.',
    'Counting questions are now simple. People above Esha = 7 − 4 = 3, and the floors between Gita and Esha are 4 − 2 − 1 = 1.',
    'For swap questions, write the order again, swap the two names and read the neighbour you are asked about.'
  ],
  deep: [['Contradiction check', 'If a clue seems to fail, you have misplaced someone or misread a clue. Never force a clue to fit.'], ['Parity tricks', 'A gap of 3 floors (difference 4) leaves only a few pairs, so such clues are strong anchors.']],
  vars: [['Extremes', 'Top/bottom floors.', 'Charan on the top'], ['Chains', 'Immediate neighbours.', 'Farhan–Charan'], ['Gap clues', 'Difference k + 1.', 'Bina and Divya'], ['Negative clues', 'Eliminate.', 'Not floor 1'], ['Counting', '7 − floor.', 'People above Esha']],
  ex: [
    { t: 'Gap to difference', q: 'Exactly 3 floors lie between the floors of Bina and Divya. What is the difference of their floor numbers?', g: ['3 floors between'], c: 'Gap = k + 1.', s: [['Between', 'Three floors between means the numbers are 4 apart.'], ['Difference', '3 + 1 = 4.']], a: '4', w: 'Floors 1 and 5, or 2 and 6, or 3 and 7.', tr: 'Taking 3.' },
    { t: 'Chain', q: 'Charan lives on the top floor of a 7-floor building. Farhan lives immediately below Charan and Esha lives on floor 4. On which floor does Farhan live?', g: ['Top floor 7'], c: 'Immediately below.', s: [['Top', 'Charan is on floor 7.'], ['Below', 'Farhan is on floor 6.']], a: '6', w: 'Esha\'s floor does not affect Farhan.', tr: 'Answering 5.' },
    { t: 'Counting above', q: 'If Esha lives on floor 4 of a 7-floor building, how many people live above her?', g: ['Floor 4 of 7'], c: '7 − floor.', s: [['Floors above', 'Floors 5, 6, 7.'], ['People', '3 people.']], a: '3', w: 'One person per floor.', tr: 'Answering 4.' }
  ],
  short: { title: 'Numbers on a ladder', trad: 'Try every placement.', fast: 'Write floor numbers, place extremes and chains, turn gaps into differences of k + 1, and use negatives last.', rules: ['Gap = k + 1.', 'Extremes first.', 'Negatives last.', 'Verify every clue.'] },
  mist: [['Using k instead of k + 1', 'Counting floors between wrongly.', 'Difference = k + 1.'], ['Reading "lower" as "immediately below"', 'Adjacent versus anywhere below.', 'Check the word immediately.'], ['Ignoring a negative clue', 'Two arrangements remain.', 'Use it to choose one.']],
  tips: { sec: 150, elim: 'Cross out floors as you use them.', adv: 'Use difference clues on the free floors only.', ins: 'Unique puzzles never need a guess.' },
  rev: ['Gap difference.', 'Chains.', 'Extremes.', 'Negatives.', 'Counting.'],
  qf: ['Gap = k + 1', 'People above = 7 − f'],
  take: ['Floor numbers.', 'Gap = k + 1.', 'Verify.', 'Count last.'],
  self: ['Can I convert gaps?', 'Can I chain neighbours?', 'Can I answer count questions?']
});
const q31 = [E(f1.who(7)), E(f1.who(1, 1)), E(f1.which('Esha')), E(f1.above('Farhan', 1)), E(f1.below('Amit', 2)), E(f1.aboveCount('Amit')),
  M(f2.who(1, 1)), M(f2.who(7, 2)), M(f2.which('Amit')), M(f2.below('Gita', 1)), M(f2.between('Farhan', 'Gita')), M(f2.aboveCount('Divya')), M(f2.above('Charan', 2)), M(f2.swap('Farhan', 'Esha', 'Gita', 1)),
  P(f3.who(1, 1)), P(f3.who(5, 2)), P(f3.which('Divya')), P(f3.between('Gita', 'Bina')), P(f3.swap('Gita', 'Divya', 'Amit', 2)), P(f3.aboveCount('Charan'))];
build(ch31, q31);
