// Brute-force helper for arrangement puzzles: constraints carry both the text shown to the
// student and the predicate used to solve, so answers are computed, never typed by hand.
function* permutations(a) {
  if (a.length <= 1) { yield a.slice(); return; }
  for (let i = 0; i < a.length; i++) {
    const rest = a.slice(0, i).concat(a.slice(i + 1));
    for (const p of permutations(rest)) yield [a[i], ...p];
  }
}

// kind 'row': seat index 0..n-1 from left to right, people face north.
// kind 'circle': seat index 0..n-1 clockwise, people face the centre (left = clockwise) or outward (left = anticlockwise).
const row = {
  end: (x) => ({ t: `${x} sits at one of the two extreme ends.`, f: (p, n) => p[x] === 0 || p[x] === n - 1 }),
  ends: (x, y) => ({ t: `${x} and ${y} sit at the two extreme ends (in either order).`, f: (p, n) => (p[x] === 0 && p[y] === n - 1) || (p[y] === 0 && p[x] === n - 1) }),
  middle: (x) => ({ t: `${x} sits exactly in the middle.`, f: (p, n) => p[x] === (n - 1) / 2 }),
  adj: (x, y) => ({ t: `${x} sits immediately next to ${y}.`, f: (p) => Math.abs(p[x] - p[y]) === 1 }),
  notAdj: (x, y) => ({ t: `${x} does not sit next to ${y}.`, f: (p) => Math.abs(p[x] - p[y]) !== 1 }),
  immLeft: (x, y) => ({ t: `${x} sits immediately to the left of ${y}.`, f: (p) => p[x] === p[y] - 1 }),
  immRight: (x, y) => ({ t: `${x} sits immediately to the right of ${y}.`, f: (p) => p[x] === p[y] + 1 }),
  leftK: (x, y, k, word) => ({ t: `${x} sits ${word} to the left of ${y}.`, f: (p) => p[x] === p[y] - k }),
  rightK: (x, y, k, word) => ({ t: `${x} sits ${word} to the right of ${y}.`, f: (p) => p[x] === p[y] + k }),
  between: (x, y, k) => ({ t: `Exactly ${k} ${k === 1 ? 'person sits' : 'people sit'} between ${x} and ${y}.`, f: (p) => Math.abs(p[x] - p[y]) === k + 1 }),
  leftOf: (x, y) => ({ t: `${x} sits somewhere to the left of ${y}.`, f: (p) => p[x] < p[y] })
};

// Circle with people facing the centre: the immediate left of a person is the next seat clockwise.
const circ = (facing) => {
  const s = facing === 'in' ? 1 : -1; // seat offset of the immediate left neighbour
  const mod = (a, n) => ((a % n) + n) % n;
  return {
    opposite: (x, y) => ({ t: `${x} sits exactly opposite ${y}.`, f: (p, n) => mod(p[x] - p[y], n) === n / 2 }),
    adj: (x, y) => ({ t: `${x} sits next to ${y}.`, f: (p, n) => mod(p[x] - p[y], n) === 1 || mod(p[y] - p[x], n) === 1 }),
    notAdj: (x, y) => ({ t: `${x} does not sit next to ${y}.`, f: (p, n) => !(mod(p[x] - p[y], n) === 1 || mod(p[y] - p[x], n) === 1) }),
    immLeft: (x, y) => ({ t: `${x} sits immediately to the left of ${y}.`, f: (p, n) => mod(p[x] - p[y], n) === mod(s, n) }),
    immRight: (x, y) => ({ t: `${x} sits immediately to the right of ${y}.`, f: (p, n) => mod(p[x] - p[y], n) === mod(-s, n) }),
    leftK: (x, y, k, word) => ({ t: `${x} sits ${word} to the left of ${y}.`, f: (p, n) => mod(p[x] - p[y], n) === mod(s * k, n) }),
    rightK: (x, y, k, word) => ({ t: `${x} sits ${word} to the right of ${y}.`, f: (p, n) => mod(p[x] - p[y], n) === mod(-s * k, n) }),
    between: (x, y, k) => ({ t: `Exactly ${k} ${k === 1 ? 'person sits' : 'people sit'} between ${x} and ${y} when counted along the shorter side.`, f: (p, n) => { const d = Math.min(mod(p[x] - p[y], n), mod(p[y] - p[x], n)); return d === k + 1; } })
  };
};

// Returns all seatings (array seat -> person) that satisfy every constraint. For a circle the first
// person is fixed at seat 0 because rotations are the same arrangement.
function solve(people, cons, circular) {
  const n = people.length;
  const out = [];
  const rest = circular ? people.slice(1) : people;
  for (const q of permutations(rest)) {
    const seat = circular ? [people[0], ...q] : q;
    const p = {};
    seat.forEach((x, i) => { p[x] = i; });
    if (cons.every((c) => c.f(p, n))) out.push(seat);
  }
  return out;
}

// Builds a puzzle and throws unless the solution is unique.
function puzzle(people, cons, circular) {
  const sols = solve(people, cons, circular);
  if (sols.length !== 1) throw new Error(`puzzle not unique: ${sols.length} solutions for ${people.join('')}`);
  const seat = sols[0];
  const pos = {};
  seat.forEach((x, i) => { pos[x] = i; });
  return { people, seat, pos, n: people.length, text: cons.map((c, i) => `${i + 1}. ${c.t}`).join('\n') };
}

// Distractor people: the first three names that are not the right one, rotated so the pattern varies.
function others(people, correct, skip) {
  const pool = people.filter((x) => x !== correct);
  const k = (skip || 0) % pool.length;
  return pool.slice(k).concat(pool.slice(0, k)).slice(0, 3);
}

// Generic one-to-one ordering puzzles (floors, stacked boxes, days). Index 0 is the first label.
// w holds the wording: at(x, label), first(x), last(x), before(x, y), immBefore(x, y), gap(x, y, k), adj(x, y), notAdj(x, y), notAt(x, label)
function ord(labels, w) {
  const n = labels.length;
  return {
    at: (x, i) => ({ t: w.at(x, labels[i]), f: (p) => p[x] === i }),
    notAt: (x, i) => ({ t: w.notAt(x, labels[i]), f: (p) => p[x] !== i }),
    first: (x) => ({ t: w.first(x), f: (p) => p[x] === 0 }),
    last: (x) => ({ t: w.last(x), f: (p) => p[x] === n - 1 }),
    before: (x, y) => ({ t: w.before(x, y), f: (p) => p[x] < p[y] }),
    immBefore: (x, y) => ({ t: w.immBefore(x, y), f: (p) => p[x] === p[y] - 1 }),
    gap: (x, y, k) => ({ t: w.gap(x, y, k), f: (p) => Math.abs(p[x] - p[y]) === k + 1 }),
    adj: (x, y) => ({ t: w.adj(x, y), f: (p) => Math.abs(p[x] - p[y]) === 1 }),
    notAdj: (x, y) => ({ t: w.notAdj(x, y), f: (p) => Math.abs(p[x] - p[y]) !== 1 })
  };
}

module.exports = { row, circ, ord, puzzle, solve, others, permutations };
