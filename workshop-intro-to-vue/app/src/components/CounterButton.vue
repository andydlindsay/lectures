<template>
  <div>
    <button v-on:click="handleClick">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',
  emits: ['increment'],
  methods: {
    handleClick() {
      this.$emit('increment');
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 15px;
  font-size: 1.2rem;
  background-color: lightgrey;
}
</style>
