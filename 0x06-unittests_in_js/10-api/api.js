const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;

app.use(bodyParser.json());

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
