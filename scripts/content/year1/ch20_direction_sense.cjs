const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-lr-basic-direction', year: 1, category: 'Logical Reasoning', num: 20,
  title: 'Direction Sense Basics',
  tagline: 'Year 1 Foundation — Turns, distances and final positions on a compass',
  minutes: 40,
  overview: 'Direction sense questions describe a person walking and turning, and ask for the final direction, the distance from the starting point, or the direction of one place from another. The four main directions are North, East, South and West, and the four in-between directions are North-east, South-east, South-west and North-west. The best method is to draw the path on paper with North at the top, and to use the Pythagoras theorem when the final distance is diagonal.',
  placement: 'Direction questions are commonly asked in company reasoning rounds. They are short, need no theory beyond a compass and the right-angled triangle, and reward neat sketches.',
  realWorld: 'Reading a map, giving directions to a delivery partner, planning a drone path and following a compass in an outdoor survey all depend on the same ideas.',
  objectives: [
    'Know the eight compass directions and which are opposite',
    'Track the facing direction after left and right turns',
    'Compute the net displacement from several legs of a path',
    'Use the Pythagoras theorem for diagonal distances',
    'Use sun and shadow facts for morning and evening questions'
  ],
  prereq: ['Basic geometry (right-angled triangle)', 'Squares and square roots'],
  refresher: 'Pythagoras theorem: in a right-angled triangle, hypotenuse² = base² + height². Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.',
  defs: [
    'Cardinal directions: North, East, South, West. Each is at 90° from the next one going clockwise.',
    'Intermediate directions: North-east, South-east, South-west, North-west, lying halfway between the cardinals.',
    'Opposite directions: North–South, East–West, North-east–South-west, North-west–South-east.',
    'Right turn = 90° clockwise. Left turn = 90° anticlockwise. A U-turn is 180°.',
    'Displacement: the straight-line distance and direction from the starting point to the final point (not the total length walked).'
  ],
  intuition: 'Treat the ground as a graph with North as up (+y) and East as right (+x). Every leg of the walk changes x or y. At the end, subtract the opposite moves (North against South, East against West) and what remains is the displacement. The final distance is then a simple horizontal, vertical or diagonal measurement.',
  mental: 'Imagine you are standing on the origin of a graph. Facing North, a right turn makes you face East, then South, then West, then North again. Left turns go the other way round: North → West → South → East.',
  formulas: [
    ['Turning rule (clockwise order)', 'North → East → South → West → North for right turns', 'Left turns follow the opposite order.', 'Any "turns right" or "turns left" question.', 'Facing North, turn right → East'],
    ['Net displacement', 'Net x = East − West;  Net y = North − South', 'Cancel opposite moves.', 'Multi-leg walks.', '4 km S then 4 km N cancels in y'],
    ['Straight-line distance', 'Distance = √(x² + y²)', 'Pythagoras on the net x and net y.', 'When the end point is diagonal from the start.', '3 km north then 4 km east → 5 km'],
    ['Sun and shadow', 'Morning: sun in the East, shadow falls West. Evening: sun in the West, shadow falls East.', 'A shadow falls opposite to the sun.', 'Shadow questions.', 'Facing the rising sun, the shadow falls behind the person'],
    ['Direction between two points', 'Compare the net x and net y of the second point with the first', 'Right and up = North-east, and so on.', 'Questions asking "in which direction is C from A".', 'C is 5 east and 5 south of A → South-east']
  ],
  narrative: [
    'Start every question by drawing a small compass with North at the top. Mark the starting point and draw each leg with an arrow, labelling distances. After each turn, write the facing direction beside the arrow so that you never confuse left and right.',
    'Facing direction after a turn is a rotation. Starting from North: right → East, right → South, right → West. A left turn from West leads to South. For two turns (such as right then right) the person faces the opposite direction, which is a U-turn.',
    'Compute the net displacement by adding the legs along each axis. For a walk of 8 km North, 6 km East, 8 km South and 3 km West, the North and South legs cancel (8 − 8 = 0) and the East and West legs leave 6 − 3 = 3 km East. So the person is 3 km East of the starting point.',
    'When the end point is diagonal, use the Pythagoras theorem. A man who walks 13 km East, 12 km North and 8 km West ends up 13 − 8 = 5 km East and 12 km North of the start, so the distance is √(5² + 12²) = 13 km.',
    'For shadow problems, remember that a shadow falls opposite to the sun. At sunrise the sun is in the East, so shadows point West. At sunset the sun is in the West, so shadows point East.'
  ],
  deep: [
    ['Diagonal directions', 'North-east means equal parts North and East, i.e. 45° between them. If A is 5 km north of B and C is 5 km east of B, then from A to C you go 5 km east and 5 km south: C is South-east of A.'],
    ['Distance walked versus displacement', 'A man who walks 4 km South and then 4 km North has walked 8 km but his displacement is zero. Be clear about which one the question asks for.']
  ],
  variations: [
    ['Final direction after turns', 'Left and right turns from a given direction.', 'Facing North, turn right then right again.'],
    ['Distance from the start', 'Net displacement by Pythagoras.', '3 km North then 4 km East.'],
    ['Direction from the start', 'Compass direction of the final point.', '4 km South, 3 km West, 4 km North.'],
    ['Shadow problems', 'Sun, morning, evening.', 'Facing the sun in the morning.'],
    ['Direction between two points', 'Relative positions of A and C.', 'C is east and south of A.']
  ],
  examples: [
    {
      title: 'Straight-line distance',
      q: 'A man walks 3 km North, then turns right and walks 4 km. How far is he from the starting point, and in which direction?',
      given: ['3 km North', 'Right turn, 4 km'],
      concept: 'Draw the legs and use the Pythagoras theorem.',
      steps: [
        ['Draw the first leg', 'Facing North, he walks 3 km up.'],
        ['Turn right', 'From North, a right turn faces East. He walks 4 km East.'],
        ['Find the distance', 'Distance = √(3² + 4²) = √25 = 5 km.'],
        ['Find the direction', 'The end point is 3 km North and 4 km East of the start, so it is North-east.']
      ],
      ans: '5 km, towards the North-east',
      why: 'The two legs are at right angles, forming a 3-4-5 triangle.',
      trap: 'Adding the legs (7 km) instead of using the straight-line distance.'
    },
    {
      title: 'Cancelling opposite moves',
      q: 'A man walks 4 km South, then 3 km West, and then 4 km North. How far is he from the starting point and in which direction?',
      given: ['4 km South', '3 km West', '4 km North'],
      concept: 'Net north-south movement and net east-west movement.',
      steps: [
        ['North-south movement', '4 km South and 4 km North cancel out: net 0.'],
        ['East-west movement', '3 km West remains.'],
        ['Combine', 'He is 3 km from the start, to its West.']
      ],
      ans: '3 km West',
      why: 'The two vertical legs have equal length in opposite directions.',
      trap: 'Adding all three distances to get 11 km.'
    },
    {
      title: 'Diagonal path with a return leg',
      q: 'A man walks 13 km East, then 12 km North and then 8 km West. How far is he from the starting point?',
      given: ['13 km East', '12 km North', '8 km West'],
      concept: 'Net x and net y, then Pythagoras.',
      steps: [
        ['Net east-west', '13 − 8 = 5 km East.'],
        ['Net north-south', '12 km North.'],
        ['Distance', '√(5² + 12²) = √169 = 13 km.']
      ],
      ans: '13 km',
      why: '5-12-13 is a Pythagorean triple.',
      trap: 'Using 13 and 12 directly without subtracting the westward leg.'
    }
  ],
  shortcut: {
    title: 'Coordinate bookkeeping',
    trad: 'Draw and measure every leg step by step.',
    fast: 'Keep two running totals, x (East positive) and y (North positive). Update them as you read the legs. The final answer is a distance √(x² + y²) and a compass direction from the signs of x and y.',
    rules: [
      'Right turn = clockwise; left turn = anticlockwise.',
      'Two turns of the same kind give a U-turn.',
      'A shadow falls opposite to the sun.',
      'Use the 3-4-5, 5-12-13, 8-15-17 triples to see distances immediately.'
    ]
  },
  mistakes: [
    ['Confusing left and right', 'Mentally rotating the wrong way.', 'Write the facing direction after every turn.'],
    ['Adding distances instead of finding displacement', 'Totalling every leg.', 'Cancel opposite moves and use Pythagoras for the diagonal.'],
    ['Wrong shadow direction', 'Assuming the shadow falls towards the sun.', 'The shadow is always on the opposite side from the sun.'],
    ['Mixing up the person\'s direction and the position', 'Facing East but located to the West of the start.', 'Facing direction and position are different; track both.']
  ],
  tips: {
    sec: 60,
    elim: 'Quickly eliminate options in the wrong quadrant after finding the signs of net x and net y.',
    advice: 'Always draw. The drawing takes 15 seconds and prevents most errors.',
    insight: 'Direction sense is a skill where neat sketches matter more than speed in calculation.'
  },
  revision: [
    'Right = clockwise, left = anticlockwise.',
    'Cancel opposite moves, then use Pythagoras.',
    'Shadow falls opposite to the sun.',
    'Know Pythagorean triples.',
    'Distance walked is not displacement.'
  ],
  quickFormulas: ['d = √(x² + y²)', 'N → E → S → W (right turns)', '3-4-5, 5-12-13, 8-15-17, 7-24-25'],
  takeaways: [
    'Draw the path with North at the top.',
    'Keep running totals of x and y.',
    'Use triples for fast distances.',
    'Check the question: direction faced or position?'
  ],
  selfCheck: [
    'Can I give the direction faced after turning right and then left from North?',
    'Can I compute the straight-line distance after 6 km East and 8 km North?',
    'Can I give the direction of the shadow in the evening?'
  ],
  sources: [
    ['A Modern Approach to Verbal & Non-Verbal Reasoning — R.S. Aggarwal', 'Textbook', 'The Direction Sense topic area; examples in this chapter are original.']
  ]
};

