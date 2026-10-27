const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { permutations, others } = require('./puzzleLib.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);
const range = (a, b) => { const o = []; for (let i = a; i <= b; i++) o.push(i); return o; };
const isPrime = (n) => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };

// ---------- data sufficiency engine: enumerate every possible world and test each statement ----------
function* assigns(vars) {
  const keys = Object.keys(vars);
  const rec = function* (i, cur) {
    if (i === keys.length) { yield { ...cur }; return; }
    for (const v of vars[keys[i]]) { cur[keys[i]] = v; yield* rec(i + 1, cur); }
  };
  yield* rec(0, {});
}
function* permAssigns(names) {
  for (const p of permutations(names.map((_, i) => i + 1))) { const o = {}; names.forEach((n, i) => { o[n] = p[i]; }); yield o; }
}
const dsOpt = {
  I: 'Statement I alone is sufficient, but statement II alone is not',
  II: 'Statement II alone is sufficient, but statement I alone is not',
  both: 'Both statements together are needed; neither alone is sufficient',
  none: 'Even both statements together are not sufficient'
};
function ds(p) {
  const worlds = [...(p.perm ? permAssigns(p.perm) : assigns(p.vars))];
  const show = (v) => (v === true ? 'Yes' : v === false ? 'No' : String(v));
  const vals = (f) => [...new Set(worlds.filter(f).map((w) => show(p.q(w))))];
  const v1 = vals(p.s1), v2 = vals(p.s2), v12 = vals((w) => p.s1(w) && p.s2(w));
  const one = (v) => v.length === 1;
  let key;
  if (one(v1) && one(v2)) throw new Error('either statement alone suffices: ' + p.q.toString().slice(0, 40));
  else if (one(v1)) key = 'I';
  else if (one(v2)) key = 'II';
  else if (one(v12)) key = 'both';
  else key = 'none';
  const d = (v) => (v.length === 1 ? `fixes the answer as ${v[0]}` : `leaves several answers possible (for example ${v[0]} and ${v[1]})`);
  const dd = v12.length === 0 ? 'cannot hold together' : v12.length === 1 ? `fix the answer as ${v12[0]}` : `still leave several answers possible (for example ${v12[0]} and ${v12[1]})`;
  const w = Object.values(dsOpt).filter((o) => o !== dsOpt[key]);
  return {
    q: `${p.setup}\n\nQuestion: ${p.question}\nI. ${p.t1}\nII. ${p.t2}\n\nWhich of the following is correct?`,
    c: dsOpt[key], w,
    e: `Statement I alone ${d(v1)}. Statement II alone ${d(v2)}. Taken together they ${dd}. Answer: ${dsOpt[key]}.`
  };
}
const S = (setup, question, t1, t2, o) => ({ setup, question, t1, t2, ...o });

