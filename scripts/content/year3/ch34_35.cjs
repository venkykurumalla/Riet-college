const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const nums = (k) => { const o = []; for (const d of [1, 2, -1, -2, 3, 4]) { const v = k + d; if (v > 0 && !o.includes(v) && o.length < 3) o.push(v); } return o; };
const pick = (arr, i) => arr[i % arr.length];

function combos(arr, k) {
  const out = [];
  const rec = (start, cur) => { if (cur.length === k) { out.push(cur.slice()); return; } for (let i = start; i < arr.length; i++) { cur.push(arr[i]); rec(i + 1, cur); cur.pop(); } };
  rec(0, []);
  return out;
}

// ---------- selection ----------
const sel = {
  ifThen: (a, b) => ({ t: `If ${a} is selected, ${b} must also be selected.`, f: (s) => !s.has(a) || s.has(b) }),
  notBoth: (a, b) => ({ t: `${a} and ${b} cannot both be selected.`, f: (s) => !(s.has(a) && s.has(b)) }),
  atLeastOne: (a, b) => ({ t: `At least one of ${a} and ${b} must be selected.`, f: (s) => s.has(a) || s.has(b) }),
  together: (a, b) => ({ t: `${a} and ${b} are either both selected or both left out.`, f: (s) => s.has(a) === s.has(b) }),
  exactlyOne: (a, b) => ({ t: `Exactly one of ${a} and ${b} is selected.`, f: (s) => s.has(a) !== s.has(b) })
};
function selPuzzle(people, k, cons, what) {
  const all = combos(people, k);
  const valid = all.filter((c) => cons.every((x) => x.f(new Set(c))));
  const invalid = all.filter((c) => !cons.every((x) => x.f(new Set(c))));
  const intro = `${what} ${k} is to be selected from ${people.length} candidates: ${people.join(', ')}. The following conditions apply:`;
  const text = `${intro}\n${cons.map((c, i) => `${i + 1}. ${c.t}`).join('\n')}`;
  const T = (s) => `${text}\n\n${s}`;
  const withX = (x) => valid.filter((c) => c.includes(x));
  const inter = (list) => people.filter((p) => list.every((c) => c.includes(p)));
  const S = `The valid selections are ${valid.map((c) => '{' + c.join(', ') + '}').join('; ')}`;
  const summary = valid.length <= 8 ? S : `There are ${valid.length} valid selections`;
  return {
    valid, people,
    count: () => ({ q: T('How many different selections are possible?'), c: valid.length, w: nums(valid.length), e: `${summary}, so the number of selections is ${valid.length}.` }),
    validOne: (vi, inv, alt) => {
      const good = valid[vi % valid.length];
      const bads = [0, 1, 2].map((j) => invalid[(inv + j * 7) % invalid.length]);
      const broken = (c) => cons.findIndex((x) => !x.f(new Set(c))) + 1;
      const opts = [good, ...bads].map((c) => c.join(', '));
      return { q: T(alt ? 'Which of the following selections satisfies all the conditions?' : 'Which of the following is a valid selection?'), c: good.join(', '), w: bads.map((c) => c.join(', ')), e: `${good.join(', ')} satisfies every condition. ${bads.map((c) => `${c.join(', ')} breaks condition ${broken(c)}`).join('; ')}.` };
    },
    must: (sk) => {
      const m = inter(valid);
      if (!m.length) throw new Error('no must-include person');
      const c = m[0];
      const notAlways = people.filter((p) => !m.includes(p));
      return { q: T('Which person is selected in every valid selection?'), c, w: notAlways.slice(sk || 0).concat(notAlways).slice(0, 3), e: `${summary}; ${c} appears in all of them, so ${c} must be selected.` };
    },
    never: (sk) => {
      const n = people.filter((p) => valid.every((c) => !c.includes(p)));
      if (!n.length) throw new Error('no never-selected person');
      const c = n[0];
      const sometimes = people.filter((p) => !n.includes(p));
      return { q: T('Which person can never be selected?'), c, w: sometimes.slice(sk || 0).concat(sometimes).slice(0, 3), e: `${summary}; ${c} appears in none of them, so ${c} can never be selected.` };
    },
    ifThenX: (x, sk) => {
      const m = inter(withX(x)).filter((p) => p !== x);
      if (!m.length) throw new Error('no forced partner for ' + x);
      const c = m[0];
      const others = people.filter((p) => p !== x && !m.includes(p));
      return { q: T(`If ${x} is selected, which person must also be selected?`), c, w: others.slice(sk || 0).concat(others).slice(0, 3), e: `Among the valid selections that include ${x}, ${c} is always present, so ${c} must also be selected.` };
    },
    countWith: (x) => ({ q: T(`In how many valid selections is ${x} included?`), c: withX(x).length, w: nums(withX(x).length), e: `${summary}; ${x} appears in ${withX(x).length} of them, which is ${withX(x).length}.` }),
    countWithout: (x) => { const k2 = valid.length - withX(x).length; return { q: T(`In how many valid selections is ${x} left out?`), c: k2, w: nums(k2), e: `${summary}; ${x} is absent from ${k2} of them, which is ${k2}.` }; },
    countBoth: (x, y) => { const k2 = valid.filter((c) => c.includes(x) && c.includes(y)).length; return { q: T(`In how many valid selections are ${x} and ${y} both included?`), c: k2, w: nums(k2), e: `${summary}; ${x} and ${y} appear together in ${k2} of them, which is ${k2}.` }; }
  };
}

const names7 = ['Ajay', 'Bela', 'Chetan', 'Dhara', 'Ela', 'Faiz', 'Gopal'];
const sp1 = selPuzzle(names7, 4, [sel.ifThen('Ajay', 'Bela'), sel.notBoth('Chetan', 'Dhara'), sel.ifThen('Ela', 'Faiz'), sel.atLeastOne('Gopal', 'Dhara')], 'A committee of');
const sp2 = selPuzzle(names7, 3, [sel.ifThen('Ajay', 'Chetan'), sel.notBoth('Bela', 'Faiz'), sel.together('Dhara', 'Gopal'), sel.atLeastOne('Ela', 'Ajay')], 'A team of');
const sp3 = selPuzzle(names7, 4, [sel.exactlyOne('Ajay', 'Bela'), sel.ifThen('Chetan', 'Dhara'), sel.notBoth('Ela', 'Gopal'), sel.ifThen('Faiz', 'Ajay')], 'A delegation of');
const x1 = sp1, x2 = sp2, x3 = sp3;

// ---------- distribution ----------
function distPuzzle(items, persons, cons, what) {
  const all = [];
  const rec = (i, cur) => { if (i === items.length) { all.push(cur.slice()); return; } for (const p of persons) { cur.push(p); rec(i + 1, cur); cur.pop(); } };
  rec(0, []);
  const toMap = (a) => { const m = {}; items.forEach((it, i) => { m[it] = a[i]; }); return m; };
  const valid = all.filter((a) => cons.every((c) => c.f(toMap(a), a)));
  const text = `${what} ${items.length} items (${items.join(', ')}) are distributed among ${persons.length} people (${persons.join(', ')}); each item goes to exactly one person. The following conditions apply:\n${cons.map((c, i) => `${i + 1}. ${c.t}`).join('\n')}`;
  const T = (s) => `${text}\n\n${s}`;
  const S = `There are ${valid.length} valid distributions`;
  return {
    valid,
    count: () => ({ q: T('In how many different ways can the items be distributed?'), c: valid.length, w: nums(valid.length), e: `${S}, so the answer is ${valid.length}.` }),
    countWhere: (item, person) => { const i = items.indexOf(item); const k = valid.filter((a) => a[i] === person).length; return { q: T(`In how many valid distributions does ${person} get ${item}?`), c: k, w: nums(k), e: `${S}; ${person} gets ${item} in ${k} of them, which is ${k}.` }; },
    forced: (item, sk) => { const i = items.indexOf(item); const set = [...new Set(valid.map((a) => a[i]))]; if (set.length !== 1) throw new Error('item not forced ' + item); const c = set[0]; const w = persons.filter((p) => p !== c); return { q: T(`Which person always gets ${item}?`), c, w: w.slice(sk || 0).concat(w).slice(0, 3), e: `${S}; in all of them ${item} goes to ${c}.` }; },
    maxItems: (person) => { const k = Math.max(...valid.map((a) => a.filter((p) => p === person).length)); return { q: T(`What is the largest number of items ${person} can receive in a valid distribution?`), c: k, w: nums(k), e: `${S}; the largest number of items ${person} receives is ${k}.` }; }
  };
}
const dist = {
  gets: (i, p) => ({ t: `${i} goes to ${p}.`, f: (m) => m[i] === p }),
  notGets: (i, p) => ({ t: `${i} does not go to ${p}.`, f: (m) => m[i] !== p }),
  same: (i, j) => ({ t: `${i} and ${j} go to the same person.`, f: (m) => m[i] === m[j] }),
  apart: (i, j) => ({ t: `${i} and ${j} go to different people.`, f: (m) => m[i] !== m[j] }),
  atLeastOne: (persons) => ({ t: 'Every person gets at least one item.', f: (m, a) => persons.every((p) => a.includes(p)) }),
  atMost: (p, k) => ({ t: `${p} gets at most ${k} ${k === 1 ? 'item' : 'items'}.`, f: (m, a) => a.filter((x) => x === p).length <= k })
};
const items = ['book', 'pen', 'bag', 'watch', 'cap'];
const kids = ['Rahul', 'Sneha', 'Tarun'];
const dp = distPuzzle(items, kids, [dist.atLeastOne(kids), dist.gets('book', 'Rahul'), dist.apart('pen', 'bag'), dist.same('watch', 'cap'), dist.atMost('Rahul', 2)], 'Five gifts');
const dq = dp;

