import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shoplargeimage',
  templateUrl: './shoplargeimage.component.html',
  styleUrls: ['./shoplargeimage.component.css']
})
export class ShoplargeimageComponent implements OnInit {

  constructor() { }

  @Input() largeimage: string;

  ngOnInit() {
  }
  
}
