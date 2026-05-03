const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendContactEmail = async ({ name, email, phone, message }) => {
  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    replyTo: email
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };