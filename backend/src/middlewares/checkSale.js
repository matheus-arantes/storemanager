const { productModel } = require('../models');

const checkProductId = (req, res, next) => {
    const { body } = req;
    body.map(({ productId }) => {
        if (!productId) {
            return res.status(400).json({ message: '"productId" is required' });
        }
        return null;
    });

    next();
};

/* const checkQuantity = (req, res, next) => {
    const { body } = req;
    body.map(({ quantity }) => {
        if (!quantity) {
            return res.status(400).json({ message: '"quantity" is required' });
        }
        if (quantity.length <= 0) {
            return res.status(422).json({
                message: '"quantity" must be greater than or equal to 1',
            });
        }
        return null;
    });
    
    next();
}; */

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
    checkDB,
};