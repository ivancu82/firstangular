import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RickMortyService } from './rick-morty.service';

describe('RickMortyService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: RickMortyService = TestBed.get(RickMortyService);
    expect(service).toBeTruthy();
  });
});
