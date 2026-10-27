const { easy, medium, placement, build } = require('../lib.cjs');

const chapter = {
  id: 'y1-quant-basic-proportion', year: 1, category: 'Quantitative Foundation', num: 8,
  title: 'Basic Proportion',
  tagline: 'Year 1 Foundation — Equal ratios, direct and inverse variation, and the unitary method',
  minutes: 45,
  morePractice: 'https://www.indiabix.com/aptitude/ratio-and-proportion/',
  overview: 'A proportion states that two ratios are equal: a : b = c : d, written a : b :: c : d. The first and last terms (a and d) are the extremes, and the middle terms (b and c) are the means. The central rule is that the product of the extremes equals the product of the means, a × d = b × c. Proportion is the tool behind scaling recipes, converting currency, reading maps and many time-and-work type problems.',
  placement: 'Direct and inverse proportion are commonly used in company aptitude rounds, and the same thinking underlies time and work, speed and time, and mixture questions. Fast, error-free setup is what is being tested.',
  realWorld: 'If 5 kg of rice costs ₹300, then 8 kg costs ₹480 (direct proportion). If a trip takes 6 hours at 40 km/h, it takes 4 hours at 60 km/h (inverse proportion).',
  objectives: [
    'State and use the rule product of extremes = product of means',
    'Find the fourth, third and mean proportional',
    'Tell direct variation from inverse variation and set up each correctly',
    'Use the unitary method for money, distance and work problems',
    'Apply componendo and dividendo to simplify proportions'
  ],
  prereq: ['Basic Ratio', 'Fractions and decimals'],
  refresher: 'A ratio a : b equals the fraction a/b. Two ratios are equal when their fractions are equal, which is exactly the cross-multiplication rule.',
  defs: [
    'Proportion: the equality of two ratios, a : b = c : d. The numbers a, b, c, d are said to be in proportion.',
    'Fourth proportional: for three numbers a, b, c the fourth proportional x satisfies a : b = c : x, so x = bc/a.',
    'Third proportional: the third proportional to a and b is the number x with a : b = b : x, so x = b²/a.',
    'Mean proportional: the mean proportional between a and b is the number x with a : x = x : b, so x = √(ab).',
    'Direct proportion: two quantities rise or fall together at the same rate (their ratio stays constant). Inverse proportion: when one rises the other falls so that their product stays constant.'
  ],
  intuition: 'In direct proportion, doubling one quantity doubles the other, so y/x stays fixed. In inverse proportion, doubling one halves the other, so x × y stays fixed. Almost every proportion problem asks you to spot which of the two is at work and then hold that quantity constant.',
  mental: 'Direct: buying more items costs more money, so the price per item is constant. Inverse: adding more workers shortens the time, so the total work (workers × days) is constant.',
  formulas: [
    ['Fundamental rule', 'a : b = c : d  ⇔  a × d = b × c', 'Product of extremes equals product of means.', 'Finding a missing term, testing whether four numbers are in proportion.', '3 : 5 = 12 : x → 3x = 60 → x = 20'],
    ['Fourth, third and mean proportional', 'Fourth = bc/a;  Third = b²/a;  Mean = √(ab)', 'Direct consequences of the fundamental rule.', 'Questions that use these exact names.', 'Mean proportional of 4 and 9 = √36 = 6'],
    ['Direct proportion', 'x₁/y₁ = x₂/y₂', 'The ratio of the two quantities stays constant.', 'Cost vs quantity, distance vs time at constant speed.', '8 pens cost ₹96 → 5 pens cost 96 × 5/8 = ₹60'],
    ['Inverse proportion', 'x₁ × y₁ = x₂ × y₂', 'The product of the two quantities stays constant.', 'Men vs days, speed vs time for fixed distance.', '12 men take 15 days → 20 men take 12×15/20 = 9 days'],
    ['Componendo and dividendo', 'If a/b = c/d then (a+b)/(a−b) = (c+d)/(c−d)', 'Useful to turn a hard ratio equation into an easy one.', 'Finding x : y from an equation like (x+y)/(x−y) = 5/3.', 'x : y = 7 : 3 → (x+y)/(x−y) = 10/4 = 5/2']
  ],
  narrative: [
    'Every proportion problem has the same skeleton: decide whether the relationship is direct or inverse, write the two equal expressions, and solve the one unknown. The test for direct is "more gives more"; the test for inverse is "more gives less".',
    'The unitary method is proportion in disguise. Find the value of one unit first, then scale up. If 8 pens cost ₹96, one pen costs ₹12, and 5 pens cost ₹60. For inverse variation, find the total (men × days = 180 man-days) and divide by the new number of workers.',
    'For compound problems that mix several quantities, such as men, hours per day and days, keep the product men × hours × days constant for a fixed job. Writing this as a single equation avoids sequential mistakes.',
    'Componendo and dividendo are shortcuts for equations of the form (x+y)/(x−y) = p/q. They let you read x : y straight away as (p+q) : (p−q).'
  ],
  deep: [
    ['Continued proportion', 'Three numbers a, b, c are in continued proportion when a : b = b : c, that is b² = ac. For example 2, 6, 18 are in continued proportion because 6² = 2 × 18.'],
    ['Why both variations are one idea', 'Inverse proportion between x and y is direct proportion between x and 1/y. Rewriting an inverse problem in terms of "work per person" often makes the setup obvious.']
  ],
  variations: [
    ['Missing term', 'Find x in a proportion.', 'Find x if 3 : 5 = 12 : x.'],
    ['Named proportionals', 'Fourth, third or mean proportional.', 'Find the mean proportional between 4 and 9.'],
    ['Direct variation', 'Cost, distance, quantity problems.', 'If 8 pens cost ₹96, what do 5 pens cost?'],
    ['Inverse variation', 'Men and days, speed and time.', '12 men finish a job in 15 days. How long will 20 men take?'],
    ['Compound variation', 'Several quantities change together.', '6 men working 9 hours a day finish in 10 days. How long for 9 men at 5 hours a day?']
  ],
  examples: [
    {
      title: 'Direct proportion by the unitary method',
      q: 'If 8 pens cost ₹96, find the cost of 5 pens.',
      given: ['8 pens = ₹96', 'Required: cost of 5 pens'],
      concept: 'More pens cost proportionally more money, so this is direct proportion.',
      steps: [
        ['Find the cost of one pen', '₹96 ÷ 8 = ₹12.', '96 ÷ 8 = 12'],
        ['Scale to 5 pens', '5 × ₹12 = ₹60.', '5 × 12 = 60']
      ],
      ans: '₹60',
      why: 'The price of one pen does not change with the number bought, so scaling from one unit is exact.',
      trap: 'Treating it as inverse and computing 96 × 8/5.'
    },
    {
      title: 'Inverse proportion with men and days',
      q: '12 men can complete a job in 15 days. How many days will 20 men take?',
      given: ['12 men, 15 days', 'Required: days for 20 men'],
      concept: 'More men means fewer days, so men × days is constant.',
      steps: [
        ['Find the total work', '12 × 15 = 180 man-days.'],
        ['Divide among the new workers', '180 ÷ 20 = 9.', '20 × d = 180 → d = 9']
      ],
      ans: '9 days',
      why: 'The job needs a fixed number of man-days, however you split it.',
      trap: 'Writing 12/20 = 15/d (direct) which gives 25 days, more time with more men.'
    },
    {
      title: 'Compound variation',
      q: '6 men working 9 hours a day complete a job in 10 days. How many days will 9 men working 5 hours a day need to complete the same job?',
      given: ['6 men × 9 h × 10 days', 'New: 9 men × 5 h × d days'],
      concept: 'Men × hours per day × days is constant for a fixed job.',
      steps: [
        ['Total work in man-hours', '6 × 9 × 10 = 540 man-hours.'],
        ['Write the new equation', '9 × 5 × d = 540, so 45d = 540.'],
        ['Solve', 'd = 540 ÷ 45 = 12.', 'd = 12']
      ],
      ans: '12 days',
      why: 'Man-hours measure the amount of work, which does not change.',
      trap: 'Ignoring the change in hours per day and using only the change in men.'
    }
  ],
  shortcut: {
    title: 'Constant-product and constant-ratio shortcut',
    trad: 'Find the value of one unit, then multiply, which takes two steps for every problem.',
    fast: 'Decide direct or inverse. Direct: cross-multiply the two ratios. Inverse: keep the product constant, so new = (old × old) ÷ new. 12 men × 15 days ÷ 20 men = 9 days in one line.',
    rules: [
      'Direct: x₁/y₁ = x₂/y₂. Inverse: x₁y₁ = x₂y₂.',
      'Before calculating, check the answer direction: more men must give fewer days.',
      'For compound problems, multiply every changing quantity into one product and equate.',
      'For (x+y)/(x−y) = p/q, write x : y = (p+q) : (p−q) directly.'
    ]
  },
  mistakes: [
    ['Choosing the wrong variation', 'Setting up all problems as direct proportion out of habit.', 'Ask: "if one quantity increases, does the other increase or decrease?" before writing the equation.'],
    ['Cross-multiplying incorrectly', 'Multiplying a with b and c with d instead of the diagonals.', 'Write the proportion as a/b = c/d and multiply across the "=" sign: a × d = b × c.'],
    ['Forgetting that the mean proportional is a square root', 'Writing (a + b)/2 (the arithmetic mean) instead of √(ab).', 'Mean proportional means a : x = x : b, which gives x² = ab.'],
    ['Mixing units across the two sides', 'Hours on one side and minutes on the other.', 'Convert all quantities of the same kind to one unit before cross-multiplying.']
  ],
  tips: {
    sec: 60,
    elim: 'Use the direction check: in an inverse problem the answer must move the opposite way to the change. This removes two options immediately.',
    advice: 'Basic proportion questions are quick; solve them first. For compound variation, write the constant product before touching numbers.',
    insight: 'Many work, speed and pipe problems reduce to a constant product, so mastering this chapter pays off in several later topics.'
  },
  revision: [
    'Proportion means two equal ratios; extremes product = means product.',
    'Fourth proportional bc/a, third proportional b²/a, mean proportional √(ab).',
    'Direct: ratio constant. Inverse: product constant.',
    'Compound variation: men × hours × days is constant for a fixed job.',
    'Componendo-dividendo: (a+b)/(a−b) = (c+d)/(c−d).'
  ],
  quickFormulas: ['a×d = b×c', 'Fourth = bc/a, Third = b²/a, Mean = √(ab)', 'Direct: x₁/y₁ = x₂/y₂', 'Inverse: x₁y₁ = x₂y₂'],
  takeaways: [
    'Classify the variation first, calculate second.',
    'The unitary method and cross-multiplication give the same answer; use whichever is faster.',
    'Keep the units consistent on both sides.',
    'Always sanity-check the direction of the answer.'
  ],
  selfCheck: [
    'Can I find the fourth proportional to 2, 3 and 4?',
    'Can I tell, for a given situation, whether the variation is direct or inverse?',
    'Can I solve a men-hours-days problem in a single equation?'
  ],
  sources: [
    ['Quantitative Aptitude for Competitive Examinations — R.S. Aggarwal', 'Textbook', 'The Ratio and Proportion topic area; examples in this chapter are original.'],
    ['NCERT Mathematics, Class 7–8', 'Textbook', 'Direct and inverse proportion as taught in school.']
  ]
};

