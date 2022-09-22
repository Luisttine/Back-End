"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routesColaborador_1 = require("./routesColaborador");
const routesLancamento_1 = require("./routesLancamento");
const routesProjeto_1 = require("./routesProjeto");
const routes = (0, express_1.Router)();
routes.use('/', routesLancamento_1.default);
routes.use('/', routesProjeto_1.default);
routes.use('/', routesColaborador_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map