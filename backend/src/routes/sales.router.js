const express = require('express');
const { salesController } = require('../controllers');
const { checkDB, checkProductId,
    checkQuantityExists, checkQuantityValue } = require('../middlewares/checkSale');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.findById);

salesRouter.post(
    '/',
    checkProductId,
    checkQuantityExists,
    checkQuantityValue,
    checkDB,
    salesController.insertSales,
    );

module.exports = salesRouter;