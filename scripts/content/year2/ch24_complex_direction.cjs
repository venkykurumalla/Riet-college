const { easy, medium, placement, build } = require('../lib.cjs');

// Path answers are computed from the stated moves by a small simulator, not typed by hand.
const V = { N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0] };
const abs = legs => legs.reduce(([x, y], l) => { const [dx, dy] = V[l[0]]; const d = Number(l.slice(1)); return [x + dx * d, y + dy * d]; }, [0, 0]);
const rel = (facing, steps) => {
  const order = ['N', 'E', 'S', 'W'];
  let f = order.indexOf(facing), x = 0, y = 0;
  for (const s of steps) {
    if (s === 'R') f = (f + 1) % 4; else if (s === 'L') f = (f + 3) % 4;
    else { const [dx, dy] = V[order[f]]; x += dx * s; y += dy * s; }
  }
  return [x, y];
};
const dist = ([x, y]) => Math.round(Math.hypot(x, y) * 100) / 100;
const dir = ([x, y]) => {
  if (x === 0 && y === 0) return 'at the start';
  const ns = y > 0 ? 'North' : y < 0 ? 'South' : '';
  const ew = x > 0 ? 'East' : x < 0 ? 'West' : '';
  return ns && ew ? ns.toLowerCase() === 'north' ? 'North-' + ew.toLowerCase() : 'South-' + ew.toLowerCase() : ns || ew;
};
const answer = p => `${dist(p)} km ${dir(p)}`;
const wrong = p => [`${dist(p) + 2} km ${dir(p)}`, `${dist(p)} km ${dir([-p[0] || 1, p[1]])}`, `${dist(p)} km ${dir([p[0], -p[1] || 1])}`];

