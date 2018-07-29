<template>
  <md-speed-dial class="md-bottom-left" md-event="click">
    <md-speed-dial-target style="background: #00a651 !important;">
      <md-icon class="md-morph-initial">add</md-icon>
      <md-icon class="md-morph-final">close</md-icon>
    </md-speed-dial-target>

    <md-speed-dial-content>
       <!-- v-on:click="takePhoto" -->
      <md-button class="md-icon-button">
        <md-icon>photo_camera</md-icon>
        <label for="take-photo" style="position: absolute;top: -35%;left: -35%;display: block;border-radius: 50%;_background: red;width: 170%;height: 170%;">
          <input id="take-photo" type="file" name="imageupload" accept="image/*" capture="camera" style="display: none;" v-on:change="photoReady($event)"/>
        </label>
      </md-button>

      <!-- v-on:click="photoReady" -->
      <md-button class="md-icon-button">
        <md-icon>photo</md-icon>
        <label for="upload-photo" style="position: absolute;top: -35%;left: -35%;display: block;border-radius: 50%;_background: green;width: 170%;height: 170%;">
          <input id="upload-photo" type="file" name="imageupload" accept="image/*" style="display: none;" multiple v-on:change="photoReady($event)"/>
        </label>
      </md-button>

    </md-speed-dial-content>
  </md-speed-dial>
</template>

<script>
import EXIF from 'exif-js';
import ImageCompressor from 'image-compressor.js';
import axios from 'axios';
// const NODE_URL = 'http://us.foreverjuniordev.com:49995/';
const NODE_URL = 'http://localhost:49995/';

export default {
  name: 'speeddial-comp',
  data: () => ({}),
  methods: {
    // takePhoto: () => {
    //   var promise = navigator.mediaDevices
    //     .getUserMedia({
    //       audio: true,
    //       video: { facingMode: "user" }
    //     })
    //     .then(function(stream) {
    //       console.log("abc");
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });
    // },
    photoReady: fileInput => {
      EXIF.getData(fileInput.target.files[0], function() {
        // console.log(this.exifdata);
        // console.log(EXIF.getTag(this, "DateTimeOriginal"));
      });

      if (fileInput.target.files.length) {
        for (let i = 0; i < fileInput.target.files.length; i++) {
          let file = fileInput.target.files[i];
          let img = new Image();
          let thumbOpt = { checkOrientation: true };
          let viewOpt = { checkOrientation: true };

          img.src = window.URL.createObjectURL(file);
          img.onload = () => {
            if (img.naturalWidth >= img.naturalHeight) {
              // Portrait image
              thumbOpt = { maxWidth: 540, maxHeight: 960 };
              viewOpt = { maxWidth: 1080, maxHeight: 1920 };
            } else {
              // Landscape image
              thumbOpt = { maxWidth: 960, maxHeight: 540 };
              viewOpt = { maxWidth: 1920, maxHeight: 1080 };
            }
            thumbOpt.quality = 0.2;
            // Only compress images larger than 120KB (exclusive)
            if (Math.floor(file.size / 1024) > 120) {
              viewOpt.quality = 0.7;
            } else {
              viewOpt.quality = 1;
            }

            // Memory must be released
            window.URL.revokeObjectURL(img.src);

            const imageCompressor = new ImageCompressor();

            imageCompressor
              .compress(file, thumbOpt)
              .then(result => {
                // Handle the compressed image file.
                let formData = new FormData();
                formData.append('imageupload', result, 'thumb_' + file.name);

                axios
                  .post(NODE_URL + 'images/upload', formData)
                  .then(res => res)
                  .catch(err => err);
              })
              .catch(err => err);

            imageCompressor
              .compress(file, viewOpt)
              .then(result => {
                // Handle the compressed image file.
                let formData = new FormData();
                formData.append('imageupload', result, file.name);

                axios
                  .post(NODE_URL + 'images/upload', formData)
                  .then(res => res)
                  .catch(err => err);
              })
              .catch(err => err);
          };
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>