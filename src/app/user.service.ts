import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn;
  
  constructor(public router: Router) {
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
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
