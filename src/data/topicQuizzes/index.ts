import { TopicQuizData } from '../../types/crtTypes';

// One JSON file per topic (<topicId>.json). Add questions by editing the file only.
const QUIZ_FILES = import.meta.glob<TopicQuizData>('./*.json', {
  eager: true,
  import: 'default'
});

const quizByTopic: Record<string, TopicQuizData> = {};
Object.values(QUIZ_FILES).forEach(q => {
  quizByTopic[q.topicId] = q;
});

export const getTopicQuiz = (topicId: string): TopicQuizData | undefined => quizByTopic[topicId];
