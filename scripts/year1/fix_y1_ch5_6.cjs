// Year 1 Chapter 5-12 content generator (Quantitative Foundation)
// Generates REAL, topic-specific content to replace placeholder text

const fs = require('fs');
const path = require('path');

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
// CHAPTER 5: Simplification & BODMAS/PEMDAS
// ============================================================
const ch5_simplification = {
  introduction: {
    overview: "Simplification is the art of reducing a complex arithmetic expression to a single number using the correct order of operations. BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction) — also known as PEMDAS — is the universal rule that prevents ambiguity. Without BODMAS, the expression 2 + 3 × 4 could be interpreted as 20 or 14; BODMAS mandates 14.",
    placementRelevance: "Simplification questions are guaranteed in every placement aptitude test. TCS NQT, Infosys, Wipro, and Accenture all include 3–5 direct simplification problems. Speed and accuracy in BODMAS determines your score ceiling.",
    realWorldContext: "Every calculator, spreadsheet, and programming language follows BODMAS/PEMDAS internally. Excel formulas, SQL expressions, and Python arithmetic all rely on this order. Financial modelling and engineering calculations require strict operator precedence."
  },
  learningObjectives: [
    "Apply BODMAS/PEMDAS order correctly to multi-operation expressions",
    "Simplify expressions involving nested brackets, fractions, and decimals",
    "Use approximation to quickly estimate answers for option elimination",
    "Avoid sign errors and bracket-expansion mistakes under time pressure"
  ],
  prerequisiteKnowledge: {
    requiredTopics: ["Basic arithmetic (addition, subtraction, multiplication, division)", "Fractions and decimals"],
    quickRefresher: "Review multiplication tables 1–20, fraction addition/subtraction with LCM, and decimal-to-fraction conversions."
  },
  conceptExplanation: {
    coreDefinitions: [
      "BODMAS: Brackets → Orders (powers/roots) → Division & Multiplication (left to right) → Addition & Subtraction (left to right).",
      "Brackets hierarchy: Vinculum (bar) → Parentheses () → Braces {} → Square brackets [].",
      "Of means multiplication: '½ of 36' = ½ × 36 = 18.",
      "Division and Multiplication have EQUAL precedence — evaluate LEFT to RIGHT, not D before M.",
      "Addition and Subtraction have EQUAL precedence — evaluate LEFT to RIGHT, not A before S."
    ],
    theoreticalIntuition: "BODMAS is not an arbitrary convention — it ensures mathematical consistency. Multiplication distributes over addition (a × (b+c) = ab + ac), so multiplication must bind tighter than addition. Powers distribute over multiplication similarly, so they come first. The brackets override everything because they explicitly group operations.",
    visualOrMentalModel: "Think of BODMAS as a priority queue: Brackets have the highest priority (process first), then Orders, then Div/Mul (same level — go left to right), then Add/Sub (same level — go left to right). Mark each operation with its priority level, then execute from highest to lowest."
  },
  importantRulesAndFormulas: [
    {
      title: "BODMAS Order",
      formula: "B → O → D/M (left→right) → A/S (left→right)",
      variables: "B=Brackets, O=Orders, D=Division, M=Multiplication, A=Addition, S=Subtraction",
      description: "The universal operator precedence rule for arithmetic.",
      whenToUse: "Every simplification problem.",
      simpleExample: "8 + 2 × 5 = 8 + 10 = 18 (NOT 50)"
    },
    {
      title: "'Of' means multiply",
      formula: "'of' = ×",
      description: "'Of' in expressions means multiplication and has the same precedence as × and ÷.",
      whenToUse: "Expressions like '¼ of 80'.",
      simpleExample: "¼ of 80 = ¼ × 80 = 20"
    },
    {
      title: "Nested brackets — inside out",
      formula: "Evaluate innermost bracket first, then work outward",
      description: "Vinculum (bar) → () → {} → []",
      whenToUse: "Complex expressions with multiple bracket layers.",
      simpleExample: "[10 + {5 × (3+2)}] = [10 + {5×5}] = [10+25] = 35"
    },
    {
      title: "Fraction simplification shortcut",
      formula: "Cancel common factors before multiplying",
      description: "Reduce fractions early to avoid large numbers.",
      whenToUse: "Products of fractions.",
      simpleExample: "(12/15) × (25/36) → cancel 12&36 (÷12), 15&25 (÷5) → (1/1.25)×(5/3) = 5/9"
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      "The most common error in simplification is evaluating left to right without respecting operator precedence. Consider 12 ÷ 4 × 3: many students compute 12 ÷ 12 = 1, but since ÷ and × have equal precedence, we go left to right: 12 ÷ 4 = 3, then 3 × 3 = 9.",
      "When 'of' appears in an expression, treat it as multiplication. For example: ½ of 36 + 8 = 18 + 8 = 26. The 'of' binds to its operands before addition.",
      "For expressions with nested brackets, always start from the innermost bracket and work outward. In [{(2+3) × 4} - 5], first compute (2+3)=5, then {5×4}=20, then [20-5]=15.",
      "Approximation is your secret weapon in MCQ tests. If the expression evaluates to roughly 47 and the options are 23, 35, 47, 61 — pick 47 without computing the exact value. Round difficult decimals to nearby integers for quick estimation."
    ],
    deepDiveAspects: [
      {
        title: "Why D/M and A/S Are Same-Level",
        content: "Division is multiplication by the reciprocal (a÷b = a×(1/b)), and subtraction is addition of the negative (a−b = a+(−b)). Since they are inverse operations of each other, they must have the same precedence. The left-to-right rule resolves ties."
      },
      {
        title: "Vinculum (Bar) — The Forgotten Bracket",
        content: "A vinculum is a horizontal bar over a group of terms, acting as an implicit bracket. In the expression 5 + (12 − 3̄+1̄), the bar groups 3+1 first: 5 + (12 − 4) = 5 + 8 = 13. Vinculums appear in some aptitude tests as fraction bars: everything above the bar is one group, everything below is another."
      }
    ]
  },
  problemVariations: [
    { typeName: "Pure BODMAS", description: "Simplify using correct order of operations.", exampleSnippet: "15 + 5 × 3 − 8 ÷ 2 = ?" },
    { typeName: "Fraction chains", description: "Simplify products or sums of multiple fractions.", exampleSnippet: "(3/4) × (8/9) × (15/16) = ?" },
    { typeName: "Nested brackets", description: "Expressions with (), {}, [].", exampleSnippet: "[50 − {20 + (8 − 3)}] = ?" },
    { typeName: "Decimal simplification", description: "Simplify expressions involving decimals.", exampleSnippet: "0.5 × 0.4 + 0.3 × 0.2 = ?" }
  ],
  solvedExamples: [
    {
      id: "ex-y1-simp-1",
      title: "Basic BODMAS Application",
      question: "Simplify: 18 + 12 ÷ 3 × 2 − 5",
      givenInfo: ["Expression: 18 + 12 ÷ 3 × 2 − 5"],
      conceptOrFormula: "BODMAS: Division and Multiplication before Addition and Subtraction (left to right).",
      steps: [
        { stepNumber: 1, title: "Division first (left to right)", explanation: "12 ÷ 3 = 4. Expression becomes: 18 + 4 × 2 − 5", math: "12 ÷ 3 = 4" },
        { stepNumber: 2, title: "Multiplication next", explanation: "4 × 2 = 8. Expression becomes: 18 + 8 − 5", math: "4 × 2 = 8" },
        { stepNumber: 3, title: "Addition and Subtraction (left to right)", explanation: "18 + 8 = 26, then 26 − 5 = 21.", math: "18 + 8 − 5 = 21" }
      ],
      finalAnswer: "21",
      whyItWorks: "Division binds before addition, and multiplication binds before subtraction. Left-to-right within same precedence level.",
      commonTrap: "Computing 18+12=30 first (ignoring BODMAS) gives 30÷3×2−5 = 15, which is wrong.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-simp-2",
      title: "Nested Brackets",
      question: "Simplify: [48 − {18 + (6 − 2)}]",
      givenInfo: ["Expression with nested brackets: [], {}, ()"],
      conceptOrFormula: "Evaluate innermost bracket first, work outward.",
      steps: [
        { stepNumber: 1, title: "Innermost bracket ()", explanation: "(6 − 2) = 4. Expression: [48 − {18 + 4}]", math: "(6 − 2) = 4" },
        { stepNumber: 2, title: "Braces {}", explanation: "{18 + 4} = 22. Expression: [48 − 22]", math: "{18 + 4} = 22" },
        { stepNumber: 3, title: "Square brackets []", explanation: "[48 − 22] = 26.", math: "48 − 22 = 26" }
      ],
      finalAnswer: "26",
      whyItWorks: "Inside-out evaluation ensures every operation respects its containing scope.",
      commonTrap: "Forgetting to carry the subtraction sign when evaluating brackets.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-simp-3",
      title: "Fraction Chain with 'Of'",
      question: "Simplify: ¾ of 48 + 15 ÷ 5 − 8",
      givenInfo: ["¾ of 48", "15 ÷ 5", "subtract 8"],
      conceptOrFormula: "'Of' = multiplication. Apply BODMAS after converting 'of'.",
      steps: [
        { stepNumber: 1, title: "'Of' = multiply", explanation: "¾ of 48 = ¾ × 48 = 36.", math: "(3/4) × 48 = 36" },
        { stepNumber: 2, title: "Division", explanation: "15 ÷ 5 = 3.", math: "15 ÷ 5 = 3" },
        { stepNumber: 3, title: "Add and subtract (left to right)", explanation: "36 + 3 − 8 = 31.", math: "36 + 3 − 8 = 31" }
      ],
      finalAnswer: "31",
      whyItWorks: "'Of', multiplication, and division all have the same precedence level — process left to right, then add/subtract.",
      commonTrap: "Treating 'of' as lower precedence than addition, computing 48 + 15 first.",
      difficulty: "Intermediate"
    }
  ],
  shortcutMethods: {
    title: "Simplification Speed Techniques",
    traditionalVsShortcut: {
      traditionalMethod: "Evaluate every operation step by step, writing out intermediate results.",
      shortcutMethod: "Scan for 'of', brackets, and high-precedence operations first. Use approximation to eliminate 2-3 options, then compute precisely only if needed.",
      timeSavedPercent: "50%"
    },
    rulesForApplication: [
      "Always convert 'of' to × immediately before anything else.",
      "For decimal simplification, convert to fractions if the fractions are simpler (0.125 = 1/8, 0.375 = 3/8).",
      "Use estimation: 4.97 × 8.02 ≈ 5 × 8 = 40 to eliminate far-off options."
    ]
  },
  commonMistakes: [
    {
      mistake: "Evaluating left to right without BODMAS",
      whyItHappens: "Students read expressions linearly like sentences.",
      howToAvoid: "Always scan the entire expression first. Mark all × ÷ operations, do them first, then + −."
    },
    {
      mistake: "Treating 'of' as addition or ignoring it",
      whyItHappens: "The word 'of' doesn't look like a math operator.",
      howToAvoid: "Replace 'of' with '×' in every expression before solving."
    },
    {
      mistake: "Doing D before M always (or A before S always)",
      whyItHappens: "BODMAS abbreviation suggests D comes before M.",
      howToAvoid: "D and M have EQUAL precedence — go left to right. Same for A and S."
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: "Round all values to nearest integer, compute approximately, and match the closest option. Works on 70% of simplification MCQs.",
    questionSelectionAdvice: "Simplification is low-risk, predictable. Always attempt these questions first in any aptitude test.",
    recruiterInsight: "Simplification tests arithmetic speed and accuracy — the two traits most correlated with on-the-job calculation tasks."
  },
  practiceSets: {
    easy: [
      {
        id: "pq-y1-simp-e1",
        question: "Simplify: 5 + 3 × 4 − 2",
        options: ["30", "15", "24", "12"],
        correctAnswer: "15",
        explanation: "BODMAS: 3×4=12 first. Then 5+12−2 = 15.",
        difficulty: "Easy"
      },
      {
        id: "pq-y1-simp-e2",
        question: "Simplify: (8 + 2) × 3",
        options: ["14", "30", "26", "18"],
        correctAnswer: "30",
        explanation: "Brackets first: (8+2)=10. Then 10×3 = 30.",
        difficulty: "Easy"
      }
    ],
    intermediate: [
      {
        id: "pq-y1-simp-i1",
        question: "Simplify: 36 ÷ 6 × 3 + 4 − 2",
        options: ["20", "4", "16", "10"],
        correctAnswer: "20",
        explanation: "Left to right for ÷ and ×: 36÷6=6, 6×3=18. Then 18+4−2 = 20.",
        difficulty: "Intermediate"
      },
      {
        id: "pq-y1-simp-i2",
        question: "Simplify: [25 − {10 + (3 + 2)}]",
        options: ["10", "15", "8", "20"],
        correctAnswer: "10",
        explanation: "Innermost: (3+2)=5. Then {10+5}=15. Then [25−15]=10.",
        difficulty: "Intermediate"
      }
    ],
    advanced: [
      {
        id: "pq-y1-simp-a1",
        question: "Simplify: ⅔ of 45 + 18 ÷ 3 − 7",
        options: ["27", "29", "31", "23"],
        correctAnswer: "29",
        explanation: "⅔ of 45 = 30. 18÷3 = 6. 30+6−7 = 29.",
        difficulty: "Advanced"
      }
    ],
    placementStyle: [
      {
        id: "pq-y1-simp-p1",
        question: "Simplify: 3/4 × 16 + 2/5 of 25 − 12 ÷ 4",
        options: ["19", "22", "25", "15"],
        correctAnswer: "19",
        explanation: "3/4 × 16 = 12. 2/5 of 25 = 2/5 × 25 = 10. 12 ÷ 4 = 3. Total: 12 + 10 − 3 = 19.",
        difficulty: "Placement-Style"
      }
    ]
  },
  quickRevision: {
    summaryBullets: [
      "BODMAS: Brackets → Orders → Division/Multiplication (L→R) → Addition/Subtraction (L→R).",
      "'Of' = multiplication. Always convert before solving.",
      "D and M have EQUAL precedence — go LEFT to RIGHT. Same for A and S.",
      "Nested brackets: innermost first → outward. () → {} → [].",
      "Use approximation in MCQs to eliminate 2–3 options instantly."
    ],
    quickFormulas: [
      "BODMAS order: B → O → D/M → A/S",
      "'of' = ×",
      "Vinculum → () → {} → []"
    ]
  },
  keyTakeaways: [
    "BODMAS is not optional — it is the ONLY correct way to evaluate arithmetic expressions.",
    "D and M are same-level operators. A and S are same-level operators. Left-to-right breaks ties.",
    "Approximation saves 30+ seconds on MCQ simplification questions."
  ],
  selfCheckQuestions: [
    "Simplify without a calculator: 24 ÷ 8 × 3 + 6 − 2. What is your answer?",
    "What does '⅕ of 100 + 15' equal? Show your BODMAS steps.",
    "True or False: In BODMAS, Division always comes before Multiplication."
  ],
  sourcesAndReferences: [
    { sourceName: "Quantitative Aptitude — R.S. Aggarwal", sourceType: "Textbook", referenceNote: "Chapter: Simplification" },
    { sourceName: "How to Prepare for QA — Arun Sharma", sourceType: "Reference", referenceNote: "Simplification section" }
  ]
};

// ============================================================
// CHAPTER 6: Basic Percentages
// ============================================================
const ch6_percentages = {
  introduction: {
    overview: "Percentage means 'per hundred'. It is a way to express a number as a fraction of 100. Percentages are used everywhere: discounts, interest rates, tax, marks, growth rates. Converting between percentages, fractions, and decimals is the most fundamental arithmetic skill after basic operations.",
    placementRelevance: "Percentage is one of the most frequently tested topics in placement aptitude. It forms the basis for Profit & Loss, Simple/Compound Interest, Data Interpretation, and successive percentage problems. Virtually every quantitative section has 2–4 percentage-based questions.",
    realWorldContext: "Interest rates, GST calculations, salary hikes, election results, inflation data — all are expressed in percentages. Engineers regularly compute percentage changes, error margins, and efficiency improvements."
  },
  learningObjectives: [
    "Convert between percentages, fractions, and decimals fluently",
    "Calculate X% of Y and 'what percent is X of Y' type problems",
    "Find percentage increase and decrease correctly",
    "Solve 'base value' problems (given the percentage and result, find the original)"
  ],
  prerequisiteKnowledge: {
    requiredTopics: ["Fractions and decimals", "Basic multiplication and division"],
    quickRefresher: "Recall that 1/4 = 25%, 1/3 ≈ 33.33%, 1/5 = 20%, 1/8 = 12.5%. Know multiplication tables up to 20."
  },
  conceptExplanation: {
    coreDefinitions: [
      "Percentage: A ratio expressed out of 100. 'X%' means X per 100, i.e., X/100.",
      "Percentage of a number: X% of Y = (X/100) × Y.",
      "What % is A of B: (A/B) × 100%.",
      "Percentage Increase: [(New − Old) / Old] × 100%.",
      "Percentage Decrease: [(Old − New) / Old] × 100%.",
      "Base Value: If A is X% more than B, then B = A × 100/(100+X). If A is X% less than B, then B = A × 100/(100−X)."
    ],
    theoreticalIntuition: "Percentages convert unlike fractions into a common scale of 100, making comparison easy. 3/7 vs 5/11 is hard to compare directly, but 42.86% vs 45.45% is instant. The percentage change formula always divides by the ORIGINAL value (the base), not the new value — this is the most common conceptual error.",
    visualOrMentalModel: "Imagine a rectangle divided into 100 equal boxes. '35%' means 35 of those boxes are shaded. When calculating '20% of 350', think: 10% of 350 = 35, so 20% = 70. This halving/doubling of 10% is the fastest mental shortcut."
  },
  importantRulesAndFormulas: [
    {
      title: "X% of Y",
      formula: "X% of Y = (X × Y) / 100",
      description: "Find a percentage of any number.",
      whenToUse: "Discount, tax, commission calculations.",
      simpleExample: "15% of 240 = (15 × 240)/100 = 36"
    },
    {
      title: "Percentage Change",
      formula: "Change% = [(New − Old) / Old] × 100",
      variables: "Old = original value, New = changed value",
      description: "Always divide by the ORIGINAL (old) value.",
      whenToUse: "Growth, decline, price change problems.",
      simpleExample: "Price rose from ₹40 to ₹50: Change = (10/40)×100 = 25%"
    },
    {
      title: "Key fraction-percentage equivalents",
      formula: "1/2=50%, 1/3≈33.33%, 1/4=25%, 1/5=20%, 1/6≈16.67%, 1/8=12.5%, 1/10=10%, 1/12≈8.33%",
      description: "Memorize these for instant conversion in MCQs.",
      whenToUse: "Any problem involving fractions and percentages.",
      simpleExample: "3/8 = 3 × 12.5% = 37.5%"
    },
    {
      title: "Finding base value",
      formula: "If X% of B = A, then B = (A × 100) / X",
      description: "Reverse calculation to find the original number.",
      whenToUse: "'A certain number's 30% is 45. Find the number.'",
      simpleExample: "30% of ? = 45 → ? = (45 × 100)/30 = 150"
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      "The most important thing to remember about percentage change is that the denominator is ALWAYS the original (base) value. If a price increases from ₹200 to ₹250, the increase is (50/200)×100 = 25%, NOT (50/250)×100 = 20%. The base is the value BEFORE the change.",
      "Mental shortcuts using 10% as the building block: To find 10% of any number, simply move the decimal point one place left. 10% of 470 = 47. From this, compute 5% (half of 10%), 20% (double 10%), 15% (10% + 5%), 30% (3 × 10%), etc.",
      "For percentage increase followed by percentage decrease: if a quantity increases by X% and then decreases by X%, the net result is NOT zero. It is a net decrease of (X²/100)%. Example: 100 increased by 10% = 110; decreased by 10% = 99. Net change: −1%.",
      "When the problem says 'A is 25% more than B', the base is B. So A = 1.25B, which means B = A/1.25 = 0.8A. Equivalently, B is 20% less than A. This relationship is NOT symmetric."
    ],
    deepDiveAspects: [
      {
        title: "The 10% Building Block Method",
        content: "This is the fastest mental arithmetic method for percentages. Find 10% first (move decimal left), then build the required percentage. 10% of 680 = 68. So 5% = 34, 15% = 102, 20% = 136, 25% = 170, 30% = 204. This avoids multiplication entirely."
      },
      {
        title: "Percentage vs Percentage Points",
        content: "If interest rates go from 8% to 10%, the increase is 2 percentage POINTS but 25% in percentage terms ((10−8)/8 × 100 = 25%). Placement tests sometimes test this distinction."
      }
    ]
  },
  problemVariations: [
    { typeName: "Find X% of Y", description: "Direct calculation.", exampleSnippet: "Find 18% of 450." },
    { typeName: "What % is A of B", description: "Express one number as a percentage of another.", exampleSnippet: "36 is what % of 144?" },
    { typeName: "Percentage increase/decrease", description: "Calculate the change as a percentage.", exampleSnippet: "Price changed from 80 to 100. Find % increase." },
    { typeName: "Reverse percentage", description: "Given the result and percentage, find the base.", exampleSnippet: "After 20% discount, price is 480. Find original." }
  ],
  solvedExamples: [
    {
      id: "ex-y1-pct-1",
      title: "Finding a Percentage of a Number",
      question: "Find 15% of 360.",
      givenInfo: ["Percentage = 15%", "Number = 360"],
      conceptOrFormula: "X% of Y = (X × Y) / 100",
      steps: [
        { stepNumber: 1, title: "Apply formula", explanation: "15% of 360 = (15 × 360) / 100", math: "(15 × 360) / 100" },
        { stepNumber: 2, title: "Compute", explanation: "15 × 360 = 5400. Then 5400 / 100 = 54.", math: "5400 / 100 = 54" }
      ],
      finalAnswer: "54",
      whyItWorks: "Direct application of the percentage formula. Shortcut: 10% of 360 = 36, 5% = 18, so 15% = 36 + 18 = 54.",
      commonTrap: "Forgetting to divide by 100.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-pct-2",
      title: "Percentage Change Calculation",
      question: "A mobile phone's price increased from ₹12,000 to ₹15,000. Find the percentage increase.",
      givenInfo: ["Old price = ₹12,000", "New price = ₹15,000"],
      conceptOrFormula: "% Change = [(New − Old) / Old] × 100",
      steps: [
        { stepNumber: 1, title: "Find the increase", explanation: "Increase = 15,000 − 12,000 = ₹3,000.", math: "15000 − 12000 = 3000" },
        { stepNumber: 2, title: "Divide by original", explanation: "3,000 / 12,000 = 0.25 = 1/4.", math: "3000 / 12000 = 0.25" },
        { stepNumber: 3, title: "Convert to percentage", explanation: "0.25 × 100 = 25%.", math: "0.25 × 100 = 25%" }
      ],
      finalAnswer: "25%",
      whyItWorks: "The base for percentage change is always the ORIGINAL value (₹12,000), not the new value.",
      commonTrap: "Dividing by the new price (15,000) instead of the old price — this gives 20%, which is wrong.",
      difficulty: "Foundation"
    },
    {
      id: "ex-y1-pct-3",
      title: "Finding the Original Price (Reverse Percentage)",
      question: "After a 20% discount, a shirt costs ₹640. What was the original price?",
      givenInfo: ["Discount = 20%", "Selling price after discount = ₹640"],
      conceptOrFormula: "If discount is 20%, then SP = 80% of Original. So Original = SP × 100/80.",
      steps: [
        { stepNumber: 1, title: "Set up equation", explanation: "After 20% discount, 80% of original remains. So 80% of Original = 640.", math: "0.80 × Original = 640" },
        { stepNumber: 2, title: "Solve for Original", explanation: "Original = 640 / 0.80 = 640 × (100/80) = 800.", math: "640 / 0.80 = 800" }
      ],
      finalAnswer: "₹800",
      whyItWorks: "A 20% discount means the customer pays 80% of the original. To reverse: divide by 0.80 (or multiply by 100/80).",
      commonTrap: "Adding 20% to 640 (= 768) — this is wrong because 20% of 800 ≠ 20% of 640.",
      difficulty: "Intermediate"
    }
  ],
  shortcutMethods: {
    title: "Percentage Speed Techniques",
    traditionalVsShortcut: {
      traditionalMethod: "Calculate X × Y, then divide by 100 — involves large multiplication.",
      shortcutMethod: "Use the 10% building block: find 10% first (move decimal left), then scale. 15% = 10% + 5%. 25% = ¼. 12.5% = ⅛. Avoids multiplication entirely.",
      timeSavedPercent: "60%"
    },
    rulesForApplication: [
      "10% of any number = number ÷ 10 (move decimal point one left).",
      "Memorize: 1/3 = 33.33%, 1/6 = 16.67%, 1/7 ≈ 14.28%, 1/8 = 12.5%, 1/9 ≈ 11.11%.",
      "To find X% of Y, try computing Y% of X if easier (they're equal): 4% of 75 = 75% of 4 = 3."
    ]
  },
  commonMistakes: [
    {
      mistake: "Using the wrong base in percentage change",
      whyItHappens: "Confusing 'percentage of what' — the denominator must be the ORIGINAL value.",
      howToAvoid: "Always ask: 'percentage change FROM what?' The 'from' value is the denominator."
    },
    {
      mistake: "Assuming X% increase followed by X% decrease gives 0% change",
      whyItHappens: "The base changes after the first operation.",
      howToAvoid: "Net effect of +X% then −X% = −(X²/100)%. Always a net loss."
    },
    {
      mistake: "Adding 20% to find original after 20% discount",
      whyItHappens: "Reversing a percentage isn't the same as adding it back.",
      howToAvoid: "After X% discount, original = discounted price × 100/(100−X)."
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: "If the answer should be 'X% of 450' and options are 45, 67.5, 81, 90 — compute 10% = 45 and 20% = 90 to narrow down instantly.",
    questionSelectionAdvice: "Percentage problems are quick wins — solve them first. Most can be done mentally with the 10% method.",
    recruiterInsight: "Percentage forms the foundation of DI (Data Interpretation) which carries the highest weightage in TCS NQT and Infosys InfyTQ."
  },
  practiceSets: {
    easy: [
      {
        id: "pq-y1-pct-e1",
        question: "What is 25% of 480?",
        options: ["100", "120", "140", "96"],
        correctAnswer: "120",
        explanation: "25% = 1/4. 480/4 = 120.",
        difficulty: "Easy"
      },
      {
        id: "pq-y1-pct-e2",
        question: "Express 3/5 as a percentage.",
        options: ["50%", "55%", "60%", "65%"],
        correctAnswer: "60%",
        explanation: "3/5 × 100 = 60%.",
        difficulty: "Easy"
      }
    ],
    intermediate: [
      {
        id: "pq-y1-pct-i1",
        question: "A student scored 72 out of 90. What is the percentage?",
        options: ["75%", "80%", "78%", "82%"],
        correctAnswer: "80%",
        explanation: "(72/90) × 100 = 80%.",
        difficulty: "Intermediate"
      },
      {
        id: "pq-y1-pct-i2",
        question: "The population of a town increased from 25,000 to 30,000. Find the percentage increase.",
        options: ["15%", "16.67%", "20%", "25%"],
        correctAnswer: "20%",
        explanation: "Increase = 5000. % increase = (5000/25000) × 100 = 20%.",
        difficulty: "Intermediate"
      }
    ],
    advanced: [
      {
        id: "pq-y1-pct-a1",
        question: "After a 15% increase, a number becomes 460. What is the original number?",
        options: ["400", "391", "410", "380"],
        correctAnswer: "400",
        explanation: "115% of original = 460. Original = 460 × 100/115 = 400.",
        difficulty: "Advanced"
      }
    ],
    placementStyle: [
      {
        id: "pq-y1-pct-p1",
        question: "A number is increased by 20% and then decreased by 20%. The net change is:",
        options: ["No change", "4% increase", "4% decrease", "2% decrease"],
        correctAnswer: "4% decrease",
        explanation: "Net effect of +X% then −X% = −X²/100 = −(20²/100) = −4%.",
        difficulty: "Placement-Style"
      }
    ]
  },
  quickRevision: {
    summaryBullets: [
      "X% of Y = (X × Y) / 100. Also equals Y% of X.",
      "% change = [(New − Old) / Old] × 100. Base is ALWAYS the original.",
      "10% trick: move decimal one place left. Build other percentages from 10%.",
      "+X% then −X% = net −(X²/100)%. Never zero.",
      "Reverse: if result is R after X% increase, original = R × 100/(100+X)."
    ],
    quickFormulas: [
      "X% of Y = XY/100",
      "% Change = (Diff/Original) × 100",
      "1/4=25%, 1/5=20%, 1/8=12.5%, 1/3≈33.33%"
    ]
  },
  keyTakeaways: [
    "The base for percentage change is ALWAYS the original/old value.",
    "The 10% building block method eliminates multiplication — master it.",
    "+X% then −X% is ALWAYS a net loss of X²/100 percent."
  ],
  selfCheckQuestions: [
    "What is 12.5% of 240? Use the fraction shortcut (12.5% = 1/8).",
    "A shirt costs ₹800 after a 20% increase. What was the original price?",
    "If A is 25% more than B, what percentage is B less than A?"
  ],
  sourcesAndReferences: [
    { sourceName: "Quantitative Aptitude — R.S. Aggarwal", sourceType: "Textbook", referenceNote: "Chapter: Percentage" },
    { sourceName: "How to Prepare for QA — Arun Sharma", sourceType: "Reference", referenceNote: "Percentage section" }
  ]
};

// ============================================================
// Apply content to data
// ============================================================
const data = loadData();

const topicContentMap = {
  'y1-quant-simplification': ch5_simplification,
  'y1-quant-basic-percentages': ch6_percentages,
};

let updated = 0;
data.categories.forEach(cat => {
  cat.topics.forEach(topic => {
    const content = topicContentMap[topic.id];
    if (content) {
      // Merge content into topic, preserving id, yearId, category, topicNumber, title, tagline, estimatedMinutes, difficulty
      Object.keys(content).forEach(key => {
        topic[key] = content[key];
      });
      updated++;
      console.log(`✅ Updated: Ch ${topic.topicNumber} - ${topic.title}`);
    }
  });
});

saveData(data);
console.log(`\nDone! Updated ${updated} chapters.`);