const ds1 = ds(S('Ravi and Meena are both at most 60 years old, and their ages are whole numbers of years.', 'What is Ravi\'s age?', 'Ravi is 5 years older than Meena.', 'Meena is 20 years old.', { vars: { r: range(1, 60), m: range(1, 60) }, q: (a) => a.r, s1: (a) => a.r === a.m + 5, s2: (a) => a.m === 20 }));
const ds2 = ds(S('Anil, Bala and Chandra have three different heights.', 'Is Anil taller than Bala?', 'Anil is taller than Chandra.', 'Anil is taller than Chandra, and Chandra is taller than Bala.', { perm: ['A', 'B', 'C'], q: (a) => a.A > a.B, s1: (a) => a.A > a.C, s2: (a) => a.A > a.C && a.C > a.B }));
const ds3 = ds(S('A pen costs a whole number of rupees, at most ₹40.', 'What is the cost of one pen?', 'Three pens cost ₹30.', 'A pen costs less than ₹20.', { vars: { p: range(1, 40) }, q: (a) => a.p, s1: (a) => 3 * a.p === 30, s2: (a) => a.p < 20 }));
const ds4 = ds(S('A basket holds at most 50 apples.', 'How many apples are in the basket?', 'There are more than 5 apples.', 'The number of apples is a prime number between 20 and 24.', { vars: { n: range(1, 50) }, q: (a) => a.n, s1: (a) => a.n > 5, s2: (a) => isPrime(a.n) && a.n > 20 && a.n < 24 }));
const ds5 = ds(S('Priya\'s age is a whole number of years, at most 60.', 'What is Priya\'s age?', 'Priya is older than 18.', 'Priya is younger than 25.', { vars: { a: range(1, 60) }, q: (a) => a.a, s1: (a) => a.a > 18, s2: (a) => a.a < 25 }));
const ds6 = ds(S('A car travels at a steady speed that is a multiple of 10 km/h (up to 100 km/h) for a whole number of hours from 1 to 8.', 'What is the speed of the car?', 'The car travels for 3 hours.', 'The car covers 180 km.', { vars: { s: range(1, 10).map((x) => x * 10), t: range(1, 8) }, q: (a) => a.s, s1: (a) => a.t === 3, s2: (a) => a.s * a.t === 180 }));
const ds7 = ds(S('Peter, Qadir and Rohan have three different heights.', 'Who is the tallest?', 'Rohan is not the shortest.', 'Qadir is taller than Peter.', { perm: ['P', 'Q', 'R'], q: (a) => ({ 3: 'Peter', 0: '' }[0] || ['P', 'Q', 'R'].map((n, i) => (a[n] === 3 ? ['Peter', 'Qadir', 'Rohan'][i] : '')).join('')), s1: (a) => a.R !== 1, s2: (a) => a.Q > a.P }));
const ds8 = ds(S('x and y are whole numbers from 1 to 9.', 'Is x + y even?', 'Both x and y are odd.', 'x is greater than y.', { vars: { x: range(1, 9), y: range(1, 9) }, q: (a) => (a.x + a.y) % 2 === 0, s1: (a) => a.x % 2 === 1 && a.y % 2 === 1, s2: (a) => a.x > a.y }));
const ds9 = ds(S('a and b are whole numbers from 1 to 9.', 'What is the product of a and b?', 'a is twice b, and a + b = 12.', 'a − b = 2.', { vars: { a: range(1, 9), b: range(1, 9) }, q: (a) => a.a * a.b, s1: (a) => a.a === 2 * a.b && a.a + a.b === 12, s2: (a) => a.a - a.b === 2 }));
const ds10 = ds(S('A shopkeeper bought an article for ₹100, ₹200, ₹300, ₹400 or ₹500 and sold it at a profit of 10%, 20%, 25% or 50%.', 'What was the profit percentage?', 'The cost price was ₹200.', 'The selling price was 25% more than the cost price.', { vars: { c: [100, 200, 300, 400, 500], p: [10, 20, 25, 50] }, q: (a) => a.p, s1: (a) => a.c === 200, s2: (a) => a.p === 25 }));
const ds11 = ds(S('n is a whole number from 1 to 60.', 'Is n divisible by 6?', 'n is even.', 'n is a multiple of 12.', { vars: { n: range(1, 60) }, q: (a) => a.n % 6 === 0, s1: (a) => a.n % 2 === 0, s2: (a) => a.n % 12 === 0 }));
const ds12 = ds(S('Arun, Bhanu, Charu and Dev have four different heights.', 'Who is the shortest?', 'Arun is taller than Bhanu, and Charu is taller than Arun.', 'Dev is taller than Charu.', { perm: ['A', 'B', 'C', 'D'], q: (a) => ['A', 'B', 'C', 'D'].map((n, i) => (a[n] === 1 ? ['Arun', 'Bhanu', 'Charu', 'Dev'][i] : '')).join(''), s1: (a) => a.A > a.B && a.C > a.A, s2: (a) => a.D > a.C }));
const ds13 = ds(S('A can finish a job alone in 10, 12, 15, 20, 24 or 30 days, and B can finish it alone in 10, 12, 15, 20, 24, 30 or 48 days.', 'In how many days will A and B together finish the job?', 'A alone needs 12 days.', 'B alone needs twice as many days as A.', { vars: { a: [10, 12, 15, 20, 24, 30], b: [10, 12, 15, 20, 24, 30, 48] }, q: (a) => Math.round((a.a * a.b * 100) / (a.a + a.b)) / 100, s1: (a) => a.a === 12, s2: (a) => a.b === 2 * a.a }));
const ds14 = ds(S('The sides a, b and c of a triangle are whole numbers of centimetres between 3 and 13.', 'Is the triangle right-angled with c as the hypotenuse?', 'The sides are in the ratio 5 : 12 : 13.', 'The perimeter is 30 cm.', { vars: { a: range(3, 13), b: range(3, 13), c: range(3, 13) }, q: (a) => a.a * a.a + a.b * a.b === a.c * a.c, s1: (a) => 5 * a.b === 12 * a.a && 5 * a.c === 13 * a.a, s2: (a) => a.a + a.b + a.c === 30 }));
const ds15 = ds(S('Five friends Asha, Bilal, Charu, Dev and Esha scored different marks in a test.', 'Who scored the highest?', 'Asha scored more than Bilal and Charu.', 'Dev scored less than Esha, and Esha scored less than Asha.', { perm: ['A', 'B', 'C', 'D', 'E'], q: (a) => ['A', 'B', 'C', 'D', 'E'].map((n, i) => (a[n] === 5 ? ['Asha', 'Bilal', 'Charu', 'Dev', 'Esha'][i] : '')).join(''), s1: (a) => a.A > a.B && a.A > a.C, s2: (a) => a.D < a.E && a.E < a.A }));
const ds16 = ds(S('x and y are whole numbers from −5 to 5.', 'Is x greater than y?', 'x² is greater than y².', 'x is positive.', { vars: { x: range(-5, 5), y: range(-5, 5) }, q: (a) => a.x > a.y, s1: (a) => a.x * a.x > a.y * a.y, s2: (a) => a.x > 0 }));
const ds17 = ds(S('A two-digit number has a tens digit from 1 to 9 and a units digit from 0 to 9.', 'What is the number?', 'The sum of its digits is 9.', 'The number is divisible by 5.', { vars: { t: range(1, 9), u: range(0, 9) }, q: (a) => 10 * a.t + a.u, s1: (a) => a.t + a.u === 9, s2: (a) => a.u % 5 === 0 }));
const ds18 = ds(S('Five friends Asha, Bilal, Charu, Dev and Esha have five different ages.', 'Who is the oldest?', 'Bilal is older than Asha and Esha, and Dev is older than Charu but younger than Bilal.', 'Asha is older than Esha.', { perm: ['A', 'B', 'C', 'D', 'E'], q: (a) => ['A', 'B', 'C', 'D', 'E'].map((n, i) => (a[n] === 5 ? ['Asha', 'Bilal', 'Charu', 'Dev', 'Esha'][i] : '')).join(''), s1: (a) => a.B > a.A && a.B > a.E && a.C < a.D && a.D < a.B, s2: (a) => a.A > a.E }));
const ds19 = ds(S('A class has at most 60 boys and at most 60 girls.', 'How many boys are in the class?', 'The number of boys is 1.5 times the number of girls.', 'The class has 40 students in all.', { vars: { b: range(1, 60), g: range(1, 60) }, q: (a) => a.b, s1: (a) => 2 * a.b === 3 * a.g, s2: (a) => a.b + a.g === 40 }));
const ds20 = ds(S('Apples and oranges each cost a whole number of tens of rupees per kg, between ₹10 and ₹100.', 'What is the price of 1 kg of apples?', '2 kg of apples and 1 kg of oranges cost ₹140.', '1 kg of apples and 2 kg of oranges cost ₹130.', { vars: { a: range(1, 10).map((x) => x * 10), o: range(1, 10).map((x) => x * 10) }, q: (a) => a.a, s1: (a) => 2 * a.a + a.o === 140, s2: (a) => a.a + 2 * a.o === 130 }));
const dsAll = [ds1, ds3, ds4, ds5, ds6, ds2, ds8, ds9, ds10, ds11, ds12, ds7, ds13, ds14, ds18, ds15, ds16, ds17, ds19, ds20];

