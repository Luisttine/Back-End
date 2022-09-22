"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Lancamento_1 = require("../entities/Lancamento");
class LancamentoController {
    async salvarLancamento(req, res) {
        const { modalidade, data_inicio, data_fim, observacoes, colaborador, projeto } = req.body;
        try {
            const novoLancamento = data_source_1.AppDataSource.manager.create(Lancamento_1.Lancamento, { modalidade, data_inicio, data_fim, observacoes, colaborador, projeto });
            await data_source_1.AppDataSource.manager.save(Lancamento_1.Lancamento, novoLancamento);
            return res.json(novoLancamento);
        }
        catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server Error" });
        }
    }
    async meusLancamentos(req, res) {
        try {
            const lancamentos = await data_source_1.AppDataSource.manager.find(Lancamento_1.Lancamento, {
                relations: {
                    colaborador: true,
                    projeto: true,
                    verbas: true
                },
                order: {
                    id: "DESC"
                }
            });
            return res.json(lancamentos);
        }
        catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server Error" });
        }
    }
}
exports.default = LancamentoController;
//# sourceMappingURL=LancamentoController.js.map