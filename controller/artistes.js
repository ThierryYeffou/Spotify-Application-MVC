const mongoose = require("mongoose");
module.exports = (app) => { 
   
   var Artiste = app.models.Artiste;

   
    function getAll(req,res){
       
       Artiste.find({}, function (err, artiste) {
            if (err) return handleError(err);
            res.send(artiste);
          });
    }

    function create(req,res){
        Artiste.create(req.body, function (err, newArtiste) {
            res.send(newArtiste);
        });
       
    }

    function update(req,res){
        Artiste.findByIdAndUpdate(req.body.id, {$set: req.body}, function (err, artiste) {
            if (err) return next(err);
            console.log(artiste);
            res.send(artiste);
        });
    }

    function getById(req,res){
        Artiste.findById(req.body.id, function (err, artiste) {
            if (err) return handleError(err);
            res.send(artiste);
          });
    }

    function remove(req,res){
        Artiste.findByIdAndRemove(req.body.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    }
    
    return {getAll,create,update,getById,remove};
};