
var Web3 = require('web3');
var restify = require('restify');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
 
const server = restify.createServer({
  name: 'app',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/state', function (req, res, next) {
    var syncing = web3.eth.syncing;
    console.log('syncing:', syncing)
    res.send({
        syncing : syncing
    });
    return next();
  });

server.get('/account', function (req, res, next) {
    var coinbase = web3.eth.coinbase;
    console.log('coinbase:', coinbase)
    res.send({
        coinbase : coinbase
    });
    return next();
});

server.get('/block_number', function (req, res, next) {
    var blockNumber = web3.eth.blockNumber;
    console.log('syncing:', blockNumber)
    res.send({
        blockNumber : blockNumber
    });
    return next();
});

server.get('/echo/:name', function (req, res, next) {
    console.log('echo:',req.params.name);
    res.send(req.params);
    return next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});


var coinbase = web3.eth.coinbase;
var blockNumber = web3.eth.blockNumber;


console.log('coinbase: ',coinbase);
console.log('blockNumber: ',blockNumber);




//var web3 = new Web3();

//console.log(web3);

// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
//   } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider(""));
//     var coinbase = web3.eth.coinbase;
//     console.log(coinbase);
//   }

//var Web3 = require('../index.js');
// var accounts = web3.eth.accounts;

  
//   var balance = web3.eth.getBalance(coinbase);

 