import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router) { }
  public isLoggedIn = false;
  public email;
  public password;
  public client_useremail = "client@gmail.com";
  public client_password = "client";
  ngOnInit() {
  }

  login() {
    if(this.email === this.client_useremail && this.password === this.client_password) {
      this.isLoggedIn = !this.isLoggedIn;
      console.log("User Logged In ? :", this.isLoggedIn);
      this.router.navigateByUrl("/Shops");
    }
    else{
      console.log("User Logged In ? :", this.isLoggedIn);
    }
  }
}
