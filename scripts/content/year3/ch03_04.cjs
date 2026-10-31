const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const modpow = (b, e, m) => { let r = 1n, x = BigInt(b) % BigInt(m), k = BigInt(e); const M = BigInt(m); while (k > 0n) { if (k & 1n) r = r * x % M; x = x * x % M; k >>= 1n; } return Number(r); };
const vfact = (p, n) => { let c = 0; for (let k = p; k <= n; k *= p) c += Math.floor(n / k); return c; };
const vnum = (p, n) => { let c = 0; while (n % p === 0) { n /= p; c++; } return c; };

// ---------------- Chapter 3 ----------------
const ch3 = C({
  n: 3, id: 'y3-quant-unit-digit-cycles', cat: 'quant', title: 'Unit Digit Cycles for Powers',
  tag: 'The repeating pattern of last digits and how to read it for very large powers',
  over: 'The last digit of a power depends only on the last digit of the base, and the last digits of successive powers repeat in a short cycle. Knowing the cycle for each digit lets you find the unit digit of numbers like 7^2023 without computing them. The same idea, extended to two digits, gives the last two digits of a power.',
  place: 'Unit-digit questions are commonly asked in company aptitude rounds, usually as "the unit digit of 7^123 + 3^45" or of a product of several powers.',
  real: 'Checksums, hashing and calendar-like cycles are built on the same repeating patterns.',
  obj: ['Know the cycle of unit digits for bases 0 to 9', 'Reduce the exponent by the cycle length', 'Handle sums and products of powers', 'Find the last two digits of a power', 'Handle tower exponents such as a^(b^c)'],
  pre: ['Remainder Theorems', 'Number System Fundamentals'],
  refresh: 'The unit digit of a product is the unit digit of the product of the unit digits. For a sum, add the unit digits.',
  defs: [
    'Cycle length (period): the number of steps after which the unit digits repeat.',
    'Cycles: 0, 1, 5, 6 have length 1; 4 and 9 have length 2; 2, 3, 7, 8 have length 4.',
    'Cycle of 2: 2, 4, 8, 6. Of 3: 3, 9, 7, 1. Of 7: 7, 9, 3, 1. Of 8: 8, 4, 2, 6. Of 4: 4, 6. Of 9: 9, 1.',
    'Exponent reduction: the unit digit of aⁿ depends on n modulo the cycle length (use the full cycle when the remainder is 0).',
    'Last two digits: work modulo 100.'
  ],
  intu: 'Only the last digit is ever needed, so the base can be replaced by its last digit. Then the powers cycle, and a huge exponent is just a position in a short cycle.',
  mental: 'Take the last digit of the base, recall its cycle, divide the exponent by the cycle length and use the remainder as the position (a remainder 0 means the last element of the cycle).',
  formulas: [
    ['Cycle table', '2: 2,4,8,6;  3: 3,9,7,1;  7: 7,9,3,1;  8: 8,4,2,6;  4: 4,6;  9: 9,1', 'Digits 0, 1, 5, 6 never change.', 'Any unit digit.', '7^123 → 123 mod 4 = 3 → 3'],
    ['Reducing the exponent', 'Position = exponent mod cycle (0 → last)', 'Use the cycle of the last digit.', 'Large exponents.', '2^100: 100 mod 4 = 0 → 6'],
    ['Sums and products', 'Unit digit of the sum or product of the unit digits', 'Compute each term\'s unit digit first.', 'Combined expressions.', '7^123 + 3^45 → 3 + 3 = 6'],
    ['Last two digits', 'a^n mod 100', 'Cycles are longer (up to 20).', 'Two-digit questions.', '7⁴ = 2401 → ends 01'],
    ['Towers', 'Unit digit of a^(b^c): reduce b^c modulo the cycle length of a', 'Work top-down.', 'Tower questions.', '2^(3^2) = 2⁹ → 2']
  ],
  narr: [
    'Take the last digit of the base. Powers of 7 end in 7, 9, 3, 1 and repeat every 4. For 7^123, 123 = 4 × 30 + 3, so the unit digit is the 3rd in the cycle: 3.',
    'When the exponent is a multiple of the cycle length, the unit digit is the last element of the cycle. 2^100: the cycle 2, 4, 8, 6 has length 4 and 100 is a multiple of 4, so the unit digit is 6.',
    'For sums and products, take unit digits term by term. 2^2023 ends in 8 (2023 mod 4 = 3) and 3^2024 ends in 1 (2024 mod 4 = 0), so the product ends in 8 and the sum ends in 9.',
    'Digits 4 and 9 have a cycle of 2: the powers of 4 end in 4 if the exponent is odd and 6 if even; the powers of 9 end in 9 if odd and 1 if even.',
    'For a tower such as 2^(3^2), compute the exponent first: 3² = 9, then 2⁹: 9 mod 4 = 1, so the unit digit is 2. For the last two digits, 7⁴ = 2401 ends in 01, so 7^(4k) ends in 01.'
  ],
  deep: [['Last two digits of powers of 7', '7¹ = 07, 7² = 49, 7³ = 43, 7⁴ = 01, then it repeats every 4. So 7^100 ends in 01 and 7^101 in 07.'], ['Why factorials end in 0', 'From 5! onward every factorial contains the factors 2 and 5, so the unit digit is 0. Only 1! to 4! (1, 2, 6, 24) matter.']],
  vars: [['Single power', 'One cycle.', '7^123'], ['Sum or product of powers', 'Combine digits.', '2^2023 × 3^2024'], ['Cycle of 4 or 9', 'Odd/even.', '4^101'], ['Last two digits', 'Mod 100.', '7^100'], ['Tower exponents', 'Top-down.', '2^(3^2)']],
  ex: [
    { t: 'Unit digit of a power', q: 'Find the unit digit of 7¹²³.', g: ['Base 7', 'Exponent 123'], c: 'Cycle of 7 is 7, 9, 3, 1.', s: [['Cycle', '7, 9, 3, 1, length 4.'], ['Reduce', '123 = 4 × 30 + 3.'], ['Read', 'The 3rd element is 3.']], a: '3', w: 'The pattern repeats every 4 powers.', tr: 'Using the exponent itself instead of its remainder.' },
    { t: 'Product of powers', q: 'Find the unit digit of 2²⁰²³ × 3²⁰²⁴.', g: ['2^2023', '3^2024'], c: 'Unit digits multiply.', s: [['2^2023', '2023 mod 4 = 3 → 8.'], ['3^2024', '2024 mod 4 = 0 → last of 3, 9, 7, 1 → 1.'], ['Product', '8 × 1 = 8.']], a: '8', w: 'Only the unit digits matter.', tr: 'Treating remainder 0 as the first element.' },
    { t: 'Sum of factorials', q: 'Find the unit digit of 1! + 2! + 3! + … + 50!.', g: ['Factorials up to 50!'], c: 'Factorials from 5! end in 0.', s: [['Large factorials', '5! and above end in 0.'], ['Small ones', '1 + 2 + 6 + 24 = 33.'], ['Unit digit', '3.']], a: '3', w: 'Only 1! to 4! contribute.', tr: 'Adding all fifty terms.' }
  ],
  short: { title: 'Cycle table', trad: 'Multiply the base repeatedly.', fast: 'Remember the cycles of 2, 3, 7, 8 (length 4), 4, 9 (length 2) and read the position from the exponent remainder.', rules: ['Remainder 0 means the last in the cycle.', '0, 1, 5, 6 never change.', 'For sums, add unit digits.', 'For last two digits, find a power ending in 01.'] },
  mist: [['Treating remainder 0 as position 0', 'Reading the first element for a multiple of the cycle length.', 'Use the last element of the cycle.'], ['Using the wrong cycle', 'Mixing the cycles of 3 and 7.', 'Write the cycle out.'], ['Forgetting that unit digit of a sum needs unit digits of terms', 'Adding the full numbers.', 'Reduce each term first.']],
  tips: { sec: 45, elim: 'Unit digits of squares can only be 0, 1, 4, 5, 6 or 9; reject other options in square questions.', adv: 'Memorise the four cycles of length 4.', ins: 'Unit-digit questions are very fast once the table is known.' },
  rev: ['Last digit of the base.', 'Cycle lengths 1, 2, 4.', 'Remainder 0 → last.', 'Sums/products by unit digits.', 'Last two digits mod 100.'],
  qf: ['Cycles: 2, 3, 7, 8 → 4; 4, 9 → 2'],
  take: ['Cycles are short.', 'Reduce the exponent.', 'Unit digits combine.', 'Factorials end in 0 from 5!.'],
  self: ['Can I find the unit digit of 7^123?', 'Can I handle a product of two powers?', 'Can I find the last two digits of 7^100?']
});
const q3 = [
  easy('The unit digit of 7¹²³ is', modpow(7, 123, 10), [1, 7, 9], 'The cycle of 7 is 7, 9, 3, 1. 123 leaves remainder 3 on division by 4, giving 3.'),
  easy('The unit digit of 2¹⁰⁰ is', modpow(2, 100, 10), [2, 4, 8], 'The cycle of 2 is 2, 4, 8, 6. 100 is a multiple of 4, so the unit digit is 6.'),
  easy('The unit digit of 4¹⁰¹ is', modpow(4, 101, 10), [6, 2, 8], 'The powers of 4 end in 4 for odd exponents: 4.'),
  easy('The unit digit of 9⁵⁰ is', modpow(9, 50, 10), [9, 3, 7], 'The powers of 9 end in 9 for odd exponents and 1 for even exponents: 1.'),
  easy('The unit digit of 13¹³ is', modpow(13, 13, 10), [1, 7, 9], '3¹³: the cycle of 3 is 3, 9, 7, 1; 13 leaves remainder 1 on division by 4: 3.'),
  easy('The unit digit of 5¹⁰⁰⁰ is', 5, [0, 1, 25], 'Every power of 5 ends in 5.'),

  medium('The unit digit of 2²⁰²³ × 3²⁰²⁴ is', (modpow(2, 2023, 10) * modpow(3, 2024, 10)) % 10, [2, 4, 6], '2²⁰²³ ends in 8 and 3²⁰²⁴ ends in 1. The product ends in 8.'),
  medium('The unit digit of 7⁴⁵ + 3⁴⁵ is', (modpow(7, 45, 10) + modpow(3, 45, 10)) % 10, [0, 4, 6], '7⁴⁵ ends in 7 and 3⁴⁵ ends in 3 (45 leaves 1 on division by 4). 7 + 3 = 10, so the unit digit is 0.'),
  medium('The unit digit of 1! + 2! + 3! + … + 50! is', 3, [1, 4, 9], '5! and above end in 0. 1 + 2 + 6 + 24 = 33, so the unit digit is 3.'),
  medium('The unit digit of 8⁵⁷ is', modpow(8, 57, 10), [2, 4, 6], 'The cycle of 8 is 8, 4, 2, 6. 57 leaves remainder 1 on division by 4: 8.'),
  medium('The unit digit of (2137)⁷⁵³ is', modpow(7, 753, 10), [1, 3, 7], 'The cycle of 7 is 7, 9, 3, 1. 753 leaves remainder 1 on division by 4: 7.'),
  medium('The unit digit of 6¹⁰⁰ × 9¹⁰¹ is', (6 * modpow(9, 101, 10)) % 10, [4, 6, 8], '6¹⁰⁰ ends in 6 and 9¹⁰¹ ends in 9. 6 × 9 = 54: 4.'),
  medium('The last two digits of 7¹⁰⁰ are', '01', ['07', '43', '49'], '7⁴ = 2401 ends in 01, so 7¹⁰⁰ = (7⁴)²⁵ ends in 01.'),
  medium('The unit digit of 3¹⁰⁰ + 2¹⁰⁰ is', (modpow(3, 100, 10) + modpow(2, 100, 10)) % 10, [3, 5, 9], '3¹⁰⁰ ends in 1 and 2¹⁰⁰ ends in 6. 1 + 6 = 7.'),

  placement('The unit digit of 2^(3^2) is', modpow(2, 9, 10), [4, 6, 8], '3² = 9, so 2⁹: 9 leaves 1 on division by 4: 2.'),
  placement('The unit digit of 7^(7^7) is', (() => { const e = modpow(7, 7, 4); return modpow(7, e === 0 ? 4 : e, 10); })(), [1, 7, 9], 'Find 7⁷ modulo 4: 7 ≡ −1, so 7⁷ ≡ −1 ≡ 3. Then 7³ ends in 3.'),
  placement('The last two digits of 7⁹⁹ are', String(modpow(7, 99, 100)).padStart(2, '0'), ['07', '49', '43'.replace('43', '57')], '7⁴ ≡ 01 (mod 100). 99 = 4 × 24 + 3, so 7⁹⁹ ≡ 7³ = 343 ≡ 43. The last two digits are 43.'),
  placement('The unit digit of 17¹⁷ × 13¹³ × 19¹⁹ is', (modpow(7, 17, 10) * modpow(3, 13, 10) * modpow(9, 19, 10)) % 10, [1, 3, 9], '17¹⁷ ends in 7, 13¹³ ends in 3, 19¹⁹ ends in 9. 7 × 3 = 21 → 1, then 1 × 9 = 9. The unit digit is 9.'),
  placement('The unit digit of 2²⁰²⁴ + 3²⁰²⁴ is', (modpow(2, 2024, 10) + modpow(3, 2024, 10)) % 10, [1, 5, 9], '2²⁰²⁴ ends in 6 and 3²⁰²⁴ ends in 1. The sum ends in 7.'),
  placement('The last digit of 1 + 3 + 3² + 3³ + … + 3⁹⁹ (100 terms) is', (() => { let s = 0; for (let i = 0; i < 100; i++) s = (s + modpow(3, i, 10)) % 10; return s; })(), [0, 4, 9], 'Each block of four terms ends 1 + 3 + 9 + 7 = 20 → 0. 100 terms = 25 blocks, so the unit digit is 0.')
];
build(ch3, q3);