const ch42 = C({
  n: 42, id: 'y3-lr-adv-data-sufficiency', cat: 'lr', title: 'Advanced Data Sufficiency',
  tag: 'Deciding whether the given statements are enough to answer a question, without solving it fully',
  url: 'https://www.indiabix.com/logical-reasoning/',
  over: 'A data-sufficiency question asks a question and gives two statements. You do not have to find the answer; you have to decide whether the statements provide enough information to find it. There are four outcomes: statement I alone is enough, statement II alone is enough, both together are needed, or even both together are not enough. The discipline is to judge each statement separately first, then together, and never to bring in outside facts.',
  place: 'Data-sufficiency items appear in logical-reasoning and quantitative sections of company tests, especially in management-oriented hiring.',
  real: 'Deciding whether you have enough information to make a decision, before spending time on the analysis, is a real-world version of this skill.',
  obj: ['Test each statement alone before combining', 'Recognise when a statement gives a unique answer', 'Handle yes/no questions (consistent answer needed)', 'Handle ordering, age and arithmetic setups', 'Avoid using facts from outside the statements'],
  pre: ['Data Sufficiency (basic)', 'Linear Equations'],
  refresh: 'A statement is sufficient if it leads to exactly one answer to the question. For a yes/no question the answer must be always yes or always no.',
  defs: [
    'Sufficient: the information leads to a single, definite answer.',
    'Insufficient: the information leaves two or more different answers possible.',
    'Together: both statements applied at once.',
    'Yes/no question: sufficient only if the answer is always yes or always no.',
    'Setup: facts given before the statements that apply to both.'
  ],
  intu: 'Imagine every world that fits the statement. If all those worlds give the same answer to the question, the statement is sufficient.',
  mental: 'Take statement I alone and ask whether you can build two worlds that give different answers. Repeat for II. If both fail alone, combine them and ask again.',
  formulas: [
    ['Alone test', 'Find two worlds with different answers', 'Each statement.', 'Primary.', 'Several ages for Priya'],
    ['Together test', 'Apply both and re-test', 'Only after alone tests fail.', 'Secondary.', 'Equations in two unknowns'],
    ['Yes/no rule', 'Need always yes or always no', 'Yes/no questions.', 'Rule.', 'x even in some worlds, odd in others: insufficient'],
    ['Equation count', 'Need as many independent equations as unknowns', 'Arithmetic setups.', 'Quick test.', '2 unknowns, 2 equations'],
    ['Ordering', 'Chains must connect the two items', 'Rank questions.', 'Rule.', 'A > C and C > B give A > B']
  ],
  narr: [
    'Ravi\'s age is asked. Statement I: Ravi is 5 years older than Meena. Statement II: Meena is 20 years old. Alone, I links two unknowns and II gives Meena\'s age only. Together, Ravi is 25. Both are needed.',
    'For ordering questions, a chain must connect the two people. "Anil is taller than Chandra" and "Chandra is taller than Bala" together give Anil taller than Bala. Alone, neither connects Anil and Bala.',
    'A statement may be sufficient even if it looks indirect. "Three pens cost ₹30" gives the price of one pen at once. "A pen costs less than ₹20" leaves 19 possible prices.',
    'Yes/no questions need a consistent answer. "Is x + y even?" with "Both x and y are odd" is always yes, so it is sufficient. "x is greater than y" leaves both yes and no possible.',
    'When both statements together still leave several answers, the answer is "not sufficient even together". For Priya\'s age, "older than 18" and "younger than 25" leave 19 to 24.'
  ],
  deep: [['Unique answer vs possible answer', 'A statement can make an answer possible without making it certain; only certainty counts.'], ['Redundant statements', 'If a statement repeats the other, together adds nothing.']],
  vars: [['Equation pairs', 'Two unknowns.', 'Ravi and Meena'], ['Ordering chains', 'Connect two people.', 'Anil, Chandra, Bala'], ['Yes/no questions', 'Always the same.', 'Is x + y even?'], ['Range statements', 'Narrow but not unique.', 'Priya\'s age'], ['Divisibility', 'Yes/no on n.', 'Divisible by 6']],
  ex: [
    { t: 'Both needed', q: 'What is Ravi\'s age? I. Ravi is 5 years older than Meena. II. Meena is 20 years old. Which is correct?', g: ['Two unknowns'], c: 'Test alone, then together.', s: [['Alone', 'I links Ravi to Meena; II gives Meena only.'], ['Together', 'Ravi is 20 + 5 = 25.']], a: 'Both statements together are needed', w: 'Neither alone gives Ravi\'s age.', tr: 'Calling I sufficient.' },
    { t: 'One statement', q: 'What is the cost of a pen? I. Three pens cost ₹30. II. A pen costs less than ₹20. Which is correct?', g: ['Price per pen'], c: 'Check each.', s: [['I', '3 × price = 30 gives price ₹10.'], ['II', 'Any price below ₹20 fits: not unique.']], a: 'Statement I alone is sufficient, but statement II alone is not', w: 'Only I fixes the price.', tr: 'Combining unnecessarily.' },
    { t: 'Not even together', q: 'What is Priya\'s age? I. Priya is older than 18. II. Priya is younger than 25. Which is correct?', g: ['Range'], c: 'Combine.', s: [['Combine', 'Her age lies between 19 and 24.'], ['Result', 'Six possible ages remain.']], a: 'Even both statements together are not sufficient', w: 'The answer is not unique.', tr: 'Picking the middle value.' }
  ],
  short: { title: 'Two worlds', trad: 'Solve the problem fully.', fast: 'For each statement try to build two worlds that give different answers. If you can, it is insufficient.', rules: ['Alone first.', 'Yes/no needs consistency.', 'Chains must connect.', 'Count unknowns and equations.'] },
  mist: [['Combining too early', 'Misses single-statement sufficiency.', 'Test each alone.'], ['Using outside facts', 'Extra information.', 'Use only given data.'], ['Accepting a possible answer as sufficient', 'Uncertain.', 'Need certainty.']],
  tips: { sec: 90, elim: 'If the statements repeat each other, together adds nothing.', adv: 'List unknowns and equations first.', ins: 'The answer set is decided by logic, not by calculation of the exact value.' },
  rev: ['Alone first.', 'Two worlds test.', 'Yes/no rule.', 'Chains.', 'Together.'],
  qf: ['Unknowns vs equations'],
  take: ['Test alone.', 'Look for two worlds.', 'Be consistent.', 'No outside facts.'],
  self: ['Can I test each statement alone?', 'Can I handle yes/no questions?', 'Can I tell when both are not enough?']
});
build(ch42, [E(dsAll[0]), E(dsAll[1]), E(dsAll[2]), E(dsAll[3]), E(dsAll[4]), E(dsAll[5]), M(dsAll[6]), M(dsAll[7]), M(dsAll[8]), M(dsAll[9]), M(dsAll[10]), M(dsAll[11]), M(dsAll[12]), M(dsAll[13]), P(dsAll[14]), P(dsAll[15]), P(dsAll[16]), P(dsAll[17]), P(dsAll[18]), P(dsAll[19])]);

