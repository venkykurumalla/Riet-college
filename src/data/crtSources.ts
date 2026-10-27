export interface CRTSourceRecord {
  id: string;
  name: string;
  url: string;
  type: 'official assessment' | 'institutional placement' | 'educational platform' | 'standard reference';
  topics: string[];
  checked: string;
  notes: string;
}

export const CRT_SOURCES: CRTSourceRecord[] = [
  {
    id: 'src-tcs-ion',
    name: 'TCS iON / TCS NQT Official Assessment Framework',
    url: 'https://www.tcsion.com/hub/national-qualifier-test/',
    type: 'official assessment',
    topics: [
      'Number Systems',
      'Arithmetic (Percentages, Profit & Loss, SI & CI, Time & Work, Speed & Distance)',
      'Reasoning (Series, Coding-Decoding, Seating Arrangements, Syllogisms)',
      'Verbal Ability (Error Identification, Reading Comprehension, Sentence Completion)',
      'Data Interpretation (Tables, Graphs, Pie Charts)'
    ],
    checked: '2026-09-24',
    notes: 'Primary benchmark for campus recruitment across Ninja, Digital, and Prime tiers. Focuses on foundational accuracy followed by advanced multi-concept problem solving.'
  },
  {
    id: 'src-amcat-shl',
    name: 'SHL / AMCAT Employability Assessment Syllabus',
    url: 'https://www.shl.com/solutions/products/amcat/',
    type: 'official assessment',
    topics: [
      'Quantitative Ability (Divisibility, Fractions, Averages, Permutations & Combinations, Probability)',
      'Logical Ability (Deductive, Inductive, Blood Relations, Direction Sense, Pattern Recognition)',
      'Verbal Ability (Vocabulary, Prepositions, Contextual Grammar, Sentence Improvement)'
    ],
    checked: '2026-09-24',
    notes: 'Computer-adaptive assessment engine measuring cognitive ability, numerical reasoning, and language proficiency.'
  },
  {
    id: 'src-cocubes-aon',
    name: 'Aon / CoCubes Employability Assessment Guide',
    url: 'https://www.cocubes.com/',
    type: 'official assessment',
    topics: [
      'Quantitative Aptitude (Algebra, Equations, Geometry, Mensuration, Arithmetic)',
      'Analytical Reasoning (Puzzles, Blood Relations, Seating Arrangement, Visual Logic)',
      'English Usage (Grammar, Reading Comprehension, Error Detection)'
    ],
    checked: '2026-09-24',
    notes: 'Standardized assessment utilized by hundreds of corporate recruiters for engineering entry-level hiring.'
  },
  {
    id: 'src-infosys-springboard',
    name: 'Infosys Springboard / Campus Connect Employability Foundation',
    url: 'https://infyspringboard.onwingspan.com/',
    type: 'institutional placement',
    topics: [
      'Aptitude Foundation',
      'Logical & Critical Thinking',
      'Verbal Communication & Professional English',
      'Data Interpretation & Analytical Problem Solving'
    ],
    checked: '2026-09-24',
    notes: 'Industry-academic curriculum designed to scaffold engineering students from 1st to 4th year.'
  },
  {
    id: 'src-capgemini-exceller',
    name: 'Capgemini Exceller Campus Assessment Guidelines',
    url: 'https://www.capgemini.com/careers/',
    type: 'official assessment',
    topics: [
      'Pseudocode & Logic',
      'Quantitative Aptitude (Speed & Accuracy)',
      'Game-Based / Inductive Reasoning',
      'Verbal English Ability'
    ],
    checked: '2026-09-24',
    notes: 'Emphasizes game-based cognitive reasoning and rapid mathematical evaluation.'
  },
  {
    id: 'src-cognizant-gencrec',
    name: 'Cognizant GenC & GenC Next Placement Assessment Patterns',
    url: 'https://careers.cognizant.com/',
    type: 'official assessment',
    topics: [
      'Quantitative Aptitude (Advanced Arithmetic & Algebra)',
      'Analytical & Critical Reasoning',
      'Verbal Ability & Reading Comprehension'
    ],
    checked: '2026-09-24',
    notes: 'Tiered evaluation separating foundational readiness (GenC) from advanced algorithmic problem-solving (GenC Next).'
  },
  {
    id: 'src-iit-madras-placement',
    name: 'IIT Madras Placement & Training Cell Employability Framework',
    url: 'https://placement.iitm.ac.in/',
    type: 'institutional placement',
    topics: [
      'Quantitative Modeling',
      'Logical Deductions & Discrete Analytics',
      'Verbal & Technical Articulation',
      'Case Studies & Multi-Table Data Interpretation'
    ],
    checked: '2026-09-24',
    notes: 'Tier-1 institutional training standard prioritizing structured problem decomposition.'
  },
  {
    id: 'src-iit-bombay-placement',
    name: 'IIT Bombay Career Cell Aptitude & Problem Solving Guidelines',
    url: 'https://placements.iitb.ac.in/',
    type: 'institutional placement',
    topics: [
      'Probability & Permutations/Combinations',
      'Advanced Logic & Optimization Puzzles',
      'Data Sufficiency & Graph Analytics'
    ],
    checked: '2026-09-24',
    notes: 'Rigorous cognitive and analytical reasoning benchmarks used for high-tier placement preparations.'
  },
  {
    id: 'src-aicte-softskills',
    name: 'AICTE Model Employability & Aptitude Enhancement Guidelines',
    url: 'https://www.aicte-india.org/',
    type: 'institutional placement',
    topics: [
      'Foundation Quantitative Arithmetic (1st/2nd Year)',
      'Intermediate Logical & Verbal Skills (2nd/3rd Year)',
      'Placement & Industry Preparedness (4th Year)'
    ],
    checked: '2026-09-24',
    notes: 'National engineering curriculum standard recommending progressive 4-year employability training.'
  },
  {
    id: 'src-rs-aggarwal-quant',
    name: 'Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)',
    url: 'https://www.s-chand.com/rs-aggarwal',
    type: 'standard reference',
    topics: [
      'Number System',
      'HCF & LCM',
      'Percentages, Profit & Loss, Ratio & Proportion',
      'Time & Work, Pipes & Cisterns',
      'Time, Speed & Distance, Boats & Streams',
      'Simple & Compound Interest',
      'Permutations, Combinations & Probability',
      'Area, Volume & Surface Area (Mensuration)'
    ],
    checked: '2026-09-24',
    notes: 'Foundational textbook reference for concept building and standard algorithmic shortcuts in competitive mathematics.'
  },
  {
    id: 'src-rs-aggarwal-reasoning',
    name: 'A Modern Approach to Verbal & Non-Verbal Reasoning (R.S. Aggarwal)',
    url: 'https://www.s-chand.com/rs-aggarwal-reasoning',
    type: 'standard reference',
    topics: [
      'Analogy & Classification',
      'Series Completion (Number, Alphabet)',
      'Coding-Decoding & Blood Relations',
      'Direction Sense & Seating Arrangement',
      'Syllogisms & Logical Deductions',
      'Venn Diagrams & Data Sufficiency'
    ],
    checked: '2026-09-24',
    notes: 'Comprehensive reference for pattern recognition, deduction trees, and categorical reasoning.'
  },
  {
    id: 'src-arun-sharma-quant',
    name: 'How to Prepare for Quantitative Aptitude (Arun Sharma - McGraw Hill)',
    url: 'https://www.mheducation.co.in/',
    type: 'standard reference',
    topics: [
      'Number Theory & Remainders',
      'Advanced Arithmetic & Allegations',
      'Algebra, Equations & Inequalities',
      'Modern Math & Combinatorics',
      'Speed Math & Option Elimination Strategies'
    ],
    checked: '2026-09-24',
    notes: 'High-level problem solving pedagogy categorized into LOD-1 (Foundation), LOD-2 (Moderate), and LOD-3 (Advanced).'
  },
  {
    id: 'src-arun-sharma-di',
    name: 'How to Prepare for Data Interpretation & Logical Reasoning (Arun Sharma)',
    url: 'https://www.mheducation.co.in/',
    type: 'standard reference',
    topics: [
      'Tabular DI, Bar Charts, Pie Charts, Radar Charts',
      'Caselet DI & Missing Data Analytics',
      'Matrix Arrangements, Floor Puzzles, Scheduling',
      'Critical Reasoning, Assumptions, Arguments & Inferences'
    ],
    checked: '2026-09-24',
    notes: 'Industry-standard methodology for solving multi-variable grid puzzles and composite data representations.'
  },
  {
    id: 'src-norman-lewis',
    name: 'Word Power Made Easy (Norman Lewis) & English Usage Standards',
    url: 'https://www.simonandschuster.com/',
    type: 'standard reference',
    topics: [
      'Etymology & Root Words',
      'Synonyms, Antonyms & Contextual Diction',
      'Sentence Structure & Grammatical Concord',
      'Reading Comprehension Critical Analysis'
    ],
    checked: '2026-09-24',
    notes: 'Etymological vocabulary construction method enabling rapid comprehension and accurate verbal elimination.'
  },
  {
    id: 'src-indiabix',
    name: 'IndiaBIX Aptitude & Logical Reasoning Portal',
    url: 'https://www.indiabix.com/',
    type: 'educational platform',
    topics: [
      'Quantitative Aptitude Problem Sets',
      'Logical Reasoning Variations',
      'Verbal Ability Drills',
      'Data Interpretation Tables and Charts'
    ],
    checked: '2026-09-24',
    notes: 'Widely referenced repository for question patterns, alternative solutions, and community-verified test questions.'
  },
  {
    id: 'src-geeksforgeeks-aptitude',
    name: 'GeeksforGeeks Placement Aptitude & Technical Preparation',
    url: 'https://www.geeksforgeeks.org/aptitude-questions-and-answers/',
    type: 'educational platform',
    topics: [
      'Placement Quantitative Aptitude',
      'Logical Reasoning for Tech Campus Drives',
      'Verbal Ability & Grammar Notes',
      'Company Specific Interview & Assessment Archives'
    ],
    checked: '2026-09-24',
    notes: 'Specialized placement training modules aligning mathematical rigor with technical software campus interviews.'
  },
  {
    id: 'src-prepinsta-crt',
    name: 'PrepInsta Placement & Assessment Blueprint',
    url: 'https://prepinsta.com/',
    type: 'educational platform',
    topics: [
      'TCS NQT, Infosys, Wipro, Capgemini, Accenture Assessment Curricula',
      'Speed Math Shortcuts & Formula Compendiums',
      'Company Wise Previous Year Question Patterns'
    ],
    checked: '2026-09-24',
    notes: 'Placement analytics tracker aggregating recruiting rounds, question weightages, and section cut-offs.'
  },
  {
    id: 'src-testbook-placement',
    name: 'Testbook Engineering Placement Aptitude Series',
    url: 'https://testbook.com/',
    type: 'educational platform',
    topics: [
      'Topic-wise Aptitude Tests',
      'Reasoning Puzzles & Syllogism Rule Sheets',
      'Verbal Spotting Errors & Reading Comprehension Strategies'
    ],
    checked: '2026-09-24',
    notes: 'Pedagogical test series emphasizing accuracy metrics, negative marking avoidance, and speed optimization.'
  }
];
