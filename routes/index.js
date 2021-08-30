const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

router.post("/send", (req, res) => {
  const data = req.body;
  //console.log(data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.email,
    to: process.env.MAIL,
    subject: "Nova poruka od: " + data.email,
    text: data.message + "\n" + data.name,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error sending mail");
    } else {
      //console.log("success");
      res.send("success");
    }
  });
});

module.exports = router;
