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
  @Input() carts: string;
  public message1;
  constructor(public service: UserService, public router: Router, public shop: ShopsService) { 
    
  }

  ngOnInit() {
    
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigateByUrl('/');
  }

  
}
