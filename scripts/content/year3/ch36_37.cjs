const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ---------- syllogism engine: every possible Venn diagram over four non-empty classes ----------
// A model is a set of non-empty regions of a four-class Venn diagram (16 regions, so 65536 models).
const NT = 4;
const REGS = 1 << NT;
const regMask = (pred) => { let m = 0; for (let r = 0; r < REGS; r++) if (pred(r)) m |= 1 << r; return m; };
const has = (r, i) => ((r >> i) & 1) === 1;
const stmt = {
  all: (x, y) => ({ k: 'all', x, y, f: (m) => (m & regMask((r) => has(r, x) && !has(r, y))) === 0 }),
  no: (x, y) => ({ k: 'no', x, y, f: (m) => (m & regMask((r) => has(r, x) && has(r, y))) === 0 }),
  some: (x, y) => ({ k: 'some', x, y, f: (m) => (m & regMask((r) => has(r, x) && has(r, y))) !== 0 }),
  someNot: (x, y) => ({ k: 'someNot', x, y, f: (m) => (m & regMask((r) => has(r, x) && !has(r, y))) !== 0 })
};
const text = (s, T) => ({ all: `All ${T[s.x]} are ${T[s.y]}.`, no: `No ${T[s.x]} are ${T[s.y]}.`, some: `Some ${T[s.x]} are ${T[s.y]}.`, someNot: `Some ${T[s.x]} are not ${T[s.y]}.` }[s.k]);
function models(given) {
  const out = [];
  const nonEmpty = [0, 1, 2, 3].map((i) => regMask((r) => has(r, i)));
  for (let m = 1; m < 1 << REGS; m++) {
    if (nonEmpty.every((ne) => (m & ne) !== 0) && given.every((g) => g.f(m))) out.push(m);
  }
  return out;
}
function candidates() {
  const c = [];
  for (let x = 0; x < NT; x++) for (let y = 0; y < NT; y++) {
    if (x === y) continue;
    c.push(stmt.all(x, y), stmt.some(x, y), stmt.someNot(x, y));
    if (x < y) c.push(stmt.no(x, y));
  }
  return c;
}
function syl(T, given, label) {
  const ms = models(given);
  if (!ms.length) throw new Error('inconsistent statements ' + label);
  const same = (a, b) => a.k === b.k && a.x === b.x && a.y === b.y;
  const sym = (a, b) => ((a.k === 'no' || a.k === 'some') && a.k === b.k && a.x === b.y && a.y === b.x);
  const isGiven = (c) => given.some((g) => same(g, c) || sym(g, c));
  const cands = candidates().filter((c) => !isGiven(c));
  const status = (c) => (ms.every((m) => c.f(m)) ? 'follows' : ms.some((m) => c.f(m)) ? 'open' : 'false');
  // skip conclusions that a single given statement already implies (such as "Some A are B" from "All A are B")
  const single = given.map((g) => models([g]));
  const trivial = (c) => single.some((sm) => sm.every((m) => c.f(m)));
  const F = cands.filter((c) => status(c) === 'follows' && !trivial(c));
  const O = cands.filter((c) => status(c) === 'open');
  const Fl = cands.filter((c) => status(c) === 'false');
  if (process.env.SYLDEBUG) console.log(label, 'F:', F.map((c) => text(c, T)).join(' | '), '#O', O.length, '#Fl', Fl.length);
  const header = `${given.map((g) => text(g, T)).join(' ')}`;
  const stmts = given.map((g, i) => `${i + 1}. ${text(g, T)}`).join('\n');
  const opts = { both: 'Both conclusions follow', I: 'Only conclusion I follows', II: 'Only conclusion II follows', none: 'Neither conclusion follows' };
  const why = (c, tag) => {
    const s = status(c);
    if (s === 'follows') return `Conclusion ${tag} ("${text(c, T)}") follows: it is true in every diagram that fits the three statements.`;
    if (s === 'open') return `Conclusion ${tag} ("${text(c, T)}") does not follow: the statements leave it open, because a consistent diagram makes it false.`;
    return `Conclusion ${tag} ("${text(c, T)}") does not follow: it contradicts the statements.`;
  };
  const make = (kind, a, b, pickFromFalse) => {
    const NF = pickFromFalse ? Fl : O;
    const pk = (list, i, avoid) => { for (let j = 0; j < list.length; j++) { const c = list[(i + j) % list.length]; if (!avoid || !same(c, avoid)) return c; } throw new Error(`not enough conclusions (F=${F.length}, O=${O.length}, Fl=${Fl.length}) for ${label}`); };
    let c1, c2;
    if (kind === 'both') { c1 = pk(F, a); c2 = pk(F, a + 1 + (b || 0), c1); }
    else if (kind === 'I') { c1 = pk(F, a); c2 = pk(NF, b || 0, c1); }
    else if (kind === 'II') { c1 = pk(NF, a); c2 = pk(F, b || 0, c1); }
    else { c1 = pk(NF, a); c2 = pk(NF, (b || 0) + 1, c1); }
    const ans = { both: opts.both, I: opts.I, II: opts.II, none: opts.none }[kind];
    const wrongs = Object.values(opts).filter((o) => o !== ans);
    return { q: `Statements:\n${stmts}\n\nConclusions:\nI. ${text(c1, T)}\nII. ${text(c2, T)}\n\nWhich of the following is correct?`, c: ans, w: wrongs, e: `${why(c1, 'I')} ${why(c2, 'II')} Answer: ${ans}.` };
  };
  return { F, O, Fl, make, header };
}
const noun = (arr) => arr;

