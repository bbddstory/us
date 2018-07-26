<template>
  <!-- <div id="app">
    <img src="./images/logo.png">
  </div> -->
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{title}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Us&nbsp;&nbsp;|&nbsp;&nbsp;Options</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>photo_album</md-icon>
            <span class="md-list-item-text">My Albums</span>
          </md-list-item>

          <md-list-item>
            <md-icon>add_photo_alternate</md-icon>
            <span class="md-list-item-text">New Album</span>
          </md-list-item>

          <md-list-item>
            <md-icon>share</md-icon>
            <span class="md-list-item-text">Share Album</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Delete Album</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <Masonry/>
      </md-app-content>
    </md-app>

    <SpeedDial/>
  </div>
</template>

<script>
import Masonry from "./components/Masonry.vue";
import SpeedDial from "./components/SpeedDial.vue";

export default {
  name: "app-comp",
  components: {
    Masonry,
    SpeedDial
  },
  data: () => ({
    title: "San Diego Comic-Con",
    menuVisible: false
  })
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #56b983;
}

.md-app {
  height: 100vh;
  max-height: 100vh;
  // border: 1px solid rgba(#000, 0.12);
  .md-primary {
    background: #00a651 !important;
  }
  .md-app-content {
    padding: 10px;
    background: #555 url("./images/masonry_bg.png") repeat;
  }
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
