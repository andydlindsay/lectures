<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ propTwo }}</h2>
    <input type="text" v-model="childMessage"/>
    <button type="button" @click="sendToParent">Send Message</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
