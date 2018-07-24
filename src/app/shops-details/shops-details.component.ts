import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../Services/shops.service';
import { shop } from '../Data/Shop';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})
export class ShopsDetailsComponent implements OnInit {
  public data;
  public shopData;
  public ShopIndex;
  constructor(public service: ShopsService) {
    this.data = this.service.getData();
    this.shopData = shop; 
    this.ShopIndex = this.shopData[this.data];
   }

  ngOnInit() {
    console.log("Datttta", this.data);
    console.log("SHOPDATA...>>", this.shopData);
    console.log("ShopIndex", this.ShopIndex);
  }

  btnchange(){
    console.log("Change Color");
  }
}
