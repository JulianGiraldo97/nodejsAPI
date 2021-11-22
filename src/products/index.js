const express = require("express");

//permire manejar las rutas del modulo, independiente de la app
const router = express.Router();
const {ProductsController} = require('./controller');

//agrega todas las rutas necesarias de la app
module.exports.ProductsAPI = (app) => {
  router
    .get("/", ProductsController.getProducts) //http://localhost:3000/api/products/
    .get("/report", ProductsController.generateReport) //http://localhost:3000/api/products/report
    .get("/:id", ProductsController.getProduct) //http://localhost:3000/api/products/
    .post("/", ProductsController.createProduct); //http://localhost:3000/api/products/);
     
    app.use("/api/products", router);
};
