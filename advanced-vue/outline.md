## Lecture Order

### Introduction to Vue.js
  * progressive framework: you can plug it in to just a part of your application
  * smaller size compared to other front-end frameworks
  * component-based
  * reactive: when the data changes, the view re-renders

### Demo a simple app using the CDN

  ```html
  <div id="root">
    <h2>Hello {{ name }}</h2>
  </div>

  <script>
    const app = new Vue({
      el: '#root',
      data: {
        name: 'Alice'
      }
    });
  </script>
  ```

  * show how it works just jQuery and must wait for the DOM to load to hook into it
  * show the Vue warning in the console that it cannot find the element to mount to
  * demonstrate name and that it can be updated in the console with `app.name = 'something else';`
  * add a sports array to the data object
  * render an unordered list using `v-for`
  * add a new item to the list using `app.sports.push({ name: 'Tennis' });`
  * look at Vue lifecycle methods
  * introduce the `created(){}` lifecycle method and `fetch` the sports from an external API

  ```js
  created() {
    fetch('https://api.myjson.com/bins/9yppg')
      .then(res => res.json())
      .then(data => this.sports = data);
  }
  ```

  * demonstrate bound properties using `v-bind:` and then the short-hand
  * hover over the `h2` to show the tooltip
  * change the tooltip with `app.message = 'something else';`

  ```html
  <h2 v-bind:title="message">Hello {{ name }}</h2>
  <h2 :title="message">Hello {{ name }}</h2>
  ```

  * demonstrate `v-if`

  ```js
  data: {
    visible: true
  }
  ```

  ```html
  <p v-if="visible">I'm here!!!</p>
  ```

  * open the console and set `app.visible = false;`

  * add the `methods` object and create a simple method for a click event
  * bind it to a DOM element using `v-on:click="functionName"`

  ```js
  methods: {
    sayHello() {
      alert('hello!!!');
    }
  }
  ```

  ```html
  <h2 v-bind:title="message" v-on:click="sayHello">Hello {{ name }}</h2>
  <h2 v-bind:title="message" @click="sayHello">Hello {{ name }}</h2>
  ```

  * we also have `mouseover`, `dblclick`, `mouseleave`
  * show off `@click.prevent` to prevent default behaviour

  * add a new prop to the `data` object called `counter` and initialize it to 0
  * add a method called `incrementCounter` that increments the counter by 1
  * add a button `index.html` and add a click handler to it
  * add a span to the html that displays the `counter` value

  * add a `form` object to the `data` object

  ```js
  data: {
    form: {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
  ```

  ```html
  <form>
    <label for="username">Username</label>
    <input type="text" id="username" v-model="form.username" />
    <br/>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="form.password" />
    <br/>
    <button type="button" @click="onSubmit">Log In!</button>
  </form>
  ```

  * intro `computed` property

  ```js
  computed: {
    reverseUsername() {
      return this.form.username.split('').reverse().join('');
    }
  }
  ```

  * intro `watch` property

  ```js
  watch: {
    'form.username': function() {
      console.log('updates!');
    }
  }
  ```

### Demo separate components
  * install vue-cli
  * `npm i -g @vue/cli`
  * `vue --version`
  * `vue create my-project`
  * explore the created project structure
  * single file vue components
  * demo vue devtools


* integrates with storybook
