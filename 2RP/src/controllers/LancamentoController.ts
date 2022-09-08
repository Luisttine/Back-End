import { Request, Response } from "express";
import { AppDataSource } from "../data-source"

export default class LancamentoController {

    async selectGestores(req: Request, res: Response) {
        try {
            const gestores = await AppDataSource.query(`
                SELECT id, nome FROM colaboradores WHERE perfil = 'gestor'
            `)
            return res.json(gestores)
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }

    async selectProjetos(req: Request, res: Response) {
        try {
            const projetos = await AppDataSource.query(`
                SELECT id, nome FROM projetos
            `)
            return res.json(projetos)
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }

    async salvarLancamento(req: Request, res: Response) {
        const { modalidade, inicio, fim, justificativa, colaborador, gestor, projeto } = req.body

        try {
            const novoUsuario = await AppDataSource.query(`
                INSERT INTO lancamentos (modalidade, inicio, fim, justificativa, colaborador_id, gestor_id, projeto_id) VALUES ($1, $2, $3 ,$4, $5, $6, $7)
            `, [modalidade, inicio, fim, justificativa, colaborador, gestor, projeto])
            return res.json({message: "Apontamento realizado com sucesso!"})
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }

}