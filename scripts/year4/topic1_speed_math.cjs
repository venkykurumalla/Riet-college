const topic1_speed_math = {
  id: 'y4-strat-speed-math-shortcuts',
  title: 'Mastery of Speed Mathematics: Vedic Shortcuts, Digital Sums & Option Elimination Strategies',
  yearId: 4,
  category: 'Strategic Placement Mastery',
  estimatedTime: '6–8 Hours (One-Day Mastery)',
  prerequisites: [
    'Basic arithmetic operations (Addition, Subtraction, Multiplication, Division)',
    'Elementary modular arithmetic and remainder theorems',
    'Percentage and fractional equivalences (1/2 to 1/20)',
    'Algebraic identity expansions (a+b)², (a-b)², (a²-b²)'
  ],
  learningObjectives: [
    'Master the Digital Sum (Casting Out Nines) verification technique to validate multi-digit arithmetic in 3 seconds',
    'Apply Vedic Multiplication Sutras (Urdhva Tiryagbhyam, Nikhilam Navatashcaramam) for 2×2, 3×3, and 4×4 digit products',
    'Calculate squares, square roots, cubes, and cube roots of large numbers instantaneously without pencil-and-paper long division',
    'Implement base-shift and deviation methods for numbers clustered near powers of 10 (100, 1000, 10000)',
    'Execute rapid percentage estimation using the 10%, 1%, and 0.1% split-and-merge mental protocol',
    'Utilize Unit Digit and Tens Digit parity filters to eliminate 75% of multiple-choice distractors in under 5 seconds',
    'Achieve 3x arithmetic processing speed in high-velocity timed assessments (TCS NQT, Infosys, AMCAT, eLitmus)'
  ],
  introduction: [
    'In competitive recruitment assessments and high-stakes aptitude tests (TCS Digital/Prime, Infosys DSE/SE, Cognizant GenC Next, CAT, Bank PO), the primary differentiator between average candidates and top 1% performers is not merely conceptual understanding, but Computational Velocity. In modern adaptive online tests, students are allotted an average of 45 to 60 seconds per question. Candidates who rely on conventional high-school long multiplication and manual long division exhaust 70% of their test duration on mechanical arithmetic, leaving zero buffer for complex logical deduction.',
    'Speed Mathematics is the systematic science of mental calculation derived from Vedic mathematical sutras, modular arithmetic principles, and algebraic symmetry. By transforming cumbersome multi-line calculations into single-line cross-multiplications, digital root invariants, and unit-digit parity filters, candidates can solve or eliminate distractors in complex calculations within 5 to 10 seconds.',
    'In this comprehensive masterclass chapter, we deconstruct all high-yield mental math protocols: Urdhva Tiryagbhyam (Vertically and Crosswise Multiplication), Nikhilam (Base Multiplication), Digital Sum Filtering (Casting Out Nines), Duplex Squaring Algorithms, Cube Root Extraction of Perfect Cubes, and 4-tier distractor elimination heuristics. We present 8 detailed textbook worked examples with arithmetic proofs and a comprehensive 22-question multi-tier challenge suite with complete step-by-step verification.'
  ],
  coreConcepts: [
    'Digital Sum (Casting Out Nines / Modulo-9 Invariant): The Digital Sum (DS) of a number is the single-digit sum obtained by repeatedly adding its constituent digits until a single integer between 1 and 9 remains (or 0/9 in Modulo-9 arithmetic). Theorem: The digital sum of an arithmetic expression [A op B] must equal the digital sum of its evaluated result: DS(A + B) = DS(DS(A) + DS(B)), and DS(A × B) = DS(DS(A) × DS(B)). Any option whose digital sum does not match the question’s digital sum is mathematically impossible.',
    'Vedic Cross-Multiplication (Urdhva Tiryagbhyam): The universal method for multiplying any two n-digit numbers in a single horizontal line. For two 2-digit numbers [ab] × [cd]: (1) Right vertical: b × d (write unit digit, carry rest). (2) Crosswise: (a × d) + (b × c) + carry (write digit, carry rest). (3) Left vertical: (a × c) + carry.',
    'Nikhilam (Base Method for Near-Base Multiplication): When multiplying numbers close to a power of 10 (e.g., base 100, 1000): Let numbers be (Base + d1) and (Base + d2), where d1 and d2 are deviations. Product = [(Base + d1 + d2) | (d1 × d2)]. If deviation is negative (e.g., 96 × 94), d1 = -4, d2 = -6: Product = [100 - 4 - 6 | (-4 × -6)] = [90 | 24] = 9,024.',
    'Duplex (Dwandwa Yoga) Method for Instant Squaring: The duplex D of a sequence of digits is defined as: D(a) = a²; D(ab) = 2ab; D(abc) = 2ac + b²; D(abcd) = 2ad + 2bc. The square of any number is computed from left-to-right or right-to-left by evaluating consecutive duplexes.',
    'Cube Root Extraction of Perfect Cubes: The last digit of a perfect cube maps uniquely to its root: 1³->1, 2³->8, 3³->7, 4³->4, 5³->5, 6³->6, 7³->3, 8³->2, 9³->9, 0³->0 (Notice: 2↔8 and 3↔7 swap, all others end in themselves!). To find the cube root of a number up to 6 digits (e.g., 148,877): Group the last 3 digits (877 -> ends in 7 -> unit digit is 3). Evaluate the remaining prefix (148): 5³=125 ≤ 148 < 6³=216 => tens digit is 5. Result = 53 instantly!',
    'Percentage Split-and-Merge Mental Arithmetic: Any complex percentage can be decomposed into a sum or difference of benchmark percentages: 10% (shift decimal left by 1), 1% (shift decimal left by 2), 5% (half of 10%), 0.5% (half of 1%), and 25% (half of half). To calculate 36% of 450: 36% = (10% × 3) + 5% + 1% = (45 × 3) + 22.5 + 4.5 = 135 + 27 = 162.'
  ],
  definitions: [
    {
      term: 'Digital Root (Digital Sum)',
      meaning:
        'The single-digit remainder obtained when a natural number is divided by 9 (with 9 or 0 representing exact multiples of 9), invariant across all polynomial and arithmetic transformations.'
    },
    {
      term: 'Urdhva Tiryagbhyam',
      meaning:
        'The primary Vedic mathematical sutra meaning "Vertically and Crosswise", providing an algorithm for multiplying numbers of arbitrary digit length in a single step.'
    },
    {
      term: 'Base Deviation',
      meaning:
        'The algebraic difference between a given number and its nearest operational reference power of ten (10, 100, 1000, etc.).'
    },
    {
      term: 'Unit Digit Filter',
      meaning:
        'An elimination technique that evaluates only the final arithmetic digit of an equation to discard multiple-choice options with non-matching terminal digits.'
    }
  ],
  rulesAndProperties: [
    {
      rule: 'Rule 1: The 9-Cancellation Invariant in Digital Sums',
      explanation:
        'When calculating the digital sum of any number, immediately ignore all 9s and any group of digits that sum to 9 (e.g., 7+2, 6+3, 5+4, 8+1). This reduces a 10-digit number to a single-digit sum in under 2 seconds.',
      example:
        'Find DS of 495,273: Ignore 9, ignore (4+5=9), ignore (2+7=9). Remaining digit = 3. Thus DS(495,273) = 3.'
    },
    {
      rule: 'Rule 2: Digital Sum Division Limitation',
      explanation:
        'Digital sum verification cannot be directly applied to fractions with division unless the denominator is multiplied by its modular inverse to convert the denominator’s digital sum to 1 (Multiply Denominator DS 2 by 5; DS 4 by 7; DS 5 by 2; DS 7 by 4; DS 8 by 8). DS cannot be used if the denominator has a digital sum of 3, 6, or 9 without prior algebraic cancellation.',
      example:
        'Evaluate DS of N / 7: Multiply numerator and denominator by 4: (N × 4) / (7 × 4) = (N × 4) / 28 -> DS(28) = 1. Thus DS = DS(N × 4).'
    },
    {
      rule: 'Rule 3: Square Ending in 5 Shortcut (Ekadhikena Purvena)',
      explanation:
        'Any number ending in 5 of the form [n5] has a square equal to [n × (n + 1) | 25].',
      example:
        '75² = (7 × 8) | 25 = 5625. 115² = (11 × 12) | 25 = 13225.'
    },
    {
      rule: 'Rule 4: Multiplicative Approximation by Reciprocal Pairs',
      explanation:
        'To divide by numbers close to standard fractions, multiply by the inverse: Dividing by 0.1428 is multiplying by 7; dividing by 0.1667 is multiplying by 6; dividing by 0.125 is multiplying by 8.',
      example:
        '840 / 0.1428 ≈ 840 × 7 = 5,880.'
    }
  ],
  formulas: [
    {
      name: 'Digital Sum Equation',
      formula: 'DS(Expression) = DS(Result) (mod 9)',
      variables: ['DS = Single-digit sum modulo 9'],
      whenToUse: 'Verifying large multiplications, additions, and subtractions in 3 seconds.',
      simpleExample: '143 × 25 = 3575. DS(143) = 1+4+3 = 8. DS(25) = 7. DS(8×7=56) = 11 = 2. DS(3575) = 3+5+7+5 = 20 = 2. Matched!'
    },
    {
      name: 'Vedic Base Multiplication (Nikhilam)',
      formula: '(B + a)(B + b) = [B + a + b] × B + (a × b)',
      variables: ['B = Base (100, 1000)', 'a, b = Deviations from Base'],
      whenToUse: 'Multiplying numbers close to 100, 1000, etc.',
      simpleExample: '107 × 108: a=7, b=8. Left = 100 + 7 + 8 = 115. Right = 7 × 8 = 56. Product = 11,556.'
    },
    {
      name: 'Difference of Squares for Close Numbers',
      formula: 'a × b = [(a + b)/2]² - [(a - b)/2]²',
      variables: ['a, b = Two numbers with same parity (both even or both odd)'],
      whenToUse: 'Multiplying two numbers equidistant from an easy round number.',
      simpleExample: '48 × 52: Mean = 50, diff = 2. Product = 50² - 2² = 2500 - 4 = 2,496.'
    }
  ],
  problemVariations: [
    {
      type: 'Variation 1: Multi-Digit Complex Multiplication Verification',
      description: 'Verifying large product equations or evaluating missing digits using Digital Sum invariants.',
      sampleSnippet: 'Which of the following is the exact product of 4,387 × 6,912?'
    },
    {
      type: 'Variation 2: Near-Base High-Speed Arithmetic',
      description: 'Multiplying numbers slightly above or below 100, 200, 500, or 1000.',
      sampleSnippet: 'Calculate 994 × 988 mentally in under 5 seconds.'
    },
    {
      type: 'Variation 3: Instantaneous Square and Cube Root Extraction',
      description: 'Finding the exact root of 4, 5, or 6-digit perfect powers without long division.',
      sampleSnippet: 'Find the cube root of 658,503 without using pen and paper.'
    },
    {
      type: 'Variation 4: Mental Percentage Split-and-Merge',
      description: 'Evaluating complex compound percentages and commercial discounts mentally.',
      sampleSnippet: 'Calculate 47.5% of 640 in your head.'
    },
    {
      type: 'Variation 5: Multi-Step Option Elimination by Unit & Digital Roots',
      description: 'Filtering multiple-choice options in under 10 seconds without solving the full problem.',
      sampleSnippet: 'Simplify: (345² - 255²) / 90. Which option matches?'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-spd-1',
      title: 'Digital Sum Multiplier Invariant Verification',
      question:
        'Which of the following options represents the exact product of 7,384 × 5,296?\n(A) 39,105,664\n(B) 39,105,724\n(C) 39,105,864\n(D) 39,106,664',
      given: ['Numbers: 7,384 and 5,296', 'Four closely spaced multiple-choice options.'],
      conceptUsed: 'Digital Sum (Modulo-9 Invariant) & Unit Digit Filtering.',
      stepByStep: [
        'Step 1: Check Unit Digit filter first: Unit digit of 7,384 is 4; unit digit of 5,296 is 6. Product unit digit = 4 × 6 = 24 -> ends in 4. All four options end in 4! Unit digit filter leaves all 4 active.',
        'Step 2: Calculate Digital Sum of the question: 7,384 × 5,296.\n- DS(7384): 7 + 3 + 8 + 4 = 22 -> 2 + 2 = 4.\n- DS(5296): Ignore 9, (5+2+6 = 13) -> 1 + 3 = 4.\n- Product DS = DS(4 × 4 = 16) -> 1 + 6 = 7.\nThe correct answer MUST have a Digital Sum of 7!',
        'Step 3: Test Digital Sum of each option:\n- (A) 39,105,664: Ignore 9. Digits: 3 + 1 + 0 + 5 + 6 + 6 + 4 = 25 -> 2 + 5 = 7. (Matches!)\n- (B) 39,105,724: Ignore 9. Digits: 3 + 1 + 0 + 5 + 7 + 2 + 4 = 22 -> 2 + 2 = 4. (Mismatch, discard)\n- (C) 39,105,864: Ignore 9. Digits: 3 + 1 + 0 + 5 + 8 + 6 + 4 = 27 -> 2 + 7 = 9. (Mismatch, discard)\n- (D) 39,106,664: Ignore 9. Digits: 3 + 1 + 0 + 6 + 6 + 6 + 4 = 26 -> 2 + 6 = 8. (Mismatch, discard)',
        'Step 4: Only Option (A) has DS = 7. Selected in 8 seconds without long multiplication!'
      ],
      finalAnswer: '(A) 39,105,664',
      whyMethodWorks:
        'Modulo-9 arithmetic is an inviolable algebraic homomorphism: any valid base-10 arithmetic equation must maintain digital sum equality.',
      commonTrap:
        'Attempting 4-digit long multiplication by hand, consuming 2 minutes and risking simple arithmetic carry errors.'
    },
    {
      id: 'ex-spd-2',
      title: 'Nikhilam Base-1000 Multiplication',
      question:
        'Multiply 992 × 986 mentally using the Vedic Nikhilam sutra.',
      given: ['Numbers: 992 and 986', 'Operational Base = 1,000'],
      conceptUsed: 'Base Deviation Formulation: Base = 1000, d1 = -8, d2 = -14.',
      stepByStep: [
        'Step 1: Identify Base = 1,000. Calculate deviations:\n- d1 = 992 - 1000 = -008\n- d2 = 986 - 1000 = -014',
        'Step 2: Calculate Left Part of product = Number 1 + Deviation 2 (or Number 2 + Deviation 1):\nLeft = 992 + (-14) = 978 (or 986 + (-8) = 978).',
        'Step 3: Calculate Right Part of product = d1 × d2:\nRight = (-8) × (-14) = +112.',
        'Step 4: Since Base 1,000 has 3 zeros, the right part must occupy exactly 3 digit places: 112 has 3 digits.',
        'Step 5: Combine Left and Right parts: 978 | 112 = 978,112.'
      ],
      finalAnswer: '978,112',
      whyMethodWorks:
        'Algebraic proof: (1000 - 8)(1000 - 14) = 1,000,000 - 1000(8 + 14) + (8 × 14) = 1000(1000 - 22) + 112 = 1000(978) + 112 = 978,112.',
      commonTrap:
        'Failing to pad the right part with leading zeros if the product of deviations has fewer digits than zeros in the base.'
    },
    {
      id: 'ex-spd-3',
      title: 'Single-Line Vedic Cross-Multiplication (Urdhva Tiryagbhyam)',
      question:
        'Multiply 64 × 73 using the single-line vertical and crosswise algorithm.',
      given: ['Numbers: 64 and 73'],
      conceptUsed: '2×2 Urdhva Tiryagbhyam: Step 1 = Vertical Right, Step 2 = Crosswise Sum, Step 3 = Vertical Left.',
      stepByStep: [
        'Step 1: Right Vertical: 4 × 3 = 12. Write down 2, Carry forward 1.',
        'Step 2: Crosswise Multiplication and Sum: (6 × 3) + (4 × 7) + Carry(1) = 18 + 28 + 1 = 47. Write down 7, Carry forward 4.',
        'Step 3: Left Vertical: (6 × 7) + Carry(4) = 42 + 4 = 46. Write down 46.',
        'Step 4: Combine digits from left to right: 46 | 7 | 2 = 4,672.'
      ],
      finalAnswer: '4,672',
      whyMethodWorks:
        'Expands (60 + 4)(70 + 3) = (60×70) + (60×3 + 4×70) + (4×3) directly into positional place values without scratch paper.',
      commonTrap:
        'Forgetting to add the intermediate carry digits during the crosswise summation.'
    },
    {
      id: 'ex-spd-4',
      title: 'Cube Root of a 6-Digit Perfect Cube in 3 Seconds',
      question:
        'Find the exact cube root of 493,039 without long division.',
      given: ['Number: 493,039 (known perfect cube)'],
      conceptUsed: 'Terminal Digit Cube Invariance & Nearest Prefix Cube Bounding.',
      stepByStep: [
        'Step 1: Split the 6-digit number into two groups: Prefix [493] and Suffix [039].',
        'Step 2: Evaluate Suffix [039]: The number ends in digit 9. Since 9³ = 729 ends in 9, the unit digit of the cube root MUST be 9.',
        'Step 3: Evaluate Prefix [493]: Find the largest integer whose cube is less than or equal to 493.\n- 7³ = 343 ≤ 493\n- 8³ = 512 > 493\nThus, the tens digit MUST be 7.',
        'Step 4: Combine tens and units digits: Tens = 7, Units = 9 => Cube Root = 79.'
      ],
      finalAnswer: '79',
      whyMethodWorks:
        'Because the mapping of unit digits to cubes mod 10 is a one-to-one bijection, and cube values grow monotonically, the root is uniquely determined by inspection.',
      commonTrap:
        'Confusing square roots (which have two possible unit digits) with cube roots (which have a unique 1-to-1 unit digit mapping).'
    },
    {
      id: 'ex-spd-5',
      title: 'Instant Square Root of a 5-Digit Perfect Square',
      question:
        'Find the square root of 15,129.',
      given: ['Number: 15,129 (perfect square)'],
      conceptUsed: 'Last Two Digits Suffix Bounding & Midpoint 5-Squaring Anchor.',
      stepByStep: [
        'Step 1: Group the number: Prefix [151] and Suffix [29].',
        'Step 2: Evaluate Suffix [29]: Ends in 9. Numbers whose squares end in 9 are 3 or 7. So the unit digit is either 3 or 7.',
        'Step 3: Evaluate Prefix [151]: Largest square ≤ 151 is 12² = 144 (since 13² = 169). Thus, the base tens is 12. Candidate roots are 123 or 127.',
        'Step 4: Use the 125² midpoint anchor (Ekadhikena Purvena):\n125² = (12 × 13) | 25 = 156 | 25 = 15,625.',
        'Step 5: Compare 15,129 with 15,625: Since 15,129 < 15,625, the root must be the smaller candidate => 123.'
      ],
      finalAnswer: '123',
      whyMethodWorks:
        'Midpoint comparison using the instantaneous [n(n+1)|25] formula unambiguously eliminates the incorrect candidate in 2 seconds.',
      commonTrap:
        'Guessing 127 without checking the 125² anchor value.'
    },
    {
      id: 'ex-spd-6',
      title: 'Mental Percentage Split-and-Merge',
      question:
        'Calculate 37.5% of 960 entirely in your head.',
      given: ['Percentage: 37.5%', 'Base: 960'],
      conceptUsed: 'Fractional Equivalence vs Benchmark Percentage Decomposition.',
      stepByStep: [
        'Method 1 (Fractional Equivalence): Recall that 12.5% = 1/8. Therefore, 37.5% = 3 × 12.5% = 3/8. Value = (3/8) × 960 = 3 × 120 = 360.',
        'Method 2 (Benchmark Split): 37.5% = 25% + 12.5% = (1/4 of 960) + (1/8 of 960) = 240 + 120 = 360.',
        'Method 3 (Complementary Split): 50% of 960 = 480. 12.5% of 960 = 120. 37.5% = 50% - 12.5% = 480 - 120 = 360.'
      ],
      finalAnswer: '360',
      whyMethodWorks:
        'Standard eighths and sixteenths fraction tables (1/8=12.5%, 3/8=37.5%, 5/8=62.5%, 7/8=87.5%) transform complex decimals into basic integer division.',
      commonTrap:
        'Multiplying 960 × 37.5 and dividing by 100 using long multiplication.'
    },
    {
      id: 'ex-spd-7',
      title: 'Equidistant Mean Squaring Shortcut',
      question:
        'Compute 87 × 93 without long multiplication.',
      given: ['Numbers: 87 and 93'],
      conceptUsed: 'Difference of Squares: (M - d)(M + d) = M² - d².',
      stepByStep: [
        'Step 1: Identify the arithmetic mean M of the two numbers: M = (87 + 93) / 2 = 90.',
        'Step 2: Identify deviation d from the mean: d = 90 - 87 = 93 - 90 = 3.',
        'Step 3: Express product as (90 - 3)(90 + 3) = 90² - 3².',
        'Step 4: Evaluate squares: 90² = 8,100; 3² = 9.',
        'Step 5: Subtract: 8,100 - 9 = 8,091.'
      ],
      finalAnswer: '8,091',
      whyMethodWorks:
        'Converts multiplication into squaring a round number ending in zero and subtracting a single-digit square.',
      commonTrap:
        'Miscalculating 8,100 - 9 as 8,099.'
    },
    {
      id: 'ex-spd-8',
      title: 'Option Elimination in Multi-Step Polynomial Expression',
      question:
        'Evaluate the expression: 48² - 32² + 25 × 16.\nWhich option is correct?\n(A) 1,580\n(B) 1,680\n(C) 1,720\n(D) 1,840',
      given: ['Expression: (48² - 32²) + (25 × 16)'],
      conceptUsed: 'Difference of Squares Identity & Benchmark Multiplication: a² - b² = (a+b)(a-b).',
      stepByStep: [
        'Step 1: Simplify 48² - 32² using (a + b)(a - b):\n48² - 32² = (48 + 32)(48 - 32) = 80 × 16 = 1,280.',
        'Step 2: Simplify 25 × 16: Dividing 16 by 4 and multiplying 25 by 4 gives 100 × 4 = 400.',
        'Step 3: Add the two evaluated components: 1,280 + 400 = 1,680.',
        'Step 4: Match with Option (B).'
      ],
      finalAnswer: '(B) 1,680',
      whyMethodWorks:
        'Factoring a² - b² avoids calculating 2304 and 1024 manually.',
      commonTrap:
        'Calculating 48² by long multiplication and 32² by long multiplication, wasting 45 seconds.'
    }
  ],
  alternativeMethods: [
    {
      title: 'Multiplication Technique Comparison: 98 × 97',
      standardMethod:
        'Traditional Long Multiplication: Multiply 98 by 7, multiply 98 by 90, sum the two 4-digit lines.',
      shortcutMethod:
        'Vedic Base-100 (Nikhilam): d1=-2, d2=-3 => Left = 98-3 = 95, Right = (-2)×(-3) = 06 => 9,506 (Instant 3 seconds).',
      bestApproachExplanation:
        'For numbers near 100, Nikhilam is 5x faster with 0% chance of addition carry mistakes.'
    }
  ],
  fasterMethods: [
    'Multiply by 25 Shortcut: Divide the number by 4 and append two zeros (e.g., 64 × 25 = 64/4 = 16 -> 1,600).',
    'Multiply by 125 Shortcut: Divide the number by 8 and append three zeros (e.g., 72 × 125 = 72/8 = 9 -> 9,000).',
    'Multiply by 11 Shortcut: Write first digit, add adjacent pairs, write last digit (e.g., 352 × 11 = 3 | 3+5 | 5+2 | 2 = 3,872).'
  ],
  commonMistakes: [
    {
      mistake: 'Applying Digital Sum to division problems without modular inverses.',
      whyItHappens: 'Dividing digital sums directly (e.g., DS(24)/DS(6) = 6/6 = 1, when actual DS(4) is 4).',
      howToAvoid: 'Never divide digital sums directly. Multiply the denominator by its modular inverse to make denominator DS = 1.'
    },
    {
      mistake: 'Forgetting leading zero padding in Base Multiplication.',
      whyItHappens: 'Writing 99 × 98 with base 100 as 972 instead of 9702 (d1×d2 = -1×-2 = 2, requires 2 digits: 02).',
      howToAvoid: 'The right-hand side must have EXACTLY as many digits as there are zeros in the base.'
    }
  ],
  placementStrategy: [
    'TCS NQT Advanced Quantitative: 60-70% of numerical questions can be verified in under 10 seconds using Digital Sums.',
    'Infosys Reasoning / Quant: Use Unit Digit and Ten’s Digit filters to eliminate 3 out of 4 multiple-choice options immediately.',
    'AMCAT / CoCubes / eLitmus: High speed mental percentage splits (10%, 1%, 5%) enable completing DI sets 4 minutes ahead of time.'
  ],
  practiceQuestions: [
    {
      id: 'p-spd-1',
      tier: 'Foundation',
      question: 'What is the digital sum of the number 8,472,931?',
      options: ['5', '6', '7', '8'],
      correctOptionIndex: 2,
      explanation: 'Cancel 9, cancel (7+2=9), cancel (8+1=9). Remaining digits: 4 + 3 = 7.'
    },
    {
      id: 'p-spd-2',
      tier: 'Foundation',
      question: 'Calculate 85² using the Ekadhikena Purvena sutra.',
      options: ['7,125', '7,225', '7,325', '7,425'],
      correctOptionIndex: 1,
      explanation: '8 × (8 + 1) | 25 = 8 × 9 | 25 = 72 | 25 = 7,225.'
    },
    {
      id: 'p-spd-3',
      tier: 'Foundation',
      question: 'What is the product of 48 × 25?',
      options: ['1,100', '1,200', '1,250', '1,300'],
      correctOptionIndex: 1,
      explanation: '48 / 4 = 12. Append two zeros = 1,200.'
    },
    {
      id: 'p-spd-4',
      tier: 'Foundation',
      question: 'What is 54 × 11?',
      options: ['584', '594', '604', '614'],
      correctOptionIndex: 1,
      explanation: 'First digit 5, middle (5+4=9), last digit 4 => 594.'
    },
    {
      id: 'p-spd-5',
      tier: 'Foundation',
      question: 'What is the cube root of the perfect cube 175,616?',
      options: ['46', '54', '56', '66'],
      correctOptionIndex: 2,
      explanation: 'Ends in 6 -> unit digit is 6. Prefix 175: 5³ = 125 ≤ 175 < 6³ = 216 -> tens digit is 5. Result = 56.'
    },
    {
      id: 'p-spd-6',
      tier: 'Foundation',
      question: 'What is 15% of 480?',
      options: ['68', '72', '76', '80'],
      correctOptionIndex: 1,
      explanation: '10% of 480 = 48. 5% of 480 = 24. 15% = 48 + 24 = 72.'
    },
    {
      id: 'p-spd-7',
      tier: 'Intermediate',
      question: 'Using Base 100, calculate 104 × 109.',
      options: ['11,236', '11,336', '11,436', '11,536'],
      correctOptionIndex: 1,
      explanation: 'Left = 104 + 9 = 113. Right = 4 × 9 = 36. Product = 11,336.'
    },
    {
      id: 'p-spd-8',
      tier: 'Intermediate',
      question: 'Evaluate 67 × 73 using difference of squares.',
      options: ['4,881', '4,891', '4,901', '4,911'],
      correctOptionIndex: 1,
      explanation: 'Mean = 70, diff = 3. 70² - 3² = 4,900 - 9 = 4,891.'
    },
    {
      id: 'p-spd-9',
      tier: 'Intermediate',
      question: 'Find the square root of 7,921.',
      options: ['81', '89', '91', '99'],
      correctOptionIndex: 1,
      explanation: 'Ends in 1 -> units 1 or 9. Prefix 79 -> tens 8. Anchor 85² = 7225. Since 7921 > 7225, root is 89.'
    },
    {
      id: 'p-spd-10',
      tier: 'Intermediate',
      question: 'What is the product of 996 × 995 using Base 1000?',
      options: ['991,010', '991,020', '990,020', '992,020'],
      correctOptionIndex: 1,
      explanation: 'Deviations: -4, -5. Left = 996 - 5 = 991. Right = (-4)×(-5) = 020 (3 digits). Product = 991,020.'
    },
    {
      id: 'p-spd-11',
      tier: 'Intermediate',
      question: 'What is 62.5% of 640?',
      options: ['380', '400', '420', '440'],
      correctOptionIndex: 1,
      explanation: '62.5% = 5/8. (5/8) × 640 = 5 × 80 = 400.'
    },
    {
      id: 'p-spd-12',
      tier: 'Intermediate',
      question: 'Multiply 32 × 125 mentally.',
      options: ['3,600', '3,800', '4,000', '4,200'],
      correctOptionIndex: 2,
      explanation: '32 / 8 = 4. Append three zeros = 4,000.'
    },
    {
      id: 'p-spd-13',
      tier: 'Advanced',
      question: 'Which of the following is the exact product of 2,437 × 3,124?\n(A) 7,613,188\n(B) 7,613,288\n(C) 7,614,188\n(D) 7,613,198',
      options: ['7,613,188', '7,613,288', '7,614,188', '7,613,198'],
      correctOptionIndex: 0,
      explanation: 'Unit digit: 7 × 4 = 28 -> ends in 8. DS(2437) = 2+4+3+7 = 16 = 7. DS(3124) = 3+1+2+4 = 10 = 1. Product DS = 7 × 1 = 7. Option (A) DS: 7+6+1+3+1+8+8 = 34 = 7 (Match!). Option (B) DS = 8. Option (C) DS = 8. Option (D) DS = 8.'
    },
    {
      id: 'p-spd-14',
      tier: 'Advanced',
      question: 'Calculate 1012 × 1015 using Base 1000.',
      options: ['1,027,180', '1,027,170', '1,026,180', '1,028,180'],
      correctOptionIndex: 0,
      explanation: 'Deviations: +12, +15. Left = 1012 + 15 = 1027. Right = 12 × 15 = 180 (3 digits). Result = 1,027,180.'
    },
    {
      id: 'p-spd-15',
      tier: 'Advanced',
      question: 'What is the cube root of 912,673?',
      options: ['93', '97', '87', '99'],
      correctOptionIndex: 1,
      explanation: 'Ends in 3 -> unit digit is 7. Prefix 912: 9³ = 729 ≤ 912 < 10³ = 1000 -> tens digit 9. Result = 97.'
    },
    {
      id: 'p-spd-16',
      tier: 'Advanced',
      question: 'Simplify: 56² - 44² without multiplying full squares.',
      options: ['1,100', '1,200', '1,250', '1,300'],
      correctOptionIndex: 1,
      explanation: '(56 + 44)(56 - 44) = 100 × 12 = 1,200.'
    },
    {
      id: 'p-spd-17',
      tier: 'Advanced',
      question: 'Calculate 72 × 68 using mean difference of squares.',
      options: ['4,886', '4,896', '4,906', '4,916'],
      correctOptionIndex: 1,
      explanation: 'Mean = 70, diff = 2. 70² - 2² = 4,900 - 4 = 4,896.'
    },
    {
      id: 'p-spd-18',
      tier: 'Placement-Style',
      question: 'In a timed test, evaluate (4,320 / 0.1667) approximately in your head.',
      options: ['24,000', '25,920', '27,500', '28,800'],
      correctOptionIndex: 1,
      explanation: 'Dividing by 0.1667 (1/6) is multiplying by 6: 4,320 × 6 = 25,920.'
    },
    {
      id: 'p-spd-19',
      tier: 'Placement-Style',
      question: 'What is the value of 84 × 86?',
      options: ['7,124', '7,224', '7,324', '7,424'],
      correctOptionIndex: 1,
      explanation: 'Digits start with same tens 8, units sum to 10 (4+6=10). Rule: 8 × (8+1) | 4×6 = 72 | 24 = 7,224.'
    },
    {
      id: 'p-spd-20',
      tier: 'Placement-Style',
      question: 'If DS(A) = 5 and DS(B) = 4, what is the Digital Sum of (A² + B²)?',
      options: ['2', '3', '4', '5'],
      correctOptionIndex: 3,
      explanation: 'DS(A²) = DS(5² = 25) = 7. DS(B²) = DS(4² = 16) = 7. DS(A² + B²) = DS(7 + 7 = 14) = 5.'
    },
    {
      id: 'p-spd-21',
      tier: 'Placement-Style',
      question: 'Calculate 98 × 98 mentally.',
      options: ['9,504', '9,604', '9,704', '9,804'],
      correctOptionIndex: 1,
      explanation: 'Deviations from 100: -2, -2. Left = 98 - 2 = 96. Right = (-2)² = 04. Result = 9,604.'
    },
    {
      id: 'p-spd-22',
      tier: 'Placement-Style',
      question: 'What is 87.5% of 400?',
      options: ['320', '340', '350', '360'],
      correctOptionIndex: 2,
      explanation: '87.5% = 7/8. (7/8) × 400 = 7 × 50 = 350.'
    }
  ],
  mixedChallenges: [
    {
      id: 'mc-spd-1',
      title: 'Digital Sum Equation Balancing with Missing Variables',
      question:
        'Find the single digit d such that 3,58d × 47 = 168,588 is an exact mathematical equality.',
      conceptUsed: 'Modulo-9 Inversion & Digital Sum Balancing.',
      solutionSteps: [
        'Step 1: Compute DS of RHS: 168,588 -> 1 + 6 + 8 + 5 + 8 + 8 = 36 -> DS = 9 (or 0).',
        'Step 2: Compute DS of 47: 4 + 7 = 11 -> DS = 2.',
        'Step 3: Compute DS of 3,58d: 3 + 5 + 8 + d = 16 + d = 7 + d.',
        'Step 4: Balance DS equation: DS((7 + d) × 2) = 9 (or 0) mod 9.\n2(7 + d) ≡ 0 (mod 9) => 14 + 2d ≡ 0 (mod 9) => 5 + 2d ≡ 0 (mod 9) => 2d ≡ 4 (mod 9) => d = 2.',
        'Step 5: Verify: 3,582 × 47 = 168,588 (Exact match!).'
      ],
      finalAnswer: 'd = 2'
    },
    {
      id: 'mc-spd-2',
      title: 'Vedic Base-500 Scaled Multiplication',
      question:
        'Multiply 492 × 496 using Vedic working base methodology.',
      conceptUsed: 'Sub-Base Multiplier Scaling: Base = 1000 / 2 = 500.',
      solutionSteps: [
        'Step 1: Operational Sub-Base = 500 (1000 / 2). Deviations from 500: d1 = -8, d2 = -4.',
        'Step 2: Left Raw = 492 + (-4) = 488.',
        'Step 3: Since working base 500 is 1000 / 2, divide Left Raw by 2: 488 / 2 = 244.',
        'Step 4: Right Part = (-8) × (-4) = 32. Since primary base is 1000 (3 zeros), right part is 032.',
        'Step 5: Combine Left and Right: 244 | 032 = 244,032.'
      ],
      finalAnswer: '244,032'
    },
    {
      id: 'mc-spd-3',
      title: 'Nested Roots and Radical Mental Simplification',
      question:
        'Evaluate mentally: sqrt( 41 - sqrt( 21 + sqrt( 13 + sqrt( 9 ) ) ) ).',
      conceptUsed: 'Innermost Radical Collapse.',
      solutionSteps: [
        'Step 1: Innermost root: sqrt(9) = 3.',
        'Step 2: Next layer: sqrt(13 + 3) = sqrt(16) = 4.',
        'Step 3: Next layer: sqrt(21 + 4) = sqrt(25) = 5.',
        'Step 4: Outermost layer: sqrt(41 - 5) = sqrt(36) = 6.'
      ],
      finalAnswer: '6'
    }
  ],
  quickRevision: [
    'Digital Sum: Sum digits repeatedly until 1-9; ignore all 9s and pairs summing to 9.',
    'Ekadhikena Purvena: For [n5]², Product = [n(n+1) | 25].',
    'Nikhilam Base Method: (B+a)(B+b) = [B+a+b | a×b].',
    'Cube Roots of Perfect Cubes: Last digit maps 1-to-1 (2↔8, 3↔7, all others invariant).',
    'Fractions to Percentages: 1/8=12.5%, 3/8=37.5%, 5/8=62.5%, 7/8=87.5%.'
  ],
  keyTakeaways: [
    'Use Digital Sums to eliminate wrong multiple-choice options in under 5 seconds.',
    'Always verify the Unit Digit before attempting any multi-step calculation.',
    'Multiply by 25 by dividing by 4; multiply by 125 by dividing by 8.',
    'Use Difference of Squares a² - b² = (a+b)(a-b) to multiply numbers equidistant from a round mean.'
  ],
  selfCheck: [
    'Can you calculate the digital sum of 738,492 in 2 seconds (6)?',
    'Can you find the cube root of 250,047 by inspection (63)?',
    'Can you multiply 97 × 94 using base-100 deviations (9,118)?',
    'Can you evaluate 37.5% of 800 without writing on paper (300)?'
  ],
  sources: [
    'Vedic Mathematics — Swami Bharati Krishna Tirtha',
    'Secrets of Mental Math — Arthur Benjamin & Michael Shermer',
    'Fast Track Objective Arithmetic — Rajesh Verma'
  ]
};

module.exports = topic1_speed_math;
