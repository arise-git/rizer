import axios from 'axios';

// Access env variable or default to localhost
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  // AI Chat
  sendChatMessage: async (message: string) => {
    try {
      const response = await apiClient.post('/ai/chat', { message });
      return response.data; // Returns { response: "..." }
    } catch (error) {
      console.error('Chat API Error:', error);
      throw error;
    }
  },

  // Trigger Download & Count
  triggerDownload: async () => {
    try {
      const response = await apiClient.get('/download');
      return response.data; // Returns { success: true, totalDownloads: N }
    } catch (error) {
      console.error('Download API Error:', error);
      throw error;
    }
  },

  // Get Global Stats
  getStats: async () => {
    try {
      const response = await apiClient.get('/stats');
      return response.data; // Returns { downloads: N, chats: N, feedback: N }
    } catch (error) {
      console.error('Stats API Error:', error);
      return { downloads: 0, chats: 0, feedback: 0 }; // Fallback
    }
  },

  // Send Feedback
  sendFeedback: async (data: { name: string; email: string; message: string }) => {
    try {
      const response = await apiClient.post('/feedback', data);
      return response.data;
    } catch (error) {
      console.error('Feedback API Error:', error);
      throw error;
    }
  }
};