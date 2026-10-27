const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-work-wages', year: 2, category: 'Advanced Quantitative Aptitude', num: 9, difficulty: 'Intermediate',
  title: 'Work and Wages',
  tagline: 'Year 2 — Dividing payment in proportion to the work done',
  minutes: 40,
  morePractice: 'https://www.indiabix.com/aptitude/time-and-work/',
  overview: 'When several workers complete a job together and are paid a total amount, each worker\'s fair share is proportional to the work they did. Work done is the product of rate and time, so the wage ratio is the ratio of (work done), not of the days worked unless the workers are equally efficient. This chapter builds on time-and-work rates to share money.',
  placement: 'Work and wages problems are commonly asked in company aptitude rounds, usually as a short extension of a time-and-work problem.',
  realWorld: 'Paying contract labour, sharing a freelance fee among a team, and costing a project by man-days all use these ideas.',
  objectives: [
    'Divide wages in the ratio of the work done',
    'Find work done from rate and time',
    'Find a wage per man-day',
    'Handle workers who leave or join mid-job',
    'Handle overtime and different daily rates'
  ],
  prereq: ['Time and Work', 'Advanced Ratio and Proportion'],
  refresher: 'Work done = rate × time. Workers who finish a job together share the pay in the ratio of the fractions of the job each did.',
  defs: [
    'Wages: payment for work, usually proportional to work done.',
    'Wage ratio: ratio of the shares of the total payment.',
    'Man-day: one worker working for one day; the cost of a job = man-days × wage per man-day.',
    'Efficiency: work per day; ratio of efficiencies = inverse ratio of times.',
    'Overtime: extra hours paid at a higher rate.'
  ],
  intuition: 'Payment follows the work. If two workers work for the same time, the faster one has done more and earns more. If two workers have the same speed, the one who worked more days earns more. So the wage ratio is the ratio of (rate × time).',
  mental: 'First find each worker\'s fraction of the job. Then the share of wages equals that fraction of the total pay. Fractions add up to 1 when the job is complete.',
  formulas: [
    ['Wage ratio', 'Wages ∝ rate × time worked', 'Work done decides the share.', 'All sharing questions.', 'A 3 days, B 2 days at the same rate → 3 : 2'],
    ['Equal time, different speeds', 'Wage ratio = ratio of rates = inverse ratio of days alone', 'Faster worker earns more.', 'Workers finishing a job together.', 'A 12 days, B 18 days → 18 : 12 = 3 : 2'],
    ['Cost of a job', 'Cost = men × days × daily wage', 'Man-day approach.', 'Contract costing.', '25 men, 12 days, ₹9,000 → ₹30 per man-day'],
    ['Late leaver', 'Add the work done together to the work done alone', 'Compute each fraction.', 'Worker leaves early.', 'A leaves after 3 days → A : B = 1 : 4'],
    ['Overtime', 'Pay = normal hours × rate + extra hours × overtime rate', 'Overtime is paid at a multiple.', 'Hourly workers.', '8 × 60 + 3 × 90 = 750']
  ],
  narrative: [
    'Find the fraction of the job done by each worker. If A takes 12 days and B takes 18 days and they work together for the whole job, A does 18/(12 + 18) = 3/5... more simply, the ratio of their rates is 1/12 : 1/18 = 3 : 2, so A gets 3/5 of the wages.',
    'When both work for the same time, the wage ratio equals the ratio of their efficiencies. If three workers take 10, 15 and 30 days alone, their rates are 3 : 2 : 1 (on a base of 30 units). A ₹3,000 job is split ₹1,500, ₹1,000 and ₹500.',
    'If a worker leaves midway, compute the work in two phases. A (15 days) and B (20 days) work 3 days together, then A leaves and B finishes. A does 3/15 = 1/5. B does 3/20 together and then the remaining 13/20, a total of 4/5. So A : B = 1 : 4.',
    'To cost a job by man-days, find the wage per man-day. If 25 men working 12 days cost ₹9,000, then the cost per man-day is 9000 ÷ 300 = ₹30.',
    'Overtime: for 11 hours a day, a worker paid ₹60 per hour for 8 hours and 1.5 times for the extra hours earns 8 × 60 + 3 × 90 = ₹750 per day.'
  ],
  deep: [
    ['Why not just days?', 'Two workers can work the same number of days but at different speeds. Sharing by days alone is correct only when speeds are equal.'],
    ['Third helper', 'If A and B take 6 and 8 days and the three together take 3 days, then C\'s rate is 1/3 − 1/6 − 1/8 = 1/24, so wages are in the ratio 4 : 3 : 1.']
  ],
  variations: [
    ['Same rate, different days', 'Ratio of days.', 'A 3 days, B 2 days'],
    ['Different speeds, same job', 'Ratio of rates.', 'A 12 days, B 18 days'],
    ['One leaves early', 'Phases of work.', 'A leaves after 3 days'],
    ['Man-day costing', 'Wage per man-day.', '25 men × 12 days'],
    ['Overtime', 'Higher rate for extra hours.', '11 hours a day']
  ],
  examples: [
    {
      title: 'Different speeds',
      q: 'A can do a work in 12 days and B in 18 days. They finish a job together and are paid ₹6,000. How much does A receive?',
      given: ['A: 12 days', 'B: 18 days', 'Pay ₹6,000'],
      concept: 'Share in the ratio of rates.',
      steps: [['Rates', 'A = 1/12 = 3/36, B = 1/18 = 2/36.'], ['Ratio', 'A : B = 3 : 2.'], ['A\'s share', '6000 × 3/5 = ₹3,600.']],
      ans: '₹3,600', why: 'They worked the same number of days, so the faster worker did more.', trap: 'Dividing equally.'
    },
    {
      title: 'One worker leaves early',
      q: 'A can do a work in 15 days and B in 20 days. They work together for 3 days, then A leaves and B finishes the work. The total pay is ₹3,500. Find A\'s share.',
      given: ['A: 15 days', 'B: 20 days', 'A works 3 days'],
      concept: 'Work in two phases.',
      steps: [['A\'s work', '3/15 = 1/5.'], ['Remaining after 3 days', '1 − (1/5 + 3/20) = 13/20, done by B.'], ['B\'s total', '3/20 + 13/20 = 4/5. A : B = 1 : 4.'], ['A\'s share', '3500 × 1/5 = ₹700.']],
      ans: '₹700', why: 'A did one-fifth of the whole job.', trap: 'Sharing by days: 3 : 20.'
    },
    {
      title: 'Man-day cost',
      q: '25 men working for 12 days are paid ₹9,000 in all. What is the cost for 20 men working for 15 days at the same rate?',
      given: ['25 × 12 man-days → ₹9,000'],
      concept: 'Cost per man-day.',
      steps: [['Man-days', '25 × 12 = 300. Cost per man-day = 9000 ÷ 300 = ₹30.'], ['New man-days', '20 × 15 = 300.'], ['Cost', '300 × 30 = ₹9,000.']],
      ans: '₹9,000', why: 'The man-days are the same.', trap: 'Thinking more days costs more.'
    }
  ],
  shortcut: {
    title: 'Rate ratio first',
    trad: 'Compute the work of each worker in full fractions.',
    fast: 'Convert days to units per day using the LCM, multiply by days worked and share the pay in that ratio.',
    rules: ['Wage ∝ work done.', 'Same days → ratio of rates.', 'Same rate → ratio of days.', 'Fractions of work add to 1.']
  },
  mistakes: [
    ['Sharing equally', 'Ignoring speed differences.', 'Use rates.'],
    ['Using days only', 'Forgetting that speeds differ.', 'Use rate × time.'],
    ['Mixing the order', 'Giving the larger share to the slower worker.', 'The faster worker earns more.'],
    ['Wrong fractions for leavers', 'Ignoring the second phase.', 'Add both phases.']
  ],
  tips: { sec: 60, elim: 'The faster worker must have the larger share; the shares must add to the total.', advice: 'Write units per day in a small table.', insight: 'Contract-costing questions are common in applied aptitude tests.' },
  revision: ['Wage ∝ work.', 'Rate ratio for equal time.', 'Man-day cost.', 'Phases for leavers.', 'Overtime.'],
  quickFormulas: ['Wage ratio = rate × time', 'Cost = men × days × wage'],
  takeaways: ['Pay follows work.', 'Faster earns more.', 'Use phases for changes.', 'Check the total.'],
  selfCheck: ['Can I split pay for workers with different speeds?', 'Can I split pay when one leaves early?', 'Can I cost a job by man-days?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Time and Work topic area; examples are original.']]
};

