import { CRTTopic, CRTYearCurriculum } from '../../types/crtTypes';

// Rewritten chapters (src/data/chapters/<id>.json) replace the generated chapter with the same id.
export const applyOverrides = (year: CRTYearCurriculum, overrides: Record<string, CRTTopic>): CRTYearCurriculum => {
  const byId: Record<string, CRTTopic> = {};
  Object.values(overrides).forEach(t => { byId[t.id] = t; });
  return {
    ...year,
    categories: year.categories.map(cat => ({
      ...cat,
      topics: cat.topics.map(t => byId[t.id] ?? t)
    }))
  };
};
