"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjetoController_1 = require("../controllers/ProjetoController");
const routesProjeto = (0, express_1.Router)();
routesProjeto.get('/selectProjetos', new ProjetoController_1.default().selectProjetos);
exports.default = routesProjeto;
//# sourceMappingURL=routesProjeto.js.map