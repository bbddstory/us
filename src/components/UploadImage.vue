<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'uploadImage-comp',
  data() {
    return {
      title: 'uploadImage Component'
    }
  }
}
</script>

<style lang="scss" scoped>
// @import './variables.scss';

h1 {
  color: navy;
}
</style>