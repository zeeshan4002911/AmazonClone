import { TestBed } from '@angular/core/testing';

import { StarRatingService } from './star-rating.service';

describe('StarRatingService', () => {
  let service: StarRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
