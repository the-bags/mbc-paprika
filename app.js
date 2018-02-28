
var Web3 = require('web3');
//var web3 = new Web3();

console.log('Show coinbase');

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
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
console.log(coinbase);


 // var accounts = web3.eth.accounts;

  
//   var balance = web3.eth.getBalance(coinbase);

 