// const nodemailer = require('nodemailer');

// // Create transporter for nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// const sendRegistration = async ({ name, grade, course, phone, email, city, password, confirmPassword}) => {
//   try {
//     const mailOptions = {
//       from: `"KaifiYa Academy" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Application: ${name} - ${course}`,
//       html: `
//         <h2>New Student Application</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Grade:</strong> ${grade}</p>
//         <p><strong>Course:</strong> ${course}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Phone:</strong> ${email}</p>
//         <p><strong>City:</strong> ${city}</p>
//          <p><strong>City:</strong> ${password}</p>
//         <br/>
//         <p>Submitted at: ${new Date().toLocaleString()}</p>
//       `,
//       replyTo: process.env.EMAIL_USER
//     };

//     await transporter.sendMail(mailOptions);
//     return { success: true };
//   } catch (error) {
//     console.error('Email sending error:', error);
//     throw new Error('Failed to send application email');
//   }
// };

// module.exports = { sendRegistration };



const nodemailer = require('nodemailer');

// Configure transporter with better error handling
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('Email server connection error:', error);
  } else {
    console.log('Email server is ready');
  }
});

const sendRegistration = async ({ name, grade, course, phone, email, city }) => {
  try {
    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email service not configured');
    }

    const mailOptions = {
      from: `"KaifiYa Academy" <${process.env.EMAIL_USER}>`,
      to: email, // Send to student AND admin
      bcc: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Blind copy to admin
      subject: `Registration Confirmation: ${name} - ${course}`,
      html: `
        <h2>Registration Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Thank you for registering with KaifiYa Academy!</p>
        
        <h3>Your Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Grade:</strong> ${grade}</li>
          <li><strong>Course:</strong> ${course}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>City:</strong> ${city}</li>
        </ul>
        
        <p>We will contact you shortly with further details.</p>
        <p>Best regards,<br/>KaifiYa Academy Team</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send confirmation email. Please contact support.');
  }
};

module.exports = { sendRegistration };