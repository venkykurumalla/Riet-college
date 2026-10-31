const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { row: R, circ, puzzle, others } = require('./puzzleLib.cjs');

const ordinal = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];

// ---------- row puzzles (people face north: left = lower seat number) ----------
const rowText = (P, intro) => `${intro}\n${P.text}`;
const rowSeq = (P) => P.seat.join(', ');
function rowQs(P, intro) {
  const T = (stem) => `${rowText(P, intro)}\n\n${stem}`;
  const S = `From left to right the seating is ${rowSeq(P)}`;
  const n = P.n;
  return {
    at: (i, label, sk) => ({ q: T(`Who sits at ${label}?`), c: P.seat[i], w: others(P.people, P.seat[i], sk), e: `${S}, so ${P.seat[i]} sits at ${label}.` }),
    immLeftOf: (x, sk) => ({ q: T(`Who sits immediately to the left of ${x}?`), c: P.seat[P.pos[x] - 1], w: others(P.people, P.seat[P.pos[x] - 1], sk), e: `${S}, so ${P.seat[P.pos[x] - 1]} is immediately to the left of ${x}.` }),
    immRightOf: (x, sk) => ({ q: T(`Who sits immediately to the right of ${x}?`), c: P.seat[P.pos[x] + 1], w: others(P.people, P.seat[P.pos[x] + 1], sk), e: `${S}, so ${P.seat[P.pos[x] + 1]} is immediately to the right of ${x}.` }),
    rightCount: (x) => { const k = n - 1 - P.pos[x]; return { q: T(`How many people sit to the right of ${x}?`), c: k, w: [k + 1, Math.max(0, k - 1) === k ? k + 2 : Math.max(0, k - 1), k + 2], e: `${S}, so ${k} ${k === 1 ? 'person sits' : 'people sit'} to the right of ${x}, which is ${k}.` }; },
    betweenCount: (x, y) => { const k = Math.abs(P.pos[x] - P.pos[y]) - 1; return { q: T(`How many people sit between ${x} and ${y}?`), c: k, w: [k + 1, k + 2, k + 3], e: `${S}; ${x} and ${y} are ${k + 1} seats apart, so ${k} ${k === 1 ? 'person sits' : 'people sit'} between them, which is ${k}.` }; },
    swap: (x, y, ask, sk) => {
      const seat = P.seat.slice();
      const a = seat.indexOf(x), b = seat.indexOf(y);
      [seat[a], seat[b]] = [seat[b], seat[a]];
      const who = seat[P.pos[ask] - 1];
      return { q: T(`If ${x} and ${y} exchange their seats, who sits immediately to the left of ${ask}?`), c: who, w: others(P.people, who, sk), e: `${S}. After ${x} and ${y} exchange seats the order is ${seat.join(', ')}, so ${who} is immediately to the left of ${ask}.` };
    },
    which: (a, b) => ({ q: T(`Who sits exactly between ${a} and ${b}?`), c: P.seat[(P.pos[a] + P.pos[b]) / 2], w: others(P.people, P.seat[(P.pos[a] + P.pos[b]) / 2], 1), e: `${S}; ${a} and ${b} have exactly one seat between them, occupied by ${P.seat[(P.pos[a] + P.pos[b]) / 2]}.` })
  };
}

// ---------------- Chapter 28 ----------------
const p1 = puzzle('PQRSTUV'.split(''), [R.end('P'), R.immLeft('T', 'P'), R.middle('V'), R.immLeft('Q', 'V'), R.immRight('R', 'V'), R.immLeft('U', 'Q')]);
const p2 = puzzle('ABCDEFG'.split(''), [R.middle('G'), R.immLeft('A', 'G'), R.ends('B', 'D'), R.adj('E', 'B'), R.immLeft('C', 'E'), R.immRight('F', 'D')]);
const p3 = puzzle('HJKLMNO'.split(''), [R.middle('O'), R.between('L', 'O', 2), R.immLeft('H', 'O'), R.end('J'), R.rightK('K', 'H', 2, 'second'), R.immRight('M', 'K'), R.leftOf('L', 'J')]);

const i1 = 'Seven friends P, Q, R, S, T, U and V sit in a row facing north. The following facts are known:';
const i2 = 'Seven colleagues A, B, C, D, E, F and G sit in a row facing north. The following facts are known:';
const i3 = 'Seven students H, J, K, L, M, N and O sit in a row facing north. The following facts are known:';
const r1 = rowQs(p1, i1), r2 = rowQs(p2, i2), r3 = rowQs(p3, i3);

