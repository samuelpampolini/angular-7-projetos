import { TestBed } from '@angular/core/testing';

import { ConversorService } from './conversor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConversorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConversorService
    ],
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ConversorService = TestBed.get(ConversorService);
    expect(service).toBeTruthy();
  });
});
