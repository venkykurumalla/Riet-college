module.exports = {
  id: 'y1-quant-hcf-lcm',
  yearId: 1,
  category: 'Quantitative Aptitude',
  topicNumber: 2,
  title: 'HCF, LCM & Factorization Theorems',
  tagline: 'Euclidean GCD algorithm, prime power factorizations, fractional HCF/LCM, bell tolling interval models, and remainder cases.',
  estimatedMinutes: 60,
  difficulty: 'Foundation',
  introduction: {
    overview: 'Highest Common Factor (HCF / GCD) and Least Common Multiple (LCM) are fundamental concepts governing integer divisibility, periodicity, and synchronization. HCF represents the largest integer that divides two or more numbers without leaving a remainder, serving as the basis for simplifying fractions, grouping objects into equal sets, and optimizing tile dimensions. LCM represents the smallest positive integer that is divisible by each of the given numbers, making it the universal mathematical tool for synchronizing recurring events, circular track laps, and periodic traffic signals.',
    placementRelevance: 'Questions on HCF and LCM appear consistently across Infosys, Wipro, TCS NQT, Capgemini, and Accenture. Assessment platforms frequently test simultaneous remainder models (e.g., finding the smallest number leaving remainders r1, r2, r3) and circular synchronization word problems.',
    historicalRecruiterWeightage: 'Consistently represents 2 to 4 questions in first-round aptitude screenings (approx 8% of numerical sections).',
    realWorldContext: 'LCM algorithms dictate CPU task scheduling intervals, resource allocation cycles, and buffer alignments in operating systems, while GCD is crucial in the Euclidean steps of the RSA public-key cryptosystem.'
  },
  learningObjectives: [
    'Compute the HCF and LCM of integers using Prime Factorization and Division / Euclidean algorithms.',
    'Calculate HCF and LCM of fractions and decimals accurately.',
    'Apply the fundamental product property: Product of two numbers = HCF × LCM.',
    'Solve all three classic remainder models for HCF (Greatest number dividing x, y, z leaving remainder r).',
    'Solve all three classic remainder models for LCM (Least number divided by x, y, z leaving remainder r).',
    'Model and solve synchronization problems involving tolling bells, race track laps, and traffic lights.',
    'Determine the number of possible integer pairs given their HCF and LCM or HCF and sum.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Prime numbers and prime factorization', 'Basic division algorithm', 'Fractions and simplification'],
    quickRefresher: 'For two numbers a and b, HCF(a, b) ≤ min(a, b) and LCM(a, b) ≥ max(a, b). If a and b are co-prime, HCF(a, b) = 1 and LCM(a, b) = a × b.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Highest Common Factor (HCF / GCD): The greatest common divisor that divides each of two or more given integers exactly.',
      'Least Common Multiple (LCM): The smallest positive common multiple that is exactly divisible by each of the given integers.',
      'Co-Prime (Relatively Prime) Numbers: Two integers whose HCF is 1.',
      'Euclidean Algorithm: An efficient recursive method for computing the GCD of two integers using successive divisions: GCD(a, b) = GCD(b, a mod b).',
      'Fractional HCF / LCM: Formula-based evaluation of GCD and LCM for rational numbers in lowest terms.'
    ],
    theoreticalIntuition: 'In prime factorization terms: If A = 2^3 · 3^2 · 5^1 and B = 2^2 · 3^4 · 7^1, the HCF is formed by taking the MINIMUM power of all common prime factors: HCF = 2^min(3,2) · 3^min(2,4) = 2^2 · 3^2 = 36. Conversely, the LCM is formed by taking the MAXIMUM power of ALL prime factors present in either number: LCM = 2^max(3,2) · 3^max(2,4) · 5^1 · 7^1 = 2^3 · 3^4 · 5 · 7 = 22,680. Notice that multiplying HCF and LCM pairs each min(a, b) with max(a, b), perfectly restoring the product A × B.',
    visualOrMentalModel: 'Picture two runners on a circular track: Runner A completes a lap in 12 seconds, Runner B in 18 seconds. They start together at time t = 0. Runner A completes laps at t = 12, 24, 36, 48... Runner B at t = 18, 36, 54... Their meeting points are the common multiples of 12 and 18. The FIRST time they meet again at the starting line is at LCM(12, 18) = 36 seconds.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Product of Two Numbers Property',
      formula: 'Number_1 × Number_2 = HCF × LCM',
      variables: 'Valid ONLY for two numbers (NOT directly valid for three or more numbers)',
      description: 'The product of any two positive integers is always equal to the product of their HCF and LCM.',
      whenToUse: 'When given HCF, LCM, and one number, to find the other number or verify integer pairs.',
      simpleExample: 'If HCF = 6, LCM = 72, and one number is 24: Other number = (6 × 72)/24 = 18.'
    },
    {
      title: 'HCF and LCM of Fractions',
      formula: 'HCF(a/b, c/d) = HCF(a, c) / LCM(b, d); LCM(a/b, c/d) = LCM(a, c) / HCF(b, d)',
      variables: 'Fractions MUST be reduced to their simplest irreducible form before applying the formula',
      description: 'To find HCF of fractions, take HCF of numerators divided by LCM of denominators. For LCM, take LCM of numerators divided by HCF of denominators.',
      whenToUse: 'When computing common intervals or divisors for fractional measurements or time values.',
      simpleExample: 'HCF(2/3, 8/9) = HCF(2, 8) / LCM(3, 9) = 2 / 9.'
    },
    {
      title: 'LCM Remainder Case 1 (Same Remainder r)',
      formula: 'Required Number N = LCM(x, y, z) · k + r',
      variables: 'x, y, z are divisors; r is the common remainder; k is a positive integer',
      description: 'The least number which when divided by x, y, z leaves remainder r in each case.',
      whenToUse: 'When a single remainder r is left across all given divisors.',
      simpleExample: 'Find least number divided by 6, 8, 12 leaving remainder 3: LCM(6,8,12) + 3 = 24 + 3 = 27.'
    },
    {
      title: 'LCM Remainder Case 2 (Constant Difference: Divisor - Remainder = d)',
      formula: 'Required Number N = LCM(x, y, z) · k - d',
      variables: 'd = (x - r1) = (y - r2) = (z - r3)',
      description: 'When different remainders are left but the difference between each divisor and its respective remainder is constant d.',
      whenToUse: 'When (x - r1) = (y - r2) = (z - r3) = d.',
      simpleExample: 'Number divided by 12, 15, 20 leaves remainders 8, 11, 16: d = 12-8 = 15-11 = 20-16 = 4. N = LCM(12,15,20) - 4 = 60 - 4 = 56.'
    },
    {
      title: 'HCF Remainder Case (Same Remainder r Unknown)',
      formula: 'Required Divisor = HCF(|x - y|, |y - z|, |z - x|)',
      variables: 'x, y, z are the given numbers',
      description: 'The greatest number which divides x, y, and z leaving the same remainder in each case when r is not given.',
      whenToUse: 'When dividing numbers leave an identical but unspecified remainder.',
      simpleExample: 'Find greatest number dividing 43, 91, 183 leaving same remainder: HCF(91-43, 183-91, 183-43) = HCF(48, 92, 140) = 4.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Understanding HCF and LCM requires moving beyond mechanical division into structural factor decomposition. Any integer A can be expressed in terms of its HCF with B as A = H · x and B = H · y, where H = HCF(A, B) and x, y are strictly co-prime positive integers (i.e., gcd(x, y) = 1).',
      'From this representation, the LCM of A and B is simply LCM = H · x · y. Consequently, LCM / HCF = x · y (the product of two co-prime integers). This property is crucial for finding the number of possible pairs of numbers given their HCF and LCM or HCF and sum.',
      'For synchronization and interval problems: Whenever multiple periodic events occur with cycle lengths T1, T2, T3... starting simultaneously at t = 0, they will next coincide simultaneously at t = LCM(T1, T2, T3). If the question asks how many times they coincide in a time duration D, the total number of tolls/flashes is ⌊D / LCM⌋ + 1 (including the initial toll at t = 0), or ⌊D / LCM⌋ (if excluding the initial toll). Always read the problem carefully to verify whether the start toll is included.',
      'For three numbers A, B, C: The formula A × B × C = HCF × LCM is FALSE. The correct relationship is: LCM(A, B, C) = (A × B × C × HCF(A, B, C)) / (HCF(A, B) × HCF(B, C) × HCF(C, A)).'
    ],
    deepDiveAspects: [
      {
        title: 'Number of Possible Pairs Given HCF and Sum',
        content: 'Let two numbers be Hx and Hy with gcd(x, y) = 1. If sum is S, then H(x + y) = S => (x + y) = S / H. Find all co-prime pairs (x, y) that sum to S / H.'
      },
      {
        title: 'Euclidean Algorithm Steps',
        content: 'To find HCF(252, 105): 252 = 105 × 2 + 42. Next: 105 = 42 × 2 + 21. Next: 42 = 21 × 2 + 0. The last non-zero remainder is 21. Thus HCF(252, 105) = 21.'
      },
      {
        title: 'Fractional Reduction Prerequisite',
        content: 'Before finding HCF or LCM of fractions like 4/6 and 6/8, you MUST reduce them to 2/3 and 3/4. Failing to reduce first produces incorrect GCDs.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Basic HCF and LCM of Integers and Fractions',
      description: 'Evaluating GCD/LCM of large numbers, power expressions, or rational fractions.',
      exampleSnippet: 'Find HCF and LCM of 2/3, 8/9, 16/81, 10/27.'
    },
    {
      typeName: 'Type 2 — Periodic Synchronization (Bells, Lights, Laps)',
      description: 'Calculating the time or frequency when multiple cyclic phenomena coincide.',
      exampleSnippet: '6 bells toll together at intervals of 2, 4, 6, 8, 10, 12 seconds.'
    },
    {
      typeName: 'Type 3 — Remainder Cases in Division (HCF Remainder Models)',
      description: 'Finding the greatest divisor that divides given numbers leaving specific or equal remainders.',
      exampleSnippet: 'Find the largest number that divides 62, 132, 237 leaving remainder 2 in each case.'
    },
    {
      typeName: 'Type 4 — Remainder Cases in Multiples (LCM Remainder Models)',
      description: 'Finding the least dividend that leaves constant remainder r or constant difference d when divided by a set of divisors.',
      exampleSnippet: 'Find the least number which when divided by 20, 25, 35, 40 leaves remainders 14, 19, 29, 34.'
    },
    {
      typeName: 'Type 5 — Finding Number of Pairs (HCF & Sum / HCF & LCM)',
      description: 'Determining the number of valid co-prime pairs (x, y) satisfying sum, product, or difference constraints.',
      exampleSnippet: 'The HCF of two numbers is 13 and their sum is 260. How many such pairs exist?'
    },
    {
      typeName: 'Type 6 — Geometry & Tiling Optimization',
      description: 'Finding the minimum number of square tiles to pave a rectangular courtyard, or largest measuring container.',
      exampleSnippet: 'Find minimum square tiles needed for a floor 15m 17cm by 9m 2cm.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-hcf-1',
      title: 'Synchronization of Tolling Bells in Given Duration',
      question: 'Six bells commence tolling together and toll at intervals of 2, 4, 6, 8, 10, and 12 seconds respectively. In 30 minutes, how many times do they toll together?',
      givenInfo: ['Intervals: 2, 4, 6, 8, 10, 12 seconds', 'Total duration: 30 minutes = 30 × 60 = 1800 seconds'],
      conceptOrFormula: 'They toll together at intervals of LCM(2, 4, 6, 8, 10, 12). Total tolls in time T = ⌊T / LCM⌋ + 1 (including initial toll at t = 0).',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate LCM of intervals',
          explanation: 'Prime factorizations: 2=2^1, 4=2^2, 6=2×3, 8=2^3, 10=2×5, 12=2^2×3. LCM = 2^3 × 3^1 × 5^1 = 8 × 3 × 5 = 120 seconds (2 minutes).',
          math: 'LCM(2, 4, 6, 8, 10, 12) = 120 seconds'
        },
        {
          stepNumber: 2,
          title: 'Convert total duration into seconds',
          explanation: '30 minutes = 30 × 60 = 1800 seconds.',
          math: 'T = 1800 s'
        },
        {
          stepNumber: 3,
          title: 'Calculate number of concurrent tolls',
          explanation: 'Number of times they toll together = (1800 / 120) + 1 = 15 + 1 = 16 times.',
          math: 'Count = ⌊1800 / 120⌋ + 1 = 16'
        }
      ],
      finalAnswer: '16 times',
      whyItWorks: 'The bells toll simultaneously at t = 0, 120, 240, ..., 1800 seconds, generating 16 simultaneous events.',
      commonTrap: 'Answering 15 by forgetting to add the 1st simultaneous toll at the start (t = 0).',
      difficulty: 'Foundation'
    },
    {
      id: 'se-hcf-2',
      title: 'Finding Pairs of Numbers Given HCF and Sum',
      question: 'The HCF of two numbers is 12 and their sum is 216. How many such pairs of numbers are possible, and what are the pairs?',
      givenInfo: ['HCF = 12', 'Sum = 216'],
      conceptOrFormula: 'Let the numbers be 12x and 12y where gcd(x, y) = 1. Then 12x + 12y = 216 => x + y = 18. Find all co-prime pairs (x, y).',
      steps: [
        {
          stepNumber: 1,
          title: 'Formulate co-prime equation',
          explanation: '12(x + y) = 216 => x + y = 216 / 12 = 18, with gcd(x, y) = 1 and x < y.',
          math: 'x + y = 18, gcd(x, y) = 1'
        },
        {
          stepNumber: 2,
          title: 'List all positive pairs adding to 18 and filter for co-primes',
          explanation: 'Pairs (x, y): (1, 17) -> gcd(1,17)=1 (Valid); (2, 16) -> gcd=2 (Invalid); (3, 15) -> gcd=3 (Invalid); (4, 14) -> gcd=2 (Invalid); (5, 13) -> gcd=1 (Valid); (6, 12) -> gcd=6 (Invalid); (7, 11) -> gcd=1 (Valid); (8, 10) -> gcd=2 (Invalid); (9, 9) -> gcd=9 (Invalid).',
          math: 'Valid (x, y) ∈ {(1, 17), (5, 13), (7, 11)}'
        },
        {
          stepNumber: 3,
          title: 'Calculate the actual numerical pairs',
          explanation: 'Pair 1: (12×1, 12×17) = (12, 204). Pair 2: (12×5, 12×13) = (60, 156). Pair 3: (12×7, 12×11) = (84, 132).',
          math: '3 pairs: (12, 204), (60, 156), (84, 132)'
        }
      ],
      finalAnswer: '3 pairs',
      whyItWorks: 'Enforcing gcd(x, y) = 1 ensures that the HCF of 12x and 12y remains exactly 12 and does not increase.',
      commonTrap: 'Counting non-coprime pairs like (3, 15), which would produce numbers (36, 180) whose HCF is 36, not 12.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-hcf-3',
      title: 'LCM with Constant Difference Remainder Model',
      question: 'Find the least four-digit number which when divided by 12, 15, 20, and 24 leaves remainders 8, 11, 16, and 20 respectively.',
      givenInfo: ['Divisors: 12, 15, 20, 24', 'Remainders: 8, 11, 16, 20'],
      conceptOrFormula: 'Constant difference d = (12 - 8) = (15 - 11) = (20 - 16) = (24 - 20) = 4. General form N = LCM(12, 15, 20, 24) · k - 4.',
      steps: [
        {
          stepNumber: 1,
          title: 'Compute LCM of divisors',
          explanation: '12 = 2^2 × 3, 15 = 3 × 5, 20 = 2^2 × 5, 24 = 2^3 × 3. LCM = 2^3 × 3 × 5 = 120.',
          math: 'LCM(12, 15, 20, 24) = 120'
        },
        {
          stepNumber: 2,
          title: 'Determine the constant difference d',
          explanation: 'd = 12 - 8 = 4. Number form N = 120k - 4.',
          math: 'N = 120k - 4'
        },
        {
          stepNumber: 3,
          title: 'Find smallest four-digit integer satisfying the form',
          explanation: 'Smallest 4-digit number is 1000. Divide 1000 by 120: 1000 / 120 = 8.33. For k = 9: N = 120(9) - 4 = 1080 - 4 = 1076. (For k = 8: N = 120(8) - 4 = 956, which is 3 digits). Thus least 4-digit number is 1076.',
          math: 'k = 9 => N = 120(9) - 4 = 1076'
        }
      ],
      finalAnswer: '1076',
      whyItWorks: 'Adding 4 to the number makes it simultaneously divisible by all four divisors; hence N is 4 less than a multiple of their LCM.',
      commonTrap: 'Adding 4 instead of subtracting 4 (i.e. writing 1080 + 4 = 1084, which would leave remainder 4, not the required remainders).',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-hcf-4',
      title: 'Tiling Optimization Problem',
      question: 'A courtyard 15 m 17 cm long and 9 m 2 cm broad is to be paved with the minimum possible number of square tiles of identical size. Find the side of the largest tile and the least number of tiles required.',
      givenInfo: ['Length = 1517 cm', 'Breadth = 902 cm'],
      conceptOrFormula: 'Largest tile side = HCF(Length, Breadth). Minimum tiles = (Length × Breadth) / (Tile Side)^2.',
      steps: [
        {
          stepNumber: 1,
          title: 'Convert dimensions to centimeters and find HCF using Euclidean division',
          explanation: 'Length = 1517 cm, Breadth = 902 cm. Apply Euclidean algorithm: 1517 = 902 × 1 + 615. 902 = 615 × 1 + 287. 615 = 287 × 2 + 41. 287 = 41 × 7 + 0. Last non-zero remainder is 41. Tile side = 41 cm.',
          math: 'HCF(1517, 902) = 41 cm'
        },
        {
          stepNumber: 2,
          title: 'Calculate minimum number of tiles',
          explanation: 'Tiles along length = 1517 / 41 = 37. Tiles along breadth = 902 / 41 = 22. Total tiles = 37 × 22 = 814 tiles.',
          math: 'Total Tiles = 37 × 22 = 814'
        }
      ],
      finalAnswer: 'Tile side = 41 cm, Number of tiles = 814',
      whyItWorks: 'Maximizing the square tile side via HCF minimizes the total tile count required without cutting any tile.',
      commonTrap: 'Dividing the courtyard area by an arbitrary small factor or making arithmetic errors in Euclidean reduction.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-hcf-5',
      title: 'HCF with Unknown Constant Remainder',
      question: 'Find the greatest number which will divide 43, 91, and 183 so as to leave the same remainder in each case.',
      givenInfo: ['Numbers: 43, 91, 183', 'Condition: Same remainder r in each case'],
      conceptOrFormula: 'If x, y, z leave same remainder r when divided by D, then D divides |x - y|, |y - z|, and |z - x|. Required D = HCF(|x - y|, |y - z|, |z - x|).',
      steps: [
        {
          stepNumber: 1,
          title: 'Compute absolute pairwise differences',
          explanation: '|91 - 43| = 48; |183 - 91| = 92; |183 - 43| = 140.',
          math: 'D1 = 48, D2 = 92, D3 = 140'
        },
        {
          stepNumber: 2,
          title: 'Find HCF of the differences',
          explanation: '48 = 2^4 × 3; 92 = 2^2 × 23; 140 = 2^2 × 5 × 7. Common factor is 2^2 = 4.',
          math: 'HCF(48, 92, 140) = 4'
        },
        {
          stepNumber: 3,
          title: 'Verify the remainder',
          explanation: '43 mod 4 = 3; 91 mod 4 = 3; 183 mod 4 = 3. Same remainder 3 is left.',
          math: 'r = 3'
        }
      ],
      finalAnswer: '4',
      whyItWorks: 'Subtracting any two numbers eliminates the unknown remainder r: (q1·D + r) - (q2·D + r) = (q1 - q2)·D.',
      commonTrap: 'Trying to guess the remainder r instead of taking pairwise differences.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-hcf-6',
      title: 'HCF and LCM of Fractions',
      question: 'Find the HCF and LCM of the fractions 2/3, 8/9, 16/81, and 10/27.',
      givenInfo: ['Fractions: 2/3, 8/9, 16/81, 10/27 (all in simplest form)'],
      conceptOrFormula: 'HCF = HCF(Numerators) / LCM(Denominators); LCM = LCM(Numerators) / HCF(Denominators).',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate HCF of fractions',
          explanation: 'Numerators: {2, 8, 16, 10} => HCF(2, 8, 16, 10) = 2. Denominators: {3, 9, 81, 27} => LCM(3, 9, 81, 27) = 81. HCF = 2 / 81.',
          math: 'HCF = 2 / 81'
        },
        {
          stepNumber: 2,
          title: 'Calculate LCM of fractions',
          explanation: 'Numerators: {2, 8, 16, 10} => LCM(2, 8, 16, 10) = 80 (since 80 = 16 × 5). Denominators: {3, 9, 81, 27} => HCF(3, 9, 81, 27) = 3. LCM = 80 / 3.',
          math: 'LCM = 80 / 3'
        }
      ],
      finalAnswer: 'HCF = 2/81, LCM = 80/3',
      whyItWorks: 'A common fraction divisor must have a numerator dividing all numerators and a denominator that is a multiple of all denominators.',
      commonTrap: 'Inverting the formula (e.g. dividing LCM of numerators by LCM of denominators).',
      difficulty: 'Foundation'
    },
    {
      id: 'se-hcf-7',
      title: 'Circular Track Synchronization',
      question: 'Three runners A, B, and C run along a circular track of circumference 1200 m starting from the same point in the same direction with speeds 6 m/s, 8 m/s, and 10 m/s. (i) When will they first meet at the starting point? (ii) When will they first meet anywhere on the track?',
      givenInfo: ['Track length = 1200 m', 'Speeds: vA = 6 m/s, vB = 8 m/s, vC = 10 m/s'],
      conceptOrFormula: 'Time for 1 lap: tA = L/vA, tB = L/vB, tC = L/vC. First meet at start = LCM(tA, tB, tC). First meet anywhere = LCM of pairwise relative lap times = LCM(L / |vA - vB|, L / |vB - vC|).',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate individual lap times for start point meeting',
          explanation: 'tA = 1200 / 6 = 200 s. tB = 1200 / 8 = 150 s. tC = 1200 / 10 = 120 s.',
          math: 'tA = 200, tB = 150, tC = 120'
        },
        {
          stepNumber: 2,
          title: 'Calculate first meeting time at starting point',
          explanation: 'LCM(200, 150, 120): 200 = 2^3 × 5^2; 150 = 2 × 3 × 5^2; 120 = 2^3 × 3 × 5. LCM = 2^3 × 3 × 5^2 = 8 × 3 × 25 = 600 seconds (10 minutes).',
          math: 'Start Point Meeting = 600 s (10 mins)'
        },
        {
          stepNumber: 3,
          title: 'Calculate first meeting anywhere using relative speeds',
          explanation: 'Relative speeds: vB - vA = 8 - 6 = 2 m/s; vC - vB = 10 - 8 = 2 m/s; vC - vA = 10 - 6 = 4 m/s. Relative lap times: 1200/2 = 600 s, 1200/2 = 600 s, 1200/4 = 300 s. LCM(600, 600, 300) = 600 seconds.',
          math: 'Anywhere Meeting = 600 s'
        }
      ],
      finalAnswer: 'They meet at the starting point (and anywhere) at 600 seconds (10 minutes).',
      whyItWorks: 'Meeting at the start requires every runner to complete an integer number of full laps.',
      commonTrap: 'Using speed in the LCM rather than lap times (LCM must be calculated on time periods, NOT speeds).',
      difficulty: 'Advanced'
    },
    {
      id: 'se-hcf-8',
      title: 'Three Number HCF-LCM Relationship',
      question: 'The HCF of three numbers is 8 and their LCM is 576. If two of the numbers are 24 and 64, find the third number.',
      givenInfo: ['HCF(A, B, C) = 8', 'LCM(A, B, C) = 576', 'A = 24 = 2^3 × 3^1', 'B = 64 = 2^6 × 3^0'],
      conceptOrFormula: 'Prime factor analysis: LCM = 576 = 64 × 9 = 2^6 × 3^2. HCF = 8 = 2^3 × 3^0. Let C = 2^x × 3^y.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze prime powers in LCM and HCF',
          explanation: 'In LCM: max power of 2 is 6, max power of 3 is 2. In HCF: min power of 2 is 3, min power of 3 is 0.',
          math: 'LCM = 2^6 · 3^2, HCF = 2^3 · 3^0'
        },
        {
          stepNumber: 2,
          title: 'Deduce exponents for C = 2^x × 3^y',
          explanation: 'Powers of 2: A has 3, B has 6. Since min power is 3, x must be ≥ 3. Powers of 3: A has 1, B has 0. For LCM to have 3^2, C MUST provide 3^2 (so y = 2). For HCF to be 8, min(3, 6, x) = 3 and min(1, 0, 2) = 0. Thus x can be 3, 4, 5, or 6 and y = 2.',
          math: 'y = 2; x ∈ {3, 4, 5, 6}'
        },
        {
          stepNumber: 3,
          title: 'Find the standard third number',
          explanation: 'For least C: x = 3 => C = 2^3 × 3^2 = 8 × 9 = 72. (Check: HCF(24, 64, 72) = 8; LCM(24, 64, 72) = 576).',
          math: 'C = 72'
        }
      ],
      finalAnswer: '72 (or 144, 288, 576)',
      whyItWorks: 'Each prime power in the LCM must be supplied by at least one number, and the HCF restricts the minimum available power.',
      commonTrap: 'Applying A × B × C = HCF × LCM (which would give 24 × 64 × C = 8 × 576 => C = 3, which fails HCF = 8).',
      difficulty: 'Advanced'
    }
  ],
  alternativeMethods: {
    title: 'Finding HCF of 504 and 792',
    methods: [
      {
        methodName: 'Prime Factorization Method',
        steps: [
          '504 = 2^3 × 3^2 × 7^1.',
          '792 = 2^3 × 3^2 × 11^1.',
          'Common prime factors with lowest powers: 2^3 × 3^2 = 8 × 9 = 72.'
        ],
        prosAndCons: 'Pros: Straightforward and visual for moderate numbers. Cons: Slower when numbers are large and hard to factorize.',
        whenToUse: 'When numbers easily break down into small prime factors.'
      },
      {
        methodName: 'Euclidean Division Algorithm',
        steps: [
          '792 = 504 × 1 + 288.',
          '504 = 288 × 1 + 216.',
          '288 = 216 × 1 + 72.',
          '216 = 72 × 3 + 0 => HCF = 72.'
        ],
        prosAndCons: 'Pros: Fast, guaranteed to work in logarithmic steps even for 6-digit numbers without factoring. Cons: Requires disciplined long division.',
        whenToUse: 'Best for large numbers or unfamiliar prime divisors.'
      },
      {
        methodName: 'Placement Shortcut (Difference Method)',
        steps: [
          'Difference = 792 - 504 = 288.',
          'HCF must divide 288. Factors of 288: 288, 144, 72, 36...',
          'Test 72: 504 / 72 = 7; 792 / 72 = 11. Both are integers, so HCF = 72.'
        ],
        prosAndCons: 'Pros: Eliminates 90% of arithmetic under test conditions. Cons: Must test factor candidates in descending order.',
        whenToUse: 'Ideal for rapid multiple-choice answer elimination.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Rapid HCF by Difference and Option Elimination',
    traditionalVsShortcut: {
      traditionalMethod: 'Factoring both large numbers completely down to prime powers.',
      shortcutMethod: 'Take the difference between the two numbers. The HCF must be a divisor of this difference.',
      timeSavedPercent: '75% faster'
    },
    rulesForApplication: [
      'For any two numbers A and B, HCF(A, B) divides |A - B|.',
      'If given 4 answer choices for HCF, find the difference between given numbers and pick the largest option that divides both numbers.',
      'For synchronization of bells, always remember to add 1 for the toll at t = 0.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Applying A × B × C = HCF × LCM for three numbers.',
      whyItHappens: 'Extrapolating the two-number theorem to three numbers.',
      howToAvoid: 'The product property holds ONLY for 2 numbers. For 3 numbers, use prime factorization comparison.'
    },
    {
      mistake: 'Calculating LCM on speeds instead of time periods in circular track questions.',
      whyItHappens: 'Confusing speed values with cycle intervals.',
      howToAvoid: 'Always convert speeds into lap times (Time = Distance / Speed) before finding LCM.'
    },
    {
      mistake: 'Omitting the first toll (t = 0) in interval word problems.',
      whyItHappens: 'Dividing total time by LCM and writing the quotient directly.',
      howToAvoid: 'Total tolls in time T = ⌊T / LCM⌋ + 1 when starting simultaneously.'
    },
    {
      mistake: 'Failing to simplify fractions before applying fractional HCF/LCM.',
      whyItHappens: 'Applying formula directly to unreduced fractions like 4/6 and 6/9.',
      howToAvoid: 'Always reduce every fraction to lowest terms (e.g. 2/3 and 2/3) before using HCF(Num)/LCM(Den).'
    },
    {
      mistake: 'Adding the constant difference d instead of subtracting it in LCM remainder problems.',
      whyItHappens: 'Misapplying the sign: writing LCM + d instead of LCM - d.',
      howToAvoid: 'When divisor - remainder = d, the required number is LCM · k - d.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 50,
    eliminationTechnique: 'Use the difference property: HCF always divides the difference of the numbers. Check options dividing the difference from largest to smallest.',
    questionSelectionAdvice: 'Solve bell tolling, fractional HCF, and product property questions immediately; leave 4-digit LCM remainder constraints for the second pass.',
    recruiterInsight: 'Infosys and Wipro frequently use co-prime pair count questions: given HCF and sum, how many pairs of numbers exist.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-hl-e1',
        question: 'Find the HCF of 108, 288, and 360.',
        options: ['18', '24', '36', '72'],
        correctAnswer: '36',
        explanation: '108 = 2^2 × 3^3; 288 = 2^5 × 3^2; 360 = 2^3 × 3^2 × 5^1. Common prime factors: 2^min(2,5,3) × 3^min(3,2,2) = 2^2 × 3^2 = 4 × 9 = 36.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-hl-e2',
        question: 'Find the LCM of 24, 36, and 40.',
        options: ['240', '360', '480', '720'],
        correctAnswer: '360',
        explanation: '24 = 2^3 × 3; 36 = 2^2 × 3^2; 40 = 2^3 × 5. LCM = 2^3 × 3^2 × 5 = 8 × 9 × 5 = 360.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-hl-e3',
        question: 'The HCF and LCM of two numbers are 18 and 378 respectively. If one of the numbers is 54, what is the other number?',
        options: ['108', '126', '144', '162'],
        correctAnswer: '126',
        explanation: 'Other number = (HCF × LCM) / Number1 = (18 × 378) / 54 = 378 / 3 = 126.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-hl-e4',
        question: 'Find the HCF of the fractions 3/4, 6/7, and 9/10.',
        options: ['3/140', '18/70', '1/140', '9/70'],
        correctAnswer: '3/140',
        explanation: 'HCF = HCF(3, 6, 9) / LCM(4, 7, 10) = 3 / 140.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-hl-e5',
        question: 'Find the least number which when divided by 6, 9, 12, 15, and 18 leaves no remainder.',
        options: ['90', '180', '270', '360'],
        correctAnswer: '180',
        explanation: 'Required number = LCM(6, 9, 12, 15, 18) = 180.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-hl-e6',
        question: 'Three traffic lights change after every 48 sec, 72 sec, and 108 sec respectively. If they all change simultaneously at 8:20:00 AM, at what time will they next change together?',
        options: ['8:27:12 AM', '8:24:48 AM', '8:25:36 AM', '8:26:12 AM'],
        correctAnswer: '8:27:12 AM',
        explanation: 'LCM(48, 72, 108): 48 = 2^4 × 3; 72 = 2^3 × 3^2; 108 = 2^2 × 3^3. LCM = 2^4 × 3^3 = 16 × 27 = 432 seconds = 7 minutes 12 seconds. Next change = 8:20:00 + 7 min 12 sec = 8:27:12 AM.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-hl-i1',
        question: 'The HCF of two numbers is 11 and their LCM is 693. If one number lies between 70 and 100, what is that number?',
        options: ['77', '88', '99', '84'],
        correctAnswer: '77',
        explanation: 'Let numbers be 11x and 11y with gcd(x, y) = 1. LCM = 11xy = 693 => xy = 63. Co-prime factor pairs of 63: (1, 63) and (7, 9). For (7, 9), numbers are 11 × 7 = 77 and 11 × 9 = 99. The number lying between 70 and 100 is 77 (or 99). 77 is in the range.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-hl-i2',
        question: 'Find the greatest number that will divide 148, 246, and 623 leaving remainders 4, 6, and 11 respectively.',
        options: ['12', '16', '18', '24'],
        correctAnswer: '12',
        explanation: 'Subtract remainders: 148 - 4 = 144; 246 - 6 = 240; 623 - 11 = 612. Required number = HCF(144, 240, 612). 144 = 12 × 12; 240 = 12 × 20; 612 = 12 × 51. HCF = 12.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-hl-i3',
        question: 'Find the smallest number which when divided by 20, 25, 35, and 40 leaves remainders 14, 19, 29, and 34 respectively.',
        options: ['1394', '1406', '1396', '1404'],
        correctAnswer: '1394',
        explanation: 'Constant difference d = 20 - 14 = 25 - 19 = 35 - 29 = 40 - 34 = 6. LCM(20, 25, 35, 40) = 1400. Required number = 1400 - 6 = 1394.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-hl-i4',
        question: 'The sum of two numbers is 528 and their HCF is 33. How many pairs of such numbers satisfy these conditions?',
        options: ['4', '6', '8', '2'],
        correctAnswer: '4',
        explanation: 'Let numbers be 33x and 33y where gcd(x, y) = 1. 33(x + y) = 528 => x + y = 16. Co-prime pairs (x, y) adding to 16: (1, 15), (3, 13), (5, 11), (7, 9). Total valid pairs = 4.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-hl-i5',
        question: 'A milkman has 3 containers containing 75 liters, 45 liters, and 60 liters of milk. What is the capacity of the largest measuring container that can measure the milk of all 3 containers in exact number of times?',
        options: ['5 liters', '15 liters', '25 liters', '30 liters'],
        correctAnswer: '15 liters',
        explanation: 'Capacity = HCF(75, 45, 60) = 15 liters.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-hl-i6',
        question: 'What is the greatest 4-digit number which is exactly divisible by 15, 24, and 36?',
        options: ['9720', '9840', '9600', '9900'],
        correctAnswer: '9720',
        explanation: 'LCM(15, 24, 36) = 360. Greatest 4-digit number = 9999. 9999 / 360 = 27 with remainder 279. Greatest 4-digit multiple = 9999 - 279 = 9720.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-hl-a1',
        question: 'Let N be the greatest number that will divide 1305, 4665, and 6905 leaving the same remainder in each case. What is the sum of the digits of N?',
        options: ['4', '5', '6', '8'],
        correctAnswer: '4',
        explanation: 'Differences: 4665 - 1305 = 3360; 6905 - 4665 = 2240; 6905 - 1305 = 5600. N = HCF(3360, 2240, 5600) = 1120. Sum of digits of 1120 = 1 + 1 + 2 + 0 = 4.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-hl-a2',
        question: 'Find the least number which when divided by 5, 6, 7, and 8 leaves a remainder 3, but when divided by 9 leaves no remainder.',
        options: ['840', '1683', '2523', '3363'],
        correctAnswer: '1683',
        explanation: 'LCM(5, 6, 7, 8) = 840. General form = 840k + 3. We require (840k + 3) to be divisible by 9. 840 mod 9 = 3 (since 8+4+0 = 12 ≡ 3). So 3k + 3 ≡ 0 (mod 9). For k = 2: 3(2) + 3 = 9 ≡ 0 (mod 9). For k = 2: Number = 840(2) + 3 = 1680 + 3 = 1683.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-hl-a3',
        question: 'The LCM of two numbers is 495 and their HCF is 5. If the sum of the numbers is 100, find their difference.',
        options: ['10', '20', '30', '40'],
        correctAnswer: '10',
        explanation: 'Let numbers be 5x and 5y with gcd(x, y) = 1. LCM = 5xy = 495 => xy = 99. Sum = 5(x + y) = 100 => x + y = 20. Two numbers adding to 20 and multiplying to 99 are 11 and 9. Actual numbers are 5 × 11 = 55 and 5 × 9 = 45. Difference = 55 - 45 = 10.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-hl-a4',
        question: 'How many numbers between 200 and 800 are divisible by both 12 and 16, but NOT by 24?',
        options: ['0', '5', '8', '12'],
        correctAnswer: '0',
        explanation: 'Divisible by both 12 and 16 means divisible by LCM(12, 16) = 48. Since 48 is already a multiple of 24 (48 = 24 × 2), EVERY number divisible by 48 is AUTOMATICALLY divisible by 24. Thus, there are 0 numbers divisible by 48 but not by 24.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-hl-a5',
        question: 'Three wheels make 60, 36, and 24 revolutions in a minute. Each wheel has a red dot on its rim that touches the ground at t = 0. After how many seconds will all 3 red dots touch the ground simultaneously again?',
        options: ['5 seconds', '10 seconds', '15 seconds', '20 seconds'],
        correctAnswer: '5 seconds',
        explanation: 'Time per revolution: Wheel 1: 60 s / 60 rev = 1 s. Wheel 2: 60 s / 36 rev = 5/3 s. Wheel 3: 60 s / 24 rev = 5/2 s. All dots touch ground simultaneously at LCM(1, 5/3, 5/2). Write 1 as 1/1: LCM = LCM(1, 5, 5) / HCF(1, 3, 2) = 5 / 1 = 5 seconds.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-hl-p1',
        question: 'In an automated factory, sensor A logs data every 14 seconds, sensor B logs every 21 seconds, and sensor C logs every 28 seconds. If all three synchronize at 09:00:00 AM, how many times will all three log data simultaneously between 09:00:00 AM and 10:00:00 AM (both inclusive)?',
        options: ['42', '43', '44', '45'],
        correctAnswer: '43',
        explanation: 'LCM(14, 21, 28): 14 = 2×7, 21 = 3×7, 28 = 4×7. LCM = 4 × 3 × 7 = 84 seconds. Duration = 1 hour = 3600 seconds. Simultaneous occurrences = ⌊3600 / 84⌋ + 1 = 42 + 1 = 43 times.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-hl-p2',
        question: 'A tech firm needs to package 312 laptops, 260 tablets, and 156 monitors into identical crates such that each crate contains only one type of device and all crates have the same number of devices. What is the minimum number of crates needed?',
        options: ['14', '16', '18', '20'],
        correctAnswer: '14',
        explanation: 'Max devices per crate = HCF(312, 260, 156) = 52. Number of crates = (312/52) + (260/52) + (156/52) = 6 + 5 + 3 = 14 crates.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-hl-p3',
        question: 'Find the largest integer N such that when 47, 77, and 107 are divided by N, they all leave the same remainder.',
        options: ['15', '30', '10', '6'],
        correctAnswer: '30',
        explanation: 'Differences: 77 - 47 = 30; 107 - 77 = 30; 107 - 47 = 60. HCF(30, 30, 60) = 30.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-hl-p4',
        question: 'The HCF of two 2-digit numbers is 16 and their product is 7168. Find the numbers.',
        options: ['16 and 448', '64 and 112', '32 and 224', '48 and 144'],
        correctAnswer: '64 and 112',
        explanation: 'Let numbers be 16x and 16y with gcd(x, y) = 1. (16x)(16y) = 7168 => 256xy = 7168 => xy = 28. Co-prime pairs of 28: (1, 28) and (4, 7). For (1, 28): numbers are 16 and 448 (448 is 3-digit). For (4, 7): numbers are 16 × 4 = 64 and 16 × 7 = 112 (both 2-digit or required candidate pair). Thus 64 and 112.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-hl-p5',
        question: 'Find the smallest number which when divided by 18, 24, 30, and 42 leaves 1 as remainder in each case.',
        options: ['2520', '2521', '5041', '1261'],
        correctAnswer: '2521',
        explanation: 'LCM(18, 24, 30, 42): 18 = 2×3^2; 24 = 2^3×3; 30 = 2×3×5; 42 = 2×3×7. LCM = 2^3 × 3^2 × 5 × 7 = 8 × 9 × 35 = 2520. Number = 2520 + 1 = 2521.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-hl-1',
      question: 'Find the smallest number that when divided by 3, 4, 5, 6 leaves remainders 2, 3, 4, 5 respectively, and is completely divisible by 7.',
      options: ['119', '59', '179', '239'],
      correctAnswer: '119',
      explanation: 'Constant difference d = 3-2 = 4-3 = 5-4 = 6-5 = 1. LCM(3, 4, 5, 6) = 60. Number form = 60k - 1. We test k for divisibility by 7: 60k - 1 = (56k + 4k - 1) ≡ 4k - 1 (mod 7). For k = 2: 4(2) - 1 = 7 ≡ 0 (mod 7). For k = 2: Number = 60(2) - 1 = 119. 119 is divisible by 7 (119/7 = 17).',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-hl-2',
      question: 'Two numbers A and B have HCF = 15 and LCM = 180. If their sum is 105, find the absolute difference |A - B|.',
      options: ['15', '30', '45', '60'],
      correctAnswer: '15',
      explanation: 'Let A = 15x, B = 15y with gcd(x,y)=1. LCM = 15xy = 180 => xy = 12. Sum = 15(x+y) = 105 => x+y = 7. Factors of 12 adding to 7 are 3 and 4. Numbers are 15 × 3 = 45 and 15 × 4 = 60. Difference = |60 - 45| = 15.',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-hl-3',
      question: 'Four metal rods of lengths 78 cm, 104 cm, 117 cm, and 169 cm are to be cut into equal pieces of maximum possible length. What is the total maximum number of pieces that can be obtained?',
      options: ['34', '36', '38', '40'],
      correctAnswer: '36',
      explanation: 'Piece length = HCF(78, 104, 117, 169) = 13 cm. Number of pieces = (78/13) + (104/13) + (117/13) + (169/13) = 6 + 8 + 9 + 13 = 36 pieces.',
      difficulty: 'Intermediate'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'HCF is the product of common prime factors with lowest powers; LCM is the product of all prime factors with highest powers.',
      'For two numbers A and B: A × B = HCF × LCM. (Invalid for 3 numbers).',
      'HCF(Fractions) = HCF(Num) / LCM(Den); LCM(Fractions) = LCM(Num) / HCF(Den). Always reduce fractions first.',
      'Constant remainder r in LCM: N = LCM · k + r.',
      'Constant difference d in LCM: N = LCM · k - d (where d = divisor - remainder).',
      'Unknown constant remainder in HCF: HCF of pairwise differences |x - y|, |y - z|, |z - x|.',
      'Co-prime pair formulation: If HCF = H, numbers are Hx and Hy with gcd(x, y) = 1.'
    ],
    quickFormulas: [
      'Product Property: A × B = HCF × LCM',
      'Fraction HCF: HCF(a/b, c/d) = HCF(a,c) / LCM(b,d)',
      'Tolling Events: Total = ⌊Total Time / LCM⌋ + 1',
      'Unknown Remainder HCF: HCF(|A-B|, |B-C|, |C-A|)'
    ]
  },
  keyTakeaways: [
    'Always simplify fractions to lowest terms before applying fractional HCF or LCM formulas.',
    'In synchronization word problems (traffic lights, bells, runner laps), always convert to time periods before computing LCM.',
    'For two numbers, express them as Hx and Hy with gcd(x, y) = 1 to solve sum and LCM pair problems.',
    'When constant difference d = (divisor - remainder) is observed, subtract d from the LCM multiple.',
    'The difference between two numbers is always divisible by their HCF.'
  ],
  selfCheckQuestions: [
    'Can you state why A × B × C = HCF × LCM is mathematically false for three numbers?',
    'Can you find the HCF and LCM of unreduced fractions by first converting them to lowest terms?',
    'Can you solve a bell tolling synchronization problem and determine whether to include the t = 0 toll?',
    'Can you find the number of co-prime pairs (x, y) when given the HCF and sum of two numbers?',
    'Can you find the largest divisor leaving the same remainder when dividing three large numbers?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 2: HCF and LCM of Numbers and Fractional Simplification.'
    },
    {
      sourceName: 'TCS NQT Numerical Ability Module',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Periodic synchronization, circular track meetings, and remainder models.'
    },
    {
      sourceName: 'Infosys Reasoning & Numerical Benchmark',
      sourceType: 'Industry Assessment',
      referenceNote: 'Co-prime factor pairs and multi-variable HCF remainder problems.'
    }
  ]
};
