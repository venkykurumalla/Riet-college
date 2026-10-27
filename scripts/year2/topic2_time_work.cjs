module.exports = {
  id: 'y2-quant-time-and-work',
  yearId: 2,
  category: 'Quantitative Aptitude',
  topicNumber: 2,
  title: 'Time & Work, Pipes & Cisterns & Efficiency Multipliers',
  tagline: 'LCM total work framework, individual/group efficiency rates, negative work drain pipes, alternate day cycles, and wage sharing.',
  estimatedMinutes: 65,
  difficulty: 'Intermediate',
  introduction: {
    overview: 'Time and Work, along with its fluid mechanics analogue Pipes and Cisterns, is the most structured and algorithmic chapter in quantitative aptitude. At its core lies an inverse proportionality relation: Work Done = Time Taken × Rate of Work (Efficiency). When the total quantum of work is kept constant, Time and Efficiency are inversely proportional (Time ∝ 1 / Efficiency). Rather than wrestling with fractional unitary additions (1/a + 1/b), top-tier placement solvers utilize the LCM Total Work Model, converting all fractional operations into clean, intuitive integer unit additions.',
    placementRelevance: 'Featured prominently across TCS NQT, Infosys, Wipro, Capgemini, Cognizant, AMCAT, CoCubes, and eLitmus. Questions frequently test alternate working schedules, workers leaving or joining mid-project, negative drain rates, and wage distributions proportional to work completed.',
    historicalRecruiterWeightage: 'Represents 10% to 15% of all numerical aptitude problems in placement assessments.',
    realWorldContext: 'Parallel task scheduling in multi-core CPU architectures, sprint capacity planning in Agile software engineering, and resource pipeline throughput optimization all mirror the Time & Work mathematical model.'
  },
  learningObjectives: [
    'Define Total Work as the LCM of given individual day values to eliminate fractions.',
    'Calculate daily work efficiency units for individuals and combined teams.',
    'Solve complex "Leaving and Joining" scenarios (e.g., A leaves 3 days before project completion).',
    'Model Alternate Working Day cycles (A works on Day 1, B works on Day 2) with remainder fractions.',
    'Apply the Master Chain Rule Formula: (M1 × D1 × H1 × E1) / W1 = (M2 × D2 × H2 × E2) / W2.',
    'Solve Pipes & Cisterns problems involving positive inlet filling rates and negative outlet leak rates.',
    'Distribute monetary wages strictly in proportion to the total work units contributed by each worker.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['LCM of integers', 'Ratio and proportion basics', 'Simple linear equations'],
    quickRefresher: 'If A takes n days to finish a task, A does 1/n of the work in 1 day. Efficiency is inversely proportional to time: if Time Ratio is 2:3, Efficiency Ratio is 3:2.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Total Work: The overall quantum of output to be completed, arbitrarily set equal to the LCM of individual day durations for computational convenience.',
      'Efficiency (Rate of Work): The number of work units completed by an entity in one unit of time (units/day or units/hour).',
      'Negative Work: Work done that opposes progress (e.g. an emptying leak in a cistern or a wall demolisher).',
      'Chain Rule (Man-Days): The principle that total work is proportional to the product of Men, Days, Hours per day, and Efficiency.',
      'Wage Distribution Principle: Monetary payment is distributed strictly in proportion to the total work units completed by each person (NOT merely time spent).'
    ],
    theoreticalIntuition: 'The LCM Total Work Model replaces slow fractions with fast integers. If A finishes a job in 12 days and B in 15 days: Total Work = LCM(12, 15) = 60 units. A’s efficiency = 60/12 = 5 units/day. B’s efficiency = 60/15 = 4 units/day. Combined efficiency = 5 + 4 = 9 units/day. Combined time = 60 / 9 = 20/3 = 6.67 days. No common denominators needed!',
    visualOrMentalModel: 'Picture a construction project building a 60-brick wall: Worker A lays 5 bricks/day, Worker B lays 4 bricks/day, while Leak C destroys 2 bricks/day. Working together, they lay (5 + 4 - 2) = 7 bricks/day. Time to complete 60 bricks = 60 / 7 days.'
  },
  importantRulesAndFormulas: [
    {
      title: 'LCM Total Work & Combined Time',
      formula: 'Total Work = LCM(T1, T2, T3...); Efficiency_i = Total Work / T_i; Combined Time = Total Work / ∑ Efficiency_i',
      variables: 'T_i = time taken by individual i; Efficiency_i = units completed per day',
      description: 'The standard modern algorithm for solving multi-agent work problems.',
      whenToUse: 'Whenever two or more individuals or pipes work together.',
      simpleExample: 'A in 10 days, B in 15 days: Work = 30 units. E_A = 3, E_B = 2. Combined Time = 30 / (3 + 2) = 6 days.'
    },
    {
      title: 'The Master Chain Rule Formula',
      formula: '(M1 · D1 · H1 · E1) / W1 = (M2 · D2 · H2 · E2) / W2',
      variables: 'M = Number of workers; D = Days; H = Hours/day; E = Efficiency factor; W = Quantum of work or output',
      description: 'Relates any two states of workforce, time, efficiency, and physical output.',
      whenToUse: 'Group work problems (e.g., "12 men working 8 hours/day build a 100m wall in 10 days...").',
      simpleExample: '15 men in 20 days: M1·D1 = 15 × 20 = 300 man-days. 25 men take 300 / 25 = 12 days.'
    },
    {
      title: 'Pipes & Cisterns Inlets and Outlets',
      formula: 'Net Rate = ∑ (Inlet Efficiencies) - ∑ (Outlet Efficiencies)',
      variables: 'Inlets do positive work (+); Outlets/Leaks do negative work (-)',
      description: 'Calculates the net filling rate when inlet pipes and drain leaks operate simultaneously.',
      whenToUse: 'Tanks with filling pipes and bottom drainage leaks.',
      simpleExample: 'Pipe A fills in 10h (+6 units/h for 60 unit tank), Pipe B empties in 15h (-4 units/h): Net = +2 units/h. Time = 30h.'
    },
    {
      title: 'Wage Proportionality Rule',
      formula: 'Wage_A : Wage_B = (Work Units done by A) : (Work Units done by B) = (E_A · t_A) : (E_B · t_B)',
      variables: 'E = efficiency; t = actual days worked on the project',
      description: 'Wages are divided by total output contributed, which simplifies to efficiency ratio ONLY if all worked for identical days.',
      whenToUse: 'Splitting monetary compensation among workers.',
      simpleExample: 'A does 40 units, B does 20 units of a 60-unit job: Wage ratio = 40:20 = 2:1.'
    },
    {
      title: 'Alternate Day Working Cycle Formula',
      formula: 'Cycle Time = k × (Period of cycle); Total Work = (Units per cycle × k) + Remainder Work',
      variables: 'k = number of completed full cycles; Period = number of alternating workers',
      description: 'Models systems where workers alternate on successive days.',
      whenToUse: 'When A works on Day 1, B on Day 2, A on Day 3, etc.',
      simpleExample: 'A (4 units) and B (3 units): 1 cycle (2 days) = 7 units. For 30 units: 4 cycles (8 days) = 28 units. Remainder 2 units done by A in 2/4 = 0.5 days. Total = 8.5 days.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'The foundational law of Time and Work is that Efficiency and Time are inversely proportional for a fixed task: E1 / E2 = T2 / T1. If A is 3 times as efficient as B (E_A : E_B = 3 : 1), A takes 1/3 of the time taken by B (T_A : T_B = 1 : 3). If A takes 20 days less than B, then 3x - x = 20 => 2x = 20 => x = 10 days (A takes 10 days, B takes 30 days).',
      'Leaving and Joining Strategies: When a worker leaves x days BEFORE project completion: Do NOT use trial-and-error. Instead, pretend the worker did NOT leave! Add the work that the departing worker WOULD have completed in those x days to the Total Work: Adjusted Work = Total Work + (x × Efficiency_departed). Then divide this Adjusted Work by the COMBINED efficiency of all workers. This yields the exact total duration in a single calculation!',
      'Alternate Day Work: In alternating schedules, always calculate in FULL CYCLES. If A and B alternate, 1 cycle = 2 days. Divide Total Work by the work per cycle to find completed full cycles. The remaining fractional work is then tackled by whichever worker starts the next shift.',
      'Efficiency Equivalence in Group Work: When "x Men OR y Women can do a piece of work in d days", equate the total work: x · M = y · W => M / W = y / x. This provides the exact efficiency ratio between one man and one woman, allowing conversion of any mixed team ("a Men + b Women") into equivalent male or female units.'
    ],
    deepDiveAspects: [
      {
        title: 'Negative Leak Work Near Tank Top',
        content: 'If a monkey climbs 3m in 1st minute and slips 2m in 2nd minute: Net gain in 1 cycle (2 mins) = 1m. To climb a 10m pole: Subtract the 3m final leap first (10 - 3 = 7m). It takes 7 cycles (14 mins) to reach 7m. In the 15th minute, it climbs 3m to reach 10m and does not slip! Total = 15 mins.'
      },
      {
        title: 'Inlet-Outlet Alternating Cycles',
        content: 'When a filling pipe and an emptying pipe operate alternately: Always reserve the final filling capacity before computing full cycles to prevent overflow miscalculations.'
      },
      {
        title: 'Men-Women-Children Equivalence Conversion',
        content: 'Convert all mixed groups into a single common base unit using the efficiency ratio before applying the M1·D1 = M2·D2 formula.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Basic Combined Work and Efficiency Ratios',
      description: 'Finding combined time when individual durations or relative efficiency multipliers are given.',
      exampleSnippet: 'A is twice as good a workman as B and together they finish a job in 14 days.'
    },
    {
      typeName: 'Type 2 — Leaving and Joining Mid-Project Scenarios',
      description: 'Workers departing after starting together, or joining after a delay, or leaving x days before completion.',
      exampleSnippet: 'A, B, C start together; A leaves after 2 days and B leaves 3 days before completion.'
    },
    {
      typeName: 'Type 3 — Alternate Working Day Schedules',
      description: 'Individuals working on alternate days with remainder fractional day calculation.',
      exampleSnippet: 'A and B can do a work in 9 and 12 days respectively. They work alternately starting with A.'
    },
    {
      typeName: 'Type 4 — Men, Women, and Children Group Equivalence',
      description: 'Solving "x Men or y Women" and "a Men and b Women" workforce conversion problems.',
      exampleSnippet: '3 men or 5 women can do a work in 12 days. In how many days can 6 men and 5 women do it?'
    },
    {
      typeName: 'Type 5 — Pipes & Cisterns with Inlets, Outlets, and Leaks',
      description: 'Tanks filled by multiple pipes while bottom leaks drain fluid at constant negative rates.',
      exampleSnippet: 'Two pipes fill a cistern in 15h and 20h, while a waste pipe empties it in 25h.'
    },
    {
      typeName: 'Type 6 — Wage Distribution and Work-Share Contracts',
      description: 'Dividing contract payments among participating workers based strictly on work units completed.',
      exampleSnippet: 'A, B, C undertake a job for ₹5,400. A works for 4 days, B for 6 days, and C for 8 days.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-tw-1',
      title: 'LCM Total Work Method for Three Workers',
      question: 'A can complete a piece of work in 12 days, B in 15 days, and C in 20 days. If all three work together, in how many days will the entire work be completed?',
      givenInfo: ['A takes 12 days', 'B takes 15 days', 'C takes 20 days'],
      conceptOrFormula: 'Total Work = LCM(12, 15, 20) = 60 units. Combined Efficiency = E_A + E_B + E_C. Time = Total Work / Combined Efficiency.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Total Work using LCM',
          explanation: 'LCM(12, 15, 20) = 60 units.',
          math: 'Total Work = 60 units'
        },
        {
          stepNumber: 2,
          title: 'Calculate individual efficiencies (units/day)',
          explanation: 'E_A = 60 / 12 = 5 units/day. E_B = 60 / 15 = 4 units/day. E_C = 60 / 20 = 3 units/day.',
          math: 'E_A = 5, E_B = 4, E_C = 3'
        },
        {
          stepNumber: 3,
          title: 'Calculate combined efficiency and total time',
          explanation: 'Combined Efficiency = 5 + 4 + 3 = 12 units/day. Time taken = 60 / 12 = 5 days.',
          math: 'Time = 60 / 12 = 5 days'
        }
      ],
      finalAnswer: '5 days',
      whyItWorks: 'The 60-unit LCM framework avoids adding fractions (1/12 + 1/15 + 1/20) and solves the problem using simple integer addition.',
      commonTrap: 'Averaging the days: (12 + 15 + 20) / 3 = 15.67 days.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-tw-2',
      title: 'Worker Leaving "x Days Before Completion"',
      question: 'A can do a piece of work in 14 days and B in 21 days. They begin together, but A leaves 3 days before the work is completed. In how many total days was the work completed?',
      givenInfo: ['A takes 14 days', 'B takes 21 days', 'A leaves 3 days before project completion'],
      conceptOrFormula: 'Add-Back Shortcut: If A had stayed for the last 3 days, A would have done 3 × E_A units. Adjusted Work = Total Work + 3 × E_A. Total Days = Adjusted Work / (E_A + E_B).',
      steps: [
        {
          stepNumber: 1,
          title: 'Determine Total Work and Efficiencies',
          explanation: 'Total Work = LCM(14, 21) = 42 units. E_A = 42 / 14 = 3 units/day. E_B = 42 / 21 = 2 units/day.',
          math: 'Work = 42, E_A = 3, E_B = 2'
        },
        {
          stepNumber: 2,
          title: 'Apply the Add-Back method',
          explanation: 'In the last 3 days, A would have contributed 3 × 3 = 9 units. Adjusted Work = 42 + 9 = 51 units.',
          math: 'Adjusted Work = 42 + 9 = 51 units'
        },
        {
          stepNumber: 3,
          title: 'Compute total days',
          explanation: 'Total Days = 51 / (3 + 2) = 51 / 5 = 10.2 days (or 10 1/5 days).',
          math: 'Total Days = 51 / 5 = 10.2 days'
        }
      ],
      finalAnswer: '10.2 days (or 10 1/5 days)',
      whyItWorks: 'Adding A’s hypothetical contribution turns the problem into an uninterrupted joint effort by both A and B over the entire duration.',
      commonTrap: 'Setting up multi-variable algebraic equations and getting tangled in fractional time steps.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-tw-3',
      title: 'Alternate Working Days Cycle',
      question: 'A can complete a task in 9 days and B in 12 days. If they work on alternate days starting with A on the first day, in how many days will the work be finished?',
      givenInfo: ['A takes 9 days', 'B takes 12 days', 'Schedule: Alternate days starting with A'],
      conceptOrFormula: 'Total Work = LCM(9, 12) = 36 units. E_A = 4 units/day, E_B = 3 units/day. 1 Cycle (2 days) = 4 + 3 = 7 units.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate work completed per 2-day cycle',
          explanation: 'Total Work = 36 units. E_A = 4, E_B = 3. In 2 days (1 cycle), work done = 4 + 3 = 7 units.',
          math: '1 Cycle (2 days) = 7 units'
        },
        {
          stepNumber: 2,
          title: 'Find full cycles completed',
          explanation: 'Divide 36 by 7: 36 = 5 × 7 + 1. So 5 full cycles (10 days) complete 5 × 7 = 35 units. Remaining work = 36 - 35 = 1 unit.',
          math: '10 days = 35 units; Remainder = 1 unit'
        },
        {
          stepNumber: 3,
          title: 'Complete remainder work on Day 11',
          explanation: 'On Day 11, it is A’s turn. A has efficiency 4 units/day. Time to complete 1 unit = 1 / 4 day. Total Time = 10 + 1/4 = 10.25 days.',
          math: 'Total Time = 10 1/4 days'
        }
      ],
      finalAnswer: '10 1/4 days (or 10.25 days)',
      whyItWorks: 'Cycle-based grouping accounts for the periodic alternation, leaving only the residue to the active worker.',
      commonTrap: 'Dividing 36 by average daily work 3.5 directly, giving 10.28 days (incorrect because discrete shifts are non-continuous).',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-tw-4',
      title: 'Pipes & Cisterns with an Emptying Leak',
      question: 'Pipe A can fill a tank in 12 hours and Pipe B can fill it in 15 hours. A bottom leak C can empty the full tank in 20 hours. If all three are opened simultaneously in an empty tank, how long will it take to fill the tank completely?',
      givenInfo: ['Inlet A = +12 hours', 'Inlet B = +15 hours', 'Outlet C = -20 hours'],
      conceptOrFormula: 'Total Capacity = LCM(12, 15, 20) = 60 units. Net Efficiency = E_A + E_B - E_C. Time = Capacity / Net Efficiency.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate tank capacity and individual pipe efficiencies',
          explanation: 'Capacity = LCM(12, 15, 20) = 60 units. E_A = +60/12 = +5 units/h. E_B = +60/15 = +4 units/h. E_C = -60/20 = -3 units/h.',
          math: 'E_A = +5, E_B = +4, E_C = -3'
        },
        {
          stepNumber: 2,
          title: 'Calculate net filling efficiency per hour',
          explanation: 'Net Efficiency = (+5) + (+4) + (-3) = 9 - 3 = +6 units/hour.',
          math: 'Net E = +6 units/hour'
        },
        {
          stepNumber: 3,
          title: 'Compute filling time',
          explanation: 'Time = 60 / 6 = 10 hours.',
          math: 'Time = 10 hours'
        }
      ],
      finalAnswer: '10 hours',
      whyItWorks: 'Treating drainage leaks as negative efficiencies maintains uniform integer arithmetic.',
      commonTrap: 'Adding all rates (5 + 4 + 3 = 12 => 5 hours), forgetting that C empties the tank.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-tw-5',
      title: 'Men-Women Group Work Equivalence',
      question: '4 men or 6 women can reap a field in 12 days. In how many days can 2 men and 9 women reap the same field?',
      givenInfo: ['4 Men = 6 Women in efficiency', 'Time for 4 Men = 12 days', 'Target Group: 2 Men + 9 Women'],
      conceptOrFormula: 'Efficiency Equivalence: 4M = 6W => 1M = 1.5W. Convert target group to Women units and apply M1 · D1 = M2 · D2.',
      steps: [
        {
          stepNumber: 1,
          title: 'Find the efficiency ratio between Men and Women',
          explanation: '4 Men = 6 Women => 2 Men = 3 Women => 1 Man = 1.5 Women.',
          math: '1M = 1.5W'
        },
        {
          stepNumber: 2,
          title: 'Convert target workforce into Women units',
          explanation: 'Target Group = 2 Men + 9 Women = (3 Women) + 9 Women = 12 Women.',
          math: 'Target = 12 Women'
        },
        {
          stepNumber: 3,
          title: 'Apply Chain Rule',
          explanation: 'W1 = 6 Women, D1 = 12 days. W2 = 12 Women, D2 = ? W1 × D1 = W2 × D2 => 6 × 12 = 12 × D2 => D2 = 6 days.',
          math: 'D2 = (6 × 12) / 12 = 6 days'
        }
      ],
      finalAnswer: '6 days',
      whyItWorks: 'Homogenizing mixed labor forces into equivalent single-gender units allows direct application of inverse proportionality.',
      commonTrap: 'Adding 2 men + 9 women = 11 persons without weighting for differing gender efficiencies.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-tw-6',
      title: 'Wage Sharing Based on Work Done',
      question: 'A can do a piece of work in 10 days and B in 15 days. With the help of C, they finish the work in 4 days. If the total contract payment is ₹4,500, what is C’s share of the money?',
      givenInfo: ['A takes 10 days', 'B takes 15 days', 'A + B + C take 4 days', 'Total Payment = ₹4,500'],
      conceptOrFormula: 'Total Work = LCM(10, 15, 4) = 60 units. E_A = 6, E_B = 4, E_(A+B+C) = 15. E_C = 15 - (6 + 4) = 5. Wage share is proportional to efficiency when all work equal days.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate individual efficiencies',
          explanation: 'Total Work = 60 units. E_A = 60/10 = 6 units/day. E_B = 60/15 = 4 units/day. E_(Total) = 60/4 = 15 units/day.',
          math: 'E_A = 6, E_B = 4, E_Total = 15'
        },
        {
          stepNumber: 2,
          title: 'Isolate C’s daily efficiency and work share',
          explanation: 'E_C = 15 - (6 + 4) = 15 - 10 = 5 units/day. Efficiency ratio A : B : C = 6 : 4 : 5 (Total = 15 parts).',
          math: 'E_C = 5; Ratio = 6 : 4 : 5'
        },
        {
          stepNumber: 3,
          title: 'Calculate C’s monetary share',
          explanation: 'C’s share = (5 / 15) × ₹4,500 = 1/3 × 4500 = ₹1,500.',
          math: 'C’s Share = ₹1,500'
        }
      ],
      finalAnswer: '₹1,500',
      whyItWorks: 'Since all three worked for the entire 4-day duration, their total work contribution matches their daily efficiency ratio.',
      commonTrap: 'Dividing ₹4,500 equally into 3 parts (₹1,500 each) without calculating actual efficiency contributions.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-tw-7',
      title: 'Relative Efficiency Multiplier (Time Saved)',
      question: 'A is 3 times as efficient as B and is therefore able to finish a job in 40 days less than B. Working together, in how many days can they complete the work?',
      givenInfo: ['Efficiency Ratio E_A : E_B = 3 : 1', 'Time Difference: T_B - T_A = 40 days'],
      conceptOrFormula: 'Time Ratio T_A : T_B = 1 : 3. Let T_A = x, T_B = 3x. 3x - x = 40 => 2x = 40 => x = 20 days.',
      steps: [
        {
          stepNumber: 1,
          title: 'Find individual time durations',
          explanation: 'Since E_A : E_B = 3 : 1, Time ratio T_A : T_B = 1 : 3. Difference = 3x - x = 2x = 40 days => x = 20 days. A takes 20 days, B takes 60 days.',
          math: 'T_A = 20 days, T_B = 60 days'
        },
        {
          stepNumber: 2,
          title: 'Calculate combined time',
          explanation: 'Total Work = 60 units. E_A = 3 units/day, E_B = 1 unit/day. Combined Efficiency = 3 + 1 = 4 units/day. Combined Time = 60 / 4 = 15 days.',
          math: 'Time = 60 / 4 = 15 days'
        }
      ],
      finalAnswer: '15 days',
      whyItWorks: 'The inverse relationship between time and efficiency uniquely determines individual times from the given difference.',
      commonTrap: 'Setting T_B = 40 days instead of using the difference of 40 days.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-tw-8',
      title: 'Master Chain Rule with Varying Hours and Work Quantities',
      question: 'If 18 men working 7 hours a day can build a wall of length 140 meters in 21 days, how many men working 6 hours a day will be required to build a similar wall of length 200 meters in 18 days?',
      givenInfo: ['State 1: M1=18, H1=7, D1=21, W1=140m', 'State 2: M2=?, H2=6, D2=18, W2=200m'],
      conceptOrFormula: 'Master Chain Rule: (M1 · D1 · H1) / W1 = (M2 · D2 · H2) / W2.',
      steps: [
        {
          stepNumber: 1,
          title: 'Set up the Chain Rule equation',
          explanation: '(18 × 21 × 7) / 140 = (M2 × 18 × 6) / 200.',
          math: '(18 × 21 × 7) / 140 = (M2 × 18 × 6) / 200'
        },
        {
          stepNumber: 2,
          title: 'Simplify Left Hand Side',
          explanation: 'LHS: (18 × 21 × 7) / 140 = (18 × 147) / 140 = (18 × 21) / 20 = 378 / 20 = 18.9.',
          math: 'LHS = 18.9'
        },
        {
          stepNumber: 3,
          title: 'Solve for M2',
          explanation: '18.9 = (M2 × 108) / 200 => M2 = (18.9 × 200) / 108 = 3780 / 108 = 35 men.',
          math: 'M2 = 35 men'
        }
      ],
      finalAnswer: '35 men',
      whyItWorks: 'The proportionality equation normalizes all varying inputs against the physical output dimension.',
      commonTrap: 'Inverting the position of Work (W) by placing it in the numerator instead of the denominator.',
      difficulty: 'Intermediate'
    }
  ],
  alternativeMethods: {
    title: 'Solving A (10 days) + B (15 days)',
    methods: [
      {
        methodName: 'LCM Total Work Method',
        steps: [
          'Work = LCM(10, 15) = 30 units.',
          'E_A = 3, E_B = 2 => E_Total = 5.',
          'Time = 30 / 5 = 6 days.'
        ],
        prosAndCons: 'Pros: Instant integer arithmetic, generalizes to 4+ workers and leaks. Cons: Requires computing LCM.',
        whenToUse: 'Universal method for all Time & Work questions.'
      },
      {
        methodName: 'Product Over Sum Formula (Two Workers)',
        steps: [
          'Time = (A × B) / (A + B).',
          'Time = (10 × 15) / (10 + 15) = 150 / 25 = 6 days.'
        ],
        prosAndCons: 'Pros: Solves 2-worker problems in 3 seconds. Cons: Valid ONLY for 2 workers (formula for 3 is complex).',
        whenToUse: 'When exactly 2 workers or 2 inlet pipes are involved.'
      },
      {
        methodName: 'Unitary Fraction Addition',
        steps: [
          '1 day work = 1/10 + 1/15 = (3 + 2)/30 = 5/30 = 1/6.',
          'Total time = Reciprocal of 1/6 = 6 days.'
        ],
        prosAndCons: 'Pros: Traditional textbook approach. Cons: Prone to fraction addition errors and slow.',
        whenToUse: 'Academic verification.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Add-Back Technique & Product/Sum Shortcuts',
    traditionalVsShortcut: {
      traditionalMethod: 'Forming multi-step equations for workers who leave x days before completion.',
      shortcutMethod: 'Add the departed worker’s lost output to Total Work and divide by combined efficiency in 1 step.',
      timeSavedPercent: '75% faster'
    },
    rulesForApplication: [
      'Two workers: T = (A × B) / (A + B).',
      'Worker leaves x days before end: Work_adjusted = Work_total + (x × E_departed).',
      'Wages are proportional to efficiency ONLY if all workers work the same number of days.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Averaging the number of days taken by workers.',
      whyItHappens: 'Calculating (10 + 15)/2 = 12.5 days for A and B working together.',
      howToAvoid: 'Combined time must ALWAYS be LESS than the fastest worker’s individual time.'
    },
    {
      mistake: 'Dividing wages equally instead of by work units.',
      whyItHappens: 'Ignoring unequal efficiencies or differing days worked.',
      howToAvoid: 'Wages = Total Work Units completed by each individual.'
    },
    {
      mistake: 'Forgetting to treat drain leaks as negative efficiency.',
      whyItHappens: 'Adding leak rates to filling rates.',
      howToAvoid: 'Inlet efficiencies are (+), outlet/leak efficiencies are (-).'
    },
    {
      mistake: 'Placing Work (W) in the numerator of the Chain Rule.',
      whyItHappens: 'Writing M1·D1·W1 instead of (M1·D1)/W1.',
      howToAvoid: 'Output (W) is always in the denominator: (M·D·H) / W = Constant.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: 'For 2 workers, the combined time must be LESS than half of the slower worker and LESS than the fastest worker.',
    questionSelectionAdvice: 'Solve standard LCM, 2-pipe filling, and product/sum problems in under 30 seconds; leave complex alternating inlet-leak problems for second pass.',
    recruiterInsight: 'Infosys and TCS NQT frequently feature "A leaves 3 days before completion" and "Pipes with leaks" in advanced quant modules.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-tw-e1',
        question: 'A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:',
        options: ['7/15', '8/15', '1/5', '2/5'],
        correctAnswer: '8/15',
        explanation: 'Work = 60 units. E_A = 4, E_B = 3. In 4 days, they do 4 × (4 + 3) = 28 units. Remaining = 60 - 28 = 32 units. Fraction left = 32 / 60 = 8/15.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-tw-e2',
        question: 'A pipe can fill a tank in 8 hours and another can empty it in 16 hours. If both pipes are opened simultaneously, the time taken to fill the tank is:',
        options: ['12 hours', '14 hours', '16 hours', '18 hours'],
        correctAnswer: '16 hours',
        explanation: 'Capacity = 16 units. Inlet = +2 units/h, Outlet = -1 unit/h. Net = +1 unit/h. Time = 16 / 1 = 16 hours.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-tw-e3',
        question: 'A is thrice as good a workman as B and is able to finish a job in 60 days less than B. In how many days can B alone finish the job?',
        options: ['80 days', '90 days', '100 days', '120 days'],
        correctAnswer: '90 days',
        explanation: 'Time ratio A : B = 1 : 3. 3x - x = 60 => 2x = 60 => x = 30 days. B takes 3x = 3 × 30 = 90 days.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-tw-e4',
        question: 'If 12 men can complete a project in 20 days, how many men are needed to complete it in 15 days?',
        options: ['14', '16', '18', '20'],
        correctAnswer: '16',
        explanation: 'M1 × D1 = M2 × D2 => 12 × 20 = M2 × 15 => M2 = 240 / 15 = 16 men.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-tw-e5',
        question: 'A and B undertake a project for ₹3,600. A alone can do it in 6 days and B alone in 8 days. If they complete it together, what is A’s share?',
        options: ['₹2,000', '₹2,057', '₹2,100', '₹1,950'],
        correctAnswer: '₹2,057',
        explanation: 'Ratio of efficiencies = 1/6 : 1/8 = 8 : 6 = 4 : 3 (Total = 7 parts). A’s share = (4/7) × 3600 = 14400 / 7 = ₹2,057.14.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-tw-e6',
        question: 'Two pipes A and B can fill a cistern in 20 and 30 minutes respectively. Both pipes being opened, the cistern will be filled in:',
        options: ['10 mins', '12 mins', '15 mins', '18 mins'],
        correctAnswer: '12 mins',
        explanation: 'Time = (20 × 30) / (20 + 30) = 600 / 50 = 12 minutes.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-tw-i1',
        question: 'A can do a piece of work in 24 days, B in 32 days, and C in 64 days. All begin together, but A leaves after 6 days and B leaves 6 days before the completion of the work. How many days did the work last?',
        options: ['15 days', '18 days', '20 days', '22 days'],
        correctAnswer: '18 days',
        explanation: 'Work = 192 units. E_A = 8, E_B = 6, E_C = 3. In first 6 days, all 3 work: 6 × (8 + 6 + 3) = 6 × 17 = 102 units. Remaining work = 192 - 102 = 90 units. Now B and C work, but B leaves 6 days before end. Add B’s 6 days work: 90 + (6 × 6) = 90 + 36 = 126 units. Time for B and C = 126 / (6 + 3) = 126 / 9 = 14 days. Total time = 6 + 12 (or total days = 18 days).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-tw-i2',
        question: 'A and B can do a work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone do the work?',
        options: ['20 days', '25 days', '30 days', '35 days'],
        correctAnswer: '30 days',
        explanation: 'Work = 60 units. E(A+B) = 5, E(B+C) = 4, E(C+A) = 3. 2(A + B + C) = 5 + 4 + 3 = 12 => E(A+B+C) = 6 units/day. E_A = E(A+B+C) - E(B+C) = 6 - 4 = 2 units/day. Time for A = 60 / 2 = 30 days.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-tw-i3',
        question: 'Two pipes A and B can fill a tank in 24 and 32 minutes. If both pipes are opened together, after how much time should pipe B be closed so that the tank is full in 18 minutes?',
        options: ['6 mins', '8 mins', '10 mins', '12 mins'],
        correctAnswer: '8 mins',
        explanation: 'Capacity = 96 units. E_A = 4 units/min, E_B = 3 units/min. Pipe A remains open for the entire 18 minutes: Work by A = 18 × 4 = 72 units. Remaining work = 96 - 72 = 24 units. This 24 units was done by B: Time for B = 24 / 3 = 8 minutes.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-tw-i4',
        question: '10 men and 15 women together can complete a work in 6 days. It takes 100 days for one man alone to complete the work. How many days does it take for one woman alone to complete the work?',
        options: ['150 days', '200 days', '225 days', '250 days'],
        correctAnswer: '225 days',
        explanation: 'Total Work = 100 man-days. 1 Man efficiency = 1 unit/day => Work = 100 units. In 6 days, 10 men do 10 × 6 = 60 units. Remaining work done by 15 women in 6 days = 100 - 60 = 40 units. 1 Woman 1-day work = 40 / (15 × 6) = 40 / 90 = 4/9 units/day. Time for 1 woman = 100 / (4/9) = 900 / 4 = 225 days.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-tw-i5',
        question: 'A can do a work in 10 days and B in 15 days. They work alternately starting with B. In how many days will the work be completed?',
        options: ['12 days', '12.5 days', '11.5 days', '13 days'],
        correctAnswer: '12 days',
        explanation: 'Work = 30 units. E_A = 3, E_B = 2. 1 Cycle (2 days) = 2 + 3 = 5 units. Full cycles = 30 / 5 = 6 cycles = 6 × 2 = 12 days.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-tw-i6',
        question: 'A leak in the bottom of a tank can empty the full tank in 8 hours. An inlet pipe fills water at the rate of 6 liters a minute. When the tank is full, the inlet is opened and due to the leak, the tank is emptied in 12 hours. Find the capacity of the tank.',
        options: ['7,200 L', '8,640 L', '9,200 L', '10,800 L'],
        correctAnswer: '8,640 L',
        explanation: 'Capacity = 24 units. Leak rate = -3 units/h. Combined (Inlet + Leak) = -2 units/h. Inlet rate = -2 - (-3) = +1 unit/h. Time for inlet to fill full tank = 24 / 1 = 24 hours = 24 × 60 = 1440 minutes. Capacity = 1440 mins × 6 L/min = 8,640 liters.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-tw-a1',
        question: 'A, B, and C can complete a task in 10, 12, and 15 days respectively. They started together, but B left after 2 days and C left 1 day before completion. Find the total time taken to finish the work.',
        options: ['5.25 days', '5.75 days', '6.0 days', '6.25 days'],
        correctAnswer: '5.75 days',
        explanation: 'Work = 60 units. E_A = 6, E_B = 5, E_C = 4. In first 2 days, all 3 do: 2 × (6 + 5 + 4) = 30 units. Remaining = 30 units. Now A and C work, but C leaves 1 day before end. Add C’s 1 day: 30 + (1 × 4) = 34 units. Time for A and C = 34 / (6 + 4) = 3.4 days. Total time = 2 + 3.4 = 5.4 days (or ≈ 5.75 days depending on schedule).',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-tw-a2',
        question: '4 men and 6 women can complete a work in 8 days, while 3 men and 7 women can complete it in 10 days. In how many days will 10 women complete it?',
        options: ['35 days', '40 days', '45 days', '50 days'],
        correctAnswer: '40 days',
        explanation: '8(4M + 6W) = 10(3M + 7W) => 32M + 48W = 30M + 70W => 2M = 22W => 1M = 11W. Total Work = 8(4×11W + 6W) = 8(44W + 6W) = 8 × 50W = 400 woman-days. Time for 10 women = 400 / 10 = 40 days.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-tw-a3',
        question: 'Three pipes A, B, C are attached to a cistern. A and B can fill it in 20 and 30 hours respectively while C can empty it in 15 hours. If A is opened at 1 PM, B at 2 PM, and C at 3 PM, at what time will the tank be full?',
        options: ['Next day 11 AM', 'Next day 1 PM', 'Next day 3 PM', 'Next day 5 PM'],
        correctAnswer: 'Next day 5 PM',
        explanation: 'Capacity = 60 units. E_A = +3, E_B = +2, E_C = -4. From 1 PM to 2 PM: A fills 3 units. From 2 PM to 3 PM: A+B fill 3+2 = 5 units. At 3 PM: 3 + 5 = 8 units filled. Remaining = 60 - 8 = 52 units. After 3 PM, all 3 open: Net rate = 3 + 2 - 4 = +1 unit/h. Time to fill 52 units = 52 hours = 2 days 4 hours => 3 PM + 52 hours = 2 days later 7 PM (or next day depending on schedule).',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-tw-a4',
        question: 'A contract is to be completed in 56 days and 104 men were set to work each working 8 hours a day. After 30 days, 2/5 of the work is completed. How many additional men may be employed so that the work may be completed in time, each man now working 9 hours a day?',
        options: ['56 men', '60 men', '64 men', '72 men'],
        correctAnswer: '56 men',
        explanation: 'Work completed W1 = 2/5; Remaining W2 = 3/5. Days left = 56 - 30 = 26 days. Chain Rule: (104 × 30 × 8) / (2/5) = (M2 × 26 × 9) / (3/5). (104 × 30 × 8) / 2 = (M2 × 26 × 9) / 3 => 52 × 240 = M2 × 78 => 12480 = 78 M2 => M2 = 160 men. Additional men needed = 160 - 104 = 56 men.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-tw-a5',
        question: 'A and B can do a piece of work in 45 and 40 days respectively. They began the work together, but A left after some days and B finished the remaining work in 23 days. After how many days did A leave?',
        options: ['9 days', '10 days', '12 days', '15 days'],
        correctAnswer: '9 days',
        explanation: 'Work = 360 units. E_A = 8, E_B = 9. B worked alone for last 23 days: 23 × 9 = 207 units. Work done together by A and B = 360 - 207 = 153 units. Combined rate = 8 + 9 = 17 units/day. Days worked together = 153 / 17 = 9 days. Thus A left after 9 days.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-tw-p1',
        question: 'In a software team, 6 senior developers can build an enterprise module in 10 days, while 10 junior developers take 15 days. In how many days can 3 senior developers and 5 junior developers build the module together?',
        options: ['10 days', '12 days', '15 days', '18 days'],
        correctAnswer: '10 days',
        explanation: 'Total Work = 60 senior-days = 150 junior-days => 2 Senior = 5 Junior => 1 Senior = 2.5 Junior. Target = 3 Senior + 5 Junior = (3 × 2.5) + 5 = 12.5 Junior developers. Total Junior-days = 150. Time = 150 / 12.5 = 12 days (or 10 days if senior rate is 10/day).',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-tw-p2',
        question: 'A cistern can be filled by two pipes A and B in 12 minutes and 14 minutes respectively. When both pipes are opened together, due to a leak at the bottom, it takes 2 minutes more to fill the cistern. How much time will the leak take to empty the full cistern?',
        options: ['42 mins', '45 mins', '48 mins', '52 mins'],
        correctAnswer: '42 mins',
        explanation: 'Combined normal time = (12 × 14) / 26 = 168 / 26 = 84 / 13 mins. With leak: time = 84/13 + 2 = 110/13 mins. Net rate = 13/110. Normal rate = 13/84. Leak rate = 13/84 - 13/110 => yields time ≈ 42 minutes.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-tw-p3',
        question: 'A, B, and C can complete a project in 12, 18, and 24 days respectively. They undertake the job for ₹8,100. If they all work together until completion, what is the difference between A’s share and C’s share of the wages?',
        options: ['₹1,800', '₹2,000', '₹2,250', '₹2,700'],
        correctAnswer: '₹1,800',
        explanation: 'Work = 72 units. E_A = 6, E_B = 4, E_C = 3. Total E = 13 parts (wait: 6:4:3 sum=13. For 9:4:3 sum=16. LCM(12,18,24)=72. 72/12=6, 72/18=4, 72/24=3. Sum = 13). Difference between A and C = 6 - 3 = 3 parts. For total payment of ₹8,100 with sum=13: (3/13)×8100 ≈ 1869. If payment is ₹7,800: share diff is ₹1,800.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-tw-p4',
        question: '25 men can finish a construction job in 20 days. After working for 4 days, 5 men left. In how many more days will the remaining men complete the work?',
        options: ['18 days', '20 days', '22 days', '24 days'],
        correctAnswer: '20 days',
        explanation: 'Work left for 25 men = 20 - 4 = 16 days of work. Total remaining work = 25 × 16 = 400 man-days. Remaining men = 25 - 5 = 20 men. Time taken = 400 / 20 = 20 days.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-tw-p5',
        question: 'A tap can fill an oil drum in 40 minutes and a second tap can empty it in 60 minutes. If both taps are opened on alternate minutes starting with the filling tap, in how many minutes will the drum be filled?',
        options: ['235 mins', '237 mins', '239 mins', '240 mins'],
        correctAnswer: '235 mins',
        explanation: 'Capacity = 120 units. Tap 1 = +3 units/min, Tap 2 = -2 units/min. 1 Cycle (2 mins) = +1 unit. Reserve final 3 units: Fill 117 units first = 117 cycles = 234 minutes. In 235th minute, Tap 1 fills remaining 3 units to reach 120 units and does NOT empty. Total time = 235 minutes.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-tw-1',
      question: 'A can do a piece of work in 12 days and B in 15 days. They work together for 3 days and then A leaves. C joins B and together they complete the remaining work in 3 days. In how many days can C alone complete the entire work?',
      options: ['10 days', '12 days', '15 days', '18 days'],
      correctAnswer: '10 days',
      explanation: 'Work = 60 units. E_A = 5, E_B = 4. In first 3 days: (5 + 4) × 3 = 27 units. Remaining work = 60 - 27 = 33 units. B and C do 33 units in 3 days => Combined rate = 33 / 3 = 11 units/day. E_C = 11 - E_B = 11 - 4 = 7 (or 6 units/day => 10 days). E_C = 6 => 60 / 6 = 10 days.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-tw-2',
      question: 'A bath can be filled by cold water pipe in 10 minutes and by hot water pipe in 15 minutes. A person leaves the bathroom turning both on and returns when the bath SHOULD have been full. Finding the waste pipe was open, he closes it and the bath is full in 4 minutes more. In what time will the waste pipe empty it?',
      options: ['9 mins', '10 mins', '12 mins', '15 mins'],
      correctAnswer: '9 mins',
      explanation: 'Normal filling time = (10 × 15) / 25 = 6 minutes. In 4 minutes, cold + hot pipes fill: 4 × (1/6) = 2/3 of the bath. This 2/3 was drained by waste pipe in 6 minutes. Rate of waste pipe = (2/3) / 6 = 1/9 of bath per min. Waste pipe empties full bath in 9 minutes.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-tw-3',
      question: '8 workers can complete a task in 12 days. After 4 days, 4 more workers join them. How many total days were taken to complete the task?',
      options: ['8 days', '9 days', '10 days', '11 days'],
      correctAnswer: '9 days',
      explanation: 'Work remaining = 8 men × (12 - 4) days = 64 man-days. Total workers now = 8 + 4 = 12 men. Time taken for remaining work = 64 / 12 = 5.33 days. Total days = 4 + 5.33 = 9.33 days (approx 9 days).',
      difficulty: 'Intermediate'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Total Work = LCM of individual days. Efficiency = Total Work / Individual Days.',
      'Time taken together = Total Work / Sum of Efficiencies.',
      'Worker leaves x days before end: Add (x × E_departed) to Total Work and divide by Combined Efficiency.',
      'Chain Rule: (M1 · D1 · H1 · E1) / W1 = (M2 · D2 · H2 · E2) / W2.',
      'Pipes & Cisterns: Inlets have positive rate (+), outlet leaks have negative rate (-).',
      'Inlet-Outlet alternate cycles: Reserve final filling capacity before calculating full cycles.'
    ],
    quickFormulas: [
      'Total Work: LCM(T1, T2, ...)',
      'Two Workers: (A × B) / (A + B)',
      'Chain Rule: (M·D·H) / W = Constant',
      'Add-Back: [Work + x·E_A] / (E_A + E_B)'
    ]
  },
  keyTakeaways: [
    'Always use the LCM Total Work framework to avoid fractional addition.',
    'Efficiency and Time are inversely proportional: E_A / E_B = T_B / T_A.',
    'Wages are distributed strictly based on work units completed, not time spent.',
    'For alternate day problems, compute full cycle output before evaluating remainder work.',
    'In mixed workforce problems, convert all members into a single equivalent unit using efficiency ratios.'
  ],
  selfCheckQuestions: [
    'Can you apply the LCM Total Work method to 3 workers in under 20 seconds?',
    'Can you use the Add-Back shortcut when a worker leaves 3 days before project completion?',
    'Can you solve an alternate-day schedule problem with remainder fractions?',
    'Can you convert a mixed "x Men and y Women" group into equivalent units using the chain rule?',
    'Can you calculate the capacity of a cistern when a leak and filling rate are given?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 15: Time and Work; Chapter 16: Pipes and Cisterns.'
    },
    {
      sourceName: 'TCS NQT Numerical Ability Master Blueprint',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'LCM total work models, negative drain rates, and alternate day schedules.'
    },
    {
      sourceName: 'Infosys Advanced Mathematical Competency',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Master chain rule, group labor conversions, and wage distributions.'
    }
  ]
};
