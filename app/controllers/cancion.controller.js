const db = require("../models");
const Cancion = db.canciones;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "El nombre de la canción no puede estar vacio"
        });
        return;
    }

    const cancion = {
        
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        artista: req.body.artista,
        duracion: req.body.duracion,
        extension: req.body.extension,
        album: req.body.album,
        anioLanzamiento: req.body.anioLanzamiento,
        carnet: req.body.carnet
    };

    Cancion.create(cancion)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear la cancion."
            });
        });

};   

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

        Cancion.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las canciones."
            });
        });

    };

    // put
    exports.update = (req, res) => {
        const id = req.params.id;

        Cancion.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "La cancion fue actualizada correctamente."
                    });
                }else {
                    res.send({
                        message: `No se puede actualizar la cancion con id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error al actualizar la cancion con id=" + id
                });
            });

    };

    //delete
    exports.delete = (req, res) => {
        const id = req.params.id;

        Cancion.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({ message: "La cancion fue eliminada correctamente" });
            } else {
                res.send({ message: `No se puede eliminar la cancion con id=${id}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la cancion con id=" + id
            });
        });

    };

    