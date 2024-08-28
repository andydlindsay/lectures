# Intro to Vue.js

### To Do
* [ ] What is Vue.js?
* [ ] Installation
* [ ] The Default App
* [ ] Component Basics
* [ ] Conditional Rendering and Looping
* [ ] Event Handling
* [ ] Props
* [ ] Slots (`props.children`)
* [ ] State
* [ ] Bound Props
* [ ] Lifecycle Hooks
* [ ] Data Fetching

### Vue.js
* The [official docs](https://vuejs.org/) describe Vue as being Approachable, Versatile, and Performant
* Approachable
  * It's just HTML, CSS, and JS (can be used effectively with TypeScript and SASS)
  * Minimal API to learn
* Versatile
  * Vue is a "progressive" web framework meaning that it can comprise a small part of an application or be a fully featured Vue web app, or anything in between
* Performant
  * Smaller file sizes than Angular or React ([source](https://gist.github.com/Restuta/cda69e50a853aa64912d))
  * Small file size means faster loading in browsers
* Component-based framework (similar to React)
* Reactive: When the data (state) changes, the view re-renders

### Installation
* Use `vite` directly or use the `vue` builder tool
* `vue` gives more specific Vue options while `vite` is more generic

```bash
# using vite
npm create vite@latest app-name

# using vue
npm create vue@latest app-name
```

### Event Handling
* Any DOM event can be handled by adding a listener to the particular element
* The syntax is `v-on:<event>="functionToCall"`

```html
<button v-on:click="onButtonClick">Click Me!</button>

<!-- there's also a short hand for v-on -->
<button @click="onButtonClick">Click Me!</button>
```

### Useful Links
- [Framework Popularity](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190)
- [Framework Size Comparison](https://gist.github.com/Restuta/cda69e50a853aa64912d)
