const video = require("./video.route.js");
const express = require("express");

const routes = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Myflix");
    });
    app.use(express.json(), video);
};

module.exports = routes;
