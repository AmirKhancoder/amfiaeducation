const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendClassDetails = async ({ name, grade, course, phone, city }) => {
  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Grade:</strong> ${grade}</p>
       <p><strong>Course:</strong> ${course}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>City:</strong></p>
      <p>${city}</p>
    `,
    replyTo: email
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendClassDetails };