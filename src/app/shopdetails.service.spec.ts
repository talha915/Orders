import { TestBed, inject } from '@angular/core/testing';

import { ShopdetailsService } from './shopdetails.service';

describe('ShopdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopdetailsService]
    });
  });

  it('should be created', inject([ShopdetailsService], (service: ShopdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
