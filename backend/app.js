var express  = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var customer = require('./routes/customer');

var app = express();

var uri = "mongodb+srv://admin:yM9yiySH2k4n1N91@cluster0-43bjp.mongodb.net/centralDev?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => console.log('Connected to mongodb!')
).catch(
  () => console.log('Error. Couldn\'t connect to mongodb...')
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/', customer);

module.exports = app;
