import { Router } from 'express'
import ColaboradorController from '../controllers/ColaboradorController'

const routesColaborador = Router()

routesColaborador.get('/selectGestores', new ColaboradorController().selectGestores)

export default routesColaborador