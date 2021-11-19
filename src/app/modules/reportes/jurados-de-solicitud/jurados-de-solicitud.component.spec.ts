import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradosDeSolicitudComponent } from './jurados-de-solicitud.component';

describe('JuradosDeSolicitudComponent', () => {
  let component: JuradosDeSolicitudComponent;
  let fixture: ComponentFixture<JuradosDeSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradosDeSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradosDeSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
