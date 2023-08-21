const chai = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { salesDB, saleDBbyID } = require('../mocks/salesMock');

const { expect } = chai;

describe('Testes productService', function () {
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
});