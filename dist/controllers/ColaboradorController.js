"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Colaborador_1 = require("../entities/Colaborador");
class ColaboradorController {
    async selectColaboradores(req, res) {
        try {
            const colaboradores = await data_source_1.AppDataSource.manager.find(Colaborador_1.Colaborador, {
                relations: {
                    lancamentos: true,
                    cr: true,
                    gestor: true
                },
                order: {
                    nome: "ASC"
                },
            });
            return res.json(colaboradores);
        }
        catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server Error" });
        }
    }
    async getColaborador(req, res) {
        const { id } = req.params;
        try {
            const colaborador = await data_source_1.AppDataSource.manager.find(Colaborador_1.Colaborador, {
                relations: {
                    lancamentos: true,
                    cr: true,
                    gestor: true
                },
                where: {
                    id: Number(id)
                }
            });
            res.json(colaborador[0]);
        }
        catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server Error" });
        }
    }
}
exports.default = ColaboradorController;
//# sourceMappingURL=ColaboradorController.js.map