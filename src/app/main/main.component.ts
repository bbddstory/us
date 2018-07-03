import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
