const { salesModel } = require('../models');

const getAll = async () => {
    const sales = await salesModel.getAll();
    if (!sales) {
        return { status: 'NOT_FOUND', data: { message: 'Nenhuma venda encontradaa' } };
    }
    return { status: 'SUCCESSFUL', data: sales };
};

const findById = async (id) => {
    const sale = await salesModel.findById(id);
    if (!sale) {
        return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
    }
    return { status: 'SUCCESSFUL', data: sale };
};

module.exports = {
    getAll,
    findById,
};