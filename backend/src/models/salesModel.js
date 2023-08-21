const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
    const query = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM sales AS s
    INNER JOIN sales_products AS sp
    ON s.id = sp.sale_id
    ORDER BY sale_id, product_id;`;
    const [sales] = await connection.execute(query);
    return camelize(sales);
};

const findById = async (id) => {
    const query = `SELECT s.date, sp.product_id, sp.quantity
    FROM sales AS s
    INNER JOIN sales_products AS sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY sale_id, product_id;`;
    const [sales] = await connection.execute(query, [id]);
    return camelize(sales);
};

module.exports = {
    getAll,
    findById,
};