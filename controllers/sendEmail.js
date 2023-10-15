const nodemailer = require('nodemailer');
const cron = require('node-cron');

const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider', // e.g., 'Gmail'
    auth: {
      user: 'your_email_address',
      pass: 'your_email_password',
    },
});



const mailOptions = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js.',
    attachments: [
        {
            filename: fileName,
            path: fileName,
        },
    ],
};



transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
});


cron.schedule('0 9 * * *', () => {
    sendEmail();
});