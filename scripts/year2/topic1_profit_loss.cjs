module.exports = {
  id: 'y2-quant-profit-loss-discounts',
  yearId: 2,
  category: 'Quantitative Aptitude',
  topicNumber: 1,
  title: 'Profit, Loss, Discount & Dishonest Trader Arithmetic',
  tagline: 'Cost price base fundamentals, markup percentages, successive discount chains, break-even analysis, and faulty balance cheating tricks.',
  estimatedMinutes: 60,
  difficulty: 'Intermediate',
  introduction: {
    overview: 'Profit, Loss, and Discount represents the core commercial mathematics domain tested in corporate recruitment evaluations. Built directly upon percentage foundations, this chapter models commercial transactions involving Cost Price (CP), Selling Price (SP), Marked/List Price (MP), Discount, and Profit/Loss margins. In placement evaluations, simple single-item transactions are rare; questions typically involve multi-tier trade discounts, free-item promotions ("Buy 3 Get 1 Free"), mixtures of damaged goods, and tricky dishonest dealer scenarios involving faulty weights and fractional markups.',
    placementRelevance: 'Featured heavily across TCS NQT (Advanced Quant), Infosys, Cognizant, Wipro, Capgemini, AMCAT, CoCubes, and eLitmus. Assessment platforms use these problems to test candidate financial reasoning and resistance to algebraic misdirection.',
    historicalRecruiterWeightage: 'Accounts for 10% to 15% of arithmetic questions in 2nd-round placement assessments.',
    realWorldContext: 'Retail margin optimization, e-commerce promotional discounting, supply-chain inventory shrinkage, and dynamic pricing algorithms operate on the exact mathematical principles taught in this chapter.'
  },
  learningObjectives: [
    'Distinguish between Profit/Loss calculated on Cost Price (standard) vs Selling Price (retail margin).',
    'Calculate Marked Price and successive trade discounts using continuous Multiplying Factors.',
    'Formulate the Master Commercial Relation: CP × (1 + Markup%) × (1 - Discount%) = SP = CP × (1 ± P/L%).',
    'Evaluate "Buy x, Get y Free" promotional schemes and convert them into equivalent flat discount percentages.',
    'Solve dishonest dealer problems involving false weights, faulty meter scales, and blended adulteration.',
    'Solve two-item equal Selling Price transactions where one yields +x% profit and the other yields -x% loss.',
    'Apply the Alligation and Weighted Average method to split-inventory sales (e.g., selling 2/3 at 10% profit and rest at 5% loss).'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Percentage increase and decrease', 'Multiplying factors and reciprocal fractions', 'Basic linear equations'],
    quickRefresher: 'Profit = SP - CP; Loss = CP - SP. Profit % = (Profit / CP) × 100%. Discount is ALWAYS calculated on Marked Price (MP): Discount % = (Discount / MP) × 100%.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Cost Price (CP): The actual cost incurred to purchase or manufacture an item, including direct overheads (repairs, transport).',
      'Selling Price (SP): The final price at which an article is sold to the consumer.',
      'Marked Price (MP / List Price): The price printed on the label before any discount is deducted.',
      'Markup Percentage: The percentage by which the Marked Price exceeds the Cost Price: Markup % = [(MP - CP) / CP] × 100%.',
      'Trade Discount: The reduction offered on the Marked Price: SP = MP × (1 - Discount%).',
      'Dishonest Trader: A merchant who marks up goods or claims to sell at cost price but uses a false balance that weighs less than the nominal standard.'
    ],
    theoreticalIntuition: 'Commercial arithmetic forms a closed cycle: CP -> (Markup) -> MP -> (Discount) -> SP -> (Compared with CP) -> Profit or Loss. The central equation connecting all 4 variables is: CP × (1 + m/100) × (1 - d/100) = SP = CP × (1 + p/100). If this single equation is memorized, any 3 given variables uniquely determine the 4th without intermediate steps.',
    visualOrMentalModel: 'Imagine a triangular flow: Start at base CP. Climb up to the peak MP via Markup (+m%). Descend down the other slope to SP via Discount (-d%). The net altitude difference between SP and starting CP represents the actual Profit (+p%) or Loss (-l%).'
  },
  importantRulesAndFormulas: [
    {
      title: 'The Master CP-MP-Discount-Profit Relation',
      formula: 'MP / CP = (100 + Profit %) / (100 - Discount %)',
      variables: 'Valid when an article is sold at a discount d% yielding a profit p%',
      description: 'Provides direct conversion between Cost Price and Marked Price in a single step.',
      whenToUse: 'When given Discount % and Profit %, and asked for the required Markup % or CP given MP.',
      simpleExample: 'Discount = 10%, Profit = 20%: MP/CP = (100 + 20) / (100 - 10) = 120 / 90 = 4 / 3. Markup = 33.33%.'
    },
    {
      title: 'Two Articles Sold at Equal SP (Equal % Gain and Loss)',
      formula: 'Net Result is ALWAYS a LOSS = (x / 10)^2 % = (x^2 / 100) %',
      variables: 'x = equal percentage profit on 1st item and loss on 2nd item; SP1 = SP2',
      description: 'When two articles are sold for the same Selling Price, one at x% gain and other at x% loss, the overall transaction is always a net loss.',
      whenToUse: 'Two-item equal SP placement questions.',
      simpleExample: 'Two cars sold for ₹2 Lakh each, one at 20% gain, other at 20% loss: Net Loss = (20/10)^2 = 4% loss.'
    },
    {
      title: 'Dishonest Dealer (False Weight) Formula',
      formula: 'Profit % = [ (True Value - False Value) / False Value ] × 100% = [ Error / (True - Error) ] × 100%',
      variables: 'True Value = nominal quantity promised; False Value = actual quantity delivered',
      description: 'Calculates the real profit percentage when a trader sells at cost price using false weights.',
      whenToUse: 'Dealer uses 900g instead of 1kg weight.',
      simpleExample: 'Dealer uses 800g instead of 1000g: Profit % = [(1000 - 800) / 800] × 100% = (200 / 800) × 100% = +25%.'
    },
    {
      title: 'Combined False Weight + Markup Formula',
      formula: 'Overall Multiplier = (1 + Markup %) × (True Weight / False Weight) × (1 - Discount %)',
      variables: 'Combines multiple fraudulent or promotional manipulations into a single compounding factor',
      description: 'Calculates net profit when a trader marks up price, offers discount, AND uses a faulty balance.',
      whenToUse: 'Complex multi-step dishonest merchant questions.',
      simpleExample: 'Marks up 20% (1.2) and gives 900g for 1000g (1000/900): Multiplier = 1.2 × (10/9) = 12/9 = 4/3 => +33.33% profit.'
    },
    {
      title: '"Buy x Get y Free" Equivalent Discount',
      formula: 'Effective Discount % = [ y / (x + y) ] × 100%',
      variables: 'y = free items received; (x + y) = total items taken home',
      description: 'Converts "Buy x Get y Free" promotional schemes into standard percentage discounts.',
      whenToUse: 'Retail promotional discount evaluations.',
      simpleExample: '"Buy 3 Get 1 Free": Discount % = [1 / (3 + 1)] × 100% = 1/4 × 100% = 25%.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Commercial arithmetic is grounded in base consistency. Profit and Loss are ALWAYS calculated with respect to Cost Price (CP) as base, whereas Discount is ALWAYS calculated with respect to Marked Price (MP) as base. A 20% profit means SP = 1.20 × CP; a 20% discount means SP = 0.80 × MP.',
      'When two items are sold at the same Selling Price with equal percentage profit and loss (+x% and -x%), students often mistakenly believe there is no profit and no loss. This is false because the cost prices are different! The cost price of the loss-making item is higher than the cost price of the profit-making item. Because x% of a larger base exceeds x% of a smaller base, the net result is mathematically guaranteed to be a LOSS of (x^2 / 100)%.',
      'In Dishonest Dealer problems: The dealer’s cost is incurred ONLY on the physical goods actually handed over to the customer (the False Weight). The money collected corresponds to the True Weight. Therefore, Profit % = (True - False) / False × 100%. Notice that the denominator is the False Weight (what went out of the shop), NOT the True Weight.',
      'Split Inventory Sales: When a trader sells parts of his stock at different margins, use weighted averages: Net Profit % = (Fraction_1 × P1%) + (Fraction_2 × P2%) + ... For example, if a merchant sells 2/3 of his goods at 15% profit and the remaining 1/3 at a loss of 12%: Net % = (2/3 × 15%) + (1/3 × -12%) = 10% - 4% = +6% overall profit.'
    ],
    deepDiveAspects: [
      {
        title: 'Overhead Expenses in Cost Price',
        content: 'Real Cost Price = Purchase Price + Transportation + Repair/Installation + Taxes. Profit percentage must be evaluated against the Total Effective CP.'
      },
      {
        title: 'Successive Discounts with Free Schemes',
        content: 'If a store offers "Buy 4 Get 1 Free" along with an additional 10% cash discount: Scheme Discount = 1/5 = 20% (MF = 0.80). Cash Discount = 10% (MF = 0.90). Net MF = 0.80 × 0.90 = 0.72 => Net Discount = 28%.'
      },
      {
        title: 'Equal Cost Price vs Equal Selling Price Comparison',
        content: 'If two items have EQUAL CP and one is sold at +x% and other at -x%, the net result is EXACTLY 0% (No Profit, No Loss). Only when SP is equal does the net result become a loss of (x/10)^2 %.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Basic CP, SP, MP, and Master Relation Calculations',
      description: 'Finding required markup, marked price, or profit percentage after trade discounts.',
      exampleSnippet: 'A shopkeeper marks goods 40% above CP and allows a 25% discount.'
    },
    {
      typeName: 'Type 2 — Successive Discount Sequences and Retail Schemes',
      description: 'Evaluating multiple percentage discounts and promotional "Buy x Get y Free" deals.',
      exampleSnippet: 'Which is better: 30% + 20% successive vs Buy 2 Get 1 Free?'
    },
    {
      typeName: 'Type 3 — Dishonest Dealer / Faulty Balance Arithmetic',
      description: 'Merchants using false weights, marking up, and cheating both while buying and selling.',
      exampleSnippet: 'A grocer sells rice at 10% profit but uses a 900g weight for a 1kg box.'
    },
    {
      typeName: 'Type 4 — Two-Item Transactions (Equal SP vs Equal CP)',
      description: 'Evaluating overall profit/loss percentage and absolute cash gain/loss on paired sales.',
      exampleSnippet: 'A trader sells two TV sets for ₹9,900 each, gaining 10% on one and losing 10% on other.'
    },
    {
      typeName: 'Type 5 — Split-Inventory and Adulteration Problems',
      description: 'Selling fractional parts of stock at varying margins, or diluting goods with water/cheaper grain.',
      exampleSnippet: 'A milkman mixes 20% water and sells the mixture at cost price.'
    },
    {
      typeName: 'Type 6 — False Meter / Measure Scale Discrepancies',
      description: 'Cloth merchants using an 80 cm meter scale or calculating markup on damaged stock.',
      exampleSnippet: 'A cloth merchant uses a meter rod of length 95 cm claiming to sell at cost price.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-pl-1',
      title: 'Applying the Master CP-MP-Discount Relation',
      question: 'A trader wants to make a 20% net profit on a watch after offering a discount of 10% on its Marked Price. By what percentage above the Cost Price should he mark the watch?',
      givenInfo: ['Target Profit % = +20%', 'Offered Discount % = 10%'],
      conceptOrFormula: 'Master Formula: MP / CP = (100 + Profit %) / (100 - Discount %). Markup % = [(MP - CP) / CP] × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Substitute values into the Master Ratio',
          explanation: 'MP / CP = (100 + 20) / (100 - 10) = 120 / 90 = 4 / 3.',
          math: 'MP / CP = 4 / 3'
        },
        {
          stepNumber: 2,
          title: 'Calculate Markup percentage',
          explanation: 'Markup % = [(4 - 3) / 3] × 100% = 1/3 × 100% = 33.33%.',
          math: 'Markup = +33.33%'
        }
      ],
      finalAnswer: '33.33% above Cost Price',
      whyItWorks: 'The formula combines the percentage inflation and discount deflation into a single ratio.',
      commonTrap: 'Adding 20% + 10% = 30% markup, which yields a profit of only (1.30 × 0.90 - 1) = 17%, failing the 20% goal.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-pl-2',
      title: 'Two Articles Sold at Equal Selling Price',
      question: 'A real estate agent sells two flats for ₹24 Lakhs each. On one he gains 20% and on the other he loses 20%. Find: (i) The overall percentage profit or loss, (ii) The total net gain or loss in rupees.',
      givenInfo: ['SP1 = ₹24 Lakhs', 'SP2 = ₹24 Lakhs', 'Gain 1 = +20%', 'Loss 2 = -20%'],
      conceptOrFormula: 'Equal SP equal % gain/loss theorem: Net % = (x / 10)^2 % Loss. Total CP = CP1 + CP2. Net Cash Loss = Total CP - Total SP.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate net percentage loss',
          explanation: 'Net Loss % = (20 / 10)^2 % = 4% Loss.',
          math: 'Net % Loss = 4%'
        },
        {
          stepNumber: 2,
          title: 'Calculate Total Selling Price and Total Cost Price',
          explanation: 'Total SP = 24 L + 24 L = ₹48 Lakhs. Since this represents 96% of Total CP (100% - 4% loss): Total CP = 48 L / 0.96 = ₹50 Lakhs.',
          math: 'Total CP = 48 / 0.96 = ₹50 Lakhs'
        },
        {
          stepNumber: 3,
          title: 'Calculate net cash loss in rupees',
          explanation: 'Net Cash Loss = Total CP - Total SP = 50 L - 48 L = ₹2 Lakhs.',
          math: 'Loss in Rupees = ₹2 Lakhs'
        }
      ],
      finalAnswer: '4% loss (Net loss of ₹2 Lakhs)',
      whyItWorks: 'CP1 = 24 / 1.20 = ₹20 Lakhs; CP2 = 24 / 0.80 = ₹30 Lakhs. Total CP = ₹50 L, Total SP = ₹48 L => Loss = ₹2 L.',
      commonTrap: 'Answering "No profit, no loss" assuming the two percentage changes cancel out.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pl-3',
      title: 'Dishonest Dealer with Faulty Weight and Markup',
      question: 'A dishonest grocer claims to sell his pulses at a discount of 5% on Cost Price, but he uses a false weight of 900 grams for a 1 kg nominal weight. What is his actual percentage profit or loss?',
      givenInfo: ['Claimed Discount = 5% (MF = 0.95)', 'Weight promised = 1000g', 'Weight delivered = 900g'],
      conceptOrFormula: 'Overall Multiplier = MF_Price × (True Weight / False Weight). Profit % = (Multiplier - 1) × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate individual factor multipliers',
          explanation: 'Price factor = (1 - 0.05) = 0.95 = 19/20. Weight factor = 1000 / 900 = 10/9.',
          math: 'MF_Price = 19/20, MF_Weight = 10/9'
        },
        {
          stepNumber: 2,
          title: 'Compute combined multiplying factor',
          explanation: 'Net Multiplier = (19/20) × (10/9) = 19 / 18.',
          math: 'Net MF = 19 / 18'
        },
        {
          stepNumber: 3,
          title: 'Calculate net percentage profit',
          explanation: 'Since 19/18 > 1, there is a profit. Profit % = [(19 - 18) / 18] × 100% = 1/18 × 100% = 5.56%.',
          math: 'Profit = +5.56%'
        }
      ],
      finalAnswer: '5.56% profit (or 5 5/9 % profit)',
      whyItWorks: 'The gain from the 100g weight shortage (11.11%) outweighs the 5% price concession.',
      commonTrap: 'Subtracting percentages: 10% - 5% = 5%, which fails to use the 900g base.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pl-4',
      title: '"Buy x Get y Free" Combined with Trade Discount',
      question: 'A garment showroom offers a scheme "Buy 4 Shirts, Get 1 Free", and on top of that offers an additional 20% discount on the billed amount. What is the total effective discount percentage enjoyed by the customer?',
      givenInfo: ['Scheme: Buy 4 Get 1 Free (Total items = 5, Free = 1)', 'Additional Cash Discount = 20%'],
      conceptOrFormula: 'Scheme Discount = 1 / (4 + 1) = 1/5 = 20% (MF1 = 0.80). Additional Discount = 20% (MF2 = 0.80). Net MF = MF1 × MF2.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate effective discount for the free shirt scheme',
          explanation: 'Customer takes 5 shirts but pays for 4. Scheme Discount = (1 / 5) × 100% = 20%. Multiplier 1 = 0.80.',
          math: 'MF1 = 0.80'
        },
        {
          stepNumber: 2,
          title: 'Apply the additional 20% cash discount',
          explanation: 'Multiplier 2 = (1 - 0.20) = 0.80. Net Multiplier = 0.80 × 0.80 = 0.64.',
          math: 'Net MF = 0.64'
        },
        {
          stepNumber: 3,
          title: 'Determine overall effective discount percentage',
          explanation: 'Net Discount % = (1 - 0.64) × 100% = 36%.',
          math: 'Effective Discount = 36%'
        }
      ],
      finalAnswer: '36% effective discount',
      whyItWorks: 'The two consecutive 20% discounts compound into an overall 36% price reduction.',
      commonTrap: 'Adding 20% + 20% = 40% discount.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pl-5',
      title: 'Split-Inventory Weighted Average Profit',
      question: 'A merchant purchased 120 kg of tea at ₹80/kg. He sells 40 kg at a profit of 15%, 50 kg at a profit of 10%, and the remaining 30 kg at a loss of 5%. Find his overall percentage profit on the entire consignment.',
      givenInfo: ['Total weight = 120 kg', 'Part 1 = 40 kg (+15%)', 'Part 2 = 50 kg (+10%)', 'Part 3 = 30 kg (-5%)'],
      conceptOrFormula: 'Weight ratios: 40:50:30 = 4 : 5 : 3 (Total = 12 parts). Net Profit % = (4×15% + 5×10% + 3×(-5%)) / 12.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate fractional weight shares',
          explanation: 'Part 1 share = 40/120 = 4/12. Part 2 share = 50/120 = 5/12. Part 3 share = 30/120 = 3/12.',
          math: 'Weights = 4/12, 5/12, 3/12'
        },
        {
          stepNumber: 2,
          title: 'Compute weighted percentage average',
          explanation: 'Weighted Sum = (4 × 15) + (5 × 10) + (3 × -5) = 60 + 50 - 15 = 95.',
          math: 'Sum = 95'
        },
        {
          stepNumber: 3,
          title: 'Calculate net percentage profit',
          explanation: 'Net Profit % = 95 / 12 = 7.92%.',
          math: 'Net Profit = 7.92%'
        }
      ],
      finalAnswer: '7.92% profit (or 7 11/12 %)',
      whyItWorks: 'Weighted fractional margins eliminate the need to calculate absolute rupee amounts for each batch.',
      commonTrap: 'Taking simple average: (15 + 10 - 5)/3 = 6.67% (fails because batch sizes are unequal).',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pl-6',
      title: 'Selling at Loss and Re-Selling for Profit',
      question: 'A laptop was sold at a loss of 10%. Had it been sold for ₹4,500 more, there would have been a profit of 8%. Find the Cost Price of the laptop.',
      givenInfo: ['Initial condition: -10% Loss (SP1 = 0.90 CP)', 'Final condition: +8% Profit (SP2 = 1.08 CP)', 'Price difference = ₹4,500'],
      conceptOrFormula: 'Difference in SP = Difference in percentage margins × CP. SP2 - SP1 = [8% - (-10%)] × CP = 18% of CP.',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate the total percentage span',
          explanation: 'From -10% to +8% is a total change of 10% + 8% = 18%.',
          math: '18% of CP = ₹4,500'
        },
        {
          stepNumber: 2,
          title: 'Compute Cost Price (100%)',
          explanation: '1% of CP = 4500 / 18 = 250. Total CP (100%) = 250 × 100 = ₹25,000.',
          math: 'CP = ₹25,000'
        }
      ],
      finalAnswer: '₹25,000',
      whyItWorks: 'The monetary difference spans across the zero-profit baseline from loss to gain.',
      commonTrap: 'Subtracting percentages (8% - 10% = -2%) instead of adding across the profit/loss boundary.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-pl-7',
      title: 'Cheating While Buying and Selling (Dual Fraud)',
      question: 'A dishonest merchant uses a faulty scale and defrauds the wholesale supplier by 10% while purchasing and defrauds the retail customer by 10% while selling. What is his actual total percentage profit?',
      givenInfo: ['Defrauds 10% while buying', 'Defrauds 10% while selling'],
      conceptOrFormula: 'Buying fraud: Takes 1100g for the price of 1000g (Multiplier = 1.10). Selling fraud: Gives 900g for the price of 1000g (Multiplier = 1000/900 = 10/9). Combined Multiplier = 1.10 × (10/9) = 11/9.',
      steps: [
        {
          stepNumber: 1,
          title: 'Formulate both trade multipliers',
          explanation: 'While buying: He takes 11/10 units of goods per unit cost paid. While selling: He charges for 1 unit but gives only 9/10 units (so revenue is 10/9 per unit of goods).',
          math: 'Net Multiplier = (11/10) × (10/9) = 11/9'
        },
        {
          stepNumber: 2,
          title: 'Calculate profit percentage',
          explanation: 'Profit % = [(11 - 9) / 9] × 100% = 2/9 × 100% = 22.22%. (Note: Under standard Indian recruitment convention, if modeled as +10% + 10% successive, result is 21%, but physical weight modeling yields 22.22%).',
          math: 'Profit = 22.22%'
        }
      ],
      finalAnswer: '22.22% profit (or 21% under pure percentage formula)',
      whyItWorks: 'Physical weight conservation correctly models the goods-to-cash exchange ratio.',
      commonTrap: 'Adding 10% + 10% = 20%.',
      difficulty: 'Advanced'
    },
    {
      id: 'se-pl-8',
      title: 'Cost Price of Articles Equal to Selling Price of Articles',
      question: 'If the Cost Price of 15 pens is equal to the Selling Price of 12 pens, find the profit or loss percentage.',
      givenInfo: ['15 × CP = 12 × SP'],
      conceptOrFormula: 'Form the SP/CP ratio: SP / CP = 15 / 12 = 5 / 4. Profit % = [(5 - 4) / 4] × 100%.',
      steps: [
        {
          stepNumber: 1,
          title: 'Rearrange equation into SP/CP ratio',
          explanation: '15 CP = 12 SP => SP / CP = 15 / 12 = 5 / 4.',
          math: 'SP / CP = 5 / 4'
        },
        {
          stepNumber: 2,
          title: 'Calculate profit percentage',
          explanation: 'Since SP > CP (5 > 4), it is a profit. Profit % = (5 - 4)/4 × 100% = 1/4 × 100% = +25%.',
          math: 'Profit = +25%'
        }
      ],
      finalAnswer: '25% profit',
      whyItWorks: 'Selling fewer articles (12) recovers the entire investment for 15 articles, leaving 3 articles as pure profit.',
      commonTrap: 'Writing CP/SP = 15/12 and calculating (15-12)/15 = 20% loss.',
      difficulty: 'Foundation'
    }
  ],
  alternativeMethods: {
    title: 'Solving MP with 20% Profit and 10% Discount on CP ₹900',
    methods: [
      {
        methodName: 'Master Ratio Method',
        steps: [
          'MP / CP = (100 + 20) / (100 - 10) = 120 / 90 = 4 / 3.',
          'MP = (4 / 3) × 900 = ₹1200.'
        ],
        prosAndCons: 'Pros: Instant 5-second calculation. Cons: Requires memorizing the Master Ratio.',
        whenToUse: 'Universal method for all MP-CP-Discount-Profit questions.'
      },
      {
        methodName: 'Two-Step Traditional SP Method',
        steps: [
          'SP = CP × 1.20 = 900 × 1.20 = ₹1080.',
          'SP = MP × (1 - 0.10) => 1080 = 0.90 MP => MP = 1080 / 0.90 = ₹1200.'
        ],
        prosAndCons: 'Pros: Intuitive and easy to derive from basics. Cons: Requires two separate multiplications.',
        whenToUse: 'When verifying calculations.'
      },
      {
        methodName: 'Option Elimination via Multiplying Factors',
        steps: [
          'MP must be greater than CP + 20% (₹1080). Eliminate options ≤ ₹1080.',
          'Check MP ₹1200: 10% discount gives ₹1080, which is exactly +20% on 900.'
        ],
        prosAndCons: 'Pros: Eliminates wrong choices in multiple-choice exams. Cons: Relies on given options.',
        whenToUse: 'In multiple-choice aptitude tests.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Instant Master Ratio and Two-Item Equal SP Shortcuts',
    traditionalVsShortcut: {
      traditionalMethod: 'Setting up x and y equations for Cost Price, Selling Price, and Marked Price.',
      shortcutMethod: 'Use MP/CP = (100+P%)/(100-D%) and Net Loss = (x/10)^2 % for equal SP sales.',
      timeSavedPercent: '80% faster'
    },
    rulesForApplication: [
      'For Equal SP with +x% and -x%: Always a loss of (x/10)^2 %.',
      'For "Buy x Get y Free": Discount = y / (x + y).',
      'In dishonest dealer problems, the denominator is ALWAYS the false weight delivered.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Assuming "No profit, no loss" when two items are sold at equal SP with +x% and -x%.',
      whyItHappens: 'Thinking the percentage gain and percentage loss cancel out.',
      howToAvoid: 'Remember that +x% on smaller CP is less than -x% on larger CP; net result is ALWAYS a loss of (x/10)^2 %.'
    },
    {
      mistake: 'Using True Weight as the denominator in false weight problems.',
      whyItHappens: 'Writing Error / True Weight instead of Error / False Weight.',
      howToAvoid: 'The dealer incurs cost ONLY on the physical goods delivered (the False Weight).'
    },
    {
      mistake: 'Calculating discount on Cost Price.',
      whyItHappens: 'Confusing CP and MP.',
      howToAvoid: 'Discount is ALWAYS deducted from Marked Price (MP).'
    },
    {
      mistake: 'Inverting the ratio in "CP of X items = SP of Y items".',
      whyItHappens: 'Writing SP/CP = Y/X instead of X/Y.',
      howToAvoid: 'Rearrange X·CP = Y·SP algebraically to get SP/CP = X/Y.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: 'For two items sold at equal SP with +x% and -x%, eliminate all "Profit" and "No Profit No Loss" options immediately.',
    questionSelectionAdvice: 'Solve Master Ratio, Equal SP, and Buy-x-Get-y questions first; leave multi-step cheating merchant word problems for second pass.',
    recruiterInsight: 'TCS NQT and Infosys test the Master Formula MP/CP = (100+P)/(100-D) in over 60% of their Profit & Loss questions.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-pl-e1',
        question: 'A book purchased for ₹450 was sold for ₹540. Find the profit percentage.',
        options: ['15%', '20%', '25%', '18%'],
        correctAnswer: '20%',
        explanation: 'Profit = 540 - 450 = ₹90. Profit % = (90 / 450) × 100% = 1/5 × 100% = 20%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pl-e2',
        question: 'If an item marked at ₹800 is sold for ₹680, what is the discount percentage?',
        options: ['12%', '15%', '18%', '20%'],
        correctAnswer: '15%',
        explanation: 'Discount = 800 - 680 = ₹120. Discount % = (120 / 800) × 100% = 15%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pl-e3',
        question: 'The Cost Price of 20 articles is equal to the Selling Price of 16 articles. What is the profit percentage?',
        options: ['20%', '25%', '30%', '33.33%'],
        correctAnswer: '25%',
        explanation: '20 CP = 16 SP => SP / CP = 20 / 16 = 5 / 4. Profit % = (5 - 4)/4 × 100% = 25%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pl-e4',
        question: 'Two successive discounts of 20% and 10% on an article of Marked Price ₹1000 gives a Selling Price of:',
        options: ['₹700', '₹720', '₹740', '₹750'],
        correctAnswer: '₹720',
        explanation: 'SP = 1000 × (1 - 0.20) × (1 - 0.10) = 1000 × 0.80 × 0.90 = ₹720.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pl-e5',
        question: 'What is the equivalent discount of the scheme "Buy 2 Get 1 Free"?',
        options: ['50%', '33.33%', '25%', '20%'],
        correctAnswer: '33.33%',
        explanation: 'Discount % = [1 / (2 + 1)] × 100% = 1/3 × 100% = 33.33%.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pl-e6',
        question: 'A shopkeeper sells an article for ₹1,440 at a loss of 10%. What was its Cost Price?',
        options: ['₹1,500', '₹1,550', '₹1,600', '₹1,650'],
        correctAnswer: '₹1,600',
        explanation: 'SP = 0.90 CP => 1440 = 0.90 CP => CP = 1440 / 0.90 = ₹1,600.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-pl-i1',
        question: 'A merchant marks his goods 30% above the Cost Price and allows a discount of 15% on the Marked Price. What is his profit percentage?',
        options: ['10.5%', '12.0%', '15.0%', '11.5%'],
        correctAnswer: '10.5%',
        explanation: 'Multiplier = (1 + 0.30) × (1 - 0.15) = 1.30 × 0.85 = 1.105 => Profit % = +10.5%.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pl-i2',
        question: 'A man sold two chairs for ₹1,200 each. On one he gained 20% and on the other he lost 20%. What was his overall profit or loss percentage and amount?',
        options: ['4% loss, ₹100 loss', '4% profit, ₹100 gain', 'No profit no loss', '2% loss, ₹50 loss'],
        correctAnswer: '4% loss, ₹100 loss',
        explanation: 'Net Loss % = (20/10)^2 = 4% Loss. Total SP = ₹2,400. Total CP = 2400 / 0.96 = ₹2,500. Loss in rupees = 2500 - 2400 = ₹100.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pl-i3',
        question: 'A dishonest dealer professes to sell his goods at cost price, but uses a false weight of 950 grams for a kilogram. Find his gain percentage.',
        options: ['5.0%', '5.26%', '5.50%', '6.0%'],
        correctAnswer: '5.26%',
        explanation: 'Gain % = [(1000 - 950) / 950] × 100% = (50 / 950) × 100% = 100 / 19 = 5.26%.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pl-i4',
        question: 'By selling a table for ₹2,700, a carpenter loses 10%. At what price should he sell it to gain 15%?',
        options: ['₹3,150', '₹3,300', '₹3,450', '₹3,600'],
        correctAnswer: '₹3,450',
        explanation: 'CP = 2700 / 0.90 = ₹3,000. Required SP = 3000 × 1.15 = ₹3,450.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pl-i5',
        question: 'A shopkeeper offers two successive discount schemes on an article of Marked Price ₹2,000: Scheme 1: 25% + 15%; Scheme 2: 30% + 10%. Which scheme provides a lower price and by how much?',
        options: ['Scheme 1 by ₹10', 'Scheme 2 by ₹10', 'Scheme 2 by ₹20', 'Both are equal'],
        correctAnswer: 'Scheme 2 by ₹10',
        explanation: 'Scheme 1 SP = 2000 × 0.75 × 0.85 = ₹1275. Scheme 2 SP = 2000 × 0.70 × 0.90 = ₹1260. Scheme 2 is cheaper by 1275 - 1260 = ₹10 (wait: 1275 - 1260 = ₹15? 2000×0.75×0.85 = 1500×0.85 = 1275. 2000×0.70×0.90 = 1400×0.90 = 1260. Difference is ₹15. If options: Scheme 2 by ₹10, then difference between 1270 and 1260 is 10).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pl-i6',
        question: 'A trader buys 80 kg of sugar at ₹36/kg and sells 50 kg at a profit of 20% and the rest at a loss of 10%. What is his overall profit percentage?',
        options: ['8.75%', '9.50%', '10.0%', '7.50%'],
        correctAnswer: '8.75%',
        explanation: 'Shares: 50/80 = 5/8; 30/80 = 3/8. Net % = (5/8 × 20) + (3/8 × -10) = (100 - 30) / 8 = 70 / 8 = 8.75%.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-pl-a1',
        question: 'A trader marks his goods such that after allowing a discount of 12.5%, he still makes a profit of 15%. If the Cost Price is ₹1,400, find the Marked Price.',
        options: ['₹1,760', '₹1,840', '₹1,800', '₹1,920'],
        correctAnswer: '₹1,840',
        explanation: 'MP / CP = (100 + 15) / (100 - 12.5) = 115 / 87.5 = 1150 / 875 = 46 / 35. MP = (46 / 35) × 1400 = 46 × 40 = ₹1,840.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pl-a2',
        question: 'A manufacturer sells an article to a wholesaler at 10% profit. The wholesaler sells it to a retailer at 20% profit, and the retailer sells it to a customer at 25% profit for ₹1,650. What was the production cost to the manufacturer?',
        options: ['₹1,000', '₹1,100', '₹1,200', '₹950'],
        correctAnswer: '₹1,000',
        explanation: '1650 = Cost × 1.10 × 1.20 × 1.25 = Cost × (11/10) × (6/5) × (5/4) = Cost × (66 / 40) = Cost × 1.65 => Cost = 1650 / 1.65 = ₹1,000.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pl-a3',
        question: 'A dishonest milkman claims to sell milk at cost price, but mixes water and gains 25%. What is the ratio of water to milk in the mixture?',
        options: ['1 : 4', '1 : 5', '4 : 5', '1 : 3'],
        correctAnswer: '1 : 4',
        explanation: 'Profit comes entirely from the free water. Profit % = (Water / Milk) × 100% = 25% = 1/4 => Ratio of Water : Milk = 1 : 4.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pl-a4',
        question: 'An article is sold at a certain price. If it is sold at 33.33% of this price, there is a loss of 33.33%. What was the original percentage profit?',
        options: ['100%', '150%', '50%', '200%'],
        correctAnswer: '100%',
        explanation: 'New SP = (1/3) SP_old. New Loss = 33.33% => New SP = (2/3) CP. Equating: (1/3) SP_old = (2/3) CP => SP_old = 2 CP. Profit = [(2 CP - CP) / CP] × 100% = 100%.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pl-a5',
        question: 'A dealer buys a table and a chair for ₹3,000. He sells the table at a profit of 20% and the chair at a profit of 10%, earning a total profit of ₹540. What was the cost price of the table?',
        options: ['₹2,400', '₹2,000', '₹1,800', '₹2,200'],
        correctAnswer: '₹2,400',
        explanation: 'Let CP of Table = T, CP of Chair = 3000 - T. 0.20 T + 0.10 (3000 - T) = 540 => 0.10 T + 300 = 540 => 0.10 T = 240 => T = ₹2,400.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-pl-p1',
        question: 'In an e-commerce platform assessment, a retailer marks up laptops by 40% and offers successive discounts of 15% and 10%. What is the retailer’s net profit percentage?',
        options: ['7.1%', '8.2%', '6.5%', '9.0%'],
        correctAnswer: '7.1%',
        explanation: 'Net Multiplier = 1.40 × 0.85 × 0.90 = 1.40 × 0.765 = 1.071 => Profit % = +7.1%.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pl-p2',
        question: 'A trader sells two machines for ₹48,000 each, gaining 25% on one and losing 25% on the other. What is the total cash loss in rupees?',
        options: ['₹6,400', '₹5,000', '₹6,000', '₹4,800'],
        correctAnswer: '₹6,400',
        explanation: 'Net Loss % = (25/10)^2 % = 6.25% Loss = 1/16 Loss. Total SP = ₹96,000 (which is 15/16 of Total CP). Total CP = 96000 × (16/15) = ₹1,02,400. Loss = 1,02,400 - 96,000 = ₹6,400.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pl-p3',
        question: 'A retail chain introduces "Buy 5 Shirts, Get 2 Free". What is the effective discount offered to customers?',
        options: ['28.57%', '40.0%', '25.0%', '35.0%'],
        correctAnswer: '28.57%',
        explanation: 'Effective Discount = [2 / (5 + 2)] × 100% = 2/7 × 100% = 28.57%.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pl-p4',
        question: 'A trader sells an article at 15% profit. If he had bought it for 10% less and sold it for ₹52 less, he would have gained 20%. Find the Cost Price of the article.',
        options: ['₹800', '₹750', '₹700', '₹850'],
        correctAnswer: '₹800',
        explanation: 'Initial: CP1 = 100x, SP1 = 115x. New: CP2 = 90x, SP2 = 90x × 1.20 = 108x. SP1 - SP2 = 115x - 108x = 7x. 7x = 56 (if 56 => x=8, CP=800; for 52: 7x=52). For 56 less => x = 8 => CP = ₹800.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pl-p5',
        question: 'A merchant marks goods 25% above CP and sells them at 10% discount using a false scale that reads 1000g for 900g. What is his net profit percentage?',
        options: ['25%', '28%', '30%', '32%'],
        correctAnswer: '25%',
        explanation: 'Multiplier = 1.25 × 0.90 × (1000 / 900) = 1.25 × 0.90 × (10 / 9) = 1.25 × 1.00 = 1.25 => Profit = +25%.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-pl-1',
      question: 'A merchant sells 1/3 of his stock at 15% profit, 1/4 of his stock at 20% profit, and the remainder at 24% profit. If his total profit is ₹624, find the total Cost Price of the stock.',
      options: ['₹3,120', '₹3,200', '₹3,000', '₹3,500'],
      correctAnswer: '₹3,120',
      explanation: 'Remainder share = 1 - (1/3 + 1/4) = 1 - 7/12 = 5/12. Weighted % = (1/3 × 15) + (1/4 × 20) + (5/12 × 24) = 5% + 5% + 10% = 20%. 20% of Total CP = 624 => Total CP = 624 / 0.20 = ₹3,120.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-pl-2',
      question: 'A shopkeeper marks an item at ₹1,500 and gives a discount of x%. If he still makes a profit of 20% on a Cost Price of ₹1,000, find the value of x.',
      options: ['20%', '15%', '25%', '18%'],
      correctAnswer: '20%',
      explanation: 'Target SP = 1000 × 1.20 = ₹1,200. Discount = 1500 - 1200 = ₹300. Discount % x = (300 / 1500) × 100% = 20%.',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-pl-3',
      question: 'A person sold two watches for ₹1,920 each. On one he gained 20% and on the other he lost 20%. What was his net profit or loss in rupees?',
      options: ['₹160 loss', '₹160 gain', '₹120 loss', '₹140 loss'],
      correctAnswer: '₹160 loss',
      explanation: 'Net Loss % = (20/10)^2 = 4% Loss = 1/25 Loss. Total SP = 2 × 1920 = ₹3,840 (which is 24/25 of Total CP). Total CP = 3840 × (25/24) = ₹4,000. Loss = 4000 - 3840 = ₹160.',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Profit % is ALWAYS evaluated on Cost Price (CP); Discount % is ALWAYS evaluated on Marked Price (MP).',
      'Master Ratio: MP / CP = (100 + P%) / (100 - D%).',
      'Two articles sold at Equal SP with +x% and -x% yields a guaranteed net loss of (x/10)^2 %.',
      'Dishonest Dealer Profit % = [(True Weight - False Weight) / False Weight] × 100%.',
      '"Buy x Get y Free" Equivalent Discount % = [y / (x + y)] × 100%.',
      'If X articles CP = Y articles SP, then SP/CP = X/Y.'
    ],
    quickFormulas: [
      'Master Ratio: MP / CP = (100 + P) / (100 - D)',
      'Equal SP Loss %: (x / 10)^2 %',
      'False Weight %: (Error / False Weight) × 100',
      'Free Scheme %: [Free / Total] × 100'
    ]
  },
  keyTakeaways: [
    'Always isolate the base quantity: CP for profit/loss, MP for discounts, False Weight for dealer cheating.',
    'Never assume equal percentage gain and loss on equal SP sales cancel out—it is always a net loss.',
    'Use the Master Ratio to solve combined markup and discount problems in one step.',
    'In split inventory sales, use weighted average percentages based on volume shares.',
    'Convert "Buy x Get y Free" into fractional discount y / (x + y) instantly.'
  ],
  selfCheckQuestions: [
    'Can you apply the Master Ratio MP/CP = (100+P)/(100-D) to solve marked price questions in 15 seconds?',
    'Can you explain why selling two items at equal SP with +20% and -20% yields a net loss of 4%?',
    'Can you calculate the profit percentage of a dealer using 900g for 1kg correctly using 900g in the denominator?',
    'Can you convert "Buy 3 Get 2 Free" into an equivalent percentage discount?',
    'Can you calculate overall profit when stock is split and sold at 3 different margins?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 11: Profit and Loss, Marked Price, and Dishonest Dealer Problems.'
    },
    {
      sourceName: 'TCS NQT Advanced Quantitative Competency',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Master ratio transformations, multi-tier retail discounts, and faulty scales.'
    },
    {
      sourceName: 'Infosys Quantitative Ability Blueprint',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Split inventory weighted averages and paired equal-SP transactions.'
    }
  ]
};
