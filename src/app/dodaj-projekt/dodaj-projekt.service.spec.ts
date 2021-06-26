import { TestBed } from '@angular/core/testing';

import { DodajProjektService } from './dodaj-projekt.service';

describe('DodajProjektService', () => {
  let service: DodajProjektService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodajProjektService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
