const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-problems-trains', year: 2, category: 'Advanced Quantitative Aptitude', num: 13, difficulty: 'Intermediate',
  title: 'Problems on Trains',
  tagline: 'Year 2 — Crossing poles, platforms, people and other trains',
  minutes: 45,
  overview: 'In train problems the length of the train cannot be ignored. To cross a pole or a person, a train covers its own length. To cross a platform or a bridge, it covers its own length plus the length of the platform. To cross another train, it covers the sum of the two lengths. The distance in every case is divided by the relevant (relative) speed.',
  placement: 'Train problems are commonly asked in company aptitude rounds, usually with unit conversion and relative speed. They are a standard application of time, speed and distance.',
  realWorld: 'Scheduling trains on parallel tracks, safe passing distances and timing a train through a tunnel use these calculations.',
  objectives: [
    'Identify the distance covered when a train crosses a pole, platform or another train',
    'Convert km/h to m/s correctly',
    'Use relative speed for two trains in the same and opposite directions',
    'Find the length of a train or a platform from two crossing times',
    'Handle people walking beside the train'
  ],
  prereq: ['Time, Speed and Distance', 'Relative Speed'],
  refresher: 'km/h × 5/18 = m/s. Distance = speed × time. Relative speed: sum for opposite, difference for same direction.',
  defs: [
    'Crossing a pole or a man: distance = length of the train.',
    'Crossing a platform or a bridge: distance = length of train + length of platform.',
    'Crossing another train: distance = sum of the two lengths.',
    'Relative speed: S₁ + S₂ (opposite) or |S₁ − S₂| (same direction).',
    'Speed of a person walking is subtracted or added to the train\'s speed depending on the direction.'
  ],
  intuition: 'A train is a long object, so "crossing" means that the whole train has moved past a point or object. The distance is the length of the train plus the length of whatever it passes, and the time is distance divided by the speed relative to that object.',
  mental: 'Write "distance = ?" first. For a pole it is L. For a platform it is L + P. For a train it is L₁ + L₂. Then convert the speed to m/s and divide.',
  formulas: [
    ['Crossing a pole', 'Time = L ÷ S', 'L in metres, S in m/s.', 'Poles, signals, persons at rest.', '150 m at 15 m/s → 10 s'],
    ['Crossing a platform', 'Time = (L + P) ÷ S', 'Length of the platform adds.', 'Bridges and platforms.', '(200 + 300) ÷ 20 = 25 s'],
    ['Crossing another train', 'Time = (L₁ + L₂) ÷ relative speed', 'Opposite: sum; same direction: difference.', 'Two trains.', '210 ÷ 35 = 6 s'],
    ['Length from two timings', 'Speed = (P₂ − P₁) ÷ (T₂ − T₁);  L = S T₁ − P₁', 'Two platforms.', 'Unknown speed and length.', 'S = 12 m/s, L = 60 m'],
    ['Person walking', 'Relative speed = train ± person', 'Subtract if same direction, add if opposite.', 'A man walking beside the track.', '60 km/h relative → train 54 km/h']
  ],
  narrative: [
    'Convert speeds to m/s when lengths are in metres. A train at 54 km/h moves at 54 × 5/18 = 15 m/s. A 150 m train crosses a pole in 150 ÷ 15 = 10 seconds.',
    'For a platform or bridge the distance is the train plus the platform. A 200 m train at 20 m/s crossing a 300 m platform covers 500 m and takes 25 seconds.',
    'For two trains in opposite directions use the sum of speeds. Trains of 120 m and 90 m at 72 and 54 km/h pass in (120 + 90) ÷ [(72 + 54) × 5/18] = 210 ÷ 35 = 6 seconds. In the same direction use the difference: 250 m at 5 m/s takes 50 seconds.',
    'If the train crosses a pole in t₁ seconds and a platform of length P in t₂ seconds, then L/t₁ = (L + P)/t₂. A train crossing a pole in 18 s and a 90 m platform in 27 s has L/18 = (L + 90)/27, giving L = 180 m.',
    'For a man walking beside the track, the train\'s speed relative to the man is the difference if both move the same way, and the sum if opposite. A 100 m train passes a man running at 6 km/h in the opposite direction in 6 s: the relative speed is 100/6 m/s = 60 km/h, so the train goes at 54 km/h.'
  ],
  deep: [
    ['Both crossings use the same speed', 'The speed of the train is the same when passing a pole and a platform. Equate the two speeds to find the unknown length.'],
    ['Equal-length trains', 'If two trains of equal length cross each other in time t moving oppositely, the relative speed is 2L/t. If their speeds are equal, each is L/t.']
  ],
  variations: [
    ['Crossing a pole', 'L ÷ S.', '150 m at 54 km/h'],
    ['Crossing a platform', '(L + P) ÷ S.', '200 m train, 300 m platform'],
    ['Two trains', 'Relative speed.', '120 m and 90 m trains'],
    ['Unknown length', 'Two timings.', 'Pole 18 s, platform 27 s'],
    ['Person beside the track', 'Relative speed with a person.', 'Man running at 6 km/h']
  ],
  examples: [
    {
      title: 'Crossing a platform',
      q: 'A 200 m long train running at 72 km/h crosses a platform 300 m long. How long does it take?',
      given: ['L = 200 m', 'P = 300 m', 'S = 72 km/h'],
      concept: 'Distance = L + P.',
      steps: [['Speed in m/s', '72 × 5/18 = 20 m/s.'], ['Distance', '200 + 300 = 500 m.'], ['Time', '500 ÷ 20 = 25 s.']],
      ans: '25 s', why: 'The whole train must clear the end of the platform.', trap: 'Using only 300 m.'
    },
    {
      title: 'Two trains in opposite directions',
      q: 'Two trains of lengths 120 m and 90 m run at 72 km/h and 54 km/h on parallel tracks in opposite directions. How long do they take to cross each other?',
      given: ['120 m and 90 m', '72 and 54 km/h'],
      concept: 'Relative speed = sum.',
      steps: [['Relative speed', '(72 + 54) × 5/18 = 35 m/s.'], ['Distance', '120 + 90 = 210 m.'], ['Time', '210 ÷ 35 = 6 s.']],
      ans: '6 s', why: 'The two trains must pass completely.', trap: 'Using the difference of speeds.'
    },
    {
      title: 'Length from two timings',
      q: 'A train takes 18 seconds to cross a pole and 27 seconds to cross a platform 90 m long. Find the length of the train.',
      given: ['Pole 18 s', 'Platform 90 m in 27 s'],
      concept: 'Same speed in both crossings.',
      steps: [['Equation', 'L/18 = (L + 90)/27.'], ['Cross-multiply', '27L = 18L + 1620.'], ['Solve', '9L = 1620, L = 180 m.']],
      ans: '180 m', why: 'The extra 9 seconds cover the 90 m platform, so speed = 10 m/s.', trap: 'Not adding the platform to the distance.'
    }
  ],
  shortcut: {
    title: 'Distance first',
    trad: 'Use different formulas for every case.',
    fast: 'Write the distance (L, L + P, L₁ + L₂) and the relative speed in m/s, then divide.',
    rules: ['Pole: L. Platform: L + P. Train: L₁ + L₂.', 'km/h × 5/18.', 'Opposite: sum; same: difference.', 'Same speed in both crossings of one train.']
  },
  mistakes: [
    ['Ignoring the train length', 'Using only the platform length.', 'Add the length of the train.'],
    ['Forgetting unit conversion', 'Dividing metres by km/h.', 'Convert to m/s.'],
    ['Wrong relative speed', 'Adding for the same direction.', 'Check the direction.'],
    ['Mixing the person and train directions', 'Always subtracting.', 'Add for opposite directions.']
  ],
  tips: { sec: 60, elim: 'Time for crossing a platform must exceed the time for a pole.', advice: 'Always convert speed to m/s first.', insight: 'These questions are quick marks.' },
  revision: ['Pole: L. Platform: L + P.', 'km/h × 5/18.', 'Opposite sum, same difference.', 'Equal speed equation.'],
  quickFormulas: ['T = (L + P)/S', 'T = (L₁ + L₂)/(S₁ ± S₂)'],
  takeaways: ['Distance includes the length.', 'Convert units.', 'Use relative speed.', 'Check direction.'],
  selfCheck: ['Can I time a train crossing a bridge?', 'Can I time two trains crossing?', 'Can I find a train\'s length from two timings?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Problems on Trains topic area; examples are original.']]
};

