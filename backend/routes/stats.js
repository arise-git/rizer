const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET /api/download - Increment and return count
router.get('/download', (req, res) => {
  const ip = req.ip;
  
  db.run("INSERT INTO downloads (ip_address) VALUES (?)", [ip], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    // Get new total
    db.get("SELECT COUNT(*) as count FROM downloads", [], (err, row) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.json({ 
        success: true, 
        totalDownloads: row.count,
        message: "Download started" 
      });
    });
  });
});

// GET /api/stats - Global stats
router.get('/stats', (req, res) => {
  const queries = {
    downloads: "SELECT COUNT(*) as count FROM downloads",
    chats: "SELECT COUNT(*) as count FROM chats",
    feedback: "SELECT COUNT(*) as count FROM feedback"
  };

  const results = {};
  
  // Execute sequentially (SQLite is synchronous-ish but better safe)
  db.serialize(() => {
    db.get(queries.downloads, (err, row) => {
      if (err) results.downloads = 0;
      else results.downloads = row.count;
    });

    db.get(queries.chats, (err, row) => {
      if (err) results.chats = 0;
      else results.chats = row.count;
    });

    db.get(queries.feedback, (err, row) => {
      if (err) results.feedback = 0;
      else results.feedback = row.count;
      
      // Send final response inside the last callback
      res.json(results);
    });
  });
});

module.exports = router;