import { TopicQuizData } from '../../types/crtTypes';

// One JSON file per topic (<topicId>.json). Add questions by editing the file only.
// Loaded on demand so the quiz data is split out of the main bundle.
const QUIZ_LOADERS = import.meta.glob<TopicQuizData>('./*.json', { import: 'default' });

export const loadTopicQuiz = async (topicId: string): Promise<TopicQuizData | undefined> => {
  const loader = QUIZ_LOADERS[`./${topicId}.json`];
  return loader ? loader() : undefined;
};