const quiz = [
  easy('A 150 m long train running at 54 km/h passes a pole in', 10, [8, 12, 15], 'Speed = 15 m/s. Time = 150 ÷ 15 = 10 s.'),
  easy('A 200 m train at 20 m/s crosses a platform 300 m long in', 25, [10, 15, 20], 'Distance = 500 m. Time = 500 ÷ 20 = 25 s.'),
  easy('A 120 m train passes a man standing on the platform at 36 km/h in', 12, [10, 15, 20], 'Speed = 10 m/s. Time = 120 ÷ 10 = 12 s.'),
  easy('A 180 m train crosses a pole in 9 seconds. Its speed in km/h is', 72, [60, 64.8, 80], 'Speed = 180 ÷ 9 = 20 m/s = 20 × 18/5 = 72 km/h.'),
  easy('A train running at 72 km/h crosses a pole in 15 seconds. Its length is', 300, [250, 270, 360], 'Speed = 20 m/s. Length = 20 × 15 = 300 m.'),
  easy('A 150 m train at 40 m/s crosses a 250 m bridge in', 10, [5, 8, 12], 'Distance = 400 m. Time = 400 ÷ 40 = 10 s.'),

  medium('Two trains of length 120 m and 90 m run in opposite directions at 72 km/h and 54 km/h. They cross each other in', 6, [4, 7.5, 10], 'Relative speed = 126 km/h = 35 m/s. Time = 210 ÷ 35 = 6 s.'),
  medium('Two trains of length 100 m and 150 m run in the same direction at 72 km/h and 54 km/h. The faster overtakes the slower in', 50, [25, 35, 70], 'Relative speed = 18 km/h = 5 m/s. Time = 250 ÷ 5 = 50 s.'),
  medium('A 300 m train crosses a pole in 18 seconds. It crosses a platform in 36 seconds. The platform length is', 300, [250, 350, 600], 'Speed = 300/18 = 50/3 m/s. In 36 s it covers 600 m, so the platform = 600 − 300 = 300 m.'),
  medium('A train passes two men walking at 2 km/h and 4 km/h in the same direction in 9 and 10 seconds. The length of the train is', 50, [40, 60, 100], 'Let the train speed be s km/h. (s − 2) × 9 = (s − 4) × 10 gives s = 22. Length = 20 × (5/18) × 9 = 50 m.'),
  medium('A 150 m train crosses a 250 m bridge in 20 seconds. Its speed in km/h is', 72, [54, 60, 90], 'Speed = 400 ÷ 20 = 20 m/s = 72 km/h.'),
  medium('Two trains each 120 m long cross each other in 12 seconds when moving in opposite directions at equal speeds. The speed of each in km/h is', 36, [18, 54, 72], 'Relative speed = 240 ÷ 12 = 20 m/s, so each is 10 m/s = 36 km/h.'),
  medium('A 100 m train passes a man running at 6 km/h in the opposite direction in 6 seconds. The speed of the train in km/h is', 54, [48, 60, 66], 'Relative speed = 100 ÷ 6 m/s = 60 km/h. Train = 60 − 6 = 54 km/h.'),
  medium('A 240 m train passes a pole in 24 seconds. It crosses a 360 m platform in', 60, [36, 45, 72], 'Speed = 10 m/s. Distance = 600 m. Time = 60 s.'),

  placement('A 200 m train at 108 km/h overtakes a 100 m train at 72 km/h running in the same direction. The time taken is', 30, [20, 25, 40], 'Relative speed = 36 km/h = 10 m/s. Time = 300 ÷ 10 = 30 s.'),
  placement('A train crosses a 120 m platform in 15 seconds and a 180 m platform in 20 seconds. The length of the train is', 60, [50, 80, 100], 'Speed = (180 − 120) ÷ (20 − 15) = 12 m/s. Length = 12 × 15 − 120 = 60 m.'),
  placement('Two trains of lengths 200 m and 300 m start from opposite stations and cross in 10 seconds. If the first is at 20 m/s, the second is at (m/s)', 30, [25, 35, 40], 'Relative speed = 500 ÷ 10 = 50 m/s. Second = 50 − 20 = 30 m/s.'),
  placement('A train takes 18 seconds to cross a pole and 27 seconds to cross a 90 m platform. The length of the train is', 180, [135, 150, 270], 'L/18 = (L + 90)/27 gives L = 180 m.'),
  placement('Two trains running at 60 km/h and 90 km/h in the same direction cross in 30 seconds. The sum of their lengths is (metres)', 250, [150, 200, 300], 'Relative speed = 30 km/h = 25/3 m/s. Sum of lengths = 25/3 × 30 = 250 m.'),
  placement('A 150 m train at 36 km/h takes 40 seconds to cross a bridge. The length of the bridge is (metres)', 250, [200, 300, 400], 'Distance = 10 × 40 = 400 m. Bridge = 400 − 150 = 250 m.')
];
build(chapter, quiz);
