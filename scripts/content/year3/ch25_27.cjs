const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const r2 = x => Math.round(x * 100) / 100;

// ---------------- Chapter 25 ----------------
const ch25 = C({
  n: 25, id: 'y3-quant-adv-mensuration-3d', cat: 'quant', title: 'Advanced Mensuration — 3D Solids',
  tag: 'Volume and surface area of cubes, cuboids, cylinders, cones, spheres, melting and recasting',
  url: 'https://www.indiabix.com/aptitude/volume-and-surface-area/',
  over: 'Solid shapes are measured by volume (space inside) and surface area (outer covering). This chapter covers cubes, cuboids, cylinders, cones, spheres and hemispheres, the slant height of a cone, and the idea that melting one solid and recasting it into another keeps the volume unchanged. Water-flow and painting-cost questions are built on the same formulas.',
  place: 'Volume and surface-area questions are staples of aptitude papers, usually as melting-and-recasting or cost-of-painting problems.',
  real: 'Tank capacity, packaging, pipe flow and material costing all depend on solid measures.',
  obj: ['Recall volume and surface area formulas', 'Compute the slant height of a cone', 'Solve melting and recasting problems', 'Find the number of smaller solids from a bigger one', 'Calculate costs of painting and filling'],
  pre: ['Geometry and Mensuration', 'Ratio and Proportion'],
  refresh: 'Volume is measured in cubic units, area in square units. Use π = 22/7 unless a calculator value is given.',
  defs: [
    'Cube of side a: volume a³, total surface area 6a², diagonal a√3.',
    'Cuboid l × b × h: volume lbh, surface area 2(lb + bh + hl), diagonal √(l² + b² + h²).',
    'Cylinder: volume πr²h, curved area 2πrh, total area 2πr(r + h).',
    'Cone: volume ⅓πr²h, slant height l = √(r² + h²), curved area πrl, total area πr(r + l).',
    'Sphere: volume 4/3 πr³, area 4πr². Hemisphere: volume 2/3 πr³, total area 3πr².'
  ],
  intu: 'Volume scales with the cube of the length and area with the square. Doubling the radius of a sphere multiplies its volume by 8 and its surface by 4.',
  mental: 'Write the formula, put the numbers in, and cancel π and 7 before multiplying. For recasting, equate the volumes and cancel π.',
  formulas: [
    ['Cylinder', 'V = πr²h; CSA = 2πrh', 'Radius r, height h.', 'Tanks, pipes.', 'r = 7, h = 10: V = 1540'],
    ['Cone', 'V = ⅓πr²h; l = √(r² + h²)', 'Slant height l.', 'Cones.', 'r = 6, h = 8: l = 10'],
    ['Sphere', 'V = 4/3 πr³; A = 4πr²', 'Radius r.', 'Balls.', 'r = 3: V = 36π'],
    ['Recasting', 'V₁ = V₂', 'No loss.', 'Melting problems.', 'Sphere → small spheres'],
    ['Scaling', 'Area × k², volume × k³', 'Similar solids.', 'Resizing.', 'k = 2: area ×4, volume ×8']
  ],
  narr: [
    'A cylinder of radius 7 cm and height 10 cm has volume (22/7) × 49 × 10 = 1540 cm³ and curved surface area 2 × (22/7) × 7 × 10 = 440 cm².',
    'A cone of radius 6 cm and height 8 cm has slant height √(36 + 64) = 10 cm, curved area (22/7) × 6 × 10 ≈ 188.6 cm², and volume ⅓ × (22/7) × 36 × 8 ≈ 301.7 cm³.',
    'Melting and recasting keep the volume equal. A solid sphere of radius 6 cm is melted into small spheres of radius 2 cm. The number is (6/2)³ = 27.',
    'A cube of side 6 cm is cut into cubes of side 2 cm. The number of small cubes is (6/2)³ = 27, and the total surface area increases from 216 cm² to 27 × 24 = 648 cm².',
    'When a solid is scaled by k, its surface area multiplies by k² and its volume by k³. If the radius of a sphere increases by 50% the volume becomes (3/2)³ = 27/8 of the original, a rise of 237.5%.'
  ],
  deep: [['Water flow', 'Volume per minute = cross-section area × speed. A pipe of radius 7 cm with water at 5 m/s delivers π × 49 × 500 cm³ per second.'], ['Hollow cylinder', 'Volume = π h (R² − r²).']],
  vars: [['Volume and area', 'Formula substitution.', 'Cylinder'], ['Slant height', 'Pythagoras.', 'Cone'], ['Recasting', 'Equate volumes.', 'Sphere into spheres'], ['Cutting a cube', 'Count and area change.', '6 cm into 2 cm'], ['Scaling', 'k² and k³.', 'Radius +50%']],
  ex: [
    { t: 'Recasting', q: 'A solid metallic sphere of radius 6 cm is melted and recast into small spheres of radius 2 cm. How many spheres are formed?', g: ['R = 6', 'r = 2'], c: 'Equal volumes.', s: [['Volumes', '4/3 π 6³ = n × 4/3 π 2³.'], ['Cancel', 'n = 216/8 = 27.']], a: '27', w: 'The ratio of radii is 3, so the ratio of volumes is 27.', tr: 'Dividing 6 by 2 only.' },
    { t: 'Cone', q: 'A cone has base radius 6 cm and height 8 cm. Find its slant height and volume (use π = 22/7).', g: ['r = 6', 'h = 8'], c: 'Pythagoras and ⅓πr²h.', s: [['Slant height', '√(36 + 64) = 10 cm.'], ['Volume', '⅓ × 22/7 × 36 × 8 = 2112/7 ≈ 301.71 cm³.']], a: '10 cm and ≈ 301.7 cm³', w: 'Cone volume is a third of the cylinder of the same base and height.', tr: 'Using the slant height as h.' },
    { t: 'Painting cost', q: 'A cuboid is 5 m long, 4 m wide and 3 m high. What does it cost to paint its four walls at ₹10 per m²?', g: ['5 × 4 × 3', '₹10 per m²'], c: 'Lateral surface area.', s: [['Walls', '2(l + b)h = 2 × 9 × 3 = 54 m².'], ['Cost', '54 × 10 = ₹540.']], a: '₹540', w: 'Floor and ceiling are excluded.', tr: 'Using total surface area.' }
  ],
  short: { title: 'Cancel π first', trad: 'Multiply out fully.', fast: 'Equate volumes, cancel π and common factors, then take cube roots or ratios.', rules: ['Recasting: V₁ = V₂.', 'Scaling: k² and k³.', 'Cone: find l first.', 'Walls exclude floor and ceiling.'] },
  mist: [['Using h for slant height', 'Wrong value in πrl.', 'Compute l = √(r² + h²).'], ['Using diameter as radius', 'Doubling errors.', 'Halve the diameter.'], ['Adding floor and ceiling to wall area', 'Wrong surface.', 'Read the question carefully.']],
  tips: { sec: 80, elim: 'Volume answers scale by the cube of the length ratio.', adv: 'Use 22/7 only when radii are multiples of 7.', ins: 'Cancel before multiplying.' },
  rev: ['Standard formulas.', 'Slant height.', 'Recasting.', 'Scaling.', 'Cost of painting.'],
  qf: ['πr²h', '⅓πr²h', '4/3 πr³'],
  take: ['Equate volumes.', 'Find l.', 'Check the units.', 'Cancel π.'],
  self: ['Can I solve a recasting problem?', 'Can I find a cone\'s slant height?', 'Can I compute painting costs?']
});
const q25 = [
  easy('The volume of a cube of side 5 cm (cm³) is', 125, [25, 150, 75], '5³ = 125.'),
  easy('The total surface area of a cube of side 4 cm (cm²) is', 96, [64, 48, 16], '6 × 16 = 96.'),
  easy('The volume of a cuboid 5 m × 4 m × 3 m (m³) is', 60, [47, 12, 94], '5 × 4 × 3 = 60.'),
  easy('The volume of a cylinder with radius 7 cm and height 10 cm (cm³) is', 1540, [440, 154, 4620], '22/7 × 49 × 10 = 1540.'),
  easy('The slant height of a cone with radius 6 cm and height 8 cm (cm) is', 10, [14, 7, 12], '√(36 + 64) = 10.'),
  easy('The curved surface area of a cylinder with r = 7 cm and h = 10 cm (cm²) is', 440, [1540, 220, 308], '2 × 22/7 × 7 × 10 = 440.'),

  medium('A sphere of radius 6 cm is melted into small spheres of radius 2 cm. The number of spheres is', 27, [9, 36, 54], '(6/2)³ = 27.'),
  medium('A cube of side 6 cm is cut into cubes of side 2 cm. The number of cubes is', 27, [9, 18, 36], '(6/2)³ = 27.'),
  medium('The volume of a cone with r = 6 cm and h = 8 cm (π = 22/7) (cm³) is approximately', 301.71, [904.6, 150.9, 226.3], '⅓ × 22/7 × 36 × 8 = 2112/7 ≈ 301.71.'),
  medium('The cost of painting the four walls of a room 5 m × 4 m × 3 m at ₹10 per m² (in ₹) is', 540, [600, 740, 270], '2(5 + 4) × 3 × 10 = 540.'),
  medium('If the radius of a sphere is doubled, its volume becomes', '8 times', ['2 times', '4 times', '6 times'], 'Volume scales with the cube: 2³ = 8.'),
  medium('The total surface area of a hemisphere of radius 7 cm (cm²) is', 462, [308, 616, 154], '3πr² = 3 × 22/7 × 49 = 462.'),
  medium('The volume of a hollow cylinder with outer radius 5 cm, inner radius 3 cm and height 7 cm (π = 22/7) (cm³) is', 352, [176, 550, 704], 'π × 7 × (25 − 9) = 22 × 16 = 352.'),
  medium('The diagonal of a cube of side 6 cm (cm) is', r2(6 * Math.sqrt(3)), [6, 9, 10.2 + 0.3], 'a√3 = 6√3 ≈ 10.39.'),

  placement('A cylindrical tank has radius 7 m and height 10 m. How many litres can it hold? (1 m³ = 1000 L)', 1540000, [154000, 440000, 15400000], 'V = 22/7 × 49 × 10 = 1540 m³ = 1,540,000 L.'),
  placement('A solid cylinder of radius 3 cm and height 8 cm is melted and recast into a sphere. The radius of the sphere (cm) is', r2(Math.cbrt(54)), [3, 6, 4.5], '4/3 r³ = 72 gives r³ = 54, so r ≈ 3.78.'),
  placement('If the radius of a sphere increases by 50%, its volume increases by', '237.5%', ['125%', '150%', '337.5%'], '(3/2)³ = 27/8, an increase of 19/8 = 237.5%.'),
  placement('A rectangular tank is 10 m × 6 m × 4 m. Water is poured at 2 m³ per minute. The time to fill the tank (minutes) is', 120, [60, 100, 240], '240/2 = 120.'),
  placement('A cube of side 6 cm is painted and cut into 27 cubes of side 2 cm. How many small cubes have exactly one face painted?', 6, [8, 12, 1], 'Face centres: one per face, so 6 cubes.'),
  placement('The ratio of the volumes of a cone, a hemisphere and a cylinder with equal radii and heights equal to the radius is', '1 : 2 : 3', ['1 : 3 : 2', '2 : 3 : 1', '1 : 2 : 4'], 'With h = r: ⅓πr³ : ⅔πr³ : πr³ = 1 : 2 : 3.')
];
build(ch25, q25);

