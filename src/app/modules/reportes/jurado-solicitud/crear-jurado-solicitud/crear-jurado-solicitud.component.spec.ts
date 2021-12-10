import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJuradoSolicitudComponent } from './crear-jurado-solicitud.component';

describe('CrearJuradoSolicitudComponent', () => {
  let component: CrearJuradoSolicitudComponent;
  let fixture: ComponentFixture<CrearJuradoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJuradoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJuradoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
