const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');

router.post('/api/contact', async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

module.exports = router;