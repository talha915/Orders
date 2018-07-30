import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopsmallimage',
  templateUrl: './shopsmallimage.component.html',
  styleUrls: ['./shopsmallimage.component.css']
})
export class ShopsmallimageComponent implements OnInit {

  constructor() { }

  @Input() smallimage : string;
  ngOnInit() {
  }

}
