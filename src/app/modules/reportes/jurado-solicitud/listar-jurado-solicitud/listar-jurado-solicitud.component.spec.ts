import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJuradoSolicitudComponent } from './listar-jurado-solicitud.component';

describe('ListarJuradoSolicitudComponent', () => {
  let component: ListarJuradoSolicitudComponent;
  let fixture: ComponentFixture<ListarJuradoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJuradoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJuradoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
