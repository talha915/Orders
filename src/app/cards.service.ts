import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private data: Array <any>;
  public ShopData;
  public shopObj;
  constructor() { }

  setcardData(data){
    this.data = data;
  }

  getcardData(){
    return this.data;
  }
}
