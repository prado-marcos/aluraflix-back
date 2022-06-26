const Video = require("../models/video.model.js");

class VideoController {
    static listarVideos = (req, res) => {
        Video.find()
            .populate("categoriaId")
            .exec((err, video) => {
                if (err) {
                    res.status(400).send({ message: err.message });
                } else {
                    res.status(200).json(video);
                }
            });
    };

    static acessarVideoPorId = (req, res) => {
        const id = req.params.id;
        Video.findById(id, (err, video) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Video não encontado`,
                });
            } else {
                res.status(200).send(video);
            }
        });
    };

    static acessarVideosPorTitulo = (req, res) => {
        const search = req.query.titulo;
        Video.find({ titulo: search }, (err, videos) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Video não encontado`,
                });
            } else {
                res.status(200).send(videos);
            }
        });
    };

    static acessarVideosPorCategoria = (req, res) => {
        const categoria = req.params.id;
        Video.find({ categoriaId: categoria }, (err, video) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Video não encontado`,
                });
            } else {
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
        const id = req.params.id;
        Video.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Erro na atualização`,
                });
            } else {
                res.status(201).send({ message: "Atualizado com sucesso" });
            }
        });
    };

    static excluirVideo = (req, res) => {
        const id = req.params.id;
        Video.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Erro na exclusão`,
                });
            } else {
                res.status(200).send({ message: "Exclusão feita com sucesso" });
            }
        });
    };
}

module.exports = VideoController;
