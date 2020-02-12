<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld @message-stored="messageFromChild" msg="Welcome to Your Vue.js App" propTwo="how are you?"/>
    <p>Child Message: {{ parentMessage }}</p>
    <Slots>I am passing something to you</Slots>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Slots from './components/Slots.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Slots
  },
  data() {
    return {
      parentMessage: ''
    }
  },
  methods: {
    messageFromChild(childMessage) {
      this.parentMessage = childMessage;
    }
  }
}
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
