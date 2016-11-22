var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
// var connectionString = 'postgres://postgres:@localhost/petstore';
// var connectionString = config.connectionString;
var session = require('express-session');

var config = require('./config/config.js');

var app = module.exports = express();

var db = massive.connectSync({ db : "petstore"});
// the app.set has to go before the controller requiremnt in node
app.set('db', db);

///Controllers///
var controller = require('./controller/main.js');

var corsOptions = {
  origin:'http://localhost:8080'
}

app.use(session({
    secret: config.config.secret,
    saveUninitialized: true,
    resave: true
}));


app.use(cors(corsOptions));
app.use(bodyParser.json());
// I might to have the right file path here
app.use(express.static(__dirname + '/js'));



app.post('/customer', controller.addCustomer);
// make sure the data is following all the way through
app.post('/orders', function(req, res, next){
  res.status(200).json(req.body)
});
// app.post('/orders', console.log('test'));



var port = 8080;
app.listen(port, function(){
  console.log('pet: Port ' + port + ' is listening.');
});
