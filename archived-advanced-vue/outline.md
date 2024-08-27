## External Resources

* [Vue Install Instructions](https://vuejs.org/v2/guide/)
* [Vue Cheat Sheet](https://devhints.io/vue)
* [Chef Andy API](http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes)
* [Vue Lifecycle Diagram](https://vuejs.org/assets/lifecycle.16e4c08e.png)

## Outline

### Introduction to Vue.js
* Progressive framework: you can plug it in to just a part of your application
* Smaller size compared to other front-end frameworks
* Component-based
* Reactive: when the data changes, the view re-renders

### Follow steps from the guide
* https://vuejs.org/v2/guide/

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<div id="app">
  {{ message }}
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });
</script>
```

### Experiment in the browser console
* Demonstrate name and that it can be updated in the console with `app.name = 'something else';`
* Show how it works just like jQuery and must wait for the DOM to load to hook into it

### Add an array to the data object
* Render an unordered list using `v-for`

```html
<ul>
  <li v-for="sport of sports">{{ sport }}</li>
</ul>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      sports: ['badminton', 'volleyball', 'soccer']
    }
  });
</script>
```

* Add a new item to the list using `app.sports.push('tennis');`

### Bound Properties
* Demonstrate bound properties using `v-bind:` and then the short-hand

```html
<h2 v-bind:title="message">Hello {{ name }}</h2>
<h2 :title="message">Hello {{ name }}</h2>
```

* Hover over the `h2` to show the tooltip
* Change the tooltip with `app.message = 'something else';`

### Conditional Rendering
* Demonstrate `v-if`

```js
data: {
  visible: true
}
```

```html
<p v-if="visible">I'm here!!!</p>
<p v-else>I'm here instead!</p>
```

* Open the console and set `app.visible = false;`

### Methods and Event Handling
* Add the `methods` object and create a simple method for a click event
* Bind it to a DOM element using `v-on:click="functionName"`

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

### Create a counter :p

```js
data: {
  counter: 0
},
methods: {
  incrementCounter() {
    this.counter += 1;
  }
}
```

```html
<div>
  <h2>Counter: {{ counter }}</h2>
  <button @click="incrementCounter">Plus 1</button>
</div>
```

### Binding Data with `v-model`
* Add a `form` object to the `data` object

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

### Computed Properties
* `computed` properties are values that can be calculated/computed from other values in state
* Computed properties are not called like functions, they are referenced like other pieces of state

```js
computed: {
  reverseUsername() {
    return this.form.username.split('').reverse().join('');
  }
}
```

### Watch
* `watch` property is used to watch for changes to values (similar to dependency array in `useEffect`)

```js
watch: {
  'form.username': function() {
    console.log('updates!');
  }
  // or
  'form.username'() {
    console.log('updates!');
  }
}
```

### Vue Lifecycle Methods
* https://vuejs.org/assets/lifecycle.16e4c08e.png
* Introduce the `created` lifecycle method and `fetch` data from an external API

```vue
<ol>
  <li v-for="recipe of recipes">{{ recipe.title }}</li>
</ol>
```

```js
data: {
  recipes: []
},
created() {
  fetch('http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
    .then(res => res.json())
    .then(data => this.recipes = data);
}
```

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

### Prop passing from parent to child

```vue
<template>
  <ChildComponent :prop="prop" />
</template>

<script>
import InBetween from './components/InBetween.vue';

export default {
  name: 'App',
  data() {
    return {
      poem: 'Hello to the day'
    };
  },
  components: {
    InBetween
  },
}
</script>
```

### Demo Vue devtools

### Custom Event Handling
* Emit an event from the child component

```js
data() {
  return {
    childMessage: ''
  }
},
props: ['msg', 'propTwo'],
methods: {
  sendToParent() {
    this.$emit('message-stored', this.childMessage);
  }
}
```

* Look in devtools to see the event and the payload
* Listen for the event in the parent by attaching a custom event handler

```html
<HelloWorld @message-stored="messageFromChild" />
```

* You can pass it down deeper with this syntax on "in-between" components

```html
<TestComponent v-on="$listeners" :poem="poem" />
```

### Slots
* Slots are for child elements passed in (similar to `props.children`)

```js
// Slots.vue
<template>
  <div class="slots">
    <slot></slot>
  </div>
</template>

// App.vue
<Slots>I am passing something to you</Slots>
```
