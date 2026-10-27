const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-basic-mensuration', year: 2, category: 'Advanced Quantitative Aptitude', num: 19, difficulty: 'Intermediate',
  title: 'Basic Mensuration',
  tagline: 'Year 2 — Perimeter, area and volume of common shapes',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/area/',
  overview: 'Mensuration is the measurement of shapes: perimeter (length around), area (surface covered) and volume (space occupied). A small set of formulas covers rectangles, squares, triangles, circles, trapeziums, cubes, cuboids, cylinders, cones and spheres. The skill is in choosing the right formula and keeping units consistent (cm, cm², cm³).',
  placement: 'Mensuration questions are commonly asked in company aptitude rounds, often combined with ratio, percentage and cost.',
  realWorld: 'Painting a wall, tiling a floor, filling a tank and fencing a field all use these formulas.',
  objectives: [
    'Compute perimeter and area of plane figures',
    'Compute volume and surface area of common solids',
    'Handle paths and borders around rectangles',
    'Use percentage changes in dimensions to find the change in area',
    'Convert units (m³ to litres)'
  ],
  prereq: ['Basic Geometry', 'Successive Percentages'],
  refresher: 'Use π = 22/7 when the radius is a multiple of 7, and 3.14 otherwise, unless π is left in the answer.',
  defs: [
    'Perimeter: total length of the boundary. Area: surface enclosed. Volume: space enclosed by a solid.',
    'Total surface area (TSA): area of all faces; lateral (curved) surface area (CSA): area of the sides only.',
    'Units: length cm, area cm², volume cm³; 1 m³ = 1000 litres.',
    'Radius r, diameter d = 2r, height h, slant height l.',
    'Trapezium: a quadrilateral with one pair of parallel sides.'
  ],
  intuition: 'Area counts squares and volume counts cubes. Doubling every length multiplies area by 4 and volume by 8. This scaling idea explains the percentage-change problems.',
  mental: 'Write the formula, substitute with units, and check the answer has the right units. Use 22/7 for circles with radius 7, 14, 21.',
  formulas: [
    ['Rectangle and square', 'Area = l × b;  Perimeter = 2(l + b);  Square: a², 4a', 'Square is a special rectangle.', 'Fields, floors.', '12 × 8 = 96; 2(12 + 8) = 40'],
    ['Triangle and trapezium', 'Triangle = ½ × base × height;  Trapezium = ½ (a + b) h', 'Height is perpendicular.', 'Triangles and trapeziums.', '½ × 10 × 6 = 30'],
    ['Circle', 'Circumference = 2πr;  Area = πr²', 'π ≈ 22/7.', 'Circles.', 'r = 7: 44 and 154'],
    ['Cuboid and cube', 'V = lbh;  TSA = 2(lb + bh + hl);  Cube: a³, 6a²', 'Cube is a special cuboid.', 'Boxes and tanks.', '10 × 8 × 5 → TSA 340'],
    ['Cylinder, cone, sphere', 'Cylinder V = πr²h, CSA = 2πrh;  Cone V = ⅓πr²h;  Sphere V = 4/3 πr³, S = 4πr²', 'Memorise.', 'Round solids.', 'r = 7, h = 10 → V = 1540']
  ],
  narrative: [
    'For rectangles use A = lb and P = 2(l + b). A 12 m by 8 m field has area 96 m² and perimeter 40 m. For a triangle, A = ½ × base × height, and for a trapezium A = ½(a + b)h with a and b the parallel sides.',
    'For a circle, circumference = 2πr and area = πr². With π = 22/7 and r = 7, the circumference is 44 and the area is 154. Given a circumference of 44 you can find r = 7 and then the area.',
    'For a path around a rectangle, subtract the inner area from the outer area. A 40 m by 30 m park with a 2 m path inside: inner 36 × 26 = 936, outer 1200, path area 264 m².',
    'For solids: cuboid V = lbh, TSA = 2(lb + bh + hl); cube V = a³, TSA = 6a²; cylinder V = πr²h, CSA = 2πrh; cone V = ⅓πr²h; sphere V = ⁴⁄₃πr³. A cylinder with r = 7 and h = 10 has V = (22/7) × 49 × 10 = 1540.',
    'When a dimension changes by a percentage, areas change by the product of multipliers. A radius up 10% raises the area by 1.1² = 1.21, a 21% increase. Volumes change by the cube of a scale factor.'
  ],
  deep: [
    ['Scaling', 'If lengths are multiplied by k, areas are multiplied by k² and volumes by k³.'],
    ['Unit trap', '1 m³ = 1000 litres, but 1 m² = 10,000 cm². Always check which unit the question wants.']
  ],
  variations: [
    ['Plane figures', 'Rectangle, triangle, circle.', '12 × 8'],
    ['Paths and borders', 'Outer minus inner.', '40 × 30 park'],
    ['Solids', 'Volume and surface area.', 'Cuboid 10 × 8 × 5'],
    ['Percentage change', 'Scaling.', 'Radius up 10%'],
    ['Unit conversion', 'Litres and cubic metres.', '5 × 4 × 3 m tank']
  ],
  examples: [
    {
      title: 'Path around a park',
      q: 'A rectangular park is 40 m long and 30 m wide. A path 2 m wide runs inside along its boundary. Find the area of the path.',
      given: ['Park 40 × 30', 'Path width 2 m'],
      concept: 'Area of path = outer − inner.',
      steps: [['Outer', '40 × 30 = 1200 m².'], ['Inner', '(40 − 4) × (30 − 4) = 36 × 26 = 936 m².'], ['Path', '1200 − 936 = 264 m².']],
      ans: '264 m²', why: 'The path takes 2 m from each side, so the inner rectangle loses 4 m in each dimension.', trap: 'Subtracting 2 m only once.'
    },
    {
      title: 'Cylinder volume',
      q: 'Find the volume of a cylinder with radius 7 cm and height 10 cm. (Use π = 22/7.)',
      given: ['r = 7', 'h = 10'],
      concept: 'V = πr²h.',
      steps: [['Substitute', '(22/7) × 7 × 7 × 10.'], ['Compute', '22 × 7 × 10 = 1540 cm³.']],
      ans: '1540 cm³', why: 'Base area 154 cm² times height 10 cm.', trap: 'Using diameter for r.'
    },
    {
      title: 'Percentage change in radius',
      q: 'The radius of a circle is increased by 10%. By what percentage does its area increase?',
      given: ['r × 1.1'],
      concept: 'Area ∝ r².',
      steps: [['New area', 'π(1.1r)² = 1.21πr².'], ['Increase', '21%.']],
      ans: '21%', why: 'Area scales with the square of the radius.', trap: 'Saying 10%.'
    }
  ],
  shortcut: {
    title: 'Scale factor',
    trad: 'Recompute the whole figure after each change.',
    fast: 'Use k for lengths, k² for areas and k³ for volumes; for circles with r = 7k use π = 22/7.',
    rules: ['Area unit²; volume unit³.', '1 m³ = 1000 L.', 'Path = outer − inner.', 'π = 22/7 for multiples of 7.']
  },
  mistakes: [
    ['Wrong formula', 'Using πr for area.', 'Area is πr².'],
    ['Radius vs diameter', 'Using d for r.', 'r = d/2.'],
    ['Wrong unit', 'Giving cm instead of cm².', 'Check units.'],
    ['Missing the second side of a path', 'Reducing by the width once.', 'A path takes the width twice.']
  ],
  tips: { sec: 60, elim: 'Check units and magnitude; options with wrong units can be removed.', advice: 'Memorise the solid formulas.', insight: 'Use scaling for percentage-change questions.' },
  revision: ['Rectangle, triangle, circle.', 'Cuboid, cube.', 'Cylinder, cone, sphere.', 'Scaling k, k², k³.', 'Path = outer − inner.'],
  quickFormulas: ['πr²', '2πr', 'πr²h', '4/3 πr³'],
  takeaways: ['Right formula.', 'Right units.', 'Scale factors.', 'Outer − inner.'],
  selfCheck: ['Can I find the TSA of a cuboid?', 'Can I find the area of a path?', 'Can I apply scale factors?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Area, Volume and Surface Area topic areas; examples are original.'], ['NCERT Mathematics, Class 8–9 (Mensuration)', 'Textbook', 'Areas and volumes.']]
};

