import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router, private user: UserService) {
    
  }
  
  public isLoggedIn = false;
  public email;
  public password;
  public success;
  public client_useremail = "client@gmail.com";
  public client_password = "client";
  public href: string = "";
  
  ngOnInit() {
    // this.router.events  
    // .filter(event => event instanceof NavigationEnd)  
    // .subscribe(e => {    
    //   console.log("E",e);
    // });
  }

  login() {
    if(this.email === this.client_useremail && this.password === this.client_password) {
      this.isLoggedIn = !this.isLoggedIn;
      this.user.setUserLoggedIn();
      this.success =  "Logged In Successfully";
      console.log("Login success: ",this.success);
      this.router.navigateByUrl("/Shops");
    }
    else{
      console.log("User Logged In ? :", this.isLoggedIn);
      
      this.success =  "Invalid Login or Password";
    }
  }
}
