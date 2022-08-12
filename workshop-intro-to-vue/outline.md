# Outline

### Slides

* https://docs.google.com/presentation/d/1TUkTjVYrs-RCg0xmpKEu9yC0TSgsKEt3WavDSiBWntA/edit#slide=id.g16ac1d1504_2_0

### Demonstrate Vue via a CDN

* contents of `/initial-browser`

### Conditional Rendering
* Demonstrate `v-if`

```js
data() {
  return {
    visible: true
  }
}
```

```html
<h2 v-if="visible">😀</h2>
<h2 v-else>😭</h2>
```

### Add an array to the data object
* Demonstrate `v-for`

```js
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      sports: [
        'badminton',
        'volleyball',
        'golf'
      ]
    }
  }
});
```

```html
<ul>
  <li v-for="sport of sports">{{ sport }}</li>
</ul>
```

### Event Handling

```js
data: {
  counter: 0
},
methods: {
  increment() {
    this.counter += 1;
  }
}
```

```html
<h2>Count: {{ counter }}</h2>
<button v-on:click="increment">Plus one!</button>
```

#### Demonstrate inline update

```html
<button v-on:click="counter++">Plus one!</button>
```

### User Input
* Demonstrate `v-model` binding

```js
data: {
  newSport: ''
}
```

```html
<div>
  <label>New Sport:</label>
  <input v-model="newSport" />
</div>
```

### Updating Data

```js
methods: {
  addSport() {
    this.sports.push(this.newSport);
    this.newSport = '';
  }
},
```

### Use `created` event to fetch data

```js
created() {
  fetch('http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
    .then(res => res.json())
    .then(data => this.recipes = data);
}
```

```html
<ul>
  <li v-for="recipe of recipes">{{ recipe.title }}</li>
</ul>
```

### Vue Lifecycle Diagram

* https://vuejs.org/assets/lifecycle.16e4c08e.png

### App Creation with vue-cli
* Install vue-cli

```shell
% npm i -g @vue/cli
% vue --version

% vue create my-project

% cd my-project
% yarn serve
```

* Explore the created project structure
* Single file vue components

### Useful Links
* Comparison with table: https://www.spaceotechnologies.com/blog/front-end-frameworks-comparison/
* Vue Cheatsheet: https://devhints.io/vue
* Popularity comparison: https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190
* Vue team: https://vuejs.org/about/team.html
