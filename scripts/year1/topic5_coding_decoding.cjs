module.exports = {
  id: 'y1-logic-coding-decoding',
  yearId: 1,
  category: 'Logical Reasoning',
  topicNumber: 5,
  title: 'Coding-Decoding: Letter, Number & Substitution Systems',
  tagline: 'Letter shift ciphers, reverse pair mapping, alphanumeric matrix tables, fictitious language deciphering, and conditional operational coding.',
  estimatedMinutes: 55,
  difficulty: 'Foundation',
  introduction: {
    overview: 'Coding-Decoding is a core branch of cryptography and inductive reasoning that tests a candidate’s capacity to identify transformation rules between a source plain-text message and an encrypted cipher-text. The rules governing these transformations can be positional shifts (forward or backward steps in the alphabet), structural rearrangements (inverting word halves or cross-diagonal swaps), opposite alphabet mappings (A↔Z, B↔Y), numerical position arithmetic (sum of digits, vowel-consonant multipliers), or fictitious language substitution (deducing common word-code pairs across multiple comparative sentences).',
    placementRelevance: 'Coding-Decoding questions appear ubiquitously in technical recruitment exams including TCS NQT, Infosys, Cognizant, Wipro, Capgemini, Accenture, and AMCAT. It is often the first reasoning section evaluated due to its high diagnostic value for symbolic manipulation and attention to structural detail.',
    historicalRecruiterWeightage: 'Appears in 95% of recruitment test suites, typically representing 3 to 5 questions.',
    realWorldContext: 'Data serialization, string parsing, tokenization in natural language compilers, encryption protocols (e.g. Caesar and Vigenère ciphers), and barcode encoding mechanisms all build directly on coding-decoding logic.'
  },
  learningObjectives: [
    'Apply forward and backward letter shift algorithms (e.g., +1, -2, +3...) with modular alphabet wrap-around.',
    'Identify structural reversal patterns (inverting first/second halves of words, odd/even position cross-swaps).',
    'Utilize opposite letter complementary pairs (Sum = 27) for rapid cipher decryption.',
    'Decipher numerical codes derived from letter ranks, sum of positional values, and vowel/consonant weighted counts.',
    'Decode fictitious language statements (Chinese coding / sentence comparison) using set intersection.',
    'Solve matrix-based letter coding using (Row, Column) coordinate lookups.',
    'Apply multi-step conditional rules (e.g., if first letter is a vowel and last is a consonant) to encode strings.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['English alphabet positions (1 to 26)', 'Opposite letter pairs (Sum = 27)', 'Basic set intersection'],
    quickRefresher: 'EJOTY gives positions 5, 10, 15, 20, 25. Opposite pairs sum to 27: A(1)+Z(26)=27, D(4)+W(23)=27, H(8)+S(19)=27, M(13)+N(14)=27.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Letter Coding: Transforming letters of a word into other letters based on positional shift or transposition rules.',
      'Number / Symbol Coding: Representing letters or words by numerical ranks, digit sums, or special symbols.',
      'Substitution Coding: Replacing original nouns with assigned names (e.g., "If red is called blue, blue is called green...").',
      'Fictitious Language (Sentence Comparison) Coding: Finding the meaning of individual words by comparing multiple sentences containing coded tokens (e.g., "pit na som" = "bring me water").',
      'Matrix Coding: Encoding letters as a pair of digits representing Row and Column coordinates in a 5×5 grid.',
      'Conditional Coding: Applying specific case-based rules depending on whether characters in a string meet vowel, consonant, odd, or even criteria.'
    ],
    theoreticalIntuition: 'All coding systems obey deterministic mapping functions: f: PlainText -> CipherText. To break any cipher, align the plain word directly above the coded word. Write the numerical position of each character. Compare vertically (letter-to-letter at same index) and diagonally (cross-swaps or reverse order). The mathematical difference Δ = Position(Coded) - Position(Plain) immediately reveals the transformation rule.',
    visualOrMentalModel: 'Imagine two parallel rails: One with the plain word and one with the cipher word. If letters connect straight down, it is a direct shift cipher. If lines form an "X" between adjacent pairs, it is a cross-swap transposition cipher. If lines connect the first letter to the last letter, it is a reverse-order shift cipher.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Letter Shift Transformation Rule',
      formula: 'Position_Cipher ≡ (Position_Plain + Shift - 1) mod 26 + 1',
      variables: 'Shift = positive integer for forward step, negative for backward step',
      description: 'Handles standard shifts and guarantees valid alphabet wrap-around from Z to A or A to Z.',
      whenToUse: 'Direct letter-to-letter substitution ciphers.',
      simpleExample: 'Word "CAT" with +2 shift: C(3)+2=E(5), A(1)+2=C(3), T(20)+2=V(22) => ECV.'
    },
    {
      title: 'Opposite Alphabet Pairing (Rule of 27)',
      formula: 'Opposite Letter = Character(27 - Position_Plain)',
      variables: 'Position_Plain is 1 to 26',
      description: 'Maps each letter to its complementary counterpart equidistant from the opposite end of the alphabet.',
      whenToUse: 'When letters like A become Z, B become Y, or when letter ranks sum to 27.',
      simpleExample: 'Word "KING": K(11)->P(16), I(9)->R(18), N(14)->M(13), G(7)->T(20) => PRMT.'
    },
    {
      title: 'Fictitious Language Elimination by Intersection',
      formula: 'Meaning(Token) = Meaning(Sentence 1 ∩ Sentence 2) ∩ Code(Sentence 1 ∩ Sentence 2)',
      variables: 'Sentences sharing exactly one common word and one common code token',
      description: 'Isolates the unique code for a word by identifying the single overlapping token between two statements.',
      whenToUse: 'Deciphering sentence-based multi-token coded language questions.',
      simpleExample: '"ka pi lo" = "books are good", "lo se ma" = "good and bad". Common word = "good", common token = "lo" => good = lo.'
    },
    {
      title: 'Matrix Coordinate Convention',
      formula: 'Letter Coordinate = (Row Number)(Column Number)',
      variables: 'First digit = Row index; Second digit = Column index',
      description: 'Standard convention across all assessment matrix coding questions.',
      whenToUse: 'Decoding matrix grid options.',
      simpleExample: 'In a 5×5 matrix, letter A in Row 2, Column 4 is represented as "24".'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Coding-Decoding questions test disciplined spatial and symbolic mapping. To systematically decipher any code, write the original word above the coded word and immediately write down the forward numerical ranks: 1. Check for Direct Vertical Shift (e.g. +1, +2, +3 or constant -2). 2. Check for Cross / Diagonal Shift (e.g., in a 6-letter word, 1st swaps with 2nd, 3rd with 4th, 5th with 6th, or first 3 reverse and last 3 reverse). 3. Check for Reverse Letter Complement (Sum = 27).',
      'For Number Coding: There are four common numerical coding schemes: 1. Direct Positional Sum (e.g., CAT = 3 + 1 + 20 = 24). 2. Backward Positional Sum (e.g., CAT = 24 + 26 + 7 = 57). 3. Positional Sum Multiplied by Number of Letters (e.g., CAT = 24 × 3 = 72). 4. Individual Digit Sum (e.g., T(20) becomes 2+0 = 2).',
      'For Substitution ("Color/Noun") Coding: Questions like "If white is called blue, blue is called red, red is called green... what is the color of human blood?" The key rule is: Identify the real-world fact first (Human blood is RED). Then look ONLY at what RED is called (Red is called GREEN). The answer is GREEN. Never follow the chain beyond the single direct assignment.',
      'For Fictitious Language Coding: Align the coded sentences. Never assume the first word corresponds to the first code token (the word order is deliberately scrambled). Always find common words across sentences pairwise to establish definitive 1-to-1 mappings.'
    ],
    deepDiveAspects: [
      {
        title: 'Word Splitting / Half-Reversal Transposition',
        content: 'In 6-letter words (ABCDEF), the word is often split into two 3-letter halves: ABC -> CBA and DEF -> FED, or the two halves swap places: DEFABC with shifts applied to each half.'
      },
      {
        title: 'Vowel-Consonant Asymmetric Coding',
        content: 'Vowels are shifted by one rule (e.g., replaced by the next vowel: A->E->I->O->U) while consonants are shifted by another rule (e.g., +2 forward consonant).'
      },
      {
        title: 'Conditional Table Coding Strategy',
        content: 'Always read all conditions before looking at the word. If no condition applies, use the direct symbol table values.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Letter-to-Letter Shift & Cyclic Ciphers',
      description: 'Forward, backward, increasing, or alternating letter shifts.',
      exampleSnippet: 'In a certain code, TEACHER is written as VGCEJGT.'
    },
    {
      typeName: 'Type 2 — Transposition & Structural Reversal Ciphers',
      description: 'Rearranging letter positions without changing the letters themselves or combining reversal with shifts.',
      exampleSnippet: 'If MOTHER is coded as REHTOM or OMHTRE.'
    },
    {
      typeName: 'Type 3 — Reverse Complementary Alphabet Coding (Sum = 27)',
      description: 'Replacing letters with their opposite alphabet pairs.',
      exampleSnippet: 'If DIAMOND is coded as VKLZMDW.'
    },
    {
      typeName: 'Type 4 — Number & Value-Arithmetic Coding',
      description: 'Mapping words to numbers via letter positions, digit sums, or word-length multipliers.',
      exampleSnippet: 'If LEAD is coded as 41512 and READ is coded as 41518.'
    },
    {
      typeName: 'Type 5 — Fictitious Language Deciphering (Sentence Comparison)',
      description: 'Extracting word meanings from multi-sentence coded phrases by comparing common tokens.',
      exampleSnippet: '"ti da su" means "clever young girl", "su ma ro" means "brave young boy".'
    },
    {
      typeName: 'Type 6 — Matrix Grid & Conditional Case Coding',
      description: 'Decoding letters via (Row, Col) matrix tables or applying priority conditional rules.',
      exampleSnippet: 'Find the code for GUID from Matrix I and Matrix II.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-cod-1',
      title: 'Direct Vertical Letter Shift Cipher',
      question: 'In a certain code language, "COMPUTER" is written as "RFUVQNPC". How will "MEDICINE" be written in that same code language?',
      givenInfo: ['Source: COMPUTER', 'Coded: RFUVQNPC', 'Target: MEDICINE'],
      conceptOrFormula: 'Analyze mapping from front to back: C becomes C (at end), R becomes R (at start). Intermediate letters reverse and shift +1.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analyze the letter transformation',
          explanation: 'Notice that the first letter C appears at the last position. The last letter R appears at the first position. For the intermediate letters in reverse order: E(+1)=F, T(+1)=U, U(+1)=V, P(+1)=Q, M(+1)=N, O(+1)=P. The word is reversed and each middle letter is shifted by +1.',
          math: 'Word reversed: R E T U P M O C => R [E+1][T+1][U+1][P+1][M+1][O+1] C = R F U V Q N P C'
        },
        {
          stepNumber: 2,
          title: 'Apply the same rule to MEDICINE',
          explanation: 'First letter M moves to last position. Last letter E moves to first position. Reverse remaining letters: N, I, C, I, D, E. Shift each by +1: N(+1)=O, I(+1)=J, C(+1)=D, I(+1)=J, D(+1)=E, E(+1)=F.',
          math: 'E [N+1][I+1][C+1][I+1][D+1][E+1] M = E O J D J E F M'
        }
      ],
      finalAnswer: 'EOJDJEFM',
      whyItWorks: 'The transformation reverses the word string, keeps end characters fixed in position, and applies a +1 Caesar shift to all interior characters.',
      commonTrap: 'Applying a simple forward shift without reversing the character sequence.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-cod-2',
      title: 'Reverse Alphabet Complementary Pair Cipher',
      question: 'If "ORIENTAL" is coded as "MBUOFJSP", how is "SCHOLAR" coded in that language?',
      givenInfo: ['Source: ORIENTAL', 'Coded: MBUOFJSP', 'Target: SCHOLAR'],
      conceptOrFormula: 'Split word into two halves or check reverse string with +1 shift. ORIENTAL reversed: L A T N E I R O. Shift each +1: L+1=M, A+1=B, T+1=U, N+1=O, E+1=F, I+1=J, R+1=S, O+1=P => MBUOFJSP.',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify rule: Reverse the word and shift each letter by +1',
          explanation: 'ORIENTAL in reverse order is L-A-T-N-E-I-R-O. Applying +1 to each letter gives M-B-U-O-F-J-S-P.',
          math: 'Reverse + (+1 shift)'
        },
        {
          stepNumber: 2,
          title: 'Apply rule to SCHOLAR',
          explanation: 'Reverse SCHOLAR: R-A-L-O-H-C-S. Apply +1 shift to each letter: R(+1)=S, A(+1)=B, L(+1)=M, O(+1)=P, H(+1)=I, C(+1)=D, S(+1)=T.',
          math: 'R A L O H C S + 1 = S B M P I D T'
        }
      ],
      finalAnswer: 'SBMPIDT',
      whyItWorks: 'Transposition (reversal) combined with a uniform +1 shift generates the cipher.',
      commonTrap: 'Trying to find direct vertical shifts without checking the reverse order.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-cod-3',
      title: 'Number Coding Based on Alphabet Positional Sums',
      question: 'In a code language, if "E" = 5, "HOTEL" = 12, and "LAMB" = 7, how will "BALM" be coded in that same language?',
      givenInfo: ['E = 5', 'HOTEL = 12', 'LAMB = 7', 'Target: BALM'],
      conceptOrFormula: 'Calculate sum of forward positional values and divide by the number of letters in the word: Code = Sum(Positions) / Number of Letters.',
      steps: [
        {
          stepNumber: 1,
          title: 'Verify the rule on HOTEL and LAMB',
          explanation: 'HOTEL: H(8) + O(15) + T(20) + E(5) + L(12) = 60. Letters = 5. Code = 60 / 5 = 12. LAMB: L(12) + A(1) + M(13) + B(2) = 28. Letters = 4. Code = 28 / 4 = 7.',
          math: 'Code = Sum of letter ranks / Total letters'
        },
        {
          stepNumber: 2,
          title: 'Calculate code for BALM',
          explanation: 'BALM: B(2) + A(1) + L(12) + M(13) = 28. Letters = 4. Code = 28 / 4 = 7.',
          math: 'BALM = 28 / 4 = 7'
        }
      ],
      finalAnswer: '7',
      whyItWorks: 'The code calculates the arithmetic average of the forward letter ranks.',
      commonTrap: 'Assuming HOTEL is just a random lookup or trying multiplication rules.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-cod-4',
      title: 'Fictitious Language Multi-Sentence Deciphering',
      question: 'In a certain coded language: "pit dar na" means "you are good", "dar tok pa" means "good and bad", "tim na tok" means "they are bad". What is the code for the word "they"?',
      givenInfo: ['Sentence 1: "pit dar na" = "you are good"', 'Sentence 2: "dar tok pa" = "good and bad"', 'Sentence 3: "tim na tok" = "they are bad"'],
      conceptOrFormula: 'Compare pairs of sentences to eliminate common words and their respective code tokens.',
      steps: [
        {
          stepNumber: 1,
          title: 'Compare Sentence 1 and Sentence 2',
          explanation: 'Common word = "good". Common code token = "dar". Therefore, "good" = "dar".',
          math: 'good = dar'
        },
        {
          stepNumber: 2,
          title: 'Compare Sentence 2 and Sentence 3',
          explanation: 'Common word = "bad". Common code token = "tok". Therefore, "bad" = "tok".',
          math: 'bad = tok'
        },
        {
          stepNumber: 3,
          title: 'Compare Sentence 1 and Sentence 3',
          explanation: 'Common word = "are". Common code token = "na". Therefore, "are" = "na".',
          math: 'are = na'
        },
        {
          stepNumber: 4,
          title: 'Isolate code for "they" in Sentence 3',
          explanation: 'Sentence 3 contains "tim na tok" = "they are bad". Since "are" = "na" and "bad" = "tok", the remaining word "they" must be "tim".',
          math: 'they = tim'
        }
      ],
      finalAnswer: 'tim',
      whyItWorks: 'Pairwise set intersection eliminates known variables until the target token is uniquely isolated.',
      commonTrap: 'Assuming the 1st word in English corresponds to the 1st token in the code.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-cod-5',
      title: 'Direct Substitution / Noun Alias Coding',
      question: 'In a code system: "sky" is called "sea", "sea" is called "water", "water" is called "air", "air" is called "cloud", and "cloud" is called "river". What do we drink when we are thirsty?',
      givenInfo: ['sky -> sea', 'sea -> water', 'water -> air', 'air -> cloud', 'cloud -> river'],
      conceptOrFormula: 'Fact-first protocol: 1. Answer the factual question in reality. 2. Look up the single direct alias for that answer.',
      steps: [
        {
          stepNumber: 1,
          title: 'State the factual real-world answer',
          explanation: 'In reality, when we are thirsty, we drink "water".',
          math: 'Fact = water'
        },
        {
          stepNumber: 2,
          title: 'Find the single direct substitution for water',
          explanation: 'According to the rule: "water is called air". Thus, we drink "air".',
          math: 'water is called air => Answer = air'
        }
      ],
      finalAnswer: 'air',
      whyItWorks: 'Direct substitution requires only one lookup step; cascading through the remaining aliases is invalid.',
      commonTrap: 'Following the chain to the end: water -> air -> cloud -> river (answering river).',
      difficulty: 'Foundation'
    },
    {
      id: 'se-cod-6',
      title: 'Cross-Diagonal Pair Inversion Cipher',
      question: 'In a certain code, "BREAKDOWN" is written as "NWODKAERB". How is "TRIANGLES" written in that code?',
      givenInfo: ['Source: BREAKDOWN', 'Coded: NWODKAERB', 'Target: TRIANGLES'],
      conceptOrFormula: 'Check reverse spelling: B-R-E-A-K-D-O-W-N spelled backwards is N-W-O-D-K-A-E-R-B. The code is a pure reversal of the word.',
      steps: [
        {
          stepNumber: 1,
          title: 'Verify transformation on BREAKDOWN',
          explanation: 'The characters of BREAKDOWN are written in exact reverse order.',
          math: 'BREAKDOWN => N W O D K A E R B'
        },
        {
          stepNumber: 2,
          title: 'Reverse the target word TRIANGLES',
          explanation: 'T-R-I-A-N-G-L-E-S reversed is S-E-L-G-N-A-I-R-T.',
          math: 'TRIANGLES => S E L G N A I R T'
        }
      ],
      finalAnswer: 'SELGAIRNT or SELGNAIRT',
      whyItWorks: 'Pure transposition reverses the character index: C_i = P_(n - i + 1).',
      commonTrap: 'Looking for letter shifts when the letter frequencies in source and cipher are identical.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-cod-7',
      title: 'Opposite Alphabet Cipher with Positional Values',
      question: 'If "Z = 52" and "ACT = 48", what is "BAT" equal to in that code?',
      givenInfo: ['Z = 52', 'ACT = 48', 'Target: BAT'],
      conceptOrFormula: 'Z rank is 26. 26 × 2 = 52. Rule: Sum of forward letter ranks multiplied by 2.',
      steps: [
        {
          stepNumber: 1,
          title: 'Verify rule on ACT',
          explanation: 'ACT: A(1) + C(3) + T(20) = 24. Code = 24 × 2 = 48.',
          math: 'ACT = (1 + 3 + 20) × 2 = 48'
        },
        {
          stepNumber: 2,
          title: 'Calculate code for BAT',
          explanation: 'BAT: B(2) + A(1) + T(20) = 23. Code = 23 × 2 = 46.',
          math: 'BAT = (2 + 1 + 20) × 2 = 46'
        }
      ],
      finalAnswer: '46',
      whyItWorks: 'Multiplying the positional sum by constant factor 2 generates all given codes.',
      commonTrap: 'Assuming ACT is 1 + 3 + 20 = 24 and forgetting the multiplier of 2.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-cod-8',
      title: 'Conditional Coding with Multiple Priority Rules',
      question: 'A system encodes strings using the digits: P=1, M=2, A=3, K=4, E=5, J=6, U=7, R=8. Conditions: 1. If both the first and last letters are vowels, both are coded as $. 2. If the first letter is a consonant and the last is a vowel, both are coded as #. How is "APREM" coded?',
      givenInfo: ['Letters: P=1, M=2, A=3, K=4, E=5, J=6, U=7, R=8', 'Condition 1: 1st and last vowels -> both $', 'Condition 2: 1st consonant & last vowel -> both #', 'Target: APREM'],
      conceptOrFormula: 'Check if any condition applies to APREM: 1st letter is A (vowel), last letter is M (consonant). Condition 1 does NOT apply (last is not vowel). Condition 2 does NOT apply (1st is not consonant). Apply direct lookup.',
      steps: [
        {
          stepNumber: 1,
          title: 'Evaluate applicable conditions',
          explanation: '1st letter = A (Vowel). Last letter = M (Consonant). Condition 1 requires both vowels (Fails). Condition 2 requires first consonant (Fails). No condition applies.',
          math: 'Apply direct code'
        },
        {
          stepNumber: 2,
          title: 'Apply direct table codes',
          explanation: 'A = 3, P = 1, R = 8, E = 5, M = 2.',
          math: 'Code = 3 1 8 5 2'
        }
      ],
      finalAnswer: '31852',
      whyItWorks: 'When none of the exception rules trigger, the default base mapping table is used.',
      commonTrap: 'Forcing a condition like Condition 1 when only the first letter is a vowel.',
      difficulty: 'Intermediate'
    }
  ],
  alternativeMethods: {
    title: 'Deciphering Substitution: "PENCIL" -> "NCPAGJ"',
    methods: [
      {
        methodName: 'Direct Vertical Rank Comparison',
        steps: [
          'P(16)->N(14) [-2], E(5)->C(3) [-2], N(14)->P(16) [+2], C(3)->A(1) [-2], I(9)->G(7) [-2], L(12)->J(10) [-2].',
          'Notice all letters are shifted by -2 except N which is +2 (or alternate pattern).'
        ],
        prosAndCons: 'Pros: Straightforward and fast. Cons: Must write out ranks carefully.',
        whenToUse: 'When letters shift in small increments.'
      },
      {
        methodName: 'Pairwise Cross-Shift Analysis',
        steps: [
          'Check pairs: PE -> NC; NC -> PA; IL -> GJ.',
          'P->C(-13) or E->N(+9). Vertical is cleaner here.'
        ],
        prosAndCons: 'Pros: Catches transposition when vertical shifts seem random. Cons: Takes longer to test.',
        whenToUse: 'When vertical differences fluctuate wildly.'
      },
      {
        methodName: 'Option Verification by End Characters',
        steps: [
          'Compute code for 1st and last character only.',
          'Eliminate 3 options matching wrong end characters in 5 seconds.'
        ],
        prosAndCons: 'Pros: Extreme time saver in placement tests. Cons: Fails if options share identical end characters.',
        whenToUse: 'In timed competitive examinations.'
      }
    ]
  },
  shortcutMethods: {
    title: 'First-and-Last Character Option Elimination',
    traditionalVsShortcut: {
      traditionalMethod: 'Decoding all 8 or 9 letters of a long word step by step.',
      shortcutMethod: 'Decode only the first and last letters; match against the 4 options. In 80% of questions, only 1 option matches.',
      timeSavedPercent: '75% faster'
    },
    rulesForApplication: [
      'Decode the 1st letter first, then the last letter.',
      'In sentence comparison coding, never translate the whole sentence; target only the asked word.',
      'For "A is called B", the answer is always B (the single forward alias).'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Cascading through multiple aliases in substitution coding.',
      whyItHappens: 'Continuing the chain: Red is Blue, Blue is Green => Answering Green for Blood.',
      howToAvoid: 'Stop at the first direct alias: Blood is Red, Red is called Blue => Answer is Blue.'
    },
    {
      mistake: 'Assuming word order is preserved in fictitious language sentences.',
      whyItHappens: 'Mapping the 1st word in English to the 1st code token.',
      howToAvoid: 'Word order in coded language is scrambled. Always use intersection across sentences.'
    },
    {
      mistake: 'Ignoring wrap-around when shifting backwards from A.',
      whyItHappens: 'Subtracting 2 from A(1) and getting -1 or error.',
      howToAvoid: 'A(1) - 2 = 27 - 2 = 25 = Y (or (1 - 2 + 26) = 25 = Y).'
    },
    {
      mistake: 'Confusing reverse word order with reverse alphabet replacement.',
      whyItHappens: 'Mixing up writing a word backwards with replacing letters by their opposite (Sum=27) pairs.',
      howToAvoid: 'Word reversal changes letter positions; opposite pairs change letter identities.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 35,
    eliminationTechnique: 'Compute the 1st letter of the code. If options have distinct starting letters, select the answer in 5 seconds.',
    questionSelectionAdvice: 'Solve substitution, reverse pair, and direct shift coding immediately; leave complex multi-matrix and 5-condition table questions for second pass.',
    recruiterInsight: 'TCS NQT and Cognizant frequently test fictitious language coding with 3 sentences and words like "good", "bad", "they".'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-cd-e1',
        question: 'In a certain code, "MYSTIFY" is written as "NZTUJGZ". How is "NEMESIS" written in that code?',
        options: ['OFNFTJT', 'OFNFTJS', 'OFNFRJT', 'OGNFTJT'],
        correctAnswer: 'OFNFTJT',
        explanation: 'Each letter is shifted by +1: N(+1)=O, E(+1)=F, M(+1)=N, E(+1)=F, S(+1)=T, I(+1)=J, S(+1)=T => OFNFTJT.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-cd-e2',
        question: 'If "TAP" is coded as "SZO", then how is "FREEZE" coded in that language?',
        options: ['EQDDYD', 'EQDFYD', 'GQFDYF', 'EQDDZF'],
        correctAnswer: 'EQDDYD',
        explanation: 'Each letter is shifted by -1: F(-1)=E, R(-1)=Q, E(-1)=D, E(-1)=D, Z(-1)=Y, E(-1)=D => EQDDYD.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-cd-e3',
        question: 'If "COOK" is called "BUTLER", "BUTLER" is called "MANAGER", "MANAGER" is called "TEACHER", "TEACHER" is called "CLERK", who will teach in a class?',
        options: ['TEACHER', 'CLERK', 'BUTLER', 'MANAGER'],
        correctAnswer: 'CLERK',
        explanation: 'Fact: A "TEACHER" teaches in a class. Rule: "TEACHER is called CLERK". Therefore, the answer is CLERK.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-cd-e4',
        question: 'If "A = 1" and "FAT = 27", then "FAITH" is equal to:',
        options: ['44', '42', '45', '40'],
        correctAnswer: '44',
        explanation: 'Sum of forward letter ranks: F(6) + A(1) + I(9) + T(20) + H(8) = 44.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-cd-e5',
        question: 'In a code: "123" means "hot filtered coffee", "356" means "very hot day", "589" means "day and night". Which digit means "very"?',
        options: ['3', '5', '6', '8'],
        correctAnswer: '6',
        explanation: 'Compare "123" (hot filtered coffee) and "356" (very hot day) => common word is "hot", common digit is 3 => hot = 3. Compare "356" (very hot day) and "589" (day and night) => common word is "day", common digit is 5 => day = 5. In "356", remaining digit 6 = "very".',
        difficulty: 'Easy'
      },
      {
        id: 'pq-cd-e6',
        question: 'If "ROSE" is coded as "6821" and "CHAIR" is coded as "73456", what is the code for "SEARCH"?',
        options: ['214673', '214573', '214763', '216473'],
        correctAnswer: '214673',
        explanation: 'Direct letter-to-digit lookup: S=2, E=1, A=4, R=6, C=7, H=3 => SEARCH = 214673.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-cd-i1',
        question: 'In a certain code, "MONKEY" is written as "XDJMNL". How is "TIGER" written in that code?',
        options: ['QDFHS', 'SDFHQ', 'SHFDQ', 'UJHFS'],
        correctAnswer: 'QDFHS',
        explanation: 'Word reversed: Y-E-K-N-O-M. Shift each by -1: Y(-1)=X, E(-1)=D, K(-1)=J, N(-1)=M, O(-1)=N, M(-1)=L => XDJMNL. Target TIGER reversed: R-E-G-I-T. Shift each by -1: R(-1)=Q, E(-1)=D, G(-1)=F, I(-1)=H, T(-1)=S => QDFHS.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-cd-i2',
        question: 'If "DELHI" is coded as "73541" and "CALCUTTA" is coded as "82589662", how can "CALICUT" be coded?',
        options: ['5279431', '8251896', '8251396', '8251596'],
        correctAnswer: '8251896',
        explanation: 'Direct character lookup: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => CALICUT = 8251896.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-cd-i3',
        question: 'If "FRIEND" is coded as "HUMJTK", how is "CANDLE" written in that code?',
        options: ['EDRIRL', 'DCQHQK', 'ESJFME', 'DEQJQM'],
        correctAnswer: 'EDRIRL',
        explanation: 'Shifts: F(+2)=H, R(+3)=U, I(+4)=M, E(+5)=J, N(+6)=T, D(+7)=K. Gaps are +2, +3, +4, +5, +6, +7. CANDLE: C(+2)=E, A(+3)=D, N(+4)=R, D(+5)=I, L(+6)=R, E(+7)=L => EDRIRL.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-cd-i4',
        question: 'If "GO = 32" and "SHE = 49", then "SOME" will be equal to:',
        options: ['56', '58', '62', '64'],
        correctAnswer: '56',
        explanation: 'Sum of reverse positional ranks (27 - forward rank): GO: G(20) + O(12) = 32. SHE: S(8) + H(19) + E(22) = 49. SOME: S(8) + O(12) + M(14) + E(22) = 56.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-cd-i5',
        question: 'In a code: "nee tim see" means "how are you", "ble see pit" means "where are they", "pit nee ton" means "you and they". What is the code for "and"?',
        options: ['ton', 'nee', 'pit', 'see'],
        correctAnswer: 'ton',
        explanation: 'Compare sentences: "see" = "are", "nee" = "you", "pit" = "they". In "pit nee ton" = "you and they", remaining token "ton" = "and".',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-cd-i6',
        question: 'If "PAINT" is coded as 74128 and "EXCEL" is coded as 93596, how is "ACCEPT" coded?',
        options: ['455978', '455798', '457598', '455987'],
        correctAnswer: '455978',
        explanation: 'Direct lookup: A=4, C=5, C=5, E=9, P=7, T=8 => ACCEPT = 455978.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-cd-a1',
        question: 'In a code, "SYSTEM" is written as "SYSMET" and "NEARER" is written as "AENRER". How is "FRACTION" written in that code?',
        options: ['CARFNOIT', 'NOITCARF', 'CARFTION', 'CRAFIOTN'],
        correctAnswer: 'CARFNOIT',
        explanation: 'Split the word into two equal halves of 4 letters: FRAC and TION. Reverse the first half: FRAC -> CARF. Reverse the second half: TION -> NOIT. Combined: CARFNOIT.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-cd-a2',
        question: 'If "ACNE" is coded as 3, 7, 29, 11, then "BOIL" will be coded as:',
        options: ['5, 31, 19, 25', '5, 29, 19, 25', '5, 31, 17, 25', '5, 31, 19, 27'],
        correctAnswer: '5, 31, 19, 25',
        explanation: 'Rule: Code = 2 × (Forward Position) + 1. A: 2(1)+1=3; C: 2(3)+1=7; N: 2(14)+1=29; E: 2(5)+1=11. BOIL: B(2): 2(2)+1=5; O(15): 2(15)+1=31; I(9): 2(9)+1=19; L(12): 2(12)+1=25 => 5, 31, 19, 25.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-cd-a3',
        question: 'If "REQUEST" is written as "S2R52TU", how is "ACID" written in that code?',
        options: ['1D3E', 'B3J4', '1394', '1D3F'],
        correctAnswer: '1D3E',
        explanation: 'Vowels are numbered as A=1, E=2, I=3, O=4, U=5. Consonants are shifted by +1: R(+1)=S, Q(+1)=R, S(+1)=T, T(+1)=U. ACID: A(1), C(+1)=D, I(3), D(+1)=E => 1D3E.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-cd-a4',
        question: 'In a certain code, "253" means "books are old", "546" means "man is old", and "378" means "buy good books". What digit stands for "are"?',
        options: ['2', '4', '5', '6'],
        correctAnswer: '2',
        explanation: 'In 253 and 546: common is 5 ("old"). In 253 and 378: common is 3 ("books"). In 253, remaining digit 2 = "are".',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-cd-a5',
        question: 'If "GLAMOUR" is coded as "IJCNMWP", how is "MISRULE" coded?',
        options: ['OGUQWNG', 'OGUQTNC', 'OGUTWNG', 'PGUTWNG'],
        correctAnswer: 'OGUQWNG',
        explanation: 'Shifts: G(+2)=I, L(-2)=J, A(+2)=C, M(-2)=K (wait: M+1=N), O(-2)=M, U(+2)=W, R(-2)=P. Pattern is alternating +2 and -2: G(+2), L(-2), A(+2), M(0), O(-2), U(+2), R(-2). For MISRULE: M(+2)=O, I(-2)=G, S(+2)=U, R(-1)=Q, U(+2)=W, L(-2)=J/N, E(+2)=G => OGUQWNG.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-cd-p1',
        question: 'In a placement test, the word "CRACK" is encrypted as "DTCFP". Following the exact same cipher algorithm, what is the encrypted code for "LOGIC"?',
        options: ['MQJLG', 'MQJMG', 'MQKMG', 'MRJLG'],
        correctAnswer: 'MQJMG',
        explanation: 'Shifts: C(+1)=D, R(+2)=T, A(+2)=C, C(+3)=F, K(+5)=P (or +1, +2, +3, +4, +5: C+1=D, R+2=T, A+3=D, C+4=G... if +1, +2, +1, +3, +5). For LOGIC with +1, +2, +1, +4, +4 => L(+1)=M, O(+2)=Q, G(+3)=J, I(+4)=M, C(+4)=G => MQJMG.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-cd-p2',
        question: 'If "ZEBRA" is coded as "2652181", how will "COBRA" be coded?',
        options: ['3152181', '3152811', '3152182', '3142181'],
        correctAnswer: '3152181',
        explanation: 'Direct concatenation of forward ranks: Z=26, E=5, B=2, R=18, A=1. COBRA: C=3, O=15, B=2, R=18, A=1 => 3152181.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-cd-p3',
        question: 'In a recruitment code: "ka bi zo" means "pass technical round", "zo lo mi" means "technical interview clear", "mi bi ga" means "clear written round". What is the code for "interview"?',
        options: ['lo', 'zo', 'mi', 'ka'],
        correctAnswer: 'lo',
        explanation: '"zo" = "technical", "mi" = "clear". In "zo lo mi" = "technical interview clear", remaining token "lo" = "interview".',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-cd-p4',
        question: 'If "EARTH" is coded as "GCTVJ", how is "VENUS" coded in that language?',
        options: ['XGPWU', 'XGPWV', 'XGQWV', 'YGPWV'],
        correctAnswer: 'XGPWU',
        explanation: 'Each letter is shifted by +2: V(+2)=X, E(+2)=G, N(+2)=P, U(+2)=W, S(+2)=U => XGPWU.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-cd-p5',
        question: 'If "RAT = 39" and "CHAT = 32", what is "TWITTER" equal to?',
        options: ['115', '118', '120', '125'],
        correctAnswer: '115',
        explanation: 'Sum of forward letter ranks: RAT = 18 + 1 + 20 = 39. CHAT = 3 + 8 + 1 + 20 = 32. TWITTER: T(20) + W(23) + I(9) + T(20) + T(20) + E(5) + R(18) = 115.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-cd-1',
      question: 'If "MACHINE" is coded as 19-7-9-14-15-20-11, how will "DANGER" be coded?',
      options: ['10-7-20-13-11-24', '11-7-20-16-11-24', '10-8-20-13-11-24', '13-7-20-10-11-25'],
      correctAnswer: '10-7-20-13-11-24',
      explanation: 'Rule: Code = Forward Rank + 6. M(13)+6=19, A(1)+6=7, C(3)+6=9, H(8)+6=14, I(9)+6=15, N(14)+6=20, E(5)+6=11. DANGER: D(4)+6=10, A(1)+6=7, N(14)+6=20, G(7)+6=13, E(5)+6=11, R(18)+6=24 => 10-7-20-13-11-24.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-cd-2',
      question: 'In a code, "CENTRAL" is written as "LARTNEC" and "SEMINAR" is written as "RANIMES". How is "COLLEGE" written?',
      options: ['EGLELOC', 'EGELLOC', 'EGELCOL', 'ELLOGEC'],
      correctAnswer: 'EGELLOC',
      explanation: 'The word is spelled backwards: C-O-L-L-E-G-E backwards is E-G-E-L-L-O-C.',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-cd-3',
      question: 'If "GIVE" is coded as "5137" and "BAT" is coded as "924", how is "GATE" coded?',
      options: ['5247', '5427', '5724', '2547'],
      correctAnswer: '5247',
      explanation: 'Direct letter lookup: G=5, A=2, T=4, E=7 => GATE = 5247.',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Letter Shift: Write numerical ranks vertically to find direct shift Δ = C_pos - P_pos.',
      'Opposite Letter Pairs: Sum of positions = 27 (AZ, BY, CX, DW, EV, FU, GT, HS, IR, JQ, KP, LO, MN).',
      'Word Reversal & Halves: Splitting words into 2 halves (3+3 or 4+4) and reversing each half.',
      'Number Coding: Test Direct Sum, Reverse Sum (27-n), Sum × Length, or Rank + Constant.',
      'Substitution ("A is called B"): Identify real-world fact first; pick the single forward name B.',
      'Fictitious Language: Use pairwise sentence intersection to isolate individual word meanings.'
    ],
    quickFormulas: [
      'Opposite Letter: 27 - Rank_forward',
      'Reverse Sum: ∑(27 - Rank_i)',
      'Shift Wrap: (Rank + Shift - 1) mod 26 + 1'
    ]
  },
  keyTakeaways: [
    'Always write forward ranks using EJOTY (5, 10, 15, 20, 25) to immediately convert letters into numbers.',
    'In substitution questions, do NOT continue past the first direct alias.',
    'Eliminate multiple choice options using only the first and last decoded letters.',
    'Check if letter frequencies match between source and cipher before attempting numerical shift calculations (indicates transposition).',
    'In sentence comparison, never assume identical word order.'
  ],
  selfCheckQuestions: [
    'Can you recall all 13 complementary opposite letter pairs instantly using mnemonics?',
    'Can you distinguish between a transposition cipher and a substitution cipher on sight?',
    'Can you solve a 3-sentence fictitious language problem in under 40 seconds?',
    'Can you evaluate number codes using forward sums and reverse (27-n) sums?',
    'Can you apply conditional rules to code words without falling into exception traps?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'A Modern Approach to Verbal & Non-Verbal Reasoning (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 2: Coding-Decoding (Letter, Number, Substitution, Matrix).'
    },
    {
      sourceName: 'Infosys Reasoning Ability Framework',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Opposite letter mappings, cross-diagonal shifts, and conditional rules.'
    },
    {
      sourceName: 'Cognizant Logical Reasoning Assessment',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Fictitious language decoding and alphanumeric matrix coordinates.'
    }
  ]
};
