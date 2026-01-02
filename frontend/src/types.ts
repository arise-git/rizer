// frontend/src/types.ts

export enum Page {
  HOME = 'HOME',
  FEATURES = 'FEATURES',
  AI_OPTIMIZER = 'AI_OPTIMIZER',
  DOWNLOAD = 'DOWNLOAD',
  FAQ = 'FAQ',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS'
}

export interface Stats {
  downloads: number;
  activeUsers: number;
  systemStability: string;
}