const { productModel } = require('../models');

const getAll = async () => {
    const products = await productModel.findAll();
    if (!products) {
        return { status: 'NOT_FOUND', data: { message: 'Nenhum produto encontrado' } };
    }
    return { status: 'SUCCESSFUL', data: products };
};

const findById = async (id) => {
    const product = await productModel.findById(id);
    if (!product) {
        return { status: 'NOT_FOUND', data: { message: 'Produto nao encontrado' } };
    }
    return { status: 'SUCCESSFUL', data: product };
};

module.exports = {
    getAll,
    findById,
};