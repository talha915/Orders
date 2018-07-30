import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ShopsService } from '../Services/shops.service';
import {shop} from '../Data/Shop';
import { CardsService } from '../cards.service';
@Component({
  selector: 'app-cardmodal',
  templateUrl: './cardmodal.component.html',
  styleUrls: ['./cardmodal.component.css']
})
export class CardmodalComponent extends DialogComponent<null, null> implements OnInit {

  public data;
  public shopData;
  public obj;
  constructor(dialogService: DialogService, private service: ShopsService, public cardservice: CardsService) {
    super(dialogService);
    this.shopData = shop;
    this.data = this.cardservice.getcardData();
    
    this.obj = this.shopData[this.data];
    console.log("this.data", this.data);
    // this.obj = this.shopData[this.data];
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.close();
  }

  ngOnInit() {
    
    console.log("this.shopDats....", this.shopData[this.data]);
  }

}
