"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LancamentoController_1 = require("../controllers/LancamentoController");
const routesLancamento = (0, express_1.Router)();
routesLancamento.post('/salvarLancamento', new LancamentoController_1.default().salvarLancamento);
routesLancamento.get('/meusLancamentos', new LancamentoController_1.default().meusLancamentos);
exports.default = routesLancamento;
//# sourceMappingURL=routesLancamento.js.map