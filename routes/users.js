const router = require("express").Router();
module.exports = (app) =>{

    router.get("/", app.controller.users.getAll);
    router.post("/create", app.controller.users.create);
    router.post("/update", app.controller.users.update);
    router.post("/getById", app.controller.users.getById);
    router.post("/remove", app.controller.users.remove);

    return router;
}

