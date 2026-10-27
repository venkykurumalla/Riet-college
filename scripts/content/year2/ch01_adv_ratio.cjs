const { easy, medium, placement, build } = require('../lib.cjs');
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const ratio = (...v) => { const g = v.reduce(gcd); return v.map(x => x / g).join(' : '); };

const chapter = {
  id: 'y2-quant-adv-ratio-prop', year: 2, category: 'Advanced Quantitative Aptitude', num: 1, difficulty: 'Intermediate',
  title: 'Advanced Ratio and Proportion',
  tagline: 'Year 2 — Compound ratios, three-term ratios, ratio changes and componendo-dividendo',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/ratio-and-proportion/',
  overview: 'Year 1 introduced the ratio of two quantities and simple sharing. Year 2 extends this to ratios of three or more quantities, compound and duplicate ratios, ratios that change when numbers are added or percentages applied, and ratios of mixtures. The common thread is turning every statement into "parts" and then working with one multiplier.',
  placement: 'Ratio problems are commonly asked in company aptitude rounds and are the base of partnership, mixture, age and salary questions. Two-condition ratio problems are a typical intermediate-level item.',
  realWorld: 'Sharing profit among partners, comparing salaries before and after a hike, and mixing paints or alloys in fixed proportions are everyday ratio problems.',
  objectives: [
    'Combine two ratios into a three-term or four-term ratio',
    'Use compound, duplicate and sub-duplicate ratios',
    'Solve problems where a number is added to or removed from each term',
    'Handle ratio changes caused by percentage increases',
    'Apply componendo and dividendo and ratios of mixtures'
  ],
  prereq: ['Basic Ratio', 'Basic Proportion', 'Basic Percentages'],
  refresher: 'A ratio a : b means the quantities are ak and bk for some k. To compare or combine ratios, convert them to fractions and use the LCM to match the common term.',
  defs: [
    'Continued ratio: a ratio of three or more terms such as a : b : c, obtained by matching the common term of a : b and b : c.',
    'Compound ratio of a : b and c : d is ac : bd. Duplicate ratio of a : b is a² : b². Sub-duplicate is √a : √b.',
    'Inverse ratio of a : b is b : a.',
    'Componendo: if a/b = c/d then (a+b)/b = (c+d)/d. Dividendo: (a−b)/b = (c−d)/d. Together: (a+b)/(a−b) = (c+d)/(c−d).',
    'Ratio of mixtures: when two mixtures with ratios a : b and c : d are combined in a given ratio, add the quantity of each ingredient separately.'
  ],
  intuition: 'Every ratio problem has the same engine: write each quantity as a multiple of one unknown k, form one equation from the extra information, solve for k and read off the answer. When two ratios share a middle term, scale them so that the middle term is the same number in both.',
  mental: 'Think of ratios as recipes. 2 : 3 means 2 cups of A for 3 cups of B. Changing the batch size changes k, not the recipe. Adding the same amount to both ingredients changes the recipe, so the equation must be written with the added amount.',
  formulas: [
    ['Combining ratios', 'a:b = p:q and b:c = r:s ⇒ a:b:c = pr : qr : qs', 'Match the common term b by cross-multiplying.', 'Three-party sharing.', '3:4 and 6:5 → 9:12:10'],
    ['Compound and duplicate', 'Compound = ac : bd;  Duplicate = a² : b²;  Sub-duplicate = √a : √b', 'Direct definitions.', 'Questions naming these ratios.', 'Compound of 2:3 and 5:7 = 10:21'],
    ['Adding the same number', '(a + x)/(b + x) = c/d → solve for x (or for k when a = pk, b = qk)', 'Cross-multiply.', 'Age and number problems.', '(5k+10)/(7k+10) = 3/4 → k = 10'],
    ['Percentage change in a ratio', 'New ratio = (a × (1 + r₁)) : (b × (1 + r₂))', 'Multiply each term by its multiplier.', 'Salary hikes, price changes.', '3:5 with +20% and +10% → 3.6:5.5 = 36:55'],
    ['Componendo-dividendo', 'a/b = c/d ⇒ (a+b)/(a−b) = (c+d)/(c−d)', 'Turns a hard equation into a simple one.', 'Finding x:y from (x+y)/(x−y).', 'x:y = 5:3 → (x+y):(x−y) = 8:2 = 4:1']
  ],
  narrative: [
    'To combine ratios, make the common term equal. For a : b = 3 : 4 and b : c = 6 : 5, the common term b is 4 in the first and 6 in the second. Scale the first by 3 (9 : 12) and the second by 2 (12 : 10), so a : b : c = 9 : 12 : 10.',
    'When the same number is added to every term, you cannot add to the ratio; you must work with actual quantities. If A : B = 5 : 7 and adding 10 to each gives 3 : 4, write (5k + 10)/(7k + 10) = 3/4, so 20k + 40 = 21k + 30 and k = 10. A = 50, B = 70.',
    'For percentage changes, convert each percentage to a multiplier. A salary ratio 3 : 5 where the first rises 20% and the second 10% becomes 3(1.2) : 5(1.1) = 3.6 : 5.5 = 36 : 55.',
    'In mixture problems, find the amount of each ingredient in each part separately and then add. If vessel A has milk in 4/5 of its content and vessel B has 3/5, mixing them 2 : 3 gives milk (2×4/5 + 3×3/5)/5 = 17/25 of the mixture, so milk : water = 17 : 8.',
    'Fractions in ratios, such as 1/2 : 1/3 : 1/4, are cleared by multiplying by the LCM of the denominators (12): 6 : 4 : 3.'
  ],
  deep: [
    ['Ratios and algebra', 'Ratio statements are equations in disguise. "A is 2/3 of B and B is 1/4 of C" means A : B = 2 : 3 and B : C = 1 : 4, giving A : B : C = 2 : 3 : 12 after matching B.'],
    ['Checking answers', 'Substitute back. If your numbers do not give the stated ratio after the change, the equation was set up wrongly.']
  ],
  variations: [
    ['Continued ratios', 'Merge a:b and b:c.', 'a:b = 3:4, b:c = 6:5'],
    ['Compound and duplicate ratios', 'Direct questions.', 'Compound of 2:3 and 5:7'],
    ['Add or subtract from each term', 'Equation in k.', 'Add 10 to each term of 5:7'],
    ['Percentage-based ratio changes', 'Multipliers.', 'Salaries 3:5 with raises of 20% and 10%'],
    ['Mixture ratios', 'Add ingredients separately.', 'Two vessels mixed 2:3']
  ],
  examples: [
    {
      title: 'Three-term ratio',
      q: 'If a : b = 3 : 4 and b : c = 6 : 5, find a : b : c.',
      given: ['a : b = 3 : 4', 'b : c = 6 : 5'],
      concept: 'Match the common term b.',
      steps: [
        ['LCM of the b-values', 'b is 4 and 6, so LCM = 12.'],
        ['Scale the ratios', 'a : b = 3 : 4 → multiply by 3 → 9 : 12. b : c = 6 : 5 → multiply by 2 → 12 : 10.'],
        ['Join', 'a : b : c = 9 : 12 : 10.']
      ],
      ans: '9 : 12 : 10', why: 'Scaling a ratio by a constant does not change its value.', trap: 'Writing 3 : 4 : 5 by joining the ratios without matching b.'
    },
    {
      title: 'Adding the same number',
      q: 'The present ratio of two numbers is 5 : 7. If 10 is added to each, the ratio becomes 3 : 4. Find the numbers.',
      given: ['Ratio 5 : 7', 'After adding 10: 3 : 4'],
      concept: 'Write the numbers as 5k and 7k.',
      steps: [
        ['Form the equation', '(5k + 10)/(7k + 10) = 3/4.'],
        ['Cross-multiply', '4(5k + 10) = 3(7k + 10), so 20k + 40 = 21k + 30.'],
        ['Solve', 'k = 10. Numbers are 50 and 70.']
      ],
      ans: '50 and 70', why: 'Check: 60 : 80 = 3 : 4.', trap: 'Adding 10 to 5 and 7 directly.'
    },
    {
      title: 'Mixing two mixtures',
      q: 'Vessel A has milk and water in the ratio 4 : 1 and vessel B in the ratio 3 : 2. The contents are mixed in the ratio 2 : 3 (A : B). Find the milk : water ratio in the mixture.',
      given: ['A: milk 4/5', 'B: milk 3/5', 'Mix A : B = 2 : 3'],
      concept: 'Add the milk and the water separately.',
      steps: [
        ['Take 5 litres in all', '2 L of A and 3 L of B.'],
        ['Milk', '2 × 4/5 + 3 × 3/5 = 1.6 + 1.8 = 3.4 L.'],
        ['Water', '5 − 3.4 = 1.6 L. Ratio = 3.4 : 1.6 = 17 : 8.']
      ],
      ans: '17 : 8', why: 'Each vessel contributes in proportion to its share.', trap: 'Averaging the two ratios.'
    }
  ],
  shortcut: {
    title: 'Common-term matching and multipliers',
    trad: 'Solve with simultaneous equations for every ratio problem.',
    fast: 'Match common terms by LCM, use k for each quantity, and for percentage changes multiply by (1 ± r). Use componendo-dividendo to read x : y straight from (x+y)/(x−y).',
    rules: ['Match the middle term using the LCM.', 'Percent change → multiplier.', 'Clear fractions in a ratio by the LCM of denominators.', 'Check by substituting back.']
  },
  mistakes: [
    ['Adding to the ratio instead of to the quantities', 'Treating 5 : 7 as numbers.', 'Use 5k and 7k.'],
    ['Not matching the common term', 'Joining ratios as they appear.', 'Scale so the middle term is the same.'],
    ['Averaging ratios of mixtures', 'Ignoring the quantities mixed.', 'Add the ingredient amounts separately.'],
    ['Wrong multiplier', 'Using 20 instead of 1.2.', 'Convert percentages to multipliers.']
  ],
  tips: { sec: 90, elim: 'Total of the ratio parts must divide the given total evenly; test options for this.', advice: 'Attempt direct combining questions first; leave two-condition problems for later.', insight: 'The same skill carries into partnership, mixtures and DI ratio questions.' },
  revision: ['Match the common term to combine ratios.', 'Compound multiplies, duplicate squares.', 'Add to the quantities, not to the ratio.', 'Percent change = multiplier.', 'Componendo-dividendo.'],
  quickFormulas: ['a:b:c = pr : qr : qs', '(a+b)/(a−b) = (c+d)/(c−d)'],
  takeaways: ['Use one multiplier k.', 'Match common terms.', 'Use multipliers for percentages.', 'Verify by substitution.'],
  selfCheck: ['Can I find a:b:c from two ratios?', 'Can I solve "add x to each term"?', 'Can I mix two mixtures by ratio?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Ratio and Proportion topic area; examples are original.']]
};

