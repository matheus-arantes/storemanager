const express = require('express');
const { productsController } = require('../controllers');
const { checkProduct } = require('../middlewares/checkProduct');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);

productsRouter.get('/:id', productsController.findById);

productsRouter.post('/', checkProduct, productsController.insertProduct);

productsRouter.put('/:id', checkProduct, productsController.editProduct);

module.exports = productsRouter;