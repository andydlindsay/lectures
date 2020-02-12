# Intro to Vue.js

### To Do
* [ ] What is Vue.js?
* [ ] The Vue Instance
* [ ] Vue Lifecycle Methods
* [ ] 

### Vue.js
* The [official docs](https://vuejs.org/) describe Vue as being Approachable, Versatile, and Performant
* Approachable
  * It's just HTML, CSS, and JS (can be used effectively with TypeScript and SASS)
  * Minimal API to learn
* Versatile
  * Vue is a "progressive" web framework meaning that it can comprise a small part of an application or be a fully featured Vue web app, or anything in between
* Performant
  * Smaller file sizes than Angular or React [source](https://gist.github.com/Restuta/cda69e50a853aa64912d)
  * Small file size means faster loading in browsers
* Component-based framework (similar to React)
* Reactive: When the data (state) changes, the view re-renders

### The Vue Instance
* Every component is its own Vue instance

```js
const app = new Vue({
  el: '#root',
  data: {
    myString: 'something relevant'
  }
});
```

* The `el` (short for _element_) is the DOM element that the Vue instance will be mounted to
* The data object contains any state controlled by the component

### Vue Lifecycle Hooks
* A lifecycle hook is a particular stage in the life of a component
* Vue exposes several lifecycle hooks that we can write behaviour for
* `beforeCreate` => `created` => `beforeMount` => `mounted` => `beforeUpdate` => `updated` => `beforeDestroy` => `destroyed`
* Which lifecycle hook to use depends on what you are trying to accomplish
  * Fetch data in the _created_ or _mounted_ hooks
  * Perform any clean up needed in the _beforeDestroy_ hook
* Each hook is a function on the Vue instance

```js
const app = new Vue({
  el: '#root',
  data: {
    sports: []
  },
  created() {
    // perform some data fetching operation when the component is created
    fetch('https://api.myjson.com/bins/9yppg')
      .then(res => res.json())
      .then(data => this.sports = data);
  }
});
```
  
### Useful Links
- [Framework Popularity](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190)
- [Framework Size Comparison](https://gist.github.com/Restuta/cda69e50a853aa64912d)
- [Vue Lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
- [Vue Parent/Child Communication](https://vegibit.com/vuejs-parent-child-communication/)
- []()
