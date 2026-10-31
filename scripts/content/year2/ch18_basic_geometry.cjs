const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-basic-geometry', year: 2, category: 'Advanced Quantitative Aptitude', num: 18, difficulty: 'Intermediate',
  title: 'Basic Geometry',
  tagline: 'Year 2 — Lines, angles, triangles, polygons and circles',
  minutes: 50,
  overview: 'Geometry studies shapes, sizes and angles. For aptitude tests the most useful ideas are the angle facts for straight lines and parallel lines, the angle sum of triangles and polygons, the Pythagoras theorem, and a few circle facts. Most questions are one or two steps once you recall the right fact.',
  placement: 'Basic geometry questions are commonly asked in company aptitude rounds as angle chasing, polygon facts and right-triangle problems.',
  realWorld: 'Construction layouts, screen sizes, road junctions and design drawings all use these facts.',
  objectives: [
    'Use angle relations for straight lines and parallel lines',
    'Apply the angle sum of a triangle and polygon',
    'Use the exterior angle theorem and the triangle inequality',
    'Apply the Pythagoras theorem and common triples',
    'Use basic circle facts'
  ],
  prereq: ['Basic Mensuration (area, perimeter)', 'Linear Equations'],
  refresher: 'A straight angle is 180° and a full turn is 360°. Complementary angles add to 90° and supplementary angles to 180°.',
  defs: [
    'Complementary angles sum to 90°; supplementary angles sum to 180°.',
    'Triangle: angle sum 180°; the exterior angle equals the sum of the two opposite interior angles.',
    'Polygon with n sides: interior angle sum = (n − 2) × 180°; each exterior angle of a regular polygon = 360°/n; number of diagonals = n(n − 3)/2.',
    'Pythagoras: in a right triangle, hypotenuse² = base² + height².',
    'Circle: angle in a semicircle = 90°; the angle at the centre is twice the angle at the circumference on the same arc.'
  ],
  intuition: 'Geometry facts are conservation laws. Angles along a line always add to 180°, angles round a point to 360°, and angles in a triangle to 180°. Once you find a single missing angle, the rest follow.',
  mental: 'Mark everything you know on a quick sketch. Look for straight lines, parallel lines, triangles and circles, and write the corresponding angle fact.',
  formulas: [
    ['Triangle', 'Sum of angles = 180°;  Exterior angle = sum of opposite interior angles', 'Two angles give the third.', 'Triangle questions.', '50° + 60° → third 70°'],
    ['Parallel lines', 'Corresponding and alternate angles are equal; co-interior angles add to 180°', 'Transversal cutting parallels.', 'Parallel line questions.', 'Alternate 65° → co-interior 115°'],
    ['Polygons', 'Interior sum = (n − 2) × 180°;  Exterior of regular = 360°/n;  Diagonals = n(n − 3)/2', 'n is the number of sides.', 'Polygon questions.', 'Hexagon: 720°, each 120°, 9 diagonals'],
    ['Pythagoras', 'c² = a² + b²', 'Right triangles only.', 'Right-angled triangles.', '6, 8 → 10'],
    ['Circle', 'Angle in a semicircle = 90°;  Angle at centre = 2 × angle at circumference', 'Same arc.', 'Circle angle questions.', '100° at centre → 50° at circumference']
  ],
  narrative: [
    'The triangle angle sum is the workhorse: if two angles are 50° and 60°, the third is 70°. The exterior angle of a triangle equals the sum of the two opposite interior angles, so an exterior angle of 120° with one opposite angle 50° gives the other as 70°.',
    'Parallel lines cut by a transversal give pairs of equal angles (corresponding and alternate) and pairs adding to 180° (co-interior). If one angle is 65°, the equal one is 65° and the co-interior one is 115°.',
    'For polygons, the interior angle sum is (n − 2) × 180°. A hexagon (n = 6) has 720°, so each angle of a regular hexagon is 120°. A regular polygon with exterior angle 36° has 360/36 = 10 sides. The number of diagonals of a hexagon is 6 × 3/2 = 9.',
    'The Pythagoras theorem handles right triangles. Learn the triples 3-4-5, 5-12-13, 8-15-17 and 7-24-25. A rectangle with sides 6 and 8 has diagonal 10.',
    'For circles, the angle in a semicircle is 90°, and the angle subtended at the centre by an arc is twice the angle at the circumference. A 100° angle at the centre means 50° at the circumference. Triangle inequality: each side is less than the sum and more than the difference of the other two.'
  ],
  deep: [
    ['Isosceles triangles', 'Equal sides have equal opposite angles. If the apex angle is 40°, each base angle is (180 − 40)/2 = 70°.'],
    ['Triangle inequality', 'With sides 7 and 10, the third side must be between 3 and 17. A value of 18 is impossible.']
  ],
  variations: [
    ['Angle chasing', 'Straight lines and triangles.', 'Third angle of a triangle'],
    ['Parallel lines', 'Alternate and co-interior angles.', '65° and 115°'],
    ['Polygons', 'Angle sum, sides, diagonals.', 'Hexagon'],
    ['Right triangles', 'Pythagoras.', '6, 8, 10'],
    ['Circles', 'Centre and circumference angles.', '100° at centre']
  ],
  examples: [
    {
      title: 'Exterior angle',
      q: 'An exterior angle of a triangle is 120° and one of the opposite interior angles is 50°. Find the other opposite interior angle.',
      given: ['Exterior angle 120°', 'One interior opposite angle 50°'],
      concept: 'Exterior angle = sum of opposite interior angles.',
      steps: [['Set up', '120° = 50° + x.'], ['Solve', 'x = 70°.']],
      ans: '70°', why: 'Check: 50 + 70 + 60 (the adjacent interior) = 180.', trap: 'Subtracting from 180 directly: 130.'
    },
    {
      title: 'Regular polygon',
      q: 'Each exterior angle of a regular polygon is 36°. Find the number of sides and the sum of its interior angles.',
      given: ['Exterior angle 36°'],
      concept: 'n = 360° ÷ exterior angle.',
      steps: [['Number of sides', '360 ÷ 36 = 10.'], ['Interior sum', '(10 − 2) × 180 = 1440°.']],
      ans: '10 sides; 1440°', why: 'Exterior angles of any polygon add to 360°.', trap: 'Using interior angle sum for exterior angles.'
    },
    {
      title: 'Circle angle',
      q: 'The angle subtended by an arc at the centre of a circle is 100°. Find the angle subtended by the same arc at a point on the remaining part of the circle.',
      given: ['Angle at centre 100°'],
      concept: 'Angle at the centre is twice that at the circumference.',
      steps: [['Recall the rule', 'The angle at the centre is twice the angle at the circumference on the same arc.'], ['Divide by 2', '100° ÷ 2 = 50°.']],
      ans: '50°', why: 'The centre angle is twice the circumference angle for the same arc.', trap: 'Doubling instead of halving.'
    }
  ],
  shortcut: {
    title: 'Fact lookup',
    trad: 'Derive every angle from scratch.',
    fast: 'Recall the fact that matches the figure (180° line, 180° triangle, (n−2)×180°, 360°/n) and compute in one line.',
    rules: ['Triangle 180°.', 'Polygon (n − 2) × 180°.', 'Regular exterior 360°/n.', 'Know Pythagorean triples.']
  },
  mistakes: [
    ['Confusing complementary and supplementary', 'Using 180 instead of 90.', 'Complementary = 90.'],
    ['Using Pythagoras on non-right triangles', 'Applying to any triangle.', 'Check for a right angle.'],
    ['Wrong polygon formula', 'Using n × 180.', 'Use (n − 2) × 180.'],
    ['Halving vs doubling in circles', 'Mixing which angle is at the centre.', 'Centre angle is larger.']
  ],
  tips: { sec: 45, elim: 'Angles in a triangle must be positive and sum to 180°.', advice: 'Sketch the figure even if given.', insight: 'Geometry facts also appear inside mensuration problems.' },
  revision: ['Triangle 180°.', 'Exterior angle theorem.', 'Polygon formulas.', 'Pythagoras triples.', 'Circle angle facts.'],
  quickFormulas: ['(n−2) × 180°', '360°/n', 'n(n−3)/2'],
  takeaways: ['Mark known angles.', 'Recall the fact.', 'Check the sum.', 'Use triples.'],
  selfCheck: ['Can I find the interior angle of a regular hexagon?', 'Can I use the exterior angle theorem?', 'Can I state the angle in a semicircle?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Geometry and mensuration topic area; examples are original.'], ['NCERT Mathematics, Class 7–9 (Geometry)', 'Textbook', 'Angles, triangles, polygons and circles.']]
};

