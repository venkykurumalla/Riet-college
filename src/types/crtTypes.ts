export type CRTYearId = 1 | 2 | 3 | 4;

export type CRTCategoryType =
  | 'Quantitative Aptitude'
  | 'Logical Reasoning'
  | 'Verbal Ability'
  | 'Data Interpretation'
  | 'Placement Strategy & Shortcuts'
  | 'Advanced Quantitative Aptitude'
  | 'Advanced Logical Reasoning'
  | 'Advanced Verbal Ability'
  | 'Advanced Aptitude / Mixed Problems'
  | 'Recruiter / Assessment Preparation'
  | 'Mock Test & Revision Preparation'
  | string;


export interface CRTSolvedExample {
  id: string;
  title: string;
  question: string;
  givenInfo: string[];
  conceptOrFormula: string;
  steps: {
    stepNumber: number;
    title: string;
    explanation: string;
    math?: string;
  }[];
  finalAnswer: string;
  whyItWorks: string;
  commonTrap?: string;
  difficulty?: 'Foundation' | 'Intermediate' | 'Advanced' | 'Placement-Style';
}

export interface CRTPracticeQuestion {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced' | 'Placement-Style';
}

export interface CRTFormulaCard {
  title: string;
  formula: string;
  variables?: string;
  description: string;
  whenToUse?: string;
  simpleExample?: string;
}

export interface CRTTopicType {
  typeName: string;
  description: string;
  exampleSnippet?: string;
}

export interface CRTAlternativeMethod {
  title: string;
  methods: {
    methodName: string;
    steps: string[];
    prosAndCons: string;
    whenToUse: string;
  }[];
}

export interface CRTTopic {
  id: string;
  yearId: CRTYearId;
  category: CRTCategoryType;
  topicNumber: number;
  title: string;
  tagline: string;
  estimatedMinutes: number;
  difficulty: 'Foundation' | 'Intermediate' | 'Advanced' | 'Placement-Ready';
  
  // Comprehensive Textbook Chapter Sections:
  introduction: {
    overview: string;
    placementRelevance: string;
    historicalRecruiterWeightage?: string;
    realWorldContext?: string;
  };
  learningObjectives?: string[];
  prerequisiteKnowledge?: {
    requiredTopics: string[];
    quickRefresher: string;
  };
  conceptExplanation: {
    coreDefinitions: string[];
    theoreticalIntuition: string;
    visualOrMentalModel?: string;
  };
  importantRulesAndFormulas: CRTFormulaCard[];
  detailedExplanation: {
    mainNarrative: string[];
    deepDiveAspects?: {
      title: string;
      content: string;
    }[];
  };
  problemVariations: CRTTopicType[];
  solvedExamples: CRTSolvedExample[];
  alternativeMethods?: CRTAlternativeMethod;
  shortcutMethods: {
    title: string;
    traditionalVsShortcut: {
      traditionalMethod: string;
      shortcutMethod: string;
      timeSavedPercent?: string;
    };
    rulesForApplication: string[];
  };
  commonMistakes: {
    mistake: string;
    whyItHappens: string;
    howToAvoid: string;
  }[];
  placementTips: {
    timeAllocationSeconds: number;
    eliminationTechnique?: string;
    questionSelectionAdvice: string;
    recruiterInsight: string;
  };
  mixedChallengeSet?: CRTPracticeQuestion[];
  quickRevision: {
    summaryBullets: string[];
    quickFormulas?: string[];
  };
  keyTakeaways: string[];
  selfCheckQuestions?: string[];
  sourcesAndReferences: {
    sourceName: string;
    sourceType: string;
    referenceNote: string;
  }[];
}

export interface CRTCategoryGroup {
  category: CRTCategoryType;
  description: string;
  topics: CRTTopic[];
}

export interface CRTYearCurriculum {
  yearId: CRTYearId;
  yearName: string;
  levelTitle: string;
  description: string;
  targetFocus: string[];
  categories: CRTCategoryGroup[];
}

export interface CRTTopicProgress {
  topicId: string;
  yearId: CRTYearId;
  status: 'not-started' | 'in-progress' | 'completed';
  completed: boolean;
  lastAccessed: string;
  quizBest?: number;
  quizTotal?: number;
}

export interface CRTYearProgress {
  yearId: CRTYearId;
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  percentage: number;
}

// =============================================
// QUIZ SYSTEM TYPES
// =============================================

export type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface QuizQuestion {
  id: string;
  moduleId: string;         // e.g. "y1-quant"
  topicId: string;          // e.g. "number-system"
  question: string;
  options: [string, string, string, string]; // exactly 4
  correctAnswer: string;    // must match one of the options exactly
  explanation: string;
  difficulty: QuizDifficulty;
}

export interface QuizAttempt {
  questionIds: string[];    // 5 question IDs shown
  score: number;            // 0-5
  answers: Record<string, string>; // questionId -> chosen option
  completedAt: string;
}

export interface CRTQuizProgress {
  moduleId: string;
  recentQuestionIds: string[];  // last-seen question IDs (up to 35) for smart rotation
  attempts: QuizAttempt[];
  lastCompletedAt?: string;
}


// =============================================
// TOPIC-WISE QUIZ TYPES (one data file per topic)
// =============================================

export interface TopicQuizQuestion {
  id: number;
  difficulty: 'easy' | 'medium' | 'placement';
  question: string;
  options: string[];        // exactly 4
  answerIndex: number;      // 0-3
  explanation: string;
  shortcut?: string;
}

export interface TopicQuizData {
  topicId: string;
  topicTitle: string;
  questions: TopicQuizQuestion[];
}

// Extra reading material for a chapter (src/data/reading/<topicId>.json), loaded on demand.
export interface CRTReadingExample {
  level: 'Easy' | 'Medium' | 'Placement';
  question: string;
  steps: string[];
  answer: string;
  shortcut?: string; // aptitude topics: the quick method shown beside the normal one
}

export interface CRTReadingGuide {
  topicId: string;
  buildUp: { heading: string; paragraphs: string[] }[];
  keyTerms: { term: string; meaning: string }[];
  rules: { rule: string; condition: string }[];
  recognise: string[];
  workedExamples: CRTReadingExample[];
  variations: { name: string; note: string }[];
  mistakes: { wrong: string; why: string; corrected: string }[];
  revisionTable: { headers: string[]; rows: string[][] };
  tryIt: { question: string; answer: string; hint?: string }[];
}
