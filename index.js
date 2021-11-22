// se importan los paquetes
const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');
const { ProductsAPI } = require('./src/products/index');
const { UsersAPI } = require('./src/users/index');
const { IndexAPI, NotFoundAPI } = require('./src/index/index');
// se crea el express y el puerto
const app = express();

//capacidad de recibir datos
app.use(express.json());

//modulos
IndexAPI(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundAPI(app);

// capacidad de escuchar del server
app.listen(Config.port, () => {
    debug(`Server is running on port ${Config.port}`);
});

