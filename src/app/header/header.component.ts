import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ShopsService } from '../Services/shops.service';
import { ShopdetailsService } from '../shopdetails.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public wishlistData;
  public cartList;
  subscription: Subscription;
  public myData;
  @Input() message: string;
  @Input() wishlist: string;
  public message1;
  constructor(public service: UserService, public router: Router, public shop: ShopsService,
  public detailsService: ShopdetailsService) { 
    //this.cartList = this.shop.getData();
    //this.wishlistData = this.detailsService.getData();
    //this.cartList = this.detailsService.getData();
    this.subscription = this.detailsService.getData().subscribe(message1 => { 
      this.message1 = message1;
      
      console.log("message",this.message)
      console.log("this.CLothes", this.message)
    });
  }

  ngOnInit() {
    console.log("WishListData", this.wishlistData);
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigateByUrl('/');
  }

  
}
