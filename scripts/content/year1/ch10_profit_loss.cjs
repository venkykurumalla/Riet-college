const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-quant-basic-profit-loss', year: 1, category: 'Quantitative Foundation', num: 10,
  title: 'Profit and Loss Basics',
  tagline: 'Year 1 Foundation — Cost price, selling price, profit and loss percentage, discount',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/profit-and-loss/',
  overview: 'Profit and loss describe what happens in a sale. The price at which an item is bought is the cost price (CP) and the price at which it is sold is the selling price (SP). If SP is greater than CP the seller makes a profit; if SP is less, there is a loss. Profit and loss percentages are always calculated on the cost price, and discount percentages on the marked price.',
  placement: 'Profit and loss is commonly asked in company aptitude rounds, either on its own or combined with percentage, ratio and discount ideas. The same percentage reasoning is needed for interest and data interpretation.',
  realWorld: 'A shop buys a shirt for ₹400, marks it at ₹600, offers a discount and finally sells it for ₹540. The shop\'s profit, the discount given and the percentage gain are all profit-and-loss questions.',
  objectives: [
    'Compute profit, loss and their percentages on the cost price',
    'Find CP or SP when the percentage and the other price are given',
    'Handle marked price and discount, including a mark-up followed by a discount',
    'Solve "articles bought and sold" questions',
    'Deal with false weights and two-item overall gain or loss'
  ],
  prereq: ['Basic Percentages', 'Basic Ratio'],
  refresher: 'X% of a number N is N × X/100. An increase of X% multiplies by (100 + X)/100 and a decrease of X% multiplies by (100 − X)/100.',
  defs: [
    'Cost price (CP): the price at which an article is bought. Selling price (SP): the price at which it is sold.',
    'Profit = SP − CP (when SP > CP). Loss = CP − SP (when CP > SP).',
    'Profit % = (Profit ÷ CP) × 100. Loss % = (Loss ÷ CP) × 100. Both are on the cost price.',
    'Marked price (MP) or list price: the price printed or tagged on the article. Discount = MP − SP, and Discount % = (Discount ÷ MP) × 100.',
    'Overhead or additional cost: expenses such as transport and repairs, which are added to the cost price.'
  ],
  intuition: 'The cleanest way to handle profit and loss is with multipliers. A 20% profit means SP = 1.2 × CP, a 15% loss means SP = 0.85 × CP, and a 10% discount means SP = 0.9 × MP. Once you know the multiplier, every unknown is found by one multiplication or division.',
  mental: 'Think of CP as 100 units. Profit of 25% makes SP 125 units. Loss of 10% makes SP 90 units. If the real SP is ₹450 and it stands for 90 units, one unit is ₹5 and the CP is ₹500.',
  formulas: [
    ['Profit and loss percentage', 'Profit % = (SP − CP)/CP × 100,  Loss % = (CP − SP)/CP × 100', 'Percentages are always on the cost price.', 'Any question that asks for the percentage gain or loss.', 'CP 400, SP 460 → 60/400 × 100 = 15%'],
    ['SP from CP', 'SP = CP × (100 + P)/100 for profit P%;  SP = CP × (100 − L)/100 for loss L%', 'The multiplier method.', 'Finding the selling price for a target profit.', '20% profit on ₹350 → 350 × 1.2 = ₹420'],
    ['CP from SP', 'CP = SP × 100/(100 + P) for profit;  CP = SP × 100/(100 − L) for loss', 'Reverse of the previous formula.', 'When SP and the percentage are known.', 'Sold at 15% loss for ₹1700 → CP = 1700 × 100/85 = ₹2000'],
    ['Discount', 'SP = MP × (100 − d)/100;  Discount = MP − SP', 'Discount is on the marked price.', 'Shop and sale problems.', 'MP 800, 15% off → 800 × 0.85 = ₹680'],
    ['Same price, one gain one loss', 'Loss % = (x/10)² %', 'If two articles are sold at the same SP, one at x% profit and the other at x% loss, there is always an overall loss of (x/10)² %.', 'Two-article questions with equal selling prices.', '20% gain and 20% loss → (20/10)² = 4% loss']
  ],
  narrative: [
    'Start every problem by writing down which price you know and which you are asked for. Then decide which multiplier connects them. If the question gives SP and a profit percentage, divide by the multiplier to get CP.',
    'A mark-up followed by a discount is best handled by multiplying the two multipliers. A shopkeeper who marks goods 20% above cost and allows a 10% discount sells at 1.2 × 0.9 = 1.08 times the cost, which is an 8% profit. Note that you must not add or subtract the percentages directly.',
    'Questions of the form "CP of 12 articles equals SP of 10 articles" are solved by assuming a convenient number. Let the CP of each article be 1 so that the CP of 12 is 12. Then the SP of 10 articles is 12, and the SP of one article is 1.2, a 20% profit.',
    'In false-weight questions the seller uses a smaller weight than claimed but charges the full price. The gain is (error ÷ true weight given) × 100. A shopkeeper who gives 900 g for 1 kg gains 100/900 × 100 = 11 1/9 %.'
  ],
  deep: [
    ['Why profit is on cost price', 'The cost price is the money the seller put in, so the return on that investment is the profit divided by the cost. Using the selling price as the base gives a different number, called the margin on sales, which is not what aptitude questions ask for unless stated.'],
    ['Why equal gain and loss on equal SP always loses', 'If two articles are sold at the same price, one at a gain of x% and one at a loss of x%, the article sold at a gain had the lower cost price. The loss is on a larger base than the gain, so the net result is a loss of (x/10)²%.']
  ],
  variations: [
    ['Direct percentage', 'Find profit or loss percentage from CP and SP.', 'CP ₹400, SP ₹460.'],
    ['Find CP or SP', 'Percentage and one price given.', 'Sold at 15% loss for ₹1700. Find CP.'],
    ['Mark-up and discount', 'Marked price above cost, then a discount.', 'Marked 25% above cost, 20% discount.'],
    ['Articles bought and sold', 'CP of some articles equals SP of others.', 'CP of 12 articles equals SP of 10 articles.'],
    ['False weights and two items', 'Cheating weights or two sales with the same SP.', 'Uses 900 g instead of 1 kg.']
  ],
  examples: [
    {
      title: 'Profit percentage',
      q: 'A trader buys an article for ₹400 and sells it for ₹460. Find his profit percentage.',
      given: ['CP = ₹400', 'SP = ₹460'],
      concept: 'Profit % = (Profit ÷ CP) × 100.',
      steps: [
        ['Find the profit', '460 − 400 = ₹60.'],
        ['Divide by CP', '60 ÷ 400 = 0.15.'],
        ['Convert to a percentage', '0.15 × 100 = 15%.', '60/400 × 100 = 15']
      ],
      ans: '15% profit',
      why: 'The profit is measured against the money invested, the cost price.',
      trap: 'Dividing the profit by the selling price (60/460).'
    },
    {
      title: 'Mark-up followed by discount',
      q: 'A shopkeeper marks an article 20% above its cost price of ₹500 and then allows a 10% discount. Find the selling price and the profit percentage.',
      given: ['CP = ₹500', 'Mark-up = 20%', 'Discount = 10%'],
      concept: 'Marked price = CP × 1.2 and SP = MP × 0.9.',
      steps: [
        ['Marked price', '500 × 1.2 = ₹600.'],
        ['Selling price after discount', '600 × 0.9 = ₹540.'],
        ['Profit and percentage', 'Profit = 540 − 500 = ₹40. Profit % = 40/500 × 100 = 8%.', '40/500 × 100 = 8']
      ],
      ans: 'SP = ₹540, profit = 8%',
      why: 'The discount is on the marked price, not the cost price, so the two percentages do not cancel.',
      trap: 'Thinking the net result is 20% − 10% = 10% profit.'
    },
    {
      title: 'Two items sold at the same price',
      q: 'A man sells two articles at ₹1,000 each. On one he gains 20% and on the other he loses 20%. Find his overall gain or loss percentage.',
      given: ['SP of each = ₹1000', 'Gain 20% on one, loss 20% on the other'],
      concept: 'CP = SP × 100/(100 ± percentage).',
      steps: [
        ['CP of the first (gain)', '1000 × 100/120 = ₹833.33.'],
        ['CP of the second (loss)', '1000 × 100/80 = ₹1250.'],
        ['Total CP and SP', 'Total CP = 833.33 + 1250 = ₹2083.33. Total SP = ₹2000.'],
        ['Loss percentage', 'Loss = 83.33. Loss % = 83.33/2083.33 × 100 = 4%.', '(20/10)² = 4']
      ],
      ans: '4% loss',
      why: 'The article sold at a loss had the higher cost, so the loss amount outweighs the gain amount.',
      trap: 'Concluding "no profit no loss" because the percentages look equal and opposite.'
    }
  ],
  shortcut: {
    title: 'Multiplier method',
    trad: 'Compute profit in rupees, then divide by CP and multiply by 100 at every step.',
    fast: 'Write each percentage as a multiplier (1.2, 0.85, 0.9) and multiply. Mark-up 25% then discount 20% is 1.25 × 0.8 = 1.00, so there is neither profit nor loss.',
    rules: [
      'Profit P% → multiplier (100 + P)/100. Loss L% → multiplier (100 − L)/100.',
      'Successive changes multiply; never add the percentages.',
      'Two items at the same SP with x% gain and x% loss → loss of (x/10)²%.',
      'For "CP of m articles = SP of n articles", assume CP of each article is 1 and compare.'
    ]
  },
  mistakes: [
    ['Calculating percentage on the selling price', 'The selling price is the most visible number.', 'Remember: profit % and loss % are on the cost price; discount % is on the marked price.'],
    ['Adding a mark-up and a discount', 'Treating +20% and −10% as +10%.', 'Multiply the multipliers: 1.2 × 0.9 = 1.08.'],
    ['Reversing the formula for CP', 'Multiplying SP by 1.2 instead of dividing when profit is 20%.', 'To go from SP back to CP, divide by the multiplier.'],
    ['Forgetting overhead costs', 'Treating the purchase price as the whole cost.', 'Add transport, repair and other expenses to the CP before computing profit.']
  ],
  tips: {
    sec: 75,
    elim: 'Check direction: if the question is a profit, SP must exceed CP; if the option you get for CP is larger than the SP in a profit question, you divided the wrong way.',
    advice: 'Profit and loss questions are usually quick once the multiplier is written. Attempt direct and mark-up-discount questions early.',
    insight: 'Mark-up, discount and successive percentage ideas reappear in Year 2, so a firm grasp now is a strong base.'
  },
  revision: [
    'Profit and loss % are on CP; discount % is on MP.',
    'SP = CP × multiplier; CP = SP ÷ multiplier.',
    'Successive percentages multiply, they do not add.',
    'Equal SP with x% gain and x% loss gives a loss of (x/10)²%.',
    'False weight gain % = error ÷ weight given × 100.'
  ],
  quickFormulas: ['Profit% = (SP − CP)/CP × 100', 'SP = CP × (100 ± %)/100', 'Loss % on equal SP = (x/10)²%'],
  takeaways: [
    'Convert percentages into multipliers.',
    'Know which price each percentage is based on.',
    'Never add a mark-up and a discount.',
    'Test the answer: profit means SP > CP.'
  ],
  selfCheck: [
    'Can I find the CP of an item sold at a 15% loss for ₹1700?',
    'Can I find the net result of a 25% mark-up followed by a 20% discount?',
    'Can I explain why selling two items at the same price with equal gain and loss percentages leads to a loss?'
  ],
  sources: [
    ['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'The Profit and Loss topic area; examples in this chapter are original.'],
    ['NCERT Mathematics, Class 8 (Comparing Quantities)', 'Textbook', 'Profit, loss and discount as taught in school.']
  ]
};

