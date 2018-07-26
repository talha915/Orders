import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { shop } from '../Data/Shop';
import { ShopsService } from '../Services/shops.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})

export class ShopsComponent implements OnInit {
  
  public shopData;
  public indx;
  
  constructor(private router: Router, public service: ShopsService) { 
    this.shopData = shop;
    console.log("Shop", this.shopData);
  }

  ngOnInit() {
  }

  addtocart(index){
    this.service.setData(index);
    console.log("Index: ", index);
    this.router.navigateByUrl('ShopsDetails/' + index);
  }

}
