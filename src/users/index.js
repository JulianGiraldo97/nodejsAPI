const express = require("express");

//permire manejar las rutas del modulo, independiente de la app
const router = express.Router();
const {UsersController} = require('./controller');

//agrega todas las rutas necesarias de la app
module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersController.getUsers) //http://localhost:3000/api/products/
    .get("/:id", UsersController.getUser) //http://localhost:3000/api/products/
    .post("/", UsersController.createUser); //http://localhost:3000/api/products/);
     
    app.use("/api/users", router);
};
