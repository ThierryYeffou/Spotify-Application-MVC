
const express = require("express");
const app = express();
const port =3000;
const mongoose = require("mongoose");

require("./database")(app);
require("./model")(app);

//musiques
const Musique = app.models.Musique;
     let musique = new Musique({
         title : "Soif de toi",
         duration : 3.55,
         artistes : ["Jean Jean", "NGUEN Dressaire"],
     })
musique.save();


//users
const User = app.models.User;
     let user = new User({
        nom : "Thierry",
        prenom : "YEFFOU",
        email : "yeffouthierry@gmail.com",
        motDePasse : "titi1474",
        url : "amazonafrika.com",
        label : "thanks",
        dateNaissance : new Date("1994-03-25"),
     })
user.save();

//artiste
const Artiste = app.models.Artiste;
     let artiste = new Artiste({
        nom : "Thierry",
        prenom : "YEFFOU",
        label : "yopayoph",
        tag : ["titi","pierre"]
     })
artiste.save();

 var bodyParser = require("body-parser");
 app.use(bodyParser.json());

require("./controller")(app);

require("./routes")(app);

app.listen(port,()=> console.log(`example app listening on port ${port} ! `));
