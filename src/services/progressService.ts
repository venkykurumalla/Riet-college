import { MaterialProgress, OverallProgress } from '../types';
import { COURSE_UNITS, getAllTopics } from '../data/aiToolsCourseData';

const STORAGE_KEY = 'riet_lms_ai_tools_progress_v2';

type Listener = () => void;

class ProgressService {
  private progressMap: Record<string, MaterialProgress> = {};
  private listeners: Listener[] = [];

  constructor() {
    this.loadProgress();
  }

  private loadProgress(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.progressMap = JSON.parse(stored);
      }
    } catch {
      this.progressMap = {};
    }
  }

  private saveProgress(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progressMap));
    } catch {
      // Ignore storage write errors
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

  public getTopicProgress(topicId: string): MaterialProgress {
    return (
      this.progressMap[topicId] || {
        topicId,
        status: 'not-started',
        completed: false,
        lastAccessed: ''
      }
    );
  }

  public markTopicAccessed(topicId: string): void {
    const current = this.getTopicProgress(topicId);
    if (!current.completed && current.status !== 'completed') {
      this.progressMap[topicId] = {
        ...current,
        status: 'in-progress',
        lastAccessed: new Date().toISOString()
      };
      this.saveProgress();
    }
  }

  public toggleTopicCompleted(topicId: string): boolean {
    const current = this.getTopicProgress(topicId);
    const nextCompleted = !current.completed;

    this.progressMap[topicId] = {
      topicId,
      status: nextCompleted ? 'completed' : 'in-progress',
      completed: nextCompleted,
      lastAccessed: new Date().toISOString()
    };

    this.saveProgress();
    return nextCompleted;
  }

  public getOverallProgress(): OverallProgress {
    const allTopics = getAllTopics();
    const totalTopics = allTopics.length;
    let completedTopics = 0;
    let inProgressTopics = 0;

    const unitProgress: Record<number, { total: number; completed: number; percentage: number }> = {};

    COURSE_UNITS.forEach(unit => {
      let unitCompleted = 0;
      unit.topics.forEach(topic => {
        const prog = this.getTopicProgress(topic.id);
        if (prog.completed || prog.status === 'completed') {
          unitCompleted++;
        }
      });
      unitProgress[unit.id] = {
        total: unit.topics.length,
        completed: unitCompleted,
        percentage: unit.topics.length > 0 ? Math.round((unitCompleted / unit.topics.length) * 100) : 0
      };
    });

    allTopics.forEach(topic => {
      const prog = this.getTopicProgress(topic.id);
      if (prog.completed || prog.status === 'completed') {
        completedTopics++;
      } else if (prog.status === 'in-progress') {
        inProgressTopics++;
      }
    });

    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    return {
      totalTopics,
      completedTopics,
      inProgressTopics,
      percentage,
      unitProgress
    };
  }

  public getAllProgress(): Record<string, MaterialProgress> {
    return { ...this.progressMap };
  }
}

export const progressService = new ProgressService();
