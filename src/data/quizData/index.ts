/**
 * Master Quiz Data Index
 * Centralizes all quiz pools and helper utilities for all 4 years.
 * Each year has 4 modules × 40 questions = 160 questions per year, 640 total.
 */

import { QuizQuestion, CRTQuizProgress } from '../../types/crtTypes';

import { YEAR1_QUIZ_POOLS, YEAR1_CATEGORY_TO_MODULE } from './year1QuizData';
import { YEAR2_QUIZ_POOLS, YEAR2_CATEGORY_TO_MODULE } from './year2QuizData';
import { YEAR3_QUIZ_POOLS, YEAR3_CATEGORY_TO_MODULE } from './year3QuizData';
import { YEAR4_QUIZ_POOLS, YEAR4_CATEGORY_TO_MODULE } from './year4QuizData';

// ============================================================
// ALL QUIZ POOLS (merged by year)
// ============================================================
export const ALL_QUIZ_POOLS: Record<string, QuizQuestion[]> = {
  ...YEAR1_QUIZ_POOLS,
  ...YEAR2_QUIZ_POOLS,
  ...YEAR3_QUIZ_POOLS,
  ...YEAR4_QUIZ_POOLS,
};

// ============================================================
// CATEGORY → MODULE ID MAPPING (all years)
// Maps "Year N :: Category Name" to moduleId
// ============================================================
export const ALL_CATEGORY_TO_MODULE: Record<number, Record<string, string>> = {
  1: YEAR1_CATEGORY_TO_MODULE,
  2: YEAR2_CATEGORY_TO_MODULE,
  3: YEAR3_CATEGORY_TO_MODULE,
  4: YEAR4_CATEGORY_TO_MODULE,
};

// ============================================================
// QUIZ HELPER FUNCTIONS
// ============================================================

/**
 * Get all 40 questions for a given moduleId.
 */
export function getQuizPool(moduleId: string): QuizQuestion[] {
  return ALL_QUIZ_POOLS[moduleId] ?? [];
}

/**
 * Get the moduleId for a given year and category name.
 */
export function getModuleId(yearId: number, categoryName: string): string | null {
  const yearMap = ALL_CATEGORY_TO_MODULE[yearId];
  if (!yearMap) return null;
  return yearMap[categoryName] ?? null;
}

/**
 * Check whether a quiz exists for the given moduleId.
 */
export function hasQuiz(moduleId: string): boolean {
  return moduleId in ALL_QUIZ_POOLS && ALL_QUIZ_POOLS[moduleId].length > 0;
}

/**
 * Select 5 random questions from the pool, avoiding recently-seen ones
 * when possible. Implements the smart rotation logic.
 *
 * Algorithm:
 * 1. Split pool into "fresh" (not in recentIds) and "seen" questions.
 * 2. Take as many from "fresh" as available (up to 5).
 * 3. If fresh < 5, supplement with random "seen" questions.
 * 4. Return exactly 5 questions (or fewer if pool is small).
 */
export function selectQuizQuestions(
  moduleId: string,
  recentQuestionIds: string[]
): QuizQuestion[] {
  const pool = getQuizPool(moduleId);
  if (pool.length === 0) return [];

  const recentSet = new Set(recentQuestionIds);
  const freshQuestions = pool.filter(q => !recentSet.has(q.id));
  const seenQuestions = pool.filter(q => recentSet.has(q.id));

  const shuffled = (arr: QuizQuestion[]) => [...arr].sort(() => Math.random() - 0.5);

  const fresh = shuffled(freshQuestions);
  const seen = shuffled(seenQuestions);

  const selected: QuizQuestion[] = [];
  
  // Prefer fresh questions
  while (selected.length < 5 && fresh.length > 0) {
    selected.push(fresh.shift()!);
  }
  
  // Fill remainder with seen questions if needed
  while (selected.length < 5 && seen.length > 0) {
    selected.push(seen.shift()!);
  }

  return selected;
}

/**
 * Update the recent question IDs list after a quiz attempt.
 * Keeps a rolling window of last 35 question IDs.
 */
export function updateRecentQuestionIds(
  currentRecent: string[],
  newlySeenIds: string[]
): string[] {
  const combined = [...currentRecent, ...newlySeenIds];
  // Keep only the last 35 (so 5 fresh questions are always available from pool of 40)
  return combined.slice(-35);
}

/**
 * Generate a unique localStorage key for quiz progress.
 */
export function getQuizProgressKey(moduleId: string): string {
  return `crt_quiz_progress_${moduleId}`;
}

/**
 * Load quiz progress from localStorage for a module.
 */
export function loadQuizProgress(moduleId: string): CRTQuizProgress {
  const key = getQuizProgressKey(moduleId);
  const stored = localStorage.getItem(key);
  if (stored) {
    try {
      return JSON.parse(stored) as CRTQuizProgress;
    } catch {
      // Fall through to default
    }
  }
  return {
    moduleId,
    recentQuestionIds: [],
    attempts: [],
  };
}

/**
 * Save quiz progress to localStorage.
 */
export function saveQuizProgress(progress: CRTQuizProgress): void {
  const key = getQuizProgressKey(progress.moduleId);
  localStorage.setItem(key, JSON.stringify(progress));
}

/**
 * Get the best score across all attempts for a module.
 */
export function getBestScore(moduleId: string): number | null {
  const progress = loadQuizProgress(moduleId);
  if (progress.attempts.length === 0) return null;
  return Math.max(...progress.attempts.map(a => a.score));
}

/**
 * Get the most recent quiz attempt for a module.
 */
export function getLastAttempt(moduleId: string) {
  const progress = loadQuizProgress(moduleId);
  if (progress.attempts.length === 0) return null;
  return progress.attempts[progress.attempts.length - 1];
}

/**
 * Get the total number of attempts for a module.
 */
export function getAttemptCount(moduleId: string): number {
  const progress = loadQuizProgress(moduleId);
  return progress.attempts.length;
}

// Re-export individual year pools and mappings for convenience
export { YEAR1_QUIZ_POOLS, YEAR1_CATEGORY_TO_MODULE };
export { YEAR2_QUIZ_POOLS, YEAR2_CATEGORY_TO_MODULE };
export { YEAR3_QUIZ_POOLS, YEAR3_CATEGORY_TO_MODULE };
export { YEAR4_QUIZ_POOLS, YEAR4_CATEGORY_TO_MODULE };
