import { CRTTopicProgress, CRTYearProgress, CRTYearId } from '../types/crtTypes';
import { getCRTTopicsByYear, getAllCRTTopics } from '../data/crtCourseData';

const CRT_STORAGE_KEY = 'riet_lms_crt_progress_v1';

type Listener = () => void;

class CRTProgressService {
  private progressMap: Record<string, CRTTopicProgress> = {};
  private listeners: Listener[] = [];

  constructor() {
    this.loadProgress();
  }

  private loadProgress(): void {
    try {
      const stored = localStorage.getItem(CRT_STORAGE_KEY);
      if (stored) {
        this.progressMap = JSON.parse(stored);
      }
    } catch {
      this.progressMap = {};
    }
  }

  private saveProgress(): void {
    try {
      localStorage.setItem(CRT_STORAGE_KEY, JSON.stringify(this.progressMap));
    } catch {
      // Storage error handling
    }
    this.notifyListeners();
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(l => l());
  }

  public getTopicProgress(topicId: string, yearId: CRTYearId): CRTTopicProgress {
    return (
      this.progressMap[topicId] || {
        topicId,
        yearId,
        status: 'not-started',
        completed: false,
        lastAccessed: ''
      }
    );
  }

  public markTopicAccessed(topicId: string, yearId: CRTYearId): void {
    const current = this.getTopicProgress(topicId, yearId);
    if (!current.completed && current.status !== 'completed') {
      this.progressMap[topicId] = {
        ...current,
        status: 'in-progress',
        lastAccessed: new Date().toISOString()
      };
      this.saveProgress();
    }
  }

  public toggleTopicCompleted(topicId: string, yearId: CRTYearId): boolean {
    const current = this.getTopicProgress(topicId, yearId);
    const nextCompleted = !current.completed;

    this.progressMap[topicId] = {
      topicId,
      yearId,
      status: nextCompleted ? 'completed' : 'in-progress',
      completed: nextCompleted,
      lastAccessed: new Date().toISOString()
    };

    this.saveProgress();
    return nextCompleted;
  }

  public getYearProgress(yearId: CRTYearId): CRTYearProgress {
    const yearTopics = getCRTTopicsByYear(yearId);
    const totalTopics = yearTopics.length;
    let completedTopics = 0;
    let inProgressTopics = 0;

    yearTopics.forEach(topic => {
      const prog = this.getTopicProgress(topic.id, yearId);
      if (prog.completed || prog.status === 'completed') {
        completedTopics++;
      } else if (prog.status === 'in-progress') {
        inProgressTopics++;
      }
    });

    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    return {
      yearId,
      totalTopics,
      completedTopics,
      inProgressTopics,
      percentage
    };
  }

  public getAllYearsProgress(): Record<CRTYearId, CRTYearProgress> {
    return {
      1: this.getYearProgress(1),
      2: this.getYearProgress(2),
      3: this.getYearProgress(3),
      4: this.getYearProgress(4)
    };
  }

  public getOverallCRTProgress(): {
    totalTopics: number;
    completedTopics: number;
    percentage: number;
  } {
    const allTopics = getAllCRTTopics();
    const totalTopics = allTopics.length;
    let completedTopics = 0;

    allTopics.forEach(topic => {
      const prog = this.getTopicProgress(topic.id, topic.yearId);
      if (prog.completed || prog.status === 'completed') {
        completedTopics++;
      }
    });

    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    return {
      totalTopics,
      completedTopics,
      percentage
    };
  }

  public getAllProgress(): Record<string, CRTTopicProgress> {
    return { ...this.progressMap };
  }
}

export const crtProgressService = new CRTProgressService();
