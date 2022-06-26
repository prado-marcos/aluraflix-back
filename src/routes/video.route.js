const express = require("express");
const VideoController = require("../controllers/video.controller.js");

const router = express.Router();

router
    .get("/videos/search", VideoController.acessarVideosPorTitulo)
    .get("/videos/:id", VideoController.acessarVideoPorId)
    .get("/videos", VideoController.listarVideos)
    .get("/categorias/:id/videos", VideoController.acessarVideosPorCategoria)
    .post("/videos", VideoController.cadastrarVideo)
    .put("/videos/:id", VideoController.atualizarVideo)
    .delete("/videos/:id", VideoController.excluirVideo);

module.exports = router;
