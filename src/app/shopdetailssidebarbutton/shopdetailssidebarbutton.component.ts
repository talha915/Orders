import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopdetailsService } from '../shopdetails.service';

@Component({
  selector: 'app-shopdetailssidebarbutton',
  templateUrl: './shopdetailssidebarbutton.component.html',
  styleUrls: ['./shopdetailssidebarbutton.component.css']
})
export class ShopdetailssidebarbuttonComponent implements OnInit {

  public cartvalue;
  public wishlist;


  @Output() messageEvent = new EventEmitter<string>();

  constructor(public detailService: ShopdetailsService) { }

  ngOnInit() {
  }

  cartList(){
    console.log("Cart value: ", this.cartvalue);
  }

  wishList(){
    this.wishlist = "Added";
    console.log("this.wishlist....!!", this.cartvalue);
    this.detailService.setData(this.cartvalue);
  }

  sendMessage() {
    
    this.messageEvent.emit(this.wishlist);
    console.log("Wishlist", this.wishlist);
  }
}
