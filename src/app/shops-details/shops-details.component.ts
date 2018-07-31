import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ShopsService } from '../Services/shops.service';
import { shop } from '../Data/Shop';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ShopsmallimageComponent } from '../shopsmallimage/shopsmallimage.component';
import { ShoplargeimageComponent } from '../shoplargeimage/shoplargeimage.component';
import { ShopdetailssidebarComponent } from '../shopdetailssidebar/shopdetailssidebar.component';
import { ShopdetailssidebarbuttonComponent } from '../shopdetailssidebarbutton/shopdetailssidebarbutton.component';
import { FooterComponent } from '../footer/footer.component';
import { AccordionfooterComponent } from '../accordionfooter/accordionfooter.component';
import { Subscription } from 'rxjs';
import { ShopdetailsService } from '../shopdetails.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject} from "@angular/core";
@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})
export class ShopsDetailsComponent implements AfterViewInit {
  public data;
  public shopData;
  public ShopIndex;
  public isClicked = true;
  public isClicked1 = false;
  public isClicked2 = false;
  public isClicked3 = false;
  subscription: Subscription;
  //public message;
  public mydata;
  public pageurl;
  public cartvalue;
  public wishlist;
  public wishlistData;
  public carts;
  public cartsValues;
  public cartedvalue;
  @ViewChild(ShopdetailssidebarbuttonComponent) child;

  constructor(public service: ShopsService, private route: ActivatedRoute, private router: Router
  , public detailService: ShopdetailsService, @Inject(DOCUMENT) private document: Document) {
    this.data = this.service.getData();
    this.shopData = shop; 
    this.ShopIndex = this.shopData[this.data];

    this.router.events  
    .filter(event => event instanceof NavigationEnd)  
    .subscribe(e => {    
      this.pageurl = e; 
      console.log("Page Url: ", this.pageurl);
    });

    this.route.params.subscribe(params=>{
      console.log("Params....", params);
    })

   }

  ngAfterViewInit() {
    this.cartsValues = this.child.cartvalue;
    console.log("Received,..", this.cartsValues);
    console.log("Datttta", this.data);
    console.log("SHOPDATA...>>", this.shopData);
    console.log("ShopIndex", this.ShopIndex);
  }
  
  receiveMessage($event) {
    this.cartedvalue = $event;
    this.wishlist = this.cartedvalue.wish;
    this.carts = this.cartedvalue.cart;
    console.log("Wishlist....", this.wishlist, this.carts);

    console.log("Receive message: event:-", this.cartedvalue);
  }

}
