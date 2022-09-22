"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.AppDataSource = new typeorm_1.DataSource({
    url: process.env.DATABASE_URL,
    type: "postgres",
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
});
exports.AppDataSource
    .initialize()
    .then(() => {
    console.log("Data Source inicializado!");
})
    .catch((e) => {
    console.error("Erro na inicialização do Data Source:", e);
});
//# sourceMappingURL=data-source.js.map