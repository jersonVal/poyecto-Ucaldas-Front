import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { JuradoLineaInvestigacionModel } from 'src/app/modelos/reportes/jurado-linea-investigacion.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';
import { JuradoLineaInvestigacionService } from 'src/app/servicios/reportes/jurado-linea-investigacion.service';


@Component({
  selector: 'app-listar-linea-investigacion',
  templateUrl: './listar-linea-investigacion.component.html',
  styleUrls: ['./listar-linea-investigacion.component.css']
})
export class ListarLineaInvestigacionComponent implements OnInit {

  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;

  jurado: JuradoModel[] = []
  lineaInvestigacion: LineaInvestigacionModel[] = []
  recordList: JuradoLineaInvestigacionModel[] = [];

  constructor(
    private juradoLineaInvestigacionService: JuradoLineaInvestigacionService,
    private juradoService: JuradoService,
    private lineaInvestigacionService: LineaInvestigacionService
  ) { }

  ngOnInit(): void {
    this.GetRecord()

    this.juradoService.getRecord().subscribe({
      next:(data: JuradoModel[])=>{
        this.jurado = data;
      }
    })

    this.lineaInvestigacionService.getRecord().subscribe({
      next: (data: LineaInvestigacionModel[])=>{
        this.lineaInvestigacion = data;
      }
    })
  }


  GetRecord(){
    this.juradoLineaInvestigacionService.getRecord().subscribe(
      {
        next: (data: JuradoLineaInvestigacionModel[])=>{
          this.recordList = data
          console.log(this.recordList)
        },
        error: (err:any) => {
          console.log(err)
        }
      }
    )
  }

  BuscarJurado(id: string): string {
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

  BuscarLinea(id: string): string {
    let nombre = ""
    for(let i of this.lineaInvestigacion){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }
}
