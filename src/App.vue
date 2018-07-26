<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Frame msg="US"/>
  </div>
</template>

<script>
import Frame from './components/Frame.vue'

export default {
  name: 'app',
  components: {
    Frame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
