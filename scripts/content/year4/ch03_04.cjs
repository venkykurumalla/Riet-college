const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, inr, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'mqm', category: 'Advanced Aptitude / Mixed Problems' };

// ---------- Chapter 3 ----------
const ch3 = C({ ...base, n: 3, id: 'y4-mqm-adv-calc-techniques', title: 'Advanced Calculation Techniques',
  tag: 'Algebraic identities, base-and-deviation, vedic-style methods and percentage fractions for fast exact arithmetic',
  over: 'Fast exact arithmetic comes from a small toolkit: squaring numbers near a base, multiplying by 11, 25, 99 or 101, using (a + b)(a − b) = a² − b², and converting percentages to fractions. Each technique turns a long multiplication into two or three short steps. The tools are valid for every input; the skill is spotting when one applies.',
  place: 'Calculation time decides how many questions you attempt; these techniques save 15–30 seconds on each arithmetic-heavy question.',
  real: 'Mental arithmetic for bills, discounts and estimates uses the same shortcuts.',
  obj: ['Square numbers near 50 and 100 quickly', 'Multiply by 5, 9, 11, 25, 99 and 101', 'Use a² − b² and (a ± b)² for products', 'Use percentage–fraction equivalents', 'Verify with digit sums (casting out nines)'],
  pre: ['Number System', 'Simplification', 'Percentages'],
  refresh: '(a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b²; (a + b)(a − b) = a² − b².',
  defs: ['Base: a convenient round number near the numbers being multiplied.', 'Deviation: the difference between a number and the base.', 'Percentage–fraction equivalent: 12.5% = 1/8, 16.67% = 1/6 and so on.', 'Digit sum: the repeated sum of digits, used to check products.', 'Complement: what a number lacks to reach a base.'],
  intu: 'Almost every awkward product is a nearby easy product plus a small correction.',
  mental: 'Look for a base (10, 50, 100) or an identity. Compute the easy product, then add or subtract the correction.',
  formulas: [['Square near 50', '(50 + d)² = 2500 + 100d + d²', 'Numbers near 50.', 'Squares.', '53² = 2500 + 300 + 9 = 2,809'], ['Difference of squares', 'ab = ((a + b)/2)² − ((a − b)/2)²', 'Close numbers.', 'Products.', '47 × 53 = 50² − 3² = 2,491'], ['Multiply by 25', 'n × 25 = n × 100 ÷ 4', 'Any n.', 'Quick.', '84 × 25 = 8,400 ÷ 4 = 2,100'], ['Multiply by 99', 'n × 100 − n', 'Any n.', 'Quick.', '37 × 99 = 3,700 − 37 = 3,663'], ['Casting out nines', 'Digit sums multiply', 'Check.', 'Verification.', '47 × 53 ≡ 2 × 8 = 16 ≡ 7']],
  narr: ['To find 53², write 50 + 3: 2,500 + 2 × 50 × 3 + 9 = 2,809. For 47 × 53 use the same centre 50: 50² − 3² = 2,491.', 'For 37 × 99, write 3,700 − 37 = 3,663. For 84 × 25, divide 8,400 by 4 to get 2,100.', 'To multiply by 11, add adjacent digits: 346 × 11 = 3 | 3+4 | 4+6 | 6 = 3,806.', 'Percentage equivalents turn percentages into division: 12.5% of 640 = 640 ÷ 8 = 80; 16⅔% of 540 = 540 ÷ 6 = 90.', 'To check 47 × 53 = 2,491, digit sums: 47 → 11 → 2; 53 → 8; 2 × 8 = 16 → 7; 2,491 → 16 → 7 ✓.'],
  deep: [['Deviation method for 96 × 97', 'Base 100: deviations −4 and −3. Cross-subtract 96 − 3 = 93 (or 97 − 4), then multiply deviations 12: 9,312.'], ['Why casting out nines works', 'A number leaves the same remainder mod 9 as its digit sum; products preserve remainders.']],
  vars: [['Squares', 'Near 50 or 100.', '53²'], ['Products of close numbers', 'a² − b².', '47 × 53'], ['Multiples of 25, 99, 101', 'Easy base.', '84 × 25'], ['Percent as fractions', 'Divide.', '12.5% of 640'], ['Checks', 'Digit sums.', '47 × 53']],
  ex: [
    { t: 'Square near 50', q: 'Find 53².', g: ['53 = 50 + 3'], c: '(50 + d)².', s: [['Expand', '2,500 + 2 × 50 × 3 + 3².'], ['Add', '2,500 + 300 + 9 = 2,809.']], a: '2,809', w: 'Check by 53 × 53.', tr: 'Forgetting the middle term.' },
    { t: 'Difference of squares', q: 'Find 47 × 53.', g: ['Centre 50'], c: 'a² − b².', s: [['Centre', '47 × 53 = (50 − 3)(50 + 3).'], ['Compute', '2,500 − 9 = 2,491.']], a: '2,491', w: 'Symmetric about 50.', tr: 'Squaring one number.' },
    { t: 'Multiply by 99', q: 'Find 37 × 99.', g: ['99 = 100 − 1'], c: 'n × 100 − n.', s: [['Hundreds', '3,700.'], ['Subtract', '3,700 − 37 = 3,663.']], a: '3,663', w: 'Always n × 100 − n.', tr: 'Adding instead of subtracting.' }
  ],
  short: { title: 'Base and correction', trad: 'Long multiplication.', fast: 'Pick a base or identity, do the easy product, then correct.', rules: ['Near 50: 2,500 + 100d + d².', 'Symmetric pair: centre² − gap².', '25 = 100 ÷ 4.', '99 = 100 − 1.'] },
  mist: [['Dropping the middle term', 'Wrong square.', 'Use 2ab.'], ['Wrong centre', 'Not symmetric.', 'Check the average.'], ['Skipping the check', 'Slips.', 'Cast out nines.']],
  tips: { sec: 30, elim: 'Last digit of a product must match the product of last digits.', adv: 'Memorise squares to 30 and fractions to 1/12.', ins: 'A shortcut that takes longer than direct multiplication is not a shortcut.' },
  rev: ['Squares.', 'Symmetric products.', '25, 99, 11.', 'Percent fractions.', 'Casting nines.'],
  qf: ['ab = c² − d²'],
  take: ['Find a base.', 'Use identities.', 'Fractions for percent.', 'Check by digit sums.'],
  self: ['Can I square 53 mentally?', 'Can I use a² − b²?', 'Can I check a product?']
});
const q3 = [
  N('e', '53² equals', 53 * 53, '(50 + 3)² = 2,500 + 300 + 9 = 2,809.'),
  N('e', '47 × 53 equals', 47 * 53, '50² − 3² = 2,500 − 9 = 2,491.'),
  N('e', '37 × 99 equals', 37 * 99, '3,700 − 37 = 3,663.'),
  N('e', '84 × 25 equals', 84 * 25, '8,400 ÷ 4 = 2,100.'),
  N('e', '12.5% of 640 equals', 640 / 8, '12.5% = 1/8; 640 ÷ 8 = 80.'),
  N('e', '346 × 11 equals', 346 * 11, '3 | 3+4 | 4+6 | 6 gives 3,806.'),
  N('m', '96 × 97 equals', 96 * 97, 'Base 100: deviations −4 and −3; 96 − 3 = 93 and 4 × 3 = 12, giving 9,312.'),
  N('m', '104 × 106 equals', 104 * 106, 'Base 100: 104 + 6 = 110 and 4 × 6 = 24, giving 11,024.'),
  N('m', '68² equals', 68 * 68, '(70 − 2)² = 4,900 − 280 + 4 = 4,624.'),
  N('m', '16⅔% of 540 equals', 540 / 6, '16⅔% = 1/6; 540 ÷ 6 = 90.'),
  N('m', '999 × 45 equals', 999 * 45, '45,000 − 45 = 44,955.'),
  N('m', '(8.5)² equals', 8.5 * 8.5, '(8 + 0.5)² = 64 + 8 + 0.25 = 72.25.', 2),
  N('m', '72 × 68 equals', 72 * 68, '70² − 2² = 4,900 − 4 = 4,896.'),
  N('m', '0.64 × 125 equals', 0.64 * 125, '125 = 1000/8: 0.64 × 1000 ÷ 8 = 80.'),
  N('p', '2,001² − 1,999² equals', 2001 * 2001 - 1999 * 1999, '(a + b)(a − b) = 4,000 × 2 = 8,000.'),
  N('p', '875 × 8 equals', 875 * 8, '875 = 7000/8, so 875 × 8 = 7,000.'),
  N('p', '15% of 240 plus 25% of 160 equals', 0.15 * 240 + 0.25 * 160, '15% of 240 = 36; 25% of 160 = 40; total 76.'),
  N('p', 'The value of 98² − 2² equals', 98 * 98 - 4, '(98 + 2)(98 − 2) = 100 × 96 = 9,600.'),
  N('p', '(425 × 24) ÷ 100 equals', 425 * 24 / 100, '425 × 24 = 10,200; ÷ 100 = 102.', 0),
  N('p', 'The last digit of 47 × 53 × 61 is', (47 * 53 * 61) % 10, 'Last digits 7 × 3 = 21 → 1; 1 × 1 = 1.')
];
build(ch3, q3);

