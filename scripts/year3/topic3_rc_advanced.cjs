const topic3_rc_advanced = {
  id: 'y3-verbal-rc-advanced',
  title: 'Advanced Reading Comprehension: Critical Inferences, Authorial Tone & Distractor Elimination',
  yearId: 3,
  category: 'Verbal Ability',
  estimatedTime: '6–8 Hours (One-Day Mastery)',
  prerequisites: [
    'Advanced collegiate vocabulary and contextual semantic interpretation',
    'Structural paragraph coherence and topic sentence identification',
    'Basic propositional logic (Premise, Assumption, Counter-argument, Conclusion)',
    'Skimming and scanning reading techniques'
  ],
  learningObjectives: [
    'Distinguish between explicitly stated textual facts and logically necessary inferences',
    'Identify the central thesis, primary purpose, and underlying argumentative framework of dense passages',
    'Classify authorial tone across objective, analytical, satirical, pedantic, polemical, and skeptical spectrums',
    'Implement the 4-step Distractor Elimination Framework (Out of Scope, Distorted Truth, Extreme Language, Opposite)',
    'Deconstruct complex academic passages (Philosophy, Science, Economics, Social Sciences, Tech Ethics)',
    'Solve vocabulary-in-context questions based on syntactic inflection rather than dictionary definitions',
    'Achieve 90%+ accuracy on corporate assessment verbal RC sections (TCS Prime, Infosys, Capgemini, CAT, GRE)'
  ],
  introduction: [
    'Reading Comprehension (RC) in senior campus recruitment drives and executive assessments (TCS Digital/Prime, Infosys DSE, Cognizant GenC Elevate, CAT, GMAT, GRE) serves as the definitive benchmark of intellectual processing speed, critical analytical discernment, and cognitive reading endurance. Unlike elementary comprehension tests that reward verbatim word-matching from the text, advanced placement RC evaluates a candidate’s ability to read between the lines, extrapolate unstated premises, evaluate rhetorical nuances, and detect deceptive cognitive traps in answer choices.',
    'A typical corporate assessment passage spans 350 to 600 words of dense, syntactically complex discourse drawn from philosophy of technology, macroeconomics, cognitive linguistics, environmental geopolitics, or institutional psychology. Candidates must process this dense material under strict time limits (averaging 75 to 90 seconds per question) and navigate options designed deliberately by psychometricians to exploit cognitive biases such as confirmation bias, over-generalization, and superficial lexical matching.',
    'In this comprehensive masterclass chapter, we deconstruct the mechanics of high-yield Reading Comprehension: Structural Reading heuristics (Topic Sentences, Transition Signposts, Conclusion Anchors), Authorial Tone & Voice Taxonomy, the Four Lethal Distractor Archetypes, 8 fully analyzed textbook passages with question deconstructions, and a 22-question multi-tier challenge suite complete with detailed rationales for why correct choices are mathematically sound and incorrect choices fail.'
  ],
  coreConcepts: [
    'The Anatomy of an Argument: Every rigorous analytical passage is composed of three structural layers: (1) Premises: Objective data, empirical evidence, historical facts, and case studies. (2) Assumptions: Unstated bridge beliefs connecting premises to conclusions. (3) Conclusion / Central Thesis: The author’s primary assertion, recommendation, or verdict that the entire passage is assembled to defend.',
    'Inference vs Direct Fact: An explicit fact is directly stated in the text (e.g., "Company X saw a 14% drop in revenues in Q3"). An inference is a conclusion that MUST BE TRUE based on the provided facts, even though it is not explicitly verbalized (e.g., "Company X’s Q3 financial performance was weaker than expected or baseline"). If an option introduces plausible outside knowledge that cannot be proved strictly from the text, it is an INVALID inference.',
    'Transition Signposts & Discourse Markers: Words signal structural shifts in the argument: (1) Continuation: furthermore, moreover, additionally, in addition. (2) Contrast / Rebuttal: however, nevertheless, on the contrary, yet, despite, notwithstanding (the author’s true opinion almost always follows a contrast signpost!). (3) Cause-Effect / Conclusion: consequently, therefore, thus, hence, accordingly.',
    'The 4 Lethal Distractor Archetypes: (1) Out of Scope (OOS): Mentions ideas that sound intelligent and true in the real world, but have zero textual support. (2) Distorted Truth / Half-Truth: Takes 80% accurate phrasing from the text but alters a crucial noun, adjective, or relationship. (3) Extreme Language: Uses absolutist quantifiers like always, never, completely, exclusively, undeniably where the author used nuanced qualifiers like often, may, suggests. (4) Direct Opposite / Inverted Causality: Flips cause and effect or attributes an opponent’s view to the author.',
    'Authorial Tone & Register Spectrum: (1) Objective / Informative / Neutral: Presents data without emotional adjectives or value judgments. (2) Analytical / Evaluative: Weighs pros and cons before arriving at a reasoned judgment. (3) Skeptical / Cynical: Expresses doubt or questions motives/claims. (4) Polemical / Critical: Strongly attacks or denounces a policy/theory. (5) Satirical / Sarcastic: Uses irony or humor to expose flaws. (6) Pedantic / Didactic: Excessively instructive or academic.'
  ],
  definitions: [
    {
      term: 'Valid Textual Inference',
      meaning:
        'A logical deduction that must necessarily hold true if the statements in the passage are accepted as true, requiring zero unstated external assumptions.'
    },
    {
      term: 'Primary Purpose',
      meaning:
        'The overarching communicative objective of the author (e.g., to critique an established theory, propose an alternative framework, reconcile two opposing viewpoints, or warn against a looming risk).'
    },
    {
      term: 'Authorial Tone',
      meaning:
        'The underlying emotional attitude, intellectual stance, or rhetorical posture adopted by the author toward the primary subject matter.'
    },
    {
      term: 'Extrapolation',
      meaning:
        'Applying the logic or principles established by the author in the passage to a completely new, hypothetical real-world scenario.'
    }
  ],
  rulesAndProperties: [
    {
      rule: 'Rule 1: The First-and-Last Paragraph Anchor Rule',
      explanation:
        'In well-structured analytical prose, the central thesis is articulated in the opening paragraph (often as the last sentence) and reiterated/synthesized in the concluding paragraph. Skim these two paragraphs first to establish the global mental map before reading body paragraphs.',
      example:
        'If Paragraph 1 introduces the rise of LLMs and ends with "Yet, their apparent fluency masks profound epistemological deficits", the entire passage will critique LLM reliability.'
    },
    {
      rule: 'Rule 2: The "However" Pivot Principle',
      explanation:
        'When an author begins a passage by summarizing a widely accepted belief ("For decades, economists believed..."), the word "However", "Yet", or "Nonetheless" marks the author’s ACTUAL thesis. Everything before the pivot was merely context.',
      example:
        '"Classical economics posited rational utility maximization. However, empirical behavioral findings reveal systematic irrationality." The passage supports behavioral economics, not classical models.'
    },
    {
      rule: 'Rule 3: Extreme Word Disqualification Rule',
      explanation:
        'Unless the author explicitly used aggressive, absolutist terminology in the text, immediately eliminate answer choices containing words like always, never, all, none, impossible, entirely, perfect, or unquestionable.',
      example:
        'If the passage says "Remote work often improves work-life balance", an option stating "Remote work always guarantees superior lifestyle outcomes" is automatically incorrect.'
    }
  ],
  formulas: [
    {
      name: 'Central Thesis Identification Formula',
      formula: 'Central Idea = Specific Subject + Author’s Unique Stance / Judgment',
      variables: ['Subject = Core entity/phenomenon discussed', 'Stance = Author’s evaluation (+, -, or neutral)'],
      whenToUse: 'Answering "What is the main idea of the passage?" or "Which title best captures the text?".',
      simpleExample: 'Subject: Remote Work; Stance: Productive but causes social isolation => Main Idea: The Dual Nature of Remote Work.'
    },
    {
      name: 'Inference Verification Equation',
      formula: 'Valid Inference = Textual Premise + Deductive Implication (External Knowledge = 0)',
      variables: ['Premise = Explicit fact from text', 'Deductive Implication = Necessary logical consequence'],
      whenToUse: 'Answering "It can be inferred from the passage that...".',
      simpleExample: 'Passage: Only employees with security badges can enter Room B. John is in Room B => Inference: John has a security badge.'
    }
  ],
  problemVariations: [
    {
      type: 'Variation 1: Central Idea & Primary Purpose',
      description: 'Questions asking to identify the core thesis or determine why the author wrote the passage.',
      sampleSnippet: 'The primary purpose of the passage is to: (A) Reconcile two conflicting scientific models...'
    },
    {
      type: 'Variation 2: Direct Specific Fact & Detail Retrieval',
      description: 'Questions testing precise understanding of a particular paragraph, term, or relationship.',
      sampleSnippet: 'According to paragraph 3, which of the following directly causes memory degradation?'
    },
    {
      type: 'Variation 3: Critical Inference & Extrapolation',
      description: 'Questions asking what the author implies or how the author would react to a new scenario.',
      sampleSnippet: 'It can be reasonably inferred from the passage that if synthetic fuels drop in price...'
    },
    {
      type: 'Variation 4: Authorial Tone & Attitude Classification',
      description: 'Identifying the emotional or intellectual register of the author toward a specific subject.',
      sampleSnippet: 'The tone of the author towards the venture capital ecosystem can best be described as...'
    },
    {
      type: 'Variation 5: Vocabulary-in-Context Semantic Shift',
      description: 'Determining the contextual meaning of a common word used in a specialized or secondary sense.',
      sampleSnippet: 'As used in line 14, the word "arrest" most nearly means: (A) Detain (B) Halt (C) Attract (D) Imprison'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-rc-1',
      title: 'Passage Analysis: Automation and the Future of Labor',
      question:
        'Read the following passage and answer the questions below:\n\n"For over two centuries, technological innovations have routinely dismantled existing occupational paradigms, only to synthesize novel, higher-order economic sectors in their wake. The mechanization of agriculture in the nineteenth century did not permanently consign the global workforce to structural destitution; rather, it liberated human capital for industrial manufacturing and, subsequently, the modern knowledge and services economy. However, the contemporary trajectory of artificial intelligence introduces a qualitative rupture in this historical cycle. Unlike prior waves of automation, which predominantly replaced physical musculature or rote computational arithmetic, generative AI systems directly encroach upon cognitive domains previously deemed the exclusive preserve of human intellect — synthesis, creative composition, and diagnostic reasoning. Consequently, the assumption that displaced workers will effortlessly migrate to emergent cognitive professions may prove dangerously anachronistic."\n\nQuestion 1: What is the primary purpose of the passage?\nQuestion 2: What can be inferred about prior waves of technological disruption?',
      given: ['Passage comparing historical automation (agriculture/manufacturing) with contemporary AI cognitive automation.'],
      conceptUsed: 'Primary Purpose Formulation & Comparative Inference Extraction.',
      stepByStep: [
        'Step 1: Analyze structure: Paragraph starts with historical context (agriculture -> manufacturing -> services), introduces contrast pivot ("However... qualitative rupture"), and concludes with a warning ("assumption... may prove dangerously anachronistic").',
        'Step 2: Answer Question 1 (Primary Purpose): The author aims to caution against assuming that past economic transition models will seamlessly apply to AI-driven cognitive automation. The purpose is not merely to describe history, but to challenge a historical analogy.',
        'Step 3: Answer Question 2 (Inference regarding prior waves): The passage states that historical waves replaced "physical musculature or rote computational arithmetic" and "liberated human capital for industrial manufacturing". We can validly infer that prior technological revolutions primarily automated mechanical and repetitive tasks rather than high-order creative synthesis.'
      ],
      finalAnswer:
        'Q1: To challenge the assumption that historical labor transition models will protect workers from AI-driven cognitive displacement. | Q2: Prior technological disruptions were predominantly confined to physical and routine manual/arithmetic domains.',
      whyMethodWorks:
        'Identifying the contrast marker "However" and the concluding warning sentence immediately isolated the author’s primary argumentative intent.',
      commonTrap:
        'Selecting a summary option that only discusses the history of agricultural mechanization, missing the central critique of contemporary AI.'
    },
    {
      id: 'ex-rc-2',
      title: 'Authorial Tone Classification in Economic Criticism',
      question:
        'Analyze the tone of the following excerpt:\n\n"The proliferation of high-frequency algorithmic trading is often heralded by market evangelists as the ultimate triumph of liquidity provision and pricing efficiency. Yet, beneath this glossy veneer of millisecond execution lies a predatory infrastructure designed to extract micro-rents from retail market participants. When a system’s primary societal contribution is the front-running of institutional retirement orders via colocated fiber-optic cables, celebrating its efficiency is nothing short of intellectual dishonesty."\n\nQuestion: Which of the following best characterizes the author’s tone toward high-frequency trading?\n(A) Laudatory and optimistic\n(B) Dispassionate and scholarly\n(C) Scathing and critical\n(D) Ambivalent and undecided',
      given: ['Strong emotionally charged phrases: "predatory infrastructure", "extract micro-rents", "intellectual dishonesty"'],
      conceptUsed: 'Adjective Diction Analysis & Tone Taxonomy.',
      stepByStep: [
        'Step 1: Highlight key adjectives and rhetorical choices used by the author: "glossy veneer", "predatory infrastructure", "front-running", "intellectual dishonesty".',
        'Step 2: Evaluate options:\n- (A) Laudatory (Praising): Completely opposite to the text.\n- (B) Dispassionate (Neutral/Unemotional): Incorrect, the author uses highly passionate and condemnatory language.\n- (C) Scathing and Critical: Accurately reflects the condemnation of high-frequency trading as predatory and intellectually dishonest.\n- (D) Ambivalent: Incorrect, the author exhibits no hesitation or mixed feelings.',
        'Step 3: Conclude that option (C) is the only tone matching the intense negative evaluation.'
      ],
      finalAnswer: '(C) Scathing and critical',
      whyMethodWorks:
        'Tone is directly manifested through diction and loaded vocabulary ("predatory", "dishonesty").',
      commonTrap:
        'Mistaking the opening sentence’s mention of "pricing efficiency" as evidence of a neutral or balanced tone.'
    },
    {
      id: 'ex-rc-3',
      title: 'Vocabulary in Context: Secondary Meaning Shift',
      question:
        'Read the sentence and determine the contextual meaning:\n\n"Despite immense political friction, the prime minister managed to husband the nation’s fragile fiscal reserves throughout the multi-year recession, avoiding sovereign default."\n\nAs used in the sentence, "husband" most nearly means:\n(A) Marry\n(B) Conserve\n(C) Exhaust\n(D) Expand',
      given: ['Context: "fragile fiscal reserves throughout the recession, avoiding sovereign default"'],
      conceptUsed: 'Syntactic Context Clues & Secondary Semantic Definitions.',
      stepByStep: [
        'Step 1: Look at the syntactic position of "husband" — it is used as an active transitive verb governing the direct object "fragile fiscal reserves".',
        'Step 2: Examine the surrounding narrative outcome: "avoiding sovereign default" during a "multi-year recession". To avoid default during a recession, fiscal reserves must be protected, economized, and saved carefully.',
        'Step 3: Recall the secondary definition of the verb "to husband": to use resources prudently and economically; to conserve.',
        'Step 4: Eliminate (A) Marry (primary noun definition, nonsensical as a financial verb), (C) Exhaust (opposite), (D) Expand (unsupported by context).'
      ],
      finalAnswer: '(B) Conserve',
      whyMethodWorks:
        'The contextual outcome ("avoiding sovereign default") dictates resource preservation, validating the archaic/formal verb meaning of husbanding.',
      commonTrap:
        'Defaulting to the common marital noun definition of "husband" and guessing option (A).'
    },
    {
      id: 'ex-rc-4',
      title: 'Critical Inference & Unstated Assumption Deconstruction',
      question:
        'Passage Excerpt:\n\n"Urban air quality sensors in Megacity Alpha recorded a 35% decline in airborne particulate matter (PM2.5) during the four months following the implementation of strict odd-even vehicle license plate restrictions. Municipal authorities declared the policy an unmitigated environmental triumph. However, meteorological records show that the region experienced unprecedented monsoon precipitation and high-velocity wind patterns throughout those exact four months."\n\nWhich of the following, if true, most seriously weakens the municipal authorities’ claim?\n(A) Vehicle compliance rates with the odd-even rule were above 90%.\n(B) Heavy rainfall and high winds are known to naturally scrub PM2.5 particles from the atmosphere.\n(C) Public transport usage increased significantly during the restriction period.\n(D) Surrounding rural districts did not implement vehicle restrictions.',
      given: ['Authorities claim vehicle restrictions caused PM2.5 decline. Text notes heavy rain and wind occurred simultaneously.'],
      conceptUsed: 'Correlation vs Causation & Confounding Variable Identification.',
      stepByStep: [
        'Step 1: Identify the central causal claim: Vehicle restrictions (Cause) -> 35% PM2.5 decline (Effect).',
        'Step 2: Identify the counter-evidence introduced: Unprecedented rain and wind occurred during the same window.',
        'Step 3: To weaken the authorities’ claim, show that the decline in PM2.5 was caused by the weather (confounding variable) rather than the traffic policy.',
        'Step 4: Option (B) directly establishes that rainfall and high winds naturally scrub PM2.5 from the atmosphere, providing an alternative causal mechanism for the entire 35% decline.',
        'Step 5: Options (A) and (C) strengthen the authorities’ policy effectiveness. Option (D) is irrelevant to Alpha’s internal causation.'
      ],
      finalAnswer: '(B) Heavy rainfall and high winds are known to naturally scrub PM2.5 particles from the atmosphere.',
      whyMethodWorks:
        'Demonstrating an alternative cause for the observed effect breaks the isolated causal link asserted by the authorities.',
      commonTrap:
        'Choosing option (A) because it sounds positive, forgetting that the prompt asked to WEAKEN the claim.'
    },
    {
      id: 'ex-rc-5',
      title: 'Distractor Elimination: Extreme Language Filtering',
      question:
        'Based on a passage stating: "While clinical trials indicate that intermittent fasting can improve insulin sensitivity in pre-diabetic patients, researchers emphasize that long-term cardiovascular outcomes remain unstudied."\n\nWhich statement is supported by the text?\n(A) Intermittent fasting is the most effective cure for all types of diabetes.\n(B) Intermittent fasting always improves insulin sensitivity in every individual.\n(C) Pre-diabetic patients may experience enhanced insulin sensitivity through intermittent fasting.\n(D) Cardiovascular disease is entirely caused by poor fasting habits.',
      given: ['Nuanced textual claim: "can improve insulin sensitivity in pre-diabetic patients", long-term unstudied.'],
      conceptUsed: 'Absolute vs Probabilistic Qualifier Alignment.',
      stepByStep: [
        'Step 1: Filter Option (A): "most effective cure for all types" — Extreme qualifier ("all types", "most effective") not in text. Eliminate.',
        'Step 2: Filter Option (B): "always improves... in every individual" — Absolute qualifiers ("always", "every"). Eliminate.',
        'Step 3: Filter Option (D): "entirely caused" — Absolute causal claim with zero textual backing. Eliminate.',
        'Step 4: Evaluate Option (C): "Pre-diabetic patients may experience enhanced insulin sensitivity..." — Uses calibrated modal qualifier "may", accurately mirroring the text’s "can improve".'
      ],
      finalAnswer: '(C) Pre-diabetic patients may experience enhanced insulin sensitivity through intermittent fasting.',
      whyMethodWorks:
        'Matching the author’s nuanced modal qualifier ("can/may") protects against over-generalization traps.',
      commonTrap:
        'Selecting Option (B) because it affirms the positive effect, ignoring the lethal distractor word "always".'
    },
    {
      id: 'ex-rc-6',
      title: 'Extrapolation to Hypothetical Parallel Scenarios',
      question:
        'Passage Principle: "In antitrust jurisprudence, predatory pricing occurs when a dominant firm deliberately operates at a loss in a market to bankrupt competitors, subsequently raising prices once a monopoly is established."\n\nWhich of the following scenarios best exemplifies predatory pricing as defined above?\n(A) A bakery discounts day-old bread by 50% at closing time to avoid food waste.\n(B) A tech giant gives away free cloud storage below operating costs for 3 years until rival startups shut down, then triples subscription fees.\n(C) A luxury fashion brand burns unsold inventory to maintain artificial brand prestige.\n(D) A supermarket matches the lower prices of a new competitor opening across the street.',
      given: ['Definition: Loss-making pricing -> competitors bankrupted -> monopoly established -> prices raised.'],
      conceptUsed: 'Conceptual Pattern Matching & Scenario Mapping.',
      stepByStep: [
        'Step 1: Break definition into 4 sequential conditions:\n1. Dominant player\n2. Pricing below cost (deliberate loss)\n3. Competitors driven out of business\n4. Prices raised post-monopoly.',
        'Step 2: Test Scenario (B):\n1. Tech giant (dominant player)\n2. Below operating costs for 3 years (deliberate loss)\n3. Startups shut down (competitors bankrupted)\n4. Triples subscription fees (prices raised post-monopoly).\nAll 4 conditions are perfectly matched!',
        'Step 3: Eliminate (A) (clearing perishable inventory, not bankrupting competitors), (C) (inventory management, not pricing), (D) (price matching, not operating at a loss to create a monopoly).'
      ],
      finalAnswer: '(B) A tech giant gives away free cloud storage below operating costs for 3 years until rival startups shut down, then triples subscription fees.',
      whyMethodWorks:
        'Mapping the 4 logical constituent elements of the definition directly onto the candidate scenarios guarantees a watertight match.',
      commonTrap:
        'Confusing standard competitive discounts (Option D) with anti-competitive predatory pricing.'
    },
    {
      id: 'ex-rc-7',
      title: 'Identifying the Underlying Authorial Assumption',
      question:
        'Argument: "To eliminate traffic congestion in the metropolis, the city council should double the parking fees across all municipal garages. This financial disincentive will force citizens to use the newly expanded metro rail network."\n\nWhich of the following is an unstated assumption required for this argument to hold?\n(A) The metro rail network has the spare capacity to absorb the displaced car commuters.\n(B) Traffic congestion in the metropolis is worse than in neighboring cities.\n(C) Municipal garages are the only places where cars can be parked in the city.\n(D) Electric vehicles cause less congestion than gasoline vehicles.',
      given: ['Proposal: Double parking fees -> citizens switch to metro -> traffic eliminated.'],
      conceptUsed: 'Negation Test for Critical Assumptions.',
      stepByStep: [
        'Step 1: Apply the Assumption Negation Test: If an assumption is truly necessary, negating it MUST cause the argument to collapse.',
        'Step 2: Negate Option (A): "The metro rail network does NOT have the spare capacity to absorb displaced commuters." If the metro is already 100% full and cannot take any more passengers, commuters cannot switch to it, and the policy fails completely! Thus, Option (A) is a mandatory assumption.',
        'Step 3: Negate Option (B): "Traffic is not worse than neighboring cities." The argument is about internal city traffic, comparison to other cities is irrelevant.',
        'Step 4: Negate Option (C): "Municipal garages are not the only places." Even if private parking exists, doubling municipal fees still creates disincentives. Not strictly necessary.',
        'Step 5: Conclude Option (A) is the essential structural bridge.'
      ],
      finalAnswer: '(A) The metro rail network has the spare capacity to absorb the displaced car commuters.',
      whyMethodWorks:
        'The Negation Test is the gold standard for assumption questions: if the negated statement destroys the argument, it is the correct assumption.',
      commonTrap:
        'Selecting Option (C) because it seems logical, but an absolute monopoly over all parking is not strictly required for the policy to work.'
    },
    {
      id: 'ex-rc-8',
      title: 'Evaluating Rhetorical Function of a Supporting Paragraph',
      question:
        'In an essay exploring the psychological roots of procrastination, the author includes a detailed paragraph recounting a 1972 Stanford behavioral experiment on delayed gratification (the Marshmallow Test).\n\nThe author most likely includes this paragraph in order to:\n(A) Prove that procrastination is an incurable genetic disorder.\n(B) Provide historical empirical groundwork for how humans evaluate immediate rewards versus delayed outcomes.\n(C) Discredit modern neurological brain-imaging techniques.\n(D) Argue that children should not be given sugary snacks.',
      given: ['Essay on procrastination roots; includes Stanford marshmallow delayed gratification experiment.'],
      conceptUsed: 'Rhetorical Role Analysis in Structural Discourse.',
      stepByStep: [
        'Step 1: Identify the main essay topic: Psychological roots of procrastination (delaying effort for immediate relief).',
        'Step 2: Understand the function of the Marshmallow Test in psychology: It is the foundational empirical study on how individuals weigh immediate gratification against long-term benefits.',
        'Step 3: Connect experiment function to essay goal: The experiment provides the empirical foundation explaining why people prioritize immediate short-term comfort over long-term productivity.',
        'Step 4: Eliminate extreme/irrelevant options: (A) "incurable genetic disorder" (extreme), (C) "discredit modern imaging" (OOS), (D) "sugary snacks" (literal distortion).'
      ],
      finalAnswer: '(B) Provide historical empirical groundwork for how humans evaluate immediate rewards versus delayed outcomes.',
      whyMethodWorks:
        'Examples in analytical essays serve to ground abstract concepts in concrete empirical evidence.',
      commonTrap:
        'Selecting Option (D) by focusing on the literal object used in the test (marshmallow) rather than the psychological concept tested.'
    }
  ],
  alternativeMethods: [
    {
      title: 'Reading Strategy: Passage-First vs Question-Stem-First',
      standardMethod:
        'Full Passage Read First: Read the complete passage in 2-3 minutes, take mental notes, then answer questions.',
      shortcutMethod:
        'Targeted Question-Stem Scanning: Read the question stems first (without reading options) to prime memory for key keywords before reading the text.',
      bestApproachExplanation:
        'Reading question stems first creates targeted cognitive filters, speeding up detail retrieval by 40% in timed 15-minute sectional tests.'
    }
  ],
  fasterMethods: [
    'The "First/Last Sentence Skim": Read the first and last sentence of every body paragraph to map the flow of arguments in 45 seconds.',
    'Distractor Elimination by Absolute Words: Scan options for "always", "never", "all", "none" and strike them out immediately.'
  ],
  commonMistakes: [
    {
      mistake: 'Injecting outside personal knowledge into inference questions.',
      whyItHappens: 'Choosing an answer because it is factually true in real life, even though the passage never mentioned it.',
      howToAvoid: 'Treat the passage as a closed universe. If a statement cannot be proved strictly from the text, it is false in the test.'
    },
    {
      mistake: 'Falling for Lexical Matching (Word-for-Word Trap).',
      whyItHappens: 'Test-makers copy an exact phrase from the passage into a wrong answer option, while subtly changing the meaning.',
      howToAvoid: 'Never pick an answer solely because it contains identical words. Verify the logical relationship between the words.'
    }
  ],
  placementStrategy: [
    'TCS NQT / Prime: 1-2 dense technical/philosophical passages. Questions test vocabulary-in-context and explicit structural tone.',
    'Infosys Verbal Ability: Heavy on Critical Reasoning RC (Inferences, Assumptions, Weakening claims). Use the Negation Test.',
    'Cognizant / Capgemini: Business and economics passages with factual retrieval and main idea questions. Look at opening and closing paragraphs.'
  ],
  practiceQuestions: [
    {
      id: 'p-rc-1',
      tier: 'Foundation',
      question: 'Which of the following words in an answer choice is most likely a red flag for an extreme language distractor?',
      options: ['Sometimes', 'Frequently', 'Exclusively', 'Generally'],
      correctOptionIndex: 2,
      explanation: '"Exclusively" is an absolutist quantifier that severely narrows validity and is almost always a distractor unless the text is equally absolute.'
    },
    {
      id: 'p-rc-2',
      tier: 'Foundation',
      question: 'Where is the central thesis of an analytical passage most commonly located?',
      options: ['In the middle of the third body paragraph', 'In the opening paragraph or closing summary', 'In the footnotes', 'In the first sentence of every paragraph'],
      correctOptionIndex: 1,
      explanation: 'In academic and formal prose, authors establish their thesis in the introduction and reiterate it in the conclusion.'
    },
    {
      id: 'p-rc-3',
      tier: 'Foundation',
      question: 'If a passage states: "All mammals breathe oxygen. Whales are mammals." What is a valid inference?',
      options: ['Whales can live on land', 'Whales breathe oxygen', 'Fish breathe oxygen like whales', 'All creatures in the sea are mammals'],
      correctOptionIndex: 1,
      explanation: 'Direct deductive syllogism: Whales are mammals + mammals breathe oxygen => Whales breathe oxygen.'
    },
    {
      id: 'p-rc-4',
      tier: 'Foundation',
      question: 'Which tone is characterized by presenting statistical facts without personal bias or emotional adjectives?',
      options: ['Satirical', 'Polemical', 'Objective', 'Cynical'],
      correctOptionIndex: 2,
      explanation: 'An objective tone presents neutral, unvarnished facts without emotional language or subjective bias.'
    },
    {
      id: 'p-rc-5',
      tier: 'Foundation',
      question: 'What does a contrast signpost like "Nevertheless" indicate in a passage?',
      options: ['An example supporting the prior sentence', 'A direct contradiction or nuance following the prior idea', 'A summary of the entire chapter', 'A definition of a technical term'],
      correctOptionIndex: 1,
      explanation: '"Nevertheless" signals a rhetorical pivot or qualification modifying the preceding argument.'
    },
    {
      id: 'p-rc-6',
      tier: 'Foundation',
      question: 'What is the purpose of the Assumption Negation Test?',
      options: ['To prove the text is false', 'To verify if an unstated premise is truly essential to an argument', 'To find grammar errors', 'To calculate the word count'],
      correctOptionIndex: 1,
      explanation: 'Negating a necessary assumption destroys the logic of the conclusion, confirming its status as a required premise.'
    },
    {
      id: 'p-rc-7',
      tier: 'Intermediate',
      question: 'Passage: "Renewable energy adoption grew by 20% this year. However, fossil fuel consumption also increased due to unprecedented industrial manufacturing demands." What can be inferred?',
      options: ['Renewable energy failed to meet its targets', 'Increased renewable adoption did not lead to an absolute decrease in fossil fuel use', 'Industrial manufacturing only uses fossil fuels', 'Renewable energy is cheaper than coal'],
      correctOptionIndex: 1,
      explanation: 'Renewables grew AND fossil fuels grew => Renewable growth did not result in an absolute reduction in fossil fuel consumption.'
    },
    {
      id: 'p-rc-8',
      tier: 'Intermediate',
      question: 'As used in formal critical essays, the word "pedantic" most nearly describes a tone that is:',
      options: ['Warm and welcoming', 'Excessively focused on minor formal rules and academic trivialities', 'Humorous and playful', 'Deeply sorrowful and grieving'],
      correctOptionIndex: 1,
      explanation: '"Pedantic" describes an overly formal, ostentatious display of academic knowledge and obsession with minute rules.'
    },
    {
      id: 'p-rc-9',
      tier: 'Intermediate',
      question: 'Passage: "The company’s decision to terminate the project was not driven by technical feasibility issues, but by shifting executive priorities." Which statement is directly supported?',
      options: ['The project was technically unfeasible', 'The project was feasible from a technical standpoint', 'The executives had no priorities', 'The project was revived later'],
      correctOptionIndex: 1,
      explanation: 'The text states technical feasibility was NOT the issue that caused termination, confirming it was technically feasible.'
    },
    {
      id: 'p-rc-10',
      tier: 'Intermediate',
      question: 'Which of the following represents an "Out of Scope" (OOS) distractor for a passage on solar panel manufacturing efficiency?',
      options: ['A statement about silicon cell conversion rates mentioned in paragraph 2', 'A statement discussing the political history of oil subsidies in the 1970s', 'A summary of manufacturing defects', 'A comparison of mono-crystalline vs poly-crystalline cells'],
      correctOptionIndex: 1,
      explanation: 'Discussing 1970s oil subsidies introduces external political history unrelated to the technical manufacturing text.'
    },
    {
      id: 'p-rc-11',
      tier: 'Intermediate',
      question: 'When an author uses phrases like "so-called experts" and "supposed breakthroughs", the authorial attitude is best described as:',
      options: ['Reverent', 'Skeptical', 'Apathetic', 'Celebratory'],
      correctOptionIndex: 1,
      explanation: 'Scare quotes and qualifying adjectives like "so-called" and "supposed" signal explicit skepticism and distrust.'
    },
    {
      id: 'p-rc-12',
      tier: 'Intermediate',
      question: 'Passage: "Every engineer on Team X knows Python. Rahul does not know Python." What must be true?',
      options: ['Rahul is an engineer on Team Y', 'Rahul is not on Team X', 'Rahul knows Java', 'Team X has no engineers'],
      correctOptionIndex: 1,
      explanation: 'By Contraposition: If on Team X -> knows Python. Rahul does not know Python -> Rahul is not on Team X.'
    },
    {
      id: 'p-rc-13',
      tier: 'Advanced',
      question: 'Passage: "While digital archives democratize access to historical manuscripts, they inadvertently engender an illusion of permanence. Digital file formats suffer from rapid obsolescence and bit-rot far more swiftly than acid-free parchment." The author’s primary concern is that:',
      options: ['Manuscripts should never be digitized', 'Digital preservation may be less durable over centuries than physical archival materials', 'Parchment is too expensive to manufacture', 'Libraries should close their digital portals'],
      correctOptionIndex: 1,
      explanation: 'The author contrasts the "illusion of permanence" with "bit-rot" and format obsolescence compared to acid-free parchment.'
    },
    {
      id: 'p-rc-14',
      tier: 'Advanced',
      question: 'In an argument concluding that "Planting 1 billion trees will reverse global warming", which is an unstated assumption?',
      options: ['Trees absorb carbon dioxide from the atmosphere', 'All trees grow to maturity in one year', 'Global warming is a natural cycle', 'Fossil fuel companies will fund the planting'],
      correctOptionIndex: 0,
      explanation: 'For tree planting to reverse warming, trees must absorb greenhouse gases (CO2) from the atmosphere.'
    },
    {
      id: 'p-rc-15',
      tier: 'Advanced',
      question: 'Passage: "To describe the novel as groundbreaking is to overlook its pervasive structural reliance on Victorian melodrama." The author’s tone toward the novel’s originality is:',
      options: ['Enthusiastic', 'Uncritical', 'Dismissive of its claim to novelty', 'Indifferent'],
      correctOptionIndex: 2,
      explanation: 'The author argues that calling it groundbreaking overlooks its heavy derivative reliance on older Victorian tropes.'
    },
    {
      id: 'p-rc-16',
      tier: 'Advanced',
      question: 'If a passage claims that "A increases when B decreases, provided C is held constant", which scenario violates this relationship?',
      options: ['B decreases, C is constant, A increases', 'B decreases, C is constant, A decreases', 'B increases, C changes, A changes', 'B is constant, C is constant, A is constant'],
      correctOptionIndex: 1,
      explanation: 'If B decreases while C is constant, A MUST increase. If A decreases, the stated relationship is directly violated.'
    },
    {
      id: 'p-rc-17',
      tier: 'Advanced',
      question: 'What is the contextual meaning of "plastic" in the sentence: "The adolescent brain exhibits a plastic neural architecture capable of rapid rewiring in response to trauma."?',
      options: ['Synthetic polymer', 'Malleable and adaptable', 'Rigid and immutable', 'Artificial and fake'],
      correctOptionIndex: 1,
      explanation: 'In neurobiology, "plastic" means neuroplastic — capable of being molded, adapted, or structurally reconfigured.'
    },
    {
      id: 'p-rc-18',
      tier: 'Placement-Style',
      question: 'Passage: "The introduction of automated toll booths reduced average wait times from 12 minutes to 45 seconds. Nonetheless, total highway transit times increased by 15%." Which of the following best reconciles this paradox?',
      options: ['Automated booths are cheaper to operate', 'The reduced toll wait times induced significant additional traffic volume that congested downstream bridges', 'Drivers drove slower through the toll booths', 'Toll fares were increased by 50%'],
      correctOptionIndex: 1,
      explanation: 'Downstream bottlenecking caused by induced traffic volume explains why transit times rose despite faster toll processing.'
    },
    {
      id: 'p-rc-19',
      tier: 'Placement-Style',
      question: 'An author writes: "The claim that quantum computers will instantly decipher all modern cryptography within five years is a dramatic overstatement built on laboratory extrapolations." The author believes:',
      options: ['Quantum computers will never exist', 'Quantum decryption within 5 years is unlikely or exaggerated', 'Modern cryptography is already broken', 'Laboratory research is fraudulent'],
      correctOptionIndex: 1,
      explanation: 'Calling it a "dramatic overstatement" directly conveys that the 5-year timeline is exaggerated.'
    },
    {
      id: 'p-rc-20',
      tier: 'Placement-Style',
      question: 'Passage: "Unlike his predecessors who treated the diplomatic corps with polite deference, Ambassador Sterling practiced a blunt, transactional diplomacy." What can be inferred about Sterling’s predecessors?',
      options: ['They were corrupt', 'They typically exhibited polite deference in diplomatic interactions', 'They had no foreign policy experience', 'They were all from the same political party'],
      correctOptionIndex: 1,
      explanation: 'The contrast "Unlike his predecessors who treated... with polite deference" directly establishes that predecessors exhibited polite deference.'
    },
    {
      id: 'p-rc-21',
      tier: 'Placement-Style',
      question: 'Which of the following represents a "Distorted Truth" distractor for an author stating "Most European countries experienced GDP stagnation during 2022"?',
      options: ['"Every European country experienced severe GDP collapse in 2022"', '"Some European economies did not grow in 2022"', '"Asian economies grew rapidly in 2022"', '"European inflation was high in 2022"'],
      correctOptionIndex: 0,
      explanation: 'Changing "Most" to "Every" and "stagnation" to "severe collapse" exaggerates and distorts the textual truth.'
    },
    {
      id: 'p-rc-22',
      tier: 'Placement-Style',
      question: 'If the central premise of an editorial is that "Higher corporate taxation stifles patent filings", which finding would most weaken this editorial?',
      options: ['Countries with the highest corporate tax rates consistently lead the world in annual patent grants', 'Corporate taxes are paid quarterly', 'Small startups file fewer patents than multinational conglomerates', 'Patent attorneys charge high hourly fees'],
      correctOptionIndex: 0,
      explanation: 'Showing that high-tax countries lead in patent grants directly contradicts the claim that high taxation stifles innovation.'
    }
  ],
  mixedChallenges: [
    {
      id: 'mc-rc-1',
      title: 'Critical Synthesis: The Epistemology of Algorithmic Bias',
      question:
        'Passage Excerpt: "Machine learning models do not generate prejudice ex nihilo; they mirror and mathematically crystallize the historical inequities embedded in their training corpora. When an algorithmic recruiting tool penalizes resumes containing the word ‘women’s’, it is not exhibiting a sentient bias, but faithfully reproducing three decades of historical hiring skews. Thus, attempting to ‘de-bias’ algorithms without addressing root structural inequities in employment pipelines is treating the diagnostic thermometer while ignoring the systemic fever."\n\nQuestion: Based on the passage, what is the author’s stance on algorithmic recruitment bias, and what metaphor is used to defend it?',
      conceptUsed: 'Metaphorical Argument Analysis & Thesis Synthesis.',
      solutionSteps: [
        'Step 1: Identify the core thesis: Algorithmic bias is a reflection (symptom) of historical societal inequities, not an independent creation of the machine.',
        'Step 2: Identify the supporting mechanism: The model is trained on historical data containing 30 years of biased hiring patterns.',
        'Step 3: Analyze the concluding metaphor: "treating the diagnostic thermometer while ignoring the systemic fever." The algorithm is merely the thermometer (diagnostic tool reflecting existing temperature); modifying the algorithm alone does not cure the societal fever (systemic hiring inequity).'
      ],
      finalAnswer: 'The author views algorithmic bias as a symptom/mirror of historical human inequity; the metaphor of the thermometer vs fever illustrates that altering algorithms alone fails to address root systemic injustice.'
    },
    {
      id: 'mc-rc-2',
      title: 'Discourse Mapping: Multi-Paradigm Scientific Transitions',
      question:
        'Analyze how an author structures an argument when discussing Thomas Kuhn’s concept of "Paradigm Shifts" across three paragraphs.',
      conceptUsed: 'Structural Rhetorical Role Mapping.',
      solutionSteps: [
        'Step 1: Paragraph 1 establishes Normal Science (puzzle-solving within an accepted consensus model).',
        'Step 2: Paragraph 2 introduces Anomaly Accumulation (unexplained empirical observations that resist the current framework).',
        'Step 3: Paragraph 3 details Scientific Revolution / Paradigm Shift (adoption of an incommensurable new theoretical model that redefines foundational concepts).'
      ],
      finalAnswer: 'Thesis progression: Consensus Foundation -> Empirical Anomaly Crisis -> Theoretical Revolution.'
    },
    {
      id: 'mc-rc-3',
      title: 'Resolving Paradoxical Economic Inferences',
      question:
        'Passage: "When Luxury Brand Z raised the retail price of its signature leather bag by 40%, unit sales volume in metropolitan boutiques increased by 25% over the subsequent fiscal quarter." Explain the economic phenomenon and why standard demand curves fail here.',
      conceptUsed: 'Veblen Good & Conspicuous Consumption Inferences.',
      solutionSteps: [
        'Step 1: Standard law of demand states price and demand are inversely related (Price up -> Demand down).',
        'Step 2: Here, Price increased (+40%) and Demand increased (+25%).',
        'Step 3: Valid Inference: The luxury handbag functions as a "Veblen Good" (a status/positional good where higher price enhances perceived exclusivity, prestige, and social signaling value, thereby stimulating demand among affluent consumers).'
      ],
      finalAnswer: 'The product exhibits Veblen good dynamics where higher price amplifies conspicuous signaling value, defying standard downward-sloping demand curves.'
    }
  ],
  quickRevision: [
    'Thesis = Subject + Author’s Unique Stance (Check first and last paragraphs).',
    'Contrast signposts ("However", "Yet", "Nonetheless") mark where the author’s real argument begins.',
    '4 Distractor Types: Out of Scope (OOS), Distorted Truth, Extreme Words, Inverted Causality.',
    'Valid inferences must be 100% provable from text with zero outside knowledge.',
    'Use the Negation Test for assumption questions: If negating the choice kills the conclusion, it is correct.'
  ],
  keyTakeaways: [
    'Never choose an answer choice merely because it contains words copied verbatim from the passage.',
    'Eliminate choices with absolute quantifiers (always, never, all, completely) unless the text is equally absolute.',
    'Vocabulary in context tests secondary and metaphorical definitions, not basic dictionary definitions.',
    'Read question stems first to create mental search filters before reading dense passage paragraphs.'
  ],
  selfCheck: [
    'Can you name the 4 lethal distractor archetypes?',
    'Do you know how to apply the Assumption Negation Test?',
    'Can you distinguish between an objective tone and a pedantic tone?',
    'Can you identify the central thesis sentence within 45 seconds of skimming a passage?'
  ],
  sources: [
    'Word Power Made Easy & How to Read Better and Faster — Norman Lewis',
    'Verbal Ability and Reading Comprehension for CAT — Arun Sharma & Meenakshi Upadhyay',
    'The Official Guide to the GRE / GMAT Verbal Reasoning Assessment Frameworks'
  ]
};

module.exports = topic3_rc_advanced;
