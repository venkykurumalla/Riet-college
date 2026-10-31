const { build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const { N, T, inr, pc, round } = require('./q.cjs');
const base = { year: 4, cat: 'strat', category: 'Placement Strategy & Shortcuts' };
const spec = (o) => C({ ...base, ...o });

// ============ Chapter 27: speed mathematics shortcuts ============
const ch27 = spec({ n: 27, id: 'y4-strat-speed-math-shortcuts', title: 'Speed Mathematics Shortcuts',
  tag: 'Multiplying and dividing by 5, 25, 125, 9, 11 and 99, squares ending in 5, and percentage-to-fraction conversions',
  over: 'A shortcut is a way to replace a long calculation by two short ones. The most useful speed shortcuts rest on four facts: 5 = 10 ÷ 2, 25 = 100 ÷ 4, 125 = 1000 ÷ 8, and 9 or 99 = 10 or 100 minus 1. Together with squares of numbers ending in 5 and percentage–fraction equivalents, they cover most multiplication and division in aptitude tests. A shortcut is only worth using if it is faster than direct calculation for you, so each one here is shown with its reason and a quick check.',
  place: 'Saving 15–20 seconds on arithmetic-heavy questions adds several questions to your attempt count in a timed section.',
  real: 'Quick mental arithmetic helps with bills, discounts and estimates.',
  obj: ['Multiply and divide by 5, 25 and 125 using halving and quartering', 'Multiply by 9, 99 and 11 quickly', 'Square numbers ending in 5', 'Convert percentages to fractions for quick calculation', 'Check results with the last digit'],
  pre: ['Advanced Calculation Techniques', 'Percentages'],
  refresh: '5 = 10 ÷ 2; 25 = 100 ÷ 4; 125 = 1000 ÷ 8; 99 = 100 − 1; (10a + 5)² = a(a + 1) hundred + 25.',
  defs: ['Shortcut: a faster equivalent calculation.', 'Complement: the amount needed to reach a base such as 100.', 'Percentage–fraction equivalent: 12.5% = 1/8 and so on.', 'Last-digit check: the final digit of a product follows from the final digits.', 'Break-even speed: the point where a shortcut beats direct calculation.'],
  intu: 'Multiplying by 5 is multiplying by 10 and halving; the same logic covers 25 and 125.',
  mental: 'Look at the multiplier: if it is near a power of ten, or divides one, use that.',
  formulas: [['× 5', 'n × 10 ÷ 2', 'Any n.', 'Quick.', '48 × 5 = 480 ÷ 2 = 240'], ['× 25', 'n × 100 ÷ 4', 'Any n.', 'Quick.', '36 × 25 = 3,600 ÷ 4 = 900'], ['× 125', 'n × 1000 ÷ 8', 'Any n.', 'Quick.', '24 × 125 = 3,000'], ['× 99', 'n × 100 − n', 'Any n.', 'Quick.', '47 × 99 = 4,653'], ['Square ending 5', 'a(a + 1) then 25', '15², 25², 35²…', 'Quick.', '35² = 12|25 = 1,225']],
  narr: ['48 × 5: multiply by 10 to get 480, then halve to 240.', '36 × 25: 3,600 ÷ 4 = 900. 24 × 125: 24,000 ÷ 8 = 3,000.', '47 × 99: 4,700 − 47 = 4,653.', '35²: 3 × 4 = 12, then 25: 1,225.', 'Percentages as fractions: 12.5% of 480 is 480 ÷ 8 = 60; 37.5% = 3/8 so 3 × 60 = 180.'],
  deep: [['Division by 5, 25', '× 2, × 4 then ÷ 10, ÷ 100: 360 ÷ 25 = 360 × 4 ÷ 100 = 14.4.'], ['Last-digit check', 'A product of numbers ending in 7 and 3 ends in 1.']],
  vars: [['Multiplication by 5, 25, 125', 'Halving rules.', '36 × 25'], ['Near powers of ten', '99, 101.', '47 × 99'], ['Squares ending in 5', 'a(a + 1).', '35²'], ['Percent as fractions', '1/8 and so on.', '12.5%'], ['Checks', 'Last digit.', 'Product ends']],
  ex: [
    { t: 'Multiply by 25', q: 'Find 36 × 25.', g: ['25 = 100/4'], c: 'Multiply by 100, divide by 4.', s: [['×100', '3,600.'], ['÷4', '900.']], a: '900', w: 'Check: 36 × 25 ends in 00.', tr: 'Long multiplication.' },
    { t: 'Square ending in 5', q: 'Find 35².', g: ['35 = 3|5'], c: 'a(a + 1) then 25.', s: [['a(a + 1)', '3 × 4 = 12.'], ['Append 25', '1,225.']], a: '1,225', w: 'Rule for numbers ending in 5.', tr: 'Squaring 35 as 30² + 5².' },
    { t: 'Percent as fraction', q: 'Find 37.5% of 480.', g: ['37.5% = 3/8'], c: 'Fraction.', s: [['Eighth', '480 ÷ 8 = 60.'], ['Three eighths', '3 × 60 = 180.']], a: '180', w: '37.5% = 3/8.', tr: 'Decimal multiplication.' }
  ],
  short: { title: 'Look at the multiplier', trad: 'Multiply digit by digit.', fast: 'Match the multiplier to 5, 25, 125, 99 or 11 and apply its two-step rule; check the last digit.', rules: ['×5 = ×10 ÷ 2.', '×25 = ×100 ÷ 4.', '×125 = ×1000 ÷ 8.', '×99 = ×100 − n.'] },
  mist: [['Using a shortcut that is slower for you', 'Time lost.', 'Practise only the ones that help.'], ['Forgetting the correction', 'Off by n.', 'For ×99 subtract n.'], ['Misplacing the decimal', 'Factor of ten.', 'Check the size.']],
  tips: { sec: 20, elim: 'Use the last digit to kill options.', adv: 'Practise each shortcut for a week.', ins: 'Two-step shortcuts beat long multiplication.' },
  rev: ['×5, 25, 125.', '×99.', 'Squares ending 5.', 'Percent fractions.', 'Last digit.'],
  qf: ['×25 = ×100 ÷ 4'],
  take: ['Match multiplier.', 'Two steps.', 'Check size.', 'Practise.'],
  self: ['Can I multiply by 25 mentally?', 'Can I square 45?', 'Can I use 37.5% = 3/8?']
});
const q27 = [
  N('e', '48 × 5 equals', 240, '48 × 10 = 480; halve: 240.'),
  N('e', '36 × 25 equals', 900, '3,600 ÷ 4 = 900.'),
  N('e', '24 × 125 equals', 3000, '24,000 ÷ 8 = 3,000.'),
  N('e', '47 × 99 equals', 47 * 99, '4,700 − 47 = 4,653.'),
  N('e', '35² equals', 1225, '3 × 4 = 12, then 25: 1,225.'),
  N('e', '12.5% of 480 equals', 60, '480 ÷ 8 = 60.'),
  N('m', '45² equals', 2025, '4 × 5 = 20, then 25: 2,025.'),
  N('m', '37.5% of 480 equals', 180, '3/8 of 480 = 3 × 60 = 180.'),
  N('m', '64 × 15 equals', 960, '64 × 10 = 640 plus half of that, 320: 960.'),
  N('m', '360 ÷ 25 equals', 14.4, '360 × 4 = 1,440; ÷ 100 = 14.4.', 1),
  N('m', '73 × 11 equals', 803, '7 | 7+3 | 3 gives 7 | 10 | 3, carry: 803.'),
  N('m', '16⅔% of 540 equals', 90, '540 ÷ 6 = 90.'),
  N('m', '88 × 25 equals', 2200, '8,800 ÷ 4 = 2,200.'),
  N('m', '8.5 × 20 equals', 170, '8.5 × 2 = 17; × 10 = 170.'),
  N('p', '125 × 64 equals', 8000, '64 × 1000 ÷ 8 = 8,000.'),
  N('p', '72 × 99 equals', 7128, '7,200 − 72 = 7,128.'),
  N('p', '85² equals', 7225, '8 × 9 = 72, then 25: 7,225.'),
  N('p', '45% of 360 equals', 162, '10% = 36; 40% = 144; 5% = 18; total 162.'),
  N('p', '2,400 ÷ 125 equals', 19.2, '2,400 × 8 = 19,200; ÷ 1,000 = 19.2.', 1),
  N('p', '999 × 12 equals', 11988, '12,000 − 12 = 11,988.')
];
build(ch27, q27);

// ============ Chapter 28: mental calculation techniques ============
const ch28 = spec({ n: 28, id: 'y4-strat-mental-calculation', title: 'Mental Calculation Techniques',
  tag: 'Left-to-right addition, complement subtraction, rounding with adjustment, splitting and halving-doubling without paper',
  over: 'Mental calculation is a set of habits more than formulas: work left to right so that the largest part of the answer is fixed first, round a number to a friendly value and adjust, split a multiplication into easy parts, and use doubling and halving to make a product easy. These habits cut the time and the writing needed for arithmetic, and they make estimation natural.',
  place: 'Online tests often disable or limit rough work, so mental methods save time and reduce errors.',
  real: 'Everyday mental arithmetic uses these same habits.',
  obj: ['Add and subtract left to right', 'Round and adjust', 'Split products into easy parts', 'Double and halve to simplify', 'Check by estimation'],
  pre: ['Speed Mathematics Shortcuts'],
  refresh: 'Rounding and adjusting: 398 + 247 = 400 + 247 − 2.',
  defs: ['Left-to-right: starting with the largest place value.', 'Complement: the amount to reach a round number.', 'Round-and-adjust: use a round number then correct.', 'Splitting: a × (b + c) = ab + ac.', 'Doubling-halving: a × b = 2a × b/2.'],
  intu: 'The mind keeps small numbers easily; give it small numbers.',
  mental: 'Round to a friendly number, compute, correct; split big products into tens and units.',
  formulas: [['Round and adjust', '398 + 247 = 400 + 247 − 2', 'Near round.', 'Addition.', '645'], ['Complement', '1,000 − 647 = 353', 'Subtraction.', 'From a round number.', '353'], ['Split', '23 × 17 = 23 × 10 + 23 × 7', 'Products.', 'Break.', '391'], ['Double-halve', '35 × 14 = 70 × 7', 'Even factor.', 'Simplify.', '490'], ['Left-to-right', '347 + 285: 300 + 200, 40 + 80, 7 + 5', 'Addition.', 'Parts.', '632']],
  narr: ['398 + 247: add 400 + 247 = 647 and take away 2: 645.', '1,000 − 647: complements digit by digit (9, 9, 10): 353.', '23 × 17: 23 × 10 = 230 and 23 × 7 = 161; total 391.', '35 × 14: double 35 and halve 14 to get 70 × 7 = 490.', '347 + 285: 300 + 200 = 500; 40 + 80 = 120; 7 + 5 = 12; 500 + 120 + 12 = 632.'],
  deep: [['Check by estimation', 'A product should be near the product of rounded numbers.'], ['Negative adjustments', 'When you round up, subtract the extra afterwards.']],
  vars: [['Addition', 'Left-to-right.', '347 + 285'], ['Subtraction', 'Complement.', '1,000 − 647'], ['Multiplication', 'Split.', '23 × 17'], ['Simplify', 'Double-halve.', '35 × 14'], ['Rounding', 'Adjust.', '398 + 247']],
  ex: [
    { t: 'Round and adjust', q: 'Find 398 + 247.', g: ['398 ≈ 400'], c: 'Round then adjust.', s: [['Round', '400 + 247 = 647.'], ['Adjust', '647 − 2 = 645.']], a: '645', w: 'We added 2 extra.', tr: 'Forgetting to subtract.' },
    { t: 'Split', q: 'Find 23 × 17.', g: ['17 = 10 + 7'], c: 'Split the multiplier.', s: [['Parts', '23 × 10 = 230; 23 × 7 = 161.'], ['Add', '391.']], a: '391', w: 'Two easy products.', tr: 'Long multiplication.' },
    { t: 'Double-halve', q: 'Find 35 × 14.', g: ['14 even'], c: 'Double and halve.', s: [['Transform', '35 × 14 = 70 × 7.'], ['Compute', '490.']], a: '490', w: 'Product unchanged.', tr: 'Halving both.' }
  ],
  short: { title: 'Round, split, halve', trad: 'Write it all out.', fast: 'Round and adjust sums, split products, and double-halve to simplify.', rules: ['Left to right.', 'Round then correct.', 'Split.', 'Double-halve.'] },
  mist: [['Forgetting to adjust', 'Off by the rounding.', 'Write the adjustment first.'], ['Working right to left mentally', 'Carry confusion.', 'Go left to right.'], ['Splitting badly', 'More steps.', 'Split into tens and units.']],
  tips: { sec: 25, elim: 'Check last digit and size.', adv: 'Practise 20 mental sums daily.', ins: 'Mental methods feed estimation.' },
  rev: ['Left to right.', 'Round-adjust.', 'Complement.', 'Split.', 'Double-halve.'],
  qf: ['a(b + c) = ab + ac'],
  take: ['Round.', 'Adjust.', 'Split.', 'Check.'],
  self: ['Can I round and adjust?', 'Can I split a product?', 'Can I double-halve?']
});
const q28 = [
  N('e', '398 + 247 equals', 645, '400 + 247 − 2 = 645.'),
  N('e', '1,000 − 647 equals', 353, 'Complements: 353.'),
  N('e', '347 + 285 equals', 632, '500 + 120 + 12 = 632.'),
  N('e', '23 × 17 equals', 391, '230 + 161 = 391.'),
  N('e', '35 × 14 equals', 490, '70 × 7 = 490.'),
  N('e', '502 − 198 equals', 304, '502 − 200 + 2 = 304.'),
  N('m', '47 × 12 equals', 564, '470 + 94 = 564.'),
  N('m', '1,000 − 386 equals', 614, 'Complements: 614.'),
  N('m', '56 × 25 equals', 1400, '5,600 ÷ 4 = 1,400.'),
  N('m', '299 × 6 equals', 1794, '300 × 6 − 6 = 1,794.'),
  N('m', '725 + 398 equals', 1123, '725 + 400 − 2 = 1,123.'),
  N('m', '45 × 18 equals', 810, '90 × 9 = 810.'),
  N('m', '8 × 7 × 25 equals', 1400, '8 × 25 = 200; × 7 = 1,400.'),
  N('m', '3,000 − 1,486 equals', 1514, '3,000 − 1,500 + 14 = 1,514.'),
  N('p', '17 × 19 equals', 323, '17 × 20 − 17 = 323.'),
  N('p', '64 × 125 equals', 8000, '64 ÷ 8 × 1000 = 8,000.'),
  N('p', '1.25 × 48 equals', 60, '48 + 12 = 60 (a quarter of 48 is 12).'),
  N('p', '984 + 1,016 equals', 2000, '984 + 16 = 1,000; + 1,000 = 2,000.'),
  N('p', '48 × 15 equals', 720, '480 + 240 = 720.'),
  N('p', '0.75 × 88 equals', 66, 'Three quarters of 88 = 66.')
];
build(ch28, q28);

// ============ Chapter 29: calculation shortcut mastery ============
const ch29 = spec({ n: 29, id: 'y4-strat-calculation-shortcuts', title: 'Calculation Shortcut Mastery',
  tag: 'Digital roots, successive percentages a + b + ab/100, rule of 72, divisibility tests and quick LCM/HCF checks',
  over: 'Beyond everyday mental methods there is a set of exact shortcuts that apply to whole classes of aptitude problems: the successive-change formula a + b + ab/100, the digital-root check for products, the rule of 72 for doubling time, divisibility tests for 3, 4, 8, 9 and 11, and quick LCM/HCF tricks. These are worth learning precisely because they apply to many question types.',
  place: 'Percent change, compound growth, divisibility and LCM questions appear in most aptitude papers; shortcuts cut each to a few seconds.',
  real: 'Quick checks catch arithmetic slips in any calculation.',
  obj: ['Use a + b + ab/100 for successive changes', 'Check products with digital roots', 'Estimate doubling time with the rule of 72', 'Apply divisibility tests', 'Find LCM and HCF quickly'],
  pre: ['Speed Mathematics Shortcuts', 'Mental Calculation Techniques'],
  refresh: 'Net change after +a% and +b%: a + b + ab/100 percent.',
  defs: ['Digital root: repeated digit sum of a number.', 'Rule of 72: doubling time ≈ 72 ÷ rate (%).', 'Divisibility test: a quick rule to check a divisor.', 'Successive change: changes applied one after another.', 'HCF × LCM = product of two numbers.'],
  intu: 'Many exact results can be produced or checked from the digits alone.',
  mental: 'For percent changes use the formula; for checks use digital roots; for divisibility use the test.',
  formulas: [['Successive change', 'a + b + ab/100', 'Two changes.', 'Net %.', '+20% then −10% = +8%'], ['Digital root check', 'Root of product = root of product of roots', 'Multiplication.', 'Check.', '47 × 53 → 2 × 8 = 16 → 7'], ['Rule of 72', '72 ÷ rate', 'Doubling.', 'Estimate.', '8% → 9 years'], ['Divisibility', '3, 9: digit sum; 4: last two; 11: alternating', 'Tests.', 'Checks.', '2,376 divisible by 9'], ['HCF × LCM', 'HCF × LCM = a × b', 'Two numbers.', 'Quick.', '12, 18: 6 × 36']],
  narr: ['+20% then −10%: 20 − 10 − 200/100 = 8, so a net 8% rise.', 'Check 47 × 53 = 2,491: roots 2 and 8 give 16 → 7; 2,491 → 16 → 7 ✓.', 'At 8% growth money doubles in about 72 ÷ 8 = 9 years.', '2,376: digit sum 18, so divisible by 9; 2,376 ÷ 11? alternating sum 2 − 3 + 7 − 6 = 0, so divisible by 11.', 'HCF of 12 and 18 is 6, so LCM = 12 × 18 ÷ 6 = 36.'],
  deep: [['Successive discounts', 'Discounts of 20% and 10% give 20 + 10 − 2 = 28% net discount.'], ['Digital roots catch most slips', 'They fail only for errors that are multiples of 9.']],
  vars: [['Net percentage', 'Formula.', '+20, −10'], ['Checking', 'Digital roots.', '47 × 53'], ['Doubling', 'Rule of 72.', '8%'], ['Divisibility', 'Tests.', '2,376'], ['HCF-LCM', 'Product rule.', '12, 18']],
  ex: [
    { t: 'Net change', q: 'A price rises 20% and then falls 10%. Net change?', g: ['+20, −10'], c: 'a + b + ab/100.', s: [['Formula', '20 − 10 + (20 × −10)/100.'], ['Compute', '10 − 2 = +8%.']], a: '+8%', w: 'Not +10%.', tr: 'Adding.' },
    { t: 'Rule of 72', q: 'At 8% compound growth, about how long to double?', g: ['8%'], c: '72 ÷ rate.', s: [['Divide', '72 ÷ 8.'], ['Years', '9 years.']], a: 'About 9 years', w: 'An estimate.', tr: 'Taking 100/8.' },
    { t: 'LCM', q: 'HCF of 12 and 18 is 6. Find the LCM.', g: ['HCF 6'], c: 'Product rule.', s: [['Product', '12 × 18 = 216.'], ['LCM', '216 ÷ 6 = 36.']], a: '36', w: 'HCF × LCM = product.', tr: 'Multiplying 12 and 18 only.' }
  ],
  short: { title: 'Formula, check, test', trad: 'Compute from scratch.', fast: 'Use a + b + ab/100, digital roots, 72 ÷ rate and the divisibility tests.', rules: ['Net % formula.', 'Root check.', '72 ÷ rate.', 'HCF × LCM.'] },
  mist: [['Adding percentages', 'Wrong net.', 'Use the formula.'], ['Trusting a check blindly', 'Misses multiples of 9.', 'Use with estimation.'], ['Applying the rule of 72 to large rates', 'Poor accuracy.', 'Use for 5–15%.']],
  tips: { sec: 20, elim: 'A failed root check kills an option.', adv: 'Learn divisibility by 7, 11, 13 too.', ins: 'Checks are cheaper than rework.' },
  rev: ['Net %.', 'Digital roots.', 'Rule of 72.', 'Divisibility.', 'HCF-LCM.'],
  qf: ['a + b + ab/100'],
  take: ['Formula.', 'Check.', 'Estimate.', 'Test.'],
  self: ['Can I compute a net percentage?', 'Can I use a digital root?', 'Can I use 72?']
});
const root = (n) => { while (n > 9) n = String(n).split('').reduce((a, b) => a + +b, 0); return n; };
const q29 = [
  N('e', 'A price rises 20% and then falls 10%. The net change is (%)', 20 - 10 + (20 * -10) / 100, '20 − 10 − 2 = +8.', 0),
  N('e', 'Two successive discounts of 20% and 10% give a net discount of (%)', 20 + 10 - 2, '20 + 10 − 2 = 28.'),
  N('e', 'At 8% compound growth, money doubles in about (years)', 72 / 8, '72 ÷ 8 = 9.'),
  N('e', 'The HCF of 12 and 18 is 6. Their LCM is', 36, '12 × 18 ÷ 6 = 36.'),
  N('e', 'The digital root of 2,491 is', root(2491), '2 + 4 + 9 + 1 = 16 → 7.'),
  T('e', 'Which of these numbers is divisible by 9?', '2,376', ['2,375', '2,378', '2,380'], 'Digit sum of 2,376 is 18, a multiple of 9.'),
  N('m', 'A number rises 25% and then 20%. The net rise is (%)', 25 + 20 + 25 * 20 / 100, '25 + 20 + 5 = 50.'),
  N('m', 'A price falls 20% and then rises 25%. The net change is (%)', 0, '−20 + 25 − 5 = 0.'),
  T('m', 'Check using digital roots: is 47 × 53 = 2,491 consistent?', 'Yes', ['No, the root of the product should be 6', 'No, the root should be 8', 'Cannot be checked'], 'Roots: 47 → 2, 53 → 8; product root 16 → 7; 2,491 → 7 ✓.'),
  N('m', 'At 12% growth, money doubles in about (years)', 72 / 12, '72 ÷ 12 = 6.'),
  T('m', 'Which number is divisible by 11?', '2,376', ['2,375', '2,377', '2,379'], 'For 2,376 the alternating sum is 2 − 3 + 7 − 6 = 0, so it is divisible by 11.'),
  N('m', 'The LCM of 8 and 12 is', 24, 'HCF 4; LCM = 96 ÷ 4 = 24.'),
  N('m', 'A discount of 30% followed by 20% equals a single discount of (%)', 30 + 20 - 6, '30 + 20 − 6 = 44.'),
  N('m', 'The HCF of 36 and 48 is', 12, '36 = 12 × 3; 48 = 12 × 4.'),
  N('p', 'A price rises 10% each year for two years. The total rise is (%)', 10 + 10 + 1, '10 + 10 + 1 = 21.'),
  N('p', 'Three successive rises of 10% give a total rise of (%)', (1.1 ** 3 - 1) * 100, '1.1³ = 1.331, a 33.1% rise.', 1),
  N('p', 'A number is increased by 50% and then decreased by 50%. The net change is (%)', 50 - 50 - 25, '50 − 50 − 25 = −25.'),
  T('p', 'Which number is divisible by 8?', '3,128', ['3,126', '3,130', '3,132'], '3,128 ends in 128 = 8 × 16, so 3,128 is divisible by 8.'),
  N('p', 'The LCM of two numbers is 180 and their HCF is 6. If one is 36, the other is', 180 * 6 / 36, 'Product = 180 × 6 = 1,080; 1,080 ÷ 36 = 30.'),
  N('p', 'Using 72, a sum at 6% doubles in about (years)', 72 / 6, '72 ÷ 6 = 12.')
];
build(ch29, q29);
