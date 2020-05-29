const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var musiqueSchema = new Schema({
  title: String,
  duration: Number,
  artistes: [String],
});

module.exports = mongoose.model("Musique", musiqueSchema);