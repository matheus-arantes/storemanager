const productsDB = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
  ];

const productDBbyID = { 
    id: 1, 
    name: 'Martelo de Thor',
};

const newProduct = { 
  id: 4, 
  name: 'Chave do carro',
};

const insertId = { insertId: 4 };

const insertProductId = 4;

module.exports = {
    productsDB,
    productDBbyID,
    newProduct,
    insertProductId,
    insertId,
};