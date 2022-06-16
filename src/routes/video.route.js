const express = require("express");
const VideoController = require("../controllers/video.controller.js");

const router = express.Router();

router
    .get("/videos/:id", VideoController.acessaVideoPorId)
    .get("/videos", VideoController.listarVideos);

module.exports = router;
