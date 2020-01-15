const transport = require('../mailer/mail');

module.exports = {
  sendEmails: function(req, res){
      var mailOptions = {
        from: 'uni.fivs@gmail.com',
        to: 'fkabir101@gmail.com',
        subject: 'Portfolio Inquiry',
        text: `Contact:${req.body.email}\n\n Message:${req.body.message}`
      };
      transport.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.json((req.body));
  },

}