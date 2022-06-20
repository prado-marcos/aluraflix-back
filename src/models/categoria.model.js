const mongoose = require("mongoose");
const corRegex = /^#([0-9a-f]{3}){1,2}$/i;

require("../config/db.config.js");

const categoriaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        maxlength: 100,
        default: "Livre",
        required: [true, "Título é obrigatório"],
    },
    cor: {
        type: String,
        required: [true, "Cor é obrigatório"],
        match: [corRegex, "A cor deve estar em hexadecimal"],
    },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);
