// Quizzes for 1st Year ch 1-6. Their chapter text is kept as it was; only the quiz files are written.
const { easy, medium, placement, buildQuizOnly } = require('../lib.cjs');

// ---- Ch 1: Number System Fundamentals ----
buildQuizOnly('y1-quant-num-sys', 'Number System Fundamentals', [
  easy('Which of the following numbers is prime?', 53, [51, 57, 91], '51 = 3 × 17, 57 = 3 × 19 and 91 = 7 × 13 are composite. 53 has no divisor other than 1 and itself, so it is prime.'),
  easy('The sum of the first 20 natural numbers is', 210, [200, 205, 420], 'Sum = n(n + 1)/2 = 20 × 21/2 = 210.'),
  easy('How many prime numbers are there between 1 and 20?', 8, [7, 9, 10], 'The primes are 2, 3, 5, 7, 11, 13, 17 and 19, which is 8 numbers.'),
  easy('Which of the following is an irrational number?', '√2', ['√49', '0.75', '22/7'], '√49 = 7, 0.75 = 3/4 and 22/7 are rational. √2 cannot be written as a fraction of integers, so it is irrational.'),
  easy('The unit digit of 7⁴ is', 1, [7, 3, 9], '7⁴ = 2401, whose unit digit is 1.'),
  easy('The smallest 3-digit perfect square is', 100, [121, 81, 144], '10² = 100 is the smallest square with three digits (9² = 81 has only two).'),

  medium('The unit digit of 3⁷⁴ is', 9, [1, 3, 7], 'Unit digits of powers of 3 repeat every four steps: 3, 9, 7, 1. Since 74 ÷ 4 leaves remainder 2, the unit digit is the second one, 9.', 'Divide the power by 4 and use the remainder.'),
  medium('The sum of the first 15 odd numbers is', 225, [120, 210, 240], 'The sum of the first n odd numbers is n². So the sum is 15² = 225.'),
  medium('The number of factors of 72 is', 12, [8, 10, 18], '72 = 2³ × 3². Number of factors = (3 + 1)(2 + 1) = 12.', 'Add 1 to each exponent in the prime factorisation and multiply.'),
  medium('What is the smallest number to be added to 1000 to make it a perfect square?', 24, [16, 21, 32], '31² = 961 and 32² = 1024. The next square after 1000 is 1024, so we add 1024 − 1000 = 24.'),
  medium('How many prime numbers lie between 30 and 50?', 5, [4, 6, 7], 'The primes are 31, 37, 41, 43 and 47, which makes 5.'),
  medium('The remainder when 2¹⁰ is divided by 7 is', 2, [1, 3, 4], '2³ = 8 leaves remainder 1 on division by 7. So 2¹⁰ = (2³)³ × 2 leaves 1 × 2 = 2.'),
  medium('The largest 4-digit number exactly divisible by 12 is', 9996, [9999, 9998, 9984], '9999 ÷ 12 leaves remainder 3 (since 12 × 833 = 9996). So the number is 9999 − 3 = 9996.'),
  medium('The sum of all two-digit numbers is', 4905, [4950, 4995, 5050], 'The numbers 10 to 99 form an AP with 90 terms. Sum = 90 × (10 + 99)/2 = 90 × 54.5 = 4905.'),

  placement('The unit digit of 2²⁰²³ × 3²⁰²⁴ is', 8, [2, 4, 6], 'Powers of 2 cycle 2, 4, 8, 6. 2023 leaves remainder 3 on division by 4, giving 8. Powers of 3 cycle 3, 9, 7, 1. 2024 is divisible by 4, giving 1. Unit digit of the product is 8 × 1 = 8.'),
  placement('The number of positive divisors of 360 is', 24, [18, 20, 30], '360 = 2³ × 3² × 5. Number of divisors = (3 + 1)(2 + 1)(1 + 1) = 24.'),
  placement('The last two digits of 7¹⁰⁰ are', '01', ['07', '49', '43'], '7⁴ = 2401, which ends in 01. So 7¹⁰⁰ = (7⁴)²⁵ ends in 01²⁵ = 01.', 'Look for a power ending in 01.'),
  placement('The remainder when 17²³ is divided by 16 is', 1, [0, 7, 15], '17 leaves remainder 1 on division by 16, so 17²³ leaves remainder 1²³ = 1.'),
  placement('How many numbers between 100 and 300 are divisible by 7?', 28, [27, 29, 30], 'The first multiple above 100 is 105 (7 × 15) and the last below 300 is 294 (7 × 42). Count = 42 − 15 + 1 = 28.'),
  placement('The smallest number by which 1176 must be multiplied to make it a perfect square is', 6, [2, 3, 7], '1176 = 2³ × 3 × 7². The prime powers 2³ and 3 have odd exponents, so we multiply by 2 × 3 = 6 to get 2⁴ × 3² × 7².')
]);

