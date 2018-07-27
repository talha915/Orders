import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { shop } from '../Data/Shop';
import { ShopsService } from '../Services/shops.service';
import { HeaderComponent } from '../header/header.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})

export class ShopsComponent implements OnInit {
  
  public shopData;
  public indx;
  private mytick;
  public pageurl;
  constructor(private router: Router, public service: ShopsService, private spinnerService: Ng4LoadingSpinnerService) 
  { 
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
    let myObservable = Observable.interval(1000);
    myObservable.subscribe(t => {
      this.mytick = t;
    });
  }

  addtocart(index){
    this.service.setData(index);
    //this.objservice.setObject(this.shopData[index]);
    console.log("Index: ", index);
    debugger;
    console.log("this.shop Object", this.shopData[index]);
    this.router.navigateByUrl('ShopsDetails/' + index);
  }

}