const quiz = [
  easy('Find x if 3 : 5 = 12 : x.', 20, [15, 18, 36], 'Product of extremes = product of means: 3 × x = 5 × 12 = 60, so x = 20.'),
  easy('The fourth proportional to 2, 3 and 4 is', 6, [5, 8, 12], 'Fourth proportional x satisfies 2 : 3 = 4 : x, so x = 3 × 4/2 = 6.'),
  easy('The third proportional to 4 and 6 is', 9, [8, 12, 36], 'Third proportional x satisfies 4 : 6 = 6 : x, so x = 6²/4 = 9.'),
  easy('The mean proportional between 4 and 9 is', 6, [6.5, 5, 36], 'Mean proportional = √(4 × 9) = √36 = 6.'),
  easy('If 8 pens cost ₹96, the cost of 5 pens is', 60, [48, 64, 72], 'One pen costs 96 ÷ 8 = ₹12. Five pens cost 5 × 12 = ₹60.'),
  easy('Find x if 4 : x = 9 : 18.', 8, [6, 9, 12], 'Cross-multiply: 9x = 4 × 18 = 72, so x = 8.'),

  medium('12 men can complete a job in 15 days. How many days will 20 men take?', 9, [25, 12, 10], 'Men and days are inversely proportional. Man-days = 12 × 15 = 180. Days for 20 men = 180 ÷ 20 = 9.', 'Inverse: (12 × 15) ÷ 20.'),
  medium('A car covers 240 km in 4 hours. At the same speed, the distance covered in 7 hours is', 420, [380, 400, 480], 'Speed = 240 ÷ 4 = 60 km/h. Distance in 7 hours = 60 × 7 = 420 km.'),
  medium('A bus covers 180 km using 12 litres of fuel. The fuel needed for 450 km is', 30, [27, 32, 36], 'Distance and fuel are in direct proportion. 180/12 = 450/x, so x = 450 × 12/180 = 30 litres.'),
  medium('If 4, x, 25 are in continued proportion, x equals', 10, [8, 12.5, 14.5], 'In continued proportion 4 : x = x : 25, so x² = 4 × 25 = 100 and x = 10.'),
  medium('Food for 40 soldiers lasts 30 days. If 10 more soldiers join, how long will the same food last?', 24, [20, 22, 25], 'Total food = 40 × 30 = 1200 man-days. With 50 soldiers it lasts 1200 ÷ 50 = 24 days.'),
  medium('If 5 kg of sugar costs ₹210, the cost of 12.5 kg is', 525, [500, 540, 560], 'Price per kg = 210 ÷ 5 = ₹42. Cost of 12.5 kg = 12.5 × 42 = ₹525.'),
  medium('On a map, 1 cm represents 25 km. Two towns are 7.2 cm apart on the map. Their actual distance is', 180, [150, 175, 200], 'Actual distance = 7.2 × 25 = 180 km.'),
  medium('If x : y = 7 : 3, then (x + y) : (x − y) equals', '5 : 2', ['7 : 3', '10 : 3', '5 : 3'], 'Let x = 7k and y = 3k. Then x + y = 10k and x − y = 4k. The ratio is 10 : 4 = 5 : 2.'),

  placement('6 men working 9 hours a day complete a job in 10 days. How many days will 9 men working 5 hours a day take for the same job?', 12, [8, 10, 15], 'Total work = 6 × 9 × 10 = 540 man-hours. New rate = 9 × 5 = 45 man-hours per day. Days = 540 ÷ 45 = 12.'),
  placement('A garrison of 500 men has food for 18 days. After 6 days, 100 men leave. For how many more days will the remaining food last?', 15, [12, 14, 18], 'Total food = 500 × 18 = 9000 man-days. Used in 6 days = 3000. Remaining = 6000 man-days. With 400 men the food lasts 6000 ÷ 400 = 15 days.'),
  placement('If (x + y)/(x − y) = 5/3, then x : y is', '4 : 1', ['5 : 3', '3 : 2', '2 : 1'], 'By componendo-dividendo: x : y = (5 + 3) : (5 − 3) = 8 : 2 = 4 : 1. Check: x = 4, y = 1 gives 5/3.', 'x : y = (p + q) : (p − q) for (x+y)/(x−y) = p/q.'),
  placement('8 pumps empty a tank in 15 hours. How many pumps of the same kind are needed to empty it in 10 hours?', 12, [10, 11, 14], 'Total work = 8 × 15 = 120 pump-hours. Pumps needed = 120 ÷ 10 = 12.'),
  placement('The present ages of A and B are in the ratio 3 : 5. After 6 years the ratio becomes 2 : 3. A\'s present age is', 18, [12, 15, 21], 'Let the ages be 3k and 5k. After 6 years: (3k + 6)/(5k + 6) = 2/3. Cross-multiplying: 9k + 18 = 10k + 12, so k = 6. A = 3 × 6 = 18 years.'),
  placement('If a, 12 and 48 are in continued proportion, then a equals', 3, [4, 6, 9], 'Continued proportion means a : 12 = 12 : 48, so 48a = 144 and a = 3.', 'Middle term squared = product of the extremes: 12² = a × 48.')
];

build(chapter, quiz);
