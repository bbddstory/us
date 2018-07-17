import { Component, Input, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import * as jq from 'jquery';

// import { SecurityContext } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() major: string;
  changeLog: string[] = [];

  constructor(private http: HttpClient) {
  }

  items = [
    'https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTk0NDU5NzA2Ml5BMl5BanBnXkFtZTgwMDQ4ODc3NDM@._V1_SY1000_CR0,0,705,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMmE2M2I4MWYtM2NiOC00OGM0LTllNWQtZDhlMjNlNjg5NzUwXkEyXkFqcGdeQXVyNjczMDc2NDQ@._V1_SY1000_SX1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMzAxNTY3ODg0NF5BMl5BanBnXkFtZTgwMjk2Njk5NDM@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDg1NDYyNjUxNV5BMl5BanBnXkFtZTgwMTAwNjQxMzI@._V1_SY1000_SX1000_AL_.jpg',
    // ];

    // moreItems = [
    'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
  ];

  imgHeight = Math.floor((window.screen.availWidth - 40) / 3) + 'px';
  image_prefix = `<div class="img-div" style="height:` + this.imgHeight + `;background: url(`;
  image_postfix = `) 50% no-repeat;background-size: cover;border: 5px solid #fff;box-sizing: border-box;"></div>`;
  htmlArr = [];

  fileName = '';

  ngOnInit() {
    // console.log(window.screen.availWidth);

    this.items.forEach(el => {
      // return this._sanitizer.sanitize(SecurityContext.HTML, this._htmlProperty);
      // console.log(this._sanitizer.sanitize(SecurityContext.HTML, this.image_prefix + el + this.image_postfix));

      this.htmlArr.push(this.image_prefix + el + this.image_postfix)
    });

    // console.log(this.htmlArr);

    // this.items = this.items.concat(this.moreItems);
    // var $container = jq('.grid');
    // $container.masonry({
    //   columnWidth: 200,
    //   itemSelector: '.grid-item'
    // });

    // jq('.grid').masonry({
    //   // options
    //   itemSelector: '.grid-item',
    //   columnWidth: 200
    // });
    // var masonry_today;
    // setTimeout(() => {
    //   var container_today = document.querySelector('.masonry-grid-today');
    //   // masonry_today = new Masonry(container_today, {
    //   //   columnWidth: window.screen.availWidth / 3,
    //   //   // columnWidth: '.col-width',
    //   //   itemSelector: '.grid-item',
    //   //   percentPosition: true
    //   // });

    //   // var container_yesterday = document.querySelector('.masonry-grid-yesterday');
    //   // var masonry_yesterday = new Masonry(container_yesterday, {
    //   //   columnWidth: window.screen.availWidth / 3,
    //   //   itemSelector: '.grid-item'
    //   // });

    //   // var container_more = document.querySelector('.masonry-grid-more');
    //   // var masonry_more = new Masonry(container_more, {
    //   //   columnWidth: window.screen.availWidth / 3,
    //   //   itemSelector: '.grid-item'
    //   // });

    // setTimeout(() => {
    //   this.moreItems.forEach(el => {
    //     // return this._sanitizer.sanitize(SecurityContext.HTML, this._htmlProperty);
    //     // console.log(this._sanitizer.sanitize(SecurityContext.HTML, this.image_prefix + el + this.image_postfix));

    //     // this.htmlArr.push(this.image_prefix + el + this.image_postfix)
    //   });
    //   this.htmlArr.shift();
    //   // masonry_today.layout();
    //   // console.log('cat');
    // }, 2000);

    //   setTimeout(() => {
    //     // masonry_today.layout();
    //     console.log('layout');
    //   }, 2000);
    // }, 1000);

  }
  // fileChange = false;

  photoReady(fileInput: any) {
    console.log(fileInput.target.files);
    if (fileInput.target.files.length) {
      
      
      let file = fileInput.target.files[0];
      // this.fileChange = true;
      let formData = new FormData();
      formData.append('imageupload', file, file.name);
      
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

      this.http.post('http://localhost:49995/images/upload', formData)
      .subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      )
    }
  }

  preventRedir($event) {
    console.log($event);
    // let test = this.elRef.nativeElement.querySelector('imageupload');
    // test.submit();
    // document.forms.namedItem('imageupload').submit();
    $event.preventDefault();
  }

  takePhoto(): void {
    console.log(123);

    var promise = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { facingMode: "user" }
    }).then(function (stream) {
      console.log('abc');

      /* use the stream */
    }).catch(function (err) {
      console.log(err);
      /* handle the error */
    });
  }

}
