const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-successive-percentages', year: 2, category: 'Advanced Quantitative Aptitude', num: 6, difficulty: 'Intermediate',
  title: 'Successive Percentages',
  tagline: 'Year 2 — Chains of percentage changes, net effect and the multiplier method',
  minutes: 45,
  overview: 'When a quantity changes by one percentage and then by another, the second change applies to the new value, not the original. The net change is therefore found by multiplying the growth factors, not by adding the percentages. This single idea solves population growth, price changes, area changes of a rectangle, and consumption-versus-price problems.',
  placement: 'Successive percentage questions are commonly asked in company aptitude rounds, either directly or inside area, profit, and population problems.',
  realWorld: 'Salary hikes in consecutive years, repeated price changes, and the effect of length and breadth changes on area use successive percentages.',
  objectives: [
    'Use the multiplier method for two or more changes',
    'Apply the formula a + b + ab/100 for the net change',
    'Find the effect of changing length and breadth on the area of a rectangle',
    'Solve price-versus-consumption problems',
    'Reverse a series of changes to find the original value'
  ],
  prereq: ['Basic Percentages', 'Discounts and Marked Price'],
  refresher: 'An increase of r% multiplies by (1 + r/100) and a decrease of r% multiplies by (1 − r/100).',
  defs: [
    'Successive percentage change: percentage changes applied one after another to the updated value.',
    'Net change: final value compared with the original value, as a percentage.',
    'Multiplier: the factor by which a value is multiplied for a given percentage change.',
    'Area of a rectangle changes by the product of the multipliers of length and breadth.',
    'Expenditure = price × consumption.'
  ],
  intuition: 'Each percentage change is a multiplication. Two changes are two multiplications, and the order does not matter. The extra term ab/100 in the net formula is the "change on the change".',
  mental: 'Take the original value as 100. Apply each change in turn. 100 → +20% → 120 → +30% → 156. The net change is +56%.',
  formulas: [
    ['Net change of two changes', 'Net % = a + b + ab/100', 'Use signs: increases positive, decreases negative.', 'Two successive changes.', '+20% and +30% → 20 + 30 + 6 = 56%'],
    ['Multiplier form', 'Final = Original × (1 + a/100)(1 + b/100)', 'Works for any number of changes.', 'Chains of three or more.', '1.1 × 1.2 × 0.9 = 1.188'],
    ['Increase then equal decrease', 'Net = −x²/100 %', 'Always a loss.', '+10% then −10% → −1%', '+20% −20% → −4%'],
    ['Area of rectangle', 'Area multiplier = (1 + l/100)(1 + b/100)', 'l and b are percentage changes of length and breadth.', 'Rectangle questions.', '+10%, +20% → +32%'],
    ['Price and consumption', 'Reduction in consumption = r/(100 + r) × 100 %', 'To keep expenditure same after a price rise of r%.', 'Price rise questions.', '25% rise → 20% cut']
  ],
  narrative: [
    'Convert each percentage to a multiplier and multiply. A rise of 20% followed by a rise of 30% is 1.2 × 1.3 = 1.56, a net rise of 56%. The formula a + b + ab/100 gives 20 + 30 + 6 = 56.',
    'An increase of x% followed by a decrease of x% never returns the original. For x = 10: 1.1 × 0.9 = 0.99, a net fall of 1%. In general the net change is −x²/100 %.',
    'For a rectangle, the area is length × breadth, so the area multiplier is the product of the two multipliers. If length rises 10% and breadth rises 20%, area rises 1.1 × 1.2 = 1.32, i.e. 32%.',
    'For price and consumption, expenditure = price × consumption. To keep expenditure the same after a 25% rise in price, consumption must be multiplied by 1/1.25 = 0.8, a 20% cut.',
    'To reverse a chain, divide by the multipliers. If a value after +10% and +20% is 6,600, the original is 6600 ÷ 1.32 = 5,000.'
  ],
  deep: [
    ['More than two changes', 'The multiplier method scales to any number of steps: just multiply. The net formula is only convenient for two steps.'],
    ['Population and depreciation', 'Population growing at fixed percentages is compound growth. A fall of 10% then a rise of 10% leaves 0.99 of the original.']
  ],
  variations: [
    ['Two changes', 'Net change.', '+20% then +30%'],
    ['Increase then decrease', 'Net loss.', '+10% then −10%'],
    ['Area of a rectangle', 'Length and breadth change.', '+10% and +20%'],
    ['Price and consumption', 'Expenditure constant.', 'Price up 25%'],
    ['Reverse chain', 'Find the original.', 'Final 6,600 after +10% and +20%']
  ],
  examples: [
    {
      title: 'Two increases',
      q: 'A number is increased by 20% and then the result by 30%. Find the net percentage increase.',
      given: ['+20%', '+30%'],
      concept: 'Multiply the multipliers.',
      steps: [['Multipliers', '1.2 and 1.3.'], ['Product', '1.2 × 1.3 = 1.56.'], ['Net change', '56%.']],
      ans: '56%', why: 'The 30% applies to the already increased value.', trap: 'Adding to get 50%.'
    },
    {
      title: 'Area of a rectangle',
      q: 'The length of a rectangle is increased by 10% and the breadth by 20%. By what percentage does the area increase?',
      given: ['Length +10%', 'Breadth +20%'],
      concept: 'Area multiplier = product.',
      steps: [['Multipliers', '1.1 and 1.2.'], ['Area multiplier', '1.1 × 1.2 = 1.32.'], ['Change', '32%.']],
      ans: '32%', why: 'The extra 2% comes from the product term 10 × 20/100.', trap: 'Adding to get 30%.'
    },
    {
      title: 'Price rise and consumption',
      q: 'The price of sugar rises by 25%. By what percentage must a family reduce consumption to keep the expenditure the same?',
      given: ['Price +25%'],
      concept: 'Price × consumption is constant.',
      steps: [['New price multiplier', '1.25.'], ['Consumption multiplier', '1 ÷ 1.25 = 0.8.'], ['Reduction', '20%.']],
      ans: '20%', why: 'If price is 125% of the old, quantity must be 100/125 of the old.', trap: 'Cutting by 25%.'
    }
  ],
  shortcut: {
    title: 'Assume 100 and chain the changes',
    trad: 'Compute each change on the actual value.',
    fast: 'Start with 100, apply each change and read the final number as the net percentage. Use a + b + ab/100 for two steps.',
    rules: ['Never add successive percentages.', '+x% then −x% is −x²/100 %.', 'Reduction needed = r/(100 + r).', 'Divide by the multiplier to reverse a change.']
  },
  mistakes: [
    ['Adding percentages', 'Treating 20% and 30% as 50%.', 'Multiply the multipliers.'],
    ['Wrong base for the second change', 'Using the original value.', 'Apply it to the new value.'],
    ['Forgetting the sign', 'Using + for a decrease.', 'Decrease is negative in the formula.'],
    ['Using the same percentage to reverse', 'Cutting 25% after a 25% rise.', 'Reverse with the reciprocal.']
  ],
  tips: { sec: 60, elim: 'The net change of two increases must exceed their sum; use this to remove options.', advice: 'Memorise: 10% twice = 21%, 20% twice = 44%, 10% & 20% = 32%.', insight: 'This topic is the foundation of compound interest.' },
  revision: ['Multiply multipliers.', 'Net = a + b + ab/100.', '+x% −x% = −x²/100.', 'Price up r% → consumption down r/(100+r).', 'Reverse by dividing.'],
  quickFormulas: ['a + b + ab/100', '−x²/100'],
  takeaways: ['Percentages multiply.', 'Assume 100.', 'Know the base.', 'Reverse by division.'],
  selfCheck: ['Can I find the net effect of +20% then −10%?', 'Can I find the area change for two percent changes?', 'Can I reverse a chain of changes?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Percentage topic area; examples are original.']]
};

