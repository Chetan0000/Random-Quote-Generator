const nodemailer = require('nodemailer');
const cron = require('node-cron');
const USER  = require('../models/user');
const QUOTE = require('../models/quotes');
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    
    auth: {
      user: 'cryptictheoneyouneed@gmail.com',
      pass: 'vuss ygjk hjko nfey',
    },
});



// const mailOptions = {
//     from: '"Cryptic" cryptictheoneyouneed@gmail.com',
//     to: 'recipient@example.com',
//     subject: 'Test Email',
//     text: 'This is a test email sent from Node.js.',
//     attachments: [
//         {
            
//         },
//     ],
// };



// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
// });


// cron.schedule('0 9 * * *', () => {
//     sendEmail();
  
//     let find = USER.find({});
//     console.log(find);

// });

async function sendmail(){
  let find = await USER.find({});
  let findQuote = await QUOTE.find({});
        const length = findQuote.length;
        const number = Math.floor(Math.random() * length);
        let data = findQuote[number];
        let body = data.body;
        let by = data.by;
  for(let i = 0 ;i<find.length;i++){
    
    console.log(find[i].email);
    
    const mailOptions = {
      from: '"Cryptic" cryptictheoneyouneed@gmail.com',
      to: find[i].email,
      subject: 'Test Email',
      text: body,
      // attachments: [
      //     {
              
      //     },
      // ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }

  console.log('check');
}

// sendmail();

cron.schedule('1 * * * *', () => {
    sendmail();
    console.log('check');
});



