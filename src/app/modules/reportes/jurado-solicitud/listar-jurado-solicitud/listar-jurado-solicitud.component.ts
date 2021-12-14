import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { JuradoSolicitudModel } from 'src/app/modelos/reportes/jurado-solicitud.model';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';
import { JuradoSolicitudService } from 'src/app/servicios/reportes/jurado-solicitud.service';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';


@Component({
  selector: 'app-listar-jurado-solicitud',
  templateUrl: './listar-jurado-solicitud.component.html',
  styleUrls: ['./listar-jurado-solicitud.component.css']
})
export class ListarJuradoSolicitudComponent implements OnInit {


  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;

  solicitud: SolicitudModel[] = []
  jurado: JuradoModel[] = []
  recordList: JuradoSolicitudModel[] = [];
  estado: EstadoModel[] = []


  constructor(
    private juradoSolicitudService: JuradoSolicitudService,
    private juradoService: JuradoService,
    private solicitudService: SolicitudService,
    private estadoService: EstadoService
  ) { }

  ngOnInit(): void {
    this.GetRecord()
    
    this.solicitudService.getRecord().subscribe(
      {
        next: (data: SolicitudModel[])=>{
          this.solicitud = data
        }
      }
    )
    this.juradoService.getRecord().subscribe(
      {
        next: (data: JuradoModel[])=>{
          this.jurado = data
        }
      }
    )

    this.estadoService.getRecord().subscribe({
      next: (data: EstadoModel[]) => {
        this.estado = data
      }
    })
  }

  GetRecord(){
    this.juradoSolicitudService.getRecord().subscribe(
      {
        next: (data: JuradoSolicitudModel[])=>{
          this.recordList = data
        },
        error: (err:any) => {
          console.log(err)
        }
      }
    )
  }

  BuscarNombreJurado(id: string): string {
    let nombre = ""
    for(let i of this.jurado){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }

  BuscarEstado(id: string): string {
    let nombre = ""
    for(let i of this.estado){
      if(i._id === id){
        if(i.tipo){
          nombre = i.tipo
        }
      }
    }
    return nombre
  }

  BuscarApellidosJurado(id: string): string {
    let apellidos = ""
    for(let i of this.jurado){
      if(i._id === id){
        if(i.apellidos){
          apellidos = i.apellidos
        }
      }
    }
    return apellidos
  }

  BuscarNombreSolicitud(id: string): string {
    let nombreTrabajo = ""
    for(let i of this.solicitud){
      if(i._id === id){
        if(i.nombreTrabajo){
          nombreTrabajo = i.nombreTrabajo
        }
      }
    }
    return nombreTrabajo
  }

}
