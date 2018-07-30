import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopdetailsService {


  private subject = new Subject<any>();
  private data: Array<any>;

  constructor() { }

  setData(data: Array<any>){
    this.subject.next({text: data});
  }
 
  getData(): Observable<any>{
    return this.subject.asObservable();
  }
}
