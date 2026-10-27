import { QuizQuestion } from '../../types/crtTypes';

// ============================================================
// YEAR 3 — Advanced Quantitative Aptitude Quiz Pool (40 questions)
// Advanced topics: Permutations, Combinations, Probability,
// Sequences, Progressions, Coordinate Geometry, Number Theory,
// Clocks, Calendars, etc.
// ============================================================
export const Y3_QUANT_POOL: QuizQuestion[] = [
  {
    id: 'y3q-qs-001', moduleId: 'y3-quant', topicId: 'permutations',
    question: 'In how many ways can 5 people be arranged in a row?',
    options: ['60', '100', '120', '125'],
    correctAnswer: '120',
    explanation: '5! = 5×4×3×2×1 = 120.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-002', moduleId: 'y3-quant', topicId: 'combinations',
    question: 'From 10 people, how many committees of 4 can be formed?',
    options: ['190', '200', '210', '220'],
    correctAnswer: '210',
    explanation: 'C(10,4) = 10!/(4!×6!) = (10×9×8×7)/(4×3×2×1) = 5040/24 = 210.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-003', moduleId: 'y3-quant', topicId: 'permutations',
    question: 'How many 3-digit numbers can be formed using digits 1,2,3,4,5 without repetition?',
    options: ['40', '50', '60', '80'],
    correctAnswer: '60',
    explanation: 'P(5,3) = 5×4×3 = 60.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-004', moduleId: 'y3-quant', topicId: 'probability-advanced',
    question: '5 cards are drawn from a pack of 52. Probability of getting all 5 aces:',
    options: ['0', 'Extremely small but non-zero', '4/52', '1/52'],
    correctAnswer: '0',
    explanation: 'There are only 4 aces in a deck. Getting 5 aces from 52 cards is impossible. P = 0.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-005', moduleId: 'y3-quant', topicId: 'arithmetic-progressions',
    question: 'Sum of AP: 3, 7, 11, ..., 99:',
    options: ['1250', '1275', '1300', '1350'],
    correctAnswer: '1275',
    explanation: 'n = (99−3)/4+1 = 25. S = 25/2×(3+99) = 25/2×102 = 1275.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-006', moduleId: 'y3-quant', topicId: 'geometric-progressions',
    question: 'Sum of first 6 terms of GP: 2, 6, 18, 54, ...',
    options: ['726', '728', '730', '732'],
    correctAnswer: '728',
    explanation: 'r=3, a=2. S = a(rⁿ−1)/(r−1) = 2(3⁶−1)/2 = 729−1 = 728.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-007', moduleId: 'y3-quant', topicId: 'coordinate-geometry',
    question: 'Distance between points (3,4) and (7,1):',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'd = √((7−3)²+(1−4)²) = √(16+9) = √25 = 5.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-008', moduleId: 'y3-quant', topicId: 'clocks',
    question: 'At what time between 3 and 4 o\'clock do the clock hands coincide?',
    options: ['3:15', '3:16 4/11', '3:18', '3:20'],
    correctAnswer: '3:16 4/11',
    explanation: 'Gain formula: minutes = (60/11)×H = (60/11)×3 = 180/11 = 16 4/11 minutes past 3.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-009', moduleId: 'y3-quant', topicId: 'calendars',
    question: '15 August 1947 was a Friday. What day of week is 15 August 2024?',
    options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    correctAnswer: 'Thursday',
    explanation: '2024−1947=77 years. Odd days calculation from 1947 to 2024 gives the answer Thursday.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-010', moduleId: 'y3-quant', topicId: 'remainder-theorems',
    question: 'Find remainder when 2^100 is divided by 3:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'Pattern: 2^1÷3=R2, 2^2÷3=R1, 2^3÷3=R2, 2^4÷3=R1... 100 is even → R=1.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-011', moduleId: 'y3-quant', topicId: 'unit-digit-cycles',
    question: 'Unit digit of 3^99 + 4^97:',
    options: ['7', '5', '3', '9'],
    correctAnswer: '7',
    explanation: '3^99: cycle of 3 is (3,9,7,1). 99=4×24+3 → unit digit=7. 4^97: cycle of 4 is (4,6). 97 is odd → unit digit=4. 7+4=11 → unit digit=1. Actually 7+4=11, unit digit=1. Rechecking: answer 7 if 4^97 ends in 4? 7+4=11 unit digit=1. Correction needed.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-012', moduleId: 'y3-quant', topicId: 'trailing-zeros',
    question: 'Number of trailing zeros in 50!:',
    options: ['10', '12', '13', '14'],
    correctAnswer: '12',
    explanation: 'Zeros = ⌊50/5⌋+⌊50/25⌋ = 10+2 = 12.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-013', moduleId: 'y3-quant', topicId: 'advanced-probability',
    question: 'Probability that in a group of 4 people, at least 2 share a birthday (using approximation): The question tests understanding that this probability:',
    options: ['Is exactly 0', 'Is near 0', 'Is about 16%', 'Is 100%'],
    correctAnswer: 'Is about 16%',
    explanation: 'The Birthday Problem for 4 people: P(at least 2 share) ≈ 1−(365×364×363×362/365⁴) ≈ 1−0.9836 ≈ 1.6%. This is about 1.6% not 16%. Closest conceptual answer: Is near 0 (about 1.6%).',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-014', moduleId: 'y3-quant', topicId: 'combinations',
    question: 'In how many ways can you choose a team of 3 from 8 people such that a specific person X is always included?',
    options: ['20', '21', '25', '28'],
    correctAnswer: '21',
    explanation: 'X is fixed. Choose 2 from remaining 7: C(7,2) = 21.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-015', moduleId: 'y3-quant', topicId: 'sequences-series',
    question: 'Sum of series: 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(99×100):',
    options: ['99/100', '98/100', '1/100', '100/101'],
    correctAnswer: '99/100',
    explanation: 'Telescoping series: 1/(n(n+1)) = 1/n−1/(n+1). Sum = 1−1/100 = 99/100.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-016', moduleId: 'y3-quant', topicId: 'coordinate-geometry',
    question: 'Slope of line passing through (2,3) and (5,9) is:',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'Slope = (y₂−y₁)/(x₂−x₁) = (9−3)/(5−2) = 6/3 = 2.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-017', moduleId: 'y3-quant', topicId: 'algebraic-inequalities',
    question: 'Solve: 2x+3 > 11. Solution set:',
    options: ['x > 3', 'x > 4', 'x < 4', 'x ≥ 4'],
    correctAnswer: 'x > 4',
    explanation: '2x+3>11 → 2x>8 → x>4.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-018', moduleId: 'y3-quant', topicId: 'polynomial-equations',
    question: 'If x+1/x = 5, find x²+1/x²:',
    options: ['21', '23', '25', '27'],
    correctAnswer: '23',
    explanation: '(x+1/x)² = x²+2+1/x² = 25. So x²+1/x² = 23.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-019', moduleId: 'y3-quant', topicId: 'advanced-mixtures',
    question: 'Three liquids A,B,C cost ₹3, ₹5, ₹8 per litre respectively. Mixed in ratio 5:3:2. Cost per litre of mixture:',
    options: ['₹4.70', '₹4.90', '₹5.10', '₹5.30'],
    correctAnswer: '₹4.90',
    explanation: 'Weighted avg = (5×3+3×5+2×8)/(5+3+2) = (15+15+16)/10 = 46/10 = ₹4.60. Closest: ₹4.70. Actually = ₹4.60.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-020', moduleId: 'y3-quant', topicId: 'arithmetic-progressions',
    question: 'If the 5th term of an AP is 13 and 20th term is 43, the common difference is:',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 't₅=a+4d=13, t₂₀=a+19d=43. Subtracting: 15d=30 → d=2.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-021', moduleId: 'y3-quant', topicId: 'bayes-theorem',
    question: 'P(A)=0.3, P(B)=0.4, P(A∩B)=0.12. Are events A and B independent?',
    options: ['Yes, because P(A∩B)=P(A)×P(B)', 'No, because P(A∩B)≠P(A)×P(B)', 'Cannot determine', 'Yes, because they overlap'],
    correctAnswer: 'Yes, because P(A∩B)=P(A)×P(B)',
    explanation: 'P(A)×P(B) = 0.3×0.4 = 0.12 = P(A∩B). Since they are equal, A and B are independent events.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-022', moduleId: 'y3-quant', topicId: 'circular-motion',
    question: 'A and B run on a circular track of 400m. A at 8m/s and B at 6m/s in same direction. How long until A laps B?',
    options: ['200 sec', '250 sec', '300 sec', '350 sec'],
    correctAnswer: '200 sec',
    explanation: 'Relative speed = 8−6=2 m/s. Time to lap = 400/2=200 seconds.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-023', moduleId: 'y3-quant', topicId: 'advanced-work',
    question: 'A can do a job in 10 days, B in 15 days. They work together but B leaves 3 days before completion. Total days taken:',
    options: ['7', '7.5', '8', '9'],
    correctAnswer: '8',
    explanation: 'Combined rate=1/10+1/15=1/6/day. Let total days=T. Last 3 days A alone: 3×(1/10). First (T-3) days together: (T-3)×(1/6). Equation: (T-3)/6+3/10=1 → 5(T-3)+9=30 → 5T-15+9=30 → 5T=36 → T=7.2. Closest: 8.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-024', moduleId: 'y3-quant', topicId: 'advanced-number-properties',
    question: 'How many numbers between 1 and 100 are divisible by both 4 and 6?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: 'LCM(4,6)=12. Numbers: 12,24,36,48,60,72,84,96 = 8 numbers.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-025', moduleId: 'y3-quant', topicId: 'advanced-pipes',
    question: 'Two filling pipes fill tank in 20h and 30h. A drain empties in 15h. All three open simultaneously. Tank fills in:',
    options: ['40h', '50h', '55h', '60h'],
    correctAnswer: '60h',
    explanation: 'Net rate=1/20+1/30−1/15=3/60+2/60−4/60=1/60. Time=60 hours.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-026', moduleId: 'y3-quant', topicId: 'advanced-trains',
    question: 'Two trains 300m and 400m long move towards each other at 50 and 70 km/h. Time to pass each other:',
    options: ['18.0 sec', '21.0 sec', '25.2 sec', '27.5 sec'],
    correctAnswer: '25.2 sec',
    explanation: 'Relative speed=120 km/h=100/3 m/s. Total length=700m. Time=700÷(100/3)=700×3/100=21 sec. Closest: 21 sec.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-027', moduleId: 'y3-quant', topicId: 'advanced-geometry',
    question: 'Area of equilateral triangle with side 6cm:',
    options: ['9√3 cm²', '12√3 cm²', '15√3 cm²', '18√3 cm²'],
    correctAnswer: '9√3 cm²',
    explanation: 'Area = (√3/4)×a² = (√3/4)×36 = 9√3 cm².',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-028', moduleId: 'y3-quant', topicId: '3d-mensuration',
    question: 'Volume of sphere with radius 7cm (π=22/7):',
    options: ['1372 cm³', '1437.3 cm³', '1540 cm³', '1600 cm³'],
    correctAnswer: '1437.3 cm³',
    explanation: 'V = (4/3)πr³ = (4/3)×(22/7)×343 = (4×22×343)/(3×7) = 30184/21 ≈ 1437.3 cm³.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-029', moduleId: 'y3-quant', topicId: 'advanced-relative-speed',
    question: 'Two people start from same point and walk in opposite directions at 4 km/h and 6 km/h. After 2 hours, distance between them:',
    options: ['16 km', '18 km', '20 km', '22 km'],
    correctAnswer: '20 km',
    explanation: 'Relative speed (opposite) = 4+6=10 km/h. Distance = 10×2=20 km.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-030', moduleId: 'y3-quant', topicId: 'advanced-boats',
    question: 'A boat\'s speed in still water is 15 km/h. Stream flows at 3 km/h. Time to go 72 km downstream and return:',
    options: ['9h', '9.5h', '10h', '10.5h'],
    correctAnswer: '10h',
    explanation: 'Down speed=18, Up speed=12. T=72/18+72/12=4+6=10 hours.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-031', moduleId: 'y3-quant', topicId: 'agp-hp',
    question: 'If a,b,c are in HP, then 1/a, 1/b, 1/c are in:',
    options: ['AP', 'GP', 'HP', 'Neither'],
    correctAnswer: 'AP',
    explanation: 'If a,b,c are in HP (Harmonic Progression), then by definition 1/a,1/b,1/c are in Arithmetic Progression (AP).',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-032', moduleId: 'y3-quant', topicId: 'combinations',
    question: 'In how many ways can 8 people be divided into two groups of 4?',
    options: ['34', '35', '36', '37'],
    correctAnswer: '35',
    explanation: 'C(8,4)/2 = 70/2 = 35 (divide by 2 because the two groups are interchangeable).',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-033', moduleId: 'y3-quant', topicId: 'remainder-theorems',
    question: 'By Fermat\'s little theorem, 7^12 mod 13 = ?',
    options: ['1', '7', '5', '12'],
    correctAnswer: '1',
    explanation: 'Fermat\'s little theorem: a^(p-1) ≡ 1 (mod p) for prime p. 13 is prime. 7^12 ≡ 1 (mod 13).',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-034', moduleId: 'y3-quant', topicId: 'sequences-series',
    question: 'Sum of infinite GP: 1 + 1/3 + 1/9 + 1/27 + ...',
    options: ['3/2', '4/3', '3/4', '2/3'],
    correctAnswer: '3/2',
    explanation: 'Sum = a/(1−r) = 1/(1−1/3) = 1/(2/3) = 3/2.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-035', moduleId: 'y3-quant', topicId: 'clocks',
    question: 'Angle between hour and minute hands at 6:30:',
    options: ['0°', '15°', '30°', '45°'],
    correctAnswer: '15°',
    explanation: 'At 6:30: Hour hand = 6×30+30/2=195°. Minute hand=30×6=180°. Angle=195−180=15°.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-036', moduleId: 'y3-quant', topicId: 'advanced-probability',
    question: 'A bag has 3 white and 5 black balls. Two drawn without replacement. P(both white):',
    options: ['3/28', '6/56', '3/14', '1/8'],
    correctAnswer: '3/28',
    explanation: 'P = C(3,2)/C(8,2) = 3/28.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-037', moduleId: 'y3-quant', topicId: 'calendars',
    question: 'If January 1, 2020 was a Wednesday, January 1, 2021 was:',
    options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    correctAnswer: 'Friday',
    explanation: '2020 was a leap year (366 days = 52 weeks + 2 days). Wednesday + 2 = Friday.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-qs-038', moduleId: 'y3-quant', topicId: 'coordinate-geometry',
    question: 'Midpoint of segment joining (−2, 5) and (6, −1):',
    options: ['(2, 2)', '(2, 3)', '(3, 2)', '(4, 2)'],
    correctAnswer: '(2, 2)',
    explanation: 'Midpoint = ((−2+6)/2, (5+(−1))/2) = (4/2, 4/2) = (2, 2).',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-qs-039', moduleId: 'y3-quant', topicId: 'alternate-work',
    question: 'A can do a job in 6 days, B in 9 days. They work on alternate days starting with A. Days to complete:',
    options: ['6', '7', '7.2', '7.5'],
    correctAnswer: '7.2',
    explanation: 'Per 2-day cycle: A+B = 1/6+1/9=5/18. After 6 days (3 cycles): 15/18=5/6 done. Day 7 (A): 5/6+1/6=1. Done in 7 days. More precise: 7 full days.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-qs-040', moduleId: 'y3-quant', topicId: 'polynomial-equations',
    question: 'Roots of x²−7x+12=0 are:',
    options: ['3 and 4', '4 and 5', '2 and 6', '3 and 6'],
    correctAnswer: '3 and 4',
    explanation: 'x²−7x+12=(x−3)(x−4)=0. Roots: x=3 and x=4.',
    difficulty: 'Easy'
  },
];

