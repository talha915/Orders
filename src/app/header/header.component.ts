import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() message: string;
  @Input() wishlist: string;
  constructor(public service: UserService, public router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigateByUrl('/');
  }
}
