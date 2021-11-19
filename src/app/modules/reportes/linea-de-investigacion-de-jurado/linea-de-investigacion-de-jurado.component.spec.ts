import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaDeInvestigacionDeJuradoComponent } from './linea-de-investigacion-de-jurado.component';

describe('LineaDeInvestigacionDeJuradoComponent', () => {
  let component: LineaDeInvestigacionDeJuradoComponent;
  let fixture: ComponentFixture<LineaDeInvestigacionDeJuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaDeInvestigacionDeJuradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaDeInvestigacionDeJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
