const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    id: { type: String },
    titulo: {
        type: String,
        maxlength: 70,
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
        required: [true, "URL é obrigatório"],
        validate: [urlValidator, "URL inválida"],
    },
});

function urlValidator(url) {
    urlRegex =
        /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(url);
}

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
