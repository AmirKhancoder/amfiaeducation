const express = require('express');
const router = express.Router();
const { sendRegistration } = require('../controllers/registrationController');


router.get('/test-email', async (req, res) => {
    try {
      await sendRegistration({
        name: "Test User",
        email: process.env.ADMIN_EMAIL,
        course: "Test Course",
        grade: "10th",
        phone: "9876543210",
        city: "Test City"
      });
      res.send("Test email sent successfully");
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  });

router.post('/api/register', async (req, res) => {
  try {
    const { name, grade, course, phone, email, city} = req.body;

    // Validate required fields
    if (!name || !grade || !course || !phone || !email || !city) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      });
    }

    // Send email with application details
    await sendRegistration({ name, grade, course, phone, email, city});
    
    res.status(200).json({ 
      success: true, 
      message: 'Registration successful! Confirmation email sent..' 
    });
    
  } catch (error) {
    console.error('Application submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Failed to submit application',
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

module.exports = router;