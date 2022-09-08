import { Router } from 'express'
import lancamento from './lancamento'

const routes = Router()

routes.use('/lancamento', lancamento)

export default routes