const chapter = {
  id: 'y2-lr-complex-direction', year: 2, category: 'Data Interpretation', num: 24, difficulty: 'Intermediate',
  title: 'Complex Direction Sense',
  tagline: 'Year 2 — Multi-turn paths, diagonal directions, bearings and relative positions',
  minutes: 45,
  overview: 'Complex direction questions use paths with many turns, turns through angles other than 90°, diagonal directions (North-east, South-west), shadows and the relative positions of several people or places. The method of Year 1 still works: keep running totals of East–West and North–South displacement, track the direction faced after each turn, and finish with Pythagoras and the compass direction.',
  placement: 'Direction sense questions with several turns and diagonal directions are commonly asked in company reasoning rounds.',
  realWorld: 'Navigation, drone flight plans, surveying and delivery routing use these same displacement calculations.',
  objectives: [
    'Track the facing direction through several turns, including 45° and 135° turns',
    'Compute net displacement and the straight-line distance',
    'Find the compass direction of the final point from the start',
    'Handle relative positions of several points',
    'Use shadow facts in turning problems'
  ],
  prereq: ['Direction Sense Basics', 'Pythagoras theorem'],
  refresher: 'Eight directions in clockwise order: N, NE, E, SE, S, SW, W, NW (45° apart). Right turn = clockwise, left turn = anticlockwise. Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.',
  defs: [
    'Bearing: direction measured clockwise from North (N = 0°, E = 90°, S = 180°, W = 270°).',
    'Displacement: straight-line distance and direction from the start to the end.',
    'Intermediate directions: NE (45°), SE (135°), SW (225°), NW (315°).',
    'Relative position: the direction of one point as seen from another.',
    'Shadow: falls opposite to the sun (west in the morning, east in the evening).'
  ],
  intuition: 'Everything reduces to coordinates. Treat East as +x and North as +y. Each leg adds to x or y. After all legs, the straight-line distance is √(x² + y²) and the direction comes from the signs of x and y.',
  mental: 'Write the facing direction as a bearing and add the turn angle (clockwise positive). After each leg, update x and y. Use a quick sketch with North at the top.',
  formulas: [
    ['Turning', 'New bearing = old bearing ± turn angle (right +, left −)', 'Wrap around 360°.', 'Multi-turn questions.', 'NE (45°) + 90° = SE (135°)'],
    ['Displacement', 'x = East − West;  y = North − South', 'Net totals.', 'Distance from the start.', 'N3, E5, N9 → (5, 12)'],
    ['Straight-line distance', 'd = √(x² + y²)', 'Pythagoras.', 'Distance questions.', '√(25 + 144) = 13'],
    ['Direction from the start', 'Signs of (x, y) decide the quadrant', '+x East, −x West, +y North, −y South.', 'Final direction.', '(5, 12) → North-east'],
    ['Relative position of two points', 'Subtract their coordinates', 'Direction from the first to the second.', 'Two-point questions.', 'A (6, 8), B (−6, −8) → distance 20']
  ],
  narrative: [
    'Draw the path with North at the top. After each leg, write the facing direction. A man facing North who walks 10 m, turns right and walks 5 m, then turns right again and walks 10 m, is now 5 m East of his start (facing South).',
    'For 45° and 135° turns, use bearings. North-east is 45°, and a 90° clockwise turn from it gives 135° (South-east). A further 180° gives 315° (North-west), and a 45° anticlockwise turn from there gives 270° (West).',
    'For displacement, add the legs on each axis. A walk of 3 km North, 5 km East, then 9 km North ends at (5, 12), so the distance is √(25 + 144) = 13 km and the direction is North-east.',
    'For relative positions, set one point as the origin. If A is 5 m east of B and C is 5 m north of A, then C is at (5, 5) from B, so C is North-east of B.',
    'For shadow questions, the shadow falls opposite to the sun. In the morning the sun is in the east, so a boy facing the sun faces East. If he turns left he faces North, and his shadow, which falls to the West, is on his left.'
  ],
  deep: [
    ['Distance walked vs displacement', 'The path of a walker may be long, but the displacement is the straight-line distance. Read the question carefully for which one is asked.'],
    ['Opposite directions in coordinates', 'A move of 10 m West followed by 10 m East cancels. Use cancellation to shorten sums.']
  ],
  variations: [
    ['Absolute legs', 'N, E, S, W legs.', 'N6, E8'],
    ['Relative turns', 'Left and right turns.', 'Facing N: F10, R, F5, R, F10'],
    ['45° turns', 'Bearings.', 'NE turned 90° clockwise'],
    ['Two persons', 'Distance between them.', 'A: N8, E6; B: W6, S8'],
    ['Shadow', 'Sun direction.', 'Boy turns left from facing the sun']
  ],
  examples: [
    {
      title: 'Multi-leg path',
      q: 'A man walks 3 km North, then 5 km East, then 9 km North. How far is he from the start and in which direction?',
      given: ['N3, E5, N9'],
      concept: 'Net coordinates.',
      steps: [['Add north legs', '3 + 9 = 12 km North.'], ['East', '5 km East.'], ['Distance', '√(5² + 12²) = 13 km.'], ['Direction', 'North-east.']],
      ans: '13 km North-east', why: '5-12-13 is a Pythagorean triple.', trap: 'Adding 3 + 5 + 9 = 17.'
    },
    {
      title: 'Turns with relative directions',
      q: 'Facing North, a man walks 10 km, turns right and walks 5 km, then turns right again and walks 10 km. How far is he from the start and in which direction?',
      given: ['F10, R, F5, R, F10'],
      concept: 'Track the facing direction.',
      steps: [['F10 North', '(0, 10).'], ['Right → East, F5', '(5, 10).'], ['Right → South, F10', '(5, 0).']],
      ans: '5 km East', why: 'The two north-south legs cancel.', trap: 'Assuming he returns to the start.'
    },
    {
      title: 'Turns through 45°',
      q: 'A person facing North-east turns 90° clockwise, then 180° and then 45° anticlockwise. Which direction does he face now?',
      given: ['Start NE (45°)'],
      concept: 'Add and subtract bearings.',
      steps: [['+90°', '45° + 90° = 135° (South-east).'], ['+180°', '135° + 180° = 315° (North-west).'], ['−45°', '315° − 45° = 270° (West).']],
      ans: 'West', why: 'Each turn changes the bearing by its angle.', trap: 'Turning the wrong way for anticlockwise.'
    }
  ],
  shortcut: {
    title: 'Bearings and coordinates',
    trad: 'Draw and measure each leg.',
    fast: 'Convert directions to bearings and legs to (x, y) additions. Use triples for distances.',
    rules: ['Right = +, left = −.', 'East +x, North +y.', 'Distance √(x² + y²).', 'Shadow is opposite the sun.']
  },
  mistakes: [
    ['Mixing left and right', 'Turning the wrong way.', 'Write the facing direction after every turn.'],
    ['Adding all distances', 'Using total path length.', 'Use net displacement.'],
    ['Wrong quadrant', 'Misreading signs.', 'Check each sign.'],
    ['Forgetting 45° steps', 'Treating NE as N or E.', 'Use bearings.']
  ],
  tips: { sec: 70, elim: 'Eliminate options in the wrong quadrant.', advice: 'Sketch every time.', insight: 'Triples give quick distances.' },
  revision: ['Bearings.', 'Net x, y.', 'd = √(x² + y²).', 'Direction from signs.', 'Shadow opposite the sun.'],
  quickFormulas: ['d = √(x² + y²)', 'NE = 45°'],
  takeaways: ['Coordinates.', 'Track facing.', 'Check signs.', 'Triples.'],
  selfCheck: ['Can I find displacement after four legs?', 'Can I turn NE by 90° clockwise?', 'Can I find the direction of C from B?'],
  sources: [['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'Direction Sense topic area; examples are original.']]
};

const q = (stem, p, d) => d(stem + ' How far is he from the start, and in which direction?', answer(p), wrong(p), 'Net position (x East, y North) = (' + p[0] + ', ' + p[1] + '). Distance = ' + dist(p) + ' km, direction ' + dir(p) + '. The answer is ' + answer(p) + '.');

const quiz = [
  q('A man walks 6 km North and then 8 km East.', abs(['N6', 'E8']), easy),
  q('A man walks 12 km East and then 5 km South.', abs(['E12', 'S5']), easy),
  q('A man walks 15 km West and then 20 km North.', abs(['W15', 'N20']), easy),
  q('A man walks 8 km South and then 6 km West.', abs(['S8', 'W6']), easy),
  q('A man walks 10 km North, 10 km East and then 10 km South.', abs(['N10', 'E10', 'S10']), easy),
  q('A man walks 7 km East and then 24 km North.', abs(['E7', 'N24']), easy),

  q('A man faces North, walks 10 km, turns right and walks 5 km, then turns right and walks 10 km.', rel('N', [10, 'R', 5, 'R', 10]), medium),
  q('A man faces East, walks 6 km, turns left and walks 8 km.', rel('E', [6, 'L', 8]), medium),
  q('A man faces North, walks 20 km, turns left and walks 15 km, turns left and walks 20 km, then turns left and walks 5 km.', rel('N', [20, 'L', 15, 'L', 20, 'L', 5]), medium),
  q('A man faces South, walks 12 km, turns right and walks 9 km.', rel('S', [12, 'R', 9]), medium),
  medium('In the morning a boy stands facing the rising sun. He turns left. His shadow now falls on his', 'left', ['right', 'front', 'back'], 'Facing the sun means facing East; after a left turn he faces North. The shadow falls West, which is on his left.'),
  medium('A is 5 m East of B and C is 5 m North of A. The direction of C from B is', 'North-east', ['East', 'North-west', 'North'], 'Taking B as the origin, A = (5, 0) and C = (5, 5). C lies North-east of B.'),
  medium('P is 12 km North of Q and R is 5 km East of Q. The distance between P and R (km) is', 13, [17, 11, 7], 'P = (0, 12) and R = (5, 0). Distance = √(25 + 144) = 13 km.'),
  medium('A man faces East and turns 270° anticlockwise. He now faces', 'South', ['North', 'West', 'East'], 'Anticlockwise from East: North (90°), West (180°), South (270°).'),

  q('A man walks 3 km North, then 5 km East, then 9 km North.', abs(['N3', 'E5', 'N9']), placement),
  placement('A person facing North-east turns 90° clockwise, then 180°, then 45° anticlockwise. He now faces', 'West', ['East', 'North', 'South'], 'NE (45°) + 90° = SE (135°); + 180° = NW (315°); − 45° = W (270°).'),
  q('A man walks 10 km West, then 10 km South, then 10 km East.', abs(['W10', 'S10', 'E10']), placement),
  placement('A walks 8 km North then 6 km East. B starts from the same point and walks 6 km West then 8 km South. The distance between A and B is (km)', 20, [14, 28, 10], 'A = (6, 8) and B = (−6, −8). Difference (12, 16). Distance = √(144 + 256) = 20 km.'),
  placement('Rohit\'s school is 500 m North of his home and the park is 1200 m East of the school. The straight-line distance from his home to the park is (m)', 1300, [1700, 1100, 1200], 'Distance = √(500² + 1200²) = 100 × √(25 + 144) = 1300 m.')
];
build(chapter, quiz);
