import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionfooterComponent } from './accordionfooter.component';

describe('AccordionfooterComponent', () => {
  let component: AccordionfooterComponent;
  let fixture: ComponentFixture<AccordionfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
