const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');

const divs = n => { const d = []; for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i); return d; };
const sum = a => a.reduce((x, y) => x + y, 0);
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const phi = n => { let c = 0; for (let i = 1; i <= n; i++) if (gcd(i, n) === 1) c++; return c; };
const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
const modpow = (b, e, m) => { let r = 1n, x = BigInt(b) % BigInt(m), k = BigInt(e); const M = BigInt(m); while (k > 0n) { if (k & 1n) r = r * x % M; x = x * x % M; k >>= 1n; } return Number(r); };
const first = (f, lo = 1, hi = 100000) => { for (let i = lo; i <= hi; i++) if (f(i)) return i; };

// ---------------- Chapter 1 ----------------
const ch1 = C({
  n: 1, id: 'y3-quant-adv-number-properties', cat: 'quant', title: 'Advanced Number Properties',
  tag: 'Divisor counts and sums, co-primes, perfect squares and prime-factor reasoning',
  url: 'https://www.indiabix.com/aptitude/numbers/',
  over: 'Year 1 and 2 used divisibility rules and HCF and LCM. Year 3 uses the prime factorisation of a number as a complete description of it. From the factorisation N = p^a × q^b × r^c you can count the divisors, add them, count the odd and even divisors, count the perfect-square or perfect-cube divisors, and count the numbers below N that are co-prime to it. These results turn long listing problems into one-line calculations.',
  place: 'Number-property questions are commonly asked in company aptitude rounds in the harder quantitative sections, often as "how many factors" or "how many numbers up to N are co-prime to N".',
  real: 'Gear teeth and cycle lengths (LCM and HCF), cryptographic keys (products of two large primes) and scheduling problems are built on the same factor structure.',
  obj: ['Write a number in prime-factor form and use it for counting', 'Count and add divisors, including odd, even, square and cube divisors', 'Use Euler\'s totient to count numbers co-prime to N', 'Solve HCF-LCM pair problems using prime exponents'],
  pre: ['HCF and LCM Fundamentals', 'Divisibility Rules', 'Number System Fundamentals'],
  refresh: 'Every integer greater than 1 is a product of primes in exactly one way (apart from order). Two numbers are co-prime when their HCF is 1.',
  defs: [
    'Prime factorisation: N = p₁^a₁ × p₂^a₂ × … × pₖ^aₖ with distinct primes pᵢ.',
    'Number of divisors τ(N) = (a₁ + 1)(a₂ + 1)…(aₖ + 1). Sum of divisors σ(N) = Π (pᵢ^(aᵢ+1) − 1)/(pᵢ − 1).',
    'Euler\'s totient φ(N): the count of integers from 1 to N that are co-prime to N; φ(N) = N × Π (1 − 1/pᵢ).',
    'Perfect number: a number equal to the sum of its proper divisors (6, 28, 496).',
    'A number has an odd count of divisors exactly when it is a perfect square.'
  ],
  intu: 'A divisor of N is built by choosing, for each prime, how many copies (from 0 up to its exponent) to use. Counting divisors is therefore counting independent choices, which is why the counts multiply.',
  mental: 'Factorise once, write the exponents in a row, and read off every count: add 1 to each exponent and multiply for the divisor count; keep only even exponent choices for squares; drop the prime 2 for odd divisors.',
  formulas: [
    ['Number of divisors', 'τ(N) = (a₁ + 1)(a₂ + 1)…', 'Exponents of the prime factorisation.', 'Counting factors.', '72 = 2³ × 3² → 4 × 3 = 12'],
    ['Sum of divisors', 'σ(N) = Π (p^(a+1) − 1)/(p − 1)', 'One bracket per prime.', 'Sum of factors.', '360 = 2³·3²·5 → 15 × 13 × 6 = 1170'],
    ['Odd and even divisors', 'Odd = divisors of the odd part;  Even = total − odd', 'Remove the 2s.', 'Odd/even counts.', '72: odd 3, even 9'],
    ['Co-primes below N', 'φ(N) = N Π (1 − 1/p)', 'Only the distinct primes matter.', 'Euler questions.', 'φ(36) = 36 × ½ × ⅔ = 12'],
    ['HCF-LCM pairs', 'If HCF = h and LCM = l then a = hx, b = hy with x, y co-prime and xy = l/h', 'Count co-prime factor pairs.', 'Pair counting.', 'HCF 6, LCM 36 → xy = 6']
  ],
  narr: [
    'Factorise first. 360 = 2³ × 3² × 5. The divisor count is (3 + 1)(2 + 1)(1 + 1) = 24 and the divisor sum is (2⁴ − 1)/1 × (3³ − 1)/2 × (5² − 1)/4 = 15 × 13 × 6 = 1170.',
    'For odd and even divisors, remove the factor 2. The odd part of 72 = 2³ × 3² is 9, which has 3 divisors, so 72 has 3 odd divisors and 12 − 3 = 9 even ones.',
    'Perfect-square divisors need every exponent even. In 360 = 2³·3²·5 the exponent choices that stay even are 0 or 2 for the prime 2, 0 or 2 for 3 and only 0 for 5, giving 2 × 2 × 1 = 4 square divisors (1, 4, 9, 36). Perfect-cube divisors need exponents that are multiples of 3.',
    'To count integers up to N that are co-prime to N use φ. For N = 36 = 2²·3², φ = 36 × (1/2) × (2/3) = 12. For N = 30, φ = 30 × (1/2)(2/3)(4/5) = 8.',
    'For pairs with given HCF h and LCM l, write the numbers as hx and hy with x and y co-prime and xy = l/h. For HCF 6 and LCM 36, xy = 6, so (x, y) is (1, 6), (6, 1), (2, 3) or (3, 2): four ordered pairs.'
  ],
  deep: [['Pairs of divisors', 'Divisors come in pairs (d, N/d). If N has τ divisors, N can be written as a product of two factors in τ/2 ways (τ/2 + ½ if N is a square, counting the pair d = N/d once).'], ['Product of all divisors', 'The product of all divisors of N is N^(τ/2). For N = 36 (τ = 9) it is 36^4.5 = 6⁹ = 10,077,696.']],
  vars: [['Counting divisors', 'Total, odd, even.', 'Divisors of 144'], ['Sum of divisors', 'σ(N).', 'Sum for 360'], ['Special divisors', 'Squares, cubes.', 'Square divisors of 360'], ['Co-prime counts', 'Euler φ.', 'Co-primes to 30'], ['Pair counting', 'HCF-LCM pairs.', 'HCF 6, LCM 36']],
  ex: [
    { t: 'Divisor count and sum', q: 'Find the number of divisors and the sum of divisors of 360.', g: ['360 = 2³ × 3² × 5'], c: 'τ and σ from the exponents.', s: [['Factorise', '360 = 2³ × 3² × 5.'], ['Count', '(3 + 1)(2 + 1)(1 + 1) = 24.'], ['Sum', '(2⁴ − 1)(3³ − 1)/2 × (5² − 1)/4 = 15 × 13 × 6 = 1170.']], a: '24 divisors; sum 1170', w: 'Each divisor is a choice of exponents.', tr: 'Forgetting to add 1 to each exponent.' },
    { t: 'Co-primes', q: 'How many positive integers less than 30 are co-prime to 30?', g: ['30 = 2 × 3 × 5'], c: 'Euler\'s totient.', s: [['Distinct primes', '2, 3 and 5.'], ['Apply the formula', 'φ(30) = 30 × (1/2) × (2/3) × (4/5).'], ['Compute', '= 8.']], a: '8', w: 'Numbers sharing no prime factor with 30 are 1, 7, 11, 13, 17, 19, 23, 29.', tr: 'Counting the number 30 itself.' },
    { t: 'HCF-LCM pairs', q: 'How many ordered pairs of positive integers have HCF 6 and LCM 36?', g: ['HCF 6', 'LCM 36'], c: 'a = 6x, b = 6y, xy = 6, x and y co-prime.', s: [['Set up', 'xy = 36/6 = 6.'], ['Co-prime factor pairs of 6', '(1, 6), (6, 1), (2, 3), (3, 2).'], ['Count', '4 ordered pairs.']], a: '4', w: 'Each pair gives numbers (6, 36), (36, 6), (12, 18), (18, 12).', tr: 'Including (x, y) not co-prime, such as (1, 6) only.' }
  ],
  short: { title: 'Exponent row', trad: 'List all divisors and count them.', fast: 'Write the exponents of the prime factorisation and apply the product, sum or totient formula directly.', rules: ['τ: add 1 to each exponent and multiply.', 'Odd divisors: ignore the factor 2.', 'Squares: even exponents only.', 'φ uses only the distinct primes.'] },
  mist: [['Forgetting to add 1 to exponents', 'Multiplying the exponents themselves.', 'Add 1 first: exponent 3 gives 4 choices (0, 1, 2, 3).'], ['Counting 1 or N wrongly in φ', 'Including N itself.', 'φ counts numbers below N (for N > 1).'], ['Mixing co-prime and prime', '1 is co-prime but not prime.', 'Co-prime means HCF = 1.']],
  tips: { sec: 80, elim: 'The divisor count of a non-square number is even; reject odd options.', adv: 'Always factorise first and write the exponent row.', ins: 'Divisor and totient counts appear in cycle-length and remainder questions later.' },
  rev: ['Factorise first.', 'τ = Π(a + 1).', 'σ formula per prime.', 'φ from distinct primes.', 'Pairs: xy = l/h co-prime.'],
  qf: ['τ = Π(a + 1)', 'φ(N) = N Π(1 − 1/p)'],
  take: ['Prime factorisation describes everything.', 'Counts multiply.', 'Squares have an odd divisor count.', 'Use totient for co-primes.'],
  self: ['Can I count the divisors of 360?', 'Can I find φ(36)?', 'Can I count HCF-LCM pairs?']
});
const q1 = [
  easy('The number of divisors of 144 is', divs(144).length, [12, 14, 20], '144 = 2⁴ × 3², so (4 + 1)(2 + 1) = 15.'),
  easy('The sum of all divisors of 28 is', sum(divs(28)), [28, 54, 60], 'The divisors are 1, 2, 4, 7, 14 and 28, which add to 56.'),
  easy('The smallest number having exactly 6 divisors is', first(n => divs(n).length === 6), [8, 16, 18], '12 = 2² × 3 has (2 + 1)(1 + 1) = 6 divisors, and no smaller number has 6.'),
  easy('The number of primes between 90 and 110 is', Array.from({ length: 19 }, (_, i) => 91 + i).filter(isPrime).length, [4, 6, 7], 'The primes are 97, 101, 103, 107 and 109: 5.'),
  easy('The number of odd divisors of 72 is', divs(72).filter(d => d % 2).length, [2, 4, 6], '72 = 2³ × 3². The odd divisors are those of 9: 1, 3, 9, so 3.'),
  easy('The number of even divisors of 72 is', divs(72).filter(d => d % 2 === 0).length, [6, 8, 12], '72 has 12 divisors, of which 3 are odd, so 9 are even.'),

  medium('The sum of all divisors of 360 is', sum(divs(360)), [1080, 1170 + 30, 1000], '360 = 2³ × 3² × 5. Sum = 15 × 13 × 6 = 1170.'),
  medium('The number of integers from 1 to 36 that are co-prime to 36 is', phi(36), [10, 14, 18], 'φ(36) = 36 × (1/2) × (2/3) = 12.'),
  medium('In how many ways can 360 be written as a product of two distinct positive factors (order ignored)?', divs(360).length / 2, [10, 11, 24], '360 has 24 divisors, which pair up into 12 pairs.'),
  medium('The smallest number divisible by every integer from 1 to 10 is', first(n => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].every(k => n % k === 0)), [1260, 5040, 840], 'LCM of 1 to 10 = 2³ × 3² × 5 × 7 = 2520.'),
  medium('The number of divisors of 360 that are perfect squares is', divs(360).filter(d => Number.isInteger(Math.sqrt(d))).length, [3, 5, 6], 'The square divisors are 1, 4, 9 and 36: 4.'),
  medium('How many positive integers up to 100 have exactly 3 divisors?', Array.from({ length: 100 }, (_, i) => i + 1).filter(n => divs(n).length === 3).length, [3, 5, 6], 'These are squares of primes: 4, 9, 25 and 49: 4.'),
  medium('The sum of the reciprocals of all divisors of 6 is', 2, [1.5, 2.5, 3], '(1 + 2 + 3 + 6)/6 = 12/6 = 2.'),
  medium('The number of divisors of 10! is', 270, [180, 240, 300], '10! = 2⁸ × 3⁴ × 5² × 7. Divisors = 9 × 5 × 3 × 2 = 270.'),

  placement('How many integers from 1 to 30 are co-prime to 30?', phi(30), [6, 10, 12], 'φ(30) = 30 × (1/2)(2/3)(4/5) = 8.'),
  placement('The smallest number having exactly 12 divisors is', first(n => divs(n).length === 12), [48, 72, 36], '60 = 2² × 3 × 5 has 3 × 2 × 2 = 12 divisors; no smaller number has 12.'),
  placement('The largest 3-digit number having exactly 3 divisors is', 961, [841, 899, 991], 'Numbers with exactly 3 divisors are squares of primes. 31² = 961 is the largest below 1000.'),
  placement('The number of divisors of 2⁵ × 3³ × 5² that are perfect cubes is', 4, [3, 6, 8], 'Cube divisors need exponents that are multiples of 3: 2 has {0, 3}, 3 has {0, 3}, 5 has {0}. So 2 × 2 × 1 = 4.'),
  placement('The number of ordered pairs of positive integers with HCF 6 and LCM 36 is', 4, [2, 3, 6], 'Write the numbers as 6x and 6y with xy = 6 and x, y co-prime: (1, 6), (6, 1), (2, 3), (3, 2): 4.'),
  placement('The number of positive integers less than 100 that are co-prime to 100 is', phi(100) - 0, [30, 50, 60], 'φ(100) = 100 × (1/2) × (4/5) = 40.')
];
build(ch1, q1);

