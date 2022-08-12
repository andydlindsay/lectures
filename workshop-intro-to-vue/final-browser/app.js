const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      sports: [
        'badminton',
        'volleyball',
        'golf'
      ],
      visible: true,
      counter: 0,
      newSport: '',
      recipes: []
    }
  },
  methods: {
    increment() {
      this.counter += 1;
    },
    addSport() {
      this.sports.push(this.newSport);
      this.newSport = '';
    }
  },
  created() {
    fetch('http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
      .then(res => res.json())
      .then(data => this.recipes = data);
  }
});

app.mount('#app');
