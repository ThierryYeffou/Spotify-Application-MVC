module.exports = (app) => { 
    app.models = {
        Musique: require("./musiques.js"),
        User:require("./users.js"),
        Artiste:require("./artistes.js"),
    };
};