// ---------------- Chapter 2 ----------------
const ch2 = C({
  n: 2, id: 'y3-quant-remainder-theorems', cat: 'quant', title: 'Remainder Theorems (Chinese, Fermat\'s)',
  tag: 'Modular arithmetic, Fermat\'s little theorem, Euler\'s theorem and the Chinese remainder theorem',
  url: 'https://www.indiabix.com/aptitude/numbers/',
  over: 'Remainder problems ask for the remainder when a very large number (a power, a product, a factorial) is divided by a small number. Modular arithmetic lets you replace numbers by their remainders at every step. Three theorems shorten the work: Fermat\'s little theorem for prime moduli, Euler\'s theorem for general moduli, and the Chinese remainder theorem for combining conditions on different moduli.',
  place: 'Remainder-theorem questions are commonly asked in the hardest quantitative items of company aptitude rounds, often in the form "remainder when 2^100 is divided by 7".',
  real: 'Check digits, hash functions, calendar calculations and public-key cryptography all use modular arithmetic.',
  obj: ['Reduce sums, products and powers modulo n', 'Use Fermat\'s little theorem aⁿ⁻¹ ≡ 1 (mod p)', 'Use Euler\'s theorem with φ(n)', 'Combine congruences with the Chinese remainder theorem', 'Use Wilson\'s theorem and remainders of factorials'],
  pre: ['Advanced Number Properties', 'Divisibility Rules'],
  refresh: 'a ≡ b (mod n) means n divides a − b. If a leaves remainder r when divided by n, then a ≡ r (mod n).',
  defs: [
    'a ≡ b (mod n): a and b leave the same remainder on division by n.',
    'Fermat\'s little theorem: if p is prime and p does not divide a, then a^(p−1) ≡ 1 (mod p).',
    'Euler\'s theorem: if gcd(a, n) = 1 then a^φ(n) ≡ 1 (mod n).',
    'Wilson\'s theorem: (p − 1)! ≡ −1 (mod p) for prime p.',
    'Chinese remainder theorem: congruences x ≡ r₁ (mod m₁) and x ≡ r₂ (mod m₂) with co-prime moduli have a unique solution modulo m₁m₂.'
  ],
  intu: 'Remainders behave like numbers on a clock face of size n. Adding, multiplying and raising to a power on the clock face gives the same remainder as doing it with the big numbers first. Powers on a clock go round in cycles, and the theorems tell you how long the cycle is.',
  mental: 'Reduce the base first (find its remainder), find the cycle length of the powers (using the theorem or by listing), reduce the exponent modulo the cycle length, and compute the small power.',
  formulas: [
    ['Fermat', 'a^(p−1) ≡ 1 (mod p)', 'p prime, p ∤ a.', 'Prime moduli.', '2⁶ ≡ 1 (mod 7)'],
    ['Euler', 'a^φ(n) ≡ 1 (mod n)', 'gcd(a, n) = 1.', 'Composite moduli.', '3⁸ ≡ 1 (mod 15) since φ(15) = 8'],
    ['Reducing powers', 'a^k ≡ a^(k mod cycle) (mod n)', 'Use the cycle length.', 'Large exponents.', '2¹⁰⁰ mod 7: cycle 3'],
    ['Wilson', '(p − 1)! ≡ −1 (mod p)', 'p prime.', 'Factorial remainders.', '6! ≡ −1 ≡ 6 (mod 7)'],
    ['Chinese remainder', 'x ≡ r₁ (mod m₁), x ≡ r₂ (mod m₂), gcd(m₁, m₂) = 1 → x unique mod m₁m₂', 'Find by listing or substitution.', 'Two-condition problems.', 'x ≡ 2 (mod 3), x ≡ 3 (mod 5) → x ≡ 8 (mod 15)']
  ],
  narr: [
    'Work modulo n at every step. To find 7^100 mod 5, reduce 7 to 2, so the question is 2^100 mod 5. By Fermat, 2⁴ ≡ 1 (mod 5), and 100 is a multiple of 4, so the remainder is 1.',
    'When the modulus is not prime, find the cycle by listing powers or use Euler. Powers of 2 modulo 7 are 2, 4, 1 and then repeat with period 3. Since 100 = 3 × 33 + 1, 2^100 ≡ 2¹ = 2 (mod 7).',
    'For factorials, use the fact that n! contains every factor up to n. For n at or above the modulus (or above the largest prime factor needed) the factorial is divisible by the modulus, so the remainder is 0. For prime p, Wilson\'s theorem gives (p − 1)! ≡ −1.',
    'For two conditions with co-prime moduli, list numbers satisfying the larger modulus until one satisfies the other. x ≡ 3 (mod 5) gives 3, 8, 13, …; the first with x ≡ 2 (mod 3) is 8, so x ≡ 8 (mod 15).',
    'A useful trick: a number that leaves remainder r on division by each of several divisors is LCM(divisors) × k + r.'
  ],
  deep: [['Negative remainders', 'Working with −1 is often easier than with n − 1. 99 ≡ −1 (mod 100), so 99^101 ≡ (−1)^101 = −1 ≡ 99 (mod 100).'], ['Binomial shortcut', '(n − 1)^k ≡ (−1)^k (mod n). So 16^23 mod 17 is the same as (−1)^23 = −1 ≡ 16.']],
  vars: [['Power remainders', 'Cycle method.', '2¹⁰⁰ mod 7'], ['Fermat/Euler', 'Theorem use.', '3¹⁰⁰ mod 11'], ['Factorial remainders', 'Wilson.', '6! mod 7'], ['Two conditions', 'CRT.', 'x ≡ 2 (mod 3), 3 (mod 5)'], ['Negative remainder trick', '(n − 1)^k.', '99^101 mod 100']],
  ex: [
    { t: 'Power by cycle', q: 'Find the remainder when 2¹⁰⁰ is divided by 7.', g: ['2¹⁰⁰', 'modulus 7'], c: 'Find the cycle of powers.', s: [['List powers', '2¹ = 2, 2² = 4, 2³ = 8 ≡ 1 (mod 7): cycle length 3.'], ['Reduce the exponent', '100 = 3 × 33 + 1.'], ['Result', '2¹⁰⁰ ≡ 2¹ = 2.']], a: '2', w: 'The powers repeat every 3 steps.', tr: 'Using the cycle length 4 from other bases.' },
    { t: 'Fermat\'s theorem', q: 'Find the remainder when 3¹⁰⁰ is divided by 11.', g: ['3¹⁰⁰', 'p = 11'], c: '3¹⁰ ≡ 1 (mod 11).', s: [['Apply Fermat', '3¹⁰ ≡ 1 (mod 11).'], ['Reduce', '3¹⁰⁰ = (3¹⁰)¹⁰ ≡ 1.'], ['Remainder', '1.']], a: '1', w: 'The exponent 100 is a multiple of 10.', tr: 'Applying Fermat with modulus 11 but exponent 11.' },
    { t: 'Chinese remainder', q: 'Find the smallest positive number that leaves remainder 2 when divided by 3 and remainder 3 when divided by 5.', g: ['x ≡ 2 (mod 3)', 'x ≡ 3 (mod 5)'], c: 'List numbers for one condition.', s: [['List x ≡ 3 (mod 5)', '3, 8, 13, 18, …'], ['Test mod 3', '3 leaves 0, 8 leaves 2.'], ['Result', 'x = 8.']], a: '8', w: 'The solution repeats every 15.', tr: 'Taking the sum of the two remainders.' }
  ],
  short: { title: 'Reduce first, cycle second', trad: 'Compute the huge power and divide.', fast: 'Reduce the base, find the cycle length (Fermat/Euler or listing), reduce the exponent, and compute the small power.', rules: ['Reduce at every step.', 'p prime: cycle divides p − 1.', 'Use −1 for n − 1.', 'CRT: list the larger modulus.'] },
  mist: [['Applying Fermat to a composite modulus', 'Using a^(n−1) ≡ 1 for any n.', 'Fermat needs a prime modulus; use Euler otherwise.'], ['Forgetting gcd(a, n) = 1', 'Using the theorem when a and n share a factor.', 'Check the gcd first.'], ['Reducing the exponent incorrectly', 'Taking the exponent mod n instead of mod the cycle.', 'Reduce modulo the cycle length.']],
  tips: { sec: 90, elim: 'A remainder must be less than the divisor; discard larger options.', adv: 'Always check whether the base is ±1 modulo n.', ins: 'Remainder problems are the base of cycle problems in unit digits.' },
  rev: ['Reduce the base.', 'Find the cycle.', 'Fermat and Euler.', 'Wilson.', 'CRT by listing.'],
  qf: ['a^(p−1) ≡ 1 (mod p)', 'a^φ(n) ≡ 1 (mod n)'],
  take: ['Work with remainders.', 'Cycles repeat.', 'Use −1 tricks.', 'Check theorem conditions.'],
  self: ['Can I find 2¹⁰⁰ mod 7?', 'Can I use Fermat?', 'Can I solve two congruences?']
});
const q2 = [
  easy('The remainder when 2¹⁰⁰ is divided by 7 is', modpow(2, 100, 7), [1, 4, 6], '2 has cycle length 3 modulo 7 (2, 4, 1). 100 leaves remainder 1 on division by 3, so the remainder is 2.'),
  easy('The remainder when 7¹⁰⁰ is divided by 5 is', modpow(7, 100, 5), [2, 3, 4], '7 ≡ 2 (mod 5) and 2⁴ ≡ 1. 100 is a multiple of 4, so the remainder is 1.'),
  easy('The remainder when 10²⁵ is divided by 9 is', modpow(10, 25, 9), [0, 3, 9], '10 ≡ 1 (mod 9), so 10²⁵ ≡ 1.'),
  easy('The remainder when 50 is divided by 7 is', 50 % 7, [0, 3, 6], '50 = 7 × 7 + 1, so the remainder is 1.'),
  easy('The remainder when 3¹⁰ is divided by 11 is', modpow(3, 10, 11), [0, 3, 10], 'By Fermat\'s little theorem, 3¹⁰ ≡ 1 (mod 11).'),
  easy('The remainder when 15 × 16 is divided by 7 is', (15 * 16) % 7, [1, 3, 5], '15 ≡ 1 and 16 ≡ 2, so the product is 2 modulo 7.'),

  medium('The remainder when 3¹⁰⁰ is divided by 11 is', modpow(3, 100, 11), [3, 5, 9], '3¹⁰ ≡ 1 (mod 11), so 3¹⁰⁰ = (3¹⁰)¹⁰ ≡ 1.'),
  medium('The remainder when 99⁹⁹ is divided by 100 is', modpow(99, 99, 100), [1, 9, 49], '99 ≡ −1 (mod 100), so 99⁹⁹ ≡ (−1)⁹⁹ = −1 ≡ 99.'),
  medium('The remainder when 6! is divided by 7 is', 720 % 7, [1, 5, 0], '6! = 720 = 7 × 102 + 6, so the remainder is 6 (Wilson: 6! ≡ −1 ≡ 6).'),
  medium('The smallest positive number that leaves remainder 2 on division by 3 and remainder 3 on division by 5 is', first(x => x % 3 === 2 && x % 5 === 3), [5, 11, 13], 'Numbers ≡ 3 (mod 5): 3, 8, 13, …. 8 leaves remainder 2 on division by 3.'),
  medium('The remainder when 16²³ is divided by 17 is', modpow(16, 23, 17), [1, 15, 8], '16 ≡ −1 (mod 17), so 16²³ ≡ (−1)²³ = −1 ≡ 16.'),
  medium('The remainder when 2⁵⁰ is divided by 15 is', modpow(2, 50, 15), [1, 2, 8], 'Powers of 2 modulo 15 repeat 2, 4, 8, 1 (period 4). 50 leaves remainder 2 on division by 4, so 2⁵⁰ ≡ 4.'),
  medium('The remainder when 25! is divided by 2000 is', 0, [1, 125, 1000], '2000 = 2⁴ × 5³. 25! contains 2²² and 5⁶ in its factorisation, so it is divisible by 2000.'),
  medium('The remainder when 8¹⁰ is divided by 9 is', modpow(8, 10, 9), [0, 8, 4], '8 ≡ −1 (mod 9), so 8¹⁰ ≡ (−1)¹⁰ = 1.'),

  placement('The smallest number which leaves remainder 5 when divided by 6, 8 and 12 is', first(x => x % 6 === 5 && x % 8 === 5 && x % 12 === 5, 5), [29, 57, 125], 'LCM(6, 8, 12) = 24, so the number is 24 + 5 = 29.'),
  placement('The remainder when 17¹⁷ is divided by 16 is', modpow(17, 17, 16), [0, 2, 15], '17 ≡ 1 (mod 16), so 17¹⁷ ≡ 1.'),
  placement('The remainder when 5⁹⁹ is divided by 13 is', modpow(5, 99, 13), [1, 5, 12], 'Powers of 5 mod 13 repeat 5, 12, 8, 1 (period 4). 99 leaves remainder 3 on division by 4, so the remainder is 8.'),
  placement('The remainder when 3⁴⁰ is divided by 80 is', modpow(3, 40, 80), [3, 9, 27], '3⁴ = 81 ≡ 1 (mod 80), so 3⁴⁰ = (3⁴)¹⁰ ≡ 1.'),
  placement('A number leaves remainder 4 on division by 5 and remainder 5 on division by 6. The smallest such positive number is', first(x => x % 5 === 4 && x % 6 === 5), [11, 19, 23], 'The number is 1 less than a common multiple: 30 − 1 = 29.'),
  placement('The remainder when 1! + 2! + 3! + … + 100! is divided by 10 is', (() => { let s = 0, f = 1; for (let i = 1; i <= 100; i++) { f = (f * i) % 10; s = (s + f) % 10; } return s; })(), [1, 4, 6], 'From 5! onward each factorial ends in 0. So only 1! + 2! + 3! + 4! = 33 matters: remainder 3.')
];
build(ch2, q2);