// ---------------- Chapter 34 ----------------
const ch34 = C({
  n: 34, id: 'y3-lr-selection-distribution', cat: 'lr', title: 'Selection and Distribution Problems',
  tag: 'Choosing people under conditions and distributing items among people: conditional, exclusion and either-or rules',
  url: 'https://www.indiabix.com/logical-reasoning/',
  over: 'In a selection puzzle you choose a fixed number of people from a pool under conditions such as "if A is chosen, B must be chosen" or "C and D cannot both be chosen". In a distribution puzzle you assign items to people under similar rules. The method is to translate each condition into a precise logical statement, list the cases created by the strongest condition, and count or deduce from the cases that survive.',
  place: 'Selection and distribution sets with five or six conditions are a classic logical-reasoning type in company tests.',
  real: 'Choosing a project team with compatibility rules or allocating tasks to staff follows the same logic.',
  obj: ['Translate if-then, either-or and not-both conditions correctly', 'Enumerate valid selections systematically', 'Find people who must or cannot be selected', 'Count selections or distributions that satisfy all conditions', 'Use the contrapositive of an if-then rule'],
  pre: ['Complex Seating Arrangements', 'Combinations'],
  refresh: '"If A then B" is false only when A is chosen and B is not. Its contrapositive is "if not B then not A".',
  defs: [
    'If A then B: choosing A forces B; B can be chosen without A.',
    'A only if B: the same as "if A then B".',
    'Not both: A and B cannot appear together; neither or exactly one is allowed.',
    'Exactly one: one and only one of A, B is chosen.',
    'Either both or neither: A and B are chosen together or left out together.'
  ],
  intu: 'Each condition removes some selections from the pool of all possible ones. Whatever is left is the answer set, and every question is about that set.',
  mental: 'List the strongest condition first, split into cases, build the valid selections case by case, then answer from the list.',
  formulas: [
    ['If-then', 'A → B ≡ ¬B → ¬A', 'Conditional.', 'Contrapositive.', 'If Ajay then Bela'],
    ['Not both', '¬(A ∧ B)', 'Exclusion.', 'Pairs.', 'Chetan and Dhara'],
    ['At least one', 'A ∨ B', 'Coverage.', 'Either-or.', 'Gopal or Dhara'],
    ['Count', 'C(n, k) before conditions', 'Total selections.', 'Upper bound.', 'C(7,4) = 35'],
    ['Case split', 'Split on the most restrictive person', 'Any set.', 'Enumeration.', 'Ajay in / Ajay out']
  ],
  narr: [
    'A committee of 4 is chosen from Ajay, Bela, Chetan, Dhara, Ela, Faiz and Gopal. If Ajay is selected, Bela must be selected; Chetan and Dhara cannot both be selected; Ela is selected only if Faiz is selected; at least one of Gopal and Dhara is selected. There are C(7,4) = 35 possible committees before conditions, and the conditions cut them to a short list that can be written out.',
    'Split on Ajay. If Ajay is in, Bela is in, and two more members must come from the others while obeying the remaining conditions. If Ajay is out, choose four from the other six under the remaining conditions.',
    'The contrapositive of "if Ajay then Bela" is "if Bela is not selected, Ajay is not selected". Use it to rule out Ajay as soon as you know Bela is out.',
    'For distribution, list the items and the people, then place the forced items first. In the five-gift example, the book goes to Rahul, the watch and the cap go to the same person, the pen and the bag go to different people, every child gets something, and Rahul gets at most two items.',
    'Counting questions are answered from the finished list; "must be selected" means present in every valid selection; "can never be selected" means present in none.'
  ],
  deep: [['Necessary vs sufficient', 'In "A only if B", B is necessary for A, not sufficient: B alone does not force A.'], ['Counting without listing', 'For large sets, count the cases of the strongest condition and add them, instead of listing every selection.']],
  vars: [['If-then rules', 'Forced partners.', 'Ajay → Bela'], ['Exclusion rules', 'Not both.', 'Chetan, Dhara'], ['Either-or', 'At least or exactly one.', 'Gopal or Dhara'], ['Counting valid sets', 'List then count.', 'How many committees'], ['Distribution', 'Assign items.', 'Gifts to children']],
  ex: [
    { t: 'Contrapositive', q: 'The rule is "If Ajay is selected, Bela must be selected". Bela is not selected. What follows about Ajay?', g: ['A → B', 'Not B'], c: 'Contrapositive.', s: [['Contrapositive', 'If Bela is not selected then Ajay is not selected.'], ['Apply', 'Bela is out, so Ajay is out.']], a: 'Ajay is not selected', w: 'The rule does not say Bela forces Ajay.', tr: 'Concluding nothing.' },
    { t: 'Either-or', q: 'Exactly one of Ajay and Bela is selected for a team of 4 from 7 people. How many of the two are selected?', g: ['Exactly one'], c: 'Read the condition.', s: [['Condition', 'Exactly one means one and only one.'], ['Count', '1.']], a: '1', w: 'Not both, not neither.', tr: 'Answering 2.' },
    { t: 'Counting', q: 'A committee of 2 is chosen from 4 people W, X, Y, Z with the condition that W and X cannot both be chosen. How many committees are possible?', g: ['C(4,2) = 6'], c: 'Subtract the forbidden pair.', s: [['Total', 'C(4,2) = 6.'], ['Forbidden', 'Only {W, X} breaks the condition.'], ['Valid', '6 − 1 = 5.']], a: '5', w: 'Pairs: WY, WZ, XY, XZ, YZ.', tr: 'Answering 6.' }
  ],
  short: { title: 'Case split then list', trad: 'Try random committees.', fast: 'Split on the person in the most conditions, build each case, and answer questions from the final list.', rules: ['If A then B ≡ if not B then not A.', 'Must = in every set.', 'Never = in no set.', 'Count from the list.'] },
  mist: [['Reading "if A then B" as "if B then A"', 'Converse error.', 'Use the contrapositive instead.'], ['Treating "only if" backwards', 'A only if B means A → B.', 'Rewrite as if-then.'], ['Missing a selection in the list', 'Wrong count.', 'Split into cases and tick each.']],
  tips: { sec: 180, elim: 'Test each option against every condition.', adv: 'Split on the most-mentioned person first.', ins: 'A short list of valid selections answers every question.' },
  rev: ['If-then and contrapositive.', 'Not both.', 'Either-or.', 'Case split.', 'Count from the list.'],
  qf: ['A → B ≡ ¬B → ¬A', 'C(n, k)'],
  take: ['Translate conditions exactly.', 'Split cases.', 'Use the list.', 'Check each option.'],
  self: ['Can I use a contrapositive?', 'Can I list valid selections?', 'Can I count distributions?']
});
const q34 = [E(x1.count()), E(x1.validOne(0, 0)), E(x1.countWith('Ajay')), E(x1.countWithout('Ajay')), E(x1.ifThenX('Ajay')), E(x1.countBoth('Gopal', 'Bela')),
  M(x2.count()), M(x2.validOne(0, 3)), M(x2.validOne(1, 11, true)), M(x2.countWith('Dhara')), M(x2.countWithout('Ajay')), M(x2.countBoth('Dhara', 'Gopal')), M(x2.countWith('Ela')), M(x2.countWithout('Chetan')),
  P(x3.count()), P(x3.validOne(2, 5)), P(x3.countWith('Chetan')), P(dq.count()), P(dq.countWhere('pen', 'Sneha')), P(dq.maxItems('Sneha'))];
