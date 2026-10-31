const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const r = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;
const lcm = (a, b) => { const g = (x, y) => (y ? g(y, x % y) : x); return a * b / g(a, b); };

// Simulate alternate-day work: workers[i] has a daily output; cycle through them in order until total is reached.
const alt = (total, outs) => { let done = 0, day = 0; while (done < total) { done += outs[day % outs.length]; day++; } return day; };

// ---------------- Chapter 7 ----------------
const ch7 = C({
  n: 7, id: 'y3-quant-alternate-work', cat: 'quant', title: 'Alternate Day Work Schedules',
  tag: 'Workers taking turns by day, cycle work and the last partial cycle',
  over: 'In an alternate-day schedule the workers do not work together; they take turns, one on each day, in a fixed order. The work done in one complete cycle is the sum of their daily outputs. The job is finished after some whole number of cycles plus a partial last cycle. The method is to find the work per cycle, count the full cycles that fit before the job is completed, and then see who finishes the remainder.',
  place: 'Alternate-day work questions are commonly asked in company aptitude rounds as a harder variant of time and work, usually with two or three workers.',
  real: 'Shift rosters, rotating machine operators and duty rotations between teams are alternate-day schedules.',
  obj: ['Compute the work done in one cycle of the rotation', 'Find the number of full cycles before the job ends', 'Identify who completes the last part', 'Handle three or more workers in rotation', 'Handle changes of order or different starting workers'],
  pre: ['Advanced Work Problems', 'Time and Work'],
  refresh: 'Use LCM units so each worker\'s daily output is a whole number. Total units = LCM of the times.',
  defs: [
    'Cycle: one complete round of the rotation (each worker works one day).',
    'Cycle output: the sum of the daily outputs of all workers in the cycle.',
    'Full cycles: the number of complete rounds before the remaining work is less than one cycle output.',
    'Last partial cycle: the final days in which the remaining work is finished.',
    'Alternate with a start: the order matters when the job ends part-way through a cycle.'
  ],
  intu: 'A rotation turns many days into repeated blocks. After you account for as many complete blocks as possible, only a short tail remains, and the tail is solved by looking at one worker at a time.',
  mental: 'Convert to units, add the daily outputs for the cycle output, divide the total by it to find full cycles (keeping the remainder), then run the tail day by day.',
  formulas: [
    ['Cycle output', 'Σ daily outputs of the workers in the rotation', 'Use units per day.', 'Every rotation.', 'A 3 + B 2 = 5 units per two days'],
    ['Full cycles', '⌊(total − last-worker output) ÷ cycle output⌋', 'Leave room for the finishing day.', 'Counting cycles.', '60 units: 11 cycles of 5 = 55 units'],
    ['Tail', 'Remainder ÷ next worker\'s output', 'Day-by-day.', 'Finishing the job.', '5 units left: A does 3, B does 2'],
    ['Total days', '(cycles × workers in a cycle) + days in the tail', 'Count each day.', 'Final answer.', '11 × 2 + 2 = 24 days'],
    ['Finishing before the cycle ends', 'If the remainder ≤ the first worker\'s output, the first worker finishes it', 'Order matters.', 'Who finishes.', 'Remainder 3 → A finishes']
  ],
  narr: [
    'Choose units. If A takes 20 days and B takes 30 days, take the job as 60 units: A does 3 units a day and B does 2. In a two-day cycle (A then B) they do 5 units.',
    'Count full cycles. 60 ÷ 5 = 12 exactly, so after 12 cycles (24 days) the job is done, with B finishing on the last day. If A starts, A works first in every cycle.',
    'Handle the tail carefully. For A = 12 days and B = 18 days with 36 units, A does 3 and B does 2. A cycle yields 5 units, 7 cycles (14 days) yield 35, and the remaining 1 unit is done by A on day 15.',
    'The order of work can change the total time. If B starts in the same example, B does 2 then A does 3 in each cycle; after 7 cycles 35 units are done and B finishes the last unit on day 15 as well. When the remainder is small enough for the first worker, the starter finishes.',
    'For three workers, the cycle has three days. A, B, C with outputs 4, 3, 2 do 9 units per cycle. A 40-unit job is done in 4 full cycles (36 units, 12 days) plus 4 more units: A does 4 on day 13.'
  ],
  deep: [['When the starter changes the answer', 'If the job ends exactly after a complete cycle, the answer is the same whichever worker starts. If it ends part-way, the answer may differ by a day.'], ['Leave and join', 'If one worker is absent in a cycle, drop his output for that cycle and continue with the others.']],
  vars: [['Two workers alternate', 'A then B.', 'A 20 days, B 30 days'], ['Three workers rotate', 'A, B, C.', '4, 3, 2 units'], ['Different starters', 'B first.', 'Order swap'], ['Tail questions', 'Who finishes?', 'Remainder 1 unit'], ['Partial cycles', 'Count days.', '7 cycles + 1 day']],
  ex: [
    { t: 'Two workers in turn', q: 'A can do a job in 12 days and B in 18 days. They work on alternate days, A first. In how many days is the job finished?', g: ['A 12 days', 'B 18 days'], c: 'Units and cycles.', s: [['Units', 'Total = 36. A does 3 and B does 2 per day.'], ['Cycle', '3 + 2 = 5 units per two days. After 7 cycles (14 days) 35 units are done.'], ['Tail', '1 unit is left: A does it on day 15.']], a: '15 days', w: 'A starts the next cycle and needs only 1 unit.', tr: 'Dividing 36 by 5 and rounding up to 8 cycles (16 days).' },
    { t: 'Exact cycles', q: 'A takes 20 days and B takes 30 days. They work on alternate days, starting with A. When is the job finished?', g: ['A 20, B 30'], c: 'Check whether the job ends on a cycle boundary.', s: [['Units', 'Total 60: A 3, B 2.'], ['Cycle', '5 units per two days, so 60/5 = 12 full cycles.'], ['Days', '12 × 2 = 24 days.']], a: '24 days', w: 'The job ends exactly after B\'s day.', tr: 'Counting 23 days.' },
    { t: 'Three workers', q: 'A, B and C can do 4, 3 and 2 units of a 40-unit job per day respectively and work in turn, A first. How many days does the job take?', g: ['4, 3, 2 units'], c: 'Three-day cycle.', s: [['Cycle', '9 units per 3 days.'], ['Full cycles', '4 cycles: 36 units in 12 days.'], ['Tail', '4 units left: A does 4 on day 13.']], a: '13 days', w: 'A finishes the job.', tr: 'Rounding up to 5 cycles.' }
  ],
  short: { title: 'Cycles then tail', trad: 'Simulate day by day.', fast: 'Divide the total by the cycle output, keep the full cycles, and finish the remainder day by day.', rules: ['Units per day for each worker.', 'Full cycles first.', 'Check who starts the tail.', 'Remainder ≤ first worker\'s output → he finishes.'] },
  mist: [['Rounding cycles up', 'Using the ceiling for the last cycle.', 'Run the tail day by day.'], ['Ignoring the order', 'Assuming the starter does not matter.', 'Check the tail.'], ['Adding times', 'Adding the days of A and B.', 'Use units per day.']],
  tips: { sec: 90, elim: 'The answer must be between half the shorter time and the longer time of the two.', adv: 'Write the cycle output and the tail on two lines.', ins: 'A day-by-day check of the tail removes most errors.' },
  rev: ['Units per day.', 'Cycle output.', 'Full cycles.', 'Tail.', 'Order matters.'],
  qf: ['cycles = total ÷ cycle output'],
  take: ['Cycle structure.', 'Tail check.', 'Order.', 'Units.'],
  self: ['Can I find cycle output?', 'Can I find who finishes?', 'Can I do three workers?']
});
const q7 = [
  easy('A does 3 units and B does 2 units of work per day and they work on alternate days. In 2 days (one cycle) they do (units)', 5, [2, 3, 6], '3 + 2 = 5 units per two-day cycle.'),
  easy('A takes 20 days and B takes 30 days to do a job. If the job is taken as 60 units, A\'s daily work is (units)', 3, [2, 4, 5], '60 ÷ 20 = 3 units per day.'),
  easy('A takes 20 days and B takes 30 days. They work on alternate days starting with A. The job finishes in (days)', alt(60, [3, 2]), [20, 25, 30], '60 units ÷ 5 per cycle = 12 cycles = 24 days.'),
  easy('A job is 30 units. A does 3 units per day and B does 2 units per day, alternately starting with A. The days needed are', alt(30, [3, 2]), [10, 12, 14], 'Six cycles of 5 units give 30 units in 12 days.'),
  easy('If three workers do 4, 3 and 2 units on alternate days respectively, the work per three-day cycle is (units)', 9, [6, 8, 12], '4 + 3 + 2 = 9.'),
  easy('A and B do 5 and 3 units a day alternately, A first. After 8 days the work done is (units)', 4 * 5 + 4 * 3, [28, 30, 36], 'Four cycles of 8 units = 32.'),

  medium('A takes 12 days and B takes 18 days. They work on alternate days starting with A. The job takes (days)', alt(36, [3, 2]), [14, 16, 18], '36 units; cycle 5; 7 cycles = 35 units in 14 days; A does the last unit on day 15.'),
  medium('A takes 12 days and B takes 18 days. They work on alternate days starting with B. The job takes (days)', alt(36, [2, 3]), [14, 16, 17], 'B does 2 and A does 3 per cycle; 7 cycles give 35 units in 14 days, and B does the last unit on day 15.'),
  medium('A, B and C do 4, 3 and 2 units per day in turn, A first, on a 40-unit job. The number of days is', alt(40, [4, 3, 2]), [12, 14, 15], 'Four cycles give 36 units in 12 days. A does the last 4 units on day 13.'),
  medium('A takes 10 days and B takes 15 days. They work on alternate days, A first. The job takes (days)', alt(30, [3, 2]), [10, 12, 13], '30 units; A 3, B 2; cycle 5; 6 cycles = 12 days.'),
  medium('A takes 8 days and B takes 12 days. They work on alternate days, A first. The job takes (days)', alt(24, [3, 2]), [8, 9, 10], '24 units; A 3, B 2; 4 cycles give 20 units in 8 days; the remaining 4 units take A (day 9) and B (day 10): 10 days.'),
  medium('A takes 6 days, B takes 12 days; they work on alternate days starting with B. The job takes (days)', alt(12, [1, 2].reverse().map(x => x * 1).map((x, i) => [2, 1][i])), [6, 7, 9], '12 units; A does 2 and B does 1; starting with B: cycle 3 units; 4 cycles give 12 units in 8 days.'),
  medium('A and B do 7 and 5 units per day alternately, A first. A 100-unit job takes (days)', alt(100, [7, 5]), [16, 18, 20], '8 cycles (16 days) give 96 units; A does the remaining 4 on day 17.'),
  medium('If A does 5 units on his day and B does 3 on his, and the job is 50 units with A first, B does the last day\'s work if', 'the remaining units after the last complete cycle are more than 5', ['A completes the job', 'the job ends exactly', 'B never works'], 'If more than A\'s 5 units are left in a cycle, B must finish it.'),

  placement('A takes 24 days and B takes 36 days to do a job. They work on alternate days, A first. The job takes (days)', alt(72, [3, 2]), [28, 30, 31], '72 units; cycle 5; 14 cycles = 70 units in 28 days; A completes the last 2 units on day 29.'),
  placement('A can do a job in 15 days and B in 20 days. They work on alternate days starting with B. The job takes (days)', alt(60, [3, 4]), [16, 17, 19], '60 units; B does 3 and A does 4 per day; cycle 7; 8 cycles = 56 units in 16 days; B does 3 on day 17 and A does the last unit on day 18.'),
  placement('Three workers A, B and C can finish a job in 10, 15 and 30 days. Working in turn, A first, they finish in (days)', alt(30, [3, 2, 1]), [10, 11, 12], '30 units; outputs 3, 2, 1; cycle 6; 5 cycles = 30 units in 15 days.'),
  placement('A does 6 units a day and B does 4. The job is 59 units; they alternate, A first. The days needed are', alt(59, [6, 4]), [11, 12, 13], '5 cycles give 50 units in 10 days; A does 6 (56) on day 11; B does 4 on day 12 to finish.'),
  placement('A can do 1/10 of a job per day and B can do 1/15. They alternate, A first. The fraction of the job done after 10 days is', '5/6', ['1/2', '1/3', '2/3'], 'Five cycles of 1/10 + 1/15 = 1/6 give 5/6.'),
  placement('Two workers alternate and the job needs 12 and 18 days alone. If B starts, the job finishes on day', alt(36, [2, 3]), [14, 16, 18], '36 units; B 2 and A 3; 7 cycles = 35 units in 14 days; B finishes the last unit on day 15.')
];
build(ch7, q7);

