import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';
import { FacultadModel } from 'src/app/modelos/parametrizacion/facultad/facultad.model';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';
import { FacultadService } from 'src/app/servicios/parametrizacion/facultad.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {

  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;
  facultades: FacultadModel[] = [];
  recordList: DepartamentoModel[] = [];
  // subscripcion: Subscription = new Subscription();

  constructor(
    private departamentoService: DepartamentoService,
    private facultadService: FacultadService
  ) { }

  ngOnInit(): void {
    // this.subscripcion = 
    this.departamentoService.getRecord().subscribe(
      {
        next: (data: DepartamentoModel[])=>{
          this.recordList = data
        },
        error: (err: any) => {
          console.log(err)
        }
      }
    )

    this.facultadService.getRecord().subscribe({
      next: (data: FacultadModel[])=>{
        this.facultades = data
      }
    })

  }

  BuscarNombre(id: string): string {
    let nombre = ""
    for(let i of this.facultades){
      if(i._id === id){
        if(i.nombre){
          nombre = i.nombre
        }
      }
    }
    return nombre
  }

}
