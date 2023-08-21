const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
require('dotenv').config()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/api/employees', require('./routes/employees'));

module.exports = app;
