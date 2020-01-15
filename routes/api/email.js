const router = require("express").Router();
const emailController = require("../../controller/emailController");
router.route("/")
  .post(emailController.sendEmails);
module.exports = router;