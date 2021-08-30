const express = require("express");
const Image = require("../models/Image.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const images = await Image.find();
  //console.log(images);
  res.send(images);
});

module.exports = router;
