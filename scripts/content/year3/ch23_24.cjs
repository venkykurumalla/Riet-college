const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const r2 = x => Math.round(x * 100) / 100;

// ---------------- Chapter 23 ----------------
const ch23 = C({
  n: 23, id: 'y3-quant-adv-geometry', cat: 'quant', title: 'Advanced Geometry — Circles and Polygons',
  tag: 'Chords, tangents, angle properties of circles, and interior angles and diagonals of polygons',
  url: 'https://www.indiabix.com/aptitude/area/',
  over: 'Year 2 covered triangles and basic mensuration. Year 3 focuses on the circle theorems and polygon properties that appear most often in aptitude tests: the angle at the centre and at the circumference, tangent lengths, chords and the perpendicular from the centre, cyclic quadrilaterals, and the angle sum and diagonal count of regular polygons.',
  place: 'Geometry questions in company tests are short, formula-driven problems such as tangent lengths, chord distances and polygon angles.',
  real: 'Gear design, circular tracks, architecture and map-making use circle and polygon properties.',
  obj: ['Use the angle at the centre is twice the angle at the circumference', 'Apply the tangent-length and chord-distance relations', 'Use cyclic quadrilateral properties', 'Find interior and exterior angles of regular polygons', 'Count diagonals of an n-sided polygon'],
  pre: ['Geometry and Mensuration', 'Advanced Polynomial Equations'],
  refresh: 'The sum of angles of a triangle is 180°. Pythagoras: a² + b² = c². Area of a circle πr², circumference 2πr.',
  defs: [
    'Chord: a segment joining two points of a circle. The perpendicular from the centre bisects the chord.',
    'Tangent: a line touching the circle at one point; it is perpendicular to the radius at that point.',
    'Cyclic quadrilateral: all four vertices lie on a circle; opposite angles add up to 180°.',
    'Regular polygon: all sides and all angles are equal.',
    'Exterior angles of any convex polygon add up to 360°.'
  ],
  intu: 'Circles are about symmetry around the centre. Draw the radius to every point of contact or chord end; the right triangles that appear give lengths through Pythagoras.',
  mental: 'Draw the radius and the perpendicular from the centre. Most chord and tangent questions reduce to a right triangle.',
  formulas: [
    ['Centre angle', 'Angle at centre = 2 × angle at circumference', 'Same arc.', 'Arc angles.', '40° → 80°'],
    ['Tangent length', 'PT = √(d² − r²)', 'External point at distance d.', 'Tangent from a point.', 'd = 13, r = 5: 12'],
    ['Chord distance', 'Half-chord² + distance² = r²', 'Perpendicular from centre.', 'Chord questions.', 'r = 10, chord 16: distance 6'],
    ['Cyclic quadrilateral', 'Opposite angles sum to 180°', 'Vertices on a circle.', 'Find an angle.', '70° ↔ 110°'],
    ['Regular n-gon', 'Interior = (n − 2)×180°/n; diagonals = n(n − 3)/2', 'Regular polygons.', 'Polygon questions.', 'Hexagon: 120°, 9 diagonals']
  ],
  narr: [
    'The angle that an arc subtends at the centre is twice the angle it subtends at any point on the remaining circumference. If an arc subtends 40° at the circumference, it subtends 80° at the centre.',
    'The tangent from an external point P at distance d from the centre of a circle of radius r has length √(d² − r²). For d = 13 and r = 5 the tangent length is 12. Two tangents from the same point are equal.',
    'A chord of length 16 in a circle of radius 10 is at distance √(10² − 8²) = 6 from the centre, because the perpendicular from the centre bisects the chord.',
    'In a cyclic quadrilateral opposite angles add up to 180°. If one angle is 70° the opposite angle is 110°. The exterior angle equals the interior opposite angle.',
    'A regular polygon with n sides has each interior angle (n − 2) × 180°/n and each exterior angle 360°/n. A hexagon has interior angle 120°, exterior angle 60° and 6 × 3/2 = 9 diagonals.'
  ],
  deep: [['Angle in a semicircle', 'It is always 90°, because the angle at the centre is 180°.'], ['Equal chords', 'Equal chords are equidistant from the centre and subtend equal angles at the centre.']],
  vars: [['Arc angles', 'Centre = 2 × circumference.', '40° → 80°'], ['Tangent length', '√(d² − r²).', 'd = 13, r = 5'], ['Chord distance', 'Right triangle.', 'r = 10, chord 16'], ['Cyclic quadrilateral', 'Opposite angles 180°.', '70° and 110°'], ['Polygon angles', 'Interior and exterior.', 'Hexagon']],
  ex: [
    { t: 'Tangent length', q: 'A point P is 13 cm from the centre of a circle of radius 5 cm. Find the length of the tangent from P.', g: ['d = 13', 'r = 5'], c: 'Right triangle at the point of contact.', s: [['Triangle', 'Radius is perpendicular to the tangent.'], ['Length', '√(169 − 25) = √144 = 12 cm.']], a: '12 cm', w: 'It is the 5-12-13 triple.', tr: 'Using 13 − 5.' },
    { t: 'Chord distance', q: 'A chord of length 16 cm is in a circle of radius 10 cm. Find its distance from the centre.', g: ['chord 16', 'r = 10'], c: 'Perpendicular bisects the chord.', s: [['Half-chord', '8 cm.'], ['Distance', '√(100 − 64) = 6 cm.']], a: '6 cm', w: 'It is the 6-8-10 triple.', tr: 'Using the full chord 16.' },
    { t: 'Regular polygon', q: 'Find the number of sides of a regular polygon whose each interior angle is 150°.', g: ['Interior 150°'], c: 'Exterior = 180° − interior.', s: [['Exterior', '30°.'], ['Sides', '360°/30° = 12.']], a: '12', w: 'A regular dodecagon.', tr: 'Dividing 360 by 150.' }
  ],
  short: { title: 'Right triangle in disguise', trad: 'Long theorem chains.', fast: 'Join centre to the chord end or tangent point; the right triangle gives the answer by Pythagoras.', rules: ['Perpendicular bisects a chord.', 'Radius ⟂ tangent.', 'Centre angle is double.', 'Exterior angle = 360°/n.'] },
  mist: [['Using the full chord in Pythagoras', 'Forgetting to halve.', 'Halve the chord first.'], ['Mixing interior and exterior angle', 'Wrong formula.', 'Interior + exterior = 180°.'], ['Using diagonals n(n − 3)', 'Forgetting the 2.', 'Diagonals = n(n − 3)/2.']],
  tips: { sec: 70, elim: 'Tangent length must be shorter than the distance to the centre.', adv: 'Learn the triples 3-4-5, 5-12-13, 8-15-17.', ins: 'Draw the figure with all radii first.' },
  rev: ['Centre angle.', 'Tangent length.', 'Chord distance.', 'Cyclic quadrilateral.', 'Polygon formulas.'],
  qf: ['√(d² − r²)', 'n(n − 3)/2', '(n − 2)×180/n'],
  take: ['Draw radii.', 'Halve chords.', 'Use triples.', 'Exterior angles sum 360°.'],
  self: ['Can I find a tangent length?', 'Can I find a chord distance?', 'Can I get the sides from the angle?']
});
const q23 = [
  easy('An arc subtends 40° at the circumference. It subtends at the centre an angle of', '80°', ['20°', '40°', '160°'], 'The centre angle is double: 80°.'),
  easy('The angle in a semicircle is', '90°', ['45°', '180°', '60°'], 'The angle at the centre is 180°, so the angle at the circumference is 90°.'),
  easy('Each interior angle of a regular hexagon is', '120°', ['108°', '135°', '60°'], '(6 − 2) × 180°/6 = 120°.'),
  easy('The number of diagonals of a hexagon is', 9, [6, 12, 15], 'n(n − 3)/2 = 6 × 3/2 = 9.'),
  easy('The sum of the interior angles of a pentagon is', '540°', ['360°', '720°', '450°'], '(5 − 2) × 180° = 540°.'),
  easy('In a cyclic quadrilateral one angle is 70°. The opposite angle is', '110°', ['70°', '90°', '120°'], 'Opposite angles add up to 180°, so 180° − 70° = 110°.'),

  medium('The tangent from a point 13 cm from the centre of a circle of radius 5 cm has length (cm)', 12, [8, 144, 10], '√(169 − 25) = 12.'),
  medium('A chord of length 16 cm in a circle of radius 10 cm is at a distance (cm) from the centre of', 6, [8, 4, 12], '√(100 − 64) = 6.'),
  medium('The number of sides of a regular polygon with each interior angle 150° is', 12, [10, 8, 15], 'The exterior angle is 30°, so n = 360/30 = 12.'),
  medium('The number of diagonals of a polygon with 12 sides is', 54, [66, 48, 60], '12 × 9/2 = 54.'),
  medium('Each exterior angle of a regular octagon is', '45°', ['135°', '40°', '60°'], '360°/8 = 45°.'),
  medium('Two circles of radii 5 cm and 3 cm have centres 10 cm apart. The length of the direct common tangent is (cm)', r2(Math.sqrt(100 - 4)), [8, 9.5, 10.25], '√(d² − (r₁ − r₂)²) = √(100 − 4) = √96 ≈ 9.80.'),
  medium('PA and PB are tangents from P to a circle with centre O, and angle APB = 60°. Angle AOB is', '120°', ['60°', '90°', '100°'], 'In quadrilateral OAPB, 90° + 90° + 60° + AOB = 360°, so AOB = 120°.'),
  medium('The sides of a polygon number 8. The sum of its interior angles is', '1080°', ['1440°', '720°', '1260°'], '(8 − 2) × 180° = 1080°.'),

  placement('A circle of radius 13 cm has two parallel chords of lengths 10 cm and 24 cm on opposite sides of the centre. The distance between them is (cm)', 17, [7, 12, 13], 'Distances are √(169 − 25) = 12 and √(169 − 144) = 5; on opposite sides: 12 + 5 = 17.'),
  placement('A regular polygon has 35 diagonals. Its number of sides is', 10, [9, 8, 12], 'n(n − 3)/2 = 35 gives n² − 3n − 70 = 0, so n = 10.'),
  placement('The incircle of a right triangle with sides 6, 8, 10 has radius', 2, [3, 2.5, 1.5], 'r = (a + b − c)/2 = (6 + 8 − 10)/2 = 2.'),
  placement('The circumradius of a right triangle with legs 6 and 8 is', 5, [4, 6, 10], 'The hypotenuse 10 is the diameter, so R = 5.'),
  placement('The ratio of interior to exterior angle of a regular polygon is 5 : 1. The number of sides is', 12, [10, 8, 15], 'Interior = 150°, exterior = 30°, so n = 12.'),
  placement('Two tangents from an external point to a circle of radius 6 cm are each 8 cm long. The distance of the point from the centre is (cm)', 10, [14, 12, 9], '√(36 + 64) = 10.')
];
build(ch23, q23);

