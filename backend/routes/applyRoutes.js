const express = require('express');
const router = express.Router();
const { sendClassDetails } = require('../controllers/applyController');

router.post('/api/apply', async (req, res) => {
  try {
    const { name, grade, course, phone, city } = req.body;

    if (!name || !grade || !course || !phone || !city) {
      return res.status(400).json({ 
        error: 'All feild are required' 
      });
    }

    await sendClassDetails({ name, grade, course, phone, city });
    
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