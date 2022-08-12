<template>
  <div id="app">
    <HeaderComponent heading="Welcome to our site!" />
    <CounterDisplay v-bind:counter="counter" />
    <CounterButton v-on:increment="addOne" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CounterButton from './components/CounterButton.vue';
import CounterDisplay from './components/CounterDisplay.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CounterButton,
    CounterDisplay
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addOne() {
      this.counter += 1;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
