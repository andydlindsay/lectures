const app = new Vue({
  el: '#root',
  data: {
    name: 'Alice',
    likes: []
  },
  created() {
    fetch('https://api.myjson.com/bins/7pb2o')
      .then(res => res.json())
      .then(data => this.likes = data);
  }
});
