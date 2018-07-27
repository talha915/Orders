import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { shop } from '../Data/Shop';
@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  private subject = new Subject<any>();
  private data: Array <any>;
  public ShopData;
  public shopObj;
  constructor() { }
  
  setData(data){
    this.data = data;
  }

  getData(){
    return this.data;
  }
  
  // getObject(){
  //   this.ShopData = shop;
  //   this.shopObj = this.ShopData[this.data];
  // }
 
}
