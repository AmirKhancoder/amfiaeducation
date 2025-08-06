// const Razorpay = require('razorpay');
// const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

// const razorpay = new Razorpay({
//   key_id: RAZORPAY_KEY_ID,
//   key_secret: RAZORPAY_KEY_SECRET
// });

// const createOrder = async (amount) => {
//   const options = {
//     amount: amount * 100, // Convert to paise
//     currency: 'INR',
//     receipt: `receipt_${Date.now()}`
//   };
  
//   return razorpay.orders.create(options);
// };

// module.exports = {
//   createOrder
// };


const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Helper function to create orders
const createOrder = async (amount) => {
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}` // Unique receipt ID
    });
    return order;
  } catch (err) {
    throw new Error(`Razorpay order creation failed: ${err.message}`);
  }
};

module.exports = {
  razorpay,
  createOrder
};