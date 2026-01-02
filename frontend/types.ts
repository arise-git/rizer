
export enum Page {
  HOME = 'home',
  FEATURES = 'features',
  AI_OPTIMIZER = 'ai_optimizer',
  DOWNLOAD = 'download',
  FAQ = 'faq',
  PRIVACY = 'privacy',
  TERMS = 'terms'
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface PerformanceMetric {
  name: string;
  stock: number;
  rizer: number;
}

export interface FeedbackData {
  name: string;
  email: string;
  message: string;
}

export interface Stats {
  downloads: number;
  activeUsers: number;
  totalOptimizations: number;
}
