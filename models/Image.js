const mongoose = require("mongoose");
const { Schema } = mongoose;

const imagesSchema = new Schema({
  title: String,
  description: String,
  painted_at: String,
  technique: String,
  path_to_file: String
});

const Image = new mongoose.model("Image", imagesSchema);

module.exports = Image;