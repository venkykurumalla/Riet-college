const { easy, medium, placement, build } = require('../lib.cjs');
const { C } = require('../chap.cjs');
const r = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;

// ---------------- Chapter 5 ----------------
const ch5 = C({
  n: 5, id: 'y3-quant-adv-mixtures', cat: 'quant', title: 'Advanced Mixtures — Three-Component Alligation',
  tag: 'Three-ingredient means, chained alligation, concentration changes and repeated replacement',
  url: 'https://www.indiabix.com/aptitude/alligation-or-mixture/',
  over: 'Year 2 handled two ingredients and the alligation cross. Year 3 mixes three or more ingredients, chains the cross when a mixture is itself used as an ingredient, tracks the concentration of a solution when water or pure acid is added, and handles replacement with different liquids. The weighted-average idea stays the same: the mean is the quantity-weighted average of the parts.',
  place: 'Advanced mixture questions are commonly asked in the harder quantitative items of company aptitude rounds, usually with a chain of two operations.',
  real: 'Blending grades of tea, preparing alloys and diluting chemical solutions in the laboratory follow exactly these rules.',
  obj: ['Compute the mean value of a three-component mixture', 'Chain two alligation crosses', 'Track concentrations after adding water or pure solute', 'Solve repeated-replacement problems with different removals', 'Work backwards from a target mean'],
  pre: ['Mixtures and Alligation', 'Advanced Ratio and Proportion'],
  refresh: 'Mean = Σ(quantity × value) ÷ Σ quantity. Alligation: cheaper : dearer = (dearer − mean) : (mean − cheaper). Water has value 0.',
  defs: [
    'Weighted mean of several parts: Σ qᵢvᵢ / Σ qᵢ.',
    'Chained alligation: first combine two ingredients into a composite whose value is their mean, then use the composite as a single ingredient.',
    'Concentration: the fraction of the pure substance in a solution (alcohol 20% means 20 parts in 100).',
    'Pure solute added: increases both the amount of solute and the total.',
    'Replacement: removing x from a vessel of Q and replacing by another liquid multiplies the original by (1 − x/Q).'
  ],
  intu: 'Every ingredient pulls the mean towards its own value in proportion to its quantity. With three ingredients, a clean way is to merge two into a temporary mixture, find its mean, and then treat the temporary mixture as one ingredient.',
  mental: 'Write each ingredient as (quantity, value). Add the products and the quantities, divide, and compare with the target. For unknown quantities, merge two ingredients and apply the cross twice.',
  formulas: [
    ['Three-component mean', '(q₁v₁ + q₂v₂ + q₃v₃) ÷ (q₁ + q₂ + q₃)', 'Weighted average.', 'Cost or concentration of the blend.', '(3×40 + 5×60 + 2×50) ÷ 10 = 52'],
    ['Chained alligation', 'Mean of the first two, then cross with the third', 'Two crosses.', 'Find the ratio of three items.', '20 & 30 (1:1) then 40 for 32 → 4 : 4 : 7'],
    ['Adding pure solute', '(solute + x) ÷ (total + x) = target', 'Solve for x.', 'Fortification.', '(6 + x)/(30 + x) = 0.4 → x = 10'],
    ['Adding water', 'New % = old amount of solute ÷ (total + water)', 'Solute stays the same.', 'Dilution.', '16/(40 + 10) = 32%'],
    ['Repeated replacement', 'Original left = Q Π (1 − xᵢ/Qᵢ)', 'Amounts may differ each time.', 'Several removals.', '60 × 54/60 × 48/60 = 43.2']
  ],
  narr: [
    'For three ingredients, compute the weighted mean. 3 kg at ₹40, 5 kg at ₹60 and 2 kg at ₹50 cost 120 + 300 + 100 = ₹520 for 10 kg, a mean of ₹52 per kg.',
    'To find the ratio of three items for a target mean, merge two of them. To make ₹32 from ₹20, ₹30 and ₹40 with the first two in equal parts, their composite is worth ₹25, and (40 − 32) : (32 − 25) = 8 : 7. Splitting the composite equally gives the ratio 4 : 4 : 7.',
    'For concentration problems, the amount of pure solute is what is preserved when water is added. 40 L of 40% solution holds 16 L of solute. Adding 10 L of water gives 16/50 = 32%. Adding pure solute raises both the solute and the total, so write (6 + x)/(30 + x) = 0.4 to get x = 10.',
    'Repeated replacement with different amounts multiplies the surviving fractions. From 60 L of milk, remove 6 L and replace with water (fraction left 54/60), then remove 12 L of the mixture (fraction left 48/60): milk = 60 × 0.9 × 0.8 = 43.2 L.',
    'Selling a mixture at a profit uses the mixture cost: if 3 kg at ₹60 and 2 kg at ₹75 are mixed, the cost is ₹66 per kg and a 20% profit price is ₹79.20.'
  ],
  deep: [['Solving for an unknown quantity', 'When one quantity is missing, set up the weighted-mean equation and solve the linear equation, or use the cross if only two parts are unknown.'], ['Water as a zero-value ingredient', 'Water has concentration or price 0, so dilution problems are alligation problems with one end at zero.']],
  vars: [['Three-ingredient mean', 'Weighted average.', '3, 5, 2 kg'], ['Chained alligation', 'Two crosses.', '₹20, ₹30, ₹40 → ₹32'], ['Concentration changes', 'Add water or solute.', '40 L of 40%'], ['Repeated replacement', 'Different removals.', '60 L milk'], ['Selling price of a blend', 'Cost then profit.', '3 kg at ₹60 and 2 kg at ₹75']],
  ex: [
    { t: 'Three-ingredient mean', q: '3 kg of tea at ₹40, 5 kg at ₹60 and 2 kg at ₹50 are mixed. Find the cost per kg of the mixture.', g: ['3 kg ₹40', '5 kg ₹60', '2 kg ₹50'], c: 'Weighted average.', s: [['Total cost', '120 + 300 + 100 = ₹520.'], ['Total weight', '3 + 5 + 2 = 10 kg.'], ['Mean', '520 ÷ 10 = ₹52 per kg.']], a: '₹52 per kg', w: 'Each part is weighted by its quantity.', tr: 'Averaging the three prices to get ₹50.' },
    { t: 'Adding pure solute', q: 'How much pure acid must be added to 30 litres of a 20% acid solution to make it 40%?', g: ['30 L, 20%', 'target 40%'], c: 'Solute plus x over total plus x.', s: [['Solute now', '0.2 × 30 = 6 L.'], ['Equation', '(6 + x)/(30 + x) = 0.4.'], ['Solve', '6 + x = 12 + 0.4x, so 0.6x = 6 and x = 10 L.']], a: '10 litres', w: 'Check: 16/40 = 40%.', tr: 'Adding x to the solute only.' },
    { t: 'Repeated replacement', q: 'A vessel holds 60 L of milk. 6 L is removed and replaced with water; then 12 L of the mixture is removed and replaced with water. How much milk is left?', g: ['60 L', '6 L then 12 L'], c: 'Multiply surviving fractions.', s: [['First step', '60 × 54/60 = 54 L of milk.'], ['Second step', 'Fraction left = 48/60 = 0.8.'], ['Milk left', '54 × 0.8 = 43.2 L.']], a: '43.2 litres', w: 'The second removal takes mixture, not pure milk.', tr: 'Subtracting 6 + 12 from 60.' }
  ],
  short: { title: 'Merge two, then cross', trad: 'Solve simultaneous equations for three unknowns.', fast: 'Merge two ingredients into a temporary mixture with its mean value, then apply one cross with the third.', rules: ['Weighted mean = Σqv/Σq.', 'Water is value 0.', 'Solute is preserved when diluting.', 'Replacement fractions multiply.'] },
  mist: [['Averaging prices without weights', 'Treating ingredients as equal.', 'Weight each by quantity.'], ['Subtracting replacement amounts', 'Subtracting removed volumes.', 'Multiply the surviving fractions.'], ['Changing the solute when adding water', 'Recomputing the solute.', 'Keep solute fixed, change only the total.']],
  tips: { sec: 100, elim: 'The mean must lie between the lowest and highest ingredient values; reject others.', adv: 'Merge the two closest ingredients first.', ins: 'Chained alligation is a two-step cross.' },
  rev: ['Weighted mean.', 'Merge then cross.', 'Solute preserved.', 'Fractions multiply.', 'Water = 0.'],
  qf: ['Σqv/Σq', '(s + x)/(T + x)'],
  take: ['Weight by quantity.', 'Two crosses for three items.', 'Track solute.', 'Multiply fractions.'],
  self: ['Can I find a three-ingredient mean?', 'Can I chain two crosses?', 'Can I add acid to reach a target?']
});
const q5 = [
  easy('3 kg of tea at ₹40, 5 kg at ₹60 and 2 kg at ₹50 are mixed. The cost per kg is', (3 * 40 + 5 * 60 + 2 * 50) / 10, [50, 55, 48], '(120 + 300 + 100) ÷ 10 = 52.'),
  easy('Rice at ₹30, ₹40 and ₹50 per kg is mixed in the ratio 1 : 1 : 2. The cost per kg is', (30 + 40 + 100) / 4, [40, 42, 45], '(30 + 40 + 2 × 50) ÷ 4 = 170 ÷ 4 = 42.5.'),
  easy('A 40-litre mixture has milk and water in the ratio 5 : 3. The quantity of water is (litres)', 40 * 3 / 8, [12, 18, 24], '40 × 3/8 = 15.'),
  easy('8 litres of water are added to 32 litres of pure milk. The percentage of milk is', pct80(), ['75%', '85%', '90%'], '32 ÷ 40 = 80%.'),
  easy('In what ratio must rice at ₹20/kg be mixed with rice at ₹30/kg to get ₹26/kg (cheaper : dearer)?', '2 : 3', ['3 : 2', '1 : 1', '4 : 1'], '(30 − 26) : (26 − 20) = 4 : 6 = 2 : 3.'),
  easy('A 60-litre solution has 20% alcohol. The quantity of alcohol is (litres)', 12, [10, 15, 20], '0.2 × 60 = 12.'),

  medium('Rice at ₹20, ₹30 and ₹40 is mixed to get ₹32 per kg, with the ₹20 and ₹30 rice in equal parts. The ratio of the three quantities is', '4 : 4 : 7', ['1 : 1 : 1', '2 : 2 : 5', '3 : 3 : 7'], 'The first two make a ₹25 composite. (40 − 32) : (32 − 25) = 8 : 7, so composite : ₹40 = 8 : 7, and splitting the composite equally gives 4 : 4 : 7.'),
  medium('A vessel has 100 litres of milk. 10 litres are removed and replaced with water, three times in all. The milk left is (litres)', 100 * 0.9 ** 3, [70, 72, 75.5], '100 × 0.9³ = 72.9.'),
  medium('40 litres of a 40% alcohol solution has 10 litres of water added. The new concentration is', '32%', ['30%', '35%', '36%'], 'Alcohol = 16 L. Total = 50 L. 16/50 = 32%.'),
  medium('How much pure acid must be added to 30 litres of a 20% solution to make it 40%? (litres)', 10, [6, 8, 12], '(6 + x)/(30 + x) = 0.4 gives x = 10.'),
  medium('A 30% and a 60% solution are mixed to make 90 litres of a 50% solution. The quantity of the 60% solution is (litres)', 60, [30, 40, 50], '(60 − 50) : (50 − 30) = 1 : 2 for 30% : 60%. So the 60% solution is 2/3 of 90 = 60 L.'),
  medium('A milkman has 50 litres of milk. He removes 5 litres and replaces it with water, and repeats this once. The quantity of water in the mixture is (litres)', 50 - 50 * 0.9 * 0.9, [5, 9, 10], 'Milk = 50 × 0.9 × 0.9 = 40.5. Water = 9.5.'),
  medium('Alloy A has copper and zinc in the ratio 2 : 3 and alloy B in the ratio 3 : 2. Equal weights are mixed. The copper : zinc ratio is', '1 : 1', ['2 : 3', '3 : 2', '5 : 4'], 'Copper = (2/5 + 3/5)/2 = 1/2 of the total, so copper : zinc = 1 : 1.'),
  medium('Two vessels of 25 L and 35 L have milk fractions 2/5 and 3/7. They are mixed. The milk : water ratio is', '5 : 7', ['2 : 3', '3 : 4', '1 : 1'], 'Milk = 10 + 15 = 25 L out of 60 L, so water = 35 L. Ratio = 25 : 35 = 5 : 7.'),

  placement('A mixture of milk and water is in the ratio 7 : 3. When 20 litres of the mixture are removed and replaced with water, the ratio becomes 7 : 5. The initial quantity of the mixture was (litres)', 120, [100, 140, 150], 'Milk after removal = 0.7(T − 20). New milk fraction = 7/12. So 0.7T − 14 = 7T/12, giving T = 120.'),
  placement('A container has 60 litres of milk. 6 litres are removed and replaced with water, and then 12 litres of the mixture are removed and replaced with water. The milk left is (litres)', 60 * 0.9 * 0.8, [40, 45, 48.6], '60 × 0.9 × 0.8 = 43.2.'),
  placement('Tea of ₹126, ₹135 and ₹142 per kg is mixed in the ratio 2 : 3 : 5. The cost per kg of the mixture is (₹)', (2 * 126 + 3 * 135 + 5 * 142) / 10, [135, 136, 137.2], '(252 + 405 + 710) ÷ 10 = 136.7.'),
  placement('3 kg of rice at ₹60 and 2 kg at ₹75 are mixed and sold at a 20% profit. The selling price per kg is (₹)', ((3 * 60 + 2 * 75) / 5) * 1.2, [72, 75.6, 80], 'Cost = 330/5 = 66. Selling price = 66 × 1.2 = 79.2.'),
  placement('Milk costs ₹24 per litre. Water is added and the mixture is sold at ₹24 per litre, giving a 25% profit. The ratio of water to milk is', '1 : 4', ['1 : 5', '1 : 3', '2 : 5'], 'Cost of the mixture = 24/1.25 = 19.2. Water : milk = (24 − 19.2) : 19.2 = 4.8 : 19.2 = 1 : 4.'),
  placement('Three solutions with 10%, 20% and 30% acid are mixed in the ratio 1 : 2 : 3. The acid percentage of the mixture is', r((10 + 40 + 90) / 6), [20, 23, 25], '(1 × 10 + 2 × 20 + 3 × 30) ÷ 6 = 140/6 = 23.33.')
];
function pct80() { return '80%'; }
build(ch5, q5);

