import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJuradoSolicitudComponent } from './editar-jurado-solicitud.component';

describe('EditarJuradoSolicitudComponent', () => {
  let component: EditarJuradoSolicitudComponent;
  let fixture: ComponentFixture<EditarJuradoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarJuradoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarJuradoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
