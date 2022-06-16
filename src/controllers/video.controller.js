const Video = require("../models/video.model.js");

class VideoController {
    static listarVideos = (req, res) => {
        Video.find((err, video) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).json(video);
            }
        });
    };

    static acessaVideoPorId = (req, res) => {
        const id = req.params.id;
        console.log("params: " + req.params);
        console.log("body: " + req.body);
        Video.findById(id, (err, video) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Video não encontado`,
                });
            } else {
                console.log(`${video}`);
                res.status(200).send(video);
            }
        });
    };

    static cadastrarVideo = (req, res) => {
        const video = new Video(req.body);
        video.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Não foi possível cadastar o video`,
                });
            } else {
                res.status(200).json(video);
            }
        });
    };

    static atualizarVideo = (req, res) => {
        const id = req.body.id;
        Video.findByIdAndUpdate(id, { $ser: req.body }, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Erro na atualização`,
                });
            } else {
                res.status(201).send({ message: "Atualizado com sucesso" });
            }
        });
    };
}

module.exports = VideoController;
