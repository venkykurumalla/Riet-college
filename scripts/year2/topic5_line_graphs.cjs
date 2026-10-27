module.exports = {
  id: 'y2-di-line-graphs',
  yearId: 2,
  category: 'Data Interpretation',
  topicNumber: 5,
  title: 'Line Graphs & Multi-Series Trend Analytics',
  tagline: 'Continuous time-series curves, dual Y-axis charts, crossover threshold points, Compounded Annual Growth Rate (CAGR), and ratio trajectories.',
  estimatedMinutes: 60,
  difficulty: 'Intermediate',
  introduction: {
    overview: 'Line Graphs and Time-Series Charts are the standard visual medium for displaying continuous temporal trends, rate variations, and multi-variable correlations across successive observation periods. In recruitment assessments, Line Graphs test a candidate’s visual-numerical parsing speed: extracting values from continuous polygonal curves, reading intersecting dual Y-axes (e.g. Volume on primary axis and Profit Margin % on secondary axis), detecting inflection and crossover points (where Company A overtakes Company B), and approximating multi-year Compounded Annual Growth Rates (CAGR).',
    placementRelevance: 'Features prominently in TCS NQT (Advanced DI), Infosys Quantitative Ability, Cognizant, Capgemini, and Banking/IT examinations, typically presented as complete 5-question caselet sets.',
    historicalRecruiterWeightage: 'Accounts for 25% to 30% of graphical Data Interpretation questions in 2nd-year and 3rd-year placement evaluations.',
    realWorldContext: 'Stock market ticker analytics, server network bandwidth monitoring, CPU thermal throttling curves, and quarterly revenue trajectory projections all rely on multi-series line graph interpretation.'
  },
  learningObjectives: [
    'Read multi-line time-series graphs without confusing solid, dashed, and marker-coded curve trajectories.',
    'Interpret Dual Y-Axis charts with different scales and measurement units on Left and Right axes.',
    'Identify Crossover Points (inflection points where one entity overtakes another).',
    'Calculate Year-over-Year (YoY) Percentage Growth, Maximum Growth Period, and Steepest Decline.',
    'Approximate Compounded Annual Growth Rate (CAGR) using binomial expansion shortcuts without roots.',
    'Calculate the ratio of multi-year averages across intersecting series curves.',
    'Avoid grid interpolation traps on non-zero baseline and logarithmic axes.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Percentage increase/decrease', 'Ratio simplification', 'Average calculation', 'Basic Cartesian coordinate reading (X-axis time, Y-axis metric)'],
    quickRefresher: 'Percentage Change = [(Final - Initial) / Initial] × 100%. Slope of line segment = Rate of change: steeper slope indicates faster rate of growth or decline.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Time-Series Line Graph: A chart plotting continuous chronological intervals on the horizontal X-axis and metric magnitudes on the vertical Y-axis.',
      'Multi-Series Graph: A single chart displaying multiple overlapping trend curves representing different companies, products, or geographical regions.',
      'Dual Y-Axis Graph: A chart featuring two independent vertical axes with different units or scales (e.g., Left Axis = Production in Metric Tons; Right Axis = Export Revenue in ₹ Crores).',
      'Crossover Point: The intersection coordinate where two series curves cross, indicating equality of the underlying metric at that time point.',
      'Inflection Point: A point on a curve where the rate of change alters direction (from accelerating growth to decelerating growth or decline).',
      'CAGR (Compounded Annual Growth Rate): The constant annualized growth rate over an n-year span: CAGR = (Final / Initial)^(1/n) - 1.'
    ],
    theoreticalIntuition: 'In line graph questions, the steepness (slope) of a line segment between two consecutive years visually represents the Absolute Rate of Change. However, the STEEPEST segment in raw height does not necessarily represent the HIGHEST PERCENTAGE GROWTH if its starting base is large! Always divide the rise (ΔY) by the initial base value (Y_start) before ranking growth rates.',
    visualOrMentalModel: 'Imagine a mountain hiking trail: The altitude gain represents the raw increase, while the steepness relative to the starting altitude represents percentage effort. When reading dual Y-axis graphs, use color-coding to link each curve to its corresponding left or right axis to avoid reading values from the wrong scale.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Year-over-Year (YoY) Growth Rate',
      formula: 'YoY Growth % = [(Value_(Year t) - Value_(Year t-1)) / Value_(Year t-1)] × 100%',
      variables: 'Value_(Year t-1) is the base in the denominator',
      description: 'Calculates the percentage increase between two consecutive annual points.',
      whenToUse: 'Finding the single year with the maximum growth rate.',
      simpleExample: 'Revenue 2022 = 400 Cr, Revenue 2023 = 500 Cr: YoY Growth = (100 / 400) × 100% = +25%.'
    },
    {
      title: 'Compounded Annual Growth Rate (CAGR) Approximation',
      formula: 'CAGR ≈ [ (Final / Initial - 1) / n ] × [ 1 - (n - 1)/2 × (Annual Avg Growth) ]',
      variables: 'n = number of years between start and end period; Simple Annual Growth = (Final - Initial)/(Initial × n)',
      description: 'Provides rapid mental approximation of CAGR without calculating nth roots.',
      whenToUse: 'When given 3 to 5 year growth trajectories and asked for annualized compounded rate.',
      simpleExample: 'Production grows from 100 to 144 in 2 years: CAGR = √(144/100) - 1 = 1.20 - 1 = 20%.'
    },
    {
      title: 'Dual Y-Axis Value Extraction Protocol',
      formula: 'Curve A -> Match with Left Axis (Unit 1); Curve B -> Match with Right Axis (Unit 2)',
      variables: 'Left Axis scale vs Right Axis scale',
      description: 'Guarantees that metrics plotted against secondary axes are measured with the correct scale factor.',
      whenToUse: 'Any chart with two vertical axes (e.g. Sales Volume vs Profit Margin).',
      simpleExample: 'Bar A height aligns with Left Axis (50 units); Line B point aligns with Right Axis (15%).'
    },
    {
      title: 'Average Ratio across Multi-Year Period',
      formula: 'Ratio of Averages = (∑ Value_A) / (∑ Value_B)',
      variables: 'Sum of series A across n years divided by sum of series B across same n years',
      description: 'Calculates the overall comparative ratio without dividing each series by n.',
      whenToUse: 'Evaluating "What is the ratio of average export of Company X to average export of Company Y over the 5 years?".',
      simpleExample: 'Sum A = 1500, Sum B = 2000 => Ratio of Averages = 1500 / 2000 = 3 : 4.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Line graph interpretation requires disciplined visual tracking. The first priority during the 10-Second Orientation Scan is to identify the Legend (which symbol/color represents Company A vs Company B) and inspect the X-axis chronological steps (uniform 1-year intervals vs irregular gaps).',
      'Dual-Axis Traps: A common placement trick is plotting Revenue in ₹ Crores on the Left Axis (scale 0 to 1000) and Profit Margin % on the Right Axis (scale 0% to 50%). When asked for the Absolute Profit in a given year, candidates must extract Revenue from the Left Axis and Profit Margin % from the Right Axis, and multiply: Absolute Profit = Revenue × Profit Margin %.',
      'Crossover & Inflection Analytics: A crossover point occurs where two curves intersect. Before the crossover point, Entity 1 exceeds Entity 2; after the crossover point, Entity 2 dominates. Recruitment tests frequently ask: "In how many years was the production of Company A strictly greater than Company B?" Candidates can count this visually in 3 seconds by identifying years where Curve A sits above Curve B.',
      'Fast Difference Calculation: When asked for "In which year was the difference between Production and Demand the minimum?", look for the vertical gap between the two curves. The year with the narrowest vertical distance between the plotted points represents the minimum difference without calculating numerical subtractions.'
    ],
    deepDiveAspects: [
      {
        title: 'Non-Zero Baseline Scaling',
        content: 'Check if the Y-axis starts at 0 or a non-zero baseline (e.g., 500). A line graph starting at 500 exaggerates visual slopes, making a 5% increase look like a 100% surge. Always read actual numerical values rather than trusting visual height proportions.'
      },
      {
        title: 'Cumulative vs Discrete Line Curves',
        content: 'Verify whether the line graph represents annual discrete figures or cumulative year-to-date totals. In a cumulative graph, values can NEVER decrease; a flat line indicates zero growth in that period.'
      },
      {
        title: 'Ratio of Two Line Curves Over Time',
        content: 'When evaluating Ratio R(t) = Curve1(t) / Curve2(t): R(t) is maximized when Curve 1 is highest while Curve 2 is lowest (maximum vertical divergence).'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Single-Line Trend with Percentage Growth & Decline',
      description: 'Tracking annual variations, finding highest YoY percentage surge, and steepest drop.',
      exampleSnippet: 'Line graph showing annual profit of a firm from 2018 to 2023.'
    },
    {
      typeName: 'Type 2 — Multi-Company Competitive Series Comparison',
      description: 'Comparing 2 or 3 competing firms over a 5-year timeline with crossover queries.',
      exampleSnippet: 'Two line curves representing vehicle sales of Maruti and Hyundai over 6 years.'
    },
    {
      typeName: 'Type 3 — Dual Y-Axis Multi-Unit Line & Bar Hybrid',
      description: 'Extracting primary production metrics from Left Axis and percentage margins from Right Axis.',
      exampleSnippet: 'Line 1 shows Sales (₹ Cr, Left Axis) and Line 2 shows Profit Margin (% Right Axis).'
    },
    {
      typeName: 'Type 4 — Production vs Demand / Capacity Utilization',
      description: 'Analyzing supply-demand gaps and identifying surplus or deficit years.',
      exampleSnippet: 'Line graph comparing Installed Capacity vs Actual Production across 5 manufacturing units.'
    },
    {
      typeName: 'Type 5 — Multi-Year Ratio of Averages & Combined Shares',
      description: 'Computing composite ratios of total output across multi-year intervals.',
      exampleSnippet: 'Find the ratio of average exports of Company A in 2020-2022 to Company B in 2021-2023.'
    },
    {
      typeName: 'Type 6 — Compounded Annual Growth Rate (CAGR) Estimations',
      description: 'Estimating annualized growth across a 3 to 6 year time window without roots.',
      exampleSnippet: 'Calculate the approximate CAGR of software exports growing from $20B in 2019 to $45B in 2024.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-lg-1',
      title: 'Multi-Line Graph: Competitive Sales and Growth Analysis',
      question: 'A line graph displays the annual vehicle sales (in thousands) of two automobile companies from 2020 to 2023: Company X: 2020=40, 2021=50, 2022=70, 2023=84. Company Y: 2020=60, 2021=66, 2022=72, 2023=90. (1) In which year did Company X register its highest YoY percentage growth? (2) In which year did Company X first surpass Company Y in sales?',
      givenInfo: ['Company X: 40, 50, 70, 84', 'Company Y: 60, 66, 72, 90'],
      conceptOrFormula: 'YoY Growth % = [(Value_t - Value_(t-1)) / Value_(t-1)] × 100%. Crossover check: X > Y.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate YoY percentage growth for Company X',
          explanation: '2021 over 2020: (50 - 40) / 40 = 10 / 40 = +25.0%. 2022 over 2021: (70 - 50) / 50 = 20 / 50 = +40.0%. 2023 over 2022: (84 - 70) / 70 = 14 / 70 = +20.0%. Highest YoY growth for X occurred in 2022 (+40.0%).',
          math: 'Highest YoY Growth = 2022 (+40%)'
        },
        {
          stepNumber: 2,
          title: 'Check when Company X surpassed Company Y',
          explanation: '2020: X=40, Y=60 (X < Y). 2021: X=50, Y=66 (X < Y). 2022: X=70, Y=72 (X < Y). 2023: X=84, Y=90 (X < Y). Company X never strictly surpassed Company Y in any of the recorded years.',
          math: 'X never surpassed Y in the given period'
        }
      ],
      finalAnswer: 'Part 1: 2022 (+40% growth); Part 2: Never surpassed Company Y in the given period',
      whyItWorks: 'Although X grew faster overall (+110% vs +50%), Y’s initial lead kept its total volume higher in every recorded year.',
      commonTrap: 'Assuming X surpassed Y in 2022 because its growth rate (+40%) was higher than Y (+9.1%).',
      difficulty: 'Foundation'
    },
    {
      id: 'se-lg-2',
      title: 'Dual Y-Axis Chart: Computing Absolute Net Profit',
      question: 'A dual-axis graph shows the Revenue (in ₹ Crores, Left Axis) and Net Profit Margin (in %, Right Axis) of a tech corporation: Year 2021: Revenue = ₹400 Cr, Profit Margin = 15%. Year 2022: Revenue = ₹600 Cr, Profit Margin = 20%. Year 2023: Revenue = ₹800 Cr, Profit Margin = 18%. (1) What was the absolute net profit in 2022? (2) What was the percentage increase in absolute net profit from 2021 to 2023?',
      givenInfo: ['2021: Rev=400, Margin=15%', '2022: Rev=600, Margin=20%', '2023: Rev=800, Margin=18%'],
      conceptOrFormula: 'Absolute Profit = Revenue × (Profit Margin % / 100). Percentage Increase = [(Profit_2023 - Profit_2021) / Profit_2021] × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Absolute Profit for 2022',
          explanation: 'Profit 2022 = ₹600 Cr × 20% = 600 × 0.20 = ₹120 Crores.',
          math: 'Profit 2022 = ₹120 Cr'
        },
        {
          stepNumber: 2,
          title: 'Calculate Absolute Profit for 2021 and 2023',
          explanation: 'Profit 2021 = ₹400 Cr × 15% = 400 × 0.15 = ₹60 Crores. Profit 2023 = ₹800 Cr × 18% = 800 × 0.18 = ₹144 Crores.',
          math: 'Profit 2021 = ₹60 Cr; Profit 2023 = ₹144 Cr'
        },
        {
          stepNumber: 3,
          title: 'Calculate percentage increase in absolute profit',
          explanation: 'Increase = [(144 - 60) / 60] × 100% = (84 / 60) × 100% = 1.40 × 100% = +140%.',
          math: 'Percentage Increase = +140%'
        }
      ],
      finalAnswer: 'Part 1: ₹120 Crores; Part 2: 140% increase in net profit',
      whyItWorks: 'Combining scaling factors across dual axes correctly translates margin ratios into concrete financial volumes.',
      commonTrap: 'Comparing margins directly (18% - 15% = +3%) instead of evaluating the underlying monetary profit surge.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-lg-3',
      title: 'Production vs Demand Deficit and Surplus Analysis',
      question: 'A line graph shows the Production and Demand of electricity (in Gigawatt-hours, GWh) in a state over 4 years: 2020: Demand = 120, Production = 100. 2021: Demand = 140, Production = 130. 2022: Demand = 150, Production = 165. 2023: Demand = 180, Production = 200. Question: What is the ratio of total power deficit in the deficit years to total power surplus in the surplus years?',
      givenInfo: ['2020: D=120, P=100 (Deficit = 20)', '2021: D=140, P=130 (Deficit = 10)', '2022: D=150, P=165 (Surplus = 15)', '2023: D=180, P=200 (Surplus = 20)'],
      conceptOrFormula: 'Deficit = Demand - Production (when D > P). Surplus = Production - Demand (when P > D). Ratio = Total Deficit : Total Surplus.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate total deficit in deficit years (2020 and 2021)',
          explanation: '2020 Deficit = 120 - 100 = 20 GWh. 2021 Deficit = 140 - 130 = 10 GWh. Total Deficit = 20 + 10 = 30 GWh.',
          math: 'Total Deficit = 30 GWh'
        },
        {
          stepNumber: 2,
          title: 'Calculate total surplus in surplus years (2022 and 2023)',
          explanation: '2022 Surplus = 165 - 150 = 15 GWh. 2023 Surplus = 200 - 180 = 20 GWh. Total Surplus = 15 + 20 = 35 GWh.',
          math: 'Total Surplus = 35 GWh'
        },
        {
          stepNumber: 3,
          title: 'Compute the simplified ratio',
          explanation: 'Ratio = Total Deficit / Total Surplus = 30 / 35 = 6 / 7 = 6 : 7.',
          math: 'Ratio = 6 : 7'
        }
      ],
      finalAnswer: '6 : 7',
      whyItWorks: 'Categorizing discrete annual gaps into positive surplus and negative deficit pools simplifies the aggregate ratio.',
      commonTrap: 'Subtracting total 4-year demand from total 4-year production, which nets out the individual deficit and surplus years.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-lg-4',
      title: 'Compounded Annual Growth Rate (CAGR) Estimation',
      question: 'Software exports of an IT tech hub grew along a continuous curve from $25 Billion in 2020 to $100 Billion in 2024 (a 4-year period). What was the Compounded Annual Growth Rate (CAGR)?',
      givenInfo: ['Initial Value (2020) = $25 B', 'Final Value (2024) = $100 B', 'Time Period n = 4 years (2024 - 2020)'],
      conceptOrFormula: 'CAGR = (Final / Initial)^(1/n) - 1 = (100 / 25)^(1/4) - 1 = (4)^(1/4) - 1 = (2^2)^(1/4) - 1 = √2 - 1.',
      steps: [
        {
          stepNumber: 1,
          title: 'Formulate the CAGR equation',
          explanation: 'CAGR = (100 / 25)^(1/4) - 1 = (4)^(1/4) - 1.',
          math: 'CAGR = 4^(1/4) - 1'
        },
        {
          stepNumber: 2,
          title: 'Simplify power term algebraically',
          explanation: '4^(1/4) = (2^2)^(1/4) = 2^(2/4) = 2^(1/2) = √2 ≈ 1.4142.',
          math: '4^(1/4) = √2 ≈ 1.4142'
        },
        {
          stepNumber: 3,
          title: 'Calculate CAGR percentage',
          explanation: 'CAGR = 1.4142 - 1 = 0.4142 = 41.42%.',
          math: 'CAGR = 41.42%'
        }
      ],
      finalAnswer: '41.42% per annum',
      whyItWorks: 'Exponential factoring (4^(1/4) = √2) eliminates complex root estimations.',
      commonTrap: 'Dividing total growth (+300%) by 4 years to get simple average 75% per annum.',
      difficulty: 'Advanced'
    },
    {
      id: 'se-lg-5',
      title: 'Ratio of Multi-Year Averages across Intersecting Curves',
      question: 'A line graph shows the export values of Company A and Company B over 5 years (in ₹ Cr): Company A: 2019=80, 2020=100, 2021=120, 2022=150, 2023=180. Company B: 2019=120, 2020=130, 2021=140, 2022=160, 2023=170. Find the ratio of the average export of Company A to Company B over the entire 5-year period.',
      givenInfo: ['Company A: 80, 100, 120, 150, 180', 'Company B: 120, 130, 140, 160, 170'],
      conceptOrFormula: 'Ratio of Averages across same number of years (n=5) = (Sum of A) / (Sum of B).',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate total 5-year exports for Company A',
          explanation: 'Sum A = 80 + 100 + 120 + 150 + 180 = 630 ₹ Crores.',
          math: 'Sum A = 630'
        },
        {
          stepNumber: 2,
          title: 'Calculate total 5-year exports for Company B',
          explanation: 'Sum B = 120 + 130 + 140 + 160 + 170 = 720 ₹ Crores.',
          math: 'Sum B = 720'
        },
        {
          stepNumber: 3,
          title: 'Compute simplified ratio',
          explanation: 'Ratio = 630 / 720 = 63 / 72 = 7 / 8 = 7 : 8.',
          math: 'Ratio = 7 : 8'
        }
      ],
      finalAnswer: '7 : 8',
      whyItWorks: 'Dividing both totals by 5 cancels the common denominator in the ratio.',
      commonTrap: 'Computing exact decimals for averages (126 and 144) before taking the ratio.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-lg-6',
      title: 'Steepest Growth Period vs Highest Percentage Growth',
      question: 'A company’s profit curve has coordinates: 2020: ₹20 L, 2021: ₹40 L, 2022: ₹70 L, 2023: ₹110 L. (1) Which period had the steepest absolute rise (maximum ΔY)? (2) Which period had the highest percentage growth?',
      givenInfo: ['2020=20, 2021=40, 2022=70, 2023=110'],
      conceptOrFormula: 'Absolute Rise = Y_(t) - Y_(t-1). Percentage Growth = [(Y_t - Y_(t-1)) / Y_(t-1)] × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Absolute Rise for each annual segment',
          explanation: '2020-2021: 40 - 20 = ₹20 L. 2021-2022: 70 - 40 = ₹30 L. 2022-2023: 110 - 70 = ₹40 L. Steepest absolute rise = 2022-2023 (₹40 L).',
          math: 'Max Absolute Rise = 2022-2023 (₹40 L)'
        },
        {
          stepNumber: 2,
          title: 'Calculate Percentage Growth for each annual segment',
          explanation: '2020-2021: (20 / 20) × 100% = +100.0%. 2021-2022: (30 / 40) × 100% = +75.0%. 2022-2023: (40 / 70) × 100% = +57.14%. Highest percentage growth = 2020-2021 (+100%).',
          math: 'Highest Percentage Growth = 2020-2021 (+100%)'
        }
      ],
      finalAnswer: 'Steepest Absolute Rise: 2022-2023; Highest Percentage Growth: 2020-2021',
      whyItWorks: 'A smaller starting base in 2020 produced a 100% doubling, despite the raw rise being lower than in 2023.',
      commonTrap: 'Assuming the steepest visual slope always represents the highest percentage growth.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-lg-7',
      title: 'Inflection Point and Trajectory Reversal',
      question: 'A stock price curve shows the following monthly closing prices (in ₹): Jan: 120, Feb: 150, Mar: 190, Apr: 240, May: 220, Jun: 200. In which month did the trajectory experience an inflection from positive growth to negative decline?',
      givenInfo: ['Jan=120, Feb=150, Mar=190, Apr=240, May=220, Jun=200'],
      conceptOrFormula: 'Inflection from growth to decline occurs at the peak value where derivative / slope changes from positive to negative.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate monthly price changes',
          explanation: 'Feb: 150 - 120 = +30 (Growth). Mar: 190 - 150 = +40 (Growth). Apr: 240 - 190 = +50 (Peak Growth). May: 220 - 240 = -20 (Decline). Jun: 200 - 220 = -20 (Decline).',
          math: 'Peak = April (₹240)'
        },
        {
          stepNumber: 2,
          title: 'Identify the inflection point month',
          explanation: 'The trend reverses from growth to decline after April. May is the first month recording a negative drop.',
          math: 'Inflection Month = May (Peak in April)'
        }
      ],
      finalAnswer: 'The trend peaks in April and reverses in May',
      whyItWorks: 'Tracking the sign change of adjacent differences isolates the turning point.',
      commonTrap: 'Picking March assuming the change occurred midway through the series.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-lg-8',
      title: 'Ratio Optimization of Two Diverging Curves',
      question: 'Two curves P and Q plot costs and revenues over 4 years: 2020: P=50, Q=150. 2021: P=75, Q=180. 2022: P=80, Q=240. 2023: P=100, Q=250. In which year was the ratio (Q / P) maximized?',
      givenInfo: ['2020: Q/P = 150/50', '2021: Q/P = 180/75', '2022: Q/P = 240/80', '2023: Q/P = 250/100'],
      conceptOrFormula: 'Calculate ratio Q / P for each year: 2020 = 150/50 = 3.0; 2021 = 180/75 = 2.4; 2022 = 240/80 = 3.0; 2023 = 250/100 = 2.5.',
      steps: [
        {
          stepNumber: 1,
          title: 'Evaluate Q / P ratios for each year',
          explanation: '2020: 150 / 50 = 3.0. 2021: 180 / 75 = 2.4. 2022: 240 / 80 = 3.0. 2023: 250 / 100 = 2.5.',
          math: '2020 = 3.0; 2022 = 3.0'
        },
        {
          stepNumber: 2,
          title: 'Identify maximum ratio years',
          explanation: 'The ratio Q / P is maximized at 3.0 in both 2020 and 2022.',
          math: 'Max Years = 2020 and 2022'
        }
      ],
      finalAnswer: 'Both 2020 and 2022 (Ratio = 3.0)',
      whyItWorks: 'Direct evaluation of the ratio identifies equal maxima across non-consecutive years.',
      commonTrap: 'Choosing 2023 because Q has its largest absolute value (250).',
      difficulty: 'Intermediate'
    }
  ],
  alternativeMethods: {
    title: 'Finding Maximum YoY Growth on a Multi-Point Line Curve',
    methods: [
      {
        methodName: 'Direct Rise-to-Base Ratio Comparison',
        steps: [
          'For each year t: write fraction ΔY / Y_start.',
          'Compare fractions using cross-multiplication or 10% benchmarking.',
          'Identify largest fraction.'
        ],
        prosAndCons: 'Pros: 100% accurate, avoids division. Cons: Requires writing fractions for all intervals.',
        whenToUse: 'Primary method for all YoY growth ranking questions.'
      },
      {
        methodName: 'Visual Slope vs Base Inspection Shortcut',
        steps: [
          'Visually locate segments with steep rise and small starting heights.',
          'Eliminate segments where base is large and slope is gentle.',
          'Calculate exact growth only for top 2 candidates.'
        ],
        prosAndCons: 'Pros: Eliminates 70% of arithmetic under test conditions. Cons: Must be cautious on non-zero baseline axes.',
        whenToUse: 'In multiple-choice timed exams.'
      },
      {
        methodName: 'Logarithmic Transformation Estimation',
        steps: [
          'Use natural log approximation: ln(1 + x) ≈ x for small x.',
          'ln(Y_final) - ln(Y_initial) ≈ Growth Rate.'
        ],
        prosAndCons: 'Pros: Useful for multi-year CAGR. Cons: Requires mental log estimates.',
        whenToUse: 'Advanced analytical modeling.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Dual Y-Axis Reading & Ratio of Totals Shortcuts',
    traditionalVsShortcut: {
      traditionalMethod: 'Computing 5 separate multi-digit annual averages and dividing them with long division.',
      shortcutMethod: 'Sum the values directly along the curve and take the Ratio of Sums in 1 step.',
      timeSavedPercent: '75% faster'
    },
    rulesForApplication: [
      'In Ratio of Averages, calculate Ratio of Totals directly.',
      'Always verify whether Y-axis starts at zero or a non-zero origin.',
      'Check secondary axis label units (left vs right axis).'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Reading data points against the wrong axis in dual Y-axis graphs.',
      whyItHappens: 'Reading a percentage line curve against the left rupee axis.',
      howToAvoid: 'Color-code or trace the curve line directly to its corresponding axis legend.'
    },
    {
      mistake: 'Assuming the steepest visual slope always has the highest percentage growth.',
      whyItHappens: 'Confusing absolute change (ΔY) with relative percentage change (ΔY / Y_initial).',
      howToAvoid: 'Always divide the slope rise by the starting base height.'
    },
    {
      mistake: 'Subtracting total multi-year sums to find deficit when some years have surpluses.',
      whyItHappens: 'Nets out positive and negative annual variances into a single global sum.',
      howToAvoid: 'Identify deficit and surplus years individually before summing.'
    },
    {
      mistake: 'Dividing total multi-year growth by n to compute CAGR.',
      whyItHappens: 'Confusing simple annual average with compounded growth.',
      howToAvoid: 'CAGR requires taking the nth root or applying the compounded formula.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: 'For crossover questions, visually trace the upper curve to count dominant years in 5 seconds without writing anything.',
    questionSelectionAdvice: 'Solve reading, ratio of averages, and crossover queries first; leave 4-year CAGR root estimations for last.',
    recruiterInsight: 'TCS NQT and Infosys frequently present a dual-axis line chart where Revenue is on Left Axis and Operating Profit Margin % is on Right Axis.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-lg-e1',
        question: 'A line graph shows the annual revenue of a firm: 2020=₹50 Cr, 2021=₹65 Cr, 2022=₹78 Cr, 2023=₹97.5 Cr. What was the percentage increase in revenue from 2020 to 2021?',
        options: ['25%', '30%', '35%', '20%'],
        correctAnswer: '30%',
        explanation: 'Increase = [(65 - 50) / 50] × 100% = (15 / 50) × 100% = 30%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-lg-e2',
        question: 'In a 4-year line graph, production figures are: 120, 150, 180, 210 (in thousand units). What is the average annual production?',
        options: ['150', '165', '170', '175'],
        correctAnswer: '165',
        explanation: 'Total = 120 + 150 + 180 + 210 = 660. Average = 660 / 4 = 165 thousand units.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-lg-e3',
        question: 'A line curve shows vehicle exports of 240 Cr in 2022 and 300 Cr in 2023. What is the ratio of exports in 2022 to 2023?',
        options: ['4 : 5', '5 : 6', '3 : 4', '5 : 7'],
        correctAnswer: '4 : 5',
        explanation: 'Ratio = 240 / 300 = 24 / 30 = 4 / 5 = 4 : 5.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-lg-e4',
        question: 'A line chart plots imports (₹ Cr) over 3 years: 2021=500, 2022=450, 2023=400. What was the percentage decline in imports from 2021 to 2023?',
        options: ['15%', '20%', '25%', '10%'],
        correctAnswer: '20%',
        explanation: 'Decline = [(500 - 400) / 500] × 100% = (100 / 500) × 100% = 20%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-lg-e5',
        question: 'A line curve shows employee strength growing from 200 in 2020 to 350 in 2023. What was the absolute increase in employees?',
        options: ['100', '125', '150', '175'],
        correctAnswer: '150',
        explanation: 'Absolute Increase = 350 - 200 = 150 employees.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-lg-e6',
        question: 'In a multi-series line graph of Company A and B, in how many years did Company A have higher sales than Company B if the sales were: 2021 (A=40, B=50), 2022 (A=60, B=55), 2023 (A=80, B=75)?',
        options: ['1 year', '2 years', '3 years', '0 years'],
        correctAnswer: '2 years',
        explanation: 'Company A > Company B in 2022 (60 > 55) and 2023 (80 > 75). Total = 2 years.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-lg-i1',
        question: 'In a dual-axis graph: Revenue in 2022 is ₹500 Cr (Left Axis) and Profit Margin is 25% (Right Axis). In 2023, Revenue is ₹700 Cr and Profit Margin is 20%. What is the percentage change in absolute profit from 2022 to 2023?',
        options: ['+10%', '+12%', '+15%', '+18%'],
        correctAnswer: '+12%',
        explanation: 'Profit 2022 = 500 × 0.25 = ₹125 Cr. Profit 2023 = 700 × 0.20 = ₹140 Cr. Change = [(140 - 125) / 125] × 100% = (15 / 125) × 100% = +12%.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-lg-i2',
        question: 'A line graph shows the production of two types of cars (Sedan vs SUV) across 4 years: Sedan: 2020=40, 2021=50, 2022=60, 2023=70. SUV: 2020=20, 2021=35, 2022=55, 2023=80. In which year was the percentage contribution of SUVs to total car production the highest?',
        options: ['2020', '2021', '2022', '2023'],
        correctAnswer: '2023',
        explanation: '2020: 20/(40+20) = 33.3%. 2021: 35/(50+35) = 41.2%. 2022: 55/(60+55) = 47.8%. 2023: 80/(70+80) = 80/150 = 53.33%. Highest is 2023 (53.33%).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-lg-i3',
        question: 'A line graph plots export revenues of 3 firms (P, Q, R) over 3 years: Total P = 450 Cr, Total Q = 600 Cr, Total R = 750 Cr. What is the ratio of average export of P to average export of R?',
        options: ['3 : 5', '4 : 5', '2 : 3', '3 : 4'],
        correctAnswer: '3 : 5',
        explanation: 'Ratio of Averages = Total P / Total R = 450 / 750 = 45 / 75 = 3 / 5 = 3 : 5.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-lg-i4',
        question: 'A company’s profit curve has points: 2020 (₹100 L), 2021 (₹130 L), 2022 (₹169 L), 2023 (₹219.7 L). What was the constant annual percentage growth rate?',
        options: ['25%', '30%', '35%', '20%'],
        correctAnswer: '30%',
        explanation: '100 × 1.30 = 130. 130 × 1.30 = 169. 169 × 1.30 = 219.7. Growth rate is constant at +30% per annum.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-lg-i5',
        question: 'A line graph shows water levels in a reservoir (in billion cubic meters): Jan=12, Feb=15, Mar=18, Apr=14, May=10, Jun=8. What was the percentage drop in water level from its peak in March to June?',
        options: ['50.0%', '55.56%', '60.0%', '45.0%'],
        correctAnswer: '55.56%',
        explanation: 'Peak = 18 (March). June = 8. Drop = [(18 - 8) / 18] × 100% = (10 / 18) × 100% = 5/9 × 100% = 55.56%.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-lg-i6',
        question: 'A line graph plots the cost of production and selling price per unit over 4 years: 2020 (CP 40, SP 50), 2021 (CP 50, SP 65), 2022 (CP 60, SP 75), 2023 (CP 70, SP 91). In which year was the profit percentage per unit the highest?',
        options: ['2020', '2021', '2022', '2023'],
        correctAnswer: '2021',
        explanation: '2020: 10/40 = 25%. 2021: 15/50 = 30%. 2022: 15/60 = 25%. 2023: 21/70 = 30%. Both 2021 and 2023 have 30% profit.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-lg-a1',
        question: 'A company’s annual sales grew along a geometric curve from ₹64 Cr in 2021 to ₹125 Cr in 2024 (a 3-year period). What was the Compounded Annual Growth Rate (CAGR)?',
        options: ['22.5%', '25.0%', '28.0%', '30.0%'],
        correctAnswer: '25.0%',
        explanation: 'CAGR = (125 / 64)^(1/3) - 1 = (5/4) - 1 = 1.25 - 1 = 25.0%.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-lg-a2',
        question: 'A dual-axis chart shows Mobile Subscriptions (in Millions, Left Axis) and Average Revenue Per User (ARPU in ₹, Right Axis): 2022: Subs = 50 M, ARPU = ₹140. 2023: Subs = 60 M, ARPU = ₹160. What was the percentage increase in total telecommunication revenue from 2022 to 2023?',
        options: ['32.5%', '35.0%', '37.14%', '40.0%'],
        correctAnswer: '37.14%',
        explanation: 'Rev 2022 = 50 M × 140 = ₹7,000 M. Rev 2023 = 60 M × 160 = ₹9,600 M. Growth = [(9600 - 7000) / 7000] × 100% = (2600 / 7000) × 100% = 26 / 70 = 37.14%.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-lg-a3',
        question: 'A line graph shows the percentage of defective items produced across 5 automated assembly lines: Line 1 (1.2%), Line 2 (0.8%), Line 3 (1.5%), Line 4 (0.6%), Line 5 (1.9%). If each line produced exactly 50,000 units, how many total non-defective units were produced across all 5 lines combined?',
        options: ['2,47,000', '2,46,500', '2,48,000', '2,47,500'],
        correctAnswer: '2,47,000',
        explanation: 'Total Production = 5 × 50,000 = 2,50,000 units. Total Defect % = (1.2 + 0.8 + 1.5 + 0.6 + 1.9) / 5 = 6.0% / 5 = 1.2%. Total Defective = 1.2% of 2,50,000 = 3,000 units. Non-Defective = 2,50,000 - 3,000 = 2,47,000 units.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-lg-a4',
        question: 'A line graph displays two curves: Cost Price and Selling Price for an exported commodity over 5 years. If the vertical distance between the two lines is widest in 2022 and narrowest in 2020, in which year was the absolute profit per unit maximized?',
        options: ['2020', '2021', '2022', '2023'],
        correctAnswer: '2022',
        explanation: 'Absolute profit = Selling Price - Cost Price, which equals the vertical distance between the two curves. Since the vertical gap is widest in 2022, absolute profit was maximized in 2022.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-lg-a5',
        question: 'Approximate the 5-year CAGR of a startup growing from ₹32 Cr to ₹243 Cr over a 5-year period.',
        options: ['45%', '50%', '55%', '60%'],
        correctAnswer: '50%',
        explanation: 'CAGR = (243 / 32)^(1/5) - 1 = (3^5 / 2^5)^(1/5) - 1 = (3/2) - 1 = 1.50 - 1 = 50.0%.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-lg-p1',
        question: 'In an IT assessment test, a line graph tracks cloud server CPU utilization % across 6 hours: 1 PM (40%), 2 PM (60%), 3 PM (75%), 4 PM (90%), 5 PM (65%), 6 PM (50%). What was the average CPU utilization across the 6 hours?',
        options: ['60.0%', '63.33%', '65.0%', '66.67%'],
        correctAnswer: '63.33%',
        explanation: 'Sum = 40 + 60 + 75 + 90 + 65 + 50 = 380%. Average = 380 / 6 = 63.33%.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-lg-p2',
        question: 'A line graph displays the number of candidates who cleared Round 1 and Round 2 across 4 colleges: College A (R1=400, R2=240), College B (R1=500, R2=350), College C (R1=300, R2=210), College D (R1=600, R2=360). Which college had the highest Round 2 conversion rate (R2 / R1)?',
        options: ['College A', 'College B', 'College C', 'College D'],
        correctAnswer: 'College B',
        explanation: 'A: 240/400 = 60%. B: 350/500 = 70%. C: 210/300 = 70%. D: 360/600 = 60%. Colleges B and C both achieved 70% conversion.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-lg-p3',
        question: 'A dual-axis graph shows a company’s Gross Revenue (₹ Cr, Left Axis) and Operating Margin % (Right Axis) over 3 years: 2021 (Rev 300, Margin 10%), 2022 (Rev 400, Margin 15%), 2023 (Rev 500, Margin 20%). What was the total operating profit earned over all 3 years combined?',
        options: ['₹170 Cr', '₹180 Cr', '₹190 Cr', '₹200 Cr'],
        correctAnswer: '₹190 Cr',
        explanation: '2021 Profit = 300 × 0.10 = 30 Cr. 2022 Profit = 400 × 0.15 = 60 Cr. 2023 Profit = 500 × 0.20 = 100 Cr. Total = 30 + 60 + 100 = ₹190 Crores.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-lg-p4',
        question: 'A line curve shows quarterly active users (in Millions): Q1=12, Q2=15, Q3=18, Q4=24. What was the percentage increase in users from Q1 to Q4?',
        options: ['80%', '90%', '100%', '120%'],
        correctAnswer: '100%',
        explanation: 'Increase = [(24 - 12) / 12] × 100% = 12 / 12 × 100% = 100%.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-lg-p5',
        question: 'A multi-series graph shows vehicle production of 3 plants over 4 years. If Plant 1 produced 120, 140, 160, 180 and Plant 2 produced 100, 120, 150, 170, what is the ratio of total Plant 1 output to total Plant 2 output?',
        options: ['60 : 54', '30 : 27', '15 : 13', '60 : 54'],
        correctAnswer: '15 : 13',
        explanation: 'Total Plant 1 = 120 + 140 + 160 + 180 = 600. Total Plant 2 = 100 + 120 + 150 + 170 = 540. Ratio = 600 / 540 = 60 / 54 = 10 / 9 (or 60:54).',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-lg-1',
      question: 'A line chart plots the export and import values of a country over 5 years. In 2020: Exp = 300, Imp = 250. In 2021: Exp = 350, Imp = 320. In 2022: Exp = 400, Imp = 420. In 2023: Exp = 480, Imp = 450. In 2024: Exp = 550, Imp = 500. Over the 5-year period, what was the net overall trade balance (Total Exports - Total Imports)?',
      options: ['+140 Cr', '+150 Cr', '+160 Cr', '+170 Cr'],
      correctAnswer: '+140 Cr',
      explanation: 'Total Exports = 300 + 350 + 400 + 480 + 550 = 2080. Total Imports = 250 + 320 + 420 + 450 + 500 = 1940. Net Trade Balance = 2080 - 1940 = +140 ₹ Crores (Trade Surplus).',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-lg-2',
      question: 'A line curve shows the price of a stock rising from ₹100 to ₹144 in 2 years. What is its CAGR?',
      options: ['18%', '20%', '22%', '24%'],
      correctAnswer: '20%',
      explanation: 'CAGR = √(144 / 100) - 1 = 12/10 - 1 = 1.20 - 1 = 20%.',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-lg-3',
      question: 'In a multi-series line chart of 4 companies over 3 years, the total sales are: Co A = 300, Co B = 450, Co C = 600, Co D = 750. What percentage of total combined sales is contributed by Company B?',
      options: ['20%', '21.43%', '22.5%', '25%'],
      correctAnswer: '21.43%',
      explanation: 'Total Sales = 300 + 450 + 600 + 750 = 2100. Company B % = (450 / 2100) × 100% = 45 / 210 × 100% = 15 / 70 = 3 / 14 = 21.43%.',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Line Graphs show continuous chronological trends. Steepness indicates raw rate of change.',
      'YoY Growth % = (Value_t - Value_(t-1)) / Value_(t-1) × 100%.',
      'Dual Y-Axis charts have independent Left and Right scales; link curves to their proper axis legend.',
      'Crossover Point is the intersection where one entity overtakes another.',
      'In Ratio of Averages across identical time periods, calculate the Ratio of Totals directly.',
      'CAGR = (Final / Initial)^(1/n) - 1.'
    ],
    quickFormulas: [
      'YoY % Growth: [(Y_t - Y_(t-1)) / Y_(t-1)] × 100%',
      'CAGR: (V_final / V_initial)^(1/n) - 1',
      'Ratio of Averages: ∑ Y_A / ∑ Y_B'
    ]
  },
  keyTakeaways: [
    'Always inspect the axis labels and units (left vs right) during your initial 10-second orientation scan.',
    'Do not assume the steepest slope represents the highest percentage growth—divide rise by base height.',
    'For dual-axis graphs, multiply volume by percentage margin to extract actual monetary profit.',
    'In crossover analysis, count years where the target curve is strictly above the competing curve.',
    'Use algebraic factoring to evaluate CAGR roots without calculator dependency.'
  ],
  selfCheckQuestions: [
    'Can you distinguish between absolute growth and percentage growth on a line graph?',
    'Can you extract data accurately from a dual Y-axis graph without scale confusion?',
    'Can you identify crossover points and count dominant periods in under 10 seconds?',
    'Can you compute the ratio of multi-year averages by summing data points directly?',
    'Can you calculate 2-year and 3-year CAGR using algebraic roots?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Data Interpretation and Logical Reasoning (Arun Sharma)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 2: Line Graphs, Time-Series Analytics, and Dual-Axis Charts.'
    },
    {
      sourceName: 'TCS NQT Advanced Quantitative Competency',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Multi-series trajectory analysis, CAGR approximations, and crossover points.'
    },
    {
      sourceName: 'Infosys Data Interpretation Master Framework',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Dual-axis revenue-margin modeling and multi-year ratio analysis.'
    }
  ]
};
