const chai = require('chai');
const sinon = require('sinon');
const { checkProduct } = require('../../../src/middlewares/checkProduct');

const { expect } = chai;

describe('Testes middlewares para inserir um produto', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('Testando o middleware de product para um campo que cumpre os requisitos', async function () {
        const req = { body: { name: 'Matheus' } };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkProduct(req, res, next);
        expect(next).to.have.been.calledWith();
    });

    it('Testando o middleware de product para um campo em branco', async function () {
        const req = { body: { name: '' } };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkProduct(req, res, next);
        expect(next).not.to.have.been.calledWith();
        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    });

    it('Testando o middleware de product para um nome com menos de 5 caracteres', async function () {
        const req = { body: { name: 'Joy' } };
        const res = { 
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const next = sinon.stub().returns();
        checkProduct(req, res, next);
        expect(next).not.to.have.been.calledWith();
        expect(res.status).to.have.been.calledWith(422);
        expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
    });
});