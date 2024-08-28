## Outline

### Introduction to Vue.js
* Progressive framework: you can plug it in to just a part of your application
* Smaller size compared to other front-end frameworks
* Component-based
* Reactive: when the data changes, the view re-renders

### Installation
* Use `vite` directly or use the `vue` builder tool
* `vue` gives more specific Vue options while `vite` is more generic

```bash
# using vite
npm create vite@latest app-name

# using vue
npm create vue@latest app-name
```

### Explore the default app
* `vite.config.js` contains default configuration, adds the `vue` plugin to vite and aliases the root path as `@` to prevent needing to use relative paths for imports
* `index.html` serves the same purpose as the index file in React apps
* `main.js` (similar to `index.js` in React) sets up the Vue app and mounts it to the div in the DOM with the corresponding id

### Component Basics

```vue
<script setup>
// used for setting up state, creating functions,
// fetching data, and defining props
</script>

<template>
  <!-- template for component -->
</template>

<style scoped>
.styles.for.this.component {}
</style>
```

### Conditional Rendering and Looping

```vue
<script setup>
import FunStuffChild from './FunStuffChild.vue'

const username = 'bob'
const languages = ['javascript', 'css', 'html']
</script>

<template>
  <div>
    <h2>FunStuff Component</h2>

    <!-- conditional rendering -->
    <h2 v-if="username === 'alice'">Username must be "alice"</h2>
    <h2 v-else-if="username === 'bob'">What a great name!</h2>
    <h2 v-else>Choose a better name</h2>

    <!-- array looping -->
    <ul>
      <li v-for="language of languages" :key="language">{{ language }}</li>
    </ul>

    <!-- looping with a child component -->
    <FunStuffChild v-for="language of languages" :key="language" :language="language" />
  </div>
</template>
```

### Event Handling
* Any DOM event can be handled by adding a listener to the particular element
* The syntax is `v-on:<event>="functionToCall"`

```html
<button v-on:click="onButtonClick">Click Me!</button>

<!-- there's also a short hand for v-on -->
<button @click="onButtonClick">Click Me!</button>
```

### Props

```vue
<script setup>
// simple (no types)
defineProps(['propOne', 'propTwo'])

// with data types
defineProps({
  propOne: String,
  propTwo: Number,
})

// with more info per prop
defineProps({
  propOne: {
    type: String,
    required: true,
  },
  propTwo: {
    type: Number,
    defaultValue: 42,
  }
})
<script>
```

```vue
<template>
  <h2>Prop One: {{ propOne }}</h2>
  <h2>Prop Two: {{ propTwo }}</h2>
</template>
```

### Slots
* Equivalent to `props.children` in React

```vue
<script setup>
import Header from './components/Header.vue'
import Slots from './components/Slots.vue'
</script>

<template>
  <!-- <Header message="About Us" />
  <Header message="Welcome to Our Site!" /> -->
  <Slots>
    <h3>Inside the opening and closing tags</h3>
    <h4>This is like props.children from React</h4>
  </Slots>
</template>

<style scoped></style>
```

```vue
<template>
  <div>
    <h2>Slots Component</h2>
    <slot />
    <slot />
  </div>
</template>
```

### Named Slots [stretch]

```vue
<template>
  <!-- <Header message="About Us" />
  <Header message="Welcome to Our Site!" /> -->
  <Slots>
    <template #top>
      <h2>This shows up at the top of the page</h2>
    </template>
    <template #bottom>
      <h4>Copyright &copy;2024</h4>
    </template>
  </Slots>
</template>
```

```vue
<template>
  <div>
    <h2>Slots Component</h2>
    <slot name="top"/>
    <slot name="bottom"/>
  </div>
</template>
```

### State
* State is established in the script tag using `ref` to make the value reactive (without this, Vue won't know/update the DOM if the value changes)

```vue
<script setup>
import {ref} from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <button @click="count++">Count is {{count}}</button>
  </div>
</template>
```

### Complex State

```vue
<script setup>
import {ref} from 'vue'

const foods = ref([])
const newFood = ref('')
</script>

<template>
  <div>
    <h2>Foods Component</h2>

    <div>
      <label>New Food:</label>
      <input 
        v-bind:value="newFood"
        v-on:input="e => newFood = e.target.value"
      />
      <button
        v-on:click="foods.push(newFood)"
      >Add</button>
    </div>

    <div>
      <ul>
        <li v-for="food of foods" :key="food">{{ food }}</li>
      </ul>
    </div>
  </div>
</template>
```

* Using `v-model` and shorthands

```vue
<template>
  <div>
    <h2>Foods Component</h2>

    <div>
      <label>New Food:</label>
      <input 
        v-model="newFood"
      />
      <button
        @click="foods.push(newFood)"
      >Add</button>
    </div>

    <div>
      <ul>
        <li v-for="food of foods" :key="food">{{ food }}</li>
      </ul>
    </div>
  </div>
</template>
```

### Passing bound props (reactive)
* If we want to pass down reactive (ie. changeable) values, we need to bind them to the child
* Adding a colon the front of the property is the same as using the more verbose `v-bind:`

```vue
<script setup>
import HeaderChild from './HeaderChild.vue'

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const message = 'overridden';
</script>

<template>
  <div class="welcome">
    <h2>Header Component</h2>
    <h2>Message: {{ props.message }}</h2>
    <HeaderChild :message="props.message" />
  </div>
</template>
```

### Lifecycle Hooks
* Commonly used: `onMounted`, `onUpdated`, `onUnmounted`
* [Lifecycle Docs](https://vuejs.org/api/composition-api-lifecycle)

```vue
<script setup>
import {onMounted, onUpdated, onUnmounted, ref} from 'vue'

const count = ref(0)
const interval = ref(null)

// called when the component is added to the DOM
// used for handling side effects
onMounted(() => {
  console.log('component has been mounted')
  interval.value = setInterval(() => {
    console.log('interval has fired')
  }, 500);
})

// called whenever the component's reactive data updates
onUpdated(() => {
  if (count.value >= 10) count.value = 0
  console.log('component has been updated')
})

// called when the component is removed from the DOM
// used for cleanup
onUnmounted(() => {
  clearInterval(interval.value)
  console.log('component has been unmounted')
})
</script>

<template>
  <div>
    <h2>Lifecycle Component</h2>
    <button @click="count++">Count is {{ count }}</button>
  </div>
</template>
```

### Data fetching
* Data fetching is normally done in the `onMounted` function inside the script tag

```vue
<script setup>
import {ref, onMounted} from 'vue'

const monster = ref()

onMounted(() => {
  fetch('https://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
    .then(res => res.json())
    .then(res => monster.value = res);
})
</script>

<template>
  <div v-if="monster" class="monster">
    <h2>Name: {{ monster.name }}</h2>
    <h3>Languages: {{ monster.languages }}</h3>
    <h3>Alignment: {{ monster.alignment }}</h3>
  </div>
</template>

<style scoped>
.monster {
  border: 2px solid magenta;
  border-radius: 15px;
  padding: 20px;
  color: lightblue;
}
</style>
```

### Using the proxy to avoid CORS issues
* We need to configure the proxy in `vite.config.js`

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true, // if the server requires the host header to match the target url
        rewrite: (path) => path.replace(/^\/api/, ''), // used if you want to remove the prefix from the proxied request
      }
    }
  }
})
```