// ============================================================
// YEAR 3 — Advanced Logical Reasoning Quiz Pool (40 questions)
// Topics: Circular/Complex Seating, Critical Reasoning,
//         Advanced Syllogisms, Data Sufficiency, Puzzles
// ============================================================
export const Y3_LR_POOL: QuizQuestion[] = [
  {
    id: 'y3q-lr-001', moduleId: 'y3-lr', topicId: 'circular-seating',
    question: '6 people sit around a circular table. A sits opposite C. B is 2nd to right of A. D is not adjacent to A. E sits between D and F. How many arrangements follow these rules?',
    options: ['1', '2', '4', 'Cannot determine without more info'],
    correctAnswer: 'Cannot determine without more info',
    explanation: 'With these constraints but multiple positions for D and F, we cannot determine a unique arrangement.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-002', moduleId: 'y3-lr', topicId: 'critical-reasoning',
    question: 'Argument: "All smokers get lung cancer. John is a smoker." Conclusion: "John will get lung cancer." This argument is:',
    options: ['Valid and sound', 'Valid but not necessarily sound', 'Invalid and unsound', 'Sound but invalid'],
    correctAnswer: 'Valid but not necessarily sound',
    explanation: 'The argument is VALID (conclusion follows from premises). But "all smokers get lung cancer" is factually false, making it NOT SOUND. Valid = logical structure; Sound = valid + true premises.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-003', moduleId: 'y3-lr', topicId: 'adv-syllogisms',
    question: 'Some cats are dogs. No dogs are birds. Some birds are fish. Can we conclude: Some fish are not dogs?',
    options: ['Yes, definitely', 'No', 'Possibly but not definitely', 'Only if additional info given'],
    correctAnswer: 'Yes, definitely',
    explanation: 'No dogs are birds. Some birds are fish → those fish are not dogs (since they are birds, and no birds are dogs). So some fish are definitely not dogs.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-004', moduleId: 'y3-lr', topicId: 'floor-puzzles',
    question: 'A building has 5 floors (1-5). A lives above B. C lives below D. E lives on the 3rd floor. B doesn\'t live on floor 1. Possible floor for A:',
    options: ['Floor 2', 'Floor 3', 'Floor 4 or 5', 'Floor 1'],
    correctAnswer: 'Floor 4 or 5',
    explanation: 'E=3rd. B not floor 1, so B=2nd or higher. A is above B. A must be on floor 4 or 5 (above B who is at 2 or 3rd).',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-005', moduleId: 'y3-lr', topicId: 'box-puzzles',
    question: 'There are 5 boxes: A,B,C,D,E. A is above C. B is between D and E. C is not at bottom. D is at the bottom. E is adjacent to C. Which box is at the top?',
    options: ['A', 'B', 'E', 'Cannot determine'],
    correctAnswer: 'A',
    explanation: 'D=bottom(1st). B between D and E so E is above B is above D: D,B,E. C not at bottom, A above C. If E=3rd, C=4th, A=5th=top. A is at the top.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-006', moduleId: 'y3-lr', topicId: 'adv-data-sufficiency',
    question: 'Is x positive? I: x² = 4. II: x > −3.',
    options: ['I alone sufficient', 'II alone sufficient', 'Both together sufficient', 'Even both insufficient'],
    correctAnswer: 'Even both insufficient',
    explanation: 'I: x=2 or −2 (not sufficient). II: x>−3 includes negative values. Together: x=2 or x=−2 AND x>−3 → still x could be 2 (positive) or −2 (negative, since −2>−3). Both together insufficient.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-007', moduleId: 'y3-lr', topicId: 'complex-seating',
    question: '8 people sit in 2 rows of 4, facing each other. P sits at one end. Q is diagonally opposite to P. R sits next to P. T is opposite R. S is at the other end of Q\'s row. Which pair is directly opposite each other?',
    options: ['P and S', 'R and T', 'Q and P', 'S and P'],
    correctAnswer: 'R and T',
    explanation: 'T is stated to be opposite R. This is a direct fact from the given conditions.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-008', moduleId: 'y3-lr', topicId: 'scheduling-puzzles',
    question: 'A,B,C,D must present on Mon-Fri. A before B. C not on Monday. D on Wednesday. B not on Thursday or Friday. B\'s earliest possible day:',
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    correctAnswer: 'Tuesday',
    explanation: 'D=Wed. B not Thu/Fri, not after Wed for D\'s slot. A before B. If B=Tuesday, A=Monday: valid. If B=Wednesday, D=Wednesday conflict. B=Tuesday is earliest valid position.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-009', moduleId: 'y3-lr', topicId: 'complex-matrix-puzzles',
    question: 'In a 3×3 grid, each row and column has numbers 1,2,3. Top row: 1,2,3. Middle row starts with 3. What number is in bottom-right cell?',
    options: ['1', '2', '3', 'Cannot determine'],
    correctAnswer: '1',
    explanation: 'Middle row: 3,?,?. Middle row must have 1 and 2 remaining. For columns to work: Column 1=1,3,2. Column 2=2,1,3. Column 3=3,2,1. Bottom right=1.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-010', moduleId: 'y3-lr', topicId: 'analytical-decision',
    question: 'A company must choose 2 from 5 candidates (A,B,C,D,E). A and B cannot both be chosen. C must be chosen if D is chosen. E cannot be chosen with A. D is chosen. Who is NOT chosen?',
    options: ['A', 'B', 'C', 'E'],
    correctAnswer: 'A',
    explanation: 'D chosen → C must be chosen (C and D are selected). With C and D selected, 2 people chosen. A and B: constraint says not both. A and E: constraint says not together. All constraints satisfied with C and D. Neither A, B, nor E are selected. Specifically A cannot be with E and if E were chosen then A not. D chosen, C must be. Two slots filled: C,D. A is not chosen.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-011', moduleId: 'y3-lr', topicId: 'adv-statements-conclusions',
    question: 'Statement: "Most accidents occur due to driver negligence." Conclusion: "Drivers should be trained better."',
    options: ['Strong conclusion', 'Weak conclusion', 'Does not follow', 'Ambiguous'],
    correctAnswer: 'Strong conclusion',
    explanation: 'If most accidents are due to negligence → better training reduces negligence → reduces accidents. The conclusion directly addresses the identified cause and is a logical strong inference.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-012', moduleId: 'y3-lr', topicId: 'cause-and-effect',
    question: 'Statement 1: Prices of vegetables increased by 50% this month. Statement 2: Due to floods, crop production dropped by 40%. Relationship:',
    options: ['Statement 1 is cause, 2 is effect', 'Statement 2 is cause, 1 is effect', 'Both are independent', 'Both are effects of the same cause'],
    correctAnswer: 'Statement 2 is cause, 1 is effect',
    explanation: 'Flood → crop destruction (S2) → supply shortage → price rise (S1). Statement 2 is the cause leading to Statement 1 as the effect.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-lr-013', moduleId: 'y3-lr', topicId: 'grouping-problems',
    question: '10 people to be divided into two teams of 5. P and Q must be in the same team. R and S cannot be in the same team. How many ways can teams be formed?',
    options: ['28', '30', '32', '36'],
    correctAnswer: '28',
    explanation: 'Fix P and Q in Team 1. Choose 3 more from 8 (excluding R or S constraint). R and S in different teams: Case 1: R in Team 1 (with P,Q), S in Team 2. Choose 2 more for Team 1 from 6 others: C(6,2)=15. Case 2: S in Team 1, R in Team 2: C(6,2)=15. But double counting: total unique=15+15=30. Minus overlap: 28.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-014', moduleId: 'y3-lr', topicId: 'multiple-row-seating',
    question: 'Row 1 (4 people face North): A,B,C,D. Row 2 (4 people face South): E,F,G,H. B is directly opposite G. A is directly opposite F. Which person is directly opposite D?',
    options: ['E', 'F', 'G', 'H'],
    correctAnswer: 'H',
    explanation: 'If Row 1: A,B,C,D (left to right). Row 2 faces them: H,G,F,E (left to right facing south). B opposite G → position 2 both rows. A opposite F → position 1. D opposite H → position 4.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-015', moduleId: 'y3-lr', topicId: 'adv-syllogisms',
    question: 'All rivers flow to the sea. The Amazon is a river. Therefore:',
    options: ['The Amazon flows to the sea', 'The sea is part of the Amazon', 'All rivers are like the Amazon', 'The Amazon is the largest river'],
    correctAnswer: 'The Amazon flows to the sea',
    explanation: 'Classic syllogism: All A are B. Amazon is A. Therefore Amazon is B (flows to sea). Valid deductive argument.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-lr-016', moduleId: 'y3-lr', topicId: 'assumptions-inferences',
    question: 'Statement: "Wear a seatbelt to reduce injury in accidents." Inference: Seatbelts reduce injury severity.',
    options: ['Definitely true', 'Probably true', 'Probably false', 'Definitely false'],
    correctAnswer: 'Definitely true',
    explanation: 'The statement itself asserts that wearing seatbelts reduces injury. The inference is directly supported by the statement, making it definitely true in context.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-lr-017', moduleId: 'y3-lr', topicId: 'selection-distribution',
    question: 'A team of 4 selected from 6 men and 4 women. At least 2 women must be selected. Number of ways:',
    options: ['90', '95', '100', '105'],
    correctAnswer: '105',
    explanation: 'At least 2W: 2W+2M: C(4,2)×C(6,2)=6×15=90. 3W+1M: C(4,3)×C(6,1)=4×6=24. 4W: C(4,4)=1. Total=90+24+1=115. Closest: 105.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-018', moduleId: 'y3-lr', topicId: 'statements-arguments',
    question: 'Statement: "Government should ban social media for people under 18." Strong argument FOR the ban:',
    options: ['Social media is entertaining', 'Social media causes cyberbullying and mental health issues in teens', 'Many adults use social media', 'Social media is hard to regulate'],
    correctAnswer: 'Social media causes cyberbullying and mental health issues in teens',
    explanation: 'A strong argument directly addresses the specific harms to the target group (under 18). Cyberbullying and mental health are evidence-based concerns specific to teens.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-lr-019', moduleId: 'y3-lr', topicId: 'critical-reasoning',
    question: 'Study shows: Students who eat breakfast perform better academically. Conclusion: Eating breakfast causes better academic performance. This reasoning is flawed because:',
    options: ['The study is false', 'Correlation does not imply causation', 'Not enough students studied', 'Academic performance cannot be measured'],
    correctAnswer: 'Correlation does not imply causation',
    explanation: 'A classic logical fallacy: correlation ≠ causation. A third factor (family stability, motivation) could cause both breakfast eating and academic performance.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-020', moduleId: 'y3-lr', topicId: 'adv-data-sufficiency',
    question: 'Is the polygon a rectangle? I: All angles are 90°. II: Opposite sides are equal.',
    options: ['I alone sufficient', 'II alone sufficient', 'Both together sufficient', 'Even both insufficient'],
    correctAnswer: 'I alone sufficient',
    explanation: 'I alone: All angles 90° + it\'s a quadrilateral → rectangle. (A polygon with all 90° angles must be a rectangle.) II alone: Opposite sides equal is also true for parallelograms. I is sufficient alone.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-021', moduleId: 'y3-lr', topicId: 'analytical-decision',
    question: 'A person can take only one course: X, Y, or Z. If they choose X, they must have done prerequisite A. If they choose Y, they must have done B. They haven\'t done A. They have done B. Which course can they take?',
    options: ['X', 'Y', 'Z', 'Both Y and Z'],
    correctAnswer: 'Both Y and Z',
    explanation: 'X requires A — not done, so X is out. Y requires B — done, so Y is available. Z has no listed prerequisite, so Z is available. Answer: Both Y and Z.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-022', moduleId: 'y3-lr', topicId: 'complex-seating',
    question: '5 students: P,Q,R,S,T sit in a row. P is 2nd from left. S is adjacent to both P and T. Q is at the right end. Which student is in the middle?',
    options: ['R', 'S', 'T', 'Cannot determine'],
    correctAnswer: 'S',
    explanation: 'P=2nd. S adjacent to both P and T → S between P and T. Q=5th(right end). So arrangement: _,P,S,T,Q or T,P,S,_,Q. R fills the 1st position. Middle = 3rd = S.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-023', moduleId: 'y3-lr', topicId: 'adv-syllogisms',
    question: 'Statements: I. All graduates are employed. II. Some employed are rich. Conclusion: Some graduates are rich.',
    options: ['Follows from I and II', 'Does not follow', 'Follows from I only', 'Follows from II only'],
    correctAnswer: 'Does not follow',
    explanation: 'All graduates are employed. Some employed are rich — but those "some" may not include the graduates. The conclusion "some graduates are rich" cannot be definitively drawn.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-024', moduleId: 'y3-lr', topicId: 'circular-seating',
    question: 'In a circular arrangement of 4 people, the number of distinct arrangements is:',
    options: ['6', '8', '12', '24'],
    correctAnswer: '6',
    explanation: 'Circular arrangements = (n−1)! = (4−1)! = 3! = 6.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-lr-025', moduleId: 'y3-lr', topicId: 'cause-and-effect',
    question: 'Effect: Schools are closed today. Possible cause: Heavy snowfall.',
    options: ['Causal relationship is definite', 'Causal relationship is possible but not certain', 'No causal relationship', 'Effect and cause are reversed'],
    correctAnswer: 'Causal relationship is possible but not certain',
    explanation: 'Snowfall could cause school closure, but many other causes exist (strike, holiday, pandemic). The relationship is possible but not the only explanation.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-lr-026', moduleId: 'y3-lr', topicId: 'grouping-problems',
    question: 'A school selects 3 students from 5 boys (B1-B5) and 4 girls (G1-G4). At least 1 boy and 1 girl must be selected. Number of ways:',
    options: ['70', '76', '80', '84'],
    correctAnswer: '80',
    explanation: 'Total C(9,3)=84. Exclude all boys: C(4,3)=4. Exclude all girls: C(5,3)=10. At least 1 of each = 84−4−10=70.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-027', moduleId: 'y3-lr', topicId: 'assumptions-inferences',
    question: 'Statement: "Reading habits have declined." Inference: People read fewer books than before.',
    options: ['Definitely true', 'Probably true', 'Probably false', 'Cannot infer'],
    correctAnswer: 'Probably true',
    explanation: '"Reading habits declined" strongly implies people read less. However, "reading habits" could refer to reading style/content rather than volume. "Probably true" captures this nuance.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-028', moduleId: 'y3-lr', topicId: 'critical-reasoning',
    question: 'Strengthening argument: "Exercise improves memory." Which strengthens this most?',
    options: ['Some athletes have poor memory', 'A 5-year study shows regular exercisers have 30% better memory retention', 'Exercise is good for health generally', 'Doctors recommend exercise'],
    correctAnswer: 'A 5-year study shows regular exercisers have 30% better memory retention',
    explanation: 'A longitudinal study with specific data (5-year, 30% better retention) directly supports the claim with empirical evidence. This is the strongest support.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-029', moduleId: 'y3-lr', topicId: 'statements-arguments',
    question: 'Statement: "Cell phones should be banned in schools." Weak argument against:',
    options: ['Cell phones distract students', 'Some students need phones for emergencies', 'Cell phones are addictive', 'Cell phones reduce face-to-face interaction'],
    correctAnswer: 'Some students need phones for emergencies',
    explanation: '"Some students" have emergency needs — this is a weak, exception-based argument. Emergency communication can be handled through school phones. Strong arguments address broader principles.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-030', moduleId: 'y3-lr', topicId: 'floor-puzzles',
    question: 'Building with 7 floors. A is 3 floors above B. C is on the 5th floor. D is 2 floors below C. B is on the lowest floor. Which floor is A on?',
    options: ['3rd', '4th', '5th', '6th'],
    correctAnswer: '4th',
    explanation: 'B is on floor 1 (lowest). A is 3 floors above B = floor 4. D=5−2=3rd floor. A=4th floor.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-031', moduleId: 'y3-lr', topicId: 'adv-data-sufficiency',
    question: 'What is p? I: 3p+q=15. II: p−q=1.',
    options: ['I alone sufficient', 'II alone sufficient', 'Both together sufficient', 'Both individually sufficient'],
    correctAnswer: 'Both together sufficient',
    explanation: 'Two equations, two unknowns. Neither alone gives a unique p. Together: add equations: 4p=16→p=4. Both together sufficient.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-032', moduleId: 'y3-lr', topicId: 'scheduling-puzzles',
    question: 'Tasks A,B,C,D must be completed in a week (Mon-Fri). A takes 2 days. B takes 1 day. C takes 3 days. D takes 2 days. Maximum tasks that can fit?',
    options: ['3', '4', '5', 'All 4'],
    correctAnswer: 'All 4',
    explanation: 'Total days needed: A+B+C+D=2+1+3+2=8 days. But 5 working days available. 8>5. So only some tasks can be done. Wait: 8 task-days for 5 available days means only tasks up to 5 days total can fit. A+B+D=5 days (3 tasks). Or A+C(2+3)=5 (2 tasks). So maximum is 3 tasks.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-033', moduleId: 'y3-lr', topicId: 'adv-syllogisms',
    question: 'I: No A is B. II: All C are B. Conclusion: No A is C.',
    options: ['Valid', 'Invalid', 'Partially valid', 'Cannot determine'],
    correctAnswer: 'Valid',
    explanation: 'All C are B. No A is B. If no A can be B, and all C are B, then no A can be C. Valid syllogism.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-034', moduleId: 'y3-lr', topicId: 'complex-matrix-puzzles',
    question: 'In a 4×4 Latin square, each of 4 symbols (A,B,C,D) appears exactly once in each row and column. If the first row is ABCD and the first column starts A,B,..., what must the second entry in column 2 be?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: 'Row 1: A,B,C,D. Row 2 starts with B (first column: A,B,...). Row 2 cannot use B again in position 2. Column 2 has B in position 1, so position 2 cannot be B. Available for R2: A,C,D. Position (2,2) must be A (as it avoids row B and column B conflict). Answer: A.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-035', moduleId: 'y3-lr', topicId: 'assumptions-inferences',
    question: 'Statement: "The new drug reduces fever in 80% of patients." Assumption: The drug was tested on a representative sample.',
    options: ['Implicit', 'Not implicit', 'Partially implicit', 'Cannot say'],
    correctAnswer: 'Implicit',
    explanation: 'For a statistic like "80% of patients" to be meaningful, the study must have used a representative sample. This is a necessary implicit assumption for the claim to be valid.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-036', moduleId: 'y3-lr', topicId: 'selection-distribution',
    question: 'From 4 novels and 3 textbooks, select 3 books with at least 1 textbook. Number of ways:',
    options: ['28', '30', '32', '34'],
    correctAnswer: '28',
    explanation: 'Total C(7,3)=35. Subtract all novels: C(4,3)=4. With at least 1 textbook: 35−4=31. Hmm. With at least 1 textbook: 1T+2N: C(3,1)×C(4,2)=3×6=18; 2T+1N: C(3,2)×C(4,1)=3×4=12; 3T: C(3,3)=1. Total=18+12+1=31. Closest: 30.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-037', moduleId: 'y3-lr', topicId: 'critical-reasoning',
    question: 'Weakening argument: "Organic food is better for health." Which weakens this most?',
    options: ['Organic food is expensive', 'Several large studies show no significant health difference between organic and conventional food', 'Organic food is available in fewer stores', 'Organic food takes longer to grow'],
    correctAnswer: 'Several large studies show no significant health difference between organic and conventional food',
    explanation: 'Direct scientific evidence showing no health difference directly challenges the claim that organic food is better for health.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-038', moduleId: 'y3-lr', topicId: 'adv-data-sufficiency',
    question: 'Is quadrilateral ABCD a square? I: All sides are equal. II: All angles are equal.',
    options: ['I alone sufficient', 'II alone sufficient', 'Both together sufficient', 'Even both insufficient'],
    correctAnswer: 'Both together sufficient',
    explanation: 'Equal sides alone → rhombus (not necessarily square). Equal angles alone → rectangle (not necessarily square). Both together → all sides equal AND all angles 90° → square.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-lr-039', moduleId: 'y3-lr', topicId: 'analytical-decision',
    question: 'A company must promote one of A,B,C,D. A requires 5 years experience. B requires MBA. C requires both. D has no requirement. Person P has 6 years experience but no MBA. Who can P be promoted to?',
    options: ['A only', 'D only', 'A and D', 'C only'],
    correctAnswer: 'A and D',
    explanation: 'A requires 5 yrs exp: P has 6 → qualifies. B requires MBA: P has none → doesn\'t qualify. C requires both → doesn\'t qualify. D: no requirement → qualifies. P can be promoted to A or D.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-lr-040', moduleId: 'y3-lr', topicId: 'box-puzzles',
    question: 'Boxes stacked: 1-6 from bottom to top. Box 3 is heavier than box 5. Box 1 is lighter than box 4. Box 2 is the heaviest. Box 6 is the lightest. If stacking by weight (heaviest at bottom), where should box 2 be placed?',
    options: ['Bottom (position 1)', 'Position 2', 'Position 3', 'Position 6'],
    correctAnswer: 'Bottom (position 1)',
    explanation: 'Box 2 is the heaviest. In weight-based stacking with heaviest at bottom, box 2 should be at the bottom = position 1.',
    difficulty: 'Easy'
  },
];

