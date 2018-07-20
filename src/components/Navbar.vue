<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'navbar-comp',
  data() {
    return {
      title: 'Navbar Component'
    }
  }
}
</script>

<style lang="scss" scoped>
// @import './variables.scss';

h1 {
  color: red;
}
</style>