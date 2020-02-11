const app = new Vue({
  el: '#root',
  data: {
    name: 'Alice',
    sports: [],
    message: `You loaded this page on ${new Date().toLocaleString()}`,
    visible: true,
    alert: 'Today is your day!!',
    counter: 0
  },
  created() {
    fetch('https://api.myjson.com/bins/9yppg')
      .then(res => res.json())
      .then(data => this.sports = data);
  },
  methods: {
    sayHello: function() {
      alert(this.alert);
    },
    incrementCounter() {
      this.counter++;
    }
  }
});
