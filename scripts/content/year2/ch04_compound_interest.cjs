const { easy, medium, placement, build } = require('../lib.cjs');
const r2 = x => Math.round(x * 100) / 100;

const chapter = {
  id: 'y2-quant-compound-interest', year: 2, category: 'Advanced Quantitative Aptitude', num: 4, difficulty: 'Intermediate',
  title: 'Compound Interest',
  tagline: 'Year 2 — Interest on interest, half-yearly compounding and the CI–SI difference',
  minutes: 50,
  overview: 'In compound interest (CI) the interest earned in each period is added to the principal, so the next period earns interest on the larger amount. The amount after n periods is A = P(1 + r/100)ⁿ and the compound interest is A − P. Compared with simple interest, CI grows faster because interest earns interest.',
  placement: 'Compound interest is commonly asked in company aptitude rounds, usually with two or three years and with the CI–SI difference shortcut or half-yearly compounding.',
  realWorld: 'Savings accounts, fixed deposits, loans with monthly instalments and the growth of an investment are all computed with compound interest.',
  objectives: [
    'Use A = P(1 + r/100)ⁿ for annual compounding',
    'Handle half-yearly and quarterly compounding',
    'Use the CI − SI shortcuts for 2 and 3 years',
    'Solve population growth and depreciation problems',
    'Find P, r or n from given amounts'
  ],
  prereq: ['Simple Interest Basics', 'Successive percentages', 'Basic Percentages'],
  refresher: 'Simple interest SI = PRT/100. A rise of r% multiplies by (1 + r/100) and a fall of r% multiplies by (1 − r/100).',
  defs: [
    'Compound interest: interest calculated on the principal plus the interest already earned.',
    'Amount: A = P(1 + r/100)ⁿ. Compound interest: CI = A − P.',
    'Compounding period: the time after which interest is added to the principal (year, half-year, quarter).',
    'For half-yearly compounding use rate r/2 per period and 2n periods. For quarterly use r/4 and 4n.',
    'Depreciation: decrease in value at a rate per year, A = P(1 − r/100)ⁿ.'
  ],
  intuition: 'Each year the amount is multiplied by the same factor (1 + r/100). So compound interest is a geometric growth, while simple interest is an arithmetic one. The difference between CI and SI for the first two years is the interest earned on the first year\'s interest: P(r/100)².',
  mental: 'Write the growth factor once and multiply: ₹1,000 at 10% for 2 years is 1000 × 1.1 × 1.1 = 1210. The CI is ₹210, compared with SI ₹200; the extra ₹10 is 10% of the first year\'s interest ₹100.',
  formulas: [
    ['Amount and CI', 'A = P(1 + r/100)ⁿ,  CI = A − P', 'n in years for annual compounding.', 'Any CI question.', '₹10,000 at 10% for 2 yrs → 12,100; CI = 2,100'],
    ['Half-yearly / quarterly', 'A = P(1 + (r/2)/100)²ⁿ  or  P(1 + (r/4)/100)⁴ⁿ', 'Halve the rate and double the periods.', 'Compounded half-yearly.', '₹8,000 at 10% for 1 yr half-yearly → 8000 × 1.05² = 8,820'],
    ['CI − SI for 2 years', 'CI − SI = P(r/100)²', 'The interest on the first year\'s interest.', 'Quick difference questions.', 'Difference 65 at 10% → P = 6,500'],
    ['CI − SI for 3 years', 'CI − SI = P(r/100)²(3 + r/100)', 'Extension of the previous rule.', 'Three-year difference.', 'P = 10,000, 10% → 10000 × 0.01 × 3.1 = 310'],
    ['Growth and depreciation', 'Growth: P(1 + r/100)ⁿ;  Depreciation: P(1 − r/100)ⁿ', 'Population and machine value.', 'Real-world rates.', 'Population 40,000 growing 10% twice → 48,400']
  ],
  narrative: [
    'Compute CI by finding the amount first. For ₹10,000 at 10% for 2 years the amount is 10,000 × 1.1 × 1.1 = ₹12,100, so CI = ₹2,100. Using the growth factor avoids computing interest year by year.',
    'For half-yearly compounding, the rate per period is half of the annual rate and the number of periods is doubled. ₹8,000 at 10% for one year compounded half-yearly is 8000 × (1.05)² = ₹8,820, which is more than annual compounding (₹8,800).',
    'The CI − SI shortcut for two years is P(r/100)². If the difference is ₹65 at 10%, then P × 0.01 = 65 and P = ₹6,500. For three years the difference is P(r/100)²(3 + r/100).',
    'If the rates differ by year, multiply the factors: 1.10 for the first year and 1.20 for the second give 1.32. Population growth and depreciation use the same idea with (1 + r/100) or (1 − r/100).',
    'To find the time, compute the factor needed: if money doubles at 10% compound, solve 1.1ⁿ = 2. For quick estimates, the "rule of 72" says it takes about 72 ÷ r years.'
  ],
  deep: [
    ['Rule of 72', 'The number of years for money to double at compound r% is approximately 72 ÷ r. At 8% it is about 9 years. This is an estimate, not exact.'],
    ['CI versus SI over many years', 'In year 1, CI and SI are equal. Afterwards CI grows faster. After 10 years at 10%, CI gives 1.1¹⁰ ≈ 2.59 times the principal while SI gives 2 times.']
  ],
  variations: [
    ['Annual compounding', 'Direct amount or CI.', '₹10,000 at 10% for 2 years'],
    ['Half-yearly or quarterly', 'Halve or quarter the rate.', '₹8,000 at 10% half-yearly'],
    ['CI − SI difference', 'Find P or r.', 'Difference ₹65 at 10% for 2 years'],
    ['Different rates by year', 'Multiply factors.', '10% then 20%'],
    ['Growth and depreciation', 'Population and machines.', '40,000 growing 10% yearly']
  ],
  examples: [
    {
      title: 'Compound interest for two years',
      q: 'Find the compound interest on ₹10,000 at 10% per annum for 2 years.',
      given: ['P = 10,000', 'r = 10%', 'n = 2'],
      concept: 'A = P(1 + r/100)ⁿ.',
      steps: [['Growth factor', '1 + 10/100 = 1.1.'], ['Amount', '10000 × 1.1² = 10000 × 1.21 = ₹12,100.'], ['CI', '12100 − 10000 = ₹2,100.']],
      ans: '₹2,100', why: 'Year 1 gives 1,000 and year 2 gives 1,100.', trap: 'Using simple interest ₹2,000.'
    },
    {
      title: 'Half-yearly compounding',
      q: 'Find the amount on ₹8,000 at 10% per annum for one year when interest is compounded half-yearly.',
      given: ['P = 8000', 'r = 10% p.a.', 'n = 1 year → 2 half-years'],
      concept: 'Rate per half-year = r/2 = 5%.',
      steps: [['Rate and periods', '5% per half-year, 2 periods.'], ['Amount', '8000 × 1.05² = 8000 × 1.1025.'], ['Compute', '= ₹8,820.']],
      ans: '₹8,820', why: 'The second half-year earns interest on the first half-year\'s interest.', trap: 'Using 10% for each half-year.'
    },
    {
      title: 'CI − SI difference',
      q: 'The difference between the compound and simple interest on a sum for 2 years at 10% per annum is ₹65. Find the sum.',
      given: ['Difference = 65', 'r = 10%', 'n = 2'],
      concept: 'CI − SI = P(r/100)².',
      steps: [['Write the formula', '65 = P × (10/100)² = P × 0.01.'], ['Solve', 'P = 65 ÷ 0.01 = ₹6,500.']],
      ans: '₹6,500', why: 'The difference is the interest on the first year\'s interest.', trap: 'Using r = 0.1 without squaring.'
    }
  ],
  shortcut: {
    title: 'Growth factor chain',
    trad: 'Compute interest year by year and add to the principal.',
    fast: 'Multiply by 1.r once per period. Use P(r/100)² for the 2-year CI−SI difference. For half-yearly, halve the rate and double the periods.',
    rules: ['Compute A first, then CI = A − P.', 'Half-yearly: r/2 and 2n.', 'CI − SI (2 yrs) = P(r/100)².', 'Compound growth and depreciation use factors.']
  },
  mistakes: [
    ['Reporting the amount as CI', 'Forgetting to subtract P.', 'CI = A − P.'],
    ['Not halving the rate for half-yearly', 'Using r with 2n periods.', 'Rate r/2 for each half-year.'],
    ['Adding percentages for two years', 'Treating 10% + 10% as 20%.', 'Multiply 1.1 × 1.1.'],
    ['Wrong CI−SI formula', 'Forgetting to square r/100.', 'Use P(r/100)² for 2 years.']
  ],
  tips: { sec: 75, elim: 'Estimate: CI for 2 years is slightly more than SI; options below SI can be eliminated.', advice: 'Memorise squares of 1.05, 1.1, 1.2, and cubes of 1.1 to speed up.', insight: 'The CI−SI shortcut is a favourite for quick questions.' },
  revision: ['A = P(1 + r/100)ⁿ.', 'CI = A − P.', 'Half-yearly: r/2, 2n.', 'CI−SI (2 yrs) = P(r/100)².', 'Depreciation uses (1 − r/100)ⁿ.'],
  quickFormulas: ['A = P(1+r/100)ⁿ', 'D₂ = P(r/100)²'],
  takeaways: ['Use factors.', 'Match the rate to the period.', 'Subtract P for CI.', 'Know the difference shortcut.'],
  selfCheck: ['Can I compute CI for 2 years without a calculator?', 'Can I do half-yearly compounding?', 'Can I find P from the CI−SI difference?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Compound Interest topic area; examples are original.']]
};