// four-term statement sets (each term denotes a non-empty class)
const S1 = syl(['pens', 'books', 'tables', 'chairs'], [stmt.all(0, 1), stmt.all(1, 2), stmt.some(2, 3)], 'S1');
const S2 = syl(['cats', 'dogs', 'birds', 'fish'], [stmt.some(0, 1), stmt.all(1, 2), stmt.no(2, 3)], 'S2');
const S3 = syl(['doctors', 'teachers', 'artists', 'clerks'], [stmt.all(0, 1), stmt.all(1, 2), stmt.no(2, 3)], 'S3');
const S4 = syl(['roses', 'flowers', 'red things', 'bright things'], [stmt.some(0, 1), stmt.all(1, 2), stmt.all(2, 3)], 'S4');
const S5 = syl(['mangoes', 'fruits', 'sweet things', 'sour things'], [stmt.some(0, 1), stmt.all(1, 2), stmt.no(2, 3)], 'S5');
const S6 = syl(['lions', 'animals', 'hunters', 'stones'], [stmt.all(0, 1), stmt.no(1, 3), stmt.some(2, 0)], 'S6');

const ch36 = C({
  n: 36, id: 'y3-lr-adv-syllogisms', cat: 'lr', title: 'Advanced Syllogisms — Three-Statement Deduction',
  tag: 'Three statements and four classes: building chains, Venn diagrams and "definitely follows" tests',
  url: 'https://www.indiabix.com/logical-reasoning/syllogism/',
  over: 'A syllogism asks which conclusions must be true given some statements about classes of things. With three statements and four classes, mental guessing fails, so the method is the Venn-diagram test: draw every diagram that fits the statements, and accept a conclusion only if it holds in all of them. The convention used in this course is that every named class has at least one member.',
  place: 'Three-statement syllogisms with two conclusions are a standard logical-reasoning item in company tests.',
  real: 'Checking whether a policy follows from several rules, or whether a claim is entailed by a set of facts, uses the same reasoning.',
  obj: ['State the four statement types precisely', 'Chain "All" statements', 'Combine "All", "No" and "Some" statements correctly', 'Decide "follows" only if true in every diagram', 'Use "possible" to reject tempting conclusions'],
  pre: ['Basic Syllogisms', 'Venn Diagrams'],
  refresh: '"All A are B" puts A inside B. "No A is B" keeps the two circles apart. "Some A are B" means they overlap. "Some A are not B" means part of A is outside B.',
  defs: [
    'Follows: true in every possible diagram that fits the statements.',
    'Possible but not forced: true in some diagrams and false in others, so it does not follow.',
    'Contradicts: false in every diagram, so it does not follow and its negation does.',
    'Convention in this course: every class named in a statement has at least one member.',
    'Chain: All A are B and All B are C give All A are C.'
  ],
  intu: 'A conclusion follows only if you could not draw a legal diagram that breaks it. Try to break the conclusion; if you succeed, it does not follow.',
  mental: 'Draw the statements as circles. Start with the "All" statements (nested circles), add the "No" separation, then the "Some" overlaps. For each conclusion, ask: can I redraw it so the conclusion is false?',
  formulas: [
    ['All chain', 'All A are B, All B are C ⇒ All A are C', 'Nested.', 'Chains.', 'pens ⊂ books ⊂ tables'],
    ['All + Some', 'All A are B, Some A are C ⇒ Some B are C', 'Overlap carried outward.', 'Mixed.', 'Some books are tables'],
    ['All + No', 'All A are B, No B is C ⇒ No A is C', 'Separation carried inward.', 'Mixed.', 'No dogs are fish'],
    ['Some + All', 'Some A are B, All B are C ⇒ Some A are C', 'Overlap carried outward.', 'Mixed.', 'Some cats are birds'],
    ['Some does not chain', 'Some A are B, Some B are C ⇏ Some A are C', 'Two overlaps.', 'Trap.', 'Open']
  ],
  narr: [
    'Take the statements: All pens are books; All books are tables; Some tables are chairs. The chain gives All pens are tables. The third statement only says that tables and chairs overlap, so nothing definite follows about pens and chairs: "Some pens are chairs" is possible but not forced.',
    'With the statements: Some cats are dogs; All dogs are birds; No birds are fish. Some cats are dogs and all dogs are birds, so Some cats are birds follows. Birds and fish are separate, so dogs and fish are separate: No dogs are fish follows.',
    'A "Some" statement does not pass through another "Some". Some A are B and Some B are C leave A and C free to overlap or not, so "Some A are C" does not follow.',
    'Converses of "All" are traps. From "All doctors are teachers" you cannot conclude "All teachers are doctors". You can conclude "Some teachers are doctors" under the course convention that classes are non-empty.',
    'To test a tempting conclusion, build a diagram that respects all statements but makes it false. If one exists, the conclusion does not follow.'
  ],
  deep: [['Existence convention', 'Under the convention that every class is non-empty, All A are B guarantees Some A are B.'], ['Negative statements', 'No A is B is symmetric: No B is A follows. Some A are not B does not give Some B are not A.']],
  vars: [['All chains', 'Nested circles.', 'pens ⊂ books ⊂ tables'], ['Mixed All/Some', 'Overlap carried.', 'Some books are tables'], ['Mixed All/No', 'Separation carried.', 'No dogs are fish'], ['Two Somes', 'Do not chain.', 'Trap'], ['Either/or pairs', 'Complementary cases.', 'Some or no']],
  ex: [
    { t: 'Chain', q: 'Statements: All pens are books. All books are tables. Does "All pens are tables" follow?', g: ['Nested circles'], c: 'Chain the Alls.', s: [['Nest', 'Pens are inside books.'], ['Nest again', 'Books are inside tables, so pens are inside tables.']], a: 'Yes, it follows', w: 'Every diagram has pens inside tables.', tr: 'Answering no.' },
    { t: 'Two Somes', q: 'Statements: Some cats are dogs. Some dogs are birds. Does "Some cats are birds" follow?', g: ['Two overlaps'], c: 'Try to break it.', s: [['Break', 'Draw the cats–dogs overlap at one part of dogs and the dogs–birds overlap at a different part.'], ['Result', 'Cats and birds do not overlap in that diagram, so the conclusion can be false.']], a: 'No, it does not follow', w: 'It is possible but not forced.', tr: 'Chaining the Somes.' },
    { t: 'All + No', q: 'Statements: All dogs are birds. No birds are fish. Does "No dogs are fish" follow?', g: ['dogs ⊂ birds', 'birds apart from fish'], c: 'Separation passes inward.', s: [['Nest', 'Dogs lie inside birds.'], ['Separate', 'Fish are outside birds, so also outside dogs.']], a: 'Yes, it follows', w: 'The inner circle cannot touch what the outer one avoids.', tr: 'Answering no.' }
  ],
  short: { title: 'Try to break it', trad: 'Reason from rules.', fast: 'Draw the nested and separate circles; for each conclusion try to redraw so it is false. If you can, it does not follow.', rules: ['All chains.', 'Some does not chain.', 'No is symmetric.', 'Try to break each conclusion.'] },
  mist: [['Chaining two Somes', 'Overlaps need not meet.', 'Some + Some gives nothing.'], ['Reversing an All', 'Wrong converse.', 'All A are B does not give All B are A.'], ['Ignoring the convention', 'Existence assumptions differ.', 'Use non-empty classes as stated.']],
  tips: { sec: 120, elim: 'Eliminate a conclusion the moment one diagram breaks it.', adv: 'Draw All statements first, then No, then Some.', ins: 'Two-conclusion items are quick once you can break conclusions.' },
  rev: ['All chains.', 'Mixed rules.', 'Some does not chain.', 'Try to break.', 'Convention.'],
  qf: ['All + All ⇒ All', 'All + Some ⇒ Some', 'All + No ⇒ No'],
  take: ['Draw all diagrams.', 'Follows = always true.', 'Somes do not chain.', 'State the convention.'],
  self: ['Can I chain Alls?', 'Can I reject a tempting Some?', 'Can I apply the non-empty convention?']
});
const Q = [];
Q.push(E(S1.make('I', 0, 0)), E(S1.make('both', 0, 0)), E(S1.make('none', 0, 1)), E(S2.make('II', 1, 0)), E(S2.make('both', 1, 0)), E(S2.make('none', 1, 0)));
Q.push(M(S3.make('I', 0, 1)), M(S3.make('II', 0, 1)), M(S3.make('both', 0, 0)), M(S4.make('none', 0, 0)), M(S4.make('I', 1, 2)), M(S4.make('II', 0, 3)), M(S5.make('both', 2, 0)), M(S5.make('none', 1, 3)));
Q.push(P(S6.make('I', 0, 0)), P(S6.make('II', 2, 1)), P(S6.make('both', 1, 0)), P(S6.make('none', 1, 2)), P(S3.make('none', 2, 1, true)), P(S5.make('I', 3, 2)));
build(ch36, Q);

