// const express = require('express');
// const router = express.Router();
// const { sendContactEmail } = require('../controllers/contactController');

// router.post('/api/contact', async (req, res) => {
//   try {
//     await sendContactEmail(req.body);
//     res.status(200).json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Email sending error:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Failed to send email',
//       error: error.message 
//     });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');
const { body, validationResult } = require('express-validator');

// Validation middleware
const validateContactForm = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  body('phone').optional().trim().isLength({ max: 20 }).withMessage('Phone number too long')
];

router.post('/api/contact', validateContactForm, async (req, res) => {
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
  const { name, email, phone, message } = req.body;
  const sanitizedData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone ? phone.trim() : '',
    message: message.trim()
  };

  try {
    // Send email
    await sendContactEmail(sanitizedData);
    
    // Success response
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Error response
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: process.env.NODE_ENV === 'development' 
        ? error.message 
        : 'Internal server error' 
    });
  }
});

// Health check endpoint
router.get('/api/contact/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;