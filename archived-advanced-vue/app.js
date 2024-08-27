const app = new Vue({
  el: '#root',
  data: {
    name: 'Alice',
    posts: [],
    message: `You loaded this page on ${new Date().toLocaleString()}`,
    visible: true,
    alert: 'Today is your day!!',
    counter: 0,
    form: {
      username: '',
      password: ''
    }
  },
  created() {
    fetch('https://andydlindsay-pinterest-clone.herokuapp.com/api/public/posts')
      .then(res => res.json())
      .then(data => this.posts = data.posts);
  },
  methods: {
    sayHello: function() {
      alert(this.alert);
    },
    incrementCounter() {
      this.counter++;
    },
    onSubmit() {
      console.log(this.form);
    }
  },
  computed: {
    reverseUsername() {
      return this.form.username.split('').reverse().join('');
    }
  },
  watch: {
    'form.username': function() {
      console.log('updates!');
    }
  }
});
