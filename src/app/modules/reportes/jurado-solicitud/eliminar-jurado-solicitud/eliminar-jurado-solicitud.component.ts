import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoSolicitudModel } from 'src/app/modelos/reportes/jurado-solicitud.model';
import { JuradoSolicitudService } from 'src/app/servicios/reportes/jurado-solicitud.service';


declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-jurado-solicitud',
  templateUrl: './eliminar-jurado-solicitud.component.html',
  styleUrls: ['./eliminar-jurado-solicitud.component.css']
})
export class EliminarJuradoSolicitudComponent implements OnInit {

  id: string = "";
  id_solicitudJuradoResultado: string = "";
  id_jurado: string = "";
  fechaInvitacion: string = "";
  fechaRespuesta: string = "";
  observaciones: string = "";
  id_estado: string = "";


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private juradoSolicitudService: JuradoSolicitudService,
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  EliminarSolicitudJurado() {
    //Llamado al servicio de identificacion de usuario
    this.juradoSolicitudService.EliminarSolicitudJurado(this.id).subscribe({
      next: (data: any) => {
        OpenGeneralModal('Eliminado con Exito')
      },
      error: (error: any) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    this.router.navigate(["/reportes/jurado-solicitud/listar-jurado-solicitud"])

  }
  BuscarRegistro() {
    let _id = this.route.snapshot.params["_id"];
    this.juradoSolicitudService.BuscarRegistro(_id).subscribe({
      next: (data: JuradoSolicitudModel) => {
        console.log(data);

        if (data._id && data.id_solicitudJuradoResultado && data.fechaInvitacion && (data.fechaRespuesta || data.fechaRespuesta==="") && data.id_jurado && data.observaciones && data.id_estado ) {
          this.id = data._id
          this.id_solicitudJuradoResultado = data.id_solicitudJuradoResultado
          this.id_jurado = data.id_jurado
          this.fechaInvitacion= data.fechaInvitacion
          this.fechaRespuesta=data.fechaRespuesta
          this.observaciones = data.observaciones
          this.id_estado = data.id_estado
        }
      }
    })
  }

}
