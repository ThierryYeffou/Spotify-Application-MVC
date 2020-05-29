
module.exports = (app) => { 
    app.use("/users", require("./users")(app));
    app.use("/musiques", require("./musiques")(app));
    app.use("/artistes", require("./artistes")(app));
}
