const chai = require('chai');
const sinon = require('sinon');
const { checkProductId, checkQuantityExists, checkQuantityValue,
     } = require('../../../src/middlewares/checkSale');
const { saleInsert, saleInsertProductId, saleInsertQuantity, saleInsertValue } = require('../mocks/salesMock');

const { expect } = chai;

describe('Testes middlewares para inserir uma venda', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando o middleware de inserir venda com campos corretos', async function () {
        const req = { body: saleInsert };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkProductId(req, res, next);
        expect(next).to.have.been.calledWith();
    });

    it('Testando o middleware de inserir venda quando nao possui productId', async function () {
        const req = { body: saleInsertProductId };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkProductId(req, res, next);
        expect(next).not.to.have.been.calledWith();
        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
    });

    /* it('Testando o middleware de inserir venda quando o produto nao existe', async function () {
        const req = { body: saleInvalidProduct };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkDB(req, res, next);
        expect(next).not.to.have.been.calledWith();
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    }); */

    it('Testando o middleware de inserir venda quando nao possui quantity', async function () {
        const req = { body: saleInsertQuantity };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkQuantityExists(req, res, next);
        expect(next).not.to.have.been.calledWith();
        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
    });

    it('Testando o middleware de inserir venda quando possui quantity igual a 0', async function () {
        const req = { body: saleInsertValue };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkQuantityValue(req, res, next);
        expect(next).not.to.have.been.calledWith();
        expect(res.status).to.have.been.calledWith(422);
        expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
    });
});