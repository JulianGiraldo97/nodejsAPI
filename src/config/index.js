/**
 * dot env busca en el proyecto la variable de entorno .env y la carga
 */
require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDbname: process.env.MONGO_DBNAME,
}

