const nodemailer = require('nodemailer');

// Reuse the existing transporter or create new if different config needed
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendInquiryEmail = async ({ name, phone, messageUser }) => {
  const mailOptions = {
    from: `"Quick Inquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Quick Inquiry from ${name}`,
    html: `
      <h2>New Quick Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Phone:</strong> ${messageUser}</p>
      <p>Received at: ${new Date().toLocaleString()}</p>
    `,
    replyTo: process.env.EMAIL_USER // Since no email provided
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendInquiryEmail };