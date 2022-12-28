import { TestBed } from '@angular/core/testing';

import { EndOfPageScrollService } from './end-of-page-scroll.service';

describe('EndOfPageScrollService', () => {
  let service: EndOfPageScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndOfPageScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
