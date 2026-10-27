const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-mixtures-allegations', year: 2, category: 'Advanced Quantitative Aptitude', num: 3, difficulty: 'Intermediate',
  title: 'Mixtures and Alligation',
  tagline: 'Year 2 — Mean price, the alligation cross, and replacement problems',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/alligation-or-mixture/',
  overview: 'A mixture problem combines two or more ingredients of different price, strength or concentration and asks for the mixing ratio, the mean value or the quantity of one ingredient. Alligation is a fast method for finding the ratio in which two items must be mixed to get a required mean value. A second type, replacement, removes part of a mixture and replaces it with another ingredient, repeatedly.',
  placement: 'Mixture and alligation questions are commonly asked in company aptitude rounds. The alligation cross solves in one line a problem that otherwise needs two equations.',
  realWorld: 'Blending tea or coffee grades, diluting a chemical solution, preparing alloys and mixing fuel grades all use these ideas.',
  objectives: [
    'Find the mean price or strength of a mixture',
    'Use the alligation rule to find the mixing ratio',
    'Handle concentration (percentage) problems',
    'Solve replacement problems with the (1 − x/n)ᵏ formula',
    'Compute profit when a mixture is sold at a given price'
  ],
  prereq: ['Advanced Ratio and Proportion', 'Basic Percentages', 'Profit and Loss Basics'],
  refresher: 'The mean (weighted average) of two items is (q₁p₁ + q₂p₂) ÷ (q₁ + q₂). Ratios can be written as parts, and concentrations as fractions.',
  defs: [
    'Mean price (cost price of the mixture): the price per unit of the mixture, which lies between the two component prices.',
    'Alligation: a rule giving the ratio in which two items are mixed: (dearer − mean) : (mean − cheaper).',
    'Concentration: the fraction or percentage of an ingredient in a mixture.',
    'Replacement: removing some mixture and replacing it with an equal amount of another ingredient.',
    'Weighted average: an average where each item is weighted by its quantity.'
  ],
  intuition: 'The mean sits between the two prices, and it sits closer to the one that is present in the larger quantity. The ratio of quantities is therefore the inverse ratio of the distances from the mean: the farther price is present in the smaller quantity.',
  mental: 'Draw the alligation cross: cheaper price on the left, dearer on the right, mean in the middle. Subtract diagonally. The result gives the ratio of cheaper : dearer quantities in the form (dearer − mean) : (mean − cheaper).',
  formulas: [
    ['Mean price', 'Mean = (q₁p₁ + q₂p₂) ÷ (q₁ + q₂)', 'Weighted average.', 'Cost of a mixture.', '3 kg at ₹40 + 2 kg at ₹60 → 240/5 = ₹48'],
    ['Alligation rule', 'Cheaper : Dearer = (Dearer − Mean) : (Mean − Cheaper)', 'Works for prices, concentrations and alloy purity.', 'Finding the mixing ratio.', '₹20 and ₹30 for ₹24 → (30−24):(24−20) = 3 : 2'],
    ['Replacement', 'Final quantity of original = Q × (1 − x/Q)ⁿ', 'Q = container volume, x = amount replaced each time, n = repetitions.', 'Milk and water replacement.', '40 L, 8 L, twice → 40(0.8)² = 25.6 L'],
    ['Adding a pure ingredient', 'New concentration = (old amount + x) ÷ (old total + x)', 'Equation in x.', 'Dilution and fortification.', '(12 + x)/(60 + x) = 0.4 → x = 20'],
    ['Profit on a mixture', 'Profit % = (SP − CP of mixture) ÷ CP × 100', 'Compute the mixture cost first.', 'Mixture sold at a price.', 'CP = 1600, SP = 1680 → 5%']
  ],
  narrative: [
    'For mean price, treat quantities as weights. If 3 kg of tea at ₹40 is mixed with 2 kg at ₹60, the total cost is 120 + 120 = ₹240 for 5 kg, so the mean is ₹48 per kg.',
    'Alligation reverses the process. To get a mean of ₹24 from ₹20 and ₹30, the differences are 30 − 24 = 6 and 24 − 20 = 4, so the ratio of cheaper to dearer is 6 : 4 = 3 : 2. The cheaper item is in the larger quantity because the mean is closer to it.',
    'Concentration problems use the same rule. A 30% and a 50% solution mixed to give 42% need (50 − 42) : (42 − 30) = 8 : 12 = 2 : 3. Water is a 0% solution and pure milk is a 100% solution, which turns dilution problems into alligation.',
    'Replacement: if x litres are drawn out of a Q-litre vessel of pure milk and replaced by water, the milk fraction becomes (1 − x/Q). After n repetitions, the milk is Q(1 − x/Q)ⁿ. With 80 L, 20 L replaced twice: 80 × (3/4)² = 45 L milk, 35 L water.',
    'When a seller mixes water with milk and sells at the price of pure milk, the profit percentage is (water ÷ milk) × 100. One litre of water for every 4 litres of milk gives 25% profit.'
  ],
  deep: [
    ['Why alligation works', 'The mean is a balance point: the cheaper quantity times its distance from the mean equals the dearer quantity times its distance. That gives the inverse proportion between quantity and distance.'],
    ['Repeated replacement', 'The remaining original quantity is multiplied by the same factor (1 − x/Q) each time, so the result is a geometric decrease. Remember that the amount removed in each step is a mixture, not pure milk.']
  ],
  variations: [
    ['Mean price', 'Weighted average.', '3 kg at ₹40, 2 kg at ₹60'],
    ['Alligation ratio', 'Find the mixing ratio.', '₹20 and ₹30 to get ₹24'],
    ['Concentration', 'Percent solutions.', '30% and 50% to get 42%'],
    ['Replacement', 'Repeated removal.', '80 L, 20 L replaced twice'],
    ['Profit on a mixture', 'Mix and sell.', 'Water added to milk']
  ],
  examples: [
    {
      title: 'Alligation ratio',
      q: 'In what ratio must rice at ₹20 per kg be mixed with rice at ₹30 per kg to get a mixture worth ₹24 per kg?',
      given: ['Cheaper ₹20, dearer ₹30, mean ₹24'],
      concept: 'Cheaper : Dearer = (Dearer − Mean) : (Mean − Cheaper).',
      steps: [['Subtract', 'Dearer − mean = 30 − 24 = 6. Mean − cheaper = 24 − 20 = 4.'], ['Ratio', '6 : 4 = 3 : 2.']],
      ans: '3 : 2 (cheaper : dearer)', why: 'The mean is closer to ₹20, so more of the cheaper rice is needed.', trap: 'Writing 2 : 3.'
    },
    {
      title: 'Replacement',
      q: 'A vessel holds 80 litres of pure milk. 20 litres are removed and replaced with water. The process is repeated once more. How much milk is left?',
      given: ['Q = 80 L', 'x = 20 L', 'n = 2'],
      concept: 'Milk left = Q(1 − x/Q)ⁿ.',
      steps: [['Fraction left each time', '1 − 20/80 = 3/4.'], ['Apply twice', '80 × (3/4)² = 80 × 9/16.'], ['Compute', '= 45 litres.']],
      ans: '45 litres', why: 'Each replacement leaves 3/4 of the milk.', trap: 'Subtracting 20 + 20 = 40 litres.'
    },
    {
      title: 'Profit on a mixture',
      q: 'A trader mixes 26 kg of rice at ₹20/kg with 30 kg of rice at ₹36/kg and sells the mixture at ₹30/kg. Find his profit percentage.',
      given: ['26 kg at ₹20', '30 kg at ₹36', 'SP ₹30/kg'],
      concept: 'Profit % = (SP − CP) ÷ CP × 100.',
      steps: [['Total cost', '26 × 20 + 30 × 36 = 520 + 1080 = ₹1,600.'], ['Total selling price', '56 kg × 30 = ₹1,680.'], ['Profit %', '(1680 − 1600) ÷ 1600 × 100 = 5%.']],
      ans: '5%', why: 'The profit is ₹80 on a cost of ₹1,600.', trap: 'Dividing profit by selling price.'
    }
  ],
  shortcut: {
    title: 'The alligation cross',
    trad: 'Write two equations in the unknown quantities.',
    fast: 'Draw the cross: cheaper and dearer on top, mean in the middle, subtract diagonally. The two differences are the ratio.',
    rules: ['Mean must lie between the two prices.', 'Water has price or concentration 0.', 'Replacement: multiply by (1 − x/Q) each time.', 'Check the ratio direction: more of the item nearer the mean.']
  },
  mistakes: [
    ['Reversing the alligation ratio', 'Mixing up which difference goes with which item.', 'Remember: the difference with the dearer price goes with the cheaper quantity.'],
    ['Subtracting replacement amounts', 'Taking 20 + 20 as milk lost.', 'Use the multiplication factor.'],
    ['Average of prices', 'Averaging ₹20 and ₹30 as ₹25 regardless of quantity.', 'Use weights.'],
    ['Wrong base for profit', 'Using SP as the base.', 'Use the cost of the mixture.']
  ],
  tips: { sec: 75, elim: 'The mean must lie between the two component values; the ratio direction must favour the nearer one.', advice: 'Replacement questions are a common difficulty step; learn the (1 − x/Q)ⁿ formula.', insight: 'Alligation is also used for averages and speed questions.' },
  revision: ['Mean = weighted average.', 'Alligation cross.', 'Replacement factor (1 − x/Q).', 'Water = 0.', 'Profit on mixture uses CP of mixture.'],
  quickFormulas: ['C : D = (D − M) : (M − C)', 'Q(1 − x/Q)ⁿ'],
  takeaways: ['Draw the cross.', 'Quantities favour the nearer price.', 'Use the multiplier for replacement.', 'Verify the mean.'],
  selfCheck: ['Can I find the ratio for a target mean price?', 'Can I compute milk left after replacements?', 'Can I find profit on a mixture?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Alligation or Mixture topic area; examples are original.']]
};

