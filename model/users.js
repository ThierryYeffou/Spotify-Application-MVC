const mongoose = require("mongoose");
var Schema = mongoose.Schema;

    var userSchema = new Schema({
        nom : String,
        prenom : String,
        email : String,
        motDePasse : String,
        url : String,
        label : String,
        dateNaissance : Date
    });

    module.exports = mongoose.model("User", userSchema);