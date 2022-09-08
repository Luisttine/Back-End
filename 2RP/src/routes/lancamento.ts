import { Router } from 'express'
import LancamentoController from '../controllers/LancamentoController'

const routes = Router()

routes.get('/selectGestores', new LancamentoController().selectGestores)
routes.get('/selectProjetos', new LancamentoController().selectProjetos)
routes.post('/salvarLancamento', new LancamentoController().salvarLancamento)

export default routes