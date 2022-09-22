"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ColaboradorController_1 = require("../controllers/ColaboradorController");
const routesColaborador = (0, express_1.Router)();
routesColaborador.get('/selectColaboradores', new ColaboradorController_1.default().selectColaboradores);
routesColaborador.get('/getColaborador/:id', new ColaboradorController_1.default().getColaborador);
exports.default = routesColaborador;
//# sourceMappingURL=routesColaborador.js.map