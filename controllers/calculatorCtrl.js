const validateCalculatorInput =
  require('../helpers/validationHelper').validateCalculatorInput;

const calculatorCtrl = {
  calculate(req, res) {
    const { firstNumber, secondNumber } = req.body;

    if (!validateCalculatorInput(firstNumber) ||
      !validateCalculatorInput(secondNumber)) {
      return res.status(400).send({ message: 'Invalid input.' });
    }

    if (req.body.operation === 'add') {
      res.send({ answer: parseInt(firstNumber) + parseInt(secondNumber) });
    }
  },
};

module.exports = calculatorCtrl;