const quiz = [
  easy('A man walks 10 m East, then 10 m North and then 10 m West. He is now ___ from the starting point.', '10 m North', ['10 m East', '10 m South', '30 m'], 'The East and West legs cancel. He is 10 m North of the start.'),
  easy('Facing North, a person turns right. He now faces', 'East', ['West', 'South', 'North-east'], 'A right turn is clockwise: North → East.'),
  easy('Facing East, a person turns left. He now faces', 'North', ['South', 'West', 'East'], 'A left turn is anticlockwise: East → North.'),
  easy('In the morning, a man stands facing the rising sun. His shadow falls towards the', 'West', ['East', 'North', 'South'], 'The sun is in the East, and a shadow falls opposite the sun: towards the West (behind him).'),
  easy('The direction opposite to North-west is', 'South-east', ['South-west', 'North-east', 'South'], 'The opposite of North is South and of West is East, so the opposite of North-west is South-east.'),
  easy('A man walks 3 km North, turns right and walks 4 km. His distance from the start is', '5 km', ['7 km', '3.5 km', '1 km'], 'The legs are at right angles: √(3² + 4²) = 5 km.'),

  medium('A man walks 6 km East and then 8 km North. His straight-line distance from the start is', '10 km', ['14 km', '12 km', '7 km'], '√(6² + 8²) = √100 = 10 km.'),
  medium('A man walks 15 m West, turns right and walks 20 m, then turns right again and walks 15 m. He is now ___ from the starting point.', '20 m North', ['20 m South', '15 m East', '35 m West'], 'West 15 m: (−15, 0). Right turn from West faces North: 20 m gives (−15, 20). Right turn from North faces East: 15 m gives (0, 20). He is 20 m North of the start.'),
  medium('A person facing North turns 90° clockwise and then 180° anticlockwise. He now faces', 'West', ['East', 'South', 'North'], 'North turned 90° clockwise faces East. Turned 180° anticlockwise from East he faces West.'),
  medium('A man faces West. He turns left, then right, then right again. He now faces', 'North', ['South', 'East', 'West'], 'West → left → South → right → West → right → North.'),
  medium('Two friends start from the same point. A walks 12 km North and B walks 16 km East. The distance between them is', '20 km', ['28 km', '4 km', '14 km'], '√(12² + 16²) = √400 = 20 km.'),
  medium('Ravi walks 4 km South, then 3 km West, then 4 km North. How far is he from the start?', '3 km', ['11 km', '7 km', '4 km'], 'The South and North legs cancel. He is 3 km West of the start.'),
  medium('A man goes 10 m South, turns left and goes 20 m, then turns left and goes 10 m. He is now ___ from the start.', '20 m East', ['20 m West', '10 m North', '40 m'], 'South 10 m: (0, −10). Left from South faces East: (20, −10). Left from East faces North: (20, 0). He is 20 m East of the start.'),
  medium('At sunset, the shadow of a pole falls towards the', 'East', ['West', 'North', 'South'], 'At sunset the sun is in the West, and the shadow falls opposite, towards the East.'),

  placement('Raj walks 8 km North, then 6 km East, then 8 km South and then 3 km West. He is now ___ from his house.', '3 km East', ['3 km West', '9 km East', '25 km'], 'North and South legs cancel (8 − 8 = 0). East − West = 6 − 3 = 3 km East.'),
  placement('A walks 20 m East, turns right and walks 10 m, turns right and walks 20 m, then turns left and walks 5 m. His distance from the start is', '15 m', ['5 m', '20 m', '55 m'], 'East 20: (20, 0). Right → South 10: (20, −10). Right → West 20: (0, −10). Left from West faces South: 5 m gives (0, −15). He is 15 m South of the start.'),
  placement('A man walks 3 km North, 4 km East, 6 km South and then 4 km West. He is now ___ from the start.', '3 km South', ['3 km North', '4 km East', '17 km'], 'North − South = 3 − 6 = 3 km South. East − West = 4 − 4 = 0.'),
  placement('A man walks 13 km East, then 12 km North, then 8 km West. His distance from the start is', '13 km', ['25 km', '17 km', '12 km'], 'Net East = 13 − 8 = 5 km, net North = 12 km. Distance = √(25 + 144) = √169 = 13 km.'),
  placement('Suresh is facing South-west. He turns 90° clockwise. He now faces', 'North-west', ['North-east', 'South-east', 'West'], 'Clockwise turns go South-west → West → North-west. So a 90° clockwise turn from South-west faces North-west.'),
  placement('A is 5 km North of B. C is 5 km East of B. In which direction is C from A?', 'South-east', ['North-east', 'South-west', 'East'], 'Taking B as the origin, A = (0, 5) and C = (5, 0). From A to C is 5 km East and 5 km South, i.e. South-east.')
];

build(chapter, quiz);
