import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';
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
  proponente: string ="";
  tipoSolicitud: string ="";
  modalidad: string ="";
  lineaInvestigacion: string ="";

  proponentes: ProponenteModel[]= [];
  tipoSolicitudes: TipoSolicitudModel[] = [];
  modalidades: ModalidadModel[] = [];
  lineasInvestigacion: LineaInvestigacionModel[] = [];
  recordList: SolicitudModel[] = [];

  constructor(
    private solicitudService: SolicitudService,
    private router: Router,
    private route: ActivatedRoute,
    private bussinessService: BussinessService,
    private tipoSolicitudService: TipoSolicitudService,
    private modalidadService: ModalidadService,
    private lineaInvestigacionService: LineaInvestigacionService
  ) { }

  ngOnInit(): void {
    this.ObtenerReportes();
    this.InitSearch();
  }

  ObtenerReportes(){
    let _id = this.route.snapshot.params["_id"];
    this.solicitudService.BuscarRegistro(_id).subscribe({
      next: (data: SolicitudModel) => {

        if(data._id &&
          data.archivo &&
          data.descripcion && 
          data.fecha && 
          data.id_proponente && 
          data.id_lineaInvestigacion && 
          data.id_modalidad && 
          data.id_tipoSolicitud &&
          data.nombreTrabajo){

            this.id = data._id;
            this.archivo = data.archivo;
            this.descripcion = data.descripcion;
            this.fecha = data.fecha;
            this.proponente = data.id_proponente;
            this.lineaInvestigacion = data.id_lineaInvestigacion;
            this.modalidad = data.id_modalidad;
            this.tipoSolicitud = data.id_tipoSolicitud;
            this.nombreTrabajo = data.nombreTrabajo;

            console.log(this.BuscarTipoSolicitud(data.id_tipoSolicitud));
            console.log(this.tipoSolicitudes);
        }

        
      }
    })
  }

  RemoveSolicitud(){
    //Llamado al servicio de identificacion de usuario
    this.solicitudService.RemoveSolicitud(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/solicitud/listar-solicitud"])
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    
  }

  BuscarProponente(id: string): string {
    let nombre = ""
    for(let i of this.proponentes){
      if(i._id === id){
        if(i.nombre && i.apellidos){
          nombre = i.nombre + " " +  i.apellidos
        }
      }
    }
    return nombre
  }

  BuscarTipoSolicitud(id: string): string {
    let nombre = ""
    for(let i of this.tipoSolicitudes){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }

  BuscarModalidad(id: string): string {
    let nombre = ""
    for(let i of this.modalidades){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }

  BuscarLineaInvestigacion(id: string): string {
    let nombre = ""
    for(let i of this.lineasInvestigacion){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }

  InitSearch(){
    this.bussinessService.getRecordProponente().subscribe({
      next: (data: ProponenteModel[])=>{
        this.proponentes = data
      }
    })

    this.tipoSolicitudService.getRecord().subscribe({
      next: (data: TipoSolicitudModel[])=>{
        this.tipoSolicitudes = data
      }
    })

    this.modalidadService.getRecord().subscribe({
      next: (data: ModalidadModel[])=>{
        this.modalidades = data
      }
    })

    this.lineaInvestigacionService.getRecord().subscribe({
      next: (data: LineaInvestigacionModel[])=>{
        this.lineasInvestigacion = data
      }
    })
  }

}
