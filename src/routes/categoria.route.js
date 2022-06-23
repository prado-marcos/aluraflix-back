const express = require("express");
const CategoriaController = require("../controllers/categoria.controller.js");

const router = express.Router();

router
    .get("/categorias", CategoriaController.listarCategorias)
    .get("/categorias/:id", CategoriaController.acessarCategoriaPorId)
    .post("/categorias", CategoriaController.cadastrarCategoria)
    .put("/categorias/:id", CategoriaController.atualizarCategoria)
    .delete("/categorias/:id", CategoriaController.excluirCategoria);

module.exports = router;
