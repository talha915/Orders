import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopdetailsService {


  private data: Array <any>;

  constructor() { }

  setData(data){
    this.data = data;
  }

  getData(){
    return this.data;
  }
}
