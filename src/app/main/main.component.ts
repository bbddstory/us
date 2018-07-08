import { Component, OnInit } from '@angular/core';
// import * as jq from 'jquery';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  items = [
    'https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTk0NDU5NzA2Ml5BMl5BanBnXkFtZTgwMDQ4ODc3NDM@._V1_SY1000_CR0,0,705,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMmE2M2I4MWYtM2NiOC00OGM0LTllNWQtZDhlMjNlNjg5NzUwXkEyXkFqcGdeQXVyNjczMDc2NDQ@._V1_SY1000_SX1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMzAxNTY3ODg0NF5BMl5BanBnXkFtZTgwMjk2Njk5NDM@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDg1NDYyNjUxNV5BMl5BanBnXkFtZTgwMTAwNjQxMzI@._V1_SY1000_SX1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
  ];
  
  moreItems = [
    'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
  ];

  ngOnInit() {
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

    setTimeout(() => {
      var container_today = document.querySelector('.masonry-grid-today');
      var masonry_today = new Masonry(container_today, {
        columnWidth: window.screen.availWidth / 3,
        itemSelector: '.grid-item'
      });
      
      // var container_yesterday = document.querySelector('.masonry-grid-yesterday');
      // var masonry_yesterday = new Masonry(container_yesterday, {
      //   columnWidth: window.screen.availWidth / 3,
      //   itemSelector: '.grid-item'
      // });
      
      // var container_more = document.querySelector('.masonry-grid-more');
      // var masonry_more = new Masonry(container_more, {
      //   columnWidth: window.screen.availWidth / 3,
      //   itemSelector: '.grid-item'
      // });

    }, 1000);

    // setTimeout(() => {
    //   this.items = this.items.concat(this.moreItems);
    // }, 4000);
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
