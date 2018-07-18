import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }
  
  public isLoggedIn = false;
  public email;
  public password;
  public admin_useremail = "admin@gmail.com";
  public admin_password = "admin";
  ngOnInit() {
  }

  login() {
    if(this.email === this.admin_useremail && this.password === this.admin_password) {
      this.isLoggedIn = !this.isLoggedIn;
      console.log("User Logged In ? :", this.isLoggedIn);
      this.router.navigateByUrl("/dashboard");
    }
    else{
      console.log("User Logged In ? :", this.isLoggedIn);
    }
  }
}
