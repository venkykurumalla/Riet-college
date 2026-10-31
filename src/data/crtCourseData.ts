import { CRTYearCurriculum, CRTTopic, CRTYearId } from '../types/crtTypes';

// Year data is loaded per year (one chunk each, see ./yearBundles). Callers must make sure the
// year is loaded first: App does this before it shows any CRT view, and the search palette
// loads every year when it opens.
const YEARS: CRTYearId[] = [1, 2, 3, 4];

const loaders: Record<CRTYearId, () => Promise<{ default: CRTYearCurriculum }>> = {
  1: () => import('./yearBundles/year1'),
  2: () => import('./yearBundles/year2'),
  3: () => import('./yearBundles/year3'),
  4: () => import('./yearBundles/year4')
};

const cache: Partial<Record<CRTYearId, CRTYearCurriculum>> = {};
const inflight: Partial<Record<CRTYearId, Promise<CRTYearCurriculum>>> = {};

export const isCRTYearLoaded = (yearId: CRTYearId): boolean => !!cache[yearId];

export const loadCRTYear = (yearId: CRTYearId): Promise<CRTYearCurriculum> => {
  const hit = cache[yearId];
  if (hit) return Promise.resolve(hit);
  return (inflight[yearId] ??= loaders[yearId]().then(m => {
    cache[yearId] = m.default;
    return m.default;
  }));
};

export const loadAllCRTYears = (): Promise<CRTYearCurriculum[]> => Promise.all(YEARS.map(loadCRTYear));

export const getCRTYearCurriculum = (yearId: CRTYearId): CRTYearCurriculum => {
  const year = cache[yearId];
  if (!year) throw new Error(`CRT year ${yearId} is not loaded yet`);
  return year;
};

export const getCRTTopicsByYear = (yearId: CRTYearId): CRTTopic[] => {
  const year = cache[yearId];
  return year ? year.categories.flatMap(cat => cat.topics) : [];
};

export const getAllCRTTopics = (): CRTTopic[] => YEARS.flatMap(getCRTTopicsByYear);

export const getCRTTopicById = (
  topicId: string
): { topic: CRTTopic; year: CRTYearCurriculum; category: string } | undefined => {
  for (const yearId of YEARS) {
    const year = cache[yearId];
    if (!year) continue;
    for (const cat of year.categories) {
      const found = cat.topics.find(t => t.id === topicId);
      if (found) return { topic: found, year, category: cat.category };
    }
  }
  return undefined;
};
