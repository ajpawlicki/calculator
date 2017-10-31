const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/'));

app.post('/calculate', (req, res) => {
  let {pre, post, operator} = req.body;
  let ans;
  
  pre = +pre;
  post = +post;

  if (operator === '+') {
    ans = pre + post;
  } else if (operator === '-') {
    ans = pre - post;
  } else if (operator === '*') {
    ans = pre * post;
  } else if (operator === '/') {
    ans = pre / post;
  }

  res.send(JSON.stringify( ans ));
});

app.listen(5000, () => console.log('Listening on port 5000!'));