// ---------------- Chapter 37 ----------------
const opt = { I: 'Only conclusion I follows', II: 'Only conclusion II follows', both: 'Both conclusions follow', none: 'Neither conclusion follows' };
const sc = (stmtText, c1, c2, ans, expl) => {
  const w = Object.values(opt).filter((o) => o !== opt[ans]);
  return { q: `Statement: ${stmtText}\n\nConclusions:\nI. ${c1}\nII. ${c2}\n\nWhich of the following is correct?`, c: opt[ans], w, e: `${expl} Answer: ${opt[ans]}.` };
};
const ch37 = C({
  n: 37, id: 'y3-lr-adv-statements-conclusions', cat: 'lr', title: 'Statements and Conclusions — Critical Filtering',
  tag: 'Accept only what the statement itself supports: avoid outside knowledge, over-reading and reversed conditions',
  url: 'https://www.indiabix.com/logical-reasoning/statement-and-conclusion/',
  over: 'In a statements-and-conclusions question you are given a short statement and some conclusions, and you must decide which conclusions follow. The central skill is critical filtering: a conclusion follows only if it is directly supported by the statement, with no help from outside knowledge. This chapter teaches how to filter out four kinds of bad conclusion: unsupported additions, reversed conditions, over-generalisations and extra assumptions.',
  place: 'Statement-and-conclusion items appear in most logical-reasoning sections of company tests.',
  real: 'Reading a report or a contract and deciding what it actually commits to uses the same filter.',
  obj: ['Separate what is stated from what is assumed', 'Spot reversed conditions (necessary vs sufficient)', 'Detect over-generalisation and unsupported numbers', 'Use either-or and contrapositive reasoning', 'Handle two-conclusion options quickly'],
  pre: ['Basic Statements and Conclusions', 'Advanced Syllogisms'],
  refresh: 'A conclusion follows if the statement guarantees it. If the statement leaves it open, it does not follow.',
  defs: [
    'Directly supported: the conclusion is said or logically forced by the statement.',
    'Reversed condition: turning "if A then B" into "if B then A".',
    'Over-generalisation: moving from some or most to all.',
    'Outside knowledge: a fact that is true in the world but not stated.',
    'Contrapositive: "if A then B" is equivalent to "if not B then not A".'
  ],
  intu: 'Treat the statement as the only fact in the universe. If you need anything else to reach a conclusion, it does not follow.',
  mental: 'Ask for each conclusion: "Does the statement alone make this true?" Reject on any of four grounds: added fact, reversed condition, over-generalisation, or extra assumption.',
  formulas: [
    ['Direct support', 'Statement ⇒ conclusion', 'Said or forced.', 'Accept.', 'Employees got a bonus ⇒ Ravi got one'],
    ['Reversed condition', 'If A then B ⇏ if B then A', 'Necessary vs sufficient.', 'Reject.', 'Graduates only ⇏ all graduates hired'],
    ['Contrapositive', 'If A then B ⇒ if not B then not A', 'Valid.', 'Accept.', 'Not stopped ⇒ not red'],
    ['Either-or', 'A or B, not A ⇒ B', 'Valid.', 'Accept.', 'Printer or cable'],
    ['Numbers', 'Compute from given numbers only', 'Percentages and counts.', 'Accept computed values.', '36 of 40 passed ⇒ 4 failed']
  ],
  narr: [
    'The statement "All the employees of the firm were given a bonus" supports "Ravi, an employee, got a bonus" directly. It contradicts "Some employees did not get a bonus". So only the first conclusion follows.',
    'Reversed conditions are the commonest trap. "The company will hire only graduates" tells you what is necessary for hiring, not that every graduate is hired. "A non-graduate will not be hired" follows; "All graduates will be hired" does not.',
    'Numbers allow computation but not outside facts. If 36 of 40 students passed, then 4 did not pass is a valid conclusion. But "the 4 who failed were absent" is not.',
    'Either-or statements allow elimination. "Either the printer is faulty or the cable is loose" with "the cable is tight" gives "the printer is faulty".',
    'A conclusion that reaches beyond the subject of the statement, such as other cities, other years or other products, usually fails because the statement does not mention them.'
  ],
  deep: [['Necessary vs sufficient', '"Only" and "must" mark necessary conditions; they do not promise the outcome.'], ['Either I or II', 'When the two conclusions are complementary (one the opposite of the other) and the statement is silent, "either I or II follows" would apply; this chapter uses only the four standard options.']],
  vars: [['Direct support', 'Said in the statement.', 'Bonus for all'], ['Reversed condition', 'Converse trap.', 'Only graduates'], ['Computation', 'Numbers only.', '36 of 40'], ['Either-or', 'Eliminate one.', 'Printer or cable'], ['Contrapositive', 'Not B ⇒ not A.', 'Signal red']],
  ex: [
    { t: 'Reversed condition', q: 'Statement: The company will hire only graduates for the post. Conclusion: All graduates will be hired. Does it follow?', g: ['Only graduates'], c: 'Necessary, not sufficient.', s: [['Read', '"Only graduates" makes graduation necessary.'], ['Test', 'It does not promise that every graduate is hired.']], a: 'No', w: 'The converse is not stated.', tr: 'Reading it as sufficient.' },
    { t: 'Numbers', q: 'Statement: 36 of the 40 students in the class passed. Conclusion: Some students did not pass. Does it follow?', g: ['36 of 40'], c: 'Compute.', s: [['Failed', '40 − 36 = 4.'], ['Conclusion', 'So some students did not pass.']], a: 'Yes', w: 'The count is forced.', tr: 'Saying the statement is silent.' },
    { t: 'Either-or', q: 'Statement: Either the printer is faulty or the cable is loose; the cable is tight. Conclusion: The printer is faulty. Does it follow?', g: ['Either-or', 'Cable tight'], c: 'Eliminate.', s: [['Eliminate', 'The cable is not loose.'], ['Remaining', 'So the printer is faulty.']], a: 'Yes', w: 'One option of the either-or is removed.', tr: 'Calling it unsupported.' }
  ],
  short: { title: 'Statement only', trad: 'Use common sense.', fast: 'For each conclusion ask whether the statement alone makes it true; reject added facts, reversed conditions and over-generalisations.', rules: ['Statement alone.', 'Check the direction of conditions.', 'Compute numbers.', 'Eliminate in either-or.'] },
  mist: [['Using outside knowledge', 'Adds facts.', 'Only the statement counts.'], ['Reversing conditions', 'Converse trap.', 'Check direction.'], ['Generalising from some to all', 'Over-reach.', 'Match the quantity words.']],
  tips: { sec: 60, elim: 'If a conclusion needs an extra fact, drop it.', adv: 'Underline quantity words: all, some, only, most.', ins: 'Two-conclusion items reward checking each one separately.' },
  rev: ['Statement alone.', 'Converse trap.', 'Numbers.', 'Either-or.', 'Contrapositive.'],
  qf: ['If A then B ⇒ if not B then not A'],
  take: ['No outside facts.', 'Check direction.', 'Compute from numbers.', 'Eliminate options.'],
  self: ['Can I spot a reversed condition?', 'Can I compute from numbers?', 'Can I use either-or elimination?']
});
const q37 = [
  E(sc('All the employees of the firm were given a bonus this year.', 'Ravi, an employee of the firm, received a bonus this year.', 'Some employees of the firm did not receive a bonus this year.', 'I', 'The statement says every employee got a bonus, so Ravi did too (I follows) and no employee missed out (II contradicts it).')),
  E(sc('The shop remains closed on Sundays.', 'The shop is open on Mondays.', 'The shop does no business on Sundays.', 'II', 'A shop that is closed on Sundays does no business on Sundays (II follows). The statement says nothing about Mondays, so I does not follow.')),
  E(sc('In a class of 40 students, 36 passed the test.', 'Some students did not pass the test.', 'Every student passed the test.', 'I', '40 − 36 = 4 students did not pass, so I follows and II is false.')),
  E(sc('No one under 18 is allowed to vote in the election.', 'A 17-year-old cannot vote in the election.', 'Everyone aged 18 or above will vote in the election.', 'I', 'A 17-year-old is under 18, so cannot vote (I follows). The statement says who is allowed to vote, not who will vote, so II does not follow.')),
  E(sc('The company will hire only graduates for this post.', 'A person who is not a graduate will not be hired for this post.', 'Every graduate will be hired for this post.', 'I', '"Only graduates" makes graduation necessary, so I follows. It does not promise that every graduate is hired, so II does not follow.')),
  E(sc('The rain has stopped, but the roads remain flooded.', 'The roads are still flooded although it is not raining now.', 'It is still raining.', 'I', 'The statement directly gives I and denies II.')),
  M(sc('Some cars in the showroom are electric, and all electric cars have zero tailpipe emissions.', 'Some cars in the showroom have zero tailpipe emissions.', 'All cars in the showroom are electric.', 'I', 'The electric cars in the showroom have zero tailpipe emissions, so I follows. Only "some" cars are electric, so II does not follow.')),
  M(sc('Only members of the club may use its swimming pool.', 'A person who is not a member cannot use the pool.', 'Every member uses the pool.', 'I', '"Only members" makes membership necessary, so I follows. Nothing says members actually use it, so II does not follow.')),
  M(sc('The price of petrol was increased by 10% last month.', 'The price of petrol before last month was lower than it is now.', 'The price of diesel also rose last month.', 'I', 'A 10% increase makes the new price higher than the old, so I follows. Diesel is not mentioned, so II does not follow.')),
  M(sc('A survey found that 70% of the residents of a city own a two-wheeler.', '30% of the residents do not own a two-wheeler.', 'Every resident owns a two-wheeler.', 'I', '100% − 70% = 30% do not own one, so I follows and II is false.')),
  M(sc('Either the meeting will be held on Monday or it will be postponed to the next week.', 'If the meeting is not held on Monday, it will be postponed to the next week.', 'The meeting will certainly be held on Monday.', 'I', 'The either-or statement gives I directly. It does not say which alternative happens, so II does not follow.')),
  M(sc('Students who submit the project on time get extra credit.', 'Rohit submitted the project late, so he did not get extra credit.', 'Meena submitted the project on time, so she got extra credit.', 'II', 'II applies the rule directly. The rule says nothing about students who submit late (they might get credit another way), so I does not follow.')),
  M(sc('The factory\'s output rose in March, but its profits fell.', 'The factory produced more in March than before.', 'The factory\'s costs must have risen in March.', 'I', 'Output rising is stated, so I follows. Profits can fall for reasons other than costs (for example lower prices), so II does not follow.')),
  M(sc('No train from Platform 1 goes north, and some trains from Platform 2 go north.', 'No northbound train leaves from Platform 1.', 'All trains from Platform 2 go north.', 'I', 'I restates the first part of the statement. Only some Platform 2 trains go north, so II does not follow.')),
  P(sc('The government has announced a subsidy for farmers who own less than 2 hectares of land.', 'A farmer with 1.5 hectares of land is eligible for the subsidy.', 'A farmer with 3 hectares of land will not receive the subsidy.', 'I', '1.5 is less than 2, so I follows. The statement does not say that others are excluded, so II does not follow.')),
  P(sc('Of the 120 candidates who appeared, 90 passed the written test, 60 passed the interview, and 40 passed both.', 'Exactly 10 candidates passed neither.', 'Exactly 50 candidates passed only the written test.', 'both', 'Passed at least one = 90 + 60 − 40 = 110, so 120 − 110 = 10 passed neither (I). Only the written test: 90 − 40 = 50 (II). Both follow.')),
  P(sc('If the signal is red, the car stops. The car did not stop.', 'The signal was not red.', 'The signal was red.', 'I', 'The contrapositive of "if red then stops" is "if not stopped then not red", so I follows and II contradicts it.')),
  P(sc('Every applicant who clears the test is called for an interview. Some applicants who were called for an interview were rejected.', 'Some applicants who cleared the test were rejected.', 'Some applicants who were called for an interview did not clear the test.', 'none', 'The statement does not say that only those who cleared the test are called, so the rejected interviewees may not have cleared it. Neither conclusion is forced.')),
  P(sc('Either the printer is faulty or the cable is loose. The cable has been checked and is tight.', 'The printer is faulty.', 'The printer is not faulty.', 'I', 'The cable is not loose, so the printer must be faulty. I follows and II contradicts it.')),
  P(sc('To pass the examination, a student must score at least 40% in each subject.', 'A student who scores 35% in one subject does not pass.', 'Every student who passed scored at least 40% in each subject.', 'both', 'Scoring at least 40% in each subject is required for passing, so a student with 35% in one subject fails (I) and every passer met the requirement (II). Both follow.'))
];
build(ch37, q37);
