const express = require('express');
const { salesController } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.findById);

salesRouter.post('/', salesController.insertSales);

module.exports = salesRouter;