const quiz = [
  easy('The area of a rectangle 12 m long and 8 m wide is (m²)', 96, [20, 40, 80], '12 × 8 = 96.'),
  easy('The perimeter of a rectangle 12 m by 8 m is (m)', 40, [20, 48, 96], '2(12 + 8) = 40.'),
  easy('The area of a square of side 9 cm is (cm²)', 81, [36, 18, 72], '9² = 81.'),
  easy('The area of a circle of radius 7 cm is (π = 22/7) (cm²)', 154, [44, 77, 308], '(22/7) × 49 = 154.'),
  easy('The area of a triangle with base 10 cm and height 6 cm is (cm²)', 30, [16, 60, 15], '½ × 10 × 6 = 30.'),
  easy('The volume of a cube of side 5 cm is (cm³)', 125, [25, 75, 150], '5³ = 125.'),

  medium('The circumference of a circle of radius 14 cm is (π = 22/7) (cm)', 88, [44, 176, 616], '2 × (22/7) × 14 = 88.'),
  medium('The area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm is (cm²)', 50, [40, 60, 100], '½ × (8 + 12) × 5 = 50.'),
  medium('The volume of a cylinder with radius 7 cm and height 10 cm is (π = 22/7) (cm³)', 1540, [440, 770, 3080], '(22/7) × 49 × 10 = 1540.'),
  medium('The volume of a sphere of radius 3 cm in terms of π is', '36π cm³', ['12π cm³', '27π cm³', '9π cm³'], '4/3 × π × 27 = 36π.'),
  medium('The total surface area of a cuboid 10 cm × 8 cm × 5 cm is (cm²)', 340, [400, 170, 280], '2(80 + 40 + 50) = 340.'),
  medium('The area of a square whose diagonal is 10 cm is (cm²)', 50, [100, 25, 70], 'Area = d²/2 = 100/2 = 50.'),
  medium('A rectangle has area 150 cm² and length 15 cm. Its perimeter is (cm)', 50, [25, 40, 60], 'Breadth = 10. Perimeter = 2(15 + 10) = 50.'),
  medium('A 2 m wide path runs inside the boundary of a 40 m × 30 m park. The area of the path is (m²)', 264, [280, 240, 300], '1200 − 36 × 26 = 1200 − 936 = 264.'),

  placement('If the radius of a circle is increased by 10%, its area increases by', '21%', ['10%', '20%', '22%'], '1.1² = 1.21.'),
  placement('The volume of a cone with radius 3 cm and height 7 cm is (π = 22/7) (cm³)', 66, [198, 22, 132], '⅓ × (22/7) × 9 × 7 = 66.'),
  placement('The curved surface area of a cylinder with radius 7 cm and height 10 cm is (π = 22/7) (cm²)', 440, [220, 880, 1540], '2 × (22/7) × 7 × 10 = 440.'),
  placement('A tank measures 5 m × 4 m × 3 m. Its capacity in litres is', 60000, [6000, 600, 120000], '60 m³ = 60,000 litres.'),
  placement('The volume of a cube is 216 cm³. Its total surface area is (cm²)', 216, [36, 144, 324], 'Side = 6. TSA = 6 × 36 = 216.'),
  placement('The circumference of a circle is 44 cm. Its area is (π = 22/7) (cm²)', 154, [77, 308, 44], 'r = 7, area = 154.')
];
build(chapter, quiz);
