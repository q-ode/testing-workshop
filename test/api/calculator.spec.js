const app = require('../../config/app'),
  chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Calculator', () => {
  describe('POST: /calculator', () => {
    it('Should return the valid sub when add operation is done', (done) => {
      chai.request(app)
        .post('/calculator')
        .send({ firstNumber: 3, secondNumber: 4, operation: 'add' })
        .end((err, res) => {
          expect(res.body).to.deep.equal({ answer: 7 });
          done();
        });
    });

    it('Should return error if no input is supplied', (done) => {
      chai.request(app)
        .post('/calculator')
        .send({ secondNumber: 4, operation: 'add' })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });
  })
});