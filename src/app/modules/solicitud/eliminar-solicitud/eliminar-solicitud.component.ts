import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-solicitud',
  templateUrl: './eliminar-solicitud.component.html',
  styleUrls: ['./eliminar-solicitud.component.css']
})
export class EliminarSolicitudComponent implements OnInit {

  id: string = "";
  fecha: string = "";
  archivo: string ="";
  descripcion: string ="";
  nombreTrabajo: string ="";
  estado: string ="";
  tipoSolicitud: string ="";
  modalidad: string ="";
  lineaInvestigacion: string ="";

  constructor(
    private solicitudService: SolicitudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ObtenerReportes();
  }

  ObtenerReportes(){
    let _id = this.route.snapshot.params["_id"];
    this.solicitudService.BuscarRegistro(_id).subscribe({
      next: (data: SolicitudModel) => {

        if(data._id &&
          data.archivo &&
          data.descripcion && 
          data.fecha && 
          data.id_estado && 
          data.id_lineaInvestigacion && 
          data.id_modalidad && 
          data.id_tipoSolicitud &&
          data.nombreTrabajo){

            this.id = data._id;
            this.archivo = data.archivo;
            this.descripcion = data.descripcion;
            this.fecha = data.fecha;
            this.estado = data.id_estado;
            this.lineaInvestigacion = data.id_lineaInvestigacion;
            this.modalidad = data.id_modalidad;
            this.tipoSolicitud = data.id_tipoSolicitud;
            this.nombreTrabajo = data.nombreTrabajo;

        }
      }
    })
  }

  RemoveSolicitud(){
    //Llamado al servicio de identificacion de usuario
    this.solicitudService.RemoveSolicitud(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    this.router.navigate(["/solicitud/listar-solicitud"])
    
  }

}
