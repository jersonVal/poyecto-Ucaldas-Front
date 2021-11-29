import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';
import { TipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/tipo-vinculacion.model';
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';
import { TipoVinculacionService } from 'src/app/servicios/parametrizacion/tipo-vinculacion.service';

@Component({
  selector: 'app-listar-proponente',
  templateUrl: './listar-proponente.component.html',
  styleUrls: ['./listar-proponente.component.css']
})
export class ListarProponenteComponent implements OnInit {

  departamentos: DepartamentoModel[] = []
  tipoVinculacion: TipoVinculacionModel[] = []
  recordList: ProponenteModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private bussinessService: BussinessService,
    private tipoVinculacionService: TipoVinculacionService,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.bussinessService.getRecordProponente().subscribe(
      {
        next: (data: ProponenteModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
    this.departamentoService.getRecord().subscribe(
      {
        next: (data: DepartamentoModel[])=>{
          this.departamentos = data
        }
      }
    )
    this.tipoVinculacionService.getRecord().subscribe(
      {
        next: (data: TipoVinculacionModel[])=>{
          this.tipoVinculacion = data
        }
      }
    )
  }

  BuscarNombreDepartamento(id: string): string {
    let nombre = ""
    for(let i of this.departamentos){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }

  BuscarNombreTipoVinculacion(id: string): string {
    let nombre = ""
    for(let i of this.tipoVinculacion){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }

}
