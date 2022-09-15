import { Router } from 'express'
import ColaboradorController from '../controllers/ColaboradorController'

const routesColaborador = Router()

routesColaborador.get('/selectColaboradores', new ColaboradorController().selectColaboradores)
routesColaborador.get('/getColaborador/:id', new ColaboradorController().getColaborador )

export default routesColaborador