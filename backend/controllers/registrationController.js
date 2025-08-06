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



// const nodemailer = require('nodemailer');

// // Configure transporter with better error handling
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// // Verify connection on startup
// transporter.verify((error) => {
//   if (error) {
//     console.error('Email server connection error:', error);
//   } else {
//     console.log('Email server is ready');
//   }
// });

// const sendRegistration = async ({ name, father, mother, grade, course, phone, email, city, refrence, refrenceSt }) => {
//   try {
//     // Validate email configuration
//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       throw new Error('Email service not configured');
//     }

//     const mailOptions = {
//       from: `"Amfia Education" <${process.env.EMAIL_USER}>`,
//       to: email, // Send to student AND admin
//       bcc: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Blind copy to admin
//       subject: `Registration Confirmation: ${name} - ${course}`,
//       html: `
//         <h2>Registration Confirmation</h2>
//         <p>Dear ${name},</p>
//         <p>Thank you for joining Amfia Education!</p>
//         <p>We're excited to begin this learning journey with your child.<p/>
        
//         <h3>Your Details:</h3>
//         <ul>
//           <li><strong>Name:</strong> ${name}</li>
//            <li><strong>Name:</strong> ${father}</li>
//             <li><strong>Name:</strong> ${mother}</li>
//           <li><strong>Grade:</strong> ${grade}</li>
//           <li><strong>Course:</strong> ${course}</li>
//           <li><strong>Phone:</strong> ${phone}</li>
//           <li><strong>Email:</strong> ${email}</li>
//           <li><strong>City:</strong> ${city}</li>
//            <li><strong>Name:</strong> ${refrence}</li>
//             <li><strong>Name:</strong> ${refrenceSt}</li>
//         </ul>
        
//        <p>If you have any questions or need help, feel free to contact us anytime.<p/>
//        <ul>
//        <li><strong>Email:</strong> <a>contact@amfiaeducation.com<a/> </li>
//        <li><strong>Phone:</strong> <a>6392492293<a/> </li>
//        <li><strong>Website:</strong> <a>www.amfiaeducation.com<a/> </li>
//        <ul/>

//         <p>We will contact you shortly with further details.</p>
//         <p>Best regards,<br/>Amfia Education Team</p>


//         <p>This is an automated email confirmation. Please do not reply to this message.<p/>
//       `
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.messageId);
//     return info;
//   } catch (error) {
//     console.error('Email sending failed:', error);
//     throw new Error('Failed to send confirmation email. Please contact support.');
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

const sendRegistration = async ({ name, father, mother, grade, course, phone, email, city, refrence, refrenceSt }) => {
  try {
    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email service not configured');
    }

    const mailOptions = {
      from: `"Amfia Education" <${process.env.EMAIL_USER}>`,
      to: email,
      bcc: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `Registration Confirmation: ${name} - ${course}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: #f7f9fc;
            color: #333;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #3f51b5, #2196f3);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px;
          }
          .greeting {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .details-box {
            background: #f8f9fa;
            border-left: 4px solid #3f51b5;
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
          }
          .details-title {
            color: #2c3e50;
            font-size: 18px;
            margin-top: 0;
            margin-bottom: 15px;
            font-weight: 600;
          }
          .details-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .details-list li {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }
          .details-list li:last-child {
            border-bottom: none;
          }
          strong {
            color: #3f51b5;
            display: inline-block;
            width: 120px;
          }
          .contact-info {
            margin-top: 30px;
            padding: 20px;
            background: #f1f8fe;
            border-radius: 8px;
          }
          .contact-info a {
            color: #2196f3;
            text-decoration: none;
          }
          .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #777;
            background: #f5f5f5;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 20px;
            }
            strong {
              display: block;
              width: auto;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h2>Welcome to Amfia Education!</h2>
          </div>
          
          <div class="content">
            <p class="greeting">Dear ${name},</p>
            <p>Thank you for registering with Amfia Education! We're excited to have you join our learning community.</p>
            
            <div class="details-box">
              <h3 class="details-title">Registration Details</h3>
              <ul class="details-list">
                <li><strong>Student Name:</strong> ${name}</li>
                <li><strong>Father's Name:</strong> ${father}</li>
                <li><strong>Mother's Name:</strong> ${mother}</li>
                <li><strong>Grade:</strong> ${grade}</li>
                <li><strong>Course:</strong> ${course}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>City:</strong> ${city}</li>
                <li><strong>Reference:</strong> ${refrence}</li>
                <li><strong>Reference Student:</strong> ${refrenceSt}</li>
              </ul>
            </div>
            
            <p>Our team will contact you shortly with further details about your course and schedule.</p>
            
            <div class="contact-info">
              <h3>Need Help?</h3>
              <p>Feel free to reach out to us:</p>
              <ul class="details-list">
                <li><strong>Email:</strong> <a href="mailto:contact@amfiaeducation.com">contact@amfiaeducation.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:6392492293">6392492293</a></li>
                <li><strong>Website:</strong> <a href="https://www.amfiaeducation.com">www.amfiaeducation.com</a></li>
              </ul>
            </div>
            
            <p>Best regards,<br>
            <strong>The Amfia Education Team</strong></p>
          </div>
          
          <div class="footer">
            <p>This is an automated message. Please do not reply directly to this email.</p>
            <p>&copy; ${new Date().getFullYear()} Amfia Education. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
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
