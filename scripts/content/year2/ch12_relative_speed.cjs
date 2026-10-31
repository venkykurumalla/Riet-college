const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-relative-speed', year: 2, category: 'Advanced Quantitative Aptitude', num: 12, difficulty: 'Intermediate',
  title: 'Relative Speed',
  tagline: 'Year 2 — Moving towards, away from and after each other, and circular tracks',
  minutes: 45,
  overview: 'Relative speed is the speed of one moving object as seen from another. When two objects move towards each other, their closing speed is the sum of their speeds. When they move in the same direction, the gap changes at the difference of their speeds. This one idea solves meeting, chasing, overtaking and circular-track problems.',
  placement: 'Relative speed questions are commonly asked in company aptitude rounds, and the same concept is needed for trains and boats.',
  realWorld: 'Two cars approaching each other on a highway, a police car chasing a vehicle and two joggers on a circular park track are all relative-speed situations.',
  objectives: [
    'Compute relative speed for opposite and same directions',
    'Find the time to meet or catch up',
    'Solve head-start and chase problems',
    'Solve circular-track problems',
    'Use the inverse relation between speed ratio and time ratio'
  ],
  prereq: ['Time, Speed and Distance'],
  refresher: 'Distance = speed × time. Convert km/h to m/s by × 5/18.',
  defs: [
    'Relative speed (opposite directions): S₁ + S₂.',
    'Relative speed (same direction): |S₁ − S₂|.',
    'Closing speed: rate at which the gap between two objects decreases.',
    'Head start: a distance by which one object is ahead at the start.',
    'Circular track: objects meet when the faster one has gained a full lap on the slower (same direction) or when together they cover a full lap (opposite directions).'
  ],
  intuition: 'Imagine sitting in one of the moving objects. The other object appears to move at the relative speed, and the gap between you changes at that speed. All meeting-time problems reduce to "gap ÷ relative speed".',
  mental: 'Draw a line with the two starting points, mark the direction of motion, decide whether the gap is closing or opening, and use sum or difference of speeds.',
  formulas: [
    ['Opposite directions', 'Relative speed = S₁ + S₂', 'Gap closes (towards) or opens (away).', 'Two objects approaching or separating.', '60 + 40 = 100 km/h'],
    ['Same direction', 'Relative speed = S₁ − S₂', 'Faster minus slower.', 'Chasing or overtaking.', '60 − 40 = 20 km/h'],
    ['Time to meet', 'T = Gap ÷ Relative speed', 'Works for both cases.', 'Meeting and catching up.', '300 ÷ 100 = 3 h'],
    ['Circular track', 'Same direction: T = L ÷ (S₁ − S₂);  Opposite: T = L ÷ (S₁ + S₂)', 'L is the length of the track.', 'Laps and first meeting.', '400 ÷ 2 = 200 s'],
    ['Race: ratio of speeds', 'Distances covered in the same time are in the ratio of speeds', 'Use this for start and beat problems.', 'A beats B by 100 m.', 'A: 1000, B: 900 → 10 : 9']
  ],
  narrative: [
    'For two objects moving towards each other, add the speeds. Cars at 60 and 40 km/h approaching from 300 km apart meet after 300 ÷ 100 = 3 hours. For two objects moving in the same direction, subtract: the faster gains 20 km every hour on the slower.',
    'In a chase with a head start, the gap is the head start and the closing speed is the difference. A thief is 200 m (0.2 km) ahead running at 10 km/h and a policeman runs at 11 km/h: time to catch = 0.2 ÷ 1 = 0.2 h, in which the thief runs 2 km.',
    'For circular tracks, the same-direction meeting occurs when the faster has gained a full lap: time = L ÷ (S₁ − S₂). On a 400 m track at 5 and 7 m/s that is 200 s. In opposite directions the runners meet when they together cover one lap: 360 ÷ 12 = 30 s.',
    'If one vehicle starts later, subtract the distance already covered by the first. A car leaves X at 60 km/h; one hour later a second leaves Y at 40 km/h towards X. The remaining 240 km closes at 100 km/h in 2.4 hours, so they meet 3.4 hours after the first started, 204 km from X.',
    'In a race, the ratio of speeds equals the ratio of distances covered in the same time. If A beats B by 100 m in a 1,000 m race, A covers 1,000 m while B covers 900 m, so the speeds are in the ratio 10 : 9.'
  ],
  deep: [
    ['Meeting point ratio', 'When two objects start together from opposite ends, they meet at distances in the ratio of their speeds. Speeds 3 : 2 on 100 km mean the first covers 60 km.'],
    ['The fly problem', 'A fly flying back and forth between two approaching cyclists covers distance = its speed × the time the cyclists take to meet. You do not need to sum the many trips.']
  ],
  variations: [
    ['Towards or away', 'Add speeds.', 'Cars at 60 and 40 km/h'],
    ['Chase', 'Subtract speeds.', 'Thief and policeman'],
    ['Delayed start', 'Subtract the head start.', 'Car leaves one hour later'],
    ['Circular track', 'Lap logic.', '400 m track'],
    ['Races', 'Speed ratio.', 'A beats B by 100 m']
  ],
  examples: [
    {
      title: 'Towards each other',
      q: 'Two cars start from two towns 300 km apart and travel towards each other at 60 km/h and 40 km/h. When do they meet?',
      given: ['Gap 300 km', 'Speeds 60 and 40 km/h'],
      concept: 'Relative speed = sum.',
      steps: [['Relative speed', '60 + 40 = 100 km/h.'], ['Time', '300 ÷ 100 = 3 hours.']],
      ans: '3 hours', why: 'The gap closes at 100 km every hour.', trap: 'Using the difference.'
    },
    {
      title: 'Chase with a head start',
      q: 'A thief is 200 m ahead of a policeman. The thief runs at 10 km/h and the policeman at 11 km/h. How far does the thief run before being caught?',
      given: ['Gap 0.2 km', 'Speeds 10 and 11'],
      concept: 'Relative speed = difference.',
      steps: [['Closing speed', '11 − 10 = 1 km/h.'], ['Time to catch', '0.2 ÷ 1 = 0.2 h.'], ['Thief\'s distance', '10 × 0.2 = 2 km.']],
      ans: '2 km', why: 'The thief keeps running during the chase.', trap: 'Answering 200 m.'
    },
    {
      title: 'Circular track',
      q: 'Two runners start together on a circular track of 400 m at 5 m/s and 7 m/s in the same direction. After how long do they first meet?',
      given: ['L = 400 m', 'Speeds 5 and 7 m/s'],
      concept: 'The faster gains one lap.',
      steps: [['Relative speed', '7 − 5 = 2 m/s.'], ['Time', '400 ÷ 2 = 200 seconds.']],
      ans: '200 seconds', why: 'The faster runner gains 2 m every second and must gain 400 m.', trap: 'Using the sum.'
    }
  ],
  shortcut: {
    title: 'Sum for towards, difference for chase',
    trad: 'Write distance equations for each object.',
    fast: 'Decide "closing or chasing", compute the relative speed and divide the gap. For races, use speed = distance ratio.',
    rules: ['Opposite: sum. Same: difference.', 'Subtract the head start for delayed starts.', 'Track: gap = lap length.', 'Convert units first.']
  },
  mistakes: [
    ['Using the wrong operation', 'Adding for chase problems.', 'Check the direction.'],
    ['Forgetting the head start', 'Ignoring the first object\'s early travel.', 'Reduce the gap by it.'],
    ['Wrong gap for circular tracks', 'Using the track length in the wrong direction.', 'Same direction: one lap gain; opposite: one lap together.'],
    ['Unit mismatches', 'Mixing m/s and km/h.', 'Convert first.']
  ],
  tips: { sec: 60, elim: 'The meeting time must be less than the time for either object alone to cover the gap.', advice: 'Draw a quick sketch.', insight: 'Trains and boats are applications of this same chapter.' },
  revision: ['Towards: sum.', 'Same direction: difference.', 'T = gap/relative speed.', 'Circular tracks.', 'Race ratios.'],
  quickFormulas: ['S₁ + S₂ or S₁ − S₂', 'T = L/relative speed'],
  takeaways: ['Think relative.', 'Draw the situation.', 'Mind the head start.', 'Check units.'],
  selfCheck: ['Can I find when two approaching cars meet?', 'Can I solve a chase with a head start?', 'Can I do a circular track?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Time and Distance topic area; examples are original.']]
};

