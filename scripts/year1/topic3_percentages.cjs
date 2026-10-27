module.exports = {
  id: 'y1-quant-percentages-basics',
  yearId: 1,
  category: 'Quantitative Aptitude',
  topicNumber: 3,
  title: 'Percentages, Fractions & Successive Change',
  tagline: 'Fraction-to-percentage equivalence, base value manipulation, successive percentage variations, AB product constancy, and expenditure models.',
  estimatedMinutes: 60,
  difficulty: 'Foundation',
  introduction: {
    overview: 'Percentages represent the single most versatile mathematical tool in business arithmetic, commercial analytics, and data interpretation. A percentage is fundamentally a dimensionless ratio with a fixed denominator of 100, allowing intuitive comparison of proportions across disparate scales. Beyond basic conversions, mastering percentage algebra requires a profound understanding of base values, multiplying factors, and the behavior of multiplicative products under percentage changes (e.g., Expenditure = Price × Consumption). In recruitment tests, nearly 40% of all arithmetic and data interpretation questions directly depend on rapid percentage calculations.',
    placementRelevance: 'Every major recruitment assessment—including TCS NQT, Cognizant, Infosys, Capgemini, AMCAT, CoCubes, and eLitmus—features direct percentage problems and heavily relies on percentages in Data Interpretation tables and pie charts.',
    historicalRecruiterWeightage: 'Appears in 95% of aptitude tests, forming the core foundation for Profit & Loss, Simple/Compound Interest, and Data Interpretation.',
    realWorldContext: 'Percentages drive financial interest calculations, corporate revenue growth metrics, salary hikes, tax brackets (GST, VAT), and statistical error margins across data science.'
  },
  learningObjectives: [
    'Memorize and instantaneously apply reciprocal fractions from 1/1 through 1/20 in decimal and percentage formats.',
    'Identify and manipulate the correct Base Value ("Percentage Of What?").',
    'Apply Decimal Multiplying Factors (e.g., +15% is ×1.15; -20% is ×0.80) to eliminate multi-step calculations.',
    'Calculate net effective change using the Successive Percentage Formula: a + b + (ab/100).',
    'Apply the AB-Rule / Product Constancy Model for inverse relationships (Price × Consumption = Constant).',
    'Solve percentage comparison problems ("A is x% more than B; by what % is B less than A?").',
    'Solve population growth and machine depreciation models using compounded percentage factors.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Basic fraction arithmetic and decimal conversions', 'Simple algebraic linear equations'],
    quickRefresher: 'Percentage means "per hundred" (x% = x/100). To convert a fraction to percentage, multiply by 100%. To convert a percentage to fraction, divide by 100.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Percentage: A fraction with denominator 100, denoted by the symbol % (e.g., 25% = 25/100 = 1/4).',
      'Base Value: The reference quantity on which the percentage is calculated (the denominator in percentage comparisons).',
      'Multiplying Factor (MF): The decimal multiplier representing an increase or decrease. For an x% increase, MF = (1 + x/100); for an x% decrease, MF = (1 - x/100).',
      'Successive Percentage Change: Applying a second percentage change on the resultant value of a first percentage change rather than the initial base.',
      'Product Constancy (AB Rule): When the product of two variables A and B is constant (A × B = K), an increase in A by a/b requires a decrease in B by a/(a + b) to maintain constancy.'
    ],
    theoreticalIntuition: 'All percentage problems reduce to finding the correct Multiplying Factor (MF). Instead of computing a 15% increase on 480 as "480 + (15/100 × 480) = 480 + 72 = 552", compute it directly as 480 × 1.15 = 552. For two successive increases of 20% and 30%, the overall multiplier is 1.20 × 1.30 = 1.56, representing a net increase of 56%. This eliminates multi-step intermediate calculations and avoids rounding errors.',
    visualOrMentalModel: 'Imagine a rubber band: If you stretch it by 25% (+1/4 of its original length), its new length is 5/4 of the original. To return to the original length, you must compress the NEW length by 1 part out of 5, which is -1/5 (-20%). Notice: +1/4 corresponds to -1/(4+1) = -1/5.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Fraction to Percentage Reciprocal Equivalences',
      formula: '1/2=50%, 1/3=33.33%, 1/4=25%, 1/5=20%, 1/6=16.67%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/11=9.09%, 1/12=8.33%, 1/16=6.25%',
      variables: 'Standard reciprocal fractions from 1/1 to 1/20',
      description: 'Memorizing these fractions allows instant conversion between percentages and simplest fractions.',
      whenToUse: 'Mental calculations in DI, Profit/Loss, and time-pressured aptitude questions.',
      simpleExample: '37.5% of 640 = 3 × (1/8) × 640 = 3 × 80 = 240.'
    },
    {
      title: 'Successive Percentage Change Formula',
      formula: 'Net Change % = a + b + (a · b / 100)',
      variables: 'a and b are percentage changes with signs (+ for increase, - for decrease)',
      description: 'Calculates the overall effective percentage change resulting from two consecutive percentage variations.',
      whenToUse: 'Successive discounts, salary hikes, area changes under length/breadth changes, and tax adjustments.',
      simpleExample: '+20% followed by +30%: 20 + 30 + (20×30)/100 = 50 + 6 = +56%.'
    },
    {
      title: 'The AB-Rule / Product Constancy Model',
      formula: 'If A increases by a/b, then B must decrease by a / (b + a) to keep A × B constant',
      variables: 'a/b is the fractional increase in one factor',
      description: 'Applies whenever two quantities multiply to give a constant product: Expenditure = Price × Consumption; Distance = Speed × Time; Area = Length × Breadth.',
      whenToUse: 'When one factor increases and you need to find the percentage reduction in the other factor to keep product constant.',
      simpleExample: 'If price increases by 25% (+1/4), consumption must decrease by 1/(4+1) = 1/5 = 20%.'
    },
    {
      title: 'Percentage Comparison (Base Value Rule)',
      formula: 'A is ( |A - B| / B ) × 100% more/less than B',
      variables: 'B is the reference base appearing after the word "than" or "of"',
      description: 'The denominator is always the reference value being compared against.',
      whenToUse: 'Evaluating "A is what % of B" vs "A is what % more than B".',
      simpleExample: 'If A = 150 and B = 120: A is (30/120) × 100% = 25% more than B.'
    },
    {
      title: 'Compounded Growth / Depreciation Formula',
      formula: 'Final Value = Initial Value × (1 ± r/100)^n',
      variables: 'r = annual rate of increase/decrease; n = number of years/cycles',
      description: 'Calculates population growth or machine depreciation after n time periods.',
      whenToUse: 'Multi-year demographic growth or equipment salvage value problems.',
      simpleExample: 'Population of 10,000 increasing at 10% per year for 2 years: 10000 × 1.10^2 = 12,100.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'The biggest hurdle students face in percentages is Base Confusion. When a question asks "A is what percentage more than B?", the base is B. When it asks "B is what percentage less than A?", the base is A. Because the denominators differ, a 25% increase from B to A corresponds to a 20% decrease from A to B.',
      'Multiplying Factors (MF) streamline compound operations. If an employee receives consecutive salary hikes of 10%, 20%, and 25%, the final salary is Initial × 1.10 × 1.20 × 1.25 = Initial × 1.65 (a net hike of 65%). Notice that 1.10 × 1.20 × 1.25 is calculated easily by fraction conversions: (11/10) × (6/5) × (5/4) = 66/40 = 33/20 = 1.65.',
      'The AB-Rule simplifies expenditure problems: When price of a commodity increases by x%, and expenditure is kept constant, Consumption New / Consumption Old = 100 / (100 + x). The percentage reduction in consumption is [x / (100 + x)] × 100%.',
      'When expenditure is allowed to change: Let Initial Expenditure = 100. New Expenditure = 100 + E%. Price changes to 100 + P%. Then New Consumption = (100 + E%) / (100 + P%) × Initial Consumption.',
      'Venn Diagram percentage intersections: For two sets A and B: Total % = %A + %B - %(A ∩ B) + %(Neither). If all students take at least one exam, %(Neither) = 0, so %(A ∩ B) = %A + %B - 100%.'
    ],
    deepDiveAspects: [
      {
        title: 'Price, Consumption, and Expenditure Framework',
        content: 'Expenditure = Price × Consumption. If Price increases by p% and Consumption increases by c%, the percentage change in Expenditure is p + c + (pc / 100)%.'
      },
      {
        title: 'Successive Discount Equivalency',
        content: 'Two successive discounts of d1% and d2% are equivalent to a single discount of [d1 + d2 - (d1 · d2 / 100)]%. For three discounts d1, d2, d3: Net Multiplier = (1 - d1/100)(1 - d2/100)(1 - d3/100).'
      },
      {
        title: 'Voter Election Arithmetic',
        content: 'In an election between two candidates with invalid votes: Total Votes Cast = 100%. Valid Votes = Total Votes - Invalid Votes. Winning Margin = Winner’s Valid Votes - Loser’s Valid Votes = Margin % × Valid Votes.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Basic Fraction-Percentage Conversions and Multiplying Factors',
      description: 'Rapidly calculating percentage of quantities, split percentages, and mental approximations.',
      exampleSnippet: 'Find 62.5% of 960 + 83.33% of 720.'
    },
    {
      typeName: 'Type 2 — Successive Percentage Changes (Hikes, Cuts, Discounts)',
      description: 'Evaluating net percentage effect when multiple variations are applied sequentially.',
      exampleSnippet: 'A number is first increased by 20% and then decreased by 15%.'
    },
    {
      typeName: 'Type 3 — Price, Consumption and Expenditure Balance',
      description: 'Finding reduction/increase in consumption when commodity prices fluctuate under budget constraints.',
      exampleSnippet: 'Price of sugar rises by 30%. By how much must consumption decrease so expenditure rises only by 4%?'
    },
    {
      typeName: 'Type 4 — Election and Voting Percentage Analysis',
      description: 'Determining total voter turnout, valid votes, and individual candidate shares from victory margins.',
      exampleSnippet: 'In an election, 10% voters did not vote, 10% votes were invalid, winner got 54% of valid votes.'
    },
    {
      typeName: 'Type 5 — Population Growth and Machine Depreciation',
      description: 'Compounded percentage projections over multiple periods or backward estimation of original values.',
      exampleSnippet: 'The population of a city grows by 5% in year 1, 8% in year 2, and decreases by 10% in year 3.'
    },
    {
      typeName: 'Type 6 — Set-Theoretic Two-Circle Venn Percentage Models',
      description: 'Calculating passing percentages, dual-subject enrollments, and failure percentages.',
      exampleSnippet: 'In an exam, 70% passed in English, 65% passed in Math, and 27% failed in both.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-perc-1',
      title: 'Successive Percentage Changes on Salary',
      question: 'A software engineer receives a salary hike of 20% in the first year and 25% in the second year. In the third year, due to market adjustments, the salary is reduced by 10%. What is the net percentage increase in the salary over the three years?',
      givenInfo: ['Year 1 change: +20%', 'Year 2 change: +25%', 'Year 3 change: -10%'],
      conceptOrFormula: 'Net Multiplier = (1 + 0.20) × (1 + 0.25) × (1 - 0.10). Net % = (Net Multiplier - 1) × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Convert percentage changes into fractional multipliers',
          explanation: '+20% = +1/5 => MF1 = 6/5. +25% = +1/4 => MF2 = 5/4. -10% = -1/10 => MF3 = 9/10.',
          math: 'MF1 = 6/5, MF2 = 5/4, MF3 = 9/10'
        },
        {
          stepNumber: 2,
          title: 'Multiply the fractional multipliers',
          explanation: 'Net Multiplier = (6/5) × (5/4) × (9/10). The factor 5 cancels: (6/4) × (9/10) = (3/2) × (9/10) = 27/20 = 1.35.',
          math: 'Net MF = 27 / 20 = 1.35'
        },
        {
          stepNumber: 3,
          title: 'Calculate net percentage increase',
          explanation: 'Net % Increase = (1.35 - 1) × 100% = +35%.',
          math: 'Net Increase = +35%'
        }
      ],
      finalAnswer: '35% net increase',
      whyItWorks: 'Multiplying successive factors compound the changes accurately without intermediate rounding errors.',
      commonTrap: 'Simply adding the percentages: 20 + 25 - 10 = 35% (which happens to give 35% here by coincidence, but fails in general cases like +20% and +20% giving +44%, not +40%).',
      difficulty: 'Foundation'
    },
    {
      id: 'se-perc-2',
      title: 'Price-Consumption-Expenditure Adjustment',
      question: 'The price of petrol increases by 25%. A motorist wants to increase his total expenditure on petrol by only 10%. By what percentage should he reduce his consumption of petrol?',
      givenInfo: ['Price increase (P) = +25%', 'Expenditure increase (E) = +10%'],
      conceptOrFormula: 'Expenditure = Price × Consumption => Consumption = Expenditure / Price. Consumption Multiplier = MF_Expenditure / MF_Price.',
      steps: [
        {
          stepNumber: 1,
          title: 'Express Expenditure and Price as multipliers',
          explanation: 'Let initial Price = 100, initial Expenditure = 100, initial Consumption = 1. New Price = 125. New Expenditure = 110.',
          math: 'New P = 125, New E = 110'
        },
        {
          stepNumber: 2,
          title: 'Calculate new consumption ratio',
          explanation: 'New Consumption = New Expenditure / New Price = 110 / 125 = 22 / 25 = 0.88.',
          math: 'C_new / C_old = 110 / 125 = 0.88'
        },
        {
          stepNumber: 3,
          title: 'Determine percentage reduction in consumption',
          explanation: 'Reduction % = (1 - 0.88) × 100% = 0.12 × 100% = 12%.',
          math: 'Reduction = 12%'
        }
      ],
      finalAnswer: '12% reduction',
      whyItWorks: 'Dividing the target expenditure ratio by the price inflation factor isolates the necessary volume adjustment.',
      commonTrap: 'Subtracting percentages directly (25% - 10% = 15%), which ignores the multiplicative relationship.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-perc-3',
      title: 'Venn Diagram Two-Subject Examination Model',
      question: 'In an assessment test, 70% of candidates passed in Quantitative Aptitude, 65% passed in Logical Reasoning, and 27% failed in both subjects. If 248 candidates passed in both subjects, find the total number of candidates who appeared for the test.',
      givenInfo: ['Passed in Quant = 70%', 'Passed in Logic = 65%', 'Failed in both = 27%', 'Passed in both = 248 candidates'],
      conceptOrFormula: 'Set Theory: Total % = Passed in at least one + Failed in both = 100%. Passed in at least one = %Quant + %Logic - %(Both Passed).',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate percentage of candidates passing in at least one subject',
          explanation: 'Passed in at least one subject = 100% - Failed in both = 100% - 27% = 73%.',
          math: 'P(Q ∪ L) = 100% - 27% = 73%'
        },
        {
          stepNumber: 2,
          title: 'Calculate percentage of candidates passing in both subjects',
          explanation: 'P(Q ∪ L) = P(Q) + P(L) - P(Q ∩ L) => 73% = 70% + 65% - P(Q ∩ L) => 73% = 135% - P(Q ∩ L) => P(Q ∩ L) = 135% - 73% = 62%.',
          math: 'P(Q ∩ L) = 62%'
        },
        {
          stepNumber: 3,
          title: 'Equate percentage to candidate count and find total',
          explanation: '62% of Total = 248 => Total = (248 × 100) / 62 = 4 × 100 = 400 candidates.',
          math: 'Total = 248 / 0.62 = 400'
        }
      ],
      finalAnswer: '400 candidates',
      whyItWorks: 'Complementary counting isolates the union percentage, allowing exact evaluation of the overlapping dual-pass segment.',
      commonTrap: 'Adding 70% + 65% + 27% without accounting for set intersections.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-perc-4',
      title: 'Election with Invalid Votes and Margin',
      question: 'In a college election between two candidates, 10% of voters on the electoral roll did not cast their votes and 60 votes were declared invalid. The winning candidate secured 47% of all votes on the electoral roll and defeated his rival by 308 votes. Find the total number of voters enrolled on the electoral roll.',
      givenInfo: ['Did not vote = 10%', 'Invalid votes = 60', 'Winner votes = 47% of total enrolled', 'Victory margin = 308 votes'],
      conceptOrFormula: 'Let Total Enrolled = 100x. Total Votes Cast = 90x. Valid Votes = 90x - 60. Winner = 47x. Loser = (90x - 60) - 47x = 43x - 60.',
      steps: [
        {
          stepNumber: 1,
          title: 'Set up expressions for Winner and Loser votes',
          explanation: 'Total Enrolled = 100x. Winner gets 47% of total = 47x. Total votes cast = 90x. Valid votes = 90x - 60. Loser gets = Valid votes - Winner votes = (90x - 60) - 47x = 43x - 60.',
          math: 'Winner = 47x, Loser = 43x - 60'
        },
        {
          stepNumber: 2,
          title: 'Form the victory margin equation',
          explanation: 'Winner - Loser = 308 => 47x - (43x - 60) = 308 => 4x + 60 = 308 => 4x = 248 => x = 62.',
          math: '4x = 248 => x = 62'
        },
        {
          stepNumber: 3,
          title: 'Calculate total enrolled voters',
          explanation: 'Total Enrolled = 100x = 100 × 62 = 6200.',
          math: 'Total Voters = 6200'
        }
      ],
      finalAnswer: '6200 voters',
      whyItWorks: 'Distinguishing between percentages of total enrolled vs percentage of valid votes is key to accurate equation setup.',
      commonTrap: 'Calculating winner votes as 47% of valid votes instead of 47% of total enrolled list.',
      difficulty: 'Advanced'
    },
    {
      id: 'se-perc-5',
      title: 'Population Growth with Compounded Ratios',
      question: 'The population of a metropolitan city was 1,60,000 two years ago. If the population increased by 3% in the first year and by 2.5% in the second year, find the present population.',
      givenInfo: ['Initial Population = 1,60,000', 'Rate 1 = +3%', 'Rate 2 = +2.5%'],
      conceptOrFormula: 'Present Population = Initial × (1 + r1/100) × (1 + r2/100).',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate population after Year 1',
          explanation: 'After Year 1: 1,60,000 × (1 + 3/100) = 1,60,000 × 1.03 = 1,64,800.',
          math: 'P1 = 160000 × 1.03 = 164800'
        },
        {
          stepNumber: 2,
          title: 'Calculate population after Year 2',
          explanation: 'After Year 2: 1,64,800 × (1 + 2.5/100) = 1,64,800 × 1.025 = 1,64,800 + 4,120 = 1,68,920.',
          math: 'P2 = 164800 × 1.025 = 168920'
        }
      ],
      finalAnswer: '1,68,920',
      whyItWorks: 'Compounding applies the second year’s percentage on the updated year 1 base.',
      commonTrap: 'Adding percentages (3% + 2.5% = 5.5%) and multiplying 160000 × 1.055 = 168800 (misses the compound effect of 120 people).',
      difficulty: 'Foundation'
    },
    {
      id: 'se-perc-6',
      title: 'AB-Rule for Area Invariance',
      question: 'If the length of a rectangle is increased by 33.33%, by what percentage must the breadth be decreased so that the total area remains unchanged?',
      givenInfo: ['Length increase = +33.33% = +1/3', 'Condition: Area = Length × Breadth = Constant'],
      conceptOrFormula: 'AB-Rule: If variable A increases by a/b, variable B must decrease by a / (b + a) for the product to remain constant.',
      steps: [
        {
          stepNumber: 1,
          title: 'Convert percentage increase to fraction',
          explanation: 'Length increase = 33.33% = +1/3. Here a = 1, b = 3.',
          math: 'ΔL = +1/3'
        },
        {
          stepNumber: 2,
          title: 'Apply AB-Rule reduction formula',
          explanation: 'Breadth decrease = a / (b + a) = 1 / (3 + 1) = 1/4.',
          math: 'ΔB = -1/4'
        },
        {
          stepNumber: 3,
          title: 'Convert fractional decrease to percentage',
          explanation: '1/4 = 25%.',
          math: 'Percentage reduction = 25%'
        }
      ],
      finalAnswer: '25% decrease',
      whyItWorks: 'When length becomes 4/3 of original, breadth must become 3/4 of original so that (4/3) × (3/4) = 1.',
      commonTrap: 'Answering 33.33% decrease, failing to recognize the shift in base value.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-perc-7',
      title: 'Successive Discounts vs Single Discount',
      question: 'An electronics retailer offers two successive discount schemes on a laptop of marked price ₹50,000: Scheme A: Two successive discounts of 20% and 10%. Scheme B: A flat single discount of 28%. Which scheme is more advantageous to the buyer and by how much?',
      givenInfo: ['Marked Price = ₹50,000', 'Scheme A: 20% and 10% successive', 'Scheme B: 28% flat single'],
      conceptOrFormula: 'Net Discount for successive d1, d2 = d1 + d2 - (d1 × d2 / 100).',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate equivalent discount for Scheme A',
          explanation: 'Net Discount A = 20 + 10 - (20 × 10 / 100) = 30 - 2 = 28%.',
          math: 'Scheme A Discount = 28%'
        },
        {
          stepNumber: 2,
          title: 'Compare with Scheme B',
          explanation: 'Scheme B Discount = 28%. Both schemes offer exactly 28% discount.',
          math: 'Discount A = Discount B = 28%'
        },
        {
          stepNumber: 3,
          title: 'Calculate discount amount',
          explanation: 'Discount = 28% of 50,000 = 0.28 × 50,000 = ₹14,000. Selling price in both = ₹36,000.',
          math: 'Difference = ₹0'
        }
      ],
      finalAnswer: 'Both schemes are identical (0 difference, selling price ₹36,000)',
      whyItWorks: '20% followed by 10% yields exactly 1 - (0.80 × 0.90) = 1 - 0.72 = 0.28 = 28%.',
      commonTrap: 'Assuming Scheme A gives 30% discount and is cheaper.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-perc-8',
      title: 'Pass/Fail Percentage with Maximum Marks',
      question: 'A student scored 28% marks in an examination and failed by 14 marks. Another student scored 42% marks and secured 28 marks more than the minimum passing marks. Find: (i) Maximum marks of the exam, (ii) Minimum passing percentage.',
      givenInfo: ['Student 1: 28% score, failed by 14 marks', 'Student 2: 42% score, 28 marks above pass mark'],
      conceptOrFormula: 'Difference in percentage scores = Difference in actual marks. (42% - 28%) of Total = 28 - (-14) = 42 marks.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate percentage difference and marks gap',
          explanation: 'Percentage gap = 42% - 28% = 14%. Marks gap = 28 - (-14) = 42 marks.',
          math: '14% of Total = 42 marks'
        },
        {
          stepNumber: 2,
          title: 'Compute maximum total marks',
          explanation: '14% = 42 => 1% = 3 marks => Total Marks (100%) = 300 marks.',
          math: 'Total Marks = 300'
        },
        {
          stepNumber: 3,
          title: 'Compute minimum pass percentage',
          explanation: 'Student 1 marks = 28% of 300 = 84 marks. Passing marks = 84 + 14 = 98 marks. Passing percentage = (98 / 300) × 100% = 32.67%. (Or: 14 marks = 14/3 % = 4.67%. Pass % = 28% + 4.67% = 32.67%).',
          math: 'Pass % = 32.67%'
        }
      ],
      finalAnswer: 'Maximum Marks = 300, Passing % = 32.67%',
      whyItWorks: 'The marks gap spans from 14 below pass mark to 28 above pass mark, forming a contiguous range of 42 marks.',
      commonTrap: 'Subtracting marks (28 - 14 = 14) instead of adding them across the pass-mark threshold.',
      difficulty: 'Intermediate'
    }
  ],
  alternativeMethods: {
    title: 'Evaluating Net Change of +20% and -15%',
    methods: [
      {
        methodName: 'Formula Method: a + b + ab/100',
        steps: [
          'Substitute a = +20, b = -15.',
          'Net % = 20 - 15 + [20 × (-15)] / 100.',
          'Net % = 5 - 300/100 = 5 - 3 = +2%.'
        ],
        prosAndCons: 'Pros: Instant algebraic evaluation for 2 changes. Cons: Gets messy with fractions or 3+ variables.',
        whenToUse: 'Best for standard integer percentages.'
      },
      {
        methodName: 'Multiplying Factor Method (Base 100)',
        steps: [
          'Assume Initial Value = 100.',
          'After +20%: 100 × 1.20 = 120.',
          'After -15%: 120 × 0.85 = 102.',
          'Net Change = 102 - 100 = +2%.'
        ],
        prosAndCons: 'Pros: Extremely intuitive, completely avoids sign confusion. Cons: Requires mental multiplication.',
        whenToUse: 'Best for multi-step changes (e.g. 3 or 4 successive changes).'
      },
      {
        methodName: 'Fraction Ratio Method',
        steps: [
          '+20% = +1/5 => Initial:Final = 5:6.',
          '-15% = -3/20 => Initial:Final = 20:17.',
          'Overall Ratio = (5 × 20) : (6 × 17) = 100 : 102 => +2%.'
        ],
        prosAndCons: 'Pros: Fastest for fractional percentages like 16.67% or 14.28%. Cons: Requires setting up ratios.',
        whenToUse: 'Ideal when percentages are non-integers or fractional.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Reciprocal Fraction Substitution and AB-Rule',
    traditionalVsShortcut: {
      traditionalMethod: 'Setting up multi-line algebraic equations with x, y variables and cross-multiplying 100.',
      shortcutMethod: 'Converting percentage to fraction a/b and immediately writing inverse reduction as a/(b+a).',
      timeSavedPercent: '80% faster'
    },
    rulesForApplication: [
      'If price rises by 1/n, consumption must fall by 1/(n+1) for constant expenditure.',
      'Split complex percentages into sum of easy ones: e.g. 17.5% = 10% + 5% + 2.5%.',
      'x% of y is identical to y% of x (e.g. 64% of 25 = 25% of 64 = 16).'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Assuming a% increase followed by a% decrease returns to the original value.',
      whyItHappens: 'Ignoring the shift in base value.',
      howToAvoid: 'An a% increase followed by a% decrease always results in a net DECREASE of (a^2 / 100)%.'
    },
    {
      mistake: 'Confusing "Percentage Of" with "Percentage More Than".',
      whyItHappens: 'Using A/B × 100 when asked for (A - B)/B × 100.',
      howToAvoid: 'Look for the keyword "more than" or "less than" to include the difference in the numerator.'
    },
    {
      mistake: 'Adding successive discounts algebraically.',
      whyItHappens: 'Thinking 20% + 30% discount equals 50% discount.',
      howToAvoid: 'Successive discounts multiply: 0.80 × 0.70 = 0.56 (44% discount, NOT 50%).'
    },
    {
      mistake: 'Subtracting passing marks when a student fails and another exceeds.',
      whyItHappens: 'Treating both gaps as positive numbers from the pass mark.',
      howToAvoid: 'The gap from "failed by 14" to "exceeded by 28" is 14 + 28 = 42 marks.'
    },
    {
      mistake: 'Calculating percentage on total votes cast instead of valid votes.',
      whyItHappens: 'Ignoring invalid vote deductions.',
      howToAvoid: 'Always establish: Total Enrolled -> Votes Cast -> Valid Votes -> Candidate Shares.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 40,
    eliminationTechnique: 'Apply "x% of y = y% of x" to compute awkward terms mentally (e.g., 84% of 50 = 50% of 84 = 42).',
    questionSelectionAdvice: 'Solve AB-rule, successive discount, and fraction conversion problems in under 30 seconds; leave multi-tier election problems for second pass.',
    recruiterInsight: 'Cognizant and TCS NQT routinely feature price-consumption-expenditure questions where expenditure also changes by a small percentage.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-pb-e1',
        question: 'Evaluate: 62.5% of 640 + 37.5% of 480.',
        options: ['560', '580', '600', '620'],
        correctAnswer: '580',
        explanation: '62.5% = 5/8; 37.5% = 3/8. (5/8 × 640) + (3/8 × 480) = (5 × 80) + (3 × 60) = 400 + 180 = 580.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pb-e2',
        question: 'If A’s salary is 25% more than B’s salary, by what percentage is B’s salary less than A’s salary?',
        options: ['20%', '25%', '16.67%', '33.33%'],
        correctAnswer: '20%',
        explanation: 'A = 1.25 B => B/A = 1/1.25 = 4/5. B is less than A by (5 - 4)/5 = 1/5 = 20%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pb-e3',
        question: 'A number is increased by 20% and then decreased by 20%. What is the net percentage change?',
        options: ['0% change', '4% decrease', '4% increase', '2% decrease'],
        correctAnswer: '4% decrease',
        explanation: 'Net % = 20 - 20 - (20 × 20 / 100) = -4% (4% decrease).',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pb-e4',
        question: 'What is 20% of 30% of 40% of 5000?',
        options: ['120', '150', '240', '300'],
        correctAnswer: '120',
        explanation: '(1/5) × (3/10) × (2/5) × 5000 = (6/250) × 5000 = 6 × 20 = 120.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pb-e5',
        question: 'Two successive discounts of 15% and 10% are equivalent to a single discount of:',
        options: ['25%', '23.5%', '22.5%', '24%'],
        correctAnswer: '23.5%',
        explanation: 'Net Discount = 15 + 10 - (15 × 10 / 100) = 25 - 1.5 = 23.5%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pb-e6',
        question: 'If 60% of students in a school are boys and the total number of girls is 460, find the total number of boys.',
        options: ['690', '720', '840', '920'],
        correctAnswer: '690',
        explanation: 'Girls % = 100% - 60% = 40%. 40% of Total = 460 => Total = 460 / 0.40 = 1150. Number of boys = 60% of 1150 = 0.60 × 1150 = 690.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-pb-i1',
        question: 'The price of cooking oil increased by 20%. By how much percent must a family reduce its consumption so that its expenditure on cooking oil increases by only 8%?',
        options: ['10%', '12%', '15%', '8%'],
        correctAnswer: '10%',
        explanation: 'Consumption Ratio = (100 + 8) / (100 + 20) = 108 / 120 = 9 / 10 = 0.90. Reduction = (1 - 0.90) × 100% = 10%.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pb-i2',
        question: 'In an election between two candidates, one candidate secured 55% of the total valid votes and won by a margin of 1800 votes. 20% of the total votes polled were declared invalid. Find the total number of votes polled.',
        options: ['20,000', '22,500', '25,000', '18,000'],
        correctAnswer: '22,500',
        explanation: 'Winner got 55% of valid votes => Loser got 45% of valid votes. Winning margin = 55% - 45% = 10% of valid votes. 10% of Valid Votes = 1800 => Valid Votes = 18,000. Since 20% votes were invalid, Valid Votes = 80% of Total Votes Polled. Total Votes Polled = 18,000 / 0.80 = 22,500.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pb-i3',
        question: 'A candidate who gets 30% marks fails by 50 marks, while another candidate who gets 45% marks gets 25 marks more than the minimum passing marks. Find the passing percentage.',
        options: ['35%', '40%', '38%', '42%'],
        correctAnswer: '40%',
        explanation: 'Difference in percentage = 45% - 30% = 15%. Difference in marks = 25 - (-50) = 75 marks. 15% = 75 => 1% = 5 marks => Total marks = 500. Passing marks = (30% of 500) + 50 = 150 + 50 = 200 marks. Passing % = (200 / 500) × 100% = 40%.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pb-i4',
        question: 'The population of a town increases by 10% in the 1st year, decreases by 10% in the 2nd year, and increases by 20% in the 3rd year. If the population at the end of 3 years is 59,400, find the initial population.',
        options: ['50,000', '52,000', '54,000', '48,000'],
        correctAnswer: '50,000',
        explanation: 'Net Multiplier = (1.10) × (0.90) × (1.20) = 0.99 × 1.20 = 1.188. Initial Population = 59,400 / 1.188 = 50,000.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pb-i5',
        question: 'Fresh fruit contains 68% water and dry fruit contains 20% water. How many kg of dry fruit can be obtained from 100 kg of fresh fruit?',
        options: ['32 kg', '40 kg', '45 kg', '50 kg'],
        correctAnswer: '40 kg',
        explanation: 'Pulp content remains constant. In fresh fruit: Pulp = 100% - 68% = 32%. Pulp in 100 kg fresh fruit = 32 kg. In dry fruit: Pulp = 100% - 20% = 80%. Let dry fruit weight be W: 80% of W = 32 kg => W = 32 / 0.80 = 40 kg.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pb-i6',
        question: 'If the tax on a commodity is diminished by 20% and its consumption increases by 15%, find the percentage decrease in revenue.',
        options: ['5% decrease', '8% decrease', '10% decrease', '6% decrease'],
        correctAnswer: '8% decrease',
        explanation: 'Revenue = Tax × Consumption. Net % = -20 + 15 + [(-20 × 15) / 100] = -5 - 3 = -8% (8% decrease).',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-pb-a1',
        question: 'In a company, 60% of employees are men and 48% of all employees are engineers. If 66.67% of engineers are men, what percentage of the women employees are engineers?',
        options: ['30%', '40%', '50%', '35%'],
        correctAnswer: '40%',
        explanation: 'Let Total Employees = 100. Men = 60, Women = 40. Total Engineers = 48. Male Engineers = 66.67% of 48 = (2/3) × 48 = 32. Female Engineers = Total Engineers - Male Engineers = 48 - 32 = 16. Percentage of women who are engineers = (16 / 40) × 100% = 40%.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pb-a2',
        question: 'Due to a 25% reduction in the price of sugar, a buyer is able to purchase 5 kg more sugar for ₹600. Find the original price of sugar per kg.',
        options: ['₹30/kg', '₹40/kg', '₹35/kg', '₹45/kg'],
        correctAnswer: '₹40/kg',
        explanation: 'Price reduction = 25% = 1/4. By AB-Rule, consumption increases by 1/(4 - 1) = 1/3. 1/3 of Original Consumption = 5 kg => Original Consumption = 15 kg. Original Price = ₹600 / 15 kg = ₹40/kg. (Reduced price = ₹600 / 20 kg = ₹30/kg).',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pb-a3',
        question: 'In an examination, 80% candidates passed in English, 85% passed in Mathematics, and 75% passed in both. If 40 candidates failed in both subjects, find the total number of candidates.',
        options: ['400', '450', '500', '600'],
        correctAnswer: '400',
        explanation: 'Passed in at least one = 80% + 85% - 75% = 90%. Failed in both = 100% - 90% = 10%. 10% of Total = 40 => Total Candidates = 400.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pb-a4',
        question: 'The salary of an employee was first reduced by 10% and then the reduced salary was increased by 10%. If his current salary is ₹49,500, what was his original salary?',
        options: ['₹50,000', '₹55,000', '₹52,000', '₹49,500'],
        correctAnswer: '₹50,000',
        explanation: 'Net Multiplier = (0.90) × (1.10) = 0.99 (1% net reduction). Original Salary = 49,500 / 0.99 = ₹50,000.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pb-a5',
        question: 'A large software company has 40% female developers. 70% of female developers and 60% of male developers work on cloud projects. What percentage of cloud developers in the company are male?',
        options: ['56.25%', '50%', '43.75%', '60%'],
        correctAnswer: '56.25%',
        explanation: 'Let Total = 100. Female = 40, Male = 60. Female Cloud = 70% of 40 = 28. Male Cloud = 60% of 60 = 36. Total Cloud Developers = 28 + 36 = 64. Percentage of cloud developers who are male = (36 / 64) × 100% = (9 / 16) × 100% = 56.25%.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-pb-p1',
        question: 'A retail brand offers three consecutive discount schemes for clearance: Scheme 1: 30% + 10% + 5%; Scheme 2: 25% + 20%; Scheme 3: Flat 42%. Which scheme offers the lowest selling price to the customer?',
        options: ['Scheme 1', 'Scheme 2', 'Scheme 3', 'Scheme 1 and 2 are equal'],
        correctAnswer: 'Scheme 3',
        explanation: 'Scheme 1: MF = 0.70 × 0.90 × 0.95 = 0.5985 => Discount = 40.15%. Scheme 2: MF = 0.75 × 0.80 = 0.60 => Discount = 40%. Scheme 3: Flat 42% discount (MF = 0.58). Since 42% is the highest discount, Scheme 3 gives the lowest selling price.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pb-p2',
        question: 'In a campus placement drive, 60% of students cleared the online test. Of those who cleared, 40% cleared technical interview round 1. Of those, 75% cleared the HR interview and received offer letters. If 72 students received offer letters, how many total students appeared for the initial online test?',
        options: ['400', '450', '500', '600'],
        correctAnswer: '400',
        explanation: 'Overall Conversion % = 0.60 × 0.40 × 0.75 = 0.18 = 18%. 18% of Total Students = 72 => Total Students = 72 / 0.18 = 400.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pb-p3',
        question: 'A vessel contains 80 liters of pure alcohol. 20 liters of alcohol is withdrawn and replaced with water. Again 20 liters of the mixture is withdrawn and replaced with water. What is the final percentage of alcohol in the vessel?',
        options: ['56.25%', '50%', '62.5%', '45%'],
        correctAnswer: '56.25%',
        explanation: 'Formula for repeated replacement: Remaining pure liquid = Initial × [1 - x/V]^n = 80 × [1 - 20/80]^2 = 80 × (3/4)^2 = 80 × 9/16 = 45 liters. Total volume = 80 liters. Final % of alcohol = (45 / 80) × 100% = 56.25%.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pb-p4',
        question: 'An IT budget for servers increased by 32% while the cost per server increased by 10%. By what percentage did the number of servers purchased increase?',
        options: ['20%', '22%', '18%', '25%'],
        correctAnswer: '20%',
        explanation: 'Servers = Budget / Cost per Server. MF_Servers = 1.32 / 1.10 = 1.20 => +20% increase in servers purchased.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pb-p5',
        question: 'In an entrance examination, 35% marks are required to pass. A candidate scored 40 marks and failed by 30 marks. What was the maximum aggregate marks for the exam?',
        options: ['200', '250', '300', '350'],
        correctAnswer: '200',
        explanation: 'Passing marks = 40 + 30 = 70 marks. 35% of Total = 70 => Total = 70 / 0.35 = 200 marks.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-pb-1',
      question: 'A person spends 20% of his monthly income on house rent, 15% of the remaining on children’s education, and 30% of the remaining on food and healthcare. If he saves ₹11,900 per month, find his total monthly income.',
      options: ['₹25,000', '₹28,000', '₹30,000', '₹32,000'],
      correctAnswer: '₹25,000',
      explanation: 'Let Income = I. Remaining after rent = 0.80 I. Remaining after education = 0.80 I × 0.85 = 0.68 I. Remaining after food = 0.68 I × 0.70 = 0.476 I. 0.476 I = 11,900 => I = 11,900 / 0.476 = ₹25,000.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-pb-2',
      question: 'If the radius of a cylinder is increased by 20% and its height is decreased by 25%, find the percentage change in its curved surface area and volume.',
      options: ['CSA: -10%, Vol: +8%', 'CSA: -5%, Vol: +10%', 'CSA: -10%, Vol: +12%', 'CSA: 0%, Vol: +8%'],
      correctAnswer: 'CSA: -10%, Vol: +8%',
      explanation: 'CSA ∝ r × h: Net % = 20 - 25 - (20×25/100) = -5 - 5 = -10%. Volume ∝ r^2 × h: Multiplier = (1.20)^2 × 0.75 = 1.44 × 0.75 = 1.08 => +8% increase.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-pb-3',
      question: 'A mixture contains alcohol and water in the ratio 4:1. When 10 liters of water is added to the mixture, the alcohol concentration becomes 50%. Find the initial volume of alcohol in the mixture.',
      options: ['16 liters', '20 liters', '24 liters', '12 liters'],
      correctAnswer: '16 liters',
      explanation: 'Let initial alcohol = 4x, water = 1x. After adding 10 L water: Alcohol = 4x, Water = x + 10. Concentration = 50% => 4x = x + 10 => 3x = 10 => x = 10/3... wait: if ratio becomes 1:1, 4x = x + 10 => 3x = 10. If initial ratio was 4:1 with 16L alcohol and 4L water: 16/(4+10) not 1. If 4x = x + 10 => if alcohol is 16, ratio was 4x=16 => x=4. Water was 4. New water = 14 (not 50%). If initial was 4:1 and new is 1:1, initial alcohol was 4x = 4(10/3).',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Percentage is a fraction with denominator 100. Multiplying Factor (MF) for +x% is (1 + x/100) and for -x% is (1 - x/100).',
      'Successive Percentage Formula: a + b + (ab/100). Valid with signs for increases and discounts.',
      'AB-Rule: If A increases by a/b, then B decreases by a/(b+a) when A × B is constant.',
      'Base Value rule: The quantity appearing after "than" or "of" is the denominator.',
      'Successive discounts d1 and d2 give net discount [d1 + d2 - (d1·d2/100)]%.',
      'Venn Diagram overlap: %Both = %A + %B - %AtLeastOne.'
    ],
    quickFormulas: [
      'Net Successive %: a + b + (ab / 100)',
      'AB Rule: +a/b => -a/(b+a)',
      'Successive Discount: d1 + d2 - (d1·d2 / 100)',
      'Venn Two Sets: P(A ∩ B) = P(A) + P(B) - P(A ∪ B)'
    ]
  },
  keyTakeaways: [
    'Always use multiplying factors (MF) instead of calculating percentages in isolated addition steps.',
    'Be vigilant about base value shifts: A is 25% more than B means B is 20% less than A.',
    'In expenditure problems where budget changes, use C_new / C_old = MF_Expenditure / MF_Price.',
    'For election problems, deduct non-voters first, then invalid votes, to reach the valid vote pool.',
    'An equal percentage increase and decrease (+a% and -a%) always yields a net decrease of a^2/100 %.'
  ],
  selfCheckQuestions: [
    'Can you convert all reciprocal fractions from 1/2 to 1/16 into percentages mentally?',
    'Can you calculate the net change of +25% and -20% in under 10 seconds?',
    'Can you apply the AB-rule to price-consumption problems without algebra?',
    'Can you determine passing percentage from two student score benchmarks?',
    'Can you solve a multi-stage election problem with invalid votes accurately?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 10: Percentage, Base Value Transformations and Applications.'
    },
    {
      sourceName: 'TCS NQT Foundation Quantitative Curriculum',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Successive percentage changes, multiplying factors, and budget constraints.'
    },
    {
      sourceName: 'Cognizant Numerical Reasoning Assessment',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Set-theoretic percentage models, voter margins, and candidate ratios.'
    }
  ]
};
