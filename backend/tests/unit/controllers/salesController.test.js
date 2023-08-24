const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { salesDB, saleDBbyID, insertSaleInput, insertSaleResult, salesResult } = require('../mocks/salesMock');

const { expect } = chai;
chai.use(sinonChai);

describe('Testes salesController', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando a funcao getAll para procurar todas as vendas', async function () {
        sinon.stub(salesService, 'getAll').resolves({ status: 'SUCCESSFUL', data: salesDB });

        const req = {};
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await salesController.getAll(req, res);
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(salesDB);
    });

    it('Testando a funcao findById para procurar uma venda pelo id', async function () {
        sinon.stub(salesService, 'findById').resolves({ status: 'SUCCESSFUL', data: saleDBbyID });

        const req = { params: { id: 1 }, body: { } };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await salesController.findById(req, res);
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(saleDBbyID);
    });

    it('Testando a funcao insertSales para inserir uma nova venda', async function () {
        sinon.stub(salesService, 'insertSales').resolves({ status: 'CREATED', data: insertSaleResult });
        const req = { params: { }, body: insertSaleInput };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        await salesController.insertSales(req, res);
        expect(res.status).to.have.been.calledWith(201);
        expect(res.json).to.have.been.calledWith(salesResult.data);
    });
});