const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { productsDB, productDBbyID } = require('../mocks/productMock.test');

const { expect } = chai;

describe('Testes productModel', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando a funcao getAll para procurar todos os produtos', async function () {
        sinon.stub(connection, 'execute').resolves([productsDB]);
        const queryResult = await productModel.getAll();
        
        expect(queryResult).to.be.an('array');
        expect(queryResult).to.be.deep.equal(productsDB);
        expect(queryResult).to.have.length(3);
    });

    it('Testando a funcao findById para procurar um produto pelo id', async function () {
        sinon.stub(connection, 'execute').resolves([[productDBbyID]]);
        const idQuery = 1;
        const queryResult = await productModel.findById(idQuery);
        
        expect(queryResult).to.be.an('object');
        expect(queryResult).to.be.deep.equal(productDBbyID);
    });
});