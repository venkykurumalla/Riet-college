module.exports = {
  id: 'y2-verbal-para-jumbles',
  yearId: 2,
  category: 'Verbal Ability',
  topicNumber: 4,
  title: 'Sentence Rearrangement & Para-Jumbles Strategies',
  tagline: 'Mandatory pair identification, opening sentence detection, transition connectors, acronym-noun antecedents, and distractor sequence elimination.',
  estimatedMinutes: 60,
  difficulty: 'Intermediate',
  introduction: {
    overview: 'Para-Jumbles (Sentence Rearrangement) tests a candidate’s cognitive mastery of logical coherence, discourse structure, and chronological narrative flow in English prose. A jumbled paragraph presents 4 to 6 disordered sentences that must be reconstructed into a coherent, semantically sound paragraph. Rather than reading and testing all 24 (4!) or 120 (5!) possible permutations, professional verbal solvers utilize Structural Hook Analysis: identifying the standalone Introductory sentence, locking in Mandatory Pairs (Noun -> Pronoun, Cause -> Effect, Full Name -> Acronym), tracking Discourse Markers (However, Furthermore, Consequently), and eliminating distractor options.',
    placementRelevance: 'Featured consistently in TCS NQT Verbal Ability, Infosys Communicative English, Cognizant, Wipro, Capgemini, AMCAT, and CoCubes assessments, accounting for 20% to 25% of verbal section marks.',
    historicalRecruiterWeightage: 'Appears in over 90% of technical recruitment verbal modules as a primary benchmark for logical organization and reading agility.',
    realWorldContext: 'Coherent paragraph structuring is essential for technical specification writing, executive project summaries, peer-reviewed engineering papers, and client communication.'
  },
  learningObjectives: [
    'Identify the independent Introductory Opening Sentence (the General Theme anchor).',
    'Form Mandatory Pairs using Noun-to-Pronoun referencing rules.',
    'Utilize Full Form to Acronym transitions (e.g. "World Health Organization" precedes "WHO").',
    'Track Discourse Transition Markers: Contrast (However, But, Yet), Addition (Moreover, Furthermore), and Consequence (Therefore, As a result).',
    'Order Chronological and Cause-and-Effect Sequences logically.',
    'Eliminate incorrect multiple-choice sequences in under 20 seconds using option-based pair verification.',
    'Identify the Out-of-Context ("Odd Sentence") in corrupted paragraph jumble variants.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Pronoun-Antecedent agreement', 'Conjunctions and transition adverbs', 'General paragraph theme comprehension'],
    quickRefresher: 'An introductory sentence cannot begin with transition words (However, Therefore), relative pronouns (These, Those, This), or personal pronouns (He, She, They) referring to an unintroduced subject.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Para-Jumble: A scrambled set of sentences that must be re-ordered into a logically coherent paragraph.',
      'Introductory Sentence (Opening Hook): A standalone, independent sentence introducing the central topic or noun without relying on preceding context.',
      'Mandatory Pair: Two sentences that MUST appear consecutively in a specific order (e.g., [B - D]) due to grammatical, logical, or chronological linkage.',
      'Discourse Transition Markers: Connective words indicating narrative direction: Adversative (However, Nonetheless), Additive (Furthermore, In addition), Causal (Therefore, Hence).',
      'Acronym Expansion Rule: The full formal name of an institution/concept must precede its acronym or abbreviated reference.',
      'Concluding Sentence: The final sentence that summarizes the discourse, resolves the argument, or presents the final outcome.'
    ],
    theoreticalIntuition: 'Para-Jumbles should NEVER be solved by arranging all sentences in your head from scratch. Always solve via Option-Driven Mandatory Pair Matching: 1. Scan for one unbreakable mandatory pair (e.g. Sentence C introduces "artificial intelligence" and Sentence A uses "this technology", forming pair [C - A]). 2. Look at the 4 answer choices: if only Option B contains the sequence [C - A], select Option B immediately without analyzing the rest of the sentences!',
    visualOrMentalModel: 'Think of sentences as train cars: The Locomotive is the standalone Introductory sentence (it pulls the train and needs no car ahead of it). Couplers are the transition words (However, Therefore) and pronouns (This, They) that hook specific cars together in an unalterable sequence.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Rule 1: The Independent Opening Sentence Anchor',
      formula: 'Opening Sentence = Standalone Noun/Theme + No Dependent Pronouns + No Adversative Connectors',
      variables: 'Cannot start with "He/She/They", "These/Those", "However", "Therefore", "Moreover", "Similarly"',
      description: 'The introductory sentence establishes the broad context or defines the primary entity.',
      whenToUse: 'Step 1 of every para-jumble puzzle to eliminate options starting with dependent sentences.',
      simpleExample: 'Sentence A: "Electric vehicles are transforming urban transport." (Valid Opener) vs Sentence B: "However, their battery costs remain high." (Dependent).'
    },
    {
      title: 'Rule 2: Noun -> Pronoun Antecedent Chain',
      formula: '[Sentence with Specific Proper Noun] -> [Sentence with Replacing Pronoun (He, She, It, They, This)]',
      variables: 'Noun must precede Pronoun',
      description: 'A pronoun cannot be used before the entity it refers to is explicitly introduced by name.',
      whenToUse: 'Creating mandatory pairs.',
      simpleExample: '[Sentence B: "Albert Einstein published four groundbreaking papers in 1905."] -> [Sentence D: "He called this his miracle year."]. Pair = [B - D].'
    },
    {
      title: 'Rule 3: Full Name / Definition -> Acronym Transition',
      formula: '[Full Name / Formal Title] -> [Acronym / Abbreviation / Last Name]',
      variables: 'Full title must precede abbreviated reference',
      description: 'Standard journalistic and academic style mandates introducing the complete title before using an acronym.',
      whenToUse: 'Sentences containing organizations or historical figures.',
      simpleExample: '[Sentence C: "The Indian Space Research Organisation (ISRO) launched the probe."] -> [Sentence A: "ISRO confirmed its orbital insertion."]. Pair = [C - A].'
    },
    {
      title: 'Rule 4: Cause -> Effect and Problem -> Solution',
      formula: '[Cause / Catalyst / Problem] -> [Effect / Reaction / Solution]',
      variables: 'The trigger event must precede the resulting outcome',
      description: 'Chronological and logical causation establishes rigid two-sentence linkages.',
      whenToUse: 'Scientific, economic, or narrative event sequences.',
      simpleExample: '[Severe drought devastated crops] -> [Consequently, food inflation surged to historic highs].'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Para-Jumble problem solving is an exercise in structural elimination. When options are provided (e.g. A: BCDA, B: ADBC, C: DCBA, D: BDAC), notice that options begin with only two candidate opening letters (B or A). Test only those two candidates to immediately eliminate 50% of the choices.',
      'Discourse Marker Mapping: Transition words act as infallible directional signposts: 1. Contrast Markers (However, But, In contrast, On the other hand, Whereas) signal that the sentence must follow a statement expressing an opposite viewpoint. 2. Continuation / Addition Markers (Moreover, Furthermore, In addition, Also) signal that the sentence provides supplementary evidence for an already-stated point. 3. Consequence Markers (Therefore, Hence, Thus, As a result, Consequently) signal a logical deduction or final conclusion.',
      'Definite vs Indefinite Article Sequence: An entity is usually introduced with the indefinite article "A" or "An" upon first mention, and subsequently referred to with the definite article "The" or demonstrative "This/That": "[A massive cyclone formed over the ocean...] -> [The cyclone made landfall twelve hours later...]".',
      'General to Specific Flow: In expository prose, arguments progress from General concepts (broad definition or societal trend) to Specific examples, case studies, or empirical data.'
    ],
    deepDiveAspects: [
      {
        title: 'Time Sequence and Chronological Anchors',
        content: 'Historical sequences progress along the timeline: Past -> Present -> Future ("In the 19th century... By the late 1990s... Today, however... In the coming decade...").'
      },
      {
        title: 'Question-to-Answer Pairing',
        content: 'If one sentence poses a rhetorical question ("Why has productivity stalled?"), the sentence offering the explanation or hypothesis MUST follow it immediately.'
      },
      {
        title: 'Odd Sentence Out Elimination Strategy',
        content: 'In 5-sentence "Odd One Out" questions: Find the mandatory 4-sentence sequence forming the coherent paragraph; the leftover sentence that diverges in tone, focus, or subject is the odd sentence.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — 4-Sentence Standard Jumble with Options',
      description: 'Reordering 4 sentences (A, B, C, D) using multiple-choice candidate elimination.',
      exampleSnippet: 'A. However, this trend is changing. B. Traditional manufacturing was labor intensive...'
    },
    {
      typeName: 'Type 2 — Fixed First (S1) and Fixed Last (S6) Jumbles',
      description: 'The opening sentence (S1) and closing sentence (S6) are fixed; candidate must order intermediate sentences (P, Q, R, S).',
      exampleSnippet: 'S1: The internet began as ARPANET. P: ... Q: ... R: ... S: ... S6: Today, billions connect globally.'
    },
    {
      typeName: 'Type 3 — 5-Sentence Open Jumbles (TITA / Non-MCQ)',
      description: 'Arranging 5 sentences without multiple choice options by constructing full structural linkage chains.',
      exampleSnippet: 'Enter the correct 5-digit sequence (e.g. 3-1-4-2-5).'
    },
    {
      typeName: 'Type 4 — Out of Context / Odd Sentence Out',
      description: 'Identifying the single intruder sentence that does not fit into the theme of the remaining 4 sentences.',
      exampleSnippet: 'Five sentences are given; four form a coherent paragraph. Find the odd sentence.'
    },
    {
      typeName: 'Type 5 — Paragraph Completion / Missing Sentence',
      description: 'Selecting the single most logically appropriate sentence to complete an incomplete paragraph.',
      exampleSnippet: 'Which sentence best concludes the given excerpt?'
    },
    {
      typeName: 'Type 6 — Cause-Effect Scientific & Technical Narratives',
      description: 'Sequencing scientific processes, technological developments, or economic policy cycles.',
      exampleSnippet: 'Rearrange the 4 steps describing the CRISPR gene editing workflow.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-pj-1',
      title: 'Noun-Pronoun and Transition Hook Analysis',
      question: 'Rearrange the following four sentences (A, B, C, D) to form a coherent paragraph: A. However, recent advances in natural language processing have enabled machines to comprehend contextual nuances. B. For decades, computerized translation systems struggled with idioms and figurative language. C. This breakthrough has revolutionized cross-border technical communication. D. Consequently, early translation algorithms produced rigid, verbatim translations that were often nonsensical. (A) B D A C (B) A B D C (C) D B A C (D) B A D C',
      givenInfo: ['A: However, recent advances... (Contrast)', 'B: For decades, computerized translation... (General Intro)', 'C: This breakthrough... (Refers to advances in A)', 'D: Consequently, early translation... (Consequence of B)'],
      conceptOrFormula: 'Step 1: Identify Intro sentence (B). Step 2: Form Mandatory Pairs [B - D] (Problem -> Consequence) and [A - C] (Breakthrough -> This breakthrough). Order = B-D-A-C.',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify the Introductory sentence',
          explanation: 'Sentence B introduces the broad historical problem: "For decades, computerized translation systems struggled...". Sentence A starts with "However" (Contrast); Sentence C starts with "This breakthrough"; Sentence D starts with "Consequently". Thus, B is the only standalone opener.',
          math: 'Opening Sentence = B'
        },
        {
          stepNumber: 2,
          title: 'Form Mandatory Pair [B - D]',
          explanation: 'Sentence B states that systems struggled with idioms; Sentence D states the immediate consequence ("Consequently, early algorithms produced rigid verbatim translations..."). Pair = [B - D].',
          math: 'Pair 1 = [B - D]'
        },
        {
          stepNumber: 3,
          title: 'Form Mandatory Pair [A - C]',
          explanation: 'Sentence A introduces the contrast ("However, recent advances... enabled machines to comprehend..."). Sentence C refers back to this: "This breakthrough has revolutionized...". Pair = [A - C].',
          math: 'Pair 2 = [A - C]'
        },
        {
          stepNumber: 4,
          title: 'Combine pairs and match options',
          explanation: 'Combining [B - D] and [A - C] gives the complete sequence BDAC. Matches Option (A).',
          math: 'Sequence = B D A C (Option A)'
        }
      ],
      finalAnswer: 'Option (A) — B D A C',
      whyItWorks: 'The narrative flows from historical problem (B) -> manifestation (D) -> technological breakthrough (A) -> modern impact (C).',
      commonTrap: 'Placing A immediately after B before D, breaking the logical consequence chain of the early algorithms.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-pj-2',
      title: 'Acronym Expansion and Chronological Sequence',
      question: 'Rearrange the sentences into a logical paragraph: A. Today, the World Health Organization (WHO) coordinates international responses to emerging epidemics. B. In 1948, representatives from 61 nations gathered in Geneva to establish a global public health agency. C. This historic constitution created the framework for modern disease surveillance. D. Over the subsequent decades, WHO spearheaded the eradication of smallpox and near-elimination of polio. (A) B C D A (B) A B C D (C) B D C A (D) C B D A',
      givenInfo: ['A: Today, the World Health Organization (WHO)...', 'B: In 1948, representatives... establish a global health agency', 'C: This historic constitution...', 'D: Over the subsequent decades, WHO spearheaded...'],
      conceptOrFormula: 'Timeline Progression: In 1948 (B) -> Constitution established (C) -> Over subsequent decades (D) -> Today (A). Mandatory Pair [B - C]. Sequence = BCDA.',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify Opening Sentence',
          explanation: 'Sentence B provides the foundational historical origin: "In 1948, representatives from 61 nations gathered in Geneva...".',
          math: 'Opener = B'
        },
        {
          stepNumber: 2,
          title: 'Establish Timeline Sequence',
          explanation: 'B (1948 creation) -> C ("This historic constitution created...") -> D ("Over the subsequent decades...") -> A ("Today, the WHO coordinates...").',
          math: 'Order = B -> C -> D -> A'
        },
        {
          stepNumber: 3,
          title: 'Verify against options',
          explanation: 'Sequence BCDA matches Option (A).',
          math: 'Option (A)'
        }
      ],
      finalAnswer: 'Option (A) — B C D A',
      whyItWorks: 'Chronological progression from founding in 1948 to mid-century milestones to present-day coordination provides seamless coherence.',
      commonTrap: 'Starting with Sentence A because it mentions the full name "World Health Organization", ignoring the historical timeline.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pj-3',
      title: 'Fixed S1 and S6 Intermediate Ordering',
      question: 'S1: Renewable energy adoption has accelerated dramatically over the past five years. P: However, integrating intermittent solar and wind power requires robust grid storage. Q: Grid-scale lithium-ion battery installations have expanded in response. R: Solar photovoltaic module prices have fallen by nearly eighty percent. S: Consequently, clean power has become economically competitive with fossil fuels. S6: As battery costs continue to decline, 24/7 carbon-free power is becoming achievable. (A) R S P Q (B) P Q R S (C) S R P Q (D) R P Q S',
      givenInfo: ['S1: Renewable energy adoption accelerated...', 'P: However, integrating intermittent power requires storage...', 'Q: Grid-scale battery installations expanded in response...', 'R: Solar module prices fallen by 80%...', 'S: Consequently, clean power became competitive...', 'S6: As battery costs continue to decline...'],
      conceptOrFormula: 'S1 leads into cause of growth: Price fall (R) -> Economic competitiveness (S). Transition to limitation: Storage need (P) -> Battery expansion (Q) -> S6 (Declining battery costs). Sequence = R-S-P-Q.',
      steps: [
        {
          stepNumber: 1,
          title: 'Connect S1 to the first intermediate sentence',
          explanation: 'S1 introduces accelerated adoption. R explains WHY adoption accelerated: "Solar module prices have fallen...". Thus R follows S1.',
          math: 'S1 -> R'
        },
        {
          stepNumber: 2,
          title: 'Form Pair [R - S]',
          explanation: 'R states price fall; S states the result: "Consequently, clean power has become economically competitive...". Pair = [R - S].',
          math: 'Pair 1 = [R - S]'
        },
        {
          stepNumber: 3,
          title: 'Connect to Challenge and Solution Pair [P - Q]',
          explanation: 'P introduces the challenge: "However, integrating intermittent power requires grid storage". Q offers the solution: "Grid-scale batteries expanded in response". Q leads into S6.',
          math: 'Pair 2 = [P - Q] -> S6'
        }
      ],
      finalAnswer: 'Option (A) — R S P Q',
      whyItWorks: 'The narrative flows from economic driver (R) -> market competitiveness (S) -> technical constraint (P) -> storage solution (Q).',
      commonTrap: 'Starting intermediate sequence with P ("However"), which introduces a contradiction before establishing the economic basis.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pj-4',
      title: 'Odd Sentence Out (Paragraph Disruption)',
      question: 'Four of the following five sentences form a coherent paragraph about semiconductor manufacturing. Identify the ODD sentence: (1) Modern microprocessors contain billions of microscopic transistors packed onto silicon wafers. (2) Photolithography machines use extreme ultraviolet light to etch nanometer-scale circuits. (3) Semiconductor chip fabrication requires cleanroom environments thousands of times purer than operating rooms. (4) Cloud computing data centers consume substantial electricity for cooling server racks. (5) Even a single speck of dust can destroy an entire integrated circuit during the etching process.',
      givenInfo: ['5 sentences on technology themes'],
      conceptOrFormula: 'Find the central theme of sentences 1, 2, 3, 5: Semiconductor chip manufacturing and cleanroom lithography. Sentence 4 discusses cloud computing data center electricity consumption (divergent theme).',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze themes of all 5 sentences',
          explanation: 'Sentences 1, 2, 3, 5 all discuss the manufacturing, lithography, cleanrooms, and silicon wafers of microprocessors. Sentence 4 discusses operational electricity in cloud server racks.',
          math: 'Theme = Semiconductor Chip Fabrication'
        },
        {
          stepNumber: 2,
          title: 'Identify the intruder sentence',
          explanation: 'Sentence 4 shifts the topic from chip fabrication physics to data center energy consumption.',
          math: 'Odd Sentence = (4)'
        }
      ],
      finalAnswer: 'Sentence (4) is the odd sentence out',
      whyItWorks: 'Sentences 1, 2, 3, and 5 form a cohesive paragraph on chip fabrication; Sentence 4 belongs to a different discourse on data center operations.',
      commonTrap: 'Picking Sentence 5 because it mentions dust, not realizing it directly elaborates on the cleanrooms in Sentence 3.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pj-5',
      title: 'Rhetorical Question and Answer Architecture',
      question: 'Rearrange the four sentences: A. The answer lies in their decentralized consensus mechanism. B. How do blockchain networks maintain data integrity without a central authority? C. By distributing verification across thousands of independent nodes, no single actor can alter transaction records. D. This ensures cryptographic immutability across the entire ledger. (A) B A C D (B) A B C D (C) B C A D (D) C D B A',
      givenInfo: ['A: The answer lies in...', 'B: How do blockchain networks maintain integrity...? (Question)', 'C: By distributing verification...', 'D: This ensures cryptographic immutability...'],
      conceptOrFormula: 'Question-Answer Hook: Rhetorical question (B) must precede its direct answer (A). [B - A] is a mandatory pair. C explains the mechanism, D concludes. Sequence = BACD.',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify Question-Answer Mandatory Pair [B - A]',
          explanation: 'Sentence B asks the question ("How do blockchain networks...?"). Sentence A immediately answers it ("The answer lies in..."). Pair = [B - A].',
          math: 'Mandatory Pair = [B - A]'
        },
        {
          stepNumber: 2,
          title: 'Follow with elaboration (C) and conclusion (D)',
          explanation: 'Sentence C explains HOW the consensus mechanism works ("By distributing verification across nodes..."). Sentence D states the final outcome ("This ensures cryptographic immutability...").',
          math: 'Full Order = B -> A -> C -> D'
        }
      ],
      finalAnswer: 'Option (A) — B A C D',
      whyItWorks: 'A rhetorical question-and-answer pair forms an unbreakable introductory anchor.',
      commonTrap: 'Starting with Sentence C and treating the question as a mid-paragraph inquiry.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-pj-6',
      title: 'Definite vs Indefinite Article Progression',
      question: 'Arrange the sentences: A. The algorithm then categorizes the incoming traffic based on packet signatures. B. A network firewall inspects data packets passing through a perimeter router. C. Any unauthorized packets detected by this process are immediately blocked. D. This inspection ensures that malicious payloads do not infiltrate internal databases. (A) B A D C (B) B D A C (C) A B D C (D) B A C D',
      givenInfo: ['A: The algorithm then categorizes...', 'B: A network firewall inspects data packets... (Indefinite "A")', 'C: Any unauthorized packets... are blocked', 'D: This inspection ensures...'],
      conceptOrFormula: 'Indefinite article intro (B) -> Process step 1 (A) -> Process step 2 / result (C/D). Sequence = BADC or BACD.',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify Opener via Indefinite Article "A"',
          explanation: 'Sentence B introduces the entity: "A network firewall inspects data packets...". B is the opening sentence.',
          math: 'Opener = B'
        },
        {
          stepNumber: 2,
          title: 'Sequence subsequent operational steps',
          explanation: 'B (Firewall inspects) -> A ("The algorithm THEN categorizes...") -> D ("This inspection ensures...") -> C ("Any unauthorized packets... are blocked"). Order = BADC.',
          math: 'Order = B A D C'
        }
      ],
      finalAnswer: 'Option (A) — B A D C',
      whyItWorks: 'Flow proceeds from initial packet inspection -> signature categorization -> security assurance -> blocking action.',
      commonTrap: 'Placing Sentence A first despite the word "then".',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-pj-7',
      title: 'Problem-Solution Economic Essay Structure',
      question: 'Rearrange the sentences: A. To counteract this stagnation, central banks slashed benchmark interest rates to historic lows. B. In the aftermath of the global financial crisis, credit markets froze and economic growth ground to a halt. C. Cheaper borrowing stimulated corporate capital investment and revived consumer spending. D. As liquidity returned to the markets, employment rates steadily recovered. (A) B A C D (B) A B C D (C) B C A D (D) B D A C',
      givenInfo: ['A: To counteract this stagnation... (Response)', 'B: In the aftermath... credit markets froze (Problem)', 'C: Cheaper borrowing stimulated... (Mechanism)', 'D: As liquidity returned... (Outcome)'],
      conceptOrFormula: 'Problem (B: stagnation) -> Intervention (A: slashed interest rates) -> Mechanism (C: cheaper borrowing) -> Final Recovery (D). Sequence = BACD.',
      steps: [
        {
          stepNumber: 1,
          title: 'Establish Problem Statement (B)',
          explanation: 'Sentence B establishes the crisis: "...credit markets froze and economic growth ground to a halt."',
          math: 'Opener = B'
        },
        {
          stepNumber: 2,
          title: 'Link Intervention (A)',
          explanation: 'Sentence A responds to the stagnation: "To counteract this stagnation, central banks slashed benchmark interest rates...". Pair = [B - A].',
          math: 'Pair = [B - A]'
        },
        {
          stepNumber: 3,
          title: 'Sequence Mechanism (C) and Result (D)',
          explanation: 'Sentence C explains the effect of low rates ("Cheaper borrowing stimulated..."). Sentence D concludes with full recovery ("employment rates steadily recovered").',
          math: 'Sequence = B A C D'
        }
      ],
      finalAnswer: 'Option (A) — B A C D',
      whyItWorks: 'Causal chain: Crisis (B) -> Monetary stimulus (A) -> Capital investment (C) -> Job recovery (D).',
      commonTrap: 'Starting with A because it contains an action verb.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-pj-8',
      title: 'Contrast and Resolution Architecture',
      question: 'Arrange the sentences: A. Critics argued that automated assembly lines would lead to widespread structural unemployment. B. The introduction of industrial robotics in automotive plants sparked intense debate in the 1980s. C. On the contrary, automation created high-skilled engineering jobs and lowered consumer vehicle prices. D. Today, automotive factories employ more technicians and software specialists than ever before. (A) B A C D (B) B C A D (C) A B C D (D) B A D C',
      givenInfo: ['A: Critics argued... (Objection)', 'B: The introduction of industrial robotics... (Context)', 'C: On the contrary... (Counter-argument)', 'D: Today, automotive factories... (Modern resolution)'],
      conceptOrFormula: 'Historical Context (B) -> Initial Criticisms (A) -> Rebuttal with "On the contrary" (C) -> Modern Reality (D). Sequence = BACD.',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify Context Opener',
          explanation: 'Sentence B introduces the historical topic: "The introduction of industrial robotics in automotive plants sparked intense debate in the 1980s."',
          math: 'Opener = B'
        },
        {
          stepNumber: 2,
          title: 'Form Pair [A - C]',
          explanation: 'Sentence A states the critics’ fear of unemployment; Sentence C refutes it with "On the contrary, automation created high-skilled engineering jobs...". Pair = [A - C].',
          math: 'Pair = [A - C]'
        },
        {
          stepNumber: 3,
          title: 'Add Concluding Resolution (D)',
          explanation: 'Sentence D provides the present-day proof: "Today, factories employ more technicians...". Order = B-A-C-D.',
          math: 'Order = B A C D'
        }
      ],
      finalAnswer: 'Option (A) — B A C D',
      whyItWorks: 'The contrast connective "On the contrary" in C directly rebuts the criticism introduced in A.',
      commonTrap: 'Placing C before A, which leaves "On the contrary" without an opposing premise to contrast against.',
      difficulty: 'Intermediate'
    }
  ],
  alternativeMethods: {
    title: 'Solving Para-Jumble: A, B, C, D Options Strategy',
    methods: [
      {
        methodName: 'Mandatory Pair Elimination (Option-Driven)',
        steps: [
          'Find ONE strong mandatory pair (e.g. [B - D]).',
          'Scan the 4 options: eliminate all options where B is not followed immediately by D.',
          'Verify remaining 1 or 2 options for overall opening flow.'
        ],
        prosAndCons: 'Pros: Solves 85% of recruitment para-jumbles in under 20 seconds. Cons: Requires at least one obvious linguistic link.',
        whenToUse: 'Primary method for all multiple-choice para-jumbles.'
      },
      {
        methodName: 'Opening Sentence Filter Method',
        steps: [
          'Identify the only standalone introductory sentence (e.g. Sentence B).',
          'Eliminate all options that do NOT start with B.',
          'Pick the logically coherent sequence among remaining choices.'
        ],
        prosAndCons: 'Pros: Extremely fast when only 1 option starts with the true opener. Cons: Recruiters often provide 2 options starting with the same opener.',
        whenToUse: 'When introductory sentence is unmistakable.'
      },
      {
        methodName: 'Discourse Transition Tracing',
        steps: [
          'Map connectors: "However" (Contrast), "Consequently" (Result), "Furthermore" (Addition).',
          'Place sentences with connectors after their prerequisite premise.'
        ],
        prosAndCons: 'Pros: 100% rigorous for complex non-MCQ puzzles. Cons: Requires careful sentence reading.',
        whenToUse: 'For TITA (non-MCQ) or high-difficulty CAT-level verbal questions.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Rapid Mandatory Pair & Option Pruning Shortcut',
    traditionalVsShortcut: {
      traditionalMethod: 'Reading all 24 permutations mentally to see which one sounds best.',
      shortcutMethod: 'Lock in 1 mandatory pair (Noun-Pronoun or Cause-Effect) and eliminate non-matching options in 5 seconds.',
      timeSavedPercent: '80% faster'
    },
    rulesForApplication: [
      'Pronoun MUST follow Noun.',
      'Acronym MUST follow Full Form.',
      'Look at options first: if 2 options start with B, test B as opener immediately.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Choosing an opening sentence that begins with a dependent transition word.',
      whyItHappens: 'Selecting sentences starting with "However", "This", or "Therefore" as openers.',
      howToAvoid: 'The opener must be an independent standalone statement introducing the subject.'
    },
    {
      mistake: 'Separating a Noun and its replacing Pronoun.',
      whyItHappens: 'Inserting unrelated intermediate sentences between a noun and its direct descriptive pronoun.',
      howToAvoid: 'A pronoun refers to the immediate preceding noun phrase.'
    },
    {
      mistake: 'Reversing Cause and Effect.',
      whyItHappens: 'Putting the result before the catalyst when both are adjacent.',
      howToAvoid: 'Chronological causation: Cause must precede Effect.'
    },
    {
      mistake: 'Reading and re-reading all 4 options repeatedly.',
      whyItHappens: 'Failing to establish structural pairs before reading options.',
      howToAvoid: 'Form pairs FIRST, then use options strictly to prune.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 45,
    eliminationTechnique: 'Identify the 1st letter of candidate options: If options are ACBD, ADCB, BACD, BDAC, determine whether A or B is the true opener to eliminate 2 options immediately.',
    questionSelectionAdvice: 'Solve 4-sentence MCQ para-jumbles quickly by pair matching; leave 6-sentence non-MCQ arrangements for second pass.',
    recruiterInsight: 'TCS NQT and Infosys verbal sections rely heavily on "However" and "This [noun]" transition links to test structural reading.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-pj-e1',
        question: 'Rearrange the sentences: A. He founded Microsoft with Paul Allen in 1975. B. Bill Gates showed an early interest in computer programming. C. Under his leadership, it became the world’s largest personal computer software company. D. This passion began when he wrote his first software program at age thirteen. (A) B D A C (B) A B D C (C) B A D C (D) D B A C',
        options: ['B D A C', 'A B D C', 'B A D C', 'D B A C'],
        correctAnswer: 'B D A C',
        explanation: 'B introduces Bill Gates. D elaborates on "This passion" (programming). A states the founding of Microsoft. C discusses its growth. Order = B D A C.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pj-e2',
        question: 'Arrange the sentences: A. Consequently, the global supply chain suffered massive shipping delays. B. A massive container ship ran aground and blocked the Suez Canal. C. For six days, over four hundred vessels were stranded waiting for transit. D. The canal is a vital maritime artery connecting Europe and Asia. (A) D B C A (B) B C A D (C) D A B C (D) B D C A',
        options: ['D B C A', 'B C A D', 'D A B C', 'B D C A'],
        correctAnswer: 'D B C A',
        explanation: 'D introduces the Suez Canal. B states the grounding event. C details the 6-day blockage. A gives the global supply chain consequence. Order = D B C A.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pj-e3',
        question: 'Rearrange the sentences: A. However, its volatile nature poses risks for traditional investors. B. Bitcoin was created in 2009 by an anonymous entity known as Satoshi Nakamoto. C. It introduced the world to decentralized peer-to-peer digital currency. D. Despite these fluctuations, institutional adoption has steadily increased. (A) B C A D (B) A B C D (C) B A C D (D) C B A D',
        options: ['B C A D', 'A B C D', 'B A C D', 'C B A D'],
        correctAnswer: 'B C A D',
        explanation: 'B introduces Bitcoin. C explains its decentralized nature. A introduces the risk ("However, its volatile nature..."). D concludes with institutional adoption. Order = B C A D.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pj-e4',
        question: 'Arrange the sentences: A. Photosynthesis is the biological process by which plants convert sunlight into energy. B. Chlorophyll pigments in leaves absorb solar radiation. C. This absorbed energy is then used to synthesize glucose from water and carbon dioxide. D. Oxygen is released into the atmosphere as a vital byproduct. (A) A B C D (B) B A C D (C) A C B D (D) B C D A',
        options: ['A B C D', 'B A C D', 'A C B D', 'B C D A'],
        correctAnswer: 'A B C D',
        explanation: 'A defines photosynthesis. B explains absorption by chlorophyll. C details glucose synthesis. D concludes with oxygen release. Order = A B C D.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pj-e5',
        question: 'Rearrange: A. The battery powers the electric motor to drive the wheels. B. An electric vehicle stores energy in a rechargeable lithium-ion battery pack. C. Regenerative braking recharges the battery during deceleration. D. This closed-loop efficiency makes EVs superior to internal combustion engines. (A) B A C D (B) A B C D (C) B C A D (D) C B A D',
        options: ['B A C D', 'A B C D', 'B C A D', 'C B A D'],
        correctAnswer: 'B A C D',
        explanation: 'B defines the EV battery pack. A explains propulsion. C adds regenerative braking. D concludes with comparative efficiency. Order = B A C D.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-pj-e6',
        question: 'Arrange: A. Therefore, regular aerobic exercise is vital for longevity. B. Cardiovascular health depends heavily on physical activity. C. It strengthens the heart muscle and improves arterial circulation. D. This reduced strain lowers the risk of chronic hypertension. (A) B C D A (B) A B C D (C) B A C D (D) C B D A',
        options: ['B C D A', 'A B C D', 'B A C D', 'C B D A'],
        correctAnswer: 'B C D A',
        explanation: 'B introduces cardiovascular health. C explains mechanism ("It strengthens..."). D explains benefit ("This reduced strain..."). A gives final conclusion ("Therefore..."). Order = B C D A.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-pj-i1',
        question: 'Rearrange: A. These quantum bits, or qubits, can exist in superpositions of zero and one simultaneously. B. Quantum computing harnesses principles of quantum mechanics to process information. C. Unlike classical bits which are strictly binary, quantum processors utilize qubits. D. This superposition allows quantum computers to evaluate complex possibilities in parallel. (A) B C A D (B) A B C D (C) B A C D (D) C A D B',
        options: ['B C A D', 'A B C D', 'B A C D', 'C A D B'],
        correctAnswer: 'B C A D',
        explanation: 'B introduces Quantum computing. C contrasts classical bits with qubits. A elaborates on "These quantum bits". D concludes with computational parallelism. Order = B C A D.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pj-i2',
        question: 'Rearrange: A. In response, cybersecurity teams deploy multi-factor authentication and zero-trust architectures. B. Ransomware attacks have surged exponentially across corporate enterprise networks. C. These malicious intrusions encrypt proprietary databases and demand extortion payments. D. Consequently, organizations adopting zero-trust report significantly fewer catastrophic data breaches. (A) B C A D (B) B A C D (C) A B C D (D) C B A D',
        options: ['B C A D', 'B A C D', 'A B C D', 'C B A D'],
        correctAnswer: 'B C A D',
        explanation: 'B introduces ransomware threat. C describes the attacks ("These malicious intrusions..."). A gives the defense response. D gives the positive outcome. Order = B C A D.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pj-i3',
        question: 'Rearrange: A. The James Webb Space Telescope (JWST) was launched on Christmas Day in 2021. B. Operating at Lagrange point 2, it observes deep space in the infrared spectrum. C. It aims to study the formation of the universe’s earliest galaxies. D. These infrared observations have already revealed unexpectedly mature structures in the early cosmos. (A) A C B D (B) A B C D (C) B A C D (D) A B D C',
        options: ['A B C D', 'A C B D', 'B A C D', 'A B D C'],
        correctAnswer: 'A B C D',
        explanation: 'A introduces JWST launch. B describes its orbit and infrared spectrum. C explains its mission goal. D discusses the early observation results. Order = A B C D.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pj-i4',
        question: 'Arrange: A. However, excessive screen time disrupts natural melatonin secretion and impairs sleep quality. B. Modern smartphones emit high-intensity blue wavelength light. C. This wavelength mimics daytime sunlight, signaling the brain to suppress sleep hormones. D. Consequently, sleep specialists recommend disabling screens at least an hour before bed. (A) B C A D (B) B A C D (C) A B C D (D) C B A D',
        options: ['B C A D', 'B A C D', 'A B C D', 'C B A D'],
        correctAnswer: 'B C A D',
        explanation: 'B introduces blue light from smartphones. C explains its biological mechanism. A highlights the adverse effect ("However, excessive screen time..."). D provides specialist recommendation. Order = B C A D.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pj-i5',
        question: 'Rearrange: A. Deep learning neural networks require massive datasets to train visual recognition models. B. Autonomous self-driving vehicles rely on computer vision to interpret complex road environments. C. Cameras and LiDAR sensors feed high-resolution streams into these onboard networks. D. This real-time processing enables the vehicle to detect pedestrians, lanes, and obstacles. (A) B A C D (B) B C A D (C) A B C D (D) C B A D',
        options: ['B A C D', 'B C A D', 'A B C D', 'C B A D'],
        correctAnswer: 'B A C D',
        explanation: 'B introduces autonomous vehicles. A introduces neural networks for vision. C describes sensor input into "these onboard networks". D concludes with real-time detection. Order = B A C D.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-pj-i6',
        question: 'Arrange: A. Overfishing has severely depleted global marine predator populations over the last fifty years. B. Marine biodiversity maintains the ecological stability of oceanic food webs. C. In the absence of apex sharks and tuna, mid-level species proliferate uncontrollably. D. This ecological imbalance destroys coastal coral reefs and kelp forests. (A) B A C D (B) A B C D (C) B C A D (D) A C D B',
        options: ['B A C D', 'A B C D', 'B C A D', 'A C D B'],
        correctAnswer: 'B A C D',
        explanation: 'B introduces marine biodiversity. A states overfishing problem. C details predator loss effect. D concludes with coral destruction. Order = B A C D.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-pj-a1',
        question: 'Identify the ODD sentence that does not fit into the theme of the remaining four: (1) Generative AI models generate realistic synthetic text by predicting statistical word tokens. (2) Transformer architectures rely on self-attention mechanisms to process long-range dependencies. (3) Hardware graphics processing units (GPUs) are specifically optimized for parallel matrix multiplication. (4) Cloud infrastructure providers charge variable rates for serverless computing execution time. (5) Massive computational clusters of these GPUs are required to train modern large language models.',
        options: ['(1)', '(2)', '(3)', '(4)'],
        correctAnswer: '(4)',
        explanation: 'Sentences 1, 2, 3, and 5 discuss the architecture, GPU hardware, and token prediction of Generative AI. Sentence 4 discusses cloud billing models for serverless functions (unrelated commercial pricing theme).',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pj-a2',
        question: 'Rearrange: A. The resulting microclimates raise urban surface temperatures by several degrees compared to surrounding rural areas. B. Urban heat islands develop when cities replace natural vegetation with dense concrete and asphalt. C. These artificial surfaces absorb and re-radiate solar thermal radiation rather than reflecting it. D. To mitigate this effect, urban planners are mandating green rooftops and reflective pavements. (A) B C A D (B) B A C D (C) A B C D (D) C B A D',
        options: ['B C A D', 'B A C D', 'A B C D', 'C B A D'],
        correctAnswer: 'B C A D',
        explanation: 'B defines Urban Heat Islands. C explains "These artificial surfaces". A describes the resulting temperature surge. D concludes with mitigation. Order = B C A D.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pj-a3',
        question: 'Rearrange: A. By automating repetitive administrative tasks, robotic process automation frees human employees for strategic initiatives. B. Enterprise software automation has evolved from simple batch scripts into intelligent agents. C. These modern cognitive agents can interpret unstructured PDF invoices and process transactions without human intervention. D. Consequently, corporate productivity and operational accuracy have improved dramatically. (A) B C A D (B) B A C D (C) A B C D (D) C B A D',
        options: ['B C A D', 'B A C D', 'A B C D', 'C B A D'],
        correctAnswer: 'B C A D',
        explanation: 'B introduces evolution of automation. C details "These modern cognitive agents". A highlights human workforce liberation. D concludes with corporate productivity gains. Order = B C A D.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pj-a4',
        question: 'Identify the ODD sentence: (1) CRISPR-Cas9 allows molecular biologists to edit specific DNA sequences with unprecedented precision. (2) The Cas9 enzyme acts as molecular scissors, cutting target genomic strands guided by synthetic RNA. (3) Cellular repair mechanisms then introduce desired insertions or deletions at the cleavage site. (4) Traditional Mendelian genetics established that discrete alleles determine phenotypic trait inheritance. (5) This targeted genetic correction holds promise for curing hereditary hemoglobinopathies.',
        options: ['(1)', '(2)', '(4)', '(5)'],
        correctAnswer: '(4)',
        explanation: 'Sentences 1, 2, 3, 5 discuss CRISPR-Cas9 molecular gene editing mechanisms and clinical cures. Sentence 4 discusses 19th-century Mendelian classical genetics.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-pj-a5',
        question: 'Rearrange: A. The resulting data enables meteorologists to track tropical cyclogenesis with remarkable fidelity. B. Geostationary meteorological satellites capture continuous multispectral imagery of Earth’s atmosphere. C. These high-resolution scans monitor atmospheric water vapor, convective cloud tops, and sea-surface temperatures. D. Consequently, coastal evacuation orders can now be issued days in advance, drastically reducing hurricane fatalities. (A) B C A D (B) B A C D (C) A B C D (D) C B A D',
        options: ['B C A D', 'B A C D', 'A B C D', 'C B A D'],
        correctAnswer: 'B C A D',
        explanation: 'B introduces satellites. C details scans. A describes tracking. D concludes with life-saving evacuations. Order = B C A D.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-pj-p1',
        question: 'In a campus verbal assessment, rearrange: A. However, premature optimization can lead to unreadable and fragile software code. B. Software engineers often refactor code to enhance execution speed and memory efficiency. C. Donald Knuth famously cautioned that premature optimization is the root of all evil in programming. D. Therefore, developers should prioritize clear architecture before profiling bottlenecks. (A) B A C D (B) B C A D (C) A B C D (D) C B A D',
        options: ['B A C D', 'B C A D', 'A B C D', 'C B A D'],
        correctAnswer: 'B A C D',
        explanation: 'B states optimization goal. A introduces the warning ("However, premature optimization..."). C quotes Knuth in support. D concludes with development advice. Order = B A C D.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pj-p2',
        question: 'Rearrange: A. The Internet of Things (IoT) connects millions of smart physical devices to centralized cloud servers. B. These edge devices range from industrial vibration sensors to domestic smart thermostats. C. They continuously transmit telemetry data to optimize energy usage and predict machine failures. D. This pervasive connectivity transforms traditional infrastructure into responsive cyber-physical systems. (A) A B C D (B) B A C D (C) A C B D (D) B C A D',
        options: ['A B C D', 'B A C D', 'A C B D', 'B C A D'],
        correctAnswer: 'A B C D',
        explanation: 'A defines IoT. B elaborates on "These edge devices". C describes telemetry. D concludes with cyber-physical transformation. Order = A B C D.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pj-p3',
        question: 'Rearrange: A. Without proper indexing, query execution times degrade exponentially as tables grow into millions of records. B. Relational database management systems organize structured data into indexed tables. C. B-tree indexes enable search engines to locate specific records in logarithmic time. D. Consequently, database administrators routinely optimize index cardinality for high-throughput applications. (A) B A C D (B) B C A D (C) A B C D (D) C B A D',
        options: ['B A C D', 'B C A D', 'A B C D', 'C B A D'],
        correctAnswer: 'B A C D',
        explanation: 'B introduces RDBMS tables. A introduces indexing challenge ("Without proper indexing..."). C presents B-tree solution. D gives DBA maintenance consequence. Order = B A C D.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pj-p4',
        question: 'Rearrange: A. As a result, software release cycles have collapsed from months to daily automated deployments. B. Continuous Integration and Continuous Deployment (CI/CD) pipelines automate testing and build verification. C. Every code commit triggers automated unit tests, security scans, and containerized staging builds. D. This immediate feedback loop ensures that integration regressions are identified within minutes. (A) B C D A (B) B A C D (C) A B C D (D) C B D A',
        options: ['B C D A', 'B A C D', 'A B C D', 'C B D A'],
        correctAnswer: 'B C D A',
        explanation: 'B defines CI/CD. C describes the commit trigger. D details the feedback loop. A concludes with rapid deployment cycle. Order = B C D A.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-pj-p5',
        question: 'Rearrange: A. Clean water infrastructure and widespread vaccination campaigns transformed public health in the twentieth century. B. These fundamental interventions eradicated waterborne cholera and drastically lowered infant mortality. C. Consequently, global human life expectancy more than doubled over the span of a single century. D. Today, medical research has shifted focus towards managing chronic lifestyle disorders in aging populations. (A) A B C D (B) B A C D (C) A C B D (D) B C A D',
        options: ['A B C D', 'B A C D', 'A C B D', 'B C A D'],
        correctAnswer: 'A B C D',
        explanation: 'A introduces 20th-century interventions. B details disease eradication. C notes doubled life expectancy. D transitions to present focus on chronic diseases. Order = A B C D.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-pj-1',
      question: 'Rearrange: A. Microplastics have now been detected in remote Arctic sea ice, deep ocean trenches, and human bloodstreams. B. Plastic polymers, celebrated for their extreme durability, do not biodegrade in natural environments. C. Instead, solar ultraviolet radiation and mechanical friction fragment plastic debris into microscopic particles. D. This ubiquitous contamination poses unresolved ecological and toxicological risks across global food webs. (A) B C A D (B) A B C D (C) B A C D (D) C B A D',
      options: ['B C A D', 'A B C D', 'B A C D', 'C B A D'],
      correctAnswer: 'B C A D',
      explanation: 'B introduces non-biodegradable plastics. C explains fragmentation into microplastics ("Instead..."). A shows global ubiquity. D concludes with toxicological risks. Order = B C A D.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-pj-2',
      question: 'Identify the ODD sentence: (1) Renewable solar energy installations have expanded exponentially due to tumbling silicon cell costs. (2) Wind turbine efficiency has risen with taller hub heights and larger rotor diameters. (3) High-voltage direct current (HVDC) transmission lines transport bulk renewable electricity over thousands of kilometers. (4) Global coal consumption in heavy metallurgical steel manufacturing reached record highs last year. (5) Together, these renewable technologies form the core pillars of global decarbonization pathways.',
      options: ['(1)', '(2)', '(4)', '(5)'],
      correctAnswer: '(4)',
      explanation: 'Sentences 1, 2, 3, 5 discuss renewable clean energy (solar, wind, HVDC transmission, decarbonization). Sentence 4 discusses coal consumption in steel manufacturing.',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-pj-3',
      question: 'Rearrange: A. He published his theory of Special Relativity while working as a patent clerk in Bern. B. Albert Einstein fundamentally reshaped our understanding of space, time, and gravity. C. A decade later, his General Theory of Relativity revealed that mass curves the fabric of spacetime. D. Experimental verification during a 1919 solar eclipse catapulted him to international scientific acclaim. (A) B A C D (B) A B C D (C) B C A D (D) A C B D',
      options: ['B A C D', 'A B C D', 'B C A D', 'A C B D'],
      correctAnswer: 'B A C D',
      explanation: 'B introduces Einstein. A mentions 1905 Special Relativity. C follows with General Relativity 10 years later. D concludes with 1919 eclipse verification. Order = B A C D.',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Introductory Sentence: Independent standalone noun phrase; cannot start with dependent pronouns or contrast markers.',
      'Mandatory Pairs: Formed via Noun-to-Pronoun, Full Name-to-Acronym, Cause-to-Effect, and Problem-to-Solution.',
      'Discourse Connectors: "However/But" (Contrast); "Therefore/Hence" (Conclusion); "Moreover/Furthermore" (Addition).',
      'Article Progression: Indefinite ("A / An") precedes Definite ("The / This").',
      'Option Pruning: Lock in 1 mandatory pair and eliminate non-matching options in seconds.'
    ],
    quickFormulas: [
      'Intro Check: Standalone Subject + No Discursive Words',
      'Mandatory Pair: [Noun Intro] -> [Pronoun Ref]',
      'Acronym Rule: [Full Name] -> [Acronym]',
      'Cause-Effect: [Catalyst] -> [Consequently + Result]'
    ]
  },
  keyTakeaways: [
    'Always use option-driven elimination rather than trying to construct the entire sequence in your head.',
    'Look for definite articles and demonstrative pronouns (The, This, These) as clues that the noun was introduced earlier.',
    'Chronological narratives naturally flow from historical origins to modern implementations.',
    'In Odd Sentence Out questions, group the 4 coherent sentences into a paragraph to isolate the divergent intruder.',
    'Check if a sentence asks a question; its direct answer must follow immediately.'
  ],
  selfCheckQuestions: [
    'Can you identify the independent opening sentence by filtering out sentences with dependent pronouns?',
    'Can you form mandatory pairs using noun-pronoun and acronym references in under 15 seconds?',
    'Can you utilize transition connectors (However, Consequently, Moreover) to establish narrative flow?',
    'Can you prune multiple-choice options using a single validated mandatory pair?',
    'Can you isolate the intruder sentence in an Odd Sentence Out puzzle?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'Word Power Made Easy & Objective English (Norman Lewis / R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter on Sentence Rearrangement, Discourse Flow, and Coherence.'
    },
    {
      sourceName: 'TCS NQT Verbal Ability Competency Framework',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Paragraph jumbles, mandatory pair linkages, and out-of-context elimination.'
    },
    {
      sourceName: 'Infosys Communicative English Assessment',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Sentence reconstruction, transitional adverbs, and narrative sequence analysis.'
    }
  ]
};
