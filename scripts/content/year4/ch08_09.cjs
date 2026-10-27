const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T } = require('./q.cjs');
const { row: R, puzzle, others, permutations } = require('../year3/puzzleLib.cjs');
const base = { year: 4, cat: 'lr', category: 'Advanced Logical Reasoning', url: 'https://www.indiabix.com/logical-reasoning/' };
const E = (x) => easy(x.q, x.c, x.w, x.e);
const M = (x) => medium(x.q, x.c, x.w, x.e);
const P = (x) => placement(x.q, x.c, x.w, x.e);

// ================= Chapter 8: mixed reasoning assessment sets =================
const ch8 = C({ ...base, n: 8, id: 'y4-mrm-assessment-sets', title: 'Mixed Reasoning Assessment Sets',
  tag: 'A full mix of reasoning question types in one set: series, coding, ranking, direction, relations, calendar and logic',
  over: 'Company reasoning sections mix many small question types: number series, coding-decoding, ranking, direction sense, blood relations, calendars, clocks, simple syllogisms and short puzzles. Each type has a standard method that takes under a minute once practised. This chapter gives a mixed set and the method for each type so that you can switch quickly.',
  place: 'The first half of most reasoning sections is this kind of quick item; scoring well here buys time for puzzles.',
  real: 'Switching quickly between small analytical tasks is typical of day-to-day work.',
  obj: ['Recognise the type within seconds', 'Apply the standard method for each type', 'Compute ranks, directions and calendars without diagrams where possible', 'Solve truth-teller puzzles by case testing', 'Manage time across mixed items'],
  pre: ['Number Series', 'Coding-Decoding', 'Direction Sense', 'Blood Relations'],
  refresh: 'Ranks: total = rank from left + rank from right − 1. Calendar: days ahead mod 7. Direction: track coordinates.',
  defs: ['Series: numbers following a rule.', 'Coding: letters or numbers changed by a fixed rule.', 'Rank from both ends: total = left + right − 1.', 'Displacement: straight-line distance from start.', 'Odd days: remainder of days when divided by 7.'],
  intu: 'Every small type has one trick. The skill is recognising which.',
  mental: 'Name the type, apply the trick, verify once, move on.',
  formulas: [['Total from ranks', 'Left + right − 1', 'Ranking.', 'Row of people.', '12th and 29th give 40'], ['Letter shift', 'Add or subtract k from each letter', 'Coding.', 'Code questions.', 'CAT → DBU'], ['Displacement', '√(x² + y²)', 'Direction.', 'Walks.', '6 N and 8 E = 10'], ['Day ahead', 'n mod 7', 'Calendars.', 'Day questions.', '18 days = 4'], ['Series check', 'Differences and ratios', 'Series.', 'Missing term.', '2,5,10,17,26']],
  narr: ['A row of 40 has Ravi 12th from the left. From the right he is 40 − 12 + 1 = 29th.', 'In a code CAT becomes DBU: each letter moves one step forward. So DOG becomes EPH.', 'A walks 6 m north and 8 m east: the distance from the start is √(36 + 64) = 10 m.', 'If the 5th of a month is a Monday, the 23rd is 18 days later; 18 mod 7 = 4, so Friday.', 'For truth-teller puzzles, assume each person in turn is truthful and test for contradiction.'],
  deep: [['Series types', 'Check differences, then differences of differences, then ratios, then squares and cubes.'], ['Case testing', 'With three speakers there are only eight truth assignments; test them systematically.']],
  vars: [['Series', 'Differences.', '2, 5, 10, 17'], ['Coding', 'Shifts.', 'CAT → DBU'], ['Ranking', 'Left + right − 1.', 'Row of 40'], ['Direction', 'Coordinates.', '6 N, 8 E'], ['Calendar', 'Mod 7.', '23rd of the month']],
  ex: [
    { t: 'Ranking', q: 'Ravi is 12th from the left in a row of 40. What is his rank from the right?', g: ['12th, 40'], c: 'Total = left + right − 1.', s: [['Rearrange', 'Right = total − left + 1.'], ['Compute', '40 − 12 + 1 = 29.']], a: '29th', w: 'Do not subtract 12 only.', tr: 'Answering 28.' },
    { t: 'Coding', q: 'In a code CAT is DBU. What is DOG?', g: ['CAT → DBU'], c: 'Shift each letter.', s: [['Rule', 'Each letter + 1.'], ['Apply', 'D→E, O→P, G→H: EPH.']], a: 'EPH', w: 'Same shift for all.', tr: 'Shifting by 2.' },
    { t: 'Calendar', q: 'The 5th of a month is a Monday. What day is the 23rd?', g: ['5th Monday'], c: 'Mod 7.', s: [['Gap', '23 − 5 = 18 days.'], ['Day', '18 mod 7 = 4, Monday + 4 = Friday.']], a: 'Friday', w: 'Four days past Monday.', tr: 'Counting 18 days directly.' }
  ],
  short: { title: 'Type, trick, verify', trad: 'Reason from scratch.', fast: 'Name the type, apply its trick, verify once, and move on.', rules: ['Left + right − 1.', 'Mod 7 for days.', 'Coordinates for walks.', 'Test cases for liars.'] },
  mist: [['Off-by-one in ranks', 'Total wrong.', 'Subtract 1 once.'], ['Counting days instead of mod 7', 'Slow.', 'Reduce modulo 7.'], ['Stopping at one hypothesis', 'Missed contradiction.', 'Test all cases.']],
  tips: { sec: 45, elim: 'Reject answers that violate an obvious constraint.', adv: 'Practise each type until under 40 s.', ins: 'Mixed sets reward switching speed.' },
  rev: ['Series.', 'Coding.', 'Ranks.', 'Directions.', 'Calendars.'],
  qf: ['Total = left + right − 1'],
  take: ['Recognise.', 'Apply the trick.', 'Verify.', 'Move on.'],
  self: ['Can I name the type quickly?', 'Can I compute a rank?', 'Can I test cases?']
});
const shift = (w, k) => w.split('').map((c) => String.fromCharCode(((c.charCodeAt(0) - 65 + k + 26) % 26) + 65)).join('');
// truth-teller enumeration: A says B lies; B says C lies; C says A and B both lie.
const sols = [];
for (const [a, b, c] of [[1, 1, 1], [1, 1, 0], [1, 0, 1], [1, 0, 0], [0, 1, 1], [0, 1, 0], [0, 0, 1], [0, 0, 0]]) {
  const sa = (!b) === !!a, sb = (!c) === !!b, sc = ((!a) && (!b)) === !!c;
  if (sa && sb && sc) sols.push({ a, b, c });
}
const truthWho = sols.length === 1 ? ['A', 'B', 'C'].filter((_, i) => [sols[0].a, sols[0].b, sols[0].c][i]).join('') : 'ERR';
const q8 = [
  N('e', 'What comes next: 3, 6, 12, 24, ?', 48, 'Each term doubles: 24 × 2 = 48.'),
  T('e', 'If CAT is coded as DBU, then DOG is coded as', shift('DOG', 1), [shift('DOG', 2), shift('DOG', -1), 'EQI'], 'Each letter moves one step forward: D→E, O→P, G→H.'),
  N('e', 'Ravi is 12th from the left in a row of 40 students. His position from the right is', 40 - 12 + 1, 'Total = left + right − 1, so right = 40 − 12 + 1 = 29.'),
  N('e', 'A man walks 6 m north and then 8 m east. His distance from the start is (m)', Math.hypot(6, 8), '√(6² + 8²) = √100 = 10.'),
  T('e', 'Pointing to a girl, Arjun says, "She is the daughter of my father\'s only son." The girl is Arjun\'s', 'daughter', ['sister', 'niece', 'cousin'], 'Arjun\'s father\'s only son is Arjun himself, so the girl is Arjun\'s daughter.'),
  T('e', 'Which number does NOT belong: 27, 64, 125, 150?', '150', ['27', '64', '125'], '27, 64 and 125 are cubes (3³, 4³, 5³); 150 is not.'),
  N('m', 'What comes next: 2, 5, 10, 17, 26, ?', 37, 'The terms are n² + 1 (1²+1 … 5²+1); the next is 6² + 1 = 37.'),
  T('m', 'If MANGO is written as NBOHP, then APPLE is written as', shift('APPLE', 1), ['BQQLF', 'ZOOKD', 'BQQMG'], 'Each letter moves one step forward.'),
  T('m', 'A person faces north, turns right, walks 5 m, turns right, walks 5 m, turns left and walks 5 m. He is now facing', 'East', ['North', 'West', 'South'], 'North → right → East → right → South → left → East.'),
  N('m', 'Priya is 7th from the top and 18th from the bottom in a class. The class strength is', 7 + 18 - 1, '7 + 18 − 1 = 24.'),
  N('m', 'The sum of the ages of A and B is 50 and A is 10 years older than B. A\'s age is', 30, 'A = (50 + 10)/2 = 30.'),
  T('m', 'If the 5th of a month is a Monday, the 23rd of that month is a', 'Friday', ['Thursday', 'Saturday', 'Wednesday'], '18 days later; 18 mod 7 = 4; Monday + 4 days = Friday.'),
  T('m', 'All roses are flowers and no flower is a stone. Which must be true?', 'No rose is a stone', ['Some stones are roses', 'All flowers are roses', 'Some flowers are stones'], 'Roses lie inside flowers, which are separate from stones.'),
  T('m', 'Book : Reading :: Fork : ?', 'Eating', ['Cooking', 'Metal', 'Kitchen'], 'A book is used for reading; a fork is used for eating.'),
  T('p', 'The angle between the hands of a clock at 4:30 is', '45°', ['30°', '60°', '75°'], 'Hour hand at 4 × 30 + 15 = 135°; minute hand at 180°; difference 45°.'),
  N('p', 'What comes next: 1, 2, 6, 24, 120, ?', 720, 'Factorials: 1!, 2!, 3!, 4!, 5!; next is 6! = 720.'),
  N('p', 'A 3 × 3 × 3 cube is painted on all faces and cut into 27 unit cubes. The number of unit cubes with exactly one painted face is', 6, 'One per face centre: 6 faces × 1 = 6.'),
  T('p', 'A says "B is lying", B says "C is lying", and C says "A and B are both lying". Who is telling the truth?', `Only ${truthWho}`, ['Only A', 'Only C', 'A and C'], 'Testing all eight cases, only the case with B truthful and A, C lying is consistent.'),
  T('p', 'If 1 January 2024 is a Monday, then 1 March 2024 is a', 'Friday', ['Thursday', 'Saturday', 'Wednesday'], 'Jan has 31 days and Feb 2024 has 29: 60 days; 60 mod 7 = 4; Monday + 4 = Friday.'),
  T('p', 'In a row of 5 people, A is to the left of B, C is to the right of B, D is between A and B and E is at the right end. Who is in the middle?', 'D', ['A', 'B', 'C'], 'Order: A, D, B, C, E (E right end; D between A and B), so the middle (third) is B.')
];
// last answer correction: order A, D, B, C, E has middle B
q8[19] = placement(q8[19].question, 'B', ['A', 'C', 'E'], 'Order from left: A, D, B, C, E, so the person in the middle (third) is B.');
build(ch8, q8);

