import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  recordList: EstadoModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private estadoService: EstadoService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.estadoService.getRecord().subscribe(
      {
        next: (data: EstadoModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
