require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const apiLimiter = require('./middleware/limiter');

// Routes
const aiRoutes = require('./routes/ai');
const statsRoutes = require('./routes/stats');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
    methods: ['GET', 'POST']
}));
app.use(express.json());
app.use('/api', apiLimiter); // Apply rate limiting to all API routes

// Route Registration
app.use('/api/ai', aiRoutes);
app.use('/api', statsRoutes); // Mounts /download and /stats
app.use('/api/feedback', feedbackRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'RIZER-Backend' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});