const quiz = [
  easy('A works for 3 days and B for 2 days at the same rate. They are paid ₹1,000 together. A\'s share is', 600, [500, 400, 750], 'Ratio 3 : 2. A = 1000 × 3/5 = 600.'),
  easy('A can do a job in 10 days and B in 15 days. They finish it together and are paid ₹3,000. A\'s share is', 1800, [1500, 1200, 2000], 'Rates 1/10 : 1/15 = 3 : 2. A = 3000 × 3/5 = 1800.'),
  easy('A worker earns ₹250 a day. For 12 days of work he earns', 3000, [2500, 2800, 3200], '250 × 12 = 3000.'),
  easy('The wages of A and B are in the ratio 3 : 5. If A earns ₹1,500, the total wages are', 4000, [3000, 4500, 5000], 'One part = 500. Total = 8 × 500 = 4000.'),
  easy('A and B complete a job for ₹6,000. A did 2/3 of the work. B\'s share is', 2000, [3000, 1500, 4000], 'B did 1/3, so B = 6000 × 1/3 = 2000.'),
  easy('4 men working 6 days are paid ₹7,200 in all. The wage per man-day is', 300, [250, 350, 1800], 'Man-days = 24. 7200 ÷ 24 = 300.'),

  medium('A can do a work in 12 days and B in 18 days. They finish it together for ₹6,000. A\'s share is', 3600, [3000, 2400, 4000], 'Rates 3 : 2. A = 6000 × 3/5 = 3600.'),
  medium('A, B and C can do a job in 10, 15 and 30 days alone. They finish together for ₹3,000. C\'s share is', 500, [1000, 300, 600], 'Rates 3 : 2 : 1 (base 30). C = 3000 × 1/6 = 500.'),
  medium('A and B can do a work in 20 and 30 days. They work together to complete it and are paid ₹5,000. A\'s share is', 3000, [2500, 2000, 3500], 'Rates 3 : 2. A = 5000 × 3/5 = 3000.'),
  medium('A and B together finish a job in 8 days for ₹4,800. A alone would take 12 days. A\'s share is', 3200, [2400, 2800, 3600], 'A\'s rate = 1/12, B\'s = 1/8 − 1/12 = 1/24. Ratio 2 : 1. A = 4800 × 2/3 = 3200.'),
  medium('6 men and 4 women work for 5 days. A man earns ₹500 a day and a woman ₹300. The total wages are', 21000, [15000, 20000, 22500], 'Per day = 3000 + 1200 = 4200. For 5 days = 21,000.'),
  medium('A is paid 25% more per day than B. A works 8 days and B works 10 days, and together they are paid ₹5,400. A\'s total pay is', 2700, [2400, 3000, 2160], 'Let B = x per day, A = 1.25x. 8 × 1.25x + 10x = 20x = 5400, so x = 270. A gets 8 × 337.5 = 2700.'),
  medium('A can do a work in 15 days and B in 20 days. They work together for 3 days, then A leaves and B finishes. If the total pay is ₹3,500, A\'s share is', 700, [525, 1167, 875], 'A did 1/5 of the work; B did 4/5. A = 3500 × 1/5 = 700.'),
  medium('25 men working for 12 days are paid ₹9,000 in all. The wage per man per day is', 30, [25, 36, 40], 'Man-days = 300. 9000 ÷ 300 = 30.'),

  placement('A, B and C can do a work in 24, 30 and 40 days. They finish it together for ₹7,200. C\'s share is', 1800, [1200, 1500, 2400], 'Base 120: rates 5, 4, 3. Ratio 5 : 4 : 3. C = 7200 × 3/12 = 1800.'),
  placement('A (10 days) and B (15 days) work together for 2 days, then A leaves and B finishes. The total pay is ₹4,500. A\'s share is', 900, [1500, 750, 1200], 'In 2 days together: A does 1/5. B does 2/15 + (1 − 1/3) = 4/5. Ratio 1 : 4. A = 4500 × 1/5 = 900.'),
  placement('A worker is paid ₹60 per hour for 8 hours and 1.5 times that rate for overtime. For 5 days of 11 hours each, he earns', 3750, [3300, 3600, 4125], 'Per day = 8 × 60 + 3 × 90 = 750. For 5 days = 3,750.'),
  placement('A can do a job in 6 days and B in 8 days. With C\'s help it is done in 3 days, for a total of ₹2,400. C\'s share is', 300, [200, 400, 600], '1/3 − 1/6 − 1/8 = 1/24 is C\'s rate. Ratio 4 : 3 : 1. C = 2400 × 1/8 = 300.'),
  placement('A and B can do a work in 12 days. A alone can do it in 20 days. They are paid ₹3,000 for completing it together. B\'s share is', 1200, [1000, 1500, 1800], 'B\'s rate = 1/12 − 1/20 = 1/30. Ratio A : B = 3 : 2. B = 3000 × 2/5 = 1200.'),
  placement('A works 6 days at an efficiency of 4 units a day and B works 8 days at 3 units a day. The total pay is ₹4,500. A\'s share is', 2250, [1800, 2000, 2700], 'A = 24 units and B = 24 units. They share equally: 2250 each.')
];
build(chapter, quiz);