const quiz = [
  easy('A trader buys an article for ₹400 and sells it for ₹460. His profit percentage is', '15%', ['12%', '13.04%', '60%'], 'Profit = 460 − 400 = ₹60. Profit % = 60 ÷ 400 × 100 = 15%.'),
  easy('An article bought for ₹250 is sold for ₹200. The loss percentage is', '20%', ['25%', '15%', '50%'], 'Loss = ₹50. Loss % = 50 ÷ 250 × 100 = 20%.'),
  easy('The selling price of an article that cost ₹350, sold at a profit of 20%, is', 420, [370, 400, 450], 'SP = 350 × 120/100 = ₹420.'),
  easy('By selling an article for ₹500 a man gains 25%. The cost price is', 400, [375, 425, 450], 'CP = SP × 100/125 = 500 × 0.8 = ₹400.'),
  easy('An article sold at a loss of 10% for ₹450 had a cost price of', 500, [405, 495, 550], 'CP = 450 × 100/90 = ₹500.'),
  easy('A man buys 80 oranges for ₹640 and sells them for ₹720. His profit percentage is', '12.5%', ['10%', '11.11%', '15%'], 'Profit = 720 − 640 = ₹80. Profit % = 80 ÷ 640 × 100 = 12.5%.'),

  medium('A watch sold at a loss of 15% fetched ₹1,700. Its cost price was', 2000, [1955, 1900, 2125], 'CP = 1700 × 100/85 = ₹2000.'),
  medium('If the cost price of 12 articles equals the selling price of 10 articles, the profit percentage is', '20%', ['16.67%', '10%', '25%'], 'Let CP of each article be 1. Then SP of 10 articles = 12, so SP of one = 1.2. Profit = 20%.'),
  medium('A man sells two articles at ₹1,000 each, gaining 20% on one and losing 20% on the other. His overall result is', '4% loss', ['No profit, no loss', '4% gain', '2% loss'], 'Loss % = (20/10)² = 4%. Check: CP = 833.33 + 1250 = 2083.33 against SP 2000.'),
  medium('The marked price of a shirt is ₹800. After a 15% discount the selling price is', 680, [650, 685, 720], 'SP = 800 × 85/100 = ₹680.'),
  medium('A shopkeeper marks goods 20% above the cost price and allows a 10% discount. His profit percentage is', '8%', ['10%', '12%', '7%'], 'Take CP = 100. MP = 120. SP = 120 × 0.9 = 108. Profit = 8%.'),
  medium('A shopkeeper marks goods 25% above the cost price and allows a 20% discount. His result is', 'No profit, no loss', ['5% profit', '5% loss', '10% profit'], 'Multiplier = 1.25 × 0.80 = 1.00, so SP = CP.'),
  medium('An article is sold at a loss of 10% for ₹540. To gain 20%, it should be sold for', 720, [648, 700, 756], 'CP = 540 × 100/90 = ₹600. SP for 20% profit = 600 × 1.2 = ₹720.'),
  medium('By selling an article for ₹1,260 a man gains 5%. To gain 20% he should sell it for', 1440, [1400, 1512, 1500], 'CP = 1260 × 100/105 = ₹1200. SP for 20% gain = 1200 × 1.2 = ₹1440.'),

  placement('A shopkeeper uses a weight of 900 g for 1 kg but sells at the cost price per kilogram. His gain percentage is', '11 1/9 %', ['10%', '9 1/11 %', '12 1/2 %'], 'He gives 900 g and charges for 1000 g. Gain % = (100/900) × 100 = 11 1/9 %.', 'Gain % = error ÷ weight actually given × 100.'),
  placement('By selling 15 pens for ₹600 a trader gains 25%. The cost price of one pen is', 32, [30, 40, 48], 'Total CP = 600 × 100/125 = ₹480. CP of one pen = 480 ÷ 15 = ₹32.'),
  placement('A sells an article to B at a profit of 20%, and B sells it to C at a profit of 25%. If C pays ₹1,500, the cost price for A is', 1000, [900, 1125, 1200], 'Multiplier = 1.2 × 1.25 = 1.5. CP for A = 1500 ÷ 1.5 = ₹1000.'),
  placement('Two successive discounts of 10% and 20% on a marked price of ₹1,000 are equivalent to a single discount of', '28%', ['30%', '25%', '32%'], 'Multiplier = 0.9 × 0.8 = 0.72. SP = ₹720, so the discount is 28%.', 'Single discount = a + b − ab/100 = 10 + 20 − 2 = 28.'),
  placement('If an article is sold at a loss of 8%, but sold for ₹150 more the profit would have been 7%. The cost price is', 1000, [750, 900, 1500], 'The difference between a 7% profit and an 8% loss is 15% of the CP. So 15% of CP = ₹150 and CP = ₹1000.'),
  placement('By selling 33 metres of cloth, a man gains the selling price of 11 metres. His gain percentage is', '50%', ['33.33%', '25%', '60%'], 'Gain = SP of 11 m. So SP of 33 m − CP of 33 m = SP of 11 m, giving CP of 33 m = SP of 22 m. Let SP per metre be 1; then CP of 33 m = 22. Gain = 11 on 22, which is 50%.')
];

build(chapter, quiz);
