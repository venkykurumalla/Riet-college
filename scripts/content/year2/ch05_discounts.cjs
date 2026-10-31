const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-discounts', year: 2, category: 'Advanced Quantitative Aptitude', num: 5, difficulty: 'Intermediate',
  title: 'Discounts and Marked Price',
  tagline: 'Year 2 — Marked price, discount, successive discounts and mark-up',
  minutes: 45,
  overview: 'Shops print a marked price (MP) on goods and then offer a discount, so the selling price (SP) is lower than the marked price. The discount is always a percentage of the marked price, while profit and loss are percentages of the cost price. This chapter combines the two ideas: how much should an item be marked so that after a discount the shopkeeper still earns the target profit?',
  placement: 'Discount and marked price questions are commonly asked in company aptitude rounds, often as a mark-up followed by one or two successive discounts.',
  realWorld: 'Festival sales, "buy 2 get 1 free" offers and coupon discounts are all discount calculations.',
  objectives: [
    'Compute selling price, marked price and discount from each other',
    'Combine mark-up and discount to find the profit or loss',
    'Use successive discounts and the single equivalent discount',
    'Interpret "buy x get y free" offers as discounts',
    'Find the mark-up needed for a target profit'
  ],
  prereq: ['Profit and Loss Basics', 'Basic Percentages'],
  refresher: 'SP = MP × (1 − d/100); SP = CP × (1 ± p/100). A multiplier of 0.8 stands for a 20% discount.',
  defs: [
    'Marked price (list price): the price printed on the article.',
    'Discount: the reduction given on the marked price. Discount % = (MP − SP) ÷ MP × 100.',
    'Successive discounts: discounts given one after another, each on the reduced price.',
    'Mark-up: the percentage added to the cost price to fix the marked price.',
    'Single equivalent discount: one discount that has the same effect as two or more successive discounts.'
  ],
  intuition: 'Discount works on the marked price; profit works on the cost price. Chains of mark-up and discount are chains of multipliers, so the final price is CP × (mark-up multiplier) × (discount multiplier).',
  mental: 'Set CP = 100. A 40% mark-up gives MP 140. A 20% discount gives SP 112. Profit 12%. This "assume 100" method works for any percentage chain.',
  formulas: [
    ['Selling price after discount', 'SP = MP × (100 − d)/100', 'Discount is on the marked price.', 'Direct discount questions.', 'MP 1000, 20% → 800'],
    ['Single equivalent of two discounts', 'D = a + b − ab/100', 'Or multiply the factors.', 'Successive discounts.', '20% and 10% → 28%'],
    ['Mark-up then discount', 'SP = CP × (1 + m/100) × (1 − d/100)', 'Profit % = multiplier − 1.', 'Retail pricing.', '1.4 × 0.8 = 1.12 → 12% profit'],
    ['Mark-up for a target profit', 'MP = CP × (1 + p/100) ÷ (1 − d/100)', 'Reverse the multipliers.', 'Fixing the marked price.', 'CP 900, profit 20%, discount 10% → MP 1200'],
    ['Buy x get y free', 'Discount % = y ÷ (x + y) × 100', 'The free items are the discount.', 'Offer questions.', 'Buy 2 get 1 free → 33.3%']
  ],
  narrative: [
    'To compute the selling price, multiply the marked price by (1 − d/100). If an article marked ₹1,000 is sold at 20% discount the SP is ₹800. To go backwards, divide: SP ₹720 after 10% discount means MP = 720 ÷ 0.9 = ₹800.',
    'Mark-up and discount combine as a chain of multipliers. A shopkeeper who marks goods 40% above cost and gives a 20% discount sells at 1.4 × 0.8 = 1.12 times the cost, which is a 12% profit.',
    'Successive discounts are not additive. 20% followed by 10% is 0.8 × 0.9 = 0.72, a single discount of 28%, not 30%. The order does not matter for the final price.',
    'To fix the marked price for a target profit, work backwards. For 20% profit with a 10% discount on CP ₹900: MP × 0.9 = 900 × 1.2, so MP = ₹1,200.',
    'Offers like "buy 2 get 1 free" give 1 free item for every 3 taken, which is a discount of 1/3 = 33.3%.'
  ],
  deep: [
    ['Discount is not profit', 'A 20% discount can still leave a profit if the mark-up was high enough. Always compare the final SP with the cost price, not with the marked price.'],
    ['Order of discounts', 'Multiplication is commutative: 0.9 × 0.8 = 0.8 × 0.9. The single equivalent is the same whichever discount is applied first.']
  ],
  variations: [
    ['Direct discount', 'SP, MP or d%.', 'MP 1000, 20% discount'],
    ['Mark-up and discount', 'Profit %.', '40% mark-up, 20% discount'],
    ['Successive discounts', 'Single equivalent.', '20% and 10%'],
    ['Target profit', 'Find the MP.', 'Profit 20%, discount 10%'],
    ['Free items', 'Buy x get y free.', 'Buy 2 get 1 free']
  ],
  examples: [
    {
      title: 'Mark-up and discount',
      q: 'A shopkeeper marks goods 40% above the cost price and gives a 20% discount. Find his profit percentage.',
      given: ['Mark-up 40%', 'Discount 20%'],
      concept: 'Chain of multipliers.',
      steps: [['Assume CP = 100', 'MP = 140.'], ['Apply the discount', 'SP = 140 × 0.8 = 112.'], ['Profit', '112 − 100 = 12, so 12%.']],
      ans: '12% profit', why: 'The discount is on MP, not CP.', trap: 'Subtracting 40 − 20 = 20%.'
    },
    {
      title: 'Single equivalent discount',
      q: 'Two successive discounts of 10% and 5% are given on ₹2,000. Find the final price and the single equivalent discount.',
      given: ['Price ₹2,000', 'Discounts 10% and 5%'],
      concept: 'Multiply the factors.',
      steps: [['After 10%', '2000 × 0.9 = 1800.'], ['After 5%', '1800 × 0.95 = 1710.'], ['Single discount', '(2000 − 1710)/2000 = 14.5%.']],
      ans: '₹1,710; 14.5%', why: 'The second discount is on the reduced price.', trap: 'Adding the discounts to get 15%.'
    },
    {
      title: 'Find the marked price',
      q: 'A dealer buys an article for ₹900. He wants a profit of 20% after allowing a 10% discount. At what price should he mark it?',
      given: ['CP 900', 'Profit 20%', 'Discount 10%'],
      concept: 'MP × (1 − d) = CP × (1 + p).',
      steps: [['Required SP', '900 × 1.2 = ₹1,080.'], ['MP from SP', '1080 ÷ 0.9 = ₹1,200.']],
      ans: '₹1,200', why: 'SP = 0.9 MP.', trap: 'Adding 20% and 10% to get 30% mark-up.'
    }
  ],
  shortcut: {
    title: 'Assume cost price 100',
    trad: 'Work in rupees with the given numbers throughout.',
    fast: 'Set CP = 100 (or MP = 100), apply each percentage as a multiplier and read the answer as a percentage.',
    rules: ['Discount on MP, profit on CP.', 'Successive discounts multiply.', 'Buy x get y free → y/(x+y).', 'To find MP, divide SP by (1 − d).']
  },
  mistakes: [
    ['Applying discount on cost price', 'Mixing the bases.', 'Discount is always on MP.'],
    ['Adding successive discounts', 'Using 20 + 10 = 30.', 'Multiply 0.8 × 0.9.'],
    ['Confusing mark-up with profit', 'Taking mark-up as profit.', 'Compare SP with CP.'],
    ['Wrong free-offer base', 'Using y/x instead of y/(x + y).', 'The free items are part of the total.']
  ],
  tips: { sec: 70, elim: 'Profit after mark-up and discount must be (mark-up multiplier × discount multiplier) − 1; test this on options.', advice: 'Use the assume-100 method for percentage chain questions.', insight: 'This chapter prepares you for successive percentage questions.' },
  revision: ['SP = MP × (1 − d).', 'Chain of multipliers.', 'D = a + b − ab/100.', 'MP = target SP ÷ (1 − d).', 'Buy x get y free: y/(x+y).'],
  quickFormulas: ['SP = MP(1−d)', 'D = a + b − ab/100'],
  takeaways: ['Know the base.', 'Multiply multipliers.', 'Work backwards by dividing.', 'Compare with cost price.'],
  selfCheck: ['Can I find profit after mark-up and discount?', 'Can I find the single equivalent of two discounts?', 'Can I fix the marked price for a target profit?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Profit and Loss topic area; examples are original.']]
};

