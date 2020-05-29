module.exports = (app) => { 
    let users = require("../users.json");

    var User = app.models.User;

    function getAll(req,res){
        User.find({}, function (err, user) {
            if (err) return handleError(err);
            res.send(user);
          });
    }

    function create(req,res){
        User.create(req.body, function (err, newUser) {
            res.send(newUser);
        });
    }

    function update(req,res){
        User.findByIdAndUpdate(req.body.id, {$set: req.body}, function (err, user) {
            if (err) return next(err);
            res.send(user);
        });
    }

    function getById(req,res){
        User.findById(req.body.id, function (err, user) {
            if (err) return handleError(err);
            res.send(user);
          });
    }

    function remove(req,res){
        User.findByIdAndRemove(req.body.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
     }
    

    return {getAll,create,update,getById,remove};
};