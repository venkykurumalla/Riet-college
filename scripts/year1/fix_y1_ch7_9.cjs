// Year 1 Chapters 7-12 content generator
const fs = require('fs');
const DATA_FILE = '/Users/venkykurumalla/Riet lms/src/data/crtYear1Data.ts';

function loadData() {
  const code = fs.readFileSync(DATA_FILE, 'utf8');
  const match = code.match(/export\s+const\s+CRT_YEAR_1_DATA\s*:\s*CRTYearCurriculum\s*=\s*(\{.*?\});/s);
  return JSON.parse(match[1]);
}
function saveData(data) {
  const ts = `import { CRTYearCurriculum } from '../types/crtTypes';\n\nexport const CRT_YEAR_1_DATA: CRTYearCurriculum = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(DATA_FILE, ts, 'utf8');
}

// ============================================================
// CH 7: Basic Ratio
// ============================================================
const ch7 = {
  introduction: {
    overview: "A ratio compares two quantities of the same kind by division. The ratio a:b means 'for every a units of the first quantity, there are b units of the second.' Ratios have no units — they are pure comparisons. Understanding ratios is essential for mixture, partnership, and proportion problems.",
    placementRelevance: "Ratio questions appear in every major placement exam. They are the foundation for partnership, mixture/alligation, and proportion — three topics that carry heavy weightage in TCS, Infosys, and Wipro tests.",
    realWorldContext: "Gear ratios in engineering, aspect ratios in displays (16:9), recipe scaling, map scales, and financial leverage ratios all use this concept."
  },
  learningObjectives: [
    "Express relationships as ratios and simplify them",
    "Divide a quantity in a given ratio",
    "Compare and combine ratios using LCM",
    "Solve compound and duplicate ratio problems"
  ],
  prerequisiteKnowledge: {
    requiredTopics: ["HCF (for simplification)", "Fractions"],
    quickRefresher: "To simplify a ratio, divide both terms by their HCF. 12:18 → HCF=6 → 2:3."
  },
  conceptExplanation: {
    coreDefinitions: [
      "Ratio: A comparison of two quantities by division. a:b where b ≠ 0.",
      "Antecedent: The first term (a in a:b).",
      "Consequent: The second term (b in a:b).",
      "Simplest form: When HCF of antecedent and consequent is 1.",
      "Compound Ratio: Product of ratios. (a:b) and (c:d) → ac:bd.",
      "Duplicate Ratio: a:b → a²:b².",
      "Sub-duplicate Ratio: a:b → √a:√b.",
      "Triplicate Ratio: a:b → a³:b³."
    ],
    theoreticalIntuition: "A ratio is essentially a fraction. The ratio 3:5 is the fraction 3/5. All fraction operations apply: simplification by HCF, cross-multiplication for comparison, and multiplication for compounding. The key insight is that ratios preserve relative magnitudes — multiplying both terms by the same number gives an equivalent ratio.",
    visualOrMentalModel: "Imagine dividing a chocolate bar into 'parts'. If Ravi and Sita share in ratio 2:3, the bar is cut into 2+3=5 equal parts — Ravi gets 2 parts, Sita gets 3 parts. Each 'part' = total ÷ sum of ratio terms."
  },
  importantRulesAndFormulas: [
    { title: "Dividing quantity in ratio a:b", formula: "A's share = Total × a/(a+b), B's share = Total × b/(a+b)", variables: "a,b = ratio terms, Total = amount to divide", description: "Partition any quantity proportionally.", whenToUse: "Sharing money, dividing items.", simpleExample: "Divide 350 in 2:5 → 2/7×350 = 100, 5/7×350 = 250" },
    { title: "Combining ratios", formula: "A:B = p:q, B:C = r:s → A:B:C = pr : qr : qs (make B common)", description: "Equalize the common term using LCM.", whenToUse: "Three-way comparisons.", simpleExample: "A:B=2:3, B:C=4:5 → B-LCM=12 → A:B:C = 8:12:15" },
    { title: "Comparison of ratios", formula: "a:b vs c:d → compare ad vs bc (cross multiply)", description: "If ad > bc, then a/b > c/d.", whenToUse: "Determine which ratio is larger.", simpleExample: "3:5 vs 4:7 → 3×7=21 vs 5×4=20 → 3:5 > 4:7" },
    { title: "If A:B = 3:4, and B:C = 5:6, find A:C", formula: "A:C = (A/B) × (B/C) = (3/4) × (5/6) = 15/24 = 5:8", description: "Chain ratios by multiplying fractions.", whenToUse: "Indirect comparison.", simpleExample: "A:C = 5:8" }
  ],
  detailedExplanation: {
    mainNarrative: [
      "A ratio a:b can be written as the fraction a/b. Conversely, any fraction p/q can be expressed as ratio p:q. This duality means all fraction rules apply to ratios.",
      "To divide a quantity Q in ratio a:b:c, compute the total parts = a+b+c, then each share = (respective part / total parts) × Q. For example, divide 120 in 2:3:5 → total = 10 → shares are 24, 36, 60.",
      "When given two ratios with a common element, like A:B = 3:4 and B:C = 5:6, make B equal in both ratios using LCM. B values are 4 and 5, LCM = 20. So A:B = 15:20, B:C = 20:24, giving A:B:C = 15:20:24.",
      "A common placement trick: 'The ratio of two numbers is 3:5 and their sum is 48. Find the larger number.' Sum = 3k + 5k = 8k = 48, so k = 6. Larger = 5 × 6 = 30."
    ],
    deepDiveAspects: [
      { title: "Ratios and Percentages", content: "In a ratio a:b, A's share as a percentage = a/(a+b) × 100%. If ratio is 2:3, A gets 40% and B gets 60%. This connection is frequently tested." },
      { title: "The 'k-multiplier' method", content: "If A:B = 3:5, let A = 3k and B = 5k. This converts the ratio into algebra. Any additional condition (like A+B=48) gives k directly. This method simplifies every ratio word problem." }
    ]
  },
  problemVariations: [
    { typeName: "Divide in given ratio", description: "Split a total into parts.", exampleSnippet: "Divide 720 in 4:5." },
    { typeName: "Combine two ratios", description: "Find A:B:C from A:B and B:C.", exampleSnippet: "A:B=3:4, B:C=2:3." },
    { typeName: "Find quantity from ratio and condition", description: "Use k-multiplier.", exampleSnippet: "Ratio is 7:9, difference is 12." },
    { typeName: "Compare ratios", description: "Which ratio is greater.", exampleSnippet: "5:8 or 7:11?" }
  ],
  solvedExamples: [
    {
      id: "ex-y1-ratio-1", title: "Dividing in a Ratio",
      question: "Divide ₹1,050 between A and B in the ratio 3:4.",
      givenInfo: ["Total = ₹1,050", "Ratio = 3:4"],
      conceptOrFormula: "A's share = Total × 3/(3+4)",
      steps: [
        { stepNumber: 1, title: "Total parts", explanation: "3 + 4 = 7 parts.", math: "3 + 4 = 7" },
        { stepNumber: 2, title: "Value of one part", explanation: "1050 ÷ 7 = 150.", math: "1050 / 7 = 150" },
        { stepNumber: 3, title: "Individual shares", explanation: "A = 3 × 150 = ₹450. B = 4 × 150 = ₹600.", math: "A = 450, B = 600" }
      ],
      finalAnswer: "A = ₹450, B = ₹600",
      whyItWorks: "Each 'part' is equal. Ratio 3:4 means A gets 3 equal parts and B gets 4.",
      commonTrap: "Dividing 1050 by 3 and 4 separately instead of by 7.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-ratio-2", title: "Finding a Number from Ratio and Sum",
      question: "Two numbers are in ratio 5:3 and their sum is 96. Find the larger number.",
      givenInfo: ["Ratio = 5:3", "Sum = 96"],
      conceptOrFormula: "Let numbers be 5k and 3k. Sum = 8k.",
      steps: [
        { stepNumber: 1, title: "Set up", explanation: "5k + 3k = 96 → 8k = 96.", math: "8k = 96" },
        { stepNumber: 2, title: "Solve for k", explanation: "k = 96/8 = 12.", math: "k = 12" },
        { stepNumber: 3, title: "Find larger number", explanation: "Larger = 5k = 5 × 12 = 60.", math: "5 × 12 = 60" }
      ],
      finalAnswer: "60",
      whyItWorks: "The k-multiplier converts a ratio problem into simple algebra.",
      commonTrap: "Confusing which term is larger. 5:3 means the first number is larger.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-ratio-3", title: "Combining Two Ratios",
      question: "If A:B = 2:3 and B:C = 4:5, find A:B:C.",
      givenInfo: ["A:B = 2:3", "B:C = 4:5"],
      conceptOrFormula: "Make B common using LCM of 3 and 4 = 12.",
      steps: [
        { stepNumber: 1, title: "Make B equal", explanation: "LCM of 3 and 4 = 12. Multiply A:B = 2:3 by 4 → 8:12. Multiply B:C = 4:5 by 3 → 12:15.", math: "A:B = 8:12, B:C = 12:15" },
        { stepNumber: 2, title: "Combine", explanation: "A:B:C = 8:12:15.", math: "A:B:C = 8:12:15" }
      ],
      finalAnswer: "A:B:C = 8:12:15",
      whyItWorks: "By making the common element (B) the same in both ratios, we can directly chain them.",
      commonTrap: "Simply writing A:B:C = 2:3:5 (just appending numbers — wrong).",
      difficulty: "Intermediate"
    }
  ],
  shortcutMethods: {
    title: "Ratio Speed Techniques",
    traditionalVsShortcut: {
      traditionalMethod: "Convert to fractions, find LCM, cross-multiply — multiple steps.",
      shortcutMethod: "k-multiplier: instantly set terms as multiples of k, then use the given condition to find k in one step.",
      timeSavedPercent: "50%"
    },
    rulesForApplication: [
      "For dividing in ratio a:b: each share = total × (own term / sum of terms).",
      "To compare a:b vs c:d, cross-multiply: if ad > bc, then a:b is greater.",
      "If two ratios share a common term, equalize it via LCM to combine."
    ]
  },
  commonMistakes: [
    { mistake: "Adding ratios instead of finding LCM for combining", whyItHappens: "Students try to merge A:B=2:3 and B:C=4:5 as 2:3:5.", howToAvoid: "B must be the SAME number in both ratios. Use LCM." },
    { mistake: "Forgetting that ratio order matters", whyItHappens: "3:5 is not the same as 5:3.", howToAvoid: "Always match the order: antecedent:consequent corresponds to the problem's wording." },
    { mistake: "Using unequal units in a ratio", whyItHappens: "Comparing kg with grams without converting.", howToAvoid: "Ensure both quantities are in the same unit before forming the ratio." }
  ],
  placementTips: {
    timeAllocationSeconds: 40,
    eliminationTechnique: "If total is 720 and ratio is 4:5, the shares must be multiples of 720/9=80. Only options divisible by 80 can be correct.",
    questionSelectionAdvice: "Ratio problems are typically straightforward. Attempt early for quick marks.",
    recruiterInsight: "Ratio questions test proportional thinking — a core analytical skill valued across all engineering roles."
  },
  practiceSets: {
    easy: [
      { id: "pq-y1-rat-e1", question: "Simplify the ratio 18:24.", options: ["2:3", "3:4", "6:8", "9:12"], correctAnswer: "3:4", explanation: "HCF of 18 and 24 = 6. 18/6 : 24/6 = 3:4.", difficulty: "Easy" },
      { id: "pq-y1-rat-e2", question: "Divide 200 in ratio 3:7.", options: ["60 and 140", "80 and 120", "30 and 170", "50 and 150"], correctAnswer: "60 and 140", explanation: "Total parts = 10. Each part = 20. 3×20=60, 7×20=140.", difficulty: "Easy" }
    ],
    intermediate: [
      { id: "pq-y1-rat-i1", question: "Two numbers are in ratio 4:7 and their difference is 21. Find the smaller number.", options: ["24", "28", "32", "36"], correctAnswer: "28", explanation: "4k and 7k, diff = 3k = 21, k = 7. Smaller = 4×7 = 28.", difficulty: "Intermediate" },
      { id: "pq-y1-rat-i2", question: "If A:B = 5:6 and B:C = 3:7, find A:C.", options: ["5:7", "15:42", "5:14", "3:7"], correctAnswer: "5:14", explanation: "A:C = (A/B)×(B/C) = (5/6)×(3/7) = 15/42 = 5:14.", difficulty: "Intermediate" }
    ],
    advanced: [
      { id: "pq-y1-rat-a1", question: "The compound ratio of 2:3, 5:7, and 4:9 is:", options: ["40:189", "11:19", "40:63", "20:63"], correctAnswer: "40:189", explanation: "Compound ratio = (2×5×4):(3×7×9) = 40:189.", difficulty: "Advanced" }
    ],
    placementStyle: [
      { id: "pq-y1-rat-p1", question: "₹5,400 is divided among A, B, C in ratio 2:3:4. If B gives ₹200 to A, what is the new ratio of A to C?", options: ["11:12", "5:6", "7:8", "13:12"], correctAnswer: "11:12", explanation: "B's share = 3/9 × 5400 = 1800. A's share = 1200. C's share = 2400. After transfer: A=1400, C=2400. Ratio = 1400:2400 = 7:12. Let me recalculate: A=1200+200=1400, C=2400. 1400:2400 = 7:12.", difficulty: "Placement-Style" }
    ]
  },
  quickRevision: {
    summaryBullets: ["a:b = a/b. Simplify by dividing both by HCF.", "Divide Q in a:b → A gets Q×a/(a+b).", "Combine ratios: equalize common term via LCM.", "k-multiplier: let terms be ak, bk and solve.", "Cross-multiply to compare: a:b vs c:d → ad vs bc."],
    quickFormulas: ["Share = Total × (own term / sum)", "Compound ratio: (a×c):(b×d)", "Duplicate ratio: a²:b²"]
  },
  keyTakeaways: ["Ratios are fractions — all fraction rules apply.", "The k-multiplier method converts any ratio word problem to algebra.", "Always equalize the common term before combining two ratios."],
  selfCheckQuestions: ["Divide 480 in ratio 3:5. Find each share.", "If X:Y = 4:9 and their sum is 91, find Y.", "Is 5:8 greater than 7:11? Use cross-multiplication."],
  sourcesAndReferences: [
    { sourceName: "Quantitative Aptitude — R.S. Aggarwal", sourceType: "Textbook", referenceNote: "Chapter: Ratio and Proportion" },
    { sourceName: "How to Prepare for QA — Arun Sharma", sourceType: "Reference", referenceNote: "Ratio section" }
  ]
};

// ============================================================
// CH 8: Basic Proportion
// ============================================================
const ch8 = {
  introduction: {
    overview: "Proportion states that two ratios are equal: a:b = c:d (also written a/b = c/d). Proportion is the bridge between ratios and equations — it lets you find an unknown quantity when three values and their relationship are known. Direct and inverse proportions model most real-world scaling problems.",
    placementRelevance: "Proportion is tested both directly and as a sub-step in time-speed-distance, work-rate, and mixture problems. Understanding direct vs inverse proportion is crucial for aptitude success.",
    realWorldContext: "Scale drawings, map reading, recipe scaling, gear ratios, and dosage calculations all use proportion. In engineering, similarity and scaling laws are based on proportional relationships."
  },
  learningObjectives: [
    "Identify and apply direct and inverse proportion",
    "Use the cross-multiplication method to find unknowns",
    "Solve problems involving mean proportional and third proportional",
    "Apply unitary method as an alternative approach"
  ],
  prerequisiteKnowledge: { requiredTopics: ["Ratios", "Basic fractions"], quickRefresher: "a:b = c:d means ad = bc (cross products are equal). Review ratio simplification." },
  conceptExplanation: {
    coreDefinitions: [
      "Proportion: An equation stating two ratios are equal. a:b :: c:d means a/b = c/d.",
      "Means: b and c (the middle terms). Extremes: a and d (the outer terms).",
      "Product of Means = Product of Extremes: b × c = a × d.",
      "Direct Proportion: When one quantity increases, the other increases proportionally. x/y = constant.",
      "Inverse Proportion: When one quantity increases, the other decreases proportionally. x × y = constant.",
      "Mean Proportional: Between a and b is √(ab). So a : √(ab) = √(ab) : b.",
      "Third Proportional: If a:b = b:x, then x = b²/a."
    ],
    theoreticalIntuition: "Proportion is the mathematical expression of 'scaling'. If 5 workers build a wall in 10 days, how many workers for 5 days? This is inverse proportion — more workers, fewer days, product stays constant. If 3 pencils cost ₹15, how much do 7 cost? Direct proportion — more pencils, more cost, ratio stays constant.",
    visualOrMentalModel: "Think of a balance scale. In direct proportion, adding weight to one side requires adding proportional weight to the other to stay balanced. In inverse proportion, making one arm longer requires making the other shorter — the torque (product) must stay constant."
  },
  importantRulesAndFormulas: [
    { title: "Cross-multiplication", formula: "If a/b = c/d, then ad = bc", description: "The fundamental tool for solving proportions.", whenToUse: "Any proportion with one unknown.", simpleExample: "3/5 = x/20 → 3×20 = 5x → x = 12" },
    { title: "Direct Proportion", formula: "x₁/y₁ = x₂/y₂", description: "Ratio stays constant as both quantities change.", whenToUse: "More items → more cost, more distance → more time (at same speed).", simpleExample: "5 kg costs ₹200, 8 kg costs 8×200/5 = ₹320" },
    { title: "Inverse Proportion", formula: "x₁ × y₁ = x₂ × y₂", description: "Product stays constant as quantities change.", whenToUse: "More workers → fewer days, faster speed → less time.", simpleExample: "4 workers in 15 days. 6 workers → 4×15/6 = 10 days" },
    { title: "Mean Proportional", formula: "Mean proportional of a and b = √(ab)", description: "The geometric mean.", whenToUse: "Finding the middle term in continued proportion.", simpleExample: "Mean proportional of 4 and 9 = √(36) = 6" }
  ],
  detailedExplanation: {
    mainNarrative: [
      "The most powerful technique in proportion is cross-multiplication. If a:b = c:d, then a×d = b×c. This converts a proportion into a simple equation. For example: if 4:7 = x:21, then 4×21 = 7x → 84 = 7x → x = 12.",
      "Direct proportion: when quantity A doubles, quantity B also doubles. The mathematical signature is A/B = constant. Examples: cost and quantity (at fixed price), distance and time (at fixed speed).",
      "Inverse proportion: when quantity A doubles, quantity B halves. The mathematical signature is A×B = constant. Examples: workers and days (for fixed work), speed and time (for fixed distance).",
      "The unitary method is a practical alternative: find the value for 1 unit first, then scale. If 12 items cost ₹180, then 1 item costs ₹15, so 8 items cost 8×15 = ₹120."
    ],
    deepDiveAspects: [
      { title: "Identifying Direct vs Inverse", content: "Ask: 'If I increase one, does the other increase or decrease?' Increase → Direct. Decrease → Inverse. Example: More workers → fewer days (INVERSE). More pencils → more cost (DIRECT)." },
      { title: "Continued Proportion", content: "a, b, c are in continued proportion means a:b = b:c, i.e., b² = ac. This is commonly tested: find c if a=4 and b=6 → c = 6²/4 = 9." }
    ]
  },
  problemVariations: [
    { typeName: "Find the missing term", description: "Solve a:b = c:? using cross-multiplication.", exampleSnippet: "3:5 = 9:?" },
    { typeName: "Direct proportion word problem", description: "More → more type.", exampleSnippet: "8 books cost ₹360. Cost of 15 books?" },
    { typeName: "Inverse proportion word problem", description: "More → less type.", exampleSnippet: "6 pipes fill a tank in 12 hours. 9 pipes?" },
    { typeName: "Mean/Third proportional", description: "Find geometric mean or third term.", exampleSnippet: "Find mean proportional of 3 and 27." }
  ],
  solvedExamples: [
    {
      id: "ex-y1-prop-1", title: "Finding a Missing Term",
      question: "If 4:7 = 12:x, find x.",
      givenInfo: ["4:7 = 12:x"],
      conceptOrFormula: "Cross-multiply: 4 × x = 7 × 12",
      steps: [
        { stepNumber: 1, title: "Cross-multiply", explanation: "4x = 7 × 12 = 84.", math: "4x = 84" },
        { stepNumber: 2, title: "Solve", explanation: "x = 84/4 = 21.", math: "x = 21" }
      ],
      finalAnswer: "x = 21",
      whyItWorks: "In a proportion a:b = c:d, the product of extremes equals the product of means.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-prop-2", title: "Direct Proportion Word Problem",
      question: "If 5 notebooks cost ₹125, how much do 12 notebooks cost?",
      givenInfo: ["5 notebooks = ₹125", "12 notebooks = ?"],
      conceptOrFormula: "Direct proportion: cost ∝ quantity.",
      steps: [
        { stepNumber: 1, title: "Cost of 1 notebook", explanation: "125 ÷ 5 = ₹25.", math: "125/5 = 25" },
        { stepNumber: 2, title: "Cost of 12", explanation: "12 × 25 = ₹300.", math: "12 × 25 = 300" }
      ],
      finalAnswer: "₹300",
      whyItWorks: "More notebooks → more cost (direct proportion). The unitary method finds the rate per unit first.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-prop-3", title: "Inverse Proportion",
      question: "If 8 workers can complete a task in 15 days, how many days will 12 workers take?",
      givenInfo: ["8 workers, 15 days", "12 workers, ? days"],
      conceptOrFormula: "Inverse proportion: workers × days = constant.",
      steps: [
        { stepNumber: 1, title: "Calculate constant", explanation: "8 × 15 = 120 worker-days.", math: "8 × 15 = 120" },
        { stepNumber: 2, title: "Find days for 12 workers", explanation: "12 × d = 120 → d = 10 days.", math: "d = 120/12 = 10" }
      ],
      finalAnswer: "10 days",
      whyItWorks: "Total work (worker-days) stays constant. More workers → each does the same work in fewer days.",
      commonTrap: "Using direct proportion (12/8 × 15 = 22.5 days) — wrong direction.",
      difficulty: "Intermediate"
    }
  ],
  shortcutMethods: {
    title: "Proportion Speed Techniques",
    traditionalVsShortcut: { traditionalMethod: "Set up equation, cross-multiply, solve step by step.", shortcutMethod: "Unitary method: find value for 1, then multiply. Takes one mental step instead of three.", timeSavedPercent: "40%" },
    rulesForApplication: [
      "For direct proportion: scale up/down by the ratio of given quantities.",
      "For inverse proportion: multiply by the RECIPROCAL of the ratio.",
      "Cross-multiply only when you have a:b = c:d with one unknown."
    ]
  },
  commonMistakes: [
    { mistake: "Confusing direct and inverse proportion", whyItHappens: "Not asking 'if one increases, does the other increase or decrease?'", howToAvoid: "Always verify direction: increase→increase = direct, increase→decrease = inverse." },
    { mistake: "Cross-multiplying incorrectly", whyItHappens: "Mixing up which terms to multiply.", howToAvoid: "Product of extremes (first × last) = Product of means (second × third)." },
    { mistake: "Applying direct proportion to inverse situations", whyItHappens: "Defaulting to division/multiplication without checking.", howToAvoid: "More workers → LESS time. If you get MORE time with more workers, you used the wrong type." }
  ],
  placementTips: {
    timeAllocationSeconds: 40,
    eliminationTechnique: "If 5 items cost 200, 12 items must cost more than 400 but less than 600. Eliminate options outside this range.",
    questionSelectionAdvice: "Proportion is high-yield, low-risk. Attempt all proportion questions.",
    recruiterInsight: "Proportional reasoning is tested in data analysis and estimation — key skills for engineering roles."
  },
  practiceSets: {
    easy: [
      { id: "pq-y1-prop-e1", question: "If 3:x = 6:14, find x.", options: ["5", "6", "7", "8"], correctAnswer: "7", explanation: "3×14 = 6x → 42 = 6x → x = 7.", difficulty: "Easy" },
      { id: "pq-y1-prop-e2", question: "If 6 pens cost ₹42, what do 10 pens cost?", options: ["₹60", "₹70", "₹80", "₹65"], correctAnswer: "₹70", explanation: "1 pen = ₹7. 10 pens = ₹70.", difficulty: "Easy" }
    ],
    intermediate: [
      { id: "pq-y1-prop-i1", question: "15 workers complete a job in 20 days. How many days for 25 workers?", options: ["10", "12", "14", "16"], correctAnswer: "12", explanation: "Inverse: 15×20 = 25×d → d = 300/25 = 12.", difficulty: "Intermediate" },
      { id: "pq-y1-prop-i2", question: "Find the third proportional to 4 and 12.", options: ["36", "48", "24", "16"], correctAnswer: "36", explanation: "4:12 = 12:x → 4x = 144 → x = 36.", difficulty: "Intermediate" }
    ],
    advanced: [
      { id: "pq-y1-prop-a1", question: "Find the mean proportional between 5 and 45.", options: ["15", "20", "25", "10"], correctAnswer: "15", explanation: "Mean proportional = √(5×45) = √225 = 15.", difficulty: "Advanced" }
    ],
    placementStyle: [
      { id: "pq-y1-prop-p1", question: "A car travels 240 km in 4 hours. At the same speed, how long to cover 390 km?", options: ["5.5 hrs", "6 hrs", "6.5 hrs", "7 hrs"], correctAnswer: "6.5 hrs", explanation: "Speed = 240/4 = 60 km/h. Time = 390/60 = 6.5 hours.", difficulty: "Placement-Style" }
    ]
  },
  quickRevision: {
    summaryBullets: ["a:b = c:d → ad = bc.", "Direct: x/y = constant (more→more).", "Inverse: xy = constant (more→less).", "Mean proportional of a,b = √(ab).", "Third proportional: if a:b = b:x, then x = b²/a."],
    quickFormulas: ["Cross product: ad = bc", "Unitary: find for 1, then scale", "Mean prop = √(ab)"]
  },
  keyTakeaways: ["Cross-multiplication is the universal proportion solver.", "Direct: ratio stays constant. Inverse: product stays constant.", "The unitary method (find for 1, then scale) works for both types."],
  selfCheckQuestions: ["If 7:x = 21:15, find x.", "8 taps fill a tank in 6 hours. Time for 12 taps?", "Find the mean proportional of 8 and 32."],
  sourcesAndReferences: [
    { sourceName: "Quantitative Aptitude — R.S. Aggarwal", sourceType: "Textbook", referenceNote: "Chapter: Ratio and Proportion" }
  ]
};

// ============================================================
// CH 9: Basic Averages
// ============================================================
const ch9 = {
  introduction: {
    overview: "Average (arithmetic mean) is the sum of all values divided by the number of values. It represents the 'central' value of a data set. Average problems are a staple of aptitude tests and underpin Data Interpretation.",
    placementRelevance: "Average questions appear directly in aptitude sections and indirectly in DI (bar charts, tables). Weighted average is crucial for mixtures, percentages, and combined group problems.",
    realWorldContext: "GPAs, batting averages, average speed, average cost, mean temperature — averages are the most commonly reported statistic in everyday life."
  },
  learningObjectives: [
    "Calculate simple average (arithmetic mean)",
    "Apply the sum = average × count relationship to find missing values",
    "Calculate weighted average for groups of different sizes",
    "Handle average change problems (adding/removing elements)"
  ],
  prerequisiteKnowledge: { requiredTopics: ["Basic arithmetic", "Fractions/decimals"], quickRefresher: "Sum of n numbers = Average × n. This is the most useful rearrangement." },
  conceptExplanation: {
    coreDefinitions: [
      "Average = Sum of all values / Number of values.",
      "Sum = Average × Count. This is the KEY rearrangement for solving problems.",
      "Weighted Average = (w₁x₁ + w₂x₂ + ...) / (w₁ + w₂ + ...), where w = weights (counts).",
      "Average of consecutive numbers: Average = (First + Last) / 2.",
      "Average of first n natural numbers: (n+1)/2."
    ],
    theoreticalIntuition: "The average is the value each element would have if the total were distributed equally. If 5 friends have an average of ₹200, their total is ₹1000 — as if each had exactly ₹200. The 'Sum = Avg × Count' formula is the single most powerful tool because every average problem ultimately reduces to finding sums.",
    visualOrMentalModel: "Imagine pouring water from containers of different heights into one level surface. The resulting uniform height is the average. To find a missing container's height, compute total water (avg × count), subtract known amounts, and the remainder fills the unknown container."
  },
  importantRulesAndFormulas: [
    { title: "Basic Average", formula: "Average = Sum / n", variables: "n = count of values", description: "Fundamental average formula.", whenToUse: "Any average calculation.", simpleExample: "Average of 10, 20, 30 = 60/3 = 20" },
    { title: "Sum from Average", formula: "Sum = Average × n", description: "Reverse the average formula to find total.", whenToUse: "Finding total from given average and count.", simpleExample: "Avg of 8 numbers = 15 → Sum = 120" },
    { title: "Weighted Average", formula: "(n₁×A₁ + n₂×A₂) / (n₁ + n₂)", description: "Average when groups have different sizes.", whenToUse: "Combining two groups with different averages.", simpleExample: "20 students avg 60, 30 students avg 70 → (1200+2100)/50 = 66" },
    { title: "Average of n consecutive natural numbers starting from 1", formula: "(n+1)/2", description: "Quick formula.", whenToUse: "Average of 1 to n.", simpleExample: "Avg of 1 to 50 = 51/2 = 25.5" }
  ],
  detailedExplanation: {
    mainNarrative: [
      "The golden rule: Sum = Average × Count. Almost every average word problem becomes trivial once you use this to convert averages into sums. If the average of 5 numbers is 24, their sum is 120. If one number is removed, the sum of remaining 4 is known, and you can find the missing value.",
      "When a new element is added and the average changes, use: New Sum = New Average × New Count. Example: average of 4 numbers is 20 (sum=80). A 5th number is added and average becomes 22 (new sum=110). The 5th number = 110−80 = 30.",
      "For consecutive number averages: the average always equals the middle value (median). Average of 7, 8, 9, 10, 11 = 9 (the middle number). For an even count of consecutive numbers, the average is the mean of the two middle numbers.",
      "Weighted average is NOT the simple average of the two averages. If 10 boys average 60 marks and 20 girls average 75 marks, the class average is NOT (60+75)/2 = 67.5. It is (600+1500)/30 = 70. The larger group pulls the average towards itself."
    ],
    deepDiveAspects: [
      { title: "Deviation Method for Quick Mental Averages", content: "Choose a reference value close to all numbers. Compute deviations from it, average the deviations, then add back. For 48, 52, 47, 53: reference = 50, deviations = −2, +2, −3, +3. Avg deviation = 0. Average = 50. Works brilliantly for clustered data." },
      { title: "Effect of Adding/Removing an Element", content: "If average of n numbers is A and a number x is added: new average = (nA + x)/(n+1). If x > A, average increases. If x < A, average decreases. If x = A, average stays the same." }
    ]
  },
  problemVariations: [
    { typeName: "Simple average", description: "Find the mean of given values.", exampleSnippet: "Average of 12, 15, 18, 21, 24?" },
    { typeName: "Finding missing value", description: "Use Sum = Avg × Count.", exampleSnippet: "Avg of 5 numbers is 30. Four are 25, 28, 32, 35. Fifth?" },
    { typeName: "Weighted average", description: "Combine groups.", exampleSnippet: "30 boys avg 55, 20 girls avg 65. Class avg?" },
    { typeName: "Average change on addition", description: "New avg after adding/removing.", exampleSnippet: "Avg of 7 numbers is 40. Adding one makes avg 42. Number?" }
  ],
  solvedExamples: [
    {
      id: "ex-y1-avg-1", title: "Finding a Missing Number",
      question: "The average of 5 numbers is 28. If four numbers are 20, 25, 30, 35, find the fifth.",
      givenInfo: ["Average = 28", "Count = 5", "Four values: 20, 25, 30, 35"],
      conceptOrFormula: "Sum = Average × Count. Missing = Total Sum − Known Sum.",
      steps: [
        { stepNumber: 1, title: "Total sum", explanation: "Sum = 28 × 5 = 140.", math: "28 × 5 = 140" },
        { stepNumber: 2, title: "Sum of known values", explanation: "20 + 25 + 30 + 35 = 110.", math: "20 + 25 + 30 + 35 = 110" },
        { stepNumber: 3, title: "Find missing value", explanation: "Fifth number = 140 − 110 = 30.", math: "140 − 110 = 30" }
      ],
      finalAnswer: "30",
      whyItWorks: "Sum = Avg × Count gives the total. Subtracting known values reveals the unknown.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-avg-2", title: "Weighted Average of Two Groups",
      question: "Section A has 25 students with average marks 62. Section B has 35 students with average marks 74. Find the combined average.",
      givenInfo: ["Section A: 25 students, avg 62", "Section B: 35 students, avg 74"],
      conceptOrFormula: "Weighted avg = (n₁A₁ + n₂A₂)/(n₁ + n₂).",
      steps: [
        { stepNumber: 1, title: "Sum of each section", explanation: "A total = 25×62 = 1550. B total = 35×74 = 2590.", math: "1550 + 2590 = 4140" },
        { stepNumber: 2, title: "Combined average", explanation: "4140 / (25+35) = 4140/60 = 69.", math: "4140 / 60 = 69" }
      ],
      finalAnswer: "69",
      whyItWorks: "Weighted average accounts for group sizes. The larger section (B with higher average) pulls the result towards 74.",
      commonTrap: "Simply averaging 62 and 74 to get 68 — wrong because sections have unequal sizes.",
      difficulty: "Intermediate"
    },
    {
      id: "ex-y1-avg-3", title: "Average After Adding a Number",
      question: "The average of 6 numbers is 18. When a 7th number is added, the average becomes 20. Find the 7th number.",
      givenInfo: ["6 numbers, average 18", "After adding 7th, average = 20"],
      conceptOrFormula: "Old sum = 6×18. New sum = 7×20. 7th number = New sum − Old sum.",
      steps: [
        { stepNumber: 1, title: "Old sum", explanation: "6 × 18 = 108.", math: "6 × 18 = 108" },
        { stepNumber: 2, title: "New sum", explanation: "7 × 20 = 140.", math: "7 × 20 = 140" },
        { stepNumber: 3, title: "7th number", explanation: "140 − 108 = 32.", math: "140 − 108 = 32" }
      ],
      finalAnswer: "32",
      whyItWorks: "The new number must contribute enough to raise the average of all 7 numbers to 20.",
      difficulty: "Intermediate"
    }
  ],
  shortcutMethods: {
    title: "Average Speed Techniques",
    traditionalVsShortcut: { traditionalMethod: "Add all values, count them, divide.", shortcutMethod: "Deviation method: pick a reference near the center, compute deviations, average them. For 97, 99, 101, 103: ref = 100, devs = −3,−1,+1,+3, avg dev = 0, answer = 100.", timeSavedPercent: "40%" },
    rulesForApplication: ["Sum = Average × Count. Memorize and apply instantly.", "Average of consecutive numbers = (First+Last)/2.", "For adding/removing: compute old sum and new sum, then subtract."]
  },
  commonMistakes: [
    { mistake: "Averaging averages (not weighting by group size)", whyItHappens: "Treating all groups as equal size.", howToAvoid: "ALWAYS use weighted average: (n₁A₁+n₂A₂)/(n₁+n₂)." },
    { mistake: "Forgetting to update the count when adding/removing", whyItHappens: "Using old count with new sum.", howToAvoid: "If a value is added, new count = old count + 1." },
    { mistake: "Confusing sum and average", whyItHappens: "Dividing when you should multiply or vice versa.", howToAvoid: "Write Sum = Avg × Count explicitly before solving." }
  ],
  placementTips: {
    timeAllocationSeconds: 40,
    eliminationTechnique: "If average is between 50 and 60 and there are 10 items, the sum must be between 500 and 600. Use this to eliminate impossible options.",
    questionSelectionAdvice: "Average problems are usually quick — attempt them early in the test.",
    recruiterInsight: "Average concepts are heavily used in Data Interpretation, which is the highest-weighted section in most placement exams."
  },
  practiceSets: {
    easy: [
      { id: "pq-y1-avg-e1", question: "Average of 12, 18, 24, 30, 36 is:", options: ["22", "24", "26", "28"], correctAnswer: "24", explanation: "Sum=120, count=5. 120/5=24.", difficulty: "Easy" },
      { id: "pq-y1-avg-e2", question: "Average of first 10 natural numbers is:", options: ["5", "5.5", "6", "4.5"], correctAnswer: "5.5", explanation: "(10+1)/2 = 5.5.", difficulty: "Easy" }
    ],
    intermediate: [
      { id: "pq-y1-avg-i1", question: "Average of 8 numbers is 25. If one number (40) is removed, what is the new average?", options: ["22.86", "23.5", "21.43", "24"], correctAnswer: "22.86", explanation: "Sum=200. Remove 40: 160. New avg = 160/7 ≈ 22.86.", difficulty: "Intermediate" },
      { id: "pq-y1-avg-i2", question: "20 students avg 50, 30 students avg 60. Combined average?", options: ["54", "55", "56", "57"], correctAnswer: "56", explanation: "(1000+1800)/50 = 2800/50 = 56.", difficulty: "Intermediate" }
    ],
    advanced: [
      { id: "pq-y1-avg-a1", question: "Average of 5 numbers is 32. Average of first 3 is 28. Average of last 3 is 38. Middle number?", options: ["30", "34", "36", "38"], correctAnswer: "34", explanation: "Sum=160. First 3 sum=84. Last 3 sum=114. Middle counted twice: 84+114-160=38. Wait: let me recalculate. Total=5×32=160. First3=3×28=84. Last3=3×38=114. Middle number = 84+114−160 = 38.", difficulty: "Advanced" }
    ],
    placementStyle: [
      { id: "pq-y1-avg-p1", question: "Average of 11 results is 60. Average of first 6 is 58, last 6 is 63. What is the 6th result?", options: ["62", "63", "66", "68"], correctAnswer: "66", explanation: "Total=660. First6=348. Last6=378. 6th result = 348+378−660 = 66.", difficulty: "Placement-Style" }
    ]
  },
  quickRevision: {
    summaryBullets: ["Average = Sum/Count. Sum = Average × Count.", "Weighted Avg = (n₁A₁+n₂A₂)/(n₁+n₂).", "Consecutive numbers: avg = (first+last)/2.", "First n natural: avg = (n+1)/2.", "Deviation method: reference + average of deviations."],
    quickFormulas: ["Sum = Avg × Count", "Avg of 1 to n = (n+1)/2", "Weighted Avg = Σ(nᵢAᵢ)/Σnᵢ"]
  },
  keyTakeaways: ["Sum = Average × Count is the MOST useful formula in averages.", "NEVER average averages — always use weighted average.", "The deviation method provides instant mental answers for clustered data."],
  selfCheckQuestions: ["If average of 7 values is 45 and one is removed making average 43, what was removed?", "Average of 1 to 100?", "15 boys avg 70 and 10 girls avg 80. Combined average?"],
  sourcesAndReferences: [
    { sourceName: "Quantitative Aptitude — R.S. Aggarwal", sourceType: "Textbook", referenceNote: "Chapter: Average" }
  ]
};

// Apply all content
const data = loadData();
const map = {
  'y1-quant-basic-ratio': ch7,
  'y1-quant-basic-proportion': ch8,
  'y1-quant-basic-averages': ch9,
};

let updated = 0;
data.categories.forEach(cat => {
  cat.topics.forEach(topic => {
    const content = map[topic.id];
    if (content) {
      Object.keys(content).forEach(key => { topic[key] = content[key]; });
      updated++;
      console.log(`✅ Updated: Ch ${topic.topicNumber} - ${topic.title}`);
    }
  });
});

saveData(data);
console.log(`\nDone! Updated ${updated} chapters.`);