// ---- Ch 2: Divisibility Rules ----
buildQuizOnly('y1-quant-divisibility', 'Divisibility Rules', [
  easy('Which of the following numbers is divisible by 3?', 4821, [4822, 4825, 4829], 'A number is divisible by 3 if its digit sum is. 4821 has digit sum 4 + 8 + 2 + 1 = 15 is divisible by 3, while the other digit sums are 16, 19 and 23.'),
  easy('Which of the following numbers is divisible by 4?', 3216, [3214, 3218, 3222], 'Check the last two digits. 3216 ends in 16, which is divisible by 4, but 14, 18 and 22 are not.'),
  easy('Which of the following numbers is divisible by 5?', 2475, [2471, 2473, 2478], 'A number is divisible by 5 if it ends in 0 or 5. Only 2475 does.'),
  easy('Which of the following numbers is divisible by 9?', 7254, [7253, 7255, 7256], 'The digit sum of 7254 is 18, which is divisible by 9. The others have digit sums 17, 19 and 20.'),
  easy('Which of the following numbers is divisible by 11?', 2728, [2729, 2730, 2731], 'Alternating sum of digits for 2728: (2 + 2) − (7 + 8) = −11, which is divisible by 11. The others give −12, −2 and −3.'),
  easy('Which of the following numbers is divisible by 8?', 5120, [5122, 5124, 5126], 'Check the last three digits: 120 ÷ 8 = 15, so 5120 is divisible by 8. The other endings 122, 124, 126 are not multiples of 8.'),

  medium('For which digit x is the number 3x45 divisible by 9?', 6, [3, 4, 9], 'The digit sum is 3 + x + 4 + 5 = 12 + x. It must be a multiple of 9, so 12 + x = 18 and x = 6.'),
  medium('Which digit should replace * so that 85*4 is divisible by 11?', 1, [0, 2, 5], 'The alternating sum is (8 + *) − (5 + 4) = * − 1. It must be 0 or a multiple of 11, so * = 1. Check: 8514 = 11 × 774.'),
  medium('What is the smallest number to be added to 1000 to make it divisible by 9?', 8, [1, 7, 9], '1000 leaves remainder 1 on division by 9 (digit sum 1). We add 9 − 1 = 8.'),
  medium('The largest 3-digit number divisible by 7 is', 994, [999, 995, 992], '999 ÷ 7 leaves remainder 5, so the largest multiple is 999 − 5 = 994.'),
  medium('A number divisible by both 6 and 8 must also be divisible by', 24, [14, 36, 48], 'The LCM of 6 and 8 is 24. Every common multiple of 6 and 8 is a multiple of 24, but not necessarily of 36 or 48.'),
  medium('Which of the following numbers is divisible by 12?', 5436, [5438, 5442, 5444], '5436 is divisible by 3 (digit sum 18) and by 4 (last two digits 36). Hence by 12: 5436 ÷ 12 = 453.'),
  medium('The remainder when 4567 is divided by 9 is', 4, [2, 5, 7], 'The remainder on division by 9 equals the remainder of the digit sum: 4 + 5 + 6 + 7 = 22, and 22 leaves remainder 4.'),
  medium('How many two-digit numbers are divisible by 7?', 13, [12, 14, 15], 'The multiples are 14, 21, …, 98. Count = 98/7 − 14/7 + 1 = 14 − 2 + 1 = 13.'),

  placement('The smallest 4-digit number divisible by each of 3, 4, 5 and 6 is', 1020, [1000, 1060, 1200], 'LCM(3, 4, 5, 6) = 60. The smallest multiple of 60 that is at least 1000 is 60 × 17 = 1020.'),
  placement('The largest 4-digit number divisible by 88 is', 9944, [9984, 9900, 9856], '9999 ÷ 88 gives quotient 113, since 88 × 113 = 9944, and 88 × 114 = 10032 is too large.'),
  placement('The smallest number which leaves remainder 5 when divided by 12, 15 and 20 is', 65, [60, 125, 185], 'LCM(12, 15, 20) = 60. The smallest such number is 60 + 5 = 65.'),
  placement('The remainder when 1234567 is divided by 8 is', 7, [3, 5, 6], 'Only the last three digits matter for 8: 567 = 8 × 70 + 7, so the remainder is 7.'),
  placement('A number is divisible by 99 if and only if it is divisible by', '9 and 11', ['3 and 33', '9 and 10', '11 and 13'], '99 = 9 × 11 with 9 and 11 co-prime. A number divisible by 3 and 33 is just divisible by 33, which does not guarantee divisibility by 99.'),
  placement('How many 3-digit numbers are divisible by both 4 and 6?', 75, [72, 74, 90], 'LCM(4, 6) = 12. The first 3-digit multiple is 108 (12 × 9) and the last is 996 (12 × 83). Count = 83 − 9 + 1 = 75.')
]);