const quiz = [
  easy('₹2,160 is divided in the ratio 2 : 3 : 4. The largest share is', 2160 * 4 / 9, [720, 480, 1080], 'Parts = 9, one part = 240. Largest = 4 × 240 = 960.'),
  easy('If a : b = 3 : 4 and b : c = 6 : 5, then a : b : c is', '9 : 12 : 10', ['3 : 4 : 5', '18 : 24 : 20', '9 : 12 : 5'], 'Match b: LCM of 4 and 6 is 12. a : b = 9 : 12 and b : c = 12 : 10. So a : b : c = 9 : 12 : 10.'),
  easy('The compound ratio of 2 : 3 and 5 : 7 is', '10 : 21', ['7 : 10', '5 : 6', '14 : 15'], 'Multiply the first terms and the second terms: 2 × 5 : 3 × 7 = 10 : 21.'),
  easy('If a/b = 2/3 and b/c = 4/5, then a/c equals', '8/15', ['6/5', '2/5', '10/12'], 'a/c = (a/b)(b/c) = (2/3)(4/5) = 8/15.'),
  easy('The duplicate ratio of 4 : 5 is', '16 : 25', ['8 : 10', '2 : √5', '5 : 4'], 'Square both terms: 4² : 5² = 16 : 25.'),
  easy('The sub-duplicate ratio of 16 : 25 is', '4 : 5', ['8 : 10', '256 : 625', '5 : 4'], 'Take square roots: √16 : √25 = 4 : 5.'),

  medium('The present ratio of two numbers is 5 : 7. If 10 is added to each, the ratio becomes 3 : 4. The smaller number is', 50, [40, 60, 70], '(5k + 10)/(7k + 10) = 3/4 gives 20k + 40 = 21k + 30, so k = 10. The smaller number is 50.'),
  medium('Three numbers sum to 98. The ratio of the first to the second is 2 : 3 and of the second to the third is 5 : 8. The second number is', 30, [20, 24, 48], 'a : b = 2 : 3 = 10 : 15 and b : c = 5 : 8 = 15 : 24. Total parts 49, one part = 2. Second = 15 × 2 = 30.'),
  medium('The salaries of two persons are in the ratio 3 : 5. If the first gets a 20% raise and the second a 10% raise, the new ratio is', '36 : 55', ['6 : 11', '3 : 5', '18 : 25'], 'New = 3 × 1.2 : 5 × 1.1 = 3.6 : 5.5 = 36 : 55.'),
  medium('A mixture of 30 litres has milk and water in the ratio 3 : 2. If 10 litres of water are added, the ratio of milk to water becomes', '9 : 11', ['3 : 2', '9 : 10', '18 : 11'], 'Milk = 18 L, water = 12 L. After adding 10 L of water: 18 : 22 = 9 : 11.'),
  medium('If x : y = 5 : 3, then (2x + 3y) : (2x − 3y) is', '19 : 1', ['10 : 9', '19 : 9', '1 : 19'], 'Let x = 5k and y = 3k. 2x + 3y = 19k and 2x − 3y = k. The ratio is 19 : 1.'),
  medium('Three numbers are in the ratio 1/2 : 1/3 : 1/4 and their sum is 52. The largest number is', 24, [26, 18, 16], 'Multiply by 12: 6 : 4 : 3. Total parts 13, one part = 4. Largest = 24.'),
  medium('If a : b = 2 : 3, b : c = 4 : 5 and c : d = 6 : 7, then a : d is', '16 : 35', ['48 : 105', '2 : 7', '8 : 15'], 'a/d = (2/3)(4/5)(6/7) = 48/105 = 16/35.'),
  medium('The ages of a father and son are in the ratio 7 : 2. After 10 years the ratio becomes 9 : 4. The son\'s present age is', 10, [8, 12, 14], '(7k + 10)/(2k + 10) = 9/4 gives 28k + 40 = 18k + 90, so k = 5. The son is 10.'),

  placement('Vessel A has milk and water in the ratio 4 : 1 and vessel B in the ratio 3 : 2. They are mixed in the ratio 2 : 3 (A : B). The milk : water ratio is', '17 : 8', ['7 : 3', '34 : 16', '3 : 2'], 'Milk = 2(4/5) + 3(3/5) = 3.4 and total 5, so water = 1.6. Ratio = 3.4 : 1.6 = 17 : 8.'),
  placement('₹5,100 is divided among A, B and C. A gets 2/3 of B\'s share and B gets 1/4 of C\'s share. C\'s share is', 3600, [3000, 2700, 900], 'A : B = 2 : 3 and B : C = 1 : 4 = 3 : 12. So A : B : C = 2 : 3 : 12 (17 parts). One part = 300. C = 12 × 300 = 3600.'),
  placement('In a class the ratio of boys to girls is 3 : 2. If 20% of the boys and 25% of the girls are absent, the ratio of boys to girls present is', '8 : 5', ['3 : 2', '12 : 7', '6 : 5'], 'Present boys = 3 × 0.8 = 2.4 and girls = 2 × 0.75 = 1.5. Ratio = 2.4 : 1.5 = 8 : 5.'),
  placement('If a : b = 2 : 3 and b : c = 4 : 5, then (a + b + c) : (a − b + c) is', '35 : 11', ['7 : 3', '35 : 9', '5 : 1'], 'a : b : c = 8 : 12 : 15. a + b + c = 35 and a − b + c = 11. Ratio = 35 : 11.'),
  placement('Two alloys contain zinc and copper in the ratios 3 : 7 and 2 : 3. If 40 kg of the first and 50 kg of the second are melted together, the zinc : copper ratio in the new alloy is', '16 : 29', ['5 : 10', '1 : 2', '8 : 15'], 'Zinc = 40 × 3/10 + 50 × 2/5 = 12 + 20 = 32. Copper = 28 + 30 = 58. Ratio = 32 : 58 = 16 : 29.'),
  placement('Two numbers are in the ratio 4 : 5 and their LCM is 200. The sum of their squares is', 4100, [3700, 4000, 4500], 'Numbers 4k and 5k have LCM 20k = 200, so k = 10. The numbers are 40 and 50, and 1600 + 2500 = 4100.')
];
build(chapter, quiz);
