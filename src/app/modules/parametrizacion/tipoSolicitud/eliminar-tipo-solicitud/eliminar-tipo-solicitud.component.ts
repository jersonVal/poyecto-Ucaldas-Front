import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-tipo-solicitud',
  templateUrl: './eliminar-tipo-solicitud.component.html',
  styleUrls: ['./eliminar-tipo-solicitud.component.css']
})
export class EliminarTipoSolicitudComponent implements OnInit {

  id: string="";
  formato: string="";
  nombre: string="";
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoSolicitudService: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  EliminarTipoSolicitud(){
    //Llamado al servicio de identificacion de usuario
    this.tipoSolicitudService.EliminarTipoSolicitud(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    this.router.navigate(["/parametrizacion/tipo-solicitud/listar-tipo-solicitud"])
    
  }
  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.tipoSolicitudService.BuscarRegistro(_id).subscribe({
      next: (data: TipoSolicitudModel) => {
        console.log(data);
        
        if(data._id && data.nombre && data.formato ){
          this.id = data._id;
          this.formato = data.formato;
          this.nombre = data.nombre;
        }
      }
    })
  }

}
