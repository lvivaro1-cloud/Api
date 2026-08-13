const express = require('express');
const cors = require('cors');

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
    .then(() => {
        console.log("Base de datos sincronizada");
    })
    .catch((err) => {
        console.error("Error al sincronizar la base de datos:", err.message);
    });

    app.get("/", (req, res) => {
        res.json({ message: "Bienvenido a la Api." });
    });
    require("./app/routes/cancion.routes")(app);
    const PORT = process.env.PORT || 8081;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}.`);
    });