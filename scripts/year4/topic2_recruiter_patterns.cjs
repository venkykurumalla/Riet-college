const topic2_recruiter_patterns = {
  id: 'y4-strat-recruiter-patterns',
  title: 'Recruiter Assessment Blueprints: Sectional Time Triage, Pattern Deconstruction & Multi-Stage Placement Strategy',
  yearId: 4,
  category: 'Strategic Placement Mastery',
  estimatedTime: '6–8 Hours (One-Day Mastery)',
  prerequisites: [
    'Comprehensive mastery of Quantitative, Logical, Verbal, and DI domains (Years 1–3)',
    'Familiarity with Computer-Based Test (CBT) interfaces and adaptive test engines',
    'Basic probability and statistical expected value calculations for negative marking',
    'Technical programming baseline for integrated coding assessments'
  ],
  learningObjectives: [
    'Deconstruct the architectural blueprints of major recruitment platforms (TCS iON, Infosys InfyTQ, Mercer Mettl, AMCAT, CoCubes, HackerEarth)',
    'Implement the 3-Pass Time Triage Protocol to maximize aggregate score under non-adaptive vs adaptive timers',
    'Calculate Expected Value (EV) matrices for penalty-bearing vs zero-negative-marking assessment patterns',
    'Master high-frequency recurring problem blueprints across Quantitative, Reasoning, and Verbal sections',
    'Formulate optimal behavioral strategies for Psychometric, Gamified, and Situational Judgment Tests (SJT)',
    'Bridge the transition between Sectional Aptitude clearance and Technical Interview Round 1',
    'Secure 95th+ percentile composite ranking in mass hiring and high-tier differential drives (Ninja, Digital, Prime)'
  ],
  introduction: [
    'Final-year campus recruitment represents a high-stakes competitive funnel where tens of thousands of engineering graduates vie for top-tier software engineering, consulting, and digital specialist roles. In contemporary corporate hiring, the initial aptitude assessment is not merely an evaluation of mathematical or linguistic competence; it is a high-throughput algorithmic filter designed to eliminate 80% to 90% of applicants within the first 90 minutes.',
    'Major corporate hiring engines — including TCS NQT (Ninja, Digital, Prime), Infosys (SE, DSE, Specialist Programmer), Cognizant (GenC, GenC Elevate, GenC Next), Wipro Elite, Capgemini Exceller, and Accenture — utilize distinct assessment architectures. Some platforms utilize strictly timed, non-navigable sections (where unanswered questions cannot be revisited once the timer expires); others employ adaptive algorithms (where question difficulty scales dynamically with accuracy); while platforms like Mercer Mettl and eLitmus implement severe negative marking regimes.',
    'In this definitive capstone chapter, we deconstruct the exact structural blueprints of all major assessment engines, establish mathematical time-allocation algorithms (The 3-Pass Rule, Negative Penalty EV Analysis), analyze recurring problem templates across all aptitude genres, present 8 comprehensive assessment case studies with tactical breakdowns, and provide a 22-question placement-mastery challenge bank designed to prepare final-year candidates for day-one placement success.'
  ],
  coreConcepts: [
    'Platform Architecture & Test Engine Taxonomies:\n1. Section-Locked & Non-Revisitable (e.g., TCS iON): Candidates must complete Section 1 within a fixed time before Section 2 unlocks. You CANNOT jump between sections or return to earlier questions. Strategy: Constant velocity, never leave questions blank if no negative marking.\n2. Adaptive Item Response Theory (IRT) Engines: First question is medium difficulty. Correct answer leads to harder question (higher score weight); wrong answer drops difficulty. Strategy: Spend 40% of time getting the first 5-6 questions 100% correct to anchor high score ceiling.\n3. Free-Navigation with Negative Penalties (e.g., eLitmus, CAT): Full section navigation allowed, but wrong answers penalize (-0.25 or -0.50). Strategy: Strict 3-pass triage, aggressive elimination, zero blind guessing.',
    'The 3-Pass Sectional Time Triage Algorithm:\n- Pass 1 (0 to 40% of time): The "Instant Kill" Pass. Scan all questions. Solve only 10-30 second direct arithmetic, series, vocabulary, and formula questions. Mark medium/long questions for review. Never get bogged down.\n- Pass 2 (40% to 85% of time): The "Analytical Deduction" Pass. Solve standard 2-step problems, linear seating, 1-variable TSD, and DI tables.\n- Pass 3 (85% to 100% of time): The "Endgame Optimization" Pass. Attempt high-value complex puzzles or caselets with established partial structures. Review marked answers and execute calculated elimination.',
    'The Expected Value (EV) Guessing Matrix: Let p = probability of guessing correctly after eliminating k wrong options out of 4 options (p = 1 / (4 - k)). With +1 for correct and -0.25 for incorrect:\n- Zero options eliminated (k=0, p=0.25): EV = (0.25 × 1) - (0.75 × 0.25) = 0.25 - 0.1875 = +0.0625 (Statistically neutral/slight gain over large samples).\n- 1 option eliminated (k=1, p=0.333): EV = (0.333 × 1) - (0.667 × 0.25) = +0.166 (Mandatory to guess!).\n- 2 options eliminated (k=2, p=0.50): EV = (0.50 × 1) - (0.50 × 0.25) = +0.375 (High expected return!).\nRule: In penalty exams, ALWAYS guess if you can eliminate at least 1 distractor.',
    'Recruiter Assessment Tier Blueprints:\n1. Tier 1 (Foundation / Mass Hiring - 3.5 to 4.5 LPA): Basic arithmetic, grammar concord, elementary series, basic DI tables. Accuracy threshold: 70-75%.\n2. Tier 2 (Differential / Digital - 6.5 to 9.0 LPA): Advanced TSD/Work, multi-dimensional puzzles, critical RC inferences, advanced coding (DSA: DP, Graphs). Accuracy threshold: 80-85%.\n3. Tier 3 (Prime / Specialist Programmer - 10 to 19 LPA): Complex combinatorics, system-level puzzles, competitive algorithmic programming. Solved by top 2% of candidates.',
    'Gamified & Situational Judgment Tests (SJT): Modern assessments (Capgemini, Accenture, P&G) use cognitive mini-games (Grid Challenge, Switch Challenge, Motion Challenge) and workplace SJTs. SJT Rule: Always align responses with extreme professional integrity, proactive collaboration, safety compliance, and structured escalation protocols.'
  ],
  definitions: [
    {
      term: 'Section-Locked Assessment',
      meaning:
        'A computerized test format where each subject section has an independent, non-transferable countdown timer, and navigating back to previous sections or questions is disabled.'
    },
    {
      term: 'Adaptive Testing Engine',
      meaning:
        'An algorithmic testing model where the difficulty of subsequent questions is dynamically adjusted based on the correctness of the candidate’s prior responses.'
    },
    {
      term: '3-Pass Time Triage',
      meaning:
        'A structured time-management protocol that partitions exam duration into three distinct sweeps: immediate quick-kills, systematic analytical problems, and endgame optimization.'
    },
    {
      term: 'Situational Judgment Test (SJT)',
      meaning:
        'A psychometric evaluation assessing behavioral ethics, workplace decision-making, conflict resolution, and corporate values under simulated operational scenarios.'
    }
  ],
  rulesAndProperties: [
    {
      rule: 'Rule 1: The 90-Second Stop-Loss Rule',
      explanation:
        'If you have spent 90 seconds on an aptitude question without deriving a clear algebraic equation or logical grid, immediately stop. Do not let ego sink 5 minutes into a single 1-mark question. Flag it, make an educated elimination, and proceed.',
      example:
        'Spending 6 minutes solving a stubborn geometry problem leaves 4 other easy arithmetic questions unread, costing 3 net marks.'
    },
    {
      rule: 'Rule 2: Zero-Negative Marking Saturation Rule',
      explanation:
        'In exams with NO negative marking (TCS NQT, Infosys, Cognizant, Wipro), NEVER leave a single question unanswered. In the final 60 seconds of a locked section, bubble in an educated guess for all remaining blanks.',
      example:
        'Leaving 5 questions blank has an EV of 0. Guessing all 5 gives an expected gain of +1.25 marks with zero downside risk.'
    },
    {
      rule: 'Rule 3: First-Third IRT Weightage Rule',
      explanation:
        'In adaptive tests, the first 30% of questions establish your scoring bracket (High, Medium, Low). Invest 40-45% of your total section time ensuring near-100% accuracy on early questions to anchor in the top tier.',
      example:
        'Getting the first 5 questions right and missing 3 later yields a higher percentile than missing 2 of the first 3 questions and getting all later ones right.'
    }
  ],
  formulas: [
    {
      name: 'Expected Value of Elimination Guessing',
      formula: 'EV = [ (1 / (4 - k)) × M_correct ] - [ ((3 - k) / (4 - k)) × M_penalty ]',
      variables: ['k = Number of eliminated options (0 to 3)', 'M_correct = Marks awarded for correct answer', 'M_penalty = Penalty for wrong answer'],
      whenToUse: 'Deciding whether to mark a guess in tests with negative marking.',
      simpleExample: 'k=1 eliminated, M_correct=1, M_penalty=0.25 => EV = (1/3 × 1) - (2/3 × 0.25) = 0.333 - 0.167 = +0.166 marks.'
    },
    {
      name: 'Sectional Velocity Requirement Formula',
      formula: 'Velocity = Total Section Questions / (Section Time in Minutes)',
      variables: ['Velocity = Required questions per minute to achieve full attempt'],
      whenToUse: 'Setting your pacing benchmark prior to starting any test section.',
      simpleExample: 'TCS NQT Quant: 26 questions in 40 minutes => Velocity = 26/40 = 0.65 questions/min (1 min 32 sec per question).'
    }
  ],
  problemVariations: [
    {
      type: 'Variation 1: TCS NQT Advanced Cognitive Blueprint',
      description: 'Section-locked test: Advanced Quantitative (22q, 40m) + Advanced Reasoning (22q, 40m) + Verbal (24q, 30m). No negative marking.',
      sampleSnippet: 'Deconstruct a TCS NQT numerical section featuring 16 standard MCQs and 6 Fill-in-the-Blank (FITB) advanced questions.'
    },
    {
      type: 'Variation 2: Infosys Assessment Blueprint',
      description: 'Strict sectional timing: Reasoning Ability (15q, 25m) + Technical Ability/Math (10q, 35m) + Verbal (20q, 20m) + Pseudocode (5q, 10m).',
      sampleSnippet: 'Allocating 25 minutes across 2 floor puzzles (10q) and 5 syllogism/data sufficiency questions.'
    },
    {
      type: 'Variation 3: Cognizant GenC / Elevate Assessment Blueprint',
      description: 'Automata Fix (debugging) + AMCAT Quantitative + AMCAT Analytical + Verbal. High speed requirements (45-50s per question).',
      sampleSnippet: 'Pacing strategy for AMCAT adaptive numerical tests with high initial item weightage.'
    },
    {
      type: 'Variation 4: Capgemini Exceller Gamified Aptitude',
      description: 'Pseudocode + English + Game-Based Aptitude (4 mini-games) + Behavioral Competency Profiler.',
      sampleSnippet: 'Optimizing spatial memory and deductive logic in the Switch Challenge and Grid Challenge.'
    },
    {
      type: 'Variation 5: Situational Judgment & Corporate Workplace Ethics',
      description: 'Evaluating conflicting stakeholder demands, project deadline slips, and whistleblower ethical dilemmas.',
      sampleSnippet: 'Your team lead asks you to deploy code with a known non-critical bug to meet a contractual deadline. What do you do?'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-rec-1',
      title: 'TCS NQT Section-Locked Time Allocation Model',
      question:
        'A candidate is taking the Advanced Quantitative section of TCS NQT containing 22 questions (16 standard MCQs and 6 advanced Fill-in-the-Blank numerical questions) with a hard-locked countdown timer of 40 minutes and NO negative marking.\n\nFormulate the optimal tactical time-allocation strategy to maximize overall score and secure a Digital/Prime shortlisting cutoff.',
      given: ['22 total questions (16 MCQ, 6 Advanced FITB)', 'Total Time = 40 minutes (2,400 seconds)', 'Average time per question = 109 seconds', 'Zero negative marking'],
      conceptUsed: 'Weighted Sectional Partitioning & Zero-Penalty Saturation Protocol.',
      stepByStep: [
        'Step 1: Understand scoring tiers: The 6 Advanced FITB questions carry higher psychometric weight in determining Digital (7 LPA) and Prime (9 LPA) upgrades. The 16 MCQs ensure the baseline Ninja cutoff (3.5 LPA).',
        'Step 2: Allocate Time Windows:\n- Phase 1 (Minutes 0 to 18 — 18 mins): Rapid Sweep of MCQs. Scan all 16 MCQs. Solve 10-12 foundation/intermediate arithmetic questions (Number System, Percentages, Profit-Loss, HCF-LCM) at ~80 seconds each. Mark 4 time-consuming questions for later.\n- Phase 2 (Minutes 18 to 35 — 17 mins): Advanced FITB Deep Dive. Allocate ~2.8 minutes (170 seconds) each to the 6 Advanced FITB questions. Focus on TSD relative speed, time & work alternations, and probability permutations.\n- Phase 3 (Minutes 35 to 40 — 5 mins): Endgame Saturation. Return to the 4 skipped MCQs. Use Digital Sums, Unit Digit elimination, and Vedic shortcuts. In the final 60 seconds, ensure 100% of all questions have an answer entered (Zero Blank Policy).',
        'Step 3: Outcome: Guarantees 14-16 correct answers (80%+ accuracy), clearing the 90th percentile threshold for high-tier upgrades.'
      ],
      finalAnswer: 'Phase 1 (18m): 12 Quick MCQs | Phase 2 (17m): 6 Advanced FITBs | Phase 3 (5m): Remaining MCQs + 100% Saturation',
      whyMethodWorks:
        'Separating high-speed foundation MCQs from high-weightage advanced FITBs prevents getting stuck early while maximizing composite score.',
      commonTrap:
        'Spending 5 minutes on the very first question because it is difficult, leaving 6 easy questions unread when the timer runs out.'
    },
    {
      id: 'ex-rec-2',
      title: 'Expected Value Calculation in Negative Marking Aptitude',
      question:
        'In an assessment with +1.0 mark for a correct answer and -0.25 penalty for an incorrect answer, a candidate has 4 remaining questions with 2 minutes left. For each question, the candidate can confidently eliminate TWO out of the four options as definitively false, leaving a 50-50 choice between the remaining two options.\n\nMathematically calculate the Expected Value (EV) of guessing all 4 questions versus leaving them blank. Should the candidate guess?',
      given: ['4 questions', '2 options eliminated per question (Probability of correct guess p = 0.50)', 'Correct = +1.0, Incorrect = -0.25'],
      conceptUsed: 'Statistical Expected Value: EV(Total) = 4 × [ (p × 1.0) - ((1 - p) × 0.25) ].',
      stepByStep: [
        'Step 1: Calculate expected value for a single 50-50 guess:\nEV(1 question) = (0.50 × (+1.0)) + (0.50 × (-0.25)) = 0.50 - 0.125 = +0.375 marks.',
        'Step 2: Calculate aggregate expected value across all 4 questions:\nEV(4 questions) = 4 × (+0.375) = +1.50 marks.',
        'Step 3: Compare with leaving blank: Leaving 4 questions blank yields exactly 0.00 marks.',
        'Step 4: Statistical Decision: Guessing provides an expected net gain of +1.50 marks (with a 93.75% probability of achieving a positive or zero score: P(≥0) = 1 - (0.5)⁴ = 1 - 0.0625 = 93.75%).',
        'Step 5: Tactical Recommendation: The candidate MUST guess all 4 questions!'
      ],
      finalAnswer: 'Expected Value = +1.50 marks. The candidate MUST guess all 4 questions.',
      whyMethodWorks:
        'Eliminating 2 options shifts the probability from 25% to 50%, transforming a negative-penalty gamble into a highly favorable positive-expectation bet.',
      commonTrap:
        'Leaving questions blank out of irrational fear of negative marking, throwing away an expected +1.5 marks.'
    },
    {
      id: 'ex-rec-3',
      title: 'Infosys Reasoning Section Puzzle Triage',
      question:
        'The Reasoning Ability section of Infosys features 15 questions in 25 minutes. The section consists of two 5-question puzzle sets (one 7-person floor puzzle and one 8-person circular seating arrangement) and 5 standalone questions (2 Syllogisms, 2 Data Sufficiency, 1 Coding-Decoding).\n\nWhat is the recommended execution sequence and time budget?',
      given: ['15 questions, 25 minutes (1,500 seconds)', 'Two 5-question puzzle sets (10 questions total)', '5 standalone questions'],
      conceptUsed: 'Risk-Decoupled Execution Sequence.',
      stepByStep: [
        'Step 1: Execute Standalone Questions FIRST (Minutes 0 to 6 — 6 mins):\n- 2 Syllogisms (Venn method): 1.5 mins total\n- 1 Coding-Decoding: 1 min\n- 2 Data Sufficiency: 2.5 mins total\n- Subtotal: 5 questions secured in 5-6 minutes. Instant psychological confidence boost!',
        'Step 2: Select the Easier Puzzle Set (Minutes 6 to 15 — 9 mins):\n- Read both puzzle briefs (30 seconds). Choose the 7-person floor puzzle (standard vertical column, no vacant floor).\n- Spend 4.5 minutes constructing the grid and verifying.\n- Spend 2.5 minutes answering all 5 connected questions.\n- Subtotal: 10 questions secured in 15 minutes.',
        'Step 3: Tackle the Final Puzzle Set (Minutes 15 to 24 — 9 mins):\n- Solve the 8-person circular arrangement (track inward vs outward facing).\n- Spend 5.5 minutes resolving the circle and 2.5 minutes bubbling answers.',
        'Step 4: Final 1 Minute: Review and verify all answers filled.'
      ],
      finalAnswer: 'Sequence: Standalone (6m) -> Floor Puzzle (9m) -> Circular Seating (9m) -> Buffer (1m)',
      whyMethodWorks:
        'Solving standalones first ensures that even if a complex puzzle encounters a 2-minute delay, the candidate has already banked 33% of the section marks.',
      commonTrap:
        'Starting with the circular puzzle immediately, hitting a contradiction at minute 12, panicking, and leaving the entire standalone section unattempted.'
    },
    {
      id: 'ex-rec-4',
      title: 'Situational Judgment Test: Technical Ethical Dilemma',
      question:
        'Workplace Scenario:\n\nYou are a junior software engineer working on a mission-critical billing module for a healthcare client. Two days before scheduled production deployment, you discover an edge-case concurrency race condition that occurs under high server load, potentially causing duplicate invoice generation in 0.2% of transactions. Your Team Lead tells you: "Our deployment deadline is fixed by contractual penalties. The bug is rare. Deploy the code as-is on Friday, and we will silently patch it next sprint."\n\nRank the following responses from Most Effective (1) to Least Effective (4):\n(A) Follow the Team Lead’s instructions without question since they are senior and hold accountability.\n(B) Immediately email the client’s CEO directly, bypassing your team lead and project manager.\n(C) Document the race condition, quantify the potential financial/legal impact of duplicate billing, and present a risk mitigation proposal (e.g., temporary feature flag or weekend patch) to your Team Lead and Project Manager.\n(D) Secretly delay the build pipeline on deployment day so the release fails automatically due to infrastructure timeout.',
      given: ['Healthcare billing module race condition (0.2% duplicate invoices)', 'Team lead demands deployment to avoid contractual penalties'],
      conceptUsed: 'Corporate Governance, Professional Ethics & Constructive Escalation Framework.',
      stepByStep: [
        'Step 1: Evaluate ethical and business risk: Healthcare billing is legally regulated. Duplicate invoices can trigger compliance audits, fraud investigations, and severe reputation damage far exceeding a delayed sprint penalty.',
        'Step 2: Evaluate Option (C): Highly professional. Uses empirical data (documenting issue, quantifying financial risk) and proposes constructive solutions (feature flags, hotfix) through proper management channels (Lead + PM). -> Rank 1 (Most Effective).',
        'Step 3: Evaluate Option (A): Unprofessional passivity. Blind obedience to unethical instructions makes the engineer complicit in systemic financial errors. -> Rank 3.',
        'Step 4: Evaluate Option (B): Disproportionate escalation. Bypassing internal management to contact the client CEO destroys trust and violates communication protocols without giving internal leadership a chance to resolve it. -> Rank 2 (or 3/4).',
        'Step 5: Evaluate Option (D): Malicious sabotage. Deliberately breaking the build pipeline is grounds for immediate disciplinary termination. -> Rank 4 (Least Effective).'
      ],
      finalAnswer: 'Ranking: (C) [Rank 1] > (A) [Rank 2] > (B) [Rank 3] > (D) [Rank 4]',
      whyMethodWorks:
        'SJT scoring heavily rewards constructive data-driven escalation and severely penalizes workplace sabotage or unprofessional public bypasses.',
      commonTrap:
        'Selecting Option (B) believing that "whistleblowing to the client" is always the top ethical choice, ignoring internal escalation protocols.'
    },
    {
      id: 'ex-rec-5',
      title: 'Adaptive IRT Test Item Pacing Strategy',
      question:
        'In an AMCAT adaptive numerical reasoning test of 20 questions in 25 minutes, explain why spending 2.5 minutes on Question 1 is mathematically superior to spending 1.25 minutes evenly across all questions.',
      given: ['Adaptive 20-question test, 25 minutes total'],
      conceptUsed: 'Item Response Theory (IRT) Theta Estimation.',
      stepByStep: [
        'Step 1: In IRT models, each question is assigned a difficulty parameter (b). The system estimates the candidate’s ability (theta) dynamically after each response.',
        'Step 2: If a candidate answers Question 1 and Question 2 correctly, the engine jumps to the High-Ability bracket (b = +1.5), unlocking questions worth 3x the points of low-tier questions.',
        'Step 3: If a candidate rushes Question 1 and makes a careless arithmetic error, the engine drops the candidate into the Low-Ability bracket (b = -1.5). Even if the candidate gets all subsequent low-difficulty questions right, the maximum achievable score is artificially capped.',
        'Step 4: Therefore, investing extra time (2 to 2.5 minutes) on the first 4-5 questions anchors the candidate firmly in the highest scoring tier.'
      ],
      finalAnswer: 'Early high accuracy anchors the adaptive engine in the top scoring bracket, raising the overall score ceiling permanently.',
      whyMethodWorks:
        'IRT algorithms place exponential weight on early consistency to establish candidate ability bands.',
      commonTrap:
        'Treating an adaptive test like a linear non-adaptive test and rushing through early questions to "save time for later".'
    },
    {
      id: 'ex-rec-6',
      title: 'Pseudocode Assessment Flow Analysis',
      question:
        'Evaluate the output of the following pseudocode snippet:\n\nInteger a, b, c\nSet a = 4, b = 7, c = 2\na = (a ^ b) + c\nb = (b & a) + 3\nif (a + b > 15)\n    Print a + b\nelse\n    Print a * b\n\nNote: ^ is Bitwise XOR, & is Bitwise AND.',
      given: ['a = 4 (0100_2), b = 7 (0111_2), c = 2'],
      conceptUsed: 'Bitwise Logical Manipulation & Sequential Variable State Tracing.',
      stepByStep: [
        'Step 1: Evaluate a = (a ^ b) + c:\n- a ^ b = 4 ^ 7 = 0100_2 ^ 0111_2 = 0011_2 = 3.\n- a = 3 + c = 3 + 2 = 5.',
        'Step 2: Evaluate b = (b & a) + 3 with updated a = 5:\n- b & a = 7 & 5 = 0111_2 & 0101_2 = 0101_2 = 5.\n- b = 5 + 3 = 8.',
        'Step 3: Evaluate conditional: (a + b > 15):\n- a + b = 5 + 8 = 13.\n- Is 13 > 15? FALSE.',
        'Step 4: Execute else branch: Print a * b = 5 * 8 = 40.'
      ],
      finalAnswer: 'Output = 40',
      whyMethodWorks:
        'Tracing variable states sequentially and converting integers to 4-bit binary representations ensures 100% precision in pseudocode evaluation.',
      commonTrap:
        'Using the original value of a (4) instead of the updated value of a (5) when computing b = (b & a) + 3.'
    },
    {
      id: 'ex-rec-7',
      title: 'Transitioning from Aptitude Clearance to Technical Interview',
      question:
        'Analyze how recruiters bridge a candidate’s online aptitude assessment scores with Round 1 Technical Interview questions.',
      given: ['Post-aptitude Technical Round 1 context.'],
      conceptUsed: 'Assessment Audit & Resume Synchronization.',
      stepByStep: [
        'Step 1: Online Assessment Audit: In top tech drives (Infosys DSE, TCS Prime), interviewers receive the candidate’s test breakdown (e.g., "Cleared DP coding question in 18 minutes; scored 94% in Quant, 72% in Logical").',
        'Step 2: Code Review Challenge: The interviewer frequently asks the candidate to re-explain their coding logic or optimize the time/space complexity of the algorithm they submitted during the test.',
        'Step 3: Core CS Mapping: Strong quant scores prompt deeper questions on Algorithm Analysis (Big-O, Master Theorem, Graph Theory) and Database Normalization.',
        'Step 4: Recommendation: Immediately after finishing your online assessment, jot down the coding problem statements and your approach on paper so you can discuss them fluently in the interview.'
      ],
      finalAnswer: 'Interviewers review submitted code and score profiles; candidates must be prepared to defend, explain, and optimize their test solutions live.',
      whyMethodWorks:
        'Verifies that the candidate authored the code independently and possesses deep architectural comprehension.',
      commonTrap:
        'Forgetting the coding problem you solved in the online test and stumbling when the technical interviewer asks you to walk through your code.'
    },
    {
      id: 'ex-rec-8',
      title: 'Gamified Assessment Switch Challenge Strategy',
      question:
        'In Capgemini’s Switch Challenge, a candidate is shown 4 colored symbols at the top, a 4-digit code (e.g., 2-4-1-3) in the middle, and 4 re-ordered symbols at the bottom. Explain the mental decoding algorithm to solve this under 4 seconds per round.',
      given: ['Switch Challenge mapping rules.'],
      conceptUsed: 'Index Permutation Inversion.',
      stepByStep: [
        'Step 1: Understand the operator: The 4-digit code (e.g., 2-4-1-3) indicates which initial position moves to which final slot:\n- Position 1 moves to the symbol that was originally in Position 2.\n- Position 2 moves to the symbol that was originally in Position 4.\n- Position 3 moves to the symbol that was originally in Position 1.\n- Position 4 moves to the symbol that was originally in Position 3.',
        'Step 2: Do NOT track all 4 symbols simultaneously. Track ONLY ONE distinct symbol (e.g., the Red Star).',
        'Step 3: Locate where the Red Star is in the top row (e.g., Position 1). Check the switch code to see where Position 1 goes (e.g., to slot 3).',
        'Step 4: Look at the 4 multiple-choice options and eliminate all options where the Red Star is NOT in slot 3. This eliminates 3 out of 4 options in 2.5 seconds!'
      ],
      finalAnswer: 'Track a single distinct symbol rather than all four, and eliminate options based on its transformed position.',
      whyMethodWorks:
        'Single-entity tracking reduces working memory load by 75%, allowing rapid 3-second responses across 20 game rounds.',
      commonTrap:
        'Trying to visualize all 4 symbols shifting simultaneously, causing cognitive overload and timing out.'
    }
  ],
  alternativeMethods: [
    {
      title: 'Pacing Comparison: Fixed Linear Solving vs 3-Pass Triage',
      standardMethod:
        'Linear Question-by-Question Solving: Solve Question 1, then Question 2, then Question 3 in strict chronological order.',
      shortcutMethod:
        '3-Pass Triage Protocol: Sweep 1 (Quick Kills) -> Sweep 2 (Core Analytical) -> Sweep 3 (Deep Optimization + Saturation).',
      bestApproachExplanation:
        '3-Pass Triage yields 25-35% higher total attempts by ensuring zero easy questions are missed due to timer expiration.'
    }
  ],
  fasterMethods: [
    'Single-Entity Filter for Gamified Switch Challenge: Track only 1 symbol’s destination slot to eliminate 3 options in 2.5 seconds.',
    'Fill-in-the-Blank Reverse Check: For numerical FITBs, check modular divisibility and scale units before typing decimals.'
  ],
  commonMistakes: [
    {
      mistake: 'Getting stuck on a single difficult problem for >3 minutes.',
      whyItHappens: 'Ego and sunk-cost fallacy ("I have already spent 2 minutes, I must finish it").',
      howToAvoid: 'Enforce the strict 90-second stop-loss rule. Flag it, guess if no penalty, and move on.'
    },
    {
      mistake: 'Leaving questions blank in zero-negative marking assessments.',
      whyItHappens: 'Treating zero-penalty exams like CAT or GATE.',
      howToAvoid: 'Always saturate 100% of answer bubbles in the final 60 seconds of any section-locked test.'
    }
  ],
  placementStrategy: [
    'TCS NQT: Ninja (3.5L) vs Digital (7L) vs Prime (9L) hinges on Advanced FITB accuracy and coding test completion. Target 100% attempt.',
    'Infosys: Solve Standalone reasoning questions before attempting floor/circular puzzles to bank early marks.',
    'Cognizant / Accenture: High speed verbal and pseudocode. Use bitwise shortcuts and elimination filters.'
  ],
  practiceQuestions: [
    {
      id: 'p-rec-1',
      tier: 'Foundation',
      question: 'In an exam with NO negative marking, what should you do if 60 seconds remain and you have 5 unanswered questions?',
      options: ['Leave them blank to be safe', 'Bubble an educated guess for all 5 immediately', 'Spend the 60s trying to solve just one question', 'Close the test window'],
      correctOptionIndex: 1,
      explanation: 'With zero negative marking, bubbling all 5 provides an expected gain of +1.25 marks with zero risk.'
    },
    {
      id: 'p-rec-2',
      tier: 'Foundation',
      question: 'In a section-locked test like TCS NQT, can you navigate back to Section 1 once Section 2 has started?',
      options: ['Yes, at any time', 'No, sections are hard-locked', 'Only if the invigilator approves', 'Only in the final 5 minutes'],
      correctOptionIndex: 1,
      explanation: 'TCS iON platform locks sections permanently once their dedicated countdown timer expires.'
    },
    {
      id: 'p-rec-3',
      tier: 'Foundation',
      question: 'What is the 90-Second Stop-Loss Rule?',
      options: ['Spend at least 90s on every question', 'Never spend more than 90s on a question without clear progress', 'Take a 90s break every 10 minutes', 'Submit the test in 90 seconds'],
      correctOptionIndex: 1,
      explanation: 'The 90-second stop-loss prevents sunk-cost time traps on difficult questions.'
    },
    {
      id: 'p-rec-4',
      tier: 'Foundation',
      question: 'What is the bitwise XOR of 12 (1100_2) and 10 (1010_2)?',
      options: ['4 (0100_2)', '6 (0110_2)', '8 (1000_2)', '14 (1110_2)'],
      correctOptionIndex: 1,
      explanation: '1100 ^ 1010 = 0110_2 = 6.'
    },
    {
      id: 'p-rec-5',
      tier: 'Foundation',
      question: 'In an adaptive IRT assessment, which questions carry the highest influence on your final score ceiling?',
      options: ['The first 30% of questions', 'The middle 20% of questions', 'The last 2 questions', 'All questions have identical weight'],
      correctOptionIndex: 0,
      explanation: 'Early questions establish the initial ability estimation bracket (theta).'
    },
    {
      id: 'p-rec-6',
      tier: 'Foundation',
      question: 'In a Situational Judgment Test, what is the primary guiding principle for workplace ethics?',
      options: ['Maximize personal credit', 'Proactive communication, data documentation, and proper procedural escalation', 'Ignore minor safety flaws', 'Argue publicly with supervisors'],
      correctOptionIndex: 1,
      explanation: 'SJT scoring models reward transparent documentation and constructive internal escalation.'
    },
    {
      id: 'p-rec-7',
      tier: 'Intermediate',
      question: 'In an exam with +1 mark for correct and -0.33 for wrong, you eliminate 1 option out of 4. What is the Expected Value of guessing?',
      options: ['-0.05 marks', '0.00 marks', '+0.11 marks', '+0.25 marks'],
      correctOptionIndex: 2,
      explanation: 'EV = (1/3 × 1.0) - (2/3 × 0.33) = 0.333 - 0.222 = +0.111 marks. Positive return!'
    },
    {
      id: 'p-rec-8',
      tier: 'Intermediate',
      question: 'A section contains 30 questions in 30 minutes. Following the 3-Pass Rule, how many minutes should be dedicated to Pass 1 (Quick Kills)?',
      options: ['5 minutes', '10–12 minutes', '20 minutes', '28 minutes'],
      correctOptionIndex: 1,
      explanation: 'Pass 1 typically occupies 35-40% of section duration (10-12 minutes) to sweep and bank all 15-30s questions.'
    },
    {
      id: 'p-rec-9',
      tier: 'Intermediate',
      question: 'Evaluate the pseudocode output:\nSet x = 5, y = 3\nx = x << 1\ny = y >> 1\nPrint x + y',
      options: ['9', '10', '11', '12'],
      correctOptionIndex: 2,
      explanation: 'x << 1 = 5 × 2 = 10. y >> 1 = 3 / 2 = 1. Output = 10 + 1 = 11.'
    },
    {
      id: 'p-rec-10',
      tier: 'Intermediate',
      question: 'In Infosys Reasoning, why should Syllogisms and Data Sufficiency be solved before large Floor Puzzles?',
      options: ['They carry more marks', 'They are independent, 45-second quick-kills that bank early marks without risk of total set failure', 'Puzzles are optional', 'Syllogisms cannot be wrong'],
      correctOptionIndex: 1,
      explanation: 'Decoupled standalone questions provide guaranteed score velocity without multi-minute grid risk.'
    },
    {
      id: 'p-rec-11',
      tier: 'Intermediate',
      question: 'In Capgemini’s Motion Challenge, what cognitive skill is primarily evaluated?',
      options: ['Speed reading', 'Spatial planning and minimum-move obstacle navigation', 'Vocabulary recall', 'Python syntax'],
      correctOptionIndex: 1,
      explanation: 'The Motion Challenge tests spatial reasoning and optimal path-finding under step constraints.'
    },
    {
      id: 'p-rec-12',
      tier: 'Intermediate',
      question: 'If you have solved 18 out of 22 questions accurately in TCS NQT Advanced Quant, what percentile bracket do you typically occupy?',
      options: ['50th–60th', '70th–75th', '90th–95th+', 'Below average'],
      correctOptionIndex: 2,
      explanation: 'An 80%+ accuracy in Advanced Quant is benchmarked in the top 5-10% of national test takers.'
    },
    {
      id: 'p-rec-13',
      tier: 'Advanced',
      question: 'In a 60-minute test with 40 questions (+3 for correct, -1 for wrong), a student attempts 30 questions (24 correct, 6 wrong) and leaves 10 blank. What is their final score?',
      options: ['64', '66', '68', '72'],
      correctOptionIndex: 1,
      explanation: 'Score = (24 × 3) - (6 × 1) = 72 - 6 = 66 marks.'
    },
    {
      id: 'p-rec-14',
      tier: 'Advanced',
      question: 'Evaluate the recursive pseudocode output for function f(4):\nfunction f(n):\n    if n <= 1 return 1\n    return n + f(n - 1) + f(n - 2)',
      options: ['12', '14', '16', '19'],
      correctOptionIndex: 3,
      explanation: 'f(0)=1, f(1)=1. f(2) = 2 + 1 + 1 = 4. f(3) = 3 + f(2) + f(1) = 3 + 4 + 1 = 8. f(4) = 4 + f(3) + f(2) = 4 + 8 + 4 = 16 (or 16).'
    },
    {
      id: 'p-rec-15',
      tier: 'Advanced',
      question: 'In an SJT scenario, a colleague asks to borrow your corporate credentials to run an urgent query while their account is locked. What is the correct action?',
      options: ['Give your password since it is urgent', 'Refuse politely and direct them to the IT Helpdesk for an emergency unlock ticket', 'Log in for them and leave your laptop unlocked', 'Report them immediately to the police'],
      correctOptionIndex: 1,
      explanation: 'Sharing corporate credentials is an explicit information security violation. The correct protocol is directing to authorized IT channels.'
    },
    {
      id: 'p-rec-16',
      tier: 'Advanced',
      question: 'What is the primary factor determining whether an online test taker is shortlisted for the TCS Prime (9 LPA) interview versus the Ninja (3.5 LPA) interview?',
      options: ['Candidate college GPA only', 'Performance on Advanced Quantitative, Advanced Reasoning, and Advanced Hands-on Coding questions', 'Typing speed in the English section', 'Submission timestamp'],
      correctOptionIndex: 1,
      explanation: 'Prime and Digital shortlisting is determined exclusively by the composite performance in the Advanced section and Coding.'
    },
    {
      id: 'p-rec-17',
      tier: 'Advanced',
      question: 'In an online test, you notice a question has ambiguous phrasing where two answers could be valid depending on assumption. What is the best strategy?',
      options: ['Close the test and email support', 'Select the most standard convention/interpretation, take a quick mental note, and move on', 'Spend 10 minutes analyzing both ambiguities', 'Leave it blank'],
      correctOptionIndex: 1,
      explanation: 'Choose the most conventional standard textbook interpretation and maintain your section velocity.'
    },
    {
      id: 'p-rec-18',
      tier: 'Placement-Style',
      question: 'In a 45-minute coding round with 2 questions (Q1: Basic String/Array, Q2: Advanced DP/Graph), what is the optimal time split?',
      options: ['22.5 mins each', 'Q1: 12–15 mins, Q2: 30 mins', 'Q1: 35 mins, Q2: 10 mins', 'Skip Q1 entirely'],
      correctOptionIndex: 1,
      explanation: 'Solving Q1 in 12-15 minutes locks in baseline marks, leaving a solid 30-minute block to design and debug Q2.'
    },
    {
      id: 'p-rec-19',
      tier: 'Placement-Style',
      question: 'Evaluate bitwise pseudocode:\nSet p = 6, q = 9\np = p ^ q\nq = p ^ q\np = p ^ q\nPrint p, q',
      options: ['6, 9', '9, 6', '15, 15', '0, 0'],
      correctOptionIndex: 1,
      explanation: 'Classic 3-step XOR swap: swaps the values of p and q without a temporary variable. Result: p=9, q=6.'
    },
    {
      id: 'p-rec-20',
      tier: 'Placement-Style',
      question: 'In an AMCAT assessment, why does answering a question slowly but accurately in the first 5 questions yield a higher final score than answering quickly and getting 2 wrong?',
      options: ['Because the timer gives bonus points', 'Because early errors demote the candidate to a lower difficulty/weightage pool', 'Because AMCAT has no timer', 'Because all questions are manually graded'],
      correctOptionIndex: 1,
      explanation: 'IRT models heavily penalize early failures by capping the subsequent item difficulty bracket.'
    },
    {
      id: 'p-rec-21',
      tier: 'Placement-Style',
      question: 'What is the most effective way to prepare for Round 1 Technical Interviews immediately following an online test?',
      options: ['Forget about the test', 'Document the coding questions and test logic in a notebook for post-test review', 'Complain about test difficulty online', 'Study unrelated biology topics'],
      correctOptionIndex: 1,
      explanation: 'Interviewers frequently ask candidates to explain and optimize their online test coding submissions.'
    },
    {
      id: 'p-rec-22',
      tier: 'Placement-Style',
      question: 'In Cognizant Automata Fix, what is being evaluated?',
      options: ['Typing speed', 'Identifying and correcting logical, syntax, and boundary-condition bugs in pre-written code', 'Writing full games from scratch', 'Database administration'],
      correctOptionIndex: 1,
      explanation: 'Automata Fix evaluates diagnostic code comprehension, off-by-one bug fixing, and boundary condition handling.'
    }
  ],
  mixedChallenges: [
    {
      id: 'mc-rec-1',
      title: 'Composite Adaptive IRT Theta Optimization Simulation',
      question:
        'A candidate is 10 questions into a 25-question adaptive exam. They have answered 8 of the first 10 correctly and are currently facing high-difficulty (Theta = +1.8) questions. If they have 12 minutes remaining for the final 15 questions, formulate the optimal pacing strategy.',
      conceptUsed: 'High-Bracket Defensive Pacing.',
      solutionSteps: [
        'Step 1: The candidate is already established in the highest scoring bracket (Theta = +1.8).',
        'Step 2: Remaining velocity = 15 questions in 12 minutes = 48 seconds per question.',
        'Step 3: Tactical Plan: Maintain accuracy on medium-high questions. Do not spend >75s on any single question. If a problem is extremely complex, eliminate 2 options and make an informed guess to protect the clock.',
        'Step 4: Even with a 60% accuracy on the remaining 15 questions at high difficulty, the candidate’s overall percentile will comfortably exceed 92%.'
      ],
      finalAnswer: 'Protect the high theta bracket with steady 45-50s pacing; eliminate and guess on complex outliers to ensure full section completion.'
    },
    {
      id: 'mc-rec-2',
      title: 'Three-Stage Multi-Company Assessment Calibration',
      question:
        'Contrast the time-management tactics required for a TCS NQT drive (Section-locked, zero penalty) vs an eLitmus pH Test (Free navigation, -0.25 penalty, high difficulty).',
      conceptUsed: 'Platform Architecture Strategy Adaptation.',
      solutionSteps: [
        'Step 1: TCS NQT: Constant forward velocity, 0 questions left blank, 100% saturation in final 60s, priority focus on Advanced FITB questions.',
        'Step 2: eLitmus: Strict 3-pass triage, target 60-65% attempts with 90%+ accuracy, zero blind guessing, solve complete connected puzzle blocks.'
      ],
      finalAnswer: 'TCS requires 100% attempt saturation under section locks; eLitmus requires high-accuracy selective attempts (65%) with zero blind guesses.'
    },
    {
      id: 'mc-rec-3',
      title: 'Pseudocode Concurrency & State Machine Debugging',
      question:
        'Trace the execution and final value of counter in the following loop:\n\nInteger counter = 0, i, j\nfor i = 1 to 4\n    for j = 1 to i\n        if ( (i + j) mod 2 == 0 )\n            counter = counter + (i * j)\n        else\n            counter = counter - 1\nPrint counter',
      conceptUsed: 'Nested Iteration State Tracking.',
      solutionSteps: [
        'Step 1: i = 1:\n- j = 1: (1+1) mod 2 = 0 => counter = 0 + (1×1) = 1.',
        'Step 2: i = 2:\n- j = 1: (2+1) mod 2 = 1 => counter = 1 - 1 = 0.\n- j = 2: (2+2) mod 2 = 0 => counter = 0 + (2×2) = 4.',
        'Step 3: i = 3:\n- j = 1: (3+1) mod 2 = 0 => counter = 4 + (3×1) = 7.\n- j = 2: (3+2) mod 2 = 1 => counter = 7 - 1 = 6.\n- j = 3: (3+3) mod 2 = 0 => counter = 6 + (3×3) = 15.',
        'Step 4: i = 4:\n- j = 1: (4+1) mod 2 = 1 => counter = 15 - 1 = 14.\n- j = 2: (4+2) mod 2 = 0 => counter = 14 + (4×2) = 22.\n- j = 3: (4+3) mod 2 = 1 => counter = 22 - 1 = 21.\n- j = 4: (4+4) mod 2 = 0 => counter = 21 + (4×4) = 37.'
      ],
      finalAnswer: 'Final counter value = 37'
    }
  ],
  quickRevision: [
    '3-Pass Rule: Pass 1 (Quick Kills 35%) -> Pass 2 (Core Analytical 45%) -> Pass 3 (Optimization 20%).',
    'Zero-Negative Marking: Saturate 100% of answers in the final 60 seconds.',
    'Expected Value: Always guess if you can eliminate at least 1 distractor in negative marking tests.',
    'Adaptive IRT: Invest 40% of time getting the first 5-6 questions 100% right.',
    'SJT Protocol: Data documentation, ethical integrity, and structured internal escalation.'
  ],
  keyTakeaways: [
    'Never let ego sink more than 90 seconds into a single unyielding aptitude problem.',
    'Solve standalone reasoning questions before diving into large 5-question puzzle blocks.',
    'Track a single symbol in gamified visual tests to eliminate 75% of options in 3 seconds.',
    'Review and document your test solutions immediately for post-assessment technical interviews.'
  ],
  selfCheck: [
    'Do you know the exact time limit and section rules for TCS NQT, Infosys, and Cognizant?',
    'Can you calculate the expected value of a 50-50 guess under a -0.25 penalty (+0.375)?',
    'Can you trace bitwise operators (XOR, AND, shift) in pseudocode under 45 seconds?',
    'Do you have a personal 3-pass triage strategy ready for exam day?'
  ],
  sources: [
    'Corporate Assessment Frameworks — TCS iON / Infosys / AMCAT / Mercer Mettl',
    'The Algorithm Design Manual — Steven S. Skiena',
    'Crack the Placement Assessment: Quantitative & Behavioral Strategies — Placement Cell Compendium'
  ]
};

module.exports = topic2_recruiter_patterns;
