const { easy, medium, placement, build } = require('../lib.cjs');
const r2 = x => Math.round(x * 100) / 100;

const chapter = {
  id: 'y2-quant-tsd-fundamentals', year: 2, category: 'Advanced Quantitative Aptitude', num: 11, difficulty: 'Intermediate',
  title: 'Time, Speed and Distance',
  tagline: 'Year 2 — Speed = distance ÷ time, unit conversion, average speed and late/early arrivals',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/time-and-distance/',
  overview: 'Speed is how much distance is covered in a unit of time: speed = distance ÷ time. From this single relation come distance = speed × time and time = distance ÷ speed. The skill lies in handling units (km/h and m/s), average speed over unequal parts, and problems where a change in speed changes the time taken by a given amount.',
  placement: 'Time, speed and distance questions are commonly asked in company aptitude rounds. They are the base for relative speed, trains and boats and streams.',
  realWorld: 'Planning a journey, estimating arrival times and comparing the speeds of different vehicles use the same formula.',
  objectives: [
    'Use S = D/T in all three forms',
    'Convert between km/h and m/s',
    'Compute average speed for equal distances, equal times and unequal parts',
    'Solve problems with a change in speed and a change in time',
    'Use the inverse proportion of speed and time for a fixed distance'
  ],
  prereq: ['Basic Proportion', 'Advanced Averages'],
  refresher: 'For a fixed distance, speed and time are inversely proportional. Time in minutes ÷ 60 gives hours.',
  defs: [
    'Speed = Distance ÷ Time. Units: km/h, m/s.',
    'Conversion: 1 km/h = 5/18 m/s and 1 m/s = 18/5 km/h.',
    'Average speed = Total distance ÷ Total time.',
    'For equal distances at speeds x and y: average = 2xy/(x + y). For equal times: (x + y)/2.',
    'Constant distance: S₁T₁ = S₂T₂.'
  ],
  intuition: 'Speed tells you how many kilometres you get per hour. If you drive faster you take less time for the same distance. For a fixed distance, speed × time is constant, so doubling the speed halves the time.',
  mental: 'For a late/early problem, write two equations: distance ÷ speed₁ and distance ÷ speed₂ differ by the total time difference. Solve for distance.',
  formulas: [
    ['Basic relations', 'D = S × T;  S = D/T;  T = D/S', 'Keep units consistent.', 'Any direct question.', '60 km/h × 3 h = 180 km'],
    ['Unit conversion', 'km/h × 5/18 = m/s;  m/s × 18/5 = km/h', '1 m/s = 3.6 km/h.', 'Trains and short distances.', '72 km/h = 20 m/s'],
    ['Average speed (equal distances)', '2xy/(x + y)', 'Half the distance at each speed.', 'Go and return.', '30 and 20 → 24 km/h'],
    ['Average speed (general)', 'Total D ÷ Total T', 'Always valid.', 'Unequal parts.', '(1/3)(1/20 + 1/30 + 1/60) = 1/30 → 30 km/h'],
    ['Late and early', 'D/S₁ − D/S₂ = time difference', 'Two speeds, two arrival times.', 'Late/early arrival.', 'D/40 − D/60 = 1/2 → D = 60 km']
  ],
  narrative: [
    'Always keep units consistent. If speed is in km/h, distance must be in km and time in hours. To change km/h to m/s multiply by 5/18; for the reverse multiply by 18/5. So 72 km/h = 72 × 5/18 = 20 m/s.',
    'Average speed is total distance over total time, never the simple average of the speeds unless the times are equal. For equal distances, use 2xy/(x + y): 30 km/h and 20 km/h give 24 km/h.',
    'For unequal parts, compute the time of each part. If 1/3 of the journey is at 20 km/h, 1/3 at 30 km/h and 1/3 at 60 km/h, the time per unit distance is (1/3)(1/20 + 1/30 + 1/60) = 1/30, so the average speed is 30 km/h.',
    'In late/early problems, write D/S₁ − D/S₂ equal to the total time difference. A train 15 minutes late at 40 km/h and 15 minutes early at 60 km/h: D/40 − D/60 = 30/60 gives D = 60 km.',
    'If a speed change gives a time change, use the ratio method. Increasing speed by 20% makes the time 1/1.2 of before, so the saved time is 1/6 of the original; if that is 20 minutes, the usual time is 120 minutes.'
  ],
  deep: [
    ['Why the average is harmonic', 'Equal distances at two speeds take different times. The slower speed is used longer, so it weighs more, and the average is less than the simple mean.'],
    ['Speed ratio and time ratio', 'If speeds are in the ratio a : b, the times for the same distance are in the ratio b : a. A 3 : 4 speed ratio gives a 4 : 3 time ratio.']
  ],
  variations: [
    ['Direct', 'Find S, D or T.', '60 km/h for 3 h'],
    ['Unit conversion', 'km/h ↔ m/s.', '72 km/h'],
    ['Average speed', 'Equal or unequal parts.', '30 km/h and 20 km/h'],
    ['Late and early', 'Two speeds.', '15 min late, 15 min early'],
    ['Speed change', 'Time change.', 'Speed up by 20%']
  ],
  examples: [
    {
      title: 'Average speed',
      q: 'A man travels half the distance of a 120 km journey at 30 km/h and the other half at 20 km/h. Find his average speed.',
      given: ['120 km', 'First 60 km at 30 km/h', 'Next 60 km at 20 km/h'],
      concept: 'Total distance ÷ total time.',
      steps: [['Times', '60/30 = 2 h and 60/20 = 3 h.'], ['Total time', '5 h.'], ['Average', '120 ÷ 5 = 24 km/h.']],
      ans: '24 km/h', why: 'More time is spent at the slower speed.', trap: 'Using (30 + 20)/2 = 25.'
    },
    {
      title: 'Late and early',
      q: 'A train would reach 15 minutes late at 40 km/h and 15 minutes early at 60 km/h. Find the distance.',
      given: ['40 km/h → 15 min late', '60 km/h → 15 min early'],
      concept: 'D/S₁ − D/S₂ = difference of arrival times.',
      steps: [['Time difference', '30 minutes = 1/2 h.'], ['Equation', 'D/40 − D/60 = 1/2.'], ['Solve', 'D(3 − 2)/120 = 1/2, so D = 60 km.']],
      ans: '60 km', why: 'The two arrival times are 30 minutes apart.', trap: 'Using 15 minutes as the difference.'
    },
    {
      title: 'Speed change',
      q: 'If a man increases his speed by 20%, he saves 20 minutes on a journey. Find the usual time.',
      given: ['Speed × 1.2', 'Time saved 20 min'],
      concept: 'Time ∝ 1/speed.',
      steps: [['New time', 'T/1.2 = (5/6)T.'], ['Saved', 'T − (5/6)T = T/6 = 20.'], ['Solve', 'T = 120 minutes.']],
      ans: '120 minutes', why: 'A 20% faster speed saves 1/6 of the time.', trap: 'Saying 20 minutes saved is 20% of the time.'
    }
  ],
  shortcut: {
    title: 'Inverse proportion shortcut',
    trad: 'Set up equations for every problem.',
    fast: 'For a fixed distance, speed ratio a : b means time ratio b : a. Speed rises by p/q makes time fall by p/(p + q) of the old time.',
    rules: ['km/h × 5/18 = m/s.', 'Average speed = total D ÷ total T.', 'Equal distances: 2xy/(x+y).', 'Late/early: difference of times.']
  },
  mistakes: [
    ['Inconsistent units', 'Mixing minutes and hours.', 'Convert first.'],
    ['Simple mean of speeds', 'Averaging for equal distances.', 'Use the harmonic formula.'],
    ['Wrong sign in late/early', 'Subtracting arrival times in the wrong order.', 'Total difference is the sum of late and early.'],
    ['Percentage of time vs speed', 'Taking the percent change of time equal to speed.', 'They are inversely related.']
  ],
  tips: { sec: 70, elim: 'Average speed for equal distances must lie between the two speeds, closer to the smaller one.', advice: 'Memorise 18/5 and 5/18.', insight: 'This is the foundation for trains and boats.' },
  revision: ['D = S × T.', 'km/h × 5/18 = m/s.', 'Average speed = total D/total T.', '2xy/(x+y).', 'Late/early equation.'],
  quickFormulas: ['S = D/T', '2xy/(x+y)'],
  takeaways: ['Units first.', 'Total distance over total time.', 'Inverse proportion.', 'Check against the speeds.'],
  selfCheck: ['Can I convert 54 km/h to m/s?', 'Can I compute average speed for unequal parts?', 'Can I solve a late/early problem?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Time and Distance topic area; examples are original.']]
};

