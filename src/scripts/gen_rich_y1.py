import os
import sys
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_topic_factory import build_topic_entry, save_curriculum_ts

y1_quant_details = [
    {
        "id": "y1-quant-num-sys",
        "title": "Number System Fundamentals",
        "tagline": "Classification of numbers, place-value systems, prime factorizations, and basic parity laws",
        "overview": "The study of numbers is the foundational bedrock of all quantitative aptitude, computational logic, and algorithmic thinking. At its core, the real number system provides the structured framework through which quantities, measurements, counts, and mathematical relationships are systematically expressed. For a first-year student entering engineering and competitive career preparation, developing an intuitive, effortless grasp of how numbers behave—how integers differ from rational fractions, why zero is an even integer, and how prime numbers act as the fundamental 'atomic elements' of arithmetic—is the critical first milestone.",
        "placement_rel": "In initial campus recruitment screening tests (such as TCS NQT, Infosys Foundation Math, AMCAT, and CoCubes), number system questions evaluate computational agility and elementary mathematical intuition. Recruiters test whether candidates understand core properties (e.g., whether the product of two consecutive integers is always even) to solve problems mentally without relying on calculators.",
        "recruiter_weight": "Foundational Essential — Appears in 85%+ of general numerical screening tests.",
        "real_world": "In computer science, number systems govern fundamental data representation: binary (base-2) for digital hardware logic, octal and hexadecimal for memory addressing, and prime factorization for RSA encryption and secure hashing algorithms.",
        "learning_objs": [
            "Distinguish clearly between Natural (N), Whole (W), Integers (Z), Rational (Q), Irrational, and Real (R) number sets.",
            "Deconstruct any composite integer into its canonical prime factorization form: N = p1^a * p2^b * p3^c.",
            "Apply arithmetic parity rules (Odd ± Odd = Even, Odd × Even = Even) to eliminate algebraic choices instantaneously.",
            "Calculate face value and place value in standard decimal notation and compute basic unit digit positions."
        ],
        "prereqs": ["Basic addition, subtraction, multiplication, and long division", "Elementary exponent notation (e.g., 2^3 = 8)"],
        "refresher": "Remember that a natural number is a positive counting integer (1, 2, 3...). Adding zero produces the set of whole numbers. Integers extend in both positive and negative directions (...-2, -1, 0, 1, 2...). Rational numbers can be written as p/q where q ≠ 0.",
        "defs": [
            "Natural Numbers (N): Positive counting integers {1, 2, 3, 4, 5, ...}.",
            "Whole Numbers (W): All natural numbers including zero {0, 1, 2, 3, ...}.",
            "Integers (Z): Whole numbers and negative counting numbers {..., -3, -2, -1, 0, 1, 2, 3, ...}.",
            "Rational Numbers (Q): Numbers expressible as p/q where q ≠ 0; their decimals terminate or repeat periodically.",
            "Irrational Numbers: Non-terminating, non-periodic decimals (e.g., √2 ≈ 1.4142..., π ≈ 3.14159...).",
            "Prime Numbers: Integers > 1 with exactly two distinct positive divisors: 1 and the number itself.",
            "Composite Numbers: Positive integers > 1 having more than two positive factors.",
            "Co-Prime Numbers: A pair of integers whose greatest common divisor (GCD) is 1."
        ],
        "theory_intuition": "Every natural number greater than 1 can be uniquely expressed as a product of prime powers, a principle known as the Fundamental Theorem of Arithmetic. Think of primes as the indivisible chemical elements of the number world: just as water is H2O, the number 360 is uniquely composed of 2^3 × 3^2 × 5^1. Understanding this structure allows us to analyze divisors, factors, and remainder behavior without testing every number individually.",
        "visual_model": "Envision nested concentric circles representing number sets: the innermost circle is Natural Numbers (1, 2, 3), enclosed by Whole Numbers (adding 0), enclosed by Integers (adding negative numbers), enclosed by Rational Numbers (fractions/decimals), all residing inside the overarching Real Number system.",
        "formulas": [
            {
                "title": "Canonical Prime Factorization",
                "formula": "N = p_1^a · p_2^b · p_3^c · ... · p_k^k",
                "variables": "p_1, p_2, ... = distinct prime numbers; a, b, c = positive integer exponents",
                "description": "Expresses any composite integer as a unique product of prime powers.",
                "whenToUse": "Use when finding the total number of factors, finding HCF/LCM, or analyzing divisibility.",
                "simpleExample": "Factorize 180: 180 = 18 × 10 = (2 × 3^2) × (2 × 5) = 2^2 × 3^2 × 5^1."
            },
            {
                "title": "Total Number of Factors Formula",
                "formula": "Total Factors = (a + 1)(b + 1)(c + 1)...",
                "variables": "a, b, c = exponents in the canonical prime factorization of N",
                "description": "Calculates how many distinct positive divisors a number possesses.",
                "whenToUse": "Whenever asked for the count of divisors/factors of an integer.",
                "simpleExample": "For 72 = 2^3 × 3^2: Total Factors = (3 + 1)(2 + 1) = 4 × 3 = 12 factors."
            }
        ],
        "narrative_paragraphs": [
            "Understanding numbers begins with the decimal place-value system. In base-10 representation, each digit's value is determined by its position relative to the units place. In the number 4,752, the digit '7' has a face value of 7, but a place value of 7 × 100 = 700. This structural reality means that any two-digit number with tens digit 't' and units digit 'u' can be written algebraically as 10t + u. When the digits are reversed, the new number becomes 10u + t. Notice that subtracting the reversed number from the original gives (10t + u) - (10u + t) = 9(t - u). This mathematical identity proves that the difference between any two-digit number and its reverse is always an exact multiple of 9.",
            "Parity arithmetic is another powerful mental tool. Even numbers can be represented algebraically as 2k, while odd numbers take the form 2k + 1. When two odd numbers are added, (2m + 1) + (2n + 1) = 2(m + n + 1), which is always even. However, when an odd number is multiplied by an odd number, (2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1, which remains odd. Remembering that Even × Any Integer = Even allows candidates to test equations and discard impossible choices without calculating full values.",
            "Prime numbers demand special attention in foundational aptitude. The first twenty-five primes below 100 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97. To check whether an integer N is prime, you do not need to test all divisors up to N; you only need to test prime divisors up to the square root of N (√N). For example, to check if 173 is prime, note that √173 is between 13 and 14 (since 13^2 = 169 and 14^2 = 196). We only test prime numbers ≤ 13: 2 (no), 3 (no), 5 (no), 7 (no), 11 (no), and 13 (no). Since none divide 173, 173 is confirmed prime in under 15 seconds."
        ],
        "deep_dives": [
            {
                "title": "Why 1 is Neither Prime nor Composite",
                "content": "By mathematical definition, a prime number must have exactly two distinct positive divisors (1 and itself). The number 1 has only one divisor (1). If 1 were classified as prime, the Fundamental Theorem of Arithmetic would break down, because a number like 12 could be factorized as 2^2 × 3, or 1 × 2^2 × 3, or 1^5 × 2^2 × 3, losing unique factorization."
            }
        ],
        "variations": [
            {"typeName": "Digit Reversal Problems", "description": "Analyzing algebraic relationships when digits of a 2-digit or 3-digit number are interchanged."},
            {"typeName": "Divisor & Factor Counting", "description": "Finding the total number of even, odd, or perfect square factors of a composite integer."}
        ],
        "solved_examples": [
            {
                "id": "ex-y1-ns-1",
                "title": "Example 1 (Foundation): Two-Digit Reversal Analysis",
                "question": "A two-digit number is such that the sum of its digits is 11. When the digits are reversed, the new number formed exceeds the original number by 45. Find the original two-digit number.",
                "givenInfo": ["Sum of tens digit (t) and units digit (u): t + u = 11", "Reversed number (10u + t) exceeds original number (10t + u) by 45"],
                "conceptOrFormula": "Two-digit expansion: Number = 10t + u; Reversed = 10u + t",
                "steps": [
                    {
                        "stepNumber": 1,
                        "title": "Set up the difference equation",
                        "explanation": "Subtract original number from reversed number and equate to 45.",
                        "math": "(10u + t) - (10t + u) = 45 ⟹ 9u - 9t = 45 ⟹ 9(u - t) = 45 ⟹ u - t = 5"
                    },
                    {
                        "stepNumber": 2,
                        "title": "Solve the system of linear equations",
                        "explanation": "We now have two simple equations: (1) t + u = 11, and (2) u - t = 5.",
                        "math": "Add (1) and (2): (t + u) + (u - t) = 11 + 5 ⟹ 2u = 16 ⟹ u = 8. Substitute into (1): t + 8 = 11 ⟹ t = 3."
                    },
                    {
                        "stepNumber": 3,
                        "title": "Form the original number and verify",
                        "explanation": "The original number is 10t + u = 10(3) + 8 = 38. Reversing it gives 83. Check difference: 83 - 38 = 45. Verified.",
                        "math": "Original Number = 38"
                    }
                ],
                "finalAnswer": "38",
                "whyItWorks": "The factor of 9 naturally arises from place-value subtraction: (10u + t) - (10t + u) = 9(u - t), allowing instant determination of the digit difference.",
                "commonTrap": "Confusing the tens digit with the units digit and writing 83 instead of 38.",
                "difficulty": "Foundation"
            },
            {
                "id": "ex-y1-ns-2",
                "title": "Example 2 (Foundation): Total Factors Calculation",
                "question": "Find the total number of positive divisors (factors) of the integer 360, and determine how many of these factors are even.",
                "givenInfo": ["Given number: 360"],
                "conceptOrFormula": "Canonical Factorization: N = 2^a · 3^b · 5^c ⟹ Total Factors = (a+1)(b+1)(c+1)",
                "steps": [
                    {
                        "stepNumber": 1,
                        "title": "Perform prime factorization of 360",
                        "explanation": "Decompose 360 into prime components.",
                        "math": "360 = 36 × 10 = (2^2 × 3^2) × (2 × 5) = 2^3 × 3^2 × 5^1"
                    },
                    {
                        "stepNumber": 2,
                        "title": "Apply total factors formula",
                        "explanation": "Add 1 to each exponent and multiply.",
                        "math": "Total Factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24 factors"
                    },
                    {
                        "stepNumber": 3,
                        "title": "Calculate number of even factors",
                        "explanation": "For an even factor, the power of 2 cannot be 2^0 (it must be 2^1, 2^2, or 2^3 = 3 choices). Powers of 3 and 5 are unrestricted.",
                        "math": "Even Factors = 3 × (2 + 1) × (1 + 1) = 3 × 3 × 2 = 18 even factors"
                    }
                ],
                "finalAnswer": "Total Factors = 24, Even Factors = 18",
                "whyItWorks": "Every divisor is formed by choosing an exponent combination. Forcing the power of 2 to be ≥ 1 guarantees an even divisor.",
                "commonTrap": "Forgetting to add 1 to the exponent of 5^1 (using 1 instead of 1+1=2).",
                "difficulty": "Foundation"
            }
        ],
        "alt_methods": {
            "title": "Listing Factors Manually vs Canonical Prime Formula",
            "methods": [
                {
                    "methodName": "Manual Pairing Method",
                    "steps": ["Find factor pairs: 1×360, 2×180, 3×120... until square root"],
                    "prosAndCons": "Prone to skipping factors on large numbers; takes 60–90 seconds.",
                    "whenToUse": "Only for small numbers (<50)."
                },
                {
                    "methodName": "Canonical Exponent Formula",
                    "steps": ["Prime factorize", "Multiply incremented exponents (a+1)(b+1)..."],
                    "prosAndCons": "Guaranteed 100% accuracy in 15 seconds.",
                    "whenToUse": "Standard method for all competitive aptitude exams."
                }
            ]
        },
        "shortcuts": {
            "title": "Difference of 2-Digit Reversed Numbers Shortcut",
            "traditionalVsShortcut": {
                "traditionalMethod": "Writing full two-variable linear equations and solving step by step (~60s).",
                "shortcutMethod": "Difference between number and its reverse divided by 9 gives the difference of digits directly: (u - t) = 45 / 9 = 5 (~5s).",
                "timeSavedPercent": "90% time saved"
            },
            "rulesForApplication": [
                "Only valid for base-10 two-digit numbers.",
                "If the problem states the sum of a number and its reverse, divide the sum by 11 to get (t + u)."
            ]
        },
        "mistakes": [
            {
                "mistake": "Believing that 0 is neither even nor odd.",
                "why": "Confusing 'positive/negative' neutrality with parity.",
                "avoid": "Zero satisfies 2k for k=0; zero is strictly an even integer."
            }
        ],
        "placement_tips": {
            "timeAllocationSeconds": 40,
            "eliminationTechnique": "Check parity first: If a question states an even number plus an odd number, eliminate all even answer choices immediately.",
            "questionSelectionAdvice": "Digit reversal and factor-counting questions are fast and reliable; solve them immediately upon scanning.",
            "recruiterInsight": "Recruiters use number system basics to test whether candidates think in structural algebraic patterns rather than guessing."
        },
        "practice_easy": [
            {
                "id": "p-y1-ns-e1",
                "question": "What is the sum of all prime numbers between 20 and 40?",
                "options": ["A: 119", "B: 120", "C: 123", "D: 127"],
                "correctAnswer": "A: 119",
                "explanation": "The prime numbers between 20 and 40 are 23, 29, 31, and 37. Sum = 23 + 29 + 31 + 37 = 119.",
                "difficulty": "Easy"
            },
            {
                "id": "p-y1-ns-e2",
                "question": "How many positive factors does the number 144 have?",
                "options": ["A: 12", "B: 15", "C: 16", "D: 18"],
                "correctAnswer": "B: 15",
                "explanation": "Prime factorize 144: 144 = 12^2 = (2^2 × 3)^2 = 2^4 × 3^2. Total factors = (4 + 1)(2 + 1) = 5 × 3 = 15.",
                "difficulty": "Easy"
            }
        ],
        "practice_inter": [
            {
                "id": "p-y1-ns-i1",
                "question": "The sum of a two-digit number and the number formed by reversing its digits is 132. If the digits differ by 2, find the two-digit number (given the units digit is greater than the tens digit).",
                "options": ["A: 46", "B: 57", "C: 68", "D: 79"],
                "correctAnswer": "B: 57",
                "explanation": "(10t + u) + (10u + t) = 11(t + u) = 132 ⟹ t + u = 12. Given u - t = 2. Adding equations: 2u = 14 ⟹ u = 7, t = 5. Number = 57.",
                "difficulty": "Intermediate"
            }
        ],
        "practice_adv": [
            {
                "id": "p-y1-ns-a1",
                "question": "Find the number of odd factors of the integer 720.",
                "options": ["A: 4", "B: 6", "C: 8", "D: 12"],
                "correctAnswer": "B: 6",
                "explanation": "Prime factorize 720 = 72 × 10 = (2^3 × 3^2) × (2 × 5) = 2^4 × 3^2 × 5^1. For odd factors, exclude all powers of 2 (set power of 2 to 2^0 = 1 way). Odd factors = (2 + 1)(1 + 1) = 3 × 2 = 6.",
                "difficulty": "Advanced"
            }
        ],
        "practice_placement": [
            {
                "id": "p-y1-ns-pl1",
                "question": "If n is an integer, which of the following expressions is ALWAYS divisible by 2?",
                "options": ["A: n^2 + 1", "B: n^2 + n", "C: n^2 - 1", "D: 2n + 1"],
                "correctAnswer": "B: n^2 + n",
                "explanation": "Factor n^2 + n = n(n + 1). This is the product of two consecutive integers. One of two consecutive integers is always even, so their product is always divisible by 2.",
                "difficulty": "Placement-Style"
            }
        ],
        "mixed_challenge": [
            {
                "id": "p-y1-ns-mc1",
                "question": "Find the smallest natural number by which 392 must be multiplied so that the product becomes a perfect square.",
                "options": ["A: 2", "B: 3", "C: 7", "D: 14"],
                "correctAnswer": "A: 2",
                "explanation": "392 = 2 × 196 = 2 × 14^2 = 2^3 × 7^2. To make all exponents even, the odd exponent in 2^3 needs one more factor of 2 (making it 2^4). Thus, multiply by 2.",
                "difficulty": "Placement-Style"
            }
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

print("Year 1 detailed array initialized.")
