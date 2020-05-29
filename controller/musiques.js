const mongoose = require("mongoose");
module.exports = (app) => { 
   
   var Musique = app.models.Musique;

    function getAll(req,res){
       Musique.find({}, function (err, mus) {
            if (err) return handleError(err);
            res.send(mus);
          });
    }

    function create(req,res){
        Musique.create(req.body, function (err, newMusic) {
            res.send(newMusic);
        });
       
    }

    function update(req,res){
            Musique.findByIdAndUpdate(req.body.id, {$set: req.body}, function (err, mus) {
            if (err) return next(err);
            res.send(mus);
        });
    }

    function getById(req,res){
        Musique.findById(req.body.id, function (err, mus) {
            if (err) return handleError(err);
            res.send(mus);
          });
    }

    function remove(req,res){
        Musique.findByIdAndRemove(req.body.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    }
    
    return {getAll,create,update,getById,remove};
};