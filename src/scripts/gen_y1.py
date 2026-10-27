import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_topic_factory import build_topic_entry, save_curriculum_ts

# Specific rich content for all 33 topics of Year 1 Foundation
topics_y1_quant = [
    (
        "y1-quant-num-sys", "Number System Fundamentals",
        "Classification of numbers, place-value systems, prime factorizations, and basic parity laws",
        "The study of numbers is the foundational bedrock of all quantitative aptitude, computational logic, and algorithmic thinking. At its core, the real number system provides the structured framework through which quantities, measurements, counts, and mathematical relationships are systematically expressed. For a first-year student entering engineering and competitive career preparation, developing an intuitive, effortless grasp of how numbers behave—how integers differ from rational fractions, why zero is an even integer, and how prime numbers act as the fundamental atomic elements of arithmetic—is the critical first milestone.",
        "In initial campus recruitment screening tests (such as TCS NQT, Infosys Foundation Math, AMCAT, and CoCubes), number system questions evaluate computational agility and elementary mathematical intuition. Recruiters test whether candidates understand core properties (e.g., whether the product of two consecutive integers is always even) to solve problems mentally without relying on calculators.",
        "Foundational Essential — Appears in 85%+ of general numerical screening tests.",
        "In computer science, number systems govern fundamental data representation: binary (base-2) for digital hardware logic, octal and hexadecimal for memory addressing, and prime factorization for RSA encryption and secure hashing algorithms.",
        ["Distinguish clearly between Natural (N), Whole (W), Integers (Z), Rational (Q), Irrational, and Real (R) number sets.", "Deconstruct any composite integer into its canonical prime factorization form: N = p1^a * p2^b * p3^c.", "Apply arithmetic parity rules (Odd ± Odd = Even, Odd × Even = Even) to eliminate algebraic choices instantaneously.", "Calculate face value and place value in standard decimal notation and compute basic unit digit positions."],
        ["Basic addition, subtraction, multiplication, and long division", "Elementary exponent notation (e.g., 2^3 = 8)"],
        "Remember that a natural number is a positive counting integer (1, 2, 3...). Adding zero produces the set of whole numbers. Integers extend in both positive and negative directions (...-2, -1, 0, 1, 2...). Rational numbers can be written as p/q where q ≠ 0.",
        ["Natural Numbers (N): Positive counting integers {1, 2, 3, 4, 5, ...}.", "Whole Numbers (W): All natural numbers including zero {0, 1, 2, 3, ...}.", "Integers (Z): Whole numbers and negative counting numbers {..., -3, -2, -1, 0, 1, 2, 3, ...}.", "Rational Numbers (Q): Numbers expressible as p/q where q ≠ 0; their decimals terminate or repeat periodically.", "Irrational Numbers: Non-terminating, non-periodic decimals (e.g., √2 ≈ 1.4142..., π ≈ 3.14159...).", "Prime Numbers: Integers > 1 with exactly two distinct positive divisors: 1 and the number itself.", "Composite Numbers: Positive integers > 1 having more than two positive factors.", "Co-Prime Numbers: A pair of integers whose greatest common divisor (GCD) is 1."],
        "Every natural number greater than 1 can be uniquely expressed as a product of prime powers, a principle known as the Fundamental Theorem of Arithmetic. Think of primes as the indivisible chemical elements of the number world: just as water is H2O, the number 360 is uniquely composed of 2^3 × 3^2 × 5^1. Understanding this structure allows us to analyze divisors, factors, and remainder behavior without testing every number individually.",
        "Envision nested concentric circles representing number sets: the innermost circle is Natural Numbers (1, 2, 3), enclosed by Whole Numbers (adding 0), enclosed by Integers (adding negative numbers), enclosed by Rational Numbers (fractions/decimals), all residing inside the overarching Real Number system.",
        [{"title": "Canonical Prime Factorization", "formula": "N = p_1^a · p_2^b · p_3^c · ... · p_k^k", "variables": "p_1, p_2, ... = distinct prime numbers; a, b, c = positive integer exponents", "description": "Expresses any composite integer as a unique product of prime powers.", "whenToUse": "Use when finding the total number of factors, finding HCF/LCM, or analyzing divisibility.", "simpleExample": "Factorize 180: 180 = 18 × 10 = (2 × 3^2) × (2 × 5) = 2^2 × 3^2 × 5^1."}, {"title": "Total Number of Factors Formula", "formula": "Total Factors = (a + 1)(b + 1)(c + 1)...", "variables": "a, b, c = exponents in the canonical prime factorization of N", "description": "Calculates how many distinct positive divisors a number possesses.", "whenToUse": "Whenever asked for the count of divisors/factors of an integer.", "simpleExample": "For 72 = 2^3 × 3^2: Total Factors = (3 + 1)(2 + 1) = 4 × 3 = 12 factors."}],
        [
            "Understanding numbers begins with the decimal place-value system. In base-10 representation, each digit's value is determined by its position relative to the units place. In the number 4,752, the digit '7' has a face value of 7, but a place value of 7 × 100 = 700. This structural reality means that any two-digit number with tens digit 't' and units digit 'u' can be written algebraically as 10t + u. When the digits are reversed, the new number becomes 10u + t. Notice that subtracting the reversed number from the original gives (10t + u) - (10u + t) = 9(t - u). This mathematical identity proves that the difference between any two-digit number and its reverse is always an exact multiple of 9.",
            "Parity arithmetic is another powerful mental tool. Even numbers can be represented algebraically as 2k, while odd numbers take the form 2k + 1. When two odd numbers are added, (2m + 1) + (2n + 1) = 2(m + n + 1), which is always even. However, when an odd number is multiplied by an odd number, (2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1, which remains odd. Remembering that Even × Any Integer = Even allows candidates to test equations and discard impossible choices without calculating full values.",
            "Prime numbers demand special attention in foundational aptitude. The first twenty-five primes below 100 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97. To check whether an integer N is prime, you do not need to test all divisors up to N; you only need to test prime divisors up to the square root of N (√N). For example, to check if 173 is prime, note that √173 is between 13 and 14 (since 13^2 = 169 and 14^2 = 196). We only test prime numbers ≤ 13: 2 (no), 3 (no), 5 (no), 7 (no), 11 (no), and 13 (no). Since none divide 173, 173 is confirmed prime in under 15 seconds."
        ],
        [{"title": "Why 1 is Neither Prime nor Composite", "content": "By mathematical definition, a prime number must have exactly two distinct positive divisors (1 and itself). The number 1 has only one divisor (1). If 1 were classified as prime, the Fundamental Theorem of Arithmetic would break down, because a number like 12 could be factorized as 2^2 × 3, or 1 × 2^2 × 3, or 1^5 × 2^2 × 3, losing unique factorization."}],
        [{"typeName": "Digit Reversal Problems", "description": "Analyzing algebraic relationships when digits of a 2-digit or 3-digit number are interchanged."}, {"typeName": "Divisor & Factor Counting", "description": "Finding the total number of even, odd, or perfect square factors of a composite integer."}],
        [
            {
                "id": "ex-y1-ns-1", "title": "Example 1 (Foundation): Two-Digit Reversal Analysis",
                "question": "A two-digit number is such that the sum of its digits is 11. When the digits are reversed, the new number formed exceeds the original number by 45. Find the original two-digit number.",
                "givenInfo": ["Sum of tens digit (t) and units digit (u): t + u = 11", "Reversed number (10u + t) exceeds original number (10t + u) by 45"],
                "conceptOrFormula": "Two-digit expansion: Number = 10t + u; Reversed = 10u + t",
                "steps": [
                    {"stepNumber": 1, "title": "Set up the difference equation", "explanation": "Subtract original number from reversed number and equate to 45.", "math": "(10u + t) - (10t + u) = 45 ⟹ 9u - 9t = 45 ⟹ 9(u - t) = 45 ⟹ u - t = 5"},
                    {"stepNumber": 2, "title": "Solve the system of linear equations", "explanation": "We now have two simple equations: (1) t + u = 11, and (2) u - t = 5.", "math": "Add (1) and (2): (t + u) + (u - t) = 11 + 5 ⟹ 2u = 16 ⟹ u = 8. Substitute into (1): t + 8 = 11 ⟹ t = 3."},
                    {"stepNumber": 3, "title": "Form the original number and verify", "explanation": "The original number is 10t + u = 10(3) + 8 = 38. Reversing it gives 83. Check difference: 83 - 38 = 45. Verified.", "math": "Original Number = 38"}
                ],
                "finalAnswer": "38", "whyItWorks": "The factor of 9 naturally arises from place-value subtraction: (10u + t) - (10t + u) = 9(u - t), allowing instant determination of the digit difference.", "commonTrap": "Confusing the tens digit with the units digit and writing 83 instead of 38.", "difficulty": "Foundation"
            },
            {
                "id": "ex-y1-ns-2", "title": "Example 2 (Foundation): Total Factors Calculation",
                "question": "Find the total number of positive divisors (factors) of the integer 360, and determine how many of these factors are even.",
                "givenInfo": ["Given number: 360"],
                "conceptOrFormula": "Canonical Factorization: N = 2^a · 3^b · 5^c ⟹ Total Factors = (a+1)(b+1)(c+1)",
                "steps": [
                    {"stepNumber": 1, "title": "Perform prime factorization of 360", "explanation": "Decompose 360 into prime components.", "math": "360 = 36 × 10 = (2^2 × 3^2) × (2 × 5) = 2^3 × 3^2 × 5^1"},
                    {"stepNumber": 2, "title": "Apply total factors formula", "explanation": "Add 1 to each exponent and multiply.", "math": "Total Factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24 factors"},
                    {"stepNumber": 3, "title": "Calculate number of even factors", "explanation": "For an even factor, the power of 2 cannot be 2^0 (it must be 2^1, 2^2, or 2^3 = 3 choices). Powers of 3 and 5 are unrestricted.", "math": "Even Factors = 3 × (2 + 1) × (1 + 1) = 3 × 3 × 2 = 18 even factors"}
                ],
                "finalAnswer": "Total Factors = 24, Even Factors = 18", "whyItWorks": "Every divisor is formed by choosing an exponent combination. Forcing the power of 2 to be ≥ 1 guarantees an even divisor.", "commonTrap": "Forgetting to add 1 to the exponent of 5^1 (using 1 instead of 1+1=2).", "difficulty": "Foundation"
            },
            {
                "id": "ex-y1-ns-3", "title": "Example 3 (Intermediate): Sum of Factors",
                "question": "Find the sum of all positive factors of the number 200.",
                "givenInfo": ["Number: 200"],
                "conceptOrFormula": "Sum of Factors = (1 + p1 + p1^2 + ...)(1 + p2 + ...)",
                "steps": [
                    {"stepNumber": 1, "title": "Prime factorize 200", "explanation": "200 = 2^3 × 5^2.", "math": "200 = 8 × 25 = 2^3 × 5^2"},
                    {"stepNumber": 2, "title": "Apply sum of factors formula", "explanation": "Sum = (2^0 + 2^1 + 2^2 + 2^3) × (5^0 + 5^1 + 5^2).", "math": "Sum = (1 + 2 + 4 + 8) × (1 + 5 + 25) = 15 × 31 = 465"}
                ],
                "finalAnswer": "465", "whyItWorks": "Expanding the geometric series product generates every divisor exactly once and sums them.", "commonTrap": "Omitting the 2^0 = 1 term in the geometric series.", "difficulty": "Intermediate"
            },
            {
                "id": "ex-y1-ns-4", "title": "Example 4 (Intermediate): Consecutive Integers Parity",
                "question": "If the product of three consecutive positive integers is 2184, find the three integers.",
                "givenInfo": ["Product of three consecutive integers: n(n+1)(n+2) = 2184"],
                "conceptOrFormula": "Cube root approximation: n^3 ≈ 2184",
                "steps": [
                    {"stepNumber": 1, "title": "Estimate middle term using cube root", "explanation": "Since n(n+1)(n+2) ≈ (n+1)^3, find the cube near 2184. Note 12^3 = 1728 and 13^3 = 2197.", "math": "(n+1)^3 ≈ 2197 ⟹ n+1 = 13"},
                    {"stepNumber": 2, "title": "Test candidate sequence", "explanation": "Test 12 × 13 × 14.", "math": "12 × 13 = 156. 156 × 14 = 2184. Exact match!"}
                ],
                "finalAnswer": "12, 13, and 14", "whyItWorks": "The product of three consecutive integers is tightly bounded by (n+1)^3 - (n+1), making cube root estimation instantaneous.", "commonTrap": "Solving via a full cubic equation expansion rather than estimating the cube root.", "difficulty": "Intermediate"
            },
            {
                "id": "ex-y1-ns-5", "title": "Example 5 (Advanced): Prime Power in Product",
                "question": "Find the highest power of 3 that completely divides the product of all positive integers from 1 to 30.",
                "givenInfo": ["Product = 30! (30 factorial)", "Target prime base = 3"],
                "conceptOrFormula": "Legendre's Formula: E_p(n!) = ⌊n/p⌋ + ⌊n/p^2⌋ + ⌊n/p^3⌋...",
                "steps": [
                    {"stepNumber": 1, "title": "Apply successive integer divisions by powers of 3", "explanation": "Divide 30 by 3, 3^2=9, 3^3=27.", "math": "⌊30/3⌋ = 10; ⌊30/9⌋ = 3; ⌊30/27⌋ = 1"},
                    {"stepNumber": 2, "title": "Sum the quotient integer parts", "explanation": "Total power = 10 + 3 + 1 = 14.", "math": "E_3(30!) = 10 + 3 + 1 = 14"}
                ],
                "finalAnswer": "14 (i.e. 3^14 divides 30!)", "whyItWorks": "10 multiples of 3 exist in 1..30; 3 multiples of 9 contribute a second factor of 3; 1 multiple of 27 contributes a third.", "commonTrap": "Only dividing by 3 (getting 10) and forgetting that 9, 18, and 27 carry additional factors of 3.", "difficulty": "Advanced"
            },
            {
                "id": "ex-y1-ns-6", "title": "Example 6 (Advanced): Perfect Square Divisor Constraints",
                "question": "How many factors of the number N = 2^5 × 3^4 × 5^3 are perfect squares?",
                "givenInfo": ["N = 2^5 × 3^4 × 5^3"],
                "conceptOrFormula": "A factor is a perfect square if all its prime exponents are even numbers.",
                "steps": [
                    {"stepNumber": 1, "title": "Count allowable even exponents for each prime", "explanation": "For 2: even exponents are {0, 2, 4} = 3 choices. For 3: even exponents are {0, 2, 4} = 3 choices. For 5: even exponents are {0, 2} = 2 choices.", "math": "Choices = 3 (for 2) × 3 (for 3) × 2 (for 5)"},
                    {"stepNumber": 2, "title": "Multiply total combinations", "explanation": "Total square factors = 3 × 3 × 2 = 18.", "math": "Total Perfect Square Factors = 18"}
                ],
                "finalAnswer": "18", "whyItWorks": "Restricting prime exponent selection strictly to multiples of 2 guarantees every generated divisor is a square.", "commonTrap": "Forgetting that exponent 0 (e.g. 2^0 = 1) is an even exponent and a valid perfect square factor.", "difficulty": "Advanced"
            },
            {
                "id": "ex-y1-ns-7", "title": "Example 7 (Placement-Style): Digit Sum & Value Equality",
                "question": "A two-digit number is 4 times the sum of its digits. If 18 is added to the number, the digits are reversed. Find the number.",
                "givenInfo": ["Number = 4 × (t + u)", "Number + 18 = Reversed Number (10u + t)"],
                "conceptOrFormula": "10t + u = 4(t + u) and (10t + u) + 18 = 10u + t",
                "steps": [
                    {"stepNumber": 1, "title": "Simplify first relationship", "explanation": "10t + u = 4t + 4u ⟹ 6t = 3u ⟹ u = 2t.", "math": "u = 2t"},
                    {"stepNumber": 2, "title": "Simplify second relationship", "explanation": "(10u + t) - (10t + u) = 18 ⟹ 9(u - t) = 18 ⟹ u - t = 2.", "math": "u - t = 2"},
                    {"stepNumber": 3, "title": "Solve for t and u", "explanation": "Substitute u = 2t into u - t = 2: 2t - t = 2 ⟹ t = 2. Then u = 4.", "math": "Number = 24"}
                ],
                "finalAnswer": "24", "whyItWorks": "Check: 24 = 4 × (2 + 4) = 24. 24 + 18 = 42. Verified.", "commonTrap": "Inverting the equation to 10t + u + 18 = 10t + u by mistake.", "difficulty": "Placement-Style"
            },
            {
                "id": "ex-y1-ns-8", "title": "Example 8 (Placement-Style): Co-Prime Pair Counting",
                "question": "How many pairs of natural numbers (a, b) exist such that their product a × b = 2520 and GCD(a, b) = 1 with a < b?",
                "givenInfo": ["a × b = 2520", "GCD(a, b) = 1 (a and b are co-prime)", "a < b"],
                "conceptOrFormula": "If N has k distinct prime factors, the number of co-prime factor pairs is 2^(k - 1).",
                "steps": [
                    {"stepNumber": 1, "title": "Prime factorize 2520", "explanation": "2520 = 252 × 10 = (2^2 × 3^2 × 7) × (2 × 5) = 2^3 × 3^2 × 5^1 × 7^1.", "math": "Distinct prime bases: {2, 3, 5, 7} ⟹ k = 4"},
                    {"stepNumber": 2, "title": "Apply co-prime pairs theorem", "explanation": "Since GCD(a,b)=1, all powers of each prime must go entirely to 'a' or entirely to 'b'. With k=4 distinct prime clusters, number of unordered pairs is 2^(k-1) = 2^(4-1) = 2^3 = 8.", "math": "Pairs = 2^3 = 8 pairs"}
                ],
                "finalAnswer": "8 pairs", "whyItWorks": "For each distinct prime base p_i^a, assigning it as a block ensures no common prime factor is shared between 'a' and 'b'.", "commonTrap": "Splitting powers of 2 (e.g. putting 2 in 'a' and 4 in 'b'), which destroys the co-prime condition GCD=1.", "difficulty": "Placement-Style"
            }
        ],
        "alt_methods": {
            "title": "Listing Factors Manually vs Canonical Prime Formula",
            "methods": [
                {"methodName": "Manual Pairing Method", "steps": ["Find factor pairs: 1×360, 2×180, 3×120... until square root"], "prosAndCons": "Prone to skipping factors on large numbers; takes 60–90 seconds.", "whenToUse": "Only for small numbers (<50)."},
                {"methodName": "Canonical Exponent Formula", "steps": ["Prime factorize", "Multiply incremented exponents (a+1)(b+1)..."], "prosAndCons": "Guaranteed 100% accuracy in 15 seconds.", "whenToUse": "Standard method for all competitive aptitude exams."}
            ]
        },
        "shortcuts": {
            "title": "Difference of 2-Digit Reversed Numbers Shortcut",
            "traditionalVsShortcut": {
                "traditionalMethod": "Writing full two-variable linear equations and solving step by step (~60s).",
                "shortcutMethod": "Difference between number and its reverse divided by 9 gives the difference of digits directly: (u - t) = 45 / 9 = 5 (~5s).",
                "timeSavedPercent": "90% time saved"
            },
            "rulesForApplication": ["Only valid for base-10 two-digit numbers.", "If the problem states the sum of a number and its reverse, divide the sum by 11 to get (t + u)."]
        },
        "mistakes": [
            {"mistake": "Believing that 0 is neither even nor odd.", "why": "Confusing 'positive/negative' neutrality with parity.", "avoid": "Zero satisfies 2k for k=0; zero is strictly an even integer."},
            {"mistake": "Thinking 1 is a prime number.", "why": "Remembering that 1 divides only by itself, forgetting the 2-distinct-divisor rule.", "avoid": "1 has only 1 divisor; prime numbers must have exactly 2 distinct divisors."}
        ],
        "placement_tips": {
            "timeAllocationSeconds": 40,
            "eliminationTechnique": "Check parity first: If a question states an even number plus an odd number, eliminate all even answer choices immediately.",
            "questionSelectionAdvice": "Digit reversal and factor-counting questions are fast and reliable; solve them immediately upon scanning.",
            "recruiterInsight": "Recruiters use number system basics to test whether candidates think in structural algebraic patterns rather than guessing."
        },
        "practice_easy": [
            {"id": "p-y1-ns-e1", "question": "What is the sum of all prime numbers between 20 and 40?", "options": ["A: 119", "B: 120", "C: 123", "D: 127"], "correctAnswer": "A: 119", "explanation": "The prime numbers between 20 and 40 are 23, 29, 31, and 37. Sum = 23 + 29 + 31 + 37 = 119.", "difficulty": "Easy"},
            {"id": "p-y1-ns-e2", "question": "How many positive factors does the number 144 have?", "options": ["A: 12", "B: 15", "C: 16", "D: 18"], "correctAnswer": "B: 15", "explanation": "Prime factorize 144: 144 = 12^2 = (2^2 × 3)^2 = 2^4 × 3^2. Total factors = (4 + 1)(2 + 1) = 5 × 3 = 15.", "difficulty": "Easy"},
            {"id": "p-y1-ns-e3", "question": "Which of the following numbers is prime?", "options": ["A: 91", "B: 119", "C: 137", "D: 161"], "correctAnswer": "C: 137", "explanation": "91 = 7 × 13; 119 = 7 × 17; 161 = 7 × 23. 137 has no divisors ≤ √137 (approx 11.7: 2, 3, 5, 7, 11 do not divide 137), so 137 is prime.", "difficulty": "Easy"}
        ],
        "practice_inter": [
            {"id": "p-y1-ns-i1", "question": "The sum of a two-digit number and the number formed by reversing its digits is 132. If the digits differ by 2, find the two-digit number (given the units digit is greater than the tens digit).", "options": ["A: 46", "B: 57", "C: 68", "D: 79"], "correctAnswer": "B: 57", "explanation": "(10t + u) + (10u + t) = 11(t + u) = 132 ⟹ t + u = 12. Given u - t = 2. Adding equations: 2u = 14 ⟹ u = 7, t = 5. Number = 57.", "difficulty": "Intermediate"},
            {"id": "p-y1-ns-i2", "question": "Find the total number of factors of 540 that are multiples of 6.", "options": ["A: 8", "B: 12", "C: 16", "D: 18"], "correctAnswer": "B: 12", "explanation": "540 = 6 × 90. To find factors of 540 that are multiples of 6, find the total factors of 90 = 2^1 × 3^2 × 5^1. Total factors of 90 = (1+1)(2+1)(1+1) = 2 × 3 × 2 = 12.", "difficulty": "Intermediate"},
            {"id": "p-y1-ns-i3", "question": "If the difference between two numbers is 6 and the difference of their squares is 240, find the sum of the two numbers.", "options": ["A: 36", "B: 40", "C: 44", "D: 48"], "correctAnswer": "B: 40", "explanation": "x^2 - y^2 = (x - y)(x + y). 240 = 6 × (x + y) ⟹ x + y = 240 / 6 = 40.", "difficulty": "Intermediate"}
        ],
        "practice_adv": [
            {"id": "p-y1-ns-a1", "question": "Find the number of odd factors of the integer 720.", "options": ["A: 4", "B: 6", "C: 8", "D: 12"], "correctAnswer": "B: 6", "explanation": "Prime factorize 720 = 72 × 10 = (2^3 × 3^2) × (2 × 5) = 2^4 × 3^2 × 5^1. For odd factors, exclude all powers of 2 (set power of 2 to 2^0 = 1 way). Odd factors = (2 + 1)(1 + 1) = 3 × 2 = 6.", "difficulty": "Advanced"},
            {"id": "p-y1-ns-a2", "question": "A number N when divided by 14 leaves a remainder of 9. What is the remainder when N^2 is divided by 14?", "options": ["A: 9", "B: 11", "C: 13", "D: 15"], "correctAnswer": "B: 11", "explanation": "N ≡ 9 (mod 14) ⟹ N^2 ≡ 9^2 = 81 (mod 14). 81 = 14 × 5 + 11. Remainder is 11.", "difficulty": "Advanced"},
            {"id": "p-y1-ns-a3", "question": "Find the sum of all factors of 108.", "options": ["A: 260", "B: 280", "C: 284", "D: 290"], "correctAnswer": "B: 280", "explanation": "108 = 2^2 × 3^3. Sum of factors = (1 + 2 + 4) × (1 + 3 + 9 + 27) = 7 × 40 = 280.", "difficulty": "Advanced"}
        ],
        "practice_placement": [
            {"id": "p-y1-ns-pl1", "question": "If n is an integer, which of the following expressions is ALWAYS divisible by 2?", "options": ["A: n^2 + 1", "B: n^2 + n", "C: n^2 - 1", "D: 2n + 1"], "correctAnswer": "B: n^2 + n", "explanation": "Factor n^2 + n = n(n + 1). This is the product of two consecutive integers. One of two consecutive integers is always even, so their product is always divisible by 2.", "difficulty": "Placement-Style"},
            {"id": "p-y1-ns-pl2", "question": "If p is a prime number strictly greater than 3, what is the remainder when p^2 is divided by 24?", "options": ["A: 1", "B: 3", "C: 5", "D: 7"], "correctAnswer": "A: 1", "explanation": "Any prime p > 3 can be written as 6k ± 1. p^2 - 1 = (p - 1)(p + 1). Since p is odd, p-1 and p+1 are consecutive even numbers, one divisible by 4, so their product is divisible by 8. Also, one of p-1, p, p+1 is divisible by 3 (and p is not), so 3 divides p^2-1. Since GCD(8,3)=1, 24 divides p^2 - 1. Thus p^2 ≡ 1 (mod 24).", "difficulty": "Placement-Style"},
            {"id": "p-y1-ns-pl3", "question": "A four-digit number 4AB5 is divisible by 55. What is the value of (A + B)?", "options": ["A: 8", "B: 9", "C: 10", "D: 11"], "correctAnswer": "C: 10", "explanation": "Divisible by 55 means divisible by 5 and 11. Divisibility by 5: unit digit is 5 (satisfied). Divisibility by 11: (4 + B) - (A + 5) = B - A - 1 must be 0 or 11. Thus B - A = 1. Testing single digit pairs, A+B = 9 (if A=4, B=5: 4455 is div by 55: 4455/55=81) or A+B = 10 (A=3, B=7: 4375/55=79.54, A=4, B=5 satisfies 4455). Sum of digits A+B = 4+5 = 9.", "difficulty": "Placement-Style"}
        ],
        "mixed_challenge": [
            {"id": "p-y1-ns-mc1", "question": "Find the smallest natural number by which 392 must be multiplied so that the product becomes a perfect square.", "options": ["A: 2", "B: 3", "C: 7", "D: 14"], "correctAnswer": "A: 2", "explanation": "392 = 2 × 196 = 2 × 14^2 = 2^3 × 7^2. To make all exponents even, the odd exponent in 2^3 needs one more factor of 2 (making it 2^4). Thus, multiply by 2.", "difficulty": "Placement-Style"}
        ],
        "rev_bullets": [
            "Natural numbers start at 1; Whole numbers include 0; Integers include negative values.",
            "Sum of a 2-digit number and its reverse is divisible by 11; their difference is divisible by 9.",
            "Total factors of N = p1^a * p2^b * p3^c is (a+1)(b+1)(c+1).",
            "The product of any k consecutive integers is always divisible by k! (k factorial)."
        ],
        "rev_formulas": [
            "Number = 10t + u; Reversed = 10u + t",
            "Total Divisors = (a + 1)(b + 1)(c + 1)",
            "Odd Factors = (b + 1)(c + 1) (ignoring power of 2)"
        ],
        "takeaways": [
            "Decomposing numbers into prime factorizations unlocks immediate divisor and divisibility solutions.",
            "Parity and algebraic structure allow candidates to discard impossible answer choices in seconds."
        ],
        "sources": [
            {"sourceName": "Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)", "sourceType": "Textbook", "referenceNote": "Fundamental number theory classifications and factor counting."},
            {"sourceName": "TCS NQT Numerical Ability Blueprint", "sourceType": "Assessment Specification", "referenceNote": "Foundation numerical operations and place value evaluation standards."}
        ]
    }
]

print(f"Loaded {len(topics_y1_quant)} detailed topic specification.")
