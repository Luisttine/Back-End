import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Colaborador } from "../entities/Colaborador"

export default class ColaboradorController {

    async selectColaboradores(req: Request, res: Response) {
        try {
            const colaboradores = await AppDataSource.manager.find(Colaborador, {
                relations: {
                    lancamentos: true,
                    cr: true,
                    gestor: true
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

    async getColaborador (req: Request, res: Response){
        const { id } = req.params
    
        try {
            const colaborador = await AppDataSource.manager.find(Colaborador, {
                    relations: {
                        lancamentos: true,
                        cr: true,
                        gestor: true
                    },
                    where: {
                        id: Number(id)
                    }
                })
            res.json(colaborador[0])
        } catch(error) {
                console.log(error)
                return res.json({message: "Internal Server Error"})
            }
    }
    
}