const quiz = [
  easy('Two angles of a triangle are 50° and 60°. The third angle is', '70°', ['60°', '80°', '90°'], '180 − 50 − 60 = 70°.'),
  easy('The complement of 35° is', '55°', ['145°', '65°', '35°'], '90 − 35 = 55°.'),
  easy('The supplement of 110° is', '70°', ['80°', '60°', '250°'], '180 − 110 = 70°.'),
  easy('Each angle of an equilateral triangle is', '60°', ['30°', '45°', '90°'], '180 ÷ 3 = 60°.'),
  easy('The sum of the interior angles of a quadrilateral is', '360°', ['180°', '270°', '540°'], '(4 − 2) × 180 = 360°.'),
  easy('The hypotenuse of a right triangle with legs 6 cm and 8 cm is', '10 cm', ['9 cm', '12 cm', '14 cm'], '√(36 + 64) = 10 cm.'),

  medium('The sum of the interior angles of a hexagon is', '720°', ['540°', '900°', '1080°'], '(6 − 2) × 180 = 720°.'),
  medium('Each interior angle of a regular hexagon is', '120°', ['108°', '135°', '60°'], '720° ÷ 6 = 120°.'),
  medium('A polygon has an interior angle sum of 1080°. The number of its sides is', 8, [6, 7, 10], '(n − 2) × 180 = 1080 gives n = 8.'),
  medium('Each exterior angle of a regular polygon is 36°. The number of sides is', 10, [8, 9, 12], '360 ÷ 36 = 10.'),
  medium('An exterior angle of a triangle is 120° and one opposite interior angle is 50°. The other opposite interior angle is', '70°', ['60°', '80°', '130°'], '120 − 50 = 70°.'),
  medium('Two parallel lines are cut by a transversal. If an alternate interior angle is 65°, the co-interior angle is', '115°', ['65°', '25°', '295°'], 'Co-interior angles add to 180°: 180 − 65 = 115°.'),
  medium('Which set of lengths forms a right-angled triangle?', '7, 24, 25', ['6, 8, 12', '5, 6, 7', '9, 12, 16'], 'The set 7, 24, 25 works because 7² + 24² = 49 + 576 = 625 = 25².'),
  medium('The angle in a semicircle is', '90°', ['60°', '180°', '45°'], 'The angle subtended by a diameter at the circumference is 90°.'),

  placement('An arc subtends an angle of 100° at the centre of a circle. The angle it subtends at a point on the remaining circle is', '50°', ['200°', '100°', '25°'], 'Angle at the circumference = 100 ÷ 2 = 50°.'),
  placement('Two sides of a triangle are 7 cm and 10 cm. Which of these cannot be the third side?', '18 cm', ['4 cm', '10 cm', '16 cm'], 'The third side must be between 3 and 17 cm, so 18 cm is impossible.'),
  placement('The apex angle of an isosceles triangle is 40°. Each base angle is', '70°', ['40°', '60°', '80°'], '(180 − 40) ÷ 2 = 70°.'),
  placement('The diagonal of a rectangle of sides 6 cm and 8 cm is', '10 cm', ['12 cm', '14 cm', '9 cm'], '√(6² + 8²) = 10 cm.'),
  placement('The number of diagonals of a hexagon is', 9, [6, 12, 15], 'n(n − 3)/2 = 6 × 3/2 = 9.'),
  placement('The angles of a triangle are in the ratio 2 : 3 : 4. The largest angle is', '80°', ['60°', '70°', '90°'], 'Parts = 9, one part = 20°. Largest = 4 × 20 = 80°.')
];
build(chapter, quiz);
