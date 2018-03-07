
var app = new Vue({
  el: '#app',
  data(){
    return {
      urlNode: '',
    }
  },
  methods: {
    getData(){
      $.get("", {} ,function(t){
      console.log('DATA:',t);
    },"json");
    },
    sendURL(){
      console.log('Send URL');
    }
  },
  created() {

  },
})