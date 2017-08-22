var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

//
var Web3            = require('web3'),
    contract        = require("truffle-contract"),
    path            = require('path')
    MyContractJSON  = require(path.join(__dirname, 'build/contracts/shareToken.json'));

// Setup RPC connection   
var provider    = new Web3.providers.HttpProvider("http://localhost:8545");


// Read JSON and attach RPC connection (Provider)
var shareToken = contract(MyContractJSON);
shareToken.setProvider(provider);

// Use Truffle as usual
var ret;

shareToken.deployed().then(function(instance) {
	meta = instance;
	meta.sharePrice.call().then(function(v) {
		ret = v;
		console.log(v)
	})
})

// Get amount of stock
var stock;

shareToken.deployed().then(function(instance) {
	meta = instance;
	meta.totalSupply.call().then(function(v) {
		stock = v;
		console.log(v)
	})
})

// Get amount of stock
var address;

shareToken.deployed().then(function(instance) {
	meta = instance;
	meta.wallet.call().then(function(v) {
		address = v;
		console.log(v)
	})
})

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/vendor'));

//Route to login file
app.get('/', function (req, res) {
	res.sendFile( __dirname + "/pages/" + "login.html" );
})

//Route to login file
app.get('/index', function (req, res) {
	res.sendFile( __dirname + "/pages/index.html" );
})

//Route to login file
app.get('/login', function (req, res) {
	res.sendFile( __dirname + "/pages/" + "login.html" );
})

//Route to login file
app.get('/register', function (req, res) {
	console.log('Login page called');
	res.sendFile( __dirname + "/pages/" + "register.html" );
})

//////////////////////////////////////////////////////////////

//Route to login file
app.get('/getsharePrice', function (req, res) {
	res.send( ret );
})

//Route to login file
app.get('/getNumberShares', function (req, res) {
	res.send( stock );
})

//Route to login file
app.get('/getaddress', function (req, res) {
	res.send( address );
})
//////////////////////////////////////////////////////////////

var server = app.listen(7000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})