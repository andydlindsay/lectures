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
  <!-- template using handlebars -->
</template>

<style scoped>
.styles.for.this.component {}
</style>
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

### Passing bound props (reactive)
* If we want to pass down reactive (ie. changeable) values, we need to bind them to the child

```vue

```

### Data fetching
* Data fetching is normally done in the `onMounted` function inside the script tag
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

```vue
<script setup>
import {ref, onMounted, onUpdated} from 'vue'

const monster = ref()

onMounted(() => {
  fetch('https://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
    .then(res => res.json())
    .then(res => monster.value = res);
})

onUpdated(() => {
  console.log('component updated');
});

console.log('component created');
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
