import { Router } from 'express'
import ColaboradorController from '../controllers/ColaboradorController'

const routesColaborador = Router()

routesColaborador.get('/selectColaboradores', new ColaboradorController().selectColaboradores)

export default routesColaborador