const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-quant-basic-ratio', year: 1, category: 'Quantitative Foundation', num: 7,
  title: 'Basic Ratio',
  tagline: 'Year 1 Foundation — Comparing quantities, simplifying ratios and sharing in a ratio',
  minutes: 45,
  overview: 'A ratio compares two quantities of the same kind by division. If a classroom has 20 boys and 30 girls, the ratio of boys to girls is 20 : 30, which simplifies to 2 : 3. A ratio has no unit, and the order of the terms matters: 2 : 3 is not the same as 3 : 2. Ratio is the language behind sharing money, mixing ingredients, scaling recipes and comparing salaries.',
  placement: 'Ratio questions are commonly asked in company aptitude rounds, both directly (sharing, comparing) and hidden inside age, partnership, mixture and percentage problems. A clean grasp of the basics makes all of those easier.',
  realWorld: 'Mixing cement and sand for a wall (1 : 4), the aspect ratio of a screen (16 : 9), the scale of a map (1 : 50,000) and the gear ratio of a bicycle are all everyday ratios.',
  objectives: [
    'Write and simplify a ratio, converting both quantities to the same unit first',
    'Compare two ratios and arrange several ratios in order',
    'Divide a quantity in a given ratio, including three-part ratios',
    'Combine ratios such as a:b and b:c into a:b:c',
    'Handle compound and duplicate ratios and "add the same number to both terms" problems'
  ],
  prereq: ['Fractions and decimals', 'HCF and LCM'],
  refresher: 'Simplify a ratio by dividing both terms by their HCF (48 : 72 → divide by 24 → 2 : 3). Cross-multiplication compares fractions: a/b > c/d when a×d > b×c.',
  defs: [
    'Ratio: the comparison of two quantities of the same kind by division. The ratio of a to b is written a : b or a/b, where a is the antecedent (first term) and b is the consequent (second term).',
    'Simplest form: a ratio whose terms have no common factor other than 1 (2 : 3, not 4 : 6).',
    'Equivalent ratios: ratios that give the same value after simplifying, such as 2 : 3, 4 : 6 and 10 : 15.',
    'Compound ratio: the ratio of the products of corresponding terms. The compound ratio of a : b and c : d is ac : bd.',
    'Duplicate ratio of a : b is a² : b². Triplicate ratio is a³ : b³. Sub-duplicate ratio is √a : √b.'
  ],
  intuition: 'A ratio only tells you how things relate, never how big they actually are. In the ratio 2 : 3 the whole is split into 2 + 3 = 5 equal parts. Each "part" can be any size: 1 rupee, 10 rupees or 100 rupees. Once you find the value of one part, every quantity follows by multiplication.',
  mental: 'Picture a bar split into equal blocks. A : B = 3 : 5 means A owns 3 blocks and B owns 5, so the bar has 8 blocks. If the whole bar is ₹1,200, one block is ₹150, so A gets ₹450 and B gets ₹750.',
  formulas: [
    ['Simplifying a ratio', 'a : b = (a ÷ h) : (b ÷ h), where h = HCF(a, b)', 'Divide both terms by their HCF. Both terms must be in the same unit first.', 'Any ratio question that asks for the simplest form.', '48 : 72 → HCF is 24 → 2 : 3'],
    ['Sharing a quantity N in the ratio a : b', 'First share = N × a/(a+b),  Second share = N × b/(a+b)', 'The denominator is the total number of parts.', 'Dividing money, marks, sweets, land.', '₹1,200 in 3 : 5 → 1200×3/8 = ₹450 and 1200×5/8 = ₹750'],
    ['Combining ratios', 'If a : b = p : q and b : c = r : s, then a : b : c = pr : qr : qs', 'Make the common term equal by cross-multiplying, then read off the three-part ratio.', 'When two ratios share a middle quantity.', '2:3 and 4:5 → a:b:c = 2×4 : 3×4 : 3×5 = 8 : 12 : 15'],
    ['Compound and duplicate ratio', 'Compound of a:b and c:d = ac : bd.  Duplicate of a:b = a² : b²', 'Multiply the corresponding terms; square the terms for a duplicate ratio.', 'Questions that name "compound" or "duplicate" ratio explicitly.', 'Duplicate of 3 : 5 = 9 : 25'],
    ['Adding the same number to both terms', '(a + x)/(b + x) = c/d  →  solve the linear equation for x', 'Form the equation with the new ratio and cross-multiply.', 'Questions asking what must be added or subtracted from both terms.', '(7+x)/(11+x) = 3/4 → 28 + 4x = 33 + 3x → x = 5']
  ],
  narrative: [
    'Step one in every ratio question is to bring both quantities to the same unit. The ratio of 40 cm to 1.5 m is not 40 : 1.5. Convert 1.5 m to 150 cm and the ratio is 40 : 150 = 4 : 15.',
    'To compare ratios, write them as fractions and compare. 3 : 4 is 0.75 and 5 : 7 is about 0.714, so 3 : 4 is the larger ratio. When there are many ratios, use a common denominator or convert each to a decimal.',
    'When a total is shared in a ratio, add the ratio terms to get the number of parts. Divide the total by the number of parts to get the value of one part, then multiply. Working with "one part" is more reliable than memorising the share formula, and it extends to any number of parties.',
    'Sometimes the ratio is given for one situation and you are asked about another. For example, if incomes are in the ratio 5 : 4 and expenditures in the ratio 3 : 2, write the incomes as 5x and 4x and the expenditures as 3y and 2y, then use the extra information (such as equal savings) to relate x and y.'
  ],
  deep: [
    ['Ratio versus fraction', 'The ratio 2 : 3 does not mean "2/3 of the whole". It means the whole is 5 parts, of which the first holds 2/5 and the second holds 3/5. Mixing these up is the most common slip in sharing problems.'],
    ['Why the "common term" trick works', 'In a : b = 2 : 3 and b : c = 4 : 5 the value of b is written as 3 in one ratio and 4 in the other. Scale the first ratio by 4 and the second by 3 so that b becomes 12 in both. Then a : b : c = 8 : 12 : 15.']
  ],
  variations: [
    ['Simplifying and comparing', 'Reduce a ratio or decide which of two ratios is greater.', 'Which is greater, 3 : 4 or 5 : 7?'],
    ['Sharing in a ratio', 'Split money or objects between two or more people.', 'Divide ₹1,200 between A and B in the ratio 3 : 5.'],
    ['Finding a missing term', 'One quantity and the ratio are given; find the other.', 'x : y = 5 : 7 and x = 35. Find y.'],
    ['Combining ratios', 'Merge a : b and b : c into a three-part ratio.', 'a : b = 2 : 3 and b : c = 4 : 5. Find a : b : c.'],
    ['Change in ratio', 'Add or subtract the same number from both terms to reach a new ratio.', 'What must be added to both terms of 7 : 11 to make it 3 : 4?']
  ],
  examples: [
    {
      title: 'Convert units, then simplify',
      q: 'Find the ratio of 40 cm to 1.5 m in its simplest form.',
      given: ['First quantity = 40 cm', 'Second quantity = 1.5 m'],
      concept: 'Both quantities must have the same unit before forming a ratio.',
      steps: [
        ['Convert to the same unit', '1.5 m = 150 cm.', '1.5 × 100 = 150'],
        ['Write the ratio', 'The ratio is 40 : 150.'],
        ['Simplify', 'HCF(40, 150) = 10. Divide both terms by 10.', '40 ÷ 10 : 150 ÷ 10 = 4 : 15']
      ],
      ans: '4 : 15',
      why: 'A ratio compares like with like. Once the units match, the problem is just fraction simplification.',
      trap: 'Writing 40 : 1.5 and simplifying it to 80 : 3, which mixes centimetres with metres.'
    },
    {
      title: 'Combining two ratios',
      q: 'If A : B = 2 : 3 and B : C = 4 : 5, find A : B : C.',
      given: ['A : B = 2 : 3', 'B : C = 4 : 5'],
      concept: 'Make the common term B equal in both ratios.',
      steps: [
        ['Find the common multiple of B', 'B is 3 in the first ratio and 4 in the second. LCM(3, 4) = 12.'],
        ['Scale the first ratio', 'Multiply A : B = 2 : 3 by 4.', '2 × 4 : 3 × 4 = 8 : 12'],
        ['Scale the second ratio', 'Multiply B : C = 4 : 5 by 3.', '4 × 3 : 5 × 3 = 12 : 15'],
        ['Join the ratios', 'B is now 12 in both, so A : B : C = 8 : 12 : 15.']
      ],
      ans: '8 : 12 : 15',
      why: 'Scaling a ratio by a non-zero number does not change its value, so we are free to make B the same in both ratios.',
      trap: 'Writing 2 : 3 : 5 by simply attaching the 5, without matching B.'
    },
    {
      title: 'Equal savings with two ratios',
      q: 'The incomes of two persons are in the ratio 5 : 4 and their expenditures are in the ratio 3 : 2. If each saves ₹1,600, find the income of the first person.',
      given: ['Incomes = 5x and 4x', 'Expenditures = 3y and 2y', 'Each saves ₹1,600'],
      concept: 'Savings = Income − Expenditure. Two equations, two unknowns.',
      steps: [
        ['Write the savings equations', 'First: 5x − 3y = 1600. Second: 4x − 2y = 1600.'],
        ['Simplify the second equation', 'Divide by 2: 2x − y = 800, so y = 2x − 800.'],
        ['Substitute into the first', '5x − 3(2x − 800) = 1600, so 5x − 6x + 2400 = 1600.', '−x = −800, so x = 800'],
        ['Find the income', 'First income = 5x = 5 × 800 = ₹4,000. (Check: y = 800, expenditure = 2,400, savings = 1,600.)']
      ],
      ans: '₹4,000',
      why: 'Each ratio hides one unknown multiplier. Equal savings gives two equations to find both multipliers.',
      trap: 'Using the same multiplier for incomes and expenditures. The two ratios have different multipliers x and y.'
    }
  ],
  shortcut: {
    title: 'One-part method',
    trad: 'Write the shares as 3x and 5x, form the equation 3x + 5x = 1200, solve for x and then multiply.',
    fast: 'Add the ratio terms (3 + 5 = 8), divide the total by 8 to get one part (1200 ÷ 8 = 150), and multiply: 3 × 150 = 450 and 5 × 150 = 750.',
    rules: [
      'Number of parts = sum of the ratio terms. Check your answer by confirming the shares add up to the total.',
      'If a quantity is given for one party, divide it by that party\'s ratio term to get one part.',
      'To compare ratios quickly, cross-multiply: a : b > c : d when a × d > b × c.',
      'In MCQs, the total of the options for the shares must equal the given total, so most wrong options can be dropped without any working.'
    ]
  },
  mistakes: [
    ['Forming a ratio without matching units', 'The numbers look comparable so the units are ignored.', 'Convert both quantities to the smaller or more convenient unit first.'],
    ['Reversing the order of the terms', 'The question says "ratio of B to A" but the terms are written as A : B.', 'Underline the two quantities in order and write the ratio in exactly that order.'],
    ['Using the ratio terms as fractions of the whole', 'Reading 3 : 5 as 3/5 and 5/5 of the total.', 'Always divide by the sum of the terms (3 + 5 = 8), so the shares are 3/8 and 5/8.'],
    ['Adding the same number to a ratio instead of to each term', 'Treating the ratio as one number.', 'Write (a + x)/(b + x) and solve the equation. Adding x to both terms changes the ratio.']
  ],
  tips: {
    sec: 60,
    elim: 'For sharing questions, add the options for the two shares: only the option pair that adds up to the total can be right.',
    advice: 'Direct ratio and sharing questions are quick marks. Attempt them early, and leave multi-condition ratio problems until the end of the section.',
    insight: 'Companies often disguise ratio as ages, salaries or mixtures, so the ability to set up "parts" quickly is tested even when the word ratio never appears.'
  },
  revision: [
    'A ratio compares like quantities; convert units first and keep the order of the terms.',
    'Simplify by dividing both terms by their HCF.',
    'Sharing N in a : b gives N × a/(a+b) and N × b/(a+b).',
    'To get a : b : c from a : b and b : c, make the common term equal.',
    'Compound ratio multiplies corresponding terms; duplicate ratio squares them.'
  ],
  quickFormulas: ['Share = Total × (term ÷ sum of terms)', 'Compound of a:b and c:d = ac : bd', 'Duplicate of a:b = a² : b²', '(a + x)/(b + x) = c/d'],
  takeaways: [
    'Always compare like with like: same units, correct order.',
    'Think in "parts": total parts, value of one part, then multiply.',
    'Equal-term matching is the key to combining ratios.',
    'Verify by checking that the shares add up to the total.'
  ],
  selfCheck: [
    'Can I simplify 36 : 54 and 2.5 m : 75 cm?',
    'Can I divide ₹2,400 among three people in the ratio 2 : 3 : 7?',
    'Can I find A : B : C from A : B = 3 : 4 and B : C = 5 : 6?'
  ],
  sources: [
    ['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'The Ratio and Proportion topic area; the chapter was written independently with original examples.'],
    ['NCERT Mathematics, Class 6–8', 'Textbook', 'Ratio and proportion as introduced in the school curriculum.']
  ]
};

