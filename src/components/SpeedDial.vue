<template>
  <md-speed-dial class="md-bottom-left" md-event="click">
    <md-speed-dial-target style="background: #00a651 !important;">
      <md-icon class="md-morph-initial">add</md-icon>
      <md-icon class="md-morph-final">close</md-icon>
    </md-speed-dial-target>

    <md-speed-dial-content>
      <md-button class="md-icon-button">
        <md-icon>photo_camera</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>photo</md-icon>
      </md-button>
    </md-speed-dial-content>
  </md-speed-dial>
</template>

<script>
export default {
  name: "speeddial-comp",
  data: () => ({
    
  })
};
</script>

<style lang="scss" scoped>
</style>