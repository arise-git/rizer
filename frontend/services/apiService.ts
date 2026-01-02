
import { Stats, FeedbackData } from '../types';

// Mock database in localStorage
const STORAGE_KEY = 'rizer_mock_db';

const getDb = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    const initial = {
      downloads: 42891,
      activeUsers: 12402,
      totalOptimizations: 859321,
      feedback: []
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(data);
};

const saveDb = (db: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
};

export const apiService = {
  getStats: async (): Promise<Stats> => {
    // Simulate API latency
    await new Promise(r => setTimeout(r, 600));
    const db = getDb();
    return {
      downloads: db.downloads,
      activeUsers: db.activeUsers,
      totalOptimizations: db.totalOptimizations
    };
  },

  trackDownload: async (): Promise<number> => {
    const db = getDb();
    db.downloads += 1;
    saveDb(db);
    return db.downloads;
  },

  submitFeedback: async (data: FeedbackData): Promise<boolean> => {
    const db = getDb();
    db.feedback.push({ ...data, timestamp: Date.now() });
    saveDb(db);
    return true;
  }
};
