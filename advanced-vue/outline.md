## Lecture Order
* introduction to vuejs
  * progressive framework: you can plug it in to just a part of your application
  * smaller size compared to other front-end frameworks
  * component-based
  * reactive: when the data changes, the view re-renders

* demo a simple app using the CDN

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

* computed properties
* vue devtools
* separate out into components
* vue-cli
* single file vue components
* integrates with storybook
