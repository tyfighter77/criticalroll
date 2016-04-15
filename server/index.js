var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

var port = 3000;
var mongoURI = 'mongodb://localhost:27017/criticalroll';

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo at ', mongoURI);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});
