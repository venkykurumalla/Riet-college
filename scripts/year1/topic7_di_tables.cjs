module.exports = {
  id: 'y1-di-tables-and-charts',
  yearId: 1,
  category: 'Data Interpretation',
  topicNumber: 7,
  title: 'Tabular Data & Bar Graph Analysis',
  tagline: 'Multi-column tables, grouped/stacked bar charts, percentage growth, ratio comparisons, and rapid calculation techniques.',
  estimatedMinutes: 60,
  difficulty: 'Foundation',
  introduction: {
    overview: 'Data Interpretation (DI) evaluates a candidate’s analytical ability to extract, synthesize, and manipulate quantitative data presented in structured visual formats—primarily tabular matrices and bar graphs. Rather than testing abstract mathematical formulas, DI assesses computational efficiency, data filtering, percentage change tracking, and approximation under extreme time pressure. A typical DI set presents a complex real-world dataset (such as 5-year corporate revenues across multiple product lines or demographic distributions across regions) followed by 4 to 5 multi-step questions.',
    placementRelevance: 'Data Interpretation constitutes a dedicated sectional module in TCS NQT (Advanced Quantitative), Infosys, Capgemini, AMCAT, CoCubes, and Banking/IT assessments, accounting for 20% to 30% of total quantitative evaluation marks.',
    historicalRecruiterWeightage: 'Consistently features 1 to 2 complete data sets (5 to 10 questions) in every major aptitude screening.',
    realWorldContext: 'Business intelligence dashboards, financial balance sheets, market share trend reports, and operational KPIs in modern enterprise environments are presented primarily through tabular and bar graph formats.'
  },
  learningObjectives: [
    'Quickly scan and interpret multi-column tabular data matrices without getting overwhelmed by superfluous numbers.',
    'Differentiate between simple vertical bar charts, grouped (clustered) bar charts, and stacked (component) bar charts.',
    'Calculate Percentage Increase, Percentage Decrease, and Absolute Growth instantaneously.',
    'Apply the Vedic Cross-Multiplication and Fraction Comparison techniques to rank growth ratios without computing full decimal values.',
    'Utilize Strategic Approximation (rounding to 2 significant digits) to eliminate impossible answer options in under 20 seconds.',
    'Compute weighted averages and composite performance ratios across multi-year data grids.',
    'Avoid common reading traps involving measurement units (thousands vs millions, percentages vs raw counts).'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Percentage increase/decrease formulas', 'Ratios and basic proportion', 'Average calculations', 'Mental addition and subtraction'],
    quickRefresher: 'Percentage Change = [(Final Value - Initial Value) / Initial Value] × 100%. To compare fractions a/b and c/d, cross-multiply: if a·d > b·c, then a/b > c/d.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Tabular Data: Quantitative information organized in horizontal rows and vertical columns with defined headers and units.',
      'Simple Bar Graph: Rectangular bars with lengths proportional to the discrete values they represent across a single variable.',
      'Grouped (Clustered) Bar Chart: Sets of adjacent bars comparing multiple categories across the same discrete intervals (e.g., Sales vs Profit per year).',
      'Stacked (Subdivided) Bar Chart: A single bar representing a total quantity divided into color-coded sub-segments showing component contributions.',
      'Percentage Growth Rate: The relative change of a metric expressed as a percentage of its initial base period value.',
      'Approximation Triage: Rounding multi-digit numbers to 2 or 3 significant digits when answer options have a wide numerical spread.'
    ],
    theoreticalIntuition: 'In recruitment DI, precise pencil-and-paper long division is a trap designed to exhaust your timer. If the answer choices are widely separated (e.g. 14.2%, 18.5%, 23.1%, 29.8%), round numbers to 2 significant digits: evaluating 4,872 / 21,340 as 49 / 213 ≈ 50 / 210 = 5 / 21 ≈ 23.8% takes 5 seconds and immediately identifies the correct choice.',
    visualOrMentalModel: 'Think of a data table as a database query: 1. Filter (identify relevant Row and Column). 2. Project (extract required numbers). 3. Compute (apply percentage/ratio formula). 4. Approximate (match against options). Never calculate the whole table before reading the specific question.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Percentage Growth / Decline Formula',
      formula: 'Percentage Change = [(Value_Final - Value_Initial) / Value_Initial] × 100%',
      variables: 'Value_Initial is the BASE period value (appearing in the denominator)',
      description: 'Calculates the relative increase or decrease over time.',
      whenToUse: 'Whenever a question asks "What is the percentage increase in sales from 2020 to 2024?".',
      simpleExample: 'Sales rise from 250 Cr to 350 Cr: Change = [(350 - 250) / 250] × 100% = (100 / 250) × 100% = +40%.'
    },
    {
      title: 'Fraction Comparison via Cross-Multiplication',
      formula: 'To compare a/b vs c/d: Compare (a × d) with (b × c)',
      variables: 'If a·d > b·c => a/b > c/d; If a·d < b·c => a/b < c/d',
      description: 'Determines the larger fraction without performing long division.',
      whenToUse: 'Finding which company or year had the highest profit-to-sales ratio.',
      simpleExample: 'Compare 47/182 vs 53/205: 47 × 205 = 9635; 182 × 53 = 9646. Since 9646 > 9635, 53/205 > 47/182.'
    },
    {
      title: 'Average Calculation from Grouped Rows',
      formula: 'Average = (Sum of Values across n categories) / n',
      variables: 'n = number of rows or periods',
      description: 'Computes the arithmetic mean value across multiple years or products.',
      whenToUse: 'Evaluating "What is the average production of all five factories in 2023?".',
      simpleExample: 'Values: 120, 150, 180, 210, 240 => Sum = 900. Average = 900 / 5 = 180.'
    },
    {
      title: 'Component Percentage in Stacked Bar',
      formula: 'Component % = (Segment Value / Total Bar Height) × 100%',
      variables: 'Segment Value = Top Boundary - Bottom Boundary of component',
      description: 'Calculates the percentage contribution of a sub-section in a stacked bar chart.',
      whenToUse: 'Interpreting subdivided component bar charts.',
      simpleExample: 'Segment from 120 to 180 on a total bar of 300: Value = 60. % = (60 / 300) × 100% = 20%.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Data Interpretation questions evaluate speed-reading and structured arithmetic. The first step when opening any DI set is the 10-Second Orientation Scan: 1. Read the Title to understand the domain (e.g. "Annual Vehicle Production of 4 Companies in Thousands"). 2. Check the Units of measurement (Rupees in Lakhs vs Crores; Metric Tons vs Kilograms). 3. Identify the Row and Column headers. Never read individual data cells during orientation—only read the metadata.',
      'When calculating percentage increase across multiple years: Check if the question asks for "Maximum Absolute Increase" or "Maximum Percentage Increase". Absolute increase is simply (Final - Initial) in raw numbers. Percentage increase is (Final - Initial) / Initial. The year with the highest raw increase does NOT always have the highest percentage increase if its starting base was very large.',
      'Rapid Mental Addition: When adding a column of 5 or 6 multi-digit numbers (e.g. 432 + 568 + 712 + 389 + 645), add from Left to Right (Hundreds first, then Tens, then Units): (400+500+700+300+600) = 2500; (30+60+10+80+40) = 220; (2+8+2+9+5) = 26. Total = 2500 + 220 + 26 = 2746. This is 3x faster than traditional column addition with carries.',
      'Ratio Comparisons: When comparing growth rates across 4 companies: If Company A grew from 20 to 45 (an increase of +125%), while Company B grew from 500 to 750 (an increase of +50%), Company A has the highest percentage growth despite Company B having 10x higher absolute growth.'
    ],
    deepDiveAspects: [
      {
        title: 'Approximation Error Control',
        content: 'If you round the numerator UP and the denominator DOWN, your calculated value will be higher than the true value. If you round both in the SAME direction (both up by ~2%), the percentage distortion cancels out, keeping error under 0.5%.'
      },
      {
        title: 'Missing Data in Tabular Matrices',
        content: 'When tables have empty cells with marginal totals provided: Use Row Sum and Column Sum equations to solve for missing cells before computing ratio questions.'
      },
      {
        title: 'Unit Conversion Pitfalls',
        content: 'Always convert Lakhs (10^5) and Crores (10^7) or Millions (10^6) and Billions (10^9) into uniform powers of 10 before computing ratios.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Multi-Year Production & Sales Tables',
      description: 'Extracting totals, annual percentage growth, and company market shares from structured tables.',
      exampleSnippet: 'Table showing sales of 4 products (P, Q, R, S) across 2019–2023.'
    },
    {
      typeName: 'Type 2 — Clustered / Grouped Bar Graph Comparison',
      description: 'Comparing revenue vs expenditure or boys vs girls across multiple institutions.',
      exampleSnippet: 'Grouped bar chart showing Imports and Exports of a country over 6 years.'
    },
    {
      typeName: 'Type 3 — Subdivided (Stacked) Component Bar Charts',
      description: 'Analyzing component percentages (e.g. Raw Material, Labor, Overhead) within a single total cost bar.',
      exampleSnippet: 'Stacked bar chart showing expenditure heads for 5 manufacturing units.'
    },
    {
      typeName: 'Type 4 — Highest & Lowest Growth Rate Identification',
      description: 'Rapidly ranking percentage variations across multiple competing entities without full division.',
      exampleSnippet: 'Which company registered the highest percentage profit increase in 2022 over 2021?'
    },
    {
      typeName: 'Type 5 — Ratio and Proportion Multi-Variable Query',
      description: 'Finding the ratio of combined production of two entities in Year 1 to three entities in Year 2.',
      exampleSnippet: 'Find the ratio of total sales of Branch A and C in 2020 to Branch B and D in 2022.'
    },
    {
      typeName: 'Type 6 — Weighted Averages & Composite Indices',
      description: 'Calculating overall pass percentages, average salaries across departments, or cost-per-unit metrics.',
      exampleSnippet: 'Find the overall pass percentage of the college across all 4 departments combined.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-di-1',
      title: 'Tabular Data: Percentage Growth and Ratio Analysis',
      question: 'Consider the annual revenue table (in ₹ Crores) of 3 IT companies: Company A: 2020=120, 2021=150, 2022=180, 2023=225. Company B: 2020=200, 2021=220, 2022=260, 2023=312. Company C: 2020=80, 2021=100, 2022=130, 2023=169. Question: Which company registered the highest percentage growth in revenue from 2020 to 2023?',
      givenInfo: ['Company A: 120 -> 225', 'Company B: 200 -> 312', 'Company C: 80 -> 169'],
      conceptOrFormula: 'Percentage Growth = [(Revenue_2023 - Revenue_2020) / Revenue_2020] × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate percentage growth for Company A',
          explanation: 'Growth A = [(225 - 120) / 120] × 100% = (105 / 120) × 100% = (7 / 8) × 100% = 87.5%.',
          math: 'Growth A = 87.5%'
        },
        {
          stepNumber: 2,
          title: 'Calculate percentage growth for Company B',
          explanation: 'Growth B = [(312 - 200) / 200] × 100% = (112 / 200) × 100% = 56.0%.',
          math: 'Growth B = 56.0%'
        },
        {
          stepNumber: 3,
          title: 'Calculate percentage growth for Company C',
          explanation: 'Growth C = [(169 - 80) / 80] × 100% = (89 / 80) × 100% = 1.1125 × 100% = 111.25%.',
          math: 'Growth C = 111.25%'
        },
        {
          stepNumber: 4,
          title: 'Compare the growth rates',
          explanation: 'Company C (111.25%) > Company A (87.5%) > Company B (56.0%). Company C registered the highest percentage growth.',
          math: 'Highest = Company C'
        }
      ],
      finalAnswer: 'Company C (111.25% growth)',
      whyItWorks: 'Company C started from a smaller base (₹80 Cr), so its absolute gain of ₹89 Cr represents more than a 100% increase.',
      commonTrap: 'Picking Company B because it had the largest absolute revenue gain (312 - 200 = 112 Cr).',
      difficulty: 'Foundation'
    },
    {
      id: 'se-di-2',
      title: 'Grouped Bar Chart: Import-Export Deficit',
      question: 'A grouped bar chart shows the Imports and Exports of Country X (in $ Billions): Year 2021: Exports = 45, Imports = 55. Year 2022: Exports = 60, Imports = 72. Year 2023: Exports = 80, Imports = 92. Year 2024: Exports = 100, Imports = 110. Question: In which year was the trade deficit (Imports - Exports) as a percentage of Exports the highest?',
      givenInfo: ['2021: Exp=45, Imp=55', '2022: Exp=60, Imp=72', '2023: Exp=80, Imp=92', '2024: Exp=100, Imp=110'],
      conceptOrFormula: 'Deficit % of Exports = [(Imports - Exports) / Exports] × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Deficit / Exports for 2021',
          explanation: 'Deficit 2021 = 55 - 45 = 10. Ratio = 10 / 45 = 2 / 9 ≈ 22.22%.',
          math: '2021 = 22.22%'
        },
        {
          stepNumber: 2,
          title: 'Calculate Deficit / Exports for 2022',
          explanation: 'Deficit 2022 = 72 - 60 = 12. Ratio = 12 / 60 = 1 / 5 = 20.00%.',
          math: '2022 = 20.00%'
        },
        {
          stepNumber: 3,
          title: 'Calculate Deficit / Exports for 2023',
          explanation: 'Deficit 2023 = 92 - 80 = 12. Ratio = 12 / 80 = 3 / 20 = 15.00%.',
          math: '2023 = 15.00%'
        },
        {
          stepNumber: 4,
          title: 'Calculate Deficit / Exports for 2024',
          explanation: 'Deficit 2024 = 110 - 100 = 10. Ratio = 10 / 100 = 10.00%.',
          math: '2024 = 10.00%'
        }
      ],
      finalAnswer: 'Year 2021 (22.22%)',
      whyItWorks: 'Year 2021 had the highest deficit relative to its export volume.',
      commonTrap: 'Using Imports as the denominator instead of Exports.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-di-3',
      title: 'Stacked Component Bar Chart: Production Cost Breakdown',
      question: 'In a manufacturing unit, the total production cost of a unit is ₹400, subdivided into: Raw Material = ₹160, Labor = ₹120, Overheads = ₹80, Packaging & Logistics = ₹40. What percentage of the total production cost is constituted by Labor and Overheads combined?',
      givenInfo: ['Total Cost = ₹400', 'Labor = ₹120', 'Overheads = ₹80'],
      conceptOrFormula: 'Combined % = [(Labor + Overheads) / Total Cost] × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Sum the target component values',
          explanation: 'Labor + Overheads = 120 + 80 = ₹200.',
          math: 'Sum = ₹200'
        },
        {
          stepNumber: 2,
          title: 'Compute percentage of total cost',
          explanation: 'Percentage = (200 / 400) × 100% = 1/2 × 100% = 50%.',
          math: 'Percentage = 50%'
        }
      ],
      finalAnswer: '50%',
      whyItWorks: 'Combining relevant segment heights directly against the total bar length yields the proportion.',
      commonTrap: 'Calculating individual percentages, rounding prematurely, and summing rounded values.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-di-4',
      title: 'Average and Cross-Year Ratio in Multi-Branch Sales',
      question: 'Sales of 4 Branches (B1, B2, B3, B4) in 2022 are 80, 75, 95, 110 (in thousand units) and in 2023 are 90, 85, 105, 120. Find the ratio of the average sales of all branches in 2022 to the average sales of all branches in 2023.',
      givenInfo: ['2022 Sales: 80, 75, 95, 110', '2023 Sales: 90, 85, 105, 120'],
      conceptOrFormula: 'Ratio of Averages across same number of entities (n=4) equals the Ratio of their Total Sums.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Total Sales for 2022',
          explanation: 'Total 2022 = 80 + 75 + 95 + 110 = 360 thousand units.',
          math: 'Sum 2022 = 360'
        },
        {
          stepNumber: 2,
          title: 'Calculate Total Sales for 2023',
          explanation: 'Total 2023 = 90 + 85 + 105 + 120 = 400 thousand units.',
          math: 'Sum 2023 = 400'
        },
        {
          stepNumber: 3,
          title: 'Compute simplified ratio',
          explanation: 'Ratio = 360 / 400 = 36 / 40 = 9 : 10.',
          math: 'Ratio = 9 : 10'
        }
      ],
      finalAnswer: '9 : 10',
      whyItWorks: 'Dividing both totals by 4 cancels the common denominator 4 in the ratio of averages.',
      commonTrap: 'Computing exact floating point averages (90 and 100) before taking the ratio, wasting time.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-di-5',
      title: 'Approximation Triage for Complex Multi-Digit Table',
      question: 'Total sales of a company in 2023 was ₹4,87,320 and in 2024 was ₹5,98,750. What is the approximate percentage increase in sales? (A) 18.2% (B) 22.9% (C) 27.5% (D) 32.1%',
      givenInfo: ['Sales 2023 = ₹4,87,320', 'Sales 2024 = ₹5,98,750'],
      conceptOrFormula: 'Round values to 3 significant digits: 2023 ≈ 487; 2024 ≈ 599. Increase = 599 - 487 = 112. % Increase ≈ 112 / 487.',
      steps: [
        {
          stepNumber: 1,
          title: 'Round to convenient significant figures',
          explanation: 'Initial ≈ 487 thousand. Final ≈ 599 thousand. Absolute increase = 599 - 487 = 112 thousand.',
          math: 'Increase ≈ 112, Base ≈ 487'
        },
        {
          stepNumber: 2,
          title: 'Estimate percentage mentally',
          explanation: '10% of 487 is 48.7. 20% of 487 is 97.4. Remaining increase = 112 - 97.4 = 14.6. 14.6 / 487 ≈ 3%. Total ≈ 20% + 3% = 23%.',
          math: 'Estimate ≈ 23%'
        },
        {
          stepNumber: 3,
          title: 'Match against options',
          explanation: 'Comparing with options: (A) 18.2%, (B) 22.9%, (C) 27.5%, (D) 32.1%. The closest option is 22.9%.',
          math: 'Match = Option (B)'
        }
      ],
      finalAnswer: '22.9% (Option B)',
      whyItWorks: 'Benchmarking against 10% and 1% of the base eliminates full division.',
      commonTrap: 'Doing manual 6-digit division on scratch paper.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-di-6',
      title: 'Missing Table Cell Reconstruction',
      question: 'In a table showing employees across 3 departments (Tech, HR, Sales): Total Employees = 500. Tech = 240. HR = 80. Males represent 60% of all employees. If 160 males work in Tech and 30 males work in HR, how many females work in Sales?',
      givenInfo: ['Total = 500', 'Tech = 240 (160 M)', 'HR = 80 (30 M)', 'Overall Males = 60% of 500 = 300'],
      conceptOrFormula: 'Total Sales = 500 - (240 + 80) = 180. Total Males = 300. Sales Males = 300 - (160 + 30) = 110. Sales Females = Total Sales - Sales Males.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate total employees in Sales',
          explanation: 'Sales Total = 500 - (240 + 80) = 500 - 320 = 180.',
          math: 'Sales Total = 180'
        },
        {
          stepNumber: 2,
          title: 'Calculate males in Sales',
          explanation: 'Total Males in company = 60% of 500 = 300. Males in Sales = 300 - (160 + 30) = 300 - 190 = 110.',
          math: 'Sales Males = 110'
        },
        {
          stepNumber: 3,
          title: 'Compute females in Sales',
          explanation: 'Females in Sales = Total Sales - Sales Males = 180 - 110 = 70.',
          math: 'Sales Females = 70'
        }
      ],
      finalAnswer: '70 females',
      whyItWorks: 'Row-column balance reconstructs unknown internal matrix values systematically.',
      commonTrap: 'Trying to calculate female percentages across departments without finding total Sales department size first.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-di-7',
      title: 'Weighted Average Pass Percentage across College Departments',
      question: 'A college has 3 engineering departments: CS (120 students, 85% pass), EC (80 students, 75% pass), ME (100 students, 70% pass). What is the overall pass percentage of the college?',
      givenInfo: ['CS: 120 students, 85% pass', 'EC: 80 students, 75% pass', 'ME: 100 students, 70% pass'],
      conceptOrFormula: 'Overall Pass % = (Total Passed Students / Total Students) × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate passed students in each department',
          explanation: 'CS Passed = 0.85 × 120 = 102. EC Passed = 0.75 × 80 = 60. ME Passed = 0.70 × 100 = 70.',
          math: 'CS = 102, EC = 60, ME = 70'
        },
        {
          stepNumber: 2,
          title: 'Calculate total passed students and total students',
          explanation: 'Total Passed = 102 + 60 + 70 = 232. Total Students = 120 + 80 + 100 = 300.',
          math: 'Total Passed = 232, Total Students = 300'
        },
        {
          stepNumber: 3,
          title: 'Compute overall percentage',
          explanation: 'Overall Pass % = (232 / 300) × 100% = 232 / 3 = 77.33%.',
          math: 'Overall % = 77.33%'
        }
      ],
      finalAnswer: '77.33%',
      whyItWorks: 'Weighted average accounts for the differing class sizes (weights) of each department.',
      commonTrap: 'Taking the simple average of percentages: (85 + 75 + 70) / 3 = 230 / 3 = 76.67% (fails because class sizes are unequal).',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-di-8',
      title: 'Fast Fraction Comparison for Maximum Profit Ratio',
      question: 'Which of the following companies had the highest Profit-to-Revenue ratio? Company P: Profit 34 Cr on Revenue 156 Cr. Company Q: Profit 48 Cr on Revenue 210 Cr. Company R: Profit 29 Cr on Revenue 125 Cr. Company S: Profit 55 Cr on Revenue 260 Cr.',
      givenInfo: ['P = 34/156', 'Q = 48/210', 'R = 29/125', 'S = 55/260'],
      conceptOrFormula: 'Simplify and benchmark: P = 34/156 ≈ 21.79%; Q = 48/210 ≈ 22.86%; R = 29/125 = 23.20%; S = 55/260 ≈ 21.15%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Evaluate R = 29 / 125 exactly',
          explanation: 'Multiply numerator and denominator by 8: (29 × 8) / (125 × 8) = 232 / 1000 = 23.20%.',
          math: 'R = 23.20%'
        },
        {
          stepNumber: 2,
          title: 'Compare Q = 48 / 210 with R = 29 / 125 via cross-multiplication',
          explanation: '48 × 125 = 6000. 210 × 29 = 6090. Since 6090 > 6000, R (29/125) > Q (48/210).',
          math: 'R > Q'
        },
        {
          stepNumber: 3,
          title: 'Compare P and S',
          explanation: 'P = 34/156 ≈ 21.8%; S = 55/260 ≈ 21.15%. Both are strictly less than R (23.2%).',
          math: 'Highest = Company R'
        }
      ],
      finalAnswer: 'Company R (23.20%)',
      whyItWorks: 'Cross-multiplication rigorously compares fractions without computing full decimal expansions.',
      commonTrap: 'Choosing Company S because it has the largest absolute profit (55 Cr).',
      difficulty: 'Intermediate'
    }
  ],
  alternativeMethods: {
    title: 'Comparing Growth of 43/180 vs 52/215',
    methods: [
      {
        methodName: 'Cross-Multiplication Method',
        steps: [
          'Compute Product 1: 43 × 215 = 9,245.',
          'Compute Product 2: 180 × 52 = 9,360.',
          'Since 9,360 > 9,245, 52/215 is larger than 43/180.'
        ],
        prosAndCons: 'Pros: 100% mathematically exact, requires zero division. Cons: Requires 3-digit multiplication.',
        whenToUse: 'When two candidate fractions are extremely close.'
      },
      {
        methodName: 'Percentage Benchmark Method (10% Base)',
        steps: [
          'For 43/180: 10% of 180 is 18; 20% is 36; remainder is 7 (≈ 3.9%). Total ≈ 23.9%.',
          'For 52/215: 10% of 215 is 21.5; 20% is 43; remainder is 9 (≈ 4.2%). Total ≈ 24.2%.',
          '52/215 (24.2%) > 43/180 (23.9%).'
        ],
        prosAndCons: 'Pros: Entirely mental, no scratch paper needed. Cons: Hard when differences are under 0.2%.',
        whenToUse: 'Best for rapid multiple-choice answer elimination.'
      },
      {
        methodName: 'Decimal Rounding (2 Significant Digits)',
        steps: [
          '43 / 180 ≈ 4.3 / 18 ≈ 0.238.',
          '52 / 215 ≈ 5.2 / 21.5 ≈ 0.241.',
          '0.241 > 0.238.'
        ],
        prosAndCons: 'Pros: Fast and intuitive. Cons: Requires disciplined rounding.',
        whenToUse: 'When options are spaced by at least 2%.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Left-to-Right Addition & 10% Benchmark Triage',
    traditionalVsShortcut: {
      traditionalMethod: 'Adding multi-digit columns from right to left with carrying and performing long division.',
      shortcutMethod: 'Add hundreds first (left-to-right) and compute percentages by decomposing into 50%, 10%, 1% benchmarks.',
      timeSavedPercent: '70% faster'
    },
    rulesForApplication: [
      'Decompose denominators: To find 23% of 450, compute 10%×2 (90) + 1%×3 (13.5) = 103.5.',
      'In "Ratio of Averages", cancel the number of terms and directly calculate the Ratio of Totals.',
      'Always verify units in the table header before entering answers (thousands vs millions).'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Confusing Absolute Increase with Percentage Increase.',
      whyItHappens: 'Selecting the option with the largest raw difference instead of dividing by the base.',
      howToAvoid: 'Check whether the question asks for "Maximum increase" (raw) or "Maximum percentage increase" (ratio).'
    },
    {
      mistake: 'Taking simple average of percentages across unequal populations.',
      whyItHappens: 'Averaging (85% + 75% + 70%) / 3 instead of calculating total passed / total students.',
      howToAvoid: 'Always use weighted averages when group sizes differ.'
    },
    {
      mistake: 'Misreading header multiplier units (e.g., "in Thousands" or "in Lakhs").',
      whyItHappens: 'Ignoring small-print subtitle units.',
      howToAvoid: 'Highlight the units in the title during the initial 10-second orientation scan.'
    },
    {
      mistake: 'Inverting numerator and denominator in ratio questions.',
      whyItHappens: 'Writing Year 2023 / Year 2020 instead of Year 2020 / Year 2023.',
      howToAvoid: 'The entity mentioned before "to" is the numerator; the entity after "to" is the denominator.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: 'Look at the spread of answer options first: If options are 12%, 19%, 28%, 35%, round numbers aggressively to 1 significant digit.',
    questionSelectionAdvice: 'In a 5-question DI set, answer the 3 simple reading/percentage questions first; leave the complex weighted-average calculation for last.',
    recruiterInsight: 'TCS NQT and Infosys test data interpretation sets where one question requires calculating growth and another requires finding the ratio of combined sums.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-di-e1',
        question: 'Sales of a product increased from 200 units in 2021 to 260 units in 2022. What is the percentage increase in sales?',
        options: ['25%', '30%', '35%', '20%'],
        correctAnswer: '30%',
        explanation: 'Percentage Increase = [(260 - 200) / 200] × 100% = (60 / 200) × 100% = 30%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-di-e2',
        question: 'The total production of 5 branches is 120, 140, 160, 180, and 200 units. What is the average production per branch?',
        options: ['150', '160', '170', '180'],
        correctAnswer: '160',
        explanation: 'Total = 120 + 140 + 160 + 180 + 200 = 800. Average = 800 / 5 = 160 units.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-di-e3',
        question: 'In a company of 800 employees, 35% work in Development, 25% in Testing, 20% in Marketing, and the rest in HR. How many employees work in HR?',
        options: ['120', '140', '160', '180'],
        correctAnswer: '160',
        explanation: 'HR % = 100% - (35% + 25% + 20%) = 100% - 80% = 20%. HR Employees = 20% of 800 = 160.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-di-e4',
        question: 'A bar chart shows exports of ₹450 Cr in 2022 and ₹540 Cr in 2023. What is the ratio of exports in 2022 to exports in 2023?',
        options: ['5 : 6', '4 : 5', '6 : 7', '3 : 4'],
        correctAnswer: '5 : 6',
        explanation: 'Ratio = 450 / 540 = 45 / 54 = 5 / 6 = 5 : 6.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-di-e5',
        question: 'If the total revenue in 2023 is ₹50 Lakhs and marketing expenditure is ₹12.5 Lakhs, what percentage of revenue was spent on marketing?',
        options: ['20%', '25%', '30%', '15%'],
        correctAnswer: '25%',
        explanation: 'Percentage = (12.5 / 50) × 100% = 1/4 × 100% = 25%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-di-e6',
        question: 'The sales of Company X in 2020, 2021, 2022 were 80, 100, 125. What was the percentage increase from 2020 to 2022?',
        options: ['45%', '50%', '56.25%', '60%'],
        correctAnswer: '56.25%',
        explanation: 'Increase = [(125 - 80) / 80] × 100% = (45 / 80) × 100% = (9 / 16) × 100% = 56.25%.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-di-i1',
        question: 'In a multi-year sales table: Product A sales grew from 240 Cr to 360 Cr; Product B grew from 150 Cr to 240 Cr; Product C grew from 80 Cr to 140 Cr. Which product had the highest percentage growth?',
        options: ['Product A', 'Product B', 'Product C', 'Product A and B are equal'],
        correctAnswer: 'Product C',
        explanation: 'Growth A = (120/240) × 100% = 50%. Growth B = (90/150) × 100% = 60%. Growth C = (60/80) × 100% = 75%. Product C has the highest percentage growth (75%).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-di-i2',
        question: 'A clustered bar chart shows Revenue and Expenditure for 4 years: 2020 (Rev 500, Exp 400), 2021 (Rev 650, Exp 500), 2022 (Rev 800, Exp 600), 2023 (Rev 950, Exp 700). In which year was the Profit Percentage [(Rev - Exp)/Exp × 100] the highest?',
        options: ['2020', '2021', '2022', '2023'],
        correctAnswer: '2023',
        explanation: 'Profit % 2020: 100/400 = 25%. 2021: 150/500 = 30%. 2022: 200/600 = 33.33%. 2023: 250/700 = 35.71%. Highest is 2023 (35.71%).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-di-i3',
        question: 'In a stacked bar chart representing total college expenditure of ₹80 Lakhs: Faculty Salary = 40%, Lab Equipment = 25%, Infrastructure = 20%, Administration = 15%. What is the difference between expenditure on Faculty Salary and Administration?',
        options: ['₹16 Lakhs', '₹20 Lakhs', '₹24 Lakhs', '₹28 Lakhs'],
        correctAnswer: '₹20 Lakhs',
        explanation: 'Difference in % = 40% - 15% = 25%. Amount = 25% of 80 Lakhs = 1/4 × 80 = ₹20 Lakhs.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-di-i4',
        question: 'A table shows student pass counts across 4 schools: School A (180 passed out of 200), School B (240 passed out of 300), School C (210 passed out of 250), School D (320 passed out of 400). Which school had the highest pass percentage?',
        options: ['School A', 'School B', 'School C', 'School D'],
        correctAnswer: 'School A',
        explanation: 'School A: 180/200 = 90%. School B: 240/300 = 80%. School C: 210/250 = 84%. School D: 320/400 = 80%. School A is highest (90%).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-di-i5',
        question: 'Sales of 4 zones (North, South, East, West) in 2023 were 450, 550, 350, 650 (in thousand units). South zone accounts for approximately what percentage of total sales?',
        options: ['22.5%', '27.5%', '30.0%', '25.0%'],
        correctAnswer: '27.5%',
        explanation: 'Total Sales = 450 + 550 + 350 + 650 = 2000. South zone % = (550 / 2000) × 100% = 55 / 2 = 27.5%.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-di-i6',
        question: 'If the average score of 40 boys is 72 and the average score of 60 girls is 78, what is the combined average score of the whole class?',
        options: ['74.4', '75.0', '75.6', '76.2'],
        correctAnswer: '75.6',
        explanation: 'Combined Average = [(40 × 72) + (60 × 78)] / (40 + 60) = (2880 + 4680) / 100 = 7560 / 100 = 75.6.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-di-a1',
        question: 'Annual sales of 5 branches (B1 to B5) across 2 years: Total 2022 = 450 thousand units; Total 2023 = 540 thousand units. If Branch B3 contributed 22% of total sales in 2022 and 25% of total sales in 2023, find the percentage growth in sales of Branch B3 from 2022 to 2023.',
        options: ['32.5%', '36.36%', '38.2%', '40.0%'],
        correctAnswer: '36.36%',
        explanation: 'B3 Sales 2022 = 0.22 × 450 = 99. B3 Sales 2023 = 0.25 × 540 = 135. Percentage Increase = [(135 - 99) / 99] × 100% = (36 / 99) × 100% = (4 / 11) × 100% = 36.36%.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-di-a2',
        question: 'In a company balance sheet, the ratio of Operating Expenses to Net Sales in 2021 was 0.72 and in 2022 was 0.64. If Net Sales increased by 25% from 2021 to 2022, what was the percentage change in Operating Expenses?',
        options: ['+11.11%', '+15.0%', '+18.5%', '+20.0%'],
        correctAnswer: '+11.11%',
        explanation: 'Let Net Sales 2021 = 100 => Operating Expenses 2021 = 72. Net Sales 2022 = 125. Operating Expenses 2022 = 0.64 × 125 = 80. Percentage change in Expenses = [(80 - 72) / 72] × 100% = (8 / 72) × 100% = 1/9 × 100% = +11.11%.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-di-a3',
        question: 'A table lists 4 software products with development cost and sales revenue: Product W: Cost 32 L, Rev 48 L; Product X: Cost 45 L, Rev 72 L; Product Y: Cost 60 L, Rev 93 L; Product Z: Cost 80 L, Rev 124 L. Which product generated the highest Return on Investment (ROI = Profit / Cost)?',
        options: ['Product W', 'Product X', 'Product Y', 'Product Z'],
        correctAnswer: 'Product X',
        explanation: 'ROI = (Rev - Cost) / Cost. W: (48-32)/32 = 16/32 = 50.0%. X: (72-45)/45 = 27/45 = 60.0%. Y: (93-60)/60 = 33/60 = 55.0%. Z: (124-80)/80 = 44/80 = 55.0%. Product X is highest (60%).',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-di-a4',
        question: 'Approximate the value of: (18,432 × 4,879) / (24,195 × 3,112). (A) 1.05 (B) 1.19 (C) 1.35 (D) 1.52',
        options: ['1.05', '1.19', '1.35', '1.52'],
        correctAnswer: '1.19',
        explanation: 'Round to 3 digits: (18.4 × 4.88) / (24.2 × 3.11). (18.4 / 24.2) ≈ 0.760. (4.88 / 3.11) ≈ 1.569. 0.760 × 1.569 ≈ 1.192. Matches Option (B) 1.19.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-di-a5',
        question: 'A table shows employee counts in 4 branches over 3 years. Total employees in 2021 = 1200; in 2022 = 1350; in 2023 = 1500. If Branch 1 consistently maintained exactly 30% of the total employee share each year, find the absolute increase in Branch 1 employees from 2021 to 2023.',
        options: ['75', '90', '105', '120'],
        correctAnswer: '90',
        explanation: 'Branch 1 in 2021 = 30% of 1200 = 360. Branch 1 in 2023 = 30% of 1500 = 450. Absolute increase = 450 - 360 = 90 employees.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-di-p1',
        question: 'In a corporate placement test table, total quarterly software exports of India were: Q1 = $32.4 B, Q2 = $36.0 B, Q3 = $38.8 B, Q4 = $43.2 B. What was the compounded growth in quarterly exports from Q1 to Q4?',
        options: ['30.0%', '33.33%', '35.0%', '37.5%'],
        correctAnswer: '33.33%',
        explanation: 'Growth = [(43.2 - 32.4) / 32.4] × 100% = (10.8 / 32.4) × 100% = (1 / 3) × 100% = 33.33%.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-di-p2',
        question: 'A bar chart displays the student placement counts of 4 colleges: College A = 480, College B = 640, College C = 560, College D = 720. What is the ratio of combined placements of Colleges A & C to Colleges B & D?',
        options: ['13 : 17', '12 : 17', '11 : 15', '13 : 16'],
        correctAnswer: '13 : 17',
        explanation: 'Placements A + C = 480 + 560 = 1040. Placements B + D = 640 + 720 = 1360. Ratio = 1040 / 1360 = 104 / 136 = 13 / 17 = 13 : 17.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-di-p3',
        question: 'In a recruitment drive dataset of 1200 candidates: 45% cleared Round 1; of those, 60% cleared Round 2; of those, 50% cleared Round 3. How many candidates received final offers?',
        options: ['144', '162', '180', '196'],
        correctAnswer: '162',
        explanation: 'Final Candidates = 1200 × 0.45 × 0.60 × 0.50 = 1200 × 0.135 = 162.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-di-p4',
        question: 'A table shows server downtime (in minutes) across 4 quarters: Q1=120, Q2=90, Q3=75, Q4=60. What was the percentage reduction in downtime from Q1 to Q4?',
        options: ['40%', '45%', '50%', '55%'],
        correctAnswer: '50%',
        explanation: 'Reduction % = [(120 - 60) / 120] × 100% = (60 / 120) × 100% = 50%.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-di-p5',
        question: 'Average revenue of 4 regional sales hubs in 2023 is ₹85 Lakhs. If the revenues of 3 hubs are ₹70 L, ₹95 L, and ₹80 L, what is the revenue of the 4th hub?',
        options: ['₹90 Lakhs', '₹95 Lakhs', '₹85 Lakhs', '₹100 Lakhs'],
        correctAnswer: '₹95 Lakhs',
        explanation: 'Total Revenue = 4 × 85 = 340 Lakhs. Sum of 3 hubs = 70 + 95 + 80 = 245 Lakhs. 4th Hub = 340 - 245 = ₹95 Lakhs.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-di-1',
      question: 'A stacked bar chart shows the revenue components of a tech startup in 2023: Subscriptions = ₹60 L, Consulting = ₹30 L, Advertising = ₹10 L. Total = ₹100 L. In 2024, Subscriptions grew by 25%, Consulting grew by 40%, and Advertising dropped by 50%. What was the overall percentage growth in total revenue?',
      options: ['+22%', '+24%', '+25%', '+26%'],
      correctAnswer: '+22%',
      explanation: '2024 Revenue: Sub = 60 × 1.25 = 75 L. Cons = 30 × 1.40 = 42 L. Adv = 10 × 0.50 = 5 L. Total 2024 = 75 + 42 + 5 = 122 L. Growth = [(122 - 100) / 100] × 100% = +22%.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-di-2',
      question: 'In a multi-product table: Sales of Product A was 40% of total company sales in 2022 and 35% of total company sales in 2023. If total company sales increased by 20% from 2022 to 2023, by what percentage did the sales of Product A change?',
      options: ['+5.0%', '+4.5%', '+5.5%', '+6.0%'],
      correctAnswer: '+5.0%',
      explanation: 'Let Total Sales 2022 = 100 => Product A 2022 = 40. Total Sales 2023 = 120 => Product A 2023 = 0.35 × 120 = 42. Percentage change in Product A = [(42 - 40) / 40] × 100% = (2 / 40) × 100% = +5.0%.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-di-3',
      question: 'If the ratio of boys to girls in College X is 3:2 and in College Y is 4:3, and College X has 500 students while College Y has 700 students, what is the combined ratio of boys to girls across both colleges?',
      options: ['7 : 5', '1 : 1', '35 : 25', '35 : 27'],
      correctAnswer: '7 : 5',
      explanation: 'College X (500): Boys = (3/5)×500 = 300, Girls = 200. College Y (700): Boys = (4/7)×700 = 400, Girls = 300. Combined Boys = 300 + 400 = 700. Combined Girls = 200 + 300 = 500. Combined Ratio = 700 : 500 = 7 : 5.',
      difficulty: 'Intermediate'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Perform a 10-second orientation scan on Title, Row/Column headers, and Units before reading questions.',
      'Percentage Growth = (Final - Initial) / Initial × 100%. Base value is ALWAYS the initial period.',
      'Compare fractions a/b and c/d by cross-multiplying: a·d vs b·c.',
      'Add multi-digit numbers from Left-to-Right (Hundreds, Tens, Units) to boost mental addition speed.',
      'In Ratio of Averages across equal categories, compute the Ratio of Totals directly.',
      'Use 10% and 1% base benchmarking to estimate percentages without long division.'
    ],
    quickFormulas: [
      'Growth %: [(V_final - V_initial) / V_initial] × 100%',
      'Cross Multiplication: a·d vs b·c',
      'Weighted Average: (∑ w_i · x_i) / (∑ w_i)',
      'Stacked Component: (Segment Height / Total Height) × 100%'
    ]
  },
  keyTakeaways: [
    'Never compute the entire table before reading the specific question; calculate on demand.',
    'Distinguish between Maximum Raw Increase and Maximum Percentage Increase.',
    'Use rounding to 2 significant digits when answer choices are well-separated.',
    'Always use weighted averages when combining group percentages with different sample sizes.',
    'Double-check units in headers (thousands, lakhs, crores) to avoid scale errors.'
  ],
  selfCheckQuestions: [
    'Can you calculate percentage increase mentally by finding 10% and 1% of the base?',
    'Can you compare two close fractions using cross-multiplication in under 15 seconds?',
    'Can you distinguish between grouped and stacked bar graphs and extract component percentages?',
    'Can you calculate combined weighted averages across groups with unequal sizes?',
    'Can you reconstruct missing values in a data grid using row and column totals?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Data Interpretation and Logical Reasoning (Arun Sharma)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 1: Tables, Bar Charts, and Rapid Calculation Techniques.'
    },
    {
      sourceName: 'TCS NQT Advanced Quantitative Ability Framework',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Multi-variable data tables, percentage growth comparisons, and grouped charts.'
    },
    {
      sourceName: 'Infosys Data Interpretation Competency Benchmark',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Stacked bar components, ratio of averages, and approximation triage.'
    }
  ]
};