const quiz = [
  easy('A number is increased by 20% and then by 30%. The net increase is', '56%', ['50%', '52%', '60%'], '1.2 × 1.3 = 1.56, so 56%.'),
  easy('A number is increased by 10% and then decreased by 10%. The net change is', '1% decrease', ['No change', '1% increase', '2% decrease'], '1.1 × 0.9 = 0.99, a 1% decrease.'),
  easy('A price rises by 10% twice. The net rise is', '21%', ['20%', '22%', '19%'], '1.1 × 1.1 = 1.21, so 21%.'),
  easy('The length of a rectangle is increased by 10% and its breadth by 20%. The area increases by', '32%', ['30%', '31%', '35%'], '1.1 × 1.2 = 1.32, so 32%.'),
  easy('A value falls by 20% and then rises by 25%. The net change is', 'No change', ['5% rise', '5% fall', '4% rise'], '0.8 × 1.25 = 1.00.'),
  easy('The price of sugar rises by 25%. Consumption must fall by what percentage to keep expenditure the same?', '20%', ['25%', '15%', '30%'], 'Consumption multiplier = 1/1.25 = 0.8, so a 20% fall.'),

  medium('A number is decreased by 20% and then by 25%. The net decrease is', '40%', ['45%', '35%', '42%'], '0.8 × 0.75 = 0.6, a 40% decrease.'),
  medium('A number is first increased by 20% and then decreased by 20%. The net change is', '4% decrease', ['No change', '4% increase', '2% decrease'], '1.2 × 0.8 = 0.96, so a 4% decrease.'),
  medium('After successive increases of 10% and 20%, a number is 6,600. The original number is', 5000, [5500, 5280, 4800], '6600 ÷ (1.1 × 1.2) = 6600 ÷ 1.32 = 5000.'),
  medium('The population of a town is 20,000. It increases by 10% in the first year and decreases by 10% in the second. The population after 2 years is', 19800, [20000, 19600, 20200], '20000 × 1.1 × 0.9 = 19,800.'),
  medium('The length and breadth of a rectangle are both increased by 10%. The area increases by', '21%', ['20%', '22%', '19%'], '1.1 × 1.1 = 1.21.'),
  medium('The side of a square is increased by 20%. The area increases by', '44%', ['40%', '42%', '48%'], '1.2² = 1.44.'),
  medium('The radius of a circle is decreased by 10%. The area decreases by', '19%', ['10%', '20%', '21%'], 'Area ∝ r². 0.9² = 0.81, a 19% decrease.'),
  medium('A salary is increased by 20% and then by 10%. If the final salary is ₹26,400, the original salary is', 20000, [22000, 21000, 24000], '26400 ÷ (1.2 × 1.1) = 26400 ÷ 1.32 = 20,000.'),

  placement('The price of a commodity rises by 20%. By what percentage should consumption be reduced to keep the expenditure unchanged?', '16.67%', ['20%', '15%', '18%'], 'Reduction = 20/(100 + 20) = 1/6 = 16.67%.'),
  placement('The length of a rectangle is decreased by 20% and the breadth is increased by 25%. The area', 'remains the same', ['increases by 5%', 'decreases by 5%', 'decreases by 1%'], '0.8 × 1.25 = 1.00, so the area is unchanged.'),
  placement('A number is increased by 25% and then decreased by 20%, then increased by 10%. The net change is', '10% increase', ['5% increase', '12% increase', '8% increase'], '1.25 × 0.8 × 1.1 = 1.1, a 10% increase.'),
  placement('If the price of an article is first increased by 15% and then decreased by 10%, the net percentage change is', '3.5% increase', ['5% increase', '4% increase', '2.5% increase'], '1.15 × 0.9 = 1.035, a 3.5% increase.'),
  placement('Due to a 20% increase in price, a man buys 5 kg less sugar for ₹600. The original price per kg was', 20, [18, 22, 25], 'Original: 600/p kg. New: 600/(1.2p) kg. 600/p − 500/p = 5 gives 100/p = 5, so p = 20.'),
  placement('A shopkeeper raises the price of an item by 25% and then offers a 20% discount. The final price compared with the original is', 'the same', ['5% higher', '5% lower', '2% higher'], '1.25 × 0.8 = 1.00.')
];
build(chapter, quiz);
