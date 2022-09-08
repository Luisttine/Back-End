import * as express from "express"
import * as cors from "cors"
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("testando server")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port)
})