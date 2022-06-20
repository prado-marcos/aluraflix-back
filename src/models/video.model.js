const mongoose = require("mongoose");
const urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const videoSchema = new mongoose.Schema({
    categoriaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria",
        required: [true, "Categoria é obrigatório"],
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
        validate: [urlValidator, "URL inválida"],
    },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
