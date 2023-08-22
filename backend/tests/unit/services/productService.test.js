const chai = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { productsDB, productDBbyID, newProduct } = require('../mocks/productMock');

const { expect } = chai;

describe('Testes productService', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando a funcao getAll para procurar todos os produtos', async function () {
        sinon.stub(productModel, 'getAll').resolves(productsDB);
        const { status, data } = await productService.getAll();
        expect(status).to.be.equal('SUCCESSFUL');
        expect(data).to.be.deep.equal(productsDB);
    });

    it('Testando a funcao findById para procurar um produto pelo id', async function () {
        sinon.stub(productModel, 'findById').resolves(productDBbyID);
        const idQuery = 1;
        const { status, data } = await productService.findById(idQuery);
        expect(status).to.be.equal('SUCCESSFUL');
        expect(data).to.be.deep.equal(productDBbyID);
    });

    it('Testando a funcao insertProduct para criar um novo produto', async function () {
        sinon.stub(productModel, 'insertProduct').resolves(newProduct);
        const input = 'Chave do carro';
        const { status, data } = await productService.insertProduct(input);
        expect(status).to.be.equal('CREATED');
        expect(data).to.be.deep.equal(newProduct);
    });
});