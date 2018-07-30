import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsmallimageComponent } from './shopsmallimage.component';

describe('ShopsmallimageComponent', () => {
  let component: ShopsmallimageComponent;
  let fixture: ComponentFixture<ShopsmallimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsmallimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsmallimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
