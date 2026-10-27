import { CRTYearCurriculum, CRTTopic, CRTYearId } from '../types/crtTypes';
import { CRT_YEAR_1_DATA } from './crtYear1Data';
import { CRT_YEAR_2_DATA } from './crtYear2Data';
import { CRT_YEAR_3_DATA } from './crtYear3Data';
import { CRT_YEAR_4_DATA } from './crtYear4Data';

// Rewritten chapters live in ./chapters/<topicId>.json and replace the generated
// chapter with the same id; everything else keeps the generated data.
const CHAPTER_OVERRIDES = import.meta.glob<CRTTopic>('./chapters/*.json', {
  eager: true,
  import: 'default'
});
const overrideById: Record<string, CRTTopic> = {};
Object.values(CHAPTER_OVERRIDES).forEach(t => {
  overrideById[t.id] = t;
});

const withOverrides = (year: CRTYearCurriculum): CRTYearCurriculum => ({
  ...year,
  categories: year.categories.map(cat => ({
    ...cat,
    topics: cat.topics.map(t => overrideById[t.id] ?? t)
  }))
});

export const ALL_CRT_YEARS_DATA: Record<CRTYearId, CRTYearCurriculum> = {
  1: withOverrides(CRT_YEAR_1_DATA),
  2: withOverrides(CRT_YEAR_2_DATA),
  3: withOverrides(CRT_YEAR_3_DATA),
  4: withOverrides(CRT_YEAR_4_DATA)
};

export const getCRTYearCurriculum = (yearId: CRTYearId): CRTYearCurriculum => {
  return ALL_CRT_YEARS_DATA[yearId] || CRT_YEAR_1_DATA;
};

export const getCRTTopicsByYear = (yearId: CRTYearId): CRTTopic[] => {
  const yearData = getCRTYearCurriculum(yearId);
  const list: CRTTopic[] = [];
  yearData.categories.forEach(cat => {
    cat.topics.forEach(t => list.push(t));
  });
  return list;
};

export const getAllCRTTopics = (): CRTTopic[] => {
  const all: CRTTopic[] = [];
  ([1, 2, 3, 4] as CRTYearId[]).forEach(y => {
    all.push(...getCRTTopicsByYear(y));
  });
  return all;
};

export const getCRTTopicById = (
  topicId: string
): { topic: CRTTopic; year: CRTYearCurriculum; category: string } | undefined => {
  for (const yearId of [1, 2, 3, 4] as CRTYearId[]) {
    const yearData = getCRTYearCurriculum(yearId);
    for (const cat of yearData.categories) {
      const found = cat.topics.find(t => t.id === topicId);
      if (found) {
        return { topic: found, year: yearData, category: cat.category };
      }
    }
  }
  return undefined;
};
