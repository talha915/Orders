import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  public data;
  constructor() { }
  
  setData(data){
    this.data = data;
  }

  getData(){
    return this.data;
  }
}
