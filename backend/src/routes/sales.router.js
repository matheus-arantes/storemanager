const express = require('express');
const { salesController } = require('../controllers');
const { checkDB, checkProductId } = require('../middlewares/checkSale');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.findById);

salesRouter.post('/', checkProductId, checkDB, salesController.insertSales);

module.exports = salesRouter;