const { productModel } = require('../models');

const getAll = async () => {
    const products = await productModel.getAll();
    if (!products) {
        return { status: 'NOT_FOUND', data: { message: 'Nenhum produto encontrado' } };
    }
    return { status: 'SUCCESSFUL', data: products };
};

const findById = async (id) => {
    const product = await productModel.findById(id);
    if (!product) {
        return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }
    return { status: 'SUCCESSFUL', data: product };
};

const insertProduct = async (productName) => {
    const id = await productModel.insertProduct(productName);
    const product = await productModel.findById(id);
    return { status: 'CREATED', data: product };
};

const editProduct = async (id, product) => {
    const productToEdit = await productModel.findById(id);
    if (!productToEdit) {
        return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }
    const { name } = product;
    await productModel.editProduct(id, name);
    const editedProduct = await productModel.findById(id);
    return { status: 'SUCCESSFUL', data: editedProduct };
};

module.exports = {
    getAll,
    findById,
    insertProduct,
    editProduct,
};