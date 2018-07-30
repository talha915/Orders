import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordionfooter',
  templateUrl: './accordionfooter.component.html',
  styleUrls: ['./accordionfooter.component.css']
})
export class AccordionfooterComponent implements OnInit {

  public isClicked = true;
  public isClicked1 = false;
  public isClicked2 = false;
  public isClicked3 = false;
  constructor() { }

  ngOnInit() {
  }

  check(){
    this.isClicked = !this.isClicked;
    if(this.isClicked === false || this.isClicked === true) {
      this.isClicked1 = false;
      this.isClicked2 = false;
      this.isClicked3 = false;
    }
    console.log("Status of Button: ", this.isClicked);
  }

  check1(){
    this.isClicked1 = !this.isClicked1;
    if(this.isClicked1 === true) {
      this.isClicked = false;
      this.isClicked2 = false;
      this.isClicked3 = false;
    }
    console.log("Status of Button: ", this.isClicked1);
  }

  check2(){
    this.isClicked2 = !this.isClicked2;
    if(this.isClicked2 === true) {
      this.isClicked = false;
      this.isClicked1 = false;
      this.isClicked3 = false;
    }
    console.log("Status of Button: ", this.isClicked2);
  }

  check3(){
    this.isClicked3 = !this.isClicked3;
    if(this.isClicked3 === true) {
      this.isClicked = false;
      this.isClicked1 = false;
      this.isClicked2 = false;
    }
    console.log("Status of Button: ", this.isClicked3);
  }
}
