"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
require("dotenv/config");
const routes_1 = require("./routes/routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes_1.default);
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("testando server");
});
app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port);
});
//# sourceMappingURL=index.js.map