build(ch34, q34);

// ---------- grouping ----------
function partitions(people, size) {
  const out = [];
  const rec = (rest, cur) => {
    if (!rest.length) { out.push(cur.map((g) => g.slice())); return; }
    const first = rest[0];
    for (const c of combos(rest.slice(1), size - 1)) {
      const g = [first, ...c];
      rec(rest.filter((p) => !g.includes(p)), [...cur, g]);
    }
  };
  rec(people, []);
  return out;
}
const grp = {
  same: (a, b) => ({ t: `${a} and ${b} are in the same group.`, f: (g) => g.some((x) => x.includes(a) && x.includes(b)) }),
  apart: (a, b) => ({ t: `${a} and ${b} are in different groups.`, f: (g) => !g.some((x) => x.includes(a) && x.includes(b)) }),
  notWith: (a, b, c) => ({ t: `${a} is not in the same group as ${b} or ${c}.`, f: (g) => !g.some((x) => x.includes(a) && (x.includes(b) || x.includes(c))) }),
  ifSame: (a, b, c) => ({ t: `If ${a} and ${b} are in the same group, ${c} is in that group too.`, f: (g) => !g.some((x) => x.includes(a) && x.includes(b)) || g.some((x) => x.includes(a) && x.includes(b) && x.includes(c)) })
};
function grpPuzzle(people, size, cons, what) {
  const all = partitions(people, size);
  const valid = all.filter((g) => cons.every((c) => c.f(g)));
  const text = `${what} ${people.length} people (${people.join(', ')}) are divided into groups of ${size} (groups are not ordered). The following conditions apply:\n${cons.map((c, i) => `${i + 1}. ${c.t}`).join('\n')}`;
  const T = (s) => `${text}\n\n${s}`;
  const show = (g) => g.map((x) => '{' + x.join(', ') + '}').join(' and ');
  const S = `The valid divisions are ${valid.map(show).join('; ')}`;
  const sum = valid.length <= 6 ? S : `There are ${valid.length} valid divisions`;
  const mates = (x) => valid.map((g) => g.find((t) => t.includes(x)).filter((p) => p !== x));
  return {
    valid,
    count: () => ({ q: T('In how many ways can the people be divided?'), c: valid.length, w: nums(valid.length), e: `${sum}, so the number of ways is ${valid.length}.` }),
    always: (x, sk) => { const m = people.filter((p) => p !== x && mates(x).every((a) => a.includes(p))); if (!m.length) throw new Error('no fixed partner ' + x); const c = m[0]; const o = people.filter((p) => p !== x && !m.includes(p)); return { q: T(`Which person is always in the same group as ${x}?`), c, w: o.slice(sk || 0).concat(o).slice(0, 3), e: `${sum}; ${c} is with ${x} in every valid division.` }; },
    never: (x, sk) => { const m = people.filter((p) => p !== x && mates(x).every((a) => !a.includes(p))); if (!m.length) throw new Error('no excluded partner ' + x); const c = m[0]; const o = people.filter((p) => p !== x && !m.includes(p)); return { q: T(`Which person is never in the same group as ${x}?`), c, w: o.slice(sk || 0).concat(o).slice(0, 3), e: `${sum}; ${c} is never with ${x}.` }; },
    countTogether: (x, y) => { const k = valid.filter((g) => g.some((t) => t.includes(x) && t.includes(y))).length; return { q: T(`In how many valid divisions are ${x} and ${y} in the same group?`), c: k, w: nums(k), e: `${sum}; ${x} and ${y} share a group in ${k} of them, which is ${k}.` }; },
    countApart: (x, y) => { const k = valid.filter((g) => !g.some((t) => t.includes(x) && t.includes(y))).length; return { q: T(`In how many valid divisions are ${x} and ${y} in different groups?`), c: k, w: nums(k), e: `${sum}; ${x} and ${y} are apart in ${k} of them, which is ${k}.` }; }
  };
}
const nm6 = ['Asha', 'Bilal', 'Charu', 'Dev', 'Esha', 'Farid'];
const gp1 = grpPuzzle(nm6, 3, [grp.same('Asha', 'Bilal'), grp.apart('Charu', 'Dev')], 'Six friends');
const gp2 = grpPuzzle(nm6, 2, [grp.apart('Asha', 'Bilal'), grp.apart('Charu', 'Dev'), grp.notWith('Esha', 'Asha', 'Charu')], 'Six friends');
const nm8 = ['Gita', 'Hari', 'Indu', 'Jai', 'Kiran', 'Lata', 'Manoj', 'Nisha'];
const gp3 = grpPuzzle(nm8, 4, [grp.same('Gita', 'Hari'), grp.apart('Indu', 'Jai'), grp.apart('Kiran', 'Lata'), grp.notWith('Manoj', 'Gita', 'Kiran')], 'Eight colleagues');