const ch28 = C({
  n: 28, id: 'y3-lr-complex-seating', cat: 'lr', title: 'Complex Seating Arrangements (7+ People)',
  tag: 'Linear arrangements with seven or more people: anchors, chains, negative clues and case splitting',
  over: 'A seating puzzle gives a set of conditions about who sits where and asks you to rebuild the unique arrangement. With seven or more people, guessing fails; you need a method. This chapter teaches the anchor-first method: start with the most definite clue, build chains of neighbours, handle "either-or" clues by splitting into two cases, and use negative clues only to eliminate.',
  place: 'Seating puzzles with 7–10 people are a standard logical-reasoning section in company tests, and one puzzle often carries four or five questions.',
  real: 'Allocating seats, shifts and desks under rules about who may sit near whom is the same kind of constraint problem.',
  obj: ['Choose the best anchor clue', 'Build chains such as "X is immediately left of Y"', 'Split an either-or clue into two cases and kill one', 'Use negative clues only for elimination', 'Answer exchange-of-seats questions'],
  pre: ['Seating Arrangements (basic)', 'Direct and Indirect Orderings'],
  refresh: 'When people face north, their left is the left side of the page. "Immediate" means adjacent; "second to the left" means one person between.',
  defs: [
    'Anchor: a clue that fixes a seat exactly, such as "sits in the middle" or "sits at an end next to X".',
    'Chain: several neighbour clues linked into a block of fixed relative order.',
    'Case split: when a clue offers two options (either end), try each and discard the one that breaks another clue.',
    'Positive clue: says where someone is. Negative clue: says where someone is not; use it last.',
    'For people facing north, left of the page is their left; for people facing south it is reversed.'
  ],
  intu: 'Every clue removes possibilities. Put the strongest clues in first so that later clues have only one place left to go.',
  mental: 'Draw seven boxes. Fill the anchor, attach chains to it, split any either-or clue, and finish by elimination. Re-read every clue against the finished row.',
  formulas: [
    ['Middle seat', 'Seat (n + 1)/2 for odd n', 'Row of 7: seat 4.', 'Anchors.', 'V in the middle of 7'],
    ['Persons between', 'Seat gap = persons between + 1', 'Two people given.', 'Gap clues.', '2 between: gap 3'],
    ['Left/right count', 'Right of seat s: n − s people', 'Counting questions.', 'Counting.', 'Seat 3 of 7: 4 on the right'],
    ['Swap check', 'Re-write the row after the swap', 'Exchange questions.', 'What-if.', 'Never edit the original'],
    ['Verification', 'Test every clue on the final row', 'Any puzzle.', 'Before answering.', 'All clues must hold']
  ],
  narr: [
    'Take seven people P to V with the clues: P sits at an end; T is immediately left of P; V is in the middle; Q is immediately left of V; R is immediately right of V; U is immediately left of Q. Start with the two firm anchors: V is seat 4. Q is seat 3, R seat 5, and U seat 2. Since T is immediately left of P, P cannot be at the left end, so P is at the right end (seat 7), T seat 6 and S takes the remaining seat 1. The row is S, U, Q, V, R, T, P.',
    'Always find the clue that has only one possible position. "Sits in the middle" gives one seat. "Sits at an end" gives two, so keep it for later. "Immediately left of Y" attaches X to Y and removes the left end for X\'s partner.',
    'An either-or clue needs case splitting. In the clues "B and D sit at the two ends", "E sits next to B" and "C is immediately left of E", suppose B is at the left end. Then E is seat 2 and C would have to be seat 1, which is already B. So B is at the right end, E seat 6 and C seat 5.',
    'Counting questions use the finished row. "How many people sit between L and O?" counts the seats strictly between them. "How many sit to the right of X" is 7 minus X\'s seat number.',
    'What-if questions change the row, not the clues. Write the row, swap the two named people, and read the answer from the new row.'
  ],
  deep: [['Eliminating a case', 'A case is dead the moment one clue is violated. Do not repair the case; discard it.'], ['Left vs right', 'Left and right depend on the direction faced. Check the facing direction in the problem before you start.']],
  vars: [['Fixed anchors', 'Middle or end clues.', 'V in the middle'], ['Chains', 'Immediate neighbours.', 'U–Q–V–R'], ['Either-or ends', 'Case split.', 'B and D at the ends'], ['Gap clues', 'Persons between.', 'Two between L and O'], ['What-if swaps', 'Rewrite the row.', 'Exchange seats']],
  ex: [
    { t: 'Anchors and chains', q: 'Seven friends P to V sit in a row facing north. P sits at an end; T is immediately left of P; V is in the middle; Q is immediately left of V; R is immediately right of V; U is immediately left of Q. Who sits at the left end?', g: ['Seven seats', 'Six clues'], c: 'Anchor V, then attach the chains.', s: [['Middle', 'V is seat 4.'], ['Chain', 'U, Q, V, R occupy seats 2, 3, 4, 5.'], ['Right end', 'T is immediately left of P, so P is at the right end: T seat 6, P seat 7.'], ['Left end', 'The only person left is S in seat 1.']], a: 'S', w: 'The row is S, U, Q, V, R, T, P.', tr: 'Placing P at the left end.' },
    { t: 'Case split', q: 'Seven colleagues A to G sit in a row facing north. G sits in the middle, A is immediately left of G, B and D sit at the two ends, E is next to B, C is immediately left of E, F is immediately right of D. Who sits at the right end?', g: ['B and D at ends'], c: 'Try B at the left end first.', s: [['Case B at left', 'E would be seat 2 and C seat 1, but seat 1 is B. Rejected.'], ['Case B at right', 'E is seat 6 and C seat 5.'], ['Remaining', 'G seat 4, A seat 3, D seat 1, F seat 2.']], a: 'B', w: 'The row is D, F, A, G, C, E, B.', tr: 'Keeping both cases open.' },
    { t: 'What-if', q: 'In the row S, U, Q, V, R, T, P, if U and T exchange seats, who sits immediately left of V?', g: ['Row S, U, Q, V, R, T, P'], c: 'Rewrite after the swap.', s: [['Swap', 'The new row is S, T, Q, V, R, U, P.'], ['Read', 'Immediately left of V is Q.']], a: 'Q', w: 'The swap does not affect seat 3.', tr: 'Using the old row.' }
  ],
  short: { title: 'Anchor first', trad: 'Place people one by one in clue order.', fast: 'Sort the clues by how few seats they allow, place those first, and split an either-or clue early.', rules: ['Middle and chain clues first.', 'Either-or: test both cases.', 'Negatives last.', 'Verify every clue.'] },
  mist: [['Mixing left and right', 'Facing direction ignored.', 'State the direction before placing.'], ['Counting seats instead of people between', 'Off by one.', 'Gap = persons between + 1.'], ['Editing the original row in what-if questions', 'Wrong answers.', 'Copy the row, then swap.']],
  tips: { sec: 150, elim: 'If an option contradicts any single clue, drop it at once.', adv: 'A clue that uses a name already placed is a free move.', ins: 'The same puzzle carries several questions, so build the full row once.' },
  rev: ['Pick anchors.', 'Build chains.', 'Split cases.', 'Count people between.', 'Verify.'],
  qf: ['Gap = between + 1', 'Right of seat s = n − s'],
  take: ['Anchor first.', 'Chains next.', 'Test cases.', 'Verify at the end.'],
  self: ['Can I pick the strongest clue?', 'Can I split an either-or clue?', 'Can I answer a swap question?']
});
const q28 = [];
const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
q28.push(E(r1.at(0, 'the left end')), E(r1.at(3, 'the middle', 1)), E(r1.immRightOf('V', 2)), E(r1.immLeftOf('P', 1)), E(r1.rightCount('Q')), E(r1.betweenCount('U', 'T')));
q28.push(M(r2.at(0, 'the left end', 1)), M(r2.at(6, 'the right end', 2)), M(r2.immRightOf('G', 2)), M(r2.immLeftOf('B', 1)), M(r2.betweenCount('F', 'E')), M(r2.rightCount('A')), M(r2.swap('A', 'E', 'G', 2)), M(r2.which('D', 'A')));
q28.push(P(r3.at(0, 'the left end', 1)), P(r3.at(6, 'the right end', 2)), P(r3.immLeftOf('K', 1)), P(r3.betweenCount('N', 'M')), P(r3.swap('N', 'M', 'O', 2)), P(r3.swap('L', 'J', 'H', 0)));
build(ch28, q28);

