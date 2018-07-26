import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../Services/shops.service';
import { shop } from '../Data/Shop';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})
export class ShopsDetailsComponent implements OnInit {
  public data;
  public shopData;
  public ShopIndex;
  public isClicked = true;
  public isClicked1 = false;
  public isClicked2 = false;
  public isClicked3 = false;
  constructor(public service: ShopsService, private route: ActivatedRoute) {
    this.data = this.service.getData();
    this.shopData = shop; 
    this.ShopIndex = this.shopData[this.data];

    this.route.params.subscribe(params=>{
      console.log("Params....", params);
    })
    
   }

  ngOnInit() {

    


    console.log("Datttta", this.data);
    console.log("SHOPDATA...>>", this.shopData);
    console.log("ShopIndex", this.ShopIndex);
  }

  btnchange(){
    console.log("Change Color");
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
