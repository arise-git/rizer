const express = require('express');
const router = express.Router();
const db = require('../db/database');

// POST /api/feedback
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!message || !email) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  const stmt = db.prepare("INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)");
  stmt.run(name, email, message, function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to save feedback' });
    }
    res.json({ success: true, message: "Feedback received" });
  });
  stmt.finalize();
});

module.exports = router;