const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log('port ' + port + ' is listening...'));