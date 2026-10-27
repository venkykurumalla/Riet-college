import sys
import os
import json

sys.path.append(os.path.abspath("src/scripts/generators"))
from common_builder import create_topic, export_curriculum_ts

def build_year1():
    # -------------------------------------------------------------
    # CATEGORY 1: QUANTITATIVE FOUNDATION (12 Topics)
    # -------------------------------------------------------------
    quant_topics = [
        create_topic(
            t_id="y1-quant-num-sys",
            year_id=1,
            category="Quantitative Foundation",
            num=1,
            title="Number System Fundamentals",
            tagline="1st Year Foundation — Classification of Numbers, Place Values, Prime Invariants & Parity Arithmetic",
            est_min=45,
            difficulty="Foundation",
            overview="The number system is the fundamental alphabet of all quantitative mathematics. It establishes a rigorous classification of real numbers into subsets: Natural numbers (N = {1, 2, 3, ...}), Whole numbers (W = {0, 1, 2, ...}), Integers (Z = {..., -2, -1, 0, 1, 2, ...}), Rational numbers (Q = p/q where q ≠ 0), and Irrational numbers (non-repeating, non-terminating decimals such as √2 and π). For first-year engineers, understanding these classifications is critical because every algorithmic computation, memory address allocation, and quantitative aptitude assessment relies directly on number properties.",
            placement_rel="Every technical recruitment screening (TCS NQT, Infosys, Cognizant, Wipro, Accenture) begins with foundational numerical evaluations. Identifying primes, parity invariants, and place-value decompositions in under 30 seconds ensures high scoring accuracy without elementary calculation errors.",
            weightage="High Frequency (Core baseline for 100% of arithmetic and algebra).",
            real_world="Digital logic design, discrete mathematics, cryptographic key generation, array memory indexing, and hash function modulus calculations.",
            learning_objs=[
                "Distinguish between Natural, Whole, Integer, Rational, and Irrational numbers without ambiguity",
                "Decompose multi-digit numbers using decimal place-value expansion: N = 100a + 10b + c",
                "Apply parity arithmetic rules (Even ± Odd, Even × Odd) to eliminate invalid answer choices instantly",
                "Determine prime numbers using trial division up to √N and find prime factorizations"
            ],
            prereqs=["Basic high school arithmetic operations (addition, subtraction, multiplication, division)"],
            refresher="Recall that 0 is an even whole number and an integer, but neither positive nor negative. 1 is neither prime nor composite. 2 is the only even prime number.",
            defs=[
                "Natural Numbers (N): Counting numbers strictly starting from 1: N = {1, 2, 3, 4, ...}.",
                "Integers (Z): The set of all whole numbers and their negative opposites: Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}.",
                "Prime Number: A positive integer strictly greater than 1 whose only positive divisors are 1 and itself.",
                "Composite Number: A positive integer greater than 1 that possesses at least one divisor other than 1 and itself."
            ],
            theory_intuition="Numbers behave like discrete physical objects governed by conservation laws. For example, parity acts as an invariant: adding an odd number of odd terms always yields an odd sum, whereas adding an even number of odd terms yields an even sum. Place value reveals the internal structure of a number: reversing the digits of a 2-digit number 'ab' gives 'ba', and their difference is always 9 × (a - b), which immediately explains why such differences are always divisible by 9.",
            visual_model="Concentric hierarchy circles: Natural ⊂ Whole ⊂ Integers ⊂ Rational ⊂ Real numbers.",
            formulas=[
                {
                    "title": "Two-Digit Place Value Expansion",
                    "formula": "N = 10a + b, \\quad \\text{Reversed } N' = 10b + a, \\quad N - N' = 9(a - b)",
                    "variables": "a = tens digit (1 ≤ a ≤ 9), b = units digit (0 ≤ b ≤ 9)",
                    "description": "Decomposes any two-digit base-10 number into algebraic form to solve digit-swap and sum-of-digits problems.",
                    "whenToUse": "Whenever a problem specifies that the digits of a number are reversed or compared.",
                    "simpleExample": "For 74, 10(7) + 4 = 74. Reversed is 47. Difference = 74 - 47 = 27 = 9(7 - 4)."
                },
                {
                    "title": "Parity Conservation Laws",
                    "formula": "\\text{Even} \\pm \\text{Even} = \\text{Even}, \\quad \\text{Odd} \\pm \\text{Odd} = \\text{Even}, \\quad \\text{Even} \\pm \\text{Odd} = \\text{Odd}",
                    "variables": "E = even integer (2k), O = odd integer (2k + 1)",
                    "description": "Rules determining whether the outcome of arithmetic combinations is even or odd.",
                    "whenToUse": "To quickly eliminate impossible multiple-choice options before performing calculations.",
                    "simpleExample": "347 + 892 + 511: Odd + Even + Odd = Even. The final answer must end in an even digit."
                },
                {
                    "title": "Prime Testing Threshold",
                    "formula": "\\text{To test if } N \\text{ is prime, test divisibility by primes } p \\le \\sqrt{N}",
                    "variables": "N = integer to test, p = prime integers {2, 3, 5, 7, 11, ...}",
                    "description": "If no prime up to the integer square root of N divides N, then N is guaranteed to be prime.",
                    "whenToUse": "To determine whether a 2-digit or 3-digit number is prime.",
                    "simpleExample": "For 173, √173 ≈ 13.15. Test primes 2, 3, 5, 7, 11, 13. None divide 173, so 173 is prime."
                }
            ],
            narrative=[
                "Every quantitative computation begins with classifying the numbers involved. Natural numbers represent discrete counting units. When zero was formalized, the set expanded to whole numbers. When negative balances and directional quantities were introduced, the integer system was established. Rational numbers represent all quantities expressible as the ratio of two integers p/q (with q ≠ 0), giving rise to terminating and repeating decimals. Numbers that cannot be expressed as fractions, such as √2, √3, and π, form the irrational numbers.",
                "In base-10 positional notation, the position of each digit indicates the power of 10 it represents. For a three-digit number 'abc', the actual value is 100a + 10b + c. This algebraic expansion allows students to translate verbal word problems into straightforward linear equations. For example, if reversing the digits of a two-digit number increases its value by 36, we immediately write (10b + a) - (10a + b) = 36, which simplifies to 9(b - a) = 36, yielding b - a = 4.",
                "Prime numbers serve as the 'atoms' of arithmetic according to the Fundamental Theorem of Arithmetic, which states that every integer greater than 1 can be uniquely factored into a product of primes. To verify whether a number N is prime, one does not need to test all integers up to N; it is sufficient to test prime divisors up to √N because any composite factor larger than √N must be paired with a corresponding factor smaller than √N.",
                "Parity arithmetic offers powerful shortcuts in elimination. Because multiplication by an even integer always produces an even product, the only way a product of integers can be odd is if every single factor is odd. Recognizing this property allows candidates to immediately rule out multiple-choice options whose parities contradict the algebraic structure of the problem."
            ],
            deep_dives=[
                {
                    "title": "Place Value Expansion Mechanics & Digit Swapping",
                    "content": "Consider a 3-digit number N = 100a + 10b + c. If we reverse the order of digits to obtain N' = 100c + 10b + a, the difference between the two numbers is N - N' = 99(a - c). Notice that the middle tens digit 'b' completely cancels out! This proves that the difference between any three-digit number and its reverse is always a multiple of 99, and the difference depends solely on the difference between the first and last digits."
                },
                {
                    "title": "The Sieve of Eratosthenes & Prime Distribution",
                    "content": "Between 1 and 100, there are exactly 25 prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97. Memorizing this count (25 primes in the first 100 integers) and recognizing primes under 50 allows students to bypass redundant primality testing during timed campus placement exams."
                }
            ],
            variations=[
                {
                    "typeName": "Digit Reversal Problems",
                    "description": "Finding a 2-digit or 3-digit number given the sum of its digits and the difference when digits are swapped.",
                    "exampleSnippet": "A two-digit number is 4 times the sum of its digits. If 18 is added to the number, its digits are reversed. Find the number."
                },
                {
                    "typeName": "Parity and Consecutive Integer Deductions",
                    "description": "Analyzing products or sums of consecutive integers to determine divisibility or parity.",
                    "exampleSnippet": "The product of any three consecutive integers is always divisible by 6 because at least one number is even and at least one is a multiple of 3."
                },
                {
                    "typeName": "Primality Verification and Prime Factor Count",
                    "description": "Testing large numbers for primality or determining the total number of prime factors of a composite integer.",
                    "exampleSnippet": "Determine if 221 is prime. Since √221 ≈ 14.86, test primes 2, 3, 5, 7, 11, 13. 221 / 13 = 17, so 221 is composite."
                }
            ],
            solved_examples=[
                {
                    "id": "ex-y1-ns-1",
                    "title": "Two-Digit Number with Digit Reversal",
                    "question": "A two-digit number is such that the sum of its digits is 11. If 27 is subtracted from the number, the digits are reversed. Find the original number.",
                    "givenInfo": ["Sum of digits: a + b = 11", "Original number: 10a + b", "Reversed number: 10b + a", "Condition: (10a + b) - 27 = 10b + a"],
                    "conceptOrFormula": "Place Value Expansion: (10a + b) - (10b + a) = 9(a - b) = 27",
                    "steps": [
                        {
                            "stepNumber": 1,
                            "title": "Set up the algebraic place-value equation",
                            "explanation": "Express the original number as 10a + b and the reversed number as 10b + a.",
                            "math": "10a + b - 27 = 10b + a \\implies 9a - 9b = 27 \\implies a - b = 3"
                        },
                        {
                            "stepNumber": 2,
                            "title": "Solve the system of two simultaneous linear equations",
                            "explanation": "We are given a + b = 11 and we derived a - b = 3. Add the two equations together.",
                            "math": "(a + b) + (a - b) = 11 + 3 \\implies 2a = 14 \\implies a = 7"
                        },
                        {
                            "stepNumber": 3,
                            "title": "Determine the units digit and state the original number",
                            "explanation": "Substitute a = 7 into a + b = 11 to find b.",
                            "math": "7 + b = 11 \\implies b = 4. \\quad \\text{Original Number} = 10(7) + 4 = 74"
                        }
                    ],
                    "finalAnswer": "74",
                    "whyItWorks": "74 has digit sum 7 + 4 = 11. Subtracting 27 gives 74 - 27 = 47, which is the exact reverse of 74.",
                    "commonTrap": "Confusing which digit is 'a' (tens) and which is 'b' (units), leading to the incorrect reversed answer 47.",
                    "difficulty": "Foundation"
                },
                {
                    "id": "ex-y1-ns-2",
                    "title": "Consecutive Integers Parity & Sum Analysis",
                    "question": "The sum of five consecutive odd integers is 245. What is the difference between the square of the largest and the square of the smallest integer in this sequence?",
                    "givenInfo": ["Five consecutive odd integers", "Sum of all 5 integers = 245"],
                    "conceptOrFormula": "Let the 5 consecutive odd integers be x - 4, x - 2, x, x + 2, x + 4, where x is the middle odd integer.",
                    "steps": [
                        {
                            "stepNumber": 1,
                            "title": "Find the middle integer using the arithmetic mean balance",
                            "explanation": "The sum of the symmetric terms equals 5x.",
                            "math": "(x - 4) + (x - 2) + x + (x + 2) + (x + 4) = 5x = 245 \\implies x = 49"
                        },
                        {
                            "stepNumber": 2,
                            "title": "Identify the extreme integers in the set",
                            "explanation": "The smallest integer is x - 4 and the largest integer is x + 4.",
                            "math": "\\text{Smallest} = 49 - 4 = 45, \\quad \\text{Largest} = 49 + 4 = 53"
                        },
                        {
                            "stepNumber": 3,
                            "title": "Apply algebraic identity a^2 - b^2 = (a - b)(a + b)",
                            "explanation": "Calculate the difference of squares without long manual squaring.",
                            "math": "53^2 - 45^2 = (53 - 45)(53 + 45) = 8 \\times 98 = 784"
                        }
                    ],
                    "finalAnswer": "784",
                    "whyItWorks": "Using the algebraic difference of squares formula (a - b)(a + b) eliminates having to calculate 53 × 53 and 45 × 45 individually.",
                    "commonTrap": "Assuming consecutive odd integers differ by 1 instead of 2.",
                    "difficulty": "Foundation"
                }
            ],
            alt_methods={
                "title": "Methods for Checking Primality of a Number N",
                "methods": [
                    {
                        "methodName": "Trial Division up to √N",
                        "steps": [
                            "Calculate integer upper bound k = ⌊√N⌋",
                            "Test divisibility of N only by prime numbers p ≤ k",
                            "If none divide N evenly, N is prime"
                        ],
                        "prosAndCons": "Guaranteed 100% accurate; fast for N < 1000.",
                        "whenToUse": "Standard method for all aptitude exams."
                    },
                    {
                        "methodName": "Form 6k ± 1 Prime Test",
                        "steps": [
                            "Every prime greater than 3 can be written in the form 6k + 1 or 6k - 1",
                            "Check if N + 1 or N - 1 is divisible by 6. If neither is, N is NOT prime",
                            "If it is, continue with trial division up to √N"
                        ],
                        "prosAndCons": "Quick negative test to instantly discard composites.",
                        "whenToUse": "When rapidly scanning multiple-choice options."
                    }
                ]
            },
            shortcuts={
                "title": "Instant Difference Rule for Swapped Digits",
                "traditionalVsShortcut": {
                    "traditionalMethod": "Write 10a + b, substitute into given equations, expand terms, and solve a 2-variable linear system taking 75 seconds.",
                    "shortcutMethod": "Directly divide the difference between original and reversed number by 9 to get (a - b) in 3 seconds.",
                    "timeSavedPercent": "90%"
                },
                "rulesForApplication": [
                    "Digit swap difference is ALWAYS 9 × (tens digit - units digit)",
                    "Digit swap sum (10a+b + 10b+a) is ALWAYS 11 × (tens digit + units digit)"
                ]
            },
            mistakes=[
                {
                    "mistake": "Treating 1 as a prime number",
                    "whyItHappens": "Students remember prime means 'cannot be divided', forgetting that primes must have exactly two distinct positive divisors.",
                    "howToAvoid": "Always remember 2 is the smallest prime number. 1 has only one positive divisor (itself), so it is neither prime nor composite."
                },
                {
                    "mistake": "Assuming all odd numbers are prime",
                    "whyItHappens": "Because all primes > 2 are odd, students mistakenly reverse the implication.",
                    "howToAvoid": "Recall odd composites such as 9 (3×3), 15 (3×5), 21 (3×7), 25 (5×5), 27 (3×9), 33 (3×11)."
                }
            ],
            placement_tips={
                "timeAllocationSeconds": 45,
                "eliminationTechnique": "Use the units digit and parity to eliminate at least 2 out of 4 multiple-choice options before writing any algebraic equation.",
                "questionSelectionAdvice": "Digit-reversal and consecutive integer problems should be solved immediately in Round 1 of an exam as they take under 40 seconds.",
                "recruiterInsight": "Companies like TCS and Infosys test place-value mechanics to verify basic mathematical precision and logic construction."
            },
            practice_easy=[
                {
                    "id": "pq-y1-ns-e1",
                    "question": "What is the sum of all prime numbers between 10 and 25?",
                    "options": ["68", "73", "83", "87"],
                    "correctAnswer": "83",
                    "explanation": "The prime numbers strictly between 10 and 25 are 11, 13, 17, 19, and 23. Sum = 11 + 13 + 17 + 19 + 23 = 83.",
                    "difficulty": "Easy"
                },
                {
                    "id": "pq-y1-ns-e2",
                    "question": "If a and b are odd integers, which of the following expressions must always be an EVEN integer?",
                    "options": ["a + b + 1", "a × b", "a × b + 2", "a + b + 4"],
                    "correctAnswer": "a + b + 4",
                    "explanation": "Odd + Odd = Even. Even + 4 = Even. Therefore, a + b + 4 is guaranteed to be an even integer.",
                    "difficulty": "Easy"
                }
            ],
            practice_inter=[
                {
                    "id": "pq-y1-ns-i1",
                    "question": "A two-digit number is 7 times the sum of its digits. If 36 is subtracted from the number, the digits are reversed. What is the original number?",
                    "options": ["63", "84", "93", "72"],
                    "correctAnswer": "84",
                    "explanation": "Let number = 10a + b. 10a + b = 7(a + b) => 3a = 6b => a = 2b. Also, original - reversed = 36 => 9(a - b) = 36 => a - b = 4. Substituting a = 2b gives 2b - b = 4 => b = 4, a = 8. The number is 84.",
                    "difficulty": "Intermediate"
                },
                {
                    "id": "pq-y1-ns-i2",
                    "question": "How many two-digit prime numbers have 3 as their units digit?",
                    "options": ["5", "6", "7", "8"],
                    "correctAnswer": "6",
                    "explanation": "Two-digit numbers ending in 3 are 13, 23, 33, 43, 53, 63, 73, 83, 93. Out of these, 33 (3×11), 63 (7×9), and 93 (3×31) are composite. The primes are 13, 23, 43, 53, 73, and 83 (total 6 primes).",
                    "difficulty": "Intermediate"
                }
            ],
            practice_adv=[
                {
                    "id": "pq-y1-ns-a1",
                    "question": "If p and q are prime numbers such that p^2 - 2q^2 = 1, what is the value of p + q?",
                    "options": ["5", "7", "8", "10"],
                    "correctAnswer": "5",
                    "explanation": "p^2 - 1 = 2q^2 => (p - 1)(p + 1) = 2q^2. If p is an odd prime, p - 1 and p + 1 are consecutive even integers. Testing small primes: if q = 2, p^2 = 1 + 2(4) = 9 => p = 3 (both 3 and 2 are prime). Thus p = 3, q = 2, so p + q = 5.",
                    "difficulty": "Advanced"
                }
            ],
            practice_placement=[
                {
                    "id": "pq-y1-ns-p1",
                    "question": "A student was asked to multiply a number by 43. Instead, he multiplied it by 34 by mistake and obtained a result that was 1,242 less than the correct answer. What was the original number?",
                    "options": ["126", "138", "142", "154"],
                    "correctAnswer": "138",
                    "explanation": "Let the number be N. Correct calculation = 43N, Mistaken calculation = 34N. Difference = 43N - 34N = 9N = 1242 => N = 1242 / 9 = 138.",
                    "difficulty": "Placement-Style"
                }
            ],
            rev_bullets=[
                "Real numbers classify into Rational (terminating/repeating) and Irrational (non-repeating).",
                "Two-digit place value expansion: 10a + b; difference upon digit reversal is always 9(a - b).",
                "Three-digit place value expansion: 100a + 10b + c; difference upon reversal is 99(a - c).",
                "Parity: Sum of two odds is even; product of two odds is odd; product containing any even is even.",
                "To test primality of N, check divisibility only by prime numbers p ≤ √N."
            ],
            rev_formulas=[
                "N - N' = 9(a - b) for two-digit reversal",
                "N - N' = 99(a - c) for three-digit reversal",
                "Odd × Odd = Odd, Odd × Even = Even",
                "Primes up to 100 = exactly 25 primes"
            ],
            takeaways=[
                "Always check parity first to eliminate impossible multiple-choice answers in under 5 seconds.",
                "Translate digit word problems into algebraic forms (10a + b) instead of guessing numbers.",
                "Remember that 2 is the only even prime number; all other primes are strictly odd."
            ],
            sources=[
                {"sourceName": "Quantitative Aptitude for Competitive Examinations", "sourceType": "Textbook", "referenceNote": "Chapter 1: Number Systems - R.S. Aggarwal"},
                {"sourceName": "Higher Algebra", "sourceType": "Reference Book", "referenceNote": "Hall & Knight: Theory of Numbers & Divisibility"}
            ]
        ),
        create_topic(
            t_id="y1-quant-divisibility",
            year_id=1,
            category="Quantitative Foundation",
            num=2,
            title="Divisibility Basics",
            tagline="1st Year Foundation — Divisibility Rules for 2, 3, 4, 5, 6, 8, 9, 10, 11 & Composite Factor Tests",
            est_min=45,
            difficulty="Foundation",
            overview="Divisibility rules are mathematical shortcuts that determine whether a given integer is divisible by a fixed divisor without performing manual long division. In computer science and digital engineering, divisibility tests underpin checksum algorithms (such as Luhn's credit card verification and ISBN validation), cyclic redundancy checks (CRC), and hashing functions. In aptitude exams, divisibility allows candidates to solve complex remainder and missing-digit problems in seconds.",
            placement_rel="Divisibility questions frequently appear in recruitment tests (TCS, Infosys, Cognizant, Wipro) either directly as 'find the missing digit in a 9-digit number divisible by 72 or 88' or indirectly as option-elimination tools.",
            weightage="High Frequency (Appears in almost every placement quantitative test).",
            real_world="Checksum verification in barcode readers, bank account validation, modular arithmetic in cryptography, and distributed database sharding.",
            learning_objs=[
                "Master core divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10, and 11",
                "Deconstruct composite divisors into co-prime factor pairs (e.g., 72 = 8 × 9, 88 = 8 × 11)",
                "Determine unknown digits in multi-digit numbers subjected to composite divisibility constraints",
                "Apply the alternating sum rule for divisibility by 11 with 100% computational reliability"
            ],
            prereqs=["Basic place-value understanding (Units, Tens, Hundreds)"],
            refresher="Remember that a number is divisible by a composite number if and only if it is divisible by its co-prime factors (factors whose HCF is 1).",
            defs=[
                "Divisibility: An integer a is divisible by an integer b (b ≠ 0) if there exists an integer k such that a = b × k with remainder 0.",
                "Co-Prime Numbers: Two integers a and b are co-prime if their Highest Common Factor (HCF) is 1: gcd(a, b) = 1.",
                "Digital Root / Sum of Digits: The sum obtained by adding all individual digits of a number repeatedly until a single digit is reached."
            ],
            theory_intuition="Divisibility rules arise from place value expansion in base 10. Because 10 = 9 + 1 = 99 + 1 = 999 + 1, every power of 10 leaves a remainder of 1 when divided by 9 or 3. Hence, 100a + 10b + c = 99a + 9b + (a + b + c), meaning 100a + 10b + c is divisible by 9 if and only if the sum of its digits (a + b + c) is divisible by 9. Similarly, because 100 is divisible by 4, only the last two digits determine divisibility by 4.",
            visual_model="Modular reduction tree: Power of 10 modulo k dictates which digits to inspect.",
            formulas=[
                {
                    "title": "Sum of Digits Rule (Divisibility by 3 and 9)",
                    "formula": "N \\text{ is divisible by 3 (or 9) } \\iff \\sum \\text{digits of } N \\text{ is divisible by 3 (or 9)}",
                    "variables": "N = integer, sum of digits = d_k + d_{k-1} + ... + d_0",
                    "description": "A number is divisible by 3 or 9 if the sum of all its digits is divisible by 3 or 9 respectively.",
                    "whenToUse": "To check divisibility by 3 or 9, or find missing digits.",
                    "simpleExample": "For 4,752: 4 + 7 + 5 + 2 = 18. Since 18 is divisible by 9, 4,752 is divisible by 9."
                },
                {
                    "title": "Last N Digits Rule (Divisibility by 2, 4, 8)",
                    "formula": "2^k \\text{ divides } N \\iff 2^k \\text{ divides the number formed by the last } k \\text{ digits of } N",
                    "variables": "k = 1 for 2 (last 1 digit), k = 2 for 4 (last 2 digits), k = 3 for 8 (last 3 digits)",
                    "description": "Powers of 2 only require examining the trailing k digits.",
                    "whenToUse": "When testing divisibility by 2, 4, 8, 16.",
                    "simpleExample": "For 59,328: last 3 digits = 328. 328 / 8 = 41. Thus, 59,328 is divisible by 8."
                },
                {
                    "title": "Alternating Sum Rule (Divisibility by 11)",
                    "formula": "N \\text{ is divisible by 11 } \\iff |(S_{\\text{odd}} - S_{\\text{even}})| \\text{ is 0 or a multiple of 11}",
                    "variables": "S_odd = sum of digits at odd places from right, S_even = sum of digits at even places from right",
                    "description": "Calculate sum of digits at odd positions minus sum of digits at even positions.",
                    "whenToUse": "When testing divisibility by 11 or composite numbers involving 11 (e.g., 88, 33).",
                    "simpleExample": "For 8,514: S_odd = 4 + 5 = 9, S_even = 1 + 8 = 9. Difference = 9 - 9 = 0. Divisible by 11."
                }
            ],
            narrative=[
                "Understanding divisibility rules transforms long division from an arduous manual procedure into an immediate visual inspection. Each divisibility rule is an algebraic consequence of expressing a number in powers of 10. For instance, any number can be written as N = 10k + d0, where d0 is the units digit. Because 10 is divisible by 2 and 5, the entire term 10k is always divisible by 2 and 5 regardless of what k is. Therefore, the divisibility of the entire number depends entirely on the last digit d0.",
                "For divisibility by 4, we express the number as N = 100k + (10d1 + d0). Since 100 is divisible by 4 (100 = 4 × 25), the term 100k contributes zero remainder. Hence, only the last two digits (10d1 + d0) need to be tested. Extending this to 8, because 1,000 = 8 × 125, only the last three digits dictate divisibility by 8.",
                "For composite numbers, we use the Co-Prime Rule: if an integer is divisible by two co-prime integers a and b, it is divisible by their product a × b. For example, 6 = 2 × 3 (gcd(2,3)=1), so a number is divisible by 6 if it is even AND its digit sum is divisible by 3. Similarly, 72 = 8 × 9 (gcd(8,9)=1), so a number is divisible by 72 if its last 3 digits are divisible by 8 AND its total digit sum is divisible by 9.",
                "A common trap in composite divisibility is choosing non-coprime factors. For example, testing divisibility by 12 using 2 and 6 is INCORRECT because gcd(2, 6) = 2 ≠ 1 (a number like 18 is divisible by 2 and 6, but NOT by 12). One must use the co-prime pair 3 and 4 (gcd(3, 4) = 1)."
            ],
            deep_dives=[
                {
                    "title": "Algebraic Proof of the Rule for 11",
                    "content": "Notice that 10 ≡ -1 (mod 11), 100 ≡ +1 (mod 11), 1000 ≡ -1 (mod 11), and in general 10^k ≡ (-1)^k (mod 11). Therefore, a number N = d_n 10^n + ... + d_1 10 + d_0 ≡ d_0 - d_1 + d_2 - d_3 + ... (mod 11). This proves that the remainder when dividing N by 11 is exactly equal to the alternating sum of its digits."
                },
                {
                    "title": "Solving Missing Digit Equations for 72 and 88",
                    "content": "In placement exams, questions frequently present a number like 4x567y divisible by 72. Step 1: 72 = 8 × 9. First isolate the last 3 digits '67y' and find y such that 67y is divisible by 8 (672/8 = 84, so y = 2). Step 2: With y = 2, calculate the sum of all digits 4 + x + 5 + 6 + 7 + 2 = 24 + x. For this sum to be divisible by 9, x must be 3. Hence (x, y) = (3, 2)."
                }
            ],
            variations=[
                {
                    "typeName": "Missing Single Digit for Divisibility by 9 or 11",
                    "description": "Finding an unknown digit x inside an integer to make it divisible by 9 or 11.",
                    "exampleSnippet": "Find digit x if 582x4 is divisible by 9: 5+8+2+x+4 = 19+x. For 19+x to be a multiple of 9, x = 8."
                },
                {
                    "typeName": "Two Missing Digits for Composite Divisors (72, 88)",
                    "description": "Determining two variables (x, y) using co-prime conditions such as 8 and 9 or 8 and 11.",
                    "exampleSnippet": "If 7-digit number 5432y8x is divisible by 88, find x and y."
                },
                {
                    "typeName": "Remainder from Divisibility Rules",
                    "description": "Finding the remainder when a large number is divided by 9 or 11 without full division.",
                    "exampleSnippet": "Remainder of 48,765 divided by 9 is the remainder of (4+8+7+6+5) / 9 = 30 / 9 => Remainder = 3."
                }
            ],
            solved_examples=[
                {
                    "id": "ex-y1-div-1",
                    "title": "Finding Missing Digits for Divisibility by 72",
                    "question": "If the 8-digit number 785x367y is completely divisible by 72, find the value of (2x + y) assuming x and y are single-digit natural numbers.",
                    "givenInfo": ["Number: 785x367y", "Divisible by 72", "Co-prime factors of 72: 8 and 9 (since gcd(8,9)=1)"],
                    "conceptOrFormula": "Rule for 8: Last 3 digits '67y' must be divisible by 8. Rule for 9: Sum of all digits must be a multiple of 9.",
                    "steps": [
                        {
                            "stepNumber": 1,
                            "title": "Determine y using divisibility by 8",
                            "explanation": "The last three digits are 67y. Divide 670 by 8: 670 = 8 × 83 + 6. For 67y to be divisible by 8, y must be 2 (since 672 = 8 × 84).",
                            "math": "67y = 672 \\implies y = 2"
                        },
                        {
                            "stepNumber": 2,
                            "title": "Determine x using divisibility by 9",
                            "explanation": "Substitute y = 2 into the number: 785x3672. Compute the sum of all digits.",
                            "math": "\\text{Sum} = 7 + 8 + 5 + x + 3 + 6 + 7 + 2 = 38 + x"
                        },
                        {
                            "stepNumber": 3,
                            "title": "Find the smallest valid digit x",
                            "explanation": "The smallest multiple of 9 greater than or equal to 38 is 45.",
                            "math": "38 + x = 45 \\implies x = 7"
                        },
                        {
                            "stepNumber": 4,
                            "title": "Calculate the target expression 2x + y",
                            "explanation": "Substitute x = 7 and y = 2.",
                            "math": "2x + y = 2(7) + 2 = 14 + 2 = 16"
                        }
                    ],
                    "finalAnswer": "16",
                    "whyItWorks": "78573672 / 72 = 1091301. The number satisfies both divisibility by 8 (ends in 672) and divisibility by 9 (digit sum is 45).",
                    "commonTrap": "Solving for x first before knowing y; you must solve for y using the last-3-digits rule for 8 first.",
                    "difficulty": "Foundation"
                }
            ],
            alt_methods={
                "title": "Direct Division vs Modular Digital Sum for 9",
                "methods": [
                    {
                        "methodName": "Digital Sum (Casting out Nines)",
                        "steps": [
                            "Sum all digits, eliminating any pairs that add to 9 as you go",
                            "Sum remaining digits to get the remainder"
                        ],
                        "prosAndCons": "Extremely fast, reduces mental fatigue, zero scratchpad writing required.",
                        "whenToUse": "Whenever testing divisibility by 9 or checking arithmetic products."
                    },
                    {
                        "methodName": "Direct Long Division",
                        "steps": [
                            "Perform sequential division digit by digit"
                        ],
                        "prosAndCons": "Very slow and error-prone under time pressure.",
                        "whenToUse": "Only when the divisor is an irregular prime like 17 or 23 with no standard simple rule."
                    }
                ]
            },
            shortcuts={
                "title": "Casting Out Nines Shortcut",
                "traditionalVsShortcut": {
                    "traditionalMethod": "Add every single digit: 7+8+5+3+6+7+2 = 38, then divide 38 by 9 to get remainder 2 (30 seconds).",
                    "shortcutMethod": "Cancel 7+2=9, 3+6=9. Remaining: 8+5+7 = 20 -> 2+0 = 2 (5 seconds).",
                    "timeSavedPercent": "80%"
                },
                "rulesForApplication": [
                    "Whenever you see digits summing to 9 or multiples of 9, ignore them immediately."
                ]
            },
            mistakes=[
                {
                    "mistake": "Testing composite divisibility by 12 using 2 and 6 instead of 3 and 4",
                    "whyItHappens": "Forgetting that factor pairs must be co-prime (HCF = 1).",
                    "howToAvoid": "Always ensure gcd(a, b) = 1. For 12, use (3, 4); for 24, use (3, 8); for 72, use (8, 9); for 88, use (8, 11)."
                }
            ],
            placement_tips={
                "timeAllocationSeconds": 40,
                "eliminationTechnique": "If an expression asks for divisibility by 6, immediately eliminate all odd options.",
                "questionSelectionAdvice": "Divisibility by 11 and 72 questions are high-accuracy questions; solve them early in the section.",
                "recruiterInsight": "Infosys and Cognizant frequently use missing-digit divisibility questions to test structured variable constraint solving."
            },
            practice_easy=[
                {
                    "id": "pq-y1-div-e1",
                    "question": "Which of the following numbers is completely divisible by 11?",
                    "options": ["4832718", "4832717", "4832719", "4832715"],
                    "correctAnswer": "4832718",
                    "explanation": "For 4832718: S_odd (from right) = 8 + 7 + 3 + 4 = 22. S_even = 1 + 2 + 8 = 11. Difference = 22 - 11 = 11. Since 11 is divisible by 11, 4832718 is divisible by 11.",
                    "difficulty": "Easy"
                }
            ],
            practice_inter=[
                {
                    "id": "pq-y1-div-i1",
                    "question": "What least digit should replace * in the number 67301*4 so that it is completely divisible by 9?",
                    "options": ["5", "6", "7", "8"],
                    "correctAnswer": "6",
                    "explanation": "Sum of digits = 6 + 7 + 3 + 0 + 1 + * + 4 = 21 + *. The next multiple of 9 after 21 is 27. So 21 + * = 27 => * = 6.",
                    "difficulty": "Intermediate"
                }
            ],
            practice_adv=[
                {
                    "id": "pq-y1-div-a1",
                    "question": "Find the remainder when 123456789101112...99100 (formed by writing numbers from 1 to 100 consecutively) is divided by 9.",
                    "options": ["0", "1", "3", "6"],
                    "correctAnswer": "1",
                    "explanation": "The remainder of the large number divided by 9 is equal to the sum of all digits of numbers from 1 to 100 modulo 9. Sum of numbers 1 to 100 = 100(101)/2 = 5050. Digital root of 5050 is 5 + 0 + 5 + 0 = 10 -> 1 + 0 = 1. Remainder is 1.",
                    "difficulty": "Advanced"
                }
            ],
            practice_placement=[
                {
                    "id": "pq-y1-div-p1",
                    "question": "If a 9-digit number 389x6378y is divisible by 72, what is the value of √(6x + 7y)?",
                    "options": ["6", "7", "8", "9"],
                    "correctAnswer": "8",
                    "explanation": "72 = 8 × 9. Last 3 digits '78y' must be divisible by 8: 784 / 8 = 98, so y = 4. Sum of digits = 3+8+9+x+6+3+7+8+4 = 48 + x. For 48 + x to be divisible by 9, x = 6 (48 + 6 = 54). Target = √(6(6) + 7(4)) = √(36 + 28) = √64 = 8.",
                    "difficulty": "Placement-Style"
                }
            ],
            rev_bullets=[
                "Divisibility by 2, 4, 8: Check last 1, 2, 3 digits respectively.",
                "Divisibility by 3 and 9: Sum of digits must be divisible by 3 or 9.",
                "Divisibility by 11: Absolute difference of sum of odd-place digits and even-place digits must be 0 or multiple of 11.",
                "Composite rule: N is divisible by a × b if and only if N is divisible by a and b, where gcd(a,b) = 1."
            ],
            rev_formulas=[
                "Divisibility by 4: Last 2 digits / 4",
                "Divisibility by 8: Last 3 digits / 8",
                "Divisibility by 11: |S_odd - S_even| = 0 or 11k",
                "Divisibility by 72: Satisfies rules for both 8 and 9"
            ],
            takeaways=[
                "Always solve for the last digits using power-of-2 rules (e.g. 8) before solving for internal digits using sum-of-digit rules (e.g. 9).",
                "Cast out nines while summing digits to save critical seconds during timed placement assessments."
            ],
            sources=[
                {"sourceName": "Quantitative Aptitude for Competitive Examinations", "sourceType": "Textbook", "referenceNote": "Chapter 2: Divisibility Rules - R.S. Aggarwal"}
            ]
        )
    ]
    
    return quant_topics

print("Year 1 builder module defined.")
