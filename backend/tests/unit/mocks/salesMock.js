const salesDB = [
    {
      saleId: 1,
      date: '2021-09-09T04:54:29.000Z',
      productId: 1,
      quantity: 2,
    },
    {
      saleId: 1,
      date: '2021-09-09T04:54:54.000Z',
      productId: 2,
      quantity: 2,
    },  
];

const saleDBbyID = [
    {
      date: '2021-09-09T04:54:29.000Z',
      productId: 1,
      quantity: 2,
    },
    {
      date: '2021-09-09T04:54:54.000Z',
      productId: 2,
      quantity: 2,
    },
  ];

const insertSaleInput = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const insertSaleResult = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const salesResult = {
  status: 'CREATED',
  data: insertSaleResult,
};

const insertId = { insertId: 3 };

const insertSaleId = 3;

const saleInsert = [
  {
    productId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleInsertProductId = [
  {
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleInvalidProduct = [
  {
    productId: 5,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleInsertQuantity = [
  {
    productId: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleInsertValue = [
  {
    productId: 1,
    quantity: 0,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

module.exports = {
  salesDB,
  saleDBbyID,
  insertId,
  insertSaleId,
  insertSaleInput,
  insertSaleResult,
  salesResult,
  saleInsert,
  saleInsertProductId,
  saleInsertQuantity,
  saleInsertValue,
  saleInvalidProduct,
};