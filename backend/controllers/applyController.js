const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const submitApplication = async ({ name, grade, course, phone, city }) => {
  // Email content for admin notification
  const adminMailOptions = {
    from: `"AmFia Applications" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Application: ${name} - ${course}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Student Application</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Student Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Grade:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${grade}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Course:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${course}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">City:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${city}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">This application was submitted through the AmFia Education website.</p>
      </div>
    `,
    replyTo: process.env.ADMIN_EMAIL
  };

  // Email content for student confirmation
  const studentMailOptions = {
    from: `"AmFia Education" <${process.env.EMAIL_USER}>`,
    to: process.env.TEST_MODE === 'true' ? process.env.ADMIN_EMAIL : phone + process.env.SMS_GATEWAY, // For actual SMS via email gateway
    subject: `Application Received - AmFia Education`,
    text: `Dear ${name},\n\nThank you for applying to AmFia Education's ${course} program for ${grade}. We have received your application and will contact you shortly.\n\nBest regards,\nAmFia Team`
  };

  // Send both emails
  await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(studentMailOptions)
  ]);

  // In a real application, you might also:
  // 1. Save to database
  // 2. Trigger CRM integration
  // 3. Send SMS notification
};

module.exports = { submitApplication };