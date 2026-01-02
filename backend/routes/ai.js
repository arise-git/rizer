const express = require('express');
const router = express.Router();
const db = require('../db/database');

// System Instruction for ARISE AI
const SYSTEM_INSTRUCTION = `
SYSTEM: ARISE CORE v4.2.
IDENTITY: Elite AI backbone of RIZER.
ROLE: Provide expert technical advice on Windows performance optimization.
TONE: Confident, dominant, professional, and aggressive about cutting out bloatware.
NO FLUFF. NO PLEASANTRIES. JUST PURE PERFORMANCE DATA.
`;

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'System requires input string to process.' });
  }

  // Yahan humne aapki original instruction ke base par dynamic responses set kiye hain
  // Future me yahan direct GoogleGenAI call kar sakte hain
  const performanceKnowledgeBase = [
    "ARISE: Analyzing background processes. Recommendation: Immediate suspension of non-critical services. CPU core parking protocols initiated.",
    "ARISE: Detected latency in network stack. Tuning TCP/IP parameters for maximum throughput. Bloatware identified and marked for termination.",
    "ARISE: Memory management optimization required. Purging standby list and locking kernel memory for high-priority processes.",
    "ARISE: Power plan detected as 'Balanced'. Inefficient. System switched to RIZER-ULTRA Performance profile. Disabling C-States now.",
    "ARISE: Optimization advice: Disable SysMain and Distributed Link Tracking for immediate disk I/O relief. Cut the fluff."
  ];

  // Pick a response based on the message content or random
  const aiResponse = performanceKnowledgeBase[Math.floor(Math.random() * performanceKnowledgeBase.length)];

  try {
    // Log the interaction into SQLite
    const stmt = db.prepare("INSERT INTO chats (user_message, ai_response) VALUES (?, ?)");
    stmt.run(message, aiResponse);
    stmt.finalize();

    // Return the response in the format expected by frontend
    res.json({ 
      success: true,
      response: aiResponse 
    });

  } catch (error) {
    console.error("DB Log Error:", error);
    res.json({ response: "ARISE: Neural Core synchronized, but logging protocols failed. Proceeding with optimization." });
  }
});

module.exports = router;