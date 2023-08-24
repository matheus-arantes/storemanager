const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { salesDB, saleDBbyID, insertSaleInput, insertId, insertSaleId } = require('../mocks/salesMock');

const { expect } = chai;

describe('Testes salesModel', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando a funcao getAll para procurar todas as vendas', async function () {
        sinon.stub(connection, 'execute').resolves([salesDB]);
        const queryResult = await salesModel.getAll();
        
        expect(queryResult).to.be.an('array');
        expect(queryResult).to.be.deep.equal(salesDB);
        expect(queryResult).to.have.length(2);
    });

    it('Testando a funcao findById para procurar uma venda pelo id', async function () {
        sinon.stub(connection, 'execute').resolves([saleDBbyID]);
        const idQuery = 1;
        const queryResult = await salesModel.findById(idQuery);
        
        expect(queryResult).to.be.an('array');
        expect(queryResult).to.be.deep.equal(saleDBbyID);
    });

    it('Testando a funcao insertSales para inserir uma venda', async function () {
        sinon.stub(connection, 'execute').resolves([insertId]);
        const queryResult = await salesModel.insertSales(insertSaleInput);
        
        expect(queryResult).to.be.equal(insertSaleId);
    });
});