// ---------------- Chapter 29 ----------------
const cin = circ('in');
const cout = circ('out');
const mod = (a, n) => ((a % n) + n) % n;
const cp1 = puzzle('ACFBHDGE'.split(''), [cin.opposite('A', 'H'), cin.immLeft('C', 'A'), cin.leftK('F', 'A', 2, 'second'), cin.immLeft('B', 'F'), cin.immLeft('D', 'H'), cin.immLeft('G', 'D')], true);
const cp2 = puzzle('JMPLRKN'.split(''), [cin.immLeft('M', 'J'), cin.immLeft('P', 'M'), cin.leftK('R', 'P', 2, 'second'), cin.immLeft('K', 'R'), cin.immRight('N', 'J')], true);
const cp3 = puzzle('SWTXUYVZ'.split(''), [cout.opposite('S', 'U'), cout.immRight('W', 'S'), cout.rightK('T', 'S', 2, 'second'), cout.immRight('X', 'T'), cout.immLeft('Y', 'V'), cout.immLeft('Z', 'S')], true);

function circQs(P, intro, dir) {
  const sL = dir === 'in' ? 1 : -1;
  const T = (stem) => `${intro}\n${P.text}\n\n${stem}`;
  const S = `Going clockwise the seating is ${P.seat.join(', ')}`;
  const at = (x, off) => P.seat[mod(P.pos[x] + off, P.n)];
  const nb = (x) => dir === 'in' ? 'facing the centre' : 'facing outward';
  return {
    leftOf: (x, k, sk) => { const a = at(x, sL * k); return { q: T(`Who sits ${k === 1 ? 'immediately' : ordinal[k]} to the left of ${x}?`), c: a, w: others(P.people, a, sk), e: `${S}. Everyone is ${nb()}, so the left of ${x} is ${dir === 'in' ? 'clockwise' : 'anticlockwise'}; ${k === 1 ? 'immediately' : ordinal[k]} to the left of ${x} is ${a}.` }; },
    rightOf: (x, k, sk) => { const a = at(x, -sL * k); return { q: T(`Who sits ${k === 1 ? 'immediately' : ordinal[k]} to the right of ${x}?`), c: a, w: others(P.people, a, sk), e: `${S}. Everyone is ${nb()}, so the right of ${x} is ${dir === 'in' ? 'anticlockwise' : 'clockwise'}; ${k === 1 ? 'immediately' : ordinal[k]} to the right of ${x} is ${a}.` }; },
    opposite: (x, sk) => { const a = at(x, P.n / 2); return { q: T(`Who sits exactly opposite ${x}?`), c: a, w: others(P.people, a, sk), e: `${S}. The seat opposite ${x} is ${P.n / 2} seats away, which is ${a}.` }; },
    shortBetween: (x, y) => { const d = Math.min(mod(P.pos[x] - P.pos[y], P.n), mod(P.pos[y] - P.pos[x], P.n)); const k = d - 1; return { q: T(`How many people sit between ${x} and ${y} along the shorter side?`), c: k, w: [k + 1, k + 2, k + 3], e: `${S}. ${x} and ${y} are ${d} seats apart along the shorter side, so ${k} ${k === 1 ? 'person sits' : 'people sit'} between them, which is ${k}.` }; },
    swapLeft: (x, y, a, sk) => { const seat = P.seat.slice(); const i = seat.indexOf(x), j = seat.indexOf(y); [seat[i], seat[j]] = [seat[j], seat[i]]; const w = seat[mod(P.pos[a] + sL, P.n)]; return { q: T(`If ${x} and ${y} exchange their seats, who sits immediately to the left of ${a}?`), c: w, w: others(P.people, w, sk), e: `${S}. After ${x} and ${y} exchange seats the order is ${seat.join(', ')}, so the immediate left of ${a} is ${w}.` }; }
  };
}
const ci1 = 'Eight friends A, B, C, D, E, F, G and H sit around a circular table facing the centre. The immediate left of a person is the next seat clockwise. The following facts are known:';
const ci2 = 'Seven students J, K, L, M, N, P and R sit around a circular table facing the centre. The immediate left of a person is the next seat clockwise. The following facts are known:';
const ci3 = 'Eight friends S, T, U, V, W, X, Y and Z sit around a circular table facing outward, away from the centre. For a person facing outward, the immediate left is the next seat anticlockwise. The following facts are known:';
const c1 = circQs(cp1, ci1, 'in'), c2 = circQs(cp2, ci2, 'in'), c3 = circQs(cp3, ci3, 'out');

