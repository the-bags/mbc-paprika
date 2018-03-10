
var Web3 = require('web3');
var restify = require('restify');

 
const server = restify.createServer({
  name: 'app',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(
    function crossOrigin(req,res,next){
       // Website you wish to allow to connect
       res.header('Access-Control-Allow-Origin', '*');
       // Request methods you wish to allow
       res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
       // Request headers you wish to allow
       res.header('Access-Control-Allow-Headers', '*');
       res.header('Access-Control-Request-Method', '*');
       // Set to true if you need the website to include cookies in the requests sent
       // to the API (e.g. in case you use sessions)
       res.header('Access-Control-Allow-Credentials', true);
       return next();
    }
  );

// server.get('/state', function (req, res, next) {
//     var syncing = web3.eth.syncing;
//     console.log('syncing:', syncing)
//     res.send({
//         syncing : syncing
//     });
//     return next();
//   });

// server.get('/account', function (req, res, next) {
//     var coinbase = web3.eth.coinbase;
//     console.log('coinbase:', coinbase)
//     res.send({
//         coinbase : coinbase
//     });
//     return next();
// });
server.get('/:instanceUrl/state', function (req, res, next) {
    var web3 = new Web3();
    // http://localhost:8545
    var url = "http://"+req.params.instanceUrl;
    console.log(url);
    web3.setProvider(new web3.providers.HttpProvider(url));
    if(web3.isConnected()) {
        var syncing = web3.eth.syncing;
        console.log('syncing:', syncing,' req:', req.params.instanceUrl)
        res.send({
            syncing : syncing
        });
     } else {
        console.log('Error');
        res.send({
            syncing : "Error"
        });
     }
    return next();
});


server.get('/:instanceUrl/account', function (req, res, next) {
    var web3 = new Web3();
    // http://localhost:8545
    var url = "http://"+req.params.instanceUrl;
    console.log(url);
    web3.setProvider(new web3.providers.HttpProvider(url));
    if(web3.isConnected()) {
        var coinbase = web3.eth.coinbase;
        var balance = web3.eth.getBalance(coinbase);
        console.log('coinbase:', coinbase,' req:', req.params.instanceUrl)
        res.send({
            coinbase : coinbase,
            balance : balance
        });
     } else {
        console.log('Error');
        res.send({
            coinbase : "Error"
        });
     }
    return next();
});


server.get('/:instanceUrl/block_number', function (req, res, next) {
    var web3 = new Web3();
    // http://localhost:8545
    var url = "http://"+req.params.instanceUrl;
    console.log(url);
    web3.setProvider(new web3.providers.HttpProvider(url));
    if(web3.isConnected()) {
        var blockNumber = web3.eth.blockNumber;
        console.log('blockNumber:', blockNumber,' req:', req.params.instanceUrl)
        res.send({
            blockNumber : blockNumber
        });
     } else {
        console.log('Error');
        res.send({
            blockNumber : "Error"
        });
     }
    return next();
});

server.get('/echo/:name', function (req, res, next) {
    console.log('echo:',req.params.name);
    res.send(req.params);
    return next();
});

///server.get('/:instanceUrl/')

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});


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

 
