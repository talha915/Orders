import { Component, OnInit } from '@angular/core';
import { shop } from '../Data/Shop';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  public shopData;
  constructor() { 
    this.shopData = shop;
    console.log("Shop", this.shopData);
  }

  ngOnInit() {
  }

}
