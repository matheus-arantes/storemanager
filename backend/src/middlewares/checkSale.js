const { productModel } = require('../models');

const checkProductId = (req, res, next) => {
    const { body } = req;
    const idCheck = body.map(({ productId }) => {
        if (!productId) {
            return;
        }
        return true;
    });
    if (!idCheck.every((productId) => productId === true)) {
        return res.status(400).json({
            message: '"productId" is required',
        });
    }
     
    next();
};

const checkQuantityExists = (req, res, next) => {
    const { body } = req;
    const quantCheck = body.map(({ quantity }) => {
        if (quantity === undefined) {
            return;
        }
        return true;
    });
    if (!quantCheck.every((quantity) => quantity === true)) {
        return res.status(400).json({
            message: '"quantity" is required',
        });
    }
     
    next();
};

const checkQuantityLength = (req, res, next) => {
    const { body } = req;
    const quantCheck = body.map(({ quantity }) => {
        if (quantity <= 0) {
            return;
        }
        return true;
    });
    if (!quantCheck.every((quantity) => quantity === true)) {
        return res.status(422).json({
            message: '"quantity" must be greater than or equal to 1',
        });
    }
     
    next();
};

const checkDB = async (req, res, next) => {
    const { body } = req;
    const allPromises = body.map(async ({ productId }) => {
        const productById = await productModel.findById(productId);
        return productById;
    });
    const result = await Promise.all(allPromises);
    if (!result.every((productId) => productId)) {
        return res.status(404).json({
            message: 'Product not found',
        });
    }
    next();
};

module.exports = {
    checkProductId,
    checkQuantityExists,
    checkQuantityLength,
    checkDB,
};