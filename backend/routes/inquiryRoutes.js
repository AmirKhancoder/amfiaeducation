const express = require('express');
const router = express.Router();
const { sendInquiryEmail } = require('../controllers/inquiryController');

router.post('/api/inquiry', async (req, res) => {
  try {
    const { name, phone, messageUser } = req.body;

    if (!name || !phone || !messageUser) {
      return res.status(400).json({ 
        error: 'Name and phone are required' 
      });
    }

    await sendInquiryEmail({ name, phone, messageUser });
    
    res.status(200).json({ 
      success: true, 
      message: 'Inquiry submitted successfully' 
    });
    
  } catch (error) {
    console.error('Inquiry submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit inquiry',
      error: error.message 
    });
  }
});

module.exports = router;