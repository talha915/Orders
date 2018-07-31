import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import { shop } from '../Data/Shop';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public shopData;
  public pageurl;
  public obj;
  public id;
  public image;
  public price;
  constructor(private router: Router, private dialogService:DialogService) {
    this.shopData = shop;
    console.log("Shop", this.shopData);
    this.router.events  
    .filter(event => event instanceof NavigationEnd)  
    .subscribe(e => {    
      this.pageurl = e; 
      console.log("Page Url: ", this.pageurl);
    });
  }

  ngOnInit() {
  }


  addtocart(index){
    console.log("Index: ", index);
    this.router.navigateByUrl('ShopsDetails/' + index);
  }

  changeRoute(index) {
    this.obj = this.shopData[index];
    this.id = this.obj.id;
    this.image = this.obj.image;
    this.price = this.obj.price;
  }
}
