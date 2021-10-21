import { TestBed } from '@angular/core/testing';

import { AllhttpService } from './allhttp.service';

describe('AllhttpService', () => {
  let service: AllhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
