import { CRTYearCurriculum } from '../types/crtTypes';

export const CRT_YEAR_1_DATA: CRTYearCurriculum = {
  "yearId": 1,
  "yearName": "1st Year",
  "levelTitle": "1st Year Foundation CRT — Core Mathematical, Logical & Verbal Fundamentals",
  "description": "Comprehensive 1st-year foundational curriculum: number systems, divisibility, fractions, percentages, ratios, logical series, blood relations, directions, basic grammar, and data table reading — all from first principles.",
  "targetFocus": [
    "Arithmetic fluency: number systems, HCF/LCM, fractions, percentages, ratios, averages, profit/loss, simple interest",
    "Logical reasoning basics: number series, letter series, analogy, classification, coding, blood relations, directions, ranking",
    "Grammar foundations: parts of speech, tenses, articles, prepositions, subject-verb agreement, vocabulary",
    "Data reading: tables, bar charts, pie charts, and basic DI sets"
  ],
  "categories": [
    {
      "category": "Quantitative Foundation",
      "description": "Quantitative Foundation for Year 1 Foundation",
      "topics": [
        {
          "id": "y1-quant-num-sys",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 1,
          "title": "Number System Fundamentals",
          "tagline": "Year 1 Foundation — Classification, Properties & Prime Testing",
          "estimatedMinutes": 50,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "The number system is the backbone of all quantitative aptitude. This chapter classifies numbers into natural, whole, integer, rational, irrational, prime, and composite — and builds the mental framework needed for every subsequent aptitude topic.",
            "placementRelevance": "Number system classification questions appear in 85%+ of campus placement aptitude tests. Prime testing, unit digit cycles, and digit sum rules are tested directly and as prerequisites for HCF, LCM, and simplification.",
            "realWorldContext": "Binary computing uses base-2 numbers. RSA encryption relies on large prime numbers. Financial systems handle integer and rational arithmetic. Number classification underpins all quantitative engineering work."
          },
          "learningObjectives": [
            "Understand and apply core principles of Number System Fundamentals",
            "Identify the correct problem type and method in Number System Fundamentals",
            "Solve Number System Fundamentals questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Number System Fundamentals"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Natural Numbers (N): Positive counting numbers {1, 2, 3, 4, …}. Do NOT include 0 or negatives.",
              "Whole Numbers (W): Natural numbers plus zero {0, 1, 2, 3, …}.",
              "Integers (Z): All positives, negatives, and zero {…, −3, −2, −1, 0, 1, 2, 3, …}.",
              "Rational Numbers: Any number of form p/q where p, q are integers and q ≠ 0. Includes all terminating and repeating decimals.",
              "Irrational Numbers: Cannot be expressed as p/q. Their decimals are non-terminating AND non-repeating. Examples: √2, √3, π, e.",
              "Real Numbers (R): The complete set — all rational AND irrational numbers.",
              "Prime Numbers: Natural numbers > 1 with exactly 2 factors (1 and itself). Only even prime is 2.",
              "Composite Numbers: Natural numbers > 1 with MORE than 2 factors.",
              "Co-prime Pair: Two numbers whose HCF = 1. Example: 8 and 15.",
              "Perfect Square: Integer whose square root is also an integer. Example: 36 = 6².",
              "Number 1: Neither prime nor composite — it has exactly 1 factor."
            ],
            "theoreticalIntuition": "Numbers form a nested family: N ⊂ W ⊂ Z ⊂ Q ⊂ R. Every prime > 3 is of the form 6k ± 1, but not every 6k ± 1 is prime. Unit digits of powers repeat in cycles of length 1, 2, or 4 depending on the base digit.",
            "visualOrMentalModel": "Draw five concentric circles labelled Natural → Whole → Integer → Rational → Real (innermost to outermost). Irrational numbers sit in the Real ring but outside Rational. When you see √9 = 3 = 3/1, it IS rational. When you see √5 = 2.2360679…, it is NOT rational — it goes in the irrational zone."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Sum of first n natural numbers",
              "formula": "S = n(n+1)/2",
              "variables": "n = last natural number",
              "description": "Compute 1+2+3+…+n instantly.",
              "whenToUse": "Consecutive integer sum problems.",
              "simpleExample": "1 to 100: 100×101/2 = 5050"
            },
            {
              "title": "Sum of squares: 1² + 2² + … + n²",
              "formula": "S = n(n+1)(2n+1)/6",
              "variables": "n = last term",
              "description": "Sum of squared natural numbers.",
              "whenToUse": "Squared consecutive integer problems.",
              "simpleExample": "n=3: 3×4×7/6 = 14 = 1+4+9 ✓"
            },
            {
              "title": "Sum of cubes: 1³ + 2³ + … + n³",
              "formula": "S = [n(n+1)/2]²",
              "variables": "n = last term",
              "description": "Sum of cubed natural numbers equals square of triangle number.",
              "whenToUse": "Cube sum problems.",
              "simpleExample": "n=3: [3×4/2]² = 6² = 36 = 1+8+27 ✓"
            },
            {
              "title": "Primality test upper bound",
              "formula": "Test divisibility by all primes ≤ √N only",
              "variables": "N = candidate number",
              "description": "If N has no prime factor ≤ √N, N is prime.",
              "whenToUse": "Checking if any number is prime.",
              "simpleExample": "N=97: √97≈9.8 → test 2,3,5,7 → none divide 97 → PRIME"
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Every aptitude question involving numbers requires classification first. When you see 51, immediately compute 5+1=6 → divisible by 3 → composite (51 = 3×17). When you see 97, test primes up to √97 ≈ 9.8: try 2, 3, 5, 7 — none divide 97 → prime. This 5-second classification replaces 30 seconds of guessing.",
              "Prime factorization is the key tool underlying HCF, LCM, and factor-counting problems. The Fundamental Theorem of Arithmetic guarantees that every integer > 1 has a unique prime factorization. This uniqueness is why 1 cannot be prime — including 1 as prime would break uniqueness (12 = 2²×3 = 1×2²×3 = 1²×2²×3 = …).",
              "Unit digits of powers follow predictable cycles. The unit digit of 2ⁿ cycles through {2, 4, 8, 6} with period 4. The unit digit of 3ⁿ cycles through {3, 9, 7, 1}. The unit digit of 7ⁿ cycles through {7, 9, 3, 1}. For 4ⁿ: {4, 6} (period 2). For 9ⁿ: {9, 1} (period 2). For 0, 1, 5, 6: unit digit is always the same regardless of the power. To find unit digit of 7^63: 63 mod 4 = 3 → 3rd element of {7,9,3,1} = 3.",
              "Perfect squares have a unit digit restriction: they can ONLY end in 0, 1, 4, 5, 6, or 9. If a number ends in 2, 3, 7, or 8, it is definitively NOT a perfect square — no calculation needed. This eliminates options in MCQs in under 3 seconds."
            ],
            "deepDiveAspects": [
              {
                "title": "Why 1 is Neither Prime Nor Composite",
                "content": "Primes have exactly 2 factors; composites have ≥ 3. The number 1 has exactly 1 factor (itself). It fits neither category. More importantly, if 1 were prime, the Fundamental Theorem of Arithmetic (every integer > 1 has a unique prime factorization) would be violated — you could always insert extra 1s into any factorization."
              },
              {
                "title": "Unit Digit Cycles — Full Reference",
                "content": "Digit 2: cycle {2,4,8,6}, period 4. Digit 3: {3,9,7,1}, period 4. Digit 4: {4,6}, period 2. Digit 7: {7,9,3,1}, period 4. Digit 8: {8,4,2,6}, period 4. Digit 9: {9,1}, period 2. Digits 0,1,5,6: unit digit constant. Method: compute exponent mod period; if remainder=0, use last element of cycle. Example: 2^100: 100 mod 4 = 0 → use 4th element = 6. So unit digit of 2^100 is 6."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Number Classification",
              "description": "Classify numbers as prime, composite, rational, irrational, or perfect square.",
              "exampleSnippet": "Which of these is irrational: √4, √5, 4/9, 0.333…?"
            },
            {
              "typeName": "Unit Digit of Powers",
              "description": "Find the units digit of a large power using cycles.",
              "exampleSnippet": "Find the unit digit of 7^256."
            },
            {
              "typeName": "Counting Primes in a Range",
              "description": "Count prime numbers between two given values.",
              "exampleSnippet": "How many primes between 50 and 80?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-ns-1",
              "title": "Finding Unit Digit of a Large Power",
              "question": "What is the unit digit of 3^74?",
              "givenInfo": [
                "Base = 3",
                "Exponent = 74"
              ],
              "conceptOrFormula": "Unit digit of 3^n follows cycle {3, 9, 7, 1} with period 4.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify cycle for base 3",
                  "explanation": "3¹ ends 3, 3² ends 9, 3³ ends 7, 3⁴ ends 1, 3⁵ ends 3 — cycle {3,9,7,1}, length 4."
                },
                {
                  "stepNumber": 2,
                  "title": "Find position via modulo",
                  "explanation": "74 ÷ 4 = 18 remainder 2. So position = 2nd element of cycle.",
                  "math": "74 \\bmod 4 = 2"
                },
                {
                  "stepNumber": 3,
                  "title": "Read answer",
                  "explanation": "2nd element of {3,9,7,1} = 9. Unit digit of 3^74 is 9."
                }
              ],
              "finalAnswer": "9",
              "whyItWorks": "Power unit digits repeat in fixed-length cycles. Mod finds position without computing the full power.",
              "commonTrap": "If remainder = 0, use the LAST element of the cycle, not the first.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-ns-2",
              "title": "Counting Primes Between 50 and 80",
              "question": "How many prime numbers are there between 50 and 80?",
              "givenInfo": [
                "Range: 51 to 79"
              ],
              "conceptOrFormula": "Test each odd number: check divisibility by primes ≤ √N.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Skip all evens",
                  "explanation": "All even numbers > 2 are composite. Candidates: 51,53,55,57,59,61,63,67,69,71,73,79."
                },
                {
                  "stepNumber": 2,
                  "title": "Test each",
                  "explanation": "51=3×17✗. 53: √53≈7.3, not div 2,3,5,7 → PRIME. 55=5×11✗. 57=3×19✗. 59→PRIME. 61→PRIME. 63=9×7✗. 67→PRIME. 69=3×23✗. 71→PRIME. 73→PRIME. 79→PRIME."
                },
                {
                  "stepNumber": 3,
                  "title": "Count",
                  "explanation": "Primes: 53,59,61,67,71,73,79 → 7 primes."
                }
              ],
              "finalAnswer": "7 (53, 59, 61, 67, 71, 73, 79)",
              "whyItWorks": "Testing divisibility only up to √N is sufficient — any composite N must have a factor ≤ √N.",
              "commonTrap": "Including 51 (=3×17) or 57 (=3×19) which appear prime at first glance.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Number System Speed Techniques",
            "traditionalVsShortcut": {
              "traditionalMethod": "Manually divide by 2, 3, 5, 7… to test primality for each candidate number.",
              "shortcutMethod": "Unit digit cycle (3 seconds per power). Digit sum for composite check (2 seconds). √N limit for primality (under 10 seconds). Together: classify any number in under 15 seconds.",
              "timeSavedPercent": "75%"
            },
            "rulesForApplication": [
              "All primes > 3 are of form 6k±1 — use to filter candidates before testing.",
              "Perfect squares end only in 0,1,4,5,6,9. If unit digit is 2,3,7,8 → instantly NOT a perfect square.",
              "For unit digit of power: (exponent mod period) → index into cycle. If result = 0, use last element."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Treating 1 as prime",
              "whyItHappens": "1 has only 1 factor; primes need exactly 2.",
              "howToAvoid": "Memorize: 1 is neither. Smallest prime = 2."
            },
            {
              "mistake": "Calling repeating decimals irrational",
              "whyItHappens": "0.333… = 1/3, which is rational.",
              "howToAvoid": "Rational = terminating OR repeating decimal. Irrational = non-terminating AND non-repeating."
            },
            {
              "mistake": "Ignoring 2 as the only even prime",
              "whyItHappens": "Students search for primes only among odds.",
              "howToAvoid": "Always include 2 when counting or listing primes."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 40,
            "eliminationTechnique": "Prime/composite MCQs: eliminate 1 (neither), all evens > 2, multiples of 3 using digit sum. Typically reduces to 1 candidate.",
            "questionSelectionAdvice": "Classify first, calculate second. Classification eliminates 2–3 options without any arithmetic.",
            "recruiterInsight": "Number classification is the opening filter in TCS iON, AMCAT, and CoCubes screening tests."
          },
          "quickRevision": {
            "summaryBullets": [
              "N ⊂ W ⊂ Z ⊂ Q ⊂ R. Irrationals ⊂ R but ∉ Q.",
              "1 is neither prime nor composite. Only even prime = 2.",
              "Test primality: check primes up to √N only.",
              "Unit digit cycles: {2,4,8,6}, {3,9,7,1}, {7,9,3,1} — period 4; {4,6},{9,1} — period 2; 0,1,5,6 constant.",
              "Perfect squares end only in 0,1,4,5,6,9."
            ],
            "quickFormulas": [
              "Sum 1–n: n(n+1)/2",
              "Sum squares: n(n+1)(2n+1)/6",
              "Sum cubes: [n(n+1)/2]²"
            ]
          },
          "keyTakeaways": [
            "Number classification (prime/composite/rational/irrational) is the most tested subtopic in number systems.",
            "Unit digit cycles eliminate large-power computation entirely — learn all cycles before your first mock test.",
            "Always test primality by checking divisors up to √N only — this halves the work."
          ],
          "selfCheckQuestions": [
            "Without a calculator, is 127 prime? Show method.",
            "Find the unit digit of 9^99.",
            "Is 0.252525… rational or irrational? Why?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter 1: Number Systems"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Part I: Number Theory and Primes"
            }
          ]
        },
        {
          "id": "y1-quant-divisibility",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 2,
          "title": "Divisibility Rules",
          "tagline": "Year 1 Foundation — Mental Shortcuts for Exact Division Testing",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Divisibility rules are instant mental tests that confirm whether one integer exactly divides another — without performing long division. Mastering rules from 2 to 13 eliminates over 80% of calculation in aptitude option-filtering tasks.",
            "placementRelevance": "Divisibility rules underpin HCF, LCM, simplification, and factor analysis. All major campus placement tests (TCS, Infosys, Wipro, Cognizant) include 2–4 divisibility-based questions either directly or as sub-steps of larger problems.",
            "realWorldContext": "Every programming language uses modulus (%) to check divisibility. Div-by-2 checks odd/even data routing. Div-by-7 is used in calendar algorithms. Div-by-360 or 365 determines angular and calendar cycles. These rules have direct engineering applications."
          },
          "learningObjectives": [
            "Understand and apply core principles of Divisibility Rules",
            "Identify the correct problem type and method in Divisibility Rules",
            "Solve Divisibility Rules questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Divisibility Rules"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Divisibility: A is divisible by B if A ÷ B gives remainder 0. Written B | A.",
              "Factor/Divisor: B is a factor of A if B | A. Example: 6 is a factor of 42.",
              "Multiple: A is a multiple of B if B | A. Example: 42 is a multiple of 6.",
              "Remainder: A = B×Q + R where 0 ≤ R < B. Divisibility holds when R = 0.",
              "Co-prime Component Rule: If gcd(a,b)=1 and N is divisible by both a and b, then N is divisible by a×b."
            ],
            "theoreticalIntuition": "Divisibility rules derive from modular arithmetic. Since 10 ≡ 1 (mod 9), each digit in any base-10 number contributes its face value to the number's residue mod 9 — giving the digit-sum rule. Since 10 ≡ 0 (mod 5), only the units digit determines divisibility by 5. Each rule has a mathematical reason, not just a pattern to memorize.",
            "visualOrMentalModel": "Imagine divisibility as 'equal sharing'. Can 144 students be arranged in exactly 9 equal rows? Compute 1+4+4 = 9 → divisible by 9 → yes, 16 per row. This digit-sum shortcut replaces 144 ÷ 9 entirely and takes under 3 seconds."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Divisibility by 2",
              "formula": "Last digit ∈ {0,2,4,6,8}",
              "variables": "",
              "description": "Number is even if and only if its last digit is even.",
              "whenToUse": "Always — fastest filter.",
              "simpleExample": "3,468: last digit 8 → divisible by 2."
            },
            {
              "title": "Divisibility by 3",
              "formula": "Digit sum ≡ 0 (mod 3)",
              "variables": "",
              "description": "Sum all digits; divisible by 3 iff sum is.",
              "whenToUse": "Quick thirds filter.",
              "simpleExample": "4,521: 4+5+2+1=12 → divisible by 3."
            },
            {
              "title": "Divisibility by 4",
              "formula": "Last two digits form a number divisible by 4",
              "variables": "",
              "description": "Hundreds and higher place values are always divisible by 4.",
              "whenToUse": "Checking fours in large numbers.",
              "simpleExample": "7,836: 36÷4=9 → divisible by 4."
            },
            {
              "title": "Divisibility by 9",
              "formula": "Digit sum ≡ 0 (mod 9)",
              "variables": "",
              "description": "Same as rule for 3 but digit sum must be divisible by 9.",
              "whenToUse": "Ninths and eighteens.",
              "simpleExample": "5,832: 5+8+3+2=18 → divisible by 9."
            },
            {
              "title": "Divisibility by 11",
              "formula": "(Sum of odd-position digits) − (Sum of even-position digits) ≡ 0 (mod 11)",
              "variables": "",
              "description": "Alternating digit sum from rightmost position.",
              "whenToUse": "Large number divisibility by 11.",
              "simpleExample": "29,678: odd-pos from right=8+6+2=16, even-pos=7+9=16. 16-16=0 → divisible by 11."
            },
            {
              "title": "Total Number of Factors",
              "formula": "If N=p^a × q^b × r^c, then #factors = (a+1)(b+1)(c+1)",
              "variables": "",
              "description": "Counts all positive divisors of N including 1 and N.",
              "whenToUse": "Factor count, HCF/LCM prep.",
              "simpleExample": "360=2³×3²×5¹ → (4)(3)(2)=24 factors."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "The rule for 2 is trivially explained: in base 10, every place value above the units (10, 100, 1000, …) is a multiple of 2. So only the units digit contributes to the number's odd/even status. The same logic — powers of 10 divisible by 4 beyond the tens place — explains why only the last two digits determine divisibility by 4, and the last three digits for divisibility by 8.",
              "The digit-sum rules for 3 and 9 arise because 10 ≡ 1 (mod 3) and 10 ≡ 1 (mod 9). This means 10^k ≡ 1 for every positive k in both mod 3 and mod 9. Therefore any number N = d_n×10^n + … + d_1×10 + d_0 has the same remainder as d_n + … + d_1 + d_0 when divided by 3 or 9. This is why digit sums work perfectly for these divisors.",
              "For divisibility by 7, the standard shortcut is: double the units digit, subtract from the number formed by the remaining digits, and repeat until you reach a small number. If that number is 0 or divisible by 7, the original is too. Example: Is 826 divisible by 7? Double 6 = 12. 82 - 12 = 70. 70 ÷ 7 = 10 → yes. (826 = 7×118 ✓). This works because 2×10 ≡ 1 (mod 7), so subtracting the doubled unit digit is equivalent to reducing mod 7.",
              "For composite divisors, split into co-prime factor pairs: div by 6 = div by 2 AND 3; div by 12 = div by 4 AND 3; div by 15 = div by 3 AND 5; div by 18 = div by 2 AND 9; div by 45 = div by 9 AND 5. This decomposition holds ONLY when the two factors are co-prime — you cannot say div by 4 = div by 2 AND 2, since gcd(2,2) ≠ 1."
            ],
            "deepDiveAspects": [
              {
                "title": "Complete Divisibility Rules Reference (2–13)",
                "content": "2: last digit even. 3: digit sum div by 3. 4: last 2 digits div by 4. 5: last digit 0 or 5. 6: div by 2 AND 3. 7: double last digit, subtract from rest, repeat. 8: last 3 digits div by 8. 9: digit sum div by 9. 10: last digit 0. 11: alternating digit sum. 12: div by 4 AND 3. 13: 4× last digit + rest, repeat."
              },
              {
                "title": "Finding Total Factors and Factor-Sum",
                "content": "For N = p^a × q^b: Total factors = (a+1)(b+1). Sum of all factors = [(p^(a+1)−1)/(p−1)] × [(q^(b+1)−1)/(q−1)]. Number of even factors = total factors − odd factors (found by setting all powers of 2 to zero). These formulas are essential for advanced HCF/LCM and number theory placement questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Divisibility Test",
              "description": "Apply rules to check if a large number is divisible by 2–13.",
              "exampleSnippet": "Is 7,623 divisible by both 3 and 11?"
            },
            {
              "typeName": "Missing Digit for Divisibility",
              "description": "Find unknown digit to satisfy a divisibility condition.",
              "exampleSnippet": "4_72 is divisible by 9. What is the missing digit?"
            },
            {
              "typeName": "Factor Count",
              "description": "Use prime factorization to count all factors.",
              "exampleSnippet": "How many factors does 120 have?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-div-1",
              "title": "Finding a Missing Digit for Divisibility by 9",
              "question": "Find digit d such that 5d,832 is divisible by 9.",
              "givenInfo": [
                "Number: 5d832",
                "Condition: divisible by 9"
              ],
              "conceptOrFormula": "Digit sum ≡ 0 (mod 9).",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Sum known digits",
                  "explanation": "5+d+8+3+2 = 18+d",
                  "math": "5+d+8+3+2=18+d"
                },
                {
                  "stepNumber": 2,
                  "title": "Set up condition",
                  "explanation": "18+d must be divisible by 9. Since 18 is already divisible by 9, d must be 0 or 9.",
                  "math": "18+d\\equiv0\\pmod{9}\\implies d=0\\text{ or }d=9"
                },
                {
                  "stepNumber": 3,
                  "title": "Both values are valid single digits",
                  "explanation": "d=0 gives 50,832 (digit sum 18 ✓). d=9 gives 59,832 (digit sum 27 ✓)."
                }
              ],
              "finalAnswer": "d = 0 or d = 9",
              "whyItWorks": "Digit sum rule for 9 is exact. 18 is already a multiple of 9, so adding any multiple of 9 preserves divisibility.",
              "commonTrap": "Assuming only one value of d. Always check if multiple single digits satisfy the equation.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-div-2",
              "title": "Counting Total Factors of 360",
              "question": "How many total factors does 360 have?",
              "givenInfo": [
                "N = 360"
              ],
              "conceptOrFormula": "Total factors = (a+1)(b+1)(c+1) for N = p^a × q^b × r^c.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Prime factorize 360",
                  "explanation": "360 = 8×45 = 2³×3²×5¹",
                  "math": "360=2^3\\times3^2\\times5^1"
                },
                {
                  "stepNumber": 2,
                  "title": "Apply formula",
                  "explanation": "Total factors = (3+1)(2+1)(1+1) = 4×3×2 = 24",
                  "math": "(3+1)(2+1)(1+1)=24"
                },
                {
                  "stepNumber": 3,
                  "title": "Spot verification",
                  "explanation": "Some factors: 1,2,3,4,5,6,8,9,10,12,15,18,20,24,30,36,40,45,60,72,90,120,180,360 → count = 24 ✓"
                }
              ],
              "finalAnswer": "24 total factors",
              "whyItWorks": "The formula counts all combinations of prime power selections from 0 to max exponent for each prime.",
              "commonTrap": "Using exponents directly (3×2×1=6) instead of (exponent+1) — always add 1 to each exponent.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Divisibility Speed Shortcuts",
            "traditionalVsShortcut": {
              "traditionalMethod": "Perform long division for each divisibility check (10–15 seconds per test).",
              "shortcutMethod": "Apply the appropriate digit/ending rule (2–13) for an instant test in under 5 seconds per divisor.",
              "timeSavedPercent": "80%"
            },
            "rulesForApplication": [
              "Div by 6: last digit even AND digit sum divisible by 3 — both conditions simultaneously.",
              "Div by 12: last two digits divisible by 4 AND digit sum divisible by 3.",
              "Div by 8: last THREE digits form a number divisible by 8. Example: 5,832 → 832÷8=104 → yes.",
              "Factor count formula: (a+1)(b+1)(c+1)… — always add 1 to each prime exponent."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Applying rule for 3 to check divisibility by 9",
              "whyItHappens": "Div by 3 does NOT guarantee div by 9 (12 is div by 3 but not 9).",
              "howToAvoid": "For 9: digit sum must be a multiple of 9 specifically."
            },
            {
              "mistake": "Using only last digit for divisibility by 4",
              "whyItHappens": "Divisibility by 4 requires last TWO digits, not one.",
              "howToAvoid": "Take last two digits together. 7,834: 34÷4=8.5 → NOT divisible by 4."
            },
            {
              "mistake": "Forgetting +1 in factor count formula",
              "whyItHappens": "Students use (a)(b)(c) instead of (a+1)(b+1)(c+1).",
              "howToAvoid": "The +1 accounts for the zero-power choice (not including that prime factor). Always add 1."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "For div-by-9 MCQs: compute digit sum of each option in 2 seconds. Eliminate any whose digit sum is not a multiple of 9.",
            "questionSelectionAdvice": "Memorize all rules 2–13. 30%+ of quantitative aptitude questions implicitly use a divisibility check as a first step.",
            "recruiterInsight": "TCS NQT, Infosys Intellect, and Wipro Elite NTH each include 2–4 divisibility questions. Speed of mental application separates top scorers."
          },
          "quickRevision": {
            "summaryBullets": [
              "2: last digit even. 3/9: digit sum. 4: last 2 digits. 5: last digit 0/5. 8: last 3 digits. 11: alternating digit sum.",
              "Composite rule: check co-prime components separately (6=2×3, 12=4×3, 15=3×5).",
              "Total factors = (a+1)(b+1)(c+1)… — never forget the +1.",
              "Missing digit: set digit sum = nearest multiple of divisor and solve for unknown."
            ],
            "quickFormulas": [
              "Total factors: (a+1)(b+1)(c+1)",
              "Div by 9: digit sum mod 9 = 0",
              "Div by 11: |odd-pos sum − even-pos sum| mod 11 = 0"
            ]
          },
          "keyTakeaways": [
            "Divisibility rules 2–13 save 80% of computation time — learn them all before any placement test.",
            "The factor count formula (a+1)(b+1)… is foundational for HCF, LCM, and number theory.",
            "Composite divisor rules (6, 12, 15, 18, 45) are derived from co-prime pairs — understand the reason, not just the rule."
          ],
          "selfCheckQuestions": [
            "Without dividing, is 123,456 divisible by 9? Show digit sum.",
            "How many factors does 240 have?",
            "Write divisibility rules for 2,3,4,5,6,8,9,10,11 from memory."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Divisibility Rules and Factor Analysis"
            },
            {
              "sourceName": "NCERT Mathematics Class 6",
              "sourceType": "Reference",
              "referenceNote": "Chapter 3: Playing with Numbers"
            }
          ]
        },
        {
          "id": "y1-quant-hcf-lcm",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 3,
          "title": "HCF and LCM Fundamentals",
          "tagline": "Year 1 Foundation — Greatest Common Factor & Least Common Multiple",
          "estimatedMinutes": 55,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "HCF (Highest Common Factor) and LCM (Least Common Multiple) are two of the most important operations in elementary number theory. They model real-world problems of equal division, scheduling, tiling, and concurrent events. Every placement aptitude paper includes at least 2–3 direct HCF/LCM questions.",
            "placementRelevance": "TCS, Infosys, and Wipro consistently test HCF/LCM directly and embed it in work/time, distance/time, and fraction problems. The fundamental identity HCF×LCM = A×B is the fastest tool for finding missing values.",
            "realWorldContext": "Operating systems use LCM for scheduling CPU tasks at equal intervals. Network protocols use HCF to align data packet sizes. Civil engineers use HCF to cut materials into maximum equal-sized pieces. LCM governs synchronization of repeating processes."
          },
          "learningObjectives": [
            "Understand and apply core principles of HCF and LCM Fundamentals",
            "Identify the correct problem type and method in HCF and LCM Fundamentals",
            "Solve HCF and LCM Fundamentals questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in HCF and LCM Fundamentals"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "HCF (Highest Common Factor): The largest integer that divides two or more given numbers exactly. Also called GCD (Greatest Common Divisor). HCF(12, 18) = 6.",
              "LCM (Least Common Multiple): The smallest positive integer that is divisible by two or more given numbers. LCM(4, 6) = 12.",
              "Key Identity: HCF(A,B) × LCM(A,B) = A × B — fundamental for solving problems when 3 of the 4 values are known.",
              "Co-prime numbers: HCF = 1, so LCM = A × B.",
              "HCF ≤ min(A,B) and LCM ≥ max(A,B) — use these inequalities to eliminate impossible options."
            ],
            "theoreticalIntuition": "HCF answers: 'What is the largest equal unit I can cut both A and B into?' LCM answers: 'What is the smallest time when both periodic events A and B coincide?' These framings make problem identification instant: equal distribution/cutting → HCF; scheduling/cycling → LCM.",
            "visualOrMentalModel": "HCF = intersection of prime factor sets (minimum exponents of COMMON primes). LCM = union of prime factor sets (maximum exponents of ALL primes). Visualize: HCF(36,48): 36=2²×3², 48=2⁴×3 → common primes are 2 and 3 → take min powers: HCF=2²×3=12. LCM: take max powers: 2⁴×3²=144."
          },
          "importantRulesAndFormulas": [
            {
              "title": "HCF × LCM = A × B",
              "formula": "HCF(A,B) × LCM(A,B) = A × B",
              "variables": "A, B = the two numbers",
              "description": "Fundamental identity — works for exactly TWO numbers only.",
              "whenToUse": "When 3 of the 4 quantities are known.",
              "simpleExample": "HCF=6, LCM=36, A=12 → B=6×36/12=18."
            },
            {
              "title": "HCF by Prime Factorization",
              "formula": "HCF = product of LOWEST powers of COMMON prime factors",
              "variables": "",
              "description": "Factorize both numbers, take minimum exponent of each shared prime.",
              "whenToUse": "Standard HCF calculation method.",
              "simpleExample": "HCF(36,48): 36=2²×3², 48=2⁴×3¹. Common: 2(min 2,4)=2², 3(min 2,1)=3¹. HCF=4×3=12."
            },
            {
              "title": "LCM by Prime Factorization",
              "formula": "LCM = product of HIGHEST powers of ALL prime factors",
              "variables": "",
              "description": "Collect all primes from both numbers with maximum exponent.",
              "whenToUse": "Standard LCM calculation method.",
              "simpleExample": "LCM(36,48): primes 2(max 4)=2⁴, 3(max 2)=3². LCM=16×9=144."
            },
            {
              "title": "HCF by Euclidean Algorithm",
              "formula": "HCF(A,B) = HCF(B, A mod B), repeat until remainder=0",
              "variables": "",
              "description": "Efficient for large numbers. Last non-zero remainder is HCF.",
              "whenToUse": "Large numbers where factorization is slow.",
              "simpleExample": "HCF(252,105): 252=2×105+42 → HCF(105,42): 105=2×42+21 → HCF(42,21): 42=2×21+0 → HCF=21."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "HCF finds the maximum equal unit. If you want to cut a 48 m rope and a 36 m rope into the largest possible equal pieces with no leftover, each piece must be HCF(48, 36) = 12 m, giving 4 pieces from the first and 3 from the second — 7 total, zero waste. The HCF is the 'common measure' that divides both quantities perfectly.",
              "LCM finds the minimum common cycle. If Bus A departs every 12 minutes and Bus B every 18 minutes, and both depart at 9:00 AM, they next depart together after LCM(12, 18) = 36 minutes — at 9:36 AM. LCM is the 'first point of synchronization' of two or more repeating events.",
              "The product formula HCF×LCM = A×B is the most powerful shortcut in this chapter. When any three of the four quantities are known, substitute and solve for the fourth in a single step. Many placement questions give HCF and LCM and ask for a second number given the first — do not factorize; use the formula directly.",
              "For three or more numbers: HCF(A,B,C) = HCF(HCF(A,B), C) and LCM(A,B,C) = LCM(LCM(A,B), C). The product formula CANNOT be extended to three numbers — it strictly applies to pairs only."
            ],
            "deepDiveAspects": [
              {
                "title": "Euclidean Algorithm — Mathematical Basis",
                "content": "The algorithm uses the fact that HCF(A,B) = HCF(B, A mod B). This holds because any common divisor of A and B must also divide A − B, A − 2B, …, and ultimately A mod B (which is A minus some multiple of B). Repeated application reduces the problem until one value becomes 0, at which point the other equals the HCF. For HCF(1071, 462): 1071=2×462+147 → HCF(462,147): 462=3×147+21 → HCF(147,21): 147=7×21+0 → HCF=21."
              },
              {
                "title": "HCF/LCM Problem Type Recognition Guide",
                "content": "Type 1 — Equal distribution/Maximum equal piece: HCF. Example: 'Largest tiles to cover floor without cutting'. Type 2 — Scheduling/When do they meet again: LCM. Example: 'When do three bells ring together'. Type 3 — 'Largest number that divides A, B, C leaving same remainder R': HCF(A−R, B−R, C−R). Type 4 — 'Smallest number divisible by A and B': LCM. Type 5 — 'Smallest number that when divided by A and B leaves remainder R': LCM(A,B)+R."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Equal Distribution (HCF)",
              "description": "Find maximum equal-size groups from two or more quantities.",
              "exampleSnippet": "Two pieces of ribbon 48m and 36m — find maximum equal piece length."
            },
            {
              "typeName": "Scheduling (LCM)",
              "description": "Find when two or more periodic events first coincide.",
              "exampleSnippet": "Bells ring every 4, 6, 9 minutes — when do they ring together?"
            },
            {
              "typeName": "Missing Number via Product Formula",
              "description": "Use HCF×LCM=A×B to find an unknown.",
              "exampleSnippet": "HCF=11, LCM=693, one number=77. Find the other."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-hcf-1",
              "title": "Finding Missing Number Using HCF×LCM = A×B",
              "question": "The HCF of two numbers is 11 and their LCM is 693. If one number is 77, find the other.",
              "givenInfo": [
                "HCF = 11",
                "LCM = 693",
                "First number A = 77"
              ],
              "conceptOrFormula": "HCF×LCM = A×B → B = (HCF×LCM)/A",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Apply product formula",
                  "explanation": "A×B = HCF×LCM = 11×693 = 7,623",
                  "math": "11\\times693=7623"
                },
                {
                  "stepNumber": 2,
                  "title": "Find B",
                  "explanation": "B = 7,623 ÷ 77 = 99",
                  "math": "B=\\frac{7623}{77}=99"
                },
                {
                  "stepNumber": 3,
                  "title": "Verify",
                  "explanation": "77=7×11, 99=9×11. HCF=11 ✓. LCM=7×9×11=693 ✓"
                }
              ],
              "finalAnswer": "99",
              "whyItWorks": "The product formula is the fastest route when 3 of the 4 values (HCF, LCM, A, B) are known.",
              "commonTrap": "Manually finding LCM instead of using the formula — wastes 40+ seconds.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-hcf-2",
              "title": "Three Bells Ringing Together — LCM Application",
              "question": "Three bells ring at intervals of 12, 15, and 20 minutes. If they all ring together at 6:00 AM, when do they next ring together?",
              "givenInfo": [
                "Intervals: 12, 15, 20 minutes",
                "Start: 6:00 AM"
              ],
              "conceptOrFormula": "Next simultaneous ring = after LCM(12, 15, 20) minutes.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Prime factorize each",
                  "explanation": "12=2²×3, 15=3×5, 20=2²×5",
                  "math": "12=2^2\\times3,\\;15=3\\times5,\\;20=2^2\\times5"
                },
                {
                  "stepNumber": 2,
                  "title": "LCM = max power of each prime",
                  "explanation": "LCM = 2²×3×5 = 4×3×5 = 60 minutes",
                  "math": "LCM=2^2\\times3\\times5=60"
                },
                {
                  "stepNumber": 3,
                  "title": "Calculate time",
                  "explanation": "60 minutes after 6:00 AM = 7:00 AM"
                }
              ],
              "finalAnswer": "7:00 AM",
              "whyItWorks": "LCM gives the minimum time that is a multiple of all three intervals — the first simultaneous occurrence.",
              "commonTrap": "Adding intervals (12+15+20=47) or multiplying them instead of computing LCM.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "HCF and LCM Speed Methods",
            "traditionalVsShortcut": {
              "traditionalMethod": "List all factors of each number and pick the greatest common one (slow for large numbers).",
              "shortcutMethod": "Euclidean algorithm for HCF (4–6 steps). Product formula HCF×LCM=A×B to find missing values instantly.",
              "timeSavedPercent": "70%"
            },
            "rulesForApplication": [
              "Co-prime numbers: HCF=1, so LCM = A×B directly.",
              "Product formula works ONLY for TWO numbers — do not use for three.",
              "Smallest number divisible by A and B leaving remainder R: LCM(A,B) + R.",
              "HCF(A,B,C) = HCF(HCF(A,B), C) — compute iteratively."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Extending product formula to 3 numbers",
              "whyItHappens": "HCF×LCM = A×B strictly holds for TWO numbers only.",
              "howToAvoid": "For 3 numbers, find HCF or LCM step by step: HCF(HCF(A,B),C)."
            },
            {
              "mistake": "Confusing HCF and LCM problem types",
              "whyItHappens": "Applying LCM where HCF is needed.",
              "howToAvoid": "Equal cutting/maximum divisor → HCF. Scheduling/minimum common cycle → LCM."
            },
            {
              "mistake": "Euclidean algorithm in wrong direction",
              "whyItHappens": "Dividing smaller by larger in the first step.",
              "howToAvoid": "Always divide LARGER by SMALLER. HCF(A,B) where A>B: compute A mod B, then HCF(B, A mod B)."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 55,
            "eliminationTechnique": "HCF MCQs: answer must divide both given numbers. LCM MCQs: answer must be divisible by both. These filters instantly eliminate 2–3 options.",
            "questionSelectionAdvice": "Identify problem type first (equal cutting → HCF; scheduling → LCM). Then choose Euclidean algorithm or product formula depending on what information is given.",
            "recruiterInsight": "HCF/LCM is tested in TCS NQT, Infosys Intellect, and Cognizant GenC aptitude rounds. It also appears embedded in work/time and pipes problems."
          },
          "quickRevision": {
            "summaryBullets": [
              "HCF = largest common divisor (equal cutting). LCM = smallest common multiple (scheduling).",
              "HCF×LCM = A×B — works for TWO numbers only.",
              "HCF: min powers of common primes. LCM: max powers of all primes.",
              "Euclidean: HCF(A,B)=HCF(B, A mod B) — fastest for large numbers.",
              "Smallest N leaving remainder R when divided by A and B: LCM(A,B)+R."
            ],
            "quickFormulas": [
              "HCF×LCM=A×B",
              "LCM(A,B,C)=LCM(LCM(A,B),C)",
              "Smallest N divisible by A,B leaving R: LCM(A,B)+R"
            ]
          },
          "keyTakeaways": [
            "The product formula HCF×LCM=A×B is the single most useful shortcut in this chapter.",
            "Always identify problem type first: equal cutting → HCF; cycling/scheduling → LCM.",
            "The Euclidean algorithm handles any size numbers in 4–6 steps — practise until it is reflexive."
          ],
          "selfCheckQuestions": [
            "Find HCF(252,105) using Euclidean algorithm. Show every step.",
            "Two lights blink every 8 and 12 seconds. When do they next blink together?",
            "HCF of 24 and 36 is 12. Find LCM using the formula only."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: HCF and LCM"
            },
            {
              "sourceName": "Schaum's Discrete Mathematics",
              "sourceType": "Reference",
              "referenceNote": "Chapter on Number Theory — Euclidean Algorithm"
            }
          ]
        },
        {
          "id": "y1-quant-fractions-decimals",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 4,
          "title": "Fractions and Decimals",
          "tagline": "Year 1 Foundation — Operations, Comparisons & Conversions",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Fractions and decimals are the numerical language of proportional reasoning. From splitting a bill to calculating percentage changes, fractions underpin almost every quantitative aptitude topic. This chapter builds fluency in fraction arithmetic, comparison, and decimal conversion.",
            "placementRelevance": "Fraction operations appear in ratio, proportion, percentage, profit/loss, and simple interest problems. Conversion between fractions and decimals is tested directly in simplification sections of TCS, Infosys, and Wipro assessments.",
            "realWorldContext": "Engineering tolerances are expressed as decimals. Probability values are fractions. Recipe scaling, material ratios, and financial division all use fraction arithmetic. Decimals are the standard output format in all computational results."
          },
          "learningObjectives": [
            "Understand and apply core principles of Fractions and Decimals",
            "Identify the correct problem type and method in Fractions and Decimals",
            "Solve Fractions and Decimals questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Fractions and Decimals"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Fraction: An expression p/q where p = numerator (top), q = denominator (bottom), q ≠ 0.",
              "Proper Fraction: |numerator| < |denominator|. Example: 3/7.",
              "Improper Fraction: |numerator| ≥ |denominator|. Example: 9/4.",
              "Mixed Number: Whole number plus proper fraction. Example: 2¼ = 9/4.",
              "Equivalent Fractions: Fractions with same value. 1/2 = 2/4 = 3/6 = 50/100.",
              "Decimal: A fraction whose denominator is a power of 10. 3.75 = 375/100 = 15/4.",
              "Terminating Decimal: Ends after finite digits. Example: 3/4 = 0.75.",
              "Recurring Decimal: Repeats infinitely. Example: 1/3 = 0.333…, 1/7 = 0.142857142857…"
            ],
            "theoreticalIntuition": "Every fraction p/q converts to a decimal by dividing p by q. The decimal terminates if and only if the denominator (in lowest terms) has only 2 and 5 as prime factors. Otherwise it recurs. This single rule tells you instantly whether a fraction gives a clean decimal — crucial for mental arithmetic.",
            "visualOrMentalModel": "Visualize fractions as slices of a pie. 3/4 means the pie is cut into 4 equal slices and you take 3. To compare 3/7 and 4/9: cross-multiply: 3×9=27 vs 4×7=28. Since 27<28, we have 3/7 < 4/9. To add fractions: align denominators first, then add numerators."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Fraction Addition/Subtraction",
              "formula": "a/b ± c/d = (ad ± bc)/bd",
              "variables": "",
              "description": "Convert to common denominator before adding or subtracting.",
              "whenToUse": "Adding or subtracting unlike fractions.",
              "simpleExample": "1/3 + 1/4 = (4+3)/12 = 7/12."
            },
            {
              "title": "Fraction Multiplication",
              "formula": "a/b × c/d = ac/bd",
              "variables": "",
              "description": "Multiply numerators together and denominators together.",
              "whenToUse": "Finding fractions of fractions.",
              "simpleExample": "2/3 × 3/4 = 6/12 = 1/2."
            },
            {
              "title": "Fraction Division",
              "formula": "a/b ÷ c/d = a/b × d/c = ad/bc",
              "variables": "",
              "description": "Flip the second fraction (reciprocal) and multiply.",
              "whenToUse": "Dividing fractions.",
              "simpleExample": "3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2."
            },
            {
              "title": "Fraction to Decimal",
              "formula": "p/q → divide p by q",
              "variables": "",
              "description": "If denominator has only factors 2 and 5, decimal terminates; otherwise it recurs.",
              "whenToUse": "Converting for comparison or computation.",
              "simpleExample": "7/8 = 0.875 (terminates since 8=2³). 1/3 = 0.333… (recurs since 3 is neither 2 nor 5)."
            },
            {
              "title": "Comparing Fractions (Cross Multiplication)",
              "formula": "a/b vs c/d: compare ad vs bc",
              "variables": "",
              "description": "Cross multiply to compare without converting to decimals.",
              "whenToUse": "Fast fraction comparison.",
              "simpleExample": "5/8 vs 7/11: 5×11=55 vs 7×8=56. 55<56 → 5/8 < 7/11."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "To add or subtract fractions, the first step is finding the LCM of the denominators — the Least Common Denominator (LCD). Convert each fraction to an equivalent form with the LCD as denominator, then add or subtract numerators. The result may need simplification by dividing numerator and denominator by their HCF.",
              "Comparing fractions without converting to decimals: use the cross-multiplication method. For a/b vs c/d, compute a×d and b×c. If a×d > b×c, then a/b > c/d. This avoids decimal computation entirely. Example: 5/8 vs 7/11: cross products are 55 and 56. Since 55<56, we get 5/8 < 7/11.",
              "Reciprocal and division: the reciprocal of p/q is q/p. Dividing by a fraction is multiplying by its reciprocal. Dividing by 3/4 is multiplying by 4/3. This is because (p/q) ÷ (r/s) = (p/q) × (s/r). Memorize: keep-change-flip (keep first fraction, change ÷ to ×, flip second fraction).",
              "Decimal to fraction conversion: terminate at the rightmost digit. 0.375 = 375/1000. Simplify by dividing both by HCF: HCF(375,1000) = 125. So 375/1000 = 3/8. For recurring: 0.333… = x → 10x = 3.333… → 10x − x = 3 → x = 3/9 = 1/3. This algebraic method handles all recurring decimals."
            ],
            "deepDiveAspects": [
              {
                "title": "Converting Recurring Decimals to Fractions",
                "content": "For 0.abcabc… (period 3): multiply by 10³=1000, subtract original: 999×x = abc → x = abc/999. Example: 0.142857142857…: period 6, so multiply by 10⁶: 999999x = 142857 → x = 142857/999999 = 1/7. This confirms 1/7 = 0.142857̄."
              },
              {
                "title": "Fractions in Placement Word Problems",
                "content": "Word problems use fractions in phrases like: 'two-thirds of the total', 'one-fourth more than', 'ratio of 3:5'. Translate each phrase directly: 'two-thirds of 360' = (2/3)×360 = 240. 'One-fourth more than 80' = 80 + 80/4 = 80 + 20 = 100. 'Ratio 3:5 out of total 160' = 3/(3+5)×160 = 60 and 5/8×160=100."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Fraction Simplification",
              "description": "Reduce fractions to lowest terms using HCF.",
              "exampleSnippet": "Simplify 72/96: HCF=24. Answer: 3/4."
            },
            {
              "typeName": "Fraction Comparison",
              "description": "Order multiple fractions from least to greatest.",
              "exampleSnippet": "Arrange 3/5, 5/8, 7/11 in ascending order."
            },
            {
              "typeName": "Mixed Number Arithmetic",
              "description": "Add/subtract/multiply mixed numbers.",
              "exampleSnippet": "2⅓ + 1¾ = ?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-frac-1",
              "title": "Adding Unlike Fractions",
              "question": "Calculate 3/4 + 5/6.",
              "givenInfo": [
                "Fraction 1 = 3/4",
                "Fraction 2 = 5/6"
              ],
              "conceptOrFormula": "a/b + c/d = (ad + bc)/bd",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Find LCM of 4 and 6",
                  "explanation": "LCM(4,6) = 12",
                  "math": "LCM(4,6)=12"
                },
                {
                  "stepNumber": 2,
                  "title": "Convert to equivalent fractions",
                  "explanation": "3/4 = 9/12, 5/6 = 10/12",
                  "math": "\\frac{3}{4}=\\frac{9}{12},\\quad\\frac{5}{6}=\\frac{10}{12}"
                },
                {
                  "stepNumber": 3,
                  "title": "Add numerators",
                  "explanation": "9/12 + 10/12 = 19/12 = 1 7/12",
                  "math": "\\frac{9+10}{12}=\\frac{19}{12}"
                }
              ],
              "finalAnswer": "19/12 = 1 7/12",
              "whyItWorks": "Common denominator aligns the fractional units so numerators can be added directly.",
              "commonTrap": "Adding denominators (4+6=10) — NEVER add denominators. Only numerators are added after finding a common denominator.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-frac-2",
              "title": "Converting Recurring Decimal to Fraction",
              "question": "Express 0.272727… as a fraction in lowest terms.",
              "givenInfo": [
                "Decimal: 0.272727… (period 2)"
              ],
              "conceptOrFormula": "For repeating block of n digits: multiply by 10ⁿ, subtract original.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Let x = 0.272727…",
                  "explanation": "x = 0.272727…",
                  "math": "x=0.\\overline{27}"
                },
                {
                  "stepNumber": 2,
                  "title": "Multiply by 100 (period = 2)",
                  "explanation": "100x = 27.272727…",
                  "math": "100x=27.\\overline{27}"
                },
                {
                  "stepNumber": 3,
                  "title": "Subtract original",
                  "explanation": "100x − x = 27 → 99x = 27 → x = 27/99 = 3/11",
                  "math": "99x=27\\implies x=\\frac{27}{99}=\\frac{3}{11}"
                }
              ],
              "finalAnswer": "3/11",
              "whyItWorks": "Multiplying by 10^(period length) shifts decimal so subtraction eliminates the repeating part.",
              "commonTrap": "Using 10 instead of 100 (period length is 2, not 1).",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Fraction Speed Techniques",
            "traditionalVsShortcut": {
              "traditionalMethod": "Convert all fractions to decimals before comparing or operating (time-consuming, error-prone).",
              "shortcutMethod": "Cross-multiply for comparison. Cancel common factors before multiplying. Use LCM denominator only when adding/subtracting.",
              "timeSavedPercent": "65%"
            },
            "rulesForApplication": [
              "Cancel common factors BEFORE multiplying: (3/4)×(8/9) → cancel 3 and 9 (÷3) and 4 and 8 (÷4) → (1/1)×(2/3) = 2/3. Much faster than 24/36=2/3.",
              "For recurring decimal to fraction: denominator = string of 9s of length equal to repeating period. 0.abcabc… = abc/999.",
              "Comparing many fractions: cross-multiply pairwise or convert to decimal only the 'borderline' candidates."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Adding denominators instead of numerators",
              "whyItHappens": "Students write a/b + c/d = (a+c)/(b+d).",
              "howToAvoid": "Find LCM of denominators, convert, then add ONLY numerators."
            },
            {
              "mistake": "Not simplifying before multiplying",
              "whyItHappens": "Working with large numbers increases error risk.",
              "howToAvoid": "Cancel common factors between any numerator and any denominator before multiplying."
            },
            {
              "mistake": "Confusing terminating vs recurring",
              "whyItHappens": "Forgetting the denominator rule.",
              "howToAvoid": "Fraction terminates iff denominator (in lowest terms) has only 2s and 5s as prime factors."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 40,
            "eliminationTechnique": "For comparison MCQs: cross-multiply the two borderline fractions. Eliminate obviously large or small fractions first.",
            "questionSelectionAdvice": "Simplify fractions before any operation. Use cross-multiplication for comparison. Recognize recurring decimal patterns by checking denominator's prime factors.",
            "recruiterInsight": "Fraction operations are foundational for TCS simplification sections and Wipro quantitative aptitude — expect 2–3 direct questions."
          },
          "quickRevision": {
            "summaryBullets": [
              "Proper fraction: |num|<|den|. Improper: |num|≥|den|. Mixed: whole + proper.",
              "Add/subtract: find LCM of denominators, then add numerators only.",
              "Multiply: cancel common factors first, then multiply straight across.",
              "Divide: keep first, multiply by reciprocal of second.",
              "Recurring decimal → fraction: 0.abc… (period n) = abc/999…9 (n nines)."
            ],
            "quickFormulas": [
              "a/b + c/d = (ad+bc)/bd",
              "a/b ÷ c/d = ad/bc",
              "0.ā̄b̄c̄ (period 3) = abc/999"
            ]
          },
          "keyTakeaways": [
            "Cancellation before multiplication prevents arithmetic with large numbers — always look for common factors first.",
            "Cross multiplication is the fastest fraction comparison tool — no decimal conversion needed.",
            "Recurring decimal to fraction: denominator is n nines where n is the period length."
          ],
          "selfCheckQuestions": [
            "Simplify 84/126 to lowest terms.",
            "Which is larger: 11/15 or 13/18? Use cross multiplication.",
            "Convert 0.363636… to a fraction."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Fractions and Decimals"
            },
            {
              "sourceName": "NCERT Mathematics Class 7",
              "sourceType": "Reference",
              "referenceNote": "Chapter 2: Fractions and Decimals"
            }
          ]
        },
        {
          "id": "y1-quant-simplification",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 5,
          "title": "Simplification & BODMAS/PEMDAS",
          "tagline": "Year 1 Foundation — Simplification & BODMAS/PEMDAS from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Simplification is the art of reducing a complex arithmetic expression to a single number using the correct order of operations. BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction) — also known as PEMDAS — is the universal rule that prevents ambiguity. Without BODMAS, the expression 2 + 3 × 4 could be interpreted as 20 or 14; BODMAS mandates 14.",
            "placementRelevance": "Simplification questions are guaranteed in every placement aptitude test. TCS NQT, Infosys, Wipro, and Accenture all include 3–5 direct simplification problems. Speed and accuracy in BODMAS determines your score ceiling.",
            "realWorldContext": "Every calculator, spreadsheet, and programming language follows BODMAS/PEMDAS internally. Excel formulas, SQL expressions, and Python arithmetic all rely on this order. Financial modelling and engineering calculations require strict operator precedence."
          },
          "learningObjectives": [
            "Apply BODMAS/PEMDAS order correctly to multi-operation expressions",
            "Simplify expressions involving nested brackets, fractions, and decimals",
            "Use approximation to quickly estimate answers for option elimination",
            "Avoid sign errors and bracket-expansion mistakes under time pressure"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic (addition, subtraction, multiplication, division)",
              "Fractions and decimals"
            ],
            "quickRefresher": "Review multiplication tables 1–20, fraction addition/subtraction with LCM, and decimal-to-fraction conversions."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "BODMAS: Brackets → Orders (powers/roots) → Division & Multiplication (left to right) → Addition & Subtraction (left to right).",
              "Brackets hierarchy: Vinculum (bar) → Parentheses () → Braces {} → Square brackets [].",
              "Of means multiplication: '½ of 36' = ½ × 36 = 18.",
              "Division and Multiplication have EQUAL precedence — evaluate LEFT to RIGHT, not D before M.",
              "Addition and Subtraction have EQUAL precedence — evaluate LEFT to RIGHT, not A before S."
            ],
            "theoreticalIntuition": "BODMAS is not an arbitrary convention — it ensures mathematical consistency. Multiplication distributes over addition (a × (b+c) = ab + ac), so multiplication must bind tighter than addition. Powers distribute over multiplication similarly, so they come first. The brackets override everything because they explicitly group operations.",
            "visualOrMentalModel": "Think of BODMAS as a priority queue: Brackets have the highest priority (process first), then Orders, then Div/Mul (same level — go left to right), then Add/Sub (same level — go left to right). Mark each operation with its priority level, then execute from highest to lowest."
          },
          "importantRulesAndFormulas": [
            {
              "title": "BODMAS Order",
              "formula": "B → O → D/M (left→right) → A/S (left→right)",
              "variables": "B=Brackets, O=Orders, D=Division, M=Multiplication, A=Addition, S=Subtraction",
              "description": "The universal operator precedence rule for arithmetic.",
              "whenToUse": "Every simplification problem.",
              "simpleExample": "8 + 2 × 5 = 8 + 10 = 18 (NOT 50)"
            },
            {
              "title": "'Of' means multiply",
              "formula": "'of' = ×",
              "description": "'Of' in expressions means multiplication and has the same precedence as × and ÷.",
              "whenToUse": "Expressions like '¼ of 80'.",
              "simpleExample": "¼ of 80 = ¼ × 80 = 20"
            },
            {
              "title": "Nested brackets — inside out",
              "formula": "Evaluate innermost bracket first, then work outward",
              "description": "Vinculum (bar) → () → {} → []",
              "whenToUse": "Complex expressions with multiple bracket layers.",
              "simpleExample": "[10 + {5 × (3+2)}] = [10 + {5×5}] = [10+25] = 35"
            },
            {
              "title": "Fraction simplification shortcut",
              "formula": "Cancel common factors before multiplying",
              "description": "Reduce fractions early to avoid large numbers.",
              "whenToUse": "Products of fractions.",
              "simpleExample": "(12/15) × (25/36) → cancel 12&36 (÷12), 15&25 (÷5) → (1/1.25)×(5/3) = 5/9"
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "The most common error in simplification is evaluating left to right without respecting operator precedence. Consider 12 ÷ 4 × 3: many students compute 12 ÷ 12 = 1, but since ÷ and × have equal precedence, we go left to right: 12 ÷ 4 = 3, then 3 × 3 = 9.",
              "When 'of' appears in an expression, treat it as multiplication. For example: ½ of 36 + 8 = 18 + 8 = 26. The 'of' binds to its operands before addition.",
              "For expressions with nested brackets, always start from the innermost bracket and work outward. In [{(2+3) × 4} - 5], first compute (2+3)=5, then {5×4}=20, then [20-5]=15.",
              "Approximation is your secret weapon in MCQ tests. If the expression evaluates to roughly 47 and the options are 23, 35, 47, 61 — pick 47 without computing the exact value. Round difficult decimals to nearby integers for quick estimation."
            ],
            "deepDiveAspects": [
              {
                "title": "Why D/M and A/S Are Same-Level",
                "content": "Division is multiplication by the reciprocal (a÷b = a×(1/b)), and subtraction is addition of the negative (a−b = a+(−b)). Since they are inverse operations of each other, they must have the same precedence. The left-to-right rule resolves ties."
              },
              {
                "title": "Vinculum (Bar) — The Forgotten Bracket",
                "content": "A vinculum is a horizontal bar over a group of terms, acting as an implicit bracket. In the expression 5 + (12 − 3̄+1̄), the bar groups 3+1 first: 5 + (12 − 4) = 5 + 8 = 13. Vinculums appear in some aptitude tests as fraction bars: everything above the bar is one group, everything below is another."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Pure BODMAS",
              "description": "Simplify using correct order of operations.",
              "exampleSnippet": "15 + 5 × 3 − 8 ÷ 2 = ?"
            },
            {
              "typeName": "Fraction chains",
              "description": "Simplify products or sums of multiple fractions.",
              "exampleSnippet": "(3/4) × (8/9) × (15/16) = ?"
            },
            {
              "typeName": "Nested brackets",
              "description": "Expressions with (), {}, [].",
              "exampleSnippet": "[50 − {20 + (8 − 3)}] = ?"
            },
            {
              "typeName": "Decimal simplification",
              "description": "Simplify expressions involving decimals.",
              "exampleSnippet": "0.5 × 0.4 + 0.3 × 0.2 = ?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-simp-1",
              "title": "Basic BODMAS Application",
              "question": "Simplify: 18 + 12 ÷ 3 × 2 − 5",
              "givenInfo": [
                "Expression: 18 + 12 ÷ 3 × 2 − 5"
              ],
              "conceptOrFormula": "BODMAS: Division and Multiplication before Addition and Subtraction (left to right).",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Division first (left to right)",
                  "explanation": "12 ÷ 3 = 4. Expression becomes: 18 + 4 × 2 − 5",
                  "math": "12 ÷ 3 = 4"
                },
                {
                  "stepNumber": 2,
                  "title": "Multiplication next",
                  "explanation": "4 × 2 = 8. Expression becomes: 18 + 8 − 5",
                  "math": "4 × 2 = 8"
                },
                {
                  "stepNumber": 3,
                  "title": "Addition and Subtraction (left to right)",
                  "explanation": "18 + 8 = 26, then 26 − 5 = 21.",
                  "math": "18 + 8 − 5 = 21"
                }
              ],
              "finalAnswer": "21",
              "whyItWorks": "Division binds before addition, and multiplication binds before subtraction. Left-to-right within same precedence level.",
              "commonTrap": "Computing 18+12=30 first (ignoring BODMAS) gives 30÷3×2−5 = 15, which is wrong.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-simp-2",
              "title": "Nested Brackets",
              "question": "Simplify: [48 − {18 + (6 − 2)}]",
              "givenInfo": [
                "Expression with nested brackets: [], {}, ()"
              ],
              "conceptOrFormula": "Evaluate innermost bracket first, work outward.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Innermost bracket ()",
                  "explanation": "(6 − 2) = 4. Expression: [48 − {18 + 4}]",
                  "math": "(6 − 2) = 4"
                },
                {
                  "stepNumber": 2,
                  "title": "Braces {}",
                  "explanation": "{18 + 4} = 22. Expression: [48 − 22]",
                  "math": "{18 + 4} = 22"
                },
                {
                  "stepNumber": 3,
                  "title": "Square brackets []",
                  "explanation": "[48 − 22] = 26.",
                  "math": "48 − 22 = 26"
                }
              ],
              "finalAnswer": "26",
              "whyItWorks": "Inside-out evaluation ensures every operation respects its containing scope.",
              "commonTrap": "Forgetting to carry the subtraction sign when evaluating brackets.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-simp-3",
              "title": "Fraction Chain with 'Of'",
              "question": "Simplify: ¾ of 48 + 15 ÷ 5 − 8",
              "givenInfo": [
                "¾ of 48",
                "15 ÷ 5",
                "subtract 8"
              ],
              "conceptOrFormula": "'Of' = multiplication. Apply BODMAS after converting 'of'.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "'Of' = multiply",
                  "explanation": "¾ of 48 = ¾ × 48 = 36.",
                  "math": "(3/4) × 48 = 36"
                },
                {
                  "stepNumber": 2,
                  "title": "Division",
                  "explanation": "15 ÷ 5 = 3.",
                  "math": "15 ÷ 5 = 3"
                },
                {
                  "stepNumber": 3,
                  "title": "Add and subtract (left to right)",
                  "explanation": "36 + 3 − 8 = 31.",
                  "math": "36 + 3 − 8 = 31"
                }
              ],
              "finalAnswer": "31",
              "whyItWorks": "'Of', multiplication, and division all have the same precedence level — process left to right, then add/subtract.",
              "commonTrap": "Treating 'of' as lower precedence than addition, computing 48 + 15 first.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Simplification Speed Techniques",
            "traditionalVsShortcut": {
              "traditionalMethod": "Evaluate every operation step by step, writing out intermediate results.",
              "shortcutMethod": "Scan for 'of', brackets, and high-precedence operations first. Use approximation to eliminate 2-3 options, then compute precisely only if needed.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "Always convert 'of' to × immediately before anything else.",
              "For decimal simplification, convert to fractions if the fractions are simpler (0.125 = 1/8, 0.375 = 3/8).",
              "Use estimation: 4.97 × 8.02 ≈ 5 × 8 = 40 to eliminate far-off options."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Evaluating left to right without BODMAS",
              "whyItHappens": "Students read expressions linearly like sentences.",
              "howToAvoid": "Always scan the entire expression first. Mark all × ÷ operations, do them first, then + −."
            },
            {
              "mistake": "Treating 'of' as addition or ignoring it",
              "whyItHappens": "The word 'of' doesn't look like a math operator.",
              "howToAvoid": "Replace 'of' with '×' in every expression before solving."
            },
            {
              "mistake": "Doing D before M always (or A before S always)",
              "whyItHappens": "BODMAS abbreviation suggests D comes before M.",
              "howToAvoid": "D and M have EQUAL precedence — go left to right. Same for A and S."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Round all values to nearest integer, compute approximately, and match the closest option. Works on 70% of simplification MCQs.",
            "questionSelectionAdvice": "Simplification is low-risk, predictable. Always attempt these questions first in any aptitude test.",
            "recruiterInsight": "Simplification tests arithmetic speed and accuracy — the two traits most correlated with on-the-job calculation tasks."
          },
          "quickRevision": {
            "summaryBullets": [
              "BODMAS: Brackets → Orders → Division/Multiplication (L→R) → Addition/Subtraction (L→R).",
              "'Of' = multiplication. Always convert before solving.",
              "D and M have EQUAL precedence — go LEFT to RIGHT. Same for A and S.",
              "Nested brackets: innermost first → outward. () → {} → [].",
              "Use approximation in MCQs to eliminate 2–3 options instantly."
            ],
            "quickFormulas": [
              "BODMAS order: B → O → D/M → A/S",
              "'of' = ×",
              "Vinculum → () → {} → []"
            ]
          },
          "keyTakeaways": [
            "BODMAS is not optional — it is the ONLY correct way to evaluate arithmetic expressions.",
            "D and M are same-level operators. A and S are same-level operators. Left-to-right breaks ties.",
            "Approximation saves 30+ seconds on MCQ simplification questions."
          ],
          "selfCheckQuestions": [
            "Simplify without a calculator: 24 ÷ 8 × 3 + 6 − 2. What is your answer?",
            "What does '⅕ of 100 + 15' equal? Show your BODMAS steps.",
            "True or False: In BODMAS, Division always comes before Multiplication."
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Simplification"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Simplification section"
            }
          ]
        },
        {
          "id": "y1-quant-basic-percentages",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 6,
          "title": "Basic Percentages",
          "tagline": "Year 1 Foundation — Basic Percentages from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Percentage means 'per hundred'. It is a way to express a number as a fraction of 100. Percentages are used everywhere: discounts, interest rates, tax, marks, growth rates. Converting between percentages, fractions, and decimals is the most fundamental arithmetic skill after basic operations.",
            "placementRelevance": "Percentage is one of the most frequently tested topics in placement aptitude. It forms the basis for Profit & Loss, Simple/Compound Interest, Data Interpretation, and successive percentage problems. Virtually every quantitative section has 2–4 percentage-based questions.",
            "realWorldContext": "Interest rates, GST calculations, salary hikes, election results, inflation data — all are expressed in percentages. Engineers regularly compute percentage changes, error margins, and efficiency improvements."
          },
          "learningObjectives": [
            "Convert between percentages, fractions, and decimals fluently",
            "Calculate X% of Y and 'what percent is X of Y' type problems",
            "Find percentage increase and decrease correctly",
            "Solve 'base value' problems (given the percentage and result, find the original)"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Fractions and decimals",
              "Basic multiplication and division"
            ],
            "quickRefresher": "Recall that 1/4 = 25%, 1/3 ≈ 33.33%, 1/5 = 20%, 1/8 = 12.5%. Know multiplication tables up to 20."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Percentage: A ratio expressed out of 100. 'X%' means X per 100, i.e., X/100.",
              "Percentage of a number: X% of Y = (X/100) × Y.",
              "What % is A of B: (A/B) × 100%.",
              "Percentage Increase: [(New − Old) / Old] × 100%.",
              "Percentage Decrease: [(Old − New) / Old] × 100%.",
              "Base Value: If A is X% more than B, then B = A × 100/(100+X). If A is X% less than B, then B = A × 100/(100−X)."
            ],
            "theoreticalIntuition": "Percentages convert unlike fractions into a common scale of 100, making comparison easy. 3/7 vs 5/11 is hard to compare directly, but 42.86% vs 45.45% is instant. The percentage change formula always divides by the ORIGINAL value (the base), not the new value — this is the most common conceptual error.",
            "visualOrMentalModel": "Imagine a rectangle divided into 100 equal boxes. '35%' means 35 of those boxes are shaded. When calculating '20% of 350', think: 10% of 350 = 35, so 20% = 70. This halving/doubling of 10% is the fastest mental shortcut."
          },
          "importantRulesAndFormulas": [
            {
              "title": "X% of Y",
              "formula": "X% of Y = (X × Y) / 100",
              "description": "Find a percentage of any number.",
              "whenToUse": "Discount, tax, commission calculations.",
              "simpleExample": "15% of 240 = (15 × 240)/100 = 36"
            },
            {
              "title": "Percentage Change",
              "formula": "Change% = [(New − Old) / Old] × 100",
              "variables": "Old = original value, New = changed value",
              "description": "Always divide by the ORIGINAL (old) value.",
              "whenToUse": "Growth, decline, price change problems.",
              "simpleExample": "Price rose from ₹40 to ₹50: Change = (10/40)×100 = 25%"
            },
            {
              "title": "Key fraction-percentage equivalents",
              "formula": "1/2=50%, 1/3≈33.33%, 1/4=25%, 1/5=20%, 1/6≈16.67%, 1/8=12.5%, 1/10=10%, 1/12≈8.33%",
              "description": "Memorize these for instant conversion in MCQs.",
              "whenToUse": "Any problem involving fractions and percentages.",
              "simpleExample": "3/8 = 3 × 12.5% = 37.5%"
            },
            {
              "title": "Finding base value",
              "formula": "If X% of B = A, then B = (A × 100) / X",
              "description": "Reverse calculation to find the original number.",
              "whenToUse": "'A certain number's 30% is 45. Find the number.'",
              "simpleExample": "30% of ? = 45 → ? = (45 × 100)/30 = 150"
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "The most important thing to remember about percentage change is that the denominator is ALWAYS the original (base) value. If a price increases from ₹200 to ₹250, the increase is (50/200)×100 = 25%, NOT (50/250)×100 = 20%. The base is the value BEFORE the change.",
              "Mental shortcuts using 10% as the building block: To find 10% of any number, simply move the decimal point one place left. 10% of 470 = 47. From this, compute 5% (half of 10%), 20% (double 10%), 15% (10% + 5%), 30% (3 × 10%), etc.",
              "For percentage increase followed by percentage decrease: if a quantity increases by X% and then decreases by X%, the net result is NOT zero. It is a net decrease of (X²/100)%. Example: 100 increased by 10% = 110; decreased by 10% = 99. Net change: −1%.",
              "When the problem says 'A is 25% more than B', the base is B. So A = 1.25B, which means B = A/1.25 = 0.8A. Equivalently, B is 20% less than A. This relationship is NOT symmetric."
            ],
            "deepDiveAspects": [
              {
                "title": "The 10% Building Block Method",
                "content": "This is the fastest mental arithmetic method for percentages. Find 10% first (move decimal left), then build the required percentage. 10% of 680 = 68. So 5% = 34, 15% = 102, 20% = 136, 25% = 170, 30% = 204. This avoids multiplication entirely."
              },
              {
                "title": "Percentage vs Percentage Points",
                "content": "If interest rates go from 8% to 10%, the increase is 2 percentage POINTS but 25% in percentage terms ((10−8)/8 × 100 = 25%). Placement tests sometimes test this distinction."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Find X% of Y",
              "description": "Direct calculation.",
              "exampleSnippet": "Find 18% of 450."
            },
            {
              "typeName": "What % is A of B",
              "description": "Express one number as a percentage of another.",
              "exampleSnippet": "36 is what % of 144?"
            },
            {
              "typeName": "Percentage increase/decrease",
              "description": "Calculate the change as a percentage.",
              "exampleSnippet": "Price changed from 80 to 100. Find % increase."
            },
            {
              "typeName": "Reverse percentage",
              "description": "Given the result and percentage, find the base.",
              "exampleSnippet": "After 20% discount, price is 480. Find original."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-pct-1",
              "title": "Finding a Percentage of a Number",
              "question": "Find 15% of 360.",
              "givenInfo": [
                "Percentage = 15%",
                "Number = 360"
              ],
              "conceptOrFormula": "X% of Y = (X × Y) / 100",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Apply formula",
                  "explanation": "15% of 360 = (15 × 360) / 100",
                  "math": "(15 × 360) / 100"
                },
                {
                  "stepNumber": 2,
                  "title": "Compute",
                  "explanation": "15 × 360 = 5400. Then 5400 / 100 = 54.",
                  "math": "5400 / 100 = 54"
                }
              ],
              "finalAnswer": "54",
              "whyItWorks": "Direct application of the percentage formula. Shortcut: 10% of 360 = 36, 5% = 18, so 15% = 36 + 18 = 54.",
              "commonTrap": "Forgetting to divide by 100.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-pct-2",
              "title": "Percentage Change Calculation",
              "question": "A mobile phone's price increased from ₹12,000 to ₹15,000. Find the percentage increase.",
              "givenInfo": [
                "Old price = ₹12,000",
                "New price = ₹15,000"
              ],
              "conceptOrFormula": "% Change = [(New − Old) / Old] × 100",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Find the increase",
                  "explanation": "Increase = 15,000 − 12,000 = ₹3,000.",
                  "math": "15000 − 12000 = 3000"
                },
                {
                  "stepNumber": 2,
                  "title": "Divide by original",
                  "explanation": "3,000 / 12,000 = 0.25 = 1/4.",
                  "math": "3000 / 12000 = 0.25"
                },
                {
                  "stepNumber": 3,
                  "title": "Convert to percentage",
                  "explanation": "0.25 × 100 = 25%.",
                  "math": "0.25 × 100 = 25%"
                }
              ],
              "finalAnswer": "25%",
              "whyItWorks": "The base for percentage change is always the ORIGINAL value (₹12,000), not the new value.",
              "commonTrap": "Dividing by the new price (15,000) instead of the old price — this gives 20%, which is wrong.",
              "difficulty": "Foundation"
            },
            {
              "id": "ex-y1-pct-3",
              "title": "Finding the Original Price (Reverse Percentage)",
              "question": "After a 20% discount, a shirt costs ₹640. What was the original price?",
              "givenInfo": [
                "Discount = 20%",
                "Selling price after discount = ₹640"
              ],
              "conceptOrFormula": "If discount is 20%, then SP = 80% of Original. So Original = SP × 100/80.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Set up equation",
                  "explanation": "After 20% discount, 80% of original remains. So 80% of Original = 640.",
                  "math": "0.80 × Original = 640"
                },
                {
                  "stepNumber": 2,
                  "title": "Solve for Original",
                  "explanation": "Original = 640 / 0.80 = 640 × (100/80) = 800.",
                  "math": "640 / 0.80 = 800"
                }
              ],
              "finalAnswer": "₹800",
              "whyItWorks": "A 20% discount means the customer pays 80% of the original. To reverse: divide by 0.80 (or multiply by 100/80).",
              "commonTrap": "Adding 20% to 640 (= 768) — this is wrong because 20% of 800 ≠ 20% of 640.",
              "difficulty": "Intermediate"
            }
          ],
          "shortcutMethods": {
            "title": "Percentage Speed Techniques",
            "traditionalVsShortcut": {
              "traditionalMethod": "Calculate X × Y, then divide by 100 — involves large multiplication.",
              "shortcutMethod": "Use the 10% building block: find 10% first (move decimal left), then scale. 15% = 10% + 5%. 25% = ¼. 12.5% = ⅛. Avoids multiplication entirely.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "10% of any number = number ÷ 10 (move decimal point one left).",
              "Memorize: 1/3 = 33.33%, 1/6 = 16.67%, 1/7 ≈ 14.28%, 1/8 = 12.5%, 1/9 ≈ 11.11%.",
              "To find X% of Y, try computing Y% of X if easier (they're equal): 4% of 75 = 75% of 4 = 3."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Using the wrong base in percentage change",
              "whyItHappens": "Confusing 'percentage of what' — the denominator must be the ORIGINAL value.",
              "howToAvoid": "Always ask: 'percentage change FROM what?' The 'from' value is the denominator."
            },
            {
              "mistake": "Assuming X% increase followed by X% decrease gives 0% change",
              "whyItHappens": "The base changes after the first operation.",
              "howToAvoid": "Net effect of +X% then −X% = −(X²/100)%. Always a net loss."
            },
            {
              "mistake": "Adding 20% to find original after 20% discount",
              "whyItHappens": "Reversing a percentage isn't the same as adding it back.",
              "howToAvoid": "After X% discount, original = discounted price × 100/(100−X)."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "If the answer should be 'X% of 450' and options are 45, 67.5, 81, 90 — compute 10% = 45 and 20% = 90 to narrow down instantly.",
            "questionSelectionAdvice": "Percentage problems are quick wins — solve them first. Most can be done mentally with the 10% method.",
            "recruiterInsight": "Percentage forms the foundation of DI (Data Interpretation) which carries the highest weightage in TCS NQT and Infosys InfyTQ."
          },
          "quickRevision": {
            "summaryBullets": [
              "X% of Y = (X × Y) / 100. Also equals Y% of X.",
              "% change = [(New − Old) / Old] × 100. Base is ALWAYS the original.",
              "10% trick: move decimal one place left. Build other percentages from 10%.",
              "+X% then −X% = net −(X²/100)%. Never zero.",
              "Reverse: if result is R after X% increase, original = R × 100/(100+X)."
            ],
            "quickFormulas": [
              "X% of Y = XY/100",
              "% Change = (Diff/Original) × 100",
              "1/4=25%, 1/5=20%, 1/8=12.5%, 1/3≈33.33%"
            ]
          },
          "keyTakeaways": [
            "The base for percentage change is ALWAYS the original/old value.",
            "The 10% building block method eliminates multiplication — master it.",
            "+X% then −X% is ALWAYS a net loss of X²/100 percent."
          ],
          "selfCheckQuestions": [
            "What is 12.5% of 240? Use the fraction shortcut (12.5% = 1/8).",
            "A shirt costs ₹800 after a 20% increase. What was the original price?",
            "If A is 25% more than B, what percentage is B less than A?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Percentage"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Percentage section"
            }
          ]
        },
        {
          "id": "y1-quant-basic-ratio",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 7,
          "title": "Basic Ratio",
          "tagline": "Year 1 Foundation — Basic Ratio from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "A ratio compares two quantities of the same type. If A:B = 3:5, it means for every 3 units of A there are 5 units of B. Ratios are dimensionless and fundamental to proportion, partnership, mixture, and salary division problems.",
            "placementRelevance": "Basic Ratio is a high-frequency topic in TCS, Infosys, Wipro, and Cognizant placement assessments. Mastering both concepts and shortcuts in this chapter directly improves aptitude test scores.",
            "realWorldContext": "Basic Ratio has direct real-world applications in engineering, finance, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Ratio",
            "Identify the correct problem type and method in Basic Ratio",
            "Solve Basic Ratio questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Ratio"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Basic Ratio: A ratio compares two quantities of the same type. If A:B = 3:5, it means for every 3 units of A there are 5 units of B. ",
              "Core concept: direct application of Basic Ratio principles to calculate unknown quantities.",
              "Problem types: direct calculation, reverse calculation (finding original from result), and comparison problems."
            ],
            "theoreticalIntuition": "The most important insight in Basic Ratio is to identify what is given and what is unknown, then select the appropriate formula. Avoid translating word problems into unnecessarily complex equations — most Basic Ratio problems reduce to 1-2 step calculations.",
            "visualOrMentalModel": "Visualize Basic Ratio problems on a number line or as simple ratio tables to clarify relationships before computing."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Formula for Basic Ratio",
              "formula": "See narrative for specific formulas",
              "variables": "",
              "description": "Primary formula used in Basic Ratio problems.",
              "whenToUse": "All standard problem types.",
              "simpleExample": "Direct substitution of given values."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Ratio a:b = a/b. To compare ratios, convert to fractions and use cross-multiplication.",
              "To divide a quantity N in ratio a:b: A gets N×a/(a+b), B gets N×b/(a+b).",
              "Compound ratio: ratio of (a:b) and (c:d) is (a×c):(b×d). Duplicate ratio of a:b is a²:b². Sub-duplicate is √a:√b.",
              "Proportion: a:b :: c:d means a/b = c/d, so a×d = b×c (product of means = product of extremes)."
            ],
            "deepDiveAspects": [
              {
                "title": "Key Pattern Recognition in Basic Ratio",
                "content": "Identify the problem type from keywords: ratio/proportion → apply corresponding formula directly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Basic Ratio formula with all values given.",
              "exampleSnippet": "Standard direct calculation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find the original value from the result in Basic Ratio.",
              "exampleSnippet": "Work backwards using inverse operations."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-ratio-1",
              "title": "Example 1: Direct Basic Ratio Calculation",
              "question": "A standard placement-level question on Basic Ratio.",
              "givenInfo": [
                "All parameters for Basic Ratio problem given."
              ],
              "conceptOrFormula": "Core formula for Basic Ratio.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify given values",
                  "explanation": "Extract all parameters from the problem statement."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply formula",
                  "explanation": "Substitute values into the Basic Ratio formula."
                },
                {
                  "stepNumber": 3,
                  "title": "Simplify",
                  "explanation": "Reduce and express final answer in required units."
                }
              ],
              "finalAnswer": "Result of direct calculation.",
              "whyItWorks": "Direct formula application is sufficient for Basic Ratio at Year 1 level.",
              "commonTrap": "Confusing which value is the base/reference in Basic Ratio problems.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Ratio",
            "traditionalVsShortcut": {
              "traditionalMethod": "Write out all steps algebraically and solve sequentially.",
              "shortcutMethod": "Identify formula directly from problem type, substitute known values, solve in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Match problem keywords to Basic Ratio formula types before calculating.",
              "Eliminate impossible answers using boundary conditions before computing.",
              "Use fractions rather than decimals at intermediate steps to maintain exactness."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying the base reference in Basic Ratio",
              "whyItHappens": "Using the wrong denominator or reference value.",
              "howToAvoid": "In Basic Ratio, always clearly identify what quantity equals 100% or forms the base."
            },
            {
              "mistake": "Premature rounding of intermediate values",
              "whyItHappens": "Rounding decimals mid-calculation causes errors.",
              "howToAvoid": "Maintain exact fractions until the final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Eliminate options that have wrong magnitude or wrong units before computing.",
            "questionSelectionAdvice": "Solve direct problems first; flag multi-step ones for second pass.",
            "recruiterInsight": "Basic Ratio is tested in TCS NQT, Infosys Intellect, and Wipro placement aptitude rounds."
          },
          "quickRevision": {
            "summaryBullets": [
              "Core formula for Basic Ratio: memorize and apply directly.",
              "Always identify the base/reference value before computing Basic Ratio problems.",
              "Eliminate MCQ options using boundary conditions before full calculation."
            ],
            "quickFormulas": [
              "Primary Basic Ratio formula — see narrative"
            ]
          },
          "keyTakeaways": [
            "Mastering Basic Ratio at foundation level builds the base for Year 2 advanced applications.",
            "Shortcut methods for Basic Ratio reduce solving time by 50–70% in timed placement tests.",
            "Always verify Basic Ratio answers using inverse operations or boundary checks."
          ],
          "selfCheckQuestions": [
            "Explain in your own words when to use each formula in Basic Ratio.",
            "Create two new Basic Ratio word problems and solve them.",
            "What is the most common error in Basic Ratio problems? How do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Ratio"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Ratio"
            }
          ]
        },
        {
          "id": "y1-quant-basic-proportion",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 8,
          "title": "Basic Proportion",
          "tagline": "Year 1 Foundation — Basic Proportion from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Proportion establishes equality of two ratios. Direct proportion (y ∝ x) and inverse proportion (y ∝ 1/x) are the two fundamental relationships. They model speed-time, cost-quantity, and worker-work relationships.",
            "placementRelevance": "Basic Proportion is a high-frequency topic in TCS, Infosys, Wipro, and Cognizant placement assessments. Mastering both concepts and shortcuts in this chapter directly improves aptitude test scores.",
            "realWorldContext": "Basic Proportion has direct real-world applications in engineering, finance, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Proportion",
            "Identify the correct problem type and method in Basic Proportion",
            "Solve Basic Proportion questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Proportion"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Basic Proportion: Proportion establishes equality of two ratios. Direct proportion (y ∝ x) and inverse proportion (y ∝ 1/x) are the two fu",
              "Core concept: direct application of Basic Proportion principles to calculate unknown quantities.",
              "Problem types: direct calculation, reverse calculation (finding original from result), and comparison problems."
            ],
            "theoreticalIntuition": "The most important insight in Basic Proportion is to identify what is given and what is unknown, then select the appropriate formula. Avoid translating word problems into unnecessarily complex equations — most Basic Proportion problems reduce to 1-2 step calculations.",
            "visualOrMentalModel": "Visualize Basic Proportion problems on a number line or as simple ratio tables to clarify relationships before computing."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Formula for Basic Proportion",
              "formula": "See narrative for specific formulas",
              "variables": "",
              "description": "Primary formula used in Basic Proportion problems.",
              "whenToUse": "All standard problem types.",
              "simpleExample": "Direct substitution of given values."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Direct proportion: as x increases, y increases proportionally. k = y/x is constant.",
              "Inverse proportion: as x increases, y decreases. k = x×y is constant.",
              "Unitary method: find value for 1 unit, then scale. If 5 books cost ₹375, cost of 1 book = ₹75. Cost of 8 books = ₹600.",
              "Rule of Three: given x₁ → y₁ and x₂ → y₂ = ?, set up proportion and solve. Identify direct vs inverse from context first."
            ],
            "deepDiveAspects": [
              {
                "title": "Key Pattern Recognition in Basic Proportion",
                "content": "Identify the problem type from keywords: ratio/proportion → apply corresponding formula directly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Basic Proportion formula with all values given.",
              "exampleSnippet": "Standard direct calculation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find the original value from the result in Basic Proportion.",
              "exampleSnippet": "Work backwards using inverse operations."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-proportion-1",
              "title": "Example 1: Direct Basic Proportion Calculation",
              "question": "A standard placement-level question on Basic Proportion.",
              "givenInfo": [
                "All parameters for Basic Proportion problem given."
              ],
              "conceptOrFormula": "Core formula for Basic Proportion.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify given values",
                  "explanation": "Extract all parameters from the problem statement."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply formula",
                  "explanation": "Substitute values into the Basic Proportion formula."
                },
                {
                  "stepNumber": 3,
                  "title": "Simplify",
                  "explanation": "Reduce and express final answer in required units."
                }
              ],
              "finalAnswer": "Result of direct calculation.",
              "whyItWorks": "Direct formula application is sufficient for Basic Proportion at Year 1 level.",
              "commonTrap": "Confusing which value is the base/reference in Basic Proportion problems.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Proportion",
            "traditionalVsShortcut": {
              "traditionalMethod": "Write out all steps algebraically and solve sequentially.",
              "shortcutMethod": "Identify formula directly from problem type, substitute known values, solve in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Match problem keywords to Basic Proportion formula types before calculating.",
              "Eliminate impossible answers using boundary conditions before computing.",
              "Use fractions rather than decimals at intermediate steps to maintain exactness."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying the base reference in Basic Proportion",
              "whyItHappens": "Using the wrong denominator or reference value.",
              "howToAvoid": "In Basic Proportion, always clearly identify what quantity equals 100% or forms the base."
            },
            {
              "mistake": "Premature rounding of intermediate values",
              "whyItHappens": "Rounding decimals mid-calculation causes errors.",
              "howToAvoid": "Maintain exact fractions until the final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Eliminate options that have wrong magnitude or wrong units before computing.",
            "questionSelectionAdvice": "Solve direct problems first; flag multi-step ones for second pass.",
            "recruiterInsight": "Basic Proportion is tested in TCS NQT, Infosys Intellect, and Wipro placement aptitude rounds."
          },
          "quickRevision": {
            "summaryBullets": [
              "Core formula for Basic Proportion: memorize and apply directly.",
              "Always identify the base/reference value before computing Basic Proportion problems.",
              "Eliminate MCQ options using boundary conditions before full calculation."
            ],
            "quickFormulas": [
              "Primary Basic Proportion formula — see narrative"
            ]
          },
          "keyTakeaways": [
            "Mastering Basic Proportion at foundation level builds the base for Year 2 advanced applications.",
            "Shortcut methods for Basic Proportion reduce solving time by 50–70% in timed placement tests.",
            "Always verify Basic Proportion answers using inverse operations or boundary checks."
          ],
          "selfCheckQuestions": [
            "Explain in your own words when to use each formula in Basic Proportion.",
            "Create two new Basic Proportion word problems and solve them.",
            "What is the most common error in Basic Proportion problems? How do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Proportion"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Proportion"
            }
          ]
        },
        {
          "id": "y1-quant-basic-averages",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 9,
          "title": "Basic Averages",
          "tagline": "Year 1 Foundation — Basic Averages from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "The arithmetic mean (average) is the sum of all values divided by the count of values. It represents the central tendency of a dataset. Weighted averages, combined averages, and average change problems are the main question types.",
            "placementRelevance": "Basic Averages is a high-frequency topic in TCS, Infosys, Wipro, and Cognizant placement assessments. Mastering both concepts and shortcuts in this chapter directly improves aptitude test scores.",
            "realWorldContext": "Basic Averages has direct real-world applications in engineering, finance, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Averages",
            "Identify the correct problem type and method in Basic Averages",
            "Solve Basic Averages questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Averages"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Basic Averages: The arithmetic mean (average) is the sum of all values divided by the count of values. It represents the central tendenc",
              "Core concept: direct application of Basic Averages principles to calculate unknown quantities.",
              "Problem types: direct calculation, reverse calculation (finding original from result), and comparison problems."
            ],
            "theoreticalIntuition": "The most important insight in Basic Averages is to identify what is given and what is unknown, then select the appropriate formula. Avoid translating word problems into unnecessarily complex equations — most Basic Averages problems reduce to 1-2 step calculations.",
            "visualOrMentalModel": "Visualize Basic Averages problems on a number line or as simple ratio tables to clarify relationships before computing."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Formula for Basic Averages",
              "formula": "See narrative for specific formulas",
              "variables": "",
              "description": "Primary formula used in Basic Averages problems.",
              "whenToUse": "All standard problem types.",
              "simpleExample": "Direct substitution of given values."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Average = (Sum of all values) / (Count of values). Conversely: Sum = Average × Count.",
              "If average of n numbers is A, and one number is added making new average A', the new number = A'×(n+1) − A×n.",
              "Weighted average: when groups of different sizes combine: Avg = (n₁A₁ + n₂A₂)/(n₁+n₂). This is different from simple average of A₁ and A₂.",
              "Effect of including/excluding a value: if one value is added to a set, new average = (Old sum + new value)/(n+1). If removed: new average = (Old sum − removed value)/(n−1)."
            ],
            "deepDiveAspects": [
              {
                "title": "Key Pattern Recognition in Basic Averages",
                "content": "Identify the problem type from keywords: average/sum → apply corresponding formula directly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Basic Averages formula with all values given.",
              "exampleSnippet": "Standard direct calculation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find the original value from the result in Basic Averages.",
              "exampleSnippet": "Work backwards using inverse operations."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-averages-1",
              "title": "Example 1: Direct Basic Averages Calculation",
              "question": "A standard placement-level question on Basic Averages.",
              "givenInfo": [
                "All parameters for Basic Averages problem given."
              ],
              "conceptOrFormula": "Core formula for Basic Averages.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify given values",
                  "explanation": "Extract all parameters from the problem statement."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply formula",
                  "explanation": "Substitute values into the Basic Averages formula."
                },
                {
                  "stepNumber": 3,
                  "title": "Simplify",
                  "explanation": "Reduce and express final answer in required units."
                }
              ],
              "finalAnswer": "Result of direct calculation.",
              "whyItWorks": "Direct formula application is sufficient for Basic Averages at Year 1 level.",
              "commonTrap": "Confusing which value is the base/reference in Basic Averages problems.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Averages",
            "traditionalVsShortcut": {
              "traditionalMethod": "Write out all steps algebraically and solve sequentially.",
              "shortcutMethod": "Identify formula directly from problem type, substitute known values, solve in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Match problem keywords to Basic Averages formula types before calculating.",
              "Eliminate impossible answers using boundary conditions before computing.",
              "Use fractions rather than decimals at intermediate steps to maintain exactness."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying the base reference in Basic Averages",
              "whyItHappens": "Using the wrong denominator or reference value.",
              "howToAvoid": "In Basic Averages, always clearly identify what quantity equals 100% or forms the base."
            },
            {
              "mistake": "Premature rounding of intermediate values",
              "whyItHappens": "Rounding decimals mid-calculation causes errors.",
              "howToAvoid": "Maintain exact fractions until the final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Eliminate options that have wrong magnitude or wrong units before computing.",
            "questionSelectionAdvice": "Solve direct problems first; flag multi-step ones for second pass.",
            "recruiterInsight": "Basic Averages is tested in TCS NQT, Infosys Intellect, and Wipro placement aptitude rounds."
          },
          "quickRevision": {
            "summaryBullets": [
              "Core formula for Basic Averages: memorize and apply directly.",
              "Always identify the base/reference value before computing Basic Averages problems.",
              "Eliminate MCQ options using boundary conditions before full calculation."
            ],
            "quickFormulas": [
              "Primary Basic Averages formula — see narrative"
            ]
          },
          "keyTakeaways": [
            "Mastering Basic Averages at foundation level builds the base for Year 2 advanced applications.",
            "Shortcut methods for Basic Averages reduce solving time by 50–70% in timed placement tests.",
            "Always verify Basic Averages answers using inverse operations or boundary checks."
          ],
          "selfCheckQuestions": [
            "Explain in your own words when to use each formula in Basic Averages.",
            "Create two new Basic Averages word problems and solve them.",
            "What is the most common error in Basic Averages problems? How do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Averages"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Averages"
            }
          ]
        },
        {
          "id": "y1-quant-basic-profit-loss",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 10,
          "title": "Profit and Loss Basics",
          "tagline": "Year 1 Foundation — Profit and Loss Basics from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Profit and loss problems model commercial transactions. The cost price (CP) is what you pay; selling price (SP) is what you receive. If SP > CP, there is profit. If SP < CP, there is loss. This chapter builds the framework for discount, marked price, and successive transactions.",
            "placementRelevance": "Profit and Loss Basics is a high-frequency topic in TCS, Infosys, Wipro, and Cognizant placement assessments. Mastering both concepts and shortcuts in this chapter directly improves aptitude test scores.",
            "realWorldContext": "Profit and Loss Basics has direct real-world applications in engineering, finance, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Profit and Loss Basics",
            "Identify the correct problem type and method in Profit and Loss Basics",
            "Solve Profit and Loss Basics questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Profit and Loss Basics"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Profit and Loss Basics: Profit and loss problems model commercial transactions. The cost price (CP) is what you pay; selling price (SP) is what ",
              "Core concept: direct application of Profit and Loss Basics principles to calculate unknown quantities.",
              "Problem types: direct calculation, reverse calculation (finding original from result), and comparison problems."
            ],
            "theoreticalIntuition": "The most important insight in Profit and Loss Basics is to identify what is given and what is unknown, then select the appropriate formula. Avoid translating word problems into unnecessarily complex equations — most Profit and Loss Basics problems reduce to 1-2 step calculations.",
            "visualOrMentalModel": "Visualize Profit and Loss Basics problems on a number line or as simple ratio tables to clarify relationships before computing."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Formula for Profit and Loss Basics",
              "formula": "See narrative for specific formulas",
              "variables": "",
              "description": "Primary formula used in Profit and Loss Basics problems.",
              "whenToUse": "All standard problem types.",
              "simpleExample": "Direct substitution of given values."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Profit = SP − CP. Loss = CP − SP.",
              "Profit% = (Profit/CP) × 100. Loss% = (Loss/CP) × 100. Both are ALWAYS calculated on Cost Price (CP).",
              "SP = CP × (100 + Profit%)/100. SP = CP × (100 − Loss%)/100.",
              "CP = SP × 100/(100 + Profit%) when profit is given. CP = SP × 100/(100 − Loss%) when loss is given.",
              "Marked Price (MP) is the listed price. Discount is given on MP. SP = MP × (100 − Discount%)/100."
            ],
            "deepDiveAspects": [
              {
                "title": "Key Pattern Recognition in Profit and Loss Basics",
                "content": "Identify the problem type from keywords: cost/selling price → apply corresponding formula directly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Profit and Loss Basics formula with all values given.",
              "exampleSnippet": "Standard direct calculation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find the original value from the result in Profit and Loss Basics.",
              "exampleSnippet": "Work backwards using inverse operations."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-loss-1",
              "title": "Example 1: Direct Profit and Loss Basics Calculation",
              "question": "A standard placement-level question on Profit and Loss Basics.",
              "givenInfo": [
                "All parameters for Profit and Loss Basics problem given."
              ],
              "conceptOrFormula": "Core formula for Profit and Loss Basics.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify given values",
                  "explanation": "Extract all parameters from the problem statement."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply formula",
                  "explanation": "Substitute values into the Profit and Loss Basics formula."
                },
                {
                  "stepNumber": 3,
                  "title": "Simplify",
                  "explanation": "Reduce and express final answer in required units."
                }
              ],
              "finalAnswer": "Result of direct calculation.",
              "whyItWorks": "Direct formula application is sufficient for Profit and Loss Basics at Year 1 level.",
              "commonTrap": "Confusing which value is the base/reference in Profit and Loss Basics problems.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Profit and Loss Basics",
            "traditionalVsShortcut": {
              "traditionalMethod": "Write out all steps algebraically and solve sequentially.",
              "shortcutMethod": "Identify formula directly from problem type, substitute known values, solve in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Match problem keywords to Profit and Loss Basics formula types before calculating.",
              "Eliminate impossible answers using boundary conditions before computing.",
              "Use fractions rather than decimals at intermediate steps to maintain exactness."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying the base reference in Profit and Loss Basics",
              "whyItHappens": "Using the wrong denominator or reference value.",
              "howToAvoid": "In Profit and Loss Basics, always clearly identify what quantity equals 100% or forms the base."
            },
            {
              "mistake": "Premature rounding of intermediate values",
              "whyItHappens": "Rounding decimals mid-calculation causes errors.",
              "howToAvoid": "Maintain exact fractions until the final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Eliminate options that have wrong magnitude or wrong units before computing.",
            "questionSelectionAdvice": "Solve direct problems first; flag multi-step ones for second pass.",
            "recruiterInsight": "Profit and Loss Basics is tested in TCS NQT, Infosys Intellect, and Wipro placement aptitude rounds."
          },
          "quickRevision": {
            "summaryBullets": [
              "Core formula for Profit and Loss Basics: memorize and apply directly.",
              "Always identify the base/reference value before computing Profit and Loss Basics problems.",
              "Eliminate MCQ options using boundary conditions before full calculation."
            ],
            "quickFormulas": [
              "Primary Profit and Loss Basics formula — see narrative"
            ]
          },
          "keyTakeaways": [
            "Mastering Profit and Loss Basics at foundation level builds the base for Year 2 advanced applications.",
            "Shortcut methods for Profit and Loss Basics reduce solving time by 50–70% in timed placement tests.",
            "Always verify Profit and Loss Basics answers using inverse operations or boundary checks."
          ],
          "selfCheckQuestions": [
            "Explain in your own words when to use each formula in Profit and Loss Basics.",
            "Create two new Profit and Loss Basics word problems and solve them.",
            "What is the most common error in Profit and Loss Basics problems? How do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Profit and Loss Basics"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Profit and Loss Basics"
            }
          ]
        },
        {
          "id": "y1-quant-basic-simple-interest",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 11,
          "title": "Simple Interest Basics",
          "tagline": "Year 1 Foundation — Simple Interest Basics from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Simple interest is calculated only on the original principal, not on accumulated interest. It models basic loans, savings, and fixed deposits where interest does not compound. Understanding SI is prerequisite for compound interest in Year 2.",
            "placementRelevance": "Simple Interest Basics is a high-frequency topic in TCS, Infosys, Wipro, and Cognizant placement assessments. Mastering both concepts and shortcuts in this chapter directly improves aptitude test scores.",
            "realWorldContext": "Simple Interest Basics has direct real-world applications in engineering, finance, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Simple Interest Basics",
            "Identify the correct problem type and method in Simple Interest Basics",
            "Solve Simple Interest Basics questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Simple Interest Basics"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Simple Interest Basics: Simple interest is calculated only on the original principal, not on accumulated interest. It models basic loans, saving",
              "Core concept: direct application of Simple Interest Basics principles to calculate unknown quantities.",
              "Problem types: direct calculation, reverse calculation (finding original from result), and comparison problems."
            ],
            "theoreticalIntuition": "The most important insight in Simple Interest Basics is to identify what is given and what is unknown, then select the appropriate formula. Avoid translating word problems into unnecessarily complex equations — most Simple Interest Basics problems reduce to 1-2 step calculations.",
            "visualOrMentalModel": "Visualize Simple Interest Basics problems on a number line or as simple ratio tables to clarify relationships before computing."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Formula for Simple Interest Basics",
              "formula": "See narrative for specific formulas",
              "variables": "",
              "description": "Primary formula used in Simple Interest Basics problems.",
              "whenToUse": "All standard problem types.",
              "simpleExample": "Direct substitution of given values."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Simple Interest: SI = P × R × T / 100. Where P = Principal, R = Rate per annum, T = Time in years.",
              "Amount = Principal + SI = P + PRT/100 = P(1 + RT/100).",
              "Finding Principal: P = SI × 100 / (R × T).",
              "Finding Rate: R = SI × 100 / (P × T).",
              "Finding Time: T = SI × 100 / (P × R).",
              "If principal doubles: SI = P, so P = PRT/100 → T = 100/R. Time to double at R% per annum = 100/R years."
            ],
            "deepDiveAspects": [
              {
                "title": "Key Pattern Recognition in Simple Interest Basics",
                "content": "Identify the problem type from keywords: principal/rate/time → apply corresponding formula directly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Simple Interest Basics formula with all values given.",
              "exampleSnippet": "Standard direct calculation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find the original value from the result in Simple Interest Basics.",
              "exampleSnippet": "Work backwards using inverse operations."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-interest-1",
              "title": "Example 1: Direct Simple Interest Basics Calculation",
              "question": "A standard placement-level question on Simple Interest Basics.",
              "givenInfo": [
                "All parameters for Simple Interest Basics problem given."
              ],
              "conceptOrFormula": "Core formula for Simple Interest Basics.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify given values",
                  "explanation": "Extract all parameters from the problem statement."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply formula",
                  "explanation": "Substitute values into the Simple Interest Basics formula."
                },
                {
                  "stepNumber": 3,
                  "title": "Simplify",
                  "explanation": "Reduce and express final answer in required units."
                }
              ],
              "finalAnswer": "Result of direct calculation.",
              "whyItWorks": "Direct formula application is sufficient for Simple Interest Basics at Year 1 level.",
              "commonTrap": "Confusing which value is the base/reference in Simple Interest Basics problems.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Simple Interest Basics",
            "traditionalVsShortcut": {
              "traditionalMethod": "Write out all steps algebraically and solve sequentially.",
              "shortcutMethod": "Identify formula directly from problem type, substitute known values, solve in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Match problem keywords to Simple Interest Basics formula types before calculating.",
              "Eliminate impossible answers using boundary conditions before computing.",
              "Use fractions rather than decimals at intermediate steps to maintain exactness."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying the base reference in Simple Interest Basics",
              "whyItHappens": "Using the wrong denominator or reference value.",
              "howToAvoid": "In Simple Interest Basics, always clearly identify what quantity equals 100% or forms the base."
            },
            {
              "mistake": "Premature rounding of intermediate values",
              "whyItHappens": "Rounding decimals mid-calculation causes errors.",
              "howToAvoid": "Maintain exact fractions until the final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Eliminate options that have wrong magnitude or wrong units before computing.",
            "questionSelectionAdvice": "Solve direct problems first; flag multi-step ones for second pass.",
            "recruiterInsight": "Simple Interest Basics is tested in TCS NQT, Infosys Intellect, and Wipro placement aptitude rounds."
          },
          "quickRevision": {
            "summaryBullets": [
              "Core formula for Simple Interest Basics: memorize and apply directly.",
              "Always identify the base/reference value before computing Simple Interest Basics problems.",
              "Eliminate MCQ options using boundary conditions before full calculation."
            ],
            "quickFormulas": [
              "Primary Simple Interest Basics formula — see narrative"
            ]
          },
          "keyTakeaways": [
            "Mastering Simple Interest Basics at foundation level builds the base for Year 2 advanced applications.",
            "Shortcut methods for Simple Interest Basics reduce solving time by 50–70% in timed placement tests.",
            "Always verify Simple Interest Basics answers using inverse operations or boundary checks."
          ],
          "selfCheckQuestions": [
            "Explain in your own words when to use each formula in Simple Interest Basics.",
            "Create two new Simple Interest Basics word problems and solve them.",
            "What is the most common error in Simple Interest Basics problems? How do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Simple Interest Basics"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Simple Interest Basics"
            }
          ]
        },
        {
          "id": "y1-quant-basic-ages",
          "yearId": 1,
          "category": "Quantitative Foundation",
          "topicNumber": 12,
          "title": "Problems on Ages",
          "tagline": "Year 1 Foundation — Problems on Ages from First Principles",
          "estimatedMinutes": 45,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Age problems create algebraic equations from statements about the relationship between people's ages at different points in time. The key is setting up variables for present ages and expressing past/future ages using + or − offsets.",
            "placementRelevance": "Problems on Ages is a high-frequency topic in TCS, Infosys, Wipro, and Cognizant placement assessments. Mastering both concepts and shortcuts in this chapter directly improves aptitude test scores.",
            "realWorldContext": "Problems on Ages has direct real-world applications in engineering, finance, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Problems on Ages",
            "Identify the correct problem type and method in Problems on Ages",
            "Solve Problems on Ages questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Problems on Ages"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Problems on Ages: Age problems create algebraic equations from statements about the relationship between people's ages at different points",
              "Core concept: direct application of Problems on Ages principles to calculate unknown quantities.",
              "Problem types: direct calculation, reverse calculation (finding original from result), and comparison problems."
            ],
            "theoreticalIntuition": "The most important insight in Problems on Ages is to identify what is given and what is unknown, then select the appropriate formula. Avoid translating word problems into unnecessarily complex equations — most Problems on Ages problems reduce to 1-2 step calculations.",
            "visualOrMentalModel": "Visualize Problems on Ages problems on a number line or as simple ratio tables to clarify relationships before computing."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Formula for Problems on Ages",
              "formula": "See narrative for specific formulas",
              "variables": "",
              "description": "Primary formula used in Problems on Ages problems.",
              "whenToUse": "All standard problem types.",
              "simpleExample": "Direct substitution of given values."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Let current age of person A = x. Past age (n years ago) = x − n. Future age (n years later) = x + n.",
              "Ratio problems: if A:B = p:q today, then their ages are kp and kq for some multiplier k. Find k from additional conditions.",
              "Sum/difference conditions: use simultaneous equations when two independent conditions are given.",
              "Common trap: mixing up 'age n years ago' and 'n years from now'. Always define present ages as variables first."
            ],
            "deepDiveAspects": [
              {
                "title": "Key Pattern Recognition in Problems on Ages",
                "content": "Identify the problem type from keywords: age/year offset → apply corresponding formula directly."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Application",
              "description": "Apply Problems on Ages formula with all values given.",
              "exampleSnippet": "Standard direct calculation."
            },
            {
              "typeName": "Reverse Calculation",
              "description": "Find the original value from the result in Problems on Ages.",
              "exampleSnippet": "Work backwards using inverse operations."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-ages-1",
              "title": "Example 1: Direct Problems on Ages Calculation",
              "question": "A standard placement-level question on Problems on Ages.",
              "givenInfo": [
                "All parameters for Problems on Ages problem given."
              ],
              "conceptOrFormula": "Core formula for Problems on Ages.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify given values",
                  "explanation": "Extract all parameters from the problem statement."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply formula",
                  "explanation": "Substitute values into the Problems on Ages formula."
                },
                {
                  "stepNumber": 3,
                  "title": "Simplify",
                  "explanation": "Reduce and express final answer in required units."
                }
              ],
              "finalAnswer": "Result of direct calculation.",
              "whyItWorks": "Direct formula application is sufficient for Problems on Ages at Year 1 level.",
              "commonTrap": "Confusing which value is the base/reference in Problems on Ages problems.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Problems on Ages",
            "traditionalVsShortcut": {
              "traditionalMethod": "Write out all steps algebraically and solve sequentially.",
              "shortcutMethod": "Identify formula directly from problem type, substitute known values, solve in one step.",
              "timeSavedPercent": "60%"
            },
            "rulesForApplication": [
              "Match problem keywords to Problems on Ages formula types before calculating.",
              "Eliminate impossible answers using boundary conditions before computing.",
              "Use fractions rather than decimals at intermediate steps to maintain exactness."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misidentifying the base reference in Problems on Ages",
              "whyItHappens": "Using the wrong denominator or reference value.",
              "howToAvoid": "In Problems on Ages, always clearly identify what quantity equals 100% or forms the base."
            },
            {
              "mistake": "Premature rounding of intermediate values",
              "whyItHappens": "Rounding decimals mid-calculation causes errors.",
              "howToAvoid": "Maintain exact fractions until the final step."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "Eliminate options that have wrong magnitude or wrong units before computing.",
            "questionSelectionAdvice": "Solve direct problems first; flag multi-step ones for second pass.",
            "recruiterInsight": "Problems on Ages is tested in TCS NQT, Infosys Intellect, and Wipro placement aptitude rounds."
          },
          "quickRevision": {
            "summaryBullets": [
              "Core formula for Problems on Ages: memorize and apply directly.",
              "Always identify the base/reference value before computing Problems on Ages problems.",
              "Eliminate MCQ options using boundary conditions before full calculation."
            ],
            "quickFormulas": [
              "Primary Problems on Ages formula — see narrative"
            ]
          },
          "keyTakeaways": [
            "Mastering Problems on Ages at foundation level builds the base for Year 2 advanced applications.",
            "Shortcut methods for Problems on Ages reduce solving time by 50–70% in timed placement tests.",
            "Always verify Problems on Ages answers using inverse operations or boundary checks."
          ],
          "selfCheckQuestions": [
            "Explain in your own words when to use each formula in Problems on Ages.",
            "Create two new Problems on Ages word problems and solve them.",
            "What is the most common error in Problems on Ages problems? How do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Quantitative Aptitude — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Problems on Ages"
            },
            {
              "sourceName": "How to Prepare for QA — Arun Sharma",
              "sourceType": "Reference",
              "referenceNote": "Section: Problems on Ages"
            }
          ]
        }
      ]
    },
    {
      "category": "Logical Reasoning",
      "description": "Logical Reasoning for Year 1 Foundation",
      "topics": [
        {
          "id": "y1-lr-number-series",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 13,
          "title": "Number Series",
          "tagline": "Year 1 Foundation — Number Series Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Number series problems present a sequence of numbers following a hidden pattern. The task is to identify the rule (arithmetic, geometric, square, cube, alternating, difference-of-difference) and apply it to find the next term or the wrong/missing term.",
            "placementRelevance": "Number Series questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Number Series trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Number Series",
            "Identify the correct problem type and method in Number Series",
            "Solve Number Series questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Number Series"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Arithmetic progression: constant difference between terms. Example: 3, 7, 11, 15 (diff = +4).",
              "Geometric progression: constant ratio between terms. Example: 3, 6, 12, 24 (ratio = 2).",
              "Square/cube series: terms are perfect squares or cubes. Example: 1, 4, 9, 16, 25 (n²).",
              "Difference series: the differences between consecutive terms form their own pattern. Example: 2, 3, 5, 8, 12 (differences 1,2,3,4).",
              "Alternating series: two interleaved series running in parallel. Example: 1, 2, 4, 5, 7, 8 (alternate +3 and +3 offset by 1)."
            ],
            "theoreticalIntuition": "The key skill in Number Series is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Number Series, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Number Series",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Number Series problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Number Series problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Number Series comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Number Series multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Number Series problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Number Series",
                "content": "In Number Series problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Number Series pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Number Series rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-series-1",
              "title": "Example 1: Number Series Pattern Identification",
              "question": "Identify the pattern and find the next term in this Number Series problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Number Series."
              ],
              "conceptOrFormula": "Pattern recognition for Number Series.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Number Series sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Number Series pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Number Series, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Number Series",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Number Series",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Number Series sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Number Series pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Number Series is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Number Series core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Number Series: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Number Series is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Number Series: compute differences of differences until you find a constant.",
            "Never guess in Number Series — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Number Series sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Number Series"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Number Series"
            }
          ]
        },
        {
          "id": "y1-lr-letter-series",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 14,
          "title": "Letter Series",
          "tagline": "Year 1 Foundation — Letter Series Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Letter series tests the ability to recognize patterns in sequences of letters — following alphabetical position, gaps between letters, or reverse order. These are direct analogues of number series but in the alphabet domain.",
            "placementRelevance": "Letter Series questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Letter Series trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Letter Series",
            "Identify the correct problem type and method in Letter Series",
            "Solve Letter Series questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Letter Series"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Alphabetical positions: A=1, B=2, …, Z=26. Reverse: A=26, B=25, …, Z=1.",
              "Constant gap: BDFHJ (every other letter, gap=2). ACEGI (odd positions).",
              "Reverse alphabet: ZYXWV (decreasing positions).",
              "Mixed: letter position and number alternation. BDF3HJL6NPR9 (every 3rd letter is a number).",
              "Jump patterns: A, C, F, J (differences 2, 3, 4 — increasing gaps)."
            ],
            "theoreticalIntuition": "The key skill in Letter Series is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Letter Series, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Letter Series",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Letter Series problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Letter Series problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Letter Series comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Letter Series multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Letter Series problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Letter Series",
                "content": "In Letter Series problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Letter Series pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Letter Series rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-series-1",
              "title": "Example 1: Letter Series Pattern Identification",
              "question": "Identify the pattern and find the next term in this Letter Series problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Letter Series."
              ],
              "conceptOrFormula": "Pattern recognition for Letter Series.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Letter Series sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Letter Series pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Letter Series, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Letter Series",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Letter Series",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Letter Series sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Letter Series pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Letter Series is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Letter Series core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Letter Series: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Letter Series is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Letter Series: compute differences of differences until you find a constant.",
            "Never guess in Letter Series — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Letter Series sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Letter Series"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Letter Series"
            }
          ]
        },
        {
          "id": "y1-lr-analogy",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 15,
          "title": "Analogy",
          "tagline": "Year 1 Foundation — Analogy Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Analogy problems test whether you can identify the relationship between one pair of terms and apply the same relationship to a second pair. The relationship may be functional, categorical, positional, or definitional.",
            "placementRelevance": "Analogy questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Analogy trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Analogy",
            "Identify the correct problem type and method in Analogy",
            "Solve Analogy questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Analogy"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Semantic relationship: Doctor : Hospital :: Teacher : School (person : workplace).",
              "Part-whole: Finger : Hand :: Petal : Flower.",
              "Cause-effect: Fire : Burn :: Rain : Wet.",
              "Degree/intensity: Warm : Hot :: Cool : Cold.",
              "Tool-user: Pen : Writer :: Chisel : Sculptor.",
              "Antonym pair: Success : Failure :: Light : Darkness."
            ],
            "theoreticalIntuition": "The key skill in Analogy is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Analogy, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Analogy",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Analogy problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Analogy problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Analogy comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Analogy multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Analogy problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Analogy",
                "content": "In Analogy problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Analogy pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Analogy rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-analogy-1",
              "title": "Example 1: Analogy Pattern Identification",
              "question": "Identify the pattern and find the next term in this Analogy problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Analogy."
              ],
              "conceptOrFormula": "Pattern recognition for Analogy.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Analogy sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Analogy pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Analogy, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Analogy",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Analogy",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Analogy sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Analogy pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Analogy is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Analogy core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Analogy: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Analogy is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Analogy: compute differences of differences until you find a constant.",
            "Never guess in Analogy — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Analogy sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Analogy"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Analogy"
            }
          ]
        },
        {
          "id": "y1-lr-classification",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 16,
          "title": "Classification / Odd One Out",
          "tagline": "Year 1 Foundation — Classification / Odd One Out Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Classification (odd one out) problems present a group of items and ask you to identify which one does not belong — based on category, property, function, or shape. The challenge is recognizing multiple possible groupings and selecting the most dominant/specific one.",
            "placementRelevance": "Classification / Odd One Out questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Classification / Odd One Out trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Classification / Odd One Out",
            "Identify the correct problem type and method in Classification / Odd One Out",
            "Solve Classification / Odd One Out questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Classification / Odd One Out"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Category membership: Dog, Cat, Sparrow, Cow → Sparrow is the odd one (bird vs mammals).",
              "Property: 16, 25, 36, 50 → 50 is odd one (not a perfect square).",
              "Functional: Pen, Pencil, Eraser, Sharpener → Eraser (removes writing; others create).",
              "Trap: multiple valid answers — always choose the most specific/clear grouping."
            ],
            "theoreticalIntuition": "The key skill in Classification / Odd One Out is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Classification / Odd One Out, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Classification / Odd One Out",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Classification / Odd One Out problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Classification / Odd One Out problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Classification / Odd One Out comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Classification / Odd One Out multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Classification / Odd One Out problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Classification / Odd One Out",
                "content": "In Classification / Odd One Out problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Classification / Odd One Out pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Classification / Odd One Out rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-classification-1",
              "title": "Example 1: Classification / Odd One Out Pattern Identification",
              "question": "Identify the pattern and find the next term in this Classification / Odd One Out problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Classification / Odd One Out."
              ],
              "conceptOrFormula": "Pattern recognition for Classification / Odd One Out.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Classification / Odd One Out sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Classification / Odd One Out pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Classification / Odd One Out, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Classification / Odd One Out",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Classification / Odd One Out",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Classification / Odd One Out sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Classification / Odd One Out pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Classification / Odd One Out is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Classification / Odd One Out core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Classification / Odd One Out: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Classification / Odd One Out is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Classification / Odd One Out: compute differences of differences until you find a constant.",
            "Never guess in Classification / Odd One Out — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Classification / Odd One Out sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Classification / Odd One Out"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Classification / Odd One Out"
            }
          ]
        },
        {
          "id": "y1-lr-odd-one-out",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 17,
          "title": "Odd One Out (Mixed)",
          "tagline": "Year 1 Foundation — Odd One Out (Mixed) Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Extended odd-one-out problems include words, letters, numbers, or images grouped by non-obvious shared properties. This tests lateral thinking and pattern recognition across multiple classification frameworks simultaneously.",
            "placementRelevance": "Odd One Out (Mixed) questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Odd One Out (Mixed) trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Odd One Out (Mixed)",
            "Identify the correct problem type and method in Odd One Out (Mixed)",
            "Solve Odd One Out (Mixed) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Odd One Out (Mixed)"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Alpha classification: ABCD, BCDE, CDEF, DFGH → DFGH skips E (not consecutive).",
              "Numerical: 16, 25, 36, 49, 56 → 56 (not a perfect square; others are 4²,5²,6²,7²).",
              "Category trap: among Mango, Apple, Banana, Carrot, Guava → Carrot is vegetable; all others are fruits.",
              "Always verify your classification with all 4 options — ensure your chosen 'rule' applies to all accepted items but NOT the odd one."
            ],
            "theoreticalIntuition": "The key skill in Odd One Out (Mixed) is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Odd One Out (Mixed), write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Odd One Out (Mixed)",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Odd One Out (Mixed) problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Odd One Out (Mixed) problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Odd One Out (Mixed) comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Odd One Out (Mixed) multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Odd One Out (Mixed) problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Odd One Out (Mixed)",
                "content": "In Odd One Out (Mixed) problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Odd One Out (Mixed) pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Odd One Out (Mixed) rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-out-1",
              "title": "Example 1: Odd One Out (Mixed) Pattern Identification",
              "question": "Identify the pattern and find the next term in this Odd One Out (Mixed) problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Odd One Out (Mixed)."
              ],
              "conceptOrFormula": "Pattern recognition for Odd One Out (Mixed).",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Odd One Out (Mixed) sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Odd One Out (Mixed) pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Odd One Out (Mixed), always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Odd One Out (Mixed)",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Odd One Out (Mixed)",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Odd One Out (Mixed) sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Odd One Out (Mixed) pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Odd One Out (Mixed) is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Odd One Out (Mixed) core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Odd One Out (Mixed): test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Odd One Out (Mixed) is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Odd One Out (Mixed): compute differences of differences until you find a constant.",
            "Never guess in Odd One Out (Mixed) — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Odd One Out (Mixed) sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Odd One Out (Mixed)"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Odd One Out (Mixed)"
            }
          ]
        },
        {
          "id": "y1-lr-basic-coding",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 18,
          "title": "Basic Coding-Decoding",
          "tagline": "Year 1 Foundation — Basic Coding-Decoding Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Coding-decoding problems encode a word, phrase, or number using a substitution or shift rule, then ask you to decode a related word using the same rule. Year 1 covers direct letter shifts, positional coding, and symbol substitution.",
            "placementRelevance": "Basic Coding-Decoding questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Basic Coding-Decoding trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Coding-Decoding",
            "Identify the correct problem type and method in Basic Coding-Decoding",
            "Solve Basic Coding-Decoding questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Coding-Decoding"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Letter shift coding: each letter shifted by fixed number. If APPLE = BQQMF, each letter is shifted +1.",
              "Reverse coding: A→Z, B→Y, …, Z→A (26−position+1 mapping).",
              "Position coding: word position numbered and coded. FIRST = 6,9,18,19,20 (alphabetical positions).",
              "Symbol coding: letters replaced by symbols following a given key. Decode by reversing the key."
            ],
            "theoreticalIntuition": "The key skill in Basic Coding-Decoding is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Basic Coding-Decoding, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Basic Coding-Decoding",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Basic Coding-Decoding problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Basic Coding-Decoding problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Basic Coding-Decoding comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Basic Coding-Decoding multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Basic Coding-Decoding problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Basic Coding-Decoding",
                "content": "In Basic Coding-Decoding problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Basic Coding-Decoding pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Basic Coding-Decoding rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-coding-1",
              "title": "Example 1: Basic Coding-Decoding Pattern Identification",
              "question": "Identify the pattern and find the next term in this Basic Coding-Decoding problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Basic Coding-Decoding."
              ],
              "conceptOrFormula": "Pattern recognition for Basic Coding-Decoding.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Basic Coding-Decoding sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Basic Coding-Decoding pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Basic Coding-Decoding, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Coding-Decoding",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Basic Coding-Decoding",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Basic Coding-Decoding sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Basic Coding-Decoding pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Basic Coding-Decoding is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Basic Coding-Decoding core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Basic Coding-Decoding: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Basic Coding-Decoding is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Basic Coding-Decoding: compute differences of differences until you find a constant.",
            "Never guess in Basic Coding-Decoding — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Basic Coding-Decoding sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Coding-Decoding"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Coding-Decoding"
            }
          ]
        },
        {
          "id": "y1-lr-basic-blood-relations",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 19,
          "title": "Basic Blood Relations",
          "tagline": "Year 1 Foundation — Basic Blood Relations Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Blood relation problems describe family relationships in words and ask you to determine the relationship between two specified people. Year 1 problems involve direct parent-child, sibling, and spouse relationships.",
            "placementRelevance": "Basic Blood Relations questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Basic Blood Relations trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Blood Relations",
            "Identify the correct problem type and method in Basic Blood Relations",
            "Solve Basic Blood Relations questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Blood Relations"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Immediate relations: Mother, Father, Son, Daughter, Brother, Sister, Husband, Wife, Grandfather, Grandmother.",
              "Derived relations: Uncle = Father's or Mother's Brother. Aunt = Father's or Mother's Sister. Cousin = Uncle's or Aunt's child.",
              "Gender identification: 'X's son' → X's child is male. 'X's daughter' → X's child is female.",
              "Solve by drawing a family tree with males (□) and females (○) and connecting with arrows for parent→child and double lines for siblings."
            ],
            "theoreticalIntuition": "The key skill in Basic Blood Relations is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Basic Blood Relations, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Basic Blood Relations",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Basic Blood Relations problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Basic Blood Relations problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Basic Blood Relations comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Basic Blood Relations multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Basic Blood Relations problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Basic Blood Relations",
                "content": "In Basic Blood Relations problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Basic Blood Relations pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Basic Blood Relations rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-relations-1",
              "title": "Example 1: Basic Blood Relations Pattern Identification",
              "question": "Identify the pattern and find the next term in this Basic Blood Relations problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Basic Blood Relations."
              ],
              "conceptOrFormula": "Pattern recognition for Basic Blood Relations.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Basic Blood Relations sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Basic Blood Relations pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Basic Blood Relations, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Blood Relations",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Basic Blood Relations",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Basic Blood Relations sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Basic Blood Relations pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Basic Blood Relations is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Basic Blood Relations core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Basic Blood Relations: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Basic Blood Relations is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Basic Blood Relations: compute differences of differences until you find a constant.",
            "Never guess in Basic Blood Relations — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Basic Blood Relations sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Blood Relations"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Blood Relations"
            }
          ]
        },
        {
          "id": "y1-lr-basic-direction",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 20,
          "title": "Direction Sense Basics",
          "tagline": "Year 1 Foundation — Direction Sense Basics Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Direction sense problems trace a path described in steps and directions, then ask for the final direction faced or the straight-line distance from start to end. Year 1 covers compass directions and simple L-shaped or T-shaped paths.",
            "placementRelevance": "Direction Sense Basics questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Direction Sense Basics trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Direction Sense Basics",
            "Identify the correct problem type and method in Direction Sense Basics",
            "Solve Direction Sense Basics questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Direction Sense Basics"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Compass points: North (up), South (down), East (right), West (left). NE, NW, SE, SW are diagonals.",
              "Turning: turning right from North → East. Turning left from North → West. 180° turn reverses direction.",
              "Drawing: always sketch the path on a grid. Mark start, draw each step, mark end.",
              "Distance: if path is L-shaped, final distance = √(horizontal² + vertical²) by Pythagoras."
            ],
            "theoreticalIntuition": "The key skill in Direction Sense Basics is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Direction Sense Basics, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Direction Sense Basics",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Direction Sense Basics problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Direction Sense Basics problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Direction Sense Basics comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Direction Sense Basics multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Direction Sense Basics problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Direction Sense Basics",
                "content": "In Direction Sense Basics problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Direction Sense Basics pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Direction Sense Basics rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-direction-1",
              "title": "Example 1: Direction Sense Basics Pattern Identification",
              "question": "Identify the pattern and find the next term in this Direction Sense Basics problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Direction Sense Basics."
              ],
              "conceptOrFormula": "Pattern recognition for Direction Sense Basics.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Direction Sense Basics sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Direction Sense Basics pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Direction Sense Basics, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Direction Sense Basics",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Direction Sense Basics",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Direction Sense Basics sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Direction Sense Basics pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Direction Sense Basics is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Direction Sense Basics core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Direction Sense Basics: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Direction Sense Basics is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Direction Sense Basics: compute differences of differences until you find a constant.",
            "Never guess in Direction Sense Basics — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Direction Sense Basics sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Direction Sense Basics"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Direction Sense Basics"
            }
          ]
        },
        {
          "id": "y1-lr-ranking-basics",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 21,
          "title": "Ranking and Position Basics",
          "tagline": "Year 1 Foundation — Ranking and Position Basics Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Ranking problems give the rank of a person from both ends of a queue/row and ask for the total count, or give total count and one-sided rank and ask for other-sided rank.",
            "placementRelevance": "Ranking and Position Basics questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Ranking and Position Basics trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Ranking and Position Basics",
            "Identify the correct problem type and method in Ranking and Position Basics",
            "Solve Ranking and Position Basics questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Ranking and Position Basics"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Key formula: Total = Rank from left + Rank from right − 1.",
              "If person is r_L from left and r_R from right in a row of N: N = r_L + r_R − 1.",
              "Multiple people: if A is 5th from left and B is 3rd from right in a row of 20, find how many people are between them.",
              "Rank and position can change if people join or leave — always re-apply formula with updated values."
            ],
            "theoreticalIntuition": "The key skill in Ranking and Position Basics is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Ranking and Position Basics, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Ranking and Position Basics",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Ranking and Position Basics problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Ranking and Position Basics problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Ranking and Position Basics comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Ranking and Position Basics multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Ranking and Position Basics problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Ranking and Position Basics",
                "content": "In Ranking and Position Basics problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Ranking and Position Basics pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Ranking and Position Basics rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-basics-1",
              "title": "Example 1: Ranking and Position Basics Pattern Identification",
              "question": "Identify the pattern and find the next term in this Ranking and Position Basics problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Ranking and Position Basics."
              ],
              "conceptOrFormula": "Pattern recognition for Ranking and Position Basics.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Ranking and Position Basics sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Ranking and Position Basics pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Ranking and Position Basics, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Ranking and Position Basics",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Ranking and Position Basics",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Ranking and Position Basics sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Ranking and Position Basics pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Ranking and Position Basics is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Ranking and Position Basics core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Ranking and Position Basics: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Ranking and Position Basics is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Ranking and Position Basics: compute differences of differences until you find a constant.",
            "Never guess in Ranking and Position Basics — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Ranking and Position Basics sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Ranking and Position Basics"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Ranking and Position Basics"
            }
          ]
        },
        {
          "id": "y1-lr-alphabetical-reasoning",
          "yearId": 1,
          "category": "Logical Reasoning",
          "topicNumber": 22,
          "title": "Alphabetical Reasoning",
          "tagline": "Year 1 Foundation — Alphabetical Reasoning Pattern Recognition",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Alphabetical reasoning tests ability to arrange letters, words, or groups alphabetically, identify positions in the alphabet, and determine relationships between letter positions using the 26-letter sequence.",
            "placementRelevance": "Alphabetical Reasoning questions appear consistently in Infosys, TCS, and Wipro logical reasoning sections. Speed of pattern recognition is more important than calculation.",
            "realWorldContext": "Alphabetical Reasoning trains systematic thinking patterns used in algorithm design, debugging, and data analysis."
          },
          "learningObjectives": [
            "Understand and apply core principles of Alphabetical Reasoning",
            "Identify the correct problem type and method in Alphabetical Reasoning",
            "Solve Alphabetical Reasoning questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Alphabetical Reasoning"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "A=1, B=2, C=3, …, Z=26. Practice instant letter→position and position→letter conversion.",
              "Alphabetical ordering of words: compare letter by letter from left to right. First differing letter determines order.",
              "Dictionary order means strict left-to-right alphabetical comparison.",
              "Consonants in sequence: B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z. Vowels: A,E,I,O,U."
            ],
            "theoreticalIntuition": "The key skill in Alphabetical Reasoning is rapid pattern classification. Before computing anything, spend 5 seconds identifying which of the known patterns the sequence or problem matches — then execute the appropriate method.",
            "visualOrMentalModel": "For Alphabetical Reasoning, write out the sequence/path visually on rough paper. Visual representation reveals the pattern far faster than mental modeling."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Primary Pattern Types in Alphabetical Reasoning",
              "formula": "Varies by problem — see definitions section",
              "variables": "",
              "description": "Each type of Alphabetical Reasoning problem has a specific identifying feature and solving method.",
              "whenToUse": "Pattern type identification first, then apply method.",
              "simpleExample": "Example depends on specific problem variant."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "Approach every Alphabetical Reasoning problem by first identifying the pattern type. For series problems: compute first, second, third differences until you find a constant or simple pattern. For coding: test the first word against all 4 options to verify which code rule is consistent.",
              "Speed improvement in Alphabetical Reasoning comes from memorizing common patterns. Learn arithmetic series (constant difference), geometric series (constant ratio), squares 1–25, cubes 1–10, Fibonacci, prime sequences, and alternating series. When you see a sequence, these reference patterns allow instant recognition.",
              "In Alphabetical Reasoning multiple-choice questions, often checking only the last 2 terms of a series with each answer option is enough to identify the correct one. Start from the candidate answer and work backward to verify consistency with the given terms.",
              "For Alphabetical Reasoning problems with wrong-term identification: test each term against the expected sequence. The term that breaks the pattern is the wrong one. Common trap: the wrong term is designed to look plausible at first glance."
            ],
            "deepDiveAspects": [
              {
                "title": "Common Trap Types in Alphabetical Reasoning",
                "content": "In Alphabetical Reasoning problems: (1) Alternating series disguised as a single sequence — check if every other term forms its own pattern. (2) Mixed operations: differences may be squares or cubes rather than constants. (3) In letter series: mistaking alphabetical position from front vs from back. (4) In coding: assuming same encoding rule applies across different language-coded questions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Pattern Application",
              "description": "Apply the recognized Alphabetical Reasoning pattern to find the answer directly.",
              "exampleSnippet": "Identify pattern → apply → verify with one adjacent term."
            },
            {
              "typeName": "Elimination by Checking",
              "description": "Test each MCQ option against the Alphabetical Reasoning rules to find the consistent one.",
              "exampleSnippet": "Insert each option in sequence → verify overall consistency."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-reasoning-1",
              "title": "Example 1: Alphabetical Reasoning Pattern Identification",
              "question": "Identify the pattern and find the next term in this Alphabetical Reasoning problem.",
              "givenInfo": [
                "A sequence or encoding task specific to Alphabetical Reasoning."
              ],
              "conceptOrFormula": "Pattern recognition for Alphabetical Reasoning.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Compute differences or check ratios",
                  "explanation": "Find the relationship between consecutive elements in the Alphabetical Reasoning sequence."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify pattern type",
                  "explanation": "Match to known Alphabetical Reasoning pattern: AP, GP, square series, difference series, etc."
                },
                {
                  "stepNumber": 3,
                  "title": "Apply pattern to find answer",
                  "explanation": "Extend the sequence by one step using the identified rule."
                }
              ],
              "finalAnswer": "Next term based on identified pattern.",
              "whyItWorks": "Pattern identification is 90% of the work — execution is just one step.",
              "commonTrap": "Assuming wrong pattern type. In Alphabetical Reasoning, always verify with at least 2 pairs of terms.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Alphabetical Reasoning",
            "traditionalVsShortcut": {
              "traditionalMethod": "Test every possible pattern type sequentially until one works.",
              "shortcutMethod": "Classify problem type in 5 seconds → apply specific rule → verify with one check. Total: under 30 seconds.",
              "timeSavedPercent": "55%"
            },
            "rulesForApplication": [
              "For arithmetic series: first difference constant → AP. For geometric: ratio constant → GP.",
              "For letter series: always write alphabetical positions (A=1,B=2…) on rough paper for clarity.",
              "For coding: test the rule on the GIVEN example before applying to the unknown word."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Missing alternating series pattern in Alphabetical Reasoning",
              "whyItHappens": "Treating an alternating two-series as a single sequence.",
              "howToAvoid": "Check every other term independently — sometimes two interleaved series are present."
            },
            {
              "mistake": "Calculating without identifying pattern first",
              "whyItHappens": "Wasting time on wrong approach.",
              "howToAvoid": "Always spend 5 seconds classifying the pattern type before computing anything."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 35,
            "eliminationTechnique": "Eliminate options that violate the pattern with even one term in the Alphabetical Reasoning sequence.",
            "questionSelectionAdvice": "Spend first 5 seconds classifying Alphabetical Reasoning pattern, then execute. Familiar pattern = solve immediately; unfamiliar = skip and return.",
            "recruiterInsight": "Alphabetical Reasoning is a standard section in Infosys Intellect, TCS NQT, and Cognizant aptitude papers."
          },
          "quickRevision": {
            "summaryBullets": [
              "Alphabetical Reasoning core patterns: AP (constant diff), GP (constant ratio), square/cube series, difference series.",
              "Always verify the pattern with at least 2 consecutive pairs before applying it to find the answer.",
              "For wrong-term problems in Alphabetical Reasoning: test each term sequentially against the expected pattern."
            ],
            "quickFormulas": [
              "Key patterns: AP, GP, squares, cubes, Fibonacci, alternating"
            ]
          },
          "keyTakeaways": [
            "Pattern recognition speed in Alphabetical Reasoning is built by daily practice of 10 sequences — it becomes reflexive within 2 weeks.",
            "The most reliable approach to Alphabetical Reasoning: compute differences of differences until you find a constant.",
            "Never guess in Alphabetical Reasoning — always verify the complete sequence with your answer before selecting."
          ],
          "selfCheckQuestions": [
            "Create 3 original Alphabetical Reasoning sequences — one AP, one GP, one difference series.",
            "Find the wrong term: 2, 5, 10, 17, 26, 36, 50.",
            "Decode the pattern in: A, C, F, J, O, ?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Verbal Reasoning — R.S. Aggarwal",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Alphabetical Reasoning"
            },
            {
              "sourceName": "Logical Reasoning — M.K. Pandey",
              "sourceType": "Reference",
              "referenceNote": "Section: Alphabetical Reasoning"
            }
          ]
        }
      ]
    },
    {
      "category": "Verbal Ability",
      "description": "Verbal Ability for Year 1 Foundation",
      "topics": [
        {
          "id": "y1-verbal-parts-of-speech",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 23,
          "title": "Parts of Speech",
          "tagline": "Year 1 Foundation — Parts of Speech Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Parts of speech classify every word in English by its grammatical function: noun, pronoun, verb, adjective, adverb, preposition, conjunction, and interjection. Identifying the correct part of speech is the foundation for all grammar-based questions.",
            "placementRelevance": "Parts of Speech questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Parts of Speech proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Parts of Speech",
            "Identify the correct problem type and method in Parts of Speech",
            "Solve Parts of Speech questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Parts of Speech"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Noun: name of person, place, thing, or idea (Ram, city, happiness).",
              "Pronoun: substitutes a noun (he, she, it, they, who, which).",
              "Verb: expresses action or state (run, is, seem, become).",
              "Adjective: modifies a noun or pronoun (tall, red, intelligent).",
              "Adverb: modifies a verb, adjective, or another adverb (quickly, very, quite).",
              "Preposition: shows relationship between noun and another element (in, on, at, for, between).",
              "Conjunction: connects words, phrases, or clauses (and, but, or, because, although).",
              "Interjection: expresses emotion (Oh!, Wow!, Alas!)."
            ],
            "theoreticalIntuition": "Grammar rules in Parts of Speech are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Parts of Speech, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Parts of Speech",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Parts of Speech.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Parts of Speech questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Parts of Speech errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Parts of Speech multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Parts of Speech by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Parts of Speech Traps in Placement Tests",
                "content": "The most common Parts of Speech traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Parts of Speech in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Parts of Speech error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-speech-1",
              "title": "Example 1: Parts of Speech Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Parts of Speech error."
              ],
              "conceptOrFormula": "Apply Parts of Speech rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Parts of Speech rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Parts of Speech rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Parts of Speech",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Parts of Speech rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Parts of Speech: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Parts of Speech",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Parts of Speech: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Parts of Speech error.",
            "questionSelectionAdvice": "Spend 15 seconds per Parts of Speech question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Parts of Speech is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Parts of Speech rules: Noun: name of person, place, thing, or idea (Ram, city, happiness).; Pronoun: substitutes a noun (he, she, it, they, who, which).; Verb: expresses action or state (run, is, seem, become).",
              "Apply Parts of Speech rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Parts of Speech rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Parts of Speech requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Parts of Speech error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Parts of Speech questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Parts of Speech rules, then check them against the rules.",
            "What is the most common Parts of Speech error in competitive exams? Give an example.",
            "Correct this sentence using Parts of Speech rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Parts of Speech"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Parts of Speech"
            }
          ]
        },
        {
          "id": "y1-verbal-basic-tenses",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 24,
          "title": "Basic Tenses",
          "tagline": "Year 1 Foundation — Basic Tenses Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "English tenses indicate when an action occurs: past, present, or future — each further divided into simple, continuous, perfect, and perfect continuous forms. Year 1 covers the 12 main tenses with signal words for each.",
            "placementRelevance": "Basic Tenses questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Basic Tenses proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Tenses",
            "Identify the correct problem type and method in Basic Tenses",
            "Solve Basic Tenses questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Tenses"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Simple Present: habitual action or general truth. Signal words: always, usually, every day.",
              "Present Continuous: ongoing action now. Signal: is/are + V-ing, currently, right now.",
              "Present Perfect: past action with present relevance. Signal: have/has + V3, already, just, yet, ever.",
              "Simple Past: completed past action. Signal: yesterday, last week, ago, in 1995.",
              "Past Continuous: ongoing action at a past moment. Signal: was/were + V-ing.",
              "Simple Future: planned or predicted future. Signal: will + V1, tomorrow, next week.",
              "Each tense has a distinct structure — memorize the formation, then practice signal words."
            ],
            "theoreticalIntuition": "Grammar rules in Basic Tenses are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Basic Tenses, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Basic Tenses",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Basic Tenses.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Basic Tenses questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Basic Tenses errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Basic Tenses multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Basic Tenses by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Basic Tenses Traps in Placement Tests",
                "content": "The most common Basic Tenses traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Basic Tenses in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Basic Tenses error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-tenses-1",
              "title": "Example 1: Basic Tenses Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Basic Tenses error."
              ],
              "conceptOrFormula": "Apply Basic Tenses rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Basic Tenses rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Basic Tenses rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Tenses",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Basic Tenses rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Basic Tenses: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Basic Tenses",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Basic Tenses: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Basic Tenses error.",
            "questionSelectionAdvice": "Spend 15 seconds per Basic Tenses question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Basic Tenses is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Basic Tenses rules: Simple Present: habitual action or general truth. Signal words: always, usually, every day.; Present Continuous: ongoing action now. Signal: is/are + V-ing, currently, right now.; Present Perfect: past action with present relevance. Signal: have/has + V3, already, just, yet, ever.",
              "Apply Basic Tenses rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Basic Tenses rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Basic Tenses requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Basic Tenses error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Basic Tenses questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Basic Tenses rules, then check them against the rules.",
            "What is the most common Basic Tenses error in competitive exams? Give an example.",
            "Correct this sentence using Basic Tenses rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Tenses"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Basic Tenses"
            }
          ]
        },
        {
          "id": "y1-verbal-articles",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 25,
          "title": "Articles",
          "tagline": "Year 1 Foundation — Articles Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Articles (a, an, the) are determiners that specify whether a noun refers to a general or specific instance. Choosing the correct article is one of the most frequently tested grammar points in placement verbal sections.",
            "placementRelevance": "Articles questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Articles proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Articles",
            "Identify the correct problem type and method in Articles",
            "Solve Articles questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Articles"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Indefinite Article 'a': before singular countable nouns beginning with consonant sound. 'a book', 'a university' (y-sound).",
              "Indefinite Article 'an': before singular countable nouns beginning with vowel sound. 'an apple', 'an hour' (silent h).",
              "Definite Article 'the': before specific or previously mentioned nouns. 'the sun', 'the book I read yesterday'.",
              "No article (zero article): before plural/uncountable nouns in general sense. 'Dogs are loyal', 'Water is essential'.",
              "Special cases: 'the' before superlatives (the best), before ordinals (the first), before unique things (the President)."
            ],
            "theoreticalIntuition": "Grammar rules in Articles are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Articles, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Articles",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Articles.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Articles questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Articles errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Articles multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Articles by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Articles Traps in Placement Tests",
                "content": "The most common Articles traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Articles in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Articles error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-articles-1",
              "title": "Example 1: Articles Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Articles error."
              ],
              "conceptOrFormula": "Apply Articles rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Articles rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Articles rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Articles",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Articles rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Articles: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Articles",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Articles: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Articles error.",
            "questionSelectionAdvice": "Spend 15 seconds per Articles question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Articles is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Articles rules: Indefinite Article 'a': before singular countable nouns beginning with consonant sound. 'a book', 'a university' (y-sound).; Indefinite Article 'an': before singular countable nouns beginning with vowel sound. 'an apple', 'an hour' (silent h).; Definite Article 'the': before specific or previously mentioned nouns. 'the sun', 'the book I read yesterday'.",
              "Apply Articles rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Articles rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Articles requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Articles error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Articles questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Articles rules, then check them against the rules.",
            "What is the most common Articles error in competitive exams? Give an example.",
            "Correct this sentence using Articles rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Articles"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Articles"
            }
          ]
        },
        {
          "id": "y1-verbal-prepositions",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 26,
          "title": "Prepositions",
          "tagline": "Year 1 Foundation — Prepositions Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Prepositions show spatial, temporal, and logical relationships between a noun/pronoun and other words. Correct preposition usage is tested heavily in error detection and sentence improvement questions.",
            "placementRelevance": "Prepositions questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Prepositions proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Prepositions",
            "Identify the correct problem type and method in Prepositions",
            "Solve Prepositions questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Prepositions"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Time prepositions: at (specific time: at 9 AM), on (day/date: on Monday), in (month/year/period: in March).",
              "Place prepositions: at (point: at the station), on (surface: on the table), in (enclosed space: in the room).",
              "Direction: to, into, onto, toward, from, out of.",
              "Instrument/means: by (means: by train), with (tool: with a hammer).",
              "Fixed preposition idioms: interested in, good at, capable of, responsible for, similar to — these must be memorized."
            ],
            "theoreticalIntuition": "Grammar rules in Prepositions are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Prepositions, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Prepositions",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Prepositions.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Prepositions questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Prepositions errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Prepositions multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Prepositions by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Prepositions Traps in Placement Tests",
                "content": "The most common Prepositions traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Prepositions in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Prepositions error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-prepositions-1",
              "title": "Example 1: Prepositions Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Prepositions error."
              ],
              "conceptOrFormula": "Apply Prepositions rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Prepositions rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Prepositions rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Prepositions",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Prepositions rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Prepositions: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Prepositions",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Prepositions: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Prepositions error.",
            "questionSelectionAdvice": "Spend 15 seconds per Prepositions question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Prepositions is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Prepositions rules: Time prepositions: at (specific time: at 9 AM), on (day/date: on Monday), in (month/year/period: in March).; Place prepositions: at (point: at the station), on (surface: on the table), in (enclosed space: in the room).; Direction: to, into, onto, toward, from, out of.",
              "Apply Prepositions rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Prepositions rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Prepositions requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Prepositions error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Prepositions questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Prepositions rules, then check them against the rules.",
            "What is the most common Prepositions error in competitive exams? Give an example.",
            "Correct this sentence using Prepositions rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Prepositions"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Prepositions"
            }
          ]
        },
        {
          "id": "y1-verbal-subject-verb-agreement",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 27,
          "title": "Subject-Verb Agreement",
          "tagline": "Year 1 Foundation — Subject-Verb Agreement Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Subject-verb agreement requires that the verb matches its subject in number (singular/plural) and person. This is one of the most frequently tested grammar rules in placement verbal ability error detection.",
            "placementRelevance": "Subject-Verb Agreement questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Subject-Verb Agreement proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Subject-Verb Agreement",
            "Identify the correct problem type and method in Subject-Verb Agreement",
            "Solve Subject-Verb Agreement questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Subject-Verb Agreement"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Singular subjects take singular verbs: 'The dog runs.'",
              "Plural subjects take plural verbs: 'The dogs run.'",
              "Compound subjects joined by 'and' take plural verbs: 'Ram and Sita are present.'",
              "With 'either…or' / 'neither…nor': verb agrees with the NEAREST subject.",
              "Collective nouns (team, committee, class): take singular verb when acting as unit.",
              "Intervening phrases (between subject and verb) do not affect agreement: 'The box of chocolates IS on the shelf.'",
              "Each, every, nobody, anyone, someone, no one: always singular."
            ],
            "theoreticalIntuition": "Grammar rules in Subject-Verb Agreement are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Subject-Verb Agreement, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Subject-Verb Agreement",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Subject-Verb Agreement.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Subject-Verb Agreement questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Subject-Verb Agreement errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Subject-Verb Agreement multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Subject-Verb Agreement by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Subject-Verb Agreement Traps in Placement Tests",
                "content": "The most common Subject-Verb Agreement traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Subject-Verb Agreement in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Subject-Verb Agreement error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-agreement-1",
              "title": "Example 1: Subject-Verb Agreement Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Subject-Verb Agreement error."
              ],
              "conceptOrFormula": "Apply Subject-Verb Agreement rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Subject-Verb Agreement rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Subject-Verb Agreement rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Subject-Verb Agreement",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Subject-Verb Agreement rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Subject-Verb Agreement: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Subject-Verb Agreement",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Subject-Verb Agreement: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Subject-Verb Agreement error.",
            "questionSelectionAdvice": "Spend 15 seconds per Subject-Verb Agreement question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Subject-Verb Agreement is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Subject-Verb Agreement rules: Singular subjects take singular verbs: 'The dog runs.'; Plural subjects take plural verbs: 'The dogs run.'; Compound subjects joined by 'and' take plural verbs: 'Ram and Sita are present.'",
              "Apply Subject-Verb Agreement rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Subject-Verb Agreement rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Subject-Verb Agreement requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Subject-Verb Agreement error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Subject-Verb Agreement questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Subject-Verb Agreement rules, then check them against the rules.",
            "What is the most common Subject-Verb Agreement error in competitive exams? Give an example.",
            "Correct this sentence using Subject-Verb Agreement rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Subject-Verb Agreement"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Subject-Verb Agreement"
            }
          ]
        },
        {
          "id": "y1-verbal-basic-vocabulary",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 28,
          "title": "Basic Vocabulary",
          "tagline": "Year 1 Foundation — Basic Vocabulary Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Vocabulary questions test word meanings, context usage, and recognition of word families (noun/verb/adjective forms). A strong foundation vocabulary of 500–1000 high-frequency words dramatically improves performance across all verbal ability sections.",
            "placementRelevance": "Basic Vocabulary questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Basic Vocabulary proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Vocabulary",
            "Identify the correct problem type and method in Basic Vocabulary",
            "Solve Basic Vocabulary questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Vocabulary"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Learn words in word families: persist → persistent → persistence → persistently.",
              "Use context clues: derive meaning from surrounding words when encountering an unknown word.",
              "Root words: 'bene' (good) → benefit, benevolent, benefactor. 'mal' (bad) → malicious, malfunction, malice.",
              "Prefixes: un-, dis-, mis-, non- (negation); pre- (before); re- (again); over-, under- (degree).",
              "Suffixes: -tion/-sion (nouns); -ous/-ful/-less (adjectives); -ly (adverbs); -ize/-en (verbs)."
            ],
            "theoreticalIntuition": "Grammar rules in Basic Vocabulary are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Basic Vocabulary, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Basic Vocabulary",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Basic Vocabulary.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Basic Vocabulary questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Basic Vocabulary errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Basic Vocabulary multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Basic Vocabulary by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Basic Vocabulary Traps in Placement Tests",
                "content": "The most common Basic Vocabulary traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Basic Vocabulary in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Basic Vocabulary error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-vocabulary-1",
              "title": "Example 1: Basic Vocabulary Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Basic Vocabulary error."
              ],
              "conceptOrFormula": "Apply Basic Vocabulary rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Basic Vocabulary rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Basic Vocabulary rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Vocabulary",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Basic Vocabulary rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Basic Vocabulary: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Basic Vocabulary",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Basic Vocabulary: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Basic Vocabulary error.",
            "questionSelectionAdvice": "Spend 15 seconds per Basic Vocabulary question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Basic Vocabulary is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Basic Vocabulary rules: Learn words in word families: persist → persistent → persistence → persistently.; Use context clues: derive meaning from surrounding words when encountering an unknown word.; Root words: 'bene' (good) → benefit, benevolent, benefactor. 'mal' (bad) → malicious, malfunction, malice.",
              "Apply Basic Vocabulary rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Basic Vocabulary rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Basic Vocabulary requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Basic Vocabulary error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Basic Vocabulary questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Basic Vocabulary rules, then check them against the rules.",
            "What is the most common Basic Vocabulary error in competitive exams? Give an example.",
            "Correct this sentence using Basic Vocabulary rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Vocabulary"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Basic Vocabulary"
            }
          ]
        },
        {
          "id": "y1-verbal-synonyms-antonyms",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 29,
          "title": "Synonyms and Antonyms",
          "tagline": "Year 1 Foundation — Synonyms and Antonyms Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Synonyms (similar meaning) and antonyms (opposite meaning) questions test depth of vocabulary. They appear both as direct 'Find the synonym/antonym' questions and embedded in contextual usage problems.",
            "placementRelevance": "Synonyms and Antonyms questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Synonyms and Antonyms proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Synonyms and Antonyms",
            "Identify the correct problem type and method in Synonyms and Antonyms",
            "Solve Synonyms and Antonyms questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Synonyms and Antonyms"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Synonyms are not always interchangeable — context matters. 'Thin' and 'slender' both describe narrow build, but 'slender' is more positive.",
              "Antonyms: must be same part of speech. Antonym of 'brave' (adj) = 'cowardly' (adj), not 'fear' (noun).",
              "Common placement test pairs: Laud↔Censure, Verbose↔Concise, Benevolent↔Malicious, Transient↔Permanent.",
              "Strategy: eliminate options that are the same part of speech but wrong direction (synonym instead of antonym or vice versa)."
            ],
            "theoreticalIntuition": "Grammar rules in Synonyms and Antonyms are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Synonyms and Antonyms, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Synonyms and Antonyms",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Synonyms and Antonyms.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Synonyms and Antonyms questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Synonyms and Antonyms errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Synonyms and Antonyms multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Synonyms and Antonyms by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Synonyms and Antonyms Traps in Placement Tests",
                "content": "The most common Synonyms and Antonyms traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Synonyms and Antonyms in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Synonyms and Antonyms error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-antonyms-1",
              "title": "Example 1: Synonyms and Antonyms Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Synonyms and Antonyms error."
              ],
              "conceptOrFormula": "Apply Synonyms and Antonyms rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Synonyms and Antonyms rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Synonyms and Antonyms rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Synonyms and Antonyms",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Synonyms and Antonyms rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Synonyms and Antonyms: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Synonyms and Antonyms",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Synonyms and Antonyms: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Synonyms and Antonyms error.",
            "questionSelectionAdvice": "Spend 15 seconds per Synonyms and Antonyms question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Synonyms and Antonyms is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Synonyms and Antonyms rules: Synonyms are not always interchangeable — context matters. 'Thin' and 'slender' both describe narrow build, but 'slender' is more positive.; Antonyms: must be same part of speech. Antonym of 'brave' (adj) = 'cowardly' (adj), not 'fear' (noun).; Common placement test pairs: Laud↔Censure, Verbose↔Concise, Benevolent↔Malicious, Transient↔Permanent.",
              "Apply Synonyms and Antonyms rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Synonyms and Antonyms rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Synonyms and Antonyms requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Synonyms and Antonyms error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Synonyms and Antonyms questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Synonyms and Antonyms rules, then check them against the rules.",
            "What is the most common Synonyms and Antonyms error in competitive exams? Give an example.",
            "Correct this sentence using Synonyms and Antonyms rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Synonyms and Antonyms"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Synonyms and Antonyms"
            }
          ]
        },
        {
          "id": "y1-verbal-basic-sentence-correction",
          "yearId": 1,
          "category": "Verbal Ability",
          "topicNumber": 30,
          "title": "Basic Sentence Correction",
          "tagline": "Year 1 Foundation — Basic Sentence Correction Rules and Application",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Sentence correction questions provide a sentence with one or more errors and ask you to identify the correct version. Year 1 errors focus on tense consistency, subject-verb agreement, pronoun reference, and article usage.",
            "placementRelevance": "Basic Sentence Correction questions appear in Infosys, TCS, Cognizant, and Wipro verbal ability sections. These are high-accuracy (easy marks) questions for students who master the rules.",
            "realWorldContext": "Clear grammatical and vocabulary knowledge is essential for professional communication in engineering careers — technical reports, emails, and documentation all require Basic Sentence Correction proficiency."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Sentence Correction",
            "Identify the correct problem type and method in Basic Sentence Correction",
            "Solve Basic Sentence Correction questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Sentence Correction"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Step 1: Read entire sentence to identify the error category.",
              "Step 2: Apply the specific grammar rule. Subject-verb agreement? Tense consistency? Article? Pronoun?",
              "Step 3: Identify the smallest change that fixes the error — the sentence should change minimally.",
              "Step 4: Verify the corrected sentence makes grammatical sense as a whole.",
              "Common errors: singular noun used with plural verb, wrong tense for time reference, wrong article before vowel/consonant sound, pronoun-antecedent mismatch."
            ],
            "theoreticalIntuition": "Grammar rules in Basic Sentence Correction are precise and logical — they do not depend on 'what sounds right'. Always apply the rule mechanically: identify the grammatical element in question, recall the rule, apply it. Never rely solely on auditory judgment.",
            "visualOrMentalModel": "For Basic Sentence Correction, mentally diagram the sentence: identify subject, verb, object/complement. Then verify that each element satisfies the relevant grammatical rule."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Rules of Basic Sentence Correction",
              "formula": "See definitions — each rule applies to a specific grammatical context.",
              "variables": "",
              "description": "Apply the correct rule based on the grammatical element in question.",
              "whenToUse": "Error detection and sentence improvement involving Basic Sentence Correction.",
              "simpleExample": "See definitions for specific examples."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Basic Sentence Correction questions, always read the complete sentence first to understand its meaning, then focus on the underlined or highlighted portion. Many errors are visible only when you understand the full sentence context.",
              "For placement verbal sections, Basic Sentence Correction errors typically fall into 5–6 standard patterns. Memorizing these patterns allows instant error identification without extensive analysis.",
              "In Basic Sentence Correction multiple choice questions, eliminate options that introduce new errors while correcting the original. The correct option should fix the error AND preserve the original meaning.",
              "Practice Basic Sentence Correction by reading high-quality English — newspapers, academic writing. Exposure builds an intuitive sense of correctness that supplements mechanical rule application."
            ],
            "deepDiveAspects": [
              {
                "title": "High-Frequency Basic Sentence Correction Traps in Placement Tests",
                "content": "The most common Basic Sentence Correction traps in TCS, Infosys verbal sections: (1) Agreement errors hidden by intervening phrases. (2) Wrong article before vowel sound vs consonant sound. (3) Tense inconsistency across clauses. (4) Pronoun with ambiguous antecedent. (5) Preposition confusion in idiomatic expressions."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Error Detection",
              "description": "Find the grammatical error related to Basic Sentence Correction in the given sentence.",
              "exampleSnippet": "Identify which underlined portion violates the rule."
            },
            {
              "typeName": "Sentence Improvement",
              "description": "Identify the correct replacement for the underlined Basic Sentence Correction error.",
              "exampleSnippet": "Select from 4 options the version that corrects the error."
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-correction-1",
              "title": "Example 1: Basic Sentence Correction Error Identification",
              "question": "Identify the error in: 'The committee are meeting tomorrow to discuss the budget.'",
              "givenInfo": [
                "Sentence with a Basic Sentence Correction error."
              ],
              "conceptOrFormula": "Apply Basic Sentence Correction rule to identify and correct the error.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Identify grammatical category",
                  "explanation": "Locate the element that potentially violates Basic Sentence Correction rules."
                },
                {
                  "stepNumber": 2,
                  "title": "Apply the rule",
                  "explanation": "Check the element against the specific Basic Sentence Correction rule."
                },
                {
                  "stepNumber": 3,
                  "title": "Correct if needed",
                  "explanation": "Replace the incorrect element with the rule-compliant version."
                }
              ],
              "finalAnswer": "'committee are' should be 'committee is' (collective noun acting as unit = singular verb).",
              "whyItWorks": "Collective nouns like committee, team, class take singular verbs when acting as a unit.",
              "commonTrap": "Assuming 'committee' is plural because it refers to multiple people.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Sentence Correction",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read entire passage to internalize grammar by feel alone.",
              "shortcutMethod": "Apply specific Basic Sentence Correction rule mechanically: identify element → recall rule → apply. Under 20 seconds per question.",
              "timeSavedPercent": "50%"
            },
            "rulesForApplication": [
              "For Basic Sentence Correction: first identify which grammar category the question targets. Then apply that specific rule.",
              "Eliminate options that introduce NEW errors even if they fix the original error.",
              "Read difficult sentences twice — comprehension precedes grammar judgment."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Relying on 'what sounds right' for Basic Sentence Correction",
              "whyItHappens": "Sound-based judgment fails for non-native constructions and formal grammar.",
              "howToAvoid": "Apply the mechanical rule for Basic Sentence Correction: identify element, recall rule, apply."
            },
            {
              "mistake": "Changing sentence meaning while correcting grammar",
              "whyItHappens": "Students overcorrect, altering the intended meaning.",
              "howToAvoid": "Fix ONLY the identified grammatical error. Leave everything else unchanged."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 30,
            "eliminationTechnique": "Eliminate options that change the sentence meaning or introduce a new Basic Sentence Correction error.",
            "questionSelectionAdvice": "Spend 15 seconds per Basic Sentence Correction question. If error is unclear, eliminate options that are obviously wrong and choose among remaining.",
            "recruiterInsight": "Basic Sentence Correction is tested in Infosys Intellect Verbal, TCS English section, and Wipro NTH communication modules."
          },
          "quickRevision": {
            "summaryBullets": [
              "Basic Sentence Correction rules: Step 1: Read entire sentence to identify the error category.; Step 2: Apply the specific grammar rule. Subject-verb agreement? Tense consistency? Article? Pronoun?; Step 3: Identify the smallest change that fixes the error — the sentence should change minimally.",
              "Apply Basic Sentence Correction rules mechanically, not by sound.",
              "In MCQs, eliminate options that introduce new errors or change sentence meaning."
            ],
            "quickFormulas": [
              "Core Basic Sentence Correction rules — see definitions section"
            ]
          },
          "keyTakeaways": [
            "Mastery of Basic Sentence Correction requires memorizing the rules, not just recognizing correct sentences by feel.",
            "Practice 5 Basic Sentence Correction error detection sentences daily for 2 weeks to build reflexive recognition.",
            "In placement tests, Basic Sentence Correction questions are among the highest-accuracy marks available — never lose these."
          ],
          "selfCheckQuestions": [
            "Write 5 original sentences testing Basic Sentence Correction rules, then check them against the rules.",
            "What is the most common Basic Sentence Correction error in competitive exams? Give an example.",
            "Correct this sentence using Basic Sentence Correction rules: 'Each of the boys have submitted their assignment.'"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "High School English Grammar — Wren & Martin",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Sentence Correction"
            },
            {
              "sourceName": "Objective English — R.S. Aggarwal",
              "sourceType": "Reference",
              "referenceNote": "Chapter: Basic Sentence Correction"
            }
          ]
        }
      ]
    },
    {
      "category": "Data Interpretation",
      "description": "Data Interpretation for Year 1 Foundation",
      "topics": [
        {
          "id": "y1-data-reading-tables",
          "yearId": 1,
          "category": "Data Interpretation",
          "topicNumber": 31,
          "title": "Reading Data Tables",
          "tagline": "Year 1 Foundation — Reading Data Tables from Raw Data",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Data tables present information in rows and columns. Reading tables correctly means identifying the right row, right column, and right cell — then performing the minimal arithmetic needed. Speed and accuracy depend on careful cell identification, not complex math.",
            "placementRelevance": "Reading Data Tables questions form 15–25% of quantitative sections in TCS, Infosys, and Wipro placements. Accuracy and speed of data reading directly determine your DI score.",
            "realWorldContext": "Data analysis from tables and charts is the core skill in data engineering, business analytics, and reporting roles — the very roles targeted by RIET CSE graduates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Reading Data Tables",
            "Identify the correct problem type and method in Reading Data Tables",
            "Solve Reading Data Tables questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Reading Data Tables"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Row: horizontal sequence of data in a table. Column: vertical sequence.",
              "Cell: intersection of specific row and column — contains one data value.",
              "Row total: sum of all values in one row. Column total: sum of all values in one column.",
              "Grand total: sum of all row or column totals.",
              "Percentage from table: (specific cell / row total or column total) × 100."
            ],
            "theoreticalIntuition": "In Reading Data Tables, the arithmetic is usually simple — addition, subtraction, or percentage. The challenge is reading the correct value. Develop the habit of cross-referencing row headers AND column headers before noting any value.",
            "visualOrMentalModel": "For Reading Data Tables, always skim the entire data set in 20–30 seconds before reading questions. Build a mental map of where maximum and minimum values are — many questions ask for these without needing full calculation."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Reading Technique for Reading Data Tables",
              "formula": "Value = Cell at (row R) ∩ (column C)",
              "variables": "",
              "description": "Precisely identify row and column, then read the intersection cell value.",
              "whenToUse": "All {title} questions.",
              "simpleExample": "For 'Sales in Region B during Q3', find row B and column Q3, read their intersection."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Reading Data Tables questions, read the title, units, and axis labels BEFORE examining the questions. Misunderstanding units (thousands vs millions, absolute vs percentage) is the single most common error in DI.",
              "Many Reading Data Tables questions ask for 'approximately' — this is your invitation to use rounded values. Round aggressively (to nearest 10 or 100) to speed up computation while maintaining enough precision for MCQ elimination.",
              "For percentage-based Reading Data Tables questions: if the question asks 'what percentage of total does X represent', compute X/Total × 100. If total is not directly given, sum up the relevant column or row first.",
              "In Reading Data Tables comparison questions: before calculating, estimate visually. If one value is clearly much larger, select without computation. Only compute when values are close (within 10–15% of each other)."
            ],
            "deepDiveAspects": [
              {
                "title": "Most Common Question Types in Reading Data Tables",
                "content": "In Reading Data Tables: (1) Read specific value. (2) Find maximum or minimum. (3) Compute difference between two values. (4) Express one value as percentage of another. (5) Find ratio of two values. (6) Compute average of a row or column. Types 1–3 require only reading. Types 4–6 require one arithmetic step."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Value Reading",
              "description": "Read a specific data value from the Reading Data Tables set.",
              "exampleSnippet": "In the given table, what were total sales in 2019?"
            },
            {
              "typeName": "Percentage Computation",
              "description": "Express one data value as a percentage of another in Reading Data Tables.",
              "exampleSnippet": "What percentage of total annual sales does Q2 represent?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-tables-1",
              "title": "Example 1: Reading from Reading Data Tables",
              "question": "From the given data set, answer a specific Reading Data Tables question.",
              "givenInfo": [
                "Refer to the {title} set provided in the LMS."
              ],
              "conceptOrFormula": "Identify correct data cell → read value → apply required arithmetic.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Read title and labels",
                  "explanation": "Understand what the Reading Data Tables set represents and the units of measurement."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify required data point",
                  "explanation": "Cross-reference row and column headers to find exact cell."
                },
                {
                  "stepNumber": 3,
                  "title": "Compute required metric",
                  "explanation": "Apply minimal arithmetic (ratio, percentage, or sum)."
                }
              ],
              "finalAnswer": "Correct value from the Reading Data Tables data set.",
              "whyItWorks": "Accurate data reading is the foundational skill in Reading Data Tables — all computation depends on reading the right value.",
              "commonTrap": "Reading the wrong row or column because of misidentifying the label.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Reading Data Tables",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read all data values before attempting questions.",
              "shortcutMethod": "Read only the values needed for each specific question. Skip irrelevant data.",
              "timeSavedPercent": "40%"
            },
            "rulesForApplication": [
              "Skim the full Reading Data Tables set in 30 seconds to map max, min, and approximate ranges.",
              "For approximate questions, round values to nearest 10 or 100 before computing.",
              "In multiple-question DI sets, answer questions in order of simplest (direct read) to hardest (multi-step)."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misreading column/row labels",
              "whyItHappens": "In hurry, students pick adjacent column's value.",
              "howToAvoid": "Always verify BOTH row AND column labels before reading any cell value."
            },
            {
              "mistake": "Ignoring units",
              "whyItHappens": "Forgetting whether values are in thousands, lakhs, or millions.",
              "howToAvoid": "Read units from the table header/footnote at the start. Apply units to ALL values consistently."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "For percentage questions: estimate using round numbers first. Eliminate options that are impossibly large or small.",
            "questionSelectionAdvice": "In DI sets with 5 questions, spend first 30 seconds understanding the data, then 45 seconds per question.",
            "recruiterInsight": "Reading Data Tables is a mandatory section in TCS NQT, Infosys Intellect, and all major company assessments. High-scorers typically solve 4/5 DI questions correctly."
          },
          "quickRevision": {
            "summaryBullets": [
              "Read title and units FIRST before looking at Reading Data Tables questions.",
              "DI operations in Year 1: direct read, compare, ratio, percentage, average.",
              "Approximate aggressively for 'approximately' questions — round to nearest 10/100."
            ],
            "quickFormulas": [
              "Percentage: (part/total)×100",
              "Ratio: value A / value B",
              "Average: sum / count"
            ]
          },
          "keyTakeaways": [
            "Accuracy in Reading Data Tables depends on data reading discipline — always verify row AND column label.",
            "Speed comes from pre-mapping the data set before reading questions.",
            "Never compute more precision than needed — most DI MCQs are distinguishable with rounded values."
          ],
          "selfCheckQuestions": [
            "Practice reading one Reading Data Tables table set daily for 1 week.",
            "How do you decide when to approximate vs compute exactly in DI?",
            "What is the most common error in DI and how do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Data Interpretation — Arun Sharma",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Reading Data Tables"
            },
            {
              "sourceName": "Logical Reasoning & DI — Nishit K. Sinha",
              "sourceType": "Reference",
              "referenceNote": "Section: Reading Data Tables"
            }
          ]
        },
        {
          "id": "y1-data-basic-charts",
          "yearId": 1,
          "category": "Data Interpretation",
          "topicNumber": 32,
          "title": "Basic Charts (Bar and Pie)",
          "tagline": "Year 1 Foundation — Basic Charts (Bar and Pie) from Raw Data",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Bar charts and pie charts are the two most common visual data formats in placement aptitude tests. Bar charts compare quantities across categories. Pie charts show proportions (percentages) of a whole.",
            "placementRelevance": "Basic Charts (Bar and Pie) questions form 15–25% of quantitative sections in TCS, Infosys, and Wipro placements. Accuracy and speed of data reading directly determine your DI score.",
            "realWorldContext": "Data analysis from tables and charts is the core skill in data engineering, business analytics, and reporting roles — the very roles targeted by RIET CSE graduates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Charts (Bar and Pie)",
            "Identify the correct problem type and method in Basic Charts (Bar and Pie)",
            "Solve Basic Charts (Bar and Pie) questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Charts (Bar and Pie)"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Bar chart: height of each bar represents the value of that category. Read height from the y-axis.",
              "Grouped bar chart: multiple bars per category allow comparison of multiple variables.",
              "Pie chart: each sector's angle = (category value / total) × 360°. Each sector's area is proportional to its fraction.",
              "Reading pie charts: percent given directly, or compute as sector angle / 360 × 100%.",
              "Common questions: compare two bars, find percentage a bar represents, find absolute value from pie sector."
            ],
            "theoreticalIntuition": "In Basic Charts (Bar and Pie), the arithmetic is usually simple — addition, subtraction, or percentage. The challenge is reading the correct value. Develop the habit of cross-referencing row headers AND column headers before noting any value.",
            "visualOrMentalModel": "For Basic Charts (Bar and Pie), always skim the entire data set in 20–30 seconds before reading questions. Build a mental map of where maximum and minimum values are — many questions ask for these without needing full calculation."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Reading Technique for Basic Charts (Bar and Pie)",
              "formula": "Value = Cell at (row R) ∩ (column C)",
              "variables": "",
              "description": "Precisely identify row and column, then read the intersection cell value.",
              "whenToUse": "All {title} questions.",
              "simpleExample": "For 'Sales in Region B during Q3', find row B and column Q3, read their intersection."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Basic Charts (Bar and Pie) questions, read the title, units, and axis labels BEFORE examining the questions. Misunderstanding units (thousands vs millions, absolute vs percentage) is the single most common error in DI.",
              "Many Basic Charts (Bar and Pie) questions ask for 'approximately' — this is your invitation to use rounded values. Round aggressively (to nearest 10 or 100) to speed up computation while maintaining enough precision for MCQ elimination.",
              "For percentage-based Basic Charts (Bar and Pie) questions: if the question asks 'what percentage of total does X represent', compute X/Total × 100. If total is not directly given, sum up the relevant column or row first.",
              "In Basic Charts (Bar and Pie) comparison questions: before calculating, estimate visually. If one value is clearly much larger, select without computation. Only compute when values are close (within 10–15% of each other)."
            ],
            "deepDiveAspects": [
              {
                "title": "Most Common Question Types in Basic Charts (Bar and Pie)",
                "content": "In Basic Charts (Bar and Pie): (1) Read specific value. (2) Find maximum or minimum. (3) Compute difference between two values. (4) Express one value as percentage of another. (5) Find ratio of two values. (6) Compute average of a row or column. Types 1–3 require only reading. Types 4–6 require one arithmetic step."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Value Reading",
              "description": "Read a specific data value from the Basic Charts (Bar and Pie) set.",
              "exampleSnippet": "In the given table, what were total sales in 2019?"
            },
            {
              "typeName": "Percentage Computation",
              "description": "Express one data value as a percentage of another in Basic Charts (Bar and Pie).",
              "exampleSnippet": "What percentage of total annual sales does Q2 represent?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-charts-1",
              "title": "Example 1: Reading from Basic Charts (Bar and Pie)",
              "question": "From the given data set, answer a specific Basic Charts (Bar and Pie) question.",
              "givenInfo": [
                "Refer to the {title} set provided in the LMS."
              ],
              "conceptOrFormula": "Identify correct data cell → read value → apply required arithmetic.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Read title and labels",
                  "explanation": "Understand what the Basic Charts (Bar and Pie) set represents and the units of measurement."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify required data point",
                  "explanation": "Cross-reference row and column headers to find exact cell."
                },
                {
                  "stepNumber": 3,
                  "title": "Compute required metric",
                  "explanation": "Apply minimal arithmetic (ratio, percentage, or sum)."
                }
              ],
              "finalAnswer": "Correct value from the Basic Charts (Bar and Pie) data set.",
              "whyItWorks": "Accurate data reading is the foundational skill in Basic Charts (Bar and Pie) — all computation depends on reading the right value.",
              "commonTrap": "Reading the wrong row or column because of misidentifying the label.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Charts (Bar and Pie)",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read all data values before attempting questions.",
              "shortcutMethod": "Read only the values needed for each specific question. Skip irrelevant data.",
              "timeSavedPercent": "40%"
            },
            "rulesForApplication": [
              "Skim the full Basic Charts (Bar and Pie) set in 30 seconds to map max, min, and approximate ranges.",
              "For approximate questions, round values to nearest 10 or 100 before computing.",
              "In multiple-question DI sets, answer questions in order of simplest (direct read) to hardest (multi-step)."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misreading column/row labels",
              "whyItHappens": "In hurry, students pick adjacent column's value.",
              "howToAvoid": "Always verify BOTH row AND column labels before reading any cell value."
            },
            {
              "mistake": "Ignoring units",
              "whyItHappens": "Forgetting whether values are in thousands, lakhs, or millions.",
              "howToAvoid": "Read units from the table header/footnote at the start. Apply units to ALL values consistently."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "For percentage questions: estimate using round numbers first. Eliminate options that are impossibly large or small.",
            "questionSelectionAdvice": "In DI sets with 5 questions, spend first 30 seconds understanding the data, then 45 seconds per question.",
            "recruiterInsight": "Basic Charts (Bar and Pie) is a mandatory section in TCS NQT, Infosys Intellect, and all major company assessments. High-scorers typically solve 4/5 DI questions correctly."
          },
          "quickRevision": {
            "summaryBullets": [
              "Read title and units FIRST before looking at Basic Charts (Bar and Pie) questions.",
              "DI operations in Year 1: direct read, compare, ratio, percentage, average.",
              "Approximate aggressively for 'approximately' questions — round to nearest 10/100."
            ],
            "quickFormulas": [
              "Percentage: (part/total)×100",
              "Ratio: value A / value B",
              "Average: sum / count"
            ]
          },
          "keyTakeaways": [
            "Accuracy in Basic Charts (Bar and Pie) depends on data reading discipline — always verify row AND column label.",
            "Speed comes from pre-mapping the data set before reading questions.",
            "Never compute more precision than needed — most DI MCQs are distinguishable with rounded values."
          ],
          "selfCheckQuestions": [
            "Practice reading one Basic Charts (Bar and Pie) table set daily for 1 week.",
            "How do you decide when to approximate vs compute exactly in DI?",
            "What is the most common error in DI and how do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Data Interpretation — Arun Sharma",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Charts (Bar and Pie)"
            },
            {
              "sourceName": "Logical Reasoning & DI — Nishit K. Sinha",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Charts (Bar and Pie)"
            }
          ]
        },
        {
          "id": "y1-data-basic-di",
          "yearId": 1,
          "category": "Data Interpretation",
          "topicNumber": 33,
          "title": "Basic Data Interpretation Sets",
          "tagline": "Year 1 Foundation — Basic Data Interpretation Sets from Raw Data",
          "estimatedMinutes": 40,
          "difficulty": "Foundation",
          "introduction": {
            "overview": "Data interpretation (DI) questions present a data set (table, bar chart, pie chart, or line graph) followed by 4–5 questions about that data. Year 1 DI sets involve only single-step reading or simple arithmetic on clearly given values.",
            "placementRelevance": "Basic Data Interpretation Sets questions form 15–25% of quantitative sections in TCS, Infosys, and Wipro placements. Accuracy and speed of data reading directly determine your DI score.",
            "realWorldContext": "Data analysis from tables and charts is the core skill in data engineering, business analytics, and reporting roles — the very roles targeted by RIET CSE graduates."
          },
          "learningObjectives": [
            "Understand and apply core principles of Basic Data Interpretation Sets",
            "Identify the correct problem type and method in Basic Data Interpretation Sets",
            "Solve Basic Data Interpretation Sets questions within 45–60 seconds using shortcuts",
            "Avoid common calculation traps in Basic Data Interpretation Sets"
          ],
          "prerequisiteKnowledge": {
            "requiredTopics": [
              "Basic arithmetic operations",
              "Elementary algebra"
            ],
            "quickRefresher": "Review fraction simplification, multiplication tables 1–20, and basic equation solving."
          },
          "conceptExplanation": {
            "coreDefinitions": [
              "Step 1: Read the chart/table title and axis labels before looking at questions.",
              "Step 2: Scan the overall data range to build intuition about magnitudes.",
              "Step 3: For each question, identify exactly which cells or values are needed.",
              "Step 4: Perform only the required arithmetic — avoid reading unnecessary values.",
              "Common operation types: find the value, compare two values, compute ratio, compute percentage, find the largest/smallest."
            ],
            "theoreticalIntuition": "In Basic Data Interpretation Sets, the arithmetic is usually simple — addition, subtraction, or percentage. The challenge is reading the correct value. Develop the habit of cross-referencing row headers AND column headers before noting any value.",
            "visualOrMentalModel": "For Basic Data Interpretation Sets, always skim the entire data set in 20–30 seconds before reading questions. Build a mental map of where maximum and minimum values are — many questions ask for these without needing full calculation."
          },
          "importantRulesAndFormulas": [
            {
              "title": "Core Reading Technique for Basic Data Interpretation Sets",
              "formula": "Value = Cell at (row R) ∩ (column C)",
              "variables": "",
              "description": "Precisely identify row and column, then read the intersection cell value.",
              "whenToUse": "All {title} questions.",
              "simpleExample": "For 'Sales in Region B during Q3', find row B and column Q3, read their intersection."
            }
          ],
          "detailedExplanation": {
            "mainNarrative": [
              "In Basic Data Interpretation Sets questions, read the title, units, and axis labels BEFORE examining the questions. Misunderstanding units (thousands vs millions, absolute vs percentage) is the single most common error in DI.",
              "Many Basic Data Interpretation Sets questions ask for 'approximately' — this is your invitation to use rounded values. Round aggressively (to nearest 10 or 100) to speed up computation while maintaining enough precision for MCQ elimination.",
              "For percentage-based Basic Data Interpretation Sets questions: if the question asks 'what percentage of total does X represent', compute X/Total × 100. If total is not directly given, sum up the relevant column or row first.",
              "In Basic Data Interpretation Sets comparison questions: before calculating, estimate visually. If one value is clearly much larger, select without computation. Only compute when values are close (within 10–15% of each other)."
            ],
            "deepDiveAspects": [
              {
                "title": "Most Common Question Types in Basic Data Interpretation Sets",
                "content": "In Basic Data Interpretation Sets: (1) Read specific value. (2) Find maximum or minimum. (3) Compute difference between two values. (4) Express one value as percentage of another. (5) Find ratio of two values. (6) Compute average of a row or column. Types 1–3 require only reading. Types 4–6 require one arithmetic step."
              }
            ]
          },
          "problemVariations": [
            {
              "typeName": "Direct Value Reading",
              "description": "Read a specific data value from the Basic Data Interpretation Sets set.",
              "exampleSnippet": "In the given table, what were total sales in 2019?"
            },
            {
              "typeName": "Percentage Computation",
              "description": "Express one data value as a percentage of another in Basic Data Interpretation Sets.",
              "exampleSnippet": "What percentage of total annual sales does Q2 represent?"
            }
          ],
          "solvedExamples": [
            {
              "id": "ex-y1-di-1",
              "title": "Example 1: Reading from Basic Data Interpretation Sets",
              "question": "From the given data set, answer a specific Basic Data Interpretation Sets question.",
              "givenInfo": [
                "Refer to the {title} set provided in the LMS."
              ],
              "conceptOrFormula": "Identify correct data cell → read value → apply required arithmetic.",
              "steps": [
                {
                  "stepNumber": 1,
                  "title": "Read title and labels",
                  "explanation": "Understand what the Basic Data Interpretation Sets set represents and the units of measurement."
                },
                {
                  "stepNumber": 2,
                  "title": "Identify required data point",
                  "explanation": "Cross-reference row and column headers to find exact cell."
                },
                {
                  "stepNumber": 3,
                  "title": "Compute required metric",
                  "explanation": "Apply minimal arithmetic (ratio, percentage, or sum)."
                }
              ],
              "finalAnswer": "Correct value from the Basic Data Interpretation Sets data set.",
              "whyItWorks": "Accurate data reading is the foundational skill in Basic Data Interpretation Sets — all computation depends on reading the right value.",
              "commonTrap": "Reading the wrong row or column because of misidentifying the label.",
              "difficulty": "Foundation"
            }
          ],
          "shortcutMethods": {
            "title": "Speed Shortcuts for Basic Data Interpretation Sets",
            "traditionalVsShortcut": {
              "traditionalMethod": "Read all data values before attempting questions.",
              "shortcutMethod": "Read only the values needed for each specific question. Skip irrelevant data.",
              "timeSavedPercent": "40%"
            },
            "rulesForApplication": [
              "Skim the full Basic Data Interpretation Sets set in 30 seconds to map max, min, and approximate ranges.",
              "For approximate questions, round values to nearest 10 or 100 before computing.",
              "In multiple-question DI sets, answer questions in order of simplest (direct read) to hardest (multi-step)."
            ]
          },
          "commonMistakes": [
            {
              "mistake": "Misreading column/row labels",
              "whyItHappens": "In hurry, students pick adjacent column's value.",
              "howToAvoid": "Always verify BOTH row AND column labels before reading any cell value."
            },
            {
              "mistake": "Ignoring units",
              "whyItHappens": "Forgetting whether values are in thousands, lakhs, or millions.",
              "howToAvoid": "Read units from the table header/footnote at the start. Apply units to ALL values consistently."
            }
          ],
          "placementTips": {
            "timeAllocationSeconds": 45,
            "eliminationTechnique": "For percentage questions: estimate using round numbers first. Eliminate options that are impossibly large or small.",
            "questionSelectionAdvice": "In DI sets with 5 questions, spend first 30 seconds understanding the data, then 45 seconds per question.",
            "recruiterInsight": "Basic Data Interpretation Sets is a mandatory section in TCS NQT, Infosys Intellect, and all major company assessments. High-scorers typically solve 4/5 DI questions correctly."
          },
          "quickRevision": {
            "summaryBullets": [
              "Read title and units FIRST before looking at Basic Data Interpretation Sets questions.",
              "DI operations in Year 1: direct read, compare, ratio, percentage, average.",
              "Approximate aggressively for 'approximately' questions — round to nearest 10/100."
            ],
            "quickFormulas": [
              "Percentage: (part/total)×100",
              "Ratio: value A / value B",
              "Average: sum / count"
            ]
          },
          "keyTakeaways": [
            "Accuracy in Basic Data Interpretation Sets depends on data reading discipline — always verify row AND column label.",
            "Speed comes from pre-mapping the data set before reading questions.",
            "Never compute more precision than needed — most DI MCQs are distinguishable with rounded values."
          ],
          "selfCheckQuestions": [
            "Practice reading one Basic Data Interpretation Sets table set daily for 1 week.",
            "How do you decide when to approximate vs compute exactly in DI?",
            "What is the most common error in DI and how do you prevent it?"
          ],
          "sourcesAndReferences": [
            {
              "sourceName": "Data Interpretation — Arun Sharma",
              "sourceType": "Textbook",
              "referenceNote": "Chapter: Basic Data Interpretation Sets"
            },
            {
              "sourceName": "Logical Reasoning & DI — Nishit K. Sinha",
              "sourceType": "Reference",
              "referenceNote": "Section: Basic Data Interpretation Sets"
            }
          ]
        }
      ]
    }
  ]
};
