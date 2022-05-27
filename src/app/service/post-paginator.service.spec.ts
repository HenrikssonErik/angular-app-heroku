import { TestBed } from '@angular/core/testing';

import { PostPaginatorService } from './post-paginator.service';

describe('PostPaginatorService', () => {
  let service: PostPaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
