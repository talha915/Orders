import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn;
  
  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(){
    localStorage.setItem('login', 'True')
  }

  logout(){
    localStorage.removeItem('login')
  }

  getUserLoggedIn(){
    let variable = localStorage.getItem('login')
    if (variable){
      return true;
    }
    else{
      return false;
    }
  }

}