// ---- Ch 3: HCF and LCM Fundamentals ----
buildQuizOnly('y1-quant-hcf-lcm', 'HCF and LCM Fundamentals', [
  easy('The HCF of 36 and 48 is', 12, [6, 9, 24], '36 = 2² × 3² and 48 = 2⁴ × 3. HCF = 2² × 3 = 12.'),
  easy('The LCM of 12 and 18 is', 36, [6, 54, 72], '12 = 2² × 3 and 18 = 2 × 3². LCM = 2² × 3² = 36.'),
  easy('The HCF of two numbers is 12 and their LCM is 180. If one number is 36, the other is', 60, [45, 54, 72], 'Product of the numbers = HCF × LCM = 12 × 180 = 2160. Other number = 2160 ÷ 36 = 60.'),
  easy('The LCM of 4, 6 and 9 is', 36, [24, 48, 72], '4 = 2², 6 = 2 × 3, 9 = 3². LCM = 2² × 3² = 36.'),
  easy('The HCF of 18, 24 and 30 is', 6, [2, 3, 12], 'The common factors of 18, 24 and 30 are 1, 2, 3 and 6, so the HCF is 6.'),
  easy('The LCM of 15 and 20 is', 60, [30, 75, 300], '15 = 3 × 5 and 20 = 2² × 5, so LCM = 2² × 3 × 5 = 60.'),

  medium('The greatest number that divides 290 and 460 leaving remainders 4 and 5 respectively is', 13, [11, 17, 19], 'The number must divide 290 − 4 = 286 and 460 − 5 = 455. 286 = 2 × 11 × 13 and 455 = 5 × 7 × 13, so the HCF is 13.'),
  medium('The smallest number exactly divisible by 8, 12 and 16 is', 48, [24, 96, 144], '8 = 2³, 12 = 2² × 3, 16 = 2⁴. LCM = 2⁴ × 3 = 48.'),
  medium('Three bells ring at intervals of 12, 18 and 24 seconds. If they ring together at 8:00 a.m., they next ring together after', '72 seconds', ['36 seconds', '144 seconds', '216 seconds'], 'LCM(12, 18, 24) = 72, so the bells ring together again after 72 seconds.'),
  medium('The smallest number which leaves remainder 3 when divided by 5, 6 and 8 is', 123, [120, 243, 63], 'LCM(5, 6, 8) = 120. The number is 120 + 3 = 123.'),
  medium('Three numbers are in the ratio 2 : 3 : 4 and their HCF is 12. Their LCM is', 144, [96, 120, 288], 'The numbers are 24, 36 and 48. 24 = 2³ × 3, 36 = 2² × 3², 48 = 2⁴ × 3. LCM = 2⁴ × 3² = 144.'),
  medium('The greatest length of a tape that can measure exactly 4.2 m, 6.3 m and 8.4 m is', '210 cm', ['105 cm', '420 cm', '63 cm'], 'In centimetres the lengths are 420, 630 and 840. HCF(420, 630, 840) = 210.'),
  medium('The HCF of two numbers is 16 and their LCM is 240. If one number is 48, the other is', 80, [60, 64, 96], 'Product = 16 × 240 = 3840. Other number = 3840 ÷ 48 = 80.'),
  medium('The least number which leaves remainder 4 when divided by 6, 9, 15 and 18 and is exactly divisible by 7 is', 364, [94, 184, 274], 'LCM(6, 9, 15, 18) = 90, so numbers of the form 90k + 4 are candidates. 90k + 4 must be divisible by 7: k = 4 gives 364 = 7 × 52.'),

  placement('The greatest number that divides 1305, 4665 and 6905 leaving the same remainder in each case is', 1120, [560, 1360, 2240], 'The required number is the HCF of the differences: 4665 − 1305 = 3360 and 6905 − 4665 = 2240. HCF(3360, 2240) = 1120.'),
  placement('Three runners take 252, 308 and 198 seconds to complete a lap. If they start together, they will next meet at the start after (in seconds)', 2772, [1386, 1848, 5544], '252 = 2² × 3² × 7, 308 = 2² × 7 × 11, 198 = 2 × 3² × 11. LCM = 2² × 3² × 7 × 11 = 2772 seconds.'),
  placement('The largest 4-digit number exactly divisible by 12, 15, 18 and 27 is', 9720, [9900, 9990, 9180], 'LCM = 2² × 3³ × 5 = 540. 9999 ÷ 540 = 18.5, so the largest multiple is 540 × 18 = 9720.'),
  placement('The product of two numbers is 4107 and their HCF is 37. The greater number is', 111, [74, 148, 185], 'The numbers are 37a and 37b with a, b co-prime and 37² × ab = 4107, so ab = 3. Hence a = 1, b = 3 and the numbers are 37 and 111.'),
  placement('The LCM of 1/2, 2/3 and 3/4 is', 6, [1, 12, 1.5], 'LCM of fractions = LCM of numerators ÷ HCF of denominators = LCM(1, 2, 3) ÷ HCF(2, 3, 4) = 6 ÷ 1 = 6.'),
  placement('The HCF of 360 and 756 is', 36, [18, 24, 72], '360 = 2³ × 3² × 5 and 756 = 2² × 3³ × 7. HCF = 2² × 3² = 36.')
]);

