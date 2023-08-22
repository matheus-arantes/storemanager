const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
    const { status, data } = await salesService.getAll();
    return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await salesService.findById(id);
    return res.status(mapStatusHTTP(status)).json(data);
};

const insertSales = async (req, res) => {
    const { body } = req;
    const { status, data } = await salesService.insertSales(body);
    return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
    getAll,
    findById,
    insertSales,
  };