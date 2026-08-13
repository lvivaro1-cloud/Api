module.exports = app => {
    const canciones = require("../controllers/cancion.controller.js");
    var router = require("express").Router();

    router.post("/", canciones.create);
    router.get("/", canciones.findAll);
    router.put("/:id", canciones.update);
    router.delete("/:id", canciones.delete);

    app.use('/canciones', router);

};
