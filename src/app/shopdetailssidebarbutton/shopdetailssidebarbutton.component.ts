import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopdetailsService } from '../shopdetails.service';
import { ShopsDetailsComponent } from '../shops-details/shops-details.component';
@Component({
  selector: 'app-shopdetailssidebarbutton',
  templateUrl: './shopdetailssidebarbutton.component.html',
  styleUrls: ['./shopdetailssidebarbutton.component.css']
})
export class ShopdetailssidebarbuttonComponent implements OnInit {

  public cartvalue;
  public wishlist;

  @Output() messageEvent = new EventEmitter<any>();
  @Output() WishlistEvent = new EventEmitter<string>();

  constructor(public detailService: ShopdetailsService) { }

  ngOnInit() {
  }

  
  changedata(){
    console.log("CHange Data.", this.cartvalue);
  }

  sendMessage() { 
    var list = {
      wish: 'Added',
      cart: this.cartvalue
    }
    this.messageEvent.emit(list);
  }
}
