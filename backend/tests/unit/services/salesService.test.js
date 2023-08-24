const chai = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { salesDB, saleDBbyID, insertSaleId, insertSaleInput, insertSaleResult } = require('../mocks/salesMock');

const { expect } = chai;

describe('Testes salesService', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando a funcao getAll para procurar todos os produtos', async function () {
        sinon.stub(salesModel, 'getAll').resolves(salesDB);
        const { status, data } = await salesService.getAll();
        expect(status).to.be.equal('SUCCESSFUL');
        expect(data).to.be.deep.equal(salesDB);
    });

    it('Testando a funcao findById para procurar um produto pelo id', async function () {
        sinon.stub(salesModel, 'findById').resolves(saleDBbyID);
        const idQuery = 1;
        const { status, data } = await salesService.findById(idQuery);
        expect(status).to.be.equal('SUCCESSFUL');
        expect(data).to.be.deep.equal(saleDBbyID);
    });

    it('Testando a funcao insertSales inserir uma venda', async function () {
        sinon.stub(salesModel, 'insertSales').resolves(insertSaleId);
        sinon.stub(salesModel, 'findById').resolves(insertSaleInput);
        const { status, data } = await salesService.insertSales(insertSaleInput);
        
        expect(status).to.equal('CREATED');
        expect(data).to.deep.equal(insertSaleResult);
    });
});