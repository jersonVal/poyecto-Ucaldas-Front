import { Component, OnInit } from '@angular/core';
import { SessionData } from 'src/app/modelos/session-data.model';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private seguridadService: SeguridadService
  ) {
   }

  ngOnInit(): void {
    this.localStorageService.EliminarSesionUsuario();
    this.seguridadService.ActualizarSesion(new SessionData());
    this.router.navigate(['/home']);
  }

}
