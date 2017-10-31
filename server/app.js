const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser);

app.post('/calculate', (req, res) => {
  
});

app.listen(5000, () => console.log('Listening on port 5000!'));