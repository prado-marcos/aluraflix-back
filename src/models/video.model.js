const mongoose = require("mongoose");
//
const Categoria = require("./categoria.model.js");
//
const urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const videoSchema = new mongoose.Schema({
    categoriaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoria",
        default: cadastrarCategoriaPadrao,
    },
    titulo: {
        type: String,
        maxlength: 100,
        required: [true, "Título é obrigatório"],
    },
    descricao: {
        type: String,
        maxlength: 1000,
        required: [true, "Descrição é obrigatório"],
    },
    url: {
        type: String,
        maxlength: 2000,
        match: [urlRegex, "URL é obrigatório"],
        required: [true, "URL inválida"],
    },
});

function cadastrarCategoriaPadrao() {
    const categoria = new Categoria();
    categoria.save();
    return categoria;
}

const Video = mongoose.model("video", videoSchema);

module.exports = Video;
