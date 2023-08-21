import { TestBed } from '@angular/core/testing';

import { BesoinFormationService } from './besoin-formation.service';

describe('BesoinFormationService', () => {
  let service: BesoinFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BesoinFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
