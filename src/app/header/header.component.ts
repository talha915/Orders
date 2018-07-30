import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ShopsService } from '../Services/shops.service';
import { ShopdetailsService } from '../shopdetails.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public wishlistData;
  public cartList;
  @Input() message: string;
  @Input() wishlist: string;
  
  constructor(public service: UserService, public router: Router, public shop: ShopsService,
  public detailsService: ShopdetailsService) { 
    //this.cartList = this.shop.getData();
    this.wishlistData = this.detailsService.getData();

  }

  ngOnInit() {
    console.log("WishListData", this.wishlistData);
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigateByUrl('/');
  }

  
}
