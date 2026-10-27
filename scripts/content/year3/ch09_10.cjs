const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const r = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;
// First time (>0) two runners are together again at the START point: smallest t with v1 t / L and v2 t / L integers.
const atStart = (L, v1, v2) => { for (let t = 1; t < 100000; t++) if ((v1 * t) % L === 0 && (v2 * t) % L === 0) return t; };

// ---------------- Chapter 9 ----------------
const ch9 = C({
  n: 9, id: 'y3-quant-adv-relative-speed', cat: 'quant', title: 'Advanced Relative Speed — Circular Tracks',
  tag: 'Meeting times and meeting points of runners on a circular track',
  url: 'https://www.indiabix.com/aptitude/time-and-distance/',
  over: 'On a straight road two objects meet at most once, but on a circular track runners keep meeting again and again. Two runners moving in the same direction meet when the faster has gained one full lap on the slower; in opposite directions they meet when together they have covered one full lap. The number of different meeting points on the track depends on the speed ratio. This chapter develops meeting time, meeting at the starting point and the number of meeting points.',
  place: 'Circular-track questions are commonly asked in company aptitude rounds as a harder application of relative speed, often with the phrase "meet for the first time at the starting point".',
  real: 'Laps on a running track, planets revolving around a star and two hands of a clock are circular-motion problems.',
  obj: ['Find the first meeting time for runners in the same and opposite directions', 'Find the time to meet at the starting point using lap times', 'Count the number of distinct meeting points', 'Find the distance each runner covers at the first meeting', 'Handle three runners'],
  pre: ['Relative Speed', 'Advanced Number Properties (LCM and HCF)'],
  refresh: 'Relative speed = sum (opposite) or difference (same direction). Lap time = L ÷ speed. LCM gives repeated coincidence.',
  defs: [
    'Lap: one complete round of the track of length L.',
    'First meeting (same direction): L ÷ (v₁ − v₂). First meeting (opposite): L ÷ (v₁ + v₂).',
    'Meeting at the start: the first time both are at the starting point together (LCM of lap times).',
    'Meeting points: the number of different points on the track where meetings happen.',
    'Speed ratio a : b in lowest terms determines the number of meeting points.'
  ],
  intu: 'Each meeting is one lap of relative distance. Meetings happen at equal time gaps; the points where they happen shift along the track, and after a fixed number of meetings they begin to repeat. That fixed number is the count of meeting points.',
  mental: 'First meeting time = L ÷ relative speed. For the start point, find the smallest t with both speeds × t a multiple of L. For meeting points, reduce the speed ratio to lowest terms a : b; the count is a + b (opposite) or |a − b| (same direction).',
  formulas: [
    ['First meeting', 'Same: L/(v₁ − v₂);  Opposite: L/(v₁ + v₂)', 'Relative lap.', 'Meeting time.', '400/(5 − 3) = 200 s'],
    ['Meeting at the start', 't = smallest value with v₁t and v₂t multiples of L', 'LCM of lap times.', 'Start-point meeting.', 'Lap times 50 s and 66.67 s → 200 s'],
    ['Meeting points (opposite)', 'a + b for speed ratio a : b in lowest terms', 'Co-prime ratio.', 'Count of points.', '3 : 2 → 5 points'],
    ['Meeting points (same direction)', '|a − b| for a : b in lowest terms', 'Co-prime ratio.', 'Count of points.', '5 : 3 → 2 points'],
    ['Distance at first meeting', 'd₁ = v₁ × t', 'Each covers speed × time.', 'Distances.', '9 × 25 = 225 m']
  ],
  narr: [
    'First meeting: on a 400 m track, runners at 5 m/s and 3 m/s starting together in the same direction meet after 400 ÷ (5 − 3) = 200 s. If they run in opposite directions they meet after 400 ÷ (5 + 3) = 50 s.',
    'To meet at the starting point, both must complete whole laps at the same time. For speeds 6 and 8 m/s on a 400 m track, 6t and 8t must both be multiples of 400: t = 200 s works (1200 m and 1600 m, that is 3 and 4 laps), and no smaller t does.',
    'Meeting points: for speeds in the lowest-terms ratio a : b, runners moving in opposite directions meet at a + b distinct points, and runners moving in the same direction meet at |a − b| distinct points. Speeds 3 : 2 give 5 points in opposite directions; speeds 5 : 3 give 2 points in the same direction.',
    'Distances at the first meeting: in opposite directions they cover the lap together in the ratio of their speeds. With speeds 7 and 9 on 400 m, they meet after 25 s; the faster has covered 225 m and the slower 175 m.',
    'For three runners, find when each pair meets and take the LCM. Speeds 4, 6 and 10 m/s on 600 m (same direction) give gaps 2 and 4: meeting times 300 s and 150 s, so all three are together after LCM(300, 150) = 300 s.'
  ],
  deep: [['Why the number of meeting points is a + b', 'In the time of one lap of relative distance the runners cover (a + b) parts of the track together; after a + b meetings the pattern returns to the start point.'], ['Lowest terms matter', 'Always reduce the speed ratio first. Speeds 6 and 4 reduce to 3 : 2, giving 5 points, not 10.']],
  vars: [['First meeting time', 'Same or opposite.', '400 m, 5 and 3 m/s'], ['Meeting at the start', 'Lap-time LCM.', '6 and 8 m/s'], ['Number of meeting points', 'a + b or |a − b|.', 'Ratio 3 : 2'], ['Distances at the meeting', 'Speed × time.', '7 and 9 m/s'], ['Three runners', 'LCM of pair times.', '4, 6, 10 m/s']],
  ex: [
    { t: 'First meeting', q: 'Two runners start together on a 400 m circular track at 5 m/s and 3 m/s in the same direction. After how many seconds do they first meet?', g: ['L = 400', 'Same direction'], c: 'Relative speed = difference.', s: [['Relative speed', '5 − 3 = 2 m/s.'], ['Time', '400 ÷ 2 = 200 s.']], a: '200 seconds', w: 'The faster gains one full lap.', tr: 'Using the sum of speeds.' },
    { t: 'Meeting at the start', q: 'Two runners at 6 m/s and 8 m/s run on a 400 m track from the same start. After how many seconds do they next meet at the starting point?', g: ['6 m/s', '8 m/s', 'L = 400'], c: 'Both complete whole laps.', s: [['Lap times', '400/6 = 66.67 s and 400/8 = 50 s.'], ['Whole laps together', 'Need 6t and 8t multiples of 400: t = 200 s.'], ['Check', '6 × 200 = 1200 (3 laps), 8 × 200 = 1600 (4 laps).']], a: '200 seconds', w: 'It is the LCM of the two lap times.', tr: 'Using their first meeting time of 200 s coincidentally; the two ideas differ.' },
    { t: 'Number of meeting points', q: 'Two runners run in opposite directions with speeds in the ratio 3 : 2. At how many different points on the track do they meet?', g: ['Ratio 3 : 2'], c: 'Opposite: a + b.', s: [['Lowest terms', '3 : 2 already.'], ['Count', '3 + 2 = 5.']], a: '5 points', w: 'After 5 meetings the pattern repeats.', tr: 'Using 3 − 2 = 1.' }
  ],
  short: { title: 'L over relative speed', trad: 'Track both runners lap by lap.', fast: 'Meeting time = L ÷ relative speed; start-point time = LCM of lap times; points = a + b or |a − b| in lowest terms.', rules: ['Same direction: difference.', 'Opposite: sum.', 'Reduce the ratio first.', 'Start-point time ≠ first meeting time in general.'] },
  mist: [['Confusing the first meeting with the start-point meeting', 'Assuming they coincide.', 'Compute both separately.'], ['Not reducing the ratio', 'Using 6 : 4 for points.', 'Reduce to 3 : 2.'], ['Wrong operation for direction', 'Adding for same direction.', 'Check the direction.']],
  tips: { sec: 90, elim: 'The time to meet at the start is a multiple of the first-meeting time.', adv: 'Convert lap times to whole numbers before taking the LCM.', ins: 'The same idea gives clock-hand coincidences.' },
  rev: ['Relative lap.', 'LCM for start-point.', 'a + b or |a − b|.', 'Reduce the ratio.', 'Three runners: LCM of pair times.'],
  qf: ['t = L/(v₁ ± v₂)', 'points = a + b | |a − b|'],
  take: ['One lap of relative distance.', 'Reduce first.', 'LCM for repetition.', 'Direction decides the sign.'],
  self: ['Can I find the first meeting time?', 'Can I find the start-point meeting?', 'Can I count the meeting points?']
});
const q9 = [
  easy('Two runners on a 400 m track run at 5 m/s and 3 m/s in the same direction from the same point. They first meet after (seconds)', 400 / (5 - 3), [100, 150, 400], '400 ÷ 2 = 200.'),
  easy('The same two runners (5 m/s and 3 m/s) run in opposite directions. They first meet after (seconds)', 400 / (5 + 3), [40, 80, 100], '400 ÷ 8 = 50.'),
  easy('Two runners at 8 m/s and 12 m/s run in opposite directions on a 600 m track. They first meet after (seconds)', 600 / 20, [25, 40, 50], '600 ÷ 20 = 30.'),
  easy('Two runners at 8 m/s and 12 m/s run in the same direction on a 600 m track. They first meet after (seconds)', 600 / 4, [100, 120, 200], '600 ÷ 4 = 150.'),
  easy('A runner at 5 m/s takes how many seconds for one lap of a 400 m track?', 80, [60, 70, 100], '400 ÷ 5 = 80.'),
  easy('A runner at 4 m/s runs 3 laps of a 200 m track in (seconds)', 600 / 4, [120, 140, 200], '3 × 200 = 600 m; 600 ÷ 4 = 150.'),

  medium('Two runners at 6 m/s and 8 m/s start together from the same point of a 400 m track and run in the same direction. They first meet at the starting point after (seconds)', atStart(400, 6, 8), [100, 150, 400], 'Both must complete whole laps: 6t and 8t multiples of 400 first at t = 200.'),
  medium('Two runners with speeds in the ratio 3 : 2 run in opposite directions. The number of different points at which they meet is', 5, [1, 2, 6], 'a + b = 3 + 2 = 5.'),
  medium('Two runners with speeds in the ratio 5 : 3 run in the same direction. The number of different meeting points is', 2, [3, 5, 8], '|5 − 3| = 2.'),
  medium('Two runners at 7 m/s and 9 m/s run in opposite directions on a 400 m track from the same point. The faster runner has covered at the first meeting (metres)', 9 * (400 / 16), [175, 200, 250], 'They meet after 400 ÷ 16 = 25 s. The faster covers 9 × 25 = 225.'),
  medium('Speeds 6 m/s and 4 m/s (opposite directions) give how many different meeting points on the track?', 5, [2, 6, 10], 'The ratio 6 : 4 reduces to 3 : 2. Points = 5.'),
  medium('Two runners at 4 m/s and 6 m/s run in the same direction on a 600 m track from the same point. They next meet at the starting point after (seconds)', atStart(600, 4, 6), [150, 300, 600], '4t and 6t both multiples of 600: t = 300 s.'),
  medium('A and B run on a 300 m track at 5 m/s and 3 m/s in opposite directions. After 90 s they have met (times)', Math.floor(90 / (300 / 8)), [2, 3, 4], 'They meet every 300/8 = 37.5 s: at 37.5 s and 75 s, so 2 times by 90 s.'),
  medium('A and B run in the same direction on a 400 m track at 8 m/s and 6 m/s. A has lapped B for the first time after (seconds)', 400 / 2, [100, 150, 400], '400 ÷ 2 = 200.'),

  placement('Three runners at 4, 6 and 10 m/s run in the same direction on a 600 m track from the same point. All three are together again after (seconds)', 300, [150, 200, 600], 'Pairs meet every 600/2 = 300 s and 600/4 = 150 s; all three after LCM(300, 150) = 300 s.'),
  placement('Two runners at 3 m/s and 5 m/s run in opposite directions on a 160 m track from the same point. The number of times they meet in 60 seconds is', Math.floor(60 / (160 / 8)), [2, 3, 4], 'They meet every 160/8 = 20 s, so at 20, 40 and 60 s: 3 times.'),
  placement('Two runners at 4 m/s and 5 m/s run in opposite directions on a 360 m track from the same point. The distance of their first meeting point from the start along the first runner\'s path is (metres)', 4 * (360 / 9), [120, 160, 180], 'They meet after 360 ÷ 9 = 40 s. The first runner has covered 160 m.'),
  placement('Two runners start from the same point of a circular track and run in opposite directions at 6 m/s and 4 m/s. They meet for the first time at the start after (seconds). The track is 100 m.', atStart(100, 6, 4), [20, 25, 50], '6t and 4t must both be multiples of 100: t = 50 s.'),
  placement('A track is 120 m. A runs at 3 m/s and B at 5 m/s in the same direction. A is given a head start of 20 m (B starts behind A). B catches up with A for the first time after (seconds)', 20 / 2, [10, 20, 30], 'B gains 2 m/s on A, so it takes 20 ÷ 2 = 10 s to close the 20 m gap.'),
  placement('Two runners on a 500 m track have speeds 5 m/s and 7 m/s, same direction. The number of times they meet in 15 minutes (900 s) is', Math.floor(900 / (500 / 2)), [2, 3, 4], 'They meet every 500/2 = 250 s: at 250, 500 and 750 s, so 3 times.')
];
build(ch9, q9);

