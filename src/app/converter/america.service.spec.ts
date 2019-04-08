import { TestBed } from '@angular/core/testing';

import { AmericaService } from './america.service';

describe('AmericaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmericaService = TestBed.get(AmericaService);
    expect(service).toBeTruthy();
  });
});
