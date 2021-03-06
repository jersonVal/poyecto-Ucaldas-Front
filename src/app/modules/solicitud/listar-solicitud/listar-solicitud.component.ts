import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {

  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;
  proponentes: ProponenteModel[]= [];
  tipoSolicitudes: TipoSolicitudModel[] = [];
  modalidades: ModalidadModel[] = [];
  lineasInvestigacion: LineaInvestigacionModel[] = [];
  recordList: SolicitudModel[] = [];
  // subscripcion: Subscription = new Subscription();

  constructor(
    private solicitudService: SolicitudService,
    private bussinessService: BussinessService,
    private estadoService: EstadoService,
    private tipoSolicitudService: TipoSolicitudService,
    private modalidadService: ModalidadService,
    private lineaInvestigacionService: LineaInvestigacionService
  ) { }

  ngOnInit(): void {
    // this.subscripcion = 
    
    this.GetRecord();

    this.InitSearch();
  }

  GetRecord(){
    this.solicitudService.getRecord().subscribe(
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
