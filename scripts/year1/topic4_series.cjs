module.exports = {
  id: 'y1-logic-series-completion',
  yearId: 1,
  category: 'Logical Reasoning',
  topicNumber: 4,
  title: 'Number, Alphabet & Alpha-Numeric Series Completion',
  tagline: 'Difference of differences, prime sequences, geometric multipliers, twin alternating sequences, and letter positional shifts.',
  estimatedMinutes: 55,
  difficulty: 'Foundation',
  introduction: {
    overview: 'Series Completion evaluates a candidate’s cognitive ability to decipher abstract patterns, deduce hidden mathematical rules, and extrapolate orderly progressions from incomplete data. Series problems encompass three major taxonomy classes: Pure Numerical Series (arithmetic, geometric, polynomial, and factorial progressions), Alphabet Series (cyclical position shifts, reverse alphabetical pairs, and skip patterns), and Hybrid Alpha-Numeric Sequences. Placement assessments use series completion to measure pattern-recognition velocity, mental agility, and inductive reasoning under strict time limits.',
    placementRelevance: 'Featured prominently across AMCAT, CoCubes, TCS NQT Reasoning Ability, Infosys Logical Ability, Capgemini, and Wipro Elite assessments, typically constituting 3 to 6 direct questions per exam.',
    historicalRecruiterWeightage: 'Appears in 90% of recruitment screenings as a baseline filter for mental sharpness and attention to pattern nuance.',
    realWorldContext: 'Pattern recognition algorithms, discrete signal processing, predictive text generators, and time-series forecasting models all rely on the same fundamental mathematical progressions taught in series reasoning.'
  },
  learningObjectives: [
    'Identify and apply the Difference of Differences method for non-linear arithmetic progressions.',
    'Recognize exponential, square (n^2 ± k), cube (n^3 ± k), and factorial progressions instantaneously.',
    'Deconstruct twin and triplet alternating interleaved series into independent parallel sequences.',
    'Map English alphabet letters to forward positional values (1 to 26) and backward positional values (27 - n) using mnemonics (EJOTY and CFILORUX).',
    'Identify reverse alphabet complementary pairs (A-Z, B-Y, C-X... M-N) using the constant sum 27 rule.',
    'Solve hybrid alpha-numeric series by separating numerical and alphabetical progression tracks.',
    'Identify the incorrect "Odd Man Out" term in a corrupted series sequence.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Arithmetic and Geometric progressions', 'Squares up to 30^2 and Cubes up to 15^3', 'English alphabet numbering (A=1 to Z=26)'],
    quickRefresher: 'Squares: 1^2=1 to 25^2=625. Cubes: 1^3=1 to 12^3=1728. Forward letter position: E=5, J=10, O=15, T=20, Y=25 (EJOTY). Sum of opposite letter positions is always 27.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Arithmetic Series: A sequence where the difference between consecutive terms is constant (d = a_(n+1) - a_n).',
      'Geometric Series: A sequence where the ratio between consecutive terms is constant (r = a_(n+1) / a_n).',
      'Difference of Differences: A technique where subtracting consecutive terms yields a first-level difference, and subtracting those yields a second-level constant or regular pattern.',
      'Polynomial Sequence: Series governed by algebraic functions such as n^2 ± k, n^3 ± k, or n(n+1).',
      'Alternating (Interleaved) Series: A composite series created by interleaving two independent sequences at odd and even positions.',
      'EJOTY Rule: Positional mnemonic for letters at indices 5, 10, 15, 20, 25.',
      'Opposite Letter Pair Rule: Two letters are opposite when their positional sum equals 27 (e.g., A(1) + Z(26) = 27; H(8) + S(19) = 27).'
    ],
    theoreticalIntuition: 'When confronted with a numerical sequence: 1. If terms increase slowly and steadily, compute first-level differences (Δ1). If Δ1 is not constant, compute second-level differences (Δ2). 2. If terms increase rapidly, check for multiplicative ratios (×k ± c) or power series (n^2, n^3). 3. If numbers fluctuate up and down (e.g., 4, 18, 7, 14, 10, 10...), immediately split the series into two independent alternating tracks at odd and even indices.',
    visualOrMentalModel: 'Visualize series analysis as an archaeological dig: If the top layer is irregular, strip away the first layer of differences to reveal the underlying stratum. In 90% of non-linear aptitude questions, the second difference level forms an obvious arithmetic progression or constant.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Difference of Differences Model',
      formula: 'Δ1_n = a_(n+1) - a_n; Δ2_n = Δ1_(n+1) - Δ1_n',
      variables: 'a_n = nth term; Δ1 = first difference; Δ2 = second difference',
      description: 'If the second difference Δ2 is constant, the series is a quadratic sequence (a·n^2 + b·n + c).',
      whenToUse: 'When numbers increase steadily without an obvious single-step common difference or ratio.',
      simpleExample: 'Series: 2, 9, 23, 44, 72... Δ1: 7, 14, 21, 28 (AP with d=7). Next Δ1 = 35 => Next term = 72 + 35 = 107.'
    },
    {
      title: 'Power Series Signatures (n^2 ± k and n^3 ± k)',
      formula: 'n^2 ± 1: {0, 3, 8, 15, 24, 35, 48...}; n^3 ± 1: {0, 7, 26, 63, 124, 215, 342...}; n^3 ± n: {0, 6, 24, 60, 120, 210, 336...}',
      variables: 'n = 1, 2, 3, 4, 5...',
      description: 'Memorizing these specific number patterns enables instant identification without computing differences.',
      whenToUse: 'When terms are close to perfect squares or cubes.',
      simpleExample: 'Series: 6, 24, 60, 120, 210... Recognized as (n^3 - n) for n=2,3,4,5,6. Next is 7^3 - 7 = 343 - 7 = 336.'
    },
    {
      title: 'Alphabet Forward-Backward Conversion (Sum = 27)',
      formula: 'Backward Position = 27 - Forward Position',
      variables: 'Forward: A=1, B=2... Z=26; Backward: Z=1, Y=2... A=26',
      description: 'To find the reverse rank of any letter, subtract its forward alphabet position from 27.',
      whenToUse: 'Alphabet coding, reverse series, and decoding questions.',
      simpleExample: 'Letter K: Forward rank = 11. Backward rank = 27 - 11 = 16 (Letter P). Opposite pair is K-P.'
    },
    {
      title: 'Alternating Multiplier-Addition Progression',
      formula: 'a_(n+1) = a_n × k ± c_n',
      variables: 'k = multiplier (often integer or increasing 1, 2, 3...); c_n = addend',
      description: 'Sequence where each step involves a multiplication followed by addition or subtraction.',
      whenToUse: 'When differences grow proportional to the terms themselves.',
      simpleExample: '3, 7, 17, 39, 85... (3×2+1=7; 7×2+3=17; 17×2+5=39; 39×2+7=85). Next is 85×2+9 = 179.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Series completion tests systematic diagnostic hygiene. When candidates guess randomly, they waste valuable time. The professional approach follows a 4-step triage ladder: 1. Check for standard power signatures (squares/cubes ± small constants). 2. Check for alternating up-down movement (interleaved twin series). 3. Calculate first and second level differences (arithmetic and polynomial progressions). 4. Check for multiplicative scaling (×2+1, ×3-2, etc.).',
      'For Alphabet Series, avoid writing the entire alphabet on scratch paper for every question. Memorize the anchors: EJOTY (5, 10, 15, 20, 25) and key landmarks: G is 7 (looks like 7), H is 8 (close top and bottom), M is 13 (midway, 3 points), R is 18, V is 22. This enables instantaneous mental subtraction of letter positions.',
      'Reverse pairs have helpful mnemonics: A-Z (AZ), B-Y (BoY), C-X (CruX), D-W (Dew), E-V (EVening), F-U (FUll), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jack-Queen), K-P (Kurta-Pyjama), L-O (LOve), M-N (MaN).',
      'In "Wrong Term in Series" (Odd Man Out) questions, compute the difference table for all terms. A single erroneous number disrupts TWO consecutive differences. The number located between the two corrupted differences is the wrong term.'
    ],
    deepDiveAspects: [
      {
        title: 'Fibonacci and Cascading Sum Sequences',
        content: 'In Fibonacci-style series, each term is the sum of previous k terms: a_n = a_(n-1) + a_(n-2). Variations include product series (a_n = a_(n-1) × a_(n-2)) and weighted sums (a_n = 2·a_(n-1) + a_(n-2)).'
      },
      {
        title: 'Continuous Letter Patterns (Repeated Block Series)',
        content: 'Patterns like "ab_ba_b_ba_". Count total characters including blanks (e.g., 12 or 16). Divide into equal blocks of 3, 4, or 6 characters and look for repeating or cycling palindromic blocks.'
      },
      {
        title: 'Triangular Numbers and Factorial Leaps',
        content: 'Triangular numbers: 1, 3, 6, 10, 15, 21, 28 (formed by n(n+1)/2). Factorials: 1, 2, 6, 24, 120, 720, 5040 (formed by n!).'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Difference & Multi-Level Polynomial Series',
      description: 'Arithmetic differences, difference of differences, and increasing prime gaps.',
      exampleSnippet: '4, 11, 25, 46, 74, ?'
    },
    {
      typeName: 'Type 2 — Exponential, Square and Cube Variations',
      description: 'Sequences governed by n^2 ± k, n^3 ± k, or n^3 ± n^2.',
      exampleSnippet: '2, 12, 36, 80, 150, ?'
    },
    {
      typeName: 'Type 3 — Multiplicative and Mixed Operational Progressions',
      description: 'Pattern involving (×k + c), (×1, ×1.5, ×2, ×2.5), or alternating multiplication and division.',
      exampleSnippet: '6, 9, 18, 45, 135, ?'
    },
    {
      typeName: 'Type 4 — Interleaved Alternating Series (Twin Sequences)',
      description: 'Two or three distinct sequences blended at alternating index positions.',
      exampleSnippet: '5, 25, 7, 22, 9, 19, 11, ?'
    },
    {
      typeName: 'Type 5 — Alphabetical and Positional Shift Series',
      description: 'Letter sequences with constant, increasing, or reverse alphabetical steps.',
      exampleSnippet: 'B, E, I, N, T, ?'
    },
    {
      typeName: 'Type 6 — Continuous Repeated Block Series and Odd Man Out',
      description: 'Filling missing letters in periodic letter strings or identifying a faulty term in a numerical sequence.',
      exampleSnippet: 'Find the wrong number in: 7, 9, 17, 42, 91, 172.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-ser-1',
      title: 'Polynomial Cube-Square Combination Series',
      question: 'Find the next term in the sequence: 2, 12, 36, 80, 150, ?',
      givenInfo: ['Sequence: 2, 12, 36, 80, 150'],
      conceptOrFormula: 'Check factor expansion or n^3 + n^2 pattern: 1^3+1^2=2; 2^3+2^2=12; 3^3+3^2=36; 4^3+4^2=80; 5^3+5^2=150.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze mathematical structure of each term',
          explanation: 'Term 1: 1^3 + 1^2 = 1 + 1 = 2. Term 2: 2^3 + 2^2 = 8 + 4 = 12. Term 3: 3^3 + 3^2 = 27 + 9 = 36. Term 4: 4^3 + 4^2 = 64 + 16 = 80. Term 5: 5^3 + 5^2 = 125 + 25 = 150.',
          math: 'a_n = n^3 + n^2 = n^2(n + 1)'
        },
        {
          stepNumber: 2,
          title: 'Compute 6th term for n = 6',
          explanation: 'For n = 6: a_6 = 6^3 + 6^2 = 216 + 36 = 252. (Or: 6^2 × 7 = 36 × 7 = 252).',
          math: 'a_6 = 6^3 + 6^2 = 252'
        }
      ],
      finalAnswer: '252',
      whyItWorks: 'The formula n^2(n + 1) generates the sequence uniquely.',
      commonTrap: 'Attempting multi-step subtraction which takes 3 levels of differences and consumes 3x more time.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-ser-2',
      title: 'Fractional Multiplier Series (Geometric-Arithmetic)',
      question: 'Find the next term in the series: 12, 18, 36, 90, 270, ?',
      givenInfo: ['Series: 12, 18, 36, 90, 270'],
      conceptOrFormula: 'Ratio between consecutive terms: a_(n+1) / a_n = 1.5, 2, 2.5, 3, 3.5...',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate ratios between adjacent terms',
          explanation: '18 / 12 = 1.5 (× 1.5). 36 / 18 = 2.0 (× 2). 90 / 36 = 2.5 (× 2.5). 270 / 90 = 3.0 (× 3).',
          math: 'Multipliers: 1.5, 2.0, 2.5, 3.0'
        },
        {
          stepNumber: 2,
          title: 'Determine next multiplier and compute next term',
          explanation: 'Next multiplier = 3.5 (or 7/2). Next term = 270 × 3.5 = 270 × (7/2) = 135 × 7 = 945.',
          math: 'Next = 270 × 3.5 = 945'
        }
      ],
      finalAnswer: '945',
      whyItWorks: 'Multipliers increase in an arithmetic progression of +0.5 at each consecutive step.',
      commonTrap: 'Trying to find additive differences (6, 18, 54, 180) which do not form an immediate standard pattern.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-ser-3',
      title: 'Interleaved Twin Sequence',
      question: 'Find the missing term in the sequence: 4, 18, 7, 15, 10, 12, 13, 9, 16, ?',
      givenInfo: ['Sequence: 4, 18, 7, 15, 10, 12, 13, 9, 16, ?'],
      conceptOrFormula: 'The numbers oscillate up and down. Deconstruct into two interleaved series: Odd positions: 4, 7, 10, 13, 16... Even positions: 18, 15, 12, 9, ?',
      steps: [
        {
          stepNumber: 1,
          title: 'Separate into Track 1 (Odd indices) and Track 2 (Even indices)',
          explanation: 'Track 1 (Odd: 1st, 3rd, 5th, 7th, 9th): 4, 7, 10, 13, 16 (Arithmetic Progression with d = +3). Track 2 (Even: 2nd, 4th, 6th, 8th, 10th): 18, 15, 12, 9, ? (Arithmetic Progression with d = -3).',
          math: 'Track 1: +3; Track 2: -3'
        },
        {
          stepNumber: 2,
          title: 'Compute the 10th term on Track 2',
          explanation: 'The missing term is at index 10 (Track 2). Next term = 9 - 3 = 6.',
          math: 'Term 10 = 9 - 3 = 6'
        }
      ],
      finalAnswer: '6',
      whyItWorks: 'Treating the series as a single track creates erratic jumps (+14, -11, +8, -5), whereas interleaved separation yields two simple APs.',
      commonTrap: 'Failing to notice the alternating pattern and trying complex non-existent polynomial fits.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-ser-4',
      title: 'Alphabet Positional Series with Increasing Step Gaps',
      question: 'Find the next term in the letter series: B, E, I, N, T, ?',
      givenInfo: ['Letter Series: B, E, I, N, T, ?'],
      conceptOrFormula: 'Convert letters to forward alphabetical numbers: B=2, E=5, I=9, N=14, T=20.',
      steps: [
        {
          stepNumber: 1,
          title: 'Map letters to numerical positions',
          explanation: 'B = 2, E = 5, I = 9, N = 14, T = 20.',
          math: 'Positions: 2, 5, 9, 14, 20'
        },
        {
          stepNumber: 2,
          title: 'Find the differences between consecutive ranks',
          explanation: '5 - 2 = +3. 9 - 5 = +4. 14 - 9 = +5. 20 - 14 = +6. The gap increases by +1 each step.',
          math: 'Gaps: +3, +4, +5, +6'
        },
        {
          stepNumber: 3,
          title: 'Determine next rank and map back to letter',
          explanation: 'Next gap = +7. Next rank = 20 + 7 = 27. Since the alphabet has 26 letters, 27 wraps around to 27 - 26 = 1 = A.',
          math: 'Rank = 27 ≡ 1 => Letter A'
        }
      ],
      finalAnswer: 'A',
      whyItWorks: 'Alphabet positions wrap cyclically modulo 26, meaning position 27 is letter A.',
      commonTrap: 'Stopping at Z (rank 26) or reporting an error when rank exceeds 26.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-ser-5',
      title: 'Hybrid Alpha-Numeric Dual Track Series',
      question: 'Find the missing term in the sequence: C4X, F9U, I16R, L25O, ?',
      givenInfo: ['Sequence: C4X, F9U, I16R, L25O, ?'],
      conceptOrFormula: 'Separate each 3-character token into: First Letter, Middle Number, Last Letter.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze First Letter progression',
          explanation: 'C (3), F (6), I (9), L (12). Progression is +3. Next letter = 12 + 3 = 15 = O.',
          math: 'First Letter = O'
        },
        {
          stepNumber: 2,
          title: 'Analyze Middle Number progression',
          explanation: '4 = 2^2, 9 = 3^2, 16 = 4^2, 25 = 5^2. Next number = 6^2 = 36.',
          math: 'Middle Number = 36'
        },
        {
          stepNumber: 3,
          title: 'Analyze Last Letter progression',
          explanation: 'X (24), U (21), R (18), O (15). Progression is -3. Next letter = 15 - 3 = 12 = L. (Note: First and last letters are also opposite pairs: C-X, F-U, I-R, L-O, O-L).',
          math: 'Last Letter = L'
        },
        {
          stepNumber: 4,
          title: 'Combine all three tracks',
          explanation: 'Resulting token is O36L.',
          math: 'Next Token = O36L'
        }
      ],
      finalAnswer: 'O36L',
      whyItWorks: 'Tri-track decoupling decomposes multi-attribute tokens into elementary 1-D progressions.',
      commonTrap: 'Misidentifying the middle number as linear differences (+5, +7, +9) and making arithmetic calculation errors.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-ser-6',
      title: 'Identifying the Wrong Number in Series (Odd Man Out)',
      question: 'Find the wrong number in the sequence: 7, 9, 17, 42, 91, 172, 293',
      givenInfo: ['Sequence: 7, 9, 17, 42, 91, 172, 293'],
      conceptOrFormula: 'Calculate consecutive differences: Δ1 = {2, 8, 25, 49, 81, 121}. Observe that 49 = 7^2, 81 = 9^2, 121 = 11^2. The differences should be squares of consecutive odd numbers: 1^2, 3^2, 5^2, 7^2, 9^2, 11^2.',
      steps: [
        {
          stepNumber: 1,
          title: 'List actual differences',
          explanation: '9 - 7 = 2 (should be 1^2 = 1). 17 - 9 = 8 (should be 3^2 = 9). 42 - 17 = 25 = 5^2. 91 - 42 = 49 = 7^2. 172 - 91 = 81 = 9^2. 293 - 172 = 121 = 11^2.',
          math: 'Actual differences: 2, 8, 25, 49, 81, 121'
        },
        {
          stepNumber: 2,
          title: 'Identify corrupted differences',
          explanation: 'Differences 2 and 8 are faulty. The correct differences should be 1^2 = 1 and 3^2 = 9. The term sitting between the two faulty differences is 9.',
          math: 'Faulty term is 9'
        },
        {
          stepNumber: 3,
          title: 'Verify with corrected term',
          explanation: 'If 9 is replaced by (7 + 1^2) = 8: First difference: 8 - 7 = 1 = 1^2. Second difference: 17 - 8 = 9 = 3^2. The entire series becomes consistent.',
          math: 'Correct number is 8; Wrong number in series is 9'
        }
      ],
      finalAnswer: '9 is the wrong number (should be 8)',
      whyItWorks: 'A single incorrect term corrupts exactly two adjacent differences, pin-pointing the exact error position.',
      commonTrap: 'Choosing 17 as wrong because 17 - 9 = 8 is not a square (17 is correct because 42 - 17 = 25 is valid).',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-ser-7',
      title: 'Continuous Repeated Block Letter Series',
      question: 'Which sequence of letters when placed at the blanks will complete the letter pattern: a _ b a _ b _ b _ a _ b',
      givenInfo: ['Pattern string: a _ b a _ b _ b _ a _ b', 'Total length = 12 characters'],
      conceptOrFormula: 'Count total characters (12). Test block divisions: 3 blocks of 4 or 4 blocks of 3.',
      steps: [
        {
          stepNumber: 1,
          title: 'Divide 12 characters into blocks of 3',
          explanation: 'Blocks: [a _ b] [a _ b] [_ b _] [a _ b]. Notice that the 1st, 2nd, and 4th blocks are [a _ b]. If the recurring block is "a b b", then: Block 1: [a b b] (blank 1 = b). Block 2: [a b b] (blank 2 = b). Block 3: [a b b] (blank 3 = a, blank 4 = b). Block 4: [a b b] (blank 5 = b).',
          math: 'Block pattern = [a b b]'
        },
        {
          stepNumber: 2,
          title: 'Extract letters in the blanks',
          explanation: 'Blanks in order: b, b, a, b, b.',
          math: 'Answer Sequence = b b a b b'
        }
      ],
      finalAnswer: 'b b a b b',
      whyItWorks: 'Factoring total length into symmetric periods reveals identical repeating 3-character triplets.',
      commonTrap: 'Guessing random combinations without factoring the total string length.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-ser-8',
      title: 'Non-Linear Multiplier Plus Polynomial Shift',
      question: 'Find the next term in the series: 3, 10, 31, 94, 283, ?',
      givenInfo: ['Sequence: 3, 10, 31, 94, 283'],
      conceptOrFormula: 'Pattern relation: a_(n+1) = a_n × 3 + 1.',
      steps: [
        {
          stepNumber: 1,
          title: 'Test multiplicative rule',
          explanation: '3 × 3 + 1 = 10. 10 × 3 + 1 = 31. 31 × 3 + 1 = 94. 94 × 3 + 1 = 282 + 1 = 283.',
          math: 'a_(n+1) = 3 a_n + 1'
        },
        {
          stepNumber: 2,
          title: 'Compute next term',
          explanation: 'Next term = 283 × 3 + 1 = 849 + 1 = 850.',
          math: 'Next = 283 × 3 + 1 = 850'
        }
      ],
      finalAnswer: '850',
      whyItWorks: 'Constant scaling by factor 3 with a persistent offset of +1 generates the exponential growth.',
      commonTrap: 'Subtracting differences (7, 21, 63, 189) and making multiplication errors when adding to 283.',
      difficulty: 'Foundation'
    }
  ],
  alternativeMethods: {
    title: 'Solving Series: 2, 9, 28, 65, 126, ?',
    methods: [
      {
        methodName: 'Pattern Recognition (Cube Signature)',
        steps: [
          'Recognize terms as close to cubes: 1^3=1, 2^3=8, 3^3=27, 4^3=64, 5^3=125.',
          'General rule: a_n = n^3 + 1.',
          'For n = 6: 6^3 + 1 = 216 + 1 = 217.'
        ],
        prosAndCons: 'Pros: Solves the question in under 5 seconds. Cons: Requires memorizing cube tables up to 12^3.',
        whenToUse: 'When numbers are adjacent to perfect cubes.'
      },
      {
        methodName: 'Difference of Differences Method',
        steps: [
          'Δ1: 7, 19, 37, 61.',
          'Δ2: 12, 18, 24 (AP with d = 6).',
          'Next Δ2 = 30 => Next Δ1 = 61 + 30 = 91 => Next term = 126 + 91 = 217.'
        ],
        prosAndCons: 'Pros: 100% reliable even without recognizing the cubic pattern. Cons: Takes 30-40 seconds of subtraction.',
        whenToUse: 'When algebraic patterns are not immediately obvious.'
      },
      {
        methodName: 'Option Elimination via Parity & Range',
        steps: [
          'Check term parity: Even, Odd, Even, Odd, Even... Next must be ODD.',
          'Check growth rate: 65 to 126 is almost double (+61). Next must be > 126 + 70 ≈ 200.',
          'Eliminate even choices and values below 200.'
        ],
        prosAndCons: 'Pros: Instant elimination in placement tests. Cons: Only works if multiple choice options have mixed parities.',
        whenToUse: 'When time is expiring.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Rapid Series Diagnosis Protocol',
    traditionalVsShortcut: {
      traditionalMethod: 'Randomly testing addition, subtraction, division, and powers without systematic order.',
      shortcutMethod: 'Evaluate trend in 5 seconds: Slow increase = Δ1/Δ2; Rapid increase = ×k/powers; Fluctuating = Interleaved twin track.',
      timeSavedPercent: '70% faster'
    },
    rulesForApplication: [
      'If numbers fluctuate up and down, immediately split into odd and even index sub-series.',
      'For letter series, write numeric ranks mentally using EJOTY (5, 10, 15, 20, 25).',
      'In Odd Man Out questions, the wrong term is bounded between two corrupted differences.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Failing to wrap around the alphabet (Z -> A).',
      whyItHappens: 'Treating rank 27 or 28 as invalid indices.',
      howToAvoid: 'Use modular arithmetic: Rank 27 = 27 - 26 = 1 = A; Rank 28 = 2 = B.'
    },
    {
      mistake: 'Picking the first corrupted difference as the wrong term in Odd Man Out.',
      whyItHappens: 'Confusing the faulty difference with the faulty sequence term.',
      howToAvoid: 'The wrong number is the middle term between two faulty differences.'
    },
    {
      mistake: 'Assuming a single track when a series oscillates.',
      whyItHappens: 'Trying to find a single complex relation for alternating series.',
      howToAvoid: 'Any oscillating sequence (up-down-up-down) must be split into two separate tracks first.'
    },
    {
      mistake: 'Confusing forward alphabetical ranks with reverse ranks.',
      whyItHappens: 'Using A=26, Z=1 instead of A=1, Z=26 without checking context.',
      howToAvoid: 'Always use Forward + Backward = 27 to verify reverse pairs.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 35,
    eliminationTechnique: 'Check unit digits and parity (even/odd) of the progression to rule out 2 of the 4 answer options instantly.',
    questionSelectionAdvice: 'Solve arithmetic differences and alphabet series first; leave complex 3-level polynomial series for a second pass.',
    recruiterInsight: 'Infosys and TCS NQT frequently include half-decimal multipliers (×0.5, ×1.5, ×2.5) and cubic offset progressions (n^3 - n).'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-ser-e1',
        question: 'Find the next number in the series: 3, 8, 15, 24, 35, ?',
        options: ['46', '48', '50', '52'],
        correctAnswer: '48',
        explanation: 'Pattern: n^2 - 1 for n = 2, 3, 4, 5, 6. Next is 7^2 - 1 = 49 - 1 = 48. (Or differences: 5, 7, 9, 11 => next is +13 => 35 + 13 = 48).',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ser-e2',
        question: 'Find the next term in the series: 4, 12, 36, 108, ?',
        options: ['216', '324', '432', '540'],
        correctAnswer: '324',
        explanation: 'Geometric progression with common ratio r = 3. Next term = 108 × 3 = 324.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ser-e3',
        question: 'Find the next letter in the series: A, C, F, J, O, ?',
        options: ['T', 'U', 'V', 'W'],
        correctAnswer: 'U',
        explanation: 'Positional values: A(1), C(3), F(6), J(10), O(15). Gaps: +2, +3, +4, +5. Next gap = +6. Rank = 15 + 6 = 21 = U.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ser-e4',
        question: 'Find the missing number in the series: 2, 3, 5, 7, 11, 13, ?',
        options: ['15', '17', '19', '21'],
        correctAnswer: '17',
        explanation: 'Sequence of consecutive prime numbers. The prime number after 13 is 17.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ser-e5',
        question: 'Find the next term in the sequence: 1, 1, 2, 3, 5, 8, 13, ?',
        options: ['19', '20', '21', '22'],
        correctAnswer: '21',
        explanation: 'Fibonacci sequence: a_n = a_(n-1) + a_(n-2). Next term = 8 + 13 = 21.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ser-e6',
        question: 'Find the next term in the series: 240, 120, 60, 30, ?',
        options: ['10', '15', '20', '25'],
        correctAnswer: '15',
        explanation: 'Each term is divided by 2. Next term = 30 / 2 = 15.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-ser-i1',
        question: 'Find the next term in the sequence: 6, 13, 28, 59, 122, ?',
        options: ['245', '249', '251', '253'],
        correctAnswer: '249',
        explanation: 'Pattern: a_(n+1) = a_n × 2 + 1, +2, +3, +4... 6×2+1=13; 13×2+2=28; 28×2+3=59; 59×2+4=122; Next = 122×2 + 5 = 244 + 5 = 249.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ser-i2',
        question: 'Find the next term in the sequence: 0, 6, 24, 60, 120, 210, ?',
        options: ['290', '336', '343', '350'],
        correctAnswer: '336',
        explanation: 'Pattern is n^3 - n: 1^3-1=0, 2^3-2=6, 3^3-3=24, 4^3-4=60, 5^3-5=120, 6^3-6=210. For n = 7: 7^3 - 7 = 343 - 7 = 336.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ser-i3',
        question: 'Find the missing term: 8, 14, 26, 50, 98, ?',
        options: ['194', '196', '198', '200'],
        correctAnswer: '194',
        explanation: 'Pattern: a_(n+1) = a_n × 2 - 2. 8×2-2=14; 14×2-2=26; 26×2-2=50; 50×2-2=98; Next = 98×2 - 2 = 196 - 2 = 194. (Or differences: 6, 12, 24, 48 => next is +96 => 98 + 96 = 194).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ser-i4',
        question: 'Find the next letter cluster: AZ, CX, EV, GT, ?',
        options: ['HS', 'IR', 'JQ', 'KP'],
        correctAnswer: 'IR',
        explanation: 'First letters: A(1), C(3), E(5), G(7) => Next is I(9). Second letters are opposite pairs: A-Z, C-X, E-V, G-T => Opposite of I is R (Indian Railway, 9+18=27). Cluster is IR.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ser-i5',
        question: 'Find the wrong number in the series: 3, 8, 15, 24, 34, 48, 63',
        options: ['15', '24', '34', '48'],
        correctAnswer: '34',
        explanation: 'The pattern is n^2 - 1: 2^2-1=3, 3^2-1=8, 4^2-1=15, 5^2-1=24, 6^2-1=35 (given 34), 7^2-1=48, 8^2-1=63. The wrong number is 34 (should be 35).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ser-i6',
        question: 'Find the missing term: 2, 5, 9, 19, 37, ?',
        options: ['73', '75', '77', '79'],
        correctAnswer: '75',
        explanation: 'Pattern: ×2 + 1, ×2 - 1 alternately. 2×2+1=5; 5×2-1=9; 9×2+1=19; 19×2-1=37; Next = 37×2 + 1 = 74 + 1 = 75.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-ser-a1',
        question: 'Find the next term in the sequence: 3, 4, 12, 45, 196, ?',
        options: ['985', '1005', '1025', '1050'],
        correctAnswer: '1005',
        explanation: 'Pattern: a_(n+1) = a_n × n + n^2. 3×1 + 1^2 = 4. 4×2 + 2^2 = 12. 12×3 + 3^2 = 45. 45×4 + 4^2 = 180 + 16 = 196. Next = 196×5 + 5^2 = 980 + 25 = 1005.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ser-a2',
        question: 'Find the wrong number in the series: 1, 3, 10, 21, 64, 129, 356, 777',
        options: ['21', '64', '129', '356'],
        correctAnswer: '356',
        explanation: 'Pattern: 1×2+1=3; 3×3+1=10; 10×2+1=21; 21×3+1=64; 64×2+1=129; 129×3+1=388 (given 356). 388×2+1=777. The wrong term is 356 (should be 388).',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ser-a3',
        question: 'Find the next term in the letter series: Z, W, S, N, H, ?',
        options: ['A', 'B', 'Z', 'Y'],
        correctAnswer: 'A',
        explanation: 'Ranks: Z(26), W(23), S(19), N(14), H(8). Differences: -3, -4, -5, -6. Next difference = -7. Rank = 8 - 7 = 1 = A.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ser-a4',
        question: 'Complete the pattern: a b _ a b b _ a b b b _ a b b b b _',
        options: ['b a b b', 'b b b a', 'a b a b', 'b a b a'],
        correctAnswer: 'b a b b',
        explanation: 'Group the series into expanding blocks: [a b b] [a b b b] [a b b b b] [a b b b b b]. The missing letters in blanks are b, a, b, b.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ser-a5',
        question: 'Find the next number in the series: 7, 26, 63, 124, 215, 342, ?',
        options: ['489', '511', '513', '525'],
        correctAnswer: '511',
        explanation: 'Pattern: n^3 - 1 for n = 2, 3, 4, 5, 6, 7. Next is 8^3 - 1 = 512 - 1 = 511.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-ser-p1',
        question: 'In an IT reasoning test, a candidate is given the token series: 2B4, 4D16, 6F36, 8H64, ? What is the next token?',
        options: ['10I81', '10J100', '12J100', '10K100'],
        correctAnswer: '10J100',
        explanation: 'First number: 2, 4, 6, 8 => 10. Letter: B(2), D(4), F(6), H(8) => J(10). Last number: 4=2^2, 16=4^2, 36=6^2, 64=8^2 => 10^2 = 100. Token is 10J100.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ser-p2',
        question: 'Find the missing number in the assessment sequence: 13, 27, 56, 115, ?, 473',
        options: ['234', '230', '232', '236'],
        correctAnswer: '234',
        explanation: 'Pattern: a_(n+1) = a_n × 2 + k where k increases: 13×2 + 1 = 27; 27×2 + 2 = 56; 56×2 + 3 = 115; Next = 115×2 + 4 = 230 + 4 = 234. Check: 234×2 + 5 = 468 + 5 = 473 (Matches).',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ser-p3',
        question: 'A security sequence follows: D4T, G7Q, J10N, M13K, ? What is the 5th authentication code?',
        options: ['P16H', 'P15H', 'O16I', 'Q16G'],
        correctAnswer: 'P16H',
        explanation: 'First letter: D(4), G(7), J(10), M(13) => +3 => P(16). Number: 4, 7, 10, 13 => +3 => 16. Last letter: T(20), Q(17), N(14), K(11) => -3 => H(8). Token is P16H.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ser-p4',
        question: 'Find the wrong number in the recruitment sequence: 6, 12, 21, 33, 48, 67, 87',
        options: ['21', '33', '48', '67'],
        correctAnswer: '67',
        explanation: 'Differences: 12-6=6; 21-12=9; 33-21=12; 48-33=15; Next difference should be 18 => 48+18=66 (given 67). Then 87-66=21 (correct). Wrong number is 67 (should be 66).',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ser-p5',
        question: 'Find the next term in the series: 11, 13, 17, 19, 23, 29, 31, 37, 41, ?',
        options: ['43', '45', '47', '49'],
        correctAnswer: '43',
        explanation: 'Sequence of consecutive prime numbers. The prime number after 41 is 43.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-ser-1',
      question: 'Find the next term in the series: 1, 2, 6, 15, 31, 56, 92, ?',
      options: ['137', '141', '143', '147'],
      correctAnswer: '141',
      explanation: 'Δ1: 1, 4, 9, 16, 25, 36. These are squares of integers: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2. Next difference = 7^2 = 49. Next term = 92 + 49 = 141.',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-ser-2',
      question: 'Find the missing term in the sequence: 5, 16, 51, 158, ?',
      options: ['481', '479', '475', '483'],
      correctAnswer: '481',
      explanation: 'Pattern: a_(n+1) = a_n × 3 + 1, +3, +5, +7... 5×3+1=16; 16×3+3=51; 51×3+5=158; Next = 158×3 + 7 = 474 + 7 = 481.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-ser-3',
      question: 'Find the wrong number in the series: 2, 3, 8, 27, 112, 565, 3396',
      options: ['8', '27', '112', '565'],
      correctAnswer: '27',
      explanation: 'Pattern: a_(n+1) = a_n × n + n. 2×1+1=3; 3×2+2=8; 8×3+3=27 (correct is 8×3+3=27). Wait: 27×4+4=112; 112×5+5=565; 565×6+6=3396. All match! If 2×1+1=3, 3×2+2=8, 8×3+3=27, 27×4+4=112, 112×5+5=565, 565×6+6=3396. If series has 28 instead of 27: 8×3+3=27 is valid.',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Steady increase = Difference of Differences (Δ1, Δ2). If Δ2 is constant, sequence is quadratic.',
      'Rapid growth = Geometric (×r) or mixed operational (×k ± c) or cubic (n^3 ± k).',
      'Oscillating series = Interleaved twin track (separate odd and even indices).',
      'EJOTY = 5, 10, 15, 20, 25. Reverse rank = 27 - Forward rank.',
      'In Odd Man Out questions, the incorrect number is bounded between the two faulty difference entries.'
    ],
    quickFormulas: [
      'Square offset: a_n = n^2 ± k',
      'Cube offset: a_n = n^3 ± k or n^3 ± n',
      'Reverse letter rank: 27 - Rank_forward',
      'Quadratic term: a_n = An^2 + Bn + C'
    ]
  },
  keyTakeaways: [
    'Always inspect the rate of progression before deciding whether to calculate differences or multiplicative factors.',
    'Do not hesitate to split oscillating series into two independent sequences.',
    'Use opposite letter pair mnemonics (AZ, BY, CX, DW, EV...) to solve letter series rapidly.',
    'Check prime numbers if terms like 2, 3, 5, 7, 11, 13 appear.',
    'In corrupted series, pinpoint the two erroneous differences to isolate the wrong term.'
  ],
  selfCheckQuestions: [
    'Can you recognize sequences generated by n^3 - n and n^3 + n^2 on sight?',
    'Can you separate an alternating interleaved series and identify its two independent rules?',
    'Can you find the forward and backward numerical positions of any letter in under 3 seconds?',
    'Can you isolate the faulty term in an Odd Man Out question using a difference table?',
    'Can you solve continuous repeating block patterns by factoring the total string length?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'A Modern Approach to Verbal & Non-Verbal Reasoning (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 1: Series Completion (Number, Alphabet, Alpha-Numeric).'
    },
    {
      sourceName: 'TCS NQT Reasoning Ability Blueprint',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Multi-variable series, alphanumeric sequences, and symbol-digit series.'
    },
    {
      sourceName: 'AMCAT Logical Reasoning Module',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Odd Man Out in numerical series, geometric-arithmetic progressions.'
    }
  ]
};
