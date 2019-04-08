import { TestBed } from '@angular/core/testing';

import { CultureConverterService } from './culture-converter.service';

describe('CultureConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CultureConverterService = TestBed.get(CultureConverterService);
    expect(service).toBeTruthy();
  });
});
