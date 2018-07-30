import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailssidebarbuttonComponent } from './shopdetailssidebarbutton.component';

describe('ShopdetailssidebarbuttonComponent', () => {
  let component: ShopdetailssidebarbuttonComponent;
  let fixture: ComponentFixture<ShopdetailssidebarbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdetailssidebarbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailssidebarbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
