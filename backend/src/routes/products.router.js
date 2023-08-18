const express = require('express');
const { productsController } = require('../controllers');

const productRouter = express.Router();

productRouter.get('/', productsController.getAll);

productRouter.get('/:id', productsController.findById);

module.exports = productRouter;