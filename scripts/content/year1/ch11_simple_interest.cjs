const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-quant-basic-simple-interest', year: 1, category: 'Quantitative Foundation', num: 11,
  title: 'Simple Interest Basics',
  tagline: 'Year 1 Foundation — Principal, rate, time, amount and the SI formula',
  minutes: 45,
  overview: 'Interest is the price paid for using someone else\'s money. When you deposit money in a bank, the bank pays you interest; when you take a loan, you pay interest. In simple interest the interest is calculated only on the original sum (the principal) for every period, so it grows by the same amount each year. Four quantities are linked: principal P, rate R per cent per year, time T in years, and simple interest SI.',
  placement: 'Simple interest is commonly asked in company aptitude rounds, usually as a one-step formula question or a two-condition problem such as "the sum doubles in 8 years". It is also the stepping stone to compound interest in Year 2.',
  realWorld: 'A bank fixed deposit that pays a flat rate on the original deposit, an education loan with monthly flat interest, and a post-office saving scheme are everyday uses of simple interest.',
  objectives: [
    'Use SI = P × R × T / 100 to find any one of the four quantities',
    'Find the amount A = P + SI and work backwards from the amount',
    'Convert months and days into years correctly',
    'Solve "sum doubles or triples" and "same sum at two rates" problems',
    'Split a sum between two rates and handle borrowing-and-lending gains'
  ],
  prereq: ['Basic Percentages', 'Fractions and decimals'],
  refresher: 'R% per year means R rupees for every 100 rupees per year. Converting time: 6 months = 6/12 = 0.5 year, 73 days ≈ 73/365 = 0.2 year.',
  defs: [
    'Principal (P): the original sum of money lent or borrowed.',
    'Rate (R): the interest paid on every ₹100 for one year, written R% per annum (p.a.).',
    'Time (T): the period for which the money is lent, expressed in years.',
    'Simple interest (SI): the interest calculated on the principal alone, SI = P × R × T / 100.',
    'Amount (A): the total money to be paid back or received, A = P + SI.'
  ],
  intuition: 'In simple interest the same amount of interest is earned every year. If ₹1,000 earns ₹80 in the first year, it earns ₹80 in the second year and again in the third. The interest therefore grows in a straight line with time, like a taxi meter running at a fixed rate.',
  mental: 'To find SI, ask "how much on ₹100 in one year?" That is R. Then scale by P/100 for the principal and by T for the years. For ₹5,000 at 8% for 3 years: 5000/100 = 50 hundreds, each earning 8 × 3 = 24, so SI = 50 × 24 = ₹1,200.',
  formulas: [
    ['Simple interest', 'SI = (P × R × T) / 100', 'The master formula linking all four quantities.', 'Any direct SI question.', '₹5,000, 8%, 3 years → 5000×8×3/100 = ₹1,200'],
    ['Amount', 'A = P + SI = P (1 + RT/100)', 'Total amount at the end of the period.', 'When the question gives or asks for the final amount.', '₹2,000 at 5% for 2 years → 2000 × 1.1 = ₹2,200'],
    ['Rearranged forms', 'P = 100·SI/(R·T),  R = 100·SI/(P·T),  T = 100·SI/(P·R)', 'Solve for whichever quantity is missing.', 'When SI and two other quantities are known.', 'SI 600 on ₹2000 in 3 years → R = 100×600/(2000×3) = 10%'],
    ['Doubling and tripling', 'If a sum becomes n times itself in T years, R = 100(n − 1)/T', 'Since SI = (n − 1)P.', '"Sum doubles in 8 years" questions.', 'Doubles in 8 years → R = 100×1/8 = 12.5%'],
    ['Time in months and days', 'T = months/12 or days/365', 'The rate is always per year.', 'Short-term loans.', '8 months → T = 2/3 year']
  ],
  narrative: [
    'Identify the three known quantities from P, R, T and SI (or A), and plug them into the one formula. The most common source of error is not the formula but the unit of time. Convert to years before substituting.',
    'When the amount is given instead of the interest, subtract the principal. If an amount of ₹7,500 after 2 years and ₹8,250 after 3 years is given, the difference ₹750 is the interest of exactly one year, so the principal is 7500 − 2 × 750 = ₹6,000 and the rate is 750/6000 = 12.5%.',
    'For "a sum becomes n times itself" use SI = (n − 1) × P. Doubling means the interest equals the principal. If doubling takes 8 years, the interest for one year is P/8, so R = 12.5% p.a. Tripling in the same rate takes twice as long, 16 years, because tripling needs interest of 2P.',
    'In borrowing-and-lending problems, the gain or loss is the difference of the two interest amounts, which is P × (difference of rates) × T / 100.'
  ],
  deep: [
    ['SI is linear in every variable', 'Doubling the principal, the rate or the time doubles the interest. This lets you scale a known answer instead of recomputing from scratch. If ₹1,000 gives ₹120 interest, then ₹3,000 for the same period at the same rate gives ₹360.'],
    ['Why simple interest is only a first model', 'Real accounts usually add interest to the principal each period, called compound interest. Simple interest is the special case where the interest is not reinvested, and it is the right model for flat-rate loans.']
  ],
  variations: [
    ['Direct SI', 'Find SI from P, R, T.', '₹5,000 at 8% for 3 years.'],
    ['Find P, R or T', 'SI and two quantities are known.', 'SI ₹600 on ₹2,000 in 3 years. Find the rate.'],
    ['Doubling or tripling', 'The sum grows n times in a given time.', 'A sum doubles in 8 years.'],
    ['Two amounts known', 'Amount after two different times.', '₹7,500 after 2 years, ₹8,250 after 3 years.'],
    ['Splitting a sum', 'A total is lent at two different rates.', '₹7,000 lent partly at 6% and partly at 4%.']
  ],
  examples: [
    {
      title: 'Direct simple interest',
      q: 'Find the simple interest on ₹5,000 at 8% per annum for 3 years, and the amount.',
      given: ['P = ₹5,000', 'R = 8% p.a.', 'T = 3 years'],
      concept: 'SI = P × R × T / 100 and A = P + SI.',
      steps: [
        ['Substitute in the formula', 'SI = 5000 × 8 × 3 / 100.', '5000 × 8 × 3 / 100'],
        ['Simplify', '5000/100 = 50, and 50 × 8 × 3 = 1200. So SI = ₹1,200.'],
        ['Find the amount', 'A = 5000 + 1200 = ₹6,200.']
      ],
      ans: 'SI = ₹1,200 and amount = ₹6,200',
      why: 'Every year earns 8% of ₹5,000 = ₹400, and three years earn ₹1,200.',
      trap: 'Giving the amount when the question asks only for the interest, or the reverse.'
    },
    {
      title: 'Principal and rate from two amounts',
      q: 'A sum of money amounts to ₹7,500 in 2 years and ₹8,250 in 3 years at simple interest. Find the sum and the rate.',
      given: ['A after 2 years = ₹7,500', 'A after 3 years = ₹8,250'],
      concept: 'The increase between consecutive years equals one year\'s simple interest.',
      steps: [
        ['One year\'s interest', '8250 − 7500 = ₹750.'],
        ['Find the principal', 'Interest for 2 years = 1500, so P = 7500 − 1500 = ₹6,000.'],
        ['Find the rate', 'R = 750/6000 × 100 = 12.5% per annum.', '750/6000 × 100 = 12.5']
      ],
      ans: 'Sum = ₹6,000, rate = 12.5% p.a.',
      why: 'Simple interest is the same every year, so the difference of the two amounts is one year\'s interest.',
      trap: 'Using 7,500 as the principal.'
    },
    {
      title: 'Splitting a sum between two rates',
      q: '₹7,000 is lent partly at 6% and the rest at 4% per annum. The total yearly interest is ₹360. Find the part lent at 6%.',
      given: ['Total = ₹7,000', 'Rates 6% and 4%', 'Yearly interest = ₹360'],
      concept: 'Interest from the 6% part + interest from the 4% part = ₹360.',
      steps: [
        ['Let the 6% part be x', 'Then the 4% part is 7000 − x.'],
        ['Write the equation', '6x/100 + 4(7000 − x)/100 = 360.', '6x + 28000 − 4x = 36000'],
        ['Solve', '2x = 8000, so x = 4000.', 'x = 4000']
      ],
      ans: '₹4,000 at 6% (and ₹3,000 at 4%)',
      why: 'Check: 6% of 4000 = 240 and 4% of 3000 = 120, which total ₹360.',
      trap: 'Using the same rate for both parts.'
    }
  ],
  shortcut: {
    title: 'Hundreds method',
    trad: 'Multiply P × R × T into a large number and then divide by 100.',
    fast: 'Divide P by 100 first to count the hundreds, then multiply by R × T. ₹5,000 at 8% for 3 years: 50 hundreds × 24 = ₹1,200.',
    rules: [
      'Cancel the 100 against P before multiplying.',
      'A sum that becomes n times in T years has R = 100(n − 1)/T.',
      'For months, write T as a fraction, e.g. 8 months = 2/3 year.',
      'The gap between amounts of two consecutive years is one year\'s interest.'
    ]
  },
  mistakes: [
    ['Using months as years', 'Plugging 6 (months) into the formula.', 'Always convert: 6 months = 0.5 year.'],
    ['Confusing SI with amount', 'Stopping at the interest when the amount was asked.', 'Re-read the last line of the question before writing the final answer.'],
    ['Using the amount as the principal', 'Substituting A in place of P.', 'Subtract the interest first or use the difference of amounts.'],
    ['Forgetting the divide by 100', 'Treating R as a decimal when it is a percentage.', 'Always keep the /100 in the formula.']
  ],
  tips: {
    sec: 60,
    elim: 'Estimate the interest as principal × rate (%) × years / 100. Options far from this estimate can be dropped immediately.',
    advice: 'SI is one of the quickest topics. Direct SI and doubling questions should be solved in under a minute.',
    insight: 'Companies mix SI with ratio, for instance by lending two parts at different rates, so practise the equation set-up as well.'
  },
  revision: [
    'SI = PRT/100 and A = P + SI.',
    'Convert time to years before substituting.',
    'Doubling in T years means R = 100/T.',
    'Difference of consecutive-year amounts = one year\'s SI.',
    'Gain on borrow-and-lend = P × (rate difference) × T / 100.'
  ],
  quickFormulas: ['SI = PRT/100', 'A = P(1 + RT/100)', 'R = 100(n − 1)/T for n-fold growth'],
  takeaways: [
    'There are only four quantities; know any three to find the fourth.',
    'Time must be in years.',
    'Simple interest is the same every year.',
    'Read whether SI or amount is wanted.'
  ],
  selfCheck: [
    'Can I find the rate if a sum triples in 20 years?',
    'Can I find the interest on ₹8,000 at 7.5% for 8 months?',
    'Can I find the principal given two amounts at different times?'
  ],
  sources: [
    ['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'The Simple Interest topic area; examples in this chapter are original.'],
    ['NCERT Mathematics, Class 7–8 (Simple Interest)', 'Textbook', 'Simple interest as taught in school.']
  ]
};

