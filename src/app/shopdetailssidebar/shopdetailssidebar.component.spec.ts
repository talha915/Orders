import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailssidebarComponent } from './shopdetailssidebar.component';

describe('ShopdetailssidebarComponent', () => {
  let component: ShopdetailssidebarComponent;
  let fixture: ComponentFixture<ShopdetailssidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdetailssidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailssidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
