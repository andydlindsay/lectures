const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      visible: false,
      sports: [
        'football',
        'volleyball',
        'tiddlywinks',
        'baseball',
        'connect 4',
        'kendo',
        'beer pong'
      ],
      counter: 0,
      newSport: ''
    }
  },
  methods: {
    increment() {
      this.counter += 1;
    }
  },
  created() {
    console.log('app has been created');
  }
});

app.mount('#app');