// ---------------- Chapter 6 ----------------
const ch6 = C({
  n: 6, id: 'y3-quant-adv-work-problems', cat: 'quant', title: 'Advanced Work Problems — Efficiency Variation',
  tag: 'Efficiency ratios, workers who change speed, partial completion and man-hours',
  url: 'https://www.indiabix.com/aptitude/time-and-work/',
  over: 'Basic time-and-work problems add the rates of workers who work together. Advanced problems vary the efficiency: workers are compared by an efficiency ratio, work at a different speed after a break, are replaced by more or fewer workers part-way, or have different working hours per day. The method is to measure the work in units (for example LCM units) and to track how many units are done in each phase.',
  place: 'Advanced work problems are commonly asked in company aptitude rounds, usually with two or three phases and a ratio of efficiencies.',
  real: 'Staffing a project, planning overtime and estimating completion when team size changes depend on these calculations.',
  obj: ['Use efficiency ratios to compare workers', 'Solve multi-phase problems with changing team size', 'Use man-hours with different hours per day', 'Handle workers of different efficiency leaving or joining', 'Find the completion time after a speed change'],
  pre: ['Time and Work', 'Work and Wages', 'Advanced Ratio and Proportion'],
  refresh: 'Rate = work ÷ time. Efficiency is proportional to rate. Total work = rate × time summed over all phases.',
  defs: [
    'Efficiency: the amount of work a worker does per unit time; efficiency ratio is the inverse of the time ratio.',
    'Work units: a convenient total, usually the LCM of the given times.',
    'Man-hours: workers × hours per day × days; constant for a given job with equal efficiency.',
    'Phase: a period during which the team and rates stay the same.',
    'Productivity change: a percentage change in a worker\'s rate.'
  ],
  intu: 'Work is a quantity that accumulates in phases. Choose units so that every worker\'s daily output is a whole number, add the output of each phase, and stop when the total reaches the job size.',
  mental: 'Take total work = LCM of the times. Write the units per day of each worker, add the phase outputs, subtract from the total and divide by the new rate.',
  formulas: [
    ['Efficiency ratio', 'A : B = time of B : time of A', 'Inverse of times.', 'Comparing workers.', 'A takes 10, B takes 15 → 3 : 2'],
    ['Man-hours', 'M₁H₁D₁ = M₂H₂D₂', 'Workers × hours × days.', 'Changed team or hours.', '6 men 9 h 10 days = 540'],
    ['Phase work', 'Work = Σ rateᵢ × timeᵢ', 'Add the phases.', 'Multi-phase problems.', 'A alone 5 days then A + B'],
    ['Efficiency change', 'New time = old time × old rate ÷ new rate', 'Scale the time.', 'Speed up or slow down.', '25% faster → time × 4/5'],
    ['Replacement', 'Units done so far, units left ÷ new rate', 'Update the team.', 'Workers leave or join.', '20 men for 10 days of 30, then 5 leave']
  ],
  narr: [
    'Use LCM units. A takes 20 days and B takes 30, so take the job as 60 units: A does 3 units a day and B does 2. Together they do 5 units a day and finish in 12 days. A is 50% more efficient than B, matching the ratio 3 : 2.',
    'For multi-phase problems, add the work of each phase. If A works alone for 5 days (15 units) and then A and B work together, the remaining 45 units take 9 days at 5 units a day, so the total is 14 days.',
    'For changes in efficiency, scale the time. A worker who becomes 25% more efficient takes 4/5 of the original time. If 20 workers can finish a job in 30 days and after 10 days 5 workers leave, the remaining two-thirds of the work (400 of 600 man-days) is done by 15 workers in 400 ÷ 15 ≈ 26.7 days.',
    'For man-hours, keep the product constant. 6 men working 9 hours a day complete a job in 10 days, which is 540 man-hours. 9 men working 5 hours a day need 540 ÷ 45 = 12 days.',
    'For a worker whose rate changes, compute the output before and after the change separately. A worker who produces 10 units a day for 4 days and then 14 units a day does 40 + 14t after the change.'
  ],
  deep: [['Efficiency as a percentage', 'If A is 25% more efficient than B, then A : B = 5 : 4 in rate and 4 : 5 in time. Convert percentages to ratios before computing.'], ['Idle days', 'If a worker is absent on some days, subtract those days from his working time before computing his share of the work.']],
  vars: [['Efficiency ratios', 'Compare times.', 'A 20 days, B 30 days'], ['Multi-phase', 'Add phases.', 'A alone then together'], ['Man-hours', 'Hours per day.', '6 men 9 hours'], ['Replacement', 'Team changes.', '5 workers leave'], ['Absence', 'Missing days.', 'A absent 3 days']],
  ex: [
    { t: 'Efficiency and units', q: 'A can do a job in 20 days and B in 30 days. They work together; how long do they take, and how much more efficient is A than B?', g: ['A 20 days', 'B 30 days'], c: 'LCM units.', s: [['Units', 'Total = 60 units. A does 3, B does 2 per day.'], ['Together', '5 units a day, so 12 days.'], ['Efficiency', 'A : B = 3 : 2, so A is 50% more efficient.']], a: '12 days; A is 50% more efficient', w: 'Efficiency is inversely proportional to time.', tr: 'Saying A is 33% more efficient.' },
    { t: 'Team changes mid-job', q: '20 workers can finish a job in 30 days. After 10 days, 5 workers leave. How many more days do the remaining workers need?', g: ['20 workers, 30 days', '5 leave after 10 days'], c: 'Man-days.', s: [['Total', '20 × 30 = 600 man-days.'], ['Done', '20 × 10 = 200. Left 400.'], ['Remaining workers', '15 workers: 400 ÷ 15 = 26.67 days.']], a: 'About 26.7 days', w: 'The work left stays 400 man-days.', tr: 'Using 20 workers for the remaining time.' },
    { t: 'Hours per day', q: '6 men working 9 hours a day complete a job in 10 days. In how many days will 9 men working 5 hours a day complete it?', g: ['6 × 9 × 10', '9 × 5 × d'], c: 'Constant man-hours.', s: [['Total', '6 × 9 × 10 = 540 man-hours.'], ['New rate', '9 × 5 = 45 man-hours per day.'], ['Days', '540 ÷ 45 = 12.']], a: '12 days', w: 'Man-hours measure the job.', tr: 'Ignoring the change in hours per day.' }
  ],
  short: { title: 'Units and man-hours', trad: 'Use fractions of work at every step.', fast: 'Choose LCM units, list units per day, add the phases, and divide the remainder by the new rate.', rules: ['Efficiency ratio = inverse of times.', 'Man-hours constant.', 'Phases add.', 'Convert percentages to ratios.'] },
  mist: [['Using the time ratio as the efficiency ratio', 'Not inverting.', 'Efficiency is the inverse of time.'], ['Ignoring work already done', 'Using the full job for the second phase.', 'Subtract the first phase.'], ['Ignoring hours per day', 'Treating all days as equal.', 'Use man-hours.']],
  tips: { sec: 100, elim: 'The completion time must lie between the times for the fastest and the slowest team.', adv: 'Write a phase table with units per day.', ins: 'Multi-phase problems are two or three simple steps.' },
  rev: ['LCM units.', 'Efficiency inverse of time.', 'Man-hours constant.', 'Phases add.', 'Percent to ratio.'],
  qf: ['M₁H₁D₁ = M₂H₂D₂', 'Efficiency ∝ 1/time'],
  take: ['Units per day.', 'Add phases.', 'Hours count.', 'Invert for efficiency.'],
  self: ['Can I compute efficiency from times?', 'Can I do a two-phase problem?', 'Can I use man-hours?']
});
const q6 = [
  easy('A can do a job in 20 days and B in 30 days. Together they finish in (days)', 1 / (1 / 20 + 1 / 30), [10, 14, 15], '1/20 + 1/30 = 1/12, so 12 days.'),
  easy('A takes 10 days and B takes 15 days to do a job. The ratio of their efficiencies A : B is', '3 : 2', ['2 : 3', '5 : 3', '1 : 1.5'.replace('1.5', '3')], 'Efficiency is inversely proportional to time: 15 : 10 = 3 : 2.'),
  easy('If A is twice as efficient as B and B alone takes 24 days, A alone takes (days)', 12, [6, 18, 48], 'A takes half the time: 12 days.'),
  easy('12 men can do a job in 10 days. 15 men can do it in (days)', 12 * 10 / 15, [6, 9, 12], '120 ÷ 15 = 8.'),
  easy('A job takes 8 men 9 days. If 6 men work, they take (days)', 8 * 9 / 6, [10, 14, 15], '72 ÷ 6 = 12.'),
  easy('If A is 25% more efficient than B and B takes 20 days, A takes (days)', 16, [15, 18, 25], 'The efficiency ratio is 5 : 4, so the times are 4 : 5. A = 20 × 4/5 = 16.'),

  medium('6 men working 9 hours a day complete a job in 10 days. 9 men working 5 hours a day will take (days)', 6 * 9 * 10 / (9 * 5), [8, 10, 15], '540 man-hours ÷ 45 per day = 12.'),
  medium('20 workers can finish a job in 30 days. After 10 days, 5 workers leave. The remaining workers need how many more days? (to one decimal place)', r(400 / 15, 1), [20, 24, 30], 'Left = 600 − 200 = 400 man-days. 400 ÷ 15 = 26.7 days.'),
  medium('A can do a job in 20 days and B in 30 days. A starts, and after 5 days B joins. The total time is (days)', 5 + (1 - 5 / 20) / (1 / 20 + 1 / 30), [12, 15, 16], 'A does 1/4 in 5 days. The remaining 3/4 at 1/12 per day takes 9 days. Total 14.'),
  medium('A can do a job in 12 days, B in 15 days. They work together for 3 days, and A leaves. B finishes the rest alone in (days)', (1 - 3 * (1 / 12 + 1 / 15)) / (1 / 15), [6, 7, 8], 'In 3 days they do 3 × 9/60 = 27/60. Left 33/60; B does 4/60 per day, so 8.25 days.'),
  medium('A is thrice as efficient as B. Together they finish a job in 18 days. A alone takes (days)', 24, [20, 27, 36], 'Rates 3x and x: 4x = 1/18, so A = 3/72 = 1/24. A takes 24 days.'),
  medium('15 men finish a job in 20 days. How many men will finish it in 12 days?', 15 * 20 / 12, [20, 25, 30], '300 ÷ 12 = 25 men.'),
  medium('A worker\'s efficiency rises by 20%. He earlier took 30 days for a job. He now takes (days)', 25, [24, 26, 28], 'Time = 30 ÷ 1.2 = 25.'),
  medium('4 men and 6 women can finish a job in 8 days; 3 men and 7 women can finish it in 10 days. The ratio of the efficiency of a man to that of a woman is', '11 : 1', ['1 : 1', '2 : 1', '3 : 2'], '8(4m + 6w) = 10(3m + 7w) gives 32m + 48w = 30m + 70w, so 2m = 22w and m : w = 11 : 1.'),

  placement('A and B can finish a job in 12 and 18 days. They work together for 4 days, then B leaves. A finishes the rest in (days)', r((1 - 4 * (1 / 12 + 1 / 18)) / (1 / 12)), [4, 5, 6], 'In 4 days they do 4 × 5/36 = 5/9. Left 4/9 at A\'s rate 1/12: 16/3 = 5.33 days.'),
  placement('A can do a job in 10 days. B is 25% less efficient than A. They work together for 4 days. The fraction of the job left is', '3/10', ['1/3', '2/5', '1/2'], 'B\'s rate = 0.75 × 1/10 = 3/40. Together 7/40 per day. In 4 days 28/40 = 7/10 is done, so 3/10 is left.'),
  placement('Efficiencies of A, B and C are in the ratio 2 : 3 : 5. A alone takes 30 days. All three together take (days)', 30 * 2 / 10, [4, 5, 8], 'Rates 2, 3, 5 units; A\'s 2 units take 30 days so total job = 60 units. Together 10 units a day: 6 days.'),
  placement('20 men were to finish a job in 40 days. After 10 days, 10 more men joined. The job finished in how many days from the start?', 10 + (20 * 40 - 20 * 10) / 30, [25, 30, 35], 'Total 800 man-days. After 10 days 600 remain. 30 men take 20 days. Total 30.'),
  placement('A takes 24 days and B takes 36 days to do a job. They work on alternate days, starting with A. The job is finished in (days)', 29, [24, 28, 30], 'A + B pair does 1/24 + 1/36 = 5/72 per two days. After 28 days (14 pairs) 70/72 is done. A then does 3/72 on day 29, completing the job.'),
  placement('A and B together finish a job in 6 days. A alone takes 5 days less than B alone. A alone takes (days)', 10, [8, 12, 15], 'Let A = x and B = x + 5. 1/x + 1/(x + 5) = 1/6 gives x² − 7x − 30 = 0, so x = 10.')
];
build(ch6, q6);
