import { CRTReadingGuide } from '../../types/crtTypes';
import readingIndex from './index.json';

// One JSON file per chapter (<topicId>.json), written by scripts/content/reading/*.
// Loaded on demand; index.json (tiny) lists which chapters have a guide.
const LOADERS = import.meta.glob<CRTReadingGuide>('./y*.json', { import: 'default' });

export const hasReadingGuide = (topicId: string): boolean => topicId in (readingIndex as Record<string, unknown>);

export const readingExampleCount = (topicId: string): number =>
  (readingIndex as Record<string, { examples: number }>)[topicId]?.examples ?? 0;

export const loadReadingGuide = async (topicId: string): Promise<CRTReadingGuide | undefined> => {
  const loader = LOADERS[`./${topicId}.json`];
  return loader ? loader() : undefined;
};
