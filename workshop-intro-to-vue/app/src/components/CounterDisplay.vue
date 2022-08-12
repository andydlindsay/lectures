<template>
  <h2>Current counter: {{ counter }}</h2>
</template>

<script>
export default {
  name: 'CounterDisplay',
  props: ['counter']
};
</script>

<style scoped>
h2 {
  color: green;
}
</style>
