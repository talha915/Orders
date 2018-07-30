import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplargeimageComponent } from './shoplargeimage.component';

describe('ShoplargeimageComponent', () => {
  let component: ShoplargeimageComponent;
  let fixture: ComponentFixture<ShoplargeimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoplargeimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoplargeimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
