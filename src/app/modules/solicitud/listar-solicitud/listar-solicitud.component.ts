import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {

  recordList: SolicitudModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private solicitudService: SolicitudService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.solicitudService.getRecord().subscribe(
      {
        next: (data: SolicitudModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