// ---------------- Chapter 43: matrix puzzles ----------------
function matrix(people, attrs, cons) {
  const sols = [];
  const rec = (i, cur) => {
    if (i === attrs.length) {
      const p = {};
      people.forEach((x, k) => { p[x] = {}; attrs.forEach((a, j) => { p[x][a.name] = cur[j][k]; }); });
      if (cons.every((c) => c.f(p))) sols.push(p);
      return;
    }
    for (const perm of permutations(attrs[i].values)) rec(i + 1, [...cur, perm]);
  };
  rec(0, []);
  if (sols.length !== 1) throw new Error('matrix puzzle not unique: ' + sols.length + ' ' + people.join(''));
  return { people, attrs, sol: sols[0], text: cons.map((c, i) => `${i + 1}. ${c.t}`).join('\n') };
}
const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
const mc = {
  is: (x, a, v) => ({ t: `${x} ${a.verb(v)}.`, f: (p) => p[x][a.name] === v }),
  not: (x, a, v) => ({ t: `${x} does not ${a.notverb(v)}.`, f: (p, ppl) => p[x][a.name] !== v }),
  link: (a, va, b, vb) => ({ t: `${cap(a.who(va))} ${b.verb(vb)}.`, f: (p) => Object.keys(p).every((x) => (p[x][a.name] === va) === (p[x][b.name] === vb)) }),
  notLink: (a, va, b, vb) => ({ t: `${cap(a.who(va))} does not ${b.notverb(vb)}.`, f: (p) => Object.keys(p).every((x) => !(p[x][a.name] === va && p[x][b.name] === vb)) })
};
const mkJob = (values) => ({ name: 'job', values, verb: (v) => `is ${/^[aeiou]/.test(v) ? 'an' : 'a'} ${v}`, notverb: (v) => `be ${/^[aeiou]/.test(v) ? 'an' : 'a'} ${v}`, who: (v) => `the ${v}`, noun: 'profession' });
const mkCity = (values) => ({ name: 'city', values, verb: (v) => `lives in ${v}`, notverb: (v) => `live in ${v}`, who: (v) => `the person who lives in ${v}`, noun: 'city' });
const mkHobby = (values) => ({ name: 'hobby', values, verb: (v) => `likes ${v}`, notverb: (v) => `like ${v}`, who: (v) => `the person who likes ${v}`, noun: 'hobby' });
const J4 = mkJob(['doctor', 'engineer', 'teacher', 'lawyer']);
const Ci4 = mkCity(['Chennai', 'Delhi', 'Mumbai', 'Pune']);
const H4 = mkHobby(['chess', 'cricket', 'music', 'reading']);
const J5 = mkJob(['doctor', 'engineer', 'teacher', 'lawyer', 'architect']);
const Ci5 = mkCity(['Chennai', 'Delhi', 'Mumbai', 'Pune', 'Kolkata']);
const H5 = mkHobby(['chess', 'cricket', 'music', 'reading', 'painting']);
const ppl4 = ['Kavya', 'Lokesh', 'Meera', 'Naveen'];
const ppl5 = ['Aarav', 'Bhavna', 'Chirag', 'Divya', 'Eshwar'];
const safe = (f) => { try { return f(); } catch (e) { console.log(e.message); return null; } };
const mp1 = safe(() => matrix(ppl4, [J4, Ci4], [mc.link(J4, 'doctor', Ci4, 'Pune'), mc.link(J4, 'lawyer', Ci4, 'Delhi'), mc.is('Lokesh', Ci4, 'Mumbai'), mc.is('Naveen', Ci4, 'Delhi'), mc.is('Kavya', J4, 'teacher'), mc.not("Meera", J4, "engineer")]));
const mp2 = matrix(ppl4, [J4, Ci4, H4], [mc.link(J4, 'doctor', Ci4, 'Pune'), mc.link(J4, 'lawyer', Ci4, 'Delhi'), mc.is('Lokesh', Ci4, 'Mumbai'), mc.is('Kavya', J4, 'teacher'), mc.link(H4, 'cricket', Ci4, 'Mumbai'), mc.link(H4, 'reading', J4, 'lawyer'), mc.not('Meera', H4, 'chess'), mc.link(H4, 'music', Ci4, 'Pune'), mc.is('Naveen', J4, 'lawyer')]);
const mp3 = matrix(ppl5, [J5, Ci5, H5], [mc.link(J5, 'doctor', Ci5, 'Pune'), mc.is('Chirag', Ci5, 'Mumbai'), mc.link(J5, 'lawyer', Ci5, 'Delhi'), mc.link(H5, 'music', J5, 'doctor'), mc.is('Eshwar', J5, 'teacher'), mc.link(Ci5, 'Kolkata', H5, 'chess'), mc.link(H5, 'cricket', Ci5, 'Mumbai'), mc.link(H5, 'painting', Ci5, 'Chennai'), mc.link(H5, 'reading', J5, 'lawyer'), mc.is('Eshwar', H5, 'painting'), mc.notLink(J5, 'architect', H5, 'cricket'), mc.is('Bhavna', J5, 'doctor'), mc.not('Divya', Ci5, 'Kolkata')]);

