const router = require("express").Router();
module.exports = (app) =>{

    router.get("/", app.controller.musiques.getAll);
    router.post("/create", app.controller.musiques.create);
    router.post("/update", app.controller.musiques.update);
    router.post("/getById", app.controller.musiques.getById);
    router.post("/remove", app.controller.musiques.remove);

    return router;
}

