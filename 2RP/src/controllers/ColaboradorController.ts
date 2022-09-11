import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Colaborador } from "../entities/Colaborador"

export default class CoolaboradorController {

    async selectGestores(req: Request, res: Response) {
        try {
            const gestores = await AppDataSource.manager.find(Colaborador, {
                relations: {
                    lancamentos: true,
                    cr: true
                },
                order: {
                    nome: "ASC"
                },
                where: {
                    perfil: "gestor"
                }    
                }
            )
            return res.json(gestores)
        } catch (error) {
            console.log(error)
            return res.json({message: "Internal Server Error"})
        }
    }
    
}