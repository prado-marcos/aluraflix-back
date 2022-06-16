const express = require("express");
const VideoController = require("../controllers/video.controller.js");

const router = express.Router();

router
    .get("/videos", VideoController.listarVideos)
    .get("/videos/:id", VideoController.acessaVideoPorId)
    .post("/videos", VideoController.cadastrarVideo)
    .put("/videos", VideoController.atualizarVideo)

module.exports = router;