// ---- Ch 4: Fractions and Decimals ----
buildQuizOnly('y1-quant-fractions-decimals', 'Fractions and Decimals', [
  easy('3/4 + 5/6 equals', '19/12', ['8/10', '4/3', '17/12'], 'LCM of 4 and 6 is 12. 3/4 = 9/12 and 5/6 = 10/12, so the sum is 19/12.'),
  easy('The decimal 0.375 as a fraction in the lowest terms is', '3/8', ['3/10', '37/100', '5/8'], '0.375 = 375/1000. Dividing by 125 gives 3/8.'),
  easy('The fraction 18/24 in the lowest terms is', '3/4', ['2/3', '9/12', '6/8'], 'HCF(18, 24) = 6, so 18/24 = 3/4.'),
  easy('1.5 + 2.25 equals', 3.75, [3.5, 3.25, 4.25], 'Aligning the decimal points: 1.50 + 2.25 = 3.75.'),
  easy('Which is the largest of 3/4, 5/8, 2/3 and 7/12?', '3/4', ['5/8', '2/3', '7/12'], 'Converted to decimals: 0.75, 0.625, 0.667 and 0.583. The largest is 3/4.'),
  easy('5/8 expressed as a decimal is', 0.625, [0.58, 0.85, 0.5], '5 ÷ 8 = 0.625.'),

  medium('The value of (2/3) × (9/10) ÷ (3/5) is', 1, ['3/5', '2', '1/2'], '(2/3) × (9/10) = 18/30 = 3/5. Dividing by 3/5 gives (3/5) × (5/3) = 1.'),
  medium('The recurring decimal 0.272727… as a fraction is', '3/11', ['27/100', '27/101', '9/33'], 'Let x = 0.2727…, then 100x = 27.2727…. Subtracting gives 99x = 27, so x = 27/99 = 3/11.'),
  medium('The value of 0.04 × 0.5 ÷ 0.2 is', 0.1, [0.01, 1, 0.4], '0.04 × 0.5 = 0.02. Then 0.02 ÷ 0.2 = 0.1.'),
  medium('What fraction of 2 hours is 40 minutes?', '1/3', ['1/2', '1/4', '2/5'], '2 hours = 120 minutes. The fraction is 40/120 = 1/3.'),
  medium('2/3 of 3/4 of 80 is', 40, [30, 45, 60], '3/4 of 80 = 60. Then 2/3 of 60 = 40.'),
  medium('A tank is 3/4 full. After 20 litres are removed it is 1/2 full. The capacity of the tank is', 80, [60, 100, 120], '3/4 − 1/2 = 1/4 of the capacity is 20 litres. The capacity is 20 × 4 = 80 litres.'),
  medium('5.5 ÷ 0.25 equals', 22, [2.2, 20, 27.5], '0.25 = 1/4, so dividing by 0.25 is the same as multiplying by 4: 5.5 × 4 = 22.'),
  medium('If 0.6 of a number is 45, the number is', 75, [27, 70, 90], 'Number = 45 ÷ 0.6 = 75.'),

  placement('The value of 1/(1×2) + 1/(2×3) + 1/(3×4) + … + 1/(9×10) is', '9/10', ['1/10', '10/11', '1'], 'Each term is 1/n − 1/(n + 1), so the sum telescopes to 1 − 1/10 = 9/10.', 'Telescoping: only the first and last pieces survive.'),
  placement('Which is the smallest of 7/8, 13/16, 31/40 and 63/80?', '31/40', ['7/8', '13/16', '63/80'], 'As decimals: 0.875, 0.8125, 0.775 and 0.7875. The smallest is 31/40.'),
  placement('The sum of 0.222… and 0.333… as a fraction is', '5/9', ['5/11', '1/2', '55/99'], '0.222… = 2/9 and 0.333… = 3/9. Sum = 5/9.'),
  placement('Rahul spends 1/3 of his salary on rent and 1/4 of the remainder on food. He is left with ₹3,000. His salary is', 6000, [5000, 7200, 9000], 'After rent he has 2/3. Food takes 1/4 × 2/3 = 1/6. Left = 2/3 − 1/6 = 1/2 of the salary. So the salary = 3000 × 2 = ₹6,000.'),
  placement('If x ÷ 0.25 = 18 ÷ 0.45, then x equals', 10, [8, 12, 20], '18 ÷ 0.45 = 40. So x = 40 × 0.25 = 10.'),
  placement('The value of 2 − 1/(2 − 1/(2 − 1/2)) is', '5/4', ['3/4', '4/3', '7/4'], 'Work from the inside: 2 − 1/2 = 3/2. Then 2 − 2/3 = 4/3. Then 2 − 3/4 = 5/4.')
]);

