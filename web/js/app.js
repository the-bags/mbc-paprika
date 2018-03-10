
var app = new Vue({
  el: '#app',
  data(){
    return {
      urlNode: '127.0.0.1:8545',
      coinbase: '',
      syncing: '',
      blockNumber: '',
      balance: '',
      time: 15,
    }
  },
  methods: {
    getData(){
      this.time = 15;
      var _this = this;
      $.get("http://13.58.177.42:8080/"+_this.urlNode+"/block_number" ,function(res){
        _this.blockNumber = res.blockNumber;
      },"json");
      $.get("http://13.58.177.42:8080/"+_this.urlNode+"/state" ,function(res){
        _this.syncing = res.syncing;
      },"json");
      $.get("http://13.58.177.42:8080/"+_this.urlNode+"/account" ,function(res){
        _this.coinbase = res.coinbase;
        _this.balance = res.balance;
      },"json");
    },
  },
  created() {
    this.getData();
    var _this = this;
    setInterval(function() {
      _this.time--;
      if (_this.time<0) {
        _this.getData();
      };
    }, 1000);
  },
})
