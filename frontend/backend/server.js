require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const contactRoutes = require('./routes/contactRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const applyRoutes = require('./routes/applyRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();
const PORT = process.env.PORT || 5002;

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'www.amfiaeducation.com', 'https://www.amfiaeducation.com'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Routes
app.use(contactRoutes);
app.use(inquiryRoutes);
app.use(applyRoutes);
app.use(registrationRoutes);

// Razorpay Routes
app.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt_email } = req.body;

    const options = {
      amount: amount * 100,
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        customer_email: receipt_email
      }
    };

    const order = await razorpay.orders.create(options);
    
    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        key: process.env.RAZORPAY_KEY_ID
      }
    });
  } catch (error) {
    console.error('Order creation failed:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const contactRoutes = require('./routes/contactRoutes');
// const inquiryRoutes = require('./routes/inquiryRoutes');
// const applyRoutes = require('./routes/applyRoutes')

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'www.amfiaeducation.com', 'https://www.amfiaeducation.com'],
//   // methods: ['POST', 'OPTIONS'],
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type']
// }));
// app.use(express.json());

// // Routes
// app.use(contactRoutes);
// app.use(inquiryRoutes);
// app.use(applyRoutes);

// // Error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const contactRoutes = require('./routes/contactRoutes');
// const inquiryRoutes = require('./routes/inquiryRoutes');
// const applyRoutes = require('./routes/applyRoutes');
// const registrationRoutes = require('./routes/registrationRoutes'); // New route

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'www.amfiaeducation.com', 'https://www.amfiaeducation.com'],
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type']
// }));
// app.use(express.json());

// // Routes
// app.use(contactRoutes);
// app.use(inquiryRoutes);
// app.use(applyRoutes);
// // app.use('/api/register', registrationRoutes); // New registration route

// // Error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// after razorpay integration

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const Razorpay = require('razorpay');
// const contactRoutes = require('./routes/contactRoutes');
// const inquiryRoutes = require('./routes/inquiryRoutes');
// const applyRoutes = require('./routes/applyRoutes');
// const registrationRoutes = require('./routes/registrationRoutes')
// // const registrationRoutes = require('./routes/registrationRoutes');

// const app = express();
// const PORT = process.env.PORT || 5002;

// // Initialize Razorpay
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET
// });

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'www.amfiaeducation.com', 'https://www.amfiaeducation.com'],
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type']
// }));
// app.use(express.json());

// // Existing Routes
// app.use(contactRoutes);
// app.use(inquiryRoutes);
// app.use(applyRoutes);
// app.use(registrationRoutes);
// // app.use('/api/register', registrationRoutes);

// // Razorpay Routes
// app.post('/create-order', async (req, res) => {
//   try {
//     const { amount, currency = 'INR', receipt_email } = req.body;

//     const options = {
//       amount: amount * 100, // Convert to paise
//       currency,
//       receipt: `receipt_${Date.now()}`,
//       notes: {
//         customer_email: receipt_email
//       }
//     };

//     const order = await razorpay.orders.create(options);
    
//     res.json({
//       success: true,
//       order: {
//         id: order.id,
//         amount: order.amount,
//         currency: order.currency,
//         key: process.env.RAZORPAY_KEY_ID // Public key only
//       }
//     });
//   } catch (error) {
//     console.error('Order creation failed:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// app.post('/verify-payment', (req, res) => {
//   // Implement HMAC verification here
//   // See Razorpay docs: https://razorpay.com/docs/webhooks/
//   res.json({ status: 'Webhook verification will be implemented here' });
// });

// // Error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });