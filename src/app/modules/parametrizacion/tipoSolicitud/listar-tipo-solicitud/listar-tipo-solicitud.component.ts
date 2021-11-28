import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';

@Component({
  selector: 'app-listar-tipo-solicitud',
  templateUrl: './listar-tipo-solicitud.component.html',
  styleUrls: ['./listar-tipo-solicitud.component.css']
})
export class ListarTipoSolicitudComponent implements OnInit {

  recordList: TipoSolicitudModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private tipoSolicitudService: TipoSolicitudService 
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.tipoSolicitudService.getRecord().subscribe(
      {
        next: (data: TipoSolicitudModel[])=>{
          this.recordList = data
        },
        error: (err: any) => {
          console.log(err)
        }
      }
    )
  }

}