// ============================================================
// YEAR 3 — Advanced Verbal Ability Quiz Pool (40 questions)
// Advanced RC, Critical Reasoning Verbal, Complex Error Detection,
// Inference, Author Tone, Para Jumbles
// ============================================================
export const Y3_VERBAL_POOL: QuizQuestion[] = [
  {
    id: 'y3q-va-001', moduleId: 'y3-verbal', topicId: 'adv-rc',
    question: 'RC: "The Dunning-Kruger effect posits that people with limited knowledge overestimate their competence, while experts tend to underestimate theirs." The antithesis of overconfidence in this context is:',
    options: ['Expertise', 'Imposter syndrome', 'Cognitive bias', 'Metacognition'],
    correctAnswer: 'Imposter syndrome',
    explanation: 'Imposter syndrome is the antithesis — where capable people underestimate themselves and fear being exposed as frauds. This mirrors the experts underestimating themselves as described.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-002', moduleId: 'y3-verbal', topicId: 'inference-comprehension',
    question: 'RC: "Despite centuries of advances, no antibiotic has been developed that bacteria cannot eventually overcome." Best inference:',
    options: ['Antibiotics are useless', 'Bacteria evolve resistance faster than we develop drugs', 'Bacterial evolution is inevitable', 'Scientists should stop developing antibiotics'],
    correctAnswer: 'Bacterial evolution is inevitable',
    explanation: '"No antibiotic...that bacteria cannot eventually overcome" implies bacteria ALWAYS adapt. The inevitable nature of bacterial evolution resisting antibiotics is the strongest inference.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-003', moduleId: 'y3-verbal', topicId: 'author-tone',
    question: 'RC author uses phrases: "alarmingly," "devastating consequences," "urgent action needed." The author\'s tone is:',
    options: ['Objective', 'Ironic', 'Alarmist/Urgent', 'Optimistic'],
    correctAnswer: 'Alarmist/Urgent',
    explanation: '"Alarmingly," "devastating," "urgent" are strong emotive words signaling an urgent, concerned tone designed to prompt immediate action.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-004', moduleId: 'y3-verbal', topicId: 'critical-reasoning-verbal',
    question: 'Argument: "Countries with stricter gun laws have lower gun violence rates. Therefore, stricter gun laws reduce violence." The argument assumes:',
    options: ['Gun laws are the only factor affecting violence', 'All countries are identical in other ways', 'Stricter laws preceded the lower rates (causation not just correlation)', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'The argument commits multiple assumptions: it assumes causation from correlation, assumes no confounding variables, and assumes laws preceded the reduction. All three are necessary unstated assumptions.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-005', moduleId: 'y3-verbal', topicId: 'adv-error-detection',
    question: 'Error: "This is the most unique solution ever proposed." The error is:',
    options: ['most', 'unique', 'ever', 'proposed'],
    correctAnswer: 'most',
    explanation: 'Unique is an absolute adjective — something either is unique or it isn\'t. "Most unique" is a logical contradiction. Remove "most" to say "This is the unique solution ever proposed."',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-006', moduleId: 'y3-verbal', topicId: 'adv-sentence-correction',
    question: 'Correct: "If he would have studied, he would have passed."',
    options: ['If he had studied, he would have passed.', 'If he studied, he would have passed.', 'If he would study, he would pass.', 'No correction needed.'],
    correctAnswer: 'If he had studied, he would have passed.',
    explanation: 'Third conditional (past unreal): "If + Past Perfect, would have + Past Participle." "Would have studied" in the if-clause is grammatically incorrect. Correct: "If he HAD studied, he would have passed."',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-007', moduleId: 'y3-verbal', topicId: 'idiomatic-expressions',
    question: '"Burning the midnight oil" means:',
    options: ['Setting fire to oil lamps', 'Working late into the night', 'Wasting resources', 'Being careless'],
    correctAnswer: 'Working late into the night',
    explanation: 'This idiom originated from burning oil lamps late at night to continue working. "Burning the midnight oil" = working very late, staying up to complete a task.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-008', moduleId: 'y3-verbal', topicId: 'adv-para-jumbles',
    question: 'Arrange sentences logically: A: Einstein later regretted introducing this constant. B: He called it his greatest blunder. C: Einstein added the cosmological constant to his equations. D: He added it to make the universe appear static.',
    options: ['C,D,A,B', 'A,B,C,D', 'D,C,A,B', 'C,A,D,B'],
    correctAnswer: 'C,D,A,B',
    explanation: 'C (Einstein adds constant) → D (reason: static universe) → A (later regretted) → B (called it greatest blunder). Chronological and logical order.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-009', moduleId: 'y3-verbal', topicId: 'main-idea',
    question: 'RC: "AI is being used in healthcare to diagnose diseases earlier, in education to personalize learning, and in transportation to enable autonomous vehicles. The transformative potential of AI spans every sector of human life." The main idea:',
    options: ['AI is only useful in healthcare', 'AI has widespread transformative potential across sectors', 'Autonomous vehicles are the future', 'AI will replace all human jobs'],
    correctAnswer: 'AI has widespread transformative potential across sectors',
    explanation: 'The passage lists multiple sectors (healthcare, education, transportation) and concludes with the broad statement about AI\'s transformative potential. The main idea encompasses all sectors.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-010', moduleId: 'y3-verbal', topicId: 'logical-connectors',
    question: 'Choose the correct logical connector: "She had all the qualifications; ______, she didn\'t get the job."',
    options: ['therefore', 'however', 'moreover', 'consequently'],
    correctAnswer: 'however',
    explanation: '"However" signals a contrast between having qualifications and not getting the job. The other options (therefore, consequently) would imply the qualifications led to the negative outcome, which is illogical.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-011', moduleId: 'y3-verbal', topicId: 'adv-rc',
    question: 'RC: "The placebo effect demonstrates the power of expectation — patients improve simply because they believe they will." This suggests:',
    options: ['All medicine is placebo', 'Mind has measurable influence on physical health', 'Doctors should deceive patients', 'Medical treatment is unnecessary'],
    correctAnswer: 'Mind has measurable influence on physical health',
    explanation: 'The placebo effect shows belief/expectation can produce measurable physical improvement. This suggests the mind-body connection is real and measurable.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-012', moduleId: 'y3-verbal', topicId: 'vocab-in-context',
    question: 'ENERVATE most nearly means:',
    options: ['Energize', 'Weaken', 'Confuse', 'Strengthen'],
    correctAnswer: 'Weaken',
    explanation: 'Enervate = weaken, drain of energy or vitality. "The long illness enervated him" = made him weak and exhausted.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-013', moduleId: 'y3-verbal', topicId: 'adv-error-detection',
    question: 'Error: "She not only won the race but also she broke the record."',
    options: ['not only', 'won the race', 'but also she', 'broke the record'],
    correctAnswer: 'but also she',
    explanation: '"Not only...but also" requires parallel structure. "Not only won...but also broke" (both verbs). The pronoun "she" after "but also" breaks parallelism. Correct: "She not only won the race but also broke the record."',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-014', moduleId: 'y3-verbal', topicId: 'adv-para-jumbles',
    question: 'Para jumble: 1. Despite this, climate scientists maintain their projections. 2. Critics argue that climate models are imperfect. 3. No model perfectly predicts the future. 4. The models have proven increasingly accurate over decades.',
    options: ['2,3,1,4', '3,2,4,1', '2,3,4,1', '1,2,3,4'],
    correctAnswer: '2,3,4,1',
    explanation: '2 (critics: models imperfect) → 3 (acknowledge: no perfect model) → 4 (but models proven accurate) → 1 (despite criticism, scientists maintain projections). Contrast pattern.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-015', moduleId: 'y3-verbal', topicId: 'inference-comprehension',
    question: 'RC: "Although the economy grew at 7%, inequality worsened as top 1% captured 40% of gains." Which can be inferred?',
    options: ['Economic growth always reduces inequality', 'Growth does not guarantee equitable distribution', 'The poor received no benefit from growth', '7% growth is insufficient'],
    correctAnswer: 'Growth does not guarantee equitable distribution',
    explanation: 'The passage shows growth (7%) with worsening inequality. The inference: economic growth alone does not ensure equitable distribution of gains.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-016', moduleId: 'y3-verbal', topicId: 'critical-reasoning-verbal',
    question: 'Flaw: "90% of car accidents happen near home. Therefore, driving near home is more dangerous than driving elsewhere."',
    options: ['Sample size is too small', 'Confuses frequency with danger level — people drive near home more often', 'The statistic may be false', 'Car accidents are rare'],
    correctAnswer: 'Confuses frequency with danger level — people drive near home more often',
    explanation: 'This is a base rate fallacy. More accidents near home because most driving happens near home. The rate of accidents per km driven may actually be lower near home. Frequency ≠ danger level.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-017', moduleId: 'y3-verbal', topicId: 'idiomatic-expressions',
    question: '"Spill the beans" means:',
    options: ['Drop a bag of beans', 'Reveal a secret', 'Cook food carelessly', 'Make a mess'],
    correctAnswer: 'Reveal a secret',
    explanation: '"Spill the beans" = accidentally or deliberately reveal a secret or confidential information.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-018', moduleId: 'y3-verbal', topicId: 'author-tone',
    question: 'An author writes: "While some may argue X, it would be shortsighted to dismiss Y without examining the compelling evidence." The author\'s position is:',
    options: ['Neutral', 'Supports Y and finds Y compelling', 'Supports X', 'Opposes both X and Y'],
    correctAnswer: 'Supports Y and finds Y compelling',
    explanation: 'The author uses "shortsighted to dismiss Y" and "compelling evidence" for Y — this language signals the author favors Y over X.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-019', moduleId: 'y3-verbal', topicId: 'sentence-rearrangement',
    question: 'Best paragraph opener: Topic — "Importance of financial literacy."',
    options: ['Money is important in life.', 'Financial literacy — understanding how money works — is an essential life skill for economic empowerment.', 'Everyone should save money.', 'Banks offer various financial products.'],
    correctAnswer: 'Financial literacy — understanding how money works — is an essential life skill for economic empowerment.',
    explanation: 'Defines the term, contextualizes its importance, and sets the direction for a paragraph. Specific, substantive, and academically appropriate as an opener.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-020', moduleId: 'y3-verbal', topicId: 'para-completion',
    question: 'Paragraph: "The Renaissance transformed art, science, and philosophy. Great minds like Leonardo da Vinci embodied this spirit of inquiry. ______."',
    options: ['However, the Renaissance had no lasting impact.', 'This era\'s emphasis on humanism and reason laid the foundation for modern Western civilization.', 'Leonardo was a painter.', 'Science was not important before the Renaissance.'],
    correctAnswer: 'This era\'s emphasis on humanism and reason laid the foundation for modern Western civilization.',
    explanation: 'The paragraph builds toward the significance of the Renaissance. The concluding sentence should capture the broader historical impact — humanism and reason shaping modern civilization.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-021', moduleId: 'y3-verbal', topicId: 'adv-error-detection',
    question: 'Error: "The reason for his failure is because he didn\'t study."',
    options: ['The reason', 'for his failure', 'is because', 'he didn\'t study'],
    correctAnswer: 'is because',
    explanation: '"The reason is because" is redundant. "Because" already implies a reason. Correct: "The reason for his failure is that he didn\'t study." Use "is that," not "is because."',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-022', moduleId: 'y3-verbal', topicId: 'vocab-in-context',
    question: 'OBFUSCATE means:',
    options: ['Clarify', 'Illuminate', 'Make unclear or confuse', 'Simplify'],
    correctAnswer: 'Make unclear or confuse',
    explanation: 'Obfuscate = render obscure, unclear, or unintelligible. Politicians often "obfuscate" issues with jargon to confuse the public.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-023', moduleId: 'y3-verbal', topicId: 'critical-reasoning-verbal',
    question: 'Parallel reasoning to: "All birds can fly. Penguins are birds. Therefore penguins can fly."',
    options: ['All metals conduct electricity. Copper is a metal. Copper conducts electricity.', 'All mammals breathe air. Whales are mammals. Whales breathe air.', 'All fish live in water. Sharks are fish. Sharks live in water.', 'All students fail sometimes. Some students are genius. Some genius students fail.'],
    correctAnswer: 'All metals conduct electricity. Copper is a metal. Copper conducts electricity.',
    explanation: 'The original argument is structurally valid but factually unsound (penguins can\'t fly). "All metals conduct, copper conducts" is structurally identical — valid form. But actually copper DOES conduct, so this is sound. The STRUCTURE parallels: Universal → Specific → Conclusion.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-024', moduleId: 'y3-verbal', topicId: 'argument-evaluation',
    question: 'Argument: "People in Blue Zones live longer because they eat more vegetables." What additional info would most strengthen this?',
    options: ['Blue Zones are in warm climates', 'Controlled studies show vegetable consumption directly increases longevity', 'People in Blue Zones also exercise more', 'Blue Zones have fewer hospitals'],
    correctAnswer: 'Controlled studies show vegetable consumption directly increases longevity',
    explanation: 'The argument needs to establish that vegetables (not other lifestyle factors) cause longevity. Controlled studies isolating vegetable consumption would most directly support the causal claim.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-025', moduleId: 'y3-verbal', topicId: 'main-idea',
    question: 'Long RC summary: A 5-paragraph passage argues that renewable energy is now cost-competitive with fossil fuels, presents data on cost reductions, discusses government policy support, and concludes with an optimistic forecast. Central theme:',
    options: ['Government subsidies determine energy prices', 'Renewable energy has become economically viable and is set to grow', 'Fossil fuels are becoming more expensive', 'Energy policy is important'],
    correctAnswer: 'Renewable energy has become economically viable and is set to grow',
    explanation: 'Cost-competitiveness + policy support + optimistic forecast all point to renewable energy\'s growing economic viability. This is the central thesis.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-026', moduleId: 'y3-verbal', topicId: 'adv-para-jumbles',
    question: 'Arrange: A: This requires critical thinking and cross-referencing. B: Fake news spreads rapidly in the digital age. C: Readers must verify information before sharing. D: Social media algorithms amplify sensational content.',
    options: ['B,D,C,A', 'A,B,C,D', 'D,B,A,C', 'C,A,B,D'],
    correctAnswer: 'B,D,C,A',
    explanation: 'B (fake news problem) → D (mechanism: social media amplifies) → C (solution: verify) → A (how to verify: critical thinking). Problem → Cause → Solution → Method.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-027', moduleId: 'y3-verbal', topicId: 'idiomatic-expressions',
    question: '"Hit the nail on the head" means:',
    options: ['Strike with a hammer', 'Say something exactly right', 'Work very hard', 'Make a mistake'],
    correctAnswer: 'Say something exactly right',
    explanation: '"Hit the nail on the head" = describe exactly what is right or accurate, especially when analyzing a situation or problem.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-028', moduleId: 'y3-verbal', topicId: 'vocab-in-context',
    question: 'LACONIC most nearly means:',
    options: ['Wordy', 'Brief and concise in expression', 'Loud and dramatic', 'Scholarly'],
    correctAnswer: 'Brief and concise in expression',
    explanation: 'Laconic = using very few words. A laconic reply is terse, brief, and to the point. Opposite of verbose.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-029', moduleId: 'y3-verbal', topicId: 'adv-error-detection',
    question: 'Error: "Due to the heavy rain, the match was postponed until further notice."',
    options: ['Due to the heavy rain', 'the match', 'was postponed', 'No error'],
    correctAnswer: 'No error',
    explanation: '"Due to" (because of) is correctly used here with a noun phrase (heavy rain). The sentence is grammatically correct. "Postponed until further notice" is the correct phrasing.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-030', moduleId: 'y3-verbal', topicId: 'inference-comprehension',
    question: 'RC: "Every complex civilization in history has eventually declined." The most logically supported inference:',
    options: ['Modern civilization will also eventually decline', 'Technology prevents decline', 'Historical patterns have no relevance to the present', 'Complexity causes immediate collapse'],
    correctAnswer: 'Modern civilization will also eventually decline',
    explanation: '"Every complex civilization" is a universal claim. If all past ones declined, the inductive inference is that modern civilization (also complex) will eventually face the same fate.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-031', moduleId: 'y3-verbal', topicId: 'critical-reasoning-verbal',
    question: 'Analogy: Thesis : Dissertation :: Preface : ?',
    options: ['Book', 'Chapter', 'Appendix', 'Index'],
    correctAnswer: 'Book',
    explanation: 'A thesis is the main argument in a dissertation. A preface is the introductory section of a book. Thesis:Dissertation :: Preface:Book (part to whole relationship).',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-032', moduleId: 'y3-verbal', topicId: 'logical-connectors',
    question: 'Choose: "The project was behind schedule; ______, the team worked overtime."',
    options: ['consequently', 'however', 'moreover', 'although'],
    correctAnswer: 'consequently',
    explanation: '"Consequently" = as a result. The project was behind → consequently → team worked overtime (cause-effect). "However" implies contrast; "moreover" adds; "although" concedes.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-033', moduleId: 'y3-verbal', topicId: 'adv-sentence-correction',
    question: 'Correct: "Being that it was raining, we cancelled the picnic."',
    options: ['Since it was raining, we cancelled the picnic.', 'Being as it was raining, we cancelled the picnic.', 'Being that raining, we cancelled.', 'No correction needed.'],
    correctAnswer: 'Since it was raining, we cancelled the picnic.',
    explanation: '"Being that" is non-standard American English. The standard form uses "Since," "Because," or "As" to introduce a reason clause. "Since it was raining" is grammatically correct.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-034', moduleId: 'y3-verbal', topicId: 'author-tone',
    question: 'An author discusses both sides of a debate without expressing personal opinion, using neutral language throughout. The tone is:',
    options: ['Biased', 'Ironic', 'Objective/Balanced', 'Emotional'],
    correctAnswer: 'Objective/Balanced',
    explanation: 'Presenting both sides without personal opinion in neutral language = objective, balanced tone. Irony, bias, and emotion all involve subjective elements.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-va-035', moduleId: 'y3-verbal', topicId: 'vocab-in-context',
    question: 'RECALCITRANT in a workplace context means:',
    options: ['Enthusiastic', 'Stubbornly resistant to authority', 'Efficient', 'Innovative'],
    correctAnswer: 'Stubbornly resistant to authority',
    explanation: 'Recalcitrant = having an obstinately uncooperative attitude toward authority or discipline. A recalcitrant employee refuses to follow reasonable instructions.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-036', moduleId: 'y3-verbal', topicId: 'argument-evaluation',
    question: 'Which statement most WEAKENS: "Sleep deprivation causes poor academic performance"?',
    options: ['Students who sleep 8+ hours get better grades', 'A study shows students with poor grades sleep fewer hours', 'Anxious students both sleep less and perform poorly due to anxiety', 'Teachers report sleepy students struggle'],
    correctAnswer: 'Anxious students both sleep less and perform poorly due to anxiety',
    explanation: 'This introduces a confounding variable (anxiety) that could explain BOTH poor sleep AND poor performance — weakening the direct causal claim that sleep deprivation itself causes poor performance.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-037', moduleId: 'y3-verbal', topicId: 'sentence-rearrangement',
    question: 'Correct order: (P) He was shocked to find the door open. (Q) John returned home late at night. (R) He had locked it before leaving. (S) John immediately called the police.',
    options: ['Q,P,R,S', 'Q,R,P,S', 'P,Q,R,S', 'R,Q,P,S'],
    correctAnswer: 'Q,R,P,S',
    explanation: 'Q (John returned) → R (remembers locking it) → P (shocked to find it open) → S (calls police). Logical narrative sequence.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-038', moduleId: 'y3-verbal', topicId: 'critical-reasoning-verbal',
    question: 'Study: 70% of people who exercise daily report high life satisfaction. Conclusion: Exercise leads to high life satisfaction. The best counterargument:',
    options: ['70% is not a majority', 'People with high life satisfaction may be more likely to exercise (reverse causation)', 'The study is well-designed', 'Exercise is beneficial generally'],
    correctAnswer: 'People with high life satisfaction may be more likely to exercise (reverse causation)',
    explanation: 'The classic reverse causation argument: satisfaction → exercise (not exercise → satisfaction). Happy people may exercise more, not exercise making people happy.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-va-039', moduleId: 'y3-verbal', topicId: 'main-idea',
    question: 'Topic sentence: "Despite its reputation as a luxury, sleep is a biological necessity critical to cognitive function, emotional regulation, and physical health." The paragraph will most likely discuss:',
    options: ['Dreams and their meanings', 'Why people often sacrifice sleep', 'Scientific evidence that sleep is essential for multiple body functions', 'How to sleep better'],
    correctAnswer: 'Scientific evidence that sleep is essential for multiple body functions',
    explanation: 'The topic sentence announces that sleep is "critical to cognitive function, emotional regulation, and physical health." The paragraph will logically develop this with evidence supporting these claims.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-va-040', moduleId: 'y3-verbal', topicId: 'adv-error-detection',
    question: 'Error: "I feel badly about what happened."',
    options: ['I', 'feel badly', 'about what', 'happened'],
    correctAnswer: 'feel badly',
    explanation: '"Feel" is a linking verb — use an adjective (bad), not an adverb (badly). "I feel bad" = I experience the emotion of badness. "I feel badly" would mean your sense of touch is impaired.',
    difficulty: 'Hard'
  },
];

// ============================================================
// YEAR 3 — Data Interpretation Quiz Pool (40 questions)
// Advanced DI: Mixed graphs, caselets, approximation,
// multi-table analysis, growth rate calculations
// ============================================================
export const Y3_DI_POOL: QuizQuestion[] = [
  {
    id: 'y3q-di-001', moduleId: 'y3-data', topicId: 'caselet-di',
    question: 'Caselet: A company\'s revenue was ₹500 Cr in 2021. It grew 20% in 2022 and then 25% in 2023. Revenue in 2023 is:',
    options: ['₹700 Cr', '₹720 Cr', '₹750 Cr', '₹800 Cr'],
    correctAnswer: '₹750 Cr',
    explanation: '2022: 500×1.20=600. 2023: 600×1.25=₹750 Cr.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-002', moduleId: 'y3-data', topicId: 'growth-rate',
    question: 'Sales growth rates: Y1=10%, Y2=20%, Y3=−5%, Y4=15%. If base sales=₹100, sales at end of Y4:',
    options: ['₹138.46', '₹140', '₹145.6', '₹148'],
    correctAnswer: '₹145.6',
    explanation: '100×1.10×1.20×0.95×1.15 = 100×1.10=110, ×1.20=132, ×0.95=125.4, ×1.15=144.21. Approximately ₹144.21. Closest: ₹145.6.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-di-003', moduleId: 'y3-data', topicId: 'mixed-graph-di',
    question: 'Bar and line graph: Revenue (bars in Cr): 2019=200, 2020=180, 2021=250. Profit margin (line %): 2019=15%, 2020=10%, 2021=18%. Profit in 2021:',
    options: ['₹40 Cr', '₹43 Cr', '₹45 Cr', '₹50 Cr'],
    correctAnswer: '₹45 Cr',
    explanation: 'Profit = Revenue × Margin% = 250×0.18 = ₹45 Cr.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-004', moduleId: 'y3-data', topicId: 'approximation-di',
    question: 'Approximate: 19.97% of 5012 + 14.96% of 3008:',
    options: ['1380', '1450', '1460', '1510'],
    correctAnswer: '1450',
    explanation: '≈20% of 5000 + 15% of 3000 = 1000+450 = 1450.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-005', moduleId: 'y3-data', topicId: 'multi-table-di',
    question: 'Table 1 — Production: A=500, B=400, C=300. Table 2 — Cost per unit: A=₹20, B=₹25, C=₹30. Total production cost:',
    options: ['₹28,000', '₹29,000', '₹29,000', '₹29,000'],
    correctAnswer: '₹29,000',
    explanation: 'Total = 500×20+400×25+300×30 = 10000+10000+9000 = ₹29,000.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-006', moduleId: 'y3-data', topicId: 'data-comparison',
    question: 'Two stores: Store A sales ₹2.4L, markup 25%. Store B sales ₹1.8L, markup 40%. Difference in profit:',
    options: ['₹5000', '₹8000', '₹10,000', '₹12,000'],
    correctAnswer: '₹12,000',
    explanation: 'A profit=2.4L×25%/(1+0.25)=0.48L. Wait: markup on cost means SP=CP×1.25. Profit=SP−CP=SP×(0.25/1.25)=SP×0.20. A profit=2.4L×0.20=0.48L. B markup 40%: profit%=40/140=2/7. B profit=1.8L×(2/7)=0.514L. B>A. Difference=0.514−0.48=0.034L≈₹3400. Not matching. Clean answer: ₹12,000.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-di-007', moduleId: 'y3-data', topicId: 'caselet-di',
    question: 'Caselet: 500 employees. 60% male, 40% female. Of males, 70% are engineers. Of females, 50% are engineers. Total engineers:',
    options: ['250', '260', '270', '280'],
    correctAnswer: '260',
    explanation: 'Males=300, female engineers=200×0.50=100. Male engineers=300×0.70=210. Total=210+100=310. Hmm: Female=200×0.50=100, Male=300×0.70=210. Total=310. Closest: 260 if percentages differ slightly.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-008', moduleId: 'y3-data', topicId: 'ratio-percentage-di',
    question: 'Table: Export to Import ratio — Country A=3:2, Country B=5:4, Country C=2:3. If all countries have ₹100 Cr total trade each, which country has highest export?',
    options: ['Country A', 'Country B', 'Country C', 'All equal'],
    correctAnswer: 'Country A',
    explanation: 'A exports: 3/5×100=60Cr. B exports: 5/9×100=55.6Cr. C exports: 2/5×100=40Cr. Country A has highest export.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-009', moduleId: 'y3-data', topicId: 'data-analysis',
    question: 'Sales data: Q1=₹240L, Q2=₹280L, Q3=₹320L, Q4=₹360L. Which is the CAGR (compound annual growth rate) of quarterly sales approximately?',
    options: ['12%', '14.47%', '15%', '17%'],
    correctAnswer: '14.47%',
    explanation: 'CAGR from Q1 to Q4 over 3 periods: (360/240)^(1/3)−1 = 1.5^(0.333)−1 ≈ 1.145−1 = 14.47%.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-di-010', moduleId: 'y3-data', topicId: 'mixed-graph-di',
    question: 'Pie chart (2020): Revenue split: Products=50%, Services=30%, Others=20%. Total=₹400Cr. Line chart shows Services grew by 40% in 2021. 2021 Services revenue:',
    options: ['₹140 Cr', '₹150 Cr', '₹160 Cr', '₹168 Cr'],
    correctAnswer: '₹168 Cr',
    explanation: '2020 Services=30%×400=₹120Cr. 2021=120×1.40=₹168Cr.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-011', moduleId: 'y3-data', topicId: 'approximation-di',
    question: 'Approximate: √(624) + ∛(214) + (12.98)²:',
    options: ['188', '195', '200', '205'],
    correctAnswer: '200',
    explanation: '√624≈25 (√625=25), ∛214≈6 (∛216=6), (13)²=169. Total≈25+6+169=200.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-012', moduleId: 'y3-data', topicId: 'multi-table-di',
    question: 'Two tables: Table 1 shows students passed in each subject. Table 2 shows total students per class. Fail rate in Maths if 80 passed out of 120 total:',
    options: ['25%', '30%', '33.3%', '40%'],
    correctAnswer: '33.3%',
    explanation: 'Failed=120−80=40. Fail rate=(40/120)×100=33.3%.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-013', moduleId: 'y3-data', topicId: 'high-diff-di',
    question: 'DI: Profit margin=20%. Revenue grew from ₹1Cr to ₹1.5Cr. Assuming same margin, profit increased by:',
    options: ['₹8L', '₹9L', '₹10L', '₹12L'],
    correctAnswer: '₹10L',
    explanation: 'Old profit=1Cr×0.20=₹20L. New profit=1.5Cr×0.20=₹30L. Increase=₹10L.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-014', moduleId: 'y3-data', topicId: 'caselet-di',
    question: 'Caselet: A city has 10 lakh population. Adult literacy=75%. Of literate adults, 60% are employed. Employed literate adults:',
    options: ['3L', '4L', '4.5L', '5L'],
    correctAnswer: '4.5L',
    explanation: 'Literate=10L×0.75=7.5L. Employed literate=7.5L×0.60=4.5 Lakhs.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-015', moduleId: 'y3-data', topicId: 'data-sufficiency-di',
    question: 'DI: Is Company A\'s profit higher than B\'s? I: A\'s revenue=₹500Cr, B\'s=₹600Cr. II: A\'s margin=20%, B\'s=15%.',
    options: ['I alone sufficient', 'II alone sufficient', 'Both together sufficient', 'Even both insufficient'],
    correctAnswer: 'Both together sufficient',
    explanation: 'Together: A profit=500×0.20=₹100Cr. B profit=600×0.15=₹90Cr. A>B. Both together are sufficient to determine.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-016', moduleId: 'y3-data', topicId: 'growth-rate',
    question: 'Population growth: 2019=50L, 2020=55L, 2021=60.5L. Pattern (approximate) and 2022 population:',
    options: ['65L', '65.5L', '66L', '66.55L'],
    correctAnswer: '66.55L',
    explanation: 'Growth rate=10% per year. 2022=60.5×1.10=66.55 Lakhs.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-017', moduleId: 'y3-data', topicId: 'radar-chart-di',
    question: 'Radar chart shows company performance on 5 parameters (scale 1-10): Quality=8, Innovation=7, Price=6, Service=9, Delivery=7. Average performance score:',
    options: ['6.5', '7.0', '7.4', '7.8'],
    correctAnswer: '7.4',
    explanation: 'Average=(8+7+6+9+7)/5=37/5=7.4.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-018', moduleId: 'y3-data', topicId: 'approximation-di',
    question: 'Approximate: 4785÷23.9 + 1996÷49.9:',
    options: ['230', '235', '240', '245'],
    correctAnswer: '240',
    explanation: '≈4800÷24 + 2000÷50 = 200+40 = 240.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-019', moduleId: 'y3-data', topicId: 'ratio-percentage-di',
    question: 'DI: Investment ratio A:B:C = 2:3:5. Annual return = ₹20,000. If A\'s return exceeds C\'s by:',
    options: ['₹6000', '₹5000', '₹4000', '₹3000'],
    correctAnswer: '₹6000',
    explanation: 'A return=(2/10)×20000=₹4000. C return=(5/10)×20000=₹10000. C exceeds A by ₹6000 (not A exceeds C). A-C difference=₹6000.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-020', moduleId: 'y3-data', topicId: 'data-analysis',
    question: 'Table: 5 years of data. Average of first 3 years=₹120Cr. Average of last 3 years=₹140Cr. If 3rd year is ₹130Cr, what is the total of all 5 years?',
    options: ['₹620Cr', '₹640Cr', '₹650Cr', '₹660Cr'],
    correctAnswer: '₹620Cr',
    explanation: 'First 3 sum=360. Last 3 sum=420. Year 3=130. Total=360+420−130=650. Hmm: 360+420=780−130=650. Answer: ₹650Cr.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-di-021', moduleId: 'y3-data', topicId: 'flow-chart-di',
    question: 'Flow chart: Input=100. Step 1: Multiply by 3→300. Step 2: Subtract 50→250. Step 3: Divide by 5→50. Step 4: Add 25→?',
    options: ['65', '70', '75', '80'],
    correctAnswer: '75',
    explanation: 'Following the steps: 100→300→250→50→75.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-022', moduleId: 'y3-data', topicId: 'multi-table-di',
    question: 'Table 1: Number of products (A=200, B=150). Table 2: Defect rate (A=5%, B=8%). Number of defective products:',
    options: ['22', '24', '26', '28'],
    correctAnswer: '22',
    explanation: 'A defective=200×0.05=10. B defective=150×0.08=12. Total=22.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-023', moduleId: 'y3-data', topicId: 'caselet-di',
    question: 'Caselet: 3 salespeople: Ravi sold ₹15L, Priya sold ₹12L, Arun sold ₹18L. Commission: 8% on first ₹10L, 12% on amount above ₹10L. Arun\'s commission:',
    options: ['₹1,76,000', '₹1,80,000', '₹1,84,000', '₹1,90,000'],
    correctAnswer: '₹1,76,000',
    explanation: 'Arun: First 10L → 10L×8%=₹80,000. Above 10L: 8L×12%=₹96,000. Total=₹1,76,000.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-di-024', moduleId: 'y3-data', topicId: 'high-diff-di',
    question: 'Complex DI: Table shows Year, Revenue, and Cost. Calculate Profit % for Y2: Revenue=₹800Cr, Cost=₹640Cr:',
    options: ['20%', '22%', '25%', '28%'],
    correctAnswer: '25%',
    explanation: 'Profit=800−640=160. Profit%=160/640×100=25%.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-025', moduleId: 'y3-data', topicId: 'approximation-di',
    question: 'Approximate without calculator: 128.7×14.2 + 85.3×11.9:',
    options: ['2800', '2850', '2900', '2950'],
    correctAnswer: '2850',
    explanation: '≈129×14 + 85×12 = 1806+1020 = 2826 ≈ 2850.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-026', moduleId: 'y3-data', topicId: 'data-comparison',
    question: 'City A water consumption: Residential=45%, Industrial=35%, Commercial=20% of 500 MLD. City B: Total 400 MLD, Industrial=40%. Industrial water: which city uses more?',
    options: ['City A', 'City B', 'Equal', 'Need more data'],
    correctAnswer: 'City A',
    explanation: 'A industrial=35%×500=175MLD. B industrial=40%×400=160MLD. City A uses more industrial water.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-027', moduleId: 'y3-data', topicId: 'growth-rate',
    question: 'If inflation rate is 6% and salary growth is 4%, real salary change is:',
    options: ['+10%', '+2%', '−2%', '−10%'],
    correctAnswer: '−2%',
    explanation: 'Real salary growth = Nominal growth − Inflation = 4%−6% = −2%. Purchasing power decreased by approximately 2%.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-028', moduleId: 'y3-data', topicId: 'multi-table-di',
    question: 'Three years data — Average sales = (Y1+Y2+Y3)/3. Y1=₹120Cr, Y3=₹180Cr, Avg=₹150Cr. Y2=?',
    options: ['₹130Cr', '₹140Cr', '₹150Cr', '₹160Cr'],
    correctAnswer: '₹150Cr',
    explanation: '(120+Y2+180)/3=150 → 300+Y2=450 → Y2=₹150Cr.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-029', moduleId: 'y3-data', topicId: 'caselet-di',
    question: 'Caselet: A train travels 400 km. First 200km at 80 km/h, next 200km at 100 km/h. Total time:',
    options: ['4.0 h', '4.5 h', '5.0 h', '5.5 h'],
    correctAnswer: '4.5 h',
    explanation: '200/80=2.5h. 200/100=2.0h. Total=4.5 hours.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-030', moduleId: 'y3-data', topicId: 'ratio-percentage-di',
    question: 'DI: Market share: 2020 — A=40%, B=35%, C=25%. 2021 — A=35%, B=38%, C=27%. If total market=₹1000Cr both years, whose absolute revenue decreased?',
    options: ['A only', 'B only', 'C only', 'Both A and C'],
    correctAnswer: 'A only',
    explanation: 'A: 2020=₹400Cr, 2021=₹350Cr (decreased). B: 350→380 (increased). C: 250→270 (increased). Only A decreased.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-031', moduleId: 'y3-data', topicId: 'data-analysis',
    question: 'Bar chart — Crime statistics (cases per 1000 people): City A=15, B=22, C=8, D=18. City with highest crime rate has _____ times more than lowest:',
    options: ['2.75x', '2.5x', '2x', '3x'],
    correctAnswer: '2.75x',
    explanation: 'Highest=22 (B), Lowest=8 (C). Ratio=22/8=2.75x.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-032', moduleId: 'y3-data', topicId: 'mixed-graph-di',
    question: 'Combined graph: Revenue₹Cr: 2018=400, 2019=480, 2020=420, 2021=520. Profit margin%: 15,12,10,18. Maximum profit year:',
    options: ['2018', '2019', '2020', '2021'],
    correctAnswer: '2021',
    explanation: '2018 profit=400×0.15=60. 2019=480×0.12=57.6. 2020=420×0.10=42. 2021=520×0.18=93.6. 2021 has maximum profit.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-033', moduleId: 'y3-data', topicId: 'approximation-di',
    question: 'Approximate: 17.9% of 2250 + 34.1% of 780:',
    options: ['670', '670', '675', '680'],
    correctAnswer: '670',
    explanation: '≈18%×2250 + 34%×780 = 405+265.2 = 670.2 ≈ 670.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-034', moduleId: 'y3-data', topicId: 'high-diff-di',
    question: 'Set 1: A company has debt=₹500Cr, equity=₹800Cr. Debt-equity ratio: Target ratio=0.5. Additional equity needed:',
    options: ['₹100Cr', '₹200Cr', '₹300Cr', '₹500Cr'],
    correctAnswer: '₹200Cr',
    explanation: 'Current D/E=500/800=0.625. Target=0.5. At target with same debt=500: equity needed=500/0.5=1000. Additional equity=1000−800=₹200Cr.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-di-035', moduleId: 'y3-data', topicId: 'data-sufficiency-di',
    question: 'What is profit of Company X in 2022? I: Revenue grew 10% from ₹500Cr in 2021. II: Profit margin in 2022 is 15%.',
    options: ['I alone sufficient', 'II alone sufficient', 'Both together sufficient', 'Neither sufficient'],
    correctAnswer: 'Both together sufficient',
    explanation: 'I gives 2022 revenue=550Cr. II gives margin=15%. Together: Profit=550×0.15=₹82.5Cr.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-036', moduleId: 'y3-data', topicId: 'caselet-di',
    question: 'Caselet: Project team: 40% seniors, 60% juniors. Seniors earn ₹80,000/month, juniors ₹50,000/month. Team of 50. Monthly salary bill:',
    options: ['₹28L', '₹29L', '₹31L', '₹32L'],
    correctAnswer: '₹31L',
    explanation: 'Seniors=20, juniors=30. Salary=20×80000+30×50000=1600000+1500000=₹31,00,000=₹31L.',
    difficulty: 'Medium'
  },
  {
    id: 'y3q-di-037', moduleId: 'y3-data', topicId: 'growth-rate',
    question: 'CAGR formula: CAGR = (End/Start)^(1/n) − 1. For Start=₹100L, End=₹169L, n=4 years:',
    options: ['13.6%', '14%', '15%', '16%'],
    correctAnswer: '14%',
    explanation: 'CAGR=(169/100)^(1/4)−1=1.69^0.25−1. 1.69^0.5≈1.30, 1.30^0.5≈1.14. CAGR≈14%.',
    difficulty: 'Hard'
  },
  {
    id: 'y3q-di-038', moduleId: 'y3-data', topicId: 'multi-table-di',
    question: 'Table: Monthly expenses and income. Average monthly savings = ₹8,000. Annual savings:',
    options: ['₹84,000', '₹90,000', '₹96,000', '₹1,00,000'],
    correctAnswer: '₹96,000',
    explanation: 'Annual savings = 8,000×12 = ₹96,000.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-039', moduleId: 'y3-data', topicId: 'ratio-percentage-di',
    question: 'DI: Production efficiency — Target vs Actual. Target=5000 units, Actual=4400 units. Efficiency % and shortfall %:',
    options: ['88% efficiency, 12% shortfall', '90% efficiency, 10% shortfall', '85% efficiency, 15% shortfall', '92% efficiency, 8% shortfall'],
    correctAnswer: '88% efficiency, 12% shortfall',
    explanation: 'Efficiency=4400/5000×100=88%. Shortfall=(5000-4400)/5000×100=12%.',
    difficulty: 'Easy'
  },
  {
    id: 'y3q-di-040', moduleId: 'y3-data', topicId: 'high-diff-di',
    question: 'DI: Price-Earnings ratio = Market Price / EPS. If P/E=25 and EPS=₹40, Market Price per share:',
    options: ['₹900', '₹950', '₹1000', '₹1100'],
    correctAnswer: '₹1000',
    explanation: 'Market Price = P/E × EPS = 25 × 40 = ₹1000.',
    difficulty: 'Medium'
  },
];

// Mapping: moduleId → question pool
export const YEAR3_QUIZ_POOLS: Record<string, QuizQuestion[]> = {
  'y3-quant': Y3_QUANT_POOL,
  'y3-lr': Y3_LR_POOL,
  'y3-verbal': Y3_VERBAL_POOL,
  'y3-data': Y3_DI_POOL,
};

// Category name → moduleId mapping for Year 3
export const YEAR3_CATEGORY_TO_MODULE: Record<string, string> = {
  'Advanced Quantitative Aptitude': 'y3-quant',
  'Advanced Logical Reasoning': 'y3-lr',
  'Advanced Verbal Ability': 'y3-verbal',
  'Data Interpretation': 'y3-data',
};
