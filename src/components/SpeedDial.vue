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
    
  }),
  photoReady(fileInput) {
    console.log(fileInput.target.files);
    if (fileInput.target.files.length) {

      let file = fileInput.target.files[0];
      // console.log(file);      
      // this.fileChange = true;
      let img = new Image(), optThumb = {}, optLarge = {};
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        console.log(img.naturalWidth, img.naturalHeight);

        if (img.naturalWidth >= img.naturalHeight) {
          // Portrait image
          optThumb = {
            quality: .2,
            maxWidth: 540,
            maxHeight: 960
          }
          optLarge = {
            quality: .7,
            maxWidth: 1080,
            maxHeight: 1920
          }
        } else {
          // Landscape image
          optThumb = {
            quality: .2,
            maxWidth: 960,
            maxHeight: 540
          }
          optLarge = {
            quality: .7,
            maxWidth: 1920,
            maxHeight: 1080
          }
        }
        // Memory must be released
        window.URL.revokeObjectURL(img.src);
      };


      // const imageCompressor = new ImageCompressor();
      // imageCompressor.compress(file, {
      // checkOrientation: false,
      // Options for thumbnails
      // quality: .2,
      // maxWidth: 540,
      // maxHeight: 960
      // Options for enlarged photos
      //   quality: .7,
      //   maxWidth: 1080,
      //   maxHeight: 1920
      // }).then((result) => {
      //   // Handle the compressed image file.
      //   const formData = new FormData();
      //   formData.append('imageupload', result, file.name);
      //   this.http.post('http://us.foreverjuniordev.com:49995/images/upload', formData)
      //     .subscribe(
      //       res => {
      //         console.log(res);
      //       }, err => {
      //         console.log(err);
      //       }
      //     )
      // }).catch((err) => {
      // })
      // const imageCompressor = new ImageCompressor(file, {
      //   quality: .7,
      //   maxWidth: 1080,
      //   maxHeight: 1920,
      //   success(result) {
      //     const formData = new FormData();
      //     formData.append('imageupload', result, file.name);
      //     this.http.post('http://localhost:49995/images/upload', formData)
      //       .subscribe(
      //         res => {
      //           console.log(res);
      //         }, err => {
      //           console.log(err);
      //         }
      //       )
      //   }, error(e) {
      //     console.log(e.message);
      //   },
      // });
      // let formData = new FormData();
      // formData.append('imageupload', file, file.name);
      // let xhr = new XMLHttpRequest();
      // xhr.open('POST', 'http://localhost:49995/images/upload', true);
      // xhr.onload = () => {
      //   if (xhr.status === 200) {
      //     console.log(200);
      //   } else {
      //     alert('An error occurred!');
      //   }
      // };
      // xhr.send(formData);
      // this.http.post('http://localhost:49995/images/upload', formData)
      // .subscribe(
      //   res => {
      //     console.log(res);
      //   }, err => {
      //     console.log(err);
      //   }
      // )
    }
  },

  takePhoto() {
    var promise = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { facingMode: "user" }
    }).then(function (stream) {
      console.log('abc');
    }).catch(function (err) {
      console.log(err);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>