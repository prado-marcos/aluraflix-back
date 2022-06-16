const Video = require("../models/video.model.js");

class VideoController {
    static listarVideos = (req, res) => {
        Video.find((err, Video) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).json(Video);
            }
        });
    };
}

module.exports = VideoController;