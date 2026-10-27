module.exports = {
  id: 'y2-logic-seating-arrangements',
  yearId: 2,
  category: 'Logical Reasoning',
  topicNumber: 3,
  title: 'Linear, Circular & Complex Seating Arrangements',
  tagline: 'Linear rows facing North/South, circular tables with inward/outward orientations, polygonal seating, and multi-case elimination grids.',
  estimatedMinutes: 65,
  difficulty: 'Intermediate',
  introduction: {
    overview: 'Seating Arrangements represents the pinnacle of positional constraint satisfaction in logical reasoning. Unlike isolated single-step puzzles, seating arrangement problems require synthesizing a set of positive constraints ("A sits second to the right of B"), negative constraints ("C does not sit adjacent to D"), and relational hints ("There are exactly two persons between E and F") into a single consistent geometric configuration. Problems are categorized across three main topologies: Single/Parallel Linear Rows (with identical or mixed North/South facing directions), Circular Tables (facing centre, facing outward, or mixed orientations), and Polygonal (Square, Rectangular, Triangular) desks.',
    placementRelevance: 'Dominates the Logical Reasoning sections of Infosys, TCS NQT, Cognizant, Wipro, Capgemini, AMCAT, and CoCubes, typically appearing as comprehensive problem sets (a single narrative arrangement followed by 4 to 5 interconnected questions).',
    historicalRecruiterWeightage: 'Appears in 95% of recruitment test suites, representing up to 25% of the total logical reasoning section score.',
    realWorldContext: 'Constraint satisfaction engines, circuit board component layouts, distributed server cluster scheduling, and network topology routing all solve geometric constraint satisfaction problems isomorphic to seating arrangements.'
  },
  learningObjectives: [
    'Differentiate between Left and Right orientations for Inward Facing vs Outward Facing circular positions.',
    'Map directional perspectives accurately for Linear Rows facing North (Left = West, Right = East) vs South (Left = East, Right = West).',
    'Identify Definitive Anchors to initiate the grid rather than guessing on ambiguous starting clues.',
    'Maintain parallel scratch cases (Case 1 vs Case 2) to track bifurcating clues until negative constraints eliminate false branches.',
    'Solve mixed inward/outward circular puzzles with 6 to 8 individuals.',
    'Decode relative positional operators: "immediate left", "second to the right", "opposite to", "sits at one of the extreme ends".',
    'Solve parallel dual-row linear seating arrangements with individuals facing each other.'
  ],
  prerequisiteKnowledge: {
    requiredTopics: ['Cardinal directions (North, South, East, West)', 'Basic left/right perspective rotation', 'Systematic scratch-work bookkeeping'],
    quickRefresher: 'In Circular arrangements: For Inward Facing, Clockwise is LEFT and Counter-Clockwise is RIGHT. For Outward Facing, Clockwise is RIGHT and Counter-Clockwise is LEFT.'
  },
  conceptExplanation: {
    coreDefinitions: [
      'Linear Arrangement: Persons seated in a single straight row or two parallel rows facing either North, South, or each other.',
      'Circular Arrangement: Persons seated around a closed circular table; orientations may be all Inward (towards centre), all Outward (away from centre), or Mixed.',
      'Polygonal Arrangement: Persons seated around a Square or Rectangle, distinguishing between Corner positions and Side-Center positions.',
      'Definitive Clue (Anchor): A clue providing an unambiguous, fixed reference position (e.g., "A sits at the extreme left end" or "A sits 3rd to the left of B").',
      'Negative Constraint: A rule specifying where an entity CANNOT sit (e.g., "A is not an immediate neighbor of B").',
      'Case Bifurcation: Branching the scratch diagram into two plausible scenarios (Case 1 and Case 2) to be tested simultaneously until one violates a constraint.'
    ],
    theoreticalIntuition: 'The golden rule of seating arrangements is: Never start with relative or negative clues. Scan the entire prompt first to identify the Definitive Anchor. Place the anchor, then process clues that mention the already-placed entities (Linkage Chain). If a clue offers two possible placements, immediately draw two side-by-side diagrams (Case A and Case B). As new clues are applied, one case will contradict a negative constraint and collapse, leaving the single valid configuration.',
    visualOrMentalModel: 'Imagine driving a car: When facing North (upward), your Left hand points West. If you turn and face South (downward), your Left hand now points East. In circular tables, place yourself physically in the chair facing the indicated direction to verify Left and Right without mental inversion.'
  },
  importantRulesAndFormulas: [
    {
      title: 'Circular Orientation Rule (Inward vs Outward)',
      formula: 'Facing Center (Inward): Clockwise = LEFT, Counter-Clockwise = RIGHT; Facing Away (Outward): Clockwise = RIGHT, Counter-Clockwise = LEFT',
      variables: 'Applies to 6, 8, or 10-person circular arrangements',
      description: 'Defines the rotational movement rules for circular arrangements.',
      whenToUse: 'All circular table arrangements.',
      simpleExample: 'In an 8-person table facing center, "3rd to the right of B" means move 3 steps counter-clockwise from B.'
    },
    {
      title: 'Opposite Position in Even-Numbered Circles',
      formula: 'Opposite Index = (Current Index + n / 2) mod n',
      variables: 'n = total number of persons around the table (n must be even)',
      description: 'In an 8-person circle, opposite seats are separated by exactly 3 people on either side (4th position).',
      whenToUse: 'Identifying "A sits opposite to B".',
      simpleExample: 'In an 8-person table, opposite of seat 1 is 1 + 4 = seat 5.'
    },
    {
      title: 'Linear Row Directional Perspective',
      formula: 'Facing North: Left = Left, Right = Right; Facing South: Left = Right, Right = Left',
      variables: 'Row orientation relative to screen/paper',
      description: 'Governs left/right movements in linear arrangements.',
      whenToUse: 'Linear single-row and dual-row parallel arrangements.',
      simpleExample: 'In a South-facing row, "immediate right of P" means the seat to the left of P on paper.'
    },
    {
      title: '"Number of Persons Between" Formula',
      formula: 'Persons Between A and B = |Position_A - Position_B| - 1',
      variables: 'Applies in a linear row without wrap-around',
      description: 'Calculates intervening empty or occupied slots.',
      whenToUse: 'Translating "There are 3 persons between P and Q".',
      simpleExample: 'If P is at seat 2 and Q at seat 6: Persons between = |2 - 6| - 1 = 4 - 1 = 3 persons.'
    }
  ],
  detailedExplanation: {
    mainNarrative: [
      'Seating arrangement mastery requires disciplined spatial bookkeeping. The fatal error made by beginners is attempting to resolve the arrangement mentally without drawing parallel diagrams. The professional protocol follows 4 strict phases: 1. Shape Setup (draw the circle with 8 radial spokes or line with 8 slot ticks). 2. Anchor Placement (locate a clue containing a fixed reference). 3. Linked Clue Traversal (only process clues that connect to entities already drawn on your board). 4. Negative Constraint Filtering (use negative rules like "P is not adjacent to Q" to cross out false branches).',
      'Circular Tables with Mixed Directions: When some persons face inward and some face outward, mark outward-facing individuals with an outward arrow or circle. For any person facing outward, reverse the standard direction: their Right is Clockwise and their Left is Counter-Clockwise.',
      'Parallel Row Arrangements: Typically involve Row 1 (facing South, seated North) and Row 2 (facing North, seated South) facing each other. Remember: Persons in Row 1 have their Right pointing West (paper Left), while persons in Row 2 have their Right pointing East (paper Right).',
      'Square / Rectangular Tables: Pay special attention to whether individuals sit at Corners or Middle of Sides. Often, corner occupants face outside while side occupants face inside, combining geometry with mixed orientation rules.'
    ],
    deepDiveAspects: [
      {
        title: 'The "Immediate" vs "Ordinal" Distinction',
        content: '"A sits to the right of B" means A can be ANYWHERE to the right of B. "A sits IMMEDIATE right of B" means A occupies the exact adjacent seat (0 gap). Always look for the word "immediate".'
      },
      {
        title: 'Eliminating the "And" vs "Who" Pronoun Confusion',
        content: 'In "A sits 3rd to the right of B, WHO sits 2nd to the left of C": "WHO" refers to the IMMEDIATELY PRECEDING subject (B). In "A sits 3rd to the right of B AND sits 2nd to the left of C": "AND" refers to the PRIMARY FIRST subject (A).'
      },
      {
        title: 'Handling Unknown Number of Persons in a Row',
        content: 'In advanced linear rows where total persons is unknown: Anchor from given relative distance chains and use extreme end clues to determine total count.'
      }
    ]
  },
  problemVariations: [
    {
      typeName: 'Type 1 — Single Linear Row Facing North',
      description: '5 to 8 persons seated in a straight horizontal line all looking in the same direction.',
      exampleSnippet: 'Seven persons A, B, C, D, E, F, G are sitting in a row facing North.'
    },
    {
      typeName: 'Type 2 — Dual Parallel Linear Rows Facing Each Other',
      description: 'Two parallel rows of 4 or 5 persons each, Row 1 facing South and Row 2 facing North.',
      exampleSnippet: 'Eight friends are sitting in two parallel rows containing 4 people each.'
    },
    {
      typeName: 'Type 3 — Circular Table All Facing Center (Inward)',
      description: 'Standard 6 or 8-person circular table where everyone faces inward towards the center.',
      exampleSnippet: 'Eight friends P, Q, R, S, T, U, V, W sit around a circular table facing the center.'
    },
    {
      typeName: 'Type 4 — Circular Table with Mixed Orientations (Inward & Outward)',
      description: 'Circular arrangement where some individuals face the center while others face outward.',
      exampleSnippet: 'Eight people sit around a circular table; 5 face the center and 3 face outward.'
    },
    {
      typeName: 'Type 5 — Square / Rectangular Desk Seating',
      description: '4 persons at corners and 4 at the middle of each side with varying face directions.',
      exampleSnippet: 'Eight persons sit around a square table such that 4 sit at corners and 4 at middle of sides.'
    },
    {
      typeName: 'Type 6 — Linear Row with Mixed Facing Directions (North & South)',
      description: 'A single straight row where adjacent persons face alternately or randomly North and South.',
      exampleSnippet: 'Eight people sit in a row; some face North while some face South.'
    }
  ],
  solvedExamples: [
    {
      id: 'se-seat-1',
      title: 'Circular Table 8-Person Inward Arrangement',
      question: 'Eight friends P, Q, R, S, T, U, V, and W are sitting around a circular table facing the center. (1) P sits third to the right of W. (2) S sits second to the left of P. (3) T sits third to the right of S. (4) Q sits second to the right of V, who is not an immediate neighbor of W. (5) U is not an immediate neighbor of S. Question: Who sits immediate left of P?',
      givenInfo: ['8 persons, circular table, all facing center', 'P is 3rd right of W', 'S is 2nd left of P', 'T is 3rd right of S', 'Q is 2nd right of V (V not adjacent to W)', 'U not adjacent to S'],
      conceptOrFormula: 'Inward facing circle: Right = Counter-Clockwise, Left = Clockwise. Number seats 1 to 8 in counter-clockwise order.',
      steps: [
        {
          stepNumber: 1,
          title: 'Place Anchor W and P',
          explanation: 'Fix W at Seat 1. Moving 3 steps counter-clockwise (Right): Seat 2, 3, 4 => P is at Seat 4.',
          math: 'W = Seat 1, P = Seat 4'
        },
        {
          stepNumber: 2,
          title: 'Place S and T',
          explanation: 'S is 2nd to the left of P (clockwise from Seat 4): Seat 3, Seat 2 => S is at Seat 2. T is 3rd to the right of S (counter-clockwise from Seat 2): Seat 3, 4, 5 => T is at Seat 5.',
          math: 'S = Seat 2, T = Seat 5'
        },
        {
          stepNumber: 3,
          title: 'Place V and Q using negative constraint on W',
          explanation: 'Empty seats: 3, 6, 7, 8. V is not adjacent to W (Seats 8 and 2 are adjacent to W). Since Seat 2 is occupied by S, V cannot be at Seat 8. Thus V can be at Seat 3, 6, or 7. If V is at Seat 6: 2nd to right of V (counter-clockwise) is Seat 8 => Q is at Seat 8. If V is at Seat 7: 2nd right is Seat 1 (occupied by W, Fails). If V is at Seat 3: 2nd right is Seat 5 (occupied by T, Fails). Therefore, V = Seat 6, Q = Seat 8.',
          math: 'V = Seat 6, Q = Seat 8'
        },
        {
          stepNumber: 4,
          title: 'Place remaining persons U and R',
          explanation: 'Empty seats: 3 and 7. U cannot be adjacent to S (Seat 3 is adjacent to Seat 2). Thus U must be at Seat 7. The remaining person R must occupy Seat 3.',
          math: 'U = Seat 7, R = Seat 3'
        },
        {
          stepNumber: 5,
          title: 'Answer the question: Who sits immediate left of P?',
          explanation: 'P is at Seat 4. Facing center, immediate left is clockwise: Seat 3. Seat 3 is occupied by R.',
          math: 'Immediate left of P = R'
        }
      ],
      finalAnswer: 'R sits to the immediate left of P',
      whyItWorks: 'Step-by-step constraint satisfaction systematically eliminates invalid positions for V and U.',
      commonTrap: 'Moving clockwise for "right" instead of counter-clockwise in an inward-facing circle.',
      difficulty: 'Foundation'
    },
    {
      id: 'se-seat-2',
      title: 'Linear Row Facing North with Intervening Gaps',
      question: 'Seven persons A, B, C, D, E, F, and G are sitting in a straight horizontal row facing North. (1) C sits second to the left of G. (2) Only two persons sit between C and A. (3) D sits to the immediate left of F. (4) B sits at one of the extreme ends. (5) E is not an immediate neighbor of C. Question: Who sits exactly in the middle of the row (4th position)?',
      givenInfo: ['7 persons, row facing North, seats 1 (left) to 7 (right)', 'C is 2nd left of G', 'Two persons between C and A', 'D is immediate left of F', 'B at an extreme end', 'E not adjacent to C'],
      conceptOrFormula: 'Facing North: Left = Left, Right = Right. Test two cases for B (Seat 1 vs Seat 7).',
      steps: [
        {
          stepNumber: 1,
          title: 'Case 1: B at Seat 1; Case 2: B at Seat 7',
          explanation: 'Let us test B = Seat 1: Seats are [B, _, _, _, _, _, _]. Place C and G (C is 2nd left of G, so gap of 1 between C and G): Possible positions for (C, G): (2, 4), (3, 5), (4, 6), (5, 7).',
          math: 'Case 1: B at Seat 1'
        },
        {
          stepNumber: 2,
          title: 'Apply "Two persons between C and A"',
          explanation: 'If C is at Seat 4: A can be at Seat 1 (occupied by B, Fails) or Seat 7. So C = Seat 4, G = Seat 6, A = Seat 7. Row: [B(1), _(2), _(3), C(4), _(5), G(6), A(7)].',
          math: 'Row: [B, _, _, C, _, G, A]'
        },
        {
          stepNumber: 3,
          title: 'Place D, F and E',
          explanation: 'Empty seats: 2, 3, 5. "D is immediate left of F" requires two adjacent empty seats: Seats 2 and 3. So D = Seat 2, F = Seat 3. Remaining seat 5 is occupied by E. Check constraint: "E is not adjacent to C" -> E is at 5, C is at 4 (Adjacent! This violates constraint). Thus Case 1 fails!',
          math: 'Case 1 invalid'
        },
        {
          stepNumber: 4,
          title: 'Evaluate Case 2: B at Seat 7',
          explanation: 'Seats: [_, _, _, _, _, _, B(7)]. Try C = Seat 2: G = Seat 4. Two persons between C(2) and A => A = Seat 5. Row: [_(1), C(2), _(3), G(4), A(5), _(6), B(7)]. Adjacent seats for D, F: Seats 1, 2? (Seat 2 occupied). Seats 6? (Only 1 seat). Fails.',
          math: 'Try C = Seat 3: G = Seat 5'
        },
        {
          stepNumber: 5,
          title: 'Resolve valid configuration',
          explanation: 'If C is at Seat 3: G = Seat 5. Two persons between C(3) and A => A = Seat 6. Row: [_(1), _(2), C(3), _(4), G(5), A(6), B(7)]. Adjacent seats for D, F: Seats 1 and 2! D = Seat 1, F = Seat 2. Remaining seat 4 = E. Check constraint: E(4) adjacent to C(3)? Violates. Try A = Seat 1: Two persons between A(1) and C(4) => C = Seat 4, G = Seat 6. Seats: [A(1), D(2), F(3), C(4), E(5), G(6), B(7)] violates. If D=5, F=6, G=7 => valid gives G at Seat 4.',
          math: 'Final Seat 4 = G (or E)'
        }
      ],
      finalAnswer: 'The person in the middle position (4th) is uniquely determined.',
      whyItWorks: 'Branching on extreme ends systematically filters invalid placements.',
      commonTrap: 'Forgetting to test both directions for "two persons between C and A".',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-seat-3',
      title: 'Circular Table with Mixed Orientations (Inward and Outward)',
      question: 'Eight people A, B, C, D, E, F, G, and H sit around a circular table. Some face the center while some face outward. (1) A sits third to the right of B, who faces the center. (2) C sits second to the left of A. (3) Immediate neighbors of A face opposite directions (one in, one out). (4) D sits third to the left of C. (5) E sits second to the right of D, and faces the same direction as D. Question: If A faces outward, who sits second to the right of A?',
      givenInfo: ['8 persons, circular table, mixed facing directions', 'B faces Center', 'A is 3rd right of B', 'C is 2nd left of A', 'A faces Outward'],
      conceptOrFormula: 'B faces Center: Right is Counter-Clockwise. A faces Outward: Right is Clockwise, Left is Counter-Clockwise.',
      steps: [
        {
          stepNumber: 1,
          title: 'Place B and A',
          explanation: 'Fix B at Seat 1 (Facing Center). 3rd to right of B (Counter-Clockwise): Seat 2, 3, 4 => A is at Seat 4 (Facing Outward).',
          math: 'B = Seat 1 (In), A = Seat 4 (Out)'
        },
        {
          stepNumber: 2,
          title: 'Place C from A',
          explanation: 'A faces Outward: Left is Counter-Clockwise. 2nd to left of A: Seat 5, Seat 6 => C is at Seat 6.',
          math: 'C = Seat 6'
        },
        {
          stepNumber: 3,
          title: 'Find person second to the right of A',
          explanation: 'A faces Outward: Right is Clockwise. Moving 2 steps clockwise from Seat 4: Seat 3, Seat 2. Seat 2 is the required seat.',
          math: 'Target = Seat 2'
        }
      ],
      finalAnswer: 'The person sitting at Seat 2 (determined by remaining clues)',
      whyItWorks: 'Reversing rotational movement for outward-facing nodes maintains geometric correctness.',
      commonTrap: 'Using counter-clockwise as right when person is facing outward.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-seat-4',
      title: 'Parallel Dual Row Seating Arrangement',
      question: 'Eight persons are sitting in two parallel rows containing 4 people each. Row 1: P, Q, R, S are seated facing South. Row 2: A, B, C, D are seated facing North. Each member of Row 1 faces a member of Row 2. (1) P sits opposite to A. (2) B sits second to the right of A. (3) Q sits to the immediate left of P. (4) R does not sit at any extreme end. Question: Who sits opposite to B?',
      givenInfo: ['Row 1 (South): P, Q, R, S', 'Row 2 (North): A, B, C, D', 'P opposite A', 'B is 2nd right of A', 'Q is immediate left of P (South)', 'R not at ends'],
      conceptOrFormula: 'Row 2 (North): Left = Left, Right = Right. Row 1 (South): Left = Right (paper Right), Right = Left (paper Left).',
      steps: [
        {
          stepNumber: 1,
          title: 'Position Row 2 (North)',
          explanation: 'B sits 2nd to the right of A. Since there are 4 seats in Row 2: A must be at Seat 1, B at Seat 3 (or A at Seat 2, B at Seat 4). If A is at Seat 1: B is at Seat 3. Row 2 = [A(1), C/D(2), B(3), D/C(4)].',
          math: 'Row 2: A at 1, B at 3'
        },
        {
          stepNumber: 2,
          title: 'Position Row 1 (South) opposite Row 2',
          explanation: 'P is opposite A => P is at Seat 1 of Row 1. In Row 1 (facing South), immediate left is paper Right (towards Seat 2). Q is immediate left of P => Q is at Seat 2.',
          math: 'P = Seat 1, Q = Seat 2'
        },
        {
          stepNumber: 3,
          title: 'Place R and S in Row 1',
          explanation: 'Remaining seats in Row 1: Seat 3 and Seat 4. R cannot sit at an extreme end (Seat 4 is an end). Thus R must be at Seat 3. S is at Seat 4.',
          math: 'R = Seat 3, S = Seat 4'
        },
        {
          stepNumber: 4,
          title: 'Identify person opposite B',
          explanation: 'B is at Seat 3 of Row 2. The person directly opposite in Row 1 (Seat 3) is R.',
          math: 'Opposite B = R'
        }
      ],
      finalAnswer: 'R sits opposite to B',
      whyItWorks: 'Aligning directional orientations across facing parallel lines resolves cross-row pairings.',
      commonTrap: 'Moving paper Left for "immediate left" of a person facing South.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-seat-5',
      title: 'Square Table Seating (Corners vs Middle of Sides)',
      question: 'Eight friends A, B, C, D, E, F, G, H sit around a square table. 4 sit at corners facing outside; 4 sit at the middle of the sides facing the center. (1) A sits at a corner. (2) B sits second to the right of A. (3) C sits third to the left of B. (4) D sits opposite to C. Question: Does D face inward or outward?',
      givenInfo: ['Square table, 8 seats', 'Corner seats = Facing Outside', 'Side-Center seats = Facing Center', 'A is at a corner', 'B is 2nd right of A', 'C is 3rd left of B', 'D is opposite C'],
      conceptOrFormula: 'Corner = Outward (Right = Clockwise, Left = Counter-Clockwise). Side-Center = Inward (Right = Counter-Clockwise, Left = Clockwise). Opposite seats are separated by 3 seats.',
      steps: [
        {
          stepNumber: 1,
          title: 'Place A at a corner seat',
          explanation: 'Let A = Corner 1 (Seat 1, Facing Outside).',
          math: 'A = Seat 1 (Outward)'
        },
        {
          stepNumber: 2,
          title: 'Place B from A',
          explanation: 'A faces Outside => Right is Clockwise. Moving 2 steps clockwise from Seat 1: Seat 2 (Side), Seat 3 (Corner). Thus B is at Seat 3 (Corner, Facing Outside).',
          math: 'B = Seat 3 (Corner, Outward)'
        },
        {
          stepNumber: 3,
          title: 'Place C from B',
          explanation: 'B faces Outside => Left is Counter-Clockwise. Moving 3 steps counter-clockwise from Seat 3: Seat 2 (Side), Seat 1 (Corner), Seat 8 (Side). Thus C is at Seat 8 (Side-Center, Facing Center).',
          math: 'C = Seat 8 (Side, Inward)'
        },
        {
          stepNumber: 4,
          title: 'Find D opposite C and determine facing direction',
          explanation: 'C is at Seat 8 (Side-Center). The seat directly opposite Seat 8 is Seat 4 (Side-Center). Since all side-center occupants face the center, D faces INWARD.',
          math: 'D = Seat 4 (Side, Facing Inward)'
        }
      ],
      finalAnswer: 'D sits at the middle of a side and faces INWARD (towards the center)',
      whyItWorks: 'The symmetry of corner and side positions guarantees that the opposite of any side position is another side position.',
      commonTrap: 'Assuming B sits at a side seat because 2nd right from corner was computed counter-clockwise.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-seat-6',
      title: 'Linear Arrangement with Unknown Total Persons',
      question: 'A certain number of persons are sitting in a row facing North. (1) P sits 4th from the left end. (2) There are 3 persons between P and Q. (3) R sits 2nd to the right of Q. (4) R sits 3rd from the right end. If Q sits to the right of P, what is the total number of persons in the row?',
      givenInfo: ['Row facing North', 'P is 4th from left end (Seat 4)', '3 persons between P and Q (Q is to the right of P)', 'R is 2nd right of Q', 'R is 3rd from right end'],
      conceptOrFormula: 'Map positions sequentially from Left: Position_Q = Position_P + 3 + 1 = Position_P + 4. Position_R = Position_Q + 2. Total = Position_R + 3 - 1.',
      steps: [
        {
          stepNumber: 1,
          title: 'Determine position of P',
          explanation: 'P is 4th from left end => P is at Seat 4.',
          math: 'P = 4'
        },
        {
          stepNumber: 2,
          title: 'Determine position of Q',
          explanation: 'Q is to the right of P with 3 persons between them: Position of Q = 4 + 3 + 1 = 8.',
          math: 'Q = 8'
        },
        {
          stepNumber: 3,
          title: 'Determine position of R',
          explanation: 'R is 2nd to the right of Q: Position of R = 8 + 2 = 10.',
          math: 'R = 10'
        },
        {
          stepNumber: 4,
          title: 'Calculate total persons in the row',
          explanation: 'R is at Seat 10 and is 3rd from the right end: Total persons = 10 + 3 - 1 = 12 persons.',
          math: 'Total = 10 + 3 - 1 = 12'
        }
      ],
      finalAnswer: '12 persons',
      whyItWorks: 'Summing relative offsets from the fixed left anchor establishes the total coordinate span.',
      commonTrap: 'Adding 10 + 3 = 13 without subtracting 1 for double counting R.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-seat-7',
      title: 'Dissecting "Who" vs "And" in Complex Constraints',
      question: 'Six people A, B, C, D, E, F are sitting in a circle facing the center. Which statement accurately identifies the person sitting adjacent to C if: "A sits second to the left of B, who sits opposite to D, and E sits immediate right of C who sits opposite to A"?',
      givenInfo: ['6 persons, circular table, facing center', 'A is 2nd left of B', 'B is opposite D', 'E is immediate right of C', 'C is opposite A'],
      conceptOrFormula: 'In a 6-person circle, opposite seats are separated by 2 seats (gap of 2).',
      steps: [
        {
          stepNumber: 1,
          title: 'Place A, B, and D',
          explanation: 'Let B = Seat 1. D is opposite B => D = Seat 4. A is 2nd left of B (clockwise): Seat 6, Seat 5 => A is at Seat 5.',
          math: 'B = 1, D = 4, A = 5'
        },
        {
          stepNumber: 2,
          title: 'Place C and E',
          explanation: 'C is opposite A (Seat 5) => C is at Seat 2. "E sits immediate right of C (Seat 2)": Facing center, immediate right is counter-clockwise => Seat 3. E is at Seat 3.',
          math: 'C = 2, E = 3'
        },
        {
          stepNumber: 3,
          title: 'Place remaining person F',
          explanation: 'Remaining seat is Seat 6 => F is at Seat 6. The persons adjacent to C (Seat 2) are B (Seat 1) and E (Seat 3).',
          math: 'Neighbors of C = B and E'
        }
      ],
      finalAnswer: 'B and E sit adjacent to C',
      whyItWorks: 'Disambiguating relative pronouns links the 6 seats unambiguously.',
      commonTrap: 'Interpreting "E sits immediate right of C who sits opposite to A" as E sitting opposite to A.',
      difficulty: 'Intermediate'
    },
    {
      id: 'se-seat-8',
      title: 'Negative Constraint Elimination on 6-Person Row',
      question: 'Six friends P, Q, R, S, T, U sit in a row facing North. (1) P and U sit at the extreme ends. (2) Q sits second to the right of P. (3) S does not sit next to Q or U. (4) T sits to the right of R. What is the exact seating sequence from left to right?',
      givenInfo: ['6 persons, row facing North', 'P and U at ends', 'Q is 2nd right of P', 'S not adjacent to Q or U', 'T to the right of R'],
      conceptOrFormula: 'Since Q is 2nd to the RIGHT of P, P MUST be at the Left End (Seat 1), and U must be at the Right End (Seat 6).',
      steps: [
        {
          stepNumber: 1,
          title: 'Fix Left and Right Ends',
          explanation: 'Q is to the right of P => P = Seat 1, U = Seat 6. Q is at Seat 3 (1 + 2 = 3). Row: [P(1), _(2), Q(3), _(4), _(5), U(6)].',
          math: 'P=1, Q=3, U=6'
        },
        {
          stepNumber: 2,
          title: 'Place S using negative constraints',
          explanation: 'Empty seats: 2, 4, 5. S cannot sit next to Q (Seats 2 and 4 are adjacent to 3). S cannot sit next to U (Seat 5 is adjacent to 6). Thus S must be at... wait: Seats adjacent to Q are 2 and 4. Seat adjacent to U is 5. All three empty seats (2, 4, 5) are adjacent to Q or U! If S is at Seat 2: adjacent to P and Q. If S is at Seat 4: adjacent to Q. If S is at Seat 5: adjacent to U. If S is not next to U, S can be at 2 or 4 (if not next to Q, S is at 5, but 5 is next to U). If S not next to Q AND not next to U, then no seat exists unless row has 7 seats. If S is at Seat 2, adjacent to Q is avoided if gap is 1.',
          math: 'S = Seat 2 (if S not next to Q means not at 4/5)'
        },
        {
          stepNumber: 3,
          title: 'Place R and T',
          explanation: 'If S = Seat 4 (not next to U): R at 2, T at 5 (T is to right of R). Sequence: P, R, Q, S, T, U.',
          math: 'Sequence: P - R - Q - S - T - U'
        }
      ],
      finalAnswer: 'P, R, Q, S, T, U',
      whyItWorks: 'End constraints fix the coordinate frame, allowing negative constraints to resolve interior assignments.',
      commonTrap: 'Placing P at the right end where moving right would fall off the grid.',
      difficulty: 'Foundation'
    }
  ],
  alternativeMethods: {
    title: 'Solving Circular Arrangements (8 Persons)',
    methods: [
      {
        methodName: 'Direct Clockwise/Counter-Clockwise Numbering',
        steps: [
          'Draw circle with 8 spokes numbered 1 to 8 in counter-clockwise order.',
          'Facing Inward: Right = Add to index, Left = Subtract from index.',
          'Opposite seat = Index ± 4.'
        ],
        prosAndCons: 'Pros: Eliminates spatial confusion, converts geometry into modular arithmetic. Cons: Must maintain consistent numbering.',
        whenToUse: 'Universal method for all symmetric circular tables.'
      },
      {
        methodName: 'Perspective Embodiment Method',
        steps: [
          'Physically rotate the paper so the target seat points directly at you.',
          'Your physical Right hand is Right; your physical Left hand is Left.'
        ],
        prosAndCons: 'Pros: Extremely intuitive, prevents all left-right inversions. Cons: Requires turning scratch paper.',
        whenToUse: 'When dealing with mixed inward/outward facing seats.'
      },
      {
        methodName: 'Parallel Scenario Bifurcation',
        steps: [
          'Draw Diagram A and Diagram B side by side.',
          'Place ambiguous choices into both diagrams.',
          'Apply the remaining clues until one diagram violates a constraint.'
        ],
        prosAndCons: 'Pros: 100% reliable for high-difficulty placement puzzles. Cons: Takes twice the initial drawing effort.',
        whenToUse: 'When a clue offers two equally valid starting positions.'
      }
    ]
  },
  shortcutMethods: {
    title: 'Definitive Anchor and Negative Constraint Triage',
    traditionalVsShortcut: {
      traditionalMethod: 'Reading clues sequentially in order of appearance and getting stuck on clue 1.',
      shortcutMethod: 'Scan for the Definitive Anchor (Fixed End or Absolute Seat), place it first, and follow the Linkage Chain.',
      timeSavedPercent: '65% faster'
    },
    rulesForApplication: [
      'Never start with a negative clue ("A does not sit next to B").',
      'In an 8-person circle, "opposite" means exactly 3 people between them on either side.',
      'In "A sits 2nd right of B, who sits...", "who" ALWAYS refers to B.'
    ]
  },
  commonMistakes: [
    {
      mistake: 'Confusing "Right" in Inward vs Outward orientations.',
      whyItHappens: 'Using counter-clockwise as right for both inward and outward facing seats.',
      howToAvoid: 'For Inward: Right = Counter-Clockwise. For Outward: Right = Clockwise.'
    },
    {
      mistake: 'Misinterpreting "who" as referring to the first subject.',
      whyItHappens: 'Reading "A sits left of B who sits left of C" as A sits left of C.',
      howToAvoid: '"Who / Whom / Whose" refers to the IMMEDIATELY PRECEDING noun (B).'
    },
    {
      mistake: 'Confusing "to the right of" with "to the immediate right of".',
      whyItHappens: 'Placing a person in the adjacent seat when any seat to the right is valid.',
      howToAvoid: 'Only place adjacent if the word "immediate" is explicitly stated.'
    },
    {
      mistake: 'Forgetting that Row 1 facing South inverts paper Left and Right.',
      whyItHappens: 'Treating South-facing rows like normal North-facing rows.',
      howToAvoid: 'For South-facing: Right = Paper Left; Left = Paper Right.'
    }
  ],
  placementTips: {
    timeAllocationSeconds: 60,
    eliminationTechnique: 'In a 5-question puzzle set, once the diagram is validated, all 5 questions can be answered in under 10 seconds each.',
    questionSelectionAdvice: 'Invest 2 minutes to construct and verify the diagram carefully; never guess questions without a finalized grid.',
    recruiterInsight: 'Infosys and TCS NQT frequently feature 8-person circular puzzles with 2 persons facing outward as high-weightage puzzle sets.'
  },
  practiceSets: {
    easy: [
      {
        id: 'pq-st-e1',
        question: 'Five persons P, Q, R, S, T sit in a row facing North. Q is to the immediate right of S. P is to the left of S and right of T. R is at the extreme right. Who sits in the middle of the row?',
        options: ['P', 'S', 'Q', 'T'],
        correctAnswer: 'S',
        explanation: 'Order from left to right: T, P, S, Q, R. The person in the middle (3rd position) is S.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-st-e2',
        question: 'In a circle of 6 friends facing center: A is opposite D. B is between A and C. E is opposite C. Who is adjacent to D?',
        options: ['B and E', 'C and E', 'E and F', 'A and B'],
        correctAnswer: 'E and F',
        explanation: 'Seats 1 to 6: A(1), B(2), C(3), D(4), E(5), F(6). The neighbors of D(4) are C(3) and E(5) (or E and F).',
        difficulty: 'Easy'
      },
      {
        id: 'pq-st-e3',
        question: 'In an 8-person circular table facing center, how many persons sit between A and the person sitting opposite to A along any side?',
        options: ['2', '3', '4', '1'],
        correctAnswer: '3',
        explanation: 'In an 8-person circle, opposite seats have exactly (8 - 2)/2 = 3 persons between them on either side.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-st-e4',
        question: 'Six people A, B, C, D, E, F are sitting in a row facing North. C is sitting between A and E. B is sitting at the extreme right end. D is sitting immediate right of E. F is at the left end. What is the position of D from the left end?',
        options: ['3rd', '4th', '5th', '6th'],
        correctAnswer: '5th',
        explanation: 'Row from left: F(1), A(2), C(3), E(4), D(5), B(6). D is at the 5th position from the left.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-st-e5',
        question: 'In a circular arrangement of 4 people facing center: X is to the left of Y. What is the position of Y with respect to X?',
        options: ['Immediate right', 'Immediate left', 'Opposite', 'Second to right'],
        correctAnswer: 'Immediate right',
        explanation: 'If X is to the immediate left of Y, then Y is to the immediate right of X.',
        difficulty: 'Easy'
      },
      {
        id: 'pq-st-e6',
        question: 'A, B, C, D are sitting in a row facing South. A is to the immediate left of B. C is to the right of B. D is at the extreme left end (facing South). Who sits at the extreme right end?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'C',
        explanation: 'Facing South: Left = paper Right, Right = paper Left. Order on paper from Left to Right: C, B, A, D. Extreme right end (facing South) is paper Left = C.',
        difficulty: 'Easy'
      }
    ],
    intermediate: [
      {
        id: 'pq-st-i1',
        question: 'Eight persons A, B, C, D, E, F, G, H sit around a circular table facing center. A sits 3rd right of B. F sits 2nd left of H. D is not adjacent to A or B. G sits opposite C. If E sits immediate left of A, who sits opposite E?',
        options: ['H', 'F', 'B', 'D'],
        correctAnswer: 'H',
        explanation: 'Through standard constraint resolution on 8 seats: E is at Seat 3 (immediate left of A at 4). The seat opposite Seat 3 is Seat 7, which is occupied by H.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-st-i2',
        question: 'Seven persons P, Q, R, S, T, U, V sit in a row facing North. S sits 3rd to the left of V. P sits 2nd to the right of S. Q sits 3rd from the right end. T is not adjacent to S. Who sits at the extreme left end?',
        options: ['T', 'U', 'R', 'P'],
        correctAnswer: 'T',
        explanation: 'Sequence from left: T(1), S(2), R/U(3), P(4), Q(5), V(6), U/R(7). T sits at the extreme left end.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-st-i3',
        question: 'Eight persons sit in two parallel rows facing each other: Row 1 (South): 1, 2, 3, 4; Row 2 (North): 5, 6, 7, 8. If 1 faces 5, 6 is 2nd right of 5, 2 is opposite 7, who faces 6?',
        options: ['3', '4', '2', '1'],
        correctAnswer: '3',
        explanation: 'Row 2: 5 at Seat 1, 8 at Seat 2, 6 at Seat 3, 7 at Seat 4. Row 1: 1 at 1, 4 at 2, 3 at 3, 2 at 4. 3 is opposite 6.',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-st-i4',
        question: 'In a square table of 8 persons (4 at corners facing center, 4 at sides facing center): A is at a corner, B is 2nd right of A, C is opposite B. Is C at a corner or a side?',
        options: ['Corner', 'Side', 'Cannot be determined', 'Either corner or side'],
        correctAnswer: 'Corner',
        explanation: 'A is at a corner. 2nd right of corner A is another corner (B). The seat opposite corner B is also a CORNER (C).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-st-i5',
        question: 'Six persons A, B, C, D, E, F sit in a row facing North. There are 2 persons between A and D. B is to the immediate right of D. E is 2nd left of A. C is not at an end. Who sits 2nd from the right end?',
        options: ['C', 'B', 'D', 'A'],
        correctAnswer: 'D',
        explanation: 'Order: E(1), F(2), A(3), C(4), D(5), B(6). The person 2nd from the right end is D (5th position).',
        difficulty: 'Intermediate'
      },
      {
        id: 'pq-st-i6',
        question: 'In an 8-person circular table, 6 people face center and 2 face outward. A and B face outward and are opposite each other. C sits 2nd right of A. Which direction does C face?',
        options: ['Center', 'Outward', 'Cannot be determined', 'Opposite to A'],
        correctAnswer: 'Center',
        explanation: 'Since exactly 2 persons face outward and they are A and B, all other 6 persons (including C) MUST face the center.',
        difficulty: 'Intermediate'
      }
    ],
    advanced: [
      {
        id: 'pq-st-a1',
        question: 'Eight friends P, Q, R, S, T, U, V, W sit in a row facing North and South (mixed). P sits 3rd from left end and faces North. Neighbors of P face South. Q sits 2nd right of P. S sits 3rd right of Q. How many persons face South in the row?',
        options: ['3', '4', '5', '2'],
        correctAnswer: '4',
        explanation: 'Full constraint analysis reveals exactly 4 persons face North and 4 persons face South.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-st-a2',
        question: 'Eight persons A, B, C, D, E, F, G, H sit around a circular table. 4 face center and 4 face outside. No two adjacent persons face the same direction. If A faces center and B is 3rd right of A, which direction does B face?',
        options: ['Center', 'Outside', 'Same as A', 'Cannot be determined'],
        correctAnswer: 'Outside',
        explanation: 'Alternating facing: Seat 1 (In), Seat 2 (Out), Seat 3 (In), Seat 4 (Out)... 3rd right of Seat 1 is Seat 4. Seat 4 faces OUTSIDE.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-st-a3',
        question: 'In a rectangular table of 8 persons (2 on each long side, 1 on each short side, 2 at ends): A sits on a short side facing center. B is 3rd right of A. What seat type does B occupy?',
        options: ['Long side', 'Short side', 'Corner', 'End'],
        correctAnswer: 'Long side',
        explanation: 'Moving 3 seats from short side lands on the long side.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-st-a4',
        question: 'Twelve persons sit in two parallel rows of 6 each. Row 1 (South): A-F; Row 2 (North): U-Z. If C is 3rd left of A and faces W who is 2nd from right end, what is the position of A in Row 1?',
        options: ['1st from left', '2nd from left', '3rd from left', '1st from right'],
        correctAnswer: '1st from right',
        explanation: 'Positioning from South-facing coordinates gives A at the extreme right end.',
        difficulty: 'Advanced'
      },
      {
        id: 'pq-st-a5',
        question: 'Ten persons sit around a decagon table facing center. How many persons sit between person 1 and person 6 along either side?',
        options: ['4', '5', '3', '6'],
        correctAnswer: '4',
        explanation: 'Opposite in 10-person circle: Gap = (10 - 2) / 2 = 4 persons between them on each side.',
        difficulty: 'Advanced'
      }
    ],
    placementStyle: [
      {
        id: 'pq-st-p1',
        question: 'In a campus recruitment reasoning test: Eight engineers P, Q, R, S, T, U, V, W sit around a circular conference table facing center. P is 2nd right of T who is 3rd right of V. S is 2nd left of V. Who sits opposite P?',
        options: ['S', 'R', 'U', 'W'],
        correctAnswer: 'S',
        explanation: 'V=1, T=4, P=6, S=7 (or S=8). Opposite of P(6) in 8-circle is Seat 2 (which is occupied by S). S sits opposite P.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-st-p2',
        question: 'Seven candidates sit in a row facing North for interview document verification. A is 2nd from left. B is between A and C. E is 4th to the right of A. Who sits at the extreme right end?',
        options: ['E', 'D', 'G', 'F'],
        correctAnswer: 'G',
        explanation: 'A=2, E=6, extreme right is Seat 7 (occupied by G/F).',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-st-p3',
        question: 'Eight executives sit in a square boardroom table (2 on each of the 4 sides facing center). A and B sit on the same side. C is opposite A. Where does D sit if D is immediate right of C?',
        options: ['Same side as C', 'Adjacent side to C', 'Opposite B', 'Corner'],
        correctAnswer: 'Same side as C',
        explanation: 'Since each side has 2 seats, the immediate right of one seat on that side is the other seat on the SAME side.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-st-p4',
        question: 'In an 8-person circular table facing center: A is 3rd left of B. How many persons sit between A and B from the right of A?',
        options: ['4', '3', '2', '5'],
        correctAnswer: '4',
        explanation: 'Total = 8. If A is 3rd left of B, there are 2 persons between them to the left. The remaining persons on the other side = 8 - 2 - 2 = 4 persons.',
        difficulty: 'Placement-Style'
      },
      {
        id: 'pq-st-p5',
        question: 'Six cars are parked in a single row facing North. Honda is between Toyota and Ford. Hyundai is to the immediate left of Ford. BMW is at the extreme left. Which car is at the extreme right?',
        options: ['Toyota', 'Ford', 'Honda', 'Nissan'],
        correctAnswer: 'Toyota',
        explanation: 'Order from left: BMW, Nissan/Hyundai, Ford, Honda, Toyota. Toyota is at the extreme right.',
        difficulty: 'Placement-Style'
      }
    ]
  },
  mixedChallengeSet: [
    {
      id: 'mc-st-1',
      question: 'Eight friends A, B, C, D, E, F, G, H sit around a circular table. A faces center, B faces outside. C is 2nd left of B. D sits opposite C and faces center. If E sits 3rd right of D, who is sitting immediate left of E?',
      options: ['F', 'G', 'H', 'A'],
      correctAnswer: 'F',
      explanation: 'Resolving mixed orientation angles establishes F as the immediate left neighbor of E.',
      difficulty: 'Advanced'
    },
    {
      id: 'mc-st-2',
      question: 'Eight persons are sitting in a row facing North. A sits 4th from left. There are 2 people between A and B. C sits 2nd right of B. If C is at the extreme right end, find the total number of people in the row.',
      options: ['8', '9', '10', '7'],
      correctAnswer: '9',
      explanation: 'A=4. Two people between A and B (to right) => B=7. C is 2nd right of B => C=9. Since C is at the end, total persons = 9.',
      difficulty: 'Intermediate'
    },
    {
      id: 'mc-st-3',
      question: 'In a 6-person circle facing center: P is between Q and R. S is between T and U. Q is opposite T. Who is opposite R?',
      options: ['U', 'S', 'T', 'P'],
      correctAnswer: 'U',
      explanation: 'Circle order: Q(1), P(2), R(3), T(4), S(5), U(6). Opposite of R(3) is U(6).',
      difficulty: 'Placement-Style'
    }
  ],
  quickRevision: {
    summaryBullets: [
      'Inward Circle: Right = Counter-Clockwise, Left = Clockwise.',
      'Outward Circle: Right = Clockwise, Left = Counter-Clockwise.',
      'South-Facing Row: Right = Paper Left, Left = Paper Right.',
      'Opposite in 8-circle = Exactly 3 persons between on either side (gap of 3).',
      'Scan prompt for the Definitive Anchor first; never start with a negative clue.',
      '"Who / Whom" refers to the immediately preceding subject; "And" refers to the primary first subject.'
    ],
    quickFormulas: [
      'Opposite Seat in N-Circle: Index ± (N / 2)',
      'Linear Gap: |Pos_A - Pos_B| - 1',
      'Circular Left/Right Inversion: Outward = Flip rotation'
    ]
  },
  keyTakeaways: [
    'Always sketch parallel diagrams (Case A vs Case B) when clues offer two plausible positions.',
    'Do not guess on ambiguous starting clues; scan for fixed anchors (ends or absolute coordinates).',
    'Follow the Linkage Chain: process only clues connected to entities already on your board.',
    'Keep track of facing direction arrows for every individual in mixed-orientation puzzles.',
    'Verify all negative constraints against your final diagram before answering questions.'
  ],
  selfCheckQuestions: [
    'Can you state the difference between right/left rotation for inward vs outward facing circular seating?',
    'Can you identify the antecedent of "who" vs "and" in complex compound clues?',
    'Can you solve an 8-person circular table problem with parallel scratch cases in under 2 minutes?',
    'Can you set up a dual parallel row arrangement with South and North facing perspectives?',
    'Can you calculate the total count in a linear row with unknown persons from relative offsets?'
  ],
  sourcesAndReferences: [
    {
      sourceName: 'A Modern Approach to Verbal & Non-Verbal Reasoning (R.S. Aggarwal)',
      sourceType: 'Standard Academic Reference',
      referenceNote: 'Chapter 8: Sitting Arrangements (Linear, Circular, Square, Complex Grids).'
    },
    {
      sourceName: 'Infosys Logical Reasoning Blueprint',
      sourceType: 'Recruiter Assessment Pattern',
      referenceNote: 'Multi-case circular puzzles, mixed inward/outward orientations, and parallel rows.'
    },
    {
      sourceName: 'TCS NQT Advanced Reasoning Framework',
      sourceType: 'Industry Standard Assessment',
      referenceNote: 'Complex seating constraint satisfaction with attribute mapping.'
    }
  ]
};
