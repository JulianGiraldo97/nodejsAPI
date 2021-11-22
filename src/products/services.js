//Funciones necesarias para gestionar datos y comunicacion con la DB
const { ObjectId } = require('mongodb');
const { Database } = require('../database/index');
const { ProductsUtils } = require('./utils');


const COLLECTION = 'products';

//funciones
const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return await collection.findOne({ _id: ObjectId(id) });
}

const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

const generateReport = async (name, res) => {
        let products = await getAll();
        ProductsUtils.excelGenerator(products, name, res);
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport
}