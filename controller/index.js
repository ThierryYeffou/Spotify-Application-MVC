module.exports = (app) => { 
    app.controller = {
        musiques: require("./musiques")(app),
        users: require("./users")(app),
        artistes: require("./artistes")(app),
    };
};