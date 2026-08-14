module.exports = (sequelize, Sequelize) => {
    const Cancion = sequelize.define('Cancion', {
        
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        artista: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INTEGER
        },
        extension: {
            type: Sequelize.STRING
        },
        album: {
            type: Sequelize.STRING
        },
        anioLanzamiento: {
            type: Sequelize.INTEGER
        },
        carnet:{
            type: Sequelize.STRING
        }

    });
    return Cancion;
};
    