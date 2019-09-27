const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/loaderio-7b83a50c93df245d8b62c01ec0ef1bdb.txt', express.static(path.join(__dirname, './loaderio-7b83a50c93df245d8b62c01ec0ef1bdb.txt')));

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log('port ' + port + ' is listening...'));