import { TestBed } from '@angular/core/testing';

import { LineagraficaencuestaService } from './lineagraficaencuesta.service';

describe('LineagraficaencuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineagraficaencuestaService = TestBed.get(LineagraficaencuestaService);
    expect(service).toBeTruthy();
  });
});
