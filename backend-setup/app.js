var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var db;
var port = process.env.PORT || 3000;

console.log(port);
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionString(), (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(port, function() {
    console.log('listening to 3000');
  });
});
setupController(app); // setupController is a function