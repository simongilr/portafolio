import { TestBed } from '@angular/core/testing';

import { CvsimongilService } from './cvsimongil.service';

describe('CvsimongilService', () => {
  let service: CvsimongilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvsimongilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
