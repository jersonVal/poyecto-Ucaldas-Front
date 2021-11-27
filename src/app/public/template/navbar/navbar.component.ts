import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionData } from 'src/app/modelos/session-data.model';
import {SeguridadService} from 'src/app/servicios/seguridad.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  session: boolean = false;
  subscripcion: Subscription = new Subscription();

  constructor(
    private seguridadService: SeguridadService
  ) { }

  ngOnInit(): void {
    this.subscripcion=this.seguridadService.ObtenerSesion().subscribe(
      {
        next: (data:SessionData)=>{
          this.session=data.tieneCuenta
        },
        error: (error:any)=>{

        }
      }
    );
  }

  

}
