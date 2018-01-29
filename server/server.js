var express = require('express');
var router = require('./routes/routes.js');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

// mongoose.connect('mongodb://<hanselgunawan>:<shiro9111>@ds263847.mlab.com:63847/mern-practice');

mongoose.connect('mongodb://localhost/new_york_times_db');

app.use('/', router);

module.exports=app;