// ---- Ch 5: Simplification & BODMAS ----
buildQuizOnly('y1-quant-simplification', 'Simplification & BODMAS/PEMDAS', [
  easy('Simplify: 18 + 12 ÷ 3 × 2 − 5', 21, [10, 27, 31], 'Division and multiplication come first, left to right: 12 ÷ 3 = 4, then 4 × 2 = 8. Then 18 + 8 − 5 = 21.'),
  easy('Simplify: (15 − 3) × 4 ÷ 6', 8, [2, 6, 12], 'Brackets first: 12. Then 12 × 4 = 48 and 48 ÷ 6 = 8.'),
  easy('Simplify: 2³ + 3² − 5', 12, [10, 14, 22], '2³ = 8 and 3² = 9. So 8 + 9 − 5 = 12.'),
  easy('Simplify: 50 − [10 + (5 − 2) × 3]', 31, [19, 21, 41], 'Innermost bracket: 5 − 2 = 3. Then 3 × 3 = 9 and 10 + 9 = 19. Finally 50 − 19 = 31.'),
  easy('Simplify: √144 + √81', 21, [15, 17, 225], '√144 = 12 and √81 = 9, so the sum is 21.'),
  easy('Simplify: 100 ÷ (5 × 4) + 3', 8, [2, 23, 28], 'The bracket gives 20, then 100 ÷ 20 = 5. Finally 5 + 3 = 8.'),

  medium('Simplify: (25% of 80) + (40% of 50)', 40, [30, 36, 45], '25% of 80 = 20 and 40% of 50 = 20. Sum = 40.'),
  medium('Simplify: (6 + 4)² − (6 − 4)²', 96, [92, 100, 104], '(10)² − (2)² = 100 − 4 = 96. This equals 4ab = 4 × 6 × 4 = 96.'),
  medium('Simplify: 15 − 3 × (8 − 2²) ÷ 2', 9, [3, 12, 21], '2² = 4 and 8 − 4 = 4. Then 3 × 4 = 12 and 12 ÷ 2 = 6. Finally 15 − 6 = 9.'),
  medium('Simplify: (0.5)² + (0.3)²', 0.34, [0.8, 0.034, 0.16], '(0.5)² = 0.25 and (0.3)² = 0.09, so the sum is 0.34.'),
  medium('Simplify: 7 × (3 + 4) − 6 ÷ 2 × 3', 40, [28, 43, 58], '7 × 7 = 49. Next 6 ÷ 2 = 3 and 3 × 3 = 9. Hence 49 − 9 = 40.'),
  medium('Simplify: (7/8 of 64) − (5/6 of 36)', 26, [24, 28, 86], '7/8 of 64 = 56 and 5/6 of 36 = 30. The difference is 26.'),
  medium('Simplify: (12.5)² − (7.5)²', 100, [25, 50, 125], 'Using a² − b² = (a − b)(a + b): (12.5 − 7.5)(12.5 + 7.5) = 5 × 20 = 100.'),
  medium('Simplify: 3.6 × 0.4 ÷ 0.12', 12, [1.2, 1.44, 120], '3.6 × 0.4 = 1.44. Then 1.44 ÷ 0.12 = 12.'),

  placement('Simplify: 1002² − 998²', 8000, [4000, 80000, 4004], 'Using a² − b² = (a − b)(a + b): (1002 − 998)(1002 + 998) = 4 × 2000 = 8000.', 'Difference of squares avoids squaring large numbers.'),
  placement('Simplify: 117² − 83²', 6800, [3400, 7200, 34000], '(117 − 83)(117 + 83) = 34 × 200 = 6800.'),
  placement('Simplify: 1/2 ÷ 1/4 ÷ 1/8', 16, [1, 4, 64], 'Work left to right: 1/2 ÷ 1/4 = 2. Then 2 ÷ 1/8 = 16.'),
  placement('Simplify: (−2)³ × (−3)² ÷ (−6)', 12, ['-12', '6', '-6'], '(−2)³ = −8 and (−3)² = 9. Then −8 × 9 = −72 and −72 ÷ −6 = 12.'),
  placement('Simplify: 5 + 5 × 5 − 5 ÷ 5', 29, [1, 24, 49], 'Multiplication and division first: 5 × 5 = 25 and 5 ÷ 5 = 1. Then 5 + 25 − 1 = 29.'),
  placement('Simplify: √0.0025 + √0.25 + √25', 5.55, [5.05, 5.5, 0.555], '√0.0025 = 0.05, √0.25 = 0.5 and √25 = 5. The sum is 5.55.')
]);

