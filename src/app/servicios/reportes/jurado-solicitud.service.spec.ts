import { TestBed } from '@angular/core/testing';

import { JuradoSolicitudService } from './jurado-solicitud.service';

describe('JuradoSolicitudService', () => {
  let service: JuradoSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuradoSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