const quiz = [
  easy('In what ratio must rice at ₹20/kg be mixed with rice at ₹30/kg to get a mixture worth ₹24/kg (cheaper : dearer)?', '3 : 2', ['2 : 3', '1 : 1', '4 : 1'], '(30 − 24) : (24 − 20) = 6 : 4 = 3 : 2.'),
  easy('3 kg of tea at ₹40/kg is mixed with 2 kg of tea at ₹60/kg. The mean price per kg is', (3 * 40 + 2 * 60) / 5, [50, 52, 46], 'Cost = 120 + 120 = 240 for 5 kg. Mean = 48.'),
  easy('A mixture of 20 litres has milk and water in the ratio 3 : 1. The quantity of water is', 5, [4, 6, 15], 'Parts = 4, one part = 5. Water = 5 litres.'),
  easy('How much water must be added to 20 litres of pure milk to make the mixture 80% milk?', 5, [4, 6, 10], '20/(20 + w) = 0.8 gives 20 + w = 25, so w = 5.'),
  easy('2 kg of tea at ₹300/kg is mixed with 3 kg of tea at ₹200/kg. The price per kg of the mixture is', 240, [250, 260, 230], '(2 × 300 + 3 × 200) ÷ 5 = 1200 ÷ 5 = 240.'),
  easy('In what ratio must sugar at ₹36/kg be mixed with sugar at ₹42/kg to get a mixture at ₹40/kg (cheaper : dearer)?', '1 : 2', ['2 : 1', '1 : 1', '3 : 2'], '(42 − 40) : (40 − 36) = 2 : 4 = 1 : 2.'),

  medium('Milk costs ₹20/L. In what ratio (water : milk) must water be added so that selling the mixture at ₹20/L gives a profit of 25%?', '1 : 4', ['1 : 5', '1 : 3', '2 : 5'], 'Cost of mixture = 20/1.25 = ₹16. Alligation with water (0): (20 − 16) : (16 − 0) = 4 : 16 = 1 : 4.'),
  medium('A vessel has 40 litres of pure milk. 8 litres are removed and replaced with water. This is repeated once more. The milk left is', 25.6, [24, 26.4, 32], '40 × (1 − 8/40)² = 40 × 0.64 = 25.6 litres.'),
  medium('Vessel A has 60 L with milk : water = 2 : 1 and vessel B has 40 L with milk : water = 1 : 3. If both are mixed, milk : water is', '1 : 1', ['3 : 2', '2 : 3', '5 : 3'], 'Milk = 40 + 10 = 50. Water = 20 + 30 = 50. The ratio is 1 : 1.'),
  medium('A 60 kg alloy contains 20% copper. How much pure copper must be added to make it 40% copper?', 20, [15, 18, 24], 'Copper = 12 kg. (12 + x)/(60 + x) = 0.4 gives 12 + x = 24 + 0.4x, so x = 20.'),
  medium('Wheat at ₹30/kg and wheat at ₹35/kg are mixed in the ratio 2 : 3. The price of the mixture per kg is', (2 * 30 + 3 * 35) / 5, [32, 33.5, 34], '(2 × 30 + 3 × 35) ÷ 5 = 165 ÷ 5 = 33.'),
  medium('A milkman mixes 1 litre of water with every 4 litres of milk and sells it at the price of milk. His profit percentage is', '25%', ['20%', '15%', '10%'], 'For 4 L of milk cost, he sells 5 L. Profit = 1/4 = 25%.'),
  medium('A 25-litre container has pure milk. 5 litres are replaced with water once. The ratio of milk to water is', '4 : 1', ['5 : 1', '3 : 1', '5 : 4'], 'Milk = 20 L and water = 5 L. The ratio is 4 : 1.'),
  medium('In what ratio must a 30% solution be mixed with a 50% solution to get a 42% solution (30% : 50%)?', '2 : 3', ['3 : 2', '1 : 1', '4 : 3'], '(50 − 42) : (42 − 30) = 8 : 12 = 2 : 3.'),

  placement('A vessel has 80 L of pure milk. 16 L are replaced with water, twice. The milk left is', 51.2, [48, 54, 64], '80 × (1 − 16/80)² = 80 × 0.64 = 51.2 L.'),
  placement('In what ratio must rice at ₹9.30/kg be mixed with rice at ₹10.80/kg to get a mixture at ₹10/kg (cheaper : dearer)?', '8 : 7', ['7 : 8', '3 : 2', '1 : 1'], '(10.80 − 10) : (10 − 9.30) = 0.80 : 0.70 = 8 : 7.'),
  placement('A mixture of 729 mL has milk and water in the ratio 7 : 2. How much water must be added to make the ratio 7 : 3?', 81, [72, 90, 99], 'Milk = 567, water = 162. 567 : (162 + x) = 7 : 3 gives 162 + x = 243, so x = 81 mL.'),
  placement('A vessel has 80 L of milk. 20 L are removed and replaced with water, and then again 20 L of the mixture are removed and replaced with water. The quantity of water now is', 35, [30, 40, 45], 'Milk left = 80 × (3/4)² = 45 L. Water = 80 − 45 = 35 L.'),
  placement('A trader mixes 26 kg of rice at ₹20/kg with 30 kg at ₹36/kg and sells the mixture at ₹30/kg. His profit percentage is', '5%', ['4%', '6%', '8%'], 'Cost = 520 + 1080 = 1600. Sales = 56 × 30 = 1680. Profit = 80/1600 = 5%.'),
  placement('In what ratio must 18-carat gold be mixed with 22-carat gold to get 20-carat gold?', '1 : 1', ['1 : 2', '2 : 1', '3 : 2'], '(22 − 20) : (20 − 18) = 2 : 2 = 1 : 1.')
];
build(chapter, quiz);