// ---------------- Chapter 10 ----------------
const ch10 = C({
  n: 10, id: 'y3-quant-circular-motion-races', cat: 'quant', title: 'Circular Motion and Races',
  tag: 'Races, start and beat, dead heats and time lead on straight and circular courses',
  url: 'https://www.indiabix.com/aptitude/races-and-games/',
  over: 'A race compares the distance covered by competitors in the same time, or the time they take for the same distance. Terms such as "beats by", "gives a start of" and "dead heat" have precise meanings. On a circular course the same ideas combine with laps. The central fact is that in the same time the distances are in the ratio of the speeds.',
  place: 'Race questions are commonly asked in company aptitude rounds, usually with three runners and the phrase "A beats B by x metres and B beats C by y metres".',
  real: 'Athletics events, handicap races and relay timings use these calculations.',
  obj: ['Interpret "beats by", "start" and "dead heat"', 'Compare three runners by chaining ratios', 'Convert distance leads to time leads and back', 'Handle races where a runner is given a start', 'Apply lap ideas to races on circular courses'],
  pre: ['Circular Tracks', 'Time, Speed and Distance'],
  refresh: 'In equal times, distance ∝ speed. In covering equal distance, time ∝ 1/speed.',
  defs: [
    'A beats B by d metres: when A finishes, B is d metres behind.',
    'A beats B by t seconds: B reaches the finish t seconds after A.',
    'A gives B a start of d metres: B begins d metres ahead of A.',
    'Dead heat: both reach the finish at the same time.',
    'Winning margin in time = (distance lead) ÷ (loser\'s speed).'
  ],
  intu: 'A race result is a snapshot at the moment the winner finishes. At that instant the winner has covered the whole distance and the loser has covered the distance minus the margin, so the ratio of speeds is (race distance) : (race distance − margin).',
  mental: 'Write the speed ratio from "when A finishes, B has covered …". For three runners, chain the ratios by making the middle runner equal in both.',
  formulas: [
    ['Speed ratio from a beat', 'A : B = D : (D − d)', 'D is the race distance, d the margin.', 'Two-runner races.', 'A beats B by 100 m in 1000 m → 10 : 9'],
    ['Chained races', 'If A : B = p : q and B : C = r : s then A : C = pr : qs', 'Match the middle runner.', 'Three-runner races.', 'Beats by 10 and 10 in 100 m → A beats C by 19'],
    ['Time margin', 'Time lead = distance lead ÷ loser\'s speed', 'Convert units.', 'Time-beat questions.', '20 m lead at 4 m/s → 5 s'],
    ['Start given', 'B starts d metres ahead; A must cover D, B covers D − d', 'Equal-time condition.', 'Handicap races.', 'Dead heat when D/vA = (D − d)/vB'],
    ['Races on a circle', 'Laps: speed ratio = ratio of laps in the same time', 'Convert lap lead to distance.', 'Circular courses.', 'A laps B: relative speed']
  ],
  narr: [
    'A beats B by 100 m in a 1,000 m race means that when A has run 1,000 m, B has run 900 m. The speeds are in the ratio 1000 : 900 = 10 : 9. If A runs at 10 m/s, B runs at 9 m/s.',
    'To compare three runners, chain the ratios through the middle one. If A beats B by 10 m in 100 m and B beats C by 10 m in 100 m, then A : B = 100 : 90 and B : C = 100 : 90. So A : C = 100 × 100 : 90 × 90 = 10000 : 8100, and when A runs 100 m, C runs 81 m: A beats C by 19 m.',
    'Time leads: if A beats B by 20 m and B runs at 4 m/s, then B needs another 20 ÷ 4 = 5 s to reach the finish, so A beats B by 5 seconds.',
    'Giving a start: if A gives B a start of 20 m in a 200 m race, A runs 200 m while B runs 180 m. They reach together (dead heat) if the speed ratio is 200 : 180 = 10 : 9.',
    'On a circular course, the faster runner "beating" the slower by one lap means he covers one lap more in the same time. If A runs at 8 m/s and B at 6 m/s on a 400 m track, A laps B after 400 ÷ 2 = 200 s.'
  ],
  deep: [['Who wins depends on the distance', 'A start that gives a dead heat in 200 m gives A a win in a longer race, because the faster runner gains more the farther they run.'], ['Combining margins', 'Margins do not add. Chain the speed ratios; 10 m + 10 m in a 100 m race does not make 20 m.']],
  vars: [['Beats by distance', 'Speed ratio.', 'A beats B by 100 m'], ['Three runners', 'Chain ratios.', 'A, B, C'], ['Time margin', 'Distance ÷ speed.', '20 m at 4 m/s'], ['Giving a start', 'Dead heat.', '20 m start in 200 m'], ['Laps', 'Relative speed.', 'A laps B']],
  ex: [
    { t: 'Chained races', q: 'In a 100 m race A beats B by 10 m and B beats C by 10 m. By how many metres does A beat C?', g: ['A : B = 100 : 90', 'B : C = 100 : 90'], c: 'Chain the ratios.', s: [['When A runs 100 m', 'B has run 90 m.'], ['When B runs 90 m', 'C has run 90 × 90/100 = 81 m.'], ['Margin', '100 − 81 = 19 m.']], a: '19 m', w: 'C runs 81% of what A runs.', tr: 'Adding the margins to get 20 m.' },
    { t: 'Time lead', q: 'In a 200 m race A beats B by 20 m. B runs at 4 m/s. By how many seconds does A win?', g: ['Margin 20 m', 'B at 4 m/s'], c: 'Time = distance ÷ speed.', s: [['B\'s remaining distance', '20 m.'], ['Time', '20 ÷ 4 = 5 s.']], a: '5 seconds', w: 'B still has to run 20 m.', tr: 'Dividing by A\'s speed.' },
    { t: 'Start and dead heat', q: 'A can run 200 m while B runs 180 m. In a 200 m race, what start must A give B for a dead heat?', g: ['A : B = 200 : 180'], c: 'Equal-time condition.', s: [['Speed ratio', '10 : 9.'], ['B runs', 'When A runs 200 m, B runs 180 m.'], ['Start', '200 − 180 = 20 m.']], a: '20 m', w: 'B has to cover 20 m less.', tr: 'Giving B a start of 10 m.' }
  ],
  short: { title: 'Ratio from the snapshot', trad: 'Set up equations with times.', fast: 'Write the speed ratio as D : (D − margin) and chain ratios through the middle runner.', rules: ['Speed ratio = distances in equal time.', 'Margins do not add.', 'Time lead = distance ÷ loser\'s speed.', 'Start = distance difference.'] },
  mist: [['Adding margins', 'Adding 10 and 10.', 'Chain the speed ratios.'], ['Dividing by the winner\'s speed', 'Wrong speed for the time lead.', 'Divide by the loser\'s speed.'], ['Reversing the ratio', 'Writing D − d : D.', 'The winner\'s distance is D.']],
  tips: { sec: 70, elim: 'A beats C by more than A beats B when B beats C by a positive margin.', adv: 'Always state "when A finishes, B has run …".', ins: 'Race problems are ratio problems.' },
  rev: ['Snapshot ratio.', 'Chain through the middle.', 'Time lead.', 'Start for a dead heat.', 'Laps and relative speed.'],
  qf: ['A : B = D : (D − d)'],
  take: ['Ratio at the finish.', 'Do not add margins.', 'Loser\'s speed for time.', 'Starts equal distance differences.'],
  self: ['Can I chain three runners?', 'Can I find the time lead?', 'Can I find the start for a dead heat?']
});
const q10 = [
  easy('In a 1,000 m race A beats B by 100 m. The ratio of their speeds A : B is', '10 : 9', ['9 : 10', '11 : 10', '5 : 4'], 'A runs 1000 m while B runs 900 m: 10 : 9.'),
  easy('In a 1,000 m race A beats B by 100 m. If A runs at 10 m/s, B runs at (m/s)', 9, [8, 9.5, 11], 'B runs at 9/10 of A\'s speed: 9.'),
  easy('In a 200 m race A beats B by 20 m. B runs at 4 m/s. A wins by (seconds)', 20 / 4, [4, 8, 10], 'B needs 20 ÷ 4 = 5 s more.'),
  easy('A can run 200 m while B runs 180 m. In a 200 m race, the start A must give B for a dead heat is (metres)', 20, [10, 15, 25], 'B covers 20 m less: 20.'),
  easy('In a 100 m race A beats B by 10 m. When A has run 50 m, B has run (metres)', 45, [40, 44, 48], 'B runs 90% of A\'s distance: 45.'),
  easy('A runs 100 m in 10 s and B in 12.5 s. A beats B in a 100 m race by (metres)', 100 - 100 * 10 / 12.5, [10, 15, 25], 'B runs 8 m/s. In 10 s, B covers 80 m: 20 m behind.'),

  medium('In a 100 m race A beats B by 10 m and B beats C by 10 m. A beats C by (metres)', 19, [18, 20, 21], 'When A runs 100, B runs 90 and C runs 81. A beats C by 19.'),
  medium('In a 200 m race A beats B by 20 m and B beats C by 20 m. A beats C by (metres)', 200 - 200 * 0.9 * 0.9, [36, 38, 40], 'When A runs 200 m, B runs 180 and C runs 162. A beats C by 38.'),
  medium('A can give B a start of 20 m in a 100 m race and C a start of 40 m. The start B can give C in a 100 m race is (metres)', 25, [20, 22.5, 30], 'A : B = 100 : 80 and A : C = 100 : 60. B : C = 80 : 60 = 4 : 3. B gives C 100 − 75 = 25 m.'),
  medium('A runs twice as fast as B. In a 400 m race, A gives B a start of (metres) so that the race ends in a dead heat', 200, [100, 150, 300], 'B must cover half of A\'s distance: 200 m, so a start of 200 m.'),
  medium('A and B run on a 400 m track at 8 m/s and 6 m/s in the same direction. A laps B for the first time after (seconds)', 200, [100, 150, 400], 'Relative speed 2 m/s over a 400 m lap: 200 s.'),
  medium('A runs 4/3 as fast as B. In a 600 m race, A beats B by (metres)', 600 - 600 * 0.75, [100, 120, 150], 'B runs 3/4 of A\'s distance: 450 m. A wins by 150 m.'),
  medium('A beats B by 5 seconds in a 100 m race. If B runs at 5 m/s, A\'s time is (seconds)', 100 / 5 - 5, [10, 12, 15], 'B takes 20 s. A takes 15 s.'),
  medium('A can run 1 km in 3 minutes and B in 3 minutes 20 seconds. A beats B by (metres) in a 1 km race', 1000 - 1000 * 180 / 200, [50, 100, 150], 'A takes 180 s. B runs at 1000/200 = 5 m/s and covers 900 m in 180 s, so A wins by 100 m.'),

  placement('A beats B by 20 m in a 100 m race and B beats C by 10 m in a 100 m race. A beats C by (metres) in a 100 m race', 28, [26, 30, 32], 'When A runs 100, B runs 80. B runs 80 so C runs 80 × 0.9 = 72. A beats C by 28.'),
  placement('In a km race, A beats B by 100 m, and B beats C by 100 m. In a 1 km race, A beats C by (metres)', 1000 - 1000 * 0.9 * 0.9, [190, 200, 210], 'A : C = 1000 : 810. A beats C by 190 m.'),
  placement('A can give B a start of 10 m in a 100 m race. In a race of 200 m, the start A can give B is (metres)', 20, [10, 15, 25], 'The speed ratio A : B = 100 : 90. In 200 m, B covers 180 m, so the start is 20 m.'),
  placement('Two runners on a 500 m track have speeds 5 m/s and 3 m/s and run in the same direction. The faster laps the slower for the first time after (seconds)', 250, [100, 125, 500], '500 ÷ 2 = 250.'),
  placement('A beats B by 4 seconds in a 400 m race and B\'s speed is 8 m/s. A\'s time over the 400 m is (seconds)', 400 / 8 - 4, [40, 46, 50], 'B takes 50 s. A takes 46 s.'),
  placement('A is 25% faster than B. In a 500 m race A gives B a start of (metres) for a dead heat', 100, [80, 120, 150], 'A : B = 5 : 4. B covers 400 m, so the start is 100 m.')
];
build(ch10, q10);
