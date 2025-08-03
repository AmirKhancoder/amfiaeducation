// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// const sendClassDetails = async ({ name, grade, course, phone, city }) => {
//   const mailOptions = {
//     from: `"Contact Form" <${process.env.EMAIL_USER}>`,
//     to: process.env.RECEIVER_EMAIL,
//     subject: `New Contact from ${name}`,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Grade:</strong> ${grade}</p>
//        <p><strong>Course:</strong> ${course}</p>
//       <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
//       <p><strong>City:</strong></p>
//       <p>${city}</p>
//     `,
//     replyTo: process.env.RECEIVER_EMAIL
//   };

//   return transporter.sendMail(mailOptions);
// };

// module.exports = { sendClassDetails };



const nodemailer = require('nodemailer');

// Create transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendClassDetails = async ({ name, grade, course, phone, city }) => {
  try {
    const mailOptions = {
      from: `"KaifiYa Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Application: ${name} - ${course}`,
      html: `
        <h2>New Student Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <br/>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `,
      replyTo: process.env.EMAIL_USER
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send application email');
  }
};

module.exports = { sendClassDetails };