const intro = (Pz, label) => `${label} The following facts are known:\n${Pz.text}`;
const L1 = 'Four friends Kavya, Lokesh, Meera and Naveen each have a different profession (doctor, engineer, teacher, lawyer) and live in different cities (Chennai, Delhi, Mumbai, Pune).';
const L2 = 'Four friends Kavya, Lokesh, Meera and Naveen each have a different profession (doctor, engineer, teacher, lawyer), live in different cities (Chennai, Delhi, Mumbai, Pune) and like different hobbies (chess, cricket, music, reading).';
const L3 = 'Five friends Aarav, Bhavna, Chirag, Divya and Eshwar each have a different profession (doctor, engineer, teacher, lawyer, architect), live in different cities (Chennai, Delhi, Mumbai, Pune, Kolkata) and like different hobbies (chess, cricket, music, reading, painting).';
const attrByName = (a) => ({ job: [J4, J5], city: [Ci4, Ci5], hobby: [H4, H5] }[a]);
function mQs(Pz, label, big) {
  const T = (s) => `${intro(Pz, label)}\n\n${s}`;
  const sol = Pz.sol;
  const grid = Pz.people.map((x) => Pz.attrs.map((a) => sol[x][a.name]).join(' / ')).map((r, i) => `${Pz.people[i]}: ${r}`).join('; ');
  const wh = { job: (v) => `Which profession does ${v} have?`, city: (v) => `In which city does ${v} live?`, hobby: (v) => `Which hobby does ${v} like?` };
  const who = (a, v) => ({ job: `Who is the ${v}?`, city: `Who lives in ${v}?`, hobby: `Who likes ${v}?` }[a.name]);
  const attr = (name) => Pz.attrs.find((a) => a.name === name);
  return {
    of: (x, name, sk) => { const c = sol[x][name]; const w = attr(name).values.filter((v) => v !== c); return { q: T(wh[name](x)), c, w: w.slice(sk || 0).concat(w).slice(0, 3), e: `Working out the grid gives (profession / city${Pz.attrs.length === 3 ? ' / hobby' : ''}): ${grid}. So ${x}'s ${attr(name).noun} is ${c}.` }; },
    who: (name, v, sk) => { const c = Pz.people.find((x) => sol[x][name] === v); return { q: T(who(attr(name), v)), c, w: others(Pz.people, c, sk), e: `Working out the grid gives: ${grid}. So ${c} is the answer.` }; },
    cross: (name1, v1, name2, sk) => { const x = Pz.people.find((y) => sol[y][name1] === v1); const c = sol[x][name2]; const w = attr(name2).values.filter((v) => v !== c); const stem = { job: `What is the profession of the person who ${attr(name1).verb(v1)}?`, city: `In which city does the person who ${attr(name1).verb(v1)} live?`, hobby: `Which hobby does the person who ${attr(name1).verb(v1)} like?` }[name2]; return { q: T(stem), c, w: w.slice(sk || 0).concat(w).slice(0, 3), e: `Working out the grid gives: ${grid}. The person who ${attr(name1).verb(v1)} is ${x}, whose ${attr(name2).noun} is ${c}.` }; }
  };
}
const m1 = mQs(mp1, L1), m2 = mQs(mp2, L2), m3 = mQs(mp3, L3);

const ch43 = C({
  n: 43, id: 'y3-lr-complex-matrix-puzzles', cat: 'lr', title: 'Complex Matrix and Grid Puzzles',
  tag: 'Several people, several attributes: elimination grids, linked clues and cross-referencing',
  url: 'https://www.indiabix.com/logical-reasoning/',
  over: 'A matrix puzzle assigns several attributes (profession, city, hobby) to a set of people, with one value of each attribute per person. A grid with people down one side and values across the top lets you cross out impossible cells and fill in forced ones. The technique is to record every clue in the grid, look for rows and columns with only one cell left, and use linked clues ("the doctor lives in Pune") to merge attributes into bundles.',
  place: 'Grid puzzles with 4–5 people and 2–3 attributes are the standard "hard" puzzle in company reasoning tests.',
  real: 'Matching customers to products, tasks to people and rooms to guests uses the same elimination logic.',
  obj: ['Set up an elimination grid', 'Record positive and negative clues', 'Merge linked clues into bundles', 'Use one-cell-left deductions', 'Cross-reference attributes to answer questions'],
  pre: ['Complex Seating Arrangements', 'Selection and Distribution Problems'],
  refresh: 'In a one-to-one matching, each value belongs to exactly one person. A tick in one cell means crosses in the rest of its row and column.',
  defs: [
    'Grid: a table of people against attribute values for marking yes and no.',
    'Positive clue: says a person has a value; tick the cell and cross the rest of the row and column.',
    'Negative clue: says a person does not have a value; cross that cell.',
    'Linked clue: ties two values to the same person ("the doctor lives in Pune").',
    'Bundle: values known to belong to the same person, even before the name is known.'
  ],
  intu: 'Every person ends up with exactly one value from each list. Every tick closes a row and a column, so a few clues cascade into the full solution.',
  mental: 'Draw one grid per attribute against the people. Enter positive clues first, then negative clues, then merge linked clues into bundles. When a row or column has a single open cell, tick it and repeat.',
  formulas: [
    ['One-to-one', 'Each value belongs to exactly one person', 'Every grid.', 'Core rule.', 'One doctor, one lawyer'],
    ['Tick closes', 'Tick one cell, cross the row and column', 'Positive clue.', 'Cascade.', 'Lokesh in Mumbai'],
    ['Bundle', 'A ↔ B means same person', 'Linked clue.', 'Merge.', 'Doctor ↔ Pune'],
    ['Elimination', 'Last cell left in a row is forced', 'After crosses.', 'Finish.', 'Only Chennai remains'],
    ['Check', 'Test every clue on the final grid', 'End.', 'Verify.', 'All clues hold']
  ],
  narr: [
    'Four friends Kavya, Lokesh, Meera and Naveen have different professions and live in different cities. The doctor lives in Pune and the lawyer lives in Delhi (bundles). Lokesh lives in Mumbai, Naveen lives in Delhi, Kavya is a teacher, and Meera is not an engineer. Naveen lives in Delhi, so he is the lawyer. Kavya, a teacher, cannot be the doctor, so she is not in Pune; her remaining city is Chennai. Meera is not an engineer, so she is the doctor and lives in Pune. Lokesh is the engineer.',
    'With three attributes, add the hobby grid and the new linked clues: the person who likes cricket lives in Mumbai; the person who likes reading is the lawyer; the person who likes music lives in Pune. These attach hobbies to the bundles: Lokesh (Mumbai) likes cricket, Naveen (lawyer) likes reading, Meera (Pune) likes music, and the leftover hobby, chess, goes to Kavya.',
    'Linked clues are the most powerful because they merge columns. Once "doctor ↔ Pune" and "music ↔ doctor" are known, music, doctor and Pune are one bundle that belongs to a single person.',
    'Negative clues are used last. They never place a person on their own; they only cross out a cell, which helps when two options remain.',
    'For questions, read the finished grid. "In which city does the person who likes reading live?" means find the reader first, then read the city.'
  ],
  deep: [['Bundles speed things up', 'Treat a bundle as a single "super person" until a named clue pins it to one name.'], ['Unique solutions', 'A well-formed puzzle has exactly one solution; if you reach two options, a clue has been missed.']],
  vars: [['Two attributes', 'Profession and city.', '4 friends'], ['Three attributes', 'Add hobbies.', '4 friends'], ['Five people', 'More bundles.', '5 friends'], ['Linked clues', 'Merge columns.', 'Doctor ↔ Pune'], ['Negative clues', 'Cross out.', 'Meera not engineer']],
  ex: [
    { t: 'Bundles', q: 'The doctor lives in Pune, the lawyer lives in Delhi, and Naveen lives in Delhi. What is Naveen\'s profession?', g: ['Lawyer ↔ Delhi'], c: 'Use the bundle.', s: [['Bundle', 'The person in Delhi is the lawyer.'], ['Match', 'Naveen lives in Delhi, so he is the lawyer.']], a: 'Lawyer', w: 'The linked clue decides.', tr: 'Guessing doctor.' },
    { t: 'Elimination', q: 'Kavya is a teacher; the doctor lives in Pune; Lokesh lives in Mumbai, Naveen in Delhi. In which city does Kavya live?', g: ['Cities left: Chennai, Pune'], c: 'Cross out Pune.', s: [['Pune', 'The Pune person is the doctor, but Kavya is a teacher.'], ['Left', 'Kavya lives in Chennai.']], a: 'Chennai', w: 'Only Chennai remains.', tr: 'Picking Pune.' },
    { t: 'Cross-reference', q: 'In the finished grid Lokesh likes cricket and lives in Mumbai. In which city does the person who likes cricket live?', g: ['Grid read-out'], c: 'Find the person, then the city.', s: [['Person', 'Lokesh likes cricket.'], ['City', 'Mumbai.']], a: 'Mumbai', w: 'Read across the row.', tr: 'Confusing hobby with city.' }
  ],
  short: { title: 'Tick, cross, cascade', trad: 'Try combinations.', fast: 'Enter positive clues, cross rows and columns, merge linked clues into bundles, and fill the last open cell in each row.', rules: ['Positive first.', 'Merge linked clues.', 'Negatives last.', 'Verify at the end.'] },
  mist: [['Forgetting to cross the row and column', 'Misses forced cells.', 'Cross after each tick.'], ['Treating linked clues as separate', 'Slows progress.', 'Merge into bundles.'], ['Not verifying', 'Wrong final grid.', 'Test all clues.']],
  tips: { sec: 240, elim: 'Reject any option that conflicts with one grid cell.', adv: 'Write bundles on the side as you find them.', ins: 'Five-person puzzles carry six or more questions, so complete the grid once.' },
  rev: ['Grid set-up.', 'Positive clues.', 'Bundles.', 'Negatives.', 'Verify.'],
  qf: ['One tick = one row and column closed'],
  take: ['Grid first.', 'Merge bundles.', 'Cascade ticks.', 'Verify.'],
  self: ['Can I merge linked clues?', 'Can I cascade ticks?', 'Can I cross-reference?']
});
build(ch43, [
  E(m1.of('Kavya', 'city')), E(m1.of('Meera', 'job', 1)), E(m1.who('city', 'Mumbai', 2)), E(m1.who('job', 'lawyer')), E(m1.of('Lokesh', 'job', 2)), E(m1.cross('job', 'doctor', 'city')),
  M(m2.of('Kavya', 'hobby')), M(m2.of('Meera', 'hobby', 1)), M(m2.who('hobby', 'reading', 1)), M(m2.who('job', 'engineer', 2)), M(m2.cross('hobby', 'cricket', 'job')), M(m2.cross('city', 'Chennai', 'hobby', 1)), M(m2.cross('job', 'doctor', 'hobby', 2)), M(m2.of('Naveen', 'city', 1)),
  P(m3.of('Aarav', 'job')), P(m3.of('Divya', 'hobby', 1)), P(m3.who('city', 'Kolkata', 1)), P(m3.cross('hobby', 'chess', 'job', 1)), P(m3.cross('job', 'architect', 'city', 2)), P(m3.of('Chirag', 'job', 1))
]);