// ---------------- Chapter 26 ----------------
const ch26 = C({
  n: 26, id: 'y3-quant-clocks', cat: 'quant', title: 'Clocks',
  tag: 'Angle between hands, overlaps, right angles, mirror images and faulty clocks',
  url: 'https://www.indiabix.com/aptitude/clock/',
  over: 'A clock is a circle with 12 hours or 60 minute marks. The minute hand moves 6° per minute and the hour hand 0.5° per minute, so the minute hand gains 5.5° per minute on the hour hand. This chapter uses that relative speed to find the angle between the hands, the times at which they overlap or are at right angles or opposite, and the effect of a clock that gains or loses time.',
  place: 'Clock problems are common as short questions in company aptitude tests, often with a direct formula.',
  real: 'Scheduling, shift timings and the design of analogue instruments use this angular reasoning.',
  obj: ['Compute the angle between the hands at any time', 'Find overlap, right-angle and opposite times', 'Count how often the hands meet in 12 or 24 hours', 'Handle mirror images and faulty clocks', 'Use relative speed 5.5° per minute'],
  pre: ['Relative Speed', 'Time and Distance'],
  refresh: 'A full circle is 360°. The minute hand makes 360° in 60 minutes and the hour hand in 12 hours.',
  defs: [
    'Minute hand speed: 6° per minute.',
    'Hour hand speed: 0.5° per minute.',
    'Relative speed of the minute hand over the hour hand: 5.5° per minute.',
    'Angle at h hours m minutes: |30h − 5.5m|, reduced to at most 180°.',
    'Hands overlap 11 times in 12 hours and 22 times in 24 hours.'
  ],
  intu: 'The clock is a two-runner circular race: the minute hand laps the hour hand once every 65 5/11 minutes, which is why overlaps are not at exact minutes after 12:00.',
  mental: 'Convert the time to the angles of each hand from 12, subtract, and take the smaller angle. For meeting times, divide the required angle gap by 5.5.',
  formulas: [
    ['Angle', 'θ = |30h − 5.5m|', 'Time h:m.', 'Angle at a time.', '3:20 → |90 − 110| = 20°'],
    ['Overlap', 'm = (60/11) × h', 'h = hour before overlap.', 'Hands together.', '4:21 9/11'],
    ['Right angle', 'm = (60h ± 180)/11', 'Gap 90°.', 'Hands perpendicular.', '3:00'],
    ['Opposite', 'Gap 180°', 'Straight line.', 'Hands opposite.', '6:00'],
    ['Gain/loss', 'Correct time = shown time × (true minutes / shown minutes)', 'Faulty clock.', 'Gain-lose.', 'Loses 5 min/hr']
  ],
  narr: [
    'At 3:20 the hour hand is at 3 × 30 + 20 × 0.5 = 100° and the minute hand at 20 × 6 = 120°, so the angle is 20°. The formula |30 × 3 − 5.5 × 20| = |90 − 110| = 20° gives the same.',
    'To find when the hands overlap after 4:00, at 4:00 the minute hand is 120° behind. It gains 5.5° per minute, so it takes 120/5.5 = 21 9/11 minutes: the hands overlap at 4:21 9/11.',
    'In 12 hours the hands overlap 11 times (not 12, because the 11th and 12th overlaps coincide at 12:00). In 24 hours they overlap 22 times, and they are at right angles 44 times.',
    'For a mirror image, subtract the time from 12:00 (or 11:60). The mirror image of 4:20 is 7:40.',
    'A clock that loses 5 minutes per hour shows 55 minutes for each true hour. If it is set right at noon and shows 3 p.m., the true time is 3 × 60/55 hours after noon, about 3:16 p.m.'
  ],
  deep: [['Time between overlaps', 'The hands meet every 12/11 hours, which is 65 5/11 minutes.'], ['Right angle times', 'In each hour the hands are at right angles twice, except at some points where the two instants merge to 3:00 and 9:00.']],
  vars: [['Angle at a time', '|30h − 5.5m|.', '3:20'], ['Overlap time', '60h/11.', '4:21 9/11'], ['Counting meetings', '11 in 12 h.', '24 hours'], ['Mirror image', '12:00 minus time.', '4:20 → 7:40'], ['Faulty clock', 'Ratio of rates.', 'Loses 5 min/hr']],
  ex: [
    { t: 'Angle at a time', q: 'Find the angle between the hands at 7:30.', g: ['7:30'], c: '|30h − 5.5m|.', s: [['Hour hand', '7 × 30 + 15 = 225°.'], ['Minute hand', '180°.'], ['Angle', '225 − 180 = 45°.']], a: '45°', w: '|210 − 165| = 45°.', tr: 'Forgetting the movement of the hour hand.' },
    { t: 'Overlap', q: 'At what time after 5:00 do the hands first overlap?', g: ['5:00'], c: 'Gap 150°.', s: [['Gap', 'At 5:00 the hour hand is 150° ahead of the minute hand.'], ['Time', '150/5.5 = 300/11 = 27 3/11 minutes.']], a: '5:27 3/11', w: 'm = (60/11) × 5 = 27 3/11.', tr: 'Taking 25 minutes.' },
    { t: 'Mirror image', q: 'What is the mirror image of 4:20?', g: ['4:20'], c: 'Subtract from 12:00.', s: [['Write 12:00 as 11:60', 'The mirror image of a time is found by subtracting it from 12:00.'], ['Subtract', '11:60 − 4:20 = 7:40.']], a: '7:40', w: 'The clock face reverses left and right.', tr: 'Writing 8:40.' }
  ],
  short: { title: '5.5 per minute', trad: 'Count minute marks.', fast: 'Angle = |30h − 5.5m|; time for a gap = gap/5.5 minutes.', rules: ['Minute hand 6°/min.', 'Hour hand 0.5°/min.', '11 overlaps in 12 h.', 'Mirror: 12:00 − time.'] },
  mist: [['Ignoring the hour hand movement', 'Using 30h.', 'Add 0.5° per minute.'], ['Giving the reflex angle', 'Over 180°.', 'Use 360° minus the angle.'], ['12 overlaps in 12 h', 'Counting 12:00 twice.', 'There are 11.']],
  tips: { sec: 60, elim: 'The angle must be at most 180°.', adv: 'Use 5.5 as relative speed.', ins: 'Overlap times are multiples of 60/11 minutes.' },
  rev: ['Angle formula.', 'Overlap time.', 'Counts in 12/24 hours.', 'Mirror image.', 'Faulty clocks.'],
  qf: ['|30h − 5.5m|', '65 5/11 minutes'],
  take: ['Use 5.5.', 'Reduce to ≤ 180°.', '11 overlaps.', 'Mirror image rule.'],
  self: ['Can I find the angle at a time?', 'Can I find an overlap time?', 'Can I handle a faulty clock?']
});
const angle = (h, m) => { const a = Math.abs(30 * h - 5.5 * m); return a > 180 ? 360 - a : a; };
const q26 = [
  easy('The angle moved by the minute hand in 1 minute is', '6°', ['0.5°', '5.5°', '12°'], '360°/60 = 6°.'),
  easy('The angle moved by the hour hand in 1 minute is', '0.5°', ['6°', '1°', '5.5°'], '30° per hour = 0.5° per minute.'),
  easy('The angle between the hands at 3:00 is', '90°', ['60°', '120°', '180°'], '3 × 30° = 90°.'),
  easy('The angle between the hands at 6:00 is', '180°', ['90°', '150°', '120°'], '6 × 30° = 180°.'),
  easy('The number of times the hands overlap in 12 hours is', 11, [12, 10, 22], 'The hands overlap 11 times in 12 hours.'),
  easy('The number of times the hands overlap in 24 hours is', 22, [24, 23, 44], 'Twice the 12-hour count: 22.'),

  medium('The angle between the hands at 3:20 is', angle(3, 20) + '°', ['0°', '30°', '40°'], '|90 − 110| = 20°.'),
  medium('The angle between the hands at 7:30 is', angle(7, 30) + '°', ['30°', '60°', '75°'], '|210 − 165| = 45°.'),
  medium('The angle between the hands at 10:10 is', angle(10, 10) + '°', ['60°', '90°', '120°'], '|300 − 55| = 245°, so the smaller angle is 360° − 245° = 115°.'),
  medium('After 5:00 the hands first overlap at', '5:27 3/11', ['5:25', '5:26 1/2', '5:28 5/11'], '150/5.5 = 27 3/11 minutes.'),
  medium('The mirror image of the time 4:20 is', '7:40', ['8:40', '7:20', '8:20'], '11:60 − 4:20 = 7:40.'),
  medium('The hands of a clock overlap every (minutes)', '65 5/11', ['60', '64 6/11', '66'], '720/11 = 65 5/11 minutes.'),
  medium('The number of times the hands are at right angles in 12 hours is', 22, [24, 20, 11], 'In 12 hours the minute hand gains 11 full turns on the hour hand and is at 90° twice per turn, so 22 times.'),
  medium('At what time between 4 and 5 are the hands opposite each other?', '4:54 6/11', ['4:50', '4:55', '4:53 7/11'], 'At 4:00 the minute hand is 120° behind the hour hand. To be 180° ahead of it, it must gain 300°, taking 300/5.5 = 54 6/11 minutes, so the time is 4:54 6/11.'),

  placement('A clock loses 5 minutes every hour. It is set right at 12 noon. The true time when it shows 3 p.m. is closest to', '3:16 p.m.', ['3:15 p.m.', '3:20 p.m.', '3:10 p.m.'], 'The clock runs at 55/60 of the true rate, so true elapsed time = 180 × 60/55 ≈ 196 minutes, about 3:16 p.m.'),
  placement('The reflex-free angle between the hands at 2:40 is', angle(2, 40) + '°', ['140°', '160°', '180°'], '|60 − 220| = 160°.'),
  placement('How many times in a day (24 hours) are the hands of a clock in a straight line (opposite)?', 22, [24, 44, 11], 'They are opposite 11 times in 12 hours, so 22 times in 24 hours.'),
  placement('The time between 8 and 9 when the hands are together is', '8:43 7/11', ['8:40', '8:44', '8:42 3/11'], 'm = (60/11) × 8 = 43 7/11.'),
  placement('A watch gains 2 minutes every hour. It is set right at 6 a.m. At what true time will it show 6 p.m.?', 'about 5:37 p.m.', ['6:00 p.m.', '5:52 p.m.', '5:15 p.m.'], 'The watch runs at 62/60 of the true rate, so the true elapsed time is 720 × 60/62 ≈ 696.8 minutes ≈ 11 h 37 min, which is about 5:37 p.m.'),
  placement('The hands of a clock are at right angles at', '3:00', ['4:00', '5:00', '6:00'], 'At 3:00 the hour hand is at 90° and the minute hand at 0°, so the angle is 90°.')
];
build(ch26, q26);