// ---------------- Chapter 4 ----------------
const ch4 = C({
  n: 4, id: 'y3-quant-trailing-zeros', cat: 'quant', title: 'Trailing Zeros in Factorials and Products',
  tag: 'Counting zeros through the powers of 5 and 2, and the highest power of a number in n!',
  over: 'The number of trailing zeros of a number is the number of times 10 divides it. Since 10 = 2 × 5, it equals the smaller of the exponent of 2 and the exponent of 5 in the prime factorisation. In factorials and products the powers of 2 are plentiful, so the count is decided by the powers of 5. The same method gives the highest power of any number that divides n!.',
  place: 'Trailing-zero questions are commonly asked in company aptitude rounds, usually as "the number of zeros at the end of 100!" or of a given product.',
  real: 'Counting factors in large products is used in combinatorics, probability and in sizing numbers in computing.',
  obj: ['Count trailing zeros as min(exponent of 2, exponent of 5)', 'Use Legendre\'s formula for the power of a prime in n!', 'Find the highest power of a composite number dividing n!', 'Count zeros in a product given in factored form', 'Handle numbers like 25^a × 4^b'],
  pre: ['Advanced Number Properties', 'Unit Digit Cycles'],
  refresh: 'The exponent of a prime p in a number N is the number of times p divides N. 10 = 2 × 5.',
  defs: [
    'Trailing zeros: zeros at the end of the decimal form of a number.',
    'Legendre\'s formula: the exponent of a prime p in n! is ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + …',
    'Zeros in n! = exponent of 5 in n! (since 2s are more frequent).',
    'For a composite m = p^a q^b …, the highest power of m dividing n! is the minimum of ⌊(exponent of p in n!)/a⌋, …',
    '⌊x⌋ denotes the greatest integer not exceeding x.'
  ],
  intu: 'Every 10 needs one 2 and one 5. In a long product there are far more 2s than 5s, so the 5s run out first and decide the number of zeros.',
  mental: 'Count the multiples of 5, then of 25, then of 125, and add. For a given product, write it as 2^a × 5^b × (other) and take min(a, b).',
  formulas: [
    ['Zeros in n!', '⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …', 'Powers of 5.', 'Factorial zeros.', '100!: 20 + 4 = 24'],
    ['Product in factored form', 'zeros = min(exponent of 2, exponent of 5)', 'Factorise each factor.', 'Products.', '2^10 × 5^12 → 10'],
    ['Legendre', 'v_p(n!) = Σ ⌊n/pᵏ⌋', 'Any prime p.', 'Power of a prime in n!.', 'v₃(50!) = 16 + 5 + 1 = 22'],
    ['Composite divisor', 'Highest power of m^k = min over primes ⌊v_p(n!)/a⌋', 'm = Πp^a.', 'Highest power of 12 etc.', '12 = 2² × 3 in 50!'],
    ['Zeros of a number', 'Divide by 10 repeatedly (or count 5s)', 'Direct counting.', 'Single large numbers.', '25^6 × 4^6 = 100^6 → 12 zeros']
  ],
  narr: [
    'For n!, count the multiples of 5, 25, 125 and so on. For 100!: ⌊100/5⌋ = 20 and ⌊100/25⌋ = 4, so 24 zeros. Multiples of 25 are counted twice because each contains two 5s.',
    'For a product in factored form, write the total powers of 2 and 5. In 2¹⁰ × 5¹² × 7, the exponent of 2 is 10 and of 5 is 12, so there are min(10, 12) = 10 trailing zeros.',
    'Legendre\'s formula works for any prime. In 50!, the exponent of 3 is ⌊50/3⌋ + ⌊50/9⌋ + ⌊50/27⌋ = 16 + 5 + 1 = 22.',
    'For the highest power of a composite number, split it into primes. For 12 = 2² × 3 in 50!, v₂ = 25 + 12 + 6 + 3 + 1 = 47 so 47 ÷ 2 → 23, and v₃ = 22, so the highest power of 12 is the smaller, 22.',
    'Mixed products: 25⁶ × 4⁶ = (25 × 4)⁶ = 100⁶, which has 12 zeros. 15 × 15 × … products need the exponents of 5 and 2 separately.'
  ],
  deep: [['Count the 5s, not the 2s', 'In a factorial there are always at least as many 2s as 5s, so counting 5s is enough. In an arbitrary product this is not guaranteed; always compute both.'], ['Zeros in the exact numbers', 'A number ends in exactly k zeros if 10^k divides it and 10^(k+1) does not.']],
  vars: [['Zeros in n!', 'Count 5s.', '100!'], ['Zeros in a product', 'min(2s, 5s).', '2^10 × 5^12'], ['Power of a prime in n!', 'Legendre.', '3 in 50!'], ['Power of a composite in n!', 'Min over primes.', '12 in 50!'], ['Special products', 'Combine bases.', '25^6 × 4^6']],
  ex: [
    { t: 'Zeros in a factorial', q: 'How many zeros are there at the end of 100!?', g: ['100!'], c: 'Count the powers of 5.', s: [['Multiples of 5', '⌊100/5⌋ = 20.'], ['Multiples of 25', '⌊100/25⌋ = 4.'], ['Total', '20 + 4 = 24.']], a: '24', w: 'Each multiple of 25 contributes a second 5.', tr: 'Stopping at 20.' },
    { t: 'Zeros in a product', q: 'Find the number of trailing zeros in 15 × 15 × 15 × 12 × 12 × 12 × 12.', g: ['15³ × 12⁴'], c: 'Count 2s and 5s.', s: [['Factorise', '15³ = 3³ × 5³ and 12⁴ = 2⁸ × 3⁴.'], ['Exponents', '5s: 3; 2s: 8.'], ['Zeros', 'min(8, 3) = 3.']], a: '3', w: '10 needs a 2 and a 5.', tr: 'Counting only the 5s without checking the 2s.' },
    { t: 'Highest power of a composite', q: 'Find the highest power of 12 that divides 50!.', g: ['12 = 2² × 3'], c: 'Legendre and minimum.', s: [['Exponent of 2', '25 + 12 + 6 + 3 + 1 = 47; dividing by 2 gives 23.'], ['Exponent of 3', '16 + 5 + 1 = 22.'], ['Minimum', 'min(23, 22) = 22.']], a: '12²²', w: 'The smaller supply decides.', tr: 'Using only the exponent of 3 without dividing 2s by 2.' }
  ],
  short: { title: 'Divide by 5 repeatedly', trad: 'Multiply out the factorial.', fast: 'Divide n by 5, then divide the quotient by 5 again, and add the quotients until the quotient is 0.', rules: ['n!: add ⌊n/5⌋, ⌊n/25⌋, …', 'Products: min(2s, 5s).', 'Composite: min over primes of ⌊v_p/a⌋.', 'Check both 2s and 5s for products.'] },
  mist: [['Counting multiples of 5 only', 'Ignoring multiples of 25 and 125.', 'Add the higher powers.'], ['Ignoring the 2s in a product', 'Assuming 5s always decide.', 'Take the minimum.'], ['Wrong composite handling', 'Dividing the exponent of the larger prime.', 'Divide each prime\'s exponent by its power in m.']],
  tips: { sec: 50, elim: 'The number of zeros in n! is about n/4; reject options far from this.', adv: 'Write the repeated division by 5 in a column.', ins: 'The same Legendre sum answers most "highest power" questions.' },
  rev: ['Zeros = min(2s, 5s).', 'n!: Σ⌊n/5ᵏ⌋.', 'Legendre for any prime.', 'Composite: min of divided exponents.', 'Combine bases like 25 × 4.'],
  qf: ['Σ ⌊n/pᵏ⌋'],
  take: ['5s decide in factorials.', 'Count higher powers of 5.', 'Check 2s in products.', 'Legendre generalises.'],
  self: ['Can I count the zeros of 100!?', 'Can I use Legendre for 3 in 50!?', 'Can I find the highest power of 12 in 50!?']
});
const q4 = [
  easy('The number of trailing zeros in 25! is', vfact(5, 25), [4, 5, 6 + 1], '⌊25/5⌋ + ⌊25/25⌋ = 5 + 1 = 6.'),
  easy('The number of trailing zeros in 10! is', vfact(5, 10), [1, 3, 5], '⌊10/5⌋ = 2.'),
  easy('The number of trailing zeros in 100! is', vfact(5, 100), [20, 22, 25], '⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24.'),
  easy('The number of trailing zeros in 2¹⁰ × 5¹² is', 10, [2, 12, 22], 'Zeros = min(10, 12) = 10.'),
  easy('The number of trailing zeros in 50! is', vfact(5, 50), [10, 11, 13], '⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = 12.'),
  easy('The number of trailing zeros in 20 × 25 × 30 is', Math.min(vnum(2, 20 * 25 * 30), vnum(5, 20 * 25 * 30)), [2, 4, 5], '20 × 25 × 30 = 15000, which ends in 3 zeros.'),

  medium('The number of trailing zeros in 15 × 15 × 15 × 12 × 12 × 12 × 12 is', Math.min(vnum(2, 15 ** 3 * 12 ** 4), vnum(5, 15 ** 3 * 12 ** 4)), [4, 5, 8], '15³ has 5³ and 12⁴ has 2⁸. Zeros = min(8, 3) = 3.'),
  medium('The exponent of 3 in 50! is', vfact(3, 50), [16, 20, 24], '⌊50/3⌋ + ⌊50/9⌋ + ⌊50/27⌋ = 16 + 5 + 1 = 22.'),
  medium('The exponent of 2 in 50! is', vfact(2, 50), [25, 40, 49], '25 + 12 + 6 + 3 + 1 = 47.'),
  medium('The number of trailing zeros in 25⁶ × 4⁶ is', 12, [6, 10, 24], '25⁶ × 4⁶ = 100⁶, which has 12 zeros.'),
  medium('The number of trailing zeros in 200! is', vfact(5, 200), [40, 45, 49], '40 + 8 + 1 = 49.'),
  medium('The highest power of 6 that divides 20! is', Math.min(vfact(2, 20), vfact(3, 20)), [7, 10, 18], 'v₂(20!) = 18 and v₃(20!) = 8. The highest power of 6 is min(18, 8) = 8.'),
  medium('The number of zeros at the end of 5 × 10 × 15 × 20 × 25 is', Math.min(vnum(2, 5 * 10 * 15 * 20 * 25), vnum(5, 5 * 10 * 15 * 20 * 25)), [2, 4, 6], '5 × 10 × 15 × 20 × 25 = 375000. The exponent of 2 is 3 and of 5 is 6, so there are min(3, 6) = 3 zeros.'),
  medium('The number of trailing zeros in 1000! is', vfact(5, 1000), [200, 240, 249], '200 + 40 + 8 + 1 = 249.'),

  placement('The highest power of 12 that divides 50! is 12 raised to', Math.min(Math.floor(vfact(2, 50) / 2), vfact(3, 50)), [20, 23, 47], '12 = 2² × 3. v₂ = 47 gives 23; v₃ = 22. The minimum is 22.'),
  placement('The number of trailing zeros in 1 × 2 × 3 × … × 30 (that is, 30!) is', vfact(5, 30), [5, 6, 8], '⌊30/5⌋ + ⌊30/25⌋ = 6 + 1 = 7.'),
  placement('The number of zeros at the end of 40! − 39! (as 39! × 39) is', vfact(5, 39), [7, 9, 10], '40! − 39! = 39!(40 − 1) = 39! × 39. The factor 39 has no 5, so the zeros are those of 39!: ⌊39/5⌋ + ⌊39/25⌋ = 7 + 1 = 8.'),
  placement('The highest power of 10 that divides 3⁴⁸ × 5²⁰ × 2²⁶ is', Math.min(26, 20), [18, 26, 28], 'The exponent of 2 is 26 and of 5 is 20, so 10²⁰ divides it.'),
  placement('The smallest n for which n! ends in at least 5 zeros is', (() => { for (let n = 1; ; n++) if (vfact(5, n) >= 5) return n; })(), [20, 24, 30], 'v₅(20!) = 4 + 0 = 4 and v₅(25!) = 5 + 1 = 6. The first n with at least 5 zeros is 25.'),
  placement('The number of trailing zeros in 100! + 101! + 102! is', vfact(5, 100), [20, 22, 25], '100! + 101! + 102! = 100!(1 + 101 + 101 × 102) = 100! × 10404, and 10404 has no factor 5, so the zeros are those of 100!: 24.')
];
build(ch4, q4);