// ---- Ch 6: Basic Percentages ----
buildQuizOnly('y1-quant-basic-percentages', 'Basic Percentages', [
  easy('25% of 480 is', 120, [96, 100, 140], '25% = 1/4, and 480 ÷ 4 = 120.'),
  easy('A student scores 72 out of 90. The percentage is', '80%', ['75%', '78%', '82%'], '72/90 × 100 = 80%.'),
  easy('15% of 360 is', 54, [48, 56, 60], '10% of 360 = 36 and 5% = 18. So 15% = 36 + 18 = 54.'),
  easy('If 20% of a number is 45, the number is', 225, [180, 200, 250], 'Number = 45 × 100/20 = 225.'),
  easy('The price of an article rises from ₹80 to ₹100. The percentage increase is', '25%', ['20%', '22.5%', '30%'], 'Increase = 20 on the original 80, so 20/80 × 100 = 25%.'),
  easy('3/8 expressed as a percentage is', '37.5%', ['35%', '38%', '42.5%'], '1/8 = 12.5%, so 3/8 = 3 × 12.5% = 37.5%.'),

  medium('A price is increased by 20% and then decreased by 20%. The net change is', '4% decrease', ['No change', '4% increase', '2% decrease'], 'Take 100 → 120 → 96. The net change is a 4% decrease. In general, the net effect is −(x²/100)%.'),
  medium('After a 20% discount the price of an article is ₹480. The original price was', 600, [576, 580, 650], 'The price is 80% of the original, so original = 480 × 100/80 = ₹600.'),
  medium('A\'s salary is 25% more than B\'s. B\'s salary is less than A\'s by', '20%', ['25%', '15%', '22.5%'], 'Take B = 100, A = 125. B is less by 25/125 × 100 = 20%.'),
  medium('A town\'s population of 40,000 increases by 10% in the first year and 20% in the second year. The population after two years is', 52800, [52000, 52400, 56000], '40000 × 1.1 = 44000. Then 44000 × 1.2 = 52800.'),
  medium('In an exam 30% fail in English, 35% fail in Maths and 10% fail in both. The percentage who pass in both is', '45%', ['35%', '55%', '65%'], 'Failed in at least one = 30 + 35 − 10 = 55%. Passed both = 100 − 55 = 45%.'),
  medium('A number is increased by 10% and then decreased by 10%. The net change is', '1% decrease', ['No change', '1% increase', '10% decrease'], '100 → 110 → 99. Net change = 1% decrease.'),
  medium('A student must score 40% to pass. He scored 120 marks and failed by 30 marks. The maximum marks are', 375, [300, 350, 400], 'Passing marks = 120 + 30 = 150, which is 40% of the total. Total = 150 × 100/40 = 375.'),
  medium('A student scores 54% in an exam of 600 marks. His score is', 324, [300, 342, 354], '54% of 600 = 0.54 × 600 = 324.'),

  placement('A seller sells 40% of his apples on Monday and 25% of the rest on Tuesday. He is left with 270 apples. He started with', 600, [450, 540, 720], 'After Monday 60% remain. After Tuesday 75% of these remain, i.e. 0.6 × 0.75 = 45%. So total = 270 ÷ 0.45 = 600.'),
  placement('In an election between two candidates the winner gets 55% of the votes and wins by 400 votes. The total number of votes is', 4000, [3600, 4400, 5000], 'The margin is 55% − 45% = 10% of the votes. 10% of the total = 400, so total = 4000.'),
  placement('The price of sugar rises by 25%. By what percentage must a family reduce its consumption so that its expenditure stays the same?', '20%', ['25%', '15%', '30%'], 'Take the old price as 100 and the new price as 125. Consumption must be scaled by 100/125 = 0.8, a reduction of 20%.', 'Reduction = increase ÷ (100 + increase) × 100.'),
  placement('A number is increased by 20% and the result is again increased by 30%. The total percentage increase is', '56%', ['50%', '52%', '60%'], '1.2 × 1.3 = 1.56, an increase of 56%.'),
  placement('In an election 5,000 people are registered; 20% do not vote and 10% of those who vote have invalid votes. The winner gets 60% of the valid votes. His votes number', 2160, [1800, 2400, 2700], 'Votes cast = 80% of 5000 = 4000. Valid votes = 90% of 4000 = 3600. Winner = 60% of 3600 = 2160.'),
  placement('The length of a rectangle is increased by 10% and its breadth by 20%. The area increases by', '32%', ['30%', '31%', '35%'], 'Area multiplier = 1.1 × 1.2 = 1.32, so the area increases by 32%.')
]);
