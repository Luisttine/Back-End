import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Colaborador } from "../entities/Colaborador"

export default class CoolaboradorController {

    async selectColaboradores(req: Request, res: Response) {
        try {
            const colaboradores = await AppDataSource.manager.find(Colaborador, {
                relations: {
                    lancamentos: true,
                    cr: true
                },
                order: {
                    nome: "ASC"
                },
                }
            )
            return res.json(colaboradores)
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }
    
}