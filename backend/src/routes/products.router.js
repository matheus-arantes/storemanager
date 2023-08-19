const express = require('express');
const { productsController } = require('../controllers');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);

productsRouter.get('/:id', productsController.findById);

module.exports = productsRouter;