const quiz = [
  easy('The simple interest on ₹5,000 at 8% per annum for 3 years is', 1200, [1000, 1400, 1600], 'SI = 5000 × 8 × 3 / 100 = ₹1,200.'),
  easy('The amount on ₹2,000 at 5% per annum simple interest for 2 years is', 2200, [2100, 2205, 2400], 'SI = 2000 × 5 × 2 / 100 = ₹200. Amount = 2000 + 200 = ₹2,200.'),
  easy('The principal that earns ₹900 as simple interest in 3 years at 6% per annum is', 5000, [4500, 5400, 6000], 'P = 100 × SI /(R × T) = 100 × 900 /(6 × 3) = ₹5,000.'),
  easy('At what rate per annum will ₹2,000 earn ₹600 simple interest in 3 years?', '10%', ['8%', '12%', '15%'], 'R = 100 × 600 /(2000 × 3) = 10% per annum.'),
  easy('In how many years will ₹4,000 earn ₹960 simple interest at 8% per annum?', 3, [2, 4, 5], 'T = 100 × 960 /(4000 × 8) = 3 years.'),
  easy('The simple interest on ₹1,200 at 10% per annum for 6 months is', 60, [6, 120, 600], '6 months = 0.5 year. SI = 1200 × 10 × 0.5 / 100 = ₹60.'),

  medium('At simple interest, a sum of money doubles itself in 8 years. The rate of interest per annum is', '12.5%', ['10%', '8%', '12%'], 'Doubling means SI = P. So P = P × R × 8 / 100, giving R = 100/8 = 12.5%.'),
  medium('A sum amounts to ₹7,500 in 2 years and ₹8,250 in 3 years at simple interest. The sum is', 6000, [5000, 6500, 7000], 'One year\'s interest = 8250 − 7500 = ₹750. Interest for 2 years = ₹1,500. Principal = 7500 − 1500 = ₹6,000.'),
  medium('A sum of money triples itself in 20 years at simple interest. The rate per annum is', '10%', ['5%', '15%', '20%'], 'Tripling means SI = 2P. 2P = P × R × 20 / 100, so R = 200/20 = 10%.'),
  medium('₹2,550 is divided into two parts so that the simple interest on one part at 6% for 3 years equals that on the other at 8% for 2 years. The larger part is', 1350, [1200, 1250, 1400], 'Let the parts be x and y. 6 × 3 × x = 8 × 2 × y, so 18x = 16y and x : y = 8 : 9. Total parts = 17, one part = 150. Larger part = 9 × 150 = ₹1,350.'),
  medium('The simple interest on ₹8,000 at 7.5% per annum for 8 months is', 400, [450, 480, 600], '8 months = 2/3 year. SI = 8000 × 7.5 × (2/3) / 100 = ₹400.'),
  medium('At 12% per annum, a sum earns ₹1,080 simple interest in 9 months. The sum is', 12000, [10000, 11000, 13500], '9 months = 0.75 year. P = 100 × 1080 /(12 × 0.75) = 108000/9 = ₹12,000.'),
  medium('A man borrows ₹6,000 at 5% per annum and lends it at 7% per annum for 3 years. His gain is', 360, [300, 420, 630], 'Gain = 6000 × (7 − 5) × 3 / 100 = ₹360.'),
  medium('The extra interest earned on ₹5,000 for 2 years at 10% instead of 8% per annum is', 200, [100, 250, 300], 'Extra = 5000 × (10 − 8) × 2 / 100 = ₹200.'),

  placement('A sum of money at simple interest amounts to ₹1,200 in 2 years and ₹1,350 in 3.5 years. The sum is', 1000, [900, 1050, 1100], 'Interest for 1.5 years = 150, so yearly interest = ₹100. Principal = 1200 − 2 × 100 = ₹1,000.'),
  placement('In how many years will ₹1,000 amount to ₹1,300 at 5% per annum simple interest?', 6, [5, 5.5, 8], 'SI = ₹300. T = 100 × 300 /(1000 × 5) = 6 years.'),
  placement('₹5,000 is lent at 4% and ₹3,000 at 6%, both for 5 years. The total interest is', 1900, [1500, 1800, 2000], 'First: 5000 × 4 × 5/100 = ₹1,000. Second: 3000 × 6 × 5/100 = ₹900. Total = ₹1,900.'),
  placement('The simple interest on a sum is 9/25 of the principal and the number of years equals the rate per cent. The rate is', '6%', ['5%', '9%', '12%'], 'SI = P × R × R /100 = 9P/25, so R² = 900/25 = 36 and R = 6%.'),
  placement('A sum of money triples itself in 12 years at simple interest. In how many years will it become 5 times itself?', 24, [20, 30, 36], 'Tripling needs interest 2P in 12 years, so 6 years earn P. Five times needs interest 4P, which takes 4 × 6 = 24 years.', 'Each extra "P" of interest takes the same time.'),
  placement('₹7,000 is lent partly at 6% and the rest at 4% per annum. The total yearly interest is ₹360. The part lent at 6% is', 4000, [3000, 3500, 5000], 'Let the 6% part be x. 6x/100 + 4(7000 − x)/100 = 360 gives 2x + 28000 = 36000, so x = ₹4,000.')
];

build(chapter, quiz);