// ---------------- Chapter 27 ----------------
const ch27 = C({
  n: 27, id: 'y3-quant-calendars', cat: 'quant', title: 'Calendars',
  tag: 'Odd days, leap years, day of the week for any date and repeating calendars',
  url: 'https://www.indiabix.com/aptitude/calendar/',
  over: 'A calendar problem asks for the day of the week on a given date or the year in which a calendar repeats. The key idea is odd days: the remainder when the number of days is divided by 7. An ordinary year has 1 odd day and a leap year has 2. Century rules give 0 odd days for 400 years, which lets any date be handled by splitting the years.',
  place: 'Calendar questions are common short questions in company aptitude papers and need only careful counting.',
  real: 'Scheduling, payroll cycles, and software date libraries use the same arithmetic.',
  obj: ['Compute odd days for years, months and centuries', 'Identify leap years correctly', 'Find the day of the week for a date', 'Find when a calendar repeats', 'Count a given weekday in a month or year'],
  pre: ['Number System', 'Remainder Theorems'],
  refresh: 'There are 7 days in a week. The remainder after dividing days by 7 shifts the weekday.',
  defs: [
    'Odd days: remainder when days are divided by 7.',
    'Leap year: divisible by 4; for century years, divisible by 400.',
    'Ordinary year: 365 days (1 odd day). Leap year: 366 days (2 odd days).',
    '100 years have 5 odd days, 200 years 3, 300 years 1, and 400 years 0 odd days.',
    'Odd days of months: Jan 3, Feb 0 (ordinary) or 1 (leap), Mar 3, Apr 2, May 3, Jun 2, Jul 3, Aug 3, Sep 2, Oct 3, Nov 2, Dec 3.'
  ],
  intu: 'Each ordinary year shifts the weekday of a date by one day, each leap year by two. Count the shifts and take the remainder by 7.',
  mental: 'Count complete centuries, then complete years in the century (with their leap years), then the days of the partial year, add the odd days, and reduce modulo 7.',
  formulas: [
    ['Ordinary year', '1 odd day', '365 days.', 'Normal years.', '365 = 52 × 7 + 1'],
    ['Leap year', '2 odd days', '366 days.', 'Leap years.', '366 = 52 × 7 + 2'],
    ['Century odd days', '100: 5, 200: 3, 300: 1, 400: 0', 'Complete centuries.', 'Large spans.', '1600, 2000 are leap'],
    ['Day mapping', '0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat', 'Odd days from a base.', 'Final step.', '3 odd days after Sunday is Wednesday'],
    ['Leap count', 'floor(years/4) − floor(years/100) + floor(years/400)', 'Years from 1 AD.', 'Leap years in a span.', '1600–1999: 97']
  ],
  narr: [
    'In a year of 365 days, 365 = 52 weeks + 1 day, so a date falls one weekday later next year. In a leap year it falls two weekdays later.',
    'Century odd days follow from 100 years = 76 ordinary + 24 leap years = 76 + 48 = 124 odd days, and 124 mod 7 = 5. So 100 years have 5 odd days, 200 years have 3, 300 years have 1 and 400 years have 0.',
    'To find the day of 15 August 1947: the years up to 1900 have 1600 + 300 years, which give 0 + 1 = 1 odd day. In 1901–1946 there are 46 years with 11 leap years, so the odd days are 46 + 11 = 57, which leaves 1. From 1 January to 15 August 1947: 31 + 28 + 31 + 30 + 31 + 30 + 31 + 15 = 227 days, giving 3 odd days. Total 1 + 1 + 3 = 5, which is Friday.',
    'A calendar repeats when the number of odd days between the two years is 0 and the leap pattern matches. Calendars of 2017 and 2023 are the same (both ordinary, 6 years with 1 leap year gives 6 + 1 = 7 odd days).',
    'The maximum number of Sundays in a year is 53; an ordinary year has 53 Sundays only if it starts on a Sunday, and a leap year if it starts on Saturday or Sunday.'
  ],
  deep: [['Quick year shift', 'Moving forward n years in the same century shifts the day by n plus the number of leap years crossed.'], ['Century years', 'Only century years divisible by 400 are leap years; 1900 was not and 2000 was.']],
  vars: [['Day of a date', 'Odd days.', '15 Aug 1947'], ['Calendar repeat', 'Total odd days 0.', '2017 and 2023'], ['Counting weekdays', 'Weeks plus extra days.', 'Sundays in a month'], ['Leap years', 'Divisibility rule.', '1900, 2000'], ['Day shift', 'Years plus leaps.', 'Next year']],
  ex: [
    { t: 'Day of a date', q: 'What day of the week was 26 January 1950?', g: ['26 Jan 1950'], c: 'Odd days.', s: [['Years up to 1900', '1600 years 0 and 300 years 1, total 1 odd day.'], ['1901–1949', '49 years with 12 leap years: 49 + 12 = 61, giving 5 odd days.'], ['26 days of January', '26 mod 7 = 5.'], ['Total', '1 + 5 + 5 = 11, which leaves 4: Thursday.']], a: 'Thursday', w: 'Reference: 26 Jan 1950 was a Thursday.', tr: 'Counting 1900 as a leap year.' },
    { t: 'Calendar repeat', q: 'Is the calendar of 2018 the same as 2029?', g: ['2018 to 2029'], c: 'Odd days between.', s: [['Years 2018–2028', '11 years with leap years 2020, 2024 and 2028: 3.'], ['Odd days', '11 + 3 = 14, which is 0 mod 7.'], ['Both ordinary', '2018 and 2029 are both ordinary years.']], a: 'Yes', w: 'The weekday pattern matches exactly.', tr: 'Not counting leap years.' },
    { t: 'Counting Sundays', q: 'A month of 30 days starts on Saturday. How many Sundays does it have?', g: ['30 days', 'Starts Saturday'], c: 'Weeks plus extra.', s: [['Weeks', '30 = 4 × 7 + 2.'], ['Extra days', 'The two extra days are Saturday and Sunday.'], ['Sundays', '4 + 1 = 5.']], a: '5', w: 'The extra days follow the first day.', tr: 'Assuming 4 Sundays always.' }
  ],
  short: { title: 'Odd days sum', trad: 'Count every day.', fast: 'Break the span into 400-year (0), 100 (5), 4-year groups, add the odd days and take the remainder by 7.', rules: ['Leap year: 2 odd days.', '400 years: 0.', '1900 is not a leap year.', 'Add the odd days of months.'] },
  mist: [['Treating 1900 as a leap year', 'Century rule.', 'Century years need divisibility by 400.'], ['Counting the target year as full', 'Including extra days.', 'Use only elapsed months.'], ['Forgetting the leap day', 'Skipping 29 Feb.', 'Check the year first.']],
  tips: { sec: 60, elim: 'The answer day is fixed by odd days mod 7.', adv: 'Anchor to a known date.', ins: 'Repeating calendars need equal odd days and leap pattern.' },
  rev: ['Odd days.', 'Leap rule.', 'Century odd days.', 'Repeat condition.', 'Counting weekdays.'],
  qf: ['365 = 52w + 1', '366 = 52w + 2', '400 years: 0'],
  take: ['Odd days mod 7.', 'Check leap years.', 'Anchor dates.', 'Count extra days.'],
  self: ['Can I find the day of any date?', 'Can I check a leap year?', 'Can I decide if calendars repeat?']
});
const q27 = [
  easy('The number of odd days in an ordinary year is', 1, [0, 2, 3], '365 = 52 × 7 + 1.'),
  easy('The number of odd days in a leap year is', 2, [1, 0, 3], '366 = 52 × 7 + 2.'),
  easy('Which of these is a leap year?', '2000', ['1900', '2100', '2023'], '2000 is divisible by 400, so it is a leap year.'),
  easy('The number of odd days in 100 years is', 5, [3, 1, 0], '76 ordinary + 24 leap years give 76 + 48 = 124 = 17 × 7 + 5.'),
  easy('The number of odd days in 400 years is', 0, [1, 3, 5], '400 years have 0 odd days.'),
  easy('If today is Monday, the day after 9 days is', 'Wednesday', ['Tuesday', 'Thursday', 'Friday'], '9 mod 7 = 2, and Monday + 2 = Wednesday.'),

  medium('The day of the week on 26 January 1950 was', 'Thursday', ['Wednesday', 'Friday', 'Saturday'], '1 + 5 + 5 = 11, leaving 4, which is Thursday.'),
  medium('The day of the week on 15 August 1947 was', 'Friday', ['Thursday', 'Saturday', 'Sunday'], 'The odd days total 1 + 1 + 3 = 5, which is Friday.'),
  medium('If 1 January 2021 was a Friday, 1 January 2022 was a', 'Saturday', ['Sunday', 'Friday', 'Thursday'], '2021 is an ordinary year, so the weekday moves by one day: Saturday.'),
  medium('A month of 30 days starts on Saturday. The number of Sundays is', 5, [4, 6, 3], '30 = 4 weeks + 2 days (Saturday, Sunday), so there are 5 Sundays.'),
  medium('The calendar of 2018 is the same as that of', '2029', ['2023', '2024', '2025'], 'The odd days between 2018 and 2029 are 14 ≡ 0, and both are ordinary years.'),
  medium('How many leap years are there between 1901 and 2000 inclusive?', 25, [24, 23, 26], 'The leap years 1904, 1908, …, 2000 number (2000 − 1904)/4 + 1 = 25.'),
  medium('The number of odd days in the months January, February and March of an ordinary year is', 6, [5, 3, 4], '3 + 0 + 3 = 6.'),
  medium('If 5 March 2015 was a Thursday, the day on 5 March 2016 was', 'Saturday', ['Friday', 'Sunday', 'Thursday'], 'A leap day (29 Feb 2016) lies in between, so the shift is 2: Saturday.'),

  placement('The day of the week on 1 January 2000 was', 'Saturday', ['Friday', 'Sunday', 'Monday'], 'The 1999 complete years have 0 + 1 + 4 = 5 odd days (1600 years, 300 years, 99 years with 24 leap years). Adding 1 for 1 January gives 6, which is Saturday.'),
  placement('How many Mondays can a leap year have at most?', 53, [52, 54, 51], '366 = 52 weeks + 2 days, so at most 53 Mondays.'),
  placement('If the 4th of a month is a Monday, then the 28th of that month is a', 'Thursday', ['Monday', 'Wednesday', 'Tuesday'], 'The 28th is 24 days after the 4th, and 24 mod 7 = 3, so Monday + 3 = Thursday.'),
  placement('Which year after 2024 has the same calendar as 2024?', 2052, [2028, 2032, 2048], 'Both must be leap years; the odd days from 2024 to 2052 total 28 years + 7 leaps = 35 ≡ 0.'),
  placement('Which century year is NOT a leap year?', '2100', ['2000', '1600', '2400'], '2100 is not divisible by 400.'),
  placement('If 15 February 2020 was a Saturday, 15 February 2021 was a', 'Monday', ['Sunday', 'Tuesday', 'Saturday'], 'The span from 15 Feb 2020 to 15 Feb 2021 includes 29 Feb 2020, so it has 366 days = 2 odd days: Saturday + 2 = Monday.')
];
build(ch27, q27);
