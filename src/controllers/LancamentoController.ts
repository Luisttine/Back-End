import { Request, Response } from "express";
import { AppDataSource } from "../data-source"
import { Lancamento } from "../entities/Lancamento";

export default class LancamentoController {

    async salvarLancamento(req: Request, res: Response) {
        const { modalidade, data_inicio, data_fim, observacoes, colaborador, projeto } = req.body

        try {
            const novoLancamento = AppDataSource.manager.create(Lancamento, { modalidade, data_inicio, data_fim, observacoes, colaborador, projeto })
            await AppDataSource.manager.save(Lancamento, novoLancamento)

            return res.json(novoLancamento)
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }

    async meusLancamentos(req: Request, res: Response) {
        try {
            const lancamentos = await AppDataSource.manager.find(Lancamento, {
                relations: {
                    colaborador: true,
                    projeto: true,
                    verbas: true
                },
                order: {
                    id: "DESC"
                }   
            })
            return res.json(lancamentos)
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }

    }

}