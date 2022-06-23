const express = require("express");
const routes = require("./routes/index.js");
const db = require("./config/db.config.js");

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();

routes(app);

module.exports = app;
