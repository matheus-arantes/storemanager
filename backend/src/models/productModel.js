const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM products ORDER BY id';
    const [products] = await connection.execute(query);
    return products;
};

const findById = async (id) => {
    const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return product;
};

const insertProduct = async (productName) => {
    const query = 'INSERT INTO products (name) VALUES (?);';
    const [{ insertId }] = await connection.execute(query, [productName]);
    return insertId;
};

const editProduct = async (id, productName) => {
    const query = 'UPDATE products SET name = ? WHERE id = ?';
    return connection.execute(query, [productName, id]);
};

module.exports = {
    getAll,
    findById,
    insertProduct,
    editProduct,
};