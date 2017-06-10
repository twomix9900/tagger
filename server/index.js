const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./db/db_model');
const db = require ('./db/db_config');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use('/', routes);
const port = 5050
app.listen(port, () => console.log('Server is listening to port ', port));