// ---------- Chapter 4 ----------
const ch4 = C({ ...base, n: 4, id: 'y4-mqm-approx-estimation', title: 'Approximation and Estimation',
  tag: 'Rounding sensibly, bounding answers and estimating roots, percentages and products when options are far apart',
  over: 'When the options of a question are far apart you do not need an exact answer; you need a close one, quickly. Approximation replaces numbers by nearby round ones, uses benchmark percentages, and bounds an answer between two easy values. The skill lies in choosing the precision: round more when options are spread, less when they are close.',
  place: 'Timed tests reward approximation on arithmetic-heavy items, especially in data interpretation and simplification.',
  real: 'Estimating costs, distances and quantities quickly is a daily workplace skill.',
  obj: ['Round to two significant figures safely', 'Use benchmark percentages and fractions', 'Estimate square roots and products', 'Bound an answer between two known values', 'Judge the precision needed from the options'],
  pre: ['Advanced Calculation Techniques', 'Simplification'],
  refresh: 'Relative error ≈ (rounded − exact) ÷ exact. Rounding both numbers of a product in opposite directions partly cancels the error.',
  defs: ['Approximation: replacing a number by a nearby simpler one.', 'Significant figures: digits that carry the value (4,180 has 3 or 2).', 'Bounding: placing an answer between a lower and upper estimate.', 'Benchmark: an easy percentage or fraction to compare against.', 'Option spacing: the gap between answer choices.'],
  intu: 'If the options are 10% apart, an error of 2% is harmless; if they are 1% apart, estimate more carefully or compute exactly.',
  mental: 'Round to two figures, compute, compare with options. If two are close, tighten the rounding or calculate exactly.',
  formulas: [['Round both', '4,180 × 52 ≈ 4,200 × 50', 'Products.', 'Quick.', '≈ 210,000'], ['Benchmark %', '10% = ÷10; 5% = half; 1% = ÷100', 'Percentages.', 'Quick.', '15% of 840'], ['Root bound', '√n between consecutive squares', 'Roots.', 'Estimate.', '√150 between 12 and 13'], ['Error direction', 'Round one up, one down', 'Products.', 'Cancels.', '48 × 52'], ['Tighten', 'Add one significant figure', 'Close options.', 'Precision.', '4,180 → 4,200 → 4,180']],
  narr: ['4,180 × 52 ≈ 4,200 × 50 = 210,000; the exact value is 217,360. The difference is about 3%, safe if options are more than 5% apart.', '15% of 840: 10% is 84 and 5% is 42, so 126.', '√150: 12² = 144 and 13² = 169, so √150 is a little above 12; since 150 is 6 above 144, √150 ≈ 12 + 6/24 = 12.25.', 'A growth from 4,180 to 4,970 is about 800 ÷ 4,200 ≈ 19%.', 'If options are 24%, 25% and 26%, rough rounding is not enough; calculate exactly.'],
  deep: [['Linear approximation for roots', '√(a² + d) ≈ a + d/(2a) for small d.'], ['Cancelling rounding errors', 'Round numerator down and denominator down by the same percentage to keep a ratio the same.']],
  vars: [['Products', 'Round to two figures.', '4,180 × 52'], ['Percentages', 'Benchmarks.', '15% of 840'], ['Roots', 'Bounds.', '√150'], ['Growth', 'Rounded ratios.', '4,180 → 4,970'], ['Close options', 'Exact.', '24%, 25%, 26%']],
  ex: [
    { t: 'Rounded product', q: 'Estimate 4,180 × 52.', g: ['4,180', '52'], c: 'Round both.', s: [['Round', '4,200 × 50.'], ['Compute', '210,000.']], a: 'About 2.1 lakh', w: 'Exact is 2,17,360.', tr: 'Rounding too coarsely.' },
    { t: 'Root estimate', q: 'Estimate √150.', g: ['150'], c: 'Nearest square.', s: [['Bounds', '12² = 144, 13² = 169.'], ['Refine', '12 + 6/24 = 12.25.']], a: 'About 12.25', w: 'Exact 12.247.', tr: 'Saying 13.' },
    { t: 'Growth', q: 'Revenue rose from 4,180 to 4,970. Estimate the percentage growth.', g: ['4,180', '4,970'], c: 'Round and divide.', s: [['Change', '≈ 800.'], ['Ratio', '800/4,200 ≈ 19%.']], a: 'About 19%', w: 'Exact 18.9%.', tr: 'Dividing by the new value.' }
  ],
  short: { title: 'Round, bound, compare', trad: 'Exact every time.', fast: 'Round to two figures, bound with easy values, and compare with the option spacing.', rules: ['Round to two figures.', 'Use 10% and 5%.', 'Bound roots by squares.', 'Tighten only if options are close.'] },
  mist: [['Over-rounding', 'Picks a neighbouring option.', 'Check option spacing.'], ['Rounding both the same direction', 'Error adds.', 'Round oppositely.'], ['Skipping bounds', 'Missed absurd answers.', 'Bound first.']],
  tips: { sec: 40, elim: 'Reject options outside your bounds.', adv: 'Estimate before every exact calculation.', ins: 'The nearest option to a good estimate is usually correct.' },
  rev: ['Round.', 'Benchmarks.', 'Roots.', 'Bounds.', 'Tighten.'],
  qf: ['√(a² + d) ≈ a + d/(2a)'],
  take: ['Two figures.', 'Benchmarks.', 'Bounds.', 'Check spacing.'],
  self: ['Can I estimate a product?', 'Can I bound a root?', 'Can I tell when to be exact?']
});
const A = (k, text, val, expl, d = 0) => N(k, text, val, expl, d);
const q4 = [
  T('e', 'The product 4,180 × 52 is closest to', '217,000', ['190,000', '240,000', '260,000'], '4,200 × 50 = 210,000, and the exact value is 217,360, so 217,000 is the closest.'),
  N('e', '15% of 840 equals', 840 * 0.15, '10% = 84, 5% = 42; total 126.'),
  N('e', '√150 is closest to', 12.25, '12² = 144 and 13² = 169; 150 is 6 above 144, so about 12 + 6/24 = 12.25.', 2),
  N('e', '5% of 3,640 is approximately', 3640 * 0.05, '10% = 364; half = 182.'),
  T('e', 'Revenue rose from 4,180 to 4,970. The growth is closest to', '19%', ['14%', '24%', '29%'], '≈ 800 ÷ 4,200 = 19%.'),
  N('e', '33⅓% of 2,430 equals', 2430 / 3, '33⅓% = 1/3; 2,430 ÷ 3 = 810.'),
  N('m', 'The value of 19.8 × 5.1 is closest to', 19.8 * 5.1, '20 × 5 = 100, and the exact value is 100.98.', 2),
  N('m', '48 × 52 equals', 48 * 52, '50² − 2² = 2,496.'),
  N('m', '√(2,025) equals', 45, '45² = 2,025.'),
  T('m', '39.8% of 5,010 is closest to', '1,994', ['1,794', '2,194', '2,394'], '40% of 5,000 = 2,000; the exact value is 1,994.'),
  N('m', '8,950 ÷ 49.5 is closest to', 8950 / 49.5, '9,000 ÷ 50 = 180; the exact value is 180.8.', 1),
  T('m', 'The ratio 7,240 : 3,610 is closest to', '2 : 1', ['3 : 1', '3 : 2', '5 : 2'], '7,240 ÷ 3,610 = 2.006, so about 2 : 1.'),
  N('m', '12% of 2,490 plus 8% of 1,510 is closest to', 0.12 * 2490 + 0.08 * 1510, '12% of 2,500 = 300 and 8% of 1,500 = 120, giving about 420; exact 419.6.', 1),
  T('m', 'The cube root of 9,261 is', '21', ['19', '23', '27'], '21³ = 9,261.'),
  T('p', 'A price rises from ₹248 to ₹312. The percentage increase is closest to', '26%', ['20%', '32%', '36%'], '(312 − 248)/248 = 64/248 = 25.8%, which is about 26%.'),
  N('p', '(1.05)⁴ is closest to', 1.05 ** 4, '1.05² = 1.1025; squared again gives 1.2155.', 4),
  T('p', 'A tank of 8,950 litres is 37% full. The water is closest to (litres)', '3,311', ['2,311', '4,311', '3,811'], '37% of 9,000 = 3,330; exact 3,311.5.'),
  T('p', 'Which is larger: 7/9 or 11/14?', '11/14', ['7/9', 'They are equal', 'Cannot be determined'], '7/9 = 0.778 and 11/14 = 0.786.'),
  N('p', '2,990 × 0.0498 is closest to', 2990 * 0.0498, '3,000 × 0.05 = 150; exact 148.9.', 1),
  N('p', 'If 3.9² is estimated as 4², the percentage error (to one decimal) is', (16 - 15.21) / 15.21 * 100, '3.9² = 15.21; 16 − 15.21 = 0.79; 0.79 ÷ 15.21 = 5.2%.', 1, pc)
];
build(ch4, q4);
