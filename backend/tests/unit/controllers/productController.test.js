const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { productService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { productsDB, productDBbyID, newProduct } = require('../mocks/productMock');

const { expect } = chai;
chai.use(sinonChai);

describe('Testes productController', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando a funcao getAll para procurar todos os produtos', async function () {
        sinon.stub(productService, 'getAll').resolves({ status: 'SUCCESSFUL', data: productsDB });

        const req = {};
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productsController.getAll(req, res);
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productsDB);
    });

    it('Testando a funcao findById para procurar um produto pelo id', async function () {
        sinon.stub(productService, 'findById').resolves({ status: 'SUCCESSFUL', data: productDBbyID });

        const req = { params: { id: 1 }, body: { } };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productsController.findById(req, res);
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productDBbyID);
    });

    it('Testando a funcao insertProduct para cadastrar um novo produto', async function () {
        sinon.stub(productService, 'insertProduct').resolves({ status: 'CREATED', data: newProduct });

        const req = { body: { name: 'Chave do carro' } };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productsController.insertProduct(req, res);
        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith(newProduct);
    });
});