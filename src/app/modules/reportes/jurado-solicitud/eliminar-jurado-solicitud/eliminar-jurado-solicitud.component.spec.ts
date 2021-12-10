import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarJuradoSolicitudComponent } from './eliminar-jurado-solicitud.component';

describe('EliminarJuradoSolicitudComponent', () => {
  let component: EliminarJuradoSolicitudComponent;
  let fixture: ComponentFixture<EliminarJuradoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarJuradoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarJuradoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
