import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteDeSolicitudComponent } from './proponente-de-solicitud.component';

describe('ProponenteDeSolicitudComponent', () => {
  let component: ProponenteDeSolicitudComponent;
  let fixture: ComponentFixture<ProponenteDeSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteDeSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteDeSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
