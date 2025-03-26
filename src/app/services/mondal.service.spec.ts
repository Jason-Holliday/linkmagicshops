import { TestBed } from '@angular/core/testing';

import { MondalService } from './mondal.service';

describe('MondalService', () => {
  let service: MondalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MondalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