const quiz = [
  easy('Two cars start 300 km apart and travel towards each other at 60 km/h and 40 km/h. They meet after', 3, [2, 5, 6], 'Relative speed = 100 km/h. Time = 300 ÷ 100 = 3 hours.'),
  easy('Two cars travel in the same direction at 60 km/h and 40 km/h. The relative speed is', 20, [100, 50, 10], '60 − 40 = 20 km/h.'),
  easy('A runs at 50 km/h behind B who runs at 30 km/h with a head start of 40 km. A catches B after', 2, [1, 4, 5], 'Closing speed = 20 km/h. Time = 40 ÷ 20 = 2 hours.'),
  easy('Two persons 18 km apart walk towards each other at 4 km/h and 5 km/h. They meet after', 2, [3, 4, 1.5], 'Relative speed = 9 km/h. Time = 18 ÷ 9 = 2 hours.'),
  easy('Two cars at 72 km/h and 54 km/h move in opposite directions. Their relative speed in m/s is', 35, [25, 30, 5], '(72 + 54) × 5/18 = 126 × 5/18 = 35 m/s.'),
  easy('Two cars at 72 km/h and 54 km/h move in the same direction. Their relative speed in m/s is', 5, [10, 18, 35], '(72 − 54) × 5/18 = 18 × 5/18 = 5 m/s.'),

  medium('A and B start from the same point in the same direction at 4 km/h and 6 km/h. After how many hours are they 10 km apart?', 5, [2, 4, 10], 'Relative speed = 2 km/h. Time = 10 ÷ 2 = 5 hours.'),
  medium('Two trains start 100 km apart towards each other at 40 km/h and 60 km/h. They meet after', 1, [1.5, 2, 2.5], 'Relative speed = 100 km/h, so 100 ÷ 100 = 1 hour.'),
  medium('A runs at 8 km/h and B at 6 km/h. B has a 10-minute head start. A overtakes B after (in minutes)', 30, [20, 40, 60], 'B is 6 × (10/60) = 1 km ahead. Closing speed = 2 km/h. Time = 1/2 h = 30 minutes.'),
  medium('Two runners start together on a 400 m circular track at 5 m/s and 7 m/s in the same direction. They first meet after (seconds)', 200, [100, 150, 400], 'Relative speed = 2 m/s. Time = 400 ÷ 2 = 200 s.'),
  medium('Two runners start together on a 360 m circular track at 5 m/s and 7 m/s in opposite directions. They first meet after (seconds)', 30, [20, 36, 60], 'Relative speed = 12 m/s. Time = 360 ÷ 12 = 30 s.'),
  medium('Two men start from two places 60 km apart towards each other at 4 km/h and 6 km/h. The distance from the first man\'s start where they meet is', 24, [20, 30, 36], 'Time = 60 ÷ 10 = 6 h. The first man walks 4 × 6 = 24 km.'),
  medium('The speeds of A and B are in the ratio 3 : 2 and they approach each other from two points 100 km apart. A covers up to the meeting point', 60, [50, 40, 66.7], 'They meet at distances in the ratio 3 : 2. A covers 100 × 3/5 = 60 km.'),
  medium('A thief is 200 m ahead of a policeman. The thief runs at 10 km/h and the policeman at 11 km/h. The distance run by the thief before he is caught is (km)', 2, [0.2, 1, 2.2], 'Closing speed = 1 km/h. Time = 0.2 h. Thief runs 10 × 0.2 = 2 km.'),

  placement('Two runners start together on a 400 m circular track at 3 m/s and 5 m/s in the same direction. When they first meet, the faster runner has run (metres)', 1000, [800, 1200, 600], 'Relative speed = 2 m/s. Time = 200 s. The faster runs 5 × 200 = 1000 m.'),
  placement('A car leaves X for Y at 60 km/h. One hour later another car leaves Y for X at 40 km/h. XY = 300 km. They meet at a distance from X of (km)', 204, [180, 200, 240], 'In 1 h the first covers 60 km. Remaining 240 km closes at 100 km/h in 2.4 h. The first car travels 60 × 3.4 = 204 km.'),
  placement('In a 1,000 m race A beats B by 100 m. If A runs at 10 m/s, B runs at (m/s)', 9, [8, 9.5, 10], 'A finishes in 100 s. B covers 900 m in that time: 9 m/s.'),
  placement('In a 100 m race, A beats B by 10 m and B beats C by 10 m. A beats C by (metres)', 19, [20, 18, 21], 'When A runs 100, B runs 90. When B runs 100, C runs 90, so when B runs 90, C runs 81. A beats C by 19 m.'),
  placement('Two trains start from two stations 450 km apart towards each other at speeds in the ratio 4 : 5. The faster covers before they meet (km)', 250, [200, 225, 280], '5/9 of 450 = 250 km.'),
  placement('Two cyclists start from A and B, 20 km apart, towards each other at 12 and 8 km/h. A fly at 40 km/h flies between them until they meet. The distance flown is (km)', 40, [20, 30, 50], 'Time to meet = 20 ÷ 20 = 1 h. Distance flown = 40 × 1 = 40 km.')
];
build(chapter, quiz);
