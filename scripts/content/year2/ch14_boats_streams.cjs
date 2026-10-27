const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-boats-streams', year: 2, category: 'Advanced Quantitative Aptitude', num: 14, difficulty: 'Intermediate',
  title: 'Boats and Streams',
  tagline: 'Year 2 — Downstream, upstream, still-water speed and stream speed',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/aptitude/boats-and-streams/',
  overview: 'When a boat moves in a river, the water current helps or opposes it. Moving with the current (downstream) the effective speed is the boat\'s speed in still water plus the speed of the stream. Moving against the current (upstream) it is the boat\'s speed minus the stream speed. The whole chapter follows from these two sentences and the basic speed-time-distance relation.',
  placement: 'Boats and streams questions are commonly asked in company aptitude rounds. They look different from trains but are the same relative-speed idea applied to water.',
  realWorld: 'Ferry schedules, river cruises and swimming across a current all depend on speeds with and against the stream.',
  objectives: [
    'Compute downstream and upstream speeds',
    'Find the boat\'s speed and the stream\'s speed from the two',
    'Solve round-trip problems',
    'Solve problems involving ratios of speeds and times',
    'Compute average speed for a round trip in a stream'
  ],
  prereq: ['Time, Speed and Distance', 'Relative Speed'],
  refresher: 'D = S × T. Round trip with the same one-way distance: total time = D/downstream + D/upstream.',
  defs: [
    'Speed in still water (b): speed of the boat without any current.',
    'Speed of the stream (s): speed of the water current.',
    'Downstream speed = b + s. Upstream speed = b − s.',
    'Boat speed b = (downstream + upstream)/2. Stream speed s = (downstream − upstream)/2.',
    'Average speed for a round trip = 2uv/(u + v) with u and v the downstream and upstream speeds.'
  ],
  intuition: 'The stream is like a moving walkway. With it, you get a free boost; against it, you lose speed. The boat\'s own speed is the midpoint between its downstream and upstream speeds, and the stream is half the gap between them.',
  mental: 'Always find the two effective speeds first. From them the boat speed and stream speed follow. Then each part of the journey is a simple distance ÷ speed.',
  formulas: [
    ['Effective speeds', 'Downstream u = b + s;  Upstream v = b − s', 'Directions matter.', 'Any boat problem.', 'b = 10, s = 2 → 12 and 8'],
    ['Boat and stream speeds', 'b = (u + v)/2;  s = (u − v)/2', 'Invert the effective speeds.', 'When u and v are known.', '15 and 9 → b = 12, s = 3'],
    ['Round trip time', 'T = D/u + D/v', 'Same one-way distance.', 'To and fro.', '40/20 + 40/10 = 6 h'],
    ['Average speed (round trip)', '2uv/(u + v)', 'Not equal to b.', 'Round-trip speed.', '2 × 15 × 5/20 = 7.5'],
    ['Ratio form', 'If u : v = p : q then b = (p + q)/(p − q) × s ÷ ... or b : s = (p + q) : (p − q)', 'Convert ratio to speeds.', 'Ratio questions.', 'u : v = 3 : 2 → b : s = 5 : 1']
  ],
  narrative: [
    'Define b and s. Downstream is b + s and upstream is b − s. If a boat goes 12 km/h downstream and 8 km/h upstream, then b = 10 km/h and s = 2 km/h.',
    'For time and distance, use the right speed for each leg. A boat of speed 8 km/h in a stream of 2 km/h covers 30 km upstream in 30 ÷ 6 = 5 hours.',
    'For a round trip with the same one-way distance D, total time = D/(b + s) + D/(b − s). With b = 15 and s = 5 and D = 40: 40/20 + 40/10 = 6 hours.',
    'To find the stream speed from time data, form an equation in s. With b = 12 and 36 km each way in 8 hours: 36/(12 + s) + 36/(12 − s) = 8, so 36 × 24/(144 − s²) = 8, giving s² = 36 and s = 6.',
    'For ratio problems: if the downstream and upstream speeds are in the ratio 3 : 2, write them as 3x and 2x. Then b = 2.5x and s = 0.5x. If b = 10, then x = 4 and s = 2.'
  ],
  deep: [
    ['Why the average round trip speed is lower than b', 'You spend more time going against the stream (the slow leg), so the average speed is the harmonic mean of the two speeds, which is less than b.'],
    ['Stream speed cannot exceed boat speed', 'If s ≥ b, the boat cannot go upstream. In a problem, b − s must be positive.']
  ],
  variations: [
    ['Effective speeds', 'Add or subtract.', 'b = 10, s = 2'],
    ['Find b and s', 'From u and v.', 'u = 15, v = 9'],
    ['Round trip', 'Time.', '40 km each way'],
    ['Ratio problems', 'u : v given.', 'u : v = 3 : 2'],
    ['Equation for s', 'From total time.', '36 km each way in 8 h']
  ],
  examples: [
    {
      title: 'Boat and stream from two speeds',
      q: 'A boat goes 15 km/h downstream and 9 km/h upstream. Find the speed of the boat in still water and the speed of the stream.',
      given: ['u = 15', 'v = 9'],
      concept: 'b = (u + v)/2 and s = (u − v)/2.',
      steps: [['Boat', '(15 + 9)/2 = 12 km/h.'], ['Stream', '(15 − 9)/2 = 3 km/h.']],
      ans: 'b = 12 km/h, s = 3 km/h', why: 'Downstream adds the stream and upstream subtracts it.', trap: 'Swapping the two.'
    },
    {
      title: 'Round trip time',
      q: 'A boat\'s speed in still water is 15 km/h and the stream flows at 5 km/h. How long does it take to go 40 km downstream and return?',
      given: ['b = 15', 's = 5', 'D = 40 km each way'],
      concept: 'T = D/u + D/v.',
      steps: [['Speeds', 'Downstream 20, upstream 10 km/h.'], ['Times', '40/20 = 2 h and 40/10 = 4 h.'], ['Total', '6 hours.']],
      ans: '6 hours', why: 'The return leg is twice as slow.', trap: 'Using 15 km/h both ways.'
    },
    {
      title: 'Find the stream speed from total time',
      q: 'A boat\'s speed in still water is 12 km/h. It goes 36 km downstream and returns in a total of 8 hours. Find the speed of the stream.',
      given: ['b = 12', '36 km each way', 'Total time 8 h'],
      concept: 'Form an equation for s.',
      steps: [['Equation', '36/(12 + s) + 36/(12 − s) = 8.'], ['Simplify', '36 × 24 / (144 − s²) = 8, so 144 − s² = 108.'], ['Solve', 's² = 36, s = 6 km/h.']],
      ans: '6 km/h', why: 'Check: 36/18 + 36/6 = 2 + 6 = 8.', trap: 'Using b = 12 for both directions.'
    }
  ],
  shortcut: {
    title: 'Mid-point and half-gap',
    trad: 'Solve two equations for b and s.',
    fast: 'Boat speed is the average of downstream and upstream; stream speed is half the difference.',
    rules: ['u = b + s; v = b − s.', 'b = (u + v)/2; s = (u − v)/2.', 'Round trip average = 2uv/(u + v).', 'Check b > s.']
  },
  mistakes: [
    ['Adding when going upstream', 'Confusing directions.', 'Upstream is against the current.'],
    ['Averaging b for round trip speed', 'Assuming average = b.', 'Use harmonic mean.'],
    ['Mixing units', 'Minutes and hours.', 'Convert.'],
    ['Ignoring that s < b', 'Getting a negative upstream speed.', 'Check the numbers.']
  ],
  tips: { sec: 60, elim: 'Downstream speed must exceed upstream; the boat speed lies between them.', advice: 'Always compute u and v first.', insight: 'Ratio questions convert quickly into b : s ratios.' },
  revision: ['u = b + s, v = b − s.', 'b = (u + v)/2.', 's = (u − v)/2.', 'T = D/u + D/v.', 'Average = 2uv/(u + v).'],
  quickFormulas: ['b = (u+v)/2', 's = (u−v)/2'],
  takeaways: ['Two effective speeds.', 'Mid-point and half-gap.', 'Use correct leg speeds.', 'Check reasonableness.'],
  selfCheck: ['Can I find b and s from u and v?', 'Can I compute a round trip time?', 'Can I solve a ratio-based problem?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Boats and Streams topic area; examples are original.']]
};

const quiz = [
  easy('A boat has a speed of 10 km/h in still water and the stream flows at 2 km/h. Its downstream speed is', 12, [8, 10, 14], '10 + 2 = 12 km/h.'),
  easy('A boat has a speed of 10 km/h in still water and the stream flows at 2 km/h. Its upstream speed is', 8, [12, 10, 6], '10 − 2 = 8 km/h.'),
  easy('A boat goes 15 km/h downstream and 9 km/h upstream. Its speed in still water is', 12, [3, 6, 24], '(15 + 9)/2 = 12 km/h.'),
  easy('A boat goes 15 km/h downstream and 9 km/h upstream. The speed of the stream is', 3, [6, 12, 4.5], '(15 − 9)/2 = 3 km/h.'),
  easy('A boat goes 36 km downstream at 12 km/h. The time taken is', 3, [2, 4, 6], '36 ÷ 12 = 3 hours.'),
  easy('A boat with speed 8 km/h in still water goes 30 km upstream in a stream of 2 km/h. The time taken is', 5, [3, 4, 6], 'Upstream speed = 6 km/h. Time = 30 ÷ 6 = 5 hours.'),

  medium('A boat goes 24 km upstream in 6 hours and 24 km downstream in 4 hours. The speed of the stream is', 1, [0.5, 2, 5], 'Upstream 4 km/h, downstream 6 km/h. Stream = (6 − 4)/2 = 1 km/h.'),
  medium('A boat\'s speed in still water is 15 km/h and the stream is 5 km/h. It goes 40 km downstream and returns. The total time is', 6, [4, 5, 8], '40/20 + 40/10 = 2 + 4 = 6 hours.'),
  medium('A boat\'s speed in still water is 12 km/h. It goes 36 km downstream and returns in 8 hours in all. The speed of the stream is', 6, [3, 4, 5], '36/(12 + s) + 36/(12 − s) = 8 gives 864/(144 − s²) = 8, so s² = 36 and s = 6.'),
  medium('A boat goes 18 km downstream in 1.5 hours and the same distance upstream in 3 hours. The stream speed is', 3, [2, 4, 6], 'Downstream 12 km/h, upstream 6 km/h. Stream = (12 − 6)/2 = 3 km/h.'),
  medium('A boat\'s speed in still water is 6 km/h and the stream flows at 2 km/h. It goes to a place and returns in 3 hours. The distance is', 8, [6, 9, 12], 'd/8 + d/4 = 3 gives 3d/8 = 3, so d = 8 km.'),
  medium('The downstream and upstream speeds of a boat are in the ratio 3 : 2 and the boat\'s speed in still water is 10 km/h. The stream speed is', 2, [1, 2.5, 4], 'Let the speeds be 3x and 2x. b = 2.5x = 10 gives x = 4. s = 0.5x = 2 km/h.'),
  medium('A boat goes 30 km downstream in 2.5 hours and returns in 5 hours. The speed of the boat in still water is', 9, [6, 8, 12], 'Downstream 12 km/h, upstream 6 km/h. Boat = (12 + 6)/2 = 9 km/h.'),
  medium('A boat takes twice as long to go a distance upstream as downstream. If the stream is 4 km/h, the speed of the boat in still water is', 12, [8, 10, 16], '(b − 4) = (b + 4)/2 gives b = 12 km/h.'),

  placement('The upstream speed of a boat is 5 km/h and the downstream speed is 15 km/h. The average speed for a round trip over the same distance is', 7.5, [10, 8, 6], '2 × 5 × 15 ÷ 20 = 7.5 km/h.'),
  placement('A man rows to a place 48 km away and back in 14 hours. He rows 4 km downstream in the same time as 3 km upstream. The speed of the stream is', 1, [2, 1.5, 3], 'Downstream : upstream = 4 : 3 = 4k : 3k. 48/4k + 48/3k = 28/k = 14, so k = 2. Speeds 8 and 6, stream = 1 km/h.'),
  placement('A boat\'s speed in still water is 15 km/h and the stream is 3 km/h. It goes 36 km upstream and 36 km downstream. The total time is', 5, [4, 6, 7.5], '36/12 + 36/18 = 3 + 2 = 5 hours.'),
  placement('A boat takes 3 hours to go 30 km downstream and 6 hours to return. The speed of the stream is', 2.5, [2, 3, 5], 'Downstream 10, upstream 5. Stream = (10 − 5)/2 = 2.5 km/h.'),
  placement('A swimmer swims at 5 km/h in still water in a stream of 3 km/h. The ratio of the time to swim 8 km upstream to the time to swim 8 km downstream is', '4 : 1', ['3 : 1', '5 : 2', '8 : 3'], 'Upstream speed 2, downstream 8. Times in the ratio 1/2 : 1/8 = 4 : 1.'),
  placement('A boat covers 5 km upstream in the same time as 8 km downstream. If the stream is 3 km/h, the speed of the boat in still water is', 13, [10, 12, 16], '(b − 3) : (b + 3) = 5 : 8 gives 8b − 24 = 5b + 15, so b = 13 km/h.')
];
build(chapter, quiz);
