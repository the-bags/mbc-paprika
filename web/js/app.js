
var app = new Vue({
  el: '#app',
  data(){
    return {
      urlNode: '',
      coinbase: '',
      syncing: '',
      blockNumber: '',
      time: 15,
    }
  },
  methods: {
    getData(){
      var _this = this;
      $.get("http://localhost:8080/"+_this.urlNode+"/block_number" ,function(res){
        _this.blockNumber = res.blockNumber;
      },"json");
      $.get("http://localhost:8080/"+_this.urlNode+"/state" ,function(res){
        _this.syncing = res.syncing;
      },"json");
      $.get("http://localhost:8080/"+_this.urlNode+"/account" ,function(res){
        _this.coinbase = res.coinbase;
      },"json");
    },
    sendURL(){
      console.log('Send URL');
      this.getData();
    }
  },
  created() {
    var _this = this;
    setInterval(function() {
      _this.time--;
      if (_this.time<0) {
        _this.time = 15;
        _this.getData();
      };
    }, 1000);
  },
})