const quiz = [
  easy('The compound interest on ₹10,000 at 10% per annum for 2 years is', 10000 * 1.21 - 10000, [2000, 2200, 2500], 'Amount = 10000 × 1.1² = 12,100. CI = 12,100 − 10,000 = 2,100.'),
  easy('The amount on ₹5,000 at 20% per annum compounded annually for 2 years is', 5000 * 1.44, [7000, 7400, 7500], 'Amount = 5000 × 1.2² = 5000 × 1.44 = 7,200.'),
  easy('The compound interest on ₹2,000 at 5% per annum for 2 years is', r2(2000 * 1.05 ** 2 - 2000), [200, 210, 215], 'Amount = 2000 × 1.1025 = 2,205. CI = 205.'),
  easy('The amount on ₹8,000 at 10% per annum for one year compounded half-yearly is', 8000 * 1.05 ** 2, [8800, 8400, 8840], 'Rate 5% per half-year, 2 periods: 8000 × 1.1025 = 8,820.'),
  easy('A sum doubles in 5 years at simple interest. The rate per annum is', '20%', ['10%', '15%', '25%'], 'SI = P over 5 years, so rate = 100/5 = 20%.'),
  easy('The population of a town is 40,000 and increases by 10% every year. After 2 years it will be', 40000 * 1.21, [48000, 46000, 50000], '40000 × 1.1² = 40000 × 1.21 = 48,400.'),

  medium('The difference between the compound and simple interest on a sum for 2 years at 10% per annum is ₹65. The sum is', 6500, [5500, 6000, 7000], 'CI − SI = P(r/100)² = P × 0.01 = 65, so P = 6,500.'),
  medium('The CI − SI difference on ₹10,000 for 3 years at 10% per annum is', r2(10000 * 0.01 * 3.1), [300, 320, 331], 'Difference = P(r/100)²(3 + r/100) = 10000 × 0.01 × 3.1 = 310.'),
  medium('The compound interest on ₹8,000 for 1 year at 10% per annum compounded half-yearly is', 820, [800, 840, 880], 'Amount = 8,820. CI = 8,820 − 8,000 = 820.'),
  medium('A sum becomes ₹3,630 in 2 years at 10% compound interest per annum. The sum is', 3000, [2800, 3200, 3300], 'P = 3630 ÷ 1.21 = 3,000.'),
  medium('The value of a machine costing ₹50,000 depreciates 10% per annum. After 2 years its value is', 50000 * 0.81, [40000, 42500, 45000], '50000 × 0.9² = 50000 × 0.81 = 40,500.'),
  medium('At what rate of compound interest will a sum become 4 times itself in 2 years?', '100%', ['50%', '75%', '200%'], '(1 + r/100)² = 4 gives 1 + r/100 = 2, so r = 100%.'),
  medium('A sum of ₹4,000 is lent for 2 years at 10% for the first year and 20% for the second year compounded. The amount is', 4000 * 1.1 * 1.2, [5200, 5000, 5400], '4000 × 1.1 × 1.2 = 4000 × 1.32 = 5,280.'),
  medium('The compound interest on a sum for 2 years at 5% per annum is ₹512.50. The simple interest on the same sum is', 500, [490, 512.5, 520], 'CI = P(1.1025 − 1) = 0.1025P = 512.5, so P = 5000. SI = 5000 × 5 × 2/100 = 500.'),

  placement('At compound interest, a sum triples in 3 years. In how many years will it become 9 times itself?', 6, [4.5, 9, 12], 'Each 3 years multiplies by 3. 9 = 3 × 3, so 6 years.'),
  placement('A sum of ₹12,000 is lent at 10% p.a. compounded half-yearly for 1.5 years. The amount is', r2(12000 * 1.05 ** 3), [13800, 13900, 14000], 'Rate 5% per half-year, 3 periods: 12000 × 1.157625 = 13,891.50.'),
  placement('The CI − SI difference on a sum for 2 years at 8% per annum is ₹32. The sum is', 5000, [4000, 4500, 6000], 'P(0.08)² = 32 gives P = 32 ÷ 0.0064 = 5,000.'),
  placement('A man invests ₹6,000 at 20% compounded annually. After how many whole years will the amount first exceed ₹10,000?', 3, [2, 4, 5], '6000 × 1.2² = 8,640; 6000 × 1.2³ = 10,368, which exceeds 10,000. So 3 years.'),
  placement('A sum of ₹15,625 amounts to ₹17,576 in 3 years at compound interest. The rate per annum is', '4%', ['3%', '5%', '6%'], '(1 + r/100)³ = 17576/15625 = 1.1249 = (1.04)³ (since 26³ = 17576 and 25³ = 15625, ratio 26/25). So r = 4%.'),
  placement('A principal becomes ₹1,331 in 3 years and ₹1,210 in 2 years at annual compound interest. The rate is', '10%', ['8%', '11%', '12%'], 'Rate = (1331 − 1210)/1210 × 100 = 121/1210 × 100 = 10%.')
];
build(chapter, quiz);
