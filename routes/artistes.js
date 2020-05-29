const router = require("express").Router();
module.exports = (app) =>{

router.get("/", app.controller.artistes.getAll);
router.post("/create", app.controller.artistes.create);
router.post("/update", app.controller.artistes.update);
router.post("/getById", app.controller.artistes.getById);
router.post("/remove", app.controller.artistes.remove);

return router;
}

