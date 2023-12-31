const { productService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
    const { status, data } = await productService.getAll();
    return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await productService.findById(id);
    return res.status(mapStatusHTTP(status)).json(data);
};

const insertProduct = async (req, res) => {
    const { name } = req.body;
    const { status, data } = await productService.insertProduct(name);
    return res.status(mapStatusHTTP(status)).json(data);
};

const editProduct = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { status, data } = await productService.editProduct(id, body);
    return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
    getAll,
    findById,
    insertProduct,
    editProduct,
  };