// ================= Chapter 9: multi-constraint logic puzzles =================
const ppl8 = 'ABCDEFGH'.split('');
const pz = puzzle(ppl8, [R.ends('B', 'A'), R.immRight('E', 'B'), R.immLeft('G', 'D'), R.between('E', 'D', 1), R.immRight('F', 'D'), R.immRight('H', 'F'), R.immLeft('C', 'A')]);
const intro = 'Eight friends A, B, C, D, E, F, G and H sit in a row facing north. The following facts are known:';
const S = `From left to right the order is ${pz.seat.join(', ')}`;
const pq = (stem) => `${intro}\n${pz.text}\n\n${stem}`;
function matrix(people, attrs, cons) {
  const sols = [];
  const rec = (i, cur) => {
    if (i === attrs.length) { const p = {}; people.forEach((x, k) => { p[x] = {}; attrs.forEach((a, j) => { p[x][a.name] = cur[j][k]; }); }); if (cons.every((c) => c.f(p))) sols.push(p); return; }
    for (const perm of permutations(attrs[i].values)) rec(i + 1, [...cur, perm]);
  };
  rec(0, []);
  if (sols.length !== 1) throw new Error('matrix not unique ' + sols.length);
  return sols[0];
}
const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
const job = { name: 'job', values: ['pilot', 'chef', 'tailor', 'nurse', 'clerk'], verb: (v) => `is a${/^[aeiou]/.test(v) ? 'n' : ''} ${v}`, who: (v) => `the ${v}` };
const city = { name: 'city', values: ['Agra', 'Bhopal', 'Cochin', 'Dehradun', 'Erode'], verb: (v) => `lives in ${v}`, who: (v) => `the person who lives in ${v}` };
const sport = { name: 'sport', values: ['golf', 'hockey', 'tennis', 'kabaddi', 'squash'], verb: (v) => `plays ${v}`, who: (v) => `the person who plays ${v}` };
const people5 = ['Anil', 'Bharti', 'Chetan', 'Disha', 'Eknath'];
const link = (a, va, b, vb) => ({ t: `${cap(a.who(va))} ${b.verb(vb)}.`, f: (p) => Object.keys(p).every((x) => (p[x][a.name] === va) === (p[x][b.name] === vb)) });
const is = (x, a, v) => ({ t: `${x} ${a.verb(v)}.`, f: (p) => p[x][a.name] === v });
const not = (x, a, v) => ({ t: `${x} does not ${a.verb(v).replace(/^is an? /, 'be a ').replace(/^lives/, 'live').replace(/^plays/, 'play')}.`, f: (p) => p[x][a.name] !== v });
const cons5 = [link(job, 'pilot', city, 'Cochin'), is('Chetan', city, 'Erode'), link(job, 'nurse', city, 'Bhopal'), link(sport, 'golf', job, 'pilot'), is('Eknath', job, 'clerk'), link(city, 'Agra', sport, 'tennis'), link(sport, 'hockey', city, 'Erode'), link(sport, 'squash', city, 'Bhopal'), is('Eknath', sport, 'kabaddi'), link(job, 'chef', sport, 'tennis'), is('Disha', job, 'nurse'), not('Bharti', sport, 'golf')];
const sol5 = matrix(people5, [job, city, sport], cons5);
const grid5 = people5.map((x) => `${x}: ${sol5[x].job} / ${sol5[x].city} / ${sol5[x].sport}`).join('; ');
const MI = `Five friends Anil, Bharti, Chetan, Disha and Eknath each have a different profession (pilot, chef, tailor, nurse, clerk), live in a different city (Agra, Bhopal, Cochin, Dehradun, Erode) and play a different sport (golf, hockey, tennis, kabaddi, squash). The following facts are known:\n${cons5.map((c, i) => `${i + 1}. ${c.t}`).join('\n')}`;
const mq = (stem) => `${MI}\n\n${stem}`;
const attrQ = (x, name, label) => { const c = sol5[x][name]; const vals = { job: job.values, city: city.values, sport: sport.values }[name].filter((v) => v !== c); return { q: mq(label(x)), c, w: vals.slice(0, 3), e: `Working out the grid gives: ${grid5}. So the answer is ${c}.` }; };
const whoQ = (name, v, text) => { const c = people5.find((x) => sol5[x][name] === v); return { q: mq(text), c, w: people5.filter((x) => x !== c).slice(0, 3), e: `Working out the grid gives: ${grid5}. So the answer is ${c}.` }; };
const ch9 = C({ ...base, n: 9, id: 'y4-mrm-multi-constraint-puzzles', title: 'Multi-Constraint Logic Puzzles',
  tag: 'Eight-person orderings and five-person, three-attribute grids with many clues and negatives',
  over: 'Multi-constraint puzzles give more clues than a quick glance can use, so you must process them in order of strength: exact positions first, chains next, either-or splits after that, and negative clues last. Two forms are common: a long ordering with 8 people and a grid with 5 people and 3 attributes. The method is the same: record every clue, merge linked clues into bundles, and test cases only when a clue offers two options.',
  place: 'These puzzles carry 4–6 questions and are the usual "difficult set" in the reasoning section.',
  real: 'Scheduling and matching with many rules uses the same constraint reasoning.',
  obj: ['Rank clues by strength', 'Build chains and bundles', 'Use case splitting for either-or clues', 'Apply negative clues last', 'Verify the final arrangement against every clue'],
  pre: ['Complex Seating Arrangements (7+ People)', 'Complex Matrix and Grid Puzzles'],
  refresh: 'A clue with one possible placement is strongest. Linked clues merge columns. Negative clues only eliminate.',
  defs: ['Chain: neighbours linked in a fixed order.', 'Bundle: values known to belong to the same person.', 'Either-or clue: offers two placements; split into cases.', 'Elimination: removing possibilities using negatives.', 'Verification: checking the result against all clues.'],
  intu: 'Each clue removes possibilities. Strong clues first means fewer cases later.',
  mental: 'List clues by strength, place the strongest, extend chains, split only when needed, and verify.',
  formulas: [['Gap clue', 'Positions differ by k + 1', 'k people between.', 'Gaps.', 'One between: difference 2'], ['Chain', 'X immediately left of Y', 'Neighbours.', 'Blocks.', 'G D F H'], ['Bundle', 'A ↔ B same person', 'Linked clue.', 'Merge.', 'Pilot ↔ Cochin'], ['Case split', 'Test both options', 'Either-or.', 'Eliminate.', 'Ends clue'], ['Verify', 'Test all clues', 'End.', 'Safety.', 'No clue broken']],
  narr: ['Eight friends in a row: B and A are at the two ends; E is immediately right of B; G is immediately left of D; one person is between E and D; F is immediately right of D; H immediately right of F; C immediately left of A. If A were at the left end, C would need the seat to A\'s left, which does not exist, so B is at the left end and A at the right end. B, E, then G, D, F, H and C, A.', 'For the five-person grid, merge links: pilot ↔ Cochin ↔ golf; nurse ↔ Bhopal ↔ squash; hockey ↔ Erode (Chetan); Agra ↔ tennis ↔ chef. Eknath is a clerk who plays kabaddi, so he lives in Dehradun. Disha is the nurse, so she lives in Bhopal and plays squash. Chetan, in Erode, is the tailor who plays hockey. The remaining two, Anil and Bharti, take the pilot and chef bundles; Bharti does not play golf, so Bharti is the chef in Agra playing tennis and Anil is the pilot in Cochin playing golf.', 'Notice how many clues were redundant for the first deduction: pick the strongest and let the rest confirm.', 'Negative clues rarely place a person on their own; use them to choose between two remaining options.', 'Always re-read each clue against the final grid.'],
  deep: [['Redundant clues', 'Some clues confirm what you already know; do not waste time on them until the end.'], ['Two-option stalemate', 'If you reach two options with no clue to separate them, a clue was missed or misread.']],
  vars: [['Long ordering', 'Chains and gaps.', '8 people'], ['Grid with bundles', 'Linked clues.', '5 × 3'], ['Either-or ends', 'Case split.', 'A and B at the ends'], ['Negative clues', 'Eliminate.', 'Bharti not golf'], ['Verification', 'Check all.', 'Final grid']],
  ex: [
    { t: 'Ends clue', q: 'B and A sit at the two ends; E is immediately right of B and C is immediately left of A. Who is at the left end?', g: ['Ends clue'], c: 'Test the cases.', s: [['Case A at left', 'C would need to be left of A: impossible.'], ['So', 'B at left, A at right.']], a: 'B', w: 'The other case fails.', tr: 'Guessing A.' },
    { t: 'Bundle', q: 'The pilot lives in Cochin and the golfer is a pilot. Which city does the golfer live in?', g: ['Two links'], c: 'Chain the links.', s: [['Link 1', 'Golfer = pilot.'], ['Link 2', 'Pilot = Cochin.']], a: 'Cochin', w: 'Bundles merge.', tr: 'Leaving it open.' },
    { t: 'Negative clue', q: 'Two people (Anil, Bharti) share the pilot and chef bundles and Bharti does not play golf (pilot bundle). Who is the pilot?', g: ['Negative clue'], c: 'Eliminate.', s: [['Pilot bundle plays golf', 'Bharti is excluded.'], ['So', 'Anil is the pilot.']], a: 'Anil', w: 'The negative separates the two.', tr: 'Calling it undetermined.' }
  ],
  short: { title: 'Strongest first', trad: 'Go in clue order.', fast: 'Sort clues by strength, place chains, split either-or clues, apply negatives last and verify.', rules: ['Exact positions first.', 'Merge linked clues.', 'Split only when needed.', 'Verify.'] },
  mist: [['Going in clue order', 'Many cases.', 'Sort by strength.'], ['Applying negatives early', 'Weak start.', 'Use them last.'], ['Not verifying', 'Hidden error.', 'Re-read clues.']],
  tips: { sec: 240, elim: 'An option that breaks any single clue is wrong.', adv: 'Draw the final grid before answering.', ins: 'Eight clues do not mean eight steps.' },
  rev: ['Clue strength.', 'Chains.', 'Bundles.', 'Cases.', 'Verify.'],
  qf: ['Gap = k + 1'],
  take: ['Sort clues.', 'Merge.', 'Split late.', 'Verify.'],
  self: ['Can I sort clues by strength?', 'Can I merge linked clues?', 'Can I verify a grid?']
});
const rowQ = (stem, c, w, e) => ({ q: pq(stem), c, w, e: `${S}; ${e}` });
const q9 = [
  E(rowQ('Who sits at the left end?', pz.seat[0], others(ppl8, pz.seat[0], 2), `${pz.seat[0]} is at the left end.`)),
  E(rowQ('Who sits at the right end?', pz.seat[7], others(ppl8, pz.seat[7], 1), `${pz.seat[7]} is at the right end.`)),
  E(rowQ('Who sits immediately right of E?', pz.seat[pz.pos.E + 1], others(ppl8, pz.seat[pz.pos.E + 1], 3), `${pz.seat[pz.pos.E + 1]} is immediately right of E.`)),
  E(rowQ('Who sits immediately left of D?', pz.seat[pz.pos.D - 1], others(ppl8, pz.seat[pz.pos.D - 1], 2), `${pz.seat[pz.pos.D - 1]} is immediately left of D.`)),
  E(rowQ('Who sits in the fifth seat from the left?', pz.seat[4], others(ppl8, pz.seat[4], 1), `${pz.seat[4]} is fifth from the left.`)),
  E(rowQ('Who sits second from the right?', pz.seat[6], others(ppl8, pz.seat[6], 3), `${pz.seat[6]} is second from the right.`)),
  M(rowQ('How many people sit between B and D?', pz.pos.D - pz.pos.B - 1, [pz.pos.D - pz.pos.B, pz.pos.D - pz.pos.B + 1, pz.pos.D - pz.pos.B - 2], `${pz.pos.D - pz.pos.B - 1} people sit between B and D, which is ${pz.pos.D - pz.pos.B - 1}.`)),
  M(rowQ('Who sits between G and F?', pz.seat[pz.pos.G + 1], others(ppl8, pz.seat[pz.pos.G + 1], 2), `D sits between G and F.`)),
  M(rowQ('How many people sit to the right of F?', 7 - pz.pos.F, [8 - pz.pos.F, 6 - pz.pos.F, 9 - pz.pos.F], `${7 - pz.pos.F} people sit to the right of F, which is ${7 - pz.pos.F}.`)),
  M(rowQ('Who sits third from the left?', pz.seat[2], others(ppl8, pz.seat[2], 0), `${pz.seat[2]} is third from the left.`)),
  M(rowQ('If A and B exchange seats, who sits immediately left of E?', 'A', ['B', 'C', 'G'], `After the exchange A is at the left end, so A is immediately left of E.`)),
  M(rowQ('Who sits immediately left of A?', pz.seat[pz.pos.A - 1], others(ppl8, pz.seat[pz.pos.A - 1], 1), `${pz.seat[pz.pos.A - 1]} is immediately left of A.`)),
  M(rowQ('How many people sit between E and H?', pz.pos.H - pz.pos.E - 1, [pz.pos.H - pz.pos.E, pz.pos.H - pz.pos.E - 2, pz.pos.H - pz.pos.E + 1], `${pz.pos.H - pz.pos.E - 1} people sit between E and H, which is ${pz.pos.H - pz.pos.E - 1}.`)),
  M(rowQ('Who is the neighbour of both D and H?', 'F', ['G', 'E', 'C'], 'F is immediately right of D and immediately left of H.')),
  P(attrQ('Anil', 'job', (x) => `What is ${x}'s profession?`)),
  P(attrQ('Bharti', 'city', (x) => `In which city does ${x} live?`)),
  P(attrQ('Chetan', 'job', (x) => `What is ${x}'s profession?`)),
  P(whoQ('sport', 'squash', 'Who plays squash?')),
  P(attrQ('Disha', 'sport', (x) => `Which sport does ${x} play?`)),
  P(whoQ('city', 'Dehradun', 'Who lives in Dehradun?'))
];
build(ch9, q9);