// ---------------- Chapter 8 ----------------
const ch8 = C({
  n: 8, id: 'y3-quant-adv-pipes-cisterns', cat: 'quant', title: 'Advanced Pipes and Cisterns — Leak Scenarios',
  tag: 'Leaks, partial opening, timed valves and cisterns filling in stages',
  over: 'Year 2 pipes and cisterns used inlets and outlets that stay open. Year 3 adds leaks that appear only after the tank has partly filled, pipes opened and closed at stated times, pipes that work in alternate hours, and capacity questions in litres. The rates still add, with outlets negative; the new difficulty is phases.',
  place: 'Advanced pipe questions are commonly asked in company aptitude rounds, typically with a leak discovered after some time or pipes that open in turn.',
  real: 'Filling reservoirs with seepage, bathtubs with a slow drain and chemical tanks with timed valves are of this type.',
  obj: ['Find the leak rate from filling times with and without the leak', 'Solve problems with phases of different open pipes', 'Handle pipes working in alternate hours', 'Compute capacity in litres from rates', 'Find the time to empty a partly full tank'],
  pre: ['Pipes and Cisterns', 'Advanced Work Problems'],
  refresh: 'Inlet rate = +1/time. Outlet or leak rate = −1/time. Net rate = sum. Work done = Σ rate × time.',
  defs: [
    'Leak: an unintended outlet; its rate is the difference between the inlet rate and the net rate.',
    'Phase: a period with a fixed set of open pipes.',
    'Alternate hours: pipes open one at a time in turn, each for one hour.',
    'Capacity: the volume the tank holds (the whole job = 1).',
    'Net rate: the signed sum of the rates of open pipes.'
  ],
  intu: 'A tank is a job where outlets undo work. Filling a tank with a leak is like paying a tax: a fixed fraction of the inflow is lost every hour. Because rates add, a leak that appears midway simply changes the net rate from then on.',
  mental: 'Write the rate of every pipe (units per hour using the LCM as capacity), list the phases with their open pipes and times, and add the units per phase until the capacity is reached.',
  formulas: [
    ['Leak rate', 'Leak = inlet rate − net rate', 'Net = 1/(time with leak).', 'Leak questions.', '1/6 − 1/7.5 = 1/30'],
    ['Phase work', 'Σ (net rate × time)', 'Phases add.', 'Timed valves.', '3 hours at 1/6 + 2 hours at 1/10'],
    ['Alternate hours', 'Output per cycle = sum of the pipes', 'Like alternate-day work.', 'Pipes in turn.', 'A 1/6, B 1/8 alternate'],
    ['Time to empty a part', 'fraction ÷ |net outlet rate|', 'Fraction of the tank.', 'Partly filled tanks.', '(1/2) ÷ (1/30) = 15 h'],
    ['Capacity from rates', 'Capacity = rate (L/h) × time (h)', 'Litres per hour given.', 'Litre questions.', '12 L/h × 5 h = 60 L']
  ],
  narr: [
    'To find a leak, compare the filling time with and without it. A pipe fills a tank in 6 hours; with a leak it takes 7.5 hours. The leak rate is 1/6 − 1/7.5 = 1/30, so the leak alone empties a full tank in 30 hours.',
    'Phases: a tank is filled by a pipe (6 hours) for 3 hours, then a leak opens. After 3 hours the tank is half full. The net rate becomes 1/6 − 1/30 = 2/15, so the remaining half takes (1/2) ÷ (2/15) = 3.75 hours: 6.75 hours in all.',
    'Alternate hours: if pipe A fills in 6 hours and pipe B in 8 hours and they work alternately (A first), the output per two hours is 1/6 + 1/8 = 7/24. After 6 cycles (12 hours) 42/24 would exceed the capacity, so use 3 cycles (6 hours, 21/24) and finish with A in the 7th hour: 1/6 = 4/24 ≥ 3/24 needed, so it takes just over 6.75 hours.',
    'For litres, convert rates: a pipe that delivers 12 litres per minute and a leak that loses 2 litres per minute give a net 10 litres per minute, so a 600-litre tank fills in 60 minutes.',
    'To empty a partly full tank, use the outlet rate only: with a leak of 1/30 per hour, half a tank empties in 15 hours.'
  ],
  deep: [['Leak is not constant in reality', 'In the problems the leak rate is fixed; in practice leaks depend on water level. Treat them as constant unless told otherwise.'], ['Check with fractions', 'Fractions of the tank filled in each phase must add to 1 at the end. Use this to check.']],
  vars: [['Find the leak rate', 'Two filling times.', '6 h and 7.5 h'], ['Leak after some time', 'Two phases.', 'Leak opens at half-full'], ['Alternate pipes', 'Turns.', 'A then B'], ['Litre problems', 'Capacity.', '12 L/min inlet'], ['Empty a partial tank', 'Fraction ÷ rate.', 'Half a tank']],
  ex: [
    { t: 'Leak found', q: 'A pipe fills a tank in 6 hours. Because of a leak it takes 7.5 hours. How long does the leak alone take to empty the tank?', g: ['6 h', '7.5 h'], c: 'Leak = inlet − net.', s: [['Rates', 'Inlet 1/6; net 1/7.5 = 2/15.'], ['Leak', '1/6 − 2/15 = 1/30.'], ['Time', '30 hours.']], a: '30 hours', w: 'The leak removes what the inlet adds beyond the net.', tr: 'Subtracting times: 1.5 hours.' },
    { t: 'Leak after half-fill', q: 'A pipe can fill a tank in 6 hours. After 3 hours a leak that empties a full tank in 30 hours appears. Find the total time to fill the tank.', g: ['Inlet 6 h', 'Leak 30 h after 3 h'], c: 'Two phases.', s: [['Phase 1', '3 hours fill 1/2.'], ['Net rate', '1/6 − 1/30 = 2/15.'], ['Phase 2', '(1/2) ÷ (2/15) = 3.75 hours.']], a: '6.75 hours', w: 'The leak slows only the second half.', tr: 'Applying the leak from the start.' },
    { t: 'Capacity in litres', q: 'An inlet delivers 12 litres per minute and a leak loses 2 litres per minute. How long does it take to fill a 600-litre tank?', g: ['12 L/min', '−2 L/min'], c: 'Net litres per minute.', s: [['Net', '12 − 2 = 10 L/min.'], ['Time', '600 ÷ 10 = 60 minutes.']], a: '60 minutes', w: 'Rates in litres add like fractions.', tr: 'Ignoring the leak.' }
  ],
  short: { title: 'Rate table by phase', trad: 'Recompute from scratch for every phase.', fast: 'List the pipes in each phase with their rates, find the net rate, and add the fraction filled in each phase.', rules: ['Outlets are negative.', 'Phases add.', 'Leak = inlet − net.', 'Check fractions sum to 1.'] },
  mist: [['Applying the leak to the whole time', 'Ignoring when it starts.', 'Split into phases.'], ['Adding times', 'Using time differences.', 'Use rates.'], ['Forgetting the sign of an outlet', 'Adding an outlet.', 'Outlets are negative.']],
  tips: { sec: 90, elim: 'With a leak, the time must exceed the leak-free time.', adv: 'Use the LCM capacity to avoid fractions.', ins: 'Treat phases like work-and-time phases.' },
  rev: ['Leak = inlet − net.', 'Phases add.', 'Alternate hours cycle.', 'Litres per minute.', 'Fractions sum to 1.'],
  qf: ['Leak = 1/a − 1/b'],
  take: ['Signs.', 'Phases.', 'Rates not times.', 'Check totals.'],
  self: ['Can I find a leak rate?', 'Can I do a two-phase fill?', 'Can I convert to litres?']
});
const q8 = [
  easy('A pipe fills a tank in 6 hours; with a leak it takes 7.5 hours. The leak empties a full tank in (hours)', 30, [15, 25, 45], 'Leak = 1/6 − 1/7.5 = 1/30.'),
  easy('An inlet delivers 12 litres per minute and a leak loses 2 litres per minute. A 600-litre tank fills in (minutes)', 60, [50, 55, 75], 'Net = 10 L/min, so 600 ÷ 10 = 60.'),
  easy('A leak empties a full tank in 20 hours. In 5 hours it empties what fraction of the tank?', '1/4', ['1/5', '1/3', '1/2'], '5/20 = 1/4.'),
  easy('A pipe fills a tank in 8 hours. The tank is half full. The time to fill the rest is (hours)', 4, [2, 3, 8], 'Half the tank takes half the time: 4.'),
  easy('An inlet fills a tank in 10 hours and an outlet empties it in 15 hours. With both open it fills in (hours)', 30, [20, 25, 5], '1/10 − 1/15 = 1/30.'),
  easy('A tank holds 240 litres. A tap delivers 20 litres per minute. It fills in (minutes)', 12, [10, 14, 24], '240 ÷ 20 = 12.'),

  medium('A pipe fills a tank in 6 hours. After 3 hours a leak that empties a full tank in 30 hours appears. The total time to fill the tank is (hours)', 6.75, [6.5, 7, 7.5], 'Half the tank in 3 h. The rest at 2/15 per hour takes 3.75 h. Total 6.75.'),
  medium('A tank is filled by a pipe in 4 hours but takes 5 hours because of a leak. The leak empties the full tank in (hours)', 20, [9, 16, 25], '1/4 − 1/5 = 1/20.'),
  medium('Pipe A fills a tank in 12 hours and a leak empties it in 20 hours. Both are open. The tank fills in (hours)', 30, [24, 32, 36], '1/12 − 1/20 = 1/30.'),
  medium('Two pipes fill a tank in 10 and 15 hours, and a leak empties it in 30 hours. With all three, the tank fills in (hours)', 1 / (1 / 10 + 1 / 15 - 1 / 30), [6, 8, 10], '1/10 + 1/15 − 1/30 = 4/30, so 7.5 hours.'),
  medium('A tank that is half full is emptied by a leak that empties a full tank in 30 hours. The time to empty is (hours)', 15, [10, 20, 30], 'Emptying half a tank takes half of 30 hours: 15 hours.'),
  medium('A pipe fills a tank in 6 hours and another in 8 hours. They are opened alternately for 1 hour each, starting with the first. The tank fills in how many hours? (nearest 0.01)', r(6 + 0.75 * 0 + (1 - 3 * (1 / 6 + 1 / 8)) / (1 / 6)), [6.5, 7, 8], 'Three cycles (6 h) fill 21/24. 3/24 remains and the first pipe (4/24 per hour) takes 0.75 h: 6.75 hours.'),
  medium('A cistern has a tap that fills it in 4 hours and a leak that empties it in 12 hours. After 2 hours the leak is repaired. The total time to fill the cistern is (hours)', r(2 + (1 - 2 * (1 / 4 - 1 / 12)) / (1 / 4)), [3.5, 4, 4.5], 'In 2 hours the net rate 1/6 fills 1/3. The remaining 2/3 at 1/4 per hour takes 8/3 hours. Total = 2 + 2.67 = 4.67.'),
  medium('Pipe A fills a tank in 20 hours and pipe B empties it in 30 hours. A is opened for 10 hours alone, then B is also opened. Time to fill the rest after B opens is (hours)', 0.5 / (1 / 20 - 1 / 30), [15, 20, 30], 'A fills half in 10 h. Net rate 1/60. The other half takes 30 hours.'),

  placement('A tank can be filled in 9 hours by pipe A and emptied in 12 hours by pipe B. Starting empty, both are opened. The time to fill the tank is (hours)', 36, [24, 30, 48], '1/9 − 1/12 = 1/36.'),
  placement('A tap fills a tank in 5 hours. After 1 hour a leak develops that would empty a full tank in 20 hours. The total time to fill the tank is (hours)', r(1 + (1 - 1 / 5) / (1 / 5 - 1 / 20)), [5, 6, 7], '1 hour fills 1/5. The net rate is 3/20, so 4/5 takes (4/5) ÷ (3/20) = 16/3 h. Total = 1 + 5.33 = 6.33.'),
  placement('Three pipes fill a tank in 6, 8 and 12 hours. They work in turn for 1 hour each, starting with the 6-hour pipe. The time to fill the tank (nearest 0.1 hour) is (hours)', 7.7, [7, 8, 8.5], 'A cycle fills 9/24. Two cycles (6 h) fill 18/24 and the 7th hour adds 4/24, giving 22/24. The 8-hour pipe needs 2/24 ÷ 3/24 = 0.67 h more: 7.67 ≈ 7.7 hours.'),
  placement('A tap fills a bathtub at 15 litres per minute and the drain empties it at 5 litres per minute. A 200-litre tub takes (minutes)', 20, [10, 13.3, 40], 'Net = 10 L/min, so 200 ÷ 10 = 20.'),
  placement('A leak empties a full tank in 24 hours. A tap alone fills it in 8 hours. With the leak, the tank fills in (hours)', 12, [10, 14, 16], '1/8 − 1/24 = 1/12.'),
  placement('Two taps fill a tank in 12 and 16 hours. A third tap empties it in 24 hours. If all three are open, a half-full tank is filled in (hours)', 0.5 / (1 / 12 + 1 / 16 - 1 / 24), [3, 3.6, 4.5], 'Net = 4/48 + 3/48 − 2/48 = 5/48. Half a tank takes (1/2) ÷ (5/48) = 4.8 hours.')
];
build(ch8, q8);