// ---------------- Chapter 24 ----------------
const ch24 = C({
  n: 24, id: 'y3-quant-coordinate-geometry', cat: 'quant', title: 'Coordinate Geometry',
  tag: 'Distance, section formula, slope, equation of a line and area of a triangle from coordinates',
  url: 'https://www.indiabix.com/aptitude/area/',
  over: 'Coordinate geometry places points on a grid so that geometric questions become algebra. This chapter covers the distance formula, midpoint and section formula, slope of a line, equations of lines, parallel and perpendicular conditions, and the area of a triangle from vertex coordinates.',
  place: 'Distance, slope and area questions are short formula problems that appear regularly in aptitude and technical rounds.',
  real: 'Maps, GPS navigation, computer graphics and CAD all use coordinates.',
  obj: ['Use the distance and midpoint formulas', 'Apply the section formula', 'Find slopes and equations of lines', 'Use conditions for parallel and perpendicular lines', 'Find the area of a triangle and test collinearity'],
  pre: ['Advanced Geometry', 'Linear Equations'],
  refresh: 'The point (x, y) lies x units along the horizontal axis and y units along the vertical axis. The slope measures steepness.',
  defs: [
    'Distance between (x₁, y₁) and (x₂, y₂): √[(x₂ − x₁)² + (y₂ − y₁)²].',
    'Midpoint: ((x₁ + x₂)/2, (y₁ + y₂)/2).',
    'Slope m = (y₂ − y₁)/(x₂ − x₁).',
    'Line: y = mx + c, or y − y₁ = m(x − x₁).',
    'Parallel lines: m₁ = m₂. Perpendicular lines: m₁ m₂ = −1.'
  ],
  intu: 'The distance formula is Pythagoras on the horizontal and vertical differences. Slope is rise over run.',
  mental: 'Subtract coordinates to get the horizontal and vertical differences first; every formula uses them.',
  formulas: [
    ['Distance', '√[(Δx)² + (Δy)²]', 'Two points.', 'Lengths.', '(1, 2) to (4, 6): 5'],
    ['Section formula', '((m x₂ + n x₁)/(m + n), (m y₂ + n y₁)/(m + n))', 'Divides in ratio m : n.', 'Internal division.', 'Ratio 1 : 2'],
    ['Slope', 'm = Δy/Δx', 'Two points.', 'Steepness.', '(1, 2) to (4, 6): 4/3'],
    ['Line', 'y − y₁ = m(x − x₁)', 'Point and slope.', 'Equations.', 'Through (1, 2), m = 3'],
    ['Triangle area', '½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|', 'Three vertices.', 'Area, collinearity.', '(0,0), (4,0), (0,3): 6']
  ],
  narr: [
    'To find the distance between (1, 2) and (4, 6), take Δx = 3 and Δy = 4, so the distance is √(9 + 16) = 5.',
    'The point dividing (1, 2) and (7, 8) in the ratio 1 : 2 is ((1 × 7 + 2 × 1)/3, (1 × 8 + 2 × 2)/3) = (3, 4). The midpoint is (4, 5).',
    'The slope of the line through (1, 2) and (4, 6) is 4/3. A line perpendicular to it has slope −3/4. Parallel lines have equal slopes.',
    'The line through (1, 2) with slope 3 is y − 2 = 3(x − 1), that is y = 3x − 1. The intercept form x/a + y/b = 1 gives intercepts a and b directly.',
    'The area of the triangle with vertices (0, 0), (4, 0), (0, 3) is ½ |0 + 4(3 − 0) + 0| = 6. Three points are collinear exactly when this expression is 0.'
  ],
  deep: [['Distance from a point to a line', 'The distance from (x₀, y₀) to ax + by + c = 0 is |a x₀ + b y₀ + c|/√(a² + b²).'], ['Centroid', 'The centroid of a triangle is the average of the three vertices.']],
  vars: [['Distance', 'Pythagoras.', '(1, 2), (4, 6)'], ['Section point', 'Weighted average.', 'Ratio 1 : 2'], ['Slope conditions', 'Parallel or perpendicular.', 'm₁ m₂ = −1'], ['Equation of a line', 'Point-slope.', 'y − 2 = 3(x − 1)'], ['Triangle area', 'Determinant form.', '(0,0), (4,0), (0,3)']],
  ex: [
    { t: 'Section formula', q: 'Find the point that divides the line joining (1, 2) and (7, 8) in the ratio 1 : 2.', g: ['(1, 2)', '(7, 8)', '1 : 2'], c: 'Section formula.', s: [['x', '(1 × 7 + 2 × 1)/3 = 3.'], ['y', '(1 × 8 + 2 × 2)/3 = 4.']], a: '(3, 4)', w: 'The point is one-third of the way from (1, 2).', tr: 'Using ratio 2 : 1.' },
    { t: 'Perpendicular line', q: 'Find the equation of the line through (2, 3) perpendicular to 2x + y = 5.', g: ['2x + y = 5'], c: 'Perpendicular slope.', s: [['Slope of given', 'y = −2x + 5 has slope −2.'], ['Perpendicular slope', '1/2.'], ['Equation', 'y − 3 = ½(x − 2), so x − 2y + 4 = 0.']], a: 'x − 2y + 4 = 0', w: 'Check that (2, 3) satisfies it: 2 − 6 + 4 = 0.', tr: 'Using slope 2.' },
    { t: 'Triangle area', q: 'Find the area of the triangle with vertices (1, 1), (5, 1) and (3, 6).', g: ['Three vertices'], c: 'Base and height.', s: [['Base', 'The base from (1, 1) to (5, 1) is 4.'], ['Height', 'The height is 6 − 1 = 5.'], ['Area', '½ × 4 × 5 = 10.']], a: '10 square units', w: 'The determinant formula gives the same value.', tr: 'Forgetting the ½.' }
  ],
  short: { title: 'Difference first', trad: 'Substitute directly.', fast: 'Write Δx and Δy once; distance, slope and section points all follow from them.', rules: ['Perpendicular: m₁ m₂ = −1.', 'Collinear: area 0.', 'Midpoint averages.', 'Use a horizontal base if available.'] },
  mist: [['Swapping x and y in slope', 'Using Δx/Δy.', 'Slope is Δy/Δx.'], ['Wrong order in the section formula', 'm : n assigned to the wrong end.', 'm goes with the second point.'], ['Forgetting the ½ in area', 'Dropped factor.', 'Area = ½ |…|.']],
  tips: { sec: 60, elim: 'Check that the point satisfies the line equation.', adv: 'Use the horizontal or vertical side as the base.', ins: 'Many coordinate problems are triples in disguise.' },
  rev: ['Distance.', 'Section formula.', 'Slope.', 'Line equations.', 'Triangle area.'],
  qf: ['√(Δx² + Δy²)', 'm₁ m₂ = −1', '½|Σ x(y − y)|'],
  take: ['Compute Δx, Δy.', 'Slope = rise/run.', 'Check with a point.', 'Area uses ½.'],
  self: ['Can I find the distance between two points?', 'Can I write the equation of a line?', 'Can I test collinearity?']
});
const q24 = [
  easy('The distance between (1, 2) and (4, 6) is', 5, [7, 25, 4], '√(9 + 16) = 5.'),
  easy('The midpoint of (2, 4) and (8, 10) is', '(5, 7)', ['(10, 14)', '(6, 6)', '(4, 6)'], '((2 + 8)/2, (4 + 10)/2) = (5, 7).'),
  easy('The slope of the line through (1, 2) and (3, 8) is', 3, [2, 4, 6], '(8 − 2)/(3 − 1) = 3.'),
  easy('The slope of the line y = 4x − 5 is', 4, [-5, 5, 1/4 + 3], 'In y = mx + c the slope is m = 4.'),
  easy('The distance of the point (6, 8) from the origin is', 10, [14, 100, 8], '√(36 + 64) = 10.'),
  easy('The x-intercept of the line 2x + 3y = 12 is', 6, [4, 12, 3], 'Put y = 0: 2x = 12, so x = 6.'),

  medium('The point dividing (1, 2) and (7, 8) internally in the ratio 1 : 2 is', '(3, 4)', ['(5, 6)', '(4, 5)', '(2, 3)'], '((7 + 2)/3, (8 + 4)/3) = (3, 4).'),
  medium('The slope of a line perpendicular to the line with slope 4/3 is', '−3/4', ['3/4', '4/3', '−4/3'], 'm₁ m₂ = −1 gives −3/4.'),
  medium('The area of the triangle with vertices (0, 0), (4, 0) and (0, 3) is', 6, [12, 7, 5], '½ × 4 × 3 = 6.'),
  medium('The equation of the line through (1, 2) with slope 3 is', 'y = 3x − 1', ['y = 3x + 1', 'y = 3x − 5', 'y = x + 3'], 'y − 2 = 3(x − 1) gives y = 3x − 1.'),
  medium('The area of the triangle with vertices (1, 1), (5, 1) and (3, 6) is', 10, [20, 12, 15], '½ × 4 × 5 = 10.'),
  medium('The centroid of the triangle with vertices (0, 0), (6, 0) and (0, 9) is', '(2, 3)', ['(3, 4.5)', '(6, 9)', '(2, 4)'], '((0 + 6 + 0)/3, (0 + 0 + 9)/3) = (2, 3).'),
  medium('The points (1, 2), (2, 4) and (3, k) are collinear when k equals', 6, [5, 7, 8], 'The slope between the first two is 2, so k = 2 + 2 × 2 = 6.'),
  medium('The distance from (3, 4) to the line 3x + 4y − 25 = 0 is', 0, [1, 5, 25 / 5 + 1], '9 + 16 − 25 = 0, so the point lies on the line.'),

  placement('The distance between the parallel lines y = 2x + 3 and y = 2x + 8 is', r2(5 / Math.sqrt(5)), [5, 2.5, 1.5], '|8 − 3|/√(1 + 4) = 5/√5 = √5 ≈ 2.24.'),
  placement('The line through (2, 3) perpendicular to 2x + y = 5 is', 'x − 2y + 4 = 0', ['2x − y − 1 = 0', 'x + 2y − 8 = 0', 'x − 2y − 4 = 0'], 'Slope 1/2: y − 3 = ½(x − 2), so x − 2y + 4 = 0.'),
  placement('The area of the triangle formed by the line 3x + 4y = 12 and the axes is', 6, [12, 3, 7], 'Intercepts 4 and 3 give area ½ × 4 × 3 = 6.'),
  placement('The point (x, 0) is equidistant from (1, 2) and (3, 4). Its x-coordinate is', 5, [4, 3, 2], '(x − 1)² + 4 = (x − 3)² + 16 gives 4x = 20, so x = 5.'),
  placement('The vertices of a square are (0, 0), (a, 0), (a, a), (0, a). If its diagonal is 10√2, then a equals', 10, [5, 20, 10 * Math.sqrt(2)], 'Diagonal = a√2 = 10√2, so a = 10.'),
  placement('The ratio in which the x-axis divides the line joining (2, 3) and (5, −6) is', '1 : 2', ['2 : 1', '1 : 3', '3 : 1'], 'The y-coordinate zero: (m(−6) + n(3))/(m + n) = 0 gives m : n = 1 : 2.')
];
build(ch24, q24);
