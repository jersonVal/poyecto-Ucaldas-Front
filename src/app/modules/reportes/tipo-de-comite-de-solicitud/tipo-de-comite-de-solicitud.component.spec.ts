import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeComiteDeSolicitudComponent } from './tipo-de-comite-de-solicitud.component';

describe('TipoDeComiteDeSolicitudComponent', () => {
  let component: TipoDeComiteDeSolicitudComponent;
  let fixture: ComponentFixture<TipoDeComiteDeSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeComiteDeSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeComiteDeSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
