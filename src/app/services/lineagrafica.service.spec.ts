import { TestBed } from '@angular/core/testing';

import { LineagraficaService } from './lineagrafica.service';

describe('LineagraficaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineagraficaService = TestBed.get(LineagraficaService);
    expect(service).toBeTruthy();
  });
});
