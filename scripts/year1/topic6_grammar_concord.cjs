module.exports = {
  id: 'y1-verbal-grammar-concord',
  yearId: 1,
  category: 'Verbal Ability',
  topicNumber: 6,
  title: 'Grammar Foundations & Subject-Verb Concord',
  tagline: 'Singular/plural verb agreement, intervening phrases, collective nouns, correlative conjunctions, and sentence correction.',
  estimatedMinutes: 60,
  difficulty: 'Foundation',
  introduction: {
    overview: 'Subject-Verb Concord (Agreement) is the foundational rule of English syntax requiring that a finite verb agree in grammatical number (singular or plural) and person with its grammatical subject. While straightforward in simple clauses ("The student reads"; "The students read"), recruitment assessments intentionally obscure agreement by inserting intervening prepositional phrases, parenthetical modifiers ("as well as", "together with"), inverted sentence orders, correlative conjunctions ("either... or", "neither... nor"), and ambiguous collective or indefinite pronouns. Error detection and sentence correction questions evaluate whether a candidate can pierce through structural distractions and isolate the core grammatical subject.',
    placementRelevance: 'Verbal sections in TCS NQT (Verbal Ability), Infosys (Communicative English), Wipro, AMCAT, and CoCubes assign nearly 30% of their grammar questions to Subject-Verb Agreement, modifier placement, and pronoun-antecedent concord.',
    historicalRecruiterWeightage: 'Consistently appears across 90%+ of all corporate recruitment verbal assessment modules.',
    realWorldContext: 'Precision in syntax and grammatical agreement is vital in professional technical documentation, executive correspondence, software specification sheets, and legal contract drafting.'
  },
  learningObjectives: [
    'Isolate the true grammatical subject by mentally eliminating intervening prepositional phrases.',
    'Apply proximity agreement rules for correlative conjunctions ("neither... nor", "either... or", "not only... but also").',
    'Determine verb agreement when subjects are linked by additive phrases ("along with", "as well as", "together with", "in addition to").',
    'Classify indefinite pronouns into strictly singular (each, either, neither, everyone, nobody), strictly plural (both, few, many, several), and SANAM pronouns (some, all, none, any, most).',
    'Handle collective nouns in unit mode (singular verb) vs individual constituent mode (plural verb).',
    'Apply concord rules to measurements, monetary amounts, and time spans functioning as single quantitative units.',
    'Diagnose and correct subject-verb errors in multi-clause sentences.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Parts of speech (Nouns, Pronouns, Verbs, Prepositions)', 'Singular vs Plural noun inflections (-s, -es)', 'Base form vs 3rd-person singular verbs (e.g., walk vs walks)'],
    quickRefresher: 'Unlike nouns where adding "-s" makes them plural (book -> books), adding "-s" to a present tense verb makes it singular (they write -> he writes).'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Subject-Verb Concord: The syntactic requirement that the form of a verb matches the number and person of its subject.',
      'Intervening Phrase: A modifier (e.g. prepositional phrase, relative clause) placed between the subject and the verb that does NOT change the grammatical number of the subject.',
      'Additive Phrases: Expressions like "as well as", "along with", "in addition to", "accompanied by", which introduce parenthetical information without forming compound subjects.',
      'Correlative Conjunctions: Paired connectors ("either... or", "neither... nor", "not only... but also") where verb concord is determined by the PROXIMITY rule (agrees with the nearest subject).',
      'Indefinite Pronouns: Pronouns referring to non-specific entities; classified as Singular (everyone, each), Plural (both, many), or Contextual/SANAM (some, any, none, all, most).',
      'Collective Nouns: Nouns denoting groups (team, jury, committee, faculty) taking singular verbs when acting as a unified body and plural verbs when individuals act separately.'
    ],
    theoreticalIntuition: 'The primary strategy in sentence correction is Subject Isolation. Prepositional phrases beginning with "of", "in", "with", "at", "by", "for", "from" can NEVER contain the grammatical subject of a sentence. Mentally place parentheses around all intervening prepositional phrases to expose the bare Subject-Verb pair: "The quality (of the apples in the wooden crates) IS (not are) exceptional."',
    visualOrMentalModel: 'Think of the sentence as an electrical circuit: The Subject is the power source and the Verb is the appliance. Intervening phrases are decorative insulation—they do not alter the voltage. Only the primary subject determines whether the circuit requires a singular (5V) or plural (12V) verb.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Rule 1: Intervening Prepositional Phrases',
      formula: 'Subject + [Prepositional Phrase / Modifier] + Verb',
      variables: 'Verb must agree ONLY with the Subject, completely ignoring the noun inside the modifier',
      description: 'The number of the subject is not changed by a phrase following the subject.',
      whenToUse: 'Sentences containing long phrases like "one of the...", "the list of items...", "the cost of all these articles...".',
      simpleExample: 'The bouquet of red roses smells (NOT smell) sweet.'
    },
    {
      title: 'Rule 2: Additive Connectors (First Subject Rule)',
      formula: 'Subject 1 + {as well as / along with / together with / in addition to / accompanied by} + Subject 2 + Verb',
      variables: 'Verb agrees strictly with Subject 1',
      description: 'Additive connectors do not create compound subjects (unlike "and").',
      whenToUse: 'When two subjects are joined by "with", "along with", "as well as", "besides", "like", "unlike".',
      simpleExample: 'The captain, along with his crew members, was (NOT were) rescued.'
    },
    {
      title: 'Rule 3: Correlative Conjunctions (Proximity / Nearest Subject Rule)',
      formula: '{Either S1 or S2} / {Neither S1 nor S2} / {Not only S1 but also S2} + Verb',
      variables: 'Verb agrees in number and person with S2 (the subject nearest to the verb)',
      description: 'The verb matches the grammatical number of the subject physically closest to it.',
      whenToUse: 'When subjects of different grammatical numbers are joined by "or", "nor", "either... or", "neither... nor".',
      simpleExample: 'Neither the manager nor the employees were (agrees with employees) satisfied.'
    },
    {
      title: 'Rule 4: Singular Indefinite Pronouns',
      formula: '{Each, Every, Either, Neither, Everyone, Everybody, Anyone, Somebody, Nobody, One} + Singular Verb',
      variables: 'Always take singular verbs, even when followed by "of the [plural noun]"',
      description: 'Indefinite pronouns ending in -one, -body, -thing are universally singular.',
      whenToUse: 'Sentences starting with "Each of...", "Neither of...", "Everyone of...".',
      simpleExample: 'Each of the participating engineers has (NOT have) submitted the design.'
    },
    {
      title: 'Rule 5: SANAM Pronouns (Contextual Fractions/Percentages)',
      formula: '{Some, All, None, Any, Most, Fractions, % } + of [Noun] + Verb',
      variables: 'If Noun is Uncountable => Singular Verb; If Noun is Plural Countable => Plural Verb',
      description: 'For SANAM pronouns, verb number is determined by the object of the preposition "of".',
      whenToUse: 'Evaluating expressions with "none of", "all of", "two-thirds of", "60% of".',
      simpleExample: 'All of the pie is gone (uncountable); All of the pies are gone (countable plural).'
    },
    {
      title: 'Rule 6: "One of the [Plural Noun] Who/That [Plural Verb]"',
      formula: 'One of the [Plural Noun] + {who / that / which} + PLURAL Verb; BUT "The only one of the [Plural Noun] that..." + SINGULAR Verb',
      variables: 'Relative pronoun (who/that) refers to the plural noun immediately preceding it',
      description: 'High-frequency trap rule in recruitment grammar tests.',
      whenToUse: 'Sentences containing relative pronoun clauses after "one of the...".',
      simpleExample: 'She is one of the candidates who have (NOT has) cleared the assessment.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Mastering Subject-Verb Concord begins with distinguishing form from function. In English, plural nouns typically end in -s (e.g., algorithms), but plural verbs do NOT end in -s (e.g., they run). Conversely, 3rd-person singular present tense verbs end in -s (e.g., it runs). A sentence is grammatically concordant when a singular noun pairs with an -s verb and a plural noun pairs with a non-s verb.',
      'Compound Subjects joined by "and" usually take a plural verb ("Python and Java are popular"). However, there are two critical exceptions: 1. Compound subjects expressing a single unified concept or dish take a SINGULAR verb (e.g., "Bread and butter is his staple breakfast"; "Slow and steady wins the race"; "Time and tide waits for none"). 2. When two singular nouns joined by "and" are preceded by "each" or "every", the verb is SINGULAR (e.g., "Every man and every woman was present").',
      'Collective Nouns (jury, committee, team, board, audience) demand careful semantic analysis. When the group acts as a single unanimous unit, use a singular verb ("The committee has finalized its report"). When members act individually or are divided in opinion, use a plural verb ("The committee are divided in their opinions"). Notice the accompanying pronoun changes from "its" to "their".',
      'Titles of books, movies, organizations, and subject names that end in "-s" (e.g., Mathematics, Physics, Economics, Gulliver’s Travels, The United States) are singular proper nouns and take SINGULAR verbs: "Mathematics is an essential discipline."',
      'Inverted Sentences: When sentences begin with "There is/are", "Here is/are", or locative adverbs ("Down the street walks/walk..."), the grammatical subject appears AFTER the verb. "There are three critical issues (plural subject)" vs "There is a single issue (singular subject)".'
    ],
    deepDiveAspects: [
      {
        title: '"A Number Of" vs "The Number Of"',
        content: '"A number of [plural noun]" means many and takes a PLURAL verb ("A number of students are absent"). "The number of [plural noun]" refers to the specific arithmetic count and takes a SINGULAR verb ("The number of applicants is increasing").'
      },
      {
        title: '"More than one" Rule',
        content: '"More than one [singular noun]" takes a SINGULAR verb ("More than one candidate was rejected"). However, "More than two/three" takes a PLURAL verb, and "More [plural nouns] than one" takes a PLURAL verb ("More candidates than one were rejected").'
      },
      {
        title: 'Measurements, Money, and Time',
        content: 'Quantities of distance, time, mass, or money considered as a single collective package take a singular verb ("Ten kilometers is a long walk"; "Fifty thousand rupees was spent"). But when thought of as individual separate units, they take plural verbs ("Five silver coins were distributed").'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Intervening Modifiers & Prepositional Traps',
      description: 'Identifying subject agreement across long descriptive adjective/prepositional clauses.',
      exampleSnippet: 'The quality of these mangoes (is / are) not satisfactory.'
    },
    {
      typeName: 'Type 2 — Additive Phrases vs Compound "And"',
      description: 'Distinguishing between subjects joined by "along with/as well as" (1st subject rule) vs "and".',
      exampleSnippet: 'The Prime Minister, together with his cabinet ministers, (has / have) arrived.'
    },
    {
      typeName: 'Type 3 — Correlative Conjunctions & Proximity Agreement',
      description: 'Applying nearest subject concord for "neither... nor", "either... or", and "not only... but also".',
      exampleSnippet: 'Neither the teacher nor the students (was / were) present.'
    },
    {
      typeName: 'Type 4 — Indefinite Pronouns and SANAM Quantifiers',
      description: 'Selecting correct verbs for "each of", "neither of", "all of", "none of".',
      exampleSnippet: 'Each of the shortlisted candidates (is / are) required to bring original documents.'
    },
    {
      typeName: 'Type 5 — Relative Clause Concord ("One of the X who...")',
      description: 'Determining verb agreement in restrictive relative clauses modifying plural antecedents.',
      exampleSnippet: 'He is one of those programmers who (writes / write) elegant code.'
    },
    {
      typeName: 'Type 6 — Inverted Sentences & "A number of / The number of"',
      description: 'Locating delayed subjects after dummy pronouns or fixed idiomatic quantifiers.',
      exampleSnippet: 'A number of anomalies in the system logs (has / have) been detected.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-grm-1',
      title: 'Intervening Prepositional Phrase Dissection',
      question: 'Spot the error in the sentence: "The introduction of tea, coffee and such other beverages have not been without some effect." (A) The introduction of / (B) tea, coffee and such other / (C) beverages have not been / (D) without some effect.',
      givenInfo: ['Full sentence with split segments (A), (B), (C), (D)'],
      conceptOrFormula: 'Subject Isolation: The head subject is "The introduction" (singular). The phrase "of tea, coffee and such other beverages" is an intervening prepositional modifier.',
      steps: [
        {
          stepNumber: 1,
          title: 'Isolate the grammatical subject',
          explanation: 'Prepositional phrase: "(of tea, coffee and such other beverages)". Head subject = "The introduction" (Singular noun).',
          math: 'Subject = The introduction (Singular)'
        },
        {
          stepNumber: 2,
          title: 'Check verb agreement',
          explanation: 'The verb used is "have not been" (Plural). A singular subject requires the singular auxiliary verb "has not been".',
          math: 'Singular subject "introduction" requires singular verb "has"'
        },
        {
          stepNumber: 3,
          title: 'Identify erroneous segment',
          explanation: 'Part (C) contains "beverages have not been", which must be corrected to "beverages has not been".',
          math: 'Error in Part (C)'
        }
      ],
      finalAnswer: 'Error in Part (C) (Replace "have" with "has")',
      whyItWorks: 'The verb must agree with the singular head noun "introduction", not with the plural noun "beverages" inside the prepositional phrase.',
      commonTrap: 'Looking at "beverages" immediately preceding the verb and assuming "have" is correct.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-grm-2',
      title: 'Additive Connector ("As Well As") Rule',
      question: 'Choose the grammatically correct option: (A) The CEO, as well as the board directors, have approved the budget. (B) The CEO, as well as the board directors, has approved the budget. (C) The CEO, as well as the board directors, are approving the budget. (D) The CEO, as well as the board directors, were approving the budget.',
      givenInfo: ['Four candidate sentences with "as well as" connector'],
      conceptOrFormula: 'Additive Connector Rule: When subjects are joined by "as well as", "along with", "together with", the verb agrees strictly with Subject 1 (The CEO = Singular).',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify Subject 1 and Subject 2',
          explanation: 'Subject 1 = "The CEO" (Singular). Subject 2 = "the board directors" (Plural). Connector = "as well as".',
          math: 'S1 = The CEO (Singular)'
        },
        {
          stepNumber: 2,
          title: 'Apply the First Subject Rule',
          explanation: 'The verb must agree with S1 ("The CEO"). Thus, the verb must be singular ("has approved").',
          math: 'Required verb = has approved (Singular)'
        }
      ],
      finalAnswer: 'Option (B)',
      whyItWorks: '"As well as" creates a parenthetical additive clause, leaving S1 as the sole governing grammatical subject.',
      commonTrap: 'Treating "as well as" like the conjunction "and" and using a plural verb.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-grm-3',
      title: 'Relative Pronoun Concord ("One of the...")',
      question: 'Identify the error: "Dr. Sharma is one of those eminent scientists who has contributed significantly to quantum computing research."',
      givenInfo: ['Sentence: "Dr. Sharma is one of those eminent scientists who has contributed..."'],
      conceptOrFormula: 'Rule: In the construction "one of the [Plural Noun] who/that [Verb]", the relative pronoun "who" refers to the plural antecedent "scientists". The verb inside the relative clause must be PLURAL ("have contributed").',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify the antecedent of the relative pronoun "who"',
          explanation: 'In "...one of those eminent scientists who...", "who" refers back to "eminent scientists" (plural antecedent).',
          math: 'Antecedent of "who" = scientists (Plural)'
        },
        {
          stepNumber: 2,
          title: 'Match the verb to the antecedent',
          explanation: 'Since "scientists" is plural, the relative clause verb must be plural: "have contributed" (NOT "has contributed").',
          math: 'scientists who have contributed'
        },
        {
          stepNumber: 3,
          title: 'Correct the sentence',
          explanation: '"Dr. Sharma is one of those eminent scientists who have contributed significantly to quantum computing research."',
          math: 'has -> have'
        }
      ],
      finalAnswer: 'Replace "has contributed" with "have contributed"',
      whyItWorks: 'Many scientists have contributed; Dr. Sharma is one of them. Therefore, the relative clause describes the group of scientists.',
      commonTrap: 'Making the verb agree with "Dr. Sharma" or "one", which produces the erroneous singular verb "has".',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-grm-4',
      title: 'Correlative Conjunction Proximity Concord',
      question: 'Fill in the blank: "Neither the system administrator nor the software engineers _____ able to resolve the database deadlock yesterday." (was / were)',
      givenInfo: ['Subjects: "system administrator" (singular), "software engineers" (plural)', 'Connector: "Neither... nor"'],
      conceptOrFormula: 'Proximity Rule: For "Neither... nor", the verb agrees with the subject closest to it (Subject 2 = "software engineers" = plural).',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify the nearest subject to the verb blank',
          explanation: 'Subject 1 = "the system administrator" (singular). Subject 2 = "the software engineers" (plural). The blank immediately follows Subject 2.',
          math: 'Nearest Subject = software engineers (Plural)'
        },
        {
          stepNumber: 2,
          title: 'Apply plural verb in past tense',
          explanation: 'Plural past tense verb for "software engineers" is "were".',
          math: 'Verb = were'
        }
      ],
      finalAnswer: 'were',
      whyItWorks: 'Correlative conjunctions link disjunctive subjects where grammatical proximity dictates concord.',
      commonTrap: 'Using "was" by attempting to agree with the first subject ("system administrator").',
      difficulty: 'Foundation'
    },
    {
      id: 'se-grm-5',
      title: '"A Number Of" vs "The Number Of"',
      question: 'Choose the correct verbs for both sentences: (1) A number of security vulnerabilities _____ (has/have) been patched. (2) The number of active user sessions _____ (is/are) remarkably high.',
      givenInfo: ['Sentence 1: "A number of..."', 'Sentence 2: "The number of..."'],
      conceptOrFormula: '"A number of" = Plural ("many") => Plural verb. "The number of" = Singular (the specific count) => Singular verb.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze Sentence 1',
          explanation: '"A number of security vulnerabilities" means multiple vulnerabilities => Requires plural verb "have".',
          math: 'Sentence 1 = have'
        },
        {
          stepNumber: 2,
          title: 'Analyze Sentence 2',
          explanation: '"The number of active user sessions" refers to the single numerical statistic => Requires singular verb "is".',
          math: 'Sentence 2 = is'
        }
      ],
      finalAnswer: 'Sentence 1: have; Sentence 2: is',
      whyItWorks: 'The indefinite article "A" indicates a plural collection, whereas the definite article "The" denotes a singular aggregate value.',
      commonTrap: 'Using singular for both or plural for both without noting the article difference.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-grm-6',
      title: 'Collective Noun Disagreement vs Unity',
      question: 'Select the correct sentence: (A) The jury was divided in their opinions regarding the verdict. (B) The jury were divided in their opinions regarding the verdict. (C) The jury is divided in their opinion regarding the verdict. (D) The jury was divided in its opinion regarding the verdict.',
      givenInfo: ['Collective noun "jury" with split opinions'],
      conceptOrFormula: 'Collective Noun Rule: When members of a collective noun act separately or are divided in opinion, the noun takes a PLURAL verb and PLURAL pronoun ("were divided in their opinions").',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze collective noun state',
          explanation: 'The jury members have conflicting opinions ("divided"). They are acting as distinct individuals, not a unified body.',
          math: 'State = Divided / Individual Mode => Plural'
        },
        {
          stepNumber: 2,
          title: 'Match verb and possessive pronoun',
          explanation: 'Requires plural verb "were" and plural pronoun "their": "The jury were divided in their opinions".',
          math: 'were divided in their opinions'
        }
      ],
      finalAnswer: 'Option (B)',
      whyItWorks: 'Divided action fractures collective unity, requiring plural agreement across both verbs and pronouns.',
      commonTrap: 'Selecting Option (A) which mixes singular verb "was" with plural pronoun "their".',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-grm-7',
      title: 'Indefinite Pronouns ("Each of...")',
      question: 'Correct the sentence: "Each of the participants in the coding hackathon were awarded a certificate of appreciation."',
      givenInfo: ['Sentence: "Each of the participants in the coding hackathon were awarded..."'],
      conceptOrFormula: '"Each" is strictly singular. The prepositional phrase "of the participants in the coding hackathon" modifies "Each" but does not alter its singular nature.',
      steps: [
        {
          stepNumber: 1,
          title: 'Isolate the subject',
          explanation: 'The subject is "Each" (Singular indefinite pronoun).',
          math: 'Subject = Each (Singular)'
        },
        {
          stepNumber: 2,
          title: 'Correct the verb',
          explanation: 'Replace plural auxiliary "were awarded" with singular auxiliary "was awarded".',
          math: 'were -> was'
        }
      ],
      finalAnswer: '"Each of the participants in the coding hackathon was awarded a certificate of appreciation."',
      whyItWorks: '"Each" considers entities individually one by one, mandating singular grammatical concord.',
      commonTrap: 'Matching the verb to the plural noun "participants".',
      difficulty: 'Foundation'
    },
    {
      id: 'se-grm-8',
      title: 'SANAM Uncountable vs Countable Concord',
      question: 'Fill in the blanks: (1) Two-thirds of the database _____ (was/were) corrupted by malware. (2) Two-thirds of the hard drives _____ (was/were) recovered successfully.',
      givenInfo: ['Sentence 1: "Two-thirds of the database..." (Uncountable)', 'Sentence 2: "Two-thirds of the hard drives..." (Countable plural)'],
      conceptOrFormula: 'Fraction Rule: Fraction + of + [Noun]. If Noun is uncountable/singular => Singular verb. If Noun is countable plural => Plural verb.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze Sentence 1',
          explanation: '"Database" is singular/uncountable here => Requires singular verb "was".',
          math: 'Sentence 1 = was'
        },
        {
          stepNumber: 2,
          title: 'Analyze Sentence 2',
          explanation: '"Hard drives" is a countable plural noun => Requires plural verb "were".',
          math: 'Sentence 2 = were'
        }
      ],
      finalAnswer: 'Sentence 1: was; Sentence 2: were',
      whyItWorks: 'Fractions borrow their grammatical number from the noun in the prepositional phrase.',
      commonTrap: 'Assuming all fractions always take plural verbs because the numerator "two" is greater than one.',
      difficulty: 'Intermediate'
    }
  ],
  alternativeMethods: {
    title: 'Dissecting Complex Sentences for Error Detection',
    methods: [
      {
        methodName: 'Subject Isolation (Stripping Method)',
        steps: [
          'Cross out all prepositional phrases (starting with of, in, with, at, by).',
          'Cross out parenthetical clauses (between commas).',
          'Read the bare Subject and Verb together: "The list [of candidate names] IS [not are] ready."'
        ],
        prosAndCons: 'Pros: 100% foolproof, prevents 95% of placement grammar traps. Cons: Requires identifying prepositional boundaries.',
        whenToUse: 'Universal method for all error detection questions.'
      },
      {
        methodName: 'Pronoun Replacement Test',
        steps: [
          'Replace the entire subject noun phrase with a simple pronoun (He/She/It for singular, They for plural).',
          'Example: "The CEO along with his managers" -> Replace with "HE" (NOT "They").',
          'Test: "He has arrived" (Correct) vs "He have arrived" (Obvious error).'
        ],
        prosAndCons: 'Pros: Makes errors immediately audible to intuitive English speakers. Cons: Must know which pronoun correctly represents additive phrases.',
        whenToUse: 'Best for rapid sentence correction elimination.'
      },
      {
        methodName: 'Proximity Triage for Correlatives',
        steps: [
          'Identify "either/or" or "neither/nor".',
          'Look only at the noun immediately before the verb.',
          'Match verb number directly to that single adjacent noun.'
        ],
        prosAndCons: 'Pros: Solves correlative questions in 3 seconds. Cons: Valid ONLY for disjunctive correlatives (or/nor), never for "and" or "as well as".',
        whenToUse: 'When "or" or "nor" is present.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Rapid Subject-Verb Error Detection Protocol',
    traditionalVsShortcut: {
      traditionalMethod: 'Reading the sentence repeatedly hoping the error "sounds wrong".',
      shortcutMethod: 'Locate the main verb, ask "Who/What is performing this action?", eliminate modifiers, and check singular/plural concord.',
      timeSavedPercent: '65% faster'
    },
    rulesForApplication: [
      'Prepositional phrases NEVER contain the grammatical subject.',
      'Words ending in "-one", "-body", "-thing", and "each" are ALWAYS singular.',
      'For "neither... nor", match the verb to the subject nearest to it.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Matching the verb to the noun inside the prepositional phrase.',
      whyItHappens: 'Proximity bias: picking the noun physically closest to the verb.',
      howToAvoid: 'Always locate the head noun before the first preposition: "The box (of chocolates) IS empty."'
    },
    {
      mistake: 'Treating "as well as" or "along with" as equal to "and".',
      whyItHappens: 'Assuming both mean addition in mathematical terms.',
      howToAvoid: 'Only "and" creates a compound plural subject. Additive phrases follow Subject 1.'
    },
    {
      mistake: 'Using a singular verb in "one of the [plural] who...".',
      whyItHappens: 'Focusing on "one" instead of the plural antecedent modifying "who".',
      howToAvoid: '"One of the students who HAVE" vs "The ONLY ONE of the students who HAS".'
    },
    {
      mistake: 'Treating titles of works ending in -s as plural.',
      whyItHappens: 'Seeing "-s" at the end of titles like "Gulliver\'s Travels".',
      howToAvoid: 'Proper names of single entities are always grammatically singular.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 30,
    eliminationTechnique: 'Strip away text inside commas and prepositional phrases. If the remaining Subject-Verb pair has number mismatch, eliminate that option immediately.',
    questionSelectionAdvice: 'Solve subject-verb agreement and error detection questions rapidly to bank time for Reading Comprehension passages.',
    recruiterInsight: 'TCS NQT and AMCAT heavily test "neither of the...", "one of the... who", and "along with" constructions in Verbal Ability.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-grm-e1',
        question: 'Identify the grammatically correct sentence:',
        options: [
          'The cost of all these essential commodities have increased rapidly.',
          'The cost of all these essential commodities has increased rapidly.',
          'The cost of all these essential commodities are increasing rapidly.',
          'The cost of all these essential commodities were increased rapidly.'
        ],
        correctAnswer: 'The cost of all these essential commodities has increased rapidly.',
        explanation: 'Head subject is "The cost" (singular). Prepositional phrase is "of all these essential commodities". Singular subject "cost" requires singular verb "has increased".',
        difficulty: 'Easy'
      },
      {
        id: 'pq-grm-e2',
        question: 'Fill in the blank: "Every student and every teacher _____ present at the annual convocation ceremony."',
        options: ['was', 'were', 'are', 'have been'],
        correctAnswer: 'was',
        explanation: 'When compound subjects joined by "and" are qualified by "every" or "each", the verb is strictly singular: "was".',
        difficulty: 'Easy'
      },
      {
        id: 'pq-grm-e3',
        question: 'Choose the correct verb: "Neither of the two candidate profiles _____ (suit / suits) the job requirements."',
        options: ['suits', 'suit', 'are suiting', 'have suited'],
        correctAnswer: 'suits',
        explanation: '"Neither of" is an indefinite pronoun taking a singular 3rd-person verb ending in -s: "suits".',
        difficulty: 'Easy'
      },
      {
        id: 'pq-grm-e4',
        question: 'Fill in the blank: "Bread and butter _____ his wholesome daily breakfast."',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: '"Bread and butter" forms a single unified culinary idea, functioning as a singular subject requiring "is".',
        difficulty: 'Easy'
      },
      {
        id: 'pq-grm-e5',
        question: 'Spot the error: "A pair of stylish leather shoes (A) / were purchased by him (B) / at the mall yesterday (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: '(B)',
        explanation: 'Head subject is "A pair" (singular), not "shoes". Part (B) must be corrected to "was purchased by him".',
        difficulty: 'Easy'
      },
      {
        id: 'pq-grm-e6',
        question: 'Fill in the blank: "Physics _____ always been my favorite academic subject in high school."',
        options: ['has', 'have', 'are', 'were'],
        correctAnswer: 'has',
        explanation: 'Academic disciplines ending in -s (Physics, Mathematics, Economics) are singular proper nouns requiring "has".',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-grm-i1',
        question: 'Spot the error: "The manager, along with his key team members, (A) / have meticulously reviewed (B) / the final quarterly financial report (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: '(B)',
        explanation: 'When subjects are joined by "along with", the verb agrees with Subject 1 ("The manager" = singular). Part (B) must be corrected from "have meticulously reviewed" to "has meticulously reviewed".',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-grm-i2',
        question: 'Choose the correct sentence:',
        options: [
          'Rohit is one of those players who has been selected for the national team.',
          'Rohit is one of those players who have been selected for the national team.',
          'Rohit is one of those player who have been selected for the national team.',
          'Rohit is one of those players which has been selected for the national team.'
        ],
        correctAnswer: 'Rohit is one of those players who have been selected for the national team.',
        explanation: 'In "one of those players who...", the relative pronoun "who" refers to the plural antecedent "players", requiring the plural verb "have been selected".',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-grm-i3',
        question: 'Fill in the blanks: "Either the project manager or his assistant engineers _____ (is/are) responsible for this deployment bug, and neither of them _____ (admit/admits) the mistake."',
        options: ['are, admits', 'is, admits', 'are, admit', 'is, admit'],
        correctAnswer: 'are, admits',
        explanation: 'Part 1: "Either... or" agrees with nearest subject "assistant engineers" (plural) => "are". Part 2: "neither of them" is singular => "admits". Pair is "are, admits".',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-grm-i4',
        question: 'Fill in the blank: "Ten thousand dollars _____ an exorbitant price to pay for that second-hand vehicle."',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: 'A specific sum of money considered as a single price/package takes a singular verb: "is".',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-grm-i5',
        question: 'Spot the error: "The committee has submitted (A) / their comprehensive recommendations (B) / to the board of directors (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: '(B)',
        explanation: 'In Part (A), the committee acts as a single unit ("has submitted"). Therefore, the possessive pronoun in Part (B) must be singular "its comprehensive recommendations", NOT "their".',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-grm-i6',
        question: 'Fill in the blank: "More than one candidate _____ disqualified during the preliminary document verification round."',
        options: ['was', 'were', 'are', 'have been'],
        correctAnswer: 'was',
        explanation: '"More than one" + singular noun takes a strictly singular verb: "was".',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-grm-a1',
        question: 'Choose the grammatically correct sentence:',
        options: [
          'This is the only one of his novels that are worth reading.',
          'This is the only one of his novels that is worth reading.',
          'This is one of his novels that is worth reading.',
          'These are the only one of his novels that is worth reading.'
        ],
        correctAnswer: 'This is the only one of his novels that is worth reading.',
        explanation: 'When preceded by "the only one of...", the relative pronoun refers strictly to "the only one" (singular), requiring the singular verb "is". (Contrast with "one of the novels that are...").',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-grm-a2',
        question: 'Spot the error: "Not only the principal (A) / but also the faculty members (B) / was in favor of (C) / postponing the semester examination (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: '(C)',
        explanation: 'For "not only... but also", the verb agrees with the nearest subject "faculty members" (plural). Part (C) must use plural verb "were in favor of", not "was".',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-grm-a3',
        question: 'Fill in the blank: "Three-fourths of the newly acquired land _____ still lying barren and uncultivated."',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: '"Land" is an uncountable singular mass noun. Fractional parts of uncountable nouns take singular verbs: "is".',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-grm-a4',
        question: 'Spot the error: "Many a student (A) / have failed to clear (B) / the rigorous technical aptitude cutoff (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: '(B)',
        explanation: 'The idiom "Many a [singular noun]" takes a singular verb. Part (B) must be corrected to "has failed to clear".',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-grm-a5',
        question: 'Select the sentence with impeccable subject-verb agreement:',
        options: [
          'Neither praise nor blame seem to affect his calm demeanor.',
          'Neither praise nor blame seems to affect his calm demeanor.',
          'Neither praise nor blame are affecting his calm demeanor.',
          'Neither praise nor blame were affecting his calm demeanor.'
        ],
        correctAnswer: 'Neither praise nor blame seems to affect his calm demeanor.',
        explanation: 'Both "praise" and "blame" are singular uncountable nouns. The nearest subject "blame" is singular, requiring the singular verb "seems".',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-grm-p1',
        question: 'In a corporate recruitment assessment, identify the sentence that contains NO grammatical errors:',
        options: [
          'The quality of research papers published by our department faculty have improved.',
          'The quality of research papers published by our department faculty has improved.',
          'The quality of research papers published by our department faculty are improving.',
          'The quality of research papers published by our department faculty were improved.'
        ],
        correctAnswer: 'The quality of research papers published by our department faculty has improved.',
        explanation: 'Subject is "The quality" (singular). The verb must be "has improved".',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-grm-p2',
        question: 'Fill in the blank: "The number of cloud infrastructure incidents reported this quarter _____ significantly lower than last year."',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: '"The number of..." denotes the singular aggregate count, requiring singular verb "is".',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-grm-p3',
        question: 'Spot the error: "Each of the software modules (A) / developed by the interns (B) / have passed the automated unit tests (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: '(C)',
        explanation: 'Subject is "Each" (singular). Part (C) must be "has passed", not "have passed".',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-grm-p4',
        question: 'Fill in the blank: "Neither the lead architect nor the backend developers _____ convinced by the proposed legacy migration timeline."',
        options: ['were', 'was', 'is', 'has been'],
        correctAnswer: 'were',
        explanation: 'Nearest subject to the verb is "backend developers" (plural) => "were".',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-grm-p5',
        question: 'Select the correct sentence:',
        options: [
          'The jury have reached a unanimous verdict.',
          'The jury has reached a unanimous verdict.',
          'The jury are reaching a unanimous verdict.',
          'The jury were reached a unanimous verdict.'
        ],
        correctAnswer: 'The jury has reached a unanimous verdict.',
        explanation: 'A "unanimous verdict" indicates the jury acted as a single unified body, requiring the singular verb "has reached".',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-grm-1',
      question: 'Identify the sentence with flawless subject-verb agreement:',
      options: [
        'The majority of the committee believes that the proposal should be accepted.',
        'The majority of the committee believe that the proposal should be accepted.',
        'The majority of the committee are believing that the proposal should be accepted.',
        'The majority of the committee have believed that the proposal should be accepted.'
      ],
      correctAnswer: 'The majority of the committee believes that the proposal should be accepted.',
      explanation: '"The majority of the committee" functioning as a collective entity takes singular verb "believes".',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-grm-2',
      question: 'Spot the error: "Gulliver’s Travels were written (A) / by Jonathan Swift (B) / as a satirical masterpiece (C) / No error (D)"',
      options: ['(A)', '(B)', '(C)', '(D)'],
      correctAnswer: '(A)',
      explanation: 'Gulliver’s Travels is the singular title of a single literary book. Part (A) must use singular verb "was written", not "were written".',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-grm-3',
      question: 'Fill in the blank: "A variety of pleasing items in the store _____ the curious shoppers."',
      options: ['attracts', 'attract', 'is attracting', 'was attracting'],
      correctAnswer: 'attracts',
      explanation: 'Head subject is "A variety" (singular) => requires singular verb "attracts". (Or "A variety of [plural noun]" taking plural "attract" if treated as "many items"). Grammatically, "A variety" takes singular "attracts".',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Singular Subject = Verb with -s (He writes); Plural Subject = Verb without -s (They write).',
      'Prepositional phrases between subject and verb NEVER change subject number.',
      'Additive phrases (as well as, along with, together with) follow Subject 1.',
      'Correlative conjunctions (either... or, neither... nor) follow the NEAREST subject.',
      'Indefinite pronouns (each, either, neither, everyone, nobody) are universally SINGULAR.',
      '"A number of" = Plural; "The number of" = Singular.',
      '"One of the [plural] who [PLURAL verb]"; "The only one of the [plural] that [SINGULAR verb]".'
    ],
    quickFormulas: [
      'S1 + as well as + S2 => Verb agrees with S1',
      'Either S1 or S2 => Verb agrees with S2',
      'One of the Plural + Who => Plural Verb',
      'The only one of the Plural + That => Singular Verb'
    ]
  },
  keyTakeaways: [
    'Always strip out prepositional phrases to expose the bare core Subject-Verb pair.',
    'Do not let proximity of plural nouns in prepositional phrases deceive your verb selection.',
    'Remember that collective nouns take singular verbs when unanimous and plural verbs when divided.',
    'Quantities of money, time, and distance representing single sums take singular verbs.',
    'Check whether the article is "A number of" (plural) or "The number of" (singular).'
  ],
  selfCheckQuestions: [
    'Can you identify why "The quality of the mangoes is good" is grammatically correct?',
    'Can you state the difference in verb agreement between "along with" and "and"?',
    'Can you apply the proximity rule to "neither... nor" sentences with mixed subject numbers?',
    'Can you explain why "one of the students who have" uses a plural verb?',
    'Can you differentiate between unified and divided collective nouns?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'High School English Grammar and Composition (Wren & Martin)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter on Subject-Verb Agreement, Syntax Concord, and Collective Noun Usages.'
    },
    {
      sourceName: 'TCS NQT Verbal Ability Assessment Blueprint',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Error detection in complex multi-clause sentences and modifier concord.'
    },
    {
      sourceName: 'Infosys Communicative English Competency Model',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Subject-Verb agreement, pronoun-antecedent references, and proximity rules.'
    }
  ]
};
