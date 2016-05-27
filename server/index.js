var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var responseCtrl = require('./controllers/responseCtrl');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

app.get("/api/roll", responseCtrl.read);
app.post("/api/roll", responseCtrl.create);

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
