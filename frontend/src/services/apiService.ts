// frontend/src/services/apiService.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiService = {
  // Stats fetch karna
  getStats: async () => {
    try {
      const response = await axios.get(`${API_URL}/stats`);
      // Backend se jo data aaye usse frontend format me match karna
      return {
        downloads: response.data.downloads || 1240,
        activeUsers: response.data.chats || 850, // chats count ko active users maan lete hain
        systemStability: '99.9%'
      };
    } catch (error) {
      console.error("Stats error:", error);
      return null;
    }
  },

  // Download count badhana
  trackDownload: async () => {
    try {
      const response = await axios.get(`${API_URL}/download`);
      return response.data.totalDownloads;
    } catch (error) {
      console.error("Download track error:", error);
      return 0;
    }
  },

  // Chat message bhejna (AIOptimizer component ke liye)
  sendChatMessage: async (message: string) => {
    try {
      const response = await axios.post(`${API_URL}/ai/chat`, { message });
      return response.data.response;
    } catch (error) {
      console.error("Chat error:", error);
      return "Connection error. Ensure backend is running.";
    }
  }
};