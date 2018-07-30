import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import { shop } from '../Data/Shop';
import { ShopsService } from '../Services/shops.service';
import { Router, NavigationEnd } from '@angular/router';
import { CardmodalComponent } from '../cardmodal/cardmodal.component';
import { CardsService } from '../cards.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public shopData;
  public pageurl;
  constructor(private service: ShopsService,public cardservice: CardsService, private router: Router, private dialogService:DialogService) {
    this.shopData = shop;
    console.log("Shop", this.shopData);
    this.router.events  
    .filter(event => event instanceof NavigationEnd)  
    .subscribe(e => {    
      //console.log('prev:', this.previousUrl);    
      //this.previousUrl = e.url; 
      this.pageurl = e; 
      console.log("Page Url: ", this.pageurl);
    });
  }

  ngOnInit() {
  }


  addtocart(index){
    this.service.setData(index);
    //this.objservice.setObject(this.shopData[index]);
    console.log("Index: ", index);
    console.log("this.shop Object", this.shopData[index]);
    this.router.navigateByUrl('ShopsDetails/' + index);
  }

  modalDialog(data) {
    this.cardservice.setcardData(data);
    let disposable = this.dialogService.addDialog(CardmodalComponent);    
    debugger;
    console.log("Value is: ",data );
  }

  modal() {
    console.log("Open modal");
  }
}