const ch35 = C({
  n: 35, id: 'y3-lr-grouping-problems', cat: 'lr', title: 'Grouping and Team Formation Problems',
  tag: 'Dividing people into teams: together, apart and conditional rules; counting valid divisions',
  url: 'https://www.indiabix.com/logical-reasoning/',
  over: 'A grouping puzzle divides a set of people into teams of equal size under rules such as "A and B are in the same team" or "C and D are in different teams". The teams are unordered, so a division such as {A,B,C} and {D,E,F} is the same as {D,E,F} and {A,B,C}. The method is to fix one person, apply the together and apart rules to build blocks, and then count the divisions that remain.',
  place: 'Team-formation and grouping sets with six to eight people are a standard logical-reasoning pattern.',
  real: 'Forming project groups, sports teams or lab pairs under compatibility rules is the same problem.',
  obj: ['Treat teams as unordered', 'Merge people who must be together into blocks', 'Use apart rules to separate blocks', 'Find people who are always or never together', 'Count valid divisions'],
  pre: ['Selection and Distribution Problems', 'Combinations'],
  refresh: 'Dividing 6 people into two unordered teams of 3 can be done in C(6,3) ÷ 2 = 10 ways before conditions.',
  defs: [
    'Unordered groups: swapping the names of two equal-sized groups gives the same division.',
    'Together rule: the two people share a group, so treat them as one block.',
    'Apart rule: the two people are in different groups.',
    'Conditional rule: if two people are together, a third joins them.',
    'Division: a complete split of everyone into groups.'
  ],
  intu: 'A together rule glues people into a block; an apart rule keeps two blocks in different groups. After gluing and separating, few choices remain.',
  mental: 'Fix the first person in group 1, glue the together pairs, place the apart pairs in opposite groups, then fill the remaining seats and count.',
  formulas: [
    ['Two equal groups', 'C(n, n/2) ÷ 2', 'No conditions.', 'Baseline.', 'n = 6: 10'],
    ['Three pairs', '(n − 1)(n − 3)…1', 'Even n.', 'Pairings.', 'n = 6: 15'],
    ['Block merge', 'Count a glued pair as one person', 'Together rule.', 'Reduction.', 'Asha + Bilal'],
    ['Always together', 'Same group in every division', 'Question type.', 'Forced mates.', 'Check every division'],
    ['Count check', 'List divisions and tick', 'Small cases.', 'Verification.', 'Valid list']
  ],
  narr: [
    'Six friends Asha, Bilal, Charu, Dev, Esha and Farid are split into two teams of 3. Asha and Bilal are in the same team; Charu and Dev are in different teams. Glue Asha and Bilal into a block of two; the third member of their team comes from Charu, Dev, Esha, Farid. If Charu joins, Dev must be in the other team, so the divisions are {Asha, Bilal, Charu} with {Dev, Esha, Farid}, and similarly for the others.',
    'List the divisions by the third member of the Asha–Bilal team. A third member of Esha or Farid keeps Charu and Dev together in the other team, which breaks the apart rule. So only Charu or Dev can be the third member, and there are exactly two divisions.',
    'Pairings use the same idea. For three pairs from six people, first pair the person with the most conditions, then pair the rest.',
    'A person is "always with" another if in every valid division they share a group, and "never with" if they never share one. Check against the list.',
    'For counts under a stated condition, filter the list of valid divisions by that condition.'
  ],
  deep: [['Unordered double-counting', 'If you label the groups 1 and 2, every division is counted twice; divide by 2 for equal groups.'], ['Contradictory rules', 'If a puzzle has zero valid divisions, a rule is misread; recheck the wording.']],
  vars: [['Together pair', 'Block.', 'Asha and Bilal'], ['Apart pair', 'Separate.', 'Charu and Dev'], ['Conditional rule', 'If together then third.', 'Rule on three people'], ['Always/never mates', 'Check the list.', 'Who is with Asha'], ['Counting', 'Filter the list.', 'How many divisions']],
  ex: [
    { t: 'Baseline count', q: 'In how many ways can 6 people be divided into two unordered teams of 3 (no conditions)?', g: ['6 people'], c: 'C(6,3) ÷ 2.', s: [['Choose a team', 'C(6,3) = 20.'], ['Unordered', '20 ÷ 2 = 10.']], a: '10', w: 'Each division is counted twice.', tr: 'Answering 20.' },
    { t: 'Glue the pair', q: 'Six people are divided into two teams of 3 with two of them (X and Y) always together. How many divisions are possible?', g: ['X, Y together'], c: 'Choose the third member.', s: [['Block', 'X and Y form a team with one more of the other 4 people.'], ['Choices', '4 ways to choose the third member.']], a: '4', w: 'The other team is then fixed.', tr: 'Answering 10.' },
    { t: 'Apart rule', q: 'Four people P, Q, R, S are divided into two teams of 2, with P and Q in different teams. How many divisions are possible?', g: ['4 people'], c: 'Pair P with R or S.', s: [['P\'s partner', 'P can pair with R or S (not Q).'], ['Divisions', '2 ways.']], a: '2', w: '{P,R}{Q,S} and {P,S}{Q,R}.', tr: 'Answering 3.' }
  ],
  short: { title: 'Glue and split', trad: 'List all divisions.', fast: 'Glue together pairs, separate apart pairs, fill the rest, count, and tick off against the list.', rules: ['Teams are unordered.', 'Together = block.', 'Apart = opposite sides.', 'Always/never: check every division.'] },
  mist: [['Counting ordered teams', 'Double counting.', 'Divide by 2 for equal teams.'], ['Missing a division', 'Wrong count.', 'List by the third member systematically.'], ['Treating conditional rules as always true', 'The rule fires only if the pair is together.', 'Apply it only in that case.']],
  tips: { sec: 180, elim: 'Reject options that put an apart pair together.', adv: 'List divisions by one person\'s teammates.', ins: 'Lists stay short once together/apart rules are used.' },
  rev: ['Unordered teams.', 'Blocks.', 'Apart rules.', 'Always/never.', 'Counting.'],
  qf: ['C(n, n/2) ÷ 2'],
  take: ['Glue and split.', 'List systematically.', 'Divide by 2 for equal teams.', 'Filter for conditions.'],
  self: ['Can I count unordered divisions?', 'Can I glue together pairs?', 'Can I find always-together people?']
});
const q35 = [E(gp1.count()), E(gp1.always('Asha', 1)), E(gp1.countTogether('Asha', 'Charu')), E(gp1.countApart('Asha', 'Charu')), E(gp1.countTogether('Esha', 'Farid')), E(gp1.countTogether('Bilal', 'Dev')),
  M(gp2.count()), M(gp2.never('Esha', 1)), M(gp2.countTogether('Asha', 'Charu')), M(gp2.countApart('Asha', 'Charu')), M(gp2.countTogether('Bilal', 'Dev')), M(gp2.countTogether('Esha', 'Farid')), M(gp2.countTogether('Asha', 'Dev')), M(gp2.countTogether('Bilal', 'Charu')),
  P(gp3.count()), P(gp3.always('Gita', 1)), P(gp3.countTogether('Indu', 'Kiran')), P(gp3.countApart('Indu', 'Kiran')), P(gp3.countTogether('Jai', 'Lata')), P(gp3.countTogether('Manoj', 'Nisha'))];
build(ch35, q35);
