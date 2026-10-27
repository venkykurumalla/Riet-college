import { CRTYearCurriculum, CRTTopic, CRTYearId } from '../types/crtTypes';
import { CRT_YEAR_1_DATA } from './crtYear1Data';
import { CRT_YEAR_2_DATA } from './crtYear2Data';
import { CRT_YEAR_3_DATA } from './crtYear3Data';
import { CRT_YEAR_4_DATA } from './crtYear4Data';

export const ALL_CRT_YEARS_DATA: Record<CRTYearId, CRTYearCurriculum> = {
  1: CRT_YEAR_1_DATA,
  2: CRT_YEAR_2_DATA,
  3: CRT_YEAR_3_DATA,
  4: CRT_YEAR_4_DATA
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
