<template>
  <div class="slots">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Slots'
});
</script>

<style>
  .slots {
    width: 100%;
    color: palevioletred;
  }
</style>
