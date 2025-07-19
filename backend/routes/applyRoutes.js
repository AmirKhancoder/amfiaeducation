const express = require('express');
const router = express.Router();
const { submitApplication } = require('../controllers/applyController');
const { body, validationResult } = require('express-validator');

// Validation middleware
const validateApplication = [
  body('name').trim().notEmpty().withMessage('Student name is required'),
  body('grade').not().equals('Select Grade').withMessage('Please select a grade'),
  body('course').not().equals('Select Course').withMessage('Please select a course'),
  body('phone').trim().notEmpty().withMessage('Phone number is required')
    .isLength({ min: 10, max: 15 }).withMessage('Phone number must be 10-15 digits'),
  body('city').trim().notEmpty().withMessage('City is required')
];

router.post('/api/apply', validateApplication, async (req, res) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false, 
      message: 'Validation failed',
      errors: errors.array() 
    });
  }

  // Sanitize input
  const { name, grade, course, phone, city } = req.body;
  const sanitizedData = {
    name: name.trim(),
    grade: grade.trim(),
    course: course.trim(),
    phone: phone.trim(),
    city: city.trim()
  };

  try {
    // Submit application
    await submitApplication(sanitizedData);
    
    // Success response
    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully!' 
    });
  } catch (error) {
    console.error('Application submission error:', error);
    
    // Error response
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit application',
      error: process.env.NODE_ENV === 'development' 
        ? error.message 
        : 'Internal server error' 
    });
  }
});

// Health check endpoint
router.get('/api/apply/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Application Service'
  });
});

module.exports = router;