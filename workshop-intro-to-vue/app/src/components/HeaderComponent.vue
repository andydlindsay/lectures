<template>
  <h1 class="heading">{{ heading }}</h1>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: ['heading']
}
</script>

<style>
.heading {
  color: purple;
  text-decoration: underline;
}
</style>
