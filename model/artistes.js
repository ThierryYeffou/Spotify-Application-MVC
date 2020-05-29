const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var artisteSchema = new Schema({
    nom : String,
    prenom : String,
    label : String,
    tag : [String],
});

var Artiste = module.exports = mongoose.model("Artiste", artisteSchema);