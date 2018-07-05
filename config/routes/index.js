const calculatorCtrl = require('../../controllers/calculatorCtrl');

module.exports = (app) => {
  app.get('/me', (req, res) => {
    res.send({ message: 'Hello World' });
  });

  app.post('/calculator', calculatorCtrl.calculate);
};
