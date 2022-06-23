const Categoria = require("../models/categoria.model.js");

class CategoriaController {
    static listarCategorias = (req, res) => {
        Categoria.find((err, categoria) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).json(categoria);
            }
        });
    };

    static acessarCategoriaPorId = (req, res) => {
        const id = req.params.id;
        Categoria.findById(id, (err, categoria) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Categoria não encontada`,
                });
            } else {
                res.status(200).send(categoria);
            }
        });
    };

    static cadastrarCategoria = (req, res) => {
        const categoria = new Categoria(req.body);
        categoria.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Não foi possível cadastar a categoria`,
                });
            } else {
                res.status(200).json(categoria);
            }
        });
        return categoria;
    };

    static atualizarCategoria = (req, res) => {
        const id = req.params.id;
        Categoria.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Erro na atualização`,
                });
            } else {
                res.status(201).send({ message: "Atualizada com sucesso" });
            }
        });
    };

    static excluirCategoria = (req, res) => {
        const id = req.params.id;
        Categoria.findByIdAndDelete(id, (err) => {
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

module.exports = CategoriaController;
