import axios from "axios";

export default {
  sendMail: function (mailData){
    //return axios.post('/api/email', mailData);
    alert(mailData.email + "   " + mailData.message);
  }
}
