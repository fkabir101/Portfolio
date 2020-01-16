const transport = require('../mailer/mail');

module.exports = {
  sendEmails: function(req, res){
    console.log("gets");
    res.json((req.body));
  }
}