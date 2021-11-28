import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {

  recordList: DepartamentoModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.departamentoService.getRecord().subscribe(
      {
        next: (data: DepartamentoModel[])=>{
          this.recordList = data
        },
        error: (err: any) => {
          console.log(err)
        }
      }
    )
  }

}