const quiz = [
  easy('An article marked at ₹1,000 is sold at a 20% discount. The selling price is', 800, [750, 820, 900], 'SP = 1000 × 0.8 = 800.'),
  easy('After a 10% discount an article is sold for ₹720. Its marked price is', 800, [792, 780, 750], 'MP = 720 ÷ 0.9 = 800.'),
  easy('An article marked ₹500 is sold for ₹450. The discount percentage is', '10%', ['5%', '9%', '12%'], 'Discount = 50 on 500, so 10%.'),
  easy('The cost price of an article is ₹400 and it is marked 25% above cost. The marked price is', 500, [450, 480, 525], 'MP = 400 × 1.25 = 500.'),
  easy('The discount on an article marked ₹1,200 at 15% is', 180, [150, 160, 200], '15% of 1200 = 180.'),
  easy('An article marked ₹250 is sold after a discount of ₹40. The selling price is', 210, [200, 215, 220], 'SP = 250 − 40 = 210.'),

  medium('Two successive discounts of 20% and 10% are equivalent to a single discount of', '28%', ['30%', '25%', '29%'], '1 − 0.8 × 0.9 = 1 − 0.72 = 28%.'),
  medium('A shopkeeper marks goods 40% above cost and gives a 20% discount. His profit percentage is', '12%', ['20%', '10%', '15%'], 'Take CP = 100: MP = 140, SP = 112. Profit = 12%.'),
  medium('A shopkeeper marks goods 25% above cost. What discount allows him a profit of 10%?', '12%', ['10%', '15%', '14%'], 'Take CP = 100: MP = 125 and SP = 110. Discount = 15/125 = 12%.'),
  medium('Two successive discounts of 10% and 5% on ₹2,000 give a final price of', 1710, [1700, 1720, 1800], '2000 × 0.9 × 0.95 = 1,710.'),
  medium('"Buy 2 get 1 free" is equal to a discount of', '33.33%', ['50%', '25%', '20%'], 'You pay for 2 and receive 3, so the discount is 1/3 = 33.33%.'),
  medium('An article with cost ₹600 is marked ₹800 and sold at a 10% discount. The profit percentage is', '20%', ['15%', '25%', '30%'], 'SP = 800 × 0.9 = 720. Profit = 120/600 = 20%.'),
  medium('After a 15% discount a bag is sold for ₹1,700. The marked price is', 2000, [1955, 1900, 2005], 'MP = 1700 ÷ 0.85 = 2000.'),
  medium('A trader allows a 10% discount on the marked price and still earns 20% profit. If the cost price is ₹900, the marked price is', 1200, [1080, 1100, 1250], 'SP = 900 × 1.2 = 1080. MP = 1080 ÷ 0.9 = 1200.'),

  placement('A shopkeeper marks an article 30% above cost and gives a 20% discount. His profit percentage is', '4%', ['10%', '6%', '2%'], 'Take CP = 100: MP = 130, SP = 104. Profit = 4%.'),
  placement('Two successive discounts of 10% and 5% are given on an article marked ₹4,000. The single equivalent discount percentage is', '14.5%', ['15%', '14%', '15.5%'], '0.9 × 0.95 = 0.855, so the discount is 14.5%.'),
  placement('Two successive discounts of 20% and 25% on ₹1,000 give a final price of', 600, [550, 650, 700], '1000 × 0.8 × 0.75 = 600. The single discount is 40%.'),
  placement('A shopkeeper gives successive discounts of 10% and x% on an article marked ₹5,000, and the final price is ₹3,600. The value of x is', 20, [15, 25, 10], '5000 × 0.9 × (1 − x/100) = 3600 gives 1 − x/100 = 0.8, so x = 20.'),
  placement('By what percentage above cost must an article be marked so that a 25% discount still gives a 20% profit?', '60%', ['50%', '45%', '65%'], 'Take CP = 100: SP = 120, MP = 120 ÷ 0.75 = 160. Mark-up = 60%.'),
  placement('An article costing ₹2,000 is marked 50% above cost and sold at a 30% discount. The profit in rupees is', 100, [60, 150, 200], 'MP = 3000. SP = 2100. Profit = 100.')
];
build(chapter, quiz);
