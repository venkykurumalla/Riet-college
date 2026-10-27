const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y2-quant-time-work', year: 2, category: 'Advanced Quantitative Aptitude', num: 8, difficulty: 'Intermediate',
  title: 'Time and Work',
  tagline: 'Year 2 — Rates of work, working together, leaving early and alternate days',
  minutes: 50,
  morePractice: 'https://www.indiabix.com/aptitude/time-and-work/',
  overview: 'Time and work problems ask how long a job takes when one or more workers do it alone or together. The central idea is the rate of work: a worker who completes a job in n days does 1/n of the job per day. Rates of workers who work together add. Everything else, including leaving early, joining late and alternate days, is bookkeeping on these rates.',
  placement: 'Time and work questions are commonly asked in company aptitude rounds and are a regular intermediate-level item, often with two or three workers and one twist.',
  realWorld: 'Estimating the time to finish a project with several people, or how long a team needs after some members leave, uses the same idea.',
  objectives: [
    'Convert days into work rates and add them',
    'Solve problems with two or three workers working together',
    'Solve leave-early and join-late problems',
    'Use man-days for men, hours-per-day problems',
    'Solve alternate-day and efficiency-ratio problems'
  ],
  prereq: ['Basic Proportion', 'Advanced Ratio and Proportion', 'Fractions and Decimals'],
  refresher: 'If a worker does a job in n days, the rate is 1/n job per day. In t days they do t/n of the job.',
  defs: [
    'Rate of work: the fraction of the job done per unit time (1/n per day).',
    'Combined rate: the sum of individual rates when workers work together.',
    'Man-days: number of men × number of days; a measure of the total work.',
    'Efficiency: how fast a worker works; ratio of efficiencies is the inverse of the ratio of times.',
    'Alternate-day work: workers take turns, each day a different worker works.'
  ],
  intuition: 'Think of the job as 1. If A needs 10 days and B needs 15 days, A does 1/10 and B 1/15 each day. Together they do 1/10 + 1/15 = 1/6 per day, so the job takes 6 days. A faster worker has a bigger rate and a shorter time.',
  mental: 'To avoid fractions, pick a convenient total work, the LCM of the days. For 10 and 15 days take 30 units: A does 3 units a day, B 2 units, together 5 units a day, so 30 ÷ 5 = 6 days.',
  formulas: [
    ['Rate and time', 'Rate = 1/n,  Time = 1/Rate', 'n is the time taken alone.', 'Any single-worker question.', 'n = 12 → 1/12 per day'],
    ['Working together', '1/T = 1/a + 1/b  →  T = ab/(a + b)', 'For two workers.', 'Two workers together.', '10 and 15 → 150/25 = 6 days'],
    ['Three workers', '1/T = 1/a + 1/b + 1/c', 'Add all rates.', 'Three workers.', '1/10 + 1/15 + 1/30 = 1/5'],
    ['Man-days', 'M₁ D₁ H₁ = M₂ D₂ H₂', 'Men × days × hours per day is constant for one job.', 'Men and days.', '12 men × 18 days = 216 man-days'],
    ['Efficiency', 'Efficiency ∝ 1/time', 'Faster worker takes less time.', 'A is twice as efficient as B.', 'A : B = 2 : 1 → times 1 : 2']
  ],
  narrative: [
    'Start with rates. A worker who takes 12 days does 1/12 of the work each day, so in 3 days they do 3/12 = 1/4. For two workers the combined rate is the sum, and the time is its reciprocal.',
    'Use the LCM method to avoid fractions: take the total work as the LCM of the times. If A takes 20 days and B 30 days, the total is 60 units. A does 3 units/day and B 2 units/day, together 5 units/day, so 12 days.',
    'For a worker who joins late or leaves early, compute the work done before the change, subtract from 1, and divide the remainder by the new combined rate. A (20 days) works 5 days alone: 1/4 done. Then A and B together (rate 1/12) finish the remaining 3/4 in 9 days, total 14 days.',
    'For men and days, use man-days. 12 men finishing a job in 18 days is 216 man-days. After 6 days, 72 man-days are done and 144 remain. With 8 men that is 18 more days.',
    'For alternate days, find the work done in a pair of days and see how many full pairs fit. If A (12 days) and B (18 days) work alternately, a pair does 1/12 + 1/18 = 5/36. After 14 days (7 pairs) 35/36 is done and A completes the last 1/36 on day 15.'
  ],
  deep: [
    ['Rate, not time, adds', 'Times cannot be added for workers working together; rates can. The combined time is always shorter than the faster worker\'s time.'],
    ['Working against each other', 'Pipes and cisterns are the same idea with a negative rate for a leak or outlet. Time-and-work techniques apply directly.']
  ],
  variations: [
    ['Two or three workers together', 'Add the rates.', 'A 10 days, B 15 days, C 30 days'],
    ['Leaves early / joins late', 'Work done so far.', 'A leaves 5 days before the end'],
    ['Man-days', 'Men, days and hours.', '12 men for 18 days'],
    ['Alternate days', 'Pairs of days.', 'A and B work alternately'],
    ['Efficiency ratios', 'Times in inverse ratio.', 'A is twice as good as B']
  ],
  examples: [
    {
      title: 'Working together',
      q: 'A can do a piece of work in 10 days and B in 15 days. In how many days can they do it together?',
      given: ['A: 10 days', 'B: 15 days'],
      concept: 'Add the rates.',
      steps: [['Rates', 'A = 1/10, B = 1/15.'], ['Combined', '1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6.'], ['Time', '6 days.']],
      ans: '6 days', why: 'The combined rate is the sum of the rates.', trap: 'Adding the times to get 25.'
    },
    {
      title: 'Joining late',
      q: 'A can do a work in 20 days and B in 30 days. A starts and works for 5 days, then B joins. In how many days in all is the work finished?',
      given: ['A: 20 days', 'B: 30 days', 'A works 5 days alone'],
      concept: 'Work done, remainder, combined rate.',
      steps: [['Work by A in 5 days', '5/20 = 1/4.'], ['Remaining', '3/4.'], ['Together', 'Rate = 1/20 + 1/30 = 1/12. Time = (3/4) ÷ (1/12) = 9 days.'], ['Total', '5 + 9 = 14 days.']],
      ans: '14 days', why: 'The total includes the first 5 days.', trap: 'Answering 9 days.'
    },
    {
      title: 'Men and days',
      q: '12 men can complete a work in 18 days. After 6 days, 4 men leave. In how many more days will the remaining men finish the work?',
      given: ['12 men, 18 days', '4 men leave after 6 days'],
      concept: 'Man-days.',
      steps: [['Total man-days', '12 × 18 = 216.'], ['Done in 6 days', '12 × 6 = 72. Remaining 144.'], ['Remaining men', '8 men: 144 ÷ 8 = 18 days.']],
      ans: '18 days', why: 'The total work stays 216 man-days.', trap: 'Using 12 men for the remaining days.'
    }
  ],
  shortcut: {
    title: 'LCM units',
    trad: 'Add fractions of the work each time.',
    fast: 'Take the LCM of all days as the total units, find each worker\'s units per day, add and divide.',
    rules: ['Total work = LCM of days.', 'Faster worker has a bigger rate.', 'Man-days stay constant.', 'Subtract the work done before changes in the team.']
  },
  mistakes: [
    ['Adding times', 'Adding days of two workers.', 'Add the rates.'],
    ['Forgetting the days already worked', 'Reporting only the remaining days.', 'Add the early days.'],
    ['Mixing efficiency and time', 'Using the efficiency ratio as the time ratio.', 'They are inverse.'],
    ['Ignoring that leaving workers still did their part', 'Assuming workers who left did nothing.', 'Subtract the work they completed.']
  ],
  tips: { sec: 80, elim: 'The combined time must be less than the shortest individual time.', advice: 'Use LCM units and a quick table of units per day.', insight: 'This is the base for work and wages and for pipes and cisterns.' },
  revision: ['Rate = 1/n.', 'T = ab/(a + b).', 'LCM method.', 'Man-days constant.', 'Efficiency ∝ 1/time.'],
  quickFormulas: ['ab/(a+b)', 'M D H = constant'],
  takeaways: ['Rates add.', 'Use LCM units.', 'Track the work done.', 'Check the answer against the fastest worker.'],
  selfCheck: ['Can I find the combined time for three workers?', 'Can I handle a worker who leaves early?', 'Can I use man-days?'],
  sources: [['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'Time and Work topic area; examples are original.']]
};

const quiz = [
  easy('A can do a work in 10 days and B in 15 days. Together they can do it in', 6, [5, 8, 12.5], '1/10 + 1/15 = 1/6, so 6 days.'),
  easy('A can complete a work in 12 days. The fraction of the work A does in 3 days is', '1/4', ['1/3', '1/6', '1/2'], '3/12 = 1/4.'),
  easy('A can do a work in 20 days. After working for 5 days, the fraction of work left is', '3/4', ['1/4', '4/5', '1/2'], '5/20 = 1/4 is done, so 3/4 is left.'),
  easy('4 men can do a work in 6 days. 8 men can do it in', 3, [2, 4, 12], 'Man-days = 24. 24 ÷ 8 = 3 days.'),
  easy('A and B together can do a work in 8 days and A alone in 12 days. B alone can do it in', 24, [20, 16, 32], '1/8 − 1/12 = 1/24, so B takes 24 days.'),
  easy('A is twice as efficient as B. If A alone can do a job in 10 days, B alone can do it in', 20, [5, 15, 25], 'Time is inversely proportional to efficiency, so B takes 2 × 10 = 20 days.'),

  medium('A, B and C can complete a job in 10, 15 and 30 days respectively. Together they will finish it in', 5, [4, 6, 8], '1/10 + 1/15 + 1/30 = 6/30 = 1/5, so 5 days.'),
  medium('A and B can do a work in 12 days, B and C in 15 days, and A and C in 20 days. All three together can do it in', 10, [8, 12, 15], '(A + B) + (B + C) + (A + C) = 1/12 + 1/15 + 1/20 = 12/60 = 1/5, so A + B + C = 1/10. They take 10 days.'),
  medium('A can do a work in 20 days and B in 30 days. A starts and works for 5 days, then B joins. The total time to finish is', 14, [9, 12, 15], 'A does 1/4 in 5 days. The rest 3/4 at rate 1/12 takes 9 days. Total 14 days.'),
  medium('12 men can complete a work in 18 days. After 6 days 4 men leave. The remaining work is finished by the rest in', 18, [12, 16, 24], 'Total = 216 man-days. 72 done, 144 left. 8 men take 144 ÷ 8 = 18 days.'),
  medium('A can do a job in 12 days and B in 18 days. They work on alternate days, A first. The job is finished in', 15, [14, 16, 18], 'A pair of days does 1/12 + 1/18 = 5/36. 7 pairs (14 days) do 35/36. A finishes the last 1/36 on day 15.'),
  medium('3 men or 5 women can do a work in 15 days. 6 men and 5 women can do it in', 5, [4, 6, 7.5], '3 men = 5 women, so 6 men = 10 women. 6 men and 5 women = 15 women. 5 women take 15 days, so 15 women take 5 days.'),
  medium('A is twice as good a worker as B and together they finish a job in 18 days. A alone would take', 27, [24, 30, 36], 'Rates A = 2x, B = x; 3x = 1/18, so x = 1/54 and A = 1/27. A takes 27 days.'),
  medium('A is 25% more efficient than B. If B alone takes 20 days, A alone takes', 16, [15, 17, 25], 'Efficiency ratio A : B = 5 : 4, so the times are in the ratio 4 : 5. A = 20 × 4/5 = 16 days.'),

  placement('A and B can finish a job in 30 and 20 days. They start together but A leaves 5 days before the job is finished. The job takes', 14, [12, 15, 16], 'Let the time be t. t/20 + (t − 5)/30 = 1 gives 3t + 2t − 10 = 60, so t = 14.'),
  placement('A and B together can do a work in 6 days. A alone takes 5 days less than B alone. A alone takes', 10, [8, 12, 15], 'Let A = x and B = x + 5. 1/x + 1/(x + 5) = 1/6 gives x² − 7x − 30 = 0, so x = 10.'),
  placement('A can do 1/3 of a work in 4 days and B can do 1/4 of it in 6 days. Together they can do the whole work in', 8, [6, 9, 10], 'A alone = 12 days and B alone = 24 days. 1/12 + 1/24 = 1/8, so 8 days.'),
  placement('15 men can complete a work in 20 days. After 10 days, 5 men leave. The total time taken to complete the work is', 25, [20, 24, 30], 'Total = 300 man-days. 150 done in 10 days. 10 men do the remaining 150 in 15 days. Total 25 days.'),
  placement('A does half of a work in 8 days. Then B joins and together they finish the rest in 4 days. B alone can do the whole work in', 16, [12, 20, 24], 'A\'s rate = (1/2)/8 = 1/16. Together rate = (1/2)/4 = 1/8. B = 1/8 − 1/16 = 1/16, so 16 days.'),
  placement('A is three times as efficient as B, and B takes 24 days more than A to do a work alone. Together they can do it in', 9, [8, 10, 12], 'A takes x and B takes 3x, with 3x − x = 24, so x = 12 and B = 36. 1/12 + 1/36 = 1/9, so 9 days.')
];
build(chapter, quiz);