const quiz = [
  easy('A car travels at 60 km/h for 3 hours. The distance covered is', 180, [120, 150, 200], '60 × 3 = 180 km.'),
  easy('72 km/h in metres per second is', 20, [18, 22, 25], '72 × 5/18 = 20 m/s.'),
  easy('A distance of 150 km is covered at 50 km/h. The time taken is', 3, [2, 4, 5], '150 ÷ 50 = 3 hours.'),
  easy('15 m/s in kilometres per hour is', 54, [45, 50, 60], '15 × 18/5 = 54 km/h.'),
  easy('A man walks at 6 km/h for 45 minutes. The distance covered is', 4.5, [4, 5, 6], '45 min = 0.75 h. Distance = 6 × 0.75 = 4.5 km.'),
  easy('A car covers 240 km in 4 hours. Its speed is', 60, [55, 65, 80], '240 ÷ 4 = 60 km/h.'),

  medium('A man travels the first half of a 120 km journey at 30 km/h and the second half at 20 km/h. His average speed is', 24, [25, 22, 26], 'Times: 60/30 = 2 h and 60/20 = 3 h. Total 5 h. Speed = 120 ÷ 5 = 24 km/h.'),
  medium('Walking at 5/6 of his usual speed, a man takes 12 minutes more. His usual time is', 60, [48, 50, 72], 'T × 6/5 = T + 12 gives T/5 = 12, so T = 60 minutes.'),
  medium('A train would be 15 minutes late at 40 km/h and 15 minutes early at 60 km/h. The distance is', 60, [30, 45, 90], 'D/40 − D/60 = 1/2 gives D/120 = 1/2, so D = 60 km.'),
  medium('If a man walks at 14 km/h instead of 10 km/h, he covers 20 km more in the same time. The actual distance is', 50, [40, 60, 70], 'd/10 = (d + 20)/14 gives 14d = 10d + 200, so d = 50 km.'),
  medium('The speeds of two cars are in the ratio 3 : 4. The slower takes 20 minutes more than the faster for the same distance. The slower takes', 80, [60, 70, 90], 'Times are in the ratio 4 : 3. One part = 20 minutes, so the slower takes 80 minutes.'),
  medium('A man covers a distance in 8 hours. If his speed were 2 km/h more, he would take 6 hours. The distance is', 48, [40, 50, 60], '8s = 6(s + 2) gives s = 6. Distance = 8 × 6 = 48 km.'),
  medium('25 m/s in kilometres per hour is', 90, [75, 80, 100], '25 × 18/5 = 90 km/h.'),
  medium('A car covers the first 30 km at 15 km/h and the next 30 km at 30 km/h. The average speed is', 20, [22.5, 25, 18], 'Times: 2 h and 1 h. Total 3 h for 60 km. Speed = 20 km/h.'),

  placement('A journey is covered in three equal parts at 20, 30 and 60 km/h. The average speed is', 30, [36.67, 33, 40], 'Time per unit distance = (1/3)(1/20 + 1/30 + 1/60) = (1/3)(6/60) = 1/30. So 30 km/h.'),
  placement('If a man increases his speed by 20%, he saves 20 minutes on a journey. His usual time is', 120, [100, 110, 150], 'New time = T/1.2. T − T/1.2 = T/6 = 20, so T = 120 minutes.'),
  placement('A boy reaches school 10 minutes late at 4 km/h and 10 minutes early at 6 km/h. The distance to school is', 4, [3, 5, 6], 'D/4 − D/6 = 20/60 = 1/3 gives D/12 = 1/3, so D = 4 km.'),
  placement('A car runs at 60 km/h without stoppages and 50 km/h including stoppages. The stoppage per hour is', 10, [8, 12, 15], 'In 1 hour including stops it covers 50 km, which takes 50/60 h of running. Stoppage = 1 − 5/6 = 1/6 h = 10 minutes.'),
  placement('A man travels 300 km by train at 60 km/h and 200 km by bus at 40 km/h. His average speed is', 50, [48, 52, 45], 'Times: 5 h and 5 h. Total 10 h for 500 km. Average = 50 km/h.'),
  placement('A starts from X at 5 km/h and B at 6 km/h. B reaches Y 1 hour before A. The distance XY is', 30, [25, 36, 40], 'D/5 − D/6 = 1 gives D/30 = 1, so D = 30 km.')
];
build(chapter, quiz);
