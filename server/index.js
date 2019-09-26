const newRelic = require('newrelic');
const express = require('express');
const app = express();
const port = 3000;

app.use('/:L', express.static('public'));
app.listen(port, () => console.log('port ' + port + ' is listening...'));