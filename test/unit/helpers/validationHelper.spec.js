const chai = require('chai');
const expect = chai.expect;

const validationHelper = require('../../../helpers/validationHelper');

describe('Validation Helper', () => {
  describe('#validateCalculatorInput', () => {
    it('Should return true for a valid number', ()=> {
      const result = validationHelper.validateCalculatorInput(4);

      expect(result).to.be.true;
    });

    it('Should return true for a valid number as a string', ()=> {
      const result = validationHelper.validateCalculatorInput('4');

      expect(result).to.be.true;
    });

    it('Should return false for an invalid number', ()=> {
      const result = validationHelper.validateCalculatorInput('me');

      expect(result).to.be.false;
    });
  });
});
