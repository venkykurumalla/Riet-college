const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const r = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;

// ---------------- Chapter 11 ----------------
const ch11 = C({
  n: 11, id: 'y3-quant-adv-boats-streams', cat: 'quant', title: 'Upstream/Downstream with Variable Currents',
  tag: 'Stream speed that changes, boats that turn back, drifting objects and average speed in streams',
  over: 'Year 2 boats and streams used a constant stream speed and a single trip. Year 3 adds streams whose speed differs in different stretches, boats that turn back after some time, objects that simply drift with the current, and round trips where the average speed is requested. The tools are the same: downstream speed = b + s, upstream speed = b − s, and relative speed between the boat and a drifting object is the boat\'s speed in still water.',
  place: 'Advanced boats-and-streams questions are commonly asked in company aptitude rounds, typically with a turn-back or a drifting object.',
  real: 'Ferries crossing tidal rivers, rescue boats chasing floating objects and river cruises with different current zones follow these rules.',
  obj: ['Handle journeys across stretches with different stream speeds', 'Solve turn-back problems and the meeting point of boat and drifting object', 'Use the fact that a drifting object moves at the stream speed', 'Compute the average speed of a round trip', 'Find b and s from time data in two directions'],
  pre: ['Boats and Streams', 'Relative Speed'],
  refresh: 'Downstream = b + s. Upstream = b − s. Boat speed in still water b = (downstream + upstream)/2; stream s = (downstream − upstream)/2.',
  defs: [
    'Drifting object: an object with no engine; it moves at the stream speed.',
    'Turn-back problem: a boat travels for some time, turns and returns to a point.',
    'Variable current: different stream speeds in different stretches.',
    'Round-trip average speed: total distance ÷ total time.',
    'Relative speed of boat and drifting object: the boat\'s speed in still water, whichever way the boat goes.'
  ],
  intu: 'Seen from the water, the stream disappears: the boat just moves at its own speed b relative to the water, and a drifting object does not move at all. Many puzzles become simple when you work in the frame of the water.',
  mental: 'For time questions, work in the water frame: the distance between boat and drifting object changes at b per hour, whatever the stream does. For round trips compute each leg separately using the leg\'s own stream speed.',
  formulas: [
    ['Effective speeds', 'Downstream b + s;  upstream b − s', 'Per stretch.', 'Journeys in a stretch.', 'b = 10, s = 2 → 12 and 8'],
    ['Round-trip average', 'Average = 2 uv/(u + v)', 'Same one-way distance.', 'Average speed.', '(12, 8) → 9.6'],
    ['Drifting object', 'Speed = s', 'No engine.', 'Floating objects.', 'Distance = s × time'],
    ['Water frame', 'Relative speed of boat and drifting object = b', 'Independent of s.', 'Chase and turn-back.', 'Boat turns after t hours; meets object after another t hours'],
    ['Two-direction data', 'b = (D/t₁ + D/t₂)/2;  s = (D/t₁ − D/t₂)/2', 'From equal distances.', 'Find b and s.', '24 km down in 2 h, up in 3 h → b 10, s 2']
  ],
  narr: [
    'For a stretch-by-stretch journey, compute each stretch with its own stream speed. A boat with b = 10 km/h crosses 12 km of water flowing at 2 km/h downstream (12 km/h, 1 h) and then 12 km at 4 km/h upstream (6 km/h, 2 h): total 24 km in 3 h, an average speed of 8 km/h.',
    'Round trip average: for equal distances at downstream speed u and upstream speed v, the average is 2uv/(u + v). With u = 12 and v = 8, it is 192/20 = 9.6 km/h, less than the boat\'s speed 10 km/h.',
    'Drifting objects move at the stream speed s. A boat passes a floating log and goes on for t hours upstream, then turns back; in the water frame the boat moves away from the log at speed b for t hours and returns at b for t hours, so it meets the log again after 2t hours of boat time, wherever the stream is.',
    'To find b and s from timings for the same distance D, use b = (D/t₁ + D/t₂)/2 and s = (D/t₁ − D/t₂)/2 with t₁ downstream and t₂ upstream: 24 km in 2 h downstream and 3 h upstream gives 12 and 8, so b = 10 and s = 2.',
    'A man rows downstream for a time and upstream for the same time; his net displacement is (b + s)t − (b − s)t = 2st downstream, a useful shortcut for turn-back problems.'
  ],
  deep: [['Drifting object shortcut', 'If a boat goes upstream for t hours from a drifting object and then returns, it meets the object after 2t hours (regardless of the stream), because both frames share the same current.'], ['Stream faster than boat', 'If s ≥ b, the boat cannot go upstream. Questions will always keep b > s.']],
  vars: [['Stretch-wise journeys', 'Different s.', '12 km then 12 km'], ['Average speed', '2uv/(u + v).', '12 and 8'], ['Turn-back', 'Water frame.', 'Floating log'], ['Timings in two directions', 'Find b, s.', '24 km in 2 h, 3 h'], ['Net displacement', '2st.', 'Equal times each way']],
  ex: [
    { t: 'Boat speed and stream from timings', q: 'A boat takes 2 hours to go 24 km downstream and 3 hours to return. Find the boat\'s speed in still water and the stream speed.', g: ['24 km', '2 h down', '3 h up'], c: 'u = 12, v = 8.', s: [['Speeds', 'Downstream 24/2 = 12; upstream 24/3 = 8.'], ['Boat', '(12 + 8)/2 = 10 km/h.'], ['Stream', '(12 − 8)/2 = 2 km/h.']], a: 'b = 10 km/h, s = 2 km/h', w: 'The boat\'s speed is the mean of the two effective speeds.', tr: 'Using the average speed 9.6 as b.' },
    { t: 'Floating object', q: 'A boat (speed 8 km/h in still water) passes a floating log and travels 2 hours upstream, then turns back. How long after turning does it meet the log again?', g: ['b = 8', '2 h upstream'], c: 'Water frame.', s: [['In the water frame', 'Boat moves away from the log at 8 km/h for 2 h: 16 km.'], ['Return', 'Closing at 8 km/h: 16 ÷ 8 = 2 h.']], a: '2 hours', w: 'The stream speed does not matter.', tr: 'Computing with a stream speed that is not given.' },
    { t: 'Average speed of a round trip', q: 'A boat goes 12 km/h downstream and 8 km/h upstream. What is its average speed for a round trip of equal distances?', g: ['u = 12', 'v = 8'], c: '2uv/(u + v).', s: [['Formula', '2 × 12 × 8/(12 + 8).'], ['Compute', '192/20 = 9.6 km/h.']], a: '9.6 km/h', w: 'More time is spent upstream.', tr: 'Using 10 km/h.' }
  ],
  short: { title: 'Water frame', trad: 'Track each object in the ground frame.', fast: 'Remove the stream: relative to water the boat moves at b and a drifting object is at rest. Use ground speeds only for distances.', rules: ['Drifting object speed = s.', 'Round trip average = 2uv/(u + v).', 'Equal times each way: net 2st downstream.', 'Compute each stretch separately.'] },
  mist: [['Averaging the speeds', 'Taking (12 + 8)/2 for the round trip.', 'Use total distance ÷ total time.'], ['Using ground speed in the water frame', 'Mixing frames.', 'Pick one frame.'], ['Forgetting the object drifts', 'Treating it as fixed.', 'It moves at s.']],
  tips: { sec: 90, elim: 'Round-trip average speed must be less than b.', adv: 'Draw both frames when a drifting object appears.', ins: 'Many puzzles reduce to "the stream does not matter".' },
  rev: ['u = b + s, v = b − s.', 'Average 2uv/(u + v).', 'Drifting object speed s.', 'Water frame.', 'b, s from two timings.'],
  qf: ['2uv/(u + v)'],
  take: ['Choose the frame.', 'Stretch by stretch.', 'Average by totals.', 'Drifting = s.'],
  self: ['Can I find b and s from timings?', 'Can I solve a floating-log problem?', 'Can I compute round-trip average speed?']
});
const q11 = [
  easy('A boat takes 2 hours to go 24 km downstream and 3 hours to return. Its speed in still water is (km/h)', 10, [8, 9.6, 12], 'Downstream 12, upstream 8; b = 10.'),
  easy('For the same boat, the stream speed is (km/h)', 2, [1, 4, 5], '(12 − 8)/2 = 2.'),
  easy('The downstream and upstream speeds are 12 and 8 km/h. The average speed for a round trip is (km/h)', 9.6, [10, 9, 8.5], '2 × 12 × 8 ÷ 20 = 9.6.'),
  easy('A boat with b = 10 km/h goes 12 km downstream in a stream of 2 km/h. The time is (hours)', 1, [0.8, 1.2, 1.5], 'Speed 12 km/h; 12 ÷ 12 = 1 h.'),
  easy('A log drifts in a stream of 3 km/h. In 4 hours it moves (km)', 12, [7, 10, 16], '3 × 4 = 12.'),
  easy('A boat with b = 8 km/h goes 24 km upstream in a stream of 2 km/h. The time is (hours)', 4, [3, 5, 6], 'Speed 6 km/h; 24 ÷ 6 = 4.'),

  medium('A boat (b = 10 km/h) crosses 12 km with a downstream current of 2 km/h and then 12 km with an upstream current of 4 km/h. The total time is (hours)', 12 / 12 + 12 / 6, [2.5, 3, 3.5], 'First stretch 12/12 = 1 h. Second stretch at 10 − 4 = 6 km/h takes 2 h. Total 3 h.'),
  medium('For the previous journey (24 km in 3 hours), the average speed is (km/h)', 8, [6, 9, 10], '24 ÷ 3 = 8.'),
  medium('A boat passes a floating log, goes 2 hours upstream and then turns back. It meets the log after turning back in (hours)', 2, [1, 3, 4], 'In the water frame the boat returns at the same speed it left: 2 hours.'),
  medium('A boat goes 30 km upstream in 6 hours and returns downstream in 3 hours. The stream speed is (km/h)', (30 / 3 - 30 / 6) / 2, [1.5, 2.5, 5], 'Upstream 5, downstream 10; s = 2.5.'),
  medium('The upstream speed of a boat is 6 km/h and the stream speed is 2 km/h. The downstream speed is (km/h)', 10, [8, 9, 12], 'b = 8; downstream = 10.'),
  medium('A man rows for 2 hours downstream and then 2 hours upstream. If b = 6 and s = 2 km/h, his net displacement is (km downstream)', 2 * 2 * 2, [4, 6, 12], '(8 × 2) − (4 × 2) = 8.'),
  medium('A boat covers a distance downstream in 3 hours and the same distance upstream in 6 hours. The ratio of boat speed to stream speed is', '3 : 1', ['2 : 1', '4 : 1', '5 : 2'], 'Speeds ∝ 1/time: u : v = 2 : 1. b = 1.5 and s = 0.5, so b : s = 3 : 1.'),
  medium('A boat goes 10 km/h downstream and 6 km/h upstream. The time to go 40 km upstream and return is (hours)', r(40 / 10 + 40 / 6), [10, 11, 12], '40/6 + 40/10 = 6.67 + 4 = 10.67.'),

  placement('A boat (b = 12 km/h) goes downstream with a stream of 3 km/h for 30 minutes and then turns back. The time it takes to return to its starting point is (minutes)', 50, [30, 40, 60], 'Distance = 15 × 0.5 = 7.5 km. Upstream speed = 9 km/h. Time = 7.5/9 h = 50 minutes.'),
  placement('A boat goes 20 km downstream in 2 hours and 20 km upstream in 5 hours. Its speed in still water is (km/h)', (20 / 2 + 20 / 5) / 2, [6, 8, 10], 'Downstream 10, upstream 4. b = 7.'),
  placement('A person rows to a place and back in 7 hours. He can row 4 km downstream in the time he rows 3 km upstream. If the stream is 1 km/h, the distance to the place is (km)', 24, [16, 20, 30], 'Downstream : upstream = 4 : 3 means (b + 1) : (b − 1) = 4 : 3, so b = 7: speeds 8 and 6. D/8 + D/6 = 7 gives 7D/24 = 7, so D = 24.'),
  placement('The speed of a boat in still water is 15 km/h. It goes 30 km upstream and returns in 4 hours 30 minutes. The stream speed is (km/h)', 5, [3, 4, 6], '30/(15 − s) + 30/(15 + s) = 4.5 gives 900/(225 − s²) = 4.5, so s² = 25 and s = 5.'),
  placement('A boat goes downstream at 15 km/h and upstream at 9 km/h. It takes 8 hours to go to a place and return. The distance is (km)', 45, [30, 40, 60], 'D/15 + D/9 = 8 gives D(3 + 5)/45 = 8, so D = 45.'),
  placement('A river flows at 2 km/h. A boat takes 3 hours to go 18 km upstream. The time to come back downstream is (hours)', 18 / ((18 / 3 + 2) + 2), [1.5, 1.8, 2], 'Upstream speed 6, so b = 8. Downstream speed 10. Time = 18/10 = 1.8.')
];
build(ch11, q11);

