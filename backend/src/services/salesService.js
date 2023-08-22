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
    if (sale.length === 0) {
        return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
    }
    return { status: 'SUCCESSFUL', data: sale };
};

const insertSales = async (sales) => {
    const id = await salesModel.insertSales(sales);
    const salesId = await salesModel.findById(id);
    const allSales = salesId.map(({ productId, quantity }) => ({ productId, quantity }));

    return { status: 'CREATED', data: { id, allSales } };
};

module.exports = {
    getAll,
    findById,
    insertSales,
};