const quiz = [
  easy('Simplify the ratio 48 : 72.', '2 : 3', ['3 : 4', '4 : 5', '1 : 2'], 'HCF(48, 72) = 24. Dividing both terms by 24 gives 2 : 3.', 'Halve both terms repeatedly until no common factor remains: 48:72 → 24:36 → 12:18 → 6:9 → 2:3.'),
  easy('₹1,200 is divided between A and B in the ratio 3 : 5. How much does A get?', 450, [400, 480, 750], 'Total parts = 3 + 5 = 8. One part = 1200 ÷ 8 = 150. A gets 3 × 150 = ₹450.', 'A\'s share = 1200 × 3/8 = 450.'),
  easy('Find the ratio of 40 cm to 1.5 m.', '4 : 15', ['8 : 3', '4 : 3', '2 : 15'], 'Convert 1.5 m to 150 cm. The ratio is 40 : 150. Dividing by 10 gives 4 : 15.'),
  easy('What is the ratio of 2 hours to 40 minutes?', '3 : 1', ['2 : 1', '1 : 3', '5 : 2'], '2 hours = 120 minutes. The ratio is 120 : 40 = 3 : 1.'),
  easy('If x : y = 5 : 7 and x = 35, then y equals', 49, [42, 45, 56], 'x = 5 parts = 35, so one part = 7. y = 7 parts = 7 × 7 = 49.'),
  easy('Which ratio is greater, 3 : 4 or 5 : 7?', '3 : 4', ['5 : 7', 'They are equal', 'Cannot be compared'], 'Cross-multiply: 3 × 7 = 21 and 5 × 4 = 20. Since 21 > 20, 3/4 > 5/7. (Decimals: 0.75 versus about 0.714.)', 'Cross-multiply: the larger product sits beside the larger fraction\'s numerator.'),

  medium('If A : B = 2 : 3 and B : C = 4 : 5, then A : B : C is', '8 : 12 : 15', ['2 : 3 : 5', '8 : 12 : 5', '6 : 9 : 10'], 'LCM of B\'s values (3 and 4) is 12. Scale A : B = 2 : 3 by 4 to get 8 : 12, and B : C = 4 : 5 by 3 to get 12 : 15. So A : B : C = 8 : 12 : 15.'),
  medium('Two numbers are in the ratio 5 : 8 and their sum is 156. The larger number is', 96, [60, 78, 88], 'Parts = 5 + 8 = 13. One part = 156 ÷ 13 = 12. Larger = 8 × 12 = 96.'),
  medium('The ratio of income to expenditure of a family is 7 : 5. If the savings are ₹4,500, the income is', 15750, [10500, 22500, 12600], 'Income 7 parts, expenditure 5 parts, so savings = 2 parts = 4500. One part = 2250. Income = 7 × 2250 = ₹15,750.'),
  medium('In a school of 540 students the ratio of boys to girls is 4 : 5. The number of girls is', 300, [240, 270, 324], 'Parts = 9. One part = 540 ÷ 9 = 60. Girls = 5 × 60 = 300.'),
  medium('What number must be added to both terms of the ratio 7 : 11 to make it 3 : 4?', 5, [3, 4, 6], '(7 + x)/(11 + x) = 3/4. Cross-multiplying: 28 + 4x = 33 + 3x, so x = 5. Check: 12 : 16 = 3 : 4.'),
  medium('Three numbers are in the ratio 2 : 3 : 5 and the sum of their squares is 1368. The largest number is', 30, [20, 25, 36], 'Let the numbers be 2k, 3k, 5k. Then 4k² + 9k² + 25k² = 38k² = 1368, so k² = 36 and k = 6. The largest is 5 × 6 = 30.'),
  medium('A 60 kg alloy contains copper and zinc in the ratio 7 : 3. The weight of zinc is', 18, [12, 21, 42], 'Parts = 10. One part = 6 kg. Zinc = 3 × 6 = 18 kg.'),
  medium('The compound ratio of 2 : 3, 4 : 5 and 6 : 7 in the simplest form is', '16 : 35', ['48 : 105', '12 : 15', '8 : 15'], 'Multiply the first terms and the second terms: (2×4×6) : (3×5×7) = 48 : 105. HCF = 3, so the simplest form is 16 : 35.'),

  placement('The incomes of two persons are in the ratio 5 : 4 and their expenditures in the ratio 3 : 2. If each saves ₹1,600, the income of the first person is', 4000, [3200, 2400, 5000], 'Let incomes be 5x, 4x and expenditures 3y, 2y. Then 5x − 3y = 1600 and 4x − 2y = 1600. The second gives y = 2x − 800. Substituting: 5x − 6x + 2400 = 1600, so x = 800. First income = 5 × 800 = ₹4,000.'),
  placement('A purse holds ₹1, 50-paise and 25-paise coins in the ratio 5 : 6 : 8. If the total value is ₹210, how many 50-paise coins are there?', 126, [105, 84, 168], 'Let the counts be 5k, 6k, 8k. Value = 5k × 1 + 6k × 0.5 + 8k × 0.25 = 5k + 3k + 2k = 10k = 210, so k = 21. The 50-paise coins number 6 × 21 = 126.'),
  placement('A mixture of 80 litres has milk and water in the ratio 5 : 3. How much water must be added to make the ratio 5 : 4?', 10, [8, 12, 15], 'Milk = 50 L, water = 30 L. Milk stays 50. Need 50 : (30 + w) = 5 : 4, so 30 + w = 40 and w = 10 L.'),
  placement('If (a + b) : (b + c) : (c + a) = 6 : 7 : 8 and a + b + c = 21, then a equals', 7, [5, 6, 9], 'Adding the three pairs gives 2(a + b + c) = 42 = 21k, so k = 2. Then a + b = 12, b + c = 14, c + a = 16. Hence a = (a + b + c) − (b + c) = 21 − 14 = 7.'),
  placement('The ratio of two numbers is 3 : 4 and their LCM is 180. The smaller number is', 45, [36, 60, 15], 'Numbers are 3k and 4k. Since 3 and 4 are co-prime, LCM = 12k = 180, so k = 15. The smaller number is 3 × 15 = 45.', 'For numbers in ratio a : b with co-prime a and b, the LCM is a × b × k.'),
  placement('Two vessels contain milk and water in the ratios 3 : 2 and 4 : 1. If 20 litres are taken from each and mixed, the ratio of milk to water in the mixture is', '7 : 3', ['3 : 7', '5 : 3', '7 : 2'], 'First vessel (20 L): milk 12, water 8. Second vessel (20 L): milk 16, water 4. Total milk = 28, water = 12. Ratio = 28 : 12 = 7 : 3.')
];

build(chapter, quiz);