// ---------------- Chapter 12 ----------------
const ch12 = C({
  n: 12, id: 'y3-quant-adv-train-problems', cat: 'quant', title: 'Advanced Train Problems — Two Moving Trains',
  tag: 'Trains crossing each other, overtaking, bridges with moving trains and meeting problems',
  over: 'Year 2 train problems used a train and a fixed pole or platform, and two trains crossing. Year 3 adds trains that start at different times, meet and then continue, trains that pass a person who is also walking, trains that leave stations at different times, and problems where the lengths and speeds must be recovered from two crossing times. The relative-speed idea and the rule "distance covered = sum of the lengths" are all you need.',
  place: 'Advanced train problems are commonly asked in company aptitude rounds, typically with two timing facts from which lengths or speeds are found.',
  real: 'Rail scheduling, safe overtaking distances and timetable design use these relations.',
  obj: ['Find lengths and speeds from crossing times', 'Handle trains passing a moving person', 'Solve meeting problems for trains starting at different times', 'Compute the time a train takes to pass a platform while another passes it', 'Use ratios when speeds change'],
  pre: ['Problems on Trains', 'Advanced Relative Speed'],
  refresh: 'km/h × 5/18 = m/s. Opposite directions: relative speed = sum. Same direction: difference. Crossing: distance = sum of lengths.',
  defs: [
    'Crossing: the front of one train meets the front of the other until the rear of the first clears the rear of the second.',
    'Overtaking: the faster train passes the slower in the same direction.',
    'Meeting problem: two trains start from two stations and meet somewhere on the way.',
    'Length from timings: use the same speed to relate two crossing times.',
    'Relative frame: treat one train as stationary and the other as moving at the relative speed.'
  ],
  intu: 'A crossing is complete when the relative distance covered equals the sum of the two lengths. Everything else is relative speed in the right direction.',
  mental: 'Convert speeds to m/s, decide the direction (sum or difference), write distance = sum of lengths, and divide.',
  formulas: [
    ['Opposite directions', 'Time = (L₁ + L₂)/(S₁ + S₂)', 'Sum of speeds.', 'Crossing.', '(120 + 90)/(20 + 15) = 6 s'],
    ['Same direction', 'Time = (L₁ + L₂)/(S₁ − S₂)', 'Difference.', 'Overtaking.', '(150 + 100)/(20 − 15) = 50 s'],
    ['Train and walker', 'Relative speed = train ± walker', 'Same way minus; opposite plus.', 'Passing a man.', 'Train 20 m/s, man 2 m/s → 18'],
    ['Length from two timings', 'L = S × t₁ (pole) and L + P = S × t₂ (platform)', 'Same S.', 'Unknown L or P.', 'L/18 = (L + 90)/27 → 180'],
    ['Meeting trains', 'Time = distance between stations ÷ (S₁ + S₂)', 'Account for late starts.', 'Station problems.', '(1 h late start: subtract the head start)']
  ],
  narr: [
    'For two trains crossing, the relative speed uses the directions. Trains of 120 m and 90 m at 72 and 54 km/h moving opposite cross in (120 + 90) ÷ [(72 + 54) × 5/18] = 210 ÷ 35 = 6 s.',
    'For overtaking, subtract the speeds. A 150 m train at 72 km/h overtakes a 100 m train at 54 km/h in 250 ÷ 5 = 50 s, since 18 km/h = 5 m/s.',
    'Two crossing times give the length. A train crossing a pole in 18 s and a 90 m platform in 27 s has the same speed in both cases: L/18 = (L + 90)/27, so L = 180 m and speed = 10 m/s.',
    'Meeting problems with different start times: a train leaves A at 60 km/h and, one hour later, another leaves B (300 km away) at 40 km/h. After 1 hour the first has covered 60 km. The remaining 240 km closes at 100 km/h in 2.4 h, so they meet 3.4 h after the first started, 204 km from A.',
    'When a train passes a person walking in the same direction, use relative speed. A 100 m train at 54 km/h passes a man walking in the opposite direction at 6 km/h in 100 ÷ (60 × 5/18) = 6 s.'
  ],
  deep: [['After meeting', 'If two trains starting together take t₁ and t₂ hours to reach each other\'s starting points after meeting, then their speeds are in the ratio √t₂ : √t₁.'], ['Equal-length trains', 'If two equal trains of length L cross in time t moving oppositely, the relative speed is 2L/t.']],
  vars: [['Crossing', 'Opposite.', '120 m and 90 m'], ['Overtaking', 'Same direction.', '150 m and 100 m'], ['Lengths from timings', 'Two crossing times.', 'Pole and platform'], ['Meeting with a late start', 'Subtract the head start.', 'One hour later'], ['After-meeting ratio', 'Square roots.', 'Times t₁ and t₂']],
  ex: [
    { t: 'Length from two timings', q: 'A train takes 18 s to pass a pole and 27 s to pass a 90 m platform. Find the length of the train and its speed.', g: ['Pole 18 s', 'Platform 90 m, 27 s'], c: 'Same speed.', s: [['Equation', 'L/18 = (L + 90)/27.'], ['Cross-multiply', '27L = 18L + 1620, so L = 180 m.'], ['Speed', '180/18 = 10 m/s = 36 km/h.']], a: '180 m; 36 km/h', w: 'The extra 9 s cover the 90 m platform.', tr: 'Using the platform length alone.' },
    { t: 'Meeting with a late start', q: 'A train leaves X for Y at 60 km/h. One hour later another leaves Y for X at 40 km/h. XY = 300 km. How far from X do they meet?', g: ['300 km', '60 km/h', '40 km/h, 1 h later'], c: 'Subtract the head start.', s: [['First hour', 'First train covers 60 km; 240 km remain.'], ['Closing', '240 ÷ 100 = 2.4 h.'], ['Distance from X', '60 + 60 × 2.4 = 204 km.']], a: '204 km', w: 'The first train runs 3.4 h in total.', tr: 'Dividing 300 by 100.' },
    { t: 'Overtaking', q: 'A 150 m train at 72 km/h overtakes a 100 m train at 54 km/h on parallel tracks. How long does it take?', g: ['150 m, 72 km/h', '100 m, 54 km/h'], c: 'Difference of speeds.', s: [['Relative speed', '18 km/h = 5 m/s.'], ['Distance', '150 + 100 = 250 m.'], ['Time', '250 ÷ 5 = 50 s.']], a: '50 seconds', w: 'The whole fast train must clear the slow one.', tr: 'Using the sum of speeds.' }
  ],
  short: { title: 'Sum or difference, sum of lengths', trad: 'Draw the positions at each moment.', fast: 'Relative speed in m/s, distance = sum of lengths, time = distance ÷ speed; for lengths use equal-speed equations.', rules: ['km/h × 5/18.', 'Opposite: sum; same: difference.', 'Late start: subtract the head start.', 'Same speed in both timings.'] },
  mist: [['Using a wrong direction rule', 'Adding for overtaking.', 'Difference for the same direction.'], ['Forgetting unit conversion', 'Dividing metres by km/h.', 'Convert first.'], ['Ignoring the late start', 'Using full time for both trains.', 'Subtract the head start.']],
  tips: { sec: 80, elim: 'A crossing time must exceed either train\'s own pole time.', adv: 'Draw two trains and mark the sum of lengths.', ins: 'Timing facts give equations for lengths.' },
  rev: ['m/s conversion.', 'Sum or difference.', 'Sum of lengths.', 'Equal speed for lengths.', 'Head start.'],
  qf: ['t = (L₁ + L₂)/(S₁ ± S₂)'],
  take: ['Relative speed.', 'Sum of lengths.', 'Equal speed equations.', 'Head start.'],
  self: ['Can I find a length from two timings?', 'Can I time an overtaking?', 'Can I solve a meeting problem?']
});
const q12 = [
  easy('Two trains of 120 m and 90 m run in opposite directions at 72 and 54 km/h. They cross in (seconds)', 210 / 35, [4, 7.5, 10], 'Relative speed = 126 km/h = 35 m/s; 210 ÷ 35 = 6.'),
  easy('A 150 m train at 72 km/h overtakes a 100 m train at 54 km/h. The time is (seconds)', 250 / 5, [25, 35, 70], 'Relative speed 5 m/s; 250 ÷ 5 = 50.'),
  easy('A train 180 m long passes a pole in 18 s. Its speed in km/h is', 36, [30, 54, 72], '180 ÷ 18 = 10 m/s = 36 km/h.'),
  easy('A 200 m train at 20 m/s crosses a 300 m bridge in (seconds)', 25, [10, 15, 20], '500 ÷ 20 = 25.'),
  easy('A 100 m train at 54 km/h passes a man walking in the opposite direction at 6 km/h in (seconds)', 6, [5, 7, 8], 'Relative speed 60 km/h = 50/3 m/s; 100 ÷ (50/3) = 6.'),
  easy('Two equal trains of 100 m each cross in 10 s moving oppositely at equal speeds. Each speed is (m/s)', 10, [5, 15, 20], 'Relative speed = 200/10 = 20 m/s, so each is 10.'),

  medium('A train takes 18 s to pass a pole and 27 s to pass a 90 m platform. Its length is (metres)', 180, [135, 150, 270], 'L/18 = (L + 90)/27 gives L = 180.'),
  medium('A train leaves X at 60 km/h. One hour later another leaves Y (300 km away) at 40 km/h towards X. They meet at a distance from X of (km)', 204, [180, 200, 240], '60 km in the first hour; the rest 240 closes at 100 km/h in 2.4 h; first train travels 3.4 h × 60 = 204.'),
  medium('Two trains run at 60 and 90 km/h in the same direction and cross in 30 s. The sum of their lengths is (metres)', 250, [150, 200, 300], 'Relative speed 30 km/h = 25/3 m/s; × 30 = 250.'),
  medium('A 150 m train at 36 km/h takes 40 s to cross a bridge. The bridge is (metres)', 250, [200, 300, 400], '10 × 40 = 400; 400 − 150 = 250.'),
  medium('A train crosses a 120 m platform in 15 s and a 180 m platform in 20 s. Its length is (metres)', 60, [50, 80, 100], 'Speed = 60/5 = 12 m/s; L = 12 × 15 − 120 = 60.'),
  medium('Two trains of lengths 200 m and 300 m start from opposite ends and cross in 10 s. If the first goes at 20 m/s, the second goes at (m/s)', 30, [25, 35, 40], 'Relative speed 50 m/s; second = 30.'),
  medium('A train 100 m long passes a man running in the same direction at 6 km/h in 10 s. The speed of the train is (km/h)', 42, [36, 40, 48], 'Relative speed 10 m/s = 36 km/h; train = 42 km/h.'),
  medium('A train at 54 km/h crosses a platform in 30 s and a man on the platform in 18 s. The length of the platform is (metres)', 180, [150, 200, 270], 'Speed 15 m/s. Train = 270 m; platform = 450 − 270 = 180.'),

  placement('Trains A and B start together from two stations 300 km apart towards each other. After meeting, A takes 4 h and B takes 9 h to reach the opposite stations. The ratio of speeds A : B is', '3 : 2', ['2 : 3', '4 : 9', '9 : 4'], 'Speed ratio = √t_B : √t_A = √9 : √4 = 3 : 2.'),
  placement('A train 300 m long passes a platform in 36 s and a pole in 18 s. The length of the platform is (metres)', 300, [150, 250, 600], 'Speed = 300/18 = 50/3 m/s; in 36 s it covers 600 m; platform = 300.'),
  placement('Two trains of lengths 150 m and 100 m run in opposite directions on parallel tracks. A man in the shorter train notices the longer train pass him in 6 s. The speed of the longer train relative to the man is (m/s)', 150 / 6, [20, 25, 30], '150 ÷ 6 = 25.'),
  placement('A train travelling at 72 km/h passes a 250 m platform in 20 s. Its length is (metres)', 72 * 5 / 18 * 20 - 250, [100, 150, 200], 'Distance = 20 × 20 = 400 m. Length = 400 − 250 = 150.'),
  placement('A goods train leaves a station at 6 a.m. at 40 km/h. An express leaves the same station at 7 a.m. at 60 km/h on the same track. The express catches the goods train at (a.m.)', 9, [8, 10, 11], 'Head start 40 km. Gain 20 km/h: 2 h after 7 a.m., i.e. 9 a.m.'),
  placement('Two trains of equal length take 10 s and 15 s to cross a pole. They cross each other in 12 s running in the opposite directions. The ratio of their speeds is', '3 : 2', ['5 : 4', '4 : 3', '2 : 1'], 'Speeds ∝ 1/time = 1/10 : 1/15 = 3 : 2.')
];
build(ch12, q12);
