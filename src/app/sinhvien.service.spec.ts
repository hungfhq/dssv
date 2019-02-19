import { TestBed } from '@angular/core/testing';

import { SinhvienService } from './sinhvien.service';

describe('SinhvienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinhvienService = TestBed.get(SinhvienService);
    expect(service).toBeTruthy();
  });
});
