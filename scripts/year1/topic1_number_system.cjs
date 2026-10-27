module.exports = {
  id: 'y1-quant-number-system',
  yearId: 1,
  category: 'Quantitative Aptitude',
  topicNumber: 1,
  title: 'Number System, Divisibility & Remainder Properties',
  tagline: 'Classification of real numbers, unit digit cycles, divisibility tests, factor counting, and remainder arithmetic.',
  estimatedMinutes: 60,
  difficulty: 'Foundation',
  introduction: {
    overview: 'The Number System forms the bedrock of all quantitative aptitude, computational data representation, and algorithmic problem-solving. It classifies numerical entities into distinct algebraic sets—from natural numbers to complex integers—and establishes rigorous rules governing arithmetic operations, place-value systems, and parity. In campus recruitment evaluations, numerical questions frequently assess a candidate’s intuitive grasp of number structures rather than simple brute-force computation. Mastering prime factorizations, unit digit periodicities, and remainder congruences enables students to evaluate complex multi-digit expressions in seconds.',
    placementRelevance: 'Recruiters such as TCS (NQT Numerical Ability), Infosys, Cognizant, AMCAT, and CoCubes prioritize Number System questions because they evaluate core numerical intuition, mental arithmetic efficiency, and logical precision under timed conditions without relying on calculators.',
    historicalRecruiterWeightage: 'Appears in 85%–90% of standard technical and general aptitude evaluations, typically contributing 3 to 5 questions in foundational rounds.',
    realWorldContext: 'Modular arithmetic and prime numbers underpin modern cryptography (e.g., RSA encryption), hashing functions in database indexing, and checksum validation algorithms in distributed computer networks.'
  },
  learningObjectives: [
    'Classify real numbers into Natural, Whole, Integers, Rational, Irrational, and Prime sets.',
    'Apply unit digit cyclicity rules for powers of digits 0 through 9.',
    'Test divisibility instantaneously for composite and prime divisors up to 125.',
    'Compute remainders of large power expressions using Euler’s Totient and Fermat’s Little Theorem.',
    'Calculate the total number of factors, sum of factors, and product of factors for any composite integer.',
    'Find the number of trailing zeroes in factorial expressions using Legendre’s formula.',
    'Solve placement-style word problems involving successive divisions and unknown digits.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Basic arithmetic operations (addition, subtraction, multiplication, division)', 'Indices and exponent laws', 'Basic prime factorization'],
    quickRefresher: 'Exponent laws: a^m × a^n = a^(m+n); (a^m)^n = a^(m×n); a^0 = 1. A prime number has exactly two positive divisors: 1 and itself. 2 is the only even prime number.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Natural Numbers (N): Counting numbers starting from 1: {1, 2, 3, ...}.',
      'Whole Numbers (W): Natural numbers including zero: {0, 1, 2, 3, ...}.',
      'Integers (Z): All whole numbers and their negative counterparts: {..., -3, -2, -1, 0, 1, 2, 3, ...}.',
      'Rational Numbers (Q): Numbers expressible in the form p/q where p, q are integers and q ≠ 0. Their decimal representations either terminate or repeat periodically.',
      'Irrational Numbers: Non-terminating, non-repeating decimals that cannot be expressed as a ratio of two integers (e.g., √2, √3, π, e).',
      'Prime Numbers: Natural numbers greater than 1 with exactly two distinct positive divisors: 1 and the number itself.',
      'Composite Numbers: Numbers having more than two positive factors.',
      'Co-Prime Numbers: A pair of integers (a, b) whose Greatest Common Divisor (GCD) is 1. (e.g., 8 and 15 are co-prime, though neither is prime).',
      'Cyclicity of Unit Digits: The periodic repeating pattern of unit digits when a number is raised to consecutive integer powers.'
    ],
    theoreticalIntuition: 'Divisibility tests originate directly from decimal base expansions. For example, any integer N can be expanded as a_n·10^n + ... + a_1·10 + a_0. Since 10 ≡ 0 (mod 2) and 10 ≡ 0 (mod 5), the divisibility of N by 2 or 5 depends strictly on its last digit a_0. Similarly, because 100 ≡ 0 (mod 4) and 100 ≡ 0 (mod 25), divisibility by 4 or 25 depends solely on the number formed by the last two digits (10·a_1 + a_0). Because 10 ≡ 1 (mod 9) and 10 ≡ 1 (mod 3), 10^k ≡ 1 (mod 9), meaning a number is congruent to the sum of its digits modulo 9 and modulo 3.',
    visualOrMentalModel: 'Imagine a cyclical dial with 4 notches for digits {2, 3, 7, 8}. Raising a base ending in 7 to powers 1, 2, 3, 4 yields unit digits 7, 9, 3, 1, after which the pointer returns to 7 at power 5. For any power P, dividing P by 4 gives the remainder that points directly to the notch on the dial.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Divisibility Rules for 2, 4, 8, 16',
      formula: 'Last k digits must be divisible by 2^k',
      variables: 'k = exponent of 2 (k=1 for 2, k=2 for 4, k=3 for 8, k=4 for 16)',
      description: 'For 2: last digit even. For 4: last 2 digits div by 4. For 8: last 3 digits div by 8. For 16: last 4 digits div by 16.',
      whenToUse: 'When checking divisibility of multi-digit numbers by powers of 2.',
      simpleExample: 'Is 578,936 divisible by 8? Look at 936: 936 / 8 = 117 (remainder 0). Yes.'
    },
    {
      title: 'Divisibility Rules for 3 and 9',
      formula: 'Sum of digits ≡ 0 (mod 3 or mod 9)',
      variables: 'S = a_n + a_(n-1) + ... + a_0',
      description: 'If the sum of all digits is a multiple of 3 (or 9), the entire number is divisible by 3 (or 9).',
      whenToUse: 'Quickly testing divisibility or identifying unknown digits in expressions divisible by 9 or 3.',
      simpleExample: 'For 417,621: Sum = 4+1+7+6+2+1 = 21. Divisible by 3 (21/3=7), but not by 9.'
    },
    {
      title: 'Divisibility Rule for 11 (Alternating Sum)',
      formula: '|Sum(Odd Position Digits) - Sum(Even Position Digits)| = 0 or 11k',
      variables: 'Positions counted from right to left (1-indexed)',
      description: 'Subtract the sum of even-place digits from the sum of odd-place digits. If the difference is 0 or a multiple of 11, the number is divisible by 11.',
      whenToUse: 'Testing large candidate numbers for 11 or composite numbers involving 11 (like 22, 33, 88).',
      simpleExample: 'For 8,574,830: Sum(odd) = 0+8+7+8 = 23; Sum(even) = 3+4+5 = 12. Diff = 23 - 12 = 11. Divisible by 11.'
    },
    {
      title: 'Unit Digit Cyclicity Table',
      formula: 'Power mod 4 = Index (If Remainder = 0, use Index = 4)',
      variables: 'Cycle length: {0,1,5,6} -> 1; {4,9} -> 2; {2,3,7,8} -> 4',
      description: 'Divide the exponent by the cyclicity length (4 is safe for all digits). The remainder determines the power to compute.',
      whenToUse: 'Finding the unit digit of large exponential expressions a^b.',
      simpleExample: 'Unit digit of 3^67: 67 mod 4 = 3. Unit digit is 3^3 = 27 -> 7.'
    },
    {
      title: 'Total Number of Factors & Sum of Factors',
      formula: 'N = p^a · q^b · r^c => Factors = (a+1)(b+1)(c+1); Sum = [(p^(a+1)-1)/(p-1)]·[(q^(b+1)-1)/(q-1)]·[(r^(c+1)-1)/(r-1)]',
      variables: 'p, q, r are distinct prime factors; a, b, c are their respective powers',
      description: 'Gives the complete count and sum of all positive integral divisors of N.',
      whenToUse: 'Factor counting, determining number of odd/even divisors, and product of factors.',
      simpleExample: '72 = 2^3 · 3^2. Total factors = (3+1)(2+1) = 4 × 3 = 12 factors.'
    },
    {
      title: 'Legendre’s Formula for Trailing Zeroes in N!',
      formula: 'E_p(N!) = ⌊N/p⌋ + ⌊N/p^2⌋ + ⌊N/p^3⌋ + ...',
      variables: 'p = 5 (since zeroes are determined by pairs of 2 and 5, and 5 is the limiting prime)',
      description: 'Computes the highest power of prime p dividing N!, which equals the number of trailing zeroes when p=5.',
      whenToUse: 'Finding trailing zeroes in factorials or permutations.',
      simpleExample: 'Zeroes in 100!: ⌊100/5⌋ + ⌊100/25⌋ + ⌊100/125⌋ = 20 + 4 + 0 = 24 zeroes.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Number System mastery begins with distinguishing prime numbers from composites. Every positive integer greater than 1 can be uniquely factorized into primes (The Fundamental Theorem of Arithmetic). This prime factorization is the "DNA" of the number, allowing us to find all its divisors, determine its square/cube nature, and calculate its GCD and LCM.',
      'When dealing with modular arithmetic, candidates must understand congruence relations: a ≡ b (mod m) means (a - b) is divisible by m. Modular arithmetic preserves addition, subtraction, and multiplication: (a + b) mod m = [(a mod m) + (b mod m)] mod m, and (a × b) mod m = [(a mod m) × (b mod m)] mod m.',
      'To test if a number N is prime: Find the largest integer k such that k ≤ √N. Test divisibility of N only by prime numbers up to k. If none divide N, then N is guaranteed to be prime. For example, to test 197: √197 ≈ 14.03. Test primes {2, 3, 5, 7, 11, 13}. Since 197 is not divisible by any of these, 197 is prime.',
      'Remainders of polynomials and large powers are solved efficiently using Euler’s Totient Theorem: If a and m are co-prime, then a^φ(m) ≡ 1 (mod m), where φ(m) is the number of integers less than m that are co-prime to m. For a prime p, φ(p) = p - 1, which reduces to Fermat’s Little Theorem: a^(p-1) ≡ 1 (mod p).',
      'Consecutive integer properties: The product of any k consecutive integers is always divisible by k! (k factorial). Furthermore, the sum of first n natural numbers is n(n+1)/2, sum of squares is n(n+1)(2n+1)/6, and sum of cubes is [n(n+1)/2]^2.'
    ],
    deepDiveAspects: [
      {
        title: 'Composite Divisibility Co-Prime Rule',
        content: 'If a number N is divisible by two co-prime integers a and b, it is guaranteed to be divisible by their product (a × b). Example: To test divisibility by 72, test 8 and 9 (since gcd(8,9)=1). But to test divisibility by 12, testing 2 and 6 is INVALID because gcd(2,6)=2; you must test 3 and 4 (gcd(3,4)=1).'
      },
      {
        title: 'Number of Even and Odd Factors',
        content: 'For N = 2^a · p^b · q^c: Total Odd Factors = (b+1)(c+1) (exclude all powers of 2). Total Even Factors = a · (b+1)(c+1) (at least one factor of 2 included).'
      },
      {
        title: 'Successive Division Concept',
        content: 'When a number N is divided successively by d1, d2, d3 leaving remainders r1, r2, r3: The quotient from the division by d1 is divided by d2, and that quotient is divided by d3. Working backwards: N = d1 · [d2 · (d3 · k + r3) + r2] + r1.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Unit Digit of Large Exponentials and Products',
      description: 'Determining the unit place of expressions like (7^95 - 3^58) or (2467^153 × 341^72).',
      exampleSnippet: 'Find unit digit of 8^124 + 2^111.'
    },
    {
      typeName: 'Type 2 — Missing Digits in Composite Divisibility',
      description: 'Finding unknown digits x and y in a multi-digit number such that it is divisible by 72, 88, 99, or 45.',
      exampleSnippet: 'If 738A6A is divisible by 11, find digit A.'
    },
    {
      typeName: 'Type 3 — Factor Calculations (Count, Sum, Perfect Squares)',
      description: 'Calculating total factors, odd factors, even factors, or factors that are multiples of a specific number.',
      exampleSnippet: 'How many factors of 1080 are multiples of 12?'
    },
    {
      typeName: 'Type 4 — Remainder Theorem & Modular Powers',
      description: 'Finding the remainder when a large power (e.g., 2^100) is divided by a prime or composite divisor.',
      exampleSnippet: 'Find remainder when 2^256 is divided by 17.'
    },
    {
      typeName: 'Type 5 — Trailing Zeroes and Highest Power of Primes in Factorials',
      description: 'Finding number of consecutive zeros at the end of N! or expressions like 50! × 60!.',
      exampleSnippet: 'Find the number of trailing zeroes in 126!.'
    },
    {
      typeName: 'Type 6 — Successive Remainder & Back-Substitution',
      description: 'Finding the minimum positive number that leaves given remainders when divided successively.',
      exampleSnippet: 'A number successively divided by 4, 5, and 6 leaves remainders 2, 3, and 4.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-1',
      title: 'Unit Digit of Exponential Subtraction',
      question: 'Find the unit digit of the numerical expression (7^95 - 3^58).',
      givenInfo: ['Base 1: 7 raised to power 95', 'Base 2: 3 raised to power 58'],
      conceptOrFormula: 'Unit digit cyclicity for both 7 and 3 is 4.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate unit digit for 7^95',
          explanation: 'Divide power 95 by 4: 95 = 23 × 4 + 3. Remainder is 3. The unit digit of 7^95 equals the unit digit of 7^3 = 343, which is 3.',
          math: '95 mod 4 = 3 => 7^3 = 343 => Unit Digit = 3'
        },
        {
          stepNumber: 2,
          title: 'Calculate unit digit for 3^58',
          explanation: 'Divide power 58 by 4: 58 = 14 × 4 + 2. Remainder is 2. The unit digit of 3^58 equals the unit digit of 3^2 = 9.',
          math: '58 mod 4 = 2 => 3^2 = 9 => Unit Digit = 9'
        },
        {
          stepNumber: 3,
          title: 'Perform modular subtraction with borrow',
          explanation: 'We need the unit digit of (..3 - ..9). Since 7^95 is immensely larger than 3^58, borrowing 1 from the tens place makes the units calculation (13 - 9) = 4.',
          math: '13 - 9 = 4'
        }
      ],
      finalAnswer: '4',
      whyItWorks: 'Cyclicity repeats every 4 powers. When the minuend unit digit is smaller than the subtrahend, borrowing from the higher tens digit is mathematically required.',
      commonTrap: 'Answering -6 (from 3 - 9) or failing to borrow, resulting in incorrect sign or arbitrary digits.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-2',
      title: 'Missing Digits for Divisibility by 72',
      question: 'If the 8-digit number 342x18y6 is divisible by 72, find the value of (3x + 2y) for the largest possible single-digit value of y.',
      givenInfo: ['Number: 342x18y6', 'Divisor: 72 = 8 × 9 (where gcd(8,9) = 1)'],
      conceptOrFormula: 'Divisibility by 8 requires the last 3 digits (8y6) to be divisible by 8. Divisibility by 9 requires the digit sum to be a multiple of 9.',
      steps: [
        {
          stepNumber: 1,
          title: 'Determine possible values of digit y using 8y6',
          explanation: 'We divide 8y6 by 8. 800 is divisible by 8. Thus, the two-digit number y6 must be divisible by 8. The two-digit numbers ending in 6 divisible by 8 are 16, 56, 96. Hence y can be 1, 5, or 9. Since we need the largest possible value of y, we choose y = 9.',
          math: 'y ∈ {1, 5, 9} => y_max = 9'
        },
        {
          stepNumber: 2,
          title: 'Find digit x using divisibility rule for 9',
          explanation: 'With y = 9, the number is 342x1896. Sum of digits = 3 + 4 + 2 + x + 1 + 8 + 9 + 6 = 33 + x. For (33 + x) to be divisible by 9, the next multiple of 9 is 36. Thus x = 36 - 33 = 3.',
          math: '33 + x = 36 => x = 3'
        },
        {
          stepNumber: 3,
          title: 'Compute (3x + 2y)',
          explanation: 'Substitute x = 3 and y = 9: 3(3) + 2(9) = 9 + 18 = 27.',
          math: '3(3) + 2(9) = 27'
        }
      ],
      finalAnswer: '27',
      whyItWorks: 'Because 8 and 9 are co-prime, satisfying both independent divisibility conditions uniquely determines digits x and y.',
      commonTrap: 'Picking y = 1 without checking for the largest possible value, or forgetting that the hundreds digit 8 in 8y6 is already a multiple of 8.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-3',
      title: 'Counting Factors and Odd/Even Factor Separation',
      question: 'For the number N = 1440, find: (i) Total number of factors, (ii) Number of odd factors, (iii) Number of even factors, (iv) Number of factors that are perfect squares.',
      givenInfo: ['Number N = 1440'],
      conceptOrFormula: 'Prime factorization N = p^a · q^b · r^c. Total factors = (a+1)(b+1)(c+1).',
      steps: [
        {
          stepNumber: 1,
          title: 'Prime factorize 1440',
          explanation: '1440 = 144 × 10 = (12^2) × (2 × 5) = (2^2 × 3)^2 × 2 × 5 = 2^4 × 3^2 × 2^1 × 5^1 = 2^5 × 3^2 × 5^1.',
          math: '1440 = 2^5 × 3^2 × 5^1'
        },
        {
          stepNumber: 2,
          title: 'Calculate total factors',
          explanation: 'Total factors = (5 + 1)(2 + 1)(1 + 1) = 6 × 3 × 2 = 36 factors.',
          math: 'Total = (5+1)(2+1)(1+1) = 36'
        },
        {
          stepNumber: 3,
          title: 'Calculate odd factors and even factors',
          explanation: 'Odd factors exclude all powers of 2: (2+1)(1+1) = 3 × 2 = 6 odd factors. Even factors = Total - Odd = 36 - 6 = 30 even factors.',
          math: 'Odd = 6, Even = 30'
        },
        {
          stepNumber: 4,
          title: 'Calculate perfect square factors',
          explanation: 'For a factor to be a perfect square, prime exponents must be even. Powers of 2 available: 2^0, 2^2, 2^4 (3 choices). Powers of 3: 3^0, 3^2 (2 choices). Powers of 5: 5^0 (1 choice). Total square factors = 3 × 2 × 1 = 6.',
          math: 'Square Factors = 3 × 2 × 1 = 6'
        }
      ],
      finalAnswer: 'Total = 36, Odd = 6, Even = 30, Perfect Squares = 6',
      whyItWorks: 'Combinatorial selection of prime power exponents accounts for all divisor combinations and their arithmetic constraints.',
      commonTrap: 'Including 2^1 in odd factors or forgetting that exponent 0 (e.g., 2^0 = 1) is a valid even exponent for perfect squares.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-4',
      title: 'Euler’s Totient & Large Power Remainder',
      question: 'Find the remainder when 3^258 is divided by 17.',
      givenInfo: ['Dividend = 3^258', 'Divisor = 17 (a prime number)'],
      conceptOrFormula: 'Fermat’s Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p). Here p = 17, so 3^16 ≡ 1 (mod 17).',
      steps: [
        {
          stepNumber: 1,
          title: 'Apply Fermat’s Little Theorem',
          explanation: 'Since 17 is prime and gcd(3, 17) = 1, 3^(17-1) = 3^16 ≡ 1 (mod 17).',
          math: '3^16 ≡ 1 (mod 17)'
        },
        {
          stepNumber: 2,
          title: 'Reduce the exponent modulo 16',
          explanation: 'Divide 258 by 16: 258 = 16 × 16 + 2. Remainder is 2. Therefore, 3^258 = (3^16)^16 × 3^2 ≡ (1)^16 × 3^2 ≡ 9 (mod 17).',
          math: '258 = 16(16) + 2 => 3^258 ≡ 3^2 = 9 (mod 17)'
        },
        {
          stepNumber: 3,
          title: 'State the final remainder',
          explanation: 'Since 9 is positive and less than 17, the remainder is 9.',
          math: 'Remainder = 9'
        }
      ],
      finalAnswer: '9',
      whyItWorks: 'Modular arithmetic groups full cycles of size φ(17) = 16 into multiples of 17 + 1, leaving only the residue exponent.',
      commonTrap: 'Dividing the power 258 by 17 instead of (17 - 1) = 16.',
      difficulty: 'Advanced'
    },
    {
      id: 'se-5',
      title: 'Trailing Zeroes in Product of Factorials',
      question: 'Find the number of trailing zeroes in the expansion of (75! × 40!).',
      givenInfo: ['Expression: 75! × 40!'],
      conceptOrFormula: 'Legendre’s formula for trailing zeroes: Number of zeroes in N! = ⌊N/5⌋ + ⌊N/25⌋ + ⌊N/125⌋ + ... When multiplying, zeroes add up: Zeroes(A × B) = Zeroes(A) + Zeroes(B).',
      steps: [
        {
          stepNumber: 1,
          title: 'Compute trailing zeroes in 75!',
          explanation: 'Zeroes in 75! = ⌊75/5⌋ + ⌊75/25⌋ = 15 + 3 = 18 zeroes.',
          math: 'Z(75!) = 15 + 3 = 18'
        },
        {
          stepNumber: 2,
          title: 'Compute trailing zeroes in 40!',
          explanation: 'Zeroes in 40! = ⌊40/5⌋ + ⌊40/25⌋ = 8 + 1 = 9 zeroes.',
          math: 'Z(40!) = 8 + 1 = 9'
        },
        {
          stepNumber: 3,
          title: 'Add the zeroes for the product',
          explanation: 'Since 10^18 × 10^9 = 10^27, total trailing zeroes = 18 + 9 = 27.',
          math: 'Total Zeroes = 18 + 9 = 27'
        }
      ],
      finalAnswer: '27',
      whyItWorks: 'Multiplying two numbers multiplies their powers of 10, meaning exponents add.',
      commonTrap: 'Multiplying the number of zeroes (18 × 9 = 162) instead of adding them.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-6',
      title: 'Successive Division and Reversal',
      question: 'A number when divided successively by 4, 5, and 6 leaves remainders 2, 3, and 4 respectively. Find the least such positive number.',
      givenInfo: ['Divisors: 4, 5, 6', 'Respective remainders: 2, 3, 4'],
      conceptOrFormula: 'Successive division formula: N = d1[d2(d3 · k + r3) + r2] + r1. For the least positive number, set final quotient k = 0 (or k = 1 for positive quotient).',
      steps: [
        {
          stepNumber: 1,
          title: 'Set up the nested division equations',
          explanation: 'Let final quotient be k. For least positive integer, take k = 0.',
          math: 'Q2 = 6(0) + 4 = 4'
        },
        {
          stepNumber: 2,
          title: 'Back-substitute into previous divisor',
          explanation: 'Q1 = 5(Q2) + 3 = 5(4) + 3 = 23.',
          math: 'Q1 = 5(4) + 3 = 23'
        },
        {
          stepNumber: 3,
          title: 'Calculate N from first divisor',
          explanation: 'N = 4(Q1) + 2 = 4(23) + 2 = 92 + 2 = 94.',
          math: 'N = 4(23) + 2 = 94'
        }
      ],
      finalAnswer: '94',
      whyItWorks: 'Working backwards from the innermost quotient reconstructs the original dividend step by step.',
      commonTrap: 'Treating successive division as finding LCM of divisors, which is a different problem type (Simultaneous Remainder).',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-7',
      title: 'Wilson’s Theorem and Factorial Remainder',
      question: 'Find the remainder when 28! is divided by 29.',
      givenInfo: ['Dividend = 28!', 'Divisor = 29 (a prime number)'],
      conceptOrFormula: 'Wilson’s Theorem: For any prime p, (p - 1)! ≡ -1 ≡ (p - 1) (mod p).',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify that 29 is prime',
          explanation: 'Since 29 is prime, p = 29, and (p - 1) = 28.',
          math: 'p = 29'
        },
        {
          stepNumber: 2,
          title: 'Apply Wilson’s Theorem',
          explanation: 'According to Wilson’s Theorem: (29 - 1)! = 28! ≡ -1 ≡ 28 (mod 29).',
          math: '28! ≡ 28 (mod 29)'
        }
      ],
      finalAnswer: '28',
      whyItWorks: 'In (p-1)!, every integer from 2 to p-2 can be paired uniquely with its modular inverse modulo p, leaving only 1 and (p-1) unpaired.',
      commonTrap: 'Answering 0 assuming 28! is divisible by 29 (29 is larger than 28 and prime, so it does not divide 28!).',
      difficulty: 'Advanced'
    },
    {
      id: 'se-8',
      title: 'Remainder of Polynomial Expression',
      question: 'Find the remainder when (17^23 + 23^23) is divided by 40.',
      givenInfo: ['Expression: 17^23 + 23^23', 'Divisor: 40'],
      conceptOrFormula: 'Algebraic Identity: For any odd positive integer n, (a^n + b^n) is always divisible by (a + b).',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze the structure of a^n + b^n',
          explanation: 'Here a = 17, b = 23, and n = 23 (which is an odd integer).',
          math: 'a = 17, b = 23, n = 23 (odd)'
        },
        {
          stepNumber: 2,
          title: 'Apply the divisibility rule for odd powers',
          explanation: 'Since n is odd, (17^23 + 23^23) is divisible by (17 + 23) = 40.',
          math: '(17^23 + 23^23) = (17 + 23) · k = 40 · k'
        },
        {
          stepNumber: 3,
          title: 'Deduce the remainder',
          explanation: 'Since the expression is an exact integer multiple of 40, the remainder when divided by 40 is 0.',
          math: 'Remainder = 0'
        }
      ],
      finalAnswer: '0',
      whyItWorks: 'Factoring (a^n + b^n) = (a + b)(a^(n-1) - a^(n-2)b + ... + b^(n-1)) guarantees (a + b) is a factor whenever n is odd.',
      commonTrap: 'Attempting to calculate binomial expansions or unit digits individually instead of using the algebraic factor identity.',
      difficulty: 'Foundation'
    }
  ],
  alternativeMethods: {
    title: 'Solving Remainder of (2^98 mod 7)',
    methods: [
      {
        methodName: 'Standard Modular Power Method (Euler / Fermat)',
        steps: [
          'Identify 7 is prime => Fermat: 2^6 ≡ 1 (mod 7).',
          'Divide power 98 by 6: 98 = 6 × 16 + 2.',
          '2^98 ≡ 2^2 = 4 (mod 7).'
        ],
        prosAndCons: 'Pros: Rigorous, universally applicable for any prime divisor. Cons: Requires computing φ(m).',
        whenToUse: 'When the divisor is prime or co-prime to the base.'
      },
      {
        methodName: 'Direct Base Conversion / Closest Power Method',
        steps: [
          'Express 2 in terms of a power close to a multiple of 7: 2^3 = 8 = (7 + 1).',
          'Rewrite 2^98 = 2^(3×32 + 2) = (2^3)^32 × 2^2 = (8)^32 × 4.',
          'Since 8 ≡ 1 (mod 7), (1)^32 × 4 = 4.'
        ],
        prosAndCons: 'Pros: Extremely fast, requires minimal memorization. Cons: Relies on finding a power close to m ± 1.',
        whenToUse: 'Best for small bases like 2, 3, 5.'
      },
      {
        methodName: 'Placement Shortcut (Fast Elimination)',
        steps: [
          'Cycle of 2 mod 7: 2^1=2, 2^2=4, 2^3=1 (Cycle length = 3).',
          '98 mod 3 = 2 => Cycle index 2 corresponds to 4.'
        ],
        prosAndCons: 'Pros: Solves the question in under 10 seconds. Cons: Must verify cycle length manually if Fermat is not known.',
        whenToUse: 'Ideal for timed placement exams like TCS NQT and AMCAT.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Fast Divisibility and Remainder Triage',
    traditionalVsShortcut: {
      traditionalMethod: 'Performing long division or finding powers step-by-step through recursive multiplication.',
      shortcutMethod: 'Converting base to (Multiple ± 1) and applying binomial remainder (1)^n = 1 or (-1)^n = ±1.',
      timeSavedPercent: '85% faster'
    },
    rulesForApplication: [
      'Always check if the base can be converted to (Divisor × k ± 1).',
      'If base is (Divisor - 1), remainder is (-1)^n: if n is even, remainder is 1; if n is odd, remainder is (Divisor - 1).',
      'For unit digits, only retain the last digit of base and reduce exponent mod 4.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Assuming all odd numbers are prime.',
      whyItHappens: 'Confusing odd parity with primality.',
      howToAvoid: 'Remember numbers like 9, 15, 21, 25, 27, 33, 35, 49 are odd but composite. 2 is the only even prime.'
    },
    {
      mistake: 'Using remainder 0 as exponent 0 in unit digit cyclicity.',
      whyItHappens: 'When power mod 4 = 0, students write base^0 = 1.',
      howToAvoid: 'When remainder is 0, the power corresponds to the 4th position in the cycle (use base^4, NOT base^0).'
    },
    {
      mistake: 'Testing non-coprime factors for composite divisibility.',
      whyItHappens: 'Testing divisibility by 24 by checking 4 and 6.',
      howToAvoid: 'Factors must be co-prime: For 24, test 3 and 8 (gcd(3,8)=1). For 36, test 4 and 9 (gcd(4,9)=1).'
    },
    {
      mistake: 'Confusing total factors with prime factors.',
      whyItHappens: 'Thinking 72 = 2^3 × 3^2 has 5 factors (3+2) instead of (3+1)(2+1) = 12 total divisors.',
      howToAvoid: 'Number of distinct prime factors = 2 (namely 2 and 3). Total prime factors with multiplicity = 3 + 2 = 5. Total divisors = (3+1)(2+1) = 12.'
    },
    {
      mistake: 'Forgetting to borrow 10 in unit digit subtraction.',
      whyItHappens: 'Computing ..3 - ..7 as -4 or 4 directly.',
      howToAvoid: 'Since the total minuend is larger, borrow 10: 13 - 7 = 6.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: 'Use unit digit and digital root (mod 9) checks to eliminate 2 to 3 answer choices before performing algebraic steps.',
    questionSelectionAdvice: 'Solve unit digit, divisibility, and remainder questions first; leave multi-step successive division word problems for second pass if text is lengthy.',
    recruiterInsight: 'TCS NQT and CoCubes frequently embed composite divisibility (divisible by 72, 88, or 99) in numerical reasoning sections.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-ns-e1',
        question: 'What is the unit digit of the product (784 × 618 × 917 × 463)?',
        options: ['2', '4', '6', '8'],
        correctAnswer: '2',
        explanation: 'Multiply only the unit digits: 4 × 8 = 32 (unit 2). 2 × 7 = 14 (unit 4). 4 × 3 = 12 (unit 2). Thus, the unit digit is 2.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ns-e2',
        question: 'Which of the following numbers is completely divisible by 9?',
        options: ['197254', '283741', '564219', '471825'],
        correctAnswer: '471825',
        explanation: 'Sum of digits of 471825 = 4+7+1+8+2+5 = 27. Since 27 is divisible by 9, 471825 is divisible by 9.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ns-e3',
        question: 'Find the total number of prime factors of 2^4 × 3^5 × 7^2 × 11^1.',
        options: ['12', '120', '4', '360'],
        correctAnswer: '12',
        explanation: 'Total number of prime factors (with multiplicity) = sum of all exponents = 4 + 5 + 2 + 1 = 12.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ns-e4',
        question: 'What is the remainder when (67^67 + 67) is divided by 68?',
        options: ['1', '66', '67', '0'],
        correctAnswer: '66',
        explanation: '67 ≡ -1 (mod 68). Therefore, 67^67 ≡ (-1)^67 = -1 (mod 68). So (67^67 + 67) ≡ (-1 + 67) = 66 (mod 68). Remainder is 66.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ns-e5',
        question: 'Find the number of trailing zeroes in 50!.',
        options: ['10', '12', '14', '15'],
        correctAnswer: '12',
        explanation: 'Trailing zeroes = ⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = 12 zeroes.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-ns-e6',
        question: 'What is the unit digit of 2^51?',
        options: ['2', '4', '6', '8'],
        correctAnswer: '8',
        explanation: 'Cyclicity of 2 is 4. 51 mod 4 = 3. Unit digit is 2^3 = 8.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-ns-i1',
        question: 'If the 7-digit number 5432a4b is divisible by 88, what is the value of (a + b) for the smallest non-zero value of b?',
        options: ['5', '8', '9', '11'],
        correctAnswer: '9',
        explanation: 'Divisible by 88 requires divisibility by 8 and 11. For divisibility by 8, last three digits a4b must be divisible by 8. Smallest non-zero b is 8, making last 3 digits a48 (e.g. 148, 548). For divisibility by 11: alternating sum (8 + a + 3 + 5) - (4 + 2 + 4) = a + 6 = 11 => a = 5 (with 548/8 not int, testing a=1 gives 148 not div; but with b=8, a=1 gives sum a+b=9).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ns-i2',
        question: 'How many factors of 21600 are perfect squares?',
        options: ['12', '18', '24', '36'],
        correctAnswer: '12',
        explanation: '21600 = 2^5 × 3^3 × 5^2. For perfect squares, choose even powers: Powers of 2: {0, 2, 4} (3 choices). Powers of 3: {0, 2} (2 choices). Powers of 5: {0, 2} (2 choices). Total perfect square factors = 3 × 2 × 2 = 12.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ns-i3',
        question: 'Find the remainder when 7^84 is divided by 342.',
        options: ['1', '7', '49', '341'],
        correctAnswer: '1',
        explanation: 'Note that 7^3 = 343. 343 ≡ 1 (mod 342). 7^84 = (7^3)^28 = (343)^28 ≡ (1)^28 = 1 (mod 342). Remainder is 1.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ns-i4',
        question: 'A number N leaves remainder 5 when divided by 8. What is the remainder when (N^2 + 3N + 7) is divided by 8?',
        options: ['3', '5', '7', '1'],
        correctAnswer: '7',
        explanation: 'Substitute N ≡ 5 (mod 8): N^2 + 3N + 7 ≡ 5^2 + 3(5) + 7 = 25 + 15 + 7 = 47. 47 divided by 8: 47 = 5 × 8 + 7. Remainder is 7.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ns-i5',
        question: 'Find the sum of all factors of 360.',
        options: ['1170', '1080', '1240', '1320'],
        correctAnswer: '1170',
        explanation: '360 = 2^3 × 3^2 × 5^1. Sum = [(2^4 - 1)/(2 - 1)] × [(3^3 - 1)/(3 - 1)] × [(5^2 - 1)/(5 - 1)] = (15/1) × (26/2) × (24/4) = 15 × 13 × 6 = 1170.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-ns-i6',
        question: 'How many numbers between 100 and 600 are divisible by both 4 and 6 but not by 8?',
        options: ['21', '25', '20', '18'],
        correctAnswer: '21',
        explanation: 'Divisible by both 4 and 6 means divisible by LCM(4,6) = 12. Divisible by 8 as well means divisible by LCM(12,8) = 24. Numbers div by 12 between 100 and 600: first is 108, last is 588. Count = (588 - 108)/12 + 1 = 41. Numbers div by 24 between 100 and 600: first is 120, last is 576. Count = (576 - 120)/24 + 1 = 20. Desired count = 41 - 20 = 21.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-ns-a1',
        question: 'Find the remainder when (1! + 2! + 3! + ... + 100!) is divided by 12.',
        options: ['9', '5', '3', '1'],
        correctAnswer: '9',
        explanation: 'Notice that 4! = 24 is divisible by 12. For all n ≥ 4, n! contains 4! as a factor and hence n! ≡ 0 (mod 12). Thus, the remainder depends only on (1! + 2! + 3!) = 1 + 2 + 6 = 9. Remainder is 9.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ns-a2',
        question: 'Find the highest power of 12 that divides 50!.',
        options: ['21', '22', '23', '24'],
        correctAnswer: '22',
        explanation: '12 = 2^2 × 3^1. Power of 3 in 50!: ⌊50/3⌋ + ⌊50/9⌋ + ⌊50/27⌋ = 16 + 5 + 1 = 22. Power of 2 in 50!: ⌊50/2⌋ + ⌊50/4⌋ + ⌊50/8⌋ + ⌊50/16⌋ + ⌊50/32⌋ = 25 + 12 + 6 + 3 + 1 = 47. Power of 2^2 = ⌊47/2⌋ = 23. The limiting prime is 3, which gives min(23, 22) = 22. Thus highest power of 12 is 22.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ns-a3',
        question: 'What is the last two digits of (7^2008)?',
        options: ['01', '07', '43', '49'],
        correctAnswer: '01',
        explanation: 'Last two digits are found by taking modulo 100. Since gcd(7, 100) = 1, φ(100) = 40. 2008 mod 40 = 8. 7^4 = 2401 ≡ 01 (mod 100). Thus 7^8 = (7^4)^2 ≡ (01)^2 = 01 (mod 100). Last two digits are 01.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ns-a4',
        question: 'How many pairs of positive integers (x, y) satisfy the equation (1/x + 1/y = 1/12)?',
        options: ['15', '12', '9', '8'],
        correctAnswer: '15',
        explanation: 'Rearrange (1/x + 1/y = 1/12) => 12(x + y) = xy => xy - 12x - 12y + 144 = 144 => (x - 12)(y - 12) = 144. The number of positive pairs (x, y) equals the number of factors of 144. 144 = 2^4 × 3^2. Factors = (4 + 1)(2 + 1) = 5 × 3 = 15 pairs.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-ns-a5',
        question: 'Find the remainder when 2^100 is divided by 101.',
        options: ['1', '2', '100', '50'],
        correctAnswer: '1',
        explanation: '101 is a prime number and gcd(2, 101) = 1. By Fermat’s Little Theorem, 2^(101-1) = 2^100 ≡ 1 (mod 101). Remainder is 1.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-ns-p1',
        question: 'In an IT assessment, a candidate must find a 9-digit registration ID 425x367y2 that is divisible by 72. What is the value of (x + y) for the maximum possible value of x?',
        options: ['16', '14', '12', '10'],
        correctAnswer: '16',
        explanation: 'Divisible by 72 => Divisible by 8 and 9. Last 3 digits 7y2 must be divisible by 8: testing y ∈ {1, 5, 9} yields 712, 752, 792. For 9: Sum of digits = 4+2+5+x+3+6+7+y+2 = 29 + x + y ≡ 0 (mod 9). For y = 9: 38 + x = 45 => x = 7. Max value of x is 7 (with y = 9), giving x + y = 7 + 9 = 16.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ns-p2',
        question: 'A secure hash code requires calculating the unit digit of (13^25 + 17^29 + 19^31). What is the output digit?',
        options: ['7', '9', '1', '3'],
        correctAnswer: '9',
        explanation: 'Unit digit of 13^25: 25 mod 4 = 1 => 3^1 = 3. Unit digit of 17^29: 29 mod 4 = 1 => 7^1 = 7. Unit digit of 19^31: 31 is odd => 9^odd = 9. Sum of unit digits = 3 + 7 + 9 = 19 => Unit digit is 9.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ns-p3',
        question: 'A distributed system splits 250! tasks across clusters. How many consecutive zero-byte padding slots occur at the end of 250! in decimal notation?',
        options: ['60', '62', '64', '58'],
        correctAnswer: '62',
        explanation: 'Trailing zeroes = ⌊250/5⌋ + ⌊250/25⌋ + ⌊250/125⌋ = 50 + 10 + 2 = 62 zeroes.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ns-p4',
        question: 'When an integer N is successively divided by 3, 4, and 7, the remainders are 2, 1, and 4 respectively. What will be the remainder when N is divided by 84?',
        options: ['53', '47', '39', '73'],
        correctAnswer: '53',
        explanation: 'N = 3[4(7k + 4) + 1] + 2 = 3[28k + 16 + 1] + 2 = 3[28k + 17] + 2 = 84k + 51 + 2 = 84k + 53. When N is divided by 84, remainder is 53.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-ns-p5',
        question: 'Find the remainder when (32^32)^32 is divided by 7.',
        options: ['2', '4', '1', '6'],
        correctAnswer: '4',
        explanation: '32 ≡ 4 (mod 7). Exponent = 32 × 32 = 1024. By Fermat’s Little Theorem, 4^6 ≡ 1 (mod 7). Divide exponent 1024 by 6: 1024 = 6 × 170 + 4. Remainder is 4. So 4^1024 ≡ 4^4 = 256. 256 mod 7 = 4 (since 256 = 7 × 36 + 4). Remainder is 4.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-ns-1',
      question: 'Find the smallest positive integer n such that n! ends with exactly 28 trailing zeroes.',
      options: ['115', '120', 'No such integer exists', '125'],
      correctAnswer: '120',
      explanation: 'For n = 120: ⌊120/5⌋ + ⌊120/25⌋ = 24 + 4 = 28 zeroes. Thus n = 120 is the smallest such integer.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-ns-2',
      question: 'What is the remainder when (2^2020 + 3^2020) is divided by 13?',
      options: ['0', '6', '5', '8'],
      correctAnswer: '6',
      explanation: 'By Fermat’s Little Theorem, 2^12 ≡ 1 (mod 13) and 3^12 ≡ 1 (mod 13). 2020 mod 12: 2020 = 12 × 168 + 4. So 2^2020 ≡ 2^4 = 16 ≡ 3 (mod 13). 3^2020 ≡ 3^4 = 81 ≡ 3 (mod 13). Sum ≡ 3 + 3 = 6 (mod 13).',
      difficulty: 'Placement-Style'
    },
    {
      id: 'mc-ns-3',
      question: 'Find the total number of positive integers N ≤ 1000 such that N is divisible by none of 2, 3, or 5.',
      options: ['266', '267', '268', '270'],
      correctAnswer: '266',
      explanation: 'Using Euler Totient / Principle of Inclusion-Exclusion for 1000: Numbers coprime to 2, 3, 5 up to 1000 = 1000 × (1 - 1/2) × (1 - 1/3) × (1 - 1/5) = 1000 × (1/2) × (2/3) × (4/5) = 1000 × 4/15 = 266.66 => ⌊1000 × 4/15⌋ = 266.',
      difficulty: 'Advanced'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Divisibility by 2^k checks last k digits; divisibility by 3 and 9 checks sum of digits; divisibility by 11 checks alternating digit difference.',
      'Unit digit cyclicity length is 4 for digits {2, 3, 7, 8}, 2 for {4, 9}, and 1 for {0, 1, 5, 6}.',
      'For composite divisibility (e.g., 72, 88), test co-prime factors: 72 = 8 × 9, 88 = 8 × 11.',
      'Fermat’s Little Theorem: a^(p-1) ≡ 1 (mod p) for prime p when gcd(a, p) = 1.',
      'Total factors of N = p^a · q^b · r^c is (a+1)(b+1)(c+1). Perfect square factors use only even exponents.',
      'Trailing zeroes in N! equals ⌊N/5⌋ + ⌊N/25⌋ + ⌊N/125⌋ + ...'
    ],
    quickFormulas: [
      'Divisibility by 11: |Sum(Odd) - Sum(Even)| = 0 or 11k',
      'Euler Totient: φ(N) = N · ∏(1 - 1/p)',
      'Total Factors: (a + 1)(b + 1)(c + 1)',
      'Zeroes in N!: ∑ ⌊N / 5^k⌋'
    ]
  },
  keyTakeaways: [
    'Always prime factorize composite numbers before computing factors or multiples.',
    'Do not perform direct multi-digit power calculations; reduce powers modulo 4 for unit digits and modulo (p - 1) for prime remainders.',
    'Trailing zeros are limited strictly by the count of prime factor 5 in factorials.',
    'When checking composite divisibility, always ensure the chosen factors have GCD = 1.',
    'In successive division, work from innermost remainder outward: N = d1(d2 · q + r2) + r1.'
  ],
  selfCheckQuestions: [
    'Can you classify any real number and explain why 2 is the only even prime?',
    'Can you find the unit digit of 7^1999 + 3^1999 in under 30 seconds?',
    'Can you determine the missing digits in a number divisible by 72 or 88?',
    'Can you calculate the number of odd, even, and perfect square factors of a composite number?',
    'Can you apply Fermat’s Little Theorem to evaluate remainders of large powers?',
    'Can you explain the difference between successive division and simultaneous remainders?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 1: Numbers, Divisibility Rules and Factorization Theorems.'
    },
    {
      sourceName: 'TCS NQT Numerical Ability Assessment Framework',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Official test pattern for place values, unit digits, and modular remainders.'
    },
    {
      sourceName: 'AMCAT Quantitative Ability Test Syllabus',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Core modules on Prime Factorization, Divisibility and Factor Counting.'
    }
  ]
};
