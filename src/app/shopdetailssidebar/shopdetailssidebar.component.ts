import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopdetailssidebar',
  templateUrl: './shopdetailssidebar.component.html',
  styleUrls: ['./shopdetailssidebar.component.css']
})
export class ShopdetailssidebarComponent implements OnInit {

  constructor() { }
  @Input() ShopIndex: string;
  ngOnInit() {
  }

}
