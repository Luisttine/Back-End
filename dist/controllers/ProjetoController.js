"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Projeto_1 = require("../entities/Projeto");
class ProjetoController {
    async selectProjetos(req, res) {
        try {
            const projetos = await data_source_1.AppDataSource.manager.find(Projeto_1.Projeto, {
                relations: {
                    lancamentos: true,
                    cliente: true,
                    cr: true
                },
                order: {
                    nome: "ASC"
                }
            });
            return res.json(projetos);
        }
        catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server Error" });
        }
    }
}
exports.default = ProjetoController;
//# sourceMappingURL=ProjetoController.js.map