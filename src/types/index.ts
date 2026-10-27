export type MaterialStatus = 'not-started' | 'in-progress' | 'completed';

export interface CourseInfo {
  title: string;
  programme: string;
  university: string;
  ltpc: string;
  prerequisites: string;
}

export interface CourseObjective {
  id: number;
  text: string;
}

export interface CourseOutcome {
  id: string;
  bloomLevel: string;
  description: string;
}

export interface COPOMappingRow {
  co: string;
  po1: string;
  po2: string;
  po3: string;
  po4: string;
  po5: string;
  po6: string;
  po7: string;
  po8: string;
  po9: string;
  po10: string;
  po11: string;
  pso1: string;
  pso2: string;
  pso3: string;
}

export interface TopicSection {
  heading: string;
  body: string;
  highlight?: string;
}

export interface TopicContent {
  overview: string;
  exactSyllabusPoint: string;
  explanation: string;
  keyConcepts: {
    title: string;
    description: string;
    icon?: string;
  }[];
  realWorldExamples: string[];
  engineeringExamples: string[];
  practicalApplication: {
    title: string;
    steps: string[];
  };
  keyTakeaways: string[];
}

export interface SyllabusTopic {
  id: string;
  unitId: number;
  topicNumber: number;
  title: string;
  syllabusPoint: string;
  estimatedMinutes: number;
  content: TopicContent;
}

export interface AIToolCategory {
  category: string;
  exampleTools: string[];
  typicalApplications: string[];
  isOptional?: boolean;
}

export interface TeacherExample {
  id: string;
  number: number;
  title: string;
  description: string;
  steps: string[];
  teachingNote?: string;
}

export interface StudentExercise {
  id: string;
  number: number;
  title: string;
  problemStatement: string;
  deliverable: string;
  guidance?: string;
}

export interface CourseUnit {
  id: number;
  number: string;
  title: string;
  description: string;
  topics: SyllabusTopic[];
  aiToolsTable?: AIToolCategory[];
  teacherExamples: TeacherExample[];
  studentExercises: StudentExercise[];
}

export interface BookResource {
  id: string;
  authors: string;
  year: string;
  title: string;
  publisher: string;
  edition?: string;
  description?: string;
}

export interface WebResource {
  id: string;
  title: string;
  url: string;
  description: string;
  badgeText: string;
}

export interface MaterialProgress {
  topicId: string;
  status: MaterialStatus;
  completed: boolean;
  lastAccessed: string;
}

export interface OverallProgress {
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  percentage: number;
  unitProgress: Record<number, { total: number; completed: number; percentage: number }>;
}