const ch29 = C({
  n: 29, id: 'y3-lr-circular-seating', cat: 'lr', title: 'Circular Seating Arrangements',
  tag: 'Round-table puzzles: facing inward or outward, left and right, opposite seats and rotations',
  over: 'In a circular arrangement there is no first or last seat, so the first job is to fix one person as a reference. The second job is to settle which way people face: when they face the centre their left is clockwise, and when they face outward their left is anticlockwise. With those two settled, the same anchor-and-chain method from linear seating applies, plus a new anchor: "sits opposite", which is exactly n/2 seats away.',
  place: 'Circular seating puzzles with 6–8 people are asked in almost every written logical-reasoning round.',
  real: 'Round-table meetings, circular conveyor stations and clock-like layouts follow these rules.',
  obj: ['Fix a reference and a direction before placing anyone', 'Convert left and right correctly for inward and outward facing', 'Use opposite seats as anchors', 'Count people between along the shorter side', 'Handle people facing different directions'],
  pre: ['Complex Seating Arrangements'],
  refresh: 'Clockwise goes the way a clock\'s hands move. Opposite seats in a ring of n people are n/2 seats apart.',
  defs: [
    'Facing the centre: left = clockwise, right = anticlockwise.',
    'Facing outward: left = anticlockwise, right = clockwise.',
    'Opposite: exactly n/2 seats apart in a ring of n (n even).',
    'Reference person: the one fixed at seat 0 because rotating the whole ring gives the same arrangement.',
    'Neighbour: a person in an adjacent seat.'
  ],
  intu: 'A circle has no corner to start from, so pin one person down. After that it is a row that wraps around, with the left and right flipping when the facing direction flips.',
  mental: 'Draw a circle with seats 0 to n − 1 clockwise. Place the reference at the top, mark clockwise, then convert every left or right clue into "clockwise" or "anticlockwise" using the facing direction.',
  formulas: [
    ['Opposite', 'Seat + n/2', 'Even n.', 'Anchors.', 'n = 8: 4 seats away'],
    ['Inward left', 'Clockwise neighbour', 'Facing the centre.', 'Left/right.', 'Left of seat 0 is seat 1'],
    ['Outward left', 'Anticlockwise neighbour', 'Facing away.', 'Left/right.', 'Left of seat 0 is seat n − 1'],
    ['People between', 'Shorter gap − 1', 'Two people given.', 'Counting.', '3 seats apart: 2 between'],
    ['Rotation', 'Fix one person', 'Any ring.', 'Start.', 'Fix A at seat 0']
  ],
  narr: [
    'Fix a reference person at the top and label seats 0 to n − 1 clockwise. Eight friends face the centre: A and H sit opposite each other, C is immediately left of A, F is second to the left of A, B is immediately left of F, D is immediately left of H, and G is immediately left of D. With A at seat 0, H is at seat 4. Left means clockwise, so C is seat 1, F seat 2, B seat 3, D seat 5, G seat 6, and E takes seat 7. Clockwise order: A, C, F, B, H, D, G, E.',
    'When everyone faces the centre, "immediately left of A" is the next seat clockwise. When everyone faces outward, the word "left" points the other way, so "immediately left of S" is the next seat anticlockwise. The same clue on a different facing direction gives a different arrangement.',
    '"Exactly opposite" is the strongest anchor because it fixes a pair at once. In a ring of 8, the opposite of seat s is seat s + 4.',
    'To count people between two seats, count along the shorter side unless the question says otherwise. If two people are 3 seats apart, 2 people sit between them.',
    'For exchange questions, copy the clockwise order, swap the two named people, then read the neighbour you are asked about.'
  ],
  deep: [['Mixed facing', 'If some people face in and some face out, convert each clue for each person separately before placing them.'], ['Clockwise vs anticlockwise order', 'Always record the final order in one direction only and stay in it.']],
  vars: [['Inward-facing', 'Left is clockwise.', 'A at seat 0'], ['Outward-facing', 'Left is anticlockwise.', 'Flip direction'], ['Opposite anchors', 'Seat + n/2.', 'A and H'], ['Counting between', 'Shorter side.', 'Two seats apart'], ['Exchange of seats', 'Swap, then read.', 'If D and G swap']],
  ex: [
    { t: 'Inward-facing ring', q: 'Eight friends sit around a table facing the centre. A and H are opposite each other; C is immediately left of A; F is second to the left of A; B is immediately left of F; D is immediately left of H; G is immediately left of D. Who sits immediately to the right of A?', g: ['8 people', 'Facing the centre'], c: 'Left = clockwise.', s: [['Fix', 'A at seat 0, H at seat 4.'], ['Clockwise', 'C seat 1, F seat 2, B seat 3, D seat 5, G seat 6.'], ['Right of A', 'The right of A is anticlockwise, which is seat 7 = E.']], a: 'E', w: 'Order: A, C, F, B, H, D, G, E.', tr: 'Taking right as clockwise.' },
    { t: 'Outward-facing ring', q: 'Eight friends sit around a table facing outward. In the clockwise order S, W, T, X, U, Y, V, Z, who sits immediately to the left of S?', g: ['Facing outward'], c: 'Outward-facing left = anticlockwise.', s: [['Direction', 'Facing outward, left is anticlockwise.'], ['Anticlockwise from S', 'The person before S in the clockwise list is Z (the list wraps around).']], a: 'Z', w: 'Facing the centre the left of S would be W.', tr: 'Using clockwise.' },
    { t: 'People between', q: 'In the clockwise ring A, C, F, B, H, D, G, E, how many people sit between A and D along the shorter side?', g: ['8 seats'], c: 'Shorter gap.', s: [['Gaps', 'A to D clockwise is 5 seats, anticlockwise 3 seats.'], ['Shorter', '3 seats, so 2 people (G and E) sit between them.']], a: '2', w: 'Seats between = gap − 1.', tr: 'Counting the longer side.' }
  ],
  short: { title: 'Fix, face, flip', trad: 'Guess a placement.', fast: 'Fix one person, state the facing direction, convert left/right to clockwise/anticlockwise, then place by anchors.', rules: ['Inward: left is clockwise.', 'Outward: left is anticlockwise.', 'Opposite = n/2 apart.', 'Count along the shorter side.'] },
  mist: [['Forgetting the facing direction', 'Left and right swap.', 'Write it at the top of the diagram.'], ['Not fixing a reference', 'Endless rotations.', 'Fix one person.'], ['Counting the longer side', 'Wrong people between.', 'Use the shorter side.']],
  tips: { sec: 150, elim: 'Opposite pairs must be n/2 apart; use this to reject options.', adv: 'Draw the ring once and mark clockwise.', ins: 'Facing-direction twists are the usual trap in harder sets.' },
  rev: ['Fix a reference.', 'Facing sets left.', 'Opposite anchors.', 'Shorter-side counts.', 'Swap then read.'],
  qf: ['Opposite = seat + n/2', 'Between = gap − 1'],
  take: ['Fix, face, flip.', 'Anchor with opposite.', 'Use the shorter side.', 'Verify clues.'],
  self: ['Can I place people from an opposite clue?', 'Can I convert left to clockwise?', 'Can I count people between?']
});
const q29 = [];
q29.push(E(c1.leftOf('A', 1)), E(c1.rightOf('A', 1, 1)), E(c1.opposite('C', 2)), E(c1.leftOf('F', 1, 1)), E(c1.shortBetween('A', 'D')), E(c1.opposite('B', 1)));
q29.push(M(c2.leftOf('J', 1)), M(c2.rightOf('J', 1, 1)), M(c2.leftOf('L', 2, 2)), M(c2.rightOf('R', 2)), M(c2.shortBetween('J', 'L')), M(c2.shortBetween('N', 'P')), M(c2.swapLeft('M', 'K', 'J', 1)), M(c2.leftOf('K', 1, 2)));
q29.push(P(c3.leftOf('S', 1)), P(c3.rightOf('S', 1, 1)), P(c3.opposite('X', 2)), P(c3.leftOf('T', 2, 1)), P(c3.swapLeft('W', 'Z', 'S', 2)), P(c3.shortBetween('W', 'Y')));
build(ch29, q29);
