const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM products ORDER BY id';
    const [products] = await connection.execute(query);
    return products;
};

const findById = async (id) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    const [[product]] = await connection.execute(query, [id]);
    return product;
};

module.exports = {
    getAll,
    findById,
};