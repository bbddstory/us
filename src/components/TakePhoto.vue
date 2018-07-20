<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'takePhoto-comp',
  data() {
    return {
      title: 'takePhoto Component'
    }
  }
}
</script>

<style lang="scss" scoped>
// @import './variables.scss';

h1 {
  color: orange;
}
</style>