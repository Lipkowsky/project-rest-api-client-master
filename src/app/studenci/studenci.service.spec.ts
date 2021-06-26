import { TestBed } from '@angular/core/testing';

import { StudenciService } from './studenci.service';

describe('StudenciService', () => {
  let service: StudenciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
