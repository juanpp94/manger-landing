import { TestBed } from '@angular/core/testing';

import { FeaturesHttpService } from './features.http.service';

describe('FeaturesHttpService', () => {
  let service: FeaturesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
